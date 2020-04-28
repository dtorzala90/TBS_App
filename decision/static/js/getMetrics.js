
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
    /**Airway Data Collected**/

    //Oxygen Supplementation
    var oxSuppl = data.Oxygen_Supplementation_History;
    var oxSupplDiv = document.getElementById('oxSuppHist');

    var oxInit = oxSuppl.Initiated;
    for(var i = 0; i < oxInit.length; i++){
        oxSupplDiv.innerHTML += '<p> Initiated at ' + oxInit[i];
    }

    var oxStop = oxSuppl.Stopped;
    for(var i = 0; i < oxStop.length; i++){
        oxSupplDiv.innerHTML += '<p> Stopped at ' + oxStop[i];
    }

    //Bag Mask
    var bagMask = data.Bag_Mask_History;
    var bagDiv = document.getElementById('bagMaskHist');

    var bagInit = bagMask.Initiated;
    for(var i = 0; i < bagInit.length; i++){
        bagDiv.innerHTML += '<p> Initiated at ' + bagInit[i];
    }

    var bagStop = bagMask.Stopped;
    for(var i = 0; i < bagStop.length; i++){
        bagDiv.innerHTML += '<p> Stopped at ' + bagStop[i];
    }

    //LMA
    var lma = data.LMA_History;
    var lmaDiv = document.getElementById('lmaHist');

    var lmaInit = lma.Initiated;
    for(var i = 0; i < lmaInit.length; i++){
        lmaDiv.innerHTML += '<p> Initiated at ' + lmaInit[i];
    }

    var lmaAcheive = lma.Achieved;
    for(var i = 0; i < lmaAcheive.length; i++){
        lmaDiv.innerHTML += '<p> Achieved at ' + lmaAcheive[i];
    }

    var lmaRemoved = lma.Removed;
    for(var i = 0; i < lmaRemoved.length; i++){
        lmaDiv.innerHTML += '<p> Removed at ' + lmaRemoved[i];
    }

    //ETT
    var ett = data.ETT_History;
    var ettDiv = document.getElementById('ettHist');

    var ettInit = ett.Initiated;
    for(var i = 0; i < ettInit.length; i++){
        ettDiv.innerHTML += '<p> Initiated at ' + ettInit[i];
    }

    var ettAcheive = ett.Achieved;
    for(var i = 0; i < ettAcheive.length; i++){
        ettDiv.innerHTML += '<p> Achieved at ' + ettAcheive[i];
    }

    var ettRemoved = ett.Removed;
    for(var i = 0; i < etttRemoved.length; i++){
        ettDiv.innerHTML += '<p> Removed at ' + ettRemoved[i];
    }

    //Difficult Airway
    var diffAirway = data.Difficult_Airway_History;
    var diffAirwayDiv = document.getElementById('diffAirwayHist');

    var diffAirwayInit = diffAirway.Initiated;
    for(var i = 0; i < diffAirwayInit.length; i++){
        diffAirwayDiv.innerHTML += '<p> Initiated at ' + diffAirwayInit[i];
    }

    var diffAirwayAcheive = diffAirway.Achieved;
    for(var i = 0; i < diffAirwayAcheive.length; i++){
        diffAirwayDiv.innerHTML += '<p> Achieved at ' + diffAirwayAcheive[i];
    }

    var diffAirwayRemoved = diffAirway.Removed;
    for(var i = 0; i < diffAirwayRemoved.length; i++){
        diffAirwayDiv.innerHTML += '<p> Removed at ' + diffAirwayRemoved[i];
    }

    //Surgical Airway
    var surgAirway = data.Surgical_Airway_History;
    var surgAirwayDiv = document.getElementById('surgAirwayhist');

    var surgAirwayInit = surgAirway.Initiated;
    for(var i = 0; i < surgAirwayInit.length; i++){
        surgAirwayDiv.innerHTML += '<p> Initiated at ' + surgAirwayInit[i];
    }

    var surgAirwayAcheive = surgAirway.Achieved;
    for(var i = 0; i < surgAirwayAcheive.length; i++){
        surgAirwayDiv.innerHTML += '<p> Achieved at ' + surgAirwayAcheive[i];
    }

    var surgAirwayRemoved = surgAirway.Removed;
    for(var i = 0; i < surgAirwayRemoved.length; i++){
        surgAirwayDiv.innerHTML += '<p> Removed at ' + surgAirwayRemoved[i];
    }


    /**Breathing Data Collected**/

    //ETC02
    var etco2 = Object.keys(data.ETCO2_History);
    var etco2Div = document.getElementById('etco2Hist');

    for(var i = 0; i < etco2.length; i++){
        if(Array.isArray(etco2[i])){
            for(var j = 0; j < key.length; j++){
                etco2Div.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            etco2Div.innerHTML += '<p>' + key + " at " + etco2[key] + '</p>'
        }
    }


    /**var hr = data.HR_History;
    var hrDiv = document.getElementById('hrHist');

    for(var key in hr){
        if(Array.isArray(key)){
            for(i = 0; i < key.length; i++){
                hrDiv.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            hrDiv.innerHTML += '<p>' + key + " at " + hr[key] + '</p>'
        }
    }

    var bp = data.BP_History;
    var bpDiv = document.getElementById('bpHist');

    for(var key in bp){
        if(Array.isArray(key)){
            for(i = 0; i < key.length; i++){
                bpDiv.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            bpDiv.innerHTML += '<p>' + key + " at " + bp[key] + '</p>'
        }
    }

    var shock = data.Shock_History;
    var shockDiv = document.getElementById('shockHist');

    for(var key in shock){
        if(Array.isArray(key)){
            for(i = 0; i < key.length; i++){
                shockDiv.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            shockDiv.innerHTML += '<p>' + key + " at " + shock[key] + '</p>'
        }
    }

    var gcs = data.GCS_History;
    var gcsDiv = document.getElementById('gcsHist');

    for(var key in gcs){
        if(Array.isArray(key)){
            for(i = 0; i < key.length; i++){
                gcsDiv.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            gcsDiv.innerHTML += '<p>' + key + " at " + gcs[key] + '</p>'
        }
    }

    var gcsVerbal = data.GCS_Verbal_History;
    var verbalDiv = document.getElementById('gcsVerbalHist');

    for(var key in gcsVerbal){
        if(Array.isArray(key)){
            for(i = 0; i < key.length; i++){
                verbalDiv.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            verbalDiv.innerHTML += '<p>' + key + " at " + gcsVerbal[key] + '</p>'
        }
    }

    var gcsMotor = data.GCS_Motor_History;
    var motorDiv = document.getElementById('gcsMotorHist');

    for(var key in gcsMotor){
        if(Array.isArray(key)){
            for(i = 0; i < key.length; i++){
                motorDiv.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            motorDiv.innerHTML += '<p>' + key + " at " + gcsMotor[key] + '</p>'
        }
    }

    var gcsEye = data.GCS_Eye_History;
    var eyeDiv = document.getElementById('gcsEyeHist');

    for(var key in gcsEye){
        if(Array.isArray(key)){
            for(i = 0; i < key.length; i++){
                eyeDiv.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            eyeDiv.innerHTML += '<p>' + key + " at " + gcsEye[key] + '</p>'
        }
    }

    var rightPupil = data.Pupil_Right_History;
    var rightPupilDiv = document.getElementById('rightPupilHist');

    for(var key in rightPupil){
        if(Array.isArray(key)){
            for(i = 0; i < key.length; i++){
                rightPupilDiv.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            rightPupilDiv.innerHTML += '<p>' + key + " at " + rightPupil[key] + '</p>'
        }
    }

    var leftPupil = data.Pupil_Left_History;
    var leftPupilDiv = document.getElementById('leftPupilHist');

    for(var key in leftPupil){
        if(Array.isArray(key)){
            for(i = 0; i < key.length; i++){
                leftPupilDiv.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            leftPupilDiv.innerHTML += '<p>' + key + " at " + leftPupil[key] + '</p>'
        }
    }**/
}