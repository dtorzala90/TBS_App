
$.ajax(
    {
        type:"GET",
        url: "/getData/",
        success: function( data )
        {
            parseHistory(data);
        }

    })

function parseHistory(data){
    var etco2 = data.ETCO2_History;
    var etco2Div = document.getElementById('etco2Hist');

    for(var key in etco2){
        etco2Div.innerHTML += '<p>' + key + " at " + etco2[key] + '</p>'
    }


    var hr = data.HR_History;
    var hrDiv = document.getElementById('hrHist');

    for(var key in hr){
        hrDiv.innerHTML += '<p>' + key + " at " + hr[key] + '</p>'
    }

    var bp = data.BP_History;
    var bpDiv = document.getElementById('bpHist');

    for(var key in bp){
        bpDiv.innerHTML += '<p>' + key + " at " + bp[key] + '</p>'
    }

    var shock = data.Shock_History;
    var shockDiv = document.getElementById('shockHist');

    for(var key in shock){
        shockDiv.innerHTML += '<p>' + key + " at " + shock[key] + '</p>'
    }

    var gcs = data.GCS_History;
    var gcsDiv = document.getElementById('gcsHist');

    for(var key in gcs){
        gcsDiv.innerHTML += '<p>' + key + " at " + gcs[key] + '</p>'
    }

    var gcsVerbal = data.GCS_Verbal_History;
    var verbalDiv = document.getElementById('gcsVerbalHist');

    for(var key in gcsVerbal){
        verbalDiv.innerHTML += '<p>' + key + " at " + gcsVerbal[key] + '</p>'
    }

    var gcsMotor = data.GCS_Motor_History;
    var motorDiv = document.getElementById('gcsMotorHist');

    for(var key in gcsMotor){
        motorDiv.innerHTML += '<p>' + key + " at " + gcsMotor[key] + '</p>'
    }

    var gcsEye = data.GCS_Eye_History;
    var eyeDiv = document.getElementById('gcsEyeHist');

    for(var key in gcsEye){
        eyeDiv.innerHTML += '<p>' + key + " at " + gcsEye[key] + '</p>'
    }

    var rightPupil = data.Pupil_Right_History;
    var rightPupilDiv = document.getElementById('rightPupilHist');

    for(var key in rightPupil){
        rightPupilDiv.innerHTML += '<p>' + key + " at " + rightPupil[key] + '</p>'
    }

    var leftPupil = data.Pupil_Left_History;
    var leftPupilDiv = document.getElementById('leftPupilHist');

    for(var key in leftPupil){
        leftPupilDiv.innerHTML += '<p>' + key + " at " + leftPupil[key] + '</p>'
    }
}