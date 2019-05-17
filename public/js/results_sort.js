
$(document).ready(function() {
    //Shows detailed information when result clicked
    $(".results").click(function(){
        $(this).children(".details").slideToggle(250);
        $(this).children(".details").toggleClass('.details');
    });
    
    var authRef = firebase.auth();
    authRef.onAuthStateChanged(function(user) {
        var firebaseRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid)

        //Checks which goal a user has chosen and displays corresponding guides.
        if (firebaseRef.once("value")
            .then(function(snapshot) {
                if (snapshot.hasChild("goal3")) {
                    $('#ivory').insertAfter( "#cool" );
                    $('#ivory').css('margin-top', '20px');
                    $('#emerald').insertAfter( "#ivory" );
                    $('#emerald').css('margin-top', '20px');
                    $('#bear').insertAfter( "#emerald" );
                    $('#bear').css('margin-top', '20px');
                    $('#modesty').insertAfter( "#bear" );
                    $('#modesty').css('margin-top', '20px');
                    $('#coastal').insertAfter( "#modesty" );
                    $('#coastal').css('margin-top', '20px');

                    $('#cool').css('display', 'block');
                    $('#ivory').css('display', 'block');
                    $('#emerald').css('display', 'block');
                    $('#bear').css('display', 'block');
                    $('#modesty').css('display', 'block');
                    $('#coastal').css('display', 'block');
                }
            })) {
        };

        if (firebaseRef.once("value")
            .then(function(snapshot) {
                if (snapshot.hasChild("goal1")) {
                    $('#emerald').insertAfter( "#cool" );
                    $('#emerald').css('margin-top', '20px');
                    $('#ivory').insertAfter( "#ivory" );
                    $('#ivory').css('margin-top', '20px');
                    $('#bear').insertAfter( "#ivory" );
                    $('#bear').css('margin-top', '20px');
                    $('#modesty').insertAfter( "#bear" );
                    $('#modesty').css('margin-top', '20px');
                    $('#coastal').insertAfter( "#modesty" );
                    $('#coastal').css('margin-top', '20px');

                    $('#cool').css('display', 'block');
                    $('#ivory').css('display', 'block');
                    $('#emerald').css('display', 'block');
                    $('#bear').css('display', 'block');
                    $('#modesty').css('display', 'block');
                    $('#coastal').css('display', 'block');
                }
            })) {
        }; 

        if (firebaseRef.once("value")
            .then(function(snapshot) {
                if (snapshot.hasChild("goal2")) {
                    $('#modesty').insertAfter( "#bear" );
                    $('#modesty').css('margin-top', '20px');
                    $('#ivory').insertAfter( "#modesty" );
                    $('#ivory').css('margin-top', '20px');
                    $('#cool').insertAfter( "#ivory" );
                    $('#cool').css('margin-top', '20px');
                    $('#emerald').insertAfter( "#cool" );
                    $('#emerald').css('margin-top', '20px');
                    $('#coastal').insertAfter( "#emerald" );
                    $('#coastal').css('margin-top', '20px');

                    $('#cool').css('display', 'block');
                    $('#ivory').css('display', 'block');
                    $('#emerald').css('display', 'block');
                    $('#bear').css('display', 'block');
                    $('#modesty').css('display', 'block');
                    $('#coastal').css('display', 'block');
                }
            })) {
        } 

        if (firebaseRef.once("value")
            .then(function(snapshot) {
                if (snapshot.hasChild("goal4")) {
                    $('#cool').insertAfter( "#coastal" );
                    $('#cool').css('margin-top', '20px');
                    $('#bear').insertAfter( "#cool" );
                    $('#bear').css('margin-top', '20px');
                    $('#modesty').insertAfter( "#bear" );
                    $('#modesty').css('margin-top', '20px');
                    $('#emerald').insertAfter( "#modesty" );
                    $('#emerald').css('margin-top', '20px');
                    $('#ivory').insertAfter( "#emerald" );
                    $('#ivory').css('margin-top', '20px');

                    $('#cool').css('display', 'block');
                    $('#ivory').css('display', 'block');
                    $('#emerald').css('display', 'block');
                    $('#bear').css('display', 'block');
                    $('#modesty').css('display', 'block');
                    $('#coastal').css('display', 'block');
                }
            })) {
        }; 

        if (firebaseRef.once("value")
            .then(function(snapshot) {
                if (snapshot.hasChild("goal5")) {
                    $('#bear').insertAfter( "#cool" );
                    $('#bear').css('margin-top', '20px');
                    $('#emerald').insertAfter( "#bear" );
                    $('#emerald').css('margin-top', '20px');
                    $('#modesty').insertAfter( "#emerald" );
                    $('#modesty').css('margin-top', '20px');
                    $('#ivory').insertAfter( "#modesty" );
                    $('#ivory').css('margin-top', '20px');
                    $('#coastal').insertAfter( "#ivory" );
                    $('#coastal').css('margin-top', '20px');

                    $('#cool').css('display', 'block');
                    $('#ivory').css('display', 'block');
                    $('#emerald').css('display', 'block');
                    $('#bear').css('display', 'block');
                    $('#modesty').css('display', 'block');
                    $('#coastal').css('display', 'block');
                }
            })) {
        };

    });
        
});
