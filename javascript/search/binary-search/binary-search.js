/**
 * binarySearch - a binary search search algorithm 
 * finds the position of a specified value on a sorted array.
 *
 */
Array.prototype.binarySearch = function(value, start, end){

    var middle = end - start;
    var pivot  = Math.floor(middle / 2) + start;

    if(start >= end && value != this[pivot]){
        return -1;
    }

    if (value === this[pivot]){

        return pivot;

    }else{
        if(value < this[pivot]){

            return this.binarySearch(value, 0, pivot);

        }else{

            return this.binarySearch(value, pivot + 1, end);

        }
    }
};