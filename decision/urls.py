from django.urls import path

from . import views

urlpatterns = [
    path('', views.begin, name = 'decision-begin'),
    path('home/', views.home, name = 'decision-home'),
    path('summary/', views.summary, name = 'decision-summary'),
    path('currentSession/', views.startTrauma, name='startTrauma'),
]

