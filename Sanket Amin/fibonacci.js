// program to display fibonacci sequence using recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

if(25 <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < 25; i++) {
        console.log(fibonacci(i));
    }
}