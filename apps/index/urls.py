from django.conf.urls import url

from apps.index.views import index

urlpatterns = [
	url(r'^$', index, name='playcode/index'),
]