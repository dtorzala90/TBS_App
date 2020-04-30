/**
 *  This class is responsible for keeping track of the total time elapsed since
    the beginning of a session. It also updates the UI timer accordingly.
 */
class VisualTimer {

    /**
     *  Creates a Timer object and starts a running timer based on the given arguments.
     *  If secondCount is equal to 0 we know the trauma just started. However, if it is not
     *  we know the user navigated away from the page and must factor this into our calculation
     *  of the time elapsed.
     *
     * @param start   represents the time the session was started in milliseconds
     * @param secondCount represents, in milliseconds, the total time elapsed since the session began.
     */
    constructor(start, secondCount, navTime) {
        var currentTime = new Date().getTime();
         this.startTime = start;
         this.visHours = document.getElementById("hours");
         this.visMinutes = document.getElementById("minutes");
         this.visSeconds = document.getElementById("seconds");

         if(secondCount != 0 && navTime != 0){
             console.log("Current Time: " + currentTime);
             console.log("Navigated away at: " + navTime);
             var timeAway = Math.floor((currentTime - navTime)/1000);

             console.log("Away from page for:" + timeAway);
             this.totalSeconds = secondCount + timeAway;
         }

         else{
             this.totalSeconds = secondCount;
         }

         console.log("Timer Started At: " + this.startTime);
         console.log("Total seconds elapsed: " + this.totalSeconds);
    }

    /**
     *  Increments the timer by one second and updates the UI accordingly. This method will
     *  be called from the HTML file every second to ensure accuracy.
     */
    timerAnimate() {
        ++this.totalSeconds;
        this.visSeconds.innerHTML = this.pad(this.totalSeconds % 60);
        this.visMinutes.innerHTML = this.pad(parseInt(this.totalSeconds / 60));
        this.visHours.innerHTML = this.pad(parseInt(this.totalSeconds / 3600));

        //checkGeneralAlerts();
    }

    /**
     * Helper function used to format the timer variables (seconds, minutes, and hours).
     *
     * @param val represents the number of seconds, minutes, or hours that has passed.
     * @returns {string} value to displayed in the UI. A zero is added if the value is only 1 digit.
     */
    pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }
}
