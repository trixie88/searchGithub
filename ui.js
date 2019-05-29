class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    showProfile(user) {
        console.log(user);
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col md-3">
                      <img class="img-fluid mb-2" src="${user.avatar_url}" />
                      <a href="${user.html_url}" target="_blank" class="btn btn-success btn-block">View Github Profile</a>
                    </div>
                    <div class="col md-9">
                       <span class="badge badge-primary">Repositories: ${user.public_repos}</span>
                       <span class="badge badge-secondary">Gists: ${user.public_gists}</span>
                       <span class="badge badge-success">Followers: ${user.followers}</span>
                       <span class="badge badge-info">Following: ${user.following}</span>
                       <br><br>
                       <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member since: ${user.created_at}</li>
                       </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest 5 repositories</h3>
            <div>
                     <ul id="listOfRepos" class="list-group">
                     </ul>
            </div>
            
        `;
    }

    showRepos(repos) {
        let reposElement = document.getElementById("listOfRepos");
        let output = "";
        repos.forEach(repo => {
            // console.log(repo.html_url);
            output += ` <li class="list-group-item">${repo.name}: <a href="${repo.html_url}"   target="_blank" >See Repo</a> </li>`
        })
        reposElement.innerHTML = output;
    }

    clearProfile() {
        this.profile.innerHTML = "";
    }
}