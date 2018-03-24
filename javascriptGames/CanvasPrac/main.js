// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext("2d");
// ctx.fillStyle = "#FF0000";
// //This means: Start at the upper-left corner (0,0) 
// //and draw a 150x75 pixels rectangle.
// ctx.fillRect(0,0,150,75);
// //define starting point
// //move to 200, 100
// //actually draw the line with stroke method
// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();

// //to draw a circle
// ctx.beginPath();
// ctx.arc(95,50,40,0,2*Math.PI);
// ctx.stroke();

//creating a rectangle with a gradient 

var can = document.getElementById('gradientC');
var ct = can.getContext("2d");

// var grd=ct.createLinearGradient(0,0,200,0);
var grd=ct.createRadialGradient(50,0,200,0, 100, 50);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ct.fillStyle=grd;
ct.fillRect(10,10,150,80);

//drawing text on canvas
/*font - defines the font properties for the text
fillText(text,x,y) - draws "filled" text on the canvas
strokeText(text,x,y) - draws text on the canvas (no fill)*/
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// ctx.font = "30px Arial";
// ctx.fillText("Hello World",10,50);
// ctx.strokeText("hellooooo", 20, 30);
// ctx.fillStyle = "red";
// ctx.textAlign = "center";
// ctx.fillText("Hello World", canvas.width/2, canvas.height/2); 

