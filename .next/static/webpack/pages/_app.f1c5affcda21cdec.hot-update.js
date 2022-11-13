"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_CSSReset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/CSSReset */ \"./src/components/CSSReset.js\");\n/* harmony import */ var _src_components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Menu/components/ColorMode */ \"./src/components/Menu/components/ColorMode.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst theme = {\n    light: {\n        backgroundBase: \"#f9f9f9\",\n        backgroundLevel1: \"#ffffff\",\n        backgroundLevel2: \"#f0f0f0\",\n        borderBase: \"#e5e5e5\",\n        textColorBase: \"#222222\"\n    },\n    dark: {\n        backgroundBase: \"#181818\",\n        backgroundLevel1: \"#202020\",\n        backgroundLevel2: \"#313131\",\n        borderBase: \"#383838\",\n        textColorBase: \"#FFFFFF\"\n    }\n};\nfunction ProviderWrapper(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        initialMode: \"dark\",\n        children: props.children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\pages\\\\_app.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_c = ProviderWrapper;\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const contexto = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_src_components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_3__.ColorModeContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n            theme: theme[contexto.mode],\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CSSReset__WEBPACK_IMPORTED_MODULE_2__.CSSReset, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\pages\\\\_app.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\pages\\\\_app.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\pages\\\\_app.js\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(MyApp, \"ZR0oSHYnh86JaJQkXCiE4u/O/jw=\");\n_c1 = MyApp;\nfunction _App(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProviderWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyApp, {\n            ...props\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\pages\\\\_app.js\",\n            lineNumber: 49,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\pages\\\\_app.js\",\n        lineNumber: 48,\n        columnNumber: 13\n    }, this);\n}\nvar _c, _c1;\n$RefreshReg$(_c, \"ProviderWrapper\");\n$RefreshReg$(_c1, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ1M7QUFDZTtBQUNJO0FBQzBDO0FBRWhHLE1BQU1NLFFBQVE7SUFDVkMsT0FBTztRQUNIQyxnQkFBZ0I7UUFDaEJDLGtCQUFrQjtRQUNsQkMsa0JBQWtCO1FBQ2xCQyxZQUFZO1FBQ1pDLGVBQWU7SUFDbkI7SUFDQUMsTUFBTTtRQUNGTCxnQkFBZ0I7UUFDaEJDLGtCQUFrQjtRQUNsQkMsa0JBQWtCO1FBQ2xCQyxZQUFZO1FBQ1pDLGVBQWU7SUFDbkI7QUFDSjtBQUVBLFNBQVNFLGdCQUFnQkMsS0FBSyxFQUFFO0lBQzVCLHFCQUNJLDhEQUFDWCxpRkFBaUJBO1FBQUNZLGFBQWE7a0JBQzNCRCxNQUFNRSxRQUFROzs7Ozs7QUFHM0I7S0FOU0g7QUFRVCxTQUFTSSxNQUFNLEtBQXdCLEVBQUU7UUFBMUIsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsR0FBeEI7O0lBRVgsTUFBTUMsV0FBV3BCLGlEQUFVQSxDQUFDSSx1RkFBZ0JBO0lBRTVDLHFCQUNJO2tCQUNJLDRFQUFDSCw0REFBYUE7WUFBQ0ksT0FBT0EsS0FBSyxDQUFDZSxTQUFTQyxJQUFJLENBQUM7OzhCQUN0Qyw4REFBQ25CLDhEQUFRQTs7Ozs7OEJBQ1QsOERBQUNnQjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBSXRDO0dBWk9GO01BQUFBO0FBY1EsU0FBU0ssS0FBS1IsS0FBSyxFQUFFO0lBQzlCLHFCQUNJLDhEQUFDRDtrQkFDRyw0RUFBQ0k7WUFBTyxHQUFHSCxLQUFLOzs7Ozs7Ozs7OztBQUc5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDU1NSZXNldCB9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9DU1NSZXNldFwiO1xyXG5pbXBvcnQgQ29sb3JNb2RlUHJvdmlkZXIsIHtDb2xvck1vZGVDb250ZXh0fSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvTWVudS9jb21wb25lbnRzL0NvbG9yTW9kZVwiO1xyXG5cclxuY29uc3QgdGhlbWUgPSB7XHJcbiAgICBsaWdodDoge1xyXG4gICAgICAgIGJhY2tncm91bmRCYXNlOiBcIiNmOWY5ZjlcIixcclxuICAgICAgICBiYWNrZ3JvdW5kTGV2ZWwxOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBiYWNrZ3JvdW5kTGV2ZWwyOiBcIiNmMGYwZjBcIixcclxuICAgICAgICBib3JkZXJCYXNlOiBcIiNlNWU1ZTVcIixcclxuICAgICAgICB0ZXh0Q29sb3JCYXNlOiBcIiMyMjIyMjJcIixcclxuICAgIH0sXHJcbiAgICBkYXJrOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZEJhc2U6IFwiIzE4MTgxOFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRMZXZlbDE6IFwiIzIwMjAyMFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRMZXZlbDI6IFwiIzMxMzEzMVwiLFxyXG4gICAgICAgIGJvcmRlckJhc2U6IFwiIzM4MzgzOFwiLFxyXG4gICAgICAgIHRleHRDb2xvckJhc2U6IFwiI0ZGRkZGRlwiLFxyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gUHJvdmlkZXJXcmFwcGVyKHByb3BzKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENvbG9yTW9kZVByb3ZpZGVyIGluaXRpYWxNb2RlPXtcImRhcmtcIn0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NvbG9yTW9kZVByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgICAgXHJcbiAgICBjb25zdCBjb250ZXh0byA9IHVzZUNvbnRleHQoQ29sb3JNb2RlQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZVtjb250ZXh0by5tb2RlXX0+XHJcbiAgICAgICAgICAgICAgICA8Q1NTUmVzZXQvPlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApIFxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX0FwcChwcm9wcykge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPFByb3ZpZGVyV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDxNeUFwcCB7Li4ucHJvcHN9Lz5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcldyYXBwZXI+XHJcbiAgICAgICAgKVxyXG4gIH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiVGhlbWVQcm92aWRlciIsIkNTU1Jlc2V0IiwiQ29sb3JNb2RlUHJvdmlkZXIiLCJDb2xvck1vZGVDb250ZXh0IiwidGhlbWUiLCJsaWdodCIsImJhY2tncm91bmRCYXNlIiwiYmFja2dyb3VuZExldmVsMSIsImJhY2tncm91bmRMZXZlbDIiLCJib3JkZXJCYXNlIiwidGV4dENvbG9yQmFzZSIsImRhcmsiLCJQcm92aWRlcldyYXBwZXIiLCJwcm9wcyIsImluaXRpYWxNb2RlIiwiY2hpbGRyZW4iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbnRleHRvIiwibW9kZSIsIl9BcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});