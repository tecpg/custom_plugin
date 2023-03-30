//"use strict";
jQuery(document).ready(function($){
function login_formValidator() {
    
     const  email =  $("#loginEmail").val();
     const password =  $("#loginPassword").val();
        
         
  if(password.length <= 4)  {
                
     console.log("Password must contain aleast 5 letters!");
         $("#loginError").text("Password must contain aleast 5 letters!");
   return false;
   
  }
  
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {

  }else{ 
     console.log("You have entered an invalid email address!");
       $("#loginError").text("You have entered an invalid email address!");
       return false;
  
  }
    return true;
    
}
function join_formValidator() {
    
       
     const username =  $("#inputUsername").val();
      const  email =  $("#inputEmail").val();
        const password =  $("#inputPassword").val();
        const password2 =  $("#inputPassword2").val();
         
  if(username.length <= 2)  {
                
     console.log("Username must contain aleast 3 letters!");
         $("#joinError").text("Username must contain aleast 3 letters!");
   return false;
   
  }

  
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {

  }else{ 
     console.log("You have entered an invalid email address!");
       $("#joinError").text("You have entered an invalid email address!");
       return false;
  
  }
  if(password.length <= 4)  {
                
     console.log("Password must contain aleast 5 letters!");
         $("#joinError").text("Password must contain aleast 5 letters!");
   return false;
   
  }

  const match = password === password2;
  if(!match)  {
        
    console.log("Password doesn't match");
        $("#joinError").text("Password doesn't match");
  return false;
  
 } 
    return true;
    
}




$(document).ready(function(){
$("#login-form").submit(function(){
  event.preventDefault();
    
    //check if cookie is enabled
  //checkCookie();  
           $("#loginError").text("");
      const  email =  $("#loginEmail").val();
        const password =  $("#loginPassword").val();
        
       if(login_formValidator()){
  
        const login_url= "https://localhost/wordpress/wp-content/plugins/custom-plugin/loguser.php";
        
    //ajax call
let xmlhttp;
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200) {
    let response = this.responseText;
    
      let user = JSON.stringify(response);
      
      if(user.error == true){
              
     console.log(user.error_msg);
       $("#loginError").text(user.error_msg);
   
      }else{
          $("#loginError").text(user.error_msg);
          $("#logged_out").hide();
        
    console.log(response)
        
      window.location.href="/dashboard.php";

      let user_email = user.user;
      let email = user_email.user_email;
      let name = user_email.username;

    setUserCookie(email, name);  
    $("#welcome").text("Welcome " + Cookies.get('name'));

}
}

};
xmlhttp.open("POST",login_url, true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("email=" + email +'&password=' + password);
 
}
});
});


$(document).ready(function(){
  $("#reg-form").submit(function(){

    event.preventDefault();
       
     const username =  $("#inputUsername").val();
      const  email =  $("#inputEmail").val();
        const password =  $("#inputPassword").val();
        
        if(join_formValidator()){
         
          $("#joinError").text("Connecting...");
            
    //ajax call
const register_url= "https://localhost/wordpress/wp-content/plugins/custom-plugin/reguser.php";
 reg_call(register_url, username, email, password)
}
});
});

function reg_call(mUrl, mUsername, mEmail, mPassword){

  $.ajax({
      url: mUrl,
      type: "POST",
      data:  {
          name:mUsername,
          email:mEmail,
          password:mPassword
      },
    
      success: function(data){
          var value = JSON.stringify(data);
          console.log(value)
          $("#joinError").text(data);

      },
      error: function(xhr, status, error){
        console.group("response")
          console.log(xhr);
          console.log(status);
          console.log(error);
          console.groupEnd();
          $("#joinError").text("error");
          
      }

  });
}

});