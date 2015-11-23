/**
 * Makes an Employee
 * @param {string} [surname]
 * @param {string} [forename]
 * @constructor
 */
function Employee(surname, forename) {
    if (typeof surname === "string")
        this.surname = surname;
    if (typeof forename === "string")
        this.forename = forename;
}

/**
 * Sets values
 * @param {string}   [surname]
 * @param {string}   [forename]
 * @param {function} [callback]
 */
Employee.prototype.setValues = function(surname, forename, callback) {
    for(var i in arguments) {
        if (typeof arguments[i] === "function") {
            this.callback = arguments[i];
            break;
        } else if (typeof arguments[i] === "string" && i == 0) {
            this.surname = arguments[i];
        } else if(typeof arguments[i] === "string" && i == 1) {
            this.forename = arguments[i];
        } else if (arguments.length <= 3) {
            console.error("Incorrect datatype of "+typeof arguments[i]);
        }
    }
};

/**
 * Stores Surname
 * @type {null|string}
 */
Employee.prototype.surname = null;

/**
 * Stores Forename
 * @type {null|string}
 */
Employee.prototype.forename = null;

/**
 * Callback for when person is busy
 * @type {null|function}
 */
Employee.prototype.callback = null;


var global = "BOB";

// Subclass

function Manager(surname, forename, department) {
    // super(surname, forename);
    Employee.call(this, surname, forename);

    if (typeof department === "string")
        this.department = department;

    this.element = document.getElementById("manager");
    var username = "Leon";

    this.element.addEventListener("click", this.handleClick.bind(this, username));

    /*
    method using inline function (closure):

    var self = this;

     this.element.addEventListener("click", function(event) {

         console.log(self, event.target);
         console.log(self.value);
         console.log(global);

         console.log(username);

     });


     */
}

Manager.prototype = Object.create(Employee.prototype);

/**
 * Value for demo
 * @type {number}
 */
Manager.prototype.value = 10;

/**
 * Click Handler
 * @param {string} username
 * @param {MouseEvent} event
 */
Manager.prototype.handleClick = function(username, event) {
    console.log(this, event.target);
    console.log(this.value);
    console.log(global);
    console.log(username);
};

/**
 * Element of manager on page
 * @type {HTMLDivElement|null}
 */
Manager.prototype.element = null;

Object.defineProperty(Manager, "TYPE_SALES", {
    writable: false,
    value: "sales",
    enumerable: false
});

Object.defineProperty(Manager, "TYPE_ACCOUNTS", {
    writable: false,
    value: "accounts",
    enumerable: false
});

Object.defineProperty(Manager.prototype, "_color", {
    value: "blue",
    writable: true,
    enumerable: false
});

Object.defineProperty(Manager.prototype, "color", {
    enumerable:true,
    set: function(newValue) {
        this._color = newValue;
        console.log("Color Value has changed to "+newValue);
    },
    get: function() {
        return this._color;
    }
});


Manager.prototype.setValues = function(surname, forename, department, callback) {
    Employee.prototype.setValues.call(this, surname, forename, department, callback);
    if (typeof department === "string")
        this.department = department;
};

/**
 * Department being managed
 * @type {null|string}
 */
Manager.prototype.department = null;



