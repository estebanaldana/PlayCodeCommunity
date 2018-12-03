from rest_framework import serializers
from apps.community.models import Community
from apps.proyects.models import Products

class CommunitySerializer(serializers.ModelSerializer):
	class Meta:
		model = Community
		fields = ('id', 'user', 'title', 'image', 'description', 'timestamp')



class ProjectSerializer(serializers.ModelSerializer):
	class Meta:
		model = Products
		fields = ('id', 'user', 'title', 'image', 'product', 'description', 'developer', 'timestamp', 'sociales')
