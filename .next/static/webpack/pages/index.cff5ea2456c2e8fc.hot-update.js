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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledTimeline\": function() { return /* binding */ StyledTimeline; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  flex: 1;\\n  width: 100%;\\n  padding: 16px;\\n  overflow: hidden;\\n  h2 {\\n    font-size: 16px;\\n    margin-bottom: 16px;\\n    text-transform: capitalize;\\n  }\\n  img {\\n    aspect-ratio: 16/9;\\n    font-weight: 500;\\n    object-fit: cover;\\n    width: 100%;\\n    max-width: 210px;\\n    height: auto;\\n  }\\n  section {\\n    width: 100%;\\n    padding: 0;\\n    overflow: hidden;\\n    padding: 16px;\\n    div {\\n      \\n      width: calc(100vw - 16px * 4);\\n      display: grid;\\n      grid-gap: 16px;\\n      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));\\n      grid-auto-flow: column;\\n      grid-auto-columns: minmax(200px,1fr);\\n      overflow-x: scroll;\\n      scroll-snap-type: x mandatory;\\n      a {\\n        scroll-snap-align: start;\\n        span {\\n          padding-top: 8px;\\n          display: block;\\n          padding-right: 24px;\\n          color: \",\n        \";\\n        }\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst StyledTimeline = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n    displayName: \"Timeline__StyledTimeline\",\n    componentId: \"sc-d55693b2-0\"\n})(_templateObject(), (param)=>{\n    let { theme  } = param;\n    return theme.textColorBase || \"#222222\";\n});\n_c = StyledTimeline;\nfunction TimeLine(searchValue) {\n    for(var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){\n        props[_key - 1] = arguments[_key];\n    }\n    const playlistsNames = Object.keys(props.playlists);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledTimeline, {\n        children: playlistsNames.map(function(playlistsName) {\n            const videos = props.playlists[playlistsName];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: playlistsName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                        lineNumber: 58,\n                        columnNumber: 23\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: videos.filter((video)=>{\n                            return video.title.includes(searchValue);\n                        }).map((video)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: video.url,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        src: video.thumb\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 39\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: video.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 39\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                                lineNumber: 64,\n                                columnNumber: 35\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                        lineNumber: 59,\n                        columnNumber: 23\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n                lineNumber: 57,\n                columnNumber: 19\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Mario\\\\Documents\\\\Alura\\\\aluratube\\\\src\\\\components\\\\Timeline.js\",\n        lineNumber: 53,\n        columnNumber: 7\n    }, this);\n}\n_c1 = TimeLine;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TimeLine);\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledTimeline\");\n$RefreshReg$(_c1, \"TimeLine\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMsaUJBQWlCRCx3RUFBVTs7O3NCQXVDckIsU0FBZUc7UUFBZCxFQUFFQSxNQUFLLEVBQUU7V0FBS0EsTUFBTUMsYUFBYSxJQUFJO0FBQVEsR0FLL0Q7S0E1Q1dIO0FBOENiLFNBQVNJLFNBQVNDLFdBQVcsRUFBWTtJQUFWLDBFQUFRLEdBQVI7UUFBR0MsTUFBSCwyQkFBUTtJQUFEO0lBQ3BDLE1BQU1DLGlCQUFpQkMsT0FBT0MsSUFBSSxDQUFDSCxNQUFNSSxTQUFTO0lBRWxELHFCQUNJLDhEQUFDVjtrQkFDSU8sZUFBZUksR0FBRyxDQUFDLFNBQVNDLGFBQWEsRUFBRTtZQUN4QyxNQUFNQyxTQUFTUCxNQUFNSSxTQUFTLENBQUNFLGNBQWM7WUFDN0MscUJBQ0ksOERBQUNFOztrQ0FDRyw4REFBQ0M7a0NBQUlIOzs7Ozs7a0NBQ0wsOERBQUNYO2tDQUNJWSxPQUFPRyxNQUFNLENBQUMsQ0FBQ0MsUUFBVTs0QkFDdEIsT0FBT0EsTUFBTUMsS0FBSyxDQUFDQyxRQUFRLENBQUNkO3dCQUNoQyxHQUFHTSxHQUFHLENBQUMsQ0FBQ00sUUFBVTs0QkFDZCxxQkFDSSw4REFBQ0c7Z0NBQUVDLE1BQU1KLE1BQU1LLEdBQUc7O2tEQUNkLDhEQUFDQzt3Q0FBSUMsS0FBS1AsTUFBTVEsS0FBSzs7Ozs7O2tEQUNyQiw4REFBQ0M7a0RBQ0lULE1BQU1DLEtBQUs7Ozs7Ozs7Ozs7Ozt3QkFJNUI7Ozs7Ozs7Ozs7OztRQUloQjs7Ozs7O0FBR1Y7TUE3QlNkO0FBK0JULCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzP2EyZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRUaW1lbGluZSA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgYXNwZWN0LXJhdGlvOiAxNi85O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDIxMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBzZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZGl2IHtcclxuICAgICAgXHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTZweCAqIDQpO1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLWdhcDogMTZweDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLG1pbm1heCgyMDBweCwxZnIpKTtcclxuICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICAgICAgZ3JpZC1hdXRvLWNvbHVtbnM6IG1pbm1heCgyMDBweCwxZnIpO1xyXG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG4gICAgICBhIHtcclxuICAgICAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dENvbG9yQmFzZSB8fCBcIiMyMjIyMjJcIn07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gVGltZUxpbmUoc2VhcmNoVmFsdWUsIC4uLnByb3BzKSB7XHJcbiAgY29uc3QgcGxheWxpc3RzTmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wcy5wbGF5bGlzdHMpO1xyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxTdHlsZWRUaW1lbGluZT5cclxuICAgICAgICAgIHtwbGF5bGlzdHNOYW1lcy5tYXAoZnVuY3Rpb24ocGxheWxpc3RzTmFtZSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHZpZGVvcyA9IHByb3BzLnBsYXlsaXN0c1twbGF5bGlzdHNOYW1lXTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMj57cGxheWxpc3RzTmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dmlkZW9zLmZpbHRlcigodmlkZW8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZpZGVvLnRpdGxlLmluY2x1ZGVzKHNlYXJjaFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLm1hcCgodmlkZW8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZpZGVvLnVybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3ZpZGVvLnRodW1ifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmlkZW8udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC9TdHlsZWRUaW1lbGluZT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVMaW5lIl0sIm5hbWVzIjpbInN0eWxlZCIsIlN0eWxlZFRpbWVsaW5lIiwiZGl2IiwidGhlbWUiLCJ0ZXh0Q29sb3JCYXNlIiwiVGltZUxpbmUiLCJzZWFyY2hWYWx1ZSIsInByb3BzIiwicGxheWxpc3RzTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwicGxheWxpc3RzIiwibWFwIiwicGxheWxpc3RzTmFtZSIsInZpZGVvcyIsInNlY3Rpb24iLCJoMiIsImZpbHRlciIsInZpZGVvIiwidGl0bGUiLCJpbmNsdWRlcyIsImEiLCJocmVmIiwidXJsIiwiaW1nIiwic3JjIiwidGh1bWIiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Timeline.js\n"));

/***/ })

});