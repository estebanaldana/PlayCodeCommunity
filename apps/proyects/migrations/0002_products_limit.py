# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-04-07 22:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('proyects', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='limit',
            field=models.CharField(max_length=5, null=True),
        ),
    ]