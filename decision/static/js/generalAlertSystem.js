/*
    Sets up a loop to check the IV alerts every second to ensure nothing needs to be
    thrown or dismissed.
 */

setInterval(checkIV, 1000);

/**
 *  Using local storage this function does the following:
 *      Checks if it has been longer than 2 minutes
 *      If it has then we check to see if an iv alert has been previously
 *      dismissed - if it has then we don't worry about it but if it hasn't
 *      then we check to see if there is iv access. If there is no iv access
 *      then we throw and alert and update the local storage variables.
 *      If there is access then we dismiss the previously thrown alert.
 */
function checkIV(){
        var ivAlertThrown = localStorage.getItem("ivAlert");
        var alertBox = document.getElementById("alert_placeholder");
        var ivAccess = localStorage.getItem("IVACCESS");
        var timeElapsed = parseInt(localStorage.getItem('total_seconds_summary'), 10);

        if(timeElapsed >= 12 && ivAlertThrown !== "dismissed"){
            if(ivAccess === "false") {
                localStorage.setItem("ivAlert", "thrown");
                localStorage.setItem("IVACCESS", "true");
                alertBox.append('No IV: Consider central line or intraosseous line!');
            }

            else{
                localStorage.setItem("ivAlert", "dismissed");
                alertBox.append('IV PUT IN');
            }
        }
}
