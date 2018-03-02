/**
 * file: main.js
 * project: lab3
 * author: eoin 17252409
 * email: eoingoslin@gmail.com
 * created: Tuesday, 20th February 2018 11:45:19 am
 * modified: Saturday, 24th February 2018 5:44:35 pm
 * filepath: /home/eoin/Desktop/WebDevLab/lab3/main.js
 * comment: comment
 */
//
// get value of row by 

// rows are rows, cells are each column on that row and
// use .innerHTML to access that cell's value

var finalGrade = document.getElementById('grade1');
var finalGrade2 = document.getElementById('grade2');
var display = document.getElementById('display');
var textarea = document.getElementById('textarea');
var message = "The total of non-submitted assignments is:  ";
function getAverage() {

    var sum = 0;
    var avg = 0;
    var notSubmit = 0;
    var table = document.getElementById('myTable');
   
    for(var i = 1; i <= 10;i++){


        for(var j = 2; j < table.rows[1].cells.length-1; j++) {
            
            var numCheck = parseInt(table.rows[i].cells[j].innerHTML);
            if(Number.isInteger(numCheck)){
                sum = sum + parseInt(table.rows[i].cells[j].innerHTML);
                table.rows[i].cells[j].style.backgroundColor = "white";
                
                
            } else {

                notSubmit++;
                display.innerHTML = message + notSubmit;
               table.rows[i].cells[j].innerHTML = "";
                table.rows[i].cells[j].style.backgroundColor = "yellow";

                
            }
     
     
        }//inner loop
        avg = sum/5;
        avg = Math.round((avg*100) / 100);
        if(avg < 40){
            
         
            table.rows[i].cells[7].style.color = "white";
            table.rows[i].cells[7].style.backgroundColor = "red";
            table.rows[i].cells[7].innerHTML = avg + "%";

        } else {
            table.rows[i].cells[7].style.color = "black";
            table.rows[i].cells[7].style.backgroundColor = "white";
            table.rows[i].cells[7].innerHTML = avg + "%";

        }
        
        sum = 0;
        
        
    }//outer loop

    
}

var table = document.getElementById('myTable');
table.addEventListener("input", function(e) {
    if(e.target && e.target.nodeName == "TD") {

        textarea.innerHTML = '';
        // notSubmit = 0;
        getAverage();
        printCSV();

    }
    
    
});

function printCSV() {
   
    textarea.innerHTML = '';
    for(var i = 0; i <= 10 ;i++){


        for(var j = 0; j < 8; j++) {
            
           var name = table.rows[i].cells[j].innerHTML;
            textarea.innerHTML += name + ",";
           
            
     
     
        }

    
    
}

}









