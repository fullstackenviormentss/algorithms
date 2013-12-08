/**
 * bubblesort
 * by Davidson Fellipe - fellipe.com
 * http://en.wikipedia.org/wiki/Bubble_sort
 *
 *  Worst case performance - O(n^2)
 *  Best case performance - O(n)
 *  Average case performance - O(n^2)
 *  Worst case space complexity - O(1) auxiliary
 */

Array.prototype.bubblesort = function () {

    'use strict';

    var hasSwap,
        i,
        temp;

    do {

        hasSwap = false;

        for (i = 0; i < this.length - 1; i++) {

            if (this[i] > this[i + 1]) {

                temp = this[i + 1];
                this[i + 1] = this[i];
                this[i] = temp;

                hasSwap = true;
            }

        }

    } while (hasSwap);

    return this;
};

var v = [9, 82, 7, 1, 3, 6, 5, 3, 2, 1, 0];

console.log(v);

v.bubblesort();

console.log(v);