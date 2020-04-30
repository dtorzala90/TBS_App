/**
 * This script is responsible for resetting the scroll position
 * of scrollable divs in the primary survey back to the top. This
 * can be activated by clicking on the navigation tabs (for both
 * the nav-pill menus and input divs) or specific nav-pills for
 * their respective input divs.
 */

/**
 * Clicking the navigation tabs in the card
 */
document.getElementsByClassName("survey-a")

/**
 * Scroll to the top of the nav-pill div
 */
function navPillScroll() {
    document.getElementById('airdiv').scrollTop = 0;
    document.getElementById('bthdiv').scrollTop = 0;
    document.getElementById('crcdiv').scrollTop = 0;
    document.getElementById('dsbdiv').scrollTop = 0;
    document.getElementById('expdiv').scrollTop = 0;

    /**
     * Also reset selected pill to first pill
     */
    $('#v-pills-oxsp-tab').tab('show');
    $('#v-pills-spbr-tab').tab('show');
    $('#v-pills-hrrt-tab').tab('show');
    $('#v-pills-gmtr-tab').tab('show');
    $('#v-pills-head-tab').tab('show');
}

/**
 * Clicking the nav-pills in the card
 */
document.getElementsByClassName("survey-pill-a")

/**
 * Scroll to the top of the input div
 */
function inputScroll() {
    document.getElementById('airinput').scrollTop = 0;
    document.getElementById('bthinput').scrollTop = 0;
    document.getElementById('crcinput').scrollTop = 0;
    document.getElementById('dsbinput').scrollTop = 0;
    document.getElementById('expinput').scrollTop = 0;
}