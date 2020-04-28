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
	'ett_before_etco2': 'null',
	'right_chest': 'null',
	'left_chest': 'null',
	'etco2_value': 'null',
	'heart_rate': 'null',
	'shock_elevated': 'false',
	'hypotensive': 'false',
	'poor_perfusion' : 'false',
	'fluids_given' : 'null',
	'excess_fluids' : 'null',
	'consider_bolus' : 'null',
	'type_cross' : 'null',
	'suggest_prbc' : 'null',
	'suggest_mtp' : 'null'
}

historyDict = {
	'Oxygen_Supplementation_History': {'Initiated' : [],'Stopped' : []},
	'Bag_Mask_History': {'Initiated' : [],'Stopped' : []},
	'LMA_History': {'Initiated' : [], 'Achieved': [], 'Removed' : []},
	'ETT_History': {'Initiated' : [], 'Achieved': [], 'Removed' : []},
	'Difficult_Airway_History': {'Initiated' : [], 'Achieved': [], 'Removed' : []},
	'Surgical_Airway_History': {'Initiated' : [], 'Achieved': [], 'Removed' : []},
	'ETCO2_History': {},
	'HR_History': {},
	'BP_History': {},
	'GCS_History': {},
	'GCS_Motor_History': {},
	'GCS_Verbal_History': {},
	'GCS_Eye_History': {},
	'Shock_History': {},
	'Pupils_Equal_History': {},
	'Pupils_Round_History':{},
	'Pupils_Reactive_History': {},
	'Pupil_Right_History' : {},
	'Pupil_Left_History' : {},
	'Moves_Extremities_History' : {}
}

# Create your views here.
def home(request):
	return render(request, 'decision/home.html')

def begin(request):
	return render(request, 'decision/begin.html')

def summary(request):
	return render(request, 'summary/main.html', {'title': 'Trauma Overview'})

@csrf_exempt
def metrics(request):
	return render(request, 'summary/metrics.html')

def startTrauma(request):
	return render(request, 'decision/home.html')


@csrf_exempt
def populateSummary(request):
	dbTable = Session.objects.get(id="99")

	patientInfo = {
		'age': dbTable.__getattribute__('Patient_Age'),
		'weight': dbTable.__getattribute__('Patient_Weight'),
		'injury': dbTable.__getattribute__('Patient_Mechanism_Injury'),
		'preArrival': dbTable.__getattribute__('Patient_Pre_Arrival')
	}

	return JsonResponse(patientInfo)


@csrf_exempt
def savePatientInfo(request):
	newSession = Session(id='99');

	age = request.POST.get('age', None)
	weight = request.POST.get('weight', None)
	injury = request.POST.get('injury', None)
	preArrival = request.POST.get('preArrival', None)

	newSession.__setattr__('Patient_Age', age)
	newSession.__setattr__('Patient_Weight', weight)
	newSession.__setattr__('Patient_Mechanism_Injury', injury)
	newSession.__setattr__('Patient_Pre_Arrival', preArrival)
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
def updateVitalsHistory(request):
		valueNew = request.POST.get('value', None)
		historyKey = request.POST.get('historyKey', None)
		timeStamp = request.POST.get('timeStamp', None)
		dbTable = Session.objects.get(id="99")

		history = historyDict[historyKey]
		try:
			# Assumes there is a list on the key
			history[valueNew].append(timeStamp)
		except KeyError:  # If it fails, because there is no key
			history.__setitem__(valueNew, timeStamp)
		except AttributeError:  # If it fails because it is not a list
			history.__setitem__(valueNew, [history[valueNew], timeStamp])

		dbTable.__setattr__(historyKey, str(history))

		dbTable.save()

		resp = HttpResponse("Saved it!")
		return resp  # Sending an success response

@csrf_exempt
def updateAirwayHistory(request):
		step = request.POST.get('step', None)
		historyKey = request.POST.get('historyKey', None)
		timeStamp = request.POST.get('timeStamp', None)
		dbTable = Session.objects.get(id="99")

		airwayTypeHistory = historyDict[historyKey]
		stepHistory = airwayTypeHistory[step]
		stepHistory.append(timeStamp)

		dbTable.__setattr__(historyKey, str(airwayTypeHistory))

		dbTable.save()

		resp = HttpResponse("Saved it!")
		return resp  # Sending an success response

@csrf_exempt
def getData(request):
	return JsonResponse(historyDict)

@csrf_exempt
def checkAlerts(request):
	dbTable = Session.objects.get(id="99")
	time = int(request.GET.get('time', None))

	hr = dbTable.__getattribute__('HR')
	bp = dbTable.__getattribute__('BP')
	shock = dbTable.__getattribute__('Shock_Level')
	age = dbTable.__getattribute__('Patient_Age')
	etco2 = dbTable.__getattribute__('ETCO2')
	gcs = dbTable.__getattribute__('GCS')
	ivf = int(dbTable.__getattribute__('IVF_Total'))

	##Time Based Alerts
	if (time >= 120 and alertsDict['no_etco2_recorded'] != 'false'):
		if(etco2 == "null"):
			alertsDict['no_etco2_recorded'] = 'true'
		else:
			alertsDict['no_etco2_recorded'] = 'false'

	pivCount = dbTable.__getattribute__('PIV_Count')
	centrLine = dbTable.__getattribute__('Central_Line')
	intrLine = dbTable.__getattribute__('Intraosseous_Line')

	if (time >= 300 and alertsDict['no_iv'] != 'false'):

		if(pivCount == "0" and centrLine == "no" and intrLine == "no"):
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
	leftChest = dbTable.__getattribute__('Left_Chest')

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
	if(ettInit != 'null' and alertsDict['ett_before_gcs'] != 'false'):
		if(gcs == 'null'):
			alertsDict['ett_before_gcs'] = 'true'
		else:
			alertsDict['ett_before_gcs'] = 'false'

	if (ettInit != 'null' and alertsDict['ett_before_etco2'] != 'false'):
		if(etco2 == 'null'):
			alertsDict['ett_no_etco2'] = 'true'
		else:
			alertsDict['ett_no_etco2'] = 'false'

	##Vital Alerts

	#Brady/Tachycardia
	if(hr != "Unknown"):
		hrInt = int(hr)
		if(hrInt < 60):
			alertsDict['heart_rate'] = 'bradycardia'
		elif(hrInt  > 100):
			alertsDict['heart_rate'] = 'tachycardia'
		else:
			alertsDict['heart_rate'] = 'null'

	#Hypotension
	if(bp != "Unknown"):
		bpint = int(bp)
		if (age != " "):
			ageInt = int(age)
			if(bpint < (55 + (2*ageInt))):
				alertsDict['hypotensive'] = 'true'
			else:
				alertsDict['hypotensive'] = 'false'
		else:
			if(bpint < (55)):
				alertsDict['hypotensive'] = 'true'
			else:
				alertsDict['hypotensive'] = 'false'

	#Elevated shock
	if(shock != "Unknown"):
		shockFloat = float(shock)
		if(shockFloat > 1.0):
			alertsDict['shock_elevated'] = 'true'
		else:
			alertsDict['shock_elevated'] = 'false'

	#Etco2 Alert
	if (etco2 != "Unknown"):

		etco2Int = int(etco2)

		if(etco2Int == 0):
			alertsDict['etco2_value'] = 'no measurement'

		elif(etco2Int < 25 ):
			alertsDict['etco2_value'] = '<25'

		elif(etco2Int >= 25 and etco2Int <= 30):
			alertsDict['etco2_value'] = '25-30'

		elif (etco2Int >= 40 and etco2Int <= 50 ):
			if(gcs != "Unknown"):
				gcsInt = int(gcs)
				if(gcsInt < 13):
					alertsDict['etco2_value'] = '40-50'
				else:
					alertsDict['etco2_value'] = 'null'
			else:
				alertsDict['etco2_value'] = 'null'

		elif(etco2Int > 50):
			alertsDict['etco2_value'] = '>50'

	else:
		alertsDict['etco2_value'] = 'null'

	##Circulation Alerts

	#Additional PIV
	if(pivCount == "1" and centrLine == "no" and intrLine == "no"):
		alertsDict['additional_piv'] = 'true'

	elif(pivCount == "2" or pivCount == ">2" or centrLine == 'yes' or intrLine == "yes"):
		alertsDict['additional_piv'] = 'false'

	#IV Fluids
	if(ivf == 0):
		alertsDict['consider_bolus'] = 'true'

	elif(ivf <= 20):
		alertsDict['fluids_given'] = 'true'
		alertsDict['consider_bolus'] = 'false'

	elif(ivf > 20):
		alertsDict['fluids_given'] = 'false'
		alertsDict['excess_fluids'] = 'true'
		alertsDict['consider_bolus'] = 'false'

	#Perfusion Alerts
	nailColor = dbTable.__getattribute__('Nail_Color')
	lipColor = dbTable.__getattribute__('Lip_Color')
	capRefill = dbTable.__getattribute__('Cap_Refill')

	if(nailColor == "white" or lipColor == "white" or capRefill == ">4sec" ):
		alertsDict['poor_perfusion'] = 'true'

	else:
		alertsDict['poor_perfusion'] = 'false'

	#Type and Cross Alert
	typeStatus = dbTable.__getattribute__('Type_Cross')

	if(typeStatus == "null"):
		alertsDict['type_cross'] = 'true'

	else:
		alertsDict['type_cross'] = 'false'

	#PRBC and MTP Alerts
	mtpStatus = dbTable.__getattribute__('Massive_Transfusion')
	prbcStatus = dbTable.__getattribute__('Transfused_PRBC')

	if(mtpStatus == 'no'):
		if (bp != "null" and int(bp) < 90):
			alertsDict['suggest_mtp'] = 'true'

		elif (shock != "null" and float(shock) > 1.2):
			alertsDict['suggest_mtp'] = 'true'

		elif (hr != "null" and int(hr) > 180):
			alertsDict['suggest_mtp'] = 'true'

		else:
			alertsDict['suggest_mtp'] = 'false'

	elif(mtpStatus == "yes"):
		alertsDict['suggest_mtp'] = 'false'

	if(prbcStatus == 'no'):
		if(bp != "null" and int(bp) < 90 ):
			alertsDict['suggest_prbc'] = 'true'

		elif(shock != "null" and float(shock) > 1.2):
				alertsDict['suggest_prbc'] = 'true'

		elif(hr != "null" and int(hr) > 180):
			alertsDict['suggest_prbc'] = 'true'

		else:
			alertsDict['suggest_prbc'] = 'false'

	elif (prbcStatus == "yes"):
		alertsDict['suggest_prbc'] = 'false'

	return JsonResponse(alertsDict)
