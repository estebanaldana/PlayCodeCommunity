# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-04-14 22:33
from __future__ import unicode_literals

import apps.community.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='community',
            name='image',
            field=models.CharField(max_length=100, null=True, validators=[apps.community.validators.valid_extension_image]),
        ),
    ]
