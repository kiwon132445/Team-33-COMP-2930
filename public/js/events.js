//Function to create Random String
function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
//Function to take Form Data
var arraylist = {}
$("#forms").submit(function(event) {
  arraylist = $(this).serializeArray()
  console.log(arraylist);
  event.preventDefault();
//Function to get Date Value from Calendar
var dateObject = $('#datepicker').datepicker('getDate'); 
console.log(dateObject)
var pieces = dateText.split('/');

//Function to write Form Data into Firebase
  var str = makeid(10)
  console.log(str)
  var firebase = app_firebase;  
  var dB = firebase.database();

  //var userId = firebase.auth().currentUser.uid;
  var userId = "0A8DicAbipMRCTWJ0opoctqoGtk2"
 
  dB.ref('users/' + userId + '/eventsCreated').set({
    dynamic: str
  })
  dB.ref('events/' + str).set({
    year: pieces[0],
    month: pieces[1],
    day: pieces[2],
    eventname: arraylist[0].value,
    eventStartTime: arraylist[1].value,
    eventEndTime: arraylist[2].value,
    eventDetails: arraylist[3].value,
  })  
});
//Function for Event Panel Sliding Animation
var trigbutton = $('#trigger');
$(trigbutton).click(function (event) {
  var menu = $('.eventpanel');
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