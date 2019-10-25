from django.shortcuts import render
from .models import Post


# Create your views here.
def home(request):
	context = {
		'posts': Post.objects.all()
	}
	return render(request, 'decision/home.html', context)

def about(request):
	return render(request, 'decision/about.html', {'title': 'About'})

def airway_compromised(request):
	context = {
		'posts': Post.objects.all()
	}
	return render(request, 'decision/airway_compromised.html', context)
