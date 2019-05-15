$(document).ready(function () {
    $("#box1cover").hover(function () {
        $(".box1").css("background-color", "#59C657");
        $(".box1title").css("color", "white");
        $(".img1").css("opacity", "0");
    },
        function () {
            $(".box1").css("background-color", "white");
            $(".box1title").css("color", "#484747");
            $(".img1").css("opacity", "1");

        });
    $("#box2cover").hover(function () {
        $(".box2").css("background-color", "#59C657");
        $(".box2title").css("color", "white");
        $(".img2").css("opacity", "0");
    },
        function () {
            $(".box2").css("background-color", "white");
            $(".box2title").css("color", "#484747");
            $(".img2").css("opacity", "1");
        });
    $("#box3cover").hover(function () {
        $(".box3").css("background-color", "#59C657");
        $(".box3title").css("color", "white");
        $(".img3").css("opacity", "0");
    },
        function () {
            $(".box3").css("background-color", "white");
            $(".box3title").css("color", "#484747");
            $(".img3").css("opacity", "1");
        });
});