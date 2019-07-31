(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("UIExtension"));
	else if(typeof define === 'function' && define.amd)
		define(["UIExtension"], factory);
	else if(typeof exports === 'object')
		exports["RedactionAddon"] = factory(require("UIExtension"));
	else
		root["RedactionAddon"] = factory(root["UIExtension"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./uix-addons/redaction/index.js");
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

/***/ "./uix-addons/redaction/Events.js":
/*!****************************************!*\
  !*** ./uix-addons/redaction/Events.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    redactAnnotApplyed: "apply-redaction",
    redactAnnotAllApplyed: "apply-all-redaction",
    annotationAdd: 'annotation-add',
    annotationRemoved: "annotation-removed",
    addRedactionArea: "add-redaction-area"
};

/***/ }),

/***/ "./uix-addons/redaction/addon.info.json":
/*!**********************************************!*\
  !*** ./uix-addons/redaction/addon.info.json ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


        module.exports = null;
    

/***/ }),

/***/ "./uix-addons/redaction/createRedactionStateHandler.js":
/*!*************************************************************!*\
  !*** ./uix-addons/redaction/createRedactionStateHandler.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _Events = __webpack_require__(/*! ./Events */ "./uix-addons/redaction/Events.js");

var _Events2 = _interopRequireDefault(_Events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PDFViewCtrl = UIExtension.PDFViewCtrl;

var CreateRedactionStateHandler = function (_PDFViewCtrl$IStateHa) {
    _inherits(CreateRedactionStateHandler, _PDFViewCtrl$IStateHa);

    function CreateRedactionStateHandler(pdfViewer) {
        _classCallCheck(this, CreateRedactionStateHandler);

        var _this = _possibleConstructorReturn(this, _PDFViewCtrl$IStateHa.call(this, pdfViewer, "square"));

        _this.pdfViewer = pdfViewer;
        _this.cursorStyle = "fv__cursor-cross";
        _this.destroyHooks = [];
        return _this;
    }

    CreateRedactionStateHandler.getStateName = function getStateName() {
        return "create-redaction-state";
    };

    CreateRedactionStateHandler.prototype.getDevicePagePoint = function getDevicePagePoint(elem, event) {
        var pageRect = elem.getBoundingClientRect();
        var srcEvent = event.srcEvent;
        return {
            x: srcEvent.clientX - pageRect.left - event.deltaX,
            y: srcEvent.clientY - pageRect.top - event.deltaY
        };
    };

    CreateRedactionStateHandler.prototype.correctPosition = function correctPosition(position) {
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

    CreateRedactionStateHandler.prototype.start = function start(pageRender, _ref) {
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

    CreateRedactionStateHandler.prototype.adjust = function adjust(shapeControl, _ref2, _ref3) {
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

    CreateRedactionStateHandler.prototype.pageHandler = function pageHandler(pageRender) {
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
            pageRender.getPDFPage().then(function (page) {
                var _page$reverseDevicePo = page.reverseDevicePoint([_this3.startPoint.x, _this3.startPoint.y], _this3.pageRender.scale),
                    _page$reverseDevicePo2 = _slicedToArray(_page$reverseDevicePo, 2),
                    left = _page$reverseDevicePo2[0],
                    top = _page$reverseDevicePo2[1];

                _this3.start(pageRender, { left: left, top: top });
            });
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
                _this3.pdfViewer.eventEmitter.emit(_Events2.default.addRedactionArea, pageRender, _this3.shapeControl.shape.boundary);
                _this3.shapeControl.destroy();
                _this3.shapeControl = null;
            });
        });
        hammer.on('pancancel', function (e) {
            _this3.shapeControl.destroy();
            _this3.shapeControl = null;
        });
    };

    CreateRedactionStateHandler.prototype.destroyPageHandler = function destroyPageHandler() {
        this.hammer && this.hammer.destroy();
        this.pageRender.$handler.removeClass(this.cursorStyle);
        this.destroyHooks.forEach(function (hook) {
            return hook();
        });
    };

    return CreateRedactionStateHandler;
}(PDFViewCtrl.IStateHandler);

exports.default = CreateRedactionStateHandler;

/***/ }),

/***/ "./uix-addons/redaction/createRedactionTextStateHandler.js":
/*!*****************************************************************!*\
  !*** ./uix-addons/redaction/createRedactionTextStateHandler.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var CreateRedactionTextStateHandler = function (_UIExtension$TextMark) {
    _inherits(CreateRedactionTextStateHandler, _UIExtension$TextMark);

    function CreateRedactionTextStateHandler(pdfViewer) {
        _classCallCheck(this, CreateRedactionTextStateHandler);

        var _this = _possibleConstructorReturn(this, _UIExtension$TextMark.call(this, pdfViewer));

        _this.cursorStyle = "fv__cursor-highlight";
        return _this;
    }

    CreateRedactionTextStateHandler.getStateName = function getStateName() {
        return "create-redaction-text-state";
    };

    CreateRedactionTextStateHandler.prototype.addAnnot = function addAnnot(page, rectArray) {
        return page.markRedactAnnot(rectArray);
    };

    return CreateRedactionTextStateHandler;
}(UIExtension.TextMarkupStateHandler);

exports.default = CreateRedactionTextStateHandler;

/***/ }),

/***/ "./uix-addons/redaction/index.js":
/*!***************************************!*\
  !*** ./uix-addons/redaction/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _popup = __webpack_require__(/*! ./popup/ */ "./uix-addons/redaction/popup/index.js");

var _popup2 = _interopRequireDefault(_popup);

var _redactionController = __webpack_require__(/*! ./redactionController */ "./uix-addons/redaction/redactionController.js");

var _redactionController2 = _interopRequireDefault(_redactionController);

var _redactionTextController = __webpack_require__(/*! ./redactionTextController */ "./uix-addons/redaction/redactionTextController.js");

var _redactionTextController2 = _interopRequireDefault(_redactionTextController);

var _redactionPageController = __webpack_require__(/*! ./redactionPageController */ "./uix-addons/redaction/redactionPageController.js");

var _redactionPageController2 = _interopRequireDefault(_redactionPageController);

var _redactionApplyController = __webpack_require__(/*! ./redactionApplyController */ "./uix-addons/redaction/redactionApplyController.js");

var _redactionApplyController2 = _interopRequireDefault(_redactionApplyController);

var _redactionSearchController = __webpack_require__(/*! ./redactionSearchController */ "./uix-addons/redaction/redactionSearchController.js");

var _redactionSearchController2 = _interopRequireDefault(_redactionSearchController);

__webpack_require__(/*! ./style/redact.scss */ "./uix-addons/redaction/style/redact.scss");

var _redactionDropdown = __webpack_require__(/*! ./redaction-dropdown.art */ "./uix-addons/redaction/redaction-dropdown.art");

var _redactionDropdown2 = _interopRequireDefault(_redactionDropdown);

var _addonInfo = __webpack_require__(/*! ./addon.info.json */ "./uix-addons/redaction/addon.info.json");

var _addonInfo2 = _interopRequireDefault(_addonInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
// import './scss/index.scss';


// import compileTemplate from './template.art';
// import removeTemplate from './remove-template.art';

// const template = compileTemplate();
// const removeArt = removeTemplate();

var dropdownTemplate = (0, _redactionDropdown2.default)();

var RedactionAddon = function (_UIExtension$UIXAddon) {
    _inherits(RedactionAddon, _UIExtension$UIXAddon);

    function RedactionAddon() {
        _classCallCheck(this, RedactionAddon);

        return _possibleConstructorReturn(this, _UIExtension$UIXAddon.apply(this, arguments));
    }

    RedactionAddon.getName = function getName() {
        return 'redaction';
    };

    RedactionAddon.getLoader = function getLoader() {
        return _addonInfo2.default;
    };

    RedactionAddon.prototype.init = function init() {
        var module = UIExtension.modular.module('redaction', []);
        var registry = module.getRegistry();
        this.module = module;
        registry.registerController(_redactionController2.default);
        registry.registerController(_redactionTextController2.default);
        registry.registerController(_redactionPageController2.default);
        registry.registerComponent(_popup2.default);
    };

    RedactionAddon.prototype.fragments = function fragments() {
        return [{
            target: 'template-container',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: '\n            <redaction:redaction-page-popup name="redaction-page-popup" append-to="body" class="center" modal backdrop>\n                <layer-header title="redaction:buttons.redact_page" @draggable="{type:\'parent\'}"></layer-header>\n                <layer-view>\n                </layer-view>\n            </redaction:redaction-page-popup>\n            '
        }, {
            target: 'protect-toolbar-group-list',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: '<redaction:group name="redaction"></redaction:group>'
        }, {
            target: 'redaction',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: dropdownTemplate,
            config: [{
                target: 'create-redaction-controllers',
                callback: function (_UIExtension$Controll) {
                    _inherits(callback, _UIExtension$Controll);

                    function callback() {
                        _classCallCheck(this, callback);

                        return _possibleConstructorReturn(this, _UIExtension$Controll.apply(this, arguments));
                    }

                    _createClass(callback, null, [{
                        key: 'permission',
                        get: function get() {
                            return UIExtension.PDFViewCtrl.Consts.PDFDocPermission.AnnotForm;
                        }
                    }]);

                    return callback;
                }(UIExtension.Controller)
            }]
        }, {
            target: 'redaction',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: '<xbutton name="redaction-apply" class="fv__ui-toolbar-show-text-button"  icon-class="fv__icon-toolbar-apply-redaction"  @tooltip>redaction:buttons.apply</xbutton>',
            config: [{
                target: 'redaction-apply',
                tooltip: {
                    title: 'redaction:tooltips.apply'
                },
                callback: _redactionApplyController2.default
            }]
        }, {
            target: 'redaction',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: '<xbutton name="redaction-search" class="fv__ui-toolbar-show-text-button" icon-class="fv__icon-toolbar-search-redaction" @tooltip>redaction:buttons.redact_search</xbutton>',
            config: [{
                target: 'redaction-search',
                tooltip: {
                    title: 'redaction:buttons.redact_search'
                },
                callback: _redactionSearchController2.default
            }]
        }];
    };

    return RedactionAddon;
}(UIExtension.UIXAddon);

exports.default = RedactionAddon;
;

/***/ }),

/***/ "./uix-addons/redaction/popup/index.js":
/*!*********************************************!*\
  !*** ./uix-addons/redaction/popup/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

__webpack_require__(/*! ./index.scss */ "./uix-addons/redaction/popup/index.scss");

var _popup = __webpack_require__(/*! ./popup.art */ "./uix-addons/redaction/popup/popup.art");

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

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
        return 'redaction-page-popup';
    };

    PopupComponent.prototype.bindEvent = function bindEvent(selector, event, callback) {
        var _this2 = this;

        var elements = this.element.querySelectorAll(selector);
        if (elements.length == 0) return;
        elements.forEach(function (element) {
            element.addEventListener(event, callback);
            _this2.destroyHooks.push(function () {
                element.removeEventListener(event, callback);
            });
        });
    };

    PopupComponent.prototype.render = function render() {
        _UIExtension$widgets$.prototype.render.call(this);
        this.destroyHooks = [];
        this.element.classList.add('fv__redaction-page-popup');
    };

    PopupComponent.prototype.rendered = function rendered(pageCount) {
        this.element.querySelector(".fv__ui-layer-panel").innerHTML = (0, _popup2.default)(pageCount);
        this.localize();
        this.mountEvent();
    };

    PopupComponent.prototype.mountEvent = function mountEvent() {
        var _this3 = this;

        this.bindEvent(".redaction-page-radio", "change", function (e) {
            if (e.target.checked) {
                _this3.hideError();
                if (e.target.value == "1") {
                    _this3.element.querySelector(".fv__redaction-page-range").setAttribute("disabled", "");
                } else {
                    _this3.element.querySelector(".fv__redaction-page-range").removeAttribute("disabled");
                }
            }
        });
        this.bindEvent(".fv__redaction-cancel", "click", function (e) {
            _this3.hide();
        });

        this.bindEvent(".fv__redaction-btn", "click", function (e) {
            _this3.submit();
        });

        this.bindEvent(".fv__redaction-page-range", "keydown", function (e) {
            _this3.hideError();
        });
    };

    PopupComponent.prototype.setSubmitCallback = function setSubmitCallback(submitCallback, docPageCount) {
        this.submitCallback = submitCallback;
        this.docPageCount = docPageCount;
    };

    PopupComponent.prototype.submit = function submit() {
        var docPage = this.docPageCount;
        var isCurrentPage = false;
        this.element.querySelectorAll(".redaction-page-radio").forEach(function (item) {
            if (item.checked && item.value == "1") {
                isCurrentPage = true;
            }
        });

        var pages = [];
        if (isCurrentPage) {
            return this.submitCallback(pages);
        }
        var range = this.element.querySelector(".fv__redaction-page-range").value;
        var regexp = new RegExp(/[^\d\-,]/);
        if (regexp.test(range)) {
            this.showError();
            return;
        }
        var ranges = range.split(",");
        for (var i = 0; i < ranges.length; i++) {
            var page = ranges[i];
            if (page.indexOf("-") > -1) {
                var pageRange = page.split('-');
                if (pageRange.length > 2) {
                    this.showError();
                    return;
                } else {
                    if (pageRange[0] < 1 || pageRange[0] > docPage || pageRange[1] < 1 || pageRange[1] > docPage) {
                        this.showError();
                        return;
                    } else {
                        var min = Math.min(pageRange[0], pageRange[1]);
                        var max = Math.max(pageRange[0], pageRange[1]);
                        for (var _i = min; _i <= max; _i++) {
                            if (pages.indexOf(_i) === -1) {
                                pages.push(_i - 1);
                            }
                        }
                    }
                }
            } else {
                if (page < 1 || page > docPage) {
                    this.showError();
                    return;
                } else {
                    if (pages.indexOf(pages) === -1) {
                        pages.push(page - 1);
                    }
                }
            }
        }
        this.submitCallback(pages);
    };

    PopupComponent.prototype.reset = function reset() {
        this.hideError();
        this.element.querySelector(".redaction-page-radio").checked = true;
        this.element.querySelector(".fv__redaction-page-range").value = "";
    };

    PopupComponent.prototype.showError = function showError(error) {
        this.element.querySelector(".fv__redaction-page-range").classList.add("fv__redaction-error");
    };

    PopupComponent.prototype.hideError = function hideError() {
        this.element.querySelector(".fv__redaction-page-range").classList.remove("fv__redaction-error");
    };

    PopupComponent.prototype.destroy = function destroy() {
        this.destroyHooks.forEach(function (hook) {
            return hook();
        });
    };

    return PopupComponent;
}(UIExtension.widgets.LayerComponent);

exports.default = PopupComponent;

/***/ }),

/***/ "./uix-addons/redaction/popup/index.scss":
/*!***********************************************!*\
  !*** ./uix-addons/redaction/popup/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./uix-addons/redaction/popup/popup.art":
/*!**********************************************!*\
  !*** ./uix-addons/redaction/popup/popup.art ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape;
    $$out += '<div class="fv__redaction-container">\n    <label>\n        <input name="redaction-page-type" class="redaction-page-radio" type="radio" checked value="1" /><span>Mark current page for redaction</span>\n    </label>\n</div>\n<div class="fv__redaction-container">\n    <label>\n        <input name="redaction-page-type" class="redaction-page-radio" type="radio" value="2" /><span>Mark specific page range for redaction</span>\n        <div class="fv__redaction-range">Page range: <input type="text" class="fv__redaction-page-range" disabled placeholder="';
    $$out += $escape($data);
    $$out += '"/></div>\n    </label>\n</div> \n<div class="fv__redaction-container" style="text-align:right">\n    <button type="button" class="fv__redaction-btn">OK</button>\n    <button type="button" class="fv__redaction-cancel">Cancel</button>\n</div>';
    return $$out;
};

/***/ }),

/***/ "./uix-addons/redaction/redaction-dropdown.art":
/*!*****************************************************!*\
  !*** ./uix-addons/redaction/redaction-dropdown.art ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<dropdown @tooltip name="create-redaction-controllers" tooltip-title="redaction:tooltips.redaction" icon-class="fv__icon-toolbar-redaction" popup-class="fv__ui-redaction-redaction-list" class="fv__ui-redaction-dropdown" text="redaction:buttons.title">\n    <dropdown-button class="fv__ui-redaction-item" name="create-text-redaction" @controller="redaction:RedactionTextController" icon-class="fv__icon-toolbar-text-redaction">\n        redaction:buttons.redact_text\n    </dropdown-button>\n    <dropdown-button class="fv__ui-redaction-item" name="create-area-redaction" @controller="redaction:RedactionController" icon-class="fv__icon-toolbar-area-redaction">\n        redaction:buttons.redact_area\n    </dropdown-button>\n    <dropdown-button class="fv__ui-redaction-item" name="create-page-redaction" @controller="redaction:RedactionPageController" icon-class="fv__icon-toolbar-page-redaction">\n        redaction:buttons.redact_page\n    </dropdown-button>\n</dropdown>';
    return $$out;
};

/***/ }),

/***/ "./uix-addons/redaction/redactionApplyController.js":
/*!**********************************************************!*\
  !*** ./uix-addons/redaction/redactionApplyController.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _Events = __webpack_require__(/*! ./Events */ "./uix-addons/redaction/Events.js");

var _Events2 = _interopRequireDefault(_Events);

var _createRedactionTextStateHandler = __webpack_require__(/*! ./createRedactionTextStateHandler */ "./uix-addons/redaction/createRedactionTextStateHandler.js");

var _createRedactionTextStateHandler2 = _interopRequireDefault(_createRedactionTextStateHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ViewerEvents = UIExtension.PDFViewCtrl.Events;

var RedactionApplyController = function (_UIExtension$Controll) {
    _inherits(RedactionApplyController, _UIExtension$Controll);

    function RedactionApplyController(component) {
        _classCallCheck(this, RedactionApplyController);

        return _possibleConstructorReturn(this, _UIExtension$Controll.call(this, component));
    }

    RedactionApplyController.prototype.handle = function handle() {
        var _this2 = this;

        if (this.component.disabled) return;
        var pdfUi = this.getPDFUI();
        pdfUi.localizer.translate("redaction:dialog.apply_alert").then(function (result) {
            if (!window.confirm(result)) {
                return;
            }
            pdfUi.getPDFViewer().then(function (viewer) {
                var doc = viewer.getCurrentPDFDoc();
                doc.applyRedaction().then(function (removedAnnotObjs) {
                    if (removedAnnotObjs !== false) {
                        removedAnnotObjs.forEach(function (annotObj) {
                            var pageIndex = annotObj.pageIndex;
                            var annotIds = annotObj.removedAnnots;
                            var docRender = viewer.getPDFDocRender();
                            var pageRender = docRender.pagesRender.pageRenders[pageIndex];
                            if (pageRender.annotsRender) {
                                var annots = pageRender.annotsRender.annots;
                                for (var index = annots.length - 1; index >= 0; index--) {
                                    var annot = annots[index];
                                    if (annotIds.indexOf(annot.id) !== -1) {
                                        annot.info.isDeleted = true;
                                        annots.splice(index, 1);
                                    }
                                }
                            }
                            // let pdfPage = viewer.currentPDFDoc.pageCache[pageIndex];
                            // if(pdfPage){
                            //     for(let index in pdfPage.annotIdMap){
                            //         delete pdfPage.annotIdMap[index];
                            //     }
                            // }
                        });
                        viewer.getPDFDocRender().pagesRender.setRenderFlags(10);
                        viewer.getPDFDocRender().pagesRender.renderVisiblePages();

                        viewer.eventEmitter.emit(_Events2.default.redactAnnotApplyed, _this2);
                    } else {
                        //todo error.
                    }
                });
            });
        });
    };

    RedactionApplyController.prototype.mounted = function mounted() {
        var _this3 = this;

        var pdfUi = this.getPDFUI();
        pdfUi.addViewerEventListener(_Events2.default.redactAnnotAllApplyed, function (pageRender, rect) {
            _this3.component.disable();
        });
        pdfUi.addViewerEventListener(_Events2.default.redactAnnotApplyed, function (pageRender, rect) {
            _this3.isRedactExist();
        });
        pdfUi.addViewerEventListener(ViewerEvents.openFileSuccess, function (pdfDoc) {
            _this3.component.disable();
        });
        pdfUi.addViewerEventListener(ViewerEvents.redactAnnotRendered, function (pdfDoc) {
            pdfUi.getPDFDocRender().then(function (docRender) {
                var permission = docRender.getUserPermission().getValue();
                //doc.getPermission().then(permission=>{
                if (permission & 8) _this3.component.enable();
                //})
            });
        });
        pdfUi.addViewerEventListener(_Events2.default.annotationRemoved, function (annots) {
            for (var i = 0; i < annots.length; i++) {
                var annot = annots[i];
                if (annot.info.type == "redact") {
                    _this3.isRedactExist();
                    break;
                }
            }
        });
    };

    RedactionApplyController.prototype.isRedactExist = function isRedactExist() {
        var _this4 = this;

        var pdfUi = this.getPDFUI();
        pdfUi.getPDFViewer().then(function (viewer) {
            return viewer.currentPDFDoc.getAnnots();
        }).then(function (annots) {
            var isRedactExist = false;
            for (var i = 0; i < annots.length; i++) {
                var pageAnnots = annots[i];
                for (var j = 0; j < pageAnnots.length; j++) {
                    var annot = pageAnnots[j];
                    if (annot.info.type == "redact" && annot.info.isDeleted === false) {
                        isRedactExist = true;
                        break;
                    }
                }
                if (isRedactExist) {
                    break;
                }
            }
            if (isRedactExist) {
                _this4.component.enable();
            } else {
                _this4.component.disable();
            }
        });
    };

    _createClass(RedactionApplyController, null, [{
        key: 'permission',
        get: function get() {
            return UIExtension.PDFViewCtrl.Consts.PDFDocPermission.ModifyDocument;
        }
    }]);

    return RedactionApplyController;
}(UIExtension.Controller);

exports.default = RedactionApplyController;

/***/ }),

/***/ "./uix-addons/redaction/redactionController.js":
/*!*****************************************************!*\
  !*** ./uix-addons/redaction/redactionController.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _Events = __webpack_require__(/*! ./Events */ "./uix-addons/redaction/Events.js");

var _Events2 = _interopRequireDefault(_Events);

var _createRedactionStateHandler = __webpack_require__(/*! ./createRedactionStateHandler */ "./uix-addons/redaction/createRedactionStateHandler.js");

var _createRedactionStateHandler2 = _interopRequireDefault(_createRedactionStateHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var RedactionController = function (_UIExtension$Stateful) {
    _inherits(RedactionController, _UIExtension$Stateful);

    function RedactionController(component) {
        _classCallCheck(this, RedactionController);

        return _possibleConstructorReturn(this, _UIExtension$Stateful.call(this, component, _createRedactionStateHandler2.default));
    }

    RedactionController.getName = function getName() {
        return "RedactionController";
    };

    RedactionController.prototype.mounted = function mounted() {
        var pdfUi = this.getPDFUI();
        pdfUi.addViewerEventListener(_Events2.default.addRedactionArea, function (pageRender, rect) {
            pageRender.getPDFPage().then(function (page) {
                var _page$reverseDevicePo = page.reverseDevicePoint([rect.left, rect.top], pageRender.scale),
                    _page$reverseDevicePo2 = _slicedToArray(_page$reverseDevicePo, 2),
                    leftInPT = _page$reverseDevicePo2[0],
                    topInPT = _page$reverseDevicePo2[1];

                var _page$reverseDevicePo3 = page.reverseDevicePoint([rect.right, rect.bottom], pageRender.scale),
                    _page$reverseDevicePo4 = _slicedToArray(_page$reverseDevicePo3, 2),
                    rightInPT = _page$reverseDevicePo4[0],
                    bottomInPT = _page$reverseDevicePo4[1];

                var deviceRect = {
                    left: leftInPT,
                    top: topInPT,
                    right: rightInPT,
                    bottom: bottomInPT
                };
                return page.markRedactAnnot([deviceRect]);
            }).then(function (annots) {
                var annot = annots[0];
                var annotRender = pageRender.annotsRender.getAnnotRender(annot.getId());
                annotRender.component.active();
            });
        });
    };

    return RedactionController;
}(UIExtension.StatefulController);

exports.default = RedactionController;

/***/ }),

/***/ "./uix-addons/redaction/redactionPageController.js":
/*!*********************************************************!*\
  !*** ./uix-addons/redaction/redactionPageController.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _Events = __webpack_require__(/*! ./Events */ "./uix-addons/redaction/Events.js");

var _Events2 = _interopRequireDefault(_Events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ViewerEvents = UIExtension.PDFViewCtrl.Events;

var RedactionPageController = function (_UIExtension$Controll) {
    _inherits(RedactionPageController, _UIExtension$Controll);

    function RedactionPageController(component) {
        _classCallCheck(this, RedactionPageController);

        return _possibleConstructorReturn(this, _UIExtension$Controll.call(this, component));
    }

    RedactionPageController.getName = function getName() {
        return "RedactionPageController";
    };

    RedactionPageController.prototype.handle = function handle() {
        this.popop.show();
        this.popop.reset();
    };

    RedactionPageController.prototype.mounted = function mounted() {
        var _this2 = this;

        this.popop = this.getComponentByName("redaction-page-popup");

        var pdfUi = this.getPDFUI();
        pdfUi.addViewerEventListener(ViewerEvents.openFileSuccess, function (pdfDoc) {
            var pageCount = pdfDoc.getPageCount();
            _this2.popop.setSubmitCallback(function (pages) {
                if (pages.length == 0) {
                    pdfUi.getPDFViewer().then(function (viewer) {
                        pages = [viewer.getPDFDocRender().currentPageIndex];
                        pdfDoc.makeRedactByPages(pages).then(function (result) {
                            _this2.popop.hide();
                        });
                    });
                } else {
                    pdfDoc.makeRedactByPages(pages).then(function (result) {
                        _this2.popop.hide();
                    });
                }
            }, pageCount);

            var placeholder = "Max: " + pageCount;
            _this2.popop.rendered(placeholder);
        });
    };

    return RedactionPageController;
}(UIExtension.Controller);

exports.default = RedactionPageController;

/***/ }),

/***/ "./uix-addons/redaction/redactionSearchController.js":
/*!***********************************************************!*\
  !*** ./uix-addons/redaction/redactionSearchController.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _Events = __webpack_require__(/*! ./Events */ "./uix-addons/redaction/Events.js");

var _Events2 = _interopRequireDefault(_Events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var RedactionSearchController = function (_UIExtension$Controll) {
    _inherits(RedactionSearchController, _UIExtension$Controll);

    function RedactionSearchController(component) {
        _classCallCheck(this, RedactionSearchController);

        return _possibleConstructorReturn(this, _UIExtension$Controll.call(this, component));
    }

    RedactionSearchController.prototype.handle = function handle() {
        var sidebar = this.getComponentByName("sidebar");
        sidebar.expand();
        var search = this.getComponentByName("sidebar-search");
        search.active();
        var searchPanel = this.getComponentByName("fv-search-sidebar-panel");
        searchPanel.activeRedactionMode();
    };

    _createClass(RedactionSearchController, null, [{
        key: "permission",
        get: function get() {
            return UIExtension.PDFViewCtrl.Consts.PDFDocPermission.AnnotForm;
        }
    }]);

    return RedactionSearchController;
}(UIExtension.Controller);

exports.default = RedactionSearchController;

/***/ }),

/***/ "./uix-addons/redaction/redactionTextController.js":
/*!*********************************************************!*\
  !*** ./uix-addons/redaction/redactionTextController.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _Events = __webpack_require__(/*! ./Events */ "./uix-addons/redaction/Events.js");

var _Events2 = _interopRequireDefault(_Events);

var _createRedactionTextStateHandler = __webpack_require__(/*! ./createRedactionTextStateHandler */ "./uix-addons/redaction/createRedactionTextStateHandler.js");

var _createRedactionTextStateHandler2 = _interopRequireDefault(_createRedactionTextStateHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var RedactionTextController = function (_UIExtension$Stateful) {
    _inherits(RedactionTextController, _UIExtension$Stateful);

    function RedactionTextController(component) {
        _classCallCheck(this, RedactionTextController);

        return _possibleConstructorReturn(this, _UIExtension$Stateful.call(this, component, _createRedactionTextStateHandler2.default));
    }

    RedactionTextController.getName = function getName() {
        return "RedactionTextController";
    };

    _createClass(RedactionTextController, null, [{
        key: 'permission',
        get: function get() {
            return UIExtension.PDFViewCtrl.Consts.PDFDocPermission.AnnotForm;
        }
    }]);

    return RedactionTextController;
}(UIExtension.StatefulController);

exports.default = RedactionTextController;

/***/ }),

/***/ "./uix-addons/redaction/style/redact.scss":
/*!************************************************!*\
  !*** ./uix-addons/redaction/style/redact.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWRhY3Rpb25BZGRvbi93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUmVkYWN0aW9uQWRkb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmVkYWN0aW9uQWRkb24vLi9ub2RlX21vZHVsZXMvYXJ0LXRlbXBsYXRlL2xpYi9jb21waWxlL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vUmVkYWN0aW9uQWRkb24vLi9ub2RlX21vZHVsZXMvYXJ0LXRlbXBsYXRlL2xpYi9ydW50aW1lLmpzIiwid2VicGFjazovL1JlZGFjdGlvbkFkZG9uLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9SZWRhY3Rpb25BZGRvbi8uL3VpeC1hZGRvbnMvcmVkYWN0aW9uL0V2ZW50cy5qcyIsIndlYnBhY2s6Ly9SZWRhY3Rpb25BZGRvbi8uL3VpeC1hZGRvbnMvcmVkYWN0aW9uL2FkZG9uLmluZm8uanNvbiIsIndlYnBhY2s6Ly9SZWRhY3Rpb25BZGRvbi8uL3VpeC1hZGRvbnMvcmVkYWN0aW9uL2NyZWF0ZVJlZGFjdGlvblN0YXRlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9SZWRhY3Rpb25BZGRvbi8uL3VpeC1hZGRvbnMvcmVkYWN0aW9uL2NyZWF0ZVJlZGFjdGlvblRleHRTdGF0ZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vUmVkYWN0aW9uQWRkb24vLi91aXgtYWRkb25zL3JlZGFjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9SZWRhY3Rpb25BZGRvbi8uL3VpeC1hZGRvbnMvcmVkYWN0aW9uL3BvcHVwL2luZGV4LmpzIiwid2VicGFjazovL1JlZGFjdGlvbkFkZG9uLy4vdWl4LWFkZG9ucy9yZWRhY3Rpb24vcG9wdXAvaW5kZXguc2Nzcz83NWM1Iiwid2VicGFjazovL1JlZGFjdGlvbkFkZG9uLy4vdWl4LWFkZG9ucy9yZWRhY3Rpb24vcG9wdXAvcG9wdXAuYXJ0Iiwid2VicGFjazovL1JlZGFjdGlvbkFkZG9uLy4vdWl4LWFkZG9ucy9yZWRhY3Rpb24vcmVkYWN0aW9uLWRyb3Bkb3duLmFydCIsIndlYnBhY2s6Ly9SZWRhY3Rpb25BZGRvbi8uL3VpeC1hZGRvbnMvcmVkYWN0aW9uL3JlZGFjdGlvbkFwcGx5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9SZWRhY3Rpb25BZGRvbi8uL3VpeC1hZGRvbnMvcmVkYWN0aW9uL3JlZGFjdGlvbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vUmVkYWN0aW9uQWRkb24vLi91aXgtYWRkb25zL3JlZGFjdGlvbi9yZWRhY3Rpb25QYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9SZWRhY3Rpb25BZGRvbi8uL3VpeC1hZGRvbnMvcmVkYWN0aW9uL3JlZGFjdGlvblNlYXJjaENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vUmVkYWN0aW9uQWRkb24vLi91aXgtYWRkb25zL3JlZGFjdGlvbi9yZWRhY3Rpb25UZXh0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9SZWRhY3Rpb25BZGRvbi8uL3VpeC1hZGRvbnMvcmVkYWN0aW9uL3N0eWxlL3JlZGFjdC5zY3NzPzU1ZDQiLCJ3ZWJwYWNrOi8vUmVkYWN0aW9uQWRkb24vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcIlVJRXh0ZW5zaW9uXCIsXCJjb21tb25qczJcIjpcIlVJRXh0ZW5zaW9uXCIsXCJhbWRcIjpcIlVJRXh0ZW5zaW9uXCIsXCJyb290XCI6XCJVSUV4dGVuc2lvblwifSJdLCJuYW1lcyI6WyJyZWRhY3RBbm5vdEFwcGx5ZWQiLCJyZWRhY3RBbm5vdEFsbEFwcGx5ZWQiLCJhbm5vdGF0aW9uQWRkIiwiYW5ub3RhdGlvblJlbW92ZWQiLCJhZGRSZWRhY3Rpb25BcmVhIiwiVUlFeHRlbnNpb24iLCJQREZWaWV3Q3RybCIsIkNyZWF0ZVJlZGFjdGlvblN0YXRlSGFuZGxlciIsInBkZlZpZXdlciIsImN1cnNvclN0eWxlIiwiZGVzdHJveUhvb2tzIiwiZ2V0U3RhdGVOYW1lIiwiZ2V0RGV2aWNlUGFnZVBvaW50IiwiZWxlbSIsImV2ZW50IiwicGFnZVJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzcmNFdmVudCIsIngiLCJjbGllbnRYIiwibGVmdCIsImRlbHRhWCIsInkiLCJjbGllbnRZIiwidG9wIiwiZGVsdGFZIiwiY29ycmVjdFBvc2l0aW9uIiwicG9zaXRpb24iLCJwYWdlUmVuZGVyIiwiZ2V0UERGUGFnZSIsInRoZW4iLCJzY2FsZSIsImdldFNjYWxlIiwid2lkdGgiLCJwYWdlIiwiZ2V0UHhXaWR0aCIsImhlaWdodCIsImdldFB4SGVpZ2h0IiwiTWF0aCIsIm1heCIsIm1pbiIsInN0YXJ0Iiwic2hhcGVDb250cm9sIiwiU2hhcGVDb250cm9sIiwicmVzaXphYmxlIiwiZW5hYmxlRGlhZ29uYWxseSIsImFjdGl2ZSIsIiRoYW5kbGVyIiwiYWRqdXN0Iiwic3giLCJzeSIsImV4IiwiZXkiLCJhYnMiLCJzaGFwZSIsImJvdW5kYXJ5IiwicmlnaHQiLCJib3R0b20iLCJfYXBwbHlBbm5vdEJvdW5kYXJ5IiwiX3VwZGF0ZVByZXZpZXdlciIsInBhZ2VIYW5kbGVyIiwiaGFuZGxlciIsImdldCIsImFkZENsYXNzIiwiaGFtbWVyIiwiRGVwcyIsIkhhbW1lciIsIk1hbmFnZXIiLCJhZGQiLCJQYW4iLCJkaXJlY3Rpb24iLCJESVJFQ1RJT05fQUxMIiwib24iLCJzdGFydFBvaW50IiwiZSIsInJldmVyc2VEZXZpY2VQb2ludCIsImN1cnJlbnRQb2ludCIsInBvaW50IiwiZXZlbnRFbWl0dGVyIiwiZW1pdCIsIkV2ZW50cyIsImRlc3Ryb3kiLCJkZXN0cm95UGFnZUhhbmRsZXIiLCJyZW1vdmVDbGFzcyIsImZvckVhY2giLCJob29rIiwiSVN0YXRlSGFuZGxlciIsIkNyZWF0ZVJlZGFjdGlvblRleHRTdGF0ZUhhbmRsZXIiLCJhZGRBbm5vdCIsInJlY3RBcnJheSIsIm1hcmtSZWRhY3RBbm5vdCIsIlRleHRNYXJrdXBTdGF0ZUhhbmRsZXIiLCJkcm9wZG93blRlbXBsYXRlIiwiUmVkYWN0aW9uQWRkb24iLCJnZXROYW1lIiwiZ2V0TG9hZGVyIiwidHBtTG9hZGVyIiwiaW5pdCIsIm1vZHVsZSIsIm1vZHVsYXIiLCJyZWdpc3RyeSIsImdldFJlZ2lzdHJ5IiwicmVnaXN0ZXJDb250cm9sbGVyIiwiUmVkYWN0aW9uQ29udHJvbGxlciIsIlJlZGFjdGlvblRleHRDb250cm9sbGVyIiwiUmVkYWN0aW9uUGFnZUNvbnRyb2xsZXIiLCJyZWdpc3RlckNvbXBvbmVudCIsIlBvcHVwQ29tcG9uZW50IiwiZnJhZ21lbnRzIiwidGFyZ2V0IiwiYWN0aW9uIiwiVUlDb25zdHMiLCJGUkFHTUVOVF9BQ1RJT04iLCJBUFBFTkQiLCJ0ZW1wbGF0ZSIsImNvbmZpZyIsImNhbGxiYWNrIiwiQ29uc3RzIiwiUERGRG9jUGVybWlzc2lvbiIsIkFubm90Rm9ybSIsIkNvbnRyb2xsZXIiLCJ0b29sdGlwIiwidGl0bGUiLCJSZWRhY3Rpb25BcHBseUNvbnRyb2xsZXIiLCJSZWRhY3Rpb25TZWFyY2hDb250cm9sbGVyIiwiVUlYQWRkb24iLCJiaW5kRXZlbnQiLCJzZWxlY3RvciIsImVsZW1lbnRzIiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwicHVzaCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJjbGFzc0xpc3QiLCJyZW5kZXJlZCIsInBhZ2VDb3VudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJsb2NhbGl6ZSIsIm1vdW50RXZlbnQiLCJjaGVja2VkIiwiaGlkZUVycm9yIiwidmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJoaWRlIiwic3VibWl0Iiwic2V0U3VibWl0Q2FsbGJhY2siLCJzdWJtaXRDYWxsYmFjayIsImRvY1BhZ2VDb3VudCIsImRvY1BhZ2UiLCJpc0N1cnJlbnRQYWdlIiwiaXRlbSIsInBhZ2VzIiwicmFuZ2UiLCJyZWdleHAiLCJSZWdFeHAiLCJ0ZXN0Iiwic2hvd0Vycm9yIiwicmFuZ2VzIiwic3BsaXQiLCJpIiwiaW5kZXhPZiIsInBhZ2VSYW5nZSIsInJlc2V0IiwiZXJyb3IiLCJyZW1vdmUiLCJ3aWRnZXRzIiwiTGF5ZXJDb21wb25lbnQiLCJWaWV3ZXJFdmVudHMiLCJjb21wb25lbnQiLCJoYW5kbGUiLCJkaXNhYmxlZCIsInBkZlVpIiwiZ2V0UERGVUkiLCJsb2NhbGl6ZXIiLCJ0cmFuc2xhdGUiLCJ3aW5kb3ciLCJjb25maXJtIiwicmVzdWx0IiwiZ2V0UERGVmlld2VyIiwiZG9jIiwidmlld2VyIiwiZ2V0Q3VycmVudFBERkRvYyIsImFwcGx5UmVkYWN0aW9uIiwicmVtb3ZlZEFubm90T2JqcyIsInBhZ2VJbmRleCIsImFubm90T2JqIiwiYW5ub3RJZHMiLCJyZW1vdmVkQW5ub3RzIiwiZG9jUmVuZGVyIiwiZ2V0UERGRG9jUmVuZGVyIiwicGFnZXNSZW5kZXIiLCJwYWdlUmVuZGVycyIsImFubm90c1JlbmRlciIsImFubm90cyIsImluZGV4IiwiYW5ub3QiLCJpZCIsImluZm8iLCJpc0RlbGV0ZWQiLCJzcGxpY2UiLCJzZXRSZW5kZXJGbGFncyIsInJlbmRlclZpc2libGVQYWdlcyIsIm1vdW50ZWQiLCJhZGRWaWV3ZXJFdmVudExpc3RlbmVyIiwicmVjdCIsImRpc2FibGUiLCJpc1JlZGFjdEV4aXN0Iiwib3BlbkZpbGVTdWNjZXNzIiwicGRmRG9jIiwicmVkYWN0QW5ub3RSZW5kZXJlZCIsInBlcm1pc3Npb24iLCJnZXRVc2VyUGVybWlzc2lvbiIsImdldFZhbHVlIiwiZW5hYmxlIiwidHlwZSIsImN1cnJlbnRQREZEb2MiLCJnZXRBbm5vdHMiLCJwYWdlQW5ub3RzIiwiaiIsIk1vZGlmeURvY3VtZW50IiwibGVmdEluUFQiLCJ0b3BJblBUIiwicmlnaHRJblBUIiwiYm90dG9tSW5QVCIsImRldmljZVJlY3QiLCJhbm5vdFJlbmRlciIsImdldEFubm90UmVuZGVyIiwiZ2V0SWQiLCJTdGF0ZWZ1bENvbnRyb2xsZXIiLCJwb3BvcCIsInNob3ciLCJnZXRDb21wb25lbnRCeU5hbWUiLCJnZXRQYWdlQ291bnQiLCJjdXJyZW50UGFnZUluZGV4IiwibWFrZVJlZGFjdEJ5UGFnZXMiLCJwbGFjZWhvbGRlciIsInNpZGViYXIiLCJleHBhbmQiLCJzZWFyY2giLCJzZWFyY2hQYW5lbCIsImFjdGl2ZVJlZGFjdGlvbk1vZGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBLDhDQUFhOztBQUViOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksSUFBSTtBQUNoQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFNBQVM7QUFDbkQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsaUJBQWlCO0FBQy9EO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7O0FDbEdhOztBQUViLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFtQixFOzs7Ozs7Ozs7OztBQ0Y1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNuQmU7QUFDWEEsd0JBQXFCLGlCQURWO0FBRVhDLDJCQUF3QixxQkFGYjtBQUdYQyxtQkFBZSxnQkFISjtBQUlYQyx1QkFBb0Isb0JBSlQ7QUFLWEMsc0JBQW1CO0FBTFIsQzs7Ozs7Ozs7Ozs7O0FDQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOztJQUFZQyxXOztBQUNaOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUMsY0FBY0QsWUFBWUMsV0FBaEM7O0lBQ3FCQywyQjs7O0FBQ2pCLHlDQUFhQyxTQUFiLEVBQXdCO0FBQUE7O0FBQUEscURBQ3BCLGlDQUFNQSxTQUFOLEVBQWlCLFFBQWpCLENBRG9COztBQUVwQixjQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGNBQUtDLFdBQUwsR0FBaUIsa0JBQWpCO0FBQ0EsY0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUpvQjtBQUt2Qjs7Z0NBQ01DLFksMkJBQWdCO0FBQ25CLGVBQU8sd0JBQVA7QUFDSCxLOzswQ0FDREMsa0IsK0JBQW1CQyxJLEVBQUtDLEssRUFBTTtBQUMxQixZQUFJQyxXQUFXRixLQUFLRyxxQkFBTCxFQUFmO0FBQ0EsWUFBSUMsV0FBV0gsTUFBTUcsUUFBckI7QUFDQSxlQUFPO0FBQ0xDLGVBQUdELFNBQVNFLE9BQVQsR0FBbUJKLFNBQVNLLElBQTVCLEdBQW1DTixNQUFNTyxNQUR2QztBQUVMQyxlQUFHTCxTQUFTTSxPQUFULEdBQW1CUixTQUFTUyxHQUE1QixHQUFrQ1YsTUFBTVc7QUFGdEMsU0FBUDtBQUlELEs7OzBDQUVIQyxlLDRCQUFnQkMsUSxFQUFVO0FBQUE7O0FBQ3RCLGVBQU8sS0FBS0MsVUFBTCxDQUFnQkMsVUFBaEIsR0FBNkJDLElBQTdCLENBQWtDLGdCQUFRO0FBQzdDLGdCQUFNQyxRQUFRLE9BQUtILFVBQUwsQ0FBZ0JJLFFBQWhCLEVBQWQ7QUFDQSxnQkFBTUMsUUFBUUMsS0FBS0MsVUFBTCxLQUFvQkosS0FBbEM7QUFDQSxnQkFBTUssU0FBU0YsS0FBS0csV0FBTCxLQUFxQk4sS0FBcEM7QUFDQSxnQkFBTWIsSUFBSW9CLEtBQUtDLEdBQUwsQ0FBUyxDQUFULEVBQVlELEtBQUtFLEdBQUwsQ0FBU1AsS0FBVCxFQUFnQk4sU0FBU1QsQ0FBekIsQ0FBWixDQUFWO0FBQ0EsZ0JBQU1JLElBQUlnQixLQUFLQyxHQUFMLENBQVMsQ0FBVCxFQUFZRCxLQUFLRSxHQUFMLENBQVNKLE1BQVQsRUFBaUJULFNBQVNMLENBQTFCLENBQVosQ0FBVjtBQUNBLG1CQUFPLEVBQUNKLElBQUQsRUFBSUksSUFBSixFQUFQO0FBQ0gsU0FQTSxDQUFQO0FBUUgsSzs7MENBQ0RtQixLLGtCQUFNYixVLFFBQXlCO0FBQUEsWUFBWlIsSUFBWSxRQUFaQSxJQUFZO0FBQUEsWUFBTkksR0FBTSxRQUFOQSxHQUFNOztBQUMzQixZQUFHLEtBQUtrQixZQUFSLEVBQXNCO0FBQ3RCLGFBQUtBLFlBQUwsR0FBb0IsSUFBSXBDLFlBQVlxQyxZQUFoQixDQUE2QjtBQUM3Q0MsdUJBQVcsS0FEa0M7QUFFN0NDLDhCQUFrQjtBQUYyQixTQUE3QixDQUFwQjtBQUlBLGFBQUtILFlBQUwsQ0FBa0JJLE1BQWxCLENBQXlCbEIsV0FBV21CLFFBQXBDLEVBQThDbkIsV0FBV21CLFFBQXpELEVBQW1FO0FBQy9EM0Isa0JBQU1BLElBRHlEO0FBRS9ESSxpQkFBS0EsR0FGMEQ7QUFHL0RTLG1CQUFPLENBSHdEO0FBSS9ERyxvQkFBUTtBQUp1RCxTQUFuRTtBQU1ILEs7OzBDQUNEWSxNLG1CQUFPTixZLGdCQUFnRDtBQUFBLFlBQTlCTyxFQUE4QixTQUFqQy9CLENBQWlDO0FBQUEsWUFBdkJnQyxFQUF1QixTQUExQjVCLENBQTBCO0FBQUEsWUFBYjZCLEVBQWEsU0FBaEJqQyxDQUFnQjtBQUFBLFlBQU5rQyxFQUFNLFNBQVQ5QixDQUFTOztBQUNuRCxZQUFJRixhQUFKO0FBQUEsWUFBVUksWUFBVjtBQUNBLFlBQUlTLFFBQVFLLEtBQUtlLEdBQUwsQ0FBU0osS0FBS0UsRUFBZCxDQUFaO0FBQ0EsWUFBSWYsU0FBU0UsS0FBS2UsR0FBTCxDQUFTSCxLQUFLRSxFQUFkLENBQWI7O0FBRUFoQyxlQUFPa0IsS0FBS0UsR0FBTCxDQUFTUyxFQUFULEVBQWFFLEVBQWIsQ0FBUDtBQUNBM0IsY0FBTWMsS0FBS0UsR0FBTCxDQUFTVSxFQUFULEVBQWFFLEVBQWIsQ0FBTjtBQUNBbkIsZ0JBQVFLLEtBQUtDLEdBQUwsQ0FBU04sS0FBVCxFQUFnQixDQUFoQixDQUFSO0FBQ0FHLGlCQUFTRSxLQUFLQyxHQUFMLENBQVNILE1BQVQsRUFBaUIsQ0FBakIsQ0FBVDtBQUNBLFlBQUlrQixRQUFRO0FBQ1JsQyxrQkFBTUEsSUFERTtBQUVSSSxpQkFBS0EsR0FGRztBQUdSUyxtQkFBT0EsS0FIQztBQUlSRyxvQkFBUUE7QUFKQSxTQUFaO0FBTUEsWUFBSW1CLFdBQVc7QUFDWG5DLGtCQUFNQSxJQURLO0FBRVhJLGlCQUFLQSxHQUZNO0FBR1hnQyxtQkFBT3BDLE9BQU9hLEtBSEg7QUFJWHdCLG9CQUFRakMsTUFBTVk7QUFKSCxTQUFmO0FBTUFNLHFCQUFhZ0IsbUJBQWIsQ0FBaUNKLEtBQWpDO0FBQ0FaLHFCQUFhWSxLQUFiLENBQW1CQyxRQUFuQixHQUE4QkEsUUFBOUI7QUFDQWIscUJBQWFZLEtBQWIsQ0FBbUJBLEtBQW5CLEdBQTJCQSxLQUEzQjtBQUNBWixxQkFBYWlCLGdCQUFiO0FBQ0gsSzs7MENBQ0RDLFcsd0JBQVloQyxVLEVBQVk7QUFBQTs7QUFDcEIsYUFBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxZQUFNaUMsVUFBVWpDLFdBQVdtQixRQUFYLENBQW9CZSxHQUFwQixDQUF3QixDQUF4QixDQUFoQjtBQUNBbEMsbUJBQVdtQixRQUFYLENBQW9CZ0IsUUFBcEIsQ0FBNkIsS0FBS3RELFdBQWxDO0FBQ0EsWUFBTXVELFNBQVMsS0FBS0EsTUFBTCxHQUFjLElBQUkxRCxZQUFZMkQsSUFBWixDQUFpQkMsTUFBakIsQ0FBd0JDLE9BQTVCLENBQW9DTixPQUFwQyxDQUE3QjtBQUNBLFlBQUlkLFdBQVduQixXQUFXbUIsUUFBMUI7QUFDQWlCLGVBQU9JLEdBQVAsQ0FDSSxJQUFJRixPQUFPRyxHQUFYLENBQWU7QUFDWEMsdUJBQVdKLE9BQU9LO0FBRFAsU0FBZixDQURKO0FBS0FQLGVBQU9RLEVBQVAsQ0FBVSxVQUFWLEVBQXNCLGFBQUs7QUFDdkIsbUJBQUtDLFVBQUwsR0FBa0IsT0FBSzdELGtCQUFMLENBQXdCaUQsT0FBeEIsRUFBZ0NhLENBQWhDLENBQWxCO0FBQ0E5Qyx1QkFBV0MsVUFBWCxHQUF3QkMsSUFBeEIsQ0FBNkIsZ0JBQVE7QUFBQSw0Q0FDYkksS0FBS3lDLGtCQUFMLENBQXdCLENBQUMsT0FBS0YsVUFBTCxDQUFnQnZELENBQWpCLEVBQW9CLE9BQUt1RCxVQUFMLENBQWdCbkQsQ0FBcEMsQ0FBeEIsRUFBZ0UsT0FBS00sVUFBTCxDQUFnQkcsS0FBaEYsQ0FEYTtBQUFBO0FBQUEsb0JBQzFCWCxJQUQwQjtBQUFBLG9CQUNwQkksR0FEb0I7O0FBRWpDLHVCQUFLaUIsS0FBTCxDQUFXYixVQUFYLEVBQXVCLEVBQUNSLFVBQUQsRUFBT0ksUUFBUCxFQUF2QjtBQUNILGFBSEQ7QUFJSCxTQU5EO0FBT0F3QyxlQUFPUSxFQUFQLENBQVUsU0FBVixFQUFxQixhQUFLOztBQUV0QixtQkFBTyxPQUFLOUMsZUFBTCxDQUFxQjtBQUN4QlIsbUJBQUcsT0FBS3VELFVBQUwsQ0FBZ0J2RCxDQUFoQixHQUFvQndELEVBQUVyRCxNQUREO0FBRXhCQyxtQkFBRyxPQUFLbUQsVUFBTCxDQUFnQm5ELENBQWhCLEdBQW9Cb0QsRUFBRWpEO0FBRkQsYUFBckIsRUFHSkssSUFISSxDQUdDLGlCQUFTO0FBQ2IsdUJBQUs4QyxZQUFMLEdBQW9CQyxLQUFwQjtBQUNBLHVCQUFPLE9BQUs3QixNQUFMLENBQVksT0FBS04sWUFBakIsRUFBK0IsT0FBSytCLFVBQXBDLEVBQWdELE9BQUtHLFlBQXJELENBQVA7QUFDSCxhQU5NLENBQVA7QUFPSCxTQVREO0FBVUFaLGVBQU9RLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLGFBQUs7QUFDckIsbUJBQUs5QyxlQUFMLENBQXFCO0FBQ2pCUixtQkFBRyxPQUFLdUQsVUFBTCxDQUFnQnZELENBQWhCLEdBQW9Cd0QsRUFBRXJELE1BRFI7QUFFakJDLG1CQUFHLE9BQUttRCxVQUFMLENBQWdCbkQsQ0FBaEIsR0FBb0JvRCxFQUFFakQ7QUFGUixhQUFyQixFQUdHSyxJQUhILENBR1EsaUJBQVM7QUFDYix1QkFBSzhDLFlBQUwsR0FBb0JDLEtBQXBCO0FBQ0EsdUJBQUs3QixNQUFMLENBQVksT0FBS04sWUFBakIsRUFBK0IsT0FBSytCLFVBQXBDLEVBQWdELE9BQUtHLFlBQXJEO0FBQ0EsdUJBQUtwRSxTQUFMLENBQWVzRSxZQUFmLENBQTRCQyxJQUE1QixDQUFpQ0MsaUJBQU81RSxnQkFBeEMsRUFBMkR3QixVQUEzRCxFQUF1RSxPQUFLYyxZQUFMLENBQWtCWSxLQUFsQixDQUF3QkMsUUFBL0Y7QUFDQSx1QkFBS2IsWUFBTCxDQUFrQnVDLE9BQWxCO0FBQ0EsdUJBQUt2QyxZQUFMLEdBQW9CLElBQXBCO0FBQ0gsYUFURDtBQVVILFNBWEQ7QUFZQXNCLGVBQU9RLEVBQVAsQ0FBVSxXQUFWLEVBQXVCLGFBQUs7QUFDeEIsbUJBQUs5QixZQUFMLENBQWtCdUMsT0FBbEI7QUFDQSxtQkFBS3ZDLFlBQUwsR0FBb0IsSUFBcEI7QUFDSCxTQUhEO0FBSUgsSzs7MENBRUR3QyxrQixpQ0FBcUI7QUFDakIsYUFBS2xCLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlpQixPQUFaLEVBQWY7QUFDQSxhQUFLckQsVUFBTCxDQUFnQm1CLFFBQWhCLENBQXlCb0MsV0FBekIsQ0FBcUMsS0FBSzFFLFdBQTFDO0FBQ0EsYUFBS0MsWUFBTCxDQUFrQjBFLE9BQWxCLENBQTBCO0FBQUEsbUJBQVFDLE1BQVI7QUFBQSxTQUExQjtBQUNILEs7OztFQXRIb0QvRSxZQUFZZ0YsYTs7a0JBQWhEL0UsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7SUFBWUYsVzs7Ozs7Ozs7Ozs7O0lBRVNrRiwrQjs7O0FBQ2pCLDZDQUFhL0UsU0FBYixFQUF3QjtBQUFBOztBQUFBLHFEQUNwQixpQ0FBTUEsU0FBTixDQURvQjs7QUFFcEIsY0FBS0MsV0FBTCxHQUFpQixzQkFBakI7QUFGb0I7QUFHdkI7O29DQUNNRSxZLDJCQUFnQjtBQUNuQixlQUFPLDZCQUFQO0FBQ0gsSzs7OENBQ0Q2RSxRLHFCQUFTdEQsSSxFQUFLdUQsUyxFQUFVO0FBQ3BCLGVBQU92RCxLQUFLd0QsZUFBTCxDQUFxQkQsU0FBckIsQ0FBUDtBQUNILEs7OztFQVZ3RHBGLFlBQVlzRixzQjs7a0JBQXBESiwrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckI7O0lBQVlsRixXOztBQUNaOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQVJBOzs7QUFTQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBTXVGLG1CQUFtQixrQ0FBekI7O0lBRXFCQyxjOzs7Ozs7Ozs7bUJBQ1ZDLE8sc0JBQVU7QUFDYixlQUFPLFdBQVA7QUFDSCxLOzttQkFDTUMsUyx3QkFBWTtBQUNmLGVBQU9DLG1CQUFQO0FBQ0gsSzs7NkJBQ0RDLEksbUJBQU87QUFDSCxZQUFNQyxTQUFTN0YsWUFBWThGLE9BQVosQ0FBb0JELE1BQXBCLENBQTJCLFdBQTNCLEVBQXdDLEVBQXhDLENBQWY7QUFDQSxZQUFNRSxXQUFXRixPQUFPRyxXQUFQLEVBQWpCO0FBQ0EsYUFBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0FFLGlCQUFTRSxrQkFBVCxDQUE0QkMsNkJBQTVCO0FBQ0FILGlCQUFTRSxrQkFBVCxDQUE0QkUsaUNBQTVCO0FBQ0FKLGlCQUFTRSxrQkFBVCxDQUE0QkcsaUNBQTVCO0FBQ0FMLGlCQUFTTSxpQkFBVCxDQUEyQkMsZUFBM0I7QUFDSCxLOzs2QkFDREMsUyx3QkFBWTtBQUNSLGVBQU8sQ0FBQztBQUNKQyxvQkFBUSxvQkFESjtBQUVKQyxvQkFBUXpHLFlBQVkwRyxRQUFaLENBQXFCQyxlQUFyQixDQUFxQ0MsTUFGekM7QUFHSkM7QUFISSxTQUFELEVBVUw7QUFDRUwsb0JBQVEsNEJBRFY7QUFFRUMsb0JBQVF6RyxZQUFZMEcsUUFBWixDQUFxQkMsZUFBckIsQ0FBcUNDLE1BRi9DO0FBR0VDO0FBSEYsU0FWSyxFQWNMO0FBQ0VMLG9CQUFRLFdBRFY7QUFFRUMsb0JBQVF6RyxZQUFZMEcsUUFBWixDQUFxQkMsZUFBckIsQ0FBcUNDLE1BRi9DO0FBR0VDLHNCQUFVdEIsZ0JBSFo7QUFJRXVCLG9CQUFPLENBQUM7QUFDSk4sd0JBQVEsOEJBREo7QUFFSk87QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDRDQUMyQjtBQUNuQixtQ0FBTy9HLFlBQVlDLFdBQVosQ0FBd0IrRyxNQUF4QixDQUErQkMsZ0JBQS9CLENBQWdEQyxTQUF2RDtBQUNIO0FBSEw7O0FBQUE7QUFBQSxrQkFBd0JsSCxZQUFZbUgsVUFBcEM7QUFGSSxhQUFEO0FBSlQsU0FkSyxFQTBCTDtBQUNFWCxvQkFBUSxXQURWO0FBRUVDLG9CQUFRekcsWUFBWTBHLFFBQVosQ0FBcUJDLGVBQXJCLENBQXFDQyxNQUYvQztBQUdFQywwTEFIRjtBQUlFQyxvQkFBUSxDQUFDO0FBQ0xOLHdCQUFRLGlCQURIO0FBRUxZLHlCQUFTO0FBQ0xDLDJCQUFPO0FBREYsaUJBRko7QUFLTE4sMEJBQVVPO0FBTEwsYUFBRDtBQUpWLFNBMUJLLEVBcUNMO0FBQ0VkLG9CQUFRLFdBRFY7QUFFRUMsb0JBQVF6RyxZQUFZMEcsUUFBWixDQUFxQkMsZUFBckIsQ0FBcUNDLE1BRi9DO0FBR0VDLGtNQUhGO0FBSUVDLG9CQUFRLENBQUM7QUFDTE4sd0JBQVEsa0JBREg7QUFFTFkseUJBQVM7QUFDTEMsMkJBQU87QUFERixpQkFGSjtBQUtMTiwwQkFBVVE7QUFMTCxhQUFEO0FBSlYsU0FyQ0ssQ0FBUDtBQWtESCxLOzs7RUFuRXVDdkgsWUFBWXdILFE7O2tCQUFuQ2hDLGM7QUFvRXBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGRDs7SUFBWXhGLFc7O0FBQ1o7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJzRyxjOzs7Ozs7Ozs7bUJBQ1ZiLE8sc0JBQVU7QUFDYixlQUFPLHNCQUFQO0FBQ0gsSzs7NkJBQ0RnQyxTLHNCQUFVQyxRLEVBQVVqSCxLLEVBQU9zRyxRLEVBQVM7QUFBQTs7QUFDaEMsWUFBSVksV0FBVyxLQUFLQyxPQUFMLENBQWFDLGdCQUFiLENBQThCSCxRQUE5QixDQUFmO0FBQ0EsWUFBR0MsU0FBU0csTUFBVCxJQUFtQixDQUF0QixFQUF5QjtBQUN6QkgsaUJBQVM1QyxPQUFULENBQWlCLG1CQUFXO0FBQ3hCNkMsb0JBQVFHLGdCQUFSLENBQXlCdEgsS0FBekIsRUFBZ0NzRyxRQUFoQztBQUNBLG1CQUFLMUcsWUFBTCxDQUFrQjJILElBQWxCLENBQXVCLFlBQU07QUFDekJKLHdCQUFRSyxtQkFBUixDQUE0QnhILEtBQTVCLEVBQW1Dc0csUUFBbkM7QUFDSCxhQUZEO0FBR0gsU0FMRDtBQU1ILEs7OzZCQUNEbUIsTSxxQkFBUztBQUNMLHdDQUFNQSxNQUFOO0FBQ0EsYUFBSzdILFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxhQUFLdUgsT0FBTCxDQUFhTyxTQUFiLENBQXVCcEUsR0FBdkIsQ0FBMkIsMEJBQTNCO0FBQ0gsSzs7NkJBRURxRSxRLHFCQUFTQyxTLEVBQVc7QUFDaEIsYUFBS1QsT0FBTCxDQUFhVSxhQUFiLENBQTJCLHFCQUEzQixFQUFrREMsU0FBbEQsR0FBOEQscUJBQVNGLFNBQVQsQ0FBOUQ7QUFDQSxhQUFLRyxRQUFMO0FBQ0EsYUFBS0MsVUFBTDtBQUNILEs7OzZCQUdEQSxVLHlCQUFZO0FBQUE7O0FBQ1IsYUFBS2hCLFNBQUwsQ0FBZSx1QkFBZixFQUF3QyxRQUF4QyxFQUFrRCxVQUFDcEQsQ0FBRCxFQUFPO0FBQ3JELGdCQUFHQSxFQUFFbUMsTUFBRixDQUFTa0MsT0FBWixFQUFvQjtBQUNoQix1QkFBS0MsU0FBTDtBQUNBLG9CQUFHdEUsRUFBRW1DLE1BQUYsQ0FBU29DLEtBQVQsSUFBa0IsR0FBckIsRUFBeUI7QUFDckIsMkJBQUtoQixPQUFMLENBQWFVLGFBQWIsQ0FBMkIsMkJBQTNCLEVBQXdETyxZQUF4RCxDQUFxRSxVQUFyRSxFQUFpRixFQUFqRjtBQUNILGlCQUZELE1BRUs7QUFDRCwyQkFBS2pCLE9BQUwsQ0FBYVUsYUFBYixDQUEyQiwyQkFBM0IsRUFBd0RRLGVBQXhELENBQXdFLFVBQXhFO0FBRUg7QUFDSjtBQUNKLFNBVkQ7QUFXQSxhQUFLckIsU0FBTCxDQUFlLHVCQUFmLEVBQXdDLE9BQXhDLEVBQWlELFVBQUNwRCxDQUFELEVBQU87QUFDcEQsbUJBQUswRSxJQUFMO0FBQ0gsU0FGRDs7QUFJQSxhQUFLdEIsU0FBTCxDQUFlLG9CQUFmLEVBQXFDLE9BQXJDLEVBQThDLFVBQUNwRCxDQUFELEVBQU87QUFDakQsbUJBQUsyRSxNQUFMO0FBQ0gsU0FGRDs7QUFJQSxhQUFLdkIsU0FBTCxDQUFlLDJCQUFmLEVBQTRDLFNBQTVDLEVBQXVELFVBQUNwRCxDQUFELEVBQU87QUFDMUQsbUJBQUtzRSxTQUFMO0FBQ0gsU0FGRDtBQUdILEs7OzZCQUVETSxpQiw4QkFBa0JDLGMsRUFBZ0JDLFksRUFBYTtBQUMzQyxhQUFLRCxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLGFBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0gsSzs7NkJBQ0RILE0scUJBQVE7QUFDSixZQUFJSSxVQUFVLEtBQUtELFlBQW5CO0FBQ0EsWUFBSUUsZ0JBQWdCLEtBQXBCO0FBQ0EsYUFBS3pCLE9BQUwsQ0FBYUMsZ0JBQWIsQ0FBOEIsdUJBQTlCLEVBQXVEOUMsT0FBdkQsQ0FBK0QsZ0JBQVE7QUFDbkUsZ0JBQUd1RSxLQUFLWixPQUFMLElBQWdCWSxLQUFLVixLQUFMLElBQWMsR0FBakMsRUFBcUM7QUFDakNTLGdDQUFnQixJQUFoQjtBQUNIO0FBQ0osU0FKRDs7QUFNQSxZQUFJRSxRQUFRLEVBQVo7QUFDQSxZQUFHRixhQUFILEVBQWlCO0FBQ2IsbUJBQU8sS0FBS0gsY0FBTCxDQUFvQkssS0FBcEIsQ0FBUDtBQUNIO0FBQ0QsWUFBSUMsUUFBUSxLQUFLNUIsT0FBTCxDQUFhVSxhQUFiLENBQTJCLDJCQUEzQixFQUF3RE0sS0FBcEU7QUFDQSxZQUFJYSxTQUFTLElBQUlDLE1BQUosQ0FBVyxVQUFYLENBQWI7QUFDQSxZQUFHRCxPQUFPRSxJQUFQLENBQVlILEtBQVosQ0FBSCxFQUFzQjtBQUNsQixpQkFBS0ksU0FBTDtBQUNBO0FBQ0g7QUFDRCxZQUFJQyxTQUFTTCxNQUFNTSxLQUFOLENBQVksR0FBWixDQUFiO0FBQ0EsYUFBSSxJQUFJQyxJQUFHLENBQVgsRUFBY0EsSUFBRUYsT0FBTy9CLE1BQXZCLEVBQThCaUMsR0FBOUIsRUFBa0M7QUFDOUIsZ0JBQUlsSSxPQUFPZ0ksT0FBT0UsQ0FBUCxDQUFYO0FBQ0EsZ0JBQUdsSSxLQUFLbUksT0FBTCxDQUFhLEdBQWIsSUFBb0IsQ0FBQyxDQUF4QixFQUEwQjtBQUN0QixvQkFBSUMsWUFBWXBJLEtBQUtpSSxLQUFMLENBQVcsR0FBWCxDQUFoQjtBQUNBLG9CQUFHRyxVQUFVbkMsTUFBVixHQUFtQixDQUF0QixFQUF3QjtBQUNwQix5QkFBSzhCLFNBQUw7QUFDQTtBQUNILGlCQUhELE1BR0s7QUFDRCx3QkFBR0ssVUFBVSxDQUFWLElBQWUsQ0FBZixJQUFvQkEsVUFBVSxDQUFWLElBQWViLE9BQW5DLElBQThDYSxVQUFVLENBQVYsSUFBZSxDQUE3RCxJQUFrRUEsVUFBVSxDQUFWLElBQWViLE9BQXBGLEVBQTRGO0FBQ3hGLDZCQUFLUSxTQUFMO0FBQ0E7QUFDSCxxQkFIRCxNQUdLO0FBQ0QsNEJBQUl6SCxNQUFNRixLQUFLRSxHQUFMLENBQVM4SCxVQUFVLENBQVYsQ0FBVCxFQUF1QkEsVUFBVSxDQUFWLENBQXZCLENBQVY7QUFDQSw0QkFBSS9ILE1BQU1ELEtBQUtDLEdBQUwsQ0FBUytILFVBQVUsQ0FBVixDQUFULEVBQXVCQSxVQUFVLENBQVYsQ0FBdkIsQ0FBVjtBQUNBLDZCQUFJLElBQUlGLEtBQUc1SCxHQUFYLEVBQWdCNEgsTUFBRzdILEdBQW5CLEVBQXdCNkgsSUFBeEIsRUFBNEI7QUFDeEIsZ0NBQUdSLE1BQU1TLE9BQU4sQ0FBY0QsRUFBZCxNQUFxQixDQUFDLENBQXpCLEVBQTJCO0FBQ3ZCUixzQ0FBTXZCLElBQU4sQ0FBVytCLEtBQUksQ0FBZjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0osYUFuQkQsTUFtQks7QUFDRCxvQkFBR2xJLE9BQU8sQ0FBUCxJQUFZQSxPQUFPdUgsT0FBdEIsRUFBOEI7QUFDMUIseUJBQUtRLFNBQUw7QUFDQTtBQUNILGlCQUhELE1BR0s7QUFDRCx3QkFBR0wsTUFBTVMsT0FBTixDQUFjVCxLQUFkLE1BQXlCLENBQUMsQ0FBN0IsRUFBK0I7QUFDM0JBLDhCQUFNdkIsSUFBTixDQUFXbkcsT0FBTyxDQUFsQjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0QsYUFBS3FILGNBQUwsQ0FBb0JLLEtBQXBCO0FBQ0gsSzs7NkJBRURXLEssb0JBQU87QUFDSCxhQUFLdkIsU0FBTDtBQUNBLGFBQUtmLE9BQUwsQ0FBYVUsYUFBYixDQUEyQix1QkFBM0IsRUFBb0RJLE9BQXBELEdBQThELElBQTlEO0FBQ0EsYUFBS2QsT0FBTCxDQUFhVSxhQUFiLENBQTJCLDJCQUEzQixFQUF3RE0sS0FBeEQsR0FBZ0UsRUFBaEU7QUFDSCxLOzs2QkFFRGdCLFMsc0JBQVVPLEssRUFBTTtBQUNaLGFBQUt2QyxPQUFMLENBQWFVLGFBQWIsQ0FBMkIsMkJBQTNCLEVBQXdESCxTQUF4RCxDQUFrRXBFLEdBQWxFLENBQXNFLHFCQUF0RTtBQUNILEs7OzZCQUNENEUsUyx3QkFBVztBQUNQLGFBQUtmLE9BQUwsQ0FBYVUsYUFBYixDQUEyQiwyQkFBM0IsRUFBd0RILFNBQXhELENBQWtFaUMsTUFBbEUsQ0FBeUUscUJBQXpFO0FBQ0gsSzs7NkJBRUR4RixPLHNCQUFXO0FBQ1AsYUFBS3ZFLFlBQUwsQ0FBa0IwRSxPQUFsQixDQUEwQjtBQUFBLG1CQUFRQyxNQUFSO0FBQUEsU0FBMUI7QUFDSCxLOzs7RUE5SHVDaEYsWUFBWXFLLE9BQVosQ0FBb0JDLGM7O2tCQUEzQ2hFLGM7Ozs7Ozs7Ozs7O0FDSnJCLHlDOzs7Ozs7Ozs7Ozs7Ozs7YUNBQzthQVErSDthQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7YUNSeEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0Q7O0lBQVl0RyxXOztBQUNaOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFWXVLLFksR0FDUnZLLFlBQVlDLFcsQ0FEWjBFLE07O0lBRUUyQyx3Qjs7O0FBQ0Ysc0NBQWFrRCxTQUFiLEVBQXdCO0FBQUE7O0FBQUEsZ0RBQ3BCLGlDQUFNQSxTQUFOLENBRG9CO0FBRXZCOzt1Q0FJREMsTSxxQkFBUztBQUFBOztBQUNMLFlBQUcsS0FBS0QsU0FBTCxDQUFlRSxRQUFsQixFQUE0QjtBQUM1QixZQUFJQyxRQUFRLEtBQUtDLFFBQUwsRUFBWjtBQUNBRCxjQUFNRSxTQUFOLENBQWdCQyxTQUFoQixDQUEwQiw4QkFBMUIsRUFBMERySixJQUExRCxDQUErRCxrQkFBVTtBQUNyRSxnQkFBSSxDQUFDc0osT0FBT0MsT0FBUCxDQUFlQyxNQUFmLENBQUwsRUFBNkI7QUFDekI7QUFDSDtBQUNETixrQkFBTU8sWUFBTixHQUFxQnpKLElBQXJCLENBQTBCLGtCQUFVO0FBQ2hDLG9CQUFJMEosTUFBTUMsT0FBT0MsZ0JBQVAsRUFBVjtBQUNBRixvQkFBSUcsY0FBSixHQUFxQjdKLElBQXJCLENBQTBCLDRCQUFvQjtBQUMxQyx3QkFBRzhKLHFCQUFxQixLQUF4QixFQUE4QjtBQUMxQkEseUNBQWlCeEcsT0FBakIsQ0FBeUIsb0JBQVk7QUFDakMsZ0NBQUl5RyxZQUFZQyxTQUFTRCxTQUF6QjtBQUNBLGdDQUFJRSxXQUFZRCxTQUFTRSxhQUF6QjtBQUNBLGdDQUFJQyxZQUFZUixPQUFPUyxlQUFQLEVBQWhCO0FBQ0EsZ0NBQUl0SyxhQUFhcUssVUFBVUUsV0FBVixDQUFzQkMsV0FBdEIsQ0FBa0NQLFNBQWxDLENBQWpCO0FBQ0EsZ0NBQUdqSyxXQUFXeUssWUFBZCxFQUEyQjtBQUN2QixvQ0FBSUMsU0FBUzFLLFdBQVd5SyxZQUFYLENBQXdCQyxNQUFyQztBQUNBLHFDQUFJLElBQUlDLFFBQVFELE9BQU9uRSxNQUFQLEdBQWMsQ0FBOUIsRUFBaUNvRSxTQUFPLENBQXhDLEVBQTJDQSxPQUEzQyxFQUFtRDtBQUMvQyx3Q0FBSUMsUUFBUUYsT0FBT0MsS0FBUCxDQUFaO0FBQ0Esd0NBQUdSLFNBQVMxQixPQUFULENBQWlCbUMsTUFBTUMsRUFBdkIsTUFBK0IsQ0FBQyxDQUFuQyxFQUFxQztBQUNqQ0QsOENBQU1FLElBQU4sQ0FBV0MsU0FBWCxHQUF1QixJQUF2QjtBQUNBTCwrQ0FBT00sTUFBUCxDQUFjTCxLQUFkLEVBQXFCLENBQXJCO0FBQ0g7QUFDSjtBQUNKO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gseUJBckJEO0FBc0JBZCwrQkFBT1MsZUFBUCxHQUF5QkMsV0FBekIsQ0FBcUNVLGNBQXJDLENBQW9ELEVBQXBEO0FBQ0FwQiwrQkFBT1MsZUFBUCxHQUF5QkMsV0FBekIsQ0FBcUNXLGtCQUFyQzs7QUFFQXJCLCtCQUFPM0csWUFBUCxDQUFvQkMsSUFBcEIsQ0FBeUJDLGlCQUFPaEYsa0JBQWhDLEVBQW9ELE1BQXBEO0FBQ0gscUJBM0JELE1BMkJLO0FBQ0Q7QUFDSDtBQUNKLGlCQS9CRDtBQWdDSCxhQWxDRDtBQW1DSCxTQXZDRDtBQXdDSCxLOzt1Q0FHRCtNLE8sc0JBQVU7QUFBQTs7QUFDTixZQUFJL0IsUUFBUSxLQUFLQyxRQUFMLEVBQVo7QUFDQUQsY0FBTWdDLHNCQUFOLENBQTZCaEksaUJBQU8vRSxxQkFBcEMsRUFBMkQsVUFBQzJCLFVBQUQsRUFBYXFMLElBQWIsRUFBc0I7QUFDN0UsbUJBQUtwQyxTQUFMLENBQWVxQyxPQUFmO0FBQ0gsU0FGRDtBQUdBbEMsY0FBTWdDLHNCQUFOLENBQTZCaEksaUJBQU9oRixrQkFBcEMsRUFBd0QsVUFBQzRCLFVBQUQsRUFBYXFMLElBQWIsRUFBc0I7QUFDMUUsbUJBQUtFLGFBQUw7QUFDSCxTQUZEO0FBR0FuQyxjQUFNZ0Msc0JBQU4sQ0FBNkJwQyxhQUFhd0MsZUFBMUMsRUFBMkQsVUFBQ0MsTUFBRCxFQUFZO0FBQ25FLG1CQUFLeEMsU0FBTCxDQUFlcUMsT0FBZjtBQUNILFNBRkQ7QUFHQWxDLGNBQU1nQyxzQkFBTixDQUE2QnBDLGFBQWEwQyxtQkFBMUMsRUFBK0QsVUFBQ0QsTUFBRCxFQUFZO0FBQ3ZFckMsa0JBQU1rQixlQUFOLEdBQXdCcEssSUFBeEIsQ0FBNkIscUJBQVc7QUFDcEMsb0JBQUl5TCxhQUFhdEIsVUFBVXVCLGlCQUFWLEdBQThCQyxRQUE5QixFQUFqQjtBQUNBO0FBQ0ksb0JBQUdGLGFBQVcsQ0FBZCxFQUNJLE9BQUsxQyxTQUFMLENBQWU2QyxNQUFmO0FBQ1I7QUFDSCxhQU5EO0FBUUgsU0FURDtBQVVBMUMsY0FBTWdDLHNCQUFOLENBQTZCaEksaUJBQU83RSxpQkFBcEMsRUFBdUQsVUFBQ21NLE1BQUQsRUFBWTtBQUMvRCxpQkFBSSxJQUFJbEMsSUFBRyxDQUFYLEVBQWFBLElBQUVrQyxPQUFPbkUsTUFBdEIsRUFBNkJpQyxHQUE3QixFQUFpQztBQUM3QixvQkFBSW9DLFFBQVFGLE9BQU9sQyxDQUFQLENBQVo7QUFDQSxvQkFBR29DLE1BQU1FLElBQU4sQ0FBV2lCLElBQVgsSUFBbUIsUUFBdEIsRUFBK0I7QUFDM0IsMkJBQUtSLGFBQUw7QUFDQTtBQUNIO0FBQ0o7QUFDSixTQVJEO0FBU0gsSzs7dUNBRURBLGEsNEJBQWdCO0FBQUE7O0FBQ1osWUFBSW5DLFFBQVEsS0FBS0MsUUFBTCxFQUFaO0FBQ0FELGNBQU1PLFlBQU4sR0FBcUJ6SixJQUFyQixDQUEwQixrQkFBVTtBQUNoQyxtQkFBTzJKLE9BQU9tQyxhQUFQLENBQXFCQyxTQUFyQixFQUFQO0FBQ0gsU0FGRCxFQUVHL0wsSUFGSCxDQUVRLGtCQUFVO0FBQ2QsZ0JBQUlxTCxnQkFBZ0IsS0FBcEI7QUFDQSxpQkFBSSxJQUFJL0MsSUFBRSxDQUFWLEVBQVlBLElBQUVrQyxPQUFPbkUsTUFBckIsRUFBNEJpQyxHQUE1QixFQUFnQztBQUM1QixvQkFBSTBELGFBQWF4QixPQUFPbEMsQ0FBUCxDQUFqQjtBQUNBLHFCQUFJLElBQUkyRCxJQUFFLENBQVYsRUFBWUEsSUFBRUQsV0FBVzNGLE1BQXpCLEVBQWdDNEYsR0FBaEMsRUFBb0M7QUFDaEMsd0JBQUl2QixRQUFRc0IsV0FBV0MsQ0FBWCxDQUFaO0FBQ0Esd0JBQUd2QixNQUFNRSxJQUFOLENBQVdpQixJQUFYLElBQW1CLFFBQW5CLElBQStCbkIsTUFBTUUsSUFBTixDQUFXQyxTQUFYLEtBQXlCLEtBQTNELEVBQWlFO0FBQzdEUSx3Q0FBZ0IsSUFBaEI7QUFDQTtBQUNIO0FBQ0o7QUFDRCxvQkFBR0EsYUFBSCxFQUFpQjtBQUNiO0FBQ0g7QUFDSjtBQUNELGdCQUFHQSxhQUFILEVBQWlCO0FBQ2IsdUJBQUt0QyxTQUFMLENBQWU2QyxNQUFmO0FBQ0gsYUFGRCxNQUVLO0FBQ0QsdUJBQUs3QyxTQUFMLENBQWVxQyxPQUFmO0FBQ0g7QUFDSixTQXRCRDtBQXVCSCxLOzs7OzRCQTFHc0I7QUFDbkIsbUJBQU83TSxZQUFZQyxXQUFaLENBQXdCK0csTUFBeEIsQ0FBK0JDLGdCQUEvQixDQUFnRDBHLGNBQXZEO0FBQ0g7Ozs7RUFOa0MzTixZQUFZbUgsVTs7a0JBaUhwQ0csd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhmOztJQUFZdEgsVzs7QUFDWjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU1rRyxtQjs7O0FBQ0YsaUNBQWFzRSxTQUFiLEVBQXdCO0FBQUE7O0FBQUEsZ0RBQ3BCLGlDQUFNQSxTQUFOLEVBQWlCdEsscUNBQWpCLENBRG9CO0FBRXZCOzt3QkFDTXVGLE8sc0JBQVM7QUFDWixlQUFPLHFCQUFQO0FBQ0gsSzs7a0NBRURpSCxPLHNCQUFVO0FBQ04sWUFBSS9CLFFBQVEsS0FBS0MsUUFBTCxFQUFaO0FBQ0FELGNBQU1nQyxzQkFBTixDQUE2QmhJLGlCQUFPNUUsZ0JBQXBDLEVBQXNELFVBQUN3QixVQUFELEVBQWFxTCxJQUFiLEVBQXNCO0FBQ3hFckwsdUJBQVdDLFVBQVgsR0FBd0JDLElBQXhCLENBQTZCLFVBQUNJLElBQUQsRUFBVTtBQUFBLDRDQUNQQSxLQUFLeUMsa0JBQUwsQ0FBd0IsQ0FBQ3NJLEtBQUs3TCxJQUFOLEVBQVk2TCxLQUFLekwsR0FBakIsQ0FBeEIsRUFBK0NJLFdBQVdHLEtBQTFELENBRE87QUFBQTtBQUFBLG9CQUM1QmtNLFFBRDRCO0FBQUEsb0JBQ2xCQyxPQURrQjs7QUFBQSw2Q0FFSGhNLEtBQUt5QyxrQkFBTCxDQUF3QixDQUFDc0ksS0FBS3pKLEtBQU4sRUFBYXlKLEtBQUt4SixNQUFsQixDQUF4QixFQUFtRDdCLFdBQVdHLEtBQTlELENBRkc7QUFBQTtBQUFBLG9CQUU1Qm9NLFNBRjRCO0FBQUEsb0JBRWpCQyxVQUZpQjs7QUFHbkMsb0JBQUlDLGFBQWE7QUFDYmpOLDBCQUFNNk0sUUFETztBQUViek0seUJBQUswTSxPQUZRO0FBR2IxSywyQkFBTzJLLFNBSE07QUFJYjFLLDRCQUFRMks7QUFKSyxpQkFBakI7QUFNQSx1QkFBT2xNLEtBQUt3RCxlQUFMLENBQXFCLENBQUMySSxVQUFELENBQXJCLENBQVA7QUFDSCxhQVZELEVBVUd2TSxJQVZILENBVVEsVUFBQ3dLLE1BQUQsRUFBVTtBQUNkLG9CQUFNRSxRQUFRRixPQUFPLENBQVAsQ0FBZDtBQUNBLG9CQUFJZ0MsY0FBYzFNLFdBQVd5SyxZQUFYLENBQXdCa0MsY0FBeEIsQ0FBdUMvQixNQUFNZ0MsS0FBTixFQUF2QyxDQUFsQjtBQUNBRiw0QkFBWXpELFNBQVosQ0FBc0IvSCxNQUF0QjtBQUNILGFBZEQ7QUFlSCxTQWhCRDtBQWlCSCxLOzs7RUEzQjZCekMsWUFBWW9PLGtCOztrQkE4Qi9CbEksbUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDZjs7SUFBWWxHLFc7O0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHWXVLLFksR0FDUnZLLFlBQVlDLFcsQ0FEWjBFLE07O0lBR0V5Qix1Qjs7O0FBQ0YscUNBQWFvRSxTQUFiLEVBQXdCO0FBQUE7O0FBQUEsZ0RBQ3BCLGlDQUFNQSxTQUFOLENBRG9CO0FBRXZCOzs0QkFDTS9FLE8sc0JBQVM7QUFDWixlQUFPLHlCQUFQO0FBQ0gsSzs7c0NBRURnRixNLHFCQUFTO0FBQ0wsYUFBSzRELEtBQUwsQ0FBV0MsSUFBWDtBQUNBLGFBQUtELEtBQUwsQ0FBV25FLEtBQVg7QUFDSCxLOztzQ0FFRHdDLE8sc0JBQVU7QUFBQTs7QUFDTixhQUFLMkIsS0FBTCxHQUFhLEtBQUtFLGtCQUFMLENBQXdCLHNCQUF4QixDQUFiOztBQUdBLFlBQUk1RCxRQUFRLEtBQUtDLFFBQUwsRUFBWjtBQUNBRCxjQUFNZ0Msc0JBQU4sQ0FBNkJwQyxhQUFhd0MsZUFBMUMsRUFBMkQsVUFBQ0MsTUFBRCxFQUFZO0FBQ25FLGdCQUFJM0UsWUFBWTJFLE9BQU93QixZQUFQLEVBQWhCO0FBQ0EsbUJBQUtILEtBQUwsQ0FBV3BGLGlCQUFYLENBQTZCLFVBQUNNLEtBQUQsRUFBUztBQUNsQyxvQkFBR0EsTUFBTXpCLE1BQU4sSUFBZ0IsQ0FBbkIsRUFBcUI7QUFDakI2QywwQkFBTU8sWUFBTixHQUFxQnpKLElBQXJCLENBQTBCLGtCQUFVO0FBQ2hDOEgsZ0NBQVEsQ0FBQzZCLE9BQU9TLGVBQVAsR0FBeUI0QyxnQkFBMUIsQ0FBUjtBQUNBekIsK0JBQU8wQixpQkFBUCxDQUF5Qm5GLEtBQXpCLEVBQWdDOUgsSUFBaEMsQ0FBcUMsa0JBQVU7QUFDM0MsbUNBQUs0TSxLQUFMLENBQVd0RixJQUFYO0FBQ0gseUJBRkQ7QUFHSCxxQkFMRDtBQU1ILGlCQVBELE1BT0s7QUFDRGlFLDJCQUFPMEIsaUJBQVAsQ0FBeUJuRixLQUF6QixFQUFnQzlILElBQWhDLENBQXFDLGtCQUFVO0FBQzNDLCtCQUFLNE0sS0FBTCxDQUFXdEYsSUFBWDtBQUNILHFCQUZEO0FBR0g7QUFDSixhQWJELEVBYUdWLFNBYkg7O0FBZUEsZ0JBQUlzRyxjQUFjLFVBQVd0RyxTQUE3QjtBQUNBLG1CQUFLZ0csS0FBTCxDQUFXakcsUUFBWCxDQUFvQnVHLFdBQXBCO0FBQ0gsU0FuQkQ7QUFvQkgsSzs7O0VBdENpQzNPLFlBQVltSCxVOztrQkF5Q25DZix1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRGY7O0lBQVlwRyxXOztBQUNaOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU11SCx5Qjs7O0FBQ0YsdUNBQWFpRCxTQUFiLEVBQXdCO0FBQUE7O0FBQUEsZ0RBQ3BCLGlDQUFNQSxTQUFOLENBRG9CO0FBRXZCOzt3Q0FDREMsTSxxQkFBUztBQUNMLFlBQUltRSxVQUFVLEtBQUtMLGtCQUFMLENBQXdCLFNBQXhCLENBQWQ7QUFDQUssZ0JBQVFDLE1BQVI7QUFDQSxZQUFJQyxTQUFTLEtBQUtQLGtCQUFMLENBQXdCLGdCQUF4QixDQUFiO0FBQ0FPLGVBQU9yTSxNQUFQO0FBQ0EsWUFBSXNNLGNBQWMsS0FBS1Isa0JBQUwsQ0FBd0IseUJBQXhCLENBQWxCO0FBQ0FRLG9CQUFZQyxtQkFBWjtBQUNILEs7Ozs7NEJBQ3NCO0FBQ25CLG1CQUFPaFAsWUFBWUMsV0FBWixDQUF3QitHLE1BQXhCLENBQStCQyxnQkFBL0IsQ0FBZ0RDLFNBQXZEO0FBQ0g7Ozs7RUFkbUNsSCxZQUFZbUgsVTs7a0JBaUJyQ0kseUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJmOztJQUFZdkgsVzs7QUFDWjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU1tRyx1Qjs7O0FBQ0YscUNBQWFxRSxTQUFiLEVBQXdCO0FBQUE7O0FBQUEsZ0RBQ3BCLGlDQUFNQSxTQUFOLEVBQWlCdEYseUNBQWpCLENBRG9CO0FBRXZCOzs0QkFDTU8sTyxzQkFBUztBQUNaLGVBQU8seUJBQVA7QUFDSCxLOzs7OzRCQUNzQjtBQUNuQixtQkFBT3pGLFlBQVlDLFdBQVosQ0FBd0IrRyxNQUF4QixDQUErQkMsZ0JBQS9CLENBQWdEQyxTQUF2RDtBQUNIOzs7O0VBVGlDbEgsWUFBWW9PLGtCOztrQkFZbkNqSSx1Qjs7Ozs7Ozs7Ozs7QUNqQmYseUM7Ozs7Ozs7Ozs7O0FDQUEseUQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJVSUV4dGVuc2lvblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJVSUV4dGVuc2lvblwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWRhY3Rpb25BZGRvblwiXSA9IGZhY3RvcnkocmVxdWlyZShcIlVJRXh0ZW5zaW9uXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWRhY3Rpb25BZGRvblwiXSA9IGZhY3Rvcnkocm9vdFtcIlVJRXh0ZW5zaW9uXCJdKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfVUlFeHRlbnNpb25fXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdWl4LWFkZG9ucy9yZWRhY3Rpb24vaW5kZXguanNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qISBhcnQtdGVtcGxhdGVAcnVudGltZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9hdWkvYXJ0LXRlbXBsYXRlICovXG5cbnZhciBnbG9iYWxUaGlzID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB7fTtcblxudmFyIHJ1bnRpbWUgPSBPYmplY3QuY3JlYXRlKGdsb2JhbFRoaXMpO1xudmFyIEVTQ0FQRV9SRUcgPSAvW1wiJic8Pl0vO1xuXG4vKipcbiAqIOe8lueggeaooeadv+i+k+WHuueahOWGheWuuVxuICogQHBhcmFtICB7YW55fSAgICAgICAgY29udGVudFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5ydW50aW1lLiRlc2NhcGUgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgIHJldHVybiB4bWxFc2NhcGUodG9TdHJpbmcoY29udGVudCkpO1xufTtcblxuLyoqXG4gKiDov63ku6PlmajvvIzmlK/mjIHmlbDnu4TkuI7lr7nosaFcbiAqIEBwYXJhbSB7YXJyYXl8T2JqZWN0fSBkYXRhXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSAgICAgY2FsbGJhY2tcbiAqL1xucnVudGltZS4kZWFjaCA9IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkYXRhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhW2ldLCBpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIF9pIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbX2ldLCBfaSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyDlsIbnm67moIfovazmiJDlrZfnrKZcbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvU3RyaW5nKHZhbHVlLmNhbGwodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG4vLyDnvJbnoIEgSFRNTCDlhoXlrrlcbmZ1bmN0aW9uIHhtbEVzY2FwZShjb250ZW50KSB7XG4gICAgdmFyIGh0bWwgPSAnJyArIGNvbnRlbnQ7XG4gICAgdmFyIHJlZ2V4UmVzdWx0ID0gRVNDQVBFX1JFRy5leGVjKGh0bWwpO1xuICAgIGlmICghcmVnZXhSZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gdm9pZCAwLFxuICAgICAgICBsYXN0SW5kZXggPSB2b2lkIDAsXG4gICAgICAgIGNoYXIgPSB2b2lkIDA7XG4gICAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN3aXRjaCAoaHRtbC5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiMzNDsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjMzg7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzM5Oyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDYwOlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiM2MDsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2MjpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjNjI7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFzdEluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RJbmRleCA9IGkgKyAxO1xuICAgICAgICByZXN1bHQgKz0gY2hhcjtcbiAgICB9XG5cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tcGlsZS9ydW50aW1lJyk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICByZWRhY3RBbm5vdEFwcGx5ZWQgOiBcImFwcGx5LXJlZGFjdGlvblwiLFxuICAgIHJlZGFjdEFubm90QWxsQXBwbHllZCA6IFwiYXBwbHktYWxsLXJlZGFjdGlvblwiLFxuICAgIGFubm90YXRpb25BZGQ6ICdhbm5vdGF0aW9uLWFkZCcsXG4gICAgYW5ub3RhdGlvblJlbW92ZWQgOiBcImFubm90YXRpb24tcmVtb3ZlZFwiLFxuICAgIGFkZFJlZGFjdGlvbkFyZWEgOiBcImFkZC1yZWRhY3Rpb24tYXJlYVwiXG59IiwiXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gbnVsbDtcbiAgICAiLCJpbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCIuL0V2ZW50c1wiO1xuY29uc3QgUERGVmlld0N0cmwgPSBVSUV4dGVuc2lvbi5QREZWaWV3Q3RybDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZVJlZGFjdGlvblN0YXRlSGFuZGxlciBleHRlbmRzIFBERlZpZXdDdHJsLklTdGF0ZUhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yIChwZGZWaWV3ZXIpIHtcbiAgICAgICAgc3VwZXIocGRmVmlld2VyLCBcInNxdWFyZVwiKTtcbiAgICAgICAgdGhpcy5wZGZWaWV3ZXIgPSBwZGZWaWV3ZXI7XG4gICAgICAgIHRoaXMuY3Vyc29yU3R5bGU9XCJmdl9fY3Vyc29yLWNyb3NzXCI7XG4gICAgICAgIHRoaXMuZGVzdHJveUhvb2tzID0gW107XG4gICAgfVxuICAgIHN0YXRpYyBnZXRTdGF0ZU5hbWUgKCkge1xuICAgICAgICByZXR1cm4gXCJjcmVhdGUtcmVkYWN0aW9uLXN0YXRlXCI7XG4gICAgfVxuICAgIGdldERldmljZVBhZ2VQb2ludChlbGVtLGV2ZW50KXtcbiAgICAgICAgbGV0IHBhZ2VSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgKCk7XG4gICAgICAgIGxldCBzcmNFdmVudCA9IGV2ZW50LnNyY0V2ZW50O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IHNyY0V2ZW50LmNsaWVudFggLSBwYWdlUmVjdC5sZWZ0IC0gZXZlbnQuZGVsdGFYLFxuICAgICAgICAgIHk6IHNyY0V2ZW50LmNsaWVudFkgLSBwYWdlUmVjdC50b3AgLSBldmVudC5kZWx0YVksXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICBjb3JyZWN0UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZVJlbmRlci5nZXRQREZQYWdlKCkudGhlbihwYWdlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5wYWdlUmVuZGVyLmdldFNjYWxlKCk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHBhZ2UuZ2V0UHhXaWR0aCgpICogc2NhbGU7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBwYWdlLmdldFB4SGVpZ2h0KCkgKiBzY2FsZTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbih3aWR0aCwgcG9zaXRpb24ueCkpO1xuICAgICAgICAgICAgY29uc3QgeSA9IE1hdGgubWF4KDAsIE1hdGgubWluKGhlaWdodCwgcG9zaXRpb24ueSkpO1xuICAgICAgICAgICAgcmV0dXJuIHt4LCB5fTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXJ0KHBhZ2VSZW5kZXIsIHtsZWZ0LCB0b3B9KSB7XG4gICAgICAgIGlmKHRoaXMuc2hhcGVDb250cm9sKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2hhcGVDb250cm9sID0gbmV3IFBERlZpZXdDdHJsLlNoYXBlQ29udHJvbCh7XG4gICAgICAgICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZW5hYmxlRGlhZ29uYWxseTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zaGFwZUNvbnRyb2wuYWN0aXZlKHBhZ2VSZW5kZXIuJGhhbmRsZXIsIHBhZ2VSZW5kZXIuJGhhbmRsZXIsIHtcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWRqdXN0KHNoYXBlQ29udHJvbCwge3g6IHN4LCB5OiBzeX0sIHsgeDogZXgsIHk6IGV5IH0pIHtcbiAgICAgICAgbGV0IGxlZnQsIHRvcDtcbiAgICAgICAgbGV0IHdpZHRoID0gTWF0aC5hYnMoc3ggLSBleCk7XG4gICAgICAgIGxldCBoZWlnaHQgPSBNYXRoLmFicyhzeSAtIGV5KTtcblxuICAgICAgICBsZWZ0ID0gTWF0aC5taW4oc3gsIGV4KTtcbiAgICAgICAgdG9wID0gTWF0aC5taW4oc3ksIGV5KTtcbiAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgMSk7XG4gICAgICAgIGhlaWdodCA9IE1hdGgubWF4KGhlaWdodCwgMSk7XG4gICAgICAgIGxldCBzaGFwZSA9IHtcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgIH07XG4gICAgICAgIGxldCBib3VuZGFyeSA9IHtcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICAgIHJpZ2h0OiBsZWZ0ICsgd2lkdGgsXG4gICAgICAgICAgICBib3R0b206IHRvcCArIGhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHNoYXBlQ29udHJvbC5fYXBwbHlBbm5vdEJvdW5kYXJ5KHNoYXBlKTtcbiAgICAgICAgc2hhcGVDb250cm9sLnNoYXBlLmJvdW5kYXJ5ID0gYm91bmRhcnk7XG4gICAgICAgIHNoYXBlQ29udHJvbC5zaGFwZS5zaGFwZSA9IHNoYXBlO1xuICAgICAgICBzaGFwZUNvbnRyb2wuX3VwZGF0ZVByZXZpZXdlcigpO1xuICAgIH1cbiAgICBwYWdlSGFuZGxlcihwYWdlUmVuZGVyKSB7XG4gICAgICAgIHRoaXMucGFnZVJlbmRlciA9IHBhZ2VSZW5kZXI7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBwYWdlUmVuZGVyLiRoYW5kbGVyLmdldCgwKTtcbiAgICAgICAgcGFnZVJlbmRlci4kaGFuZGxlci5hZGRDbGFzcyh0aGlzLmN1cnNvclN0eWxlKTtcbiAgICAgICAgY29uc3QgaGFtbWVyID0gdGhpcy5oYW1tZXIgPSBuZXcgUERGVmlld0N0cmwuRGVwcy5IYW1tZXIuTWFuYWdlcihoYW5kbGVyKTtcbiAgICAgICAgbGV0ICRoYW5kbGVyID0gcGFnZVJlbmRlci4kaGFuZGxlcjtcbiAgICAgICAgaGFtbWVyLmFkZChcbiAgICAgICAgICAgIG5ldyBIYW1tZXIuUGFuKHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICBoYW1tZXIub24oJ3BhbnN0YXJ0JywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0UG9pbnQgPSB0aGlzLmdldERldmljZVBhZ2VQb2ludChoYW5kbGVyLGUpO1xuICAgICAgICAgICAgcGFnZVJlbmRlci5nZXRQREZQYWdlKCkudGhlbihwYWdlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbbGVmdCwgdG9wXSA9IHBhZ2UucmV2ZXJzZURldmljZVBvaW50KFt0aGlzLnN0YXJ0UG9pbnQueCwgdGhpcy5zdGFydFBvaW50LnldLCB0aGlzLnBhZ2VSZW5kZXIuc2NhbGUpXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydChwYWdlUmVuZGVyLCB7bGVmdCwgdG9wfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGhhbW1lci5vbigncGFubW92ZScsIGUgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb3JyZWN0UG9zaXRpb24oe1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuc3RhcnRQb2ludC54ICsgZS5kZWx0YVgsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5zdGFydFBvaW50LnkgKyBlLmRlbHRhWVxuICAgICAgICAgICAgfSkudGhlbihwb2ludCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9pbnQgPSBwb2ludDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZGp1c3QodGhpcy5zaGFwZUNvbnRyb2wsIHRoaXMuc3RhcnRQb2ludCwgdGhpcy5jdXJyZW50UG9pbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBoYW1tZXIub24oJ3BhbmVuZCcsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb3JyZWN0UG9zaXRpb24oe1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuc3RhcnRQb2ludC54ICsgZS5kZWx0YVgsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5zdGFydFBvaW50LnkgKyBlLmRlbHRhWVxuICAgICAgICAgICAgfSkudGhlbihwb2ludCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9pbnQgPSBwb2ludDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkanVzdCh0aGlzLnNoYXBlQ29udHJvbCwgdGhpcy5zdGFydFBvaW50LCB0aGlzLmN1cnJlbnRQb2ludCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wZGZWaWV3ZXIuZXZlbnRFbWl0dGVyLmVtaXQoRXZlbnRzLmFkZFJlZGFjdGlvbkFyZWEgLCBwYWdlUmVuZGVyLCB0aGlzLnNoYXBlQ29udHJvbC5zaGFwZS5ib3VuZGFyeSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGFwZUNvbnRyb2wuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hhcGVDb250cm9sID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaGFtbWVyLm9uKCdwYW5jYW5jZWwnLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hhcGVDb250cm9sLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuc2hhcGVDb250cm9sID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveVBhZ2VIYW5kbGVyKCkge1xuICAgICAgICB0aGlzLmhhbW1lciAmJiB0aGlzLmhhbW1lci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMucGFnZVJlbmRlci4kaGFuZGxlci5yZW1vdmVDbGFzcyh0aGlzLmN1cnNvclN0eWxlKTtcbiAgICAgICAgdGhpcy5kZXN0cm95SG9va3MuZm9yRWFjaChob29rID0+IGhvb2soKSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIFVJRXh0ZW5zaW9uIGZyb20gJ1VJRXh0ZW5zaW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlUmVkYWN0aW9uVGV4dFN0YXRlSGFuZGxlciBleHRlbmRzIFVJRXh0ZW5zaW9uLlRleHRNYXJrdXBTdGF0ZUhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yIChwZGZWaWV3ZXIpIHtcbiAgICAgICAgc3VwZXIocGRmVmlld2VyKTtcbiAgICAgICAgdGhpcy5jdXJzb3JTdHlsZT1cImZ2X19jdXJzb3ItaGlnaGxpZ2h0XCI7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRTdGF0ZU5hbWUgKCkge1xuICAgICAgICByZXR1cm4gXCJjcmVhdGUtcmVkYWN0aW9uLXRleHQtc3RhdGVcIjtcbiAgICB9XG4gICAgYWRkQW5ub3QocGFnZSxyZWN0QXJyYXkpe1xuICAgICAgICByZXR1cm4gcGFnZS5tYXJrUmVkYWN0QW5ub3QocmVjdEFycmF5KTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgVUlFeHRlbnNpb24gZnJvbSAnVUlFeHRlbnNpb24nO1xuaW1wb3J0IFBvcHVwQ29tcG9uZW50IGZyb20gJy4vcG9wdXAvJztcbi8vIGltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xuaW1wb3J0IFJlZGFjdGlvbkNvbnRyb2xsZXIgZnJvbSBcIi4vcmVkYWN0aW9uQ29udHJvbGxlclwiO1xuaW1wb3J0IFJlZGFjdGlvblRleHRDb250cm9sbGVyIGZyb20gXCIuL3JlZGFjdGlvblRleHRDb250cm9sbGVyXCI7XG5pbXBvcnQgUmVkYWN0aW9uUGFnZUNvbnRyb2xsZXIgZnJvbSBcIi4vcmVkYWN0aW9uUGFnZUNvbnRyb2xsZXJcIjtcbmltcG9ydCBSZWRhY3Rpb25BcHBseUNvbnRyb2xsZXIgZnJvbSBcIi4vcmVkYWN0aW9uQXBwbHlDb250cm9sbGVyXCI7XG5pbXBvcnQgUmVkYWN0aW9uU2VhcmNoQ29udHJvbGxlciBmcm9tIFwiLi9yZWRhY3Rpb25TZWFyY2hDb250cm9sbGVyXCI7XG5pbXBvcnQgJy4vc3R5bGUvcmVkYWN0LnNjc3MnO1xuaW1wb3J0IHJlbmRlckRyb3Bkb3duVGVtcGxhdGUgZnJvbSAnLi9yZWRhY3Rpb24tZHJvcGRvd24uYXJ0JztcbmltcG9ydCB0cG1Mb2FkZXIgZnJvbSAnLi9hZGRvbi5pbmZvLmpzb24nO1xuLy8gaW1wb3J0IGNvbXBpbGVUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLmFydCc7XG4vLyBpbXBvcnQgcmVtb3ZlVGVtcGxhdGUgZnJvbSAnLi9yZW1vdmUtdGVtcGxhdGUuYXJ0JztcblxuLy8gY29uc3QgdGVtcGxhdGUgPSBjb21waWxlVGVtcGxhdGUoKTtcbi8vIGNvbnN0IHJlbW92ZUFydCA9IHJlbW92ZVRlbXBsYXRlKCk7XG5cbmNvbnN0IGRyb3Bkb3duVGVtcGxhdGUgPSByZW5kZXJEcm9wZG93blRlbXBsYXRlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZGFjdGlvbkFkZG9uIGV4dGVuZHMgVUlFeHRlbnNpb24uVUlYQWRkb24ge1xuICAgIHN0YXRpYyBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ3JlZGFjdGlvbic7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRMb2FkZXIoKSB7XG4gICAgICAgIHJldHVybiB0cG1Mb2FkZXI7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IFVJRXh0ZW5zaW9uLm1vZHVsYXIubW9kdWxlKCdyZWRhY3Rpb24nLCBbXSk7XG4gICAgICAgIGNvbnN0IHJlZ2lzdHJ5ID0gbW9kdWxlLmdldFJlZ2lzdHJ5KCk7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICByZWdpc3RyeS5yZWdpc3RlckNvbnRyb2xsZXIoUmVkYWN0aW9uQ29udHJvbGxlcik7XG4gICAgICAgIHJlZ2lzdHJ5LnJlZ2lzdGVyQ29udHJvbGxlcihSZWRhY3Rpb25UZXh0Q29udHJvbGxlcik7XG4gICAgICAgIHJlZ2lzdHJ5LnJlZ2lzdGVyQ29udHJvbGxlcihSZWRhY3Rpb25QYWdlQ29udHJvbGxlcik7XG4gICAgICAgIHJlZ2lzdHJ5LnJlZ2lzdGVyQ29tcG9uZW50KFBvcHVwQ29tcG9uZW50KTtcbiAgICB9XG4gICAgZnJhZ21lbnRzKCkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgIHRhcmdldDogJ3RlbXBsYXRlLWNvbnRhaW5lcicsXG4gICAgICAgICAgICBhY3Rpb246IFVJRXh0ZW5zaW9uLlVJQ29uc3RzLkZSQUdNRU5UX0FDVElPTi5BUFBFTkQsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgPHJlZGFjdGlvbjpyZWRhY3Rpb24tcGFnZS1wb3B1cCBuYW1lPVwicmVkYWN0aW9uLXBhZ2UtcG9wdXBcIiBhcHBlbmQtdG89XCJib2R5XCIgY2xhc3M9XCJjZW50ZXJcIiBtb2RhbCBiYWNrZHJvcD5cbiAgICAgICAgICAgICAgICA8bGF5ZXItaGVhZGVyIHRpdGxlPVwicmVkYWN0aW9uOmJ1dHRvbnMucmVkYWN0X3BhZ2VcIiBAZHJhZ2dhYmxlPVwie3R5cGU6J3BhcmVudCd9XCI+PC9sYXllci1oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGxheWVyLXZpZXc+XG4gICAgICAgICAgICAgICAgPC9sYXllci12aWV3PlxuICAgICAgICAgICAgPC9yZWRhY3Rpb246cmVkYWN0aW9uLXBhZ2UtcG9wdXA+XG4gICAgICAgICAgICBgXG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGFyZ2V0OiAncHJvdGVjdC10b29sYmFyLWdyb3VwLWxpc3QnLFxuICAgICAgICAgICAgYWN0aW9uOiBVSUV4dGVuc2lvbi5VSUNvbnN0cy5GUkFHTUVOVF9BQ1RJT04uQVBQRU5ELFxuICAgICAgICAgICAgdGVtcGxhdGU6IGA8cmVkYWN0aW9uOmdyb3VwIG5hbWU9XCJyZWRhY3Rpb25cIj48L3JlZGFjdGlvbjpncm91cD5gLFxuICAgICAgICB9LHtcbiAgICAgICAgICAgIHRhcmdldDogJ3JlZGFjdGlvbicsXG4gICAgICAgICAgICBhY3Rpb246IFVJRXh0ZW5zaW9uLlVJQ29uc3RzLkZSQUdNRU5UX0FDVElPTi5BUFBFTkQsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogZHJvcGRvd25UZW1wbGF0ZSxcbiAgICAgICAgICAgIGNvbmZpZzpbe1xuICAgICAgICAgICAgICAgIHRhcmdldDogJ2NyZWF0ZS1yZWRhY3Rpb24tY29udHJvbGxlcnMnLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjbGFzcyBleHRlbmRzIFVJRXh0ZW5zaW9uLkNvbnRyb2xsZXJ7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpYyBnZXQgcGVybWlzc2lvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFVJRXh0ZW5zaW9uLlBERlZpZXdDdHJsLkNvbnN0cy5QREZEb2NQZXJtaXNzaW9uLkFubm90Rm9ybTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGFyZ2V0OiAncmVkYWN0aW9uJyxcbiAgICAgICAgICAgIGFjdGlvbjogVUlFeHRlbnNpb24uVUlDb25zdHMuRlJBR01FTlRfQUNUSU9OLkFQUEVORCxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgPHhidXR0b24gbmFtZT1cInJlZGFjdGlvbi1hcHBseVwiIGNsYXNzPVwiZnZfX3VpLXRvb2xiYXItc2hvdy10ZXh0LWJ1dHRvblwiICBpY29uLWNsYXNzPVwiZnZfX2ljb24tdG9vbGJhci1hcHBseS1yZWRhY3Rpb25cIiAgQHRvb2x0aXA+cmVkYWN0aW9uOmJ1dHRvbnMuYXBwbHk8L3hidXR0b24+YCxcbiAgICAgICAgICAgIGNvbmZpZzogW3tcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdyZWRhY3Rpb24tYXBwbHknLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdyZWRhY3Rpb246dG9vbHRpcHMuYXBwbHknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogUmVkYWN0aW9uQXBwbHlDb250cm9sbGVyXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LHtcbiAgICAgICAgICAgIHRhcmdldDogJ3JlZGFjdGlvbicsXG4gICAgICAgICAgICBhY3Rpb246IFVJRXh0ZW5zaW9uLlVJQ29uc3RzLkZSQUdNRU5UX0FDVElPTi5BUFBFTkQsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYDx4YnV0dG9uIG5hbWU9XCJyZWRhY3Rpb24tc2VhcmNoXCIgY2xhc3M9XCJmdl9fdWktdG9vbGJhci1zaG93LXRleHQtYnV0dG9uXCIgaWNvbi1jbGFzcz1cImZ2X19pY29uLXRvb2xiYXItc2VhcmNoLXJlZGFjdGlvblwiIEB0b29sdGlwPnJlZGFjdGlvbjpidXR0b25zLnJlZGFjdF9zZWFyY2g8L3hidXR0b24+YCxcbiAgICAgICAgICAgIGNvbmZpZzogW3tcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdyZWRhY3Rpb24tc2VhcmNoJyxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAncmVkYWN0aW9uOmJ1dHRvbnMucmVkYWN0X3NlYXJjaCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBSZWRhY3Rpb25TZWFyY2hDb250cm9sbGVyXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgXTtcbiAgICB9XG59OyIsImltcG9ydCAqIGFzIFVJRXh0ZW5zaW9uIGZyb20gJ1VJRXh0ZW5zaW9uJztcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcbmltcG9ydCBwb3B1cEFydCBmcm9tIFwiLi9wb3B1cC5hcnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBDb21wb25lbnQgZXh0ZW5kcyBVSUV4dGVuc2lvbi53aWRnZXRzLkxheWVyQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdyZWRhY3Rpb24tcGFnZS1wb3B1cCc7XG4gICAgfVxuICAgIGJpbmRFdmVudChzZWxlY3RvciwgZXZlbnQsIGNhbGxiYWNrKXtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICBpZihlbGVtZW50cy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lIb29rcy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xuICAgICAgICB0aGlzLmRlc3Ryb3lIb29rcyA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZnZfX3JlZGFjdGlvbi1wYWdlLXBvcHVwJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyZWQocGFnZUNvdW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X191aS1sYXllci1wYW5lbFwiKS5pbm5lckhUTUwgPSBwb3B1cEFydChwYWdlQ291bnQpO1xuICAgICAgICB0aGlzLmxvY2FsaXplKCk7XG4gICAgICAgIHRoaXMubW91bnRFdmVudCgpO1xuICAgIH1cblxuXG4gICAgbW91bnRFdmVudCgpe1xuICAgICAgICB0aGlzLmJpbmRFdmVudChcIi5yZWRhY3Rpb24tcGFnZS1yYWRpb1wiLCBcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYoZS50YXJnZXQuY2hlY2tlZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZihlLnRhcmdldC52YWx1ZSA9PSBcIjFcIil7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19yZWRhY3Rpb24tcGFnZS1yYW5nZVwiKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX3JlZGFjdGlvbi1wYWdlLXJhbmdlXCIpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYmluZEV2ZW50KFwiLmZ2X19yZWRhY3Rpb24tY2FuY2VsXCIsIFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9KVxuICAgICAgXG4gICAgICAgIHRoaXMuYmluZEV2ZW50KFwiLmZ2X19yZWRhY3Rpb24tYnRuXCIsIFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0KCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnQoXCIuZnZfX3JlZGFjdGlvbi1wYWdlLXJhbmdlXCIsIFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRTdWJtaXRDYWxsYmFjayhzdWJtaXRDYWxsYmFjaywgZG9jUGFnZUNvdW50KXtcbiAgICAgICAgdGhpcy5zdWJtaXRDYWxsYmFjayA9IHN1Ym1pdENhbGxiYWNrO1xuICAgICAgICB0aGlzLmRvY1BhZ2VDb3VudCA9IGRvY1BhZ2VDb3VudDtcbiAgICB9XG4gICAgc3VibWl0KCl7XG4gICAgICAgIGxldCBkb2NQYWdlID0gdGhpcy5kb2NQYWdlQ291bnQ7XG4gICAgICAgIGxldCBpc0N1cnJlbnRQYWdlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlZGFjdGlvbi1wYWdlLXJhZGlvXCIpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZihpdGVtLmNoZWNrZWQgJiYgaXRlbS52YWx1ZSA9PSBcIjFcIil7XG4gICAgICAgICAgICAgICAgaXNDdXJyZW50UGFnZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwYWdlcyA9IFtdO1xuICAgICAgICBpZihpc0N1cnJlbnRQYWdlKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdENhbGxiYWNrKHBhZ2VzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmFuZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fcmVkYWN0aW9uLXBhZ2UtcmFuZ2VcIikudmFsdWU7XG4gICAgICAgIGxldCByZWdleHAgPSBuZXcgUmVnRXhwKC9bXlxcZFxcLSxdLyk7XG4gICAgICAgIGlmKHJlZ2V4cC50ZXN0KHJhbmdlKSl7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByYW5nZXMgPSByYW5nZS5zcGxpdChcIixcIik7XG4gICAgICAgIGZvcihsZXQgaSA9MDsgaTxyYW5nZXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgcGFnZSA9IHJhbmdlc1tpXTtcbiAgICAgICAgICAgIGlmKHBhZ2UuaW5kZXhPZihcIi1cIikgPiAtMSl7XG4gICAgICAgICAgICAgICAgbGV0IHBhZ2VSYW5nZSA9IHBhZ2Uuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgICAgICBpZihwYWdlUmFuZ2UubGVuZ3RoID4gMil7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgaWYocGFnZVJhbmdlWzBdIDwgMSB8fCBwYWdlUmFuZ2VbMF0gPiBkb2NQYWdlIHx8IHBhZ2VSYW5nZVsxXSA8IDEgfHwgcGFnZVJhbmdlWzFdID4gZG9jUGFnZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW4gPSBNYXRoLm1pbihwYWdlUmFuZ2VbMF0sIHBhZ2VSYW5nZVsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4ID0gTWF0aC5tYXgocGFnZVJhbmdlWzBdLCBwYWdlUmFuZ2VbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID1taW47IGk8PW1heDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwYWdlcy5pbmRleE9mKGkpID09PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VzLnB1c2goaSAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKHBhZ2UgPCAxIHx8IHBhZ2UgPiBkb2NQYWdlKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBpZihwYWdlcy5pbmRleE9mKHBhZ2VzKSA9PT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZXMucHVzaChwYWdlIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdWJtaXRDYWxsYmFjayhwYWdlcyk7XG4gICAgfVxuXG4gICAgcmVzZXQoKXtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVkYWN0aW9uLXBhZ2UtcmFkaW9cIikuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19yZWRhY3Rpb24tcGFnZS1yYW5nZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgfVxuXG4gICAgc2hvd0Vycm9yKGVycm9yKXtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX3JlZGFjdGlvbi1wYWdlLXJhbmdlXCIpLmNsYXNzTGlzdC5hZGQoXCJmdl9fcmVkYWN0aW9uLWVycm9yXCIpO1xuICAgIH1cbiAgICBoaWRlRXJyb3IoKXtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX3JlZGFjdGlvbi1wYWdlLXJhbmdlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmdl9fcmVkYWN0aW9uLWVycm9yXCIpO1xuICAgIH1cblxuICAgIGRlc3Ryb3kgKCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3lIb29rcy5mb3JFYWNoKGhvb2sgPT4gaG9vaygpKTtcbiAgICB9XG59XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIjxkaXYgY2xhc3M9XCJmdl9fcmVkYWN0aW9uLWNvbnRhaW5lclwiPlxuICAgIDxsYWJlbD5cbiAgICAgICAgPGlucHV0IG5hbWU9XCJyZWRhY3Rpb24tcGFnZS10eXBlXCIgY2xhc3M9XCJyZWRhY3Rpb24tcGFnZS1yYWRpb1wiIHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQgdmFsdWU9XCIxXCIgLz48c3Bhbj5NYXJrIGN1cnJlbnQgcGFnZSBmb3IgcmVkYWN0aW9uPC9zcGFuPlxuICAgIDwvbGFiZWw+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJmdl9fcmVkYWN0aW9uLWNvbnRhaW5lclwiPlxuICAgIDxsYWJlbD5cbiAgICAgICAgPGlucHV0IG5hbWU9XCJyZWRhY3Rpb24tcGFnZS10eXBlXCIgY2xhc3M9XCJyZWRhY3Rpb24tcGFnZS1yYWRpb1wiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMlwiIC8+PHNwYW4+TWFyayBzcGVjaWZpYyBwYWdlIHJhbmdlIGZvciByZWRhY3Rpb248L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmdl9fcmVkYWN0aW9uLXJhbmdlXCI+UGFnZSByYW5nZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmdl9fcmVkYWN0aW9uLXBhZ2UtcmFuZ2VcIiBkaXNhYmxlZCBwbGFjZWhvbGRlcj1cInt7JGRhdGF9fVwiLz48L2Rpdj5cbiAgICA8L2xhYmVsPlxuPC9kaXY+IFxuPGRpdiBjbGFzcz1cImZ2X19yZWRhY3Rpb24tY29udGFpbmVyXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0XCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmdl9fcmVkYWN0aW9uLWJ0blwiPk9LPC9idXR0b24+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmdl9fcmVkYWN0aW9uLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuPC9kaXY+IiwiPGRyb3Bkb3duIEB0b29sdGlwIG5hbWU9XCJjcmVhdGUtcmVkYWN0aW9uLWNvbnRyb2xsZXJzXCIgdG9vbHRpcC10aXRsZT1cInJlZGFjdGlvbjp0b29sdGlwcy5yZWRhY3Rpb25cIiBpY29uLWNsYXNzPVwiZnZfX2ljb24tdG9vbGJhci1yZWRhY3Rpb25cIiBwb3B1cC1jbGFzcz1cImZ2X191aS1yZWRhY3Rpb24tcmVkYWN0aW9uLWxpc3RcIiBjbGFzcz1cImZ2X191aS1yZWRhY3Rpb24tZHJvcGRvd25cIiB0ZXh0PVwicmVkYWN0aW9uOmJ1dHRvbnMudGl0bGVcIj5cbiAgICA8ZHJvcGRvd24tYnV0dG9uIGNsYXNzPVwiZnZfX3VpLXJlZGFjdGlvbi1pdGVtXCIgbmFtZT1cImNyZWF0ZS10ZXh0LXJlZGFjdGlvblwiIEBjb250cm9sbGVyPVwicmVkYWN0aW9uOlJlZGFjdGlvblRleHRDb250cm9sbGVyXCIgaWNvbi1jbGFzcz1cImZ2X19pY29uLXRvb2xiYXItdGV4dC1yZWRhY3Rpb25cIj5cbiAgICAgICAgcmVkYWN0aW9uOmJ1dHRvbnMucmVkYWN0X3RleHRcbiAgICA8L2Ryb3Bkb3duLWJ1dHRvbj5cbiAgICA8ZHJvcGRvd24tYnV0dG9uIGNsYXNzPVwiZnZfX3VpLXJlZGFjdGlvbi1pdGVtXCIgbmFtZT1cImNyZWF0ZS1hcmVhLXJlZGFjdGlvblwiIEBjb250cm9sbGVyPVwicmVkYWN0aW9uOlJlZGFjdGlvbkNvbnRyb2xsZXJcIiBpY29uLWNsYXNzPVwiZnZfX2ljb24tdG9vbGJhci1hcmVhLXJlZGFjdGlvblwiPlxuICAgICAgICByZWRhY3Rpb246YnV0dG9ucy5yZWRhY3RfYXJlYVxuICAgIDwvZHJvcGRvd24tYnV0dG9uPlxuICAgIDxkcm9wZG93bi1idXR0b24gY2xhc3M9XCJmdl9fdWktcmVkYWN0aW9uLWl0ZW1cIiBuYW1lPVwiY3JlYXRlLXBhZ2UtcmVkYWN0aW9uXCIgQGNvbnRyb2xsZXI9XCJyZWRhY3Rpb246UmVkYWN0aW9uUGFnZUNvbnRyb2xsZXJcIiBpY29uLWNsYXNzPVwiZnZfX2ljb24tdG9vbGJhci1wYWdlLXJlZGFjdGlvblwiPlxuICAgICAgICByZWRhY3Rpb246YnV0dG9ucy5yZWRhY3RfcGFnZVxuICAgIDwvZHJvcGRvd24tYnV0dG9uPlxuPC9kcm9wZG93bj4iLCJcbmltcG9ydCAqIGFzIFVJRXh0ZW5zaW9uIGZyb20gJ1VJRXh0ZW5zaW9uJztcbmltcG9ydCBFdmVudHMgZnJvbSBcIi4vRXZlbnRzXCI7XG5pbXBvcnQgQ3JlYXRlUmVkYWN0aW9uVGV4dFN0YXRlSGFuZGxlciBmcm9tICcuL2NyZWF0ZVJlZGFjdGlvblRleHRTdGF0ZUhhbmRsZXInO1xuY29uc3Qge1xuICAgIEV2ZW50czogVmlld2VyRXZlbnRzXG59ID0gVUlFeHRlbnNpb24uUERGVmlld0N0cmw7XG5jbGFzcyBSZWRhY3Rpb25BcHBseUNvbnRyb2xsZXIgZXh0ZW5kcyBVSUV4dGVuc2lvbi5Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoY29tcG9uZW50KSB7XG4gICAgICAgIHN1cGVyKGNvbXBvbmVudCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgcGVybWlzc2lvbigpe1xuICAgICAgICByZXR1cm4gVUlFeHRlbnNpb24uUERGVmlld0N0cmwuQ29uc3RzLlBERkRvY1Blcm1pc3Npb24uTW9kaWZ5RG9jdW1lbnQ7XG4gICAgfVxuICAgIGhhbmRsZSgpIHtcbiAgICAgICAgaWYodGhpcy5jb21wb25lbnQuZGlzYWJsZWQpIHJldHVybjtcbiAgICAgICAgbGV0IHBkZlVpID0gdGhpcy5nZXRQREZVSSgpO1xuICAgICAgICBwZGZVaS5sb2NhbGl6ZXIudHJhbnNsYXRlKFwicmVkYWN0aW9uOmRpYWxvZy5hcHBseV9hbGVydFwiKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwZGZVaS5nZXRQREZWaWV3ZXIoKS50aGVuKHZpZXdlciA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRvYyA9IHZpZXdlci5nZXRDdXJyZW50UERGRG9jKCk7XG4gICAgICAgICAgICAgICAgZG9jLmFwcGx5UmVkYWN0aW9uKCkudGhlbihyZW1vdmVkQW5ub3RPYmpzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVtb3ZlZEFubm90T2JqcyAhPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZEFubm90T2Jqcy5mb3JFYWNoKGFubm90T2JqID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFnZUluZGV4ID0gYW5ub3RPYmoucGFnZUluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbm5vdElkcyAgPSBhbm5vdE9iai5yZW1vdmVkQW5ub3RzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkb2NSZW5kZXIgPSB2aWV3ZXIuZ2V0UERGRG9jUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2VSZW5kZXIgPSBkb2NSZW5kZXIucGFnZXNSZW5kZXIucGFnZVJlbmRlcnNbcGFnZUluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwYWdlUmVuZGVyLmFubm90c1JlbmRlcil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbm5vdHMgPSBwYWdlUmVuZGVyLmFubm90c1JlbmRlci5hbm5vdHM7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGluZGV4ID0gYW5ub3RzLmxlbmd0aC0xOyBpbmRleD49MDsgaW5kZXgtLSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5ub3QgPSBhbm5vdHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYW5ub3RJZHMuaW5kZXhPZihhbm5vdC5pZCkgIT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbm5vdC5pbmZvLmlzRGVsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHBkZlBhZ2UgPSB2aWV3ZXIuY3VycmVudFBERkRvYy5wYWdlQ2FjaGVbcGFnZUluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZihwZGZQYWdlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZm9yKGxldCBpbmRleCBpbiBwZGZQYWdlLmFubm90SWRNYXApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZGVsZXRlIHBkZlBhZ2UuYW5ub3RJZE1hcFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld2VyLmdldFBERkRvY1JlbmRlcigpLnBhZ2VzUmVuZGVyLnNldFJlbmRlckZsYWdzKDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdlci5nZXRQREZEb2NSZW5kZXIoKS5wYWdlc1JlbmRlci5yZW5kZXJWaXNpYmxlUGFnZXMoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld2VyLmV2ZW50RW1pdHRlci5lbWl0KEV2ZW50cy5yZWRhY3RBbm5vdEFwcGx5ZWQsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdG9kbyBlcnJvci5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICBsZXQgcGRmVWkgPSB0aGlzLmdldFBERlVJKCk7XG4gICAgICAgIHBkZlVpLmFkZFZpZXdlckV2ZW50TGlzdGVuZXIoRXZlbnRzLnJlZGFjdEFubm90QWxsQXBwbHllZCwgKHBhZ2VSZW5kZXIsIHJlY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmRpc2FibGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBkZlVpLmFkZFZpZXdlckV2ZW50TGlzdGVuZXIoRXZlbnRzLnJlZGFjdEFubm90QXBwbHllZCwgKHBhZ2VSZW5kZXIsIHJlY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWRhY3RFeGlzdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcGRmVWkuYWRkVmlld2VyRXZlbnRMaXN0ZW5lcihWaWV3ZXJFdmVudHMub3BlbkZpbGVTdWNjZXNzLCAocGRmRG9jKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5kaXNhYmxlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwZGZVaS5hZGRWaWV3ZXJFdmVudExpc3RlbmVyKFZpZXdlckV2ZW50cy5yZWRhY3RBbm5vdFJlbmRlcmVkLCAocGRmRG9jKSA9PiB7XG4gICAgICAgICAgICBwZGZVaS5nZXRQREZEb2NSZW5kZXIoKS50aGVuKGRvY1JlbmRlcj0+e1xuICAgICAgICAgICAgICAgIGxldCBwZXJtaXNzaW9uID0gZG9jUmVuZGVyLmdldFVzZXJQZXJtaXNzaW9uKCkuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICAvL2RvYy5nZXRQZXJtaXNzaW9uKCkudGhlbihwZXJtaXNzaW9uPT57XG4gICAgICAgICAgICAgICAgICAgIGlmKHBlcm1pc3Npb24mOClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIC8vfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIHBkZlVpLmFkZFZpZXdlckV2ZW50TGlzdGVuZXIoRXZlbnRzLmFubm90YXRpb25SZW1vdmVkLCAoYW5ub3RzKSA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPTA7aTxhbm5vdHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgbGV0IGFubm90ID0gYW5ub3RzW2ldO1xuICAgICAgICAgICAgICAgIGlmKGFubm90LmluZm8udHlwZSA9PSBcInJlZGFjdFwiKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JlZGFjdEV4aXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNSZWRhY3RFeGlzdCgpIHtcbiAgICAgICAgbGV0IHBkZlVpID0gdGhpcy5nZXRQREZVSSgpO1xuICAgICAgICBwZGZVaS5nZXRQREZWaWV3ZXIoKS50aGVuKHZpZXdlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmlld2VyLmN1cnJlbnRQREZEb2MuZ2V0QW5ub3RzKCk7XG4gICAgICAgIH0pLnRoZW4oYW5ub3RzID0+IHtcbiAgICAgICAgICAgIGxldCBpc1JlZGFjdEV4aXN0ID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPGFubm90cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgcGFnZUFubm90cyA9IGFubm90c1tpXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDtqPHBhZ2VBbm5vdHMubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhbm5vdCA9IHBhZ2VBbm5vdHNbal07XG4gICAgICAgICAgICAgICAgICAgIGlmKGFubm90LmluZm8udHlwZSA9PSBcInJlZGFjdFwiICYmIGFubm90LmluZm8uaXNEZWxldGVkID09PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1JlZGFjdEV4aXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGlzUmVkYWN0RXhpc3Qpe1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpc1JlZGFjdEV4aXN0KXtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbmFibGUoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmRpc2FibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWRhY3Rpb25BcHBseUNvbnRyb2xsZXI7IiwiXG5pbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCIuL0V2ZW50c1wiO1xuaW1wb3J0IENyZWF0ZVJlZGFjdGlvblN0YXRlSGFuZGxlciBmcm9tICcuL2NyZWF0ZVJlZGFjdGlvblN0YXRlSGFuZGxlcic7XG5cbmNsYXNzIFJlZGFjdGlvbkNvbnRyb2xsZXIgZXh0ZW5kcyBVSUV4dGVuc2lvbi5TdGF0ZWZ1bENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yIChjb21wb25lbnQpIHtcbiAgICAgICAgc3VwZXIoY29tcG9uZW50LCBDcmVhdGVSZWRhY3Rpb25TdGF0ZUhhbmRsZXIpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gXCJSZWRhY3Rpb25Db250cm9sbGVyXCI7XG4gICAgfVxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgbGV0IHBkZlVpID0gdGhpcy5nZXRQREZVSSgpO1xuICAgICAgICBwZGZVaS5hZGRWaWV3ZXJFdmVudExpc3RlbmVyKEV2ZW50cy5hZGRSZWRhY3Rpb25BcmVhLCAocGFnZVJlbmRlciwgcmVjdCkgPT4ge1xuICAgICAgICAgICAgcGFnZVJlbmRlci5nZXRQREZQYWdlKCkudGhlbigocGFnZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtsZWZ0SW5QVCwgdG9wSW5QVF0gPSBwYWdlLnJldmVyc2VEZXZpY2VQb2ludChbcmVjdC5sZWZ0LCByZWN0LnRvcF0sIHBhZ2VSZW5kZXIuc2NhbGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IFtyaWdodEluUFQsIGJvdHRvbUluUFRdID0gcGFnZS5yZXZlcnNlRGV2aWNlUG9pbnQoW3JlY3QucmlnaHQsIHJlY3QuYm90dG9tXSwgcGFnZVJlbmRlci5zY2FsZSk7XG4gICAgICAgICAgICAgICAgbGV0IGRldmljZVJlY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnRJblBULFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHRvcEluUFQsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiByaWdodEluUFQsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tSW5QVCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2UubWFya1JlZGFjdEFubm90KFtkZXZpY2VSZWN0XSk7XG4gICAgICAgICAgICB9KS50aGVuKChhbm5vdHMpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgYW5ub3QgPSBhbm5vdHNbMF07XG4gICAgICAgICAgICAgICAgbGV0IGFubm90UmVuZGVyID0gcGFnZVJlbmRlci5hbm5vdHNSZW5kZXIuZ2V0QW5ub3RSZW5kZXIoYW5ub3QuZ2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgYW5ub3RSZW5kZXIuY29tcG9uZW50LmFjdGl2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVkYWN0aW9uQ29udHJvbGxlcjsiLCJcbmltcG9ydCAqIGFzIFVJRXh0ZW5zaW9uIGZyb20gJ1VJRXh0ZW5zaW9uJztcbmltcG9ydCBFdmVudHMgZnJvbSBcIi4vRXZlbnRzXCI7XG5cbmNvbnN0IHtcbiAgICBFdmVudHM6IFZpZXdlckV2ZW50c1xufSA9IFVJRXh0ZW5zaW9uLlBERlZpZXdDdHJsO1xuXG5jbGFzcyBSZWRhY3Rpb25QYWdlQ29udHJvbGxlciBleHRlbmRzIFVJRXh0ZW5zaW9uLkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yIChjb21wb25lbnQpIHtcbiAgICAgICAgc3VwZXIoY29tcG9uZW50KTtcbiAgICB9XG4gICAgc3RhdGljIGdldE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIFwiUmVkYWN0aW9uUGFnZUNvbnRyb2xsZXJcIjtcbiAgICB9XG5cbiAgICBoYW5kbGUgKCl7XG4gICAgICAgIHRoaXMucG9wb3Auc2hvdygpO1xuICAgICAgICB0aGlzLnBvcG9wLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5wb3BvcCA9IHRoaXMuZ2V0Q29tcG9uZW50QnlOYW1lKFwicmVkYWN0aW9uLXBhZ2UtcG9wdXBcIik7IFxuICAgICAgICBcblxuICAgICAgICBsZXQgcGRmVWkgPSB0aGlzLmdldFBERlVJKCk7XG4gICAgICAgIHBkZlVpLmFkZFZpZXdlckV2ZW50TGlzdGVuZXIoVmlld2VyRXZlbnRzLm9wZW5GaWxlU3VjY2VzcywgKHBkZkRvYykgPT4ge1xuICAgICAgICAgICAgbGV0IHBhZ2VDb3VudCA9IHBkZkRvYy5nZXRQYWdlQ291bnQoKTtcbiAgICAgICAgICAgIHRoaXMucG9wb3Auc2V0U3VibWl0Q2FsbGJhY2soKHBhZ2VzKT0+e1xuICAgICAgICAgICAgICAgIGlmKHBhZ2VzLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgcGRmVWkuZ2V0UERGVmlld2VyKCkudGhlbih2aWV3ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZXMgPSBbdmlld2VyLmdldFBERkRvY1JlbmRlcigpLmN1cnJlbnRQYWdlSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGRmRG9jLm1ha2VSZWRhY3RCeVBhZ2VzKHBhZ2VzKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BvcC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHBkZkRvYy5tYWtlUmVkYWN0QnlQYWdlcyhwYWdlcykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3BvcC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHBhZ2VDb3VudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBwbGFjZWhvbGRlciA9IFwiTWF4OiBcIiArIChwYWdlQ291bnQpO1xuICAgICAgICAgICAgdGhpcy5wb3BvcC5yZW5kZXJlZChwbGFjZWhvbGRlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVkYWN0aW9uUGFnZUNvbnRyb2xsZXI7IiwiXG5pbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCIuL0V2ZW50c1wiO1xuXG5jbGFzcyBSZWRhY3Rpb25TZWFyY2hDb250cm9sbGVyIGV4dGVuZHMgVUlFeHRlbnNpb24uQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKGNvbXBvbmVudCkge1xuICAgICAgICBzdXBlcihjb21wb25lbnQpO1xuICAgIH1cbiAgICBoYW5kbGUoKSB7XG4gICAgICAgIGxldCBzaWRlYmFyID0gdGhpcy5nZXRDb21wb25lbnRCeU5hbWUoXCJzaWRlYmFyXCIpO1xuICAgICAgICBzaWRlYmFyLmV4cGFuZCgpO1xuICAgICAgICBsZXQgc2VhcmNoID0gdGhpcy5nZXRDb21wb25lbnRCeU5hbWUoXCJzaWRlYmFyLXNlYXJjaFwiKTtcbiAgICAgICAgc2VhcmNoLmFjdGl2ZSgpO1xuICAgICAgICBsZXQgc2VhcmNoUGFuZWwgPSB0aGlzLmdldENvbXBvbmVudEJ5TmFtZShcImZ2LXNlYXJjaC1zaWRlYmFyLXBhbmVsXCIpO1xuICAgICAgICBzZWFyY2hQYW5lbC5hY3RpdmVSZWRhY3Rpb25Nb2RlKCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgcGVybWlzc2lvbigpe1xuICAgICAgICByZXR1cm4gVUlFeHRlbnNpb24uUERGVmlld0N0cmwuQ29uc3RzLlBERkRvY1Blcm1pc3Npb24uQW5ub3RGb3JtO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVkYWN0aW9uU2VhcmNoQ29udHJvbGxlcjsiLCJcbmltcG9ydCAqIGFzIFVJRXh0ZW5zaW9uIGZyb20gJ1VJRXh0ZW5zaW9uJztcbmltcG9ydCBFdmVudHMgZnJvbSBcIi4vRXZlbnRzXCI7XG5pbXBvcnQgQ3JlYXRlUmVkYWN0aW9uVGV4dFN0YXRlSGFuZGxlciBmcm9tICcuL2NyZWF0ZVJlZGFjdGlvblRleHRTdGF0ZUhhbmRsZXInO1xuXG5jbGFzcyBSZWRhY3Rpb25UZXh0Q29udHJvbGxlciBleHRlbmRzIFVJRXh0ZW5zaW9uLlN0YXRlZnVsQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKGNvbXBvbmVudCkge1xuICAgICAgICBzdXBlcihjb21wb25lbnQsIENyZWF0ZVJlZGFjdGlvblRleHRTdGF0ZUhhbmRsZXIpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gXCJSZWRhY3Rpb25UZXh0Q29udHJvbGxlclwiO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHBlcm1pc3Npb24oKXtcbiAgICAgICAgcmV0dXJuIFVJRXh0ZW5zaW9uLlBERlZpZXdDdHJsLkNvbnN0cy5QREZEb2NQZXJtaXNzaW9uLkFubm90Rm9ybTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZGFjdGlvblRleHRDb250cm9sbGVyOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX1VJRXh0ZW5zaW9uX187Il0sInNvdXJjZVJvb3QiOiIifQ==