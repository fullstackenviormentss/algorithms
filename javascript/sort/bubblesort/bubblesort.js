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

    for (var i = 0; i < this.length; i++) {

        for (var j = i; j < this.length - i; j++) {

            if (this[i] > this[j + 1]) {
                var temp = this[j + 1];
                this[j + 1] = this[i];
                this[i] = temp;
            }

        }
    }

    return this;
};

var v = [9, 8, 7, 6, 5, 3, 2, 1];

console.log(v);

v.bubblesort();

console.log(v);