from django.contrib import admin
from .models import Fila

class FilaAdmin(admin.ModelAdmin):
    list_display = ('bandeco', 'situation', 'velocity', 'last_atualization')

# Register your models here.

admin.site.register(Fila, FilaAdmin)