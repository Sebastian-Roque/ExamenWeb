from django import forms

class BuscarLibroForm(forms.Form):
    buscar_titulo = forms.CharField(label='Buscar por título', max_length=200, required=False)
    buscar_genero = forms.CharField(label='Buscar por genero', max_length=200, required=False)

