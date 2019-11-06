from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name = 'decision-home'),
    path('summary/', views.summary, name = 'summary'),
    path('startTimer/', views.startTimer, name='startTimer'),
    path('completeStep/', views.completeStep, name='completeStep'),
]

