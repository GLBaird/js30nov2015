
function downloadUsers() {

    var req = new XMLHttpRequest();
    req.open("GET", "users.json", true);

    req.onreadystatechange = function() {

        console.log("State Change "+req.readyState);

        if (req.readyState == 4) {

            console.log("Request Complete");

            if (req.status == 200) {

                console.log("Response received Successfully");

                var parsed = JSON.parse( req.responseText );

                showUserData(parsed.users);

            } else {

                alert("Network Error "+req.status+" "+req.statusText);

            }

        }

    };

    req.send();

}

function showUserData(users) {
    var results = document.getElementById("results");
    for (var i=0; i<users.length; i++) {
        var user = users[i];
        var li = document.createElement("li");
        li.innerHTML = user.name+": "+user.occupation;
        results.appendChild(li);
    }
}