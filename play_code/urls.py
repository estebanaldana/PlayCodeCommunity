"""play_code URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth.views import login, logout_then_login, password_reset, password_reset_done, password_reset_confirm, password_reset_complete
from django.conf.urls.static import static
from django.conf import settings
from django.conf.urls import handler404, handler500
from apps.index.views import error_404, error_500

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('apps.index.urls')),
    url(r'^projects/', include('apps.proyects.urls')),
    url(r'^community/', include('apps.community.urls')),
    url(r'^user/', include('apps.user.urls')),
    url(r'^login/$', login, {'template_name':'user/log_in.html'}, name='login'),
    url(r'^logout', logout_then_login, name="logout"),
    url(r'^reset/password_reset', password_reset, {'template_name':'recover_user/pass_reset_form.html', 
        'email_template_name': 'recover_user/pass_reset_email.html'}, name="password_reset"),
    url(r'^password_reset_done', password_reset_done, {'template_name':'recover_user/pass_reset_done.html'},
        name="password_reset_done"),
    url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>.+)/$', password_reset_confirm, 
        {'template_name': 'recover_user/pass_reset_confirm.html'}, name="password_reset_confirm"),
    url(r'^reset/done', password_reset_complete, {'template_name':'recover_user/pass_reset_complete.html'},
        name="password_reset_complete"),
    url(r'^api/', include('apps.api.urls')),
]

handler404 = error_404
handler500 = error_500
#if settings.DEBUG:
    #urlpatterns += static(settings.MEDIA_URL, document_root=settings.DROPBOX_ROOT_PATH)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
