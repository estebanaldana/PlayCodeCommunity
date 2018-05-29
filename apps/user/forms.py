from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm 
from apps.user.validators import validate_password, validate_email

class UserForm(UserCreationForm):

	username = forms.CharField(max_length=40, label='Usuario', widget=forms.TextInput(attrs={'autocomplete':'off'}))
	first_name = forms.CharField(label='Nombre', widget=forms.TextInput(attrs={'autocomplete':'off'}))
	last_name = forms.CharField(label='Apellidos', widget=forms.TextInput(attrs={'autocomplete':'off'}))
	email = forms.CharField(label='Correo Electronico', widget=forms.TextInput(attrs={'autocomplete':'off'}), validators=[validate_email])
	password1 = forms.CharField(label='Contraseña', widget=forms.PasswordInput, validators=[validate_password])
	password2 = forms.CharField(label='Confirmar Contraseña', widget=forms.PasswordInput)

	class Meta:

		model = User

		fields=('username', 'first_name', 'last_name', 'email')
		# def email_clear(self):
			
		# 	cleaned_data = super(UserForm, self).email_clear()

		# 	email_exists = (Users.objects.filter(email = cleaned_data.get('email')).count() > 0)
		# 	email_exists = cleaned_data.get('email')

		# 	if email_exists:
		#  		raise forms.validationError("Este Email ya existe")
