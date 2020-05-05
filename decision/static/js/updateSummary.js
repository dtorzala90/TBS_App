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
    var rightPupil = localStorage.getItem("RightPupil_Display");
    var leftPupil = localStorage.getItem("LeftPupil_Display");


    document.getElementById("hr_display").innerHTML = ("<b>HR: " + hr + "<br></b>");
    document.getElementById("bp_display").innerHTML = ("<b>BP: " + bp + "<br></b>");
    document.getElementById("shock_display").innerHTML = ("<b>Shock: " + shock + "<br></b>");
    document.getElementById("etco2_display").innerHTML = ("<b> ETC0<sub>2</sub>: " + etco2 + "<br></b>");
    document.getElementById("gcs_display").innerHTML = ("<b>GCS: " + gcs + "<br></b>");
    document.getElementById("ettDisplay").innerHTML = "<b>" + ett + "</b>";
    document.getElementById("bagDisplay").innerHTML = "<b>" + bag + "</b>";
    document.getElementById("ivfDisplay").innerHTML = "<b>" + ivf + "</b>";
    document.getElementById("diffAirwayDisplay").innerHTML = "<b>" + diffAirway + "</b>";
    document.getElementById("rightPupilDisplay").innerHTML = "<b>" + rightPupil + "</b>";
    document.getElementById("leftPupilDisplay").innerHTML = "<b>" + leftPupil + "</b>";
}