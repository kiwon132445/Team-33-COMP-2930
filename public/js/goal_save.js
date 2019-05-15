var authRef = firebase.auth();
authRef.onAuthStateChanged(function(user) {
    if (user) {
        console.log('Display name onAuthStateChanged : '+ user.displayName);
        console.log(user.uid);
        var output = document.getElementById("username");
        var uid = user.uid;
        var user = firebase.auth().currentUser;
        output.innerHTML(user.displayName);
    } else {
        console.log('Not logged in');
    }
});

//Toggles color of goal chosen
$('.cbdiv').on('click', function(){
    var checkbox = $(this).children('input[type="checkbox"]');
    checkbox.prop('checked', !checkbox.prop('checked'));
    $(this).toggleClass('chosen');
 });

 //Checks which goal is chosen and stores it in database
function submit() {
if (document.getElementById("cb1").checked == true) {
    var checkedValue1 = document.getElementById('cb1').value;
    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/goal1").set({
    goal1: checkedValue1
    });

    var weight = localStorage.getItem("weight");
    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/guide1").set({
    guide1: weight
    });

} else if (document.getElementById("cb1").checked == false) {
    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/goal1").set({
    goal1: null
    });

    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/guide1").set({
    guide1: null
    });

}
if (document.getElementById("cb2").checked == true) {
    var checkedValue2 = document.getElementById('cb2').value;
    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/goal2").set({
    goal2: checkedValue2
    });

    var muscle = localStorage.getItem("muscle");
    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/guide2").set({
    guide2: muscle
    });


} else if (document.getElementById("cb2").checked == false) {
    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/goal2").set({
    goal2: null
    });

    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/guide2").set({
    guide2: null
    });

}
if (document.getElementById("cb3").checked == true) {
    var checkedValue3 = document.getElementById('cb3').value;
    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/goal3").set({
    goal3: checkedValue3
    });

    var healthy = localStorage.getItem("healthy");
    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/guide3").set({
    guide3: healthy
    });


} else if (document.getElementById("cb3").checked == false) {
    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/goal3").set({
    goal3: null
    });

    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/guide3").set({
    guide3: null
    });

}
if (document.getElementById("cb4").checked == true) {
    var checkedValue4 = document.getElementById('cb4').value;
    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/goal4").set({
    goal4: checkedValue4
    });

    var money = localStorage.getItem("money");
    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/guide4").set({
    guide4: money
    });


} else if (document.getElementById("cb4").checked == false){
    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/goal4").set({
    goal4: null
    });

    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/guide4").set({
    guide4: null
    });

}
if (document.getElementById("cb5").checked == true) {
    var checkedValue5 = document.getElementById('cb5').value;
    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/goal5").set({
    goal5: checkedValue5
    });

    var eco = localStorage.getItem("eco");
    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/guide5").set({
    guide5: eco
    });

} else if (document.getElementById("cb5").checked == false){
    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/goal5").set({
    goal5: null
    });

    firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/guide5").set({
    guide5: null
    });

}
setTimeout(function(){ window.location.href="results.html" }, 800);
}
      