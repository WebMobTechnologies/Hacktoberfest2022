function mergeSortedArray(a,b){
    const arr=[...a,...b]
    arr.sort();
    return arr
}
const result=mergeSortedArray([4,6,7,8], [1,2,3,5,9]);