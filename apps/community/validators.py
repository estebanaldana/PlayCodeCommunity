from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _ 

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