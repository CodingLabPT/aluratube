"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Menu/components/DarkSwitchMode.js":
/*!**********************************************************!*\
  !*** ./src/components/Menu/components/DarkSwitchMode.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DarkModeSwitch; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _ColorMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorMode */ \"./src/components/Menu/components/ColorMode.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  background-color: #333333;\\n  border: 0;\\n  padding: 3px;\\n  font-size: 12px;\\n  width: 50px;\\n  height: 25px;\\n  display: flex;\\n  justify-content: space-around;\\n  border-radius: 10000px;\\n  position: relative;\\n  label {\\n    width: 50px;\\n  }\\n  span { display: inline-flex; width: 20px; height: 20px; align-items: center; justify-content: center; }\\n  \\n  label:before {\\n    content: \"\";\\n    background-color: #fafafa;\\n    border: 1px solid #333333;\\n    width: 24px;\\n    height: 24px;\\n    border-radius: 100%;\\n    position: absolute;\\n    top: 0;\\n    bottom: 0;\\n    left: 0;\\n    transition: .3s;\\n    cursor: pointer;\\n  }\\n  input[type=\"checkbox\"] { display: none; }\\n  input[type=\"checkbox\"]:checked + label:before { transform: translateX(100%); }\\n'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst StyledSwitch = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"DarkSwitchMode__StyledSwitch\",\n    componentId: \"sc-1f5f20e-0\"\n})(_templateObject());\n_c = StyledSwitch;\nfunction DarkModeSwitch() {\n    _s();\n    const contexto = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ColorMode__WEBPACK_IMPORTED_MODULE_3__.ColorModeContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledSwitch, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                id: \"darkmode\",\n                type: \"checkbox\",\n                onChange: ()=>{\n                    contexto.toogleMode;\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Menu\\\\components\\\\DarkSwitchMode.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                htmlFor: \"darkmode\",\n                className: \"darkmode-switch\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: \"\\uD83C\\uDF19\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Menu\\\\components\\\\DarkSwitchMode.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: \"☀️\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Menu\\\\components\\\\DarkSwitchMode.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Menu\\\\components\\\\DarkSwitchMode.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Menu\\\\components\\\\DarkSwitchMode.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(DarkModeSwitch, \"ZR0oSHYnh86JaJQkXCiE4u/O/jw=\");\n_c1 = DarkModeSwitch;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledSwitch\");\n$RefreshReg$(_c1, \"DarkModeSwitch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW51L2NvbXBvbmVudHMvRGFya1N3aXRjaE1vZGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFDSjtBQUNZO0FBRy9DLE1BQU1JLGVBQWVILHdFQUFVOzs7O0tBQXpCRztBQWtDUyxTQUFTRSxpQkFBaUI7O0lBQ3ZDLE1BQU1DLFdBQVdMLGlEQUFVQSxDQUFDQyx3REFBZ0JBO0lBRTVDLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNJO2dCQUFNQyxJQUFHO2dCQUFXQyxNQUFLO2dCQUFXQyxVQUFVLElBQU07b0JBQ25ESixTQUFTSyxVQUFVO2dCQUNyQjs7Ozs7OzBCQUNBLDhEQUFDQztnQkFDQ0MsU0FBUTtnQkFDUkMsV0FBVTs7a0NBRVYsOERBQUNDO2tDQUFLOzs7Ozs7a0NBQ04sOERBQUNBO2tDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZCxDQUFDO0dBakJ1QlY7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS9jb21wb25lbnRzL0RhcmtTd2l0Y2hNb2RlLmpzP2I5MzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbG9yTW9kZUNvbnRleHQgfSBmcm9tIFwiLi9Db2xvck1vZGVcIjtcclxuXHJcblxyXG5jb25zdCBTdHlsZWRTd2l0Y2ggPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGFiZWwge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG4gIHNwYW4geyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cclxuICBcclxuICBsYWJlbDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzMzMzO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXJrTW9kZVN3aXRjaCgpIHtcclxuICBjb25zdCBjb250ZXh0byA9IHVzZUNvbnRleHQoQ29sb3JNb2RlQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkU3dpdGNoPlxyXG4gICAgICA8aW5wdXQgaWQ9XCJkYXJrbW9kZVwiIHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgY29udGV4dG8udG9vZ2xlTW9kZVxyXG4gICAgICB9fSAvPlxyXG4gICAgICA8bGFiZWxcclxuICAgICAgICBodG1sRm9yPVwiZGFya21vZGVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRhcmttb2RlLXN3aXRjaFwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3Bhbj7wn4yZPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPuKYgO+4jzwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIDwvU3R5bGVkU3dpdGNoPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsInVzZUNvbnRleHQiLCJDb2xvck1vZGVDb250ZXh0IiwiU3R5bGVkU3dpdGNoIiwiZGl2IiwiRGFya01vZGVTd2l0Y2giLCJjb250ZXh0byIsImlucHV0IiwiaWQiLCJ0eXBlIiwib25DaGFuZ2UiLCJ0b29nbGVNb2RlIiwibGFiZWwiLCJodG1sRm9yIiwiY2xhc3NOYW1lIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Menu/components/DarkSwitchMode.js\n"));

/***/ })

});