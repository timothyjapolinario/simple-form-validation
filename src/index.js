import {
  applyValidationWithPattern,
  applyValidationWithSelection,
  applyValidZipCode,
  applyValidLength,
  applyValidConfirmPassword,
} from "./modules/Validation";
import ZipCode from "./modules/ZipCode";

const initValid = function initializeValidationOfEachElement() {
  const email = document.querySelector("#email-input");
  const emailError = document.querySelector("#email-error-message");
  applyValidationWithPattern(email, "email", emailError, "john@gmail.com");

  const selectedCountry = document.querySelector("#country");
  applyValidationWithSelection(selectedCountry, "country");

  const zipCode = document.querySelector("#zip-code");
  applyValidZipCode(zipCode, selectedCountry);

  const password = document.querySelector("#password");
  applyValidLength(password, 8, "Password");

  const confirmPassword = document.querySelector("#confirm-password");
  applyValidConfirmPassword(confirmPassword, password);
};

initValid();
