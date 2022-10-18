const countVowel= (str) => { 

    // find the count of vowels
    let count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const valueFromUser = "My Name is Anthony Gonsalves";

const vowelCount = countVowel(valueFromUser);

console.log("Total Vowels in the string is => "+vowelCount);