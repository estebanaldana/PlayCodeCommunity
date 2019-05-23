import os
from django.db import models
from django.conf import settings
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from apps.proyects.validators import valid_extension_image, valid_extension_project, valid_extension_social_facebook, valid_extension_social_twitter, valid_extension_social_google, valid_extension_social_youtube, valid_extension_social_linkedin
from django.core.files.storage import FileSystemStorage

class Social(models.Model):
	socialFacebook = models.CharField(default="none", null=True, blank=True, max_length=100, validators=[valid_extension_social_facebook])
	socialTwiter = models.CharField(default="none", null=True, blank=True, max_length=100, validators=[valid_extension_social_twitter])
	socialGoogle = models.CharField(default="none", null=True, blank=True, max_length=100, validators=[valid_extension_social_google])
	socialYoutube = models.CharField(default="none", null=True, blank=True, max_length=100, validators=[valid_extension_social_youtube])
	socialLinkedin = models.CharField(default="none", null=True, blank=True, max_length=100, validators=[valid_extension_social_linkedin])

	def __str(self):
		return '{}{}{}{}{}'.format(self.socialFacebook, self.socialTwiter, self.socialGoogle, self.socialYoutube, self.socialLinkedin)

class Products(models.Model):
	user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1)
	title = models.CharField(null=True, max_length=20)
	image = models.CharField(null=True, max_length=100, validators=[valid_extension_image])
	product = models.CharField(null=True, max_length=100, validators=[valid_extension_project])
	description = models.CharField(max_length=1000)
	developer = models.CharField(max_length=20)
	timestamp = models.DateTimeField(auto_now=True, auto_now_add=False)
	sociales = models.ForeignKey(Social, null=True, blank=True, on_delete=models.CASCADE)

	class Meta:
		ordering = ["-timestamp"]	