$(document).ready(function () {
    $(".guide1").hover(function () {
        $(".guide1").css("background-color", "#59C657");
        $(".guide1title").css("color", "white");
        $(".img1").css("opacity", "0");
    },
        function () {
            $(".guide1").css("background-color", "white");
            $(".guide1title").css("color", "#484747");
            $(".img1").css("opacity", "1");

        });
    $(".guide2").hover(function () {
        $(".guide2").css("background-color", "#59C657");
        $(".guide2title").css("color", "white");
        $(".img2").css("opacity", "0");
    },
        function () {
            $(".guide2").css("background-color", "white");
            $(".guide2title").css("color", "#484747");
            $(".img2").css("opacity", "1");
        });
});