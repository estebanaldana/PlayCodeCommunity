# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-04-08 09:03
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('community', '0003_community_limit'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='community',
            name='limit',
        ),
    ]
