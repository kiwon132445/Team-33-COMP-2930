
/**
 * ---
 * This chunk of code grabs todays date for comparison to the days
 * of the days of the events
 */

/**
 * This date is used for comparing todays date to the events date
 * The year is modified in this one to be in 'yy' format so it breaks 
 * when checking the Absolute Date (from Jan 1, 1970)
 */
var currentDate = new Date();
//This date is used for obtaining the absolute date of today
var currentDate2 = new Date();

/**
 * Date() gives years in a 'yyyy' format, but we need it in a 'yy' format
 * so we change it to that with this.
 */
currentDate.setFullYear(currentDate.getFullYear() - 2000)
//Variable for todays date (day) in the month
var currentDay = currentDate.getDate();
//Date() objects give dates as a number, so this array converts it to the string of the correct month
var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
//Variable for todays month
var currentMonth = month[currentDate.getMonth()];
//Variable for todays year in 'yy' format
var currentYear = currentDate.getFullYear();
console.log(currentDay)
console.log(currentMonth)
console.log(currentYear)
//oneDay is used for obtaining the absolute date of today (from Jan 1, 1970)
var oneDay = 24*60*60*1000;


/**
 * From here on, we grab the actual event data from firebase 
 * and prepare to print it out onto the page
 */
var authRef = firebase.auth();
authRef.onAuthStateChanged(function(user) {
    //Grabs the users events
    var firebaseRef = firebase.database().ref("users/" + firebase.auth().currentUser.uid + "/eventsCreated")
    firebaseRef.on('value', snap => {

        //Puts all of the users events into a JSON object
        dbRef = JSON.stringify(snap.val(), null, 3) 
        var list = JSON.parse(dbRef);

        /**
         * If the user has NO events in general (i.e a new user), 
         * this will display
         */
        if (list === null){
            var error = document.createElement('h1');
            var textError = document.createTextNode("Nothing To Show!");
            error.appendChild(textError);
            var mainDiv = document.getElementById('dbInfo').style.display = "none";
            document.body.appendChild(error)
        }

        /**
         * If the user DOES have events,
         * It will go through the JSON object of events (list) with a 'for loop' and
         * check if its today or within a week (past and upcoming) then
         * it will create an Unordered List with the events details
         * and paste it up in the correct tab (today, upcoming, or past)
         */
        else {
            /**
             * count is meant to check whether any events have actually been printed;
             * however, it is currently bugged.
             */
            var count = 0;
            for (var i = 1; i < list.length; i++){
                
                //If the current event is NOT empty, it will continue.
                if (list[i] !== null){
                    //Compares the ID obtained from the user with ID's in the events table and grabs that item
                    var eventRef = firebase.database().ref().child('events/' + list[i]);
                    let idOfEvent = list[i];                    

                    //
                    eventRef.on('value', snap => {

                        /**
                         * Grabs the current item, and turns it into a JSON object named 'list1'
                         * so its data can be used in the lists
                         */
                        eventRef = JSON.stringify(snap.val(), null, 3);
                        var list1 = JSON.parse(eventRef);
                        
                        //Get the absolute date of the events date (from Jan 1, 1970)
                        let dayOfEvent = list1.day;
                        let monthOfEvent = list1.month;
                        let yearOfEvent = parseInt(list1.year) + 2000;
                        let monthEventNum;
                        for (j = 0; j < month.length; j++){
                            if (monthOfEvent == month[j]){
                                monthEventNum = j;
                                break;
                            }
                        }
                        let tempEventDate = new Date(yearOfEvent, monthEventNum, dayOfEvent);
                        //diffDays gets the number of days from the current date to the events date
                        var diffDays = Math.floor((currentDate2.getTime() - tempEventDate.getTime())/(oneDay));
                        
                        /**
                         * If the event is within 7 days (past or future)
                         * then it will create an Unordered List with the
                         * events info so it can be printed onto the page
                         */
                        if (diffDays >= -7 && diffDays <= 7) {

                            //Creates the ul for the event
                            var createTr = document.createElement('ul');
                            createTr.className += 'eventData'

                            //Creates the li for the name of the current event
                            var createTd = document.createElement('li');
                            var nameHeader = document.createElement('h3');
                            var node = document.createTextNode(list1.eventname);
                            nameHeader.appendChild(node)
                            createTd.className += 'eventName'
                            createTd.appendChild(nameHeader);

                            //Creates the li for the details of the current event
                            var createTd2 = document.createElement('li');
                            var node1 = document.createTextNode(list1.eventDetails);
                            createTd2.className += 'eventDetails'
                            createTd2.appendChild(node1);

                            //Creates the li for the date of the event
                            var createTd3 = document.createElement('li');
                            var node2 = document.createTextNode(list1.day + ' ' + list1.month + ' 20' + list1.year);
                            createTd3.className += 'eventDate'
                            createTd3.appendChild(node2);

                            //Creates the li for the events start and end time
                            var createTd4 = document.createElement('li');
                            var node3 = document.createTextNode(list1.eventStartTime + ' to ' + list1.eventEndTime);
                            createTd4.className += 'eventTime'
                            createTd4.appendChild(node3);

                            //Creates the li for the events location
                            var createTd5 = document.createElement('li');
                            var node4 = document.createTextNode(list1.eventLocation);
                            createTd5.className += 'eventLocation'
                            createTd5.appendChild(node4);
                            
                            /**
                             * Grabs the id of the event and gives it a classname so it
                             * can be hidden with css
                             * This is currently needed for editing the event
                             */
                            var createTd6 = document.createElement('li');
                            var node5 = document.createTextNode(idOfEvent);
                            //IMPORTANT: Try removing node5 from the list, but keeping node5 as a variable
                            createTd6.appendChild(node5);
                            createTd6.className += 'eventID';

                            //Create the li for the edit and delete buttons 
                            var createTd7 = document.createElement('li');
                            //Creates an edit button
                            var editButton = new Image(20, 20);
                            editButton.src = '../static/images/edit_hollow.svg';
                            editButton.className += 'editButton'
                            //When this button is clicked, it will open the edit event panel
                            editButton.addEventListener("click",() => {
                                editEvent(node5.nodeValue)
                            })
                            editButton.setAttribute("onclick", "editToggle()");

                            //Creates a delete button
                            var deleteButton = new Image(20, 20);
                            deleteButton.src = '../static/images/delete_hollow.svg';
                            deleteButton.className += 'deleteButton'
                            //When this button is clicked, it will ask if you want to delete this
                            //Then it will run the delete event function
                            deleteButton.addEventListener("click",() => {
                                let choice = confirm("Do you wish to delete this event?")
                                if (choice === true) {
                                    deleteEvent(node5.nodeValue);
                                }
                            })
                            //Appends the buttons to the li
                            createTd7.appendChild(deleteButton);
                            createTd7.appendChild(editButton);
                            createTd7.className += 'modifyButtons';

                            //Append all list items to the unordered list
                            createTr.appendChild(createTd);
                            createTr.appendChild(createTd2);
                            createTr.appendChild(createTd3);
                            createTr.appendChild(createTd4);
                            createTr.appendChild(createTd5);
                            createTr.appendChild(createTd6);
                            createTr.appendChild(createTd7);

                            /**
                             * From here on the event gets sorted by date and is placed in
                             * the correct location
                             */
                             //If the event is on the current day it is put in Todays Events
                            if (diffDays == 0){
                                var today = document.getElementById('todaysEvents');
                                today.prepend(createTr);
                                count++;
                            } 
                            //If the event is within a week ago, it will be put in Past Events
                            else if (diffDays <= 7 && diffDays > 0){
                                var previous = document.getElementById('pastEvents');
                                previous.prepend(createTr);
                                count++;
                            } 
                            //If the event is coming up within a week, it will be put in Upcoming Events
                            else if (diffDays >= -7 && diffDays < 0){
                                var upcoming = document.getElementById('upcomingEvents');
                                upcoming.prepend(createTr);
                                count++;
                            }

                            /**
                             * This is meant to check if anything was added at all
                             * It is currently broken, but the idea is that if an event
                             * was appended to the body, it would add 1 to count,
                             * So if count = 0 by the end of it, it would run this if statement 
                             * that would print "Nothing to Show!" on the page
                             */
                            if (count == 0){
                                var error = document.createElement('h1');
                                var textError = document.createTextNode("Nothing To Show!");
                                error.appendChild(textError);
                                var mainDiv = document.getElementById('dbInfo');
                                mainDiv.appendChild(error);
                            }
                        }
                    });
                }   
            }              
        }
        
    });
});


