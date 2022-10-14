<?php
function findPairs(array $arr,int $given_number) {
  $arr_pairs = "";
  for ($i = 0; $i <= count($arr); $i++) {
     for ($j = $i + 1; $j < count($arr); $j++) {
        if ($arr[$i] + $arr[$j] == (int)$given_number) {
           $arr_pairs .= $arr[$i] . "," . $arr[$j] . ";";
        }
     }
  }
  return $arr_pairs;
}
$num_arr = array(-2,-1,0,1,2,3,4,5,6,7,8,9);
echo findPairs($num_arr, 3)."\n";
echo findPairs($num_arr, 9)."\n";
echo findPairs($num_arr, 1)."\n";
?>
