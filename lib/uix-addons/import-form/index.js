(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("UIExtension"));
	else if(typeof define === 'function' && define.amd)
		define(["UIExtension"], factory);
	else if(typeof exports === 'object')
		exports["ImportFormUIXAddon"] = factory(require("UIExtension"));
	else
		root["ImportFormUIXAddon"] = factory(root["UIExtension"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./uix-addons/import-form/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./uix-addons/import-form/addon.info.json":
/*!************************************************!*\
  !*** ./uix-addons/import-form/addon.info.json ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


        module.exports = null;
    

/***/ }),

/***/ "./uix-addons/import-form/index.js":
/*!*****************************************!*\
  !*** ./uix-addons/import-form/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _addonInfo = __webpack_require__(/*! ./addon.info.json */ "./uix-addons/import-form/addon.info.json");

var _addonInfo2 = _interopRequireDefault(_addonInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Events = UIExtension.PDFViewCtrl.Events;

var _class = function (_UIExtension$UIXAddon) {
    _inherits(_class, _UIExtension$UIXAddon);

    function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _UIExtension$UIXAddon.apply(this, arguments));
    }

    _class.getName = function getName() {
        return 'importForm';
    };

    _class.getLoader = function getLoader() {
        return _addonInfo2.default;
    };

    _class.prototype.init = function init() {
        UIExtension.modular.module('import-form-module', []);
    };

    _class.prototype.fragments = function fragments() {
        return [{
            target: 'home-toolbar-group-list',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: '<group name="home-tab-group-form"></group>'
        }, {
            target: 'home-tab-group-form',
            action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
            template: '<file-selector @tooltip name="import-form-tool" accept=".xml,.fdf,.xfdf" icon-class="fv__icon-toolbar-import-form" ></file-selector>',
            config: {
                target: 'import-form-tool',
                tooltip: {
                    title: 'import:button-tooltip.title'
                },
                callback: function (_UIExtension$Controll) {
                    _inherits(ImportFormController, _UIExtension$Controll);

                    function ImportFormController() {
                        _classCallCheck(this, ImportFormController);

                        return _possibleConstructorReturn(this, _UIExtension$Controll.apply(this, arguments));
                    }

                    ImportFormController.prototype.postlink = function postlink() {
                        var _this3 = this;

                        this.addDestroyHook(this.getPDFUI().addViewerEventListener(Events.openFileSuccess, function (pdfDoc) {
                            var hasForm = pdfDoc.hasForm();
                            if (!hasForm) {
                                _this3.component.disable();
                            } else {
                                _this3.component.enable();
                            }
                        }));
                    };

                    ImportFormController.prototype.handle = function handle(file) {
                        var pdfUI = this.getPDFUI();
                        pdfUI.getPDFDocRender().then(function (docRender) {
                            var pdfDoc = docRender.getPDFDoc();
                            pdfDoc.importFormFromFile(file, file.name.endsWith('.xml'));
                        });
                    };

                    _createClass(ImportFormController, null, [{
                        key: 'permission',
                        get: function get() {
                            return UIExtension.PDFViewCtrl.Consts.PDFDocPermission.AnnotForm + UIExtension.PDFViewCtrl.Consts.PDFDocPermission.FillForm;
                        }
                    }]);

                    return ImportFormController;
                }(UIExtension.Controller)
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JbXBvcnRGb3JtVUlYQWRkb24vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0ltcG9ydEZvcm1VSVhBZGRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9JbXBvcnRGb3JtVUlYQWRkb24vLi91aXgtYWRkb25zL2ltcG9ydC1mb3JtL2FkZG9uLmluZm8uanNvbiIsIndlYnBhY2s6Ly9JbXBvcnRGb3JtVUlYQWRkb24vLi91aXgtYWRkb25zL2ltcG9ydC1mb3JtL2luZGV4LmpzIiwid2VicGFjazovL0ltcG9ydEZvcm1VSVhBZGRvbi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiVUlFeHRlbnNpb25cIixcImNvbW1vbmpzMlwiOlwiVUlFeHRlbnNpb25cIixcImFtZFwiOlwiVUlFeHRlbnNpb25cIixcInJvb3RcIjpcIlVJRXh0ZW5zaW9uXCJ9Il0sIm5hbWVzIjpbIlVJRXh0ZW5zaW9uIiwiRXZlbnRzIiwiUERGVmlld0N0cmwiLCJnZXROYW1lIiwiZ2V0TG9hZGVyIiwiaW1wb3J0Rm9ybUxvYWRlciIsImluaXQiLCJtb2R1bGFyIiwibW9kdWxlIiwiZnJhZ21lbnRzIiwidGFyZ2V0IiwiYWN0aW9uIiwiVUlDb25zdHMiLCJGUkFHTUVOVF9BQ1RJT04iLCJBUFBFTkQiLCJ0ZW1wbGF0ZSIsImNvbmZpZyIsInRvb2x0aXAiLCJ0aXRsZSIsImNhbGxiYWNrIiwicG9zdGxpbmsiLCJhZGREZXN0cm95SG9vayIsImdldFBERlVJIiwiYWRkVmlld2VyRXZlbnRMaXN0ZW5lciIsIm9wZW5GaWxlU3VjY2VzcyIsImhhc0Zvcm0iLCJwZGZEb2MiLCJjb21wb25lbnQiLCJkaXNhYmxlIiwiZW5hYmxlIiwiaGFuZGxlIiwiZmlsZSIsInBkZlVJIiwiZ2V0UERGRG9jUmVuZGVyIiwidGhlbiIsImRvY1JlbmRlciIsImdldFBERkRvYyIsImltcG9ydEZvcm1Gcm9tRmlsZSIsIm5hbWUiLCJlbmRzV2l0aCIsIkNvbnN0cyIsIlBERkRvY1Blcm1pc3Npb24iLCJBbm5vdEZvcm0iLCJGaWxsRm9ybSIsIkNvbnRyb2xsZXIiLCJVSVhBZGRvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOztJQUFZQSxXOztBQUNaOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUMsU0FBT0QsWUFBWUUsV0FBWixDQUF3QkQsTUFBckM7Ozs7Ozs7Ozs7O1dBR1dFLE8sc0JBQVc7QUFDZCxlQUFPLFlBQVA7QUFDSCxLOztXQUNNQyxTLHdCQUFZO0FBQ2YsZUFBT0MsbUJBQVA7QUFDSCxLOztxQkFDREMsSSxtQkFBUTtBQUNKTixvQkFBWU8sT0FBWixDQUFvQkMsTUFBcEIsQ0FBNEIsb0JBQTVCLEVBQWtELEVBQWxEO0FBQ0gsSzs7cUJBQ0RDLFMsd0JBQWE7QUFDVCxlQUFPLENBQ0g7QUFDSUMsb0JBQVEseUJBRFo7QUFFSUMsb0JBQVFYLFlBQVlZLFFBQVosQ0FBcUJDLGVBQXJCLENBQXFDQyxNQUZqRDtBQUdJQyxzQkFBVTtBQUhkLFNBREcsRUFLQTtBQUNDTCxvQkFBUSxxQkFEVDtBQUVDQyxvQkFBUVgsWUFBWVksUUFBWixDQUFxQkMsZUFBckIsQ0FBcUNDLE1BRjlDO0FBR0NDLHNCQUFVLHNJQUhYO0FBSUNDLG9CQUFRO0FBQ0pOLHdCQUFRLGtCQURKO0FBRUpPLHlCQUFTO0FBQ0xDLDJCQUFPO0FBREYsaUJBRkw7QUFLSkM7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUEsbURBS0lDLFFBTEosdUJBS2U7QUFBQTs7QUFDUCw2QkFBS0MsY0FBTCxDQUNJLEtBQUtDLFFBQUwsR0FBZ0JDLHNCQUFoQixDQUF1Q3RCLE9BQU91QixlQUE5QyxFQUErRCxrQkFBVTtBQUNyRSxnQ0FBSUMsVUFBVUMsT0FBT0QsT0FBUCxFQUFkO0FBQ0EsZ0NBQUcsQ0FBQ0EsT0FBSixFQUFZO0FBQ1IsdUNBQUtFLFNBQUwsQ0FBZUMsT0FBZjtBQUNILDZCQUZELE1BRU07QUFDRix1Q0FBS0QsU0FBTCxDQUFlRSxNQUFmO0FBQ0g7QUFDSix5QkFQRCxDQURKO0FBVUgscUJBaEJMOztBQUFBLG1EQWlCSUMsTUFqQkosbUJBaUJXQyxJQWpCWCxFQWlCaUI7QUFDVCw0QkFBTUMsUUFBUSxLQUFLVixRQUFMLEVBQWQ7QUFDQVUsOEJBQU1DLGVBQU4sR0FBd0JDLElBQXhCLENBQTZCLFVBQUNDLFNBQUQsRUFBYTtBQUN0QyxnQ0FBSVQsU0FBT1MsVUFBVUMsU0FBVixFQUFYO0FBQ0FWLG1DQUFPVyxrQkFBUCxDQUEwQk4sSUFBMUIsRUFBK0JBLEtBQUtPLElBQUwsQ0FBVUMsUUFBVixDQUFtQixNQUFuQixDQUEvQjtBQUNILHlCQUhEO0FBSUgscUJBdkJMOztBQUFBO0FBQUE7QUFBQSw0Q0FDMkI7QUFDbkIsbUNBQU92QyxZQUFZRSxXQUFaLENBQXdCc0MsTUFBeEIsQ0FBK0JDLGdCQUEvQixDQUFnREMsU0FBaEQsR0FDUDFDLFlBQVlFLFdBQVosQ0FBd0JzQyxNQUF4QixDQUErQkMsZ0JBQS9CLENBQWdERSxRQURoRDtBQUVIO0FBSkw7O0FBQUE7QUFBQSxrQkFBNEMzQyxZQUFZNEMsVUFBeEQ7QUFMSTtBQUpULFNBTEEsQ0FBUDtBQTBDSCxLOzs7RUFyRHdCNUMsWUFBWTZDLFE7Ozs7Ozs7Ozs7Ozs7QUNMekMseUQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJVSUV4dGVuc2lvblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJVSUV4dGVuc2lvblwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJJbXBvcnRGb3JtVUlYQWRkb25cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJVSUV4dGVuc2lvblwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiSW1wb3J0Rm9ybVVJWEFkZG9uXCJdID0gZmFjdG9yeShyb290W1wiVUlFeHRlbnNpb25cIl0pO1xufSkoc2VsZiwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9VSUV4dGVuc2lvbl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi91aXgtYWRkb25zL2ltcG9ydC1mb3JtL2luZGV4LmpzXCIpO1xuIiwiXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gbnVsbDtcbiAgICAiLCJpbXBvcnQgKiBhcyBVSUV4dGVuc2lvbiBmcm9tICdVSUV4dGVuc2lvbic7XG5pbXBvcnQgaW1wb3J0Rm9ybUxvYWRlciBmcm9tICcuL2FkZG9uLmluZm8uanNvbic7XG5cbmNvbnN0IEV2ZW50cz1VSUV4dGVuc2lvbi5QREZWaWV3Q3RybC5FdmVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgVUlFeHRlbnNpb24uVUlYQWRkb24ge1xuICAgIHN0YXRpYyBnZXROYW1lICgpIHtcbiAgICAgICAgcmV0dXJuICdpbXBvcnRGb3JtJztcbiAgICB9XG4gICAgc3RhdGljIGdldExvYWRlcigpIHtcbiAgICAgICAgcmV0dXJuIGltcG9ydEZvcm1Mb2FkZXI7XG4gICAgfVxuICAgIGluaXQgKCkge1xuICAgICAgICBVSUV4dGVuc2lvbi5tb2R1bGFyLm1vZHVsZSAoJ2ltcG9ydC1mb3JtLW1vZHVsZScsIFtdKTtcbiAgICB9XG4gICAgZnJhZ21lbnRzICgpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdob21lLXRvb2xiYXItZ3JvdXAtbGlzdCcsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBVSUV4dGVuc2lvbi5VSUNvbnN0cy5GUkFHTUVOVF9BQ1RJT04uQVBQRU5ELFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGdyb3VwIG5hbWU9XCJob21lLXRhYi1ncm91cC1mb3JtXCI+PC9ncm91cD4nXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnaG9tZS10YWItZ3JvdXAtZm9ybScsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBVSUV4dGVuc2lvbi5VSUNvbnN0cy5GUkFHTUVOVF9BQ1RJT04uQVBQRU5ELFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGZpbGUtc2VsZWN0b3IgQHRvb2x0aXAgbmFtZT1cImltcG9ydC1mb3JtLXRvb2xcIiBhY2NlcHQ9XCIueG1sLC5mZGYsLnhmZGZcIiBpY29uLWNsYXNzPVwiZnZfX2ljb24tdG9vbGJhci1pbXBvcnQtZm9ybVwiID48L2ZpbGUtc2VsZWN0b3I+JyxcbiAgICAgICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiAnaW1wb3J0LWZvcm0tdG9vbCcsXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnaW1wb3J0OmJ1dHRvbi10b29sdGlwLnRpdGxlJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazpjbGFzcyBJbXBvcnRGb3JtQ29udHJvbGxlciBleHRlbmRzIFVJRXh0ZW5zaW9uLkNvbnRyb2xsZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljIGdldCBwZXJtaXNzaW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFVJRXh0ZW5zaW9uLlBERlZpZXdDdHJsLkNvbnN0cy5QREZEb2NQZXJtaXNzaW9uLkFubm90Rm9ybSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVUlFeHRlbnNpb24uUERGVmlld0N0cmwuQ29uc3RzLlBERkRvY1Blcm1pc3Npb24uRmlsbEZvcm07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0bGluaygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZERlc3Ryb3lIb29rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBERlVJKCkuYWRkVmlld2VyRXZlbnRMaXN0ZW5lcihFdmVudHMub3BlbkZpbGVTdWNjZXNzLCBwZGZEb2MgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0Zvcm0gPSBwZGZEb2MuaGFzRm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWhhc0Zvcm0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50LmRpc2FibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZShmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGRmVUkgPSB0aGlzLmdldFBERlVJKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGRmVUkuZ2V0UERGRG9jUmVuZGVyKCkudGhlbigoZG9jUmVuZGVyKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGRmRG9jPWRvY1JlbmRlci5nZXRQREZEb2MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGRmRG9jLmltcG9ydEZvcm1Gcm9tRmlsZShmaWxlLGZpbGUubmFtZS5lbmRzV2l0aCgnLnhtbCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX1VJRXh0ZW5zaW9uX187Il0sInNvdXJjZVJvb3QiOiIifQ==