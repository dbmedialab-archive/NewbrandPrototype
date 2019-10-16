webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/Navbar.js":
/*!******************************!*\
  !*** ./Components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/NewbrandPrototype/Components/Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\nposition: fixed;\nz-index: 9;\nleft: 0;\ntop: 0;\nbackground-color: #2d2d2d;\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nwidth: 100%;\nbox-sizing: border-box;\nheight: 100px;\ntransition: all 0.5s ease-in;\npadding: 0rem .8rem 0rem .8rem;\ncolor: white;   \n\n.logo img{\n    width: 60px;\n    transition: all 1s ease-in;\n\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // import { Global, css } from '@emotion/core'


var NavbarWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject());

var Navbar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navbar, _Component);

  function Navbar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar).call(this, props));
    _this.state = {
      navbarHeight: 60,
      logoWidth: 60
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "render",
    value: function render() {
      return __jsx(NavbarWrapper, {
        onScroll: this.handleScroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("img", {
        src: "../static/img/logo_white.svg",
        alt: "elbilvelger",
        width: "140",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })))), __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Hei"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Hei"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Hei")));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.ba67b6b62841978e8c0b.hot-update.js.map