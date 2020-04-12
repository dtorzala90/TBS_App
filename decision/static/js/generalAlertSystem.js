/**
 * This file is responsible for all time based alerts in our system.
 */
var currTime = localStorage.getItem('total_seconds_main');
setInterval(checkAlertsAjax, 1000);

function checkAlertsAjax(){
    currTime = localStorage.getItem('total_seconds_main');
    $.ajax(
    {
        type:"GET",
        url: "/checkAlerts/",
        data:{
            'time': currTime,
        },
        success: function( data )
        {
            checkAlertsLocal(data);
        }
     })
}

function checkAlertsLocal(ajaxData){

    //Check Time Based Alerts First
    var no_etco2 = localStorage.getItem('Record ETCO2 Alert');
    var no_iv = localStorage.getItem('Alert No IV');

    if(no_etco2 == "not thrown"){
        if(ajaxData.no_etco2_recorded == "true"){
            localStorage.setItem("Record ETCO2 Alert", "thrown");
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='no-etco2-alert'>\n" +
                "                  <strong>No ETCO<sub>2</sub> measured!</strong>\n" +
                "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Record ETCO2 Alert\", \"dismissed\")'" +
                "                               data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        }
    }

    else if(no_etco2 == "thrown"){
        if(ajaxData.no_etco2_recorded = "false"){
           localStorage.setItem("Record ETCO2 Alert", "dismissed");
           $('#no-etco2-alert').remove();
        }
    }

    if(no_iv == "not thrown"){
        if(ajaxData.no_iv == 'true'){
            localStorage.setItem('Alert No IV', "thrown");
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='no-iv-alert'>\n" +
                "                  <strong>No IV:  Consider central line or intraosseous line!</strong>\n" +
                "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Alert No IV\", \"dismissed\")'" +
                    "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        }
    }

    else if(no_iv == "thrown"){
        if(ajaxData.no_iv == 'false'){
            localStorage.setItem('Alert No IV', "dismissed");
            $('#no-iv-alert').remove();
        }
    }


    //Intubation Alerts
    var ettEtco2Alert = localStorage.getItem("ETT ETCO2 Alert");
    var ettGcsAlert = localStorage.getItem("ETT GCS Alert");

    if(ettGcsAlert =='not thrown'){
        if(ajaxData.ett_before_gcs == 'true'){
            localStorage.setItem("ETT GCS Alert", "thrown");
             $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='ett-gcs-alert'>\n" +
                "                  <strong>Determine GCS Before Giving Intubation Meds!</strong>\n" +
                "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"ETT GCS Alert\", \"dismissed\")'" +
                    "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        }
        if(ajaxData.ett_before_gcs == 'false'){
             localStorage.setItem("ETT GCS Alert", "dismissed");
        }
    }

    else if(ettGcsAlert == 'thrown'){
        if(ajaxData.ett_before_gcs == 'false'){
             localStorage.setItem("ETT GCS Alert", "dismissed");
             $('#ett-gcs-alert').remove();
        }
    }

    if(ettEtco2Alert =='not thrown'){
        if(ajaxData.ett_no_etco2 == 'true'){
            localStorage.setItem("ETT ETCO2 Alert", "thrown");
             $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='ett-etco2-alert'>\n" +
                "                  <strong>Confirm ETC0<sub>2</sub></strong>\n" +
                "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"ETT ETCO2 Alert\", \"dismissed\")'" +
                    "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        }
        if(ajaxData.ett_no_etco2 == 'false'){
             localStorage.setItem("ETT ETCO2 Alert", "dismissed");
        }
    }

    else if(ettEtco2Alert == 'thrown'){
        if(ajaxData.ett_no_etco2 == 'false'){
             localStorage.setItem("ETT ETCO2 Alert", "dismissed");
             $('#ett-etco2-alert').remove();
        }
    }

    //Chest Sound Alerts
    var rightAlert = localStorage.getItem("Right Breathing Alert");
    var leftAlert = localStorage.getItem("Left Breathing Alert");

    if(rightAlert == "not thrown"){
        if(ajaxData.right_chest == 'true'){
            localStorage.setItem("Right Breathing Alert", "thrown");
             $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='right-chest-alert'>\n" +
                "                  <strong>Check ETT Depth; Consider Right Chest Tube!</strong>\n" +
                "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Right Breathing Alert\", \"dismissed\")'" +
                    "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        }

        else if(ajaxData.right_chest == 'false'){
             localStorage.setItem("Right Breathing Alert", "dismissed");
        }
    }

    else if(rightAlert == "thrown"){
        if(ajaxData.right_chest == 'false'){
            localStorage.setItem("Right Breathing Alert", "thrown");
            $('#right-chest-alert').remove();
        }
    }

    if(leftAlert == "not thrown"){
        if(ajaxData.left_chest == 'true'){
            localStorage.setItem("Left Breathing Alert", "thrown");
             $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='left-chest-alert'>\n" +
                "                  <strong>Check ETT Depth; Consider Left Chest Tube!</strong>\n" +
                "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Right Breathing Alert\", \"dismissed\")'" +
                    "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        }

        else if(ajaxData.left_chest == 'false'){
             localStorage.setItem("Left Breathing Alert", "dismissed");
        }
    }

    else if(leftAlert == "thrown"){
        if(ajaxData.left_chest == 'false'){
            localStorage.setItem("Left Breathing Alert", "thrown");
            $('#left-chest-alert').remove();
        }
    }

    //ETCO2 Alerts
    var etco2ValAlert = localStorage.getItem("ETCO2 Value Alert");
    if(ajaxData.etco2_value != 'null'){

        if(ajaxData.etco2_value == 'no measurement') {
            localStorage.setItem("ETCO2 Value Alert", "No Measurement");
            if(etco2ValAlert != 'null') {
                $('#etco2-value-alert').text('Check Airway Placement');
            }

            else{
                 $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>Check Airway Placement!</strong>\n" +
                    "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"ETCO2 Value Alert\", \"dismissed\")'" +
                        "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }
        }

        else if(ajaxData.etco2_value == '<25') {
            localStorage.setItem("ETCO2 Value Alert", "<25");
            if(etco2ValAlert != 'null'){
                $('#etco2-value-alert').text('ETCO<sub>2</sub> is very low. Confirm pulse!');
            }

            else{
                 $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>ETCO<sub>2</sub> is very low. Confirm pulse!</strong>\n" +
                    "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"ETCO2 Value Alert\", \"dismissed\")'" +
                        "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }
        }

        else if(ajaxData.etco2_value == '25-30') {
            localStorage.setItem("ETCO2 Value Alert", "25-30");
            if(etco2ValAlert != 'null'){
                $('#etco2-value-alert').text('Decrease Ventilation Rate!');
            }

            else{
                 $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>Decrease Ventilation Rate!</strong>\n" +
                    "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"ETCO2 Value Alert\", \"dismissed\")'" +
                        "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }
        }

        else if(ajaxData.etco2_value == '40-50') {
            localStorage.setItem("ETCO2 Value Alert", "40-50");
            if(etco2ValAlert != 'null'){
                $('#etco2-value-alert').text('ETCO<sub>2</sub> and GCS lower than 13!');
            }

            else{
                 $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>ETCO<sub>2</sub> and GCS lower than 13!</strong>\n" +
                    "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"ETCO2 Value Alert\", \"dismissed\")'" +
                        "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }
        }

        else{
            localStorage.setItem("ETCO2 Value Alert", ">50");
            if(etco2ValAlert != 'null'){
                $('#etco2-value-alert').text('Increase Ventilation Rate!');
            }

            else{
                 $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>Increase Ventilation Rate!</strong>\n" +
                    "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"ETCO2 Value Alert\", \"dismissed\")'" +
                        "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }

        }
    }

    else{
        if(etco2ValAlert == 'thrown'){
             localStorage.setItem("ETCO2 Value Alert", "null");
             $('#etco2-value-alert').remove();
        }
    }

    //Check vital based alerts
    var hrAlert = localStorage.getItem("HR Alert");
    var hypoAlert = localStorage.getItem("Hypotensive alert");
    var shockAlert = localStorage.getItem("Shock Alert");

    if(ajaxData.heart_rate == 'bradycardia'){
        if(hrAlert != "null"){
            $('#tachy-alert').remove();
        }

        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='brady-alert'>\n" +
            "                  <strong>Bradycardia:  Consider cause!</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
        localStorage.setItem("HR Alert", "Bradycardia");
    }

    else if(ajaxData.heart_rate == 'tachycardia'){
        if(hrAlert != "null"){
            $('#brady-alert').remove();
        }
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='tachy-alert'>\n" +
            "                  <strong>TachyCardia:  Consider cause!</strong>\n" +
            "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
        localStorage.setItem("HR Alert", "Tachycardia");
    }

    else{
        if(hrAlert != "Tachycardia"){
            $('#tachy-alert').remove();
        }

        else{
             $('#brady-alert').remove();
        }
    }

    if(hypoAlert == 'not thrown' || hypoAlert == 'dismissed'){
        if(ajaxData.hypotensive == 'true'){
                $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='hypo-alert'>\n" +
                    "                  <strong>Hypotensive!</strong>\n" +
                    "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
                localStorage.setItem("Hypotensive Alert", "thrown");
        }
    }

    else if(hypoAlert == 'thrown'){
        if(ajaxData.hypotensive == 'false') {
            $('#hypo-alert').remove();
            localStorage.setItem("Hypotensive Alert", "dismissed");
        }
    }

    if(shockAlert == 'not thrown' || shockAlert =='dismissed'){
        if(ajaxData.shock_elevated == 'true'){
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='shock-alert'>\n" +
                "                  <strong>Elevated shock index!</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
            localStorage.setItem("Shock Alert", "thrown");
        }
    }

    else if(shockAlert == "thrown"){
        if(ajaxData.shock_elevated == 'false') {
            $('#shock-alert').remove();
            localStorage.setItem("Shock Alert", "dismissed");
        }
    }


    //Check IV and IV fluid alerts
    var addlPivAlert = localStorage.getItem("Alert One PIV");
    var fluidsGivenAlert = localStorage.getItem("Alert Fluids Given")
    var excessFluidsAlert = localStorage.getItem("Alert Excess IVF")

    if(addlPivAlert == 'not thrown'){
        if(ajaxData.additional_piv == 'true'){
            localStorage.setItem("Alert One PIV", "thrown");
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='one-piv-alert'>\n" +
                "                  <strong>Consider additional PIV</strong>\n" +
                "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Alert One PIV\", \"dismissed\"))'" +
                    "                        data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        }

        if(ajaxData.additional_piv == 'false'){
            localStorage.setItem("Alert No IV", "dismissed");
        }
    }

    else if(addlPivAlert == 'thrown'){
        if(ajaxData.additional_piv == 'false'){
            localStorage.setItem("Alert No IV", "dismissed");
            $('#no-iv-alert').remove();
        }
    }

    if(ajaxData.fluids_given == 'true'){
         if(fluidsGivenAlert == "not thrown") {
             localStorage.setItem("Alert Fluids Given", "thrown");
             $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='fluids-given-alert'>\n" +
                "                  <strong>Fluids Given</strong>\n" +
                "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Alert Fluids Given\", \"dismissed\"))'" +
                    "                        data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
         }
    }
    else{

        if(fluidsGivenAlert == "thrown"){
            localStorage.setItem("Alert Fluids Given", "dismissed");
            $('#fluids-given-alert').remove();
        }
    }

    if(ajaxData.excess_fluids == 'true'){
        if(fluidsGivenAlert == "thrown"){
            localStorage.setItem("Alert Fluids Given", "dismissed");
            $('#fluids-given-alert').remove();
        }

         if(excessFluidsAlert != "thrown" && excessFluidsAlert != "dismissed") {
             localStorage.setItem("Alert Excess IVF", "thrown");
             $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='excess-fluids-alert'>\n" +
                "                  <strong>Excess IVF, consider transfusion!</strong>\n" +
                "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Alert Excess IVF\", \"dismissed\"))'" +
                    "                        data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
         }
    }

    else{
        if(excessFluidsAlert == "thrown"){
            localStorage.setItem("Alert Excess IVF", "dismissed");
            $('#excess-fluids-alert').remove();
        }
    }

    //Perfusion Alerts
    var perfusionAlert = localStorage.getItem("Poor Perfusion Alert");
    if (ajaxData.poor_perfusion == 'true'){
        if(perfusionAlert != "thrown"){
            localStorage.setItem("Poor Perfusion Alert", "thrown");
            $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='poor-perfusion-alert'>\n" +
            "                  <strong>Patient has poor perfusion.</strong>\n" +
            "                   <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Poor Perfusion Alert\", \"dismissed\"))'" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
        }
    }

    else{
        if(perfusionAlert == "thrown") {
            localStorage.setItem("Poor Perfusion Alert", "dismissed");
            $('#poor-perfusion-alert').remove();
        }
    }

    //Type and Cross Alert
    var typeAlert = localStorage.getItem("Type and Cross Alert");

    if(ajaxData.type_cross == 'true'){
        if(typeAlert == "not thrown"){
            localStorage.setItem("Type and Cross Alert", "thrown");
            $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='type-cross-alert'>\n" +
            "                  <strong>Consider Type and Cross</strong>\n" +
            "                   <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Type and Cross Alert\", \"dismissed\"))'" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
        }
    }

    else{
        if(typeAlert == "thrown"){
            localStorage.setItem("Type and Cross Alert", "dismissed");
            $('#type-cross-alert').remove();
        }

        else if(typeAlert == "not thrown"){
             localStorage.setItem("Type and Cross Alert", "dismissed");
        }
    }
}

/**
function checkETCO2(){
    var noEtco2Alert = localStorage.getItem("Record ETCO2 Alert");
    var currAlert = localStorage.getItem("Current ETCO2 alert thrown");
    //var etco2 = localStorage.getItem("ETCO2");
    var ettAlert  = localStorage.getItem("ETT ETCO2 Alert");

    jsonObj = {"noEtco2Alert":noEtco2Alert};
    checkAjaxWithData('','no-etco2-alert','Record ETCO2 Alert','/getNoETCO2Alert/', jsonObj);

    var timeElapsed = parseInt(localStorage.getItem('total_seconds_summary'), 10);

    jsonObj = {"noETTAlert":ettAlert,"timeElapsed":timeElapsed};
    checkAjaxWithData('','ETT-etco2-alert','ETT ETCO2 Alert','/getNoETTAlert/', jsonObj);

    jsonObj = {"timeElapsed":timeElapsed, "noEtco2Alert":noEtco2Alert};

    $.ajax(
    {
        type:"GET",
        url: '/getETCO2/',
        data: jsonObj,

        success: function( data )
        {
            var currAlert = localStorage.getItem("Current ETCO2 alert thrown");

            localStorage.setItem("Record ETCO2 Alert", "dismissed");
            if(data === "not present" && currAlert !== "not present"){
                $('#etco2-value-alert').remove();
                localStorage.setItem("Current ETCO2 alert thrown", "not present");
                $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>Check Airway Placement! </strong>\n" +
                    "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }

            else if(data === "<25" && currAlert !== "<25"){
                $('#etco2-value-alert').remove();
                localStorage.setItem("Current ETCO2 alert thrown", "<25");
                $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>ETCO<sub>2</sub> is very low! Confirm pulse and Airway</strong>\n" +
                    "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }

            else if(data === "25-30" && currAlert !== "25-30"){
                $('#etco2-value-alert').remove();
                localStorage.setItem("Current ETCO2 alert thrown", "25-30");
                $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>Decrease Ventilation Rate</strong>\n" +
                    "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }

            else if(data === "40-50" && currAlert !== "40-50"){
                $('#etco2-value-alert').remove();
                var gcs = localStorage.getItem("GCS<13");
                if(gcs === "true"){
                    localStorage.setItem("Current ETCO2 alert thrown", "40-50");
                    $('#alert_placeholder').append(
                        "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                        "                  <strong>GCS < 13:</strong>\n" +
                        "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                        "                    <span aria-hidden=\"true\">&times;</span>\n" +
                        "                  </button>\n" +
                        "                </div>");
                }


            }
            else if(data === "40-50" && currAlert === "40-50"){
                var gcs = localStorage.getItem("GCS<13");
                if(gcs === "false"){
                  localStorage.setItem("Current ETCO2 alert thrown", "not present");
                  $('#etco2-value-alert').remove();
                }
            }

            else if(data === ">50" && currAlert !== ">50"){
                $('#etco2-value-alert').remove();
                localStorage.setItem("Current ETCO2 alert thrown", ">50");
                $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>Increase Ventilation Rate</strong>\n" +
                    "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }

            else if (data === "30-35" || data === "35-40"){
                $('#etco2-value-alert').remove();
            } 
            //If two minutes has passed and the user has not recorded etco2, we throw an alert.
            else if(data === "timer"){
                localStorage.setItem("Record ETCO2 Alert", "thrown");
                $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='no-etco2-alert'>\n" +
                    "                  <strong>No ETCO<sub>2</sub> measured!</strong>\n" +
                    "                  <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Record ETCO2 Alert\", \"dismissed\")'" +
                    "                               data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }
        }
     });
}

function checkGCS(){
    var motor = localStorage.getItem("GCS Motor");
    var verbal = localStorage.getItem("GCS Verbal");
    var eye = localStorage.getItem("GCS Eye");

    var alert = localStorage.getItem("ETT GCS Alert");

    if (motor !== "null" && verbal !== "null" && eye !== "null"){
        var m = parseInt(motor, 10);
        var v = parseInt(verbal, 10);
        var e = parseInt(eye, 10);

        var gcs = m + v + e;
        localStorage.setItem("GCS", gcs.toString(10));
        console.log(gcs);
        if (gcs < 13){
            localStorage.setItem("GCS<13", "true");
        } else {
            localStorage.setItem("GCS<13", "false");
        }

        if(alert === "thrown"){
            localStorage.setItem("ETT GCS Alert", "dismissed");
            $('#ETT-gcs-alert').remove();
        }
    }
}


function checkETTAlerts() {
    checkAjax('Confirm End Tidal CO<sub>2</sub>', 'ETT-etco2-alert', 'ETT ETCO2 Alert', '/getETTCO2/');
    checkAjax('Determine GCS before Giving Intubation Meds!', 'ETT-gcs-alert', 'ETT GCS Alert', '/getETTGCS/');
}

function checkTransfusionAlerts() {
    checkAjax('Consider Transfusion!', 'tprbc-alert', 'Transfusion PRBC Alert', '/getTransfusionPRBC/');
    checkAjax('Consider Activating MTP!', 'mtp-alert', 'Massive Transfusion Protocol Alert', '/getTransfusionMTP/');
}

function checkPerfusion(){
    checkAjax('Patient has poor perfusion', 'poor-perfusion-alert', "Poor Perfusion", "/getPerfusion/");
}

function checkTypeAndCross(){
    checkAjax('Consider Type and Cross', 'type-and-cross-alert', "Type and Cross Alert", "/getTypeAndCross/");
}

function checkBreathingRight(){
    checkAjax('Check ETT depth; consider right chest tube.', 'right-breathing-alert', "Right Breathing Alert", "/getBreathingRight/");
}

function checkBreathingLeft(){
    checkAjax('Check ETT depth; consider left chest tube.', 'left-breathing-alert', "Left Breathing Alert", "/getBreathingLeft/");
}

function checkAjax(alertString, alertId, alertItem, urlString){
        $.ajax(
    {
        type:"GET",
        url: urlString,

        success: function( data )
        {
            var currAlert = localStorage.getItem(alertItem);
            console.log(data);
            if((data === 'Alert') && (currAlert !== 'thrown')){
               $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='" + alertId + "'>\n" +
                "                  <strong>" + alertString + "</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
               localStorage.setItem(alertItem, "thrown");
            }

            else if(data === 'Remove'){
                if(currAlert === "thrown"){
                    localStorage.setItem(alertItem, "dismissed");
                    $("#" + alertId).remove();
                }
            }
        }
     });
}

function checkAjaxWithData(alertString, alertId, alertItem, urlString, dataForAjax){
        $.ajax(
    {
        type:"GET",
        url: urlString,
        data: dataForAjax,

        success: function( data )
        {
            var currAlert = localStorage.getItem(alertItem);
            console.log(data);
            if((data === 'Alert') && (currAlert !== 'thrown')){
               $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='" + alertId + "'>\n" +
                "                  <strong>" + alertString + "</strong>\n" +
                "                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
               localStorage.setItem(alertItem, "thrown");
            }

            else if(data === 'Remove'){
                if(currAlert === "thrown"){
                    localStorage.setItem(alertItem, "dismissed");
                    $("#" + alertId).remove();
                }
            }
        }
     });
}*/