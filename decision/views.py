from django.http import HttpResponse, JsonResponse, HttpResponseNotModified
from django.shortcuts import render
from .models import Session

# Create your views here.
def home(request):
	context = {
		'posts': Session.objects.all()
	}
	return render(request, 'decision/home.html', context)

def begin(request):
	return render(request, 'decision/begin.html')

def summary(request):
	return render(request, 'summary/main.html', {'title': 'Trauma Overview'})

def startTrauma(request):
	return render(request, 'decision/home.html')
