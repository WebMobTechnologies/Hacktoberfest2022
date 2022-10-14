<?php

function binarySearch(Array $arr, $num)
{
	if (count($arr) === 0) return false;
	$left = 0;
	$right = count($arr) - 1;
	while ($left <= $right) {
		$mid = floor(($left + $right) / 2);
		if($arr[$mid] == $num) {
			return true;
		}
		if ($num < $arr[$mid]) {
			
			$right = $mid -1;
		}
		else {
		
			$left = $mid + 1;
		}
	}
	return false;
}

$arr = range(0, 30);
if(binarySearch($arr, 10) == true) {
	echo "Value: ".$value." Exists";
}
else {
	echo "Value: ".$value." Doesnt Exist";
}
if(binarySearch($arr, 90) == true) {
	echo "Value: ".$value." Exists";
}
else {
	echo "Value: ".$value." Doesnt Exist";
}
?>

