from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _ 

def valid_extension_image(value):

	if "." in value:

		image_url = value.split('.')[1]

		extecions_image = ["*"]

		if image_url not in extecions_image:
			raise ValidationError(_("Esta imagen tiene una extencion incorrecta "), params={'value':value},)

	else:
		raise ValidationError(_("tu imagen no contiene una extencion"), params={'value':value},)
	
	return value