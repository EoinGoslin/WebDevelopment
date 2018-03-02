/**
 * file: main.js
 * project: actualContactForm
 * author: eoin 17252409
 * email: eoingoslin@gmail.com
 * created: Tuesday, 13th February 2018 10:26:54 am
 * modified: Wednesday, 14th February 2018 11:40:03 am
 * filepath: /home/eoin/Desktop/firebase/actualContactForm/main.js
 * comment: comment
 */
//
var config = {
    apiKey: "AIzaSyBMriKZgUpZEskYqpyv0MYTO-sOwoGEN74",
    authDomain: "contactform-de16c.firebaseapp.com",
    databaseURL: "https://contactform-de16c.firebaseio.com",
    projectId: "contactform-de16c",
    storageBucket: "contactform-de16c.appspot.com",
    messagingSenderId: "510651482888"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}


/*Get every */

var query = firebase.database().ref("messages").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      var key = childSnapshot.key;
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
   
      alert(childData.email);
  });
});