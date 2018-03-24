<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Assignment 3";

$number = 0;
#needed to store what was there before statement was run
#will be used for Session variables
$id = "";
$location = "";
$oldTitle = "";
$oldCreator = "";
$oldType = "";
$oldIdentifier = "";
$oldDate = "";
$oldLanguage = "";
$oldDescription = "";
#have to start session so that session variables will be accessible later on
session_start();



// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " .mysqli_connect_error());
}


#capture all input from form in main
$creator = $_POST["creator"];
$title = $_POST["title"];
$type = $_POST["type"];
$identifier = $_POST["identifier"];
$date = $_POST["date"];
$language = $_POST["language"];
$description = $_POST["description"];
$rowToUpdate = $_POST["rowToUpdate"];
$rowToDelete = $_POST["rowToDelete"];




if(isset($_POST['button'])) 
{
    #The button that was clicked was submit
    $_SESSION['number'] = 1;
  
    

$sql = "INSERT INTO Assignment3_Table(creator, title, type ,identifier ,date , language , description)
VALUES ('$creator', '$title', '$type', '$identifier' , '$date' , '$language' , '$description')";


if (mysqli_query($conn, $sql)) {
    #as is an SPA, must stay on main.php
    header("Location:main.php");
    exit;
 } else {
     echo "Error: " . $sql . "<br>" . mysqli_error($conn);
 }
}
#button 2 means that the Update button was pressed

if(isset($_POST['button2'])) 
{
    #clicked Update
    #2 will symbolise the update buttton, used for undo
    #need to know that was the last action taken
    $_SESSION['number'] = 2;
    $_SESSION['location'] = $rowToUpdate;
    

    #before submitting updating statement, capture data

    $statement = "SELECT * FROM Assignment3_Table where id = $rowToUpdate";
    $result = $conn->query($statement);
    #run a loop to go through just the row 
    #and capture all the data before updating it
    #when undo is pressed, this data will be used to reverse previous action
    
    if($result-> num_rows > 0) {

    

        while($row = $result->fetch_assoc()) {
            
            $_SESSION['id'] = $row["id"];
            $_SESSION['oldCreator'] = $row['creator'];
            $_SESSION['oldTitle'] = $row['title'];
            $_SESSION['oldType'] = $row['type'];
            $_SESSION['oldIdentifier'] = $row['identifier'];
            $_SESSION['oldDate'] = $row['date'];
            $_SESSION['oldLanguage'] = $row['language'];
            $_SESSION['oldDescription'] = $row['description'];

        
        }
    } else {
     
   
        header("Location:main.php");


    }

        #after capturing data, now I know I can update it and remove old data
        #from the table


    $sql = "UPDATE Assignment3_Table
    SET creator = '$creator',
    title = '$title',
    type = '$type',
    identifier = '$identifier',
    date = '$date',
    language = '$language',
    description = '$description'
    where id = $rowToUpdate;";
    


    if (mysqli_query($conn, $sql)) {
    header("Location:main.php");
    exit;
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

}

if(isset($_POST['button3'])) 
{
    #button clicked was Delete
    $_SESSION['number'] = 3;
    $_SESSION['location'] = $rowToDelete;

$sql = "DELETE FROM Assignment3_Table 
WHERE id = $rowToDelete;";


$statement = "SELECT * FROM Assignment3_Table where id = $rowToDelete";
    $result = $conn->query($statement);

    #run a loop to go through the row user wants to delete
    #capture all data before it's deleted
    if($result-> num_rows > 0) {
    
        while($row = $result->fetch_assoc()) {
            
            $_SESSION['id'] = $row["id"];
            $_SESSION['oldCreator'] = $row['creator'];
            $_SESSION['oldTitle'] = $row['title'];
            $_SESSION['oldType'] = $row['type'];
            $_SESSION['oldIdentifier'] = $row['identifier'];
            $_SESSION['oldDate'] = $row['date'];
            $_SESSION['oldLanguage'] = $row['language'];
            $_SESSION['oldDescription'] = $row['description'];

        
        
        }
    } else {
        header("Location:main.php");
    }


    
 
if (mysqli_query($conn, $sql)) {
    header("Location:main.php");
    exit;
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
}

if(isset($_POST['button4'])) 
{

    #button 4 is the undo button
    #In here I know user wants to undo last action
    #Using session variables, I know what the last action was
    #before this undo button was pressed
    #If 1, then a submission was made before this undo process
    #and all that has to be done is remove last row because insserted at highest
    #id in the table everytime
    #if 2, an Update was performed before undo event, 
    #to undo this, I just run another update statement replaces row with old
    #data again using stored data in Session variables
    #if 3, a row has been deleted, and reverse of this is an Insert statement
    #with data collected before running delete statement earlier

    #id's are needed in all so that when undo is run, the row is restored/deleted
    #at the correct place

    #The else statement in all cases is to return to main, so
    #that if nothing has been done before the undo button
    ##it still remains on the same page
    if($_SESSION['number']==1) {

    
        $sql = "SELECT id, creator, title, type, identifier ,date, language, description FROM Assignment3_Table";
        $result = $conn->query($sql);
        
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                
                $id = $row["id"];

            
            }
    
    
    
        }
        mysqli_query($conn, "DELETE FROM Assignment3_Table WHERE id = $id;");
        mysqli_commit($conn);
        $_SESSION['number']=6;
            header("Location:main.php");
    
    } else {
        header("Location:main.php");
    }

    if($_SESSION['number']==2) {



        $titletemp = $_SESSION['oldTitle'];
        $creatortemp = $_SESSION['oldCreator'];
        $typetemp = $_SESSION['oldType'];
        $identifiertemp = $_SESSION['oldIdentifier'];
        $datetemp = $_SESSION['oldDate'];
        $languagetemp = $_SESSION['oldLanguage'];
        $descriptiontemp = $_SESSION['oldDescription'];
        $idtemp = $_SESSION['id'];

	

        mysqli_query($conn, "UPDATE Assignment3_Table SET id = '$idtemp', creator = '$creatortemp', title = '$titletemp ', type = '$typetemp', identifier = '$identifiertemp', date = '$datetemp',
        language = '$languagetemp',
        description = '$descriptiontemp'
        where id = $idtemp;");
        mysqli_commit($conn);
        $_SESSION['number']=6;
            header("Location:main.php");
    
    } else {
        header("Location:main.php");
    }

    if($_SESSION['number']==3) {

        $titletemp = $_SESSION['oldTitle'];
        $creatortemp = $_SESSION['oldCreator'];
        $typetemp = $_SESSION['oldType'];
        $identifiertemp = $_SESSION['oldIdentifier'];
        $datetemp = $_SESSION['oldDate'];
        $languagetemp = $_SESSION['oldLanguage'];
        $descriptiontemp = $_SESSION['oldDescription'];
        $idtemp = $_SESSION['id'];

    
        mysqli_query($conn,  "INSERT INTO Assignment3_Table(id, creator, title, type ,identifier ,date , language , description)
        VALUES ('$idtemp', '$creatortemp ', '$titletemp', '$typetemp', '$identifiertemp' , '$datetemp' , '$languagetemp' , '$descriptiontemp')");
        mysqli_commit($conn);
        $_SESSION['number']=6;
            header("Location:main.php");
    
    } else {
        header("Location:main.php");
    }   
}








mysqli_close($conn);
?>
