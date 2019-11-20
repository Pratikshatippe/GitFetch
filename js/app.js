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
        $('#profile').html(`
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">${user.name}</div>
                    <div class="panel-body">
                        <div class="row>
                            <div class="col-md-3">
                                <img class="thumbnail avatar" src="${user.avatar_url}">
                                <a target="_blank" class="btn block-primary btn-block view" href="${user.html_url}">View Profile</a>
                            </div>
                            <div class="col-md-6 detail">
                                <p class="location">Location: ${user.location}</p>
                                <p class="repo">Public Repository: ${user.public_repos}</p>
                            </div>
                        </div>
                    </div
                </div>
            </div>
        `);
       });
    });
});