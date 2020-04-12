from django.http import HttpResponse, JsonResponse, HttpResponseNotModified
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Session
from django.core import serializers
import json

alertsDict = {
	'no_iv': 'null',
	'no_etco2_recorded': 'null',
	'additional_piv': 'null',
	'ett_before_gcs': 'null',
	'ett_no_etco2': 'null',
	'right_chest': 'null',
	'left_chest': 'null',
	'etco2_value': 'null',
	'heart_rate': 'null',
	'shock_elevated': 'false',
	'hypotensive': 'false',
	'poor perfusion' : 'false',
	'fluids_given' : 'null',
	'excess_fluids' : 'null',
	'type_cross' : 'null',
	'suggest_prbc' : 'null',
	'suggest_mtp' : 'null'

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
	time = int(request.GET.get('time', None))

	#make sure all number values are actually integers. If not, assign null value
	try:
		hr = int(dbTable.__getattribute__('HR'))
	except ValueError:
		hr = "null"
	try:
		bp = int(dbTable.__getattribute__('BP'))
	except ValueError:
		bp = "null"
	try:
		shock = float(dbTable.__getattribute__('Shock_Level'))
	except ValueError:
		shock = "null"
	try:
		age = int(dbTable.__getattribute__('Patient_Age'))
	except ValueError:
		age = "null"
	try:
		etco2 = int(dbTable.__getattribute__('ETCO2'))
	except ValueError:
		etco2 = "null"
	try:
		gcs = int(dbTable.__getattribute__('GCS'))
	except ValueError:
		gcs = "null"

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
			if(centrLine == "no" and intrLine == "no"):
				if(pivCount == "1"):
					alertsDict['additional_piv'] = 'true'
				elif(pivCount != "0"):
					alertsDict['additional_piv'] = 'false'

	##Breathing Alerts
	ettInit = dbTable.__getattribute__('ETT_Initiated')
	rightChest = dbTable.__getattribute__('Right_Chest')
	leftChest = dbTable.__getattribute__('left_Chest')

	#Chest Sounds
	if(rightChest == 'no'):
		alertsDict['right_chest'] = 'true'
	elif(rightChest == 'yes'):
		alertsDict['right_chest'] = 'false'

	if(leftChest == 'no'):
		alertsDict['left_chest'] = 'true'
	elif(leftChest == 'yes'):
		alertsDict['left_chest'] = 'false'

	#Intubation Alerts
	if(ettInit != 'null'):
		if(gcs == 'null'):
			alertsDict['ett_before_gcs'] = 'true'
		else:
			alertsDict['ett_before_gcs'] = 'false'

		if(etco2 == 'null'):
			alertsDict['ett_no_etco2'] = 'true'
		else:
			alertsDict['ett_no_etco2'] = 'false'

	##Vital Alerts

	#Brady/Tachycardia
	if(hr != "null"):
		if(hr < 60):
			alertsDict['heart_rate'] = 'bradycardia'
		elif(hr  > 100):
			alertsDict['heart_rate'] = 'tachycardia'
		else:
			alertsDict['heart_rate'] = 'null'

	#Hypotension
	if(bp != "null"):
		if (age != "null"):
			if(bp < (55 + (2*age))):
				alertsDict['hypotensive'] = 'true'
			else:
				alertsDict['hypotensive'] = 'false'
		else:
			if(bp < (55)):
				alertsDict['hypotensive'] = 'true'
			else:
				alertsDict['hypotensive'] = 'false'

	#Elevated shock
	if(shock != "null"):
		if(shock > 1.0):
			alertsDict['shock_elevated'] = 'true'
		else:
			alertsDict['shock_elevated'] = 'false'

	#Etco2 Alert
	if (etco2 != 'null'):
		if(etco2 == 0):
			alertsDict['etco2_value'] = 'no measurement'
		elif(etco2 < 25 ):
			alertsDict['etco2_value'] = '<25'
		elif(etco2 >= 25 and etco2 <= 30):
			alertsDict['etco2_value'] = '25-30'
		elif (etco2 >= 40 and etco2 <= 50 ):
			if(gcs != "null" and gcs < 13):
				alertsDict['etco2_value'] = '40-50'
		elif(etco2 > 50):
			alertsDict['etco2_value'] = '>50'
		else:
			alertsDict['etco2_value'] = 'null'
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
		alertsDict['fluids_given'] = 'null'
		alertsDict['excess_fluids'] = 'null'

	#Perfusion Alerts
	nailColor = dbTable.__getattribute__('Nail_Color')
	lipColor = dbTable.__getattribute__('Lip_Color')
	capRefill = dbTable.__getattribute__('Cap_Refill')

	if(nailColor == "white" or lipColor == "white" or capRefill == ">4sec" ):
		alertsDict['poor perfusion'] = 'true'

	else:
		alertsDict['poor perfusion'] = 'false'

	#Type and Cross Alert
	typeStatus = dbTable.__getattribute__('Type_Cross')

	if(typeStatus == "null"):
		alertsDict['type_cross'] = 'true'

	else:
		alertsDict['type_cross'] = 'false'

	#PRBC and MTP Alerts
	mtpStatus = dbTable.__getattribute__('Massive_Transfusion')
	prbcStatus = dbTable.__getattribute__('Transfused_PRBC')

	if(mtpStatus != 'yes'):
		if(bp != "null" and shock != "null" and hr != "null"):
			if(bp < 90 or shock > 1.2 or hr > 180):
				alertsDict['suggest_mtp'] = 'true'
			else:
				alertsDict['suggest_mtp'] = 'false'
	else:
		alertsDict['suggest_mtp'] = 'false'

	if(prbcStatus != 'yes'):
		if(bp != "null" and shock != "null" and hr != "null"):
			if(bp < 90 or shock > 1.2 or hr > 180):
				alertsDict['suggest_prbc'] = 'true'
			else:
				alertsDict['suggest_prbc'] = 'false'
	else:
		alertsDict['suggest_prbc'] = 'false'

	return JsonResponse(alertsDict)
