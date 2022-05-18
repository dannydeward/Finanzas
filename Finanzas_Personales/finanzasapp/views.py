from django.shortcuts import render, HttpResponse

# Create your views here.

def home(request):
    return render(request,'finanzasapp/home.html')

def about(request):
     return render(request,'finanzasapp/about.html')

def calculadora(request):
    return render(request,'finanzasapp/calculadora.html')



def  login(request):
      return render(request,'finanzasapp/login.html')