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
    var noEtco2Alert = localStorage.getItem('Record ETCO2 Alert');
    var noIvAlert = localStorage.getItem('Alert No IV');

    if(noEtco2Alert === "not thrown"){
        if(ajaxData.no_etco2_recorded === "true"){
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

    else if(noEtco2Alert === "thrown"){
        if(ajaxData.no_etco2_recorded === "false"){
           localStorage.setItem("Record ETCO2 Alert", "dismissed");
           $('#no-etco2-alert').remove();
        }
    }

    if(noIvAlert === "not thrown"){
        if(ajaxData.no_iv === 'true'){
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

    else if(noIvAlert === "thrown"){
        if(ajaxData.no_iv === 'false'){
            localStorage.setItem('Alert No IV', "dismissed");
            $('#no-iv-alert').remove();
        }
    }


    //Intubation Alerts
    var ettEtco2Alert = localStorage.getItem("ETT ETCO2 Alert");
    var ettGcsAlert = localStorage.getItem("ETT GCS Alert");

    if(ettGcsAlert ==='not thrown'){
        if(ajaxData.ett_before_gcs === 'true'){
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
        if(ajaxData.ett_before_gcs === 'false'){
             localStorage.setItem("ETT GCS Alert", "dismissed");
        }
    }

    else if(ettGcsAlert === 'thrown'){
        if(ajaxData.ett_before_gcs === 'false'){
             localStorage.setItem("ETT GCS Alert", "dismissed");
             $('#ett-gcs-alert').remove();
        }
    }

    if(ettEtco2Alert === 'not thrown'){
        if(ajaxData.ett_no_etco2 === 'true'){
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
        if(ajaxData.ett_no_etco2 === 'false'){
             localStorage.setItem("ETT ETCO2 Alert", "dismissed");
        }
    }

    else if(ettEtco2Alert === 'thrown'){
        if(ajaxData.ett_no_etco2 === 'false'){
             localStorage.setItem("ETT ETCO2 Alert", "dismissed");
             $('#ett-etco2-alert').remove();
        }
    }

    //Chest Sound Alerts
    var rightAlert = localStorage.getItem("Right Breathing Alert");
    var leftAlert = localStorage.getItem("Left Breathing Alert");

    if(rightAlert === "not thrown"){
        if(ajaxData.right_chest === 'true'){
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

        else if(ajaxData.right_chest === 'false'){
             localStorage.setItem("Right Breathing Alert", "dismissed");
        }
    }

    else if(rightAlert === "thrown"){
        if(ajaxData.right_chest === 'false'){
            localStorage.setItem("Right Breathing Alert", "thrown");
            $('#right-chest-alert').remove();
        }
    }

    if(leftAlert === "not thrown"){
        if(ajaxData.left_chest === 'true'){
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

        else if(ajaxData.left_chest === 'false'){
             localStorage.setItem("Left Breathing Alert", "dismissed");
        }
    }

    else if(leftAlert === "thrown"){
        if(ajaxData.left_chest === 'false'){
            localStorage.setItem("Left Breathing Alert", "thrown");
            $('#left-chest-alert').remove();
        }
    }

    //ETCO2 Alerts
    var etco2ValAlert = localStorage.getItem("ETCO2 Value Alert");
    if(ajaxData.etco2_value !== 'null'){

        if(ajaxData.etco2_value === 'no measurement') {
            localStorage.setItem("ETCO2 Value Alert", "No Measurement");
            if(etco2ValAlert !== 'null') {
                $('#etco2-value-alert').text('Check Airway Placement');
            }

            else{
                 $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>Check Airway Placement!</strong>\n" +
                        "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }
        }

        else if(ajaxData.etco2_value === '<25') {
            localStorage.setItem("ETCO2 Value Alert", "<25");
            if(etco2ValAlert !== 'null'){
                $('#etco2-value-alert').text('ETCO<sub>2</sub> is very low. Confirm pulse!');
            }

            else{
                 $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>ETCO<sub>2</sub> is very low. Confirm pulse!</strong>\n" +
                        "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }
        }

        else if(ajaxData.etco2_value === '25-30') {
            localStorage.setItem("ETCO2 Value Alert", "25-30");
            if(etco2ValAlert !== 'null'){
                $('#etco2-value-alert').text('Decrease Ventilation Rate!');
            }

            else{
                 $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>Decrease Ventilation Rate!</strong>\n" +
                        "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }
        }

        else if(ajaxData.etco2_value === '40-50') {
            localStorage.setItem("ETCO2 Value Alert", "40-50");
            if(etco2ValAlert !== 'null'){
                $('#etco2-value-alert').text('ETCO<sub>2</sub> and GCS lower than 13!');
            }

            else{
                 $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>ETCO<sub>2</sub> and GCS lower than 13!</strong>\n" +
                        "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }
        }

        else{
            localStorage.setItem("ETCO2 Value Alert", ">50");
            if(etco2ValAlert !== 'null'){
                $('#etco2-value-alert').text('Increase Ventilation Rate!');
            }

            else{
                 $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='etco2-value-alert'>\n" +
                    "                  <strong>Increase Ventilation Rate!</strong>\n" +
                        "                            data-dismiss=\"alert\" aria-label=\"Close\">\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
            }

        }
    }

    else{
        if(etco2ValAlert === 'thrown'){
             localStorage.setItem("ETCO2 Value Alert", "null");
             $('#etco2-value-alert').remove();
        }
    }

    //Check vital based alerts
    var hrAlert = localStorage.getItem("HR Alert");
    var hypoAlert = localStorage.getItem("Hypotensive alert");
    var shockAlert = localStorage.getItem("Shock Alert");

    if(ajaxData.heart_rate === 'bradycardia'){
        if(hrAlert != "null"){
            $('#tachy-alert').remove();
        }

        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='brady-alert'>\n" +
            "                  <strong>Bradycardia:  Consider cause!</strong>\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
        localStorage.setItem("HR Alert", "Bradycardia");
    }

    else if(ajaxData.heart_rate === 'tachycardia'){
        if(hrAlert !== "null"){
            $('#brady-alert').remove();
        }
        $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='tachy-alert'>\n" +
            "                  <strong>TachyCardia:  Consider cause!</strong>\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
        localStorage.setItem("HR Alert", "Tachycardia");
    }

    else{
        if(hrAlert !== "Tachycardia"){
            $('#tachy-alert').remove();
        }

        else{
             $('#brady-alert').remove();
        }
    }

    if(hypoAlert === 'not thrown' || hypoAlert === 'dismissed'){
        if(ajaxData.hypotensive === 'true'){
                $('#alert_placeholder').append(
                    "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='hypo-alert'>\n" +
                    "                  <strong>Hypotensive!</strong>\n" +
                    "                    <span aria-hidden=\"true\">&times;</span>\n" +
                    "                  </button>\n" +
                    "                </div>");
                localStorage.setItem("Hypotensive Alert", "thrown");
        }
    }

    else{
        if(ajaxData.hypotensive === 'false') {
            $('#hypo-alert').remove();
            localStorage.setItem("Hypotensive Alert", "dismissed");
        }
    }

    if(shockAlert === 'not thrown' || shockAlert ==='dismissed'){
        if(ajaxData.shock_elevated === 'true'){
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='shock-alert'>\n" +
                "                  <strong>Elevated shock index!</strong>\n" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
            localStorage.setItem("Shock Alert", "thrown");
        }
    }

    else {
        if(ajaxData.shock_elevated === 'false') {
            $('#shock-alert').remove();
            localStorage.setItem("Shock Alert", "dismissed");
        }
    }


    //Check IV and IV fluid alerts
    var addlPivAlert = localStorage.getItem("Alert One PIV");
    var fluidsGivenAlert = localStorage.getItem("Alert Fluids Given")
    var excessFluidsAlert = localStorage.getItem("Alert Excess IVF")

    if(addlPivAlert === 'not thrown'){
        if(ajaxData.additional_piv === 'true'){
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

        if(ajaxData.additional_piv === 'false'){
            localStorage.setItem("Alert One PIV", "dismissed");
        }
    }

    else if(addlPivAlert === 'thrown'){
        if(ajaxData.additional_piv === 'false'){
            localStorage.setItem("Alert One PIV", "dismissed");
            $('#one-piv-alert').remove();
        }
    }

    if(fluidsGivenAlert === 'not thrown'){
        if(ajaxData.fluids_given === 'true'){
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

        else if (ajaxData.fluids_given === 'false'){
              localStorage.setItem("Alert Fluids Given", "dismissed");
        }
    }

    else if(fluidsGivenAlert === 'thrown'){
        if(ajaxData.fluids_given === 'false'){
            localStorage.setItem("Alert Fluids Given", "thrown");
            $('#fluids-given-alert').remove();
        }
    }

    if(excessFluidsAlert === 'not thrown'){
        if(ajaxData.excess_fluids === 'true'){
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

        else if(ajaxData.excess_fluids === 'false'){
             localStorage.setItem("Alert Excess IVF", "dismissed");
        }
    }

    else if(excessFluidsAlert === 'thrown'){
        if(ajaxData.excess_fluids === 'false'){
            localStorage.setItem("Alert Excess IVF", "dismissed");
            $('#excess-fluids-alert').remove();
        }
    }

    //Perfusion Alerts
    var perfusionAlert = localStorage.getItem("Poor Perfusion Alert");

    if(perfusionAlert === 'not thrown' || perfusionAlert === 'dismissed'){
        if(ajaxData.poor_perfusion === "true"){
            localStorage.setItem("Poor Perfusion Alert", "thrown");
            $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='poor-perfusion-alert'>\n" +
            "                  <strong>Patient has poor perfusion.</strong>\n" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
        }
    }

    else{
        if(ajaxData.poor_perfusion === 'false'){
            localStorage.setItem("Poor Perfusion Alert", "dismissed");
            $('#poor-perfusion-alert').remove();
        }
    }


    //Type and Cross Alert
    var typeAlert = localStorage.getItem("Type and Cross Alert");

    if(typeAlert === 'not thrown'){
        if(ajaxData.type_cross === 'true'){
             localStorage.setItem("Type and Cross Alert", "thrown");
            $('#alert_placeholder').append(
            "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='type-cross-alert'>\n" +
            "                  <strong>Consider Type and Cross</strong>\n" +
            "                   <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"Type and Cross Alert\", \"dismissed\"))'" +
            "                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                  </button>\n" +
            "                </div>");
        }

        else if(ajaxData.type_cross === 'false'){
             localStorage.setItem("Type and Cross Alert", "dismissed");
        }
    }

    else if(typeAlert === "thrown"){
        if(ajaxData.type_cross === 'false'){
             localStorage.setItem("Type and Cross Alert", "dismissed");
            $('#type-cross-alert').remove();
        }
    }

    //PRBC and MTP Alerts
    var prbcAlert = localStorage.getItem('PRBC Alert');
    var mtpAlert = localStorage.getItem('MTP Alert');

    if(prbcAlert === 'not thrown'){
        if(ajaxData.suggest_prbc === 'true'){
              localStorage.setItem("PRBC Alert", "thrown");
              $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='prbc-alert'>\n" +
                "                  <strong>Consider Transfusion of PRBC!</strong>\n" +
                "                   <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"PRBC Alert\", \"dismissed\"))'" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        }

        else if(ajaxData.suggest_prbc === 'false'){
            localStorage.setItem("PRBC Alert", "dismissed");
        }
    }

    else if(prbcAlert === 'thrown'){
        if(ajaxData.suggest_prbc === 'false'){
             localStorage.setItem("PRBC Alert", "dismissed");
             $('#prbc-alert').remove();
        }
    }

    if(mtpAlert === 'not thrown'){
        if(ajaxData.suggest_mtp === 'true'){
            localStorage.setItem("MTP Alert", "thrown");
            $('#alert_placeholder').append(
                "                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" id='mtp-alert'>\n" +
                "                  <strong>Consider Massive Transfusion Protocol!</strong>\n" +
                "                   <button type=\"button\" class=\"close\" onclick='localStorage.setItem(\"MTP Alert\", \"dismissed\"))'" +
                "                    <span aria-hidden=\"true\">&times;</span>\n" +
                "                  </button>\n" +
                "                </div>");
        }

        else if(ajaxData.suggest_mtp === 'false'){
            localStorage.setItem("MTP Alert", "dismissed");
        }
    }

    else if(mtpAlert === 'thrown'){
        if(ajaxData.suggest_mtp === 'false'){
            localStorage.setItem("MTP Alert", "dismissed");
            $('#prbc-alert').remove();
        }
    }
}
