let count = 0;
let rotateImage = document.getElementsByClassName('logoDiv')

$('.logoDiv').click(function () {
    count++;
    console.log(count)
            
    if (count===3) {
        $(this).addClass('imageRotate');
        rotateImage[0].addEventListener("animationend", function() {
             $(this).removeClass('imageRotate');
        })
        count = 0;
    }
})