from django.http import HttpResponse, JsonResponse, HttpResponseNotModified
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Session
from django.core import serializers

# Create your views here.
def home(request):
	return render(request, 'decision/home.html')

def begin(request):
	return render(request, 'decision/begin.html')

def summary(request):
	return render(request, 'summary/main.html', {'title': 'Trauma Overview'})

def startTrauma(request):
	newSession = Session(id='100');
	newSession.save()
	return render(request, 'decision/home.html')

@csrf_exempt
def setItem(request):
	if request.method == 'POST':
		key = request.POST.get('step', None)
		valueNew = request.POST.get('value', None)
		dbTable = Session.objects.get(id="100")
		dbTable.__setattr__(key, valueNew)
		dbTable.save()

		resp = HttpResponse("Saved it!")
		return resp  # Sending an success response
	else:
		return HttpResponse("Request method is not a POST")

@csrf_exempt
def getPerfusion(request):
	if request.method == 'GET':
		dbTable = Session.objects.get(id="100")
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
