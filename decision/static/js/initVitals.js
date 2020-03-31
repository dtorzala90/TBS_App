//Set up HR and BP text fields
var hrText = document.getElementById("hr");
var bpText = document.getElementById("bp");

hrText.oninput = recordHR;
bpText.oninput = recordBP;

function recordHR(){
    setTimeout(function(){
        var hr = parseInt(hrText.value, 10);
        updateVitals("HR", hr.toString(10));
        localStorage.setItem("HR_prev", hr.toString(10));

        var min = (parseInt(localStorage.getItem('total_seconds_main'),10))/60;
        var sec = (parseInt(localStorage.getItem('total_seconds_main'),10))%60;
        var hour = 0;
        var timeStamp;
        var hrDisplay = hr + " at ";

        if(min < 1){
            min = 0;
        }

        if(min >= 60){
            hour = min/60;
            min = min%60;
        }

        if(hour !== 0){
            timeStamp = hour.toString(10) + "hr " +  min.toString(10) + "min " + sec.toString(10) + "sec";
        }

        timeStamp = min.toString(10) + "min " + sec.toString(10) + "sec";

        updateVitals("HR_History", hrDisplay + timeStamp);
        localStorage.setItem("HR_display", hrDisplay + timeStamp);

        //Because the HR was updated we must update the Shock Index as well
        var bp = localStorage.getItem('BP_prev');
        if(bp !== "null" && hr !== null){
            var newShock = hr/(parseInt(bp,10)).toFixed(2);
            var shockDisplay = newShock + " at ";
            updateVitals("Shock_Level", newShock.toString(10));
            localStorage.setItem("Shock_display", shockDisplay + timeStamp);
            updateVitals("Shock_History", shockDisplay + timeStamp);
        }

    }, 1000);
}

function recordBP(){
        setTimeout(function(){
            var bp = parseInt(bpText.value);
            updateVitals("BP", bp.toString(10));
            localStorage.setItem("BP_prev", bp.toString(10));

            var min = (parseInt(localStorage.getItem('total_seconds_main'),10))/60;
            var sec = (parseInt(localStorage.getItem('total_seconds_main'),10))%60;
            var hour = 0;
            var timeStamp;
            var bpDisplay = bp + " at ";

            if(min < 1){
                min = 0;
            }

            if(min >= 60){
                hour = min/60;
                min = min%60;
            }

            if(hour !== 0){
                timeStamp = hour.toString(10) + "hr " +  min.toString(10) + "min " + sec.toString(10) + "sec";
            }

            timeStamp = min.toString(10) + "min " + sec.toString(10) + "sec";
            updateVitals("BP_History", bpDisplay + timeStamp);
            localStorage.setItem("BP_display", bpDisplay + timeStamp);

            //Because the BP  was updated we must update the Shock Index as well
            var hr = localStorage.getItem('HR_prev');
            if(hr !== "null" && bp !== null){
                var newShock = ((parseInt(hr,10))/bp).toFixed(2);
                var shockDisplay = newShock + " at ";
                updateVitals("Shock_Level", newShock.toString(10));
                localStorage.setItem("Shock_display", shockDisplay + timeStamp);
                updateVitals("Shock_History", shockDisplay + timeStamp);
            }

        }, 1000);
}

function updateVitals(key, value){
    $.ajax({
        type:"POST",
        url: '/setItem/',
        data: {
            'key': key,
            'value': value,
        },

        success: function( data ) {
            console.log("Vitals Updated!");
        }
    });
}