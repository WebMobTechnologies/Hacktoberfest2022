const data = document.getElementById("occurance");

const occFunction = () => {
  const enteredString = document.getElementById("textId").value;
  const enteredChar = document.getElementById("charId").value;

  let res = 0;

  for (let i = 0; i < enteredString.length; i++) {
    // checking character in string
    if (enteredString.charAt(i) == enteredChar) res++;
  }

  if (res == 1) {
    return (data.innerHTML = `Character " ${enteredChar} " is repeated ${res} time`);
  } else {
    return (data.innerHTML = `Character " ${enteredChar} " is repeated ${res} times`);
  }
};
