from django.conf.urls import url
from django.contrib.auth.decorators import login_required

from apps.community.views import ComunityList, CreateCommunity, Details

urlpatterns=[
	url(r'^community$', ComunityList, name='community'),
	url(r'^speak$', login_required(CreateCommunity.as_view()), name='upload_community'),
	url(r'^details$', Details, name='details_community'),
]