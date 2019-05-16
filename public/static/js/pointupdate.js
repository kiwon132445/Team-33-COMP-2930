function updatePoint(){

    var firebase = app_firebase;
    
  
    firebase.auth().onAuthStateChanged(function(user){
    
            var userId = user.uid;	
            console.log(userId);
	  		firebase.database().ref('Users/' + userId).update(
                {
                point: 1990            
                });
            var dbRef = firebase.database().ref('Users/' + userId).child("point");
	  		dbRef.on("value", function(snap){
                let out = document.getElementById("points");
                points = snap.val();
                console.log(points);
                          
                out.innerHTML = points;
            });
					
        
        });
}();