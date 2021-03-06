from django.db import models

# Create your models here.

class Fila(models.Model):
    BANDECO_CHOICES = (
        ("CENTRAL", "CENTRAL"),
        ("QUIMICA", "QUÍMICA"),
        ("FISICA", "FÍSICA"),
        ("PREFEITURA", "PREFEITURA"),
    )

    bandeco = models.CharField(max_length=120, choices=BANDECO_CHOICES)
    situation = models.CharField(max_length=120)
    velocity = models.CharField(max_length=120)
    last_atualization = models.DateTimeField(auto_now=True)

    def _str_(self):
        return self.situation