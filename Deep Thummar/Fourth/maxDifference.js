// get the random array of 25 numbers between 0 to 100
var N = 25; // Length of array
var between = 100; // from 0 to where?

var arrayList = [...Array(N)].map(() => Math.floor(Math.random() * between));
document.getElementById("arrList").innerHTML = arrayList;
document.getElementById("SortedList").innerHTML = arrayList.sort(function (
  a,
  b
) {
  return a - b;
});
document.getElementById("maxDiff").innerHTML =
  "Max Difference is " + (Math.max(...arrayList) - Math.min(...arrayList));
