function getValues() {    
   var name = $('#name').val();
   var url = $('#url').val();
   var description = $('#description').val();
   var date = new Date().toISOString().slice(0,10);
   //get the date and then make it in the format that will fit in the database e.g. yyyy/mm/dd

   var values = {
    "date": date,
   "name": name,
   "url": url,
   "description": description
  };

  var data = JSON.stringify(values);
   
   
    $.post(		
  "../service/driver.php", 
  data, 
  function(result){
alert(result);

    }
);
}
function update () {
   
    var name = $('#name').val();
   var url = $('#url').val();
   var description = $('#description').val();
   var date = new Date().toISOString().slice(0,10);
   var id = $('#id').val();

   var values = {
    "id": id,   
    "date": date,
   "name": name,
   "url": url,
   "description": description
  };

  var data = JSON.stringify(values);
  $.ajax({
     type: 'PUT',// Use POST with X-HTTP-Method-Override or a straight PUT if appropriate.
    dataType: 'json', // Set datatype - affects Accept header
    url: "../service/driver.php",
    data: data, // A valid URL
    headers: {"X-HTTP-Method-Override": "PUT"}, 
    function(result){
       alert(result);
    
           } // X-HTTP-Method-Override set to PUT.
     // Some data e.g. Valid JSON as a string
});
}

function remove () {
  
  var id = $('#delid').val();
   var values = {
    "id": id
  };

  var data = JSON.stringify(values);

  $.ajax({
    url: '../service/driver.php',
    type: 'DELETE',
    data: data,
    success: function(result) {
        // Do something with the result
        alert(result);
    }
});
}

function retrieveID() {
  var elmtTable = document.getElementById('table');
var tableRows = elmtTable.getElementsByTagName('td');
var rowCount = tableRows.length;

for (var x=rowCount-1; x>0; x--) {
   elmtTable.removeChild(tableRows[x]);//clear row by removing children which are all the cells
}

$('#first').remove();//Then remove row completely
  var name = $('#name').val();
  var id = $('#retid').val();
 
  var values = {
    "name": name,
    "id": id
  };

  var table = document.getElementById('table');

  var data = JSON.stringify(values);
 // alert(data);
  $.ajax({
    url: '../service/driver.php?name='+data,
    type: 'GET',
    success: function(result) {
        // Do something with the result
        // alert('succcess');
        // alert(result);

        getData();//method call delays enough time for PHP to insert data into data.json file
        //without method call, does not work constantly

        //in here, I know select statement was successful and so can now call this method which will retrieve it from .json file and 
        //make a table from it

    }

});
}

function getData() {


  $.getJSON("../data/data.json", function(result){

    alert(result.readingList['id']);
     $("#table").append('<td id="first">' + result.readingList["id"] + '</td>');
     $("#table").append('<td>' + result.readingList["date"] + '</td>');
     $("#table").append('<td>' + result.readingList["name"] + '</td>');
     $("#table").append('<td>' + result.readingList["url"] + '</td>');
     $("#table").append('<td>' + result.readingList["description"] + '</td>');
     
  });
}






