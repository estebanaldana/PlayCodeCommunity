from django.conf.urls import url
from django.contrib.auth.decorators import login_required

from apps.proyects.views import ProyectList, CreateProyect, Details

urlpatterns=[
	url(r'^community$', ProyectList, name='proyects'),
	url(r'^project$', login_required(CreateProyect.as_view()), name='upload_proyect'),
	url(r'^details$', login_required(Details), name='details_proyects'),
]