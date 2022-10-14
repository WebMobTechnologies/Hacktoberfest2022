// How to divide an array in multiple equal parts in JS?

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const threePartIndex = Math.ceil(list.length / 3);

const thirdPart = list.splice(-threePartIndex);
const secondPart = list.splice(-threePartIndex);
const firstPart = list;     
