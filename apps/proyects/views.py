import os
import shutil
from dropbox.exceptions import ApiError
from django.contrib import messages
from django.core import signing
from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponseRedirect, Http404
from django.views.generic import CreateView, ListView, DeleteView
from django.core.urlresolvers import reverse_lazy
from django.contrib.auth.forms import UserCreationForm
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import Q
from django.conf import settings
from django.core.files.storage import FileSystemStorage

from apps.proyects.models import Products, Social
from apps.user.models import limitProject
from apps.proyects.forms import ProyForm, SocialForm
from apps.processes import findimage


class CreateProyect(CreateView):
	model = Products
	template_name = 'proyects/add_proyect.html'
	form_class = ProyForm
	second_form_class = SocialForm
	success_url = reverse_lazy('proyects')

	def get_context_data(self, **kwargs):
		try:
			limitProject.objects.get(user=self.request.user.id)
		except ObjectDoesNotExist:
			lmProject = limitProject(user=self.request.user, limitContent="0")
			lmProject.save()
		context = super(CreateProyect, self).get_context_data(**kwargs)
		if 'form' not in context:
			context['form'] = self.form_class(self.request.GET)
		if 'form2' not in context:
			context['form2'] = self.second_form_class(self.request.GET)
		return context


	def post(self, request, *args, **kwargs):
		#directory temfile
		try:
			os.stat(os.path.join(os.path.expanduser("~"), "pccomunnity"))
		except:
			os.mkdir(os.path.join(os.path.expanduser("~"), "pccomunnity"))
		self.object = self.get_object
		form = self.form_class(request.POST or None, request.FILES or None)
		form2 = self.second_form_class(request.POST or None)
		limit = limitProject.objects.get(user=self.request.user.id)
		if not int(limit.limitContent) >= 1:
			if form.is_valid():
				proyecto = form.save(commit=False)
				proyecto.user = request.user
				#request.image and request.proyect
				request_image = str(request.FILES.get('image'))
				request_project = str(request.FILES.get('product'))

				myFileImage = request.FILES.get('image')
				myFileProject = request.FILES.get('product')
				fs = FileSystemStorage()
				fileNameImage = fs.save(myFileImage.name, myFileImage)
				fileNameProject = fs.save(myFileProject.name, myFileProject)

				res_file_image = findimage.resFileImage(request_image)
				res_file_project = findimage.resFileImage(request_project)

				back_file_image = findimage.renameFile(request.user.username,request_image,"project")
				back_file_project = findimage.renameFileProject(request.user.username,request_project,"project")			

				result_image = str(res_file_image)
				result_project = str(res_file_project)
				username = str(request.user)

				_file_size_image = os.path.getsize(res_file_image)
				_file_size_proyect  = os.path.getsize(res_file_project)
				CHUCK_SIZE_IMAGE = 4 * 1024 * 1024 #4MB
				CHUCK_SIZE_PROJETC = 30 * 1024 * 1024 #32MB

				if _file_size_image <= CHUCK_SIZE_IMAGE and _file_size_proyect <= CHUCK_SIZE_PROJETC:

					if not result_image == " ":
						with open(result_image, "rb") as f:
							settings.DBXCLIENT.files_upload(f.read(), '/imagenes_playcode/'+username+'/'+'project'+'/'+back_file_image, mute = True)
					else:
						messages.error(request, 'lo sentimos el arcivo no existe o la validacion fue incorrecta')
						shutil.rmtree(os.path.join(os.path.expanduser("~"), "pccomunnity"))
						return self.render_to_response(self.get_context_data(form=form, form2=form2))

					if not result_project == " ":
						with open(result_project, "rb") as f:
							file_size = os.path.getsize(result_project)
							CHUCK_SIZE = 4 * 1024 * 1024 #4MB

							if file_size <= CHUCK_SIZE:
								settings.DBXCLIENT.files_upload(f.read(), '/proyectos_playcode/'+username+'/'+back_file_project, mute = True)
								shutil.rmtree(os.path.join(os.path.expanduser("~"), "pccomunnity"))

							else: 
								upload_session_start_result = settings.DBXCLIENT.files_upload_session_start(f.read(CHUCK_SIZE))
								cursor = dropbox.files.UploadSessionCursor(session_id=upload_session_start_result.session_id, offset=f.tell())

								commit = dropbox.files.CommitInfo(path='/proyectos_playcode/'+username+'/'+back_file_project)

								while f.tell() < file_size:
									if((file_size - f.tell()) <= CHUCK_SIZE):
										print(settings.DBXCLIENT.files_upload_session_finish(f.read(CHUCK_SIZE), cursor, commit))

									else:
										settings.DBXCLIENT.files_upload_session_append(f.read(CHUCK_SIZE), cursor.session_id, cursor.offset)

										cursor.offset = f.tell()
					else:
						messages.error(request, 'lo sentimos el arcivo no existe o la validacion fue incorrecta')
						shutil.rmtree(os.path.join(os.path.expanduser("~"), "pccomunnity"))
						return self.render_to_response(self.get_context_data(form=form, form2=form2))
			
					try:
						proyecto.image = settings.DBXCLIENT.sharing_create_shared_link_with_settings('/imagenes_playcode/'+username+'/'+'project'+'/'+back_file_image).url
					except ApiError as err:
						if err.error.is_shared_link_already_exists():
							messages.error(request, 'Este nombre de imagen ya existe en tus proyectos')
							return self.render_to_response(self.get_context_data(form=form, form2=form2))

					try:
						proyecto.product = settings.DBXCLIENT.sharing_create_shared_link_with_settings('/proyectos_playcode/'+username+'/'+back_file_project).url
					except ApiError as err:
						if err.error.is_shared_link_already_exists():
							messages.error(request, 'Este proyecto ya existe en tus proyectos')
							return self.render_to_response(self.get_context_data(form=form, form2=form2))
				else:
					messages.error(request, 'lo sentimos el tamaño del la imagen o el proyecto es muy grande, (tamaño de la imagen: menor a 4MB) (tamaño del proyecto: menos de 30MB)')
					shutil.rmtree(os.path.join(os.path.expanduser("~"), "pccomunnity"))
					return self.render_to_response(self.get_context_data(form=form, form2=form2))
				proyecto.sociales = form2.save()
				proyecto.save()
				contentLimit = limitProject.objects.get(user=request.user.id) 
				content = int(contentLimit.limitContent) + 1;
				limitProject.objects.filter(user=request.user).update(limitContent=str(content))
				return HttpResponseRedirect(self.get_success_url())
			else:
				shutil.rmtree(os.path.join(os.path.expanduser("~"), "pccomunnity"))
				return self.render_to_response(self.get_context_data(form=form, form2=form2))
		else:
			shutil.rmtree(os.path.join(os.path.expanduser("~"), "pccomunnity"))
			return redirect('lc')



def ProyectList(request):
	queryset_list = Products.objects.all()

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
		"page_request_var" : page_request_var,
	}
	return render(request, "proyects/proyects.html", context)



def Details(request):
	try:
		_signing_ = str(request.GET.get('project'))
		_id_ = signing.loads(_signing_)
		_id_project_ = _id_
		instance = get_object_or_404(Products, id=_id_project_)
		context={
			"instance": instance
		}
		return render(request, 'proyects/details_proy.html', context)
	except signing.BadSignature:
		return render(request, '404.html')



class ProyectUser(ListView):
	model = Products
	form_class = ProyForm
	template_name = 'user/you_proyect.html'
	success_url = reverse_lazy('proyects')