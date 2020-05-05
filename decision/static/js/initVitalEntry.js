//Set up HR and BP text fields
var hrText = document.getElementById("hrText");
var bpText = document.getElementById("bpText");
var etco2Text = document.getElementById("etco2Text");
var leftPupilText = document.getElementById("pupilsizeLeft");
var rightPupilText = document.getElementById("pupilsizeRight");

var etco2_vals = [' ', ' ', ' '];
var hr_vals = [' ', ' ', ' '];
var bp_vals = [' ', ' ', ' '];

function recordHR(){
    var time = createTimeStamp();
    var hr = parseInt(hrText.value);
    hrText.value = "";

    if(isNaN(hr)){
         updateVitals("HR", 'Unknown','HR_History','Unknown','unknown', time);
         localStorage.setItem("HR_Display", ' ');
         updateVitals("Shock_Level", 'Unknown','Shock_History', 'Unknown', 'unknown', time);
         localStorage.setItem("Shock_display", " ");
         return;
    }

    updateVitals("HR", hr.toString(10),'HR_History',hr.toString(10),'unknown', time);
    localStorage.setItem("HR_prev", hr.toString(10));

    var hrDisplay = hr.toString(10) + " at " + time;
    localStorage.setItem("HR_display", hrDisplay);
    populateUI('hr',hrDisplay);

    //Because the HR was updated we must update the Shock Index as well
    var bp = localStorage.getItem('BP_prev');
    if(bp !== "null" && hr !== null){
        var newShock = hr/(parseInt(bp,10)).toFixed(2);
        var shockDisplay = newShock + " at " + time;
        updateVitals("Shock_Level", newShock.toString(10),'Shock_History', newShock.toString(10), 'unknown', time);
        localStorage.setItem("Shock_display", shockDisplay);
    }
}

function recordBP(){
        var time = createTimeStamp();
        var bp = parseInt(bpText.value);
        bpText.value = "";

        if(isNaN(bp)){
             updateVitals("BP", 'Unknown','BP_History','Unknown','unknown', time);
             localStorage.setItem("BP_Display", ' ');
             updateVitals("Shock_Level", 'Unknown','Shock_History', 'Unknown', 'unknown', time);
             localStorage.setItem("Shock_display", " ");
             return;
        }

        updateVitals("BP", bp.toString(10),'BP_History',bp.toString(10),'unknown', time);
        localStorage.setItem("BP_prev", bp.toString(10));

        var bpDisplay = bp.toString(10) + " at " + time;
        localStorage.setItem("BP_display", bpDisplay);
        populateUI('bp',bpDisplay);

        //Because the BP  was updated we must update the Shock Index as well
        var hr = localStorage.getItem('HR_prev');
        if(hr !== "null" && bp !== null){
            var newShock = ((parseInt(hr,10))/bp).toFixed(2);
            var shockDisplay = newShock + " at " + time;
            updateVitals("Shock_Level", newShock.toString(10),'Shock_History', newShock.toString(10), 'unknown', time);
            localStorage.setItem("Shock_display", shockDisplay);
        }
}

function recordEtco2(){
    var time = createTimeStamp();
    etco2 = parseInt(etco2Text.value);
    etco2Text.value = "";

    if(isNaN(etco2)){
        updateVitals("ETCO2", 'Unknown','ETCO2_History','Unknown','unknown', time);
         localStorage.setItem("ETCO2_Display", ' ');
         return;
    }

    updateVitals("ETCO2", etco2.toString(10),'ETCO2_History',etco2.toString(10),'unknown', time);
    var etco2Display = etco2.toString(10) + " at " + time;
    localStorage.setItem("ETCO2_Display", etco2Display);
    populateUI('etco2',etco2Display);

}


function recordGCS(type, value){
    var time = createTimeStamp();

    if(type === 'motor'){
        setItemAjax("GCS_Motor", value);
        localStorage.setItem("GCS Motor", value);
    }

    else if(type === 'verbal'){
        setItemAjax("GCS_Verbal", value);
        localStorage.setItem("GCS Verbal", value);
    }

    else{
        setItemAjax("GCS_Eye", value);
        localStorage.setItem("GCS Eye", value);
    }

    var gcs_motor = localStorage.getItem("GCS Motor");
    var gcs_verbal = localStorage.getItem("GCS Verbal");
    var gcs_eye = localStorage.getItem("GCS Eye");

    if(gcs_motor !== "null" && gcs_verbal !== "null" && gcs_eye !== "null"){
        var gcs = parseInt(gcs_motor,10) + parseInt(gcs_verbal, 10) + parseInt(gcs_eye, 10);
        var gcsDisplay = gcs + " at ";

        setItemAjax("GCS", gcs.toString(10));
        localStorage.setItem("GCS_Display", gcsDisplay + time);
    }
}

function recordPupilSize(side){
    var time = createTimeStamp();
    if(side === 'right'){
        var size = parseInt(rightPupilText.value);
        rightPupilText.value = "";

        if(isNaN(size)){
            localStorage.setItem("RightPupil_Display", " ");
            updateVitals("Pupil_Size_Right", "Unknown",'Pupil_Size_Right_History',"Unknown",'unknown', time);
            return;
        }

        var display = "Right Pupil: " + size.toString(10) + "cm " + time;
        localStorage.setItem("RightPupil_Display", display);

        updateVitals("Pupil_Size_Right", size.toString(10),'Pupil_Size_Right_History',size.toString(10),'unknown', time);
    }

    else if(side === 'left'){
        var size = parseInt(leftPupilText.value);
        leftPupilText.value = "";

        if(isNaN(size)){
            localStorage.setItem("LeftPupil_Display", " ");
            updateVitals("Pupil_Size_Left", "Unknown",'Pupil_Size_Left_History',"Unknown",'unknown', time);
             return;
        }
        var display = "Left Pupil: " + size.toString(10) + "cm " + time;
        localStorage.setItem("LeftPupil_Display", display);

        updateVitals("Pupil_Size_Left", size.toString(10),'Pupil_Size_Left_History',size.toString(10),'unknown', time);
    }
}
function createTimeStamp(){
    var min = Math.round((parseInt(localStorage.getItem('total_seconds_main'),10))/60);
    var sec = Math.round((parseInt(localStorage.getItem('total_seconds_main'),10))%60);
    var hour = 0;

    if(min < 1){
        min = 0;
    }

    if(min >= 60){
        hour = min/60;
        min = min%60;
    }

    return pad(hour.toString(10)) + ":" +  pad(min.toString(10)) + ":" + pad(sec.toString(10));

}

function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
}

/**
 * This function updates the three most recent vital readings in the UI. These are found under the
 * entry fields for the corresponding vital.
 *
 * @param vital
 * @param display
 */
function populateUI(vital, display){
    if(vital === 'etco2'){
        display = "<b>ETC0<sub>2</sub>: " + display + "</b>";

        if(etco2_vals[0] === ' '){
            etco2_vals[0] = display;
        }

        else if(etco2_vals[1] === ' '){
            var swap = etco2_vals[0];
            etco2_vals[1] = swap;
            etco2_vals[0] = display;
        }

        else{
            var swap = etco2_vals[1];
            etco2_vals[2] = swap;
            swap = etco2_vals[0];
            etco2_vals[1] = swap;
            etco2_vals[0] = display;
        }

        document.getElementById('etco2_1').innerHTML = etco2_vals[0];
        document.getElementById('etco2_2').innerHTML = etco2_vals[1];
        document.getElementById('etco2_3').innerHTML = etco2_vals[2];

        localStorage.setItem("etco2_1", etco2_vals[0]);
        localStorage.setItem("etco2_2", etco2_vals[1]);
        localStorage.setItem("etco2_3", etco2_vals[2]);
    }

    if(vital === 'hr'){
        display = "<b>HR: " + display + "</b>";
        if(hr_vals[0] === ' '){
            hr_vals[0] = display;
        }

        else if(hr_vals[1] === ' '){
            var swap = hr_vals[0];
            hr_vals[1] = swap;
            hr_vals[0] = display;
        }

        else{
            var swap = hr_vals[1];
            hr_vals[2] = swap;
            swap = hr_vals[0];
            hr_vals[1] = swap;
            hr_vals[0] = display;
        }

        document.getElementById('hr_1').innerHTML = hr_vals[0];
        document.getElementById('hr_2').innerHTML = hr_vals[1];
        document.getElementById('hr_3').innerHTML = hr_vals[2];

        localStorage.setItem("hr_1", hr_vals[0]);
        localStorage.setItem("hr_2", hr_vals[1]);
        localStorage.setItem("hr_3", hr_vals[2]);
    }

    if(vital === 'bp'){
        display = "<b>BP: " + display + "</b>";
        if(bp_vals[0] === ' '){
            bp_vals[0] = display;
        }

        else if(bp_vals[1] === ' '){
            var swap = bp_vals[0];
            bp_vals[1] = swap;
            bp_vals[0] = display;
        }

        else{
            var swap = bp_vals[1];
            bp_vals[2] = swap;
            swap = bp_vals[0];
            bp_vals[1] = swap;
            bp_vals[0] = display;
        }

        document.getElementById('bp_1').innerHTML = bp_vals[0];
        document.getElementById('bp_2').innerHTML = bp_vals[1];
        document.getElementById('bp_3').innerHTML = bp_vals[2];

        localStorage.setItem("bp_1", bp_vals[0]);
        localStorage.setItem("bp_2", bp_vals[1]);
        localStorage.setItem("bp_3", bp_vals[2]);

    }
}

function updateVitals(step, value, historyKey, historyStep, historyType, timestamp){
    $.ajax(
        {
            type:"POST",
            url: "/setItemSimple/",
            data:{
                'key': step,
                'value': value,
                'historyKey': historyKey,
                'historyStep': historyStep,
                'historyType': historyType,
                'timestamp': timestamp,
            },
            success: function( data )
            {}
        });
}

function setItemAddl(step, value, historyKey, historyStep, historyType, timestamp, addlKey, addlValue){
    $.ajax(
        {
            type:"POST",
            url: "/setItemAddl/",
            data:{
                'key': step,
                'value': value,
                'historyKey': historyKey,
                'historyStep': historyStep,
                'historyType': historyType,
                'timestamp': timestamp,
                'addlValue': addlValue,
                'addlKey': addlKey,
            },
            success: function( data )
            {}
        })
}

function setItemAjax(step, value){
    $.ajax(
    {
        type:"POST",
        url: "/setItem/",
        data:{
            'key': step,
            'value': value,
        },
        success: function( data )
        {}
     })
}

