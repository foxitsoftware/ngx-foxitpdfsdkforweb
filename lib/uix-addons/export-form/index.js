(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("UIExtension"));
	else if(typeof define === 'function' && define.amd)
		define(["UIExtension"], factory);
	else if(typeof exports === 'object')
		exports["ExportFormUIXAddon"] = factory(require("UIExtension"));
	else
		root["ExportFormUIXAddon"] = factory(root["UIExtension"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./uix-addons/export-form/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./uix-addons/export-form/ExportFormController.js":
/*!********************************************************!*\
  !*** ./uix-addons/export-form/ExportFormController.js ***!
  \********************************************************/
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

var Events = UIExtension.PDFViewCtrl.Events;

var ExportFormController = function (_UIExtension$Controll) {
    _inherits(ExportFormController, _UIExtension$Controll);

    function ExportFormController() {
        _classCallCheck(this, ExportFormController);

        return _possibleConstructorReturn(this, _UIExtension$Controll.apply(this, arguments));
    }

    ExportFormController.getName = function getName() {
        return 'ExportFormController';
    };

    ExportFormController.prototype.postlink = function postlink() {
        var _this2 = this;

        this.addDestroyHook(this.getPDFUI().addViewerEventListener(Events.openFileSuccess, function (pdfDoc) {
            var hasForm = pdfDoc.hasForm();
            if (!hasForm) {
                _this2.component.lock();
            } else {
                _this2.component.unlock();
            }
        }));
    };

    _createClass(ExportFormController, null, [{
        key: 'permission',
        get: function get() {
            return UIExtension.PDFViewCtrl.Consts.PDFDocPermission.AnnotForm + UIExtension.PDFViewCtrl.Consts.PDFDocPermission.FillForm;
        }
    }]);

    return ExportFormController;
}(UIExtension.Controller);

exports.default = ExportFormController;

/***/ }),

/***/ "./uix-addons/export-form/ExportFormDropdownComponent.js":
/*!***************************************************************!*\
  !*** ./uix-addons/export-form/ExportFormDropdownComponent.js ***!
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

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ExportFormDropdownComponent = function (_UIExtension$SeniorCo) {
    _inherits(ExportFormDropdownComponent, _UIExtension$SeniorCo);

    function ExportFormDropdownComponent() {
        _classCallCheck(this, ExportFormDropdownComponent);

        return _possibleConstructorReturn(this, _UIExtension$SeniorCo.apply(this, arguments));
    }

    ExportFormDropdownComponent.getName = function getName() {
        return 'export-form-dropdown';
    };

    return ExportFormDropdownComponent;
}(UIExtension.SeniorComponentFactory.createSuperClass({
    template: '\n        <dropdown @tooltip @controller="export-form-module:ExportFormController"  icon-class="fv__icon-toolbar-export-form" tooltip-title="export:button-tooltip.title" name="export-form">\n            <dropdown-button name="export-to-xml"  @controller="export-form-module:ExportToXMLController" icon-class="fv__icon-toolbar-to-xml-file">\n                export:export.xml\n            </dropdown-button>\n            <dropdown-button name="export-to-fdf"  @controller="export-form-module:ExportToFDFController" icon-class="fv__icon-toolbar-to-fdf-file">\n                export:export.fdf\n            </dropdown-button>\n            <dropdown-button name="export-to-xfdf" @controller="export-form-module:ExportToXFDFController"  icon-class="fv__icon-toolbar-to-xfdf-file">\n                export:export.xfdf\n            </dropdown-button>\n        </dropdown>\n    '
}));

exports.default = ExportFormDropdownComponent;
;

/***/ }),

/***/ "./uix-addons/export-form/ExportToFDFController.js":
/*!*********************************************************!*\
  !*** ./uix-addons/export-form/ExportToFDFController.js ***!
  \*********************************************************/
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

var Download = UIExtension.PDFViewCtrl.shared.download;

var ExportToFDFController = function (_UIExtension$Controll) {
    _inherits(ExportToFDFController, _UIExtension$Controll);

    function ExportToFDFController() {
        _classCallCheck(this, ExportToFDFController);

        return _possibleConstructorReturn(this, _UIExtension$Controll.apply(this, arguments));
    }

    ExportToFDFController.getName = function getName() {
        return "ExportToFDFController";
    };

    ExportToFDFController.prototype.handle = function handle() {
        var downloadEnv = Download.getDownloadEnv();
        var pdfUI = this.getPDFUI();
        pdfUI.getPDFDocRender().then(function (docRender) {
            var pdfDoc = docRender.getPDFDoc();
            var fileName = pdfDoc.getFileName();
            fileName = fileName ? fileName : "download.pdf";
            pdfDoc.exportFormToFile(0).then(function (blob) {
                Download.download(blob, fileName.replace(".pdf", ".fdf"), 'application/vnd.fdf', downloadEnv);
            });
        });
    };

    return ExportToFDFController;
}(UIExtension.Controller);

exports.default = ExportToFDFController;

/***/ }),

/***/ "./uix-addons/export-form/ExportToXFDFController.js":
/*!**********************************************************!*\
  !*** ./uix-addons/export-form/ExportToXFDFController.js ***!
  \**********************************************************/
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

var Download = UIExtension.PDFViewCtrl.shared.download;

var ExportToXFDFController = function (_UIExtension$Controll) {
    _inherits(ExportToXFDFController, _UIExtension$Controll);

    function ExportToXFDFController() {
        _classCallCheck(this, ExportToXFDFController);

        return _possibleConstructorReturn(this, _UIExtension$Controll.apply(this, arguments));
    }

    ExportToXFDFController.getName = function getName() {
        return "ExportToXFDFController";
    };

    ExportToXFDFController.prototype.handle = function handle() {
        var downloadEnv = Download.getDownloadEnv();
        var pdfUI = this.getPDFUI();
        pdfUI.getPDFDocRender().then(function (docRender) {
            var pdfDoc = docRender.getPDFDoc();
            var fileName = pdfDoc.getFileName();
            fileName = fileName ? fileName : "download.pdf";
            pdfDoc.exportFormToFile(1).then(function (blob) {
                Download.download(blob, fileName.replace(".pdf", ".xfdf"), 'application/vnd.adobe.xfdf', downloadEnv);
            });
        });
    };

    return ExportToXFDFController;
}(UIExtension.Controller);

exports.default = ExportToXFDFController;

/***/ }),

/***/ "./uix-addons/export-form/ExportToXMLController.js":
/*!*********************************************************!*\
  !*** ./uix-addons/export-form/ExportToXMLController.js ***!
  \*********************************************************/
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

var Download = UIExtension.PDFViewCtrl.shared.download;

var ExportToXMLController = function (_UIExtension$Controll) {
    _inherits(ExportToXMLController, _UIExtension$Controll);

    function ExportToXMLController() {
        _classCallCheck(this, ExportToXMLController);

        return _possibleConstructorReturn(this, _UIExtension$Controll.apply(this, arguments));
    }

    ExportToXMLController.getName = function getName() {
        return "ExportToXMLController";
    };

    ExportToXMLController.prototype.handle = function handle() {
        var downloadEnv = Download.getDownloadEnv();
        var pdfUI = this.getPDFUI();
        pdfUI.getPDFDocRender().then(function (docRender) {
            var pdfDoc = docRender.getPDFDoc();
            var fileName = pdfDoc.getFileName();
            fileName = fileName ? fileName : "download.pdf";
            pdfDoc.exportFormToFile(2).then(function (blob) {
                Download.download(blob, fileName.replace(".pdf", ".xml"), 'application/xml', downloadEnv);
            });
        });
    };

    return ExportToXMLController;
}(UIExtension.Controller);

exports.default = ExportToXMLController;

/***/ }),

/***/ "./uix-addons/export-form/addon.info.json":
/*!************************************************!*\
  !*** ./uix-addons/export-form/addon.info.json ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


        module.exports = null;
    

/***/ }),

/***/ "./uix-addons/export-form/index.js":
/*!*****************************************!*\
  !*** ./uix-addons/export-form/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _addonInfo = __webpack_require__(/*! ./addon.info.json */ "./uix-addons/export-form/addon.info.json");

var _addonInfo2 = _interopRequireDefault(_addonInfo);

var _ExportToXMLController = __webpack_require__(/*! ./ExportToXMLController */ "./uix-addons/export-form/ExportToXMLController.js");

var _ExportToXMLController2 = _interopRequireDefault(_ExportToXMLController);

var _ExportToFDFController = __webpack_require__(/*! ./ExportToFDFController */ "./uix-addons/export-form/ExportToFDFController.js");

var _ExportToFDFController2 = _interopRequireDefault(_ExportToFDFController);

var _ExportToXFDFController = __webpack_require__(/*! ./ExportToXFDFController */ "./uix-addons/export-form/ExportToXFDFController.js");

var _ExportToXFDFController2 = _interopRequireDefault(_ExportToXFDFController);

var _ExportFormController = __webpack_require__(/*! ./ExportFormController.js */ "./uix-addons/export-form/ExportFormController.js");

var _ExportFormController2 = _interopRequireDefault(_ExportFormController);

var _ExportFormDropdownComponent = __webpack_require__(/*! ./ExportFormDropdownComponent.js */ "./uix-addons/export-form/ExportFormDropdownComponent.js");

var _ExportFormDropdownComponent2 = _interopRequireDefault(_ExportFormDropdownComponent);

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
        return 'exportForm';
    };

    _class.getLoader = function getLoader() {
        return _addonInfo2.default;
    };

    _class.prototype.init = function init() {
        var module = UIExtension.modular.module('export-form-module', []);
        module.registerComponent(_ExportFormDropdownComponent2.default);
        module.registerController(_ExportFormController2.default);
        module.registerController(_ExportToXMLController2.default);
        module.registerController(_ExportToFDFController2.default);
        module.registerController(_ExportToXFDFController2.default);
    };

    _class.prototype.fragments = function fragments() {
        return [{
            target: 'home-tab-group-form',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: '<export-form-module:export-form-dropdown>'
        }];
    };

    return _class;
}(UIExtension.UIXAddon);

exports.default = _class;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FeHBvcnRGb3JtVUlYQWRkb24vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0V4cG9ydEZvcm1VSVhBZGRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FeHBvcnRGb3JtVUlYQWRkb24vLi91aXgtYWRkb25zL2V4cG9ydC1mb3JtL0V4cG9ydEZvcm1Db250cm9sbGVyLmpzIiwid2VicGFjazovL0V4cG9ydEZvcm1VSVhBZGRvbi8uL3VpeC1hZGRvbnMvZXhwb3J0LWZvcm0vRXhwb3J0Rm9ybURyb3Bkb3duQ29tcG9uZW50LmpzIiwid2VicGFjazovL0V4cG9ydEZvcm1VSVhBZGRvbi8uL3VpeC1hZGRvbnMvZXhwb3J0LWZvcm0vRXhwb3J0VG9GREZDb250cm9sbGVyLmpzIiwid2VicGFjazovL0V4cG9ydEZvcm1VSVhBZGRvbi8uL3VpeC1hZGRvbnMvZXhwb3J0LWZvcm0vRXhwb3J0VG9YRkRGQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9FeHBvcnRGb3JtVUlYQWRkb24vLi91aXgtYWRkb25zL2V4cG9ydC1mb3JtL0V4cG9ydFRvWE1MQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9FeHBvcnRGb3JtVUlYQWRkb24vLi91aXgtYWRkb25zL2V4cG9ydC1mb3JtL2FkZG9uLmluZm8uanNvbiIsIndlYnBhY2s6Ly9FeHBvcnRGb3JtVUlYQWRkb24vLi91aXgtYWRkb25zL2V4cG9ydC1mb3JtL2luZGV4LmpzIiwid2VicGFjazovL0V4cG9ydEZvcm1VSVhBZGRvbi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiVUlFeHRlbnNpb25cIixcImNvbW1vbmpzMlwiOlwiVUlFeHRlbnNpb25cIixcImFtZFwiOlwiVUlFeHRlbnNpb25cIixcInJvb3RcIjpcIlVJRXh0ZW5zaW9uXCJ9Il0sIm5hbWVzIjpbIlVJRXh0ZW5zaW9uIiwiRXZlbnRzIiwiUERGVmlld0N0cmwiLCJFeHBvcnRGb3JtQ29udHJvbGxlciIsImdldE5hbWUiLCJwb3N0bGluayIsImFkZERlc3Ryb3lIb29rIiwiZ2V0UERGVUkiLCJhZGRWaWV3ZXJFdmVudExpc3RlbmVyIiwib3BlbkZpbGVTdWNjZXNzIiwiaGFzRm9ybSIsInBkZkRvYyIsImNvbXBvbmVudCIsImxvY2siLCJ1bmxvY2siLCJDb25zdHMiLCJQREZEb2NQZXJtaXNzaW9uIiwiQW5ub3RGb3JtIiwiRmlsbEZvcm0iLCJDb250cm9sbGVyIiwiRXhwb3J0Rm9ybURyb3Bkb3duQ29tcG9uZW50IiwiU2VuaW9yQ29tcG9uZW50RmFjdG9yeSIsImNyZWF0ZVN1cGVyQ2xhc3MiLCJ0ZW1wbGF0ZSIsIkRvd25sb2FkIiwic2hhcmVkIiwiZG93bmxvYWQiLCJFeHBvcnRUb0ZERkNvbnRyb2xsZXIiLCJoYW5kbGUiLCJkb3dubG9hZEVudiIsImdldERvd25sb2FkRW52IiwicGRmVUkiLCJnZXRQREZEb2NSZW5kZXIiLCJ0aGVuIiwiZG9jUmVuZGVyIiwiZ2V0UERGRG9jIiwiZmlsZU5hbWUiLCJnZXRGaWxlTmFtZSIsImV4cG9ydEZvcm1Ub0ZpbGUiLCJibG9iIiwicmVwbGFjZSIsIkV4cG9ydFRvWEZERkNvbnRyb2xsZXIiLCJFeHBvcnRUb1hNTENvbnRyb2xsZXIiLCJnZXRMb2FkZXIiLCJleHBvcnRGb3JtTG9hZGVyIiwiaW5pdCIsIm1vZHVsZSIsIm1vZHVsYXIiLCJyZWdpc3RlckNvbXBvbmVudCIsInJlZ2lzdGVyQ29udHJvbGxlciIsImZyYWdtZW50cyIsInRhcmdldCIsImFjdGlvbiIsIlVJQ29uc3RzIiwiRlJBR01FTlRfQUNUSU9OIiwiQVBQRU5EIiwiVUlYQWRkb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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ckIsQ0FBcUNDLE1BRmpEO0FBR0loQztBQUhKLFNBREcsQ0FBUDtBQU9ILEs7OztFQTFCd0J2QixZQUFZd0QsUTs7Ozs7Ozs7Ozs7OztBQ1J6Qyx5RCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlVJRXh0ZW5zaW9uXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlVJRXh0ZW5zaW9uXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkV4cG9ydEZvcm1VSVhBZGRvblwiXSA9IGZhY3RvcnkocmVxdWlyZShcIlVJRXh0ZW5zaW9uXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJFeHBvcnRGb3JtVUlYQWRkb25cIl0gPSBmYWN0b3J5KHJvb3RbXCJVSUV4dGVuc2lvblwiXSk7XG59KShzZWxmLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX1VJRXh0ZW5zaW9uX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3VpeC1hZGRvbnMvZXhwb3J0LWZvcm0vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5cbmNvbnN0IEV2ZW50cyA9IFVJRXh0ZW5zaW9uLlBERlZpZXdDdHJsLkV2ZW50cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwb3J0Rm9ybUNvbnRyb2xsZXIgZXh0ZW5kcyBVSUV4dGVuc2lvbi5Db250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdFeHBvcnRGb3JtQ29udHJvbGxlcic7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgcGVybWlzc2lvbigpe1xuICAgICAgICByZXR1cm4gVUlFeHRlbnNpb24uUERGVmlld0N0cmwuQ29uc3RzLlBERkRvY1Blcm1pc3Npb24uQW5ub3RGb3JtICtcbiAgICAgICAgVUlFeHRlbnNpb24uUERGVmlld0N0cmwuQ29uc3RzLlBERkRvY1Blcm1pc3Npb24uRmlsbEZvcm07XG4gICAgfVxuICAgIHBvc3RsaW5rKCkge1xuICAgICAgICB0aGlzLmFkZERlc3Ryb3lIb29rKFxuICAgICAgICAgICAgdGhpcy5nZXRQREZVSSgpLmFkZFZpZXdlckV2ZW50TGlzdGVuZXIoRXZlbnRzLm9wZW5GaWxlU3VjY2VzcywgcGRmRG9jID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaGFzRm9ybSA9IHBkZkRvYy5oYXNGb3JtKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNGb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmxvY2soKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC51bmxvY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cG9ydEZvcm1Ecm9wZG93bkNvbXBvbmVudCBleHRlbmRzIFVJRXh0ZW5zaW9uLlNlbmlvckNvbXBvbmVudEZhY3RvcnkuY3JlYXRlU3VwZXJDbGFzcyh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRyb3Bkb3duIEB0b29sdGlwIEBjb250cm9sbGVyPVwiZXhwb3J0LWZvcm0tbW9kdWxlOkV4cG9ydEZvcm1Db250cm9sbGVyXCIgIGljb24tY2xhc3M9XCJmdl9faWNvbi10b29sYmFyLWV4cG9ydC1mb3JtXCIgdG9vbHRpcC10aXRsZT1cImV4cG9ydDpidXR0b24tdG9vbHRpcC50aXRsZVwiIG5hbWU9XCJleHBvcnQtZm9ybVwiPlxuICAgICAgICAgICAgPGRyb3Bkb3duLWJ1dHRvbiBuYW1lPVwiZXhwb3J0LXRvLXhtbFwiICBAY29udHJvbGxlcj1cImV4cG9ydC1mb3JtLW1vZHVsZTpFeHBvcnRUb1hNTENvbnRyb2xsZXJcIiBpY29uLWNsYXNzPVwiZnZfX2ljb24tdG9vbGJhci10by14bWwtZmlsZVwiPlxuICAgICAgICAgICAgICAgIGV4cG9ydDpleHBvcnQueG1sXG4gICAgICAgICAgICA8L2Ryb3Bkb3duLWJ1dHRvbj5cbiAgICAgICAgICAgIDxkcm9wZG93bi1idXR0b24gbmFtZT1cImV4cG9ydC10by1mZGZcIiAgQGNvbnRyb2xsZXI9XCJleHBvcnQtZm9ybS1tb2R1bGU6RXhwb3J0VG9GREZDb250cm9sbGVyXCIgaWNvbi1jbGFzcz1cImZ2X19pY29uLXRvb2xiYXItdG8tZmRmLWZpbGVcIj5cbiAgICAgICAgICAgICAgICBleHBvcnQ6ZXhwb3J0LmZkZlxuICAgICAgICAgICAgPC9kcm9wZG93bi1idXR0b24+XG4gICAgICAgICAgICA8ZHJvcGRvd24tYnV0dG9uIG5hbWU9XCJleHBvcnQtdG8teGZkZlwiIEBjb250cm9sbGVyPVwiZXhwb3J0LWZvcm0tbW9kdWxlOkV4cG9ydFRvWEZERkNvbnRyb2xsZXJcIiAgaWNvbi1jbGFzcz1cImZ2X19pY29uLXRvb2xiYXItdG8teGZkZi1maWxlXCI+XG4gICAgICAgICAgICAgICAgZXhwb3J0OmV4cG9ydC54ZmRmXG4gICAgICAgICAgICA8L2Ryb3Bkb3duLWJ1dHRvbj5cbiAgICAgICAgPC9kcm9wZG93bj5cbiAgICBgXG59KSB7XG4gICAgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnZXhwb3J0LWZvcm0tZHJvcGRvd24nXG4gICAgfVxufTsiLCJpbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5cbmNvbnN0IERvd25sb2FkPVVJRXh0ZW5zaW9uLlBERlZpZXdDdHJsLnNoYXJlZC5kb3dubG9hZDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwb3J0VG9GREZDb250cm9sbGVyIGV4dGVuZHMgVUlFeHRlbnNpb24uQ29udHJvbGxlciB7XG4gICAgc3RhdGljIGdldE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIFwiRXhwb3J0VG9GREZDb250cm9sbGVyXCI7XG4gICAgfVxuICAgIGhhbmRsZSgpIHtcbiAgICAgICAgbGV0IGRvd25sb2FkRW52ID0gRG93bmxvYWQuZ2V0RG93bmxvYWRFbnYoKTtcbiAgICAgICAgY29uc3QgcGRmVUkgPSB0aGlzLmdldFBERlVJKCk7XG4gICAgICAgIHBkZlVJLmdldFBERkRvY1JlbmRlcigpLnRoZW4oKGRvY1JlbmRlcik9PntcbiAgICAgICAgICAgIGxldCBwZGZEb2M9ZG9jUmVuZGVyLmdldFBERkRvYygpO1xuICAgICAgICAgICAgbGV0IGZpbGVOYW1lPXBkZkRvYy5nZXRGaWxlTmFtZSgpO1xuICAgICAgICAgICAgZmlsZU5hbWU9ZmlsZU5hbWU/ZmlsZU5hbWU6XCJkb3dubG9hZC5wZGZcIjtcbiAgICAgICAgICAgIHBkZkRvYy5leHBvcnRGb3JtVG9GaWxlKDApLnRoZW4oKGJsb2IpPT57XG4gICAgICAgICAgICAgICAgRG93bmxvYWQuZG93bmxvYWQgKGJsb2IsIGZpbGVOYW1lLnJlcGxhY2UoXCIucGRmXCIsXCIuZmRmXCIpLCAnYXBwbGljYXRpb24vdm5kLmZkZicsIGRvd25sb2FkRW52KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgVUlFeHRlbnNpb24gZnJvbSAnVUlFeHRlbnNpb24nO1xuXG5jb25zdCBEb3dubG9hZD1VSUV4dGVuc2lvbi5QREZWaWV3Q3RybC5zaGFyZWQuZG93bmxvYWQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cG9ydFRvWEZERkNvbnRyb2xsZXIgZXh0ZW5kcyBVSUV4dGVuc2lvbi5Db250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gXCJFeHBvcnRUb1hGREZDb250cm9sbGVyXCI7XG4gICAgfVxuICAgIGhhbmRsZSgpIHtcbiAgICAgICAgbGV0IGRvd25sb2FkRW52ID0gRG93bmxvYWQuZ2V0RG93bmxvYWRFbnYoKTtcbiAgICAgICAgY29uc3QgcGRmVUkgPSB0aGlzLmdldFBERlVJKCk7XG4gICAgICAgIHBkZlVJLmdldFBERkRvY1JlbmRlcigpLnRoZW4oKGRvY1JlbmRlcik9PntcbiAgICAgICAgICAgIGxldCBwZGZEb2M9ZG9jUmVuZGVyLmdldFBERkRvYygpO1xuICAgICAgICAgICAgbGV0IGZpbGVOYW1lPXBkZkRvYy5nZXRGaWxlTmFtZSgpO1xuICAgICAgICAgICAgZmlsZU5hbWU9ZmlsZU5hbWU/ZmlsZU5hbWU6XCJkb3dubG9hZC5wZGZcIjtcbiAgICAgICAgICAgIHBkZkRvYy5leHBvcnRGb3JtVG9GaWxlKDEpLnRoZW4oKGJsb2IpPT57XG4gICAgICAgICAgICAgICAgRG93bmxvYWQuZG93bmxvYWQgKGJsb2IsIGZpbGVOYW1lLnJlcGxhY2UoXCIucGRmXCIsXCIueGZkZlwiKSwgJ2FwcGxpY2F0aW9uL3ZuZC5hZG9iZS54ZmRmJywgZG93bmxvYWRFbnYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5cbmNvbnN0IERvd25sb2FkPVVJRXh0ZW5zaW9uLlBERlZpZXdDdHJsLnNoYXJlZC5kb3dubG9hZDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwb3J0VG9YTUxDb250cm9sbGVyIGV4dGVuZHMgVUlFeHRlbnNpb24uQ29udHJvbGxlciB7XG4gICAgc3RhdGljIGdldE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIFwiRXhwb3J0VG9YTUxDb250cm9sbGVyXCI7XG4gICAgfVxuICAgIGhhbmRsZSgpIHtcbiAgICAgICAgbGV0IGRvd25sb2FkRW52ID0gRG93bmxvYWQuZ2V0RG93bmxvYWRFbnYoKTtcbiAgICAgICAgY29uc3QgcGRmVUkgPSB0aGlzLmdldFBERlVJKCk7XG4gICAgICAgIHBkZlVJLmdldFBERkRvY1JlbmRlcigpLnRoZW4oKGRvY1JlbmRlcik9PntcbiAgICAgICAgICAgIGxldCBwZGZEb2M9ZG9jUmVuZGVyLmdldFBERkRvYygpO1xuICAgICAgICAgICAgbGV0IGZpbGVOYW1lPXBkZkRvYy5nZXRGaWxlTmFtZSgpO1xuICAgICAgICAgICAgZmlsZU5hbWU9ZmlsZU5hbWU/ZmlsZU5hbWU6XCJkb3dubG9hZC5wZGZcIjtcbiAgICAgICAgICAgIHBkZkRvYy5leHBvcnRGb3JtVG9GaWxlKDIpLnRoZW4oKGJsb2IpPT57XG4gICAgICAgICAgICAgICAgRG93bmxvYWQuZG93bmxvYWQgKGJsb2IsIGZpbGVOYW1lLnJlcGxhY2UoXCIucGRmXCIsXCIueG1sXCIpLCAnYXBwbGljYXRpb24veG1sJywgZG93bmxvYWRFbnYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBudWxsO1xuICAgICIsImltcG9ydCAqIGFzIFVJRXh0ZW5zaW9uIGZyb20gJ1VJRXh0ZW5zaW9uJztcbmltcG9ydCBleHBvcnRGb3JtTG9hZGVyIGZyb20gJy4vYWRkb24uaW5mby5qc29uJztcbmltcG9ydCBFeHBvcnRUb1hNTENvbnRyb2xsZXIgZnJvbSAnLi9FeHBvcnRUb1hNTENvbnRyb2xsZXInO1xuaW1wb3J0IEV4cG9ydFRvRkRGQ29udHJvbGxlciBmcm9tICcuL0V4cG9ydFRvRkRGQ29udHJvbGxlcic7XG5pbXBvcnQgRXhwb3J0VG9YRkRGQ29udHJvbGxlciBmcm9tICcuL0V4cG9ydFRvWEZERkNvbnRyb2xsZXInO1xuaW1wb3J0IEV4cG9ydEZvcm1Db250cm9sbGVyIGZyb20gJy4vRXhwb3J0Rm9ybUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IEV4cG9ydEZvcm1Ecm9wZG93bkNvbXBvbmVudCBmcm9tICcuL0V4cG9ydEZvcm1Ecm9wZG93bkNvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgVUlFeHRlbnNpb24uVUlYQWRkb24ge1xuICAgIHN0YXRpYyBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ2V4cG9ydEZvcm0nO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRMb2FkZXIoKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRGb3JtTG9hZGVyO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IFVJRXh0ZW5zaW9uLm1vZHVsYXIubW9kdWxlKCdleHBvcnQtZm9ybS1tb2R1bGUnLCBbXSk7XG4gICAgICAgIG1vZHVsZS5yZWdpc3RlckNvbXBvbmVudChFeHBvcnRGb3JtRHJvcGRvd25Db21wb25lbnQpO1xuICAgICAgICBtb2R1bGUucmVnaXN0ZXJDb250cm9sbGVyKEV4cG9ydEZvcm1Db250cm9sbGVyKTtcbiAgICAgICAgbW9kdWxlLnJlZ2lzdGVyQ29udHJvbGxlcihFeHBvcnRUb1hNTENvbnRyb2xsZXIpO1xuICAgICAgICBtb2R1bGUucmVnaXN0ZXJDb250cm9sbGVyKEV4cG9ydFRvRkRGQ29udHJvbGxlcik7XG4gICAgICAgIG1vZHVsZS5yZWdpc3RlckNvbnRyb2xsZXIoRXhwb3J0VG9YRkRGQ29udHJvbGxlcik7XG4gICAgfVxuXG4gICAgZnJhZ21lbnRzKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhcmdldDogJ2hvbWUtdGFiLWdyb3VwLWZvcm0nLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogVUlFeHRlbnNpb24uVUlDb25zdHMuRlJBR01FTlRfQUNUSU9OLkFQUEVORCxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogYDxleHBvcnQtZm9ybS1tb2R1bGU6ZXhwb3J0LWZvcm0tZHJvcGRvd24+YFxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfVUlFeHRlbnNpb25fXzsiXSwic291cmNlUm9vdCI6IiJ9