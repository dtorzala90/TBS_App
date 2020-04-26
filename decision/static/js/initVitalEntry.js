//Set up HR and BP text fields
var hrText = document.getElementById("hrText");
var bpText = document.getElementById("bpText");
var etco2Text = document.getElementById("etco2Text");
var leftPupilText = document.getElementById("pupilsizeLeft");
var rightPupilText = document.getElementById("pupilsizeRight");

function recordHR(){
    createTimeStamp();
    var hr = parseInt(hrText.value);
    hrText.value = "";

    if(isNaN(hr)){
         updateVitals("HR", "null");
         localStorage.setItem("HR_Display", ' ');
         updateVitals("Shock_Level", "null");
         localStorage.setItem("Shock_display", " ");
         return;
    }

    updateVitals("HR", hr.toString(10));
    localStorage.setItem("HR_prev", hr.toString(10));

    var hrDisplay = hr.toString(10) + " at ";
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

function recordBP(){
        createTimeStamp();
        var bp = parseInt(bpText.value);
        bpText.value = "";

        if(isNaN(bp)){
             updateVitals("BP", "null");
             localStorage.setItem("BP_Display", ' ');
             updateVitals("Shock_Level", "null");
             localStorage.setItem("Shock_display", " ");
             return;
        }

        updateVitals("BP", bp.toString(10));
        localStorage.setItem("BP_prev", bp.toString(10));

        var bpDisplay = bp.toString(10) + " at ";
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

function recordEtco2(){
    etco2time = createTimeStamp();
    etco2 = parseInt(etco2Text.value);
    etco2Text.value = "";

    if(isNaN(etco2)){
         updateVitals("ETCO2", "null");
         localStorage.setItem("ETCO2_Display", ' ');
         return;
    }

    updateVitals("ETCO2", etco2.toString(10));
    var etco2Display = etco2.toString(10) + " at ";
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

function recordPupilSize(side){
    if(side === 'right'){
        var size = parseInt(rightPupilText.value);
        rightPupilText.value = "";

        if(isNaN(size)){
            localStorage.setItem("RightPupil_Display", " ");
            updateVitals("Pupil_Size_Right", "null");
            return;
        }

        var display = "Right Pupil: " + size.toString(10) + "cm";
        localStorage.setItem("RightPupil_Display", display);

        updateVitals("Pupil_Size_Right", size.toString(10));
    }

    else if(side === 'left'){
        var size = parseInt(leftPupilText.value);
        leftPupilText.value = "";

        if(isNaN(size)){
            localStorage.setItem("LeftPupil_Display", " ");
             updateVitals("Pupil_Size_Left", "null");
             return;
        }
        var display = "Left Pupil: " + size.toString(10) + "cm";
        localStorage.setItem("LeftPupil_Display", display);

        updateVitals("Pupil_Size_Left", size.toString(10));
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
