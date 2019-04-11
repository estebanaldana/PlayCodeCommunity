from django.conf.urls import url 

from apps.user.views import RegisterUser, Profile, userDataUpdate, DetailsProyect, DetailsCommunity, ProyectDelete, CommunityDelete
from apps.community.views import CommunityUser
from apps.proyects.views import ProyectUser

urlpatterns=[
	url(r'^registry$', RegisterUser.as_view(), name="registry"),
	url(r'^profile$', Profile, name="profile"),
	url(r'update$', userDataUpdate, name="update"),
	url(r'community$', CommunityUser.as_view(), name="you_community"),
	url(r'projects$', ProyectUser.as_view(), name="you_proyect"),
	url(r'^details/proj$', DetailsProyect, name='you_det_proyect'),
	url(r'^details/com$', DetailsCommunity, name='you_det_community'),
	url(r'^delete/project$', ProyectDelete, name='delete_proyect'),
	url(r'^delete/communities$', CommunityDelete, name='delete_community'),
	
]