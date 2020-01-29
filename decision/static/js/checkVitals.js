setInterval(checkVitals, 1000);

var BP_prev = "null";
var HR_prev = "null";
var Shock_prev = "null";

function checkVitals(){
    var BP = localStorage.getItem("BP Display");
    var HR = localStorage.getItem("HR Display");
    var shock = localStorage.getItem("Shock Index Display");

    if (BP !== "null"){
        if(BP_prev === "null"){
            BP_prev = BP;
            $('#vitals_placeholder').append(BP);
        }

        else if (BP_prev !== BP){
            $('#vitals_placeholder').append(BP);
        }
    }

    if (HR !== "null"){
        if(HR_prev === "null"){
            HR_prev = HR;
            $('#vitals_placeholder').append(HR);
        }

        else if (HR_prev !== HR){
            $('#vitals_placeholder').append(HR);
        }
    }

    if (shock !== "null"){
        if(Shock_prev === "null"){
            Shock_prev = shock;
            $('#vitals_placeholder').append(shock);
        }

        else if (Shock_prev !== shock){
            $('#vitals_placeholder').append(shock);
        }
    }
}