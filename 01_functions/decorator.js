

var EventListenerDecorator = function() {

    /**
     * Add event Listener
     * @param {string} type
     * @param {function(object)} callback
     */
    function addEventListener(type, callback) {
        this.listeners = this.listeners || {};
        this.listeners[type]  = this.listeners[type] || [];
        this.listeners[type].push(callback);
    }

    /**
     * Remove Event Listener
     * @param {string} type
     * @param {function} [callback]
     */
    function removeEventListener(type, callback) {
        this.listeners = this.listeners || {};
        if (this.listeners[type] && callback) {
            this.listeners[type] = this.listeners[type].filter(function(element) {
                return element !== callback;
            });
        } else if (this.listeners[type]) {
            this.listeners[type] = undefined;
        }
    }

    /**
     * Send Event to listeners
     * @param {string} type
     * @param {Event} [event]
     */
    function callListeners(type, event) {
        event = event || new Event(type);

        if (this.listeners[type]) {
            this.listeners[type].forEach(function(listener){
                listener(event);
            });
        }
    }


    return {

        decorateAsEventListener: function(object) {

            object.addEventListener = addEventListener;
            object.removeEventListener = removeEventListener;
            object.callListeners = callListeners;

        }

    };


};


var ClassDemo = function() {

};

var myObject = {};

var eventListenerDecorator = EventListenerDecorator();

eventListenerDecorator.decorateAsEventListener(myObject);
eventListenerDecorator.decorateAsEventListener(ClassDemo.prototype);

myObject.addEventListener("finish", function(event) {
    console.log("Object finished");
});

var demo = new ClassDemo();
demo.addEventListener("finish", function(event) {
    console.log("Class finished");
});

myObject.callListeners("finish");
demo.callListeners("finish");
