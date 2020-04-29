
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

    var oxInit = oxSuppl.initiated;
    for(var i = 0; i < oxInit.length; i++){
        oxSupplDiv.innerHTML += '<p> Initiated at ' + oxInit[i] + '</p><br>';
    }

    var oxStop = oxSuppl.Stopped;
    for(var i = 0; i < oxStop.length; i++){
        oxSupplDiv.innerHTML += '<p> Stopped at ' + oxStop[i] + '</p><br>';
    }

    //Bag Mask
    var bagMask = data.Bag_Mask_History;
    var bagDiv = document.getElementById('bagMaskHist');

    var bagInit = bagMask.initiated;
    for(var i = 0; i < bagInit.length; i++){
        bagDiv.innerHTML += '<p> Initiated at ' + bagInit[i] + '</p><br>';
    }

    var bagStop = bagMask.Stopped;
    for(var i = 0; i < bagStop.length; i++){
        bagDiv.innerHTML += '<p> Stopped at ' + bagStop[i] + '</p><br>';
    }

    //LMA
    var lma = data.LMA_History;
    var lmaDiv = document.getElementById('lmaHist');

    var lmaInit = lma.initiated;
    for(var i = 0; i < lmaInit.length; i++){
        lmaDiv.innerHTML += '<p> Initiated at ' + lmaInit[i] + '</p><br>';
    }

    var lmaAcheive = lma.achieved;
    for(var i = 0; i < lmaAcheive.length; i++){
        lmaDiv.innerHTML += '<p> Achieved at ' + lmaAcheive[i] + '</p><br>';
    }

    var lmaRemoved = lma.removed;
    for(var i = 0; i < lmaRemoved.length; i++){
        lmaDiv.innerHTML += '<p> Removed at ' + lmaRemoved[i] + '</p><br>';
    }

    //ETT
    var ett = data.ETT_History;
    var ettDiv = document.getElementById('ettHist');

    var ettInit = ett.initiated;
    for(var i = 0; i < ettInit.length; i++){
        ettDiv.innerHTML += '<p> Initiated at ' + ettInit[i] + '</p><br>';
    }

    var ettAcheive = ett.achieved;
    for(var i = 0; i < ettAcheive.length; i++){
        ettDiv.innerHTML += '<p> Achieved at ' + ettAcheive[i] + '</p><br>';
    }

    var ettRemoved = ett.removed;
    for(var i = 0; i < etttRemoved.length; i++){
        ettDiv.innerHTML += '<p> Removed at ' + ettRemoved[i] + '</p><br>';
    }

    //Difficult Airway
    var diffAirway = data.Difficult_Airway_History;
    var diffAirwayDiv = document.getElementById('diffAirwayHist');

    var diffAirwayInit = diffAirway.initiated;
    for(var i = 0; i < diffAirwayInit.length; i++){
        diffAirwayDiv.innerHTML += '<p> Initiated at ' + diffAirwayInit[i] + '</p><br>';
    }

    var diffAirwayAcheive = diffAirway.achieved;
    for(var i = 0; i < diffAirwayAcheive.length; i++){
        diffAirwayDiv.innerHTML += '<p> Achieved at ' + diffAirwayAcheive[i] + '</p><br>';
    }

    var diffAirwayRemoved = diffAirway.removed;
    for(var i = 0; i < diffAirwayRemoved.length; i++){
        diffAirwayDiv.innerHTML += '<p> Removed at ' + diffAirwayRemoved[i] + '</p><br>';
    }

    //Surgical Airway
    var surgAirway = data.Surgical_Airway_History;
    var surgAirwayDiv = document.getElementById('surgAirwayhist');

    var surgAirwayInit = surgAirway.initiated;
    for(var i = 0; i < surgAirwayInit.length; i++){
        surgAirwayDiv.innerHTML += '<p> Initiated at ' + surgAirwayInit[i] + '</p><br>';
    }

    var surgAirwayAcheive = surgAirway.achieved;
    for(var i = 0; i < surgAirwayAcheive.length; i++){
        surgAirwayDiv.innerHTML += '<p> Achieved at ' + surgAirwayAcheive[i] + '</p><br>';
    }

    var surgAirwayRemoved = surgAirway.removed;
    for(var i = 0; i < surgAirwayRemoved.length; i++){
        surgAirwayDiv.innerHTML += '<p> Removed at ' + surgAirwayRemoved[i] + '</p><br>';
    }


    /**Breathing Data Collected**/

    //Spontaneous Breathing
    var spontBreath = data.Spontaneous_Breathing_History;
    var spontBreathDiv = document.getElementById('spontBreathHist');

    var spontBreathYes = spontBreath.yes;
    for(var i = 0; i < spontBreathYes.length; i++){
        spontBreathDiv.innerHTML += '<p> Spontaneous Breathing Observed At ' + spontBreathYes[i] + '</p><br>';
    }

    var spontBreathNo = spontBreath.no;
    for(var i = 0; i < spontBreathNo.length; i++){
        spontBreathDiv.innerHTML += '<p> No Spontaneous Breathing Observed At ' + spontBreathNo[i] + '</p><br>';
    }

    //Assisted Breathing
    var assistBreath = data.Assisted_Breathing_History;
    var assistBreathDiv = document.getElementById('assistBreathHist');

    var assistBreathYes = assistBreath.yes;
    for(var i = 0; i < assistBreathYes.length; i++){
        assistBreathDiv.innerHTML += '<p> Assisted Breathing Needed At ' + spontBreathYes[i] + '</p><br>';
    }

    var assistBreathNo = assistBreath.no;
    for(var i = 0; i < assistBreathNo.length; i++){
        assistBreathDiv.innerHTML += '<p> No Assisted Breathing Needed At ' + spontBreathNo[i] + '</p><br>';
    }

    //Right Chest Sounds
    var rightChest = data.Right_Chest_History;
    var rightChestDiv = document.getElementById('rightChestHist');

    var rightChestYes = rightChest.yes;
    for(var i = 0; i < rightChestYes.length; i++){
        rightChestDiv.innerHTML += '<p> Right Side Chest Sounds Observed At ' + rightChestYes[i] + '</p><br>';
    }

    var rightChestNo = rightChest.no;
    for(var i = 0; i < rightChestNo.length; i++){
        rightChestDiv.innerHTML += '<p> No Right Side Chest Sounds Observed At  ' + rightChestNo[i] + '</p><br>';
    }

    //Left Chest Sounds
    var leftChest = data.Left_Chest_History;
    var leftChestDiv = document.getElementById('leftChestHist');

    var leftChestYes = leftChest.yes;
    for(var i = 0; i < leftChestYes.length; i++){
        leftChestDiv.innerHTML += '<p> Left Side Chest Sounds Observed At ' + leftChestYes[i] + '</p><br>';
    }

    var leftChestNo = leftChest.no;
    for(var i = 0; i < leftChestNo.length; i++){
        leftChestDiv.innerHTML += '<p> No Left Side Chest Sounds Observed At  ' + leftChestNo[i] + '</p><br>';
    }

    //ETC02
    var etco2 = Object.keys(data.ETCO2_History);
    var etco2Div = document.getElementById('etco2Hist');

    for(var i = 0; i < etco2.length; i++){
        if(Array.isArray(etco2[i])){
            for(var j = 0; j < etco2.length; j++){
                etco2Div.innerHTML += '<p>' + etco2[i] + " at " + etco2[i][j] + '</p><br>'
            }
        }

        else{
            etco2Div.innerHTML += '<p>' +  etco2 + " at " + etco2[i] + '</p><br>'
        }
    }

    /**Circulation Data Collected**/
    //Lip Color
    var lipColor = data.Lip_Color_History;
    var lipDiv = document.getElementById('lipHist');

    var lipUnk = lipColor.unknown;
    for(var i = 0; i < lipUnk.length; i++){
        lipDiv.innerHTML += '<p> Unable To Assess Lip Color At  ' + lipUnk[i] + '</p><br>';
    }

    var lipPink = lipColor.pink;
    for(var i = 0; i < lipPink.length; i++){
        lipDiv.innerHTML += '<p> Lip Color Pink At  ' + lipPink[i] + '</p><br>';
    }

    var lipWhite = lipColor.white;
    for(var i = 0; i < lipWhite.length; i++){
        lipDiv.innerHTML += '<p> Lip Color White At  ' + lipWhite[i] + '</p><br>';
    }

    //Nail Color
    var nailColor = data.Nail_Color_History;
    var nailDiv = document.getElementById('nailHist');

    var nailUnk = nailColor.unknown;
    for(var i = 0; i < nailUnk.length; i++){
        nailDiv.innerHTML += '<p> Unable To Assess Nail Color At  ' + nailUnk[i] + '</p><br>';
    }

    var nailPink = nailColor.pink;
    for(var i = 0; i < nailPink.length; i++){
        nailDiv.innerHTML += '<p> Nail Color Pink At  ' + nailPink[i] + '</p><br>';
    }

    var nailWhite = nailColor.white;
    for(var i = 0; i < nailWhite.length; i++){
        nailDiv.innerHTML += '<p> Nail Color White At  ' + nailWhite[i] + '</p><br>';
    }

    //Cappilary Refill
    var capRefill = data.Cap_Refill_History;
    var capDiv = document.getElementById('capHist');

    var capLessTwo = capRefill.lesstwo;
    for(var i = 0; i < capLessTwo.length; i++){
        capDiv.innerHTML += '<p> Capillary Refill Less Than 2 Seconds At  ' + capLessTwo[i] + '</p><br>';
    }

    var capTwoAndFour = capRefill.twoandfour;
    for(var i = 0; i < capTwoAndFour.length; i++){
        capDiv.innerHTML += '<p> Capillary Refill Between 2 and 4 Seconds At  ' + capTwoAndFour[i] + '</p><br>';
    }

    var capFourPlus = capRefill.fourplus;
    for(var i = 0; i < capFourPlus.length; i++){
        capDiv.innerHTML += '<p> Capillary Refill Greater Than 4 Seconds At   ' + capFourPlus[i] + '</p><br>';
    }

    //PIV Count
    var piv = data.PIV_History;
    var pivDiv = document.getElementById('pivHist');

    var piv0 = piv.zero;
    for(var i = 0; i < piv0.length; i++){
        pivDiv.innerHTML += '<p> 0 PIV Established At  ' + piv0[i] + '</p><br>';
    }

    var piv1 = piv.one;
    for(var i = 0; i < piv1.length; i++){
        pivDiv.innerHTML += '<p> 1 PIV Established At  ' + piv1[i] + '</p><br>';
    }

    var piv2 = piv.two;
    for(var i = 0; i < piv2.length; i++){
        pivDiv.innerHTML += '<p> 2 PIV Established At  ' + piv2[i] + '</p><br>';
    }

    var piv2plus = piv.twoplus;
    for(var i = 0; i < piv2plus.length; i++){
        pivDiv.innerHTML += '<p> 3 or more PIV Established At  ' + piv2plus[i] + '</p><br>';
    }

    //Central Line
    var centrLine = data.Central_Line_History;
    var centrLineDiv = document.getElementById('clHist');

    var centrLineYes = centrLine.yes;
    for(var i = 0; i < centrLineYes.length; i++){
        centrLineDiv.innerHTML += '<p> Central Line Established At ' + centrLineYes[i] + '</p><br>';
    }

    var centrLineNo = centrLine.no;
    for(var i = 0; i < centrLineNo.length; i++){
        centrLineDiv.innerHTML += '<p> No Central Line Established At ' + centrLineNo[i] + '</p><br>';
    }

    //Intraosseous Line
    var ioLine = data.Intraosseous_Line_History;
    var ioLineDiv = document.getElementById('ioHist');

    var ioLineYes = ioLine.yes;
    for(var i = 0; i < ioLineYes.length; i++){
        ioLineDiv.innerHTML += '<p> Intraosseous Line Established At ' + ioLineYes[i] + '</p><br>';
    }

    var ioLineNo = ioLine.no;
    for(var i = 0; i < ioLineNo.length; i++){
        ioLineDiv.innerHTML += '<p> No Intraosseous Line Established At ' + ioLineNo[i] + '</p><br>';
    }

    //Type And Cross
    var type = data.Type_Cross_History;
    var typeDiv = document.getElementById('typeHist');

    var typeDrawn = type.drawn;
    if(typeDrawn !== ' '){
        typeDiv.innerHTML += '<p> Type and Cross Drawn At ' + typeDrawn + '</p><br>';
    }

    var typeSent = type.no;
    if(typeSent !== ' '){
        typeDiv.innerHTML += '<p> Type and Cross Sent At ' + typeDrawn + '</p><br>';
    }

    else{
        typeDiv.innerHTML += '<p> Type and Cross Never Sent </p> <br>';
    }

    //PRBC
    var prbc = data.Transfused_PRBC_History;
    var prbcDiv = document.getElementById('prbcHist');

    var prbcYes = prbc.yes;
    for(var i = 0; i < prbcYes.length; i++){
        prbcDiv.innerHTML += '<p> PRBC Transfused At ' + prbcYes[i] + '</p><br>';
    }

    var prbcNo = prbc.no;
    for(var i = 0; i < prbcNo.length; i++){
        prbcDiv.innerHTML += '<p> PRBC Transfusion Not Needed At ' + prbcNo[i] + '</p><br>';
    }

    //MTP
    var mtp = data.Massive_Transfusion_History;
    var mtpDiv = document.getElementById('mtpHist');

    var mtpActivated = mtp.activated;
    if(mtpActivated !== ' '){
        mtpDiv.innerHTML += '<p> Massive Transfusion Protocol Activated At ' + mtpActivated + '</p><br>';
    }

    var mtpNo = mtp.no;
    if(mtpNo !== ' '){
        mtpDiv.innerHTML += '<p> Massive Transfusion Protocol Not Needed At ' + mtpNo + '</p><br>';
    }


    /**Disability Data Collected**/
    //Pupils Round
    var pupilRound = data.Pupils_Round_History;
    var roundDiv = document.getElementById('roundHist');

    var roundYes = pupilRound.yes;
    for(var i = 0; i < roundYes.length; i++){
        roundDiv.innerHTML += '<p> Pupils Round At ' + roundYes[i];
    }

    var roundNo = pupilRound.no;
    for(var i = 0; i < roundNo.length; i++){
        roundDiv.innerHTML += '<p> Pupils Not Round At ' + roundNo[i];
    }

    //Pupils Equal
    var pupilEqual = data.Pupils_Equal_History;
    var equalDiv = document.getElementById('equalHist');

    var equalYes = pupilEqual.yes;
    for(var i = 0; i < equalYes.length; i++){
        equalDiv.innerHTML += '<p> Pupils Equal At ' + equalYes[i];
    }

    var equalNo = pupilEqual.no;
    for(var i = 0; i < equalNo.length; i++){
        equalDiv.innerHTML += '<p> Pupils Not Equal At ' + equalNo[i];
    }

    //Pupils Reactive
    var pupilReact = data.Pupils_Reactive_History;
    var reactDiv = document.getElementById('reactiveHist');

    var reactYes = pupilReact.yes;
    for(var i = 0; i < reactYes.length; i++){
        reactDiv.innerHTML += '<p> Pupils Reactive At ' + reactYes[i];
    }

    var reactNo = pupilReact.no;
    for(var i = 0; i < reactNo.length; i++){
        reactDiv.innerHTML += '<p> Pupils Not Reactive At ' + reactNo[i];
    }

    //Moves Extremeties
    var movesExtremeties = data.Moves_Extremities_History;
    var movesDiv = document.getElementById('movesHist');

    var movesYes = movesExtremeties.yes;

    var movesInjury = movesExtremeties.limited;

    var movesNo = movesExtremeties.no

    //IVF
    /**var ivf = Object.keys(data.IVF_History);
    var ivfDiv = document.getElementById('ivfHist');

    for(var i = 0; i < ivf.length; i++){
        if(Array.isArray(ivf[i])){
            for(var j = 0; j < etco2.length; j++){
                ivfDiv.innerHTML += '<p>' + ivf[i] + " at " + ivf[i][j] + '</p>'
            }
        }

        else{
            ivfDiv.innerHTML += '<p>' +  ivf + " at " + ivf[i] + '</p>'
        }
    }
    /**var hr = Object.keys(data.HR_History);
    var hrDiv = document.getElementById('hrHist');

    for(var i = 0; i < hr.length; i++){
        if(Array.isArray(hr[i])){
            for(var j = 0; j < key.length; j++){
                hrDiv.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            hrDiv.innerHTML += '<p>' + key + " at " + hr[key] + '</p>'
        }
    }

    var bp = data.BP_History;
    var bpDiv = document.getElementById('bpHist');

    for(var i = 0; i < bp.length; i++){
        if(Array.isArray(bp[i])){
            for(var j = 0; j < key.length; j++){
                bpDiv.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            bpDiv.innerHTML += '<p>' + key + " at " + bp[key] + '</p>'
        }
    }

    var shock = data.Shock_History;
    var shockDiv = document.getElementById('shockHist');

    for(var i = 0; i < shock.length; i++){
        if(Array.isArray(shock[i])){
            for(var j = 0; j < key.length; j++){
                shockDiv.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            shockDiv.innerHTML += '<p>' + key + " at " + shock[key] + '</p>'
        }
    }

    var gcs = data.GCS_History;
    var gcsDiv = document.getElementById('gcsHist');

    for(var i = 0; i < gcs.length; i++){
        if(Array.isArray(gcs[i])){
            for(var j = 0; j < key.length; j++){
                gcsDiv.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            gcsDiv.innerHTML += '<p>' + key + " at " + gcs[key] + '</p>'
        }
    }

    var gcsVerbal = data.GCS_Verbal_History;
    var verbalDiv = document.getElementById('gcsVerbalHist');

    for(var i = 0; i < gcsVerbal.length; i++){
        if(Array.isArray(gcsVerbal[i])){
            for(var j = 0; j < key.length; j++){
                verbalDiv.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            verbalDiv.innerHTML += '<p>' + key + " at " + gcsVerbal[key] + '</p>'
        }
    }

    var gcsMotor = data.GCS_Motor_History;
    var motorDiv = document.getElementById('gcsMotorHist');

    for(var i = 0; i < gcsMotor.length; i++){
        if(Array.isArray(gcsMotor[i])){
            for(var j = 0; j < key.length; j++){
                motorDiv.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            motorDiv.innerHTML += '<p>' + key + " at " + gcsMotor[key] + '</p>'
        }
    }

    var gcsEye = data.GCS_Eye_History;
    var eyeDiv = document.getElementById('gcsEyeHist');

    for(var i = 0; i < gcsEye.length; i++){
        if(Array.isArray(gcsEye[i])){
            for(var j = 0; j < key.length; j++){
                eyeDiv.innerHTML += '<p>' + key + " at " + key[i] + '</p>'
            }
        }

        else{
            eyeDiv.innerHTML += '<p>' + key + " at " + gcsEye[key] + '</p>'
        }
    }

    var rightPupil = data.Pupil_Right_History;
    var rightPupilDiv = document.getElementById('rightPupilHist');

    for(var i = 0; i < rightPupil.length; i++){
        if(Array.isArray(rightPupil[i])){
            for(var j = 0; j < key.length; j++){
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