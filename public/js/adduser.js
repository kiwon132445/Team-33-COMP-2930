function signUp()
{

  var userEmail = document.getElementById("emailTextFieldSignUp").value;
  var userPassword = document.getElementById("passwordTextFieldSignUp").value;
  var userName = document.getElementById("nameTextFieldSignUp").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
  function makeuser (user) {
    var user = firebase.auth().currentUser;
    setUserInfo(userName, userEmail, user.uid)
  }
  
}

function setUserInfo(username, email, uid)
{
  var userId = firebase.auth().currentUser.uid;
  var ref = firebase.database().ref();
  var userRef = ref.child("users").child(login);

  userRef.set({
    username: username,
    
    email: email,
 
  }, function(error)
  {
    if (error)
    {
      var errorMessage = error.message;

      window.alert("There went something wrong : " + errorMessage);
    }
    else
    {
      window.alert("Account successfully created");
    }
  });
}