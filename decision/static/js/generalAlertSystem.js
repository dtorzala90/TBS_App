setInterval(checkIV, 1000);

function checkIV(){
        var ivAlertThrown = localStorage.getItem("ivAlert");
        var alertBox = document.getElementById("alert_placeholder");
        var ivAccess = localStorage.getItem("IVACCESS");
        var timeElapsed = parseInt(localStorage.getItem('total_seconds_summary'), 10);

        if(timeElapsed >= 12){
            if(ivAccess === "false") {
                localStorage.setItem("ivAlert", "thrown");
                localStorage.setItem("IVACCESS", "true");
                alertBox.append('No IV: Consider central line or intraosseous line!               ');
            }

            else{
                if(ivAlertThrown === "thrown"){
                    localStorage.setItem("ivAlert", "dismissed");
                    alertBox.append('IV PUT IN');
                }
            }
        }
}
