var firebase = app_firebase;  
var dB = firebase.database();
var userId = firebase.auth().currentUser.uid;

//Function to create Random String
function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//Function to take Form Data
$("#forms").submit(function(event) {
    var arraylist = {}
    arraylist = $(this).serializeArray()
    console.log(arraylist);
    event.preventDefault();

    //Function to get Date Value from Calendar
    var dateObject = $('#datepicker').datepicker({ dateFormat: 'dd-mm-yy' }).val();
    console.log(dateObject)
    var pieces = dateObject.toString().split(' ');

    //Generate Random String for Key
    var str = makeid(10)
    console.log(str)
  
    //Associate New Random String to User 
    dB.ref('users/' + userId + '/eventsCreated').once("value").then(function(snapshot) {
      var childnum = snapshot.numChildren(); 

    });
    //Checks if this user has any events
    if (!dB.ref('users/' + userId).hasChild('eventsCreated')){
      var newevents = dB.ref('users/' + userId).child('eventsCreated')
      var newnewevents = newevents.push()
      dB.ref('users/' + userId + '/eventsCreated').set({
        '1': str
        }        
      )
    }
    else {
      dB.ref('users/' + userId + '/eventsCreated').once('value', function(snapshot) {
        dB.ref('users/' + userId + '/eventsCreated').set({
          [childnum + 1] : str
        })
      } 
    ); 
    }  
    //Create New Key With Random String to Events Data With Calendar Data
    dB.ref('events/' + str).set({
      year: pieces[0],
      month: pieces[1],
      day: pieces[2],
      eventname: arraylist[0].value,
      eventStartTime: arraylist[1].value,
      eventEndTime: arraylist[2].value,
      eventLocation: arraylist[3].value,
      eventDetails: arraylist[4].value
    })  
});



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