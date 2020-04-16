setInterval(updateVitals, 1000);

function updateVitals(){
    var hr = localStorage.getItem("HR_display");
    var bp = localStorage.getItem("BP_display");
    var shock = localStorage.getItem("Shock_display");
    var ettdepth = localStorage.getItem("ETT_display");
    var ettsize = localStorage.getItem("ETT_size_display");
    var bvm = localStorage.getItem("BVM_display");
    var rps = localStorage.getItem("RPS_display");
    var lps = localStorage.getItem("LPS_display");
    var ivfs = localStorage.getItem("IVF_Started");
    var ivfa = localStorage.getItem("IVF_Additional");
    var ivf;

    if (ivfs === "null") {
      ivf = ""
    } else {
      if (ivfa === "null") {
        ivf = "IVF Volume " + ivfs + "mL/Kg";
      } else {
        ivf = "IVF Volume " + (parseInt(ivfs) + parseInt(ivfa)).toString() + "mL/Kg";
      }
    }
    var etco2 = localStorage.getItem("ETCO2_Display");
    var gcs = localStorage.getItem("GCS_Display");

    document.getElementById("hr_display").innerHTML = ("HR: " + hr + "<br>");
    document.getElementById("bp_display").innerHTML = ("BP: " + bp + "<br>");
    document.getElementById("shock_display").innerHTML = ("Shock: " + shock + "<br>");
    document.getElementById("ett_display").innerHTML = ("Airway: " + ettdepth + "<br>" + ettsize + "<br>");
    document.getElementById("bvm_display").innerHTML = ("Breathing: " + bvm + "<br>");
    document.getElementById("pupil_display").innerHTML = ("Disability:<br> Pupils: Right:" + rps + " Left: " + lps + "<br>");
    document.getElementById("ivf_display").innerHTML = ("Circulation: " + ivf + "<br>");
    document.getElementById("etco2_display").innerHTML = ("ETCO<sub>2</sub>: " + etco2 + "<br>");
    document.getElementById("gcs_display").innerHTML = ("GCS: " + gcs + "<br>");
}
