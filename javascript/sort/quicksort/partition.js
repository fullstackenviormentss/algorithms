/**
 * partition
 *
 */
Array.prototype.partition = function(){

    "use strict";

    //pivot is last item
    var pivot = this[this.length-1];
    var cursorSmaller = - 1;
    var swap;

    for( var cursorGreater=0; cursorGreater < this.length - 1; cursorGreater++ ){

        if( this[ cursorGreater ] < pivot ){

           swap = this[ cursorSmaller + 1 ];

           this[ cursorSmaller +1 ]  = this[ cursorGreater ];

           this[ cursorGreater ] = swap;

           cursorSmaller++;
        }
    }

    //place pivot on "middle"
    swap = this[ cursorSmaller + 1 ];
    this[ cursorSmaller +1 ]  = this[ cursorGreater ];
    this[ cursorGreater ] = swap;

    return this;
};