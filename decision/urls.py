from django.conf.urls import url
from django.urls import path

from . import views

urlpatterns = [
    path('', views.begin, name = 'decision-begin'),
    path('home/', views.home, name = 'decision-home'),
    path('summary/', views.summary, name = 'decision-summary'),
    path('currentSession/', views.startTrauma, name='startTrauma'),
    url(r'^setItem/$', views.setItem, name='setItem'),
    url(r'^getPerfusion/$', views.getPerfusion, name='getPerfusion'),
    url(r'^getETCO2/$', views.getETCO2, name='getETCO2'),
]

