import ZipCode from "./ZipCode";
const applyValidationWithPattern =
  function applyValidationToAnInputWithRegexPattern(
    element,
    title,
    errorElement,
    validExample = ""
  ) {
    element.addEventListener("input", () => {
      element.setCustomValidity("");
      if (element.checkValidity()) {
        errorElement.innerText = "Correct!";
      }
    });
    element.addEventListener("invalid", () => {
      if (element.validity.typeMismatch) {
        errorElement.innerText = `Invalid ${title} format, eg.${validExample}`;
        element.setCustomValidity(`Invalid ${title} format.`);
      }
    });
  };

const applyValidationWithSelection = function applyValidationToASelectionInput(
  element,
  title
) {
  element.addEventListener("input", () => {
    element.setCustomValidity("");
    element.checkValidity();
  });
  element.addEventListener("invalid", () => {
    if (element.validity.valueMissing) {
      element.setCustomValidity(`Please select a valid ${title}`);
    }
  });
};
const applyValidZipCode =
  function applyValidationIfZipCodeMatchesSelectedCountry(
    element,
    countryElement
  ) {
    element.addEventListener("input", () => {
      element.setAttribute(
        "pattern",
        ZipCode[countryElement.value.toLowerCase()]
      );
      element.checkValidity();
    });
    countryElement.addEventListener("input", () => {
      element.checkValidity();
      element.setAttribute(
        "pattern",
        ZipCode[countryElement.value.toLowerCase()]
      );
      if (element.validity.patternMismatch) {
        element.style.borderColor = "red";
      } else {
        element.style.borderColor = "";
      }
    });
  };

const applyValidLength = function applyValidationOfLength(
  element,
  length,
  type
) {
  element.addEventListener("input", () => {
    element.setAttribute("minlength", `${length}`);
    element.setCustomValidity("");
    element.checkValidity();
  });
  element.addEventListener("invalid", () => {
    if (password.validity.tooShort) {
      element.setCustomValidity(
        `${type} is too short. Minimum is ${length} characters`
      );
    }
  });
};

const applyValidConfirmPassword = function applyValidConfirmPassword(
  confirmPasswordElement,
  passwordElement
) {
  console.log("lol?");
  confirmPasswordElement.addEventListener("input", () => {
    if (
      passwordElement.value !== confirmPasswordElement.value ||
      passwordElement.value === ""
    ) {
      confirmPasswordElement.setCustomValidity(
        "Password and Confirm Password do not match"
      );
    } else {
      confirmPasswordElement.setCustomValidity("");
    }
  });
};

export {
  applyValidationWithPattern,
  applyValidationWithSelection,
  applyValidZipCode,
  applyValidLength,
  applyValidConfirmPassword,
};
