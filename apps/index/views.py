import dropbox 
import os
import requests
import json
from django.shortcuts import render
from apps.proyects.models import Products
from apps.community.models import Community
from django.core.exceptions import ObjectDoesNotExist
from django.views.defaults import page_not_found, server_error

def index(request):

	try:
		queryset_list_proyect = Products.objects.filter(id__isnull=False).latest('id')
	except ObjectDoesNotExist:
		queryset_list_proyect = None

	try:	
		queryset_list_community = Community.objects.filter(id__isnull=False).latest('id')
	except ObjectDoesNotExist:
		queryset_list_community = None

	context={
 		"object_list_proyect" : queryset_list_proyect,
 		"object_list_community" : queryset_list_community,
	}
	return render(request, 'base/index.html', context)

def error_404(request):
	return render(request, '404.html', status=404)

def error_500(request):
	return render(request, '500.html', status=500)