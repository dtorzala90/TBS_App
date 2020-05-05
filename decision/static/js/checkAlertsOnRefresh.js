/**
 * This script is responsible for checking if any alerts need to be displayed
 * after a user navigates away from and back to the summary page.
 */

//IV and IV fluid Alerts
var noiv = localStorage.getItem("Alert No IV");
var onepiv = localStorage.getItem("Alert One PIV");
var considerBolus = localStorage.getItem("Alert Consider Bolus");
var fluidsGiven = localStorage.getItem("Alert Fluids Given");
var excessFluids = localStorage.getItem("Alert Excess IVF");

if (noiv === "thrown") {
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='no-iv-alert'>\n" +
        "                  <strong>No IV:  Consider central line or intraosseous line!</strong>\n" +
        "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Alert No IV\", \"dismissed\")'" +
        "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                  </button>\n" +
        "                </div>");
}

if (onepiv === "thrown") {
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='one-piv-alert'>\n" +
        "                  <strong>Consider additional PIV</strong>\n" +
        "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Alert One PIV\", \"dismissed\")'" +
        "                        data-dismiss=\"alert\" aria-label=\"Close\">\n" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                  </button>\n" +
        "                </div>");
}

if (considerBolus === "thrown") {
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='consider-bolus-alert'>\n" +
        "                  <strong>Consider IVF bolus!</strong>\n" +
        "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Alert Excess IVF\", \"dismissed\")'" +
        "                        data-dismiss=\"alert\" aria-label=\"Close\">\n" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                  </button>\n" +
        "                </div>");
}

if (fluidsGiven === "thrown") {
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='fluids-given-alert'>\n" +
        "                  <strong>Fluids Given</strong>\n" +
        "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Alert Fluids Given\", \"dismissed\")'" +
        "                        data-dismiss=\"alert\" aria-label=\"Close\">\n" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                  </button>\n" +
        "                </div>");
}

if (excessFluids === "thrown") {
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='excess-fluids-alert'>\n" +
        "                  <strong>Excess IVF, consider transfusion!</strong>\n" +
        "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Alert Excess IVF\", \"dismissed\")'" +
        "                        data-dismiss=\"alert\" aria-label=\"Close\">\n" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                  </button>\n" +
        "                </div>");
}

//ETCO2 alerts
var noEtco2 = localStorage.getItem("Record ETCO2 Alert");
var valueAlert = localStorage.getItem("ETCO2 Value Alert");

if(noEtco2 === "thrown"){
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='no-etco2-alert'>\n" +
        "                  <strong>No ETCO<sub>2</sub> measured!</strong>\n" +
        "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Record ETCO2 Alert\", \"dismissed\")'" +
        "                               data-dismiss=\"alert\" aria-label=\"Close\">\n" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                  </button>\n" +
        "                </div>");
}

else {
    if (valueAlert === "No Measurement") {
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
            "                  <strong>Check Airway Placement!</strong>\n" +
            "                </div>");

    } else if (valueAlert === "<25") {
        $('#alert_placeholder').append(
            "               <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
            "                 <strong>ETCO<sub>2</sub> is very low. Confirm pulse!</strong>\n" +
            "                </div>");

    } else if (valueAlert === "25-30") {
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
            "                  <strong>Decrease Ventilation Rate!</strong>\n" +
            "                </div>");

    } else if (valueAlert === "40-50") {
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
            "                  <strong>ETCO<sub>2</sub> and GCS lower than 13!</strong>\n" +
            "                </div>");

    } else if (valueAlert === ">50") {
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
            "                  <strong>Increase Ventilation Rate!</strong>\n" +
            "                </div>");
    }
}

//ETT Alerts
var ettEtco2Alert = localStorage.getItem("ETT ETCO2 Alert");
var ettGcsAlert = localStorage.getItem("ETT GCS Alert");

if(ettEtco2Alert === "thrown"){
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='ett-etco2-alert'>\n" +
        "                  <strong>Confirm ETC0<sub>2</sub></strong>\n" +
        "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"ETT ETCO2 Alert\", \"dismissed\")'" +
        "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                  </button>\n" +
        "                </div>");
}

if(ettGcsAlert === "thrown"){
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='ett-gcs-alert'>\n" +
        "                  <strong>Determine GCS Before Giving Intubation Meds!</strong>\n" +
        "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"ETT GCS Alert\", \"dismissed\")'" +
        "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                  </button>\n" +
        "                </div>");
}

//Chest Sound Alerts
var rightAlert = localStorage.getItem("Right Breathing Alert");
var leftAlert = localStorage.getItem("Left Breathing Alert");

if(rightAlert === "thrown"){
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='right-chest-alert'>\n" +
        "                  <strong>Check ETT Depth; Consider Right Chest Tube!</strong>\n" +
        "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Right Breathing Alert\", \"dismissed\")'" +
        "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                  </button>\n" +
        "                </div>");
}

if(leftAlert === "thrown"){
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='left-chest-alert'>\n" +
        "                  <strong>Check ETT Depth; Consider Left Chest Tube!</strong>\n" +
        "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Right Breathing Alert\", \"dismissed\")'" +
        "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                  </button>\n" +
        "                </div>");
}

//Vital Alerts
var hrAlert = localStorage.getItem("HR Alert");
var hypoAlert = localStorage.getItem("Hypotensive Alert");
var shockAlert = localStorage.getItem("Shock Alert");

if(hrAlert === "Bradycardia"){
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='brady-alert'>\n" +
        "                  <strong>Bradycardia: Consider cause!</strong>\n" +
        "                </div>");
}

else if(hrAlert === "Tachycardia"){
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='tachy-alert'>\n" +
        "                  <strong>Tachycardia: Consider cause!</strong>\n" +
        "                </div>");
}

if(hypoAlert === "thrown"){
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='hypo-alert'>\n" +
        "                  <strong>Hypotensive!</strong>\n" +
        "                </div>");
}

if(shockAlert === "thrown"){
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='shock-alert'>\n" +
        "                  <strong>Elevated shock index!</strong>\n" +
        "                </div>");
}

//Perfusion Alerts
var perfusionAlert = localStorage.getItem("Poor Perfusion Alert");

if(perfusionAlert === "thrown"){
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='poor-perfusion-alert'>\n" +
        "                  <strong>Patient has poor perfusion.</strong>\n" +
        "                </div>");
}

//Type and Cross Alert
var typeAlert = localStorage.getItem("Type and Cross Alert");

if(typeAlert === "thrown"){
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='type-cross-alert'>\n" +
        "                  <strong>Consider Type and Cross!!!!</strong>\n" +
        "                   <button type=\"button\" data-dismiss=\"alert\" class=\"close\" onclick='localStorage.setItem(\"Type and Cross Alert\", \"dismissed\")'" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                  </button>\n" +
        "                </div>");
}

//PRBC and MTP Alerts
var prbcAlert = localStorage.getItem('PRBC Alert');
var mtpAlert = localStorage.getItem('MTP Alert');

if(prbcAlert === "thrown"){
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='prbc-alert'>\n" +
        "                  <strong>Consider Transfusion of PRBC!</strong>\n" +
        "                   <button type=\"button\" data-dismiss=\"alert\" class=\"close\" onclick='localStorage.setItem(\"PRBC Alert\", \"closed\")'" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                  </button>\n" +
        "                </div>");
}

if(mtpAlert === "thrown"){
    $('#alert_placeholder').append(
        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='mtp-alert'>\n" +
        "                  <strong>Consider Massive Transfusion Protocol!</strong>\n" +
        "                   <button type=\"button\" data-dismiss=\"alert\" class=\"close\" onclick='localStorage.setItem(\"MTP Alert\", \"closed\")'" +
        "                    <span aria-hidden=\"true\">&times;</span>\n" +
        "                  </button>\n" +
        "                </div>");
}
