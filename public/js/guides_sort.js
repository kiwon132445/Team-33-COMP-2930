    var authRef = firebase.auth();
    authRef.onAuthStateChanged(function(user) {
    var firebaseRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid)

    //Checks which goal a user has chosen and displays corresponding guides.
    if (firebaseRef.once("value")
    .then(function(snapshot) {
        var hasGoal = snapshot.hasChild("goal3");
    })) {
        console.log("test3");
        $('#weight').css('display', 'none');
        $('#muscle').css('display', 'none');
        $('#money').css('display', 'none');
        $('#eco').css('display', 'none');
        $('#healthy').css('display', 'block');
    } 

    if (firebaseRef.once("value")
    .then(function(snapshot) {
        if (snapshot.hasChild("goal3")) {
            $('#weight').css('display', 'none');
            $('#muscle').css('display', 'none');
            $('#money').css('display', 'none');
            $('#eco').css('display', 'none');
            $('#healthy').css('display', 'block');
        }
    }));

    if (firebaseRef.once("value")
    .then(function(snapshot) {
        if (snapshot.hasChild("goal1")) {
            $('#eco').css('display', 'none');
            $('#muscle').css('display', 'none');
            $('#money').css('display', 'none');
            $('#healthy').css('display', 'none');
            $('#weight').css('display', 'block');
        }
    }));

    if (firebaseRef.once("value")
    .then(function(snapshot) {
        if (snapshot.hasChild("goal2")) {
            $('#weight').css('display', 'none');
            $('#eco').css('display', 'none');
            $('#money').css('display', 'none');
            $('#healthy').css('display', 'none');
            $('#muscle').css('display', 'block');
        }
    }));

    if (firebaseRef.once("value")
    .then(function(snapshot) {
        if (snapshot.hasChild("goal4")) {
            $('#weight').css('display', 'none');
            $('#muscle').css('display', 'none');
            $('#eco').css('display', 'none');
            $('#healthy').css('display', 'none');
            $('#money').css('display', 'block');
        }
    }));

    if (firebaseRef.once("value")
    .then(function(snapshot) {
        if (snapshot.hasChild("goal5")) {
            $('#weight').css('display', 'none');
            $('#muscle').css('display', 'none');
            $('#money').css('display', 'none');
            $('#healthy').css('display', 'none');
            $('#eco').css('display', 'block');
        }
    }));
});
