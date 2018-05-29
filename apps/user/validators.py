from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def validate_email(value):

	if "@" in value:

		domain = value.split('@')[1]

		domains = ["hotmail.com", "gmail.com", "outlook.com", "yahoo.com"]

		if domain not in domains:

			raise ValidationError(_("Lo sentimos, El Email es invalido, debes de registrar un Email (hotmail, gmail, outlook, yahoo)"), params={'value':value},)	
	else:

		raise ValidationError(_("Lo sentimos, falta el @"), params={'value':value},)

	return value


def validate_password(value):

	password = value

	special_characters = "[~\!@#\$%\^&\*\(\)_\+{}\":;'\[\]]"
			
	if not any(char.isupper() for char in password):
				
		raise ValidationError(_('La Contraseña debe tener al menos una mayuscula'), params={'value':value},)

	if not any(char.isdigit() for char in password):
				
		raise ValidationError(_('La Contraseña debe tener al menos un numero'), params={'value':value})

	if not any(char.isalnum() for char in password):

		raise ValidationError(_('La Contraseña debe tener al menos un caracter no alfanumerico'), params={'value':value},)

	if password.count(" ") > 0:

		raise ValidationError(_("La Contraseña no puede contener espacios en blanco"), params={'value':value},)

	if not any(char in special_characters for char in password):

		raise ValidationError(_("La Contraseña debe tener al menos un caracter especial"), params={'value':value},)

	return value