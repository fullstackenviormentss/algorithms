/**
 * Quicksort
 * Is a divide and conquer algorithm in the style of merge so
 * by Davidson Fellipe - fellipe.com
 * http://en.wikipedia.org/wiki/Quicksort
 *
 *  Worst case performance - O(n^2)
 *  Best case performance - O(n)
 *  Average case performance - O(n^2)
 *  Worst case space complexity - O(1) auxiliary
 */

var quicksort = function (vector) {

    'use strict';

    if (!vector.length) {
        return vector;
    }

    var less = [];
    var pivot = vector.pop();
    var greater = [];

    for (var i = 0; i < vector.length; i++) {


        if (vector[i] > pivot) {

            greater.push(vector[i]);

        } else {

            less.push(vector[i]);

        }

    }

    return (quicksort(less)).concat(pivot, quicksort(greater));

};

var v = [9, 82, 7, 5, 3, 2, 1, 6];

console.log(v);

var result = quicksort(v);

console.log(result);