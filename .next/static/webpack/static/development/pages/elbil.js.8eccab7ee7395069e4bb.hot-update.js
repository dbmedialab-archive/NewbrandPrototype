webpackHotUpdate("static/development/pages/elbil.js",{

/***/ "./Components/DetailHeader.js":
false,

/***/ "./node_modules/react-icons/fa/index.esm.js":
false,

/***/ "./node_modules/react-icons/lib/esm/iconBase.js":
false,

/***/ "./node_modules/react-icons/lib/esm/iconContext.js":
false,

/***/ "./node_modules/react-icons/lib/esm/iconsManifest.js":
false,

/***/ "./node_modules/react-icons/lib/esm/index.js":
false,

/***/ "./pages/elbil.js":
/*!************************!*\
  !*** ./pages/elbil.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Navbar */ "./Components/Navbar.js");
/* harmony import */ var _Components_ArticleCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/ArticleCard */ "./Components/ArticleCard.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var _artikler_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../artikler.json */ "./artikler.json");
var _artikler_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../artikler.json */ "./artikler.json", 1);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");



var _jsxFileName = "/Users/mariusgrondahl/Documents/GitHub/NewbrandPrototype/pages/elbil.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\nquery MyBodyText($id: Int) {\n  labrador {\n    article(id: $id) {\n      title\n      subtitle\n      publishedURL\n      sectionTag\n      tags\n      siteDomain\n      imageId\n      bodytextStructured {\n\n        ... on Labrador_HTMLElement {\n          name\n          attributes {\n            key\n            value\n          }\n          children {\n\n            ... on Labrador_HTMLElement {\n              name\n              attributes {\n                key\n                value\n              }\n              children {\n\n                ... on Labrador_HTMLElement {\n                  name\n                  attributes {\n                    key\n                    value\n                  }\n                  children {\n    \n                    ... on Labrador_HTMLElement {\n                      name\n                      attributes {\n                        key\n                        value\n                      }\n                      children {\n      \n                        ... on Labrador_HTMLElement {\n                          name\n                          attributes {\n                            key\n                            value\n                          }\n                     \n                        }\n                        ... on Labrador_Text {\n                          text\n                        }\n                      }\n                    }\n                    ... on Labrador_Text {\n                      text\n                    }\n                  }\n                }\n                ... on Labrador_Text {\n                  text\n                }\n              }\n            }\n            ... on Labrador_Text {\n              text\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-self: center;  \n    background: #1d1d1d;\n    color: #fff;\n    padding: .5rem;\n    margin: 0;\n\n  p{\n    margin: 0;\n    line-height: 1.4rem;\n\n  }\n\n  h1, h2, h3, h4{\n    margin-bottom: .3rem;\n  }\n\n  h4{\n    font-size: 1.1rem;\n    font-weight: bold;\n    margin-bottom: 0.8rem;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 1rem;\n    margin: 0;\n\n    @media (min-width: 800px) {\n      max-width: 680px;\n      flex-direction: column;\n      align-align: center;\n      justify-content: center;\n      flex-wrap: wrap;\n    }\n\n  }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var DetailWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
var Detail = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2());
var ALL_POSTS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject3()); // Getinng props from query

ElbilDetail.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var req, query, elbilId;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req, query = _ref.query;
            elbilId = Number(query.id);
            return _context.abrupt("return", {
              elbilId: elbilId
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}(); // Getting the text from bodytextStrutured


var traverseElements = function traverseElements() {
  var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (!elements) {
    return null;
  }

  return elements.map(function (el, i) {
    if (el["__typename"] === "Labrador_Text") {
      return el.text;
    } else {
      switch (el.name) {
        default:
          return __jsx(el.name, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            },
            __self: this
          }, traverseElements(el.children));
      }
    }
  });
};

function ElbilDetail(_ref3) {
  var elbilId = _ref3.elbilId;
  // Getting article id of tester
  var articleID = elbiler[elbilId].tester;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useQuery"])(ALL_POSTS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      id: articleID
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data,
      fetchMore = _useQuery.fetchMore,
      networkStatus = _useQuery.networkStatus; // Stopping if error


  if (error) {
    console.log("Error while fetching data");
    return null;
  } // Using State Hook


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Tittel"),
      articleTitle = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("undertittel"),
      articleSubtitle = _useState2[0],
      setSubtitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      articleImage = _useState3[0],
      setImage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("brandnavn"),
      brand = _useState4[0],
      setBrand = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // Update the document title using the browser API
    if (data.labrador === undefined) {
      var waitMessage = "Loading";
      setTitle(waitMessage), setSubtitle(waitMessage), setImage(waitMessage);
    } else {
      var _articleTitle = data.labrador.article.title;
      var subTitle = data.labrador.article.subtitle;
      var imageId = data.labrador.article.imageId;
      var image = "https://www.dagbladet.no/images/" + imageId + ".jpg?imageId=" + imageId + "&width=400&height=auto";
      console.log(image);
      var _brand = data.labrador.article.siteDomain;
      setTitle(_articleTitle);
      setSubtitle(subTitle);
      setImage(image);
      setBrand(_brand);
    }
  }, [data.labrador]); // Filtering out the car that matches the elbilId to an Array with that ID

  var singleElbil = elbiler.filter(function (elbil) {
    return elbil.id === elbilId;
  });
  console.log(singleElbil);

  var header = __jsx(DetailHeader, {
    merke: singleElbil[0].modell,
    modell: singleElbil[0].merke,
    type: singleElbil[0].type,
    rekkevidde: singleElbil[0].rekkevidde,
    pris: singleElbil[0].pris,
    bildeURL: singleElbil[0].bildeURL,
    id: singleElbil[0].id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  });

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, header, __jsx(DetailWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, __jsx(_Components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }), __jsx(Detail, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "Fusce ornare interdum lectus, sodales placerat dolor semper sed. Curabitur lacinia nibh sit amet iaculis ultricies. Ut vel ante vel ligula sagittis finibus in ac leo. Nulla ante dolor, sagittis luctus efficitur a, mollis vitae tellus. Donec blandit lobortis urna sed facilisis. Vivamus consectetur risus at tortor viverra vulputate."), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "Saker om ", singleElbil[0].merke, " ", singleElbil[0].modell, ":"), __jsx(_Components_ArticleCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: articleTitle,
    subtitle: articleSubtitle,
    bildeURL: articleImage,
    brand: brand,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_10__["withApollo"])(ElbilDetail));

/***/ })

})
//# sourceMappingURL=elbil.js.8eccab7ee7395069e4bb.hot-update.js.map