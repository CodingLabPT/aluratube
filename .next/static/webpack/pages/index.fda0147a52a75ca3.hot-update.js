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

/***/ "./src/components/Timeline.js":
/*!************************************!*\
  !*** ./src/components/Timeline.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledTimeline\": function() { return /* binding */ StyledTimeline; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  flex: 1;\\n  width: 100%;\\n  padding: 16px;\\n  overflow: hidden;\\n  h2 {\\n    font-size: 16px;\\n    margin-bottom: 16px;\\n    text-transform: capitalize;\\n  }\\n  img {\\n    aspect-ratio: 16/9;\\n    font-weight: 500;\\n    object-fit: cover;\\n    width: 100%;\\n    max-width: 210px;\\n    height: auto;\\n  }\\n  section {\\n    width: 100%;\\n    padding: 0;\\n    overflow: hidden;\\n    padding: 16px;\\n    div {\\n      \\n      width: calc(100vw - 16px * 4);\\n      display: grid;\\n      grid-gap: 16px;\\n      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));\\n      grid-auto-flow: column;\\n      grid-auto-columns: minmax(200px,1fr);\\n      overflow-x: scroll;\\n      scroll-snap-type: x mandatory;\\n      a {\\n        scroll-snap-align: start;\\n        span {\\n          padding-top: 8px;\\n          display: block;\\n          padding-right: 24px;\\n          color: \",\n        \";\\n        }\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst StyledTimeline = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"Timeline__StyledTimeline\",\n    componentId: \"sc-1f36df6f-0\"\n})(_templateObject(), (param)=>{\n    let { theme  } = param;\n    return theme.textColorBase || \"#222222\";\n});\n_c = StyledTimeline;\nfunction TimeLine(param) {\n    let { searchValue , ...props } = param;\n    const playlistsNames = Object.keys(props.playlists);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledTimeline, {\n        children: playlistsNames.map(function(playlistsName) {\n            const videos = props.playlists[playlistsName];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: playlistsName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                        lineNumber: 58,\n                        columnNumber: 23\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: videos.filter((video)=>{\n                            return video.title.includes(set);\n                        }).map((video)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: video.url,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        src: video.thumb\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 39\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: video.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 39\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                                lineNumber: 64,\n                                columnNumber: 35\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                        lineNumber: 59,\n                        columnNumber: 23\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                lineNumber: 57,\n                columnNumber: 19\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n        lineNumber: 53,\n        columnNumber: 7\n    }, this);\n}\n_c1 = TimeLine;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TimeLine);\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledTimeline\");\n$RefreshReg$(_c1, \"TimeLine\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMsaUJBQWlCRCx3RUFBVTs7O3NCQXVDckIsU0FBZUc7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUMsYUFBYSxJQUFJO0FBQVEsR0FLL0Q7S0E1Q1dIO0FBOENiLFNBQVNJLFNBQVMsS0FBdUIsRUFBRTtRQUF6QixFQUFDQyxZQUFXLEVBQUUsR0FBR0MsT0FBTSxHQUF2QjtJQUNoQixNQUFNQyxpQkFBaUJDLE9BQU9DLElBQUksQ0FBQ0gsTUFBTUksU0FBUztJQUVsRCxxQkFDSSw4REFBQ1Y7a0JBQ0lPLGVBQWVJLEdBQUcsQ0FBQyxTQUFTQyxhQUFhLEVBQUU7WUFDeEMsTUFBTUMsU0FBU1AsTUFBTUksU0FBUyxDQUFDRSxjQUFjO1lBQzdDLHFCQUNJLDhEQUFDRTs7a0NBQ0csOERBQUNDO2tDQUFJSDs7Ozs7O2tDQUNMLDhEQUFDWDtrQ0FDSVksT0FBT0csTUFBTSxDQUFDLENBQUNDLFFBQVU7NEJBQ3RCLE9BQU9BLE1BQU1DLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQzt3QkFDaEMsR0FBR1QsR0FBRyxDQUFDLENBQUNNLFFBQVU7NEJBQ2QscUJBQ0ksOERBQUNJO2dDQUFFQyxNQUFNTCxNQUFNTSxHQUFHOztrREFDZCw4REFBQ0M7d0NBQUlDLEtBQUtSLE1BQU1TLEtBQUs7Ozs7OztrREFDckIsOERBQUNDO2tEQUNJVixNQUFNQyxLQUFLOzs7Ozs7Ozs7Ozs7d0JBSTVCOzs7Ozs7Ozs7Ozs7UUFJaEI7Ozs7OztBQUdWO01BN0JTZDtBQStCVCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qcz9hMmUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkVGltZWxpbmUgPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIGFzcGVjdC1yYXRpbzogMTYvOTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAyMTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGRpdiB7XHJcbiAgICAgIFxyXG4gICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDE2cHggKiA0KTtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC1nYXA6IDE2cHg7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoMjAwcHgsMWZyKSk7XHJcbiAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICAgIGdyaWQtYXV0by1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsMWZyKTtcclxuICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcclxuICAgICAgYSB7XHJcbiAgICAgICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICAgICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHRDb2xvckJhc2UgfHwgXCIjMjIyMjIyXCJ9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFRpbWVMaW5lKHtzZWFyY2hWYWx1ZSwgLi4ucHJvcHN9KSB7XHJcbiAgY29uc3QgcGxheWxpc3RzTmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wcy5wbGF5bGlzdHMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8U3R5bGVkVGltZWxpbmU+XHJcbiAgICAgICAgICB7cGxheWxpc3RzTmFtZXMubWFwKGZ1bmN0aW9uKHBsYXlsaXN0c05hbWUpIHtcclxuICAgICAgICAgICAgICBjb25zdCB2aWRlb3MgPSBwcm9wcy5wbGF5bGlzdHNbcGxheWxpc3RzTmFtZV07XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDI+e3BsYXlsaXN0c05hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3ZpZGVvcy5maWx0ZXIoKHZpZGVvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2aWRlby50aXRsZS5pbmNsdWRlcyhzZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubWFwKCh2aWRlbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmlkZW8udXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dmlkZW8udGh1bWJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2aWRlby50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pfVxyXG4gICAgICA8L1N0eWxlZFRpbWVsaW5lPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZUxpbmUiXSwibmFtZXMiOlsic3R5bGVkIiwiU3R5bGVkVGltZWxpbmUiLCJkaXYiLCJ0aGVtZSIsInRleHRDb2xvckJhc2UiLCJUaW1lTGluZSIsInNlYXJjaFZhbHVlIiwicHJvcHMiLCJwbGF5bGlzdHNOYW1lcyIsIk9iamVjdCIsImtleXMiLCJwbGF5bGlzdHMiLCJtYXAiLCJwbGF5bGlzdHNOYW1lIiwidmlkZW9zIiwic2VjdGlvbiIsImgyIiwiZmlsdGVyIiwidmlkZW8iLCJ0aXRsZSIsImluY2x1ZGVzIiwic2V0IiwiYSIsImhyZWYiLCJ1cmwiLCJpbWciLCJzcmMiLCJ0aHVtYiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Timeline.js\n"));

/***/ })

});