from django.urls import path
from finanzasapp import views



urlpatterns = [
    path("",views.home, name='home'),
    path("about",views.about, name='about'),
    path("calculadora",views.calculadora, name='calculadora'),
    path("login",views.login, name='login'),
]
