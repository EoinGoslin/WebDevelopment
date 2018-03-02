/**
 * file: voting.js
 * project: partyDipper
 * author: eoin 17252409
 * email: eoingoslin@gmail.com
 * created: Wednesday, 14th February 2018 1:36:19 pm
 * modified: Wednesday, 14th February 2018 7:34:08 pm
 * filepath: /home/eoin/Desktop/partyDipper/voting.js
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



  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      //the user is logged in
      var user = firebase.auth().currentUser;
      var current = user.uid;
      var messagesRef = firebase.database().ref('messages').child(current);


  document.getElementById('votingForm').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();

var name = getInputVal('name');
var Pubs = getInputVal('Pubs');
var DayOfWeek = document.querySelector('input[name="dayofweek"]:checked').value; 
var budget = document.querySelector('input[name="budget"]:checked').value; 
saveMessage(name, Pubs, DayOfWeek, budget);
 // Show alert
 document.querySelector('.alert').style.display = 'block';

 // Hide alert after 3 seconds
 setTimeout(function(){
   document.querySelector('.alert').style.display = 'none';
 },3000);

document.getElementById('votingForm').reset();

  }

  function saveMessage(name, Pubs, DayOfWeek, budget){
  
    messagesRef.set({
     
      budget: budget,
      Pubs : Pubs,
      DayOfWeek: DayOfWeek,
      name: name
     
     
    });
  }

  btnLogout.addEventListener ('click', e => {
    firebase.auth().signOut();
    console.log('user signed out');
    
});

  //checks if user is logged in 

  

function getInputVal(id){
    return document.getElementById(id).value;
  }
      

        console.log(firebaseUser);
        console.log('user still logged');
    } else {
        alert('Logged out successfully');
    }
});


  
 
  



  
  
 
  

