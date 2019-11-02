from django.http import HttpResponse
from django.shortcuts import render
from .models import Post
import time

# Create your views here.
def home(request):
	context = {
		'posts': Post.objects.all()
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
		return render(request, 'decision/home.html')
	else:
		print('start failed')
		return render(request, 'decision/home.html')


def completeStep(request):
	if request.method == 'POST':
		request.session['step ended'] = time.time()
		print(request.session['step begun'])
		if request.session['step begun'] == request.session['start time']:
			timeElapsed = request.session['step ended'] - request.session['start time']
			request.session['step begun'] = time.time()
			print(timeElapsed)
			return render(request, 'decision/home.html')
		else:
			timeElapsed = request.session['step ended'] - request.session['step begun']
			request.session['step begun'] = time.time()
			print(timeElapsed)
			return render(request, 'decision/home.html')
	else:
		return render(request, 'decision/home.html')