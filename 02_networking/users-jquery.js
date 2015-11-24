function downloadUsers() {

    $.ajax({
        url: "users.json",
        type: "GET",
        data: {
            userID: "1234",
            apiKEY: "1234"
        },
        dataType: "JSON"
    }).then(function(data) {
        showUsers(data.users);
    }, function(jqXHR, status, reason) {
        alert("Network Error "+jqXHR.status+" "+status+"\n"+reason);
    });

}

function showUsers(users) {
    var results = $("#results");
    users.forEach(function(user){
        results.append(
            $("<li />").html(user.name+": "+user.occupation)
        );
    });
}