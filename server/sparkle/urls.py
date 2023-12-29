from django.urls import path,include
from .views import SignInView

urlpatterns = [
  path('login/',SignInView.as_view()),
]
