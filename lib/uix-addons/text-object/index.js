(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("UIExtension"));
	else if(typeof define === 'function' && define.amd)
		define(["UIExtension"], factory);
	else if(typeof exports === 'object')
		exports["EditTextObject"] = factory(require("UIExtension"));
	else
		root["EditTextObject"] = factory(root["UIExtension"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./uix-addons/text-object/index.js");
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

/***/ "./uix-addons/text-object/addon.info.json":
/*!************************************************!*\
  !*** ./uix-addons/text-object/addon.info.json ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


        module.exports = null;
    

/***/ }),

/***/ "./uix-addons/text-object/biz/AddTextStateController.js":
/*!**************************************************************!*\
  !*** ./uix-addons/text-object/biz/AddTextStateController.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var AddTextStateController = function (_UIExtension$Stateful) {
    _inherits(AddTextStateController, _UIExtension$Stateful);

    AddTextStateController.getName = function getName() {
        return 'AddTextStateController';
    };

    function AddTextStateController(component) {
        _classCallCheck(this, AddTextStateController);

        var _this = _possibleConstructorReturn(this, _UIExtension$Stateful.call(this, component, 'add-text-object'));

        _this.isStateIn = false;
        return _this;
    }

    AddTextStateController.prototype.mounted = function mounted() {
        var _this2 = this;

        _UIExtension$Stateful.prototype.mounted.call(this);
        var fontFamilySizeDropdown = this.getComponentByName('addon-textobject-font-family-size-dropdown');
        var boldStyleButton = this.getComponentByName('addon-textobject-bold-style');
        var italicStyleButton = this.getComponentByName('addon-textobject-italic-style');
        var fontColorDropdown = this.getComponentByName('addon-textobject-font-color');
        var updateUIEventHandler = function updateUIEventHandler() {
            _this2.isStateIn && _this2.updateUIData();
        };
        this.addDestroyHook(fontFamilySizeDropdown.on('change', updateUIEventHandler), boldStyleButton.on('active', updateUIEventHandler), italicStyleButton.on('active', updateUIEventHandler), boldStyleButton.on('deactive', updateUIEventHandler), italicStyleButton.on('deactive', updateUIEventHandler), fontColorDropdown.on('change', updateUIEventHandler));
        this.fontFamilySizeDropdown = fontFamilySizeDropdown;
        this.boldStyleButton = boldStyleButton;
        this.italicStyleButton = italicStyleButton;
        this.fontColorDropdown = fontColorDropdown;
    };

    AddTextStateController.prototype.updateUIData = function updateUIData() {
        var fontFamily = this.fontFamilySizeDropdown.getFontFamily();
        var fontSizePx = this.fontFamilySizeDropdown.getFontSize();
        var units = UIExtension.PDFViewCtrl.shared.units;
        var fontSizePt = units.PIXEL_HORIZONTAL.convertTo(fontSizePx, units.POINT);

        var fontInfo = {};
        switch (fontFamily.type) {
            case 'standard':
                fontInfo.standardId = fontFamily.value;
                break;
            case 'ext':
                fontInfo.name = fontFamily.name;
                fontInfo.styles = fontFamily.style;
                fontInfo.charset = fontFamily.charset;
                break;
        }
        var colorINHex = this.fontColorDropdown.getColor();
        var color = 0;
        if (colorINHex !== 'transparent') {
            color = 0xFF000000 | parseInt(colorINHex.substring(1), 16);
        }
        var newTextObjectParameter = {
            fontSize: fontSizePt,
            weight: this.boldStyleButton.isActive ? 700 : 400,
            italic: this.italicStyleButton.isActive,
            fillColor: color,
            font: fontInfo
        };
        this.getPDFUI().eventEmitter.emit('add-text-object-param-transfer', newTextObjectParameter);
    };

    AddTextStateController.prototype.stateOut = function stateOut() {
        this.isStateIn = false;
    };

    AddTextStateController.prototype.stateIn = function stateIn() {
        this.isStateIn = true;
        this.updateUIData();
    };

    _createClass(AddTextStateController, null, [{
        key: 'permission',
        get: function get() {
            return UIExtension.PDFViewCtrl.Consts.PDFDocPermission.ModifyDocument;
        }
    }]);

    return AddTextStateController;
}(UIExtension.StatefulController);

exports.default = AddTextStateController;

/***/ }),

/***/ "./uix-addons/text-object/biz/BoldStyleController.js":
/*!***********************************************************!*\
  !*** ./uix-addons/text-object/biz/BoldStyleController.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _FontStyleController2 = __webpack_require__(/*! ./FontStyleController */ "./uix-addons/text-object/biz/FontStyleController.js");

var _FontStyleController3 = _interopRequireDefault(_FontStyleController2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var BoldStyleController = function (_FontStyleController) {
    _inherits(BoldStyleController, _FontStyleController);

    function BoldStyleController() {
        _classCallCheck(this, BoldStyleController);

        return _possibleConstructorReturn(this, _FontStyleController.apply(this, arguments));
    }

    BoldStyleController.getName = function getName() {
        return 'BoldStyleController';
    };

    BoldStyleController.prototype.active = function active(textObject) {
        var isBold = textObject.getModel().isBold();
        if (isBold) {
            this.component.active();
        } else {
            this.component.deactive();
        }
    };

    BoldStyleController.prototype.handle = function handle() {
        var _this2 = this;

        if (!this.currentTextObject) {
            this.component.isActive ? this.component.deactive() : this.component.active();
            return;
        }
        var model = this.currentTextObject.getModel();
        if (this.component.isActive) {
            model.setText(this.currentTextObject.getTextChar()).then(function () {
                return model.setBold(false);
            }).then(function (_) {
                // this.component.deactive();
                _this2.currentTextObject.reActive();
            });
        } else {
            model.setText(this.currentTextObject.getTextChar()).then(function () {
                return model.setBold(true);
            }).then(function (_) {
                //this.component.active();
                _this2.currentTextObject.reActive();
            });
        }
    };

    return BoldStyleController;
}(_FontStyleController3.default);

exports.default = BoldStyleController;

/***/ }),

/***/ "./uix-addons/text-object/biz/EditTextStateController.js":
/*!***************************************************************!*\
  !*** ./uix-addons/text-object/biz/EditTextStateController.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var EditTextStateController = UIExtension.StatefulController.ext('edit-text', 'EditTextStateController');
exports.default = EditTextStateController;

/***/ }),

/***/ "./uix-addons/text-object/biz/FontColorController.js":
/*!***********************************************************!*\
  !*** ./uix-addons/text-object/biz/FontColorController.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _TextObjectBaseController = __webpack_require__(/*! ./TextObjectBaseController */ "./uix-addons/text-object/biz/TextObjectBaseController.js");

var _TextObjectBaseController2 = _interopRequireDefault(_TextObjectBaseController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var FontColorController = function (_TextObjectBaseContro) {
    _inherits(FontColorController, _TextObjectBaseContro);

    function FontColorController() {
        _classCallCheck(this, FontColorController);

        return _possibleConstructorReturn(this, _TextObjectBaseContro.apply(this, arguments));
    }

    FontColorController.getName = function getName() {
        return 'FontColorController';
    };

    FontColorController.prototype.mounted = function mounted() {
        var _this2 = this;

        _TextObjectBaseContro.prototype.mounted.call(this);
        this.addDestroyHook(this.getPDFUI().addViewerEventListener('text-object-active', function (textObject) {
            _this2.currentTextObject = textObject;
            _this2.component.enable();
            var model = textObject.getModel();
            var fontColor = model.getFillColor();
            var opacity = fontColor >> 24 & 0xff;
            var rgb = fontColor & 0xFFFFFF;
            if (opacity === 0) {
                _this2.component.setColor('transparent');
            } else {
                _this2.component.setColor(convertFromNumberToHex(rgb));
            }
        }), this.getPDFUI().addViewerEventListener('text-object-unactive', function (textObject) {
            _this2.currentTextObject = null;
            _this2.component.disable();
        }), this.getPDFUI().addViewerEventListener(UIExtension.PDFViewCtrl.Events.openFileSuccess, function () {
            _this2.component.disable();
        }));
    };

    FontColorController.prototype.handle = function handle(color) {
        var _this3 = this;

        if (!this.currentTextObject) {
            return;
        }
        var model = this.currentTextObject.getModel();
        if (color === 'transparent') {
            model.setText(this.currentTextObject.getTextChar()).then(function () {
                return model.setFillColor(0);
            }).then(function () {
                _this3.currentTextObject.reActive();
            });
        } else {
            model.setText(this.currentTextObject.getTextChar()).then(function () {
                var rgb = parseInt(color.substring(1), 16);
                return model.setFillColor(0xFF << 24 | rgb);
            }).then(function () {
                _this3.currentTextObject.reActive();
            });
        }
    };

    return FontColorController;
}(_TextObjectBaseController2.default);

exports.default = FontColorController;


function convertFromNumberToHex(color) {
    if (color < 0) {
        return '#000000';
    }
    var hex = color.toString(16);
    var len = 6;
    if (color > 0xFFFFFF) {
        len = 8;
    }
    while (hex.length < len) {
        hex = '0' + hex;
    }
    return '#' + hex;
}

/***/ }),

/***/ "./uix-addons/text-object/biz/FontStyleController.js":
/*!***********************************************************!*\
  !*** ./uix-addons/text-object/biz/FontStyleController.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TextObjectBaseController = __webpack_require__(/*! ./TextObjectBaseController */ "./uix-addons/text-object/biz/TextObjectBaseController.js");

var _TextObjectBaseController2 = _interopRequireDefault(_TextObjectBaseController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var FontStyleController = function (_TextObjectBaseContro) {
    _inherits(FontStyleController, _TextObjectBaseContro);

    function FontStyleController() {
        _classCallCheck(this, FontStyleController);

        return _possibleConstructorReturn(this, _TextObjectBaseContro.apply(this, arguments));
    }

    FontStyleController.prototype.postlink = function postlink() {
        var _this2 = this;

        this.component.disable();
        this.addDestroyHook(this.getPDFUI().addViewerEventListener('text-object-active', function (textObject) {
            _this2.currentTextObject = textObject;
            _this2.component.enable();
            _this2.active(textObject);
        }), this.getPDFUI().addViewerEventListener('text-object-unactive', function (textObject) {
            _this2.currentTextObject = null;
            _this2.deactive(textObject);
            _this2.component.disable();
        }));
    };

    FontStyleController.prototype.active = function active(textObject) {};

    FontStyleController.prototype.deactive = function deactive(textObject) {
        // this.component.deactive();
    };

    return FontStyleController;
}(_TextObjectBaseController2.default);

exports.default = FontStyleController;

/***/ }),

/***/ "./uix-addons/text-object/biz/ItalicStyleController.js":
/*!*************************************************************!*\
  !*** ./uix-addons/text-object/biz/ItalicStyleController.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _FontStyleController2 = __webpack_require__(/*! ./FontStyleController */ "./uix-addons/text-object/biz/FontStyleController.js");

var _FontStyleController3 = _interopRequireDefault(_FontStyleController2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ItalicStyleController = function (_FontStyleController) {
    _inherits(ItalicStyleController, _FontStyleController);

    function ItalicStyleController() {
        _classCallCheck(this, ItalicStyleController);

        return _possibleConstructorReturn(this, _FontStyleController.apply(this, arguments));
    }

    ItalicStyleController.getName = function getName() {
        return 'ItalicStyleController';
    };

    ItalicStyleController.prototype.active = function active(textObject) {
        // console.info(textObject.getModel().isItalic());
        var isItalic = textObject.getModel().isItalic();
        // const fontInfo = textObject.getModel().info.textState.font;
        if (isItalic) {
            this.component.active();
        } else {
            this.component.deactive();
        }
    };

    ItalicStyleController.prototype.handle = function handle() {
        var _this2 = this;

        if (!this.currentTextObject) {
            this.component.isActive ? this.component.deactive() : this.component.active();
            return;
        }
        var model = this.currentTextObject.getModel();
        if (this.component.isActive) {
            model.setText(this.currentTextObject.getTextChar()).then(function () {
                return model.setItalic(false);
            }).then(function (_) {
                //this.component.deactive();
                _this2.currentTextObject.reActive();
            });
        } else {
            model.setText(this.currentTextObject.getTextChar()).then(function () {
                return model.setItalic(true);
            }).then(function (_) {
                //this.component.active();
                _this2.currentTextObject.reActive();
            });
        }
    };

    return ItalicStyleController;
}(_FontStyleController3.default);

exports.default = ItalicStyleController;

/***/ }),

/***/ "./uix-addons/text-object/biz/TextObjectBaseController.js":
/*!****************************************************************!*\
  !*** ./uix-addons/text-object/biz/TextObjectBaseController.js ***!
  \****************************************************************/
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

var TextObjectBaseController = function (_UIExtension$Controll) {
    _inherits(TextObjectBaseController, _UIExtension$Controll);

    function TextObjectBaseController() {
        _classCallCheck(this, TextObjectBaseController);

        return _possibleConstructorReturn(this, _UIExtension$Controll.apply(this, arguments));
    }

    TextObjectBaseController.prototype.mounted = function mounted() {
        var _this2 = this;

        _UIExtension$Controll.prototype.mounted.call(this);
        this.addDestroyHook(this.getPDFUI().addViewerEventListener(UIExtension.PDFViewCtrl.Events.switchStateHandler, function (CurrentStateHandler) {
            switch (CurrentStateHandler.getStateName()) {
                case 'add-text-object':
                    // case 'edit-text':
                    // case 'edit-all':
                    _this2.component.enable();
                    _this2.component.canBeDisabled = false;
                    break;
                default:
                    _this2.component.canBeDisabled = true;
                    _this2.component.disable();
            }
        }));
    };

    return TextObjectBaseController;
}(UIExtension.Controller);

exports.default = TextObjectBaseController;

/***/ }),

/***/ "./uix-addons/text-object/biz/UnderlineStyleController.js":
/*!****************************************************************!*\
  !*** ./uix-addons/text-object/biz/UnderlineStyleController.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _FontStyleController2 = __webpack_require__(/*! ./FontStyleController */ "./uix-addons/text-object/biz/FontStyleController.js");

var _FontStyleController3 = _interopRequireDefault(_FontStyleController2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var UnderlineStyleController = function (_FontStyleController) {
    _inherits(UnderlineStyleController, _FontStyleController);

    function UnderlineStyleController() {
        _classCallCheck(this, UnderlineStyleController);

        return _possibleConstructorReturn(this, _FontStyleController.apply(this, arguments));
    }

    UnderlineStyleController.getName = function getName() {
        return 'UnderlineStyleController';
    };

    UnderlineStyleController.prototype.active = function active(textObject) {
        var fontInfo = textObject.getModel().info.textState.font;
        // if(fontInfo.isItalic) {
        //     this.active();
        // } else {
        //     this.deactive();
        // }
    };

    return UnderlineStyleController;
}(_FontStyleController3.default);

exports.default = UnderlineStyleController;

/***/ }),

/***/ "./uix-addons/text-object/index.js":
/*!*****************************************!*\
  !*** ./uix-addons/text-object/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _addonInfo = __webpack_require__(/*! ./addon.info.json */ "./uix-addons/text-object/addon.info.json");

var _addonInfo2 = _interopRequireDefault(_addonInfo);

__webpack_require__(/*! ./scss/index.scss */ "./uix-addons/text-object/scss/index.scss");

var _FontFamilySizeController = __webpack_require__(/*! ./widgets/font-family-size-dropdown/FontFamilySizeController */ "./uix-addons/text-object/widgets/font-family-size-dropdown/FontFamilySizeController.js");

var _FontFamilySizeController2 = _interopRequireDefault(_FontFamilySizeController);

var _FontFamilySizeDropdownComponent = __webpack_require__(/*! ./widgets/font-family-size-dropdown/FontFamilySizeDropdownComponent */ "./uix-addons/text-object/widgets/font-family-size-dropdown/FontFamilySizeDropdownComponent.js");

var _FontFamilySizeDropdownComponent2 = _interopRequireDefault(_FontFamilySizeDropdownComponent);

var _BoldStyleController = __webpack_require__(/*! ./biz/BoldStyleController */ "./uix-addons/text-object/biz/BoldStyleController.js");

var _BoldStyleController2 = _interopRequireDefault(_BoldStyleController);

var _ItalicStyleController = __webpack_require__(/*! ./biz/ItalicStyleController */ "./uix-addons/text-object/biz/ItalicStyleController.js");

var _ItalicStyleController2 = _interopRequireDefault(_ItalicStyleController);

var _UnderlineStyleController = __webpack_require__(/*! ./biz/UnderlineStyleController */ "./uix-addons/text-object/biz/UnderlineStyleController.js");

var _UnderlineStyleController2 = _interopRequireDefault(_UnderlineStyleController);

var _FontColorDropdownComponent = __webpack_require__(/*! ./widgets/font-color-dropdown/FontColorDropdownComponent.js */ "./uix-addons/text-object/widgets/font-color-dropdown/FontColorDropdownComponent.js");

var _FontColorDropdownComponent2 = _interopRequireDefault(_FontColorDropdownComponent);

var _FontColorController = __webpack_require__(/*! ./biz/FontColorController.js */ "./uix-addons/text-object/biz/FontColorController.js");

var _FontColorController2 = _interopRequireDefault(_FontColorController);

var _AddTextStateController = __webpack_require__(/*! ./biz/AddTextStateController.js */ "./uix-addons/text-object/biz/AddTextStateController.js");

var _AddTextStateController2 = _interopRequireDefault(_AddTextStateController);

var _EditTextStateController = __webpack_require__(/*! ./biz/EditTextStateController.js */ "./uix-addons/text-object/biz/EditTextStateController.js");

var _EditTextStateController2 = _interopRequireDefault(_EditTextStateController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by linc on 2019/6/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var addonName = 'editTextObject';

var actions = UIExtension.UIConsts.FRAGMENT_ACTION;

var ALIGNMENT_GROUP = 'edit-tab-group-font-alignment';

var EditTextObject = function (_UIExtension$UIXAddon) {
    _inherits(EditTextObject, _UIExtension$UIXAddon);

    function EditTextObject() {
        _classCallCheck(this, EditTextObject);

        return _possibleConstructorReturn(this, _UIExtension$UIXAddon.apply(this, arguments));
    }

    EditTextObject.getName = function getName() {
        return addonName;
    };

    EditTextObject.getLoader = function getLoader() {
        return _addonInfo2.default;
    };

    EditTextObject.prototype.init = function init() {
        var module = UIExtension.modular.module('edit-text-object', []);
        module.registerController(_FontFamilySizeController2.default);
        module.registerController(_BoldStyleController2.default);
        module.registerController(_ItalicStyleController2.default);
        module.registerController(_UnderlineStyleController2.default);
        module.registerController(_FontColorController2.default);
        module.registerController(_AddTextStateController2.default);
        module.registerController(_EditTextStateController2.default);
        module.registerComponent(_FontFamilySizeDropdownComponent2.default);
        module.registerComponent(_FontColorDropdownComponent2.default);
    };

    EditTextObject.prototype.beforeMounted = function beforeMounted(root) {
        var editTab = root.getComponentByName('edit-tab');
        editTab && editTab.show();
    };

    EditTextObject.prototype.fragments = function fragments() {
        return [{
            target: 'edit-tab-group-font',
            config: {
                retainCount: 5
            }
        }, {
            target: 'edit-tab-group-mode',
            action: actions.APPEND,
            template: '<xbutton icon-class="fv__icon-addon-textobject-add-text" @controller="edit-text-object:AddTextStateController" @tooltip tooltip-title="edit-text:buttons.addText">edit-text:buttons.addText</xbutton>'
        }, {
            target: 'edit-tab-group-font',
            action: actions.APPEND,
            template: '<edit-text-object:font-family-size-dropdown name="addon-textobject-font-family-size-dropdown">'
        }, {
            target: 'edit-tab-group-font',
            action: actions.APPEND,
            template: '<xbutton name="addon-textobject-bold-style" icon-class="fv__icon-addon-textobject-bold" @controller="edit-text-object:BoldStyleController" @tooltip tooltip-title="edit-text:buttons.editFontWeight">edit-text:buttons.editFontWeight</xbutton>'
        }, {
            target: 'edit-tab-group-font',
            action: actions.APPEND,
            template: '<xbutton name="addon-textobject-italic-style" icon-class="fv__icon-addon-textobject-italic" @controller="edit-text-object:ItalicStyleController" @tooltip tooltip-title="edit-text:buttons.editFontItalic">edit-text:buttons.editFontItalic</xbutton>'
        }, {
            target: 'edit-tab-group-font',
            action: actions.APPEND,
            template: '<xbutton icon-class="fv__icon-addon-textobject-underline" @controller="edit-text-object:UnderlineStyleController" visible="false" @tooltip tooltip-title="edit-text:buttons.underline">edit-text:buttons.underline</xbutton>'
        }, {
            target: 'edit-tab-group-font',
            action: actions.APPEND,
            template: '<edit-text-object:text-color-picker name="addon-textobject-font-color" @controller="edit-text-object:FontColorController">'
        }, {
            target: 'edit-tab-group-font',
            action: actions.AFTER,
            template: '<group name="' + ALIGNMENT_GROUP + '" visible="false">'
        }, {
            target: ALIGNMENT_GROUP,
            action: actions.APPEND,
            template: '<xbutton icon-class="fv__icon-addon-textobject-align-left" @tooltip tooltip-title="edit-text:buttons.alignLeft">edit-text:buttons.alignLeft</xbutton>'
        }, {
            target: ALIGNMENT_GROUP,
            action: actions.APPEND,
            template: '<xbutton icon-class="fv__icon-addon-textobject-align-center" @tooltip tooltip-title="edit-text:buttons.alignCenter">edit-text:buttons.alignCenter</xbutton>'
        }, {
            target: ALIGNMENT_GROUP,
            action: actions.APPEND,
            template: '<xbutton icon-class="fv__icon-addon-textobject-align-justify" @tooltip tooltip-title="edit-text:buttons.alignJustify">edit-text:buttons.alignJustify</xbutton>'
        }, {
            target: ALIGNMENT_GROUP,
            action: actions.APPEND,
            template: '<xbutton icon-class="fv__icon-addon-textobject-line-spacing" @tooltip tooltip-title="edit-text:buttons.lineSpacing">edit-text:buttons.lineSpacing</xbutton>'
        }, {
            target: ALIGNMENT_GROUP,
            action: actions.APPEND,
            template: '<xbutton icon-class="fv__icon-addon-textobject-word-spacing" @tooltip tooltip-title="edit-text:buttons.wordSpacing">edit-text:buttons.wordSpacing</xbutton>'
        }, {
            target: ALIGNMENT_GROUP,
            action: actions.APPEND,
            template: '<xbutton icon-class="fv__icon-addon-textobject-character-scale" @tooltip tooltip-title="edit-text:buttons.characterScale">edit-text:buttons.characterScale</xbutton>'
        }];
    };

    return EditTextObject;
}(UIExtension.UIXAddon);

exports.default = EditTextObject;

/***/ }),

/***/ "./uix-addons/text-object/scss/index.scss":
/*!************************************************!*\
  !*** ./uix-addons/text-object/scss/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./uix-addons/text-object/widgets/font-color-dropdown/FontColorDropdownComponent.js":
/*!******************************************************************************************!*\
  !*** ./uix-addons/text-object/widgets/font-color-dropdown/FontColorDropdownComponent.js ***!
  \******************************************************************************************/
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

var FontColorDropdownComponent = function (_UIExtension$SeniorCo) {
    _inherits(FontColorDropdownComponent, _UIExtension$SeniorCo);

    function FontColorDropdownComponent() {
        _classCallCheck(this, FontColorDropdownComponent);

        return _possibleConstructorReturn(this, _UIExtension$SeniorCo.apply(this, arguments));
    }

    FontColorDropdownComponent.getName = function getName() {
        return 'text-color-picker';
    };

    FontColorDropdownComponent.prototype.postlink = function postlink() {
        var _this2 = this;

        _UIExtension$SeniorCo.prototype.postlink.call(this);
        var iconElement = this.toggler.iconElement;
        var colorStatuesElement = document.createElement('i');
        colorStatuesElement.classList.add('fv__ui-addon-textobject-color-status');
        iconElement.appendChild(colorStatuesElement);

        var colorPicker = this.getComponentByName('addon-textobject-color-picker');
        this.colorPicker = colorPicker;
        this.colorStatuesElement = colorStatuesElement;

        var stopPropagationHandler = function stopPropagationHandler(e) {
            e.stopPropagation();
        };
        colorPicker.element.addEventListener('mouseup', stopPropagationHandler);
        this.addDestroyHook(function () {
            colorPicker.element.removeEventListener('mouseup', stopPropagationHandler);
        });
        this.setColor('#000000');

        var freezeCallback = function freezeCallback() {
            _this2.freeze();
        };
        var unfreezeCallback = function unfreezeCallback() {
            _this2.unfreeze();
        };

        colorPicker.on('change', function (_, newColor) {
            _this2.updateColorStatus(newColor);
            _this2.trigger('change', newColor);
            _this2.controller.handle(newColor);
        });
        colorPicker.on('postrender', function () {
            colorPicker.$colorInput.off('show.spectrum', freezeCallback).on('show.spectrum', freezeCallback);
            colorPicker.$colorInput.off('hide.spectrum', unfreezeCallback).on('hide.spectrum', unfreezeCallback);
        });
        colorPicker.trigger('postrender');
    };

    FontColorDropdownComponent.prototype.setColor = function setColor(color) {
        this.colorPicker.setValue(color);
        this.updateColorStatus(color);
    };

    FontColorDropdownComponent.prototype.getColor = function getColor() {
        return this.colorPicker.getValue();
    };

    FontColorDropdownComponent.prototype.updateColorStatus = function updateColorStatus(color) {
        this.colorStatuesElement.style.cssText += 'background-color: ' + color;
    };

    return FontColorDropdownComponent;
}(UIExtension.SeniorComponentFactory.createSuperClass({
    template: '\n        <dropdown class="fv__ui-addon-textobject-font-color" icon-class="fv__icon-addon-textobject-font-color" @tooltip tooltip-title="edit-text:buttons.editFontColor" text="edit-text:buttons.editFontColor">\n            <dropdown-item> \n                <color class="fv__ui-addon-textobject-color-picker" name="addon-textobject-color-picker"></color>\n            </dropdown-item> \n        </dropdown>\n    ',
    fragments: [{
        target: 'addon-textobject-color-picker',
        config: {
            colors: ['#ff6633', '#ff00ff', '#ffcc00', '#00ffff', '#00ff00', '#ffff00', '#ff0000', '#993399', '#cc99ff', '#ff99cc', '#0000ff', '#66cc33', '#000000', '#333333', '#666666', '#999999', '#cccccc', '#ffffff'],
            transparentclass: 'fv__ui-property-icon-nocolor',
            addclass: 'fv__ui-property-icon-add-color',
            removeclass: 'fv__ui-property-icon-remove-color',
            deleteclass: 'fv__ui-property-icon-delete-color-',
            selectedclass: 'fv__ui-property-icon-selected-color-',
            lightpostname: 'light',
            darkpostname: 'dark'
        }
    }]
}));

exports.default = FontColorDropdownComponent;

/***/ }),

/***/ "./uix-addons/text-object/widgets/font-family-size-dropdown/FontFamilySizeController.js":
/*!**********************************************************************************************!*\
  !*** ./uix-addons/text-object/widgets/font-family-size-dropdown/FontFamilySizeController.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _TextObjectBaseController = __webpack_require__(/*! ../../biz/TextObjectBaseController */ "./uix-addons/text-object/biz/TextObjectBaseController.js");

var _TextObjectBaseController2 = _interopRequireDefault(_TextObjectBaseController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var STANDARD_TYPE = 'standard';
var EXT_TYPE = 'ext';

var FontFamilySizeController = function (_TextObjectBaseContro) {
    _inherits(FontFamilySizeController, _TextObjectBaseContro);

    FontFamilySizeController.getName = function getName() {
        return 'FontFamilySizeController';
    };

    function FontFamilySizeController(component) {
        _classCallCheck(this, FontFamilySizeController);

        var _this = _possibleConstructorReturn(this, _TextObjectBaseContro.call(this, component));

        var Addon = window.EditTextObject;
        var addonInfo = Addon.addonInfo;
        var standardFontFamilies = addonInfo.standardFontFamilies || [];
        var extensionFontFamilies = addonInfo.extensionFontFamilies || [];
        _this.standardFontFamilies = standardFontFamilies;
        _this.extensionFontFamilies = extensionFontFamilies;
        standardFontFamilies.forEach(function (ff) {
            ff.type = STANDARD_TYPE;
        });
        extensionFontFamilies.forEach(function (ff) {
            ff.type = EXT_TYPE;
        });
        _this.fontFamilies = standardFontFamilies.concat(extensionFontFamilies);
        _this.fontSizes = Addon.addonInfo.customFontSizes || [];
        return _this;
    }

    FontFamilySizeController.prototype.mounted = function mounted() {
        var _this2 = this;

        _TextObjectBaseContro.prototype.mounted.call(this);
        this.selectFontFamily(this.fontFamilies[0]);
        if (this.fontSizes.indexOf(16) > -1) {
            this.selectFontSize(16);
        } else {
            this.selectFontSize(this.fontSizes[0]);
        }
        this.addDestroyHook(this.getPDFUI().addViewerEventListener('text-object-active', function (textObject) {
            _this2.currentTextObject = textObject;
            _this2.active(textObject);
        }), this.getPDFUI().addViewerEventListener('text-object-unactive', function (textObject) {
            _this2.currentTextObject = null;
            _this2.deactive(textObject);
        }), this.getPDFUI().addViewerEventListener(UIExtension.PDFViewCtrl.Events.openFileSuccess, function () {
            _this2.component.disable();
        }), this.component.on('change', function (field, value) {
            if (!_this2.currentTextObject) {
                return;
            }
            switch (field) {
                case 'fontFamily':
                    var ffs = _this2.fontFamilies;
                    var len = ffs.length;
                    for (var i = 0; i < len; i++) {
                        var ff = ffs[i];
                        if (ff.text === value || ff.name === value) {
                            _this2.applyFontFamily(ff);
                            break;
                        }
                    }
                    break;
                case 'fontSize':
                    _this2.applyFontSize(value);
                    break;
            }
        }));
    };

    FontFamilySizeController.prototype.active = function active(textObject) {
        var _this3 = this;

        this.component.enable();
        var fontSize = textObject.getModel().info.textState.size;
        var units = UIExtension.PDFViewCtrl.shared.units;
        var fontSizeInPixel = units.POINT.convertTo(fontSize, units.PIXEL_HORIZONTAL);
        this.component.selectFontSize(fontSizeInPixel);

        var resolveFontFamily = function resolveFontFamily(textObject) {
            var fontInfo = textObject.getModel().getFontInfo();
            if (fontInfo.isStandard) {
                for (var i = 0, len = _this3.standardFontFamilies.length; i < len; i++) {
                    var stf = _this3.standardFontFamilies[i];
                    if (stf.value === fontInfo.standardId) {
                        return stf;
                    }
                }
                return {
                    text: fontInfo.baseName,
                    value: fontInfo.standardId,
                    standard: true,
                    type: 'standard'
                };
            } else {
                return {
                    text: fontInfo.baseName,
                    name: fontInfo.baseName,
                    style: fontInfo.styles,
                    charset: fontInfo.charset,
                    type: 'ext'
                };
            }
        };

        this.component.selectFontFamily(resolveFontFamily(textObject));
    };

    FontFamilySizeController.prototype.deactive = function deactive() {
        this.component.disable();
    };

    FontFamilySizeController.prototype.selectFontFamily = function selectFontFamily(fontFamily) {
        var prevalue = this.component.currentFontFamily;
        this.component.selectFontFamily(fontFamily);
        this.applyFontFamily(fontFamily);
        this.component.trigger('change', 'fontFamily', prevalue, fontFamily);
    };

    FontFamilySizeController.prototype.applyFontFamily = function applyFontFamily(fontFamily) {
        var _this4 = this;

        if (!this.currentTextObject) {
            return;
        }
        var model = this.currentTextObject.getModel();
        switch (fontFamily.type) {
            case STANDARD_TYPE:
                model.setText(this.currentTextObject.getTextChar()).then(function () {
                    return model.setStandardFont(fontFamily.value);
                }).then(function (_) {
                    _this4.currentTextObject.reActive();
                });
                break;
            case EXT_TYPE:
                model.setText(this.currentTextObject.getTextChar()).then(function () {
                    return model.setFontByName(fontFamily.name, fontFamily.style, fontFamily.charset);
                }).then(function (_) {
                    _this4.currentTextObject.reActive();
                });
                break;
        }
    };

    FontFamilySizeController.prototype.selectFontSize = function selectFontSize(fontSize) {
        var prevalue = this.component.currentFontSize;
        this.component.selectFontSize(fontSize);
        this.applyFontSize(fontSize);
        this.component.trigger('change', 'fontSize', prevalue, fontSize);
    };

    FontFamilySizeController.prototype.applyFontSize = function applyFontSize(fontSize) {
        var _this5 = this;

        if (!this.currentTextObject) {
            return;
        }
        var units = UIExtension.PDFViewCtrl.shared.units;
        var model = this.currentTextObject.getModel();
        model.setText(this.currentTextObject.getTextChar()).then(function () {
            return model.setFontSize(units.PIXEL_HORIZONTAL.convertTo(fontSize, units.POINT));
        }).then(function (_) {
            _this5.currentTextObject.reActive();
        });
    };

    FontFamilySizeController.prototype.renderFontFamilyItem = function renderFontFamilyItem(fontFamily) {
        if (fontFamily.text === 'Symbol') {
            return '';
        }
        return 'font-family: "' + (fontFamily.name || fontFamily.text) + '"';
    };

    return FontFamilySizeController;
}(_TextObjectBaseController2.default);

exports.default = FontFamilySizeController;

/***/ }),

/***/ "./uix-addons/text-object/widgets/font-family-size-dropdown/FontFamilySizeDropdownComponent.js":
/*!*****************************************************************************************************!*\
  !*** ./uix-addons/text-object/widgets/font-family-size-dropdown/FontFamilySizeDropdownComponent.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _fontFamilySizeDropdown = __webpack_require__(/*! ./font-family-size-dropdown.art */ "./uix-addons/text-object/widgets/font-family-size-dropdown/font-family-size-dropdown.art");

var _fontFamilySizeDropdown2 = _interopRequireDefault(_fontFamilySizeDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var FontFamilySizeDropdownComponent = function (_UIExtension$SeniorCo) {
    _inherits(FontFamilySizeDropdownComponent, _UIExtension$SeniorCo);

    FontFamilySizeDropdownComponent.getName = function getName() {
        return 'font-family-size-dropdown';
    };

    function FontFamilySizeDropdownComponent(options, modular, localizer) {
        _classCallCheck(this, FontFamilySizeDropdownComponent);

        return _possibleConstructorReturn(this, _UIExtension$SeniorCo.call(this, options, modular, localizer));
    }

    FontFamilySizeDropdownComponent.prototype.createDOMElement = function createDOMElement() {
        return document.createElement('div');
    };

    FontFamilySizeDropdownComponent.prototype.postlink = function postlink() {
        var _this2 = this;

        _UIExtension$SeniorCo.prototype.postlink.call(this);
        this.fontFamilyDropdownComponent = this.getComponentByName('font-family-dropdown');
        this.fontSizeDropdownComponent = this.getComponentByName('font-size-dropdown');
        this.fontFamilyDropdownText = this.fontFamilyDropdownComponent.toggler.textElement;

        this.addDestroyHook(this.fontSizeDropdownComponent.on('change', function (newSize) {
            _this2.trigger('change', 'fontSize', newSize);
        }), this.fontFamilyDropdownComponent.on('change', function (fontFamily) {
            _this2.trigger('change', 'fontFamily', fontFamily);
        }));
    };

    FontFamilySizeDropdownComponent.prototype.getFontFamily = function getFontFamily() {
        return this.currentFontFamily;
    };

    FontFamilySizeDropdownComponent.prototype.selectFontFamily = function selectFontFamily(fontFamily) {
        var child = this.fontFamilyDropdownComponent.findChildren(function (child) {
            return child.controller.data.fontFamily === fontFamily;
        })[0];
        if (child) {
            this.fontFamilyDropdownComponent.select(child);
        }
        this.fontFamilyDropdownComponent.setText(fontFamily.text);
        if (fontFamily.text === 'Symbol') {
            this.fontFamilyDropdownText.style.cssText += 'font-family: inherit';
        } else {
            this.fontFamilyDropdownText.style.cssText += 'font-family: "' + (fontFamily.name || fontFamily.text) + '"';
        }
        this.currentFontFamily = fontFamily;
    };

    FontFamilySizeDropdownComponent.prototype.selectFontSize = function selectFontSize(fontSize) {
        var child = this.fontSizeDropdownComponent.findChildren(function (child) {
            return child.controller.data.fontSize === fontSize;
        })[0];
        if (child) {
            this.fontSizeDropdownComponent.select(child);
        }
        this.fontSizeDropdownComponent.setEditValue(fontSize);
        this.currentFontSize = fontSize;
    };

    FontFamilySizeDropdownComponent.prototype.getFontSize = function getFontSize() {
        return this.currentFontSize;
    };

    return FontFamilySizeDropdownComponent;
}(UIExtension.SeniorComponentFactory.createSuperClass({
    template: (0, _fontFamilySizeDropdown2.default)(),
    fragments: [{
        target: 'font-family-dropdown',
        config: {}
    }, {
        target: 'font-size-dropdown',
        config: {
            editOptions: {
                type: 'number',
                step: 0.1
            }
        }
    }]
}));

exports.default = FontFamilySizeDropdownComponent;

/***/ }),

/***/ "./uix-addons/text-object/widgets/font-family-size-dropdown/font-family-size-dropdown.art":
/*!************************************************************************************************!*\
  !*** ./uix-addons/text-object/widgets/font-family-size-dropdown/font-family-size-dropdown.art ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<div class="fv__ui-addon-font-family-size-dropdown" @controller="edit-text-object:FontFamilySizeController as ffsc">\n    <dropdown name="font-family-dropdown" class="fv__ui-addon-font-family-dropdown" @tooltip tooltip-title="edit-text:dropdowns.editFontFamily">\n        <dropdown-button \n            @foreach="fontFamily in ffsc.fontFamilies" \n            @sync.text="fontFamily.text" \n            @sync.attr.style="ffsc.renderFontFamilyItem(fontFamily)"\n            @on.click="ffsc.selectFontFamily(fontFamily)"\n        ></dropdown-button>\n    </dropdown>\n    <dropdown name="font-size-dropdown" editable="true" class="fv__ui-addon-font-size-dropdown" @tooltip tooltip-title="edit-text:dropdowns.editFontSize">\n        <dropdown-button\n            @foreach="fontSize in ffsc.fontSizes"\n            @sync.text="fontSize"\n            @on.click="ffsc.selectFontSize(fontSize)"\n        ></dropdown-button>\n    </dropdown>\n</div>';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FZGl0VGV4dE9iamVjdC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vRWRpdFRleHRPYmplY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRWRpdFRleHRPYmplY3QvLi9ub2RlX21vZHVsZXMvYXJ0LXRlbXBsYXRlL2xpYi9jb21waWxlL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vRWRpdFRleHRPYmplY3QvLi9ub2RlX21vZHVsZXMvYXJ0LXRlbXBsYXRlL2xpYi9ydW50aW1lLmpzIiwid2VicGFjazovL0VkaXRUZXh0T2JqZWN0Lyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9FZGl0VGV4dE9iamVjdC8uL3VpeC1hZGRvbnMvdGV4dC1vYmplY3QvYWRkb24uaW5mby5qc29uIiwid2VicGFjazovL0VkaXRUZXh0T2JqZWN0Ly4vdWl4LWFkZG9ucy90ZXh0LW9iamVjdC9iaXovQWRkVGV4dFN0YXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9FZGl0VGV4dE9iamVjdC8uL3VpeC1hZGRvbnMvdGV4dC1vYmplY3QvYml6L0JvbGRTdHlsZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vRWRpdFRleHRPYmplY3QvLi91aXgtYWRkb25zL3RleHQtb2JqZWN0L2Jpei9FZGl0VGV4dFN0YXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9FZGl0VGV4dE9iamVjdC8uL3VpeC1hZGRvbnMvdGV4dC1vYmplY3QvYml6L0ZvbnRDb2xvckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vRWRpdFRleHRPYmplY3QvLi91aXgtYWRkb25zL3RleHQtb2JqZWN0L2Jpei9Gb250U3R5bGVDb250cm9sbGVyLmpzIiwid2VicGFjazovL0VkaXRUZXh0T2JqZWN0Ly4vdWl4LWFkZG9ucy90ZXh0LW9iamVjdC9iaXovSXRhbGljU3R5bGVDb250cm9sbGVyLmpzIiwid2VicGFjazovL0VkaXRUZXh0T2JqZWN0Ly4vdWl4LWFkZG9ucy90ZXh0LW9iamVjdC9iaXovVGV4dE9iamVjdEJhc2VDb250cm9sbGVyLmpzIiwid2VicGFjazovL0VkaXRUZXh0T2JqZWN0Ly4vdWl4LWFkZG9ucy90ZXh0LW9iamVjdC9iaXovVW5kZXJsaW5lU3R5bGVDb250cm9sbGVyLmpzIiwid2VicGFjazovL0VkaXRUZXh0T2JqZWN0Ly4vdWl4LWFkZG9ucy90ZXh0LW9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9FZGl0VGV4dE9iamVjdC8uL3VpeC1hZGRvbnMvdGV4dC1vYmplY3Qvc2Nzcy9pbmRleC5zY3NzP2M1OTciLCJ3ZWJwYWNrOi8vRWRpdFRleHRPYmplY3QvLi91aXgtYWRkb25zL3RleHQtb2JqZWN0L3dpZGdldHMvZm9udC1jb2xvci1kcm9wZG93bi9Gb250Q29sb3JEcm9wZG93bkNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9FZGl0VGV4dE9iamVjdC8uL3VpeC1hZGRvbnMvdGV4dC1vYmplY3Qvd2lkZ2V0cy9mb250LWZhbWlseS1zaXplLWRyb3Bkb3duL0ZvbnRGYW1pbHlTaXplQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9FZGl0VGV4dE9iamVjdC8uL3VpeC1hZGRvbnMvdGV4dC1vYmplY3Qvd2lkZ2V0cy9mb250LWZhbWlseS1zaXplLWRyb3Bkb3duL0ZvbnRGYW1pbHlTaXplRHJvcGRvd25Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vRWRpdFRleHRPYmplY3QvLi91aXgtYWRkb25zL3RleHQtb2JqZWN0L3dpZGdldHMvZm9udC1mYW1pbHktc2l6ZS1kcm9wZG93bi9mb250LWZhbWlseS1zaXplLWRyb3Bkb3duLmFydCIsIndlYnBhY2s6Ly9FZGl0VGV4dE9iamVjdC9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiVUlFeHRlbnNpb25cIixcImNvbW1vbmpzMlwiOlwiVUlFeHRlbnNpb25cIixcImFtZFwiOlwiVUlFeHRlbnNpb25cIixcInJvb3RcIjpcIlVJRXh0ZW5zaW9uXCJ9Il0sIm5hbWVzIjpbIlVJRXh0ZW5zaW9uIiwiQWRkVGV4dFN0YXRlQ29udHJvbGxlciIsImdldE5hbWUiLCJjb21wb25lbnQiLCJpc1N0YXRlSW4iLCJtb3VudGVkIiwiZm9udEZhbWlseVNpemVEcm9wZG93biIsImdldENvbXBvbmVudEJ5TmFtZSIsImJvbGRTdHlsZUJ1dHRvbiIsIml0YWxpY1N0eWxlQnV0dG9uIiwiZm9udENvbG9yRHJvcGRvd24iLCJ1cGRhdGVVSUV2ZW50SGFuZGxlciIsInVwZGF0ZVVJRGF0YSIsImFkZERlc3Ryb3lIb29rIiwib24iLCJmb250RmFtaWx5IiwiZ2V0Rm9udEZhbWlseSIsImZvbnRTaXplUHgiLCJnZXRGb250U2l6ZSIsInVuaXRzIiwiUERGVmlld0N0cmwiLCJzaGFyZWQiLCJmb250U2l6ZVB0IiwiUElYRUxfSE9SSVpPTlRBTCIsImNvbnZlcnRUbyIsIlBPSU5UIiwiZm9udEluZm8iLCJ0eXBlIiwic3RhbmRhcmRJZCIsInZhbHVlIiwibmFtZSIsInN0eWxlcyIsInN0eWxlIiwiY2hhcnNldCIsImNvbG9ySU5IZXgiLCJnZXRDb2xvciIsImNvbG9yIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJuZXdUZXh0T2JqZWN0UGFyYW1ldGVyIiwiZm9udFNpemUiLCJ3ZWlnaHQiLCJpc0FjdGl2ZSIsIml0YWxpYyIsImZpbGxDb2xvciIsImZvbnQiLCJnZXRQREZVSSIsImV2ZW50RW1pdHRlciIsImVtaXQiLCJzdGF0ZU91dCIsInN0YXRlSW4iLCJDb25zdHMiLCJQREZEb2NQZXJtaXNzaW9uIiwiTW9kaWZ5RG9jdW1lbnQiLCJTdGF0ZWZ1bENvbnRyb2xsZXIiLCJCb2xkU3R5bGVDb250cm9sbGVyIiwiYWN0aXZlIiwidGV4dE9iamVjdCIsImlzQm9sZCIsImdldE1vZGVsIiwiZGVhY3RpdmUiLCJoYW5kbGUiLCJjdXJyZW50VGV4dE9iamVjdCIsIm1vZGVsIiwic2V0VGV4dCIsImdldFRleHRDaGFyIiwidGhlbiIsInNldEJvbGQiLCJyZUFjdGl2ZSIsIkZvbnRTdHlsZUNvbnRyb2xsZXIiLCJFZGl0VGV4dFN0YXRlQ29udHJvbGxlciIsImV4dCIsIkZvbnRDb2xvckNvbnRyb2xsZXIiLCJhZGRWaWV3ZXJFdmVudExpc3RlbmVyIiwiZW5hYmxlIiwiZm9udENvbG9yIiwiZ2V0RmlsbENvbG9yIiwib3BhY2l0eSIsInJnYiIsInNldENvbG9yIiwiY29udmVydEZyb21OdW1iZXJUb0hleCIsImRpc2FibGUiLCJFdmVudHMiLCJvcGVuRmlsZVN1Y2Nlc3MiLCJzZXRGaWxsQ29sb3IiLCJUZXh0T2JqZWN0QmFzZUNvbnRyb2xsZXIiLCJoZXgiLCJ0b1N0cmluZyIsImxlbiIsImxlbmd0aCIsInBvc3RsaW5rIiwiSXRhbGljU3R5bGVDb250cm9sbGVyIiwiaXNJdGFsaWMiLCJzZXRJdGFsaWMiLCJzd2l0Y2hTdGF0ZUhhbmRsZXIiLCJDdXJyZW50U3RhdGVIYW5kbGVyIiwiZ2V0U3RhdGVOYW1lIiwiY2FuQmVEaXNhYmxlZCIsIkNvbnRyb2xsZXIiLCJVbmRlcmxpbmVTdHlsZUNvbnRyb2xsZXIiLCJpbmZvIiwidGV4dFN0YXRlIiwiYWRkb25OYW1lIiwiYWN0aW9ucyIsIlVJQ29uc3RzIiwiRlJBR01FTlRfQUNUSU9OIiwiQUxJR05NRU5UX0dST1VQIiwiRWRpdFRleHRPYmplY3QiLCJnZXRMb2FkZXIiLCJ0cG1Mb2FkZXIiLCJpbml0IiwibW9kdWxlIiwibW9kdWxhciIsInJlZ2lzdGVyQ29udHJvbGxlciIsIkZvbnRGYW1pbHlTaXplQ29udHJvbGxlciIsInJlZ2lzdGVyQ29tcG9uZW50IiwiRm9udEZhbWlseVNpemVEcm9wZG93bkNvbXBvbmVudCIsIkZvbnRDb2xvckRyb3Bkb3duQ29tcG9uZW50IiwiYmVmb3JlTW91bnRlZCIsInJvb3QiLCJlZGl0VGFiIiwic2hvdyIsImZyYWdtZW50cyIsInRhcmdldCIsImNvbmZpZyIsInJldGFpbkNvdW50IiwiYWN0aW9uIiwiQVBQRU5EIiwidGVtcGxhdGUiLCJBRlRFUiIsIlVJWEFkZG9uIiwiaWNvbkVsZW1lbnQiLCJ0b2dnbGVyIiwiY29sb3JTdGF0dWVzRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiY29sb3JQaWNrZXIiLCJzdG9wUHJvcGFnYXRpb25IYW5kbGVyIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZyZWV6ZUNhbGxiYWNrIiwiZnJlZXplIiwidW5mcmVlemVDYWxsYmFjayIsInVuZnJlZXplIiwiXyIsIm5ld0NvbG9yIiwidXBkYXRlQ29sb3JTdGF0dXMiLCJ0cmlnZ2VyIiwiY29udHJvbGxlciIsIiRjb2xvcklucHV0Iiwib2ZmIiwic2V0VmFsdWUiLCJnZXRWYWx1ZSIsImNzc1RleHQiLCJTZW5pb3JDb21wb25lbnRGYWN0b3J5IiwiY3JlYXRlU3VwZXJDbGFzcyIsImNvbG9ycyIsInRyYW5zcGFyZW50Y2xhc3MiLCJhZGRjbGFzcyIsInJlbW92ZWNsYXNzIiwiZGVsZXRlY2xhc3MiLCJzZWxlY3RlZGNsYXNzIiwibGlnaHRwb3N0bmFtZSIsImRhcmtwb3N0bmFtZSIsIlNUQU5EQVJEX1RZUEUiLCJFWFRfVFlQRSIsIkFkZG9uIiwid2luZG93IiwiYWRkb25JbmZvIiwic3RhbmRhcmRGb250RmFtaWxpZXMiLCJleHRlbnNpb25Gb250RmFtaWxpZXMiLCJmb3JFYWNoIiwiZmYiLCJmb250RmFtaWxpZXMiLCJjb25jYXQiLCJmb250U2l6ZXMiLCJjdXN0b21Gb250U2l6ZXMiLCJzZWxlY3RGb250RmFtaWx5IiwiaW5kZXhPZiIsInNlbGVjdEZvbnRTaXplIiwiZmllbGQiLCJmZnMiLCJpIiwidGV4dCIsImFwcGx5Rm9udEZhbWlseSIsImFwcGx5Rm9udFNpemUiLCJzaXplIiwiZm9udFNpemVJblBpeGVsIiwicmVzb2x2ZUZvbnRGYW1pbHkiLCJnZXRGb250SW5mbyIsImlzU3RhbmRhcmQiLCJzdGYiLCJiYXNlTmFtZSIsInN0YW5kYXJkIiwicHJldmFsdWUiLCJjdXJyZW50Rm9udEZhbWlseSIsInNldFN0YW5kYXJkRm9udCIsInNldEZvbnRCeU5hbWUiLCJjdXJyZW50Rm9udFNpemUiLCJzZXRGb250U2l6ZSIsInJlbmRlckZvbnRGYW1pbHlJdGVtIiwib3B0aW9ucyIsImxvY2FsaXplciIsImNyZWF0ZURPTUVsZW1lbnQiLCJmb250RmFtaWx5RHJvcGRvd25Db21wb25lbnQiLCJmb250U2l6ZURyb3Bkb3duQ29tcG9uZW50IiwiZm9udEZhbWlseURyb3Bkb3duVGV4dCIsInRleHRFbGVtZW50IiwibmV3U2l6ZSIsImNoaWxkIiwiZmluZENoaWxkcmVuIiwiZGF0YSIsInNlbGVjdCIsInNldEVkaXRWYWx1ZSIsImVkaXRPcHRpb25zIiwic3RlcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7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WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJVSUV4dGVuc2lvblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJVSUV4dGVuc2lvblwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJFZGl0VGV4dE9iamVjdFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIlVJRXh0ZW5zaW9uXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJFZGl0VGV4dE9iamVjdFwiXSA9IGZhY3Rvcnkocm9vdFtcIlVJRXh0ZW5zaW9uXCJdKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfVUlFeHRlbnNpb25fXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdWl4LWFkZG9ucy90ZXh0LW9iamVjdC9pbmRleC5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyohIGFydC10ZW1wbGF0ZUBydW50aW1lIHwgaHR0cHM6Ly9naXRodWIuY29tL2F1aS9hcnQtdGVtcGxhdGUgKi9cblxudmFyIGdsb2JhbFRoaXMgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHt9O1xuXG52YXIgcnVudGltZSA9IE9iamVjdC5jcmVhdGUoZ2xvYmFsVGhpcyk7XG52YXIgRVNDQVBFX1JFRyA9IC9bXCImJzw+XS87XG5cbi8qKlxuICog57yW56CB5qih5p2/6L6T5Ye655qE5YaF5a65XG4gKiBAcGFyYW0gIHthbnl9ICAgICAgICBjb250ZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnJ1bnRpbWUuJGVzY2FwZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgcmV0dXJuIHhtbEVzY2FwZSh0b1N0cmluZyhjb250ZW50KSk7XG59O1xuXG4vKipcbiAqIOi/reS7o+WZqO+8jOaUr+aMgeaVsOe7hOS4juWvueixoVxuICogQHBhcmFtIHthcnJheXxPYmplY3R9IGRhdGFcbiAqIEBwYXJhbSB7ZnVuY3Rpb259ICAgICBjYWxsYmFja1xuICovXG5ydW50aW1lLiRlYWNoID0gZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbaV0sIGkpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgX2kgaW4gZGF0YSkge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YVtfaV0sIF9pKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIOWwhuebruagh+i9rOaIkOWtl+esplxuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdG9TdHJpbmcodmFsdWUuY2FsbCh2YWx1ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbi8vIOe8lueggSBIVE1MIOWGheWuuVxuZnVuY3Rpb24geG1sRXNjYXBlKGNvbnRlbnQpIHtcbiAgICB2YXIgaHRtbCA9ICcnICsgY29udGVudDtcbiAgICB2YXIgcmVnZXhSZXN1bHQgPSBFU0NBUEVfUkVHLmV4ZWMoaHRtbCk7XG4gICAgaWYgKCFyZWdleFJlc3VsdCkge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGkgPSB2b2lkIDAsXG4gICAgICAgIGxhc3RJbmRleCA9IHZvaWQgMCxcbiAgICAgICAgY2hhciA9IHZvaWQgMDtcbiAgICBmb3IgKGkgPSByZWdleFJlc3VsdC5pbmRleCwgbGFzdEluZGV4ID0gMDsgaSA8IGh0bWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzM0Oyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiMzODsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjMzk7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjA6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzYwOyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDYyOlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiM2MjsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXN0SW5kZXggIT09IGkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgICAgIHJlc3VsdCArPSBjaGFyO1xuICAgIH1cblxuICAgIGlmIChsYXN0SW5kZXggIT09IGkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcnVudGltZTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21waWxlL3J1bnRpbWUnKTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gbnVsbDtcbiAgICAiLCJpbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRUZXh0U3RhdGVDb250cm9sbGVyIGV4dGVuZHMgVUlFeHRlbnNpb24uU3RhdGVmdWxDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdBZGRUZXh0U3RhdGVDb250cm9sbGVyJztcbiAgICB9XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50KSB7XG4gICAgICAgIHN1cGVyKGNvbXBvbmVudCwgJ2FkZC10ZXh0LW9iamVjdCcpO1xuICAgICAgICB0aGlzLmlzU3RhdGVJbiA9IGZhbHNlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHBlcm1pc3Npb24oKXtcbiAgICAgICAgcmV0dXJuIFVJRXh0ZW5zaW9uLlBERlZpZXdDdHJsLkNvbnN0cy5QREZEb2NQZXJtaXNzaW9uLk1vZGlmeURvY3VtZW50O1xuICAgIH1cbiAgICBtb3VudGVkKCkge1xuICAgICAgICBzdXBlci5tb3VudGVkKCk7XG4gICAgICAgIGNvbnN0IGZvbnRGYW1pbHlTaXplRHJvcGRvd24gPSB0aGlzLmdldENvbXBvbmVudEJ5TmFtZSgnYWRkb24tdGV4dG9iamVjdC1mb250LWZhbWlseS1zaXplLWRyb3Bkb3duJyk7XG4gICAgICAgIGNvbnN0IGJvbGRTdHlsZUJ1dHRvbiA9IHRoaXMuZ2V0Q29tcG9uZW50QnlOYW1lKCdhZGRvbi10ZXh0b2JqZWN0LWJvbGQtc3R5bGUnKTtcbiAgICAgICAgY29uc3QgaXRhbGljU3R5bGVCdXR0b24gPSB0aGlzLmdldENvbXBvbmVudEJ5TmFtZSgnYWRkb24tdGV4dG9iamVjdC1pdGFsaWMtc3R5bGUnKTtcbiAgICAgICAgY29uc3QgZm9udENvbG9yRHJvcGRvd24gPSB0aGlzLmdldENvbXBvbmVudEJ5TmFtZSgnYWRkb24tdGV4dG9iamVjdC1mb250LWNvbG9yJyk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZVVJRXZlbnRIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1N0YXRlSW4gJiYgdGhpcy51cGRhdGVVSURhdGEoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZERlc3Ryb3lIb29rKFxuICAgICAgICAgICAgZm9udEZhbWlseVNpemVEcm9wZG93bi5vbignY2hhbmdlJywgdXBkYXRlVUlFdmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgYm9sZFN0eWxlQnV0dG9uLm9uKCdhY3RpdmUnLCB1cGRhdGVVSUV2ZW50SGFuZGxlciksXG4gICAgICAgICAgICBpdGFsaWNTdHlsZUJ1dHRvbi5vbignYWN0aXZlJywgdXBkYXRlVUlFdmVudEhhbmRsZXIpLFxuICAgICAgICAgICAgYm9sZFN0eWxlQnV0dG9uLm9uKCdkZWFjdGl2ZScsIHVwZGF0ZVVJRXZlbnRIYW5kbGVyKSxcbiAgICAgICAgICAgIGl0YWxpY1N0eWxlQnV0dG9uLm9uKCdkZWFjdGl2ZScsIHVwZGF0ZVVJRXZlbnRIYW5kbGVyKSxcbiAgICAgICAgICAgIGZvbnRDb2xvckRyb3Bkb3duLm9uKCdjaGFuZ2UnLCB1cGRhdGVVSUV2ZW50SGFuZGxlcilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5mb250RmFtaWx5U2l6ZURyb3Bkb3duID0gZm9udEZhbWlseVNpemVEcm9wZG93bjtcbiAgICAgICAgdGhpcy5ib2xkU3R5bGVCdXR0b24gPSBib2xkU3R5bGVCdXR0b247XG4gICAgICAgIHRoaXMuaXRhbGljU3R5bGVCdXR0b24gPSBpdGFsaWNTdHlsZUJ1dHRvbjtcbiAgICAgICAgdGhpcy5mb250Q29sb3JEcm9wZG93biA9IGZvbnRDb2xvckRyb3Bkb3duO1xuICAgIH1cbiAgICB1cGRhdGVVSURhdGEoKSB7XG4gICAgICAgIGNvbnN0IGZvbnRGYW1pbHkgPSB0aGlzLmZvbnRGYW1pbHlTaXplRHJvcGRvd24uZ2V0Rm9udEZhbWlseSgpO1xuICAgICAgICBjb25zdCBmb250U2l6ZVB4ID0gdGhpcy5mb250RmFtaWx5U2l6ZURyb3Bkb3duLmdldEZvbnRTaXplKCk7XG4gICAgICAgIGNvbnN0IHVuaXRzID0gVUlFeHRlbnNpb24uUERGVmlld0N0cmwuc2hhcmVkLnVuaXRzO1xuICAgICAgICBjb25zdCBmb250U2l6ZVB0ID0gdW5pdHMuUElYRUxfSE9SSVpPTlRBTC5jb252ZXJ0VG8oZm9udFNpemVQeCwgdW5pdHMuUE9JTlQpO1xuXG4gICAgICAgIGxldCBmb250SW5mbyA9IHt9O1xuICAgICAgICBzd2l0Y2ggKGZvbnRGYW1pbHkudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnc3RhbmRhcmQnOlxuICAgICAgICAgICAgICAgIGZvbnRJbmZvLnN0YW5kYXJkSWQgPSBmb250RmFtaWx5LnZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXh0JzpcbiAgICAgICAgICAgICAgICBmb250SW5mby5uYW1lID0gZm9udEZhbWlseS5uYW1lO1xuICAgICAgICAgICAgICAgIGZvbnRJbmZvLnN0eWxlcyA9IGZvbnRGYW1pbHkuc3R5bGU7XG4gICAgICAgICAgICAgICAgZm9udEluZm8uY2hhcnNldCA9IGZvbnRGYW1pbHkuY2hhcnNldDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2xvcklOSGV4ID0gdGhpcy5mb250Q29sb3JEcm9wZG93bi5nZXRDb2xvcigpO1xuICAgICAgICBsZXQgY29sb3IgPSAwO1xuICAgICAgICBpZiAoY29sb3JJTkhleCAhPT0gJ3RyYW5zcGFyZW50Jykge1xuICAgICAgICAgICAgY29sb3IgPSAweEZGMDAwMDAwIHwgcGFyc2VJbnQoY29sb3JJTkhleC5zdWJzdHJpbmcoMSksIDE2KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdUZXh0T2JqZWN0UGFyYW1ldGVyID0ge1xuICAgICAgICAgICAgZm9udFNpemU6IGZvbnRTaXplUHQsXG4gICAgICAgICAgICB3ZWlnaHQ6IHRoaXMuYm9sZFN0eWxlQnV0dG9uLmlzQWN0aXZlID8gNzAwIDogNDAwLFxuICAgICAgICAgICAgaXRhbGljOiB0aGlzLml0YWxpY1N0eWxlQnV0dG9uLmlzQWN0aXZlLFxuICAgICAgICAgICAgZmlsbENvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIGZvbnQ6IGZvbnRJbmZvXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0UERGVUkoKS5ldmVudEVtaXR0ZXIuZW1pdChcbiAgICAgICAgICAgICdhZGQtdGV4dC1vYmplY3QtcGFyYW0tdHJhbnNmZXInLFxuICAgICAgICAgICAgbmV3VGV4dE9iamVjdFBhcmFtZXRlclxuICAgICAgICApO1xuICAgIH1cbiAgICBzdGF0ZU91dCgpIHtcbiAgICAgICAgdGhpcy5pc1N0YXRlSW4gPSBmYWxzZTtcbiAgICB9XG4gICAgc3RhdGVJbigpIHtcbiAgICAgICAgdGhpcy5pc1N0YXRlSW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVVJRGF0YSgpO1xuICAgIH1cbn0iLCJpbXBvcnQgRm9udFN0eWxlQ29udHJvbGxlciBmcm9tICcuL0ZvbnRTdHlsZUNvbnRyb2xsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2xkU3R5bGVDb250cm9sbGVyIGV4dGVuZHMgRm9udFN0eWxlQ29udHJvbGxlciB7XG4gICAgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnQm9sZFN0eWxlQ29udHJvbGxlcic7XG4gICAgfVxuICAgIGFjdGl2ZSh0ZXh0T2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGlzQm9sZCA9IHRleHRPYmplY3QuZ2V0TW9kZWwoKS5pc0JvbGQoKTtcbiAgICAgICAgaWYgKGlzQm9sZCkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuYWN0aXZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5kZWFjdGl2ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRUZXh0T2JqZWN0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5pc0FjdGl2ZSA/IHRoaXMuY29tcG9uZW50LmRlYWN0aXZlKCkgOiB0aGlzLmNvbXBvbmVudC5hY3RpdmUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMuY3VycmVudFRleHRPYmplY3QuZ2V0TW9kZWwoKTtcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50LmlzQWN0aXZlKSB7XG4gICAgICAgICAgICBtb2RlbC5zZXRUZXh0KHRoaXMuY3VycmVudFRleHRPYmplY3QuZ2V0VGV4dENoYXIoKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsLnNldEJvbGQoZmFsc2UpXG4gICAgICAgICAgICB9KS50aGVuKF8gPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuY29tcG9uZW50LmRlYWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGV4dE9iamVjdC5yZUFjdGl2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2RlbC5zZXRUZXh0KHRoaXMuY3VycmVudFRleHRPYmplY3QuZ2V0VGV4dENoYXIoKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsLnNldEJvbGQodHJ1ZSlcbiAgICAgICAgICAgIH0pLnRoZW4oXyA9PiB7XG4gICAgICAgICAgICAgICAgLy90aGlzLmNvbXBvbmVudC5hY3RpdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUZXh0T2JqZWN0LnJlQWN0aXZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5jb25zdCBFZGl0VGV4dFN0YXRlQ29udHJvbGxlciA9IFVJRXh0ZW5zaW9uLlN0YXRlZnVsQ29udHJvbGxlci5leHQoJ2VkaXQtdGV4dCcsICdFZGl0VGV4dFN0YXRlQ29udHJvbGxlcicpO1xuZXhwb3J0IGRlZmF1bHQgRWRpdFRleHRTdGF0ZUNvbnRyb2xsZXI7IiwiaW1wb3J0ICogYXMgVUlFeHRlbnNpb24gZnJvbSAnVUlFeHRlbnNpb24nO1xuaW1wb3J0IFRleHRPYmplY3RCYXNlQ29udHJvbGxlciBmcm9tICcuL1RleHRPYmplY3RCYXNlQ29udHJvbGxlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb250Q29sb3JDb250cm9sbGVyIGV4dGVuZHMgVGV4dE9iamVjdEJhc2VDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdGb250Q29sb3JDb250cm9sbGVyJztcbiAgICB9XG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgc3VwZXIubW91bnRlZCgpO1xuICAgICAgICB0aGlzLmFkZERlc3Ryb3lIb29rKFxuICAgICAgICAgICAgdGhpcy5nZXRQREZVSSgpLmFkZFZpZXdlckV2ZW50TGlzdGVuZXIoJ3RleHQtb2JqZWN0LWFjdGl2ZScsIHRleHRPYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRleHRPYmplY3QgPSB0ZXh0T2JqZWN0O1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGVsID0gdGV4dE9iamVjdC5nZXRNb2RlbCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvbnRDb2xvciA9IG1vZGVsLmdldEZpbGxDb2xvcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wYWNpdHkgPSAoZm9udENvbG9yID4+IDI0KSAmIDB4ZmY7XG4gICAgICAgICAgICAgICAgY29uc3QgcmdiID0gZm9udENvbG9yICYgMHhGRkZGRkY7XG4gICAgICAgICAgICAgICAgaWYob3BhY2l0eSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5zZXRDb2xvcigndHJhbnNwYXJlbnQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5zZXRDb2xvcihjb252ZXJ0RnJvbU51bWJlclRvSGV4KHJnYikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5nZXRQREZVSSgpLmFkZFZpZXdlckV2ZW50TGlzdGVuZXIoJ3RleHQtb2JqZWN0LXVuYWN0aXZlJywgKHRleHRPYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUZXh0T2JqZWN0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5kaXNhYmxlKCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMuZ2V0UERGVUkoKS5hZGRWaWV3ZXJFdmVudExpc3RlbmVyKFVJRXh0ZW5zaW9uLlBERlZpZXdDdHJsLkV2ZW50cy5vcGVuRmlsZVN1Y2Nlc3MsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5kaXNhYmxlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbiAgICBoYW5kbGUoY29sb3IpIHtcbiAgICAgICAgaWYoIXRoaXMuY3VycmVudFRleHRPYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMuY3VycmVudFRleHRPYmplY3QuZ2V0TW9kZWwoKTtcbiAgICAgICAgaWYoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgICAgIG1vZGVsLnNldFRleHQodGhpcy5jdXJyZW50VGV4dE9iamVjdC5nZXRUZXh0Q2hhcigpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWwuc2V0RmlsbENvbG9yKDApO1xuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGV4dE9iamVjdC5yZUFjdGl2ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZGVsLnNldFRleHQodGhpcy5jdXJyZW50VGV4dE9iamVjdC5nZXRUZXh0Q2hhcigpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZ2IgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSksIDE2KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWwuc2V0RmlsbENvbG9yKCgweEZGIDw8IDI0KSB8IHJnYik7XG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUZXh0T2JqZWN0LnJlQWN0aXZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0RnJvbU51bWJlclRvSGV4KGNvbG9yKSB7XG4gICAgaWYoY29sb3IgPCAwKSB7XG4gICAgICAgIHJldHVybiAnIzAwMDAwMCc7XG4gICAgfVxuICAgIGxldCBoZXggPSBjb2xvci50b1N0cmluZygxNik7XG4gICAgbGV0IGxlbiA9IDY7IFxuICAgIGlmKGNvbG9yID4gMHhGRkZGRkYpIHtcbiAgICAgICAgbGVuID0gODtcbiAgICB9XG4gICAgd2hpbGUoaGV4Lmxlbmd0aCA8IGxlbikge1xuICAgICAgICBoZXggPSAnMCcgKyBoZXg7XG4gICAgfVxuICAgIHJldHVybiBgI2AgKyBoZXg7XG59IiwiaW1wb3J0IFRleHRPYmplY3RCYXNlQ29udHJvbGxlciBmcm9tICcuL1RleHRPYmplY3RCYXNlQ29udHJvbGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbnRTdHlsZUNvbnRyb2xsZXIgZXh0ZW5kcyBUZXh0T2JqZWN0QmFzZUNvbnRyb2xsZXIge1xuICAgIHBvc3RsaW5rKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5kaXNhYmxlKCk7XG4gICAgICAgIHRoaXMuYWRkRGVzdHJveUhvb2soXG4gICAgICAgICAgICB0aGlzLmdldFBERlVJKCkuYWRkVmlld2VyRXZlbnRMaXN0ZW5lcigndGV4dC1vYmplY3QtYWN0aXZlJywgdGV4dE9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGV4dE9iamVjdCA9IHRleHRPYmplY3Q7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUodGV4dE9iamVjdCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMuZ2V0UERGVUkoKS5hZGRWaWV3ZXJFdmVudExpc3RlbmVyKCd0ZXh0LW9iamVjdC11bmFjdGl2ZScsICh0ZXh0T2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGV4dE9iamVjdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWFjdGl2ZSh0ZXh0T2JqZWN0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5kaXNhYmxlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbiAgICBhY3RpdmUodGV4dE9iamVjdCkge31cbiAgICBkZWFjdGl2ZSh0ZXh0T2JqZWN0KSB7XG4gICAgICAgIC8vIHRoaXMuY29tcG9uZW50LmRlYWN0aXZlKCk7XG4gICAgfVxufSIsImltcG9ydCBGb250U3R5bGVDb250cm9sbGVyIGZyb20gJy4vRm9udFN0eWxlQ29udHJvbGxlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGFsaWNTdHlsZUNvbnRyb2xsZXIgZXh0ZW5kcyBGb250U3R5bGVDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdJdGFsaWNTdHlsZUNvbnRyb2xsZXInO1xuICAgIH1cbiAgICBhY3RpdmUodGV4dE9iamVjdCkge1xuICAgICAgICAvLyBjb25zb2xlLmluZm8odGV4dE9iamVjdC5nZXRNb2RlbCgpLmlzSXRhbGljKCkpO1xuICAgICAgICBjb25zdCBpc0l0YWxpYyA9IHRleHRPYmplY3QuZ2V0TW9kZWwoKS5pc0l0YWxpYygpO1xuICAgICAgICAvLyBjb25zdCBmb250SW5mbyA9IHRleHRPYmplY3QuZ2V0TW9kZWwoKS5pbmZvLnRleHRTdGF0ZS5mb250O1xuICAgICAgICBpZiAoaXNJdGFsaWMpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmFjdGl2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZGVhY3RpdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50VGV4dE9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuaXNBY3RpdmUgPyB0aGlzLmNvbXBvbmVudC5kZWFjdGl2ZSgpIDogdGhpcy5jb21wb25lbnQuYWN0aXZlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kZWwgPSB0aGlzLmN1cnJlbnRUZXh0T2JqZWN0LmdldE1vZGVsKCk7XG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudC5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgbW9kZWwuc2V0VGV4dCh0aGlzLmN1cnJlbnRUZXh0T2JqZWN0LmdldFRleHRDaGFyKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbC5zZXRJdGFsaWMoZmFsc2UpXG4gICAgICAgICAgICB9KS50aGVuKF8gPT4ge1xuICAgICAgICAgICAgICAgIC8vdGhpcy5jb21wb25lbnQuZGVhY3RpdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUZXh0T2JqZWN0LnJlQWN0aXZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZGVsLnNldFRleHQodGhpcy5jdXJyZW50VGV4dE9iamVjdC5nZXRUZXh0Q2hhcigpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWwuc2V0SXRhbGljKHRydWUpXG4gICAgICAgICAgICB9KS50aGVuKF8gPT4ge1xuICAgICAgICAgICAgICAgIC8vdGhpcy5jb21wb25lbnQuYWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGV4dE9iamVjdC5yZUFjdGl2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgVUlFeHRlbnNpb24gZnJvbSAnVUlFeHRlbnNpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0T2JqZWN0QmFzZUNvbnRyb2xsZXIgZXh0ZW5kcyBVSUV4dGVuc2lvbi5Db250cm9sbGVyIHtcbiAgICBtb3VudGVkKCl7XG4gICAgICAgIHN1cGVyLm1vdW50ZWQoKTtcbiAgICAgICAgdGhpcy5hZGREZXN0cm95SG9vayhcbiAgICAgICAgICAgIHRoaXMuZ2V0UERGVUkoKS5hZGRWaWV3ZXJFdmVudExpc3RlbmVyKFVJRXh0ZW5zaW9uLlBERlZpZXdDdHJsLkV2ZW50cy5zd2l0Y2hTdGF0ZUhhbmRsZXIsIChDdXJyZW50U3RhdGVIYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKEN1cnJlbnRTdGF0ZUhhbmRsZXIuZ2V0U3RhdGVOYW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWRkLXRleHQtb2JqZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAnZWRpdC10ZXh0JzpcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAnZWRpdC1hbGwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jYW5CZURpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5jYW5CZURpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmRpc2FibGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbn0gIiwiaW1wb3J0IEZvbnRTdHlsZUNvbnRyb2xsZXIgZnJvbSAnLi9Gb250U3R5bGVDb250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5kZXJsaW5lU3R5bGVDb250cm9sbGVyIGV4dGVuZHMgRm9udFN0eWxlQ29udHJvbGxlciB7XG4gICAgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnVW5kZXJsaW5lU3R5bGVDb250cm9sbGVyJztcbiAgICB9XG4gICAgYWN0aXZlKHRleHRPYmplY3QpIHtcbiAgICAgICAgY29uc3QgZm9udEluZm8gPSB0ZXh0T2JqZWN0LmdldE1vZGVsKCkuaW5mby50ZXh0U3RhdGUuZm9udDtcbiAgICAgICAgLy8gaWYoZm9udEluZm8uaXNJdGFsaWMpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuYWN0aXZlKCk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLmRlYWN0aXZlKCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGluYyBvbiAyMDE5LzYvMjEuXG4gKi9cbmltcG9ydCAqIGFzIFVJRXh0ZW5zaW9uIGZyb20gJ1VJRXh0ZW5zaW9uJztcbmltcG9ydCB0cG1Mb2FkZXIgZnJvbSAnLi9hZGRvbi5pbmZvLmpzb24nO1xuaW1wb3J0ICcuL3Njc3MvaW5kZXguc2Nzcyc7XG5pbXBvcnQgRm9udEZhbWlseVNpemVDb250cm9sbGVyIGZyb20gJy4vd2lkZ2V0cy9mb250LWZhbWlseS1zaXplLWRyb3Bkb3duL0ZvbnRGYW1pbHlTaXplQ29udHJvbGxlcic7XG5pbXBvcnQgRm9udEZhbWlseVNpemVEcm9wZG93bkNvbXBvbmVudCBmcm9tICcuL3dpZGdldHMvZm9udC1mYW1pbHktc2l6ZS1kcm9wZG93bi9Gb250RmFtaWx5U2l6ZURyb3Bkb3duQ29tcG9uZW50JztcbmltcG9ydCBCb2xkU3R5bGVDb250cm9sbGVyIGZyb20gJy4vYml6L0JvbGRTdHlsZUNvbnRyb2xsZXInO1xuaW1wb3J0IEl0YWxpY1N0eWxlQ29udHJvbGxlciBmcm9tICcuL2Jpei9JdGFsaWNTdHlsZUNvbnRyb2xsZXInO1xuaW1wb3J0IFVuZGVybGluZVN0eWxlQ29udHJvbGxlciBmcm9tICcuL2Jpei9VbmRlcmxpbmVTdHlsZUNvbnRyb2xsZXInO1xuaW1wb3J0IEZvbnRDb2xvckRyb3Bkb3duQ29tcG9uZW50IGZyb20gJy4vd2lkZ2V0cy9mb250LWNvbG9yLWRyb3Bkb3duL0ZvbnRDb2xvckRyb3Bkb3duQ29tcG9uZW50LmpzJztcbmltcG9ydCBGb250Q29sb3JDb250cm9sbGVyIGZyb20gJy4vYml6L0ZvbnRDb2xvckNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IEFkZFRleHRTdGF0ZUNvbnRyb2xsZXIgZnJvbSAnLi9iaXovQWRkVGV4dFN0YXRlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgRWRpdFRleHRTdGF0ZUNvbnRyb2xsZXIgZnJvbSAnLi9iaXovRWRpdFRleHRTdGF0ZUNvbnRyb2xsZXIuanMnO1xuXG5jb25zdCBhZGRvbk5hbWUgPSAnZWRpdFRleHRPYmplY3QnO1xuXG5jb25zdCBhY3Rpb25zID0gVUlFeHRlbnNpb24uVUlDb25zdHMuRlJBR01FTlRfQUNUSU9OO1xuXG5jb25zdCBBTElHTk1FTlRfR1JPVVAgPSAnZWRpdC10YWItZ3JvdXAtZm9udC1hbGlnbm1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0VGV4dE9iamVjdCBleHRlbmRzIFVJRXh0ZW5zaW9uLlVJWEFkZG9uIHtcbiAgICBzdGF0aWMgZ2V0TmFtZSAoKSB7XG4gICAgICAgIHJldHVybiBhZGRvbk5hbWU7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRMb2FkZXIoKSB7XG4gICAgICAgIHJldHVybiB0cG1Mb2FkZXI7XG4gICAgfVxuICAgIGluaXQgKCkge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSBVSUV4dGVuc2lvbi5tb2R1bGFyLm1vZHVsZSAoJ2VkaXQtdGV4dC1vYmplY3QnLCBbXSk7XG4gICAgICAgIG1vZHVsZS5yZWdpc3RlckNvbnRyb2xsZXIoRm9udEZhbWlseVNpemVDb250cm9sbGVyKTtcbiAgICAgICAgbW9kdWxlLnJlZ2lzdGVyQ29udHJvbGxlcihCb2xkU3R5bGVDb250cm9sbGVyKTtcbiAgICAgICAgbW9kdWxlLnJlZ2lzdGVyQ29udHJvbGxlcihJdGFsaWNTdHlsZUNvbnRyb2xsZXIpO1xuICAgICAgICBtb2R1bGUucmVnaXN0ZXJDb250cm9sbGVyKFVuZGVybGluZVN0eWxlQ29udHJvbGxlcik7XG4gICAgICAgIG1vZHVsZS5yZWdpc3RlckNvbnRyb2xsZXIoRm9udENvbG9yQ29udHJvbGxlcik7XG4gICAgICAgIG1vZHVsZS5yZWdpc3RlckNvbnRyb2xsZXIoQWRkVGV4dFN0YXRlQ29udHJvbGxlcik7XG4gICAgICAgIG1vZHVsZS5yZWdpc3RlckNvbnRyb2xsZXIoRWRpdFRleHRTdGF0ZUNvbnRyb2xsZXIpO1xuICAgICAgICBtb2R1bGUucmVnaXN0ZXJDb21wb25lbnQoRm9udEZhbWlseVNpemVEcm9wZG93bkNvbXBvbmVudCk7XG4gICAgICAgIG1vZHVsZS5yZWdpc3RlckNvbXBvbmVudChGb250Q29sb3JEcm9wZG93bkNvbXBvbmVudCk7XG4gICAgfVxuICAgIGJlZm9yZU1vdW50ZWQocm9vdCkge1xuICAgICAgICBjb25zdCBlZGl0VGFiID0gcm9vdC5nZXRDb21wb25lbnRCeU5hbWUoJ2VkaXQtdGFiJyk7XG4gICAgICAgIGVkaXRUYWIgJiYgZWRpdFRhYi5zaG93KCk7XG4gICAgfVxuICAgIGZyYWdtZW50cyAoKSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgdGFyZ2V0OiAnZWRpdC10YWItZ3JvdXAtZm9udCcsXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICByZXRhaW5Db3VudDogNVxuICAgICAgICAgICAgfVxuICAgICAgICB9LHtcbiAgICAgICAgICAgIHRhcmdldDogJ2VkaXQtdGFiLWdyb3VwLW1vZGUnLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25zLkFQUEVORCxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgPHhidXR0b24gaWNvbi1jbGFzcz1cImZ2X19pY29uLWFkZG9uLXRleHRvYmplY3QtYWRkLXRleHRcIiBAY29udHJvbGxlcj1cImVkaXQtdGV4dC1vYmplY3Q6QWRkVGV4dFN0YXRlQ29udHJvbGxlclwiIEB0b29sdGlwIHRvb2x0aXAtdGl0bGU9XCJlZGl0LXRleHQ6YnV0dG9ucy5hZGRUZXh0XCI+ZWRpdC10ZXh0OmJ1dHRvbnMuYWRkVGV4dDwveGJ1dHRvbj5gXG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGFyZ2V0OiAnZWRpdC10YWItZ3JvdXAtZm9udCcsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbnMuQVBQRU5ELFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZWRpdC10ZXh0LW9iamVjdDpmb250LWZhbWlseS1zaXplLWRyb3Bkb3duIG5hbWU9XCJhZGRvbi10ZXh0b2JqZWN0LWZvbnQtZmFtaWx5LXNpemUtZHJvcGRvd25cIj4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRhcmdldDogJ2VkaXQtdGFiLWdyb3VwLWZvbnQnLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25zLkFQUEVORCxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPHhidXR0b24gbmFtZT1cImFkZG9uLXRleHRvYmplY3QtYm9sZC1zdHlsZVwiIGljb24tY2xhc3M9XCJmdl9faWNvbi1hZGRvbi10ZXh0b2JqZWN0LWJvbGRcIiBAY29udHJvbGxlcj1cImVkaXQtdGV4dC1vYmplY3Q6Qm9sZFN0eWxlQ29udHJvbGxlclwiIEB0b29sdGlwIHRvb2x0aXAtdGl0bGU9XCJlZGl0LXRleHQ6YnV0dG9ucy5lZGl0Rm9udFdlaWdodFwiPmVkaXQtdGV4dDpidXR0b25zLmVkaXRGb250V2VpZ2h0PC94YnV0dG9uPidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdGFyZ2V0OiAnZWRpdC10YWItZ3JvdXAtZm9udCcsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbnMuQVBQRU5ELFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8eGJ1dHRvbiBuYW1lPVwiYWRkb24tdGV4dG9iamVjdC1pdGFsaWMtc3R5bGVcIiBpY29uLWNsYXNzPVwiZnZfX2ljb24tYWRkb24tdGV4dG9iamVjdC1pdGFsaWNcIiBAY29udHJvbGxlcj1cImVkaXQtdGV4dC1vYmplY3Q6SXRhbGljU3R5bGVDb250cm9sbGVyXCIgQHRvb2x0aXAgdG9vbHRpcC10aXRsZT1cImVkaXQtdGV4dDpidXR0b25zLmVkaXRGb250SXRhbGljXCI+ZWRpdC10ZXh0OmJ1dHRvbnMuZWRpdEZvbnRJdGFsaWM8L3hidXR0b24+J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0YXJnZXQ6ICdlZGl0LXRhYi1ncm91cC1mb250JyxcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9ucy5BUFBFTkQsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzx4YnV0dG9uIGljb24tY2xhc3M9XCJmdl9faWNvbi1hZGRvbi10ZXh0b2JqZWN0LXVuZGVybGluZVwiIEBjb250cm9sbGVyPVwiZWRpdC10ZXh0LW9iamVjdDpVbmRlcmxpbmVTdHlsZUNvbnRyb2xsZXJcIiB2aXNpYmxlPVwiZmFsc2VcIiBAdG9vbHRpcCB0b29sdGlwLXRpdGxlPVwiZWRpdC10ZXh0OmJ1dHRvbnMudW5kZXJsaW5lXCI+ZWRpdC10ZXh0OmJ1dHRvbnMudW5kZXJsaW5lPC94YnV0dG9uPidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdGFyZ2V0OiAnZWRpdC10YWItZ3JvdXAtZm9udCcsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbnMuQVBQRU5ELFxuICAgICAgICAgICAgdGVtcGxhdGU6IGA8ZWRpdC10ZXh0LW9iamVjdDp0ZXh0LWNvbG9yLXBpY2tlciBuYW1lPVwiYWRkb24tdGV4dG9iamVjdC1mb250LWNvbG9yXCIgQGNvbnRyb2xsZXI9XCJlZGl0LXRleHQtb2JqZWN0OkZvbnRDb2xvckNvbnRyb2xsZXJcIj5gXG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGFyZ2V0OiAnZWRpdC10YWItZ3JvdXAtZm9udCcsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbnMuQUZURVIsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYDxncm91cCBuYW1lPVwiJHtBTElHTk1FTlRfR1JPVVB9XCIgdmlzaWJsZT1cImZhbHNlXCI+YFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0YXJnZXQ6IEFMSUdOTUVOVF9HUk9VUCxcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9ucy5BUFBFTkQsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYDx4YnV0dG9uIGljb24tY2xhc3M9XCJmdl9faWNvbi1hZGRvbi10ZXh0b2JqZWN0LWFsaWduLWxlZnRcIiBAdG9vbHRpcCB0b29sdGlwLXRpdGxlPVwiZWRpdC10ZXh0OmJ1dHRvbnMuYWxpZ25MZWZ0XCI+ZWRpdC10ZXh0OmJ1dHRvbnMuYWxpZ25MZWZ0PC94YnV0dG9uPmBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdGFyZ2V0OiBBTElHTk1FTlRfR1JPVVAsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbnMuQVBQRU5ELFxuICAgICAgICAgICAgdGVtcGxhdGU6IGA8eGJ1dHRvbiBpY29uLWNsYXNzPVwiZnZfX2ljb24tYWRkb24tdGV4dG9iamVjdC1hbGlnbi1jZW50ZXJcIiBAdG9vbHRpcCB0b29sdGlwLXRpdGxlPVwiZWRpdC10ZXh0OmJ1dHRvbnMuYWxpZ25DZW50ZXJcIj5lZGl0LXRleHQ6YnV0dG9ucy5hbGlnbkNlbnRlcjwveGJ1dHRvbj5gXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRhcmdldDogQUxJR05NRU5UX0dST1VQLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25zLkFQUEVORCxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgPHhidXR0b24gaWNvbi1jbGFzcz1cImZ2X19pY29uLWFkZG9uLXRleHRvYmplY3QtYWxpZ24tanVzdGlmeVwiIEB0b29sdGlwIHRvb2x0aXAtdGl0bGU9XCJlZGl0LXRleHQ6YnV0dG9ucy5hbGlnbkp1c3RpZnlcIj5lZGl0LXRleHQ6YnV0dG9ucy5hbGlnbkp1c3RpZnk8L3hidXR0b24+YFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0YXJnZXQ6IEFMSUdOTUVOVF9HUk9VUCxcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9ucy5BUFBFTkQsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYDx4YnV0dG9uIGljb24tY2xhc3M9XCJmdl9faWNvbi1hZGRvbi10ZXh0b2JqZWN0LWxpbmUtc3BhY2luZ1wiIEB0b29sdGlwIHRvb2x0aXAtdGl0bGU9XCJlZGl0LXRleHQ6YnV0dG9ucy5saW5lU3BhY2luZ1wiPmVkaXQtdGV4dDpidXR0b25zLmxpbmVTcGFjaW5nPC94YnV0dG9uPmBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdGFyZ2V0OiBBTElHTk1FTlRfR1JPVVAsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbnMuQVBQRU5ELFxuICAgICAgICAgICAgdGVtcGxhdGU6IGA8eGJ1dHRvbiBpY29uLWNsYXNzPVwiZnZfX2ljb24tYWRkb24tdGV4dG9iamVjdC13b3JkLXNwYWNpbmdcIiBAdG9vbHRpcCB0b29sdGlwLXRpdGxlPVwiZWRpdC10ZXh0OmJ1dHRvbnMud29yZFNwYWNpbmdcIj5lZGl0LXRleHQ6YnV0dG9ucy53b3JkU3BhY2luZzwveGJ1dHRvbj5gXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRhcmdldDogQUxJR05NRU5UX0dST1VQLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25zLkFQUEVORCxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgPHhidXR0b24gaWNvbi1jbGFzcz1cImZ2X19pY29uLWFkZG9uLXRleHRvYmplY3QtY2hhcmFjdGVyLXNjYWxlXCIgQHRvb2x0aXAgdG9vbHRpcC10aXRsZT1cImVkaXQtdGV4dDpidXR0b25zLmNoYXJhY3RlclNjYWxlXCI+ZWRpdC10ZXh0OmJ1dHRvbnMuY2hhcmFjdGVyU2NhbGU8L3hidXR0b24+YFxuICAgICAgICB9XTtcbiAgICB9XG59XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCAqIGFzIFVJRXh0ZW5zaW9uIGZyb20gJ1VJRXh0ZW5zaW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9udENvbG9yRHJvcGRvd25Db21wb25lbnQgZXh0ZW5kcyBVSUV4dGVuc2lvbi5TZW5pb3JDb21wb25lbnRGYWN0b3J5LmNyZWF0ZVN1cGVyQ2xhc3Moe1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkcm9wZG93biBjbGFzcz1cImZ2X191aS1hZGRvbi10ZXh0b2JqZWN0LWZvbnQtY29sb3JcIiBpY29uLWNsYXNzPVwiZnZfX2ljb24tYWRkb24tdGV4dG9iamVjdC1mb250LWNvbG9yXCIgQHRvb2x0aXAgdG9vbHRpcC10aXRsZT1cImVkaXQtdGV4dDpidXR0b25zLmVkaXRGb250Q29sb3JcIiB0ZXh0PVwiZWRpdC10ZXh0OmJ1dHRvbnMuZWRpdEZvbnRDb2xvclwiPlxuICAgICAgICAgICAgPGRyb3Bkb3duLWl0ZW0+IFxuICAgICAgICAgICAgICAgIDxjb2xvciBjbGFzcz1cImZ2X191aS1hZGRvbi10ZXh0b2JqZWN0LWNvbG9yLXBpY2tlclwiIG5hbWU9XCJhZGRvbi10ZXh0b2JqZWN0LWNvbG9yLXBpY2tlclwiPjwvY29sb3I+XG4gICAgICAgICAgICA8L2Ryb3Bkb3duLWl0ZW0+IFxuICAgICAgICA8L2Ryb3Bkb3duPlxuICAgIGAsXG4gICAgZnJhZ21lbnRzOiBbe1xuICAgICAgICB0YXJnZXQ6ICdhZGRvbi10ZXh0b2JqZWN0LWNvbG9yLXBpY2tlcicsXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgY29sb3JzOiBbXG4gICAgICAgICAgICAgICAgJyNmZjY2MzMnLFxuICAgICAgICAgICAgICAgICcjZmYwMGZmJyxcbiAgICAgICAgICAgICAgICAnI2ZmY2MwMCcsXG4gICAgICAgICAgICAgICAgJyMwMGZmZmYnLFxuICAgICAgICAgICAgICAgICcjMDBmZjAwJyxcbiAgICAgICAgICAgICAgICAnI2ZmZmYwMCcsXG4gICAgICAgICAgICAgICAgJyNmZjAwMDAnLFxuICAgICAgICAgICAgICAgICcjOTkzMzk5JyxcbiAgICAgICAgICAgICAgICAnI2NjOTlmZicsXG4gICAgICAgICAgICAgICAgJyNmZjk5Y2MnLFxuICAgICAgICAgICAgICAgICcjMDAwMGZmJyxcbiAgICAgICAgICAgICAgICAnIzY2Y2MzMycsXG4gICAgICAgICAgICAgICAgJyMwMDAwMDAnLFxuICAgICAgICAgICAgICAgICcjMzMzMzMzJyxcbiAgICAgICAgICAgICAgICAnIzY2NjY2NicsXG4gICAgICAgICAgICAgICAgJyM5OTk5OTknLFxuICAgICAgICAgICAgICAgICcjY2NjY2NjJyxcbiAgICAgICAgICAgICAgICAnI2ZmZmZmZidcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0cmFuc3BhcmVudGNsYXNzOiAnZnZfX3VpLXByb3BlcnR5LWljb24tbm9jb2xvcicsXG4gICAgICAgICAgICBhZGRjbGFzczogJ2Z2X191aS1wcm9wZXJ0eS1pY29uLWFkZC1jb2xvcicsXG4gICAgICAgICAgICByZW1vdmVjbGFzczogJ2Z2X191aS1wcm9wZXJ0eS1pY29uLXJlbW92ZS1jb2xvcicsXG4gICAgICAgICAgICBkZWxldGVjbGFzczogJ2Z2X191aS1wcm9wZXJ0eS1pY29uLWRlbGV0ZS1jb2xvci0nLFxuICAgICAgICAgICAgc2VsZWN0ZWRjbGFzczonZnZfX3VpLXByb3BlcnR5LWljb24tc2VsZWN0ZWQtY29sb3ItJyxcbiAgICAgICAgICAgIGxpZ2h0cG9zdG5hbWU6J2xpZ2h0JyxcbiAgICAgICAgICAgIGRhcmtwb3N0bmFtZTonZGFyaydcbiAgICAgICAgfVxuICAgIH1dXG59KSB7XG4gICAgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAndGV4dC1jb2xvci1waWNrZXInO1xuICAgIH1cbiAgICBwb3N0bGluaygpIHtcbiAgICAgICAgc3VwZXIucG9zdGxpbmsoKTtcbiAgICAgICAgY29uc3QgaWNvbkVsZW1lbnQgPSB0aGlzLnRvZ2dsZXIuaWNvbkVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNvbG9yU3RhdHVlc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGNvbG9yU3RhdHVlc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZnZfX3VpLWFkZG9uLXRleHRvYmplY3QtY29sb3Itc3RhdHVzJyk7XG4gICAgICAgIGljb25FbGVtZW50LmFwcGVuZENoaWxkKGNvbG9yU3RhdHVlc0VsZW1lbnQpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY29sb3JQaWNrZXIgPSB0aGlzLmdldENvbXBvbmVudEJ5TmFtZSgnYWRkb24tdGV4dG9iamVjdC1jb2xvci1waWNrZXInKTtcbiAgICAgICAgdGhpcy5jb2xvclBpY2tlciA9IGNvbG9yUGlja2VyO1xuICAgICAgICB0aGlzLmNvbG9yU3RhdHVlc0VsZW1lbnQgPSBjb2xvclN0YXR1ZXNFbGVtZW50O1xuXG4gICAgICAgIGNvbnN0IHN0b3BQcm9wYWdhdGlvbkhhbmRsZXIgPSBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbG9yUGlja2VyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BQcm9wYWdhdGlvbkhhbmRsZXIpO1xuICAgICAgICB0aGlzLmFkZERlc3Ryb3lIb29rKCgpID0+IHtcbiAgICAgICAgICAgIGNvbG9yUGlja2VyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BQcm9wYWdhdGlvbkhhbmRsZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRDb2xvcignIzAwMDAwMCcpO1xuXG4gICAgICAgIGNvbnN0IGZyZWV6ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mcmVlemUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdW5mcmVlemVDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudW5mcmVlemUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb2xvclBpY2tlci5vbignY2hhbmdlJywgKF8sIG5ld0NvbG9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yU3RhdHVzKG5ld0NvbG9yKTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignY2hhbmdlJywgbmV3Q29sb3IpO1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLmhhbmRsZShuZXdDb2xvcik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb2xvclBpY2tlci5vbigncG9zdHJlbmRlcicsICgpID0+IHtcbiAgICAgICAgICAgIGNvbG9yUGlja2VyLiRjb2xvcklucHV0Lm9mZignc2hvdy5zcGVjdHJ1bScsIGZyZWV6ZUNhbGxiYWNrKS5vbignc2hvdy5zcGVjdHJ1bScsIGZyZWV6ZUNhbGxiYWNrKTtcbiAgICAgICAgICAgIGNvbG9yUGlja2VyLiRjb2xvcklucHV0Lm9mZignaGlkZS5zcGVjdHJ1bScsIHVuZnJlZXplQ2FsbGJhY2spLm9uKCdoaWRlLnNwZWN0cnVtJywgdW5mcmVlemVDYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb2xvclBpY2tlci50cmlnZ2VyKCdwb3N0cmVuZGVyJyk7XG4gICAgfVxuICAgIHNldENvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY29sb3JQaWNrZXIuc2V0VmFsdWUoY29sb3IpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbG9yU3RhdHVzKGNvbG9yKTtcbiAgICB9XG4gICAgZ2V0Q29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yUGlja2VyLmdldFZhbHVlKCk7XG4gICAgfVxuICAgIHVwZGF0ZUNvbG9yU3RhdHVzKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY29sb3JTdGF0dWVzRWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IGBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfWA7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIFVJRXh0ZW5zaW9uIGZyb20gJ1VJRXh0ZW5zaW9uJztcbmltcG9ydCBUZXh0T2JqZWN0QmFzZUNvbnRyb2xsZXIgZnJvbSAnLi4vLi4vYml6L1RleHRPYmplY3RCYXNlQ29udHJvbGxlcic7XG5jb25zdCBTVEFOREFSRF9UWVBFID0gJ3N0YW5kYXJkJztcbmNvbnN0IEVYVF9UWVBFID0gJ2V4dCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb250RmFtaWx5U2l6ZUNvbnRyb2xsZXIgZXh0ZW5kcyBUZXh0T2JqZWN0QmFzZUNvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ0ZvbnRGYW1pbHlTaXplQ29udHJvbGxlcic7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCkge1xuICAgICAgICBzdXBlcihjb21wb25lbnQpO1xuICAgICAgICB2YXIgQWRkb24gPSB3aW5kb3cuRWRpdFRleHRPYmplY3Q7XG4gICAgICAgIGNvbnN0IGFkZG9uSW5mbyA9IEFkZG9uLmFkZG9uSW5mbztcbiAgICAgICAgY29uc3Qgc3RhbmRhcmRGb250RmFtaWxpZXMgPSBhZGRvbkluZm8uc3RhbmRhcmRGb250RmFtaWxpZXMgfHwgW107XG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbkZvbnRGYW1pbGllcyA9IGFkZG9uSW5mby5leHRlbnNpb25Gb250RmFtaWxpZXMgfHwgW107XG4gICAgICAgIHRoaXMuc3RhbmRhcmRGb250RmFtaWxpZXMgPSBzdGFuZGFyZEZvbnRGYW1pbGllcztcbiAgICAgICAgdGhpcy5leHRlbnNpb25Gb250RmFtaWxpZXMgPSBleHRlbnNpb25Gb250RmFtaWxpZXM7XG4gICAgICAgIHN0YW5kYXJkRm9udEZhbWlsaWVzLmZvckVhY2goZmYgPT4ge1xuICAgICAgICAgICAgZmYudHlwZSA9IFNUQU5EQVJEX1RZUEU7XG4gICAgICAgIH0pO1xuICAgICAgICBleHRlbnNpb25Gb250RmFtaWxpZXMuZm9yRWFjaChmZiA9PiB7XG4gICAgICAgICAgICBmZi50eXBlID0gRVhUX1RZUEU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZvbnRGYW1pbGllcyA9IHN0YW5kYXJkRm9udEZhbWlsaWVzLmNvbmNhdChleHRlbnNpb25Gb250RmFtaWxpZXMpO1xuICAgICAgICB0aGlzLmZvbnRTaXplcyA9IEFkZG9uLmFkZG9uSW5mby5jdXN0b21Gb250U2l6ZXMgfHwgW107XG4gICAgfVxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHN1cGVyLm1vdW50ZWQoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RGb250RmFtaWx5KHRoaXMuZm9udEZhbWlsaWVzWzBdKTtcbiAgICAgICAgaWYgKHRoaXMuZm9udFNpemVzLmluZGV4T2YoMTYpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Rm9udFNpemUoMTYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RGb250U2l6ZSh0aGlzLmZvbnRTaXplc1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGREZXN0cm95SG9vayhcbiAgICAgICAgICAgIHRoaXMuZ2V0UERGVUkoKS5hZGRWaWV3ZXJFdmVudExpc3RlbmVyKCd0ZXh0LW9iamVjdC1hY3RpdmUnLCB0ZXh0T2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUZXh0T2JqZWN0ID0gdGV4dE9iamVjdDtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZSh0ZXh0T2JqZWN0KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5nZXRQREZVSSgpLmFkZFZpZXdlckV2ZW50TGlzdGVuZXIoJ3RleHQtb2JqZWN0LXVuYWN0aXZlJywgKHRleHRPYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUZXh0T2JqZWN0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWN0aXZlKHRleHRPYmplY3QpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLmdldFBERlVJKCkuYWRkVmlld2VyRXZlbnRMaXN0ZW5lcihVSUV4dGVuc2lvbi5QREZWaWV3Q3RybC5FdmVudHMub3BlbkZpbGVTdWNjZXNzLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZGlzYWJsZSgpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5vbignY2hhbmdlJywgKGZpZWxkLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50VGV4dE9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZm9udEZhbWlseSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmZnMgPSB0aGlzLmZvbnRGYW1pbGllcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlbiA9IGZmcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmYgPSBmZnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZmLnRleHQgPT09IHZhbHVlIHx8IGZmLm5hbWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlGb250RmFtaWx5KGZmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZvbnRTaXplJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlGb250U2l6ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbiAgICBhY3RpdmUodGV4dE9iamVjdCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5lbmFibGUoKTtcbiAgICAgICAgY29uc3QgZm9udFNpemUgPSB0ZXh0T2JqZWN0LmdldE1vZGVsKCkuaW5mby50ZXh0U3RhdGUuc2l6ZTtcbiAgICAgICAgY29uc3QgdW5pdHMgPSBVSUV4dGVuc2lvbi5QREZWaWV3Q3RybC5zaGFyZWQudW5pdHM7XG4gICAgICAgIGNvbnN0IGZvbnRTaXplSW5QaXhlbCA9IHVuaXRzLlBPSU5ULmNvbnZlcnRUbyhmb250U2l6ZSwgdW5pdHMuUElYRUxfSE9SSVpPTlRBTCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50LnNlbGVjdEZvbnRTaXplKGZvbnRTaXplSW5QaXhlbCk7XG5cbiAgICAgICAgY29uc3QgcmVzb2x2ZUZvbnRGYW1pbHkgPSAodGV4dE9iamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9udEluZm8gPSB0ZXh0T2JqZWN0LmdldE1vZGVsKCkuZ2V0Rm9udEluZm8oKTtcbiAgICAgICAgICAgIGlmIChmb250SW5mby5pc1N0YW5kYXJkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuc3RhbmRhcmRGb250RmFtaWxpZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RmID0gdGhpcy5zdGFuZGFyZEZvbnRGYW1pbGllc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0Zi52YWx1ZSA9PT0gZm9udEluZm8uc3RhbmRhcmRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBmb250SW5mby5iYXNlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZvbnRJbmZvLnN0YW5kYXJkSWQsXG4gICAgICAgICAgICAgICAgICAgIHN0YW5kYXJkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RhbmRhcmQnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZm9udEluZm8uYmFzZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGZvbnRJbmZvLmJhc2VOYW1lLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogZm9udEluZm8uc3R5bGVzLFxuICAgICAgICAgICAgICAgICAgICBjaGFyc2V0OiBmb250SW5mby5jaGFyc2V0LFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXh0J1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnQuc2VsZWN0Rm9udEZhbWlseShyZXNvbHZlRm9udEZhbWlseSh0ZXh0T2JqZWN0KSk7XG4gICAgfVxuICAgIGRlYWN0aXZlKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5kaXNhYmxlKCk7XG4gICAgfVxuICAgIHNlbGVjdEZvbnRGYW1pbHkoZm9udEZhbWlseSkge1xuICAgICAgICBjb25zdCBwcmV2YWx1ZSA9IHRoaXMuY29tcG9uZW50LmN1cnJlbnRGb250RmFtaWx5O1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5zZWxlY3RGb250RmFtaWx5KGZvbnRGYW1pbHkpO1xuICAgICAgICB0aGlzLmFwcGx5Rm9udEZhbWlseShmb250RmFtaWx5KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQudHJpZ2dlcignY2hhbmdlJywgJ2ZvbnRGYW1pbHknLCBwcmV2YWx1ZSwgZm9udEZhbWlseSk7XG4gICAgfVxuICAgIGFwcGx5Rm9udEZhbWlseShmb250RmFtaWx5KSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50VGV4dE9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsID0gdGhpcy5jdXJyZW50VGV4dE9iamVjdC5nZXRNb2RlbCgpO1xuICAgICAgICBzd2l0Y2ggKGZvbnRGYW1pbHkudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBTVEFOREFSRF9UWVBFOlxuICAgICAgICAgICAgICAgIG1vZGVsLnNldFRleHQodGhpcy5jdXJyZW50VGV4dE9iamVjdC5nZXRUZXh0Q2hhcigpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbC5zZXRTdGFuZGFyZEZvbnQoZm9udEZhbWlseS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oXyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUZXh0T2JqZWN0LnJlQWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBFWFRfVFlQRTpcbiAgICAgICAgICAgICAgICBtb2RlbC5zZXRUZXh0KHRoaXMuY3VycmVudFRleHRPYmplY3QuZ2V0VGV4dENoYXIoKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbC5zZXRGb250QnlOYW1lKGZvbnRGYW1pbHkubmFtZSwgZm9udEZhbWlseS5zdHlsZSwgZm9udEZhbWlseS5jaGFyc2V0KVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oXyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRleHRPYmplY3QucmVBY3RpdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3RGb250U2l6ZShmb250U2l6ZSkge1xuICAgICAgICBjb25zdCBwcmV2YWx1ZSA9IHRoaXMuY29tcG9uZW50LmN1cnJlbnRGb250U2l6ZTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuc2VsZWN0Rm9udFNpemUoZm9udFNpemUpO1xuICAgICAgICB0aGlzLmFwcGx5Rm9udFNpemUoZm9udFNpemUpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudC50cmlnZ2VyKCdjaGFuZ2UnLCAnZm9udFNpemUnLCBwcmV2YWx1ZSwgZm9udFNpemUpO1xuICAgIH1cbiAgICBhcHBseUZvbnRTaXplKGZvbnRTaXplKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50VGV4dE9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVuaXRzID0gVUlFeHRlbnNpb24uUERGVmlld0N0cmwuc2hhcmVkLnVuaXRzO1xuICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMuY3VycmVudFRleHRPYmplY3QuZ2V0TW9kZWwoKTtcbiAgICAgICAgbW9kZWwuc2V0VGV4dCh0aGlzLmN1cnJlbnRUZXh0T2JqZWN0LmdldFRleHRDaGFyKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1vZGVsLnNldEZvbnRTaXplKHVuaXRzLlBJWEVMX0hPUklaT05UQUwuY29udmVydFRvKGZvbnRTaXplLCB1bml0cy5QT0lOVCkpXG4gICAgICAgIH0pLnRoZW4oXyA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUZXh0T2JqZWN0LnJlQWN0aXZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXJGb250RmFtaWx5SXRlbShmb250RmFtaWx5KSB7XG4gICAgICAgIGlmIChmb250RmFtaWx5LnRleHQgPT09ICdTeW1ib2wnKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBmb250LWZhbWlseTogXCIke2ZvbnRGYW1pbHkubmFtZSB8fCBmb250RmFtaWx5LnRleHR9XCJgO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5pbXBvcnQgcmVuZGVyVGVtcGxhdGUgZnJvbSAnLi9mb250LWZhbWlseS1zaXplLWRyb3Bkb3duLmFydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbnRGYW1pbHlTaXplRHJvcGRvd25Db21wb25lbnQgZXh0ZW5kcyBVSUV4dGVuc2lvbi5TZW5pb3JDb21wb25lbnRGYWN0b3J5LmNyZWF0ZVN1cGVyQ2xhc3Moe1xuICAgIHRlbXBsYXRlOiByZW5kZXJUZW1wbGF0ZSgpLFxuICAgIGZyYWdtZW50czogW3tcbiAgICAgICAgdGFyZ2V0OiAnZm9udC1mYW1pbHktZHJvcGRvd24nLFxuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgfVxuICAgIH0se1xuICAgICAgICB0YXJnZXQ6ICdmb250LXNpemUtZHJvcGRvd24nLFxuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgIGVkaXRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgc3RlcDogMC4xXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XVxufSkge1xuICAgIHN0YXRpYyBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ2ZvbnQtZmFtaWx5LXNpemUtZHJvcGRvd24nO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBtb2R1bGFyLCBsb2NhbGl6ZXIpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucywgbW9kdWxhciwgbG9jYWxpemVyKTtcbiAgICB9XG4gICAgY3JlYXRlRE9NRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cbiAgICBwb3N0bGluaygpe1xuICAgICAgICBzdXBlci5wb3N0bGluaygpO1xuICAgICAgICB0aGlzLmZvbnRGYW1pbHlEcm9wZG93bkNvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50QnlOYW1lKCdmb250LWZhbWlseS1kcm9wZG93bicpO1xuICAgICAgICB0aGlzLmZvbnRTaXplRHJvcGRvd25Db21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudEJ5TmFtZSgnZm9udC1zaXplLWRyb3Bkb3duJyk7XG4gICAgICAgIHRoaXMuZm9udEZhbWlseURyb3Bkb3duVGV4dCA9IHRoaXMuZm9udEZhbWlseURyb3Bkb3duQ29tcG9uZW50LnRvZ2dsZXIudGV4dEVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5hZGREZXN0cm95SG9vayhcbiAgICAgICAgICAgIHRoaXMuZm9udFNpemVEcm9wZG93bkNvbXBvbmVudC5vbignY2hhbmdlJywgKG5ld1NpemUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NoYW5nZScsICdmb250U2l6ZScsIG5ld1NpemUpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLmZvbnRGYW1pbHlEcm9wZG93bkNvbXBvbmVudC5vbignY2hhbmdlJywgKGZvbnRGYW1pbHkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NoYW5nZScsICdmb250RmFtaWx5JywgZm9udEZhbWlseSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbiAgICBnZXRGb250RmFtaWx5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50Rm9udEZhbWlseTtcbiAgICB9XG4gICAgc2VsZWN0Rm9udEZhbWlseShmb250RmFtaWx5KSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5mb250RmFtaWx5RHJvcGRvd25Db21wb25lbnQuZmluZENoaWxkcmVuKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZC5jb250cm9sbGVyLmRhdGEuZm9udEZhbWlseSA9PT0gZm9udEZhbWlseVxuICAgICAgICB9KVswXTtcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmZvbnRGYW1pbHlEcm9wZG93bkNvbXBvbmVudC5zZWxlY3QoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9udEZhbWlseURyb3Bkb3duQ29tcG9uZW50LnNldFRleHQoZm9udEZhbWlseS50ZXh0KTtcbiAgICAgICAgaWYoZm9udEZhbWlseS50ZXh0ID09PSAnU3ltYm9sJykge1xuICAgICAgICAgICAgdGhpcy5mb250RmFtaWx5RHJvcGRvd25UZXh0LnN0eWxlLmNzc1RleHQgKz0gYGZvbnQtZmFtaWx5OiBpbmhlcml0YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9udEZhbWlseURyb3Bkb3duVGV4dC5zdHlsZS5jc3NUZXh0ICs9IGBmb250LWZhbWlseTogXCIke2ZvbnRGYW1pbHkubmFtZSB8fCBmb250RmFtaWx5LnRleHR9XCJgO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudEZvbnRGYW1pbHkgPSBmb250RmFtaWx5O1xuICAgIH1cbiAgICBzZWxlY3RGb250U2l6ZShmb250U2l6ZSkge1xuICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMuZm9udFNpemVEcm9wZG93bkNvbXBvbmVudC5maW5kQ2hpbGRyZW4oY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkLmNvbnRyb2xsZXIuZGF0YS5mb250U2l6ZSA9PT0gZm9udFNpemU7XG4gICAgICAgIH0pWzBdO1xuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZm9udFNpemVEcm9wZG93bkNvbXBvbmVudC5zZWxlY3QoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9udFNpemVEcm9wZG93bkNvbXBvbmVudC5zZXRFZGl0VmFsdWUoZm9udFNpemUpO1xuICAgICAgICB0aGlzLmN1cnJlbnRGb250U2l6ZSA9IGZvbnRTaXplO1xuICAgIH1cbiAgICBnZXRGb250U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEZvbnRTaXplO1xuICAgIH1cbn0iLCI8ZGl2IGNsYXNzPVwiZnZfX3VpLWFkZG9uLWZvbnQtZmFtaWx5LXNpemUtZHJvcGRvd25cIiBAY29udHJvbGxlcj1cImVkaXQtdGV4dC1vYmplY3Q6Rm9udEZhbWlseVNpemVDb250cm9sbGVyIGFzIGZmc2NcIj5cbiAgICA8ZHJvcGRvd24gbmFtZT1cImZvbnQtZmFtaWx5LWRyb3Bkb3duXCIgY2xhc3M9XCJmdl9fdWktYWRkb24tZm9udC1mYW1pbHktZHJvcGRvd25cIiBAdG9vbHRpcCB0b29sdGlwLXRpdGxlPVwiZWRpdC10ZXh0OmRyb3Bkb3ducy5lZGl0Rm9udEZhbWlseVwiPlxuICAgICAgICA8ZHJvcGRvd24tYnV0dG9uIFxuICAgICAgICAgICAgQGZvcmVhY2g9XCJmb250RmFtaWx5IGluIGZmc2MuZm9udEZhbWlsaWVzXCIgXG4gICAgICAgICAgICBAc3luYy50ZXh0PVwiZm9udEZhbWlseS50ZXh0XCIgXG4gICAgICAgICAgICBAc3luYy5hdHRyLnN0eWxlPVwiZmZzYy5yZW5kZXJGb250RmFtaWx5SXRlbShmb250RmFtaWx5KVwiXG4gICAgICAgICAgICBAb24uY2xpY2s9XCJmZnNjLnNlbGVjdEZvbnRGYW1pbHkoZm9udEZhbWlseSlcIlxuICAgICAgICA+PC9kcm9wZG93bi1idXR0b24+XG4gICAgPC9kcm9wZG93bj5cbiAgICA8ZHJvcGRvd24gbmFtZT1cImZvbnQtc2l6ZS1kcm9wZG93blwiIGVkaXRhYmxlPVwidHJ1ZVwiIGNsYXNzPVwiZnZfX3VpLWFkZG9uLWZvbnQtc2l6ZS1kcm9wZG93blwiIEB0b29sdGlwIHRvb2x0aXAtdGl0bGU9XCJlZGl0LXRleHQ6ZHJvcGRvd25zLmVkaXRGb250U2l6ZVwiPlxuICAgICAgICA8ZHJvcGRvd24tYnV0dG9uXG4gICAgICAgICAgICBAZm9yZWFjaD1cImZvbnRTaXplIGluIGZmc2MuZm9udFNpemVzXCJcbiAgICAgICAgICAgIEBzeW5jLnRleHQ9XCJmb250U2l6ZVwiXG4gICAgICAgICAgICBAb24uY2xpY2s9XCJmZnNjLnNlbGVjdEZvbnRTaXplKGZvbnRTaXplKVwiXG4gICAgICAgID48L2Ryb3Bkb3duLWJ1dHRvbj5cbiAgICA8L2Ryb3Bkb3duPlxuPC9kaXY+IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX1VJRXh0ZW5zaW9uX187Il0sInNvdXJjZVJvb3QiOiIifQ==