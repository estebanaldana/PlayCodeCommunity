from django.conf.urls import url 
from apps.api.views import community_list, community_detail, projects_list, project_detail

urlpatterns=[
	url(r'^community/$', community_list),
	url(r'^community/(?P<pk>[0-9]+)/$', community_detail),
	url(r'^projects/$', projects_list),
	url(r'^projects/(?P<pk>[0-9]+)/$', project_detail),
]