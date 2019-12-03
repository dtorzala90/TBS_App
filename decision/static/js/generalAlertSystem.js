/*
    Sets up global variables to be used in various functions. Also checks
    to see if these various alerts have already been thrown and dismissed. If
    that is the case, there is no need to run a loop to check for these alert
    criteria again.
 */
var ivAlertThrown = localStorage.getItem("ivAlert").toString();

var ETCO2alert = localStorage.getItem("ETCO2alert").toString();

if(ivAlertThrown !== "dismissed"){
    setInterval(checkIV, 1000);
}

if(ETCO2alert !== "dismissed"){
    setInterval(checkETCO2, 1000);
}

/**
 *  Using local storage this function does the following:
 *      Checks if it has been longer than 5 minutes
 *      If it has then we check to see if an iv alert has been previously
 *      dismissed - if it has then we don't worry about it but if it hasn't
 *      then we check to see if there is iv access. If there is no iv access
 *      then we throw and alert and update the local storage variables.
 *      If there is access then we dismiss the previously thrown alert.
 */
function checkIV(){
    var ivAlertThrown = localStorage.getItem("ivAlert");
    var ivAccess = localStorage.getItem("IVACCESS");
    var timeElapsed = parseInt(localStorage.getItem('total_seconds_summary'), 10);

        if(timeElapsed >= 20 && ivAlertThrown !== "dismissed"){
            if(ivAccess === "false" && ivAlertThrown !== "thrown") {
                localStorage.setItem("ivAlert", "thrown");
                  $('#alert_placeholder').append(
                      "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='iv-alert'>\n" +
                      "                  <strong>Alert: No IV:  Consider central line or intraosseous line!</strong>\n" +
                      "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                      "                    <span aria-hidden=\"true\">&times;</span>\n" +
                      "                  </button>\n" +
                      "                </div>");
            }

            else if (ivAccess === "true"){
                localStorage.setItem("ivAlert", "dismissed");
                $('#iv-alert').remove();
            }
        }
}

function checkETCO2(){
    var ETCO2alert = localStorage.getItem("ETCO2alert");
    var ETCO2recorded = localStorage.getItem("ETCO2recorded");
    var timeElapsed = parseInt(localStorage.getItem('total_seconds_summary'), 10);

        if(timeElapsed >= 26 && ETCO2alert !== "dismissed"){
            if(ETCO2recorded === "false" && ETCO2alert !== "thrown") {
                localStorage.setItem("ETCO2alert", "thrown");
                  $('#alert_placeholder').append(
                      "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-alert'>\n" +
                      "                  <strong>Alert: No ETCO2 measured!</strong>\n" +
                      "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                      "                    <span aria-hidden=\"true\">&times;</span>\n" +
                      "                  </button>\n" +
                      "                </div>");
            }

            else if (ETCO2recorded === "true") {
                localStorage.setItem("ETCO2alert", "dismissed");
                $('#etco2-alert').remove();
            }
        }
}
