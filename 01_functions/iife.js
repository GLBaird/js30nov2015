
// IIFE (self running anonymous function)
// Immediately Invoked Function Expression
(function(window) {

    var username = "Leon";
    var userAge = 42;

    function doSomething() {
        console.log("Hello World");
    }


    window.doSomething = doSomething;

})(window);


doSomething();


