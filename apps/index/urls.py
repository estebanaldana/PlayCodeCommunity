from django.conf.urls import url

from apps.index.views import index, cv, pdp, tyc, pcookies

urlpatterns = [
	url(r'^$', index, name='playcode/index'),
	url(r'cv', cv, name='cv'),
	url(r'politicadeprivacidad', pdp, name='pdp'),
	url(r'terminosycondiciones', tyc, name='tyc'),
	url(r'politicadecookies', pcookies, name='pcookies'),
]