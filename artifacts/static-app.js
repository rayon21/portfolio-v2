(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/~raymonde/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);



var Badge = function Badge(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "badge"
  }, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Badge);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);



var Footer = function Footer(_ref) {
  var style = _ref.style,
      hidePlaceholder = _ref.hidePlaceholder;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !hidePlaceholder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "placeholder"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer",
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/rayon21",
    className: "footer__link"
  }, "Github"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/raymondeng-",
    className: "footer__link"
  }, "LinkedIn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.behance.net/",
    className: "footer__link"
  }, "Behance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "footer__copyright"
  }, "Raymond Eng \xA9 ", new Date().getFullYear())));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(20);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(52);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(54);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(25);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(27);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(26);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(21);

var _helpers = __webpack_require__(55);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(51)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(21);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(53)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);



var TextContainer = function TextContainer(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    "class": "text-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-container__subtitle"
  }, subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-container__heading"
  }, title), children);
};

/* harmony default export */ __webpack_exports__["a"] = (TextContainer);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);



var SocialMeidaIcons = function SocialMeidaIcons() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-media-icons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/rayon21",
    className: "social-media-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "media-icon",
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "GitHub icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/raymondeng-",
    className: "social-media-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "media-icon",
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "LinkedIn icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "social-media-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "media-icon",
    role: "img",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Dribbble icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (SocialMeidaIcons);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);



var LoadingIndicator = function LoadingIndicator() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (LoadingIndicator);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);



var Bio = function Bio(_ref) {
  var src = _ref.src,
      text = _ref.text,
      alt = _ref.alt,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bio ".concat(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bio-img__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: src,
    alt: alt,
    className: "bio__img"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "bio__text"
  }, text));
};

/* harmony default export */ __webpack_exports__["a"] = (Bio);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jkcsales-dashboard.1dff87a5.png";

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(14);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(9);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/Nav/index.jsx + 1 modules
var Nav = __webpack_require__(22);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(11);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/CircleCursor/style.css
var style = __webpack_require__(65);

// CONCATENATED MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/CircleCursor/index.jsx




var CircleCursor_CircleCursor = function CircleCursor() {
  var cursor = Object(external_react_["useRef"])();

  var _useState = Object(external_react_["useState"])({
    x: 0,
    y: 0
  }),
      _useState2 = slicedToArray_default()(_useState, 2),
      position = _useState2[0],
      setPostion = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      hidden = _useState4[0],
      setHidden = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(50),
      _useState6 = slicedToArray_default()(_useState5, 2),
      radius = _useState6[0],
      setRadius = _useState6[1];

  var updateCursor = function updateCursor(e) {
    setPostion({
      x: e.clientX,
      y: e.clientY
    });
  };

  var handleMouseEnter = function handleMouseEnter() {
    return setHidden(false);
  };

  var handleMouseLeave = function handleMouseLeave() {
    return setHidden(true);
  };

  Object(external_react_["useEffect"])(function () {
    document.addEventListener("mousemove", function (e) {
      updateCursor(e);
    });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "circle-cursor",
    ref: cursor,
    style: {
      top: "".concat(position.y, "px"),
      left: "".concat(position.x, "px"),
      width: hidden ? 0 : "".concat(radius, "px"),
      height: hidden ? 0 : "".concat(radius, "px")
    }
  });
};

/* harmony default export */ var components_CircleCursor = (CircleCursor_CircleCursor);
// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/LoadingIndicator/index.jsx
var LoadingIndicator = __webpack_require__(16);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/app.css
var app = __webpack_require__(67);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/fonts.css
var fonts = __webpack_require__(68);

// CONCATENATED MODULE: /Users/ray/Documents/IAT339/portfolio/src/App.js

 //
// import { Router } from "components/Router";








function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(components_CircleCursor, null), /*#__PURE__*/external_react_default.a.createElement(Nav["a" /* default */], null), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement(LoadingIndicator["a" /* default */], null)
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Router"], {
    basepath: "/~raymonde"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(20);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(12);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(11);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/Nav/style.css
var style = __webpack_require__(63);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/Router.js
var Router = __webpack_require__(4);

// CONCATENATED MODULE: /Users/ray/Documents/IAT339/portfolio/src/util/useOutsideClick.js


var useOutsideClick_useOutsideClick = function useOutsideClick(ref, callback) {
  var handleClick = function handleClick(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  Object(external_react_["useEffect"])(function () {
    document.addEventListener("click", handleClick);
    return function () {
      document.removeEventListener("click", handleClick);
    };
  });
};

/* harmony default export */ var util_useOutsideClick = (useOutsideClick_useOutsideClick);
// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/SocialMediaIcons/index.jsx
var SocialMediaIcons = __webpack_require__(15);

// CONCATENATED MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/Nav/index.jsx







var Nav_Nav = function Nav() {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var overlayMenuRef = Object(external_react_["useRef"])();
  util_useOutsideClick(overlayMenuRef, function () {
    return isOpen && setIsOpen(false);
  });

  var handleMenuClick = function handleMenuClick() {
    setIsOpen(!isOpen);
  };

  var handleOverlayNavLinkClick = function handleOverlayNavLinkClick() {
    setIsOpen(false);
  };

  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "nav-container"
  }, /*#__PURE__*/external_react_default.a.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    className: "nav__link",
    to: "/"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "nav__brand-container"
  }, /*#__PURE__*/external_react_default.a.createElement("svg", {
    className: "nav__logo",
    fill: "none",
    height: "2500",
    viewBox: "-29.30425536 -37.58357022 469.33352958 496.22652001",
    width: "2500",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/external_react_default.a.createElement("g", {
    fill: "blue"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "m131.967 298.073a28.186 28.186 0 0 1 -33.688 27.647 28.185 28.185 0 0 1 -22.147-22.147 28.19 28.19 0 0 1 47.579-25.432 28.19 28.19 0 0 1 8.256 19.932zm245.94-29.342a292.167 292.167 0 0 0 -247.602-247.602 185.334 185.334 0 0 0 -40.95 29.522v27.236a231.984 231.984 0 0 1 231.795 231.603h27.237a195.21 195.21 0 0 0 29.521-40.759z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "m399.961 183.228a183.219 183.219 0 0 0 -113.768-169.553 183.225 183.225 0 0 0 -70.41-13.673c-6.475 0-12.761 0-19.046.953l-4.19 12.19a315.224 315.224 0 0 1 193.13 192.939l12.189-4.381c0-6.095 1.143-12.19 1.143-19.046m-181.118 217.307a217.891 217.891 0 0 1 -217.89-216.938 216.367 216.367 0 0 1 63.805-154.085l12.38 11.619a201.127 201.127 0 0 0 0 285.695 201.133 201.133 0 0 0 285.695 0l11.619 11.618a216.184 216.184 0 0 1 -155.609 62.091z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "m215.438 322.074a126.65 126.65 0 0 0 -49.711-112.564 123.998 123.998 0 0 0 -63.805-25.903 11.615 11.615 0 0 1 -10.095-12.189 11.24 11.24 0 0 1 7.945-9.865 11.222 11.222 0 0 1 4.436-.42 149.516 149.516 0 0 1 133.324 163.417 130.44 130.44 0 0 1 -4.952 25.713l33.14 9.332a183.963 183.963 0 0 0 28.57-10.856 202.753 202.753 0 0 0 3.619-39.045 209.512 209.512 0 0 0 -177.702-206.843 92.199 92.199 0 0 0 -33.332 0 72.567 72.567 0 0 0 -35.997 22.284 71.234 71.234 0 0 0 31.807 114.278 164.882 164.882 0 0 0 17.904 3.238 66.856 66.856 0 0 1 55.615 65.9 66.09 66.09 0 0 1 -10.666 35.998l22.856 14.666a169.675 169.675 0 0 0 34.283 5.713 125.335 125.335 0 0 0 12.571-43.806"
  }))), /*#__PURE__*/external_react_default.a.createElement("span", {
    "class": "nav__logo-name"
  }, "raymond eng"))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "nav__links"
  }, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    className: "nav__link",
    to: "./"
  }, "Home"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    className: "nav__link",
    to: "./work"
  }, "Work"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    className: "nav__link",
    to: "./style-guide"
  }, "Style Guide"))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hamburger",
    onClick: handleMenuClick,
    "aria-label": "Toggle the menu",
    role: "button",
    "aria-expanded": isOpen
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hamburger__bar",
    style: {
      transform: isOpen ? "rotate(45deg)" : "none",
      marginBottom: isOpen ? 0 : "0.5rem"
    }
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hamburger__bar",
    style: {
      transform: isOpen ? "rotate(-45deg)" : "none",
      marginBottom: isOpen ? 0 : "0.5rem"
    }
  })), /*#__PURE__*/external_react_default.a.createElement("nav", {
    className: "overlay-nav",
    style: {
      right: isOpen ? 0 : "-100%"
    },
    ref: overlayMenuRef
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    className: "nav__link nav__link-overlay",
    to: "/",
    onClick: handleOverlayNavLinkClick,
    style: {
      transform: isOpen ? "translateX(0)" : "translateX(2rem)"
    }
  }, "Home"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    className: "nav__link nav__link-overlay",
    to: "/work",
    onClick: handleOverlayNavLinkClick,
    style: {
      transform: isOpen ? "translateX(0)" : "translateX(2rem)"
    }
  }, "Work"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    className: "nav__link nav__link-overlay",
    to: "/style-guide",
    onClick: handleOverlayNavLinkClick,
    style: {
      transform: isOpen ? "translateX(0)" : "translateX(2rem)"
    }
  }, "Style Guide")), /*#__PURE__*/external_react_default.a.createElement(SocialMediaIcons["a" /* default */], null)));
};

/* harmony default export */ var components_Nav = __webpack_exports__["a"] = (Nav_Nav);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("/Users/ray/Documents/IAT339/portfolio/node_modules/react-static/lib/browser");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _components_Bio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
/* harmony import */ var _images_jkcsales_dashboard_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var _images_jkcsales_dashboard_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_jkcsales_dashboard_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_jkcsales_logo_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37);
/* harmony import */ var _images_jkcsales_logo_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_jkcsales_logo_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_poster_jpeg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38);
/* harmony import */ var _images_poster_jpeg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_poster_jpeg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_intersect_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39);
/* harmony import */ var _images_intersect_logo_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_intersect_logo_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_me_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40);
/* harmony import */ var _images_me_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_me_jpg__WEBPACK_IMPORTED_MODULE_11__);













var Default = function Default() {
  gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__["ScrollTrigger"]);
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var element = ref.current; // Text animation

    gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].fromTo(element.querySelectorAll(".home-section .--heading, .home-section .header__subtitle, .home-section .link"), {
      opacity: 0,
      top: 0
    }, {
      opacity: 1,
      top: -50,
      duration: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power1"].easeInOut,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".home-section"
      }
    }); // img slide in

    gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].fromTo(element.querySelector("#img-poster"), {
      opacity: 0,
      transform: "translateY(30px)"
    }, {
      transform: "translateY(0)",
      duration: 1,
      opacity: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power1"].easeInOut,
      delay: 0.5
    });
    gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].fromTo(element.querySelector("#img-dashboard"), {
      opacity: 0,
      transform: "translateY(-30px)"
    }, {
      transform: "translateY(0)",
      duration: 1,
      opacity: 1,
      ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power1"].easeInOut,
      delay: 0.6
    }); // animate out on scrub

    gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].to(element.querySelector("#img-dashboard"), {
      top: 300,
      duration: 3,
      ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power1"].easeInOut,
      scrollTrigger: {
        trigger: ".main-section",
        scrub: 0.5
      }
    });
    gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].to(element.querySelector("#img-poster"), {
      top: -300,
      duration: 3,
      ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Power1"].easeInOut,
      scrollTrigger: {
        trigger: ".main-section",
        scrub: true
      }
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4__["Helmet"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Raymond Eng")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    "class": "home-section main-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-section__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "--heading"
  }, "hello."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "header__subtitle"
  }, "My name is Raymond Eng. I'm a frontend developer."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "link"
  }, "View my work")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-section__imgs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img--vertical",
    id: "img-dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_jkcsales_dashboard_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "jkc sales dashboard"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img--vertical img--offset",
    id: "img-poster"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_poster_jpeg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "Quizbizz Poster"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "home-section work-section mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "--heading"
  }, "work."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "header__subtitle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "work-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    to: "/work#jkcsales"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-card project-card__jkcsales work-grid__img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_jkcsales_logo_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "",
    "class": "work-grid__img"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    to: "/work#intersect"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-card project-card__intersect work-grid__img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_intersect_logo_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "Intersect Logo"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "home-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "--large-font --heading"
  }, "me."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Bio__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    className: "mt-5",
    src: _images_me_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "A picture of me smiling",
    text: "Hey! My name is Raymond Eng. I am currently a student at Simon Fraser University studying computer science. I am a developer with a passion for design. I specialize in developing interactive web applications. Creating rich digital experiences is part of my expertise."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    "class": "home-section contact-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "--large-font --heading"
  }, "contact me."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "header__subtitle"
  }, "Drop a hello below!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:ray3ng@gmail.com"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn mt-5 --btn-lg"
  }, "ray3ng@gmail.com"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Default);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(10);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/Nav/index.jsx + 1 modules
var Nav = __webpack_require__(22);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/ColourSwatch/style.css
var style = __webpack_require__(71);

// CONCATENATED MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/ColourSwatch/index.js



var ColourSwatch_ColourSwatch = function ColourSwatch(_ref) {
  var hex = _ref.hex;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "colour-swatch"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "colour-swatch__colour",
    style: {
      backgroundColor: "#".concat(hex)
    }
  }), /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "colour-swatch__hex"
  }, "#".concat(hex)));
};

/* harmony default export */ var components_ColourSwatch = (ColourSwatch_ColourSwatch);
// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/Footer/index.js
var Footer = __webpack_require__(7);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/TextContainer/index.jsx
var TextContainer = __webpack_require__(13);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/LoadingIndicator/index.jsx
var LoadingIndicator = __webpack_require__(16);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/SocialMediaIcons/index.jsx
var SocialMediaIcons = __webpack_require__(15);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/Badge/index.jsx
var Badge = __webpack_require__(1);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/Bio/index.jsx
var Bio = __webpack_require__(17);

// CONCATENATED MODULE: /Users/ray/Documents/IAT339/portfolio/src/pages/style-guide.jsx











var style_guide_StyleGuide = function StyleGuide() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_helmet_["Helmet"], null, /*#__PURE__*/external_react_default.a.createElement("title", null, "Raymond Eng - Style Guide")), /*#__PURE__*/external_react_default.a.createElement("section", null, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "style__heading"
  }, "Typography"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "style__content"
  }, /*#__PURE__*/external_react_default.a.createElement("h1", {
    className: "--large-font"
  }, "Poppins"), /*#__PURE__*/external_react_default.a.createElement("p", null, "This is paragraph text."))), /*#__PURE__*/external_react_default.a.createElement("section", null, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "style__heading"
  }, "Colours"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "style__content"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "flex-container"
  }, /*#__PURE__*/external_react_default.a.createElement(components_ColourSwatch, {
    hex: "0B00FF"
  }), /*#__PURE__*/external_react_default.a.createElement(components_ColourSwatch, {
    hex: "333"
  }), /*#__PURE__*/external_react_default.a.createElement(components_ColourSwatch, {
    hex: "eadb00"
  })))), /*#__PURE__*/external_react_default.a.createElement("section", null, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "style__heading"
  }, "Buttons"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "style__content"
  }, /*#__PURE__*/external_react_default.a.createElement("button", {
    className: "btn"
  }, "Submit"))), /*#__PURE__*/external_react_default.a.createElement("section", null, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "style__heading"
  }, "Links"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "style__content"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "#",
    className: "link"
  }, "This is a link."))), /*#__PURE__*/external_react_default.a.createElement("section", null, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "style__heading"
  }, "Forms"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "style__content"
  }, /*#__PURE__*/external_react_default.a.createElement("input", {
    className: "input",
    type: "text",
    placeholder: "This is a input field"
  }))), /*#__PURE__*/external_react_default.a.createElement("section", null, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "style__heading"
  }, "Navigation"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "style__content"
  })), /*#__PURE__*/external_react_default.a.createElement("section", null, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "style__heading"
  }, "Bio"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "style__content"
  }, /*#__PURE__*/external_react_default.a.createElement(Bio["a" /* default */], {
    src: "https://placeimg.com/640/480/any",
    text: "purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non"
  }))), /*#__PURE__*/external_react_default.a.createElement("section", null, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "style__heading"
  }, "Badges"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "style__content"
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(Badge["a" /* default */], null, "AWS"), /*#__PURE__*/external_react_default.a.createElement(Badge["a" /* default */], null, "React"), /*#__PURE__*/external_react_default.a.createElement(Badge["a" /* default */], null, "MongoDB"), /*#__PURE__*/external_react_default.a.createElement(Badge["a" /* default */], null, "Javascript")))), /*#__PURE__*/external_react_default.a.createElement("section", null, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "style__heading"
  }, "Text Container"), /*#__PURE__*/external_react_default.a.createElement(TextContainer["a" /* default */], {
    title: "Main Heading",
    subtitle: "Sub Title"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")), /*#__PURE__*/external_react_default.a.createElement("section", null, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "style__heading"
  }, "Social Media Icons"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "style__content"
  }, /*#__PURE__*/external_react_default.a.createElement(SocialMediaIcons["a" /* default */], null))), /*#__PURE__*/external_react_default.a.createElement("section", null, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "style__heading"
  }, "Loading Indicator"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "style__content"
  }, /*#__PURE__*/external_react_default.a.createElement(LoadingIndicator["a" /* default */], null))), /*#__PURE__*/external_react_default.a.createElement("section", null, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "style__heading"
  }, "Footer"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "style__content"
  }, /*#__PURE__*/external_react_default.a.createElement(Footer["a" /* default */], {
    style: {
      bottom: "auto",
      position: "static"
    },
    hidePlaceholder: true
  }))), /*#__PURE__*/external_react_default.a.createElement("section", null, /*#__PURE__*/external_react_default.a.createElement("h2", {
    className: "style__heading"
  }, "Citations"), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "style__content"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://github.com/react-static/react-static",
    className: "link --block"
  }, "react-static"), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://fonts.google.com/specimen/Poppins?preview.text_type=custom",
    className: "link --block"
  }, "Google Fonts"), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://worldvectorlogo.com/logo/espressif-systems",
    className: "link --block"
  }, "Logo"), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://simpleicons.org/",
    className: "link --block"
  }, "Social Media Icons"), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://medium.com/@kevinfelisilda/click-outside-element-event-using-react-hooks-2c540814b661",
    className: "link --block"
  }, "Outside Click Hook"), /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://medium.com/swlh/how-to-responsive-parallax-footer-bc3ccb3ce8f1",
    className: "link --block"
  }, "Parallax Footer")))), /*#__PURE__*/external_react_default.a.createElement(Footer["a" /* default */], null));
};

/* harmony default export */ var style_guide = __webpack_exports__["default"] = (style_guide_StyleGuide);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Work", function() { return /* binding */ work_Work; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(10);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/TextContainer/index.jsx
var TextContainer = __webpack_require__(13);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/Image/style.css
var style = __webpack_require__(74);

// CONCATENATED MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/Image/index.jsx



var Image_Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt;
  return /*#__PURE__*/external_react_default.a.createElement("img", {
    "class": "image",
    src: src,
    alt: alt
  });
};

/* harmony default export */ var components_Image = (Image_Image);
// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/Footer/index.js
var Footer = __webpack_require__(7);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/components/Badge/index.jsx
var Badge = __webpack_require__(1);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/images/jkcsales-dashboard.png
var jkcsales_dashboard = __webpack_require__(18);
var jkcsales_dashboard_default = /*#__PURE__*/__webpack_require__.n(jkcsales_dashboard);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/images/jkcsales-report.png
var jkcsales_report = __webpack_require__(41);
var jkcsales_report_default = /*#__PURE__*/__webpack_require__.n(jkcsales_report);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/images/storyboard-1.png
var storyboard_1 = __webpack_require__(42);
var storyboard_1_default = /*#__PURE__*/__webpack_require__.n(storyboard_1);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/images/persona.png
var persona = __webpack_require__(43);
var persona_default = /*#__PURE__*/__webpack_require__.n(persona);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/images/framer.png
var framer = __webpack_require__(44);
var framer_default = /*#__PURE__*/__webpack_require__.n(framer);

// EXTERNAL MODULE: /Users/ray/Documents/IAT339/portfolio/src/images/intersect-home.mov
var intersect_home = __webpack_require__(45);
var intersect_home_default = /*#__PURE__*/__webpack_require__.n(intersect_home);

// CONCATENATED MODULE: /Users/ray/Documents/IAT339/portfolio/src/pages/work.jsx












var work_Work = function Work() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(external_react_helmet_["Helmet"], null, /*#__PURE__*/external_react_default.a.createElement("title", null, "Raymond Eng - Work")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/external_react_default.a.createElement("h1", {
    className: "title--large",
    id: "jkcsales"
  }, "project 1."), /*#__PURE__*/external_react_default.a.createElement(TextContainer["a" /* default */], {
    title: "JKCsales CRM Dashboard",
    subtitle: "Web Application"
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(Badge["a" /* default */], null, "AWS"), /*#__PURE__*/external_react_default.a.createElement(Badge["a" /* default */], null, "React"), /*#__PURE__*/external_react_default.a.createElement(Badge["a" /* default */], null, "MongoDB"), /*#__PURE__*/external_react_default.a.createElement(Badge["a" /* default */], null, "Javascript")), /*#__PURE__*/external_react_default.a.createElement(components_Image, {
    src: jkcsales_dashboard_default.a,
    alt: "JKC dashboard screenshot"
  }), /*#__PURE__*/external_react_default.a.createElement("h6", {
    className: "subtitle--small"
  }, "Role"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Full Stack - Independent Project"), /*#__PURE__*/external_react_default.a.createElement("h6", {
    className: "subtitle--small"
  }, "Overview"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Client required an application to keep track of his sale rep\u2019s service transactions. A new CRM web application was developed to replace the existing application. The project involved a front facing UI, web server, database, and email integration."), /*#__PURE__*/external_react_default.a.createElement("h6", {
    className: "subtitle--small"
  }, "Identify Problems"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Client requested a redesign of his existing CRM. The existing design contained unused features that complicated the user interface. Additionally, the existing features provided poor data visualization."), /*#__PURE__*/external_react_default.a.createElement("h6", {
    className: "subtitle--small"
  }, "Solutions"), /*#__PURE__*/external_react_default.a.createElement("p", null, "A new web application was developed to address the business concerns. The application featured admin and employee views with a shared page for data visualization of sale records. Extensive form logic was implemented to prevent user errors and improve input efficiency. This project was developed in an iterative process to validate business requirements."), /*#__PURE__*/external_react_default.a.createElement("h6", {
    className: "subtitle--small"
  }, "Reflection"), /*#__PURE__*/external_react_default.a.createElement("p", null, "This experience has given me the opportunity to integrate my design and technical skills to develop a full stack application. It highlighted the importance of requirements gathering and the necessity to get client feedback often and early. Early on the project, existing problems with the existing application were identified and were improved upon. The result is an application that exceeded the client\u2019s expectation both in the design front and technically as well."), /*#__PURE__*/external_react_default.a.createElement(components_Image, {
    src: jkcsales_report_default.a,
    alt: "JKCsales report user interface"
  })), /*#__PURE__*/external_react_default.a.createElement("div", {
    id: "intersect"
  }, /*#__PURE__*/external_react_default.a.createElement("h1", {
    className: "title--large"
  }, "project 2."), /*#__PURE__*/external_react_default.a.createElement(TextContainer["a" /* default */], {
    title: "Intersect",
    subtitle: "Interactive prototype"
  }, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(Badge["a" /* default */], null, "Framer"), /*#__PURE__*/external_react_default.a.createElement(Badge["a" /* default */], null, "Figma"), /*#__PURE__*/external_react_default.a.createElement(Badge["a" /* default */], null, "UI/UX")), /*#__PURE__*/external_react_default.a.createElement("h6", {
    className: "subtitle--small"
  }, "Role"), /*#__PURE__*/external_react_default.a.createElement("p", null, "UX/UI Designer, Illustrator, Developer"), /*#__PURE__*/external_react_default.a.createElement("h6", {
    className: "subtitle--small"
  }, "Overview"), /*#__PURE__*/external_react_default.a.createElement("p", null, "My team was tasked with developing a high fidelity prototype for an app idea. We decided on a dating mobile application based on proximity based matching."), /*#__PURE__*/external_react_default.a.createElement("h6", {
    className: "subtitle--small"
  }, "Identify Problems"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Developing relevant user features that help users accomplish their goals."), /*#__PURE__*/external_react_default.a.createElement("h6", {
    className: "subtitle--small"
  }, "Solutions"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Research User interviews were conducted to understand user goals Ideation Personas were created to illustrate user needs Design Wireframes and high fidelity prototypes were developed in Figma and Framer. Test User testing with the high fidelity prototype was done to identify problems Heuristic evaluations were performed to identify issues."), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "flex-center"
  }, /*#__PURE__*/external_react_default.a.createElement("figure", {
    className: "figure"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: persona_default.a,
    alt: "persona for intersect app"
  }), /*#__PURE__*/external_react_default.a.createElement("figcaption", null, "A peronsa developed for Intersect."))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "flex-center"
  }, /*#__PURE__*/external_react_default.a.createElement("figure", {
    className: "figure"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: storyboard_1_default.a,
    alt: "Intersect storyboard and user flows sketch"
  }), /*#__PURE__*/external_react_default.a.createElement("figcaption", null, "Started with key interaction flows"))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "flex-center"
  }, /*#__PURE__*/external_react_default.a.createElement("figure", {
    className: "figure"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: framer_default.a,
    alt: "Screenshot of many screens in Framer Prototying tool"
  }), /*#__PURE__*/external_react_default.a.createElement("figcaption", null, "Framer prototyping screens"))), /*#__PURE__*/external_react_default.a.createElement("h6", {
    className: "subtitle--small"
  }, "Reflection"), /*#__PURE__*/external_react_default.a.createElement("p", null, "This project taught me to align my design towards the user goals. Without understanding the user or their problems, it is difficult to solve their problems."), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "flex-center"
  }, /*#__PURE__*/external_react_default.a.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    "class": "video__intersect"
  }, /*#__PURE__*/external_react_default.a.createElement("source", {
    src: intersect_home_default.a,
    type: "video/mp4"
  })))))), /*#__PURE__*/external_react_default.a.createElement(Footer["a" /* default */], null));
};
/* harmony default export */ var work = __webpack_exports__["default"] = (work_Work);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(14);

var _router = __webpack_require__(9);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("gsap/ScrollTrigger");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jkcsales-logo.a0f004b4.svg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/poster.5157f436.jpeg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/intersect-logo.efd2d26b.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/me.37cfda29.jpg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jkcsales-report.18d08c38.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/storyboard-1.8ef28c15.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/persona.d313f014.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/framer.53978344.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/intersect-home.249b846c.mov";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(49);
module.exports = __webpack_require__(56);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(48)["default"];

var _require = __webpack_require__(24),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(24),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(50),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);










Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 30))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index.jsx */).then(__webpack_require__.bind(null, 31))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index.jsx";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/index.jsx';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/style-guide.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/style-guide.jsx */).then(__webpack_require__.bind(null, 32))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/style-guide.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/style-guide.jsx";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/style-guide.jsx';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/work.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/work.jsx */).then(__webpack_require__.bind(null, 33))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/work.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/work.jsx";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/work.jsx'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/index.jsx': t_1,
  '__react_static_root__/src/pages/style-guide.jsx': t_2,
  '__react_static_root__/src/pages/work.jsx': t_3
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(21);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 12,
	"./": 12,
	"./index": 12,
	"./index.js": 12
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 53;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(20);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(25);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(26);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(27);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(8);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(28);

var _interopRequireWildcard = __webpack_require__(29);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(57);

var _Suspense = _interopRequireDefault(__webpack_require__(58));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(61)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("/Users/ray/Documents/IAT339/portfolio/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(29);

var _interopRequireDefault = __webpack_require__(28);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(59));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(60));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(62)(module)))

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".nav-container {\n  padding: 2rem;\n  background-color: #e4e3e1;\n  position: relative;\n  z-index: 5;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.nav__logo {\n  width: 3rem;\n  height: 3rem;\n}\n\n.nav__logo-name {\n  font-size: 0.9rem;\n  margin-left: 1rem;\n}\n\n.nav__link {\n  margin-right: 5rem;\n  font-size: 1.3rem;\n  text-decoration: none;\n  color: #2d2d2f;\n}\n\n.nav__link:last-child {\n  margin-right: 0;\n}\n\n.nav__link:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.nav__link:visited {\n  color: #2d2d2f;\n}\n\n.nav__brand-container {\n  display: flex;\n  align-items: center;\n}\n\n/* HAMBURGER */\n.hamburger {\n  display: none;\n  padding: 1rem;\n}\n\n.hamburger__bar {\n  width: 2rem;\n  height: 2px;\n  background-color: #2d2d2f;\n  margin-bottom: 0.5rem;\n  transition: transform 0.3s ease-in-out, margin 0.3s ease-in-out;\n}\n\n.hamburger:hover {\n  cursor: pointer;\n}\n\n/* OVERLAY */\n.overlay-nav {\n  position: fixed;\n  background-color: #f5f5f5;\n  top: 0;\n  right: -100%;\n  height: 100vh;\n  width: 80vw;\n  padding: 5rem;\n  transition: right 1s cubic-bezier(0.22, 1, 0.36, 1);\n  will-change: right;\n  z-index: 4;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.nav__link-overlay {\n  font-size: 8vw;\n  display: block;\n  transition: transform 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.3s;\n  transform: translateX(2rem);\n}\n\n@media only screen and (max-width: 900px) {\n  .hamburger {\n    display: block;\n    position: fixed;\n    top: 2rem;\n    right: 3rem;\n    z-index: 6;\n  }\n\n  .nav__links {\n    display: none;\n  }\n}\n", ""]);



/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".social-media-icons {\n  display: flex;\n}\n\n.media-icon {\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 1.5rem;\n}\n\n.media-icon:hover path {\n  fill: blue;\n}\n", ""]);



/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".circle-cursor {\n  top: 0;\n  width: 50px;\n  height: 50px;\n  background-color: #fff;\n  position: fixed;\n  pointer-events: none;\n  border-radius: 50%;\n  opacity: 0.9;\n  transition: top 0.5s, left 0.5s, width 0.5s, height 0.5s;\n  transition-timing-function: cubic-bezier(0.33, 1, 0.68, 1);\n  z-index: 10;\n  transform: translate(-50%, -50%);\n  mix-blend-mode: difference;\n}\n\n.cursor--hidden {\n  opacity: 0;\n}\n\n@media (hover: none) {\n  .circle-cursor {\n    display: none;\n  }\n}\n", ""]);



/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ":root {\n  --loader-size: 2rem;\n}\n\n.loader {\n  width: var(--loader-size);\n  height: var(--loader-size);\n  background-color: blue;\n  border-radius: 50%;\n  -webkit-animation: grow 0.6s ease-in-out infinite;\n          animation: grow 0.6s ease-in-out infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n}\n\n@-webkit-keyframes grow {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n@keyframes grow {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n", ""]);



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ":root {\n  --grey300: #5c5c5c;\n  --grey500: #000;\n  --greyDarker: #2d2d2f;\n  --primary: blue;\n  --background: #e4e3e1;\n}\n\n::-moz-selection {\n  background-color: var(--primary);\n  color: #fff;\n}\n\n::selection {\n  background-color: var(--primary);\n  color: #fff;\n}\n\n* {\n  scroll-behavior: smooth;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Poppins\";\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  color: var(--greyDarker);\n  background-color: var(--background);\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n}\n\n.mb-5 {\n  margin-bottom: 5rem;\n}\n\n.mt-5 {\n  margin-top: 5rem;\n}\n\n.flex-container {\n  display: flex;\n  gap: 5rem;\n}\n\n.container {\n  padding: 4rem;\n  background-color: var(--background);\n  z-index: 2;\n  position: relative;\n}\n\n.style__heading {\n  border-top: 1px solid var(--grey500);\n  padding-top: 2rem;\n  font-size: 1rem;\n  color: var(--grey300);\n}\n\n.style__content {\n  margin-left: 15vw;\n  margin-bottom: 5rem;\n}\n\n.--large-font {\n  font-size: 15vw;\n  padding: 0;\n  margin: 0;\n  white-space: nowrap;\n  color: var(--greyDarker);\n}\n\n.--heading {\n  font-size: 4rem;\n  margin: 0;\n  margin-top: 10vh;\n}\n\n.--block {\n  display: block;\n}\n\n/* BUTTONS */\n.btn {\n  border: 5px solid blue;\n  background-color: transparent;\n  padding: 1rem 2rem;\n  transition: all 0.2s ease-out;\n}\n\n.btn:hover {\n  background-color: blue;\n  color: #fff;\n  cursor: pointer;\n}\n\n.--btn-lg {\n  font-size: 1.7rem;\n  padding: 1.5rem 2.5rem;\n}\n\n/* LINK */\n\n.link {\n  text-decoration: none;\n  color: var(--grey500);\n}\n\n.link:hover {\n  text-decoration: underline;\n}\n\n/* INPUT */\n\n.input {\n  width: 100%;\n  border: none;\n  height: 5rem;\n  outline: none;\n  font-size: 2rem;\n  border-bottom: 5px solid var(--greyDarker);\n  background-color: transparent;\n  padding: 1.5rem;\n}\n\n.input:focus {\n  border-color: var(--primary);\n}\n\n/* WORK */\n\n.figure {\n  margin: 4rem 0;\n}\n\n.figure img {\n  max-width: 100%;\n}\n\n.video__intersect {\n  width: 30%;\n}\n\n.title--large {\n  font-size: 15vw;\n}\n\n.subtitle--small {\n  text-transform: uppercase;\n  margin: 1rem 0;\n}\n\n/* HEADER */\n.header__subtitle {\n  margin: 0;\n  margin-left: 0.2rem;\n  margin-bottom: 5rem;\n  max-width: 30rem;\n}\n\n.home-section {\n  /* min-height: 60vh; */\n  margin-bottom: 10rem;\n}\n\n.main-section {\n  overflow: hidden;\n  display: flex;\n  justify-content: space-between;\n}\n\n.img--vertical {\n  width: 20vw;\n  height: 80vh;\n  margin-right: 1rem;\n  position: relative;\n}\n\n.img--vertical img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.img--offset {\n  /* top: 100px; */\n}\n\n.main-section__imgs {\n  display: flex;\n}\n\n.work-grid {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  -moz-column-gap: 2rem;\n       column-gap: 2rem;\n  row-gap: 2rem;\n}\n\n.work-grid__img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: all 0.3s ease-in-out;\n}\n\n.work-grid__img:hover {\n  cursor: pointer;\n}\n\n.project-card {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 24rem;\n}\n\n.project-card__intersect {\n  background: rgb(0, 32, 92);\n  background: linear-gradient(\n    0deg,\n    rgba(0, 32, 92, 1) 0%,\n    rgba(241, 69, 183, 1) 100%\n  );\n}\n\n.project-card__jkcsales {\n  background: linear-gradient(135deg, #009ec3, #5b247a);\n}\n\n.project-card__jkcsales img {\n}\n\n.project-card__intersect img {\n  min-width: 30%;\n  max-width: 40%;\n}\n\n@media only screen and (max-width: 900px) {\n  .style__content {\n    margin-left: 0;\n  }\n}\n\n@media only screen and (max-width: 900px) {\n  .bio {\n    flex-direction: column;\n    gap: 2rem;\n  }\n}\n\n@media only screen and (max-width: 900px) {\n  .main-section__imgs {\n    display: none;\n  }\n\n  .work-grid {\n    grid-template-columns: 1fr;\n  }\n}\n", ""]);



/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap);", ""]);

// Module
exports.push([module.i, "\n", ""]);



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ":root {\n  --footer-height: 24rem;\n}\n\n.footer {\n  width: 100%;\n  background-color: #333;\n  height: var(--footer-height);\n  padding: 4rem;\n  position: fixed;\n  bottom: 0;\n  z-index: 1;\n}\n\n.footer__link {\n  color: #fff;\n  text-decoration: none;\n  font-size: 2.8rem;\n  display: block;\n}\n\n.footer__link:hover {\n  text-decoration: underline;\n}\n\n.footer__copyright {\n  color: #fff;\n  font-size: 0.8rem;\n  margin-top: 3rem;\n  display: block;\n}\n\n.placeholder {\n  height: var(--footer-height);\n}\n", ""]);



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, "/* BIO */\n\n.bio {\n  display: flex;\n  align-items: center;\n}\n\n.bio__img {\n  border-radius: 50%;\n  background-color: #d1d0cd;\n  height: 15rem;\n  width: 15rem;\n  box-shadow: 10px 5px 0 var(--primary);\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.bio-img__container {\n  width: 15rem;\n  height: 15rem;\n  margin-right: 4rem;\n}\n", ""]);



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".colour-swatch {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 5rem;\n}\n\n.colour-swatch__colour {\n  border-radius: 50%;\n  width: 5rem;\n  height: 5rem;\n}\n\n.colour-swatch__hex {\n  text-align: center;\n  margin-top: 0.5rem;\n}\n", ""]);



/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, "/* TEXT CONTAINER */\n.text-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 4rem;\n}\n\n.text-container__subtitle {\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n\n.text-container__heading {\n  margin-top: 0;\n}\n", ""]);



/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".badge {\n  background-color: blue;\n  color: #fff;\n  display: inline-block;\n  font-size: 0.7rem;\n  padding: 0.3rem 0.5rem;\n  border-radius: 5px;\n  margin-right: 0.3rem;\n  text-transform: uppercase;\n}\n", ""]);



/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".image {\n  max-width: 100%;\n  box-shadow: rgba(179, 186, 201, 0.2) 0px 8px 24px;\n  margin: 2rem 0;\n}\n", ""]);



/***/ })
/******/ ]);
});