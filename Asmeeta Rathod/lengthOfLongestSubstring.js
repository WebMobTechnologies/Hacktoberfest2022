/**
 * @param {string} s
 * @return {number}
 */
const removeDuplicateCharacters = (str) => [...new Set(str)].join("");

function removeContinuousDuplicateChar(string) {
  let current = "";
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    if (current !== string[i]) {
      current = string[i];
      newStr += string[i];
    }
  }
  return newStr;
}

var lengthOfLongestSubstring = function (s) {
  if (s) {
    let sub = "";
    let len = 0;
    let sub1 = "";

    let str = removeContinuousDuplicateChar(s);
    let removedDuplicatedStr = removeDuplicateCharacters(
      removeContinuousDuplicateChar(s)
    );

    if (s.includes(removedDuplicatedStr)) {
      return removedDuplicatedStr.length;
    } else {
      if (str.length > 1) {
        for (let j = 0; j <= str.length; j++) {
          sub = str.substr(0, j);
          for (let i = 0; i <= sub.length; i++) {
            sub1 = removeDuplicateCharacters(sub.substr(i, sub.length));
            if (sub1 && s.includes(sub1) && len < sub1.length) {
              len = sub1.length;
            }
          }
        }
        return len;
      } else {
        return 1;
      }
    }
  } else {
    return 0;
  }
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
