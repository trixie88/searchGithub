class Github {
    constructor() {
        this.client_id = "bb04ee1a7a1d66f344fc";
        this.client_secret = "ced32873aae079eeb9a02520455f250270e15256";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    getUser(userName) {

        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: `https:api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`,
                datatype: "json",
                async: true
            })
                .done((data) => {
                    resolve(data);
                })
                .fail(function (data) {
                    reject(data);
                })

        });
    }

    getRepositories(user) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: `https://api.github.com/users/${user.login}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`,
                datatype: "json",
                async: true
            })
                .done((data) => {
                    resolve(data);
                })
                .fail(function (data) {
                    reject(data);
                })

        });

    }
}
