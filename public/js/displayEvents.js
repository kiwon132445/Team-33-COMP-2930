 
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

                            for (var i = 0; i < list.length; i++){

                               
                                if (list[i] !== null){
                                    var eventRef = firebase.database().ref().child('events/' + list[i]);

                                     eventRef.on('value', snap => {

                                        eventRef = JSON.stringify(snap.val(), null, 3);
                                        var list1 = JSON.parse(eventRef);

                                        var createTr = document.createElement('tr');

                                        var createTd = document.createElement('td');
                                        var node = document.createTextNode(list1.eventname);
                                        createTd.appendChild(node);

                                        var createTd2 = document.createElement('td');
                                        var node1 = document.createTextNode(list1.day);
                                        createTd2.appendChild(node1);

                                        var createTd3 = document.createElement('td');
                                        var node2 = document.createTextNode(list1.month);
                                        createTd3.appendChild(node2);

                                        var createTd4 = document.createElement('td');
                                        var node3 = document.createTextNode(list1.eventDetails);
                                        createTd4.appendChild(node3);

                                        var createTd5 = document.createElement('td');
                                        var node4 = document.createTextNode(list1.eventStartTime);
                                        createTd5.appendChild(node4);

                                        var createTd6 = document.createElement('td');
                                        var node5 = document.createTextNode(list1.eventEndTime);
                                        createTd6.appendChild(node5);

                                        var createTd7 = document.createElement('td');
                                        var node6 = document.createTextNode(list1.eventLocation);
                                        createTd7.appendChild(node6);

                                        var createTd8 = document.createElement('td');
                                        var node7 = document.createTextNode(list1.year);
                                        createTd8.appendChild(node7);


                                        createTr.appendChild(createTd);
                                        createTr.appendChild(createTd2);
                                        createTr.appendChild(createTd3);
                                        createTr.appendChild(createTd4);
                                        createTr.appendChild(createTd5);
                                        createTr.appendChild(createTd6);
                                        createTr.appendChild(createTd7);
                                        createTr.appendChild(createTd8);
                                        var element = document.getElementById('table');
                                        element.appendChild(createTr);


                                        

                        });
                                    
                                }

                                
                            }
                        }


                      });


                         

            });

        