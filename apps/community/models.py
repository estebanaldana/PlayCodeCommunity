from django.db import models
from django.conf import settings
from apps.community.validators import valid_extension_image
 
class Community(models.Model):
	user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1)
	title = models.CharField(null=True, max_length=20)
	image = models.CharField(null=True, max_length=100, validators=[valid_extension_image])
	description = models.CharField(null=True, max_length=1000)
	timestamp = models.DateTimeField(auto_now=True, auto_now_add=False)

	class Meta:
		ordering = ["-timestamp"]

