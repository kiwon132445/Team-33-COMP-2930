var firebase = app_firebase;  
var dB = firebase.database();
var userId = firebase.auth().currentUser.uid;

//Function to load edit form panel with previous event values.
function loadformEvent() {
  //Gets the Key of the Event
  var parenta = this.parentElement;
  var parentb = parenta.parentElement;
  var parentc = parentb.childen[5];
  var refid = parentc.children[0];
  var eventpath = dB.ref('events/' + refid);
  eventpath.on('value', snap => {
    eventRef = JSON.stringify(snap.val(), null, 3);
    var editlist = JSON.parse(eventRef);
    var editform = document.getElementById('instantForm')
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

    dB.ref('events/' + refid).update({
      eventname: newlist[0].value,
      eventStartTime: newlist[1].value,
      eventEndTime: newlist[2].value,
      eventLocation: newlist[3].value,
      eventDetails: newlist[4].value
    }); 
  })
};  



function deleteEvent() {
    var parentd = this.parentElement;
    var parente = parentd.parentElement;
    var refid = parente.childen[5].className;
    var eventpath = dB.ref('events/' + refid);
    var deletelocation = dB.ref('events');
    deletelocation.remove(delstr);

}