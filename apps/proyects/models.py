import os
import dropbox
from django.db import models
from django.conf import settings
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from apps.proyects.validators import valid_extension_image, valid_extension_project, valid_extension_social_facebook, valid_extension_social_twitter, valid_extension_social_google, valid_extension_social_youtube, valid_extension_social_linkedin
from django.core.files.storage import FileSystemStorage

#fs = FileSystemStorage(location="https://www.dropbox.com/home")

#dbxClient = dropbox.Dropbox('20l4ffW3AuAAAAAAAAAAFhBsSA_P60GaEGtXSWby-3a5aW857azqV_YS2Dhej0lc')

#directory = os.getcwd()
#unidad = "/Users"

#print(dbxClient.users_get_current_account())

class Social(models.Model):
	socialFacebook = models.CharField(null=True, max_length=100, validators=[valid_extension_social_facebook])
	socialTwiter = models.CharField(null=True, max_length=100, validators=[valid_extension_social_twitter])
	socialGoogle = models.CharField(null=True, max_length=100, validators=[valid_extension_social_google])
	socialYoutube = models.CharField(null=True, max_length=100, validators=[valid_extension_social_youtube])
	socialLinkedin = models.CharField(null=True, max_length=100, validators=[valid_extension_social_linkedin])

	def __str(self):
		return '{}{}{}{}{}'.format(self.socialFacebook, self.socialTwiter, self.socialGoogle, self.socialYoutube, self.socialLinkedin)

# def upload_location(instance, filename):
# 	resfile = ''
# 	UnidadDIR = os.path.expanduser("~")

# 	if(not os.path.isdir(UnidadDIR)):
# 		return UnidadDIR
	#directory = UnidadDIR

	# for root, dir, file in os.walk(UnidadDIR):
	# 	for name in file:
	# 		if(filename in name):
	# 			resfile = os.path.join(root,name)
	# 			break

	# result = str(resfile)
	# backfile = str("play_code_"+filename)
	# username = str(instance.user.username)
	# print(result)
	# print(instance.user.username)
	# print(filename)
	# with open(result, "rb") as f:
	# 	dbxClient.files_upload(f.read(), '/imagenes_playcode/'+username+'/'+backfile, mute = True)

	# entries = dbxClient.files_list_revisions('/imagenes_playcode/'+username+'/'+backfile, limit=30).entries
	# revisions = sorted(entries, key=lambda entry: entry.server_modified)

	# for revision in revisions:
	# 	print(revision.rev, revision.server_modified)

	# return revisions[0].rev
	#folder = "images_proyect" + str(instance.id)
	#return "%s/%s" %(folderimg, filename)

# def upload_generate(instance, filename):
# 	resfile = ''
# 	UnidadDIR = os.path.expanduser("~")

# 	if(not os.path.isdir(UnidadDIR)):
# 		return UnidadDIR
# 	#directory = UnidadDIR

# 	for root, dir, file in os.walk(UnidadDIR):
# 		for name in file:
# 			if(filename in name):
# 				resfile = os.path.join(root,name)
# 				break

# 	result = str(resfile)
# 	backfile = str(instance.user.username+'_'+filename)
# 	username = str(instance.user.username)
# 	print(result)
# 	print(instance.user.username)
# 	print(filename)
# 	with open(result,"rb") as f:
# 		dbxClient.files_upload(f.read(), '/proyects_playcode/'+username+'/'+backfile, mute = True)
	
# 	entries = dbxClient.files_list_revisions('/proyects_playcode/'+username+'/'+backfile, limit=30).entries
# 	revisions = sorted(entries, key=lambda entry: entry.server_modified)

# 	for revision in revisions:
# 		print(revision.rev, revision.server_modified)

# 	return revisions[0].rev
	#folder = "proyects" + str(instance.id)
	#return "%s/%s"  %(folderpro, filename)

class Products(models.Model):
	user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1)
	title = models.CharField(null=True, max_length=20)
	#image = models.ImageField(upload_to=upload_location, null=True, blank=True, storage=fs)
	#product = models.FileField(upload_to=upload_generate, null=True, blank=True, storage=fs)
	image = models.CharField(null=True, max_length=100, validators=[valid_extension_image])
	product = models.CharField(null=True, max_length=100, validators=[valid_extension_project])
	description = models.CharField(max_length=1000)
	developer = models.CharField(max_length=20)
	timestamp = models.DateTimeField(auto_now=True, auto_now_add=False)
	sociales = models.ForeignKey(Social, null=True, blank=True, on_delete=models.CASCADE)

	class Meta:
		ordering = ["-timestamp"]	