//Set up HR and BP text fields
var hrText = document.getElementById("hr");
var bpText = document.getElementById("bp");
var etco2Text = document.getElementById("etco2");

hrText.oninput = recordHR;
bpText.oninput = recordBP;
etco2Text.oninput = recordEtco2;

var timeStamp = "";
function recordHR(){
    setTimeout(function(){
        createTimeStamp();

        var hr = parseInt(hrText.value, 10);
        updateVitals("HR", hr.toString(10));
        localStorage.setItem("HR_prev", hr.toString(10));

        var hrDisplay = hr + " at ";
        updateVitals("HR_History", hrDisplay + timeStamp);
        localStorage.setItem("HR_display", hrDisplay + timeStamp);

        //Because the HR was updated we must update the Shock Index as well
        var bp = localStorage.getItem('BP_prev');
        if(bp !== "null" && hr !== null){
            var newShock = hr/(parseInt(bp,10)).toFixed(2);
            var shockDisplay = newShock + " at ";
            updateVitals("Shock_Level", newShock.toString(10));
            localStorage.setItem("Shock_display", shockDisplay + timeStamp);
            updateVitals("Shock_History", shockDisplay + timeStamp);
        }

    }, 1000);
}

function recordBP(){
        createTimeStamp();

        setTimeout(function(){
            var bp = parseInt(bpText.value);
            updateVitals("BP", bp.toString(10));
            localStorage.setItem("BP_prev", bp.toString(10));

            var bpDisplay = bp + " at ";
            updateVitals("BP_History", bpDisplay + timeStamp);
            localStorage.setItem("BP_display", bpDisplay + timeStamp);

            //Because the BP  was updated we must update the Shock Index as well
            var hr = localStorage.getItem('HR_prev');
            if(hr !== "null" && bp !== null){
                var newShock = ((parseInt(hr,10))/bp).toFixed(2);
                var shockDisplay = newShock + " at ";
                updateVitals("Shock_Level", newShock.toString(10));
                localStorage.setItem("Shock_display", shockDisplay + timeStamp);
                updateVitals("Shock_History", shockDisplay + timeStamp);
            }

        }, 1000);
}

function recordEtco2(value){
    createTimeStamp();

    setTimeout(function(){
        var etco2 = parseInt(etco2Text.value);
        updateVitals("ETCO2", etco2.toString(10));

        var etco2Display = etco2 + " at ";
        updateVitals("ETCO2_History", etco2Display + timeStamp);
        localStorage.setItem("ETCO2_Display", etco2Display + timeStamp);
        }, 1000);
}


function recordGCS(type, value){

    if(type === 'motor'){
        updateVitals("GCS_Motor", value);
        localStorage.setItem("GCS Motor", value);
    }

    else if(type === 'verbal'){
        updateVitals("GCS_Verbal", value);
        localStorage.setItem("GCS Verbal", value);
    }

    else{
        updateVitals("GCS_Eye", value);
        localStorage.setItem("GCS Eye", value);
    }

    var gcs_motor = localStorage.getItem("GCS Motor");
    var gcs_verbal = localStorage.getItem("GCS Motor");
    var gcs_eye = localStorage.getItem("GCS Motor");

    if(gcs_motor !== "null" && gcs_verbal !== "null" && gcs_eye !== "null"){
        createTimeStamp();
        var gcs = parseInt(gcs_motor,10) + parseInt(gcs_verbal, 10) + parseInt(gcs_eye, 10);
        var gcsDisplay = gcs + " at ";

        updateVitals("GCS_History", gcsDisplay + timeStamp);
        localStorage.setItem("GCS_Display", gcsDisplay + timeStamp);
    }
}
function createTimeStamp(){
    var min = (parseInt(localStorage.getItem('total_seconds_main'),10))/60;
    var sec = (parseInt(localStorage.getItem('total_seconds_main'),10))%60;
    var hour = 0;

    if(min < 1){
        min = 0;
    }

    if(min >= 60){
        hour = min/60;
        min = min%60;
    }

    if(hour !== 0){
        timeStamp = hour.toString(10) + "hr " +  min.toString(10) + "min " + sec.toString(10) + "sec";
    }

    timeStamp = min.toString(10) + "min " + sec.toString(10) + "sec";
}
function updateVitals(key, value){
    $.ajax({
        type:"POST",
        url: '/setItem/',
        data: {
            'key': key,
            'value': value,
        },

        success: function( data ) {
            console.log("Vitals Updated!");
        }
    });
}
