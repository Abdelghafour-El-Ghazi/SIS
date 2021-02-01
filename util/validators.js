module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }
  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Email must be a valid email address";
    }
  }
  if (password === "") {
    errors.password = "Password must not empty";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

// module.exports.validateLoginInput = (username, password) => {
//   const errors = {};
//   if (username.trim() === "") {
//     errors.username = "Username must not be empty";
//   }
//   if (password.trim() === "") {
//     errors.password = "Password must not be empty";
//   }

//   return {
//     errors,
//     valid: Object.keys(errors).length < 1,
//   };
// };

module.exports.validateKidInput = (
  firstname,
  lastname,
  sexe,
  father,
  mother,
  adress,
  birthcity,
  birthdate,
  cin,
  firstvac,
  secondvac,
  thirdvac,
  fourthvac,
  fifthvac
) => {
  const errors = {};

  if (firstname.trim() === "") {
    errors.firstname = "firstname must not be empty";
  }
  if (lastname.trim() === "") {
    errors.lastname = "lastname must not be empty";
  }
  if (sexe.trim() === "") {
    errors.sexe = "sexe body must not be empty";
  }
  if (father.trim() === "") {
    errors.father = "father body must not be empty";
  }
  if (mother.trim() === "") {
    errors.mother = "mother body must not be empty";
  }
  if (cin.trim() === "") {
    errors.cin = "cin body must not be empty";
  }
  if (firstvac.trim() === "") {
    errors.firstvac = "first vaccination  date must be provided";
  }
  if (secondvac.trim() === "") {
    errors.secondvac = "second vaccination date must be provided";
  }
  if (thirdvac.trim() === "") {
    errors.thirdvac = "third vaccination  date must be provided";
  }
  if (fourthvac.trim() === "") {
    errors.fourthvac = "fourth vaccination date must be provided";
  }
  if (fifthvac.trim() === "") {
    errors.fifthvac = "fifth vaccination date must be provided";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
