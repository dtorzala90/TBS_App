/**
 * This script is responsible for initializing all radio buttons and text fields
 * with the appropriate onClick or onSubmit functions. Each of these functions
 * responds to user click by saving the appropriate values in localStorage. This
 * has all been moved into its own script to prevent clutter in the HTML file.
 */

var ivf_vals = [' ', ' ', ' '];

/**
 * Function is responsible for launching modal based on parameters. The button calling the function
 * will pass an identifying value.
 */
function initEdit(type, step){
    if(type === 'oxygen'){
        if(step === 'init'){
            launchModal("Oxygen Initiated At", "Oxygen_Supplementation_Initiated", "Oxygen_Supplementation_History", "initiated" );
        }
        else{
            launchModal("Oxygen Stopped At","Oxygen_Supplementation_Stopped", "Oxygen_Supplementation_History", "Stopped" );
        }
    }

    else if(type === 'bag'){
        if(step === 'init'){
            launchModal("Bag Initiated At","Bag_Mask_Initiated", "Bag_Mask_History", "initiated");
        }
        else{
            launchModal("Bag Stopped At","Bag_Mask_Stopped", "Bag_Mask_History", "Stopped");
        }
    }

    else if(type === 'lma'){
        if(step === 'init'){
            launchModal("LMA Initiated At","LMA_Initiated", "LMA_History", "initiated");
        }
        else if (step === 'achieved') {
            launchModal("LMA Achieved At","LMA_Achieved", "LMA_History", "achieved");
        }

        else{
            launchModal("LMA Removed At","LMA_Stopped", "LMA_History", "Removed");
        }
    }

    else if(type === 'ett'){
        if(step === 'init'){
            launchModal("ETT Initiated At","ETT_Initiated", "ETT_History", "initiated");
        }
        else if (step === 'achieved') {
            launchModal("ETT Achieved At","ETT_Achieved", "ETT_History", "achieved");
        }

        else{
            launchModal("ETT Removed At","ETT_Stopped", "ETT_History", "Removed");
        }
    }

    else if(type === 'diffAirway'){
        if(step === 'init'){
            launchModal("Difficult Airway Initiated At","Difficult_Airway_Initiated", "Difficult_Airway_History", "initiated");
        }
        else if (step === 'achieved') {
            launchModal("Difficult Airway Achieved At","Difficult_Airway_Achieved", "Difficult_Airway_History", "achieved");
        }

        else{
            launchModal("Difficult Airway Removed At","Difficult_Airway_Stopped", "Difficult_Airway_History", "Removed");
        }
    }

    else{
        if(step === 'init'){
            launchModal("Surgical Airway Initiated At","Surgical_Airway_Initiated", "Surgical_Airway_History", "initiated");
        }
        else if (step === 'achieved') {
            launchModal("Surgical Airway Achieved At","Surgical_Airway_Achieved", "Surgical_Airway_History", "achieved");
        }

        else{
            launchModal("Surgical Airway Removed At","Surgical_Airway_Stopped", "Surgical_Airway_History", "Removed");
        }
    }
}

/**
 * Reads the time stamp from user input fields and returns it to be saved in the database
 * @returns {string}
 */
function fetchTimeModal(){
    var hour = Math.round(parseInt(document.getElementById('hourStamp').value, 10));
    var min = Math.round(parseInt(document.getElementById('minuteStamp').value, 10));
    var sec =Math.round(parseInt(document.getElementById('secondStamp').value, 10));
    var timeStamp = pad(hour) + ":" +  pad(min) + ":" + pad(sec);
    return timeStamp;
}

/**
 * Launches the time stamp edit modal and sets up corresponding buttons
 *
 * @param modalTitle
 * @param step
 */
function launchModal(modalTitle, step, historyKey, historyValue) {
    var min = Math.round((parseInt(localStorage.getItem('total_seconds_main'),10))/60);
    var sec = Math.round((parseInt(localStorage.getItem('total_seconds_main'),10))%60);
    var hour = 0;
    if(min < 1){
        min = 0;
    }

    if(min >= 60){
        hour = Math.round(min/60);
        min = Math.round(min%60);
    }

    var saveBtn = document.getElementById('saveTime');
    saveBtn.onclick = function(){
        var timeStamp = fetchTimeModal();
        setItemAjax(step, timeStamp);
        //updateAirwayHistory(historyKey, historyValue, timeStamp)
        $("#timeModal").modal('hide');
    }

    document.getElementById('time-title').innerHTML = modalTitle;
    document.getElementById('hourStamp').value = hour;
    document.getElementById('minuteStamp').value = min;
    document.getElementById('secondStamp').value = sec;
    $("#timeModal").modal();
}

/**
 * Because these will require pop-up modals to prompt further information they need their own
 * onclick functions
 */
function ettModal() {
    var saveBtn = document.getElementById('saveETT');
    document.getElementById('ett-title').innerHTML = "Enter The Following";
    $("#ettModal").modal();

    saveBtn.onclick = function () {
        var depth = (document.getElementById('ettDepth').value).toString(10);
        var display = "ETT Depth: " + depth + "cm " + getCurrentTime();
        var time = getCurrentTime();
        localStorage.setItem("ETT_Display", display);

        setItemAddl('ETT_Achieved', time, 'ETT_History', 'achieved',
                'known', time, 'ETT_Depth', depth);
        $("#ettModal").modal('hide');
    }
}

function bagMaskModal() {
    var saveBtn = document.getElementById('saveBag');
    document.getElementById('bag-title').innerHTML = "Enter The Following";
    $("#bagMaskModal").modal();
    saveBtn.onclick = function () {
        var time = getCurrentTime();
        var rr = (document.getElementById('bagMaskRR').value).toString(10);
        var display = "Bag Mask RR: " + rr + " " + time;
        localStorage.setItem("BagMask_Display", display);

        setItemAddl('Bag_Mask_Initiated', time, 'Bag_Mask_History', 'initiated',
                'known', time, 'Bag_Mask_RR', rr);

        $("#bagMaskModal").modal('hide');
    }
}

function ivfModal() {
    var saveBtn = document.getElementById('saveIVF');
    document.getElementById('ivf-title').innerHTML = "Enter The Following";
    $("#ivfModal").modal();
    saveBtn.onclick = function () {
        var time = getCurrentTime();
        var ivf_prev = parseInt(localStorage.getItem('IVF'),10);
        var ivf_added = parseInt(document.getElementById('ivfAmount').value,10);
        var display = "<b>IVF: " + ivf_added.toString(10) + " mL/kg " + getCurrentTime() + "</b>";
        if(ivf_vals[0] === ' '){
            ivf_vals[0] = display;
        }

        else if(ivf_vals[1] === ' '){
            var swap = ivf_vals[0];
            ivf_vals[1] = swap;
            ivf_vals[0] = display;
        }

        else{
            var swap = ivf_vals[1];
            ivf_vals[2] = swap;
            swap = ivf_vals[0];
            ivf_vals[1] = swap;
            ivf_vals[0] = display;
        }

        document.getElementById('ivf_1').innerHTML = ivf_vals[0];
        document.getElementById('ivf_2').innerHTML = ivf_vals[1];
        document.getElementById('ivf_3').innerHTML = ivf_vals[2];
        localStorage.setItem("ivf_1", ivf_vals[0]);
        localStorage.setItem("ivf_2", ivf_vals[1]);
        localStorage.setItem("ivf_3", ivf_vals[2]);

        var ivf_new = (ivf_prev + ivf_added);
        var display = "IVF: " + ivf_new.toString(10) + " mL/kg " + time;
        localStorage.setItem('IVF_Display', display);

        localStorage.setItem('IVF', ivf_new.toString(10));

        setItemSimple('IVF_Total', ivf_new.toString(10), 'IVF_History', ivf_added.toString(10),
                'unknown', time);
        $("#ivfModal").modal('hide');
    }
}

function diffAirwayModal() {
    var saveBtn = document.getElementById('saveDiffAirway');
    document.getElementById('diffAirway-title').innerHTML = "Enter The Following";
    $("#diffAirwayModal").modal();
    saveBtn.onclick = function () {
        var time = getCurrentTime();
        var adjunct = document.getElementById('adjunct').value;
        var display = "Difficult Airway: " + adjunct + " " + time;
        localStorage.setItem('DiffAirway_Display', display);

        setItemAddl('Difficult_Airway_Initiated', time, 'Difficult_Airway_History', 'initiated',
                'known', time, 'Difficult_Airway_Adjunct', adjunct);
        $("#diffAirwayModal").modal('hide');
    }
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
 * Gets the current time stamp and returns it in a "displayable" format
 * @returns {string}
 */
function getCurrentTime(){
    var min = Math.round((parseInt(localStorage.getItem('total_seconds_main'),10))/60);
    var sec = Math.round((parseInt(localStorage.getItem('total_seconds_main'),10))%60);
    var hour = 0;
    var timeStamp = " ";

    if(min < 1){
        min = 0;
    }

    if(min >= 60){
        hour = Math.round(min/60);
        min = Math.round(min%60);
    }

    timeStamp = pad(hour.toString(10)) + ":" +  pad(min.toString(10)) + ":" + pad(sec.toString(10));

    return timeStamp;
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

function setItemSimple(step, value, historyKey, historyStep, historyType, timestamp){
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

function recordAbnormality(inputId, step, historyKey, historyStep, historyType, timestamp) {
    var abnormality = document.getElementById(inputId).value;
    document.getElementById(inputId).value = ' ';

    $.ajax(
        {
            type:"POST",
            url: "/setItemSimple/",
            data:{
                'key': step,
                'value': abnormality,
                'historyKey': historyKey,
                'historyStep': historyStep,
                'historyType': historyType,
                'timestamp': abnormality + " " +  timestamp,
            },
            success: function( data )
            {}
        });
}
