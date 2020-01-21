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
etco2_no.onclick = etco2_Func("none");
etco2_less25.onclick = etco2_Func("<25");
etco2_25plus.onclick = etco2_Func(">25");
etco2_30plus.onclick = etco2_Func(">30");
etco2_35plus.onclick = etco2_Func(">35");
etco2_40plus.onclick = etco2_Func(">40");
etco2_50plus.onclick = etco2_Func(">50");

//Based on the radio button clicked, we save the corresponding etco2 value in localStorage
function etco2_Func(value){
    if(value === "none"){
        localStorage.setItem("ETCO2", "not present");
    }

    else if (value === "<25"){
        localStorage.setItem("ETCO2", "<25");
    }

    else if (value === ">25"){
        localStorage.setItem("ETCO2", "25-30");
    }

    else if (value === ">30"){
        localStorage.setItem("ETCO2", "30-35");
    }

    else if (value === ">35"){
        localStorage.setItem("ETCO2", "35-40");
    }

    else if (value === ">40"){
        localStorage.setItem("ETCO2", "40-50");
    }

    else if (value === ">50"){
        localStorage.setItem("ETCO2", ">50");
    }

}

/**
 * Set up Circulation buttons
 */
//Set up PIV radio buttons
var piv1 = document.getElementById('funp1');
var piv2 = document.getElementById('funp2');
var piv3 = document.getElementById('funp>2');

piv1.onclick = pivFunc(1);
piv2.onclick = pivFunc(2);
piv3.onclick = pivFunc(3);

function pivFunc(count) {
    if(count == 1){
        localStorage.setItem("Functional Peripheral IV count", "1");
        localStorage.setItem("Functional Peripheral IV established", "true");
    }

    else if(count == 2){
        localStorage.setItem("Functional Peripheral IV count", "2");
        localStorage.setItem("Functional Peripheral IV established", "true");
    }

    else if (count == 3){
        localStorage.setItem("Functional Peripheral IV count", ">2");
        localStorage.setItem("Functional Peripheral IV established", "true");
    }
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
//Set up all GCS Motor radio buttons
var m6 = document.getElementById('motor6');
var m5 = document.getElementById('motor5');
var m4 = document.getElementById('motor4');
var m3 = document.getElementById('motor3');
var m2 = document.getElementById('motor2');
var m1 = document.getElementById('motor1');

m6.onclick = gcsValue("motor",6);
m5.onclick = gcsValue("motor",5);
m4.onclick = gcsValue("motor",4);
m3.onclick = gcsValue("motor",3);
m2.onclick = gcsValue("motor",2);
m1.onclick = gcsValue("motor",1);

//Set up GCS Verbal radio buttons
var v5 = document.getElementById('verbal5');
var v4 = document.getElementById('verbal4');
var v3 = document.getElementById('verbal3');
var v2 = document.getElementById('verbal2');
var v1 = document.getElementById('verbal1');

v5.onclick = gcsValue("verbal",5);
v4.onclick = gcsValue("verbal",4);
v3.onclick = gcsValue("verbal",3);
v2.onclick = gcsValue("verbal",2);
v1.onclick = gcsValue("verbal",1);

//Set up GCS Eye radio buttons
var e4 = document.getElementById('eye4');
var e3 = document.getElementById('eye3');
var e2 = document.getElementById('eye2');
var e1 = document.getElementById('eye1');

e4.onclick = gcsValue("eye",4);
e3.onclick = gcsValue("eye",3);
e2.onclick = gcsValue("eye",2);
e1.onclick = gcsValue("eye",1);

//Function used to assign the appropriate value to the appropriate GCS evaluation
function gcsValue(type, value){
    if(type === "motor"){
        if(value == 6){
            localStorage.setItem("GCS Motor", "6");
        }

        else if (value == 5){
            localStorage.setItem("GCS Motor", "5");
        }

        else if (value == 4){
            localStorage.setItem("GCS Motor", "4");
        }

        else if (value == 3){
            localStorage.setItem("GCS Motor", "3");
        }

        else if (value == 2){
            localStorage.setItem("GCS Motor", "2");
        }

        else if (value == 1){
            localStorage.setItem("GCS Motor", "1");
        }

        else {
            localStorage.setItem("GCS Motor", "null");
        }
    }

    else if(type === "verbal"){
        if (value == 5){
            localStorage.setItem("GCS Verbal", "5");
        }

        else if (value == 4){
            localStorage.setItem("GCS Verbal", "4");
        }

        else if (value == 3){
            localStorage.setItem("GCS Verbal", "3");
        }

        else if (value == 2){
            localStorage.setItem("GCS Verbal", "2");
        }

        else if (value == 1){
            localStorage.setItem("GCS Verbal", "1");
        }

        else {
            localStorage.setItem("GCS Verbal", "null");
        }
    }

    else if(type === "eye"){
        if (value == 4){
            localStorage.setItem("GCS Eye", "4");
        }

        else if (value == 3){
            localStorage.setItem("GCS Eye", "3");
        }

        else if (value == 2){
            localStorage.setItem("GCS Eye", "2");
        }

        else if (value == 1){
            localStorage.setItem("GCS Eye", "1");
        }

        else {
            localStorage.setItem("GCS Eye", "null");
        }
    }

    else{
        //crash
    }
}

/**
 * Set up Exposure buttons
 */