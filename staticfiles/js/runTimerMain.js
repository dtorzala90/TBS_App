/**
 *      This script uses local storage variables to ensure that the time elapsed
 *      being displayed on the screen remain persistent with user navigation. If the user
 *      starts a session, let's it run for a bit, navigates away from the page, and then
 *      comes back the time elapsed is still accurate.
 */

/*
      If a new session has been started the total seconds elapsed is set to 0,
      the start time is set to the current system time, and a new timer is started.
      These values are then stored in web storage to be accesses later.

*/
if (localStorage.getItem('total_seconds_main') === null){
    var start = new Date().getTime();
    var totSeconds = 0;
    var navTime = 0;
    var visTimer = new VisualTimer(start, totSeconds, navTime);
    localStorage.setItem('session_start', start.toString());
    localStorage.setItem('total_seconds_main', totSeconds.toString());
    localStorage.setItem('nav_time_main', navTime.toString());
    setInterval(startVisTimer, 1000);
}

/*
     If this is not a new session, the total seconds and start time are found
     in local storage and used to create a new timer that is identical to the
     old one. This ensure all data is preserved.
*/
else {
    var totSeconds = parseInt(localStorage.getItem('total_seconds_main'), 10);
    var start = parseInt(localStorage.getItem('session_start'), 10);
    var navTime = parseInt(localStorage.getItem('nav_time_main'), 10);

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
    localStorage.setItem('total_seconds_main', (visTimer.totalSeconds).toString());

     /*
         This simply saves the current time to ensure that we know exactly when the
         user navigated away from the page. When the user navigates back to the page
         this value will be used to calculate an accurate "total seconds" compensating
         for the time spent away from the page.
    */
     var navTime = new Date().getTime();
     localStorage.setItem('nav_time_main', navTime.toString());
}