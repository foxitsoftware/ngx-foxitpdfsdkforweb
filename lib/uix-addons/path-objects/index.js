(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("UIExtension"));
	else if(typeof define === 'function' && define.amd)
		define(["UIExtension"], factory);
	else if(typeof exports === 'object')
		exports["EditGraphics"] = factory(require("UIExtension"));
	else
		root["EditGraphics"] = factory(root["UIExtension"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./uix-addons/path-objects/index.js");
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

/***/ "./uix-addons/path-objects/addon.info.json":
/*!*************************************************!*\
  !*** ./uix-addons/path-objects/addon.info.json ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


        module.exports = null;
    

/***/ }),

/***/ "./uix-addons/path-objects/index.js":
/*!******************************************!*\
  !*** ./uix-addons/path-objects/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _template = __webpack_require__(/*! ./template.art */ "./uix-addons/path-objects/template.art");

var _template2 = _interopRequireDefault(_template);

var _addonInfo = __webpack_require__(/*! ./addon.info.json */ "./uix-addons/path-objects/addon.info.json");

var _addonInfo2 = _interopRequireDefault(_addonInfo);

__webpack_require__(/*! ./scss/index.scss */ "./uix-addons/path-objects/scss/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var EditPathObjectsController = function (_UIExtension$Controll) {
  _inherits(EditPathObjectsController, _UIExtension$Controll);

  function EditPathObjectsController(component) {
    _classCallCheck(this, EditPathObjectsController);

    return _possibleConstructorReturn(this, _UIExtension$Controll.call(this, component));
  }

  EditPathObjectsController.prototype.switchStateHandler = function switchStateHandler(name) {
    var pdfUi = this.getPDFUI();
    pdfUi.getStateHandlerManager().then(function (stateHandleManager) {
      if (stateHandleManager.getCurrentStates().getStateName() === name) {
        stateHandleManager.switchTo(stateHandleManager.get().getStateName());
      } else {
        stateHandleManager.switchTo(name);
      }
    });
  };

  EditPathObjectsController.prototype.postlink = function postlink() {
    var _this2 = this;

    this.addDestroyHook(this.getPDFUI().addViewerEventListener('switch-state-handler', function (CurrentStateHandler, LastStateHandler) {
      if (CurrentStateHandler.getStateName() === _this2.constructor.getName()) {
        _this2.component.active();
      } else if (LastStateHandler.getStateName() === _this2.constructor.getName()) {
        _this2.component.deactive();
      }
    }));
  };

  _createClass(EditPathObjectsController, null, [{
    key: 'permission',
    get: function get() {
      return UIExtension.PDFViewCtrl.Consts.PDFDocPermission.ModifyDocument;
    }
  }]);

  return EditPathObjectsController;
}(UIExtension.Controller);

var pathType = 'line';
var components = [];

var activeComponent = function activeComponent(forceDisable) {
  return components.forEach(function (component) {
    if (!forceDisable && component.attrs.name.indexOf(pathType) != -1) {
      component.active();
    } else {
      component.deactive();
    }
  });
};

var AddPathObjectsController = function (_UIExtension$Controll2) {
  _inherits(AddPathObjectsController, _UIExtension$Controll2);

  function AddPathObjectsController(component) {
    _classCallCheck(this, AddPathObjectsController);

    var _this3 = _possibleConstructorReturn(this, _UIExtension$Controll2.call(this, component));

    if (components.length < 4) components.push(component);
    return _this3;
  }

  AddPathObjectsController.prototype.switchStateHandler = function switchStateHandler(name, type) {
    var pdfUi = this.getPDFUI();
    pathType = type;
    pdfUi.getStateHandlerManager().then(function (stateHandleManager) {
      stateHandleManager.switchTo(name);
      stateHandleManager.getCurrentStates().setPathType(type);
      activeComponent();
    });
  };

  AddPathObjectsController.prototype.postlink = function postlink() {
    var _this4 = this;

    this.addDestroyHook(this.getPDFUI().addViewerEventListener('switch-state-handler', function (CurrentStateHandler, LastStateHandler, name) {
      if (CurrentStateHandler.getStateName() === _this4.constructor.getName()) {
        activeComponent();
      } else if (LastStateHandler.getStateName() === _this4.constructor.getName()) {
        components.forEach(function (component) {
          return component.deactive();
        });
        _this4.component.parent.element.classList.remove('selected');
      }
    }));
  };

  AddPathObjectsController.prototype.handle = function handle() {
    this.component.parent.select(this.component);
    this.component.parent.element.classList.add('selected');
  };

  _createClass(AddPathObjectsController, null, [{
    key: 'permission',
    get: function get() {
      return UIExtension.PDFViewCtrl.Consts.PDFDocPermission.ModifyDocument;
    }
  }]);

  return AddPathObjectsController;
}(UIExtension.Controller);

var EditGraphics = function (_UIExtension$UIXAddon) {
  _inherits(EditGraphics, _UIExtension$UIXAddon);

  function EditGraphics() {
    _classCallCheck(this, EditGraphics);

    return _possibleConstructorReturn(this, _UIExtension$UIXAddon.apply(this, arguments));
  }

  EditGraphics.getName = function getName() {
    return 'edit-pageobjects';
  };

  EditGraphics.getLoader = function getLoader() {
    return _addonInfo2.default;
  };

  EditGraphics.prototype.init = function init() {
    UIExtension.modular.module('edit-pageobjects', []);
  };

  EditGraphics.prototype.beforeMounted = function beforeMounted(root) {
    var editTab = root.getComponentByName('edit-tab');
    editTab && editTab.show();
  };

  EditGraphics.prototype.fragments = function fragments() {
    return [
    /*{
      target: 'edit-toolbar-group-list',
      action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
      template: `<edit-pageobjects:group name="edit-pageobjects-group"></edit-pageobjects:group>`,
    },*/
    {
      target: 'image-tool',
      action: UIExtension.UIConsts.FRAGMENT_ACTION.BEFORE,
      template: '<xbutton name="edit-all-objects" icon-class="fv__icon-edit-edit-all" @tooltip>edit-pageobjects:buttons.edit-all-objects</xbutton>',
      config: [{
        target: 'edit-all-objects',
        tooltip: {
          title: 'edit-pageobjects:buttons.edit-all-objects'
        },
        callback: function (_EditPathObjectsContr) {
          _inherits(callback, _EditPathObjectsContr);

          function callback() {
            _classCallCheck(this, callback);

            return _possibleConstructorReturn(this, _EditPathObjectsContr.apply(this, arguments));
          }

          callback.getName = function getName() {
            return 'edit-all';
          };

          callback.prototype.handle = function handle() {
            this.switchStateHandler('edit-all');
          };

          return callback;
        }(EditPathObjectsController)
      }]
    }, {
      target: 'edit-tab-group-mode',
      action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
      template: (0, _template2.default)(),
      config: [{
        target: 'create-shapeObject-dropdown',
        tooltip: {
          title: 'edit-pageobjects:dropdown-tooltip'
        },
        callback: function (_UIExtension$Controll3) {
          _inherits(callback, _UIExtension$Controll3);

          function callback() {
            _classCallCheck(this, callback);

            return _possibleConstructorReturn(this, _UIExtension$Controll3.apply(this, arguments));
          }

          callback.prototype.postlink = function postlink() {
            this.component.select(this.component.childAt(0));
          };

          _createClass(callback, null, [{
            key: 'permission',
            get: function get() {
              return UIExtension.PDFViewCtrl.Consts.PDFDocPermission.ModifyDocument;
            }
          }]);

          return callback;
        }(UIExtension.Controller)
      }, {
        target: 'add-pathObject-line',
        tooltip: {
          title: 'toolbar.tooltip.line.title'
        },
        callback: function (_AddPathObjectsContro) {
          _inherits(callback, _AddPathObjectsContro);

          function callback() {
            _classCallCheck(this, callback);

            return _possibleConstructorReturn(this, _AddPathObjectsContro.apply(this, arguments));
          }

          callback.getName = function getName() {
            return 'add-path-object';
          };

          callback.prototype.handle = function handle() {
            _AddPathObjectsContro.prototype.handle.call(this);
            this.switchStateHandler('add-path-object', 'line');
          };

          return callback;
        }(AddPathObjectsController)
      }, {
        target: 'add-pathObject-square',
        tooltip: {
          title: 'toolbar.tooltip.square.title'
        },
        callback: function (_AddPathObjectsContro2) {
          _inherits(callback, _AddPathObjectsContro2);

          function callback() {
            _classCallCheck(this, callback);

            return _possibleConstructorReturn(this, _AddPathObjectsContro2.apply(this, arguments));
          }

          callback.getName = function getName() {
            return 'add-path-object';
          };

          callback.prototype.handle = function handle() {
            _AddPathObjectsContro2.prototype.handle.call(this);
            this.switchStateHandler('add-path-object', 'square');
          };

          return callback;
        }(AddPathObjectsController)
      }, {
        target: 'add-pathObject-circle',
        tooltip: {
          title: 'toolbar.tooltip.circle.title'
        },
        callback: function (_AddPathObjectsContro3) {
          _inherits(callback, _AddPathObjectsContro3);

          function callback() {
            _classCallCheck(this, callback);

            return _possibleConstructorReturn(this, _AddPathObjectsContro3.apply(this, arguments));
          }

          callback.getName = function getName() {
            return 'add-path-object';
          };

          callback.prototype.handle = function handle() {
            _AddPathObjectsContro3.prototype.handle.call(this);
            this.switchStateHandler('add-path-object', 'circle');
          };

          return callback;
        }(AddPathObjectsController)
      }, {
        target: 'add-pathObject-roundRect',
        tooltip: {
          title: 'toolbar.tooltip.roundRect.title'
        },
        callback: function (_AddPathObjectsContro4) {
          _inherits(callback, _AddPathObjectsContro4);

          function callback() {
            _classCallCheck(this, callback);

            return _possibleConstructorReturn(this, _AddPathObjectsContro4.apply(this, arguments));
          }

          callback.getName = function getName() {
            return 'add-path-object';
          };

          callback.prototype.handle = function handle() {
            _AddPathObjectsContro4.prototype.handle.call(this);
            this.switchStateHandler('add-path-object', 'roundRect');
          };

          return callback;
        }(AddPathObjectsController)
      }]
    }];
  };

  return EditGraphics;
}(UIExtension.UIXAddon);

exports.default = EditGraphics;

/***/ }),

/***/ "./uix-addons/path-objects/scss/index.scss":
/*!*************************************************!*\
  !*** ./uix-addons/path-objects/scss/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./uix-addons/path-objects/template.art":
/*!**********************************************!*\
  !*** ./uix-addons/path-objects/template.art ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(/*! ../../node_modules/art-template/lib/runtime.js */ "./node_modules/art-template/lib/runtime.js");
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '';
    $$out += '<dropdown @tooltip name="create-shapeObject-dropdown" class="fv__ui-dropdown-direction-row fv__ui-dropdown-hide-text">\n    <dropdown-button @tooltip name="add-pathObject-line" icon-class="fv__icon-toolbar-path-line">toolbar.buttons.line</dropdown-button>\n    <dropdown-button @tooltip name="add-pathObject-square" icon-class="fv__icon-toolbar-path-square">toolbar.buttons.square</dropdown-button>\n    <dropdown-button @tooltip name="add-pathObject-circle" icon-class="fv__icon-toolbar-path-circle">toolbar.buttons.circle</dropdown-button>\n    <dropdown-button @tooltip name="add-pathObject-roundRect" icon-class="fv__icon-toolbar-path-round-rectangle">toolbar.buttons.roundRect</dropdown-button>\n</dropdown>';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FZGl0R3JhcGhpY3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0VkaXRHcmFwaGljcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FZGl0R3JhcGhpY3MvLi9ub2RlX21vZHVsZXMvYXJ0LXRlbXBsYXRlL2xpYi9jb21waWxlL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vRWRpdEdyYXBoaWNzLy4vbm9kZV9tb2R1bGVzL2FydC10ZW1wbGF0ZS9saWIvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9FZGl0R3JhcGhpY3MvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0VkaXRHcmFwaGljcy8uL3VpeC1hZGRvbnMvcGF0aC1vYmplY3RzL2FkZG9uLmluZm8uanNvbiIsIndlYnBhY2s6Ly9FZGl0R3JhcGhpY3MvLi91aXgtYWRkb25zL3BhdGgtb2JqZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FZGl0R3JhcGhpY3MvLi91aXgtYWRkb25zL3BhdGgtb2JqZWN0cy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vRWRpdEdyYXBoaWNzLy4vdWl4LWFkZG9ucy9wYXRoLW9iamVjdHMvdGVtcGxhdGUuYXJ0Iiwid2VicGFjazovL0VkaXRHcmFwaGljcy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiVUlFeHRlbnNpb25cIixcImNvbW1vbmpzMlwiOlwiVUlFeHRlbnNpb25cIixcImFtZFwiOlwiVUlFeHRlbnNpb25cIixcInJvb3RcIjpcIlVJRXh0ZW5zaW9uXCJ9Il0sIm5hbWVzIjpbIlVJRXh0ZW5zaW9uIiwiRWRpdFBhdGhPYmplY3RzQ29udHJvbGxlciIsImNvbXBvbmVudCIsInN3aXRjaFN0YXRlSGFuZGxlciIsIm5hbWUiLCJwZGZVaSIsImdldFBERlVJIiwiZ2V0U3RhdGVIYW5kbGVyTWFuYWdlciIsInRoZW4iLCJzdGF0ZUhhbmRsZU1hbmFnZXIiLCJnZXRDdXJyZW50U3RhdGVzIiwiZ2V0U3RhdGVOYW1lIiwic3dpdGNoVG8iLCJnZXQiLCJwb3N0bGluayIsImFkZERlc3Ryb3lIb29rIiwiYWRkVmlld2VyRXZlbnRMaXN0ZW5lciIsIkN1cnJlbnRTdGF0ZUhhbmRsZXIiLCJMYXN0U3RhdGVIYW5kbGVyIiwiY29uc3RydWN0b3IiLCJnZXROYW1lIiwiYWN0aXZlIiwiZGVhY3RpdmUiLCJQREZWaWV3Q3RybCIsIkNvbnN0cyIsIlBERkRvY1Blcm1pc3Npb24iLCJNb2RpZnlEb2N1bWVudCIsIkNvbnRyb2xsZXIiLCJwYXRoVHlwZSIsImNvbXBvbmVudHMiLCJhY3RpdmVDb21wb25lbnQiLCJmb3JFYWNoIiwiZm9yY2VEaXNhYmxlIiwiYXR0cnMiLCJpbmRleE9mIiwiQWRkUGF0aE9iamVjdHNDb250cm9sbGVyIiwibGVuZ3RoIiwicHVzaCIsInR5cGUiLCJzZXRQYXRoVHlwZSIsInBhcmVudCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJoYW5kbGUiLCJzZWxlY3QiLCJhZGQiLCJFZGl0R3JhcGhpY3MiLCJnZXRMb2FkZXIiLCJ0cG1Mb2FkZXIiLCJpbml0IiwibW9kdWxhciIsIm1vZHVsZSIsImJlZm9yZU1vdW50ZWQiLCJyb290IiwiZWRpdFRhYiIsImdldENvbXBvbmVudEJ5TmFtZSIsInNob3ciLCJmcmFnbWVudHMiLCJ0YXJnZXQiLCJhY3Rpb24iLCJVSUNvbnN0cyIsIkZSQUdNRU5UX0FDVElPTiIsIkJFRk9SRSIsInRlbXBsYXRlIiwiY29uZmlnIiwidG9vbHRpcCIsInRpdGxlIiwiY2FsbGJhY2siLCJBUFBFTkQiLCJjaGlsZEF0IiwiVUlYQWRkb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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QUF4QjtBQUxGLE9BM0NNLEVBMEROO0FBQ0V3QixnQkFBUSwwQkFEVjtBQUVFTyxpQkFBUztBQUNQQyxpQkFBTztBQURBLFNBRlg7QUFLRUM7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUEsbUJBQ1NoRCxPQURULHNCQUNrQjtBQUNkLG1CQUFPLGlCQUFQO0FBQ0QsV0FISDs7QUFBQSw2QkFJRXdCLE1BSkYscUJBSVk7QUFDUiw2Q0FBTUEsTUFBTjtBQUNBLGlCQUFLekMsa0JBQUwsQ0FBeUIsaUJBQXpCLEVBQTRDLFdBQTVDO0FBQ0QsV0FQSDs7QUFBQTtBQUFBLFVBQXdCZ0Msd0JBQXhCO0FBTEYsT0ExRE07QUFKVixLQTFCSyxDQUFQO0FBMEdELEc7OztFQXpIdUNuQyxZQUFZdUUsUTs7a0JBQWpDeEIsWTs7Ozs7Ozs7Ozs7QUNwRnJCLHlDOzs7Ozs7Ozs7Ozs7Ozs7YUNBQzs7Ozs7Ozs7Ozs7Ozs7QUNBRCx5RCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlVJRXh0ZW5zaW9uXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlVJRXh0ZW5zaW9uXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkVkaXRHcmFwaGljc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcIlVJRXh0ZW5zaW9uXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJFZGl0R3JhcGhpY3NcIl0gPSBmYWN0b3J5KHJvb3RbXCJVSUV4dGVuc2lvblwiXSk7XG59KShzZWxmLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX1VJRXh0ZW5zaW9uX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3VpeC1hZGRvbnMvcGF0aC1vYmplY3RzL2luZGV4LmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiEgYXJ0LXRlbXBsYXRlQHJ1bnRpbWUgfCBodHRwczovL2dpdGh1Yi5jb20vYXVpL2FydC10ZW1wbGF0ZSAqL1xuXG52YXIgZ2xvYmFsVGhpcyA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDoge307XG5cbnZhciBydW50aW1lID0gT2JqZWN0LmNyZWF0ZShnbG9iYWxUaGlzKTtcbnZhciBFU0NBUEVfUkVHID0gL1tcIiYnPD5dLztcblxuLyoqXG4gKiDnvJbnoIHmqKHmnb/ovpPlh7rnmoTlhoXlrrlcbiAqIEBwYXJhbSAge2FueX0gICAgICAgIGNvbnRlbnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucnVudGltZS4kZXNjYXBlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICByZXR1cm4geG1sRXNjYXBlKHRvU3RyaW5nKGNvbnRlbnQpKTtcbn07XG5cbi8qKlxuICog6L+t5Luj5Zmo77yM5pSv5oyB5pWw57uE5LiO5a+56LGhXG4gKiBAcGFyYW0ge2FycmF5fE9iamVjdH0gZGF0YVxuICogQHBhcmFtIHtmdW5jdGlvbn0gICAgIGNhbGxiYWNrXG4gKi9cbnJ1bnRpbWUuJGVhY2ggPSBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGF0YS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YVtpXSwgaSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBfaSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhW19pXSwgX2kpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8g5bCG55uu5qCH6L2s5oiQ5a2X56ymXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFsdWUgPSB0b1N0cmluZyh2YWx1ZS5jYWxsKHZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuLy8g57yW56CBIEhUTUwg5YaF5a65XG5mdW5jdGlvbiB4bWxFc2NhcGUoY29udGVudCkge1xuICAgIHZhciBodG1sID0gJycgKyBjb250ZW50O1xuICAgIHZhciByZWdleFJlc3VsdCA9IEVTQ0FQRV9SRUcuZXhlYyhodG1sKTtcbiAgICBpZiAoIXJlZ2V4UmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSA9IHZvaWQgMCxcbiAgICAgICAgbGFzdEluZGV4ID0gdm9pZCAwLFxuICAgICAgICBjaGFyID0gdm9pZCAwO1xuICAgIGZvciAoaSA9IHJlZ2V4UmVzdWx0LmluZGV4LCBsYXN0SW5kZXggPSAwOyBpIDwgaHRtbC5sZW5ndGg7IGkrKykge1xuICAgICAgICBzd2l0Y2ggKGh0bWwuY2hhckNvZGVBdChpKSkge1xuICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjMzQ7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzM4Oyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIGNoYXIgPSAnJiMzOTsnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2MDpcbiAgICAgICAgICAgICAgICBjaGFyID0gJyYjNjA7JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjI6XG4gICAgICAgICAgICAgICAgY2hhciA9ICcmIzYyOyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhc3RJbmRleCAhPT0gaSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0SW5kZXggPSBpICsgMTtcbiAgICAgICAgcmVzdWx0ICs9IGNoYXI7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBydW50aW1lOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbXBpbGUvcnVudGltZScpOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBudWxsO1xuICAgICIsImltcG9ydCAqIGFzIFVJRXh0ZW5zaW9uIGZyb20gJ1VJRXh0ZW5zaW9uJztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlLmFydCc7XG5pbXBvcnQgdHBtTG9hZGVyIGZyb20gJy4vYWRkb24uaW5mby5qc29uJztcbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnO1xuXG5cbmNsYXNzIEVkaXRQYXRoT2JqZWN0c0NvbnRyb2xsZXIgZXh0ZW5kcyBVSUV4dGVuc2lvbi5Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbXBvbmVudCkge1xuICAgIHN1cGVyIChjb21wb25lbnQpO1xuICB9XG4gIHN0YXRpYyBnZXQgcGVybWlzc2lvbigpe1xuICAgIHJldHVybiBVSUV4dGVuc2lvbi5QREZWaWV3Q3RybC5Db25zdHMuUERGRG9jUGVybWlzc2lvbi5Nb2RpZnlEb2N1bWVudDtcbiAgfVxuICBzd2l0Y2hTdGF0ZUhhbmRsZXIgKG5hbWUpIHtcbiAgICBsZXQgcGRmVWkgPSB0aGlzLmdldFBERlVJICgpO1xuICAgIHBkZlVpLmdldFN0YXRlSGFuZGxlck1hbmFnZXIgKCkudGhlbiAoc3RhdGVIYW5kbGVNYW5hZ2VyID0+IHtcbiAgICAgICAgaWYoc3RhdGVIYW5kbGVNYW5hZ2VyLmdldEN1cnJlbnRTdGF0ZXMoKS5nZXRTdGF0ZU5hbWUoKSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgc3RhdGVIYW5kbGVNYW5hZ2VyLnN3aXRjaFRvKHN0YXRlSGFuZGxlTWFuYWdlci5nZXQoKS5nZXRTdGF0ZU5hbWUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZUhhbmRsZU1hbmFnZXIuc3dpdGNoVG8gKG5hbWUpO1xuICAgICAgICB9XG5cbiAgICB9KTtcbiAgfVxuICBwb3N0bGluaygpe1xuICAgIHRoaXMuYWRkRGVzdHJveUhvb2soXG4gICAgICB0aGlzLmdldFBERlVJICgpLmFkZFZpZXdlckV2ZW50TGlzdGVuZXIoJ3N3aXRjaC1zdGF0ZS1oYW5kbGVyJywgKEN1cnJlbnRTdGF0ZUhhbmRsZXIsIExhc3RTdGF0ZUhhbmRsZXIpID0+IHtcbiAgICAgICAgICBpZihDdXJyZW50U3RhdGVIYW5kbGVyLmdldFN0YXRlTmFtZSgpID09PSB0aGlzLmNvbnN0cnVjdG9yLmdldE5hbWUoKSkge1xuICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5hY3RpdmUoKTtcbiAgICAgICAgICB9IGVsc2UgaWYoTGFzdFN0YXRlSGFuZGxlci5nZXRTdGF0ZU5hbWUoKSA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5nZXROYW1lKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuZGVhY3RpdmUoKTtcbiAgICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cblxubGV0IHBhdGhUeXBlID0gJ2xpbmUnO1xubGV0IGNvbXBvbmVudHM9W107XG5cbmNvbnN0IGFjdGl2ZUNvbXBvbmVudCA9IGZvcmNlRGlzYWJsZT0+Y29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudD0+e1xuICBpZighZm9yY2VEaXNhYmxlJiZjb21wb25lbnQuYXR0cnMubmFtZS5pbmRleE9mKHBhdGhUeXBlKSE9LTEpe1xuICAgIGNvbXBvbmVudC5hY3RpdmUoKVxuICB9ZWxzZXtcbiAgICBjb21wb25lbnQuZGVhY3RpdmUoKVxuICB9XG59KVxuXG5jbGFzcyBBZGRQYXRoT2JqZWN0c0NvbnRyb2xsZXIgZXh0ZW5kcyBVSUV4dGVuc2lvbi5Db250cm9sbGVye1xuICBjb25zdHJ1Y3Rvcihjb21wb25lbnQpe1xuICAgIHN1cGVyKGNvbXBvbmVudClcbiAgICBpZihjb21wb25lbnRzLmxlbmd0aDw0KVxuICAgICAgY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcbiAgfVxuICBzdGF0aWMgZ2V0IHBlcm1pc3Npb24oKXtcbiAgICByZXR1cm4gVUlFeHRlbnNpb24uUERGVmlld0N0cmwuQ29uc3RzLlBERkRvY1Blcm1pc3Npb24uTW9kaWZ5RG9jdW1lbnQ7XG4gIH1cbiAgc3dpdGNoU3RhdGVIYW5kbGVyIChuYW1lLHR5cGUpIHtcbiAgICBsZXQgcGRmVWkgPSB0aGlzLmdldFBERlVJICgpO1xuICAgIHBhdGhUeXBlID0gdHlwZTtcbiAgICBwZGZVaS5nZXRTdGF0ZUhhbmRsZXJNYW5hZ2VyICgpLnRoZW4gKHN0YXRlSGFuZGxlTWFuYWdlciA9PiB7XG4gICAgICAgIHN0YXRlSGFuZGxlTWFuYWdlci5zd2l0Y2hUbyAobmFtZSk7XG4gICAgICAgIHN0YXRlSGFuZGxlTWFuYWdlci5nZXRDdXJyZW50U3RhdGVzKCkuc2V0UGF0aFR5cGUodHlwZSk7XG4gICAgICAgIGFjdGl2ZUNvbXBvbmVudCgpO1xuICAgIH0pO1xuICB9XG4gIHBvc3RsaW5rKCl7XG4gICAgdGhpcy5hZGREZXN0cm95SG9vayhcbiAgICAgIHRoaXMuZ2V0UERGVUkgKCkuYWRkVmlld2VyRXZlbnRMaXN0ZW5lcignc3dpdGNoLXN0YXRlLWhhbmRsZXInLCAoQ3VycmVudFN0YXRlSGFuZGxlciwgTGFzdFN0YXRlSGFuZGxlcixuYW1lKSA9PiB7XG4gICAgICAgIGlmKEN1cnJlbnRTdGF0ZUhhbmRsZXIuZ2V0U3RhdGVOYW1lKCkgPT09IHRoaXMuY29uc3RydWN0b3IuZ2V0TmFtZSgpKSB7XG4gICAgICAgICAgYWN0aXZlQ29tcG9uZW50KCk7XG4gICAgICAgIH0gZWxzZSBpZihMYXN0U3RhdGVIYW5kbGVyLmdldFN0YXRlTmFtZSgpID09PSB0aGlzLmNvbnN0cnVjdG9yLmdldE5hbWUoKSkge1xuICAgICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQ9PmNvbXBvbmVudC5kZWFjdGl2ZSgpKTtcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudC5wYXJlbnQuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbiAgaGFuZGxlKCl7XG4gICAgICB0aGlzLmNvbXBvbmVudC5wYXJlbnQuc2VsZWN0KHRoaXMuY29tcG9uZW50KTtcbiAgICAgIHRoaXMuY29tcG9uZW50LnBhcmVudC5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdEdyYXBoaWNzIGV4dGVuZHMgVUlFeHRlbnNpb24uVUlYQWRkb24ge1xuICBzdGF0aWMgZ2V0TmFtZSAoKSB7XG4gICAgcmV0dXJuICdlZGl0LXBhZ2VvYmplY3RzJztcbiAgfVxuICBzdGF0aWMgZ2V0TG9hZGVyKCkge1xuICAgIHJldHVybiB0cG1Mb2FkZXI7XG4gIH1cbiAgaW5pdCAoKSB7XG4gICAgVUlFeHRlbnNpb24ubW9kdWxhci5tb2R1bGUgKCdlZGl0LXBhZ2VvYmplY3RzJywgW10pO1xuICB9XG4gIGJlZm9yZU1vdW50ZWQocm9vdCkge1xuICAgIGNvbnN0IGVkaXRUYWIgPSByb290LmdldENvbXBvbmVudEJ5TmFtZSgnZWRpdC10YWInKTtcbiAgICBlZGl0VGFiICYmIGVkaXRUYWIuc2hvdygpO1xuICB9XG4gIGZyYWdtZW50cyAoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC8qe1xuICAgICAgICB0YXJnZXQ6ICdlZGl0LXRvb2xiYXItZ3JvdXAtbGlzdCcsXG4gICAgICAgIGFjdGlvbjogVUlFeHRlbnNpb24uVUlDb25zdHMuRlJBR01FTlRfQUNUSU9OLkFQUEVORCxcbiAgICAgICAgdGVtcGxhdGU6IGA8ZWRpdC1wYWdlb2JqZWN0czpncm91cCBuYW1lPVwiZWRpdC1wYWdlb2JqZWN0cy1ncm91cFwiPjwvZWRpdC1wYWdlb2JqZWN0czpncm91cD5gLFxuICAgICAgfSwqL1xuICAgICAge1xuICAgICAgICB0YXJnZXQ6ICdpbWFnZS10b29sJyxcbiAgICAgICAgYWN0aW9uOiBVSUV4dGVuc2lvbi5VSUNvbnN0cy5GUkFHTUVOVF9BQ1RJT04uQkVGT1JFLFxuICAgICAgICB0ZW1wbGF0ZTogYDx4YnV0dG9uIG5hbWU9XCJlZGl0LWFsbC1vYmplY3RzXCIgaWNvbi1jbGFzcz1cImZ2X19pY29uLWVkaXQtZWRpdC1hbGxcIiBAdG9vbHRpcD5lZGl0LXBhZ2VvYmplY3RzOmJ1dHRvbnMuZWRpdC1hbGwtb2JqZWN0czwveGJ1dHRvbj5gLFxuICAgICAgICBjb25maWc6IFt7XG4gICAgICAgICAgICB0YXJnZXQ6ICdlZGl0LWFsbC1vYmplY3RzJyxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ2VkaXQtcGFnZW9iamVjdHM6YnV0dG9ucy5lZGl0LWFsbC1vYmplY3RzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjbGFzcyBleHRlbmRzIEVkaXRQYXRoT2JqZWN0c0NvbnRyb2xsZXJ7XG4gICAgICAgICAgICAgIHN0YXRpYyBnZXROYW1lKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdlZGl0LWFsbCc7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBoYW5kbGUoKXtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoU3RhdGVIYW5kbGVyICgnZWRpdC1hbGwnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGFyZ2V0OiAnZWRpdC10YWItZ3JvdXAtbW9kZScsXG4gICAgICAgIGFjdGlvbjogVUlFeHRlbnNpb24uVUlDb25zdHMuRlJBR01FTlRfQUNUSU9OLkFQUEVORCxcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlICgpLFxuICAgICAgICBjb25maWc6IFt7XG4gICAgICAgICAgICB0YXJnZXQ6ICdjcmVhdGUtc2hhcGVPYmplY3QtZHJvcGRvd24nLFxuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnZWRpdC1wYWdlb2JqZWN0czpkcm9wZG93bi10b29sdGlwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjbGFzcyBleHRlbmRzIFVJRXh0ZW5zaW9uLkNvbnRyb2xsZXIge1xuICAgICAgICAgICAgICBzdGF0aWMgZ2V0IHBlcm1pc3Npb24oKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gVUlFeHRlbnNpb24uUERGVmlld0N0cmwuQ29uc3RzLlBERkRvY1Blcm1pc3Npb24uTW9kaWZ5RG9jdW1lbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3N0bGluaygpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuc2VsZWN0KHRoaXMuY29tcG9uZW50LmNoaWxkQXQoMCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSx7XG4gICAgICAgICAgICB0YXJnZXQ6ICdhZGQtcGF0aE9iamVjdC1saW5lJyxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICd0b29sYmFyLnRvb2x0aXAubGluZS50aXRsZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGNsYXNzIGV4dGVuZHMgQWRkUGF0aE9iamVjdHNDb250cm9sbGVyIHtcbiAgICAgICAgICAgICAgc3RhdGljIGdldE5hbWUoKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2FkZC1wYXRoLW9iamVjdCc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaGFuZGxlICgpIHtcbiAgICAgICAgICAgICAgICBzdXBlci5oYW5kbGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFN0YXRlSGFuZGxlciAoJ2FkZC1wYXRoLW9iamVjdCcsICdsaW5lJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXQ6ICdhZGQtcGF0aE9iamVjdC1zcXVhcmUnLFxuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICB0aXRsZTogJ3Rvb2xiYXIudG9vbHRpcC5zcXVhcmUudGl0bGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjbGFzcyBleHRlbmRzIEFkZFBhdGhPYmplY3RzQ29udHJvbGxlciB7XG4gICAgICAgICAgICAgIHN0YXRpYyBnZXROYW1lKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdhZGQtcGF0aC1vYmplY3QnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGhhbmRsZSAoKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIuaGFuZGxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hTdGF0ZUhhbmRsZXIgKCdhZGQtcGF0aC1vYmplY3QnLCAnc3F1YXJlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXQ6ICdhZGQtcGF0aE9iamVjdC1jaXJjbGUnLFxuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICB0aXRsZTogJ3Rvb2xiYXIudG9vbHRpcC5jaXJjbGUudGl0bGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjbGFzcyBleHRlbmRzIEFkZFBhdGhPYmplY3RzQ29udHJvbGxlciB7XG4gICAgICAgICAgICAgIHN0YXRpYyBnZXROYW1lKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdhZGQtcGF0aC1vYmplY3QnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGhhbmRsZSAoKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIuaGFuZGxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hTdGF0ZUhhbmRsZXIgKCdhZGQtcGF0aC1vYmplY3QnLCAnY2lyY2xlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0YXJnZXQ6ICdhZGQtcGF0aE9iamVjdC1yb3VuZFJlY3QnLFxuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICB0aXRsZTogJ3Rvb2xiYXIudG9vbHRpcC5yb3VuZFJlY3QudGl0bGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjbGFzcyBleHRlbmRzIEFkZFBhdGhPYmplY3RzQ29udHJvbGxlciB7XG4gICAgICAgICAgICAgIHN0YXRpYyBnZXROYW1lKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdhZGQtcGF0aC1vYmplY3QnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGhhbmRsZSAoKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIuaGFuZGxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hTdGF0ZUhhbmRsZXIgKCdhZGQtcGF0aC1vYmplY3QnLCAncm91bmRSZWN0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH1cbiAgICBdO1xuICB9XG59XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIjxkcm9wZG93biBAdG9vbHRpcCBuYW1lPVwiY3JlYXRlLXNoYXBlT2JqZWN0LWRyb3Bkb3duXCIgY2xhc3M9XCJmdl9fdWktZHJvcGRvd24tZGlyZWN0aW9uLXJvdyBmdl9fdWktZHJvcGRvd24taGlkZS10ZXh0XCI+XG4gICAgPGRyb3Bkb3duLWJ1dHRvbiBAdG9vbHRpcCBuYW1lPVwiYWRkLXBhdGhPYmplY3QtbGluZVwiIGljb24tY2xhc3M9XCJmdl9faWNvbi10b29sYmFyLXBhdGgtbGluZVwiPnRvb2xiYXIuYnV0dG9ucy5saW5lPC9kcm9wZG93bi1idXR0b24+XG4gICAgPGRyb3Bkb3duLWJ1dHRvbiBAdG9vbHRpcCBuYW1lPVwiYWRkLXBhdGhPYmplY3Qtc3F1YXJlXCIgaWNvbi1jbGFzcz1cImZ2X19pY29uLXRvb2xiYXItcGF0aC1zcXVhcmVcIj50b29sYmFyLmJ1dHRvbnMuc3F1YXJlPC9kcm9wZG93bi1idXR0b24+XG4gICAgPGRyb3Bkb3duLWJ1dHRvbiBAdG9vbHRpcCBuYW1lPVwiYWRkLXBhdGhPYmplY3QtY2lyY2xlXCIgaWNvbi1jbGFzcz1cImZ2X19pY29uLXRvb2xiYXItcGF0aC1jaXJjbGVcIj50b29sYmFyLmJ1dHRvbnMuY2lyY2xlPC9kcm9wZG93bi1idXR0b24+XG4gICAgPGRyb3Bkb3duLWJ1dHRvbiBAdG9vbHRpcCBuYW1lPVwiYWRkLXBhdGhPYmplY3Qtcm91bmRSZWN0XCIgaWNvbi1jbGFzcz1cImZ2X19pY29uLXRvb2xiYXItcGF0aC1yb3VuZC1yZWN0YW5nbGVcIj50b29sYmFyLmJ1dHRvbnMucm91bmRSZWN0PC9kcm9wZG93bi1idXR0b24+XG48L2Ryb3Bkb3duPiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9VSUV4dGVuc2lvbl9fOyJdLCJzb3VyY2VSb290IjoiIn0=