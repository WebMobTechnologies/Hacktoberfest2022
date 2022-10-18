const array = [1, 2, 4, 5, -3, -5, 7, 10]

let max = array[0], min = array[0]

for (let i = 0; i < array.length; i++) {
    if (array[i] > max) { max = array[i]; }
    if (array[i] < min) { min = array[i]; }
}
console.log("max = " + max);
console.log("min = " + min);