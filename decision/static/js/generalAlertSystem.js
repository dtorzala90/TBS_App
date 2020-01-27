/**
 * This file is responsible for all time based alerts in our system.
 */

/*
    Sets up global variables to determine which alerts need to be checked for.
    This will cut down on uneccessary looping and improve speed and performance.
 */
var noIvAlert = localStorage.getItem("Alert No IV");
var onePIVAlert = localStorage.getItem("Alert One PIV");

//This checks to see if the alerts have already been dismissed.
if(noIvAlert !== "dismissed" || onePIVAlert !== "dismissed"){
    var ivAlertInterval = setInterval(checkIV, 1000);
}

setInterval(checkETCO2, 1000);
setInterval(checkGCS, 1000);
setInterval(checkHR, 1000);
setInterval(checkBP, 1000);
setInterval(calcShock, 1000);

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

function checkBP(){
    var BP_recorded = localStorage.getItem("BP");
    var hypo = localStorage.getItem("Hypotensive Alert");
    var age = localStorage.getItem("Patient Age");
    if(BP_recorded !== "null"){
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

         var shock = HR/BP;
         localStorage.setItem("Shock Level", shock.toString(10));

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

         else if (shock < 1.0 && shock_alert === "thrown"){
             $('#shock-alert').remove();
             localStorage.setItem("Shock Alert", "dismissed");
         }
     }
}