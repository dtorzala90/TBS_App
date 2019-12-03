<!-- Clear data from previous session and initialize global values -->
localStorage.clear();

localStorage.setItem("Alert No IV", "not thrown");
localStorage.setItem("Alert One PIV", "not thrown");

localStorage.setItem("Functional Peripheral IV established", "false");
localStorage.setItem("Functional Peripheral IV count", "0");

localStorage.setItem("Intraosseous Line established", "false");
localStorage.setItem("Central Line established", "false");

localStorage.setItem("Record ETCO2 Alert", "not thrown");
localStorage.setItem("ETCO2 Recorded", "false");
localStorage.setItem("ETCO2", "-1");