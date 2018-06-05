var myGamePiece;
var myObstacles = [];
var score;
var mySound;
//for background music
var myMusic;
var soundEnded = false;
var audio;

//To define multiple obstacles, 
//first declare the obstacle variable as an array.


var myObstacles = [];

var launchButton = document.getElementById('startButton');

document.addEventListener('DOMContentLoaded', function() {
    var startBtn = document.getElementById('startButton');
    startBtn.addEventListener('click', function() {
    startGame();
})
});

document.addEventListener('DOMContentLoaded', function() {
    var startBtn = document.getElementById('playAgain');
    startBtn.addEventListener('click', function() {
        
        myGameArea.stop();
        myGameArea.clear();
        startGame();
})
});

document.addEventListener('DOMContentLoaded', function() {
    var startBtn = document.getElementById('startButton');
    startBtn.addEventListener('mouseover', function() {
        audio = new Audio('doorOpen.wav');
        audio.play();
        this.innerHTML = "Launch!";
})
});

document.addEventListener('DOMContentLoaded', function() {
    var startBtn = document.getElementById('startButton');
    startBtn.addEventListener('mouseout', function() {
        audio = new Audio('doorOpen.wav');
        audio.play();
        this.innerHTML = "Play Space Adventure!";
})
});

document.addEventListener('DOMContentLoaded', function() {
    var startBtn = document.getElementById('playAgain');
    startBtn.addEventListener('mouseout', function() {
        audio = new Audio('doorOpen.wav');
        audio.play();
        this.innerHTML = "Play Again?";
})
});

document.addEventListener('DOMContentLoaded', function() {
    var startBtn = document.getElementById('playAgain');
    startBtn.addEventListener('mouseover', function() {
        audio = new Audio('doorOpen.wav');
        audio.play();
        this.innerHTML = "Launch!";
})
});


function startGame() {
    document.getElementById("playAgain").style.display = "none";
        document.getElementById("playAgain").style.visibility = "hidden";
        document.getElementById("scoreContainer").style.display = "none";
        document.getElementById("scoreContainer").style.visibility = "hidden";
    myGamePiece = new component(30, 30, "rocket.png", 10, 120, "image");
    myScore = new component("30px", "Consolas", "white", 280, 40, "text");
    myObstacle = new component(10, 200, "blue", 300, 120); 
    mySound = new sound("explosion.mp3");
    myMusic = new sound("spacemusic.wav");
    myMusic.play();
    myGameArea.start();
    document.getElementById('startButton').style.visibility='hidden';

}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.canvas.style.backgroundColor = "black";
        this.canvas.setAttribute("class", "gameScreen");
       
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false; 
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    },

    drawMessage : function() {
        myGameArea.stop();
        myGameArea.clear();
        stopMusic();
        canvas : document.createElement("canvas"),
        this.canvas.setAttribute("class", "message");
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.canvas.style.backgroundColor = "white";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[1]);
        this.context.font = "50px monospace";
        // this.context.fillText("Game Over", 10, 50);
        this.context.fillStyle = "black";
        
        this.context.fillText("Game Over", 120, this.canvas.height/2);
        document.getElementById("finalMessage").style.visibility="visible";
        var ptag = document.getElementById("finalMessage");
        document.getElementById("playAgain").style.display = "inline";
        document.getElementById("playAgain").style.visibility = "visible";
        document.getElementById("scoreContainer").style.visibility = "visible";
        document.getElementById("scoreContainer").style.display = "inline";
        if(score <=500){
            document.getElementById('messagePlace').innerHTML = "Your score was " + score + " , play again and get some practice!";
        } else {
            document.getElementById('messagePlace').innerHTML = "Well done! Your score was " + score;
        }
        myGameArea.frameNo = 0;
    }

    

    
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
      }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y; 
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else if(this.type == "text"){
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
          } else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY; 
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
               (mytop > otherbottom) ||
               (myright < otherleft) ||
               (myleft > otherright)) {
           crash = false;
        }
        return crash;
    } 
}


function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            mySound.play();
            
            myGameArea.frameNo = 0;
            myGameArea.clear();
            myGameArea.stop();
            myGameArea.drawMessage();
            

            
            
            
            
            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 100;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
   
    myScore.text="SCORE: " + myGameArea.frameNo;
    score = myGameArea.frameNo;
    
    myScore.update();
    myGamePiece.newPos(); 
    myGamePiece.update();

   
    
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0; 
    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -1; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 1; }
    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -1; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 1; }
    
   
}

// function to clear the canvas ( http://coursesweb.net/ )
// cnv = the object with the canvas element
function clearCanvas(cnv) {
    var ctx = cnv.getContext('2d');     // gets reference to canvas context
    ctx.beginPath();    // clear existing drawing paths
    ctx.save();         // store the current transformation matrix
  
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, cnv.width, cnv.height);
  
    ctx.restore();        // restore the transform
  }
  function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}



//everytime point song ends is reached, it will start again
//The function playBackground is only called every interval

function playBackground() {
    myMusic.play();
    myGameArea.interval = setInterval(playBackground, 2000);
}

function stopMusic(){
    myMusic.stop();
}




