/**
 *  This script is the same as the one in runTimerMain but with additional calculations
 *  to compensate for the fact that the Summary page will be opened after the timer
 *  has started.
 */

/*
    If a new session has been started the total seconds elapsed is set to 0,
    the start time is set to the current system time, and a new timer is started.
    These values are then stored in web storage to be accesses later.
 */
if (localStorage.getItem('total_seconds_summary') === null){
    var start = parseInt(localStorage.getItem('session_start'), 10);
    var totSeconds = Math.floor((new Date().getTime() - start)/1000);
    var navTime = 0;
    var visTimer = new VisualTimer(start, totSeconds, navTime);

    localStorage.setItem('total_seconds_summary', totSeconds.toString());
    localStorage.setItem('nav_time_summary', navTime.toString());
    setInterval(startVisTimer, 1000);
    //setInterval(checkGeneralAlerts, 1000);
}

/*
    If this is not a new session, the total seconds and start time are found
    in session storage and used to create a new timer that is identical to the
    old one. This ensure all data is preserved.
*/
else {
    var totSeconds = parseInt(localStorage.getItem('total_seconds_summary'), 10);
    var start = parseInt(localStorage.getItem('session_start'), 10);
    var navTime = parseInt(localStorage.getItem('nav_time_summary'), 10);

    var visTimer = new VisualTimer(start, totSeconds, navTime);
    setInterval(startVisTimer, 1000);
}

/*
   This function is repeated every second while the timer is running. It is
   responsible for changing the timer displayed on the UI and saving the
   updated total seconds elapsed to session storage. This ensures that this
   value is always up to date as the user could navigate away from the page
    at any time.
*/
function startVisTimer(){
    visTimer.timerAnimate();
    localStorage.setItem('total_seconds_summary', (visTimer.totalSeconds).toString());

    /*
        This simply saves the current time to ensure that we know exactly when the
        user navigated away from the page. When the user navigates back to the page
        this value will be used to calculate an accurate "total seconds" compensating
        for the time spent away from the page.
    */
    var navTime = new Date().getTime();
    console.log(navTime);
    localStorage.setItem('nav_time_summary', navTime.toString());

    //Check for general alerts and manages UI alerts accordingly
}
