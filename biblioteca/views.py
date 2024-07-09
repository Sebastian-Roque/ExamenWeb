from django.shortcuts import render
from .models import *

# Create your views here.
def index(request):
    Navbar = Navbars.objects.all()
    context = {
        "Navbar": Navbar
    }
    return render (request, 'biblioteca/index.html', context)

def libros(request):
    Navbar = Navbars.objects.all()
    context = {
        "Navbar": Navbar
    }
    return render (request, 'biblioteca/libros.html', context)

def autores(request):
    Navbar = Navbars.objects.all()
    context = {
        "Navbar": Navbar
    }
    return render (request, 'biblioteca/autores.html', context)

def categorias(request):
    Navbar = Navbars.objects.all()
    context = {
        "Navbar": Navbar
    }
    return render (request, 'biblioteca/categorias.html', context)