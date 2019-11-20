$(document).ready(function(){
    $('#searchuser').on('keyup', function(e){
       let username = e.target.value;

       $.ajax({
           url:'https://api.github.com/users/'+username,
           data:{
            client_id:'a15ec5ffe35deb24771f',
            client_secret:'8bcc4e3b62d9fe96b36d3aeab785476c1e914907'
           } 
       }).done(function(user){
        //    console.log(user);
        
       })
    });
});