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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_CSSReset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/CSSReset */ \"./src/components/CSSReset.js\");\n/* harmony import */ var _src_components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Menu/components/ColorMode */ \"./src/components/Menu/components/ColorMode.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst theme = {\n    light: {\n        backgroundBase: \"#f9f9f9\",\n        backgroundLevel1: \"#ffffff\",\n        backgroundLevel2: \"#f0f0f0\",\n        borderBase: \"#e5e5e5\",\n        textColorBase: \"#222222\"\n    },\n    dark: {\n        backgroundBase: \"#181818\",\n        backgroundLevel1: \"#202020\",\n        backgroundLevel2: \"#313131\",\n        borderBase: \"#383838\",\n        textColorBase: \"#FFFFFF\"\n    }\n};\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const contexto = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_src_components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_3__.ColorModeContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Menu_components_ColorMode__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n                theme: theme[contexto.mode],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CSSReset__WEBPACK_IMPORTED_MODULE_2__.CSSReset, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\pages\\\\_app.js\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\pages\\\\_app.js\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\pages\\\\_app.js\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\pages\\\\_app.js\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(MyApp, \"ZR0oSHYnh86JaJQkXCiE4u/O/jw=\");\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ1M7QUFDZTtBQUNJO0FBQzBDO0FBRWhHLE1BQU1NLFFBQVE7SUFDVkMsT0FBTztRQUNIQyxnQkFBZ0I7UUFDaEJDLGtCQUFrQjtRQUNsQkMsa0JBQWtCO1FBQ2xCQyxZQUFZO1FBQ1pDLGVBQWU7SUFDbkI7SUFDQUMsTUFBTTtRQUNGTCxnQkFBZ0I7UUFDaEJDLGtCQUFrQjtRQUNsQkMsa0JBQWtCO1FBQ2xCQyxZQUFZO1FBQ1pDLGVBQWU7SUFDbkI7QUFDSjtBQUVlLFNBQVNFLE1BQU0sS0FBd0IsRUFBRTtRQUExQixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF4Qjs7SUFFMUIsTUFBTUMsV0FBV2hCLGlEQUFVQSxDQUFDSSx1RkFBZ0JBO0lBRTVDLHFCQUNJO2tCQUNJLDRFQUFDRCxpRkFBaUJBO3NCQUNkLDRFQUFDRiw0REFBYUE7Z0JBQUNJLE9BQU9BLEtBQUssQ0FBQ1csU0FBU0MsSUFBSSxDQUFDOztrQ0FDdEMsOERBQUNmLDhEQUFRQTs7Ozs7a0NBQ1QsOERBQUNZO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQyxDQUFDO0dBZHFCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQ1NTUmVzZXQgfSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQ1NTUmVzZXRcIjtcclxuaW1wb3J0IENvbG9yTW9kZVByb3ZpZGVyLCB7Q29sb3JNb2RlQ29udGV4dH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL01lbnUvY29tcG9uZW50cy9Db2xvck1vZGVcIjtcclxuXHJcbmNvbnN0IHRoZW1lID0ge1xyXG4gICAgbGlnaHQ6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQmFzZTogXCIjZjlmOWY5XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZExldmVsMTogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZExldmVsMjogXCIjZjBmMGYwXCIsXHJcbiAgICAgICAgYm9yZGVyQmFzZTogXCIjZTVlNWU1XCIsXHJcbiAgICAgICAgdGV4dENvbG9yQmFzZTogXCIjMjIyMjIyXCIsXHJcbiAgICB9LFxyXG4gICAgZGFyazoge1xyXG4gICAgICAgIGJhY2tncm91bmRCYXNlOiBcIiMxODE4MThcIixcclxuICAgICAgICBiYWNrZ3JvdW5kTGV2ZWwxOiBcIiMyMDIwMjBcIixcclxuICAgICAgICBiYWNrZ3JvdW5kTGV2ZWwyOiBcIiMzMTMxMzFcIixcclxuICAgICAgICBib3JkZXJCYXNlOiBcIiMzODM4MzhcIixcclxuICAgICAgICB0ZXh0Q29sb3JCYXNlOiBcIiNGRkZGRkZcIixcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgICBcclxuICAgIGNvbnN0IGNvbnRleHRvID0gdXNlQ29udGV4dChDb2xvck1vZGVDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENvbG9yTW9kZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lW2NvbnRleHRvLm1vZGVdfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q1NTUmVzZXQvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgICAgICAgPC9Db2xvck1vZGVQcm92aWRlcj5cclxuICAgICAgICA8Lz5cclxuICAgICkgXHJcbiAgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJUaGVtZVByb3ZpZGVyIiwiQ1NTUmVzZXQiLCJDb2xvck1vZGVQcm92aWRlciIsIkNvbG9yTW9kZUNvbnRleHQiLCJ0aGVtZSIsImxpZ2h0IiwiYmFja2dyb3VuZEJhc2UiLCJiYWNrZ3JvdW5kTGV2ZWwxIiwiYmFja2dyb3VuZExldmVsMiIsImJvcmRlckJhc2UiLCJ0ZXh0Q29sb3JCYXNlIiwiZGFyayIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29udGV4dG8iLCJtb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});