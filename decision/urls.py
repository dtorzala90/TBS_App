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
    url(r'^getTypeAndCross/$', views.getTypeAndCross, name='getTypeAndCross'),
    url(r'^getBreathingRight/$', views.getBreathingRight, name='getBreathingRight'),
    url(r'^getBreathingLeft/$', views.getBreathingLeft, name='getBreathingLeft'),
    url(r'^getTransfusionPRBC/$', views.getTransfusionPRBC, name='getTransfusionPRBC'),
    url(r'^getTransfusionMTP/$', views.getTransfusionMTP, name='getTransfusionMTP'),
    url(r'^getETTCO2/$', views.getETTCO2, name='getETTCO2'),
    url(r'^getETTGCS/$', views.getETTGCS, name='getETTGCS'),
    url(r'^getShock/$', views.getShock, name='getShock'),
]

