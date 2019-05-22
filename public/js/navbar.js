
/**
 * The animation function for the mobile navbar
 */
$(document).ready(function () {
    var menuButton = $('.menuButton'), //The 'hamburger' button on the mobile navbar
        menu = $('.menuMobile'), //The actual menu being slid up and down
        menuAnimSlideIn = {"top": "75pt", "easing": "swing"}, //Slide in animation
        menuAnimSlideOut = {"top": "-160pt", "easing": "swing"}, //Slide out animation
        showMenu = false; //Boolean to see whether the menu should be shown at the moment
        
    /**
     * This function happens when the button is pressed
     * it essentially toggles the menu in and out
     */
    $(menuButton).click(function () {
        if (!showMenu) {
            showMenu = true;
            $(menu).animate(menuAnimSlideIn, 100);
        } else {
            showMenu = false;
            $(menu).animate(menuAnimSlideOut, 100);
        }
    });

})

//Redirect to the home page
function toHome(){
    window.location.href = "navigation.html";
}

//Redirect to the calendar page
function toCalendar(){
    window.location.href = "calendar.html";
}

//Redirect to the about us page
function toAbout(){
    window.location.href = "aboutus.html";
}
