let github = new Github();
let ui = new UI();
let searchInput = document.getElementById("searchUser");
let userNotFoundElement = document.getElementById("userNotFound");
searchInput.addEventListener("keyup", function (e) {
    let text = e.target.value;
    if (text !== "") {
        github.getUser(text)
            .then(user => {
                userNotFoundElement.style.visibility = "hidden";
                ui.showProfile(user);
                findUserRepositories(user);
            })
            .catch(error => {
                if (error.responseJSON.message = "Not Found") {
                    userNotFoundElement.style.visibility = "visible";
                    ui.clearProfile();
                }
            });
    } else {
        ui.clearProfile();
    }
});

function findUserRepositories(user) {
    github.getRepositories(user)
        .then(repos => {
            ui.showRepos(repos);
        })
        .catch(error => {
            console.log(error);
        });

}
