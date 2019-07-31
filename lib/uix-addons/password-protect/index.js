(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("UIExtension"));
	else if(typeof define === 'function' && define.amd)
		define(["UIExtension"], factory);
	else if(typeof exports === 'object')
		exports["PasswordProtectAddon"] = factory(require("UIExtension"));
	else
		root["PasswordProtectAddon"] = factory(root["UIExtension"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./uix-addons/password-protect/index.js");
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

/***/ "./uix-addons/password-protect/addon.info.json":
/*!*****************************************************!*\
  !*** ./uix-addons/password-protect/addon.info.json ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


        module.exports = null;
    

/***/ }),

/***/ "./uix-addons/password-protect/callbackController.js":
/*!***********************************************************!*\
  !*** ./uix-addons/password-protect/callbackController.js ***!
  \***********************************************************/
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

var Events = UIExtension.PDFViewCtrl.Events;

var PasswordProtectCallbackController = function (_UIExtension$Controll) {
    _inherits(PasswordProtectCallbackController, _UIExtension$Controll);

    function PasswordProtectCallbackController(component) {
        _classCallCheck(this, PasswordProtectCallbackController);

        return _possibleConstructorReturn(this, _UIExtension$Controll.call(this, component));
    }

    PasswordProtectCallbackController.prototype.handle = function handle() {
        var _this2 = this;

        if (!this.isReady) {
            //waiting.   
            return;
        }
        if (this.needPassword) {
            this.ownerPasswordPopop.setSubmitCallback(function (password) {
                _this2.currentDoc.checkPassword(password).then(function (type) {
                    if (type == 3) {
                        _this2.data.ownerPassword = password;
                        _this2.needPassword = false;
                        _this2.ownerPasswordPopop.hide();
                        _this2.currentDoc.setPasswordType(type);
                        _this2.handle();
                    } else {
                        _this2.ownerPasswordPopop.showError("Owner password is nor correct");
                    }
                });
            });
            this.ownerPasswordPopop.hideError();
            this.ownerPasswordPopop.resetInput();
            this.ownerPasswordPopop.show();
        } else {
            this.popop.updateData(this.data);
            this.popop.show();
        }
    };

    PasswordProtectCallbackController.prototype.setDefaultData = function setDefaultData() {
        var defaultData = {
            userPassword: "",
            ownerPassword: "",
            isEncryptMetadata: true,
            cipherType: 'aes256',
            print: 2,
            accessibility: true,
            copy: true,
            change: 4
        };
        this.data = defaultData;
    };

    PasswordProtectCallbackController.prototype.mounted = function mounted() {
        var _this3 = this;

        this.popop = this.getComponentByName("password-protect-popup");
        this.ownerPasswordPopop = this.getComponentByName("owner-password-popup");

        var pdfUi = this.getPDFUI();
        pdfUi.addViewerEventListener(Events.openFileSuccess, function (pdfDoc) {
            _this3.currentDoc = pdfDoc;
            _this3.needPassword = false;
            _this3.isReady = false;
            _this3.setDefaultData();
            _this3.popop.setSubmitCallback(function (userPassword, ownerPassword, permission, cipher, isEncryptMetaData) {
                pdfDoc.setPasswordAndPermission(userPassword, ownerPassword, permission, cipher, isEncryptMetaData).then(function (result) {
                    if (result) {
                        if (userPassword != -1) {
                            _this3.data.userPassword = userPassword;
                        }
                        _this3.data.ownerPassword = ownerPassword;
                        _this3.data.cipherType = cipher;
                        _this3.data.isEncryptMetadata = isEncryptMetaData;
                        _this3.data.permission = permission;
                        _this3.data = _this3.convertPermission(_this3.data);

                        var removeCpmponent = _this3.getComponentByName("remove-protect-btn");
                        removeCpmponent.controller.activeBtn();
                        _this3.currentDoc.setPasswordType(3);
                        _this3.popop.hide();
                    } else {
                        _this3.popop.showError();
                    }
                }).catch(function (e) {
                    _this3.popop.showError(e);
                });
            });

            pdfDoc.getPasswordType().then(function (type) {
                if (type == 2) {
                    _this3.needPassword = true;
                    // this.data.userPassword = this.currentDoc.password;
                }
                return pdfDoc.getStdCipherOptions();
            }).then(function (options) {
                // if(options === false) return false;
                if (typeof options.permission === 'undefined') {
                    _this3.setDefaultData();
                } else {
                    _this3.data = _this3.convertPermission(options);
                    _this3.data.userPassword = '';
                    _this3.data.ownerPassword = '';
                }
                if (_this3.currentDoc.password) {
                    return _this3.currentDoc.checkPassword(_this3.currentDoc.password);
                } else {
                    _this3.isReady = true;
                    return false;
                }
            }).then(function (result) {
                if (result === false) return false;
                _this3.isReady = true;
                //Owner 密码
                if (result === 3) {
                    _this3.data.ownerPassword = _this3.currentDoc.password;
                    if (_this3.data.cipherType != "aes256") {
                        _this3.currentDoc.getUserPassword(_this3.currentDoc.password).then(function (userPassword) {
                            _this3.data.userPassword = userPassword;
                        });
                    }
                } else if (result === 2) {
                    _this3.data.userPassword = _this3.currentDoc.password;
                }
            });
        });
    };

    PasswordProtectCallbackController.prototype.convertPermission = function convertPermission(options) {
        var permission = options.permission;
        if (permission & 2048) {
            options.print = 2;
        } else if (permission & 4) {
            options.print = 1;
        } else {
            options.print = 0;
        }

        if (permission & 512) {
            options.accessibility = true;
        } else {
            options.accessibility = false;
        }

        if (permission & 16) {
            options.copy = true;
        } else {
            options.copy = false;
        }

        if (permission & 8 && permission & 32 && permission & 256) {
            options.change = 4;
        } else if (permission & 32 && permission & 256) {
            options.change = 3;
        } else if (permission & 256) {
            options.change = 2;
        } else if (permission & 1024) {
            options.change = 1;
        } else {
            options.change = 0;
        }
        return options;
    };

    return PasswordProtectCallbackController;
}(UIExtension.Controller);

exports.default = PasswordProtectCallbackController;

/***/ }),

/***/ "./uix-addons/password-protect/index.js":
/*!**********************************************!*\
  !*** ./uix-addons/password-protect/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _popup = __webpack_require__(/*! ./popup/ */ "./uix-addons/password-protect/popup/index.js");

var _popup2 = _interopRequireDefault(_popup);

var _popupOwnerPassword = __webpack_require__(/*! ./popup-owner-password/ */ "./uix-addons/password-protect/popup-owner-password/index.js");

var _popupOwnerPassword2 = _interopRequireDefault(_popupOwnerPassword);

__webpack_require__(/*! ./scss/index.scss */ "./uix-addons/password-protect/scss/index.scss");

var _callbackController = __webpack_require__(/*! ./callbackController */ "./uix-addons/password-protect/callbackController.js");

var _callbackController2 = _interopRequireDefault(_callbackController);

var _removeCallbackController = __webpack_require__(/*! ./removeCallbackController */ "./uix-addons/password-protect/removeCallbackController.js");

var _removeCallbackController2 = _interopRequireDefault(_removeCallbackController);

var _addonInfo = __webpack_require__(/*! ./addon.info.json */ "./uix-addons/password-protect/addon.info.json");

var _addonInfo2 = _interopRequireDefault(_addonInfo);

var _template = __webpack_require__(/*! ./template.art */ "./uix-addons/password-protect/template.art");

var _template2 = _interopRequireDefault(_template);

var _removeTemplate = __webpack_require__(/*! ./remove-template.art */ "./uix-addons/password-protect/remove-template.art");

var _removeTemplate2 = _interopRequireDefault(_removeTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var template = (0, _template2.default)();
var removeArt = (0, _removeTemplate2.default)();

var PasswordProtectAddon = function (_UIExtension$UIXAddon) {
    _inherits(PasswordProtectAddon, _UIExtension$UIXAddon);

    function PasswordProtectAddon() {
        _classCallCheck(this, PasswordProtectAddon);

        return _possibleConstructorReturn(this, _UIExtension$UIXAddon.apply(this, arguments));
    }

    PasswordProtectAddon.getName = function getName() {
        return 'password-protect';
    };

    PasswordProtectAddon.getLoader = function getLoader() {
        return _addonInfo2.default;
    };

    PasswordProtectAddon.prototype.init = function init() {
        var module = UIExtension.modular.module('password-protect', []);
        var registry = module.getRegistry();
        this.module = module;
        registry.registerComponent(_popup2.default);
        registry.registerComponent(_popupOwnerPassword2.default);
    };

    PasswordProtectAddon.prototype.fragments = function fragments() {
        return [{
            target: 'protect-toolbar-group-list',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: '<password-protect:group name="password-protect-group"></password-protect:group>',
            config: [{
                target: 'password-protect-group'
            }]
        }, {
            target: 'password-protect-group',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: template,
            config: [{
                target: 'password-protect-btn',
                tooltip: {
                    title: 'password-protect:buttons.title'
                },
                callback: _callbackController2.default
            }]
        }, {
            target: 'password-protect-group',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: removeArt,
            config: [{
                target: 'remove-protect-btn',
                tooltip: {
                    title: 'password-protect:buttons.removeTitle'
                },
                callback: _removeCallbackController2.default
            }]
        }];
    };

    return PasswordProtectAddon;
}(UIExtension.UIXAddon);

exports.default = PasswordProtectAddon;
;

/***/ }),

/***/ "./uix-addons/password-protect/popup-owner-password/index.js":
/*!*******************************************************************!*\
  !*** ./uix-addons/password-protect/popup-owner-password/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

__webpack_require__(/*! ./index.scss */ "./uix-addons/password-protect/popup-owner-password/index.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var PopupOwnerPasswordComponent = function (_UIExtension$widgets$) {
    _inherits(PopupOwnerPasswordComponent, _UIExtension$widgets$);

    function PopupOwnerPasswordComponent() {
        _classCallCheck(this, PopupOwnerPasswordComponent);

        return _possibleConstructorReturn(this, _UIExtension$widgets$.apply(this, arguments));
    }

    PopupOwnerPasswordComponent.getName = function getName() {
        return 'owner-password-popup';
    };

    PopupOwnerPasswordComponent.prototype.render = function render() {
        _UIExtension$widgets$.prototype.render.call(this);
        this.destroyHooks = [];
        this.element.classList.add('fv__owner-password-popup');
        this.localize();
    };

    PopupOwnerPasswordComponent.prototype.bindEvent = function bindEvent(selector, event, callback) {
        var element = this.element.querySelector(selector);
        if (!element) return;
        element.addEventListener(event, callback);
        this.destroyHooks.push(function () {
            element.removeEventListener(event, callback);
        });
    };

    PopupOwnerPasswordComponent.prototype.mounted = function mounted() {
        var _this2 = this;

        _UIExtension$widgets$.prototype.mounted.call(this);
        this.bindEvent(".fv__password-cancel", "click", function (e) {
            _this2.hide();
        });

        this.bindEvent(".fv__password-btn", "click", function (e) {
            _this2.submit();
        });
    };

    PopupOwnerPasswordComponent.prototype.submit = function submit() {
        var password = this.element.querySelector(".fv__owner-password-input").value;
        if (!password) {
            this.showError("Admin password can't be blank.");
        }
        this.submitCallback(password);
    };

    PopupOwnerPasswordComponent.prototype.setSubmitCallback = function setSubmitCallback(submitCallback) {
        this.submitCallback = submitCallback;
    };

    PopupOwnerPasswordComponent.prototype.showError = function showError(error) {
        this.element.querySelector(".fv__password-protect-error").classList.remove("fv__hide");
        this.element.querySelector(".fv__password-protect-error").innerHTML = error;
    };

    PopupOwnerPasswordComponent.prototype.hideError = function hideError() {
        this.element.querySelector(".fv__password-protect-error").innerHTML = '';
        this.element.querySelector(".fv__password-protect-error").classList.add("fv__hide");
    };

    PopupOwnerPasswordComponent.prototype.resetInput = function resetInput() {
        this.element.querySelector(".fv__owner-password-input").value = '';
    };

    PopupOwnerPasswordComponent.prototype.destroy = function destroy() {
        this.destroyHooks.forEach(function (hook) {
            return hook();
        });
    };

    return PopupOwnerPasswordComponent;
}(UIExtension.widgets.LayerComponent);

exports.default = PopupOwnerPasswordComponent;

/***/ }),

/***/ "./uix-addons/password-protect/popup-owner-password/index.scss":
/*!*********************************************************************!*\
  !*** ./uix-addons/password-protect/popup-owner-password/index.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./uix-addons/password-protect/popup/index.js":
/*!****************************************************!*\
  !*** ./uix-addons/password-protect/popup/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

__webpack_require__(/*! ./index.scss */ "./uix-addons/password-protect/popup/index.scss");

var _popup = __webpack_require__(/*! ./popup.art */ "./uix-addons/password-protect/popup/popup.art");

var _popup2 = _interopRequireDefault(_popup);

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
        return 'password-protect-popup';
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
        this.element.classList.add('fv__password-protect-popup');
    };

    PopupComponent.prototype.setSubmitCallback = function setSubmitCallback(submitCallback) {
        this.submitCallback = submitCallback;
    };

    PopupComponent.prototype.getFormDataAndCheckDataValid = function getFormDataAndCheckDataValid() {
        var algorithms = document.querySelectorAll("input[name='algorithm']");
        var algorithm = void 0;
        algorithms.forEach(function (item) {
            if (item.checked) {
                algorithm = item.value;
                return;
            }
        });

        var userPwdActive = this.element.querySelector(".fv__user-password-checkbox").checked;
        var userPwd1 = void 0;
        if (userPwdActive) {
            userPwd1 = this.element.querySelector(".fv__user-password1").value;
            var userPwd2 = this.element.querySelector(".fv__user-password2").value;
            if (userPwd1 !== userPwd2) {
                this.element.querySelector(".fv__password-btn").setAttribute("disabled", "");
                if (userPwd1 !== "" && userPwd2 !== "") {
                    this.showError("Document open password does not match!");
                }
                return false;
            }
        } else {
            //如果checkbox勾上, 密码框值为空, 设置密码为-1, 表示保留当前密码 .
            if (algorithm == 'aes256') {
                userPwd1 = -1;
            } else {
                userPwd1 = this.originData.userPassword;
            }
        }

        var ownerPwdActive = this.element.querySelector(".fv__owner-password-checkbox").checked;
        var ownerPwd1 = void 0;
        var print = void 0,
            accessibility = void 0,
            copy = void 0,
            change = void 0;
        if (ownerPwdActive) {
            ownerPwd1 = this.element.querySelector(".fv__owner-password1").value;
            var ownerPwd2 = this.element.querySelector(".fv__owner-password2").value;
            if (ownerPwd1 !== ownerPwd2) {
                this.element.querySelector(".fv__password-btn").setAttribute("disabled", "");
                if (ownerPwd1 !== "" && ownerPwd2 !== "") {
                    this.showError("Document permission password does not match!");
                }
                return false;
            }
            print = this.element.querySelector(".fv__permission-print").value;
            accessibility = this.element.querySelector(".fv__permission-accessibility").checked;
            copy = this.element.querySelector(".fv__permission-copy").checked;
            change = this.element.querySelector(".fv__permission-change").value;
        } else {
            ownerPwd1 = this.originData.ownerPassword;
            print = this.originData.print;
            accessibility = this.originData.accessibility;
            copy = this.originData.copy;
            change = this.originData.change;
        }

        if ((!userPwd1 || userPwd1 == -1) && !ownerPwd1) {
            this.element.querySelector(".fv__password-btn").setAttribute("disabled", "");
            // this.showError("The user password or owner password must not all be blank.");
            return false;
        }
        if (userPwd1 == ownerPwd1) {
            this.showError("The document open and owner passwords cannot be the same, please enter a different password in either the document open password field or the owner password field.");
            this.element.querySelector(".fv__password-btn").setAttribute("disabled", "");
            return false;
        }

        var encryptMetadata = !this.element.querySelector(".fv__encrypt-not-metadata").checked;

        var permission = 0xfffc;
        if (print < 2) {
            permission ^= 2048; // 12bit
            if (print < 1) {
                permission ^= 4; // 3bit
            }
        }
        if (!accessibility) {
            permission ^= 512; //10bit
        }
        if (!copy) {
            permission ^= 16; //5bit
        }
        if (change === 4) {
            permission ^= 1024; //11bit
        } else if (change == 3) {
            permission ^= 8; //4bit
            permission ^= 1024; //11bit
        } else if (change == 2) {
            permission ^= 8; //4bit
            permission ^= 32; //6bit
            permission ^= 1024; //11bit
        } else if (change == 1) {
            permission ^= 8; //4bit
            permission ^= 32; //6bit
            permission ^= 256; //9bit
        } else if (change == 0) {
            permission ^= 8; //4bit
            permission ^= 32; //6bit
            permission ^= 256; //9bit
            permission ^= 1024; //11bit
        }
        permission += 0xFFFF0000;
        this.hideError();
        this.element.querySelector(".fv__password-btn").removeAttribute("disabled");
        return [userPwd1, ownerPwd1, permission, algorithm, encryptMetadata];
    };

    PopupComponent.prototype.updateData = function updateData(options) {
        var _this3 = this;

        this.originData = options;
        this.destroyHooks.forEach(function (hook) {
            return hook();
        });
        this.element.querySelector(".fv__ui-layer-panel").innerHTML = (0, _popup2.default)(options);
        this.localize();

        this.bindEvent(".fv__show-password", "click", function (e) {
            var current = e.srcElement;
            if (current.classList.contains("fv__hide-password")) {
                current.classList.remove("fv__hide-password");
                current.previousElementSibling.type = "password";
            } else {
                current.classList.add("fv__hide-password");
                current.previousElementSibling.type = "text";
            }
        });
        this.bindEvent(".fv__password", "keyup", function (e) {
            var patten = /[^\x00-\x80]/g;
            e.srcElement.value = e.srcElement.value.replace(patten, "");
            _this3.getFormDataAndCheckDataValid();
        });
        this.bindEvent(".fv__password-btn", "click", function (e) {
            _this3.submit();
        });

        this.bindEvent(".fv__password-cancel", "click", function (e) {
            _this3.hide();
        });

        this.bindEvent(".fv__user-password-checkbox", "change", function (e) {
            var inputs = _this3.element.querySelectorAll(".fv__user-password-container input");
            inputs.forEach(function (input) {
                if (input != e.target) {
                    input.disabled = !e.target.checked;
                }
            });
            _this3.getFormDataAndCheckDataValid();
        });

        this.bindEvent(".fv__owner-password-checkbox", "change", function (e) {
            var inputs = _this3.element.querySelectorAll(".fv__owner-password-container input,.fv__owner-password-container select");
            inputs.forEach(function (input) {
                if (input != e.target) {
                    input.disabled = !e.target.checked;
                }
            });
            _this3.getFormDataAndCheckDataValid();
        });
        var isFirst = true;
        this.bindEvent(".fv__algorithm-radio", "change", function (e) {
            if (isFirst && e.target.checked) {
                if (e.target.value == "aes128" && _this3.originData.userPassword == "" && _this3.originData.ownerPassword != "" && _this3.originData.cipherType == "aes256") {
                    var userPwd1 = _this3.element.querySelector(".fv__user-password1").value;
                    var userPwd2 = _this3.element.querySelector(".fv__user-password2").value;
                    if (userPwd1 == "" && userPwd2 == "") {
                        _this3.element.querySelector(".fv__user-password-checkbox").checked = true;
                        _this3.element.querySelector(".fv__user-password1").removeAttribute("disabled");
                        _this3.element.querySelector(".fv__user-password2").removeAttribute("disabled");
                        _this3.showError("For security, you need to reset the open password.", true);
                        isFirst = false;
                    }
                }
            }
        });
    };

    PopupComponent.prototype.submit = function submit() {
        var args = this.getFormDataAndCheckDataValid();
        return this.submitCallback.apply(this, _toConsumableArray(args));
    };

    PopupComponent.prototype.showError = function showError(error) {
        var isWarn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (isWarn) {
            this.element.querySelector(".fv__password-protect-error .fv__password-protect-error-header").innerHTML = "Warn:";
            this.element.querySelector(".fv__password-protect-error").classList.add("fv__warn");
        } else {
            this.element.querySelector(".fv__password-protect-error .fv__password-protect-error-header").innerHTML = "Error:";
            this.element.querySelector(".fv__password-protect-error").classList.remove("fv__warn");
        }
        this.element.querySelector(".fv__password-protect-error").classList.remove("fv__hide");
        this.element.querySelector(".fv__password-protect-error .fv__password-protect-error-msg").innerHTML = error;
    };

    PopupComponent.prototype.hideError = function hideError() {
        this.element.querySelector(".fv__password-protect-error").classList.add("fv__hide");
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

/***/ "./uix-addons/password-protect/popup/index.scss":
/*!******************************************************!*\
  !*** ./uix-addons/password-protect/popup/index.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./uix-addons/password-protect/popup/popup.art":
/*!*****************************************************!*\
  !*** ./uix-addons/password-protect/popup/popup.art ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape;
    $$out += '<div class="fv__password-protect-error fv__hide">\n<div class="fv__password-protect-error-header"></div>\n<div class="fv__password-protect-error-msg"></div>\n</div>\n<div class="fv__user-password-container fv__password-container">\n    <div class="fv__password-caption">Document Open Settings</div>\n    <label>\n        <input type="checkbox" class="fv__user-password-checkbox" ';
    if ($data.userPassword) {
        $$out += 'checked';
    }
    $$out += '/>\n        Require a password to open the document\n    </label>\n    <div class="fv__user-password-input">\n        <div class="fv__password-input">\n            Password Input: <input type="password" class="fv__password fv__user-password1" value="';
    $$out += $escape($data.userPassword);
    $$out += '" ';
    if (!$data.userPassword) {
        $$out += 'disabled';
    }
    $$out += ' onpaste="return false;" />\n            <div class="fv__show-password fv__show-password-user1"></div>\n        </div>\n        <div class="fv__password-input">\n            Password Confirm: <input type="password" class="fv__password fv__user-password2" value="';
    $$out += $escape($data.userPassword);
    $$out += '" ';
    if (!$data.userPassword) {
        $$out += 'disabled';
    }
    $$out += ' onpaste="return false;" />\n            <div class="fv__show-password fv__show-password-user2"></div>\n        </div>\n        <div style="clear:both"></div>\n    </div>\n</div>\n<div class="fv__owner-password-container fv__password-container">\n    <div class="fv__password-caption">Document Restriction Settings</div>\n    <label>\n        <input type="checkbox" class="fv__owner-password-checkbox" ';
    if ($data.ownerPassword) {
        $$out += 'checked';
    }
    $$out += '/>\n        Add Document Restriction\n    </label>\n    <div class="fv__owner-password-input">\n        <div class="fv__password-input">\n            Password Input: <input type="password"  class="fv__password fv__owner-password1" value="';
    $$out += $escape($data.ownerPassword);
    $$out += '" ';
    if (!$data.ownerPassword) {
        $$out += 'disabled';
    }
    $$out += ' onpaste="return false;" />\n            <div class="fv__show-password fv__show-password-owner1"></div>\n        </div>\n        <div class="fv__password-input">\n            Password Confirm: <input type="password" class="fv__password fv__owner-password2" value="';
    $$out += $escape($data.ownerPassword);
    $$out += '" ';
    if (!$data.ownerPassword) {
        $$out += 'disabled';
    }
    $$out += ' onpaste="return false;" />\n            <div class="fv__show-password fv__show-password-owner2"></div>\n        </div>\n        <div style="clear:both"></div>\n    </div>\n    <div class="fv__password-caption">Permission Specification</div>\n    <div>\n        <div>\n            <span class="fv__permission-label">Printing: </span>\n            <select class="fv__permission-print" ';
    if (!$data.ownerPassword) {
        $$out += 'disabled';
    }
    $$out += '>\n                <option value="0" ';
    if ($data.print == 0) {
        $$out += ' selected';
    }
    $$out += '>None</option>\n                <option value="1" ';
    if ($data.print == 1) {
        $$out += ' selected';
    }
    $$out += '>Low Resolution(150 dpi)</option>\n                <option value="2" ';
    if ($data.print == 2) {
        $$out += ' selected';
    }
    $$out += '>High Resolution</option>\n            </select>\n        </div>\n        <div>\n            <span class="fv__permission-label">Accessibility:</span>\n            <input type="checkbox" class="fv__permission-accessibility" ';
    if (!$data.ownerPassword) {
        $$out += 'disabled';
    }
    $$out += ' ';
    if ($data.accessibility) {
        $$out += ' checked';
    }
    $$out += '/>\n        </div>\n        <div>\n            <span class="fv__permission-label">Copying:</span>\n            <input type="checkbox"  class="fv__permission-copy" ';
    if (!$data.ownerPassword) {
        $$out += 'disabled';
    }
    $$out += ' ';
    if ($data.copy) {
        $$out += ' checked';
    }
    $$out += '/>\n        </div>\n        <div>\n            <span class="fv__permission-label">Changes:</span>\n            <select class="fv__permission-change" ';
    if (!$data.ownerPassword) {
        $$out += 'disabled';
    }
    $$out += '>\n                <option value="0" ';
    if ($data.change == 0) {
        $$out += ' selected';
    }
    $$out += '>None</option>\n                <option value="1" ';
    if ($data.change == 1) {
        $$out += ' selected';
    }
    $$out += '>Inserting, deleting and rotation pages</option>\n                <option value="2" ';
    if ($data.change == 2) {
        $$out += ' selected';
    }
    $$out += '>Filling in forms and signing existing signature fields</option>\n                <option value="3" ';
    if ($data.change == 3) {
        $$out += ' selected';
    }
    $$out += '>Commenting, filling form, signing existing signature fields</option>\n                <option value="4" ';
    if ($data.change == 4) {
        $$out += ' selected';
    }
    $$out += '>Any except extracting pages</option>\n            </select>\n        </div>\n    </div>\n</div>\n<div class="fv__encrypt-setting-container fv__password-container">\n    <div class="fv__password-caption">Encrypt Settings</div>\n    <div>\n        Encryption Algorithm: \n        <label><input name="algorithm" class="fv__algorithm-radio" type="radio" value="aes128" ';
    if ($data.cipherType == 'aes128') {
        $$out += 'checked';
    }
    $$out += ' />128-bit AES</label> \n        <label><input name="algorithm" class="fv__algorithm-radio" type="radio" value="aes256" ';
    if ($data.cipherType == 'aes256') {
        $$out += 'checked';
    }
    $$out += ' />256-bit AES</label> \n    </div>\n    <div>\n        <label><input type="checkbox" class="fv__encrypt-not-metadata" ';
    if (!$data.isEncryptMetadata) {
        $$out += 'checked';
    }
    $$out += '/>Don\'t encrypt metadata</label> \n    </div>\n</div>\n<div class="fv__button-container">\n    <button type="button" class="fv__password-btn" ';
    if (!$data.ownerPassword && !$data.userPassword) {
        $$out += 'disabled';
    }
    $$out += '>OK</button>\n    <button type="button" class="fv__password-cancel">Cancel</button>\n</div>';
    return $$out;
};

/***/ }),

/***/ "./uix-addons/password-protect/remove-template.art":
/*!*********************************************************!*\
  !*** ./uix-addons/password-protect/remove-template.art ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<div name="password-protect">\n    <xbutton name="remove-protect-btn" icon-class="fv__icon-remove-protect" @tooltip></xbutton>\n</div>';
    return $$out;
};

/***/ }),

/***/ "./uix-addons/password-protect/removeCallbackController.js":
/*!*****************************************************************!*\
  !*** ./uix-addons/password-protect/removeCallbackController.js ***!
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

var Events = UIExtension.PDFViewCtrl.Events;

var RemoveProtectCallbackController = function (_UIExtension$Controll) {
    _inherits(RemoveProtectCallbackController, _UIExtension$Controll);

    function RemoveProtectCallbackController(component) {
        _classCallCheck(this, RemoveProtectCallbackController);

        return _possibleConstructorReturn(this, _UIExtension$Controll.call(this, component));
    }

    RemoveProtectCallbackController.prototype.handle = function handle() {
        var _this2 = this;

        _UIExtension$Controll.prototype.handle.call(this);
        if (!this.active) return;
        if (this.needPassword) {
            this.ownerPasswordPopop.setSubmitCallback(function (password) {
                _this2.currentDoc.checkPassword(password).then(function (type) {
                    if (type == 3) {
                        _this2.ownerPasswordPopop.hide();
                        _this2.needPassword = false;
                        _this2.currentDoc.setPasswordType(type);
                        _this2.handle();
                    } else {
                        _this2.ownerPasswordPopop.showError("Owner password is nor correct");
                    }
                });
            });
            this.ownerPasswordPopop.hideError();
            this.ownerPasswordPopop.resetInput();
            this.ownerPasswordPopop.show();
        } else {
            if (window.confirm("Are you sure you want to remove security from this document?")) {
                this.currentDoc.removeSecurity().then(function (result) {
                    if (result) {
                        _this2.removeSecurityEvent();
                    } else {}
                }).catch(function (e) {
                    console.log(e);
                });
            }
        }
    };

    RemoveProtectCallbackController.prototype.mounted = function mounted() {
        var _this3 = this;

        var pdfUi = this.getPDFUI();
        this.ownerPasswordPopop = this.getComponentByName("owner-password-popup");
        pdfUi.addViewerEventListener(Events.openFileSuccess, function (pdfDoc) {
            _this3.currentDoc = pdfDoc;
            pdfDoc.getPasswordType().then(function (type) {
                if (type == 2) {
                    _this3.activeBtn();
                    _this3.needPassword = true;
                } else if (type == 3) {
                    _this3.activeBtn();
                    _this3.needPassword = false;
                } else {
                    _this3.inActiveBtn();
                }
            });
        });
    };

    RemoveProtectCallbackController.prototype.activeBtn = function activeBtn() {
        this.component.element.classList.remove("fv__password-disabled-cursor");
        this.active = true;
    };

    RemoveProtectCallbackController.prototype.inActiveBtn = function inActiveBtn() {
        this.component.element.classList.add("fv__password-disabled-cursor");
        this.active = false;
    };

    RemoveProtectCallbackController.prototype.removeSecurityEvent = function removeSecurityEvent() {
        this.inActiveBtn();

        var passwordCpmponent = this.getComponentByName("password-protect-btn");
        passwordCpmponent.controller.setDefaultData();
        passwordCpmponent.controller.needPassword = false;
    };

    return RemoveProtectCallbackController;
}(UIExtension.Controller);

exports.default = RemoveProtectCallbackController;

/***/ }),

/***/ "./uix-addons/password-protect/scss/index.scss":
/*!*****************************************************!*\
  !*** ./uix-addons/password-protect/scss/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./uix-addons/password-protect/template.art":
/*!**************************************************!*\
  !*** ./uix-addons/password-protect/template.art ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<div name="password-protect">\n    <xbutton name="password-protect-btn" icon-class="fv__icon-password-protect" @tooltip></xbutton>\n    <password-protect:password-protect-popup name="password-protect-popup" append-to="body" class="center" modal backdrop>\n        <layer-header title="password-protect:buttons.title" @draggable="{type:\'parent\'}"></layer-header>\n        <layer-view>\n        </layer-view>\n    </password-protect:password-protect-popup>\n\n    <password-protect:owner-password-popup name="owner-password-popup" append-to="body" class="center" modal backdrop>\n        <layer-header title="password-protect:buttons.title" @draggable="{type:\'parent\'}"></layer-header>\n        <layer-view>\n            <div class="fv__input-owner-password" data-i18n="password-protect:buttons.inputOwnerPassword"></div>\n            <div class="fv__password-protect-error fv__hide"></div>\n            <input type="password" class="fv__owner-password-input"/>\n            <div class="fv__button-container">\n                <button type="button" class="fv__password-btn">Ok</button>\n                <button type="button" class="fv__password-cancel">Cancel</button>\n            </div>\n        </layer-view>\n    </password-protect:password-protect-popup>\n</div>';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QYXNzd29yZFByb3RlY3RBZGRvbi93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUGFzc3dvcmRQcm90ZWN0QWRkb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUGFzc3dvcmRQcm90ZWN0QWRkb24vLi9ub2RlX21vZHVsZXMvYXJ0LXRlbXBsYXRlL2xpYi9jb21waWxlL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vUGFzc3dvcmRQcm90ZWN0QWRkb24vLi9ub2RlX21vZHVsZXMvYXJ0LXRlbXBsYXRlL2xpYi9ydW50aW1lLmpzIiwid2VicGFjazovL1Bhc3N3b3JkUHJvdGVjdEFkZG9uLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9QYXNzd29yZFByb3RlY3RBZGRvbi8uL3VpeC1hZGRvbnMvcGFzc3dvcmQtcHJvdGVjdC9hZGRvbi5pbmZvLmpzb24iLCJ3ZWJwYWNrOi8vUGFzc3dvcmRQcm90ZWN0QWRkb24vLi91aXgtYWRkb25zL3Bhc3N3b3JkLXByb3RlY3QvY2FsbGJhY2tDb250cm9sbGVyLmpzIiwid2VicGFjazovL1Bhc3N3b3JkUHJvdGVjdEFkZG9uLy4vdWl4LWFkZG9ucy9wYXNzd29yZC1wcm90ZWN0L2luZGV4LmpzIiwid2VicGFjazovL1Bhc3N3b3JkUHJvdGVjdEFkZG9uLy4vdWl4LWFkZG9ucy9wYXNzd29yZC1wcm90ZWN0L3BvcHVwLW93bmVyLXBhc3N3b3JkL2luZGV4LmpzIiwid2VicGFjazovL1Bhc3N3b3JkUHJvdGVjdEFkZG9uLy4vdWl4LWFkZG9ucy9wYXNzd29yZC1wcm90ZWN0L3BvcHVwLW93bmVyLXBhc3N3b3JkL2luZGV4LnNjc3M/NTZhNSIsIndlYnBhY2s6Ly9QYXNzd29yZFByb3RlY3RBZGRvbi8uL3VpeC1hZGRvbnMvcGFzc3dvcmQtcHJvdGVjdC9wb3B1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9QYXNzd29yZFByb3RlY3RBZGRvbi8uL3VpeC1hZGRvbnMvcGFzc3dvcmQtcHJvdGVjdC9wb3B1cC9pbmRleC5zY3NzPzg2YTEiLCJ3ZWJwYWNrOi8vUGFzc3dvcmRQcm90ZWN0QWRkb24vLi91aXgtYWRkb25zL3Bhc3N3b3JkLXByb3RlY3QvcG9wdXAvcG9wdXAuYXJ0Iiwid2VicGFjazovL1Bhc3N3b3JkUHJvdGVjdEFkZG9uLy4vdWl4LWFkZG9ucy9wYXNzd29yZC1wcm90ZWN0L3JlbW92ZS10ZW1wbGF0ZS5hcnQiLCJ3ZWJwYWNrOi8vUGFzc3dvcmRQcm90ZWN0QWRkb24vLi91aXgtYWRkb25zL3Bhc3N3b3JkLXByb3RlY3QvcmVtb3ZlQ2FsbGJhY2tDb250cm9sbGVyLmpzIiwid2VicGFjazovL1Bhc3N3b3JkUHJvdGVjdEFkZG9uLy4vdWl4LWFkZG9ucy9wYXNzd29yZC1wcm90ZWN0L3Njc3MvaW5kZXguc2Nzcz8yOGNiIiwid2VicGFjazovL1Bhc3N3b3JkUHJvdGVjdEFkZG9uLy4vdWl4LWFkZG9ucy9wYXNzd29yZC1wcm90ZWN0L3RlbXBsYXRlLmFydCIsIndlYnBhY2s6Ly9QYXNzd29yZFByb3RlY3RBZGRvbi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiVUlFeHRlbnNpb25cIixcImNvbW1vbmpzMlwiOlwiVUlFeHRlbnNpb25cIixcImFtZFwiOlwiVUlFeHRlbnNpb25cIixcInJvb3RcIjpcIlVJRXh0ZW5zaW9uXCJ9Il0sIm5hbWVzIjpbIlVJRXh0ZW5zaW9uIiwiRXZlbnRzIiwiUERGVmlld0N0cmwiLCJQYXNzd29yZFByb3RlY3RDYWxsYmFja0NvbnRyb2xsZXIiLCJjb21wb25lbnQiLCJoYW5kbGUiLCJpc1JlYWR5IiwibmVlZFBhc3N3b3JkIiwib3duZXJQYXNzd29yZFBvcG9wIiwic2V0U3VibWl0Q2FsbGJhY2siLCJwYXNzd29yZCIsImN1cnJlbnREb2MiLCJjaGVja1Bhc3N3b3JkIiwidGhlbiIsInR5cGUiLCJkYXRhIiwib3duZXJQYXNzd29yZCIsImhpZGUiLCJzZXRQYXNzd29yZFR5cGUiLCJzaG93RXJyb3IiLCJoaWRlRXJyb3IiLCJyZXNldElucHV0Iiwic2hvdyIsInBvcG9wIiwidXBkYXRlRGF0YSIsInNldERlZmF1bHREYXRhIiwiZGVmYXVsdERhdGEiLCJ1c2VyUGFzc3dvcmQiLCJpc0VuY3J5cHRNZXRhZGF0YSIsImNpcGhlclR5cGUiLCJwcmludCIsImFjY2Vzc2liaWxpdHkiLCJjb3B5IiwiY2hhbmdlIiwibW91bnRlZCIsImdldENvbXBvbmVudEJ5TmFtZSIsInBkZlVpIiwiZ2V0UERGVUkiLCJhZGRWaWV3ZXJFdmVudExpc3RlbmVyIiwib3BlbkZpbGVTdWNjZXNzIiwicGRmRG9jIiwicGVybWlzc2lvbiIsImNpcGhlciIsImlzRW5jcnlwdE1ldGFEYXRhIiwic2V0UGFzc3dvcmRBbmRQZXJtaXNzaW9uIiwicmVzdWx0IiwiY29udmVydFBlcm1pc3Npb24iLCJyZW1vdmVDcG1wb25lbnQiLCJjb250cm9sbGVyIiwiYWN0aXZlQnRuIiwiY2F0Y2giLCJlIiwiZ2V0UGFzc3dvcmRUeXBlIiwiZ2V0U3RkQ2lwaGVyT3B0aW9ucyIsIm9wdGlvbnMiLCJnZXRVc2VyUGFzc3dvcmQiLCJDb250cm9sbGVyIiwidGVtcGxhdGUiLCJyZW1vdmVBcnQiLCJQYXNzd29yZFByb3RlY3RBZGRvbiIsImdldE5hbWUiLCJnZXRMb2FkZXIiLCJ0cG1Mb2FkZXIiLCJpbml0IiwibW9kdWxlIiwibW9kdWxhciIsInJlZ2lzdHJ5IiwiZ2V0UmVnaXN0cnkiLCJyZWdpc3RlckNvbXBvbmVudCIsIlBvcHVwQ29tcG9uZW50IiwiUG9wdXBPd25lclBhc3N3b3JkQ29tcG9uZW50IiwiZnJhZ21lbnRzIiwidGFyZ2V0IiwiYWN0aW9uIiwiVUlDb25zdHMiLCJGUkFHTUVOVF9BQ1RJT04iLCJBUFBFTkQiLCJjb25maWciLCJ0b29sdGlwIiwidGl0bGUiLCJjYWxsYmFjayIsIlJlbW92ZVByb3RlY3RDYWxsYmFja0NvbnRyb2xsZXIiLCJVSVhBZGRvbiIsInJlbmRlciIsImRlc3Ryb3lIb29rcyIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJsb2NhbGl6ZSIsImJpbmRFdmVudCIsInNlbGVjdG9yIiwiZXZlbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInB1c2giLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3VibWl0IiwidmFsdWUiLCJzdWJtaXRDYWxsYmFjayIsImVycm9yIiwicmVtb3ZlIiwiaW5uZXJIVE1MIiwiZGVzdHJveSIsImZvckVhY2giLCJob29rIiwid2lkZ2V0cyIsIkxheWVyQ29tcG9uZW50IiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZ2V0Rm9ybURhdGFBbmRDaGVja0RhdGFWYWxpZCIsImFsZ29yaXRobXMiLCJkb2N1bWVudCIsImFsZ29yaXRobSIsIml0ZW0iLCJjaGVja2VkIiwidXNlclB3ZEFjdGl2ZSIsInVzZXJQd2QxIiwidXNlclB3ZDIiLCJzZXRBdHRyaWJ1dGUiLCJvcmlnaW5EYXRhIiwib3duZXJQd2RBY3RpdmUiLCJvd25lclB3ZDEiLCJvd25lclB3ZDIiLCJlbmNyeXB0TWV0YWRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjdXJyZW50Iiwic3JjRWxlbWVudCIsImNvbnRhaW5zIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInBhdHRlbiIsInJlcGxhY2UiLCJpbnB1dHMiLCJpbnB1dCIsImRpc2FibGVkIiwiaXNGaXJzdCIsImFyZ3MiLCJpc1dhcm4iLCJhY3RpdmUiLCJ3aW5kb3ciLCJjb25maXJtIiwicmVtb3ZlU2VjdXJpdHkiLCJyZW1vdmVTZWN1cml0eUV2ZW50IiwiY29uc29sZSIsImxvZyIsImluQWN0aXZlQnRuIiwicGFzc3dvcmRDcG1wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBLDhDQUFhOztBQUViOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksSUFBSTtBQUNoQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFNBQVM7QUFDbkQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsaUJBQWlCO0FBQy9EO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7O0FDbEdhOztBQUViLGlCQUFpQixtQkFBTyxDQUFDLDZFQUFtQixFOzs7Ozs7Ozs7OztBQ0Y1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7SUFBWUEsVzs7Ozs7Ozs7Ozs7O0lBRVJDLE0sR0FDQUQsWUFBWUUsVyxDQURaRCxNOztJQUVFRSxpQzs7O0FBQ0YsK0NBQWFDLFNBQWIsRUFBd0I7QUFBQTs7QUFBQSxnREFDcEIsaUNBQU1BLFNBQU4sQ0FEb0I7QUFFdkI7O2dEQUNEQyxNLHFCQUFTO0FBQUE7O0FBQ0wsWUFBRyxDQUFDLEtBQUtDLE9BQVQsRUFBa0I7QUFDZDtBQUNBO0FBQ0g7QUFDRCxZQUFHLEtBQUtDLFlBQVIsRUFBcUI7QUFDakIsaUJBQUtDLGtCQUFMLENBQXdCQyxpQkFBeEIsQ0FBMEMsVUFBQ0MsUUFBRCxFQUFZO0FBQ2xELHVCQUFLQyxVQUFMLENBQWdCQyxhQUFoQixDQUE4QkYsUUFBOUIsRUFBd0NHLElBQXhDLENBQTZDLFVBQUNDLElBQUQsRUFBUTtBQUNqRCx3QkFBR0EsUUFBUSxDQUFYLEVBQWE7QUFDVCwrQkFBS0MsSUFBTCxDQUFVQyxhQUFWLEdBQTBCTixRQUExQjtBQUNBLCtCQUFLSCxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsK0JBQUtDLGtCQUFMLENBQXdCUyxJQUF4QjtBQUNBLCtCQUFLTixVQUFMLENBQWdCTyxlQUFoQixDQUFnQ0osSUFBaEM7QUFDQSwrQkFBS1QsTUFBTDtBQUNILHFCQU5ELE1BTUs7QUFDRCwrQkFBS0csa0JBQUwsQ0FBd0JXLFNBQXhCLENBQWtDLCtCQUFsQztBQUNIO0FBQ0osaUJBVkQ7QUFXSCxhQVpEO0FBYUEsaUJBQUtYLGtCQUFMLENBQXdCWSxTQUF4QjtBQUNBLGlCQUFLWixrQkFBTCxDQUF3QmEsVUFBeEI7QUFDQSxpQkFBS2Isa0JBQUwsQ0FBd0JjLElBQXhCO0FBQ0gsU0FqQkQsTUFpQks7QUFDRCxpQkFBS0MsS0FBTCxDQUFXQyxVQUFYLENBQXNCLEtBQUtULElBQTNCO0FBQ0EsaUJBQUtRLEtBQUwsQ0FBV0QsSUFBWDtBQUNIO0FBRUosSzs7Z0RBRURHLGMsNkJBQWdCO0FBQ1osWUFBSUMsY0FBYztBQUNkQywwQkFBYyxFQURBO0FBRWRYLDJCQUFlLEVBRkQ7QUFHZFksK0JBQW1CLElBSEw7QUFJZEMsd0JBQVksUUFKRTtBQUtkQyxtQkFBTSxDQUxRO0FBTWRDLDJCQUFjLElBTkE7QUFPZEMsa0JBQUssSUFQUztBQVFkQyxvQkFBTztBQVJPLFNBQWxCO0FBVUEsYUFBS2xCLElBQUwsR0FBWVcsV0FBWjtBQUNILEs7O2dEQUVEUSxPLHNCQUFVO0FBQUE7O0FBQ04sYUFBS1gsS0FBTCxHQUFhLEtBQUtZLGtCQUFMLENBQXdCLHdCQUF4QixDQUFiO0FBQ0EsYUFBSzNCLGtCQUFMLEdBQTBCLEtBQUsyQixrQkFBTCxDQUF3QixzQkFBeEIsQ0FBMUI7O0FBRUEsWUFBSUMsUUFBUSxLQUFLQyxRQUFMLEVBQVo7QUFDQUQsY0FBTUUsc0JBQU4sQ0FBNkJyQyxPQUFPc0MsZUFBcEMsRUFBcUQsVUFBQ0MsTUFBRCxFQUFZO0FBQzdELG1CQUFLN0IsVUFBTCxHQUFrQjZCLE1BQWxCO0FBQ0EsbUJBQUtqQyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsbUJBQUtELE9BQUwsR0FBZSxLQUFmO0FBQ0EsbUJBQUttQixjQUFMO0FBQ0EsbUJBQUtGLEtBQUwsQ0FBV2QsaUJBQVgsQ0FBNkIsVUFBQ2tCLFlBQUQsRUFBZVgsYUFBZixFQUE4QnlCLFVBQTlCLEVBQTBDQyxNQUExQyxFQUFrREMsaUJBQWxELEVBQXdFO0FBQ2pHSCx1QkFBT0ksd0JBQVAsQ0FBZ0NqQixZQUFoQyxFQUE4Q1gsYUFBOUMsRUFBNkR5QixVQUE3RCxFQUF5RUMsTUFBekUsRUFBaUZDLGlCQUFqRixFQUFvRzlCLElBQXBHLENBQXlHLFVBQUNnQyxNQUFELEVBQVU7QUFDL0csd0JBQUdBLE1BQUgsRUFBVTtBQUNOLDRCQUFHbEIsZ0JBQWdCLENBQUMsQ0FBcEIsRUFBc0I7QUFDbEIsbUNBQUtaLElBQUwsQ0FBVVksWUFBVixHQUF5QkEsWUFBekI7QUFDSDtBQUNELCtCQUFLWixJQUFMLENBQVVDLGFBQVYsR0FBMEJBLGFBQTFCO0FBQ0EsK0JBQUtELElBQUwsQ0FBVWMsVUFBVixHQUF1QmEsTUFBdkI7QUFDQSwrQkFBSzNCLElBQUwsQ0FBVWEsaUJBQVYsR0FBOEJlLGlCQUE5QjtBQUNBLCtCQUFLNUIsSUFBTCxDQUFVMEIsVUFBVixHQUF1QkEsVUFBdkI7QUFDQSwrQkFBSzFCLElBQUwsR0FBWSxPQUFLK0IsaUJBQUwsQ0FBdUIsT0FBSy9CLElBQTVCLENBQVo7O0FBRUEsNEJBQUlnQyxrQkFBa0IsT0FBS1osa0JBQUwsQ0FBd0Isb0JBQXhCLENBQXRCO0FBQ0FZLHdDQUFnQkMsVUFBaEIsQ0FBMkJDLFNBQTNCO0FBQ0EsK0JBQUt0QyxVQUFMLENBQWdCTyxlQUFoQixDQUFnQyxDQUFoQztBQUNBLCtCQUFLSyxLQUFMLENBQVdOLElBQVg7QUFDSCxxQkFkRCxNQWNLO0FBQ0QsK0JBQUtNLEtBQUwsQ0FBV0osU0FBWDtBQUNIO0FBQ0osaUJBbEJELEVBa0JHK0IsS0FsQkgsQ0FrQlMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ1osMkJBQUs1QixLQUFMLENBQVdKLFNBQVgsQ0FBcUJnQyxDQUFyQjtBQUNILGlCQXBCRDtBQXFCSCxhQXRCRDs7QUF3QkFYLG1CQUFPWSxlQUFQLEdBQXlCdkMsSUFBekIsQ0FBOEIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3BDLG9CQUFHQSxRQUFRLENBQVgsRUFBYTtBQUNULDJCQUFLUCxZQUFMLEdBQW9CLElBQXBCO0FBQ0E7QUFDSDtBQUNELHVCQUFPaUMsT0FBT2EsbUJBQVAsRUFBUDtBQUNILGFBTkQsRUFNR3hDLElBTkgsQ0FNUSxVQUFDeUMsT0FBRCxFQUFhO0FBQ2pCO0FBQ0Esb0JBQUcsT0FBT0EsUUFBUWIsVUFBZixLQUE4QixXQUFqQyxFQUE2QztBQUN6QywyQkFBS2hCLGNBQUw7QUFDSCxpQkFGRCxNQUVLO0FBQ0QsMkJBQUtWLElBQUwsR0FBWSxPQUFLK0IsaUJBQUwsQ0FBdUJRLE9BQXZCLENBQVo7QUFDQSwyQkFBS3ZDLElBQUwsQ0FBVVksWUFBVixHQUF5QixFQUF6QjtBQUNBLDJCQUFLWixJQUFMLENBQVVDLGFBQVYsR0FBMEIsRUFBMUI7QUFDSDtBQUNELG9CQUFHLE9BQUtMLFVBQUwsQ0FBZ0JELFFBQW5CLEVBQTRCO0FBQ3hCLDJCQUFPLE9BQUtDLFVBQUwsQ0FBZ0JDLGFBQWhCLENBQThCLE9BQUtELFVBQUwsQ0FBZ0JELFFBQTlDLENBQVA7QUFDSCxpQkFGRCxNQUVLO0FBQ0QsMkJBQUtKLE9BQUwsR0FBZSxJQUFmO0FBQ0EsMkJBQU8sS0FBUDtBQUNIO0FBQ0osYUFyQkQsRUFxQkdPLElBckJILENBcUJRLFVBQUNnQyxNQUFELEVBQVk7QUFDaEIsb0JBQUdBLFdBQVcsS0FBZCxFQUFxQixPQUFPLEtBQVA7QUFDckIsdUJBQUt2QyxPQUFMLEdBQWUsSUFBZjtBQUNBO0FBQ0Esb0JBQUd1QyxXQUFXLENBQWQsRUFBZ0I7QUFDWiwyQkFBSzlCLElBQUwsQ0FBVUMsYUFBVixHQUEwQixPQUFLTCxVQUFMLENBQWdCRCxRQUExQztBQUNBLHdCQUFHLE9BQUtLLElBQUwsQ0FBVWMsVUFBVixJQUF3QixRQUEzQixFQUFvQztBQUNoQywrQkFBS2xCLFVBQUwsQ0FBZ0I0QyxlQUFoQixDQUFnQyxPQUFLNUMsVUFBTCxDQUFnQkQsUUFBaEQsRUFBMERHLElBQTFELENBQStELFVBQUNjLFlBQUQsRUFBa0I7QUFDN0UsbUNBQUtaLElBQUwsQ0FBVVksWUFBVixHQUF5QkEsWUFBekI7QUFDSCx5QkFGRDtBQUdIO0FBQ0osaUJBUEQsTUFPTSxJQUFHa0IsV0FBVyxDQUFkLEVBQWdCO0FBQ2xCLDJCQUFLOUIsSUFBTCxDQUFVWSxZQUFWLEdBQXlCLE9BQUtoQixVQUFMLENBQWdCRCxRQUF6QztBQUNIO0FBQ0osYUFuQ0Q7QUFxQ0gsU0FsRUQ7QUFtRUgsSzs7Z0RBRURvQyxpQiw4QkFBa0JRLE8sRUFBUTtBQUN0QixZQUFJYixhQUFhYSxRQUFRYixVQUF6QjtBQUNBLFlBQUdBLGFBQWEsSUFBaEIsRUFBK0I7QUFDM0JhLG9CQUFReEIsS0FBUixHQUFnQixDQUFoQjtBQUNILFNBRkQsTUFFTSxJQUFHVyxhQUFhLENBQWhCLEVBQXNCO0FBQ3hCYSxvQkFBUXhCLEtBQVIsR0FBZ0IsQ0FBaEI7QUFDSCxTQUZLLE1BRUQ7QUFDRHdCLG9CQUFReEIsS0FBUixHQUFnQixDQUFoQjtBQUNIOztBQUVELFlBQUdXLGFBQWEsR0FBaEIsRUFBNkI7QUFDekJhLG9CQUFRdkIsYUFBUixHQUF3QixJQUF4QjtBQUNILFNBRkQsTUFFSztBQUNEdUIsb0JBQVF2QixhQUFSLEdBQXdCLEtBQXhCO0FBQ0g7O0FBRUQsWUFBR1UsYUFBYSxFQUFoQixFQUF3QjtBQUNwQmEsb0JBQVF0QixJQUFSLEdBQWUsSUFBZjtBQUNILFNBRkQsTUFFSztBQUNEc0Isb0JBQVF0QixJQUFSLEdBQWUsS0FBZjtBQUNIOztBQUVELFlBQUdTLGFBQWEsQ0FBYixJQUF1QkEsYUFBYSxFQUFwQyxJQUFnREEsYUFBYSxHQUFoRSxFQUE0RTtBQUN4RWEsb0JBQVFyQixNQUFSLEdBQWlCLENBQWpCO0FBQ0gsU0FGRCxNQUVNLElBQUdRLGFBQWEsRUFBYixJQUF5QkEsYUFBYSxHQUF6QyxFQUFxRDtBQUN2RGEsb0JBQVFyQixNQUFSLEdBQWlCLENBQWpCO0FBQ0gsU0FGSyxNQUVBLElBQUdRLGFBQWEsR0FBaEIsRUFBNEI7QUFDOUJhLG9CQUFRckIsTUFBUixHQUFpQixDQUFqQjtBQUNILFNBRkssTUFFQSxJQUFHUSxhQUFhLElBQWhCLEVBQThCO0FBQ2hDYSxvQkFBUXJCLE1BQVIsR0FBaUIsQ0FBakI7QUFDSCxTQUZLLE1BRUQ7QUFDRHFCLG9CQUFRckIsTUFBUixHQUFpQixDQUFqQjtBQUNIO0FBQ0QsZUFBT3FCLE9BQVA7QUFDSCxLOzs7RUEzSjJDdEQsWUFBWXdELFU7O2tCQThKN0NyRCxpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbktmOztJQUFZSCxXOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTXlELFdBQVcseUJBQWpCO0FBQ0EsSUFBTUMsWUFBWSwrQkFBbEI7O0lBRXFCQyxvQjs7Ozs7Ozs7O3lCQUNWQyxPLHNCQUFVO0FBQ2IsZUFBTyxrQkFBUDtBQUNILEs7O3lCQUNNQyxTLHdCQUFZO0FBQ2YsZUFBT0MsbUJBQVA7QUFDSCxLOzttQ0FDREMsSSxtQkFBTztBQUNILFlBQU1DLFNBQVNoRSxZQUFZaUUsT0FBWixDQUFvQkQsTUFBcEIsQ0FBMkIsa0JBQTNCLEVBQStDLEVBQS9DLENBQWY7QUFDQSxZQUFNRSxXQUFXRixPQUFPRyxXQUFQLEVBQWpCO0FBQ0EsYUFBS0gsTUFBTCxHQUFjQSxNQUFkO0FBQ0FFLGlCQUFTRSxpQkFBVCxDQUEyQkMsZUFBM0I7QUFDQUgsaUJBQVNFLGlCQUFULENBQTJCRSw0QkFBM0I7QUFDSCxLOzttQ0FDREMsUyx3QkFBWTtBQUNSLGVBQU8sQ0FBQztBQUNKQyxvQkFBUSw0QkFESjtBQUVKQyxvQkFBUXpFLFlBQVkwRSxRQUFaLENBQXFCQyxlQUFyQixDQUFxQ0MsTUFGekM7QUFHSm5CLHVHQUhJO0FBSUpvQixvQkFBUSxDQUFDO0FBQ0xMLHdCQUFRO0FBREgsYUFBRDtBQUpKLFNBQUQsRUFPTDtBQUNFQSxvQkFBUSx3QkFEVjtBQUVFQyxvQkFBUXpFLFlBQVkwRSxRQUFaLENBQXFCQyxlQUFyQixDQUFxQ0MsTUFGL0M7QUFHRW5CLHNCQUFVQSxRQUhaO0FBSUVvQixvQkFBUSxDQUFDO0FBQ0xMLHdCQUFRLHNCQURIO0FBRUxNLHlCQUFTO0FBQ0xDLDJCQUFPO0FBREYsaUJBRko7QUFLTEMsMEJBQVU3RTtBQUxMLGFBQUQ7QUFKVixTQVBLLEVBbUJQO0FBQ0lxRSxvQkFBUSx3QkFEWjtBQUVJQyxvQkFBUXpFLFlBQVkwRSxRQUFaLENBQXFCQyxlQUFyQixDQUFxQ0MsTUFGakQ7QUFHSW5CLHNCQUFVQyxTQUhkO0FBSUltQixvQkFBUSxDQUFDO0FBQ0xMLHdCQUFRLG9CQURIO0FBRUxNLHlCQUFTO0FBQ0xDLDJCQUFPO0FBREYsaUJBRko7QUFLTEMsMEJBQVVDO0FBTEwsYUFBRDtBQUpaLFNBbkJPLENBQVA7QUFpQ0gsSzs7O0VBaEQ2Q2pGLFlBQVlrRixROztrQkFBekN2QixvQjtBQWlEcEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUREOztJQUFZM0QsVzs7QUFDWjs7Ozs7Ozs7Ozs7O0lBRXFCc0UsMkI7Ozs7Ozs7OztnQ0FDVlYsTyxzQkFBVTtBQUNiLGVBQU8sc0JBQVA7QUFDSCxLOzswQ0FDRHVCLE0scUJBQVM7QUFDTCx3Q0FBTUEsTUFBTjtBQUNBLGFBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxhQUFLQyxPQUFMLENBQWFDLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLDBCQUEzQjtBQUNBLGFBQUtDLFFBQUw7QUFDSCxLOzswQ0FDREMsUyxzQkFBVUMsUSxFQUFVQyxLLEVBQU9YLFEsRUFBUztBQUNoQyxZQUFJSyxVQUFVLEtBQUtBLE9BQUwsQ0FBYU8sYUFBYixDQUEyQkYsUUFBM0IsQ0FBZDtBQUNBLFlBQUcsQ0FBQ0wsT0FBSixFQUFhO0FBQ2JBLGdCQUFRUSxnQkFBUixDQUF5QkYsS0FBekIsRUFBZ0NYLFFBQWhDO0FBQ0EsYUFBS0ksWUFBTCxDQUFrQlUsSUFBbEIsQ0FBdUIsWUFBTTtBQUN6QlQsb0JBQVFVLG1CQUFSLENBQTRCSixLQUE1QixFQUFtQ1gsUUFBbkM7QUFDSCxTQUZEO0FBR0gsSzs7MENBRUQ5QyxPLHNCQUFTO0FBQUE7O0FBQ0wsd0NBQU1BLE9BQU47QUFDQSxhQUFLdUQsU0FBTCxDQUFlLHNCQUFmLEVBQXVDLE9BQXZDLEVBQWdELFVBQUN0QyxDQUFELEVBQUs7QUFDakQsbUJBQUtsQyxJQUFMO0FBQ0gsU0FGRDs7QUFJQSxhQUFLd0UsU0FBTCxDQUFlLG1CQUFmLEVBQW9DLE9BQXBDLEVBQTZDLFVBQUN0QyxDQUFELEVBQUs7QUFDOUMsbUJBQUs2QyxNQUFMO0FBQ0gsU0FGRDtBQUdILEs7OzBDQUNEQSxNLHFCQUFRO0FBQ0osWUFBSXRGLFdBQVcsS0FBSzJFLE9BQUwsQ0FBYU8sYUFBYixDQUEyQiwyQkFBM0IsRUFBd0RLLEtBQXZFO0FBQ0EsWUFBRyxDQUFDdkYsUUFBSixFQUFhO0FBQ1QsaUJBQUtTLFNBQUwsQ0FBZSxnQ0FBZjtBQUNIO0FBQ0QsYUFBSytFLGNBQUwsQ0FBb0J4RixRQUFwQjtBQUNILEs7OzBDQUVERCxpQiw4QkFBa0J5RixjLEVBQWU7QUFDN0IsYUFBS0EsY0FBTCxHQUFzQkEsY0FBdEI7QUFDSCxLOzswQ0FDRC9FLFMsc0JBQVVnRixLLEVBQU07QUFDWixhQUFLZCxPQUFMLENBQWFPLGFBQWIsQ0FBMkIsNkJBQTNCLEVBQTBETixTQUExRCxDQUFvRWMsTUFBcEUsQ0FBMkUsVUFBM0U7QUFDQSxhQUFLZixPQUFMLENBQWFPLGFBQWIsQ0FBMkIsNkJBQTNCLEVBQTBEUyxTQUExRCxHQUFzRUYsS0FBdEU7QUFDSCxLOzswQ0FDRC9FLFMsd0JBQVc7QUFDUCxhQUFLaUUsT0FBTCxDQUFhTyxhQUFiLENBQTJCLDZCQUEzQixFQUEwRFMsU0FBMUQsR0FBc0UsRUFBdEU7QUFDQSxhQUFLaEIsT0FBTCxDQUFhTyxhQUFiLENBQTJCLDZCQUEzQixFQUEwRE4sU0FBMUQsQ0FBb0VDLEdBQXBFLENBQXdFLFVBQXhFO0FBQ0gsSzs7MENBQ0RsRSxVLHlCQUFZO0FBQ1IsYUFBS2dFLE9BQUwsQ0FBYU8sYUFBYixDQUEyQiwyQkFBM0IsRUFBd0RLLEtBQXhELEdBQWdFLEVBQWhFO0FBQ0gsSzs7MENBQ0RLLE8sc0JBQVc7QUFDUCxhQUFLbEIsWUFBTCxDQUFrQm1CLE9BQWxCLENBQTBCO0FBQUEsbUJBQVFDLE1BQVI7QUFBQSxTQUExQjtBQUNILEs7OztFQXJEb0R4RyxZQUFZeUcsT0FBWixDQUFvQkMsYzs7a0JBQXhEcEMsMkI7Ozs7Ozs7Ozs7O0FDSHJCLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7SUFBWXRFLFc7O0FBQ1o7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQnFFLGM7Ozs7Ozs7OzttQkFDVlQsTyxzQkFBVTtBQUNiLGVBQU8sd0JBQVA7QUFDSCxLOzs2QkFDRDZCLFMsc0JBQVVDLFEsRUFBVUMsSyxFQUFPWCxRLEVBQVM7QUFBQTs7QUFDaEMsWUFBSTJCLFdBQVcsS0FBS3RCLE9BQUwsQ0FBYXVCLGdCQUFiLENBQThCbEIsUUFBOUIsQ0FBZjtBQUNBLFlBQUdpQixTQUFTRSxNQUFULElBQW1CLENBQXRCLEVBQXlCO0FBQ3pCRixpQkFBU0osT0FBVCxDQUFpQixtQkFBVztBQUN4QmxCLG9CQUFRUSxnQkFBUixDQUF5QkYsS0FBekIsRUFBZ0NYLFFBQWhDO0FBQ0EsbUJBQUtJLFlBQUwsQ0FBa0JVLElBQWxCLENBQXVCLFlBQU07QUFDekJULHdCQUFRVSxtQkFBUixDQUE0QkosS0FBNUIsRUFBbUNYLFFBQW5DO0FBQ0gsYUFGRDtBQUdILFNBTEQ7QUFNSCxLOzs2QkFDREcsTSxxQkFBUztBQUNMLHdDQUFNQSxNQUFOO0FBQ0EsYUFBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNBLGFBQUtDLE9BQUwsQ0FBYUMsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsNEJBQTNCO0FBRUgsSzs7NkJBQ0Q5RSxpQiw4QkFBa0J5RixjLEVBQWU7QUFDN0IsYUFBS0EsY0FBTCxHQUFzQkEsY0FBdEI7QUFDSCxLOzs2QkFFRFksNEIsMkNBQThCO0FBQzFCLFlBQUlDLGFBQWFDLFNBQVNKLGdCQUFULENBQTBCLHlCQUExQixDQUFqQjtBQUNBLFlBQUlLLGtCQUFKO0FBQ0FGLG1CQUFXUixPQUFYLENBQW1CLFVBQUNXLElBQUQsRUFBVTtBQUN6QixnQkFBR0EsS0FBS0MsT0FBUixFQUFnQjtBQUNaRiw0QkFBWUMsS0FBS2pCLEtBQWpCO0FBQ0E7QUFDSDtBQUNKLFNBTEQ7O0FBT0EsWUFBSW1CLGdCQUFnQixLQUFLL0IsT0FBTCxDQUFhTyxhQUFiLENBQTJCLDZCQUEzQixFQUEwRHVCLE9BQTlFO0FBQ0EsWUFBSUUsaUJBQUo7QUFDQSxZQUFHRCxhQUFILEVBQWlCO0FBQ2JDLHVCQUFXLEtBQUtoQyxPQUFMLENBQWFPLGFBQWIsQ0FBMkIscUJBQTNCLEVBQWtESyxLQUE3RDtBQUNBLGdCQUFJcUIsV0FBVyxLQUFLakMsT0FBTCxDQUFhTyxhQUFiLENBQTJCLHFCQUEzQixFQUFrREssS0FBakU7QUFDQSxnQkFBR29CLGFBQWFDLFFBQWhCLEVBQXlCO0FBQ3JCLHFCQUFLakMsT0FBTCxDQUFhTyxhQUFiLENBQTJCLG1CQUEzQixFQUFnRDJCLFlBQWhELENBQTZELFVBQTdELEVBQXlFLEVBQXpFO0FBQ0Esb0JBQUdGLGFBQWEsRUFBYixJQUFtQkMsYUFBYSxFQUFuQyxFQUFzQztBQUNsQyx5QkFBS25HLFNBQUwsQ0FBZSx3Q0FBZjtBQUNIO0FBQ0QsdUJBQU8sS0FBUDtBQUNIO0FBQ0osU0FWRCxNQVVLO0FBQ0Q7QUFDQSxnQkFBRzhGLGFBQWEsUUFBaEIsRUFBeUI7QUFDckJJLDJCQUFXLENBQUMsQ0FBWjtBQUNILGFBRkQsTUFFSztBQUNEQSwyQkFBVyxLQUFLRyxVQUFMLENBQWdCN0YsWUFBM0I7QUFDSDtBQUNKOztBQUVELFlBQUk4RixpQkFBaUIsS0FBS3BDLE9BQUwsQ0FBYU8sYUFBYixDQUEyQiw4QkFBM0IsRUFBMkR1QixPQUFoRjtBQUNBLFlBQUlPLGtCQUFKO0FBQ0EsWUFBSTVGLGNBQUo7QUFBQSxZQUFXQyxzQkFBWDtBQUFBLFlBQTBCQyxhQUExQjtBQUFBLFlBQWdDQyxlQUFoQztBQUNBLFlBQUd3RixjQUFILEVBQWtCO0FBQ2RDLHdCQUFZLEtBQUtyQyxPQUFMLENBQWFPLGFBQWIsQ0FBMkIsc0JBQTNCLEVBQW1ESyxLQUEvRDtBQUNBLGdCQUFJMEIsWUFBWSxLQUFLdEMsT0FBTCxDQUFhTyxhQUFiLENBQTJCLHNCQUEzQixFQUFtREssS0FBbkU7QUFDQSxnQkFBR3lCLGNBQWNDLFNBQWpCLEVBQTJCO0FBQ3ZCLHFCQUFLdEMsT0FBTCxDQUFhTyxhQUFiLENBQTJCLG1CQUEzQixFQUFnRDJCLFlBQWhELENBQTZELFVBQTdELEVBQXlFLEVBQXpFO0FBQ0Esb0JBQUdHLGNBQWMsRUFBZCxJQUFvQkMsY0FBYyxFQUFyQyxFQUF3QztBQUNwQyx5QkFBS3hHLFNBQUwsQ0FBZSw4Q0FBZjtBQUNIO0FBQ0QsdUJBQU8sS0FBUDtBQUNIO0FBQ0RXLG9CQUFRLEtBQUt1RCxPQUFMLENBQWFPLGFBQWIsQ0FBMkIsdUJBQTNCLEVBQW9ESyxLQUE1RDtBQUNBbEUsNEJBQWdCLEtBQUtzRCxPQUFMLENBQWFPLGFBQWIsQ0FBMkIsK0JBQTNCLEVBQTREdUIsT0FBNUU7QUFDQW5GLG1CQUFPLEtBQUtxRCxPQUFMLENBQWFPLGFBQWIsQ0FBMkIsc0JBQTNCLEVBQW1EdUIsT0FBMUQ7QUFDQWxGLHFCQUFTLEtBQUtvRCxPQUFMLENBQWFPLGFBQWIsQ0FBMkIsd0JBQTNCLEVBQXFESyxLQUE5RDtBQUNILFNBZEQsTUFjSztBQUNEeUIsd0JBQVksS0FBS0YsVUFBTCxDQUFnQnhHLGFBQTVCO0FBQ0FjLG9CQUFRLEtBQUswRixVQUFMLENBQWdCMUYsS0FBeEI7QUFDQUMsNEJBQWdCLEtBQUt5RixVQUFMLENBQWdCekYsYUFBaEM7QUFDQUMsbUJBQU8sS0FBS3dGLFVBQUwsQ0FBZ0J4RixJQUF2QjtBQUNBQyxxQkFBUyxLQUFLdUYsVUFBTCxDQUFnQnZGLE1BQXpCO0FBQ0g7O0FBRUQsWUFBRyxDQUFDLENBQUNvRixRQUFELElBQWFBLFlBQVksQ0FBQyxDQUEzQixLQUFpQyxDQUFDSyxTQUFyQyxFQUErQztBQUMzQyxpQkFBS3JDLE9BQUwsQ0FBYU8sYUFBYixDQUEyQixtQkFBM0IsRUFBZ0QyQixZQUFoRCxDQUE2RCxVQUE3RCxFQUF5RSxFQUF6RTtBQUNBO0FBQ0EsbUJBQU8sS0FBUDtBQUNIO0FBQ0QsWUFBR0YsWUFBWUssU0FBZixFQUF5QjtBQUNyQixpQkFBS3ZHLFNBQUwsQ0FBZSxxS0FBZjtBQUNBLGlCQUFLa0UsT0FBTCxDQUFhTyxhQUFiLENBQTJCLG1CQUEzQixFQUFnRDJCLFlBQWhELENBQTZELFVBQTdELEVBQXlFLEVBQXpFO0FBQ0EsbUJBQU8sS0FBUDtBQUNIOztBQUdELFlBQUlLLGtCQUFrQixDQUFDLEtBQUt2QyxPQUFMLENBQWFPLGFBQWIsQ0FBMkIsMkJBQTNCLEVBQXdEdUIsT0FBL0U7O0FBRUEsWUFBSTFFLGFBQWEsTUFBakI7QUFDQSxZQUFHWCxRQUFRLENBQVgsRUFBYTtBQUNUVywwQkFBYyxJQUFkLENBRFMsQ0FDcUI7QUFDOUIsZ0JBQUdYLFFBQVEsQ0FBWCxFQUFhO0FBQ1RXLDhCQUFjLENBQWQsQ0FEUyxDQUNZO0FBQ3hCO0FBQ0o7QUFDRCxZQUFHLENBQUNWLGFBQUosRUFBa0I7QUFDZFUsMEJBQWMsR0FBZCxDQURjLENBQ2M7QUFDL0I7QUFDRCxZQUFHLENBQUNULElBQUosRUFBUztBQUNMUywwQkFBYyxFQUFkLENBREssQ0FDa0I7QUFDMUI7QUFDRCxZQUFHUixXQUFXLENBQWQsRUFBZ0I7QUFDWlEsMEJBQWMsSUFBZCxDQURZLENBQ2lCO0FBQ2hDLFNBRkQsTUFFTSxJQUFHUixVQUFVLENBQWIsRUFBZTtBQUNqQlEsMEJBQWMsQ0FBZCxDQURpQixDQUNXO0FBQzVCQSwwQkFBYyxJQUFkLENBRmlCLENBRVk7QUFDaEMsU0FISyxNQUdBLElBQUdSLFVBQVUsQ0FBYixFQUFlO0FBQ2pCUSwwQkFBYyxDQUFkLENBRGlCLENBQ1c7QUFDNUJBLDBCQUFjLEVBQWQsQ0FGaUIsQ0FFVztBQUM1QkEsMEJBQWMsSUFBZCxDQUhpQixDQUdZO0FBQ2hDLFNBSkssTUFJQSxJQUFHUixVQUFVLENBQWIsRUFBZTtBQUNqQlEsMEJBQWMsQ0FBZCxDQURpQixDQUNXO0FBQzVCQSwwQkFBYyxFQUFkLENBRmlCLENBRVc7QUFDNUJBLDBCQUFjLEdBQWQsQ0FIaUIsQ0FHVztBQUMvQixTQUpLLE1BSUEsSUFBR1IsVUFBVSxDQUFiLEVBQWU7QUFDakJRLDBCQUFjLENBQWQsQ0FEaUIsQ0FDVztBQUM1QkEsMEJBQWMsRUFBZCxDQUZpQixDQUVXO0FBQzVCQSwwQkFBYyxHQUFkLENBSGlCLENBR1c7QUFDNUJBLDBCQUFjLElBQWQsQ0FKaUIsQ0FJWTtBQUNoQztBQUNEQSxzQkFBYyxVQUFkO0FBQ0EsYUFBS3JCLFNBQUw7QUFDQSxhQUFLaUUsT0FBTCxDQUFhTyxhQUFiLENBQTJCLG1CQUEzQixFQUFnRGlDLGVBQWhELENBQWdFLFVBQWhFO0FBQ0EsZUFBTyxDQUFDUixRQUFELEVBQVdLLFNBQVgsRUFBc0JqRixVQUF0QixFQUFrQ3dFLFNBQWxDLEVBQTZDVyxlQUE3QyxDQUFQO0FBQ0gsSzs7NkJBQ0RwRyxVLHVCQUFXOEIsTyxFQUFRO0FBQUE7O0FBQ2YsYUFBS2tFLFVBQUwsR0FBa0JsRSxPQUFsQjtBQUNBLGFBQUs4QixZQUFMLENBQWtCbUIsT0FBbEIsQ0FBMEI7QUFBQSxtQkFBUUMsTUFBUjtBQUFBLFNBQTFCO0FBQ0EsYUFBS25CLE9BQUwsQ0FBYU8sYUFBYixDQUEyQixxQkFBM0IsRUFBa0RTLFNBQWxELEdBQThELHFCQUFTL0MsT0FBVCxDQUE5RDtBQUNBLGFBQUtrQyxRQUFMOztBQUVBLGFBQUtDLFNBQUwsQ0FBZSxvQkFBZixFQUFxQyxPQUFyQyxFQUE4QyxVQUFDdEMsQ0FBRCxFQUFPO0FBQ2pELGdCQUFJMkUsVUFBVTNFLEVBQUU0RSxVQUFoQjtBQUNBLGdCQUFHRCxRQUFReEMsU0FBUixDQUFrQjBDLFFBQWxCLENBQTJCLG1CQUEzQixDQUFILEVBQW1EO0FBQy9DRix3QkFBUXhDLFNBQVIsQ0FBa0JjLE1BQWxCLENBQXlCLG1CQUF6QjtBQUNBMEIsd0JBQVFHLHNCQUFSLENBQStCbkgsSUFBL0IsR0FBc0MsVUFBdEM7QUFDSCxhQUhELE1BR0s7QUFDRGdILHdCQUFReEMsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsbUJBQXRCO0FBQ0F1Qyx3QkFBUUcsc0JBQVIsQ0FBK0JuSCxJQUEvQixHQUFzQyxNQUF0QztBQUNIO0FBQ0osU0FURDtBQVVBLGFBQUsyRSxTQUFMLENBQWUsZUFBZixFQUFnQyxPQUFoQyxFQUF5QyxhQUFLO0FBQzFDLGdCQUFJeUMsU0FBUyxlQUFiO0FBQ0EvRSxjQUFFNEUsVUFBRixDQUFhOUIsS0FBYixHQUFxQjlDLEVBQUU0RSxVQUFGLENBQWE5QixLQUFiLENBQW1Ca0MsT0FBbkIsQ0FBMkJELE1BQTNCLEVBQW1DLEVBQW5DLENBQXJCO0FBQ0EsbUJBQUtwQiw0QkFBTDtBQUNILFNBSkQ7QUFLQSxhQUFLckIsU0FBTCxDQUFlLG1CQUFmLEVBQW9DLE9BQXBDLEVBQTZDLFVBQUN0QyxDQUFELEVBQU87QUFDaEQsbUJBQUs2QyxNQUFMO0FBQ0gsU0FGRDs7QUFJQSxhQUFLUCxTQUFMLENBQWUsc0JBQWYsRUFBdUMsT0FBdkMsRUFBZ0QsVUFBQ3RDLENBQUQsRUFBTztBQUNuRCxtQkFBS2xDLElBQUw7QUFDSCxTQUZEOztBQUlBLGFBQUt3RSxTQUFMLENBQWUsNkJBQWYsRUFBOEMsUUFBOUMsRUFBd0QsVUFBQ3RDLENBQUQsRUFBTztBQUMzRCxnQkFBSWlGLFNBQVMsT0FBSy9DLE9BQUwsQ0FBYXVCLGdCQUFiLENBQThCLG9DQUE5QixDQUFiO0FBQ0F3QixtQkFBTzdCLE9BQVAsQ0FBZSxVQUFDOEIsS0FBRCxFQUFXO0FBQ3RCLG9CQUFHQSxTQUFTbEYsRUFBRXFCLE1BQWQsRUFBcUI7QUFDakI2RCwwQkFBTUMsUUFBTixHQUFpQixDQUFDbkYsRUFBRXFCLE1BQUYsQ0FBUzJDLE9BQTNCO0FBQ0g7QUFDSixhQUpEO0FBS0EsbUJBQUtMLDRCQUFMO0FBQ0gsU0FSRDs7QUFVQSxhQUFLckIsU0FBTCxDQUFlLDhCQUFmLEVBQStDLFFBQS9DLEVBQXlELFVBQUN0QyxDQUFELEVBQU87QUFDNUQsZ0JBQUlpRixTQUFTLE9BQUsvQyxPQUFMLENBQWF1QixnQkFBYixDQUE4QiwwRUFBOUIsQ0FBYjtBQUNBd0IsbUJBQU83QixPQUFQLENBQWUsVUFBQzhCLEtBQUQsRUFBVztBQUN0QixvQkFBR0EsU0FBU2xGLEVBQUVxQixNQUFkLEVBQXFCO0FBQ2pCNkQsMEJBQU1DLFFBQU4sR0FBaUIsQ0FBQ25GLEVBQUVxQixNQUFGLENBQVMyQyxPQUEzQjtBQUNIO0FBQ0osYUFKRDtBQUtBLG1CQUFLTCw0QkFBTDtBQUNILFNBUkQ7QUFTQSxZQUFJeUIsVUFBVSxJQUFkO0FBQ0EsYUFBSzlDLFNBQUwsQ0FBZSxzQkFBZixFQUF1QyxRQUF2QyxFQUFpRCxVQUFDdEMsQ0FBRCxFQUFPO0FBQ3BELGdCQUFHb0YsV0FBV3BGLEVBQUVxQixNQUFGLENBQVMyQyxPQUF2QixFQUErQjtBQUMzQixvQkFBR2hFLEVBQUVxQixNQUFGLENBQVN5QixLQUFULElBQWtCLFFBQWxCLElBQ0gsT0FBS3VCLFVBQUwsQ0FBZ0I3RixZQUFoQixJQUFnQyxFQUQ3QixJQUVILE9BQUs2RixVQUFMLENBQWdCeEcsYUFBaEIsSUFBaUMsRUFGOUIsSUFHSCxPQUFLd0csVUFBTCxDQUFnQjNGLFVBQWhCLElBQThCLFFBSDlCLEVBR3VDO0FBQ25DLHdCQUFJd0YsV0FBVyxPQUFLaEMsT0FBTCxDQUFhTyxhQUFiLENBQTJCLHFCQUEzQixFQUFrREssS0FBakU7QUFDQSx3QkFBSXFCLFdBQVcsT0FBS2pDLE9BQUwsQ0FBYU8sYUFBYixDQUEyQixxQkFBM0IsRUFBa0RLLEtBQWpFO0FBQ0Esd0JBQUdvQixZQUFZLEVBQVosSUFBa0JDLFlBQVksRUFBakMsRUFBb0M7QUFDaEMsK0JBQUtqQyxPQUFMLENBQWFPLGFBQWIsQ0FBMkIsNkJBQTNCLEVBQTBEdUIsT0FBMUQsR0FBb0UsSUFBcEU7QUFDQSwrQkFBSzlCLE9BQUwsQ0FBYU8sYUFBYixDQUEyQixxQkFBM0IsRUFBa0RpQyxlQUFsRCxDQUFrRSxVQUFsRTtBQUNBLCtCQUFLeEMsT0FBTCxDQUFhTyxhQUFiLENBQTJCLHFCQUEzQixFQUFrRGlDLGVBQWxELENBQWtFLFVBQWxFO0FBQ0EsK0JBQUsxRyxTQUFMLENBQWUsb0RBQWYsRUFBcUUsSUFBckU7QUFDQW9ILGtDQUFVLEtBQVY7QUFDSDtBQUNKO0FBQ0o7QUFDSixTQWpCRDtBQWtCSCxLOzs2QkFFRHZDLE0scUJBQVE7QUFDSixZQUFJd0MsT0FBTyxLQUFLMUIsNEJBQUwsRUFBWDtBQUNBLGVBQU8sS0FBS1osY0FBTCxnQ0FBdUJzQyxJQUF2QixFQUFQO0FBQ0gsSzs7NkJBRURySCxTLHNCQUFVZ0YsSyxFQUFzQjtBQUFBLFlBQWZzQyxNQUFlLHVFQUFOLEtBQU07O0FBQzVCLFlBQUdBLE1BQUgsRUFBVTtBQUNOLGlCQUFLcEQsT0FBTCxDQUFhTyxhQUFiLENBQTJCLGdFQUEzQixFQUE2RlMsU0FBN0YsR0FBeUcsT0FBekc7QUFDQSxpQkFBS2hCLE9BQUwsQ0FBYU8sYUFBYixDQUEyQiw2QkFBM0IsRUFBMEROLFNBQTFELENBQW9FQyxHQUFwRSxDQUF3RSxVQUF4RTtBQUNILFNBSEQsTUFHSztBQUNELGlCQUFLRixPQUFMLENBQWFPLGFBQWIsQ0FBMkIsZ0VBQTNCLEVBQTZGUyxTQUE3RixHQUF5RyxRQUF6RztBQUNBLGlCQUFLaEIsT0FBTCxDQUFhTyxhQUFiLENBQTJCLDZCQUEzQixFQUEwRE4sU0FBMUQsQ0FBb0VjLE1BQXBFLENBQTJFLFVBQTNFO0FBQ0g7QUFDRCxhQUFLZixPQUFMLENBQWFPLGFBQWIsQ0FBMkIsNkJBQTNCLEVBQTBETixTQUExRCxDQUFvRWMsTUFBcEUsQ0FBMkUsVUFBM0U7QUFDQSxhQUFLZixPQUFMLENBQWFPLGFBQWIsQ0FBMkIsNkRBQTNCLEVBQTBGUyxTQUExRixHQUFzR0YsS0FBdEc7QUFDSCxLOzs2QkFDRC9FLFMsd0JBQVc7QUFDUCxhQUFLaUUsT0FBTCxDQUFhTyxhQUFiLENBQTJCLDZCQUEzQixFQUEwRE4sU0FBMUQsQ0FBb0VDLEdBQXBFLENBQXdFLFVBQXhFO0FBQ0gsSzs7NkJBRURlLE8sc0JBQVc7QUFDUCxhQUFLbEIsWUFBTCxDQUFrQm1CLE9BQWxCLENBQTBCO0FBQUEsbUJBQVFDLE1BQVI7QUFBQSxTQUExQjtBQUNILEs7OztFQTlOdUN4RyxZQUFZeUcsT0FBWixDQUFvQkMsYzs7a0JBQTNDckMsYzs7Ozs7Ozs7Ozs7QUNKckIseUM7Ozs7Ozs7Ozs7Ozs7OzthQ0FDO1FBT2tFO0FBQUEsaUJBQXlCLFVBQXpCO0FBQUE7S0FBdUM7YUFLUDthQUFzQjtRQUFFO0FBQUEsaUJBQTBCLFdBQTFCO0FBQUE7S0FBeUM7YUFJL0Q7YUFBc0I7UUFBRTtBQUFBLGlCQUEwQixXQUExQjtBQUFBO0tBQXlDO1FBU2xHO0FBQUEsaUJBQTBCLFVBQTFCO0FBQUE7S0FBd0M7YUFLUDthQUF1QjtRQUFFO0FBQUEsaUJBQTJCLFdBQTNCO0FBQUE7S0FBMEM7YUFJbEU7YUFBdUI7UUFBRTtBQUFBLGlCQUEyQixXQUEzQjtBQUFBO0tBQTBDO1FBU3ZIO0FBQUEsaUJBQTJCLFdBQTNCO0FBQUE7S0FBMEM7UUFDekQ7QUFBQSxpQkFBdUIsVUFBdkI7QUFBQTtLQUF1QztRQUN2QztBQUFBLGlCQUF1QixVQUF2QjtBQUFBO0tBQXVDO1FBQ3ZDO0FBQUEsaUJBQXVCLFVBQXZCO0FBQUE7S0FBdUM7UUFLRDtBQUFBLGlCQUEyQixXQUEzQjtBQUFBO0tBQTBDO1FBQUM7QUFBQSxpQkFBMEIsV0FBMUI7QUFBQTtLQUF5QztRQUk1RjtBQUFBLGlCQUEyQixXQUEzQjtBQUFBO0tBQTBDO1FBQUM7QUFBQSxpQkFBaUIsSUFBakI7QUFBQTtLQUFnQztRQUl6RjtBQUFBLGlCQUEyQixXQUEzQjtBQUFBO0tBQTBDO1FBQzFEO0FBQUEsaUJBQXdCLFdBQXhCO0FBQUE7S0FBd0M7UUFDeEM7QUFBQSxpQkFBd0IsV0FBeEI7QUFBQTtLQUF3QztRQUN4QztBQUFBLGlCQUF3QixXQUF4QjtBQUFBO0tBQXdDO1FBQ3hDO0FBQUEsaUJBQXdCLFdBQXhCO0FBQUE7S0FBd0M7UUFDeEM7QUFBQSxpQkFBd0IsV0FBeEI7QUFBQTtLQUF3QztRQVNxQjtBQUFBLGlCQUFtQyxVQUFuQztBQUFBO0tBQWlEO1FBQ2pEO0FBQUEsaUJBQW1DLFVBQW5DO0FBQUE7S0FBaUQ7UUFHekU7QUFBQSxpQkFBK0IsVUFBL0I7QUFBQTtLQUE2QztRQUlqRTtBQUFBLGlCQUFrRCxXQUFsRDtBQUFBO0tBQWlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7YUNqRnBIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDRDs7SUFBWXJFLFc7Ozs7Ozs7Ozs7OztJQUdSQyxNLEdBQ0FELFlBQVlFLFcsQ0FEWkQsTTs7SUFHRWdGLCtCOzs7QUFDRiw2Q0FBYTdFLFNBQWIsRUFBd0I7QUFBQTs7QUFBQSxnREFDcEIsaUNBQU1BLFNBQU4sQ0FEb0I7QUFFdkI7OzhDQUNEQyxNLHFCQUFTO0FBQUE7O0FBQ0wsd0NBQU1BLE1BQU47QUFDQSxZQUFHLENBQUMsS0FBS3FJLE1BQVQsRUFBaUI7QUFDakIsWUFBRyxLQUFLbkksWUFBUixFQUFxQjtBQUNqQixpQkFBS0Msa0JBQUwsQ0FBd0JDLGlCQUF4QixDQUEwQyxVQUFDQyxRQUFELEVBQVk7QUFDbEQsdUJBQUtDLFVBQUwsQ0FBZ0JDLGFBQWhCLENBQThCRixRQUE5QixFQUF3Q0csSUFBeEMsQ0FBNkMsVUFBQ0MsSUFBRCxFQUFRO0FBQ2pELHdCQUFHQSxRQUFRLENBQVgsRUFBYTtBQUNULCtCQUFLTixrQkFBTCxDQUF3QlMsSUFBeEI7QUFDQSwrQkFBS1YsWUFBTCxHQUFvQixLQUFwQjtBQUNBLCtCQUFLSSxVQUFMLENBQWdCTyxlQUFoQixDQUFnQ0osSUFBaEM7QUFDQSwrQkFBS1QsTUFBTDtBQUNILHFCQUxELE1BS0s7QUFDRCwrQkFBS0csa0JBQUwsQ0FBd0JXLFNBQXhCLENBQWtDLCtCQUFsQztBQUNIO0FBQ0osaUJBVEQ7QUFVSCxhQVhEO0FBWUEsaUJBQUtYLGtCQUFMLENBQXdCWSxTQUF4QjtBQUNBLGlCQUFLWixrQkFBTCxDQUF3QmEsVUFBeEI7QUFDQSxpQkFBS2Isa0JBQUwsQ0FBd0JjLElBQXhCO0FBQ0gsU0FoQkQsTUFnQks7QUFDRCxnQkFBR3FILE9BQU9DLE9BQVAsQ0FBZSw4REFBZixDQUFILEVBQWtGO0FBQzlFLHFCQUFLakksVUFBTCxDQUFnQmtJLGNBQWhCLEdBQWlDaEksSUFBakMsQ0FBc0MsVUFBQ2dDLE1BQUQsRUFBVTtBQUM1Qyx3QkFBR0EsTUFBSCxFQUFVO0FBQ04sK0JBQUtpRyxtQkFBTDtBQUNILHFCQUZELE1BRUssQ0FFSjtBQUNKLGlCQU5ELEVBTUc1RixLQU5ILENBTVUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2I0Riw0QkFBUUMsR0FBUixDQUFZN0YsQ0FBWjtBQUNILGlCQVJEO0FBU0g7QUFDSjtBQUNKLEs7OzhDQUNEakIsTyxzQkFBVTtBQUFBOztBQUNOLFlBQUlFLFFBQVEsS0FBS0MsUUFBTCxFQUFaO0FBQ0EsYUFBSzdCLGtCQUFMLEdBQTBCLEtBQUsyQixrQkFBTCxDQUF3QixzQkFBeEIsQ0FBMUI7QUFDQUMsY0FBTUUsc0JBQU4sQ0FBNkJyQyxPQUFPc0MsZUFBcEMsRUFBcUQsVUFBQ0MsTUFBRCxFQUFZO0FBQzdELG1CQUFLN0IsVUFBTCxHQUFrQjZCLE1BQWxCO0FBQ0FBLG1CQUFPWSxlQUFQLEdBQXlCdkMsSUFBekIsQ0FBOEIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3BDLG9CQUFHQSxRQUFRLENBQVgsRUFBYTtBQUNULDJCQUFLbUMsU0FBTDtBQUNBLDJCQUFLMUMsWUFBTCxHQUFvQixJQUFwQjtBQUNILGlCQUhELE1BR00sSUFBR08sUUFBUSxDQUFYLEVBQWE7QUFDZiwyQkFBS21DLFNBQUw7QUFDQSwyQkFBSzFDLFlBQUwsR0FBb0IsS0FBcEI7QUFDSCxpQkFISyxNQUdEO0FBQ0QsMkJBQUswSSxXQUFMO0FBQ0g7QUFDSixhQVZEO0FBV0gsU0FiRDtBQWNILEs7OzhDQUVEaEcsUyx3QkFBVztBQUNQLGFBQUs3QyxTQUFMLENBQWVpRixPQUFmLENBQXVCQyxTQUF2QixDQUFpQ2MsTUFBakMsQ0FBd0MsOEJBQXhDO0FBQ0EsYUFBS3NDLE1BQUwsR0FBYyxJQUFkO0FBQ0gsSzs7OENBRURPLFcsMEJBQWE7QUFDVCxhQUFLN0ksU0FBTCxDQUFlaUYsT0FBZixDQUF1QkMsU0FBdkIsQ0FBaUNDLEdBQWpDLENBQXFDLDhCQUFyQztBQUNBLGFBQUttRCxNQUFMLEdBQWMsS0FBZDtBQUNILEs7OzhDQUVESSxtQixrQ0FBcUI7QUFDakIsYUFBS0csV0FBTDs7QUFFQSxZQUFJQyxvQkFBb0IsS0FBSy9HLGtCQUFMLENBQXdCLHNCQUF4QixDQUF4QjtBQUNBK0csMEJBQWtCbEcsVUFBbEIsQ0FBNkJ2QixjQUE3QjtBQUNBeUgsMEJBQWtCbEcsVUFBbEIsQ0FBNkJ6QyxZQUE3QixHQUE0QyxLQUE1QztBQUNILEs7OztFQXhFeUNQLFlBQVl3RCxVOztrQkEyRTNDeUIsK0I7Ozs7Ozs7Ozs7O0FDbEZmLHlDOzs7Ozs7Ozs7Ozs7Ozs7YUNBQzs7Ozs7Ozs7Ozs7Ozs7QUNBRCx5RCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlVJRXh0ZW5zaW9uXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlVJRXh0ZW5zaW9uXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlBhc3N3b3JkUHJvdGVjdEFkZG9uXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiVUlFeHRlbnNpb25cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlBhc3N3b3JkUHJvdGVjdEFkZG9uXCJdID0gZmFjdG9yeShyb290W1wiVUlFeHRlbnNpb25cIl0pO1xufSkoc2VsZiwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9VSUV4dGVuc2lvbl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi91aXgtYWRkb25zL3Bhc3N3b3JkLXByb3RlY3QvaW5kZXguanNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qISBhcnQtdGVtcGxhdGVAcnVudGltZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9hdWkvYXJ0LXRlbXBsYXRlICovXG5cbnZhciBnbG9iYWxUaGlzID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB7fTtcblxudmFyIHJ1bnRpbWUgPSBPYmplY3QuY3JlYXRlKGdsb2JhbFRoaXMpO1xudmFyIEVTQ0FQRV9SRUcgPSAvW1wiJic8Pl0vO1xuXG4vKipcbiAqIOe8lueggeaooeadv+i+k+WHuueahOWGheWuuVxuICogQHBhcmFtICB7YW55fSAgICAgICAgY29udGVudFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5ydW50aW1lLiRlc2NhcGUgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgIHJldHVybiB4bWxFc2NhcGUodG9TdHJpbmcoY29udGVudCkpO1xufTtcblxuLyoqXG4gKiDov63ku6PlmajvvIzmlK/mjIHmlbDnu4TkuI7lr7nosaFcbiAqIEBwYXJhbSB7YXJyYXl8T2JqZWN0fSBkYXRhXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSAgICAgY2FsbGJhY2tcbiAqL1xucnVudGltZS4kZWFjaCA9IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkYXRhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhW2ldLCBpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIF9pIGluIGRhdGEpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbX2ldLCBfaSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vLyDlsIbnm67moIfovazmiJDlrZfnrKZcbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRvU3RyaW5nKHZhbHVlLmNhbGwodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG4vLyDnvJbnoIEgSFRNTCDlhoXlrrlcbmZ1bmN0aW9uIHhtbEVzY2FwZShjb250ZW50KSB7XG4gICAgdmFyIGh0bWwgPSAnJyArIGNvbnRlbnQ7XG4gICAgdmFyIHJlZ2V4UmVzdWx0ID0gRVNDQVBFX1JFRy5leGVjKGh0bWwpO1xuICAgIGlmICghcmVnZXhSZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIHZhciBpID0gdm9pZCAwLFxuICAgICAgICBsYXN0SW5kZXggPSB2b2lkIDAsXG4gICAgICAgIGNoYXIgPSB2b2lkIDA7XG4gICAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN3aXRjaCAoaHRtbC5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiMzNDsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjMzg7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzM5Oyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDYwOlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiM2MDsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2MjpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjNjI7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFzdEluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhc3RJbmRleCA9IGkgKyAxO1xuICAgICAgICByZXN1bHQgKz0gY2hhcjtcbiAgICB9XG5cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tcGlsZS9ydW50aW1lJyk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIlxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IG51bGw7XG4gICAgIiwiXG5pbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5jb25zdCB7XG4gICAgRXZlbnRzXG59ID0gVUlFeHRlbnNpb24uUERGVmlld0N0cmw7XG5jbGFzcyBQYXNzd29yZFByb3RlY3RDYWxsYmFja0NvbnRyb2xsZXIgZXh0ZW5kcyBVSUV4dGVuc2lvbi5Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoY29tcG9uZW50KSB7XG4gICAgICAgIHN1cGVyKGNvbXBvbmVudCk7XG4gICAgfVxuICAgIGhhbmRsZSgpIHtcbiAgICAgICAgaWYoIXRoaXMuaXNSZWFkeSkge1xuICAgICAgICAgICAgLy93YWl0aW5nLiAgIFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMubmVlZFBhc3N3b3JkKXtcbiAgICAgICAgICAgIHRoaXMub3duZXJQYXNzd29yZFBvcG9wLnNldFN1Ym1pdENhbGxiYWNrKChwYXNzd29yZCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREb2MuY2hlY2tQYXNzd29yZChwYXNzd29yZCkudGhlbigodHlwZSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PSAzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5vd25lclBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lZWRQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vd25lclBhc3N3b3JkUG9wb3AuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RG9jLnNldFBhc3N3b3JkVHlwZSh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vd25lclBhc3N3b3JkUG9wb3Auc2hvd0Vycm9yKFwiT3duZXIgcGFzc3dvcmQgaXMgbm9yIGNvcnJlY3RcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5vd25lclBhc3N3b3JkUG9wb3AuaGlkZUVycm9yKCk7XG4gICAgICAgICAgICB0aGlzLm93bmVyUGFzc3dvcmRQb3BvcC5yZXNldElucHV0KCk7XG4gICAgICAgICAgICB0aGlzLm93bmVyUGFzc3dvcmRQb3BvcC5zaG93KCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5wb3BvcC51cGRhdGVEYXRhKHRoaXMuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnBvcG9wLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBzZXREZWZhdWx0RGF0YSgpe1xuICAgICAgICBsZXQgZGVmYXVsdERhdGEgPSB7XG4gICAgICAgICAgICB1c2VyUGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgICAgICBvd25lclBhc3N3b3JkOiBcIlwiLFxuICAgICAgICAgICAgaXNFbmNyeXB0TWV0YWRhdGE6IHRydWUsXG4gICAgICAgICAgICBjaXBoZXJUeXBlOiAnYWVzMjU2JyxcbiAgICAgICAgICAgIHByaW50OjIsXG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OnRydWUsXG4gICAgICAgICAgICBjb3B5OnRydWUsXG4gICAgICAgICAgICBjaGFuZ2U6NFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRhdGEgPSBkZWZhdWx0RGF0YTtcbiAgICB9XG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLnBvcG9wID0gdGhpcy5nZXRDb21wb25lbnRCeU5hbWUoXCJwYXNzd29yZC1wcm90ZWN0LXBvcHVwXCIpOyBcbiAgICAgICAgdGhpcy5vd25lclBhc3N3b3JkUG9wb3AgPSB0aGlzLmdldENvbXBvbmVudEJ5TmFtZShcIm93bmVyLXBhc3N3b3JkLXBvcHVwXCIpO1xuXG4gICAgICAgIGxldCBwZGZVaSA9IHRoaXMuZ2V0UERGVUkoKTtcbiAgICAgICAgcGRmVWkuYWRkVmlld2VyRXZlbnRMaXN0ZW5lcihFdmVudHMub3BlbkZpbGVTdWNjZXNzLCAocGRmRG9jKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREb2MgPSBwZGZEb2M7XG4gICAgICAgICAgICB0aGlzLm5lZWRQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldERlZmF1bHREYXRhKCk7XG4gICAgICAgICAgICB0aGlzLnBvcG9wLnNldFN1Ym1pdENhbGxiYWNrKCh1c2VyUGFzc3dvcmQsIG93bmVyUGFzc3dvcmQsIHBlcm1pc3Npb24sIGNpcGhlciwgaXNFbmNyeXB0TWV0YURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBwZGZEb2Muc2V0UGFzc3dvcmRBbmRQZXJtaXNzaW9uKHVzZXJQYXNzd29yZCwgb3duZXJQYXNzd29yZCwgcGVybWlzc2lvbiwgY2lwaGVyLCBpc0VuY3J5cHRNZXRhRGF0YSkudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXNlclBhc3N3b3JkICE9IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEudXNlclBhc3N3b3JkID0gdXNlclBhc3N3b3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLm93bmVyUGFzc3dvcmQgPSBvd25lclBhc3N3b3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNpcGhlclR5cGUgPSBjaXBoZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuaXNFbmNyeXB0TWV0YWRhdGEgPSBpc0VuY3J5cHRNZXRhRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5wZXJtaXNzaW9uID0gcGVybWlzc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuY29udmVydFBlcm1pc3Npb24odGhpcy5kYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlbW92ZUNwbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50QnlOYW1lKFwicmVtb3ZlLXByb3RlY3QtYnRuXCIpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUNwbXBvbmVudC5jb250cm9sbGVyLmFjdGl2ZUJ0bigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RG9jLnNldFBhc3N3b3JkVHlwZSgzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wb3AuaGlkZSgpOyAgIFxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wb3Auc2hvd0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcG9wLnNob3dFcnJvcihlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwZGZEb2MuZ2V0UGFzc3dvcmRUeXBlKCkudGhlbigodHlwZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHR5cGUgPT0gMil7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmVlZFBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5kYXRhLnVzZXJQYXNzd29yZCA9IHRoaXMuY3VycmVudERvYy5wYXNzd29yZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBkZkRvYy5nZXRTdGRDaXBoZXJPcHRpb25zKCk7XG4gICAgICAgICAgICB9KS50aGVuKChvcHRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gaWYob3B0aW9ucyA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2Ygb3B0aW9ucy5wZXJtaXNzaW9uID09PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGVmYXVsdERhdGEoKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5jb252ZXJ0UGVybWlzc2lvbihvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnVzZXJQYXNzd29yZCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEub3duZXJQYXNzd29yZCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnJlbnREb2MucGFzc3dvcmQpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50RG9jLmNoZWNrUGFzc3dvcmQodGhpcy5jdXJyZW50RG9jLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJlc3VsdCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vT3duZXIg5a+G56CBXG4gICAgICAgICAgICAgICAgaWYocmVzdWx0ID09PSAzKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLm93bmVyUGFzc3dvcmQgPSB0aGlzLmN1cnJlbnREb2MucGFzc3dvcmQ7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGF0YS5jaXBoZXJUeXBlICE9IFwiYWVzMjU2XCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RG9jLmdldFVzZXJQYXNzd29yZCh0aGlzLmN1cnJlbnREb2MucGFzc3dvcmQpLnRoZW4oKHVzZXJQYXNzd29yZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS51c2VyUGFzc3dvcmQgPSB1c2VyUGFzc3dvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdCA9PT0gMil7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS51c2VyUGFzc3dvcmQgPSB0aGlzLmN1cnJlbnREb2MucGFzc3dvcmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29udmVydFBlcm1pc3Npb24ob3B0aW9ucyl7XG4gICAgICAgIGxldCBwZXJtaXNzaW9uID0gb3B0aW9ucy5wZXJtaXNzaW9uO1xuICAgICAgICBpZihwZXJtaXNzaW9uICYgMGIxMDAwMDAwMDAwMDApe1xuICAgICAgICAgICAgb3B0aW9ucy5wcmludCA9IDI7XG4gICAgICAgIH1lbHNlIGlmKHBlcm1pc3Npb24gJiAwYjEwMCl7XG4gICAgICAgICAgICBvcHRpb25zLnByaW50ID0gMTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBvcHRpb25zLnByaW50ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBlcm1pc3Npb24gJiAwYjEwMDAwMDAwMDApe1xuICAgICAgICAgICAgb3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID0gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBvcHRpb25zLmFjY2Vzc2liaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBlcm1pc3Npb24gJiAwYjEwMDAwKXtcbiAgICAgICAgICAgIG9wdGlvbnMuY29weSA9IHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgb3B0aW9ucy5jb3B5ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwZXJtaXNzaW9uICYgMGIxMDAwICYmIHBlcm1pc3Npb24gJiAwYjEwMDAwMCAmJiBwZXJtaXNzaW9uICYgMGIxMDAwMDAwMDApe1xuICAgICAgICAgICAgb3B0aW9ucy5jaGFuZ2UgPSA0O1xuICAgICAgICB9ZWxzZSBpZihwZXJtaXNzaW9uICYgMGIxMDAwMDAgJiYgcGVybWlzc2lvbiAmIDBiMTAwMDAwMDAwKXtcbiAgICAgICAgICAgIG9wdGlvbnMuY2hhbmdlID0gMztcbiAgICAgICAgfWVsc2UgaWYocGVybWlzc2lvbiAmIDBiMTAwMDAwMDAwKXtcbiAgICAgICAgICAgIG9wdGlvbnMuY2hhbmdlID0gMjtcbiAgICAgICAgfWVsc2UgaWYocGVybWlzc2lvbiAmIDBiMTAwMDAwMDAwMDApe1xuICAgICAgICAgICAgb3B0aW9ucy5jaGFuZ2UgPSAxO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG9wdGlvbnMuY2hhbmdlID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkUHJvdGVjdENhbGxiYWNrQ29udHJvbGxlcjsiLCJpbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5pbXBvcnQgUG9wdXBDb21wb25lbnQgZnJvbSAnLi9wb3B1cC8nO1xuaW1wb3J0IFBvcHVwT3duZXJQYXNzd29yZENvbXBvbmVudCBmcm9tICcuL3BvcHVwLW93bmVyLXBhc3N3b3JkLyc7XG5pbXBvcnQgJy4vc2Nzcy9pbmRleC5zY3NzJztcbmltcG9ydCBQYXNzd29yZFByb3RlY3RDYWxsYmFja0NvbnRyb2xsZXIgZnJvbSBcIi4vY2FsbGJhY2tDb250cm9sbGVyXCI7XG5pbXBvcnQgUmVtb3ZlUHJvdGVjdENhbGxiYWNrQ29udHJvbGxlciBmcm9tIFwiLi9yZW1vdmVDYWxsYmFja0NvbnRyb2xsZXJcIjtcbmltcG9ydCB0cG1Mb2FkZXIgZnJvbSAnLi9hZGRvbi5pbmZvLmpzb24nO1xuaW1wb3J0IGNvbXBpbGVUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLmFydCc7XG5pbXBvcnQgcmVtb3ZlVGVtcGxhdGUgZnJvbSAnLi9yZW1vdmUtdGVtcGxhdGUuYXJ0JztcblxuY29uc3QgdGVtcGxhdGUgPSBjb21waWxlVGVtcGxhdGUoKTtcbmNvbnN0IHJlbW92ZUFydCA9IHJlbW92ZVRlbXBsYXRlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkUHJvdGVjdEFkZG9uIGV4dGVuZHMgVUlFeHRlbnNpb24uVUlYQWRkb24ge1xuICAgIHN0YXRpYyBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ3Bhc3N3b3JkLXByb3RlY3QnO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0TG9hZGVyKCkge1xuICAgICAgICByZXR1cm4gdHBtTG9hZGVyO1xuICAgIH1cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSBVSUV4dGVuc2lvbi5tb2R1bGFyLm1vZHVsZSgncGFzc3dvcmQtcHJvdGVjdCcsIFtdKTtcbiAgICAgICAgY29uc3QgcmVnaXN0cnkgPSBtb2R1bGUuZ2V0UmVnaXN0cnkoKTtcbiAgICAgICAgdGhpcy5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHJlZ2lzdHJ5LnJlZ2lzdGVyQ29tcG9uZW50KFBvcHVwQ29tcG9uZW50KTtcbiAgICAgICAgcmVnaXN0cnkucmVnaXN0ZXJDb21wb25lbnQoUG9wdXBPd25lclBhc3N3b3JkQ29tcG9uZW50KTtcbiAgICB9XG4gICAgZnJhZ21lbnRzKCkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgIHRhcmdldDogJ3Byb3RlY3QtdG9vbGJhci1ncm91cC1saXN0JyxcbiAgICAgICAgICAgIGFjdGlvbjogVUlFeHRlbnNpb24uVUlDb25zdHMuRlJBR01FTlRfQUNUSU9OLkFQUEVORCxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgPHBhc3N3b3JkLXByb3RlY3Q6Z3JvdXAgbmFtZT1cInBhc3N3b3JkLXByb3RlY3QtZ3JvdXBcIj48L3Bhc3N3b3JkLXByb3RlY3Q6Z3JvdXA+YCxcbiAgICAgICAgICAgIGNvbmZpZzogW3tcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdwYXNzd29yZC1wcm90ZWN0LWdyb3VwJyxcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGFyZ2V0OiAncGFzc3dvcmQtcHJvdGVjdC1ncm91cCcsXG4gICAgICAgICAgICBhY3Rpb246IFVJRXh0ZW5zaW9uLlVJQ29uc3RzLkZSQUdNRU5UX0FDVElPTi5BUFBFTkQsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgICAgICAgICBjb25maWc6IFt7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAncGFzc3dvcmQtcHJvdGVjdC1idG4nLFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdwYXNzd29yZC1wcm90ZWN0OmJ1dHRvbnMudGl0bGUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogUGFzc3dvcmRQcm90ZWN0Q2FsbGJhY2tDb250cm9sbGVyXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXQ6ICdwYXNzd29yZC1wcm90ZWN0LWdyb3VwJyxcbiAgICAgICAgICAgIGFjdGlvbjogVUlFeHRlbnNpb24uVUlDb25zdHMuRlJBR01FTlRfQUNUSU9OLkFQUEVORCxcbiAgICAgICAgICAgIHRlbXBsYXRlOiByZW1vdmVBcnQsXG4gICAgICAgICAgICBjb25maWc6IFt7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAncmVtb3ZlLXByb3RlY3QtYnRuJyxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAncGFzc3dvcmQtcHJvdGVjdDpidXR0b25zLnJlbW92ZVRpdGxlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IFJlbW92ZVByb3RlY3RDYWxsYmFja0NvbnRyb2xsZXJcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICBcbiAgICBdO1xuICAgIH1cbn07IiwiaW1wb3J0ICogYXMgVUlFeHRlbnNpb24gZnJvbSAnVUlFeHRlbnNpb24nO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cE93bmVyUGFzc3dvcmRDb21wb25lbnQgZXh0ZW5kcyBVSUV4dGVuc2lvbi53aWRnZXRzLkxheWVyQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdvd25lci1wYXNzd29yZC1wb3B1cCc7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgc3VwZXIucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuZGVzdHJveUhvb2tzID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmdl9fb3duZXItcGFzc3dvcmQtcG9wdXAnKTtcbiAgICAgICAgdGhpcy5sb2NhbGl6ZSgpO1xuICAgIH1cbiAgICBiaW5kRXZlbnQoc2VsZWN0b3IsIGV2ZW50LCBjYWxsYmFjayl7XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICBpZighZWxlbWVudCkgcmV0dXJuO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5kZXN0cm95SG9va3MucHVzaCgoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbW91bnRlZCgpe1xuICAgICAgICBzdXBlci5tb3VudGVkKCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50KFwiLmZ2X19wYXNzd29yZC1jYW5jZWxcIiwgXCJjbGlja1wiLCAoZSk9PntcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYmluZEV2ZW50KFwiLmZ2X19wYXNzd29yZC1idG5cIiwgXCJjbGlja1wiLCAoZSk9PntcbiAgICAgICAgICAgIHRoaXMuc3VibWl0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdWJtaXQoKXtcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX293bmVyLXBhc3N3b3JkLWlucHV0XCIpLnZhbHVlO1xuICAgICAgICBpZighcGFzc3dvcmQpe1xuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IoXCJBZG1pbiBwYXNzd29yZCBjYW4ndCBiZSBibGFuay5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdWJtaXRDYWxsYmFjayhwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgc2V0U3VibWl0Q2FsbGJhY2soc3VibWl0Q2FsbGJhY2spe1xuICAgICAgICB0aGlzLnN1Ym1pdENhbGxiYWNrID0gc3VibWl0Q2FsbGJhY2s7XG4gICAgfVxuICAgIHNob3dFcnJvcihlcnJvcil7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19wYXNzd29yZC1wcm90ZWN0LWVycm9yXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmdl9faGlkZVwiKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX3Bhc3N3b3JkLXByb3RlY3QtZXJyb3JcIikuaW5uZXJIVE1MID0gZXJyb3I7XG4gICAgfVxuICAgIGhpZGVFcnJvcigpe1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fcGFzc3dvcmQtcHJvdGVjdC1lcnJvclwiKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX3Bhc3N3b3JkLXByb3RlY3QtZXJyb3JcIikuY2xhc3NMaXN0LmFkZChcImZ2X19oaWRlXCIpO1xuICAgIH1cbiAgICByZXNldElucHV0KCl7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19vd25lci1wYXNzd29yZC1pbnB1dFwiKS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBkZXN0cm95ICgpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95SG9va3MuZm9yRWFjaChob29rID0+IGhvb2soKSk7XG4gICAgfVxufVxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5pbXBvcnQgcG9wdXBBcnQgZnJvbSBcIi4vcG9wdXAuYXJ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwQ29tcG9uZW50IGV4dGVuZHMgVUlFeHRlbnNpb24ud2lkZ2V0cy5MYXllckNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAncGFzc3dvcmQtcHJvdGVjdC1wb3B1cCc7XG4gICAgfVxuICAgIGJpbmRFdmVudChzZWxlY3RvciwgZXZlbnQsIGNhbGxiYWNrKXtcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICBpZihlbGVtZW50cy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lIb29rcy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xuICAgICAgICB0aGlzLmRlc3Ryb3lIb29rcyA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZnZfX3Bhc3N3b3JkLXByb3RlY3QtcG9wdXAnKTtcbiAgICAgICAgXG4gICAgfVxuICAgIHNldFN1Ym1pdENhbGxiYWNrKHN1Ym1pdENhbGxiYWNrKXtcbiAgICAgICAgdGhpcy5zdWJtaXRDYWxsYmFjayA9IHN1Ym1pdENhbGxiYWNrO1xuICAgIH1cblxuICAgIGdldEZvcm1EYXRhQW5kQ2hlY2tEYXRhVmFsaWQoKXtcbiAgICAgICAgbGV0IGFsZ29yaXRobXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT0nYWxnb3JpdGhtJ11cIik7XG4gICAgICAgIGxldCBhbGdvcml0aG07XG4gICAgICAgIGFsZ29yaXRobXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYoaXRlbS5jaGVja2VkKXtcbiAgICAgICAgICAgICAgICBhbGdvcml0aG0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHVzZXJQd2RBY3RpdmUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fdXNlci1wYXNzd29yZC1jaGVja2JveFwiKS5jaGVja2VkO1xuICAgICAgICBsZXQgdXNlclB3ZDE7XG4gICAgICAgIGlmKHVzZXJQd2RBY3RpdmUpe1xuICAgICAgICAgICAgdXNlclB3ZDEgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fdXNlci1wYXNzd29yZDFcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgdXNlclB3ZDIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fdXNlci1wYXNzd29yZDJcIikudmFsdWU7XG4gICAgICAgICAgICBpZih1c2VyUHdkMSAhPT0gdXNlclB3ZDIpe1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19wYXNzd29yZC1idG5cIikuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgaWYodXNlclB3ZDEgIT09IFwiXCIgJiYgdXNlclB3ZDIgIT09IFwiXCIpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcihcIkRvY3VtZW50IG9wZW4gcGFzc3dvcmQgZG9lcyBub3QgbWF0Y2ghXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgLy/lpoLmnpxjaGVja2JveOWLvuS4iiwg5a+G56CB5qGG5YC85Li656m6LCDorr7nva7lr4bnoIHkuLotMSwg6KGo56S65L+d55WZ5b2T5YmN5a+G56CBIC5cbiAgICAgICAgICAgIGlmKGFsZ29yaXRobSA9PSAnYWVzMjU2Jyl7XG4gICAgICAgICAgICAgICAgdXNlclB3ZDEgPSAtMTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHVzZXJQd2QxID0gdGhpcy5vcmlnaW5EYXRhLnVzZXJQYXNzd29yZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvd25lclB3ZEFjdGl2ZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19vd25lci1wYXNzd29yZC1jaGVja2JveFwiKS5jaGVja2VkO1xuICAgICAgICBsZXQgb3duZXJQd2QxO1xuICAgICAgICBsZXQgcHJpbnQsIGFjY2Vzc2liaWxpdHksIGNvcHksIGNoYW5nZTtcbiAgICAgICAgaWYob3duZXJQd2RBY3RpdmUpe1xuICAgICAgICAgICAgb3duZXJQd2QxID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX293bmVyLXBhc3N3b3JkMVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBvd25lclB3ZDIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fb3duZXItcGFzc3dvcmQyXCIpLnZhbHVlO1xuICAgICAgICAgICAgaWYob3duZXJQd2QxICE9PSBvd25lclB3ZDIpe1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19wYXNzd29yZC1idG5cIikuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgaWYob3duZXJQd2QxICE9PSBcIlwiICYmIG93bmVyUHdkMiAhPT0gXCJcIil7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKFwiRG9jdW1lbnQgcGVybWlzc2lvbiBwYXNzd29yZCBkb2VzIG5vdCBtYXRjaCFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByaW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX3Blcm1pc3Npb24tcHJpbnRcIikudmFsdWU7XG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX3Blcm1pc3Npb24tYWNjZXNzaWJpbGl0eVwiKS5jaGVja2VkO1xuICAgICAgICAgICAgY29weSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19wZXJtaXNzaW9uLWNvcHlcIikuY2hlY2tlZDtcbiAgICAgICAgICAgIGNoYW5nZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19wZXJtaXNzaW9uLWNoYW5nZVwiKS52YWx1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBvd25lclB3ZDEgPSB0aGlzLm9yaWdpbkRhdGEub3duZXJQYXNzd29yZDtcbiAgICAgICAgICAgIHByaW50ID0gdGhpcy5vcmlnaW5EYXRhLnByaW50O1xuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eSA9IHRoaXMub3JpZ2luRGF0YS5hY2Nlc3NpYmlsaXR5O1xuICAgICAgICAgICAgY29weSA9IHRoaXMub3JpZ2luRGF0YS5jb3B5O1xuICAgICAgICAgICAgY2hhbmdlID0gdGhpcy5vcmlnaW5EYXRhLmNoYW5nZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCghdXNlclB3ZDEgfHwgdXNlclB3ZDEgPT0gLTEpICYmICFvd25lclB3ZDEpe1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX3Bhc3N3b3JkLWJ0blwiKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2hvd0Vycm9yKFwiVGhlIHVzZXIgcGFzc3dvcmQgb3Igb3duZXIgcGFzc3dvcmQgbXVzdCBub3QgYWxsIGJlIGJsYW5rLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZih1c2VyUHdkMSA9PSBvd25lclB3ZDEpe1xuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IoXCJUaGUgZG9jdW1lbnQgb3BlbiBhbmQgb3duZXIgcGFzc3dvcmRzIGNhbm5vdCBiZSB0aGUgc2FtZSwgcGxlYXNlIGVudGVyIGEgZGlmZmVyZW50IHBhc3N3b3JkIGluIGVpdGhlciB0aGUgZG9jdW1lbnQgb3BlbiBwYXNzd29yZCBmaWVsZCBvciB0aGUgb3duZXIgcGFzc3dvcmQgZmllbGQuXCIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX3Bhc3N3b3JkLWJ0blwiKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBsZXQgZW5jcnlwdE1ldGFkYXRhID0gIXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19lbmNyeXB0LW5vdC1tZXRhZGF0YVwiKS5jaGVja2VkO1xuICAgICAgICBcbiAgICAgICAgbGV0IHBlcm1pc3Npb24gPSAweGZmZmM7XG4gICAgICAgIGlmKHByaW50IDwgMil7XG4gICAgICAgICAgICBwZXJtaXNzaW9uIF49IDBiMTAwMDAwMDAwMDAwOyAvLyAxMmJpdFxuICAgICAgICAgICAgaWYocHJpbnQgPCAxKXtcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uIF49IDBiMTAwOyAvLyAzYml0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIWFjY2Vzc2liaWxpdHkpe1xuICAgICAgICAgICAgcGVybWlzc2lvbiBePSAwYjEwMDAwMDAwMDA7IC8vMTBiaXRcbiAgICAgICAgfVxuICAgICAgICBpZighY29weSl7XG4gICAgICAgICAgICBwZXJtaXNzaW9uIF49IDBiMTAwMDA7IC8vNWJpdFxuICAgICAgICB9XG4gICAgICAgIGlmKGNoYW5nZSA9PT0gNCl7XG4gICAgICAgICAgICBwZXJtaXNzaW9uIF49IDBiMTAwMDAwMDAwMDA7IC8vMTFiaXRcbiAgICAgICAgfWVsc2UgaWYoY2hhbmdlID09IDMpe1xuICAgICAgICAgICAgcGVybWlzc2lvbiBePSAwYjEwMDA7ICAgICAgIC8vNGJpdFxuICAgICAgICAgICAgcGVybWlzc2lvbiBePSAwYjEwMDAwMDAwMDAwOyAvLzExYml0XG4gICAgICAgIH1lbHNlIGlmKGNoYW5nZSA9PSAyKXtcbiAgICAgICAgICAgIHBlcm1pc3Npb24gXj0gMGIxMDAwOyAgICAgICAvLzRiaXRcbiAgICAgICAgICAgIHBlcm1pc3Npb24gXj0gMGIxMDAwMDA7ICAgICAvLzZiaXRcbiAgICAgICAgICAgIHBlcm1pc3Npb24gXj0gMGIxMDAwMDAwMDAwMDsgLy8xMWJpdFxuICAgICAgICB9ZWxzZSBpZihjaGFuZ2UgPT0gMSl7XG4gICAgICAgICAgICBwZXJtaXNzaW9uIF49IDBiMTAwMDsgICAgICAgLy80Yml0XG4gICAgICAgICAgICBwZXJtaXNzaW9uIF49IDBiMTAwMDAwOyAgICAgLy82Yml0XG4gICAgICAgICAgICBwZXJtaXNzaW9uIF49IDBiMTAwMDAwMDAwOyAgLy85Yml0XG4gICAgICAgIH1lbHNlIGlmKGNoYW5nZSA9PSAwKXtcbiAgICAgICAgICAgIHBlcm1pc3Npb24gXj0gMGIxMDAwOyAgICAgICAvLzRiaXRcbiAgICAgICAgICAgIHBlcm1pc3Npb24gXj0gMGIxMDAwMDA7ICAgICAvLzZiaXRcbiAgICAgICAgICAgIHBlcm1pc3Npb24gXj0gMGIxMDAwMDAwMDA7ICAvLzliaXRcbiAgICAgICAgICAgIHBlcm1pc3Npb24gXj0gMGIxMDAwMDAwMDAwMDsgLy8xMWJpdFxuICAgICAgICB9XG4gICAgICAgIHBlcm1pc3Npb24gKz0gMHhGRkZGMDAwMDtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX3Bhc3N3b3JkLWJ0blwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgcmV0dXJuIFt1c2VyUHdkMSwgb3duZXJQd2QxLCBwZXJtaXNzaW9uLCBhbGdvcml0aG0sIGVuY3J5cHRNZXRhZGF0YV07XG4gICAgfVxuICAgIHVwZGF0ZURhdGEob3B0aW9ucyl7XG4gICAgICAgIHRoaXMub3JpZ2luRGF0YSA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuZGVzdHJveUhvb2tzLmZvckVhY2goaG9vayA9PiBob29rKCkpO1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fdWktbGF5ZXItcGFuZWxcIikuaW5uZXJIVE1MID0gcG9wdXBBcnQob3B0aW9ucyk7XG4gICAgICAgIHRoaXMubG9jYWxpemUoKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudChcIi5mdl9fc2hvdy1wYXNzd29yZFwiLCBcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGUuc3JjRWxlbWVudDtcbiAgICAgICAgICAgIGlmKGN1cnJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZnZfX2hpZGUtcGFzc3dvcmRcIikpe1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImZ2X19oaWRlLXBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnQucHJldmlvdXNFbGVtZW50U2libGluZy50eXBlID0gXCJwYXNzd29yZFwiO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY3VycmVudC5jbGFzc0xpc3QuYWRkKFwiZnZfX2hpZGUtcGFzc3dvcmRcIik7XG4gICAgICAgICAgICAgICAgY3VycmVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50KFwiLmZ2X19wYXNzd29yZFwiLCBcImtleXVwXCIsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IHBhdHRlbiA9IC9bXlxceDAwLVxceDgwXS9nO1xuICAgICAgICAgICAgZS5zcmNFbGVtZW50LnZhbHVlID0gZS5zcmNFbGVtZW50LnZhbHVlLnJlcGxhY2UocGF0dGVuLCBcIlwiKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Rm9ybURhdGFBbmRDaGVja0RhdGFWYWxpZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnQoXCIuZnZfX3Bhc3N3b3JkLWJ0blwiLCBcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudChcIi5mdl9fcGFzc3dvcmQtY2FuY2VsXCIsIFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudChcIi5mdl9fdXNlci1wYXNzd29yZC1jaGVja2JveFwiLCBcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGlucHV0cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ2X191c2VyLXBhc3N3b3JkLWNvbnRhaW5lciBpbnB1dFwiKTtcbiAgICAgICAgICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGlucHV0ICE9IGUudGFyZ2V0KXtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSAhZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Rm9ybURhdGFBbmRDaGVja0RhdGFWYWxpZCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudChcIi5mdl9fb3duZXItcGFzc3dvcmQtY2hlY2tib3hcIiwgXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBpbnB1dHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdl9fb3duZXItcGFzc3dvcmQtY29udGFpbmVyIGlucHV0LC5mdl9fb3duZXItcGFzc3dvcmQtY29udGFpbmVyIHNlbGVjdFwiKTtcbiAgICAgICAgICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGlucHV0ICE9IGUudGFyZ2V0KXtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSAhZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Rm9ybURhdGFBbmRDaGVja0RhdGFWYWxpZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGlzRmlyc3QgPSB0cnVlO1xuICAgICAgICB0aGlzLmJpbmRFdmVudChcIi5mdl9fYWxnb3JpdGhtLXJhZGlvXCIsIFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZihpc0ZpcnN0ICYmIGUudGFyZ2V0LmNoZWNrZWQpe1xuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LnZhbHVlID09IFwiYWVzMTI4XCIgJiYgXG4gICAgICAgICAgICAgICAgdGhpcy5vcmlnaW5EYXRhLnVzZXJQYXNzd29yZCA9PSBcIlwiICYmIFxuICAgICAgICAgICAgICAgIHRoaXMub3JpZ2luRGF0YS5vd25lclBhc3N3b3JkICE9IFwiXCIgJiYgXG4gICAgICAgICAgICAgICAgdGhpcy5vcmlnaW5EYXRhLmNpcGhlclR5cGUgPT0gXCJhZXMyNTZcIil7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2VyUHdkMSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X191c2VyLXBhc3N3b3JkMVwiKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJQd2QyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX3VzZXItcGFzc3dvcmQyXCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZih1c2VyUHdkMSA9PSBcIlwiICYmIHVzZXJQd2QyID09IFwiXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX3VzZXItcGFzc3dvcmQtY2hlY2tib3hcIikuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fdXNlci1wYXNzd29yZDFcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fdXNlci1wYXNzd29yZDJcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcihcIkZvciBzZWN1cml0eSwgeW91IG5lZWQgdG8gcmVzZXQgdGhlIG9wZW4gcGFzc3dvcmQuXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJtaXQoKXtcbiAgICAgICAgbGV0IGFyZ3MgPSB0aGlzLmdldEZvcm1EYXRhQW5kQ2hlY2tEYXRhVmFsaWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0Q2FsbGJhY2soLi4uYXJncyk7XG4gICAgfVxuXG4gICAgc2hvd0Vycm9yKGVycm9yLCBpc1dhcm4gPSBmYWxzZSl7XG4gICAgICAgIGlmKGlzV2Fybil7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fcGFzc3dvcmQtcHJvdGVjdC1lcnJvciAuZnZfX3Bhc3N3b3JkLXByb3RlY3QtZXJyb3ItaGVhZGVyXCIpLmlubmVySFRNTCA9IFwiV2FybjpcIjtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X19wYXNzd29yZC1wcm90ZWN0LWVycm9yXCIpLmNsYXNzTGlzdC5hZGQoXCJmdl9fd2FyblwiKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fcGFzc3dvcmQtcHJvdGVjdC1lcnJvciAuZnZfX3Bhc3N3b3JkLXByb3RlY3QtZXJyb3ItaGVhZGVyXCIpLmlubmVySFRNTCA9IFwiRXJyb3I6XCI7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fcGFzc3dvcmQtcHJvdGVjdC1lcnJvclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZnZfX3dhcm5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX3Bhc3N3b3JkLXByb3RlY3QtZXJyb3JcIikuY2xhc3NMaXN0LnJlbW92ZShcImZ2X19oaWRlXCIpO1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fcGFzc3dvcmQtcHJvdGVjdC1lcnJvciAuZnZfX3Bhc3N3b3JkLXByb3RlY3QtZXJyb3ItbXNnXCIpLmlubmVySFRNTCA9IGVycm9yO1xuICAgIH1cbiAgICBoaWRlRXJyb3IoKXtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX3Bhc3N3b3JkLXByb3RlY3QtZXJyb3JcIikuY2xhc3NMaXN0LmFkZChcImZ2X19oaWRlXCIpO1xuICAgIH1cblxuICAgIGRlc3Ryb3kgKCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3lIb29rcy5mb3JFYWNoKGhvb2sgPT4gaG9vaygpKTtcbiAgICB9XG59XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIjxkaXYgY2xhc3M9XCJmdl9fcGFzc3dvcmQtcHJvdGVjdC1lcnJvciBmdl9faGlkZVwiPlxuPGRpdiBjbGFzcz1cImZ2X19wYXNzd29yZC1wcm90ZWN0LWVycm9yLWhlYWRlclwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cImZ2X19wYXNzd29yZC1wcm90ZWN0LWVycm9yLW1zZ1wiPjwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZnZfX3VzZXItcGFzc3dvcmQtY29udGFpbmVyIGZ2X19wYXNzd29yZC1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZnZfX3Bhc3N3b3JkLWNhcHRpb25cIj5Eb2N1bWVudCBPcGVuIFNldHRpbmdzPC9kaXY+XG4gICAgPGxhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmdl9fdXNlci1wYXNzd29yZC1jaGVja2JveFwiIHt7aWYgJGRhdGEudXNlclBhc3N3b3JkfX1jaGVja2Vke3svaWZ9fS8+XG4gICAgICAgIFJlcXVpcmUgYSBwYXNzd29yZCB0byBvcGVuIHRoZSBkb2N1bWVudFxuICAgIDwvbGFiZWw+XG4gICAgPGRpdiBjbGFzcz1cImZ2X191c2VyLXBhc3N3b3JkLWlucHV0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmdl9fcGFzc3dvcmQtaW5wdXRcIj5cbiAgICAgICAgICAgIFBhc3N3b3JkIElucHV0OiA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmdl9fcGFzc3dvcmQgZnZfX3VzZXItcGFzc3dvcmQxXCIgdmFsdWU9XCJ7eyRkYXRhLnVzZXJQYXNzd29yZH19XCIge3tpZiAhJGRhdGEudXNlclBhc3N3b3JkfX1kaXNhYmxlZHt7L2lmfX0gb25wYXN0ZT1cInJldHVybiBmYWxzZTtcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZ2X19zaG93LXBhc3N3b3JkIGZ2X19zaG93LXBhc3N3b3JkLXVzZXIxXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZnZfX3Bhc3N3b3JkLWlucHV0XCI+XG4gICAgICAgICAgICBQYXNzd29yZCBDb25maXJtOiA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmdl9fcGFzc3dvcmQgZnZfX3VzZXItcGFzc3dvcmQyXCIgdmFsdWU9XCJ7eyRkYXRhLnVzZXJQYXNzd29yZH19XCIge3tpZiAhJGRhdGEudXNlclBhc3N3b3JkfX1kaXNhYmxlZHt7L2lmfX0gb25wYXN0ZT1cInJldHVybiBmYWxzZTtcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZ2X19zaG93LXBhc3N3b3JkIGZ2X19zaG93LXBhc3N3b3JkLXVzZXIyXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwiY2xlYXI6Ym90aFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZnZfX293bmVyLXBhc3N3b3JkLWNvbnRhaW5lciBmdl9fcGFzc3dvcmQtY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImZ2X19wYXNzd29yZC1jYXB0aW9uXCI+RG9jdW1lbnQgUmVzdHJpY3Rpb24gU2V0dGluZ3M8L2Rpdj5cbiAgICA8bGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZ2X19vd25lci1wYXNzd29yZC1jaGVja2JveFwiIHt7aWYgJGRhdGEub3duZXJQYXNzd29yZH19Y2hlY2tlZHt7L2lmfX0vPlxuICAgICAgICBBZGQgRG9jdW1lbnQgUmVzdHJpY3Rpb25cbiAgICA8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJmdl9fb3duZXItcGFzc3dvcmQtaW5wdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZ2X19wYXNzd29yZC1pbnB1dFwiPlxuICAgICAgICAgICAgUGFzc3dvcmQgSW5wdXQ6IDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiAgY2xhc3M9XCJmdl9fcGFzc3dvcmQgZnZfX293bmVyLXBhc3N3b3JkMVwiIHZhbHVlPVwie3skZGF0YS5vd25lclBhc3N3b3JkfX1cIiB7e2lmICEkZGF0YS5vd25lclBhc3N3b3JkfX1kaXNhYmxlZHt7L2lmfX0gb25wYXN0ZT1cInJldHVybiBmYWxzZTtcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZ2X19zaG93LXBhc3N3b3JkIGZ2X19zaG93LXBhc3N3b3JkLW93bmVyMVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZ2X19wYXNzd29yZC1pbnB1dFwiPlxuICAgICAgICAgICAgUGFzc3dvcmQgQ29uZmlybTogPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZnZfX3Bhc3N3b3JkIGZ2X19vd25lci1wYXNzd29yZDJcIiB2YWx1ZT1cInt7JGRhdGEub3duZXJQYXNzd29yZH19XCIge3tpZiAhJGRhdGEub3duZXJQYXNzd29yZH19ZGlzYWJsZWR7ey9pZn19IG9ucGFzdGU9XCJyZXR1cm4gZmFsc2U7XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmdl9fc2hvdy1wYXNzd29yZCBmdl9fc2hvdy1wYXNzd29yZC1vd25lcjJcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJjbGVhcjpib3RoXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZ2X19wYXNzd29yZC1jYXB0aW9uXCI+UGVybWlzc2lvbiBTcGVjaWZpY2F0aW9uPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnZfX3Blcm1pc3Npb24tbGFiZWxcIj5QcmludGluZzogPC9zcGFuPlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZ2X19wZXJtaXNzaW9uLXByaW50XCIge3tpZiAhJGRhdGEub3duZXJQYXNzd29yZH19ZGlzYWJsZWR7ey9pZn19PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCIge3tpZiAkZGF0YS5wcmludCA9PSAwfX0gc2VsZWN0ZWR7ey9pZn19Pk5vbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiIHt7aWYgJGRhdGEucHJpbnQgPT0gMX19IHNlbGVjdGVke3svaWZ9fT5Mb3cgUmVzb2x1dGlvbigxNTAgZHBpKTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCIge3tpZiAkZGF0YS5wcmludCA9PSAyfX0gc2VsZWN0ZWR7ey9pZn19PkhpZ2ggUmVzb2x1dGlvbjwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmdl9fcGVybWlzc2lvbi1sYWJlbFwiPkFjY2Vzc2liaWxpdHk6PC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZnZfX3Blcm1pc3Npb24tYWNjZXNzaWJpbGl0eVwiIHt7aWYgISRkYXRhLm93bmVyUGFzc3dvcmR9fWRpc2FibGVke3svaWZ9fSB7e2lmICRkYXRhLmFjY2Vzc2liaWxpdHl9fSBjaGVja2Vke3svaWZ9fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmdl9fcGVybWlzc2lvbi1sYWJlbFwiPkNvcHlpbmc6PC9zcGFuPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICBjbGFzcz1cImZ2X19wZXJtaXNzaW9uLWNvcHlcIiB7e2lmICEkZGF0YS5vd25lclBhc3N3b3JkfX1kaXNhYmxlZHt7L2lmfX0ge3tpZiAkZGF0YS5jb3B5fX0gY2hlY2tlZHt7L2lmfX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnZfX3Blcm1pc3Npb24tbGFiZWxcIj5DaGFuZ2VzOjwvc3Bhbj5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmdl9fcGVybWlzc2lvbi1jaGFuZ2VcIiB7e2lmICEkZGF0YS5vd25lclBhc3N3b3JkfX1kaXNhYmxlZHt7L2lmfX0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIiB7e2lmICRkYXRhLmNoYW5nZSA9PSAwfX0gc2VsZWN0ZWR7ey9pZn19Pk5vbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiIHt7aWYgJGRhdGEuY2hhbmdlID09IDF9fSBzZWxlY3RlZHt7L2lmfX0+SW5zZXJ0aW5nLCBkZWxldGluZyBhbmQgcm90YXRpb24gcGFnZXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiIHt7aWYgJGRhdGEuY2hhbmdlID09IDJ9fSBzZWxlY3RlZHt7L2lmfX0+RmlsbGluZyBpbiBmb3JtcyBhbmQgc2lnbmluZyBleGlzdGluZyBzaWduYXR1cmUgZmllbGRzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIiB7e2lmICRkYXRhLmNoYW5nZSA9PSAzfX0gc2VsZWN0ZWR7ey9pZn19PkNvbW1lbnRpbmcsIGZpbGxpbmcgZm9ybSwgc2lnbmluZyBleGlzdGluZyBzaWduYXR1cmUgZmllbGRzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIiB7e2lmICRkYXRhLmNoYW5nZSA9PSA0fX0gc2VsZWN0ZWR7ey9pZn19PkFueSBleGNlcHQgZXh0cmFjdGluZyBwYWdlczwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZnZfX2VuY3J5cHQtc2V0dGluZy1jb250YWluZXIgZnZfX3Bhc3N3b3JkLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJmdl9fcGFzc3dvcmQtY2FwdGlvblwiPkVuY3J5cHQgU2V0dGluZ3M8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgICBFbmNyeXB0aW9uIEFsZ29yaXRobTogXG4gICAgICAgIDxsYWJlbD48aW5wdXQgbmFtZT1cImFsZ29yaXRobVwiIGNsYXNzPVwiZnZfX2FsZ29yaXRobS1yYWRpb1wiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiYWVzMTI4XCIge3tpZiAkZGF0YS5jaXBoZXJUeXBlID09IFwiYWVzMTI4XCJ9fWNoZWNrZWR7ey9pZn19IC8+MTI4LWJpdCBBRVM8L2xhYmVsPiBcbiAgICAgICAgPGxhYmVsPjxpbnB1dCBuYW1lPVwiYWxnb3JpdGhtXCIgY2xhc3M9XCJmdl9fYWxnb3JpdGhtLXJhZGlvXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJhZXMyNTZcIiB7e2lmICRkYXRhLmNpcGhlclR5cGUgPT0gXCJhZXMyNTZcIn19Y2hlY2tlZHt7L2lmfX0gLz4yNTYtYml0IEFFUzwvbGFiZWw+IFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmdl9fZW5jcnlwdC1ub3QtbWV0YWRhdGFcIiB7e2lmICEkZGF0YS5pc0VuY3J5cHRNZXRhZGF0YX19Y2hlY2tlZHt7L2lmfX0vPkRvbid0IGVuY3J5cHQgbWV0YWRhdGE8L2xhYmVsPiBcbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImZ2X19idXR0b24tY29udGFpbmVyXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmdl9fcGFzc3dvcmQtYnRuXCIge3tpZiAhJGRhdGEub3duZXJQYXNzd29yZCAmJiAhJGRhdGEudXNlclBhc3N3b3JkfX1kaXNhYmxlZHt7L2lmfX0+T0s8L2J1dHRvbj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZ2X19wYXNzd29yZC1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbjwvZGl2PiIsIjxkaXYgbmFtZT1cInBhc3N3b3JkLXByb3RlY3RcIj5cbiAgICA8eGJ1dHRvbiBuYW1lPVwicmVtb3ZlLXByb3RlY3QtYnRuXCIgaWNvbi1jbGFzcz1cImZ2X19pY29uLXJlbW92ZS1wcm90ZWN0XCIgQHRvb2x0aXA+PC94YnV0dG9uPlxuPC9kaXY+IiwiXG5pbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5cbmNvbnN0IHtcbiAgICBFdmVudHNcbn0gPSBVSUV4dGVuc2lvbi5QREZWaWV3Q3RybDtcblxuY2xhc3MgUmVtb3ZlUHJvdGVjdENhbGxiYWNrQ29udHJvbGxlciBleHRlbmRzIFVJRXh0ZW5zaW9uLkNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yIChjb21wb25lbnQpIHtcbiAgICAgICAgc3VwZXIoY29tcG9uZW50KTtcbiAgICB9XG4gICAgaGFuZGxlKCkge1xuICAgICAgICBzdXBlci5oYW5kbGUoKTtcbiAgICAgICAgaWYoIXRoaXMuYWN0aXZlKSByZXR1cm47XG4gICAgICAgIGlmKHRoaXMubmVlZFBhc3N3b3JkKXtcbiAgICAgICAgICAgIHRoaXMub3duZXJQYXNzd29yZFBvcG9wLnNldFN1Ym1pdENhbGxiYWNrKChwYXNzd29yZCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREb2MuY2hlY2tQYXNzd29yZChwYXNzd29yZCkudGhlbigodHlwZSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZSA9PSAzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXJQYXNzd29yZFBvcG9wLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmVlZFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREb2Muc2V0UGFzc3dvcmRUeXBlKHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm93bmVyUGFzc3dvcmRQb3BvcC5zaG93RXJyb3IoXCJPd25lciBwYXNzd29yZCBpcyBub3IgY29ycmVjdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm93bmVyUGFzc3dvcmRQb3BvcC5oaWRlRXJyb3IoKTtcbiAgICAgICAgICAgIHRoaXMub3duZXJQYXNzd29yZFBvcG9wLnJlc2V0SW5wdXQoKTtcbiAgICAgICAgICAgIHRoaXMub3duZXJQYXNzd29yZFBvcG9wLnNob3coKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZih3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgc2VjdXJpdHkgZnJvbSB0aGlzIGRvY3VtZW50P1wiKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RG9jLnJlbW92ZVNlY3VyaXR5KCkudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWN1cml0eUV2ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaCggKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgbGV0IHBkZlVpID0gdGhpcy5nZXRQREZVSSgpO1xuICAgICAgICB0aGlzLm93bmVyUGFzc3dvcmRQb3BvcCA9IHRoaXMuZ2V0Q29tcG9uZW50QnlOYW1lKFwib3duZXItcGFzc3dvcmQtcG9wdXBcIik7XG4gICAgICAgIHBkZlVpLmFkZFZpZXdlckV2ZW50TGlzdGVuZXIoRXZlbnRzLm9wZW5GaWxlU3VjY2VzcywgKHBkZkRvYykgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RG9jID0gcGRmRG9jO1xuICAgICAgICAgICAgcGRmRG9jLmdldFBhc3N3b3JkVHlwZSgpLnRoZW4oKHR5cGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZih0eXBlID09IDIpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUJ0bigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5lZWRQYXNzd29yZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodHlwZSA9PSAzKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVCdG4oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZWVkUGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbkFjdGl2ZUJ0bigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFjdGl2ZUJ0bigpe1xuICAgICAgICB0aGlzLmNvbXBvbmVudC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmdl9fcGFzc3dvcmQtZGlzYWJsZWQtY3Vyc29yXCIpO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaW5BY3RpdmVCdG4oKXtcbiAgICAgICAgdGhpcy5jb21wb25lbnQuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZnZfX3Bhc3N3b3JkLWRpc2FibGVkLWN1cnNvclwiKTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZW1vdmVTZWN1cml0eUV2ZW50KCl7XG4gICAgICAgIHRoaXMuaW5BY3RpdmVCdG4oKTtcblxuICAgICAgICBsZXQgcGFzc3dvcmRDcG1wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudEJ5TmFtZShcInBhc3N3b3JkLXByb3RlY3QtYnRuXCIpOyBcbiAgICAgICAgcGFzc3dvcmRDcG1wb25lbnQuY29udHJvbGxlci5zZXREZWZhdWx0RGF0YSgpO1xuICAgICAgICBwYXNzd29yZENwbXBvbmVudC5jb250cm9sbGVyLm5lZWRQYXNzd29yZCA9IGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVtb3ZlUHJvdGVjdENhbGxiYWNrQ29udHJvbGxlcjsiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIjxkaXYgbmFtZT1cInBhc3N3b3JkLXByb3RlY3RcIj5cbiAgICA8eGJ1dHRvbiBuYW1lPVwicGFzc3dvcmQtcHJvdGVjdC1idG5cIiBpY29uLWNsYXNzPVwiZnZfX2ljb24tcGFzc3dvcmQtcHJvdGVjdFwiIEB0b29sdGlwPjwveGJ1dHRvbj5cbiAgICA8cGFzc3dvcmQtcHJvdGVjdDpwYXNzd29yZC1wcm90ZWN0LXBvcHVwIG5hbWU9XCJwYXNzd29yZC1wcm90ZWN0LXBvcHVwXCIgYXBwZW5kLXRvPVwiYm9keVwiIGNsYXNzPVwiY2VudGVyXCIgbW9kYWwgYmFja2Ryb3A+XG4gICAgICAgIDxsYXllci1oZWFkZXIgdGl0bGU9XCJwYXNzd29yZC1wcm90ZWN0OmJ1dHRvbnMudGl0bGVcIiBAZHJhZ2dhYmxlPVwie3R5cGU6J3BhcmVudCd9XCI+PC9sYXllci1oZWFkZXI+XG4gICAgICAgIDxsYXllci12aWV3PlxuICAgICAgICA8L2xheWVyLXZpZXc+XG4gICAgPC9wYXNzd29yZC1wcm90ZWN0OnBhc3N3b3JkLXByb3RlY3QtcG9wdXA+XG5cbiAgICA8cGFzc3dvcmQtcHJvdGVjdDpvd25lci1wYXNzd29yZC1wb3B1cCBuYW1lPVwib3duZXItcGFzc3dvcmQtcG9wdXBcIiBhcHBlbmQtdG89XCJib2R5XCIgY2xhc3M9XCJjZW50ZXJcIiBtb2RhbCBiYWNrZHJvcD5cbiAgICAgICAgPGxheWVyLWhlYWRlciB0aXRsZT1cInBhc3N3b3JkLXByb3RlY3Q6YnV0dG9ucy50aXRsZVwiIEBkcmFnZ2FibGU9XCJ7dHlwZToncGFyZW50J31cIj48L2xheWVyLWhlYWRlcj5cbiAgICAgICAgPGxheWVyLXZpZXc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnZfX2lucHV0LW93bmVyLXBhc3N3b3JkXCIgZGF0YS1pMThuPVwicGFzc3dvcmQtcHJvdGVjdDpidXR0b25zLmlucHV0T3duZXJQYXNzd29yZFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZ2X19wYXNzd29yZC1wcm90ZWN0LWVycm9yIGZ2X19oaWRlXCI+PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmdl9fb3duZXItcGFzc3dvcmQtaW5wdXRcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnZfX2J1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImZ2X19wYXNzd29yZC1idG5cIj5PazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZnZfX3Bhc3N3b3JkLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGF5ZXItdmlldz5cbiAgICA8L3Bhc3N3b3JkLXByb3RlY3Q6cGFzc3dvcmQtcHJvdGVjdC1wb3B1cD5cbjwvZGl2PiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9VSUV4dGVuc2lvbl9fOyJdLCJzb3VyY2VSb290IjoiIn0=