const validate = (email, password) => {
  let mailValid = false,
    passwordValid = false;
  if (email.includes("@") && email.includes(".com")) {
    mailValid = true;
  }
  if (password.length >= 0) {
    passwordValid = true;
  }

  if (mailValid && passwordValid) {
    return true;
  } else return false;
};

export default validate;
