from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name = 'decision-home'),
    path('about/', views.about, name = 'decision-about'),
    path('startTimer/', views.startTimer, name='startTimer'),
    path('completeStep/', views.completeStep, name='completeStep'),
]

