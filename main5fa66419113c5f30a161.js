/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackcountrys/./src/css/main.css?");

/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateUI */ \"./src/updateUI.js\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./src/request.js\");\nconst searchEl = document.querySelector(\".search\");\r\n\r\nsearchEl.search.addEventListener(\"input\", (e) => {\r\n  const searchVal = searchEl.search.value.toLowerCase();\r\n  const cardsItem = document.querySelectorAll(\".cards__item\");\r\n  const cardsTitle = document.querySelectorAll(\".cards__title\");\r\n  cardsTitle.forEach((title, i) => {\r\n    if (title.textContent.toLowerCase().includes(searchVal)) {\r\n      cardsItem[i].style.display = \"block\";\r\n    } else {\r\n      cardsItem[i].style.display = \"none\";\r\n    }\r\n  });\r\n});\r\n\r\n// select\r\nconst searchSelect = document.querySelectorAll(\".search__select-list li\");\r\nconst searchSelectSpan = document.querySelector(\".search__select span\");\r\n\r\n\r\n\r\n\r\n// forEach\r\nsearchSelect.forEach((li) => {\r\n  li.addEventListener(\"click\", () => {\r\n    searchSelectSpan.textContent = li.textContent;\r\n    let filterAPI;\r\n\r\n    if (li.textContent == \"All\") {\r\n      filterAPI = \"https://restcountries.com/v3.1/all\";\r\n    } else {\r\n      filterAPI = `\r\n      https://restcountries.com/v3.1/region/${li.textContent}\r\n      `;\r\n    }\r\n    (0,_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(filterAPI)\r\n      .then((data) => {\r\n        (0,_updateUI__WEBPACK_IMPORTED_MODULE_0__.createCountries)(data);\r\n      })\r\n      .catch((err) => {\r\n        alert(err.message);\r\n        // console.log(err.message);\r\n      });\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://webpackcountrys/./src/filter.js?");

/***/ }),

/***/ "./src/laoder.js":
/*!***********************!*\
  !*** ./src/laoder.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"loaderFunc\": () => (/* binding */ loaderFunc)\n/* harmony export */ });\nconst loader = document.querySelector(\".loader\");\r\n\r\nconst loaderFunc = (info) => {\r\n  if (info) {\r\n    loader.classList.remove(\"hidden\");\r\n  } else {\r\n    loader.classList.add(\"hidden\");\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loaderFunc);\r\n\n\n//# sourceURL=webpack://webpackcountrys/./src/laoder.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./src/request.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mode */ \"./src/mode.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mode__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateUI */ \"./src/updateUI.js\");\n\r\n\r\n\r\n\r\n\r\nconst API = \"https://restcountries.com/v3.1/all\";\r\n\r\n\r\n\r\n(0,_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(API)\r\n  .then((data) => {\r\n    (0,_updateUI__WEBPACK_IMPORTED_MODULE_4__.createCountries)(data);\r\n  })\r\n  .catch((err) => {\r\n    console.log(err.message);\r\n  });\r\n\n\n//# sourceURL=webpack://webpackcountrys/./src/main.js?");

/***/ }),

/***/ "./src/mode.js":
/*!*********************!*\
  !*** ./src/mode.js ***!
  \*********************/
/***/ (() => {

eval("const modeBtn = document.querySelector(\".header__dark-mode \");\r\nconst body = document.querySelector(\"body\");\r\nconst darkId = document.querySelector(\"#dark-id\");\r\nif (JSON.parse(localStorage.getItem(\"mode\"))) {\r\n  body.classList.add(\"dark-mode\");\r\n} else {\r\n  body.classList.remove(\"dark-mode\");\r\n}\r\n\r\nmodeBtn.addEventListener(\"click\", () => {\r\n  // body.classList.toggle(\"dark-mode\");\r\n  if (body.classList.contains(\"dark-mode\")) {\r\n    body.classList.remove(\"dark-mode\");\r\n\r\n    darkId.textContent = \"Dark mode\";\r\n  } else {\r\n    body.classList.add(\"dark-mode\");\r\n    darkId.textContent = \"Light mode\";\r\n  }\r\n  localStorage.setItem(\"mode\", body.classList.contains(\"dark-mode\"));\r\n});\r\n\n\n//# sourceURL=webpack://webpackcountrys/./src/mode.js?");

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _laoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./laoder */ \"./src/laoder.js\");\n\r\n// function fetch\r\nconst request = async (url) => {\r\n  (0,_laoder__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true);\r\n  const req = await fetch(url);\r\n  const data = await req.json();\r\n\r\n  if (!req.ok) {\r\n    throw new Error(\"Something went wrong :(\");\r\n  }\r\n\r\n  (0,_laoder__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false);\r\n\r\n  return data;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\r\n\r\n\n\n//# sourceURL=webpack://webpackcountrys/./src/request.js?");

/***/ }),

/***/ "./src/updateUI.js":
/*!*************************!*\
  !*** ./src/updateUI.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCountries\": () => (/* binding */ createCountries),\n/* harmony export */   \"createCountryInfo\": () => (/* binding */ createCountryInfo)\n/* harmony export */ });\nconst cardsEl = document.querySelector(\".cards\");\r\n\r\n// function create\r\nconst createCountries = (countries) => {\r\n  cardsEl.innerHTML = \"\";\r\n  countries.forEach((country) => {\r\n    // console.log(country);\r\n    const {\r\n      name: { common },\r\n      population,\r\n      region,\r\n      capital,\r\n      flags: { svg },\r\n    } = country;\r\n\r\n    // LI ITEM\r\n    const li = document.createElement(\"li\");\r\n    li.classList.add(\"cards__item\");\r\n    li.innerHTML = `\r\n    <a href=\"./about.html?country=/name/${common}\">\r\n    <img\r\n    src=\"${svg}\"\r\n    alt=\"germany-flag\"\r\n    width=\"267\"\r\n    height=\"160\"\r\n    />\r\n       <div class=\"cards__item-inner\">\r\n    <h3 class=\"cards__title\">${common}</h3>\r\n    <p class=\"population\">Population: <span>${population}</span></p>\r\n    <p class=\"region\">Region: <span>${region}</span></p>\r\n    <p class=\"capital\">Capital: <span>${\r\n      capital ? capital : \"No capital\"\r\n    } </span></p>\r\n        </div> \r\n    </a>\r\n     \r\n      `;\r\n    // UL LIST\r\n    cardsEl.appendChild(li);\r\n  });\r\n};\r\n\r\n// ABOUT UI\r\nconst countryInfoEl = document.querySelector(\".country-info\");\r\n\r\nconst createCountryInfo = (country) => {\r\n  const {\r\n    population,\r\n    borders,\r\n    capital,\r\n    flags: { svg },\r\n    name,\r\n    region,\r\n    tld,\r\n    currencies,\r\n    languages,\r\n    subregion,\r\n  } = country;\r\n  const nativeName = Object.values(name.nativeName)[0].official;\r\n  const currency = Object.values(currencies)[0].name;\r\n  const lenguage = Object.values(languages);\r\n  console.log(lenguage);\r\n  console.log(currency);\r\n  console.log(country);\r\n\r\n  countryInfoEl.innerHTML = `\r\n  <img\r\nclass=\"country-info__img\"\r\nsrc=\"${svg}\"\r\nalt=\"germany-flag\"\r\nwidth=\"560\"\r\nheight=\"400\"\r\n/>\r\n<div class=\"country-info__content\">\r\n<h2>${name.common}</h2>\r\n<ul class=\"country-info__list\">\r\n  <li class=\"country-info__item\">\r\n    <p class=\"name\">\r\n      Native Name:\r\n      <span>${nativeName}</span>\r\n    </p>\r\n    <p class=\"population\">\r\n      Population:\r\n      <span>${population}</span>\r\n    </p>\r\n    <p class=\"region\">\r\n      Region:\r\n      <span>${region}</span>\r\n    </p>\r\n    <p class=\"sub-region\">\r\n      Sub Region:\r\n      <span>${subregion}</span>\r\n    </p>\r\n    <p class=\"capital\">\r\n      Capital:\r\n      <span>${capital}</span>\r\n    </p>\r\n  </li>\r\n  <li class=\"country-info__item\">\r\n    <p class=\"name\">\r\n      Top Level Domain:\r\n      <span>${tld}</span>\r\n    </p>\r\n    <p class=\"population\">\r\n      Currencies:\r\n      <span>${currency}</span>\r\n    </p>\r\n    <p class=\"region\">\r\n      Languages:\r\n      <span>${lenguage}</span>\r\n    </p>\r\n  </li>\r\n</ul>\r\n\r\n<div class=\"country-info__borders\">\r\n  <h3>Border Countries:</h3>\r\n${\r\n  borders\r\n    ? borders.map((border) => {\r\n        return `  \r\n  <a href=\"./about.html?country=/alpha/${border}\">${border}</a>\r\n  `;\r\n      })\r\n    : \"No Borders\"\r\n}\r\n</div>\r\n</div>\r\n  \r\n  `;\r\n};\r\n\r\n//\r\n\n\n//# sourceURL=webpack://webpackcountrys/./src/updateUI.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;