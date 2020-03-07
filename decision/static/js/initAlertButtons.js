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
        }
        else{
            launchModal("Oxygen Stopped At","Oxygen Supplementation Stopped Time");
        }
    }

    else if(type === 'bag'){
        if(step === 'init'){
            launchModal("Bag Initiated At","Bag Mask Initiated Time");
        }
        else{
            launchModal("Bag Stopped At","Bag Mask Stopped Time");
        }
    }

    else if(type === 'lma'){
        if(step === 'init'){
            launchModal("LMA Initiated At","LMA Initiated Time");
        }
        else if (step === 'achieved') {
            launchModal("LMA Achieved At","LMA Achieved Time");
        }

        else{
            launchModal("LMA Stopped At","LMA Stopped Time");
        }
    }

    else if(type === 'ett'){
        if(step === 'init'){
            launchModal("ETT Initiated At","ETT Initiated Time");
        }
        else if (step === 'achieved') {
            launchModal("ETT Achieved At","ETT Achieved Time");
        }

        else{
            launchModal("ETT Stopped At","ETT Stopped Time");
        }
    }

    else if(type === 'diffAirway'){
        if(step === 'init'){
            launchModal("Difficult Airway Initiated At","Difficult Airway Initiated Time");
        }
        else if (step === 'achieved') {
            launchModal("Difficult Airway Achieved At","Difficult Airway Achieved Time");
        }

        else{
            launchModal("Difficult Airway Stopped At","Difficult Airway Stopped Time");
        }
    }

    else{
        if(step === 'init'){
            launchModal("Surgical Airway Initiated At","Surgical Airway Initiated Time");
        }
        else if (step === 'achieved') {
            launchModal("Surgical Airway Achieved At","Surgical Airway Achieved Time");
        }

        else{
            launchModal("Surgical Airway Stopped At","Surgical Airway Stopped Time");
        }
    }
}

function airwayStepFunc(type, step){
    if(type === 'oxygen'){
        if(step === 'init'){
            localStorage.setItem("Oxygen Supplementation", "initiated");
            localStorage.setItem("Oxygen Supplementation Initiated Time", getCurrentTime());
        }
        else{
            localStorage.setItem("Oxygen Supplementation", "stopped");
            localStorage.setItem("Oxygen Supplementation Stopped Time", getCurrentTime());
        }
    }

    else if(type === 'bag'){
        if(step === 'init'){
            localStorage.setItem("Bag Mask", "initiated");
            localStorage.setItem("Bag Mask Initiated Time", getCurrentTime());
        }
        else{
            localStorage.setItem("Bag Mask", "stopped");
            localStorage.setItem("Bag Mask Stopped Time", getCurrentTime());
        }
    }

    else if(type === 'lma'){
        if(step === 'init'){
            localStorage.setItem("LMA", "initiated");
            localStorage.setItem("LMA Initiated Time", getCurrentTime());
        }
        else if (step === 'achieved') {
            localStorage.setItem("LMA", "achieved");
            localStorage.setItem("LMA Achieved Time", getCurrentTime());
        }

        else{
            localStorage.setItem("LMA", "stopped");
            localStorage.setItem("LMA Stopped Time", getCurrentTime());
        }
    }

    else if(type === 'ett'){
        if(step === 'init'){
            localStorage.setItem("ETT", "initiated");
            localStorage.setItem("ETT Initiated Time", getCurrentTime());
        }
        else if (step === 'achieved') {
            localStorage.setItem("ETT", "achieved");
            localStorage.setItem("ETT Achieved Time", getCurrentTime());
        }

        else{
            localStorage.setItem("ETT", "stopped");
            localStorage.setItem("ETT Stopped Time", getCurrentTime());
        }
    }

    else if(type === 'diffAirway'){
        if(step === 'init'){
            localStorage.setItem("Difficult Airway", "initiated");
            localStorage.setItem("Difficult Airway Initiated Time", getCurrentTime());
        }
        else if (step === 'achieved') {
            localStorage.setItem("Difficult Airway", "achieved");
            localStorage.setItem("Difficult Airway Achieved Time", getCurrentTime());
        }

        else{
            localStorage.setItem("Difficult Airway", "stopped");
            localStorage.setItem("Difficult Airway Stopped Time", getCurrentTime());
        }
    }

    else{
        if(step === 'init'){
            localStorage.setItem("Surgical Airway", "initiated");
            localStorage.setItem("Surgical Airway Initiated Time", getCurrentTime());
        }
        else if (step === 'achieved') {
            localStorage.setItem("Surgical Airway", "achieved");
            localStorage.setItem("Surgical Airway Achieved Time", getCurrentTime());
        }

        else{
            localStorage.setItem("Surgical Airway", "stopped");
            localStorage.setItem("Surgical Airway Stopped Time", getCurrentTime());
        }
    }
}

/**
 * This function responds to etco2 buttons and carries out actions based on the parameter given
 */
function etco2(value){
    if(value === "none"){
        var ett = localStorage.getItem("ETT alert");
        if(ett === "thrown"){
            localStorage.setItem("ETT Alert", "dismissed");
            $('#ETT-etco2-alert').remove();
        }
        localStorage.setItem("ETCO2", "not present");
    }

    else if(value === "<25"){
        var ett = localStorage.getItem("ETT alert");
        if(ett === "thrown"){
            localStorage.setItem("ETT Alert", "dismissed");
            $('#ETT-etco2-alert').remove();
        }
        localStorage.setItem("ETCO2", "<25");
    }

    else if(value === "25-30"){
        var ett = localStorage.getItem("ETT alert");
        if(ett === "thrown"){
            localStorage.setItem("ETT Alert", "dismissed");
            $('#ETT-etco2-alert').remove();
        }
        localStorage.setItem("ETCO2", "25-30");
    }

    else if(value === "30-35"){
        var ett = localStorage.getItem("ETT alert");
        if(ett === "thrown"){
            localStorage.setItem("ETT Alert", "dismissed");
            $('#ETT-etco2-alert').remove();
        }
        localStorage.setItem("ETCO2", "30-35");
    }

    else if(value === "35-40"){
        var ett = localStorage.getItem("ETT alert");
        if(ett === "thrown"){
            localStorage.setItem("ETT Alert", "dismissed");
            $('#ETT-etco2-alert').remove();
        }
        localStorage.setItem("ETCO2", "35-40");
    }

    else if(value === "40-50"){
        var ett = localStorage.getItem("ETT alert");
        if(ett === "thrown"){
            localStorage.setItem("ETT Alert", "dismissed");
            $('#ETT-etco2-alert').remove();
        }
        localStorage.setItem("ETCO2", "40-50");
    }

    else {
        var ett = localStorage.getItem("ETT alert");
        if(ett === "thrown"){
            localStorage.setItem("ETT Alert", "dismissed");
            $('#ETT-etco2-alert').remove();
        }
        localStorage.setItem("ETCO2", ">50");
    }
}

/**
 * This function responds to chest sound buttons
 */
function chestSoundFunc(side, value) {
    if(side === "right") {
        localStorage.setItem("Right Chest Rise/Breath Sounds", value);
    }

    else{
        localStorage.setItem("Left Chest Rise/Breath Sounds", value);
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
//Set up HR and BP text fields
var hrText = document.getElementById("hr");
var bpText = document.getElementById("bp");
var ageText = document.getElementById("age");

ageText.oninput = recordAge;
hrText.oninput = recordHR;
bpText.oninput = recordBP;

function recordHR(){
    setTimeout(function(){
        var hr = hrText.value;
        localStorage.setItem("HR", hrText.value);
        var min = (parseInt(localStorage.getItem('total_seconds_main'),10))/60;
        var sec = (parseInt(localStorage.getItem('total_seconds_main'),10))%60;
        var hour = 0;
        var display = "Heart Rate: " + hr + " at ";
        if(min < 1){
            min = 0;
        }

        if(min >= 60){
            hour = min/60;
            min = min%60;
        }

        if(hour !== 0){
            display = display + hour.toString(10) + "hr " +  min.toString(10) + "min " + sec.toString(10) + "sec";
        }
        display = display + min.toString(10) + "min " + sec.toString(10) + "sec";
        localStorage.setItem('HR Display',display);
    }, 1000);
}

function recordBP(){
        setTimeout(function(){
            var bp = bpText.value;
            localStorage.setItem("BP", bpText.value);
            var min = (parseInt(localStorage.getItem('total_seconds_main'),10))/60;
            var sec = (parseInt(localStorage.getItem('total_seconds_main'),10))%60;
            var hour = 0;
            var display = "Systolic BP: " + bp + " at " ;

            if(min < 1){
                min = 0;
            }

            if(min >= 60){
                hour = min/60;
                min = min%60;
            }

            if(hour !== 0){
                display = display + hour.toString(10) + "hr " +  min.toString(10) + "min " + sec.toString(10) + "sec";
            }

            display = display + min.toString(10) + "min " + sec.toString(10) + "sec";
            localStorage.setItem('BP Display',display);
        }, 1000);
}

function recordAge(){
    setTimeout(function(){
        localStorage.setItem("Patient Age", ageText.value);
    }, 1000);
}

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
 * These functions are responsible for responding to perfusion button clicks
 */
function lipColorFunc(color) {
    localStorage.setItem("Lip Color", color);
}

function nailColorFunc(color) {
    localStorage.setItem("Nail Bed Color", color);
}

function capRefillFunc(time) {
    localStorage.setItem("Cap Refill Time", time);
}

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
    localStorage.setItem("Type and Cross", value);
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
 * This function is responsible for setting the GCS value based on the parameters given.
 * It is called by each GCS button.
 */
function gcsFunc(type, value){
    if(type === 'motor'){
        localStorage.setItem("GCS Motor", value);
    }

    else if(type === 'verbal'){
        localStorage.setItem("GCS Verbal", value);
    }

    else{
         localStorage.setItem("GCS Eye", value);
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

/**
 * Launches the time stamp edit modal and sets up corresponding buttons
 *
 * @param modalTitle
 * @param step
 */
function launchModal(modalTitle, step){
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

    var saveBtn = document.getElementById('saveModal');
    saveBtn.onclick = function(){
        localStorage.setItem(step, fetchTimeModal());
        $("#popUp").modal('hide');
    }

    document.getElementById('popup-title').innerHTML = modalTitle;
    document.getElementById('hourStamp').value = hour;
    document.getElementById('minuteStamp').value = min;
    document.getElementById('secondStamp').value = sec;
    $("#popUp").modal();

}
/**
 * Set up Exposure buttons
 */
