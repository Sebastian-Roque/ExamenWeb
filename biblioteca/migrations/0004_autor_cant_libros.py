# Generated by Django 4.1.2 on 2024-07-12 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('biblioteca', '0003_alter_libro_anio'),
    ]

    operations = [
        migrations.AddField(
            model_name='autor',
            name='cant_libros',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
