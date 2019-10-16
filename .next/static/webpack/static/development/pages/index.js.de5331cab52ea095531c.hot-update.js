webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/Navbar.js":
/*!******************************!*\
  !*** ./Components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/NewbrandPrototype/Components/Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        position: fixed;\n        z-index: 9;\n        left: 0;\n        top: 0;\n        background-color: #2d2d2d;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        box-sizing: border-box;\n        height: ", ";\n        transition: all 0.5s ease-in;\n        padding: 0rem .8rem 0rem .8rem;\n        color: white;   \n        \n        .logo img{\n            width: ", ";\n            transition: all 1s ease-in;\n\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // import { Global, css } from '@emotion/core'



var Navbar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Navbar, _Component);

  function Navbar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Navbar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Navbar).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleScroll", function () {
      if (pageYOffset > 100) {
        _this.setState({
          navbarHeight: 30,
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
      navbarHeight: 45,
      logoWidth: 60
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Navbar, [{
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
      var NavbarWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject(), this.state.navbarHeight + "px", this.state.logoWidth + "px");
      return __jsx(NavbarWrapper, {
        onScroll: this.handleScroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("img", {
        src: "../static/img/logo_white.svg",
        alt: "elbilvelger",
        width: "140",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })))), __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Hei"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Hei"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Hei")));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.de5331cab52ea095531c.hot-update.js.map