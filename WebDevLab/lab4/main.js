/**
 * file: main.js
 * project: cookiePractice
 * author: eoin 17252409
 * email: eoingoslin@gmail.com
 * created: Tuesday, 20th February 2018 11:45:19 am
 * modified: Monday, 5th March 2018 6:38:46 pm
 * filepath: /run/user/1000/gvfs/sftp:host=159.65.27.105,user=vmuser/home/vmuser/cookiePractice/main.js
 * comment: comment
 */
//
// get value of row by 

// rows are rows, cells are each column on that row and
// use .innerHTML to access that cell's value
//ALL BONUS QUESTIONS ATTEMPTED


var table = document.getElementById('myTable');
var counter = 0;
var colCounter = 0;
var AssignCounter = 0, id = 0;
var name = "";
var rowDeleted = false;
var colDeleted = false;
var assignArray=[];
var colArray = [];
var rowLocation = 0, colLocation = 0;
var times = 1, locat = 3;
var message = "The total of non-submitted assignments is:  ";
var length = table.rows[0].cells.length;
function getAverage() {
   
    var sum = 0;
    var avg = 0;
    var notSubmit = 0;
   
    var amountAssignments = table.rows[0].cells.length-3;
    

//To do, when getAvg is called then where the last %
//was, needs to be cleared



    for(var i = 1; i < table.rows.length;i++){//will run 3 times if 4 rows
        
        //console.log(table.rows.length);
        for(var j = 2; j < table.rows[1].cells.length-1; j++) {//value is 3
         
            var numCheck = parseInt(table.rows[i].cells[j].innerHTML);
            if(Number.isInteger(numCheck) && numCheck <=100){
                sum = sum + parseInt(table.rows[i].cells[j].innerHTML);
               table.rows[i].cells[j].style.backgroundColor = "white";
                
                
            } else {
                table.rows[i].cells[j].innerHTML = "";
                
               table.rows[i].cells[j].style.backgroundColor = "yellow";
            }
     
     
        }//inner loop
        avg = sum/amountAssignments;
        avg = Math.round((avg*100) / 100);
        if(avg < 40) {
           table.rows[i].cells[table.rows[i].cells.length-1].style.color = "white";
           table.rows[i].cells[table.rows[i].cells.length-1].style.backgroundColor = "red";
        } else {
            table.rows[i].cells[table.rows[i].cells.length-1].style.color = "black";
            table.rows[i].cells[table.rows[i].cells.length-1].style.backgroundColor = "white";
        }
        table.rows[i].cells[table.rows[i].cells.length-1].innerHTML = avg + "%";
        sum = 0;
       
    }//outer loop
  
}
function newRow() {

    var length = table.rows[0].cells.length;
    var row = table.insertRow(table.rows.length);
    //stable.rows[table.rows.length].cells[0].addEventListener("click", highlightRow(td));
    //row.setAttribute("class", "highlight");
    
    for(var i = 0; i < length-1; i++){
        
        //var row = table.insertRow(-1);
        
        var newCell = row.insertCell(i);
        if(i === 0){
            newCell.setAttribute("onclick", "highlightRow(this)");
        }
        if(i > 1) {
            newCell.style.textAlign = "right";
           // newCell.setAttribute("class", "usual");
        }
        newCell.contentEditable = true;
        //newCell.setAttribute("class", "usual");
        //row.insertCell(-1);

    }
    var newCell = row.insertCell();
    newCell.style.textAlign = "right";
    getAverage();
        
}

function newColumn() {
  //times is 1, locat is 3
        
        times++;
        var location = table.rows[0].cells.length-1;
        //alert(location);
        
        //times now 2
        var headerCell = document.createElement("HEADER");
        headerCell.innerHTML = "Assignment " + times;
        table.rows[0].insertCell(location);//insert at space 3 first time
        table.rows[0].cells[location].appendChild(headerCell);
        headerCell.setAttribute("onclick", "highlightAssignments(this)");
        headerCell.contentEditable = true;
        locat++;
       length = table.rows[0].cells.length;
        var i = 1;
        
       
        for(i = 1; i < table.rows.length; i++){//go through all the rows and add a cell at end of each
            
            // try{
                var row = table.rows[i];
            
                // row.insertCell(-1);
                var newCell = row.insertCell(row.cells.length-1);
                
                    newCell.style.textAlign = "right";
                
                newCell.contentEditable = true;
				//row.contentEditable = "true";//insert a cell at end of row 1
           
            
            // }catch(e){
            //     if(e){
            //     // If fails, Do something else
            //     break;
            //     }
            // }
           
        }
        
        
        getAverage();  
      
}
//function allows for average to be calculated
//without touching the button
var table = document.getElementById('myTable');
table.addEventListener("input", function(e) {
    getAverage();
   
   
});

function TabletoCookie() {
      
//save how many columns and how many rows there were 
var lengthColumn = table.rows[0].cells.length;
var lengthRow = table.rows.length;
document.cookie = "lengthColumn="+ table.rows[0].cells.length+";";
document.cookie = "lengthRow="+ table.rows.length+";";
var unique = 0;//the cookies unique name 
    for(var i = 1; i < table.rows.length;i++){

        for(var j = 0; j < table.rows[0].cells.length;j++){

            createCookie(unique, table.rows[i].cells[j].innerHTML,365);
            unique++;

        }

    }

    location.reload();

}

function getTable() {
    
    
   alert(document.cookie);
   var ColumnLength = readCookie('lengthColumn');
    var cookies = document.cookie.split(';');
    //get from = then give one after it is the value
    //cookies[0] will store column length
    //cookies[1] will store row length
    //alert(cookies[1].substr(cookies[1].indexOf('=')+1, ));

    var numberColumns = cookies[0].substr(cookies[0].indexOf('=')+1, );

   // alert(numberColumns);
    var numberRows = cookies[1].substr(cookies[1].indexOf('=')+1, );
    for(var i = 0; i < numberRows-2;i++){

       newRow();
    }
    for(var i = 0; i <numberColumns-4;i++){
        newColumn();
    }
    
    // alert(cookies.length);
    var counter = 2;
    for(var i = 1; i < table.rows.length; i++){

        for(var j = 0; j < table.rows[0].cells.length;j++){

            table.rows[i].cells[j].innerHTML = cookies[counter].substr(cookies[counter].indexOf('=')+1, );
            counter++;
        }



    }
    
    
    
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toUTCString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	//createCookie(name,"",-1);
	document.cookie = name + '=;expires=Thu, 17 Jan 1980 00:00:10 GMT;';
}

function deleteCookies() {
    //need to set expiry date of these two cookies to past so will be removed from cookie string
	eraseCookie('lengthColumn');
	eraseCookie('lengthRow');
 document.cookie.split(";").forEach(function(c) { //split each cookies at its ; and cycle through each
    //replacing so that they all expire
    //c will be the cookie string
    //This function will not remove the length of Column and Row cookie
document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");


});


  
}

function highlightRow(td) {
var rowNumber = td.parentNode.rowIndex;

        if(counter%2===0) {
            for(var j = 0; j < table.rows[0].cells.length;j++){
                table.rows[rowNumber].cells[j].style.backgroundColor = "blue";
                if(j ===table.rows[0].cells.length-1) {
                table.rows[rowNumber].cells[j].style.color = "white";
                }
            }
          
        }
            else {
                for(var j = 0; j < table.rows[0].cells.length;j++){
                    table.rows[rowNumber].cells[j].style.backgroundColor = "white";
                    if(j ===table.rows[0].cells.length-1) {
                        table.rows[rowNumber].cells[j].style.color = "black";
                        }
                }
               
            }

        

        counter++;
        if(counter === 10) {
            counter ===0;
        }
     
}

function highlightFirstAssignment(td) {

    
    var colNumber = td.cellIndex;

     if(colCounter%2===0) {
        for(var j = 1; j < table.rows.length;j++){
            table.rows[j].cells[colNumber].style.backgroundColor = "green";
            
        }
      
    }
        else {
            for(var j = 1; j < table.rows.length;j++){
                table.rows[j].cells[colNumber].style.backgroundColor = "white";
                if(j ===table.rows[0].cells.length-1) {
            table.rows[j].cells[colNumber].style.color = "black";
                }
                
            }
           
        }

    

        colCounter++;
    if(colCounter === 10) {
        colCounter ===0;
    }

}


function highlightAssignments(td) {
    
    var AssignNumber = td.parentNode.cellIndex;

    if(AssignNumber === 0||AssignNumber===1) {

    } else {

    

    if(AssignNumber!= table.rows[0].cells.length-1) {
    
    if(AssignCounter%2===0) {
        for(var j = 1; j < table.rows.length;j++){
            table.rows[j].cells[AssignNumber].style.backgroundColor = "green";
            
        }
      
    }
        else {
            for(var j = 1; j < table.rows.length;j++){
                table.rows[j].cells[AssignNumber].style.backgroundColor = "white";
                if(j ===table.rows[0].cells.length-1) {
            table.rows[j].cells[AssignNumber].style.color = "black";
                }
                
            }
           
        }

    

        AssignCounter++;
    if(AssignCounter === 10) {
        AssignCounter ===0;
    }

}
    }
    
}

function deleteRow() {

    

    for(var i = 1; i < table.rows.length;i++) {
        
            if(table.rows[i].cells[0].style.backgroundColor === "blue") {
                rowLocation = i;
                name = table.rows[i].cells[0].innerHTML;
                id = table.rows[i].cells[1].innerHTML;

                for(var j = 2; j < table.rows[i].cells.length-1;j++) {
                    assignArray[j] = parseInt(table.rows[i].cells[j].innerHTML);
                    console.log(j);
                }

                table.deleteRow(i);
            }
    }

    rowDeleted = true;
    
}

function deleteColumn() {

     for(var i = 2; i < table.rows[0].cells.length-1;i++) {//2 and 5
        
         if(table.rows[1].cells[i].style.backgroundColor === "green") {
             
            for(var j = 0; j < table.rows.length; j++) {
                colLocation = i;
                colArray[j] = parseInt(table.rows[j].cells[i].innerHTML);
                table.rows[j].deleteCell(i);

            }


         }
 }


 getAverage();
 colDeleted = true;
 times--;

}

function undoDelete() {

if(rowDeleted) {



var length = table.rows[0].cells.length;
var row = table.insertRow(rowLocation);

for(var i = 0; i < length-1; i++){
        
    
    var newCell = row.insertCell(i);
    
    if(i === 0){
        newCell.setAttribute("onclick", "highlightRow(this)");
    }
    if(i > 1) {
        newCell.style.textAlign = "right";
       
    }
    newCell.contentEditable = true;
  

}
var newCell = row.insertCell();
newCell.style.textAlign = "right";

//fill that row again
table.rows[rowLocation].cells[0].innerHTML = name;
table.rows[rowLocation].cells[1].innerHTML = id;
for(var i = 2; i < table.rows[0].cells.length-1;i++) {


    table.rows[rowLocation].cells[i].innerHTML = assignArray[i];

}
getAverage();



rowDeleted = false;
}

if(colDeleted) {


for(var i = 1; i < table.rows.length;i++) {
    console.log(colArray[i]);
}

times++;
var location = table.rows[0].cells.length-1;
var headerCell = document.createElement("HEADER");
var place = colLocation-1;
headerCell.innerHTML = "Assignment " + place;
table.rows[0].insertCell(colLocation);//insert at space 3 first time
table.rows[0].cells[colLocation].appendChild(headerCell);
headerCell.setAttribute("onclick", "highlightAssignments(this)");
headerCell.contentEditable = true;
locat++;
length = table.rows[0].cells.length;
var i = 1;


for(i = 1; i < table.rows.length; i++){//go through all the rows and add a cell at end of each
    
    // try{
        var row = table.rows[i];
    
        // row.insertCell(-1);
        var newCell = row.insertCell(colLocation);
        
            newCell.style.textAlign = "right";
        
        newCell.contentEditable = true;
       
   
}

//fill the column added
for(var i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[colLocation].innerHTML = colArray[i];
}

//moveLastValue();
 




}
getAverage();
colDeleted = false;
}





















