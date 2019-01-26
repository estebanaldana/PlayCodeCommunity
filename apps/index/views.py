from django.shortcuts import render
from apps.proyects.models import Products
from apps.community.models import Community
from django.core.exceptions import ObjectDoesNotExist

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

def cv(request):
	return render(request, 'cv/cv.html')

def pdp(request):
	return render(request, 'politica_privacidad/pdp.html')

def tyc(request):
	return render(request, 'terminos_condiciones/tyc.html')

def pcookies(request):
	return render(request, 'politica_cookies/pcookies.html')
	