from django.http import HttpResponse, JsonResponse, HttpResponseNotModified
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Session
from django.core import serializers

# Create your views here.
def home(request):
	return render(request, 'decision/home.html', {'title': 'Decision App'})

def begin(request):
	return render(request, 'decision/begin.html', {'title': 'Start Session'})

def summary(request):
	return render(request, 'summary/main.html', {'title': 'Summary Page'})

def startTrauma(request):
	return render(request, 'decision/home.html', {'title': 'Decision App'})


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
def getPerfusion(request):
	if request.method == 'GET':
		dbTable = Session.objects.get(id="99")
		nailBed = dbTable.__getattribute__('Nail_Bed_Color')
		lipcolor = dbTable.__getattribute__('Lip_Color')
		caprefill = dbTable.__getattribute__('Cap_Refill_Time')

		if (nailBed == "White") or (lipcolor == "White") or (caprefill == ">4"):
			resp = HttpResponse('Alert')
		else:
			resp = HttpResponse('Remove')
		return resp
	else:
		return HttpResponse("Request method is not a GET")

@csrf_exempt
def getTypeAndCross(request):
	if request.method == 'GET':
		dbTable = Session.objects.get(id="99")
		typeAndCross = dbTable.__getattribute__('Type_and_Cross')

		if (typeAndCross == "no"):
			resp = HttpResponse('Alert')
		else:
			resp = HttpResponse('Remove')
		return resp
	else:
		return HttpResponse("Request method is not a GET")

@csrf_exempt
def getBreathingRight(request):
	if request.method == 'GET':
		dbTable = Session.objects.get(id="99")
		rightChestRiseBreathSounds = dbTable.__getattribute__('Right_Chest_Rise_Breath_Sounds')

		if (rightChestRiseBreathSounds == "No"):
			resp = HttpResponse('Alert')
		else:
			resp = HttpResponse('Remove')
		return resp
	else:
		return HttpResponse("Request method is not a GET")

@csrf_exempt
def getBreathingLeft(request):
	if request.method == 'GET':
		dbTable = Session.objects.get(id="99")
		leftChestRiseBreathSounds = dbTable.__getattribute__('Left_Chest_Rise_Breath_Sounds')

		if (leftChestRiseBreathSounds == "no"):
			resp = HttpResponse('Alert')
		else:
			resp = HttpResponse('Remove')
		return resp
	else:
		return HttpResponse("Request method is not a GET")

@csrf_exempt
def getTransfusionPRBC(request):
	if request.method == 'GET':
		dbTable = Session.objects.get(id="99")
		sbp = dbTable.__getattribute__('BP')
		shock = dbTable.__getattribute__('Shock_Level')
		hr = dbTable.__getattribute__('HR')
		tprbc = dbTable.__getattribute__('Transfusion_PRBC')


		if ((tprbc == "no") and (sbp < 90 or shock  > 1.2 or hr > 180)):
			resp = HttpResponse('Alert')
		else:
			resp = HttpResponse('Remove')
		return resp
	else:
		return HttpResponse("Request method is not a GET")

@csrf_exempt
def getTransfusionMTP(request):
	if request.method == 'GET':
		dbTable = Session.objects.get(id="99")
		sbp = dbTable.__getattribute__('BP')
		shock = dbTable.__getattribute__('Shock_Level')
		hr = dbTable.__getattribute__('HR')
		mtp = dbTable.__getattribute__('Transfusion_PRBC')


		if ((mtp == "no") and (sbp < 90 or shock  > 1.2 or hr > 180)):
			resp = HttpResponse('Alert')
		else:
			resp = HttpResponse('Remove')
		return resp
	else:
		return HttpResponse("Request method is not a GET")

@csrf_exempt
def getETTGCS(request):
	if request.method == 'GET':
		dbTable = Session.objects.get(id="99")
		ett = dbTable.__getattribute__('ETT')
		gcs = dbTable.__getattribute__('GCS')

		if (ett == "initiated" and gcs == "null"):
			resp = HttpResponse('Alert')
		else:
			resp = HttpResponse('Remove')
		return resp
	else:
		return HttpResponse("Request method is not a GET")

@csrf_exempt
def getETTCO2(request):
	if request.method == 'GET':
		dbTable = Session.objects.get(id="99")
		ett = dbTable.__getattribute__('ETT')
		etco2 = dbTable.__getattribute__('ETCO2')

		if (ett == "initiated" and etco2 == "null"):
			resp = HttpResponse('Alert')
		else:
			resp = HttpResponse('Remove')
		return resp
	else:
		return HttpResponse("Request method is not a GET")

@csrf_exempt
def getShock(request):
	if request.method == 'GET':
		dbTable = Session.objects.get(id="99")
		BP_recorded = dbTable.__getattribute__('BP')
		HR_recorded = dbTable.__getattribute__('HR')
		second = request.GET.__getitem__("second")
		minute = request.GET.__getitem__("minuteTime")
		

		if (BP_recorded != "null" and HR_recorded != "null"):

			BP = float(BP_recorded)
			HR = float(HR_recorded)
			shock = abs(HR/BP)

			key = request.POST.get('step', None)
			valueNew = request.POST.get('value', None)
			dbTable = Session.objects.get(id="99")
			dbTable.__setattr__('Shock_Level', str(shock))
			dbTable.save()

			if(minute < 1):
				minute = 0

			display = "Shock Level: " + str(shock) + " at " + str(minute) + "min " + str(sec) + "sec"

			dbTable = Session.objects.get(id="99")
			dbTable.__setattr__('Shock Level Display', display)
			dbTable.save()

			if(shock > 1.0):
				resp = HttpResponse('Alert')
			else:
				resp = HttpResponse('Remove')
			return resp
		else:
			return HttpResponse('Remove')
	else:
		return HttpResponse("Request method is not a GET")

@csrf_exempt
def getNoETCO2Alert(request):
	if request.method == 'GET':
		dbTable = Session.objects.get(id="99")
		noEtco2Alert = request.GET.__getitem__('noEtco2Alert')
		etco2 = dbTable.__getattribute__('ETCO2')

		if(etco2 != "not recorded" and noEtco2Alert == "thrown"):

			resp = HttpResponse('Remove')
		else:
			resp = HttpResponse('Do Nothing')
		return resp
	else:
		return HttpResponse("Request method is not a GET")

@csrf_exempt
def getNoETTAlert(request):
	if request.method == 'GET':
		dbTable = Session.objects.get(id="99")
		timeElapsed = request.GET.__getitem__('timeElapsed')
		noETTAlert = request.GET.__getitem__('noETTAlert')
		etco2 = dbTable.__getattribute__('ETCO2')

		if(etco2 != "not recorded"):
			resp = HttpResponse(etco2)
		elif(int(timeElapsed) >= 120 and noETTAlert == "not thrown" and etco2 == "not recorded"):
			resp = HttpResponse('timer')
		else:
			resp = HttpResponse('Do Nothing')
		return resp
	else:
		return HttpResponse("Request method is not a GET")

@csrf_exempt
def getETCO2(request):
	if request.method == 'GET':
		dbTable = Session.objects.get(id="99")
		ett = dbTable.__getattribute__('ETT')
		etco2 = dbTable.__getattribute__('ETCO2')

		if (ett == "initiated" and etco2 == "not recorded"):
			resp = HttpResponse('Alert')
		else:
			resp = HttpResponse('Remove')
		return resp
	else:
		return HttpResponse("Request method is not a GET")