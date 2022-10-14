const getValues = (array, num) => {
   return array.slice(0, num)

}
const array = [7, 5, 4, 8, 9, 7, 5, 6, 7, 5, 7]
console.log(getValues(array, 5))

/* 
For Example :

Input : array = [7, 5, 4, 8, 9, 7, 5, 6, 7, 5, 7] 

Output:[7, 5, 4, 8, 9]
*/
 