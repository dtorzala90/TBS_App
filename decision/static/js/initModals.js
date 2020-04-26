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
        localStorage.setItem(step, fetchTimeModal());
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
        var rr = (document.getElementById('ettRR').value).toString(10);
        var depth = (document.getElementById('ettDepth').value).toString(10);
        var display = "ETT Depth: " + depth + "cm  RR: " + rr;
        localStorage.setItem("ETT_Display", display);

        setItemAjax('ETT_RR', rr);
        setItemAjax('ETT_Depth', depth);
        setItemAjax('ETT_Initiated', getCurrentTime());
        $("#ettModal").modal('hide');
    }
}

function bagMaskModal() {
    var saveBtn = document.getElementById('saveBag');
    document.getElementById('bag-title').innerHTML = "Enter The Following";
    $("#bagMaskModal").modal();
    saveBtn.onclick = function () {
        var rr = (document.getElementById('bagMaskRR').value).toString(10);
        var display = "Bag Mask RR: " + rr;
        localStorage.setItem("BagMask_Display", display);

        setItemAjax('Bag_Mask_RR', rr);
        setItemAjax('Bag_Mask_Initiated', getCurrentTime());
        $("#bagMaskModal").modal('hide');
    }
}

function ivfModal() {
    var saveBtn = document.getElementById('saveIVF');
    document.getElementById('ivf-title').innerHTML = "Enter The Following";
    $("#ivfModal").modal();
    saveBtn.onclick = function () {
        var ivf_prev = parseInt(localStorage.getItem('IVF'),10);
        var ivf_added = document.getElementById('ivfAmount').value;
        var ivf_new = (ivf_prev + ivf_added).toString(10);
        var display = "IVF: " + ivf_new + " mL/kg";
        localStorage.setItem('IVF_Display', display);

        localStorage.setItem('IVF', ivf_new);
        setItemAjax('IVF_Total', ivf_new);
        $("#ivfModal").modal('hide');
    }
}

function diffAirwayModal() {
    var saveBtn = document.getElementById('saveDiffAirway');
    document.getElementById('diffAirway-title').innerHTML = "Enter The Following";
    $("#diffAirwayModal").modal();
    saveBtn.onclick = function () {
        var adjunct = document.getElementById('adjunct').value;
        var display = "Difficult Airway: " + adjunct;
        localStorage.setItem('DiffAirway_Display', display);

        setItemAjax('Difficult_Airway_Adjunct', adjunct);
        $("#diffAirwayModal").modal('hide');
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

function recordAbnormality(inputId, modelName) {
    var abnormality = document.getElementById(inputId).value;

    $.ajax(
    {
        type:"POST",
        url: "/setItem/",
        data:{
            'key': modelName,
            'value': abnormality,
        },
        success: function( data )
        {}
     })
}