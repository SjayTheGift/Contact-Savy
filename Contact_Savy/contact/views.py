from django.shortcuts import render
from django.views import generic

from .models import Person


class HomeListView(generic.ListView):
    model = Person
    template_name = 'home.html'
