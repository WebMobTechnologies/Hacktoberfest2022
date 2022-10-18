function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }
  
  console.log(validateEmail("test@gmail.com234")); // false
  console.log(validateEmail("test@gmail...com")); // false
  console.log(validateEmail("test")); // false
  console.log(validateEmail("test@gmail.com")); // true
  