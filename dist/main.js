/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Validation.js":
/*!***********************************!*\
  !*** ./src/modules/Validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyValidConfirmPassword": () => (/* binding */ applyValidConfirmPassword),
/* harmony export */   "applyValidLength": () => (/* binding */ applyValidLength),
/* harmony export */   "applyValidZipCode": () => (/* binding */ applyValidZipCode),
/* harmony export */   "applyValidationWithPattern": () => (/* binding */ applyValidationWithPattern),
/* harmony export */   "applyValidationWithSelection": () => (/* binding */ applyValidationWithSelection)
/* harmony export */ });
/* harmony import */ var _ZipCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ZipCode */ "./src/modules/ZipCode.js");

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
        _ZipCode__WEBPACK_IMPORTED_MODULE_0__["default"][countryElement.value.toLowerCase()]
      );
      element.checkValidity();
    });
    countryElement.addEventListener("input", () => {
      element.checkValidity();
      element.setAttribute(
        "pattern",
        _ZipCode__WEBPACK_IMPORTED_MODULE_0__["default"][countryElement.value.toLowerCase()]
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




/***/ }),

/***/ "./src/modules/ZipCode.js":
/*!********************************!*\
  !*** ./src/modules/ZipCode.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ZipCode = {
  usa: "^\\b\\d{5}\\b(?:[- ]{1}\\d{4})?$",
  philippines: "^\\d{4}$",
  japan: "^\\d{7}\\s\\(\\d{3}-\\d{4}\\)$",
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZipCode);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Validation */ "./src/modules/Validation.js");
/* harmony import */ var _modules_ZipCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ZipCode */ "./src/modules/ZipCode.js");



const initValid = function initializeValidationOfEachElement() {
  const email = document.querySelector("#email-input");
  const emailError = document.querySelector("#email-error-message");
  (0,_modules_Validation__WEBPACK_IMPORTED_MODULE_0__.applyValidationWithPattern)(email, "email", emailError, "john@gmail.com");

  const selectedCountry = document.querySelector("#country");
  (0,_modules_Validation__WEBPACK_IMPORTED_MODULE_0__.applyValidationWithSelection)(selectedCountry, "country");

  const zipCode = document.querySelector("#zip-code");
  (0,_modules_Validation__WEBPACK_IMPORTED_MODULE_0__.applyValidZipCode)(zipCode, selectedCountry);

  const password = document.querySelector("#password");
  (0,_modules_Validation__WEBPACK_IMPORTED_MODULE_0__.applyValidLength)(password, 8, "Password");

  const confirmPassword = document.querySelector("#confirm-password");
  (0,_modules_Validation__WEBPACK_IMPORTED_MODULE_0__.applyValidConfirmPassword)(confirmPassword, password);
};

initValid();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNENBQTRDLE9BQU8sYUFBYSxhQUFhO0FBQzdFLDZDQUE2QyxPQUFPO0FBQ3BEO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx5REFBeUQsTUFBTTtBQUMvRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdEQUFPO0FBQ2Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0RBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTSwyQkFBMkIsUUFBUTtBQUNwRDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBUUU7Ozs7Ozs7Ozs7Ozs7OztBQzFHRjtBQUNBLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7QUFDckMscUJBQXFCLEVBQUU7QUFDdkIsZUFBZSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUU7QUFDcEM7QUFDQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7VUNMdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNBOEI7QUFDVTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrRUFBMEI7O0FBRTVCO0FBQ0EsRUFBRSxpRkFBNEI7O0FBRTlCO0FBQ0EsRUFBRSxzRUFBaUI7O0FBRW5CO0FBQ0EsRUFBRSxxRUFBZ0I7O0FBRWxCO0FBQ0EsRUFBRSw4RUFBeUI7QUFDM0I7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGUtZm9ybS12YWxpZGF0aW9uLy4vc3JjL21vZHVsZXMvVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtZm9ybS12YWxpZGF0aW9uLy4vc3JjL21vZHVsZXMvWmlwQ29kZS5qcyIsIndlYnBhY2s6Ly9zaW1wbGUtZm9ybS12YWxpZGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NpbXBsZS1mb3JtLXZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NpbXBsZS1mb3JtLXZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaW1wbGUtZm9ybS12YWxpZGF0aW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2ltcGxlLWZvcm0tdmFsaWRhdGlvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgWmlwQ29kZSBmcm9tIFwiLi9aaXBDb2RlXCI7XG5jb25zdCBhcHBseVZhbGlkYXRpb25XaXRoUGF0dGVybiA9XG4gIGZ1bmN0aW9uIGFwcGx5VmFsaWRhdGlvblRvQW5JbnB1dFdpdGhSZWdleFBhdHRlcm4oXG4gICAgZWxlbWVudCxcbiAgICB0aXRsZSxcbiAgICBlcnJvckVsZW1lbnQsXG4gICAgdmFsaWRFeGFtcGxlID0gXCJcIlxuICApIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICBlbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgaWYgKGVsZW1lbnQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIGVycm9yRWxlbWVudC5pbm5lclRleHQgPSBcIkNvcnJlY3QhXCI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW52YWxpZFwiLCAoKSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC52YWxpZGl0eS50eXBlTWlzbWF0Y2gpIHtcbiAgICAgICAgZXJyb3JFbGVtZW50LmlubmVyVGV4dCA9IGBJbnZhbGlkICR7dGl0bGV9IGZvcm1hdCwgZWcuJHt2YWxpZEV4YW1wbGV9YDtcbiAgICAgICAgZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eShgSW52YWxpZCAke3RpdGxlfSBmb3JtYXQuYCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbmNvbnN0IGFwcGx5VmFsaWRhdGlvbldpdGhTZWxlY3Rpb24gPSBmdW5jdGlvbiBhcHBseVZhbGlkYXRpb25Ub0FTZWxlY3Rpb25JbnB1dChcbiAgZWxlbWVudCxcbiAgdGl0bGVcbikge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICBlbGVtZW50LmNoZWNrVmFsaWRpdHkoKTtcbiAgfSk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImludmFsaWRcIiwgKCkgPT4ge1xuICAgIGlmIChlbGVtZW50LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eShgUGxlYXNlIHNlbGVjdCBhIHZhbGlkICR7dGl0bGV9YCk7XG4gICAgfVxuICB9KTtcbn07XG5jb25zdCBhcHBseVZhbGlkWmlwQ29kZSA9XG4gIGZ1bmN0aW9uIGFwcGx5VmFsaWRhdGlvbklmWmlwQ29kZU1hdGNoZXNTZWxlY3RlZENvdW50cnkoXG4gICAgZWxlbWVudCxcbiAgICBjb3VudHJ5RWxlbWVudFxuICApIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJwYXR0ZXJuXCIsXG4gICAgICAgIFppcENvZGVbY291bnRyeUVsZW1lbnQudmFsdWUudG9Mb3dlckNhc2UoKV1cbiAgICAgICk7XG4gICAgICBlbGVtZW50LmNoZWNrVmFsaWRpdHkoKTtcbiAgICB9KTtcbiAgICBjb3VudHJ5RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgZWxlbWVudC5jaGVja1ZhbGlkaXR5KCk7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJwYXR0ZXJuXCIsXG4gICAgICAgIFppcENvZGVbY291bnRyeUVsZW1lbnQudmFsdWUudG9Mb3dlckNhc2UoKV1cbiAgICAgICk7XG4gICAgICBpZiAoZWxlbWVudC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuY29uc3QgYXBwbHlWYWxpZExlbmd0aCA9IGZ1bmN0aW9uIGFwcGx5VmFsaWRhdGlvbk9mTGVuZ3RoKFxuICBlbGVtZW50LFxuICBsZW5ndGgsXG4gIHR5cGVcbikge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtaW5sZW5ndGhcIiwgYCR7bGVuZ3RofWApO1xuICAgIGVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgZWxlbWVudC5jaGVja1ZhbGlkaXR5KCk7XG4gIH0pO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnZhbGlkXCIsICgpID0+IHtcbiAgICBpZiAocGFzc3dvcmQudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICAgIGVsZW1lbnQuc2V0Q3VzdG9tVmFsaWRpdHkoXG4gICAgICAgIGAke3R5cGV9IGlzIHRvbyBzaG9ydC4gTWluaW11bSBpcyAke2xlbmd0aH0gY2hhcmFjdGVyc2BcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGFwcGx5VmFsaWRDb25maXJtUGFzc3dvcmQgPSBmdW5jdGlvbiBhcHBseVZhbGlkQ29uZmlybVBhc3N3b3JkKFxuICBjb25maXJtUGFzc3dvcmRFbGVtZW50LFxuICBwYXNzd29yZEVsZW1lbnRcbikge1xuICBjb25zb2xlLmxvZyhcImxvbD9cIik7XG4gIGNvbmZpcm1QYXNzd29yZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwYXNzd29yZEVsZW1lbnQudmFsdWUgIT09IGNvbmZpcm1QYXNzd29yZEVsZW1lbnQudmFsdWUgfHxcbiAgICAgIHBhc3N3b3JkRWxlbWVudC52YWx1ZSA9PT0gXCJcIlxuICAgICkge1xuICAgICAgY29uZmlybVBhc3N3b3JkRWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eShcbiAgICAgICAgXCJQYXNzd29yZCBhbmQgQ29uZmlybSBQYXNzd29yZCBkbyBub3QgbWF0Y2hcIlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlybVBhc3N3b3JkRWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgYXBwbHlWYWxpZGF0aW9uV2l0aFBhdHRlcm4sXG4gIGFwcGx5VmFsaWRhdGlvbldpdGhTZWxlY3Rpb24sXG4gIGFwcGx5VmFsaWRaaXBDb2RlLFxuICBhcHBseVZhbGlkTGVuZ3RoLFxuICBhcHBseVZhbGlkQ29uZmlybVBhc3N3b3JkLFxufTtcbiIsImNvbnN0IFppcENvZGUgPSB7XG4gIHVzYTogXCJeXFxcXGJcXFxcZHs1fVxcXFxiKD86Wy0gXXsxfVxcXFxkezR9KT8kXCIsXG4gIHBoaWxpcHBpbmVzOiBcIl5cXFxcZHs0fSRcIixcbiAgamFwYW46IFwiXlxcXFxkezd9XFxcXHNcXFxcKFxcXFxkezN9LVxcXFxkezR9XFxcXCkkXCIsXG59O1xuZXhwb3J0IGRlZmF1bHQgWmlwQ29kZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgYXBwbHlWYWxpZGF0aW9uV2l0aFBhdHRlcm4sXG4gIGFwcGx5VmFsaWRhdGlvbldpdGhTZWxlY3Rpb24sXG4gIGFwcGx5VmFsaWRaaXBDb2RlLFxuICBhcHBseVZhbGlkTGVuZ3RoLFxuICBhcHBseVZhbGlkQ29uZmlybVBhc3N3b3JkLFxufSBmcm9tIFwiLi9tb2R1bGVzL1ZhbGlkYXRpb25cIjtcbmltcG9ydCBaaXBDb2RlIGZyb20gXCIuL21vZHVsZXMvWmlwQ29kZVwiO1xuXG5jb25zdCBpbml0VmFsaWQgPSBmdW5jdGlvbiBpbml0aWFsaXplVmFsaWRhdGlvbk9mRWFjaEVsZW1lbnQoKSB7XG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbC1pbnB1dFwiKTtcbiAgY29uc3QgZW1haWxFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWwtZXJyb3ItbWVzc2FnZVwiKTtcbiAgYXBwbHlWYWxpZGF0aW9uV2l0aFBhdHRlcm4oZW1haWwsIFwiZW1haWxcIiwgZW1haWxFcnJvciwgXCJqb2huQGdtYWlsLmNvbVwiKTtcblxuICBjb25zdCBzZWxlY3RlZENvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnlcIik7XG4gIGFwcGx5VmFsaWRhdGlvbldpdGhTZWxlY3Rpb24oc2VsZWN0ZWRDb3VudHJ5LCBcImNvdW50cnlcIik7XG5cbiAgY29uc3QgemlwQ29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjemlwLWNvZGVcIik7XG4gIGFwcGx5VmFsaWRaaXBDb2RlKHppcENvZGUsIHNlbGVjdGVkQ291bnRyeSk7XG5cbiAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkXCIpO1xuICBhcHBseVZhbGlkTGVuZ3RoKHBhc3N3b3JkLCA4LCBcIlBhc3N3b3JkXCIpO1xuXG4gIGNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybS1wYXNzd29yZFwiKTtcbiAgYXBwbHlWYWxpZENvbmZpcm1QYXNzd29yZChjb25maXJtUGFzc3dvcmQsIHBhc3N3b3JkKTtcbn07XG5cbmluaXRWYWxpZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9