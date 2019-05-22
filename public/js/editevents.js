/** The editEvent function is connected to the Edit Button of each Event List Item Created by displayevent.js
 * The first sub-function will get the details of the event to be edited and apply it to the form.
 * The second sub-function is an onSubmit function and will update the changed data to the event key.
 * 
 * The deleteEvent function is connect to the Delete Button of each Event List Item Createed by displayevent.js
 * After pressing "Okay" on a confirmation panel, the function will delete the entire event's key under "events".
 * 
 * @author Kibum Park
 * @version 4.0
 * 
 */

 //Firebase variables
var firebase = app_firebase;  
var dB = firebase.database();
var authRef = firebase.auth();

//Function to set Edit Panel with previous details of event with id "eventid"
function editEvent(eventid) {
  //Get previous details of the event
  var eventpath = dB.ref('events/' + eventid);
  eventpath.on('value', snap => {
    eventRef = JSON.stringify(snap.val(), null, 3);
    var editlist = JSON.parse(eventRef);
    //Apply previous details of event to Edit Panel
    var editform = document.getElementById('instantForm')
    editform.elements[0].value = editlist.eventname;
    editform.elements[1].value = editlist.eventStartTime;
    editform.elements[2].value = editlist.eventEndTime;
    editform.elements[3].value = editlist.eventLocation;
    editform.elements[4].value = editlist.eventDetails;
    });
  //Submit Function to update data
  $("#instantform").submit(function(event) {
    var newlist = {};
    newlist = $(this).serializeArray();
    event.preventDefault();

    dB.ref('events/' + eventid).update({
      eventname: newlist[0].value,
      eventStartTime: newlist[1].value,
      eventEndTime: newlist[2].value,
      eventLocation: newlist[3].value,
      eventDetails: newlist[4].value
    }); 
  })
};  


//Function to delete data for event 'x'
function deleteEvent(eventid) {
    //Delete the event from 'events'
    var deleteevent = dB.ref('events/' + eventid);
    deleteevent.remove(eventid);s 
}