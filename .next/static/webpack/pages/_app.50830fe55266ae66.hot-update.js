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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/RegisterVideo/styles.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction useForm() {\n    _s();\n    const [values1, setValues1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        titulo: \"\",\n        url: \"\"\n    });\n    return values1;\n}\n_s(useForm, \"k7bamhtk0D1Ek8TjlcFvHmJmr6E=\");\nfunction RegisterVideo() {\n    _s1();\n    const [formVisivel, setFormVisivel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const formCadastro = useForm();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.StyledRegisterVideo, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"add-video\",\n                onClick: ()=>setFormVisivel(true),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            formVisivel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>{\n                    e.preventDefault();\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"close-modal\",\n                            onClick: ()=>setFormVisivel(false),\n                            children: \"x\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"Titulo do video\",\n                            value: formCadastro.values.titulo,\n                            onChange: (evento)=>{\n                                const value = evento.target.value;\n                                setValues({\n                                    ...values,\n                                    titulo: value\n                                });\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 30,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"URL\",\n                            value: formCadastro.values.url,\n                            onChange: (evento)=>{\n                                const value = evento.target.value;\n                                console.log(value);\n                                setValues({\n                                    ...values,\n                                    url: value\n                                });\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 41,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 52,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 21\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\RegisterVideo\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s1(RegisterVideo, \"KV2GTIO2plwlUwFa3NOhoEj8VtE=\", false, function() {\n    return [\n        useForm\n    ];\n});\n_c = RegisterVideo;\nvar _c;\n$RefreshReg$(_c, \"RegisterVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNPO0FBQ2M7QUFFL0MsU0FBU0csVUFBVTs7SUFDZixNQUFNLENBQUNDLFNBQVFDLFdBQVUsR0FBR0osK0NBQVFBLENBQUM7UUFBRUssUUFBTztRQUFJQyxLQUFJO0lBQUc7SUFFekQsT0FDR0g7QUFFUDtHQU5TRDtBQVFNLFNBQVNLLGdCQUFnQjs7SUFDcEMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDLElBQUk7SUFDbkQsTUFBTVUsZUFBZVI7SUFDckIscUJBQ0ksOERBQUNELHdEQUFtQkE7OzBCQUNoQiw4REFBQ1U7Z0JBQU9DLFdBQVU7Z0JBQVlDLFNBQVMsSUFBS0osZUFBZSxJQUFJOzBCQUFHOzs7Ozs7WUFHakVELDRCQUVPLDhEQUFDTTtnQkFBS0MsVUFBVSxDQUFDQyxJQUFNO29CQUNuQkEsRUFBRUMsY0FBYztnQkFDcEI7MEJBQ0EsNEVBQUNDOztzQ0FDRyw4REFBQ1A7NEJBQU9DLFdBQVU7NEJBQWNDLFNBQVMsSUFBS0osZUFBZSxLQUFLO3NDQUFHOzs7Ozs7c0NBR3JFLDhEQUFDVTs0QkFDREMsYUFBWTs0QkFDWkMsT0FBT1gsYUFBYVAsTUFBTSxDQUFDRSxNQUFNOzRCQUNqQ2lCLFVBQVUsQ0FBQ0MsU0FBVztnQ0FDbEIsTUFBTUYsUUFBUUUsT0FBT0MsTUFBTSxDQUFDSCxLQUFLO2dDQUNqQ2pCLFVBQVU7b0NBQ04sR0FBR0QsTUFBTTtvQ0FDVEUsUUFBUWdCO2dDQUNaOzRCQUNKOzs7Ozs7c0NBRUEsOERBQUNGOzRCQUNEQyxhQUFZOzRCQUNaQyxPQUFPWCxhQUFhUCxNQUFNLENBQUNHLEdBQUc7NEJBQzlCZ0IsVUFBVSxDQUFDQyxTQUFXO2dDQUNsQixNQUFNRixRQUFRRSxPQUFPQyxNQUFNLENBQUNILEtBQUs7Z0NBQ2pDSSxRQUFRQyxHQUFHLENBQUNMO2dDQUNaakIsVUFBVTtvQ0FDTixHQUFHRCxNQUFNO29DQUNURyxLQUFLZTtnQ0FDVDs0QkFDSjs7Ozs7O3NDQUNBLDhEQUFDVjs0QkFBT2dCLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBTTVCLElBQUk7Ozs7Ozs7QUFHdEIsQ0FBQztJQWhEdUJwQjs7UUFFQ0w7OztLQUZESyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL2luZGV4LmpzPzM0NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdHlsZWRSZWdpc3RlclZpZGVvIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5mdW5jdGlvbiB1c2VGb3JtKCkge1xyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHsgdGl0dWxvOlwiXCIsIHVybDpcIlwiIH0pO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgIHZhbHVlcywgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlclZpZGVvKCkge1xyXG4gICAgY29uc3QgW2Zvcm1WaXNpdmVsLCBzZXRGb3JtVmlzaXZlbF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGZvcm1DYWRhc3RybyA9IHVzZUZvcm0oKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8U3R5bGVkUmVnaXN0ZXJWaWRlbz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtdmlkZW9cIiBvbkNsaWNrPXsoKT0+IHNldEZvcm1WaXNpdmVsKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICtcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHtmb3JtVmlzaXZlbFxyXG4gICAgICAgICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCIgb25DbGljaz17KCk9PiBzZXRGb3JtVmlzaXZlbChmYWxzZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdHVsbyBkbyB2aWRlb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybUNhZGFzdHJvLnZhbHVlcy50aXR1bG99IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50bykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudG8udGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0dWxvOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVVJMXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtQ2FkYXN0cm8udmFsdWVzLnVybH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnRvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50by50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYWRhc3RyYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICA8L1N0eWxlZFJlZ2lzdGVyVmlkZW8+XHJcbiAgICApICAgIFxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTdHlsZWRSZWdpc3RlclZpZGVvIiwidXNlRm9ybSIsInZhbHVlcyIsInNldFZhbHVlcyIsInRpdHVsbyIsInVybCIsIlJlZ2lzdGVyVmlkZW8iLCJmb3JtVmlzaXZlbCIsInNldEZvcm1WaXNpdmVsIiwiZm9ybUNhZGFzdHJvIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnRvIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/RegisterVideo/index.js\n"));

/***/ })

});