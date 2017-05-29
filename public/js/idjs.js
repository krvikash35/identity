var idjs = (function (){
    
   

    var xhttp = new XMLHttpRequest();
    function loginWithGoogle(){
        console.log("inside loginWithGoogle");
        xhttp.open("GET", "/loginwithgoogle", true);
        xhttp.send();     
    }

     return {
        loginWithGoogle: loginWithGoogle
    }
})()