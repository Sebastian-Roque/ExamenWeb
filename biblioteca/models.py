from django.db import models

# Create your models here.
class Navbars(models.Model):
    id_navbar = models.AutoField(db_column="id_navbar", primary_key=True)
    nombre = models.CharField(max_length=50, blank=False, null=False)
    url = models.CharField(max_length=100)