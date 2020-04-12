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
            launchModal("Oxygen Initiated At","Oxygen Supplementation Initiated Time");
            launchModal("Oxygen Initiated At","Oxygen_Supplementation_Initiated");
        }
        else{
            launchModal("Oxygen Stopped At","Oxygen Supplementation Stopped Time");
            launchModal("Oxygen Stopped At","Oxygen_Supplementation_Stopped");
        }
    }

    else if(type === 'bag'){
        if(step === 'init'){
            launchModal("Bag Initiated At","Bag Mask Initiated Time");
            launchModal("Bag Initiated At","Bag_Mask_Initiated");
        }
        else{
            launchModal("Bag Stopped At","Bag Mask Stopped Time");
            launchModal("Bag Stopped At","Bag_Mask_Stopped");
        }
    }

    else if(type === 'lma'){
        if(step === 'init'){
            launchModal("LMA Initiated At","LMA Initiated Time");
            launchModal("LMA Initiated At","LMA_Initiated");
        }
        else if (step === 'achieved') {
            launchModal("LMA Achieved At","LMA Achieved Time");
            launchModal("LMA Achieved At","LMA_Achieved");
        }

        else{
            launchModal("LMA Stopped At","LMA Stopped Time");
            launchModal("LMA Stopped At","LMA_Stopped");
        }
    }

    else if(type === 'ett'){
        if(step === 'init'){
            launchModal("ETT Initiated At","ETT Initiated Time");
            launchModal("ETT Initiated At","ETT_Initiated");
        }
        else if (step === 'achieved') {
            launchModal("ETT Achieved At","ETT Achieved Time");
            launchModal("ETT Achieved At","ETT_Achieved");
        }

        else{
            launchModal("ETT Stopped At","ETT Stopped Time");
            launchModal("ETT Stopped At","ETT_Stopped");
        }
    }

    else if(type === 'diffAirway'){
        if(step === 'init'){
            launchModal("Difficult Airway Initiated At","Difficult Airway Initiated Time");
            launchModal("Difficult Airway Initiated At","Difficult_Airway_Initiated");
        }
        else if (step === 'achieved') {
            launchModal("Difficult Airway Achieved At","Difficult Airway Achieved Time");
            launchModal("Difficult Airway Achieved At","Difficult_Airway_Achieved");
        }

        else{
            launchModal("Difficult Airway Stopped At","Difficult Airway Stopped Time");
            launchModal("Difficult Airway Stopped At","Difficult_Airway_Stopped");
        }
    }

    else{
        if(step === 'init'){
            launchModal("Surgical Airway Initiated At","Surgical Airway Initiated Time");
            launchModal("Surgical Airway Initiated At","Surgical_Airway_Initiated");
        }
        else if (step === 'achieved') {
            launchModal("Surgical Airway Achieved At","Surgical Airway Achieved Time");
            launchModal("Surgical Airway Achieved At","Surgical_Airway_Achieved");
        }

        else{
            launchModal("Surgical Airway Stopped At","Surgical Airway Stopped Time");
            launchModal("Surgical Airway Stopped At","Surgical_Airway_Stopped");
        }
    }
}

/**
 * This function responds to chest sound buttons
 */
function chestSoundFunc(side, value) {
    if(side === "right") {
        setItemAjax("Right_Chest_Rise_Breath_Sounds", value);
        // localStorage.setItem("Right Chest Rise/Breath Sounds", value);
    }

    else{
        setItemAjax("Left_Chest_Rise_Breath_Sounds", value);
        // localStorage.setItem("Left Chest Rise/Breath Sounds", value);
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
 * Set up Circulation buttons and function that will record vitals on user input
 */
/**
 * These functions are responsible for responding to IV button clicks
 */
function pivFunc(num) {
    if(num === '1'){
        localStorage.setItem("Functional Peripheral IV count", "1");
        localStorage.setItem("Functional Peripheral IV established", "true");
    }

    else if(num === '2'){
        localStorage.setItem("Functional Peripheral IV count", "2");
        localStorage.setItem("Functional Peripheral IV established", "true");
    }

    else{
        localStorage.setItem("Functional Peripheral IV count", ">2");
        localStorage.setItem("Functional Peripheral IV established", "true");
    }
}

function centrLineFunc() {
    localStorage.setItem("Central Line established", "true");
}

function intraoLineFunc() {
    localStorage.setItem("Intraosseous Line established", "true");
}

/**
* Set up Perfusion buttons
*/

// Buttons for lip color
// var lipc1 = document.getElementById('lipc-pi');
// var lipc2 = document.getElementById('lipc-wh');
// var lipc3 = document.getElementById('lipc-unk');

// lipc1.onclick = lipc1Func;
// lipc2.onclick = lipc2Func;
// lipc3.onclick = lipc3Func;

/**
 * These functions are responsible for responding to perfusion button clicks
 */

function lipColorFunc(color) {
    setItemAjax("Lip_Color", color);
    //localStorage.setItem("Lip Color", color);
}

function nailColorFunc(color) {
    setItemAjax("Nail_Bed_Color", color);
    //localStorage.setItem("Nail Bed Color", color);
}

function capRefillFunc(time) {
    setItemAjax("Cap_Refill_Time", time);
    // localStorage.setItem("Cap Refill Time", time);
}


// function lipc1Func() {
//     setItemAjax("Lip_Color", "Pink");
// }

// function lipc2Func() {
//     setItemAjax("Lip_Color", "White");
// }

// function lipc3Func() {
//     setItemAjax("Lip_Color", "Unable to assess");
// }

// //Buttons for nail bed color
// var nailbc1 = document.getElementById('nailc-pi');
// var nailbc2 = document.getElementById('nailc-wh');
// var nailbc3 = document.getElementById('nailc-unk');

// nailbc1.onclick = nailbc1Func;
// nailbc2.onclick = nailbc2Func;
// nailbc3.onclick = nailbc3Func;

// function nailbc1Func() {
//     setItemAjax("Nail_Bed_Color", "Pink");
// }

// function nailbc2Func() {
//     setItemAjax("Nail_Bed_Color", "White");
// }

// function nailbc3Func() {
//     setItemAjax("Nail_Bed_Color", "Unable to assess");
// }

// //Buttons for capillary refill time.
// var caprt1 = document.getElementById('caprt-2');
// var caprt2 = document.getElementById('caprt-24');
// var caprt3 = document.getElementById('caprt-4');

// caprt1.onclick = caprt1Func;
// caprt2.onclick = caprt2Func;
// caprt3.onclick = caprt3Func;

// function caprt1Func() {
//     setItemAjax("Cap_Refill_Time", "<2");
// }

// function caprt2Func() {
//     setItemAjax("Cap_Refill_Time", "2-4");
// }

// function caprt3Func() {
//     setItemAjax("Cap_Refill_Time", ">4");
// }

/**
 * This function is responsible for responding to the ivf button click
 */
function ivFluidFunc(amount) {
    localStorage.setItem("IVF", amount);
}

/**
 * This function is responsible for responding to the type and cross button click
 */
function typeAndCrossFunc(value) {
    setItemAjax("Type_and_Cross", value);
    //localStorage.setItem("Type and Cross", value);
}

/**
 * These functions are responsible for responding to the transfusion button clicks
 */
function prbcFunc(value){
    if(value === 'yes'){
        var prbcAlert = localStorage.getItem("Transfusion PRBC Alert");
        localStorage.setItem("Transfusion PRBC", "yes");
        if (prbcAlert === "thrown"){
            $('#tprbc-alert').remove();
            localStorage.setItem("Transfusion PRBC Alert", "dismissed");
        }
    }

    else{
        localStorage.setItem("Transfusion PRBC", "no");
    }
}

function mtpFunc(value){
    if(value === 'yes'){
        var mtpAlert =localStorage.getItem("Massive Transfusion Protocol Alert");
        localStorage.setItem("Massive Transfusion Protocol", "yes");
        if (mtpAlert === "thrown"){
            $('#mtp-alert').remove();
            localStorage.setItem("Massive Transfusion Protocol Alert", "dismissed");
        }
    }

    else{
        localStorage.setItem("Massive Transfusion Protocol", "no");
    }
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
 * Set up Exposure buttons
 */

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