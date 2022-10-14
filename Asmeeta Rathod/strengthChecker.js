function strengthChecker(passwordParameter) {
  let strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );
  let mediumPassword = new RegExp(
    "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
  );
  if (strongPassword.test(passwordParameter)) {
    return "Strong";
  } else if (mediumPassword.test(passwordParameter)) {
    return "Medium";
  } else {
    return "Weak";
  }
}

console.log(strengthChecker("LksLdmDfgsldkgm?434?23")); // Strong
console.log(strengthChecker("test#345")); // Weak
console.log(strengthChecker("Success#345")); // Strong
