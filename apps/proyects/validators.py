from django.core.validators import URLValidator
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


my_url =  URLValidator()

def valid_extension_image(value):

	valueLower = value.lower()

	if "." in valueLower:

		image_url = valueLower.split('.')[1]

		extecions_image = ["jpg", "png", "jpeg", "heif", "hevc"]

		if image_url not in extecions_image:
			raise ValidationError(_("Esta imagen tiene una extencion incorrecta "), params={'valueLower':valueLower},)

	else:
		raise ValidationError(_("tu imagen no contiene una extencion"), params={'valueLower':valueLower},)
	
	return valueLower
	


def valid_extension_project(value):

	valueLower = value.lower()
	
	if "." in valueLower:

		project_url = valueLower.split('.')[1]

		extecions_project=["zip","rar"]

		if project_url not in extecions_project:

			raise ValidationError(_("El proyecto debe estar comprimido - tu archivo debe tener un nombre correcto y sin caracteres especiales"), params={'valueLower':valueLower},)
	
	else:
		raise ValidationError(_("tu archivo no contiene una extencion"), params={'valueLower':valueLower},)
	
	return valueLower


def valid_extension_social_facebook(value):

	if "://" in value:

		url_social = value.split('://')[1]

		sociales_names = "facebook"

		if sociales_names not in url_social:
			print('Error name')
			raise ValidationError(_("la url no pertenece a la red social: %(value)s"), params={'value':value},)
		else:
			try:
				my_url(value)
			except ValidationError:
				print("URL Erronia")
				raise ValidationError(_("Esta URL es Invalida: %(value)s"), params={'value':value},)
	else:
		print("Error URL")
		raise ValidationError(_("no es una URL: %(value)s"), params={'value':value},)

def valid_extension_social_twitter(value):

	if "://" in value:

		url_social = value.split('://')[1]

		sociales_names = "twitter"

		if sociales_names not in url_social:

			print('Error name')
			raise ValidationError(_("la url no pertenece a la red social: %(value)s"), params={'value':value},)
		else:
			try:
				my_url(value)
			except ValidationError:
				print("URL Erronia")
				raise ValidationError(_("Esta URL es Invalida: %(value)s"), params={'value':value},)
	else:

		print("Error URL")
		raise ValidationError(_("no es una URL: %(value)s"), params={'value':value},)

def valid_extension_social_google(value):

	if "://" in value:

		url_social = value.split("://")[1]

		sociales_names = "plus.google"

		if sociales_names not in url_social:
			print('Error name')
			raise ValidationError(_("la url no pertenece a la red social: %(value)s"), params={'value':value},)
		else:
			try:
				my_url(value)
			except ValidationError:
				print("URL Erronia")
				raise ValidationError(_("Esta URL es Invalida: %(value)s"), params={'value':value},)
	else:
		print("Error URL")
		raise ValidationError(_("no es una URL: %(value)s"), params={'value':value},)

def valid_extension_social_youtube(value):

	if "://" in value:

		url_social = value.split("://")[1]

		sociales_names = "youtube"

		if sociales_names not in url_social:
			print('Error name')
			raise ValidationError(_("la url no pertenece a la red social: %(value)s"), params={'value':value},)
		else:
			try:
				my_url(value)
			except ValidationError:
				print("URL Erronia")
				raise ValidationError(_("Esta URL es Invalida: %(value)s"), params={'value':value},)
	else:
		print("Error URL")
		raise ValidationError(_("no es una URL: %(value)s"), params={'value':value},)

def valid_extension_social_linkedin(value):

	if "://" in value:

		url_social = value.split("://")[1]

		sociales_names = "linkedin"

		if sociales_names not in url_social:
			print('Error name')
			raise ValidationError(_("la url no pertenece a la red social: %(value)s"), params={'value':value},)
		else:
			try:
				my_url(value)
			except ValidationError:
				print("URL Erronia")
				raise ValidationError(_("Esta URL es Invalida: %(value)s"), params={'value':value},)
	else:
		print("Error URL")
		raise ValidationError(_("no es una URL: %(value)s"), params={'value':value},)
