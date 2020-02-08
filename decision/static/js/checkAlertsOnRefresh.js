/**
 * This script is responsible for checking if any alerts need to be displayed
 * after a user navigates away from and back to the summary page.
 */

//Check for circulation alerts
checkIVAlerts();
checkETCO2Alerts();
checkGCSAlerts();
check_HR_BP_Alerts();
checkShockAlert();
checkPerfusionAlerts();
checkTypeAndCrossAlert();
checkBreathingAlerts();

function checkIVAlerts() {
    var ivAlert = localStorage.getItem("Alert No IV");
    var pivAlert = localStorage.getItem("Alert One PIV");
    var civfluidAlert = localStorage.getItem("Alert Consider IVF");
    var givenfluidAlert = localStorage.getItem("Alert Fluids Given");
    var eivfluidAlert = localStorage.getItem("Alert Excess IVF");
    if (ivAlert === "thrown") {
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='no-iv-alert'>\n" +
            "                  <strong>No IV:  Consider central line or intraosseous line!</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }

    if (pivAlert === "thrown") {
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='one-piv-alert'>\n" +
            "                  <strong>Consider additional PIV<</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }

    if (civfluidAlert === "thrown") {
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='consider-ivf-alert'>\n" +
            "                  <strong>Consider IVF bolus</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }
    if (givenfluidAlert === "thrown") {
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='fluids-given-alert'>\n" +
            "                  <strong>Fluids Given</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }
    if (eivfluidAlert === "thrown") {
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='excess-ivf-alert'>\n" +
            "                  <strong>Excess IVFs, consider transfusion</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }
}

function checkETCO2Alerts() {
    var noEtco2Alert = localStorage.getItem("Record ETCO2 Alert");
    var currAlert = localStorage.getItem("Current ETCO2 alert thrown");

    if(noEtco2Alert === "thrown"){
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='no-etco2-alert'>\n" +
            "                  <strong>No ETCO<sub>2</sub> measured!</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }

    else {
        if (currAlert === "not present") {
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                "                  <strong>Check Airway Placement! </strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        } else if (currAlert === "<25") {
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                "                  <strong>ETCO<sub>2</sub> is very low! Confirm pulse and Airway</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        } else if (currAlert === "25-30") {
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                "                  <strong>Decrease Ventilation Rate</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        } else if (currAlert === "40-50") {
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                "                  <strong>GCS < 13:</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        } else if (currAlert === ">50") {
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                "                  <strong>Increase Ventilation Rate</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        }
    }
}

function checkGCSAlerts(){
    var alert = localStorage.getItem("No GCS Alert");
    if (alert === "thrown") {
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='no-iv-alert'>\n" +
            "                  <strong>Determine GCS before giving intubation meds!</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }
}

function check_HR_BP_Alerts(){
    var hypo = localStorage.getItem("Hypotensive Alert");
    var brady = localStorage.getItem("Bradycardia Alert");
    var tach = localStorage.getItem("Tachycardia Alert");

    if(hypo === "thrown"){
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='hypo-alert'>\n" +
            "                  <strong>Hypotensive!</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }

    if(brady === "thrown"){
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='brady-alert'>\n" +
            "                  <strong>Bradycardia:  Consider cause!</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }

    else if(tach === "thrown"){
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='tach-alert'>\n" +
            "                  <strong>Tachycardia</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }
}

function checkPerfusionAlerts(){
    var alert = localStorage.getItem("Poor Perfusion");
    if (alert === "thrown") {
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='poor-perfusion-alert'>\n" +
            "                  <strong>Patient has poor perfusion.</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }
}

function checkShockAlert(){
    var shock_alert = localStorage.getItem("Shock Alert");

    if(shock_alert === "thrown"){
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='shock-alert'>\n" +
            "                  <strong>Elevated shock index!</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }
}

function checkTypeAndCrossAlert(){
    var alert = localStorage.getItem("Type and Cross Alert");
    var dismissed = localStorage.getItem("Type and Cross Alert Dismissed?");
    if (alert === "thrown" && dismissed === "yes") {
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='type-and-cross-alert'>\n" +
            "                  <strong>Consider Type and Cross.</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }
}

function checkBreathingAlerts(){
    var rightAlert = localStorage.getItem("Right Breathing Alert");
    if (rightAlert === "thrown") {
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='right-breathing-alert'>\n" +
            "                  <strong>Check ETT depth; consider right chest tube.</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }
    var leftAlert = localStorage.getItem("Left Breathing Alert");
    if (leftAlert === "thrown") {
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='left-breathing-alert'>\n" +
            "                  <strong>Check ETT depth; consider left chest tube.</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }
}
