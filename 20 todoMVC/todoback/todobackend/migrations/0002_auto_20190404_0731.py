# Generated by Django 2.2 on 2019-04-04 07:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todobackend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mission',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
