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

    do {

        $hasSwap = false;

        for ($j = 0; $j < $len - 1; $j++) {

            if ($vector[$j] > $vector[$j + 1]) {

                $temp = $vector[$j + 1];
                $vector[$j + 1] = $vector[$j];
                $vector[$j] = $temp;

                $hasSwap = true;
            }

        }

    } while($hasSwap);

    return $vector;
}

$v = array(9, 82, 7, 1, 3, 6, 5, 3, 2, 1, 0);

// array before
print_r($v);

// array after
print_r(bubblesort($v));

exit;

?>