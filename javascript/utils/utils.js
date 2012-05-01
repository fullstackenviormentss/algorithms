Array.prototype.randomize = function() {
    "use strict";

    if(this.length > 1){
        for(var i = 0; i < this.length; i++) {
            this[i] = parseInt(Math.random() * this.length, 10);
        }
    }else{
        this[0] = parseInt(Math.random() * 1000, 10);
    }
    return this;
};