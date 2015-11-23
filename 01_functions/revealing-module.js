

var MainController = function() {

    console.log("Setting up Main controller");

    var username = "Leon Baird";

    var value = 20;

    function getUserData() {
        return username + " Data";
    }

    function setUserData(newValue) {
        username = newValue;

        return getValueWithTen();
    }

    function getValueWithTen() {
        return value * 10;
    }

    // Public API
    var publicAPI = {

        getUserName: getUserData,
        setUserName: setUserData

    };

    Object.defineProperty(publicAPI, "userAge", {
        get: function() { return value; },
        set: function(newValue) { value = newValue; }
    });


    return publicAPI;

};


var controller = MainController();
