/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ 13)();
}


/***/ }),
/* 2 */
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 3 */
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/*!******************************************************!*\
  !*** ./node_modules/react-transition-group/index.js ***!
  \******************************************************/
/*! no static exports found */
/*! exports used: Transition */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(/*! ./CSSTransition */ 17));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(/*! ./ReplaceTransition */ 22));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ 12));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ 9));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),
/* 6 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 7 */
/*!*****************************!*\
  !*** ./src/res/common.json ***!
  \*****************************/
/*! exports provided: securityBGs, securityColors, default */
/*! exports used: securityColors */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":{\"petrol\":{\"bg\":\"#caebdd\",\"icon\":\"#85c9af\"},\"corn\":{\"bg\":\"#faebae\",\"icon\":\"#e3d18b\"},\"salmon\":{\"bg\":\"#f7cab5\",\"icon\":\"#e0a98e\"},\"lavender\":{\"bg\":\"#d9caeb\",\"icon\":\"#baa7d9\"},\"sky\":{\"bg\":\"#cadaeb\",\"icon\":\"#90b5da\"}}}");

/***/ }),
/* 8 */,
/* 9 */
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/Transition.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ 1));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ 0));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ 6));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ 10);

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ 11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  false ? undefined : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),
/* 10 */
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./node_modules/react-transition-group/Transition.js (referenced with cjs require), ./node_modules/react-transition-group/TransitionGroup.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),
/* 11 */
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/PropTypes.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ 1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  false ? undefined : null;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  false ? undefined : null;
exports.classNamesShape = classNamesShape;

/***/ }),
/* 12 */
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/TransitionGroup.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ 1));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ 0));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ 10);

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ 23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  false ? undefined : {};
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 13 */
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 14);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 14 */
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 15 */
/*!*****************************************************************!*\
  !*** ./src/components/editor/components/EditorModalFooter.scss ***!
  \*****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3);
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./EditorModalFooter.scss */ 16);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 16 */
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/components/editor/components/EditorModalFooter.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#sign-msg-option{color:#757575}.collapsed[data-target=\"#sign-msg-option\"] span.icon:before{content:\"\\e900\"}[data-target=\"#sign-msg-option\"]:not(.collapsed) span.icon:before{content:\"\\e903\"}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 17 */
/*!**************************************************************!*\
  !*** ./node_modules/react-transition-group/CSSTransition.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ 1));

var _addClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/addClass */ 18));

var _removeClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/removeClass */ 21));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ 0));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ 9));

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ 11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity: 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  false ? undefined : {};
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 18 */
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/addClass.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 19);

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ 20));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),
/* 19 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 20 */
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/hasClass.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),
/* 21 */
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/class/removeClass.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),
/* 22 */
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/ReplaceTransition.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ 1));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ 0));

var _reactDom = __webpack_require__(/*! react-dom */ 6);

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ 12));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  false ? undefined : {};
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 23 */
/*!*******************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/ChildMapping.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(/*! react */ 0);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),
/* 24 */
/*!**************************************************************!*\
  !*** ./src/components/editor/components/RecipientInput.scss ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3);
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./RecipientInput.scss */ 25);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 25 */
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/components/editor/components/RecipientInput.scss ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".recipients-input tags-input .tags .tag-item{font-family:CeraPro,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-weight:500;background-color:#fce0e9;border-color:#f9ccda;-webkit-transition:background-color 0.3s, border-color 0.3s;transition:background-color 0.3s, border-color 0.3s}.recipients-input tags-input .tags .remove-button{color:inherit}.recipients-input tags-input .tags .tag-primary{color:#e30048;background-color:#fce0e9;border-color:#f9ccda}.recipients-input tags-input .tags .tag-primary hr{border-top-color:#f6b5c9}.recipients-input tags-input .tags .tag-primary .alert-link{color:#b00038}.recipients-input tags-input .tags .tag-primary .remove-button{color:#e30048}.recipients-input tags-input .tags .tag-secondary{color:#f7f7f7;background-color:#fefefe;border-color:#fdfdfd}.recipients-input tags-input .tags .tag-secondary hr{border-top-color:#f0f0f0}.recipients-input tags-input .tags .tag-secondary .alert-link{color:#dedede}.recipients-input tags-input .tags .tag-secondary .remove-button{color:#f7f7f7}.recipients-input tags-input .tags .tag-success{color:#2db37a;background-color:#e6f6ef;border-color:#d5f0e4}.recipients-input tags-input .tags .tag-success hr{border-top-color:#c2e9d8}.recipients-input tags-input .tags .tag-success .alert-link{color:#238a5e}.recipients-input tags-input .tags .tag-success .remove-button{color:#2db37a}.recipients-input tags-input .tags .tag-info{color:#699496;background-color:#edf2f2;border-color:#e1eaea}.recipients-input tags-input .tags .tag-info hr{border-top-color:#d2e0e0}.recipients-input tags-input .tags .tag-info .alert-link{color:#547678}.recipients-input tags-input .tags .tag-info .remove-button{color:#699496}.recipients-input tags-input .tags .tag-warning{color:#e38200;background-color:#fcf0e0;border-color:#f9e6cc}.recipients-input tags-input .tags .tag-warning hr{border-top-color:#f6dbb5}.recipients-input tags-input .tags .tag-warning .alert-link{color:#b06500}.recipients-input tags-input .tags .tag-warning .remove-button{color:#e38200}.recipients-input tags-input .tags .tag-danger{color:#e30048;background-color:#fce0e9;border-color:#f9ccda}.recipients-input tags-input .tags .tag-danger hr{border-top-color:#f6b5c9}.recipients-input tags-input .tags .tag-danger .alert-link{color:#b00038}.recipients-input tags-input .tags .tag-danger .remove-button{color:#e30048}.recipients-input tags-input .tags .tag-light{color:#fafafa;background-color:#fefefe;border-color:#fefefe}.recipients-input tags-input .tags .tag-light hr{border-top-color:#f1f1f1}.recipients-input tags-input .tags .tag-light .alert-link{color:#e1e1e1}.recipients-input tags-input .tags .tag-light .remove-button{color:#fafafa}.recipients-input tags-input .tags .tag-dark{color:#949494;background-color:#f2f2f2;border-color:#eaeaea}.recipients-input tags-input .tags .tag-dark hr{border-top-color:#ddd}.recipients-input tags-input .tags .tag-dark .alert-link{color:#7b7b7b}.recipients-input tags-input .tags .tag-dark .remove-button{color:#949494}.recipients-input tags-input .tags.focused{background-color:#fff;border-color:#b4cacb;box-shadow:0 0 0 .2rem rgba(105,148,150,0.25)}.recipients-input tags-input .tags .tag-item:before{font-family:'MailvelopeIcons' !important;speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.recipients-input tags-input .tags .tag-success:before{content:\"\\e90f \\00a0\"}.recipients-input tags-input .tags .tag-danger:before{content:\"\\e909 \\00a0\"}.recipients-input tags-input.ng-invalid .tags,.recipients-input.has-error tags-input .tags{border-color:#e30048;box-shadow:none}.recipients-input tags-input.ng-invalid .tags.focused,.recipients-input.has-error tags-input .tags.focused{border-color:#e30048;box-shadow:0 0 0 .2rem rgba(227,0,72,0.25)}.recipients-input tags-input .tags .input{font-family:CeraPro,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";width:auto !important}.recipients-input .alert{margin:10px 0 5px}.recipients-input tags-input .tags{-webkit-transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 26 */
/*!********************************************!*\
  !*** ./src/components/util/SecurityBG.css ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3);
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./SecurityBG.css */ 27);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 27 */
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/util/SecurityBG.css ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".securityBG {\n  position: absolute;\n  width: 100%;\n  min-height: 100%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 28 */
/*!********************************************!*\
  !*** ./src/components/util/FilePanel.scss ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3);
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./FilePanel.scss */ 29);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 29 */
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/components/util/FilePanel.scss ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".file-panel .file-element{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;padding:0.45rem 0.5rem;margin-bottom:0.5rem;background-color:#fff;box-shadow:0 0 4px 0 rgba(64,64,64,0.15),0 0 1px 0 rgba(64,64,64,0.15);border-radius:.25rem;margin-right:0.375rem;font-size:.76562rem}.file-panel .file-element .file-header{display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;cursor:default;line-height:1}.file-panel .file-element .file-header>img{margin-right:-0.875rem;z-index:1}.file-panel .file-element .file-header>img+.file-extension{padding-left:1.375rem}.file-panel .file-element .file-header .file-extension{display:inline-block;font-weight:500;border:solid 1px #f0f0f0;border-radius:4px;background-color:#f7f7f7;padding:0.3rem 0.5rem;text-transform:uppercase}.file-panel .file-element .file-header .file-name{font-family:CeraRoundPro,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";text-decoration:none;white-space:nowrap;display:inline-block;margin:0 0.5rem}.file-panel .file-element .file-header .icon{font-size:.875rem;color:#757575;cursor:pointer}.file-panel .file-element a.file-header{color:inherit;text-decoration:none;cursor:pointer}.file-panel .file-element textarea{background-color:#fff;margin-top:0.45rem;width:100%;resize:none}@media (min-width: 576px){.file-panel .file-element textarea{min-width:405px}}@media (min-width: 768px){.file-panel .file-element textarea{min-width:585px}}@media (min-width: 992px){.file-panel .file-element textarea{min-width:825px}}@media (min-width: 1200px){.file-panel .file-element textarea{min-width:1005px}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 30 */
/*!*********************************************!*\
  !*** ./src/components/util/FileUpload.scss ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3);
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./FileUpload.scss */ 31);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 31 */
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/components/util/FileUpload.scss ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fileUpload{position:relative}.fileUpload .area{background-color:rgba(247,247,247,0.75);border:2px dashed #dbdbdb;padding:0.75rem}.fileUpload .overlay{position:absolute;top:0;width:100%;height:100%;visibility:hidden;border:2px dashed #949494;background-color:rgba(247,247,247,0.9);opacity:0;-webkit-transition:visibility 0.3s 0s, opacity 0.3s ease-out;transition:visibility 0.3s 0s, opacity 0.3s ease-out}.fileUpload .overlay.active{visibility:visible;opacity:1}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 32 */
/*!******************************************!*\
  !*** ./src/components/util/Spinner.scss ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3);
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./Spinner.scss */ 33);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 33 */
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/components/util/Spinner.scss ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".m-spinner-fullscreen{position:absolute;z-index:1049;height:2em;width:2em;overflow:visible;margin:auto;top:0;left:0;bottom:0;right:0}.m-spinner-fullscreen:before{content:'';display:block;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(255,255,255,0.5)}.m-spinner-inline{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;margin:60px auto 60px}.m-spinner-fullscreen .symbol,.m-spinner-inline .symbol{position:relative;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;width:40px;height:40px}.m-spinner-fullscreen .symbol>div,.m-spinner-inline .symbol>div{width:100%;height:100%;border-radius:50%;background-color:#e30048;opacity:0.6;position:absolute;top:0;left:0;-webkit-animation:bouncedelay 2.0s infinite ease-in-out;animation:bouncedelay 2.0s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.m-spinner-fullscreen .symbol .bounce2,.m-spinner-inline .symbol .bounce2{-webkit-animation-delay:-1.0s;animation-delay:-1.0s}@-webkit-keyframes bouncedelay{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes bouncedelay{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 34 */
/*!********************************************!*\
  !*** ./src/components/util/Terminate.scss ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3);
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./Terminate.scss */ 35);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 35 */
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/components/util/Terminate.scss ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".terminate{position:fixed;z-index:1050}.terminate .backdrop{display:block;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.8)}.terminate>.symbol{font-size:8em;color:#fff;opacity:0.85;width:100%;height:100%;position:fixed;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 36 */
/*!*******************************************!*\
  !*** ./src/components/editor/editor.scss ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3);
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./editor.scss */ 37);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 37 */
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/components/editor/editor.scss ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".editor{color:#757575}.editor .modal{padding:2.75rem;z-index:1035}.editor.embedded .modal{padding:2rem}.editor.embedded .modal label{display:none}.editor.embedded .modal .modal-body{padding:1.25rem}.editor .modal-content{background-color:#fff}.editor .modal-content .modal-body{padding:1.5rem 1.5rem 1.25rem 1.5rem}.editor .editor-body .plain-text iframe{width:100%;height:100%;margin-bottom:0;color:black;resize:none}.editor .editor-popup-pwd-dialog{width:580px;height:480px;position:absolute;left:50%;top:50%;-webkit-transform:translate3d(-50%, -50%, 0);transform:translate3d(-50%, -50%, 0);z-index:1050}.editor .waiting-modal .modal-dialog{width:500px;margin:50px auto}.editor .toastWrapper{z-index:1051;position:fixed;top:5.75rem;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.editor .m-spinner-fullscreen{z-index:1045}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 38 */
/*!**********************************************!*\
  !*** ./src/components/editor/editorRoot.css ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3);
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./editorRoot.css */ 39);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 39 */
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/editor/editorRoot.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\nhtml, body, body > div {\n  height: 100%;\n  background-color: rgba(0,0,0,0);\n}\n\nbody {\n  overflow: hidden;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 40 */
/*!**********************************************************!*\
  !*** ./src/components/editor/editorRoot.js + 30 modules ***!
  \**********************************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/classnames/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-transition-group/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./src/res/common.json (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "React" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "ReactDOM" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(6);
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_);

// CONCATENATED MODULE: ./src/lib/l10n.js
let map = {};
function register(ids) {
  for (const id of ids) {
    map[id] = true;
  }
}
function mapToLocal() {
  map = getMessages(Object.keys(map));
}
const get = chrome.i18n.getMessage;

function getMessages(ids) {
  const result = {};

  for (const id of ids) {
    result[id] = chrome.i18n.getMessage(id);
  }

  return result;
}

function set(ids) {
  register(ids);
  mapToLocal();
}

function getLanguage() {
  return chrome.i18n.getUILanguage();
}

function localizeDateTime(date, options = {}) {
  return date.toLocaleDateString(getLanguage(), options);
}
// CONCATENATED MODULE: ./src/lib/constants.js
/* constants */
// min height for large frame
const LARGE_FRAME = 600; // frame constants

const FRAME_STATUS = 'mveloFrame'; // frame status

const FRAME_ATTACHED = 'att';
const FRAME_DETACHED = 'det'; // marker for dynamically created iframes

const DYN_IFRAME = 'mveloDyn'; // armor header type

const PGP_MESSAGE = 'msg';
const PGP_SIGNATURE = 'sig';
const PGP_PUBLIC_KEY = 'pub';
const PGP_PRIVATE_KEY = 'priv'; // key status

const PGP_KEYSTATUS_VALID = 3; // display decrypted message

const DISPLAY_INLINE = 'inline';
const DISPLAY_POPUP = 'popup'; // editor type

const PLAIN_TEXT = 'plain'; // keyring

const KEYRING_DELIMITER = '|#|';
const MAIN_KEYRING_ID = `localhost${KEYRING_DELIMITER}mailvelope`;
const GNUPG_KEYRING_ID = `localhost${KEYRING_DELIMITER}gnupg`; // colors for secure background

const SECURE_COLORS = ['#e9e9e9', '#c0c0c0', '#808080', '#ffce1e', '#ff0000', '#85154a', '#6f2b8b', '#b3d1e3', '#315bab', '#1c449b', '#4c759c', '#1e8e9f', '#93b536']; // 50 MB file size limit

const MAX_FILE_UPLOAD_SIZE = 50 * 1024 * 1024; // stable id if app runs in top frame

const APP_TOP_FRAME_ID = 'apptopframeid';
// EXTERNAL MODULE: ./src/res/common.json
var common = __webpack_require__(7);

// CONCATENATED MODULE: ./src/lib/svg-file-parser.js
async function parseSVG(url) {
  const extUrl = chrome.runtime.getURL(url);
  const svg = await loadFile(extUrl);
  const parser = new DOMParser();
  return parser.parseFromString(svg, 'image/svg+xml');
}

async function loadFile(url) {
  const response = await fetch(url);
  const data = await response.text();

  if (response.ok) {
    return data;
  } else {
    return Promise.reject({
      status: response.status,
      statusText: response.statusText,
      err: data
    });
  }
}
// CONCATENATED MODULE: ./src/lib/util.js
/**
 * Copyright (C) 2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */



class MvError extends Error {
  constructor(msg, code = 'INTERNAL_ERROR') {
    super(msg);
    this.code = code;
  }

}
function sortAndDeDup(unordered, compFn) {
  const result = [];
  const sorted = unordered.sort(compFn); // remove duplicates

  for (let i = 0; i < sorted.length; i++) {
    if (i === 0 || compFn && compFn(sorted[i - 1], sorted[i]) !== 0 || !compFn && sorted[i - 1] !== sorted[i]) {
      result.push(sorted[i]);
    }
  }

  return result;
}
/**
 * Remove duplicates from list, by default compares items as strings
 * @param  {Array} list - the list of items with duplicates
 * @param {Function} [compFn] compare function that gets element that should be added to result list plus the current result list
 *                            must return true if element should be added to the result list
 * @return {Array} - the list of items without duplicates
 */

function deDup(list = [], compFn = (element, array) => array.indexOf(element) === -1) {
  const result = [];

  for (const item of list) {
    if (compFn(item, result)) {
      result.push(item);
    }
  }

  return result;
}
async function filterAsync(array, asyncFilterFn) {
  const promises = array.map(async item => (await asyncFilterFn(item)) && item);
  const result = await Promise.all(promises);
  return result.filter(item => item);
}
async function someAsync(array, asyncSomeFn) {
  const promises = array.map(asyncSomeFn);
  const result = await Promise.all(promises);
  return result.some(item => item);
}
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} // random hash generator

function getHash() {
  let result = '';
  const buf = new Uint16Array(6);
  window.crypto.getRandomValues(buf);

  for (let i = 0; i < buf.length; i++) {
    result += buf[i].toString(16);
  }

  return result;
}
function encodeHTML(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/\//g, '&#x2F;');
}

function decodeHTML(html) {
  return String(html).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "\'").replace(/&#x2F;/g, '\/');
}

function parseHTML(html) {
  const htmlDoc = new DOMParser().parseFromString(html, 'text/html');
  return htmlDoc.body.firstChild;
}

function decodeQuotedPrint(armored) {
  return armored.replace(/=3D=3D\s*$/m, '==').replace(/=3D\s*$/m, '=').replace(/=3D(\S{4})\s*$/m, '=$1');
}
/**
 * Encode UTF-8 string
 * @param  {String} str
 * @return {Uint8Array}
 */


function encodeUtf8(str) {
  const encoder = new TextEncoder('utf-8');
  return encoder.encode(str);
}
/**
 * Normalize PGP armored message
 * @param  {String} msg
 * @param  {Regex} typeRegex - filter message with this Regex
 * @return {String}
 */

function normalizeArmored(msg, typeRegex) {
  // filtering to get well defined PGP message format
  msg = msg.replace(/\r\n/g, '\n'); // unify new line characters

  msg = msg.replace(/\n\s+/g, '\n'); // compress sequence of whitespace and new line characters to one new line

  msg = msg.replace(/[^\S\r\n]/g, ' '); // unify white space characters (all \s without \r and \n)

  if (typeRegex) {
    msg = msg.match(typeRegex);

    if (msg) {
      msg = msg[0];
    } else {
      throw new MvError('Could not extract valid PGP message', 'INVALID_ARMORED_BLOCK');
    }
  }

  msg = msg.replace(/^(\s?>)+/gm, ''); // remove quotation

  msg = msg.replace(/^\s+/gm, ''); // remove leading whitespace

  msg = msg.replace(/:.*\n(?!.*:)/, '$&\n'); // insert new line after last armor header

  msg = msg.replace(/-----\n(?!.*:)/, '$&\n'); // insert new line if no header

  msg = decodeQuotedPrint(msg);
  return msg;
}
function html2text(html) {
  html = html.replace(/\n/g, ' '); // replace new line with space

  html = html.replace(/(<br>)/g, '\n'); // replace <br> with new line

  html = html.replace(/<\/(blockquote|div|dl|dt|dd|form|h1|h2|h3|h4|h5|h6|hr|ol|p|pre|table|tr|td|ul|li|section|header|footer)>/g, '\n'); // replace block closing tags </..> with new line

  html = html.replace(/<(.+?)>/g, ''); // remove tags

  html = html.replace(/&nbsp;/g, ' '); // replace non-breaking space with whitespace

  html = html.replace(/\n{3,}/g, '\n\n'); // compress new line

  return decodeHTML(html);
}
/**
 * This function will return the byte size of any UTF-8 string you pass to it.
 * @param {string} str
 * @returns {number}
 */

function byteCount(str) {
  return encodeURI(str).split(/%..|./).length - 1;
}
function ab2str(buf) {
  const ab = new Uint8Array(buf);
  return Uint8Array2str(ab);
}
function Uint8Array2str(ab) {
  let str = '';
  const CHUNK_SIZE = Math.pow(2, 16);
  let offset;
  let len;
  let subab;

  for (offset = 0; offset < ab.length; offset += CHUNK_SIZE) {
    len = Math.min(CHUNK_SIZE, ab.length - offset);
    subab = ab.subarray(offset, offset + len);
    str += String.fromCharCode.apply(null, subab);
  }

  return str;
}
function str2ab(str) {
  const bufView = str2Uint8Array(str);
  return bufView.buffer;
}
function str2Uint8Array(str) {
  const bufView = new Uint8Array(str.length);

  for (let i = 0; i < str.length; i++) {
    bufView[i] = str.charCodeAt(i);
  }

  return bufView;
}
function str2bool(value) {
  if (value && typeof value === 'string') {
    if (value.toLowerCase() === 'true') {
      return true;
    }

    if (value.toLowerCase() === 'false') {
      return false;
    }
  }

  return value;
}
function base64EncodeUrl(str) {
  return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
}
function base64DecodeUrl(str) {
  str = `${str}===`.slice(0, str.length + str.length % 4);
  return str.replace(/-/g, '+').replace(/_/g, '/');
}
function dataURL2str(dataURL) {
  const base64 = dataURL2base64(dataURL);
  return window.atob(base64);
}
function dataURL2base64(dataURL) {
  return dataURL.split(';base64,')[1];
}
function generateSecurityBackground({
  width,
  height,
  scaling = 1,
  angle = 0,
  colorId = 0
}) {
  const iconWidth = width * scaling;
  const iconHeight = height * scaling;
  const iconColor = SECURE_COLORS[colorId];
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" id="secBgnd" version="1.1" width="${iconWidth}px" height="${iconHeight}px" viewBox="0 0 27 27"><path transform="rotate(${angle} 14 14)" style="fill: ${iconColor};" d="m 13.963649,25.901754 c -4.6900005,0 -8.5000005,-3.78 -8.5000005,-8.44 0,-1.64 0.47,-3.17 1.29,-4.47 V 9.0417546 c 0,-3.9399992 3.23,-7.1499992 7.2000005,-7.1499992 3.97,0 7.2,3.21 7.2,7.1499992 v 3.9499994 c 0.82,1.3 1.3,2.83 1.3,4.48 0,4.65 -3.8,8.43 -8.49,8.43 z m -1.35,-7.99 v 3.33 h 0 c 0,0.02 0,0.03 0,0.05 0,0.74 0.61,1.34 1.35,1.34 0.75,0 1.35,-0.6 1.35,-1.34 0,-0.02 0,-0.03 0,-0.05 h 0 v -3.33 c 0.63,-0.43 1.04,-1.15 1.04,-1.97 0,-1.32 -1.07,-2.38 -2.4,-2.38 -1.32,0 -2.4,1.07 -2.4,2.38 0.01,0.82 0.43,1.54 1.06,1.97 z m 6.29,-8.8699994 c 0,-2.7099992 -2.22,-4.9099992 -4.95,-4.9099992 -2.73,0 -4.9500005,2.2 -4.9500005,4.9099992 V 10.611754 C 10.393649,9.6217544 12.103649,9.0317546 13.953649,9.0317546 c 1.85,0 3.55,0.5899998 4.94,1.5799994 l 0.01,-1.5699994 z" /></svg>`;
}
async function getSecurityBackground(port) {
  const background = await port.send('get-security-background');
  const image = background.bgIcon ? (await generateSecurityBGSVG(background)).outerHTML : generateSecurityBackground(background);
  const color = background.bgColor ? common["a" /* securityColors */][background.bgColor].bg : background.color;
  return {
    image: `url(data:image/svg+xml;base64,${btoa(image)})`,
    color
  };
}

async function generateSecurityBGSVG({
  bgIcon,
  bgColor
}) {
  const svgTemplateUrl = 'img/security/template.svg';
  const {
    documentElement: svgTemplate
  } = await parseSVG(svgTemplateUrl);
  const tileWidth = 640;
  svgTemplate.setAttribute('width', tileWidth);
  svgTemplate.getElementById('template').setAttribute('fill', common["a" /* securityColors */][bgColor].icon);
  const svgBgIconUrl = `img/security/${bgIcon}.svg`;
  const {
    documentElement: svgBgIcon
  } = await parseSVG(svgBgIconUrl);
  const paths = svgBgIcon.getElementsByTagName('path');

  for (const path of paths) {
    path.style.fill = common["a" /* securityColors */][bgColor].icon;
  }

  const placeholders = svgTemplate.querySelectorAll('.icon');

  for (const placeholderElem of placeholders) {
    const gElem = placeholderElem.querySelector('g:last-child');
    gElem.firstElementChild.remove();
    const clonedSvgBgIcon = svgBgIcon.cloneNode(true);

    while (clonedSvgBgIcon.childNodes.length > 0) {
      gElem.appendChild(clonedSvgBgIcon.childNodes[0]);
    }
  }

  return svgTemplate;
}

function matchPattern2RegEx(matchPattern) {
  return new RegExp(`^${matchPattern2RegExString(matchPattern)}$`);
}
function matchPattern2RegExString(matchPattern) {
  return matchPattern.replace(/\./g, '\\.').replace(/\*\\\./, '(\\w+(-\\w+)*\\.)*');
}
function mapError(error = {}) {
  return {
    message: error.message || 'Unexpected error.',
    code: error.code || 'INTERNAL_ERROR'
  };
}
class PromiseQueue {
  constructor() {
    this.queue = [];
  }

  push(thisArg, method, args) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        resolve,
        reject,
        thisArg,
        method,
        args
      });

      if (this.queue.length === 1) {
        this._next();
      }
    });
  }

  _next() {
    if (this.queue.length === 0) {
      return;
    }

    const nextEntry = this.queue[0];
    setTimeout(() => {
      nextEntry.thisArg[nextEntry.method].apply(nextEntry.thisArg, nextEntry.args).then(result => {
        nextEntry.resolve(result);
      }).catch(error => {
        nextEntry.reject(error);
      }).then(() => {
        this.queue.shift();

        this._next();
      });
    }, 0);
  }

}
/**
 * Waterfall of async processes
 * @param  {Function} process - has to return Promise, result as array
 * @param  {Array} list - each item is processed
 * @return {Promise} - resolved when all processes finished with end result as array
 */

/* eslint-disable arrow-body-style */

function sequential(process, list) {
  return list.reduce((acc, item) => {
    return acc.then(result => {
      return process(item).then(processResult => {
        result.push(...processResult);
        return result;
      });
    });
  }, Promise.resolve([]));
}
/* eslint-enable arrow-body-style */

/**
 * Validate an email address.
 * @param  {String} address   The email address to validate
 * @return {Boolean}          True if valid, false if not
 */

function checkEmail(address) {
  const pattern = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;
  return pattern.test(address);
}
/**
 * Normalize parameter to Array. falsy -> []
 * @param  {Any}  param
 * @return {Array}
 */

function toArray(param) {
  if (!param) {
    return [];
  }

  if (!Array.isArray(param)) {
    return [param];
  }

  return param;
}
/**
 * Validate an url
 * @param  {String} url       The URL to validate
 * @return {Boolean}          True if valid, false if not
 */

function checkUrl(url) {
  const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi;
  return pattern.test(url);
}
function addDocumentTitle(text) {
  const title = document.createElement('title');
  title.appendChild(document.createTextNode(text));
  document.head.appendChild(title);
}
function formatFpr(fpr) {
  return fpr.toUpperCase().match(/.{1,4}/g).join(' ');
}
function isVisible(element) {
  return Boolean(element && (element.offsetWidth || element.offsetHeight || element.getClientRects().length));
}
function firstParent(element, selector) {
  while (element) {
    if (element.nodeType === Node.ELEMENT_NODE && element.matches(selector)) {
      return element;
    }

    element = element.parentNode;
  }
}
function isWebEx() {
  return typeof browser !== 'undefined';
}
function isCRX() {
  return typeof browser === 'undefined' && typeof chrome !== 'undefined';
}
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread.js

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(2);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react-transition-group/index.js
var react_transition_group = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/reactstrap/es/utils.js
 // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443

function getScrollbarWidth() {
  var scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? padding + "px" : null;
}
function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
  var style = window.getComputedStyle(document.body, null);
  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
}
function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}
var globalCssModule;
function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}
function mapToCssModules(className, cssModule) {
  if (className === void 0) {
    className = '';
  }

  if (cssModule === void 0) {
    cssModule = globalCssModule;
  }

  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}
/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */

function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
/**
 * Returns a filtered copy of an object with only the specified keys.
 */

function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key;
  var result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }

  return result;
}
var warned = {};
function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }

    warned[message] = true;
  }
}
function deprecated(propType, explanation) {
  return function validate(props, propName, componentName) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce("\"" + propName + "\" property of \"" + componentName + "\" has been deprecated.\n" + explanation);
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };
} // Shim Element if needed (e.g. in Node environment)

var Element = typeof window === 'object' && window.Element || function () {};

function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}
var targetPropType = prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.func, DOMElement, prop_types_default.a.shape({
  current: prop_types_default.a.any
})]);
var tagPropType = prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string, prop_types_default.a.shape({
  $$typeof: prop_types_default.a.symbol,
  render: prop_types_default.a.func
}), prop_types_default.a.arrayOf(prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string, prop_types_default.a.shape({
  $$typeof: prop_types_default.a.symbol,
  render: prop_types_default.a.func
})]))]);
/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

var TransitionTimeouts = {
  Fade: 150,
  // $transition-fade
  Collapse: 350,
  // $transition-collapse
  Modal: 300,
  // $modal-transition
  Carousel: 600 // $carousel-transition

}; // Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.

var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
var TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited'
};
var keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function isReactRefObj(target) {
  if (target && typeof target === 'object') {
    return 'current' in target;
  }

  return false;
}

function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  return Object.prototype.toString.call(value);
}

function toNumber(value) {
  var type = typeof value;
  var NAN = 0 / 0;

  if (type === 'number') {
    return value;
  }

  if (type === 'symbol' || type === 'object' && getTag(value) === '[object Symbol]') {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf === 'function' ? value.valueOf() : value;
    value = isObject(other) ? "" + other : other;
  }

  if (type !== 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(/^\s+|\s+$/g, '');
  var isBinary = /^0b[01]+$/i.test(value);
  return isBinary || /^0o[0-7]+$/i.test(value) ? parseInt(value.slice(2), isBinary ? 2 : 8) : /^[-+]0x[0-9a-f]+$/i.test(value) ? NAN : +value;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }

  var tag = getTag(value);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object Proxy]';
}
function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }

  if (isFunction(target)) {
    return target();
  }

  if (typeof target === 'string' && canUseDOM) {
    var selection = document.querySelectorAll(target);

    if (!selection.length) {
      selection = document.querySelectorAll("#" + target);
    }

    if (!selection.length) {
      throw new Error("The target '" + target + "' could not be identified in the dom, tip: check spelling");
    }

    return selection;
  }

  return target;
}
function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }

  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
}
function getTarget(target, allElements) {
  var els = findDOMElements(target);

  if (allElements) {
    if (isArrayOrNodeList(els)) {
      return els;
    }

    if (els === null) {
      return [];
    }

    return [els];
  } else {
    if (isArrayOrNodeList(els)) {
      return els[0];
    }

    return els;
  }
}
var defaultToggleEvents = ['touchstart', 'click'];
function addMultipleEventListeners(_els, handler, _events, useCapture) {
  var els = _els;

  if (!isArrayOrNodeList(els)) {
    els = [els];
  }

  var events = _events;

  if (typeof events === 'string') {
    events = events.split(/\s+/);
  }

  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
    throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");
  }

  Array.prototype.forEach.call(events, function (event) {
    Array.prototype.forEach.call(els, function (el) {
      el.addEventListener(event, handler, useCapture);
    });
  });
  return function removeEvents() {
    Array.prototype.forEach.call(events, function (event) {
      Array.prototype.forEach.call(els, function (el) {
        el.removeEventListener(event, handler, useCapture);
      });
    });
  };
}
var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];
// CONCATENATED MODULE: ./node_modules/reactstrap/es/Fade.js









var propTypes = _objectSpread({}, react_transition_group["Transition"].propTypes, {
  children: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
  tag: tagPropType,
  baseClass: prop_types_default.a.string,
  baseClassActive: prop_types_default.a.string,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.string, prop_types_default.a.func])
});

var defaultProps = _objectSpread({}, react_transition_group["Transition"].defaultProps, {
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true
});

function Fade(props) {
  var Tag = props.tag,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      innerRef = props.innerRef,
      otherProps = _objectWithoutPropertiesLoose(props, ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"]);

  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
  var childProps = omit(otherProps, TransitionPropTypeKeys);
  return external_React_default.a.createElement(react_transition_group["Transition"], transitionProps, function (status) {
    var isActive = status === 'entered';
    var classes = mapToCssModules(classnames_default()(className, baseClass, isActive && baseClassActive), cssModule);
    return external_React_default.a.createElement(Tag, _extends({
      className: classes
    }, childProps, {
      ref: innerRef
    }), children);
  });
}

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;
/* harmony default export */ var es_Fade = (Fade);
// CONCATENATED MODULE: ./src/lib/EventHandler.js
/**
 * Copyright (C) 2016-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */

/**
 * Event handler is an abstraction on top of Port to support methods 'on', 'emit' and 'send'.
 * @param {Port} port - port object received from runtime.connect()
 * @param {Map} handlers - handler map of parent event handler
 */

class EventHandler_EventHandler {
  constructor(port, handlers) {
    if (port) {
      this.initPort(port);
    }

    this._handlers = handlers || new Map();
    this._reply = null;
    this._replyCount = 0;
    this._handlerObject = null;
  }
  /**
   * Open port to background script
   * @param  {String} sender identifier of sender (type + id)
   * @return {EventHandler}        initialized EventHandler
   */


  static connect(sender, handlerObject) {
    const eventHandler = new EventHandler_EventHandler(chrome.runtime.connect({
      name: sender
    }));
    eventHandler._handlerObject = handlerObject;
    return eventHandler;
  }

  initPort(port) {
    this._port = port;

    this._port.onMessage.addListener(this.handlePortMessage.bind(this));
  }
  /**
   * Disconnect port
   */


  disconnect() {
    if (this._port) {
      this._port.disconnect();
    }
  }

  get onDisconnect() {
    const obj = {};

    obj.addListener = listener => this._port.onDisconnect.addListener(listener);

    return obj;
  }
  /**
   * Generic port message handler that can be attached via port.onMessage.addListener().
   * Once set up, events can be handled with on('event', function(options) {})
   * @param  {String} options.event   The event descriptor
   * @param  {Object} options         Contains message attributes and data
   */


  handlePortMessage(options = {}) {
    if (this._handlers.has(options.event)) {
      const handler = this._handlers.get(options.event);

      if (options._reply) {
        // sender expects reply
        Promise.resolve().then(() => handler.call(this, options)).then(result => this.emit('_reply', {
          result,
          _reply: options._reply
        })).catch(error => this.emit('_reply', {
          error: mapError(error),
          _reply: options._reply
        }));
      } else {
        // normal one way communication
        handler.call(this, options);
      }
    } else if (options.event === '_reply') {
      // we have received a reply
      const replyHandler = this._reply.get(options._reply);

      this._reply.delete(options._reply);

      if (options.error) {
        replyHandler.reject(options.error);
      } else {
        replyHandler.resolve(options.result);
      }
    } else {
      console.log('Unknown event', options);
    }
  }
  /**
   * The new event handling style to asign a function to an event.
   * @param  {String} event       The event descriptor
   * @param  {Function} handler   The event handler
   */


  on(event, handler) {
    if (!event || typeof event !== 'string' || event === '_reply' || typeof handler !== 'function') {
      throw new Error('Invalid event handler!');
    }

    this._handlers.set(event, handler.bind(this._handlerObject || this));
  }
  /**
   * Helper to emit events via postMessage using a port.
   * @param  {String} event     The event descriptor
   * @param  {Object} options   (optional) Data to be sent in the event
   */


  emit(event, options = {}) {
    if (!event || typeof event !== 'string') {
      throw new Error('Invalid event!');
    }

    options.event = event;

    this._port.postMessage(options);
  }
  /**
   * Like emit but receiver can send response
   * @param  {String} event     The event descriptor
   * @param  {Object} options   (optional) Data to be sent in the event
   * @param  {Object} port      (optional) The port to be used. If
   *                            not specified, the main port is used.
   * @return {Promise}
   */


  send(event, options = {}) {
    return new Promise((resolve, reject) => {
      if (!event || typeof event !== 'string') {
        return reject(new Error('Invalid event!'));
      }

      if (!this._reply) {
        this._reply = new Map();
      }

      options.event = event;
      options._reply = ++this._replyCount;

      this._reply.set(options._reply, {
        resolve,
        reject
      });

      this._port.postMessage(options);
    });
  }

}
// CONCATENATED MODULE: ./src/components/editor/components/PlainText.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */



class PlainText_PlainText extends external_React_default.a.PureComponent {
  constructor(props) {
    super(props);
    this.sandbox = null;
    this.textarea = null;
  }

  componentDidUpdate(prevProps) {
    // if default value is set after rendering, set manually
    if (this.textarea && prevProps.defaultValue !== this.props.defaultValue) {
      this.textarea.value = this.props.defaultValue;
      this.textarea.selectionStart = 0;
      this.textarea.selectionEnd = 0;
    }
  }

  getValue() {
    return this.textarea.value;
  }

  createPlainText() {
    const textarea = external_React_default.a.createElement("textarea", {
      defaultValue: this.props.defaultValue,
      className: "form-control",
      rows: 12,
      autoFocus: true,
      onChange: event => this.props.onChange(event.target.value),
      onBlur: this.props.onBlur,
      onMouseUp: this.props.onMouseUp,
      ref: node => this.textarea = node,
      style: {
        width: '100%',
        height: '100%',
        marginBottom: 0,
        color: 'black',
        resize: 'none',
        lineHeight: 1.5
      }
    });
    const sandboxDoc = this.sandbox.contentDocument;
    const content = sandboxDoc.querySelector('#root');
    external_ReactDOM_default.a.render(textarea, content);
    this.props.onLoad && this.props.onLoad();
  }

  render() {
    const sandboxContent = `
      <!DOCTYPE html>
      <html style="height: 100%">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <link rel="stylesheet" href="../../main.css">
        </head>
        <body style="overflow: hidden; margin: 0; height: 100%; background-color: transparent">
         <div id="root" style="height: 100%; padding: 0.2rem">
         </div>
        </body>
      </html>
    `;
    return external_React_default.a.createElement("iframe", {
      sandbox: "allow-same-origin allow-scripts",
      srcDoc: sandboxContent,
      frameBorder: 0,
      style: {
        display: 'block',
        height: '100%',
        overflowY: 'hidden'
      },
      ref: node => this.sandbox = node,
      onLoad: () => this.createPlainText()
    });
  }

}
PlainText_PlainText.propTypes = {
  defaultValue: prop_types_default.a.string,
  onChange: prop_types_default.a.func.isRequired,
  onBlur: prop_types_default.a.func,
  onMouseUp: prop_types_default.a.func,
  onLoad: prop_types_default.a.func
};
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
// CONCATENATED MODULE: ./node_modules/reactstrap/es/Collapse.js






var _transitionStatusToCl;







var Collapse_propTypes = _objectSpread({}, react_transition_group["Transition"].propTypes, {
  isOpen: prop_types_default.a.bool,
  children: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
  tag: tagPropType,
  className: prop_types_default.a.node,
  navbar: prop_types_default.a.bool,
  cssModule: prop_types_default.a.object,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string, prop_types_default.a.object])
});

var Collapse_defaultProps = _objectSpread({}, react_transition_group["Transition"].defaultProps, {
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: 'div',
  timeout: TransitionTimeouts.Collapse
});

var transitionStatusToClassHash = (_transitionStatusToCl = {}, _transitionStatusToCl[TransitionStatuses.ENTERING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.ENTERED] = 'collapse show', _transitionStatusToCl[TransitionStatuses.EXITING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.EXITED] = 'collapse', _transitionStatusToCl);

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || 'collapse';
}

function getHeight(node) {
  return node.scrollHeight;
}

var Collapse_Collapse =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Collapse, _Component);

  function Collapse(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      height: null
    };
    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
      _this[name] = _this[name].bind(_assertThisInitialized(_this));
    });
    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.onEntering = function onEntering(node, isAppearing) {
    this.setState({
      height: getHeight(node)
    });
    this.props.onEntering(node, isAppearing);
  };

  _proto.onEntered = function onEntered(node, isAppearing) {
    this.setState({
      height: null
    });
    this.props.onEntered(node, isAppearing);
  };

  _proto.onExit = function onExit(node) {
    this.setState({
      height: getHeight(node)
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting(node) {
    // getting this variable triggers a reflow
    var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars

    this.setState({
      height: 0
    });
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited(node) {
    this.setState({
      height: null
    });
    this.props.onExited(node);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        Tag = _this$props.tag,
        isOpen = _this$props.isOpen,
        className = _this$props.className,
        navbar = _this$props.navbar,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        innerRef = _this$props.innerRef,
        otherProps = _objectWithoutPropertiesLoose(_this$props, ["tag", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"]);

    var height = this.state.height;
    var transitionProps = pick(otherProps, TransitionPropTypeKeys);
    var childProps = omit(otherProps, TransitionPropTypeKeys);
    return external_React_default.a.createElement(react_transition_group["Transition"], _extends({}, transitionProps, {
      in: isOpen,
      onEntering: this.onEntering,
      onEntered: this.onEntered,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var collapseClass = getTransitionClass(status);
      var classes = mapToCssModules(classnames_default()(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
      var style = height === null ? null : {
        height: height
      };
      return external_React_default.a.createElement(Tag, _extends({}, childProps, {
        style: _objectSpread({}, childProps.style, {}, style),
        className: classes,
        ref: _this2.props.innerRef
      }), children);
    });
  };

  return Collapse;
}(external_React_["Component"]);

Collapse_Collapse.propTypes = Collapse_propTypes;
Collapse_Collapse.defaultProps = Collapse_defaultProps;
/* harmony default export */ var es_Collapse = (Collapse_Collapse);
// EXTERNAL MODULE: ./src/components/editor/components/EditorModalFooter.scss
var components_EditorModalFooter = __webpack_require__(15);

// CONCATENATED MODULE: ./src/components/editor/components/EditorModalFooter.js
/**
 * Copyright (C) 2016-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */





register(['form_cancel', 'form_submit', 'editor_sign_button', 'editor_encrypt_button', 'options_home', 'sign_dialog_header', 'general_default_key_no_sign_option', 'general_default_key_auto_sign', 'general_default_key_auto_sign_link']);
class EditorModalFooter_EditorModalFooter extends external_React_default.a.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: true
    };
  }

  toggle() {
    this.setState(state => ({
      collapse: !state.collapse
    }));
  }

  render() {
    return external_React_default.a.createElement("div", {
      className: "d-flex flex-column w-100"
    }, external_React_default.a.createElement(es_Collapse, {
      id: "sign-msg-option",
      isOpen: !this.state.collapse
    }, external_React_default.a.createElement("form", {
      className: "mb-3"
    }, external_React_default.a.createElement("div", {
      className: "row mb-2"
    }, external_React_default.a.createElement("label", {
      htmlFor: "signingKey",
      className: "col-sm-4 col-form-label"
    }, map.sign_dialog_header), external_React_default.a.createElement("div", {
      className: "col-sm-8"
    }, external_React_default.a.createElement("select", {
      id: "signingKey",
      className: "custom-select",
      value: this.props.signMsg ? this.props.signKey : 'nosign',
      onChange: event => this.props.onChangeSignKey(event.target.value)
    }, external_React_default.a.createElement("option", {
      value: "nosign"
    }, map.general_default_key_no_sign_option), this.props.privKeys.map(key => external_React_default.a.createElement("option", {
      value: key.fingerprint,
      key: key.fingerprint
    }, `${key.userId} - ${key.keyId}`))))), external_React_default.a.createElement("div", {
      className: "row"
    }, external_React_default.a.createElement("div", {
      className: "offset-sm-4 col-sm-8"
    }, external_React_default.a.createElement("span", null, map.general_default_key_auto_sign), " ", external_React_default.a.createElement("a", {
      role: "button",
      href: "#",
      onClick: this.props.onClickSignSetting
    }, map.general_default_key_auto_sign_link))))), external_React_default.a.createElement("div", {
      className: "d-flex align-items-center"
    }, external_React_default.a.createElement("button", {
      type: "button",
      onClick: this.toggle,
      "aria-controls": "sign-msg-option",
      "data-target": "#sign-msg-option",
      className: `btn btn-secondary mr-auto ${this.state.collapse ? 'collapsed' : ''}`
    }, external_React_default.a.createElement("span", {
      className: "icon",
      "aria-hidden": "true"
    }), "\xA0", external_React_default.a.createElement("span", null, map.options_home)), external_React_default.a.createElement("div", {
      className: "btn-bar"
    }, external_React_default.a.createElement("button", {
      type: "button",
      onClick: this.props.onSignOnly,
      className: "btn btn-secondary",
      disabled: !(this.props.signMsg && this.props.privKeys.length)
    }, external_React_default.a.createElement("span", null, map.editor_sign_button)), external_React_default.a.createElement("button", {
      type: "button",
      onClick: this.props.onCancel,
      className: "btn btn-secondary"
    }, external_React_default.a.createElement("span", null, map.form_cancel)), external_React_default.a.createElement("button", {
      type: "button",
      onClick: this.props.onOk,
      className: "btn btn-primary",
      disabled: this.props.encryptDisabled
    }, external_React_default.a.createElement("span", null, this.props.integration ? map.form_submit : map.editor_encrypt_button)))));
  }

}
EditorModalFooter_EditorModalFooter.propTypes = {
  onCancel: prop_types_default.a.func,
  // click on cancel button
  onSignOnly: prop_types_default.a.func,
  // click on sign only button
  onOk: prop_types_default.a.func,
  // click on encrypt button
  encryptDisabled: prop_types_default.a.bool,
  // encrypt action disabled
  signMsg: prop_types_default.a.bool,
  // sign message indicator
  signKey: prop_types_default.a.string,
  // sign key id
  privKeys: prop_types_default.a.array,
  // list of private keys for signing
  onChangeSignKey: prop_types_default.a.func,
  // user selects new key
  onClickSignSetting: prop_types_default.a.func,
  // click on navigation link
  integration: prop_types_default.a.bool // integration active indicator

};
// EXTERNAL MODULE: ./src/components/editor/components/RecipientInput.scss
var components_RecipientInput = __webpack_require__(24);

// CONCATENATED MODULE: ./src/components/editor/components/RecipientInput.js
/**
 * Copyright (C) 2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */

/**
 * Parts of the recipient input is based on Hoodiecrow (MIT License)
 * Copyright (c) 2014 Whiteout Networks GmbH.
 * See https://github.com/tanx/hoodiecrow/blob/master/LICENSE
 */





/* global angular */

register(['editor_key_not_found', 'editor_key_not_found_msg']);
/*
  reference to props of RecipientInput
  this structure is not immutable, recipients will be received as {email},
  but RecipientInputCtrl will modify recipients to {email, keys}
 */

let _props = null; // reference to angular controller

let rInputCtrl = null;
class RecipientInput_RecipientInput extends external_React_default.a.Component {
  constructor(props) {
    super(props);
    this.id = getHash(); // store props in global variable for Angular

    _props = props;
  }

  componentDidMount() {
    // load editor module dependencies
    angular.module('recipientInput', ['ngTagsInput']).config((tagsInputConfigProvider, $locationProvider) => {
      // activate monitoring of placeholder option
      tagsInputConfigProvider.setActiveInterpolation('tagsInput', {
        placeholder: true
      });
      $locationProvider.hashPrefix('');
    }); // attach ctrl to editor module

    angular.module('recipientInput').controller('RecipientInputCtrl', RecipientInputCtrl); // bootstrap angular

    angular.bootstrap(document.getElementById(this.id), ['recipientInput']);

    if (_props.recipients.length) {
      rInputCtrl.recipients = _props.recipients;
      rInputCtrl.update();
    }
  }

  shouldComponentUpdate(nextProps) {
    _props = nextProps;
    rInputCtrl.recipients = _props.recipients; // only update input controller if recipients or keys change

    if (this.props.recipients !== nextProps.recipients || this.props.keys !== nextProps.keys) {
      rInputCtrl.update();
    } // no re-rendering of component due to Angular


    return false;
  }

  render() {
    const contrAttr = node => {
      node.setAttribute('ng-controller', 'RecipientInputCtrl as rInput');
      node.setAttribute('ng-hide', 'rInput.embedded');
      node.setAttribute('ng-class', "{'has-error': rInput.noEncrypt}");
    };

    return external_React_default.a.createElement("div", {
      id: this.id,
      className: "recipients-input",
      ref: node => node && contrAttr(node)
    }, external_React_default.a.createElement("tags-input", {
      "ng-model": "rInput.recipients",
      type: "email",
      "key-property": "displayId",
      "allowed-tags-pattern": "[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}",
      spellcheck: "false",
      tabindex: "0",
      "add-on-space": "true",
      "add-on-enter": "true",
      "enable-editing-last-tag": "true",
      "display-property": "displayId",
      "on-tag-added": "rInput.verify($tag)",
      "on-tag-removed": "rInput.checkEncryptStatus()"
    }, external_React_default.a.createElement("auto-complete", {
      source: "rInput.autocomplete($query)",
      "min-length": "1"
    })), external_React_default.a.createElement("div", {
      className: "alert alert-danger ng-hide mb-0",
      role: "alert",
      ref: node => node && node.setAttribute('ng-show', 'rInput.noEncrypt')
    }, external_React_default.a.createElement("strong", null, map.editor_key_not_found), " ", external_React_default.a.createElement("span", null, map.editor_key_not_found_msg)));
  }

}
RecipientInput_RecipientInput.propTypes = {
  keys: prop_types_default.a.array,
  recipients: prop_types_default.a.array,
  encryptDisabled: prop_types_default.a.bool,
  onChangeEncryptStatus: prop_types_default.a.func,
  onAutoLocate: prop_types_default.a.func
};
/**
 * Angular controller for the recipient input
 */

class RecipientInputCtrl {
  constructor($timeout) {
    this._timeout = $timeout;
    this.recipients = _props.recipients;
    rInputCtrl = this;
  }

  update() {
    this._timeout(() => {
      // trigger $scope.$digest() after async call
      this.recipients.forEach(this.verify.bind(this));
      this.checkEncryptStatus();
    });
  }
  /**
   * Verifies a recipient after input, gets their key, colors the
   * input tag accordingly and checks if encryption is possible.
   * @param  {Object} recipient   The recipient object
   */


  verify(recipient) {
    if (!recipient) {
      return;
    }

    if (recipient.email) {
      // display only address from autocomplete
      recipient.displayId = recipient.email;
    } else {
      // set address after manual input
      recipient.email = recipient.displayId;
    } // lookup key in local cache


    recipient.key = this.getKey(recipient);

    if (recipient.key) {
      recipient.fingerprint = recipient.key.fingerprint;
    }

    if (recipient.key || recipient.checkedServer) {
      // color tag only if a local key was found, or after server lookup
      this.colorTag(recipient);
      this.checkEncryptStatus();
    } else {
      // no local key found ... lookup on the server
      this.autoLocate(recipient);
    }
  }
  /**
   * Finds the recipient's corresponding public key and sets it
   * on the 'key' attribute on the recipient object.
   * @param  {Object} recipient   The recipient object
   * @return {Object}             The key object (undefined if none found)
   */


  getKey(recipient) {
    return _props.keys.find(key => {
      const fprMatch = recipient.fingerprint && key.fingerprint === recipient.fingerprint;
      const emailMatch = key.email && key.email.toLowerCase() === recipient.email.toLowerCase();
      return fprMatch && emailMatch || emailMatch;
    });
  }
  /**
   * Color the recipient's input tag depending on
   * whether they have a key or not.
   * @param  {Object} recipient   The recipient object
   */


  colorTag(recipient) {
    this._timeout(() => {
      // wait for html tag to appear
      const tags = document.querySelectorAll('tags-input li.tag-item');

      for (const tag of tags) {
        if (tag.textContent.indexOf(recipient.email) !== -1) {
          if (recipient.key) {
            tag.classList.add('tag-success');
          } else {
            tag.classList.add('tag-danger');
          }
        }
      }
    });
  }
  /**
   * Checks if all recipients have a public key and prevents encryption
   * if one of them does not have a key.
   */


  checkEncryptStatus() {
    this.noEncrypt = this.recipients.some(r => !r.key);
    const encryptDisabled = this.noEncrypt || !this.recipients.length;

    if (_props.encryptDisabled !== encryptDisabled) {
      _props.onChangeEncryptStatus({
        encryptDisabled
      });
    }
  }
  /**
   * Do a search with the autoLocate module
   * if a key was not found in the local keyring.
   * @param  {Object} recipient   The recipient object
   * @return {undefined}
   */


  autoLocate(recipient) {
    recipient.checkedServer = true;

    _props.onAutoLocate(recipient);
  }
  /**
   * Queries the local cache of key objects to find a matching user ID
   * @param  {String} query   The autocomplete query
   * @return {Array}          A list of filtered items that match the query
   */


  autocomplete(query) {
    const cache = _props.keys.map(key => ({
      email: key.email,
      fingerprint: key.fingerprint,
      displayId: `${key.userId} - ${key.keyId}`
    })); // filter by display ID and ignore duplicates


    return cache.filter(i => i.displayId.toLowerCase().includes(query.toLowerCase()) && !this.recipients.some(recipient => recipient.email === i.email));
  }

} // workaround to prevent "Error: class constructors must be invoked with |new|" in Firefox
// https://github.com/angular/angular.js/issues/14240

RecipientInputCtrl.$$ngIsClass = true;
// CONCATENATED MODULE: ./src/components/editor/components/BlurWarning.js
/**
 * Copyright (C) 2017-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */


register(['editor_blur_warn']);
class BlurWarning_BlurWarning extends external_React_default.a.Component {
  constructor() {
    super();
    this.state = {
      showBlurWarning: false
    }; // timeoutID for period in which the blur warning alert is visible

    this.blurWarnActive = null; // timeoutID for period in which blur events are monitored

    this.blurWarnPeriod = null; // timeoutID for period in which blur events are non-critical

    this.blurValid = null; // observe window for getting focus

    window.addEventListener('focus', () => this.startBlurValid());
  }

  startBlurWarnInterval() {
    if (this.blurWarnPeriod) {
      return;
    }

    this.blurWarnPeriod = setTimeout(() => this.blurWarnPeriod = null, 2000);
  }
  /*
   blur warning displayed if blur occurs:
   - inside blur warning period (2s after input)
   - not within 40ms after keydown event (text editor)
   - not within 40ms before focus event (window, modal)
  */


  onBlur() {
    if (this.blurWarnPeriod && !this.blurValid) {
      setTimeout(() => this.showBlurWarning(), 40);
    }
  }

  showBlurWarning() {
    if (this.blurValid) {
      return;
    }

    if (this.blurWarnActive) {
      clearTimeout(this.blurWarnActive);
    }

    this.setState({
      showBlurWarning: true
    });
    this.blurWarnActive = setTimeout(() => this.setState({
      showBlurWarning: false
    }), 800);
  }

  startBlurValid() {
    if (this.blurValid) {
      // clear timeout
      clearTimeout(this.blurValid);
    } // restart


    this.blurValid = setTimeout(() => this.blurValid = null, 40);
  }

  render() {
    if (!this.state.showBlurWarning) {
      return null;
    }

    return external_React_default.a.createElement("div", {
      className: "alert alert-warning fade show",
      role: "alert",
      style: {
        position: 'absolute',
        top: '300px',
        left: '50%',
        marginLeft: '-240px',
        zIndex: 1050
      }
    }, external_React_default.a.createElement("h3", null, map.editor_blur_warn));
  }

}
// EXTERNAL MODULE: ./src/components/util/SecurityBG.css
var util_SecurityBG = __webpack_require__(26);

// CONCATENATED MODULE: ./src/components/util/SecurityBG.js




class SecurityBG_SecurityBG extends external_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 'none',
      color: 'none'
    };
    props.port.on('update-security-background', () => this.setSecurityBG());
  }

  componentDidMount() {
    this.setSecurityBG();
  }

  async setSecurityBG() {
    const {
      image,
      color
    } = await getSecurityBackground(this.props.port);
    this.setState({
      image,
      color
    });
  }

  render() {
    return external_React_default.a.createElement("div", {
      className: `securityBG ${this.props.className || ''}`,
      style: {
        backgroundImage: this.state.image,
        backgroundColor: this.state.color
      }
    }, this.props.children);
  }

}
SecurityBG_SecurityBG.propTypes = {
  className: prop_types_default.a.string,
  port: prop_types_default.a.object.isRequired,
  children: prop_types_default.a.node.isRequired
};
// CONCATENATED MODULE: ./src/components/util/Alert.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */


/**
 * Alert
 */

function Alert({
  className,
  id,
  header,
  children: message,
  type
}) {
  return external_React_default.a.createElement("div", {
    id: id,
    className: `alert alert-${type} fade show ${className || ''}`,
    role: "alert"
  }, header && external_React_default.a.createElement("strong", null, `${header} `), message);
}
Alert.propTypes = {
  className: prop_types_default.a.string,
  id: prop_types_default.a.string,
  header: prop_types_default.a.string,
  children: prop_types_default.a.node.isRequired,
  type: prop_types_default.a.oneOf(['success', 'info', 'warning', 'danger'])
};
Alert.defaultProps = {
  type: 'info'
};
// CONCATENATED MODULE: ./src/lib/file.js
/**
 * Copyright (C) 2016 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */


/**
 * @param {File} file
 * @param {Number} file.size
 * @returns {boolean}
 */

function isOversize(file) {
  return file.size >= MAX_FILE_UPLOAD_SIZE;
}
/**
 * @param {File} file
 * @param {Number} file.lastModified
 * @param {Date} file.lastModifiedDate
 * @param {String} file.name
 * @param {Number} file.size
 * @param {String} file.type
 * @param {String} file.webkitRelativePath
 * @param {Funtion} onLoadEnd
 * @returns {Promise<Object, Error>}
 */

function readUploadFile(file, onLoadEnd) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = function () {
      resolve({
        content: this.result,
        id: getHash(),
        name: file.name,
        size: file.size,
        type: file.type
      });
    };

    fileReader.onloadend = onLoadEnd;

    fileReader.onabort = function (evt) {
      reject(evt);
    };

    fileReader.readAsDataURL(file);
  });
}
function extractFileNameWithoutExt(fileName) {
  const indexOfDot = fileName.lastIndexOf('.');

  if (indexOfDot > 0) {
    // case: regular
    return fileName.substring(0, indexOfDot);
  } else {
    return fileName;
  }
}
function extractFileExtension(fileName) {
  const lastindexDot = fileName.lastIndexOf('.');

  if (lastindexDot <= 0) {
    // no extension
    return '';
  } else {
    return fileName.substring(lastindexDot + 1, fileName.length).toLowerCase().trim();
  }
}
class file_FileUpload {
  constructor() {
    // flag to monitor upload-in-progress status
    this.numUploadsInProgress = 0; // buffer for actions after upload finished

    this.actions = null;
  }

  readFile(file) {
    this.numUploadsInProgress++;
    return readUploadFile(file, this.onLoadEnd).catch(error => {
      this.onLoadEnd();
      throw error;
    });
  }

  inProgress() {
    return this.actions !== null;
  }

  registerAction(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Wrong parameter type, register only functions as actions');
    }

    this.action = fn;
  }

  onLoadEnd() {
    this.numUploadsInProgress--;

    if (this.numUploadsInProgress === 0 && this.actions) {
      this.action();
      this.action = null;
    }
  }

}
// EXTERNAL MODULE: ./src/components/util/FilePanel.scss
var FilePanel = __webpack_require__(28);

// CONCATENATED MODULE: ./src/components/util/FilePanel.js
/**
 * Copyright (C) 2017-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */






register(['decrypt_open_viewer_btn_title', 'editor_remove_upload', 'file_invalid_signed', 'file_not_signed', 'file_signed', 'key_export_dialog_copy_to_clipboard']);
class FilePanel_FileUploadPanel extends external_React_default.a.Component {
  componentDidUpdate(prevProps) {
    if (this.props.files !== prevProps.files) {
      this.panel.scrollIntoView(false);
    }
  }

  render() {
    return external_React_default.a.createElement("div", {
      className: "file-panel d-flex flex-wrap align-items-center",
      ref: node => this.panel = node
    }, this.props.files.map(file => external_React_default.a.createElement(FileUploadElement, {
      key: file.id,
      file: file,
      onRemove: this.props.onRemoveFile
    })));
  }

}
FilePanel_FileUploadPanel.propTypes = {
  files: prop_types_default.a.array,
  onRemoveFile: prop_types_default.a.func
};

function FileUploadElement({
  file,
  onRemove
}) {
  const fileExt = extractFileExtension(file.name);
  return external_React_default.a.createElement("div", {
    className: "file-element",
    id: file.id,
    title: file.name
  }, external_React_default.a.createElement("div", {
    className: "file-header"
  }, (fileExt === 'asc' || fileExt === 'gpg') && external_React_default.a.createElement("img", {
    src: "../../img/Mailvelope/logo_signet.svg",
    width: "28",
    height: "28"
  }), fileExt && external_React_default.a.createElement("span", {
    className: "file-extension"
  }, fileExt), external_React_default.a.createElement("span", {
    className: "file-name"
  }, extractFileNameWithoutExt(file.name)), onRemove && external_React_default.a.createElement("span", {
    title: map.editor_remove_upload,
    className: "icon icon-close",
    onClick: () => onRemove(file.id)
  })));
}

FileUploadElement.propTypes = {
  file: prop_types_default.a.object,
  // {id, name}
  secureIcon: prop_types_default.a.bool,
  onRemove: prop_types_default.a.func
};
function FileDownloadPanel(props) {
  return external_React_default.a.createElement("div", {
    className: `file-panel ${props.className || 'd-flex flex-wrap align-items-center'}`
  }, props.files.map(file => external_React_default.a.createElement(FileDownloadElement, {
    key: file.id,
    file: file,
    onClick: props.onClickFile,
    onCopyToClipboard: props.onCopyToClipboard
  })));
}
FileDownloadPanel.propTypes = {
  className: prop_types_default.a.string,
  files: prop_types_default.a.array,
  // {id, name}
  onClickFile: prop_types_default.a.func,
  onCopyToClipboard: prop_types_default.a.func
};

function FileDownloadElement({
  file,
  onClick,
  onCopyToClipboard
}) {
  const fileExt = extractFileExtension(file.name);
  const fileName = extractFileNameWithoutExt(file.name);
  return external_React_default.a.createElement("div", {
    className: "file-element"
  }, external_React_default.a.createElement("a", {
    className: "file-header",
    onClick: onClick,
    title: file.name,
    download: file.name,
    href: file.objectURL || '#'
  }, (fileExt === 'asc' || fileExt === 'gpg' || fileExt === 'pgp') && external_React_default.a.createElement("img", {
    src: "../../img/Mailvelope/logo_signet.svg",
    width: "28",
    height: "28"
  }), external_React_default.a.createElement("span", {
    className: "file-extension"
  }, fileExt), external_React_default.a.createElement("span", {
    className: "file-name"
  }, fileName), file.objectURL && external_React_default.a.createElement("span", {
    className: "icon icon-download"
  }), file.onShowPopup && external_React_default.a.createElement("button", {
    type: "button",
    className: "icon-btn ml-1",
    title: map.decrypt_open_viewer_btn_title,
    onClick: e => {
      e.preventDefault();
      file.onShowPopup();
    }
  }, external_React_default.a.createElement("img", {
    src: "../../img/Mailvelope/logo_signet.svg",
    width: "14",
    height: "14"
  })), file.content && external_React_default.a.createElement("button", {
    type: "button",
    className: "icon-btn ml-1",
    title: map.key_export_dialog_copy_to_clipboard,
    onClick: e => {
      e.preventDefault();
      onCopyToClipboard(file.content);
    }
  }, external_React_default.a.createElement("span", {
    className: "icon icon-copy"
  }))), file.content && external_React_default.a.createElement("textarea", {
    className: "form-control",
    value: file.content,
    rows: 6,
    spellCheck: "false",
    autoComplete: "off",
    readOnly: true
  }), file.signer && external_React_default.a.createElement(Alert, {
    className: "mt-2 mb-0 align-self-start",
    type: file.signer.type
  }, file.signer.label));
}

FileDownloadElement.propTypes = {
  file: prop_types_default.a.object,
  // {id, name, objectURL}
  onClick: prop_types_default.a.func,
  onCopyToClipboard: prop_types_default.a.func
};
// EXTERNAL MODULE: ./src/components/util/FileUpload.scss
var util_FileUpload = __webpack_require__(30);

// CONCATENATED MODULE: ./src/components/util/FileUpload.js
/**
 * Copyright (C) 2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */





register(['upload_help', 'upload_attachment', 'upload_drop']);
class FileUpload_FileUpload extends external_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragging: false
    };
    this.handleClickUpload = this.handleClickUpload.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  componentDidMount() {
    this.dragCounter = 0;
  }

  handleClickUpload() {
    this.fileInput.click();

    if (this.props.onClickUpload) {
      this.props.onClickUpload();
    }
  }

  handleDragEnter(e) {
    e.preventDefault();
    this.dragCounter++;

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({
        dragging: true
      });
    }
  }

  handleDragLeave(e) {
    e.preventDefault();
    this.dragCounter--;

    if (this.dragCounter > 0) {
      return;
    }

    this.setState({
      dragging: false
    });
  }

  handleDrop(e) {
    e.preventDefault();
    this.setState({
      dragging: false
    });

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.onChangeFileInput(e.dataTransfer.files);
      e.dataTransfer.clearData();
      this.dragCounter = 0;
    }
  }

  render() {
    return external_React_default.a.createElement("div", {
      className: "fileUpload w-100",
      onDragEnter: this.handleDragEnter,
      onDragLeave: this.handleDragLeave,
      onDragOver: e => e.preventDefault(),
      onDrop: this.handleDrop
    }, external_React_default.a.createElement("div", {
      className: "area d-flex flex-column justify-content-center align-items-center overflow-auto"
    }, this.props.files.length > 0 && external_React_default.a.createElement("div", {
      className: "align-items-start align-self-stretch"
    }, external_React_default.a.createElement(FilePanel_FileUploadPanel, {
      files: this.props.files,
      onRemoveFile: this.props.onRemoveFile
    })), external_React_default.a.createElement("div", {
      className: "d-flex justify-content-center align-items-center align-self-stretch"
    }, external_React_default.a.createElement("span", {
      className: "text-muted font-italic mr-3"
    }, map.upload_help), external_React_default.a.createElement("button", {
      type: "button",
      onClick: this.handleClickUpload,
      className: "btn btn-sm btn-secondary"
    }, external_React_default.a.createElement("span", null, map.upload_attachment)), external_React_default.a.createElement("input", {
      ref: node => this.fileInput = node,
      type: "file",
      accept: this.props.filter ? this.props.filter.join(',') : '*',
      className: "add-file-input d-none",
      multiple: "multiple",
      onChange: e => this.props.onChangeFileInput(e.target.files)
    }))), external_React_default.a.createElement("div", {
      className: `overlay d-flex justify-content-center align-items-center ${this.state.dragging ? 'active' : ''}`
    }, external_React_default.a.createElement("span", {
      className: "text-muted font-italic"
    }, map.upload_drop)));
  }

}
FileUpload_FileUpload.propTypes = {
  filter: prop_types_default.a.array,
  // [.asc, .gpg]
  files: prop_types_default.a.array,
  // {id, name}
  onRemoveFile: prop_types_default.a.func,
  onClickUpload: prop_types_default.a.func,
  onChangeFileInput: prop_types_default.a.func
};
// CONCATENATED MODULE: ./node_modules/reactstrap/es/Toast.js








var Toast_propTypes = {
  children: prop_types_default.a.node,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  fade: prop_types_default.a.bool,
  isOpen: prop_types_default.a.bool,
  tag: tagPropType,
  transition: prop_types_default.a.shape(es_Fade.propTypes),
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.string, prop_types_default.a.func])
};
var Toast_defaultProps = {
  isOpen: true,
  tag: 'div',
  fade: true,
  transition: _objectSpread({}, es_Fade.defaultProps, {
    unmountOnExit: true
  })
};

function Toast(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      isOpen = props.isOpen,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "isOpen", "children", "transition", "fade", "innerRef"]);

  var classes = mapToCssModules(classnames_default()(className, 'toast'), cssModule);

  var toastTransition = _objectSpread({}, es_Fade.defaultProps, {}, transition, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return external_React_default.a.createElement(es_Fade, _extends({}, attributes, toastTransition, {
    tag: Tag,
    className: classes,
    in: isOpen,
    role: "alert",
    innerRef: innerRef
  }), children);
}

Toast.propTypes = Toast_propTypes;
Toast.defaultProps = Toast_defaultProps;
/* harmony default export */ var es_Toast = (Toast);
// CONCATENATED MODULE: ./node_modules/reactstrap/es/ToastHeader.js






var ToastHeader_propTypes = {
  tag: tagPropType,
  icon: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.node]),
  wrapTag: tagPropType,
  toggle: prop_types_default.a.func,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  children: prop_types_default.a.node,
  closeAriaLabel: prop_types_default.a.string,
  charCode: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
  close: prop_types_default.a.object
};
var ToastHeader_defaultProps = {
  tag: 'strong',
  wrapTag: 'div',
  tagClassName: 'mr-auto',
  closeAriaLabel: 'Close',
  charCode: 215
};

var ToastHeader_ToastHeader = function ToastHeader(props) {
  var closeButton;
  var icon;

  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      closeAriaLabel = props.closeAriaLabel,
      charCode = props.charCode,
      close = props.close,
      tagClassName = props.tagClassName,
      iconProp = props.icon,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "charCode", "close", "tagClassName", "icon"]);

  var classes = mapToCssModules(classnames_default()(className, 'toast-header'), cssModule);

  if (!close && toggle) {
    var closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
    closeButton = external_React_default.a.createElement("button", {
      type: "button",
      onClick: toggle,
      className: mapToCssModules('close', cssModule),
      "aria-label": closeAriaLabel
    }, external_React_default.a.createElement("span", {
      "aria-hidden": "true"
    }, closeIcon));
  }

  if (typeof iconProp === "string") {
    icon = external_React_default.a.createElement("svg", {
      className: mapToCssModules("rounded text-" + iconProp),
      width: "20",
      height: "20",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid slice",
      focusable: "false",
      role: "img"
    }, external_React_default.a.createElement("rect", {
      fill: "currentColor",
      width: "100%",
      height: "100%"
    }));
  } else if (iconProp) {
    icon = iconProp;
  }

  return external_React_default.a.createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), icon, external_React_default.a.createElement(Tag, {
    className: mapToCssModules(classnames_default()(tagClassName, {
      "ml-2": icon != null
    }), cssModule)
  }, children), close || closeButton);
};

ToastHeader_ToastHeader.propTypes = ToastHeader_propTypes;
ToastHeader_ToastHeader.defaultProps = ToastHeader_defaultProps;
/* harmony default export */ var es_ToastHeader = (ToastHeader_ToastHeader);
// CONCATENATED MODULE: ./node_modules/reactstrap/es/ToastBody.js






var ToastBody_propTypes = {
  tag: tagPropType,
  className: prop_types_default.a.string,
  cssModule: prop_types_default.a.object,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.object, prop_types_default.a.string, prop_types_default.a.func])
};
var ToastBody_defaultProps = {
  tag: 'div'
};

var ToastBody_ToastBody = function ToastBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      innerRef = props.innerRef,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "innerRef", "tag"]);

  var classes = mapToCssModules(classnames_default()(className, 'toast-body'), cssModule);
  return external_React_default.a.createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};

ToastBody_ToastBody.propTypes = ToastBody_propTypes;
ToastBody_ToastBody.defaultProps = ToastBody_defaultProps;
/* harmony default export */ var es_ToastBody = (ToastBody_ToastBody);
// CONCATENATED MODULE: ./src/components/util/Toast.js
/**
 * Copyright (C) 2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */



/**
 * Alert
 */

function Toast_Toast({
  className,
  isOpen,
  transition,
  toggle,
  header,
  type,
  children: message
}) {
  return external_React_default.a.createElement(es_Toast, {
    className: `${className || ''} ${type || ''}`,
    isOpen: isOpen,
    transition: transition
  }, header && external_React_default.a.createElement(es_ToastHeader, {
    toggle: toggle,
    icon: type && external_React_default.a.createElement("span", {
      "aria-hidden": "true",
      className: `icon-svg icon-svg-${type === 'success' ? 'positive' : 'negative'} flex-shrink-0`
    })
  }, header), external_React_default.a.createElement(es_ToastBody, {
    className: `d-flex align-items-center ${toggle && !header ? 'dismissable' : ''}`
  }, toggle && !header && type && external_React_default.a.createElement("span", {
    "aria-hidden": "true",
    className: `icon-svg icon-svg-${type === 'success' ? 'positive' : 'negative'} flex-shrink-0`
  }), message, " ", toggle && !header && external_React_default.a.createElement("button", {
    type: "button",
    onClick: toggle,
    className: "close ml-auto",
    "aria-label": "Close"
  }, external_React_default.a.createElement("span", {
    "aria-hidden": "true",
    className: "icon icon-close flex-shrink-0 ml-3"
  }))));
}
Toast_Toast.propTypes = {
  className: prop_types_default.a.string,
  isOpen: prop_types_default.a.bool,
  transition: prop_types_default.a.shape(es_Fade.propTypes),
  toggle: prop_types_default.a.func,
  header: prop_types_default.a.string,
  type: prop_types_default.a.oneOf(['success', 'error']),
  children: prop_types_default.a.node.isRequired
};
Toast_Toast.defaultProps = {
  isOpen: true
};
// EXTERNAL MODULE: ./src/components/util/Spinner.scss
var util_Spinner = __webpack_require__(32);

// CONCATENATED MODULE: ./src/components/util/Spinner.js



class Spinner_Spinner extends external_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: this.props.delay ? true : false
    };
    this.timer = 0;
  }

  componentDidMount() {
    if (this.props.delay) {
      // show spinner after delay
      this.timer = setTimeout(() => this.setState({
        hide: false
      }), this.props.delay);
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    return external_React_default.a.createElement("div", {
      className: `m-spinner-${this.props.fullscreen ? 'fullscreen' : 'inline'} ${this.state.hide ? 'hide' : ''}`,
      style: this.props.style
    }, external_React_default.a.createElement("div", {
      className: "symbol"
    }, external_React_default.a.createElement("div", {
      className: "bounce1"
    }), external_React_default.a.createElement("div", {
      className: "bounce2"
    })));
  }

}
Spinner_Spinner.propTypes = {
  style: prop_types_default.a.object,
  delay: prop_types_default.a.number,
  fullscreen: prop_types_default.a.bool
};
Spinner_Spinner.defaultProps = {
  delay: 400,
  fullscreen: false
};
// EXTERNAL MODULE: ./src/components/util/Terminate.scss
var Terminate = __webpack_require__(34);

// CONCATENATED MODULE: ./src/components/util/Terminate.js
/**
 * Copyright (C) 2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */


function Terminate_Terminate() {
  return external_React_default.a.createElement("div", {
    className: "terminate"
  }, external_React_default.a.createElement("div", {
    className: "backdrop"
  }), external_React_default.a.createElement("div", {
    className: "symbol"
  }, external_React_default.a.createElement("span", {
    className: "icon icon-bolt"
  })));
}
// EXTERNAL MODULE: ./src/components/editor/editor.scss
var editor = __webpack_require__(36);

// CONCATENATED MODULE: ./src/components/editor/editor.js
/**
 * Copyright (C) 2012-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */

/**
 * @fileOverview This file implements the interface for encrypting and
 * signing user data in an sandboxed environment that is secured from
 * the webmail interface.
 */

















 // register language strings

register(['editor_error_header', 'editor_header', 'editor_label_attachments', 'editor_label_copy_recipient', 'editor_label_message', 'editor_label_recipient', 'editor_label_subject', 'form_ok', 'security_background_button_title', 'upload_quota_exceeded_warning', 'upload_quota_warning_headline', 'waiting_dialog_decryption_failed']);
class editor_Editor extends external_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasUserInput: false,
      signMsg: false,
      signKey: '',
      defaultKey: false,
      privKeys: [],
      defaultPlainText: '',
      plainText: '',
      publicKeys: [],
      recipients: [],
      recipientsCc: [],
      showRecipientsCc: false,
      subject: '',
      encryptDisabled: true,
      waiting: true,
      notification: null,
      showNotification: false,
      pwdDialog: null,
      files: [],
      terminate: false,
      embedded: false,
      integration: false
    };
    this.encryptTimeout = null;
    this.port = EventHandler_EventHandler.connect(`editor-${this.props.id}`, this); // flag to control time slice for input logging

    this.logTextareaInput = true;
    this.registerEventListeners(); // ref to blur warning

    this.blurWarning = null;
  }

  componentDidMount() {
    this.port.emit('editor-mount');
  }

  registerEventListeners() {
    this.port.on('set-text', ({
      text
    }) => this.setState({
      defaultPlainText: text,
      plainText: text
    }));
    this.port.on('set-init-data', this.onSetInitData);
    this.port.on('set-mode', this.onSetMode);
    this.port.on('set-attachment', this.onSetAttachment);
    this.port.on('decrypt-in-progress', this.showSpinner);
    this.port.on('encrypt-in-progress', this.onEncryptInProgress);
    this.port.on('send-mail-in-progress', this.showSpinner);
    this.port.on('decrypt-end', this.hideSpinner);
    this.port.on('encrypt-end', this.hideSpinner);
    this.port.on('encrypt-failed', this.hideSpinner);
    this.port.on('decrypt-failed', this.onDecryptFailed);
    this.port.on('show-pwd-dialog', this.onShowPwdDialog);
    this.port.on('hide-pwd-dialog', this.onHidePwdDialog);
    this.port.on('get-plaintext', this.getPlaintext);
    this.port.on('error-message', this.onErrorMessage);
    this.port.on('hide-notification', this.hideNotification);
    this.port.on('show-notification', this.showNotification);
    this.port.on('terminate', this.onTerminate);
    this.port.on('public-key-userids', this.onPublicKeyUserids);
    this.port.on('key-update', this.onKeyUpdate);
  }

  onSetInitData({
    text = '',
    signMsg,
    subject,
    defaultKeyFpr,
    privKeys = []
  }) {
    this.setState({
      defaultPlainText: text,
      plainText: text,
      subject,
      files: [],
      signMsg: Boolean(signMsg),
      signKey: defaultKeyFpr,
      defaultKey: Boolean(defaultKeyFpr),
      privKeys
    });
  }

  onSetMode({
    event,
    ...modes
  }) {
    if (Object.entries(modes).some(entry => entry[1])) {
      this.fileUpload = new file_FileUpload();
    }

    this.setState({ ...modes
    });
  }

  onTerminate() {
    this.setState({
      terminate: true
    }, () => this.port.disconnect());
  }

  handlePlainTextLoad() {
    // emit event to backend that editor has initialized
    this.setState({
      waiting: false
    }, () => this.port.emit('editor-load'));
  }
  /**
   * Remember the available public keys for later and set the recipients proposal gotten from the webmail ui to the editor
   * @param {Array} options.keys         A list of all available public keys from the local keychain
   * @param {Array} options.recipients   recipients gather from the webmail ui
   */


  onPublicKeyUserids({
    keys,
    to,
    cc
  }) {
    this.setState({
      publicKeys: keys,
      recipients: to,
      recipientsCc: cc,
      showRecipientsCc: cc.length > 0
    });
  }
  /**
   * Event that is triggered after update of the public keyring (e.g. when the key server responded)
   * @param {Array} options.keys   A list of all available public keys from the local keychain
   */


  onKeyUpdate({
    keys
  }) {
    this.setState({
      publicKeys: keys
    });
  }

  onEncryptInProgress() {
    if (!this.encryptTimeout) {
      this.encryptTimeout = setTimeout(() => {
        this.showSpinner();
      }, 300);
    }
  }

  showSpinner() {
    this.setState(prevState => ({
      waiting: !prevState.showNotification
    }));
  }

  hideSpinner() {
    clearTimeout(this.encryptTimeout);
    this.encryptTimeout = null;
    this.setState({
      waiting: false
    });
  }
  /**
   * send log entry for user input
   * @param {string} type
   */


  logUserInput(type) {
    this.setState({
      hasUserInput: true
    });
    this.port.emit('editor-user-input', {
      source: 'security_log_editor',
      type
    });
  }
  /**
   * Is called when the user clicks the cancel button.
   */


  handleCancel() {
    this.logUserInput('security_log_dialog_cancel');
    this.port.emit('editor-close', {
      cancel: true
    });
  }
  /**
   * Is called when the user clicks the sign button.
   */


  handleSign() {
    this.logUserInput('security_log_dialog_sign');
    this.port.emit('sign-only', {
      signKeyFpr: this.state.signKey
    });
  }
  /**
   * Is called when the user clicks the encrypt button.
   */


  handleOk() {
    this.logUserInput('security_log_dialog_encrypt');
    this.setState({
      encryptDisabled: true
    }, () => this.sendPlainText('encrypt'));
  }

  getPlaintext(msg) {
    if (this.fileUpload && this.fileUpload.inProgress()) {
      this.fileUpload.registerAction(() => this.getPlaintext(msg));
      return;
    } // don't use key cache when sign & encrypt of message and user has not touched the editor
    // otherwise any predefinedText could be signed with the client-API


    const noCache = this.state.embedded && !msg.draft && !this.state.hasUserInput;
    this.sendPlainText(msg.action, noCache, msg.draft);
  }
  /**
   * Send the plaintext body to the background script for either signing or encryption.
   * @param  {String} action   Either 'sign' or 'encrypt'
   */


  sendPlainText(action, noCache, draft) {
    this.port.emit('editor-plaintext', {
      message: this.state.plainText,
      subject: this.state.subject,
      keysTo: this.state.recipients.map(r => r.key || {
        email: r.email
      }),
      // return email if key not available (action: 'sign')
      keysCc: this.state.recipientsCc.map(r => r.key || {
        email: r.email
      }),
      // return email if key not available (action: 'sign')
      attachments: this.state.files,
      action,
      signMsg: this.state.signMsg || draft,
      // draft is always signed
      signKeyFpr: this.state.signKey,
      noCache
    });
  }

  handleTextChange(value) {
    this.setState({
      plainText: value
    });
    this.blurWarning && this.blurWarning.startBlurWarnInterval();
    this.logTextInput();
  }

  logTextInput() {
    if (this.logTextareaInput) {
      this.logUserInput('security_log_textarea_input'); // limit textarea log to 1 event per second

      this.logTextareaInput = false;
      window.setTimeout(() => {
        this.logTextareaInput = true;
      }, 1000);
    }
  }

  handleTextMouseUp(event) {
    const textElement = event.currentTarget;

    if (textElement.selectionStart === textElement.selectionEnd) {
      this.logUserInput('security_log_textarea_click');
    } else {
      this.logUserInput('security_log_textarea_select');
    }
  }

  showNotification({
    title: header = '',
    message,
    type,
    autoHide = true,
    hideDelay = 4000,
    closeOnHide = false,
    dismissable = true
  }) {
    this.setState({
      notification: {
        header,
        message,
        type,
        autoHide,
        hideDelay,
        closeOnHide,
        dismissable
      },
      waiting: false,
      pwdDialog: null,
      showNotification: true
    });
  }

  onDecryptFailed(msg) {
    const error = {
      title: map.waiting_dialog_decryption_failed,
      message: msg.error ? msg.error.message : map.waiting_dialog_decryption_failed,
      type: 'error'
    };
    this.showNotification(error);
  }

  onErrorMessage(msg) {
    if (msg.error.code === 'PWD_DIALOG_CANCEL') {
      return;
    }

    msg.error.type = 'error';
    msg.error.title = msg.error.title || map.editor_error_header;
    this.showNotification(msg.error);
  }

  onShowPwdDialog(msg) {
    this.setState({
      pwdDialog: msg,
      waiting: false,
      notification: null
    });
  }

  onHidePwdDialog() {
    this.setState({
      pwdDialog: null
    });
  }

  handleAddAttachment(files) {
    files = Array.from(files);
    const filesSize = files.reduce((total, file) => total + file.size, 0);
    const uploadedSize = this.state.files.reduce((total, file) => total + file.size, 0);
    const currentAttachmentsSize = uploadedSize + filesSize;

    if (currentAttachmentsSize > this.props.maxFileUploadSize) {
      const error = {
        title: map.upload_quota_warning_headline,
        message: `${map.upload_quota_exceeded_warning} ${Math.floor(this.props.maxFileUploadSize / (1024 * 1024))}MB.`
      };
      this.showNotification(error);
      return;
    }

    files.forEach(file => this.addAttachment(file));
  }

  addAttachment(file) {
    if (isOversize(file)) {
      throw new Error('File is too big');
    }

    this.fileUpload.readFile(file).then(file => this.setState(prevState => ({
      files: [...prevState.files, file]
    }))).catch(error => console.log(error));
  }

  onSetAttachment({
    attachment
  }) {
    const buffer = str2ab(attachment.content);
    const blob = new Blob([buffer], {
      type: attachment.mimeType
    });
    const file = new File([blob], attachment.filename, {
      type: attachment.mimeType
    });
    this.addAttachment(file);
  }

  handleRemoveFile(id) {
    this.logUserInput('security_log_remove_attachment');
    this.setState(prevState => ({
      files: prevState.files.filter(file => file.id !== id)
    }));
  }

  handleChangeSignKey(value) {
    if (value === 'nosign') {
      this.setState({
        signMsg: false
      });
    } else {
      this.setState({
        signKey: value,
        signMsg: true
      });
    }
  }

  hideNotification(timeout = 0, closeEditor = false) {
    setTimeout(() => {
      if (closeEditor) {
        this.port.emit('editor-close');
      } else {
        this.setState({
          showNotification: false,
          notification: null
        });
      }
    }, timeout);
  }

  render() {
    return external_React_default.a.createElement(SecurityBG_SecurityBG, {
      className: `editor ${this.state.embedded ? 'embedded' : ''}`,
      port: this.port
    }, external_React_default.a.createElement("div", {
      className: "modal d-block"
    }, external_React_default.a.createElement("div", {
      className: "modal-dialog h-100 mw-100 m-0"
    }, external_React_default.a.createElement("div", {
      className: "modal-content shadow-lg overflow-auto border-0 h-100"
    }, external_React_default.a.createElement("div", {
      className: "modal-body"
    }, external_React_default.a.createElement("div", {
      className: "editor d-flex flex-column align-content-center h-100"
    }, !this.state.embedded && external_React_default.a.createElement("div", {
      className: "mb-3"
    }, external_React_default.a.createElement("div", {
      className: "d-flex"
    }, external_React_default.a.createElement("label", {
      className: "mr-auto"
    }, map.editor_label_recipient), !this.state.showRecipientsCc && this.state.integration && external_React_default.a.createElement("label", null, external_React_default.a.createElement("a", {
      href: "#",
      role: "button",
      className: "text-reset",
      onClick: () => this.setState({
        showRecipientsCc: true
      })
    }, map.editor_label_copy_recipient))), external_React_default.a.createElement(RecipientInput_RecipientInput, {
      keys: this.state.publicKeys,
      recipients: this.state.recipients,
      encryptDisabled: this.state.encryptDisabled,
      onChangeEncryptStatus: ({
        encryptDisabled
      }) => this.setState({
        encryptDisabled
      }),
      onAutoLocate: recipient => this.port.emit('auto-locate', {
        recipient
      })
    })), this.state.showRecipientsCc && external_React_default.a.createElement("div", {
      className: "mb-3"
    }, external_React_default.a.createElement("label", {
      className: "mr-auto"
    }, map.editor_label_copy_recipient), external_React_default.a.createElement(RecipientInput_RecipientInput, {
      keys: this.state.publicKeys,
      recipients: this.state.recipientsCc,
      encryptDisabled: this.state.encryptDisabled,
      onChangeEncryptStatus: ({
        encryptDisabled
      }) => this.setState({
        encryptDisabled
      }),
      onAutoLocate: recipient => this.port.emit('auto-locate', {
        recipient
      })
    })), this.state.integration && external_React_default.a.createElement("div", {
      className: "mb-3"
    }, external_React_default.a.createElement("label", null, map.editor_label_subject), external_React_default.a.createElement("input", {
      type: "text",
      value: this.state.subject,
      className: "form-control",
      id: "subject",
      onChange: e => this.setState({
        subject: e.target.value
      })
    })), external_React_default.a.createElement("div", {
      className: "editor-body d-flex flex-column flex-grow-1"
    }, external_React_default.a.createElement("label", null, map.editor_label_message), external_React_default.a.createElement("div", {
      className: "flex-grow-1",
      style: {
        margin: '-0.2rem'
      }
    }, external_React_default.a.createElement("div", {
      className: "plain-text w-100 h-100"
    }, external_React_default.a.createElement(PlainText_PlainText, {
      defaultValue: this.state.defaultPlainText,
      onChange: value => this.handleTextChange(value),
      onBlur: () => this.blurWarning && this.blurWarning.onBlur(),
      onMouseUp: element => this.handleTextMouseUp(element),
      onLoad: () => this.handlePlainTextLoad()
    })))), (this.state.embedded || this.state.integration) && external_React_default.a.createElement("div", {
      className: "mt-3"
    }, external_React_default.a.createElement("label", null, map.editor_label_attachments), external_React_default.a.createElement(FileUpload_FileUpload, {
      files: this.state.files,
      onClickUpload: () => this.logUserInput('security_log_add_attachment'),
      onRemoveFile: id => this.handleRemoveFile(id),
      onChangeFileInput: files => this.handleAddAttachment(files)
    })))), !this.state.embedded && external_React_default.a.createElement("div", {
      className: "modal-footer px-4 pb-4 pt-2 flex-shrink-0"
    }, external_React_default.a.createElement(EditorModalFooter_EditorModalFooter, {
      signMsg: this.state.signMsg,
      signKey: this.state.signKey,
      privKeys: this.state.privKeys,
      encryptDisabled: this.state.encryptDisabled || this.state.plainText === '',
      integration: this.state.integration,
      onCancel: () => this.handleCancel(),
      onSignOnly: () => this.handleSign(),
      onOk: () => this.handleOk(),
      onChangeSignKey: value => this.handleChangeSignKey(value),
      onClickSignSetting: () => this.port.emit('open-app', {
        fragment: '/settings/general'
      })
    }))))), this.state.pwdDialog && external_React_default.a.createElement("iframe", {
      className: "editor-popup-pwd-dialog modal-content",
      src: `../enter-password/passwordDialog.html?id=${this.state.pwdDialog.id}`,
      frameBorder: 0
    }), !this.state.embedded && external_React_default.a.createElement(external_React_default.a.Fragment, null, external_React_default.a.createElement(BlurWarning_BlurWarning, {
      ref: node => this.blurWarning = node
    }), this.state.pwdDialog && external_React_default.a.createElement("iframe", {
      className: "editor-popup-pwd-dialog modal-content",
      src: `../enter-password/passwordDialog.html?id=${this.state.pwdDialog.id}`,
      frameBorder: 0
    })), this.state.notification && external_React_default.a.createElement("div", {
      className: "toastWrapper"
    }, external_React_default.a.createElement(Toast_Toast, {
      isOpen: this.state.showNotification,
      header: this.state.notification.header,
      toggle: this.state.notification.dismissable ? () => this.hideNotification() : undefined,
      type: this.state.notification.type,
      transition: {
        timeout: 150,
        unmountOnExit: true,
        onEntered: () => {
          this.blurWarning && this.blurWarning.startBlurValid;
          this.state.notification.autoHide && this.hideNotification(this.state.notification.hideDelay, this.state.notification.closeOnHide);
        }
      }
    }, this.state.notification.message)), external_React_default.a.createElement(es_Fade, {
      in: this.state.pwdDialog !== null || this.state.showNotification && !this.state.notification.dismissable,
      unmountOnExit: true,
      className: "modal-backdrop"
    }), this.state.waiting && external_React_default.a.createElement(Spinner_Spinner, {
      fullscreen: true,
      delay: 0
    }), this.state.terminate && external_React_default.a.createElement(Terminate_Terminate, null));
  }

}
editor_Editor.propTypes = {
  id: prop_types_default.a.string,
  maxFileUploadSize: prop_types_default.a.number
};
editor_Editor.defaultProps = {
  maxFileUploadSize: MAX_FILE_UPLOAD_SIZE
};
// EXTERNAL MODULE: ./src/components/editor/editorRoot.css
var editorRoot = __webpack_require__(38);

// CONCATENATED MODULE: ./src/components/editor/editorRoot.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */







document.addEventListener('DOMContentLoaded', init);
register(['editor_header']);
mapToLocal();

function init() {
  const query = new URLSearchParams(document.location.search); // component id

  const id = query.get('id') || ''; // attachment max file size

  const quota = parseInt(query.get('quota'));
  let maxFileUploadSize = MAX_FILE_UPLOAD_SIZE;

  if (quota && quota < maxFileUploadSize) {
    maxFileUploadSize = quota;
  }

  addDocumentTitle(`Mailvelope - ${map.editor_header}`);
  const root = document.createElement('div');
  external_ReactDOM_default.a.render(external_React_default.a.createElement(editor_Editor, {
    id: id,
    maxFileUploadSize: maxFileUploadSize
  }), document.body.appendChild(root));
}

/***/ })
/******/ ]);