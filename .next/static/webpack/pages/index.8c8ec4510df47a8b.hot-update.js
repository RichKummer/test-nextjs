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

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavItem */ \"./components/NavItem.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MENU_LIST = [\n    {\n        text: \"Home\",\n        href: \"/\"\n    },\n    {\n        text: \"About Us\",\n        href: \"/about\"\n    },\n    {\n        text: \"Contact\",\n        href: \"/contact\"\n    }\n];\nconst Navbar = ()=>{\n    _s();\n    const [navActive, setNavActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [activeIdx, setActiveIdx] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(-1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"nav\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"logo\",\n                        children: \"CodeWithMarish\"\n                    }, void 0, false, {\n                        fileName: \"/Users/RichK/Documents/GitHub/test-nextjs/components/Navbar.js\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/RichK/Documents/GitHub/test-nextjs/components/Navbar.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>setNavActive(!navActive),\n                    className: \"nav__menu-bar\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/RichK/Documents/GitHub/test-nextjs/components/Navbar.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/RichK/Documents/GitHub/test-nextjs/components/Navbar.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/RichK/Documents/GitHub/test-nextjs/components/Navbar.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/RichK/Documents/GitHub/test-nextjs/components/Navbar.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(navActive ? \"active\" : \"\", \" nav__menu-list\"),\n                    children: MENU_LIST.map((menu, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: ()=>{\n                                setActiveIdx(idx);\n                                setNavActive(false);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                active: activeIdx === idx,\n                                ...menu\n                            }, void 0, false, {\n                                fileName: \"/Users/RichK/Documents/GitHub/test-nextjs/components/Navbar.js\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, undefined)\n                        }, menu.text, false, {\n                            fileName: \"/Users/RichK/Documents/GitHub/test-nextjs/components/Navbar.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/RichK/Documents/GitHub/test-nextjs/components/Navbar.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/RichK/Documents/GitHub/test-nextjs/components/Navbar.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/RichK/Documents/GitHub/test-nextjs/components/Navbar.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"H2IMVLlRb9597dOwe6poJC3MbMw=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRTtBQUNTO0FBQ1I7QUFFaEMsTUFBTUssWUFBWTtJQUNoQjtRQUFFQyxNQUFNO1FBQVFDLE1BQU07SUFBSTtJQUMxQjtRQUFFRCxNQUFNO1FBQVlDLE1BQU07SUFBUztJQUNuQztRQUFFRCxNQUFNO1FBQVdDLE1BQU07SUFBVztDQUNyQztBQUNELE1BQU1DLFNBQVMsSUFBTTs7SUFDbkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDLElBQUk7SUFDL0MsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDLENBQUM7SUFFNUMscUJBQ0UsOERBQUNVO2tCQUNDLDRFQUFDQztZQUFJQyxXQUFZOzs4QkFDZiw4REFBQ2Ysa0RBQUlBO29CQUFDTyxNQUFNOzhCQUNSLDRFQUFDUzt3QkFBR0QsV0FBVTtrQ0FBTzs7Ozs7Ozs7Ozs7OEJBRXpCLDhEQUFDRTtvQkFDQ0MsU0FBUyxJQUFNUixhQUFhLENBQUNEO29CQUM3Qk0sV0FBWTs7c0NBRVosOERBQUNFOzs7OztzQ0FDRCw4REFBQ0E7Ozs7O3NDQUNELDhEQUFDQTs7Ozs7Ozs7Ozs7OEJBRUgsOERBQUNBO29CQUFJRixXQUFXLEdBQTZCLE9BQTFCTixZQUFZLFdBQVcsRUFBRSxFQUFDOzhCQUMxQ0osVUFBVWMsR0FBRyxDQUFDLENBQUNDLE1BQU1DLG9CQUNwQiw4REFBQ0o7NEJBQ0NDLFNBQVMsSUFBTTtnQ0FDYk4sYUFBYVM7Z0NBQ2JYLGFBQWEsS0FBSzs0QkFDcEI7c0NBR0EsNEVBQUNOLGdEQUFPQTtnQ0FBQ2tCLFFBQVFYLGNBQWNVO2dDQUFNLEdBQUdELElBQUk7Ozs7OzsyQkFGdkNBLEtBQUtkLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM1QjtHQWxDTUU7S0FBQUE7QUFvQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanM/ZmJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdkl0ZW0gZnJvbSBcIi4vTmF2SXRlbVwiO1xuXG5jb25zdCBNRU5VX0xJU1QgPSBbXG4gIHsgdGV4dDogXCJIb21lXCIsIGhyZWY6IFwiL1wiIH0sXG4gIHsgdGV4dDogXCJBYm91dCBVc1wiLCBocmVmOiBcIi9hYm91dFwiIH0sXG4gIHsgdGV4dDogXCJDb250YWN0XCIsIGhyZWY6IFwiL2NvbnRhY3RcIiB9LFxuXTtcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgW25hdkFjdGl2ZSwgc2V0TmF2QWN0aXZlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYWN0aXZlSWR4LCBzZXRBY3RpdmVJZHhdID0gdXNlU3RhdGUoLTEpO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtgbmF2YH0+XG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsb2dvXCI+Q29kZVdpdGhNYXJpc2g8L2gxPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZBY3RpdmUoIW5hdkFjdGl2ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgbmF2X19tZW51LWJhcmB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtuYXZBY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIn0gbmF2X19tZW51LWxpc3RgfT5cbiAgICAgICAgICB7TUVOVV9MSVNULm1hcCgobWVudSwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVJZHgoaWR4KTtcbiAgICAgICAgICAgICAgICBzZXROYXZBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBrZXk9e21lbnUudGV4dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0gYWN0aXZlPXthY3RpdmVJZHggPT09IGlkeH0gey4uLm1lbnV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5hdkl0ZW0iLCJNRU5VX0xJU1QiLCJ0ZXh0IiwiaHJlZiIsIk5hdmJhciIsIm5hdkFjdGl2ZSIsInNldE5hdkFjdGl2ZSIsImFjdGl2ZUlkeCIsInNldEFjdGl2ZUlkeCIsImhlYWRlciIsIm5hdiIsImNsYXNzTmFtZSIsImgxIiwiZGl2Iiwib25DbGljayIsIm1hcCIsIm1lbnUiLCJpZHgiLCJhY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});