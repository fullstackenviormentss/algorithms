Array.prototype.randomize = function() {
    "use strict";

    if(this.length > 1){
        for(var i = 0; i < this.length; i++) {
            this[i] = parseInt(Math.random() * this.length);
        }
    }else{
        this[0] = parseInt(Math.random() * 1000)
    }
    return this;
};

Array.prototype.insertSort = function(){
    "use strict";
    
    //has swap?
    var swap = 0;
    
    for(var i=1; i<this.length; i++){
        
        for(var j=0; j < i; j++){
        
            if(this[i] < this[j]){
                 
                swap = this[i];
                this[i] = this[j];
                this[j] = swap;

                
            }
            
        }
    }
    
    return this;
};

var v = new Array(50);

v.randomize();

console.log(v.toString());

v.insertSort();

console.log(v.toString());