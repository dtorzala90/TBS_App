/*
    This class is responsible for recording the time elapsed throughout the
    duration of the trauma. Additionally, it is responsible for calculating
    the time elapsed between various protocol steps.
 */
var instance;
var startTime;
var timerDict;
var totalSeconds;
var visHours;
var visMinutes;
var visSeconds;

class VisualTimer {
    /*
        Creates a Timer object and records the initial start time of the trauma.
        The constructor also initiates a blank dictionary for the various steps.
     */
    constructor(start) {
           //instance = this;
           startTime = start;
           timerDict = { };

           totalSeconds = 0;
           visHours = document.getElementById("hours");
           visMinutes = document.getElementById("minutes");
           visSeconds = document.getElementById("seconds");
           console.log("Timer Started At: " + startTime);

    }

    timerAnimate() {
        ++totalSeconds;
        visSeconds.innerHTML = this.pad(totalSeconds % 60);
        visMinutes.innerHTML = this.pad(parseInt(totalSeconds / 60));
        visHours.innerHTML = this.pad(parseInt(totalSeconds / 3600));
    }

    pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }

    /*
        This method handles all the steps in the airway protocol. For each step
        the time elapsed is recorded or the time stamp that the step was initiated
        is recorded. These values are then stored in the timer dictionary.
     */
    completeStepTest() {
        console.log("Button Pressed!!!");
    }
}