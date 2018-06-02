<?php 

include "connection.php";

 
// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
//echo $method;

if($method=='GET'){

    $input = $_GET['name'];
    
    $decode = json_decode($input);
    $getName = $decode->name;
    $getId = $decode->id;
    
} else {



// $request = explode('/', trim($_SERVER['PATH_INFO'],'/'));

$input = json_decode(file_get_contents('php://input'),true);
// print_r($input);


if(empty($input['date'])){//delete request
    $id = $input['id'];
    // $name = $input['name'];
} else {
$id = $input['id'];
$date = $input['date'];
$name = $input['name'];
$url = $input['url'];
$description = $input['description'];

}

}






switch ($method) {
  case 'GET': 
  
  $sql = "SELECT id, date, name, url, description FROM ReadingList where id = '$getId';";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $id = $row["id"];
        $name = $row["name"];
        $url = $row["url"];
        $description = $row["description"];
        $date = $row['date'];
        echo $id;
        echo $url;

        $get_data = array(
            'readingList' => array(
              'id' => $id,
              'date' => $date,
              'name' => $name,
              'url' => $url,
              'description' => $description
             
            )
          );


          //run select statement first and then place what is retrieved from database and then place
          //it in data.json file ready for javascript to pick it up with $.getJSON and make a table with it

        //$jsonObject = json_encode($get_data);
        header('Content-Type: application/json');
        echo json_encode(pg_fetch_assoc($jsonObject));
        

        
        

} 
}else {
    echo "0 results";
}
break;
    
  case 'PUT':
  $sql = "Update ReadingList set date = '$date', name = '$name', url = '$url' ,description = '$description' 
  where id = '$id'";
  if (mysqli_query($conn, $sql)) {
    echo "yay";
    exit;
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
  break;
  
  case 'POST':
    $sql = "INSERT INTO ReadingList(date, name, url ,description) 
    VALUES ('$date', '$name', '$url', '$description')";
    if (mysqli_query($conn, $sql)) {
        echo "yay";
        exit;
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }break;
   case 'DELETE': 
    $sql = "Delete From ReadingList where id = '$id'";
    if (mysqli_query($conn, $sql)) {
        echo "yay";
        exit;
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
   break;   
}


//close connnection

mysqli_close($conn);
?>





