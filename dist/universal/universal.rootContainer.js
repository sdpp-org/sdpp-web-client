(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../src/universal/Universal.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../src/universal/Universal.tsx":
/*!************************************************************************************!*\
  !*** /Users/mistock1706/work/sdpp-org/sdpp-web-client/src/universal/Universal.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "../../src/universal/components/Header.tsx");
/* harmony import */ var _components_TransferredState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TransferredState */ "../../src/universal/components/TransferredState.tsx");
/* harmony import */ var _contexts_UniversalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contexts/UniversalContext */ "../../src/universal/contexts/UniversalContext.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Universal = function Universal(_ref) {
  var addPath = _ref.addPath,
      children = _ref.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      count = _React$useState2[0],
      setCount = _React$useState2[1];

  var handleClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return function () {
      setCount(count + 1);
    };
  }, [count]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "[count]"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handleClickButton
  }, "add")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TransferredState__WEBPACK_IMPORTED_MODULE_2__["default"], null), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Universal);
Universal.contexts = {
  UniversalContext: _contexts_UniversalContext__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ }),

/***/ "../../src/universal/components/Header.tsx":
/*!********************************************************************************************!*\
  !*** /Users/mistock1706/work/sdpp-org/sdpp-web-client/src/universal/components/Header.tsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Title = function Title() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "universal");
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "[Header]", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Title, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "../../src/universal/components/TransferredState.tsx":
/*!******************************************************************************************************!*\
  !*** /Users/mistock1706/work/sdpp-org/sdpp-web-client/src/universal/components/TransferredState.tsx ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_UniversalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/UniversalContext */ "../../src/universal/contexts/UniversalContext.tsx");



var TransferredState = function TransferredState() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "[Transferred State]"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_UniversalContext__WEBPACK_IMPORTED_MODULE_1__["default"].Consumer, null, function (value) {
    console.log('[universal] predefinedState: %o', value);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "predefinedState value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, value['foo']));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TransferredState);

/***/ }),

/***/ "../../src/universal/contexts/UniversalContext.tsx":
/*!****************************************************************************************************!*\
  !*** /Users/mistock1706/work/sdpp-org/sdpp-web-client/src/universal/contexts/UniversalContext.tsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var UniversalContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
/* harmony default export */ __webpack_exports__["default"] = (UniversalContext);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ })));
//# sourceMappingURL=universal.rootContainer.js.map