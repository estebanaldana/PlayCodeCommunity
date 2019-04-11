from django.db import models
from django.conf import settings

class limitCommunity(models.Model):
	user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.CASCADE)
	limitContent = models.CharField(null=True, max_length=5)


class limitProject(models.Model):
	user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.CASCADE)
	limitContent = models.CharField(null=True, max_length=5)

