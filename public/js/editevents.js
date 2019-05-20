var firebase = app_firebase;  
var dB = firebase.database();
var userId = firebase.auth().currentUser.uid;

//Function to load edit form panel with previous event values.
function loadformEvent() {
  //Gets the Key of the Event
  var eventdiv = this.getElementByClassName('eventID');
  var eventid = eventdiv.innerText;
  var eventpath = dB.ref('events/' + eventid);
  //Open Panel with the Database Values as the Form's Values
  //Put Function to open Edit Event Panel Here
  //Sets the Previous Data of the Event into the Event Panel
  eventpath.on('value', snap => {
    eventRef = JSON.stringify(snap.val(), null, 3);
    var editlist = JSON.parse(eventRef);
    var editform = document.getElementById('instantform')
    editform.elements[0].value = editlist.eventname;
    editform.elements[1].value = editlist.eventStartTime;
    editform.elements[2].value = editlist.eventEndTime;
    editform.elements[3].value = editlist.eventLocation;
    editform.elements[4].value = editlist.eventDetails;
    });
  //Gets the Form Id to link its Submit Button to this Function
  //Pressing Submit will update the Event's Details with the new values in the Form
  $("#instantform").submit(function(event) {
    var newlist = {};
    newlist = $(this).serializeArray();
    event.preventDefault();

    dB.ref('events/' + eventid).update({
      year: pieces[0],
      month: pieces[1],
      day: pieces[2],
      eventname: newlist[0].value,
      eventStartTime: newlist[1].value,
      eventEndTime: newlist[2].value,
      eventLocation: newlist[3].value,
      eventDetails: newlist[4].value
    }); 
  })
};  



function deleteEvent() {
    var iddiv2 = this.getElementByClassName('eventID');
    var delstr = iddiv2.innerText;
    var deletelocation = dB.ref('events');
    deletelocation.remove(delstr);

}