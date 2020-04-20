from django.conf.urls import url
from django.urls import path

from . import views

urlpatterns = [
	path('', views.initiate, name = 'decision-initiate'),
    path('begin/', views.begin, name = 'decision-begin'),
    path('home/', views.home, name = 'decision-home'),
    path('summary/', views.summary, name = 'decision-summary'),
    path('currentSession/', views.startTrauma, name='startTrauma'),

    url(r'^populateSummary/$', views.populateSummary, name='populateSummary'),
    url(r'^savePatientInfo/$', views.savePatientInfo, name='savePatientInfo'),

    url(r'^setItem/$', views.setItem, name='setItem'),

    url(r'^getVitals/$', views.populateSummary, name='populateSummary'),

    url(r'^checkAlerts/$', views.checkAlerts, name='checkAlerts'),
]

