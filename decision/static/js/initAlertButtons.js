/**
 * This script is responsible for initializing all radio buttons and text fields
 * with the appropriate onClick or onSubmit functions. Each of these functions
 * responds to user click by saving the appropriate values in localStorage. This
 * has all been moved into its own script to prevent clutter in the HTML file.
 */

/**
 * Function is responsible for launching modal based on parameters. The button calling the function
 * will pass an identifying value.
 */
function initEdit(type, step){
    if(type === 'oxygen'){
        if(step === 'init'){
            launchModal("Oxygen Initiated At","Oxygen_Supplementation_Initiated");
        }
        else{
            launchModal("Oxygen Stopped At","Oxygen_Supplementation_Stopped");
        }
    }

    else if(type === 'bag'){
        if(step === 'init'){
            launchModal("Bag Initiated At","Bag_Mask_Initiated");
        }
        else{
            launchModal("Bag Stopped At","Bag_Mask_Stopped");
        }
    }

    else if(type === 'lma'){
        if(step === 'init'){
            launchModal("LMA Initiated At","LMA_Initiated");
        }
        else if (step === 'achieved') {
            launchModal("LMA Achieved At","LMA_Achieved");
        }

        else{
            launchModal("LMA Stopped At","LMA_Stopped");
        }
    }

    else if(type === 'ett'){
        if(step === 'init'){
            launchModal("ETT Initiated At","ETT_Initiated");
        }
        else if (step === 'achieved') {
            launchModal("ETT Achieved At","ETT_Achieved");
        }

        else{
            launchModal("ETT Stopped At","ETT_Stopped");
        }
    }

    else if(type === 'diffAirway'){
        if(step === 'init'){
            launchModal("Difficult Airway Initiated At","Difficult_Airway_Initiated");
        }
        else if (step === 'achieved') {
            launchModal("Difficult Airway Achieved At","Difficult_Airway_Achieved");
        }

        else{
            launchModal("Difficult Airway Stopped At","Difficult_Airway_Stopped");
        }
    }

    else{
        if(step === 'init'){
            launchModal("Surgical Airway Initiated At","Surgical_Airway_Initiated");
        }
        else if (step === 'achieved') {
            launchModal("Surgical Airway Achieved At","Surgical_Airway_Achieved");
        }

        else{
            launchModal("Surgical Airway Stopped At","Surgical_Airway_Stopped");
        }
    }
}

/**
* Set up of Airway buttons and functions that will record user input
*/
//For ETT depth in cm
var ettdepthText = document.getElementById("ettdepth");
ettdepthText.oninput = recordettdepth;

function recordettdepth(){
    setTimeout(function(){
        localStorage.setItem("ETT Depth", ettdepthText.value);
    }, 1000);
}

//BVM breaths per minutes
var bvmbpmText = document.getElementById("bvmbpm");
bvmbpmText.oninput = recordbvmbpm;

function recordbvmbpm(){
    setTimeout(function(){
        localStorage.setItem("BVM BPM", bvmbpmText.value);
    }, 1000);
}

/**
* Set up of disability  buttons and functions that will record user input
*/
//For pupilsizer depth in mm
var pupilsizerText = document.getElementById("pupilsizer");
pupilsizerText.oninput = recordpupilsizer;

function recordpupilsizer(){
    setTimeout(function(){
        localStorage.setItem("Right Pupil Size", pupilsizerText.value);
    }, 1000);
}

//For pupilsizel depth in mm
var pupilsizelText = document.getElementById("pupilsizel");
pupilsizelText.oninput = recordpupilsizel;

function recordpupilsizel(){
    setTimeout(function(){
        localStorage.setItem("Left Pupil Size", pupilsizelText.value);
    }, 1000);
}

/**
 * Reads the time stamp from user input fields and returns it to be saved in the database
 * @returns {string}
 */
function fetchTimeModal(){
    var hr = Math.round(parseInt(document.getElementById('hourStamp').value, 10));
    var min = Math.round(parseInt(document.getElementById('minuteStamp').value, 10));
    var sec =Math.round(parseInt(document.getElementById('secondStamp').value, 10));
    var timeStamp = hr.toString(10) + "hr " +  min.toString(10) + "min " + sec.toString(10) + "sec";
    return timeStamp;
}

/**
 * Launches the time stamp edit modal and sets up corresponding buttons
 *
 * @param modalTitle
 * @param step
 */
function launchModal(modalTitle, step) {
    var saveBtn = document.getElementById('saveModal');
    saveBtn.onclick = function () {
        setItemAjax(step, fetchTimeModal());
        $("#popUp").modal('hide');
    }
}

/**
 * Gets the current time stamp and returns it in a "displayable" format
 * @returns {string}
 */
function getCurrentTime(){
    var min = Math.round((parseInt(localStorage.getItem('total_seconds_main'),10))/60);
    var sec = Math.round((parseInt(localStorage.getItem('total_seconds_main'),10))%60);
    var hour = 0;
    var timeStamp = "";
    if(min < 1){
        min = 0;
    }

    if(min >= 60){
        hour = Math.round(min/60);
        min = Math.round(min%60);
    }

    if(hour !== 0){
        timeStamp = hour.toString(10) + "hr " +  min.toString(10) + "min " + sec.toString(10) + "sec";
    }

    else{
        timeStamp = min.toString(10) + "min " + sec.toString(10) + "sec";
    }

    return timeStamp;
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