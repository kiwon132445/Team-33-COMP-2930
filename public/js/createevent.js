var firebase = app_firebase;  
var dB = firebase.database();
var authRef = firebase.auth();

authRef.onAuthStateChanged(function(user) {
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
    
      //Counts how many events are there to give the new event the correct number
      dB.ref('users/' + user.uid + '/eventsCreated').once("value").then(function(snapshot) {
        var childnum = snapshot.numChildren(); 

      });
      //Creates new event data key (with random string) under the user's "eventsCreated" node
      dB.ref('users/' + user.uid + '/eventsCreated').once('value', function(snapshot) {
        var childnum = snapshot.numChildren(); 
        dB.ref('users/' + user.uid + '/eventsCreated').update({
          [childnum + 1] : str
        })
      }); 
       
      //Create new event data key with the same string under the "events" node
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
      $('.eventpanel').addClass('mobileDisplay');
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

  });
