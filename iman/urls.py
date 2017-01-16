from django.conf.urls import url, include
from django.views.generic.base import RedirectView
from django.conf import settings

from . import views

app_name = 'iman'

urlpatterns = [
    url(r'^favicon\.ico$', RedirectView.as_view(url=settings.STATIC_URL + 'iman/media/blockm.png')),
    url(r'^$', views.index, name='index'),
    url(r'^SBEE/$', views.SBEE, name='SBEE'),
    url(r'^CSCW/$', views.CSCW, name='CSCW'),
    url(r'^CSCL/$', views.CSCL, name='CSCL'),
    url(r'^Design/$', views.Design, name='Design'),
    url(r'^Development/$', views.Development, name='Development'),
    url(r'^Entrepreneurship/$', views.Entrepreneurship, name='Entrepreneurship'),
    url(r'^ML/$', views.ML, name='ML'),
    url(r'^1iversity/$', views.oniversity, name='oniversity'),
    url(r'^navable/$', views.navable, name='navable'),
    url(r'^wecollabrify/$', views.wecollabrify, name='wecollabrify'),
]