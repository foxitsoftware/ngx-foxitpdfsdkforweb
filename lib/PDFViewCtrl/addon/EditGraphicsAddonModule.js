(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("PDFViewCtrl"), require("hammerjs"));
	else if(typeof define === 'function' && define.amd)
		define(["PDFViewCtrl", "hammerjs"], factory);
	else if(typeof exports === 'object')
		exports["PDFViewCtrl_EditGraphicsAddonModule"] = factory(require("PDFViewCtrl"), require("hammerjs"));
	else
		root["PDFViewCtrl_EditGraphicsAddonModule"] = factory(root["PDFViewCtrl"], root["Hammer"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_PDFViewCtrl__, __WEBPACK_EXTERNAL_MODULE_hammerjs__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pdf-viewer/addon/graphics/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pdf-viewer/addon/graphics/AddGraphicsStateHandler.js":
/*!******************************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/AddGraphicsStateHandler.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _PDFViewCtrl = __webpack_require__(/*! PDFViewCtrl */ "PDFViewCtrl");

var PDFViewCtrl = _interopRequireWildcard(_PDFViewCtrl);

var _hammerjs = __webpack_require__(/*! hammerjs */ "hammerjs");

var _hammerjs2 = _interopRequireDefault(_hammerjs);

var _pathPoints = __webpack_require__(/*! ./pathPoints */ "./src/pdf-viewer/addon/graphics/pathPoints.js");

var _pathPoints2 = _interopRequireDefault(_pathPoints);

var _pathPreview = __webpack_require__(/*! ./pathPreview */ "./src/pdf-viewer/addon/graphics/pathPreview.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by linc on 2019/4/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var _addon = null;

var _type = 0;
var IStateHandler = PDFViewCtrl.IStateHandler;
var _canAdd = false;

var offHook = [];

var addDestroyHook = function addDestroyHook(selector, type, handler) {
  selector.on(type, handler);
  offHook.push([selector, type, handler]);
};

var destroyHook = function destroyHook() {
  for (var index = 0; index < offHook.length; index++) {
    var ele = offHook[index];
    ele[0].off(ele[1], ele[2]);
  }
};

var AddGraphicsStateHandler = function (_IStateHandler) {
  _inherits(AddGraphicsStateHandler, _IStateHandler);

  function AddGraphicsStateHandler(pdfViewer) {
    _classCallCheck(this, AddGraphicsStateHandler);

    return _possibleConstructorReturn(this, _IStateHandler.call(this, pdfViewer));
  }

  AddGraphicsStateHandler.setAddon = function setAddon(addon) {
    _addon = addon;
  };

  AddGraphicsStateHandler.getStateName = function getStateName() {
    return 'add-path-object';
  };

  AddGraphicsStateHandler.setPathType = function setPathType() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    _type = type;
  };

  AddGraphicsStateHandler.prototype.pageHandler = function pageHandler(pageRender) {
    var _this2 = this;

    this.pageRender = pageRender;

    var $handler = pageRender.$handler;
    $handler.addClass('fv__create-callout-state-handler ' + this.cursorStyle);
    this.shapeDom = (0, _pathPreview.getShapeDom)($handler);

    var eHandler = $handler[0];
    var hammer = this.hammer = new _hammerjs2.default.Manager(eHandler, {
      recognizers: [[_hammerjs2.default.Pan, { direction: _hammerjs2.default.DIRECTION_ALL }]]
    });

    var startPoint = void 0;
    var endPoint = void 0;

    var mousedown = function mousedown(e) {
      _canAdd = e.target.className.indexOf('fv__pdf-page-handler-container') != -1;
    };
    addDestroyHook($handler, 'mousedown', mousedown);
    addDestroyHook($handler, 'touchstart', mousedown);

    hammer.on('panstart', function (e) {
      if (!_canAdd) {
        return;
      }
      startPoint = getDevicePagePoint(eHandler, e);
    }).on('panend', function (e) {
      if (!startPoint) {
        return;
      }
      endPoint = {
        x: startPoint.x + e.deltaX,
        y: startPoint.y + e.deltaY
      };

      var pdfStartPoint = _this2.pageRender.page.reverseDevicePoint([startPoint.x, startPoint.y], _this2.pageRender.getScale());
      var pdfEndPoint = _this2.pageRender.page.reverseDevicePoint([endPoint.x, endPoint.y], _this2.pageRender.getScale());

      var xyPointStart = {
        x: pdfStartPoint[0],
        y: pdfStartPoint[1]
      };
      var xyPointEnd = {
        x: pdfEndPoint[0],
        y: pdfEndPoint[1]
      };
      var points = _pathPoints2.default.generatePoints(xyPointStart, xyPointEnd, _type);

      var rect = _pathPoints2.default.pointsToRect(xyPointStart, xyPointEnd);

      _this2.pageRender.page.addGraphicsObject({
        type: 2,
        points: points,
        rect: rect
      }).then(function (graphicsObject) {
        //this.pageRender.redrawContent ();
        startPoint = null;
        _this2.shapeDom.hide();
        return graphicsObject;
        //}).then(_=>{
        //  return this.pageRender.page.getGraphicsObjectAtPoint([rect.left, rect.bottom], 3, 2);
      }).then(function (graphicsObject) {
        if (!graphicsObject) {
          return Promise.reject();
        }
        return [_addon.graphicsManager.get(graphicsObject), graphicsObject];
      }).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            GraphicsObjectComponent = _ref2[0],
            graphicsObject = _ref2[1];

        return new GraphicsObjectComponent(graphicsObject, pageRender, _addon);
      }).then(function (graphicsObjectComponent) {
        _this2.currentComponet = graphicsObjectComponent;
        return graphicsObjectComponent.active();
      }).catch(function (e) {
        e && console.error(e);
        _this2.currentComponet = null;
        _this2.pdfViewer.setActiveElement();
      });
    }).on('panmove', function (e) {
      if (startPoint) {
        endPoint = {
          x: startPoint.x + e.deltaX,
          y: startPoint.y + e.deltaY
        };

        var deviceRect = _pathPoints2.default.pointsToRect(startPoint, endPoint, true);

        var pathes = _pathPoints2.default.generatePoints(startPoint, endPoint, _type);
        (0, _pathPreview.drawShape)(pathes, deviceRect, _this2.shapeDom);
      }
    });
  };

  AddGraphicsStateHandler.prototype.destroyPageHandler = function destroyPageHandler() {
    this.hammer && this.hammer.destroy();
    destroyHook();
    this.resetHandler();
  };

  AddGraphicsStateHandler.prototype.out = function out() {
    this.destroyPageHandler();
  };

  AddGraphicsStateHandler.prototype.resetHandler = function resetHandler() {
    this.currentComponet && this.currentComponet.destroy();
  };

  return AddGraphicsStateHandler;
}(IStateHandler);

exports.default = AddGraphicsStateHandler;


var getDevicePagePoint = function getDevicePagePoint(elem, event) {
  var pageRect = elem.getBoundingClientRect();
  var srcEvent = event.srcEvent;
  return {
    x: srcEvent.clientX - pageRect.left - event.deltaX,
    y: srcEvent.clientY - pageRect.top - event.deltaY
  };
};

/***/ }),

/***/ "./src/pdf-viewer/addon/graphics/AddImageStateHandler.js":
/*!***************************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/AddImageStateHandler.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _PDFViewCtrl = __webpack_require__(/*! PDFViewCtrl */ "PDFViewCtrl");

var PDFViewCtrl = _interopRequireWildcard(_PDFViewCtrl);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var $ = PDFViewCtrl.Deps.jQuery;
var IStateHandler = PDFViewCtrl.IStateHandler;
var Events = PDFViewCtrl.Events;
var _addon = null;

var AddImageStateHandler = function (_IStateHandler) {
    _inherits(AddImageStateHandler, _IStateHandler);

    AddImageStateHandler.setAddon = function setAddon(addon) {
        _addon = addon;
    };

    AddImageStateHandler.getStateName = function getStateName() {
        return 'add-image-object';
    };

    function AddImageStateHandler(pdfViewer) {
        _classCallCheck(this, AddImageStateHandler);

        return _possibleConstructorReturn(this, _IStateHandler.call(this, pdfViewer));
    }

    AddImageStateHandler.prototype.pageHandler = function pageHandler(pageRender) {
        var _this2 = this;

        var that = this;
        this.pageRender = pageRender;
        var $handler = this.$handler = pageRender.$handler;
        var eHandler = $handler[0];
        var hammer = this.hammer = new Hammer.Manager(eHandler, {
            recognizers: [[Hammer.Tap], [Hammer.Pan, { direction: Hammer.DIRECTION_ALL }]]
        });

        var $image = $('<img style="position: absolute;top:-' + $handler.height() + 'px;left:-' + $handler.width() + 'px;border:2px solid transparent"></img>');
        $handler.append($image);
        var imageWidth = 0,
            imageHeight = 0;
        this.pdfViewer.eventEmitter.on(Events.addEditImage, this.loadFile = function (file) {
            var fileReader = new FileReader();
            _this2.file = file;
            fileReader.readAsDataURL(file);
            fileReader.onload = function (e) {
                $image.prop({ src: e.target.result });
                var img = new Image();
                img.onload = function () {
                    $image.css({
                        top: -img.height,
                        left: -img.width
                    });
                    imageWidth = img.width;
                    imageHeight = img.height;
                };
                img.src = e.target.result;
            };
        });
        $handler.on("mousemove mousewheel", function (e) {
            var pageRect = eHandler.getBoundingClientRect();
            var x = e.clientX - pageRect.left,
                y = e.clientY - pageRect.top;
            $image.css({
                top: y,
                left: x
            });
        });
        $handler.on("mouseleave", function (e) {
            $image.css({
                top: -imageHeight,
                left: -imageWidth
            });
        });

        hammer.on('tap', function (e) {
            var deviceRect = {};
            var point = getDevicePagePoint(eHandler, e);
            var width = $image.width();
            var height = $image.height();
            deviceRect.top = point.y;
            deviceRect.left = point.x;
            deviceRect.right = deviceRect.left + width;
            deviceRect.bottom = deviceRect.top + height;
            pageRender.getPDFPage().then(function (page) {
                var fileReader = new FileReader();
                fileReader.readAsArrayBuffer(_this2.file);
                fileReader.onload = function (e) {
                    var buffer = new Uint8Array(e.target.result);
                    var rect = page.reverseDeviceRect(deviceRect, pageRender.getScale());
                    page.addImage(buffer, rect).then(function () {
                        var x = (rect.left + rect.right) / 2,
                            y = (rect.top + rect.bottom) / 2;

                        page.getGraphicsObjectAtPoint([x, y], 3, 3).then(function (graphicsObject) {
                            return [_addon.graphicsManager.get(graphicsObject), graphicsObject];
                        }).then(function (_ref) {
                            var _ref2 = _slicedToArray(_ref, 2),
                                GraphicsObjectComponent = _ref2[0],
                                graphicsObject = _ref2[1];

                            return new GraphicsObjectComponent(graphicsObject, pageRender, _addon);
                        }).then(function (graphicsObjectComponent) {
                            that.pdfViewer.getStateHandlerManager().switchTo("edit-all");
                            that.currentComponet = graphicsObjectComponent;
                            $image.remove();
                            return graphicsObjectComponent.active();
                        }).catch(function (e) {
                            e && console.error(e);
                            that.currentComponet = null;
                            that.pdfViewer.setActiveElement();
                        });
                    });
                };
            });
        });
    };

    AddImageStateHandler.prototype.destroyPageHandler = function destroyPageHandler() {
        this.$handler.off("mousemove mousewheel mouseleave");
        this.$handler.empty();
        this.hammer && this.hammer.destroy();
        this.pageRender.$handler.removeClass(this.cursorStyle);
        this.pdfViewer.eventEmitter.off(Events.addEditImage, this.loadFile);
    };

    AddImageStateHandler.prototype.out = function out() {
        this.destroyPageHandler();
    };

    return AddImageStateHandler;
}(IStateHandler);

exports.default = AddImageStateHandler;

var getDevicePagePoint = function getDevicePagePoint(elem, event) {
    var pageRect = elem.getBoundingClientRect();
    var srcEvent = event.srcEvent;
    return {
        x: srcEvent.clientX - pageRect.left - event.deltaX,
        y: srcEvent.clientY - pageRect.top - event.deltaY
    };
};

/***/ }),

/***/ "./src/pdf-viewer/addon/graphics/EditGraphicsAddon.js":
/*!************************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/EditGraphicsAddon.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PDFViewCtrl = __webpack_require__(/*! PDFViewCtrl */ "PDFViewCtrl");

var PDFViewCtrl = _interopRequireWildcard(_PDFViewCtrl);

var _GraphicsManager = __webpack_require__(/*! ./GraphicsManager.js */ "./src/pdf-viewer/addon/graphics/GraphicsManager.js");

var _GraphicsManager2 = _interopRequireDefault(_GraphicsManager);

var _createEditGraphicsStateHandler = __webpack_require__(/*! ./createEditGraphicsStateHandler.js */ "./src/pdf-viewer/addon/graphics/createEditGraphicsStateHandler.js");

var _createEditGraphicsStateHandler2 = _interopRequireDefault(_createEditGraphicsStateHandler);

var _createEditTextStateHandler = __webpack_require__(/*! ./createEditTextStateHandler.js */ "./src/pdf-viewer/addon/graphics/createEditTextStateHandler.js");

var _createEditTextStateHandler2 = _interopRequireDefault(_createEditTextStateHandler);

__webpack_require__(/*! ./style.scss */ "./src/pdf-viewer/addon/graphics/style.scss");

var _AddGraphicsStateHandler = __webpack_require__(/*! ./AddGraphicsStateHandler */ "./src/pdf-viewer/addon/graphics/AddGraphicsStateHandler.js");

var _AddGraphicsStateHandler2 = _interopRequireDefault(_AddGraphicsStateHandler);

var _AddImageStateHandler = __webpack_require__(/*! ./AddImageStateHandler */ "./src/pdf-viewer/addon/graphics/AddImageStateHandler.js");

var _AddImageStateHandler2 = _interopRequireDefault(_AddImageStateHandler);

var _createAddTextObjectStateHandler = __webpack_require__(/*! ./createAddTextObjectStateHandler.js */ "./src/pdf-viewer/addon/graphics/createAddTextObjectStateHandler.js");

var _createAddTextObjectStateHandler2 = _interopRequireDefault(_createAddTextObjectStateHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Created by linc on 2019/4/28.
                                                                                                                                                           */


var EditGraphicsAddon = function () {
    function EditGraphicsAddon(pdfViewer) {
        _classCallCheck(this, EditGraphicsAddon);

        this.pdfViewer = pdfViewer;
        this.graphicsManager = new _GraphicsManager2.default();
    }

    EditGraphicsAddon.prototype.init = function init() {
        //let EditTextStateHandler = createEditGraphicsStateHandler(this, 1);
        var EditTextStateHandler = (0, _createEditTextStateHandler2.default)(this);
        var EditPathStateHandler = (0, _createEditGraphicsStateHandler2.default)(this, 2);
        var EditImageStateHandler = (0, _createEditGraphicsStateHandler2.default)(this, 3);
        var EditAllStateHandler = (0, _createEditGraphicsStateHandler2.default)(this, 5);
        _AddGraphicsStateHandler2.default.setAddon(this);
        _AddImageStateHandler2.default.setAddon(this);
        var AddTextObjectStateHandler = (0, _createAddTextObjectStateHandler2.default)(this);

        var stateHandlerManager = this.pdfViewer.getStateHandlerManager();

        stateHandlerManager.register(EditTextStateHandler);
        stateHandlerManager.register(EditPathStateHandler);
        stateHandlerManager.register(EditImageStateHandler);
        stateHandlerManager.register(EditAllStateHandler);
        stateHandlerManager.register(_AddGraphicsStateHandler2.default);
        stateHandlerManager.register(AddTextObjectStateHandler);
        stateHandlerManager.register(_AddImageStateHandler2.default);
    };

    EditGraphicsAddon.prototype.getGraphicsManager = function getGraphicsManager() {
        return this.graphicsManager;
    };

    return EditGraphicsAddon;
}();

exports.default = EditGraphicsAddon;

/***/ }),

/***/ "./src/pdf-viewer/addon/graphics/Events.js":
/*!*************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/Events.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by linc on 2019/4/26.
 */
var GraphicsEvents = {
    textObjectActive: 'text-object-active',
    textObjectUnActive: 'text-object-unactive',
    addTextObjectParamTransfer: 'add-text-object-param-transfer'
};
exports.default = GraphicsEvents;

/***/ }),

/***/ "./src/pdf-viewer/addon/graphics/GraphicsManager.js":
/*!**********************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/GraphicsManager.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _GraphicsObject = __webpack_require__(/*! ./GraphicsObject.js */ "./src/pdf-viewer/addon/graphics/GraphicsObject.js");

var _GraphicsObject2 = _interopRequireDefault(_GraphicsObject);

var _TextObject = __webpack_require__(/*! ./TextObject.js */ "./src/pdf-viewer/addon/graphics/TextObject.js");

var _TextObject2 = _interopRequireDefault(_TextObject);

var _PathObject = __webpack_require__(/*! ./PathObject.js */ "./src/pdf-viewer/addon/graphics/PathObject.js");

var _PathObject2 = _interopRequireDefault(_PathObject);

var _ImageObject = __webpack_require__(/*! ./ImageObject.js */ "./src/pdf-viewer/addon/graphics/ImageObject.js");

var _ImageObject2 = _interopRequireDefault(_ImageObject);

var _ShadingObject = __webpack_require__(/*! ./ShadingObject.js */ "./src/pdf-viewer/addon/graphics/ShadingObject.js");

var _ShadingObject2 = _interopRequireDefault(_ShadingObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Created by linc on 2019/4/24.
                                                                                                                                                           */


var GraphicsViewManager = function () {
    function GraphicsViewManager() {
        _classCallCheck(this, GraphicsViewManager);

        this.matchRules = [];
    }

    GraphicsViewManager.prototype.registerMatchRule = function registerMatchRule(matchRule) {
        this.matchRules.push(matchRule);
        return matchRule;
    };

    /**
     * Rules for deregistration
     * @param matchRule - {Function}
     */


    GraphicsViewManager.prototype.unRegisterMatchRule = function unRegisterMatchRule(matchRule) {
        var index = this.matchRules.indexOf(matchRule);
        if (index === -1) {
            return;
        }
        this.matchRules.splice(index, 1);
    };

    GraphicsViewManager.prototype.get = function get(object) {

        var matchRules = this.matchRules;
        var defaultClass = this.getDefault(object);
        for (var i = matchRules.length; i--;) {
            var matchRule = matchRules[i];
            if (typeof matchRule !== 'function') {
                continue;
            }
            var MatchAnnot = matchRule(object, defaultClass);
            if (MatchAnnot) {
                return MatchAnnot;
            }
        }
        return defaultClass;
    };

    GraphicsViewManager.prototype.getDefault = function getDefault(object) {

        var type = object.getType();
        switch (type) {
            case 1:
                return _TextObject2.default;
            case 2:
                return _PathObject2.default;
            case 3:
                return _ImageObject2.default;
            default:
                return _GraphicsObject2.default;
        }
    };

    return GraphicsViewManager;
}();

exports.default = GraphicsViewManager;

/***/ }),

/***/ "./src/pdf-viewer/addon/graphics/GraphicsObject.js":
/*!*********************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/GraphicsObject.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PDFViewCtrl = __webpack_require__(/*! PDFViewCtrl */ "PDFViewCtrl");

var PDFViewCtrl = _interopRequireWildcard(_PDFViewCtrl);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Created by linc on 2019/4/24.
                                                                                                                                                           */


var $ = PDFViewCtrl.Deps.jQuery;
var browser = PDFViewCtrl.shared.browser;
var ptPxRatio = browser.ptPxRatio;
var Events = PDFViewCtrl.Events;

var GraphicsObjectComponent = function () {
  function GraphicsObjectComponent(object, pageRender, dependences) {
    _classCallCheck(this, GraphicsObjectComponent);

    this.graphicsObject = object;
    //this.eHandler = eHandler;
    //this.$handler = $(eHandler);
    this.pageRender = pageRender;
    this.dependences = dependences;
  }

  GraphicsObjectComponent.prototype.active = function active() {
    var $handler = this.$handler;
    if (!$handler) {
      $handler = this.initUI();
      this.$handler = $handler;
      var contextMenuConfig = this.getContextMenuConfig();
      if (contextMenuConfig) {
        $handler.contextMenu(this.translateContextMenuName(contextMenuConfig));
      }
    }

    this.dependences.pdfViewer.setActiveElement(this);
    this.isActive = true;

    $handler.addClass('fwr__active');
    this.updateShapeControl();

    this.bindEvent();
  };

  GraphicsObjectComponent.prototype.getContextMenuConfig = function getContextMenuConfig() {
    throw new Error('Not implemented!');
  };

  GraphicsObjectComponent.prototype.removeGraphicObject = function removeGraphicObject() {};

  GraphicsObjectComponent.prototype.bindEvent = function bindEvent() {
    var _this = this;

    this.__off__delete__event__ && this.__off__delete__event__();
    this.__off__delete__event__ = this.dependences.pdfViewer.getKeyboardEventBinder('pdf-viewer-keyboard-event-binder').on('delete-annotation', function (e) {
      _this.removeGraphicObject();
      e.stopPropagation();
    });
  };

  GraphicsObjectComponent.prototype.unBindEvent = function unBindEvent() {
    this.__off__delete__event__ && this.__off__delete__event__();
    this.__off__delete__event__ = function () {};
  };

  GraphicsObjectComponent.prototype.translateContextMenuName = function translateContextMenuName(config) {
    for (var i in config) {
      switch (i) {
        case 'items':
          var items = config[i];
          var i18n = this.dependences.pdfViewer.i18n;
          for (var j in items) {
            var item = items[j];
            if (item.nameI18nKey) {
              item.name = i18n.t(item.nameI18nKey);
            }
          }
          break;
      }
    }
    return config;
  };

  GraphicsObjectComponent.prototype.updateShapeControl = function updateShapeControl() {
    var boundary = this.getBoundary();
    var box = this._getShapeControllerBoundaryBox();
    this.shapeControl && this.shapeControl.active(this.$handler, boundary, box);
  };

  GraphicsObjectComponent.prototype.unActive = function unActive() {
    if (!this.$handler) return;
    this.$handler.removeClass('fwr__active');
    this.shapeControl && this.shapeControl.deactive();
    this.destroy();

    this.unBindEvent();
  };

  GraphicsObjectComponent.prototype.destroy = function destroy() {
    this.dependences.pdfViewer.eventEmitter.off(Events.zoomToSuccess, this.afterZoom);
    this.$handler && this.$handler.remove();
    this.$handler = null;
  };

  GraphicsObjectComponent.prototype.getModel = function getModel() {
    return this.graphicsObject;
  };

  GraphicsObjectComponent.prototype._getShapeControllerBoundaryBox = function _getShapeControllerBoundaryBox() {
    var page = this.pageRender.page;
    var scale = ptPxRatio * this.pageRender.getScale();
    var pageWidth = page.getPxWidth() * scale,
        pageHeight = page.getPxHeight() * scale;

    if (this.pageRender.rotate % 180 != 0) {
      var _ref = [pageWidth, pageHeight];
      pageHeight = _ref[0];
      pageWidth = _ref[1];
    }
    return {
      left: 0,
      top: 0,
      width: pageWidth,
      height: pageHeight
    };
  };

  GraphicsObjectComponent.prototype.getBoundary = function getBoundary() {
    var page = this.pageRender.page;
    var pdfRect = this.graphicsObject.getRect();
    var deviceRect = page.getDeviceRect(pdfRect, this.pageRender.getScale(), 0);
    return {
      left: deviceRect.left,
      top: deviceRect.top,
      width: deviceRect.right - deviceRect.left,
      height: deviceRect.bottom - deviceRect.top
    };
  };

  GraphicsObjectComponent.prototype.initUI = function initUI() {
    var _this2 = this;

    var $handler = this.$handler = $('<div class="fwr__graphics-object-handler"\n        ></div>');
    this.pageRender.pageHandler.$handler.append($handler);

    this.shapeControl = new PDFViewCtrl.ShapeControl({
      start: function start(shape, context, action) {
        return _this2.onStartUpdateShape(shape, context, action);
      },
      moving: function moving(shape, context, _ref2) {
        var offsetX = _ref2.offsetX,
            offsetY = _ref2.offsetY;
        return _this2.onShapeMoving(shape, context, offsetX, offsetY);
      },
      update: function update(shape, context) {
        return _this2.onShapeUpdating(shape, context);
      },
      end: function end(shape, context, action) {
        return _this2.onShapeUpdateEnd(shape, context, action);
      },
      resizable: true,
      //rotatable:true,
      enableDiagonally: true,
      enableFrame: true,
      previewer: true
    });
    var that = this;
    this.dependences.pdfViewer.eventEmitter.on(Events.zoomToSuccess, this.afterZoom = function () {
      that.updateShapeControl();
    });
    return this.$handler;
  };

  GraphicsObjectComponent.prototype.onStartUpdateShape = function onStartUpdateShape(shape, context, action) {
    var _this3 = this;

    if (action = 'move') {
      $(this.shapeControl.ui.querySelector('.fv__shape-control-previewer')).show();
      this.graphicsObject.getBitmap(this.pageRender.getScale()).then(function (imageData) {
        if (!imageData) return;

        var context = _this3.shapeControl.getPreviewerContext();

        $(context.canvas).attr({
          width: imageData.width,
          height: imageData.height
        });

        var img = context.createImageData(imageData.width, imageData.height + 1);
        var data = new (Uint8ClampedArray || Uint8Array)(imageData.buffer);
        img.data.set(data);

        context.putImageData(img, 0, 0);
      });
    }
  };

  GraphicsObjectComponent.prototype.onShapeMoving = function onShapeMoving(shape, context) {};

  GraphicsObjectComponent.prototype.onShapeUpdating = function onShapeUpdating(shape, context) {};

  GraphicsObjectComponent.prototype.onShapeUpdateEnd = function onShapeUpdateEnd(shape, context, action) {
    var _this4 = this;

    var rect = Object.assign({}, shape);
    rect.right = rect.left + rect.width;
    rect.bottom = rect.top + rect.height;
    rect = this.pageRender.page.reverseDeviceRect(rect, this.pageRender.getScale());

    this.graphicsObject.setMatrix(rect).then(function (_) {
      $(_this4.shapeControl.ui.querySelector('.fv__shape-control-previewer')).hide();
      _this4.updateShapeControl();
    });
  };

  GraphicsObjectComponent.prototype.setColor = function setColor(color) {
    return this.graphicsObject.setBorderColor(color);
  };

  GraphicsObjectComponent.prototype.setBorderStyle = function setBorderStyle(style, param) {
    var _this5 = this;

    return this.graphicsObject.setBorderStyle(style, param).then(function (_) {
      _this5.updateShapeControl();
    });
  };

  GraphicsObjectComponent.prototype.setOpacity = function setOpacity(opacity) {
    return this.graphicsObject.setOpacity(opacity);
  };

  GraphicsObjectComponent.prototype.setFillColor = function setFillColor(fillcolor) {
    return this.graphicsObject.setFillColor(fillcolor);
  };

  GraphicsObjectComponent.prototype.setBorderWidth = function setBorderWidth(borderWidth) {
    var _this6 = this;

    return this.graphicsObject.setBorderWidth(borderWidth).then(function (_) {
      _this6.updateShapeControl();
    });
  };

  return GraphicsObjectComponent;
}();

exports.default = GraphicsObjectComponent;

/***/ }),

/***/ "./src/pdf-viewer/addon/graphics/ImageObject.js":
/*!******************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/ImageObject.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _GraphicsObject = __webpack_require__(/*! ./GraphicsObject.js */ "./src/pdf-viewer/addon/graphics/GraphicsObject.js");

var _GraphicsObject2 = _interopRequireDefault(_GraphicsObject);

var _PDFViewCtrl = __webpack_require__(/*! PDFViewCtrl */ "PDFViewCtrl");

var PDFViewCtrl = _interopRequireWildcard(_PDFViewCtrl);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by linc on 2019/4/24.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var $ = PDFViewCtrl.Deps.jQuery;
var Events = PDFViewCtrl.Events;

var contextMenuConfig = void 0;

var ImageObjectComponent = function (_GraphicsObjectCompon) {
    _inherits(ImageObjectComponent, _GraphicsObjectCompon);

    ImageObjectComponent.getDefaultContextMenuConfig = function getDefaultContextMenuConfig() {
        return defaultContextMenuConfig;
    };

    ImageObjectComponent.setContextMenuConfig = function setContextMenuConfig(config) {
        contextMenuConfig = config;
    };

    function ImageObjectComponent(object, pageRender, dependences) {
        _classCallCheck(this, ImageObjectComponent);

        return _possibleConstructorReturn(this, _GraphicsObjectCompon.call(this, object, pageRender, dependences));
    }

    ImageObjectComponent.prototype.initUI = function initUI() {
        var _this2 = this;

        var that = this;
        var $handler = this.$handler = $('<div class="fwr__graphics-object-handler" \n        ></div>');
        this.pageRender.pageHandler.$handler.append($handler);

        this.shapeControl = new PDFViewCtrl.ShapeControl({
            start: function start(shape, context, action) {
                return _this2.onStartUpdateShape(shape, context, action);
            },
            moving: function moving(shape, context, _ref) {
                var offsetX = _ref.offsetX,
                    offsetY = _ref.offsetY;
                return _this2.onShapeMoving(shape, context, offsetX, offsetY);
            },
            update: function update(shape, context) {
                return _this2.onShapeUpdating(shape, context);
            },
            rotate: function rotate(shape, context) {
                return _this2.onRotate(shape, context);
            },
            end: function end(shape, context, action) {
                return _this2.onShapeUpdateEnd(shape, context, action);
            },
            resizable: true,
            rotatable: true,
            enableDiagonally: true,
            enableFrame: true,
            previewer: true
        });
        this.dependences.pdfViewer.eventEmitter.on(Events.zoomToSuccess, this.afterZoom = function () {
            that.updateShapeControl();
        });
        return this.$handler;
    };

    ImageObjectComponent.prototype.onRotate = function onRotate(degree) {
        var _this3 = this;

        return this.graphicsObject.setRotation(degree).then(function (info) {
            _this3.updateShapeControl();
        });
    };

    ImageObjectComponent.prototype.getContextMenuConfig = function getContextMenuConfig() {
        var _this4 = this;

        return {
            selector: 'div.fv__shape-control',
            items: {
                properties: {
                    name: 'properties',
                    nameI18nKey: 'viewer_:contextmenu.annot.properties',
                    callback: function callback(trigger, key, e) {
                        _this4.showPropertiesDialog(e);
                    }
                },
                remove: {
                    name: 'delete',
                    nameI18nKey: 'viewer_:contextmenu.annot.delete',
                    callback: function callback() {
                        _this4.remove();
                    }
                }
            }
        };
    };

    ImageObjectComponent.prototype.getPropertyOptions = function getPropertyOptions() {
        var object = this.graphicsObject;
        var opacity = object.getOpacity();
        return {
            opacity: opacity,
            borderStyle: false
        };
    };

    ImageObjectComponent.prototype.showPropertiesDialog = function showPropertiesDialog(e) {
        var activePropertiesDialog = this.dependences.pdfViewer.activePropertiesDialog;
        if (this.dependences.pdfViewer.activePropertiesDialog) {
            activePropertiesDialog.show(e);
            activePropertiesDialog.setViewerComponent(this);
        } else {
            this.$propertiesControl = new PDFViewCtrl.PropertiesControl(this);
        }
    };

    ImageObjectComponent.prototype.hidePropertiesDialog = function hidePropertiesDialog() {
        this.$propertiesControl.close();
    };

    ImageObjectComponent.prototype.destroy = function destroy() {
        this.$handler.contextMenu('destroy');
        this.dependences.pdfViewer.eventEmitter.off(Events.zoomToSuccess, this.afterZoom);
    };

    ImageObjectComponent.prototype.setOpacity = function setOpacity(opacity) {
        this.graphicsObject.setOpacity(opacity);
    };

    ImageObjectComponent.prototype.remove = function remove() {
        this.$handler.contextMenu('hide');
        this.graphicsObject.remove();
        this.dependences.pdfViewer.setActiveElement(null);
        this.destroy();
    };
    //unActive () {
    //
    //}


    return ImageObjectComponent;
}(_GraphicsObject2.default);

exports.default = ImageObjectComponent;

/***/ }),

/***/ "./src/pdf-viewer/addon/graphics/PathObject.js":
/*!*****************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/PathObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GraphicsObject = __webpack_require__(/*! ./GraphicsObject.js */ "./src/pdf-viewer/addon/graphics/GraphicsObject.js");

var _GraphicsObject2 = _interopRequireDefault(_GraphicsObject);

var _PDFViewCtrl = __webpack_require__(/*! PDFViewCtrl */ "PDFViewCtrl");

var PDFViewCtrl = _interopRequireWildcard(_PDFViewCtrl);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by linc on 2019/4/24.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var $ = PDFViewCtrl.Deps.jQuery;

var PathObjectComponent = function (_GraphicsObjectCompon) {
  _inherits(PathObjectComponent, _GraphicsObjectCompon);

  function PathObjectComponent(object, pageRender, dependences) {
    _classCallCheck(this, PathObjectComponent);

    return _possibleConstructorReturn(this, _GraphicsObjectCompon.call(this, object, pageRender, dependences));
  }

  PathObjectComponent.prototype.active = function active() {
    _GraphicsObjectCompon.prototype.active.call(this);
  };

  PathObjectComponent.prototype.getPropertyOptions = function getPropertyOptions() {
    var object = this.graphicsObject;
    var color = object.getBorderColor();
    if (this.graphicsObject.needStroke()) {
      color = (color | 0xff000000).toString(16);
      color = '#' + color.substr(2, 6);
    } else {
      color = 0;
    }
    var fillColor = object.getFillColor();
    if (object.getFillMode() == 0) {
      fillColor = 0;
    }
    var borderWidth = object.getBorderWidth();
    var opacity = object.getOpacity();
    return {
      color: color,
      borderTransparent: true,
      opacity: opacity,
      fillColor: fillColor,
      borderWidth: borderWidth
    };
  };

  PathObjectComponent.prototype.initUI = function initUI() {
    var _this2 = this;

    _GraphicsObjectCompon.prototype.initUI.call(this);

    this.$tip = $('<div class="fwr__path-object-tip"></div>');
    this.$tip.appendTo(this.$handler);

    var hammer = this.rectHammer = new Hammer.Manager(this.$handler[0], {
      recognizers: [[Hammer.Press]]
    });

    this.$handler.on('mousemove', function (e) {
      _this2.$tip.hide();
    });

    hammer.on('press', function (e) {
      var pdfRect = _this2.graphicsObject.getRect();
      var mousePos = getDevicePagePoint(_this2.$handler.parent()[0], e);

      var objectPos = {
        left: mousePos.x + 'px',
        top: mousePos.y + 20 + 'px'
      };

      mousePos = _this2.pageRender.page.reverseDevicePoint([mousePos.x, mousePos.y], _this2.pageRender.getScale());

      _this2.$tip.show().css(objectPos).html('object : x:' + pdfRect.left.toFixed(2) + ',y:' + pdfRect.bottom.toFixed(2) + ('<br/>mouse: x:' + mousePos[0].toFixed(2) + ',y:' + mousePos[1].toFixed(2)));
    });
    return this.$handler;
  };

  PathObjectComponent.prototype.getContextMenuConfig = function getContextMenuConfig() {
    var _this3 = this;

    var that = this;
    return {
      selector: 'div.fv__shape-control',
      items: {
        properties: {
          name: 'properties',
          nameI18nKey: 'viewer_:contextmenu.annot.properties',
          callback: function callback(trigger, key, e) {
            var activePropertiesDialog = _this3.dependences.pdfViewer.activePropertiesDialog;
            if (_this3.dependences.pdfViewer.activePropertiesDialog) {
              activePropertiesDialog.show(e);
              activePropertiesDialog.setViewerComponent(_this3);
            } else _this3.propertiesControl = new PDFViewCtrl.PropertiesControl(_this3);
          }
        },
        remove: {
          name: 'delete',
          nameI18nKey: 'viewer_:contextmenu.annot.delete',
          callback: function callback() {
            return _this3.removeGraphicObject();
          }
        }
      }
    };
  };

  PathObjectComponent.prototype.removeGraphicObject = function removeGraphicObject() {
    this.$handler.contextMenu('hide');
    this.graphicsObject.remove();
    this.dependences.pdfViewer.setActiveElement(null);
    this.destroy();
  };
  //unActive () {
  //
  //}


  PathObjectComponent.prototype.destroy = function destroy() {
    if (!this.$handler) return;
    this.$handler.contextMenu('destroy');
    this.propertiesControl && this.propertiesControl.close();
    this.propertiesControl = null;
    this.rectHammer.destroy();
    _GraphicsObjectCompon.prototype.destroy.call(this);
  };

  return PathObjectComponent;
}(_GraphicsObject2.default);

exports.default = PathObjectComponent;


var getDevicePagePoint = function getDevicePagePoint(elem, event) {
  var pageRect = elem.getBoundingClientRect();
  var srcEvent = event.srcEvent;
  return {
    x: srcEvent.clientX - pageRect.left - event.deltaX,
    y: srcEvent.clientY - pageRect.top - event.deltaY
  };
};

/***/ }),

/***/ "./src/pdf-viewer/addon/graphics/ShadingObject.js":
/*!********************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/ShadingObject.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _GraphicsObject = __webpack_require__(/*! ./GraphicsObject.js */ "./src/pdf-viewer/addon/graphics/GraphicsObject.js");

var _GraphicsObject2 = _interopRequireDefault(_GraphicsObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by linc on 2019/4/24.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ShadingObjectComponent = function (_GraphicsObjectCompon) {
    _inherits(ShadingObjectComponent, _GraphicsObjectCompon);

    function ShadingObjectComponent(object, pageRender, dependences) {
        _classCallCheck(this, ShadingObjectComponent);

        return _possibleConstructorReturn(this, _GraphicsObjectCompon.call(this, object, pageRender, dependences));
    }

    ShadingObjectComponent.prototype.active = function active() {};

    ShadingObjectComponent.prototype.getContextMenuConfig = function getContextMenuConfig() {
        return undefined;
    };
    //unActive () {
    //
    //}


    return ShadingObjectComponent;
}(_GraphicsObject2.default);

exports.default = ShadingObjectComponent;

/***/ }),

/***/ "./src/pdf-viewer/addon/graphics/TextObject.js":
/*!*****************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/TextObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _GraphicsObject = __webpack_require__(/*! ./GraphicsObject.js */ "./src/pdf-viewer/addon/graphics/GraphicsObject.js");

var _GraphicsObject2 = _interopRequireDefault(_GraphicsObject);

var _PDFViewCtrl = __webpack_require__(/*! PDFViewCtrl */ "PDFViewCtrl");

var PDFViewCtrl = _interopRequireWildcard(_PDFViewCtrl);

var _Events = __webpack_require__(/*! ./Events.js */ "./src/pdf-viewer/addon/graphics/Events.js");

var _Events2 = _interopRequireDefault(_Events);

var _WebFontFace = __webpack_require__(/*! ../../../shared/WebFontFace.js */ "./src/shared/WebFontFace.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by linc on 2019/4/24.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var $ = PDFViewCtrl.Deps.jQuery;
var browser = PDFViewCtrl.shared.browser;
var ptPxRatio = browser.ptPxRatio;

var TextObjectComponent = function (_GraphicsObjectCompon) {
    _inherits(TextObjectComponent, _GraphicsObjectCompon);

    function TextObjectComponent(object, pageRender, dependences) {
        _classCallCheck(this, TextObjectComponent);

        return _possibleConstructorReturn(this, _GraphicsObjectCompon.call(this, object, pageRender, dependences));
    }

    TextObjectComponent.prototype.initUI = function initUI() {
        var _this2 = this;

        var $handler = this.$handler = $('<div class="fwr__graphics-object-handler fwr__text-object-edit"\n        ></div>');
        this.pageRender.pageHandler.$handler.after($handler);

        var shapeControl = this.shapeControl = new PDFViewCtrl.ShapeControl({
            start: function start(shape, context, action) {
                return _this2.onStartUpdateShape(shape, context, action);
            },
            moving: function moving(shape, context, _ref) {
                var offsetX = _ref.offsetX,
                    offsetY = _ref.offsetY;
                return _this2.onShapeMoving(shape, context, offsetX, offsetY);
            },
            update: function update(shape, context) {
                return _this2.onShapeUpdating(shape, context);
            },
            rotate: function rotate(shape, context) {
                return _this2.onRotate(shape, context);
            },
            end: function end(shape, context, action) {
                return _this2.onShapeUpdateEnd(shape, context, action);
            },
            resizable: true,
            enableDiagonally: true,
            enableFrame: true,
            previewer: true
        });
        $handler.on('dblclick', function () {
            _GraphicsObjectCompon.prototype.unActive.call(_this2);
            _this2.activeCharEdit();
        });
        return this.$handler;
    };

    TextObjectComponent.prototype.reActive = function reActive() {};

    TextObjectComponent.prototype.active = function active() {
        _GraphicsObjectCompon.prototype.active.call(this);
        this.reActive = this.active;
        this.pageRender.pdfViewer.getEventEmitter().emit(_Events2.default.textObjectActive, this);
    };

    TextObjectComponent.prototype.unActive = function unActive() {
        _GraphicsObjectCompon.prototype.unActive.call(this);
        this.unActiveCharEdit();
        this.reActive = function () {};
        this.pageRender.pdfViewer.getEventEmitter().emit(_Events2.default.textObjectUnActive, this);
    };

    TextObjectComponent.prototype.unActiveCharEdit = function unActiveCharEdit() {
        this.$charEditContainer && this.$charEditContainer.remove();
        this.$charEditContainer = null;
    };

    TextObjectComponent.prototype.initCharEditContainer = function initCharEditContainer() {
        var $container = $('<div class="fv__text-object-edit-char-container"><div class="fv__text-object-edit-char-mask-layer"></div><span class="fv__text-object-edit-char-input" contenteditable></span></div>');
        this.pageRender.$handler.after($container);
        return $container;
    };

    TextObjectComponent.prototype.activeCharEdit = function activeCharEdit() {
        var _this3 = this;

        var $charEditContainer = this.$charEditContainer = this.$charEditContainer || this.initCharEditContainer();
        var $maskLayer = $charEditContainer.find('.fv__text-object-edit-char-mask-layer');
        var $charInput = $charEditContainer.find('.fv__text-object-edit-char-input');
        var eCharInput = $charInput[0];
        // 使用keydown，不用keyup，keyup的时候获取的文本已经是换行后的了。
        $charInput.on('keydown', function (e) {
            if (e.keyCode === 13) {
                //enter
                e.preventDefault();
                var char = eCharInput.textContent;
                if (typeof char !== 'string') {
                    char = eCharInput.innerText;
                }
                _this3.setTextChar(char).then(function () {
                    _this3.unActive();
                });
            }
        });
        var textObject = this.graphicsObject;
        var textRect = textObject.getRect();
        var pageRender = this.pageRender;
        //let pdfPage;
        return Promise.all([pageRender.getPDFPage(), pageRender.getScale()]).then(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                pdfPage = _ref3[0],
                scale = _ref3[1];

            //pdfPage = _pdfPage;
            return [pdfPage.getDeviceRect(textRect, scale), pdfPage, scale];
        }).then(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 3),
                textDeviceRect = _ref5[0],
                pdfPage = _ref5[1],
                scale = _ref5[2];

            //let $maskLayer = $('<div class="fv__text-object-edit-char-mask-layer"></div>');
            $charEditContainer.css({
                left: textDeviceRect.left + 'px',
                top: textDeviceRect.bottom + 'px'
            });
            eCharInput.focus();
            $maskLayer.css({
                //left: textDeviceRect.left + 'px',
                //top: textDeviceRect.top + 'px',
                width: textDeviceRect.right - textDeviceRect.left + 'px',
                height: textDeviceRect.bottom - textDeviceRect.top + 'px'
            });
            // input方案优势，默认Enter输入动作完成，select时机主动，默认pre；劣势，宽度需要计算（涉及Dom计算，低效）
            //let $charForm = $('<form class="fv__text-object-edit-char-form"><input type="text" class="fv__text-object-edit-char-input"/></form>');
            //let $charInput = $charForm.find('.fv__text-object-edit-char-input');
            //$charForm.on('submit', (e) => {
            //    e.preventDefault();
            //    this.setTextChar($charInput.val()).then(() => {
            //        $charEditContainer.remove();
            //        this.$charEditContainer = null;
            //    });
            //});
            //$charInput.val(textObject.info.textState.text);
            //let matrix = pdfPage.getPDFMatrix();
            ////let ptScale = scale * ptPxRatio;
            //matrix.scale(scale, scale);
            //let [x, y] = matrix.transformPoint(textRect.left, textRect.bottom);
            //$charForm.css({
            //    left: x + 'pt',
            //    bottom: y + 'pt',
            //})
            //$charForm.css({
            //    left: textDeviceRect.left + 'px',
            //    top: textDeviceRect.top + 'px',
            //})
            //let $charInput = $('<span class="fv__text-object-edit-char-input" contenteditable></span>');
            if (typeof eCharInput.textContent === 'string') {
                eCharInput.textContent = textObject.info.textState.text;
            } else {
                eCharInput.innerText = textObject.info.textState.text;
            }
            var fontSize = textObject.info.textState.size;
            var matrix = [].concat(textObject.info.textState.matrix);
            var diffScale = 12;
            if (fontSize * ptPxRatio < diffScale) {
                fontSize *= diffScale;
                matrix[0] /= diffScale;
                matrix[1] /= diffScale;
                matrix[2] /= diffScale;
                matrix[3] /= diffScale;
            }
            matrix[0] *= scale;
            matrix[1] *= -scale;
            matrix[2] *= -scale;
            matrix[3] *= scale;
            $charInput.css({
                //left: textDeviceRect.left + 'px',
                //top: textDeviceRect.top + 'px',
                fontFamily: '"' + [textObject.info.textState.font.baseName, textObject.info.textState.font.familyName, textObject.info.textState.font.nameKey, textObject.info.textState.font.name, 'FoxitPDFSDKForWeb'].join('","') + '"',
                fontSize: fontSize + 'pt',
                fontWeight: textObject.info.textState.font.isBold ? 700 : 400,
                fontStyle: textObject.info.textState.font.isItalic ? 'italic' : '',
                transform: 'matrix(' + matrix.join(',') + ',0,0)',
                color: convertFromNumberToHex(textObject.getFillColor() & 0xFFFFFF)
            });
            //$charEditContainer.append ($maskLayer);
            //$charEditContainer.append ($charForm);
            //$charEditContainer.append ($charInput);
            (0, _WebFontFace.addFont)(textObject.info.textState.font.nameKey || textObject.info.textState.font.name, textObject.getWoff.bind(textObject));
            _this3.reActive = _this3.activeCharEdit;
            _this3.pageRender.pdfViewer.getEventEmitter().emit(_Events2.default.textObjectActive, _this3);
        });
    };

    TextObjectComponent.prototype.setTextChar = function setTextChar(char) {
        return this.graphicsObject.setText(char);
    };

    TextObjectComponent.prototype.getContextMenuConfig = function getContextMenuConfig() {
        return;
    };

    TextObjectComponent.prototype.getTextChar = function getTextChar() {
        if (this.$charEditContainer) {
            var eCharInput = this.$charEditContainer.find('.fv__text-object-edit-char-input')[0];
            var char = eCharInput.textContent;
            if (typeof char !== 'string') {
                char = eCharInput.innerText;
            }
            return char;
        }
        return this.getModel().getText();
    };

    TextObjectComponent.prototype.textCharSure = function textCharSure() {
        if (this.$charEditContainer) {
            var eCharInput = this.$charEditContainer.find('.fv__text-object-edit-char-input')[0];
            var char = eCharInput.textContent;
            if (typeof char !== 'string') {
                char = eCharInput.innerText;
            }
            return this.getModel().setText(char);
        }
        return Promise.resolve();
    };

    return TextObjectComponent;
}(_GraphicsObject2.default);

exports.default = TextObjectComponent;


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

/***/ "./src/pdf-viewer/addon/graphics/createAddTextObjectStateHandler.js":
/*!**************************************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/createAddTextObjectStateHandler.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = createAddTextObjectStateHandler;

var _PDFViewCtrl = __webpack_require__(/*! PDFViewCtrl */ "PDFViewCtrl");

var PDFViewCtrl = _interopRequireWildcard(_PDFViewCtrl);

var _hammerjs = __webpack_require__(/*! hammerjs */ "hammerjs");

var _hammerjs2 = _interopRequireDefault(_hammerjs);

var _Events = __webpack_require__(/*! ./Events.js */ "./src/pdf-viewer/addon/graphics/Events.js");

var _Events2 = _interopRequireDefault(_Events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by linc on 2019/6/24.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var className = 'fv__add-text-object-state-handler';
function createAddTextObjectStateHandler(addon) {
    var graphicsManager = addon.graphicsManager;
    return function (_PDFViewCtrl$IStateHa) {
        _inherits(AddTextObjectStateHandler, _PDFViewCtrl$IStateHa);

        function AddTextObjectStateHandler(pdfViewer) {
            _classCallCheck(this, AddTextObjectStateHandler);

            return _possibleConstructorReturn(this, _PDFViewCtrl$IStateHa.call(this, pdfViewer));
        }

        AddTextObjectStateHandler.getStateName = function getStateName() {
            return 'add-text-object';
        };

        AddTextObjectStateHandler.prototype.pageHandler = function pageHandler(pageRender) {
            var _this2 = this;

            this.pageRender = pageRender;
            var pdfPagePromise = pageRender.getPDFPage();
            var $handler = pageRender.$handler;
            var eHandler = $handler[0];
            $handler.addClass(className);

            var hammer = this.hammer = new _hammerjs2.default(eHandler);

            hammer.on('tap', function (e) {
                _this2.resetHandler();
                var singlePointer = e.changedPointers[0];
                pdfPagePromise.then(function (page) {
                    return [page, page.reverseDevicePoint([singlePointer.offsetX, singlePointer.offsetY], pageRender.getScale())];
                }).then(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        page = _ref2[0],
                        _ref2$ = _slicedToArray(_ref2[1], 2),
                        x = _ref2$[0],
                        y = _ref2$[1];

                    return page.addGraphicsObject(Object.assign({}, _this2.addParams, { originPosition: { x: x, y: y } }, { type: 1 }));
                }).then(function (graphicsObject) {
                    if (!graphicsObject) {
                        return Promise.reject();
                    }
                    return [graphicsManager.get(graphicsObject), graphicsObject];
                }).then(function (_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 2),
                        GraphicsObjectComponent = _ref4[0],
                        graphicsObject = _ref4[1];

                    return new GraphicsObjectComponent(graphicsObject, pageRender, addon);
                }).then(function (graphicsObjectComponent) {
                    _this2.currentComponet = graphicsObjectComponent;
                    // console.log(graphicsObjectComponent)
                    return graphicsObjectComponent.activeCharEdit();
                }).catch(function (e) {
                    e && console.error(e);
                    _this2.currentComponet = null;
                    _this2.pdfViewer.setActiveElement();
                });
            });

            this.pdfViewer.getEventEmitter().on(_Events2.default.addTextObjectParamTransfer, this.addTextObjectParamTransferBind = function (params) {
                _this2.addParams = params;
            });
        };

        AddTextObjectStateHandler.prototype.destroyPageHandler = function destroyPageHandler() {
            this.hammer && this.hammer.destroy();
            this.pageRender.$handler.removeClass(className);
            this.addParams = null;
            this.pdfViewer.getEventEmitter().off(_Events2.default.addTextObjectParamTransfer, this.addTextObjectParamTransferBind);
            this.resetHandler();
        };

        AddTextObjectStateHandler.prototype.out = function out() {
            this.destroyPageHandler();
        };

        AddTextObjectStateHandler.prototype.resetHandler = function resetHandler() {
            if (this.currentComponet) {
                if (this.currentComponet.textCharSure) {
                    this.currentComponet.textCharSure();
                }
                this.currentComponet.unActive();
            }
            //this.currentComponet && this.currentComponet.unActive();
        };

        return AddTextObjectStateHandler;
    }(PDFViewCtrl.IStateHandler);
}

/***/ }),

/***/ "./src/pdf-viewer/addon/graphics/createEditGraphicsStateHandler.js":
/*!*************************************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/createEditGraphicsStateHandler.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = createGraphicsStateHandler;

var _PDFViewCtrl = __webpack_require__(/*! PDFViewCtrl */ "PDFViewCtrl");

var PDFViewCtrl = _interopRequireWildcard(_PDFViewCtrl);

var _hammerjs = __webpack_require__(/*! hammerjs */ "hammerjs");

var _hammerjs2 = _interopRequireDefault(_hammerjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by linc on 2019/4/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


function createGraphicsStateHandler(addon, type) {
    var graphicsManager = addon.graphicsManager;
    var typeName = ['', 'text', 'path', 'image', 'shading', 'all'][type];
    var className = typeName ? ['fv__edit-', typeName, '-state-handler'].join('') : '';
    className += ' fv__edit-graphics-state-handler';

    return function (_PDFViewCtrl$IStateHa) {
        _inherits(GraphicsStateHandler, _PDFViewCtrl$IStateHa);

        function GraphicsStateHandler(pdfViewer) {
            _classCallCheck(this, GraphicsStateHandler);

            return _possibleConstructorReturn(this, _PDFViewCtrl$IStateHa.call(this, pdfViewer));
        }

        GraphicsStateHandler.getStateName = function getStateName() {
            return 'edit-' + typeName;
        };

        GraphicsStateHandler.prototype.pageHandler = function pageHandler(pageRender) {
            var _this2 = this;

            this.pageRender = pageRender;
            var pdfPagePromise = pageRender.getPDFPage();
            var $handler = pageRender.$handler;
            var eHandler = $handler[0];
            $handler.addClass(className);

            var hammer = this.hammer = new _hammerjs2.default(eHandler);

            hammer.on('tap', function (e) {
                if (e.target.className.indexOf('fv__shape-control-move-area') != -1) {
                    return Promise.resolve();
                }
                _this2.resetHandler();
                var singlePointer = e.changedPointers[0];
                pdfPagePromise.then(function (page) {
                    return [page, page.reverseDevicePoint([singlePointer.offsetX, singlePointer.offsetY], pageRender.getScale())];
                }).then(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        page = _ref2[0],
                        _ref2$ = _slicedToArray(_ref2[1], 2),
                        x = _ref2$[0],
                        y = _ref2$[1];

                    if (type === 5) {
                        return page.getGraphicsObjectAtPoint([x, y], 5, 0);
                    } else {
                        return page.getGraphicsObjectAtPoint([x, y], 3, type);
                    }
                }).then(function (graphicsObject) {
                    if (!graphicsObject || graphicsObject.type < 1 || graphicsObject.type > 3) {
                        return Promise.reject();
                    }

                    return [graphicsManager.get(graphicsObject), graphicsObject];
                }).then(function (_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 2),
                        GraphicsObjectComponent = _ref4[0],
                        graphicsObject = _ref4[1];

                    return new GraphicsObjectComponent(graphicsObject, pageRender, addon);
                }).then(function (graphicsObjectComponent) {
                    _this2.currentComponet = graphicsObjectComponent;
                    return graphicsObjectComponent.active();
                }).catch(function (e) {
                    e && console.error(e);
                    _this2.currentComponet = null;
                    _this2.pdfViewer.setActiveElement();
                });
            });
        };

        GraphicsStateHandler.prototype.destroyPageHandler = function destroyPageHandler() {
            this.hammer && this.hammer.destroy();
            this.pageRender.$handler.removeClass(className);
            this.resetHandler();
        };

        GraphicsStateHandler.prototype.out = function out() {
            this.destroyPageHandler();
        };

        GraphicsStateHandler.prototype.resetHandler = function resetHandler() {
            if (this.currentComponet) {
                if (this.currentComponet.textCharSure) {
                    this.currentComponet.textCharSure();
                }
                this.currentComponet.unActive();
            }
        };

        return GraphicsStateHandler;
    }(PDFViewCtrl.IStateHandler);
}

/***/ }),

/***/ "./src/pdf-viewer/addon/graphics/createEditTextStateHandler.js":
/*!*********************************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/createEditTextStateHandler.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = createEditTextStateHandler;

var _PDFViewCtrl = __webpack_require__(/*! PDFViewCtrl */ "PDFViewCtrl");

var PDFViewCtrl = _interopRequireWildcard(_PDFViewCtrl);

var _hammerjs = __webpack_require__(/*! hammerjs */ "hammerjs");

var _hammerjs2 = _interopRequireDefault(_hammerjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by linc on 2019/6/19.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


function createEditTextStateHandler(addon) {
    var graphicsManager = addon.graphicsManager;
    var type = 1;
    var typeName = ['', 'text', 'path', 'image', 'shading', 'all'][type];
    var className = typeName ? ['fv__edit-', typeName, '-state-handler'].join('') : '';
    className += ' fv__edit-graphics-state-handler';

    return function (_PDFViewCtrl$IStateHa) {
        _inherits(GraphicsStateHandler, _PDFViewCtrl$IStateHa);

        function GraphicsStateHandler(pdfViewer) {
            _classCallCheck(this, GraphicsStateHandler);

            return _possibleConstructorReturn(this, _PDFViewCtrl$IStateHa.call(this, pdfViewer));
        }

        GraphicsStateHandler.getStateName = function getStateName() {
            return 'edit-' + typeName;
        };

        GraphicsStateHandler.prototype.pageHandler = function pageHandler(pageRender) {
            var _this2 = this;

            this.pageRender = pageRender;
            var pdfPagePromise = pageRender.getPDFPage();
            var $handler = pageRender.$handler;
            var eHandler = $handler[0];
            $handler.addClass(className);

            //let hammer = this.hammer = new Hammer(eHandler);

            var hammer = this.hammer = new _hammerjs2.default.Manager(eHandler, {
                recognizers: [[_hammerjs2.default.Pan, { direction: _hammerjs2.default.DIRECTION_ALL }]]
            });
            // Tap recognizer with minimal 2 taps
            hammer.add(new _hammerjs2.default.Tap({ event: 'doubletap', taps: 2 }));
            // Single tap recognizer
            hammer.add(new _hammerjs2.default.Tap({ event: 'singletap' }));
            // we want to recognize this simulatenous, so a quadrupletap will be detected even while a tap has been recognized.
            hammer.get('doubletap').recognizeWith('singletap');
            // we only want to trigger a tap, when we don't have detected a doubletap
            hammer.get('singletap').requireFailure('doubletap');

            hammer.on('singletap', function (e) {
                _this2.resetHandler();
                var singlePointer = e.changedPointers[0];
                pdfPagePromise.then(function (page) {
                    return [page, page.reverseDevicePoint([singlePointer.offsetX, singlePointer.offsetY], pageRender.getScale())];
                }).then(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        page = _ref2[0],
                        _ref2$ = _slicedToArray(_ref2[1], 2),
                        x = _ref2$[0],
                        y = _ref2$[1];

                    if (type === 5) {
                        return page.getGraphicsObjectAtPoint([x, y], 3, 2).then(function (graphicsObject) {
                            if (graphicsObject) {
                                return graphicsObject;
                            }
                            return page.getGraphicsObjectAtPoint([x, y], 3, 3);
                        });
                    } else {
                        return page.getGraphicsObjectAtPoint([x, y], 3, type);
                    }
                }).then(function (graphicsObject) {
                    if (!graphicsObject) {
                        return Promise.reject();
                    }
                    return [graphicsManager.get(graphicsObject), graphicsObject];
                }).then(function (_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 2),
                        GraphicsObjectComponent = _ref4[0],
                        graphicsObject = _ref4[1];

                    return new GraphicsObjectComponent(graphicsObject, pageRender, addon);
                }).then(function (graphicsObjectComponent) {
                    _this2.currentComponet = graphicsObjectComponent;
                    return graphicsObjectComponent.active();
                }).catch(function (e) {
                    e && console.error(e);
                    _this2.currentComponet = null;
                    _this2.pdfViewer.setActiveElement();
                });
            });
            hammer.on('doubletap', function (e) {
                _this2.resetHandler();
                var singlePointer = e.changedPointers[0];
                pdfPagePromise.then(function (page) {
                    return [page, page.reverseDevicePoint([singlePointer.offsetX, singlePointer.offsetY], pageRender.getScale())];
                }).then(function (_ref5) {
                    var _ref6 = _slicedToArray(_ref5, 2),
                        page = _ref6[0],
                        _ref6$ = _slicedToArray(_ref6[1], 2),
                        x = _ref6$[0],
                        y = _ref6$[1];

                    return page.getGraphicsObjectAtPoint([x, y], 3, type);
                }).then(function (graphicsObject) {
                    if (!graphicsObject) {
                        return Promise.reject();
                    }
                    return [graphicsManager.get(graphicsObject), graphicsObject];
                }).then(function (_ref7) {
                    var _ref8 = _slicedToArray(_ref7, 2),
                        GraphicsObjectComponent = _ref8[0],
                        graphicsObject = _ref8[1];

                    return new GraphicsObjectComponent(graphicsObject, pageRender, addon);
                }).then(function (graphicsObjectComponent) {
                    _this2.currentComponet = graphicsObjectComponent;
                    return graphicsObjectComponent.activeCharEdit();
                }).catch(function (e) {
                    e && console.error(e);
                    _this2.currentComponet = null;
                    _this2.pdfViewer.setActiveElement();
                });
            });
        };

        GraphicsStateHandler.prototype.destroyPageHandler = function destroyPageHandler() {
            this.hammer && this.hammer.destroy();
            this.pageRender.$handler.removeClass(className);
            this.resetHandler();
        };

        GraphicsStateHandler.prototype.out = function out() {
            this.destroyPageHandler();
        };

        GraphicsStateHandler.prototype.resetHandler = function resetHandler() {
            if (this.currentComponet) {
                if (this.currentComponet.textCharSure) {
                    this.currentComponet.textCharSure();
                }
                this.currentComponet.unActive();
            }
        };

        return GraphicsStateHandler;
    }(PDFViewCtrl.IStateHandler);
}

/***/ }),

/***/ "./src/pdf-viewer/addon/graphics/index.js":
/*!************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditGraphicsAddonEvents = exports.EditGraphicsAddon = undefined;

var _EditGraphicsAddon = __webpack_require__(/*! ./EditGraphicsAddon.js */ "./src/pdf-viewer/addon/graphics/EditGraphicsAddon.js");

var _EditGraphicsAddon2 = _interopRequireDefault(_EditGraphicsAddon);

var _Events = __webpack_require__(/*! ./Events.js */ "./src/pdf-viewer/addon/graphics/Events.js");

var _Events2 = _interopRequireDefault(_Events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by linc on 2019/6/26.
 */
exports.EditGraphicsAddon = _EditGraphicsAddon2.default;
exports.EditGraphicsAddonEvents = _Events2.default;

/***/ }),

/***/ "./src/pdf-viewer/addon/graphics/pathPoints.js":
/*!*****************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/pathPoints.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PathPoints = function () {
  function PathPoints() {
    _classCallCheck(this, PathPoints);
  }

  PathPoints.pointsToRect = function pointsToRect(startPoint, endPoint, isDevice) {
    var left = startPoint.x > endPoint.x ? endPoint.x : startPoint.x;
    var right = startPoint.x < endPoint.x ? endPoint.x : startPoint.x;
    var bottom = startPoint.y > endPoint.y ? endPoint.y : startPoint.y;
    var top = startPoint.y < endPoint.y ? endPoint.y : startPoint.y;

    if (isDevice) {
      var temp = bottom;
      bottom = top;
      top = temp;

      if (bottom - top < 1) {
        bottom = top + 1;
        top -= 1;
      }
    } else {
      if (top - bottom < 1) {
        top = bottom + 1;
        bottom -= 1;
      }
    }

    if (right - left < 1) {
      right = left + 1;
      left -= 1;
    }

    return { left: left - 2, top: top + 1, right: right + 2, bottom: bottom - 1 };
  };

  PathPoints.generatePoints = function generatePoints(startPoint, endPoint, type) {
    var x = startPoint.x,
        y = startPoint.y;
    var endX = endPoint.x,
        endY = endPoint.y;


    var dx = endX - x;
    var dy = endY - y;

    switch (type) {
      case 'line':
        return PathPoints.genLinePoints(x, y, dx, dy);
      case 'square':
        return PathPoints.genSquarePoints(x, y, dx, dy);
      case 'circle':
        return PathPoints.genOvalPoints(x, y, dx, dy);
      case 'roundRect':
        return PathPoints.genRoundRectPoints(x, y, dx, dy);
    }
  };

  PathPoints.genLinePoints = function genLinePoints(x, y, dx, dy) {
    var result = [];
    result.push(['m', x, y]);
    result.push(['l', x + dx, y + dy]);
    return result;
  };

  PathPoints.genOvalPoints = function genOvalPoints(x, y, dx, dy) {
    var result = [];
    result.push(['m', x + dx / 2, y]);

    result = result.concat(genQuaterCirclePoint(x + dx / 2, y, dx / 2, dy / 2, 1));
    result = result.concat(genQuaterCirclePoint(x + dx, y + dy / 2, -dx / 2, dy / 2, 0));
    result = result.concat(genQuaterCirclePoint(x + dx / 2, y + dy, -dx / 2, -dy / 2, 1));
    result = result.concat(genQuaterCirclePoint(x, y + dy / 2, dx / 2, -dy / 2, 0));

    result.push(['h', result[0][1], result[0][2]]);
    return result;
  };

  PathPoints.genRoundRectPoints = function genRoundRectPoints(x, y, dx, dy) {
    var result = [];
    var roundOffsetX = 0.2 * dx;
    var roundOffsetY = 0.2 * dy;
    var straightOffsetX = 0.8 * dx;
    var straightOffsetY = 0.8 * dy;

    result.push(['m', x + roundOffsetX, y]);
    result.push(['l', x + straightOffsetX, y]);

    result = result.concat(genQuaterCirclePoint(x + straightOffsetX, y, roundOffsetX, roundOffsetY, 1));

    result.push(['l', x + dx, y + straightOffsetY]);
    result = result.concat(genQuaterCirclePoint(x + dx, y + straightOffsetY, -roundOffsetX, roundOffsetY, 0));

    result.push(['l', x + roundOffsetX, y + dy]);
    result = result.concat(genQuaterCirclePoint(x + roundOffsetX, y + dy, -roundOffsetX, -roundOffsetY, 1));

    result.push(['l', x, y + roundOffsetY]);
    result = result.concat(genQuaterCirclePoint(x, y + roundOffsetY, roundOffsetX, -roundOffsetY, 0));
    result.push(['l', result[0][1], result[0][2]]);
    result.push(['h']);
    return result;
  };

  PathPoints.genSquarePoints = function genSquarePoints(x, y, dx, dy) {
    var result = [];
    result.push(['m', x, y]);
    result.push(['l', x + dx, y]);
    result.push(['l', x + dx, y + dy]);
    result.push(['l', x, y + dy]);
    result.push(['h', x, y]);
    return result;
  };

  return PathPoints;
}();

exports.default = PathPoints;


function genQuaterCirclePoint(x, y, dx, dy, direct) {
  var result = [];
  var factor = 0.5522847498308;
  if (direct) {
    result.push(['c', x + factor * dx, y]);
    result.push(['c', x + dx, y + factor * dy]);
    result.push(['c', x + dx, y + dy]);
  } else {
    result.push(['c', x, y + factor * dy]);
    result.push(['c', x + factor * dx, y + dy]);
    result.push(['c', x + dx, y + dy]);
  }
  return result;
}

/***/ }),

/***/ "./src/pdf-viewer/addon/graphics/pathPreview.js":
/*!******************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/pathPreview.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawShape = exports.getShapeDom = undefined;

var _PDFViewCtrl = __webpack_require__(/*! PDFViewCtrl */ "PDFViewCtrl");

var PDFViewCtrl = _interopRequireWildcard(_PDFViewCtrl);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var $ = PDFViewCtrl.Deps.jQuery;
var getShapeDom = function getShapeDom($parent) {
  var shapeDom = $parent.find('.fv__add-path-preview');

  if (shapeDom.length == 0) {
    shapeDom = $('<canvas class="fv__add-path-preview" style="position: absolute;display:none"></canvas>');
    $parent.append(shapeDom);
  }

  return shapeDom;
};

var drawShape = function drawShape(points, rect, $shapeDom) {
  var canvas = $shapeDom[0];
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, $shapeDom.width(), $shapeDom.height());

  canvas.width = rect.right - rect.left + 4;
  canvas.height = rect.bottom - rect.top + 4;
  ctx.clearRect(0, 0, $shapeDom.width(), $shapeDom.height());

  ctx.lineWidth = 2;
  ctx.strokeStyle = '#5aa';

  ctx.transform(1, 0, 0, 1, -rect.left + 2, -rect.top + 2);

  var berser = [];
  for (var index = 0; index < points.length; index++) {
    switch (points[index][0]) {
      case 'm':
        ctx.moveTo(points[index][1], points[index][2]);
        break;
      case 'l':
        ctx.lineTo(points[index][1], points[index][2]);
        break;
      case 'c':
        berser.push(points[index][1], points[index][2]);
        if (berser.length === 6) {
          ctx.bezierCurveTo(berser[0], berser[1], berser[2], berser[3], berser[4], berser[5]);
          berser = [];
        }
        break;
      case 'h':
        if (berser.length === 4) {
          ctx.bezierCurveTo(berser[0], berser[1], berser[2], berser[3], points[index][1], points[index][2]);
          berser = [];
        } else {
          ctx.lineTo(points[index][1], points[index][2]);
        }
        ctx.closePath();
        break;
    }
  }

  ctx.stroke();

  $shapeDom.css({
    left: rect.left,
    top: rect.top
  }).show();
};

exports.getShapeDom = getShapeDom;
exports.drawShape = drawShape;

/***/ }),

/***/ "./src/pdf-viewer/addon/graphics/style.scss":
/*!**************************************************!*\
  !*** ./src/pdf-viewer/addon/graphics/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/shared/WebFontFace.js":
/*!***********************************!*\
  !*** ./src/shared/WebFontFace.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by linc on 2019/6/20.
 */
var addFont = void 0,
    removeFont = void 0;
var fontCacheMap = {};
if (typeof FontFace === 'function') {
    exports.addFont = addFont = function addFont(name, getWoff) {
        if (fontCacheMap[name]) {
            return fontCacheMap[name];
        }
        return fontCacheMap[name] = new Promise(function (resolve, reject) {
            getWoff().then(function (woff) {
                if (!woff) {
                    reject();
                    fontCacheMap[name];
                    return;
                }
                var fontFace = new FontFace(name, woff.buffer || woff.url);
                fontFace.load().then(function () {
                    document.fonts.add(fontFace);
                    resolve(fontFace);
                });
            }, function () {
                reject();
                delete fontCacheMap[name];
            });
        });
    };
    exports.removeFont = removeFont = function removeFont(name) {
        if (fontCacheMap[name]) {
            fontCacheMap[name].then(function (fontFace) {
                delete fontCacheMap[name];
                document.fonts.delete(fontFace);
            });
        }
    };
} else {
    exports.addFont = addFont = function addFont(name, getWoff) {
        if (fontCacheMap[name]) {
            return fontCacheMap[name];
        }
        return fontCacheMap[name] = new Promise(function (resolve, reject) {
            getWoff().then(function (woff) {
                if (!woff) {
                    reject();
                    delete fontCacheMap[name];
                    throw 'woff is invalid';
                }
                if (woff.buffer) {
                    return URL.createObjectURL(new Blob([woff.buffer], 'application/x-font-woff'));
                }
                return woff.url;
            }).then(function (url) {
                var eStyle = document.createElement('style');
                eStyle.innerHTML = '@font-face{font-family:"' + name + '"; src:url("' + url + '");}';
                document.head.appendChild(eStyle);
                resolve(eStyle);
            });
        });
    };
    exports.removeFont = removeFont = function removeFont(name) {
        if (fontCacheMap[name]) {
            fontCacheMap[name].then(function (eStyle) {
                delete fontCacheMap[name];
                eStyle.parentNode.removeChild(eStyle);
            });
        }
    };
}

exports.addFont = addFont;
exports.removeFont = removeFont;

/***/ }),

/***/ "PDFViewCtrl":
/*!**************************************************************************************************************!*\
  !*** external {"commonjs":"PDFViewCtrl","commonjs2":"PDFViewCtrl","amd":"PDFViewCtrl","root":"PDFViewCtrl"} ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_PDFViewCtrl__;

/***/ }),

/***/ "hammerjs":
/*!************************************************************************************************!*\
  !*** external {"commonjs":"hammerjs","commonjs2":"hammerjs","amd":"hammerjs","root":"Hammer"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_hammerjs__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QREZWaWV3Q3RybF9FZGl0R3JhcGhpY3NBZGRvbk1vZHVsZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vUERGVmlld0N0cmxfRWRpdEdyYXBoaWNzQWRkb25Nb2R1bGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUERGVmlld0N0cmxfRWRpdEdyYXBoaWNzQWRkb25Nb2R1bGUvLi9zcmMvcGRmLXZpZXdlci9hZGRvbi9ncmFwaGljcy9BZGRHcmFwaGljc1N0YXRlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9QREZWaWV3Q3RybF9FZGl0R3JhcGhpY3NBZGRvbk1vZHVsZS8uL3NyYy9wZGYtdmlld2VyL2FkZG9uL2dyYXBoaWNzL0FkZEltYWdlU3RhdGVIYW5kbGVyLmpzIiwid2VicGFjazovL1BERlZpZXdDdHJsX0VkaXRHcmFwaGljc0FkZG9uTW9kdWxlLy4vc3JjL3BkZi12aWV3ZXIvYWRkb24vZ3JhcGhpY3MvRWRpdEdyYXBoaWNzQWRkb24uanMiLCJ3ZWJwYWNrOi8vUERGVmlld0N0cmxfRWRpdEdyYXBoaWNzQWRkb25Nb2R1bGUvLi9zcmMvcGRmLXZpZXdlci9hZGRvbi9ncmFwaGljcy9FdmVudHMuanMiLCJ3ZWJwYWNrOi8vUERGVmlld0N0cmxfRWRpdEdyYXBoaWNzQWRkb25Nb2R1bGUvLi9zcmMvcGRmLXZpZXdlci9hZGRvbi9ncmFwaGljcy9HcmFwaGljc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vUERGVmlld0N0cmxfRWRpdEdyYXBoaWNzQWRkb25Nb2R1bGUvLi9zcmMvcGRmLXZpZXdlci9hZGRvbi9ncmFwaGljcy9HcmFwaGljc09iamVjdC5qcyIsIndlYnBhY2s6Ly9QREZWaWV3Q3RybF9FZGl0R3JhcGhpY3NBZGRvbk1vZHVsZS8uL3NyYy9wZGYtdmlld2VyL2FkZG9uL2dyYXBoaWNzL0ltYWdlT2JqZWN0LmpzIiwid2VicGFjazovL1BERlZpZXdDdHJsX0VkaXRHcmFwaGljc0FkZG9uTW9kdWxlLy4vc3JjL3BkZi12aWV3ZXIvYWRkb24vZ3JhcGhpY3MvUGF0aE9iamVjdC5qcyIsIndlYnBhY2s6Ly9QREZWaWV3Q3RybF9FZGl0R3JhcGhpY3NBZGRvbk1vZHVsZS8uL3NyYy9wZGYtdmlld2VyL2FkZG9uL2dyYXBoaWNzL1NoYWRpbmdPYmplY3QuanMiLCJ3ZWJwYWNrOi8vUERGVmlld0N0cmxfRWRpdEdyYXBoaWNzQWRkb25Nb2R1bGUvLi9zcmMvcGRmLXZpZXdlci9hZGRvbi9ncmFwaGljcy9UZXh0T2JqZWN0LmpzIiwid2VicGFjazovL1BERlZpZXdDdHJsX0VkaXRHcmFwaGljc0FkZG9uTW9kdWxlLy4vc3JjL3BkZi12aWV3ZXIvYWRkb24vZ3JhcGhpY3MvY3JlYXRlQWRkVGV4dE9iamVjdFN0YXRlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9QREZWaWV3Q3RybF9FZGl0R3JhcGhpY3NBZGRvbk1vZHVsZS8uL3NyYy9wZGYtdmlld2VyL2FkZG9uL2dyYXBoaWNzL2NyZWF0ZUVkaXRHcmFwaGljc1N0YXRlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9QREZWaWV3Q3RybF9FZGl0R3JhcGhpY3NBZGRvbk1vZHVsZS8uL3NyYy9wZGYtdmlld2VyL2FkZG9uL2dyYXBoaWNzL2NyZWF0ZUVkaXRUZXh0U3RhdGVIYW5kbGVyLmpzIiwid2VicGFjazovL1BERlZpZXdDdHJsX0VkaXRHcmFwaGljc0FkZG9uTW9kdWxlLy4vc3JjL3BkZi12aWV3ZXIvYWRkb24vZ3JhcGhpY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vUERGVmlld0N0cmxfRWRpdEdyYXBoaWNzQWRkb25Nb2R1bGUvLi9zcmMvcGRmLXZpZXdlci9hZGRvbi9ncmFwaGljcy9wYXRoUG9pbnRzLmpzIiwid2VicGFjazovL1BERlZpZXdDdHJsX0VkaXRHcmFwaGljc0FkZG9uTW9kdWxlLy4vc3JjL3BkZi12aWV3ZXIvYWRkb24vZ3JhcGhpY3MvcGF0aFByZXZpZXcuanMiLCJ3ZWJwYWNrOi8vUERGVmlld0N0cmxfRWRpdEdyYXBoaWNzQWRkb25Nb2R1bGUvLi9zcmMvcGRmLXZpZXdlci9hZGRvbi9ncmFwaGljcy9zdHlsZS5zY3NzP2MyNTAiLCJ3ZWJwYWNrOi8vUERGVmlld0N0cmxfRWRpdEdyYXBoaWNzQWRkb25Nb2R1bGUvLi9zcmMvc2hhcmVkL1dlYkZvbnRGYWNlLmpzIiwid2VicGFjazovL1BERlZpZXdDdHJsX0VkaXRHcmFwaGljc0FkZG9uTW9kdWxlL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJQREZWaWV3Q3RybFwiLFwiY29tbW9uanMyXCI6XCJQREZWaWV3Q3RybFwiLFwiYW1kXCI6XCJQREZWaWV3Q3RybFwiLFwicm9vdFwiOlwiUERGVmlld0N0cmxcIn0iLCJ3ZWJwYWNrOi8vUERGVmlld0N0cmxfRWRpdEdyYXBoaWNzQWRkb25Nb2R1bGUvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImhhbW1lcmpzXCIsXCJjb21tb25qczJcIjpcImhhbW1lcmpzXCIsXCJhbWRcIjpcImhhbW1lcmpzXCIsXCJyb290XCI6XCJIYW1tZXJcIn0iXSwibmFtZXMiOlsiUERGVmlld0N0cmwiLCJfYWRkb24iLCJfdHlwZSIsIklTdGF0ZUhhbmRsZXIiLCJfY2FuQWRkIiwib2ZmSG9vayIsImFkZERlc3Ryb3lIb29rIiwic2VsZWN0b3IiLCJ0eXBlIiwiaGFuZGxlciIsIm9uIiwicHVzaCIsImRlc3Ryb3lIb29rIiwiaW5kZXgiLCJsZW5ndGgiLCJlbGUiLCJvZmYiLCJBZGRHcmFwaGljc1N0YXRlSGFuZGxlciIsInBkZlZpZXdlciIsInNldEFkZG9uIiwiYWRkb24iLCJnZXRTdGF0ZU5hbWUiLCJzZXRQYXRoVHlwZSIsInBhZ2VIYW5kbGVyIiwicGFnZVJlbmRlciIsIiRoYW5kbGVyIiwiYWRkQ2xhc3MiLCJjdXJzb3JTdHlsZSIsInNoYXBlRG9tIiwiZUhhbmRsZXIiLCJoYW1tZXIiLCJIYW1tZXIiLCJNYW5hZ2VyIiwicmVjb2duaXplcnMiLCJQYW4iLCJkaXJlY3Rpb24iLCJESVJFQ1RJT05fQUxMIiwic3RhcnRQb2ludCIsImVuZFBvaW50IiwibW91c2Vkb3duIiwiZSIsInRhcmdldCIsImNsYXNzTmFtZSIsImluZGV4T2YiLCJnZXREZXZpY2VQYWdlUG9pbnQiLCJ4IiwiZGVsdGFYIiwieSIsImRlbHRhWSIsInBkZlN0YXJ0UG9pbnQiLCJwYWdlIiwicmV2ZXJzZURldmljZVBvaW50IiwiZ2V0U2NhbGUiLCJwZGZFbmRQb2ludCIsInh5UG9pbnRTdGFydCIsInh5UG9pbnRFbmQiLCJwb2ludHMiLCJQYXRoUG9pbnRzIiwiZ2VuZXJhdGVQb2ludHMiLCJyZWN0IiwicG9pbnRzVG9SZWN0IiwiYWRkR3JhcGhpY3NPYmplY3QiLCJ0aGVuIiwiZ3JhcGhpY3NPYmplY3QiLCJoaWRlIiwiUHJvbWlzZSIsInJlamVjdCIsImdyYXBoaWNzTWFuYWdlciIsImdldCIsIkdyYXBoaWNzT2JqZWN0Q29tcG9uZW50IiwiZ3JhcGhpY3NPYmplY3RDb21wb25lbnQiLCJjdXJyZW50Q29tcG9uZXQiLCJhY3RpdmUiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsInNldEFjdGl2ZUVsZW1lbnQiLCJkZXZpY2VSZWN0IiwicGF0aGVzIiwiZGVzdHJveVBhZ2VIYW5kbGVyIiwiZGVzdHJveSIsInJlc2V0SGFuZGxlciIsIm91dCIsImVsZW0iLCJldmVudCIsInBhZ2VSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic3JjRXZlbnQiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiLCIkIiwiRGVwcyIsImpRdWVyeSIsIkV2ZW50cyIsIkFkZEltYWdlU3RhdGVIYW5kbGVyIiwidGhhdCIsIlRhcCIsIiRpbWFnZSIsImhlaWdodCIsIndpZHRoIiwiYXBwZW5kIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwiZXZlbnRFbWl0dGVyIiwiYWRkRWRpdEltYWdlIiwibG9hZEZpbGUiLCJmaWxlIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicHJvcCIsInNyYyIsInJlc3VsdCIsImltZyIsIkltYWdlIiwiY3NzIiwicG9pbnQiLCJyaWdodCIsImJvdHRvbSIsImdldFBERlBhZ2UiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImJ1ZmZlciIsIlVpbnQ4QXJyYXkiLCJyZXZlcnNlRGV2aWNlUmVjdCIsImFkZEltYWdlIiwiZ2V0R3JhcGhpY3NPYmplY3RBdFBvaW50IiwiZ2V0U3RhdGVIYW5kbGVyTWFuYWdlciIsInN3aXRjaFRvIiwicmVtb3ZlIiwiZW1wdHkiLCJyZW1vdmVDbGFzcyIsIkVkaXRHcmFwaGljc0FkZG9uIiwiR3JhcGhpY3NNYW5hZ2VyIiwiaW5pdCIsIkVkaXRUZXh0U3RhdGVIYW5kbGVyIiwiRWRpdFBhdGhTdGF0ZUhhbmRsZXIiLCJFZGl0SW1hZ2VTdGF0ZUhhbmRsZXIiLCJFZGl0QWxsU3RhdGVIYW5kbGVyIiwiQWRkVGV4dE9iamVjdFN0YXRlSGFuZGxlciIsInN0YXRlSGFuZGxlck1hbmFnZXIiLCJyZWdpc3RlciIsImdldEdyYXBoaWNzTWFuYWdlciIsIkdyYXBoaWNzRXZlbnRzIiwidGV4dE9iamVjdEFjdGl2ZSIsInRleHRPYmplY3RVbkFjdGl2ZSIsImFkZFRleHRPYmplY3RQYXJhbVRyYW5zZmVyIiwiR3JhcGhpY3NWaWV3TWFuYWdlciIsIm1hdGNoUnVsZXMiLCJyZWdpc3Rlck1hdGNoUnVsZSIsIm1hdGNoUnVsZSIsInVuUmVnaXN0ZXJNYXRjaFJ1bGUiLCJzcGxpY2UiLCJvYmplY3QiLCJkZWZhdWx0Q2xhc3MiLCJnZXREZWZhdWx0IiwiaSIsIk1hdGNoQW5ub3QiLCJnZXRUeXBlIiwiVGV4dE9iamVjdENvbXBvbmVudCIsIlBhdGhPYmplY3RDb21wb25lbnQiLCJJbWFnZU9iamVjdENvbXBvbmVudCIsImJyb3dzZXIiLCJzaGFyZWQiLCJwdFB4UmF0aW8iLCJkZXBlbmRlbmNlcyIsImluaXRVSSIsImNvbnRleHRNZW51Q29uZmlnIiwiZ2V0Q29udGV4dE1lbnVDb25maWciLCJjb250ZXh0TWVudSIsInRyYW5zbGF0ZUNvbnRleHRNZW51TmFtZSIsImlzQWN0aXZlIiwidXBkYXRlU2hhcGVDb250cm9sIiwiYmluZEV2ZW50IiwiRXJyb3IiLCJyZW1vdmVHcmFwaGljT2JqZWN0IiwiX19vZmZfX2RlbGV0ZV9fZXZlbnRfXyIsImdldEtleWJvYXJkRXZlbnRCaW5kZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJ1bkJpbmRFdmVudCIsImNvbmZpZyIsIml0ZW1zIiwiaTE4biIsImoiLCJpdGVtIiwibmFtZUkxOG5LZXkiLCJuYW1lIiwidCIsImJvdW5kYXJ5IiwiZ2V0Qm91bmRhcnkiLCJib3giLCJfZ2V0U2hhcGVDb250cm9sbGVyQm91bmRhcnlCb3giLCJzaGFwZUNvbnRyb2wiLCJ1bkFjdGl2ZSIsImRlYWN0aXZlIiwiem9vbVRvU3VjY2VzcyIsImFmdGVyWm9vbSIsImdldE1vZGVsIiwic2NhbGUiLCJwYWdlV2lkdGgiLCJnZXRQeFdpZHRoIiwicGFnZUhlaWdodCIsImdldFB4SGVpZ2h0Iiwicm90YXRlIiwicGRmUmVjdCIsImdldFJlY3QiLCJnZXREZXZpY2VSZWN0IiwiU2hhcGVDb250cm9sIiwic3RhcnQiLCJzaGFwZSIsImNvbnRleHQiLCJhY3Rpb24iLCJvblN0YXJ0VXBkYXRlU2hhcGUiLCJtb3ZpbmciLCJvZmZzZXRYIiwib2Zmc2V0WSIsIm9uU2hhcGVNb3ZpbmciLCJ1cGRhdGUiLCJvblNoYXBlVXBkYXRpbmciLCJlbmQiLCJvblNoYXBlVXBkYXRlRW5kIiwicmVzaXphYmxlIiwiZW5hYmxlRGlhZ29uYWxseSIsImVuYWJsZUZyYW1lIiwicHJldmlld2VyIiwidWkiLCJxdWVyeVNlbGVjdG9yIiwic2hvdyIsImdldEJpdG1hcCIsImltYWdlRGF0YSIsImdldFByZXZpZXdlckNvbnRleHQiLCJjYW52YXMiLCJhdHRyIiwiY3JlYXRlSW1hZ2VEYXRhIiwiZGF0YSIsIlVpbnQ4Q2xhbXBlZEFycmF5Iiwic2V0IiwicHV0SW1hZ2VEYXRhIiwiT2JqZWN0IiwiYXNzaWduIiwic2V0TWF0cml4Iiwic2V0Q29sb3IiLCJjb2xvciIsInNldEJvcmRlckNvbG9yIiwic2V0Qm9yZGVyU3R5bGUiLCJzdHlsZSIsInBhcmFtIiwic2V0T3BhY2l0eSIsIm9wYWNpdHkiLCJzZXRGaWxsQ29sb3IiLCJmaWxsY29sb3IiLCJzZXRCb3JkZXJXaWR0aCIsImJvcmRlcldpZHRoIiwiZ2V0RGVmYXVsdENvbnRleHRNZW51Q29uZmlnIiwiZGVmYXVsdENvbnRleHRNZW51Q29uZmlnIiwic2V0Q29udGV4dE1lbnVDb25maWciLCJvblJvdGF0ZSIsInJvdGF0YWJsZSIsImRlZ3JlZSIsInNldFJvdGF0aW9uIiwicHJvcGVydGllcyIsImNhbGxiYWNrIiwidHJpZ2dlciIsImtleSIsInNob3dQcm9wZXJ0aWVzRGlhbG9nIiwiZ2V0UHJvcGVydHlPcHRpb25zIiwiZ2V0T3BhY2l0eSIsImJvcmRlclN0eWxlIiwiYWN0aXZlUHJvcGVydGllc0RpYWxvZyIsInNldFZpZXdlckNvbXBvbmVudCIsIiRwcm9wZXJ0aWVzQ29udHJvbCIsIlByb3BlcnRpZXNDb250cm9sIiwiaGlkZVByb3BlcnRpZXNEaWFsb2ciLCJjbG9zZSIsImdldEJvcmRlckNvbG9yIiwibmVlZFN0cm9rZSIsInRvU3RyaW5nIiwic3Vic3RyIiwiZmlsbENvbG9yIiwiZ2V0RmlsbENvbG9yIiwiZ2V0RmlsbE1vZGUiLCJnZXRCb3JkZXJXaWR0aCIsImJvcmRlclRyYW5zcGFyZW50IiwiJHRpcCIsImFwcGVuZFRvIiwicmVjdEhhbW1lciIsIlByZXNzIiwibW91c2VQb3MiLCJwYXJlbnQiLCJvYmplY3RQb3MiLCJodG1sIiwidG9GaXhlZCIsInByb3BlcnRpZXNDb250cm9sIiwiU2hhZGluZ09iamVjdENvbXBvbmVudCIsInVuZGVmaW5lZCIsImFmdGVyIiwiYWN0aXZlQ2hhckVkaXQiLCJyZUFjdGl2ZSIsImdldEV2ZW50RW1pdHRlciIsImVtaXQiLCJ1bkFjdGl2ZUNoYXJFZGl0IiwiJGNoYXJFZGl0Q29udGFpbmVyIiwiaW5pdENoYXJFZGl0Q29udGFpbmVyIiwiJGNvbnRhaW5lciIsIiRtYXNrTGF5ZXIiLCJmaW5kIiwiJGNoYXJJbnB1dCIsImVDaGFySW5wdXQiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJjaGFyIiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJzZXRUZXh0Q2hhciIsInRleHRPYmplY3QiLCJ0ZXh0UmVjdCIsImFsbCIsInBkZlBhZ2UiLCJ0ZXh0RGV2aWNlUmVjdCIsImZvY3VzIiwiaW5mbyIsInRleHRTdGF0ZSIsInRleHQiLCJmb250U2l6ZSIsInNpemUiLCJtYXRyaXgiLCJjb25jYXQiLCJkaWZmU2NhbGUiLCJmb250RmFtaWx5IiwiZm9udCIsImJhc2VOYW1lIiwiZmFtaWx5TmFtZSIsIm5hbWVLZXkiLCJqb2luIiwiZm9udFdlaWdodCIsImlzQm9sZCIsImZvbnRTdHlsZSIsImlzSXRhbGljIiwidHJhbnNmb3JtIiwiY29udmVydEZyb21OdW1iZXJUb0hleCIsImdldFdvZmYiLCJiaW5kIiwic2V0VGV4dCIsImdldFRleHRDaGFyIiwiZ2V0VGV4dCIsInRleHRDaGFyU3VyZSIsInJlc29sdmUiLCJoZXgiLCJsZW4iLCJjcmVhdGVBZGRUZXh0T2JqZWN0U3RhdGVIYW5kbGVyIiwicGRmUGFnZVByb21pc2UiLCJzaW5nbGVQb2ludGVyIiwiY2hhbmdlZFBvaW50ZXJzIiwiYWRkUGFyYW1zIiwib3JpZ2luUG9zaXRpb24iLCJhZGRUZXh0T2JqZWN0UGFyYW1UcmFuc2ZlckJpbmQiLCJwYXJhbXMiLCJjcmVhdGVHcmFwaGljc1N0YXRlSGFuZGxlciIsInR5cGVOYW1lIiwiY3JlYXRlRWRpdFRleHRTdGF0ZUhhbmRsZXIiLCJhZGQiLCJ0YXBzIiwicmVjb2duaXplV2l0aCIsInJlcXVpcmVGYWlsdXJlIiwiRWRpdEdyYXBoaWNzQWRkb25FdmVudHMiLCJpc0RldmljZSIsInRlbXAiLCJlbmRYIiwiZW5kWSIsImR4IiwiZHkiLCJnZW5MaW5lUG9pbnRzIiwiZ2VuU3F1YXJlUG9pbnRzIiwiZ2VuT3ZhbFBvaW50cyIsImdlblJvdW5kUmVjdFBvaW50cyIsImdlblF1YXRlckNpcmNsZVBvaW50Iiwicm91bmRPZmZzZXRYIiwicm91bmRPZmZzZXRZIiwic3RyYWlnaHRPZmZzZXRYIiwic3RyYWlnaHRPZmZzZXRZIiwiZGlyZWN0IiwiZmFjdG9yIiwiZ2V0U2hhcGVEb20iLCIkcGFyZW50IiwiZHJhd1NoYXBlIiwiJHNoYXBlRG9tIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiYmVyc2VyIiwibW92ZVRvIiwibGluZVRvIiwiYmV6aWVyQ3VydmVUbyIsImNsb3NlUGF0aCIsInN0cm9rZSIsImFkZEZvbnQiLCJyZW1vdmVGb250IiwiZm9udENhY2hlTWFwIiwiRm9udEZhY2UiLCJ3b2ZmIiwiZm9udEZhY2UiLCJ1cmwiLCJsb2FkIiwiZG9jdW1lbnQiLCJmb250cyIsImRlbGV0ZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkJsb2IiLCJlU3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiaGVhZCIsImFwcGVuZENoaWxkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFD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UEQ7QUFRSDs7UUFHR2QsTyxHQUFBQSxPO1FBQ0FDLFUsR0FBQUEsVTs7Ozs7Ozs7Ozs7QUN4RUoseUQ7Ozs7Ozs7Ozs7O0FDQUEsc0QiLCJmaWxlIjoiRWRpdEdyYXBoaWNzQWRkb25Nb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJQREZWaWV3Q3RybFwiKSwgcmVxdWlyZShcImhhbW1lcmpzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlBERlZpZXdDdHJsXCIsIFwiaGFtbWVyanNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUERGVmlld0N0cmxfRWRpdEdyYXBoaWNzQWRkb25Nb2R1bGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJQREZWaWV3Q3RybFwiKSwgcmVxdWlyZShcImhhbW1lcmpzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJQREZWaWV3Q3RybF9FZGl0R3JhcGhpY3NBZGRvbk1vZHVsZVwiXSA9IGZhY3Rvcnkocm9vdFtcIlBERlZpZXdDdHJsXCJdLCByb290W1wiSGFtbWVyXCJdKTtcbn0pKHNlbGYsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfUERGVmlld0N0cmxfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9oYW1tZXJqc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGRmLXZpZXdlci9hZGRvbi9ncmFwaGljcy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBsaW5jIG9uIDIwMTkvNC8yNi5cbiAqL1xuaW1wb3J0ICogYXMgUERGVmlld0N0cmwgZnJvbSAnUERGVmlld0N0cmwnO1xuaW1wb3J0IEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5pbXBvcnQgUGF0aFBvaW50cyBmcm9tICcuL3BhdGhQb2ludHMnO1xuaW1wb3J0IHtnZXRTaGFwZURvbSxkcmF3U2hhcGV9IGZyb20gJy4vcGF0aFByZXZpZXcnO1xuXG5sZXQgX2FkZG9uPW51bGw7XG5cbmxldCBfdHlwZSA9IDA7XG5jb25zdCBJU3RhdGVIYW5kbGVyID0gUERGVmlld0N0cmwuSVN0YXRlSGFuZGxlcjtcbmxldCBfY2FuQWRkPWZhbHNlO1xuXG5sZXQgb2ZmSG9vaz1bXVxuXG5jb25zdCBhZGREZXN0cm95SG9vaz0oc2VsZWN0b3IsdHlwZSxoYW5kbGVyKT0+e1xuICBzZWxlY3Rvci5vbih0eXBlLGhhbmRsZXIpO1xuICBvZmZIb29rLnB1c2goW3NlbGVjdG9yLHR5cGUsaGFuZGxlcl0pO1xufVxuXG5jb25zdCBkZXN0cm95SG9vaz0oKT0+e1xuICBmb3IobGV0IGluZGV4PTA7aW5kZXg8b2ZmSG9vay5sZW5ndGg7aW5kZXgrKyl7XG4gICAgbGV0IGVsZSA9IG9mZkhvb2tbaW5kZXhdO1xuICAgIGVsZVswXS5vZmYoZWxlWzFdLGVsZVsyXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkR3JhcGhpY3NTdGF0ZUhhbmRsZXIgZXh0ZW5kcyBJU3RhdGVIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IgKHBkZlZpZXdlcikge1xuICAgIHN1cGVyIChwZGZWaWV3ZXIpO1xuICB9XG4gIHN0YXRpYyBzZXRBZGRvbihhZGRvbil7XG4gICAgX2FkZG9uPWFkZG9uXG4gIH1cbiAgc3RhdGljIGdldFN0YXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdhZGQtcGF0aC1vYmplY3QnO1xuICB9XG4gIHN0YXRpYyBzZXRQYXRoVHlwZSAodHlwZSA9IDApIHtcbiAgICBfdHlwZSA9IHR5cGU7XG4gIH1cbiAgcGFnZUhhbmRsZXIgKHBhZ2VSZW5kZXIpIHtcbiAgICB0aGlzLnBhZ2VSZW5kZXIgPSBwYWdlUmVuZGVyO1xuXG4gICAgbGV0ICRoYW5kbGVyID0gcGFnZVJlbmRlci4kaGFuZGxlcjtcbiAgICAkaGFuZGxlci5hZGRDbGFzcyAoJ2Z2X19jcmVhdGUtY2FsbG91dC1zdGF0ZS1oYW5kbGVyICcgKyB0aGlzLmN1cnNvclN0eWxlKTtcbiAgICB0aGlzLnNoYXBlRG9tID0gZ2V0U2hhcGVEb20oJGhhbmRsZXIpXG5cbiAgICBsZXQgZUhhbmRsZXIgPSAkaGFuZGxlclswXTtcbiAgICBsZXQgaGFtbWVyID0gKHRoaXMuaGFtbWVyID0gbmV3IEhhbW1lci5NYW5hZ2VyIChlSGFuZGxlciwge1xuICAgICAgcmVjb2duaXplcnM6IFtbSGFtbWVyLlBhbiwge2RpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEx9XV0sXG4gICAgfSkpO1xuXG4gICAgbGV0IHN0YXJ0UG9pbnQ7XG4gICAgbGV0IGVuZFBvaW50O1xuXG4gICAgY29uc3QgbW91c2Vkb3duID0gZT0+e1xuICAgICAgX2NhbkFkZCA9IGUudGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCdmdl9fcGRmLXBhZ2UtaGFuZGxlci1jb250YWluZXInKSE9LTE7XG4gICAgfVxuICAgIGFkZERlc3Ryb3lIb29rKCRoYW5kbGVyLCdtb3VzZWRvd24nLG1vdXNlZG93bik7XG4gICAgYWRkRGVzdHJveUhvb2soJGhhbmRsZXIsJ3RvdWNoc3RhcnQnLG1vdXNlZG93bik7XG5cbiAgICBoYW1tZXJcbiAgICAgIC5vbiAoJ3BhbnN0YXJ0JywgZSA9PiB7XG4gICAgICAgIGlmKCFfY2FuQWRkKXtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRQb2ludCA9IGdldERldmljZVBhZ2VQb2ludCAoZUhhbmRsZXIsIGUpO1xuICAgICAgfSlcbiAgICAgIC5vbiAoJ3BhbmVuZCcsIGUgPT4ge1xuICAgICAgICBpZighc3RhcnRQb2ludCl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVuZFBvaW50ID0ge1xuICAgICAgICAgIHg6IHN0YXJ0UG9pbnQueCArIGUuZGVsdGFYLFxuICAgICAgICAgIHk6IHN0YXJ0UG9pbnQueSArIGUuZGVsdGFZLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBwZGZTdGFydFBvaW50ID0gdGhpcy5wYWdlUmVuZGVyLnBhZ2UucmV2ZXJzZURldmljZVBvaW50IChcbiAgICAgICAgICBbc3RhcnRQb2ludC54LCBzdGFydFBvaW50LnldLFxuICAgICAgICAgIHRoaXMucGFnZVJlbmRlci5nZXRTY2FsZSAoKVxuICAgICAgICApO1xuICAgICAgICBsZXQgcGRmRW5kUG9pbnQgPSB0aGlzLnBhZ2VSZW5kZXIucGFnZS5yZXZlcnNlRGV2aWNlUG9pbnQgKFxuICAgICAgICAgIFtlbmRQb2ludC54LCBlbmRQb2ludC55XSxcbiAgICAgICAgICB0aGlzLnBhZ2VSZW5kZXIuZ2V0U2NhbGUgKClcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB4eVBvaW50U3RhcnQgPXtcbiAgICAgICAgICB4OnBkZlN0YXJ0UG9pbnRbMF0sXG4gICAgICAgICAgeTpwZGZTdGFydFBvaW50WzFdXG4gICAgICAgIH07XG4gICAgICAgIGxldCB4eVBvaW50RW5kPXtcbiAgICAgICAgICB4OnBkZkVuZFBvaW50WzBdLFxuICAgICAgICAgIHk6cGRmRW5kUG9pbnRbMV1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHBvaW50cyA9IFBhdGhQb2ludHMuZ2VuZXJhdGVQb2ludHMgKFxuICAgICAgICAgIHh5UG9pbnRTdGFydCxcbiAgICAgICAgICB4eVBvaW50RW5kLFxuICAgICAgICAgIF90eXBlXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IHJlY3QgPSBQYXRoUG9pbnRzLnBvaW50c1RvUmVjdCh4eVBvaW50U3RhcnQsXG4gICAgICAgICAgeHlQb2ludEVuZCk7XG5cbiAgICAgICAgdGhpcy5wYWdlUmVuZGVyLnBhZ2VcbiAgICAgICAgICAuYWRkR3JhcGhpY3NPYmplY3QgKHtcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICBwb2ludHMsXG4gICAgICAgICAgICByZWN0XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbiAoKGdyYXBoaWNzT2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAvL3RoaXMucGFnZVJlbmRlci5yZWRyYXdDb250ZW50ICgpO1xuICAgICAgICAgICAgc3RhcnRQb2ludCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNoYXBlRG9tLmhpZGUgKCk7XG4gICAgICAgICAgICByZXR1cm4gZ3JhcGhpY3NPYmplY3Q7XG4gICAgICAgICAgLy99KS50aGVuKF89PntcbiAgICAgICAgICAvLyAgcmV0dXJuIHRoaXMucGFnZVJlbmRlci5wYWdlLmdldEdyYXBoaWNzT2JqZWN0QXRQb2ludChbcmVjdC5sZWZ0LCByZWN0LmJvdHRvbV0sIDMsIDIpO1xuICAgICAgICAgIH0pLnRoZW4oKGdyYXBoaWNzT2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWdyYXBoaWNzT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm5bX2FkZG9uLmdyYXBoaWNzTWFuYWdlci5nZXQoZ3JhcGhpY3NPYmplY3QpLCBncmFwaGljc09iamVjdF07XG4gICAgICAgIH0pLnRoZW4oKFtHcmFwaGljc09iamVjdENvbXBvbmVudCwgZ3JhcGhpY3NPYmplY3RdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEdyYXBoaWNzT2JqZWN0Q29tcG9uZW50KGdyYXBoaWNzT2JqZWN0LCBwYWdlUmVuZGVyLCBfYWRkb24pO1xuICAgICAgICB9KS50aGVuKChncmFwaGljc09iamVjdENvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29tcG9uZXQgPSBncmFwaGljc09iamVjdENvbXBvbmVudDtcbiAgICAgICAgICAgIHJldHVybiBncmFwaGljc09iamVjdENvbXBvbmVudC5hY3RpdmUoKTtcbiAgICAgICAgfSkuY2F0Y2goZT0+e1xuICAgICAgICAgICAgZSYmY29uc29sZS5lcnJvcihlKTsgXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDb21wb25ldD1udWxsO1xuICAgICAgICAgICAgdGhpcy5wZGZWaWV3ZXIuc2V0QWN0aXZlRWxlbWVudCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAub24gKCdwYW5tb3ZlJywgZSA9PiB7XG4gICAgICAgIGlmIChzdGFydFBvaW50KSB7XG4gICAgICAgICAgZW5kUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBzdGFydFBvaW50LnggKyBlLmRlbHRhWCxcbiAgICAgICAgICAgIHk6IHN0YXJ0UG9pbnQueSArIGUuZGVsdGFZLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBsZXQgZGV2aWNlUmVjdCA9IFBhdGhQb2ludHMucG9pbnRzVG9SZWN0IChzdGFydFBvaW50LCBlbmRQb2ludCwgdHJ1ZSk7XG5cbiAgICAgICAgICBsZXQgcGF0aGVzID0gUGF0aFBvaW50cy5nZW5lcmF0ZVBvaW50cyAoc3RhcnRQb2ludCwgZW5kUG9pbnQsIF90eXBlKTtcbiAgICAgICAgICBkcmF3U2hhcGUgKHBhdGhlcywgZGV2aWNlUmVjdCwgdGhpcy5zaGFwZURvbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4gIGRlc3Ryb3lQYWdlSGFuZGxlciAoKSB7XG4gICAgdGhpcy5oYW1tZXIgJiYgdGhpcy5oYW1tZXIuZGVzdHJveSAoKTtcbiAgICBkZXN0cm95SG9vaygpO1xuICAgIHRoaXMucmVzZXRIYW5kbGVyICgpO1xuICB9XG4gIG91dCAoKSB7XG4gICAgdGhpcy5kZXN0cm95UGFnZUhhbmRsZXIgKCk7XG4gIH1cbiAgcmVzZXRIYW5kbGVyICgpIHtcbiAgICB0aGlzLmN1cnJlbnRDb21wb25ldCAmJiB0aGlzLmN1cnJlbnRDb21wb25ldC5kZXN0cm95ICgpO1xuICB9XG59XG5cbmNvbnN0IGdldERldmljZVBhZ2VQb2ludCA9IChlbGVtLCBldmVudCkgPT4ge1xuICBsZXQgcGFnZVJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAoKTtcbiAgbGV0IHNyY0V2ZW50ID0gZXZlbnQuc3JjRXZlbnQ7XG4gIHJldHVybiB7XG4gICAgeDogc3JjRXZlbnQuY2xpZW50WCAtIHBhZ2VSZWN0LmxlZnQgLSBldmVudC5kZWx0YVgsXG4gICAgeTogc3JjRXZlbnQuY2xpZW50WSAtIHBhZ2VSZWN0LnRvcCAtIGV2ZW50LmRlbHRhWSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgKiBhcyBQREZWaWV3Q3RybCBmcm9tICdQREZWaWV3Q3RybCc7XG5cbmNvbnN0ICQgPSBQREZWaWV3Q3RybC5EZXBzLmpRdWVyeTtcbmNvbnN0IElTdGF0ZUhhbmRsZXIgPSBQREZWaWV3Q3RybC5JU3RhdGVIYW5kbGVyO1xuY29uc3QgRXZlbnRzID0gUERGVmlld0N0cmwuRXZlbnRzO1xubGV0IF9hZGRvbiA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZEltYWdlU3RhdGVIYW5kbGVyIGV4dGVuZHMgSVN0YXRlSGFuZGxlciB7XG4gICAgc3RhdGljIHNldEFkZG9uKGFkZG9uKSB7XG4gICAgICAgIF9hZGRvbiA9IGFkZG9uXG4gICAgfVxuXG4gICAgc3RhdGljIGdldFN0YXRlTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdhZGQtaW1hZ2Utb2JqZWN0JztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwZGZWaWV3ZXIpIHtcbiAgICAgICAgc3VwZXIocGRmVmlld2VyKTtcbiAgICB9XG5cbiAgICBwYWdlSGFuZGxlcihwYWdlUmVuZGVyKSB7XG4gICAgICAgIGxldCB0aGF0PXRoaXM7XG4gICAgICAgIHRoaXMucGFnZVJlbmRlciA9IHBhZ2VSZW5kZXI7XG4gICAgICAgIGxldCAkaGFuZGxlciA9IHRoaXMuJGhhbmRsZXIgPSBwYWdlUmVuZGVyLiRoYW5kbGVyO1xuICAgICAgICBsZXQgZUhhbmRsZXIgPSAkaGFuZGxlclswXTtcbiAgICAgICAgbGV0IGhhbW1lciA9IHRoaXMuaGFtbWVyID0gbmV3IEhhbW1lci5NYW5hZ2VyKGVIYW5kbGVyLCB7XG4gICAgICAgICAgICByZWNvZ25pemVyczogW1xuICAgICAgICAgICAgICAgIFtIYW1tZXIuVGFwXSxcbiAgICAgICAgICAgICAgICBbSGFtbWVyLlBhbiwge2RpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEx9XVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgJGltYWdlID0gJCgnPGltZyBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6LScgKyAkaGFuZGxlci5oZWlnaHQoKSArICdweDtsZWZ0Oi0nICsgJGhhbmRsZXIud2lkdGgoKSArICdweDtib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50XCI+PC9pbWc+Jyk7XG4gICAgICAgICRoYW5kbGVyLmFwcGVuZCgkaW1hZ2UpO1xuICAgICAgICBsZXQgaW1hZ2VXaWR0aCA9IDAsXG4gICAgICAgICAgICBpbWFnZUhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMucGRmVmlld2VyLmV2ZW50RW1pdHRlci5vbihFdmVudHMuYWRkRWRpdEltYWdlLCB0aGlzLmxvYWRGaWxlID0gKGZpbGUpID0+IHtcbiAgICAgICAgICAgIGxldCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgJGltYWdlLnByb3Aoe3NyYzogZS50YXJnZXQucmVzdWx0fSk7XG4gICAgICAgICAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbWFnZS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtaW1nLmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC1pbWcud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlV2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlSGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAkaGFuZGxlci5vbihcIm1vdXNlbW92ZSBtb3VzZXdoZWVsXCIsKGUpPT57XG4gICAgICAgICAgICBsZXQgcGFnZVJlY3QgPSBlSGFuZGxlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCB4PWUuY2xpZW50WC1wYWdlUmVjdC5sZWZ0LFxuICAgICAgICAgICAgICAgIHk9ZS5jbGllbnRZLXBhZ2VSZWN0LnRvcDtcbiAgICAgICAgICAgICRpbWFnZS5jc3Moe1xuICAgICAgICAgICAgICAgIHRvcDp5LFxuICAgICAgICAgICAgICAgIGxlZnQ6eFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgICRoYW5kbGVyLm9uKFwibW91c2VsZWF2ZVwiLChlKT0+e1xuICAgICAgICAgICAgJGltYWdlLmNzcyh7XG4gICAgICAgICAgICAgICAgdG9wOi1pbWFnZUhlaWdodCxcbiAgICAgICAgICAgICAgICBsZWZ0Oi1pbWFnZVdpZHRoXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICBoYW1tZXIub24oJ3RhcCcsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGV2aWNlUmVjdD17fTtcbiAgICAgICAgICAgIGxldCBwb2ludD1nZXREZXZpY2VQYWdlUG9pbnQoZUhhbmRsZXIsZSk7XG4gICAgICAgICAgICBsZXQgd2lkdGggPSAkaW1hZ2Uud2lkdGgoKTtcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSAkaW1hZ2UuaGVpZ2h0KCk7XG4gICAgICAgICAgICBkZXZpY2VSZWN0LnRvcD1wb2ludC55O1xuICAgICAgICAgICAgZGV2aWNlUmVjdC5sZWZ0PXBvaW50Lng7XG4gICAgICAgICAgICBkZXZpY2VSZWN0LnJpZ2h0PWRldmljZVJlY3QubGVmdCt3aWR0aDtcbiAgICAgICAgICAgIGRldmljZVJlY3QuYm90dG9tPWRldmljZVJlY3QudG9wK2hlaWdodDtcbiAgICAgICAgICAgIHBhZ2VSZW5kZXIuZ2V0UERGUGFnZSgpLnRoZW4oKHBhZ2UpPT57XG4gICAgICAgICAgICAgICAgbGV0IGZpbGVSZWFkZXI9bmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHRoaXMuZmlsZSk7XG4gICAgICAgICAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQ9ZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1ZmZlciA9bmV3IFVpbnQ4QXJyYXkoZS50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlY3Q9cGFnZS5yZXZlcnNlRGV2aWNlUmVjdChkZXZpY2VSZWN0LHBhZ2VSZW5kZXIuZ2V0U2NhbGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2UuYWRkSW1hZ2UoYnVmZmVyLHJlY3QpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBbeCx5XT1bKHJlY3QubGVmdCtyZWN0LnJpZ2h0KS8yLChyZWN0LnRvcCtyZWN0LmJvdHRvbSkvMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlLmdldEdyYXBoaWNzT2JqZWN0QXRQb2ludChbeCx5XSwgMywzKS50aGVuKChncmFwaGljc09iamVjdCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5bX2FkZG9uLmdyYXBoaWNzTWFuYWdlci5nZXQoZ3JhcGhpY3NPYmplY3QpLCBncmFwaGljc09iamVjdF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChbR3JhcGhpY3NPYmplY3RDb21wb25lbnQsIGdyYXBoaWNzT2JqZWN0XSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR3JhcGhpY3NPYmplY3RDb21wb25lbnQoZ3JhcGhpY3NPYmplY3QsIHBhZ2VSZW5kZXIsIF9hZGRvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChncmFwaGljc09iamVjdENvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucGRmVmlld2VyLmdldFN0YXRlSGFuZGxlck1hbmFnZXIoKS5zd2l0Y2hUbyhcImVkaXQtYWxsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuY3VycmVudENvbXBvbmV0ID0gZ3JhcGhpY3NPYmplY3RDb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGltYWdlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBncmFwaGljc09iamVjdENvbXBvbmVudC5hY3RpdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGU9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlJiZjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuY3VycmVudENvbXBvbmV0PW51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wZGZWaWV3ZXIuc2V0QWN0aXZlRWxlbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgZGVzdHJveVBhZ2VIYW5kbGVyKCkge1xuICAgICAgICB0aGlzLiRoYW5kbGVyLm9mZihcIm1vdXNlbW92ZSBtb3VzZXdoZWVsIG1vdXNlbGVhdmVcIik7XG4gICAgICAgIHRoaXMuJGhhbmRsZXIuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5oYW1tZXIgJiYgdGhpcy5oYW1tZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnBhZ2VSZW5kZXIuJGhhbmRsZXIucmVtb3ZlQ2xhc3ModGhpcy5jdXJzb3JTdHlsZSk7XG4gICAgICAgIHRoaXMucGRmVmlld2VyLmV2ZW50RW1pdHRlci5vZmYoRXZlbnRzLmFkZEVkaXRJbWFnZSx0aGlzLmxvYWRGaWxlKTtcbiAgICB9XG5cbiAgICBvdXQoKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveVBhZ2VIYW5kbGVyKCk7XG4gICAgfVxufVxuY29uc3QgZ2V0RGV2aWNlUGFnZVBvaW50ID0gKGVsZW0sIGV2ZW50KSA9PiB7XG4gICAgbGV0IHBhZ2VSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgKCk7XG4gICAgbGV0IHNyY0V2ZW50ID0gZXZlbnQuc3JjRXZlbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogc3JjRXZlbnQuY2xpZW50WCAtIHBhZ2VSZWN0LmxlZnQgLSBldmVudC5kZWx0YVgsXG4gICAgICAgIHk6IHNyY0V2ZW50LmNsaWVudFkgLSBwYWdlUmVjdC50b3AgLSBldmVudC5kZWx0YVksXG4gICAgfTtcbn07IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpbmMgb24gMjAxOS80LzI4LlxuICovXG5pbXBvcnQgKiBhcyBQREZWaWV3Q3RybCBmcm9tICdQREZWaWV3Q3RybCc7XG5pbXBvcnQgR3JhcGhpY3NNYW5hZ2VyIGZyb20gJy4vR3JhcGhpY3NNYW5hZ2VyLmpzJztcbmltcG9ydCBjcmVhdGVFZGl0R3JhcGhpY3NTdGF0ZUhhbmRsZXIgZnJvbSAnLi9jcmVhdGVFZGl0R3JhcGhpY3NTdGF0ZUhhbmRsZXIuanMnO1xuaW1wb3J0IGNyZWF0ZUVkaXRUZXh0U3RhdGVIYW5kbGVyIGZyb20gJy4vY3JlYXRlRWRpdFRleHRTdGF0ZUhhbmRsZXIuanMnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgQWRkR3JhcGhpY3NTdGF0ZUhhbmRsZXIgZnJvbSAnLi9BZGRHcmFwaGljc1N0YXRlSGFuZGxlcic7XG5pbXBvcnQgQWRkSW1hZ2VTdGF0ZUhhbmRsZXIgZnJvbSAnLi9BZGRJbWFnZVN0YXRlSGFuZGxlcic7XG5pbXBvcnQgY3JlYXRlQWRkVGV4dE9iamVjdFN0YXRlSGFuZGxlciBmcm9tICcuL2NyZWF0ZUFkZFRleHRPYmplY3RTdGF0ZUhhbmRsZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRHcmFwaGljc0FkZG9uIHtcbiAgICBjb25zdHJ1Y3RvciAocGRmVmlld2VyKSB7XG4gICAgICAgIHRoaXMucGRmVmlld2VyID0gcGRmVmlld2VyO1xuICAgICAgICB0aGlzLmdyYXBoaWNzTWFuYWdlciA9IG5ldyBHcmFwaGljc01hbmFnZXIoKTtcbiAgICB9XG4gICAgaW5pdCAoKSB7XG4gICAgICAgIC8vbGV0IEVkaXRUZXh0U3RhdGVIYW5kbGVyID0gY3JlYXRlRWRpdEdyYXBoaWNzU3RhdGVIYW5kbGVyKHRoaXMsIDEpO1xuICAgICAgICBsZXQgRWRpdFRleHRTdGF0ZUhhbmRsZXIgPSBjcmVhdGVFZGl0VGV4dFN0YXRlSGFuZGxlcih0aGlzKTtcbiAgICAgICAgbGV0IEVkaXRQYXRoU3RhdGVIYW5kbGVyID0gY3JlYXRlRWRpdEdyYXBoaWNzU3RhdGVIYW5kbGVyKHRoaXMsIDIpO1xuICAgICAgICBsZXQgRWRpdEltYWdlU3RhdGVIYW5kbGVyID0gY3JlYXRlRWRpdEdyYXBoaWNzU3RhdGVIYW5kbGVyKHRoaXMsIDMpO1xuICAgICAgICBsZXQgRWRpdEFsbFN0YXRlSGFuZGxlciA9IGNyZWF0ZUVkaXRHcmFwaGljc1N0YXRlSGFuZGxlcih0aGlzLCA1KTtcbiAgICAgICAgQWRkR3JhcGhpY3NTdGF0ZUhhbmRsZXIuc2V0QWRkb24odGhpcyk7XG4gICAgICAgIEFkZEltYWdlU3RhdGVIYW5kbGVyLnNldEFkZG9uKHRoaXMpO1xuICAgICAgICBsZXQgQWRkVGV4dE9iamVjdFN0YXRlSGFuZGxlciA9IGNyZWF0ZUFkZFRleHRPYmplY3RTdGF0ZUhhbmRsZXIodGhpcyk7XG5cbiAgICAgICAgbGV0IHN0YXRlSGFuZGxlck1hbmFnZXIgPSB0aGlzLnBkZlZpZXdlci5nZXRTdGF0ZUhhbmRsZXJNYW5hZ2VyKCk7XG5cbiAgICAgICAgc3RhdGVIYW5kbGVyTWFuYWdlci5yZWdpc3RlcihFZGl0VGV4dFN0YXRlSGFuZGxlcik7XG4gICAgICAgIHN0YXRlSGFuZGxlck1hbmFnZXIucmVnaXN0ZXIoRWRpdFBhdGhTdGF0ZUhhbmRsZXIpO1xuICAgICAgICBzdGF0ZUhhbmRsZXJNYW5hZ2VyLnJlZ2lzdGVyKEVkaXRJbWFnZVN0YXRlSGFuZGxlcik7XG4gICAgICAgIHN0YXRlSGFuZGxlck1hbmFnZXIucmVnaXN0ZXIoRWRpdEFsbFN0YXRlSGFuZGxlcik7XG4gICAgICAgIHN0YXRlSGFuZGxlck1hbmFnZXIucmVnaXN0ZXIoQWRkR3JhcGhpY3NTdGF0ZUhhbmRsZXIpO1xuICAgICAgICBzdGF0ZUhhbmRsZXJNYW5hZ2VyLnJlZ2lzdGVyKEFkZFRleHRPYmplY3RTdGF0ZUhhbmRsZXIpO1xuICAgICAgICBzdGF0ZUhhbmRsZXJNYW5hZ2VyLnJlZ2lzdGVyKEFkZEltYWdlU3RhdGVIYW5kbGVyKTtcbiAgICB9XG4gICAgZ2V0R3JhcGhpY3NNYW5hZ2VyICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhpY3NNYW5hZ2VyO1xuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGluYyBvbiAyMDE5LzQvMjYuXG4gKi9cbmNvbnN0IEdyYXBoaWNzRXZlbnRzID0ge1xuICAgIHRleHRPYmplY3RBY3RpdmU6ICd0ZXh0LW9iamVjdC1hY3RpdmUnLFxuICAgIHRleHRPYmplY3RVbkFjdGl2ZTogJ3RleHQtb2JqZWN0LXVuYWN0aXZlJyxcbiAgICBhZGRUZXh0T2JqZWN0UGFyYW1UcmFuc2ZlcjogJ2FkZC10ZXh0LW9iamVjdC1wYXJhbS10cmFuc2ZlcicsXG59O1xuZXhwb3J0IGRlZmF1bHQgR3JhcGhpY3NFdmVudHM7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpbmMgb24gMjAxOS80LzI0LlxuICovXG5pbXBvcnQgR3JhcGhpY3NPYmplY3RDb21wb25lbnQgZnJvbSAnLi9HcmFwaGljc09iamVjdC5qcyc7XG5pbXBvcnQgVGV4dE9iamVjdENvbXBvbmVudCBmcm9tICcuL1RleHRPYmplY3QuanMnO1xuaW1wb3J0IFBhdGhPYmplY3RDb21wb25lbnQgZnJvbSAnLi9QYXRoT2JqZWN0LmpzJztcbmltcG9ydCBJbWFnZU9iamVjdENvbXBvbmVudCBmcm9tICcuL0ltYWdlT2JqZWN0LmpzJztcbmltcG9ydCBTaGFkaW5nT2JqZWN0Q29tcG9uZW50IGZyb20gJy4vU2hhZGluZ09iamVjdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoaWNzVmlld01hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5tYXRjaFJ1bGVzID0gW107XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJNYXRjaFJ1bGUgKG1hdGNoUnVsZSkge1xuICAgICAgICB0aGlzLm1hdGNoUnVsZXMucHVzaCAobWF0Y2hSdWxlKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoUnVsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdWxlcyBmb3IgZGVyZWdpc3RyYXRpb25cbiAgICAgKiBAcGFyYW0gbWF0Y2hSdWxlIC0ge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHVuUmVnaXN0ZXJNYXRjaFJ1bGUgKG1hdGNoUnVsZSkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm1hdGNoUnVsZXMuaW5kZXhPZiAobWF0Y2hSdWxlKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF0Y2hSdWxlcy5zcGxpY2UgKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBnZXQgKG9iamVjdCkge1xuXG4gICAgICAgIGxldCBtYXRjaFJ1bGVzID0gdGhpcy5tYXRjaFJ1bGVzO1xuICAgICAgICBsZXQgZGVmYXVsdENsYXNzID0gdGhpcy5nZXREZWZhdWx0KG9iamVjdCk7XG4gICAgICAgIGZvciAobGV0IGkgPSBtYXRjaFJ1bGVzLmxlbmd0aDsgaS0tOyApIHtcbiAgICAgICAgICAgIGxldCBtYXRjaFJ1bGUgPSBtYXRjaFJ1bGVzW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXRjaFJ1bGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBNYXRjaEFubm90ID0gbWF0Y2hSdWxlKG9iamVjdCwgZGVmYXVsdENsYXNzKTtcbiAgICAgICAgICAgIGlmIChNYXRjaEFubm90KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGNoQW5ub3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDbGFzcztcbiAgICB9XG4gICAgZ2V0RGVmYXVsdCAob2JqZWN0KSB7XG5cbiAgICAgICAgbGV0IHR5cGUgPSBvYmplY3QuZ2V0VHlwZSgpO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dE9iamVjdENvbXBvbmVudDtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gUGF0aE9iamVjdENvbXBvbmVudDtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gSW1hZ2VPYmplY3RDb21wb25lbnQ7XG4gICAgICAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgICAgICAgICByZXR1cm4gR3JhcGhpY3NPYmplY3RDb21wb25lbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGluYyBvbiAyMDE5LzQvMjQuXG4gKi9cbmltcG9ydCAqIGFzIFBERlZpZXdDdHJsIGZyb20gJ1BERlZpZXdDdHJsJztcbmxldCAkID0gUERGVmlld0N0cmwuRGVwcy5qUXVlcnk7XG5sZXQgYnJvd3NlciA9IFBERlZpZXdDdHJsLnNoYXJlZC5icm93c2VyO1xubGV0IHB0UHhSYXRpbyA9IGJyb3dzZXIucHRQeFJhdGlvO1xubGV0IEV2ZW50cyA9IFBERlZpZXdDdHJsLkV2ZW50cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhpY3NPYmplY3RDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob2JqZWN0LCBwYWdlUmVuZGVyLCBkZXBlbmRlbmNlcykge1xuICAgIHRoaXMuZ3JhcGhpY3NPYmplY3QgPSBvYmplY3Q7XG4gICAgLy90aGlzLmVIYW5kbGVyID0gZUhhbmRsZXI7XG4gICAgLy90aGlzLiRoYW5kbGVyID0gJChlSGFuZGxlcik7XG4gICAgdGhpcy5wYWdlUmVuZGVyID0gcGFnZVJlbmRlcjtcbiAgICB0aGlzLmRlcGVuZGVuY2VzID0gZGVwZW5kZW5jZXM7XG4gIH1cbiAgYWN0aXZlICgpIHtcbiAgICBsZXQgJGhhbmRsZXIgPSB0aGlzLiRoYW5kbGVyO1xuICAgIGlmKCEkaGFuZGxlcikge1xuICAgICAgICAkaGFuZGxlciA9IHRoaXMuaW5pdFVJKCk7XG4gICAgICAgIHRoaXMuJGhhbmRsZXIgPSAkaGFuZGxlcjtcbiAgICAgICAgY29uc3QgY29udGV4dE1lbnVDb25maWcgPSB0aGlzLmdldENvbnRleHRNZW51Q29uZmlnKCk7XG4gICAgICAgIGlmKGNvbnRleHRNZW51Q29uZmlnKSB7XG4gICAgICAgICAgICAkaGFuZGxlci5jb250ZXh0TWVudSh0aGlzLnRyYW5zbGF0ZUNvbnRleHRNZW51TmFtZShjb250ZXh0TWVudUNvbmZpZykpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIHRoaXMuZGVwZW5kZW5jZXMucGRmVmlld2VyLnNldEFjdGl2ZUVsZW1lbnQgKHRoaXMpO1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgJGhhbmRsZXIuYWRkQ2xhc3MgKCdmd3JfX2FjdGl2ZScpO1xuICAgIHRoaXMudXBkYXRlU2hhcGVDb250cm9sKCk7XG5cbiAgICB0aGlzLmJpbmRFdmVudCgpO1xuICB9XG4gIGdldENvbnRleHRNZW51Q29uZmlnKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQhJyk7XG4gIH1cbiAgcmVtb3ZlR3JhcGhpY09iamVjdCgpe1xuXG4gIH1cbiAgYmluZEV2ZW50KCkge1xuICAgIHRoaXMuX19vZmZfX2RlbGV0ZV9fZXZlbnRfXyAmJiB0aGlzLl9fb2ZmX19kZWxldGVfX2V2ZW50X18oKTtcbiAgICB0aGlzLl9fb2ZmX19kZWxldGVfX2V2ZW50X18gPSB0aGlzLmRlcGVuZGVuY2VzLnBkZlZpZXdlclxuICAgICAgICAuZ2V0S2V5Ym9hcmRFdmVudEJpbmRlcigncGRmLXZpZXdlci1rZXlib2FyZC1ldmVudC1iaW5kZXInKVxuICAgICAgICAub24oJ2RlbGV0ZS1hbm5vdGF0aW9uJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUdyYXBoaWNPYmplY3QoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICB9XG4gIHVuQmluZEV2ZW50KCkge1xuICAgICAgdGhpcy5fX29mZl9fZGVsZXRlX19ldmVudF9fICYmIHRoaXMuX19vZmZfX2RlbGV0ZV9fZXZlbnRfXygpO1xuICAgICAgdGhpcy5fX29mZl9fZGVsZXRlX19ldmVudF9fID0gKCk9Pnt9O1xuICB9XG4gIHRyYW5zbGF0ZUNvbnRleHRNZW51TmFtZSAoY29uZmlnKSB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gY29uZmlnKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdpdGVtcyc6XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtcyA9IGNvbmZpZ1tpXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkxOG4gPSB0aGlzLmRlcGVuZGVuY2VzLnBkZlZpZXdlci5pMThuO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqIGluIGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGl0ZW1zW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZUkxOG5LZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPSBpMThuLnQoaXRlbS5uYW1lSTE4bktleSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgdXBkYXRlU2hhcGVDb250cm9sKCl7XG4gICAgY29uc3QgYm91bmRhcnkgPSB0aGlzLmdldEJvdW5kYXJ5ICgpO1xuICAgIGNvbnN0IGJveCA9IHRoaXMuX2dldFNoYXBlQ29udHJvbGxlckJvdW5kYXJ5Qm94ICgpO1xuICAgIHRoaXMuc2hhcGVDb250cm9sICYmIHRoaXMuc2hhcGVDb250cm9sLmFjdGl2ZSAodGhpcy4kaGFuZGxlciwgYm91bmRhcnksIGJveCk7XG4gIH1cbiAgdW5BY3RpdmUgKCkge1xuICAgIGlmKCF0aGlzLiRoYW5kbGVyKXJldHVybjtcbiAgICB0aGlzLiRoYW5kbGVyLnJlbW92ZUNsYXNzICgnZndyX19hY3RpdmUnKTtcbiAgICB0aGlzLnNoYXBlQ29udHJvbCYmdGhpcy5zaGFwZUNvbnRyb2wuZGVhY3RpdmUgKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG5cbiAgICB0aGlzLnVuQmluZEV2ZW50KCk7XG4gIH1cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5kZXBlbmRlbmNlcy5wZGZWaWV3ZXIuZXZlbnRFbWl0dGVyLm9mZihFdmVudHMuem9vbVRvU3VjY2Vzcyx0aGlzLmFmdGVyWm9vbSk7XG4gICAgdGhpcy4kaGFuZGxlciAmJiB0aGlzLiRoYW5kbGVyLnJlbW92ZSgpO1xuICAgIHRoaXMuJGhhbmRsZXI9bnVsbDtcbiAgfVxuICBnZXRNb2RlbCgpe1xuICAgIHJldHVybiB0aGlzLmdyYXBoaWNzT2JqZWN0O1xuICB9XG4gIF9nZXRTaGFwZUNvbnRyb2xsZXJCb3VuZGFyeUJveCAoKSB7XG4gICAgY29uc3QgcGFnZSA9IHRoaXMucGFnZVJlbmRlci5wYWdlO1xuICAgIGxldCBzY2FsZSA9IHB0UHhSYXRpbyAqIHRoaXMucGFnZVJlbmRlci5nZXRTY2FsZSAoKTtcbiAgICBsZXQgW3BhZ2VXaWR0aCwgcGFnZUhlaWdodF0gPSBbXG4gICAgICBwYWdlLmdldFB4V2lkdGggKCkgKiBzY2FsZSxcbiAgICAgIHBhZ2UuZ2V0UHhIZWlnaHQgKCkgKiBzY2FsZSxcbiAgICBdO1xuICAgIGlmICh0aGlzLnBhZ2VSZW5kZXIucm90YXRlICUgMTgwICE9IDApIHtcbiAgICAgIFtwYWdlSGVpZ2h0LCBwYWdlV2lkdGhdID0gW3BhZ2VXaWR0aCwgcGFnZUhlaWdodF07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgd2lkdGg6IHBhZ2VXaWR0aCxcbiAgICAgIGhlaWdodDogcGFnZUhlaWdodCxcbiAgICB9O1xuICB9XG4gIGdldEJvdW5kYXJ5ICgpIHtcbiAgICBjb25zdCBwYWdlID0gdGhpcy5wYWdlUmVuZGVyLnBhZ2U7XG4gICAgY29uc3QgcGRmUmVjdCA9IHRoaXMuZ3JhcGhpY3NPYmplY3QuZ2V0UmVjdCAoKTtcbiAgICBjb25zdCBkZXZpY2VSZWN0ID0gcGFnZS5nZXREZXZpY2VSZWN0IChcbiAgICAgIHBkZlJlY3QsXG4gICAgICB0aGlzLnBhZ2VSZW5kZXIuZ2V0U2NhbGUgKCksXG4gICAgICAwXG4gICAgKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdDogZGV2aWNlUmVjdC5sZWZ0LFxuICAgICAgdG9wOiBkZXZpY2VSZWN0LnRvcCxcbiAgICAgIHdpZHRoOiBkZXZpY2VSZWN0LnJpZ2h0IC0gZGV2aWNlUmVjdC5sZWZ0LFxuICAgICAgaGVpZ2h0OiBkZXZpY2VSZWN0LmJvdHRvbSAtIGRldmljZVJlY3QudG9wLFxuICAgIH07XG4gIH1cbiAgaW5pdFVJICgpIHtcbiAgICBsZXQgJGhhbmRsZXIgPSAodGhpcy4kaGFuZGxlciA9ICQgKGA8ZGl2IGNsYXNzPVwiZndyX19ncmFwaGljcy1vYmplY3QtaGFuZGxlclwiXG4gICAgICAgID48L2Rpdj5gKSk7XG4gICAgdGhpcy5wYWdlUmVuZGVyLnBhZ2VIYW5kbGVyLiRoYW5kbGVyLmFwcGVuZCAoJGhhbmRsZXIpO1xuXG4gICAgdGhpcy5zaGFwZUNvbnRyb2wgPSBuZXcgUERGVmlld0N0cmwuU2hhcGVDb250cm9sICh7XG4gICAgICBzdGFydDogKHNoYXBlLCBjb250ZXh0LCBhY3Rpb24pID0+XG4gICAgICAgIHRoaXMub25TdGFydFVwZGF0ZVNoYXBlIChzaGFwZSwgY29udGV4dCwgYWN0aW9uKSxcbiAgICAgIG1vdmluZzogKHNoYXBlLCBjb250ZXh0LHtvZmZzZXRYLG9mZnNldFl9KSA9PiB0aGlzLm9uU2hhcGVNb3ZpbmcgKHNoYXBlLCBjb250ZXh0LG9mZnNldFgsb2Zmc2V0WSksXG4gICAgICB1cGRhdGU6IChzaGFwZSwgY29udGV4dCkgPT4gdGhpcy5vblNoYXBlVXBkYXRpbmcgKHNoYXBlLCBjb250ZXh0KSxcbiAgICAgIGVuZDogKHNoYXBlLCBjb250ZXh0LCBhY3Rpb24pID0+XG4gICAgICAgIHRoaXMub25TaGFwZVVwZGF0ZUVuZCAoc2hhcGUsIGNvbnRleHQsIGFjdGlvbiksXG4gICAgICByZXNpemFibGU6IHRydWUsXG4gICAgICAvL3JvdGF0YWJsZTp0cnVlLFxuICAgICAgZW5hYmxlRGlhZ29uYWxseTogdHJ1ZSxcbiAgICAgIGVuYWJsZUZyYW1lOiB0cnVlLFxuICAgICAgcHJldmlld2VyOiB0cnVlLFxuICAgIH0pO1xuICAgIGxldCB0aGF0PXRoaXM7XG4gICAgdGhpcy5kZXBlbmRlbmNlcy5wZGZWaWV3ZXIuZXZlbnRFbWl0dGVyLm9uKEV2ZW50cy56b29tVG9TdWNjZXNzLHRoaXMuYWZ0ZXJab29tPWZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhhdC51cGRhdGVTaGFwZUNvbnRyb2woKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy4kaGFuZGxlclxuICB9XG4gIG9uU3RhcnRVcGRhdGVTaGFwZSAoc2hhcGUsIGNvbnRleHQsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24gPSAnbW92ZScpIHtcbiAgICAgICQodGhpcy5zaGFwZUNvbnRyb2wudWkucXVlcnlTZWxlY3RvcignLmZ2X19zaGFwZS1jb250cm9sLXByZXZpZXdlcicpKS5zaG93KCk7XG4gICAgICB0aGlzLmdyYXBoaWNzT2JqZWN0XG4gICAgICAgIC5nZXRCaXRtYXAgKHRoaXMucGFnZVJlbmRlci5nZXRTY2FsZSAoKSlcbiAgICAgICAgLnRoZW4gKGltYWdlRGF0YSA9PiB7XG4gICAgICAgICAgaWYgKCFpbWFnZURhdGEpIHJldHVybjtcblxuICAgICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5zaGFwZUNvbnRyb2wuZ2V0UHJldmlld2VyQ29udGV4dCAoKTtcbiAgICAgICAgICBcbiAgICAgICAgICAkKGNvbnRleHQuY2FudmFzKS5hdHRyKHtcbiAgICAgICAgICAgIHdpZHRoOmltYWdlRGF0YS53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDppbWFnZURhdGEuaGVpZ2h0XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGxldCBpbWcgPSBjb250ZXh0LmNyZWF0ZUltYWdlRGF0YSAoaW1hZ2VEYXRhLndpZHRoLCBpbWFnZURhdGEuaGVpZ2h0KzEpO1xuICAgICAgICAgIGxldCBkYXRhID0gbmV3IChVaW50OENsYW1wZWRBcnJheSB8fCBVaW50OEFycmF5KSAoaW1hZ2VEYXRhLmJ1ZmZlcik7XG4gICAgICAgICAgaW1nLmRhdGEuc2V0IChkYXRhKTtcblxuICAgICAgICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhIChpbWcsIDAsIDApO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25TaGFwZU1vdmluZyAoc2hhcGUsIGNvbnRleHQpIHt9XG4gIG9uU2hhcGVVcGRhdGluZyAoc2hhcGUsIGNvbnRleHQpIHt9XG4gIG9uU2hhcGVVcGRhdGVFbmQgKHNoYXBlLCBjb250ZXh0LCBhY3Rpb24pIHtcbiAgICBsZXQgcmVjdCA9IE9iamVjdC5hc3NpZ24gKHt9LCBzaGFwZSk7XG4gICAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIHJlY3Qud2lkdGg7XG4gICAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0O1xuICAgIHJlY3QgPSB0aGlzLnBhZ2VSZW5kZXIucGFnZS5yZXZlcnNlRGV2aWNlUmVjdCAoXG4gICAgICByZWN0LFxuICAgICAgdGhpcy5wYWdlUmVuZGVyLmdldFNjYWxlICgpXG4gICAgKTtcblxuICAgIHRoaXMuZ3JhcGhpY3NPYmplY3Quc2V0TWF0cml4IChyZWN0KS50aGVuIChfID0+IHtcbiAgICAgICQodGhpcy5zaGFwZUNvbnRyb2wudWkucXVlcnlTZWxlY3RvcignLmZ2X19zaGFwZS1jb250cm9sLXByZXZpZXdlcicpKS5oaWRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVNoYXBlQ29udHJvbCgpO1xuICAgIH0pO1xuICB9XG4gIHNldENvbG9yKGNvbG9yKXtcbiAgICByZXR1cm4gdGhpcy5ncmFwaGljc09iamVjdC5zZXRCb3JkZXJDb2xvcihjb2xvcik7XG4gIH1cbiAgc2V0Qm9yZGVyU3R5bGUgKHN0eWxlLHBhcmFtKXtcbiAgICByZXR1cm4gdGhpcy5ncmFwaGljc09iamVjdC5zZXRCb3JkZXJTdHlsZShzdHlsZSxwYXJhbSkudGhlbiAoXyA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVNoYXBlQ29udHJvbCgpO1xuICAgIH0pO1xuICB9XG4gIHNldE9wYWNpdHkob3BhY2l0eSl7XG4gICAgcmV0dXJuIHRoaXMuZ3JhcGhpY3NPYmplY3Quc2V0T3BhY2l0eShvcGFjaXR5KVxuICB9XG4gIHNldEZpbGxDb2xvciAoZmlsbGNvbG9yKXtcbiAgICByZXR1cm4gdGhpcy5ncmFwaGljc09iamVjdC5zZXRGaWxsQ29sb3IoZmlsbGNvbG9yKVxuICB9XG4gIHNldEJvcmRlcldpZHRoKGJvcmRlcldpZHRoKXtcbiAgICByZXR1cm4gdGhpcy5ncmFwaGljc09iamVjdC5zZXRCb3JkZXJXaWR0aChib3JkZXJXaWR0aCkudGhlbiAoXyA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVNoYXBlQ29udHJvbCgpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGluYyBvbiAyMDE5LzQvMjQuXG4gKi9cbmltcG9ydCBHcmFwaGljc09iamVjdENvbXBvbmVudCBmcm9tICcuL0dyYXBoaWNzT2JqZWN0LmpzJztcbmltcG9ydCAqIGFzIFBERlZpZXdDdHJsIGZyb20gJ1BERlZpZXdDdHJsJztcbmxldCAkID0gUERGVmlld0N0cmwuRGVwcy5qUXVlcnk7XG5sZXQgRXZlbnRzID0gUERGVmlld0N0cmwuRXZlbnRzO1xuXG5sZXQgY29udGV4dE1lbnVDb25maWc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlT2JqZWN0Q29tcG9uZW50IGV4dGVuZHMgR3JhcGhpY3NPYmplY3RDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXREZWZhdWx0Q29udGV4dE1lbnVDb25maWcgKCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdENvbnRleHRNZW51Q29uZmlnO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0Q29udGV4dE1lbnVDb25maWcgKGNvbmZpZykge1xuICAgICAgICBjb250ZXh0TWVudUNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG4gICAgY29uc3RydWN0b3IgKG9iamVjdCwgcGFnZVJlbmRlciwgZGVwZW5kZW5jZXMpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0LCBwYWdlUmVuZGVyLCBkZXBlbmRlbmNlcyk7XG4gICAgfVxuICAgIGluaXRVSSAoKSB7XG4gICAgICAgIGxldCB0aGF0PXRoaXM7XG4gICAgICAgIGxldCAkaGFuZGxlciA9ICh0aGlzLiRoYW5kbGVyID0gJCAoYDxkaXYgY2xhc3M9XCJmd3JfX2dyYXBoaWNzLW9iamVjdC1oYW5kbGVyXCIgXG4gICAgICAgID48L2Rpdj5gKSk7XG4gICAgICAgIHRoaXMucGFnZVJlbmRlci5wYWdlSGFuZGxlci4kaGFuZGxlci5hcHBlbmQgKCRoYW5kbGVyKTtcblxuICAgICAgICB0aGlzLnNoYXBlQ29udHJvbCA9IG5ldyBQREZWaWV3Q3RybC5TaGFwZUNvbnRyb2wgKHtcbiAgICAgICAgICAgIHN0YXJ0OiAoc2hhcGUsIGNvbnRleHQsIGFjdGlvbikgPT5cbiAgICAgICAgICAgICAgICB0aGlzLm9uU3RhcnRVcGRhdGVTaGFwZSAoc2hhcGUsIGNvbnRleHQsIGFjdGlvbiksXG4gICAgICAgICAgICBtb3Zpbmc6IChzaGFwZSwgY29udGV4dCx7b2Zmc2V0WCxvZmZzZXRZfSkgPT4gdGhpcy5vblNoYXBlTW92aW5nIChzaGFwZSwgY29udGV4dCxvZmZzZXRYLG9mZnNldFkpLFxuICAgICAgICAgICAgdXBkYXRlOiAoc2hhcGUsIGNvbnRleHQpID0+IHRoaXMub25TaGFwZVVwZGF0aW5nIChzaGFwZSwgY29udGV4dCksXG4gICAgICAgICAgICByb3RhdGU6KHNoYXBlLGNvbnRleHQpPT50aGlzLm9uUm90YXRlKHNoYXBlLGNvbnRleHQpLFxuICAgICAgICAgICAgZW5kOiAoc2hhcGUsIGNvbnRleHQsIGFjdGlvbikgPT5cbiAgICAgICAgICAgICAgICB0aGlzLm9uU2hhcGVVcGRhdGVFbmQgKHNoYXBlLCBjb250ZXh0LCBhY3Rpb24pLFxuICAgICAgICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgICAgICAgcm90YXRhYmxlOnRydWUsXG4gICAgICAgICAgICBlbmFibGVEaWFnb25hbGx5OiB0cnVlLFxuICAgICAgICAgICAgZW5hYmxlRnJhbWU6IHRydWUsXG4gICAgICAgICAgICBwcmV2aWV3ZXI6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2VzLnBkZlZpZXdlci5ldmVudEVtaXR0ZXIub24oRXZlbnRzLnpvb21Ub1N1Y2Nlc3MsdGhpcy5hZnRlclpvb209ZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhhdC51cGRhdGVTaGFwZUNvbnRyb2woKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLiRoYW5kbGVyXG4gICAgfVxuICAgIG9uUm90YXRlKGRlZ3JlZSl7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBoaWNzT2JqZWN0LnNldFJvdGF0aW9uKGRlZ3JlZSkudGhlbiAoaW5mbyA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNoYXBlQ29udHJvbCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q29udGV4dE1lbnVDb25maWcoKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmZ2X19zaGFwZS1jb250cm9sJyxcbiAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvcGVydGllcycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVJMThuS2V5OiAndmlld2VyXzpjb250ZXh0bWVudS5hbm5vdC5wcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICh0cmlnZ2VyLCBrZXksIGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb3BlcnRpZXNEaWFsb2coZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZW1vdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVJMThuS2V5OiAndmlld2VyXzpjb250ZXh0bWVudS5hbm5vdC5kZWxldGUnLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UHJvcGVydHlPcHRpb25zKCl7XG4gICAgICAgIGxldCBvYmplY3QgPSB0aGlzLmdyYXBoaWNzT2JqZWN0O1xuICAgICAgICBsZXQgb3BhY2l0eSA9IG9iamVjdC5nZXRPcGFjaXR5ICgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3BhY2l0eSxcbiAgICAgICAgICAgIGJvcmRlclN0eWxlOmZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd1Byb3BlcnRpZXNEaWFsb2cgKGUpIHtcbiAgICAgICAgbGV0IGFjdGl2ZVByb3BlcnRpZXNEaWFsb2cgPSB0aGlzLmRlcGVuZGVuY2VzLnBkZlZpZXdlci5hY3RpdmVQcm9wZXJ0aWVzRGlhbG9nO1xuICAgICAgICBpZih0aGlzLmRlcGVuZGVuY2VzLnBkZlZpZXdlci5hY3RpdmVQcm9wZXJ0aWVzRGlhbG9nKXtcbiAgICAgICAgICAgIGFjdGl2ZVByb3BlcnRpZXNEaWFsb2cuc2hvdyAoZSk7XG4gICAgICAgICAgICBhY3RpdmVQcm9wZXJ0aWVzRGlhbG9nLnNldFZpZXdlckNvbXBvbmVudCh0aGlzKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLiRwcm9wZXJ0aWVzQ29udHJvbCA9IG5ldyBQREZWaWV3Q3RybC5Qcm9wZXJ0aWVzQ29udHJvbCAodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGlkZVByb3BlcnRpZXNEaWFsb2cgKCkge1xuICAgICAgICB0aGlzLiRwcm9wZXJ0aWVzQ29udHJvbC5jbG9zZSgpO1xuICAgIH1cbiAgICBkZXN0cm95KCl7XG4gICAgICAgIHRoaXMuJGhhbmRsZXIuY29udGV4dE1lbnUoJ2Rlc3Ryb3knKTtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNlcy5wZGZWaWV3ZXIuZXZlbnRFbWl0dGVyLm9mZihFdmVudHMuem9vbVRvU3VjY2Vzcyx0aGlzLmFmdGVyWm9vbSk7XG4gICAgfVxuICAgIHNldE9wYWNpdHkob3BhY2l0eSl7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3NPYmplY3Quc2V0T3BhY2l0eShvcGFjaXR5KTtcbiAgICB9XG4gICAgcmVtb3ZlKCl7XG4gICAgICAgIHRoaXMuJGhhbmRsZXIuY29udGV4dE1lbnUgKCdoaWRlJyk7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3NPYmplY3QucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuZGVwZW5kZW5jZXMucGRmVmlld2VyLnNldEFjdGl2ZUVsZW1lbnQgKG51bGwpO1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgLy91bkFjdGl2ZSAoKSB7XG4gICAgLy9cbiAgICAvL31cbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBsaW5jIG9uIDIwMTkvNC8yNC5cbiAqL1xuaW1wb3J0IEdyYXBoaWNzT2JqZWN0Q29tcG9uZW50IGZyb20gJy4vR3JhcGhpY3NPYmplY3QuanMnO1xuaW1wb3J0ICogYXMgUERGVmlld0N0cmwgZnJvbSAnUERGVmlld0N0cmwnO1xubGV0ICQgPSBQREZWaWV3Q3RybC5EZXBzLmpRdWVyeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF0aE9iamVjdENvbXBvbmVudCBleHRlbmRzIEdyYXBoaWNzT2JqZWN0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9iamVjdCwgcGFnZVJlbmRlciwgZGVwZW5kZW5jZXMpIHtcbiAgICBzdXBlciAob2JqZWN0LCBwYWdlUmVuZGVyLCBkZXBlbmRlbmNlcyk7XG4gIH1cbiAgYWN0aXZlICgpIHtcbiAgICBzdXBlci5hY3RpdmUgKCk7XG4gIH1cbiAgZ2V0UHJvcGVydHlPcHRpb25zICgpIHtcbiAgICBsZXQgb2JqZWN0ID0gdGhpcy5ncmFwaGljc09iamVjdDtcbiAgICBsZXQgY29sb3IgPSBvYmplY3QuZ2V0Qm9yZGVyQ29sb3IgKCk7XG4gICAgaWYodGhpcy5ncmFwaGljc09iamVjdC5uZWVkU3Ryb2tlKCkpe1xuICAgICAgY29sb3IgPSAoY29sb3J8MHhmZjAwMDAwMCkudG9TdHJpbmcoMTYpO1xuICAgICAgY29sb3IgPSAnIycrY29sb3Iuc3Vic3RyKDIsNik7XG4gICAgfWVsc2V7XG4gICAgICBjb2xvciA9IDA7XG4gICAgfVxuICAgIGxldCBmaWxsQ29sb3IgPSBvYmplY3QuZ2V0RmlsbENvbG9yICgpO1xuICAgIGlmKG9iamVjdC5nZXRGaWxsTW9kZSgpPT0wKXtcbiAgICAgIGZpbGxDb2xvciA9IDA7XG4gICAgfVxuICAgIGxldCBib3JkZXJXaWR0aCA9IG9iamVjdC5nZXRCb3JkZXJXaWR0aCAoKTtcbiAgICBsZXQgb3BhY2l0eSA9IG9iamVjdC5nZXRPcGFjaXR5ICgpO1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcixcbiAgICAgIGJvcmRlclRyYW5zcGFyZW50OnRydWUsXG4gICAgICBvcGFjaXR5LFxuICAgICAgZmlsbENvbG9yLFxuICAgICAgYm9yZGVyV2lkdGgsXG4gICAgfTtcbiAgfVxuICBpbml0VUkgKCkge1xuICAgIHN1cGVyLmluaXRVSSAoKTtcblxuICAgIHRoaXMuJHRpcCA9ICQgKCc8ZGl2IGNsYXNzPVwiZndyX19wYXRoLW9iamVjdC10aXBcIj48L2Rpdj4nKTtcbiAgICB0aGlzLiR0aXAuYXBwZW5kVG8gKHRoaXMuJGhhbmRsZXIpO1xuXG4gICAgbGV0IGhhbW1lciA9ICh0aGlzLnJlY3RIYW1tZXIgPSBuZXcgSGFtbWVyLk1hbmFnZXIgKHRoaXMuJGhhbmRsZXJbMF0sIHtcbiAgICAgIHJlY29nbml6ZXJzOiBbW0hhbW1lci5QcmVzc11dLFxuICAgIH0pKTtcblxuICAgIHRoaXMuJGhhbmRsZXIub24gKCdtb3VzZW1vdmUnLCBlID0+IHtcbiAgICAgIHRoaXMuJHRpcC5oaWRlICgpO1xuICAgIH0pO1xuXG4gICAgaGFtbWVyLm9uICgncHJlc3MnLCBlID0+IHtcbiAgICAgIGNvbnN0IHBkZlJlY3QgPSB0aGlzLmdyYXBoaWNzT2JqZWN0LmdldFJlY3QgKCk7XG4gICAgICBsZXQgbW91c2VQb3MgPSBnZXREZXZpY2VQYWdlUG9pbnQgKHRoaXMuJGhhbmRsZXIucGFyZW50ICgpWzBdLCBlKTtcblxuICAgICAgbGV0IG9iamVjdFBvcyA9IHtcbiAgICAgICAgbGVmdDogbW91c2VQb3MueCArICdweCcsXG4gICAgICAgIHRvcDogbW91c2VQb3MueSsyMCArICdweCcsXG4gICAgICB9O1xuXG4gICAgICBtb3VzZVBvcyA9IHRoaXMucGFnZVJlbmRlci5wYWdlLnJldmVyc2VEZXZpY2VQb2ludCAoXG4gICAgICAgIFttb3VzZVBvcy54LCBtb3VzZVBvcy55XSxcbiAgICAgICAgdGhpcy5wYWdlUmVuZGVyLmdldFNjYWxlICgpXG4gICAgICApO1xuXG4gICAgICB0aGlzLiR0aXBcbiAgICAgICAgLnNob3cgKClcbiAgICAgICAgLmNzcyAob2JqZWN0UG9zKVxuICAgICAgICAuaHRtbCAoXG4gICAgICAgICAgYG9iamVjdCA6IHg6JHtwZGZSZWN0LmxlZnQudG9GaXhlZCAoMil9LHk6JHtwZGZSZWN0LmJvdHRvbS50b0ZpeGVkICgyKX1gK1xuICAgICAgICAgIGA8YnIvPm1vdXNlOiB4OiR7bW91c2VQb3NbMF0udG9GaXhlZCAoMil9LHk6JHttb3VzZVBvc1sxXS50b0ZpeGVkICgyKX1gXG4gICAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuJGhhbmRsZXI7XG59XG5nZXRDb250ZXh0TWVudUNvbmZpZygpe1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5mdl9fc2hhcGUtY29udHJvbCcsXG4gICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgbmFtZTogJ3Byb3BlcnRpZXMnLFxuICAgICAgICAgICAgbmFtZUkxOG5LZXk6ICd2aWV3ZXJfOmNvbnRleHRtZW51LmFubm90LnByb3BlcnRpZXMnLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICh0cmlnZ2VyLCBrZXksIGUpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGFjdGl2ZVByb3BlcnRpZXNEaWFsb2cgPSB0aGlzLmRlcGVuZGVuY2VzLnBkZlZpZXdlci5hY3RpdmVQcm9wZXJ0aWVzRGlhbG9nO1xuICAgICAgICAgICAgICBpZih0aGlzLmRlcGVuZGVuY2VzLnBkZlZpZXdlci5hY3RpdmVQcm9wZXJ0aWVzRGlhbG9nKXtcbiAgICAgICAgICAgICAgICBhY3RpdmVQcm9wZXJ0aWVzRGlhbG9nLnNob3cgKGUpXG4gICAgICAgICAgICAgICAgYWN0aXZlUHJvcGVydGllc0RpYWxvZy5zZXRWaWV3ZXJDb21wb25lbnQodGhpcyk7XG4gICAgICAgICAgICAgIH1lbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0aWVzQ29udHJvbCA9IG5ldyBQREZWaWV3Q3RybC5Qcm9wZXJ0aWVzQ29udHJvbCAodGhpcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVtb3ZlOiB7XG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlJyxcbiAgICAgICAgICAgIG5hbWVJMThuS2V5OiAndmlld2VyXzpjb250ZXh0bWVudS5hbm5vdC5kZWxldGUnLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMucmVtb3ZlR3JhcGhpY09iamVjdCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9XG4gIH1cbiAgcmVtb3ZlR3JhcGhpY09iamVjdCgpe1xuICAgIHRoaXMuJGhhbmRsZXIuY29udGV4dE1lbnUgKCdoaWRlJyk7XG4gICAgdGhpcy5ncmFwaGljc09iamVjdC5yZW1vdmUoKTtcbiAgICB0aGlzLmRlcGVuZGVuY2VzLnBkZlZpZXdlci5zZXRBY3RpdmVFbGVtZW50IChudWxsKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuICAvL3VuQWN0aXZlICgpIHtcbiAgLy9cbiAgLy99XG4gIGRlc3Ryb3kgKCkge1xuICAgIGlmICghdGhpcy4kaGFuZGxlcikgcmV0dXJuO1xuICAgIHRoaXMuJGhhbmRsZXIuY29udGV4dE1lbnUgKCdkZXN0cm95Jyk7XG4gICAgdGhpcy5wcm9wZXJ0aWVzQ29udHJvbCAmJiB0aGlzLnByb3BlcnRpZXNDb250cm9sLmNsb3NlICgpO1xuICAgIHRoaXMucHJvcGVydGllc0NvbnRyb2wgPSBudWxsO1xuICAgIHRoaXMucmVjdEhhbW1lci5kZXN0cm95KCk7XG4gICAgc3VwZXIuZGVzdHJveSAoKTtcbiAgfVxufVxuXG5jb25zdCBnZXREZXZpY2VQYWdlUG9pbnQgPSAoZWxlbSwgZXZlbnQpID0+IHtcbiAgbGV0IHBhZ2VSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgKCk7XG4gIGxldCBzcmNFdmVudCA9IGV2ZW50LnNyY0V2ZW50O1xuICByZXR1cm4ge1xuICAgIHg6IHNyY0V2ZW50LmNsaWVudFggLSBwYWdlUmVjdC5sZWZ0IC0gZXZlbnQuZGVsdGFYLFxuICAgIHk6IHNyY0V2ZW50LmNsaWVudFkgLSBwYWdlUmVjdC50b3AgLSBldmVudC5kZWx0YVksXG4gIH07XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpbmMgb24gMjAxOS80LzI0LlxuICovXG5pbXBvcnQgR3JhcGhpY3NPYmplY3RDb21wb25lbnQgZnJvbSAnLi9HcmFwaGljc09iamVjdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYWRpbmdPYmplY3RDb21wb25lbnQgZXh0ZW5kcyBHcmFwaGljc09iamVjdENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKG9iamVjdCwgcGFnZVJlbmRlciwgZGVwZW5kZW5jZXMpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0LCBwYWdlUmVuZGVyLCBkZXBlbmRlbmNlcyk7XG4gICAgfVxuICAgIGFjdGl2ZSAoKSB7XG5cbiAgICB9XG4gICAgZ2V0Q29udGV4dE1lbnVDb25maWcoKXtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy91bkFjdGl2ZSAoKSB7XG4gICAgLy9cbiAgICAvL31cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGluYyBvbiAyMDE5LzQvMjQuXG4gKi9cbmltcG9ydCBHcmFwaGljc09iamVjdENvbXBvbmVudCBmcm9tICcuL0dyYXBoaWNzT2JqZWN0LmpzJztcbmltcG9ydCAqIGFzIFBERlZpZXdDdHJsIGZyb20gJ1BERlZpZXdDdHJsJztcbmxldCAkID0gUERGVmlld0N0cmwuRGVwcy5qUXVlcnk7XG5sZXQgYnJvd3NlciA9IFBERlZpZXdDdHJsLnNoYXJlZC5icm93c2VyO1xubGV0IHB0UHhSYXRpbyA9IGJyb3dzZXIucHRQeFJhdGlvO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL0V2ZW50cy5qcyc7XG5pbXBvcnQge2FkZEZvbnR9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9XZWJGb250RmFjZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dE9iamVjdENvbXBvbmVudCBleHRlbmRzIEdyYXBoaWNzT2JqZWN0Q29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAob2JqZWN0LCBwYWdlUmVuZGVyLCBkZXBlbmRlbmNlcykge1xuICAgICAgICBzdXBlciAob2JqZWN0LCBwYWdlUmVuZGVyLCBkZXBlbmRlbmNlcyk7XG4gICAgfVxuICAgIGluaXRVSSAoKSB7XG4gICAgICAgIGxldCAkaGFuZGxlciA9ICh0aGlzLiRoYW5kbGVyID0gJCAoYDxkaXYgY2xhc3M9XCJmd3JfX2dyYXBoaWNzLW9iamVjdC1oYW5kbGVyIGZ3cl9fdGV4dC1vYmplY3QtZWRpdFwiXG4gICAgICAgID48L2Rpdj5gKSk7XG4gICAgICAgIHRoaXMucGFnZVJlbmRlci5wYWdlSGFuZGxlci4kaGFuZGxlci5hZnRlciAoJGhhbmRsZXIpO1xuXG4gICAgICAgIGxldCBzaGFwZUNvbnRyb2wgPSB0aGlzLnNoYXBlQ29udHJvbCA9IG5ldyBQREZWaWV3Q3RybC5TaGFwZUNvbnRyb2wgKHtcbiAgICAgICAgICAgIHN0YXJ0OiAoc2hhcGUsIGNvbnRleHQsIGFjdGlvbikgPT5cbiAgICAgICAgICAgICAgICB0aGlzLm9uU3RhcnRVcGRhdGVTaGFwZSAoc2hhcGUsIGNvbnRleHQsIGFjdGlvbiksXG4gICAgICAgICAgICBtb3Zpbmc6IChzaGFwZSwgY29udGV4dCx7b2Zmc2V0WCxvZmZzZXRZfSkgPT4gdGhpcy5vblNoYXBlTW92aW5nIChzaGFwZSwgY29udGV4dCxvZmZzZXRYLG9mZnNldFkpLFxuICAgICAgICAgICAgdXBkYXRlOiAoc2hhcGUsIGNvbnRleHQpID0+IHRoaXMub25TaGFwZVVwZGF0aW5nIChzaGFwZSwgY29udGV4dCksXG4gICAgICAgICAgICByb3RhdGU6KHNoYXBlLGNvbnRleHQpPT50aGlzLm9uUm90YXRlKHNoYXBlLGNvbnRleHQpLFxuICAgICAgICAgICAgZW5kOiAoc2hhcGUsIGNvbnRleHQsIGFjdGlvbikgPT5cbiAgICAgICAgICAgICAgICB0aGlzLm9uU2hhcGVVcGRhdGVFbmQgKHNoYXBlLCBjb250ZXh0LCBhY3Rpb24pLFxuICAgICAgICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW5hYmxlRGlhZ29uYWxseTogdHJ1ZSxcbiAgICAgICAgICAgIGVuYWJsZUZyYW1lOiB0cnVlLFxuICAgICAgICAgICAgcHJldmlld2VyOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgJGhhbmRsZXIub24oJ2RibGNsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc3VwZXIudW5BY3RpdmUoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ2hhckVkaXQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXMuJGhhbmRsZXJcbiAgICB9XG4gICAgcmVBY3RpdmUgKCl7fVxuICAgIGFjdGl2ZSAoKSB7XG4gICAgICAgIHN1cGVyLmFjdGl2ZSgpO1xuICAgICAgICB0aGlzLnJlQWN0aXZlID0gdGhpcy5hY3RpdmU7XG4gICAgICAgIHRoaXMucGFnZVJlbmRlci5wZGZWaWV3ZXIuZ2V0RXZlbnRFbWl0dGVyKCkuZW1pdChFdmVudHMudGV4dE9iamVjdEFjdGl2ZSwgdGhpcyk7XG4gICAgfVxuICAgIHVuQWN0aXZlICgpIHtcbiAgICAgICAgc3VwZXIudW5BY3RpdmUoKTtcbiAgICAgICAgdGhpcy51bkFjdGl2ZUNoYXJFZGl0KCk7XG4gICAgICAgIHRoaXMucmVBY3RpdmUgPSBmdW5jdGlvbigpe307XG4gICAgICAgIHRoaXMucGFnZVJlbmRlci5wZGZWaWV3ZXIuZ2V0RXZlbnRFbWl0dGVyKCkuZW1pdChFdmVudHMudGV4dE9iamVjdFVuQWN0aXZlLCB0aGlzKTtcbiAgICB9XG4gICAgdW5BY3RpdmVDaGFyRWRpdCAoKSB7XG4gICAgICAgIHRoaXMuJGNoYXJFZGl0Q29udGFpbmVyICYmIHRoaXMuJGNoYXJFZGl0Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLiRjaGFyRWRpdENvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuICAgIGluaXRDaGFyRWRpdENvbnRhaW5lciAoKSB7XG4gICAgICAgIGxldCAkY29udGFpbmVyID0gJCgnPGRpdiBjbGFzcz1cImZ2X190ZXh0LW9iamVjdC1lZGl0LWNoYXItY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImZ2X190ZXh0LW9iamVjdC1lZGl0LWNoYXItbWFzay1sYXllclwiPjwvZGl2PjxzcGFuIGNsYXNzPVwiZnZfX3RleHQtb2JqZWN0LWVkaXQtY2hhci1pbnB1dFwiIGNvbnRlbnRlZGl0YWJsZT48L3NwYW4+PC9kaXY+Jyk7XG4gICAgICAgIHRoaXMucGFnZVJlbmRlci4kaGFuZGxlci5hZnRlcigkY29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuICRjb250YWluZXI7XG4gICAgfVxuICAgIGFjdGl2ZUNoYXJFZGl0ICgpIHtcbiAgICAgICAgbGV0ICRjaGFyRWRpdENvbnRhaW5lciA9IHRoaXMuJGNoYXJFZGl0Q29udGFpbmVyID0gdGhpcy4kY2hhckVkaXRDb250YWluZXIgfHwgdGhpcy5pbml0Q2hhckVkaXRDb250YWluZXIoKTtcbiAgICAgICAgbGV0ICRtYXNrTGF5ZXIgPSAkY2hhckVkaXRDb250YWluZXIuZmluZCgnLmZ2X190ZXh0LW9iamVjdC1lZGl0LWNoYXItbWFzay1sYXllcicpO1xuICAgICAgICBsZXQgJGNoYXJJbnB1dCA9ICRjaGFyRWRpdENvbnRhaW5lci5maW5kKCcuZnZfX3RleHQtb2JqZWN0LWVkaXQtY2hhci1pbnB1dCcpO1xuICAgICAgICBsZXQgZUNoYXJJbnB1dCA9ICRjaGFySW5wdXRbMF07XG4gICAgICAgIC8vIOS9v+eUqGtleWRvd27vvIzkuI3nlKhrZXl1cO+8jGtleXVw55qE5pe25YCZ6I635Y+W55qE5paH5pys5bey57uP5piv5o2i6KGM5ZCO55qE5LqG44CCXG4gICAgICAgICRjaGFySW5wdXQub24oJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLy9lbnRlclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBsZXQgY2hhciA9IGVDaGFySW5wdXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGFyICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBjaGFyID0gZUNoYXJJbnB1dC5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VGV4dENoYXIoY2hhcikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5BY3RpdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgbGV0IHRleHRPYmplY3QgPSB0aGlzLmdyYXBoaWNzT2JqZWN0O1xuICAgICAgICBsZXQgdGV4dFJlY3QgPSB0ZXh0T2JqZWN0LmdldFJlY3QoKTtcbiAgICAgICAgbGV0IHBhZ2VSZW5kZXIgPSB0aGlzLnBhZ2VSZW5kZXI7XG4gICAgICAgIC8vbGV0IHBkZlBhZ2U7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbcGFnZVJlbmRlci5nZXRQREZQYWdlKCksIHBhZ2VSZW5kZXIuZ2V0U2NhbGUoKV0pLnRoZW4oKFtwZGZQYWdlLCBzY2FsZV0pID0+IHtcbiAgICAgICAgICAgIC8vcGRmUGFnZSA9IF9wZGZQYWdlO1xuICAgICAgICAgICAgcmV0dXJuIFtwZGZQYWdlLmdldERldmljZVJlY3QodGV4dFJlY3QsIHNjYWxlKSwgcGRmUGFnZSwgc2NhbGVdO1xuICAgICAgICB9KS50aGVuKChbdGV4dERldmljZVJlY3QsIHBkZlBhZ2UsIHNjYWxlXSkgPT4ge1xuICAgICAgICAgICAgLy9sZXQgJG1hc2tMYXllciA9ICQoJzxkaXYgY2xhc3M9XCJmdl9fdGV4dC1vYmplY3QtZWRpdC1jaGFyLW1hc2stbGF5ZXJcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICRjaGFyRWRpdENvbnRhaW5lci5jc3Moe1xuICAgICAgICAgICAgICAgIGxlZnQ6IHRleHREZXZpY2VSZWN0LmxlZnQgKyAncHgnLFxuICAgICAgICAgICAgICAgIHRvcDogdGV4dERldmljZVJlY3QuYm90dG9tICsgJ3B4JyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBlQ2hhcklucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAkbWFza0xheWVyLmNzcyh7XG4gICAgICAgICAgICAgICAgLy9sZWZ0OiB0ZXh0RGV2aWNlUmVjdC5sZWZ0ICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAvL3RvcDogdGV4dERldmljZVJlY3QudG9wICsgJ3B4JyxcbiAgICAgICAgICAgICAgICB3aWR0aDogKHRleHREZXZpY2VSZWN0LnJpZ2h0IC0gdGV4dERldmljZVJlY3QubGVmdCkgKyAncHgnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogKHRleHREZXZpY2VSZWN0LmJvdHRvbSAtIHRleHREZXZpY2VSZWN0LnRvcCkgKyAncHgnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBpbnB1dOaWueahiOS8mOWKv++8jOm7mOiupEVudGVy6L6T5YWl5Yqo5L2c5a6M5oiQ77yMc2VsZWN05pe25py65Li75Yqo77yM6buY6K6kcHJl77yb5Yqj5Yq/77yM5a695bqm6ZyA6KaB6K6h566X77yI5raJ5Y+KRG9t6K6h566X77yM5L2O5pWI77yJXG4gICAgICAgICAgICAvL2xldCAkY2hhckZvcm0gPSAkKCc8Zm9ybSBjbGFzcz1cImZ2X190ZXh0LW9iamVjdC1lZGl0LWNoYXItZm9ybVwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZnZfX3RleHQtb2JqZWN0LWVkaXQtY2hhci1pbnB1dFwiLz48L2Zvcm0+Jyk7XG4gICAgICAgICAgICAvL2xldCAkY2hhcklucHV0ID0gJGNoYXJGb3JtLmZpbmQoJy5mdl9fdGV4dC1vYmplY3QtZWRpdC1jaGFyLWlucHV0Jyk7XG4gICAgICAgICAgICAvLyRjaGFyRm9ybS5vbignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vICAgIHRoaXMuc2V0VGV4dENoYXIoJGNoYXJJbnB1dC52YWwoKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgJGNoYXJFZGl0Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuJGNoYXJFZGl0Q29udGFpbmVyID0gbnVsbDtcbiAgICAgICAgICAgIC8vICAgIH0pO1xuICAgICAgICAgICAgLy99KTtcbiAgICAgICAgICAgIC8vJGNoYXJJbnB1dC52YWwodGV4dE9iamVjdC5pbmZvLnRleHRTdGF0ZS50ZXh0KTtcbiAgICAgICAgICAgIC8vbGV0IG1hdHJpeCA9IHBkZlBhZ2UuZ2V0UERGTWF0cml4KCk7XG4gICAgICAgICAgICAvLy8vbGV0IHB0U2NhbGUgPSBzY2FsZSAqIHB0UHhSYXRpbztcbiAgICAgICAgICAgIC8vbWF0cml4LnNjYWxlKHNjYWxlLCBzY2FsZSk7XG4gICAgICAgICAgICAvL2xldCBbeCwgeV0gPSBtYXRyaXgudHJhbnNmb3JtUG9pbnQodGV4dFJlY3QubGVmdCwgdGV4dFJlY3QuYm90dG9tKTtcbiAgICAgICAgICAgIC8vJGNoYXJGb3JtLmNzcyh7XG4gICAgICAgICAgICAvLyAgICBsZWZ0OiB4ICsgJ3B0JyxcbiAgICAgICAgICAgIC8vICAgIGJvdHRvbTogeSArICdwdCcsXG4gICAgICAgICAgICAvL30pXG4gICAgICAgICAgICAvLyRjaGFyRm9ybS5jc3Moe1xuICAgICAgICAgICAgLy8gICAgbGVmdDogdGV4dERldmljZVJlY3QubGVmdCArICdweCcsXG4gICAgICAgICAgICAvLyAgICB0b3A6IHRleHREZXZpY2VSZWN0LnRvcCArICdweCcsXG4gICAgICAgICAgICAvL30pXG4gICAgICAgICAgICAvL2xldCAkY2hhcklucHV0ID0gJCgnPHNwYW4gY2xhc3M9XCJmdl9fdGV4dC1vYmplY3QtZWRpdC1jaGFyLWlucHV0XCIgY29udGVudGVkaXRhYmxlPjwvc3Bhbj4nKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZUNoYXJJbnB1dC50ZXh0Q29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBlQ2hhcklucHV0LnRleHRDb250ZW50ID0gdGV4dE9iamVjdC5pbmZvLnRleHRTdGF0ZS50ZXh0XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVDaGFySW5wdXQuaW5uZXJUZXh0ID0gdGV4dE9iamVjdC5pbmZvLnRleHRTdGF0ZS50ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9udFNpemUgPSB0ZXh0T2JqZWN0LmluZm8udGV4dFN0YXRlLnNpemU7XG4gICAgICAgICAgICBsZXQgbWF0cml4ID0gW10uY29uY2F0KHRleHRPYmplY3QuaW5mby50ZXh0U3RhdGUubWF0cml4KTtcbiAgICAgICAgICAgIGxldCBkaWZmU2NhbGUgPSAxMjtcbiAgICAgICAgICAgIGlmIChmb250U2l6ZSAqIHB0UHhSYXRpbyA8IGRpZmZTY2FsZSkge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplICo9IGRpZmZTY2FsZTtcbiAgICAgICAgICAgICAgICBtYXRyaXhbMF0gLz0gZGlmZlNjYWxlO1xuICAgICAgICAgICAgICAgIG1hdHJpeFsxXSAvPSBkaWZmU2NhbGU7XG4gICAgICAgICAgICAgICAgbWF0cml4WzJdIC89IGRpZmZTY2FsZTtcbiAgICAgICAgICAgICAgICBtYXRyaXhbM10gLz0gZGlmZlNjYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0cml4WzBdICo9IHNjYWxlO1xuICAgICAgICAgICAgbWF0cml4WzFdICo9IC1zY2FsZTtcbiAgICAgICAgICAgIG1hdHJpeFsyXSAqPSAtc2NhbGU7XG4gICAgICAgICAgICBtYXRyaXhbM10gKj0gc2NhbGU7XG4gICAgICAgICAgICAkY2hhcklucHV0LmNzcyh7XG4gICAgICAgICAgICAgICAgLy9sZWZ0OiB0ZXh0RGV2aWNlUmVjdC5sZWZ0ICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAvL3RvcDogdGV4dERldmljZVJlY3QudG9wICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnXCInICsgW3RleHRPYmplY3QuaW5mby50ZXh0U3RhdGUuZm9udC5iYXNlTmFtZSx0ZXh0T2JqZWN0LmluZm8udGV4dFN0YXRlLmZvbnQuZmFtaWx5TmFtZSwgdGV4dE9iamVjdC5pbmZvLnRleHRTdGF0ZS5mb250Lm5hbWVLZXksIHRleHRPYmplY3QuaW5mby50ZXh0U3RhdGUuZm9udC5uYW1lLCAnRm94aXRQREZTREtGb3JXZWInXS5qb2luKCdcIixcIicpICsgJ1wiJyxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogZm9udFNpemUgKyAncHQnLFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHRleHRPYmplY3QuaW5mby50ZXh0U3RhdGUuZm9udC5pc0JvbGQgPyA3MDAgOiA0MDAsXG4gICAgICAgICAgICAgICAgZm9udFN0eWxlOiB0ZXh0T2JqZWN0LmluZm8udGV4dFN0YXRlLmZvbnQuaXNJdGFsaWMgPyAnaXRhbGljJyA6ICcnLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ21hdHJpeCgnICsgbWF0cml4LmpvaW4oJywnKSArICcsMCwwKScsXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbnZlcnRGcm9tTnVtYmVyVG9IZXgodGV4dE9iamVjdC5nZXRGaWxsQ29sb3IoKSAmIDB4RkZGRkZGKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyRjaGFyRWRpdENvbnRhaW5lci5hcHBlbmQgKCRtYXNrTGF5ZXIpO1xuICAgICAgICAgICAgLy8kY2hhckVkaXRDb250YWluZXIuYXBwZW5kICgkY2hhckZvcm0pO1xuICAgICAgICAgICAgLy8kY2hhckVkaXRDb250YWluZXIuYXBwZW5kICgkY2hhcklucHV0KTtcbiAgICAgICAgICAgIGFkZEZvbnQodGV4dE9iamVjdC5pbmZvLnRleHRTdGF0ZS5mb250Lm5hbWVLZXkgfHwgdGV4dE9iamVjdC5pbmZvLnRleHRTdGF0ZS5mb250Lm5hbWUsIHRleHRPYmplY3QuZ2V0V29mZi5iaW5kKHRleHRPYmplY3QpKVxuICAgICAgICAgICAgdGhpcy5yZUFjdGl2ZSA9IHRoaXMuYWN0aXZlQ2hhckVkaXQ7XG4gICAgICAgICAgICB0aGlzLnBhZ2VSZW5kZXIucGRmVmlld2VyLmdldEV2ZW50RW1pdHRlcigpLmVtaXQoRXZlbnRzLnRleHRPYmplY3RBY3RpdmUsIHRoaXMpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBzZXRUZXh0Q2hhciAoY2hhcikge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaGljc09iamVjdC5zZXRUZXh0KGNoYXIpXG4gICAgfVxuICAgIGdldENvbnRleHRNZW51Q29uZmlnKCl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2V0VGV4dENoYXIgKCkge1xuICAgICAgICBpZiAodGhpcy4kY2hhckVkaXRDb250YWluZXIpIHtcbiAgICAgICAgICAgIGxldCBlQ2hhcklucHV0ID0gdGhpcy4kY2hhckVkaXRDb250YWluZXIuZmluZCgnLmZ2X190ZXh0LW9iamVjdC1lZGl0LWNoYXItaW5wdXQnKVswXTtcbiAgICAgICAgICAgIGxldCBjaGFyID0gZUNoYXJJbnB1dC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hhciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjaGFyID0gZUNoYXJJbnB1dC5pbm5lclRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hhcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nZXRNb2RlbCgpLmdldFRleHQoKTtcbiAgICB9XG4gICAgdGV4dENoYXJTdXJlICgpIHtcbiAgICAgICAgaWYgKHRoaXMuJGNoYXJFZGl0Q29udGFpbmVyKSB7XG4gICAgICAgICAgICBsZXQgZUNoYXJJbnB1dCA9IHRoaXMuJGNoYXJFZGl0Q29udGFpbmVyLmZpbmQoJy5mdl9fdGV4dC1vYmplY3QtZWRpdC1jaGFyLWlucHV0JylbMF07XG4gICAgICAgICAgICBsZXQgY2hhciA9IGVDaGFySW5wdXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoYXIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY2hhciA9IGVDaGFySW5wdXQuaW5uZXJUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TW9kZWwoKS5zZXRUZXh0KGNoYXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRGcm9tTnVtYmVyVG9IZXgoY29sb3IpIHtcbiAgICBpZihjb2xvciA8IDApIHtcbiAgICAgICAgcmV0dXJuICcjMDAwMDAwJztcbiAgICB9XG4gICAgbGV0IGhleCA9IGNvbG9yLnRvU3RyaW5nKDE2KTtcbiAgICBsZXQgbGVuID0gNjtcbiAgICBpZihjb2xvciA+IDB4RkZGRkZGKSB7XG4gICAgICAgIGxlbiA9IDg7XG4gICAgfVxuICAgIHdoaWxlKGhleC5sZW5ndGggPCBsZW4pIHtcbiAgICAgICAgaGV4ID0gJzAnICsgaGV4O1xuICAgIH1cbiAgICByZXR1cm4gYCNgICsgaGV4O1xufSIsIi8qKlxuICogQ3JlYXRlZCBieSBsaW5jIG9uIDIwMTkvNi8yNC5cbiAqL1xuaW1wb3J0ICogYXMgUERGVmlld0N0cmwgZnJvbSAnUERGVmlld0N0cmwnO1xuaW1wb3J0IEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XG5sZXQgY2xhc3NOYW1lID0gJ2Z2X19hZGQtdGV4dC1vYmplY3Qtc3RhdGUtaGFuZGxlcic7XG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vRXZlbnRzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQWRkVGV4dE9iamVjdFN0YXRlSGFuZGxlciAoYWRkb24pIHtcbiAgICBjb25zdCBncmFwaGljc01hbmFnZXIgPSBhZGRvbi5ncmFwaGljc01hbmFnZXI7XG4gICAgcmV0dXJuIGNsYXNzIEFkZFRleHRPYmplY3RTdGF0ZUhhbmRsZXIgZXh0ZW5kcyBQREZWaWV3Q3RybC5JU3RhdGVIYW5kbGVyIHtcbiAgICAgICAgY29uc3RydWN0b3IgKHBkZlZpZXdlcikge1xuICAgICAgICAgICAgc3VwZXIocGRmVmlld2VyKVxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBnZXRTdGF0ZU5hbWUgKCkge1xuICAgICAgICAgICAgcmV0dXJuICdhZGQtdGV4dC1vYmplY3QnO1xuICAgICAgICB9XG4gICAgICAgIHBhZ2VIYW5kbGVyIChwYWdlUmVuZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VSZW5kZXIgPSBwYWdlUmVuZGVyO1xuICAgICAgICAgICAgbGV0IHBkZlBhZ2VQcm9taXNlID0gcGFnZVJlbmRlci5nZXRQREZQYWdlKCk7XG4gICAgICAgICAgICBsZXQgJGhhbmRsZXIgPSBwYWdlUmVuZGVyLiRoYW5kbGVyO1xuICAgICAgICAgICAgbGV0IGVIYW5kbGVyID0gJGhhbmRsZXJbMF07XG4gICAgICAgICAgICAkaGFuZGxlci5hZGRDbGFzcyhjbGFzc05hbWUpO1xuXG4gICAgICAgICAgICBsZXQgaGFtbWVyID0gdGhpcy5oYW1tZXIgPSBuZXcgSGFtbWVyKGVIYW5kbGVyKTtcblxuICAgICAgICAgICAgaGFtbWVyLm9uKCd0YXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZVBvaW50ZXIgPSBlLmNoYW5nZWRQb2ludGVyc1swXTtcbiAgICAgICAgICAgICAgICBwZGZQYWdlUHJvbWlzZS50aGVuKChwYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbcGFnZSwgcGFnZS5yZXZlcnNlRGV2aWNlUG9pbnQoW3NpbmdsZVBvaW50ZXIub2Zmc2V0WCwgc2luZ2xlUG9pbnRlci5vZmZzZXRZXSwgcGFnZVJlbmRlci5nZXRTY2FsZSgpKV1cbiAgICAgICAgICAgICAgICB9KS50aGVuKChbcGFnZSwgW3gsIHldXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFnZS5hZGRHcmFwaGljc09iamVjdChPYmplY3QuYXNzaWduKHt9LCB0aGlzLmFkZFBhcmFtcywge29yaWdpblBvc2l0aW9uOnt4LCB5fX0sIHt0eXBlOiAxfSkpXG4gICAgICAgICAgICAgICAgfSkudGhlbigoZ3JhcGhpY3NPYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFncmFwaGljc09iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuW2dyYXBoaWNzTWFuYWdlci5nZXQoZ3JhcGhpY3NPYmplY3QpLCBncmFwaGljc09iamVjdF07XG4gICAgICAgICAgICAgICAgfSkudGhlbigoW0dyYXBoaWNzT2JqZWN0Q29tcG9uZW50LCBncmFwaGljc09iamVjdF0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBHcmFwaGljc09iamVjdENvbXBvbmVudChncmFwaGljc09iamVjdCwgcGFnZVJlbmRlciwgYWRkb24pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKGdyYXBoaWNzT2JqZWN0Q29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENvbXBvbmV0ID0gZ3JhcGhpY3NPYmplY3RDb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdyYXBoaWNzT2JqZWN0Q29tcG9uZW50KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JhcGhpY3NPYmplY3RDb21wb25lbnQuYWN0aXZlQ2hhckVkaXQoKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlPT57XG4gICAgICAgICAgICAgICAgICAgIGUmJmNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENvbXBvbmV0PW51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGRmVmlld2VyLnNldEFjdGl2ZUVsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnBkZlZpZXdlci5nZXRFdmVudEVtaXR0ZXIoKS5vbihFdmVudHMuYWRkVGV4dE9iamVjdFBhcmFtVHJhbnNmZXIsIHRoaXMuYWRkVGV4dE9iamVjdFBhcmFtVHJhbnNmZXJCaW5kID0gKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUGFyYW1zID0gcGFyYW1zO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBkZXN0cm95UGFnZUhhbmRsZXIgKCkge1xuICAgICAgICAgICAgdGhpcy5oYW1tZXIgJiYgdGhpcy5oYW1tZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5wYWdlUmVuZGVyLiRoYW5kbGVyLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB0aGlzLmFkZFBhcmFtcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnBkZlZpZXdlci5nZXRFdmVudEVtaXR0ZXIoKS5vZmYoRXZlbnRzLmFkZFRleHRPYmplY3RQYXJhbVRyYW5zZmVyLCB0aGlzLmFkZFRleHRPYmplY3RQYXJhbVRyYW5zZmVyQmluZClcbiAgICAgICAgICAgIHRoaXMucmVzZXRIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgb3V0ICgpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveVBhZ2VIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzZXRIYW5kbGVyICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRDb21wb25ldCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRDb21wb25ldC50ZXh0Q2hhclN1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29tcG9uZXQudGV4dENoYXJTdXJlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29tcG9uZXQudW5BY3RpdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vdGhpcy5jdXJyZW50Q29tcG9uZXQgJiYgdGhpcy5jdXJyZW50Q29tcG9uZXQudW5BY3RpdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGluYyBvbiAyMDE5LzQvMjYuXG4gKi9cbmltcG9ydCAqIGFzIFBERlZpZXdDdHJsIGZyb20gJ1BERlZpZXdDdHJsJztcbmltcG9ydCBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVHcmFwaGljc1N0YXRlSGFuZGxlciAoYWRkb24sIHR5cGUpIHtcbiAgICBjb25zdCBncmFwaGljc01hbmFnZXIgPSBhZGRvbi5ncmFwaGljc01hbmFnZXI7XG4gICAgbGV0IHR5cGVOYW1lID0gWycnLCAndGV4dCcsICdwYXRoJywgJ2ltYWdlJywgJ3NoYWRpbmcnLCdhbGwnXVt0eXBlXTtcbiAgICBsZXQgY2xhc3NOYW1lID0gdHlwZU5hbWUgPyBbJ2Z2X19lZGl0LScsIHR5cGVOYW1lLCAnLXN0YXRlLWhhbmRsZXInXS5qb2luKCcnKSA6ICcnO1xuICAgIGNsYXNzTmFtZSArPSAnIGZ2X19lZGl0LWdyYXBoaWNzLXN0YXRlLWhhbmRsZXInO1xuXG4gICAgcmV0dXJuIGNsYXNzIEdyYXBoaWNzU3RhdGVIYW5kbGVyIGV4dGVuZHMgUERGVmlld0N0cmwuSVN0YXRlSGFuZGxlciB7XG4gICAgICAgIGNvbnN0cnVjdG9yIChwZGZWaWV3ZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKHBkZlZpZXdlcik7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGdldFN0YXRlTmFtZSAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2VkaXQtJyArIHR5cGVOYW1lO1xuICAgICAgICB9XG4gICAgICAgIHBhZ2VIYW5kbGVyIChwYWdlUmVuZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VSZW5kZXIgPSBwYWdlUmVuZGVyO1xuICAgICAgICAgICAgbGV0IHBkZlBhZ2VQcm9taXNlID0gcGFnZVJlbmRlci5nZXRQREZQYWdlKCk7XG4gICAgICAgICAgICBsZXQgJGhhbmRsZXIgPSBwYWdlUmVuZGVyLiRoYW5kbGVyO1xuICAgICAgICAgICAgbGV0IGVIYW5kbGVyID0gJGhhbmRsZXJbMF07XG4gICAgICAgICAgICAkaGFuZGxlci5hZGRDbGFzcyhjbGFzc05hbWUpO1xuXG4gICAgICAgICAgICBsZXQgaGFtbWVyID0gdGhpcy5oYW1tZXIgPSBuZXcgSGFtbWVyKGVIYW5kbGVyKTtcblxuICAgICAgICAgICAgaGFtbWVyLm9uKCd0YXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKCdmdl9fc2hhcGUtY29udHJvbC1tb3ZlLWFyZWEnKSE9LTEpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZVBvaW50ZXIgPSBlLmNoYW5nZWRQb2ludGVyc1swXTtcbiAgICAgICAgICAgICAgICBwZGZQYWdlUHJvbWlzZS50aGVuKChwYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbcGFnZSwgcGFnZS5yZXZlcnNlRGV2aWNlUG9pbnQoW3NpbmdsZVBvaW50ZXIub2Zmc2V0WCwgc2luZ2xlUG9pbnRlci5vZmZzZXRZXSwgcGFnZVJlbmRlci5nZXRTY2FsZSgpKV1cbiAgICAgICAgICAgICAgICB9KS50aGVuKChbcGFnZSwgW3gsIHldXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZih0eXBlPT09NSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2UuZ2V0R3JhcGhpY3NPYmplY3RBdFBvaW50KFt4LCB5XSwgNSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWdlLmdldEdyYXBoaWNzT2JqZWN0QXRQb2ludChbeCwgeV0sIDMsIHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbigoZ3JhcGhpY3NPYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFncmFwaGljc09iamVjdCB8fCBncmFwaGljc09iamVjdC50eXBlPDEgfHxncmFwaGljc09iamVjdC50eXBlPjMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm5bZ3JhcGhpY3NNYW5hZ2VyLmdldChncmFwaGljc09iamVjdCksIGdyYXBoaWNzT2JqZWN0XTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChbR3JhcGhpY3NPYmplY3RDb21wb25lbnQsIGdyYXBoaWNzT2JqZWN0XSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdyYXBoaWNzT2JqZWN0Q29tcG9uZW50KGdyYXBoaWNzT2JqZWN0LCBwYWdlUmVuZGVyLCBhZGRvbik7XG4gICAgICAgICAgICAgICAgfSkudGhlbigoZ3JhcGhpY3NPYmplY3RDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29tcG9uZXQgPSBncmFwaGljc09iamVjdENvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdyYXBoaWNzT2JqZWN0Q29tcG9uZW50LmFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGU9PntcbiAgICAgICAgICAgICAgICAgICAgZSYmY29uc29sZS5lcnJvcihlKTsgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENvbXBvbmV0PW51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGRmVmlld2VyLnNldEFjdGl2ZUVsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGRlc3Ryb3lQYWdlSGFuZGxlciAoKSB7XG4gICAgICAgICAgICB0aGlzLmhhbW1lciAmJiB0aGlzLmhhbW1lci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnBhZ2VSZW5kZXIuJGhhbmRsZXIucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgb3V0ICgpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveVBhZ2VIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzZXRIYW5kbGVyICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRDb21wb25ldCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRDb21wb25ldC50ZXh0Q2hhclN1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29tcG9uZXQudGV4dENoYXJTdXJlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29tcG9uZXQudW5BY3RpdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGluYyBvbiAyMDE5LzYvMTkuXG4gKi9cbmltcG9ydCAqIGFzIFBERlZpZXdDdHJsIGZyb20gJ1BERlZpZXdDdHJsJztcbmltcG9ydCBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWRpdFRleHRTdGF0ZUhhbmRsZXIgKGFkZG9uKSB7XG4gICAgY29uc3QgZ3JhcGhpY3NNYW5hZ2VyID0gYWRkb24uZ3JhcGhpY3NNYW5hZ2VyO1xuICAgIGxldCB0eXBlID0gMTtcbiAgICBsZXQgdHlwZU5hbWUgPSBbJycsICd0ZXh0JywgJ3BhdGgnLCAnaW1hZ2UnLCAnc2hhZGluZycsJ2FsbCddW3R5cGVdO1xuICAgIGxldCBjbGFzc05hbWUgPSB0eXBlTmFtZSA/IFsnZnZfX2VkaXQtJywgdHlwZU5hbWUsICctc3RhdGUtaGFuZGxlciddLmpvaW4oJycpIDogJyc7XG4gICAgY2xhc3NOYW1lICs9ICcgZnZfX2VkaXQtZ3JhcGhpY3Mtc3RhdGUtaGFuZGxlcic7XG5cbiAgICByZXR1cm4gY2xhc3MgR3JhcGhpY3NTdGF0ZUhhbmRsZXIgZXh0ZW5kcyBQREZWaWV3Q3RybC5JU3RhdGVIYW5kbGVyIHtcbiAgICAgICAgY29uc3RydWN0b3IgKHBkZlZpZXdlcikge1xuICAgICAgICAgICAgc3VwZXIocGRmVmlld2VyKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgZ2V0U3RhdGVOYW1lICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnZWRpdC0nICsgdHlwZU5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZUhhbmRsZXIgKHBhZ2VSZW5kZXIpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZVJlbmRlciA9IHBhZ2VSZW5kZXI7XG4gICAgICAgICAgICBsZXQgcGRmUGFnZVByb21pc2UgPSBwYWdlUmVuZGVyLmdldFBERlBhZ2UoKTtcbiAgICAgICAgICAgIGxldCAkaGFuZGxlciA9IHBhZ2VSZW5kZXIuJGhhbmRsZXI7XG4gICAgICAgICAgICBsZXQgZUhhbmRsZXIgPSAkaGFuZGxlclswXTtcbiAgICAgICAgICAgICRoYW5kbGVyLmFkZENsYXNzKGNsYXNzTmFtZSk7XG5cbiAgICAgICAgICAgIC8vbGV0IGhhbW1lciA9IHRoaXMuaGFtbWVyID0gbmV3IEhhbW1lcihlSGFuZGxlcik7XG5cbiAgICAgICAgICAgIGxldCBoYW1tZXIgPSB0aGlzLmhhbW1lciA9IG5ldyBIYW1tZXIuTWFuYWdlcihlSGFuZGxlciwge1xuICAgICAgICAgICAgICAgIHJlY29nbml6ZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgIFtIYW1tZXIuUGFuLCB7IGRpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEwgfV1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFRhcCByZWNvZ25pemVyIHdpdGggbWluaW1hbCAyIHRhcHNcbiAgICAgICAgICAgIGhhbW1lci5hZGQoIG5ldyBIYW1tZXIuVGFwKHsgZXZlbnQ6ICdkb3VibGV0YXAnLCB0YXBzOiAyIH0pICk7XG4gICAgICAgICAgICAvLyBTaW5nbGUgdGFwIHJlY29nbml6ZXJcbiAgICAgICAgICAgIGhhbW1lci5hZGQoIG5ldyBIYW1tZXIuVGFwKHsgZXZlbnQ6ICdzaW5nbGV0YXAnIH0pICk7XG4gICAgICAgICAgICAvLyB3ZSB3YW50IHRvIHJlY29nbml6ZSB0aGlzIHNpbXVsYXRlbm91cywgc28gYSBxdWFkcnVwbGV0YXAgd2lsbCBiZSBkZXRlY3RlZCBldmVuIHdoaWxlIGEgdGFwIGhhcyBiZWVuIHJlY29nbml6ZWQuXG4gICAgICAgICAgICBoYW1tZXIuZ2V0KCdkb3VibGV0YXAnKS5yZWNvZ25pemVXaXRoKCdzaW5nbGV0YXAnKTtcbiAgICAgICAgICAgIC8vIHdlIG9ubHkgd2FudCB0byB0cmlnZ2VyIGEgdGFwLCB3aGVuIHdlIGRvbid0IGhhdmUgZGV0ZWN0ZWQgYSBkb3VibGV0YXBcbiAgICAgICAgICAgIGhhbW1lci5nZXQoJ3NpbmdsZXRhcCcpLnJlcXVpcmVGYWlsdXJlKCdkb3VibGV0YXAnKTtcblxuICAgICAgICAgICAgaGFtbWVyLm9uKCdzaW5nbGV0YXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZVBvaW50ZXIgPSBlLmNoYW5nZWRQb2ludGVyc1swXTtcbiAgICAgICAgICAgICAgICBwZGZQYWdlUHJvbWlzZS50aGVuKChwYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbcGFnZSwgcGFnZS5yZXZlcnNlRGV2aWNlUG9pbnQoW3NpbmdsZVBvaW50ZXIub2Zmc2V0WCwgc2luZ2xlUG9pbnRlci5vZmZzZXRZXSwgcGFnZVJlbmRlci5nZXRTY2FsZSgpKV1cbiAgICAgICAgICAgICAgICB9KS50aGVuKChbcGFnZSwgW3gsIHldXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZih0eXBlPT09NSl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFnZS5nZXRHcmFwaGljc09iamVjdEF0UG9pbnQoW3gsIHldLCAzLCAyKS50aGVuKChncmFwaGljc09iamVjdCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihncmFwaGljc09iamVjdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBncmFwaGljc09iamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2UuZ2V0R3JhcGhpY3NPYmplY3RBdFBvaW50KFt4LCB5XSwgMywgMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2UuZ2V0R3JhcGhpY3NPYmplY3RBdFBvaW50KFt4LCB5XSwgMywgdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKChncmFwaGljc09iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWdyYXBoaWNzT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5bZ3JhcGhpY3NNYW5hZ2VyLmdldChncmFwaGljc09iamVjdCksIGdyYXBoaWNzT2JqZWN0XTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChbR3JhcGhpY3NPYmplY3RDb21wb25lbnQsIGdyYXBoaWNzT2JqZWN0XSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEdyYXBoaWNzT2JqZWN0Q29tcG9uZW50KGdyYXBoaWNzT2JqZWN0LCBwYWdlUmVuZGVyLCBhZGRvbik7XG4gICAgICAgICAgICAgICAgfSkudGhlbigoZ3JhcGhpY3NPYmplY3RDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29tcG9uZXQgPSBncmFwaGljc09iamVjdENvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdyYXBoaWNzT2JqZWN0Q29tcG9uZW50LmFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGU9PntcbiAgICAgICAgICAgICAgICAgICAgZSYmY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29tcG9uZXQ9bnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZGZWaWV3ZXIuc2V0QWN0aXZlRWxlbWVudCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBoYW1tZXIub24oJ2RvdWJsZXRhcCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgICBsZXQgc2luZ2xlUG9pbnRlciA9IGUuY2hhbmdlZFBvaW50ZXJzWzBdO1xuICAgICAgICAgICAgICAgIHBkZlBhZ2VQcm9taXNlLnRoZW4oKHBhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtwYWdlLCBwYWdlLnJldmVyc2VEZXZpY2VQb2ludChbc2luZ2xlUG9pbnRlci5vZmZzZXRYLCBzaW5nbGVQb2ludGVyLm9mZnNldFldLCBwYWdlUmVuZGVyLmdldFNjYWxlKCkpXVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKFtwYWdlLCBbeCwgeV1dKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWdlLmdldEdyYXBoaWNzT2JqZWN0QXRQb2ludChbeCwgeV0sIDMsIHR5cGUpO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKGdyYXBoaWNzT2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZ3JhcGhpY3NPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybltncmFwaGljc01hbmFnZXIuZ2V0KGdyYXBoaWNzT2JqZWN0KSwgZ3JhcGhpY3NPYmplY3RdO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKFtHcmFwaGljc09iamVjdENvbXBvbmVudCwgZ3JhcGhpY3NPYmplY3RdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR3JhcGhpY3NPYmplY3RDb21wb25lbnQoZ3JhcGhpY3NPYmplY3QsIHBhZ2VSZW5kZXIsIGFkZG9uKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChncmFwaGljc09iamVjdENvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDb21wb25ldCA9IGdyYXBoaWNzT2JqZWN0Q29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JhcGhpY3NPYmplY3RDb21wb25lbnQuYWN0aXZlQ2hhckVkaXQoKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlPT57XG4gICAgICAgICAgICAgICAgICAgIGUmJmNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENvbXBvbmV0PW51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGRmVmlld2VyLnNldEFjdGl2ZUVsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGRlc3Ryb3lQYWdlSGFuZGxlciAoKSB7XG4gICAgICAgICAgICB0aGlzLmhhbW1lciAmJiB0aGlzLmhhbW1lci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnBhZ2VSZW5kZXIuJGhhbmRsZXIucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgb3V0ICgpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveVBhZ2VIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzZXRIYW5kbGVyICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRDb21wb25ldCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRDb21wb25ldC50ZXh0Q2hhclN1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29tcG9uZXQudGV4dENoYXJTdXJlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29tcG9uZXQudW5BY3RpdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgbGluYyBvbiAyMDE5LzYvMjYuXG4gKi9cbmltcG9ydCBFZGl0R3JhcGhpY3NBZGRvbiBmcm9tICcuL0VkaXRHcmFwaGljc0FkZG9uLmpzJztcbmltcG9ydCBFZGl0R3JhcGhpY3NBZGRvbkV2ZW50cyBmcm9tICcuL0V2ZW50cy5qcyc7XG5cbmV4cG9ydCB7XG4gICAgRWRpdEdyYXBoaWNzQWRkb24sXG4gICAgRWRpdEdyYXBoaWNzQWRkb25FdmVudHMsXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF0aFBvaW50cyB7XHJcbiAgc3RhdGljIHBvaW50c1RvUmVjdCAoc3RhcnRQb2ludCwgZW5kUG9pbnQsIGlzRGV2aWNlKSB7XHJcbiAgICBsZXQgbGVmdCA9IHN0YXJ0UG9pbnQueCA+IGVuZFBvaW50LnggPyBlbmRQb2ludC54IDogc3RhcnRQb2ludC54O1xyXG4gICAgbGV0IHJpZ2h0ID0gc3RhcnRQb2ludC54IDwgZW5kUG9pbnQueCA/IGVuZFBvaW50LnggOiBzdGFydFBvaW50Lng7XHJcbiAgICBsZXQgYm90dG9tID0gc3RhcnRQb2ludC55ID4gZW5kUG9pbnQueSA/IGVuZFBvaW50LnkgOiBzdGFydFBvaW50Lnk7XHJcbiAgICBsZXQgdG9wID0gc3RhcnRQb2ludC55IDwgZW5kUG9pbnQueSA/IGVuZFBvaW50LnkgOiBzdGFydFBvaW50Lnk7XHJcblxyXG4gICAgaWYgKGlzRGV2aWNlKSB7XHJcbiAgICAgIGxldCB0ZW1wID0gYm90dG9tO1xyXG4gICAgICBib3R0b20gPSB0b3A7XHJcbiAgICAgIHRvcCA9IHRlbXA7XHJcblxyXG4gICAgICBpZiAoYm90dG9tIC0gdG9wIDwgMSkge1xyXG4gICAgICAgIGJvdHRvbSA9IHRvcCArIDE7XHJcbiAgICAgICAgdG9wIC09IDE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0b3AgLSBib3R0b20gPCAxKSB7XHJcbiAgICAgICAgdG9wID0gYm90dG9tICsgMTtcclxuICAgICAgICBib3R0b20gLT0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChyaWdodCAtIGxlZnQgPCAxKSB7XHJcbiAgICAgIHJpZ2h0ID0gbGVmdCArIDE7XHJcbiAgICAgIGxlZnQgLT0gMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2xlZnQ6IGxlZnQgLSAyLCB0b3A6IHRvcCArIDEsIHJpZ2h0OiByaWdodCArIDIsIGJvdHRvbTogYm90dG9tIC0gMX07XHJcbiAgfVxyXG4gIHN0YXRpYyBnZW5lcmF0ZVBvaW50cyAoc3RhcnRQb2ludCwgZW5kUG9pbnQsIHR5cGUpIHtcclxuICAgIGxldCB7eCwgeX0gPSBzdGFydFBvaW50O1xyXG4gICAgbGV0IHt4OiBlbmRYLCB5OiBlbmRZfSA9IGVuZFBvaW50O1xyXG5cclxuICAgIGxldCBkeCA9IGVuZFggLSB4O1xyXG4gICAgbGV0IGR5ID0gZW5kWSAtIHk7XHJcblxyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2xpbmUnOlxyXG4gICAgICAgIHJldHVybiBQYXRoUG9pbnRzLmdlbkxpbmVQb2ludHMgKHgsIHksIGR4LCBkeSk7XHJcbiAgICAgIGNhc2UgJ3NxdWFyZSc6XHJcbiAgICAgICAgcmV0dXJuIFBhdGhQb2ludHMuZ2VuU3F1YXJlUG9pbnRzICh4LCB5LCBkeCwgZHkpO1xyXG4gICAgICBjYXNlICdjaXJjbGUnOlxyXG4gICAgICAgIHJldHVybiBQYXRoUG9pbnRzLmdlbk92YWxQb2ludHMgKHgsIHksIGR4LCBkeSk7XHJcbiAgICAgIGNhc2UgJ3JvdW5kUmVjdCc6XHJcbiAgICAgICAgcmV0dXJuIFBhdGhQb2ludHMuZ2VuUm91bmRSZWN0UG9pbnRzICh4LCB5LCBkeCwgZHkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0aWMgZ2VuTGluZVBvaW50cyAoeCwgeSwgZHgsIGR5KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICByZXN1bHQucHVzaCAoWydtJywgeCwgeV0pO1xyXG4gICAgcmVzdWx0LnB1c2ggKFsnbCcsIHggKyBkeCwgeSArIGR5XSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICBzdGF0aWMgZ2VuT3ZhbFBvaW50cyAoeCwgeSwgZHgsIGR5KSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICByZXN1bHQucHVzaCAoWydtJywgeCArIGR4IC8gMiwgeV0pO1xyXG5cclxuICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQgKFxyXG4gICAgICBnZW5RdWF0ZXJDaXJjbGVQb2ludCAoeCArIGR4IC8gMiwgeSwgZHggLyAyLCBkeSAvIDIsIDEpXHJcbiAgICApO1xyXG4gICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCAoXHJcbiAgICAgIGdlblF1YXRlckNpcmNsZVBvaW50ICh4ICsgZHgsIHkgKyBkeSAvIDIsIC1keCAvIDIsIGR5IC8gMiwgMClcclxuICAgICk7XHJcbiAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0IChcclxuICAgICAgZ2VuUXVhdGVyQ2lyY2xlUG9pbnQgKHggKyBkeCAvIDIsIHkgKyBkeSwgLWR4IC8gMiwgLWR5IC8gMiwgMSlcclxuICAgICk7XHJcbiAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0IChcclxuICAgICAgZ2VuUXVhdGVyQ2lyY2xlUG9pbnQgKHgsIHkgKyBkeSAvIDIsIGR4IC8gMiwgLWR5IC8gMiwgMClcclxuICAgICk7XHJcblxyXG4gICAgcmVzdWx0LnB1c2ggKFsnaCcsIHJlc3VsdFswXVsxXSwgcmVzdWx0WzBdWzJdXSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICBzdGF0aWMgZ2VuUm91bmRSZWN0UG9pbnRzICh4LCB5LCBkeCwgZHkpIHtcclxuICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgIGxldCByb3VuZE9mZnNldFggPSAwLjIgKiBkeDtcclxuICAgIGxldCByb3VuZE9mZnNldFkgPSAwLjIgKiBkeTtcclxuICAgIGxldCBzdHJhaWdodE9mZnNldFggPSAwLjggKiBkeDtcclxuICAgIGxldCBzdHJhaWdodE9mZnNldFkgPSAwLjggKiBkeTtcclxuXHJcbiAgICByZXN1bHQucHVzaCAoWydtJywgeCArIHJvdW5kT2Zmc2V0WCwgeV0pO1xyXG4gICAgcmVzdWx0LnB1c2ggKFsnbCcsIHggKyBzdHJhaWdodE9mZnNldFgsIHldKTtcclxuXHJcbiAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0IChnZW5RdWF0ZXJDaXJjbGVQb2ludCAoXHJcbiAgICAgIHggKyBzdHJhaWdodE9mZnNldFgsXHJcbiAgICAgIHksXHJcbiAgICAgIHJvdW5kT2Zmc2V0WCxcclxuICAgICAgcm91bmRPZmZzZXRZLFxyXG4gICAgICAxXHJcbiAgICApKTtcclxuXHJcbiAgICByZXN1bHQucHVzaCAoWydsJywgeCArIGR4LCB5ICsgc3RyYWlnaHRPZmZzZXRZXSk7XHJcbiAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0IChnZW5RdWF0ZXJDaXJjbGVQb2ludCAoXHJcbiAgICAgIHggKyBkeCxcclxuICAgICAgeSArIHN0cmFpZ2h0T2Zmc2V0WSxcclxuICAgICAgLXJvdW5kT2Zmc2V0WCxcclxuICAgICAgcm91bmRPZmZzZXRZLFxyXG4gICAgICAwXHJcbiAgICApKTtcclxuXHJcbiAgICByZXN1bHQucHVzaCAoWydsJywgeCArIHJvdW5kT2Zmc2V0WCwgeSArIGR5XSk7XHJcbiAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0IChnZW5RdWF0ZXJDaXJjbGVQb2ludCAoXHJcbiAgICAgIHggKyByb3VuZE9mZnNldFgsXHJcbiAgICAgIHkgKyBkeSxcclxuICAgICAgLXJvdW5kT2Zmc2V0WCxcclxuICAgICAgLXJvdW5kT2Zmc2V0WSxcclxuICAgICAgMVxyXG4gICAgKSk7XHJcblxyXG4gICAgcmVzdWx0LnB1c2ggKFsnbCcsIHgsIHkgKyByb3VuZE9mZnNldFldKTtcclxuICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQgKGdlblF1YXRlckNpcmNsZVBvaW50IChcclxuICAgICAgeCxcclxuICAgICAgeSArIHJvdW5kT2Zmc2V0WSxcclxuICAgICAgcm91bmRPZmZzZXRYLFxyXG4gICAgICAtcm91bmRPZmZzZXRZLFxyXG4gICAgICAwXHJcbiAgICApKTtcclxuICAgIHJlc3VsdC5wdXNoIChbJ2wnLCByZXN1bHRbMF1bMV0sIHJlc3VsdFswXVsyXV0pO1xyXG4gICAgcmVzdWx0LnB1c2ggKFsnaCddKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZW5TcXVhcmVQb2ludHMgKHgsIHksIGR4LCBkeSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgcmVzdWx0LnB1c2ggKFsnbScsIHgsIHldKTtcclxuICAgIHJlc3VsdC5wdXNoIChbJ2wnLCB4ICsgZHgsIHldKTtcclxuICAgIHJlc3VsdC5wdXNoIChbJ2wnLCB4ICsgZHgsIHkgKyBkeV0pO1xyXG4gICAgcmVzdWx0LnB1c2ggKFsnbCcsIHgsIHkgKyBkeV0pO1xyXG4gICAgcmVzdWx0LnB1c2ggKFsnaCcsIHgsIHldKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5RdWF0ZXJDaXJjbGVQb2ludCAoeCwgeSwgZHgsIGR5LCBkaXJlY3QpIHtcclxuICBsZXQgcmVzdWx0ID0gW107XHJcbiAgbGV0IGZhY3RvciA9IDAuNTUyMjg0NzQ5ODMwODtcclxuICBpZiAoZGlyZWN0KSB7XHJcbiAgICByZXN1bHQucHVzaCAoWydjJywgeCArIGZhY3RvciAqIGR4LCB5XSk7XHJcbiAgICByZXN1bHQucHVzaCAoWydjJywgeCArIGR4LCB5ICsgZmFjdG9yICogZHldKTtcclxuICAgIHJlc3VsdC5wdXNoIChbJ2MnLCB4ICsgZHgsIHkgKyBkeV0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXN1bHQucHVzaCAoWydjJywgeCwgeSArIGZhY3RvciAqIGR5XSk7XHJcbiAgICByZXN1bHQucHVzaCAoWydjJywgeCArIGZhY3RvciAqIGR4LCB5ICsgZHldKTtcclxuICAgIHJlc3VsdC5wdXNoIChbJ2MnLCB4ICsgZHgsIHkgKyBkeV0pO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFBERlZpZXdDdHJsIGZyb20gJ1BERlZpZXdDdHJsJztcbmxldCAkID0gUERGVmlld0N0cmwuRGVwcy5qUXVlcnk7XG4gY29uc3QgZ2V0U2hhcGVEb20gPSAoJHBhcmVudCk9PntcbiAgbGV0IHNoYXBlRG9tID0gJHBhcmVudC5maW5kICgnLmZ2X19hZGQtcGF0aC1wcmV2aWV3Jyk7XG5cbiAgaWYgKHNoYXBlRG9tLmxlbmd0aCA9PSAwKSB7XG4gICAgc2hhcGVEb20gPSAkIChcbiAgICAgICc8Y2FudmFzIGNsYXNzPVwiZnZfX2FkZC1wYXRoLXByZXZpZXdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTtkaXNwbGF5Om5vbmVcIj48L2NhbnZhcz4nXG4gICAgKTtcbiAgICAkcGFyZW50LmFwcGVuZCAoc2hhcGVEb20pO1xuICB9XG5cbiAgcmV0dXJuIHNoYXBlRG9tO1xuIH1cbiBcbiBjb25zdCBkcmF3U2hhcGU9KHBvaW50cywgcmVjdCwgJHNoYXBlRG9tKSA9PiB7XG4gIGxldCBjYW52YXMgPSAkc2hhcGVEb21bMF1cbiAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0ICgnMmQnKTtcbiAgY3R4LmNsZWFyUmVjdCgwLDAsJHNoYXBlRG9tLndpZHRoKCksJHNoYXBlRG9tLmhlaWdodCgpKVxuXG5cbiAgY2FudmFzLndpZHRoID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdCs0O1xuICBjYW52YXMuaGVpZ2h0ID0gcmVjdC5ib3R0b20gLSByZWN0LnRvcCArNDtcbiAgY3R4LmNsZWFyUmVjdCgwLDAsJHNoYXBlRG9tLndpZHRoKCksJHNoYXBlRG9tLmhlaWdodCgpKVxuICBcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gIGN0eC5zdHJva2VTdHlsZSA9ICcjNWFhJztcblxuICBjdHgudHJhbnNmb3JtKDEsIDAsIDAsIDEsXG4gICAgLSByZWN0LmxlZnQrMiwgLSByZWN0LnRvcCsyKTtcblxuICB2YXIgYmVyc2VyID0gW107XG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBwb2ludHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgc3dpdGNoIChwb2ludHNbaW5kZXhdWzBdKSB7XG4gICAgICBjYXNlICdtJzpcbiAgICAgICAgY3R4Lm1vdmVUbyAocG9pbnRzW2luZGV4XVsxXSwgcG9pbnRzW2luZGV4XVsyXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbCc6XG4gICAgICAgIGN0eC5saW5lVG8gKHBvaW50c1tpbmRleF1bMV0sIHBvaW50c1tpbmRleF1bMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICBiZXJzZXIucHVzaCAocG9pbnRzW2luZGV4XVsxXSwgcG9pbnRzW2luZGV4XVsyXSk7XG4gICAgICAgIGlmIChiZXJzZXIubGVuZ3RoID09PSA2KSB7XG4gICAgICAgICAgY3R4LmJlemllckN1cnZlVG8gKFxuICAgICAgICAgICAgYmVyc2VyWzBdLFxuICAgICAgICAgICAgYmVyc2VyWzFdLFxuICAgICAgICAgICAgYmVyc2VyWzJdLFxuICAgICAgICAgICAgYmVyc2VyWzNdLFxuICAgICAgICAgICAgYmVyc2VyWzRdLFxuICAgICAgICAgICAgYmVyc2VyWzVdXG4gICAgICAgICAgKTtcbiAgICAgICAgICBiZXJzZXIgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2gnOlxuICAgICAgICBpZiAoYmVyc2VyLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvIChcbiAgICAgICAgICAgIGJlcnNlclswXSxcbiAgICAgICAgICAgIGJlcnNlclsxXSxcbiAgICAgICAgICAgIGJlcnNlclsyXSxcbiAgICAgICAgICAgIGJlcnNlclszXSxcbiAgICAgICAgICAgIHBvaW50c1tpbmRleF1bMV0sXG4gICAgICAgICAgICBwb2ludHNbaW5kZXhdWzJdXG4gICAgICAgICAgKTtcbiAgICAgICAgICBiZXJzZXIgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHgubGluZVRvIChwb2ludHNbaW5kZXhdWzFdLCBwb2ludHNbaW5kZXhdWzJdKTtcbiAgICAgICAgfVxuICAgICAgICBjdHguY2xvc2VQYXRoICgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjdHguc3Ryb2tlICgpO1xuXG4gICRzaGFwZURvbS5jc3MgKHtcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgfSkuc2hvdygpO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0U2hhcGVEb20sXG5kcmF3U2hhcGVcbn1cbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxpbmMgb24gMjAxOS82LzIwLlxuICovXG5sZXQgYWRkRm9udCwgcmVtb3ZlRm9udDtcbmxldCBmb250Q2FjaGVNYXAgPSB7fTtcbmlmICh0eXBlb2YgRm9udEZhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICBhZGRGb250ID0gZnVuY3Rpb24gKG5hbWUsIGdldFdvZmYpIHtcbiAgICAgICAgaWYgKGZvbnRDYWNoZU1hcFtuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZvbnRDYWNoZU1hcFtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9udENhY2hlTWFwW25hbWVdID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgZ2V0V29mZigpLnRoZW4oZnVuY3Rpb24gKHdvZmYpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXdvZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRDYWNoZU1hcFtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZm9udEZhY2UgPSBuZXcgRm9udEZhY2UobmFtZSwgd29mZi5idWZmZXIgfHwgd29mZi51cmwpXG4gICAgICAgICAgICAgICAgZm9udEZhY2UubG9hZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5mb250cy5hZGQoZm9udEZhY2UpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZvbnRGYWNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBmb250Q2FjaGVNYXBbbmFtZV07XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZW1vdmVGb250ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgaWYgKGZvbnRDYWNoZU1hcFtuYW1lXSkge1xuICAgICAgICAgICAgZm9udENhY2hlTWFwW25hbWVdLnRoZW4oZnVuY3Rpb24gKGZvbnRGYWNlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGZvbnRDYWNoZU1hcFtuYW1lXTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5mb250cy5kZWxldGUoZm9udEZhY2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn0gZWxzZSB7XG4gICAgYWRkRm9udCA9IGZ1bmN0aW9uIChuYW1lLCBnZXRXb2ZmKSB7XG4gICAgICAgIGlmIChmb250Q2FjaGVNYXBbbmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmb250Q2FjaGVNYXBbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvbnRDYWNoZU1hcFtuYW1lXSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGdldFdvZmYoKS50aGVuKGZ1bmN0aW9uICh3b2ZmKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF3b2ZmKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZm9udENhY2hlTWFwW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyAnd29mZiBpcyBpbnZhbGlkJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHdvZmYuYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFt3b2ZmLmJ1ZmZlcl0sICdhcHBsaWNhdGlvbi94LWZvbnQtd29mZicpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gd29mZi51cmw7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgICAgICAgICBsZXQgZVN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBlU3R5bGUuaW5uZXJIVE1MID0gJ0Bmb250LWZhY2V7Zm9udC1mYW1pbHk6XCInICsgbmFtZSArICdcIjsgc3JjOnVybChcIicgKyB1cmwgKyAnXCIpO30nXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlU3R5bGUpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZVN0eWxlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbW92ZUZvbnQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAoZm9udENhY2hlTWFwW25hbWVdKSB7XG4gICAgICAgICAgICBmb250Q2FjaGVNYXBbbmFtZV0udGhlbihmdW5jdGlvbiAoZVN0eWxlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGZvbnRDYWNoZU1hcFtuYW1lXTtcbiAgICAgICAgICAgICAgICBlU3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlU3R5bGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBhZGRGb250LFxuICAgIHJlbW92ZUZvbnQsXG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX1BERlZpZXdDdHJsX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2hhbW1lcmpzX187Il0sInNvdXJjZVJvb3QiOiIifQ==