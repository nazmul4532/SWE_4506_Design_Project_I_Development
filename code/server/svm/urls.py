from django.urls import path
from . import views

urlpatterns = [
     path('start/', views.svm_model.as_view(), name='svm'),
     path('start-regressor/', views.svm_model.as_view(), name='svm'),
]