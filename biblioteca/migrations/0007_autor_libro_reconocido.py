# Generated by Django 4.1.2 on 2024-07-12 23:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('biblioteca', '0006_remove_autor_apellido'),
    ]

    operations = [
        migrations.AddField(
            model_name='autor',
            name='libro_reconocido',
            field=models.CharField(default=0, max_length=100),
            preserve_default=False,
        ),
    ]
