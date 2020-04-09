from django.http import HttpResponse, JsonResponse, HttpResponseNotModified
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Session
from django.core import serializers
import json

alertsDict = {
	'no_iv': 'false',
	'no_etco2_recorded': 'false',
	'ett_before_gcs': 'false',
	'ett_no_etco2': 'false',
	'right_chest': 'false',
	'left_chest': 'false',
	'no_etco2_measured': 'false',
	'etco2_<25': 'false',
	'ecto2_25-30': 'false',
	'etco2_40-50': 'false',
	'etco2_>50': 'false',
	'bradycardia': 'false',
	'tachycardia': 'false',
	'shock_elevated': 'false',
	'hypotensive': 'false',
	'poor perfusion' : 'false',
	'additional_piv' : 'false',
	'fluids_given' : 'false',
	'excess_fluids' : 'false',
	'type_cross' : 'false',
	'prbc' : 'false',
	'mtp' : 'false'

}
# Create your views here.
def home(request):
	return render(request, 'decision/home.html')

def begin(request):
	return render(request, 'decision/begin.html')

def summary(request):
	return render(request, 'summary/main.html', {'title': 'Trauma Overview'})

def startTrauma(request):
	return render(request, 'decision/home.html')


@csrf_exempt
def populateSummary(request):
	dbTable = Session.objects.get(id="99")

	patientInfo = {
		'age': dbTable.__getattribute__('Patient_Age'),
		'weight': dbTable.__getattribute__('Patient_Weight'),
		'history': dbTable.__getattribute__('Patient_History'),
		'addInfo': dbTable.__getattribute__('Patient_AddInfo')
	}

	return JsonResponse(patientInfo)


@csrf_exempt
def savePatientInfo(request):
	newSession = Session(id='99');

	age = request.POST.get('age', None)
	weight = request.POST.get('weight', None)
	history = request.POST.get('history', None)
	addInfo = request.POST.get('addInfo', None)

	newSession.__setattr__('Patient_Age', age)
	newSession.__setattr__('Patient_Weight', weight)
	newSession.__setattr__('Patient_History', history)
	newSession.__setattr__('Patient_AddInfo', addInfo)
	newSession.save()

	return HttpResponse('Success')


@csrf_exempt
def setItem(request):
		key = request.POST.get('key', None)
		valueNew = request.POST.get('value', None)
		dbTable = Session.objects.get(id="99")
		dbTable.__setattr__(key, valueNew)
		dbTable.save()

		resp = HttpResponse("Saved it!")
		return resp  # Sending an success response

@csrf_exempt
def checkAlerts(request):
	dbTable = Session.objects.get(id="99")
	time = int(request.GET.get('time', None));

	##Time Based Alerts
	if (time >= 2):
		etco2 = dbTable.__getattribute__('ETCO2')
		if(etco2 == "null"):
			alertsDict['no_etco2_recorded'] = 'true'
	else:
		alertsDict['no_etco2_recorded'] = 'false'

	pivCount = dbTable.__getattribute__('PIV_Count')
	centrLine = dbTable.__getattribute__('Central_Line')
	intrLine = dbTable.__getattribute__('Intraosseous_Line')

	if (time >= 10):

		if(pivCount == '0' and centrLine == "no" and intrLine == "no"):
			alertsDict['no_iv'] = 'true'

		else:
			alertsDict['no_iv'] = 'false'
			if(centrLine == "no" and intrLine == "no" and pivCount == "1"):
				alertsDict['no_iv'] = 'true'

	##Breathing Alerts

	##Vital Alerts
	hr = int(dbTable.__getattribute__('HR'))
	bp = int(dbTable.__getattribute__('BP'))
	shock = int(dbTable.__getattribute__('Shock_Level'))
	age = int(dbTable.__getattribute__('Patient_Age'))

	#Brady/Tachycardia
	if(hr < 60):
		alertsDict['bradycardia'] = 'true'
		alertsDict['tachycardia'] = 'false'
	elif(hr > 100):
		alertsDict['tachycardia'] = 'true'
		alertsDict['bradycardia'] = 'false'
	else:
		alertsDict['tachycardia'] = 'false'
		alertsDict['bradycardia'] = 'false'

	#Hypotension
	if(bp < (55 + (2*age))):
		alertsDict['hypotensive'] = 'true'
	else:
		alertsDict['hypotensive'] = 'false'

	#Elevated shock
	if(shock > 1.0):
		alertsDict['shock_elevated'] = 'true'
	else:
		alertsDict['shock_elevated'] = 'false'

	##Circulation Alerts
	ivFluids = dbTable.__getattribute__('IV_Fluid_Amount')

	#Additional PIV
	if(pivCount == "1" and centrLine == "no" and intrLine == "no"):
		alertsDict['additional_piv'] = 'true'

	else:
		alertsDict['additional_piv'] = 'false'

	#IV Fluids
	if(ivFluids == "<20mL/kg"):
		alertsDict['fluids_given'] = 'true'

	elif(ivFluids == ">20mL/kg"):
		alertsDict['fluids_given'] = 'false'
		alertsDict['excess_fluids'] = 'true'

	else:
		alertsDict['fluids_given'] = 'false'
		alertsDict['excess_fluids'] = 'false'

	return JsonResponse(alertsDict)
