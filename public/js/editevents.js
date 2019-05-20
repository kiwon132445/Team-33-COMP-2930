var firebase = app_firebase;  
var dB = firebase.database();
var userId = "0A8DicAbipMRCTWJ0opoctqoGtk2"
//var userId = firebase.auth().currentUser.uid;

//Function to load edit form panel with previous event values.
function loadformEvent() {
  //Function to load event panel to allow adjustment
  //Get Data from Datbase
  //Get id string from div (editstr variable)
  //Get Previous Event Data
  var location = dB.ref('events/' + editstr);
  location.on('value', snap => {
    eventRef = JSON.stringify(snap.val(), null, 3);
    var list1 = JSON.parse(eventRef);
    //Open Panel with the Database Values as the Form's Values
    var editform = document.getElementById('id of form')
    editform.elements[0].value = list1.eventname;
    editform.elements[1].value = list1.eventStartTime;
    editform.elements[2].value = list1.eventEndTime;
    editform.elements[3].value = list1.eventLocation;
    editform.elements[4].value = list1.eventDetails;
    })
};  

//Function to submit edited data
function submiteditEvent() {
  var editlist = {};
    editlist = $(this).serializeArray();
    console.log(editlist);
    event.preventDefault();

    //Get Key of Event, then set the values with the form's data
    //var str = String Key of Event 
     dB.ref('events/' + editstr).update({
      year: pieces[0],
      month: pieces[1],
      day: pieces[2],
      eventname: editlist[0].value,
      eventStartTime: editlist[1].value,
      eventEndTime: editlist[2].value,
      eventLocation: editlist[3].value,
      eventDetails: editlist[4].value
      
    }); 
}

function deleteEvent() {
    //Get id string from div (delstr variable)
    var deletelocation = dB.ref('events');
    deletelocation.remove(delstr);

}