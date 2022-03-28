from rest_framework import serializers
from .models import Fila

class FilaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fila
        fields = ('id', 'bandeco', 'situation', 'velocity', 'last_atualization')