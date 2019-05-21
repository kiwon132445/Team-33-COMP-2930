var firebase = app_firebase;  
var dB = firebase.database();
var authRef = firebase.auth();

//Function to set Edit Panel with previous details of event 'x'
function editEvent(x) {
  //Get previous details
  var eventpath = dB.ref('events/' + x);
  eventpath.on('value', snap => {
    eventRef = JSON.stringify(snap.val(), null, 3);
    var editlist = JSON.parse(eventRef);
    //Apply previous details to Edit Panel
    var editform = document.getElementById('instantForm')
    editform.elements[0].value = editlist.eventname;
    editform.elements[1].value = editlist.eventStartTime;
    editform.elements[2].value = editlist.eventEndTime;
    editform.elements[3].value = editlist.eventLocation;
    editform.elements[4].value = editlist.eventDetails;
    });
  //Submit Function to update data
  $("#instantForm").submit(function(event) {
    var newlist = {};
    newlist = $(this).serializeArray();
    event.preventDefault();

    eventpath.update({
      eventname: newlist[0].value,
      eventStartTime: newlist[1].value,
      eventEndTime: newlist[2].value,
      eventLocation: newlist[3].value,
      eventDetails: newlist[4].value
    });
    setTimeout(() => {
      location.reload();
    }, 200);
  })
};  


//Function to delete data for event 'x'
function deleteEvent(x) {
    console.log(x)
    //Delete the event from 'events'
    var deleteevent = dB.ref('events/' + x);
    deleteevent.remove();
  
    setTimeout(() => {
      location.reload();
    }, 200);
};
