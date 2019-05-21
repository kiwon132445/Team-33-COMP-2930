var authRef = firebase.auth();
authRef.onAuthStateChanged(function(user) {
    //If user is logged in, display name
    if (user) {
        console.log('Display name onAuthStateChanged : '+ user.displayName);
        console.log(user.uid);
        document.getElementById("username").innerHTML = user.displayName;
        var uid = user.uid;
        var user = firebase.auth().currentUser;
        console.log(user)
        // output.innerHTML(user.displayName);
    } else {
        console.log('Not logged in');
    }
});