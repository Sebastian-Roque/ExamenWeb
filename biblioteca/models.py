from django.db import models

# Create your models here.
class Navbars(models.Model):
    id_navbar = models.AutoField(db_column="id_navbar", primary_key=True)
    nombre = models.CharField(max_length=50, blank=False, null=False)
    url = models.CharField(max_length=100)

class Libro(models.Model):
    id_libro = models.AutoField(db_column="id_libro", primary_key=True)
    titulo = models.CharField(max_length=100, blank=False, null=False)
    anio = models.IntegerField( blank=False, null=False )
    descripcion = models.CharField(max_length= 200, blank=False, null=False)
    id_autor = models.ForeignKey('Autor', on_delete=models.CASCADE, db_column='id_autor')

class Autor(models.Model):
    id_autor = models.AutoField(db_column="id_autor", primary_key=True)
    nombre = models.CharField(max_length=100, blank=False, null=False)
    apellido = models.CharField(max_length=100, blank=False, null=False)
    nacionalidad = models.CharField(max_length=50, blank=False, null=False)
    
    