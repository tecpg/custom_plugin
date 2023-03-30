<?php

 $name = $email = $password = "";

//fetches db configurations
// require_once("DB_Functions.php");
// $db = new DB_Functions();
 
//json response array
$response = array("error" => false);
 
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password'])){
 
    // receiving the post params
    $name = input($_POST['name']);
    $email = input($_POST['email']);
    $password = input($_POST['password']);
 

    $response["error"] = FALSE;
    $response["msg"] = "Your details successfully recieved!";
    $response["response"] = $name; 
    echo json_encode($response);
        
    } else {   
     
        $response["error"] = TRUE;
        $response["msg"] = "Error in sending details";
        $response["response"] = $name; 
        echo json_encode($response);
    }

?>