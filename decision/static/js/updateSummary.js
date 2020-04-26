setInterval(updateVitals, 1000);

function updateVitals(){
    var hr = localStorage.getItem("HR_display");
    var bp = localStorage.getItem("BP_display");
    var shock = localStorage.getItem("Shock_display");
    var etco2 = localStorage.getItem("ETCO2_Display");
    var gcs = localStorage.getItem("GCS_Display");
    var ett = localStorage.getItem("ETT_Display");
    var bag = localStorage.getItem("BagMask_Display");
    var ivf = localStorage.getItem("IVF_Display");
    var diffAirway = localStorage.getItem("DiffAirway_Display");

    document.getElementById("hr_display").innerHTML = ("HR: " + hr + "<br>");
    document.getElementById("bp_display").innerHTML = ("BP: " + bp + "<br>");
    document.getElementById("shock_display").innerHTML = ("Shock: " + shock + "<br>");
    document.getElementById("etco2_display").innerHTML = ("ETCO<sub>2</sub>: " + etco2 + "<br>");
    document.getElementById("gcs_display").innerHTML = ("GCS: " + gcs + "<br>");
    document.getElementById("ettDisplay").innerHTML = ett;
    document.getElementById("bagDisplay").innerHTML = bag;
    document.getElementById("ivfDisplay").innerHTML = ivf;
    document.getElementById("diffAirwayDisplay").innerHTML = diffAirway;

}