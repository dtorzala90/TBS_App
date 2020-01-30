setInterval(checkVitals, 1000);

var BP_prev = "null";
var HR_prev = "null";
var Shock_prev = "null";

function checkVitals(){
    var BP = localStorage.getItem("BP");
    var HR = localStorage.getItem("HR");
    var shock = localStorage.getItem("Shock Level");


    if (BP !== "null"){
        if(BP_prev !== BP){
            BP_prev = BP;
            $('#bp_placeholder').append(localStorage.getItem("BP Display") + "<br>");
        }
    }

    if (HR !== "null"){
        if(HR_prev !== HR){
            HR_prev = HR;
            $('#hr_placeholder').append(localStorage.getItem("HR Display") + "<br>");
        }
    }

    if (shock !== "null"){
        if(Shock_prev !== shock){
            Shock_prev = shock;
            $('#shock_placeholder').append(localStorage.getItem("Shock Level Display") + "<br>");
        }
    }
}