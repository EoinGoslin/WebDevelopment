document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {

        var time = new Date().toLocaleTimeString();

   alert('Hello the current time is: ' + time);
})
});




// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById("checkPage").addEventListener("click", handler);
//   });
  
  // The handler also must go in a .js file
//   function handler() {
//     /* ... */
//     alert("hello");
//   }

//   document.getElementById('clickme').addEventListener('click', hello);