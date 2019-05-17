//Function to turn Form Data into JSON
var arraylist = {}
$("#forms").submit(function(event) {
  arraylist = $(this).serializeArray()
  console.log(arraylist);
  event.preventDefault();

  var firebase = app_firebase;  
  var dB = firebase.database();
  var userId = firebase.auth().currentUser.uid;
  var str = "riuehkjsnrandomstringsjk"

  dB.ref('users/' + userId + '/eventsCreated').set({
    1: str
  })
  dB.ref('events/' + str).set({
    year: "2019",
    month: "May",
    day: "17",
    eventname: arraylist[0].value,
    eventStartTime: arraylist[1].value,
    eventEndTime: arraylist[2].value,
    eventDetails: arraylist[3].value,
  })
  
});

var myJSON = JSON.stringify(arraylist);
console.log(typeof arraylist);

//Function for Event Panel Sliding Animation
var trigbutton = $('#trigger');
$(trigbutton).click(function (event) {
  var menu = $('#eventpanel');
  var showMenu = false;
  var menuAnimSlideIn = {"right": "-400", "easing": "swing"};
  var menuAnimSlideOut = {"right": "0", "easing": "swing"};
    if (!showMenu) {
        showMenu = true;
        $(menu).animate(menuAnimSlideIn, 100);
    } else {
        showMenu = false;
        $(menu).animate(menuAnimSlideOut, 100);
    }
});

var dates = $("#dateInput").value