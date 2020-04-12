setInterval(updateVitals, 1000);

function updateVitals(){
    var hr = localStorage.getItem("HR_display");
    var bp = localStorage.getItem("BP_display");
    var shock = localStorage.getItem("Shock_display");
    var ett = localStorage.getItem("ETT_display");
    var bvm = localStorage.getItem("BVM_display");
    var rps = localStorage.getItem("RPS_display");
    var lps = localStorage.getItem("LPS_display");

    document.getElementById("hr_display").innerHTML = ("HR: " + hr + "<br>");
    document.getElementById("bp_display").innerHTML = ("BP: " + bp + "<br>");
    document.getElementById("shock_display").innerHTML = ("Shock: " + shock + "<br>");
    document.getElementById("ett_display").innerHTML = ("Airway: " + ett + "<br>");
    document.getElementById("bvm_display").innerHTML = ("Breathing: " + bvm + "<br>");
    document.getElementById("pupil_display").innerHTML = ("Disability:<br> Pupils: Right:" + rps + " Left: " + lps + "<br>");
}
