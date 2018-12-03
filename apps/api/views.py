from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from apps.community.models import Community
from apps.proyects.models import Products
from apps.api.serializers import CommunitySerializer, ProjectSerializer

@csrf_exempt
def community_list(request):
	
	if request.method == 'GET':
		community = Community.objects.all()
		serializer = CommunitySerializer(community, many=True)
		return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def community_detail(request):

	try:
		community = Community.objects.get(pk=pk)
	except Community.DoesNotExist:
		return HttpResponse(status=404)

	if request.method == 'GET':
		serializer = CommunitySerializer(community)
		return JsonResponse(serializer.data)


@csrf_exempt
def projects_list(request):

	if request.method == 'GET':
		project = Products.objects.all()
		serializer = ProjectSerializer(project, many=True)
		return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def project_detail(request):

	try:
		Products.objects.get(pk=pk)
	except Products.DoesNotExist:
		return HttpResponse(status=404)

	if request.method == 'GET':
		serializer = ProjectSerializer(project, many=True)
		return JsonResponse(serializer.data)
		project