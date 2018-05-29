import os
import dropbox
from dropbox.exceptions import ApiError
from django.contrib import messages
from django.core import signing
from django.shortcuts import render, get_object_or_404, redirect
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.core.urlresolvers import reverse_lazy
from django.http import Http404, HttpResponseRedirect
from django.db.models import Q
from django.contrib import messages
from django.conf import settings
from flask import current_app, Flask

from apps.community.models import Community
from apps.community.forms import ComForm
from apps.community import storage


dbxClient = dropbox.Dropbox(os.environ['DROPBOX'])


class CreateCommunity(CreateView):
	model = Community
	template_name = 'community/add_community.html'
	form_class = ComForm
	success_url = reverse_lazy('community')

	def get_context_data(self, **kwargs):
		context = super(CreateCommunity, self).get_context_data(**kwargs)
		if 'form' not in context:
			context['form'] = self.form_class(self.request.GET)
		return context

	def post(self, request, *args, **kwargs):
		self.object = self.get_object
		form = self.form_class(request.POST or None, request.FILES or None)
		if form.is_valid():
			community = form.save(commit=False)
			community.user = request.user
			#request.File.image
			request_image = str(request.FILES.get('image'))

			res_file_image = ''
			UnidadDIR = os.path.expanduser("~")

			if(not os.path.isdir(UnidadDIR)):
				return UnidadDIR

			for root, dir, file in os.walk(UnidadDIR):
				for name in file:
					if(request_image in name):
						res_file_image = os.path.join(root,name)
						break

			result_image = str(res_file_image)
			back_file_image = str("play_code_community_"+request.user.username+"_"+request_image)
			username = str(request.user)

			_file_size_image = os.path.getsize(res_file_image)
			CHUCK_SIZE_IMAGE = 4 *1024 * 1024 #4MB

			if _file_size_image <= CHUCK_SIZE_IMAGE:

				if not result_image == " ":
					with open(result_image, "rb") as f:
						dbxClient.files_upload(f.read(), '/imagenes_playcode/'+username+'/'+'community'+'/'+back_file_image)
				else:
					messages.error(request, 'lo sentimos el arcivo no existe o la validacion fue incorrecta')
					return self.render_to_response(self.get_context_data(form=form))

				try:
					community.image = dbxClient.sharing_create_shared_link_with_settings('/imagenes_playcode/'+username+'/'+'community'+'/'+back_file_image).url
				except ApiError as err:
					if err.error.is_shared_link_already_exists():
						messages.error(request, 'Esta imagen ya existe en tus proyectos')
						return self.render_to_response(self.get_context_data(form=form))
			else:
				messages.error(request, 'Lo sentimos la Imagen es muy grande, (tamaño de la imagen: menos de 4MB)')
				return self.render_to_response(self.get_context_data(form=form))
				
			community.save()
			return HttpResponseRedirect(self.get_success_url())
		else:
			return self.render_to_response(self.get_context_data(form=form))




def ComunityList(request):
	queryset_list = Community.objects.all()

	query = request.GET.get("q")
	if query:
		queryset_list = queryset_list.filter(
			Q(title__icontains=query)|
			Q(user__first_name__icontains=query)|
			Q(user__last_name__icontains=query)
			).distinct()

	paginator = Paginator(queryset_list, 10)
	page_request_var = "page"
	page = request.GET.get(page_request_var)
	try:
	    queryset = paginator.page(page)
	except PageNotAnInteger:

	    queryset = paginator.page(1)
	except EmptyPage:

	    queryset = paginator.page(paginator.num_pages)

	context={
		"object_list" : queryset,
		"developer" : "List",
		"page_request_var" : page_request_var,
	}
	return render(request, "community/community.html", context)


def Details(request):
	try:
		_signing_ = str(request.GET.get('community'))
		_id_ = signing.loads(_signing_)
		_id_community_ = _id_
		instance = get_object_or_404(Community, id=_id_community_)
		context={
			"instance": instance,
		}
		return render(request, 'community/details_com.html', context)
	except signing.BadSignature:
		return render(request, '404.html')

class CommunityUser(ListView):
	model = Community
	form_class = ComForm
	template_name = 'user/you_community.html'
	success_url = reverse_lazy('community')
