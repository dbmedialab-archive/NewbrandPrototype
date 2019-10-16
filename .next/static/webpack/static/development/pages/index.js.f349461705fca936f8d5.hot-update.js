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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/NewbrandPrototype/Components/Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


 // import { Global, css } from '@emotion/core'



var Navbar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navbar, _Component);

  function Navbar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleScroll", function () {
      if (pageYOffset > 100) {
        _this.setState({
          navbarHeight: 60,
          logoWidth: 60
        });
      } else if (pageYOffset < 300) {
        _this.setState({
          navbarHeight: 45,
          logoWidth: 60
        });
      }
    });

    _this.state = {
      navbarHeight: 60,
      logoWidth: 60
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(NavbarWrapper, {
        onScroll: this.handleScroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("img", {
        src: "../static/img/logo_white.svg",
        alt: "elbilvelger",
        width: "140",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })))), __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Hei"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Hei"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Hei")));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.f349461705fca936f8d5.hot-update.js.map