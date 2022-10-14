// Write a function which will test string as a literal and as an object?
function check(str) {
    if(str instanceof String) {
        return "It is an object of string";
    } else {
        if(typeof str === "string") {
            return "It is a string literal";
        } else {
            return "another type";
        }
    }
}
  
// Pass a literal
console.log(check("Hello geeks"));
  
// Pass an object of string
let s = new String("Hi");
console.log(check(s));