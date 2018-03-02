/**
 * file: results.js
 * project: partyDipper
 * author: eoin 17252409
 * email: eoingoslin@gmail.com
 * created: Sunday, 18th February 2018 2:10:12 pm
 * modified: Sunday, 18th February 2018 3:12:15 pm
 * filepath: /home/eoin/Desktop/partyDipper/results.js
 * comment: comment
 */
//
var config = {
    apiKey: "AIzaSyBE7BClxeC_w5xzMr4pAIXL9e4P0UU_rYo",
    authDomain: "partydipper.firebaseapp.com",
    databaseURL: "https://partydipper.firebaseio.com",
    projectId: "partydipper",
    storageBucket: "partydipper.appspot.com",
    messagingSenderId: "782771527688"
  };
  firebase.initializeApp(config);

//   var Name = document.getElementById('name');
  var list = document.getElementById('name');
  var isFirst = true;
  
  

var query = firebase.database().ref("messages").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
       
        
        
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
      var name_val = childSnapshot.val().name;//the value eoin
      var pub_val = childSnapshot.val().Pubs;//getting the pub value from the firebase
      var day_val = childSnapshot.val().DayOfWeek;
      var budget_val = childSnapshot.val().budget;

    //   $("#name").append(name_val);
      $('#name').append( '<li>' + name_val + '</li>' );
      $('#pubs').append( '<li>' + pub_val + '</li>' );
      $('#dayofweek').append( '<li>' + day_val + '</li>' );
      $('#budget').append( '<li>' + budget_val + '</li>' );
      
   
   
  });
});

//  var name_val = childSnapshot.val().Name;
//   var id_val = childSnapshot.val().AssignedID;

//   $("#name").append(name_val);
//   $("#id").append(id_val);

// dbRef.on('value', snap=> bigOne.innerText = snap.val());
// var list = document.getElementById('demo');

// var firstname = $('#firstname').val();

// $('ol').append( '<li>' + firstname + '</li>' );