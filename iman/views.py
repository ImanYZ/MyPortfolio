import json
from random import randint
import random
import time
import math
import csv

from django.shortcuts import get_object_or_404, render, redirect
# from django.http import HttpResponseRedirect, HttpResponse, JsonResponse, Http404, StreamingHttpResponse
# from django.core.urlresolvers import reverse
# from django.utils import timezone
# from django.views.decorators.csrf import ensure_csrf_cookie
# from django.utils.six.moves import range


def index(request):
    context = {}
    return render(request, 'iman/index.html', context)


def SBEE(request):
    context = {}
    return render(request, 'iman/SBEE.html', context)


def CSCW(request):
    context = {}
    return render(request, 'iman/CSCW.html', context)


def CSCL(request):
    context = {}
    return render(request, 'iman/CSCL.html', context)


def Design(request):
    context = {}
    return render(request, 'iman/Design.html', context)


def Development(request):
    context = {}
    return render(request, 'iman/Development.html', context)


def Entrepreneurship(request):
    context = {}
    return render(request, 'iman/Entrepreneurship.html', context)


def ML(request):
    context = {}
    return render(request, 'iman/ML.html', context)


def oniversity(request):
    context = {}
    return render(request, 'iman/1iversity.html', context)


def navable(request):
    context = {}
    return render(request, 'iman/navable.html', context)


def wecollabrify(request):
    context = {}
    return render(request, 'iman/WeCollabrify.html', context)


def home_files(request, filename):
    return render(request, filename, {}, content_type="text/plain")

