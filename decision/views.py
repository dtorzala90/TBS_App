from django.shortcuts import render 
from .models import Session


# Create your views here.
def home(request):
	context = {
		'sessions': Session.objects.all()
	}
	return render(request, 'decision/home.html', context)

def about(request):
	return render(request, 'decision/about.html', {'title': 'About'})
