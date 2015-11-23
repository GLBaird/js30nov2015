function Demo() {
    console.log("The username is "+this.username);
    console.log("The other usename is "+Demo.username);
}

/**
 * For storing a username on the class
 * @type {string}
 */
Demo.username = "Bob";

/**
 * For storing a username on the instance
 * @type { { surname:String, date:Date, numbers:number[] } }
 */
Demo.prototype.username = "Leon";

/**
 * A number property for today's date
 * @type {number}
 */
Demo.prototype.today = 23;

/**
 * Function to say hello
 * @return void
 */
Demo.prototype.sayHello = function() {
    console.log("Hello");
};


/**
 * This functions does something
 * @param {String} valA     This value is something
 * @param {Number} valB     More unusual stuff
 * @param {Demo} ValC       What is this for?
 * @return {string}
 */
Demo.prototype.doSomething = function(valA, valB, ValC) {
    this._myPrivateMethod();
    return "hi";
};

/**
 * This is a private method!
 * @return {number}
 * @private
 */
Demo.prototype._myPrivateMethod = function() {
    return 10 + 20;
};
