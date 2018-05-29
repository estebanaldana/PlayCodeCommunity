from django import forms

from apps.community.models import Community


class ComForm(forms.ModelForm):

	class Meta:

		model = Community

		fields=[
			'title',
			'image',
			'description',
		]

		labels={
			'title':'Titulo',
			'image':'Imagen',
			'description':'Descripcion',
		}

		widgets={
			'title': forms.TextInput(attrs={'class':'validate', 'autocomplete':'off'}),
			'image': forms.FileInput(attrs={'required':'True' , 'type':'file' , 'name':'comimg', 'accept':'image/jpeg,image/png'}),
			'description': forms.Textarea(attrs={'class':'materialize-textarea' , 'data-length':'1000', 'title':'Maximo deves de colocar 50 caracteres'}),
		}