# Generated by Django 4.1.2 on 2024-07-12 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('biblioteca', '0004_autor_cant_libros'),
    ]

    operations = [
        migrations.AddField(
            model_name='libro',
            name='genero',
            field=models.CharField(default=0, max_length=200),
            preserve_default=False,
        ),
    ]
