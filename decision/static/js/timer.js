class Timer {
    constructor(startTime) {
        this.startTime = startTime;
        this.timerDict = { };
        console.log("Timer Started At: " + startTime);
    }

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