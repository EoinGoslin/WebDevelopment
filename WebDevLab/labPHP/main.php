<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Assignment 3";


session_start();







// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " .mysqli_connect_error());
}

echo ' 

<head> <link rel="stylesheet" type="text/css" href="style.css"></head>';
echo "
<body>
<div class = 'wrapper'>
<form id = 'form' action = 'insertion.php' method='POST'>
           
            Creator: <input type='text' name='creator'> <br>
            Title: <input type='text' name='title' ><br>
             Type:<select name = 'type'> 
		<option value = 'novel'>novel</option>
		<option value = 'novella'>novella</option>
		<option value = 'Fiction'>fiction</option>
		<option value = 'Biography'>Biography</option>
            </select><br>
            identifier <input type='text' name='identifier'><br>
            Date: <input type='date' name='date' ><br>

            Language:<select name = 'language'> 
		<option value = 'En-Us'>En-Us</option>
		<option value = 'En-Au'>En-Au</option>
		<option value = 'Fr-Ca'>Fr-Ca</option>
		<option value = 'En-Ie'>En-Ie</option>
            </select><br>
 Description: <input type='text' name='description' ><br>
       
            
        

            <button type='submit' name = 'button' onClick='location.href = 'main.php'>Submit</button>
            <hr>
            ID of Row to Update<input type='text' name='rowToUpdate'>
            <button type='submit' onClick='location.href = 'main.php' name = 'button2'>Update Row</button>
            <hr>
            ID of Row to Delete<input type='text' name='rowToDelete'>
            <button type='submit' onClick='location.href = 'main.php' name = 'button3'>Delete Row</button>
            <hr>
            <button type='submit' onClick='location.href = 'main.php' name = 'button4'>Undo</button>
           
            
        </form>
      
        <form id = 'formsubmit' action = 'main.php' method = 'POST' >
        <button type='submit' onClick='location.href = 'main.php' name = 'button1'>Display Data</button>
        </form>
        </div>";
#update row button
#if display data button pressed,
#then retrieve data and display in a tabular format

        if(isset($_REQUEST['button1'])) 
{

    $sql = "SELECT id, creator, title, type, identifier ,date, language, description FROM Assignment3_Table";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    echo "<table>";
    echo "<thead>
               <tr>
                   <th >ID</th>
                   <th >Creator</th>
                   <th >Title</th>
                   <th >Type</th>
                   <th >Identifier</th>
                   <th>Date</th>
                   <th >language</th>
                    <th>Description</th>
                 
               </tr>
               
            </thead>
            <tbody>";
    while($row = $result->fetch_assoc()) {
        $id = $row["id"];
        $creator = $row["creator"];
        $title = $row["title"];
        $type = $row["type"];
        $identifier = $row["identifier"];
        $date= $row["date"];
        $language = $row["language"];
        $description = $row["description"];

       echo "

            <tr>
            <td >$id</td>
            <td >$creator</td>
            <td >$title</td>
            <td >$type</td>
            <td >$identifier</td>
            <td >$date</td>
            <td> $language </td>
            <td >$description</td>
        
        </tr>";
           
    }

   echo " </tbody>
    </table>
    </body>";
} else {
    echo "0 results";
}

}

#end of main
#echo "<script type='text/javascript'>alert('$emtyQuery');</script>";
?>

