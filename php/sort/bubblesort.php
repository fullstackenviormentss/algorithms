<?php

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

function bubblesort($vector) {

    $len = count($vector);

    for ($i = 0; $i < $len; $i++) {

        for ($j = $i; $j < $len - $i; $j++) {

                // echo $i;
            if ($vector[$i] > $vector[$j + 1]) {
                $temp = $vector[$j + 1];
                $vector[$j + 1] = $vector[$i];
                $vector[$i] = $temp;
            }

        }
    }

    return $vector;
}

$v = array(9, 8, 7, 6, 5, 3, 2, 1, 0);

// array before
print_r($v);

// array after
print_r(bubblesort($v));

exit;

?>