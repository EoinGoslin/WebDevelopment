/**
 * file: main.js
 * project: partyDipper
 * author: eoin 17252409
 * email: eoingoslin@gmail.com
 * created: Tuesday, 13th February 2018 2:48:27 pm
 * modified: Wednesday, 14th February 2018 2:29:27 pm
 * filepath: /home/eoin/Desktop/partyDipper/main.js
 * comment: comment
 */
//
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBE7BClxeC_w5xzMr4pAIXL9e4P0UU_rYo",
    authDomain: "partydipper.firebaseapp.com",
    databaseURL: "https://partydipper.firebaseio.com",
    projectId: "partydipper",
    storageBucket: "partydipper.appspot.com",
    messagingSenderId: "782771527688"
  };
  firebase.initializeApp(config);

  
  //get all the elements
  
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnSignIn = document.getElementById('btnSignIn');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

//attach a clickEvent to login button
btnSignIn.addEventListener('click', e => {
    //get email and password fields
    const email = txtEmail.value;
    const pass = txtEmail.value;
    const auth = firebase.auth();
    //Then sign in
   var promise =  auth.signInWithEmailAndPassword(email, pass);//send off to firebase authentication
   promise.catch(e => console.log(e.message));
    
});

//add click event to sign up button
btnSignUp.addEventListener('click', e => {
    //should check for email
    const email = txtEmail.value;
    const pass = txtEmail.value;
    const auth = firebase.auth();
    //Then sign in
   var promise =  auth.createUserWithEmailAndPassword(email, pass);//send off to firebase authentication
   promise.catch(e => alert(e.message));
    
    
});

//add a LogOut function
btnLogout.addEventListener ('click', e => {
    firebase.auth().signOut();
});

//add realtime authentication listener
//will show every time user state changes
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser);
    } else {
        alert('not logged in');
    }
});


  

