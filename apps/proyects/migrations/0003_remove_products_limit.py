# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-04-08 09:03
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('proyects', '0002_products_limit'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='products',
            name='limit',
        ),
    ]
