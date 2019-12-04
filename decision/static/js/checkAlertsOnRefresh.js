/**
 * This script is responsible for checking if any alerts need to be displayed
 * after a user navigates away from and back to the summary page.
 */

//Check for circulation alerts
checkIVAlerts();
checkETCO2Alerts();

function checkIVAlerts() {
    var ivAlert = localStorage.getItem("Alert No IV");
    var pivAlert = localStorage.getItem("Alert One PIV");
    if (ivAlert === "thrown") {
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='no-iv-alert'>\n" +
            "                  <strong>Alert: No IV:  Consider central line or intraosseous line!</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }

    if (pivAlert === "thrown") {
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='one-piv-alert'>\n" +
            "                  <strong>Alert:  Consider additional PIV<</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }
}

function checkETCO2Alerts() {
    var noEtco2Alert = localStorage.getItem("Record ETCO2 Alert");
    var currAlert = localStorage.getItem("Current alert thrown");

    if(noEtco2Alert === "thrown"){
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='no-etco2-alert'>\n" +
            "                  <strong>Alert: No ETCO2 measured!</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
    }

    else {
        if (currAlert === "not present") {
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                "                  <strong>Alert:  Check Airway Placement! </strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        } else if (currAlert === "<25") {
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                "                  <strong>Alert:  ETCO2 is very low! Confirm pulse and Airway</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        } else if (currAlert === "25-30") {
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                "                  <strong>Alert: Decrease Ventilation Rate</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        } else if (currAlert === "40-50") {
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                "                  <strong>Alert: GCS<13:</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        } else if (currAlert === ">50") {
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                "                  <strong>Alert:  Increase Ventilation Rate</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        }
    }
}