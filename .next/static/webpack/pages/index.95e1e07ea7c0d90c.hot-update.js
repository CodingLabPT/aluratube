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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DarkModeSwitch; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _ColorMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorMode */ \"./src/components/Menu/components/ColorMode.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  background-color: #333333;\\n  border: 0;\\n  padding: 3px;\\n  font-size: 12px;\\n  width: 50px;\\n  height: 25px;\\n  display: flex;\\n  justify-content: space-around;\\n  border-radius: 10000px;\\n  position: relative;\\n  label {\\n    width: 50px;\\n  }\\n  span { display: inline-flex; width: 20px; height: 20px; align-items: center; justify-content: center; }\\n  \\n  label:before {\\n    content: \"\";\\n    background-color: #fafafa;\\n    border: 1px solid #333333;\\n    width: 24px;\\n    height: 24px;\\n    border-radius: 100%;\\n    position: absolute;\\n    top: 0;\\n    bottom: 0;\\n    left: 0;\\n    transition: .3s;\\n    cursor: pointer;\\n  }\\n  input[type=\"checkbox\"] { display: none; }\\n  input[type=\"checkbox\"]:checked + label:before { transform: translateX(100%); }\\n'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst StyledSwitch = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"DarkSwitchMode__StyledSwitch\",\n    componentId: \"sc-aa7f166c-0\"\n})(_templateObject());\n_c = StyledSwitch;\nfunction DarkModeSwitch() {\n    _s();\n    const contexto = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ColorMode__WEBPACK_IMPORTED_MODULE_3__.ColorModeContext);\n    console.log(\"dkdkdkdk\", contexto);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledSwitch, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                id: \"darkmode\",\n                type: \"checkbox\",\n                onChange: ()=>{\n                    if (contexto.mode == \"dark\") contexto.setMode(\"Light\");\n                    if (contexto.mode == \"light\") contexto.setMode(\"Dark\");\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Menu\\\\components\\\\DarkSwitchMode.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                htmlFor: \"darkmode\",\n                className: \"darkmode-switch\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: \"\\uD83C\\uDF19\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Menu\\\\components\\\\DarkSwitchMode.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: \"☀️\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Menu\\\\components\\\\DarkSwitchMode.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Menu\\\\components\\\\DarkSwitchMode.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Menu\\\\components\\\\DarkSwitchMode.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(DarkModeSwitch, \"ZR0oSHYnh86JaJQkXCiE4u/O/jw=\");\n_c1 = DarkModeSwitch;\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledSwitch\");\n$RefreshReg$(_c1, \"DarkModeSwitch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW51L2NvbXBvbmVudHMvRGFya1N3aXRjaE1vZGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFDSjtBQUNZO0FBRy9DLE1BQU1JLGVBQWVILHdFQUFVOzs7O0tBQXpCRztBQWtDUyxTQUFTRSxpQkFBaUI7O0lBQ3ZDLE1BQU1DLFdBQVdMLGlEQUFVQSxDQUFDQyx3REFBZ0JBO0lBQzVDSyxRQUFRQyxHQUFHLENBQUMsWUFBWUY7SUFFeEIscUJBQ0UsOERBQUNIOzswQkFDQyw4REFBQ007Z0JBQU1DLElBQUc7Z0JBQVdDLE1BQUs7Z0JBQVdDLFVBQVUsSUFBTTtvQkFDbkQsSUFBSU4sU0FBU08sSUFBSSxJQUFLLFFBQVFQLFNBQVNRLE9BQU8sQ0FBQztvQkFDL0MsSUFBSVIsU0FBU08sSUFBSSxJQUFLLFNBQVNQLFNBQVNRLE9BQU8sQ0FBQztnQkFDbEQ7Ozs7OzswQkFDQSw4REFBQ0M7Z0JBQ0NDLFNBQVE7Z0JBQ1JDLFdBQVU7O2tDQUVWLDhEQUFDQztrQ0FBSzs7Ozs7O2tDQUNOLDhEQUFDQTtrQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWQsQ0FBQztHQW5CdUJiO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01lbnUvY29tcG9uZW50cy9EYXJrU3dpdGNoTW9kZS5qcz9iOTM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb2xvck1vZGVDb250ZXh0IH0gZnJvbSBcIi4vQ29sb3JNb2RlXCI7XHJcblxyXG5cclxuY29uc3QgU3R5bGVkU3dpdGNoID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMDAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxhYmVsIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxuICBzcGFuIHsgZGlzcGxheTogaW5saW5lLWZsZXg7IHdpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XHJcbiAgXHJcbiAgbGFiZWw6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7IGRpc3BsYXk6IG5vbmU7IH1cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFya01vZGVTd2l0Y2goKSB7XHJcbiAgY29uc3QgY29udGV4dG8gPSB1c2VDb250ZXh0KENvbG9yTW9kZUNvbnRleHQpO1xyXG4gIGNvbnNvbGUubG9nKFwiZGtka2RrZGtcIiwgY29udGV4dG8pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkU3dpdGNoPlxyXG4gICAgICA8aW5wdXQgaWQ9XCJkYXJrbW9kZVwiIHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbnRleHRvLm1vZGUgPT0gIFwiZGFya1wiKSBjb250ZXh0by5zZXRNb2RlKFwiTGlnaHRcIik7XHJcbiAgICAgICAgaWYgKGNvbnRleHRvLm1vZGUgPT0gIFwibGlnaHRcIikgY29udGV4dG8uc2V0TW9kZShcIkRhcmtcIik7XHJcbiAgICAgIH19IC8+XHJcbiAgICAgIDxsYWJlbFxyXG4gICAgICAgIGh0bWxGb3I9XCJkYXJrbW9kZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZGFya21vZGUtc3dpdGNoXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuPvCfjJk8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+4piA77iPPC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9TdHlsZWRTd2l0Y2g+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwidXNlQ29udGV4dCIsIkNvbG9yTW9kZUNvbnRleHQiLCJTdHlsZWRTd2l0Y2giLCJkaXYiLCJEYXJrTW9kZVN3aXRjaCIsImNvbnRleHRvIiwiY29uc29sZSIsImxvZyIsImlucHV0IiwiaWQiLCJ0eXBlIiwib25DaGFuZ2UiLCJtb2RlIiwic2V0TW9kZSIsImxhYmVsIiwiaHRtbEZvciIsImNsYXNzTmFtZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Menu/components/DarkSwitchMode.js\n"));

/***/ })

});