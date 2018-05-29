from django import forms

from apps.proyects.models import Products, Social

class ProyForm(forms.ModelForm):

	class Meta:

		model = Products

		fields=[
			'title',
			'image',
			'product',
			'description',
			'developer',
		]

		labels={
			'title':'Titulo',
			'image':'Imagen',
			'product':'Proyecto',
			'description':'Descripcion',
			'developer':'Desarrolladores',
		}

		widgets={
			'title': forms.TextInput(attrs={'class':'validate', 'autocomplete':'off'}),
			'image': forms.FileInput(attrs={'accept':'image/jpeg,image/png', 'required':'True'}),
			'product': forms.FileInput(attrs={'accept':'.rar, .zip', 'required':'True'}),
			'description': forms.Textarea(attrs={'class':'materialize-textarea' , 'data-length':'1000', 'title':'Maximo deves de colocar 50 caracteres'}),
			'developer':  forms.TextInput(attrs={'class':'validate', 'autocomplete':'off'}),
		}


class SocialForm(forms.ModelForm):

	class Meta:

		model = Social

		fields=[
			'socialFacebook',
			'socialTwiter',
			'socialGoogle',
			'socialYoutube',
			'socialLinkedin',
		]

		labels={
			'socialFacebook':'Facebook',
			'socialTwiter':'Twitter',
			'socialGoogle':'Google+',
			'socialYoutube':'Youtube',
			'socialLinkedin':'Linkedin',
		}

		widgets={
			'socialFacebook': forms.TextInput(attrs={'class':'validate', 'autocomplete':'off'}),
			'socialTwiter': forms.TextInput(attrs={'class':'validate', 'autocomplete':'off'}),
			'socialGoogle': forms.TextInput(attrs={'class':'validate', 'autocomplete':'off'}),
			'socialYoutube': forms.TextInput(attrs={'class':'validate', 'autocomplete':'off'}),
			'socialLinkedin': forms.TextInput(attrs={'class':'validate', 'autocomplete':'off'}),
		}