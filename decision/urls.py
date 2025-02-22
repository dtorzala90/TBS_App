from django.conf.urls import url
from django.urls import path

from . import views

urlpatterns = [
	path('', views.initiate, name = 'decision-initiate'),
    path('begin/', views.begin, name = 'decision-begin'),
    path('home/', views.home, name = 'decision-home'),
    path('summary/', views.summary, name = 'decision-summary'),
    #path('metrics/', views.metrics, name='decision-metrics'),
    path('currentSession/', views.startTrauma, name='startTrauma'),

    url(r'^populateSummary/$', views.populateSummary, name='populateSummary'),
    url(r'^savePatientInfo/$', views.savePatientInfo, name='savePatientInfo'),

    url(r'^setItem/$', views.setItem, name='setItem'),

    url(r'^setItemAddl/$', views.setItemAddl, name='setItemAddl'),
    url(r'^setItemSimple/$', views.setItemSimple, name='setItemSimple'),

    url(r'^getVitals/$', views.populateSummary, name='populateSummary'),

    url(r'^checkAlerts/$', views.checkAlerts, name='checkAlerts'),

    url(r'^getData/$', views.getData, name='getData'),
]

