import datetime
import six
from flask import current_app, Flask
from google.cloud import storage
from werkzeug import secure_filename
from werkzeug.exceptions import BadRequest
from django.conf import settings
from django.core.exceptions import ValidationError

def get_storage_client():
	return storage.Client(
		project=current_app.config[settings.GOOGLE_CLOUD_PROJECT_ID])

def check_extension(filename, allowed_extensions):
	if('.' not in filename or filename.split('.').pop().lower() not in allowed_extensions):
		raise BadRequest("{0} esta es una extencion invalida".format(filename))

def safe_filename(filename):
	filename = secure_filename(filename)
	date = datetime.datetime.utcnow().strftime("%Y-%m-%d-%H%M%S")
	basename, extension = filename.rsplit('.', 1)
	return "{0}-{1}.{2}".format(basename, date, extension)


def upload_file(file_stream, filename, content_type):
	check_extension(filename, current_app.config[settings.EXTENSIONS])
	filename = safe_filename(filename)

	client = get_storage_client()
	bucket = client.bucket(current_app.config[settings.GOOGLE_CLOUD_STORAGE_BUCKET])
	blob = bucket.blob(filename)

	blob.upload_from_string(
		file_stream,
		content_type=content_type)

	url = blob.public_url

	if isinstance(url, six.binary_type):
		url = url.decode('utf-8')

	return url