from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Session(models.Model):
	#These are the attributes of our object : Session
	A_completed = models.BooleanField(default=False)
	B_completed = models.BooleanField(default=False)
	C_completed = models.BooleanField(default=False)
	D_completed = models.BooleanField(default=False)
	E_completed = models.BooleanField(default=False)
	timeStarted = models.DateTimeField(default=timezone.now)
	timeEnded = models.DateTimeField(default=timezone.now)
	author = models.ForeignKey(User, on_delete=models.DO_NOTHING)

	def __str__(self):
		return self.user + self.timeStarted