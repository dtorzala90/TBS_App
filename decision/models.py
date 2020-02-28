from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Session(models.Model):
	content = models.TextField()
	date_created = models.DateTimeField(default=timezone.now)
	author = models.ForeignKey(User, on_delete=models.CASCADE)

	#Alert Data
	# Alert_No_IV = models.CharField(max_length=20, default="not thrown") #No IVlocalStorage.setItem("Alert No IV", "not thrown");
	# Alert_One_PIV = models.CharField(max_length=20, default="not thrown") #localStorage.setItem("Alert One PIV", "not thrown");

	# Functional_Peripheral_IV_established = models.BooleanField(default=False) #localStorage.setItem("Functional Peripheral IV established", "false");
	# Alert_No_IV = models.IntegerField(default=0)# localStorage.setItem("Functional Peripheral IV count", "0");

	# Alert_No_IV = models.BooleanField(default=False)# localStorage.setItem("Intraosseous Line established", "false");
	# Alert_No_IV = models.BooleanField(default=False)# localStorage.setItem("Central Line established", "false");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Record ETCO2 Alert", "not thrown");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Current ETCO2 alert thrown", "none");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("ETCO2", "not recorded");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("ETT ETCO2 Alert", "not thrown");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("ETT GCS Alert", "not thrown");

	# Alert_No_IV = models.BooleanField()# localStorage.setItem("GCS<13", "false");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("GCS", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("GCS Motor", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("GCS Verbal", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("GCS Eye", "null");


	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("GCS<13 Alert", "not thrown");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Shock Level", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Shock Alert", "not thrown");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("HR", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Bradycardia Alert", "not thrown");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Tachycardia Alert", "not thrown");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("BP", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Hypotensive alert", "not thrown");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Patient Age", "null");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Type and Cross Alert", "not thrown");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Type and Cross", "none");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Poor Perfusion", "not thrown");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Lip Color", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Nail Bed Color", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Cap Refill Time", "null");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Alert Consider IVF", "not thrown");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Alert Fluids Given", "not thrown");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Alert Excess IVF", "not thrown");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("IVF", "null");

	# #Variables for display of vital signs
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("HR Display", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("BP Display", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Shock Level Display", "null");


	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Right Chest Rise/Breath Sounds", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Right Breathing Alert", "not thrown");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Left Chest Rise/Breath Sounds", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Left Breathing Alert", "not thrown");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Massive Transfusion Protocol", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Massive Transfusion Protocol Alert", "not thrown");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Transfusion PRBC", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Transfusion PRBC Alert", "not thrown");

	# #All time stamp varibles initiated below
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Oxygen Supplementation Initiated Time", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Oxygen Supplementation Stopped Time", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Oxygen Supplementation", "not initiated");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Bag Mask Initiated Time", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Bag Mask Stopped Time", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Bag Mask", "not initiated");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("LMA Initiated Time", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("LMA Achieved Time", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("LMA Stopped Time", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("LMA", "not initiated");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("ETT Initiated Time", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("ETT Achieved Time", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("ETT Stopped Time", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("ETT", "not initiated");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Difficult Airway Initiated Time", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Difficult Airway Achieved Time", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Difficult Airway Stopped Time", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Difficult Airway", "not initiated");

	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Surgical Airway Initiated Time", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Surgical Airway Achieved Time", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Surgical Airway Stopped Time", "null");
	# Alert_No_IV = models.CharField(max_length=20)# localStorage.setItem("Surgical Airway", "not initiated");

	def __str__(self):
		return self.content