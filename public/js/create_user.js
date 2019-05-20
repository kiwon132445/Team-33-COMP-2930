(function(){

    var firebase = app_firebase;
    // For current user
    // Create this user node in the datebase
    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("users/"+user.uid).update(
    {
        "name":user.displayName, 
        "email":user.email,
        "eventsCreated": [1, 'defaultEvent']
        });
    });
})()