from django.conf import settings
from django.http import HttpResponseREdirect

DEFAULT_REDIRECT_URL = getattr(settings, "DEFAULT_REDIRECT_URL", "http://www.playcode.com")


def wilcard_redirect(request, path=None):
	new_url = DEFAULT_REDIRECT_URL
	if path is not None:
		new_url = DEFAULT_REDIRECT_URL +"/" +path
	return HttpResponseREdirect(new_url)