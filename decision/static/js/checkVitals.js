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
            $('#vitals_placeholder').append(localStorage.getItem("BP Display"));
        }
    }

    if (HR !== "null"){
        if(HR_prev !== HR){
            HR_prev = HR;
            $('#vitals_placeholder').append(localStorage.getItem("HR Display"));
        }
    }

    if (shock !== "null"){
        if(Shock_prev !== shock){
            Shock_prev = shock;
            $('#vitals_placeholder').append(localStorage.getItem("Shock Level Display"));
        }
    }
}