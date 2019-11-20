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
           $.ajax({
                url:'https://api.github.com/users/'+username+'/repos',
                data:{
                    client_id:'a15ec5ffe35deb24771f',
                    client_secret:'8bcc4e3b62d9fe96b36d3aeab785476c1e914907',
                    sort:'created: asc',
                    per_page:10
                   } 
           }).done(function(repos){
                // console.log(repos.html_url); 
                $.each(repos, function(index, repo){
                    $("#repos").append(`
                        <div class="well">
                            <div class="row repodetail">
                                <div class="col">
                                    <strong>${repo.name}</strong>:${repo.description}
                                </div>
                                <div class="col">
                                <p class="location">Forks: ${repo.forks_count}</p>
                                </div>
                            </div>
                        </div>
                    `);
                })
           });
        //    console.log(user);
        $('#profile').html(`
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">${user.name}</div>
                    <div class="panel-body">
                        <div class="row>
                            <div class="col">
                                <img class="thumbnail avatar" src="${user.avatar_url}">
                                <a target="_blank" class="btn block-primary btn-block view" href="${user.html_url}">View Profile</a>
                            </div>
                            <div class="col detail">
                                <p class="location">Location: ${user.location}</p>
                                <p class="repo">Public Repository: ${user.public_repos}</p>
                            </div>
                        </div>
                    </div
                </div>
            </div>
            <h3 class="latestrepo">Latest Repository</h3>
            <div id="repos"></div>
        `);
       });
    });
});