/**
 * This file is responsible for all time based alerts in our system.
 */

/*
    Sets up global variables to determine which alerts need to be checked for.
    This will cut down on uneccessary looping and improve speed and performance.
 */
var noIvAlert = localStorage.getItem("Alert No IV");
var onePIVAlert = localStorage.getItem("Alert One PIV");


//This checks to see if the alert has already been dismissed.
if(noIvAlert !== "dismissed" || onePIVAlert !== "dismissed"){
    var ivAlertInterval = setInterval(checkIV, 1000);
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

    if(timeElapsed >= 10){
        //If no IV access has been put in....
        if(cenLineAccess === "false" && intraosLineAccess === "false" && pivAccess === "false"){
            //If the no IV access alert has not already been thrown......
            if(noIvAlert === "not thrown"){
                localStorage.setItem("Alert No IV", "thrown");
                $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='no-iv-alert'>\n" +
                "                  <strong>Alert: No IV:  Consider central line or intraosseous line!</strong>\n" +
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
                localStorage.setItem("Alert No IV Established", "dismissed");
                $('#no-iv-alert').remove();
                 $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='one-piv-alert'>\n" +
                "                  <strong>Alert:  Consider additional PIV</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
            }

            //If there are 2 or more PIV put in....
            else if(PIVcount !== "0" && PIVcount !== "1") {
                localStorage.setItem("Alert One PIV Established", "dismissed");
                if(noIvAlert === "thrown"){
                    $('#no-iv-alert').remove();
                }
                localStorage.setItem("Alert No IV Established", "dismissed");
                $('#one-piv-alert').remove();
            }
        }

        //If none of the alert parameters have been met then we check to see what alerts need to be dismissed.
        else{
            if(noIvAlert === "thrown"){
                localStorage.setItem("Alert No IV Established", "dismissed");
                $('#no-iv-alert').remove();
            }

            else if(onePIVAlert === "thrown"){
                localStorage.setItem("Alert One PIV Established", "dismissed");
                $('#one-piv-alert').remove();
            }
        }
    }

    /*If we are under the time limit for this alert but all parameters have already been met then we want to
        dismiss the alert anyways. This prevents it from being thrown twice and prevents this loop from
        being called again.*/
    else{
        console.log("Under Time, checking for params");
        if(cenLineAccess === "true" || intraosLineAccess === "true"){
            localStorage.setItem("Alert No IV Established", "dismissed");
        }

        else if(PIVcount !== "0" && PIVcount !== "1"){
            localStorage.setItem("Alert One PIV Established", "dismissed");
        }
    }

    //If all alerts have been dealt with then we can break the loop
    if(noIvAlert === "dismissed" && onePIVAlert === "dismissed"){
        clearInterval(ivAlertInterval);
    }
}

