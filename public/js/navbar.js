$(document).ready(function () {
    var menuButton = $('.menuButton'),
        menu = $('.menuMobile'),
        menuAnimSlideIn = {"top": "75pt", "easing": "swing"},
        menuAnimSlideOut = {"top": "-160pt", "easing": "swing"},
        showMenu = false;
        
    $(menuButton).click(function (event) {
        if (!showMenu) {
            showMenu = true;
            $(menu).animate(menuAnimSlideIn, 100);
        } else {
            showMenu = false;
            $(menu).animate(menuAnimSlideOut, 100);
        }
    });
})

function toHome(){
    window.location.href = "navigation.html";
}

function toCalendar(){
    window.location.href = "calendar.html";
}

function toAbout(){
    window.location.href = "aboutus.html";
}
