var css = document.querySelector("h3");
//where the user controlled colour will be shown

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector("#randomGenerator");
var buttonClicked = 0;

setgradient();


//listen to anytime input changes and grab new value
function setgradient() {

    body.style.background = "linear-gradient(to right, " 
    + color1.value
      + ", " 
      + color2.value
       + ")";

       css.textContent = body.style.background + ";";
}
//in parameters is a (listener, function) and so the function automatically runs
//That is why do not need function call brackets as will be run anyway
color1.addEventListener("input", setgradient);

color2.addEventListener("input", setgradient);

function getRandom() {
      //every zero is replaced with a random hex string 
    var randomCol = "#000000".replace(/0/g,function(){
        return (~~(Math.random()*16)).toString(16);
    });

    return randomCol;
}


randomButton.addEventListener("click", function(){
console.log(getRandom());
color1.value = getRandom();
color2.value = getRandom();
setgradient();


});




