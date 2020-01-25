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
* Set up Perfusion buttons
*/

// Buttons for lip color
var lipc1 = document.getElementById('lipc-pi');
var lipc2 = document.getElementById('lipc-wh');
var lipc3 = document.getElementById('lipc-uta');

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
var nailbc3 = document.getElementById('nailc-uta');

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

function caprtFunc() {
    localStorage.setItem("Cap Refill Time", ">4sec");
}


/**
 * Set up Disability buttons
 */

/**
 * Set up Exposure buttons
 */
