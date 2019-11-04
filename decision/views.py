from django.http import HttpResponse, JsonResponse, HttpResponseNotModified
from django.shortcuts import render
from .models import Session
import time

# Create your views here.
def home(request):
	context = {
		'sessions': Session.objects.all()
	}
	return render(request, 'decision/home.html', context)


def about(request):
	return render(request, 'decision/about.html', {'title': 'About'})

def startTimer(request):
	if request.method == 'POST':
		request.session['start time'] = time.time()
		request.session['step begun'] = request.session.get('start time')
		print(request.session.get('step begun'))
		print('start clicked')
		return HttpResponseNotModified()
	else:
		print('start failed')
		return HttpResponseNotModified()


def completeStep(request):
	if request.method == 'POST':
		request.session['step ended'] = time.time()
		print(request.session['step begun'])
		if request.session['step begun'] == request.session['start time']:
			timeElapsed = request.session['step ended'] - request.session['start time']
			request.session['step begun'] = time.time()
			print(timeElapsed)
			return HttpResponseNotModified()
		else:
			timeElapsed = request.session['step ended'] - request.session['step begun']
			request.session['step begun'] = time.time()
			print(timeElapsed)
			return HttpResponseNotModified()
	else:
		return HttpResponseNotModified()