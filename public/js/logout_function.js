function logout(){

    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        $state.go("login");
    }).catch(function(error) {
        // An error happened.
    });
    window.location.href = "login.html";
}
