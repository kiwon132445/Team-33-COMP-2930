//This function brings the user to the login page if they are NOT logged in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
     }
   else {
    // No user is signed in.
    window.location.href = "../index.html";
      }
});