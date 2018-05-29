from django import template
from django.template.defaultfilters import stringfilter
from django.core.signing import Signer
from django.core import signing


register = template.Library()

#website
@register.filter
@stringfilter
def to_raw(value):
	return value.replace("dl=0","raw=1")

@register.filter
@stringfilter
def to_dl(value):
	return value.replace("dl=0","dl=1")

@register.filter
@stringfilter
def url_to_encode_community(value):
	encode = signing.dumps(value)
	return encode 

@register.filter
@stringfilter
def url_to_encode_project(value):
	encode = signing.dumps(value)
	return encode 
