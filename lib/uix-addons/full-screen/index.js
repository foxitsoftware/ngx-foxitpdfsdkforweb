(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("UIExtension"));
	else if(typeof define === 'function' && define.amd)
		define(["UIExtension"], factory);
	else if(typeof exports === 'object')
		exports["FullScreenUIXAddon"] = factory(require("UIExtension"));
	else
		root["FullScreenUIXAddon"] = factory(root["UIExtension"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./uix-addons/full-screen/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./uix-addons/full-screen/addon.info.json":
/*!************************************************!*\
  !*** ./uix-addons/full-screen/addon.info.json ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


        module.exports = null;
    

/***/ }),

/***/ "./uix-addons/full-screen/index.js":
/*!*****************************************!*\
  !*** ./uix-addons/full-screen/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UIExtension = __webpack_require__(/*! UIExtension */ "UIExtension");

var UIExtension = _interopRequireWildcard(_UIExtension);

var _addonInfo = __webpack_require__(/*! ./addon.info.json */ "./uix-addons/full-screen/addon.info.json");

var _addonInfo2 = _interopRequireDefault(_addonInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var FullScreenAddon = function (_UIExtension$UIXAddon) {
    _inherits(FullScreenAddon, _UIExtension$UIXAddon);

    function FullScreenAddon() {
        _classCallCheck(this, FullScreenAddon);

        return _possibleConstructorReturn(this, _UIExtension$UIXAddon.apply(this, arguments));
    }

    FullScreenAddon.getName = function getName() {
        return 'full-screen';
    };

    FullScreenAddon.getLoader = function getLoader() {
        return _addonInfo2.default;
    };

    FullScreenAddon.prototype.init = function init(pdfUI) {
        /*const FULL_SCREEN_COMMAND = 'full-screen-command';
        pdfUI.addKeymap(FULL_SCREEN_COMMAND, 'F11').then(_ => {
            pdfUI.addKeyboardShortcutEventListener(FULL_SCREEN_COMMAND, e => {
                requestFullScreen(document.querySelector(".fv__ui-pdfviewer"));
            });
        });*/
        window.addEventListener('resize', function (e) {
            var $nav = document.querySelector(".fv__ui-nav");
            var $sidebar = document.querySelector(".fv__ui-sidebar");
            var $tabNav = document.querySelector(".fv__ui-toolbar");
            var $ui = document.querySelector("#pdf-ui");
            function fullScreen() {
                $nav.style.display = "none";
                $sidebar.style.display = "none";
                $tabNav.style.display = "none";
                $ui.style.top = "0";
            }
            function exitFullScreen() {
                $nav.style.display = "block";
                $sidebar.style.display = "flex";
                $tabNav.style.display = "block";
                $ui.style.top = "20px";
            }
            var explorer = window.navigator.userAgent.toLowerCase();
            if (explorer.indexOf('chrome') > 0) {
                //webkit
                if (document.body.scrollHeight === window.screen.height && document.body.scrollWidth === window.screen.width) {
                    fullScreen();
                } else {
                    exitFullScreen();
                }
            } else {
                //IE 9+  fireFox
                if (window.outerHeight === window.screen.height && window.outerWidth === window.screen.width) {
                    fullScreen();
                } else {
                    exitFullScreen();
                }
            }
        });
    };

    return FullScreenAddon;
}(UIExtension.UIXAddon);

/*function requestFullScreen(element) {
    // 判断各种浏览器，找到正确的方法
    var requestMethod = element.requestFullScreen || //W3C
        element.webkitRequestFullScreen ||    //Chrome等
        element.mozRequestFullScreen || //FireFox
        element.msRequestFullScreen; //IE11
    if (requestMethod) {
        requestMethod.call(element);
    }
    else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}*/


exports.default = FullScreenAddon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GdWxsU2NyZWVuVUlYQWRkb24vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Z1bGxTY3JlZW5VSVhBZGRvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9GdWxsU2NyZWVuVUlYQWRkb24vLi91aXgtYWRkb25zL2Z1bGwtc2NyZWVuL2FkZG9uLmluZm8uanNvbiIsIndlYnBhY2s6Ly9GdWxsU2NyZWVuVUlYQWRkb24vLi91aXgtYWRkb25zL2Z1bGwtc2NyZWVuL2luZGV4LmpzIiwid2VicGFjazovL0Z1bGxTY3JlZW5VSVhBZGRvbi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiVUlFeHRlbnNpb25cIixcImNvbW1vbmpzMlwiOlwiVUlFeHRlbnNpb25cIixcImFtZFwiOlwiVUlFeHRlbnNpb25cIixcInJvb3RcIjpcIlVJRXh0ZW5zaW9uXCJ9Il0sIm5hbWVzIjpbIlVJRXh0ZW5zaW9uIiwiRnVsbFNjcmVlbkFkZG9uIiwiZ2V0TmFtZSIsImdldExvYWRlciIsImZ1bGxTY3JlZW5Mb2FkZXIiLCJpbml0IiwicGRmVUkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIiRuYXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkc2lkZWJhciIsIiR0YWJOYXYiLCIkdWkiLCJmdWxsU2NyZWVuIiwic3R5bGUiLCJkaXNwbGF5IiwidG9wIiwiZXhpdEZ1bGxTY3JlZW4iLCJleHBsb3JlciIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJzY3JlZW4iLCJoZWlnaHQiLCJzY3JvbGxXaWR0aCIsIndpZHRoIiwib3V0ZXJIZWlnaHQiLCJvdXRlcldpZHRoIiwiVUlYQWRkb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7O0lBQVlBLFc7O0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJDLGU7Ozs7Ozs7OztvQkFDVkMsTyxzQkFBVTtBQUNiLGVBQU8sYUFBUDtBQUNILEs7O29CQUNNQyxTLHdCQUFZO0FBQ2YsZUFBT0MsbUJBQVA7QUFDSCxLOzs4QkFFREMsSSxpQkFBS0MsSyxFQUFNO0FBQ1A7Ozs7OztBQU1BQyxlQUFPQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxVQUFDQyxDQUFELEVBQU87QUFDckMsZ0JBQUlDLE9BQUtDLFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBVDtBQUNBLGdCQUFJQyxXQUFTRixTQUFTQyxhQUFULENBQXVCLGlCQUF2QixDQUFiO0FBQ0EsZ0JBQUlFLFVBQVFILFNBQVNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQVo7QUFDQSxnQkFBSUcsTUFBSUosU0FBU0MsYUFBVCxDQUF1QixTQUF2QixDQUFSO0FBQ0EscUJBQVNJLFVBQVQsR0FBcUI7QUFDakJOLHFCQUFLTyxLQUFMLENBQVdDLE9BQVgsR0FBbUIsTUFBbkI7QUFDQUwseUJBQVNJLEtBQVQsQ0FBZUMsT0FBZixHQUF1QixNQUF2QjtBQUNBSix3QkFBUUcsS0FBUixDQUFjQyxPQUFkLEdBQXNCLE1BQXRCO0FBQ0FILG9CQUFJRSxLQUFKLENBQVVFLEdBQVYsR0FBYyxHQUFkO0FBQ0g7QUFDRCxxQkFBU0MsY0FBVCxHQUF5QjtBQUNyQlYscUJBQUtPLEtBQUwsQ0FBV0MsT0FBWCxHQUFtQixPQUFuQjtBQUNBTCx5QkFBU0ksS0FBVCxDQUFlQyxPQUFmLEdBQXVCLE1BQXZCO0FBQ0FKLHdCQUFRRyxLQUFSLENBQWNDLE9BQWQsR0FBc0IsT0FBdEI7QUFDQUgsb0JBQUlFLEtBQUosQ0FBVUUsR0FBVixHQUFjLE1BQWQ7QUFDSDtBQUNELGdCQUFJRSxXQUFXZCxPQUFPZSxTQUFQLENBQWlCQyxTQUFqQixDQUEyQkMsV0FBM0IsRUFBZjtBQUNBLGdCQUFHSCxTQUFTSSxPQUFULENBQWlCLFFBQWpCLElBQTJCLENBQTlCLEVBQWdDO0FBQUM7QUFDN0Isb0JBQUlkLFNBQVNlLElBQVQsQ0FBY0MsWUFBZCxLQUErQnBCLE9BQU9xQixNQUFQLENBQWNDLE1BQTdDLElBQXVEbEIsU0FBU2UsSUFBVCxDQUFjSSxXQUFkLEtBQThCdkIsT0FBT3FCLE1BQVAsQ0FBY0csS0FBdkcsRUFBOEc7QUFDMUdmO0FBQ0gsaUJBRkQsTUFFTztBQUNISTtBQUNIO0FBQ0osYUFORCxNQU1LO0FBQUM7QUFDRixvQkFBSWIsT0FBT3lCLFdBQVAsS0FBdUJ6QixPQUFPcUIsTUFBUCxDQUFjQyxNQUFyQyxJQUErQ3RCLE9BQU8wQixVQUFQLEtBQXNCMUIsT0FBT3FCLE1BQVAsQ0FBY0csS0FBdkYsRUFBOEY7QUFDMUZmO0FBQ0gsaUJBRkQsTUFFTztBQUNISTtBQUNIO0FBQ0o7QUFDSixTQS9CRDtBQWdDSCxLOzs7RUEvQ3dDcEIsWUFBWWtDLFE7O0FBa0R6RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQWxEcUJqQyxlOzs7Ozs7Ozs7OztBQ0hyQix5RCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIlVJRXh0ZW5zaW9uXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIlVJRXh0ZW5zaW9uXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkZ1bGxTY3JlZW5VSVhBZGRvblwiXSA9IGZhY3RvcnkocmVxdWlyZShcIlVJRXh0ZW5zaW9uXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJGdWxsU2NyZWVuVUlYQWRkb25cIl0gPSBmYWN0b3J5KHJvb3RbXCJVSUV4dGVuc2lvblwiXSk7XG59KShzZWxmLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX1VJRXh0ZW5zaW9uX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3VpeC1hZGRvbnMvZnVsbC1zY3JlZW4vaW5kZXguanNcIik7XG4iLCJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBudWxsO1xuICAgICIsImltcG9ydCAqIGFzIFVJRXh0ZW5zaW9uIGZyb20gJ1VJRXh0ZW5zaW9uJztcbmltcG9ydCBmdWxsU2NyZWVuTG9hZGVyIGZyb20gJy4vYWRkb24uaW5mby5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbFNjcmVlbkFkZG9uIGV4dGVuZHMgVUlFeHRlbnNpb24uVUlYQWRkb24ge1xuICAgIHN0YXRpYyBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ2Z1bGwtc2NyZWVuJztcbiAgICB9XG4gICAgc3RhdGljIGdldExvYWRlcigpIHtcbiAgICAgICAgcmV0dXJuIGZ1bGxTY3JlZW5Mb2FkZXI7XG4gICAgfVxuXG4gICAgaW5pdChwZGZVSSl7XG4gICAgICAgIC8qY29uc3QgRlVMTF9TQ1JFRU5fQ09NTUFORCA9ICdmdWxsLXNjcmVlbi1jb21tYW5kJztcbiAgICAgICAgcGRmVUkuYWRkS2V5bWFwKEZVTExfU0NSRUVOX0NPTU1BTkQsICdGMTEnKS50aGVuKF8gPT4ge1xuICAgICAgICAgICAgcGRmVUkuYWRkS2V5Ym9hcmRTaG9ydGN1dEV2ZW50TGlzdGVuZXIoRlVMTF9TQ1JFRU5fQ09NTUFORCwgZSA9PiB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEZ1bGxTY3JlZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fdWktcGRmdmlld2VyXCIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsqL1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCAkbmF2PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnZfX3VpLW5hdlwiKTtcbiAgICAgICAgICAgIGxldCAkc2lkZWJhcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ2X191aS1zaWRlYmFyXCIpO1xuICAgICAgICAgICAgbGV0ICR0YWJOYXY9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdl9fdWktdG9vbGJhclwiKTtcbiAgICAgICAgICAgIGxldCAkdWk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZGYtdWlcIik7XG4gICAgICAgICAgICBmdW5jdGlvbiBmdWxsU2NyZWVuKCl7XG4gICAgICAgICAgICAgICAgJG5hdi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICAgICAgICRzaWRlYmFyLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgICAgICAgICAgJHRhYk5hdi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICAgICAgICAgICR1aS5zdHlsZS50b3A9XCIwXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBleGl0RnVsbFNjcmVlbigpe1xuICAgICAgICAgICAgICAgICRuYXYuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgJHNpZGViYXIuc3R5bGUuZGlzcGxheT1cImZsZXhcIjtcbiAgICAgICAgICAgICAgICAkdGFiTmF2LnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xuICAgICAgICAgICAgICAgICR1aS5zdHlsZS50b3A9XCIyMHB4XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXhwbG9yZXIgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYoZXhwbG9yZXIuaW5kZXhPZignY2hyb21lJyk+MCl7Ly93ZWJraXRcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPT09IHdpbmRvdy5zY3JlZW4uaGVpZ2h0ICYmIGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGggPT09IHdpbmRvdy5zY3JlZW4ud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVsbFNjcmVlbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXRGdWxsU2NyZWVuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7Ly9JRSA5KyAgZmlyZUZveFxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cub3V0ZXJIZWlnaHQgPT09IHdpbmRvdy5zY3JlZW4uaGVpZ2h0ICYmIHdpbmRvdy5vdXRlcldpZHRoID09PSB3aW5kb3cuc2NyZWVuLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxTY3JlZW4oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleGl0RnVsbFNjcmVlbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKmZ1bmN0aW9uIHJlcXVlc3RGdWxsU2NyZWVuKGVsZW1lbnQpIHtcbiAgICAvLyDliKTmlq3lkITnp43mtY/op4jlmajvvIzmib7liLDmraPnoa7nmoTmlrnms5VcbiAgICB2YXIgcmVxdWVzdE1ldGhvZCA9IGVsZW1lbnQucmVxdWVzdEZ1bGxTY3JlZW4gfHwgLy9XM0NcbiAgICAgICAgZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbiB8fCAgICAvL0Nocm9tZeetiVxuICAgICAgICBlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuIHx8IC8vRmlyZUZveFxuICAgICAgICBlbGVtZW50Lm1zUmVxdWVzdEZ1bGxTY3JlZW47IC8vSUUxMVxuICAgIGlmIChyZXF1ZXN0TWV0aG9kKSB7XG4gICAgICAgIHJlcXVlc3RNZXRob2QuY2FsbChlbGVtZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5BY3RpdmVYT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7Ly9mb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgICAgICAgdmFyIHdzY3JpcHQgPSBuZXcgQWN0aXZlWE9iamVjdChcIldTY3JpcHQuU2hlbGxcIik7XG4gICAgICAgIGlmICh3c2NyaXB0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB3c2NyaXB0LlNlbmRLZXlzKFwie0YxMX1cIik7XG4gICAgICAgIH1cbiAgICB9XG59Ki9cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX1VJRXh0ZW5zaW9uX187Il0sInNvdXJjZVJvb3QiOiIifQ==