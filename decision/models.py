from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Session(models.Model):
	id = models.CharField(max_length=20, primary_key=True)
	#date_created = models.DateTimeField(default=timezone.now)
	#author = models.ForeignKey(User, on_delete=models.CASCADE)

	#All airway steps below are considered "completed" if they have a correlating value (timestamp)
	Oxygen_Supplementation_Initiated = models.CharField(max_length=20, default="null")
	Oxygen_Supplementation_Stopped = models.CharField(max_length=20, default="null")

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

	#Breathing Data
	Spontaneous_Breathing = models.CharField(max_length=20, default="null")
	Assisted_Breathing = models.CharField(max_length=20, default="null")
	Right_Chest = models.CharField(max_length=20, default="null")
	Left_Chest = models.CharField(max_length=20, default="null")

	#Circulation Data
	Lip_Color = models.CharField(max_length=20, default="null")
	Nail_Color = models.CharField(max_length=20, default="null")
	Cap_Refill = models.CharField(max_length=20, default="null")
	PIV_Count = models.CharField(max_length=20, default="0")
	Central_Line = models.CharField(max_length=20, default="no")
	Intraosseous_Line = models.CharField(max_length=20, default="no")

	IV_Fluid_Amount = models.CharField(max_length=20, default="none")
	Type_Cross = models.CharField(max_length=20, default="null")
	Transfused_PRBC = models.CharField(max_length=20, default="no")
	Massive_Transfusion = models.CharField(max_length=20, default="no")

	#Disability Data
	Pupils_Equal = models.CharField(max_length=20, default="null")
	Pupils_Round = models.CharField(max_length=20, default="null")
	Pupils_Reactive = models.CharField(max_length=20, default="null")
	Pupil_Size_Right = models.CharField(max_length=20, default="null")
	Pupil_Size_Left = models.CharField(max_length=20, default="null")

	Moves_Extremities = models.CharField(max_length=20, default="null")

	#Vitals
	ETCO2 = models.CharField(max_length=20, default="null")

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
