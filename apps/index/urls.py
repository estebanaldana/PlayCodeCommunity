from django.conf.urls import url

from apps.index.views import index, cv

urlpatterns = [
	url(r'^$', index, name='playcode/index'),
	url(r'cv', cv, name='cv'),
]