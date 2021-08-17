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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
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
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ 6)();
}


/***/ }),
/* 2 */
/*!*****************************!*\
  !*** ./src/res/common.json ***!
  \*****************************/
/*! exports provided: securityBGs, securityColors, default */
/*! exports used: securityColors */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":{\"petrol\":{\"bg\":\"#caebdd\",\"icon\":\"#85c9af\"},\"corn\":{\"bg\":\"#faebae\",\"icon\":\"#e3d18b\"},\"salmon\":{\"bg\":\"#f7cab5\",\"icon\":\"#e0a98e\"},\"lavender\":{\"bg\":\"#d9caeb\",\"icon\":\"#baa7d9\"},\"sky\":{\"bg\":\"#cadaeb\",\"icon\":\"#90b5da\"}}}");

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
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 6 */
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



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 7);

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
/* 7 */
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
/* 8 */
/*!********************************************!*\
  !*** ./src/components/util/SecurityBG.css ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3);
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./SecurityBG.css */ 9);

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
/* 9 */
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
/* 10 */
/*!*********************************************************!*\
  !*** ./src/components/recovery-sheet/RecoverySheet.css ***!
  \*********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3);
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./RecoverySheet.css */ 11);

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
/* 11 */
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/recovery-sheet/RecoverySheet.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/***************************************\n * RECOVERY SHEET ROOT ELEMENT\n */\n.recovery-sheet {\n    min-width: 740px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: #262626;\n    box-sizing: border-box;\n}\n\n/***************************************\n * TEASER ELEMENT\n */\n.recovery-sheet_teaser {\n    position: relative;\n    background-color: #ccc;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n}\n\n.recovery-sheet_teaser h1 {\n    margin: 10px 0;\n    font-size: 54px;\n    color: #515151;\n}\n\n.recovery-sheet_teaser img {\n    margin: 20px;\n}\n\n/***************************************\n * GLOBAL CONTENT\n */\n.recovery-sheet_content {\n    font-size: 12px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 30px 0;\n    max-width: 880px;\n}\n\n.recovery-sheet_content h2,\n.recovery-sheet_content h3,\n.recovery-sheet_content h4 {\n    color: #515151;\n}\n\n.recovery-sheet_content h2 {\n    font-size: 43px;\n    margin-top: 0;\n}\n\n.recovery-sheet_content h3 {\n    font-size: 15px;\n}\n\n.recovery-sheet_content h4 {\n    font-size: 14px;\n}\n\n.recovery-sheet_content p:last-of-type {\n    margin-bottom: 0;\n}\n\n/***************************************\n * CONTENT PANEL ELEMENT\n */\n.recovery-sheet_panel {\n    background-color: #e8eef7;\n    border: 1px solid #c6c6c6;\n    margin: 20px 15px 0;\n    overflow: hidden;\n    width: 100%;\n}\n\n.recovery-sheet_panel-content {\n    margin: 20px;\n}\n\n/***************************************\n * CODE PANEL ELEMENT\n */\n.recovery-sheet_code {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px\n}\n\n.recovery-sheet_code-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.recovery-sheet_code-header * {\n    margin-top: 0;\n}\n\n.recovery-sheet_code-container {\n    position: static !important;\n    background-color: #fff;\n    height: 85px !important;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.recovery-sheet_code-digit {\n    background-color: #ccc;\n    border: 1px dotted #c6c6c6;\n    padding: 5px 10px;\n    font-size: 30px;\n    text-align: center;\n    font-family: Consolas, \"Lucida Console\", Monaco, monospace;\n}\n\n.recovery-sheet_code-separator {\n    font-size: 30px;\n    margin: 5px;\n}\n\n/***************************************\n * DEVICE ELEMENTS\n */\n.recovery-sheet_devices {\n    display: flex;\n    flex-direction: row;\n    margin: 20px 0;\n}\n\n.recovery-sheet_devices-item {\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n}\n\n.recovery-sheet_devices-item:first-of-type {\n    padding-right: 45px;\n    border-right: 1px solid #c6c6c6;\n}\n\n.recovery-sheet_devices-item:last-of-type {\n    padding-left: 45px;\n    border-left: 1px solid #c6c6c6;\n}\n\n.recovery-sheet_devices-image {\n    width: 100px;\n    height: 60px;\n    background-color: #999;\n}\n\n.recovery-sheet_devices-split-content {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 20px;\n}\n\n.recovery-sheet_devices-split-content:last-child {\n    margin-bottom: 0;\n}\n\n.recovery-sheet_devices-qr-code {\n    width: 100px;\n    height: 100px;\n}\n\n/***************************************\n * DESCRIPTION\n */\n.recovery-sheet_description {\n    margin-top: 50px;\n    margin-bottom: 50px;\n}\n\n/***************************************\n * PRINT BUTTON\n */\n.recovery-sheet_print {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    margin-top: 30px;\n}\n\n.recovery-sheet_print > img {\n    margin: 0 15px;\n    opacity: 0.75;\n    cursor: pointer;\n}\n\n.recovery-sheet_print > button {\n    margin: 0 15px;\n    cursor: pointer;\n}\n\n.recovery-sheet_print-button {\n    height: 40px;\n    line-height: 40px;\n    font-weight: 500;\n    font-size: 16.24px;\n    padding: 0 16px;\n    transition: background-color .1s ease-in-out;\n    border: none;\n    border-radius: 4px;\n    box-shadow: none;\n}\n\n.gmx .recovery-sheet_print-button {\n    background: #6e8904;\n    color: #fff;\n}\n\n.gmx .recovery-sheet_print-button:hover {\n    background: #586e03;\n}\n\n.webde .recovery-sheet_print-button {\n    background: #ffd800;\n    color: #333;\n}\n\n.webde .recovery-sheet_print-button:hover {\n    background: #ccad00;\n}\n\n/***************************************\n * MISC CLASSES\n */\n\n.page-breaker {\n    padding: 0;\n    margin: 0;\n    border: 0;\n}\n\n/***************************************\n * BRAND SPECIFIC\n */\n.logo {\n    width: 100px;\n    height: auto;\n    background-color: #fff;\n}\n\n.gmx .logo {\n    margin-top: 26px;\n}\n\n.webde .gmx-specific {\n    display: none;\n}\n\n.desktop-image {\n    width: 121px;\n    height: 99px;\n}\n\n.smartphone-image {\n    width: 45px;\n    height: 95px;\n}\n\n.tablet-image {\n    width: 70px;\n    height: 97px;\n}\n\n/***************************************\n * PRINT SPECIFIC LAYOUT\n */\n@media print {\n\n    @page {\n      size: 210mm 297mm;\n      margin-top: 20mm;\n    }\n\n    .recovery-sheet {\n        display: block;\n    }\n\n    .recovery-sheet_teaser {\n        border: 1px solid #000;\n    }\n\n    .recovery-sheet_teaser img {\n        margin: 10px;\n    }\n\n    .recovery-sheet_content {\n        margin: 40px 0;\n    }\n\n    .recovery-sheet_content h2 {\n        font-size: 30px;\n    }\n\n    .recovery-sheet_content h3 {\n        font-size: 18px;\n    }\n\n    .recovery-sheet_content h4 {\n        font-size: 16px;\n    }\n\n    .recovery-sheet_content p, .recovery-sheet_content ul li {\n        font-size: 14px;\n    }\n\n    .page-breaker {\n        page-break-after: always;\n        page-break-inside: avoid;\n    }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 12 */
/*!************************************************************************!*\
  !*** ./src/components/recovery-sheet/recoverySheetRoot.js + 7 modules ***!
  \************************************************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/prop-types/index.js (<- Module is not an ECMAScript module) */
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
var external_ReactDOM_ = __webpack_require__(5);
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
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

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
var common = __webpack_require__(2);

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
// EXTERNAL MODULE: ./src/components/util/SecurityBG.css
var util_SecurityBG = __webpack_require__(8);

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
// EXTERNAL MODULE: ./src/components/recovery-sheet/RecoverySheet.css
var recovery_sheet_RecoverySheet = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/recovery-sheet/recoverySheet.js
/**
 * Copyright (C) 2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */





 // register language strings

register(['recovery_sheet_backup_data', 'recovery_sheet_be_aware', 'recovery_sheet_check_settings', 'recovery_sheet_creation_date', 'recovery_sheet_data_lost', 'recovery_sheet_enter_code', 'recovery_sheet_extension_problems', 'recovery_sheet_forgot_password', 'recovery_sheet_header', 'recovery_sheet_in_general', 'recovery_sheet_keep_safe', 'recovery_sheet_mobile_devices', 'recovery_sheet_not_working', 'recovery_sheet_other_computer', 'recovery_sheet_other_contacts', 'recovery_sheet_other_devices', 'recovery_sheet_other_devices_setup', 'recovery_sheet_other_problems', 'recovery_sheet_pgp_compat', 'recovery_sheet_print_block', 'recovery_sheet_print_button', 'recovery_sheet_print_notice', 'recovery_sheet_provider_communication', 'recovery_sheet_provider_inbox', 'recovery_sheet_provider_security', 'recovery_sheet_provider_settings', 'recovery_sheet_qr_code', 'recovery_sheet_recommendation', 'recovery_sheet_recover_data', 'recovery_sheet_recovery_code', 'recovery_sheet_subtitle_receipt', 'recovery_sheet_subtitle_recover', 'recovery_sheet_trusted_contacts', 'recovery_sheet_unknown_third', 'recovery_sheet_unlock_backup']);
class recoverySheet_RecoverySheet extends external_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: this.setBrand(props.brand),
      backupCode: null,
      logoDataUrl: null,
      date: new Date().toLocaleDateString()
    };
    this.port = EventHandler_EventHandler.connect(`recoverySheet-${props.id}`, this);
    this.registerEventListeners();
    this.port.emit('get-logo-image');
    this.port.emit('get-backup-code');
  }

  registerEventListeners() {
    this.port.on('set-backup-code', ({
      backupCode
    }) => this.setBackupCode(backupCode));
    this.port.on('set-logo-image', ({
      image
    }) => this.setState({
      logoDataUrl: image
    }));
  }

  setBackupCode(code) {
    new QRCode(this.qrCode, {
      // eslint-disable-line no-undef
      text: code,
      width: 175,
      height: 175,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H // eslint-disable-line no-undef

    });
    this.setState({
      backupCode: code
    }, this.port.emit('backup-code-window-init'));
  }

  setBrand(brandId) {
    if (!brandId) {
      return '';
    }

    let brand;

    switch (brandId) {
      case 'webde':
        brand = 'WEB.DE';
        break;

      case 'gmx':
        brand = 'GMX';
        break;

      default:
        throw new Error('Unknown brand');
    }

    return brand;
  }

  render() {
    const printButton = external_React_default.a.createElement("button", {
      type: "button",
      onClick: () => window.print(),
      className: this.props.brand ? 'recovery-sheet_print-button' : 'btn btn-primary'
    }, map.recovery_sheet_print_button);
    return external_React_default.a.createElement("div", {
      className: `recovery-sheet ${this.props.brand || ''}`
    }, external_React_default.a.createElement("header", {
      className: "recovery-sheet_teaser"
    }, external_React_default.a.createElement("img", {
      src: "assets/lock.png"
    }), external_React_default.a.createElement("h1", null, map.recovery_sheet_header), external_React_default.a.createElement("img", {
      src: "assets/lock.png"
    })), external_React_default.a.createElement("section", {
      className: "recovery-sheet_content container"
    }, external_React_default.a.createElement("div", {
      className: "row"
    }, external_React_default.a.createElement("div", {
      className: "col-2"
    }, external_React_default.a.createElement("img", {
      src: this.state.logoDataUrl ? this.state.logoDataUrl : '../../img/Mailvelope/logo_signet_96.png',
      className: "logo"
    })), external_React_default.a.createElement("div", {
      className: "col-10"
    }, external_React_default.a.createElement("h2", null, map.recovery_sheet_subtitle_receipt), external_React_default.a.createElement("h3", {
      className: "d-print-none"
    }, map.recovery_sheet_print_notice), external_React_default.a.createElement("h3", {
      className: "d-none d-print-flex"
    }, map.recovery_sheet_print_block))), external_React_default.a.createElement("section", {
      className: "recovery-sheet_print d-print-none"
    }, external_React_default.a.createElement("img", {
      src: "assets/printer.png"
    }), printButton, external_React_default.a.createElement("img", {
      src: "assets/printer.png"
    })), external_React_default.a.createElement("section", {
      className: "recovery-sheet_panel"
    }, external_React_default.a.createElement("div", {
      className: "recovery-sheet_panel-content"
    }, external_React_default.a.createElement("div", {
      className: "recovery-sheet_code"
    }, external_React_default.a.createElement("div", {
      className: "recovery-sheet_code-header"
    }, external_React_default.a.createElement("h3", null, map.recovery_sheet_recovery_code), external_React_default.a.createElement("h3", null, external_React_default.a.createElement("span", null, map.recovery_sheet_creation_date), " ", external_React_default.a.createElement("span", null, this.state.date))), this.state.backupCode && external_React_default.a.createElement(SecurityBG_SecurityBG, {
      className: "recovery-sheet_code-container",
      port: this.port
    }, external_React_default.a.createElement("span", {
      className: "recovery-sheet_code-digit"
    }, this.state.backupCode.substr(0, 5)), external_React_default.a.createElement("span", {
      className: "recovery-sheet_code-separator"
    }, "-"), external_React_default.a.createElement("span", {
      className: "recovery-sheet_code-digit"
    }, this.state.backupCode.substr(5, 5)), external_React_default.a.createElement("span", {
      className: "recovery-sheet_code-separator"
    }, "-"), external_React_default.a.createElement("span", {
      className: "recovery-sheet_code-digit"
    }, this.state.backupCode.substr(10, 5)), external_React_default.a.createElement("span", {
      className: "recovery-sheet_code-separator"
    }, "-"), external_React_default.a.createElement("span", {
      className: "recovery-sheet_code-digit"
    }, this.state.backupCode.substr(15, 5)), external_React_default.a.createElement("span", {
      className: "recovery-sheet_code-separator"
    }, "-"), external_React_default.a.createElement("span", {
      className: "recovery-sheet_code-digit"
    }, this.state.backupCode.substr(20, 5)), external_React_default.a.createElement("span", {
      className: "recovery-sheet_code-separator"
    }, "-"), external_React_default.a.createElement("span", {
      className: "recovery-sheet_code-digit"
    }, this.state.backupCode.substr(25, 1)))), external_React_default.a.createElement("div", {
      className: "recovery-sheet_plain-content"
    }, external_React_default.a.createElement("h3", null, map.recovery_sheet_subtitle_recover), external_React_default.a.createElement("p", null, map.recovery_sheet_not_working), external_React_default.a.createElement("ul", null, external_React_default.a.createElement("li", null, map.recovery_sheet_forgot_password), external_React_default.a.createElement("li", null, map.recovery_sheet_extension_problems), external_React_default.a.createElement("li", null, map.recovery_sheet_other_problems)), this.props.brand && external_React_default.a.createElement(external_React_default.a.Fragment, null, external_React_default.a.createElement("p", null, map.recovery_sheet_check_settings), external_React_default.a.createElement("p", null, external_React_default.a.createElement("em", null, map.recovery_sheet_provider_inbox), " > ", external_React_default.a.createElement("em", null, map.recovery_sheet_provider_settings), " > ", external_React_default.a.createElement("em", {
      className: "gmx-specific"
    }, map.recovery_sheet_provider_security), external_React_default.a.createElement("span", {
      className: "gmx-specific"
    }, " > "), external_React_default.a.createElement("em", null, map.recovery_sheet_provider_communication), "."))))), external_React_default.a.createElement("section", {
      className: "recovery-sheet_panel"
    }, external_React_default.a.createElement("div", {
      className: "recovery-sheet_panel-content"
    }, external_React_default.a.createElement("h3", null, map.recovery_sheet_other_devices), external_React_default.a.createElement("div", {
      className: "recovery-sheet_devices"
    }, external_React_default.a.createElement("div", {
      className: "recovery-sheet_devices-item recovery-sheet_devices-desktop"
    }, external_React_default.a.createElement("div", {
      className: "recovery-sheet_devices-split-content"
    }, external_React_default.a.createElement("h4", null, map.recovery_sheet_other_computer), external_React_default.a.createElement("img", {
      src: `assets/${!this.props.brand ? 'webde' : this.props.brand}/desktop.png`,
      className: "desktop-image"
    })), this.props.brand && external_React_default.a.createElement(external_React_default.a.Fragment, null, external_React_default.a.createElement("p", null, map.recovery_sheet_enter_code), external_React_default.a.createElement("p", null, external_React_default.a.createElement("em", null, map.recovery_sheet_provider_inbox), " > ", external_React_default.a.createElement("em", null, map.recovery_sheet_provider_settings), " > ", external_React_default.a.createElement("em", {
      className: "gmx-specific"
    }, map.recovery_sheet_provider_security), external_React_default.a.createElement("span", {
      className: "gmx-specific"
    }, " > "), external_React_default.a.createElement("em", null, map.recovery_sheet_provider_communication), "."))), external_React_default.a.createElement("div", {
      className: "recovery-sheet_devices-item recovery-sheet_devices-mobile"
    }, external_React_default.a.createElement("div", {
      className: "recovery-sheet_devices-split-content"
    }, external_React_default.a.createElement("h4", null, map.recovery_sheet_mobile_devices), external_React_default.a.createElement("img", {
      src: `assets/${!this.props.brand ? 'webde' : this.props.brand}/smartphone.png`,
      className: "smartphone-image"
    }), external_React_default.a.createElement("img", {
      src: `assets/${!this.props.brand ? 'webde' : this.props.brand}/tablet.png`,
      className: "tablet-image"
    })), external_React_default.a.createElement("div", {
      className: "recovery-sheet_devices-split-content"
    }, external_React_default.a.createElement("p", null, map.recovery_sheet_qr_code), external_React_default.a.createElement("div", {
      id: "qrcode",
      ref: ref => this.qrCode = ref
    })))))), external_React_default.a.createElement("section", {
      className: "recovery-sheet_print d-print-none"
    }, external_React_default.a.createElement("img", {
      src: "assets/printer.png"
    }), printButton, external_React_default.a.createElement("img", {
      src: "assets/printer.png"
    }))), external_React_default.a.createElement("footer", {
      className: "recovery-sheet_teaser d-none d-print-flex"
    }, external_React_default.a.createElement("img", {
      src: "assets/lock.png"
    }), external_React_default.a.createElement("h1", null, map.recovery_sheet_header), external_React_default.a.createElement("img", {
      src: "assets/lock.png"
    })), this.props.brand && external_React_default.a.createElement(external_React_default.a.Fragment, null, external_React_default.a.createElement("hr", {
      className: "page-breaker"
    }), external_React_default.a.createElement("header", {
      className: "recovery-sheet_teaser"
    }, external_React_default.a.createElement("img", {
      src: "assets/lock.png"
    }), external_React_default.a.createElement("h1", null, map.recovery_sheet_header), external_React_default.a.createElement("img", {
      src: "assets/lock.png"
    })), external_React_default.a.createElement("section", {
      className: "recovery-sheet_content container"
    }, external_React_default.a.createElement("div", {
      className: "row"
    }, external_React_default.a.createElement("div", {
      className: "col-2"
    }, external_React_default.a.createElement("img", {
      src: this.state.logoDataUrl ? this.state.logoDataUrl : '../../img/Mailvelope/logo_signet_96.png',
      className: "logo"
    })), external_React_default.a.createElement("div", {
      className: "col-10"
    }, external_React_default.a.createElement("h2", null, get('recovery_sheet_encryption_note', this.state.brand)), external_React_default.a.createElement("p", null, get('recovery_sheet_explain_pgp', this.state.brand)), external_React_default.a.createElement("div", {
      className: "recovery-sheet_description"
    }, external_React_default.a.createElement("h4", null, map.recovery_sheet_backup_data), external_React_default.a.createElement("ul", null, external_React_default.a.createElement("li", null, get('recovery_sheet_backup_server', this.state.brand)), external_React_default.a.createElement("li", null, get('recovery_sheet_backup_local', this.state.brand)), external_React_default.a.createElement("li", null, external_React_default.a.createElement("em", null, map.recovery_sheet_be_aware), ": ", external_React_default.a.createElement("span", null, map.recovery_sheet_data_lost))), external_React_default.a.createElement("h4", null, map.recovery_sheet_recover_data), external_React_default.a.createElement("ul", null, external_React_default.a.createElement("li", null, map.recovery_sheet_unlock_backup), external_React_default.a.createElement("li", null, external_React_default.a.createElement("em", null, map.recovery_sheet_recommendation), ": ", external_React_default.a.createElement("span", null, map.recovery_sheet_keep_safe))), external_React_default.a.createElement("h4", null, map.recovery_sheet_other_contacts), external_React_default.a.createElement("ul", null, external_React_default.a.createElement("li", null, map.recovery_sheet_pgp_compat), external_React_default.a.createElement("li", null, get('recovery_sheet_key_server', this.state.brand)), external_React_default.a.createElement("li", null, get('recovery_sheet_invite_contacts', this.state.brand)), external_React_default.a.createElement("li", null, external_React_default.a.createElement("em", null, map.recovery_sheet_recommendation), ": ", external_React_default.a.createElement("span", null, map.recovery_sheet_trusted_contacts))), external_React_default.a.createElement("h4", null, map.recovery_sheet_other_devices_setup), external_React_default.a.createElement("ul", null, external_React_default.a.createElement("li", null, external_React_default.a.createElement("em", null, map.recovery_sheet_in_general), ": ", external_React_default.a.createElement("span", null, map.recovery_sheet_unknown_third)))), external_React_default.a.createElement("p", null, external_React_default.a.createElement("span", null, get('recovery_sheet_further_info', this.state.brand)), " ", external_React_default.a.createElement("em", {
      className: "gmx-specific"
    }, map.recovery_sheet_provider_inbox), external_React_default.a.createElement("span", {
      className: "gmx-specific"
    }, " > "), external_React_default.a.createElement("em", null, map.recovery_sheet_provider_settings), " > ", external_React_default.a.createElement("em", {
      className: "gmx-specific"
    }, map.recovery_sheet_provider_security), external_React_default.a.createElement("span", {
      className: "gmx-specific"
    }, " > "), external_React_default.a.createElement("em", null, map.recovery_sheet_provider_communication), "."))), external_React_default.a.createElement("section", {
      className: "recovery-sheet_print d-print-none"
    }, external_React_default.a.createElement("img", {
      src: "assets/printer.png"
    }), printButton, external_React_default.a.createElement("img", {
      src: "assets/printer.png"
    }))), external_React_default.a.createElement("footer", {
      className: "recovery-sheet_teaser"
    }, external_React_default.a.createElement("img", {
      src: "assets/lock.png"
    }), external_React_default.a.createElement("h1", null, map.recovery_sheet_header), external_React_default.a.createElement("img", {
      src: "assets/lock.png"
    }))));
  }

}
recoverySheet_RecoverySheet.propTypes = {
  id: prop_types_default.a.string,
  brand: prop_types_default.a.string
};
// CONCATENATED MODULE: ./src/components/recovery-sheet/recoverySheetRoot.js
/**
 * Copyright (C) 2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




document.addEventListener('DOMContentLoaded', init);
mapToLocal();

function init() {
  const query = new URLSearchParams(document.location.search); // component id

  const id = query.get('id') || ''; // brand if any

  const brand = query.get('brand') || ''; // component used as a container (client API)

  const root = document.createElement('div');
  external_ReactDOM_default.a.render(external_React_default.a.createElement(recoverySheet_RecoverySheet, {
    id: id,
    brand: brand
  }), document.body.appendChild(root));
}

/***/ })
/******/ ]);