/**
 * This file is responsible for all time based alerts in our system.
 */

/*
    Sets up global variables to determine which alerts need to be checked for.
    This will cut down on uneccessary looping and improve speed and performance.
 */
var noIvAlert = localStorage.getItem("Alert No IV");
var onePIVAlert = localStorage.getItem("Alert One PIV");

var typeAndCrossAlertDismissed = localStorage.getItem("Type and Cross Alert Dismissed?");

var perfusionAlert = localStorage.getItem("Poor Perfusion");


//This checks to see if the alerts have already been dismissed.
if(noIvAlert !== "dismissed" || onePIVAlert !== "dismissed"){
    var ivAlertInterval = setInterval(checkIV, 1000);
}

if(typeAndCrossAlertDismissed === "no"){
    var typeAndCrossInterval = setInterval(checkTypeAndCross(), 1000);
}

setInterval(checkETCO2, 1000);

setInterval(checkGCS, 1000);
setInterval(checkHR, 1000);
setInterval(checkBP, 1000);
setInterval(calcShock, 1000);
setInterval(checkFluids, 1000);
setInterval(checkBreathing, 1000);

if (perfusionAlert !== "dismissed") {
  setInterval(checkPerfusion, 1000);
}

/**
 * This method is called when 5 minutes have passed and no forms of IV Access
 * have been established. We check for the following alerts:
 *         If no IV access has been established
 *         If only 1 PIV has been established
 * We also keep track of when the alerts have been thrown to ensure we do not
 * display them multiple times.
 */
function checkIV(){
    var noIvAlert = localStorage.getItem("Alert No IV");
    var onePIVAlert = localStorage.getItem("Alert One PIV");
    var cenLineAccess = localStorage.getItem("Central Line established");
    var intraosLineAccess = localStorage.getItem("Intraosseous Line established");
    var pivAccess = localStorage.getItem("Functional Peripheral IV established");
    var PIVcount = localStorage.getItem("Functional Peripheral IV count");

    var timeElapsed = parseInt(localStorage.getItem('total_seconds_summary'), 10);

    if(timeElapsed >= 350){
        //If no IV access has been put in....
        if(cenLineAccess === "false" && intraosLineAccess === "false" && pivAccess === "false"){
            //If the no IV access alert has not already been thrown......
            if(noIvAlert === "not thrown"){
                localStorage.setItem("Alert No IV", "thrown");
                $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='no-iv-alert'>\n" +
                "                  <strong>No IV:  Consider central line or intraosseous line!</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
            }
        }

        //If no central or intraosseous line but PIV.....
        else if(cenLineAccess === "false" && intraosLineAccess === "false" && pivAccess === "true"){
            //If only 1 PIV and the correlated alert has not yet been thrown...
            if( PIVcount === "1" && onePIVAlert === "not thrown"){
                localStorage.setItem("Alert One PIV", "thrown");
                localStorage.setItem("Alert No IV", "dismissed");
                $('#no-iv-alert').remove();
                $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='one-piv-alert'>\n" +
                "                  <strong>Consider additional PIV</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
            }

            //If there are 2 or more PIV put in....
            else if(PIVcount !== "0" && PIVcount !== "1") {
                localStorage.setItem("Alert One PIV", "dismissed");
                if(noIvAlert === "thrown"){
                    $('#no-iv-alert').remove();
                }
                localStorage.setItem("Alert No IV", "dismissed");
                $('#one-piv-alert').remove();
            }
        }

        //If none of the alert parameters have been met then we check to see what alerts need to be dismissed.
        else{
            if(noIvAlert === "thrown"){
                localStorage.setItem("Alert No IV", "dismissed");
                $('#no-iv-alert').remove();
            }

            else if(onePIVAlert === "thrown"){
                localStorage.setItem("Alert One PIV", "dismissed");
                $('#one-piv-alert').remove();
            }
        }
    }

    /*If we are under the time limit for this alert but all parameters have already been met then we want to
        dismiss the alert anyways. This prevents it from being thrown twice and prevents this loop from
        being called again.*/
    else{
        if(cenLineAccess === "true" || intraosLineAccess === "true"){
            localStorage.setItem("Alert No IV", "dismissed");
        }

        else if(PIVcount !== "0" && PIVcount !== "1"){
            localStorage.setItem("Alert One PIV", "dismissed");
        }
    }

    //If all alerts have been dealt with then we can break the loop
    if(noIvAlert === "dismissed" && onePIVAlert === "dismissed"){
        clearInterval(ivAlertInterval);
    }
}

/**
 * This method is run every second to check for changes in ECO2 values.
 * For each given value, a different alert is thrown. Additionally, an alert
 * is thrown if two minutes have passed at no ETCO2 has been recorded.
 */
function checkETCO2(){
    var noEtco2Alert = localStorage.getItem("Record ETCO2 Alert");
    var currAlert = localStorage.getItem("Current alert thrown");
    var etco2 = localStorage.getItem("ETCO2");

    var timeElapsed = parseInt(localStorage.getItem('total_seconds_summary'), 10);

    //If etco2 has been recorded we check which alert to throw
    if(etco2 !== "not recorded"){
        //If this is the first time recording etco2 we dismiss the original alert
        if(noEtco2Alert === "thrown"){
             localStorage.setItem("Record ETCO2 Alert", "dismissed");
            $('#no-etco2-alert').remove();
        }

        //Check what the etco2 level is and throw alerts accordingly
        else{
            localStorage.setItem("Record ETCO2 Alert", "dismissed");
            if(etco2 === "not present" && currAlert !== "not present"){
                $('#etco2-value-alert').remove();
                localStorage.setItem("Current alert thrown", "not present");
                $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>Check Airway Placement! </strong>\n" +
                    "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }

            else if(etco2 === "<25" && currAlert !== "<25"){
                $('#etco2-value-alert').remove();
                localStorage.setItem("Current alert thrown", "<25");
                $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>ETCO<sub>2</sub> is very low! Confirm pulse and Airway</strong>\n" +
                    "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }

            else if(etco2 === "25-30" && currAlert !== "25-30"){
                $('#etco2-value-alert').remove();
                localStorage.setItem("Current alert thrown", "25-30");
                $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>Decrease Ventilation Rate</strong>\n" +
                    "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }

            else if(etco2 === "40-50" && currAlert !== "40-50"){
                $('#etco2-value-alert').remove();
                var gcs = localStorage.getItem("GCS<13");
                if(gcs === "true"){
                    localStorage.setItem("Current alert thrown", "40-50");
                     $('#alert_placeholder').append(
                        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                        "                  <strong>GCS < 13:</strong>\n" +
                        "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                        "                    <span aria-hidden=\"true\">&times;</span>\n" +
                        "                  </button>\n" +
                        "                </div>");
                }


            }

            else if(etco2 === ">50" && currAlert !== ">50"){
                $('#etco2-value-alert').remove();
                localStorage.setItem("Current alert thrown", ">50");
                $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>Increase Ventilation Rate</strong>\n" +
                    "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }

            else if (etco2 === "30-35" || etco2 === "35-40"){
                $('#etco2-value-alert').remove();
            }
        }
    }

    //If two minutes has passed and the user has not recorded etco2, we throw an alert.
    else if(timeElapsed >= 120){
        if(noEtco2Alert === "not thrown" && etco2 === "not recorded"){
            localStorage.setItem("Record ETCO2 Alert", "thrown");
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='no-etco2-alert'>\n" +
                "                  <strong>No ETCO<sub>2</sub> measured!</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        }
    }
}

/**
 * This function is responsible for recording the GCS in accordance with user input
 * and ensuring the corresponding alerts are thrown
 */
function checkGCS(){
    var motor = localStorage.getItem("GCS Motor");
    var verbal = localStorage.getItem("GCS Verbal");
    var eye = localStorage.getItem("GCS Eye");

    var alert = localStorage.getItem("No GCS Alert");

    if (motor !== "null" && verbal !== "null" && eye !== "null"){
        var m = parseInt(motor, 10);
        var v = parseInt(verbal, 10);
        var e = parseInt(eye, 10);

        var gcs = m + v + e;
        localStorage.setItem("GCS", gcs.toString(10));
        console.log(gcs);
        if (gcs < 13){
            localStorage.setItem("GCS<13", "true");
        }

        if(alert === "thrown"){
            localStorage.setItem("No GCS Alert", "dismissed");
            $('#GCS-alert').remove();
        }
    }

    else if(alert === "not thrown"){
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='GCS-alert'>\n" +
            "                  <strong>Determine GCS before giving intubation meds!</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
        localStorage.setItem("No GCS Alert", "thrown");
    }
}


function checkHR(){
    var HR_recorded = localStorage.getItem("HR");
    var brady = localStorage.getItem("Bradycardia Alert");
    var tach = localStorage.getItem("Tachycardia Alert");

    if(HR_recorded !== "null"){
        var HR = parseInt(HR_recorded);

        if(HR <= 100 && HR >=60){
            if(brady === "thrown"){
                $('#brady-alert').remove();
                localStorage.setItem("Bradycardia Alert", "dismissed");
            }

            if(tach === "thrown"){
                $('#tach-alert').remove();
                localStorage.setItem("Tachycardia Alert", "dismissed");
            }
        }
        else if (HR < 60 && brady !== "thrown"){
            if(tach === "thrown"){
                $('#tach-alert').remove();
                localStorage.setItem("Tachycardia Alert", "dismissed");
            }

            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='brady-alert'>\n" +
                "                  <strong>Bradycardia:  Consider cause!</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
            localStorage.setItem("Bradycardia Alert", "thrown");
        }

        else if (HR > 100 && tach !== "thrown"){
            if(brady === "thrown"){
                $('#brady-alert').remove();
                localStorage.setItem("Bradycardia Alert", "dismissed");
            }
              $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='tach-alert'>\n" +
                "                  <strong>Tachycardia</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
              localStorage.setItem("Tachycardia Alert", "thrown");
        }
    }
}

/**
 * This function is responsible for checking that perfusion is checked. Throws alert if poor.
 * are given
 */
function checkPerfusion(){
    var lipcol = localStorage.getItem("Lip Color");
    var nailbcol = localStorage.getItem("Nail Bed Color");
    var caprtime = localStorage.getItem("Cap Refill Time");
    var alert = localStorage.getItem("Poor Perfusion");
    // If lip color is white poor perfuion alert is thrown.

    if(lipcol !== null || nailbcol !== null || caprtime !== null) {

      // Dismiss the alert if it is no longer needed
      if(lipcol !== "White" && nailbcol !== "White" && caprtime !== ">4sec") {
        if(alert === "thrown" ) {
          $('#poor-perfusion-alert').remove();
          localStorage.setItem("Poor Perfusion", "dismissed");
        }
      }

      // Check if the alert is not currently thrown or has been dismissed
      if(alert === "not thrown" || alert === "dismissed"){
        if (lipcol === "White") {
            localStorage.setItem("Poor Perfusion", "thrown");
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='poor-perfusion-alert'>\n" +
                "                  <strong>Patient has poor perfusion.</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        }
        // If nail bed color is white poor perfusion alert is thrown.
        else if (nailbcol === "White") {
            localStorage.setItem("Poor Perfusion", "thrown");
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='poor-perfusion-alert'>\n" +
                "                  <strong>Patient has poor perfusion.</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        }
        // If capillary refill is more than 4 seconds poor perfusion alert is thrown.
        else if (caprtime === ">4sec") {
            localStorage.setItem("Poor Perfusion", "thrown");
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='poor-perfusion-alert'>\n" +
                "                  <strong>Patient has poor perfusion.</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        }
     }
    }
}

function checkBreathing(){
    var rightRiseSounds = localStorage.getItem("Right Chest Rise/Breath Sounds");
    var rightAlert = localStorage.getItem("Right Breathing Alert");
    var leftRiseSounds = localStorage.getItem("Left Chest Rise/Breath Sounds");
    var leftAlert = localStorage.getItem("Left Breathing Alert");
    if (rightRiseSounds === "Yes" && rightAlert === "thrown"){
      $('#right-breathing-alert').remove();
      localStorage.setItem("Right Breathing Alert", "dismissed");
    }
    // Check if the alert is not currently thrown or has been dismissed
    if(rightAlert === "not thrown" || rightAlert === "dismissed"){
      if (rightRiseSounds === "No") {
          localStorage.setItem("Right Breathing Alert", "thrown");
          $('#alert_placeholder').append(
              "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='right-breathing-alert'>\n" +
              "                  <strong>Check ETT depth; consider right chest tube.</strong>\n" +
              "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
              "                    <span aria-hidden=\"true\">&times;</span>\n" +
              "                  </button>\n" +
              "                </div>");
      }
    }
    if (leftRiseSounds === "Yes" && leftAlert === "thrown"){
      $('#left-breathing-alert').remove();
      localStorage.setItem("Left Breathing Alert", "dismissed");
    }
    // Check if the alert is not currently thrown or has been dismissed
    if(leftAlert === "not thrown" || leftAlert === "dismissed"){
      if (leftRiseSounds === "No") {
          localStorage.setItem("Left Breathing Alert", "thrown");
          $('#alert_placeholder').append(
              "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='left-breathing-alert'>\n" +
              "                  <strong>Check ETT depth; consider left chest tube.</strong>\n" +
              "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
              "                    <span aria-hidden=\"true\">&times;</span>\n" +
              "                  </button>\n" +
              "                </div>");
      }
    }
}

function checkBP(){
    var BP_recorded = localStorage.getItem("BP");
    var hypo = localStorage.getItem("Hypotensive Alert");
    var age = localStorage.getItem("Patient Age");
    if(BP_recorded !== "null" && age !== "null"){
        var BP = parseInt(BP_recorded) + (2 * parseInt(age));

        if(BP >=55){
            if(hypo === "thrown"){
                $('#hypo-alert').remove();
                localStorage.setItem("Hypotensive Alert", "dismissed");
            }
        }
        else if (BP < 55 && hypo !== "thrown"){
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='hypo-alert'>\n" +
                "                  <strong>Hypotensive!</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
            localStorage.setItem("Hypotensive Alert", "thrown");
        }
    }
}

function calcShock(){
     var BP_recorded = localStorage.getItem("BP");
     var HR_recorded = localStorage.getItem("HR");
     var shock_alert = localStorage.getItem("Shock Alert");

     if (BP_recorded !== "null" && HR_recorded !== "null"){
         var BP = parseInt(BP_recorded);
         var HR = parseInt(HR_recorded);

         var shock = Math.round(HR/BP);
         localStorage.setItem("Shock Level", shock.toString(10));

         var min = (parseInt(localStorage.getItem('total_seconds_main'),10))/60;
         var sec = (parseInt(localStorage.getItem('total_seconds_main'),10))%60;

         if(min < 1){
            min = 0;
         }

         var display = "Shock Level: " + shock.toString(10) + " at " + min.toString(10) +
             "min " + sec.toString(10) + "sec";
         localStorage.setItem('Shock Level Display',display);

         if(shock > 1.0 && shock_alert !== "thrown"){
             $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='shock-alert'>\n" +
                "                  <strong>Elevated shock index!</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
            localStorage.setItem("Shock Alert", "thrown");
         }

         else if (shock < 1.0 && shock_alert === "thrown") {
             $('#shock-alert').remove();
             localStorage.setItem("Shock Alert", "dismissed");
         }
     }
}

function checkTypeAndCross(){
    var typeAndCrossSelection = localStorage.getItem("Type and Cross Selection");
    var typeAndCrossAlert = localStorage.getItem("Type and Cross Alert");
    if (typeAndCrossAlert === "not thrown" && typeAndCrossSelection === "no") {
        localStorage.setItem("Type and Cross Selection", "thrown");
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='type-and-cross-alert'>\n" +
            "                  <strong>Consider Type and Cross!!!" + typeAndCrossAlert +"</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }
    else if(typeAndCrossAlert === "thrown" ) {
      $('#type-and-cross-alert').remove();
      localStorage.setItem("Type and Cross Alert Dismissed?", "yes");
      clearInterval(typeAndCrossInterval);
    }
}

function checkFluids(){
  var alertIVFluids = localStorage.getItem("Alert Consider IVF");
  var alertFluidsGiven = localStorage.getItem("Alert Fluids Given");
  var alertExcessIVFluids = localStorage.getItem("Alert Excess IVF");
  var iVFSelection = localStorage.getItem("IVF");
  if((alertIVFluids === "not thrown" || alertIVFluids === "dismissed") && iVFSelection === "none"){
    localStorage.setItem("Alert Consider IVF", "thrown");
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='consider-ivf-alert'>\n" +
        "                  <strong>Consider IVF bolus</strong>\n" +
        "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                  </button>\n" +
        "                </div>");
  }
  else if(alertIVFluids === "thrown" && iVFSelection !== "none") {
    $('#consider-ivf-alert').remove();
    localStorage.setItem("Alert Consider IVF", "dismissed");
  }
  if((alertFluidsGiven === "not thrown" || alertFluidsGiven === "dismissed") && iVFSelection === "<20mL/kg"){
    localStorage.setItem("Alert Fluids Given", "thrown");
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='fluids-given-alert'>\n" +
        "                  <strong>Fluids Given</strong>\n" +
        "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                  </button>\n" +
        "                </div>");
  }
  else if(alertFluidsGiven === "thrown" && iVFSelection !== "<20mL/kg") {
    $('#fluids-given-alert').remove();
    localStorage.setItem("Alert Fluids Given", "dismissed");
  }
  if((alertExcessIVFluids === "not thrown" || alertExcessIVFluids === "dismissed") && iVFSelection === ">20mL/kg"){
    localStorage.setItem("Alert Excess IVF", "thrown");
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='excess-ivf-alert'>\n" +
        "                  <strong>Excess IVFs, consider transfusion</strong>\n" +
        "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                  </button>\n" +
        "                </div>");
  }
  else if(alertExcessIVFluids === "thrown" && iVFSelection !== ">20mL/kg") {
    $('#excess-ivf-alert').remove();
    localStorage.setItem("Alert Excess IVF", "dismissed");
  }


}
