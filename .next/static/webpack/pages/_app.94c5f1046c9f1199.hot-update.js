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

/***/ "./src/components/RegisterVideo/index.js":
/*!***********************************************!*\
  !*** ./src/components/RegisterVideo/index.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/RegisterVideo/styles.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n// custom Hook\nfunction useForm(propsDoForm) {\n    _s();\n    const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(propsDoForm.initialValues);\n    return {\n        values,\n        handleChange: (evento)=>{\n            const value = evento.target.value;\n            const name = evento.target.name;\n            console.log(value);\n            setValues({\n                ...values,\n                [name]: value\n            });\n        },\n        clearForm () {\n            setValues({});\n        }\n    };\n}\n_s(useForm, \"BIYExSth+WYKJ6/LYKi6Ip+Sfck=\");\nfunction RegisterVideo() {\n    _s1();\n    const [formVisivel, setFormVisivel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const formCadastro = useForm({\n        initialValues: {\n            titulo: \"Frost\",\n            url: \"https://youtube\"\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.StyledRegisterVideo, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"add-video\",\n                onClick: ()=>setFormVisivel(true),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            formVisivel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>{\n                    e.preventDefault();\n                    setFormVisivel(false);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"close-modal\",\n                            onClick: ()=>setFormVisivel(false),\n                            children: \"x\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 43,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"Titulo do video\",\n                            name: \"titulo\",\n                            value: formCadastro.values.titulo,\n                            onChange: formCadastro.handleChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 46,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"URL\",\n                            name: \"url\",\n                            value: formCadastro.values.url,\n                            onChange: formCadastro.handleChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 52,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                    lineNumber: 42,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 21\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s1(RegisterVideo, \"7jWPh3u0j11H5n6m8icnZnvTNPE=\", false, function() {\n    return [\n        useForm\n    ];\n});\n_c = RegisterVideo;\nvar _c;\n$RefreshReg$(_c, \"RegisterVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNPO0FBQ2M7QUFFL0MsY0FBYztBQUNkLFNBQVNHLFFBQVFDLFdBQVcsRUFBRTs7SUFDMUIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDRyxZQUFZRyxhQUFhO0lBRTlELE9BQU87UUFDSEY7UUFDQUcsY0FBYyxDQUFDQyxTQUFXO1lBQ2xCLE1BQU1DLFFBQVFELE9BQU9FLE1BQU0sQ0FBQ0QsS0FBSztZQUNqQyxNQUFNRSxPQUFPSCxPQUFPRSxNQUFNLENBQUNDLElBQUk7WUFDL0JDLFFBQVFDLEdBQUcsQ0FBQ0o7WUFDWkosVUFBVTtnQkFDTixHQUFHRCxNQUFNO2dCQUNULENBQUNPLEtBQUssRUFBRUY7WUFDWjtRQUNKO1FBQ0FLLGFBQVk7WUFDUlQsVUFBVSxDQUFDO1FBQ2Y7SUFDSjtBQUNKO0dBbEJLSDtBQW9CTSxTQUFTYSxnQkFBZ0I7O0lBQ3BDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHakIsK0NBQVFBLENBQUMsS0FBSztJQUNwRCxNQUFNa0IsZUFBZWhCLFFBQVE7UUFDekJJLGVBQWU7WUFBRWEsUUFBTztZQUFTQyxLQUFJO1FBQWtCO0lBQzNEO0lBQ0EscUJBQ0ksOERBQUNuQix3REFBbUJBOzswQkFDaEIsOERBQUNvQjtnQkFBT0MsV0FBVTtnQkFBWUMsU0FBUyxJQUFLTixlQUFlLElBQUk7MEJBQUc7Ozs7OztZQUdqRUQsNEJBRU8sOERBQUNRO2dCQUFLQyxVQUFVLENBQUNDLElBQU07b0JBQ25CQSxFQUFFQyxjQUFjO29CQUNoQlYsZUFBZSxLQUFLO2dCQUN4QjswQkFDQSw0RUFBQ1c7O3NDQUNHLDhEQUFDUDs0QkFBT0MsV0FBVTs0QkFBY0MsU0FBUyxJQUFLTixlQUFlLEtBQUs7c0NBQUc7Ozs7OztzQ0FHckUsOERBQUNZOzRCQUNEQyxhQUFZOzRCQUNabkIsTUFBSzs0QkFDTEYsT0FBT1MsYUFBYWQsTUFBTSxDQUFDZSxNQUFNOzRCQUNqQ1ksVUFBVWIsYUFBYVgsWUFBWTs7Ozs7O3NDQUVuQyw4REFBQ3NCOzRCQUNEQyxhQUFZOzRCQUNabkIsTUFBSzs0QkFDTEYsT0FBT1MsYUFBYWQsTUFBTSxDQUFDZ0IsR0FBRzs0QkFDOUJXLFVBQVViLGFBQWFYLFlBQVk7Ozs7OztzQ0FFbkMsOERBQUNjOzRCQUFPVyxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7O3VCQU01QixJQUFJOzs7Ozs7O0FBR3RCLENBQUM7SUF6Q3VCakI7O1FBRUNiOzs7S0FGRGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVnaXN0ZXJWaWRlby9pbmRleC5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3R5bGVkUmVnaXN0ZXJWaWRlbyB9IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5cclxuLy8gY3VzdG9tIEhvb2tcclxuZnVuY3Rpb24gdXNlRm9ybShwcm9wc0RvRm9ybSkge1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHByb3BzRG9Gb3JtLmluaXRpYWxWYWx1ZXMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgIGhhbmRsZUNoYW5nZTogKGV2ZW50bykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudG8udGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGV2ZW50by50YXJnZXQubmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xlYXJGb3JtKCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzKHt9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyVmlkZW8oKSB7XHJcbiAgICBjb25zdCBbZm9ybVZpc2l2ZWwsIHNldEZvcm1WaXNpdmVsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGZvcm1DYWRhc3RybyA9IHVzZUZvcm0oe1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHsgdGl0dWxvOlwiRnJvc3RcIiwgdXJsOlwiaHR0cHM6Ly95b3V0dWJlXCIgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFN0eWxlZFJlZ2lzdGVyVmlkZW8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLXZpZGVvXCIgb25DbGljaz17KCk9PiBzZXRGb3JtVmlzaXZlbCh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7Zm9ybVZpc2l2ZWxcclxuICAgICAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZvcm1WaXNpdmVsKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIiBvbkNsaWNrPXsoKT0+IHNldEZvcm1WaXNpdmVsKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0dWxvIGRvIHZpZGVvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXR1bG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUNhZGFzdHJvLnZhbHVlcy50aXR1bG99IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybUNhZGFzdHJvLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVSTFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXJsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1DYWRhc3Ryby52YWx1ZXMudXJsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1DYWRhc3Ryby5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FkYXN0cmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgPC9TdHlsZWRSZWdpc3RlclZpZGVvPlxyXG4gICAgKSAgICBcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU3R5bGVkUmVnaXN0ZXJWaWRlbyIsInVzZUZvcm0iLCJwcm9wc0RvRm9ybSIsInZhbHVlcyIsInNldFZhbHVlcyIsImluaXRpYWxWYWx1ZXMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudG8iLCJ2YWx1ZSIsInRhcmdldCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJGb3JtIiwiUmVnaXN0ZXJWaWRlbyIsImZvcm1WaXNpdmVsIiwic2V0Rm9ybVZpc2l2ZWwiLCJmb3JtQ2FkYXN0cm8iLCJ0aXR1bG8iLCJ1cmwiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/RegisterVideo/index.js\n"));

/***/ })

});