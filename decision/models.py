from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Session(models.Model):
	id = models.AutoField(primary_key=True)
	date_created = models.DateTimeField(default=timezone.now)
	author = models.ForeignKey(User, on_delete=models.CASCADE)

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

	#All airway steps below are considered "completed" if they have a correlating value (timestamp)
	Oxygen_Supplementation_Initiated = models.CharField(max_length=20, default="null")
	Oxygen_Supplementation_Stoppe = models.CharField(max_length=20, default="null")

	Bag_Mask_Initiated = models.CharField(max_length=20, default="null")
	Bag_Mask_Stopped = models.CharField(max_length=20, default="null")

	LMA_Initiated = models.CharField(max_length=20, default="null")
	LMA_Achieved = models.CharField(max_length=20, default="null")
	LMA_Stopped = models.CharField(max_length=20, default="null")

	ETT_Initiated = models.CharField(max_length=20, default="null")
	ETT_Achieved = models.CharField(max_length=20, default="null")
	ETT_Stopped = models.CharField(max_length=20, default="null")

	Difficult_Airway_Initiated = models.CharField(max_length=20, default="null")
	Difficult_Airway_Achieved = models.CharField(max_length=20, default="null")
	Difficult_Airway_Stopped = models.CharField(max_length=20, default="null")

	Surgical_Airway_Initiated = models.CharField(max_length=20, default="null")
	Surgical_Airway_Achieved = models.CharField(max_length=20, default="null")
	Surgical_Airway_Stopped = models.CharField(max_length=20, default="null")

	#Vitals
	ETCO2 = models.CharField(max_length=20, default="not recorded")# localStorage.setItem("ETCO2", "not recorded");

	# GCS<13 = models.BooleanField()# localStorage.setItem("GCS<13", "false");
	GCS = models.CharField(max_length=20, default="null")
	GCS_Motor = models.CharField(max_length=20, default="null")
	GCS_Verbal = models.CharField(max_length=20, default="null")
	GCS_Eye = models.CharField(max_length=20, default="null")

	Shock_Level = models.CharField(max_length=20, default="null")
	HR = models.CharField(max_length=20, default="null")
	BP = models.CharField(max_length=20, default="null")


	GCS_History = models.CharField(max_length=20, default="null")
	ETCO2_History = models.CharField(max_length=20, default="null")
	Shock_History = models.CharField(max_length=20, default="null")
	HR_History = models.CharField(max_length=20, default="null")
	BP_History = models.CharField(max_length=20, default="null")

	#Initial patient info
	Patient_Age = models.CharField(max_length=20, default="null")
	Patient_Weight = models.CharField(max_length=20, default="null")
	Patient_History = models.CharField(max_length=20, default="null")
	Patient_AddInfo = models.CharField(max_length=20, default="null")
