/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MobileMenu = __webpack_require__(1);

var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

var _Modal = __webpack_require__(2);

var _Modal2 = _interopRequireDefault(_Modal);

var _GeneralCorrections = __webpack_require__(3);

var _GeneralCorrections2 = _interopRequireDefault(_GeneralCorrections);

var _ColorHeader = __webpack_require__(4);

var _ColorHeader2 = _interopRequireDefault(_ColorHeader);

var _SlickCarousel = __webpack_require__(5);

var _SlickCarousel2 = _interopRequireDefault(_SlickCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mobileMenu = new _MobileMenu2.default();
var modal = new _Modal2.default();
var generalCorrections = new _GeneralCorrections2.default();
var colorHeader = new _ColorHeader2.default();
var slickCarousel = new _SlickCarousel2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MobileMenu = function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  _createClass(MobileMenu, [{
    key: "events",
    value: function events() {
      this.menuIcon.click(this.toggleTheMenu.bind(this));
    }
  }, {
    key: "toggleTheMenu",
    value: function toggleTheMenu() {
      this.menuContent.toggleClass("site-header__menu-content--is-visible");

      this.siteHeader.toggleClass("site-header--is-expanded");
      this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
  }]);

  return MobileMenu;
}();

exports.default = MobileMenu;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
  function Modal() {
    _classCallCheck(this, Modal);

    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  _createClass(Modal, [{
    key: "events",
    value: function events() {

      // clicking the open modal buton
      this.openModalButton.click(this.openModal.bind(this));

      // clicking the x close modal button
      this.closeModalButton.click(this.closeModal.bind(this));

      // pushes any key
      $(document).keyup(this.keyPressHandler.bind(this));
    }
  }, {
    key: "keyPressHandler",
    value: function keyPressHandler(e) {
      if (e.keyCode == 27) {
        this.closeModal();
      }
    }
  }, {
    key: "openModal",
    value: function openModal() {
      this.modal.addClass("modal--is-visible");
      return false;
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.modal.removeClass("modal--is-visible");
    }
  }]);

  return Modal;
}();

exports.default = Modal;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeneralCorrections = function () {
    function GeneralCorrections() {
        _classCallCheck(this, GeneralCorrections);

        this.logoBusca = $('.search-box__icon');
        this.btnBuscaVtex = $('.btn-buscar');
        this.events();
    }

    _createClass(GeneralCorrections, [{
        key: 'events',
        value: function events() {
            this.logoBusca.click(this.simulateClick.bind(this));
        }
    }, {
        key: 'simulateClick',
        value: function simulateClick() {
            this.btnBuscaVtex.trigger("click");
        }
    }]);

    return GeneralCorrections;
}();

exports.default = GeneralCorrections;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColorHeader = function () {
    function ColorHeader() {
        _classCallCheck(this, ColorHeader);

        this.headerContainer = $('.site-header__container');
        this.primaryNavigation = $('.primary-nav');
        this.headerLogo = $('.site-header__logo');
        this.headerGradient = $('.site-header--with-gradient');
        this.siteHeader = $('.site-header');
        this.siteHeaderText = $('.site-header__text');
        this.headerSvg = $('.site-header__icon');
        this.headerSelector = $('.site-header__selector');
        this.headerSelectorArrow = $('.arrow-down');
        this.searchBox = $('.fulltext-search-box');
        this.searchBoxIcon = $('.search-box__icon');
        this.events();
    }

    _createClass(ColorHeader, [{
        key: 'events',
        value: function events() {
            this.headerContainer.hover(this.addColors.bind(this));
        }
    }, {
        key: 'addColors',
        value: function addColors() {
            this.headerContainer.toggleClass('site-header__container--color');
            this.primaryNavigation.toggleClass('primary-nav--color');
            this.headerLogo.toggleClass('site-header__logo--color');
            this.siteHeader.toggleClass('site-header--with-gradient');
            this.siteHeaderText.toggleClass('site-header__text--light-grey');
            this.headerSvg.toggleClass('site-header__icon--light-grey');
            this.headerSelector.toggleClass('site-header__selector--color');
            this.searchBox.toggleClass('fulltext-search-box--color');
            this.searchBoxIcon.toggleClass('search-box__icon--color');
            this.headerSelectorArrow.toggleClass('arrow-down--color');
        }
    }]);

    return ColorHeader;
}();

exports.default = ColorHeader;

// this.headerContainer.mouseover(this.addColors.bind(this));
// this.primaryNavigation.mouseover(this.addColors.bind(this));
// this.headerContainer.mouseout(this.removeColors.bind(this));
// this.primaryNavigation.mouseout(this.removeColors.bind(this));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SlickCarousel = function () {
    function SlickCarousel() {
        _classCallCheck(this, SlickCarousel);

        this.carousel = $('.slide');
        startSlick();
    }

    _createClass(SlickCarousel, [{
        key: 'startSlick',
        value: function startSlick() {
            this.carousel.slick({
                adaptiveHeight: true,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                arrows: true,
                dots: false,
                draggable: true,
                touchMove: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }
    }]);

    return SlickCarousel;
}();

exports.default = SlickCarousel;

/***/ })
/******/ ]);