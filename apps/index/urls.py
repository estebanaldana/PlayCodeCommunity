from django.conf.urls import url

from apps.index.views import index, cv, pdp, tyc, limitContent

urlpatterns = [
	url(r'^$', index, name='playcode/index'),
	url(r'cv', cv, name='cv'),
	url(r'privacy', pdp, name='pdp'),
	url(r'tos', tyc, name='tyc'),
	url(r'limitcontent', limitContent, name='lc'),
]