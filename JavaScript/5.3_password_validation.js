"use strict";

const passwordValidation = (password) => {
  if (password.length < 7) return "Weak";
  if (password.length > 7) return "Strong";
  else return "Ok";
};

const passwordValidation1 = (password) => (password.length < 7 ? "Weak" : "Strong");

const passwordValidation2 = (password) => (password.length < 7 && true ? "Weak" : "Strong");

const advancedValidation = (password) => {
  if (password.length < 7) return "Weak";
  if (password.length > 7 && /[A-Z]/.test(password)) return "Very Strong";
  else if (password.length > 7) return "Strong";
  else return "Not bad";
};

// console.log(advancedValidation("66611A111"));
