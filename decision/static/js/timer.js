/*
    This class is responsible for recording the time elapsed throughout the
    duration of the trauma. Additionally, it is responsible for calculating
    the time elapsed between various protocol steps.
 */
class Timer {
    /*
        Creates a Timer object and records the initial start time of the trauma.
        The constructor also initiates a blank dictionary for the various steps.
     */
    constructor(startTime) {
        this.startTime = startTime;
        this.timerDict = { };
        console.log("Timer Started At: " + startTime);
    }

    /*
        This method handles all the steps in the airway protocol. For each step
        the time elapsed is recorded or the time stamp that the step was initiated
        is recorded. These values are then stored in the timer dictionary.
     */
    completeAirwayStep(stepName, time) {
        if (stepName == 'OxygenSupplInit'){
            this.timerDict[stepName] = time;
            print("Oxygen Supplementation Initiated At: " + time);
        }

        else if(stepName == 'OxygenSupplStop'){
            this.timerDict[stepName] = time;
            this.timerDict["OxygenSupplTime"] = time - this.timerDict.OxygenSupplInit;
            print("Oxygen Supplementation Stopped At: " + time);
            print("Total Time Elapsed for Oxygen Supllementation Was: " + this.timerDict.OxygenSupplTime);
        }
    }
}