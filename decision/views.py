from django.http import HttpResponse, JsonResponse, HttpResponseNotModified
from django.shortcuts import render
from .models import Post
import time

# Create your views here.
def home(request):
	context = {
		'posts': Post.objects.all()
	}
	return render(request, 'decision/home.html', context)

def begin(request):
	return render(request, 'decision/begin.html')

def summary(request):
	return render(request, 'summary/main.html', {'title': 'Trauma Overview'})

def startTimer(request):
	if request.method == 'POST':
		request.session['start time'] = time.time()
		request.session['step begun'] = request.session.get('start time')
		print(request.session.get('step begun'))
		print('start clicked')
		return render(request, 'decision/home.html')
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