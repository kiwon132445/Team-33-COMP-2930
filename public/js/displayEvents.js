
var authRef = firebase.auth();
authRef.onAuthStateChanged(function(user) {
    var firebaseRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/eventsCreated")
    firebaseRef.on('value', snap => {

        dbRef = JSON.stringify(snap.val(), null, 3) 
        var list = JSON.parse(dbRef);

            if (list === null){
                document.getElementById("table").style.display = "none";
                var error = document.createElement('h1');
                var textError = document.createTextNode("Nothing To SHOW!");
                error.appendChild(textError);
                var mainDiv = document.getElementById('dbInfo');
                mainDiv.appendChild(error);
            }

        else {
            for (var i = 1; i < list.length; i++){
                
                
                if (list[i] !== null){

                    var eventRef = firebase.database().ref().child('events/' + list[i]);

                    let idOfEvent = list[i];                    

                    eventRef.on('value', snap => {

                        eventRef = JSON.stringify(snap.val(), null, 3);
                        var list1 = JSON.parse(eventRef);

                        var createTr = document.createElement('ul');
                        createTr.className += 'eventData'

                        var createTd = document.createElement('li');
                        var nameHeader = document.createElement('h3');
                        var node = document.createTextNode(list1.eventname);
                        console.log(list1.eventname);
                        nameHeader.appendChild(node)
                        createTd.className += 'eventName'
                        createTd.appendChild(nameHeader);

                        var createTd2 = document.createElement('li');
                        var node1 = document.createTextNode(list1.eventDetails);
                        createTd2.className += 'eventDetails'
                        createTd2.appendChild(node1);

                        var createTd3 = document.createElement('li');
                        var node2 = document.createTextNode(list1.day + ' ' + list1.month + ' ' + list1.year);
                        createTd3.className += 'eventDate'
                        createTd3.appendChild(node2);

                        var createTd4 = document.createElement('li');
                        var node3 = document.createTextNode(list1.eventStartTime + ' to ' + list1.eventEndTime);
                        createTd4.className += 'eventTime'
                        createTd4.appendChild(node3);

                        var createTd5 = document.createElement('li');
                        var node4 = document.createTextNode(list1.eventLocation);
                        createTd5.className += 'eventLocation'
                        createTd5.appendChild(node4);
                        
                        var createTd6 = document.createElement('li');
                        var node5 = document.createTextNode(idOfEvent);
                        createTd6.appendChild(node5);
                        createTd6.className += 'eventID';

                        var createTd7 = document.createElement('li');
                        var editButton = new Image(20, 20);
                        editButton.src = '../static/images/edit_hollow.svg';
                        editButton.className += 'editButton'
                        var deleteButton = new Image(20, 20);
                        deleteButton.src = '../static/images/delete_hollow.svg';
                        deleteButton.className += 'deleteButton'
                        createTd7.appendChild(deleteButton);
                        createTd7.appendChild(editButton);
                        createTd7.className += 'modifyButtons';

                        createTr.appendChild(createTd);
                        createTr.appendChild(createTd2);
                        createTr.appendChild(createTd3);
                        createTr.appendChild(createTd4);
                        createTr.appendChild(createTd5);
                        createTr.appendChild(createTd6);
                        createTr.appendChild(createTd7);
                        var element = document.getElementById('dbInfo');
                        element.prepend(createTr);
                    });
                    
                }       
            }
        }
    });
});

