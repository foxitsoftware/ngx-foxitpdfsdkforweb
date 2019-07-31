(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("UIExtension"));
	else if(typeof define === 'function' && define.amd)
		define(["UIExtension"], factory);
	else if(typeof exports === 'object')
		exports["PrintUIXAddon"] = factory(require("UIExtension"));
	else
		root["PrintUIXAddon"] = factory(root["UIExtension"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./uix-addons/print/index.js");
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

/***/ "./uix-addons/print/PrintController.js":
/*!*********************************************!*\
  !*** ./uix-addons/print/PrintController.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Deps = UIExtension.PDFViewCtrl.Deps;
var $ = Deps.jQuery;

var createDeferred = function createDeferred() {
    var deferred = {};
    deferred.promise = new Promise(function (resolve, reject) {
        deferred.resolve = resolve;
        deferred.reject = reject;
    });
    return deferred;
};
var Events = UIExtension.PDFViewCtrl.Events;

var PrintController = function (_UIExtension$Controll) {
    _inherits(PrintController, _UIExtension$Controll);

    function PrintController(component) {
        _classCallCheck(this, PrintController);

        var _this = _possibleConstructorReturn(this, _UIExtension$Controll.call(this, component));

        _this.startIndex = 0;
        _this.endIndex = 0;
        _this.pageCount = 0;
        _this.fromToArray = [];
        return _this;
    }

    PrintController.prototype.postlink = function postlink() {
        var _this2 = this;

        this.addDestroyHook(this.getPDFUI().addViewerEventListener(Events.openFileSuccess, function (pdfDoc) {
            _this2.pageCount = pdfDoc.getPageCount();
        }));
    };

    PrintController.prototype.mounted = function mounted() {
        _UIExtension$Controll.prototype.mounted.call(this);
        this.$closeIcon = $(this.component.getComponentByName("print-dialog-close-icon").element);
        this.$closeBtn = $(this.component.getComponentByName("print-dialog-close-btn").element);
        this.$okBtn = $(this.component.getComponentByName("print-dialog-ok-btn").element);
        this.$range = $(this.component.getComponentByName("range-item").element);
        this.$rangeFrom = $(this.component.getComponentByName("range-from").element);
        this.$rangeTo = $(this.component.getComponentByName("range-to").element);
        this.$rangeAssign = $(this.component.getComponentByName("range-assign").element);
        this.$printComments = $(this.component.getComponentByName("print-comments").element);
        this._bindEvent();
    };

    PrintController.prototype._bindEvent = function _bindEvent() {
        var _this3 = this;

        var that = this;
        var pdfUI = this.getPDFUI();
        this.$range.find("[value='current']").prop({ "checked": "checked" });
        disableFromTo();
        disableAssign();
        this.$closeIcon.on("click", function () {
            _this3.component.hide();
        });
        this.$closeBtn.on("click", function () {
            _this3.component.hide();
        });
        this.$range.find("[name='print-range']").on("change", function (e) {
            var eTarget = e.target;
            var value = eTarget.value;
            switch (value) {
                case "fromTo":
                    _this3.$rangeFrom.prop({ "disabled": false });
                    _this3.$rangeTo.prop({ "disabled": false });
                    disableAssign();
                    break;
                case "assign":
                    _this3.$rangeAssign.prop({ "disabled": false });
                    disableFromTo();
                    break;
                default:
                    disableAssign();
                    disableFromTo();
                    break;
            }
        });
        /*this.$printComments.on("change", (e) => {
            let eTarget = e.target;
            console.log(eTarget);
        });*/
        this.$rangeFrom.on("input", function (e) {
            var eTarget = e.target;
            var val = eTarget.value;
            if (val > that.pageCount) {
                _this3.$rangeFrom.val(that.pageCount);
                return;
            }
            if (val > that.$rangeTo.val()) {
                that.$rangeTo.val(val);
            }
        });
        this.$rangeTo.on("input", function (e) {
            var eTarget = e.target;
            var val = eTarget.value;
            if (val > that.pageCount) {
                _this3.$rangeTo.val(that.pageCount);
            }
        });
        /*this.$rangeAssign.on("input", (e) => {
            let eTarget = e.target;
            let val=eTarget.value;
        });*/
        this.$okBtn.on("click", function () {
            pdfUI.getPDFDocRender().then(function (docRender) {
                var printParam = {
                    fromToArray: []
                };
                var rangeType = printParam.rangeType = _this3.$range.find("[name='print-range']:checked").val();
                switch (rangeType) {
                    case "all":
                        printParam.startIndex = 0;
                        printParam.endIndex = that.pageCount;
                        break;
                    case "current":
                        printParam.startIndex = docRender.getCurrentPageIndex();
                        printParam.endIndex = printParam.startIndex + 1;
                        break;
                    case "fromTo":
                        printParam.startIndex = that.$rangeFrom.val() - 1;
                        printParam.endIndex = that.$rangeTo.val();
                        break;
                    default:
                        var val = that.$rangeAssign.val();
                        var arr = val.split(",");
                        arr.map(function (page) {
                            if (page.indexOf("-") > -1) {
                                var _page$split = page.split("-"),
                                    _page$split2 = _slicedToArray(_page$split, 2),
                                    s = _page$split2[0],
                                    e = _page$split2[1];

                                var start = Math.max(Math.min(+s - 1, +e), 0),
                                    end = Math.min(Math.max(+s - 1, +e), that.pageCount);
                                printParam.fromToArray.push([start, end]);
                            } else {
                                printParam.fromToArray.push([page - 1, +page]);
                            }
                        });
                        break;
                }
                var hasAnnots = _this3.$printComments.prop("checked");
                printParam.printType = hasAnnots ? ["page", "annot"] : ["page"];

                var total = 0;
                if (rangeType === "assign") {
                    for (var i = 0; i < printParam.fromToArray.length; i++) {
                        var count = printParam.fromToArray[i][1] - printParam.fromToArray[i][0];
                        total += count;
                    }
                } else {
                    total = printParam.endIndex - printParam.startIndex;
                }
                printParam.total = total;

                _this3.component.hide();
                _this3.getPDFUI().printPDFDocument(printParam);
            });
        });

        function disableFromTo() {
            that.$rangeFrom.prop({ "disabled": true });
            that.$rangeTo.prop({ "disabled": true });
        }
        function disableAssign() {
            that.$rangeAssign.prop({ "disabled": true });
        }
    };

    return PrintController;
}(UIExtension.Controller);

exports.default = PrintController;

function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    for (var len = bytes.byteLength, i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return "data:image/png;base64," + window.btoa(binary);
}

/***/ }),

/***/ "./uix-addons/print/ShowPrintDialogController.js":
/*!*******************************************************!*\
  !*** ./uix-addons/print/ShowPrintDialogController.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

__webpack_require__(/*! ./scss/printDialog.scss */ "./uix-addons/print/scss/printDialog.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ShowPrintDialogController = function (_UIExtension$Controll) {
    _inherits(ShowPrintDialogController, _UIExtension$Controll);

    function ShowPrintDialogController(component) {
        _classCallCheck(this, ShowPrintDialogController);

        return _possibleConstructorReturn(this, _UIExtension$Controll.call(this, component));
    }

    ShowPrintDialogController.prototype.handle = function handle(e) {
        var layerDialog = this.getComponentByName('print-dialog');
        layerDialog.update();
        layerDialog.open(document.body);
    };

    _createClass(ShowPrintDialogController, null, [{
        key: 'permission',
        get: function get() {
            return 4 || 2048;
        }
    }]);

    return ShowPrintDialogController;
}(UIExtension.Controller);

exports.default = ShowPrintDialogController;

/***/ }),

/***/ "./uix-addons/print/addon.info.json":
/*!******************************************!*\
  !*** ./uix-addons/print/addon.info.json ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {


        module.exports = null;
    

/***/ }),

/***/ "./uix-addons/print/index.js":
/*!***********************************!*\
  !*** ./uix-addons/print/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _addonInfo = __webpack_require__(/*! ./addon.info.json */ "./uix-addons/print/addon.info.json");

var _addonInfo2 = _interopRequireDefault(_addonInfo);

var _ShowPrintDialogController = __webpack_require__(/*! ./ShowPrintDialogController */ "./uix-addons/print/ShowPrintDialogController.js");

var _ShowPrintDialogController2 = _interopRequireDefault(_ShowPrintDialogController);

var _printDialog = __webpack_require__(/*! ./template/print-dialog.art */ "./uix-addons/print/template/print-dialog.art");

var _printDialog2 = _interopRequireDefault(_printDialog);

var _PrintController = __webpack_require__(/*! ./PrintController */ "./uix-addons/print/PrintController.js");

var _PrintController2 = _interopRequireDefault(_PrintController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _class = function (_UIExtension$UIXAddon) {
    _inherits(_class, _UIExtension$UIXAddon);

    function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _UIExtension$UIXAddon.apply(this, arguments));
    }

    _class.getName = function getName() {
        return 'print';
    };

    _class.getLoader = function getLoader() {
        return _addonInfo2.default;
    };

    _class.prototype.init = function init() {
        UIExtension.modular.module('print-module', []);
    };

    _class.prototype.fragments = function fragments() {
        return [{
            target: 'home-tab-group-io',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: '<xbutton @tooltip name="print-button" icon-class="fv__icon-toolbar-print">print:button-tooltip.title</xbutton>',
            config: [{
                target: 'print-button',
                tooltip: {
                    title: 'print:button-tooltip.title'
                },
                callback: _ShowPrintDialogController2.default
            }]
        }, {
            target: 'template-container',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: (0, _printDialog2.default)(),
            config: {
                target: 'print-dialog',
                callback: _PrintController2.default
            }
        }];
    };

    return _class;
}(UIExtension.UIXAddon);

exports.default = _class;

/***/ }),

/***/ "./uix-addons/print/scss/printDialog.scss":
/*!************************************************!*\
  !*** ./uix-addons/print/scss/printDialog.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./uix-addons/print/template/print-dialog.art":
/*!****************************************************!*\
  !*** ./uix-addons/print/template/print-dialog.art ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<layer name="print-dialog" class="fv__ui-print-layer center" append-to="body" @draggable>\n    <div class="fv__ui-print-dialog" @stop-drag>\n        <div class="fv__ui-print-dialog-header">\n            <div class="fv__ui-sign-dialog-title" data-i18n="print:dialog.printDialog.title"></div>\n            <i name="print-dialog-close-icon">\xD7</i>\n        </div>\n        <div class="fv__ui-print-dialog-body">\n            <div class="fv__ui-print-item" name="range-item">\n                <div class="fv__ui-print-item-title" data-i18n="print:dialog.printDialog.range"></div>\n                <div class="fv__ui-print-range">\n                    <label><input name="print-range" type="radio" value="all"/><span data-i18n="print:dialog.printDialog.all"></span></label>\n                </div>\n                <div class="fv__ui-print-range">\n                    <label><input name="print-range" type="radio" value="current"/><span data-i18n="print:dialog.printDialog.current"></span></label>\n                </div>\n                <div class="fv__ui-print-range">\n                    <label><input name="print-range" type="radio" value="fromTo"/><span data-i18n="print:dialog.printDialog.from"></span><input class="print-common-input" type="number" min="1" name="range-from"/><span data-i18n="print:dialog.printDialog.to"></span><input class="print-common-input" type="number" name="range-to"/></label>\n                </div>\n                <div class="fv__ui-print-range">\n                    <label><input name="print-range" type="radio" value="assign"/><span data-i18n="print:dialog.printDialog.assign"></span><input class="print-common-input" type="text" name="range-assign"/><span>1,2,5-8</span></label>\n                </div>\n            </div>\n            <div class="fv__ui-print-item">\n                <div class="fv__ui-print-item-title" data-i18n="print:dialog.printDialog.comments"></div>\n                <div class="fv__ui-print-comments">\n                    <label><input name="print-comments" type="checkbox" value=""/><span data-i18n="print:dialog.printDialog.printComments"></span></label>\n                </div>\n            </div>\n        </div>\n        <div class="fv__ui-print-dialog-footer">\n            <div class="fv__ui-print-dialog-btns">\n                <button class="fv__ui-print-btn fv__ui-print-dialog-cancel" data-i18n="print:dialog.cancel" name="print-dialog-close-btn"></button>\n                <button class="fv__ui-print-btn fv__ui-print-dialog-ok" data-i18n="print:dialog.ok" name="print-dialog-ok-btn"></button>\n            </div>\n        </div>\n    </div>\n</layer>';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QcmludFVJWEFkZG9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9QcmludFVJWEFkZG9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1ByaW50VUlYQWRkb24vLi9ub2RlX21vZHVsZXMvYXJ0LXRlbXBsYXRlL2xpYi9jb21waWxlL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vUHJpbnRVSVhBZGRvbi8uL25vZGVfbW9kdWxlcy9hcnQtdGVtcGxhdGUvbGliL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vUHJpbnRVSVhBZGRvbi8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vUHJpbnRVSVhBZGRvbi8uL3VpeC1hZGRvbnMvcHJpbnQvUHJpbnRDb250cm9sbGVyLmpzIiwid2VicGFjazovL1ByaW50VUlYQWRkb24vLi91aXgtYWRkb25zL3ByaW50L1Nob3dQcmludERpYWxvZ0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vUHJpbnRVSVhBZGRvbi8uL3VpeC1hZGRvbnMvcHJpbnQvYWRkb24uaW5mby5qc29uIiwid2VicGFjazovL1ByaW50VUlYQWRkb24vLi91aXgtYWRkb25zL3ByaW50L2luZGV4LmpzIiwid2VicGFjazovL1ByaW50VUlYQWRkb24vLi91aXgtYWRkb25zL3ByaW50L3Njc3MvcHJpbnREaWFsb2cuc2Nzcz8yM2RjIiwid2VicGFjazovL1ByaW50VUlYQWRkb24vLi91aXgtYWRkb25zL3ByaW50L3RlbXBsYXRlL3ByaW50LWRpYWxvZy5hcnQiLCJ3ZWJwYWNrOi8vUHJpbnRVSVhBZGRvbi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiVUlFeHRlbnNpb25cIixcImNvbW1vbmpzMlwiOlwiVUlFeHRlbnNpb25cIixcImFtZFwiOlwiVUlFeHRlbnNpb25cIixcInJvb3RcIjpcIlVJRXh0ZW5zaW9uXCJ9Il0sIm5hbWVzIjpbIlVJRXh0ZW5zaW9uIiwiRGVwcyIsIlBERlZpZXdDdHJsIiwiJCIsImpRdWVyeSIsImNyZWF0ZURlZmVycmVkIiwiZGVmZXJyZWQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJFdmVudHMiLCJQcmludENvbnRyb2xsZXIiLCJjb21wb25lbnQiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJwYWdlQ291bnQiLCJmcm9tVG9BcnJheSIsInBvc3RsaW5rIiwiYWRkRGVzdHJveUhvb2siLCJnZXRQREZVSSIsImFkZFZpZXdlckV2ZW50TGlzdGVuZXIiLCJvcGVuRmlsZVN1Y2Nlc3MiLCJwZGZEb2MiLCJnZXRQYWdlQ291bnQiLCJtb3VudGVkIiwiJGNsb3NlSWNvbiIsImdldENvbXBvbmVudEJ5TmFtZSIsImVsZW1lbnQiLCIkY2xvc2VCdG4iLCIkb2tCdG4iLCIkcmFuZ2UiLCIkcmFuZ2VGcm9tIiwiJHJhbmdlVG8iLCIkcmFuZ2VBc3NpZ24iLCIkcHJpbnRDb21tZW50cyIsIl9iaW5kRXZlbnQiLCJ0aGF0IiwicGRmVUkiLCJmaW5kIiwicHJvcCIsImRpc2FibGVGcm9tVG8iLCJkaXNhYmxlQXNzaWduIiwib24iLCJoaWRlIiwiZSIsImVUYXJnZXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInZhbCIsImdldFBERkRvY1JlbmRlciIsInRoZW4iLCJkb2NSZW5kZXIiLCJwcmludFBhcmFtIiwicmFuZ2VUeXBlIiwiZ2V0Q3VycmVudFBhZ2VJbmRleCIsImFyciIsInNwbGl0IiwibWFwIiwicGFnZSIsImluZGV4T2YiLCJzIiwic3RhcnQiLCJNYXRoIiwibWF4IiwibWluIiwiZW5kIiwicHVzaCIsImhhc0Fubm90cyIsInByaW50VHlwZSIsInRvdGFsIiwiaSIsImxlbmd0aCIsImNvdW50IiwicHJpbnRQREZEb2N1bWVudCIsIkNvbnRyb2xsZXIiLCJhcnJheUJ1ZmZlclRvQmFzZTY0IiwiYnVmZmVyIiwiYmluYXJ5IiwiYnl0ZXMiLCJVaW50OEFycmF5IiwibGVuIiwiYnl0ZUxlbmd0aCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIndpbmRvdyIsImJ0b2EiLCJTaG93UHJpbnREaWFsb2dDb250cm9sbGVyIiwiaGFuZGxlIiwibGF5ZXJEaWFsb2ciLCJ1cGRhdGUiLCJvcGVuIiwiZG9jdW1lbnQiLCJib2R5IiwiZ2V0TmFtZSIsImdldExvYWRlciIsInByaW50TG9hZGVyIiwiaW5pdCIsIm1vZHVsYXIiLCJtb2R1bGUiLCJmcmFnbWVudHMiLCJhY3Rpb24iLCJVSUNvbnN0cyIsIkZSQUdNRU5UX0FDVElPTiIsIkFQUEVORCIsInRlbXBsYXRlIiwiY29uZmlnIiwidG9vbHRpcCIsInRpdGxlIiwiY2FsbGJhY2siLCJVSVhBZGRvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkEsOENBQWE7O0FBRWI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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TyxLQUFHLElBQVY7QUFDSDs7OztFQU5rRDdGLFlBQVkyRSxVOztrQkFBOUNZLHlCOzs7Ozs7Ozs7Ozs7QUNGckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7SUFBWXZGLFc7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FHVzhGLE8sc0JBQVc7QUFDZCxlQUFPLE9BQVA7QUFDSCxLOztXQUNNQyxTLHdCQUFZO0FBQ2YsZUFBT0MsbUJBQVA7QUFDSCxLOztxQkFDREMsSSxtQkFBUTtBQUNKakcsb0JBQVlrRyxPQUFaLENBQW9CQyxNQUFwQixDQUE0QixjQUE1QixFQUE0QyxFQUE1QztBQUNILEs7O3FCQUNEQyxTLHdCQUFhO0FBQ1QsZUFBTyxDQUNIO0FBQ0lyRCxvQkFBUSxtQkFEWjtBQUVJc0Qsb0JBQVFyRyxZQUFZc0csUUFBWixDQUFxQkMsZUFBckIsQ0FBcUNDLE1BRmpEO0FBR0lDLHNJQUhKO0FBSUlDLG9CQUFRLENBQUM7QUFDTDNELHdCQUFRLGNBREg7QUFFTDRELHlCQUFTO0FBQ0xDLDJCQUFPO0FBREYsaUJBRko7QUFLTEMsMEJBQVV0QjtBQUxMLGFBQUQ7QUFKWixTQURHLEVBWUQ7QUFDRXhDLG9CQUFRLG9CQURWO0FBRUVzRCxvQkFBUXJHLFlBQVlzRyxRQUFaLENBQXFCQyxlQUFyQixDQUFxQ0MsTUFGL0M7QUFHRUMsc0JBQVUsNEJBSFo7QUFJRUMsb0JBQVE7QUFDSjNELHdCQUFRLGNBREo7QUFFSjhELDBCQUFVakc7QUFGTjtBQUpWLFNBWkMsQ0FBUDtBQXNCSCxLOzs7RUFqQ3dCWixZQUFZOEcsUTs7Ozs7Ozs7Ozs7OztBQ056Qyx5Qzs7Ozs7Ozs7Ozs7Ozs7O2FDQUM7Ozs7Ozs7Ozs7Ozs7O0FDQUQseUQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJVSUV4dGVuc2lvblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJVSUV4dGVuc2lvblwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJQcmludFVJWEFkZG9uXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiVUlFeHRlbnNpb25cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlByaW50VUlYQWRkb25cIl0gPSBmYWN0b3J5KHJvb3RbXCJVSUV4dGVuc2lvblwiXSk7XG59KShzZWxmLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX1VJRXh0ZW5zaW9uX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3VpeC1hZGRvbnMvcHJpbnQvaW5kZXguanNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qISBhcnQtdGVtcGxhdGVAcnVudGltZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9hdWkvYXJ0LXRlbXBsYXRlICovXG5cbnZhciBnbG9iYWxUaGlzID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB7fTtcblxudmFyIHJ1bnRpbWUgPSBPYmplY3QuY3JlYXRlKGdsb2JhbFRoaXMpO1xudmFyIEVTQ0FQRV9SRUcgPSAvW1wiJic8Pl0vO1xuXG4vKipcbiAqIOe8lueggeaooeadv+i+k+WHuueahOWGheWuuVxuICogQHBhcmFtICB7YW55fSAgICAgICAgY29udGVudFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5ydW50aW1lLiRlc2NhcGUgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgIHJldHVybiB4bWxFc2NhcGUodG9TdHJpbmcoY29udGVudCkpO1xufTtcblxuLyoqXG4gKiDov63ku6PlmajvvIzmlK/mjIHmlbDnu4TkuI7lr7nosaFcbiAqIEBwYXJhbSB7YXJyYXl8T2JqZWN0fSBkYXRhXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSAgICAgY2FsbGJhY2tcbiAqL1xucnVudGltZS4kZWFjaCA9IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkYXRhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhW2ldLCBpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIF9pIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbX2ldLCBfaSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyDlsIbnm67moIfovazmiJDlrZfnrKZcbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvU3RyaW5nKHZhbHVlLmNhbGwodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG4vLyDnvJbnoIEgSFRNTCDlhoXlrrlcbmZ1bmN0aW9uIHhtbEVzY2FwZShjb250ZW50KSB7XG4gICAgdmFyIGh0bWwgPSAnJyArIGNvbnRlbnQ7XG4gICAgdmFyIHJlZ2V4UmVzdWx0ID0gRVNDQVBFX1JFRy5leGVjKGh0bWwpO1xuICAgIGlmICghcmVnZXhSZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gdm9pZCAwLFxuICAgICAgICBsYXN0SW5kZXggPSB2b2lkIDAsXG4gICAgICAgIGNoYXIgPSB2b2lkIDA7XG4gICAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN3aXRjaCAoaHRtbC5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiMzNDsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjMzg7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzM5Oyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDYwOlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiM2MDsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2MjpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjNjI7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFzdEluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RJbmRleCA9IGkgKyAxO1xuICAgICAgICByZXN1bHQgKz0gY2hhcjtcbiAgICB9XG5cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tcGlsZS9ydW50aW1lJyk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCAqIGFzIFVJRXh0ZW5zaW9uIGZyb20gJ1VJRXh0ZW5zaW9uJztcblxuY29uc3QgRGVwcyA9IFVJRXh0ZW5zaW9uLlBERlZpZXdDdHJsLkRlcHM7XG5jb25zdCAkID0gRGVwcy5qUXVlcnk7XG5cbmNvbnN0IGNyZWF0ZURlZmVycmVkID1mdW5jdGlvbiBjcmVhdGVEZWZlcnJlZCAoKSB7XG4gICAgdmFyIGRlZmVycmVkID0ge307XG4gICAgZGVmZXJyZWQucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIGRlZmVycmVkLnJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVmZXJyZWQ7XG59O1xuY29uc3QgRXZlbnRzPVVJRXh0ZW5zaW9uLlBERlZpZXdDdHJsLkV2ZW50cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbnRDb250cm9sbGVyIGV4dGVuZHMgVUlFeHRlbnNpb24uQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50KSB7XG4gICAgICAgIHN1cGVyKGNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuc3RhcnRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuZW5kSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuZnJvbVRvQXJyYXk9W107XG4gICAgfVxuICAgIHBvc3RsaW5rKCkge1xuICAgICAgICB0aGlzLmFkZERlc3Ryb3lIb29rKFxuICAgICAgICAgICAgdGhpcy5nZXRQREZVSSgpLmFkZFZpZXdlckV2ZW50TGlzdGVuZXIoRXZlbnRzLm9wZW5GaWxlU3VjY2VzcywgcGRmRG9jID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VDb3VudCA9IHBkZkRvYy5nZXRQYWdlQ291bnQoKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHN1cGVyLm1vdW50ZWQoKTtcbiAgICAgICAgdGhpcy4kY2xvc2VJY29uID0gJCh0aGlzLmNvbXBvbmVudC5nZXRDb21wb25lbnRCeU5hbWUoXCJwcmludC1kaWFsb2ctY2xvc2UtaWNvblwiKS5lbGVtZW50KTtcbiAgICAgICAgdGhpcy4kY2xvc2VCdG4gPSAkKHRoaXMuY29tcG9uZW50LmdldENvbXBvbmVudEJ5TmFtZShcInByaW50LWRpYWxvZy1jbG9zZS1idG5cIikuZWxlbWVudCk7XG4gICAgICAgIHRoaXMuJG9rQnRuID0gJCh0aGlzLmNvbXBvbmVudC5nZXRDb21wb25lbnRCeU5hbWUoXCJwcmludC1kaWFsb2ctb2stYnRuXCIpLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLiRyYW5nZSA9ICQodGhpcy5jb21wb25lbnQuZ2V0Q29tcG9uZW50QnlOYW1lKFwicmFuZ2UtaXRlbVwiKS5lbGVtZW50KTtcbiAgICAgICAgdGhpcy4kcmFuZ2VGcm9tID0gJCh0aGlzLmNvbXBvbmVudC5nZXRDb21wb25lbnRCeU5hbWUoXCJyYW5nZS1mcm9tXCIpLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLiRyYW5nZVRvID0gJCh0aGlzLmNvbXBvbmVudC5nZXRDb21wb25lbnRCeU5hbWUoXCJyYW5nZS10b1wiKS5lbGVtZW50KTtcbiAgICAgICAgdGhpcy4kcmFuZ2VBc3NpZ249ICQodGhpcy5jb21wb25lbnQuZ2V0Q29tcG9uZW50QnlOYW1lKFwicmFuZ2UtYXNzaWduXCIpLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLiRwcmludENvbW1lbnRzID0gJCh0aGlzLmNvbXBvbmVudC5nZXRDb21wb25lbnRCeU5hbWUoXCJwcmludC1jb21tZW50c1wiKS5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5fYmluZEV2ZW50KCk7XG4gICAgfVxuXG4gICAgX2JpbmRFdmVudCgpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgcGRmVUkgPSB0aGlzLmdldFBERlVJKCk7XG4gICAgICAgIHRoaXMuJHJhbmdlLmZpbmQoXCJbdmFsdWU9J2N1cnJlbnQnXVwiKS5wcm9wKHtcImNoZWNrZWRcIjpcImNoZWNrZWRcIn0pO1xuICAgICAgICBkaXNhYmxlRnJvbVRvKCk7XG4gICAgICAgIGRpc2FibGVBc3NpZ24oKTtcbiAgICAgICAgdGhpcy4kY2xvc2VJY29uLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kY2xvc2VCdG4ub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRyYW5nZS5maW5kKFwiW25hbWU9J3ByaW50LXJhbmdlJ11cIikub24oXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBlVGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBlVGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmcm9tVG9cIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmFuZ2VGcm9tLnByb3Aoe1wiZGlzYWJsZWRcIjpmYWxzZX0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyYW5nZVRvLnByb3Aoe1wiZGlzYWJsZWRcIjpmYWxzZX0pO1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQXNzaWduKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhc3NpZ25cIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmFuZ2VBc3NpZ24ucHJvcCh7XCJkaXNhYmxlZFwiOmZhbHNlfSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVGcm9tVG8oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUFzc2lnbigpO1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRnJvbVRvKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLyp0aGlzLiRwcmludENvbW1lbnRzLm9uKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZVRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coZVRhcmdldCk7XG4gICAgICAgIH0pOyovXG4gICAgICAgIHRoaXMuJHJhbmdlRnJvbS5vbihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZVRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgbGV0IHZhbD1lVGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgaWYodmFsPnRoYXQucGFnZUNvdW50KXtcbiAgICAgICAgICAgICAgICB0aGlzLiRyYW5nZUZyb20udmFsKHRoYXQucGFnZUNvdW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHZhbD50aGF0LiRyYW5nZVRvLnZhbCgpKXtcbiAgICAgICAgICAgICAgICB0aGF0LiRyYW5nZVRvLnZhbCh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kcmFuZ2VUby5vbihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZVRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgbGV0IHZhbD1lVGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgaWYodmFsPnRoYXQucGFnZUNvdW50KXtcbiAgICAgICAgICAgICAgICB0aGlzLiRyYW5nZVRvLnZhbCh0aGF0LnBhZ2VDb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvKnRoaXMuJHJhbmdlQXNzaWduLm9uKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBlVGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBsZXQgdmFsPWVUYXJnZXQudmFsdWU7XG4gICAgICAgIH0pOyovXG4gICAgICAgIHRoaXMuJG9rQnRuLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcGRmVUkuZ2V0UERGRG9jUmVuZGVyKCkudGhlbigoZG9jUmVuZGVyKT0+e1xuICAgICAgICAgICAgICAgIGxldCBwcmludFBhcmFtID0ge1xuICAgICAgICAgICAgICAgICAgICBmcm9tVG9BcnJheTpbXSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlVHlwZSA9IHByaW50UGFyYW0ucmFuZ2VUeXBlPXRoaXMuJHJhbmdlLmZpbmQoXCJbbmFtZT0ncHJpbnQtcmFuZ2UnXTpjaGVja2VkXCIpLnZhbCgpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocmFuZ2VUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhbGxcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludFBhcmFtLnN0YXJ0SW5kZXg9MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludFBhcmFtLmVuZEluZGV4PXRoYXQucGFnZUNvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjdXJyZW50XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRQYXJhbS5zdGFydEluZGV4PWRvY1JlbmRlci5nZXRDdXJyZW50UGFnZUluZGV4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRQYXJhbS5lbmRJbmRleD1wcmludFBhcmFtLnN0YXJ0SW5kZXgrMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZnJvbVRvXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRQYXJhbS5zdGFydEluZGV4PXRoYXQuJHJhbmdlRnJvbS52YWwoKS0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50UGFyYW0uZW5kSW5kZXg9dGhhdC4kcmFuZ2VUby52YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbD10aGF0LiRyYW5nZUFzc2lnbi52YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnI9dmFsLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5tYXAoKHBhZ2UpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2UuaW5kZXhPZihcIi1cIik+LTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgW3MsZV09cGFnZS5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFydD1NYXRoLm1heChNYXRoLm1pbigrcy0xLCtlKSwwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZD1NYXRoLm1pbihNYXRoLm1heCgrcy0xLCtlKSx0aGF0LnBhZ2VDb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludFBhcmFtLmZyb21Ub0FycmF5LnB1c2goW3N0YXJ0LGVuZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRQYXJhbS5mcm9tVG9BcnJheS5wdXNoKFtwYWdlLTEsK3BhZ2VdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgaGFzQW5ub3RzPXRoaXMuJHByaW50Q29tbWVudHMucHJvcChcImNoZWNrZWRcIik7XG4gICAgICAgICAgICAgICAgcHJpbnRQYXJhbS5wcmludFR5cGU9aGFzQW5ub3RzP1tcInBhZ2VcIixcImFubm90XCJdOltcInBhZ2VcIl07XG5cbiAgICAgICAgICAgICAgICBsZXQgdG90YWw9MDtcbiAgICAgICAgICAgICAgICBpZihyYW5nZVR5cGU9PT1cImFzc2lnblwiKXtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmludFBhcmFtLmZyb21Ub0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQ9cHJpbnRQYXJhbS5mcm9tVG9BcnJheVtpXVsxXS1wcmludFBhcmFtLmZyb21Ub0FycmF5W2ldWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWwrPWNvdW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbD1wcmludFBhcmFtLmVuZEluZGV4LXByaW50UGFyYW0uc3RhcnRJbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJpbnRQYXJhbS50b3RhbCA9IHRvdGFsO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBERlVJKCkucHJpbnRQREZEb2N1bWVudChwcmludFBhcmFtKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gZGlzYWJsZUZyb21UbygpIHtcbiAgICAgICAgICAgIHRoYXQuJHJhbmdlRnJvbS5wcm9wKHtcImRpc2FibGVkXCI6dHJ1ZX0pO1xuICAgICAgICAgICAgdGhhdC4kcmFuZ2VUby5wcm9wKHtcImRpc2FibGVkXCI6dHJ1ZX0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGRpc2FibGVBc3NpZ24oKSB7XG4gICAgICAgICAgICB0aGF0LiRyYW5nZUFzc2lnbi5wcm9wKHtcImRpc2FibGVkXCI6dHJ1ZX0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0Jhc2U2NChidWZmZXIpIHtcbiAgICBsZXQgYmluYXJ5ID0gJyc7XG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBmb3IgKGxldCBsZW4gPSBieXRlcy5ieXRlTGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiICsgd2luZG93LmJ0b2EoYmluYXJ5KTtcbn0iLCJpbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5pbXBvcnQgJy4vc2Nzcy9wcmludERpYWxvZy5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvd1ByaW50RGlhbG9nQ29udHJvbGxlciBleHRlbmRzIFVJRXh0ZW5zaW9uLkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCkge1xuICAgICAgICBzdXBlcihjb21wb25lbnQpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHBlcm1pc3Npb24oKXtcbiAgICAgICAgcmV0dXJuIDR8fDIwNDg7XG4gICAgfVxuICAgIGhhbmRsZShlKSB7XG4gICAgICAgIGxldCBsYXllckRpYWxvZyA9IHRoaXMuZ2V0Q29tcG9uZW50QnlOYW1lKCdwcmludC1kaWFsb2cnKTtcbiAgICAgICAgbGF5ZXJEaWFsb2cudXBkYXRlKCk7XG4gICAgICAgIGxheWVyRGlhbG9nLm9wZW4oZG9jdW1lbnQuYm9keSk7XG4gICAgfVxufSIsIlxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IG51bGw7XG4gICAgIiwiaW1wb3J0ICogYXMgVUlFeHRlbnNpb24gZnJvbSAnVUlFeHRlbnNpb24nO1xuaW1wb3J0IHByaW50TG9hZGVyIGZyb20gJy4vYWRkb24uaW5mby5qc29uJztcbmltcG9ydCBTaG93UHJpbnREaWFsb2dDb250cm9sbGVyIGZyb20gXCIuL1Nob3dQcmludERpYWxvZ0NvbnRyb2xsZXJcIjtcbmltcG9ydCByZW5kZXJQcmludERpYWxvZ1RlbXBsYXRlIGZyb20gXCIuL3RlbXBsYXRlL3ByaW50LWRpYWxvZy5hcnRcIjtcbmltcG9ydCBQcmludENvbnRyb2xsZXIgZnJvbSBcIi4vUHJpbnRDb250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgVUlFeHRlbnNpb24uVUlYQWRkb24ge1xuICAgIHN0YXRpYyBnZXROYW1lICgpIHtcbiAgICAgICAgcmV0dXJuICdwcmludCc7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRMb2FkZXIoKSB7XG4gICAgICAgIHJldHVybiBwcmludExvYWRlcjtcbiAgICB9XG4gICAgaW5pdCAoKSB7XG4gICAgICAgIFVJRXh0ZW5zaW9uLm1vZHVsYXIubW9kdWxlICgncHJpbnQtbW9kdWxlJywgW10pO1xuICAgIH1cbiAgICBmcmFnbWVudHMgKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhcmdldDogJ2hvbWUtdGFiLWdyb3VwLWlvJyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IFVJRXh0ZW5zaW9uLlVJQ29uc3RzLkZSQUdNRU5UX0FDVElPTi5BUFBFTkQsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGA8eGJ1dHRvbiBAdG9vbHRpcCBuYW1lPVwicHJpbnQtYnV0dG9uXCIgaWNvbi1jbGFzcz1cImZ2X19pY29uLXRvb2xiYXItcHJpbnRcIj5wcmludDpidXR0b24tdG9vbHRpcC50aXRsZTwveGJ1dHRvbj5gLFxuICAgICAgICAgICAgICAgIGNvbmZpZzogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiAncHJpbnQtYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdwcmludDpidXR0b24tdG9vbHRpcC50aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IFNob3dQcmludERpYWxvZ0NvbnRyb2xsZXJcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAndGVtcGxhdGUtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IFVJRXh0ZW5zaW9uLlVJQ29uc3RzLkZSQUdNRU5UX0FDVElPTi5BUFBFTkQsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHJlbmRlclByaW50RGlhbG9nVGVtcGxhdGUoKSxcbiAgICAgICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiAncHJpbnQtZGlhbG9nJyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IFByaW50Q29udHJvbGxlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCI8bGF5ZXIgbmFtZT1cInByaW50LWRpYWxvZ1wiIGNsYXNzPVwiZnZfX3VpLXByaW50LWxheWVyIGNlbnRlclwiIGFwcGVuZC10bz1cImJvZHlcIiBAZHJhZ2dhYmxlPlxuICAgIDxkaXYgY2xhc3M9XCJmdl9fdWktcHJpbnQtZGlhbG9nXCIgQHN0b3AtZHJhZz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZ2X191aS1wcmludC1kaWFsb2ctaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnZfX3VpLXNpZ24tZGlhbG9nLXRpdGxlXCIgZGF0YS1pMThuPVwicHJpbnQ6ZGlhbG9nLnByaW50RGlhbG9nLnRpdGxlXCI+PC9kaXY+XG4gICAgICAgICAgICA8aSBuYW1lPVwicHJpbnQtZGlhbG9nLWNsb3NlLWljb25cIj7DlzwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmdl9fdWktcHJpbnQtZGlhbG9nLWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmdl9fdWktcHJpbnQtaXRlbVwiIG5hbWU9XCJyYW5nZS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZ2X191aS1wcmludC1pdGVtLXRpdGxlXCIgZGF0YS1pMThuPVwicHJpbnQ6ZGlhbG9nLnByaW50RGlhbG9nLnJhbmdlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZ2X191aS1wcmludC1yYW5nZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IG5hbWU9XCJwcmludC1yYW5nZVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiYWxsXCIvPjxzcGFuIGRhdGEtaTE4bj1cInByaW50OmRpYWxvZy5wcmludERpYWxvZy5hbGxcIj48L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnZfX3VpLXByaW50LXJhbmdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgbmFtZT1cInByaW50LXJhbmdlXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJjdXJyZW50XCIvPjxzcGFuIGRhdGEtaTE4bj1cInByaW50OmRpYWxvZy5wcmludERpYWxvZy5jdXJyZW50XCI+PC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZ2X191aS1wcmludC1yYW5nZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IG5hbWU9XCJwcmludC1yYW5nZVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiZnJvbVRvXCIvPjxzcGFuIGRhdGEtaTE4bj1cInByaW50OmRpYWxvZy5wcmludERpYWxvZy5mcm9tXCI+PC9zcGFuPjxpbnB1dCBjbGFzcz1cInByaW50LWNvbW1vbi1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCIxXCIgbmFtZT1cInJhbmdlLWZyb21cIi8+PHNwYW4gZGF0YS1pMThuPVwicHJpbnQ6ZGlhbG9nLnByaW50RGlhbG9nLnRvXCI+PC9zcGFuPjxpbnB1dCBjbGFzcz1cInByaW50LWNvbW1vbi1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicmFuZ2UtdG9cIi8+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnZfX3VpLXByaW50LXJhbmdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgbmFtZT1cInByaW50LXJhbmdlXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJhc3NpZ25cIi8+PHNwYW4gZGF0YS1pMThuPVwicHJpbnQ6ZGlhbG9nLnByaW50RGlhbG9nLmFzc2lnblwiPjwvc3Bhbj48aW5wdXQgY2xhc3M9XCJwcmludC1jb21tb24taW5wdXRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJyYW5nZS1hc3NpZ25cIi8+PHNwYW4+MSwyLDUtODwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnZfX3VpLXByaW50LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnZfX3VpLXByaW50LWl0ZW0tdGl0bGVcIiBkYXRhLWkxOG49XCJwcmludDpkaWFsb2cucHJpbnREaWFsb2cuY29tbWVudHNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnZfX3VpLXByaW50LWNvbW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgbmFtZT1cInByaW50LWNvbW1lbnRzXCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJcIi8+PHNwYW4gZGF0YS1pMThuPVwicHJpbnQ6ZGlhbG9nLnByaW50RGlhbG9nLnByaW50Q29tbWVudHNcIj48L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZ2X191aS1wcmludC1kaWFsb2ctZm9vdGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnZfX3VpLXByaW50LWRpYWxvZy1idG5zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZ2X191aS1wcmludC1idG4gZnZfX3VpLXByaW50LWRpYWxvZy1jYW5jZWxcIiBkYXRhLWkxOG49XCJwcmludDpkaWFsb2cuY2FuY2VsXCIgbmFtZT1cInByaW50LWRpYWxvZy1jbG9zZS1idG5cIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZnZfX3VpLXByaW50LWJ0biBmdl9fdWktcHJpbnQtZGlhbG9nLW9rXCIgZGF0YS1pMThuPVwicHJpbnQ6ZGlhbG9nLm9rXCIgbmFtZT1cInByaW50LWRpYWxvZy1vay1idG5cIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvbGF5ZXI+IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX1VJRXh0ZW5zaW9uX187Il0sInNvdXJjZVJvb3QiOiIifQ==