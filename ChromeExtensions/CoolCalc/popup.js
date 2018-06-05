var result;
var number1;
var number2;
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {

        var time = new Date().toLocaleTimeString();

   alert('Hello the current time is: ' + time);
   alert('Hello the current time is: ' + time);
   

//    var num = document.getElementById("number1").value;
//    alert(num);
})
var addBtn = document.getElementById('add');
addBtn.addEventListener('click', function() {

    





    var num1 =  document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    number1 = parseInt(num1);
    number2 = parseInt(num2);
    document.getElementById("result").innerHTML = number1+number2;
    alert(number1 + number2);

})


});

