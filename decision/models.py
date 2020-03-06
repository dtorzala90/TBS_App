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
	# Functional_Peripheral_IV_count = models.IntegerField(default=0)# localStorage.setItem("Functional Peripheral IV count", "0");

	# Intraosseous_Line_established = models.BooleanField(default=False)# localStorage.setItem("Intraosseous Line established", "false");
	# Central_Line_established = models.BooleanField(default=False)# localStorage.setItem("Central Line established", "false");

	# Record_ETCO2_Alert = models.CharField(max_length=20)# localStorage.setItem("Record ETCO2 Alert", "not thrown");
	# Current_ETCO2_alert_thrown = models.CharField(max_length=20)# localStorage.setItem("Current ETCO2 alert thrown", "none");

	# ETCO2 = models.CharField(max_length=20)# localStorage.setItem("ETCO2", "not recorded");

	# ETT_ETCO2_Alert = models.CharField(max_length=20)# localStorage.setItem("ETT ETCO2 Alert", "not thrown");
	# ETT_GCS_Alert = models.CharField(max_length=20)# localStorage.setItem("ETT GCS Alert", "not thrown");

	# GCS<13 = models.BooleanField()# localStorage.setItem("GCS<13", "false");
	# GCS = models.CharField(max_length=20)# localStorage.setItem("GCS", "null");
	# GCS_Motor = models.CharField(max_length=20)# localStorage.setItem("GCS Motor", "null");
	# GCS_Verbal = models.CharField(max_length=20)# localStorage.setItem("GCS Verbal", "null");
	# GCS_Eye = models.CharField(max_length=20)# localStorage.setItem("GCS Eye", "null");


	# GCS<13_Alert = models.CharField(max_length=20)# localStorage.setItem("GCS<13 Alert", "not thrown");

	# Shock_Level = models.CharField(max_length=20)# localStorage.setItem("Shock Level", "null");
	# Shock_Alert = models.CharField(max_length=20)# localStorage.setItem("Shock Alert", "not thrown");

	# HR = models.CharField(max_length=20)# localStorage.setItem("HR", "null");
	# Bradycardia_Alert = models.CharField(max_length=20)# localStorage.setItem("Bradycardia Alert", "not thrown");
	# Tachycardia_Alert = models.CharField(max_length=20)# localStorage.setItem("Tachycardia Alert", "not thrown");

	# BP = models.CharField(max_length=20)# localStorage.setItem("BP", "null");
	# Hypotensive_alert = models.CharField(max_length=20)# localStorage.setItem("Hypotensive alert", "not thrown");

	# Patient_Age = models.CharField(max_length=20)# localStorage.setItem("Patient Age", "null");

	# Type_and_Cross_Alert = models.CharField(max_length=20)# localStorage.setItem("Type and Cross Alert", "not thrown");
	# Type_and_Cross = models.CharField(max_length=20)# localStorage.setItem("Type and Cross", "none");

	# Poor_Perfusion = models.CharField(max_length=20)# localStorage.setItem("Poor Perfusion", "not thrown");
	# Lip_Color = models.CharField(max_length=20)# localStorage.setItem("Lip Color", "null");
	# Nail_Bed_Color = models.CharField(max_length=20)# localStorage.setItem("Nail Bed Color", "null");
	# Cap_Refill_Time = models.CharField(max_length=20)# localStorage.setItem("Cap Refill Time", "null");

	# Alert_Consider_IVF = models.CharField(max_length=20)# localStorage.setItem("Alert Consider IVF", "not thrown");
	# Alert_Fluids_Given = models.CharField(max_length=20)# localStorage.setItem("Alert Fluids Given", "not thrown");
	# Alert_Excess_IVF = models.CharField(max_length=20)# localStorage.setItem("Alert Excess IVF", "not thrown");
	# IVF = models.CharField(max_length=20)# localStorage.setItem("IVF", "null");

	# #Variables for display of vital signs
	# HR_Display = models.CharField(max_length=20)# localStorage.setItem("HR Display", "null");
	# BP_Display = models.CharField(max_length=20)# localStorage.setItem("BP Display", "null");
	# Shock_Level_Display = models.CharField(max_length=20)# localStorage.setItem("Shock Level Display", "null");


	# Right_Chest_Rise/Breath_Sounds = models.CharField(max_length=20)# localStorage.setItem("Right Chest Rise/Breath Sounds", "null");
	# Right_Breathing_Alert = models.CharField(max_length=20)# localStorage.setItem("Right Breathing Alert", "not thrown");
	# Left_Chest_Rise/Breath Sounds = models.CharField(max_length=20)# localStorage.setItem("Left Chest Rise/Breath Sounds", "null");
	# Left_Breathing_Alert = models.CharField(max_length=20)# localStorage.setItem("Left Breathing Alert", "not thrown");

	# Massive_Transfusion_Protocol = models.CharField(max_length=20)# localStorage.setItem("Massive Transfusion Protocol", "null");
	# Massive_Transfusion_Protocol_Alert = models.CharField(max_length=20)# localStorage.setItem("Massive Transfusion Protocol Alert", "not thrown");

	# Transfusion_PRBC = models.CharField(max_length=20)# localStorage.setItem("Transfusion PRBC", "null");
	# Transfusion_PRBC_Alert = models.CharField(max_length=20)# localStorage.setItem("Transfusion PRBC Alert", "not thrown");

	# #All time stamp varibles initiated below
	# Oxygen_Supplementation_Initiated_Time = models.CharField(max_length=20)# localStorage.setItem("Oxygen Supplementation Initiated Time", "null");
	# Oxygen_Supplementation_Stopped_Time = models.CharField(max_length=20)# localStorage.setItem("Oxygen Supplementation Stopped Time", "null");
	# Oxygen_Supplementation = models.CharField(max_length=20)# localStorage.setItem("Oxygen Supplementation", "not initiated");

	# Bag_Mask_Initiated_Time = models.CharField(max_length=20)# localStorage.setItem("Bag Mask Initiated Time", "null");
	# Bag_Mask_Stopped_Time = models.CharField(max_length=20)# localStorage.setItem("Bag Mask Stopped Time", "null");
	# Bag_Mask = models.CharField(max_length=20)# localStorage.setItem("Bag Mask", "not initiated");

	# LMA_Initiated_Time = models.CharField(max_length=20)# localStorage.setItem("LMA Initiated Time", "null");
	# LMA_Achieved_Time = models.CharField(max_length=20)# localStorage.setItem("LMA Achieved Time", "null");
	# LMA_Stopped_Time = models.CharField(max_length=20)# localStorage.setItem("LMA Stopped Time", "null");
	# LMA = models.CharField(max_length=20)# localStorage.setItem("LMA", "not initiated");

	# ETT_Initiated_Time = models.CharField(max_length=20)# localStorage.setItem("ETT Initiated Time", "null");
	# ETT_Achieved_Time = models.CharField(max_length=20)# localStorage.setItem("ETT Achieved Time", "null");
	# ETT_Stopped_Time = models.CharField(max_length=20)# localStorage.setItem("ETT Stopped Time", "null");
	# ETT = models.CharField(max_length=20)# localStorage.setItem("ETT", "not initiated");

	# Difficult_Airway_Initiated_Time = models.CharField(max_length=20)# localStorage.setItem("Difficult Airway Initiated Time", "null");
	# Difficult_Airway_Achieved_Time = models.CharField(max_length=20)# localStorage.setItem("Difficult Airway Achieved Time", "null");
	# Difficult_Airway_Stopped_Time = models.CharField(max_length=20)# localStorage.setItem("Difficult Airway Stopped Time", "null");
	# Difficult_Airway = models.CharField(max_length=20)# localStorage.setItem("Difficult Airway", "not initiated");

	# Surgical_Airway_Initiated_Time = models.CharField(max_length=20)# localStorage.setItem("Surgical Airway Initiated Time", "null");
	# Surgical_Airway_Achieved_Time = models.CharField(max_length=20)# localStorage.setItem("Surgical Airway Achieved Time", "null");
	# Surgical_Airway_Stopped_Time = models.CharField(max_length=20)# localStorage.setItem("Surgical Airway Stopped Time", "null");
	# Surgical_Airway = models.CharField(max_length=20)# localStorage.setItem("Surgical Airway", "not initiated");

	def __str__(self):
		return self.content