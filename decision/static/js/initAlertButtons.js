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