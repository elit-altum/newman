webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Safehouse_Code_Open_Source_newman_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! D:/Safehouse/Code/Open Source/newman/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_Safehouse_Code_Open_Source_newman_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! D:/Safehouse/Code/Open Source/newman/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "../../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "../../../node_modules/socket.io-client/build/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jsonwebtoken */ "../../../node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_RunCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/RunCommand */ "./components/RunCommand.js");





var _jsxFileName = "D:\\Safehouse\\Code\\Open Source\\newman\\lib\\dashboard\\frontend\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_Safehouse_Code_Open_Source_newman_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_4__["io"])("http://localhost:5001/", {
  auth: {
    token: jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default.a.sign({
      load: "abc"
    }, "insertSecretKeyHere")
  }
});
socket.on("connect_error", function (err) {
  console.log(err.message);
});

var HomePage = function HomePage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      newmanRuns = _useState[0],
      setNewmanRuns = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    socket.on("newProcessFrontend", function (data) {
      var newRuns = newmanRuns;

      if (newRuns.findIndex(function (run) {
        return run.processId === data.processId;
      }) === -1) {
        newRuns.push(data);
      }

      setNewmanRuns(Object(D_Safehouse_Code_Open_Source_newman_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(newRuns));
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      className: "page-heading",
      children: "Newman Dashboard"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: newmanRuns.map(function (run) {
        return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_RunCommand__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, run), {}, {
          key: run.processId,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 36
          }
        }));
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }, _this);
};

_s(HomePage, "RKohav5KjdykreiYLxeai1qvAl4=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "../../../node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJhdXRoIiwidG9rZW4iLCJqd3QiLCJzaWduIiwibG9hZCIsIm9uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJIb21lUGFnZSIsInVzZVN0YXRlIiwibmV3bWFuUnVucyIsInNldE5ld21hblJ1bnMiLCJ1c2VFZmZlY3QiLCJkYXRhIiwibmV3UnVucyIsImZpbmRJbmRleCIsInJ1biIsInByb2Nlc3NJZCIsInB1c2giLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLDJEQUFFLENBQUMsd0JBQUQsRUFBMkI7QUFDeENDLE1BQUksRUFBRTtBQUNGQyxTQUFLLEVBQUVDLG1EQUFHLENBQUNDLElBQUosQ0FBUztBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUFULEVBQTBCLHFCQUExQjtBQURMO0FBRGtDLENBQTNCLENBQWpCO0FBTUFOLE1BQU0sQ0FBQ08sRUFBUCxDQUFVLGVBQVYsRUFBMkIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBRyxDQUFDRyxPQUFoQjtBQUNILENBRkQ7O0FBSUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNlQyxzREFBUSxDQUFDLEVBQUQsQ0FEdkI7QUFBQSxNQUNkQyxVQURjO0FBQUEsTUFDRkMsYUFERTs7QUFHckJDLHlEQUFTLENBQUMsWUFBTTtBQUNkaEIsVUFBTSxDQUFDTyxFQUFQLENBQVUsb0JBQVYsRUFBZ0MsVUFBQ1UsSUFBRCxFQUFVO0FBQ3RDLFVBQUlDLE9BQU8sR0FBR0osVUFBZDs7QUFDQSxVQUNJSSxPQUFPLENBQUNDLFNBQVIsQ0FBa0IsVUFBQ0MsR0FBRDtBQUFBLGVBQVNBLEdBQUcsQ0FBQ0MsU0FBSixLQUFrQkosSUFBSSxDQUFDSSxTQUFoQztBQUFBLE9BQWxCLE1BQWlFLENBQUMsQ0FEdEUsRUFFRTtBQUNFSCxlQUFPLENBQUNJLElBQVIsQ0FBYUwsSUFBYjtBQUNIOztBQUVERixtQkFBYSxDQUFDLDZJQUFJRyxPQUFMLEVBQWI7QUFDSCxLQVREO0FBVUQsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWNBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQSxnQkFDR0osVUFBVSxDQUFDUyxHQUFYLENBQWUsVUFBQUgsR0FBRztBQUFBLDRCQUFJLDREQUFDLDhEQUFELGtDQUFnQkEsR0FBaEI7QUFBcUIsYUFBRyxFQUFJQSxHQUFHLENBQUNDLFNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSjtBQUFBLE9BQWxCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBUUQsQ0F6QkQ7O0dBQU1ULFE7O0tBQUFBLFE7QUEyQlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU5YjA5OTlmMzNhMTIyMWZmMWVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcblxyXG5pbXBvcnQgUnVuQ29tbWFuZCBmcm9tICcuLi9jb21wb25lbnRzL1J1bkNvbW1hbmQnO1xyXG5cclxuY29uc3Qgc29ja2V0ID0gaW8oXCJodHRwOi8vbG9jYWxob3N0OjUwMDEvXCIsIHtcclxuICAgIGF1dGg6IHtcclxuICAgICAgICB0b2tlbjogand0LnNpZ24oeyBsb2FkOiBcImFiY1wiIH0sIFwiaW5zZXJ0U2VjcmV0S2V5SGVyZVwiKSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuc29ja2V0Lm9uKFwiY29ubmVjdF9lcnJvclwiLCAoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcbn0pO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW25ld21hblJ1bnMsIHNldE5ld21hblJ1bnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc29ja2V0Lm9uKFwibmV3UHJvY2Vzc0Zyb250ZW5kXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1J1bnMgPSBuZXdtYW5SdW5zO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgbmV3UnVucy5maW5kSW5kZXgoKHJ1bikgPT4gcnVuLnByb2Nlc3NJZCA9PT0gZGF0YS5wcm9jZXNzSWQpID09PSAtMVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBuZXdSdW5zLnB1c2goZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXROZXdtYW5SdW5zKFsuLi5uZXdSdW5zXSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZ1wiPk5ld21hbiBEYXNoYm9hcmQ8L2gxPlxyXG4gICAgICAgICAgPGRpdj4gIFxyXG4gICAgICAgICAgICB7bmV3bWFuUnVucy5tYXAocnVuID0+IDxSdW5Db21tYW5kIHsuLi5ydW59IGtleSA9IHtydW4ucHJvY2Vzc0lkfS8+KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==