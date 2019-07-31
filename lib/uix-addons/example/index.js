(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("UIExtension"));
	else if(typeof define === 'function' && define.amd)
		define(["UIExtension"], factory);
	else if(typeof exports === 'object')
		exports["ExampleUIXAddon"] = factory(require("UIExtension"));
	else
		root["ExampleUIXAddon"] = factory(root["UIExtension"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./uix-addons/example/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./uix-addons/example/addon.info.json":
/*!********************************************!*\
  !*** ./uix-addons/example/addon.info.json ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


        module.exports = null;
    

/***/ }),

/***/ "./uix-addons/example/index.js":
/*!*************************************!*\
  !*** ./uix-addons/example/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _button = __webpack_require__(/*! ./widgets/button */ "./uix-addons/example/widgets/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _addonInfo = __webpack_require__(/*! ./addon.info.json */ "./uix-addons/example/addon.info.json");

var _addonInfo2 = _interopRequireDefault(_addonInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

// 引用三方依赖库
var _UIExtension$vendors = UIExtension.vendors,
    jQuery = _UIExtension$vendors.jQuery,
    i18next = _UIExtension$vendors.i18next,
    i18nextChainedBackend = _UIExtension$vendors.i18nextChainedBackend,
    i18nextLocalStorageBackend = _UIExtension$vendors.i18nextLocalStorageBackend,
    i18nextXHRBackend = _UIExtension$vendors.i18nextXHRBackend,
    dialogPolyfill = _UIExtension$vendors.dialogPolyfill,
    Hammer = _UIExtension$vendors.Hammer,
    EventEmitter = _UIExtension$vendors.EventEmitter;

var ExampleUIXAddon = function (_UIExtension$UIXAddon) {
    _inherits(ExampleUIXAddon, _UIExtension$UIXAddon);

    function ExampleUIXAddon() {
        _classCallCheck(this, ExampleUIXAddon);

        return _possibleConstructorReturn(this, _UIExtension$UIXAddon.apply(this, arguments));
    }

    ExampleUIXAddon.getName = function getName() {
        return 'example';
    };

    ExampleUIXAddon.getLoader = function getLoader() {
        return _addonInfo2.default;
    };

    ExampleUIXAddon.prototype.init = function init() {
        _UIExtension$UIXAddon.prototype.init.call(this);
        var module = UIExtension.modular.module('simple', []);
        var registry = module.getRegistry();
        registry.registerComponent(_button2.default);
    };

    ExampleUIXAddon.prototype.fragments = function fragments() {
        return [{
            target: 'home-tab-group-hand',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: '<simple:button name="custom-eraser" icon-class="fv__icon-toolbar-eraser" @tooltip></simple:button>',
            config: {
                target: 'custom-eraser',
                tooltip: {
                    title: 'example:buttons.eraser'
                },
                callback: function (_UIExtension$Controll) {
                    _inherits(callback, _UIExtension$Controll);

                    function callback() {
                        _classCallCheck(this, callback);

                        return _possibleConstructorReturn(this, _UIExtension$Controll.apply(this, arguments));
                    }

                    callback.prototype.handle = function handle() {
                        console.info('button clicked');
                    };

                    return callback;
                }(UIExtension.Controller)
            }
        }, {
            target: 'home-toolbar-group-list',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: '<group name="custom-group"></group>'
        }, {
            target: 'custom-group',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: '<xbutton name="show-layer-button" @tooltip icon-class="fv__icon-toolbar-hand"></xbutton>',
            config: {
                target: 'show-layer-button',
                tooltip: {
                    title: 'example:buttons.show-dialog'
                },
                callback: function (_UIExtension$Controll2) {
                    _inherits(callback, _UIExtension$Controll2);

                    function callback() {
                        _classCallCheck(this, callback);

                        return _possibleConstructorReturn(this, _UIExtension$Controll2.apply(this, arguments));
                    }

                    callback.prototype.handle = function handle() {
                        this.getComponentByName('layer-example').show();
                    };

                    return callback;
                }(UIExtension.Controller)
            }
        }, {
            target: 'template-container',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: '\n                <layer name="layer-example" class="center" modal backdrop @resizable @draggable>\n                    <layer-toolbar>\n                        <h6>example:dialog.title</h6>\n                        <button icon-class="fv__icon-layer-close" @on.click="$$(\'layer-example\').hide()"></button>\n                    </layer-toolbar>\n                    <layer-view>\n                        <slider min="0" max="100" step="1"></slider>\n                    </layer-view>\n                    <layer-toolbar>\n                        <button @on.click="$$(\'layer-example\').hide()">close</button>\n                    </layer-toolbar>\n                </layer>\n            '
        }];
    };

    return ExampleUIXAddon;
}(UIExtension.UIXAddon);

exports.default = ExampleUIXAddon;
;

/***/ }),

/***/ "./uix-addons/example/widgets/button/index.js":
/*!****************************************************!*\
  !*** ./uix-addons/example/widgets/button/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

__webpack_require__(/*! ./index.scss */ "./uix-addons/example/widgets/button/index.scss");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var CustomButtonComponent = function (_UIExtension$widgets$) {
    _inherits(CustomButtonComponent, _UIExtension$widgets$);

    function CustomButtonComponent() {
        _classCallCheck(this, CustomButtonComponent);

        return _possibleConstructorReturn(this, _UIExtension$widgets$.apply(this, arguments));
    }

    CustomButtonComponent.getName = function getName() {
        return 'button';
    };

    CustomButtonComponent.prototype.render = function render() {
        _UIExtension$widgets$.prototype.render.call(this);
        this.element.classList.add('custom-button-class');
    };

    return CustomButtonComponent;
}(UIExtension.widgets.ButtonComponent);

exports.default = CustomButtonComponent;

/***/ }),

/***/ "./uix-addons/example/widgets/button/index.scss":
/*!******************************************************!*\
  !*** ./uix-addons/example/widgets/button/index.scss ***!
  \******************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FeGFtcGxlVUlYQWRkb24vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0V4YW1wbGVVSVhBZGRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FeGFtcGxlVUlYQWRkb24vLi91aXgtYWRkb25zL2V4YW1wbGUvYWRkb24uaW5mby5qc29uIiwid2VicGFjazovL0V4YW1wbGVVSVhBZGRvbi8uL3VpeC1hZGRvbnMvZXhhbXBsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9FeGFtcGxlVUlYQWRkb24vLi91aXgtYWRkb25zL2V4YW1wbGUvd2lkZ2V0cy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vRXhhbXBsZVVJWEFkZG9uLy4vdWl4LWFkZG9ucy9leGFtcGxlL3dpZGdldHMvYnV0dG9uL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vRXhhbXBsZVVJWEFkZG9uL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJVSUV4dGVuc2lvblwiLFwiY29tbW9uanMyXCI6XCJVSUV4dGVuc2lvblwiLFwiYW1kXCI6XCJVSUV4dGVuc2lvblwiLFwicm9vdFwiOlwiVUlFeHRlbnNpb25cIn0iXSwibmFtZXMiOlsiVUlFeHRlbnNpb24iLCJ2ZW5kb3JzIiwialF1ZXJ5IiwiaTE4bmV4dCIsImkxOG5leHRDaGFpbmVkQmFja2VuZCIsImkxOG5leHRMb2NhbFN0b3JhZ2VCYWNrZW5kIiwiaTE4bmV4dFhIUkJhY2tlbmQiLCJkaWFsb2dQb2x5ZmlsbCIsIkhhbW1lciIsIkV2ZW50RW1pdHRlciIsIkV4YW1wbGVVSVhBZGRvbiIsImdldE5hbWUiLCJnZXRMb2FkZXIiLCJ0cG1Nb2R1bGVMb2FkZXIiLCJpbml0IiwibW9kdWxlIiwibW9kdWxhciIsInJlZ2lzdHJ5IiwiZ2V0UmVnaXN0cnkiLCJyZWdpc3RlckNvbXBvbmVudCIsIkN1c3RvbUJ1dHRvbkNvbXBvbmVudCIsImZyYWdtZW50cyIsInRhcmdldCIsImFjdGlvbiIsIlVJQ29uc3RzIiwiRlJBR01FTlRfQUNUSU9OIiwiQVBQRU5EIiwidGVtcGxhdGUiLCJjb25maWciLCJ0b29sdGlwIiwidGl0bGUiLCJjYWxsYmFjayIsImhhbmRsZSIsImNvbnNvbGUiLCJpbmZvIiwiQ29udHJvbGxlciIsImdldENvbXBvbmVudEJ5TmFtZSIsInNob3ciLCJVSVhBZGRvbiIsInJlbmRlciIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3aWRnZXRzIiwiQnV0dG9uQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOztJQUFZQSxXOztBQUNaOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTsyQkFVSUEsWUFBWUMsTztJQVJaQyxNLHdCQUFBQSxNO0lBQ0FDLE8sd0JBQUFBLE87SUFDQUMscUIsd0JBQUFBLHFCO0lBQ0FDLDBCLHdCQUFBQSwwQjtJQUNBQyxpQix3QkFBQUEsaUI7SUFDQUMsYyx3QkFBQUEsYztJQUNBQyxNLHdCQUFBQSxNO0lBQ0FDLFksd0JBQUFBLFk7O0lBR2lCQyxlOzs7Ozs7Ozs7b0JBQ1ZDLE8sc0JBQVU7QUFDYixlQUFPLFNBQVA7QUFDSCxLOztvQkFDTUMsUyx3QkFBWTtBQUNmLGVBQU9DLG1CQUFQO0FBQ0gsSzs7OEJBQ0RDLEksbUJBQU87QUFDSCx3Q0FBTUEsSUFBTjtBQUNBLFlBQU1DLFNBQVNmLFlBQVlnQixPQUFaLENBQW9CRCxNQUFwQixDQUEyQixRQUEzQixFQUFxQyxFQUFyQyxDQUFmO0FBQ0EsWUFBTUUsV0FBV0YsT0FBT0csV0FBUCxFQUFqQjtBQUNBRCxpQkFBU0UsaUJBQVQsQ0FBMkJDLGdCQUEzQjtBQUNILEs7OzhCQUNEQyxTLHdCQUFZO0FBQ1IsZUFBTyxDQUFDO0FBQ0pDLG9CQUFRLHFCQURKO0FBRUpDLG9CQUFRdkIsWUFBWXdCLFFBQVosQ0FBcUJDLGVBQXJCLENBQXFDQyxNQUZ6QztBQUdKQyxzQkFBVSxvR0FITjtBQUlKQyxvQkFBUTtBQUNKTix3QkFBUSxlQURKO0FBRUpPLHlCQUFTO0FBQ0xDLDJCQUFPO0FBREYsaUJBRkw7QUFLSkM7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUEsdUNBQ0lDLE1BREoscUJBQ2E7QUFDTEMsZ0NBQVFDLElBQVIsQ0FBYSxnQkFBYjtBQUNILHFCQUhMOztBQUFBO0FBQUEsa0JBQXdCbEMsWUFBWW1DLFVBQXBDO0FBTEk7QUFKSixTQUFELEVBZUo7QUFDQ2Isb0JBQVEseUJBRFQ7QUFFQ0Msb0JBQVF2QixZQUFZd0IsUUFBWixDQUFxQkMsZUFBckIsQ0FBcUNDLE1BRjlDO0FBR0NDLHNCQUFVO0FBSFgsU0FmSSxFQW1CSjtBQUNDTCxvQkFBUSxjQURUO0FBRUNDLG9CQUFRdkIsWUFBWXdCLFFBQVosQ0FBcUJDLGVBQXJCLENBQXFDQyxNQUY5QztBQUdDQyxzQkFBVSwwRkFIWDtBQUlDQyxvQkFBUTtBQUNKTix3QkFBUSxtQkFESjtBQUVKTyx5QkFBUztBQUNMQywyQkFBTztBQURGLGlCQUZMO0FBS0pDO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBLHVDQUNJQyxNQURKLHFCQUNZO0FBQ0osNkJBQUtJLGtCQUFMLENBQXdCLGVBQXhCLEVBQXlDQyxJQUF6QztBQUNILHFCQUhMOztBQUFBO0FBQUEsa0JBQXdCckMsWUFBWW1DLFVBQXBDO0FBTEk7QUFKVCxTQW5CSSxFQWtDSjtBQUNDYixvQkFBUSxvQkFEVDtBQUVDQyxvQkFBUXZCLFlBQVl3QixRQUFaLENBQXFCQyxlQUFyQixDQUFxQ0MsTUFGOUM7QUFHQ0M7QUFIRCxTQWxDSSxDQUFQO0FBb0RILEs7OztFQWxFd0MzQixZQUFZc0MsUTs7a0JBQXBDNUIsZTtBQW1FcEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZEOztJQUFZVixXOztBQUNaOzs7Ozs7Ozs7Ozs7SUFFcUJvQixxQjs7Ozs7Ozs7OzBCQUNWVCxPLHNCQUFVO0FBQ2IsZUFBTyxRQUFQO0FBQ0gsSzs7b0NBQ0Q0QixNLHFCQUFTO0FBQ0wsd0NBQU1BLE1BQU47QUFDQSxhQUFLQyxPQUFMLENBQWFDLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLHFCQUEzQjtBQUNILEs7OztFQVA4QzFDLFlBQVkyQyxPQUFaLENBQW9CQyxlOztrQkFBbER4QixxQjs7Ozs7Ozs7Ozs7QUNIckIseUM7Ozs7Ozs7Ozs7O0FDQUEseUQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJVSUV4dGVuc2lvblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJVSUV4dGVuc2lvblwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJFeGFtcGxlVUlYQWRkb25cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJVSUV4dGVuc2lvblwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiRXhhbXBsZVVJWEFkZG9uXCJdID0gZmFjdG9yeShyb290W1wiVUlFeHRlbnNpb25cIl0pO1xufSkoc2VsZiwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9VSUV4dGVuc2lvbl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi91aXgtYWRkb25zL2V4YW1wbGUvaW5kZXguanNcIik7XG4iLCJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBudWxsO1xuICAgICIsImltcG9ydCAqIGFzIFVJRXh0ZW5zaW9uIGZyb20gJ1VJRXh0ZW5zaW9uJztcbmltcG9ydCBDdXN0b21CdXR0b25Db21wb25lbnQgZnJvbSAnLi93aWRnZXRzL2J1dHRvbic7XG5pbXBvcnQgdHBtTW9kdWxlTG9hZGVyIGZyb20gJy4vYWRkb24uaW5mby5qc29uJztcblxuLy8g5byV55So5LiJ5pa55L6d6LWW5bqTXG5jb25zdCB7XG4gICAgalF1ZXJ5LFxuICAgIGkxOG5leHQsXG4gICAgaTE4bmV4dENoYWluZWRCYWNrZW5kLFxuICAgIGkxOG5leHRMb2NhbFN0b3JhZ2VCYWNrZW5kLFxuICAgIGkxOG5leHRYSFJCYWNrZW5kLFxuICAgIGRpYWxvZ1BvbHlmaWxsLFxuICAgIEhhbW1lcixcbiAgICBFdmVudEVtaXR0ZXJcbn0gPSBVSUV4dGVuc2lvbi52ZW5kb3JzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlVUlYQWRkb24gZXh0ZW5kcyBVSUV4dGVuc2lvbi5VSVhBZGRvbiB7XG4gICAgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnZXhhbXBsZSc7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRMb2FkZXIoKSB7XG4gICAgICAgIHJldHVybiB0cG1Nb2R1bGVMb2FkZXI7XG4gICAgfVxuICAgIGluaXQoKSB7XG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gVUlFeHRlbnNpb24ubW9kdWxhci5tb2R1bGUoJ3NpbXBsZScsIFtdKTtcbiAgICAgICAgY29uc3QgcmVnaXN0cnkgPSBtb2R1bGUuZ2V0UmVnaXN0cnkoKTtcbiAgICAgICAgcmVnaXN0cnkucmVnaXN0ZXJDb21wb25lbnQoQ3VzdG9tQnV0dG9uQ29tcG9uZW50KTtcbiAgICB9XG4gICAgZnJhZ21lbnRzKCkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgIHRhcmdldDogJ2hvbWUtdGFiLWdyb3VwLWhhbmQnLFxuICAgICAgICAgICAgYWN0aW9uOiBVSUV4dGVuc2lvbi5VSUNvbnN0cy5GUkFHTUVOVF9BQ1RJT04uQVBQRU5ELFxuICAgICAgICAgICAgdGVtcGxhdGU6ICc8c2ltcGxlOmJ1dHRvbiBuYW1lPVwiY3VzdG9tLWVyYXNlclwiIGljb24tY2xhc3M9XCJmdl9faWNvbi10b29sYmFyLWVyYXNlclwiIEB0b29sdGlwPjwvc2ltcGxlOmJ1dHRvbj4nLFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnY3VzdG9tLWVyYXNlcicsXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2V4YW1wbGU6YnV0dG9ucy5lcmFzZXInXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogY2xhc3MgZXh0ZW5kcyBVSUV4dGVuc2lvbi5Db250cm9sbGVyIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0YXJnZXQ6ICdob21lLXRvb2xiYXItZ3JvdXAtbGlzdCcsXG4gICAgICAgICAgICBhY3Rpb246IFVJRXh0ZW5zaW9uLlVJQ29uc3RzLkZSQUdNRU5UX0FDVElPTi5BUFBFTkQsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxncm91cCBuYW1lPVwiY3VzdG9tLWdyb3VwXCI+PC9ncm91cD4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRhcmdldDogJ2N1c3RvbS1ncm91cCcsXG4gICAgICAgICAgICBhY3Rpb246IFVJRXh0ZW5zaW9uLlVJQ29uc3RzLkZSQUdNRU5UX0FDVElPTi5BUFBFTkQsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzx4YnV0dG9uIG5hbWU9XCJzaG93LWxheWVyLWJ1dHRvblwiIEB0b29sdGlwIGljb24tY2xhc3M9XCJmdl9faWNvbi10b29sYmFyLWhhbmRcIj48L3hidXR0b24+JyxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHRhcmdldDogJ3Nob3ctbGF5ZXItYnV0dG9uJyxcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnZXhhbXBsZTpidXR0b25zLnNob3ctZGlhbG9nJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNsYXNzIGV4dGVuZHMgVUlFeHRlbnNpb24uQ29udHJvbGxlciB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnRCeU5hbWUoJ2xheWVyLWV4YW1wbGUnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0YXJnZXQ6ICd0ZW1wbGF0ZS1jb250YWluZXInLFxuICAgICAgICAgICAgYWN0aW9uOiBVSUV4dGVuc2lvbi5VSUNvbnN0cy5GUkFHTUVOVF9BQ1RJT04uQVBQRU5ELFxuICAgICAgICAgICAgdGVtcGxhdGU6YFxuICAgICAgICAgICAgICAgIDxsYXllciBuYW1lPVwibGF5ZXItZXhhbXBsZVwiIGNsYXNzPVwiY2VudGVyXCIgbW9kYWwgYmFja2Ryb3AgQHJlc2l6YWJsZSBAZHJhZ2dhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8bGF5ZXItdG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5leGFtcGxlOmRpYWxvZy50aXRsZTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGljb24tY2xhc3M9XCJmdl9faWNvbi1sYXllci1jbG9zZVwiIEBvbi5jbGljaz1cIiQkKCdsYXllci1leGFtcGxlJykuaGlkZSgpXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvbGF5ZXItdG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgICAgPGxheWVyLXZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2xpZGVyIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMVwiPjwvc2xpZGVyPlxuICAgICAgICAgICAgICAgICAgICA8L2xheWVyLXZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDxsYXllci10b29sYmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAb24uY2xpY2s9XCIkJCgnbGF5ZXItZXhhbXBsZScpLmhpZGUoKVwiPmNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvbGF5ZXItdG9vbGJhcj5cbiAgICAgICAgICAgICAgICA8L2xheWVyPlxuICAgICAgICAgICAgYFxuICAgICAgICB9XTtcbiAgICB9XG59OyIsImltcG9ydCAqIGFzIFVJRXh0ZW5zaW9uIGZyb20gJ1VJRXh0ZW5zaW9uJztcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgVUlFeHRlbnNpb24ud2lkZ2V0cy5CdXR0b25Db21wb25lbnQge1xuICAgIHN0YXRpYyBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ2J1dHRvbic7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgc3VwZXIucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjdXN0b20tYnV0dG9uLWNsYXNzJyk7XG4gICAgfVxufVxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfVUlFeHRlbnNpb25fXzsiXSwic291cmNlUm9vdCI6IiJ9