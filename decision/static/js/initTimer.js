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

localStorage.setItem("GCS", "null");
localStorage.setItem("GCS Motor", "null");
localStorage.setItem("GCS Verbal", "null");
localStorage.setItem("GCS Eye", "null");

localStorage.setItem("GCS<13", "false");
localStorage.setItem("GCS<13 Alert", "not thrown");
localStorage.setItem("No GCS Alert", "not thrown");