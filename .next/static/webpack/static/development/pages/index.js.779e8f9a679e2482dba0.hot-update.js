webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/AllCars.js":
/*!*******************************!*\
  !*** ./Components/AllCars.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _CarCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CarCard */ "./Components/CarCard.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _elbiler_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../elbiler.json */ "./elbiler.json");
var _elbiler_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../elbiler.json */ "./elbiler.json", 1);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var react_awesome_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-awesome-modal */ "./node_modules/react-awesome-modal/lib/index.js");
/* harmony import */ var react_awesome_modal__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_awesome_modal__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");









var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/NewbrandPrototype/Components/AllCars.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  color: #2d2d2d;\n  text-align: center;\n  padding: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var ModalContent = _emotion_styled__WEBPACK_IMPORTED_MODULE_13__["default"].div(_templateObject());

var AllCars =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AllCars, _React$Component);

  function AllCars(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AllCars);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AllCars).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "sortBySize", function () {
      var elbilerSize = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.elbiler);

      elbilerSize.sort(function (a, b) {
        return a.storelse - b.storelse;
      });

      if (_this.state.orderByRange === "desc") {
        elbilerSize.reverse();
      }

      _this.setState({
        elbiler: elbilerSize
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "sortByRange", function () {
      var elbilerCopy = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.elbiler);

      elbilerCopy.sort(function (a, b) {
        return a.rekkevidde - b.rekkevidde;
      });

      if (_this.state.orderByRange === "desc") {
        elbilerCopy.reverse();
      }

      _this.setState({
        elbiler: elbilerCopy
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "sortByPrice", function () {
      var elbilerCopy = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.elbiler);

      elbilerCopy.sort(function (a, b) {
        return a.pris - b.pris;
      });

      if (_this.state.orderByPrice === "desc") {
        elbilerCopy.reverse();
      }

      _this.setState({
        elbiler: elbilerCopy
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "reset", function () {
      _this.setState({
        elbiler: _this.state.elbilDefault
      });
    });

    _this.state = {
      elbiler: _elbiler_json__WEBPACK_IMPORTED_MODULE_12__,
      elbilDefault: Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_elbiler_json__WEBPACK_IMPORTED_MODULE_12__),
      orderByRange: 'asc',
      orderByPrice: 'asc',
      orderBySize: 'asc',
      visible: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AllCars, [{
    key: "openModal",
    value: function openModal() {
      this.setState({
        visible: true
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        visible: false
      });
    } // Have to change from string to number  in json for it to work

  }, {
    key: "render",
    value: function render() {
      var articles = this.state.elbiler.map(function (elbil) {
        return __jsx("li", {
          key: id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, __jsx(ArticleCard, {
          merke: elbil.modell,
          modell: elbil.merke,
          rekkevidde: elbil.rekkevidde,
          pris: elbil.pris,
          bildeURL: elbil.bildeURL,
          type: elbil.type,
          id: elbil.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        })));
      });
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null);
    }
  }]);

  return AllCars;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AllCars);

/***/ })

})
//# sourceMappingURL=index.js.779e8f9a679e2482dba0.hot-update.js.map