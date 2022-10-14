const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odds = arr.filter(number => {
    return number % 2 !== 0;
});

console.log(odds); // 👉️ [1, 3, 5, 7, 9]
