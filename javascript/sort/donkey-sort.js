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

Array.prototype.donkeySort = function(){
    "use strict";
    
    var temp;

    //has swap?
    var swap = true;
    
    while(swap){
        
        swap = false;  
        
        for(var i=0; i< (this.length - 1); i++){

            if(this[i]>this[i+1]){

                temp = this[i+1];
                this[i+1] = this[i];
                this[i] = temp;
                swap = true;
            }                    
        }            
    }
    
    return this;
};

var v = new Array(1000);

v.randomize();

console.log(v.toString());

console.time("execution time");
v.donkeySort();
console.timeEnd("execution time");

console.log(v.toString());