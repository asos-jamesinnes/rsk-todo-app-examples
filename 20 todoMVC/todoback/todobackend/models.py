from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model
from django.conf import settings


@receiver(post_save, sender=get_user_model())
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class Mission(models.Model):
    owner = models.ForeignKey(get_user_model(), related_name='missions',
                              on_delete=models.CASCADE, null=True, blank=True)
    title = models.TextField(max_length=50, null=True, blank=True)
    completed = models.BooleanField(default=False, null=True, blank=True)




