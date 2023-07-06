from django.shortcuts import render
from .models import *

# Create your views here.

def index(request):
    about = Pictuers.objects.filter()[:1]
    project = Projects.objects.filter()
    
    return render( request, 'index.html', {'update': about, 'proj':project})