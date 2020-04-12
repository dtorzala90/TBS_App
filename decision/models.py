from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Session(models.Model):
	id = models.CharField(max_length=20, primary_key=True)
	#date_created = models.DateTimeField(default=timezone.now)
	#author = models.ForeignKey(User, on_delete=models.CASCADE)

	#Alert Data

	# Functional_Peripheral_IV_established = models.BooleanField(default=False) #localStorage.setItem("Functional Peripheral IV established", "false");
	# Functional_Peripheral_IV_count = models.IntegerField(default=0)# localStorage.setItem("Functional Peripheral IV count", "0");

	# Intraosseous_Line_established = models.BooleanField(default=False)# localStorage.setItem("Intraosseous Line established", "false");
	# Central_Line_established = models.BooleanField(default=False)# localStorage.setItem("Central Line established", "false");

	Type_and_Cross = models.CharField(max_length=20, default="none")# localStorage.setItem("Type and Cross", "none");

	Lip_Color = models.CharField(max_length=20, default="null")
	Nail_Bed_Color = models.CharField(max_length=20, default="null")
	Cap_Refill_Time = models.CharField(max_length=20, default="null")

	# IVF = models.CharField(max_length=20)# localStorage.setItem("IVF", "null");


	Right_Chest_Rise_Breath_Sounds = models.CharField(max_length=20, default="null")# localStorage.setItem("Right Chest Rise/Breath Sounds", "null");
	Left_Chest_Rise_Breath_Sounds = models.CharField(max_length=20, default="null")# localStorage.setItem("Left Chest Rise/Breath Sounds", "null");

	Massive_Transfusion_Protocol = models.CharField(max_length=20, default="null")# localStorage.setItem("Massive Transfusion Protocol", "null");

	Transfusion_PRBC = models.CharField(max_length=20, default="null")# localStorage.setItem("Transfusion PRBC", "null");

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
	ETT = models.CharField(max_length=20, default="null")# localStorage.setItem("ETT", "not initiated");

	# Difficult_Airway_Initiated_Time = models.CharField(max_length=20)# localStorage.setItem("Difficult Airway Initiated Time", "null");
	# Difficult_Airway_Achieved_Time = models.CharField(max_length=20)# localStorage.setItem("Difficult Airway Achieved Time", "null");
	# Difficult_Airway_Stopped_Time = models.CharField(max_length=20)# localStorage.setItem("Difficult Airway Stopped Time", "null");
	# Difficult_Airway = models.CharField(max_length=20)# localStorage.setItem("Difficult Airway", "not initiated");

	# Surgical_Airway_Initiated_Time = models.CharField(max_length=20)# localStorage.setItem("Surgical Airway Initiated Time", "null");
	# Surgical_Airway_Achieved_Time = models.CharField(max_length=20)# localStorage.setItem("Surgical Airway Achieved Time", "null");
	# Surgical_Airway_Stopped_Time = models.CharField(max_length=20)# localStorage.setItem("Surgical Airway Stopped Time", "null");
	# Surgical_Airway = models.CharField(max_length=20)# localStorage.setItem("Surgical Airway", "not initiated");

	#Vitals
	ETCO2 = models.CharField(max_length=20, default="not recorded")# localStorage.setItem("ETCO2", "not recorded");

	# GCS<13 = models.BooleanField()# localStorage.setItem("GCS<13", "false");
	GCS = models.CharField(max_length=20, default="null")
	#GCS_Motor = models.CharField(max_length=20)
	#GCS_Verbal = models.CharField(max_length=20)
	#GCS_Eye = models.CharField(max_length=20)

	Shock_Level = models.CharField(max_length=20, default="null")
	HR = models.CharField(max_length=20, default="null")
	BP = models.CharField(max_length=20, default="null")

	Shock_History = models.CharField(max_length=20, default="null")
	HR_History = models.CharField(max_length=20, default="null")
	BP_History = models.CharField(max_length=20, default="null")

	#Initial patient info
	Patient_Age = models.CharField(max_length=20, default="null")
	Patient_Weight = models.CharField(max_length=20, default="null")
	Patient_History = models.CharField(max_length=20, default="null")
	Patient_AddInfo = models.CharField(max_length=20, default="null")
