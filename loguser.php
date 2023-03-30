<?php

 $name = $email = $password = "";

//fetches db configurations
// require_once("DB_Functions.php");
// $db = new DB_Functions();
 
//json response array
$response = array("error" => false);
 
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['password'])){
 
    // receiving the post params
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
 

    $response["error"] = FALSE;
    $response["msg"] = "Successfully logged in!";
    $response["response"] = $name; 
    echo json_encode($response);
        
    } else {   
     
        $response["error"] = TRUE;
        $response["msg"] = "Error in sending details";
        $response["response"] = $name; 
        echo json_encode($response);
    }

?>
