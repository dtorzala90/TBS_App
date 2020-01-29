/**
 * This script is responsible for initializing all radio buttons and text fields
 * with the appropriate onClick or onSubmit functions. Each of these functions
 * responds to user click by saving the appropriate values in localStorage. This
 * has all been moved into its own script to prevent clutter in the HTML file.
 */

/**
 * Set up Airway buttons
 */


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
    localStorage.setItem("ETCO2", "not present");
}

function etco2_less25Func(){
    localStorage.setItem("ETCO2", "<25");
}

function etco2_25plusFunc(){
    localStorage.setItem("ETCO2", "25-30");
}

function etco2_30plusFunc(){
    localStorage.setItem("ETCO2", "30-35");
}

function etco2_35plusFunc(){
    localStorage.setItem("ETCO2", "35-40");
}

function etco2_40plusFunc(){
    localStorage.setItem("ETCO2", "40-50");
}

function etco2_50plusFunc(){
    localStorage.setItem("ETCO2", ">50");
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
    var min = parseInt(localStorage.getItem('total_seconds_summary'))/60;
    var sec = parseInt(localStorage.getItem('total_seconds_summary'))%60;
    var display = "Heartrate: " + hr + " at " + min.toString(10) + "min " + sec.toString(10) + "sec";
    localStorage.setItem('HR Display',display);
}

function recordBP(){
    var bp = bpText.value;
    localStorage.setItem("BP", bpText.value);
    var min = parseInt(localStorage.getItem('total_seconds_summary'));
    console.log(min);
    console.log(min/60);
    var sec = parseInt(localStorage.getItem('total_seconds_summary'))%60;
    var display = "Systolic BP: " + bp + " at " + min.toString(10) + "min " + sec.toString(10) + "sec";
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
var typeAndCross = document.getElementById('typeAndCrossNo');

typeAndCross.onclick = typeAndCrossFunc;

function typeAndCrossFunc() {
    localStorage.setItem("Type and Cross Selection", "no");
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
/**
 * Set up Exposure buttons
 */
