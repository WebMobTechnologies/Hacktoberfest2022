let numArray = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
var getRoman = (n) => {
  if (n % 1 != 0) {
    return null;
  }
  let num = parseInt(n);
  switch (num) {
    case 1:
      return "I";
      break;
    case 4:
      return "IV";
      break;
    case 5:
      return "V";
      break;
    case 9:
      return "IX";
      break;
    case 10:
      return "X";
      break;
    case 40:
      return "XL";
      break;
    case 50:
      return "L";
      break;
    case 90:
      return "XC";
      break;
    case 100:
      return "C";
      break;
    case 400:
      return "CD";
      break;
    case 500:
      return "D";
      break;
    case 900:
      return "CM";
      break;
    case 1000:
      return "M";
      break;
    default:
      return null;
      break;
  }
};

var getMax = (n) => {
  let max = null;
  let index = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (n >= numArray[i] && n <= numArray[i + 1]) {
      max = numArray[i];
      index = i;
    }
    if (i == numArray.length - 1 && n >= numArray[i]) {
      index = i;
      max = numArray[i];
    }
  }
  return max;
};

var getRemaining = (n) => {
  let remaining;
  let totalRemaining = 0;
  let ans = "";
  remaining = n; // 700

  while (getMax(remaining) !== null) {
    ans += getRoman(getMax(remaining)); // 100
    totalRemaining += getMax(remaining);
    remaining = n - totalRemaining; // 700 - 500 =200
  }

  if (ans == "") {
    return null;
  }
  return ans;
};

var intToRoman = function (num) {
  let ans = "";

  if (num >= 1 && num <= 3999) {
    if (getRoman(num) === null) {
      ans = getRemaining(num);
    } else {
      ans = getRoman(num);
    }
  } else {
    ans = null;
  }
  return ans;
};
