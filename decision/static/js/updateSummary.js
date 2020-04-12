setInterval(updateVitals, 1000);

function updateVitals(){
    var hr = localStorage.getItem("HR_display");
    var bp = localStorage.getItem("BP_display");
    var shock = localStorage.getItem("Shock_display");
    var ett = localStorage.getItem("ETT_display");

    document.getElementById("hr_display").innerHTML = ("HR: " + hr + "<br>");
    document.getElementById("bp_display").innerHTML = ("BP: " + bp + "<br>");
    document.getElementById("shock_display").innerHTML = ("Shock: " + shock + "<br>");
    document.getElementById("ett_display").innerHTML = ("Airway: " + ett + "<br>");
}
