//Set up HR and BP text fields
var hrText = document.getElementById("hrText");
var bpText = document.getElementById("bpText");
var etco2Text = document.getElementById("etco2Text");

hrText.oninput = recordHR;
bpText.oninput = recordBP;
etco2Text.oninput = recordEtco2;

async function recordHR(){
    createTimeStamp();

    var hr = await readHr();

    if(isNaN(hr)){
         updateVitals("HR", "null");
         localStorage.setItem("HR_Display", ' ');
         updateVitals("Shock_Level", "null");
         localStorage.setItem("Shock_display", " ");
         return;
    }

    updateVitals("HR", hr.toString(10));
    localStorage.setItem("HR_prev", hr.toString(10));

    var hrDisplay = hr + " at ";
    localStorage.setItem("HR_display", hrDisplay + timeStamp);

    //Because the HR was updated we must update the Shock Index as well
    var bp = localStorage.getItem('BP_prev');
    if(bp !== "null" && hr !== null){
        var newShock = hr/(parseInt(bp,10)).toFixed(2);
        var shockDisplay = newShock + " at ";
        updateVitals("Shock_Level", newShock.toString(10));
        localStorage.setItem("Shock_display", shockDisplay + timeStamp);
    }
}

async function recordBP(){
        createTimeStamp();

        var bp = await readBp();

        if(isNaN(bp)){
             updateVitals("BP", "null");
             localStorage.setItem("BP_Display", ' ');
             updateVitals("Shock_Level", "null");
             localStorage.setItem("Shock_display", " ");
             return;
        }

        updateVitals("BP", bp.toString(10));
        localStorage.setItem("BP_prev", bp.toString(10));

        var bpDisplay = bp + " at ";
        localStorage.setItem("BP_display", bpDisplay + timeStamp);

        //Because the BP  was updated we must update the Shock Index as well
        var hr = localStorage.getItem('HR_prev');
        if(hr !== "null" && bp !== null){
            var newShock = ((parseInt(hr,10))/bp).toFixed(2);
            var shockDisplay = newShock + " at ";
            updateVitals("Shock_Level", newShock.toString(10));
            localStorage.setItem("Shock_display", shockDisplay + timeStamp);
        }
}

async function recordEtco2(){
    etco2time = createTimeStamp();

    var etco2 = await readEtco2();

    if(isNaN(etco2)){
         updateVitals("ETCO2", "null");
         localStorage.setItem("ETCO2_Display", ' ');
         return;
    }

    updateVitals("ETCO2", etco2.toString(10));
    var etco2Display = etco2 + " at ";
    localStorage.setItem("ETCO2_Display", etco2Display + timeStamp);
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
    var gcs_verbal = localStorage.getItem("GCS Verbal");
    var gcs_eye = localStorage.getItem("GCS Eye");

    if(gcs_motor !== "null" && gcs_verbal !== "null" && gcs_eye !== "null"){
        createTimeStamp();
        var gcs = parseInt(gcs_motor,10) + parseInt(gcs_verbal, 10) + parseInt(gcs_eye, 10);
        var gcsDisplay = gcs + " at ";

        updateVitals("GCS", gcs.toString(10));
        localStorage.setItem("GCS_Display", gcsDisplay + timeStamp);
    }
}
function createTimeStamp(){
    var min = (parseInt(localStorage.getItem('total_seconds_main'),10))/60;
    var sec = Math.round((parseInt(localStorage.getItem('total_seconds_main'),10))%60);
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

        }
    });
}

function readEtco2(){
    return new Promise (resolve => {
        setTimeout(function(){
            resolve(parseInt(etco2Text.value));
            }, 1000);

    })
}

function readHr(){
     return new Promise (resolve => {
        setTimeout(function(){
            resolve(parseInt(hrText.value));
            }, 1000);
    })
}

function readBp(){
     return new Promise (resolve => {
        setTimeout(function(){
            resolve(parseInt(bpText.value));
            }, 1000);
    })
}