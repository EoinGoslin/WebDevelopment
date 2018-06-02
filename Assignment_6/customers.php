<?php
include "connection.php";

$method = $_SERVER['REQUEST_METHOD'];

if($method=='GET'){


    

    $result = mysqli_query($conn, "SELECT * FROM `custDatabase`");
    $overall = mysqli_num_rows($result);

    $myArray = array();

 if($overall > 0) {
     while($row = mysqli_fetch_array($result)) {
         $myArray[] = $row;
     }
 }



 echo json_encode($myArray);



  }

  
mysqli_close($conn);





  




?>