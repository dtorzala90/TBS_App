<!-- Clear data from previous session and initialize global values -->
localStorage.clear();

localStorage.setItem("Alert No IV", "not thrown");
localStorage.setItem("Alert One PIV", "not thrown");

localStorage.setItem("Functional Peripheral IV established", "false");
localStorage.setItem("Functional Peripheral IV count", "0");

localStorage.setItem("Intraosseous Line established", "false");
localStorage.setItem("Central Line established", "false");

localStorage.setItem("Record ETCO2 Alert", "not thrown");
localStorage.setItem("Current ETCO2 alert thrown", "none");

localStorage.setItem("ETCO2", "not recorded");

localStorage.setItem("ETT ETCO2 Alert", "not thrown");
localStorage.setItem("ETT GCS Alert", "not thrown");
localStorage.setItem("ETT Depth", "null");

localStorage.setItem("GCS<13", "false");
//localStorage.setItem("GCS", "null"); IN DATABASE
localStorage.setItem("GCS Motor", "null");
localStorage.setItem("GCS Verbal", "null");
localStorage.setItem("GCS Eye", "null");


localStorage.setItem("GCS<13 Alert", "not thrown");

localStorage.setItem("Right Pupil Size", "null");
localStorage.setItem("Left Pupil Size", "null");

localStorage.setItem("Shock Level", "null");
localStorage.setItem("Shock Alert", "not thrown");

//localStorage.setItem("HR", "null"); IN DATABASE
localStorage.setItem("Bradycardia Alert", "not thrown");
localStorage.setItem("Tachycardia Alert", "not thrown");

//localStorage.setItem("BP", "null"); IN DATABASE
localStorage.setItem("Hypotensive alert", "not thrown");

localStorage.setItem("Patient Age", "null");

localStorage.setItem("Type and Cross Alert", "not thrown");
//localStorage.setItem("Type and Cross", "none"); IN DATABASE

localStorage.setItem("Poor Perfusion", "not thrown");
// localStorage.setItem("Lip Color", "null"); IN DATABASE
// localStorage.setItem("Nail Bed Color", "null"); IN DATABASE
// localStorage.setItem("Cap Refill Time", "null"); IN DATABASE

localStorage.setItem("Alert Consider IVF", "not thrown");
localStorage.setItem("Alert Fluids Given", "not thrown");
localStorage.setItem("Alert Excess IVF", "not thrown");
localStorage.setItem("IVF", "null");

//Variables for display of vital signs
localStorage.setItem("HR Display", "null");
localStorage.setItem("BP Display", "null");
localStorage.setItem("Shock Level Display", "null");


// localStorage.setItem("Right Chest Rise/Breath Sounds", "null"); IN DATABASE
localStorage.setItem("Right Breathing Alert", "not thrown");
// localStorage.setItem("Left Chest Rise/Breath Sounds", "null"); IN DATABASE
localStorage.setItem("Left Breathing Alert", "not thrown");

//localStorage.setItem("Massive Transfusion Protocol", "no"); IN DATABASE
localStorage.setItem("Massive Transfusion Protocol Alert", "not thrown");

//localStorage.setItem("Transfusion PRBC", "no"); IN DATABASE
localStorage.setItem("Transfusion PRBC Alert", "not thrown");

//All time stamp varibles initiated below
localStorage.setItem("Oxygen Supplementation Initiated Time", "null");
localStorage.setItem("Oxygen Supplementation Stopped Time", "null");
localStorage.setItem("Oxygen Supplementation", "not initiated");

localStorage.setItem("Bag Mask Initiated Time", "null");
localStorage.setItem("Bag Mask Stopped Time", "null");
localStorage.setItem("Bag Mask", "not initiated");
localStorage.setItem("BVM BPM", "null")

localStorage.setItem("LMA Initiated Time", "null");
localStorage.setItem("LMA Achieved Time", "null");
localStorage.setItem("LMA Stopped Time", "null");
localStorage.setItem("LMA", "not initiated");

localStorage.setItem("ETT Initiated Time", "null");
localStorage.setItem("ETT Achieved Time", "null");
localStorage.setItem("ETT Stopped Time", "null");
//localStorage.setItem("ETT", "not initiated");

localStorage.setItem("Difficult Airway Initiated Time", "null");
localStorage.setItem("Difficult Airway Achieved Time", "null");
localStorage.setItem("Difficult Airway Stopped Time", "null");
localStorage.setItem("Difficult Airway", "not initiated");

localStorage.setItem("Surgical Airway Initiated Time", "null");
localStorage.setItem("Surgical Airway Achieved Time", "null");
localStorage.setItem("Surgical Airway Stopped Time", "null");
localStorage.setItem("Surgical Airway", "not initiated");
