import os
import shutil
from dropbox.exceptions import ApiError
from django.contrib import messages
from django.core import signing
from django.shortcuts import render, get_object_or_404, redirect
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.core.urlresolvers import reverse_lazy
from django.http import HttpResponseRedirect
from django.db.models import Q
from django.contrib import messages
from django.conf import settings
from PIL import Image
from django.core.exceptions import ObjectDoesNotExist
from django.core.files.storage import FileSystemStorage

from apps.community.models import Community
from apps.user.models import limitCommunity
from apps.community.forms import ComForm
from apps.processes import findimage


class CreateCommunity(CreateView):
	model = Community
	template_name = 'community/add_community.html'
	form_class = ComForm
	success_url = reverse_lazy('community')

	def get_context_data(self, **kwargs):
		try:
			limitCommunity.objects.get(user=self.request.user.id) 
		except ObjectDoesNotExist:
			lmCommunity = limitCommunity(user=self.request.user, limitContent="0")
			lmCommunity.save()
		context = super(CreateCommunity, self).get_context_data(**kwargs)
		if 'form' not in context:
			context['form'] = self.form_class(self.request.GET)
		return context

	def post(self, request, *args, **kwargs):
		#directory temfile
		try:
			os.stat(os.path.join(os.path.expanduser("~"), "pccomunnity"))
		except:
			os.mkdir(os.path.join(os.path.expanduser("~"), "pccomunnity"))
		self.object = self.get_object
		form = self.form_class(request.POST or None, request.FILES or None)
		limit = limitCommunity.objects.get(user=self.request.user.id)
		if not int(limit.limitContent) >= 2:
			if form.is_valid():
				community = form.save(commit=False)
				community.user = request.user
				#request.File.image
				request_image = str(request.FILES.get('image'))

				myFile = request.FILES.get('image')
				fs = FileSystemStorage()
				filename = fs.save(myFile.name, myFile)

				res_file_image = findimage.resFileImage(request_image)

				back_file_image = findimage.renameFile(request.user.username,request_image,"community")

				result_image = str(res_file_image)
				username = str(request.user)

				_file_size_image = os.path.getsize(res_file_image)
				_check_image_width_height = Image.open(res_file_image)
				width, height = _check_image_width_height.size
				CHUCK_SIZE_IMAGE = 4 *1024 * 1024 #4MB
				min_image_Width = 1199 #min_width = 1200
				min_image_Height = 1199 #min_height = 1200
			
				if width  >= min_image_Width and height >= min_image_Height:
					if _file_size_image <= CHUCK_SIZE_IMAGE:
						if not result_image == " ":
							with open(result_image, "rb") as f:
								settings.DBXCLIENT.files_upload(f.read(), '/imagenes_playcode/'+username+'/'+'community'+'/'+back_file_image)
								shutil.rmtree(os.path.join(os.path.expanduser("~"), "pccomunnity"))
						else:
							messages.error(request, 'lo sentimos el arcivo no existe o la validacion fue incorrecta')
							shutil.rmtree(os.path.join(os.path.expanduser("~"), "pccomunnity"))
							return self.render_to_response(self.get_context_data(form=form))

						try:
							community.image = settings.DBXCLIENT.sharing_create_shared_link_with_settings('/imagenes_playcode/'+username+'/'+'community'+'/'+back_file_image).url
						except ApiError as err:
							if err.error.is_shared_link_already_exists():
								messages.error(request, 'Esta nombre de imagen ya existe en tus proyectos')
								return self.render_to_response(self.get_context_data(form=form))
					else:
						messages.error(request, 'Lo sentimos la Imagen es muy grande, (tamaño de la imagen: menos de 4MB)')
						shutil.rmtree(os.path.join(os.path.expanduser("~"), "pccomunnity"))
						return self.render_to_response(self.get_context_data(form=form))
				else:
					messages.error(request, 'Upps la imagen debe ser mayor a 1200 x 1200')
					shutil.rmtree(os.path.join(os.path.expanduser("~"), "pccomunnity"))
					return self.render_to_response(self.get_context_data(form=form))
				community.save()
				contentLimit = limitCommunity.objects.get(user=request.user.id) 
				content = int(contentLimit.limitContent) + 1;
				limitCommunity.objects.filter(user=request.user).update(limitContent=str(content))		
				return HttpResponseRedirect(self.get_success_url())
			else:
				shutil.rmtree(os.path.join(os.path.expanduser("~"), "pccomunnity"))
				return self.render_to_response(self.get_context_data(form=form))
		else:
			shutil.rmtree(os.path.join(os.path.expanduser("~"), "pccomunnity"))
			return redirect('lc') 




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
