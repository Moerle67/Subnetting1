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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/*! exports used: Component, default */
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
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ 4)();
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
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
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



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 5);

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
/* 5 */
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
/* 6 */
/*!****************************************************!*\
  !*** ./src/components/action-menu/ActionMenu.scss ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 7);
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./ActionMenu.scss */ 8);

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
/* 7 */
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
/* 8 */
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/components/action-menu/ActionMenu.scss ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 9);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body{padding:0px !important;margin:0px !important;width:100%}.action-menu .action-menu-wrapper{border:0;width:230px}.action-menu .action-menu-wrapper .action-menu-header{padding:0.75rem;background-color:transparent}.action-menu .action-menu-wrapper .action-menu-header .nav-right a{color:inherit}.action-menu .action-menu-wrapper .action-menu-header .nav-right a:last-child{margin-left:1rem}.action-menu .action-menu-wrapper .action-menu-content p{font-size:0.75rem;margin-bottom:0}.action-menu .action-menu-wrapper .action-menu-content .action-menu-item{position:relative;border:0;padding:0.75rem;cursor:pointer}.action-menu .action-menu-wrapper .action-menu-content .action-menu-item .action-menu-item-title{margin-bottom:0.25rem}.action-menu .action-menu-wrapper .action-menu-content .action-menu-item .action-menu-item-title img{width:24px;height:24px;margin-right:0.375rem}.action-menu .action-menu-wrapper .action-menu-content .action-menu-item .action-menu-item-title strong{font-weight:700}.action-menu .action-menu-wrapper .action-menu-content .action-menu-item ::after{content:' ';position:absolute;bottom:1px;left:50%;width:90%;height:1px;background-color:#f0f0f0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.action-menu .action-menu-wrapper .action-menu-footer{border-top:0;padding:0.75rem;background-color:transparent}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 9 */
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
/* 10 */
/*!***************************************************************!*\
  !*** ./src/components/action-menu/actionMenu.js + 10 modules ***!
  \***************************************************************/
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
var external_ReactDOM_ = __webpack_require__(3);
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
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/components/action-menu/components/ActionMenuBase.js
/**
 * Copyright (C) 2017-2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */



register(['action_menu_dashboard_label', 'action_menu_dashboard_description', 'action_menu_keyring_label', 'action_menu_keyring_description', 'action_menu_file_encryption_label', 'action_menu_file_encryption_description', 'action_menu_review_security_logs_label', 'action_menu_review_security_logs_description', 'action_menu_advanced_options', 'action_menu_primary_menu_aria_label', 'action_menu_reload_extension_scripts', 'action_menu_activate_current_tab']);
function ActionMenuBase(props) {
  return external_React_default.a.createElement(external_React_default.a.Fragment, null, external_React_default.a.createElement("div", {
    className: "action-menu-content list-group list-group-flush",
    role: "menu",
    "aria-label": map.action_menu_primary_menu_aria_label
  }, external_React_default.a.createElement("a", {
    className: "action-menu-item list-group-item list-group-item-action",
    id: "dashboard",
    role: "menuitem",
    onClick: props.onMenuItemClickHandler
  }, external_React_default.a.createElement("div", {
    className: "action-menu-item-title d-flex align-items-center"
  }, external_React_default.a.createElement("img", {
    src: "../../img/Mailvelope/dashboard.svg",
    role: "presentation"
  }), " ", external_React_default.a.createElement("strong", null, map.action_menu_dashboard_label)), external_React_default.a.createElement("p", null, map.action_menu_dashboard_description)), external_React_default.a.createElement("a", {
    className: "action-menu-item list-group-item list-group-item-action",
    id: "manage-keys",
    role: "menuitem",
    onClick: props.onMenuItemClickHandler
  }, external_React_default.a.createElement("div", {
    className: "action-menu-item-title d-flex align-items-center"
  }, external_React_default.a.createElement("img", {
    src: "../../img/Mailvelope/keyring.svg",
    role: "presentation"
  }), " ", external_React_default.a.createElement("strong", null, map.action_menu_keyring_label)), external_React_default.a.createElement("p", null, map.action_menu_keyring_description)), external_React_default.a.createElement("a", {
    className: "action-menu-item list-group-item list-group-item-action",
    id: "encrypt-file",
    role: "menuitem",
    onClick: props.onMenuItemClickHandler
  }, external_React_default.a.createElement("div", {
    className: "action-menu-item-title d-flex align-items-center"
  }, external_React_default.a.createElement("img", {
    src: "../../img/Mailvelope/encryption.svg",
    role: "presentation"
  }), " ", external_React_default.a.createElement("strong", null, map.action_menu_file_encryption_label)), external_React_default.a.createElement("p", null, map.action_menu_file_encryption_description)), external_React_default.a.createElement("a", {
    className: "action-menu-item list-group-item list-group-item-action",
    id: "security-logs",
    role: "menuitem",
    onClick: props.onMenuItemClickHandler
  }, external_React_default.a.createElement("div", {
    className: "action-menu-item-title d-flex align-items-center"
  }, external_React_default.a.createElement("img", {
    src: "../../img/Mailvelope/clipboard.svg",
    role: "presentation"
  }), " ", external_React_default.a.createElement("strong", null, map.action_menu_review_security_logs_label)), external_React_default.a.createElement("p", null, map.action_menu_review_security_logs_description))), external_React_default.a.createElement("div", {
    className: "action-menu-footer card-footer"
  }, external_React_default.a.createElement("button", {
    type: "button",
    onClick: props.onMenuItemClickHandler,
    id: "reload-extension",
    className: "btn btn-sm btn-secondary btn-block"
  }, external_React_default.a.createElement("span", {
    className: "icon icon-refresh",
    "aria-hidden": "true"
  }), " ", map.action_menu_reload_extension_scripts), external_React_default.a.createElement("button", {
    type: "button",
    onClick: props.onMenuItemClickHandler,
    id: "activate-tab",
    className: "btn btn-sm btn-secondary btn-block"
  }, external_React_default.a.createElement("span", {
    className: "icon icon-add",
    "aria-hidden": "true"
  }), " ", map.action_menu_activate_current_tab)));
}
ActionMenuBase.propTypes = {
  onMenuItemClickHandler: prop_types_default.a.func
};
// CONCATENATED MODULE: ./src/components/util/Trans.js


function Trans(props) {
  return external_React_default.a.createElement("span", null, props.id.split(/(<\d>.*?<\/\d>)/).map(value => {
    const tags = value.match(/(<(\d)>(.*?)<\/\d>)/);

    if (tags) {
      const comp = props.components[tags[2]];
      return external_React_default.a.cloneElement(comp, null, comp.props.children || tags[3]);
    } else {
      return value;
    }
  }));
}
Trans.propTypes = {
  id: prop_types_default.a.string,
  components: prop_types_default.a.array
};
// CONCATENATED MODULE: ./src/components/action-menu/components/ActionMenuSetup.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




register(['action_menu_configure_mailvelope', 'action_menu_setup_menu_aria_label', 'action_menu_setup_start_label']);
function ActionMenuSetup(props) {
  return external_React_default.a.createElement(external_React_default.a.Fragment, null, external_React_default.a.createElement("div", {
    className: "action-menu-content card-body",
    role: "menu",
    "aria-label": map.action_menu_setup_menu_aria_label
  }, external_React_default.a.createElement("img", {
    src: "../../../img/Mailvelope/seal.svg",
    className: " mx-auto d-block mb-3",
    alt: "..."
  }), external_React_default.a.createElement("p", null, external_React_default.a.createElement(Trans, {
    id: map.action_menu_configure_mailvelope,
    components: [external_React_default.a.createElement("strong", {
      key: "0"
    })]
  }))), external_React_default.a.createElement("div", {
    className: "action-menu-footer card-footer text-center pt-1 pb-4"
  }, external_React_default.a.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    id: "setup-keys",
    role: "button",
    onClick: props.onMenuItemClickHandler
  }, map.action_menu_setup_start_label)));
}
ActionMenuSetup.propTypes = {
  onMenuItemClickHandler: prop_types_default.a.func
};
// CONCATENATED MODULE: ./src/components/action-menu/components/ActionMenuNewBGSetup.js
/**
 * Copyright (C) 2019 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */



register(['action_menu_setup_new_bg_description', 'action_menu_setup_menu_aria_label', 'action_menu_setup_start_label']);
function ActionMenuNewBGSetup(props) {
  return external_React_default.a.createElement(external_React_default.a.Fragment, null, external_React_default.a.createElement("div", {
    className: "action-menu-content card-body",
    role: "menu",
    "aria-label": map.action_menu_setup_menu_aria_label
  }, external_React_default.a.createElement("img", {
    src: "../../../img/Mailvelope/new_bg.svg",
    className: " mx-auto d-block mb-3",
    alt: "..."
  }), external_React_default.a.createElement("p", null, map.action_menu_setup_new_bg_description)), external_React_default.a.createElement("div", {
    className: "action-menu-footer card-footer text-center pt-1 pb-4"
  }, external_React_default.a.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    id: "setup-new-bg",
    role: "button",
    onClick: props.onMenuItemClickHandler
  }, map.action_menu_setup_start_label)));
}
ActionMenuNewBGSetup.propTypes = {
  onMenuItemClickHandler: prop_types_default.a.func
};
// EXTERNAL MODULE: ./src/components/action-menu/ActionMenu.scss
var ActionMenu = __webpack_require__(6);

// CONCATENATED MODULE: ./src/components/action-menu/components/ActionMenuWrapper.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */







register(['action_menu_help', 'action_menu_all_options']);
mapToLocal();

class ActionMenuWrapper_ActionMenuWrapper extends external_React_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isSetupDone: true,
      isBGCustomized: true
    };
    this.port = EventHandler_EventHandler.connect('menu-59edbbeb9affc4004a916276');
  }

  componentDidMount() {
    this.init();
  }

  async init() {
    const {
      isSetupDone
    } = await this.port.send('get-is-setup-done');
    const {
      isBGCustomized
    } = await this.port.send('get-is-bg-customized');
    this.setState({
      isSetupDone,
      isBGCustomized
    });
  }

  onMenuItemClick(e) {
    const itemClicked = e.currentTarget;

    if (itemClicked === '' || itemClicked.id === '') {
      return false;
    }

    this.port.emit('browser-action', {
      action: itemClicked.id
    });
    this.hide();
  }

  hide() {
    window.close();
  }

  render() {
    let actionMenuContent = null;

    if (!this.state.isSetupDone) {
      actionMenuContent = external_React_default.a.createElement(ActionMenuSetup, {
        onMenuItemClickHandler: e => this.onMenuItemClick(e)
      });
    } else if (!this.state.isBGCustomized) {
      actionMenuContent = external_React_default.a.createElement(ActionMenuNewBGSetup, {
        onMenuItemClickHandler: e => this.onMenuItemClick(e)
      });
    } else {
      actionMenuContent = external_React_default.a.createElement(ActionMenuBase, {
        onMenuItemClickHandler: e => this.onMenuItemClick(e)
      });
    }

    return external_React_default.a.createElement("div", {
      className: `action-menu ${this.state.isSetupDone ? '' : 'action-menu-setup'}`
    }, external_React_default.a.createElement("div", {
      className: "action-menu-wrapper card"
    }, external_React_default.a.createElement("div", {
      className: "action-menu-header card-header d-flex"
    }, external_React_default.a.createElement("img", {
      src: "../../img/Mailvelope/logo.svg",
      width: "111",
      height: "20",
      className: "d-inline-block mr-auto",
      alt: ""
    }), external_React_default.a.createElement("div", {
      className: "nav-right"
    }, this.state.isSetupDone && this.state.isBGCustomized && external_React_default.a.createElement("a", {
      id: "options",
      href: "#",
      onClick: e => this.onMenuItemClick(e),
      tabIndex: "0",
      title: map.action_menu_all_options
    }, external_React_default.a.createElement("span", {
      className: "icon icon-settings",
      "aria-hidden": "true"
    })), external_React_default.a.createElement("a", {
      href: "https://www.mailvelope.com/faq",
      target: "_blank",
      rel: "noreferrer noopener",
      tabIndex: "0",
      title: map.action_menu_help
    }, external_React_default.a.createElement("span", {
      className: "icon icon-help",
      "aria-hidden": "true"
    })))), actionMenuContent));
  }

}

/* harmony default export */ var components_ActionMenuWrapper = (ActionMenuWrapper_ActionMenuWrapper);
// CONCATENATED MODULE: ./src/components/action-menu/actionMenu.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */



document.addEventListener('DOMContentLoaded', init);

function init() {
  const root = document.createElement('div');
  external_ReactDOM_default.a.render(external_React_default.a.createElement(components_ActionMenuWrapper, null), document.body.appendChild(root));
}

/***/ })
/******/ ]);