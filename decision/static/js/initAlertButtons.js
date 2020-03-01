/**
 * This script is responsible for initializing all radio buttons and text fields
 * with the appropriate onClick or onSubmit functions. Each of these functions
 * responds to user click by saving the appropriate values in localStorage. This
 * has all been moved into its own script to prevent clutter in the HTML file.
 */

/**
 * Set up modal window buttons
 */
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");

/**
 * Set up Airway buttons
 */
var oxyInit = document.getElementById("oxySupplInit");
var oxyStop = document.getElementById("oxySupplStop");

oxyInit.onclick = oxyInitFunc;
oxyStop.onclick = oxyStopFunc;

oxyInit.ondblclick = oxyInitEdit;
oxyStop.ondblclick = oxyStopEdit;

function oxyInitEdit(){
    launchModal("Oxygen Initiated At","Oxygen Supplementation Initiated Time");
}

function oxyStopEdit(){
    launchModal("Oxygen Stopped At","Oxygen Supplementation Stopped Time");
}

function oxyInitFunc(){
    localStorage.setItem("Oxygen Supplementation", "initiated");
    localStorage.setItem("Oxygen Supplementation Initiated Time", getCurrentTime());
}

function oxyStopFunc(){
    localStorage.setItem("Oxygen Supplementation", "stopped");
    localStorage.setItem("Oxygen Supplementation Stopped Time", getCurrentTime());
}

var bagInit = document.getElementById("bagMaskInit");
var bagStop = document.getElementById("bagMaskStop");

bagInit.onclick = bagInitFunc;
bagStop.onclick = bagStopFunc;

bagInit.ondblclick = bagInitEdit;
bagStop.ondblclick = bagStopEdit;

function bagInitEdit(){
    launchModal("Bag Initiated At","Bag Mask Initiated Time");
}

function bagStopEdit(){
    launchModal("Bag Stopped At","Bag Mask Stopped Time");
}

function bagInitFunc(){
    localStorage.setItem("Bag Mask", "initiated");
    localStorage.setItem("Bag Mask Initiated Time", getCurrentTime());
}

function bagStopFunc(){
    localStorage.setItem("Bag Mask", "stopped");
    localStorage.setItem("Bag Mask Stopped Time", getCurrentTime());
}

var lmaInit = document.getElementById("lmaInit");
var lmaAchieve = document.getElementById("lmaAchieved");
var lmaStop = document.getElementById("lmaStop")

lmaInit.onclick = lmaInitFunc;
lmaAchieve.onclick = lmaAchieveFunc;
lmaStop.onclick = lmaStopFunc;

lmaInit.ondblclick = lmaInitEdit;
lmaAchieve.ondblclick = lmaAchievedEdit;
lmaStop.ondblclick = lmaStopEdit;

function lmaInitEdit(){
    launchModal("LMA Initiated At","LMA Initiated Time");
}

function lmaAchievedEdit(){
    launchModal("LMA Achieved At","LMA Achieved Time");
}

function lmaStopEdit(){
    launchModal("LMA Stopped At","LMA Stopped Time");
}

function lmaInitFunc(){
    localStorage.setItem("LMA", "initiated");
    localStorage.setItem("LMA Initiated Time", getCurrentTime());
}

function lmaAchieveFunc(){
    localStorage.setItem("LMA", "achieved");
    localStorage.setItem("LMA Achieved Time", getCurrentTime());
}

function lmaStopFunc(){
    localStorage.setItem("LMA", "stopped");
    localStorage.setItem("LMA Stopped Time", getCurrentTime());
}

var ettInit = document.getElementById("ettInit");
var ettAchieve = document.getElementById("ettAchieved");
var ettStop = document.getElementById("ettStop")

ettInit.onclick = ettInitFunc;
ettAchieve.onclick = ettAchieveFunc;
ettStop.onclick = ettStopFunc;

ettInit.ondblclick = ettInitEdit;
ettAchieve.ondblclick = ettAchievedEdit;
ettStop.ondblclick = ettStopEdit;

function ettInitEdit(){
    launchModal("ETT Initiated At","ETT Initiated Time");
}

function ettAchievedEdit(){
    launchModal("ETT Achieved At","ETT Achieved Time");
}

function ettStopEdit(){
    launchModal("ETT Stopped At","ETT Stopped Time");
}

function ettInitFunc(){
    localStorage.setItem("ETT", "initiated");
    localStorage.setItem("ETT Initiated Time", getCurrentTime());
}

function ettAchieveFunc(){
    localStorage.setItem("ETT", "achieved");
    localStorage.setItem("ETT Achieved Time", getCurrentTime());
}

function ettStopFunc(){
    localStorage.setItem("ETT", "stopped");
    localStorage.setItem("ETT Stopped Time", getCurrentTime());
}

var diffAirwayInit = document.getElementById("diffAirwayInit");
var diffAirwayAchieve = document.getElementById("diffAirwayAchieved");
var diffAirwayStop = document.getElementById("diffAirwayStop")

diffAirwayInit.onclick = diffAirwayInitFunc;
diffAirwayAchieve.onclick = diffAirwayAchieveFunc;
diffAirwayStop.onclick = diffAirwayStopFunc;

diffAirwayInit.ondblclick = diffAirwayInitEdit;
diffAirwayAchieve.ondblclick = diffAirwayAchievedEdit;
diffAirwayStop.ondblclick = diffAirwayStopEdit;

function diffAirwayInitEdit(){
    launchModal("Difficult Airway Initiated At","Difficult Airway Initiated Time");
}

function diffAirwayAchievedEdit(){
    launchModal("Difficult Airway Achieved At","Difficult Airway Achieved Time");
}

function diffAirwayStopEdit(){
    launchModal("Difficult Airway Stopped At","Difficult Airway Stopped Time");
}

function diffAirwayInitFunc(){
    localStorage.setItem("Difficult Airway", "initiated");
    localStorage.setItem("Difficult Airway Initiated Time", getCurrentTime());
}

function diffAirwayAchieveFunc(){
    localStorage.setItem("Difficult Airway", "achieved");
    localStorage.setItem("Difficult Airway Achieved Time", getCurrentTime());
}

function diffAirwayStopFunc(){
    localStorage.setItem("Difficult Airway", "stopped");
    localStorage.setItem("Difficult Airway Stopped Time", getCurrentTime());
}

var surgAirwayInit = document.getElementById("surgAirwayInit");
var surgAirwayAchieve = document.getElementById("surgAirwayAchieved");
var surgAirwayStop = document.getElementById("surgAirwayStop")

surgAirwayInit.onclick = surgAirwayInitFunc;
surgAirwayAchieve.onclick = surgAirwayAchieveFunc;
surgAirwayStop.onclick = surgAirwayStopFunc;

surgAirwayInit.ondblclick = surgAirwayInitEdit;
surgAirwayAchieve.ondblclick = surgAirwayAchievedEdit;
surgAirwayStop.ondblclick = surgAirwayStopEdit;

function surgAirwayInitEdit(){
    launchModal("Surgical Airway Initiated At","Surgical Airway Initiated Time");
}

function surgAirwayAchievedEdit(){
    launchModal("Surgical Airway Achieved At","Surgical Airway Achieved Time");
}

function surgAirwayStopEdit(){
    launchModal("Surgical Airway Stopped At","Surgical Airway Stopped Time");
}

function surgAirwayInitFunc(){
    localStorage.setItem("Surgical Airway", "initiated");
    localStorage.setItem("Surgical Airway Initiated Time", getCurrentTime());
}

function surgAirwayAchieveFunc(){
    localStorage.setItem("Surgical Airway", "achieved");
    localStorage.setItem("Surgical Airway Achieved Time", getCurrentTime());
}

function surgAirwayStopFunc(){
    localStorage.setItem("Surgical Airway", "stopped");
    localStorage.setItem("Surgical Airway Stopped Time", getCurrentTime());
}
/**
 * Set up Breathing buttons
 */
//Set up etco2 radio buttons
var etco2_no = document.getElementById("etco2_none");
var etco2_less25 = document.getElementById("etco2_less25");
var etco2_25plus = document.getElementById("etco2_25plus");
var etco2_30plus = document.getElementById("etco2_30plus");
var etco2_35plus = document.getElementById("etco2_35plus");
var etco2_40plus = document.getElementById("etco2_40plus");
var etco2_50plus = document.getElementById("etco2_50plus");


//Set up etco2 onclick functions
etco2_no.onclick = etco2_noFunc;
etco2_less25.onclick = etco2_less25Func;
etco2_25plus.onclick = etco2_25plusFunc;
etco2_30plus.onclick = etco2_30plusFunc;
etco2_35plus.onclick = etco2_35plusFunc;
etco2_40plus.onclick = etco2_40plusFunc;
etco2_50plus.onclick = etco2_50plusFunc;

//Based on the radio button clicked, we save the corresponding etco2 value in localStorage
function etco2_noFunc(){
    var ett = localStorage.getItem("ETT alert");
    if(ett === "thrown"){
        localStorage.setItem("ETT Alert", "dismissed");
        $('#ETT-etco2-alert').remove();
    }
    localStorage.setItem("ETCO2", "not present");
}

function etco2_less25Func(){
    var ett = localStorage.getItem("ETT alert");
    if(ett === "thrown"){
        localStorage.setItem("ETT Alert", "dismissed");
        $('#ETT-etco2-alert').remove();
    }
    localStorage.setItem("ETCO2", "<25");
}

function etco2_25plusFunc(){
    var ett = localStorage.getItem("ETT alert");
    if(ett === "thrown"){
        localStorage.setItem("ETT Alert", "dismissed");
        $('#ETT-etco2-alert').remove();
    }
    localStorage.setItem("ETCO2", "25-30");
}

function etco2_30plusFunc(){
    var ett = localStorage.getItem("ETT alert");
    if(ett === "thrown"){
        localStorage.setItem("ETT Alert", "dismissed");
        $('#ETT-etco2-alert').remove();
    }
    localStorage.setItem("ETCO2", "30-35");
}

function etco2_35plusFunc(){
    var ett = localStorage.getItem("ETT alert");
    if(ett === "thrown"){
        localStorage.setItem("ETT Alert", "dismissed");
        $('#ETT-etco2-alert').remove();
    }
    localStorage.setItem("ETCO2", "35-40");
}

function etco2_40plusFunc(){
    var ett = localStorage.getItem("ETT alert");
    if(ett === "thrown"){
        localStorage.setItem("ETT Alert", "dismissed");
        $('#ETT-etco2-alert').remove();
    }
    localStorage.setItem("ETCO2", "40-50");
}

function etco2_50plusFunc(){
    var ett = localStorage.getItem("ETT alert");
    if(ett === "thrown"){
        localStorage.setItem("ETT Alert", "dismissed");
        $('#ETT-etco2-alert').remove();
    }
    localStorage.setItem("ETCO2", ">50");
}

// Buttons for chest rise
var rchesty = document.getElementById('rchestyes');
var rchestn = document.getElementById('rchestno');
var lchesty = document.getElementById('lchestyes');
var lchestn = document.getElementById('lchestno');

rchesty.onclick = rchest1Func;
rchestn.onclick = rchest2Func;
lchesty.onclick = lchest1Func;
lchestn.onclick = lchest2Func;

function rchest1Func() {
    localStorage.setItem("Right Chest Rise/Breath Sounds", "Yes");
}

function rchest2Func() {
    localStorage.setItem("Right Chest Rise/Breath Sounds", "No");
}

function lchest1Func() {
    localStorage.setItem("Left Chest Rise/Breath Sounds", "Yes");
}

function lchest2Func() {
    localStorage.setItem("Left Chest Rise/Breath Sounds", "No");
}

/**
 * Set up Circulation buttons
 */
//Set up HR and BP text fields
var hrText = document.getElementById("hr");
var bpText = document.getElementById("bp");
var ageText = document.getElementById("age");

ageText.oninput = recordAge;
hrText.oninput = recordHR;
bpText.oninput = recordBP;

function recordHR(){
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
}

function recordBP(){
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
}

function recordAge(){
    localStorage.setItem("Patient Age", ageText.value);
}

//Set up PIV radio buttons
var piv1 = document.getElementById('funp1');
var piv2 = document.getElementById('funp2');
var piv3 = document.getElementById('funp>2');

piv1.onclick = piv1Func;
piv2.onclick = piv2Func;
piv3.onclick = piv3Func;

function piv1Func() {
    localStorage.setItem("Functional Peripheral IV count", "1");
    localStorage.setItem("Functional Peripheral IV established", "true");
}

function piv2Func() {
    localStorage.setItem("Functional Peripheral IV count", "2");
    localStorage.setItem("Functional Peripheral IV established", "true");
}

function piv3Func() {
    localStorage.setItem("Functional Peripheral IV count", ">2");
    localStorage.setItem("Functional Peripheral IV established", "true");
}

//Set up Central Line and Intraosseous Line buttons
var centrLine = document.getElementById('cenlYes');
var intraoLine = document.getElementById('intralYes');

centrLine.onclick = centrLineFunc;
intraoLine.onclick = intraoLineFunc;

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
var lipc1 = document.getElementById('lipc-pi');
var lipc2 = document.getElementById('lipc-wh');
var lipc3 = document.getElementById('lipc-unk');

lipc1.onclick = lipc1Func;
lipc2.onclick = lipc2Func;
lipc3.onclick = lipc3Func;

function lipc1Func() {
    localStorage.setItem("Lip Color", "Pink");
}

function lipc2Func() {
    localStorage.setItem("Lip Color", "White");
}

function lipc3Func() {
    localStorage.setItem("Lip Color", "Unable to assess");
}

//Buttons for nail bed color
var nailbc1 = document.getElementById('nailc-pi');
var nailbc2 = document.getElementById('nailc-wh');
var nailbc3 = document.getElementById('nailc-unk');

nailbc1.onclick = nailbc1Func;
nailbc2.onclick = nailbc2Func;
nailbc3.onclick = nailbc3Func;

function nailbc1Func() {
    localStorage.setItem("Nail Bed Color", "Pink");
}

function nailbc2Func() {
    localStorage.setItem("Nail Bed Color", "White");
}

function nailbc3Func() {
    localStorage.setItem("Nail Bed Color", "Unable to assess");
}

//Buttons for capillary refill time.
var caprt1 = document.getElementById('caprt-2');
var caprt2 = document.getElementById('caprt-24');
var caprt3 = document.getElementById('caprt-4');

caprt1.onclick = caprt1Func;
caprt2.onclick = caprt2Func;
caprt3.onclick = caprt3Func;

function caprt1Func() {
    localStorage.setItem("Cap Refill Time", "<2sec");
}

function caprt2Func() {
    localStorage.setItem("Cap Refill Time", "2-4sec");
}

function caprt3Func() {
    localStorage.setItem("Cap Refill Time", ">4sec");
}

// Setup IVF alerts
var ivf1 = document.getElementById('ivf-none');
var ivf2 = document.getElementById('ivf-<20');
var ivf3 = document.getElementById('ivf->20');

ivf1.onclick = ivf1Func;
ivf2.onclick = ivf2Func;
ivf3.onclick = ivf3Func;

function ivf1Func() {
    localStorage.setItem("IVF", "none");
}

function ivf2Func() {
    localStorage.setItem("IVF", "<20mL/kg");
}

function ivf3Func() {
    localStorage.setItem("IVF", ">20mL/kg");
}

//Set up Type and Cross Alert
var typeAndCrossNo = document.getElementById('typeAndCrossNo');
var typeAndCrossYes = document.getElementById('typeAndCrossYes');

typeAndCrossNo.onclick = typeAndCrossNoFunc;
typeAndCrossYes.onclick = typeAndCrossYesFunc;

function typeAndCrossNoFunc() {
    localStorage.setItem("Type and Cross", "no");
}

function typeAndCrossYesFunc() {
    localStorage.setItem("Type and Cross", "yes");
}

var mtpButNo = document.getElementById('mtpNo');
var prbcButNo = document.getElementById('tprbcNo');

var mtpButYes = document.getElementById('mtpYes');
var prbcButYes = document.getElementById('tprbcYes');

mtpButNo.onclick = mtpFuncNo;
prbcButNo.onclick = prbcFuncNo;
mtpButYes.onclick = mtpFuncYes;
prbcButYes.onclick = prbcFuncYes;

function prbcFuncYes(){
    var prbcAlert = localStorage.getItem("Transfusion PRBC Alert");
    localStorage.setItem("Transfusion PRBC", "yes");
    if (prbcAlert === "thrown"){
        $('#tprbc-alert').remove();
        localStorage.setItem("Transfusion PRBC Alert", "dismissed");
    }
}

function mtpFuncYes(){
    var mtpAlert =localStorage.getItem("Massive Transfusion Protocol Alert");
    localStorage.setItem("Massive Transfusion Protocol", "yes");
    if (mtpAlert === "thrown"){
        $('#mtp-alert').remove();
        localStorage.setItem("Massive Transfusion Protocol Alert", "dismissed");
    }
}

function mtpFuncNo(){
    localStorage.setItem("Massive Transfusion Protocol", "no");
}

function prbcFuncNo(){
    localStorage.setItem("Transfusion PRBC", "no");
}

/**
 * Set up Disability buttons
 */
//Set up all GCS Motor
var m6 = document.getElementById('motor6');
var m5 = document.getElementById('motor5');
var m4 = document.getElementById('motor4');
var m3 = document.getElementById('motor3');
var m2 = document.getElementById('motor2');
var m1 = document.getElementById('motor1');

m6.onclick = motor6;
m5.onclick = motor5;
m4.onclick = motor4;
m3.onclick = motor3;
m2.onclick = motor2;
m1.onclick = motor1;

function motor6() {
    localStorage.setItem("GCS Motor", "6");
}

function motor5() {
    localStorage.setItem("GCS Motor", "5");
}

function motor4() {
    localStorage.setItem("GCS Motor", "4");
}

function motor3() {
    localStorage.setItem("GCS Motor", "3");
}

function motor2() {
    localStorage.setItem("GCS Motor", "2");
}

function motor1() {
    localStorage.setItem("GCS Motor", "1");
}

//Set up GCS Verbal
var v5 = document.getElementById('verbal5');
var v4 = document.getElementById('verbal4');
var v3 = document.getElementById('verbal3');
var v2 = document.getElementById('verbal2');
var v1 = document.getElementById('verbal1');

v5.onclick = verbal5;
v4.onclick = verbal4;
v3.onclick = verbal3;
v2.onclick = verbal2;
v1.onclick = verbal1;

function verbal5() {
    localStorage.setItem("GCS Verbal", "5");
}

function verbal4() {
    localStorage.setItem("GCS Verbal", "4");
}

function verbal3() {
    localStorage.setItem("GCS Verbal", "3");
}

function verbal2() {
    localStorage.setItem("GCS Verbal", "2");
}

function verbal1() {
    localStorage.setItem("GCS Verbal", "1");
}

//Set up GCS Eye
var e4 = document.getElementById('eye4');
var e3 = document.getElementById('eye3');
var e2 = document.getElementById('eye2');
var e1 = document.getElementById('eye1');

e4.onclick = eye4;
e3.onclick = eye3;
e2.onclick = eye2;
e1.onclick = eye1;

function eye4() {
    localStorage.setItem("GCS Eye", "4");
}

function eye3() {
    localStorage.setItem("GCS Eye", "3");
}

function eye2() {
    localStorage.setItem("GCS Eye", "2");
}

function eye1() {
    localStorage.setItem("GCS Eye", "1");
}

function fetchTimeModal(){
    var hr = Math.round(parseInt(document.getElementById('hourStamp').value, 10));
    var min = Math.round(parseInt(document.getElementById('minuteStamp').value, 10));
    var sec =Math.round(parseInt(document.getElementById('secondStamp').value, 10));
    var timeStamp = hr.toString(10) + "hr " +  min.toString(10) + "min " + sec.toString(10) + "sec";
    return timeStamp;
}

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
        console.log(localStorage.getItem(step));
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
