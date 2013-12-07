//to reverse a string
String.prototype.reverse = function(){
	'use strict';
	return this.split('').reverse().join('');
};

var a = '11111111111111111111111111111111111111111111111111111111111'.reverse();
var b = '11111111111111111111111111111111111111111111111111111111111'.reverse();

//get biggest digits amount
var max = ((a.length > b.length) ? a.length : b.length);

var carry = 0;
var temp = 0 ;

//final number
var total = [];

for( var i=0; i<max; i++){

    temp =  parseInt((a[i] ? a[i] : 0), 10) +
            parseInt((b[i] ? b[i] : 0), 10) +
            carry;

    total[i] = temp % 10;

    carry = (temp >= 10) ? 1 : 0;
}

if(carry) {
    total[i] = carry;
}

console.log(total.reverse().join(''));