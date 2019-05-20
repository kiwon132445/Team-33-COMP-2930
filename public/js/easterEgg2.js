$(document).ready(function(){
    let count = 0;

    $("#easteregg2").click(function () {
        count++;
        console.log(count)
                
        if (count===3) {
            $('#story').css("background-image", "url('../static/images/endgame.jpg')", "no-repeat", "center", "center", "fixed")
            $('#story').css("background-size", "cover")
        }
        if (count ==6) {
            $('#story').css("background-image", "none")
            $('#story').css("background-size", "cover")
            count = 0;
        }
    })
})

