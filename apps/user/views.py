import dropbox
from django.conf import settings
from django.shortcuts import render, get_object_or_404, redirect
from django.core.urlresolvers import reverse_lazy
from django.http import HttpResponseRedirect
from django.views.generic import CreateView, ListView
from django.contrib import messages
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_protect
from django.core import signing
import json

from django.contrib.auth.models import User
from apps.user.forms import UserForm
from django.contrib.sessions.models import Session
from apps.proyects.models import Products, Social
from apps.community.models import Community

dbxClient = dropbox.Dropbox(os.environ['DROPBOX'])

@method_decorator(never_cache, name='post')
class RegisterUser(CreateView):
	model = User
	form_class = UserForm
	template_name = 'user/to_register.html'
	success_url = reverse_lazy('login')

	def post(self, request):	
		self.object = self.get_object		
		form = self.form_class(request.POST or None)
		if form.is_valid():
			register_user = form.save(commit=False)
			user = (User.objects.filter(username = form.cleaned_data.get('username')).count() > 0)
			email_exists = (User.objects.filter(email = form.cleaned_data.get('email')).count() > 0)
			if user:
				messages.error(request, 'Este Nombre de Usuario ya Existe')
				return self.render_to_response(self.get_context_data(form=form))
			if email_exists:
				messages.error(request, 'El Email ya esta Registrado')
				return self.render_to_response(self.get_context_data(form=form))
			else:
				register_user.save()
				return HttpResponseRedirect(self.get_success_url())	
		return self.render_to_response(self.get_context_data(form=form))



def Profile(request):
	try:
		_parameter_ = request.GET.get('pc')
		_session_ = Session.objects.get(pk=request.COOKIES.get('sessionid'))
		_session_id = _session_.session_key
		if _session_id == _parameter_:
			_encode_json = json.JSONEncoder().encode(_session_.get_decoded())
			__j__ = json.loads(_encode_json)
			_user_id = __j__['_auth_user_id']
			_instance_ = User.objects.get(pk=_user_id)
			_spam_ = request.user.id
			if _spam_ == _instance_.id:
				context={
					"instance":_instance_,
				}
				return render(request, 'user/profile.html', context)
			else:
				return render(request, '404.html')
		else:
			return render(request, '404.html')
	except Exception as e:
		return render(request, '404.html')
	



def DetailsProyect(request):
	try:
		_id_user_ = request.user.id
		_signing_ = str(request.GET.get('project'))
		_id_ = signing.loads(_signing_)
		_id_project_ = _id_
		instance = get_object_or_404(Products, id=_id_project_)
		_instance_user_proyect_ = instance.user.id
		if _id_user_ == _instance_user_proyect_:
			context={
				"instance": instance,
			}
			return render(request, 'user/you_details_proyects.html', context)
		else:
			return render(request, '404.html')
	except signing.BadSignature:
		return render(request, '404.html')



def DetailsCommunity(request):
	try:
		_id_user_ = request.user.id
		_signing_ = str(request.GET.get('community'))
		_id_ = signing.loads(_signing_)
		_id_community_ = _id_
		instance = get_object_or_404(Community, id=_id_community_)
		_instance_user_community_ = instance.user.id
		if _id_user_ == _instance_user_community_:
			context={
				"instance": instance,
			}
			return render(request, 'user/you_details_community.html', context)
		else:
			return render(request, '404.html')
	except signing.BadSignature:
		return render(request, '404.html')


def ProyectDelete(request):
	try:
		_id_user_ = request.user.id
		_signing_ = str(request.GET.get('remove'))
		_id_ = signing.loads(_signing_)
		_id_delete_project_ = _id_
		instance = get_object_or_404(Products, id=_id_delete_project_)
		instanceS = get_object_or_404(Social, id=_id_delete_project_)
		_instance_user_remove_project = instance.user.id
		if _id_user_ == _instance_user_remove_project:
			image = instance.image
			project = instance.product
			username = instance.user.username
			split_image = image.split('/')[5]
			split_project = project.split('/')[5]
			split_parametro_image = split_image.replace('?dl=0', '')
			split_parametro_project = split_project.replace('?dl=0', '')
			dbxClient.files_delete('/imagenes_playcode/'+username+'/'+'project'+'/'+split_parametro_image)
			dbxClient.files_delete('/proyectos_playcode/'+username+'/'+split_parametro_project)
			instance.delete()
			instanceS.delete()
			return redirect('you_proyect')
		else: 
			return render(request, '404.html')
	except signing.BadSignature:
		return render(request, '404.html')



def CommunityDelete(request):
	try:
		_id_user_ = request.user.id
		_signing_ = str(request.GET.get('remove'))
		_id_ = signing.loads(_signing_)
		_id_delete_community_ = _id_
		instance = get_object_or_404(Community, id=_id_delete_community_)
		_instance_user_remove_community = instance.user.id
		if _id_user_ == _instance_user_remove_community:
			image = instance.image
			username = instance.user.username
			split_image = image.split('/')[5]
			split_parametro_image = split_image.replace('?dl=0', '')
			dbxClient.files_delete('/imagenes_playcode/'+username+'/'+'community'+'/'+split_parametro_image)
			instance.delete()
			return redirect('you_proyect')
		else:
			return render(request, '404.html')
	except signing.BadSignature:
		return render(request, '404.html')