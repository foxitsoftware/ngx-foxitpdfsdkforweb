(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("UIExtension"));
	else if(typeof define === 'function' && define.amd)
		define(["UIExtension"], factory);
	else if(typeof exports === 'object')
		exports["MultiMediaAddon"] = factory(require("UIExtension"));
	else
		root["MultiMediaAddon"] = factory(root["UIExtension"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_UIExtension__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./uix-addons/multi-media/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/art-template/lib/compile/runtime.js":
/*!**********************************************************!*\
  !*** ./node_modules/art-template/lib/compile/runtime.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/*! art-template@runtime | https://github.com/aui/art-template */

var globalThis = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

var runtime = Object.create(globalThis);
var ESCAPE_REG = /["&'<>]/;

/**
 * 编码模板输出的内容
 * @param  {any}        content
 * @return {string}
 */
runtime.$escape = function (content) {
    return xmlEscape(toString(content));
};

/**
 * 迭代器，支持数组与对象
 * @param {array|Object} data
 * @param {function}     callback
 */
runtime.$each = function (data, callback) {
    if (Array.isArray(data)) {
        for (var i = 0, len = data.length; i < len; i++) {
            callback(data[i], i);
        }
    } else {
        for (var _i in data) {
            callback(data[_i], _i);
        }
    }
};

// 将目标转成字符
function toString(value) {
    if (typeof value !== 'string') {
        if (value === undefined || value === null) {
            value = '';
        } else if (typeof value === 'function') {
            value = toString(value.call(value));
        } else {
            value = JSON.stringify(value);
        }
    }

    return value;
}

// 编码 HTML 内容
function xmlEscape(content) {
    var html = '' + content;
    var regexResult = ESCAPE_REG.exec(html);
    if (!regexResult) {
        return content;
    }

    var result = '';
    var i = void 0,
        lastIndex = void 0,
        char = void 0;
    for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
        switch (html.charCodeAt(i)) {
            case 34:
                char = '&#34;';
                break;
            case 38:
                char = '&#38;';
                break;
            case 39:
                char = '&#39;';
                break;
            case 60:
                char = '&#60;';
                break;
            case 62:
                char = '&#62;';
                break;
            default:
                continue;
        }

        if (lastIndex !== i) {
            result += html.substring(lastIndex, i);
        }

        lastIndex = i + 1;
        result += char;
    }

    if (lastIndex !== i) {
        return result + html.substring(lastIndex, i);
    } else {
        return result;
    }
}

module.exports = runtime;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/art-template/lib/runtime.js":
/*!**************************************************!*\
  !*** ./node_modules/art-template/lib/runtime.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./compile/runtime */ "./node_modules/art-template/lib/compile/runtime.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./uix-addons/multi-media/scss/index.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader!./uix-addons/multi-media/scss/index.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fv__icon-multi-media {\n    background-image: url(" + escape(__webpack_require__(/*! ../assets/multi-media.png */ "./uix-addons/multi-media/assets/multi-media.png")) + ");\n    background-repeat: no-repeat;\n    background-position: center;\n} \n.fv__cursor-cross{\n    cursor: crosshair;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
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
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./uix-addons/multi-media/Events.js":
/*!******************************************!*\
  !*** ./uix-addons/multi-media/Events.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    addSquareArea: "add-square-area"
};

/***/ }),

/***/ "./uix-addons/multi-media/addon.info.json":
/*!************************************************!*\
  !*** ./uix-addons/multi-media/addon.info.json ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


        module.exports = null;
    

/***/ }),

/***/ "./uix-addons/multi-media/assets/multi-media.png":
/*!*******************************************************!*\
  !*** ./uix-addons/multi-media/assets/multi-media.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;charset=utf-8;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAYQWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA0LTE2VDE0OjUzOjI1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTE2VDE0OjUzOjI1KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNC0xNlQxNDo1MzoyNSswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmYWZmM2NlOC1hNTI4LTFlNDktYTA4ZS1iYjgyNjY5OTQxOWUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplMTI3ZDQ5NC0xNmQ5LTY4NGYtODk5ZC0xMWMzNDc1MDYyMzciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYjAxZDljOS1hZTJiLWNhNDMtODEyYi1hZmYyNzU2NmViOWIiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYjAxZDljOS1hZTJiLWNhNDMtODEyYi1hZmYyNzU2NmViOWIiIHN0RXZ0OndoZW49IjIwMTktMDQtMTZUMTQ6NTM6MjUrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmFmZjNjZTgtYTUyOC0xZTQ5LWEwOGUtYmI4MjY2OTk0MTllIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTE2VDE0OjUzOjI1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPkNGOEU3MUM0RjEyNzA0Rjc4MDVGRUI4NDc5MERFRTcxPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjE2OWQ1ZDk0LWRjMTktMTFlNy05ZGU4LWYwNDUwNDE1YWE1NjwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MWFmYzFhOC00MmNlLTExNGMtOTUwNC0wNmQzMzAzZjhiMTg8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ODdlYWYwZWItYjllOS04MzQwLTkyNGMtM2Y4ZmQwYmY2MDk1PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjk1OTQwMDlmLWZiMTAtNjk0MS1iMjUwLWM2MGVmYzQwNzI1NDwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjMDUwNTY3MC05NjFjLTY1NDktYTE2My1hYjc3MDk4ZGQzMTM8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjAxNUQxMTlBMEI0NTExRTk5N0ZCOUJCMjE4MkQ1OTg4PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDowMjJDMzY2MEUxNzNFNjExOTYxNkQwNkUyMUYxRUU5RTwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MDk3RTIxNkRGMEZBMTFFN0I4OUNDQzRERDk3RUJENDA8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjEyREZBQzAyMjJBODExRTk4MjM3RDcxRDc5RDQ3M0U2PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDoxMzExNEJGRjgzNDYxMUU4QjMxRUY2RkZBRTRDOTVBQjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MTMzMDBBN0NGMEZBMTFFNzhCMTU5NTVEOTQ3OUY1QUE8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjFBQjdFRUI4RjY3QjExRTdBQjRERTIwNjI4NkREQ0MzPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDoxQ0RBNDI2RkYwRkExMUU3ODBERThGNzNEOUM5QzVCNjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MUZBOUYzMTNEMUQ1MTFFOEFCQjBCNDc1OUI0RDMxMkU8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjIzQjdBMUQ3RjVENzExRTc5QjYxRkQ4REJEMERFNjQ0PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDoyNDNGRDdEQzBCNDQxMUU5OTk4Q0VDNTM5MjVFQzE3NDwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MjQ1OUI3RjcyM0E5MTFFOTlGRTY4MEYxM0VBMEE2QjU8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjJFOUJBODc2RjZEQUU3MTFBQUI2RUQzRUIwMTk1MTAxPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDozMDRBNDM0MzA0QTQxMUU4QkQ4QUE2MDY2QTUwNjNGQjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MzE5QkE4NzZGNkRBRTcxMUFBQjZFRDNFQjAxOTUxMDE8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjMxRDY3QjI0MDRDNjExRThBMDNFRDkwM0QxNUU3MjE5PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDozMkQ4NDE0NkQxMUUxMUU4OUNGMUYyNTFBMUZFQjJGMzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MzRGM0NGNEUwN0U1MTFFOEI0NTBBRTFFRThFMUI3QkE8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjM3OEU5QzZBOURENEUzMTE4MDEwQkZGNUE2NUVBMkFBPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDozOTYzREQ2MjA0QzYxMUU4ODhCOEU1OEM1REIwODM0RTwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MzljNzI3OWUtNTFjMi0zOTRlLTgwOWItNWQzMjAxNzYwODU0PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo0MDU1Mzg0QzAxQzIxMUU5OUM4MkMzQzhGODkyMDBGQTwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6NDZBRkM4MTRERkQ5MTFFNzkwOTA5MzRGNjc0ODYwQjU8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjQ4MzU5NjVFMDcyOTExRTlCNjU0QzBDNDk1QUVDN0Y0PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo0ODk4NkI4ODIyRTcxMUU5QTMzRENFN0I0QzcwMzQxNzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6NEYyMTMxMzVFOUMwMTFFNUE3QjJGOTNDNUE3NzE1MzI8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjUwRENEQ0MzRjExNDExRTc5MTZEQUQyNjZENUQ1NzRBPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo1NDAwNDBCNzE1NzQxMUU5QTVFNUNBMDdBREJDQTRBODwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6NUI3NkQwMjcwNERFMTFFOEFGNTlFOTNDNzAzMUIzOTk8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjYxQUQzNUVDNERERUU3MTFBQzY1Q0RGOTgxMzAzMzkxPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo2NjE0Q0ZBQTNCMDExMUU5QjFFNDlGNkQyMjkwOTVERTwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6NjY3NzIxQTEwNERFMTFFODgxNjNCOTlGMkYxQzM0RkI8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjY4MzhDQ0U0QjcwMUU0MTE5MTM3RDRFREQyQUNBOUZGPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo2REREMzNGQjA0REUxMUU4QjJGMkM5QTlDNjg2MDE5RjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6NkVCNTM0NzJGNjdCMTFFN0I4MDRGRDMzOTVFRjQ2QTg8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjZiZTMyZWE0LWZkMzctODk0My05MThlLTk0YWJhN2RhMjAyNjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6NzczNjMzM0UwNERFMTFFODkxNjlDMjZFQThFOTQzRUI8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjdDOEM4RDUwNjBEQUU3MTFCMjkwQkJEQzlGNUJGQzU2PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo3RTE2NjE2MUYxRjQxMUU3Qjg3MzkwRTc0OTM1NTc3MzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6ODAyNDBCQzFGNUQyMTFFNzk0M0VCNkQxMTkyOENBRTM8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjgxNjhGQTE2OTlEMEUzMTFCQjlBOUQ2RTlEN0NDNjU4PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo4MjBDNDgyREU1NjExMUU3ODdERjg4NzU1OTdBRjU2QTwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6ODNBOUI5NEYzQzAzMTFFOUJCOTFGOTAwRjNFRjNCMjc8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjhGRTA4NTY1REMxNjExRTdCMjM5QTI5NEM5Q0RBNTMxPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo4ZTBjYWRhYi0wNTZiLWRlNDctOGU0NC0zZjVmYzQ4ZmM2MTc8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjkwQ0Q0QkQ3MDlBMTExRTlBRjA0Qzc4QjE4MUMyM0NGPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo5MkQ3MTNCMTAzNzUxMUU5ODYwMEIzODJCMUI4MTI3NDwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6OUQ4MjlCQkFGOUVEMTFFOEIwRjJFRTRBMkY2Q0E5MUY8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjlERkZBQTA3RjVEMjExRTdCOUUxRUUxNzRDNTAwNkVDPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpBOUIzNjMzMkY1RDIxMUU3QjdDRkM3MjI0OEE0OEFBMjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6QUYwQkZCMTJGNDQ2MTFFNzgwOERERTA1MTA3MDJGMzc8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOkFGN0Y3Q0RBMTZCRjExRTM5RkU1QjEwRkFCN0E5NjVCPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpCMDFFQjE4M0Y1RDIxMUU3QjI5QkE4NERFNkM4MDhCMjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6QjJBOTBDN0NGNjc5MTFFNzkxNENCQTlGRDZDRDdBMzM8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOkIzQTYwRDRGREU0OTExRTc5NjA1RDQ3QTkxMjZFODk1PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpCQzFFRDQ2ODJERDYxMUU5QUZDNEY1REM3QzA0RUIyRDwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6QkUxNDlCMjFEOENFRTQxMUJGQjZGN0QzMkE3QTY0OUM8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOkMyMTQ5QjIxRDhDRUU0MTFCRkI2RjdEMzJBN0E2NDlDPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpDNEIyQzVFOEVBMjQxMUU3QjZGNEJENEJDMTI1MTIwRTwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6Q0NGMTFEMTJGOERBRTcxMUFBQjZFRDNFQjAxOTUxMDE8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOkQxRUI4NjBFNENEQUU3MTFCMjkwQkJEQzlGNUJGQzU2PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpENjVDNkVGQUU5QkQxMUU1ODFDRkUyRDdGQTUyQTRCRDwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6REM0QUQxMjYzNUE1MTFFOUFGMkM5NTk1NUI2ODFBREQ8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOkUxOTdGQ0Y4RjlDRDExRThCOTVEQUFCMTMwRkU5MjE5PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpFNUJGQUFCQTg5QTcxMUU4QjY4MTlENDVENDhENERCRjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6RUMwOTIxMDI3QjZBMTFFOEJFRDNBMTMzNkU2QjVENDk8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOkYwRDgwMjRFREM3M0U2MTE5NjE2RDA2RTIxRjFFRTlFPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDphN2VhOTQ4Yi00YTMxLTgzNDItYWNiMi0zNTFiMzAxNjU2Zjg8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOmMwMDgwYjU0LTRjMGItYjU0NS04ZDQ5LTc3YTY2MmJiMjQzYTwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6ZDI1M2YxMzAtZTNjYi05NzQwLTkyNmItNDliY2U4NmQyOGZlPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDplMzAwMTU1Yi04ODI1LTIwNDItYTIwNy0yNmQwZTVhNmJhMTU8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOmVkNThmODE0LTdiZGQtMzI0MC1hNjc1LWYzOGEzMTdhMDYxNDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhDaw9IAAABkSURBVEiJY/z//z8DLQETTU2nhwUsMIZO5hKqhtWV6TGMDAxoPrgyPYbhyvQYqvExLKAFYISlIloFEQuaIFUM18lcAmcP/WQ6asGoBZQDlIyGnEGoBUYLO5wAVtgxjtbJA24BAOREP+wyryE9AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./uix-addons/multi-media/createMultiMediaStateHandler.js":
/*!****************************************************************!*\
  !*** ./uix-addons/multi-media/createMultiMediaStateHandler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _Events = __webpack_require__(/*! ./Events */ "./uix-addons/multi-media/Events.js");

var _Events2 = _interopRequireDefault(_Events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PDFViewCtrl = UIExtension.PDFViewCtrl;

var CreateMultiMediaStateHandler = function (_PDFViewCtrl$IStateHa) {
    _inherits(CreateMultiMediaStateHandler, _PDFViewCtrl$IStateHa);

    function CreateMultiMediaStateHandler(pdfViewer) {
        _classCallCheck(this, CreateMultiMediaStateHandler);

        var _this = _possibleConstructorReturn(this, _PDFViewCtrl$IStateHa.call(this, pdfViewer, "square"));

        _this.pdfViewer = pdfViewer;
        _this.cursorStyle = "fv__cursor-cross";
        _this.destroyHooks = [];
        return _this;
    }

    CreateMultiMediaStateHandler.getStateName = function getStateName() {
        return "create-multi-media-state";
    };

    CreateMultiMediaStateHandler.prototype.getDevicePagePoint = function getDevicePagePoint(elem, event) {
        var pageRect = elem.getBoundingClientRect();
        var srcEvent = event.srcEvent;
        return {
            x: srcEvent.clientX - pageRect.left - event.deltaX,
            y: srcEvent.clientY - pageRect.top - event.deltaY
        };
    };

    CreateMultiMediaStateHandler.prototype.correctPosition = function correctPosition(position) {
        var _this2 = this;

        return this.pageRender.getPDFPage().then(function (page) {
            var scale = _this2.pageRender.getScale();
            var width = page.getPxWidth() * scale;
            var height = page.getPxHeight() * scale;
            var x = Math.max(0, Math.min(width, position.x));
            var y = Math.max(0, Math.min(height, position.y));
            return { x: x, y: y };
        });
    };

    CreateMultiMediaStateHandler.prototype.start = function start(pageRender, _ref) {
        var left = _ref.left,
            top = _ref.top;

        if (this.shapeControl) return;
        this.shapeControl = new PDFViewCtrl.ShapeControl({
            resizable: false,
            enableDiagonally: true
        });
        this.shapeControl.active(pageRender.$handler, pageRender.$handler, {
            left: left,
            top: top,
            width: 0,
            height: 0
        });
    };

    CreateMultiMediaStateHandler.prototype.adjust = function adjust(shapeControl, _ref2, _ref3) {
        var sx = _ref2.x,
            sy = _ref2.y;
        var ex = _ref3.x,
            ey = _ref3.y;

        var left = void 0,
            top = void 0;
        var width = Math.abs(sx - ex);
        var height = Math.abs(sy - ey);

        left = Math.min(sx, ex);
        top = Math.min(sy, ey);
        width = Math.max(width, 1);
        height = Math.max(height, 1);
        var shape = {
            left: left,
            top: top,
            width: width,
            height: height
        };
        var boundary = {
            left: left,
            top: top,
            right: left + width,
            bottom: top + height
        };
        shapeControl._applyAnnotBoundary(shape);
        shapeControl.shape.boundary = boundary;
        shapeControl.shape.shape = shape;
        shapeControl._updatePreviewer();
    };

    CreateMultiMediaStateHandler.prototype.pageHandler = function pageHandler(pageRender) {
        var _this3 = this;

        this.pageRender = pageRender;
        var handler = pageRender.$handler.get(0);
        pageRender.$handler.addClass(this.cursorStyle);
        var hammer = this.hammer = new PDFViewCtrl.Deps.Hammer.Manager(handler);
        var $handler = pageRender.$handler;
        hammer.add(new Hammer.Pan({
            direction: Hammer.DIRECTION_ALL
        }));
        hammer.on('panstart', function (e) {
            _this3.startPoint = _this3.getDevicePagePoint(handler, e);
            var left = _this3.startPoint.x;
            var top = _this3.startPoint.y;

            _this3.start(pageRender, { left: left, top: top });
        });
        hammer.on('panmove', function (e) {
            return _this3.correctPosition({
                x: _this3.startPoint.x + e.deltaX,
                y: _this3.startPoint.y + e.deltaY
            }).then(function (point) {
                _this3.currentPoint = point;
                return _this3.adjust(_this3.shapeControl, _this3.startPoint, _this3.currentPoint);
            });
        });
        hammer.on('panend', function (e) {
            _this3.correctPosition({
                x: _this3.startPoint.x + e.deltaX,
                y: _this3.startPoint.y + e.deltaY
            }).then(function (point) {
                _this3.currentPoint = point;
                _this3.adjust(_this3.shapeControl, _this3.startPoint, _this3.currentPoint);
                _this3.pdfViewer.eventEmitter.emit(_Events2.default.addSquareArea, pageRender, _this3.shapeControl.shape.boundary);
                _this3.shapeControl.destroy();
                _this3.shapeControl = null;
            });
        });
        hammer.on('pancancel', function (e) {
            _this3.shapeControl.destroy();
            _this3.shapeControl = null;
        });
    };

    CreateMultiMediaStateHandler.prototype.destroyPageHandler = function destroyPageHandler() {
        this.hammer && this.hammer.destroy();
        this.pageRender.$handler.removeClass(this.cursorStyle);
        this.destroyHooks.forEach(function (hook) {
            return hook();
        });
    };

    return CreateMultiMediaStateHandler;
}(PDFViewCtrl.IStateHandler);

exports.default = CreateMultiMediaStateHandler;

/***/ }),

/***/ "./uix-addons/multi-media/index.js":
/*!*****************************************!*\
  !*** ./uix-addons/multi-media/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _popup = __webpack_require__(/*! ./popup/ */ "./uix-addons/multi-media/popup/index.js");

var _popup2 = _interopRequireDefault(_popup);

__webpack_require__(/*! ./scss/index.css */ "./uix-addons/multi-media/scss/index.css");

var _multiMediaCallbackController = __webpack_require__(/*! ./multiMediaCallbackController */ "./uix-addons/multi-media/multiMediaCallbackController.js");

var _multiMediaCallbackController2 = _interopRequireDefault(_multiMediaCallbackController);

var _template = __webpack_require__(/*! ./template.art */ "./uix-addons/multi-media/template.art");

var _template2 = _interopRequireDefault(_template);

var _addonInfo = __webpack_require__(/*! ./addon.info.json */ "./uix-addons/multi-media/addon.info.json");

var _addonInfo2 = _interopRequireDefault(_addonInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var template = (0, _template2.default)();

var MultiMediaAddon = function (_UIExtension$UIXAddon) {
    _inherits(MultiMediaAddon, _UIExtension$UIXAddon);

    function MultiMediaAddon() {
        _classCallCheck(this, MultiMediaAddon);

        return _possibleConstructorReturn(this, _UIExtension$UIXAddon.apply(this, arguments));
    }

    MultiMediaAddon.getName = function getName() {
        return 'multi-media';
    };

    MultiMediaAddon.getLoader = function getLoader() {
        return _addonInfo2.default;
    };

    MultiMediaAddon.prototype.init = function init() {
        var module = UIExtension.modular.module('multi-media', []);
        var registry = module.getRegistry();
        this.module = module;
        registry.registerComponent(_popup2.default);
    };

    MultiMediaAddon.prototype.fragments = function fragments() {
        return [{
            target: 'comment-tab-group-media',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: template,
            config: [{
                target: 'multi-media-btn',
                tooltip: {
                    title: 'multi-media:buttons.title'
                },
                callback: _multiMediaCallbackController2.default
            }]
        }];
    };

    return MultiMediaAddon;
}(UIExtension.UIXAddon);

exports.default = MultiMediaAddon;
;

/***/ }),

/***/ "./uix-addons/multi-media/multiMediaCallbackController.js":
/*!****************************************************************!*\
  !*** ./uix-addons/multi-media/multiMediaCallbackController.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _Events = __webpack_require__(/*! ./Events */ "./uix-addons/multi-media/Events.js");

var _Events2 = _interopRequireDefault(_Events);

var _createMultiMediaStateHandler = __webpack_require__(/*! ./createMultiMediaStateHandler */ "./uix-addons/multi-media/createMultiMediaStateHandler.js");

var _createMultiMediaStateHandler2 = _interopRequireDefault(_createMultiMediaStateHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var MultiMediaCallbackController = function (_UIExtension$Stateful) {
    _inherits(MultiMediaCallbackController, _UIExtension$Stateful);

    function MultiMediaCallbackController(component) {
        _classCallCheck(this, MultiMediaCallbackController);

        return _possibleConstructorReturn(this, _UIExtension$Stateful.call(this, component, _createMultiMediaStateHandler2.default));
    }

    MultiMediaCallbackController.prototype.readerFile = function readerFile(file) {
        return new Promise(function (resolve, reject) {
            var fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
            fileReader.onload = function () {
                var buffer = new Uint8Array(fileReader.result);
                resolve(buffer);
            };
            fileReader.onerror = reject;
        });
    };

    MultiMediaCallbackController.prototype.mounted = function mounted() {
        var _this2 = this;

        _UIExtension$Stateful.prototype.mounted.call(this);

        this.popop = this.getComponentByName("multi-media-popup");
        this.popop.rendered();

        var pdfUi = this.getPDFUI();
        pdfUi.addViewerEventListener(_Events2.default.addSquareArea, function (pageRender, rect) {
            _this2.popop.show();
            _this2.popop.setSubmitCallback(function (file, postFile) {
                var promises = [];
                promises.push(pageRender.getPDFPage());
                promises.push(_this2.readerFile(file));
                if (postFile) {
                    promises.push(_this2.readerFile(postFile));
                }

                Promise.all(promises).then(function (datas) {
                    var page = datas[0];
                    var pdfRect = page.reverseDeviceRect(rect, pageRender.scale);
                    var multiBuffer = datas[1];
                    var imageBuffer = void 0;
                    if (datas[2]) {
                        imageBuffer = datas[2];
                    }
                    page.addAnnot({
                        type: 'screen',
                        rect: pdfRect,
                        multiBuffer: multiBuffer,
                        buffer: imageBuffer,
                        fileName: file.name,
                        contentType: file.type
                    }).then(function (annots) {
                        var annot = annots[0];
                        var component = pageRender.annotsRender.getAnnotRender(annot.getId()).component;
                        component.active();
                    });
                });
            });
        });
    };

    _createClass(MultiMediaCallbackController, null, [{
        key: 'permission',
        get: function get() {
            return UIExtension.PDFViewCtrl.Consts.PDFDocPermission.AnnotForm;
        }
    }]);

    return MultiMediaCallbackController;
}(UIExtension.StatefulController);

exports.default = MultiMediaCallbackController;

/***/ }),

/***/ "./uix-addons/multi-media/popup/index.js":
/*!***********************************************!*\
  !*** ./uix-addons/multi-media/popup/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

__webpack_require__(/*! ./index.scss */ "./uix-addons/multi-media/popup/index.scss");

var _multiMedia = __webpack_require__(/*! ./multi-media.art */ "./uix-addons/multi-media/popup/multi-media.art");

var _multiMedia2 = _interopRequireDefault(_multiMedia);

var _recorder = __webpack_require__(/*! ./recorder */ "./uix-addons/multi-media/popup/recorder.js");

var _recorder2 = _interopRequireDefault(_recorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PopupComponent = function (_UIExtension$widgets$) {
    _inherits(PopupComponent, _UIExtension$widgets$);

    function PopupComponent() {
        _classCallCheck(this, PopupComponent);

        return _possibleConstructorReturn(this, _UIExtension$widgets$.apply(this, arguments));
    }

    PopupComponent.getName = function getName() {
        return 'multi-media-popup';
    };

    PopupComponent.prototype.render = function render() {
        _UIExtension$widgets$.prototype.render.call(this);
        this.element.classList.add('multi-media-popup');
    };

    PopupComponent.prototype.rendered = function rendered() {
        this.isRecording = false;
        this.element.querySelector(".fv__ui-layer-panel").innerHTML = (0, _multiMedia2.default)();
        this.recordErrorDiv = this.element.querySelector(".fv__record-error");

        this.localize();
    };

    PopupComponent.prototype.setSubmitCallback = function setSubmitCallback(callback) {
        this.callback = callback;
    };

    PopupComponent.prototype.show = function show() {
        _UIExtension$widgets$.prototype.show.call(this);
        this.reset();
    };

    PopupComponent.prototype.reset = function reset() {
        var fileInput = this.element.querySelector(".fv__multi-file");
        fileInput.value = "";
        fileInput.removeAttribute("disabled");
        var posterFileInput = this.element.querySelector(".fv__poster-file");
        posterFileInput.value = "";
        if (this.audio) {
            this.audio.src = "";
        }
        if (this.recorder) {
            this.recorder.clear();
        }
        this.lastAudioUrl = "";

        var radio = this.element.querySelector(".file-type-radio");
        radio.checked = true;

        this.element.querySelector(".fv__activated").classList.remove("fv__activated");
        radio.parentNode.parentNode.classList.add("fv__activated");

        // this.element.querySelector(".fv__multi-file-div").classList.remove("fv__multi-file-error");

        this.submitBtn = this.element.querySelector(".fv__multi-media-btn");
        this.submitBtn.setAttribute("disabled", "");

        this.hideRecordError();
    };

    PopupComponent.prototype.getValidatedFileDatas = function getValidatedFileDatas() {
        var fileRadio = this.element.querySelector(".file-type-radio");
        var file = void 0;
        if (fileRadio.checked) {
            var fileInput = this.element.querySelector(".fv__multi-file");
            file = fileInput.files[0];
            if (file) {
                var fileExt = file.name.substr(file.name.lastIndexOf("."));
                var videoExts = ['.mp4', '.mp3', '.m4a', '.wav'];
                if (videoExts.indexOf(fileExt) === -1) {
                    this.submitBtn.setAttribute("disabled", "");
                    return false;
                }
            }
        } else if (this.recorder) {
            var recordBtn = this.element.querySelector(".fv__record-record");
            if (!recordBtn.classList.contains("fv__recording")) {
                var blob = this.recorder.getBlob();
                if (blob) {
                    file = new File([blob], "record.wav", { type: "audio/wav" });
                }
            }
        }
        var posterFileInput = this.element.querySelector(".fv__poster-file");
        var posterFile = posterFileInput.files[0];
        if (posterFile) {
            var _fileExt = posterFile.name.substr(posterFile.name.lastIndexOf("."));
            var imageExts = ['.png', '.jpg', '.jpeg', '.gif'];
            if (imageExts.indexOf(_fileExt) === -1) {
                this.submitBtn.setAttribute("disabled", "");
                return false;
            }
        }
        if (!file) {
            console.log("disabled");
            this.submitBtn.setAttribute("disabled", "");
            // this.element.querySelector(".fv__multi-file-div").classList.add("fv__multi-file-error");
            return false;
        } else {
            this.submitBtn.removeAttribute("disabled");
        }
        return [file, posterFile];
    };

    PopupComponent.prototype.mounted = function mounted() {
        var _this2 = this;

        _UIExtension$widgets$.prototype.mounted.call(this);
        var audio = this.audio = this.element.querySelector(".fv__record-audio");
        this.element.querySelector(".fv__multi-file").addEventListener('change', function (e) {
            _this2.getValidatedFileDatas();
            // this.element.querySelector(".fv__multi-file-div").classList.remove("fv__multi-file-error");
        });
        this.element.querySelector(".fv__multi-media-btn").addEventListener('click', function (e) {
            var fileData = _this2.getValidatedFileDatas();
            if (fileData === false) {
                // this.element.querySelector(".fv__multi-file-div").classList.add("fv__multi-file-error");
                return;
            }
            if (_this2.callback) {
                _this2.callback.apply(_this2, _toConsumableArray(fileData));
            }
            _this2.hide();
        });

        this.element.querySelector(".fv__multi-media-cancel").addEventListener('click', function (e) {
            _this2.hide();
        });

        var radios = this.element.querySelectorAll(".file-type-radio");
        radios.forEach(function (radio) {
            radio.addEventListener('change', function (e) {
                _this2.getValidatedFileDatas();
                _this2.recordErrorDiv.innerHTML = "";
                _this2.recordErrorDiv.classList.remove("fv__record-error-show");
                // this.element.querySelector(".fv__multi-file-div").classList.remove("fv__multi-file-error");
                _this2.element.querySelector(".fv__activated").classList.remove("fv__activated");
                e.target.parentNode.parentNode.classList.add("fv__activated");
                if (e.target.value == 1) {
                    _this2.lastAudioUrl = _this2.audio.src;
                    _this2.audio.src = "";
                    _this2.element.querySelector(".fv__multi-file").removeAttribute("disabled");
                } else {
                    _this2.audio.src = _this2.lastAudioUrl;
                    _this2.element.querySelector(".fv__multi-file").setAttribute("disabled", "");
                }
            });
        });

        this.element.querySelector(".fv__record-record").addEventListener('click', function (e) {
            var fileRadio = _this2.element.querySelector(".file-type-radio");
            if (fileRadio.checked) {
                return;
            }
            _this2.hideRecordError();
            if (e.target.classList.contains("fv__recording")) {
                e.target.classList.remove("fv__recording");
                _this2.recorder.stop();
                _this2.recorder.play(audio);
                _this2.getValidatedFileDatas();
            } else {
                var startTime = 0;
                _recorder2.default.get(function (rec) {
                    e.target.classList.add("fv__recording");
                    _this2.getValidatedFileDatas();
                    _this2.recorder = rec;
                    _this2.recorder.start();
                }, function (e) {
                    var time = parseInt(e.playbackTime);
                    if (time > startTime) {
                        startTime = time;
                        _this2.recorder.play(audio);
                    }
                }, function (err) {
                    _this2.showRecordError(err);
                });
            }
        });
    };

    PopupComponent.prototype.hideRecordError = function hideRecordError() {
        this.recordErrorDiv.innerHTML = "";
        this.recordErrorDiv.classList.remove("fv__record-error-show");
    };

    PopupComponent.prototype.showRecordError = function showRecordError(err) {
        /*
         "DeviceNotFoundError": "The device not found.",
        "TrackStartError": "Microphone are already in use.",
        "PermissionDeniedError": "Please check if your browser is allowed for a microphone.",
        "BrowserNotSupported": "Browser not supported."
         */
        console.error(err);
        var type = err.name || err.message;
        var error = void 0;
        var msg = void 0;
        if (type == "NotFoundError" || type == "DeviceNotFoundError") {
            error = "DeviceNotFoundError";
            msg = "The device not found.";
            // require track is missing
        } else if (type == "NotReadableError" || type == "TrackStartError") {
            error = "TrackStartError";
            msg = "Microphone are already in use.";
            // webcam or mic are already in use
        } else if (type == "NotAllowedError" || type == "PermissionDeniedError") {
            error = "PermissionDeniedError";
            msg = "Please check if your browser is allowed for a microphone.";
            // permission denied in browser
        } else {
            if (location.protocol == "http:") {
                msg = "This audio feature requires HTTPS to continue.";
            } else {
                error = type;
                msg = "Browser not supported.";
            }
            // other errors
        }
        this.recordErrorDiv.innerHTML = msg;
        this.recordErrorDiv.classList.add("fv__record-error-show");

        // let pdfUi = this.getPDFUI();
        // let key = "multi-media:dialog." + error;
        // pdfUi.localizer.translate(key).then(result => {
        //     this.recordErrorDiv.innerHTML = result;
        //     this.recordErrorDiv.classList.add("fv__record-error-show");
        // });
    };

    return PopupComponent;
}(UIExtension.widgets.LayerComponent);

exports.default = PopupComponent;

/***/ }),

/***/ "./uix-addons/multi-media/popup/index.scss":
/*!*************************************************!*\
  !*** ./uix-addons/multi-media/popup/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./uix-addons/multi-media/popup/multi-media.art":
/*!******************************************************!*\
  !*** ./uix-addons/multi-media/popup/multi-media.art ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<div class="fv__multi-file-div">\n    <div class="fv__multi-item fv__activated">\n        <label>\n            <input type="radio" name="file-type" class="file-type-radio" value="1" checked />\n            <span class="fv__multi-file-label">File: </span>\n        </label>\n        <input type="file" class="fv__multi-file" accept="audio/wav, audio/mpeg, audio/mp4, video/mp4" />\n    </div>\n    <div class="fv__multi-item">\n        <audio class="fv__record-audio" controls controlslist="nodownload" controlslist="nofullscreen"></audio>\n        <label>\n            <input type="radio" name="file-type" class="file-type-radio" value="2" />\n            <span class="fv__multi-file-label">Recorder: </span>\n        </label>\n        <span class="fv__record-record"></span>\n        <div class="fv__record-error"></div>\n    </div>\n</div>\n<div class="fv__multi-file-div">\n    <span class="fv__multi-file-label fv__poster-file-label">Poster File: </span>\n    <input type="file" class="fv__poster-file" accept="image/gif, image/jpeg, image/png" />\n</div>\n<div class="fv__multi-file-div fv__multi-file-btn">\n    <button type="button" class="fv__multi-media-btn" disabled>Ok</button>\n    <button type="button" class="fv__multi-media-cancel">Cancel</button>\n</div>';
    return $$out;
};

/***/ }),

/***/ "./uix-addons/multi-media/popup/recorder.js":
/*!**************************************************!*\
  !*** ./uix-addons/multi-media/popup/recorder.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//兼容
window.URL = window.URL || window.webkitURL;
//获取计算机的设备：摄像头或者录音设备
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

var Recorder = function () {
    Recorder.get = function get(callback, processCallback, errorCallback) {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
                var rec = new Recorder(stream, processCallback);
                callback(rec);
            }).catch(function (e) {
                errorCallback(e);
            });
        } else if (navigator.getUserMedia) {
            navigator.getUserMedia({ audio: true //只启用音频
            }, function (stream) {
                var rec = new Recorder(stream, processCallback);
                callback(rec);
            }, errorCallback);
        } else {
            errorCallback(new Error("BrowserNotSupported"));
        }
    };

    function Recorder(stream, processCallback) {
        _classCallCheck(this, Recorder);

        var config = {};
        config.sampleBits = config.sampleBits || 8; //采样数位 8, 16
        config.sampleRate = config.sampleRate || 44100 / 6; //采样率(1/6 44100)

        //创建一个音频环境对象
        var audioContext = window.AudioContext || window.webkitAudioContext;
        var context = this.context = new audioContext();
        this.stream = stream;
        this.audioInput = context.createMediaStreamSource(stream);
        // 第二个和第三个参数指的是输入和输出都是单声道,2是双声道。
        this.recorder = context.createScriptProcessor(4096, 1, 1);

        var audioData = this.audioData = {
            size: 0 //录音文件长度
            , buffer: [] //录音缓存
            , inputSampleRate: context.sampleRate //输入采样率
            , inputSampleBits: 16 //输入采样数位 8, 16
            , outputSampleRate: config.sampleRate //输出采样率
            , outputSampleBits: config.sampleBits //输出采样数位 8, 16
            , input: function input(data) {
                this.buffer.push(new Float32Array(data));
                this.size += data.length;
            },
            compress: function compress() {
                //合并压缩
                //合并
                var data = new Float32Array(this.size);
                var offset = 0;
                for (var i = 0; i < this.buffer.length; i++) {
                    data.set(this.buffer[i], offset);
                    offset += this.buffer[i].length;
                }
                //压缩
                var compression = parseInt(this.inputSampleRate / this.outputSampleRate);
                var length = data.length / compression;
                var result = new Float32Array(length);
                var index = 0,
                    j = 0;
                while (index < length) {
                    result[index] = data[j];
                    j += compression;
                    index++;
                }
                return result;
            },
            encodeWAV: function encodeWAV() {
                if (this.size == 0) return false;
                var sampleRate = Math.min(this.inputSampleRate, this.outputSampleRate);
                var sampleBits = Math.min(this.inputSampleBits, this.outputSampleBits);
                var bytes = this.compress();
                var dataLength = bytes.length * (sampleBits / 8);
                var buffer = new ArrayBuffer(44 + dataLength);
                var data = new DataView(buffer);

                var channelCount = 1; //单声道
                var offset = 0;

                var writeString = function writeString(str) {
                    for (var i = 0; i < str.length; i++) {
                        data.setUint8(offset + i, str.charCodeAt(i));
                    }
                };

                // 资源交换文件标识符
                writeString('RIFF');offset += 4;
                // 下个地址开始到文件尾总字节数,即文件大小-8
                data.setUint32(offset, 36 + dataLength, true);offset += 4;
                // WAV文件标志
                writeString('WAVE');offset += 4;
                // 波形格式标志
                writeString('fmt ');offset += 4;
                // 过滤字节,一般为 0x10 = 16
                data.setUint32(offset, 16, true);offset += 4;
                // 格式类别 (PCM形式采样数据)
                data.setUint16(offset, 1, true);offset += 2;
                // 通道数
                data.setUint16(offset, channelCount, true);offset += 2;
                // 采样率,每秒样本数,表示每个通道的播放速度
                data.setUint32(offset, sampleRate, true);offset += 4;
                // 波形数据传输率 (每秒平均字节数) 单声道×每秒数据位数×每样本数据位/8
                data.setUint32(offset, channelCount * sampleRate * (sampleBits / 8), true);offset += 4;
                // 快数据调整数 采样一次占用字节数 单声道×每样本的数据位数/8
                data.setUint16(offset, channelCount * (sampleBits / 8), true);offset += 2;
                // 每样本数据位数
                data.setUint16(offset, sampleBits, true);offset += 2;
                // 数据标识符
                writeString('data');offset += 4;
                // 采样数据总数,即数据总大小-44
                data.setUint32(offset, dataLength, true);offset += 4;
                // 写入采样数据
                if (sampleBits === 8) {
                    for (var i = 0; i < bytes.length; i++, offset++) {
                        var s = Math.max(-1, Math.min(1, bytes[i]));
                        var val = s < 0 ? s * 0x8000 : s * 0x7FFF;
                        val = parseInt(255 / (65535 / (val + 32768)));
                        data.setInt8(offset, val, true);
                    }
                } else {
                    for (var _i = 0; _i < bytes.length; _i++, offset += 2) {
                        var _s = Math.max(-1, Math.min(1, bytes[_i]));
                        data.setInt16(offset, _s < 0 ? _s * 0x8000 : _s * 0x7FFF, true);
                    }
                }

                return new Blob([data], { type: 'audio/wav' });
            }
        };
        this.recorder.onaudioprocess = function (e) {
            audioData.input(e.inputBuffer.getChannelData(0));
            processCallback(e);
        };
    }

    //开始录音


    Recorder.prototype.start = function start() {
        this.audioInput.connect(this.recorder);
        this.recorder.connect(this.context.destination);
    };

    //停止


    Recorder.prototype.stop = function stop() {
        this.audioInput.disconnect(this.recorder);
        this.recorder.disconnect(this.context.destination);
        this.stream.getAudioTracks().forEach(function (track) {
            track.stop();
        });
        this.stream = null;
    };

    //获取音频文件


    Recorder.prototype.getBlob = function getBlob() {
        // this.stop();
        return this.audioData.encodeWAV();
    };

    //回放


    Recorder.prototype.play = function play(audio) {
        audio.src = window.URL.createObjectURL(this.getBlob());
    };
    //清除


    Recorder.prototype.clear = function clear() {
        this.audioData.buffer = [];
        this.audioData.size = 0;
    };

    return Recorder;
}();

exports.default = Recorder;

/***/ }),

/***/ "./uix-addons/multi-media/scss/index.css":
/*!***********************************************!*\
  !*** ./uix-addons/multi-media/scss/index.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./index.css */ "./node_modules/css-loader/index.js!./uix-addons/multi-media/scss/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./uix-addons/multi-media/template.art":
/*!*********************************************!*\
  !*** ./uix-addons/multi-media/template.art ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<div name="multi-media">\n    <xbutton name="multi-media-btn" icon-class="fv__icon-multi-media" @tooltip>multi-media:buttons.title</xbutton>\n    <multi-media:multi-media-popup name="multi-media-popup" append-to="body" class="center" modal backdrop>\n        <layer-header title="multi-media:buttons.title" @draggable="{type:\'parent\'}"></layer-header>\n        <layer-view>\n        </layer-view>\n    </multi-media:multi-media-popup>\n</div>';
    return $$out;
};

/***/ }),

/***/ "UIExtension":
/*!**************************************************************************************************************!*\
  !*** external {"commonjs":"UIExtension","commonjs2":"UIExtension","amd":"UIExtension","root":"UIExtension"} ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UIExtension__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NdWx0aU1lZGlhQWRkb24vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL011bHRpTWVkaWFBZGRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9NdWx0aU1lZGlhQWRkb24vLi9ub2RlX21vZHVsZXMvYXJ0LXRlbXBsYXRlL2xpYi9jb21waWxlL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vTXVsdGlNZWRpYUFkZG9uLy4vbm9kZV9tb2R1bGVzL2FydC10ZW1wbGF0ZS9saWIvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9NdWx0aU1lZGlhQWRkb24vLi91aXgtYWRkb25zL211bHRpLW1lZGlhL3Njc3MvaW5kZXguY3NzIiwid2VicGFjazovL011bHRpTWVkaWFBZGRvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly9NdWx0aU1lZGlhQWRkb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly9NdWx0aU1lZGlhQWRkb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vTXVsdGlNZWRpYUFkZG9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly9NdWx0aU1lZGlhQWRkb24vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL011bHRpTWVkaWFBZGRvbi8uL3VpeC1hZGRvbnMvbXVsdGktbWVkaWEvRXZlbnRzLmpzIiwid2VicGFjazovL011bHRpTWVkaWFBZGRvbi8uL3VpeC1hZGRvbnMvbXVsdGktbWVkaWEvYWRkb24uaW5mby5qc29uIiwid2VicGFjazovL011bHRpTWVkaWFBZGRvbi8uL3VpeC1hZGRvbnMvbXVsdGktbWVkaWEvYXNzZXRzL211bHRpLW1lZGlhLnBuZyIsIndlYnBhY2s6Ly9NdWx0aU1lZGlhQWRkb24vLi91aXgtYWRkb25zL211bHRpLW1lZGlhL2NyZWF0ZU11bHRpTWVkaWFTdGF0ZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vTXVsdGlNZWRpYUFkZG9uLy4vdWl4LWFkZG9ucy9tdWx0aS1tZWRpYS9pbmRleC5qcyIsIndlYnBhY2s6Ly9NdWx0aU1lZGlhQWRkb24vLi91aXgtYWRkb25zL211bHRpLW1lZGlhL211bHRpTWVkaWFDYWxsYmFja0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vTXVsdGlNZWRpYUFkZG9uLy4vdWl4LWFkZG9ucy9tdWx0aS1tZWRpYS9wb3B1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9NdWx0aU1lZGlhQWRkb24vLi91aXgtYWRkb25zL211bHRpLW1lZGlhL3BvcHVwL2luZGV4LnNjc3M/Y2E5MyIsIndlYnBhY2s6Ly9NdWx0aU1lZGlhQWRkb24vLi91aXgtYWRkb25zL211bHRpLW1lZGlhL3BvcHVwL211bHRpLW1lZGlhLmFydCIsIndlYnBhY2s6Ly9NdWx0aU1lZGlhQWRkb24vLi91aXgtYWRkb25zL211bHRpLW1lZGlhL3BvcHVwL3JlY29yZGVyLmpzIiwid2VicGFjazovL011bHRpTWVkaWFBZGRvbi8uL3VpeC1hZGRvbnMvbXVsdGktbWVkaWEvc2Nzcy9pbmRleC5jc3M/MDAxNiIsIndlYnBhY2s6Ly9NdWx0aU1lZGlhQWRkb24vLi91aXgtYWRkb25zL211bHRpLW1lZGlhL3RlbXBsYXRlLmFydCIsIndlYnBhY2s6Ly9NdWx0aU1lZGlhQWRkb24vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcIlVJRXh0ZW5zaW9uXCIsXCJjb21tb25qczJcIjpcIlVJRXh0ZW5zaW9uXCIsXCJhbWRcIjpcIlVJRXh0ZW5zaW9uXCIsXCJyb290XCI6XCJVSUV4dGVuc2lvblwifSJdLCJuYW1lcyI6WyJhZGRTcXVhcmVBcmVhIiwiVUlFeHRlbnNpb24iLCJQREZWaWV3Q3RybCIsIkNyZWF0ZU11bHRpTWVkaWFTdGF0ZUhhbmRsZXIiLCJwZGZWaWV3ZXIiLCJjdXJzb3JTdHlsZSIsImRlc3Ryb3lIb29rcyIsImdldFN0YXRlTmFtZSIsImdldERldmljZVBhZ2VQb2ludCIsImVsZW0iLCJldmVudCIsInBhZ2VSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic3JjRXZlbnQiLCJ4IiwiY2xpZW50WCIsImxlZnQiLCJkZWx0YVgiLCJ5IiwiY2xpZW50WSIsInRvcCIsImRlbHRhWSIsImNvcnJlY3RQb3NpdGlvbiIsInBvc2l0aW9uIiwicGFnZVJlbmRlciIsImdldFBERlBhZ2UiLCJ0aGVuIiwic2NhbGUiLCJnZXRTY2FsZSIsIndpZHRoIiwicGFnZSIsImdldFB4V2lkdGgiLCJoZWlnaHQiLCJnZXRQeEhlaWdodCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJzdGFydCIsInNoYXBlQ29udHJvbCIsIlNoYXBlQ29udHJvbCIsInJlc2l6YWJsZSIsImVuYWJsZURpYWdvbmFsbHkiLCJhY3RpdmUiLCIkaGFuZGxlciIsImFkanVzdCIsInN4Iiwic3kiLCJleCIsImV5IiwiYWJzIiwic2hhcGUiLCJib3VuZGFyeSIsInJpZ2h0IiwiYm90dG9tIiwiX2FwcGx5QW5ub3RCb3VuZGFyeSIsIl91cGRhdGVQcmV2aWV3ZXIiLCJwYWdlSGFuZGxlciIsImhhbmRsZXIiLCJnZXQiLCJhZGRDbGFzcyIsImhhbW1lciIsIkRlcHMiLCJIYW1tZXIiLCJNYW5hZ2VyIiwiYWRkIiwiUGFuIiwiZGlyZWN0aW9uIiwiRElSRUNUSU9OX0FMTCIsIm9uIiwic3RhcnRQb2ludCIsImUiLCJjdXJyZW50UG9pbnQiLCJwb2ludCIsImV2ZW50RW1pdHRlciIsImVtaXQiLCJFdmVudHMiLCJkZXN0cm95IiwiZGVzdHJveVBhZ2VIYW5kbGVyIiwicmVtb3ZlQ2xhc3MiLCJmb3JFYWNoIiwiaG9vayIsIklTdGF0ZUhhbmRsZXIiLCJ0ZW1wbGF0ZSIsIk11bHRpTWVkaWFBZGRvbiIsImdldE5hbWUiLCJnZXRMb2FkZXIiLCJ0cG1Mb2FkZXIiLCJpbml0IiwibW9kdWxlIiwibW9kdWxhciIsInJlZ2lzdHJ5IiwiZ2V0UmVnaXN0cnkiLCJyZWdpc3RlckNvbXBvbmVudCIsIlBvcHVwQ29tcG9uZW50IiwiZnJhZ21lbnRzIiwidGFyZ2V0IiwiYWN0aW9uIiwiVUlDb25zdHMiLCJGUkFHTUVOVF9BQ1RJT04iLCJBUFBFTkQiLCJjb25maWciLCJ0b29sdGlwIiwidGl0bGUiLCJjYWxsYmFjayIsIk11bHRpTWVkaWFDYWxsYmFja0NvbnRyb2xsZXIiLCJVSVhBZGRvbiIsImNvbXBvbmVudCIsInJlYWRlckZpbGUiLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0FycmF5QnVmZmVyIiwib25sb2FkIiwiYnVmZmVyIiwiVWludDhBcnJheSIsInJlc3VsdCIsIm9uZXJyb3IiLCJtb3VudGVkIiwicG9wb3AiLCJnZXRDb21wb25lbnRCeU5hbWUiLCJyZW5kZXJlZCIsInBkZlVpIiwiZ2V0UERGVUkiLCJhZGRWaWV3ZXJFdmVudExpc3RlbmVyIiwicmVjdCIsInNob3ciLCJzZXRTdWJtaXRDYWxsYmFjayIsInBvc3RGaWxlIiwicHJvbWlzZXMiLCJwdXNoIiwiYWxsIiwiZGF0YXMiLCJwZGZSZWN0IiwicmV2ZXJzZURldmljZVJlY3QiLCJtdWx0aUJ1ZmZlciIsImltYWdlQnVmZmVyIiwiYWRkQW5ub3QiLCJ0eXBlIiwiZmlsZU5hbWUiLCJuYW1lIiwiY29udGVudFR5cGUiLCJhbm5vdHMiLCJhbm5vdCIsImFubm90c1JlbmRlciIsImdldEFubm90UmVuZGVyIiwiZ2V0SWQiLCJDb25zdHMiLCJQREZEb2NQZXJtaXNzaW9uIiwiQW5ub3RGb3JtIiwiU3RhdGVmdWxDb250cm9sbGVyIiwicmVuZGVyIiwiZWxlbWVudCIsImNsYXNzTGlzdCIsImlzUmVjb3JkaW5nIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInJlY29yZEVycm9yRGl2IiwibG9jYWxpemUiLCJyZXNldCIsImZpbGVJbnB1dCIsInZhbHVlIiwicmVtb3ZlQXR0cmlidXRlIiwicG9zdGVyRmlsZUlucHV0IiwiYXVkaW8iLCJzcmMiLCJyZWNvcmRlciIsImNsZWFyIiwibGFzdEF1ZGlvVXJsIiwicmFkaW8iLCJjaGVja2VkIiwicmVtb3ZlIiwicGFyZW50Tm9kZSIsInN1Ym1pdEJ0biIsInNldEF0dHJpYnV0ZSIsImhpZGVSZWNvcmRFcnJvciIsImdldFZhbGlkYXRlZEZpbGVEYXRhcyIsImZpbGVSYWRpbyIsImZpbGVzIiwiZmlsZUV4dCIsInN1YnN0ciIsImxhc3RJbmRleE9mIiwidmlkZW9FeHRzIiwiaW5kZXhPZiIsInJlY29yZEJ0biIsImNvbnRhaW5zIiwiYmxvYiIsImdldEJsb2IiLCJGaWxlIiwicG9zdGVyRmlsZSIsImltYWdlRXh0cyIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiZmlsZURhdGEiLCJoaWRlIiwicmFkaW9zIiwicXVlcnlTZWxlY3RvckFsbCIsInN0b3AiLCJwbGF5Iiwic3RhcnRUaW1lIiwiUmVjb3JkIiwicmVjIiwidGltZSIsInBhcnNlSW50IiwicGxheWJhY2tUaW1lIiwiZXJyIiwic2hvd1JlY29yZEVycm9yIiwiZXJyb3IiLCJtZXNzYWdlIiwibXNnIiwibG9jYXRpb24iLCJwcm90b2NvbCIsIndpZGdldHMiLCJMYXllckNvbXBvbmVudCIsIndpbmRvdyIsIlVSTCIsIndlYmtpdFVSTCIsIm5hdmlnYXRvciIsImdldFVzZXJNZWRpYSIsIndlYmtpdEdldFVzZXJNZWRpYSIsIm1vekdldFVzZXJNZWRpYSIsIm1zR2V0VXNlck1lZGlhIiwiUmVjb3JkZXIiLCJwcm9jZXNzQ2FsbGJhY2siLCJlcnJvckNhbGxiYWNrIiwibWVkaWFEZXZpY2VzIiwic3RyZWFtIiwiY2F0Y2giLCJFcnJvciIsInNhbXBsZUJpdHMiLCJzYW1wbGVSYXRlIiwiYXVkaW9Db250ZXh0IiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiY29udGV4dCIsImF1ZGlvSW5wdXQiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsImNyZWF0ZVNjcmlwdFByb2Nlc3NvciIsImF1ZGlvRGF0YSIsInNpemUiLCJpbnB1dFNhbXBsZVJhdGUiLCJpbnB1dFNhbXBsZUJpdHMiLCJvdXRwdXRTYW1wbGVSYXRlIiwib3V0cHV0U2FtcGxlQml0cyIsImlucHV0IiwiZGF0YSIsIkZsb2F0MzJBcnJheSIsImxlbmd0aCIsImNvbXByZXNzIiwib2Zmc2V0IiwiaSIsInNldCIsImNvbXByZXNzaW9uIiwiaW5kZXgiLCJqIiwiZW5jb2RlV0FWIiwiYnl0ZXMiLCJkYXRhTGVuZ3RoIiwiQXJyYXlCdWZmZXIiLCJEYXRhVmlldyIsImNoYW5uZWxDb3VudCIsIndyaXRlU3RyaW5nIiwic3RyIiwic2V0VWludDgiLCJjaGFyQ29kZUF0Iiwic2V0VWludDMyIiwic2V0VWludDE2IiwicyIsInZhbCIsInNldEludDgiLCJzZXRJbnQxNiIsIkJsb2IiLCJvbmF1ZGlvcHJvY2VzcyIsImlucHV0QnVmZmVyIiwiZ2V0Q2hhbm5lbERhdGEiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJkaXNjb25uZWN0IiwiZ2V0QXVkaW9UcmFja3MiLCJ0cmFjayIsImNyZWF0ZU9iamVjdFVSTCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHlHQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7O2FDbkJkOzs7Ozs7Ozs7Ozs7OztBQ0FELHlEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiVUlFeHRlbnNpb25cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiVUlFeHRlbnNpb25cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTXVsdGlNZWRpYUFkZG9uXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiVUlFeHRlbnNpb25cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk11bHRpTWVkaWFBZGRvblwiXSA9IGZhY3Rvcnkocm9vdFtcIlVJRXh0ZW5zaW9uXCJdKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfVUlFeHRlbnNpb25fXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdWl4LWFkZG9ucy9tdWx0aS1tZWRpYS9pbmRleC5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyohIGFydC10ZW1wbGF0ZUBydW50aW1lIHwgaHR0cHM6Ly9naXRodWIuY29tL2F1aS9hcnQtdGVtcGxhdGUgKi9cblxudmFyIGdsb2JhbFRoaXMgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHt9O1xuXG52YXIgcnVudGltZSA9IE9iamVjdC5jcmVhdGUoZ2xvYmFsVGhpcyk7XG52YXIgRVNDQVBFX1JFRyA9IC9bXCImJzw+XS87XG5cbi8qKlxuICog57yW56CB5qih5p2/6L6T5Ye655qE5YaF5a65XG4gKiBAcGFyYW0gIHthbnl9ICAgICAgICBjb250ZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnJ1bnRpbWUuJGVzY2FwZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgcmV0dXJuIHhtbEVzY2FwZSh0b1N0cmluZyhjb250ZW50KSk7XG59O1xuXG4vKipcbiAqIOi/reS7o+WZqO+8jOaUr+aMgeaVsOe7hOS4juWvueixoVxuICogQHBhcmFtIHthcnJheXxPYmplY3R9IGRhdGFcbiAqIEBwYXJhbSB7ZnVuY3Rpb259ICAgICBjYWxsYmFja1xuICovXG5ydW50aW1lLiRlYWNoID0gZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbaV0sIGkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgX2kgaW4gZGF0YSkge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YVtfaV0sIF9pKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIOWwhuebruagh+i9rOaIkOWtl+esplxuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdG9TdHJpbmcodmFsdWUuY2FsbCh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbi8vIOe8lueggSBIVE1MIOWGheWuuVxuZnVuY3Rpb24geG1sRXNjYXBlKGNvbnRlbnQpIHtcbiAgICB2YXIgaHRtbCA9ICcnICsgY29udGVudDtcbiAgICB2YXIgcmVnZXhSZXN1bHQgPSBFU0NBUEVfUkVHLmV4ZWMoaHRtbCk7XG4gICAgaWYgKCFyZWdleFJlc3VsdCkge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSB2b2lkIDAsXG4gICAgICAgIGxhc3RJbmRleCA9IHZvaWQgMCxcbiAgICAgICAgY2hhciA9IHZvaWQgMDtcbiAgICBmb3IgKGkgPSByZWdleFJlc3VsdC5pbmRleCwgbGFzdEluZGV4ID0gMDsgaSA8IGh0bWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzM0Oyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiMzODsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjMzk7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjA6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzYwOyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDYyOlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiM2MjsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXN0SW5kZXggIT09IGkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgICAgIHJlc3VsdCArPSBjaGFyO1xuICAgIH1cblxuICAgIGlmIChsYXN0SW5kZXggIT09IGkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcnVudGltZTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21waWxlL3J1bnRpbWUnKTsiLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZnZfX2ljb24tbXVsdGktbWVkaWEge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2Fzc2V0cy9tdWx0aS1tZWRpYS5wbmdcIikpICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufSBcXG4uZnZfX2N1cnNvci1jcm9zc3tcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCkge1xuICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdXJsXG4gICAgfVxuICAgIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICAgIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICAgIH1cbiAgICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gICAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIidcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsXG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBhZGRTcXVhcmVBcmVhIDogXCJhZGQtc3F1YXJlLWFyZWFcIlxufSIsIlxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IG51bGw7XG4gICAgIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCZ0FBQUFZQ0FZQUFBRGdkejM0QUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQVlRV2xVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NGdQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ05TNDJMV014TkRVZ056a3VNVFl6TkRrNUxDQXlNREU0THpBNEx6RXpMVEUyT2pRd09qSXlJQ0FnSUNBZ0lDQWlQaUE4Y21SbU9sSkVSaUI0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pUGlBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGJHNXpPbmh0Y0UxTlBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZiVzB2SWlCNGJXeHVjenB6ZEVWMmREMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMM05VZVhCbEwxSmxjMjkxY21ObFJYWmxiblFqSWlCNGJXeHVjenB3YUc5MGIzTm9iM0E5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmNHaHZkRzl6YUc5d0x6RXVNQzhpSUhodGJHNXpPbVJqUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpXeGxiV1Z1ZEhNdk1TNHhMeUlnZUcxd09rTnlaV0YwYjNKVWIyOXNQU0pCWkc5aVpTQlFhRzkwYjNOb2IzQWdRME1nTWpBeE9TQW9WMmx1Wkc5M2N5a2lJSGh0Y0RwRGNtVmhkR1ZFWVhSbFBTSXlNREU1TFRBMExURTJWREUwT2pVek9qSTFLekE0T2pBd0lpQjRiWEE2VFdWMFlXUmhkR0ZFWVhSbFBTSXlNREU1TFRBMExURTJWREUwT2pVek9qSTFLekE0T2pBd0lpQjRiWEE2VFc5a2FXWjVSR0YwWlQwaU1qQXhPUzB3TkMweE5sUXhORG8xTXpveU5Tc3dPRG93TUNJZ2VHMXdUVTA2U1c1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwbVlXWm1NMk5sT0MxaE5USTRMVEZsTkRrdFlUQTRaUzFpWWpneU5qWTVPVFF4T1dVaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUltRmtiMkpsT21SdlkybGtPbkJvYjNSdmMyaHZjRHBsTVRJM1pEUTVOQzB4Tm1RNUxUWTROR1l0T0RrNVpDMHhNV016TkRjMU1EWXlNemNpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBtWWpBeFpEbGpPUzFoWlRKaUxXTmhORE10T0RFeVlpMWhabVl5TnpVMk5tVmlPV0lpSUhCb2IzUnZjMmh2Y0RwRGIyeHZjazF2WkdVOUlqTWlJR1JqT21admNtMWhkRDBpYVcxaFoyVXZjRzVuSWo0Z1BIaHRjRTFOT2tocGMzUnZjbmsrSUR4eVpHWTZVMlZ4UGlBOGNtUm1PbXhwSUhOMFJYWjBPbUZqZEdsdmJqMGlZM0psWVhSbFpDSWdjM1JGZG5RNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEcG1ZakF4WkRsak9TMWhaVEppTFdOaE5ETXRPREV5WWkxaFptWXlOelUyTm1WaU9XSWlJSE4wUlhaME9uZG9aVzQ5SWpJd01Ua3RNRFF0TVRaVU1UUTZOVE02TWpVck1EZzZNREFpSUhOMFJYWjBPbk52Wm5SM1lYSmxRV2RsYm5ROUlrRmtiMkpsSUZCb2IzUnZjMmh2Y0NCRFF5QXlNREU1SUNoWGFXNWtiM2R6S1NJdlBpQThjbVJtT214cElITjBSWFowT21GamRHbHZiajBpYzJGMlpXUWlJSE4wUlhaME9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZabUZtWmpOalpUZ3RZVFV5T0MweFpUUTVMV0V3T0dVdFltSTRNalkyT1RrME1UbGxJaUJ6ZEVWMmREcDNhR1Z1UFNJeU1ERTVMVEEwTFRFMlZERTBPalV6T2pJMUt6QTRPakF3SWlCemRFVjJkRHB6YjJaMGQyRnlaVUZuWlc1MFBTSkJaRzlpWlNCUWFHOTBiM05vYjNBZ1EwTWdNakF4T1NBb1YybHVaRzkzY3lraUlITjBSWFowT21Ob1lXNW5aV1E5SWk4aUx6NGdQQzl5WkdZNlUyVnhQaUE4TDNodGNFMU5Pa2hwYzNSdmNuaytJRHh3YUc5MGIzTm9iM0E2Ukc5amRXMWxiblJCYm1ObGMzUnZjbk0rSUR4eVpHWTZRbUZuUGlBOGNtUm1PbXhwUGtOR09FVTNNVU0wUmpFeU56QTBSamM0TURWR1JVSTRORGM1TUVSRlJUY3hQQzl5WkdZNmJHaytJRHh5WkdZNmJHaytZV1J2WW1VNlpHOWphV1E2Y0dodmRHOXphRzl3T2pFMk9XUTFaRGswTFdSak1Ua3RNVEZsTnkwNVpHVTRMV1l3TkRVd05ERTFZV0UxTmp3dmNtUm1PbXhwUGlBOGNtUm1PbXhwUG1Ga2IySmxPbVJ2WTJsa09uQm9iM1J2YzJodmNEbzRNV0ZtWXpGaE9DMDBNbU5sTFRFeE5HTXRPVFV3TkMwd05tUXpNekF6WmpoaU1UZzhMM0prWmpwc2FUNGdQSEprWmpwc2FUNWhaRzlpWlRwa2IyTnBaRHB3YUc5MGIzTm9iM0E2T0RkbFlXWXdaV0l0WWpsbE9TMDRNelF3TFRreU5HTXRNMlk0Wm1Rd1ltWTJNRGsxUEM5eVpHWTZiR2srSUR4eVpHWTZiR2srWVdSdlltVTZaRzlqYVdRNmNHaHZkRzl6YUc5d09qazFPVFF3TURsbUxXWmlNVEF0TmprME1TMWlNalV3TFdNMk1HVm1ZelF3TnpJMU5Ed3ZjbVJtT214cFBpQThjbVJtT214cFBtRmtiMkpsT21SdlkybGtPbkJvYjNSdmMyaHZjRHBqTURVd05UWTNNQzA1TmpGakxUWTFORGt0WVRFMk15MWhZamMzTURrNFpHUXpNVE04TDNKa1pqcHNhVDRnUEhKa1pqcHNhVDU0YlhBdVpHbGtPakF4TlVReE1UbEJNRUkwTlRFeFJUazVOMFpDT1VKQ01qRTRNa1ExT1RnNFBDOXlaR1k2YkdrK0lEeHlaR1k2YkdrK2VHMXdMbVJwWkRvd01qSkRNelkyTUVVeE56TkZOakV4T1RZeE5rUXdOa1V5TVVZeFJVVTVSVHd2Y21SbU9teHBQaUE4Y21SbU9teHBQbmh0Y0M1a2FXUTZNRGszUlRJeE5rUkdNRVpCTVRGRk4wSTRPVU5EUXpSRVJEazNSVUpFTkRBOEwzSmtaanBzYVQ0Z1BISmtaanBzYVQ1NGJYQXVaR2xrT2pFeVJFWkJRekF5TWpKQk9ERXhSVGs0TWpNM1JEY3hSRGM1UkRRM00wVTJQQzl5WkdZNmJHaytJRHh5WkdZNmJHaytlRzF3TG1ScFpEb3hNekV4TkVKR1JqZ3pORFl4TVVVNFFqTXhSVVkyUmtaQlJUUkRPVFZCUWp3dmNtUm1PbXhwUGlBOGNtUm1PbXhwUG5odGNDNWthV1E2TVRNek1EQkJOME5HTUVaQk1URkZOemhDTVRVNU5UVkVPVFEzT1VZMVFVRThMM0prWmpwc2FUNGdQSEprWmpwc2FUNTRiWEF1Wkdsa09qRkJRamRGUlVJNFJqWTNRakV4UlRkQlFqUkVSVEl3TmpJNE5rUkVRME16UEM5eVpHWTZiR2srSUR4eVpHWTZiR2srZUcxd0xtUnBaRG94UTBSQk5ESTJSa1l3UmtFeE1VVTNPREJFUlRoR056TkVPVU01UXpWQ05qd3ZjbVJtT214cFBpQThjbVJtT214cFBuaHRjQzVrYVdRNk1VWkJPVVl6TVRORU1VUTFNVEZGT0VGQ1FqQkNORGMxT1VJMFJETXhNa1U4TDNKa1pqcHNhVDRnUEhKa1pqcHNhVDU0YlhBdVpHbGtPakl6UWpkQk1VUTNSalZFTnpFeFJUYzVRall4UmtRNFJFSkVNRVJGTmpRMFBDOXlaR1k2YkdrK0lEeHlaR1k2YkdrK2VHMXdMbVJwWkRveU5ETkdSRGRFUXpCQ05EUXhNVVU1T1RrNFEwVkROVE01TWpWRlF6RTNORHd2Y21SbU9teHBQaUE4Y21SbU9teHBQbmh0Y0M1a2FXUTZNalExT1VJM1JqY3lNMEU1TVRGRk9UbEdSVFk0TUVZeE0wVkJNRUUyUWpVOEwzSmtaanBzYVQ0Z1BISmtaanBzYVQ1NGJYQXVaR2xrT2pKRk9VSkJPRGMyUmpaRVFVVTNNVEZCUVVJMlJVUXpSVUl3TVRrMU1UQXhQQzl5WkdZNmJHaytJRHh5WkdZNmJHaytlRzF3TG1ScFpEb3pNRFJCTkRNME16QTBRVFF4TVVVNFFrUTRRVUUyTURZMlFUVXdOak5HUWp3dmNtUm1PbXhwUGlBOGNtUm1PbXhwUG5odGNDNWthV1E2TXpFNVFrRTROelpHTmtSQlJUY3hNVUZCUWpaRlJETkZRakF4T1RVeE1ERThMM0prWmpwc2FUNGdQSEprWmpwc2FUNTRiWEF1Wkdsa09qTXhSRFkzUWpJME1EUkROakV4UlRoQk1ETkZSRGt3TTBReE5VVTNNakU1UEM5eVpHWTZiR2srSUR4eVpHWTZiR2srZUcxd0xtUnBaRG96TWtRNE5ERTBOa1F4TVVVeE1VVTRPVU5HTVVZeU5URkJNVVpGUWpKR016d3ZjbVJtT214cFBpQThjbVJtT214cFBuaHRjQzVrYVdRNk16UkdNME5HTkVVd04wVTFNVEZGT0VJME5UQkJSVEZGUlRoRk1VSTNRa0U4TDNKa1pqcHNhVDRnUEhKa1pqcHNhVDU0YlhBdVpHbGtPak0zT0VVNVF6WkJPVVJFTkVVek1URTRNREV3UWtaR05VRTJOVVZCTWtGQlBDOXlaR1k2YkdrK0lEeHlaR1k2YkdrK2VHMXdMbVJwWkRvek9UWXpSRVEyTWpBMFF6WXhNVVU0T0RoQ09FVTFPRU0xUkVJd09ETTBSVHd2Y21SbU9teHBQaUE4Y21SbU9teHBQbmh0Y0M1a2FXUTZNemxqTnpJM09XVXROVEZqTWkwek9UUmxMVGd3T1dJdE5XUXpNakF4TnpZd09EVTBQQzl5WkdZNmJHaytJRHh5WkdZNmJHaytlRzF3TG1ScFpEbzBNRFUxTXpnMFF6QXhRekl4TVVVNU9VTTRNa016UXpoR09Ea3lNREJHUVR3dmNtUm1PbXhwUGlBOGNtUm1PbXhwUG5odGNDNWthV1E2TkRaQlJrTTRNVFJFUmtRNU1URkZOemt3T1RBNU16UkdOamMwT0RZd1FqVThMM0prWmpwc2FUNGdQSEprWmpwc2FUNTRiWEF1Wkdsa09qUTRNelU1TmpWRk1EY3lPVEV4UlRsQ05qVTBRekJETkRrMVFVVkROMFkwUEM5eVpHWTZiR2srSUR4eVpHWTZiR2srZUcxd0xtUnBaRG8wT0RrNE5rSTRPREl5UlRjeE1VVTVRVE16UkVORk4wSTBRemN3TXpReE56d3ZjbVJtT214cFBpQThjbVJtT214cFBuaHRjQzVrYVdRNk5FWXlNVE14TXpWRk9VTXdNVEZGTlVFM1FqSkdPVE5ETlVFM056RTFNekk4TDNKa1pqcHNhVDRnUEhKa1pqcHNhVDU0YlhBdVpHbGtPalV3UkVORVEwTXpSakV4TkRFeFJUYzVNVFpFUVVReU5qWkVOVVExTnpSQlBDOXlaR1k2YkdrK0lEeHlaR1k2YkdrK2VHMXdMbVJwWkRvMU5EQXdOREJDTnpFMU56UXhNVVU1UVRWRk5VTkJNRGRCUkVKRFFUUkJPRHd2Y21SbU9teHBQaUE4Y21SbU9teHBQbmh0Y0M1a2FXUTZOVUkzTmtRd01qY3dORVJGTVRGRk9FRkdOVGxGT1RORE56QXpNVUl6T1RrOEwzSmtaanBzYVQ0Z1BISmtaanBzYVQ1NGJYQXVaR2xrT2pZeFFVUXpOVVZETkVSRVJVVTNNVEZCUXpZMVEwUkdPVGd4TXpBek16a3hQQzl5WkdZNmJHaytJRHh5WkdZNmJHaytlRzF3TG1ScFpEbzJOakUwUTBaQlFUTkNNREV4TVVVNVFqRkZORGxHTmtReU1qa3dPVFZFUlR3dmNtUm1PbXhwUGlBOGNtUm1PbXhwUG5odGNDNWthV1E2TmpZM056SXhRVEV3TkVSRk1URkZPRGd4TmpOQ09UbEdNa1l4UXpNMFJrSThMM0prWmpwc2FUNGdQSEprWmpwc2FUNTRiWEF1Wkdsa09qWTRNemhEUTBVMFFqY3dNVVUwTVRFNU1UTTNSRFJGUkVReVFVTkJPVVpHUEM5eVpHWTZiR2srSUR4eVpHWTZiR2srZUcxd0xtUnBaRG8yUkVSRU16TkdRakEwUkVVeE1VVTRRakpHTWtNNVFUbEROamcyTURFNVJqd3ZjbVJtT214cFBpQThjbVJtT214cFBuaHRjQzVrYVdRNk5rVkNOVE0wTnpKR05qZENNVEZGTjBJNE1EUkdSRE16T1RWRlJqUTJRVGc4TDNKa1pqcHNhVDRnUEhKa1pqcHNhVDU0YlhBdVpHbGtPalppWlRNeVpXRTBMV1prTXpjdE9EazBNeTA1TVRobExUazBZV0poTjJSaE1qQXlOand2Y21SbU9teHBQaUE4Y21SbU9teHBQbmh0Y0M1a2FXUTZOemN6TmpNek0wVXdORVJGTVRGRk9Ea3hOamxETWpaRlFUaEZPVFF6UlVJOEwzSmtaanBzYVQ0Z1BISmtaanBzYVQ1NGJYQXVaR2xrT2pkRE9FTTRSRFV3TmpCRVFVVTNNVEZDTWprd1FrSkVRemxHTlVKR1F6VTJQQzl5WkdZNmJHaytJRHh5WkdZNmJHaytlRzF3TG1ScFpEbzNSVEUyTmpFMk1VWXhSalF4TVVVM1FqZzNNemt3UlRjME9UTTFOVGMzTXp3dmNtUm1PbXhwUGlBOGNtUm1PbXhwUG5odGNDNWthV1E2T0RBeU5EQkNRekZHTlVReU1URkZOemswTTBWQ05rUXhNVGt5T0VOQlJUTThMM0prWmpwc2FUNGdQSEprWmpwc2FUNTRiWEF1Wkdsa09qZ3hOamhHUVRFMk9UbEVNRVV6TVRGQ1FqbEJPVVEyUlRsRU4wTkROalU0UEM5eVpHWTZiR2srSUR4eVpHWTZiR2srZUcxd0xtUnBaRG80TWpCRE5EZ3lSRVUxTmpFeE1VVTNPRGRFUmpnNE56VTFPVGRCUmpVMlFUd3ZjbVJtT214cFBpQThjbVJtT214cFBuaHRjQzVrYVdRNk9ETkJPVUk1TkVZelF6QXpNVEZGT1VKQ09URkdPVEF3UmpORlJqTkNNamM4TDNKa1pqcHNhVDRnUEhKa1pqcHNhVDU0YlhBdVpHbGtPamhHUlRBNE5UWTFSRU14TmpFeFJUZENNak01UVRJNU5FTTVRMFJCTlRNeFBDOXlaR1k2YkdrK0lEeHlaR1k2YkdrK2VHMXdMbVJwWkRvNFpUQmpZV1JoWWkwd05UWmlMV1JsTkRjdE9HVTBOQzB6WmpWbVl6UTRabU0yTVRjOEwzSmtaanBzYVQ0Z1BISmtaanBzYVQ1NGJYQXVaR2xrT2prd1EwUTBRa1EzTURsQk1URXhSVGxCUmpBMFF6YzRRakU0TVVNeU0wTkdQQzl5WkdZNmJHaytJRHh5WkdZNmJHaytlRzF3TG1ScFpEbzVNa1EzTVROQ01UQXpOelV4TVVVNU9EWXdNRUl6T0RKQ01VSTRNVEkzTkR3dmNtUm1PbXhwUGlBOGNtUm1PbXhwUG5odGNDNWthV1E2T1VRNE1qbENRa0ZHT1VWRU1URkZPRUl3UmpKRlJUUkJNa1kyUTBFNU1VWThMM0prWmpwc2FUNGdQSEprWmpwc2FUNTRiWEF1Wkdsa09qbEVSa1pCUVRBM1JqVkVNakV4UlRkQ09VVXhSVVV4TnpSRE5UQXdOa1ZEUEM5eVpHWTZiR2srSUR4eVpHWTZiR2srZUcxd0xtUnBaRHBCT1VJek5qTXpNa1kxUkRJeE1VVTNRamREUmtNM01qSTBPRUUwT0VGQk1qd3ZjbVJtT214cFBpQThjbVJtT214cFBuaHRjQzVrYVdRNlFVWXdRa1pDTVRKR05EUTJNVEZGTnpnd09FUkVSVEExTVRBM01ESkdNemM4TDNKa1pqcHNhVDRnUEhKa1pqcHNhVDU0YlhBdVpHbGtPa0ZHTjBZM1EwUkJNVFpDUmpFeFJUTTVSa1UxUWpFd1JrRkNOMEU1TmpWQ1BDOXlaR1k2YkdrK0lEeHlaR1k2YkdrK2VHMXdMbVJwWkRwQ01ERkZRakU0TTBZMVJESXhNVVUzUWpJNVFrRTRORVJGTmtNNE1EaENNand2Y21SbU9teHBQaUE4Y21SbU9teHBQbmh0Y0M1a2FXUTZRakpCT1RCRE4wTkdOamM1TVRGRk56a3hORU5DUVRsR1JEWkRSRGRCTXpNOEwzSmtaanBzYVQ0Z1BISmtaanBzYVQ1NGJYQXVaR2xrT2tJelFUWXdSRFJHUkVVME9URXhSVGM1TmpBMVJEUTNRVGt4TWpaRk9EazFQQzl5WkdZNmJHaytJRHh5WkdZNmJHaytlRzF3TG1ScFpEcENRekZGUkRRMk9ESkVSRFl4TVVVNVFVWkRORVkxUkVNM1F6QTBSVUl5UkR3dmNtUm1PbXhwUGlBOGNtUm1PbXhwUG5odGNDNWthV1E2UWtVeE5EbENNakZFT0VORlJUUXhNVUpHUWpaR04wUXpNa0UzUVRZME9VTThMM0prWmpwc2FUNGdQSEprWmpwc2FUNTRiWEF1Wkdsa09rTXlNVFE1UWpJeFJEaERSVVUwTVRGQ1JrSTJSamRFTXpKQk4wRTJORGxEUEM5eVpHWTZiR2srSUR4eVpHWTZiR2srZUcxd0xtUnBaRHBETkVJeVF6VkZPRVZCTWpReE1VVTNRalpHTkVKRU5FSkRNVEkxTVRJd1JUd3ZjbVJtT214cFBpQThjbVJtT214cFBuaHRjQzVrYVdRNlEwTkdNVEZFTVRKR09FUkJSVGN4TVVGQlFqWkZSRE5GUWpBeE9UVXhNREU4TDNKa1pqcHNhVDRnUEhKa1pqcHNhVDU0YlhBdVpHbGtPa1F4UlVJNE5qQkZORU5FUVVVM01URkNNamt3UWtKRVF6bEdOVUpHUXpVMlBDOXlaR1k2YkdrK0lEeHlaR1k2YkdrK2VHMXdMbVJwWkRwRU5qVkROa1ZHUVVVNVFrUXhNVVUxT0RGRFJrVXlSRGRHUVRVeVFUUkNSRHd2Y21SbU9teHBQaUE4Y21SbU9teHBQbmh0Y0M1a2FXUTZSRU0wUVVReE1qWXpOVUUxTVRGRk9VRkdNa001TlRrMU5VSTJPREZCUkVROEwzSmtaanBzYVQ0Z1BISmtaanBzYVQ1NGJYQXVaR2xrT2tVeE9UZEdRMFk0UmpsRFJERXhSVGhDT1RWRVFVRkNNVE13UmtVNU1qRTVQQzl5WkdZNmJHaytJRHh5WkdZNmJHaytlRzF3TG1ScFpEcEZOVUpHUVVGQ1FUZzVRVGN4TVVVNFFqWTRNVGxFTkRWRU5EaEVORVJDUmp3dmNtUm1PbXhwUGlBOGNtUm1PbXhwUG5odGNDNWthV1E2UlVNd09USXhNREkzUWpaQk1URkZPRUpGUkROQk1UTXpOa1UyUWpWRU5EazhMM0prWmpwc2FUNGdQSEprWmpwc2FUNTRiWEF1Wkdsa09rWXdSRGd3TWpSRlJFTTNNMFUyTVRFNU5qRTJSREEyUlRJeFJqRkZSVGxGUEM5eVpHWTZiR2srSUR4eVpHWTZiR2srZUcxd0xtUnBaRHBoTjJWaE9UUTRZaTAwWVRNeExUZ3pOREl0WVdOaU1pMHpOVEZpTXpBeE5qVTJaamc4TDNKa1pqcHNhVDRnUEhKa1pqcHNhVDU0YlhBdVpHbGtPbU13TURnd1lqVTBMVFJqTUdJdFlqVTBOUzA0WkRRNUxUYzNZVFkyTW1KaU1qUXpZVHd2Y21SbU9teHBQaUE4Y21SbU9teHBQbmh0Y0M1a2FXUTZaREkxTTJZeE16QXRaVE5qWWkwNU56UXdMVGt5Tm1JdE5EbGlZMlU0Tm1ReU9HWmxQQzl5WkdZNmJHaytJRHh5WkdZNmJHaytlRzF3TG1ScFpEcGxNekF3TVRVMVlpMDRPREkxTFRJd05ESXRZVEl3TnkweU5tUXdaVFZoTm1KaE1UVThMM0prWmpwc2FUNGdQSEprWmpwc2FUNTRiWEF1Wkdsa09tVmtOVGhtT0RFMExUZGlaR1F0TXpJME1DMWhOamMxTFdZek9HRXpNVGRoTURZeE5Ed3ZjbVJtT214cFBpQThMM0prWmpwQ1lXYytJRHd2Y0dodmRHOXphRzl3T2tSdlkzVnRaVzUwUVc1alpYTjBiM0p6UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUGhEYXc5SUFBQUJrU1VSQlZFaUpZL3ovL3o4RExRRVRUVTJuaHdVc01JWk81aEtxaHRXVjZUR01EQXhvUHJneVBZYmh5dlFZcXZFeExLQUZZSVNsSWxvRkVRdWFJRlVNMThsY0FtY1AvV1E2YXNHb0JaUURsSXlHbkVHb0JVWUxPNXdBVnRneGp0YkpBMjRCQU9SRVArd3lyeUU5QUFBQUFFbEZUa1N1UW1DQ1wiIiwiaW1wb3J0ICogYXMgVUlFeHRlbnNpb24gZnJvbSAnVUlFeHRlbnNpb24nO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9FdmVudHNcIjtcblxuY29uc3QgUERGVmlld0N0cmwgPSBVSUV4dGVuc2lvbi5QREZWaWV3Q3RybDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlTXVsdGlNZWRpYVN0YXRlSGFuZGxlciBleHRlbmRzIFBERlZpZXdDdHJsLklTdGF0ZUhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yIChwZGZWaWV3ZXIpIHtcbiAgICAgICAgc3VwZXIocGRmVmlld2VyLCBcInNxdWFyZVwiKTtcbiAgICAgICAgdGhpcy5wZGZWaWV3ZXIgPSBwZGZWaWV3ZXI7XG4gICAgICAgIHRoaXMuY3Vyc29yU3R5bGU9XCJmdl9fY3Vyc29yLWNyb3NzXCI7XG4gICAgICAgIHRoaXMuZGVzdHJveUhvb2tzID0gW107XG4gICAgfVxuICAgIHN0YXRpYyBnZXRTdGF0ZU5hbWUgKCkge1xuICAgICAgICByZXR1cm4gXCJjcmVhdGUtbXVsdGktbWVkaWEtc3RhdGVcIjtcbiAgICB9XG4gICAgZ2V0RGV2aWNlUGFnZVBvaW50KGVsZW0sZXZlbnQpe1xuICAgICAgICBsZXQgcGFnZVJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAoKTtcbiAgICAgICAgbGV0IHNyY0V2ZW50ID0gZXZlbnQuc3JjRXZlbnQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogc3JjRXZlbnQuY2xpZW50WCAtIHBhZ2VSZWN0LmxlZnQgLSBldmVudC5kZWx0YVgsXG4gICAgICAgICAgeTogc3JjRXZlbnQuY2xpZW50WSAtIHBhZ2VSZWN0LnRvcCAtIGV2ZW50LmRlbHRhWSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgIGNvcnJlY3RQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlUmVuZGVyLmdldFBERlBhZ2UoKS50aGVuKHBhZ2UgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLnBhZ2VSZW5kZXIuZ2V0U2NhbGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gcGFnZS5nZXRQeFdpZHRoKCkgKiBzY2FsZTtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHBhZ2UuZ2V0UHhIZWlnaHQoKSAqIHNjYWxlO1xuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHdpZHRoLCBwb3NpdGlvbi54KSk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oaGVpZ2h0LCBwb3NpdGlvbi55KSk7XG4gICAgICAgICAgICByZXR1cm4ge3gsIHl9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhcnQocGFnZVJlbmRlciwge2xlZnQsIHRvcH0pIHtcbiAgICAgICAgaWYodGhpcy5zaGFwZUNvbnRyb2wpIHJldHVybjtcbiAgICAgICAgdGhpcy5zaGFwZUNvbnRyb2wgPSBuZXcgUERGVmlld0N0cmwuU2hhcGVDb250cm9sKHtcbiAgICAgICAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBlbmFibGVEaWFnb25hbGx5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNoYXBlQ29udHJvbC5hY3RpdmUocGFnZVJlbmRlci4kaGFuZGxlciwgcGFnZVJlbmRlci4kaGFuZGxlciwge1xuICAgICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZGp1c3Qoc2hhcGVDb250cm9sLCB7eDogc3gsIHk6IHN5fSwgeyB4OiBleCwgeTogZXkgfSkge1xuICAgICAgICBsZXQgbGVmdCwgdG9wO1xuICAgICAgICBsZXQgd2lkdGggPSBNYXRoLmFicyhzeCAtIGV4KTtcbiAgICAgICAgbGV0IGhlaWdodCA9IE1hdGguYWJzKHN5IC0gZXkpO1xuXG4gICAgICAgIGxlZnQgPSBNYXRoLm1pbihzeCwgZXgpO1xuICAgICAgICB0b3AgPSBNYXRoLm1pbihzeSwgZXkpO1xuICAgICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCAxKTtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0LCAxKTtcbiAgICAgICAgbGV0IHNoYXBlID0ge1xuICAgICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGJvdW5kYXJ5ID0ge1xuICAgICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgICAgcmlnaHQ6IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgICAgIGJvdHRvbTogdG9wICsgaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgc2hhcGVDb250cm9sLl9hcHBseUFubm90Qm91bmRhcnkoc2hhcGUpO1xuICAgICAgICBzaGFwZUNvbnRyb2wuc2hhcGUuYm91bmRhcnkgPSBib3VuZGFyeTtcbiAgICAgICAgc2hhcGVDb250cm9sLnNoYXBlLnNoYXBlID0gc2hhcGU7XG4gICAgICAgIHNoYXBlQ29udHJvbC5fdXBkYXRlUHJldmlld2VyKCk7XG4gICAgfVxuICAgIHBhZ2VIYW5kbGVyKHBhZ2VSZW5kZXIpIHtcbiAgICAgICAgdGhpcy5wYWdlUmVuZGVyID0gcGFnZVJlbmRlcjtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHBhZ2VSZW5kZXIuJGhhbmRsZXIuZ2V0KDApO1xuICAgICAgICBwYWdlUmVuZGVyLiRoYW5kbGVyLmFkZENsYXNzKHRoaXMuY3Vyc29yU3R5bGUpO1xuICAgICAgICBjb25zdCBoYW1tZXIgPSB0aGlzLmhhbW1lciA9IG5ldyBQREZWaWV3Q3RybC5EZXBzLkhhbW1lci5NYW5hZ2VyKGhhbmRsZXIpO1xuICAgICAgICBsZXQgJGhhbmRsZXIgPSBwYWdlUmVuZGVyLiRoYW5kbGVyO1xuICAgICAgICBoYW1tZXIuYWRkKFxuICAgICAgICAgICAgbmV3IEhhbW1lci5QYW4oe1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTExcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIGhhbW1lci5vbigncGFuc3RhcnQnLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQb2ludCA9IHRoaXMuZ2V0RGV2aWNlUGFnZVBvaW50KGhhbmRsZXIsZSk7XG4gICAgICAgICAgICBsZXQgbGVmdCA9IHRoaXMuc3RhcnRQb2ludC54O1xuICAgICAgICAgICAgbGV0IHRvcCA9IHRoaXMuc3RhcnRQb2ludC55O1xuXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KHBhZ2VSZW5kZXIsIHtsZWZ0LCB0b3B9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGhhbW1lci5vbigncGFubW92ZScsIGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ycmVjdFBvc2l0aW9uKHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnN0YXJ0UG9pbnQueCArIGUuZGVsdGFYLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuc3RhcnRQb2ludC55ICsgZS5kZWx0YVlcbiAgICAgICAgICAgIH0pLnRoZW4ocG9pbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBvaW50ID0gcG9pbnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRqdXN0KHRoaXMuc2hhcGVDb250cm9sLCB0aGlzLnN0YXJ0UG9pbnQsIHRoaXMuY3VycmVudFBvaW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaGFtbWVyLm9uKCdwYW5lbmQnLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29ycmVjdFBvc2l0aW9uKHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnN0YXJ0UG9pbnQueCArIGUuZGVsdGFYLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuc3RhcnRQb2ludC55ICsgZS5kZWx0YVlcbiAgICAgICAgICAgIH0pLnRoZW4ocG9pbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBvaW50ID0gcG9pbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGp1c3QodGhpcy5zaGFwZUNvbnRyb2wsIHRoaXMuc3RhcnRQb2ludCwgdGhpcy5jdXJyZW50UG9pbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMucGRmVmlld2VyLmV2ZW50RW1pdHRlci5lbWl0KEV2ZW50cy5hZGRTcXVhcmVBcmVhICwgcGFnZVJlbmRlciwgdGhpcy5zaGFwZUNvbnRyb2wuc2hhcGUuYm91bmRhcnkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hhcGVDb250cm9sLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXBlQ29udHJvbCA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGhhbW1lci5vbigncGFuY2FuY2VsJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNoYXBlQ29udHJvbC5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnNoYXBlQ29udHJvbCA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3lQYWdlSGFuZGxlcigpIHtcbiAgICAgICAgdGhpcy5oYW1tZXIgJiYgdGhpcy5oYW1tZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnBhZ2VSZW5kZXIuJGhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy5jdXJzb3JTdHlsZSk7XG4gICAgICAgIHRoaXMuZGVzdHJveUhvb2tzLmZvckVhY2goaG9vayA9PiBob29rKCkpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5pbXBvcnQgUG9wdXBDb21wb25lbnQgZnJvbSAnLi9wb3B1cC8nO1xuaW1wb3J0ICcuL3Njc3MvaW5kZXguY3NzJztcbmltcG9ydCBNdWx0aU1lZGlhQ2FsbGJhY2tDb250cm9sbGVyIGZyb20gXCIuL211bHRpTWVkaWFDYWxsYmFja0NvbnRyb2xsZXJcIlxuaW1wb3J0IGNvbXBpbGVUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLmFydCc7XG5pbXBvcnQgdHBtTG9hZGVyIGZyb20gJy4vYWRkb24uaW5mby5qc29uJztcbmNvbnN0IHRlbXBsYXRlID0gY29tcGlsZVRlbXBsYXRlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpTWVkaWFBZGRvbiBleHRlbmRzIFVJRXh0ZW5zaW9uLlVJWEFkZG9uIHtcbiAgICBzdGF0aWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdtdWx0aS1tZWRpYSc7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRMb2FkZXIoKSB7XG4gICAgICAgIHJldHVybiB0cG1Mb2FkZXI7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IFVJRXh0ZW5zaW9uLm1vZHVsYXIubW9kdWxlKCdtdWx0aS1tZWRpYScsIFtdKTtcbiAgICAgICAgY29uc3QgcmVnaXN0cnkgPSBtb2R1bGUuZ2V0UmVnaXN0cnkoKTtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHJlZ2lzdHJ5LnJlZ2lzdGVyQ29tcG9uZW50KFBvcHVwQ29tcG9uZW50KTtcbiAgICB9XG4gICAgZnJhZ21lbnRzKCkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgIHRhcmdldDogJ2NvbW1lbnQtdGFiLWdyb3VwLW1lZGlhJyxcbiAgICAgICAgICAgIGFjdGlvbjogVUlFeHRlbnNpb24uVUlDb25zdHMuRlJBR01FTlRfQUNUSU9OLkFQUEVORCxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICAgICAgICAgIGNvbmZpZzogW3tcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdtdWx0aS1tZWRpYS1idG4nLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdtdWx0aS1tZWRpYTpidXR0b25zLnRpdGxlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IE11bHRpTWVkaWFDYWxsYmFja0NvbnRyb2xsZXJcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dO1xuICAgIH1cbn07IiwiaW1wb3J0ICogYXMgVUlFeHRlbnNpb24gZnJvbSAnVUlFeHRlbnNpb24nO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9FdmVudHNcIjtcbmltcG9ydCBDcmVhdGVNdWx0aU1lZGlhU3RhdGVIYW5kbGVyIGZyb20gJy4vY3JlYXRlTXVsdGlNZWRpYVN0YXRlSGFuZGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpTWVkaWFDYWxsYmFja0NvbnRyb2xsZXIgZXh0ZW5kcyBVSUV4dGVuc2lvbi5TdGF0ZWZ1bENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yIChjb21wb25lbnQpIHtcbiAgICAgICAgc3VwZXIoY29tcG9uZW50LCBDcmVhdGVNdWx0aU1lZGlhU3RhdGVIYW5kbGVyKTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBwZXJtaXNzaW9uKCl7XG4gICAgICAgIHJldHVybiBVSUV4dGVuc2lvbi5QREZWaWV3Q3RybC5Db25zdHMuUERGRG9jUGVybWlzc2lvbi5Bbm5vdEZvcm1cbiAgICB9XG4gICAgcmVhZGVyRmlsZShmaWxlKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gICAgICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoZmlsZVJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYnVmZmVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmaWxlUmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtb3VudGVkKCkge1xuICAgICAgICBzdXBlci5tb3VudGVkKCk7XG5cbiAgICAgICAgdGhpcy5wb3BvcCA9IHRoaXMuZ2V0Q29tcG9uZW50QnlOYW1lKFwibXVsdGktbWVkaWEtcG9wdXBcIik7IFxuICAgICAgICB0aGlzLnBvcG9wLnJlbmRlcmVkKCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcGRmVWkgPSB0aGlzLmdldFBERlVJKCk7XG4gICAgICAgIHBkZlVpLmFkZFZpZXdlckV2ZW50TGlzdGVuZXIoRXZlbnRzLmFkZFNxdWFyZUFyZWEsIChwYWdlUmVuZGVyLCByZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvcG9wLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMucG9wb3Auc2V0U3VibWl0Q2FsbGJhY2soKGZpbGUsIHBvc3RGaWxlKT0+e1xuICAgICAgICAgICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gocGFnZVJlbmRlci5nZXRQREZQYWdlKCkpO1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5yZWFkZXJGaWxlKGZpbGUpKTtcbiAgICAgICAgICAgICAgICBpZihwb3N0RmlsZSl7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5yZWFkZXJGaWxlKHBvc3RGaWxlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKChkYXRhcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZSA9IGRhdGFzWzBdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZGZSZWN0ID0gcGFnZS5yZXZlcnNlRGV2aWNlUmVjdChyZWN0LHBhZ2VSZW5kZXIuc2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbXVsdGlCdWZmZXIgPSBkYXRhc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlQnVmZmVyO1xuICAgICAgICAgICAgICAgICAgICBpZihkYXRhc1syXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUJ1ZmZlciA9IGRhdGFzWzJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhZ2UuYWRkQW5ub3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NjcmVlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN0OiBwZGZSZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlCdWZmZXI6bXVsdGlCdWZmZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXI6aW1hZ2VCdWZmZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZpbGUudHlwZVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChhbm5vdHMpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbm5vdCA9IGFubm90c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHBhZ2VSZW5kZXIuYW5ub3RzUmVuZGVyLmdldEFubm90UmVuZGVyKGFubm90LmdldElkKCkpLmNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5hY3RpdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgVUlFeHRlbnNpb24gZnJvbSAnVUlFeHRlbnNpb24nO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuaW1wb3J0IG11bHRpTWVkaWFUcGwgZnJvbSBcIi4vbXVsdGktbWVkaWEuYXJ0XCI7XG5pbXBvcnQgUmVjb3JkIGZyb20gXCIuL3JlY29yZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwQ29tcG9uZW50IGV4dGVuZHMgVUlFeHRlbnNpb24ud2lkZ2V0cy5MYXllckNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnbXVsdGktbWVkaWEtcG9wdXAnO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbXVsdGktbWVkaWEtcG9wdXAnKTtcbiAgICB9XG5cbiAgICByZW5kZXJlZCgpIHtcbiAgICAgICAgdGhpcy5pc1JlY29yZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fdWktbGF5ZXItcGFuZWxcIikuaW5uZXJIVE1MID0gbXVsdGlNZWRpYVRwbCgpO1xuICAgICAgICB0aGlzLnJlY29yZEVycm9yRGl2ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX3JlY29yZC1lcnJvclwiKTtcblxuICAgICAgICB0aGlzLmxvY2FsaXplKCk7XG4gICAgfVxuICAgIHNldFN1Ym1pdENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgc2hvdygpe1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICByZXNldCgpe1xuICAgICAgICBsZXQgZmlsZUlucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX211bHRpLWZpbGVcIik7XG4gICAgICAgIGZpbGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGZpbGVJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgbGV0IHBvc3RlckZpbGVJbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19wb3N0ZXItZmlsZVwiKTtcbiAgICAgICAgcG9zdGVyRmlsZUlucHV0LnZhbHVlID1cIlwiO1xuICAgICAgICBpZih0aGlzLmF1ZGlvKXtcbiAgICAgICAgICAgIHRoaXMuYXVkaW8uc3JjID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnJlY29yZGVyKXtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkZXIuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RBdWRpb1VybCA9IFwiXCI7XG5cbiAgICAgICAgbGV0IHJhZGlvID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsZS10eXBlLXJhZGlvXCIpO1xuICAgICAgICByYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19hY3RpdmF0ZWRcIikuY2xhc3NMaXN0LnJlbW92ZShcImZ2X19hY3RpdmF0ZWRcIik7XG4gICAgICAgIHJhZGlvLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiZnZfX2FjdGl2YXRlZFwiKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19tdWx0aS1maWxlLWRpdlwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZnZfX211bHRpLWZpbGUtZXJyb3JcIik7XG5cbiAgICAgICAgdGhpcy5zdWJtaXRCdG4gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fbXVsdGktbWVkaWEtYnRuXCIpO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaGlkZVJlY29yZEVycm9yKCk7XG4gICAgfVxuICAgIGdldFZhbGlkYXRlZEZpbGVEYXRhcygpe1xuICAgICAgICBsZXQgZmlsZVJhZGlvID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsZS10eXBlLXJhZGlvXCIpO1xuICAgICAgICBsZXQgZmlsZTtcbiAgICAgICAgaWYoZmlsZVJhZGlvLmNoZWNrZWQpe1xuICAgICAgICAgICAgbGV0IGZpbGVJbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19tdWx0aS1maWxlXCIpO1xuICAgICAgICAgICAgZmlsZSA9IGZpbGVJbnB1dC5maWxlc1swXTtcbiAgICAgICAgICAgIGlmKGZpbGUpe1xuICAgICAgICAgICAgICAgIGxldCBmaWxlRXh0ID0gZmlsZS5uYW1lLnN1YnN0cihmaWxlLm5hbWUubGFzdEluZGV4T2YoXCIuXCIpKTtcbiAgICAgICAgICAgICAgICBsZXQgdmlkZW9FeHRzID0gWycubXA0JywgJy5tcDMnLCAnLm00YScsICcud2F2J107XG4gICAgICAgICAgICAgICAgaWYodmlkZW9FeHRzLmluZGV4T2YoZmlsZUV4dCkgPT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKHRoaXMucmVjb3JkZXIpe1xuICAgICAgICAgICAgbGV0IHJlY29yZEJ0biA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19yZWNvcmQtcmVjb3JkXCIpO1xuICAgICAgICAgICAgaWYoIXJlY29yZEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJmdl9fcmVjb3JkaW5nXCIpKXsgICAgXG4gICAgICAgICAgICAgICAgbGV0IGJsb2IgPSB0aGlzLnJlY29yZGVyLmdldEJsb2IoKTtcbiAgICAgICAgICAgICAgICBpZihibG9iKXtcbiAgICAgICAgICAgICAgICAgICAgZmlsZSA9IG5ldyBGaWxlKFtibG9iXSwgXCJyZWNvcmQud2F2XCIsIHt0eXBlOiBcImF1ZGlvL3dhdlwifSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBwb3N0ZXJGaWxlSW5wdXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fcG9zdGVyLWZpbGVcIik7XG4gICAgICAgIGxldCBwb3N0ZXJGaWxlID0gcG9zdGVyRmlsZUlucHV0LmZpbGVzWzBdO1xuICAgICAgICBpZihwb3N0ZXJGaWxlKXtcbiAgICAgICAgICAgIGxldCBmaWxlRXh0ID0gcG9zdGVyRmlsZS5uYW1lLnN1YnN0cihwb3N0ZXJGaWxlLm5hbWUubGFzdEluZGV4T2YoXCIuXCIpKTtcbiAgICAgICAgICAgIGxldCBpbWFnZUV4dHMgPSBbJy5wbmcnLCAnLmpwZycsICcuanBlZycsICcuZ2lmJ107XG4gICAgICAgICAgICBpZihpbWFnZUV4dHMuaW5kZXhPZihmaWxlRXh0KSA9PT0gLTEpe1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZighZmlsZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICAgICAgICAvLyB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fbXVsdGktZmlsZS1kaXZcIikuY2xhc3NMaXN0LmFkZChcImZ2X19tdWx0aS1maWxlLWVycm9yXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0QnRuLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZmlsZSwgcG9zdGVyRmlsZV07XG4gICAgfVxuXG4gICAgbW91bnRlZCgpe1xuICAgICAgICBzdXBlci5tb3VudGVkKCk7XG4gICAgICAgIGxldCBhdWRpbyA9IHRoaXMuYXVkaW8gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fcmVjb3JkLWF1ZGlvXCIpO1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fbXVsdGktZmlsZVwiKS5hZGRFdmVudExpc3RlbmVyICgnY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VmFsaWRhdGVkRmlsZURhdGFzKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fbXVsdGktZmlsZS1kaXZcIikuY2xhc3NMaXN0LnJlbW92ZShcImZ2X19tdWx0aS1maWxlLWVycm9yXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX211bHRpLW1lZGlhLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyICgnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGZpbGVEYXRhID0gdGhpcy5nZXRWYWxpZGF0ZWRGaWxlRGF0YXMoKTtcbiAgICAgICAgICAgIGlmKGZpbGVEYXRhID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX211bHRpLWZpbGUtZGl2XCIpLmNsYXNzTGlzdC5hZGQoXCJmdl9fbXVsdGktZmlsZS1lcnJvclwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLmNhbGxiYWNrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrKC4uLmZpbGVEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fbXVsdGktbWVkaWEtY2FuY2VsXCIpLmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHJhZGlvcyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpbGUtdHlwZS1yYWRpb1wiKTtcbiAgICAgICAgcmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xuICAgICAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lciAoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRWYWxpZGF0ZWRGaWxlRGF0YXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZEVycm9yRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRFcnJvckRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZnZfX3JlY29yZC1lcnJvci1zaG93XCIpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19tdWx0aS1maWxlLWRpdlwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZnZfX211bHRpLWZpbGUtZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX2FjdGl2YXRlZFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZnZfX2FjdGl2YXRlZFwiKTtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcImZ2X19hY3RpdmF0ZWRcIik7XG4gICAgICAgICAgICAgICAgaWYoZS50YXJnZXQudmFsdWUgPT0gMSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEF1ZGlvVXJsID0gdGhpcy5hdWRpby5zcmM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW8uc3JjID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX211bHRpLWZpbGVcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW8uc3JjID0gdGhpcy5sYXN0QXVkaW9Vcmw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19tdWx0aS1maWxlXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fcmVjb3JkLXJlY29yZFwiKS5hZGRFdmVudExpc3RlbmVyICgnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGZpbGVSYWRpbyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbGUtdHlwZS1yYWRpb1wiKTtcbiAgICAgICAgICAgIGlmKGZpbGVSYWRpby5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhpZGVSZWNvcmRFcnJvcigpO1xuICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnZfX3JlY29yZGluZ1wiKSl7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImZ2X19yZWNvcmRpbmdcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRlci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRlci5wbGF5KGF1ZGlvKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFZhbGlkYXRlZEZpbGVEYXRhcygpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IDA7XG4gICAgICAgICAgICAgICAgUmVjb3JkLmdldCgocmVjKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJmdl9fcmVjb3JkaW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFZhbGlkYXRlZEZpbGVEYXRhcygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZGVyID0gcmVjO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZGVyLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWUgPSBwYXJzZUludChlLnBsYXliYWNrVGltZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRpbWUgPiBzdGFydFRpbWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gdGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkZXIucGxheShhdWRpbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1JlY29yZEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGhpZGVSZWNvcmRFcnJvcigpe1xuICAgICAgICB0aGlzLnJlY29yZEVycm9yRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMucmVjb3JkRXJyb3JEaXYuY2xhc3NMaXN0LnJlbW92ZShcImZ2X19yZWNvcmQtZXJyb3Itc2hvd1wiKTtcbiAgICB9XG4gICAgc2hvd1JlY29yZEVycm9yKGVycil7XG4gICAgICAgIC8qXG5cbiAgICAgICAgXCJEZXZpY2VOb3RGb3VuZEVycm9yXCI6IFwiVGhlIGRldmljZSBub3QgZm91bmQuXCIsXG4gICAgICAgIFwiVHJhY2tTdGFydEVycm9yXCI6IFwiTWljcm9waG9uZSBhcmUgYWxyZWFkeSBpbiB1c2UuXCIsXG4gICAgICAgIFwiUGVybWlzc2lvbkRlbmllZEVycm9yXCI6IFwiUGxlYXNlIGNoZWNrIGlmIHlvdXIgYnJvd3NlciBpcyBhbGxvd2VkIGZvciBhIG1pY3JvcGhvbmUuXCIsXG4gICAgICAgIFwiQnJvd3Nlck5vdFN1cHBvcnRlZFwiOiBcIkJyb3dzZXIgbm90IHN1cHBvcnRlZC5cIlxuXG4gICAgICAgICovXG4gICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICBsZXQgdHlwZSA9IGVyci5uYW1lIHx8IGVyci5tZXNzYWdlO1xuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIGxldCBtc2c7XG4gICAgICAgIGlmKHR5cGUgPT0gXCJOb3RGb3VuZEVycm9yXCIgfHwgdHlwZSA9PSBcIkRldmljZU5vdEZvdW5kRXJyb3JcIil7XG4gICAgICAgICAgICBlcnJvciA9IFwiRGV2aWNlTm90Rm91bmRFcnJvclwiO1xuICAgICAgICAgICAgbXNnID0gXCJUaGUgZGV2aWNlIG5vdCBmb3VuZC5cIjtcbiAgICAgICAgICAgIC8vIHJlcXVpcmUgdHJhY2sgaXMgbWlzc2luZ1xuICAgICAgICB9ZWxzZSBpZih0eXBlID09IFwiTm90UmVhZGFibGVFcnJvclwiIHx8IHR5cGUgPT0gXCJUcmFja1N0YXJ0RXJyb3JcIil7XG4gICAgICAgICAgICBlcnJvciA9IFwiVHJhY2tTdGFydEVycm9yXCI7XG4gICAgICAgICAgICBtc2cgPSBcIk1pY3JvcGhvbmUgYXJlIGFscmVhZHkgaW4gdXNlLlwiO1xuICAgICAgICAgICAgLy8gd2ViY2FtIG9yIG1pYyBhcmUgYWxyZWFkeSBpbiB1c2VcbiAgICAgICAgfWVsc2UgaWYodHlwZSA9PSBcIk5vdEFsbG93ZWRFcnJvclwiIHx8IHR5cGUgPT0gXCJQZXJtaXNzaW9uRGVuaWVkRXJyb3JcIil7XG4gICAgICAgICAgICBlcnJvciA9IFwiUGVybWlzc2lvbkRlbmllZEVycm9yXCI7XG4gICAgICAgICAgICBtc2cgPSBcIlBsZWFzZSBjaGVjayBpZiB5b3VyIGJyb3dzZXIgaXMgYWxsb3dlZCBmb3IgYSBtaWNyb3Bob25lLlwiO1xuICAgICAgICAgICAgLy8gcGVybWlzc2lvbiBkZW5pZWQgaW4gYnJvd3NlclxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBpZihsb2NhdGlvbi5wcm90b2NvbCA9PSBcImh0dHA6XCIpe1xuICAgICAgICAgICAgICAgIG1zZyA9IFwiVGhpcyBhdWRpbyBmZWF0dXJlIHJlcXVpcmVzIEhUVFBTIHRvIGNvbnRpbnVlLlwiO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSB0eXBlO1xuICAgICAgICAgICAgICAgIG1zZyA9IFwiQnJvd3NlciBub3Qgc3VwcG9ydGVkLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gb3RoZXIgZXJyb3JzXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWNvcmRFcnJvckRpdi5pbm5lckhUTUwgPSBtc2c7XG4gICAgICAgIHRoaXMucmVjb3JkRXJyb3JEaXYuY2xhc3NMaXN0LmFkZChcImZ2X19yZWNvcmQtZXJyb3Itc2hvd1wiKTtcblxuICAgICAgICAvLyBsZXQgcGRmVWkgPSB0aGlzLmdldFBERlVJKCk7XG4gICAgICAgIC8vIGxldCBrZXkgPSBcIm11bHRpLW1lZGlhOmRpYWxvZy5cIiArIGVycm9yO1xuICAgICAgICAvLyBwZGZVaS5sb2NhbGl6ZXIudHJhbnNsYXRlKGtleSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5yZWNvcmRFcnJvckRpdi5pbm5lckhUTUwgPSByZXN1bHQ7XG4gICAgICAgIC8vICAgICB0aGlzLnJlY29yZEVycm9yRGl2LmNsYXNzTGlzdC5hZGQoXCJmdl9fcmVjb3JkLWVycm9yLXNob3dcIik7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgfVxufVxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCI8ZGl2IGNsYXNzPVwiZnZfX211bHRpLWZpbGUtZGl2XCI+XG4gICAgPGRpdiBjbGFzcz1cImZ2X19tdWx0aS1pdGVtIGZ2X19hY3RpdmF0ZWRcIj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmaWxlLXR5cGVcIiBjbGFzcz1cImZpbGUtdHlwZS1yYWRpb1wiIHZhbHVlPVwiMVwiIGNoZWNrZWQgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnZfX211bHRpLWZpbGUtbGFiZWxcIj5GaWxlOiA8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiZnZfX211bHRpLWZpbGVcIiBhY2NlcHQ9XCJhdWRpby93YXYsIGF1ZGlvL21wZWcsIGF1ZGlvL21wNCwgdmlkZW8vbXA0XCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZnZfX211bHRpLWl0ZW1cIj5cbiAgICAgICAgPGF1ZGlvIGNsYXNzPVwiZnZfX3JlY29yZC1hdWRpb1wiIGNvbnRyb2xzIGNvbnRyb2xzbGlzdD1cIm5vZG93bmxvYWRcIiBjb250cm9sc2xpc3Q9XCJub2Z1bGxzY3JlZW5cIj48L2F1ZGlvPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImZpbGUtdHlwZVwiIGNsYXNzPVwiZmlsZS10eXBlLXJhZGlvXCIgdmFsdWU9XCIyXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnZfX211bHRpLWZpbGUtbGFiZWxcIj5SZWNvcmRlcjogPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZ2X19yZWNvcmQtcmVjb3JkXCI+PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZnZfX3JlY29yZC1lcnJvclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZnZfX211bHRpLWZpbGUtZGl2XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJmdl9fbXVsdGktZmlsZS1sYWJlbCBmdl9fcG9zdGVyLWZpbGUtbGFiZWxcIj5Qb3N0ZXIgRmlsZTogPC9zcGFuPlxuICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiZnZfX3Bvc3Rlci1maWxlXCIgYWNjZXB0PVwiaW1hZ2UvZ2lmLCBpbWFnZS9qcGVnLCBpbWFnZS9wbmdcIiAvPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZnZfX211bHRpLWZpbGUtZGl2IGZ2X19tdWx0aS1maWxlLWJ0blwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZnZfX211bHRpLW1lZGlhLWJ0blwiIGRpc2FibGVkPk9rPC9idXR0b24+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmdl9fbXVsdGktbWVkaWEtY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG48L2Rpdj4iLCJcbi8v5YW85a65XG53aW5kb3cuVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuLy/ojrflj5borqHnrpfmnLrnmoTorr7lpIfvvJrmkYTlg4/lpLTmiJbogIXlvZXpn7Porr7lpIdcbm5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3IubXNHZXRVc2VyTWVkaWE7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkZXIge1xuICAgIHN0YXRpYyBnZXQoY2FsbGJhY2ssIHByb2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayl7XG4gICAgICAgIGlmKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpe1xuICAgICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KVxuICAgICAgICAgICAgLnRoZW4oc3RyZWFtID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVjID0gbmV3IFJlY29yZGVyKHN0cmVhbSwgcHJvY2Vzc0NhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZWMpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayhlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ZWxzZSBpZiAobmF2aWdhdG9yLmdldFVzZXJNZWRpYSkge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYShcbiAgICAgICAgICAgICAgICB7IGF1ZGlvOiB0cnVlIH0gLy/lj6rlkK/nlKjpn7PpopFcbiAgICAgICAgICAgICAgICAsIGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlYyA9IG5ldyBSZWNvcmRlcihzdHJlYW0sIHByb2Nlc3NDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICxlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sobmV3IEVycm9yKFwiQnJvd3Nlck5vdFN1cHBvcnRlZFwiKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihzdHJlYW0sIHByb2Nlc3NDYWxsYmFjayl7XG4gICAgICAgIGxldCBjb25maWcgPSB7fTtcbiAgICAgICAgY29uZmlnLnNhbXBsZUJpdHMgPSBjb25maWcuc2FtcGxlQml0cyB8fCA4OyAgICAgIC8v6YeH5qC35pWw5L2NIDgsIDE2XG4gICAgICAgIGNvbmZpZy5zYW1wbGVSYXRlID0gY29uZmlnLnNhbXBsZVJhdGUgfHwgKDQ0MTAwIC8gNik7ICAgLy/ph4fmoLfnjocoMS82IDQ0MTAwKVxuICAgIFxuICAgICAgICAvL+WIm+W7uuS4gOS4qumfs+mikeeOr+Wig+WvueixoVxuICAgICAgICBsZXQgYXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgICAgICBsZXQgY29udGV4dCA9IHRoaXMuY29udGV4dCA9IG5ldyBhdWRpb0NvbnRleHQoKTtcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBzdHJlYW07XG4gICAgICAgIHRoaXMuYXVkaW9JbnB1dCA9IGNvbnRleHQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKTtcbiAgICAgICAgLy8g56ys5LqM5Liq5ZKM56ys5LiJ5Liq5Y+C5pWw5oyH55qE5piv6L6T5YWl5ZKM6L6T5Ye66YO95piv5Y2V5aOw6YGTLDLmmK/lj4zlo7DpgZPjgIJcbiAgICAgICAgdGhpcy5yZWNvcmRlciA9IGNvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yKDQwOTYsIDEsIDEpO1xuICAgIFxuICAgICAgICBsZXQgYXVkaW9EYXRhID0gdGhpcy5hdWRpb0RhdGEgPSB7XG4gICAgICAgICAgICBzaXplOiAwICAgICAgICAgIC8v5b2V6Z+z5paH5Lu26ZW/5bqmXG4gICAgICAgICAgICAsIGJ1ZmZlcjogW10gICAgIC8v5b2V6Z+z57yT5a2YXG4gICAgICAgICAgICAsIGlucHV0U2FtcGxlUmF0ZTogY29udGV4dC5zYW1wbGVSYXRlICAgIC8v6L6T5YWl6YeH5qC3546HXG4gICAgICAgICAgICAsIGlucHV0U2FtcGxlQml0czogMTYgICAgICAgLy/ovpPlhaXph4fmoLfmlbDkvY0gOCwgMTZcbiAgICAgICAgICAgICwgb3V0cHV0U2FtcGxlUmF0ZTogY29uZmlnLnNhbXBsZVJhdGUgICAgLy/ovpPlh7rph4fmoLfnjodcbiAgICAgICAgICAgICwgb3V0cHV0U2FtcGxlQml0czogY29uZmlnLnNhbXBsZUJpdHMgICAgICAgLy/ovpPlh7rph4fmoLfmlbDkvY0gOCwgMTZcbiAgICAgICAgICAgICwgaW5wdXQ6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXIucHVzaChuZXcgRmxvYXQzMkFycmF5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgKz0gZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAsIGNvbXByZXNzOiBmdW5jdGlvbiAoKSB7IC8v5ZCI5bm25Y6L57ypXG4gICAgICAgICAgICAgICAgLy/lkIjlubZcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5zaXplKTtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnVmZmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc2V0KHRoaXMuYnVmZmVyW2ldLCBvZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gdGhpcy5idWZmZXJbaV0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL+WOi+e8qVxuICAgICAgICAgICAgICAgIGxldCBjb21wcmVzc2lvbiA9IHBhcnNlSW50KHRoaXMuaW5wdXRTYW1wbGVSYXRlIC8gdGhpcy5vdXRwdXRTYW1wbGVSYXRlKTtcbiAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoID0gZGF0YS5sZW5ndGggLyBjb21wcmVzc2lvbjtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IEZsb2F0MzJBcnJheShsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDAsIGogPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbaW5kZXhdID0gZGF0YVtqXTtcbiAgICAgICAgICAgICAgICAgICAgaiArPSBjb21wcmVzc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICwgZW5jb2RlV0FWOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zaXplID09IDAgKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHNhbXBsZVJhdGUgPSBNYXRoLm1pbih0aGlzLmlucHV0U2FtcGxlUmF0ZSwgdGhpcy5vdXRwdXRTYW1wbGVSYXRlKTtcbiAgICAgICAgICAgICAgICBsZXQgc2FtcGxlQml0cyA9IE1hdGgubWluKHRoaXMuaW5wdXRTYW1wbGVCaXRzLCB0aGlzLm91dHB1dFNhbXBsZUJpdHMpO1xuICAgICAgICAgICAgICAgIGxldCBieXRlcyA9IHRoaXMuY29tcHJlc3MoKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YUxlbmd0aCA9IGJ5dGVzLmxlbmd0aCAqIChzYW1wbGVCaXRzIC8gOCk7XG4gICAgICAgICAgICAgICAgbGV0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcig0NCArIGRhdGFMZW5ndGgpO1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IGNoYW5uZWxDb3VudCA9IDE7Ly/ljZXlo7DpgZNcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBcbiAgICAgICAgICAgICAgICBsZXQgd3JpdGVTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnNldFVpbnQ4KG9mZnNldCArIGksIHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAvLyDotYTmupDkuqTmjaLmlofku7bmoIfor4bnrKZcbiAgICAgICAgICAgICAgICB3cml0ZVN0cmluZygnUklGRicpOyBvZmZzZXQgKz0gNDtcbiAgICAgICAgICAgICAgICAvLyDkuIvkuKrlnLDlnYDlvIDlp4vliLDmlofku7blsL7mgLvlrZfoioLmlbAs5Y2z5paH5Lu25aSn5bCPLThcbiAgICAgICAgICAgICAgICBkYXRhLnNldFVpbnQzMihvZmZzZXQsIDM2ICsgZGF0YUxlbmd0aCwgdHJ1ZSk7IG9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgIC8vIFdBVuaWh+S7tuagh+W/l1xuICAgICAgICAgICAgICAgIHdyaXRlU3RyaW5nKCdXQVZFJyk7IG9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgIC8vIOazouW9ouagvOW8j+agh+W/l1xuICAgICAgICAgICAgICAgIHdyaXRlU3RyaW5nKCdmbXQgJyk7IG9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgIC8vIOi/h+a7pOWtl+iKgizkuIDoiKzkuLogMHgxMCA9IDE2XG4gICAgICAgICAgICAgICAgZGF0YS5zZXRVaW50MzIob2Zmc2V0LCAxNiwgdHJ1ZSk7IG9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgIC8vIOagvOW8j+exu+WIqyAoUENN5b2i5byP6YeH5qC35pWw5o2uKVxuICAgICAgICAgICAgICAgIGRhdGEuc2V0VWludDE2KG9mZnNldCwgMSwgdHJ1ZSk7IG9mZnNldCArPSAyO1xuICAgICAgICAgICAgICAgIC8vIOmAmumBk+aVsFxuICAgICAgICAgICAgICAgIGRhdGEuc2V0VWludDE2KG9mZnNldCwgY2hhbm5lbENvdW50LCB0cnVlKTsgb2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICAgICAgLy8g6YeH5qC3546HLOavj+enkuagt+acrOaVsCzooajnpLrmr4/kuKrpgJrpgZPnmoTmkq3mlL7pgJ/luqZcbiAgICAgICAgICAgICAgICBkYXRhLnNldFVpbnQzMihvZmZzZXQsIHNhbXBsZVJhdGUsIHRydWUpOyBvZmZzZXQgKz0gNDtcbiAgICAgICAgICAgICAgICAvLyDms6LlvaLmlbDmja7kvKDovpPnjocgKOavj+enkuW5s+Wdh+Wtl+iKguaVsCkg5Y2V5aOw6YGTw5fmr4/np5LmlbDmja7kvY3mlbDDl+avj+agt+acrOaVsOaNruS9jS84XG4gICAgICAgICAgICAgICAgZGF0YS5zZXRVaW50MzIob2Zmc2V0LCBjaGFubmVsQ291bnQgKiBzYW1wbGVSYXRlICogKHNhbXBsZUJpdHMgLyA4KSwgdHJ1ZSk7IG9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgIC8vIOW/q+aVsOaNruiwg+aVtOaVsCDph4fmoLfkuIDmrKHljaDnlKjlrZfoioLmlbAg5Y2V5aOw6YGTw5fmr4/moLfmnKznmoTmlbDmja7kvY3mlbAvOFxuICAgICAgICAgICAgICAgIGRhdGEuc2V0VWludDE2KG9mZnNldCwgY2hhbm5lbENvdW50ICogKHNhbXBsZUJpdHMgLyA4KSwgdHJ1ZSk7IG9mZnNldCArPSAyO1xuICAgICAgICAgICAgICAgIC8vIOavj+agt+acrOaVsOaNruS9jeaVsFxuICAgICAgICAgICAgICAgIGRhdGEuc2V0VWludDE2KG9mZnNldCwgc2FtcGxlQml0cywgdHJ1ZSk7IG9mZnNldCArPSAyO1xuICAgICAgICAgICAgICAgIC8vIOaVsOaNruagh+ivhuesplxuICAgICAgICAgICAgICAgIHdyaXRlU3RyaW5nKCdkYXRhJyk7IG9mZnNldCArPSA0O1xuICAgICAgICAgICAgICAgIC8vIOmHh+agt+aVsOaNruaAu+aVsCzljbPmlbDmja7mgLvlpKflsI8tNDRcbiAgICAgICAgICAgICAgICBkYXRhLnNldFVpbnQzMihvZmZzZXQsIGRhdGFMZW5ndGgsIHRydWUpOyBvZmZzZXQgKz0gNDtcbiAgICAgICAgICAgICAgICAvLyDlhpnlhaXph4fmoLfmlbDmja5cbiAgICAgICAgICAgICAgICBpZiAoc2FtcGxlQml0cyA9PT0gOCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrLCBvZmZzZXQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHMgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgYnl0ZXNbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBzIDwgMCA/IHMgKiAweDgwMDAgOiBzICogMHg3RkZGO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gcGFyc2VJbnQoMjU1IC8gKDY1NTM1IC8gKHZhbCArIDMyNzY4KSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zZXRJbnQ4KG9mZnNldCwgdmFsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyssIG9mZnNldCArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcyA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBieXRlc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zZXRJbnQxNihvZmZzZXQsIHMgPCAwID8gcyAqIDB4ODAwMCA6IHMgKiAweDdGRkYsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQmxvYihbZGF0YV0sIHsgdHlwZTogJ2F1ZGlvL3dhdicgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVjb3JkZXIub25hdWRpb3Byb2Nlc3MgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgYXVkaW9EYXRhLmlucHV0KGUuaW5wdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoMCkpO1xuICAgICAgICAgICAgcHJvY2Vzc0NhbGxiYWNrKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/lvIDlp4vlvZXpn7NcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5hdWRpb0lucHV0LmNvbm5lY3QodGhpcy5yZWNvcmRlcik7XG4gICAgICAgIHRoaXMucmVjb3JkZXIuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgIH1cblxuICAgIC8v5YGc5q2iXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5hdWRpb0lucHV0LmRpc2Nvbm5lY3QodGhpcy5yZWNvcmRlcik7XG4gICAgICAgIHRoaXMucmVjb3JkZXIuZGlzY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICB0aGlzLnN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RyZWFtID0gbnVsbDtcbiAgICB9XG5cbiAgICAvL+iOt+WPlumfs+mikeaWh+S7tlxuICAgIGdldEJsb2IoKSB7XG4gICAgICAgIC8vIHRoaXMuc3RvcCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5hdWRpb0RhdGEuZW5jb2RlV0FWKCk7XG4gICAgfVxuXG4gICAgLy/lm57mlL5cbiAgICBwbGF5KGF1ZGlvKSB7XG4gICAgICAgIGF1ZGlvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuZ2V0QmxvYigpKTtcbiAgICB9XG4gICAgLy/muIXpmaRcbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5hdWRpb0RhdGEuYnVmZmVyPVtdO1xuICAgICAgICB0aGlzLmF1ZGlvRGF0YS5zaXplPTA7XG4gICAgfSAgICBcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8ZGl2IG5hbWU9XCJtdWx0aS1tZWRpYVwiPlxuICAgIDx4YnV0dG9uIG5hbWU9XCJtdWx0aS1tZWRpYS1idG5cIiBpY29uLWNsYXNzPVwiZnZfX2ljb24tbXVsdGktbWVkaWFcIiBAdG9vbHRpcD5tdWx0aS1tZWRpYTpidXR0b25zLnRpdGxlPC94YnV0dG9uPlxuICAgIDxtdWx0aS1tZWRpYTptdWx0aS1tZWRpYS1wb3B1cCBuYW1lPVwibXVsdGktbWVkaWEtcG9wdXBcIiBhcHBlbmQtdG89XCJib2R5XCIgY2xhc3M9XCJjZW50ZXJcIiBtb2RhbCBiYWNrZHJvcD5cbiAgICAgICAgPGxheWVyLWhlYWRlciB0aXRsZT1cIm11bHRpLW1lZGlhOmJ1dHRvbnMudGl0bGVcIiBAZHJhZ2dhYmxlPVwie3R5cGU6J3BhcmVudCd9XCI+PC9sYXllci1oZWFkZXI+XG4gICAgICAgIDxsYXllci12aWV3PlxuICAgICAgICA8L2xheWVyLXZpZXc+XG4gICAgPC9tdWx0aS1tZWRpYTptdWx0aS1tZWRpYS1wb3B1cD5cbjwvZGl2PiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9VSUV4dGVuc2lvbl9fOyJdLCJzb3VyY2VSb290IjoiIn0=