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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 2 */
/*!*********************************************************************!*\
  !*** ./src/components/install-landing-page/InstallLandingPage.scss ***!
  \*********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3);
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./InstallLandingPage.scss */ 4);

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
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./src/components/install-landing-page/InstallLandingPage.scss ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body{background-image:url(\"data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' d='M0 0h400v400H0z'/%3E%3C/defs%3E%3Cg opacity='.5' fill='none' fill-rule='evenodd'%3E%3Cmask id='b' fill='%23fff'%3E%3Cuse xlink:href='%23a'/%3E%3C/mask%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M47.014 15.299a1.3 1.3 0 1 1 .673 2.511l-1.457.39a1.3 1.3 0 1 1-.672-2.511l1.456-.39zm8.77-32.39a1.3 1.3 0 0 1-.673-2.511l4.604-1.236a1.3 1.3 0 0 1 1.593.92l8.184 30.54a1.3 1.3 0 0 1-.919 1.592l-15.862 4.25a1.3 1.3 0 1 1-.673-2.512l14.606-3.913-7.511-28.029-3.349.899zM41.738 16.712a1.3 1.3 0 1 1 .673 2.512l-4.38 1.173a1.3 1.3 0 0 1-1.592-.92l-8.181-30.54a1.3 1.3 0 0 1 .919-1.592l20.129-5.392a1.3 1.3 0 1 1 .672 2.512L31.105-10.48l7.51 28.03 3.123-.838zM40.362-3.52a1.3 1.3 0 1 1-2.51.673l-.85-3.167a1.3 1.3 0 0 1 .92-1.592l16.745-4.487a1.3 1.3 0 0 1 1.592.92l2.02 7.537a1.3 1.3 0 1 1-2.512.673l-1.683-6.282L39.85-5.43l.511 1.91zm18.791 8.172a1.3 1.3 0 1 1 .673 2.511l-16.745 4.489a1.3 1.3 0 0 1-1.593-.92l-2.353-8.787a1.3 1.3 0 1 1 2.512-.673l2.016 7.532 15.49-4.152zM56.817.955a1.3 1.3 0 1 1 2.511-.673l.464 1.73a1.3 1.3 0 1 1-2.512.672L56.817.955z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M141.53 174.035a1.318 1.318 0 0 1-.096-.033 23.718 23.718 0 0 1-5.89-41.029 1.3 1.3 0 0 1 1.574 2.07 21.118 21.118 0 0 0 5.153 36.495c.033.01.066.022.1.034.285.111.572.214.856.307a1.3 1.3 0 0 1-.812 2.47 20.115 20.115 0 0 1-.886-.314zm12.987-42.774a1.3 1.3 0 0 1 .57-2.537c12.45 2.795 20.455 14.944 18.111 27.488-2.344 12.543-14.197 20.981-26.817 19.09a1.3 1.3 0 0 1 .385-2.571c11.236 1.683 21.789-5.829 23.876-16.997 2.088-11.168-5.04-21.985-16.125-24.473zm-10.852.427a1.3 1.3 0 0 1-.764-2.485c.943-.29 1.903-.521 2.875-.693a1.3 1.3 0 1 1 .451 2.56c-.866.153-1.722.36-2.562.618zm13.517 29.813a1.3 1.3 0 0 1 1.566 2.076c-6.484 4.893-15.706 3.605-20.602-2.877a1.3 1.3 0 1 1 2.075-1.567c4.03 5.336 11.623 6.397 16.96 2.368zm-19.362-8.707a1.3 1.3 0 1 1-2.592.202 14.694 14.694 0 1 1 27.376 6.201 1.3 1.3 0 1 1-2.252-1.3 12.094 12.094 0 1 0-22.532-5.103z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M267.315 201.149a1.3 1.3 0 1 1 2.511.673l-.589 2.196a1.3 1.3 0 1 1-2.511-.673l.589-2.196zm-30.822 2.918a1.3 1.3 0 1 1-2.512-.673l5.711-21.313a1.3 1.3 0 0 1 1.592-.919l30.54 8.183a1.3 1.3 0 0 1 .918 1.592l-1.428 5.33a1.3 1.3 0 1 1-2.511-.672l1.092-4.075-28.028-7.51-5.374 20.057zm28.06 7.387a1.3 1.3 0 1 1 2.512.673l-2.504 9.35a1.3 1.3 0 0 1-1.593.92l-30.541-8.183a1.3 1.3 0 0 1-.92-1.593l1.484-5.53a1.3 1.3 0 0 1 2.511.673l-1.146 4.275 28.03 7.51 2.167-8.095z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M232.591 105.715a1.3 1.3 0 1 1 2.595-.172c.311 4.697-.111 7.463-2.348 11.337a1.3 1.3 0 1 1-2.252-1.3c1.938-3.356 2.286-5.636 2.005-9.865zm-.041-5.938a1.3 1.3 0 1 1 2.583.29c-.038.346-.067.7-.087 1.07a1.3 1.3 0 0 1-2.597-.143c.023-.417.056-.82.1-1.217zm21.036-24.034a1.3 1.3 0 0 1 2.252 1.3c-2.306 3.994-4.492 5.682-9.046 7.863l-.393.188c-4.39 2.102-6.379 3.66-8.654 7.6a24.183 24.183 0 0 0-1.37 2.746 1.3 1.3 0 1 1-2.396-1.011c.441-1.045.948-2.06 1.516-3.038 2.58-4.47 4.96-6.334 9.78-8.642l.394-.188c4.124-1.975 5.923-3.365 7.917-6.818zm6.353 3.668a1.3 1.3 0 0 1 2.251 1.3c-2.305 3.993-4.492 5.682-9.045 7.862l-.394.189c-4.39 2.102-6.378 3.66-8.651 7.596-2.5 4.328-2.949 7.088-2.623 11.947l.055.813c.32 4.786-.089 7.527-2.342 11.43a1.3 1.3 0 1 1-2.251-1.3c1.951-3.38 2.288-5.638 1.999-9.956l-.056-.813c-.357-5.33.174-8.584 2.966-13.42 2.58-4.47 4.96-6.334 9.78-8.642l.394-.189c4.124-1.974 5.923-3.364 7.917-6.817zm-6.892 13.56a1.3 1.3 0 1 1 1.604 2.046c-1.572 1.232-2.933 2.817-4.199 5.01-2.499 4.327-2.948 7.087-2.623 11.945l.055.814c.32 4.786-.088 7.527-2.341 11.43a1.3 1.3 0 0 1-2.252-1.3c1.952-3.38 2.288-5.638 2-9.957l-.056-.813c-.357-5.33.173-8.584 2.966-13.42 1.43-2.476 3.009-4.316 4.846-5.755zm13.244-9.892a1.3 1.3 0 1 1 2.252 1.3c-2.304 3.99-4.491 5.68-9.04 7.859l-.402.193c-.402.193-.672.323-.944.458a1.3 1.3 0 0 1-1.154-2.33c.284-.14.563-.276.975-.473l.403-.193c4.118-1.973 5.918-3.364 7.91-6.814zm-14.862 39.05a1.3 1.3 0 1 1 2.535.576 17.916 17.916 0 0 1-2.078 5.194 1.3 1.3 0 1 1-2.233-1.33 15.316 15.316 0 0 0 1.776-4.44zm21.215-35.383a1.3 1.3 0 1 1 2.251 1.3c-2.305 3.993-4.492 5.682-9.045 7.863l-.394.188c-4.39 2.102-6.378 3.66-8.651 7.597-2.5 4.329-2.95 7.087-2.624 11.945l.055.809c.041.61.066 1.049.084 1.49a1.3 1.3 0 0 1-2.598.102c-.016-.413-.04-.83-.08-1.418l-.055-.809c-.357-5.33.173-8.582 2.966-13.42 2.58-4.469 4.96-6.333 9.78-8.641l.394-.188c4.124-1.975 5.923-3.365 7.917-6.818z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M258.42-2.858a1.3 1.3 0 1 1 1.3-2.252l1.173.678a1.3 1.3 0 0 1-1.3 2.252l-1.174-.678zm-28.277-.001a1.3 1.3 0 0 1-1.3 2.251l-4.533-2.617A1.3 1.3 0 0 1 223.834-5l8.368-14.494a1.3 1.3 0 0 1 1.776-.476l18.183 10.497a1.3 1.3 0 0 1-1.3 2.252l-17.057-9.847-7.068 12.242 3.407 1.968zm35.965 4.44a1.3 1.3 0 1 1 1.3-2.251l6.25 3.608a1.3 1.3 0 0 1 .477 1.776l-8.369 14.495a1.3 1.3 0 0 1-1.776.476L233.093 1.846a1.3 1.3 0 0 1 1.3-2.252l29.771 17.189 7.069-12.243-5.125-2.959z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M258.42 397.142a1.3 1.3 0 1 1 1.3-2.252l1.173.678a1.3 1.3 0 0 1-1.3 2.252l-1.174-.678zm-28.277-.001a1.3 1.3 0 0 1-1.3 2.251l-4.533-2.617a1.3 1.3 0 0 1-.476-1.776l8.368-14.494a1.3 1.3 0 0 1 1.776-.476l18.183 10.497a1.3 1.3 0 0 1-1.3 2.252l-17.057-9.847-7.068 12.242 3.407 1.968zm35.965 4.44a1.3 1.3 0 1 1 1.3-2.251l6.25 3.608a1.3 1.3 0 0 1 .477 1.776l-8.369 14.495a1.3 1.3 0 0 1-1.776.476l-30.897-17.839a1.3 1.3 0 0 1 1.3-2.252l29.771 17.189 7.069-12.243-5.125-2.959z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M135.973 257.053a1.3 1.3 0 1 1-1.838 1.839l-1.066-1.066a1.3 1.3 0 1 1 1.838-1.839l1.066 1.066zm32.436-8.599a1.3 1.3 0 0 1 1.838-1.839l3.372 3.37a1.3 1.3 0 0 1 0 1.839l-22.356 22.358a1.3 1.3 0 0 1-1.838 0l-11.612-11.612a1.3 1.3 0 1 1 1.838-1.839l10.693 10.693 20.517-20.519-2.452-2.45zm-36.298 4.737a1.3 1.3 0 1 1-1.838 1.839l-3.206-3.206a1.3 1.3 0 0 1 0-1.839l22.358-22.356a1.3 1.3 0 0 1 1.838 0l14.734 14.737a1.3 1.3 0 1 1-1.838 1.838l-13.815-13.817-20.52 20.518 2.287 2.286zm16.834-11.307a1.3 1.3 0 1 1-1.838-1.839l2.318-2.318a1.3 1.3 0 0 1 1.838 0l12.258 12.258a1.3 1.3 0 0 1 0 1.839l-5.518 5.518a1.3 1.3 0 1 1-1.838-1.839l4.599-4.598-10.42-10.42-1.399 1.399zm2.318 20.36a1.3 1.3 0 1 1-1.838 1.838l-12.26-12.258a1.3 1.3 0 0 1 0-1.839l6.434-6.432a1.3 1.3 0 1 1 1.838 1.84l-5.514 5.512 11.34 11.338zm2.034-3.873a1.3 1.3 0 1 1 1.838 1.839l-1.266 1.266a1.3 1.3 0 1 1-1.838-1.839l1.266-1.266z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M252.528 285.813a1.3 1.3 0 0 1-1.3 2.252l-1.914-1.104a1.3 1.3 0 0 1 1.3-2.252l1.914 1.104zm4.518 5.611a1.3 1.3 0 0 1 1.3-2.251l16.004 9.24a1.3 1.3 0 0 1 0 2.251l-39.818 22.988a1.3 1.3 0 0 1-1.95-1.125v-6.276a1.3 1.3 0 0 1 2.6 0v4.024l35.918-20.736-14.054-8.115zm-21.864 20.915a1.3 1.3 0 1 1-2.6 0V276.55a1.3 1.3 0 0 1 1.95-1.126l11.232 6.484a1.3 1.3 0 0 1-1.3 2.252l-9.282-5.359v33.537z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M345.285 236.591a1.3 1.3 0 1 1 .172 2.595c-4.697.311-7.463-.111-11.337-2.348a1.3 1.3 0 1 1 1.3-2.252c3.356 1.938 5.636 2.286 9.865 2.005zm5.938-.041a1.3 1.3 0 1 1-.29 2.583 18.75 18.75 0 0 0-1.07-.087 1.3 1.3 0 0 1 .143-2.597c.417.023.82.056 1.217.1zm24.034 21.036a1.3 1.3 0 0 1-1.3 2.252c-3.994-2.306-5.682-4.492-7.863-9.046l-.188-.393c-2.102-4.39-3.66-6.379-7.6-8.654a24.183 24.183 0 0 0-2.746-1.37 1.3 1.3 0 1 1 1.011-2.396c1.045.441 2.06.948 3.038 1.516 4.47 2.58 6.334 4.96 8.642 9.78l.188.394c1.975 4.124 3.365 5.923 6.818 7.917zm-3.668 6.353a1.3 1.3 0 0 1-1.3 2.251c-3.993-2.305-5.682-4.492-7.862-9.045l-.189-.394c-2.102-4.39-3.66-6.378-7.596-8.651-4.328-2.5-7.088-2.949-11.947-2.623l-.813.055c-4.786.32-7.527-.089-11.43-2.342a1.3 1.3 0 1 1 1.3-2.251c3.38 1.951 5.638 2.288 9.956 1.999l.813-.056c5.33-.357 8.584.174 13.42 2.966 4.47 2.58 6.334 4.96 8.642 9.78l.189.394c1.974 4.124 3.364 5.923 6.817 7.917zm-13.56-6.892a1.3 1.3 0 1 1-2.046 1.604c-1.232-1.572-2.817-2.933-5.01-4.199-4.327-2.499-7.087-2.948-11.945-2.623l-.814.055c-4.786.32-7.527-.088-11.43-2.341a1.3 1.3 0 0 1 1.3-2.252c3.38 1.952 5.638 2.288 9.957 2l.813-.056c5.33-.357 8.584.173 13.42 2.966 2.476 1.43 4.316 3.009 5.755 4.846zm9.892 13.244a1.3 1.3 0 1 1-1.3 2.252c-3.99-2.304-5.68-4.491-7.859-9.04l-.193-.402a76.832 76.832 0 0 0-.458-.944 1.3 1.3 0 0 1 2.33-1.154 79.12 79.12 0 0 1 .666 1.378c1.973 4.118 3.364 5.918 6.814 7.91zm-39.05-14.862a1.3 1.3 0 1 1-.576 2.535 17.916 17.916 0 0 1-5.194-2.078 1.3 1.3 0 1 1 1.33-2.233 15.316 15.316 0 0 0 4.44 1.776zm35.383 21.215a1.3 1.3 0 1 1-1.3 2.251c-3.993-2.305-5.682-4.492-7.863-9.045l-.188-.394c-2.102-4.39-3.66-6.378-7.597-8.651-4.329-2.5-7.087-2.95-11.945-2.624l-.809.055c-.61.041-1.049.066-1.49.084a1.3 1.3 0 0 1-.102-2.598c.413-.016.83-.04 1.418-.08l.809-.055c5.33-.357 8.582.173 13.42 2.966 4.469 2.58 6.333 4.96 8.641 9.78l.188.394c1.975 4.124 3.365 5.923 6.818 7.917z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M331.337 154.84a1.3 1.3 0 1 1-2.529.605c-2.617-10.93 2.784-22.198 12.944-27.003 10.159-4.806 22.296-1.834 29.085 7.121a1.3 1.3 0 1 1-2.072 1.571 21.153 21.153 0 0 0-37.428 17.705zm41.228-.457a1.3 1.3 0 1 1 2.54.553 23.751 23.751 0 0 1-44.55 5.37 1.3 1.3 0 1 1 2.336-1.142 21.151 21.151 0 0 0 39.674-4.781zm-.723-11.523a1.3 1.3 0 0 1 2.454-.86c.317.903.58 1.825.788 2.76a1.3 1.3 0 1 1-2.538.564 21.605 21.605 0 0 0-.704-2.464z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M358.61 362.962a1.3 1.3 0 1 1 .673 2.511l-2.197.589a1.3 1.3 0 1 1-.673-2.512l2.197-.588zm-17.938-25.234a1.3 1.3 0 1 1-.673-2.511l21.312-5.71a1.3 1.3 0 0 1 1.593.918l8.182 30.54a1.3 1.3 0 0 1-.919 1.592l-5.33 1.428a1.3 1.3 0 1 1-.673-2.512l4.075-1.091-7.51-28.028-20.057 5.374zm7.632 27.995a1.3 1.3 0 1 1 .674 2.511l-9.35 2.507a1.3 1.3 0 0 1-1.593-.92l-8.183-30.54a1.3 1.3 0 0 1 .92-1.593l5.53-1.48a1.3 1.3 0 0 1 .673 2.51l-4.275 1.145 7.51 28.03 8.094-2.17z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M367.9 48.255a1.3 1.3 0 0 1-2.6.002l-.001-2.21a1.3 1.3 0 0 1 2.6-.001v2.21zm-2.601 6.72a1.3 1.3 0 0 1 2.6 0v18.48a1.3 1.3 0 0 1-1.95 1.125l-39.817-22.99a1.3 1.3 0 0 1 0-2.25l5.435-3.139a1.3 1.3 0 0 1 1.3 2.252l-3.485 2.012 35.917 20.738V54.975zm-29.044-8.478a1.3 1.3 0 1 1-1.3-2.252l30.993-17.894a1.3 1.3 0 0 1 1.95 1.126v12.97a1.3 1.3 0 0 1-2.6 0V29.728l-29.043 16.768z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M167.409 347.285a1.3 1.3 0 1 1-2.595.172c-.311-4.697.111-7.463 2.348-11.337a1.3 1.3 0 1 1 2.252 1.3c-1.938 3.356-2.286 5.636-2.005 9.865zm.041 5.938a1.3 1.3 0 1 1-2.583-.29c.038-.346.067-.7.087-1.07a1.3 1.3 0 0 1 2.597.143c-.023.417-.056.82-.1 1.217zm-21.036 24.034a1.3 1.3 0 0 1-2.252-1.3c2.306-3.994 4.492-5.682 9.046-7.863l.393-.188c4.39-2.102 6.379-3.66 8.654-7.6.514-.886.972-1.803 1.37-2.746a1.3 1.3 0 1 1 2.396 1.011 26.768 26.768 0 0 1-1.516 3.038c-2.58 4.47-4.96 6.334-9.78 8.642l-.394.188c-4.124 1.975-5.923 3.365-7.917 6.818zm-6.353-3.668a1.3 1.3 0 0 1-2.251-1.3c2.305-3.993 4.492-5.682 9.045-7.862l.394-.189c4.39-2.102 6.378-3.66 8.651-7.596 2.5-4.328 2.949-7.088 2.623-11.947l-.055-.813c-.32-4.786.089-7.527 2.342-11.43a1.3 1.3 0 1 1 2.251 1.3c-1.951 3.38-2.288 5.638-1.999 9.956l.056.813c.357 5.33-.174 8.584-2.966 13.42-2.58 4.47-4.96 6.334-9.78 8.642l-.394.189c-4.124 1.974-5.923 3.364-7.917 6.817zm6.892-13.56a1.3 1.3 0 1 1-1.604-2.046c1.572-1.232 2.933-2.817 4.199-5.01 2.499-4.327 2.948-7.087 2.623-11.945l-.055-.814c-.32-4.786.088-7.527 2.341-11.43a1.3 1.3 0 0 1 2.252 1.3c-1.952 3.38-2.288 5.638-2 9.957l.056.813c.357 5.33-.173 8.584-2.966 13.42-1.43 2.476-3.009 4.316-4.846 5.755zm-13.244 9.892a1.3 1.3 0 1 1-2.252-1.3c2.304-3.99 4.491-5.68 9.04-7.859l.402-.193c.402-.193.672-.323.944-.458a1.3 1.3 0 0 1 1.154 2.33 79.12 79.12 0 0 1-.975.473l-.403.193c-4.118 1.973-5.918 3.364-7.91 6.814zm14.862-39.05a1.3 1.3 0 1 1-2.535-.576 17.916 17.916 0 0 1 2.078-5.194 1.3 1.3 0 1 1 2.233 1.33 15.316 15.316 0 0 0-1.776 4.44zm-21.215 35.383a1.3 1.3 0 1 1-2.251-1.3c2.305-3.993 4.492-5.682 9.045-7.863l.394-.188c4.39-2.102 6.378-3.66 8.651-7.597 2.5-4.329 2.95-7.087 2.624-11.945l-.055-.809c-.041-.61-.066-1.049-.084-1.49a1.3 1.3 0 0 1 2.598-.102c.016.413.04.83.08 1.418l.055.809c.357 5.33-.173 8.582-2.966 13.42-2.58 4.469-4.96 6.333-9.78 8.641l-.394.188c-4.124 1.975-5.923 3.365-7.917 6.818z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M162.436 54.776a1.3 1.3 0 0 1-2.252-1.299l1.104-1.914a1.3 1.3 0 0 1 2.252 1.3l-1.104 1.913zm-5.612 4.519a1.3 1.3 0 0 1 2.252 1.3l-9.24 16.004a1.3 1.3 0 0 1-2.252 0L124.596 36.78a1.3 1.3 0 0 1 1.126-1.95h6.276a1.3 1.3 0 0 1 0 2.6h-4.024l20.736 35.918 8.114-14.054zM135.91 37.43a1.3 1.3 0 1 1 0-2.6h35.788a1.3 1.3 0 0 1 1.126 1.95l-6.484 11.232a1.3 1.3 0 0 1-2.252-1.3l5.359-9.282H135.91z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M44.893 195.83a1.3 1.3 0 1 1-2.251-1.3l.678-1.175a1.3 1.3 0 0 1 2.251 1.3l-.678 1.174zm0 28.276a1.3 1.3 0 0 1 2.25 1.3l-2.617 4.533a1.3 1.3 0 0 1-1.775.476l-14.495-8.369a1.3 1.3 0 0 1-.476-1.775l10.498-18.183a1.3 1.3 0 0 1 2.251 1.3l-9.847 17.057 12.243 7.068 1.967-3.407zm4.44-35.966a1.3 1.3 0 1 1-2.252-1.3l3.609-6.25a1.3 1.3 0 0 1 1.776-.476l14.494 8.369a1.3 1.3 0 0 1 .476 1.775l-17.839 30.898a1.3 1.3 0 0 1-2.251-1.3l17.188-29.772-12.243-7.068-2.958 5.124z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M51.59 323.912a1.3 1.3 0 1 1 .606 2.528c-10.93 2.617-22.197-2.784-27.003-12.943-4.806-10.16-1.834-22.296 7.122-29.086a1.3 1.3 0 1 1 1.57 2.072 21.153 21.153 0 0 0 17.706 37.429zm-.456-41.228a1.3 1.3 0 1 1 .553-2.54 23.751 23.751 0 0 1 5.37 44.55 1.3 1.3 0 1 1-1.141-2.337 21.151 21.151 0 0 0-4.782-39.673zm-11.522.722a1.3 1.3 0 0 1-.861-2.453c.903-.317 1.825-.58 2.76-.788a1.3 1.3 0 1 1 .564 2.538c-.834.185-1.657.42-2.463.703z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M54.715 121.409a1.3 1.3 0 1 1-.172-2.595c4.697-.311 7.463.111 11.337 2.348a1.3 1.3 0 1 1-1.3 2.252c-3.356-1.938-5.636-2.286-9.865-2.005zm-5.938.041a1.3 1.3 0 1 1 .29-2.583c.346.038.7.067 1.07.087a1.3 1.3 0 0 1-.143 2.597c-.417-.023-.82-.056-1.217-.1zm-24.034-21.036a1.3 1.3 0 0 1 1.3-2.252c3.994 2.306 5.682 4.492 7.863 9.046l.188.393c2.102 4.39 3.66 6.379 7.6 8.654.886.514 1.803.972 2.746 1.37a1.3 1.3 0 1 1-1.011 2.396 26.768 26.768 0 0 1-3.038-1.516c-4.47-2.58-6.334-4.96-8.642-9.78l-.188-.394c-1.975-4.124-3.365-5.923-6.818-7.917zm3.668-6.353a1.3 1.3 0 0 1 1.3-2.251c3.993 2.305 5.682 4.492 7.862 9.045l.189.394c2.102 4.39 3.66 6.378 7.596 8.651 4.328 2.5 7.088 2.949 11.947 2.623l.813-.055c4.786-.32 7.527.089 11.43 2.342a1.3 1.3 0 1 1-1.3 2.251c-3.38-1.951-5.638-2.288-9.956-1.999l-.813.056c-5.33.357-8.584-.174-13.42-2.966-4.47-2.58-6.334-4.96-8.642-9.78l-.189-.394c-1.974-4.124-3.364-5.923-6.817-7.917zm13.56 6.892a1.3 1.3 0 1 1 2.046-1.604c1.232 1.572 2.817 2.933 5.01 4.199 4.327 2.499 7.087 2.948 11.945 2.623l.814-.055c4.786-.32 7.527.088 11.43 2.341a1.3 1.3 0 0 1-1.3 2.252c-3.38-1.952-5.638-2.288-9.957-2l-.813.056c-5.33.357-8.584-.173-13.42-2.966-2.476-1.43-4.316-3.009-5.755-4.846zM32.079 87.71a1.3 1.3 0 1 1 1.3-2.252c3.99 2.304 5.68 4.491 7.859 9.04l.193.402c.193.402.323.672.458.944a1.3 1.3 0 0 1-2.33 1.154 79.12 79.12 0 0 1-.473-.975l-.193-.403c-1.973-4.118-3.364-5.918-6.814-7.91zm39.05 14.862a1.3 1.3 0 1 1 .576-2.535 17.916 17.916 0 0 1 5.194 2.078 1.3 1.3 0 1 1-1.33 2.233 15.316 15.316 0 0 0-4.44-1.776zM35.746 81.356a1.3 1.3 0 1 1 1.3-2.251c3.993 2.305 5.682 4.492 7.863 9.045l.188.394c2.102 4.39 3.66 6.378 7.597 8.651 4.329 2.5 7.087 2.95 11.945 2.624l.809-.055c.61-.041 1.049-.066 1.49-.084a1.3 1.3 0 0 1 .102 2.598c-.413.016-.83.04-1.418.08l-.809.055c-5.33.357-8.582-.173-13.42-2.966-4.469-2.58-6.333-4.96-8.641-9.78l-.188-.394c-1.975-4.124-3.365-5.923-6.818-7.917z' fill='%2385C9AF'/%3E%3C/g%3E%3Cg mask='url(%23b)' fill-rule='nonzero'%3E%3Cpath d='M47.014 415.299a1.3 1.3 0 1 1 .673 2.511l-1.457.39a1.3 1.3 0 1 1-.672-2.511l1.456-.39zm8.77-32.39a1.3 1.3 0 0 1-.673-2.511l4.604-1.236a1.3 1.3 0 0 1 1.593.92l8.184 30.54a1.3 1.3 0 0 1-.919 1.592l-15.862 4.25a1.3 1.3 0 1 1-.673-2.512l14.606-3.913-7.511-28.029-3.349.899zm-14.046 33.803a1.3 1.3 0 1 1 .673 2.512l-4.38 1.173a1.3 1.3 0 0 1-1.592-.92l-8.181-30.54a1.3 1.3 0 0 1 .919-1.592l20.129-5.392a1.3 1.3 0 1 1 .672 2.512l-18.873 5.055 7.51 28.03 3.123-.838zm-1.376-20.232a1.3 1.3 0 1 1-2.51.673l-.85-3.167a1.3 1.3 0 0 1 .92-1.592l16.745-4.487a1.3 1.3 0 0 1 1.592.92l2.02 7.537a1.3 1.3 0 1 1-2.512.673l-1.683-6.282-14.233 3.814.511 1.91zm18.791 8.172a1.3 1.3 0 1 1 .673 2.511l-16.745 4.489a1.3 1.3 0 0 1-1.593-.92l-2.353-8.787a1.3 1.3 0 1 1 2.512-.673l2.016 7.532 15.49-4.152zm-2.336-3.697a1.3 1.3 0 1 1 2.511-.673l.464 1.73a1.3 1.3 0 1 1-2.512.672l-.463-1.729z' fill='%2385C9AF'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\");background-color:#caebdd;background-repeat:repeat}#help-text{position:absolute;top:50px;right:6%;width:250px;font-family:CeraRoundPro,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1.09375rem;font-weight:500;color:#617a70}.jumbotron{background-color:#fff;box-shadow:0 5px 15px 0 rgba(64,64,64,0.2),0 0 2px 0 rgba(64,64,64,0.2)}@media (min-width: 768px){.jumbotron{padding:4rem 6rem}.jumbotron img{width:336px}}@media (max-width: 991.98px){.jumbotron{padding:2rem 3rem}.jumbotron img{width:200px}}@media (min-width: 768px){#arrow{padding-right:5rem;padding-top:2rem;padding-left:2rem;padding-bottom:5.5rem}#arrow img{height:400px}}@media (max-width: 991.98px){#arrow{padding-right:4rem;padding-top:2rem;padding-left:1.5rem;padding-bottom:3rem}#arrow img{height:200px}}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 5 */
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
/* 6 */
/*!*******************************************************************************!*\
  !*** ./src/components/install-landing-page/installLandingPage.js + 1 modules ***!
  \*******************************************************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with external "React" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "ReactDOM" (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(1);
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
// EXTERNAL MODULE: ./src/components/install-landing-page/InstallLandingPage.scss
var InstallLandingPage = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/install-landing-page/installLandingPage.js
/**
 * Copyright (C) 2017 Mailvelope GmbH
 * Licensed under the GNU Affero General Public License version 3
 */




register(['install_landing_page_hint']);
mapToLocal();
document.addEventListener('DOMContentLoaded', init);

function init() {
  const root = document.createElement('div');
  external_ReactDOM_default.a.render(external_React_default.a.createElement(installLandingPage_InstallLandingPage, null), document.body.appendChild(root));
}

function installLandingPage_InstallLandingPage() {
  return external_React_default.a.createElement("main", {
    role: "main"
  }, external_React_default.a.createElement("div", {
    id: "help-text"
  }, map.install_landing_page_hint), external_React_default.a.createElement("div", {
    className: "d-flex d-flex justify-content-center"
  }, external_React_default.a.createElement("div", {
    className: "w-100"
  }), external_React_default.a.createElement("div", {
    className: "jumbotron align-self-end mb-0 fle"
  }, external_React_default.a.createElement("img", {
    src: "../../img/Mailvelope/logo.svg",
    width: "336",
    alt: ""
  })), external_React_default.a.createElement("div", {
    id: "arrow",
    className: "w-100"
  }, external_React_default.a.createElement("img", {
    src: "../../img/Mailvelope/corner-arrow.svg",
    width: "100%",
    alt: ""
  }))));
}

/***/ })
/******/ ]);