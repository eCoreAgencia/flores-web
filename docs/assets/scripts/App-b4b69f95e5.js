!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,n){"use strict";var o=l(n(1)),i=l(n(2)),r=l(n(3)),s=l(n(4)),a=l(n(5));function l(e){return e&&e.__esModule?e:{default:e}}new o.default,new i.default,new r.default,new s.default,new a.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.siteHeader=$(".site-header"),this.menuIcon=$(".site-header__menu-icon"),this.menuContent=$(".site-header__menu-content"),this.events()}return o(e,[{key:"events",value:function(){this.menuIcon.click(this.toggleTheMenu.bind(this))}},{key:"toggleTheMenu",value:function(){this.menuContent.toggleClass("site-header__menu-content--is-visible"),this.siteHeader.toggleClass("site-header--is-expanded"),this.menuIcon.toggleClass("site-header__menu-icon--close-x")}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.openModalButton=$(".open-modal"),this.modal=$(".modal"),this.closeModalButton=$(".modal__close"),this.events()}return o(e,[{key:"events",value:function(){this.openModalButton.click(this.openModal.bind(this)),this.closeModalButton.click(this.closeModal.bind(this)),$(document).keyup(this.keyPressHandler.bind(this))}},{key:"keyPressHandler",value:function(e){27==e.keyCode&&this.closeModal()}},{key:"openModal",value:function(){return this.modal.addClass("modal--is-visible"),!1}},{key:"closeModal",value:function(){this.modal.removeClass("modal--is-visible")}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.logoBusca=$(".search-box__icon"),this.btnBuscaVtex=$(".btn-buscar"),this.events()}return o(e,[{key:"events",value:function(){this.logoBusca.click(this.simulateClick.bind(this))}},{key:"simulateClick",value:function(){this.btnBuscaVtex.trigger("click")}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.headerContainer=$(".site-header__container"),this.primaryNavigation=$(".primary-nav"),this.headerLogo=$(".site-header__logo"),this.headerGradient=$(".site-header--with-gradient"),this.siteHeader=$(".site-header"),this.siteHeaderText=$(".site-header__text"),this.headerSvg=$(".site-header__icon"),this.headerSelector=$(".site-header__selector"),this.headerSelectorArrow=$(".arrow-down"),this.searchBox=$(".fulltext-search-box"),this.searchBoxIcon=$(".search-box__icon"),this.divisor=$(".divisor"),this.events()}return o(e,[{key:"events",value:function(){this.headerContainer.hover(this.addColors.bind(this))}},{key:"addColors",value:function(){this.headerContainer.toggleClass("site-header__container--color"),this.primaryNavigation.toggleClass("primary-nav--color"),this.headerLogo.toggleClass("site-header__logo--color"),this.siteHeader.toggleClass("site-header--with-gradient"),this.siteHeaderText.toggleClass("site-header__text--light-grey"),this.headerSvg.toggleClass("site-header__icon--light-grey"),this.headerSelector.toggleClass("site-header__selector--color"),this.searchBox.toggleClass("fulltext-search-box--color"),this.searchBoxIcon.toggleClass("search-box__icon--color"),this.headerSelectorArrow.toggleClass("arrow-down--color"),this.divisor.toggleClass("divisor--color")}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.carousel=$(".slide"),this.shelf=$(".shelf__slider .prateleira ul"),this.startSlick(),this.startSlickShelf()}return o(e,[{key:"startSlick",value:function(){this.carousel.slick({adaptiveHeight:!0,autoplay:!0,autoplaySpeed:5e3,pauseOnHover:!1,arrows:!1,dots:!0,draggable:!0,touchMove:!0,slidesToShow:1,slidesToScroll:1})}},{key:"startSlickShelf",value:function(){this.shelf.slick({adaptiveHeight:!0,autoplay:!1,arrows:!0,dots:!1,mobileFirst:!0,draggable:!0,touchMove:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:991,settings:{slidesToShow:4}},{breakpoint:767,settings:{slidesToShow:3}},{breakpoint:479,settings:{slidesToShow:2}}]})}}]),e}();t.default=i}]);