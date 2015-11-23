var app = {

    start: function() {
        console.log("App starting");
    },

    username: "Leon Baird",

    panels: {

        logonPanel: {

            username: "",
            password: "",

            logon: function() {
                console.log("Logging on" + this.username, this.password);
            },

            logoff: function() {
                console.log("Logging Off");
            }

        },

        userInfoPanel: {

        },

        colorPanel: {

        }

    }

};

app.start();