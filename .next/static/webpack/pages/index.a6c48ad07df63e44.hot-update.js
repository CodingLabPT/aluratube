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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledTimeline\": function() { return /* binding */ StyledTimeline; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  flex: 1;\\n  width: 100%;\\n  padding: 16px;\\n  overflow: hidden;\\n  h2 {\\n    font-size: 16px;\\n    margin-bottom: 16px;\\n    text-transform: capitalize;\\n  }\\n  img {\\n    aspect-ratio: 16/9;\\n    font-weight: 500;\\n    object-fit: cover;\\n    width: 100%;\\n    max-width: 210px;\\n    height: auto;\\n  }\\n  section {\\n    width: 100%;\\n    padding: 0;\\n    overflow: hidden;\\n    padding: 16px;\\n    div {\\n      \\n      width: calc(100vw - 16px * 4);\\n      display: grid;\\n      grid-gap: 16px;\\n      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));\\n      grid-auto-flow: column;\\n      grid-auto-columns: minmax(200px,1fr);\\n      overflow-x: scroll;\\n      scroll-snap-type: x mandatory;\\n      a {\\n        scroll-snap-align: start;\\n        span {\\n          padding-top: 8px;\\n          display: block;\\n          padding-right: 24px;\\n          color: \",\n        \";\\n        }\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst StyledTimeline = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"Timeline__StyledTimeline\",\n    componentId: \"sc-de4e70de-0\"\n})(_templateObject(), (param)=>{\n    let { theme  } = param;\n    return theme.textColorBase || \"#222222\";\n});\n_c = StyledTimeline;\nfunction TimeLine(props) {\n    const playlistsNames = Object.keys(props.playlists);\n    const valorDoFiltro = \"Frost\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledTimeline, {\n        children: playlistsNames.map(function(playlistsName) {\n            const videos = props.playlists[playlistsName];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: playlistsName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                        lineNumber: 59,\n                        columnNumber: 23\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: videos.filter((video)=>{\n                            return video.title.includes(valorDoFiltro);\n                        }).map((video)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: video.url,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        src: video.thumb\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 39\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: video.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 39\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                                lineNumber: 65,\n                                columnNumber: 35\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                        lineNumber: 60,\n                        columnNumber: 23\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                lineNumber: 58,\n                columnNumber: 19\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n        lineNumber: 54,\n        columnNumber: 7\n    }, this);\n}\n_c1 = TimeLine;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TimeLine);\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledTimeline\");\n$RefreshReg$(_c1, \"TimeLine\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMsaUJBQWlCRCx3RUFBVTs7O3NCQXVDckIsU0FBZUc7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUMsYUFBYSxJQUFJO0FBQVEsR0FLL0Q7S0E1Q1dIO0FBOENiLFNBQVNJLFNBQVVDLEtBQUssRUFBRTtJQUN4QixNQUFNQyxpQkFBaUJDLE9BQU9DLElBQUksQ0FBQ0gsTUFBTUksU0FBUztJQUNsRCxNQUFNQyxnQkFBZ0I7SUFFdEIscUJBQ0ksOERBQUNWO2tCQUNJTSxlQUFlSyxHQUFHLENBQUMsU0FBU0MsYUFBYSxFQUFFO1lBQ3hDLE1BQU1DLFNBQVNSLE1BQU1JLFNBQVMsQ0FBQ0csY0FBYztZQUM3QyxxQkFDSSw4REFBQ0U7O2tDQUNHLDhEQUFDQztrQ0FBSUg7Ozs7OztrQ0FDTCw4REFBQ1g7a0NBQ0lZLE9BQU9HLE1BQU0sQ0FBQyxDQUFDQyxRQUFVOzRCQUN0QixPQUFPQSxNQUFNQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ1Q7d0JBQ2hDLEdBQUdDLEdBQUcsQ0FBQyxDQUFDTSxRQUFVOzRCQUNkLHFCQUNJLDhEQUFDRztnQ0FBRUMsTUFBTUosTUFBTUssR0FBRzs7a0RBQ2QsOERBQUNDO3dDQUFJQyxLQUFLUCxNQUFNUSxLQUFLOzs7Ozs7a0RBQ3JCLDhEQUFDQztrREFDSVQsTUFBTUMsS0FBSzs7Ozs7Ozs7Ozs7O3dCQUk1Qjs7Ozs7Ozs7Ozs7O1FBSWhCOzs7Ozs7QUFHVjtNQTlCU2Q7QUFnQ1QsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanM/YTJlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZFRpbWVsaW5lID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBhc3BlY3QtcmF0aW86IDE2Lzk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMjEwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIHNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBkaXYge1xyXG4gICAgICBcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxNnB4ICogNCk7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtZ2FwOiAxNnB4O1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsbWlubWF4KDIwMHB4LDFmcikpO1xyXG4gICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICBncmlkLWF1dG8tY29sdW1uczogbWlubWF4KDIwMHB4LDFmcik7XHJcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0Q29sb3JCYXNlIHx8IFwiIzIyMjIyMlwifTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBUaW1lTGluZSggcHJvcHMpIHtcclxuICBjb25zdCBwbGF5bGlzdHNOYW1lcyA9IE9iamVjdC5rZXlzKHByb3BzLnBsYXlsaXN0cyk7XHJcbiAgY29uc3QgdmFsb3JEb0ZpbHRybyA9IFwiRnJvc3RcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZFRpbWVsaW5lPlxyXG4gICAgICAgICAge3BsYXlsaXN0c05hbWVzLm1hcChmdW5jdGlvbihwbGF5bGlzdHNOYW1lKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdmlkZW9zID0gcHJvcHMucGxheWxpc3RzW3BsYXlsaXN0c05hbWVdO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgyPntwbGF5bGlzdHNOYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt2aWRlb3MuZmlsdGVyKCh2aWRlbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmlkZW8udGl0bGUuaW5jbHVkZXModmFsb3JEb0ZpbHRybylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5tYXAoKHZpZGVvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt2aWRlby51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2aWRlby50aHVtYn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZpZGVvLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvU3R5bGVkVGltZWxpbmU+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lTGluZSJdLCJuYW1lcyI6WyJzdHlsZWQiLCJTdHlsZWRUaW1lbGluZSIsImRpdiIsInRoZW1lIiwidGV4dENvbG9yQmFzZSIsIlRpbWVMaW5lIiwicHJvcHMiLCJwbGF5bGlzdHNOYW1lcyIsIk9iamVjdCIsImtleXMiLCJwbGF5bGlzdHMiLCJ2YWxvckRvRmlsdHJvIiwibWFwIiwicGxheWxpc3RzTmFtZSIsInZpZGVvcyIsInNlY3Rpb24iLCJoMiIsImZpbHRlciIsInZpZGVvIiwidGl0bGUiLCJpbmNsdWRlcyIsImEiLCJocmVmIiwidXJsIiwiaW1nIiwic3JjIiwidGh1bWIiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Timeline.js\n"));

/***/ })

});