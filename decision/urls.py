from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name = 'decision-home'),
    path('about/', views.about, name = 'decision-about'),
    path('airway_compromised/', views.airway_compromised, name = 'decision-airway_compromised'),
]
