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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_CSSReset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/CSSReset */ \"./src/components/CSSReset.js\");\n/* harmony import */ var _src_components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Menu/components/ColorMode */ \"./src/components/Menu/components/ColorMode.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst theme = {\n    light: {\n        backgroundBase: \"#f9f9f9\",\n        backgroundLevel1: \"#ffffff\",\n        backgroundLevel2: \"#f0f0f0\",\n        borderBase: \"#e5e5e5\",\n        textColorBase: \"#222222\"\n    },\n    dark: {\n        backgroundBase: \"#181818\",\n        backgroundLevel1: \"#202020\",\n        backgroundLevel2: \"#313131\",\n        borderBase: \"#383838\",\n        textColorBase: \"#FFFFFF\"\n    }\n};\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const contexto = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_src_components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_3__.ColorModeContext);\n    console.log(contexto);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n                theme: theme.light,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CSSReset__WEBPACK_IMPORTED_MODULE_2__.CSSReset, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\pages\\\\_app.js\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\pages\\\\_app.js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\pages\\\\_app.js\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\pages\\\\_app.js\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(MyApp, \"ZR0oSHYnh86JaJQkXCiE4u/O/jw=\");\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ1M7QUFDZTtBQUNJO0FBQzBDO0FBRWhHLE1BQU1NLFFBQVE7SUFDVkMsT0FBTztRQUNIQyxnQkFBZ0I7UUFDaEJDLGtCQUFrQjtRQUNsQkMsa0JBQWtCO1FBQ2xCQyxZQUFZO1FBQ1pDLGVBQWU7SUFDbkI7SUFDQUMsTUFBTTtRQUNGTCxnQkFBZ0I7UUFDaEJDLGtCQUFrQjtRQUNsQkMsa0JBQWtCO1FBQ2xCQyxZQUFZO1FBQ1pDLGVBQWU7SUFDbkI7QUFDSjtBQUVlLFNBQVNFLE1BQU0sS0FBd0IsRUFBRTtRQUExQixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF4Qjs7SUFFMUIsTUFBTUMsV0FBV2hCLGlEQUFVQSxDQUFDSSx1RkFBZ0JBO0lBQzVDYSxRQUFRQyxHQUFHLENBQUNGO0lBRVoscUJBQ0k7a0JBQ0ksNEVBQUNiLGlGQUFpQkE7c0JBQ2QsNEVBQUNGLDREQUFhQTtnQkFBQ0ksT0FBT0EsTUFBTUMsS0FBSzs7a0NBQzdCLDhEQUFDSiw4REFBUUE7Ozs7O2tDQUNULDhEQUFDWTt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUMsQ0FBQztHQWZxQkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IENTU1Jlc2V0IH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0NTU1Jlc2V0XCI7XHJcbmltcG9ydCBDb2xvck1vZGVQcm92aWRlciwge0NvbG9yTW9kZUNvbnRleHR9IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9NZW51L2NvbXBvbmVudHMvQ29sb3JNb2RlXCI7XHJcblxyXG5jb25zdCB0aGVtZSA9IHtcclxuICAgIGxpZ2h0OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZEJhc2U6IFwiI2Y5ZjlmOVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRMZXZlbDE6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIGJhY2tncm91bmRMZXZlbDI6IFwiI2YwZjBmMFwiLFxyXG4gICAgICAgIGJvcmRlckJhc2U6IFwiI2U1ZTVlNVwiLFxyXG4gICAgICAgIHRleHRDb2xvckJhc2U6IFwiIzIyMjIyMlwiLFxyXG4gICAgfSxcclxuICAgIGRhcms6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQmFzZTogXCIjMTgxODE4XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZExldmVsMTogXCIjMjAyMDIwXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZExldmVsMjogXCIjMzEzMTMxXCIsXHJcbiAgICAgICAgYm9yZGVyQmFzZTogXCIjMzgzODM4XCIsXHJcbiAgICAgICAgdGV4dENvbG9yQmFzZTogXCIjRkZGRkZGXCIsXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgICAgXHJcbiAgICBjb25zdCBjb250ZXh0byA9IHVzZUNvbnRleHQoQ29sb3JNb2RlQ29udGV4dCk7XHJcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0bylcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENvbG9yTW9kZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lLmxpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q1NTUmVzZXQvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgICAgICAgPC9Db2xvck1vZGVQcm92aWRlcj5cclxuICAgICAgICA8Lz5cclxuICAgICkgXHJcbiAgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwiQ1NTUmVzZXQiLCJDb2xvck1vZGVQcm92aWRlciIsIkNvbG9yTW9kZUNvbnRleHQiLCJ0aGVtZSIsImxpZ2h0IiwiYmFja2dyb3VuZEJhc2UiLCJiYWNrZ3JvdW5kTGV2ZWwxIiwiYmFja2dyb3VuZExldmVsMiIsImJvcmRlckJhc2UiLCJ0ZXh0Q29sb3JCYXNlIiwiZGFyayIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29udGV4dG8iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});