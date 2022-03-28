import django_filters.rest_framework
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FilaSerializer
from .models import Fila
from rest_framework import generics, filters


# Create your views here.

class FilaView(viewsets.ModelViewSet):
    serializer_class = FilaSerializer
    queryset = Fila.objects.all()
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['bandeco']
    ordering_fields = ['last_atualization']
