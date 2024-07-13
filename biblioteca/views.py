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
    Libros = Libro.objects.select_related('id_autor').all()
    Navbar = Navbars.objects.all()
    context = {
        "Navbar": Navbar,
        "Libros": Libros,
    }
    return render(request, 'biblioteca/libros.html', context)

def autores(request):
    Autores = Autor.objects.all()
    Navbar = Navbars.objects.all()
    context = {
        "Navbar": Navbar,
        "Autores" : Autores
    }
    return render (request, 'biblioteca/autores.html', context)

def categorias(request):
    Lista = Lista_categorias.objects.all()
    Navbar = Navbars.objects.all()
    context = {
        "Navbar": Navbar,
        "Lista": Lista
    }
    return render (request, 'biblioteca/categorias.html', context)