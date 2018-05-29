from django.conf.urls import url
from django.contrib.auth.decorators import login_required

from apps.community.views import ComunityList, CreateCommunity, Details

urlpatterns=[
	url(r'^community$', login_required(ComunityList), name='community'),
	url(r'^speak$', login_required(CreateCommunity.as_view()), name='upload_community'),
	url(r'^details$', login_required(Details), name='details_community'),
]