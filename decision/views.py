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

def startTimer (request):
	request.session['start time'] = time.time()
	request.session['previous timestamp'] = time.time()
	print(request.session['previous timestamp'])
	return HttpResponse("Timer Started!")

def completeStep (request):
	request.session['previous timestamp'] = time.time() - request.session['previous timestamp']
	print(request.session['previous timestamp'])
	return HttpResponse("Step Completed....Timestamp logged")