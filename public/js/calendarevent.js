
function createevent(year, month, day) {
    var day = document.getElementsByClassName("calendarday");
    var firebase = app_firebase;
    var userId = firebase.auth().currentUser.uid;

    var dbRef = firebase.database().ref(userId).child("dayevents");
    if (!dbRef.hasChild(year)) {
        deRef.push().setValue(year);
        dbRef.child(year).push().setValue(month);
        dbRef.child(month).push().setValue(day);
    }
}

function deleteevent(year, month, day) {
    var day = document.getElementsByClassName("calendarday");
    var firebase = app_firebase;
    var userId = firebase.auth().currentUser.uid;
    var dbRef = firebase.database().ref(userId).child("dayevents");
    if (dbRef.child(year).child(month).child(day).hasChild(event)) {
        dbRef.child(year).child(month).child(day).remove(event);
    }
}

function editevent(year, month, day, evente) {
    var day = document.getElementsByClassName("calendarday");
    var firebase = app_firebase;
    var userId = firebase.auth().currentUser.uid;
    var dbRef = firebase.database().ref(userId).child("dayevents");
    if (dbRef.child(year).child(month).child(day).hasChild(event)) {
        dbRef.child(year).child(month).child(day).child(event).set(evente);
    }
}

