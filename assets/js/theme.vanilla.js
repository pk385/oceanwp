(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMString = exports.DOM = exports.options = void 0;
var options = oceanwpLocalize;
exports.options = options;
var DOM = {
  html: document.querySelector("html"),
  body: document.body,
  WPAdminbar: document.querySelector("#wpadminbar"),
  wrap: document.querySelector("#wrap"),
  main: document.querySelector("#main"),
  selectTags: document.querySelectorAll(options.customSelects),
  floatingBar: document.querySelector(".owp-floating-bar"),
  header: {
    site: document.querySelector("#site-header"),
    vertical: document.querySelector("#site-header.vertical-header #site-header-inner"),
    fullScreen: document.querySelector("#site-header.full_screen-header"),
    topbar: document.querySelector("#top-bar"),
    topbarWrapper: document.querySelector("#top-bar-wrap"),
    topLeftSide: document.querySelector("#site-header.top-header .header-top .left"),
    topRightSide: document.querySelector("#site-header.top-header .header-top .right")
  },
  menu: {
    nav: document.querySelector("#site-header.header-replace #site-navigation"),
    main: document.querySelector(".main-menu"),
    fullScreen: {
      menu: document.querySelector("#site-header.full_screen-header #full-screen-menu"),
      toggleMenuBtn: document.querySelector("#site-header.full_screen-header .menu-bar"),
      logo: document.querySelector("#site-logo.has-full-screen-logo")
    },
    mega: {
      menuItems: document.querySelectorAll("#site-navigation .megamenu-li.full-mega"),
      topbarMenuItems: document.querySelectorAll("#top-bar-nav .megamenu-li.full-mega"),
      menuContents: document.querySelectorAll(".navigation .megamenu-li.auto-mega .megamenu")
    },
    vertical: {
      toggleMenuBtn: document.querySelector("a.vertical-toggle")
    }
  },
  mobileMenu: {
    nav: document.querySelector("#mobile-dropdown > nav"),
    navWrapper: document.querySelector("#mobile-dropdown"),
    toggleMenuBtn: document.querySelector(".mobile-menu"),
    hamburgerBtn: document.querySelector(".mobile-menu > .hamburger"),
    menuItemsHasChildren: document.querySelectorAll("#mobile-dropdown .menu-item-has-children"),
    fullScreen: document.querySelector("#mobile-fullscreen")
  },
  search: {
    forms: document.querySelectorAll("form.header-searchform"),
    dropDown: {
      toggleSearchBtn: document.querySelector("a.search-dropdown-toggle"),
      form: document.querySelector("#searchform-dropdown")
    },
    headerReplace: {
      toggleSearchBtn: document.querySelector("a.search-header-replace-toggle"),
      closeBtn: document.querySelector("#searchform-header-replace-close"),
      form: document.querySelector("#searchform-header-replace")
    },
    overlay: {
      toggleSearchBtn: document.querySelector("a.search-overlay-toggle"),
      closeBtn: document.querySelector("#searchform-overlay a.search-overlay-close"),
      form: document.querySelector("#searchform-overlay")
    }
  },
  footer: {
    siteFooter: document.querySelector("#footer"),
    calloutFooter: document.querySelector("#footer-callout-wrap"),
    footerBar: document.querySelector("#footer-bar"),
    parallax: document.querySelector(".parallax-footer")
  },
  scroll: {
    scrollTop: document.querySelector("#scroll-top"),
    goTop: document.querySelector('a[href="#go-top"]'),
    goTopSlash: document.querySelector('body.home a[href="/#go-top"]'),
    infiniteScrollNav: document.querySelector(".infinite-scroll-nav"),
    infiniteScrollWrapper: document.querySelector(".infinite-scroll-wrap")
  },
  blog: {
    masonryGrids: document.querySelectorAll(".blog-masonry-grid")
  },
  edd: {
    carts: document.querySelectorAll(".edd-menu-icon"),
    overlayCart: document.querySelector(".owp-cart-overlay"),
    totalPrices: document.querySelectorAll(".eddmenucart-details.total"),
    quickViewModal: document.querySelector("#owp-qv-wrap"),
    quickViewContent: document.querySelector("#owp-qv-content")
  },
  woo: {
    resetVariations: document.querySelector(".reset_variations"),
    product: document.querySelector(".woocommerce div.product"),
    allProducts: document.querySelectorAll(".woocommerce ul.products"),
    categories: document.querySelectorAll(".woo-dropdown-cat .product-categories"),
    verticalThumbs: document.querySelectorAll(".owp-thumbs-layout-vertical"),
    thumbsVerticalLayout: document.querySelector(".owp-thumbs-layout-vertical"),
    grid: document.querySelector(".oceanwp-grid-list #oceanwp-grid"),
    list: document.querySelector(".oceanwp-grid-list #oceanwp-list"),
    productTabs: document.querySelector(".woocommerce div.product .woocommerce-tabs"),
    productCarts: document.querySelectorAll(".woocommerce div.product .cart"),
    productCustomerReviewLink: document.querySelector(".woocommerce div.product .woocommerce-review-link"),
    quantity: document.querySelector('input[name="quantity"]'),
    checkoutForm: document.querySelector("form.woocommerce-checkout"),
    checkoutLogin: document.querySelector("#checkout_login"),
    checkoutCoupon: document.querySelector("#checkout_coupon"),
    checkoutTimeline: document.querySelector("#owp-checkout-timeline"),
    customerBillingDetails: document.querySelector("#customer_billing_details"),
    customerShippingDetails: document.querySelector("#customer_shipping_details"),
    orderReview: document.querySelector("#order_review"),
    orderCheckoutPayment: document.querySelector("#order_checkout_payment"),
    placeOrder: document.querySelector("#place_order"),
    formActions: document.querySelector("#form_actions"),
    overlayCart: document.querySelector(".owp-cart-overlay"),
    guestAccountPageNav: document.querySelector(".owp-account-links"),
    guestAccountPageBox: document.querySelector("#customer_login"),
    quantityInputs: document.querySelectorAll(".quantity:not(.buttons_added) .qty"),
    quickView: {
      modal: document.querySelector("#owp-qv-wrap"),
      content: document.querySelector("#owp-qv-content")
    }
  }
};
exports.DOM = DOM;
var DOMString = {};
exports.DOMString = DOMString;

},{}],2:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("./lib/element");

var _theme = _interopRequireDefault(require("./theme/theme"));

var OceanWP = function OceanWP() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, OceanWP);
  (0, _defineProperty2["default"])(this, "start", function () {
    _this.theme = new _theme["default"]();
  });
};

"use script";
window.oceanwp = new OceanWP();
oceanwp.start();

},{"./lib/element":3,"./theme/theme":29,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/defineProperty":40,"@babel/runtime/helpers/interopRequireDefault":43}],3:[function(require,module,exports){
"use strict";

Element.prototype.oceanParents = function (selector) {
  var elements = [];
  var elem = this;
  var ishaveselector = selector !== undefined;

  while ((elem = elem.parentElement) !== null) {
    if (elem.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    if (!ishaveselector || elem.matches(selector)) {
      elements.push(elem);
    }
  }

  return elements;
};

},{}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSelectorValid = exports.isElement = exports.getSiblings = exports.visible = exports.offset = exports.fadeToggle = exports.fadeOut = exports.fadeIn = exports.slideToggle = exports.slideUp = exports.slideDown = exports.wrap = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var wrap = function wrap(element) {
  var wrapper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.createElement("div");

  if (element.nextSibling) {
    element.parentNode.insertBefore(wrapper, element.nextSibling);
  } else {
    element.parentNode.appendChild(wrapper);
  }

  return wrapper.appendChild(element);
};

exports.wrap = wrap;

var slideDown = function slideDown(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var display = window.getComputedStyle(element).display;

  if (display === "none") {
    display = "block";
  }

  element.style.transitionProperty = "height";
  element.style.transitionDuration = "".concat(duration, "ms");
  element.style.opacity = 0;
  element.style.display = display;
  var height = element.offsetHeight;
  element.style.height = 0;
  element.style.opacity = 1;
  element.style.overflow = "hidden";
  setTimeout(function () {
    element.style.height = "".concat(height, "px");
  }, 5);
  window.setTimeout(function () {
    element.style.removeProperty("height");
    element.style.removeProperty("overflow");
    element.style.removeProperty("transition-duration");
    element.style.removeProperty("transition-property");
    element.style.removeProperty("opacity");
  }, duration + 50);
};

exports.slideDown = slideDown;

var slideUp = function slideUp(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  element.style.boxSizing = "border-box";
  element.style.transitionProperty = "height, margin";
  element.style.transitionDuration = "".concat(duration, "ms");
  element.style.height = "".concat(element.offsetHeight, "px");
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  element.style.overflow = "hidden";
  setTimeout(function () {
    element.style.height = 0;
  }, 5);
  window.setTimeout(function () {
    element.style.display = "none";
    element.style.removeProperty("height");
    element.style.removeProperty("margin-top");
    element.style.removeProperty("margin-bottom");
    element.style.removeProperty("overflow");
    element.style.removeProperty("transition-duration");
    element.style.removeProperty("transition-property");
  }, duration + 50);
};

exports.slideUp = slideUp;

var slideToggle = function slideToggle(element, duration) {
  window.getComputedStyle(element).display === "none" ? slideDown(element, duration) : slideUp(element, duration);
};

exports.slideToggle = slideToggle;

var fadeIn = function fadeIn(element) {
  var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var options = {
    duration: 300,
    display: null,
    opacity: 1,
    callback: null
  };
  Object.assign(options, _options);
  element.style.opacity = 0;
  element.style.display = options.display || "block";
  setTimeout(function () {
    element.style.transition = "".concat(options.duration, "ms opacity ease");
    element.style.opacity = options.opacity;
  }, 5);
  setTimeout(function () {
    element.style.removeProperty("transition");
    !!options.callback && options.callback();
  }, options.duration + 50);
};

exports.fadeIn = fadeIn;

var fadeOut = function fadeOut(element) {
  var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var options = {
    duration: 300,
    display: null,
    opacity: 0,
    callback: null
  };
  Object.assign(options, _options);
  element.style.opacity = 1;
  element.style.display = options.display || "block";
  setTimeout(function () {
    element.style.transition = "".concat(options.duration, "ms opacity ease");
    element.style.opacity = options.opacity;
  }, 5);
  setTimeout(function () {
    element.style.display = "none";
    element.style.removeProperty("transition");
    !!options.callback && options.callback();
  }, options.duration + 50);
};

exports.fadeOut = fadeOut;

var fadeToggle = function fadeToggle(element, options) {
  window.getComputedStyle(element).display === "none" ? fadeIn(element, options) : fadeOut(element, options);
};

exports.fadeToggle = fadeToggle;

var offset = function offset(element) {
  if (!element.getClientRects().length) {
    return {
      top: 0,
      left: 0
    };
  } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


  var rect = element.getBoundingClientRect();
  var win = element.ownerDocument.defaultView;
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset
  };
};

exports.offset = offset;

var visible = function visible(element) {
  if (!element) {
    return false;
  }

  return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
};

exports.visible = visible;

var getSiblings = function getSiblings(e) {
  // for collecting siblings
  var siblings = []; // if no parent, return no sibling

  if (!e.parentNode) {
    return siblings;
  } // first child of the parent node


  var sibling = e.parentNode.firstChild; // collecting siblings

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return siblings;
}; // Returns true if it is a DOM element


exports.getSiblings = getSiblings;

var isElement = function isElement(o) {
  return (typeof HTMLElement === "undefined" ? "undefined" : (0, _typeof2["default"])(HTMLElement)) === "object" ? o instanceof HTMLElement // DOM2
  : o && (0, _typeof2["default"])(o) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
};

exports.isElement = isElement;

var isSelectorValid = function (dummyElement) {
  return function (selector) {
    try {
      dummyElement.querySelector(selector);
    } catch (_unused) {
      return false;
    }

    return true;
  };
}(document.createDocumentFragment());

exports.isSelectorValid = isSelectorValid;

},{"@babel/runtime/helpers/interopRequireDefault":43,"@babel/runtime/helpers/typeof":46}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("../../constants");

var BlogMasonry = function BlogMasonry() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, BlogMasonry);
  (0, _defineProperty2["default"])(this, "isotop", void 0);
  (0, _defineProperty2["default"])(this, "start", function () {
    var _DOM$blog$masonryGrid;

    (_DOM$blog$masonryGrid = _constants.DOM.blog.masonryGrids) === null || _DOM$blog$masonryGrid === void 0 ? void 0 : _DOM$blog$masonryGrid.forEach(function (blogMasonryGrid) {
      imagesLoaded(blogMasonryGrid, function (instance) {
        _this.isotop = new Isotope(blogMasonryGrid, {
          itemSelector: ".isotope-entry",
          transformsEnabled: true,
          isOriginLeft: _constants.options.isRTL ? false : true,
          transitionDuration: 0
        });
      });
    });
  });
  this.start();
};

exports["default"] = BlogMasonry;

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/defineProperty":40,"@babel/runtime/helpers/interopRequireDefault":43}],6:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _responsiveAutoHeight = _interopRequireDefault(require("responsive-auto-height"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _executed = /*#__PURE__*/new WeakMap();

var EqualHeightElements = function EqualHeightElements() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, EqualHeightElements);

  _classPrivateFieldInitSpec(this, _executed, {
    writable: true,
    value: false
  });

  (0, _defineProperty2["default"])(this, "start", function () {
    if (!!document.querySelector(".blog-equal-heights .blog-entry-inner")) {
      new _responsiveAutoHeight["default"](".blog-equal-heights .blog-entry-inner");
    }

    if (!!document.querySelector(".match-height-grid .match-height-content")) {
      new _responsiveAutoHeight["default"](".match-height-grid .match-height-content");
    }

    (0, _classPrivateFieldSet2["default"])(_this, _executed, true);
  });

  if (window.innerWidth > 768) {
    this.start();
  }

  window.addEventListener("resize", function (event) {
    if (window.innerWidth > 768 && !(0, _classPrivateFieldGet2["default"])(_this, _executed)) {
      _this.start();
    }
  });
};

var _default = EqualHeightElements;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/classPrivateFieldSet":39,"@babel/runtime/helpers/defineProperty":40,"@babel/runtime/helpers/interopRequireDefault":43,"responsive-auto-height":132}],7:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _lastWindowWidth = /*#__PURE__*/new WeakMap();

var _lastWindowHeight = /*#__PURE__*/new WeakMap();

var _footerPositionState = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onWindowLoad = /*#__PURE__*/new WeakMap();

var _onWindowResize = /*#__PURE__*/new WeakMap();

var _fixFooterAtMiddlePage = /*#__PURE__*/new WeakMap();

var _fixedFooter = /*#__PURE__*/new WeakMap();

var _parallaxFooter = /*#__PURE__*/new WeakMap();

var Footer = function Footer() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Footer);

  _classPrivateFieldInitSpec(this, _lastWindowWidth, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _lastWindowHeight, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _footerPositionState, {
    writable: true,
    value: null
  });

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldSet2["default"])(_this, _lastWindowWidth, window.innerWidth);
      (0, _classPrivateFieldSet2["default"])(_this, _lastWindowHeight, window.innerHeight);
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      window.addEventListener("load", (0, _classPrivateFieldGet2["default"])(_this, _onWindowLoad));
      window.addEventListener("resize", (0, _classPrivateFieldGet2["default"])(_this, _onWindowResize));
    }
  });

  _classPrivateFieldInitSpec(this, _onWindowLoad, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldGet2["default"])(_this, _fixFooterAtMiddlePage).call(_this);
      (0, _classPrivateFieldGet2["default"])(_this, _fixedFooter).call(_this);
      (0, _classPrivateFieldGet2["default"])(_this, _parallaxFooter).call(_this);
    }
  });

  _classPrivateFieldInitSpec(this, _onWindowResize, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldGet2["default"])(_this, _fixFooterAtMiddlePage).call(_this);

      if ((0, _classPrivateFieldGet2["default"])(_this, _lastWindowWidth) !== window.innerWidth || (0, _classPrivateFieldGet2["default"])(_this, _lastWindowHeight) !== window.innerHeight) {
        (0, _classPrivateFieldGet2["default"])(_this, _fixedFooter).call(_this);
      }

      (0, _classPrivateFieldGet2["default"])(_this, _parallaxFooter).call(_this);
    }
  });

  _classPrivateFieldInitSpec(this, _fixFooterAtMiddlePage, {
    writable: true,
    value: function value() {
      var _DOM$WPAdminbar$offse, _DOM$WPAdminbar, _DOM$footer$footerBar, _DOM$footer$footerBar2;

      var wpAdminbarHeight = (_DOM$WPAdminbar$offse = (_DOM$WPAdminbar = _constants.DOM.WPAdminbar) === null || _DOM$WPAdminbar === void 0 ? void 0 : _DOM$WPAdminbar.offsetHeight) !== null && _DOM$WPAdminbar$offse !== void 0 ? _DOM$WPAdminbar$offse : 0;
      var footerBarHeight = (_DOM$footer$footerBar = (_DOM$footer$footerBar2 = _constants.DOM.footer.footerBar) === null || _DOM$footer$footerBar2 === void 0 ? void 0 : _DOM$footer$footerBar2.offsetHeight) !== null && _DOM$footer$footerBar !== void 0 ? _DOM$footer$footerBar : 0;
      var htmlHeight = _constants.DOM.html.offsetHeight - wpAdminbarHeight;

      if (htmlHeight < window.innerHeight) {
        _constants.DOM.wrap.style.cssText = "\n                display: flex;\n                flex-direction: column;\n                min-height: calc(100vh - ".concat(wpAdminbarHeight, "px - ").concat(footerBarHeight, "px);\n            ");

        if (!!_constants.DOM.footer.calloutFooter) {
          _constants.DOM.footer.calloutFooter.style.marginTop = "auto";
        } else if (!!_constants.DOM.footer.siteFooter) {
          _constants.DOM.footer.siteFooter.style.marginTop = "auto";
        }

        (0, _classPrivateFieldSet2["default"])(_this, _footerPositionState, "changed");
      } else if ((0, _classPrivateFieldGet2["default"])(_this, _footerPositionState) === "changed") {
        _constants.DOM.wrap.style.cssText = "";

        if (!!_constants.DOM.footer.calloutFooter) {
          _constants.DOM.footer.calloutFooter.style.marginTop = null;
        } else {
          _constants.DOM.footer.siteFooter.style.marginTop = null;
        }

        (0, _classPrivateFieldSet2["default"])(_this, _footerPositionState, null);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _fixedFooter, {
    writable: true,
    value: function value() {
      if (!document.body.classList.contains("has-fixed-footer")) {
        return;
      }

      var offset = 0;

      if (!!_constants.DOM.WPAdminbar) {
        offset = _constants.DOM.WPAdminbar.offsetHeight;
      }

      _constants.DOM.main.style.minHeight = _constants.DOM.main.offsetHeight + (window.innerHeight - _constants.DOM.html.offsetHeight - offset) + "px";
    }
  });

  _classPrivateFieldInitSpec(this, _parallaxFooter, {
    writable: true,
    value: function value() {
      if (_constants.DOM.body.classList.contains("has-parallax-footer")) {
        setTimeout(function () {
          var _DOM$footer$parallax;

          var mainSectionMarginBottom = 0;
          mainSectionMarginBottom += (_DOM$footer$parallax = _constants.DOM.footer.parallax) === null || _DOM$footer$parallax === void 0 ? void 0 : _DOM$footer$parallax.offsetHeight;

          if (!!_constants.DOM.footer.calloutFooter) {
            _constants.DOM.footer.calloutFooter.style.bottom = "".concat(mainSectionMarginBottom, "px");
            mainSectionMarginBottom += _constants.DOM.footer.calloutFooter.offsetHeight;
          }

          _constants.DOM.main.style.marginBottom = "".concat(mainSectionMarginBottom, "px");
        }, 10);
      }
    }
  });

  if (!_constants.DOM.main) {
    return;
  }

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

exports["default"] = Footer;

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/classPrivateFieldSet":39,"@babel/runtime/helpers/interopRequireDefault":43}],8:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _vertical = _interopRequireDefault(require("./header/vertical"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var Header = function Header() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Header);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      _this.vertical = new _vertical["default"]();
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
};

var _default = Header;
exports["default"] = _default;

},{"./header/vertical":9,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/interopRequireDefault":43}],9:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _menuItemsPlusIcon = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onMenuItemPlusIconClick = /*#__PURE__*/new WeakMap();

var _onToggleMenuBtnClick = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var VerticalHeader = function VerticalHeader() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, VerticalHeader);

  _classPrivateFieldInitSpec(this, _menuItemsPlusIcon, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      _constants.DOM.header.vertical.querySelectorAll("li.menu-item-has-children:not(.btn) > a").forEach(function (menuLink) {
        menuLink.insertAdjacentHTML("beforeend", '<span class="dropdown-toggle" tabindex="0"></span>');
      });

      (0, _classPrivateFieldSet2["default"])(_this, _menuItemsPlusIcon, _constants.options.verticalHeaderTarget == "link" ? _constants.DOM.header.vertical.querySelectorAll("li.menu-item-has-children > a") : _constants.DOM.header.vertical.querySelectorAll(".dropdown-toggle"));
      new PerfectScrollbar(_constants.DOM.header.vertical, {
        wheelSpeed: 0.5,
        suppressScrollX: false,
        suppressScrollY: false
      });
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldGet2["default"])(_this, _menuItemsPlusIcon).forEach(function (menuItemPlusIcon) {
        menuItemPlusIcon.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onMenuItemPlusIconClick));
        menuItemPlusIcon.addEventListener("tap", (0, _classPrivateFieldGet2["default"])(_this, _onMenuItemPlusIconClick));
      });

      _constants.DOM.menu.vertical.toggleMenuBtn.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onToggleMenuBtnClick));

      document.addEventListener("keydown", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentKeydown));
    }
  });

  _classPrivateFieldInitSpec(this, _onMenuItemPlusIconClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemPlusIcon = event.currentTarget;
      var menuItem = _constants.options.verticalHeaderTarget == "link" ? menuItemPlusIcon.parentNode : menuItemPlusIcon.parentNode.parentNode;
      var subMenu = menuItem.lastElementChild;

      if (!(menuItem !== null && menuItem !== void 0 && menuItem.classList.contains("active"))) {
        menuItem.classList.add("active");
        (0, _utils.slideDown)(subMenu, 250);
      } else {
        var _menuItem$querySelect;

        menuItem.classList.remove("active");
        (0, _utils.slideUp)(subMenu, 250);
        (_menuItem$querySelect = menuItem.querySelectorAll(".menu-item-has-children.active")) === null || _menuItem$querySelect === void 0 ? void 0 : _menuItem$querySelect.forEach(function (openMenuItem) {
          openMenuItem.classList.remove("active");
          (0, _utils.slideUp)(openMenuItem.querySelector("ul"), 250);
        });
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onToggleMenuBtnClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();

      if (!_constants.DOM.body.classList.contains("vh-opened")) {
        _constants.DOM.body.classList.add("vh-opened");

        _constants.DOM.menu.vertical.toggleMenuBtn.querySelector(".hamburger").classList.add("is-active");
      } else {
        _constants.DOM.body.classList.remove("vh-opened");

        _constants.DOM.menu.vertical.toggleMenuBtn.querySelector(".hamburger").classList.remove("is-active");
      }

      _constants.DOM.menu.vertical.toggleMenuBtn.focus();
    }
  });

  _classPrivateFieldInitSpec(this, _onDocumentKeydown, {
    writable: true,
    value: function value(event) {
      var _DOM$header$vertical;

      var tabKey = event.keyCode === 9;
      var shiftKey = event.shiftKey;
      var escKey = event.keyCode === 27;
      var enterKey = event.keyCode === 13;
      var navElements = (_DOM$header$vertical = _constants.DOM.header.vertical) === null || _DOM$header$vertical === void 0 ? void 0 : _DOM$header$vertical.querySelectorAll("a, span.dropdown-toggle, input, button");
      var navFirstElement = navElements ? navElements[0] : "";
      var navLastElement = navElements ? navElements[navElements.length - 1] : "";
      navLastElement.style.outline = "";

      if (_constants.DOM.body.classList.contains("vertical-header-style")) {
        if (!_constants.DOM.body.classList.contains("vh-closed")) {
          if (enterKey && document.activeElement.classList.contains("dropdown-toggle")) {
            document.activeElement.click();
          }
        }

        if (!_constants.DOM.body.classList.contains("vh-opened")) {
          return;
        }
      }

      if (escKey) {
        event.preventDefault();
        (0, _classPrivateFieldGet2["default"])(_this, _onToggleMenuBtnClick).call(_this, event);
      }

      if (enterKey && document.activeElement.classList.contains("dropdown-toggle") && _constants.DOM.body.classList.contains("vh-closed")) {
        document.activeElement.click();
      }

      if (!shiftKey && tabKey && navLastElement === document.activeElement) {
        event.preventDefault();
        navFirstElement.focus();
      } // If there are no elements in the menu, don't move the focus


      if (tabKey && navFirstElement === navLastElement) {
        event.preventDefault();
      }
    }
  });

  if (!_constants.DOM.header.vertical) {
    return;
  }

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = VerticalHeader;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/classPrivateFieldSet":39,"@babel/runtime/helpers/interopRequireDefault":43}],10:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _utils = require("../../lib/utils");

var _fullScreen = _interopRequireDefault(require("./menu/full-screen"));

var _mega = _interopRequireDefault(require("./menu/mega"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onNoClickMenuItemClick = /*#__PURE__*/new WeakMap();

var _onParentMenuItemMouseenter = /*#__PURE__*/new WeakMap();

var _onParentMenuItemMouseleave = /*#__PURE__*/new WeakMap();

var Menu = function Menu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Menu);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      _this.fullScreen = new _fullScreen["default"]();
      _this.mega = new _mega["default"]();
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      document.querySelectorAll("li.nav-no-click > a").forEach(function (noClickMenuItem) {
        noClickMenuItem.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onNoClickMenuItemClick));
      });
      document.querySelectorAll("ul.sf-menu").forEach(function (menu) {
        var parentMenuItems = menu.querySelectorAll(".menu-item-has-children");
        parentMenuItems.forEach(function (parentMenuItem) {
          parentMenuItem.addEventListener("mouseenter", (0, _classPrivateFieldGet2["default"])(_this, _onParentMenuItemMouseenter));
          parentMenuItem.addEventListener("mouseleave", (0, _classPrivateFieldGet2["default"])(_this, _onParentMenuItemMouseleave));
        });
      });
    }
  });

  _classPrivateFieldInitSpec(this, _onNoClickMenuItemClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  _classPrivateFieldInitSpec(this, _onParentMenuItemMouseenter, {
    writable: true,
    value: function value(event) {
      var parentMenuItem = event.currentTarget;
      var subMenu = parentMenuItem.querySelector("ul.sub-menu");
      parentMenuItem.classList.add("sfHover");
      (0, _utils.fadeIn)(subMenu);
    }
  });

  _classPrivateFieldInitSpec(this, _onParentMenuItemMouseleave, {
    writable: true,
    value: function value(event) {
      var parentMenuItem = event.currentTarget;
      var subMenu = parentMenuItem.querySelector("ul.sub-menu");
      parentMenuItem.classList.remove("sfHover");
      subMenu.style.pointerEvents = "none";
      (0, _utils.fadeOut)(subMenu, {
        callback: function callback() {
          subMenu.style.pointerEvents = null;
        }
      });
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = Menu;
exports["default"] = _default;

},{"../../lib/utils":4,"./menu/full-screen":11,"./menu/mega":12,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/interopRequireDefault":43}],11:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleMenuBtnClick = /*#__PURE__*/new WeakMap();

var _onMenuLinkClick = /*#__PURE__*/new WeakMap();

var _onMenuHashtagLinkClick = /*#__PURE__*/new WeakMap();

var _openMenu = /*#__PURE__*/new WeakMap();

var _closeMenu = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var FullScreenMenu = function FullScreenMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, FullScreenMenu);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      _constants.DOM.menu.fullScreen.menu.querySelectorAll(".nav-arrow").forEach(function (plusBtn) {
        plusBtn.setAttribute("tabindex", 0);
      });
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      var _document$querySelect;

      _constants.DOM.menu.fullScreen.toggleMenuBtn.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onToggleMenuBtnClick));

      (_document$querySelect = document.querySelectorAll('#full-screen-menu #site-navigation ul > li.dropdown > a > .text-wrap > span.nav-arrow, #full-screen-menu #site-navigation ul > li.dropdown > a[href="#"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onMenuLinkClick));
        menuItemLink.addEventListener("tap", (0, _classPrivateFieldGet2["default"])(_this, _onMenuLinkClick));
      });
      document.querySelectorAll('#full-screen-menu #site-navigation a.menu-link[href*="#"]:not([href="#"])').forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onMenuHashtagLinkClick));
      });
      document.addEventListener("keydown", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentKeydown));
    }
  });

  _classPrivateFieldInitSpec(this, _onToggleMenuBtnClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      var toggleMenuBtn = event.currentTarget;

      if (!toggleMenuBtn.classList.contains("exit")) {
        (0, _classPrivateFieldGet2["default"])(_this, _openMenu).call(_this);
      } else {
        (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onMenuLinkClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemLink = event.currentTarget;
      var menuItem = menuItemLink.closest("li.dropdown");
      var subMenu = menuItem.querySelector("ul.sub-menu");

      if (!(window.getComputedStyle(subMenu).display === "none")) {
        menuItem.classList.remove("open-sub");
        (0, _utils.slideUp)(subMenu, 250);
      } else {
        menuItem.classList.add("open-sub");
        (0, _utils.slideDown)(subMenu, 250);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onMenuHashtagLinkClick, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
    }
  });

  _classPrivateFieldInitSpec(this, _openMenu, {
    writable: true,
    value: function value() {
      var _DOM$menu$fullScreen$;

      _constants.DOM.header.fullScreen.classList.add("nav-open");

      _constants.DOM.menu.fullScreen.toggleMenuBtn.classList.add("exit");

      (_DOM$menu$fullScreen$ = _constants.DOM.menu.fullScreen.logo) === null || _DOM$menu$fullScreen$ === void 0 ? void 0 : _DOM$menu$fullScreen$.classList.add("opened");

      _constants.DOM.menu.fullScreen.menu.classList.add("active");

      (0, _utils.fadeIn)(_constants.DOM.menu.fullScreen.menu);
      var htmlWidthBeforeOverflowHidden = _constants.DOM.html.innerWidth;
      _constants.DOM.html.style.overflow = "hidden";
      var htmlWidthAfterOverflowHidden = _constants.DOM.html.innerWidth;
      _constants.DOM.html.style.marginRight = htmlWidthBeforeOverflowHidden - htmlWidthAfterOverflowHidden + "px";
    }
  });

  _classPrivateFieldInitSpec(this, _closeMenu, {
    writable: true,
    value: function value() {
      var _DOM$menu$fullScreen$2;

      _constants.DOM.header.fullScreen.classList.remove("nav-open");

      _constants.DOM.menu.fullScreen.toggleMenuBtn.classList.remove("exit");

      (_DOM$menu$fullScreen$2 = _constants.DOM.menu.fullScreen.logo) === null || _DOM$menu$fullScreen$2 === void 0 ? void 0 : _DOM$menu$fullScreen$2.classList.remove("opened");

      _constants.DOM.menu.fullScreen.menu.classList.remove("active");

      (0, _utils.fadeOut)(_constants.DOM.menu.fullScreen.menu);
      _constants.DOM.html.style.overflow = "";
      _constants.DOM.html.style.marginRight = "";
      document.querySelectorAll("#full-screen-menu #site-navigation ul > li.dropdown").forEach(function (menuItem) {
        menuItem.classList.remove("open-sub");
      });
      document.querySelectorAll("#full-screen-menu #site-navigation ul.sub-menu").forEach(function (subMenu) {
        (0, _utils.slideUp)(subMenu, 250);
      });
    }
  });

  _classPrivateFieldInitSpec(this, _onDocumentKeydown, {
    writable: true,
    value: function value(event) {
      var _DOM$menu$fullScreen$3;

      if (!((_DOM$menu$fullScreen$3 = _constants.DOM.menu.fullScreen.menu) !== null && _DOM$menu$fullScreen$3 !== void 0 && _DOM$menu$fullScreen$3.classList.contains("active"))) {
        return;
      }

      var tabKey = event.keyCode === 9;
      var shiftKey = event.shiftKey;
      var escKey = event.keyCode === 27;
      var enterKey = event.keyCode === 13;
      var closeIcon = _constants.DOM.menu.fullScreen.toggleMenuBtn;

      var navElements = _constants.DOM.menu.fullScreen.menu.querySelector("nav").querySelectorAll("a, span.nav-arrow, input, button");

      var navFirstElement = navElements[0];
      var navLastElement = navElements[navElements.length - 1];
      closeIcon.style.outline = "";

      if (escKey) {
        event.preventDefault();
        (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
      }

      if (enterKey && document.activeElement.classList.contains("nav-arrow")) {
        event.preventDefault();
        document.activeElement.click();
      }

      if (!shiftKey && tabKey && navLastElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      }

      if (shiftKey && tabKey && navFirstElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      } // If there are no elements in the menu, don't move the focus


      if (tabKey && navFirstElement === navLastElement) {
        event.preventDefault();
      }
    }
  });

  if (!_constants.DOM.menu.fullScreen.toggleMenuBtn) {
    return;
  }

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = FullScreenMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/interopRequireDefault":43}],12:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onMenuItemMouseEnter = /*#__PURE__*/new WeakMap();

var _onTopbarMenuItemMouseEnter = /*#__PURE__*/new WeakMap();

var _menuItemMouseEnter = /*#__PURE__*/new WeakMap();

var MegaMenu = function MegaMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, MegaMenu);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      _constants.DOM.menu.mega.menuContents.forEach(function (menuContent) {
        var menuItem = menuContent.parentNode;
        var menuItemLeftOffset = (0, _utils.offset)(menuItem).left;
        var menuContentWidth = parseInt(window.getComputedStyle(menuContent).width);
        var horizontalPosition;
        var horizontalMargin;

        if (menuItemLeftOffset - menuContentWidth / 2 < 0) {
          horizontalPosition = menuItemLeftOffset - 10;
          horizontalMargin = 0;
        } else {
          horizontalPosition = menuContentWidth / 2;
          horizontalMargin = menuItem.offsetWidth / 2;
        }

        if (!_constants.options.isRTL) {
          menuContent.style.left = "-".concat(horizontalPosition, "px");
          menuContent.style.marginLeft = "".concat(horizontalMargin, "px");
        } else {
          menuContent.style.right = "-".concat(horizontalPosition, "px");
          menuContent.style.marginRight = "".concat(horizontalMargin, "px");
        }

        if (window.innerWidth - menuItemLeftOffset - horizontalPosition + horizontalMargin + menuContentWidth < 0) {
          menuContent.style.left = "auto";
          menuContent.style.right = "-".concat(window.innerWidth - menuItemLeftOffset - menuItem.offsetWidth - 10, "px");
        }
      });
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      _constants.DOM.menu.mega.menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("mouseenter", (0, _classPrivateFieldGet2["default"])(_this, _onMenuItemMouseEnter));
      }); // Topbar menu items


      _constants.DOM.menu.mega.topbarMenuItems.forEach(function (menuItem) {
        menuItem.addEventListener("mouseenter", (0, _classPrivateFieldGet2["default"])(_this, _onTopbarMenuItemMouseEnter));
      });
    }
  });

  _classPrivateFieldInitSpec(this, _onMenuItemMouseEnter, {
    writable: true,
    value: function value(event) {
      var wrapper = _constants.DOM.header.site.classList.contains("medium-header") ? document.querySelector("#site-navigation-wrap > .container") : document.querySelector("#site-header-inner");
      (0, _classPrivateFieldGet2["default"])(_this, _menuItemMouseEnter).call(_this, wrapper, event);
    }
  });

  _classPrivateFieldInitSpec(this, _onTopbarMenuItemMouseEnter, {
    writable: true,
    value: function value(event) {
      var wrapper = _constants.DOM.header.topbar;
      (0, _classPrivateFieldGet2["default"])(_this, _menuItemMouseEnter).call(_this, wrapper, event);
    }
  });

  _classPrivateFieldInitSpec(this, _menuItemMouseEnter, {
    writable: true,
    value: function value(wrapper, event) {
      var menuItem = event.currentTarget;
      var content = menuItem.querySelector(".megamenu");
      var leftPosition = parseInt((0, _utils.offset)(menuItem).left - (0, _utils.offset)(wrapper).left + 1);

      if (!content) {
        return;
      }

      if (_constants.DOM.body.classList.contains("boxed-layout")) {
        leftPosition = leftPosition - 30;
      }

      content.style.left = "-".concat(leftPosition, "px");
      content.style.width = "".concat(wrapper.offsetWidth, "px");
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = MegaMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/interopRequireDefault":43}],13:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _dropDown = _interopRequireDefault(require("./mobile-menu/drop-down"));

var _fullScreen = _interopRequireDefault(require("./mobile-menu/full-screen"));

var _sidebar = _interopRequireDefault(require("./mobile-menu/sidebar"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var MobileMenu = function MobileMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, MobileMenu);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      _this.dropDown = new _dropDown["default"]();
      _this.fullScreen = new _fullScreen["default"]();
      _this.sidebar = new _sidebar["default"]();
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
};

var _default = MobileMenu;
exports["default"] = _default;

},{"./mobile-menu/drop-down":14,"./mobile-menu/full-screen":15,"./mobile-menu/sidebar":16,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/interopRequireDefault":43}],14:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet3 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _delegate = _interopRequireDefault(require("delegate"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _isMenuOpen = /*#__PURE__*/new WeakMap();

var _menuItemsToggleIcon = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleMenuButtonClick = /*#__PURE__*/new WeakMap();

var _onMenuCloseClick = /*#__PURE__*/new WeakMap();

var _onWindowResize = /*#__PURE__*/new WeakMap();

var _onHamburgerClick = /*#__PURE__*/new WeakMap();

var _onMenuItemPlusIconClick = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var DropDownMobileMenu = function DropDownMobileMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, DropDownMobileMenu);

  _classPrivateFieldInitSpec(this, _isMenuOpen, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _menuItemsToggleIcon, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$menuI, _DOM$mobileMenu$navWr, _DOM$mobileMenu$navWr2;

      (0, _classPrivateFieldSet2["default"])(_this, _isMenuOpen, false);
      (_DOM$mobileMenu$menuI = _constants.DOM.mobileMenu.menuItemsHasChildren) === null || _DOM$mobileMenu$menuI === void 0 ? void 0 : _DOM$mobileMenu$menuI.forEach(function (menuItem) {
        var span = document.createElement("span");
        span.className = "dropdown-toggle";
        span.setAttribute("tabindex", 0);
        menuItem.getElementsByTagName("a")[0].appendChild(span);
      });
      (0, _classPrivateFieldSet2["default"])(_this, _menuItemsToggleIcon, _constants.options.sidrDropdownTarget == "link" ? (_DOM$mobileMenu$navWr = _constants.DOM.mobileMenu.navWrapper) === null || _DOM$mobileMenu$navWr === void 0 ? void 0 : _DOM$mobileMenu$navWr.querySelectorAll("li.menu-item-has-children > a") : (_DOM$mobileMenu$navWr2 = _constants.DOM.mobileMenu.navWrapper) === null || _DOM$mobileMenu$navWr2 === void 0 ? void 0 : _DOM$mobileMenu$navWr2.querySelectorAll(".dropdown-toggle"));
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$navWr3, _DOM$mobileMenu$navWr4, _DOM$mobileMenu$hambu, _classPrivateFieldGet2;

      (0, _delegate["default"])(document.body, ".mobile-menu", "click", (0, _classPrivateFieldGet3["default"])(_this, _onToggleMenuButtonClick));
      (_DOM$mobileMenu$navWr3 = _constants.DOM.mobileMenu.navWrapper) === null || _DOM$mobileMenu$navWr3 === void 0 ? void 0 : _DOM$mobileMenu$navWr3.querySelectorAll('li a[href*="#"]:not([href="#"])').forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", (0, _classPrivateFieldGet3["default"])(_this, _onMenuCloseClick));
      });
      document.addEventListener("click", (0, _classPrivateFieldGet3["default"])(_this, _onMenuCloseClick));
      (_DOM$mobileMenu$navWr4 = _constants.DOM.mobileMenu.navWrapper) === null || _DOM$mobileMenu$navWr4 === void 0 ? void 0 : _DOM$mobileMenu$navWr4.addEventListener("click", function (event) {
        event.stopPropagation();
      });
      window.addEventListener("resize", (0, _classPrivateFieldGet3["default"])(_this, _onWindowResize));
      (_DOM$mobileMenu$hambu = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu === void 0 ? void 0 : _DOM$mobileMenu$hambu.addEventListener("click", (0, _classPrivateFieldGet3["default"])(_this, _onHamburgerClick));
      (_classPrivateFieldGet2 = (0, _classPrivateFieldGet3["default"])(_this, _menuItemsToggleIcon)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.forEach(function (menuItemPlusIcon) {
        menuItemPlusIcon.addEventListener("click", (0, _classPrivateFieldGet3["default"])(_this, _onMenuItemPlusIconClick));
      });
      document.addEventListener("keydown", (0, _classPrivateFieldGet3["default"])(_this, _onDocumentKeydown));
    }
  });

  _classPrivateFieldInitSpec(this, _onToggleMenuButtonClick, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$toggl, _DOM$mobileMenu$hambu2, _DOM$mobileMenu$toggl2;

      event.preventDefault();
      event.stopPropagation();
      !!_constants.DOM.mobileMenu.navWrapper && (0, _utils.slideToggle)(_constants.DOM.mobileMenu.navWrapper, 400);
      (_DOM$mobileMenu$toggl = _constants.DOM.mobileMenu.toggleMenuBtn) === null || _DOM$mobileMenu$toggl === void 0 ? void 0 : _DOM$mobileMenu$toggl.classList.toggle("opened");
      (_DOM$mobileMenu$hambu2 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu2 === void 0 ? void 0 : _DOM$mobileMenu$hambu2.classList.toggle("is-active");
      (_DOM$mobileMenu$toggl2 = _constants.DOM.mobileMenu.toggleMenuBtn) === null || _DOM$mobileMenu$toggl2 === void 0 ? void 0 : _DOM$mobileMenu$toggl2.focus();
    }
  });

  _classPrivateFieldInitSpec(this, _onMenuCloseClick, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$toggl3, _DOM$mobileMenu$hambu3;

      !!_constants.DOM.mobileMenu.navWrapper && (0, _utils.slideUp)(_constants.DOM.mobileMenu.navWrapper, 250);
      (_DOM$mobileMenu$toggl3 = _constants.DOM.mobileMenu.toggleMenuBtn) === null || _DOM$mobileMenu$toggl3 === void 0 ? void 0 : _DOM$mobileMenu$toggl3.classList.remove("opened");
      (_DOM$mobileMenu$hambu3 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu3 === void 0 ? void 0 : _DOM$mobileMenu$hambu3.classList.remove("is-active");
    }
  });

  _classPrivateFieldInitSpec(this, _onWindowResize, {
    writable: true,
    value: function value(event) {
      if (window.innerWidth >= 960) {
        (0, _classPrivateFieldGet3["default"])(_this, _onMenuCloseClick).call(_this);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onHamburgerClick, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldSet2["default"])(_this, _isMenuOpen, !(0, _classPrivateFieldGet3["default"])(_this, _isMenuOpen));
      event.currentTarget.setAttribute("aria-expanded", (0, _classPrivateFieldGet3["default"])(_this, _isMenuOpen));
    }
  });

  _classPrivateFieldInitSpec(this, _onMenuItemPlusIconClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemPlusIcon = event.currentTarget;
      var menuItem = _constants.options.sidrDropdownTarget == "link" ? menuItemPlusIcon.parentNode : menuItemPlusIcon.parentNode.parentNode;
      var subMenu = menuItem.lastElementChild;

      if (!(menuItem !== null && menuItem !== void 0 && menuItem.classList.contains("active"))) {
        menuItem.classList.add("active");
        (0, _utils.slideDown)(subMenu, 250);
      } else {
        var _menuItem$querySelect;

        menuItem.classList.remove("active");
        (0, _utils.slideUp)(subMenu, 250);
        (_menuItem$querySelect = menuItem.querySelectorAll(".menu-item-has-children.active")) === null || _menuItem$querySelect === void 0 ? void 0 : _menuItem$querySelect.forEach(function (openMenuItem) {
          openMenuItem.classList.remove("active");
          (0, _utils.slideUp)(openMenuItem.querySelector("ul"));
        });
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onDocumentKeydown, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$toggl4, _DOM$mobileMenu$nav;

      if (!((_DOM$mobileMenu$toggl4 = _constants.DOM.mobileMenu.toggleMenuBtn) !== null && _DOM$mobileMenu$toggl4 !== void 0 && _DOM$mobileMenu$toggl4.classList.contains("opened"))) {
        return;
      }

      var tabKey = event.keyCode === 9;
      var shiftKey = event.shiftKey;
      var escKey = event.keyCode === 27;
      var enterKey = event.keyCode === 13;
      var closeIcon = _constants.DOM.mobileMenu.toggleMenuBtn;
      var navElements = (_DOM$mobileMenu$nav = _constants.DOM.mobileMenu.nav) === null || _DOM$mobileMenu$nav === void 0 ? void 0 : _DOM$mobileMenu$nav.querySelectorAll("a, span.dropdown-toggle, input, button");
      var navFirstElement = navElements[0];
      var navLastElement = navElements[navElements.length - 1];

      if (!!closeIcon) {
        closeIcon.style.outline = "";
      }

      if (escKey) {
        event.preventDefault();
        (0, _classPrivateFieldGet3["default"])(_this, _onMenuCloseClick).call(_this);
      }

      if (enterKey && document.activeElement.classList.contains("dropdown-toggle")) {
        event.preventDefault();
        document.activeElement.click();
      }

      if (!shiftKey && tabKey && navLastElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      }

      if (shiftKey && tabKey && navFirstElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      } // If there are no elements in the menu, don't move the focus


      if (tabKey && navFirstElement === navLastElement) {
        event.preventDefault();
      }
    }
  });

  if (!_constants.DOM.body.classList.contains("dropdown-mobile")) {
    return;
  }

  (0, _classPrivateFieldGet3["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet3["default"])(this, _setupEventListeners).call(this);
};

var _default = DropDownMobileMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/classPrivateFieldSet":39,"@babel/runtime/helpers/interopRequireDefault":43,"delegate":122}],15:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _delegate = _interopRequireDefault(require("delegate"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onMenuButtonClick = /*#__PURE__*/new WeakMap();

var _onCloseIconClick = /*#__PURE__*/new WeakMap();

var _closeMenu = /*#__PURE__*/new WeakMap();

var _onWindowResize = /*#__PURE__*/new WeakMap();

var _onDropownToggleIcon = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var FullScreenMobileMenu = function FullScreenMobileMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, FullScreenMobileMenu);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$fullS, _DOM$mobileMenu$fullS2;

      (_DOM$mobileMenu$fullS = _constants.DOM.mobileMenu.fullScreen) === null || _DOM$mobileMenu$fullS === void 0 ? void 0 : (_DOM$mobileMenu$fullS2 = _DOM$mobileMenu$fullS.querySelectorAll(".menu-item-has-children > a")) === null || _DOM$mobileMenu$fullS2 === void 0 ? void 0 : _DOM$mobileMenu$fullS2.forEach(function (menuItemLink) {
        menuItemLink.insertAdjacentHTML("beforeend", '<span class="dropdown-toggle" tabindex=0></span>');
      });
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      window.addEventListener("resize", (0, _classPrivateFieldGet2["default"])(_this, _onWindowResize));
      (0, _delegate["default"])(document.body, ".mobile-menu", "click", (0, _classPrivateFieldGet2["default"])(_this, _onMenuButtonClick));
      document.querySelectorAll('#mobile-fullscreen nav ul > li.menu-item-has-children > a > span.dropdown-toggle, #mobile-fullscreen nav ul > li.menu-item-has-children > a[href="#"]').forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onDropownToggleIcon));
        menuItemLink.addEventListener("tap", (0, _classPrivateFieldGet2["default"])(_this, _onDropownToggleIcon));
      });
      document.querySelectorAll('#mobile-fullscreen .fs-dropdown-menu li a[href*="#"]:not([href="#"]), #mobile-fullscreen #mobile-nav li a[href*="#"]:not([href="#"]), #mobile-fullscreen a.close').forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onCloseIconClick));
      });
      document.addEventListener("keydown", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentKeydown));
    }
  });

  _classPrivateFieldInitSpec(this, _onMenuButtonClick, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$hambu;

      event.preventDefault();
      event.stopPropagation();

      _constants.DOM.mobileMenu.toggleMenuBtn.classList.add("exit");

      _constants.DOM.mobileMenu.fullScreen.classList.add("active");

      (_DOM$mobileMenu$hambu = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu === void 0 ? void 0 : _DOM$mobileMenu$hambu.classList.add("is-active");
      (0, _utils.fadeIn)(_constants.DOM.mobileMenu.fullScreen);
      var htmlWidthBeforeOverflowHidden = _constants.DOM.html.innerWidth;
      _constants.DOM.html.style.overflow = "hidden";
      var htmlWidthAfterOverflowHidden = _constants.DOM.html.innerWidth;
      _constants.DOM.html.style.marginRight = htmlWidthAfterOverflowHidden - htmlWidthBeforeOverflowHidden + "px";

      _constants.DOM.mobileMenu.fullScreen.querySelector("a.close").focus();
    }
  });

  _classPrivateFieldInitSpec(this, _onCloseIconClick, {
    writable: true,
    value: function value(event) {
      if (event.currentTarget.getAttribute("href").substring(0, 1) === "#") {
        event.preventDefault();
      }

      (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
    }
  });

  _classPrivateFieldInitSpec(this, _closeMenu, {
    writable: true,
    value: function value() {
      if ((0, _utils.visible)(_constants.DOM.mobileMenu.fullScreen)) {
        var _DOM$mobileMenu$hambu2;

        _constants.DOM.mobileMenu.toggleMenuBtn.classList.remove("exit");

        _constants.DOM.mobileMenu.fullScreen.classList.remove("active");

        (0, _utils.fadeOut)(_constants.DOM.mobileMenu.fullScreen);
        _constants.DOM.html.style.overflow = "";
        _constants.DOM.html.style.marginRight = "";
        document.querySelectorAll("#mobile-fullscreen nav ul > li.dropdown").forEach(function (menuItem) {
          menuItem.classList.remove("open-sub");
        });
        document.querySelectorAll("#mobile-fullscreen nav ul.sub-menu").forEach(function (subMenu) {
          (0, _utils.slideUp)(subMenu, 250);
        });
        (_DOM$mobileMenu$hambu2 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu2 === void 0 ? void 0 : _DOM$mobileMenu$hambu2.classList.remove("is-active");
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onWindowResize, {
    writable: true,
    value: function value(event) {
      if (window.innerWidth >= 960) {
        (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onDropownToggleIcon, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemLink = event.currentTarget;
      var menuItem = menuItemLink.closest("li.menu-item-has-children");
      var subMenu = menuItem.querySelector("ul.sub-menu");

      if (!(window.getComputedStyle(subMenu).display === "none")) {
        menuItem.classList.remove("open-sub");
        (0, _utils.slideUp)(subMenu, 250);
      } else {
        menuItem.classList.add("open-sub");
        (0, _utils.slideDown)(subMenu, 250);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onDocumentKeydown, {
    writable: true,
    value: function value(event) {
      var _DOM$mobileMenu$fullS3;

      if (!((_DOM$mobileMenu$fullS3 = _constants.DOM.mobileMenu.fullScreen) !== null && _DOM$mobileMenu$fullS3 !== void 0 && _DOM$mobileMenu$fullS3.classList.contains("active"))) {
        return;
      }

      var tabKey = event.keyCode === 9;
      var shiftKey = event.shiftKey;
      var escKey = event.keyCode === 27;
      var enterKey = event.keyCode === 13;

      var closeIcon = _constants.DOM.mobileMenu.fullScreen.querySelector("a.close");

      var navElements = _constants.DOM.mobileMenu.fullScreen.querySelector("nav").querySelectorAll("a, span.dropdown-toggle, input, button");

      var navFirstElement = navElements[0];
      var navLastElement = navElements[navElements.length - 1];
      closeIcon.style.outline = "";

      if (escKey) {
        event.preventDefault();
        (0, _classPrivateFieldGet2["default"])(_this, _closeMenu).call(_this);
      }

      if (enterKey && document.activeElement.classList.contains("dropdown-toggle")) {
        event.preventDefault();
        document.activeElement.click();
      }

      if (!shiftKey && tabKey && navLastElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      }

      if (shiftKey && tabKey && navFirstElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      } // If there are no elements in the menu, don't move the focus


      if (tabKey && navFirstElement === navLastElement) {
        event.preventDefault();
      }
    }
  });

  if (!_constants.DOM.body.classList.contains("fullscreen-mobile")) {
    return;
  }

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = FullScreenMobileMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/interopRequireDefault":43,"delegate":122}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet4 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _delegate = _interopRequireDefault(require("delegate"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _isMenuOpen = /*#__PURE__*/new WeakMap();

var _menuItemsPlusIcon = /*#__PURE__*/new WeakMap();

var _sidebarToggleMenuBtn = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _startSidrPlugin = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onHamburgerBtnClick = /*#__PURE__*/new WeakMap();

var _onSidebarCloseMenuBtnClick = /*#__PURE__*/new WeakMap();

var _onMenuItemPlusIconClick = /*#__PURE__*/new WeakMap();

var _onWindowResize = /*#__PURE__*/new WeakMap();

var _onDocumentKeydown = /*#__PURE__*/new WeakMap();

var _closeSidr = /*#__PURE__*/new WeakMap();

var SidebarMobileMenu = function SidebarMobileMenu() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, SidebarMobileMenu);

  _classPrivateFieldInitSpec(this, _isMenuOpen, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _menuItemsPlusIcon, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _sidebarToggleMenuBtn, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldSet2["default"])(_this, _isMenuOpen, false);
      (0, _classPrivateFieldGet4["default"])(_this, _startSidrPlugin).call(_this);

      if (!document.querySelector(".sidr-class-dropdown-toggle")) {
        document.querySelectorAll(".sidr-class-menu-item-has-children > a").forEach(function (menuItemLink) {
          menuItemLink.insertAdjacentHTML("beforeend", '<span class="sidr-class-dropdown-toggle" tabindex=0></span>');
        });
      }

      (0, _classPrivateFieldSet2["default"])(_this, _menuItemsPlusIcon, _constants.options.sidrDropdownTarget == "link" ? document.querySelectorAll("li.sidr-class-menu-item-has-children > a") : document.querySelectorAll(".sidr-class-dropdown-toggle"));
    }
  });

  _classPrivateFieldInitSpec(this, _startSidrPlugin, {
    writable: true,
    value: function value() {
      sidr["new"](".mobile-menu", {
        name: "sidr",
        source: _constants.options.sidrSource,
        side: _constants.options.sidrSide,
        displace: _constants.options.sidrDisplace,
        speed: 300,
        renaming: true,
        timing: "ease",
        bind: "click",
        onOpen: function onOpen() {
          var _DOM$mobileMenu$hambu;

          document.querySelector("a.sidr-class-toggle-sidr-close").focus();
          (_DOM$mobileMenu$hambu = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu === void 0 ? void 0 : _DOM$mobileMenu$hambu.classList.add("is-active");

          _constants.DOM.header.site.insertAdjacentHTML("afterend", '<div class="oceanwp-sidr-overlay" tabindex=0></div>');

          var overlay = document.querySelector(".oceanwp-sidr-overlay");
          (0, _utils.fadeIn)(overlay);
          overlay.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            sidr.close("sidr");
          });
        },
        onClose: function onClose() {
          var _DOM$mobileMenu$hambu2;

          (_DOM$mobileMenu$hambu2 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu2 === void 0 ? void 0 : _DOM$mobileMenu$hambu2.classList.remove("is-active");
          document.querySelectorAll(".sidr-class-menu-item-has-children.active > ul").forEach(function (subMenuActive) {
            subMenuActive.style.display = "none";
          });
          document.querySelectorAll(".sidr-class-menu-item-has-children.active").forEach(function (menuItemActive) {
            menuItemActive.classList.remove("active");
          });
          var overlay = document.querySelector(".oceanwp-sidr-overlay");
          (0, _utils.fadeOut)(overlay);
          setTimeout(function () {
            overlay.remove();
          });
        }
      });
      document.querySelectorAll('#sidr [class*="sidr-class-fa"]').forEach(function (icon) {
        icon.className = icon.className.replace(/\bsidr-class-fa.*?\b/g, "fa");
      });
      document.querySelectorAll('#sidr [class*="sidr-class-icon"]').forEach(function (icon) {
        icon.className = icon.className.replace(/\bsidr-class-icon-.*?\b/g, "icon-");
      });
      (0, _classPrivateFieldSet2["default"])(_this, _sidebarToggleMenuBtn, document.querySelector("a.sidr-class-toggle-sidr-close"));
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$hambu3, _classPrivateFieldGet2, _classPrivateFieldGet3, _document$querySelect;

      (_DOM$mobileMenu$hambu3 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu3 === void 0 ? void 0 : _DOM$mobileMenu$hambu3.addEventListener("click", (0, _classPrivateFieldGet4["default"])(_this, _onHamburgerBtnClick));
      (_classPrivateFieldGet2 = (0, _classPrivateFieldGet4["default"])(_this, _sidebarToggleMenuBtn)) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.addEventListener("click", (0, _classPrivateFieldGet4["default"])(_this, _onSidebarCloseMenuBtnClick));
      (_classPrivateFieldGet3 = (0, _classPrivateFieldGet4["default"])(_this, _menuItemsPlusIcon)) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.forEach(function (menuItemPlusIcon) {
        menuItemPlusIcon.addEventListener("click", (0, _classPrivateFieldGet4["default"])(_this, _onMenuItemPlusIconClick));
        menuItemPlusIcon.addEventListener("touchend", (0, _classPrivateFieldGet4["default"])(_this, _onMenuItemPlusIconClick));
      });
      (0, _delegate["default"])(document.body, '.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])', "click", (0, _classPrivateFieldGet4["default"])(_this, _closeSidr));
      (0, _delegate["default"])(document.body, '.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])', "touchend", (0, _classPrivateFieldGet4["default"])(_this, _closeSidr));
      (_document$querySelect = document.querySelectorAll("li.sidr-class-nav-no-click > a")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.forEach(function (menuItemLink) {
        menuItemLink.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();
        });
      });
      document.addEventListener("keydown", (0, _classPrivateFieldGet4["default"])(_this, _onDocumentKeydown));
      window.addEventListener("resize", (0, _classPrivateFieldGet4["default"])(_this, _onWindowResize));
    }
  });

  _classPrivateFieldInitSpec(this, _onHamburgerBtnClick, {
    writable: true,
    value: function value(event) {
      (0, _classPrivateFieldSet2["default"])(_this, _isMenuOpen, !(0, _classPrivateFieldGet4["default"])(_this, _isMenuOpen));
      event.currentTarget.setAttribute("aria-expanded", (0, _classPrivateFieldGet4["default"])(_this, _isMenuOpen));
    }
  });

  _classPrivateFieldInitSpec(this, _onSidebarCloseMenuBtnClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      (0, _classPrivateFieldGet4["default"])(_this, _closeSidr).call(_this);
      (0, _classPrivateFieldGet4["default"])(_this, _sidebarToggleMenuBtn).classList.remove("opened");
    }
  });

  _classPrivateFieldInitSpec(this, _onMenuItemPlusIconClick, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      var menuItemPlusIcon = event.currentTarget;
      var menuItem = _constants.options.sidrDropdownTarget == "link" ? menuItemPlusIcon.parentNode : menuItemPlusIcon.parentNode.parentNode;
      var subMenu = menuItem.lastElementChild;

      if (!(menuItem !== null && menuItem !== void 0 && menuItem.classList.contains("active"))) {
        menuItem.classList.add("active");
        (0, _utils.slideDown)(subMenu, 250);
      } else {
        var _menuItem$querySelect;

        menuItem.classList.remove("active");
        (0, _utils.slideUp)(subMenu, 250);
        (_menuItem$querySelect = menuItem.querySelectorAll(".sidr-class-menu-item-has-children.active")) === null || _menuItem$querySelect === void 0 ? void 0 : _menuItem$querySelect.forEach(function (openMenuItem) {
          openMenuItem.classList.remove("active");
          (0, _utils.slideUp)(openMenuItem.querySelector("ul"));
        });
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onWindowResize, {
    writable: true,
    value: function value(event) {
      if (window.innerWidth >= 960) {
        (0, _classPrivateFieldGet4["default"])(_this, _closeSidr).call(_this);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onDocumentKeydown, {
    writable: true,
    value: function value(event) {
      if (!_constants.DOM.body.classList.contains("sidr-open")) {
        return;
      }

      event.stopPropagation();
      var tabKey = event.keyCode === 9;
      var shiftKey = event.shiftKey;
      var escKey = event.keyCode === 27;
      var enterKey = event.keyCode === 13;
      var closeIcon = (0, _classPrivateFieldGet4["default"])(_this, _sidebarToggleMenuBtn);
      var navElements = document.querySelector("#sidr").querySelectorAll("a, span.sidr-class-dropdown-toggle, input, button");
      var navFirstElement = navElements[0];
      var navLastElement = navElements[navElements.length - 1];
      closeIcon.style.outline = "";

      if (escKey) {
        event.preventDefault();
        (0, _classPrivateFieldGet4["default"])(_this, _closeSidr).call(_this);
      }

      if (enterKey && document.activeElement.classList.contains("sidr-class-dropdown-toggle")) {
        event.preventDefault();
        document.activeElement.click();
      }

      if (!shiftKey && tabKey && navLastElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      }

      if (shiftKey && tabKey && navFirstElement === document.activeElement) {
        event.preventDefault();
        closeIcon.style.outline = "1px dashed rgba(255, 255, 255, 0.6)";
        closeIcon.focus();
      } // If there are no elements in the menu, don't move the focus


      if (tabKey && navFirstElement === navLastElement) {
        event.preventDefault();
      }
    }
  });

  _classPrivateFieldInitSpec(this, _closeSidr, {
    writable: true,
    value: function value() {
      var _DOM$mobileMenu$hambu4;

      sidr.close("sidr");
      (_DOM$mobileMenu$hambu4 = _constants.DOM.mobileMenu.hamburgerBtn) === null || _DOM$mobileMenu$hambu4 === void 0 ? void 0 : _DOM$mobileMenu$hambu4.classList.remove("is-active");
    }
  });

  if (typeof _constants.options.sidrSource !== "undefined" && _constants.DOM.body.classList.contains("sidebar-mobile")) {
    (0, _classPrivateFieldGet4["default"])(this, _start).call(this);
    (0, _classPrivateFieldGet4["default"])(this, _setupEventListeners).call(this);
  }
};

var _default = SidebarMobileMenu;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/classPrivateFieldSet":39,"@babel/runtime/helpers/interopRequireDefault":43,"delegate":122}],17:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _utils = require("../../lib/utils");

var _infiniteScroll2 = _interopRequireDefault(require("infinite-scroll"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _infiniteScroll = /*#__PURE__*/new WeakMap();

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var OWInfiniteScroll = function OWInfiniteScroll() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, OWInfiniteScroll);

  _classPrivateFieldInitSpec(this, _infiniteScroll, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldSet2["default"])(_this, _infiniteScroll, new _infiniteScroll2["default"](_constants.DOM.scroll.infiniteScrollWrapper, {
        path: ".older-posts a",
        append: ".item-entry",
        status: ".scroller-status",
        hideNav: ".infinite-scroll-nav",
        history: false,
        prefill: true,
        scrollThreshold: 500
      }));
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldGet2["default"])(_this, _infiniteScroll).on("load", function (body, path, response) {
        var _this2 = this;

        var items = body.querySelectorAll(".item-entry");

        if (this.element.classList.contains("blog-masonry-grid")) {
          items.forEach(function (item) {
            (0, _utils.fadeOut)(item);
          });
        }

        imagesLoaded(items, function () {
          // Blog masonry isotope
          if (_this2.element.classList.contains("blog-masonry-grid")) {
            oceanwp.theme.blogMasonry.isotop.appended(items); // Fix Gallery posts

            if (!!_this2.element.querySelector(".gallery-format")) {
              setTimeout(function () {
                oceanwp.theme.blogMasonry.isotop.layout();
              }, 600 + 1);
            }
          } // Equal height elements


          if (!_constants.DOM.body.classList.contains("no-matchheight")) {
            oceanwp.theme.equalHeightElements.start();
          } // Gallery posts slider


          if (!_constants.DOM.body.classList.contains("no-carousel")) {
            oceanwp.theme.owSlider.start(_this2.element.querySelectorAll(".gallery-format, .product-entry-slider"));
          }

          if (!document.body.classList.contains("no-lightbox")) {
            oceanwp.theme.owLightbox.initSingleImageLightbox();
            oceanwp.theme.owLightbox.initGalleryLightbox();
          } // Force the images to be parsed to fix Safari issue


          items.forEach(function (item) {
            var _item$querySelectorAl;

            (_item$querySelectorAl = item.querySelectorAll("img")) === null || _item$querySelectorAl === void 0 ? void 0 : _item$querySelectorAl.forEach(function (img) {
              img.outerHTML = img.outerHTML;
            });
          });
        });
      });
      (0, _classPrivateFieldGet2["default"])(_this, _infiniteScroll).on("append", function (body, path, items, response) {
        if (this.element.classList.contains("blog-masonry-grid")) {
          items.forEach(function (item) {
            (0, _utils.fadeIn)(item);
          });
        }
      });
    }
  });

  if (!!_constants.DOM.scroll.infiniteScrollNav && !!_constants.DOM.scroll.infiniteScrollNav.querySelector(".older-posts a")) {
    (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
    (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
  }
};

var _default = OWInfiniteScroll;
exports["default"] = _default;

},{"../../constants":1,"../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/classPrivateFieldSet":39,"@babel/runtime/helpers/interopRequireDefault":43,"infinite-scroll":128}],18:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _addLightboxClass = /*#__PURE__*/new WeakMap();

var _imageFormats = /*#__PURE__*/new WeakMap();

var OWLightbox = function OWLightbox() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, OWLightbox);
  (0, _defineProperty2["default"])(this, "start", function () {
    if (_constants.DOM.body.classList.contains("no-lightbox")) {
      return;
    }

    (0, _classPrivateFieldGet2["default"])(_this, _addLightboxClass).call(_this);

    _this.initSingleImageLightbox();

    _this.initGalleryLightbox();
  });
  (0, _defineProperty2["default"])(this, "initSingleImageLightbox", function () {
    var _document$querySelect;

    (_document$querySelect = document.querySelectorAll(".oceanwp-lightbox")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
      });
    });
    jQuery(".oceanwp-lightbox").magnificPopup({
      type: "image",
      mainClass: "mfp-with-zoom",
      zoom: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out",
        opener: function opener(openerElement) {
          return openerElement.is("img") ? openerElement : openerElement.find("img");
        }
      }
    });
  });
  (0, _defineProperty2["default"])(this, "initGalleryLightbox", function () {
    jQuery(".wp-block-gallery, .gallery-format, .gallery").magnificPopup({
      delegate: ".gallery-lightbox:not(.slick-cloned)",
      type: "image",
      mainClass: "mfp-fade",
      gallery: {
        enabled: true
      }
    });
  });

  _classPrivateFieldInitSpec(this, _addLightboxClass, {
    writable: true,
    value: function value() {
      var _document$querySelect2;

      (_document$querySelect2 = document.querySelectorAll("body .entry-content a, body .entry a, body article .gallery-format a")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.forEach(function (link) {
        if (!!link.querySelector("img")) {
          var imageFormats = (0, _classPrivateFieldGet2["default"])(_this, _imageFormats).call(_this);
          var imageFormatsMask = 0;
          imageFormats.forEach(function (imageFormat) {
            imageFormatsMask += String(link.getAttribute("href")).indexOf("." + imageFormat);
          });

          if (imageFormatsMask === -13) {
            link.classList.add("no-lightbox");
          }

          if (!(link.classList.contains("no-lightbox") || link.classList.contains("gallery-lightbox") || link.parentNode.classList.contains("gallery-icon") || link.classList.contains("woo-lightbox") || link.classList.contains("woo-thumbnail") || link.parentNode.classList.contains("woocommerce-product-gallery__image") || !!link.closest(".wp-block-gallery") || !!link.getAttribute("data-elementor-open-lightbox") || link.classList.contains("yith_magnifier_thumbnail") || link.classList.contains("gg-link"))) {
            link.classList.add("oceanwp-lightbox");
          }

          if (!link.classList.contains("no-lightbox")) {
            if (link.parentNode.classList.contains("gallery-icon") || !!link.closest(".wp-block-gallery")) {
              link.classList.add("gallery-lightbox");
            }
          }
        }
      });
    }
  });

  _classPrivateFieldInitSpec(this, _imageFormats, {
    writable: true,
    value: function value() {
      return ["bmp", "gif", "jpeg", "jpg", "png", "tiff", "tif", "jfif", "jpe", "svg", "mp4", "ogg", "webm"];
    }
  });

  this.start();
};

var _default = OWLightbox;
exports["default"] = _default;

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/defineProperty":40,"@babel/runtime/helpers/interopRequireDefault":43}],19:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("../../constants");

var OWSlider = function OWSlider() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, OWSlider);
  (0, _defineProperty2["default"])(this, "flickity", void 0);
  (0, _defineProperty2["default"])(this, "start", function () {
    var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelectorAll(".gallery-format, .product-entry-slider");
    _this.flickity = [];
    elements === null || elements === void 0 ? void 0 : elements.forEach(function (element) {
      var flickity = new Flickity(element, {
        autoPlay: element.classList.contains("woo-entry-image") ? false : 6000,
        rightToLeft: _constants.DOM.body.classList.contains("rtl") ? true : false,
        imagesLoaded: true,
        // contain: true,
        pageDots: false,
        on: {
          ready: function ready() {
            element.style.opacity = 1;
            element.style.visibility = "visible";
            element.style.height = "auto";
          }
        }
      });

      _this.flickity.push(flickity);
    });
  });
  this.start();
};

var _default = OWSlider;
exports["default"] = _default;

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/defineProperty":40,"@babel/runtime/helpers/interopRequireDefault":43}],20:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _utils = require("../../lib/utils");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _targetElem = /*#__PURE__*/new WeakMap();

var _lastScrollTop = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onScrollItemClick = /*#__PURE__*/new WeakMap();

var _getAdminBarHeight = /*#__PURE__*/new WeakMap();

var _getTopbarHeight = /*#__PURE__*/new WeakMap();

var _getStickyHeaderHeight = /*#__PURE__*/new WeakMap();

var _fixMultiMenu = /*#__PURE__*/new WeakMap();

var ScrollEffect = function ScrollEffect() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, ScrollEffect);

  _classPrivateFieldInitSpec(this, _targetElem, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _lastScrollTop, {
    writable: true,
    value: 0
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      document.querySelectorAll('a[href*="#"]:not([href="#"]), a.local[href*="#"]:not([href="#"]), .local a[href*="#"]:not([href="#"]), a.menu-link[href*="#"]:not([href="#"]), a.sidr-class-menu-link[href*="#"]:not([href="#"])').forEach(function (scrollItem) {
        scrollItem.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onScrollItemClick));
      });
    }
  });

  _classPrivateFieldInitSpec(this, _onScrollItemClick, {
    writable: true,
    value: function value(event) {
      var scrollItem = event.currentTarget;

      if (scrollItem.classList.contains("elementor-item-anchor") && scrollItem.classList.contains("has-submenu")) {
        return;
      }

      if (!scrollItem.classList.contains("omw-open-modal") && !scrollItem.closest(".omw-open-modal") && !scrollItem.classList.contains("opl-link") && !scrollItem.parentNode.classList.contains("opl-link") && !scrollItem.classList.contains("sidr-class-opl-link") && !scrollItem.parentNode.classList.contains("sidr-class-opl-link")) {
        var href = scrollItem.getAttribute("href");
        var id = href.substring(href.indexOf("#")).slice(1);

        if ((0, _utils.isSelectorValid)("#".concat(id))) {
          (0, _classPrivateFieldSet2["default"])(_this, _targetElem, document.querySelector("#".concat(id)));
        }

        if (id != "" && !!(0, _classPrivateFieldGet2["default"])(_this, _targetElem)) {
          var _document$querySelect, _document$querySelect2;

          event.preventDefault();
          event.stopPropagation();
          var scrollPosition = (0, _utils.offset)((0, _classPrivateFieldGet2["default"])(_this, _targetElem)).top - (0, _classPrivateFieldGet2["default"])(_this, _getAdminBarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getTopbarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getStickyHeaderHeight).call(_this);

          if (!((_document$querySelect = document.querySelector("#site-header-sticky-wrapper")) !== null && _document$querySelect !== void 0 && _document$querySelect.classList.contains("is-sticky")) && (!!document.querySelector("#site-header-sticky-wrapper") || !!document.querySelector("#stick-anything-header") || !!((_document$querySelect2 = document.querySelector(".elementor-section-wrap")) !== null && _document$querySelect2 !== void 0 && _document$querySelect2.firstElementChild.classList.contains("elementor-sticky"))) && !!_constants.DOM.header.site && !_constants.DOM.header.site.classList.contains("top-header") && !_constants.DOM.header.site.classList.contains("medium-header") && !_constants.DOM.header.site.classList.contains("vertical-header")) {
            window.addEventListener("scroll", (0, _classPrivateFieldGet2["default"])(_this, _fixMultiMenu));
          }

          _constants.DOM.html.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
          });
        }
      }
    }
  });

  _classPrivateFieldInitSpec(this, _getAdminBarHeight, {
    writable: true,
    value: function value() {
      return !!_constants.DOM.WPAdminbar ? _constants.DOM.WPAdminbar.offsetHeight : 0;
    }
  });

  _classPrivateFieldInitSpec(this, _getTopbarHeight, {
    writable: true,
    value: function value() {
      return !!_constants.DOM.header.topbarWrapper && _constants.DOM.header.topbarWrapper.classList.contains("top-bar-sticky") ? _constants.DOM.header.topbarWrapper.offsetHeight : 0;
    }
  });

  _classPrivateFieldInitSpec(this, _getStickyHeaderHeight, {
    writable: true,
    value: function value() {
      var _document$querySelect3;

      var startPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var stickyHeader = document.querySelector("#site-header-sticky-wrapper");

      if (!!stickyHeader) {
        var _DOM$header$site, _DOM$header$site2, _DOM$header$site3, _DOM$header$site4, _DOM$header$site$data, _DOM$header$site5;

        if (stickyHeader.classList.contains("is-sticky") && !startPosition) {
          return _constants.DOM.header.site.offsetHeight;
        }

        if ((_DOM$header$site = _constants.DOM.header.site) !== null && _DOM$header$site !== void 0 && _DOM$header$site.classList.contains("top-header")) {
          return Number.parseInt(getComputedStyle(stickyHeader).height);
        }

        if ((_DOM$header$site2 = _constants.DOM.header.site) !== null && _DOM$header$site2 !== void 0 && _DOM$header$site2.classList.contains("medium-header")) {
          var height = 0;

          var menu = _constants.DOM.header.site.querySelector(".bottom-header-wrap");

          if (menu.classList.contains("fixed-scroll")) {
            height = menu.offsetHeight;
          } else if (_constants.DOM.header.site.classList.contains("hidden-menu")) {
            height = _constants.DOM.header.site.dataset.height;
          } else {
            height = _constants.DOM.header.site.offsetHeight;
          }

          return height;
        }

        if ((_DOM$header$site3 = _constants.DOM.header.site) !== null && _DOM$header$site3 !== void 0 && _DOM$header$site3.classList.contains("fixed-header")) {
          return _constants.DOM.header.site.offsetHeight;
        }

        if ((_DOM$header$site4 = _constants.DOM.header.site) !== null && _DOM$header$site4 !== void 0 && _DOM$header$site4.classList.contains("up-effect")) {
          return 0;
        }

        return (_DOM$header$site$data = (_DOM$header$site5 = _constants.DOM.header.site) === null || _DOM$header$site5 === void 0 ? void 0 : _DOM$header$site5.dataset.height) !== null && _DOM$header$site$data !== void 0 ? _DOM$header$site$data : 54;
      }

      if (!!document.querySelector("#stick-anything-header")) {
        return document.querySelector("#stick-anything-header").offsetHeight;
      }

      if (!_constants.DOM.header.site && !!((_document$querySelect3 = document.querySelector(".elementor-section-wrap")) !== null && _document$querySelect3 !== void 0 && _document$querySelect3.firstElementChild.classList.contains("elementor-sticky"))) {
        var _document$querySelect4;

        return (_document$querySelect4 = document.querySelector(".elementor-section-wrap")) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.firstElementChild.offsetHeight;
      }

      return 0;
    }
  });

  _classPrivateFieldInitSpec(this, _fixMultiMenu, {
    writable: true,
    value: function value(event) {
      var fixedOffset = (0, _utils.offset)((0, _classPrivateFieldGet2["default"])(_this, _targetElem)).top - (0, _classPrivateFieldGet2["default"])(_this, _getAdminBarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getTopbarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getStickyHeaderHeight).call(_this, true);

      if (window.pageYOffset.toFixed() === fixedOffset.toFixed()) {
        var _DOM$header$site6;

        window.removeEventListener("scroll", (0, _classPrivateFieldGet2["default"])(_this, _fixMultiMenu));

        if (((_DOM$header$site6 = _constants.DOM.header.site) === null || _DOM$header$site6 === void 0 ? void 0 : _DOM$header$site6.offsetHeight) - 1 > (0, _classPrivateFieldGet2["default"])(_this, _getStickyHeaderHeight).call(_this, true)) {
          var _DOM$header$site7;

          var scrollPosition = (0, _utils.offset)((0, _classPrivateFieldGet2["default"])(_this, _targetElem)).top - (0, _classPrivateFieldGet2["default"])(_this, _getAdminBarHeight).call(_this) - (0, _classPrivateFieldGet2["default"])(_this, _getTopbarHeight).call(_this) - ((_DOM$header$site7 = _constants.DOM.header.site) === null || _DOM$header$site7 === void 0 ? void 0 : _DOM$header$site7.offsetHeight);

          _constants.DOM.html.scrollTo({
            top: scrollPosition,
            behavior: window.pageYOffset > (0, _classPrivateFieldGet2["default"])(_this, _lastScrollTop) ? "smooth" : "auto"
          });

          (0, _classPrivateFieldSet2["default"])(_this, _lastScrollTop, window.pageYOffset);
        }
      }
    }
  });

  if (!_constants.DOM.body.classList.contains("single-product") && !_constants.DOM.body.classList.contains("no-local-scroll")) {
    (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
  }
};

var _default = ScrollEffect;
exports["default"] = _default;

},{"../../constants":1,"../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/classPrivateFieldSet":39,"@babel/runtime/helpers/interopRequireDefault":43}],21:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _utils = require("../../lib/utils");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onWindowScroll = /*#__PURE__*/new WeakMap();

var _onScrollTopClick = /*#__PURE__*/new WeakMap();

var ScrollTop = function ScrollTop() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, ScrollTop);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {}
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      var _DOM$scroll$scrollTop, _DOM$scroll$goTop, _DOM$scroll$goTopSlas;

      window.addEventListener("scroll", (0, _classPrivateFieldGet2["default"])(_this, _onWindowScroll));
      (_DOM$scroll$scrollTop = _constants.DOM.scroll.scrollTop) === null || _DOM$scroll$scrollTop === void 0 ? void 0 : _DOM$scroll$scrollTop.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onScrollTopClick));
      (_DOM$scroll$goTop = _constants.DOM.scroll.goTop) === null || _DOM$scroll$goTop === void 0 ? void 0 : _DOM$scroll$goTop.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onScrollTopClick));
      (_DOM$scroll$goTopSlas = _constants.DOM.scroll.goTopSlash) === null || _DOM$scroll$goTopSlas === void 0 ? void 0 : _DOM$scroll$goTopSlas.addEventListener("click", (0, _classPrivateFieldGet2["default"])(_this, _onScrollTopClick));
    }
  });

  _classPrivateFieldInitSpec(this, _onWindowScroll, {
    writable: true,
    value: function value(event) {
      if (!_constants.DOM.scroll.scrollTop) {
        return;
      }

      if (window.pageYOffset > 100) {
        if (window.getComputedStyle(_constants.DOM.scroll.scrollTop).display === "none") {
          (0, _utils.fadeIn)(_constants.DOM.scroll.scrollTop);
        }
      } else if (window.getComputedStyle(_constants.DOM.scroll.scrollTop).display !== "none") {
        (0, _utils.fadeOut)(_constants.DOM.scroll.scrollTop);
      }
    }
  });

  _classPrivateFieldInitSpec(this, _onScrollTopClick, {
    writable: true,
    value: function value(event) {
      var _scrollTop$parentNode;

      event.preventDefault();
      var scrollTop = event.currentTarget;

      _constants.DOM.html.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      (_scrollTop$parentNode = scrollTop.parentNode) === null || _scrollTop$parentNode === void 0 ? void 0 : _scrollTop$parentNode.classList.remove("sfHover");
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

exports["default"] = ScrollTop;

},{"../../constants":1,"../../lib/utils":4,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/interopRequireDefault":43}],22:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

var _dropDown = _interopRequireDefault(require("./search/drop-down"));

var _headerReplace = _interopRequireDefault(require("./search/header-replace"));

var _mobileSearchIcon = _interopRequireDefault(require("./search/mobile-search-icon"));

var _overlay = _interopRequireDefault(require("./search/overlay"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onInputKeyup = /*#__PURE__*/new WeakMap();

var Search = function Search() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Search);
  (0, _defineProperty2["default"])(this, "mobileOverlayInput", void 0);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      var _this$mobileOverlayIn;

      _this.dropDown = new _dropDown["default"]();
      _this.headerReplace = new _headerReplace["default"]();
      _this.overlay = new _overlay["default"]();
      _this.mobileSearchIcon = new _mobileSearchIcon["default"]();
      _this.mobileOverlayInput = document.querySelector(".mobile-search-overlay-input");

      _constants.DOM.search.forms.forEach(function (form) {
        var _form$querySelector;

        if ((_form$querySelector = form.querySelector("input")) !== null && _form$querySelector !== void 0 && _form$querySelector.value) {
          form.classList.add("search-filled");
        }
      });

      if (!!((_this$mobileOverlayIn = _this.mobileOverlayInput) !== null && _this$mobileOverlayIn !== void 0 && _this$mobileOverlayIn.value)) {
        _this.mobileOverlayInput.closest("form").classList.add("search-filled");
      }
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      var _this$mobileOverlayIn2, _this$mobileOverlayIn3;

      _constants.DOM.search.forms.forEach(function (form) {
        var _form$querySelector2, _form$querySelector3;

        (_form$querySelector2 = form.querySelector("input")) === null || _form$querySelector2 === void 0 ? void 0 : _form$querySelector2.addEventListener("keyup", (0, _classPrivateFieldGet2["default"])(_this, _onInputKeyup));
        (_form$querySelector3 = form.querySelector("input")) === null || _form$querySelector3 === void 0 ? void 0 : _form$querySelector3.addEventListener("blur", (0, _classPrivateFieldGet2["default"])(_this, _onInputKeyup));
      });

      (_this$mobileOverlayIn2 = _this.mobileOverlayInput) === null || _this$mobileOverlayIn2 === void 0 ? void 0 : _this$mobileOverlayIn2.addEventListener("keyup", (0, _classPrivateFieldGet2["default"])(_this, _onInputKeyup));
      (_this$mobileOverlayIn3 = _this.mobileOverlayInput) === null || _this$mobileOverlayIn3 === void 0 ? void 0 : _this$mobileOverlayIn3.addEventListener("blur", (0, _classPrivateFieldGet2["default"])(_this, _onInputKeyup));
    }
  });

  _classPrivateFieldInitSpec(this, _onInputKeyup, {
    writable: true,
    value: function value(event) {
      var input = event.currentTarget;
      var form = input.closest("form");

      if (input.value) {
        form.classList.add("search-filled");
      } else {
        form.classList.remove("search-filled");
      }
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

var _default = Search;
exports["default"] = _default;

},{"../../constants":1,"./search/drop-down":24,"./search/header-replace":25,"./search/mobile-search-icon":26,"./search/overlay":27,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/defineProperty":40,"@babel/runtime/helpers/interopRequireDefault":43}],23:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var SearchBase = function SearchBase() {
  (0, _classCallCheck2["default"])(this, SearchBase);
  (0, _defineProperty2["default"])(this, "focus", function (form, inputClass) {
    var formTransitionDuration = parseFloat(getComputedStyle(form).transitionDuration.replace("s", "")) * 1000;
    formTransitionDuration = !!formTransitionDuration ? formTransitionDuration : 600;

    if (formTransitionDuration) {
      setTimeout(function () {
        form.querySelector(inputClass).focus();
      }, formTransitionDuration);
    }
  });
};

var _default = SearchBase;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/defineProperty":40,"@babel/runtime/helpers/interopRequireDefault":43}],24:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleSearchBtnClick = /*#__PURE__*/new WeakMap();

var _onDocumentClick = /*#__PURE__*/new WeakMap();

var DropDownSearch = /*#__PURE__*/function (_SearchBase) {
  (0, _inherits2["default"])(DropDownSearch, _SearchBase);

  var _super = _createSuper(DropDownSearch);

  function DropDownSearch() {
    var _this;

    (0, _classCallCheck2["default"])(this, DropDownSearch);
    _this = _super.call(this);

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _setupEventListeners, {
      writable: true,
      value: function value() {
        var _DOM$search$dropDown$;

        (_DOM$search$dropDown$ = _constants.DOM.search.dropDown.toggleSearchBtn) === null || _DOM$search$dropDown$ === void 0 ? void 0 : _DOM$search$dropDown$.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick));
        document.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onDocumentClick));
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick, {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        event.stopPropagation();
        var _DOM$search$dropDown = _constants.DOM.search.dropDown,
            toggleSearchBtn = _DOM$search$dropDown.toggleSearchBtn,
            form = _DOM$search$dropDown.form;
        toggleSearchBtn.parentNode.classList.toggle("active");
        form.classList.toggle("show");

        _this.focus(form, "input.field");
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onDocumentClick, {
      writable: true,
      value: function value(event) {
        // Collaps search form
        if (!event.target.closest("#searchform-dropdown.show")) {
          var _DOM$search$dropDown$2, _DOM$search$dropDown$3, _DOM$search$dropDown$4;

          (_DOM$search$dropDown$2 = _constants.DOM.search.dropDown.form) === null || _DOM$search$dropDown$2 === void 0 ? void 0 : _DOM$search$dropDown$2.classList.remove("show");
          (_DOM$search$dropDown$3 = _constants.DOM.search.dropDown.toggleSearchBtn) === null || _DOM$search$dropDown$3 === void 0 ? void 0 : (_DOM$search$dropDown$4 = _DOM$search$dropDown$3.parentNode) === null || _DOM$search$dropDown$4 === void 0 ? void 0 : _DOM$search$dropDown$4.classList.remove("active");
        }
      }
    });

    if (_constants.options.menuSearchStyle !== "drop_down") {
      return (0, _possibleConstructorReturn2["default"])(_this);
    }

    (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _setupEventListeners).call((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return DropDownSearch;
}(_base["default"]);

var _default = DropDownSearch;
exports["default"] = _default;

},{"../../../constants":1,"./base":23,"@babel/runtime/helpers/assertThisInitialized":36,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/getPrototypeOf":41,"@babel/runtime/helpers/inherits":42,"@babel/runtime/helpers/interopRequireDefault":43,"@babel/runtime/helpers/possibleConstructorReturn":44}],25:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleSearchBtnClick = /*#__PURE__*/new WeakMap();

var _onCloseBtnClick = /*#__PURE__*/new WeakMap();

var _onDocumentClick = /*#__PURE__*/new WeakMap();

var _hasTopHeader = /*#__PURE__*/new WeakMap();

var HeaderReplaceSearch = /*#__PURE__*/function (_SearchBase) {
  (0, _inherits2["default"])(HeaderReplaceSearch, _SearchBase);

  var _super = _createSuper(HeaderReplaceSearch);

  function HeaderReplaceSearch() {
    var _this;

    (0, _classCallCheck2["default"])(this, HeaderReplaceSearch);
    _this = _super.call(this);

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _setupEventListeners, {
      writable: true,
      value: function value() {
        var _DOM$search$headerRep, _DOM$search$headerRep2;

        (_DOM$search$headerRep = _constants.DOM.search.headerReplace.toggleSearchBtn) === null || _DOM$search$headerRep === void 0 ? void 0 : _DOM$search$headerRep.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick));
        (_DOM$search$headerRep2 = _constants.DOM.search.headerReplace.closeBtn) === null || _DOM$search$headerRep2 === void 0 ? void 0 : _DOM$search$headerRep2.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onCloseBtnClick));
        document.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onDocumentClick));
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick, {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        event.stopPropagation();
        var form = _constants.DOM.search.headerReplace.form;
        form.classList.toggle("show");

        if ((0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _hasTopHeader).call((0, _assertThisInitialized2["default"])(_this))) {
          _constants.DOM.header.topLeftSide.classList.toggle("hide");

          _constants.DOM.header.topRightSide.classList.toggle("hide");
        } else {
          var _document$querySelect;

          if (!_constants.DOM.menu.nav.classList.contains("hide")) {
            _constants.DOM.menu.main.style.minWidth = "370px";
          }

          _constants.DOM.menu.nav.classList.toggle("hide");

          form.style.maxWidth = ((_document$querySelect = document.querySelector("#site-navigation > ul.dropdown-menu")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.offsetWidth) + 60 + "px";
        }

        _this.focus(form, 'input[type="search"]');
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onCloseBtnClick, {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        var form = _constants.DOM.search.headerReplace.form;
        form.classList.remove("show");

        if ((0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _hasTopHeader).call((0, _assertThisInitialized2["default"])(_this))) {
          _constants.DOM.header.topLeftSide.classList.remove("hide");

          _constants.DOM.header.topRightSide.classList.remove("hide");
        } else {
          _constants.DOM.menu.nav.classList.remove("hide");

          setTimeout(function () {
            _constants.DOM.menu.main.style.minWidth = "";
          }, 250);
        }
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onDocumentClick, {
      writable: true,
      value: function value(event) {
        // Collaps search form
        if (!event.target.closest("#searchform-header-replace.show")) {
          var _DOM$search$headerRep3, _DOM$search$headerRep4;

          (_DOM$search$headerRep3 = _constants.DOM.search.headerReplace) === null || _DOM$search$headerRep3 === void 0 ? void 0 : (_DOM$search$headerRep4 = _DOM$search$headerRep3.form) === null || _DOM$search$headerRep4 === void 0 ? void 0 : _DOM$search$headerRep4.classList.remove("show");

          if ((0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _hasTopHeader).call((0, _assertThisInitialized2["default"])(_this))) {
            var _DOM$header$topLeftSi, _DOM$header$topRightS;

            (_DOM$header$topLeftSi = _constants.DOM.header.topLeftSide) === null || _DOM$header$topLeftSi === void 0 ? void 0 : _DOM$header$topLeftSi.classList.remove("hide");
            (_DOM$header$topRightS = _constants.DOM.header.topRightSide) === null || _DOM$header$topRightS === void 0 ? void 0 : _DOM$header$topRightS.classList.remove("hide");
          } else {
            var _DOM$menu$nav;

            (_DOM$menu$nav = _constants.DOM.menu.nav) === null || _DOM$menu$nav === void 0 ? void 0 : _DOM$menu$nav.classList.remove("hide");
          }
        }
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _hasTopHeader, {
      writable: true,
      value: function value() {
        var _DOM$header$site;

        return (_DOM$header$site = _constants.DOM.header.site) === null || _DOM$header$site === void 0 ? void 0 : _DOM$header$site.classList.contains("top-header");
      }
    });

    if (_constants.options.menuSearchStyle !== "header_replace") {
      return (0, _possibleConstructorReturn2["default"])(_this);
    }

    (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _setupEventListeners).call((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return HeaderReplaceSearch;
}(_base["default"]);

var _default = HeaderReplaceSearch;
exports["default"] = _default;

},{"../../../constants":1,"./base":23,"@babel/runtime/helpers/assertThisInitialized":36,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/getPrototypeOf":41,"@babel/runtime/helpers/inherits":42,"@babel/runtime/helpers/interopRequireDefault":43,"@babel/runtime/helpers/possibleConstructorReturn":44}],26:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet6 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _elements = /*#__PURE__*/new WeakMap();

var _setElements = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _toggleDropdownSearch = /*#__PURE__*/new WeakMap();

var _openOverlaySearch = /*#__PURE__*/new WeakMap();

var _closeOverlaySearch = /*#__PURE__*/new WeakMap();

var _onClickOverlaySearch = /*#__PURE__*/new WeakMap();

var _onClickDocument = /*#__PURE__*/new WeakMap();

var MobileSearchIcon = /*#__PURE__*/function (_SearchBase) {
  (0, _inherits2["default"])(MobileSearchIcon, _SearchBase);

  var _super = _createSuper(MobileSearchIcon);

  function MobileSearchIcon() {
    var _this;

    (0, _classCallCheck2["default"])(this, MobileSearchIcon);
    _this = _super.call(this);

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _setElements, {
      writable: true,
      value: function value() {
        (0, _classPrivateFieldSet2["default"])((0, _assertThisInitialized2["default"])(_this), _elements, {
          dropdownSearchIcon: document.querySelector(".search-icon-dropdown"),
          dropdownSearchForm: document.querySelector(".search-style-dropdown"),
          overlaySearch: document.querySelector(".search-style-overlay"),
          overlaySearchIcon: document.querySelector(".search-icon-overlay"),
          overlaySearchCloseIcon: document.querySelector(".search-style-overlay .search-overlay-close"),
          html: document.querySelector("html")
        });
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _setupEventListeners, {
      writable: true,
      value: function value() {
        if (_constants.options.mobileMenuSearchStyle === "drop_down") {
          var _classPrivateFieldGet2;

          (_classPrivateFieldGet2 = (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchIcon) === null || _classPrivateFieldGet2 === void 0 ? void 0 : _classPrivateFieldGet2.addEventListener("click", (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _toggleDropdownSearch));
          document.addEventListener("click", (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _onClickDocument));
        } else if (_constants.options.mobileMenuSearchStyle === "overlay") {
          var _classPrivateFieldGet3, _classPrivateFieldGet4, _classPrivateFieldGet5;

          (_classPrivateFieldGet3 = (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearchIcon) === null || _classPrivateFieldGet3 === void 0 ? void 0 : _classPrivateFieldGet3.addEventListener("click", (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _openOverlaySearch));
          (_classPrivateFieldGet4 = (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearchCloseIcon) === null || _classPrivateFieldGet4 === void 0 ? void 0 : _classPrivateFieldGet4.addEventListener("click", (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _closeOverlaySearch));
          (_classPrivateFieldGet5 = (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch) === null || _classPrivateFieldGet5 === void 0 ? void 0 : _classPrivateFieldGet5.addEventListener("click", (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _onClickOverlaySearch));
        }
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _toggleDropdownSearch, {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        event.stopPropagation();
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchForm.classList.toggle("show");
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchIcon.classList.toggle("active");

        _this.focus((0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchForm.querySelector("form"), "input.field");
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _openOverlaySearch, {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch.classList.add("active");
        (0, _utils.fadeIn)((0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch);

        _this.focus((0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch.querySelector("form"), "input.mobile-search-overlay-input");

        setTimeout(function () {
          (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).html.style.overflow = "hidden";
        }, 400);
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _closeOverlaySearch, {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch.classList.remove("active");
        (0, _utils.fadeOut)((0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch);
        setTimeout(function () {
          (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).html.style.overflow = "visible";
        }, 400);
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onClickOverlaySearch, {
      writable: true,
      value: function value(event) {
        (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).overlaySearch.querySelector("input").focus();
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onClickDocument, {
      writable: true,
      value: function value(event) {
        if (!event.target.closest("#icon-searchform-dropdown.show")) {
          (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchIcon.classList.remove("active");
          (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _elements).dropdownSearchForm.classList.remove("show");
        }
      }
    });

    if (_constants.options.mobileMenuSearchStyle === "disabled") {
      return (0, _possibleConstructorReturn2["default"])(_this);
    }

    (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _setElements).call((0, _assertThisInitialized2["default"])(_this));
    (0, _classPrivateFieldGet6["default"])((0, _assertThisInitialized2["default"])(_this), _setupEventListeners).call((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return MobileSearchIcon;
}(_base["default"]);

var _default = MobileSearchIcon;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"./base":23,"@babel/runtime/helpers/assertThisInitialized":36,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/classPrivateFieldSet":39,"@babel/runtime/helpers/getPrototypeOf":41,"@babel/runtime/helpers/inherits":42,"@babel/runtime/helpers/interopRequireDefault":43,"@babel/runtime/helpers/possibleConstructorReturn":44}],27:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../../constants");

var _utils = require("../../../lib/utils");

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onToggleSearchBtnClick = /*#__PURE__*/new WeakMap();

var _onCloseBtnClick = /*#__PURE__*/new WeakMap();

var OverlaySearch = /*#__PURE__*/function (_SearchBase) {
  (0, _inherits2["default"])(OverlaySearch, _SearchBase);

  var _super = _createSuper(OverlaySearch);

  function OverlaySearch() {
    var _this;

    (0, _classCallCheck2["default"])(this, OverlaySearch);
    _this = _super.call(this);

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _setupEventListeners, {
      writable: true,
      value: function value() {
        var _DOM$search$overlay$t, _DOM$search$overlay$c;

        (_DOM$search$overlay$t = _constants.DOM.search.overlay.toggleSearchBtn) === null || _DOM$search$overlay$t === void 0 ? void 0 : _DOM$search$overlay$t.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick));
        (_DOM$search$overlay$c = _constants.DOM.search.overlay.closeBtn) === null || _DOM$search$overlay$c === void 0 ? void 0 : _DOM$search$overlay$c.addEventListener("click", (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _onCloseBtnClick));
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onToggleSearchBtnClick, {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        var form = _constants.DOM.search.overlay.form;
        form.classList.add("active");
        (0, _utils.fadeIn)(form);

        _this.focus(form, 'input[type="search"]');

        setTimeout(function () {
          _constants.DOM.html.style.overflow = "hidden";
        }, 400);
      }
    });

    _classPrivateFieldInitSpec((0, _assertThisInitialized2["default"])(_this), _onCloseBtnClick, {
      writable: true,
      value: function value(event) {
        event.preventDefault();
        var form = _constants.DOM.search.overlay.form;
        form.classList.remove("active");
        (0, _utils.fadeOut)(form);
        setTimeout(function () {
          _constants.DOM.html.style.overflow = "visible";
        }, 400);
      }
    });

    if (_constants.options.menuSearchStyle !== "overlay") {
      return (0, _possibleConstructorReturn2["default"])(_this);
    }

    (0, _classPrivateFieldGet2["default"])((0, _assertThisInitialized2["default"])(_this), _setupEventListeners).call((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  return OverlaySearch;
}(_base["default"]);

var _default = OverlaySearch;
exports["default"] = _default;

},{"../../../constants":1,"../../../lib/utils":4,"./base":23,"@babel/runtime/helpers/assertThisInitialized":36,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/getPrototypeOf":41,"@babel/runtime/helpers/inherits":42,"@babel/runtime/helpers/interopRequireDefault":43,"@babel/runtime/helpers/possibleConstructorReturn":44}],28:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _constants = require("../../constants");

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _select = /*#__PURE__*/new WeakMap();

var _render = /*#__PURE__*/new WeakMap();

var _style = /*#__PURE__*/new WeakMap();

var _setupEventListenersItem = /*#__PURE__*/new WeakMap();

var _onMouseenter = /*#__PURE__*/new WeakMap();

var _onMouseleave = /*#__PURE__*/new WeakMap();

var _setupEventListeners = /*#__PURE__*/new WeakMap();

var _onDocumentReady = /*#__PURE__*/new WeakMap();

var Select = function Select() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Select);

  _classPrivateFieldInitSpec(this, _select, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _render, {
    writable: true,
    value: function value() {
      _constants.DOM.selectTags.forEach(function (select) {
        (0, _classPrivateFieldSet2["default"])(_this, _select, select);
        (0, _classPrivateFieldGet2["default"])(_this, _select).insertAdjacentHTML("afterend", "<span class=\"theme-select ".concat((0, _classPrivateFieldGet2["default"])(_this, _select).classList, "\">\n                    <span class=\"theme-selectInner\">\n                        ").concat((0, _classPrivateFieldGet2["default"])(_this, _select).options[(0, _classPrivateFieldGet2["default"])(_this, _select).selectedIndex].text, "\n                    </span>\n                </span>"));
        (0, _classPrivateFieldGet2["default"])(_this, _select).classList.add("hasCustomSelect");
        (0, _classPrivateFieldGet2["default"])(_this, _style).call(_this);
        (0, _classPrivateFieldGet2["default"])(_this, _setupEventListenersItem).call(_this);
      });
    }
  });

  _classPrivateFieldInitSpec(this, _style, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldGet2["default"])(_this, _select).style.opacity = 0;
      (0, _classPrivateFieldGet2["default"])(_this, _select).style.position = "absolute";
      (0, _classPrivateFieldGet2["default"])(_this, _select).style.height = "34px";
      (0, _classPrivateFieldGet2["default"])(_this, _select).style.fontSize = "13px";
      (0, _classPrivateFieldGet2["default"])(_this, _select).style.appearance = "menulist-button";
      (0, _classPrivateFieldGet2["default"])(_this, _select).nextSibling.style.display = "inline-block";
      (0, _classPrivateFieldGet2["default"])(_this, _select).nextSibling.firstElementChild.style.display = "inline-block";
    }
  });

  _classPrivateFieldInitSpec(this, _setupEventListenersItem, {
    writable: true,
    value: function value() {
      (0, _classPrivateFieldGet2["default"])(_this, _select).addEventListener("mouseenter", (0, _classPrivateFieldGet2["default"])(_this, _onMouseenter));
      (0, _classPrivateFieldGet2["default"])(_this, _select).addEventListener("mouseleave", (0, _classPrivateFieldGet2["default"])(_this, _onMouseleave));
      (0, _classPrivateFieldGet2["default"])(_this, _select).addEventListener("change", _this.onChange);
    }
  });

  _classPrivateFieldInitSpec(this, _onMouseenter, {
    writable: true,
    value: function value(event) {
      var select = event.currentTarget;
      select.classList.add("theme-selectHover");
    }
  });

  _classPrivateFieldInitSpec(this, _onMouseleave, {
    writable: true,
    value: function value(event) {
      var select = event.currentTarget;
      select.classList.remove("theme-selectHover");
    }
  });

  (0, _defineProperty2["default"])(this, "onChange", function (event) {
    var select = event.currentTarget;
    select.nextSibling.innerHTML = select.options[select.selectedIndex].text;
  });

  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      document.addEventListener("DOMContentLoaded", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentReady));
      window.addEventListener("resize", (0, _classPrivateFieldGet2["default"])(_this, _onDocumentReady));
    }
  });

  _classPrivateFieldInitSpec(this, _onDocumentReady, {
    writable: true,
    value: function value(event) {
      _constants.DOM.selectTags.forEach(function (select) {
        select.style.width = select.nextSibling.offsetWidth + "px";
      });
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _render).call(this);
  (0, _classPrivateFieldGet2["default"])(this, _setupEventListeners).call(this);
};

exports["default"] = Select;

},{"../../constants":1,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/classPrivateFieldSet":39,"@babel/runtime/helpers/defineProperty":40,"@babel/runtime/helpers/interopRequireDefault":43}],29:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _select = _interopRequireDefault(require("./components/select"));

var _header = _interopRequireDefault(require("./components/header"));

var _menu = _interopRequireDefault(require("./components/menu"));

var _mobileMenu = _interopRequireDefault(require("./components/mobile-menu"));

var _search = _interopRequireDefault(require("./components/search"));

var _footer = _interopRequireDefault(require("./components/footer"));

var _blogMasonry = _interopRequireDefault(require("./components/blog-masonry"));

var _scrollTop = _interopRequireDefault(require("./components/scroll-top"));

var _scrollEffect = _interopRequireDefault(require("./components/scroll-effect"));

var _equalHeightElements = _interopRequireDefault(require("./components/equal-height-elements"));

var _owInfiniteScroll = _interopRequireDefault(require("./components/ow-infinite-scroll"));

var _owSlider = _interopRequireDefault(require("./components/ow-slider"));

var _owLightbox = _interopRequireDefault(require("./components/ow-lightbox"));

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _start = /*#__PURE__*/new WeakMap();

var Theme = function Theme() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Theme);

  _classPrivateFieldInitSpec(this, _start, {
    writable: true,
    value: function value() {
      _this.select = new _select["default"]();
      _this.header = new _header["default"]();
      _this.menu = new _menu["default"]();
      _this.mobileMenu = new _mobileMenu["default"]();
      _this.search = new _search["default"]();
      _this.footer = new _footer["default"]();
      _this.blogMasonry = new _blogMasonry["default"]();
      _this.scrollTop = new _scrollTop["default"]();
      _this.scrollEffect = new _scrollEffect["default"]();
      _this.equalHeightElements = new _equalHeightElements["default"]();
      _this.owLightbox = new _owLightbox["default"]();
      _this.owSlider = new _owSlider["default"]();
      document.addEventListener("DOMContentLoaded", function () {
        _this.owInfiniteScroll = new _owInfiniteScroll["default"]();
      });
    }
  });

  (0, _classPrivateFieldGet2["default"])(this, _start).call(this);
};

var _default = Theme;
exports["default"] = _default;

},{"./components/blog-masonry":5,"./components/equal-height-elements":6,"./components/footer":7,"./components/header":8,"./components/menu":10,"./components/mobile-menu":13,"./components/ow-infinite-scroll":17,"./components/ow-lightbox":18,"./components/ow-slider":19,"./components/scroll-effect":20,"./components/scroll-top":21,"./components/search":22,"./components/select":28,"@babel/runtime/helpers/classCallCheck":37,"@babel/runtime/helpers/classPrivateFieldGet":38,"@babel/runtime/helpers/interopRequireDefault":43}],30:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/create");
},{"core-js/library/fn/object/create":47}],31:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/define-property");
},{"core-js/library/fn/object/define-property":48}],32:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/get-prototype-of");
},{"core-js/library/fn/object/get-prototype-of":49}],33:[function(require,module,exports){
module.exports = require("core-js/library/fn/object/set-prototype-of");
},{"core-js/library/fn/object/set-prototype-of":50}],34:[function(require,module,exports){
module.exports = require("core-js/library/fn/symbol");
},{"core-js/library/fn/symbol":51}],35:[function(require,module,exports){
module.exports = require("core-js/library/fn/symbol/iterator");
},{"core-js/library/fn/symbol/iterator":52}],36:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],37:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],38:[function(require,module,exports){
function _classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver).value;
}

module.exports = _classPrivateFieldGet;
},{}],39:[function(require,module,exports){
function _classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  var descriptor = privateMap.get(receiver);

  if (!descriptor.writable) {
    throw new TypeError("attempted to set read only private field");
  }

  descriptor.value = value;
  return value;
}

module.exports = _classPrivateFieldSet;
},{}],40:[function(require,module,exports){
var _Object$defineProperty = require("../core-js/object/define-property");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{"../core-js/object/define-property":31}],41:[function(require,module,exports){
var _Object$getPrototypeOf = require("../core-js/object/get-prototype-of");

var _Object$setPrototypeOf = require("../core-js/object/set-prototype-of");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{"../core-js/object/get-prototype-of":32,"../core-js/object/set-prototype-of":33}],42:[function(require,module,exports){
var _Object$create = require("../core-js/object/create");

var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"../core-js/object/create":30,"./setPrototypeOf":45}],43:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;
},{}],44:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":46,"./assertThisInitialized":36}],45:[function(require,module,exports){
var _Object$setPrototypeOf = require("../core-js/object/set-prototype-of");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{"../core-js/object/set-prototype-of":33}],46:[function(require,module,exports){
var _Symbol$iterator = require("../core-js/symbol/iterator");

var _Symbol = require("../core-js/symbol");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{"../core-js/symbol":34,"../core-js/symbol/iterator":35}],47:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

},{"../../modules/_core":58,"../../modules/es6.object.create":111}],48:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":58,"../../modules/es6.object.define-property":112}],49:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;

},{"../../modules/_core":58,"../../modules/es6.object.get-prototype-of":113}],50:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;

},{"../../modules/_core":58,"../../modules/es6.object.set-prototype-of":114}],51:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;

},{"../../modules/_core":58,"../../modules/es6.object.to-string":115,"../../modules/es6.symbol":117,"../../modules/es7.symbol.async-iterator":118,"../../modules/es7.symbol.observable":119}],52:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');

},{"../../modules/_wks-ext":108,"../../modules/es6.string.iterator":116,"../../modules/web.dom.iterable":120}],53:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],54:[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],55:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":74}],56:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":100,"./_to-iobject":102,"./_to-length":103}],57:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],58:[function(require,module,exports){
var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],59:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":53}],60:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],61:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":66}],62:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":67,"./_is-object":74}],63:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],64:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":87,"./_object-keys":90,"./_object-pie":91}],65:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var has = require('./_has');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":58,"./_ctx":59,"./_global":67,"./_has":68,"./_hide":69}],66:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],67:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],68:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],69:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":61,"./_object-dp":82,"./_property-desc":93}],70:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":67}],71:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":61,"./_dom-create":62,"./_fails":66}],72:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":57}],73:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":57}],74:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],75:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":69,"./_object-create":81,"./_property-desc":93,"./_set-to-string-tag":96,"./_wks":109}],76:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":65,"./_hide":69,"./_iter-create":75,"./_iterators":78,"./_library":79,"./_object-gpo":88,"./_redefine":94,"./_set-to-string-tag":96,"./_wks":109}],77:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],78:[function(require,module,exports){
module.exports = {};

},{}],79:[function(require,module,exports){
module.exports = true;

},{}],80:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":66,"./_has":68,"./_is-object":74,"./_object-dp":82,"./_uid":106}],81:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":55,"./_dom-create":62,"./_enum-bug-keys":63,"./_html":70,"./_object-dps":83,"./_shared-key":97}],82:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":55,"./_descriptors":61,"./_ie8-dom-define":71,"./_to-primitive":105}],83:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":55,"./_descriptors":61,"./_object-dp":82,"./_object-keys":90}],84:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":61,"./_has":68,"./_ie8-dom-define":71,"./_object-pie":91,"./_property-desc":93,"./_to-iobject":102,"./_to-primitive":105}],85:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":86,"./_to-iobject":102}],86:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":63,"./_object-keys-internal":89}],87:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],88:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":68,"./_shared-key":97,"./_to-object":104}],89:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":56,"./_has":68,"./_shared-key":97,"./_to-iobject":102}],90:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":63,"./_object-keys-internal":89}],91:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],92:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":58,"./_export":65,"./_fails":66}],93:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],94:[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":69}],95:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":55,"./_ctx":59,"./_is-object":74,"./_object-gopd":84}],96:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":68,"./_object-dp":82,"./_wks":109}],97:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":98,"./_uid":106}],98:[function(require,module,exports){
var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":58,"./_global":67,"./_library":79}],99:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":60,"./_to-integer":101}],100:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":101}],101:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],102:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":60,"./_iobject":72}],103:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":101}],104:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":60}],105:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":74}],106:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],107:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":58,"./_global":67,"./_library":79,"./_object-dp":82,"./_wks-ext":108}],108:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":109}],109:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":67,"./_shared":98,"./_uid":106}],110:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":54,"./_iter-define":76,"./_iter-step":77,"./_iterators":78,"./_to-iobject":102}],111:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":65,"./_object-create":81}],112:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":61,"./_export":65,"./_object-dp":82}],113:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":88,"./_object-sap":92,"./_to-object":104}],114:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":65,"./_set-proto":95}],115:[function(require,module,exports){

},{}],116:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":76,"./_string-at":99}],117:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toObject = require('./_to-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $GOPS = require('./_object-gops');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":55,"./_descriptors":61,"./_enum-keys":64,"./_export":65,"./_fails":66,"./_global":67,"./_has":68,"./_hide":69,"./_is-array":73,"./_is-object":74,"./_library":79,"./_meta":80,"./_object-create":81,"./_object-dp":82,"./_object-gopd":84,"./_object-gopn":86,"./_object-gopn-ext":85,"./_object-gops":87,"./_object-keys":90,"./_object-pie":91,"./_property-desc":93,"./_redefine":94,"./_set-to-string-tag":96,"./_shared":98,"./_to-iobject":102,"./_to-object":104,"./_to-primitive":105,"./_uid":106,"./_wks":109,"./_wks-define":107,"./_wks-ext":108}],118:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":107}],119:[function(require,module,exports){
require('./_wks-define')('observable');

},{"./_wks-define":107}],120:[function(require,module,exports){
require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./_global":67,"./_hide":69,"./_iterators":78,"./_wks":109,"./es6.array.iterator":110}],121:[function(require,module,exports){
var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;

},{}],122:[function(require,module,exports){
var closest = require('./closest');

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;

},{"./closest":121}],123:[function(require,module,exports){
/**
 * EvEmitter v2.0.0
 * Lil' event emitter
 * MIT License
 */

( function( global, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {

function EvEmitter() {}

let proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) return this;

  // set events hash
  let events = this._events = this._events || {};
  // set listeners array
  let listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( !listeners.includes( listener ) ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) return this;

  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  let onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  let onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  let listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) return this;

  let index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  let listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) return this;

  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice( 0 );
  args = args || [];
  // once stuff
  let onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( let listener of listeners ) {
    let isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
  return this;
};

return EvEmitter;

} ) );

},{}],124:[function(require,module,exports){
/**
 * Fizzy UI utils v3.0.0
 * MIT license
 */

( function( global, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory( global );
  } else {
    // browser global
    global.fizzyUIUtils = factory( global );
  }

}( this, function factory( global ) {

let utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  return Object.assign( a, b );
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  // use object if already an array
  if ( Array.isArray( obj ) ) return obj;

  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) return [];

  let isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  // convert nodeList to array
  if ( isArrayLike ) return [ ...obj ];

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  let index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( elem.matches( selector ) ) return elem;
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  let method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );

  return elems
    // check that elem is an actual element
    .filter( ( elem ) => elem instanceof HTMLElement )
    .reduce( ( ffElems, elem ) => {
      // add elem if no selector
      if ( !selector ) {
        ffElems.push( elem );
        return ffElems;
      }
      // filter & find items if we have a selector
      // filter
      if ( elem.matches( selector ) ) {
        ffElems.push( elem );
      }
      // find children
      let childElems = elem.querySelectorAll( selector );
      // concat childElems to filterFound array
      ffElems = ffElems.concat( ...childElems );
      return ffElems;
    }, [] );
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  let method = _class.prototype[ methodName ];
  let timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    clearTimeout( this[ timeoutName ] );

    let args = arguments;
    this[ timeoutName ] = setTimeout( () => {
      method.apply( this, args );
      delete this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( onDocReady ) {
  let readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( onDocReady );
  } else {
    document.addEventListener( 'DOMContentLoaded', onDocReady );
  }
};

// ----- htmlInit ----- //

// http://bit.ly/3oYLusc
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  } ).toLowerCase();
};

let console = global.console;

// allow user to initialize classes via [data-namespace] or .js-namespace class
// htmlInit( Widget, 'widgetName' )
// options are parsed from data-namespace-options
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    let dashedNamespace = utils.toDashed( namespace );
    let dataAttr = 'data-' + dashedNamespace;
    let dataAttrElems = document.querySelectorAll( `[${dataAttr}]` );
    let jQuery = global.jQuery;

    [ ...dataAttrElems ].forEach( ( elem ) => {
      let attr = elem.getAttribute( dataAttr );
      let options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( `Error parsing ${dataAttr} on ${elem.className}: ${error}` );
        }
        return;
      }
      // initialize
      let instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    } );

  } );
};

// -----  ----- //

return utils;

} ) );

},{}],125:[function(require,module,exports){
// button
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('./core'),
        require('fizzy-ui-utils'),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

// -------------------------- InfiniteScrollButton -------------------------- //

class InfiniteScrollButton {
  constructor( element, infScroll ) {
    this.element = element;
    this.infScroll = infScroll;
    // events
    this.clickHandler = this.onClick.bind( this );
    this.element.addEventListener( 'click', this.clickHandler );
    infScroll.on( 'request', this.disable.bind( this ) );
    infScroll.on( 'load', this.enable.bind( this ) );
    infScroll.on( 'error', this.hide.bind( this ) );
    infScroll.on( 'last', this.hide.bind( this ) );
  }

  onClick( event ) {
    event.preventDefault();
    this.infScroll.loadNextPage();
  }

  enable() {
    this.element.removeAttribute('disabled');
  }

  disable() {
    this.element.disabled = 'disabled';
  }

  hide() {
    this.element.style.display = 'none';
  }

  destroy() {
    this.element.removeEventListener( 'click', this.clickHandler );
  }

}

// -------------------------- InfiniteScroll methods -------------------------- //

// InfiniteScroll.defaults.button = null;

InfiniteScroll.create.button = function() {
  let buttonElem = utils.getQueryElement( this.options.button );
  if ( buttonElem ) {
    this.button = new InfiniteScrollButton( buttonElem, this );
  }
};

InfiniteScroll.destroy.button = function() {
  if ( this.button ) this.button.destroy();
};

// --------------------------  -------------------------- //

InfiniteScroll.Button = InfiniteScrollButton;

return InfiniteScroll;

} ) );

},{"./core":126,"fizzy-ui-utils":124}],126:[function(require,module,exports){
// core
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('ev-emitter'),
        require('fizzy-ui-utils'),
    );
  } else {
    // browser global
    window.InfiniteScroll = factory(
        window,
        window.EvEmitter,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, EvEmitter, utils ) {

let jQuery = window.jQuery;
// internal store of all InfiniteScroll intances
let instances = {};

function InfiniteScroll( element, options ) {
  let queryElem = utils.getQueryElement( element );

  if ( !queryElem ) {
    console.error( 'Bad element for InfiniteScroll: ' + ( queryElem || element ) );
    return;
  }
  element = queryElem;
  // do not initialize twice on same element
  if ( element.infiniteScrollGUID ) {
    let instance = instances[ element.infiniteScrollGUID ];
    instance.option( options );
    return instance;
  }

  this.element = element;
  // options
  this.options = { ...InfiniteScroll.defaults };
  this.option( options );
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  this.create();
}

// defaults
InfiniteScroll.defaults = {
  // path: null,
  // hideNav: null,
  // debug: false,
};

// create & destroy methods
InfiniteScroll.create = {};
InfiniteScroll.destroy = {};

let proto = InfiniteScroll.prototype;
// inherit EvEmitter
Object.assign( proto, EvEmitter.prototype );

// --------------------------  -------------------------- //

// globally unique identifiers
let GUID = 0;

proto.create = function() {
  // create core
  // add id for InfiniteScroll.data
  let id = this.guid = ++GUID;
  this.element.infiniteScrollGUID = id; // expando
  instances[ id ] = this; // associate via id
  // properties
  this.pageIndex = 1; // default to first page
  this.loadCount = 0;
  this.updateGetPath();
  // bail if getPath not set, or returns falsey #776
  let hasPath = this.getPath && this.getPath();
  if ( !hasPath ) {
    console.error('Disabling InfiniteScroll');
    return;
  }
  this.updateGetAbsolutePath();
  this.log( 'initialized', [ this.element.className ] );
  this.callOnInit();
  // create features
  for ( let method in InfiniteScroll.create ) {
    InfiniteScroll.create[ method ].call( this );
  }
};

proto.option = function( opts ) {
  Object.assign( this.options, opts );
};

// call onInit option, used for binding events on init
proto.callOnInit = function() {
  let onInit = this.options.onInit;
  if ( onInit ) {
    onInit.call( this, this );
  }
};

// ----- events ----- //

proto.dispatchEvent = function( type, event, args ) {
  this.log( type, args );
  let emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );
  // trigger jQuery event
  if ( !jQuery || !this.$element ) {
    return;
  }
  // namespace jQuery event
  type += '.infiniteScroll';
  let $event = type;
  if ( event ) {
    // create jQuery event
    /* eslint-disable-next-line new-cap */
    let jQEvent = jQuery.Event( event );
    jQEvent.type = type;
    $event = jQEvent;
  }
  this.$element.trigger( $event, args );
};

let loggers = {
  initialized: ( className ) => `on ${className}`,
  request: ( path ) => `URL: ${path}`,
  load: ( response, path ) => `${response.title || ''}. URL: ${path}`,
  error: ( error, path ) => `${error}. URL: ${path}`,
  append: ( response, path, items ) => `${items.length} items. URL: ${path}`,
  last: ( response, path ) => `URL: ${path}`,
  history: ( title, path ) => `URL: ${path}`,
  pageIndex: function( index, origin ) {
    return `current page determined to be: ${index} from ${origin}`;
  },
};

// log events
proto.log = function( type, args ) {
  if ( !this.options.debug ) return;

  let message = `[InfiniteScroll] ${type}`;
  let logger = loggers[ type ];
  if ( logger ) message += '. ' + logger.apply( this, args );
  console.log( message );
};

// -------------------------- methods used amoung features -------------------------- //

proto.updateMeasurements = function() {
  this.windowHeight = window.innerHeight;
  let rect = this.element.getBoundingClientRect();
  this.top = rect.top + window.scrollY;
};

proto.updateScroller = function() {
  let elementScroll = this.options.elementScroll;
  if ( !elementScroll ) {
    // default, use window
    this.scroller = window;
    return;
  }
  // if true, set to element, otherwise use option
  this.scroller = elementScroll === true ? this.element :
    utils.getQueryElement( elementScroll );
  if ( !this.scroller ) {
    throw new Error(`Unable to find elementScroll: ${elementScroll}`);
  }
};

// -------------------------- page path -------------------------- //

proto.updateGetPath = function() {
  let optPath = this.options.path;
  if ( !optPath ) {
    console.error(`InfiniteScroll path option required. Set as: ${optPath}`);
    return;
  }
  // function
  let type = typeof optPath;
  if ( type == 'function' ) {
    this.getPath = optPath;
    return;
  }
  // template string: '/pages/{{#}}.html'
  let templateMatch = type == 'string' && optPath.match('{{#}}');
  if ( templateMatch ) {
    this.updateGetPathTemplate( optPath );
    return;
  }
  // selector: '.next-page-selector'
  this.updateGetPathSelector( optPath );
};

proto.updateGetPathTemplate = function( optPath ) {
  // set getPath with template string
  this.getPath = () => {
    let nextIndex = this.pageIndex + 1;
    return optPath.replace( '{{#}}', nextIndex );
  };
  // get pageIndex from location
  // convert path option into regex to look for pattern in location
  // escape query (?) in url, allows for parsing GET parameters
  let regexString = optPath
    .replace( /(\\\?|\?)/, '\\?' )
    .replace( '{{#}}', '(\\d\\d?\\d?)' );
  let templateRe = new RegExp( regexString );
  let match = location.href.match( templateRe );

  if ( match ) {
    this.pageIndex = parseInt( match[1], 10 );
    this.log( 'pageIndex', [ this.pageIndex, 'template string' ] );
  }
};

let pathRegexes = [
  // WordPress & Tumblr - example.com/page/2
  // Jekyll - example.com/page2
  /^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/,
  // Drupal - example.com/?page=1
  /^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/,
  // catch all, last occurence of a number
  /(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/,
];

// try matching href to pathRegexes patterns
let getPathParts = InfiniteScroll.getPathParts = function( href ) {
  if ( !href ) return;
  for ( let regex of pathRegexes ) {
    let match = href.match( regex );
    if ( match ) {
      let [ , begin, index, end ] = match;
      return { begin, index, end };
    }
  }
};

proto.updateGetPathSelector = function( optPath ) {
  // parse href of link: '.next-page-link'
  let hrefElem = document.querySelector( optPath );
  if ( !hrefElem ) {
    console.error(`Bad InfiniteScroll path option. Next link not found: ${optPath}`);
    return;
  }

  let href = hrefElem.getAttribute('href');
  let pathParts = getPathParts( href );
  if ( !pathParts ) {
    console.error(`InfiniteScroll unable to parse next link href: ${href}`);
    return;
  }

  let { begin, index, end } = pathParts;
  this.isPathSelector = true; // flag for checkLastPage()
  this.getPath = () => begin + ( this.pageIndex + 1 ) + end;
  // get pageIndex from href
  this.pageIndex = parseInt( index, 10 ) - 1;
  this.log( 'pageIndex', [ this.pageIndex, 'next link' ] );
};

proto.updateGetAbsolutePath = function() {
  let path = this.getPath();
  // path doesn't start with http or /
  let isAbsolute = path.match( /^http/ ) || path.match( /^\// );
  if ( isAbsolute ) {
    this.getAbsolutePath = this.getPath;
    return;
  }

  let { pathname } = location;
  // query parameter #829. example.com/?pg=2
  let isQuery = path.match( /^\?/ );
  // /foo/bar/index.html => /foo/bar
  let directory = pathname.substring( 0, pathname.lastIndexOf('/') );
  let pathStart = isQuery ? pathname : directory + '/';

  this.getAbsolutePath = () => pathStart + this.getPath();
};

// -------------------------- nav -------------------------- //

// hide navigation
InfiniteScroll.create.hideNav = function() {
  let nav = utils.getQueryElement( this.options.hideNav );
  if ( !nav ) return;

  nav.style.display = 'none';
  this.nav = nav;
};

InfiniteScroll.destroy.hideNav = function() {
  if ( this.nav ) this.nav.style.display = '';
};

// -------------------------- destroy -------------------------- //

proto.destroy = function() {
  this.allOff(); // remove all event listeners
  // call destroy methods
  for ( let method in InfiniteScroll.destroy ) {
    InfiniteScroll.destroy[ method ].call( this );
  }

  delete this.element.infiniteScrollGUID;
  delete instances[ this.guid ];
  // remove jQuery data. #807
  if ( jQuery && this.$element ) {
    jQuery.removeData( this.element, 'infiniteScroll' );
  }
};

// -------------------------- utilities -------------------------- //

// https://remysharp.com/2010/07/21/throttling-function-calls
InfiniteScroll.throttle = function( fn, threshold ) {
  threshold = threshold || 200;
  let last, timeout;

  return function() {
    let now = +new Date();
    let args = arguments;
    let trigger = () => {
      last = now;
      fn.apply( this, args );
    };
    if ( last && now < last + threshold ) {
      // hold on to it
      clearTimeout( timeout );
      timeout = setTimeout( trigger, threshold );
    } else {
      trigger();
    }
  };
};

InfiniteScroll.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  let id = elem && elem.infiniteScrollGUID;
  return id && instances[ id ];
};

// set internal jQuery, for Webpack + jQuery v3
InfiniteScroll.setJQuery = function( jqry ) {
  jQuery = jqry;
};

// -------------------------- setup -------------------------- //

utils.htmlInit( InfiniteScroll, 'infinite-scroll' );

// add noop _init method for jQuery Bridget. #768
proto._init = function() {};

let { jQueryBridget } = window;
if ( jQuery && jQueryBridget ) {
  jQueryBridget( 'infiniteScroll', InfiniteScroll, jQuery );
}

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );

},{"ev-emitter":123,"fizzy-ui-utils":124}],127:[function(require,module,exports){
// history
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('./core'),
        require('fizzy-ui-utils'),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

let proto = InfiniteScroll.prototype;

Object.assign( InfiniteScroll.defaults, {
  history: 'replace',
  // historyTitle: false,
} );

let link = document.createElement('a');

// ----- create/destroy ----- //

InfiniteScroll.create.history = function() {
  if ( !this.options.history ) return;

  // check for same origin
  link.href = this.getAbsolutePath();
  // MS Edge does not have origin on link
  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12236493/
  let linkOrigin = link.origin || link.protocol + '//' + link.host;
  let isSameOrigin = linkOrigin == location.origin;
  if ( !isSameOrigin ) {
    console.error( '[InfiniteScroll] cannot set history with different origin: ' +
      `${link.origin} on ${location.origin} . History behavior disabled.` );
    return;
  }

  // two ways to handle changing history
  if ( this.options.append ) {
    this.createHistoryAppend();
  } else {
    this.createHistoryPageLoad();
  }
};

proto.createHistoryAppend = function() {
  this.updateMeasurements();
  this.updateScroller();
  // array of scroll positions of appended pages
  this.scrollPages = [
    // first page
    {
      top: 0,
      path: location.href,
      title: document.title,
    },
  ];
  this.scrollPage = this.scrollPages[0];
  // events
  this.scrollHistoryHandler = this.onScrollHistory.bind( this );
  this.unloadHandler = this.onUnload.bind( this );
  this.scroller.addEventListener( 'scroll', this.scrollHistoryHandler );
  this.on( 'append', this.onAppendHistory );
  this.bindHistoryAppendEvents( true );
};

proto.bindHistoryAppendEvents = function( isBind ) {
  let addRemove = isBind ? 'addEventListener' : 'removeEventListener';
  this.scroller[ addRemove ]( 'scroll', this.scrollHistoryHandler );
  window[ addRemove ]( 'unload', this.unloadHandler );
};

proto.createHistoryPageLoad = function() {
  this.on( 'load', this.onPageLoadHistory );
};

InfiniteScroll.destroy.history =
proto.destroyHistory = function() {
  let isHistoryAppend = this.options.history && this.options.append;
  if ( isHistoryAppend ) {
    this.bindHistoryAppendEvents( false );
  }
};

// ----- append history ----- //

proto.onAppendHistory = function( response, path, items ) {
  // do not proceed if no items. #779
  if ( !items || !items.length ) return;

  let firstItem = items[0];
  let elemScrollY = this.getElementScrollY( firstItem );
  // resolve path
  link.href = path;
  // add page data to hash
  this.scrollPages.push({
    top: elemScrollY,
    path: link.href,
    title: response.title,
  });
};

proto.getElementScrollY = function( elem ) {
  if ( this.options.elementScroll ) {
    return elem.offsetTop - this.top;
  } else {
    let rect = elem.getBoundingClientRect();
    return rect.top + window.scrollY;
  }
};

proto.onScrollHistory = function() {
  // cycle through positions, find biggest without going over
  let scrollPage = this.getClosestScrollPage();
  // set history if changed
  if ( scrollPage != this.scrollPage ) {
    this.scrollPage = scrollPage;
    this.setHistory( scrollPage.title, scrollPage.path );
  }
};

utils.debounceMethod( InfiniteScroll, 'onScrollHistory', 150 );

proto.getClosestScrollPage = function() {
  let scrollViewY;
  if ( this.options.elementScroll ) {
    scrollViewY = this.scroller.scrollTop + this.scroller.clientHeight / 2;
  } else {
    scrollViewY = window.scrollY + this.windowHeight / 2;
  }

  let scrollPage;
  for ( let page of this.scrollPages ) {
    if ( page.top >= scrollViewY ) break;

    scrollPage = page;
  }
  return scrollPage;
};

proto.setHistory = function( title, path ) {
  let optHistory = this.options.history;
  let historyMethod = optHistory && history[ optHistory + 'State' ];
  if ( !historyMethod ) return;

  history[ optHistory + 'State' ]( null, title, path );
  if ( this.options.historyTitle ) document.title = title;
  this.dispatchEvent( 'history', null, [ title, path ] );
};

// scroll to top to prevent initial scroll-reset after page refresh
// https://stackoverflow.com/a/18633915/182183
proto.onUnload = function() {
  if ( this.scrollPage.top === 0 ) return;

  // calculate where scroll position would be on refresh
  let scrollY = window.scrollY - this.scrollPage.top + this.top;
  // disable scroll event before setting scroll #679
  this.destroyHistory();
  scrollTo( 0, scrollY );
};

// ----- load history ----- //

// update URL
proto.onPageLoadHistory = function( response, path ) {
  this.setHistory( response.title, path );
};

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );

},{"./core":126,"fizzy-ui-utils":124}],128:[function(require,module,exports){
/*!
 * Infinite Scroll v4.0.1
 * Automatically add next page
 *
 * Licensed GPLv3 for open source use
 * or Infinite Scroll Commercial License for commercial use
 *
 * https://infinite-scroll.com
 * Copyright 2018-2020 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        require('./core'),
        require('./page-load'),
        require('./scroll-watch'),
        require('./history'),
        require('./button'),
        require('./status'),
    );
  }

} )( window, function factory( InfiniteScroll ) {
  return InfiniteScroll;
} );

},{"./button":125,"./core":126,"./history":127,"./page-load":129,"./scroll-watch":130,"./status":131}],129:[function(require,module,exports){
// page-load
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('./core'),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
    );
  }

}( window, function factory( window, InfiniteScroll ) {

let proto = InfiniteScroll.prototype;

Object.assign( InfiniteScroll.defaults, {
  // append: false,
  loadOnScroll: true,
  checkLastPage: true,
  responseBody: 'text',
  domParseResponse: true,
  // prefill: false,
  // outlayer: null,
} );

InfiniteScroll.create.pageLoad = function() {
  this.canLoad = true;
  this.on( 'scrollThreshold', this.onScrollThresholdLoad );
  this.on( 'load', this.checkLastPage );
  if ( this.options.outlayer ) {
    this.on( 'append', this.onAppendOutlayer );
  }
};

proto.onScrollThresholdLoad = function() {
  if ( this.options.loadOnScroll ) this.loadNextPage();
};

let domParser = new DOMParser();

proto.loadNextPage = function() {
  if ( this.isLoading || !this.canLoad ) return;

  let { responseBody, domParseResponse, fetchOptions } = this.options;
  let path = this.getAbsolutePath();
  this.isLoading = true;
  if ( typeof fetchOptions == 'function' ) fetchOptions = fetchOptions();

  let fetchPromise = fetch( path, fetchOptions )
    .then( ( response ) => {
      if ( !response.ok ) {
        let error = new Error( response.statusText );
        this.onPageError( error, path, response );
        return { response };
      }

      return response[ responseBody ]().then( ( body ) => {
        let canDomParse = responseBody == 'text' && domParseResponse;
        if ( canDomParse ) {
          body = domParser.parseFromString( body, 'text/html' );
        }
        if ( response.status == 204 ) {
          this.lastPageReached( body, path );
          return { body, response };
        } else {
          return this.onPageLoad( body, path, response );
        }
      } );
    } )
    .catch( ( error ) => {
      this.onPageError( error, path );
    } );

  this.dispatchEvent( 'request', null, [ path, fetchPromise ] );

  return fetchPromise;
};

proto.onPageLoad = function( body, path, response ) {
  // done loading if not appending
  if ( !this.options.append ) {
    this.isLoading = false;
  }
  this.pageIndex++;
  this.loadCount++;
  this.dispatchEvent( 'load', null, [ body, path, response ] );
  return this.appendNextPage( body, path, response );
};

proto.appendNextPage = function( body, path, response ) {
  let { append, responseBody, domParseResponse } = this.options;
  // do not append json
  let isDocument = responseBody == 'text' && domParseResponse;
  if ( !isDocument || !append ) return { body, response };

  let items = body.querySelectorAll( append );
  let promiseValue = { body, response, items };
  // last page hit if no items. #840
  if ( !items || !items.length ) {
    this.lastPageReached( body, path );
    return promiseValue;
  }

  let fragment = getItemsFragment( items );
  let appendReady = () => {
    this.appendItems( items, fragment );
    this.isLoading = false;
    this.dispatchEvent( 'append', null, [ body, path, items, response ] );
    return promiseValue;
  };

  // TODO add hook for option to trigger appendReady
  if ( this.options.outlayer ) {
    return this.appendOutlayerItems( fragment, appendReady );
  } else {
    return appendReady();
  }
};

proto.appendItems = function( items, fragment ) {
  if ( !items || !items.length ) return;

  // get fragment if not provided
  fragment = fragment || getItemsFragment( items );
  refreshScripts( fragment );
  this.element.appendChild( fragment );
};

function getItemsFragment( items ) {
  // add items to fragment
  let fragment = document.createDocumentFragment();
  if ( items ) fragment.append( ...items );
  return fragment;
}

// replace <script>s with copies so they load
// <script>s added by InfiniteScroll will not load
// similar to https://stackoverflow.com/questions/610995
function refreshScripts( fragment ) {
  let scripts = fragment.querySelectorAll('script');
  for ( let script of scripts ) {
    let freshScript = document.createElement('script');
    // copy attributes
    let attrs = script.attributes;
    for ( let attr of attrs ) {
      freshScript.setAttribute( attr.name, attr.value );
    }
    // copy inner script code. #718, #782
    freshScript.innerHTML = script.innerHTML;
    script.parentNode.replaceChild( freshScript, script );
  }
}

// ----- outlayer ----- //

proto.appendOutlayerItems = function( fragment, appendReady ) {
  let imagesLoaded = InfiniteScroll.imagesLoaded || window.imagesLoaded;
  if ( !imagesLoaded ) {
    console.error('[InfiniteScroll] imagesLoaded required for outlayer option');
    this.isLoading = false;
    return;
  }
  // append once images loaded
  return new Promise( function( resolve ) {
    imagesLoaded( fragment, function() {
      let bodyResponse = appendReady();
      resolve( bodyResponse );
    } );
  } );
};

proto.onAppendOutlayer = function( response, path, items ) {
  this.options.outlayer.appended( items );
};

// ----- checkLastPage ----- //

// check response for next element
proto.checkLastPage = function( body, path ) {
  let { checkLastPage, path: pathOpt } = this.options;
  if ( !checkLastPage ) return;

  // if path is function, check if next path is truthy
  if ( typeof pathOpt == 'function' ) {
    let nextPath = this.getPath();
    if ( !nextPath ) {
      this.lastPageReached( body, path );
      return;
    }
  }
  // get selector from checkLastPage or path option
  let selector;
  if ( typeof checkLastPage == 'string' ) {
    selector = checkLastPage;
  } else if ( this.isPathSelector ) {
    // path option is selector string
    selector = pathOpt;
  }
  // check last page for selector
  // bail if no selector or not document response
  if ( !selector || !body.querySelector ) return;

  // check if response has selector
  let nextElem = body.querySelector( selector );
  if ( !nextElem ) this.lastPageReached( body, path );
};

proto.lastPageReached = function( body, path ) {
  this.canLoad = false;
  this.dispatchEvent( 'last', null, [ body, path ] );
};

// ----- error ----- //

proto.onPageError = function( error, path, response ) {
  this.isLoading = false;
  this.canLoad = false;
  this.dispatchEvent( 'error', null, [ error, path, response ] );
  return error;
};

// -------------------------- prefill -------------------------- //

InfiniteScroll.create.prefill = function() {
  if ( !this.options.prefill ) return;

  let append = this.options.append;
  if ( !append ) {
    console.error(`append option required for prefill. Set as :${append}`);
    return;
  }
  this.updateMeasurements();
  this.updateScroller();
  this.isPrefilling = true;
  this.on( 'append', this.prefill );
  this.once( 'error', this.stopPrefill );
  this.once( 'last', this.stopPrefill );
  this.prefill();
};

proto.prefill = function() {
  let distance = this.getPrefillDistance();
  this.isPrefilling = distance >= 0;
  if ( this.isPrefilling ) {
    this.log('prefill');
    this.loadNextPage();
  } else {
    this.stopPrefill();
  }
};

proto.getPrefillDistance = function() {
  // element scroll
  if ( this.options.elementScroll ) {
    return this.scroller.clientHeight - this.scroller.scrollHeight;
  }
  // window
  return this.windowHeight - this.element.clientHeight;
};

proto.stopPrefill = function() {
  this.log('stopPrefill');
  this.off( 'append', this.prefill );
};

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );

},{"./core":126}],130:[function(require,module,exports){
// scroll-watch
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('./core'),
        require('fizzy-ui-utils'),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

let proto = InfiniteScroll.prototype;

// default options
Object.assign( InfiniteScroll.defaults, {
  scrollThreshold: 400,
  // elementScroll: null,
} );

InfiniteScroll.create.scrollWatch = function() {
  // events
  this.pageScrollHandler = this.onPageScroll.bind( this );
  this.resizeHandler = this.onResize.bind( this );

  let scrollThreshold = this.options.scrollThreshold;
  let isEnable = scrollThreshold || scrollThreshold === 0;
  if ( isEnable ) this.enableScrollWatch();
};

InfiniteScroll.destroy.scrollWatch = function() {
  this.disableScrollWatch();
};

proto.enableScrollWatch = function() {
  if ( this.isScrollWatching ) return;

  this.isScrollWatching = true;
  this.updateMeasurements();
  this.updateScroller();
  // TODO disable after error?
  this.on( 'last', this.disableScrollWatch );
  this.bindScrollWatchEvents( true );
};

proto.disableScrollWatch = function() {
  if ( !this.isScrollWatching ) return;

  this.bindScrollWatchEvents( false );
  delete this.isScrollWatching;
};

proto.bindScrollWatchEvents = function( isBind ) {
  let addRemove = isBind ? 'addEventListener' : 'removeEventListener';
  this.scroller[ addRemove ]( 'scroll', this.pageScrollHandler );
  window[ addRemove ]( 'resize', this.resizeHandler );
};

proto.onPageScroll = InfiniteScroll.throttle( function() {
  let distance = this.getBottomDistance();
  if ( distance <= this.options.scrollThreshold ) {
    this.dispatchEvent('scrollThreshold');
  }
} );

proto.getBottomDistance = function() {
  let bottom, scrollY;
  if ( this.options.elementScroll ) {
    bottom = this.scroller.scrollHeight;
    scrollY = this.scroller.scrollTop + this.scroller.clientHeight;
  } else {
    bottom = this.top + this.element.clientHeight;
    scrollY = window.scrollY + this.windowHeight;
  }
  return bottom - scrollY;
};

proto.onResize = function() {
  this.updateMeasurements();
};

utils.debounceMethod( InfiniteScroll, 'onResize', 150 );

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );

},{"./core":126,"fizzy-ui-utils":124}],131:[function(require,module,exports){
// status
( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        require('./core'),
        require('fizzy-ui-utils'),
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

let proto = InfiniteScroll.prototype;

// InfiniteScroll.defaults.status = null;

InfiniteScroll.create.status = function() {
  let statusElem = utils.getQueryElement( this.options.status );
  if ( !statusElem ) return;

  // elements
  this.statusElement = statusElem;
  this.statusEventElements = {
    request: statusElem.querySelector('.infinite-scroll-request'),
    error: statusElem.querySelector('.infinite-scroll-error'),
    last: statusElem.querySelector('.infinite-scroll-last'),
  };
  // events
  this.on( 'request', this.showRequestStatus );
  this.on( 'error', this.showErrorStatus );
  this.on( 'last', this.showLastStatus );
  this.bindHideStatus('on');
};

proto.bindHideStatus = function( bindMethod ) {
  let hideEvent = this.options.append ? 'append' : 'load';
  this[ bindMethod ]( hideEvent, this.hideAllStatus );
};

proto.showRequestStatus = function() {
  this.showStatus('request');
};

proto.showErrorStatus = function() {
  this.showStatus('error');
};

proto.showLastStatus = function() {
  this.showStatus('last');
  // prevent last then append event race condition from showing last status #706
  this.bindHideStatus('off');
};

proto.showStatus = function( eventName ) {
  show( this.statusElement );
  this.hideStatusEventElements();
  let eventElem = this.statusEventElements[ eventName ];
  show( eventElem );
};

proto.hideAllStatus = function() {
  hide( this.statusElement );
  this.hideStatusEventElements();
};

proto.hideStatusEventElements = function() {
  for ( let type in this.statusEventElements ) {
    let eventElem = this.statusEventElements[ type ];
    hide( eventElem );
  }
};

// --------------------------  -------------------------- //

function hide( elem ) {
  setDisplay( elem, 'none' );
}

function show( elem ) {
  setDisplay( elem, 'block' );
}

function setDisplay( elem, value ) {
  if ( elem ) {
    elem.style.display = value;
  }
}

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );

},{"./core":126,"fizzy-ui-utils":124}],132:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('./util');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResponsiveAutoHeight = function () {
  function ResponsiveAutoHeight(selector, options) {
    var _this = this;

    _classCallCheck(this, ResponsiveAutoHeight);

    this.selector = selector;
    this.elements = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
    this.options = options;
    window.addEventListener('resize', function () {
      _this.run();
    });
    this.run();
  }

  _createClass(ResponsiveAutoHeight, [{
    key: 'recalc',
    value: function recalc() {
      this.elements = document.querySelectorAll(this.selector);
      this.run();
    }
  }, {
    key: 'makeGroups',
    value: function makeGroups(elements) {
      var group = [];
      [].forEach.call(elements, function (element) {
        element.style.height = '1px';
        element.style.overflow = 'hidden';
      });
      var idx = 0;
      var height = (0, _util.getOffset)(elements[0]).top;
      group[0] = [];
      [].forEach.call(elements, function (element) {
        if ((0, _util.getOffset)(element).top !== height) {
          height = (0, _util.getOffset)(element).top;
          idx += 1;
          group[idx] = [];
        }
        group[idx].push(element);
      });
      [].forEach.call(elements, function (element) {
        element.style.height = '';
        element.style.overflow = '';
      });
      return group;
    }
  }, {
    key: 'autoHeight',
    value: function autoHeight(group) {
      var heights = group.map(function (element) {
        var computedStyle = getComputedStyle(element);
        var boxSizing = computedStyle.boxSizing;
        if (boxSizing === 'border-box') {
          return element.offsetHeight;
        }
        return element.offsetHeight - parseFloat(computedStyle.paddingTop) - parseFloat(computedStyle.paddingBottom);
      });
      var maxHeight = Math.max.apply(Math, _toConsumableArray(heights));
      group.forEach(function (element) {
        element.style.height = maxHeight + 'px';
      });
    }
  }, {
    key: 'run',
    value: function run() {
      var _this2 = this;

      var elements = this.elements;

      var groups = this.makeGroups(elements);
      groups.forEach(function (group) {
        _this2.autoHeight(group);
      });
    }
  }]);

  return ResponsiveAutoHeight;
}();

exports.default = ResponsiveAutoHeight;
module.exports = exports['default'];
},{"./util":133}],133:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getScrollTop = function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};

var getScrollLeft = function getScrollLeft() {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};

var getOffset = exports.getOffset = function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    top: rect.top + getScrollTop(),
    left: rect.left + getScrollLeft()
  };
};
},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2NvbnN0YW50cy5qcyIsImFzc2V0cy9zcmMvanMvaW5kZXguanMiLCJhc3NldHMvc3JjL2pzL2xpYi9lbGVtZW50LmpzIiwiYXNzZXRzL3NyYy9qcy9saWIvdXRpbHMuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvYmxvZy1tYXNvbnJ5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2VxdWFsLWhlaWdodC1lbGVtZW50cy5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9mb290ZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL2hlYWRlci92ZXJ0aWNhbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21lbnUvZnVsbC1zY3JlZW4uanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvbWVudS9tZWdhLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL21vYmlsZS1tZW51L2Ryb3AtZG93bi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9mdWxsLXNjcmVlbi5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9tb2JpbGUtbWVudS9zaWRlYmFyLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL293LWluZmluaXRlLXNjcm9sbC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1saWdodGJveC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9vdy1zbGlkZXIuanMiLCJhc3NldHMvc3JjL2pzL3RoZW1lL2NvbXBvbmVudHMvc2Nyb2xsLWVmZmVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zY3JvbGwtdG9wLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvYmFzZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvZHJvcC1kb3duLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9oZWFkZXItcmVwbGFjZS5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvY29tcG9uZW50cy9zZWFyY2gvbW9iaWxlLXNlYXJjaC1pY29uLmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlYXJjaC9vdmVybGF5LmpzIiwiYXNzZXRzL3NyYy9qcy90aGVtZS9jb21wb25lbnRzL3NlbGVjdC5qcyIsImFzc2V0cy9zcmMvanMvdGhlbWUvdGhlbWUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzUHJpdmF0ZUZpZWxkR2V0LmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NQcml2YXRlRmllbGRTZXQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvZGVsZWdhdGUvc3JjL2Nsb3Nlc3QuanMiLCJub2RlX21vZHVsZXMvZGVsZWdhdGUvc3JjL2RlbGVnYXRlLmpzIiwibm9kZV9tb2R1bGVzL2V2LWVtaXR0ZXIvZXYtZW1pdHRlci5qcyIsIm5vZGVfbW9kdWxlcy9maXp6eS11aS11dGlscy91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvYnV0dG9uLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9oaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pbmZpbml0ZS1zY3JvbGwvanMvcGFnZS1sb2FkLmpzIiwibm9kZV9tb2R1bGVzL2luZmluaXRlLXNjcm9sbC9qcy9zY3JvbGwtd2F0Y2guanMiLCJub2RlX21vZHVsZXMvaW5maW5pdGUtc2Nyb2xsL2pzL3N0YXR1cy5qcyIsIm5vZGVfbW9kdWxlcy9yZXNwb25zaXZlLWF1dG8taGVpZ2h0L2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZXNwb25zaXZlLWF1dG8taGVpZ2h0L2xpYi91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQU8sSUFBTSxPQUFPLEdBQUcsZUFBaEI7O0FBRUEsSUFBTSxHQUFHLEdBQUc7QUFDZixFQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixNQUF2QixDQURTO0FBRWYsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBRkE7QUFHZixFQUFBLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixhQUF2QixDQUhHO0FBSWYsRUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FKUztBQUtmLEVBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLENBTFM7QUFNZixFQUFBLFVBQVUsRUFBRSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsT0FBTyxDQUFDLGFBQWxDLENBTkc7QUFPZixFQUFBLFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixtQkFBdkIsQ0FQRTtBQVFmLEVBQUEsTUFBTSxFQUFFO0FBQ0osSUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FERjtBQUVKLElBQUEsUUFBUSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGlEQUF2QixDQUZOO0FBR0osSUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaUNBQXZCLENBSFI7QUFJSixJQUFBLE1BQU0sRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixVQUF2QixDQUpKO0FBS0osSUFBQSxhQUFhLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FMWDtBQU1KLElBQUEsV0FBVyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLDJDQUF2QixDQU5UO0FBT0osSUFBQSxZQUFZLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsNENBQXZCO0FBUFYsR0FSTztBQWlCZixFQUFBLElBQUksRUFBRTtBQUNGLElBQUEsR0FBRyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLDhDQUF2QixDQURIO0FBRUYsSUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FGSjtBQUdGLElBQUEsVUFBVSxFQUFFO0FBQ1IsTUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsbURBQXZCLENBREU7QUFFUixNQUFBLGFBQWEsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QiwyQ0FBdkIsQ0FGUDtBQUdSLE1BQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGlDQUF2QjtBQUhFLEtBSFY7QUFRRixJQUFBLElBQUksRUFBRTtBQUNGLE1BQUEsU0FBUyxFQUFFLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQix5Q0FBMUIsQ0FEVDtBQUVGLE1BQUEsZUFBZSxFQUFFLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixxQ0FBMUIsQ0FGZjtBQUdGLE1BQUEsWUFBWSxFQUFFLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQiw4Q0FBMUI7QUFIWixLQVJKO0FBYUYsSUFBQSxRQUFRLEVBQUU7QUFDTixNQUFBLGFBQWEsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixtQkFBdkI7QUFEVDtBQWJSLEdBakJTO0FBa0NmLEVBQUEsVUFBVSxFQUFFO0FBQ1IsSUFBQSxHQUFHLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsd0JBQXZCLENBREc7QUFFUixJQUFBLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixrQkFBdkIsQ0FGSjtBQUdSLElBQUEsYUFBYSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBSFA7QUFJUixJQUFBLFlBQVksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QiwyQkFBdkIsQ0FKTjtBQUtSLElBQUEsb0JBQW9CLEVBQUUsUUFBUSxDQUFDLGdCQUFULENBQTBCLDBDQUExQixDQUxkO0FBTVIsSUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsb0JBQXZCO0FBTkosR0FsQ0c7QUEwQ2YsRUFBQSxNQUFNLEVBQUU7QUFDSixJQUFBLEtBQUssRUFBRSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsd0JBQTFCLENBREg7QUFFSixJQUFBLFFBQVEsRUFBRTtBQUNOLE1BQUEsZUFBZSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLDBCQUF2QixDQURYO0FBRU4sTUFBQSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsc0JBQXZCO0FBRkEsS0FGTjtBQU1KLElBQUEsYUFBYSxFQUFFO0FBQ1gsTUFBQSxlQUFlLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0NBQXZCLENBRE47QUFFWCxNQUFBLFFBQVEsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixrQ0FBdkIsQ0FGQztBQUdYLE1BQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLDRCQUF2QjtBQUhLLEtBTlg7QUFXSixJQUFBLE9BQU8sRUFBRTtBQUNMLE1BQUEsZUFBZSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLHlCQUF2QixDQURaO0FBRUwsTUFBQSxRQUFRLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsNENBQXZCLENBRkw7QUFHTCxNQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixxQkFBdkI7QUFIRDtBQVhMLEdBMUNPO0FBMkRmLEVBQUEsTUFBTSxFQUFFO0FBQ0osSUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FEUjtBQUVKLElBQUEsYUFBYSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLHNCQUF2QixDQUZYO0FBR0osSUFBQSxTQUFTLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FIUDtBQUlKLElBQUEsUUFBUSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGtCQUF2QjtBQUpOLEdBM0RPO0FBaUVmLEVBQUEsTUFBTSxFQUFFO0FBQ0osSUFBQSxTQUFTLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FEUDtBQUVKLElBQUEsS0FBSyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1CQUF2QixDQUZIO0FBR0osSUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsOEJBQXZCLENBSFI7QUFJSixJQUFBLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLHNCQUF2QixDQUpmO0FBS0osSUFBQSxxQkFBcUIsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1Qix1QkFBdkI7QUFMbkIsR0FqRU87QUF3RWYsRUFBQSxJQUFJLEVBQUU7QUFDRixJQUFBLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsb0JBQTFCO0FBRFosR0F4RVM7QUEyRWYsRUFBQSxHQUFHLEVBQUU7QUFDRCxJQUFBLEtBQUssRUFBRSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBRE47QUFFRCxJQUFBLFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixtQkFBdkIsQ0FGWjtBQUdELElBQUEsV0FBVyxFQUFFLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQiw0QkFBMUIsQ0FIWjtBQUlELElBQUEsY0FBYyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBSmY7QUFLRCxJQUFBLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGlCQUF2QjtBQUxqQixHQTNFVTtBQWtGZixFQUFBLEdBQUcsRUFBRTtBQUNELElBQUEsZUFBZSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1CQUF2QixDQURoQjtBQUVELElBQUEsT0FBTyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLDBCQUF2QixDQUZSO0FBR0QsSUFBQSxXQUFXLEVBQUUsUUFBUSxDQUFDLGdCQUFULENBQTBCLDBCQUExQixDQUhaO0FBSUQsSUFBQSxVQUFVLEVBQUUsUUFBUSxDQUFDLGdCQUFULENBQTBCLHVDQUExQixDQUpYO0FBS0QsSUFBQSxjQUFjLEVBQUUsUUFBUSxDQUFDLGdCQUFULENBQTBCLDZCQUExQixDQUxmO0FBTUQsSUFBQSxvQkFBb0IsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FOckI7QUFPRCxJQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixrQ0FBdkIsQ0FQTDtBQVFELElBQUEsSUFBSSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGtDQUF2QixDQVJMO0FBU0QsSUFBQSxXQUFXLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsNENBQXZCLENBVFo7QUFVRCxJQUFBLFlBQVksRUFBRSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsZ0NBQTFCLENBVmI7QUFXRCxJQUFBLHlCQUF5QixFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1EQUF2QixDQVgxQjtBQVlELElBQUEsUUFBUSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLHdCQUF2QixDQVpUO0FBYUQsSUFBQSxZQUFZLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsMkJBQXZCLENBYmI7QUFjRCxJQUFBLGFBQWEsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixpQkFBdkIsQ0FkZDtBQWVELElBQUEsY0FBYyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGtCQUF2QixDQWZmO0FBZ0JELElBQUEsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsd0JBQXZCLENBaEJqQjtBQWlCRCxJQUFBLHNCQUFzQixFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLDJCQUF2QixDQWpCdkI7QUFrQkQsSUFBQSx1QkFBdUIsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1Qiw0QkFBdkIsQ0FsQnhCO0FBbUJELElBQUEsV0FBVyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLENBbkJaO0FBb0JELElBQUEsb0JBQW9CLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIseUJBQXZCLENBcEJyQjtBQXFCRCxJQUFBLFVBQVUsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQXJCWDtBQXNCRCxJQUFBLFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixlQUF2QixDQXRCWjtBQXVCRCxJQUFBLFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixtQkFBdkIsQ0F2Qlo7QUF3QkQsSUFBQSxtQkFBbUIsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixvQkFBdkIsQ0F4QnBCO0FBeUJELElBQUEsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaUJBQXZCLENBekJwQjtBQTBCRCxJQUFBLGNBQWMsRUFBRSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsb0NBQTFCLENBMUJmO0FBMkJELElBQUEsU0FBUyxFQUFFO0FBQ1AsTUFBQSxLQUFLLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FEQTtBQUVQLE1BQUEsT0FBTyxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLGlCQUF2QjtBQUZGO0FBM0JWO0FBbEZVLENBQVo7O0FBb0hBLElBQU0sU0FBUyxHQUFHLEVBQWxCOzs7Ozs7Ozs7Ozs7QUN0SFA7O0FBQ0E7O0lBRU0sTzs7OztrREFDTSxZQUFNO0FBQ1YsSUFBQSxLQUFJLENBQUMsS0FBTCxHQUFhLElBQUksaUJBQUosRUFBYjtBQUNILEc7OztBQUdKLFlBQUQ7QUFFQSxNQUFNLENBQUMsT0FBUCxHQUFpQixJQUFJLE9BQUosRUFBakI7QUFDQSxPQUFPLENBQUMsS0FBUjs7Ozs7QUNaQSxPQUFPLENBQUMsU0FBUixDQUFrQixZQUFsQixHQUFpQyxVQUFVLFFBQVYsRUFBb0I7QUFDakQsTUFBSSxRQUFRLEdBQUcsRUFBZjtBQUNBLE1BQUksSUFBSSxHQUFHLElBQVg7QUFDQSxNQUFJLGNBQWMsR0FBRyxRQUFRLEtBQUssU0FBbEM7O0FBRUEsU0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYixNQUFnQyxJQUF2QyxFQUE2QztBQUN6QyxRQUFJLElBQUksQ0FBQyxRQUFMLEtBQWtCLElBQUksQ0FBQyxZQUEzQixFQUF5QztBQUNyQztBQUNIOztBQUVELFFBQUksQ0FBQyxjQUFELElBQW1CLElBQUksQ0FBQyxPQUFMLENBQWEsUUFBYixDQUF2QixFQUErQztBQUMzQyxNQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsSUFBZDtBQUNIO0FBQ0o7O0FBRUQsU0FBTyxRQUFQO0FBQ0gsQ0FoQkQ7Ozs7Ozs7Ozs7Ozs7O0FDQU8sSUFBTSxJQUFJLEdBQUcsU0FBUCxJQUFPLENBQUMsT0FBRCxFQUFzRDtBQUFBLE1BQTVDLE9BQTRDLHVFQUFsQyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFrQzs7QUFDdEUsTUFBSSxPQUFPLENBQUMsV0FBWixFQUF5QjtBQUNyQixJQUFBLE9BQU8sQ0FBQyxVQUFSLENBQW1CLFlBQW5CLENBQWdDLE9BQWhDLEVBQXlDLE9BQU8sQ0FBQyxXQUFqRDtBQUNILEdBRkQsTUFFTztBQUNILElBQUEsT0FBTyxDQUFDLFVBQVIsQ0FBbUIsV0FBbkIsQ0FBK0IsT0FBL0I7QUFDSDs7QUFFRCxTQUFPLE9BQU8sQ0FBQyxXQUFSLENBQW9CLE9BQXBCLENBQVA7QUFDSCxDQVJNOzs7O0FBVUEsSUFBTSxTQUFTLEdBQUcsU0FBWixTQUFZLENBQUMsT0FBRCxFQUE2QjtBQUFBLE1BQW5CLFFBQW1CLHVFQUFSLEdBQVE7QUFDbEQsTUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLE9BQS9DOztBQUVBLE1BQUksT0FBTyxLQUFLLE1BQWhCLEVBQXdCO0FBQ3BCLElBQUEsT0FBTyxHQUFHLE9BQVY7QUFDSDs7QUFFRCxFQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsa0JBQWQsR0FBbUMsUUFBbkM7QUFDQSxFQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsa0JBQWQsYUFBc0MsUUFBdEM7QUFFQSxFQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsT0FBZCxHQUF3QixDQUF4QjtBQUNBLEVBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLE9BQXhCO0FBQ0EsTUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQXJCO0FBRUEsRUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLE1BQWQsR0FBdUIsQ0FBdkI7QUFDQSxFQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsT0FBZCxHQUF3QixDQUF4QjtBQUNBLEVBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxRQUFkLEdBQXlCLFFBQXpCO0FBRUEsRUFBQSxVQUFVLENBQUMsWUFBTTtBQUNiLElBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxNQUFkLGFBQTBCLE1BQTFCO0FBQ0gsR0FGUyxFQUVQLENBRk8sQ0FBVjtBQUlBLEVBQUEsTUFBTSxDQUFDLFVBQVAsQ0FBa0IsWUFBTTtBQUNwQixJQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsY0FBZCxDQUE2QixRQUE3QjtBQUNBLElBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxjQUFkLENBQTZCLFVBQTdCO0FBQ0EsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLGNBQWQsQ0FBNkIscUJBQTdCO0FBQ0EsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLGNBQWQsQ0FBNkIscUJBQTdCO0FBQ0EsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLGNBQWQsQ0FBNkIsU0FBN0I7QUFDSCxHQU5ELEVBTUcsUUFBUSxHQUFHLEVBTmQ7QUFPSCxDQTdCTTs7OztBQStCQSxJQUFNLE9BQU8sR0FBRyxTQUFWLE9BQVUsQ0FBQyxPQUFELEVBQTZCO0FBQUEsTUFBbkIsUUFBbUIsdUVBQVIsR0FBUTtBQUNoRCxFQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsU0FBZCxHQUEwQixZQUExQjtBQUNBLEVBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxrQkFBZCxHQUFtQyxnQkFBbkM7QUFDQSxFQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsa0JBQWQsYUFBc0MsUUFBdEM7QUFDQSxFQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsTUFBZCxhQUEwQixPQUFPLENBQUMsWUFBbEM7QUFDQSxFQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsU0FBZCxHQUEwQixDQUExQjtBQUNBLEVBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxZQUFkLEdBQTZCLENBQTdCO0FBQ0EsRUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLFFBQWQsR0FBeUIsUUFBekI7QUFFQSxFQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2IsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLE1BQWQsR0FBdUIsQ0FBdkI7QUFDSCxHQUZTLEVBRVAsQ0FGTyxDQUFWO0FBSUEsRUFBQSxNQUFNLENBQUMsVUFBUCxDQUFrQixZQUFNO0FBQ3BCLElBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLE1BQXhCO0FBQ0EsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLGNBQWQsQ0FBNkIsUUFBN0I7QUFDQSxJQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsY0FBZCxDQUE2QixZQUE3QjtBQUNBLElBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxjQUFkLENBQTZCLGVBQTdCO0FBQ0EsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLGNBQWQsQ0FBNkIsVUFBN0I7QUFDQSxJQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsY0FBZCxDQUE2QixxQkFBN0I7QUFDQSxJQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsY0FBZCxDQUE2QixxQkFBN0I7QUFDSCxHQVJELEVBUUcsUUFBUSxHQUFHLEVBUmQ7QUFTSCxDQXRCTTs7OztBQXdCQSxJQUFNLFdBQVcsR0FBRyxTQUFkLFdBQWMsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUF1QjtBQUM5QyxFQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxPQUFqQyxLQUE2QyxNQUE3QyxHQUFzRCxTQUFTLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FBL0QsR0FBcUYsT0FBTyxDQUFDLE9BQUQsRUFBVSxRQUFWLENBQTVGO0FBQ0gsQ0FGTTs7OztBQUlBLElBQU0sTUFBTSxHQUFHLFNBQVQsTUFBUyxDQUFDLE9BQUQsRUFBNEI7QUFBQSxNQUFsQixRQUFrQix1RUFBUCxFQUFPOztBQUM5QyxNQUFNLE9BQU8sR0FBRztBQUNaLElBQUEsUUFBUSxFQUFFLEdBREU7QUFFWixJQUFBLE9BQU8sRUFBRSxJQUZHO0FBR1osSUFBQSxPQUFPLEVBQUUsQ0FIRztBQUlaLElBQUEsUUFBUSxFQUFFO0FBSkUsR0FBaEI7QUFPQSxFQUFBLE1BQU0sQ0FBQyxNQUFQLENBQWMsT0FBZCxFQUF1QixRQUF2QjtBQUVBLEVBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLENBQXhCO0FBQ0EsRUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLE9BQWQsR0FBd0IsT0FBTyxDQUFDLE9BQVIsSUFBbUIsT0FBM0M7QUFFQSxFQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2IsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLFVBQWQsYUFBOEIsT0FBTyxDQUFDLFFBQXRDO0FBQ0EsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLE9BQWQsR0FBd0IsT0FBTyxDQUFDLE9BQWhDO0FBQ0gsR0FIUyxFQUdQLENBSE8sQ0FBVjtBQUtBLEVBQUEsVUFBVSxDQUFDLFlBQU07QUFDYixJQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsY0FBZCxDQUE2QixZQUE3QjtBQUNBLEtBQUMsQ0FBQyxPQUFPLENBQUMsUUFBVixJQUFzQixPQUFPLENBQUMsUUFBUixFQUF0QjtBQUNILEdBSFMsRUFHUCxPQUFPLENBQUMsUUFBUixHQUFtQixFQUhaLENBQVY7QUFJSCxDQXRCTTs7OztBQXdCQSxJQUFNLE9BQU8sR0FBRyxTQUFWLE9BQVUsQ0FBQyxPQUFELEVBQTRCO0FBQUEsTUFBbEIsUUFBa0IsdUVBQVAsRUFBTzs7QUFDL0MsTUFBTSxPQUFPLEdBQUc7QUFDWixJQUFBLFFBQVEsRUFBRSxHQURFO0FBRVosSUFBQSxPQUFPLEVBQUUsSUFGRztBQUdaLElBQUEsT0FBTyxFQUFFLENBSEc7QUFJWixJQUFBLFFBQVEsRUFBRTtBQUpFLEdBQWhCO0FBT0EsRUFBQSxNQUFNLENBQUMsTUFBUCxDQUFjLE9BQWQsRUFBdUIsUUFBdkI7QUFFQSxFQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsT0FBZCxHQUF3QixDQUF4QjtBQUNBLEVBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLE9BQU8sQ0FBQyxPQUFSLElBQW1CLE9BQTNDO0FBRUEsRUFBQSxVQUFVLENBQUMsWUFBTTtBQUNiLElBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxVQUFkLGFBQThCLE9BQU8sQ0FBQyxRQUF0QztBQUNBLElBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLE9BQU8sQ0FBQyxPQUFoQztBQUNILEdBSFMsRUFHUCxDQUhPLENBQVY7QUFLQSxFQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2IsSUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLE9BQWQsR0FBd0IsTUFBeEI7QUFDQSxJQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsY0FBZCxDQUE2QixZQUE3QjtBQUNBLEtBQUMsQ0FBQyxPQUFPLENBQUMsUUFBVixJQUFzQixPQUFPLENBQUMsUUFBUixFQUF0QjtBQUNILEdBSlMsRUFJUCxPQUFPLENBQUMsUUFBUixHQUFtQixFQUpaLENBQVY7QUFLSCxDQXZCTTs7OztBQXlCQSxJQUFNLFVBQVUsR0FBRyxTQUFiLFVBQWEsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFzQjtBQUM1QyxFQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxPQUFqQyxLQUE2QyxNQUE3QyxHQUFzRCxNQUFNLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBNUQsR0FBaUYsT0FBTyxDQUFDLE9BQUQsRUFBVSxPQUFWLENBQXhGO0FBQ0gsQ0FGTTs7OztBQUlBLElBQU0sTUFBTSxHQUFHLFNBQVQsTUFBUyxDQUFDLE9BQUQsRUFBYTtBQUMvQixNQUFJLENBQUMsT0FBTyxDQUFDLGNBQVIsR0FBeUIsTUFBOUIsRUFBc0M7QUFDbEMsV0FBTztBQUFFLE1BQUEsR0FBRyxFQUFFLENBQVA7QUFBVSxNQUFBLElBQUksRUFBRTtBQUFoQixLQUFQO0FBQ0gsR0FIOEIsQ0FLL0I7OztBQUNBLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxxQkFBUixFQUFiO0FBQ0EsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGFBQVIsQ0FBc0IsV0FBbEM7QUFDQSxTQUFPO0FBQ0gsSUFBQSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUwsR0FBVyxHQUFHLENBQUMsV0FEakI7QUFFSCxJQUFBLElBQUksRUFBRSxJQUFJLENBQUMsSUFBTCxHQUFZLEdBQUcsQ0FBQztBQUZuQixHQUFQO0FBSUgsQ0FaTTs7OztBQWNBLElBQU0sT0FBTyxHQUFHLFNBQVYsT0FBVSxDQUFDLE9BQUQsRUFBYTtBQUNoQyxNQUFJLENBQUMsT0FBTCxFQUFjO0FBQ1YsV0FBTyxLQUFQO0FBQ0g7O0FBRUQsU0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLFdBQVIsSUFBdUIsT0FBTyxDQUFDLFlBQS9CLElBQStDLE9BQU8sQ0FBQyxjQUFSLEdBQXlCLE1BQTFFLENBQVI7QUFDSCxDQU5NOzs7O0FBUUEsSUFBTSxXQUFXLEdBQUcsU0FBZCxXQUFjLENBQUMsQ0FBRCxFQUFPO0FBQzlCO0FBQ0EsTUFBTSxRQUFRLEdBQUcsRUFBakIsQ0FGOEIsQ0FJOUI7O0FBQ0EsTUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFQLEVBQW1CO0FBQ2YsV0FBTyxRQUFQO0FBQ0gsR0FQNkIsQ0FTOUI7OztBQUNBLE1BQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxVQUFGLENBQWEsVUFBM0IsQ0FWOEIsQ0FZOUI7O0FBQ0EsU0FBTyxPQUFQLEVBQWdCO0FBQ1osUUFBSSxPQUFPLENBQUMsUUFBUixLQUFxQixDQUFyQixJQUEwQixPQUFPLEtBQUssQ0FBMUMsRUFBNkM7QUFDekMsTUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjLE9BQWQ7QUFDSDs7QUFFRCxJQUFBLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBbEI7QUFDSDs7QUFFRCxTQUFPLFFBQVA7QUFDSCxDQXRCTSxDLENBd0JQOzs7OztBQUNPLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBWSxDQUFDLENBQUQsRUFBTztBQUM1QixTQUFPLFFBQU8sV0FBUCwwREFBTyxXQUFQLE9BQXVCLFFBQXZCLEdBQ0QsQ0FBQyxZQUFZLFdBRFosQ0FDd0I7QUFEeEIsSUFFRCxDQUFDLElBQUkseUJBQU8sQ0FBUCxNQUFhLFFBQWxCLElBQThCLENBQUMsS0FBSyxJQUFwQyxJQUE0QyxDQUFDLENBQUMsUUFBRixLQUFlLENBQTNELElBQWdFLE9BQU8sQ0FBQyxDQUFDLFFBQVQsS0FBc0IsUUFGNUY7QUFHSCxDQUpNOzs7O0FBTUEsSUFBTSxlQUFlLEdBQUksVUFBQyxZQUFEO0FBQUEsU0FBa0IsVUFBQyxRQUFELEVBQWM7QUFDNUQsUUFBSTtBQUNBLE1BQUEsWUFBWSxDQUFDLGFBQWIsQ0FBMkIsUUFBM0I7QUFDSCxLQUZELENBRUUsZ0JBQU07QUFDSixhQUFPLEtBQVA7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSCxHQVArQjtBQUFBLENBQUQsQ0FPNUIsUUFBUSxDQUFDLHNCQUFULEVBUDRCLENBQXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvS1A7O0lBRXFCLFcsR0FHakIsdUJBQWM7QUFBQTs7QUFBQTtBQUFBO0FBQUEsa0RBSU4sWUFBTTtBQUFBOztBQUNWLDRDQUFJLElBQUosQ0FBUyxZQUFULGdGQUF1QixPQUF2QixDQUErQixVQUFDLGVBQUQsRUFBcUI7QUFDaEQsTUFBQSxZQUFZLENBQUMsZUFBRCxFQUFrQixVQUFDLFFBQUQsRUFBYztBQUN4QyxRQUFBLEtBQUksQ0FBQyxNQUFMLEdBQWMsSUFBSSxPQUFKLENBQVksZUFBWixFQUE2QjtBQUN2QyxVQUFBLFlBQVksRUFBRSxnQkFEeUI7QUFFdkMsVUFBQSxpQkFBaUIsRUFBRSxJQUZvQjtBQUd2QyxVQUFBLFlBQVksRUFBRSxtQkFBUSxLQUFSLEdBQWdCLEtBQWhCLEdBQXdCLElBSEM7QUFJdkMsVUFBQSxrQkFBa0IsRUFBRTtBQUptQixTQUE3QixDQUFkO0FBTUgsT0FQVyxDQUFaO0FBUUgsS0FURDtBQVVILEdBZmE7QUFDVixPQUFLLEtBQUw7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEw7Ozs7Ozs7O0lBRU0sbUIsR0FHRiwrQkFBYztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxXQUZGO0FBRUU7O0FBQUEsa0RBWU4sWUFBTTtBQUNWLFFBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFULENBQXVCLHVDQUF2QixDQUFOLEVBQXVFO0FBQ25FLFVBQUksZ0NBQUosQ0FBeUIsdUNBQXpCO0FBQ0g7O0FBRUQsUUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsMENBQXZCLENBQU4sRUFBMEU7QUFDdEUsVUFBSSxnQ0FBSixDQUF5QiwwQ0FBekI7QUFDSDs7QUFFRCwyQ0FBQSxLQUFJLGFBQWEsSUFBYixDQUFKO0FBQ0gsR0F0QmE7O0FBQ1YsTUFBSSxNQUFNLENBQUMsVUFBUCxHQUFvQixHQUF4QixFQUE2QjtBQUN6QixTQUFLLEtBQUw7QUFDSDs7QUFFRCxFQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxVQUFDLEtBQUQsRUFBVztBQUN6QyxRQUFJLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLEdBQXBCLElBQTJCLHdDQUFDLEtBQUQsWUFBL0IsRUFBZ0Q7QUFDNUMsTUFBQSxLQUFJLENBQUMsS0FBTDtBQUNIO0FBQ0osR0FKRDtBQUtILEM7O2VBZVUsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLE0sR0FLakIsa0JBQWM7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsV0FGUztBQUVUOztBQUFBO0FBQUE7QUFBQSxXQVNMLGlCQUFNO0FBQ1gsNkNBQUEsS0FBSSxvQkFBb0IsTUFBTSxDQUFDLFVBQTNCLENBQUo7QUFDQSw2Q0FBQSxLQUFJLHFCQUFxQixNQUFNLENBQUMsV0FBNUIsQ0FBSjtBQUNIO0FBWmE7O0FBQUE7QUFBQTtBQUFBLFdBY1MsaUJBQU07QUFDekIsTUFBQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsTUFBeEIseUNBQWdDLEtBQWhDO0FBQ0EsTUFBQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsUUFBeEIseUNBQWtDLEtBQWxDO0FBQ0g7QUFqQmE7O0FBQUE7QUFBQTtBQUFBLFdBbUJFLGVBQUMsS0FBRCxFQUFXO0FBQ3ZCLDZDQUFBLEtBQUkseUJBQUosTUFBQSxLQUFJO0FBQ0osNkNBQUEsS0FBSSxlQUFKLE1BQUEsS0FBSTtBQUNKLDZDQUFBLEtBQUksa0JBQUosTUFBQSxLQUFJO0FBQ1A7QUF2QmE7O0FBQUE7QUFBQTtBQUFBLFdBeUJJLGVBQUMsS0FBRCxFQUFXO0FBQ3pCLDZDQUFBLEtBQUkseUJBQUosTUFBQSxLQUFJOztBQUNKLFVBQUksdUNBQUEsS0FBSSxtQkFBSixLQUEwQixNQUFNLENBQUMsVUFBakMsSUFBK0MsdUNBQUEsS0FBSSxvQkFBSixLQUEyQixNQUFNLENBQUMsV0FBckYsRUFBa0c7QUFDOUYsK0NBQUEsS0FBSSxlQUFKLE1BQUEsS0FBSTtBQUNQOztBQUNELDZDQUFBLEtBQUksa0JBQUosTUFBQSxLQUFJO0FBQ1A7QUEvQmE7O0FBQUE7QUFBQTtBQUFBLFdBaUNXLGlCQUFNO0FBQUE7O0FBQzNCLFVBQU0sZ0JBQWdCLCtDQUFHLGVBQUksVUFBUCxvREFBRyxnQkFBZ0IsWUFBbkIseUVBQW1DLENBQXpEO0FBQ0EsVUFBTSxlQUFlLHNEQUFHLGVBQUksTUFBSixDQUFXLFNBQWQsMkRBQUcsdUJBQXNCLFlBQXpCLHlFQUF5QyxDQUE5RDtBQUNBLFVBQU0sVUFBVSxHQUFHLGVBQUksSUFBSixDQUFTLFlBQVQsR0FBd0IsZ0JBQTNDOztBQUVBLFVBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxXQUF4QixFQUFxQztBQUNqQyx1QkFBSSxJQUFKLENBQVMsS0FBVCxDQUFlLE9BQWYsaUlBRytCLGdCQUgvQixrQkFHdUQsZUFIdkQ7O0FBTUEsWUFBSSxDQUFDLENBQUMsZUFBSSxNQUFKLENBQVcsYUFBakIsRUFBZ0M7QUFDNUIseUJBQUksTUFBSixDQUFXLGFBQVgsQ0FBeUIsS0FBekIsQ0FBK0IsU0FBL0IsR0FBMkMsTUFBM0M7QUFDSCxTQUZELE1BRU8sSUFBSSxDQUFDLENBQUMsZUFBSSxNQUFKLENBQVcsVUFBakIsRUFBNkI7QUFDaEMseUJBQUksTUFBSixDQUFXLFVBQVgsQ0FBc0IsS0FBdEIsQ0FBNEIsU0FBNUIsR0FBd0MsTUFBeEM7QUFDSDs7QUFFRCwrQ0FBQSxLQUFJLHdCQUF3QixTQUF4QixDQUFKO0FBQ0gsT0FkRCxNQWNPLElBQUksdUNBQUEsS0FBSSx1QkFBSixLQUE4QixTQUFsQyxFQUE2QztBQUNoRCx1QkFBSSxJQUFKLENBQVMsS0FBVCxDQUFlLE9BQWYsR0FBeUIsRUFBekI7O0FBRUEsWUFBSSxDQUFDLENBQUMsZUFBSSxNQUFKLENBQVcsYUFBakIsRUFBZ0M7QUFDNUIseUJBQUksTUFBSixDQUFXLGFBQVgsQ0FBeUIsS0FBekIsQ0FBK0IsU0FBL0IsR0FBMkMsSUFBM0M7QUFDSCxTQUZELE1BRU87QUFDSCx5QkFBSSxNQUFKLENBQVcsVUFBWCxDQUFzQixLQUF0QixDQUE0QixTQUE1QixHQUF3QyxJQUF4QztBQUNIOztBQUVELCtDQUFBLEtBQUksd0JBQXdCLElBQXhCLENBQUo7QUFDSDtBQUNKO0FBL0RhOztBQUFBO0FBQUE7QUFBQSxXQWlFQyxpQkFBTTtBQUNqQixVQUFJLENBQUMsUUFBUSxDQUFDLElBQVQsQ0FBYyxTQUFkLENBQXdCLFFBQXhCLENBQWlDLGtCQUFqQyxDQUFMLEVBQTJEO0FBQ3ZEO0FBQ0g7O0FBRUQsVUFBSSxNQUFNLEdBQUcsQ0FBYjs7QUFFQSxVQUFJLENBQUMsQ0FBQyxlQUFJLFVBQVYsRUFBc0I7QUFDbEIsUUFBQSxNQUFNLEdBQUcsZUFBSSxVQUFKLENBQWUsWUFBeEI7QUFDSDs7QUFFRCxxQkFBSSxJQUFKLENBQVMsS0FBVCxDQUFlLFNBQWYsR0FBMkIsZUFBSSxJQUFKLENBQVMsWUFBVCxJQUF5QixNQUFNLENBQUMsV0FBUCxHQUFxQixlQUFJLElBQUosQ0FBUyxZQUE5QixHQUE2QyxNQUF0RSxJQUFnRixJQUEzRztBQUNIO0FBN0VhOztBQUFBO0FBQUE7QUFBQSxXQStFSSxpQkFBTTtBQUNwQixVQUFJLGVBQUksSUFBSixDQUFTLFNBQVQsQ0FBbUIsUUFBbkIsQ0FBNEIscUJBQTVCLENBQUosRUFBd0Q7QUFDcEQsUUFBQSxVQUFVLENBQUMsWUFBTTtBQUFBOztBQUNiLGNBQUksdUJBQXVCLEdBQUcsQ0FBOUI7QUFFQSxVQUFBLHVCQUF1Qiw0QkFBSSxlQUFJLE1BQUosQ0FBVyxRQUFmLHlEQUFJLHFCQUFxQixZQUFoRDs7QUFFQSxjQUFJLENBQUMsQ0FBQyxlQUFJLE1BQUosQ0FBVyxhQUFqQixFQUFnQztBQUM1QiwyQkFBSSxNQUFKLENBQVcsYUFBWCxDQUF5QixLQUF6QixDQUErQixNQUEvQixhQUEyQyx1QkFBM0M7QUFDQSxZQUFBLHVCQUF1QixJQUFJLGVBQUksTUFBSixDQUFXLGFBQVgsQ0FBeUIsWUFBcEQ7QUFDSDs7QUFFRCx5QkFBSSxJQUFKLENBQVMsS0FBVCxDQUFlLFlBQWYsYUFBaUMsdUJBQWpDO0FBQ0gsU0FYUyxFQVdQLEVBWE8sQ0FBVjtBQVlIO0FBQ0o7QUE5RmE7O0FBQ1YsTUFBSSxDQUFDLGVBQUksSUFBVCxFQUFlO0FBQ1g7QUFDSDs7QUFFRDtBQUNBO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEw7Ozs7Ozs7O0lBRU0sTSxHQUNGLGtCQUFjO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLFdBSUwsaUJBQU07QUFDWCxNQUFBLEtBQUksQ0FBQyxRQUFMLEdBQWdCLElBQUksb0JBQUosRUFBaEI7QUFDSDtBQU5hOztBQUNWO0FBQ0gsQzs7ZUFPVSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWmY7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLGMsR0FHRiwwQkFBYztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxXQVNMLGlCQUFNO0FBQ1gscUJBQUksTUFBSixDQUFXLFFBQVgsQ0FBb0IsZ0JBQXBCLENBQXFDLHlDQUFyQyxFQUFnRixPQUFoRixDQUF3RixVQUFDLFFBQUQsRUFBYztBQUNsRyxRQUFBLFFBQVEsQ0FBQyxrQkFBVCxDQUE0QixXQUE1QixFQUF5QyxvREFBekM7QUFDSCxPQUZEOztBQUlBLDZDQUFBLEtBQUksc0JBQ0EsbUJBQVEsb0JBQVIsSUFBZ0MsTUFBaEMsR0FDTSxlQUFJLE1BQUosQ0FBVyxRQUFYLENBQW9CLGdCQUFwQixDQUFxQywrQkFBckMsQ0FETixHQUVNLGVBQUksTUFBSixDQUFXLFFBQVgsQ0FBb0IsZ0JBQXBCLENBQXFDLGtCQUFyQyxDQUhOLENBQUo7QUFLQSxVQUFJLGdCQUFKLENBQXFCLGVBQUksTUFBSixDQUFXLFFBQWhDLEVBQTBDO0FBQ3RDLFFBQUEsVUFBVSxFQUFFLEdBRDBCO0FBRXRDLFFBQUEsZUFBZSxFQUFFLEtBRnFCO0FBR3RDLFFBQUEsZUFBZSxFQUFFO0FBSHFCLE9BQTFDO0FBS0g7QUF4QmE7O0FBQUE7QUFBQTtBQUFBLFdBMEJTLGlCQUFNO0FBQ3pCLDZDQUFBLEtBQUkscUJBQUosQ0FBd0IsT0FBeEIsQ0FBZ0MsVUFBQyxnQkFBRCxFQUFzQjtBQUNsRCxRQUFBLGdCQUFnQixDQUFDLGdCQUFqQixDQUFrQyxPQUFsQyx5Q0FBMkMsS0FBM0M7QUFDQSxRQUFBLGdCQUFnQixDQUFDLGdCQUFqQixDQUFrQyxLQUFsQyx5Q0FBeUMsS0FBekM7QUFDSCxPQUhEOztBQUtBLHFCQUFJLElBQUosQ0FBUyxRQUFULENBQWtCLGFBQWxCLENBQWdDLGdCQUFoQyxDQUFpRCxPQUFqRCx5Q0FBMEQsS0FBMUQ7O0FBRUEsTUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsU0FBMUIseUNBQXFDLEtBQXJDO0FBQ0g7QUFuQ2E7O0FBQUE7QUFBQTtBQUFBLFdBcUNhLGVBQUMsS0FBRCxFQUFXO0FBQ2xDLE1BQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxNQUFBLEtBQUssQ0FBQyxlQUFOO0FBRUEsVUFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsYUFBL0I7QUFDQSxVQUFNLFFBQVEsR0FDVixtQkFBUSxvQkFBUixJQUFnQyxNQUFoQyxHQUF5QyxnQkFBZ0IsQ0FBQyxVQUExRCxHQUF1RSxnQkFBZ0IsQ0FBQyxVQUFqQixDQUE0QixVQUR2RztBQUVBLFVBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBekI7O0FBRUEsVUFBSSxFQUFDLFFBQUQsYUFBQyxRQUFELGVBQUMsUUFBUSxDQUFFLFNBQVYsQ0FBb0IsUUFBcEIsQ0FBNkIsUUFBN0IsQ0FBRCxDQUFKLEVBQTZDO0FBQ3pDLFFBQUEsUUFBUSxDQUFDLFNBQVQsQ0FBbUIsR0FBbkIsQ0FBdUIsUUFBdkI7QUFDQSw4QkFBVSxPQUFWLEVBQW1CLEdBQW5CO0FBQ0gsT0FIRCxNQUdPO0FBQUE7O0FBQ0gsUUFBQSxRQUFRLENBQUMsU0FBVCxDQUFtQixNQUFuQixDQUEwQixRQUExQjtBQUNBLDRCQUFRLE9BQVIsRUFBaUIsR0FBakI7QUFFQSxpQ0FBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsZ0NBQTFCLGlGQUE2RCxPQUE3RCxDQUFxRSxVQUFDLFlBQUQsRUFBa0I7QUFDbkYsVUFBQSxZQUFZLENBQUMsU0FBYixDQUF1QixNQUF2QixDQUE4QixRQUE5QjtBQUNBLDhCQUFRLFlBQVksQ0FBQyxhQUFiLENBQTJCLElBQTNCLENBQVIsRUFBMEMsR0FBMUM7QUFDSCxTQUhEO0FBSUg7QUFDSjtBQTFEYTs7QUFBQTtBQUFBO0FBQUEsV0E0RFUsZUFBQyxLQUFELEVBQVc7QUFDL0IsTUFBQSxLQUFLLENBQUMsY0FBTjs7QUFFQSxVQUFJLENBQUMsZUFBSSxJQUFKLENBQVMsU0FBVCxDQUFtQixRQUFuQixDQUE0QixXQUE1QixDQUFMLEVBQStDO0FBQzNDLHVCQUFJLElBQUosQ0FBUyxTQUFULENBQW1CLEdBQW5CLENBQXVCLFdBQXZCOztBQUNBLHVCQUFJLElBQUosQ0FBUyxRQUFULENBQWtCLGFBQWxCLENBQWdDLGFBQWhDLENBQThDLFlBQTlDLEVBQTRELFNBQTVELENBQXNFLEdBQXRFLENBQTBFLFdBQTFFO0FBQ0gsT0FIRCxNQUdPO0FBQ0gsdUJBQUksSUFBSixDQUFTLFNBQVQsQ0FBbUIsTUFBbkIsQ0FBMEIsV0FBMUI7O0FBQ0EsdUJBQUksSUFBSixDQUFTLFFBQVQsQ0FBa0IsYUFBbEIsQ0FBZ0MsYUFBaEMsQ0FBOEMsWUFBOUMsRUFBNEQsU0FBNUQsQ0FBc0UsTUFBdEUsQ0FBNkUsV0FBN0U7QUFDSDs7QUFFRCxxQkFBSSxJQUFKLENBQVMsUUFBVCxDQUFrQixhQUFsQixDQUFnQyxLQUFoQztBQUNIO0FBeEVhOztBQUFBO0FBQUE7QUFBQSxXQTZFTyxlQUFDLEtBQUQsRUFBVztBQUFBOztBQUM1QixVQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTixLQUFrQixDQUFqQztBQUNBLFVBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUF2QjtBQUNBLFVBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFOLEtBQWtCLEVBQWpDO0FBQ0EsVUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU4sS0FBa0IsRUFBbkM7QUFFQSxVQUFNLFdBQVcsMkJBQUcsZUFBSSxNQUFKLENBQVcsUUFBZCx5REFBRyxxQkFBcUIsZ0JBQXJCLENBQXNDLHdDQUF0QyxDQUFwQjtBQUNBLFVBQU0sZUFBZSxHQUFHLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBRCxDQUFkLEdBQW9CLEVBQXZEO0FBQ0EsVUFBTSxjQUFjLEdBQUcsV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBWixHQUFxQixDQUF0QixDQUFkLEdBQXlDLEVBQTNFO0FBRUEsTUFBQSxjQUFjLENBQUMsS0FBZixDQUFxQixPQUFyQixHQUErQixFQUEvQjs7QUFFQSxVQUFJLGVBQUksSUFBSixDQUFTLFNBQVQsQ0FBbUIsUUFBbkIsQ0FBNEIsdUJBQTVCLENBQUosRUFBMEQ7QUFDdEQsWUFBSSxDQUFDLGVBQUksSUFBSixDQUFTLFNBQVQsQ0FBbUIsUUFBbkIsQ0FBNEIsV0FBNUIsQ0FBTCxFQUErQztBQUMzQyxjQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFpQyxRQUFqQyxDQUEwQyxpQkFBMUMsQ0FBaEIsRUFBOEU7QUFDMUUsWUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QjtBQUNIO0FBQ0o7O0FBRUQsWUFBSSxDQUFDLGVBQUksSUFBSixDQUFTLFNBQVQsQ0FBbUIsUUFBbkIsQ0FBNEIsV0FBNUIsQ0FBTCxFQUErQztBQUMzQztBQUNIO0FBQ0o7O0FBRUQsVUFBSSxNQUFKLEVBQVk7QUFDUixRQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsK0NBQUEsS0FBSSx3QkFBSixNQUFBLEtBQUksRUFBdUIsS0FBdkIsQ0FBSjtBQUNIOztBQUVELFVBQ0ksUUFBUSxJQUNSLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQWlDLFFBQWpDLENBQTBDLGlCQUExQyxDQURBLElBRUEsZUFBSSxJQUFKLENBQVMsU0FBVCxDQUFtQixRQUFuQixDQUE0QixXQUE1QixDQUhKLEVBSUU7QUFDRSxRQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCO0FBQ0g7O0FBRUQsVUFBSSxDQUFDLFFBQUQsSUFBYSxNQUFiLElBQXVCLGNBQWMsS0FBSyxRQUFRLENBQUMsYUFBdkQsRUFBc0U7QUFDbEUsUUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLFFBQUEsZUFBZSxDQUFDLEtBQWhCO0FBQ0gsT0F4QzJCLENBMEM1Qjs7O0FBQ0EsVUFBSSxNQUFNLElBQUksZUFBZSxLQUFLLGNBQWxDLEVBQWtEO0FBQzlDLFFBQUEsS0FBSyxDQUFDLGNBQU47QUFDSDtBQUNKO0FBM0hhOztBQUNWLE1BQUksQ0FBQyxlQUFJLE1BQUosQ0FBVyxRQUFoQixFQUEwQjtBQUN0QjtBQUNIOztBQUVEO0FBQ0E7QUFDSCxDOztlQXVIVSxjOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJZjs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLEksR0FDRixnQkFBYztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxXQUtMLGlCQUFNO0FBQ1gsTUFBQSxLQUFJLENBQUMsVUFBTCxHQUFrQixJQUFJLHNCQUFKLEVBQWxCO0FBQ0EsTUFBQSxLQUFJLENBQUMsSUFBTCxHQUFZLElBQUksZ0JBQUosRUFBWjtBQUNIO0FBUmE7O0FBQUE7QUFBQTtBQUFBLFdBVVMsaUJBQU07QUFDekIsTUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIscUJBQTFCLEVBQWlELE9BQWpELENBQXlELFVBQUMsZUFBRCxFQUFxQjtBQUMxRSxRQUFBLGVBQWUsQ0FBQyxnQkFBaEIsQ0FBaUMsT0FBakMseUNBQTBDLEtBQTFDO0FBQ0gsT0FGRDtBQUlBLE1BQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLFlBQTFCLEVBQXdDLE9BQXhDLENBQWdELFVBQUMsSUFBRCxFQUFVO0FBQ3RELFlBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBTCxDQUFzQix5QkFBdEIsQ0FBeEI7QUFDQSxRQUFBLGVBQWUsQ0FBQyxPQUFoQixDQUF3QixVQUFDLGNBQUQsRUFBb0I7QUFDeEMsVUFBQSxjQUFjLENBQUMsZ0JBQWYsQ0FBZ0MsWUFBaEMseUNBQThDLEtBQTlDO0FBQ0EsVUFBQSxjQUFjLENBQUMsZ0JBQWYsQ0FBZ0MsWUFBaEMseUNBQThDLEtBQTlDO0FBQ0gsU0FIRDtBQUlILE9BTkQ7QUFPSDtBQXRCYTs7QUFBQTtBQUFBO0FBQUEsV0F3QlksZUFBQyxLQUFELEVBQVc7QUFDakMsTUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLE1BQUEsS0FBSyxDQUFDLGVBQU47QUFDSDtBQTNCYTs7QUFBQTtBQUFBO0FBQUEsV0E2QmdCLGVBQUMsS0FBRCxFQUFXO0FBQ3JDLFVBQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUE3QjtBQUNBLFVBQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQyxhQUFmLENBQTZCLGFBQTdCLENBQWhCO0FBRUEsTUFBQSxjQUFjLENBQUMsU0FBZixDQUF5QixHQUF6QixDQUE2QixTQUE3QjtBQUVBLHlCQUFPLE9BQVA7QUFDSDtBQXBDYTs7QUFBQTtBQUFBO0FBQUEsV0FzQ2dCLGVBQUMsS0FBRCxFQUFXO0FBQ3JDLFVBQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxhQUE3QjtBQUNBLFVBQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQyxhQUFmLENBQTZCLGFBQTdCLENBQWhCO0FBRUEsTUFBQSxjQUFjLENBQUMsU0FBZixDQUF5QixNQUF6QixDQUFnQyxTQUFoQztBQUNBLE1BQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxhQUFkLEdBQThCLE1BQTlCO0FBRUEsMEJBQVEsT0FBUixFQUFpQjtBQUNiLFFBQUEsUUFBUSxFQUFFLG9CQUFNO0FBQ1osVUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLGFBQWQsR0FBOEIsSUFBOUI7QUFDSDtBQUhZLE9BQWpCO0FBS0g7QUFsRGE7O0FBQ1Y7QUFDQTtBQUNILEM7O2VBa0RVLEk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURmOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU0sYyxHQUNGLDBCQUFjO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLFdBU0wsaUJBQU07QUFDWCxxQkFBSSxJQUFKLENBQVMsVUFBVCxDQUFvQixJQUFwQixDQUF5QixnQkFBekIsQ0FBMEMsWUFBMUMsRUFBd0QsT0FBeEQsQ0FBZ0UsVUFBQyxPQUFELEVBQWE7QUFDekUsUUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixVQUFyQixFQUFpQyxDQUFqQztBQUNILE9BRkQ7QUFHSDtBQWJhOztBQUFBO0FBQUE7QUFBQSxXQWVTLGlCQUFNO0FBQUE7O0FBQ3pCLHFCQUFJLElBQUosQ0FBUyxVQUFULENBQW9CLGFBQXBCLENBQWtDLGdCQUFsQyxDQUFtRCxPQUFuRCx5Q0FBNEQsS0FBNUQ7O0FBRUEsK0JBQUEsUUFBUSxDQUNILGdCQURMLENBRVEsMEpBRlIsaUZBSU0sT0FKTixDQUljLFVBQUMsWUFBRCxFQUFrQjtBQUN4QixRQUFBLFlBQVksQ0FBQyxnQkFBYixDQUE4QixPQUE5Qix5Q0FBdUMsS0FBdkM7QUFDQSxRQUFBLFlBQVksQ0FBQyxnQkFBYixDQUE4QixLQUE5Qix5Q0FBcUMsS0FBckM7QUFDSCxPQVBMO0FBU0EsTUFBQSxRQUFRLENBQ0gsZ0JBREwsQ0FDc0IsMkVBRHRCLEVBRUssT0FGTCxDQUVhLFVBQUMsWUFBRCxFQUFrQjtBQUN2QixRQUFBLFlBQVksQ0FBQyxnQkFBYixDQUE4QixPQUE5Qix5Q0FBdUMsS0FBdkM7QUFDSCxPQUpMO0FBTUEsTUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsU0FBMUIseUNBQXFDLEtBQXJDO0FBQ0g7QUFsQ2E7O0FBQUE7QUFBQTtBQUFBLFdBb0NVLGVBQUMsS0FBRCxFQUFXO0FBQy9CLE1BQUEsS0FBSyxDQUFDLGNBQU47QUFFQSxVQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBNUI7O0FBRUEsVUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFkLENBQXdCLFFBQXhCLENBQWlDLE1BQWpDLENBQUwsRUFBK0M7QUFDM0MsK0NBQUEsS0FBSSxZQUFKLE1BQUEsS0FBSTtBQUNQLE9BRkQsTUFFTztBQUNILCtDQUFBLEtBQUksYUFBSixNQUFBLEtBQUk7QUFDUDtBQUNKO0FBOUNhOztBQUFBO0FBQUE7QUFBQSxXQWdESyxlQUFDLEtBQUQsRUFBVztBQUMxQixNQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsTUFBQSxLQUFLLENBQUMsZUFBTjtBQUVBLFVBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxhQUEzQjtBQUNBLFVBQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFiLENBQXFCLGFBQXJCLENBQWpCO0FBQ0EsVUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBaEI7O0FBRUEsVUFBSSxFQUFFLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxPQUFqQyxLQUE2QyxNQUEvQyxDQUFKLEVBQTREO0FBQ3hELFFBQUEsUUFBUSxDQUFDLFNBQVQsQ0FBbUIsTUFBbkIsQ0FBMEIsVUFBMUI7QUFDQSw0QkFBUSxPQUFSLEVBQWlCLEdBQWpCO0FBQ0gsT0FIRCxNQUdPO0FBQ0gsUUFBQSxRQUFRLENBQUMsU0FBVCxDQUFtQixHQUFuQixDQUF1QixVQUF2QjtBQUNBLDhCQUFVLE9BQVYsRUFBbUIsR0FBbkI7QUFDSDtBQUNKO0FBL0RhOztBQUFBO0FBQUE7QUFBQSxXQWlFWSxlQUFDLEtBQUQsRUFBVztBQUNqQyw2Q0FBQSxLQUFJLGFBQUosTUFBQSxLQUFJO0FBQ1A7QUFuRWE7O0FBQUE7QUFBQTtBQUFBLFdBcUVGLGlCQUFNO0FBQUE7O0FBQ2QscUJBQUksTUFBSixDQUFXLFVBQVgsQ0FBc0IsU0FBdEIsQ0FBZ0MsR0FBaEMsQ0FBb0MsVUFBcEM7O0FBQ0EscUJBQUksSUFBSixDQUFTLFVBQVQsQ0FBb0IsYUFBcEIsQ0FBa0MsU0FBbEMsQ0FBNEMsR0FBNUMsQ0FBZ0QsTUFBaEQ7O0FBQ0EsOENBQUksSUFBSixDQUFTLFVBQVQsQ0FBb0IsSUFBcEIsZ0ZBQTBCLFNBQTFCLENBQW9DLEdBQXBDLENBQXdDLFFBQXhDOztBQUNBLHFCQUFJLElBQUosQ0FBUyxVQUFULENBQW9CLElBQXBCLENBQXlCLFNBQXpCLENBQW1DLEdBQW5DLENBQXVDLFFBQXZDOztBQUVBLHlCQUFPLGVBQUksSUFBSixDQUFTLFVBQVQsQ0FBb0IsSUFBM0I7QUFFQSxVQUFNLDZCQUE2QixHQUFHLGVBQUksSUFBSixDQUFTLFVBQS9DO0FBQ0EscUJBQUksSUFBSixDQUFTLEtBQVQsQ0FBZSxRQUFmLEdBQTBCLFFBQTFCO0FBQ0EsVUFBTSw0QkFBNEIsR0FBRyxlQUFJLElBQUosQ0FBUyxVQUE5QztBQUNBLHFCQUFJLElBQUosQ0FBUyxLQUFULENBQWUsV0FBZixHQUE2Qiw2QkFBNkIsR0FBRyw0QkFBaEMsR0FBK0QsSUFBNUY7QUFDSDtBQWpGYTs7QUFBQTtBQUFBO0FBQUEsV0FtRkQsaUJBQU07QUFBQTs7QUFDZixxQkFBSSxNQUFKLENBQVcsVUFBWCxDQUFzQixTQUF0QixDQUFnQyxNQUFoQyxDQUF1QyxVQUF2Qzs7QUFDQSxxQkFBSSxJQUFKLENBQVMsVUFBVCxDQUFvQixhQUFwQixDQUFrQyxTQUFsQyxDQUE0QyxNQUE1QyxDQUFtRCxNQUFuRDs7QUFDQSwrQ0FBSSxJQUFKLENBQVMsVUFBVCxDQUFvQixJQUFwQixrRkFBMEIsU0FBMUIsQ0FBb0MsTUFBcEMsQ0FBMkMsUUFBM0M7O0FBQ0EscUJBQUksSUFBSixDQUFTLFVBQVQsQ0FBb0IsSUFBcEIsQ0FBeUIsU0FBekIsQ0FBbUMsTUFBbkMsQ0FBMEMsUUFBMUM7O0FBRUEsMEJBQVEsZUFBSSxJQUFKLENBQVMsVUFBVCxDQUFvQixJQUE1QjtBQUVBLHFCQUFJLElBQUosQ0FBUyxLQUFULENBQWUsUUFBZixHQUEwQixFQUExQjtBQUNBLHFCQUFJLElBQUosQ0FBUyxLQUFULENBQWUsV0FBZixHQUE2QixFQUE3QjtBQUVBLE1BQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLHFEQUExQixFQUFpRixPQUFqRixDQUF5RixVQUFDLFFBQUQsRUFBYztBQUNuRyxRQUFBLFFBQVEsQ0FBQyxTQUFULENBQW1CLE1BQW5CLENBQTBCLFVBQTFCO0FBQ0gsT0FGRDtBQUlBLE1BQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLGdEQUExQixFQUE0RSxPQUE1RSxDQUFvRixVQUFDLE9BQUQsRUFBYTtBQUM3Riw0QkFBUSxPQUFSLEVBQWlCLEdBQWpCO0FBQ0gsT0FGRDtBQUdIO0FBckdhOztBQUFBO0FBQUE7QUFBQSxXQTBHTyxlQUFDLEtBQUQsRUFBVztBQUFBOztBQUM1QixVQUFJLDRCQUFDLGVBQUksSUFBSixDQUFTLFVBQVQsQ0FBb0IsSUFBckIsbURBQUMsdUJBQTBCLFNBQTFCLENBQW9DLFFBQXBDLENBQTZDLFFBQTdDLENBQUQsQ0FBSixFQUE2RDtBQUN6RDtBQUNIOztBQUVELFVBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFOLEtBQWtCLENBQWpDO0FBQ0EsVUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQXZCO0FBQ0EsVUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU4sS0FBa0IsRUFBakM7QUFDQSxVQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTixLQUFrQixFQUFuQztBQUVBLFVBQU0sU0FBUyxHQUFHLGVBQUksSUFBSixDQUFTLFVBQVQsQ0FBb0IsYUFBdEM7O0FBRUEsVUFBTSxXQUFXLEdBQUcsZUFBSSxJQUFKLENBQVMsVUFBVCxDQUFvQixJQUFwQixDQUNmLGFBRGUsQ0FDRCxLQURDLEVBRWYsZ0JBRmUsQ0FFRSxrQ0FGRixDQUFwQjs7QUFJQSxVQUFNLGVBQWUsR0FBRyxXQUFXLENBQUMsQ0FBRCxDQUFuQztBQUNBLFVBQU0sY0FBYyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBWixHQUFxQixDQUF0QixDQUFsQztBQUVBLE1BQUEsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsRUFBMUI7O0FBRUEsVUFBSSxNQUFKLEVBQVk7QUFDUixRQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsK0NBQUEsS0FBSSxhQUFKLE1BQUEsS0FBSTtBQUNQOztBQUVELFVBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQWlDLFFBQWpDLENBQTBDLFdBQTFDLENBQWhCLEVBQXdFO0FBQ3BFLFFBQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxRQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCO0FBQ0g7O0FBRUQsVUFBSSxDQUFDLFFBQUQsSUFBYSxNQUFiLElBQXVCLGNBQWMsS0FBSyxRQUFRLENBQUMsYUFBdkQsRUFBc0U7QUFDbEUsUUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLFFBQUEsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIscUNBQTFCO0FBQ0EsUUFBQSxTQUFTLENBQUMsS0FBVjtBQUNIOztBQUVELFVBQUksUUFBUSxJQUFJLE1BQVosSUFBc0IsZUFBZSxLQUFLLFFBQVEsQ0FBQyxhQUF2RCxFQUFzRTtBQUNsRSxRQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsUUFBQSxTQUFTLENBQUMsS0FBVixDQUFnQixPQUFoQixHQUEwQixxQ0FBMUI7QUFDQSxRQUFBLFNBQVMsQ0FBQyxLQUFWO0FBQ0gsT0F6QzJCLENBMkM1Qjs7O0FBQ0EsVUFBSSxNQUFNLElBQUksZUFBZSxLQUFLLGNBQWxDLEVBQWtEO0FBQzlDLFFBQUEsS0FBSyxDQUFDLGNBQU47QUFDSDtBQUNKO0FBekphOztBQUNWLE1BQUksQ0FBQyxlQUFJLElBQUosQ0FBUyxVQUFULENBQW9CLGFBQXpCLEVBQXdDO0FBQ3BDO0FBQ0g7O0FBRUQ7QUFDQTtBQUNILEM7O2VBcUpVLGM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEtmOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU0sUSxHQUNGLG9CQUFjO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLFdBS0wsaUJBQU07QUFDWCxxQkFBSSxJQUFKLENBQVMsSUFBVCxDQUFjLFlBQWQsQ0FBMkIsT0FBM0IsQ0FBbUMsVUFBQyxXQUFELEVBQWlCO0FBQ2hELFlBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxVQUE3QjtBQUNBLFlBQU0sa0JBQWtCLEdBQUcsbUJBQU8sUUFBUCxFQUFpQixJQUE1QztBQUNBLFlBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxLQUF0QyxDQUFqQztBQUNBLFlBQUksa0JBQUo7QUFDQSxZQUFJLGdCQUFKOztBQUVBLFlBQUksa0JBQWtCLEdBQUcsZ0JBQWdCLEdBQUcsQ0FBeEMsR0FBNEMsQ0FBaEQsRUFBbUQ7QUFDL0MsVUFBQSxrQkFBa0IsR0FBRyxrQkFBa0IsR0FBRyxFQUExQztBQUNBLFVBQUEsZ0JBQWdCLEdBQUcsQ0FBbkI7QUFDSCxTQUhELE1BR087QUFDSCxVQUFBLGtCQUFrQixHQUFHLGdCQUFnQixHQUFHLENBQXhDO0FBQ0EsVUFBQSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsV0FBVCxHQUF1QixDQUExQztBQUNIOztBQUVELFlBQUksQ0FBQyxtQkFBUSxLQUFiLEVBQW9CO0FBQ2hCLFVBQUEsV0FBVyxDQUFDLEtBQVosQ0FBa0IsSUFBbEIsY0FBNkIsa0JBQTdCO0FBQ0EsVUFBQSxXQUFXLENBQUMsS0FBWixDQUFrQixVQUFsQixhQUFrQyxnQkFBbEM7QUFDSCxTQUhELE1BR087QUFDSCxVQUFBLFdBQVcsQ0FBQyxLQUFaLENBQWtCLEtBQWxCLGNBQThCLGtCQUE5QjtBQUNBLFVBQUEsV0FBVyxDQUFDLEtBQVosQ0FBa0IsV0FBbEIsYUFBbUMsZ0JBQW5DO0FBQ0g7O0FBRUQsWUFDSSxNQUFNLENBQUMsVUFBUCxHQUNJLGtCQURKLEdBRUksa0JBRkosR0FHSSxnQkFISixHQUlJLGdCQUpKLEdBS0EsQ0FOSixFQU9FO0FBQ0UsVUFBQSxXQUFXLENBQUMsS0FBWixDQUFrQixJQUFsQixHQUF5QixNQUF6QjtBQUNBLFVBQUEsV0FBVyxDQUFDLEtBQVosQ0FBa0IsS0FBbEIsY0FDSSxNQUFNLENBQUMsVUFBUCxHQUFvQixrQkFBcEIsR0FBeUMsUUFBUSxDQUFDLFdBQWxELEdBQWdFLEVBRHBFO0FBR0g7QUFDSixPQXBDRDtBQXFDSDtBQTNDYTs7QUFBQTtBQUFBO0FBQUEsV0E2Q1MsaUJBQU07QUFDekIscUJBQUksSUFBSixDQUFTLElBQVQsQ0FBYyxTQUFkLENBQXdCLE9BQXhCLENBQWdDLFVBQUMsUUFBRCxFQUFjO0FBQzFDLFFBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLFlBQTFCLHlDQUF3QyxLQUF4QztBQUNILE9BRkQsRUFEeUIsQ0FLekI7OztBQUNBLHFCQUFJLElBQUosQ0FBUyxJQUFULENBQWMsZUFBZCxDQUE4QixPQUE5QixDQUFzQyxVQUFDLFFBQUQsRUFBYztBQUNoRCxRQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixZQUExQix5Q0FBd0MsS0FBeEM7QUFDSCxPQUZEO0FBR0g7QUF0RGE7O0FBQUE7QUFBQTtBQUFBLFdBd0RVLGVBQUMsS0FBRCxFQUFXO0FBQy9CLFVBQU0sT0FBTyxHQUFHLGVBQUksTUFBSixDQUFXLElBQVgsQ0FBZ0IsU0FBaEIsQ0FBMEIsUUFBMUIsQ0FBbUMsZUFBbkMsSUFDVixRQUFRLENBQUMsYUFBVCxDQUF1QixvQ0FBdkIsQ0FEVSxHQUVWLFFBQVEsQ0FBQyxhQUFULENBQXVCLG9CQUF2QixDQUZOO0FBSUEsNkNBQUEsS0FBSSxzQkFBSixNQUFBLEtBQUksRUFBcUIsT0FBckIsRUFBOEIsS0FBOUIsQ0FBSjtBQUNIO0FBOURhOztBQUFBO0FBQUE7QUFBQSxXQWdFZ0IsZUFBQyxLQUFELEVBQVc7QUFDckMsVUFBTSxPQUFPLEdBQUcsZUFBSSxNQUFKLENBQVcsTUFBM0I7QUFFQSw2Q0FBQSxLQUFJLHNCQUFKLE1BQUEsS0FBSSxFQUFxQixPQUFyQixFQUE4QixLQUE5QixDQUFKO0FBQ0g7QUFwRWE7O0FBQUE7QUFBQTtBQUFBLFdBc0VRLGVBQUMsT0FBRCxFQUFVLEtBQVYsRUFBb0I7QUFDdEMsVUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLGFBQXZCO0FBQ0EsVUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBaEI7QUFDQSxVQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsbUJBQU8sUUFBUCxFQUFpQixJQUFqQixHQUF3QixtQkFBTyxPQUFQLEVBQWdCLElBQXhDLEdBQStDLENBQWhELENBQTNCOztBQUVBLFVBQUksQ0FBQyxPQUFMLEVBQWM7QUFDVjtBQUNIOztBQUVELFVBQUksZUFBSSxJQUFKLENBQVMsU0FBVCxDQUFtQixRQUFuQixDQUE0QixjQUE1QixDQUFKLEVBQWlEO0FBQzdDLFFBQUEsWUFBWSxHQUFHLFlBQVksR0FBRyxFQUE5QjtBQUNIOztBQUVELE1BQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxJQUFkLGNBQXlCLFlBQXpCO0FBQ0EsTUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLEtBQWQsYUFBeUIsT0FBTyxDQUFDLFdBQWpDO0FBQ0g7QUFyRmE7O0FBQ1Y7QUFDQTtBQUNILEM7O2VBcUZVLFE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZmOztBQUNBOztBQUNBOzs7Ozs7OztJQUVNLFUsR0FDRixzQkFBYztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxXQUlMLGlCQUFNO0FBQ1gsTUFBQSxLQUFJLENBQUMsUUFBTCxHQUFnQixJQUFJLG9CQUFKLEVBQWhCO0FBQ0EsTUFBQSxLQUFJLENBQUMsVUFBTCxHQUFrQixJQUFJLHNCQUFKLEVBQWxCO0FBQ0EsTUFBQSxLQUFJLENBQUMsT0FBTCxHQUFlLElBQUksbUJBQUosRUFBZjtBQUNIO0FBUmE7O0FBQ1Y7QUFDSCxDOztlQVNVLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQmY7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU0sa0IsR0FJRiw4QkFBYztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxXQVNMLGlCQUFNO0FBQUE7O0FBQ1gsNkNBQUEsS0FBSSxlQUFlLEtBQWYsQ0FBSjtBQUVBLDhDQUFJLFVBQUosQ0FBZSxvQkFBZixnRkFBcUMsT0FBckMsQ0FBNkMsVUFBQyxRQUFELEVBQWM7QUFDdkQsWUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDtBQUNBLFFBQUEsSUFBSSxDQUFDLFNBQUwsR0FBaUIsaUJBQWpCO0FBQ0EsUUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixVQUFsQixFQUE4QixDQUE5QjtBQUVBLFFBQUEsUUFBUSxDQUFDLG9CQUFULENBQThCLEdBQTlCLEVBQW1DLENBQW5DLEVBQXNDLFdBQXRDLENBQWtELElBQWxEO0FBQ0gsT0FORDtBQVFBLDZDQUFBLEtBQUksd0JBQ0EsbUJBQVEsa0JBQVIsSUFBOEIsTUFBOUIsNEJBQ00sZUFBSSxVQUFKLENBQWUsVUFEckIsMERBQ00sc0JBQTJCLGdCQUEzQixDQUE0QywrQkFBNUMsQ0FETiw2QkFFTSxlQUFJLFVBQUosQ0FBZSxVQUZyQiwyREFFTSx1QkFBMkIsZ0JBQTNCLENBQTRDLGtCQUE1QyxDQUhOLENBQUo7QUFJSDtBQXhCYTs7QUFBQTtBQUFBO0FBQUEsV0EwQlMsaUJBQU07QUFBQTs7QUFDekIsZ0NBQVMsUUFBUSxDQUFDLElBQWxCLEVBQXdCLGNBQXhCLEVBQXdDLE9BQXhDLHlDQUFpRCxLQUFqRDtBQUVBLCtDQUFJLFVBQUosQ0FBZSxVQUFmLGtGQUEyQixnQkFBM0IsQ0FBNEMsaUNBQTVDLEVBQStFLE9BQS9FLENBQXVGLFVBQUMsWUFBRCxFQUFrQjtBQUNyRyxRQUFBLFlBQVksQ0FBQyxnQkFBYixDQUE4QixPQUE5Qix5Q0FBdUMsS0FBdkM7QUFDSCxPQUZEO0FBSUEsTUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsT0FBMUIseUNBQW1DLEtBQW5DO0FBRUEsK0NBQUksVUFBSixDQUFlLFVBQWYsa0ZBQTJCLGdCQUEzQixDQUE0QyxPQUE1QyxFQUFxRCxVQUFDLEtBQUQsRUFBVztBQUM1RCxRQUFBLEtBQUssQ0FBQyxlQUFOO0FBQ0gsT0FGRDtBQUlBLE1BQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFFBQXhCLHlDQUFrQyxLQUFsQztBQUVBLDhDQUFJLFVBQUosQ0FBZSxZQUFmLGdGQUE2QixnQkFBN0IsQ0FBOEMsT0FBOUMseUNBQXVELEtBQXZEO0FBRUEsdUVBQUEsS0FBSSx1QkFBSixrRkFBMkIsT0FBM0IsQ0FBbUMsVUFBQyxnQkFBRCxFQUFzQjtBQUNyRCxRQUFBLGdCQUFnQixDQUFDLGdCQUFqQixDQUFrQyxPQUFsQyx5Q0FBMkMsS0FBM0M7QUFDSCxPQUZEO0FBSUEsTUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsU0FBMUIseUNBQXFDLEtBQXJDO0FBQ0g7QUFoRGE7O0FBQUE7QUFBQTtBQUFBLFdBa0RhLGVBQUMsS0FBRCxFQUFXO0FBQUE7O0FBQ2xDLE1BQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxNQUFBLEtBQUssQ0FBQyxlQUFOO0FBRUEsT0FBQyxDQUFDLGVBQUksVUFBSixDQUFlLFVBQWpCLElBQStCLHdCQUFZLGVBQUksVUFBSixDQUFlLFVBQTNCLEVBQXVDLEdBQXZDLENBQS9CO0FBQ0EsOENBQUksVUFBSixDQUFlLGFBQWYsZ0ZBQThCLFNBQTlCLENBQXdDLE1BQXhDLENBQStDLFFBQS9DO0FBQ0EsK0NBQUksVUFBSixDQUFlLFlBQWYsa0ZBQTZCLFNBQTdCLENBQXVDLE1BQXZDLENBQThDLFdBQTlDO0FBQ0EsK0NBQUksVUFBSixDQUFlLGFBQWYsa0ZBQThCLEtBQTlCO0FBQ0g7QUExRGE7O0FBQUE7QUFBQTtBQUFBLFdBNERNLGVBQUMsS0FBRCxFQUFXO0FBQUE7O0FBQzNCLE9BQUMsQ0FBQyxlQUFJLFVBQUosQ0FBZSxVQUFqQixJQUErQixvQkFBUSxlQUFJLFVBQUosQ0FBZSxVQUF2QixFQUFtQyxHQUFuQyxDQUEvQjtBQUNBLCtDQUFJLFVBQUosQ0FBZSxhQUFmLGtGQUE4QixTQUE5QixDQUF3QyxNQUF4QyxDQUErQyxRQUEvQztBQUNBLCtDQUFJLFVBQUosQ0FBZSxZQUFmLGtGQUE2QixTQUE3QixDQUF1QyxNQUF2QyxDQUE4QyxXQUE5QztBQUNIO0FBaEVhOztBQUFBO0FBQUE7QUFBQSxXQWtFSSxlQUFDLEtBQUQsRUFBVztBQUN6QixVQUFJLE1BQU0sQ0FBQyxVQUFQLElBQXFCLEdBQXpCLEVBQThCO0FBQzFCLCtDQUFBLEtBQUksb0JBQUosTUFBQSxLQUFJO0FBQ1A7QUFDSjtBQXRFYTs7QUFBQTtBQUFBO0FBQUEsV0F3RU0sZUFBQyxLQUFELEVBQVc7QUFDM0IsNkNBQUEsS0FBSSxlQUFlLHdDQUFDLEtBQUQsY0FBZixDQUFKO0FBQ0EsTUFBQSxLQUFLLENBQUMsYUFBTixDQUFvQixZQUFwQixDQUFpQyxlQUFqQyx5Q0FBa0QsS0FBbEQ7QUFDSDtBQTNFYTs7QUFBQTtBQUFBO0FBQUEsV0E2RWEsZUFBQyxLQUFELEVBQVc7QUFDbEMsTUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLE1BQUEsS0FBSyxDQUFDLGVBQU47QUFFQSxVQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxhQUEvQjtBQUNBLFVBQU0sUUFBUSxHQUNWLG1CQUFRLGtCQUFSLElBQThCLE1BQTlCLEdBQXVDLGdCQUFnQixDQUFDLFVBQXhELEdBQXFFLGdCQUFnQixDQUFDLFVBQWpCLENBQTRCLFVBRHJHO0FBRUEsVUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUF6Qjs7QUFFQSxVQUFJLEVBQUMsUUFBRCxhQUFDLFFBQUQsZUFBQyxRQUFRLENBQUUsU0FBVixDQUFvQixRQUFwQixDQUE2QixRQUE3QixDQUFELENBQUosRUFBNkM7QUFDekMsUUFBQSxRQUFRLENBQUMsU0FBVCxDQUFtQixHQUFuQixDQUF1QixRQUF2QjtBQUNBLDhCQUFVLE9BQVYsRUFBbUIsR0FBbkI7QUFDSCxPQUhELE1BR087QUFBQTs7QUFDSCxRQUFBLFFBQVEsQ0FBQyxTQUFULENBQW1CLE1BQW5CLENBQTBCLFFBQTFCO0FBQ0EsNEJBQVEsT0FBUixFQUFpQixHQUFqQjtBQUVBLGlDQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixnQ0FBMUIsaUZBQTZELE9BQTdELENBQXFFLFVBQUMsWUFBRCxFQUFrQjtBQUNuRixVQUFBLFlBQVksQ0FBQyxTQUFiLENBQXVCLE1BQXZCLENBQThCLFFBQTlCO0FBQ0EsOEJBQVEsWUFBWSxDQUFDLGFBQWIsQ0FBMkIsSUFBM0IsQ0FBUjtBQUNILFNBSEQ7QUFJSDtBQUNKO0FBbEdhOztBQUFBO0FBQUE7QUFBQSxXQXVHTyxlQUFDLEtBQUQsRUFBVztBQUFBOztBQUM1QixVQUFJLDRCQUFDLGVBQUksVUFBSixDQUFlLGFBQWhCLG1EQUFDLHVCQUE4QixTQUE5QixDQUF3QyxRQUF4QyxDQUFpRCxRQUFqRCxDQUFELENBQUosRUFBaUU7QUFDN0Q7QUFDSDs7QUFFRCxVQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTixLQUFrQixDQUFqQztBQUNBLFVBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUF2QjtBQUNBLFVBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFOLEtBQWtCLEVBQWpDO0FBQ0EsVUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU4sS0FBa0IsRUFBbkM7QUFFQSxVQUFNLFNBQVMsR0FBRyxlQUFJLFVBQUosQ0FBZSxhQUFqQztBQUVBLFVBQU0sV0FBVywwQkFBRyxlQUFJLFVBQUosQ0FBZSxHQUFsQix3REFBRyxvQkFBb0IsZ0JBQXBCLENBQXFDLHdDQUFyQyxDQUFwQjtBQUVBLFVBQU0sZUFBZSxHQUFHLFdBQVcsQ0FBQyxDQUFELENBQW5DO0FBQ0EsVUFBTSxjQUFjLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFaLEdBQXFCLENBQXRCLENBQWxDOztBQUVBLFVBQUksQ0FBQyxDQUFDLFNBQU4sRUFBaUI7QUFDYixRQUFBLFNBQVMsQ0FBQyxLQUFWLENBQWdCLE9BQWhCLEdBQTBCLEVBQTFCO0FBQ0g7O0FBRUQsVUFBSSxNQUFKLEVBQVk7QUFDUixRQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsK0NBQUEsS0FBSSxvQkFBSixNQUFBLEtBQUk7QUFDUDs7QUFFRCxVQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFpQyxRQUFqQyxDQUEwQyxpQkFBMUMsQ0FBaEIsRUFBOEU7QUFDMUUsUUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLFFBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkI7QUFDSDs7QUFFRCxVQUFJLENBQUMsUUFBRCxJQUFhLE1BQWIsSUFBdUIsY0FBYyxLQUFLLFFBQVEsQ0FBQyxhQUF2RCxFQUFzRTtBQUNsRSxRQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsUUFBQSxTQUFTLENBQUMsS0FBVixDQUFnQixPQUFoQixHQUEwQixxQ0FBMUI7QUFDQSxRQUFBLFNBQVMsQ0FBQyxLQUFWO0FBQ0g7O0FBRUQsVUFBSSxRQUFRLElBQUksTUFBWixJQUFzQixlQUFlLEtBQUssUUFBUSxDQUFDLGFBQXZELEVBQXNFO0FBQ2xFLFFBQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxRQUFBLFNBQVMsQ0FBQyxLQUFWLENBQWdCLE9BQWhCLEdBQTBCLHFDQUExQjtBQUNBLFFBQUEsU0FBUyxDQUFDLEtBQVY7QUFDSCxPQXpDMkIsQ0EyQzVCOzs7QUFDQSxVQUFJLE1BQU0sSUFBSSxlQUFlLEtBQUssY0FBbEMsRUFBa0Q7QUFDOUMsUUFBQSxLQUFLLENBQUMsY0FBTjtBQUNIO0FBQ0o7QUF0SmE7O0FBQ1YsTUFBSSxDQUFDLGVBQUksSUFBSixDQUFTLFNBQVQsQ0FBbUIsUUFBbkIsQ0FBNEIsaUJBQTVCLENBQUwsRUFBcUQ7QUFDakQ7QUFDSDs7QUFFRDtBQUNBO0FBQ0gsQzs7ZUFrSlUsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaktmOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU0sb0IsR0FDRixnQ0FBYztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxXQVNMLGlCQUFNO0FBQUE7O0FBQ1gsOENBQUksVUFBSixDQUFlLFVBQWYsMEdBQTJCLGdCQUEzQixDQUE0Qyw2QkFBNUMsbUZBQTRFLE9BQTVFLENBQW9GLFVBQUMsWUFBRCxFQUFrQjtBQUNsRyxRQUFBLFlBQVksQ0FBQyxrQkFBYixDQUFnQyxXQUFoQyxFQUE2QyxrREFBN0M7QUFDSCxPQUZEO0FBR0g7QUFiYTs7QUFBQTtBQUFBO0FBQUEsV0FlUyxpQkFBTTtBQUN6QixNQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4Qix5Q0FBa0MsS0FBbEM7QUFFQSxnQ0FBUyxRQUFRLENBQUMsSUFBbEIsRUFBd0IsY0FBeEIsRUFBd0MsT0FBeEMseUNBQWlELEtBQWpEO0FBRUEsTUFBQSxRQUFRLENBQ0gsZ0JBREwsQ0FFUSx1SkFGUixFQUlLLE9BSkwsQ0FJYSxVQUFDLFlBQUQsRUFBa0I7QUFDdkIsUUFBQSxZQUFZLENBQUMsZ0JBQWIsQ0FBOEIsT0FBOUIseUNBQXVDLEtBQXZDO0FBQ0EsUUFBQSxZQUFZLENBQUMsZ0JBQWIsQ0FBOEIsS0FBOUIseUNBQXFDLEtBQXJDO0FBQ0gsT0FQTDtBQVNBLE1BQUEsUUFBUSxDQUNILGdCQURMLENBRVEsa0tBRlIsRUFJSyxPQUpMLENBSWEsVUFBQyxZQUFELEVBQWtCO0FBQ3ZCLFFBQUEsWUFBWSxDQUFDLGdCQUFiLENBQThCLE9BQTlCLHlDQUF1QyxLQUF2QztBQUNILE9BTkw7QUFRQSxNQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixTQUExQix5Q0FBcUMsS0FBckM7QUFDSDtBQXRDYTs7QUFBQTtBQUFBO0FBQUEsV0F3Q08sZUFBQyxLQUFELEVBQVc7QUFBQTs7QUFDNUIsTUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLE1BQUEsS0FBSyxDQUFDLGVBQU47O0FBRUEscUJBQUksVUFBSixDQUFlLGFBQWYsQ0FBNkIsU0FBN0IsQ0FBdUMsR0FBdkMsQ0FBMkMsTUFBM0M7O0FBQ0EscUJBQUksVUFBSixDQUFlLFVBQWYsQ0FBMEIsU0FBMUIsQ0FBb0MsR0FBcEMsQ0FBd0MsUUFBeEM7O0FBQ0EsOENBQUksVUFBSixDQUFlLFlBQWYsZ0ZBQTZCLFNBQTdCLENBQXVDLEdBQXZDLENBQTJDLFdBQTNDO0FBRUEseUJBQU8sZUFBSSxVQUFKLENBQWUsVUFBdEI7QUFFQSxVQUFNLDZCQUE2QixHQUFHLGVBQUksSUFBSixDQUFTLFVBQS9DO0FBQ0EscUJBQUksSUFBSixDQUFTLEtBQVQsQ0FBZSxRQUFmLEdBQTBCLFFBQTFCO0FBQ0EsVUFBTSw0QkFBNEIsR0FBRyxlQUFJLElBQUosQ0FBUyxVQUE5QztBQUNBLHFCQUFJLElBQUosQ0FBUyxLQUFULENBQWUsV0FBZixHQUE2Qiw0QkFBNEIsR0FBRyw2QkFBL0IsR0FBK0QsSUFBNUY7O0FBRUEscUJBQUksVUFBSixDQUFlLFVBQWYsQ0FBMEIsYUFBMUIsQ0FBd0MsU0FBeEMsRUFBbUQsS0FBbkQ7QUFDSDtBQXhEYTs7QUFBQTtBQUFBO0FBQUEsV0EwRE0sZUFBQyxLQUFELEVBQVc7QUFDM0IsVUFBSSxLQUFLLENBQUMsYUFBTixDQUFvQixZQUFwQixDQUFpQyxNQUFqQyxFQUF5QyxTQUF6QyxDQUFtRCxDQUFuRCxFQUFzRCxDQUF0RCxNQUE2RCxHQUFqRSxFQUFzRTtBQUNsRSxRQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0g7O0FBRUQsNkNBQUEsS0FBSSxhQUFKLE1BQUEsS0FBSTtBQUNQO0FBaEVhOztBQUFBO0FBQUE7QUFBQSxXQWtFRCxpQkFBTTtBQUNmLFVBQUksb0JBQVEsZUFBSSxVQUFKLENBQWUsVUFBdkIsQ0FBSixFQUF3QztBQUFBOztBQUNwQyx1QkFBSSxVQUFKLENBQWUsYUFBZixDQUE2QixTQUE3QixDQUF1QyxNQUF2QyxDQUE4QyxNQUE5Qzs7QUFDQSx1QkFBSSxVQUFKLENBQWUsVUFBZixDQUEwQixTQUExQixDQUFvQyxNQUFwQyxDQUEyQyxRQUEzQzs7QUFFQSw0QkFBUSxlQUFJLFVBQUosQ0FBZSxVQUF2QjtBQUVBLHVCQUFJLElBQUosQ0FBUyxLQUFULENBQWUsUUFBZixHQUEwQixFQUExQjtBQUNBLHVCQUFJLElBQUosQ0FBUyxLQUFULENBQWUsV0FBZixHQUE2QixFQUE3QjtBQUVBLFFBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLHlDQUExQixFQUFxRSxPQUFyRSxDQUE2RSxVQUFDLFFBQUQsRUFBYztBQUN2RixVQUFBLFFBQVEsQ0FBQyxTQUFULENBQW1CLE1BQW5CLENBQTBCLFVBQTFCO0FBQ0gsU0FGRDtBQUlBLFFBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLG9DQUExQixFQUFnRSxPQUFoRSxDQUF3RSxVQUFDLE9BQUQsRUFBYTtBQUNqRiw4QkFBUSxPQUFSLEVBQWlCLEdBQWpCO0FBQ0gsU0FGRDtBQUlBLGlEQUFJLFVBQUosQ0FBZSxZQUFmLGtGQUE2QixTQUE3QixDQUF1QyxNQUF2QyxDQUE4QyxXQUE5QztBQUNIO0FBQ0o7QUF0RmE7O0FBQUE7QUFBQTtBQUFBLFdBd0ZJLGVBQUMsS0FBRCxFQUFXO0FBQ3pCLFVBQUksTUFBTSxDQUFDLFVBQVAsSUFBcUIsR0FBekIsRUFBOEI7QUFDMUIsK0NBQUEsS0FBSSxhQUFKLE1BQUEsS0FBSTtBQUNQO0FBQ0o7QUE1RmE7O0FBQUE7QUFBQTtBQUFBLFdBOEZTLGVBQUMsS0FBRCxFQUFXO0FBQzlCLE1BQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxNQUFBLEtBQUssQ0FBQyxlQUFOO0FBRUEsVUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLGFBQTNCO0FBQ0EsVUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQWIsQ0FBcUIsMkJBQXJCLENBQWpCO0FBQ0EsVUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBaEI7O0FBRUEsVUFBSSxFQUFFLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxPQUFqQyxLQUE2QyxNQUEvQyxDQUFKLEVBQTREO0FBQ3hELFFBQUEsUUFBUSxDQUFDLFNBQVQsQ0FBbUIsTUFBbkIsQ0FBMEIsVUFBMUI7QUFDQSw0QkFBUSxPQUFSLEVBQWlCLEdBQWpCO0FBQ0gsT0FIRCxNQUdPO0FBQ0gsUUFBQSxRQUFRLENBQUMsU0FBVCxDQUFtQixHQUFuQixDQUF1QixVQUF2QjtBQUNBLDhCQUFVLE9BQVYsRUFBbUIsR0FBbkI7QUFDSDtBQUNKO0FBN0dhOztBQUFBO0FBQUE7QUFBQSxXQWtITyxlQUFDLEtBQUQsRUFBVztBQUFBOztBQUM1QixVQUFJLDRCQUFDLGVBQUksVUFBSixDQUFlLFVBQWhCLG1EQUFDLHVCQUEyQixTQUEzQixDQUFxQyxRQUFyQyxDQUE4QyxRQUE5QyxDQUFELENBQUosRUFBOEQ7QUFDMUQ7QUFDSDs7QUFFRCxVQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTixLQUFrQixDQUFqQztBQUNBLFVBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUF2QjtBQUNBLFVBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFOLEtBQWtCLEVBQWpDO0FBQ0EsVUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU4sS0FBa0IsRUFBbkM7O0FBRUEsVUFBTSxTQUFTLEdBQUcsZUFBSSxVQUFKLENBQWUsVUFBZixDQUEwQixhQUExQixDQUF3QyxTQUF4QyxDQUFsQjs7QUFFQSxVQUFNLFdBQVcsR0FBRyxlQUFJLFVBQUosQ0FBZSxVQUFmLENBQ2YsYUFEZSxDQUNELEtBREMsRUFFZixnQkFGZSxDQUVFLHdDQUZGLENBQXBCOztBQUlBLFVBQU0sZUFBZSxHQUFHLFdBQVcsQ0FBQyxDQUFELENBQW5DO0FBQ0EsVUFBTSxjQUFjLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFaLEdBQXFCLENBQXRCLENBQWxDO0FBRUEsTUFBQSxTQUFTLENBQUMsS0FBVixDQUFnQixPQUFoQixHQUEwQixFQUExQjs7QUFFQSxVQUFJLE1BQUosRUFBWTtBQUNSLFFBQUEsS0FBSyxDQUFDLGNBQU47QUFDQSwrQ0FBQSxLQUFJLGFBQUosTUFBQSxLQUFJO0FBQ1A7O0FBRUQsVUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBaUMsUUFBakMsQ0FBMEMsaUJBQTFDLENBQWhCLEVBQThFO0FBQzFFLFFBQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxRQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCO0FBQ0g7O0FBRUQsVUFBSSxDQUFDLFFBQUQsSUFBYSxNQUFiLElBQXVCLGNBQWMsS0FBSyxRQUFRLENBQUMsYUFBdkQsRUFBc0U7QUFDbEUsUUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLFFBQUEsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIscUNBQTFCO0FBQ0EsUUFBQSxTQUFTLENBQUMsS0FBVjtBQUNIOztBQUVELFVBQUksUUFBUSxJQUFJLE1BQVosSUFBc0IsZUFBZSxLQUFLLFFBQVEsQ0FBQyxhQUF2RCxFQUFzRTtBQUNsRSxRQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsUUFBQSxTQUFTLENBQUMsS0FBVixDQUFnQixPQUFoQixHQUEwQixxQ0FBMUI7QUFDQSxRQUFBLFNBQVMsQ0FBQyxLQUFWO0FBQ0gsT0F6QzJCLENBMkM1Qjs7O0FBQ0EsVUFBSSxNQUFNLElBQUksZUFBZSxLQUFLLGNBQWxDLEVBQWtEO0FBQzlDLFFBQUEsS0FBSyxDQUFDLGNBQU47QUFDSDtBQUNKO0FBakthOztBQUNWLE1BQUksQ0FBQyxlQUFJLElBQUosQ0FBUyxTQUFULENBQW1CLFFBQW5CLENBQTRCLG1CQUE1QixDQUFMLEVBQXVEO0FBQ25EO0FBQ0g7O0FBRUQ7QUFDQTtBQUNILEM7O2VBNkpVLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDektmOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTSxpQixHQUtGLDZCQUFjO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFdBT0wsaUJBQU07QUFDWCw2Q0FBQSxLQUFJLGVBQWUsS0FBZixDQUFKO0FBRUEsNkNBQUEsS0FBSSxtQkFBSixNQUFBLEtBQUk7O0FBRUosVUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFULENBQXVCLDZCQUF2QixDQUFMLEVBQTREO0FBQ3hELFFBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLHdDQUExQixFQUFvRSxPQUFwRSxDQUE0RSxVQUFDLFlBQUQsRUFBa0I7QUFDMUYsVUFBQSxZQUFZLENBQUMsa0JBQWIsQ0FBZ0MsV0FBaEMsRUFBNkMsNkRBQTdDO0FBQ0gsU0FGRDtBQUdIOztBQUVELDZDQUFBLEtBQUksc0JBQ0EsbUJBQVEsa0JBQVIsSUFBOEIsTUFBOUIsR0FDTSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsMENBQTFCLENBRE4sR0FFTSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsNkJBQTFCLENBSE4sQ0FBSjtBQUlIO0FBdEJhOztBQUFBO0FBQUE7QUFBQSxXQXdCSyxpQkFBTTtBQUNyQixNQUFBLElBQUksT0FBSixDQUFTLGNBQVQsRUFBeUI7QUFDckIsUUFBQSxJQUFJLEVBQUUsTUFEZTtBQUVyQixRQUFBLE1BQU0sRUFBRSxtQkFBUSxVQUZLO0FBR3JCLFFBQUEsSUFBSSxFQUFFLG1CQUFRLFFBSE87QUFJckIsUUFBQSxRQUFRLEVBQUUsbUJBQVEsWUFKRztBQUtyQixRQUFBLEtBQUssRUFBRSxHQUxjO0FBTXJCLFFBQUEsUUFBUSxFQUFFLElBTlc7QUFPckIsUUFBQSxNQUFNLEVBQUUsTUFQYTtBQVFyQixRQUFBLElBQUksRUFBRSxPQVJlO0FBU3JCLFFBQUEsTUFUcUIsb0JBU1o7QUFBQTs7QUFDTCxVQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdDQUF2QixFQUF5RCxLQUF6RDtBQUVBLGtEQUFJLFVBQUosQ0FBZSxZQUFmLGdGQUE2QixTQUE3QixDQUF1QyxHQUF2QyxDQUEyQyxXQUEzQzs7QUFFQSx5QkFBSSxNQUFKLENBQVcsSUFBWCxDQUFnQixrQkFBaEIsQ0FBbUMsVUFBbkMsRUFBK0MscURBQS9DOztBQUVBLGNBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLHVCQUF2QixDQUFoQjtBQUVBLDZCQUFPLE9BQVA7QUFFQSxVQUFBLE9BQU8sQ0FBQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFDLEtBQUQsRUFBVztBQUN6QyxZQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsWUFBQSxLQUFLLENBQUMsZUFBTjtBQUVBLFlBQUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxNQUFYO0FBQ0gsV0FMRDtBQU1ILFNBMUJvQjtBQTJCckIsUUFBQSxPQTNCcUIscUJBMkJYO0FBQUE7O0FBQ04sbURBQUksVUFBSixDQUFlLFlBQWYsa0ZBQTZCLFNBQTdCLENBQXVDLE1BQXZDLENBQThDLFdBQTlDO0FBRUEsVUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsZ0RBQTFCLEVBQTRFLE9BQTVFLENBQW9GLFVBQUMsYUFBRCxFQUFtQjtBQUNuRyxZQUFBLGFBQWEsQ0FBQyxLQUFkLENBQW9CLE9BQXBCLEdBQThCLE1BQTlCO0FBQ0gsV0FGRDtBQUlBLFVBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLDJDQUExQixFQUF1RSxPQUF2RSxDQUErRSxVQUFDLGNBQUQsRUFBb0I7QUFDL0YsWUFBQSxjQUFjLENBQUMsU0FBZixDQUF5QixNQUF6QixDQUFnQyxRQUFoQztBQUNILFdBRkQ7QUFJQSxjQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBaEI7QUFFQSw4QkFBUSxPQUFSO0FBRUEsVUFBQSxVQUFVLENBQUMsWUFBTTtBQUNiLFlBQUEsT0FBTyxDQUFDLE1BQVI7QUFDSCxXQUZTLENBQVY7QUFHSDtBQTdDb0IsT0FBekI7QUFnREEsTUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsZ0NBQTFCLEVBQTRELE9BQTVELENBQW9FLFVBQUMsSUFBRCxFQUFVO0FBQzFFLFFBQUEsSUFBSSxDQUFDLFNBQUwsR0FBaUIsSUFBSSxDQUFDLFNBQUwsQ0FBZSxPQUFmLENBQXVCLHVCQUF2QixFQUFnRCxJQUFoRCxDQUFqQjtBQUNILE9BRkQ7QUFJQSxNQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixrQ0FBMUIsRUFBOEQsT0FBOUQsQ0FBc0UsVUFBQyxJQUFELEVBQVU7QUFDNUUsUUFBQSxJQUFJLENBQUMsU0FBTCxHQUFpQixJQUFJLENBQUMsU0FBTCxDQUFlLE9BQWYsQ0FBdUIsMEJBQXZCLEVBQW1ELE9BQW5ELENBQWpCO0FBQ0gsT0FGRDtBQUlBLDZDQUFBLEtBQUkseUJBQXlCLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdDQUF2QixDQUF6QixDQUFKO0FBQ0g7QUFsRmE7O0FBQUE7QUFBQTtBQUFBLFdBb0ZTLGlCQUFNO0FBQUE7O0FBQ3pCLCtDQUFJLFVBQUosQ0FBZSxZQUFmLGtGQUE2QixnQkFBN0IsQ0FBOEMsT0FBOUMseUNBQXVELEtBQXZEO0FBQ0EsdUVBQUEsS0FBSSx3QkFBSixrRkFBNEIsZ0JBQTVCLENBQTZDLE9BQTdDLHlDQUFzRCxLQUF0RDtBQUVBLHVFQUFBLEtBQUkscUJBQUosa0ZBQXlCLE9BQXpCLENBQWlDLFVBQUMsZ0JBQUQsRUFBc0I7QUFDbkQsUUFBQSxnQkFBZ0IsQ0FBQyxnQkFBakIsQ0FBa0MsT0FBbEMseUNBQTJDLEtBQTNDO0FBQ0EsUUFBQSxnQkFBZ0IsQ0FBQyxnQkFBakIsQ0FBa0MsVUFBbEMseUNBQThDLEtBQTlDO0FBQ0gsT0FIRDtBQUtBLGdDQUNJLFFBQVEsQ0FBQyxJQURiLEVBRUksOEdBRkosRUFHSSxPQUhKLHlDQUlJLEtBSko7QUFPQSxnQ0FDSSxRQUFRLENBQUMsSUFEYixFQUVJLDhHQUZKLEVBR0ksVUFISix5Q0FJSSxLQUpKO0FBT0EsK0JBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLGdDQUExQixpRkFBNkQsT0FBN0QsQ0FBcUUsVUFBQyxZQUFELEVBQWtCO0FBQ25GLFFBQUEsWUFBWSxDQUFDLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQUMsS0FBRCxFQUFXO0FBQzlDLFVBQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxVQUFBLEtBQUssQ0FBQyxlQUFOO0FBQ0gsU0FIRDtBQUlILE9BTEQ7QUFPQSxNQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixTQUExQix5Q0FBcUMsS0FBckM7QUFDQSxNQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4Qix5Q0FBa0MsS0FBbEM7QUFDSDtBQXBIYTs7QUFBQTtBQUFBO0FBQUEsV0FzSFMsZUFBQyxLQUFELEVBQVc7QUFDOUIsNkNBQUEsS0FBSSxlQUFlLHdDQUFDLEtBQUQsY0FBZixDQUFKO0FBQ0EsTUFBQSxLQUFLLENBQUMsYUFBTixDQUFvQixZQUFwQixDQUFpQyxlQUFqQyx5Q0FBa0QsS0FBbEQ7QUFDSDtBQXpIYTs7QUFBQTtBQUFBO0FBQUEsV0EySGdCLGVBQUMsS0FBRCxFQUFXO0FBQ3JDLE1BQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxNQUFBLEtBQUssQ0FBQyxlQUFOO0FBRUEsNkNBQUEsS0FBSSxhQUFKLE1BQUEsS0FBSTtBQUNKLDZDQUFBLEtBQUksd0JBQUosQ0FBMkIsU0FBM0IsQ0FBcUMsTUFBckMsQ0FBNEMsUUFBNUM7QUFDSDtBQWpJYTs7QUFBQTtBQUFBO0FBQUEsV0FtSWEsZUFBQyxLQUFELEVBQVc7QUFDbEMsTUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLE1BQUEsS0FBSyxDQUFDLGVBQU47QUFFQSxVQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxhQUEvQjtBQUNBLFVBQU0sUUFBUSxHQUNWLG1CQUFRLGtCQUFSLElBQThCLE1BQTlCLEdBQXVDLGdCQUFnQixDQUFDLFVBQXhELEdBQXFFLGdCQUFnQixDQUFDLFVBQWpCLENBQTRCLFVBRHJHO0FBRUEsVUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUF6Qjs7QUFFQSxVQUFJLEVBQUMsUUFBRCxhQUFDLFFBQUQsZUFBQyxRQUFRLENBQUUsU0FBVixDQUFvQixRQUFwQixDQUE2QixRQUE3QixDQUFELENBQUosRUFBNkM7QUFDekMsUUFBQSxRQUFRLENBQUMsU0FBVCxDQUFtQixHQUFuQixDQUF1QixRQUF2QjtBQUNBLDhCQUFVLE9BQVYsRUFBbUIsR0FBbkI7QUFDSCxPQUhELE1BR087QUFBQTs7QUFDSCxRQUFBLFFBQVEsQ0FBQyxTQUFULENBQW1CLE1BQW5CLENBQTBCLFFBQTFCO0FBQ0EsNEJBQVEsT0FBUixFQUFpQixHQUFqQjtBQUVBLGlDQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQiwyQ0FBMUIsaUZBQXdFLE9BQXhFLENBQWdGLFVBQUMsWUFBRCxFQUFrQjtBQUM5RixVQUFBLFlBQVksQ0FBQyxTQUFiLENBQXVCLE1BQXZCLENBQThCLFFBQTlCO0FBQ0EsOEJBQVEsWUFBWSxDQUFDLGFBQWIsQ0FBMkIsSUFBM0IsQ0FBUjtBQUNILFNBSEQ7QUFJSDtBQUNKO0FBeEphOztBQUFBO0FBQUE7QUFBQSxXQTBKSSxlQUFDLEtBQUQsRUFBVztBQUN6QixVQUFJLE1BQU0sQ0FBQyxVQUFQLElBQXFCLEdBQXpCLEVBQThCO0FBQzFCLCtDQUFBLEtBQUksYUFBSixNQUFBLEtBQUk7QUFDUDtBQUNKO0FBOUphOztBQUFBO0FBQUE7QUFBQSxXQW1LTyxlQUFDLEtBQUQsRUFBVztBQUM1QixVQUFJLENBQUMsZUFBSSxJQUFKLENBQVMsU0FBVCxDQUFtQixRQUFuQixDQUE0QixXQUE1QixDQUFMLEVBQStDO0FBQzNDO0FBQ0g7O0FBRUQsTUFBQSxLQUFLLENBQUMsZUFBTjtBQUVBLFVBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFOLEtBQWtCLENBQWpDO0FBQ0EsVUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQXZCO0FBQ0EsVUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU4sS0FBa0IsRUFBakM7QUFDQSxVQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTixLQUFrQixFQUFuQztBQUVBLFVBQU0sU0FBUywwQ0FBRyxLQUFILHdCQUFmO0FBRUEsVUFBTSxXQUFXLEdBQUcsUUFBUSxDQUN2QixhQURlLENBQ0QsT0FEQyxFQUVmLGdCQUZlLENBRUUsbURBRkYsQ0FBcEI7QUFJQSxVQUFNLGVBQWUsR0FBRyxXQUFXLENBQUMsQ0FBRCxDQUFuQztBQUNBLFVBQU0sY0FBYyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBWixHQUFxQixDQUF0QixDQUFsQztBQUVBLE1BQUEsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsRUFBMUI7O0FBRUEsVUFBSSxNQUFKLEVBQVk7QUFDUixRQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsK0NBQUEsS0FBSSxhQUFKLE1BQUEsS0FBSTtBQUNQOztBQUVELFVBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQWlDLFFBQWpDLENBQTBDLDRCQUExQyxDQUFoQixFQUF5RjtBQUNyRixRQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsUUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QjtBQUNIOztBQUVELFVBQUksQ0FBQyxRQUFELElBQWEsTUFBYixJQUF1QixjQUFjLEtBQUssUUFBUSxDQUFDLGFBQXZELEVBQXNFO0FBQ2xFLFFBQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxRQUFBLFNBQVMsQ0FBQyxLQUFWLENBQWdCLE9BQWhCLEdBQTBCLHFDQUExQjtBQUNBLFFBQUEsU0FBUyxDQUFDLEtBQVY7QUFDSDs7QUFFRCxVQUFJLFFBQVEsSUFBSSxNQUFaLElBQXNCLGVBQWUsS0FBSyxRQUFRLENBQUMsYUFBdkQsRUFBc0U7QUFDbEUsUUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLFFBQUEsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIscUNBQTFCO0FBQ0EsUUFBQSxTQUFTLENBQUMsS0FBVjtBQUNILE9BM0MyQixDQTZDNUI7OztBQUNBLFVBQUksTUFBTSxJQUFJLGVBQWUsS0FBSyxjQUFsQyxFQUFrRDtBQUM5QyxRQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0g7QUFDSjtBQXBOYTs7QUFBQTtBQUFBO0FBQUEsV0FzTkQsaUJBQU07QUFBQTs7QUFDZixNQUFBLElBQUksQ0FBQyxLQUFMLENBQVcsTUFBWDtBQUNBLCtDQUFJLFVBQUosQ0FBZSxZQUFmLGtGQUE2QixTQUE3QixDQUF1QyxNQUF2QyxDQUE4QyxXQUE5QztBQUNIO0FBek5hOztBQUNWLE1BQUksT0FBTyxtQkFBUSxVQUFmLEtBQThCLFdBQTlCLElBQTZDLGVBQUksSUFBSixDQUFTLFNBQVQsQ0FBbUIsUUFBbkIsQ0FBNEIsZ0JBQTVCLENBQWpELEVBQWdHO0FBQzVGO0FBQ0E7QUFDSDtBQUNKLEM7O2VBdU5VLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDck9mOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxnQixHQUdGLDRCQUFjO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFdBT0wsaUJBQU07QUFDWCw2Q0FBQSxLQUFJLG1CQUFtQixJQUFJLDJCQUFKLENBQW1CLGVBQUksTUFBSixDQUFXLHFCQUE5QixFQUFxRDtBQUN4RSxRQUFBLElBQUksRUFBRSxnQkFEa0U7QUFFeEUsUUFBQSxNQUFNLEVBQUUsYUFGZ0U7QUFHeEUsUUFBQSxNQUFNLEVBQUUsa0JBSGdFO0FBSXhFLFFBQUEsT0FBTyxFQUFFLHNCQUorRDtBQUt4RSxRQUFBLE9BQU8sRUFBRSxLQUwrRDtBQU14RSxRQUFBLE9BQU8sRUFBRSxJQU4rRDtBQU94RSxRQUFBLGVBQWUsRUFBRTtBQVB1RCxPQUFyRCxDQUFuQixDQUFKO0FBU0g7QUFqQmE7O0FBQUE7QUFBQTtBQUFBLFdBbUJTLGlCQUFNO0FBQ3pCLDZDQUFBLEtBQUksa0JBQUosQ0FBcUIsRUFBckIsQ0FBd0IsTUFBeEIsRUFBZ0MsVUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLFFBQXRCLEVBQWdDO0FBQUE7O0FBQzVELFlBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBTCxDQUFzQixhQUF0QixDQUFkOztBQUVBLFlBQUksS0FBSyxPQUFMLENBQWEsU0FBYixDQUF1QixRQUF2QixDQUFnQyxtQkFBaEMsQ0FBSixFQUEwRDtBQUN0RCxVQUFBLEtBQUssQ0FBQyxPQUFOLENBQWMsVUFBQyxJQUFELEVBQVU7QUFDcEIsZ0NBQVEsSUFBUjtBQUNILFdBRkQ7QUFHSDs7QUFFRCxRQUFBLFlBQVksQ0FBQyxLQUFELEVBQVEsWUFBTTtBQUN0QjtBQUNBLGNBQUksTUFBSSxDQUFDLE9BQUwsQ0FBYSxTQUFiLENBQXVCLFFBQXZCLENBQWdDLG1CQUFoQyxDQUFKLEVBQTBEO0FBQ3RELFlBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxXQUFkLENBQTBCLE1BQTFCLENBQWlDLFFBQWpDLENBQTBDLEtBQTFDLEVBRHNELENBR3REOztBQUNBLGdCQUFJLENBQUMsQ0FBQyxNQUFJLENBQUMsT0FBTCxDQUFhLGFBQWIsQ0FBMkIsaUJBQTNCLENBQU4sRUFBcUQ7QUFDakQsY0FBQSxVQUFVLENBQUMsWUFBTTtBQUNiLGdCQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsV0FBZCxDQUEwQixNQUExQixDQUFpQyxNQUFqQztBQUNILGVBRlMsRUFFUCxNQUFNLENBRkMsQ0FBVjtBQUdIO0FBQ0osV0FYcUIsQ0FhdEI7OztBQUNBLGNBQUksQ0FBQyxlQUFJLElBQUosQ0FBUyxTQUFULENBQW1CLFFBQW5CLENBQTRCLGdCQUE1QixDQUFMLEVBQW9EO0FBQ2hELFlBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxtQkFBZCxDQUFrQyxLQUFsQztBQUNILFdBaEJxQixDQWtCdEI7OztBQUNBLGNBQUksQ0FBQyxlQUFJLElBQUosQ0FBUyxTQUFULENBQW1CLFFBQW5CLENBQTRCLGFBQTVCLENBQUwsRUFBaUQ7QUFDN0MsWUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLFFBQWQsQ0FBdUIsS0FBdkIsQ0FBNkIsTUFBSSxDQUFDLE9BQUwsQ0FBYSxnQkFBYixDQUE4Qix3Q0FBOUIsQ0FBN0I7QUFDSDs7QUFFRCxjQUFJLENBQUMsUUFBUSxDQUFDLElBQVQsQ0FBYyxTQUFkLENBQXdCLFFBQXhCLENBQWlDLGFBQWpDLENBQUwsRUFBc0Q7QUFDbEQsWUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLFVBQWQsQ0FBeUIsdUJBQXpCO0FBQ0EsWUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLFVBQWQsQ0FBeUIsbUJBQXpCO0FBQ0gsV0ExQnFCLENBNEJ0Qjs7O0FBQ0EsVUFBQSxLQUFLLENBQUMsT0FBTixDQUFjLFVBQUMsSUFBRCxFQUFVO0FBQUE7O0FBQ3BCLHFDQUFBLElBQUksQ0FBQyxnQkFBTCxDQUFzQixLQUF0QixpRkFBOEIsT0FBOUIsQ0FBc0MsVUFBQyxHQUFELEVBQVM7QUFDM0MsY0FBQSxHQUFHLENBQUMsU0FBSixHQUFnQixHQUFHLENBQUMsU0FBcEI7QUFDSCxhQUZEO0FBR0gsV0FKRDtBQUtILFNBbENXLENBQVo7QUFtQ0gsT0E1Q0Q7QUE4Q0EsNkNBQUEsS0FBSSxrQkFBSixDQUFxQixFQUFyQixDQUF3QixRQUF4QixFQUFrQyxVQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsS0FBdEIsRUFBNkIsUUFBN0IsRUFBdUM7QUFDckUsWUFBSSxLQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLFFBQXZCLENBQWdDLG1CQUFoQyxDQUFKLEVBQTBEO0FBQ3RELFVBQUEsS0FBSyxDQUFDLE9BQU4sQ0FBYyxVQUFDLElBQUQsRUFBVTtBQUNwQiwrQkFBTyxJQUFQO0FBQ0gsV0FGRDtBQUdIO0FBQ0osT0FORDtBQU9IO0FBekVhOztBQUNWLE1BQUksQ0FBQyxDQUFDLGVBQUksTUFBSixDQUFXLGlCQUFiLElBQWtDLENBQUMsQ0FBQyxlQUFJLE1BQUosQ0FBVyxpQkFBWCxDQUE2QixhQUE3QixDQUEyQyxnQkFBM0MsQ0FBeEMsRUFBc0c7QUFDbEc7QUFDQTtBQUNIO0FBQ0osQzs7ZUF1RVUsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRmY7Ozs7Ozs7Ozs7SUFFTSxVLEdBQ0Ysc0JBQWM7QUFBQTs7QUFBQTtBQUFBLGtEQUlOLFlBQU07QUFDVixRQUFJLGVBQUksSUFBSixDQUFTLFNBQVQsQ0FBbUIsUUFBbkIsQ0FBNEIsYUFBNUIsQ0FBSixFQUFnRDtBQUM1QztBQUNIOztBQUVELDJDQUFBLEtBQUksb0JBQUosTUFBQSxLQUFJOztBQUNKLElBQUEsS0FBSSxDQUFDLHVCQUFMOztBQUNBLElBQUEsS0FBSSxDQUFDLG1CQUFMO0FBQ0gsR0FaYTtBQUFBLG9FQWNZLFlBQU07QUFBQTs7QUFDNUIsNkJBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLG1CQUExQixpRkFBZ0QsT0FBaEQsQ0FBd0QsVUFBQyxJQUFELEVBQVU7QUFDOUQsTUFBQSxJQUFJLENBQUMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQyxLQUFELEVBQVc7QUFDdEMsUUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLFFBQUEsS0FBSyxDQUFDLGVBQU47QUFDSCxPQUhEO0FBSUgsS0FMRDtBQU9BLElBQUEsTUFBTSxDQUFDLG1CQUFELENBQU4sQ0FBNEIsYUFBNUIsQ0FBMEM7QUFDdEMsTUFBQSxJQUFJLEVBQUUsT0FEZ0M7QUFFdEMsTUFBQSxTQUFTLEVBQUUsZUFGMkI7QUFJdEMsTUFBQSxJQUFJLEVBQUU7QUFDRixRQUFBLE9BQU8sRUFBRSxJQURQO0FBRUYsUUFBQSxRQUFRLEVBQUUsR0FGUjtBQUdGLFFBQUEsTUFBTSxFQUFFLGFBSE47QUFJRixRQUFBLE1BQU0sRUFBRSxnQkFBVSxhQUFWLEVBQXlCO0FBQzdCLGlCQUFPLGFBQWEsQ0FBQyxFQUFkLENBQWlCLEtBQWpCLElBQTBCLGFBQTFCLEdBQTBDLGFBQWEsQ0FBQyxJQUFkLENBQW1CLEtBQW5CLENBQWpEO0FBQ0g7QUFOQztBQUpnQyxLQUExQztBQWFILEdBbkNhO0FBQUEsZ0VBcUNRLFlBQU07QUFDeEIsSUFBQSxNQUFNLENBQUMsOENBQUQsQ0FBTixDQUF1RCxhQUF2RCxDQUFxRTtBQUNqRSxNQUFBLFFBQVEsRUFBRSxzQ0FEdUQ7QUFFakUsTUFBQSxJQUFJLEVBQUUsT0FGMkQ7QUFHakUsTUFBQSxTQUFTLEVBQUUsVUFIc0Q7QUFJakUsTUFBQSxPQUFPLEVBQUU7QUFDTCxRQUFBLE9BQU8sRUFBRTtBQURKO0FBSndELEtBQXJFO0FBUUgsR0E5Q2E7O0FBQUE7QUFBQTtBQUFBLFdBZ0RNLGlCQUFNO0FBQUE7O0FBQ3RCLGdDQUFBLFFBQVEsQ0FDSCxnQkFETCxDQUNzQixzRUFEdEIsbUZBRU0sT0FGTixDQUVjLFVBQUMsSUFBRCxFQUFVO0FBQ2hCLFlBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFMLENBQW1CLEtBQW5CLENBQU4sRUFBaUM7QUFDN0IsY0FBTSxZQUFZLDBDQUFHLEtBQUgsc0JBQUcsS0FBSCxDQUFsQjtBQUNBLGNBQUksZ0JBQWdCLEdBQUcsQ0FBdkI7QUFFQSxVQUFBLFlBQVksQ0FBQyxPQUFiLENBQXFCLFVBQUMsV0FBRCxFQUFpQjtBQUNsQyxZQUFBLGdCQUFnQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBTCxDQUFrQixNQUFsQixDQUFELENBQU4sQ0FBa0MsT0FBbEMsQ0FBMEMsTUFBTSxXQUFoRCxDQUFwQjtBQUNILFdBRkQ7O0FBSUEsY0FBSSxnQkFBZ0IsS0FBSyxDQUFDLEVBQTFCLEVBQThCO0FBQzFCLFlBQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxHQUFmLENBQW1CLGFBQW5CO0FBQ0g7O0FBRUQsY0FDSSxFQUNJLElBQUksQ0FBQyxTQUFMLENBQWUsUUFBZixDQUF3QixhQUF4QixLQUNBLElBQUksQ0FBQyxTQUFMLENBQWUsUUFBZixDQUF3QixrQkFBeEIsQ0FEQSxJQUVBLElBQUksQ0FBQyxVQUFMLENBQWdCLFNBQWhCLENBQTBCLFFBQTFCLENBQW1DLGNBQW5DLENBRkEsSUFHQSxJQUFJLENBQUMsU0FBTCxDQUFlLFFBQWYsQ0FBd0IsY0FBeEIsQ0FIQSxJQUlBLElBQUksQ0FBQyxTQUFMLENBQWUsUUFBZixDQUF3QixlQUF4QixDQUpBLElBS0EsSUFBSSxDQUFDLFVBQUwsQ0FBZ0IsU0FBaEIsQ0FBMEIsUUFBMUIsQ0FBbUMsb0NBQW5DLENBTEEsSUFNQSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQUwsQ0FBYSxtQkFBYixDQU5GLElBT0EsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFMLENBQWtCLDhCQUFsQixDQVBGLElBUUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxRQUFmLENBQXdCLDBCQUF4QixDQVJBLElBU0EsSUFBSSxDQUFDLFNBQUwsQ0FBZSxRQUFmLENBQXdCLFNBQXhCLENBVkosQ0FESixFQWFFO0FBQ0UsWUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLEdBQWYsQ0FBbUIsa0JBQW5CO0FBQ0g7O0FBRUQsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFMLENBQWUsUUFBZixDQUF3QixhQUF4QixDQUFMLEVBQTZDO0FBQ3pDLGdCQUFJLElBQUksQ0FBQyxVQUFMLENBQWdCLFNBQWhCLENBQTBCLFFBQTFCLENBQW1DLGNBQW5DLEtBQXNELENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTCxDQUFhLG1CQUFiLENBQTVELEVBQStGO0FBQzNGLGNBQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxHQUFmLENBQW1CLGtCQUFuQjtBQUNIO0FBQ0o7QUFDSjtBQUNKLE9BdENMO0FBdUNIO0FBeEZhOztBQUFBO0FBQUE7QUFBQSxXQTBGRSxpQkFBTTtBQUNsQixhQUFPLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxNQUFmLEVBQXVCLEtBQXZCLEVBQThCLEtBQTlCLEVBQXFDLE1BQXJDLEVBQTZDLEtBQTdDLEVBQW9ELE1BQXBELEVBQTRELEtBQTVELEVBQW1FLEtBQW5FLEVBQTBFLEtBQTFFLEVBQWlGLEtBQWpGLEVBQXdGLE1BQXhGLENBQVA7QUFDSDtBQTVGYTs7QUFDVixPQUFLLEtBQUw7QUFDSCxDOztlQTZGVSxVOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHZjs7SUFFTSxRLEdBR0Ysb0JBQWM7QUFBQTs7QUFBQTtBQUFBO0FBQUEsa0RBSU4sWUFBb0Y7QUFBQSxRQUFuRixRQUFtRix1RUFBeEUsUUFBUSxDQUFDLGdCQUFULENBQTBCLHdDQUExQixDQUF3RTtBQUN4RixJQUFBLEtBQUksQ0FBQyxRQUFMLEdBQWdCLEVBQWhCO0FBRUEsSUFBQSxRQUFRLFNBQVIsSUFBQSxRQUFRLFdBQVIsWUFBQSxRQUFRLENBQUUsT0FBVixDQUFrQixVQUFDLE9BQUQsRUFBYTtBQUMzQixVQUFNLFFBQVEsR0FBRyxJQUFJLFFBQUosQ0FBYSxPQUFiLEVBQXNCO0FBQ25DLFFBQUEsUUFBUSxFQUFFLE9BQU8sQ0FBQyxTQUFSLENBQWtCLFFBQWxCLENBQTJCLGlCQUEzQixJQUFnRCxLQUFoRCxHQUF3RCxJQUQvQjtBQUVuQyxRQUFBLFdBQVcsRUFBRSxlQUFJLElBQUosQ0FBUyxTQUFULENBQW1CLFFBQW5CLENBQTRCLEtBQTVCLElBQXFDLElBQXJDLEdBQTRDLEtBRnRCO0FBR25DLFFBQUEsWUFBWSxFQUFFLElBSHFCO0FBSW5DO0FBQ0EsUUFBQSxRQUFRLEVBQUUsS0FMeUI7QUFNbkMsUUFBQSxFQUFFLEVBQUU7QUFDQSxVQUFBLEtBQUssRUFBRSxpQkFBTTtBQUNULFlBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLENBQXhCO0FBQ0EsWUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLFVBQWQsR0FBMkIsU0FBM0I7QUFDQSxZQUFBLE9BQU8sQ0FBQyxLQUFSLENBQWMsTUFBZCxHQUF1QixNQUF2QjtBQUNIO0FBTEQ7QUFOK0IsT0FBdEIsQ0FBakI7O0FBZUEsTUFBQSxLQUFJLENBQUMsUUFBTCxDQUFjLElBQWQsQ0FBbUIsUUFBbkI7QUFDSCxLQWpCRDtBQWtCSCxHQXpCYTtBQUNWLE9BQUssS0FBTDtBQUNILEM7O2VBMEJVLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ2Y7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTSxZLEdBSUYsd0JBQWM7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsV0FGRztBQUVIOztBQUFBO0FBQUE7QUFBQSxXQU1TLGlCQUFNO0FBQ3pCLE1BQUEsUUFBUSxDQUNILGdCQURMLENBRVEsa01BRlIsRUFJSyxPQUpMLENBSWEsVUFBQyxVQUFELEVBQWdCO0FBQ3JCLFFBQUEsVUFBVSxDQUFDLGdCQUFYLENBQTRCLE9BQTVCLHlDQUFxQyxLQUFyQztBQUNILE9BTkw7QUFPSDtBQWRhOztBQUFBO0FBQUE7QUFBQSxXQWdCTyxlQUFDLEtBQUQsRUFBVztBQUM1QixVQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsYUFBekI7O0FBRUEsVUFBSSxVQUFVLENBQUMsU0FBWCxDQUFxQixRQUFyQixDQUE4Qix1QkFBOUIsS0FBMEQsVUFBVSxDQUFDLFNBQVgsQ0FBcUIsUUFBckIsQ0FBOEIsYUFBOUIsQ0FBOUQsRUFBNEc7QUFDeEc7QUFDSDs7QUFFRCxVQUNJLENBQUMsVUFBVSxDQUFDLFNBQVgsQ0FBcUIsUUFBckIsQ0FBOEIsZ0JBQTlCLENBQUQsSUFDQSxDQUFDLFVBQVUsQ0FBQyxPQUFYLENBQW1CLGlCQUFuQixDQURELElBRUEsQ0FBQyxVQUFVLENBQUMsU0FBWCxDQUFxQixRQUFyQixDQUE4QixVQUE5QixDQUZELElBR0EsQ0FBQyxVQUFVLENBQUMsVUFBWCxDQUFzQixTQUF0QixDQUFnQyxRQUFoQyxDQUF5QyxVQUF6QyxDQUhELElBSUEsQ0FBQyxVQUFVLENBQUMsU0FBWCxDQUFxQixRQUFyQixDQUE4QixxQkFBOUIsQ0FKRCxJQUtBLENBQUMsVUFBVSxDQUFDLFVBQVgsQ0FBc0IsU0FBdEIsQ0FBZ0MsUUFBaEMsQ0FBeUMscUJBQXpDLENBTkwsRUFPRTtBQUNFLFlBQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxZQUFYLENBQXdCLE1BQXhCLENBQWI7QUFDQSxZQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBTCxDQUFlLElBQUksQ0FBQyxPQUFMLENBQWEsR0FBYixDQUFmLEVBQWtDLEtBQWxDLENBQXdDLENBQXhDLENBQVg7O0FBRUEsWUFBSSx1Q0FBb0IsRUFBcEIsRUFBSixFQUErQjtBQUMzQixpREFBQSxLQUFJLGVBQWUsUUFBUSxDQUFDLGFBQVQsWUFBMkIsRUFBM0IsRUFBZixDQUFKO0FBQ0g7O0FBRUQsWUFBSSxFQUFFLElBQUksRUFBTixJQUFZLENBQUMsd0NBQUMsS0FBRCxjQUFqQixFQUFvQztBQUFBOztBQUNoQyxVQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsVUFBQSxLQUFLLENBQUMsZUFBTjtBQUVBLGNBQUksY0FBYyxHQUNkLDBEQUFPLEtBQVAsZ0JBQXlCLEdBQXpCLDBDQUNBLEtBREEsMkJBQ0EsS0FEQSwyQ0FFQSxLQUZBLHlCQUVBLEtBRkEsMkNBR0EsS0FIQSwrQkFHQSxLQUhBLENBREo7O0FBTUEsY0FDSSwyQkFBQyxRQUFRLENBQUMsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FBRCxrREFBQyxzQkFBdUQsU0FBdkQsQ0FBaUUsUUFBakUsQ0FBMEUsV0FBMUUsQ0FBRCxNQUNDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FBRixJQUNHLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBVCxDQUF1Qix3QkFBdkIsQ0FETCxJQUVHLENBQUMsNEJBQUMsUUFBUSxDQUNMLGFBREgsQ0FDaUIseUJBRGpCLENBQUQsbURBQUMsdUJBRUksaUJBRkosQ0FFc0IsU0FGdEIsQ0FFZ0MsUUFGaEMsQ0FFeUMsa0JBRnpDLENBQUQsQ0FITCxLQU1BLENBQUMsQ0FBQyxlQUFJLE1BQUosQ0FBVyxJQU5iLElBT0EsQ0FBQyxlQUFJLE1BQUosQ0FBVyxJQUFYLENBQWdCLFNBQWhCLENBQTBCLFFBQTFCLENBQW1DLFlBQW5DLENBUEQsSUFRQSxDQUFDLGVBQUksTUFBSixDQUFXLElBQVgsQ0FBZ0IsU0FBaEIsQ0FBMEIsUUFBMUIsQ0FBbUMsZUFBbkMsQ0FSRCxJQVNBLENBQUMsZUFBSSxNQUFKLENBQVcsSUFBWCxDQUFnQixTQUFoQixDQUEwQixRQUExQixDQUFtQyxpQkFBbkMsQ0FWTCxFQVdFO0FBQ0UsWUFBQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsUUFBeEIseUNBQWtDLEtBQWxDO0FBQ0g7O0FBRUQseUJBQUksSUFBSixDQUFTLFFBQVQsQ0FBa0I7QUFDZCxZQUFBLEdBQUcsRUFBRSxjQURTO0FBRWQsWUFBQSxRQUFRLEVBQUU7QUFGSSxXQUFsQjtBQUlIO0FBQ0o7QUFDSjtBQXJFYTs7QUFBQTtBQUFBO0FBQUEsV0F1RU87QUFBQSxhQUFPLENBQUMsQ0FBQyxlQUFJLFVBQU4sR0FBbUIsZUFBSSxVQUFKLENBQWUsWUFBbEMsR0FBaUQsQ0FBeEQ7QUFBQTtBQXZFUDs7QUFBQTtBQUFBO0FBQUEsV0F5RUs7QUFBQSxhQUNmLENBQUMsQ0FBQyxlQUFJLE1BQUosQ0FBVyxhQUFiLElBQThCLGVBQUksTUFBSixDQUFXLGFBQVgsQ0FBeUIsU0FBekIsQ0FBbUMsUUFBbkMsQ0FBNEMsZ0JBQTVDLENBQTlCLEdBQ00sZUFBSSxNQUFKLENBQVcsYUFBWCxDQUF5QixZQUQvQixHQUVNLENBSFM7QUFBQTtBQXpFTDs7QUFBQTtBQUFBO0FBQUEsV0E4RVcsaUJBQTJCO0FBQUE7O0FBQUEsVUFBMUIsYUFBMEIsdUVBQVYsS0FBVTtBQUNoRCxVQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1Qiw2QkFBdkIsQ0FBckI7O0FBRUEsVUFBSSxDQUFDLENBQUMsWUFBTixFQUFvQjtBQUFBOztBQUNoQixZQUFJLFlBQVksQ0FBQyxTQUFiLENBQXVCLFFBQXZCLENBQWdDLFdBQWhDLEtBQWdELENBQUMsYUFBckQsRUFBb0U7QUFDaEUsaUJBQU8sZUFBSSxNQUFKLENBQVcsSUFBWCxDQUFnQixZQUF2QjtBQUNIOztBQUVELGdDQUFJLGVBQUksTUFBSixDQUFXLElBQWYsNkNBQUksaUJBQWlCLFNBQWpCLENBQTJCLFFBQTNCLENBQW9DLFlBQXBDLENBQUosRUFBdUQ7QUFDbkQsaUJBQU8sTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsZ0JBQWdCLENBQUMsWUFBRCxDQUFoQixDQUErQixNQUEvQyxDQUFQO0FBQ0g7O0FBRUQsaUNBQUksZUFBSSxNQUFKLENBQVcsSUFBZiw4Q0FBSSxrQkFBaUIsU0FBakIsQ0FBMkIsUUFBM0IsQ0FBb0MsZUFBcEMsQ0FBSixFQUEwRDtBQUN0RCxjQUFJLE1BQU0sR0FBRyxDQUFiOztBQUNBLGNBQU0sSUFBSSxHQUFHLGVBQUksTUFBSixDQUFXLElBQVgsQ0FBZ0IsYUFBaEIsQ0FBOEIscUJBQTlCLENBQWI7O0FBRUEsY0FBSSxJQUFJLENBQUMsU0FBTCxDQUFlLFFBQWYsQ0FBd0IsY0FBeEIsQ0FBSixFQUE2QztBQUN6QyxZQUFBLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBZDtBQUNILFdBRkQsTUFFTyxJQUFJLGVBQUksTUFBSixDQUFXLElBQVgsQ0FBZ0IsU0FBaEIsQ0FBMEIsUUFBMUIsQ0FBbUMsYUFBbkMsQ0FBSixFQUF1RDtBQUMxRCxZQUFBLE1BQU0sR0FBRyxlQUFJLE1BQUosQ0FBVyxJQUFYLENBQWdCLE9BQWhCLENBQXdCLE1BQWpDO0FBQ0gsV0FGTSxNQUVBO0FBQ0gsWUFBQSxNQUFNLEdBQUcsZUFBSSxNQUFKLENBQVcsSUFBWCxDQUFnQixZQUF6QjtBQUNIOztBQUVELGlCQUFPLE1BQVA7QUFDSDs7QUFFRCxpQ0FBSSxlQUFJLE1BQUosQ0FBVyxJQUFmLDhDQUFJLGtCQUFpQixTQUFqQixDQUEyQixRQUEzQixDQUFvQyxjQUFwQyxDQUFKLEVBQXlEO0FBQ3JELGlCQUFPLGVBQUksTUFBSixDQUFXLElBQVgsQ0FBZ0IsWUFBdkI7QUFDSDs7QUFFRCxpQ0FBSSxlQUFJLE1BQUosQ0FBVyxJQUFmLDhDQUFJLGtCQUFpQixTQUFqQixDQUEyQixRQUEzQixDQUFvQyxXQUFwQyxDQUFKLEVBQXNEO0FBQ2xELGlCQUFPLENBQVA7QUFDSDs7QUFFRCw2REFBTyxlQUFJLE1BQUosQ0FBVyxJQUFsQixzREFBTyxrQkFBaUIsT0FBakIsQ0FBeUIsTUFBaEMseUVBQTBDLEVBQTFDO0FBQ0g7O0FBRUQsVUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsd0JBQXZCLENBQU4sRUFBd0Q7QUFDcEQsZUFBTyxRQUFRLENBQUMsYUFBVCxDQUF1Qix3QkFBdkIsRUFBaUQsWUFBeEQ7QUFDSDs7QUFFRCxVQUNJLENBQUMsZUFBSSxNQUFKLENBQVcsSUFBWixJQUNBLENBQUMsNEJBQUMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIseUJBQXZCLENBQUQsbURBQUMsdUJBQW1ELGlCQUFuRCxDQUFxRSxTQUFyRSxDQUErRSxRQUEvRSxDQUF3RixrQkFBeEYsQ0FBRCxDQUZMLEVBR0U7QUFBQTs7QUFDRSx5Q0FBTyxRQUFRLENBQUMsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBUCwyREFBTyx1QkFBbUQsaUJBQW5ELENBQXFFLFlBQTVFO0FBQ0g7O0FBRUQsYUFBTyxDQUFQO0FBQ0g7QUFoSWE7O0FBQUE7QUFBQTtBQUFBLFdBa0lFLGVBQUMsS0FBRCxFQUFXO0FBQ3ZCLFVBQU0sV0FBVyxHQUNiLDBEQUFPLEtBQVAsZ0JBQXlCLEdBQXpCLDBDQUNBLEtBREEsMkJBQ0EsS0FEQSwyQ0FFQSxLQUZBLHlCQUVBLEtBRkEsMkNBR0EsS0FIQSwrQkFHQSxLQUhBLEVBRzRCLElBSDVCLENBREo7O0FBTUEsVUFBSSxNQUFNLENBQUMsV0FBUCxDQUFtQixPQUFuQixPQUFpQyxXQUFXLENBQUMsT0FBWixFQUFyQyxFQUE0RDtBQUFBOztBQUN4RCxRQUFBLE1BQU0sQ0FBQyxtQkFBUCxDQUEyQixRQUEzQix5Q0FBcUMsS0FBckM7O0FBRUEsWUFBSSxxQ0FBSSxNQUFKLENBQVcsSUFBWCx3RUFBaUIsWUFBakIsSUFBZ0MsQ0FBaEMsMENBQW9DLEtBQXBDLCtCQUFvQyxLQUFwQyxFQUFnRSxJQUFoRSxDQUFKLEVBQTJFO0FBQUE7O0FBQ3ZFLGNBQU0sY0FBYyxHQUNoQiwwREFBTyxLQUFQLGdCQUF5QixHQUF6QiwwQ0FDQSxLQURBLDJCQUNBLEtBREEsMkNBRUEsS0FGQSx5QkFFQSxLQUZBLDBCQUdBLGVBQUksTUFBSixDQUFXLElBSFgsc0RBR0Esa0JBQWlCLFlBSGpCLENBREo7O0FBTUEseUJBQUksSUFBSixDQUFTLFFBQVQsQ0FBa0I7QUFDZCxZQUFBLEdBQUcsRUFBRSxjQURTO0FBRWQsWUFBQSxRQUFRLEVBQUUsTUFBTSxDQUFDLFdBQVAsMENBQXFCLEtBQXJCLG9CQUEyQyxRQUEzQyxHQUFzRDtBQUZsRCxXQUFsQjs7QUFLQSxpREFBQSxLQUFJLGtCQUFrQixNQUFNLENBQUMsV0FBekIsQ0FBSjtBQUNIO0FBQ0o7QUFDSjtBQTNKYTs7QUFDVixNQUFJLENBQUMsZUFBSSxJQUFKLENBQVMsU0FBVCxDQUFtQixRQUFuQixDQUE0QixnQkFBNUIsQ0FBRCxJQUFrRCxDQUFDLGVBQUksSUFBSixDQUFTLFNBQVQsQ0FBbUIsUUFBbkIsQ0FBNEIsaUJBQTVCLENBQXZELEVBQXVHO0FBQ25HO0FBQ0g7QUFDSixDOztlQTBKVSxZOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JLZjs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsUyxHQUNqQixxQkFBYztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxXQUtMLGlCQUFNLENBQUU7QUFMSDs7QUFBQTtBQUFBO0FBQUEsV0FPUyxpQkFBTTtBQUFBOztBQUN6QixNQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixRQUF4Qix5Q0FBa0MsS0FBbEM7QUFDQSw4Q0FBSSxNQUFKLENBQVcsU0FBWCxnRkFBc0IsZ0JBQXRCLENBQXVDLE9BQXZDLHlDQUFnRCxLQUFoRDtBQUNBLDBDQUFJLE1BQUosQ0FBVyxLQUFYLHdFQUFrQixnQkFBbEIsQ0FBbUMsT0FBbkMseUNBQTRDLEtBQTVDO0FBQ0EsOENBQUksTUFBSixDQUFXLFVBQVgsZ0ZBQXVCLGdCQUF2QixDQUF3QyxPQUF4Qyx5Q0FBaUQsS0FBakQ7QUFDSDtBQVphOztBQUFBO0FBQUE7QUFBQSxXQWNJLGVBQUMsS0FBRCxFQUFXO0FBQ3pCLFVBQUksQ0FBQyxlQUFJLE1BQUosQ0FBVyxTQUFoQixFQUEyQjtBQUN2QjtBQUNIOztBQUVELFVBQUksTUFBTSxDQUFDLFdBQVAsR0FBcUIsR0FBekIsRUFBOEI7QUFDMUIsWUFBSSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsZUFBSSxNQUFKLENBQVcsU0FBbkMsRUFBOEMsT0FBOUMsS0FBMEQsTUFBOUQsRUFBc0U7QUFDbEUsNkJBQU8sZUFBSSxNQUFKLENBQVcsU0FBbEI7QUFDSDtBQUNKLE9BSkQsTUFJTyxJQUFJLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixlQUFJLE1BQUosQ0FBVyxTQUFuQyxFQUE4QyxPQUE5QyxLQUEwRCxNQUE5RCxFQUFzRTtBQUN6RSw0QkFBUSxlQUFJLE1BQUosQ0FBVyxTQUFuQjtBQUNIO0FBQ0o7QUExQmE7O0FBQUE7QUFBQTtBQUFBLFdBNEJNLGVBQUMsS0FBRCxFQUFXO0FBQUE7O0FBQzNCLE1BQUEsS0FBSyxDQUFDLGNBQU47QUFFQSxVQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsYUFBeEI7O0FBRUEscUJBQUksSUFBSixDQUFTLFFBQVQsQ0FBa0I7QUFDZCxRQUFBLEdBQUcsRUFBRSxDQURTO0FBRWQsUUFBQSxRQUFRLEVBQUU7QUFGSSxPQUFsQjs7QUFLQSwrQkFBQSxTQUFTLENBQUMsVUFBVixnRkFBc0IsU0FBdEIsQ0FBZ0MsTUFBaEMsQ0FBdUMsU0FBdkM7QUFDSDtBQXZDYTs7QUFDVjtBQUNBO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQTDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU0sTSxHQUdGLGtCQUFjO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsV0FLTCxpQkFBTTtBQUFBOztBQUNYLE1BQUEsS0FBSSxDQUFDLFFBQUwsR0FBZ0IsSUFBSSxvQkFBSixFQUFoQjtBQUNBLE1BQUEsS0FBSSxDQUFDLGFBQUwsR0FBcUIsSUFBSSx5QkFBSixFQUFyQjtBQUNBLE1BQUEsS0FBSSxDQUFDLE9BQUwsR0FBZSxJQUFJLG1CQUFKLEVBQWY7QUFDQSxNQUFBLEtBQUksQ0FBQyxnQkFBTCxHQUF3QixJQUFJLDRCQUFKLEVBQXhCO0FBRUEsTUFBQSxLQUFJLENBQUMsa0JBQUwsR0FBMEIsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsOEJBQXZCLENBQTFCOztBQUVBLHFCQUFJLE1BQUosQ0FBVyxLQUFYLENBQWlCLE9BQWpCLENBQXlCLFVBQUMsSUFBRCxFQUFVO0FBQUE7O0FBQy9CLG1DQUFJLElBQUksQ0FBQyxhQUFMLENBQW1CLE9BQW5CLENBQUosZ0RBQUksb0JBQTZCLEtBQWpDLEVBQXdDO0FBQ3BDLFVBQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxHQUFmLENBQW1CLGVBQW5CO0FBQ0g7QUFDSixPQUpEOztBQU1BLFVBQUksQ0FBQywyQkFBQyxLQUFJLENBQUMsa0JBQU4sa0RBQUMsc0JBQXlCLEtBQTFCLENBQUwsRUFBc0M7QUFDbEMsUUFBQSxLQUFJLENBQUMsa0JBQUwsQ0FBd0IsT0FBeEIsQ0FBZ0MsTUFBaEMsRUFBd0MsU0FBeEMsQ0FBa0QsR0FBbEQsQ0FBc0QsZUFBdEQ7QUFDSDtBQUNKO0FBdEJhOztBQUFBO0FBQUE7QUFBQSxXQXdCUyxpQkFBTTtBQUFBOztBQUN6QixxQkFBSSxNQUFKLENBQVcsS0FBWCxDQUFpQixPQUFqQixDQUF5QixVQUFDLElBQUQsRUFBVTtBQUFBOztBQUMvQixnQ0FBQSxJQUFJLENBQUMsYUFBTCxDQUFtQixPQUFuQiwrRUFBNkIsZ0JBQTdCLENBQThDLE9BQTlDLHlDQUF1RCxLQUF2RDtBQUNBLGdDQUFBLElBQUksQ0FBQyxhQUFMLENBQW1CLE9BQW5CLCtFQUE2QixnQkFBN0IsQ0FBOEMsTUFBOUMseUNBQXNELEtBQXREO0FBQ0gsT0FIRDs7QUFLQSxnQ0FBQSxLQUFJLENBQUMsa0JBQUwsa0ZBQXlCLGdCQUF6QixDQUEwQyxPQUExQyx5Q0FBbUQsS0FBbkQ7QUFDQSxnQ0FBQSxLQUFJLENBQUMsa0JBQUwsa0ZBQXlCLGdCQUF6QixDQUEwQyxNQUExQyx5Q0FBa0QsS0FBbEQ7QUFDSDtBQWhDYTs7QUFBQTtBQUFBO0FBQUEsV0FrQ0UsZUFBQyxLQUFELEVBQVc7QUFDdkIsVUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLGFBQXBCO0FBQ0EsVUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU4sQ0FBYyxNQUFkLENBQWI7O0FBRUEsVUFBSSxLQUFLLENBQUMsS0FBVixFQUFpQjtBQUNiLFFBQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxHQUFmLENBQW1CLGVBQW5CO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsUUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLE1BQWYsQ0FBc0IsZUFBdEI7QUFDSDtBQUNKO0FBM0NhOztBQUNWO0FBQ0E7QUFDSCxDOztlQTJDVSxNOzs7Ozs7Ozs7Ozs7Ozs7OztJQ3ZEVCxVOztrREFDTSxVQUFDLElBQUQsRUFBTyxVQUFQLEVBQXNCO0FBQzFCLFFBQUksc0JBQXNCLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUQsQ0FBaEIsQ0FBdUIsa0JBQXZCLENBQTBDLE9BQTFDLENBQWtELEdBQWxELEVBQXVELEVBQXZELENBQUQsQ0FBVixHQUF5RSxJQUF0RztBQUVBLElBQUEsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDLHNCQUFGLEdBQTJCLHNCQUEzQixHQUFvRCxHQUE3RTs7QUFFQSxRQUFJLHNCQUFKLEVBQTRCO0FBQ3hCLE1BQUEsVUFBVSxDQUFDLFlBQVk7QUFDbkIsUUFBQSxJQUFJLENBQUMsYUFBTCxDQUFtQixVQUFuQixFQUErQixLQUEvQjtBQUNILE9BRlMsRUFFUCxzQkFGTyxDQUFWO0FBR0g7QUFDSixHOzs7ZUFHVSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGY7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTSxjOzs7OztBQUNGLDRCQUFjO0FBQUE7O0FBQUE7QUFDVjs7QUFEVTtBQUFBO0FBQUEsYUFVUyxpQkFBTTtBQUFBOztBQUN6QixnREFBSSxNQUFKLENBQVcsUUFBWCxDQUFvQixlQUFwQixnRkFBcUMsZ0JBQXJDLENBQXNELE9BQXREO0FBQ0EsUUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsT0FBMUI7QUFDSDtBQWJhOztBQUFBO0FBQUE7QUFBQSxhQWVZLGVBQUMsS0FBRCxFQUFXO0FBQ2pDLFFBQUEsS0FBSyxDQUFDLGNBQU47QUFDQSxRQUFBLEtBQUssQ0FBQyxlQUFOO0FBRUEsbUNBQWtDLGVBQUksTUFBSixDQUFXLFFBQTdDO0FBQUEsWUFBUSxlQUFSLHdCQUFRLGVBQVI7QUFBQSxZQUF5QixJQUF6Qix3QkFBeUIsSUFBekI7QUFFQSxRQUFBLGVBQWUsQ0FBQyxVQUFoQixDQUEyQixTQUEzQixDQUFxQyxNQUFyQyxDQUE0QyxRQUE1QztBQUNBLFFBQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxNQUFmLENBQXNCLE1BQXRCOztBQUNBLGNBQUssS0FBTCxDQUFXLElBQVgsRUFBaUIsYUFBakI7QUFDSDtBQXhCYTs7QUFBQTtBQUFBO0FBQUEsYUEwQkssZUFBQyxLQUFELEVBQVc7QUFDMUI7QUFDQSxZQUFJLENBQUMsS0FBSyxDQUFDLE1BQU4sQ0FBYSxPQUFiLENBQXFCLDJCQUFyQixDQUFMLEVBQXdEO0FBQUE7O0FBQ3BELG1EQUFJLE1BQUosQ0FBVyxRQUFYLENBQW9CLElBQXBCLGtGQUEwQixTQUExQixDQUFvQyxNQUFwQyxDQUEyQyxNQUEzQztBQUNBLG1EQUFJLE1BQUosQ0FBVyxRQUFYLENBQW9CLGVBQXBCLDRHQUFxQyxVQUFyQyxrRkFBaUQsU0FBakQsQ0FBMkQsTUFBM0QsQ0FBa0UsUUFBbEU7QUFDSDtBQUNKO0FBaENhOztBQUdWLFFBQUksbUJBQVEsZUFBUixLQUE0QixXQUFoQyxFQUE2QztBQUN6QztBQUNIOztBQUVEO0FBUFU7QUFRYjs7O0VBVHdCLGdCOztlQW9DZCxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNmOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLG1COzs7OztBQUNGLGlDQUFjO0FBQUE7O0FBQUE7QUFDVjs7QUFEVTtBQUFBO0FBQUEsYUFVUyxpQkFBTTtBQUFBOztBQUN6QixnREFBSSxNQUFKLENBQVcsYUFBWCxDQUF5QixlQUF6QixnRkFBMEMsZ0JBQTFDLENBQTJELE9BQTNEO0FBQ0EsaURBQUksTUFBSixDQUFXLGFBQVgsQ0FBeUIsUUFBekIsa0ZBQW1DLGdCQUFuQyxDQUFvRCxPQUFwRDtBQUVBLFFBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLE9BQTFCO0FBQ0g7QUFmYTs7QUFBQTtBQUFBO0FBQUEsYUFpQlksZUFBQyxLQUFELEVBQVc7QUFDakMsUUFBQSxLQUFLLENBQUMsY0FBTjtBQUNBLFFBQUEsS0FBSyxDQUFDLGVBQU47QUFFQSxZQUFRLElBQVIsR0FBaUIsZUFBSSxNQUFKLENBQVcsYUFBNUIsQ0FBUSxJQUFSO0FBRUEsUUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLE1BQWYsQ0FBc0IsTUFBdEI7O0FBRUEsd0tBQTBCO0FBQ3RCLHlCQUFJLE1BQUosQ0FBVyxXQUFYLENBQXVCLFNBQXZCLENBQWlDLE1BQWpDLENBQXdDLE1BQXhDOztBQUNBLHlCQUFJLE1BQUosQ0FBVyxZQUFYLENBQXdCLFNBQXhCLENBQWtDLE1BQWxDLENBQXlDLE1BQXpDO0FBQ0gsU0FIRCxNQUdPO0FBQUE7O0FBQ0gsY0FBSSxDQUFDLGVBQUksSUFBSixDQUFTLEdBQVQsQ0FBYSxTQUFiLENBQXVCLFFBQXZCLENBQWdDLE1BQWhDLENBQUwsRUFBOEM7QUFDMUMsMkJBQUksSUFBSixDQUFTLElBQVQsQ0FBYyxLQUFkLENBQW9CLFFBQXBCLEdBQStCLE9BQS9CO0FBQ0g7O0FBQ0QseUJBQUksSUFBSixDQUFTLEdBQVQsQ0FBYSxTQUFiLENBQXVCLE1BQXZCLENBQThCLE1BQTlCOztBQUNBLFVBQUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxRQUFYLEdBQ0ksMEJBQUEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIscUNBQXZCLGlGQUErRCxXQUEvRCxJQUE2RSxFQUE3RSxHQUFrRixJQUR0RjtBQUVIOztBQUVELGNBQUssS0FBTCxDQUFXLElBQVgsRUFBaUIsc0JBQWpCO0FBQ0g7QUF0Q2E7O0FBQUE7QUFBQTtBQUFBLGFBd0NLLGVBQUMsS0FBRCxFQUFXO0FBQzFCLFFBQUEsS0FBSyxDQUFDLGNBQU47QUFFQSxZQUFRLElBQVIsR0FBaUIsZUFBSSxNQUFKLENBQVcsYUFBNUIsQ0FBUSxJQUFSO0FBRUEsUUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLE1BQWYsQ0FBc0IsTUFBdEI7O0FBRUEsd0tBQTBCO0FBQ3RCLHlCQUFJLE1BQUosQ0FBVyxXQUFYLENBQXVCLFNBQXZCLENBQWlDLE1BQWpDLENBQXdDLE1BQXhDOztBQUNBLHlCQUFJLE1BQUosQ0FBVyxZQUFYLENBQXdCLFNBQXhCLENBQWtDLE1BQWxDLENBQXlDLE1BQXpDO0FBQ0gsU0FIRCxNQUdPO0FBQ0gseUJBQUksSUFBSixDQUFTLEdBQVQsQ0FBYSxTQUFiLENBQXVCLE1BQXZCLENBQThCLE1BQTlCOztBQUNBLFVBQUEsVUFBVSxDQUFDLFlBQU07QUFDYiwyQkFBSSxJQUFKLENBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBb0IsUUFBcEIsR0FBK0IsRUFBL0I7QUFDSCxXQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0g7QUFDSjtBQXhEYTs7QUFBQTtBQUFBO0FBQUEsYUEwREssZUFBQyxLQUFELEVBQVc7QUFDMUI7QUFDQSxZQUFJLENBQUMsS0FBSyxDQUFDLE1BQU4sQ0FBYSxPQUFiLENBQXFCLGlDQUFyQixDQUFMLEVBQThEO0FBQUE7O0FBQzFELG1EQUFJLE1BQUosQ0FBVyxhQUFYLDRHQUEwQixJQUExQixrRkFBZ0MsU0FBaEMsQ0FBMEMsTUFBMUMsQ0FBaUQsTUFBakQ7O0FBRUEsMEtBQTBCO0FBQUE7O0FBQ3RCLG9EQUFJLE1BQUosQ0FBVyxXQUFYLGdGQUF3QixTQUF4QixDQUFrQyxNQUFsQyxDQUF5QyxNQUF6QztBQUNBLG9EQUFJLE1BQUosQ0FBVyxZQUFYLGdGQUF5QixTQUF6QixDQUFtQyxNQUFuQyxDQUEwQyxNQUExQztBQUNILFdBSEQsTUFHTztBQUFBOztBQUNILDRDQUFJLElBQUosQ0FBUyxHQUFULGdFQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsTUFBL0I7QUFDSDtBQUNKO0FBQ0o7QUF0RWE7O0FBQUE7QUFBQTtBQUFBLGFBd0VFO0FBQUE7O0FBQUEsbUNBQU0sZUFBSSxNQUFKLENBQVcsSUFBakIscURBQU0saUJBQWlCLFNBQWpCLENBQTJCLFFBQTNCLENBQW9DLFlBQXBDLENBQU47QUFBQTtBQXhFRjs7QUFHVixRQUFJLG1CQUFRLGVBQVIsS0FBNEIsZ0JBQWhDLEVBQWtEO0FBQzlDO0FBQ0g7O0FBRUQ7QUFQVTtBQVFiOzs7RUFUNkIsZ0I7O2VBNEVuQixtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VmOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLGdCOzs7OztBQUdGLDhCQUFjO0FBQUE7O0FBQUE7QUFDVjs7QUFEVTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsYUFXQyxpQkFBTTtBQUNqQiwwR0FBaUI7QUFDYixVQUFBLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLHVCQUF2QixDQURQO0FBRWIsVUFBQSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1Qix3QkFBdkIsQ0FGUDtBQUdiLFVBQUEsYUFBYSxFQUFFLFFBQVEsQ0FBQyxhQUFULENBQXVCLHVCQUF2QixDQUhGO0FBSWIsVUFBQSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixzQkFBdkIsQ0FKTjtBQUtiLFVBQUEsc0JBQXNCLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsNkNBQXZCLENBTFg7QUFNYixVQUFBLElBQUksRUFBRSxRQUFRLENBQUMsYUFBVCxDQUF1QixNQUF2QjtBQU5PLFNBQWpCO0FBUUg7QUFwQmE7O0FBQUE7QUFBQTtBQUFBLGFBc0JTLGlCQUFNO0FBQ3pCLFlBQUksbUJBQVEscUJBQVIsS0FBa0MsV0FBdEMsRUFBbUQ7QUFBQTs7QUFDL0Msc0lBQWUsa0JBQWYsa0ZBQW1DLGdCQUFuQyxDQUFvRCxPQUFwRDtBQUNBLFVBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLE9BQTFCO0FBQ0gsU0FIRCxNQUdPLElBQUksbUJBQVEscUJBQVIsS0FBa0MsU0FBdEMsRUFBaUQ7QUFBQTs7QUFDcEQsc0lBQWUsaUJBQWYsa0ZBQWtDLGdCQUFsQyxDQUFtRCxPQUFuRDtBQUNBLHNJQUFlLHNCQUFmLGtGQUF1QyxnQkFBdkMsQ0FBd0QsT0FBeEQ7QUFDQSxzSUFBZSxhQUFmLGtGQUE4QixnQkFBOUIsQ0FBK0MsT0FBL0M7QUFDSDtBQUNKO0FBL0JhOztBQUFBO0FBQUE7QUFBQSxhQWlDVSxlQUFDLEtBQUQsRUFBVztBQUMvQixRQUFBLEtBQUssQ0FBQyxjQUFOO0FBQ0EsUUFBQSxLQUFLLENBQUMsZUFBTjtBQUVBLDBHQUFlLGtCQUFmLENBQWtDLFNBQWxDLENBQTRDLE1BQTVDLENBQW1ELE1BQW5EO0FBQ0EsMEdBQWUsa0JBQWYsQ0FBa0MsU0FBbEMsQ0FBNEMsTUFBNUMsQ0FBbUQsUUFBbkQ7O0FBRUEsY0FBSyxLQUFMLENBQVcsa0dBQWUsa0JBQWYsQ0FBa0MsYUFBbEMsQ0FBZ0QsTUFBaEQsQ0FBWCxFQUFvRSxhQUFwRTtBQUNIO0FBekNhOztBQUFBO0FBQUE7QUFBQSxhQTJDTyxlQUFDLEtBQUQsRUFBVztBQUM1QixRQUFBLEtBQUssQ0FBQyxjQUFOO0FBRUEsMEdBQWUsYUFBZixDQUE2QixTQUE3QixDQUF1QyxHQUF2QyxDQUEyQyxRQUEzQztBQUNBLDJCQUFPLGtHQUFlLGFBQXRCOztBQUVBLGNBQUssS0FBTCxDQUFXLGtHQUFlLGFBQWYsQ0FBNkIsYUFBN0IsQ0FBMkMsTUFBM0MsQ0FBWCxFQUErRCxtQ0FBL0Q7O0FBRUEsUUFBQSxVQUFVLENBQUMsWUFBTTtBQUNiLDRHQUFlLElBQWYsQ0FBb0IsS0FBcEIsQ0FBMEIsUUFBMUIsR0FBcUMsUUFBckM7QUFDSCxTQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0g7QUF0RGE7O0FBQUE7QUFBQTtBQUFBLGFBd0RRLGVBQUMsS0FBRCxFQUFXO0FBQzdCLFFBQUEsS0FBSyxDQUFDLGNBQU47QUFFQSwwR0FBZSxhQUFmLENBQTZCLFNBQTdCLENBQXVDLE1BQXZDLENBQThDLFFBQTlDO0FBQ0EsNEJBQVEsa0dBQWUsYUFBdkI7QUFFQSxRQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2IsNEdBQWUsSUFBZixDQUFvQixLQUFwQixDQUEwQixRQUExQixHQUFxQyxTQUFyQztBQUNILFNBRlMsRUFFUCxHQUZPLENBQVY7QUFHSDtBQWpFYTs7QUFBQTtBQUFBO0FBQUEsYUFtRVUsZUFBQyxLQUFELEVBQVc7QUFDL0IsMEdBQWUsYUFBZixDQUE2QixhQUE3QixDQUEyQyxPQUEzQyxFQUFvRCxLQUFwRDtBQUNIO0FBckVhOztBQUFBO0FBQUE7QUFBQSxhQXVFSyxlQUFDLEtBQUQsRUFBVztBQUMxQixZQUFJLENBQUMsS0FBSyxDQUFDLE1BQU4sQ0FBYSxPQUFiLENBQXFCLGdDQUFyQixDQUFMLEVBQTZEO0FBQ3pELDRHQUFlLGtCQUFmLENBQWtDLFNBQWxDLENBQTRDLE1BQTVDLENBQW1ELFFBQW5EO0FBQ0EsNEdBQWUsa0JBQWYsQ0FBa0MsU0FBbEMsQ0FBNEMsTUFBNUMsQ0FBbUQsTUFBbkQ7QUFDSDtBQUNKO0FBNUVhOztBQUdWLFFBQUksbUJBQVEscUJBQVIsS0FBa0MsVUFBdEMsRUFBa0Q7QUFDOUM7QUFDSDs7QUFFRDtBQUNBO0FBUlU7QUFTYjs7O0VBWjBCLGdCOztlQWtGaEIsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RmY7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTSxhOzs7OztBQUNGLDJCQUFjO0FBQUE7O0FBQUE7QUFDVjs7QUFEVTtBQUFBO0FBQUEsYUFVUyxpQkFBTTtBQUFBOztBQUN6QixnREFBSSxNQUFKLENBQVcsT0FBWCxDQUFtQixlQUFuQixnRkFBb0MsZ0JBQXBDLENBQXFELE9BQXJEO0FBQ0EsZ0RBQUksTUFBSixDQUFXLE9BQVgsQ0FBbUIsUUFBbkIsZ0ZBQTZCLGdCQUE3QixDQUE4QyxPQUE5QztBQUNIO0FBYmE7O0FBQUE7QUFBQTtBQUFBLGFBZVksZUFBQyxLQUFELEVBQVc7QUFDakMsUUFBQSxLQUFLLENBQUMsY0FBTjtBQUVBLFlBQVEsSUFBUixHQUFpQixlQUFJLE1BQUosQ0FBVyxPQUE1QixDQUFRLElBQVI7QUFFQSxRQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsR0FBZixDQUFtQixRQUFuQjtBQUNBLDJCQUFPLElBQVA7O0FBRUEsY0FBSyxLQUFMLENBQVcsSUFBWCxFQUFpQixzQkFBakI7O0FBRUEsUUFBQSxVQUFVLENBQUMsWUFBWTtBQUNuQix5QkFBSSxJQUFKLENBQVMsS0FBVCxDQUFlLFFBQWYsR0FBMEIsUUFBMUI7QUFDSCxTQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0g7QUE1QmE7O0FBQUE7QUFBQTtBQUFBLGFBOEJLLGVBQUMsS0FBRCxFQUFXO0FBQzFCLFFBQUEsS0FBSyxDQUFDLGNBQU47QUFFQSxZQUFRLElBQVIsR0FBaUIsZUFBSSxNQUFKLENBQVcsT0FBNUIsQ0FBUSxJQUFSO0FBRUEsUUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLE1BQWYsQ0FBc0IsUUFBdEI7QUFDQSw0QkFBUSxJQUFSO0FBRUEsUUFBQSxVQUFVLENBQUMsWUFBWTtBQUNuQix5QkFBSSxJQUFKLENBQVMsS0FBVCxDQUFlLFFBQWYsR0FBMEIsU0FBMUI7QUFDSCxTQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0g7QUF6Q2E7O0FBR1YsUUFBSSxtQkFBUSxlQUFSLEtBQTRCLFNBQWhDLEVBQTJDO0FBQ3ZDO0FBQ0g7O0FBRUQ7QUFQVTtBQVFiOzs7RUFUdUIsZ0I7O2VBNkNiLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQixNLEdBR2pCLGtCQUFjO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFdBS0osaUJBQU07QUFDWixxQkFBSSxVQUFKLENBQWUsT0FBZixDQUF1QixVQUFDLE1BQUQsRUFBWTtBQUMvQiwrQ0FBQSxLQUFJLFdBQVcsTUFBWCxDQUFKO0FBRUEsK0NBQUEsS0FBSSxVQUFKLENBQWEsa0JBQWIsQ0FDSSxVQURKLHVDQUVpQyx1Q0FBQSxLQUFJLFVBQUosQ0FBYSxTQUY5QyxrR0FJYyx1Q0FBQSxLQUFJLFVBQUosQ0FBYSxPQUFiLENBQXFCLHVDQUFBLEtBQUksVUFBSixDQUFhLGFBQWxDLEVBQWlELElBSi9EO0FBU0EsK0NBQUEsS0FBSSxVQUFKLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUEyQixpQkFBM0I7QUFFQSwrQ0FBQSxLQUFJLFNBQUosTUFBQSxLQUFJO0FBQ0osK0NBQUEsS0FBSSwyQkFBSixNQUFBLEtBQUk7QUFDUCxPQWhCRDtBQWlCSDtBQXZCYTs7QUFBQTtBQUFBO0FBQUEsV0F5QkwsaUJBQU07QUFDWCw2Q0FBQSxLQUFJLFVBQUosQ0FBYSxLQUFiLENBQW1CLE9BQW5CLEdBQTZCLENBQTdCO0FBQ0EsNkNBQUEsS0FBSSxVQUFKLENBQWEsS0FBYixDQUFtQixRQUFuQixHQUE4QixVQUE5QjtBQUNBLDZDQUFBLEtBQUksVUFBSixDQUFhLEtBQWIsQ0FBbUIsTUFBbkIsR0FBNEIsTUFBNUI7QUFDQSw2Q0FBQSxLQUFJLFVBQUosQ0FBYSxLQUFiLENBQW1CLFFBQW5CLEdBQThCLE1BQTlCO0FBQ0EsNkNBQUEsS0FBSSxVQUFKLENBQWEsS0FBYixDQUFtQixVQUFuQixHQUFnQyxpQkFBaEM7QUFDQSw2Q0FBQSxLQUFJLFVBQUosQ0FBYSxXQUFiLENBQXlCLEtBQXpCLENBQStCLE9BQS9CLEdBQXlDLGNBQXpDO0FBQ0EsNkNBQUEsS0FBSSxVQUFKLENBQWEsV0FBYixDQUF5QixpQkFBekIsQ0FBMkMsS0FBM0MsQ0FBaUQsT0FBakQsR0FBMkQsY0FBM0Q7QUFDSDtBQWpDYTs7QUFBQTtBQUFBO0FBQUEsV0FtQ2EsaUJBQU07QUFDN0IsNkNBQUEsS0FBSSxVQUFKLENBQWEsZ0JBQWIsQ0FBOEIsWUFBOUIseUNBQTRDLEtBQTVDO0FBQ0EsNkNBQUEsS0FBSSxVQUFKLENBQWEsZ0JBQWIsQ0FBOEIsWUFBOUIseUNBQTRDLEtBQTVDO0FBQ0EsNkNBQUEsS0FBSSxVQUFKLENBQWEsZ0JBQWIsQ0FBOEIsUUFBOUIsRUFBd0MsS0FBSSxDQUFDLFFBQTdDO0FBQ0g7QUF2Q2E7O0FBQUE7QUFBQTtBQUFBLFdBeUNFLGVBQUMsS0FBRCxFQUFXO0FBQ3ZCLFVBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFyQjtBQUVBLE1BQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsR0FBakIsQ0FBcUIsbUJBQXJCO0FBQ0g7QUE3Q2E7O0FBQUE7QUFBQTtBQUFBLFdBK0NFLGVBQUMsS0FBRCxFQUFXO0FBQ3ZCLFVBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFyQjtBQUVBLE1BQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsbUJBQXhCO0FBQ0g7QUFuRGE7O0FBQUEscURBcURILFVBQUMsS0FBRCxFQUFXO0FBQ2xCLFFBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxhQUFyQjtBQUVBLElBQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsU0FBbkIsR0FBK0IsTUFBTSxDQUFDLE9BQVAsQ0FBZSxNQUFNLENBQUMsYUFBdEIsRUFBcUMsSUFBcEU7QUFDSCxHQXpEYTs7QUFBQTtBQUFBO0FBQUEsV0EyRFMsaUJBQU07QUFDekIsTUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsa0JBQTFCLHlDQUE4QyxLQUE5QztBQUNBLE1BQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFFBQXhCLHlDQUFrQyxLQUFsQztBQUNIO0FBOURhOztBQUFBO0FBQUE7QUFBQSxXQWdFSyxlQUFDLEtBQUQsRUFBVztBQUMxQixxQkFBSSxVQUFKLENBQWUsT0FBZixDQUF1QixVQUFDLE1BQUQsRUFBWTtBQUMvQixRQUFBLE1BQU0sQ0FBQyxLQUFQLENBQWEsS0FBYixHQUFxQixNQUFNLENBQUMsV0FBUCxDQUFtQixXQUFuQixHQUFpQyxJQUF0RDtBQUNILE9BRkQ7QUFHSDtBQXBFYTs7QUFDVjtBQUNBO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkw7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRU0sSyxHQUNGLGlCQUFjO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLFdBSUwsaUJBQU07QUFDWCxNQUFBLEtBQUksQ0FBQyxNQUFMLEdBQWMsSUFBSSxrQkFBSixFQUFkO0FBQ0EsTUFBQSxLQUFJLENBQUMsTUFBTCxHQUFjLElBQUksa0JBQUosRUFBZDtBQUNBLE1BQUEsS0FBSSxDQUFDLElBQUwsR0FBWSxJQUFJLGdCQUFKLEVBQVo7QUFDQSxNQUFBLEtBQUksQ0FBQyxVQUFMLEdBQWtCLElBQUksc0JBQUosRUFBbEI7QUFDQSxNQUFBLEtBQUksQ0FBQyxNQUFMLEdBQWMsSUFBSSxrQkFBSixFQUFkO0FBQ0EsTUFBQSxLQUFJLENBQUMsTUFBTCxHQUFjLElBQUksa0JBQUosRUFBZDtBQUNBLE1BQUEsS0FBSSxDQUFDLFdBQUwsR0FBbUIsSUFBSSx1QkFBSixFQUFuQjtBQUNBLE1BQUEsS0FBSSxDQUFDLFNBQUwsR0FBaUIsSUFBSSxxQkFBSixFQUFqQjtBQUNBLE1BQUEsS0FBSSxDQUFDLFlBQUwsR0FBb0IsSUFBSSx3QkFBSixFQUFwQjtBQUNBLE1BQUEsS0FBSSxDQUFDLG1CQUFMLEdBQTJCLElBQUksK0JBQUosRUFBM0I7QUFDQSxNQUFBLEtBQUksQ0FBQyxVQUFMLEdBQWtCLElBQUksc0JBQUosRUFBbEI7QUFDQSxNQUFBLEtBQUksQ0FBQyxRQUFMLEdBQWdCLElBQUksb0JBQUosRUFBaEI7QUFFQSxNQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxRQUFBLEtBQUksQ0FBQyxnQkFBTCxHQUF3QixJQUFJLDRCQUFKLEVBQXhCO0FBQ0gsT0FGRDtBQUdIO0FBckJhOztBQUNWO0FBQ0gsQzs7ZUFzQlUsSzs7OztBQ3ZDZjs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0UEE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGNvbnN0IG9wdGlvbnMgPSBvY2VhbndwTG9jYWxpemU7XHJcblxyXG5leHBvcnQgY29uc3QgRE9NID0ge1xyXG4gICAgaHRtbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIiksXHJcbiAgICBib2R5OiBkb2N1bWVudC5ib2R5LFxyXG4gICAgV1BBZG1pbmJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cGFkbWluYmFyXCIpLFxyXG4gICAgd3JhcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cmFwXCIpLFxyXG4gICAgbWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpLFxyXG4gICAgc2VsZWN0VGFnczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLmN1c3RvbVNlbGVjdHMpLFxyXG4gICAgZmxvYXRpbmdCYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWZsb2F0aW5nLWJhclwiKSxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICAgIHNpdGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXJcIiksXHJcbiAgICAgICAgdmVydGljYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXIudmVydGljYWwtaGVhZGVyICNzaXRlLWhlYWRlci1pbm5lclwiKSxcclxuICAgICAgICBmdWxsU2NyZWVuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlclwiKSxcclxuICAgICAgICB0b3BiYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9wLWJhclwiKSxcclxuICAgICAgICB0b3BiYXJXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvcC1iYXItd3JhcFwiKSxcclxuICAgICAgICB0b3BMZWZ0U2lkZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci50b3AtaGVhZGVyIC5oZWFkZXItdG9wIC5sZWZ0XCIpLFxyXG4gICAgICAgIHRvcFJpZ2h0U2lkZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci50b3AtaGVhZGVyIC5oZWFkZXItdG9wIC5yaWdodFwiKSxcclxuICAgIH0sXHJcbiAgICBtZW51OiB7XHJcbiAgICAgICAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmhlYWRlci1yZXBsYWNlICNzaXRlLW5hdmlnYXRpb25cIiksXHJcbiAgICAgICAgbWFpbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW1lbnVcIiksXHJcbiAgICAgICAgZnVsbFNjcmVlbjoge1xyXG4gICAgICAgICAgICBtZW51OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtaGVhZGVyLmZ1bGxfc2NyZWVuLWhlYWRlciAjZnVsbC1zY3JlZW4tbWVudVwiKSxcclxuICAgICAgICAgICAgdG9nZ2xlTWVudUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci5mdWxsX3NjcmVlbi1oZWFkZXIgLm1lbnUtYmFyXCIpLFxyXG4gICAgICAgICAgICBsb2dvOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtbG9nby5oYXMtZnVsbC1zY3JlZW4tbG9nb1wiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lZ2E6IHtcclxuICAgICAgICAgICAgbWVudUl0ZW1zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3NpdGUtbmF2aWdhdGlvbiAubWVnYW1lbnUtbGkuZnVsbC1tZWdhXCIpLFxyXG4gICAgICAgICAgICB0b3BiYXJNZW51SXRlbXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdG9wLWJhci1uYXYgLm1lZ2FtZW51LWxpLmZ1bGwtbWVnYVwiKSxcclxuICAgICAgICAgICAgbWVudUNvbnRlbnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmlnYXRpb24gLm1lZ2FtZW51LWxpLmF1dG8tbWVnYSAubWVnYW1lbnVcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2ZXJ0aWNhbDoge1xyXG4gICAgICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS52ZXJ0aWNhbC10b2dnbGVcIiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb2JpbGVNZW51OiB7XHJcbiAgICAgICAgbmF2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1kcm9wZG93biA+IG5hdlwiKSxcclxuICAgICAgICBuYXZXcmFwcGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vYmlsZS1kcm9wZG93blwiKSxcclxuICAgICAgICB0b2dnbGVNZW51QnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51XCIpLFxyXG4gICAgICAgIGhhbWJ1cmdlckJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudSA+IC5oYW1idXJnZXJcIiksXHJcbiAgICAgICAgbWVudUl0ZW1zSGFzQ2hpbGRyZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbW9iaWxlLWRyb3Bkb3duIC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpLFxyXG4gICAgICAgIGZ1bGxTY3JlZW46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLWZ1bGxzY3JlZW5cIiksXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgICAgZm9ybXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtLmhlYWRlci1zZWFyY2hmb3JtXCIpLFxyXG4gICAgICAgIGRyb3BEb3duOiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImEuc2VhcmNoLWRyb3Bkb3duLXRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgZm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hmb3JtLWRyb3Bkb3duXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyUmVwbGFjZToge1xyXG4gICAgICAgICAgICB0b2dnbGVTZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNlYXJjaC1oZWFkZXItcmVwbGFjZS10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0taGVhZGVyLXJlcGxhY2UtY2xvc2VcIiksXHJcbiAgICAgICAgICAgIGZvcm06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoZm9ybS1oZWFkZXItcmVwbGFjZVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG92ZXJsYXk6IHtcclxuICAgICAgICAgICAgdG9nZ2xlU2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zZWFyY2gtb3ZlcmxheS10b2dnbGVcIiksXHJcbiAgICAgICAgICAgIGNsb3NlQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tb3ZlcmxheSBhLnNlYXJjaC1vdmVybGF5LWNsb3NlXCIpLFxyXG4gICAgICAgICAgICBmb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGZvcm0tb3ZlcmxheVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICAgIHNpdGVGb290ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyXCIpLFxyXG4gICAgICAgIGNhbGxvdXRGb290ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyLWNhbGxvdXQtd3JhcFwiKSxcclxuICAgICAgICBmb290ZXJCYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyLWJhclwiKSxcclxuICAgICAgICBwYXJhbGxheDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXJhbGxheC1mb290ZXJcIiksXHJcbiAgICB9LFxyXG4gICAgc2Nyb2xsOiB7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Njcm9sbC10b3BcIiksXHJcbiAgICAgICAgZ29Ub3A6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FbaHJlZj1cIiNnby10b3BcIl0nKSxcclxuICAgICAgICBnb1RvcFNsYXNoOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5LmhvbWUgYVtocmVmPVwiLyNnby10b3BcIl0nKSxcclxuICAgICAgICBpbmZpbml0ZVNjcm9sbE5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZpbml0ZS1zY3JvbGwtbmF2XCIpLFxyXG4gICAgICAgIGluZmluaXRlU2Nyb2xsV3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZpbml0ZS1zY3JvbGwtd3JhcFwiKSxcclxuICAgIH0sXHJcbiAgICBibG9nOiB7XHJcbiAgICAgICAgbWFzb25yeUdyaWRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctbWFzb25yeS1ncmlkXCIpLFxyXG4gICAgfSxcclxuICAgIGVkZDoge1xyXG4gICAgICAgIGNhcnRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkZC1tZW51LWljb25cIiksXHJcbiAgICAgICAgb3ZlcmxheUNhcnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3dwLWNhcnQtb3ZlcmxheVwiKSxcclxuICAgICAgICB0b3RhbFByaWNlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGRtZW51Y2FydC1kZXRhaWxzLnRvdGFsXCIpLFxyXG4gICAgICAgIHF1aWNrVmlld01vZGFsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1xdi13cmFwXCIpLFxyXG4gICAgICAgIHF1aWNrVmlld0NvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LWNvbnRlbnRcIiksXHJcbiAgICB9LFxyXG4gICAgd29vOiB7XHJcbiAgICAgICAgcmVzZXRWYXJpYXRpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0X3ZhcmlhdGlvbnNcIiksXHJcbiAgICAgICAgcHJvZHVjdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdFwiKSxcclxuICAgICAgICBhbGxQcm9kdWN0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b29jb21tZXJjZSB1bC5wcm9kdWN0c1wiKSxcclxuICAgICAgICBjYXRlZ29yaWVzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvby1kcm9wZG93bi1jYXQgLnByb2R1Y3QtY2F0ZWdvcmllc1wiKSxcclxuICAgICAgICB2ZXJ0aWNhbFRodW1iczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vd3AtdGh1bWJzLWxheW91dC12ZXJ0aWNhbFwiKSxcclxuICAgICAgICB0aHVtYnNWZXJ0aWNhbExheW91dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtdGh1bWJzLWxheW91dC12ZXJ0aWNhbFwiKSxcclxuICAgICAgICBncmlkOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3AtZ3JpZC1saXN0ICNvY2VhbndwLWdyaWRcIiksXHJcbiAgICAgICAgbGlzdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2VhbndwLWdyaWQtbGlzdCAjb2NlYW53cC1saXN0XCIpLFxyXG4gICAgICAgIHByb2R1Y3RUYWJzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0IC53b29jb21tZXJjZS10YWJzXCIpLFxyXG4gICAgICAgIHByb2R1Y3RDYXJ0czogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b29jb21tZXJjZSBkaXYucHJvZHVjdCAuY2FydFwiKSxcclxuICAgICAgICBwcm9kdWN0Q3VzdG9tZXJSZXZpZXdMaW5rOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvb2NvbW1lcmNlIGRpdi5wcm9kdWN0IC53b29jb21tZXJjZS1yZXZpZXctbGlua1wiKSxcclxuICAgICAgICBxdWFudGl0eTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInF1YW50aXR5XCJdJyksXHJcbiAgICAgICAgY2hlY2tvdXRGb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybS53b29jb21tZXJjZS1jaGVja291dFwiKSxcclxuICAgICAgICBjaGVja291dExvZ2luOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoZWNrb3V0X2xvZ2luXCIpLFxyXG4gICAgICAgIGNoZWNrb3V0Q291cG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoZWNrb3V0X2NvdXBvblwiKSxcclxuICAgICAgICBjaGVja291dFRpbWVsaW5lOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI293cC1jaGVja291dC10aW1lbGluZVwiKSxcclxuICAgICAgICBjdXN0b21lckJpbGxpbmdEZXRhaWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyX2JpbGxpbmdfZGV0YWlsc1wiKSxcclxuICAgICAgICBjdXN0b21lclNoaXBwaW5nRGV0YWlsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXN0b21lcl9zaGlwcGluZ19kZXRhaWxzXCIpLFxyXG4gICAgICAgIG9yZGVyUmV2aWV3OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29yZGVyX3Jldmlld1wiKSxcclxuICAgICAgICBvcmRlckNoZWNrb3V0UGF5bWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcmRlcl9jaGVja291dF9wYXltZW50XCIpLFxyXG4gICAgICAgIHBsYWNlT3JkZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhY2Vfb3JkZXJcIiksXHJcbiAgICAgICAgZm9ybUFjdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybV9hY3Rpb25zXCIpLFxyXG4gICAgICAgIG92ZXJsYXlDYXJ0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm93cC1jYXJ0LW92ZXJsYXlcIiksXHJcbiAgICAgICAgZ3Vlc3RBY2NvdW50UGFnZU5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vd3AtYWNjb3VudC1saW5rc1wiKSxcclxuICAgICAgICBndWVzdEFjY291bnRQYWdlQm94OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1c3RvbWVyX2xvZ2luXCIpLFxyXG4gICAgICAgIHF1YW50aXR5SW5wdXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1YW50aXR5Om5vdCguYnV0dG9uc19hZGRlZCkgLnF0eVwiKSxcclxuICAgICAgICBxdWlja1ZpZXc6IHtcclxuICAgICAgICAgICAgbW9kYWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LXdyYXBcIiksXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3dwLXF2LWNvbnRlbnRcIiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRE9NU3RyaW5nID0ge307XHJcbiIsImltcG9ydCBcIi4vbGliL2VsZW1lbnRcIjtcclxuaW1wb3J0IFRoZW1lIGZyb20gXCIuL3RoZW1lL3RoZW1lXCI7XHJcblxyXG5jbGFzcyBPY2VhbldQIHtcclxuICAgIHN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGhlbWUgPSBuZXcgVGhlbWUoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbihcInVzZSBzY3JpcHRcIik7XHJcblxyXG53aW5kb3cub2NlYW53cCA9IG5ldyBPY2VhbldQKCk7XHJcbm9jZWFud3Auc3RhcnQoKTtcclxuIiwiRWxlbWVudC5wcm90b3R5cGUub2NlYW5QYXJlbnRzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcclxuICAgIHZhciBlbGVtID0gdGhpcztcclxuICAgIHZhciBpc2hhdmVzZWxlY3RvciA9IHNlbGVjdG9yICE9PSB1bmRlZmluZWQ7XHJcblxyXG4gICAgd2hpbGUgKChlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50KSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChlbGVtLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNoYXZlc2VsZWN0b3IgfHwgZWxlbS5tYXRjaGVzKHNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKGVsZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZWxlbWVudHM7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCB3cmFwID0gKGVsZW1lbnQsIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSA9PiB7XHJcbiAgICBpZiAoZWxlbWVudC5uZXh0U2libGluZykge1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbWVudC5uZXh0U2libGluZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZURvd24gPSAoZWxlbWVudCwgZHVyYXRpb24gPSAzMDApID0+IHtcclxuICAgIGxldCBkaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheTtcclxuXHJcbiAgICBpZiAoZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAgICAgICBkaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHRcIjtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7ZHVyYXRpb259bXNgO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xyXG4gICAgbGV0IGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XHJcbiAgICB9LCA1KTtcclxuXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcImhlaWdodFwiKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwib3ZlcmZsb3dcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tZHVyYXRpb25cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb24tcHJvcGVydHlcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm9wYWNpdHlcIik7XHJcbiAgICB9LCBkdXJhdGlvbiArIDUwKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZVVwID0gKGVsZW1lbnQsIGR1cmF0aW9uID0gMzAwKSA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcImhlaWdodCwgbWFyZ2luXCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGAke2R1cmF0aW9ufW1zYDtcclxuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7ZWxlbWVudC5vZmZzZXRIZWlnaHR9cHhgO1xyXG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJoZWlnaHRcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi10b3BcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm1hcmdpbi1ib3R0b21cIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcIm92ZXJmbG93XCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpO1xyXG4gICAgfSwgZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVUb2dnbGUgPSAoZWxlbWVudCwgZHVyYXRpb24pID0+IHtcclxuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgPT09IFwibm9uZVwiID8gc2xpZGVEb3duKGVsZW1lbnQsIGR1cmF0aW9uKSA6IHNsaWRlVXAoZWxlbWVudCwgZHVyYXRpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJbiA9IChlbGVtZW50LCBfb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIF9vcHRpb25zKTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gb3B0aW9ucy5kaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgJHtvcHRpb25zLmR1cmF0aW9ufW1zIG9wYWNpdHkgZWFzZWA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5O1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgISFvcHRpb25zLmNhbGxiYWNrICYmIG9wdGlvbnMuY2FsbGJhY2soKTtcclxuICAgIH0sIG9wdGlvbnMuZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZU91dCA9IChlbGVtZW50LCBfb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXHJcbiAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIGNhbGxiYWNrOiBudWxsLFxyXG4gICAgfTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIF9vcHRpb25zKTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gb3B0aW9ucy5kaXNwbGF5IHx8IFwiYmxvY2tcIjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBgJHtvcHRpb25zLmR1cmF0aW9ufW1zIG9wYWNpdHkgZWFzZWA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5O1xyXG4gICAgfSwgNSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgISFvcHRpb25zLmNhbGxiYWNrICYmIG9wdGlvbnMuY2FsbGJhY2soKTtcclxuICAgIH0sIG9wdGlvbnMuZHVyYXRpb24gKyA1MCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZVRvZ2dsZSA9IChlbGVtZW50LCBvcHRpb25zKSA9PiB7XHJcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSBcIm5vbmVcIiA/IGZhZGVJbihlbGVtZW50LCBvcHRpb25zKSA6IGZhZGVPdXQoZWxlbWVudCwgb3B0aW9ucyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgb2Zmc2V0ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGlmICghZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiB7IHRvcDogMCwgbGVmdDogMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBkb2N1bWVudC1yZWxhdGl2ZSBwb3NpdGlvbiBieSBhZGRpbmcgdmlld3BvcnQgc2Nyb2xsIHRvIHZpZXdwb3J0LXJlbGF0aXZlIGdCQ1JcclxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3Qgd2luID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0LFxyXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbi5wYWdlWE9mZnNldCxcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdmlzaWJsZSA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICEhKGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2libGluZ3MgPSAoZSkgPT4ge1xyXG4gICAgLy8gZm9yIGNvbGxlY3Rpbmcgc2libGluZ3NcclxuICAgIGNvbnN0IHNpYmxpbmdzID0gW107XHJcblxyXG4gICAgLy8gaWYgbm8gcGFyZW50LCByZXR1cm4gbm8gc2libGluZ1xyXG4gICAgaWYgKCFlLnBhcmVudE5vZGUpIHtcclxuICAgICAgICByZXR1cm4gc2libGluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZmlyc3QgY2hpbGQgb2YgdGhlIHBhcmVudCBub2RlXHJcbiAgICBsZXQgc2libGluZyA9IGUucGFyZW50Tm9kZS5maXJzdENoaWxkO1xyXG5cclxuICAgIC8vIGNvbGxlY3Rpbmcgc2libGluZ3NcclxuICAgIHdoaWxlIChzaWJsaW5nKSB7XHJcbiAgICAgICAgaWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZSkge1xyXG4gICAgICAgICAgICBzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNpYmxpbmdzO1xyXG59O1xyXG5cclxuLy8gUmV0dXJucyB0cnVlIGlmIGl0IGlzIGEgRE9NIGVsZW1lbnRcclxuZXhwb3J0IGNvbnN0IGlzRWxlbWVudCA9IChvKSA9PiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIEhUTUxFbGVtZW50ID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgLy8gRE9NMlxyXG4gICAgICAgIDogbyAmJiB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiBvICE9PSBudWxsICYmIG8ubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIG8ubm9kZU5hbWUgPT09IFwic3RyaW5nXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNTZWxlY3RvclZhbGlkID0gKChkdW1teUVsZW1lbnQpID0+IChzZWxlY3RvcikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkdW1teUVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSkoZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpKTtcclxuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nTWFzb25yeSB7XG4gICAgaXNvdG9wO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgRE9NLmJsb2cubWFzb25yeUdyaWRzPy5mb3JFYWNoKChibG9nTWFzb25yeUdyaWQpID0+IHtcbiAgICAgICAgICAgIGltYWdlc0xvYWRlZChibG9nTWFzb25yeUdyaWQsIChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNvdG9wID0gbmV3IElzb3RvcGUoYmxvZ01hc29ucnlHcmlkLCB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogXCIuaXNvdG9wZS1lbnRyeVwiLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNPcmlnaW5MZWZ0OiBvcHRpb25zLmlzUlRMID8gZmFsc2UgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbiIsImltcG9ydCBSZXNwb25zaXZlQXV0b0hlaWdodCBmcm9tIFwicmVzcG9uc2l2ZS1hdXRvLWhlaWdodFwiO1xyXG5cclxuY2xhc3MgRXF1YWxIZWlnaHRFbGVtZW50cyB7XHJcbiAgICAjZXhlY3V0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCAmJiAhdGhpcy4jZXhlY3V0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvZy1lcXVhbC1oZWlnaHRzIC5ibG9nLWVudHJ5LWlubmVyXCIpKSB7XHJcbiAgICAgICAgICAgIG5ldyBSZXNwb25zaXZlQXV0b0hlaWdodChcIi5ibG9nLWVxdWFsLWhlaWdodHMgLmJsb2ctZW50cnktaW5uZXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1hdGNoLWhlaWdodC1ncmlkIC5tYXRjaC1oZWlnaHQtY29udGVudFwiKSkge1xyXG4gICAgICAgICAgICBuZXcgUmVzcG9uc2l2ZUF1dG9IZWlnaHQoXCIubWF0Y2gtaGVpZ2h0LWdyaWQgLm1hdGNoLWhlaWdodC1jb250ZW50XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jZXhlY3V0ZWQgPSB0cnVlO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXF1YWxIZWlnaHRFbGVtZW50cztcclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIHtcclxuICAgICNsYXN0V2luZG93V2lkdGg7XHJcbiAgICAjbGFzdFdpbmRvd0hlaWdodDtcclxuICAgICNmb290ZXJQb3NpdGlvblN0YXRlID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoIURPTS5tYWluKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiNsYXN0V2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLiNsYXN0V2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGhpcy4jb25XaW5kb3dMb2FkKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLiNvbldpbmRvd1Jlc2l6ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbldpbmRvd0xvYWQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLiNmaXhGb290ZXJBdE1pZGRsZVBhZ2UoKTtcclxuICAgICAgICB0aGlzLiNmaXhlZEZvb3RlcigpO1xyXG4gICAgICAgIHRoaXMuI3BhcmFsbGF4Rm9vdGVyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbldpbmRvd1Jlc2l6ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI2ZpeEZvb3RlckF0TWlkZGxlUGFnZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLiNsYXN0V2luZG93V2lkdGggIT09IHdpbmRvdy5pbm5lcldpZHRoIHx8IHRoaXMuI2xhc3RXaW5kb3dIZWlnaHQgIT09IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLiNmaXhlZEZvb3RlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiNwYXJhbGxheEZvb3RlcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjZml4Rm9vdGVyQXRNaWRkbGVQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdwQWRtaW5iYXJIZWlnaHQgPSBET00uV1BBZG1pbmJhcj8ub2Zmc2V0SGVpZ2h0ID8/IDA7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyQmFySGVpZ2h0ID0gRE9NLmZvb3Rlci5mb290ZXJCYXI/Lm9mZnNldEhlaWdodCA/PyAwO1xyXG4gICAgICAgIGNvbnN0IGh0bWxIZWlnaHQgPSBET00uaHRtbC5vZmZzZXRIZWlnaHQgLSB3cEFkbWluYmFySGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoaHRtbEhlaWdodCA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICBET00ud3JhcC5zdHlsZS5jc3NUZXh0ID0gYFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gJHt3cEFkbWluYmFySGVpZ2h0fXB4IC0gJHtmb290ZXJCYXJIZWlnaHR9cHgpO1xyXG4gICAgICAgICAgICBgO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEhRE9NLmZvb3Rlci5jYWxsb3V0Rm9vdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBET00uZm9vdGVyLmNhbGxvdXRGb290ZXIuc3R5bGUubWFyZ2luVG9wID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoISFET00uZm9vdGVyLnNpdGVGb290ZXIpIHtcclxuICAgICAgICAgICAgICAgIERPTS5mb290ZXIuc2l0ZUZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy4jZm9vdGVyUG9zaXRpb25TdGF0ZSA9IFwiY2hhbmdlZFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy4jZm9vdGVyUG9zaXRpb25TdGF0ZSA9PT0gXCJjaGFuZ2VkXCIpIHtcclxuICAgICAgICAgICAgRE9NLndyYXAuc3R5bGUuY3NzVGV4dCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBpZiAoISFET00uZm9vdGVyLmNhbGxvdXRGb290ZXIpIHtcclxuICAgICAgICAgICAgICAgIERPTS5mb290ZXIuY2FsbG91dEZvb3Rlci5zdHlsZS5tYXJnaW5Ub3AgPSBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgRE9NLmZvb3Rlci5zaXRlRm9vdGVyLnN0eWxlLm1hcmdpblRvcCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuI2Zvb3RlclBvc2l0aW9uU3RhdGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgI2ZpeGVkRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJoYXMtZml4ZWQtZm9vdGVyXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG5cclxuICAgICAgICBpZiAoISFET00uV1BBZG1pbmJhcikge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSBET00uV1BBZG1pbmJhci5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBET00ubWFpbi5zdHlsZS5taW5IZWlnaHQgPSBET00ubWFpbi5vZmZzZXRIZWlnaHQgKyAod2luZG93LmlubmVySGVpZ2h0IC0gRE9NLmh0bWwub2Zmc2V0SGVpZ2h0IC0gb2Zmc2V0KSArIFwicHhcIjtcclxuICAgIH07XHJcblxyXG4gICAgI3BhcmFsbGF4Rm9vdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJoYXMtcGFyYWxsYXgtZm9vdGVyXCIpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1haW5TZWN0aW9uTWFyZ2luQm90dG9tID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICBtYWluU2VjdGlvbk1hcmdpbkJvdHRvbSArPSBET00uZm9vdGVyLnBhcmFsbGF4Py5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEhRE9NLmZvb3Rlci5jYWxsb3V0Rm9vdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRE9NLmZvb3Rlci5jYWxsb3V0Rm9vdGVyLnN0eWxlLmJvdHRvbSA9IGAke21haW5TZWN0aW9uTWFyZ2luQm90dG9tfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBtYWluU2VjdGlvbk1hcmdpbkJvdHRvbSArPSBET00uZm9vdGVyLmNhbGxvdXRGb290ZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIERPTS5tYWluLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGAke21haW5TZWN0aW9uTWFyZ2luQm90dG9tfXB4YDtcclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IFZlcnRpY2FsSGVhZGVyIGZyb20gXCIuL2hlYWRlci92ZXJ0aWNhbFwiO1xyXG5cclxuY2xhc3MgSGVhZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudmVydGljYWwgPSBuZXcgVmVydGljYWxIZWFkZXIoKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBzbGlkZURvd24sIHNsaWRlVXAgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBWZXJ0aWNhbEhlYWRlciB7XHJcbiAgICAjbWVudUl0ZW1zUGx1c0ljb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKCFET00uaGVhZGVyLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICBET00uaGVhZGVyLnZlcnRpY2FsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuOm5vdCguYnRuKSA+IGFcIikuZm9yRWFjaCgobWVudUxpbmspID0+IHtcclxuICAgICAgICAgICAgbWVudUxpbmsuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsICc8c3BhbiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZVwiIHRhYmluZGV4PVwiMFwiPjwvc3Bhbj4nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zUGx1c0ljb24gPVxyXG4gICAgICAgICAgICBvcHRpb25zLnZlcnRpY2FsSGVhZGVyVGFyZ2V0ID09IFwibGlua1wiXHJcbiAgICAgICAgICAgICAgICA/IERPTS5oZWFkZXIudmVydGljYWwucXVlcnlTZWxlY3RvckFsbChcImxpLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4gPiBhXCIpXHJcbiAgICAgICAgICAgICAgICA6IERPTS5oZWFkZXIudmVydGljYWwucXVlcnlTZWxlY3RvckFsbChcIi5kcm9wZG93bi10b2dnbGVcIik7XHJcblxyXG4gICAgICAgIG5ldyBQZXJmZWN0U2Nyb2xsYmFyKERPTS5oZWFkZXIudmVydGljYWwsIHtcclxuICAgICAgICAgICAgd2hlZWxTcGVlZDogMC41LFxyXG4gICAgICAgICAgICBzdXBwcmVzc1Njcm9sbFg6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdXBwcmVzc1Njcm9sbFk6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiNtZW51SXRlbXNQbHVzSWNvbi5mb3JFYWNoKChtZW51SXRlbVBsdXNJY29uKSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrKTtcclxuICAgICAgICAgICAgbWVudUl0ZW1QbHVzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwidGFwXCIsIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgRE9NLm1lbnUudmVydGljYWwudG9nZ2xlTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ub2dnbGVNZW51QnRuQ2xpY2spO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLiNvbkRvY3VtZW50S2V5ZG93bik7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbk1lbnVJdGVtUGx1c0ljb25DbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtUGx1c0ljb24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID1cclxuICAgICAgICAgICAgb3B0aW9ucy52ZXJ0aWNhbEhlYWRlclRhcmdldCA9PSBcImxpbmtcIiA/IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZSA6IG1lbnVJdGVtUGx1c0ljb24ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBtZW51SXRlbS5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICBpZiAoIW1lbnVJdGVtPy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgc2xpZGVEb3duKHN1Yk1lbnUsIDI1MCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgc2xpZGVVcChzdWJNZW51LCAyNTApO1xyXG5cclxuICAgICAgICAgICAgbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZVwiKT8uZm9yRWFjaCgob3Blbk1lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvcGVuTWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHNsaWRlVXAob3Blbk1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKSwgMjUwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjb25Ub2dnbGVNZW51QnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZoLW9wZW5lZFwiKSkge1xyXG4gICAgICAgICAgICBET00uYm9keS5jbGFzc0xpc3QuYWRkKFwidmgtb3BlbmVkXCIpO1xyXG4gICAgICAgICAgICBET00ubWVudS52ZXJ0aWNhbC50b2dnbGVNZW51QnRuLnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpLmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRE9NLmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInZoLW9wZW5lZFwiKTtcclxuICAgICAgICAgICAgRE9NLm1lbnUudmVydGljYWwudG9nZ2xlTWVudUJ0bi5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRE9NLm1lbnUudmVydGljYWwudG9nZ2xlTWVudUJ0bi5mb2N1cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYXAga2V5Ym9hcmQgbmF2aWdhdGlvblxyXG4gICAgICovXHJcbiAgICAjb25Eb2N1bWVudEtleWRvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0YWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xyXG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XHJcbiAgICAgICAgY29uc3QgZXNjS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMjc7XHJcbiAgICAgICAgY29uc3QgZW50ZXJLZXkgPSBldmVudC5rZXlDb2RlID09PSAxMztcclxuXHJcbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBET00uaGVhZGVyLnZlcnRpY2FsPy5xdWVyeVNlbGVjdG9yQWxsKFwiYSwgc3Bhbi5kcm9wZG93bi10b2dnbGUsIGlucHV0LCBidXR0b25cIik7XHJcbiAgICAgICAgY29uc3QgbmF2Rmlyc3RFbGVtZW50ID0gbmF2RWxlbWVudHMgPyBuYXZFbGVtZW50c1swXSA6IFwiXCI7XHJcbiAgICAgICAgY29uc3QgbmF2TGFzdEVsZW1lbnQgPSBuYXZFbGVtZW50cyA/IG5hdkVsZW1lbnRzW25hdkVsZW1lbnRzLmxlbmd0aCAtIDFdIDogXCJcIjtcclxuXHJcbiAgICAgICAgbmF2TGFzdEVsZW1lbnQuc3R5bGUub3V0bGluZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmIChET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbC1oZWFkZXItc3R5bGVcIikpIHtcclxuICAgICAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aC1jbG9zZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLXRvZ2dsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aC1vcGVuZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVzY0tleSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLiNvblRvZ2dsZU1lbnVCdG5DbGljayhldmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGVudGVyS2V5ICYmXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tdG9nZ2xlXCIpICYmXHJcbiAgICAgICAgICAgIERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInZoLWNsb3NlZFwiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZMYXN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBuYXZGaXJzdEVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcclxuICAgICAgICBpZiAodGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gbmF2TGFzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZXJ0aWNhbEhlYWRlcjtcclxuIiwiaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgRnVsbFNjcmVlbk1lbnUgZnJvbSBcIi4vbWVudS9mdWxsLXNjcmVlblwiO1xyXG5pbXBvcnQgTWVnYU1lbnUgZnJvbSBcIi4vbWVudS9tZWdhXCI7XHJcblxyXG5jbGFzcyBNZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgICNzdGFydCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmZ1bGxTY3JlZW4gPSBuZXcgRnVsbFNjcmVlbk1lbnUoKTtcclxuICAgICAgICB0aGlzLm1lZ2EgPSBuZXcgTWVnYU1lbnUoKTtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpLm5hdi1uby1jbGljayA+IGFcIikuZm9yRWFjaCgobm9DbGlja01lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIG5vQ2xpY2tNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Ob0NsaWNrTWVudUl0ZW1DbGljayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bC5zZi1tZW51XCIpLmZvckVhY2goKG1lbnUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50TWVudUl0ZW1zID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIik7XHJcbiAgICAgICAgICAgIHBhcmVudE1lbnVJdGVtcy5mb3JFYWNoKChwYXJlbnRNZW51SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50TWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy4jb25QYXJlbnRNZW51SXRlbU1vdXNlZW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50TWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy4jb25QYXJlbnRNZW51SXRlbU1vdXNlbGVhdmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTm9DbGlja01lbnVJdGVtQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25QYXJlbnRNZW51SXRlbU1vdXNlZW50ZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJlbnRNZW51SXRlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IHBhcmVudE1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5zdWItbWVudVwiKTtcclxuXHJcbiAgICAgICAgcGFyZW50TWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcInNmSG92ZXJcIik7XHJcblxyXG4gICAgICAgIGZhZGVJbihzdWJNZW51KTtcclxuICAgIH07XHJcblxyXG4gICAgI29uUGFyZW50TWVudUl0ZW1Nb3VzZWxlYXZlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50TWVudUl0ZW0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBwYXJlbnRNZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwidWwuc3ViLW1lbnVcIik7XHJcblxyXG4gICAgICAgIHBhcmVudE1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZkhvdmVyXCIpO1xyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICBmYWRlT3V0KHN1Yk1lbnUsIHtcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUucG9pbnRlckV2ZW50cyA9IG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQsIHNsaWRlRG93biwgc2xpZGVVcCB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcblxuY2xhc3MgRnVsbFNjcmVlbk1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAoIURPTS5tZW51LmZ1bGxTY3JlZW4udG9nZ2xlTWVudUJ0bikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWFycm93XCIpLmZvckVhY2goKHBsdXNCdG4pID0+IHtcbiAgICAgICAgICAgIHBsdXNCdG4uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi50b2dnbGVNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZU1lbnVCdG5DbGljayk7XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICcjZnVsbC1zY3JlZW4tbWVudSAjc2l0ZS1uYXZpZ2F0aW9uIHVsID4gbGkuZHJvcGRvd24gPiBhID4gLnRleHQtd3JhcCA+IHNwYW4ubmF2LWFycm93LCAjZnVsbC1zY3JlZW4tbWVudSAjc2l0ZS1uYXZpZ2F0aW9uIHVsID4gbGkuZHJvcGRvd24gPiBhW2hyZWY9XCIjXCJdJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgPy5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUxpbmtDbGljayk7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXBcIiwgdGhpcy4jb25NZW51TGlua0NsaWNrKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiBhLm1lbnUtbGlua1tocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKVxuICAgICAgICAgICAgLmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51SGFzaHRhZ0xpbmtDbGljayk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLiNvbkRvY3VtZW50S2V5ZG93bik7XG4gICAgfTtcblxuICAgICNvblRvZ2dsZU1lbnVCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHRvZ2dsZU1lbnVCdG4gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIGlmICghdG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJleGl0XCIpKSB7XG4gICAgICAgICAgICB0aGlzLiNvcGVuTWVudSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4jY2xvc2VNZW51KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgI29uTWVudUxpbmtDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBtZW51SXRlbUxpbmsgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IG1lbnVJdGVtTGluay5jbG9zZXN0KFwibGkuZHJvcGRvd25cIik7XG4gICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBtZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwidWwuc3ViLW1lbnVcIik7XG5cbiAgICAgICAgaWYgKCEod2luZG93LmdldENvbXB1dGVkU3R5bGUoc3ViTWVudSkuZGlzcGxheSA9PT0gXCJub25lXCIpKSB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1zdWJcIik7XG4gICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDI1MCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwib3Blbi1zdWJcIik7XG4gICAgICAgICAgICBzbGlkZURvd24oc3ViTWVudSwgMjUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25NZW51SGFzaHRhZ0xpbmtDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICB9O1xuXG4gICAgI29wZW5NZW51ID0gKCkgPT4ge1xuICAgICAgICBET00uaGVhZGVyLmZ1bGxTY3JlZW4uY2xhc3NMaXN0LmFkZChcIm5hdi1vcGVuXCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLnRvZ2dsZU1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImV4aXRcIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4ubG9nbz8uY2xhc3NMaXN0LmFkZChcIm9wZW5lZFwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgZmFkZUluKERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudSk7XG5cbiAgICAgICAgY29uc3QgaHRtbFdpZHRoQmVmb3JlT3ZlcmZsb3dIaWRkZW4gPSBET00uaHRtbC5pbm5lcldpZHRoO1xuICAgICAgICBET00uaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGNvbnN0IGh0bWxXaWR0aEFmdGVyT3ZlcmZsb3dIaWRkZW4gPSBET00uaHRtbC5pbm5lcldpZHRoO1xuICAgICAgICBET00uaHRtbC5zdHlsZS5tYXJnaW5SaWdodCA9IGh0bWxXaWR0aEJlZm9yZU92ZXJmbG93SGlkZGVuIC0gaHRtbFdpZHRoQWZ0ZXJPdmVyZmxvd0hpZGRlbiArIFwicHhcIjtcbiAgICB9O1xuXG4gICAgI2Nsb3NlTWVudSA9ICgpID0+IHtcbiAgICAgICAgRE9NLmhlYWRlci5mdWxsU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtb3BlblwiKTtcbiAgICAgICAgRE9NLm1lbnUuZnVsbFNjcmVlbi50b2dnbGVNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJleGl0XCIpO1xuICAgICAgICBET00ubWVudS5mdWxsU2NyZWVuLmxvZ28/LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuZWRcIik7XG4gICAgICAgIERPTS5tZW51LmZ1bGxTY3JlZW4ubWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgIGZhZGVPdXQoRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51KTtcblxuICAgICAgICBET00uaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwiXCI7XG4gICAgICAgIERPTS5odG1sLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJcIjtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2Z1bGwtc2NyZWVuLW1lbnUgI3NpdGUtbmF2aWdhdGlvbiB1bCA+IGxpLmRyb3Bkb3duXCIpLmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1zdWJcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZnVsbC1zY3JlZW4tbWVudSAjc2l0ZS1uYXZpZ2F0aW9uIHVsLnN1Yi1tZW51XCIpLmZvckVhY2goKHN1Yk1lbnUpID0+IHtcbiAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjUwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYXAga2V5Ym9hcmQgbmF2aWdhdGlvbiBpbiB0aGUgbWVudSBtb2RhbC5cbiAgICAgKi9cbiAgICAjb25Eb2N1bWVudEtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFET00ubWVudS5mdWxsU2NyZWVuLm1lbnU/LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFiS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gOTtcbiAgICAgICAgY29uc3Qgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleTtcbiAgICAgICAgY29uc3QgZXNjS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMjc7XG4gICAgICAgIGNvbnN0IGVudGVyS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMTM7XG5cbiAgICAgICAgY29uc3QgY2xvc2VJY29uID0gRE9NLm1lbnUuZnVsbFNjcmVlbi50b2dnbGVNZW51QnRuO1xuXG4gICAgICAgIGNvbnN0IG5hdkVsZW1lbnRzID0gRE9NLm1lbnUuZnVsbFNjcmVlbi5tZW51XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIm5hdlwiKVxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLCBzcGFuLm5hdi1hcnJvdywgaW5wdXQsIGJ1dHRvblwiKTtcblxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1swXTtcbiAgICAgICAgY29uc3QgbmF2TGFzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1tuYXZFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiXCI7XG5cbiAgICAgICAgaWYgKGVzY0tleSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudGVyS2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LWFycm93XCIpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2TGFzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIGluIHRoZSBtZW51LCBkb24ndCBtb3ZlIHRoZSBmb2N1c1xuICAgICAgICBpZiAodGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gbmF2TGFzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGdWxsU2NyZWVuTWVudTtcbiIsImltcG9ydCB7IERPTSwgb3B0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcblxuY2xhc3MgTWVnYU1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBET00ubWVudS5tZWdhLm1lbnVDb250ZW50cy5mb3JFYWNoKChtZW51Q29udGVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBtZW51Q29udGVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1MZWZ0T2Zmc2V0ID0gb2Zmc2V0KG1lbnVJdGVtKS5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgbWVudUNvbnRlbnRXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG1lbnVDb250ZW50KS53aWR0aCk7XG4gICAgICAgICAgICBsZXQgaG9yaXpvbnRhbFBvc2l0aW9uO1xuICAgICAgICAgICAgbGV0IGhvcml6b250YWxNYXJnaW47XG5cbiAgICAgICAgICAgIGlmIChtZW51SXRlbUxlZnRPZmZzZXQgLSBtZW51Q29udGVudFdpZHRoIC8gMiA8IDApIHtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsUG9zaXRpb24gPSBtZW51SXRlbUxlZnRPZmZzZXQgLSAxMDtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsTWFyZ2luID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uID0gbWVudUNvbnRlbnRXaWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbE1hcmdpbiA9IG1lbnVJdGVtLm9mZnNldFdpZHRoIC8gMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmlzUlRMKSB7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUubGVmdCA9IGAtJHtob3Jpem9udGFsUG9zaXRpb259cHhgO1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLm1hcmdpbkxlZnQgPSBgJHtob3Jpem9udGFsTWFyZ2lufXB4YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUucmlnaHQgPSBgLSR7aG9yaXpvbnRhbFBvc2l0aW9ufXB4YDtcbiAgICAgICAgICAgICAgICBtZW51Q29udGVudC5zdHlsZS5tYXJnaW5SaWdodCA9IGAke2hvcml6b250YWxNYXJnaW59cHhgO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLVxuICAgICAgICAgICAgICAgICAgICBtZW51SXRlbUxlZnRPZmZzZXQgLVxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsUG9zaXRpb24gK1xuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsTWFyZ2luICtcbiAgICAgICAgICAgICAgICAgICAgbWVudUNvbnRlbnRXaWR0aCA8XG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgbWVudUNvbnRlbnQuc3R5bGUubGVmdCA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgICAgIG1lbnVDb250ZW50LnN0eWxlLnJpZ2h0ID0gYC0ke1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAtIG1lbnVJdGVtTGVmdE9mZnNldCAtIG1lbnVJdGVtLm9mZnNldFdpZHRoIC0gMTBcbiAgICAgICAgICAgICAgICB9cHhgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5tZW51Lm1lZ2EubWVudUl0ZW1zLmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICBtZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLiNvbk1lbnVJdGVtTW91c2VFbnRlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRvcGJhciBtZW51IGl0ZW1zXG4gICAgICAgIERPTS5tZW51Lm1lZ2EudG9wYmFyTWVudUl0ZW1zLmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICBtZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLiNvblRvcGJhck1lbnVJdGVtTW91c2VFbnRlcik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjb25NZW51SXRlbU1vdXNlRW50ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IERPTS5oZWFkZXIuc2l0ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZWRpdW0taGVhZGVyXCIpXG4gICAgICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1uYXZpZ2F0aW9uLXdyYXAgPiAuY29udGFpbmVyXCIpXG4gICAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXItaW5uZXJcIik7XG5cbiAgICAgICAgdGhpcy4jbWVudUl0ZW1Nb3VzZUVudGVyKHdyYXBwZXIsIGV2ZW50KTtcbiAgICB9O1xuXG4gICAgI29uVG9wYmFyTWVudUl0ZW1Nb3VzZUVudGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBET00uaGVhZGVyLnRvcGJhcjtcblxuICAgICAgICB0aGlzLiNtZW51SXRlbU1vdXNlRW50ZXIod3JhcHBlciwgZXZlbnQpO1xuICAgIH07XG5cbiAgICAjbWVudUl0ZW1Nb3VzZUVudGVyID0gKHdyYXBwZXIsIGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIubWVnYW1lbnVcIik7XG4gICAgICAgIGxldCBsZWZ0UG9zaXRpb24gPSBwYXJzZUludChvZmZzZXQobWVudUl0ZW0pLmxlZnQgLSBvZmZzZXQod3JhcHBlcikubGVmdCArIDEpO1xuXG4gICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImJveGVkLWxheW91dFwiKSkge1xuICAgICAgICAgICAgbGVmdFBvc2l0aW9uID0gbGVmdFBvc2l0aW9uIC0gMzA7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZW50LnN0eWxlLmxlZnQgPSBgLSR7bGVmdFBvc2l0aW9ufXB4YDtcbiAgICAgICAgY29udGVudC5zdHlsZS53aWR0aCA9IGAke3dyYXBwZXIub2Zmc2V0V2lkdGh9cHhgO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZ2FNZW51O1xuIiwiaW1wb3J0IERyb3BEb3duTW9iaWxlTWVudSBmcm9tIFwiLi9tb2JpbGUtbWVudS9kcm9wLWRvd25cIjtcclxuaW1wb3J0IEZ1bGxTY3JlZW5Nb2JpbGVNZW51IGZyb20gXCIuL21vYmlsZS1tZW51L2Z1bGwtc2NyZWVuXCI7XHJcbmltcG9ydCBTaWRlYmFyTW9iaWxlTWVudSBmcm9tIFwiLi9tb2JpbGUtbWVudS9zaWRlYmFyXCI7XHJcblxyXG5jbGFzcyBNb2JpbGVNZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZHJvcERvd24gPSBuZXcgRHJvcERvd25Nb2JpbGVNZW51KCk7XHJcbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuID0gbmV3IEZ1bGxTY3JlZW5Nb2JpbGVNZW51KCk7XHJcbiAgICAgICAgdGhpcy5zaWRlYmFyID0gbmV3IFNpZGViYXJNb2JpbGVNZW51KCk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51O1xyXG4iLCJpbXBvcnQgZGVsZWdhdGUgZnJvbSBcImRlbGVnYXRlXCI7XG5pbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzbGlkZVVwLCBzbGlkZURvd24sIHNsaWRlVG9nZ2xlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuXG5jbGFzcyBEcm9wRG93bk1vYmlsZU1lbnUge1xuICAgICNpc01lbnVPcGVuO1xuICAgICNtZW51SXRlbXNUb2dnbGVJY29uO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tbW9iaWxlXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNpc01lbnVPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUubWVudUl0ZW1zSGFzQ2hpbGRyZW4/LmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSBcImRyb3Bkb3duLXRvZ2dsZVwiO1xuICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKTtcblxuICAgICAgICAgICAgbWVudUl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpWzBdLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNtZW51SXRlbXNUb2dnbGVJY29uID1cbiAgICAgICAgICAgIG9wdGlvbnMuc2lkckRyb3Bkb3duVGFyZ2V0ID09IFwibGlua1wiXG4gICAgICAgICAgICAgICAgPyBET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyPy5xdWVyeVNlbGVjdG9yQWxsKFwibGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIilcbiAgICAgICAgICAgICAgICA6IERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXI/LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJvcGRvd24tdG9nZ2xlXCIpO1xuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgZGVsZWdhdGUoZG9jdW1lbnQuYm9keSwgXCIubW9iaWxlLW1lbnVcIiwgXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZU1lbnVCdXR0b25DbGljayk7XG5cbiAgICAgICAgRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlcj8ucXVlcnlTZWxlY3RvckFsbCgnbGkgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5mb3JFYWNoKChtZW51SXRlbUxpbmspID0+IHtcbiAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51Q2xvc2VDbGljayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbk1lbnVDbG9zZUNsaWNrKTtcblxuICAgICAgICBET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy4jb25XaW5kb3dSZXNpemUpO1xuXG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uSGFtYnVyZ2VyQ2xpY2spO1xuXG4gICAgICAgIHRoaXMuI21lbnVJdGVtc1RvZ2dsZUljb24/LmZvckVhY2goKG1lbnVJdGVtUGx1c0ljb24pID0+IHtcbiAgICAgICAgICAgIG1lbnVJdGVtUGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uTWVudUl0ZW1QbHVzSWNvbkNsaWNrKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xuICAgIH07XG5cbiAgICAjb25Ub2dnbGVNZW51QnV0dG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgISFET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyICYmIHNsaWRlVG9nZ2xlKERPTS5tb2JpbGVNZW51Lm5hdldyYXBwZXIsIDQwMCk7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4/LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuZWRcIik7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnRvZ2dsZShcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bj8uZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgI29uTWVudUNsb3NlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgISFET00ubW9iaWxlTWVudS5uYXZXcmFwcGVyICYmIHNsaWRlVXAoRE9NLm1vYmlsZU1lbnUubmF2V3JhcHBlciwgMjUwKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5lZFwiKTtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuICAgIH07XG5cbiAgICAjb25XaW5kb3dSZXNpemUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDk2MCkge1xuICAgICAgICAgICAgdGhpcy4jb25NZW51Q2xvc2VDbGljaygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbkhhbWJ1cmdlckNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuI2lzTWVudU9wZW4gPSAhdGhpcy4jaXNNZW51T3BlbjtcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRoaXMuI2lzTWVudU9wZW4pO1xuICAgIH07XG5cbiAgICAjb25NZW51SXRlbVBsdXNJY29uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1QbHVzSWNvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID1cbiAgICAgICAgICAgIG9wdGlvbnMuc2lkckRyb3Bkb3duVGFyZ2V0ID09IFwibGlua1wiID8gbWVudUl0ZW1QbHVzSWNvbi5wYXJlbnROb2RlIDogbWVudUl0ZW1QbHVzSWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBtZW51SXRlbS5sYXN0RWxlbWVudENoaWxkO1xuXG4gICAgICAgIGlmICghbWVudUl0ZW0/LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHNsaWRlRG93bihzdWJNZW51LCAyNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjUwKTtcblxuICAgICAgICAgICAgbWVudUl0ZW0ucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZVwiKT8uZm9yRWFjaCgob3Blbk1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgb3Blbk1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgc2xpZGVVcChvcGVuTWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcInVsXCIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYXAga2V5Ym9hcmQgbmF2aWdhdGlvblxuICAgICAqL1xuICAgICNvbkRvY3VtZW50S2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIURPTS5tb2JpbGVNZW51LnRvZ2dsZU1lbnVCdG4/LmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5lZFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFiS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gOTtcbiAgICAgICAgY29uc3Qgc2hpZnRLZXkgPSBldmVudC5zaGlmdEtleTtcbiAgICAgICAgY29uc3QgZXNjS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMjc7XG4gICAgICAgIGNvbnN0IGVudGVyS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMTM7XG5cbiAgICAgICAgY29uc3QgY2xvc2VJY29uID0gRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bjtcblxuICAgICAgICBjb25zdCBuYXZFbGVtZW50cyA9IERPTS5tb2JpbGVNZW51Lm5hdj8ucXVlcnlTZWxlY3RvckFsbChcImEsIHNwYW4uZHJvcGRvd24tdG9nZ2xlLCBpbnB1dCwgYnV0dG9uXCIpO1xuXG4gICAgICAgIGNvbnN0IG5hdkZpcnN0RWxlbWVudCA9IG5hdkVsZW1lbnRzWzBdO1xuICAgICAgICBjb25zdCBuYXZMYXN0RWxlbWVudCA9IG5hdkVsZW1lbnRzW25hdkVsZW1lbnRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGlmICghIWNsb3NlSWNvbikge1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVzY0tleSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuI29uTWVudUNsb3NlQ2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRlcktleSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRyb3Bkb3duLXRvZ2dsZVwiKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkxhc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2Rmlyc3RFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnN0eWxlLm91dGxpbmUgPSBcIjFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXCI7XG4gICAgICAgICAgICBjbG9zZUljb24uZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBpbiB0aGUgbWVudSwgZG9uJ3QgbW92ZSB0aGUgZm9jdXNcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcERvd25Nb2JpbGVNZW51O1xuIiwiaW1wb3J0IGRlbGVnYXRlIGZyb20gXCJkZWxlZ2F0ZVwiO1xuaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgc2xpZGVVcCwgc2xpZGVEb3duLCBmYWRlSW4sIGZhZGVPdXQsIHZpc2libGUgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNsYXNzIEZ1bGxTY3JlZW5Nb2JpbGVNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJmdWxsc2NyZWVuLW1vYmlsZVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzdGFydCA9ICgpID0+IHtcbiAgICAgICAgRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbj8ucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKT8uZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICBtZW51SXRlbUxpbmsuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsICc8c3BhbiBjbGFzcz1cImRyb3Bkb3duLXRvZ2dsZVwiIHRhYmluZGV4PTA+PC9zcGFuPicpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcblxuICAgICAgICBkZWxlZ2F0ZShkb2N1bWVudC5ib2R5LCBcIi5tb2JpbGUtbWVudVwiLCBcImNsaWNrXCIsIHRoaXMuI29uTWVudUJ1dHRvbkNsaWNrKTtcblxuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJyNtb2JpbGUtZnVsbHNjcmVlbiBuYXYgdWwgPiBsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYSA+IHNwYW4uZHJvcGRvd24tdG9nZ2xlLCAjbW9iaWxlLWZ1bGxzY3JlZW4gbmF2IHVsID4gbGkubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFbaHJlZj1cIiNcIl0nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkRyb3Bvd25Ub2dnbGVJY29uKTtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcInRhcFwiLCB0aGlzLiNvbkRyb3Bvd25Ub2dnbGVJY29uKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAnI21vYmlsZS1mdWxsc2NyZWVuIC5mcy1kcm9wZG93bi1tZW51IGxpIGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCAjbW9iaWxlLWZ1bGxzY3JlZW4gI21vYmlsZS1uYXYgbGkgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksICNtb2JpbGUtZnVsbHNjcmVlbiBhLmNsb3NlJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25DbG9zZUljb25DbGljayk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLiNvbkRvY3VtZW50S2V5ZG93bik7XG4gICAgfTtcblxuICAgICNvbk1lbnVCdXR0b25DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBET00ubW9iaWxlTWVudS50b2dnbGVNZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJleGl0XCIpO1xuICAgICAgICBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LmFkZChcImlzLWFjdGl2ZVwiKTtcblxuICAgICAgICBmYWRlSW4oRE9NLm1vYmlsZU1lbnUuZnVsbFNjcmVlbik7XG5cbiAgICAgICAgY29uc3QgaHRtbFdpZHRoQmVmb3JlT3ZlcmZsb3dIaWRkZW4gPSBET00uaHRtbC5pbm5lcldpZHRoO1xuICAgICAgICBET00uaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGNvbnN0IGh0bWxXaWR0aEFmdGVyT3ZlcmZsb3dIaWRkZW4gPSBET00uaHRtbC5pbm5lcldpZHRoO1xuICAgICAgICBET00uaHRtbC5zdHlsZS5tYXJnaW5SaWdodCA9IGh0bWxXaWR0aEFmdGVyT3ZlcmZsb3dIaWRkZW4gLSBodG1sV2lkdGhCZWZvcmVPdmVyZmxvd0hpZGRlbiArIFwicHhcIjtcblxuICAgICAgICBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuLnF1ZXJ5U2VsZWN0b3IoXCJhLmNsb3NlXCIpLmZvY3VzKCk7XG4gICAgfTtcblxuICAgICNvbkNsb3NlSWNvbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3Vic3RyaW5nKDAsIDEpID09PSBcIiNcIikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgIH07XG5cbiAgICAjY2xvc2VNZW51ID0gKCkgPT4ge1xuICAgICAgICBpZiAodmlzaWJsZShET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuKSkge1xuICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUudG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiZXhpdFwiKTtcbiAgICAgICAgICAgIERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgZmFkZU91dChET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuKTtcblxuICAgICAgICAgICAgRE9NLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgICAgICAgICAgRE9NLmh0bWwuc3R5bGUubWFyZ2luUmlnaHQgPSBcIlwiO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21vYmlsZS1mdWxsc2NyZWVuIG5hdiB1bCA+IGxpLmRyb3Bkb3duXCIpLmZvckVhY2goKG1lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW4tc3ViXCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbW9iaWxlLWZ1bGxzY3JlZW4gbmF2IHVsLnN1Yi1tZW51XCIpLmZvckVhY2goKHN1Yk1lbnUpID0+IHtcbiAgICAgICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDI1MCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbldpbmRvd1Jlc2l6ZSA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gOTYwKSB7XG4gICAgICAgICAgICB0aGlzLiNjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25Ecm9wb3duVG9nZ2xlSWNvbiA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCBtZW51SXRlbUxpbmsgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IG1lbnVJdGVtTGluay5jbG9zZXN0KFwibGkubWVudS1pdGVtLWhhcy1jaGlsZHJlblwiKTtcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IG1lbnVJdGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bC5zdWItbWVudVwiKTtcblxuICAgICAgICBpZiAoISh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShzdWJNZW51KS5kaXNwbGF5ID09PSBcIm5vbmVcIikpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgICAgIHNsaWRlVXAoc3ViTWVudSwgMjUwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJvcGVuLXN1YlwiKTtcbiAgICAgICAgICAgIHNsaWRlRG93bihzdWJNZW51LCAyNTApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYXAga2V5Ym9hcmQgbmF2aWdhdGlvbiBpbiB0aGUgbWVudSBtb2RhbC5cbiAgICAgKi9cbiAgICAjb25Eb2N1bWVudEtleWRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuPy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gZXZlbnQuc2hpZnRLZXk7XG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xuICAgICAgICBjb25zdCBlbnRlcktleSA9IGV2ZW50LmtleUNvZGUgPT09IDEzO1xuXG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IERPTS5tb2JpbGVNZW51LmZ1bGxTY3JlZW4ucXVlcnlTZWxlY3RvcihcImEuY2xvc2VcIik7XG5cbiAgICAgICAgY29uc3QgbmF2RWxlbWVudHMgPSBET00ubW9iaWxlTWVudS5mdWxsU2NyZWVuXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIm5hdlwiKVxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLCBzcGFuLmRyb3Bkb3duLXRvZ2dsZSwgaW5wdXQsIGJ1dHRvblwiKTtcblxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1swXTtcbiAgICAgICAgY29uc3QgbmF2TGFzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1tuYXZFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiXCI7XG5cbiAgICAgICAgaWYgKGVzY0tleSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlTWVudSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudGVyS2V5ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJvcGRvd24tdG9nZ2xlXCIpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaGlmdEtleSAmJiB0YWJLZXkgJiYgbmF2TGFzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIGVsZW1lbnRzIGluIHRoZSBtZW51LCBkb24ndCBtb3ZlIHRoZSBmb2N1c1xuICAgICAgICBpZiAodGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gbmF2TGFzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGdWxsU2NyZWVuTW9iaWxlTWVudTtcbiIsImltcG9ydCBkZWxlZ2F0ZSBmcm9tIFwiZGVsZWdhdGVcIjtcclxuaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQsIHNsaWRlRG93biwgc2xpZGVVcCB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcclxuXHJcbmNsYXNzIFNpZGViYXJNb2JpbGVNZW51IHtcclxuICAgICNpc01lbnVPcGVuO1xyXG4gICAgI21lbnVJdGVtc1BsdXNJY29uO1xyXG4gICAgI3NpZGViYXJUb2dnbGVNZW51QnRuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zaWRyU291cmNlICE9PSBcInVuZGVmaW5lZFwiICYmIERPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInNpZGViYXItbW9iaWxlXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuI3N0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI2lzTWVudU9wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy4jc3RhcnRTaWRyUGx1Z2luKCk7XHJcblxyXG4gICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRyLWNsYXNzLWRyb3Bkb3duLXRvZ2dsZVwiKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZHItY2xhc3MtbWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIikuZm9yRWFjaCgobWVudUl0ZW1MaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbUxpbmsuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsICc8c3BhbiBjbGFzcz1cInNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlXCIgdGFiaW5kZXg9MD48L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zUGx1c0ljb24gPVxyXG4gICAgICAgICAgICBvcHRpb25zLnNpZHJEcm9wZG93blRhcmdldCA9PSBcImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGkuc2lkci1jbGFzcy1tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiKVxyXG4gICAgICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc3RhcnRTaWRyUGx1Z2luID0gKCkgPT4ge1xyXG4gICAgICAgIHNpZHIubmV3KFwiLm1vYmlsZS1tZW51XCIsIHtcclxuICAgICAgICAgICAgbmFtZTogXCJzaWRyXCIsXHJcbiAgICAgICAgICAgIHNvdXJjZTogb3B0aW9ucy5zaWRyU291cmNlLFxyXG4gICAgICAgICAgICBzaWRlOiBvcHRpb25zLnNpZHJTaWRlLFxyXG4gICAgICAgICAgICBkaXNwbGFjZTogb3B0aW9ucy5zaWRyRGlzcGxhY2UsXHJcbiAgICAgICAgICAgIHNwZWVkOiAzMDAsXHJcbiAgICAgICAgICAgIHJlbmFtaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB0aW1pbmc6IFwiZWFzZVwiLFxyXG4gICAgICAgICAgICBiaW5kOiBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgIG9uT3BlbigpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhLnNpZHItY2xhc3MtdG9nZ2xlLXNpZHItY2xvc2VcIikuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmNsYXNzTGlzdC5hZGQoXCJpcy1hY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgRE9NLmhlYWRlci5zaXRlLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyZW5kXCIsICc8ZGl2IGNsYXNzPVwib2NlYW53cC1zaWRyLW92ZXJsYXlcIiB0YWJpbmRleD0wPjwvZGl2PicpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9jZWFud3Atc2lkci1vdmVybGF5XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZhZGVJbihvdmVybGF5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzaWRyLmNsb3NlKFwic2lkclwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNsb3NlKCkge1xyXG4gICAgICAgICAgICAgICAgRE9NLm1vYmlsZU1lbnUuaGFtYnVyZ2VyQnRuPy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkci1jbGFzcy1tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZSA+IHVsXCIpLmZvckVhY2goKHN1Yk1lbnVBY3RpdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJNZW51QWN0aXZlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkci1jbGFzcy1tZW51LWl0ZW0taGFzLWNoaWxkcmVuLmFjdGl2ZVwiKS5mb3JFYWNoKChtZW51SXRlbUFjdGl2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vY2VhbndwLXNpZHItb3ZlcmxheVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmYWRlT3V0KG92ZXJsYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NpZHIgW2NsYXNzKj1cInNpZHItY2xhc3MtZmFcIl0nKS5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICAgICAgICAgIGljb24uY2xhc3NOYW1lID0gaWNvbi5jbGFzc05hbWUucmVwbGFjZSgvXFxic2lkci1jbGFzcy1mYS4qP1xcYi9nLCBcImZhXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2lkciBbY2xhc3MqPVwic2lkci1jbGFzcy1pY29uXCJdJykuZm9yRWFjaCgoaWNvbikgPT4ge1xyXG4gICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9IGljb24uY2xhc3NOYW1lLnJlcGxhY2UoL1xcYnNpZHItY2xhc3MtaWNvbi0uKj9cXGIvZywgXCJpY29uLVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4jc2lkZWJhclRvZ2dsZU1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYS5zaWRyLWNsYXNzLXRvZ2dsZS1zaWRyLWNsb3NlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBET00ubW9iaWxlTWVudS5oYW1idXJnZXJCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkhhbWJ1cmdlckJ0bkNsaWNrKTtcclxuICAgICAgICB0aGlzLiNzaWRlYmFyVG9nZ2xlTWVudUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uU2lkZWJhckNsb3NlTWVudUJ0bkNsaWNrKTtcclxuXHJcbiAgICAgICAgdGhpcy4jbWVudUl0ZW1zUGx1c0ljb24/LmZvckVhY2goKG1lbnVJdGVtUGx1c0ljb24pID0+IHtcclxuICAgICAgICAgICAgbWVudUl0ZW1QbHVzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25NZW51SXRlbVBsdXNJY29uQ2xpY2spO1xyXG4gICAgICAgICAgICBtZW51SXRlbVBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLiNvbk1lbnVJdGVtUGx1c0ljb25DbGljayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRlbGVnYXRlKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LFxyXG4gICAgICAgICAgICAnLnNpZHItY2xhc3MtZHJvcGRvd24tbWVudSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgLnNpZHItY2xhc3MtbWVudS1pdGVtID4gYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknLFxyXG4gICAgICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlU2lkclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGRlbGVnYXRlKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LFxyXG4gICAgICAgICAgICAnLnNpZHItY2xhc3MtZHJvcGRvd24tbWVudSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgLnNpZHItY2xhc3MtbWVudS1pdGVtID4gYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknLFxyXG4gICAgICAgICAgICBcInRvdWNoZW5kXCIsXHJcbiAgICAgICAgICAgIHRoaXMuI2Nsb3NlU2lkclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaS5zaWRyLWNsYXNzLW5hdi1uby1jbGljayA+IGFcIik/LmZvckVhY2goKG1lbnVJdGVtTGluaykgPT4ge1xyXG4gICAgICAgICAgICBtZW51SXRlbUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy4jb25Eb2N1bWVudEtleWRvd24pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uV2luZG93UmVzaXplKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uSGFtYnVyZ2VyQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLiNpc01lbnVPcGVuID0gIXRoaXMuI2lzTWVudU9wZW47XHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRoaXMuI2lzTWVudU9wZW4pO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25TaWRlYmFyQ2xvc2VNZW51QnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICB0aGlzLiNjbG9zZVNpZHIoKTtcclxuICAgICAgICB0aGlzLiNzaWRlYmFyVG9nZ2xlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25NZW51SXRlbVBsdXNJY29uQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51SXRlbVBsdXNJY29uID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCBtZW51SXRlbSA9XHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2lkckRyb3Bkb3duVGFyZ2V0ID09IFwibGlua1wiID8gbWVudUl0ZW1QbHVzSWNvbi5wYXJlbnROb2RlIDogbWVudUl0ZW1QbHVzSWNvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgY29uc3Qgc3ViTWVudSA9IG1lbnVJdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIGlmICghbWVudUl0ZW0/LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBzbGlkZURvd24oc3ViTWVudSwgMjUwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBzbGlkZVVwKHN1Yk1lbnUsIDI1MCk7XHJcblxyXG4gICAgICAgICAgICBtZW51SXRlbS5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZHItY2xhc3MtbWVudS1pdGVtLWhhcy1jaGlsZHJlbi5hY3RpdmVcIik/LmZvckVhY2goKG9wZW5NZW51SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3Blbk1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBzbGlkZVVwKG9wZW5NZW51SXRlbS5xdWVyeVNlbGVjdG9yKFwidWxcIikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICNvbldpbmRvd1Jlc2l6ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA5NjApIHtcclxuICAgICAgICAgICAgdGhpcy4jY2xvc2VTaWRyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyYXAga2V5Ym9hcmQgbmF2aWdhdGlvblxyXG4gICAgICovXHJcbiAgICAjb25Eb2N1bWVudEtleWRvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInNpZHItb3BlblwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFiS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gOTtcclxuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGV2ZW50LnNoaWZ0S2V5O1xyXG4gICAgICAgIGNvbnN0IGVzY0tleSA9IGV2ZW50LmtleUNvZGUgPT09IDI3O1xyXG4gICAgICAgIGNvbnN0IGVudGVyS2V5ID0gZXZlbnQua2V5Q29kZSA9PT0gMTM7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IHRoaXMuI3NpZGViYXJUb2dnbGVNZW51QnRuO1xyXG5cclxuICAgICAgICBjb25zdCBuYXZFbGVtZW50cyA9IGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI3NpZHJcIilcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLCBzcGFuLnNpZHItY2xhc3MtZHJvcGRvd24tdG9nZ2xlLCBpbnB1dCwgYnV0dG9uXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBuYXZGaXJzdEVsZW1lbnQgPSBuYXZFbGVtZW50c1swXTtcclxuICAgICAgICBjb25zdCBuYXZMYXN0RWxlbWVudCA9IG5hdkVsZW1lbnRzW25hdkVsZW1lbnRzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmIChlc2NLZXkpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy4jY2xvc2VTaWRyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW50ZXJLZXkgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRyLWNsYXNzLWRyb3Bkb3duLXRvZ2dsZVwiKSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNoaWZ0S2V5ICYmIHRhYktleSAmJiBuYXZMYXN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcclxuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2hpZnRLZXkgJiYgdGFiS2V5ICYmIG5hdkZpcnN0RWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjbG9zZUljb24uc3R5bGUub3V0bGluZSA9IFwiMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNilcIjtcclxuICAgICAgICAgICAgY2xvc2VJY29uLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgaW4gdGhlIG1lbnUsIGRvbid0IG1vdmUgdGhlIGZvY3VzXHJcbiAgICAgICAgaWYgKHRhYktleSAmJiBuYXZGaXJzdEVsZW1lbnQgPT09IG5hdkxhc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjY2xvc2VTaWRyID0gKCkgPT4ge1xyXG4gICAgICAgIHNpZHIuY2xvc2UoXCJzaWRyXCIpO1xyXG4gICAgICAgIERPTS5tb2JpbGVNZW51LmhhbWJ1cmdlckJ0bj8uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJNb2JpbGVNZW51O1xyXG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSBcImluZmluaXRlLXNjcm9sbFwiO1xuXG5jbGFzcyBPV0luZmluaXRlU2Nyb2xsIHtcbiAgICAjaW5maW5pdGVTY3JvbGw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKCEhRE9NLnNjcm9sbC5pbmZpbml0ZVNjcm9sbE5hdiAmJiAhIURPTS5zY3JvbGwuaW5maW5pdGVTY3JvbGxOYXYucXVlcnlTZWxlY3RvcihcIi5vbGRlci1wb3N0cyBhXCIpKSB7XG4gICAgICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNpbmZpbml0ZVNjcm9sbCA9IG5ldyBJbmZpbml0ZVNjcm9sbChET00uc2Nyb2xsLmluZmluaXRlU2Nyb2xsV3JhcHBlciwge1xuICAgICAgICAgICAgcGF0aDogXCIub2xkZXItcG9zdHMgYVwiLFxuICAgICAgICAgICAgYXBwZW5kOiBcIi5pdGVtLWVudHJ5XCIsXG4gICAgICAgICAgICBzdGF0dXM6IFwiLnNjcm9sbGVyLXN0YXR1c1wiLFxuICAgICAgICAgICAgaGlkZU5hdjogXCIuaW5maW5pdGUtc2Nyb2xsLW5hdlwiLFxuICAgICAgICAgICAgaGlzdG9yeTogZmFsc2UsXG4gICAgICAgICAgICBwcmVmaWxsOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsVGhyZXNob2xkOiA1MDAsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy4jaW5maW5pdGVTY3JvbGwub24oXCJsb2FkXCIsIGZ1bmN0aW9uIChib2R5LCBwYXRoLCByZXNwb25zZSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbS1lbnRyeVwiKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJibG9nLW1hc29ucnktZ3JpZFwiKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmFkZU91dChpdGVtKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1hZ2VzTG9hZGVkKGl0ZW1zLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQmxvZyBtYXNvbnJ5IGlzb3RvcGVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImJsb2ctbWFzb25yeS1ncmlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUuYmxvZ01hc29ucnkuaXNvdG9wLmFwcGVuZGVkKGl0ZW1zKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBGaXggR2FsbGVyeSBwb3N0c1xuICAgICAgICAgICAgICAgICAgICBpZiAoISF0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5LWZvcm1hdFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2NlYW53cC50aGVtZS5ibG9nTWFzb25yeS5pc290b3AubGF5b3V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA2MDAgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEVxdWFsIGhlaWdodCBlbGVtZW50c1xuICAgICAgICAgICAgICAgIGlmICghRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tbWF0Y2hoZWlnaHRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgb2NlYW53cC50aGVtZS5lcXVhbEhlaWdodEVsZW1lbnRzLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gR2FsbGVyeSBwb3N0cyBzbGlkZXJcbiAgICAgICAgICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWNhcm91c2VsXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUub3dTbGlkZXIuc3RhcnQodGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2FsbGVyeS1mb3JtYXQsIC5wcm9kdWN0LWVudHJ5LXNsaWRlclwiKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWxpZ2h0Ym94XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9jZWFud3AudGhlbWUub3dMaWdodGJveC5pbml0U2luZ2xlSW1hZ2VMaWdodGJveCgpO1xuICAgICAgICAgICAgICAgICAgICBvY2VhbndwLnRoZW1lLm93TGlnaHRib3guaW5pdEdhbGxlcnlMaWdodGJveCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEZvcmNlIHRoZSBpbWFnZXMgdG8gYmUgcGFyc2VkIHRvIGZpeCBTYWZhcmkgaXNzdWVcbiAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKT8uZm9yRWFjaCgoaW1nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcub3V0ZXJIVE1MID0gaW1nLm91dGVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4jaW5maW5pdGVTY3JvbGwub24oXCJhcHBlbmRcIiwgZnVuY3Rpb24gKGJvZHksIHBhdGgsIGl0ZW1zLCByZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJibG9nLW1hc29ucnktZ3JpZFwiKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmFkZUluKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBPV0luZmluaXRlU2Nyb2xsO1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBPV0xpZ2h0Ym94IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICBpZiAoRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm8tbGlnaHRib3hcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI2FkZExpZ2h0Ym94Q2xhc3MoKTtcbiAgICAgICAgdGhpcy5pbml0U2luZ2xlSW1hZ2VMaWdodGJveCgpO1xuICAgICAgICB0aGlzLmluaXRHYWxsZXJ5TGlnaHRib3goKTtcbiAgICB9O1xuXG4gICAgaW5pdFNpbmdsZUltYWdlTGlnaHRib3ggPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub2NlYW53cC1saWdodGJveFwiKT8uZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBqUXVlcnkoXCIub2NlYW53cC1saWdodGJveFwiKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgIG1haW5DbGFzczogXCJtZnAtd2l0aC16b29tXCIsXG5cbiAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCIsXG4gICAgICAgICAgICAgICAgb3BlbmVyOiBmdW5jdGlvbiAob3BlbmVyRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3BlbmVyRWxlbWVudC5pcyhcImltZ1wiKSA/IG9wZW5lckVsZW1lbnQgOiBvcGVuZXJFbGVtZW50LmZpbmQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpbml0R2FsbGVyeUxpZ2h0Ym94ID0gKCkgPT4ge1xuICAgICAgICBqUXVlcnkoXCIud3AtYmxvY2stZ2FsbGVyeSwgLmdhbGxlcnktZm9ybWF0LCAuZ2FsbGVyeVwiKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIGRlbGVnYXRlOiBcIi5nYWxsZXJ5LWxpZ2h0Ym94Om5vdCguc2xpY2stY2xvbmVkKVwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgbWFpbkNsYXNzOiBcIm1mcC1mYWRlXCIsXG4gICAgICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjYWRkTGlnaHRib3hDbGFzcyA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiYm9keSAuZW50cnktY29udGVudCBhLCBib2R5IC5lbnRyeSBhLCBib2R5IGFydGljbGUgLmdhbGxlcnktZm9ybWF0IGFcIilcbiAgICAgICAgICAgID8uZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIWxpbmsucXVlcnlTZWxlY3RvcihcImltZ1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUZvcm1hdHMgPSB0aGlzLiNpbWFnZUZvcm1hdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlRm9ybWF0c01hc2sgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlRm9ybWF0cy5mb3JFYWNoKChpbWFnZUZvcm1hdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VGb3JtYXRzTWFzayArPSBTdHJpbmcobGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKS5pbmRleE9mKFwiLlwiICsgaW1hZ2VGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VGb3JtYXRzTWFzayA9PT0gLTEzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJuby1saWdodGJveFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1saWdodGJveFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZ2FsbGVyeS1saWdodGJveFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJnYWxsZXJ5LWljb25cIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcIndvby1saWdodGJveFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwid29vLXRodW1ibmFpbFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ3b29jb21tZXJjZS1wcm9kdWN0LWdhbGxlcnlfX2ltYWdlXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgISFsaW5rLmNsb3Nlc3QoXCIud3AtYmxvY2stZ2FsbGVyeVwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhbGluay5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVsZW1lbnRvci1vcGVuLWxpZ2h0Ym94XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJ5aXRoX21hZ25pZmllcl90aHVtYm5haWxcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcImdnLWxpbmtcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJvY2VhbndwLWxpZ2h0Ym94XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsaW5rLmNsYXNzTGlzdC5jb250YWlucyhcIm5vLWxpZ2h0Ym94XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGluay5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcImdhbGxlcnktaWNvblwiKSB8fCAhIWxpbmsuY2xvc2VzdChcIi53cC1ibG9jay1nYWxsZXJ5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiZ2FsbGVyeS1saWdodGJveFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAjaW1hZ2VGb3JtYXRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gW1wiYm1wXCIsIFwiZ2lmXCIsIFwianBlZ1wiLCBcImpwZ1wiLCBcInBuZ1wiLCBcInRpZmZcIiwgXCJ0aWZcIiwgXCJqZmlmXCIsIFwianBlXCIsIFwic3ZnXCIsIFwibXA0XCIsIFwib2dnXCIsIFwid2VibVwiXTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBPV0xpZ2h0Ym94O1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBPV1NsaWRlciB7XG4gICAgZmxpY2tpdHk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0YXJ0ID0gKGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYWxsZXJ5LWZvcm1hdCwgLnByb2R1Y3QtZW50cnktc2xpZGVyXCIpKSA9PiB7XG4gICAgICAgIHRoaXMuZmxpY2tpdHkgPSBbXTtcblxuICAgICAgICBlbGVtZW50cz8uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmxpY2tpdHkgPSBuZXcgRmxpY2tpdHkoZWxlbWVudCwge1xuICAgICAgICAgICAgICAgIGF1dG9QbGF5OiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIndvby1lbnRyeS1pbWFnZVwiKSA/IGZhbHNlIDogNjAwMCxcbiAgICAgICAgICAgICAgICByaWdodFRvTGVmdDogRE9NLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwicnRsXCIpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGltYWdlc0xvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyBjb250YWluOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhZ2VEb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICByZWFkeTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZmxpY2tpdHkucHVzaChmbGlja2l0eSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9XU2xpZGVyO1xuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBpc1NlbGVjdG9yVmFsaWQsIG9mZnNldCB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcclxuXHJcbmNsYXNzIFNjcm9sbEVmZmVjdCB7XHJcbiAgICAjdGFyZ2V0RWxlbTtcclxuICAgICNsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAoIURPTS5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhcInNpbmdsZS1wcm9kdWN0XCIpICYmICFET00uYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJuby1sb2NhbC1zY3JvbGxcIikpIHtcclxuICAgICAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICAgICdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgYS5sb2NhbFtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksIC5sb2NhbCBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgYS5tZW51LWxpbmtbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCBhLnNpZHItY2xhc3MtbWVudS1saW5rW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSdcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoc2Nyb2xsSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25TY3JvbGxJdGVtQ2xpY2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgI29uU2Nyb2xsSXRlbUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsSXRlbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGxJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcImVsZW1lbnRvci1pdGVtLWFuY2hvclwiKSAmJiBzY3JvbGxJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcImhhcy1zdWJtZW51XCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwib213LW9wZW4tbW9kYWxcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0uY2xvc2VzdChcIi5vbXctb3Blbi1tb2RhbFwiKSAmJlxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGwtbGlua1wiKSAmJlxyXG4gICAgICAgICAgICAhc2Nyb2xsSXRlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIm9wbC1saW5rXCIpICYmXHJcbiAgICAgICAgICAgICFzY3JvbGxJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNpZHItY2xhc3Mtb3BsLWxpbmtcIikgJiZcclxuICAgICAgICAgICAgIXNjcm9sbEl0ZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRyLWNsYXNzLW9wbC1saW5rXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBzY3JvbGxJdGVtLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gaHJlZi5zdWJzdHJpbmcoaHJlZi5pbmRleE9mKFwiI1wiKSkuc2xpY2UoMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNTZWxlY3RvclZhbGlkKGAjJHtpZH1gKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4jdGFyZ2V0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaWQgIT0gXCJcIiAmJiAhIXRoaXMuI3RhcmdldEVsZW0pIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPVxyXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCh0aGlzLiN0YXJnZXRFbGVtKS50b3AgLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2dldEFkbWluQmFySGVpZ2h0KCkgLVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2dldFRvcGJhckhlaWdodCgpIC1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNnZXRTdGlja3lIZWFkZXJIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXItc3RpY2t5LXdyYXBwZXJcIik/LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXN0aWNreVwiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICghIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1oZWFkZXItc3RpY2t5LXdyYXBwZXJcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0aWNrLWFueXRoaW5nLWhlYWRlclwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhIWRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50b3Itc2VjdGlvbi13cmFwXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcImVsZW1lbnRvci1zdGlja3lcIikpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgISFET00uaGVhZGVyLnNpdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAhRE9NLmhlYWRlci5zaXRlLmNsYXNzTGlzdC5jb250YWlucyhcInRvcC1oZWFkZXJcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAhRE9NLmhlYWRlci5zaXRlLmNsYXNzTGlzdC5jb250YWlucyhcIm1lZGl1bS1oZWFkZXJcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAhRE9NLmhlYWRlci5zaXRlLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsLWhlYWRlclwiKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy4jZml4TXVsdGlNZW51KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBET00uaHRtbC5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBzY3JvbGxQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjZ2V0QWRtaW5CYXJIZWlnaHQgPSAoKSA9PiAoISFET00uV1BBZG1pbmJhciA/IERPTS5XUEFkbWluYmFyLm9mZnNldEhlaWdodCA6IDApO1xyXG5cclxuICAgICNnZXRUb3BiYXJIZWlnaHQgPSAoKSA9PlxyXG4gICAgICAgICEhRE9NLmhlYWRlci50b3BiYXJXcmFwcGVyICYmIERPTS5oZWFkZXIudG9wYmFyV3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b3AtYmFyLXN0aWNreVwiKVxyXG4gICAgICAgICAgICA/IERPTS5oZWFkZXIudG9wYmFyV3JhcHBlci5vZmZzZXRIZWlnaHRcclxuICAgICAgICAgICAgOiAwO1xyXG5cclxuICAgICNnZXRTdGlja3lIZWFkZXJIZWlnaHQgPSAoc3RhcnRQb3NpdGlvbiA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RpY2t5SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci1zdGlja3ktd3JhcHBlclwiKTtcclxuXHJcbiAgICAgICAgaWYgKCEhc3RpY2t5SGVhZGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGlja3lIZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtc3RpY2t5XCIpICYmICFzdGFydFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRE9NLmhlYWRlci5zaXRlLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKERPTS5oZWFkZXIuc2l0ZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9wLWhlYWRlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHN0aWNreUhlYWRlcikuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKERPTS5oZWFkZXIuc2l0ZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVkaXVtLWhlYWRlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51ID0gRE9NLmhlYWRlci5zaXRlLnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tLWhlYWRlci13cmFwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtZW51LmNsYXNzTGlzdC5jb250YWlucyhcImZpeGVkLXNjcm9sbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IG1lbnUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChET00uaGVhZGVyLnNpdGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuLW1lbnVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBET00uaGVhZGVyLnNpdGUuZGF0YXNldC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IERPTS5oZWFkZXIuc2l0ZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKERPTS5oZWFkZXIuc2l0ZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZml4ZWQtaGVhZGVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRE9NLmhlYWRlci5zaXRlLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKERPTS5oZWFkZXIuc2l0ZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwidXAtZWZmZWN0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIERPTS5oZWFkZXIuc2l0ZT8uZGF0YXNldC5oZWlnaHQgPz8gNTQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0aWNrLWFueXRoaW5nLWhlYWRlclwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGljay1hbnl0aGluZy1oZWFkZXJcIikub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhRE9NLmhlYWRlci5zaXRlICYmXHJcbiAgICAgICAgICAgICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50b3Itc2VjdGlvbi13cmFwXCIpPy5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJlbGVtZW50b3Itc3RpY2t5XCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRvci1zZWN0aW9uLXdyYXBcIik/LmZpcnN0RWxlbWVudENoaWxkLm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxuXHJcbiAgICAjZml4TXVsdGlNZW51ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZml4ZWRPZmZzZXQgPVxyXG4gICAgICAgICAgICBvZmZzZXQodGhpcy4jdGFyZ2V0RWxlbSkudG9wIC1cclxuICAgICAgICAgICAgdGhpcy4jZ2V0QWRtaW5CYXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgIHRoaXMuI2dldFRvcGJhckhlaWdodCgpIC1cclxuICAgICAgICAgICAgdGhpcy4jZ2V0U3RpY2t5SGVhZGVySGVpZ2h0KHRydWUpO1xyXG5cclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0LnRvRml4ZWQoKSA9PT0gZml4ZWRPZmZzZXQudG9GaXhlZCgpKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuI2ZpeE11bHRpTWVudSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoRE9NLmhlYWRlci5zaXRlPy5vZmZzZXRIZWlnaHQgLSAxID4gdGhpcy4jZ2V0U3RpY2t5SGVhZGVySGVpZ2h0KHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0KHRoaXMuI3RhcmdldEVsZW0pLnRvcCAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZ2V0QWRtaW5CYXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZ2V0VG9wYmFySGVpZ2h0KCkgLVxyXG4gICAgICAgICAgICAgICAgICAgIERPTS5oZWFkZXIuc2l0ZT8ub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIERPTS5odG1sLnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHNjcm9sbFBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiB3aW5kb3cucGFnZVlPZmZzZXQgPiB0aGlzLiNsYXN0U2Nyb2xsVG9wID8gXCJzbW9vdGhcIiA6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4jbGFzdFNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEVmZmVjdDtcclxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxUb3Age1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNzdGFydCgpO1xuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3N0YXJ0ID0gKCkgPT4ge307XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy4jb25XaW5kb3dTY3JvbGwpO1xuICAgICAgICBET00uc2Nyb2xsLnNjcm9sbFRvcD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uU2Nyb2xsVG9wQ2xpY2spO1xuICAgICAgICBET00uc2Nyb2xsLmdvVG9wPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25TY3JvbGxUb3BDbGljayk7XG4gICAgICAgIERPTS5zY3JvbGwuZ29Ub3BTbGFzaD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uU2Nyb2xsVG9wQ2xpY2spO1xuICAgIH07XG5cbiAgICAjb25XaW5kb3dTY3JvbGwgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFET00uc2Nyb2xsLnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDEwMCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKERPTS5zY3JvbGwuc2Nyb2xsVG9wKS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgIGZhZGVJbihET00uc2Nyb2xsLnNjcm9sbFRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoRE9NLnNjcm9sbC5zY3JvbGxUb3ApLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICBmYWRlT3V0KERPTS5zY3JvbGwuc2Nyb2xsVG9wKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjb25TY3JvbGxUb3BDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgRE9NLmh0bWwuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNjcm9sbFRvcC5wYXJlbnROb2RlPy5jbGFzc0xpc3QucmVtb3ZlKFwic2ZIb3ZlclwiKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgRHJvcERvd25TZWFyY2ggZnJvbSBcIi4vc2VhcmNoL2Ryb3AtZG93blwiO1xyXG5pbXBvcnQgSGVhZGVyUmVwbGFjZVNlYXJjaCBmcm9tIFwiLi9zZWFyY2gvaGVhZGVyLXJlcGxhY2VcIjtcclxuaW1wb3J0IE1vYmlsZVNlYXJjaEljb24gZnJvbSBcIi4vc2VhcmNoL21vYmlsZS1zZWFyY2gtaWNvblwiO1xyXG5pbXBvcnQgT3ZlcmxheVNlYXJjaCBmcm9tIFwiLi9zZWFyY2gvb3ZlcmxheVwiO1xyXG5cclxuY2xhc3MgU2VhcmNoIHtcclxuICAgIG1vYmlsZU92ZXJsYXlJbnB1dDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNzdGFydCgpO1xyXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kcm9wRG93biA9IG5ldyBEcm9wRG93blNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMuaGVhZGVyUmVwbGFjZSA9IG5ldyBIZWFkZXJSZXBsYWNlU2VhcmNoKCk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gbmV3IE92ZXJsYXlTZWFyY2goKTtcclxuICAgICAgICB0aGlzLm1vYmlsZVNlYXJjaEljb24gPSBuZXcgTW9iaWxlU2VhcmNoSWNvbigpO1xyXG5cclxuICAgICAgICB0aGlzLm1vYmlsZU92ZXJsYXlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLXNlYXJjaC1vdmVybGF5LWlucHV0XCIpO1xyXG5cclxuICAgICAgICBET00uc2VhcmNoLmZvcm1zLmZvckVhY2goKGZvcm0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpPy52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLWZpbGxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoISF0aGlzLm1vYmlsZU92ZXJsYXlJbnB1dD8udmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5tb2JpbGVPdmVybGF5SW5wdXQuY2xvc2VzdChcImZvcm1cIikuY2xhc3NMaXN0LmFkZChcInNlYXJjaC1maWxsZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBET00uc2VhcmNoLmZvcm1zLmZvckVhY2goKGZvcm0pID0+IHtcclxuICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLiNvbklucHV0S2V5dXApO1xyXG4gICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy4jb25JbnB1dEtleXVwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2JpbGVPdmVybGF5SW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLiNvbklucHV0S2V5dXApO1xyXG4gICAgICAgIHRoaXMubW9iaWxlT3ZlcmxheUlucHV0Py5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCB0aGlzLiNvbklucHV0S2V5dXApO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25JbnB1dEtleXVwID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBpbnB1dC5jbG9zZXN0KFwiZm9ybVwiKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInNlYXJjaC1maWxsZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2VhcmNoLWZpbGxlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImNsYXNzIFNlYXJjaEJhc2Uge1xuICAgIGZvY3VzID0gKGZvcm0sIGlucHV0Q2xhc3MpID0+IHtcbiAgICAgICAgbGV0IGZvcm1UcmFuc2l0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZm9ybSkudHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDEwMDA7XG5cbiAgICAgICAgZm9ybVRyYW5zaXRpb25EdXJhdGlvbiA9ICEhZm9ybVRyYW5zaXRpb25EdXJhdGlvbiA/IGZvcm1UcmFuc2l0aW9uRHVyYXRpb24gOiA2MDA7XG5cbiAgICAgICAgaWYgKGZvcm1UcmFuc2l0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihpbnB1dENsYXNzKS5mb2N1cygpO1xuICAgICAgICAgICAgfSwgZm9ybVRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXNlO1xuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IFNlYXJjaEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuXG5jbGFzcyBEcm9wRG93blNlYXJjaCBleHRlbmRzIFNlYXJjaEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLm1lbnVTZWFyY2hTdHlsZSAhPT0gXCJkcm9wX2Rvd25cIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICBET00uc2VhcmNoLmRyb3BEb3duLnRvZ2dsZVNlYXJjaEJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2spO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25Eb2N1bWVudENsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgeyB0b2dnbGVTZWFyY2hCdG4sIGZvcm0gfSA9IERPTS5zZWFyY2guZHJvcERvd247XG5cbiAgICAgICAgdG9nZ2xlU2VhcmNoQnRuLnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgdGhpcy5mb2N1cyhmb3JtLCBcImlucHV0LmZpZWxkXCIpO1xuICAgIH07XG5cbiAgICAjb25Eb2N1bWVudENsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIENvbGxhcHMgc2VhcmNoIGZvcm1cbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuY2xvc2VzdChcIiNzZWFyY2hmb3JtLWRyb3Bkb3duLnNob3dcIikpIHtcbiAgICAgICAgICAgIERPTS5zZWFyY2guZHJvcERvd24uZm9ybT8uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgICAgICBET00uc2VhcmNoLmRyb3BEb3duLnRvZ2dsZVNlYXJjaEJ0bj8ucGFyZW50Tm9kZT8uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyb3BEb3duU2VhcmNoO1xuIiwiaW1wb3J0IHsgRE9NLCBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IFNlYXJjaEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuXG5jbGFzcyBIZWFkZXJSZXBsYWNlU2VhcmNoIGV4dGVuZHMgU2VhcmNoQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubWVudVNlYXJjaFN0eWxlICE9PSBcImhlYWRlcl9yZXBsYWNlXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgRE9NLnNlYXJjaC5oZWFkZXJSZXBsYWNlLnRvZ2dsZVNlYXJjaEJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2spO1xuICAgICAgICBET00uc2VhcmNoLmhlYWRlclJlcGxhY2UuY2xvc2VCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkNsb3NlQnRuQ2xpY2spO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvbkRvY3VtZW50Q2xpY2spO1xuICAgIH07XG5cbiAgICAjb25Ub2dnbGVTZWFyY2hCdG5DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCB7IGZvcm0gfSA9IERPTS5zZWFyY2guaGVhZGVyUmVwbGFjZTtcblxuICAgICAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuXG4gICAgICAgIGlmICh0aGlzLiNoYXNUb3BIZWFkZXIoKSkge1xuICAgICAgICAgICAgRE9NLmhlYWRlci50b3BMZWZ0U2lkZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIERPTS5oZWFkZXIudG9wUmlnaHRTaWRlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFET00ubWVudS5uYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xuICAgICAgICAgICAgICAgIERPTS5tZW51Lm1haW4uc3R5bGUubWluV2lkdGggPSBcIjM3MHB4XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBET00ubWVudS5uYXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgICAgICBmb3JtLnN0eWxlLm1heFdpZHRoID1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpdGUtbmF2aWdhdGlvbiA+IHVsLmRyb3Bkb3duLW1lbnVcIik/Lm9mZnNldFdpZHRoICsgNjAgKyBcInB4XCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvY3VzKGZvcm0sICdpbnB1dFt0eXBlPVwic2VhcmNoXCJdJyk7XG4gICAgfTtcblxuICAgICNvbkNsb3NlQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB7IGZvcm0gfSA9IERPTS5zZWFyY2guaGVhZGVyUmVwbGFjZTtcblxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuXG4gICAgICAgIGlmICh0aGlzLiNoYXNUb3BIZWFkZXIoKSkge1xuICAgICAgICAgICAgRE9NLmhlYWRlci50b3BMZWZ0U2lkZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgIERPTS5oZWFkZXIudG9wUmlnaHRTaWRlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRE9NLm1lbnUubmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgRE9NLm1lbnUubWFpbi5zdHlsZS5taW5XaWR0aCA9IFwiXCI7XG4gICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICNvbkRvY3VtZW50Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gQ29sbGFwcyBzZWFyY2ggZm9ybVxuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KFwiI3NlYXJjaGZvcm0taGVhZGVyLXJlcGxhY2Uuc2hvd1wiKSkge1xuICAgICAgICAgICAgRE9NLnNlYXJjaC5oZWFkZXJSZXBsYWNlPy5mb3JtPy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuI2hhc1RvcEhlYWRlcigpKSB7XG4gICAgICAgICAgICAgICAgRE9NLmhlYWRlci50b3BMZWZ0U2lkZT8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgRE9NLmhlYWRlci50b3BSaWdodFNpZGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBET00ubWVudS5uYXY/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgICNoYXNUb3BIZWFkZXIgPSAoKSA9PiBET00uaGVhZGVyLnNpdGU/LmNsYXNzTGlzdC5jb250YWlucyhcInRvcC1oZWFkZXJcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclJlcGxhY2VTZWFyY2g7XG4iLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZmFkZUluLCBmYWRlT3V0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IFNlYXJjaEJhc2UgZnJvbSBcIi4vYmFzZVwiO1xuXG5jbGFzcyBNb2JpbGVTZWFyY2hJY29uIGV4dGVuZHMgU2VhcmNoQmFzZSB7XG4gICAgI2VsZW1lbnRzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubW9iaWxlTWVudVNlYXJjaFN0eWxlID09PSBcImRpc2FibGVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3NldEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAjc2V0RWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuI2VsZW1lbnRzID0ge1xuICAgICAgICAgICAgZHJvcGRvd25TZWFyY2hJY29uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pY29uLWRyb3Bkb3duXCIpLFxuICAgICAgICAgICAgZHJvcGRvd25TZWFyY2hGb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1zdHlsZS1kcm9wZG93blwiKSxcbiAgICAgICAgICAgIG92ZXJsYXlTZWFyY2g6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLXN0eWxlLW92ZXJsYXlcIiksXG4gICAgICAgICAgICBvdmVybGF5U2VhcmNoSWNvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaWNvbi1vdmVybGF5XCIpLFxuICAgICAgICAgICAgb3ZlcmxheVNlYXJjaENsb3NlSWNvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtc3R5bGUtb3ZlcmxheSAuc2VhcmNoLW92ZXJsYXktY2xvc2VcIiksXG4gICAgICAgICAgICBodG1sOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKSxcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLm1vYmlsZU1lbnVTZWFyY2hTdHlsZSA9PT0gXCJkcm9wX2Rvd25cIikge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hJY29uPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jdG9nZ2xlRHJvcGRvd25TZWFyY2gpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uQ2xpY2tEb2N1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5tb2JpbGVNZW51U2VhcmNoU3R5bGUgPT09IFwib3ZlcmxheVwiKSB7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoSWNvbj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29wZW5PdmVybGF5U2VhcmNoKTtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2hDbG9zZUljb24/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNjbG9zZU92ZXJsYXlTZWFyY2gpO1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuI29uQ2xpY2tPdmVybGF5U2VhcmNoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAjdG9nZ2xlRHJvcGRvd25TZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudHMuZHJvcGRvd25TZWFyY2hGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgICB0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEljb24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuICAgICAgICB0aGlzLmZvY3VzKHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoRm9ybS5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKSwgXCJpbnB1dC5maWVsZFwiKTtcbiAgICB9O1xuXG4gICAgI29wZW5PdmVybGF5U2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBmYWRlSW4odGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaCk7XG5cbiAgICAgICAgdGhpcy5mb2N1cyh0aGlzLiNlbGVtZW50cy5vdmVybGF5U2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpLCBcImlucHV0Lm1vYmlsZS1zZWFyY2gtb3ZlcmxheS1pbnB1dFwiKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLmh0bWwuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICB9LCA0MDApO1xuICAgIH07XG5cbiAgICAjY2xvc2VPdmVybGF5U2VhcmNoID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBmYWRlT3V0KHRoaXMuI2VsZW1lbnRzLm92ZXJsYXlTZWFyY2gpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHMuaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xuICAgICAgICB9LCA0MDApO1xuICAgIH07XG5cbiAgICAjb25DbGlja092ZXJsYXlTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy4jZWxlbWVudHMub3ZlcmxheVNlYXJjaC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgI29uQ2xpY2tEb2N1bWVudCA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KFwiI2ljb24tc2VhcmNoZm9ybS1kcm9wZG93bi5zaG93XCIpKSB7XG4gICAgICAgICAgICB0aGlzLiNlbGVtZW50cy5kcm9wZG93blNlYXJjaEljb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHRoaXMuI2VsZW1lbnRzLmRyb3Bkb3duU2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZVNlYXJjaEljb247XG4iLCJpbXBvcnQgeyBET00sIG9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIGZhZGVPdXQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgU2VhcmNoQmFzZSBmcm9tIFwiLi9iYXNlXCI7XG5cbmNsYXNzIE92ZXJsYXlTZWFyY2ggZXh0ZW5kcyBTZWFyY2hCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5tZW51U2VhcmNoU3R5bGUgIT09IFwib3ZlcmxheVwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIERPTS5zZWFyY2gub3ZlcmxheS50b2dnbGVTZWFyY2hCdG4/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLiNvblRvZ2dsZVNlYXJjaEJ0bkNsaWNrKTtcbiAgICAgICAgRE9NLnNlYXJjaC5vdmVybGF5LmNsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy4jb25DbG9zZUJ0bkNsaWNrKTtcbiAgICB9O1xuXG4gICAgI29uVG9nZ2xlU2VhcmNoQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB7IGZvcm0gfSA9IERPTS5zZWFyY2gub3ZlcmxheTtcblxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGZhZGVJbihmb3JtKTtcblxuICAgICAgICB0aGlzLmZvY3VzKGZvcm0sICdpbnB1dFt0eXBlPVwic2VhcmNoXCJdJyk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBET00uaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIH0sIDQwMCk7XG4gICAgfTtcblxuICAgICNvbkNsb3NlQnRuQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB7IGZvcm0gfSA9IERPTS5zZWFyY2gub3ZlcmxheTtcblxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGZhZGVPdXQoZm9ybSk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBET00uaHRtbC5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xuICAgICAgICB9LCA0MDApO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJsYXlTZWFyY2g7XG4iLCJpbXBvcnQgeyBET00gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3Qge1xyXG4gICAgI3NlbGVjdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNyZW5kZXIoKTtcclxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3JlbmRlciA9ICgpID0+IHtcclxuICAgICAgICBET00uc2VsZWN0VGFncy5mb3JFYWNoKChzZWxlY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0ID0gc2VsZWN0O1xyXG5cclxuICAgICAgICAgICAgdGhpcy4jc2VsZWN0Lmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgICAgIFwiYWZ0ZXJlbmRcIixcclxuICAgICAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cInRoZW1lLXNlbGVjdCAke3RoaXMuI3NlbGVjdC5jbGFzc0xpc3R9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aGVtZS1zZWxlY3RJbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuI3NlbGVjdC5vcHRpb25zW3RoaXMuI3NlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5gXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiNzZWxlY3QuY2xhc3NMaXN0LmFkZChcImhhc0N1c3RvbVNlbGVjdFwiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuI3N0eWxlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuI3NldHVwRXZlbnRMaXN0ZW5lcnNJdGVtKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNzdHlsZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiNzZWxlY3Quc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5zdHlsZS5oZWlnaHQgPSBcIjM0cHhcIjtcclxuICAgICAgICB0aGlzLiNzZWxlY3Quc3R5bGUuZm9udFNpemUgPSBcIjEzcHhcIjtcclxuICAgICAgICB0aGlzLiNzZWxlY3Quc3R5bGUuYXBwZWFyYW5jZSA9IFwibWVudWxpc3QtYnV0dG9uXCI7XHJcbiAgICAgICAgdGhpcy4jc2VsZWN0Lm5leHRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5uZXh0U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIH07XHJcblxyXG4gICAgI3NldHVwRXZlbnRMaXN0ZW5lcnNJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLiNvbk1vdXNlZW50ZXIpO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCB0aGlzLiNvbk1vdXNlbGVhdmUpO1xyXG4gICAgICAgIHRoaXMuI3NlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMub25DaGFuZ2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICAjb25Nb3VzZWVudGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJ0aGVtZS1zZWxlY3RIb3ZlclwiKTtcclxuICAgIH07XHJcblxyXG4gICAgI29uTW91c2VsZWF2ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKFwidGhlbWUtc2VsZWN0SG92ZXJcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIG9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICAgICAgc2VsZWN0Lm5leHRTaWJsaW5nLmlubmVySFRNTCA9IHNlbGVjdC5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS50ZXh0O1xyXG4gICAgfTtcclxuXHJcbiAgICAjc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCB0aGlzLiNvbkRvY3VtZW50UmVhZHkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuI29uRG9jdW1lbnRSZWFkeSk7XHJcbiAgICB9O1xyXG5cclxuICAgICNvbkRvY3VtZW50UmVhZHkgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBET00uc2VsZWN0VGFncy5mb3JFYWNoKChzZWxlY3QpID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0LnN0eWxlLndpZHRoID0gc2VsZWN0Lm5leHRTaWJsaW5nLm9mZnNldFdpZHRoICsgXCJweFwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQgU2VsZWN0IGZyb20gXCIuL2NvbXBvbmVudHMvc2VsZWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9tZW51XCI7XHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gXCIuL2NvbXBvbmVudHMvbW9iaWxlLW1lbnVcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9jb21wb25lbnRzL3NlYXJjaFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmltcG9ydCBCbG9nTWFzb25yeSBmcm9tIFwiLi9jb21wb25lbnRzL2Jsb2ctbWFzb25yeVwiO1xyXG5pbXBvcnQgU2Nyb2xsVG9wIGZyb20gXCIuL2NvbXBvbmVudHMvc2Nyb2xsLXRvcFwiO1xyXG5pbXBvcnQgU2Nyb2xsRWZmZWN0IGZyb20gXCIuL2NvbXBvbmVudHMvc2Nyb2xsLWVmZmVjdFwiO1xyXG5pbXBvcnQgRXF1YWxIZWlnaHRFbGVtZW50cyBmcm9tIFwiLi9jb21wb25lbnRzL2VxdWFsLWhlaWdodC1lbGVtZW50c1wiO1xyXG5pbXBvcnQgT1dJbmZpbml0ZVNjcm9sbCBmcm9tIFwiLi9jb21wb25lbnRzL293LWluZmluaXRlLXNjcm9sbFwiO1xyXG5pbXBvcnQgT1dTbGlkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9vdy1zbGlkZXJcIjtcclxuaW1wb3J0IE9XTGlnaHRib3ggZnJvbSBcIi4vY29tcG9uZW50cy9vdy1saWdodGJveFwiO1xyXG5cclxuY2xhc3MgVGhlbWUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4jc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAjc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBuZXcgU2VsZWN0KCk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcbiAgICAgICAgdGhpcy5tZW51ID0gbmV3IE1lbnUoKTtcclxuICAgICAgICB0aGlzLm1vYmlsZU1lbnUgPSBuZXcgTW9iaWxlTWVudSgpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoID0gbmV3IFNlYXJjaCgpO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xyXG4gICAgICAgIHRoaXMuYmxvZ01hc29ucnkgPSBuZXcgQmxvZ01hc29ucnkoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IG5ldyBTY3JvbGxUb3AoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEVmZmVjdCA9IG5ldyBTY3JvbGxFZmZlY3QoKTtcclxuICAgICAgICB0aGlzLmVxdWFsSGVpZ2h0RWxlbWVudHMgPSBuZXcgRXF1YWxIZWlnaHRFbGVtZW50cygpO1xyXG4gICAgICAgIHRoaXMub3dMaWdodGJveCA9IG5ldyBPV0xpZ2h0Ym94KCk7XHJcbiAgICAgICAgdGhpcy5vd1NsaWRlciA9IG5ldyBPV1NsaWRlcigpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3dJbmZpbml0ZVNjcm9sbCA9IG5ldyBPV0luZmluaXRlU2Nyb2xsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIik7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xuICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG5cbiAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKS52YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRHZXQ7IiwiZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xuICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG5cbiAgdmFyIGRlc2NyaXB0b3IgPSBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XG5cbiAgaWYgKCFkZXNjcmlwdG9yLndyaXRhYmxlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcIik7XG4gIH1cblxuICBkZXNjcmlwdG9yLnZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NQcml2YXRlRmllbGRTZXQ7IiwidmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBfT2JqZWN0JGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfT2JqZWN0JHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gX09iamVjdCRzZXRQcm90b3R5cGVPZiA/IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBfT2JqZWN0JGdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgX09iamVjdCRjcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBfT2JqZWN0JGNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsInZhciBfT2JqZWN0JHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gX09iamVjdCRzZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgX1N5bWJvbCRpdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9TeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbmZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIF9TeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX1N5bWJvbCRpdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX1N5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX1N5bWJvbCAmJiBvYmogIT09IF9TeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBfU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoX1N5bWJvbCRpdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX1N5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX1N5bWJvbCAmJiBvYmogIT09IF9TeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuMTInIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYgaGFzKGV4cG9ydHMsIGtleSkpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbiIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMjAgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKSB9KTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG4iLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0IH0pO1xuIiwiIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICRHT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nICYmICEhJEdPUFMuZjtcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgJEdPUFMuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gQ2hyb21lIDM4IGFuZCAzOSBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgZmFpbHMgb24gcHJpbWl0aXZlc1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzQ0M1xudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSAkZmFpbHMoZnVuY3Rpb24gKCkgeyAkR09QUy5mKDEpOyB9KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBGQUlMU19PTl9QUklNSVRJVkVTLCAnT2JqZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICAgIHJldHVybiAkR09QUy5mKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG4iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuIiwidmFyIERPQ1VNRU5UX05PREVfVFlQRSA9IDk7XG5cbi8qKlxuICogQSBwb2x5ZmlsbCBmb3IgRWxlbWVudC5tYXRjaGVzKClcbiAqL1xuaWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgIHZhciBwcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xuXG4gICAgcHJvdG8ubWF0Y2hlcyA9IHByb3RvLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIGNsb3Nlc3QgcGFyZW50IHRoYXQgbWF0Y2hlcyBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY2xvc2VzdCAoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSBET0NVTUVOVF9OT0RFX1RZUEUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm1hdGNoZXMgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9zZXN0O1xuIiwidmFyIGNsb3Nlc3QgPSByZXF1aXJlKCcuL2Nsb3Nlc3QnKTtcblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIHZhciBsaXN0ZW5lckZuID0gbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyRm4sIHVzZUNhcHR1cmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIERlbGVnYXRlcyBldmVudCB0byBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxTdHJpbmd8QXJyYXl9IFtlbGVtZW50c11cbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZGVsZWdhdGUoZWxlbWVudHMsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICAgIC8vIEhhbmRsZSB0aGUgcmVndWxhciBFbGVtZW50IHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cy5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgRWxlbWVudC1sZXNzIHVzYWdlLCBpdCBkZWZhdWx0cyB0byBnbG9iYWwgZGVsZWdhdGlvblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBVc2UgYGRvY3VtZW50YCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyLCB0aGVuIGFwcGx5IGFyZ3VtZW50c1xuICAgICAgICAvLyBUaGlzIGlzIGEgc2hvcnQgd2F5IHRvIC51bnNoaWZ0IGBhcmd1bWVudHNgIHdpdGhvdXQgcnVubmluZyBpbnRvIGRlb3B0aW1pemF0aW9uc1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmJpbmQobnVsbCwgZG9jdW1lbnQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIFNlbGVjdG9yLWJhc2VkIHVzYWdlXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgQXJyYXktbGlrZSBiYXNlZCB1c2FnZVxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBGaW5kcyBjbG9zZXN0IG1hdGNoIGFuZCBpbnZva2VzIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBsaXN0ZW5lcihlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBlLmRlbGVnYXRlVGFyZ2V0ID0gY2xvc2VzdChlLnRhcmdldCwgc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmIChlLmRlbGVnYXRlVGFyZ2V0KSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGVsZW1lbnQsIGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGVnYXRlO1xuIiwiLyoqXG4gKiBFdkVtaXR0ZXIgdjIuMC4wXG4gKiBMaWwnIGV2ZW50IGVtaXR0ZXJcbiAqIE1JVCBMaWNlbnNlXG4gKi9cblxuKCBmdW5jdGlvbiggZ2xvYmFsLCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGdsb2JhbC5FdkVtaXR0ZXIgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCkge1xuXG5mdW5jdGlvbiBFdkVtaXR0ZXIoKSB7fVxuXG5sZXQgcHJvdG8gPSBFdkVtaXR0ZXIucHJvdG90eXBlO1xuXG5wcm90by5vbiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkgcmV0dXJuIHRoaXM7XG5cbiAgLy8gc2V0IGV2ZW50cyBoYXNoXG4gIGxldCBldmVudHMgPSB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIC8vIHNldCBsaXN0ZW5lcnMgYXJyYXlcbiAgbGV0IGxpc3RlbmVycyA9IGV2ZW50c1sgZXZlbnROYW1lIF0gPSBldmVudHNbIGV2ZW50TmFtZSBdIHx8IFtdO1xuICAvLyBvbmx5IGFkZCBvbmNlXG4gIGlmICggIWxpc3RlbmVycy5pbmNsdWRlcyggbGlzdGVuZXIgKSApIHtcbiAgICBsaXN0ZW5lcnMucHVzaCggbGlzdGVuZXIgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub25jZSA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkgcmV0dXJuIHRoaXM7XG5cbiAgLy8gYWRkIGV2ZW50XG4gIHRoaXMub24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgLy8gc2V0IG9uY2UgZmxhZ1xuICAvLyBzZXQgb25jZUV2ZW50cyBoYXNoXG4gIGxldCBvbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgfHwge307XG4gIC8vIHNldCBvbmNlTGlzdGVuZXJzIG9iamVjdFxuICBsZXQgb25jZUxpc3RlbmVycyA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gfHwge307XG4gIC8vIHNldCBmbGFnXG4gIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF0gPSB0cnVlO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub2ZmID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGxldCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkgcmV0dXJuIHRoaXM7XG5cbiAgbGV0IGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uZW1pdEV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgYXJncyApIHtcbiAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSByZXR1cm4gdGhpcztcblxuICAvLyBjb3B5IG92ZXIgdG8gYXZvaWQgaW50ZXJmZXJlbmNlIGlmIC5vZmYoKSBpbiBsaXN0ZW5lclxuICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoIDAgKTtcbiAgYXJncyA9IGFyZ3MgfHwgW107XG4gIC8vIG9uY2Ugc3R1ZmZcbiAgbGV0IG9uY2VMaXN0ZW5lcnMgPSB0aGlzLl9vbmNlRXZlbnRzICYmIHRoaXMuX29uY2VFdmVudHNbIGV2ZW50TmFtZSBdO1xuXG4gIGZvciAoIGxldCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMgKSB7XG4gICAgbGV0IGlzT25jZSA9IG9uY2VMaXN0ZW5lcnMgJiYgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICBpZiAoIGlzT25jZSApIHtcbiAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lclxuICAgICAgLy8gcmVtb3ZlIGJlZm9yZSB0cmlnZ2VyIHRvIHByZXZlbnQgcmVjdXJzaW9uXG4gICAgICB0aGlzLm9mZiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAgICAgLy8gdW5zZXQgb25jZSBmbGFnXG4gICAgICBkZWxldGUgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICB9XG4gICAgLy8gdHJpZ2dlciBsaXN0ZW5lclxuICAgIGxpc3RlbmVyLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmFsbE9mZiA9IGZ1bmN0aW9uKCkge1xuICBkZWxldGUgdGhpcy5fZXZlbnRzO1xuICBkZWxldGUgdGhpcy5fb25jZUV2ZW50cztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5yZXR1cm4gRXZFbWl0dGVyO1xuXG59ICkgKTtcbiIsIi8qKlxuICogRml6enkgVUkgdXRpbHMgdjMuMC4wXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSggZ2xvYmFsICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBnbG9iYWwuZml6enlVSVV0aWxzID0gZmFjdG9yeSggZ2xvYmFsICk7XG4gIH1cblxufSggdGhpcywgZnVuY3Rpb24gZmFjdG9yeSggZ2xvYmFsICkge1xuXG5sZXQgdXRpbHMgPSB7fTtcblxuLy8gLS0tLS0gZXh0ZW5kIC0tLS0tIC8vXG5cbi8vIGV4dGVuZHMgb2JqZWN0c1xudXRpbHMuZXh0ZW5kID0gZnVuY3Rpb24oIGEsIGIgKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKCBhLCBiICk7XG59O1xuXG4vLyAtLS0tLSBtb2R1bG8gLS0tLS0gLy9cblxudXRpbHMubW9kdWxvID0gZnVuY3Rpb24oIG51bSwgZGl2ICkge1xuICByZXR1cm4gKCAoIG51bSAlIGRpdiApICsgZGl2ICkgJSBkaXY7XG59O1xuXG4vLyAtLS0tLSBtYWtlQXJyYXkgLS0tLS0gLy9cblxuLy8gdHVybiBlbGVtZW50IG9yIG5vZGVMaXN0IGludG8gYW4gYXJyYXlcbnV0aWxzLm1ha2VBcnJheSA9IGZ1bmN0aW9uKCBvYmogKSB7XG4gIC8vIHVzZSBvYmplY3QgaWYgYWxyZWFkeSBhbiBhcnJheVxuICBpZiAoIEFycmF5LmlzQXJyYXkoIG9iaiApICkgcmV0dXJuIG9iajtcblxuICAvLyByZXR1cm4gZW1wdHkgYXJyYXkgaWYgdW5kZWZpbmVkIG9yIG51bGwuICM2XG4gIGlmICggb2JqID09PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkICkgcmV0dXJuIFtdO1xuXG4gIGxldCBpc0FycmF5TGlrZSA9IHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5sZW5ndGggPT0gJ251bWJlcic7XG4gIC8vIGNvbnZlcnQgbm9kZUxpc3QgdG8gYXJyYXlcbiAgaWYgKCBpc0FycmF5TGlrZSApIHJldHVybiBbIC4uLm9iaiBdO1xuXG4gIC8vIGFycmF5IG9mIHNpbmdsZSBpbmRleFxuICByZXR1cm4gWyBvYmogXTtcbn07XG5cbi8vIC0tLS0tIHJlbW92ZUZyb20gLS0tLS0gLy9cblxudXRpbHMucmVtb3ZlRnJvbSA9IGZ1bmN0aW9uKCBhcnksIG9iaiApIHtcbiAgbGV0IGluZGV4ID0gYXJ5LmluZGV4T2YoIG9iaiApO1xuICBpZiAoIGluZGV4ICE9IC0xICkge1xuICAgIGFyeS5zcGxpY2UoIGluZGV4LCAxICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFBhcmVudCAtLS0tLSAvL1xuXG51dGlscy5nZXRQYXJlbnQgPSBmdW5jdGlvbiggZWxlbSwgc2VsZWN0b3IgKSB7XG4gIHdoaWxlICggZWxlbS5wYXJlbnROb2RlICYmIGVsZW0gIT0gZG9jdW1lbnQuYm9keSApIHtcbiAgICBlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xuICAgIGlmICggZWxlbS5tYXRjaGVzKCBzZWxlY3RvciApICkgcmV0dXJuIGVsZW07XG4gIH1cbn07XG5cbi8vIC0tLS0tIGdldFF1ZXJ5RWxlbWVudCAtLS0tLSAvL1xuXG4vLyB1c2UgZWxlbWVudCBhcyBzZWxlY3RvciBzdHJpbmdcbnV0aWxzLmdldFF1ZXJ5RWxlbWVudCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBlbGVtICk7XG4gIH1cbiAgcmV0dXJuIGVsZW07XG59O1xuXG4vLyAtLS0tLSBoYW5kbGVFdmVudCAtLS0tLSAvL1xuXG4vLyBlbmFibGUgLm9udHlwZSB0byB0cmlnZ2VyIGZyb20gLmFkZEV2ZW50TGlzdGVuZXIoIGVsZW0sICd0eXBlJyApXG51dGlscy5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgbGV0IG1ldGhvZCA9ICdvbicgKyBldmVudC50eXBlO1xuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCBldmVudCApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBmaWx0ZXJGaW5kRWxlbWVudHMgLS0tLS0gLy9cblxudXRpbHMuZmlsdGVyRmluZEVsZW1lbnRzID0gZnVuY3Rpb24oIGVsZW1zLCBzZWxlY3RvciApIHtcbiAgLy8gbWFrZSBhcnJheSBvZiBlbGVtc1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcblxuICByZXR1cm4gZWxlbXNcbiAgICAvLyBjaGVjayB0aGF0IGVsZW0gaXMgYW4gYWN0dWFsIGVsZW1lbnRcbiAgICAuZmlsdGVyKCAoIGVsZW0gKSA9PiBlbGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgKVxuICAgIC5yZWR1Y2UoICggZmZFbGVtcywgZWxlbSApID0+IHtcbiAgICAgIC8vIGFkZCBlbGVtIGlmIG5vIHNlbGVjdG9yXG4gICAgICBpZiAoICFzZWxlY3RvciApIHtcbiAgICAgICAgZmZFbGVtcy5wdXNoKCBlbGVtICk7XG4gICAgICAgIHJldHVybiBmZkVsZW1zO1xuICAgICAgfVxuICAgICAgLy8gZmlsdGVyICYgZmluZCBpdGVtcyBpZiB3ZSBoYXZlIGEgc2VsZWN0b3JcbiAgICAgIC8vIGZpbHRlclxuICAgICAgaWYgKCBlbGVtLm1hdGNoZXMoIHNlbGVjdG9yICkgKSB7XG4gICAgICAgIGZmRWxlbXMucHVzaCggZWxlbSApO1xuICAgICAgfVxuICAgICAgLy8gZmluZCBjaGlsZHJlblxuICAgICAgbGV0IGNoaWxkRWxlbXMgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICk7XG4gICAgICAvLyBjb25jYXQgY2hpbGRFbGVtcyB0byBmaWx0ZXJGb3VuZCBhcnJheVxuICAgICAgZmZFbGVtcyA9IGZmRWxlbXMuY29uY2F0KCAuLi5jaGlsZEVsZW1zICk7XG4gICAgICByZXR1cm4gZmZFbGVtcztcbiAgICB9LCBbXSApO1xufTtcblxuLy8gLS0tLS0gZGVib3VuY2VNZXRob2QgLS0tLS0gLy9cblxudXRpbHMuZGVib3VuY2VNZXRob2QgPSBmdW5jdGlvbiggX2NsYXNzLCBtZXRob2ROYW1lLCB0aHJlc2hvbGQgKSB7XG4gIHRocmVzaG9sZCA9IHRocmVzaG9sZCB8fCAxMDA7XG4gIC8vIG9yaWdpbmFsIG1ldGhvZFxuICBsZXQgbWV0aG9kID0gX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdO1xuICBsZXQgdGltZW91dE5hbWUgPSBtZXRob2ROYW1lICsgJ1RpbWVvdXQnO1xuXG4gIF9jbGFzcy5wcm90b3R5cGVbIG1ldGhvZE5hbWUgXSA9IGZ1bmN0aW9uKCkge1xuICAgIGNsZWFyVGltZW91dCggdGhpc1sgdGltZW91dE5hbWUgXSApO1xuXG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdGhpc1sgdGltZW91dE5hbWUgXSA9IHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgIG1ldGhvZC5hcHBseSggdGhpcywgYXJncyApO1xuICAgICAgZGVsZXRlIHRoaXNbIHRpbWVvdXROYW1lIF07XG4gICAgfSwgdGhyZXNob2xkICk7XG4gIH07XG59O1xuXG4vLyAtLS0tLSBkb2NSZWFkeSAtLS0tLSAvL1xuXG51dGlscy5kb2NSZWFkeSA9IGZ1bmN0aW9uKCBvbkRvY1JlYWR5ICkge1xuICBsZXQgcmVhZHlTdGF0ZSA9IGRvY3VtZW50LnJlYWR5U3RhdGU7XG4gIGlmICggcmVhZHlTdGF0ZSA9PSAnY29tcGxldGUnIHx8IHJlYWR5U3RhdGUgPT0gJ2ludGVyYWN0aXZlJyApIHtcbiAgICAvLyBkbyBhc3luYyB0byBhbGxvdyBmb3Igb3RoZXIgc2NyaXB0cyB0byBydW4uIG1ldGFmaXp6eS9mbGlja2l0eSM0NDFcbiAgICBzZXRUaW1lb3V0KCBvbkRvY1JlYWR5ICk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCBvbkRvY1JlYWR5ICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGh0bWxJbml0IC0tLS0tIC8vXG5cbi8vIGh0dHA6Ly9iaXQubHkvM29ZTHVzY1xudXRpbHMudG9EYXNoZWQgPSBmdW5jdGlvbiggc3RyICkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC8oLikoW0EtWl0pL2csIGZ1bmN0aW9uKCBtYXRjaCwgJDEsICQyICkge1xuICAgIHJldHVybiAkMSArICctJyArICQyO1xuICB9ICkudG9Mb3dlckNhc2UoKTtcbn07XG5cbmxldCBjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGU7XG5cbi8vIGFsbG93IHVzZXIgdG8gaW5pdGlhbGl6ZSBjbGFzc2VzIHZpYSBbZGF0YS1uYW1lc3BhY2VdIG9yIC5qcy1uYW1lc3BhY2UgY2xhc3Ncbi8vIGh0bWxJbml0KCBXaWRnZXQsICd3aWRnZXROYW1lJyApXG4vLyBvcHRpb25zIGFyZSBwYXJzZWQgZnJvbSBkYXRhLW5hbWVzcGFjZS1vcHRpb25zXG51dGlscy5odG1sSW5pdCA9IGZ1bmN0aW9uKCBXaWRnZXRDbGFzcywgbmFtZXNwYWNlICkge1xuICB1dGlscy5kb2NSZWFkeSggZnVuY3Rpb24oKSB7XG4gICAgbGV0IGRhc2hlZE5hbWVzcGFjZSA9IHV0aWxzLnRvRGFzaGVkKCBuYW1lc3BhY2UgKTtcbiAgICBsZXQgZGF0YUF0dHIgPSAnZGF0YS0nICsgZGFzaGVkTmFtZXNwYWNlO1xuICAgIGxldCBkYXRhQXR0ckVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggYFske2RhdGFBdHRyfV1gICk7XG4gICAgbGV0IGpRdWVyeSA9IGdsb2JhbC5qUXVlcnk7XG5cbiAgICBbIC4uLmRhdGFBdHRyRWxlbXMgXS5mb3JFYWNoKCAoIGVsZW0gKSA9PiB7XG4gICAgICBsZXQgYXR0ciA9IGVsZW0uZ2V0QXR0cmlidXRlKCBkYXRhQXR0ciApO1xuICAgICAgbGV0IG9wdGlvbnM7XG4gICAgICB0cnkge1xuICAgICAgICBvcHRpb25zID0gYXR0ciAmJiBKU09OLnBhcnNlKCBhdHRyICk7XG4gICAgICB9IGNhdGNoICggZXJyb3IgKSB7XG4gICAgICAgIC8vIGxvZyBlcnJvciwgZG8gbm90IGluaXRpYWxpemVcbiAgICAgICAgaWYgKCBjb25zb2xlICkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGBFcnJvciBwYXJzaW5nICR7ZGF0YUF0dHJ9IG9uICR7ZWxlbS5jbGFzc05hbWV9OiAke2Vycm9yfWAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpbml0aWFsaXplXG4gICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgV2lkZ2V0Q2xhc3MoIGVsZW0sIG9wdGlvbnMgKTtcbiAgICAgIC8vIG1ha2UgYXZhaWxhYmxlIHZpYSAkKCkuZGF0YSgnbmFtZXNwYWNlJylcbiAgICAgIGlmICggalF1ZXJ5ICkge1xuICAgICAgICBqUXVlcnkuZGF0YSggZWxlbSwgbmFtZXNwYWNlLCBpbnN0YW5jZSApO1xuICAgICAgfVxuICAgIH0gKTtcblxuICB9ICk7XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxucmV0dXJuIHV0aWxzO1xuXG59ICkgKTtcbiIsIi8vIGJ1dHRvblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBJbmZpbml0ZVNjcm9sbCwgdXRpbHMgKSB7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEluZmluaXRlU2Nyb2xsQnV0dG9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmNsYXNzIEluZmluaXRlU2Nyb2xsQnV0dG9uIHtcbiAgY29uc3RydWN0b3IoIGVsZW1lbnQsIGluZlNjcm9sbCApIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuaW5mU2Nyb2xsID0gaW5mU2Nyb2xsO1xuICAgIC8vIGV2ZW50c1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gdGhpcy5vbkNsaWNrLmJpbmQoIHRoaXMgKTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIgKTtcbiAgICBpbmZTY3JvbGwub24oICdyZXF1ZXN0JywgdGhpcy5kaXNhYmxlLmJpbmQoIHRoaXMgKSApO1xuICAgIGluZlNjcm9sbC5vbiggJ2xvYWQnLCB0aGlzLmVuYWJsZS5iaW5kKCB0aGlzICkgKTtcbiAgICBpbmZTY3JvbGwub24oICdlcnJvcicsIHRoaXMuaGlkZS5iaW5kKCB0aGlzICkgKTtcbiAgICBpbmZTY3JvbGwub24oICdsYXN0JywgdGhpcy5oaWRlLmJpbmQoIHRoaXMgKSApO1xuICB9XG5cbiAgb25DbGljayggZXZlbnQgKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmluZlNjcm9sbC5sb2FkTmV4dFBhZ2UoKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQgPSAnZGlzYWJsZWQnO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyICk7XG4gIH1cblxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJbmZpbml0ZVNjcm9sbCBtZXRob2RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIEluZmluaXRlU2Nyb2xsLmRlZmF1bHRzLmJ1dHRvbiA9IG51bGw7XG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5idXR0b24gPSBmdW5jdGlvbigpIHtcbiAgbGV0IGJ1dHRvbkVsZW0gPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIHRoaXMub3B0aW9ucy5idXR0b24gKTtcbiAgaWYgKCBidXR0b25FbGVtICkge1xuICAgIHRoaXMuYnV0dG9uID0gbmV3IEluZmluaXRlU2Nyb2xsQnV0dG9uKCBidXR0b25FbGVtLCB0aGlzICk7XG4gIH1cbn07XG5cbkluZmluaXRlU2Nyb2xsLmRlc3Ryb3kuYnV0dG9uID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5idXR0b24gKSB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuSW5maW5pdGVTY3JvbGwuQnV0dG9uID0gSW5maW5pdGVTY3JvbGxCdXR0b247XG5cbnJldHVybiBJbmZpbml0ZVNjcm9sbDtcblxufSApICk7XG4iLCIvLyBjb3JlXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnZXYtZW1pdHRlcicpLFxuICAgICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuSW5maW5pdGVTY3JvbGwgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5FdkVtaXR0ZXIsXG4gICAgICAgIHdpbmRvdy5maXp6eVVJVXRpbHMsXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyLCB1dGlscyApIHtcblxubGV0IGpRdWVyeSA9IHdpbmRvdy5qUXVlcnk7XG4vLyBpbnRlcm5hbCBzdG9yZSBvZiBhbGwgSW5maW5pdGVTY3JvbGwgaW50YW5jZXNcbmxldCBpbnN0YW5jZXMgPSB7fTtcblxuZnVuY3Rpb24gSW5maW5pdGVTY3JvbGwoIGVsZW1lbnQsIG9wdGlvbnMgKSB7XG4gIGxldCBxdWVyeUVsZW0gPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIGVsZW1lbnQgKTtcblxuICBpZiAoICFxdWVyeUVsZW0gKSB7XG4gICAgY29uc29sZS5lcnJvciggJ0JhZCBlbGVtZW50IGZvciBJbmZpbml0ZVNjcm9sbDogJyArICggcXVlcnlFbGVtIHx8IGVsZW1lbnQgKSApO1xuICAgIHJldHVybjtcbiAgfVxuICBlbGVtZW50ID0gcXVlcnlFbGVtO1xuICAvLyBkbyBub3QgaW5pdGlhbGl6ZSB0d2ljZSBvbiBzYW1lIGVsZW1lbnRcbiAgaWYgKCBlbGVtZW50LmluZmluaXRlU2Nyb2xsR1VJRCApIHtcbiAgICBsZXQgaW5zdGFuY2UgPSBpbnN0YW5jZXNbIGVsZW1lbnQuaW5maW5pdGVTY3JvbGxHVUlEIF07XG4gICAgaW5zdGFuY2Uub3B0aW9uKCBvcHRpb25zICk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgLy8gb3B0aW9uc1xuICB0aGlzLm9wdGlvbnMgPSB7IC4uLkluZmluaXRlU2Nyb2xsLmRlZmF1bHRzIH07XG4gIHRoaXMub3B0aW9uKCBvcHRpb25zICk7XG4gIC8vIGFkZCBqUXVlcnlcbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9IGpRdWVyeSggdGhpcy5lbGVtZW50ICk7XG4gIH1cblxuICB0aGlzLmNyZWF0ZSgpO1xufVxuXG4vLyBkZWZhdWx0c1xuSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMgPSB7XG4gIC8vIHBhdGg6IG51bGwsXG4gIC8vIGhpZGVOYXY6IG51bGwsXG4gIC8vIGRlYnVnOiBmYWxzZSxcbn07XG5cbi8vIGNyZWF0ZSAmIGRlc3Ryb3kgbWV0aG9kc1xuSW5maW5pdGVTY3JvbGwuY3JlYXRlID0ge307XG5JbmZpbml0ZVNjcm9sbC5kZXN0cm95ID0ge307XG5cbmxldCBwcm90byA9IEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZTtcbi8vIGluaGVyaXQgRXZFbWl0dGVyXG5PYmplY3QuYXNzaWduKCBwcm90bywgRXZFbWl0dGVyLnByb3RvdHlwZSApO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXJzXG5sZXQgR1VJRCA9IDA7XG5cbnByb3RvLmNyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBjcmVhdGUgY29yZVxuICAvLyBhZGQgaWQgZm9yIEluZmluaXRlU2Nyb2xsLmRhdGFcbiAgbGV0IGlkID0gdGhpcy5ndWlkID0gKytHVUlEO1xuICB0aGlzLmVsZW1lbnQuaW5maW5pdGVTY3JvbGxHVUlEID0gaWQ7IC8vIGV4cGFuZG9cbiAgaW5zdGFuY2VzWyBpZCBdID0gdGhpczsgLy8gYXNzb2NpYXRlIHZpYSBpZFxuICAvLyBwcm9wZXJ0aWVzXG4gIHRoaXMucGFnZUluZGV4ID0gMTsgLy8gZGVmYXVsdCB0byBmaXJzdCBwYWdlXG4gIHRoaXMubG9hZENvdW50ID0gMDtcbiAgdGhpcy51cGRhdGVHZXRQYXRoKCk7XG4gIC8vIGJhaWwgaWYgZ2V0UGF0aCBub3Qgc2V0LCBvciByZXR1cm5zIGZhbHNleSAjNzc2XG4gIGxldCBoYXNQYXRoID0gdGhpcy5nZXRQYXRoICYmIHRoaXMuZ2V0UGF0aCgpO1xuICBpZiAoICFoYXNQYXRoICkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Rpc2FibGluZyBJbmZpbml0ZVNjcm9sbCcpO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnVwZGF0ZUdldEFic29sdXRlUGF0aCgpO1xuICB0aGlzLmxvZyggJ2luaXRpYWxpemVkJywgWyB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lIF0gKTtcbiAgdGhpcy5jYWxsT25Jbml0KCk7XG4gIC8vIGNyZWF0ZSBmZWF0dXJlc1xuICBmb3IgKCBsZXQgbWV0aG9kIGluIEluZmluaXRlU2Nyb2xsLmNyZWF0ZSApIHtcbiAgICBJbmZpbml0ZVNjcm9sbC5jcmVhdGVbIG1ldGhvZCBdLmNhbGwoIHRoaXMgKTtcbiAgfVxufTtcblxucHJvdG8ub3B0aW9uID0gZnVuY3Rpb24oIG9wdHMgKSB7XG4gIE9iamVjdC5hc3NpZ24oIHRoaXMub3B0aW9ucywgb3B0cyApO1xufTtcblxuLy8gY2FsbCBvbkluaXQgb3B0aW9uLCB1c2VkIGZvciBiaW5kaW5nIGV2ZW50cyBvbiBpbml0XG5wcm90by5jYWxsT25Jbml0ID0gZnVuY3Rpb24oKSB7XG4gIGxldCBvbkluaXQgPSB0aGlzLm9wdGlvbnMub25Jbml0O1xuICBpZiAoIG9uSW5pdCApIHtcbiAgICBvbkluaXQuY2FsbCggdGhpcywgdGhpcyApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBldmVudHMgLS0tLS0gLy9cblxucHJvdG8uZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKCB0eXBlLCBldmVudCwgYXJncyApIHtcbiAgdGhpcy5sb2coIHR5cGUsIGFyZ3MgKTtcbiAgbGV0IGVtaXRBcmdzID0gZXZlbnQgPyBbIGV2ZW50IF0uY29uY2F0KCBhcmdzICkgOiBhcmdzO1xuICB0aGlzLmVtaXRFdmVudCggdHlwZSwgZW1pdEFyZ3MgKTtcbiAgLy8gdHJpZ2dlciBqUXVlcnkgZXZlbnRcbiAgaWYgKCAhalF1ZXJ5IHx8ICF0aGlzLiRlbGVtZW50ICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBuYW1lc3BhY2UgalF1ZXJ5IGV2ZW50XG4gIHR5cGUgKz0gJy5pbmZpbml0ZVNjcm9sbCc7XG4gIGxldCAkZXZlbnQgPSB0eXBlO1xuICBpZiAoIGV2ZW50ICkge1xuICAgIC8vIGNyZWF0ZSBqUXVlcnkgZXZlbnRcbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbmV3LWNhcCAqL1xuICAgIGxldCBqUUV2ZW50ID0galF1ZXJ5LkV2ZW50KCBldmVudCApO1xuICAgIGpRRXZlbnQudHlwZSA9IHR5cGU7XG4gICAgJGV2ZW50ID0galFFdmVudDtcbiAgfVxuICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoICRldmVudCwgYXJncyApO1xufTtcblxubGV0IGxvZ2dlcnMgPSB7XG4gIGluaXRpYWxpemVkOiAoIGNsYXNzTmFtZSApID0+IGBvbiAke2NsYXNzTmFtZX1gLFxuICByZXF1ZXN0OiAoIHBhdGggKSA9PiBgVVJMOiAke3BhdGh9YCxcbiAgbG9hZDogKCByZXNwb25zZSwgcGF0aCApID0+IGAke3Jlc3BvbnNlLnRpdGxlIHx8ICcnfS4gVVJMOiAke3BhdGh9YCxcbiAgZXJyb3I6ICggZXJyb3IsIHBhdGggKSA9PiBgJHtlcnJvcn0uIFVSTDogJHtwYXRofWAsXG4gIGFwcGVuZDogKCByZXNwb25zZSwgcGF0aCwgaXRlbXMgKSA9PiBgJHtpdGVtcy5sZW5ndGh9IGl0ZW1zLiBVUkw6ICR7cGF0aH1gLFxuICBsYXN0OiAoIHJlc3BvbnNlLCBwYXRoICkgPT4gYFVSTDogJHtwYXRofWAsXG4gIGhpc3Rvcnk6ICggdGl0bGUsIHBhdGggKSA9PiBgVVJMOiAke3BhdGh9YCxcbiAgcGFnZUluZGV4OiBmdW5jdGlvbiggaW5kZXgsIG9yaWdpbiApIHtcbiAgICByZXR1cm4gYGN1cnJlbnQgcGFnZSBkZXRlcm1pbmVkIHRvIGJlOiAke2luZGV4fSBmcm9tICR7b3JpZ2lufWA7XG4gIH0sXG59O1xuXG4vLyBsb2cgZXZlbnRzXG5wcm90by5sb2cgPSBmdW5jdGlvbiggdHlwZSwgYXJncyApIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLmRlYnVnICkgcmV0dXJuO1xuXG4gIGxldCBtZXNzYWdlID0gYFtJbmZpbml0ZVNjcm9sbF0gJHt0eXBlfWA7XG4gIGxldCBsb2dnZXIgPSBsb2dnZXJzWyB0eXBlIF07XG4gIGlmICggbG9nZ2VyICkgbWVzc2FnZSArPSAnLiAnICsgbG9nZ2VyLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gIGNvbnNvbGUubG9nKCBtZXNzYWdlICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZXRob2RzIHVzZWQgYW1vdW5nIGZlYXR1cmVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnByb3RvLnVwZGF0ZU1lYXN1cmVtZW50cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgbGV0IHJlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHRoaXMudG9wID0gcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbn07XG5cbnByb3RvLnVwZGF0ZVNjcm9sbGVyID0gZnVuY3Rpb24oKSB7XG4gIGxldCBlbGVtZW50U2Nyb2xsID0gdGhpcy5vcHRpb25zLmVsZW1lbnRTY3JvbGw7XG4gIGlmICggIWVsZW1lbnRTY3JvbGwgKSB7XG4gICAgLy8gZGVmYXVsdCwgdXNlIHdpbmRvd1xuICAgIHRoaXMuc2Nyb2xsZXIgPSB3aW5kb3c7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGlmIHRydWUsIHNldCB0byBlbGVtZW50LCBvdGhlcndpc2UgdXNlIG9wdGlvblxuICB0aGlzLnNjcm9sbGVyID0gZWxlbWVudFNjcm9sbCA9PT0gdHJ1ZSA/IHRoaXMuZWxlbWVudCA6XG4gICAgdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCBlbGVtZW50U2Nyb2xsICk7XG4gIGlmICggIXRoaXMuc2Nyb2xsZXIgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZmluZCBlbGVtZW50U2Nyb2xsOiAke2VsZW1lbnRTY3JvbGx9YCk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBhZ2UgcGF0aCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by51cGRhdGVHZXRQYXRoID0gZnVuY3Rpb24oKSB7XG4gIGxldCBvcHRQYXRoID0gdGhpcy5vcHRpb25zLnBhdGg7XG4gIGlmICggIW9wdFBhdGggKSB7XG4gICAgY29uc29sZS5lcnJvcihgSW5maW5pdGVTY3JvbGwgcGF0aCBvcHRpb24gcmVxdWlyZWQuIFNldCBhczogJHtvcHRQYXRofWApO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBmdW5jdGlvblxuICBsZXQgdHlwZSA9IHR5cGVvZiBvcHRQYXRoO1xuICBpZiAoIHR5cGUgPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICB0aGlzLmdldFBhdGggPSBvcHRQYXRoO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyB0ZW1wbGF0ZSBzdHJpbmc6ICcvcGFnZXMve3sjfX0uaHRtbCdcbiAgbGV0IHRlbXBsYXRlTWF0Y2ggPSB0eXBlID09ICdzdHJpbmcnICYmIG9wdFBhdGgubWF0Y2goJ3t7I319Jyk7XG4gIGlmICggdGVtcGxhdGVNYXRjaCApIHtcbiAgICB0aGlzLnVwZGF0ZUdldFBhdGhUZW1wbGF0ZSggb3B0UGF0aCApO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBzZWxlY3RvcjogJy5uZXh0LXBhZ2Utc2VsZWN0b3InXG4gIHRoaXMudXBkYXRlR2V0UGF0aFNlbGVjdG9yKCBvcHRQYXRoICk7XG59O1xuXG5wcm90by51cGRhdGVHZXRQYXRoVGVtcGxhdGUgPSBmdW5jdGlvbiggb3B0UGF0aCApIHtcbiAgLy8gc2V0IGdldFBhdGggd2l0aCB0ZW1wbGF0ZSBzdHJpbmdcbiAgdGhpcy5nZXRQYXRoID0gKCkgPT4ge1xuICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLnBhZ2VJbmRleCArIDE7XG4gICAgcmV0dXJuIG9wdFBhdGgucmVwbGFjZSggJ3t7I319JywgbmV4dEluZGV4ICk7XG4gIH07XG4gIC8vIGdldCBwYWdlSW5kZXggZnJvbSBsb2NhdGlvblxuICAvLyBjb252ZXJ0IHBhdGggb3B0aW9uIGludG8gcmVnZXggdG8gbG9vayBmb3IgcGF0dGVybiBpbiBsb2NhdGlvblxuICAvLyBlc2NhcGUgcXVlcnkgKD8pIGluIHVybCwgYWxsb3dzIGZvciBwYXJzaW5nIEdFVCBwYXJhbWV0ZXJzXG4gIGxldCByZWdleFN0cmluZyA9IG9wdFBhdGhcbiAgICAucmVwbGFjZSggLyhcXFxcXFw/fFxcPykvLCAnXFxcXD8nIClcbiAgICAucmVwbGFjZSggJ3t7I319JywgJyhcXFxcZFxcXFxkP1xcXFxkPyknICk7XG4gIGxldCB0ZW1wbGF0ZVJlID0gbmV3IFJlZ0V4cCggcmVnZXhTdHJpbmcgKTtcbiAgbGV0IG1hdGNoID0gbG9jYXRpb24uaHJlZi5tYXRjaCggdGVtcGxhdGVSZSApO1xuXG4gIGlmICggbWF0Y2ggKSB7XG4gICAgdGhpcy5wYWdlSW5kZXggPSBwYXJzZUludCggbWF0Y2hbMV0sIDEwICk7XG4gICAgdGhpcy5sb2coICdwYWdlSW5kZXgnLCBbIHRoaXMucGFnZUluZGV4LCAndGVtcGxhdGUgc3RyaW5nJyBdICk7XG4gIH1cbn07XG5cbmxldCBwYXRoUmVnZXhlcyA9IFtcbiAgLy8gV29yZFByZXNzICYgVHVtYmxyIC0gZXhhbXBsZS5jb20vcGFnZS8yXG4gIC8vIEpla3lsbCAtIGV4YW1wbGUuY29tL3BhZ2UyXG4gIC9eKC4qP1xcLz9wYWdlXFwvPykoXFxkXFxkP1xcZD8pKC4qPyQpLyxcbiAgLy8gRHJ1cGFsIC0gZXhhbXBsZS5jb20vP3BhZ2U9MVxuICAvXiguKj9cXC8/XFw/cGFnZT0pKFxcZFxcZD9cXGQ/KSguKj8kKS8sXG4gIC8vIGNhdGNoIGFsbCwgbGFzdCBvY2N1cmVuY2Ugb2YgYSBudW1iZXJcbiAgLyguKj8pKFxcZFxcZD9cXGQ/KSg/IS4qXFxkKSguKj8kKS8sXG5dO1xuXG4vLyB0cnkgbWF0Y2hpbmcgaHJlZiB0byBwYXRoUmVnZXhlcyBwYXR0ZXJuc1xubGV0IGdldFBhdGhQYXJ0cyA9IEluZmluaXRlU2Nyb2xsLmdldFBhdGhQYXJ0cyA9IGZ1bmN0aW9uKCBocmVmICkge1xuICBpZiAoICFocmVmICkgcmV0dXJuO1xuICBmb3IgKCBsZXQgcmVnZXggb2YgcGF0aFJlZ2V4ZXMgKSB7XG4gICAgbGV0IG1hdGNoID0gaHJlZi5tYXRjaCggcmVnZXggKTtcbiAgICBpZiAoIG1hdGNoICkge1xuICAgICAgbGV0IFsgLCBiZWdpbiwgaW5kZXgsIGVuZCBdID0gbWF0Y2g7XG4gICAgICByZXR1cm4geyBiZWdpbiwgaW5kZXgsIGVuZCB9O1xuICAgIH1cbiAgfVxufTtcblxucHJvdG8udXBkYXRlR2V0UGF0aFNlbGVjdG9yID0gZnVuY3Rpb24oIG9wdFBhdGggKSB7XG4gIC8vIHBhcnNlIGhyZWYgb2YgbGluazogJy5uZXh0LXBhZ2UtbGluaydcbiAgbGV0IGhyZWZFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggb3B0UGF0aCApO1xuICBpZiAoICFocmVmRWxlbSApIHtcbiAgICBjb25zb2xlLmVycm9yKGBCYWQgSW5maW5pdGVTY3JvbGwgcGF0aCBvcHRpb24uIE5leHQgbGluayBub3QgZm91bmQ6ICR7b3B0UGF0aH1gKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaHJlZiA9IGhyZWZFbGVtLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBsZXQgcGF0aFBhcnRzID0gZ2V0UGF0aFBhcnRzKCBocmVmICk7XG4gIGlmICggIXBhdGhQYXJ0cyApIHtcbiAgICBjb25zb2xlLmVycm9yKGBJbmZpbml0ZVNjcm9sbCB1bmFibGUgdG8gcGFyc2UgbmV4dCBsaW5rIGhyZWY6ICR7aHJlZn1gKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgeyBiZWdpbiwgaW5kZXgsIGVuZCB9ID0gcGF0aFBhcnRzO1xuICB0aGlzLmlzUGF0aFNlbGVjdG9yID0gdHJ1ZTsgLy8gZmxhZyBmb3IgY2hlY2tMYXN0UGFnZSgpXG4gIHRoaXMuZ2V0UGF0aCA9ICgpID0+IGJlZ2luICsgKCB0aGlzLnBhZ2VJbmRleCArIDEgKSArIGVuZDtcbiAgLy8gZ2V0IHBhZ2VJbmRleCBmcm9tIGhyZWZcbiAgdGhpcy5wYWdlSW5kZXggPSBwYXJzZUludCggaW5kZXgsIDEwICkgLSAxO1xuICB0aGlzLmxvZyggJ3BhZ2VJbmRleCcsIFsgdGhpcy5wYWdlSW5kZXgsICduZXh0IGxpbmsnIF0gKTtcbn07XG5cbnByb3RvLnVwZGF0ZUdldEFic29sdXRlUGF0aCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgcGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAvLyBwYXRoIGRvZXNuJ3Qgc3RhcnQgd2l0aCBodHRwIG9yIC9cbiAgbGV0IGlzQWJzb2x1dGUgPSBwYXRoLm1hdGNoKCAvXmh0dHAvICkgfHwgcGF0aC5tYXRjaCggL15cXC8vICk7XG4gIGlmICggaXNBYnNvbHV0ZSApIHtcbiAgICB0aGlzLmdldEFic29sdXRlUGF0aCA9IHRoaXMuZ2V0UGF0aDtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgeyBwYXRobmFtZSB9ID0gbG9jYXRpb247XG4gIC8vIHF1ZXJ5IHBhcmFtZXRlciAjODI5LiBleGFtcGxlLmNvbS8/cGc9MlxuICBsZXQgaXNRdWVyeSA9IHBhdGgubWF0Y2goIC9eXFw/LyApO1xuICAvLyAvZm9vL2Jhci9pbmRleC5odG1sID0+IC9mb28vYmFyXG4gIGxldCBkaXJlY3RvcnkgPSBwYXRobmFtZS5zdWJzdHJpbmcoIDAsIHBhdGhuYW1lLmxhc3RJbmRleE9mKCcvJykgKTtcbiAgbGV0IHBhdGhTdGFydCA9IGlzUXVlcnkgPyBwYXRobmFtZSA6IGRpcmVjdG9yeSArICcvJztcblxuICB0aGlzLmdldEFic29sdXRlUGF0aCA9ICgpID0+IHBhdGhTdGFydCArIHRoaXMuZ2V0UGF0aCgpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbmF2IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGhpZGUgbmF2aWdhdGlvblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLmhpZGVOYXYgPSBmdW5jdGlvbigpIHtcbiAgbGV0IG5hdiA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggdGhpcy5vcHRpb25zLmhpZGVOYXYgKTtcbiAgaWYgKCAhbmF2ICkgcmV0dXJuO1xuXG4gIG5hdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB0aGlzLm5hdiA9IG5hdjtcbn07XG5cbkluZmluaXRlU2Nyb2xsLmRlc3Ryb3kuaGlkZU5hdiA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMubmF2ICkgdGhpcy5uYXYuc3R5bGUuZGlzcGxheSA9ICcnO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGVzdHJveSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuYWxsT2ZmKCk7IC8vIHJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzXG4gIC8vIGNhbGwgZGVzdHJveSBtZXRob2RzXG4gIGZvciAoIGxldCBtZXRob2QgaW4gSW5maW5pdGVTY3JvbGwuZGVzdHJveSApIHtcbiAgICBJbmZpbml0ZVNjcm9sbC5kZXN0cm95WyBtZXRob2QgXS5jYWxsKCB0aGlzICk7XG4gIH1cblxuICBkZWxldGUgdGhpcy5lbGVtZW50LmluZmluaXRlU2Nyb2xsR1VJRDtcbiAgZGVsZXRlIGluc3RhbmNlc1sgdGhpcy5ndWlkIF07XG4gIC8vIHJlbW92ZSBqUXVlcnkgZGF0YS4gIzgwN1xuICBpZiAoIGpRdWVyeSAmJiB0aGlzLiRlbGVtZW50ICkge1xuICAgIGpRdWVyeS5yZW1vdmVEYXRhKCB0aGlzLmVsZW1lbnQsICdpbmZpbml0ZVNjcm9sbCcgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdXRpbGl0aWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGh0dHBzOi8vcmVteXNoYXJwLmNvbS8yMDEwLzA3LzIxL3Rocm90dGxpbmctZnVuY3Rpb24tY2FsbHNcbkluZmluaXRlU2Nyb2xsLnRocm90dGxlID0gZnVuY3Rpb24oIGZuLCB0aHJlc2hvbGQgKSB7XG4gIHRocmVzaG9sZCA9IHRocmVzaG9sZCB8fCAyMDA7XG4gIGxldCBsYXN0LCB0aW1lb3V0O1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBsZXQgbm93ID0gK25ldyBEYXRlKCk7XG4gICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGV0IHRyaWdnZXIgPSAoKSA9PiB7XG4gICAgICBsYXN0ID0gbm93O1xuICAgICAgZm4uYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgICB9O1xuICAgIGlmICggbGFzdCAmJiBub3cgPCBsYXN0ICsgdGhyZXNob2xkICkge1xuICAgICAgLy8gaG9sZCBvbiB0byBpdFxuICAgICAgY2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCggdHJpZ2dlciwgdGhyZXNob2xkICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyaWdnZXIoKTtcbiAgICB9XG4gIH07XG59O1xuXG5JbmZpbml0ZVNjcm9sbC5kYXRhID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGVsZW0gPSB1dGlscy5nZXRRdWVyeUVsZW1lbnQoIGVsZW0gKTtcbiAgbGV0IGlkID0gZWxlbSAmJiBlbGVtLmluZmluaXRlU2Nyb2xsR1VJRDtcbiAgcmV0dXJuIGlkICYmIGluc3RhbmNlc1sgaWQgXTtcbn07XG5cbi8vIHNldCBpbnRlcm5hbCBqUXVlcnksIGZvciBXZWJwYWNrICsgalF1ZXJ5IHYzXG5JbmZpbml0ZVNjcm9sbC5zZXRKUXVlcnkgPSBmdW5jdGlvbigganFyeSApIHtcbiAgalF1ZXJ5ID0ganFyeTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnV0aWxzLmh0bWxJbml0KCBJbmZpbml0ZVNjcm9sbCwgJ2luZmluaXRlLXNjcm9sbCcgKTtcblxuLy8gYWRkIG5vb3AgX2luaXQgbWV0aG9kIGZvciBqUXVlcnkgQnJpZGdldC4gIzc2OFxucHJvdG8uX2luaXQgPSBmdW5jdGlvbigpIHt9O1xuXG5sZXQgeyBqUXVlcnlCcmlkZ2V0IH0gPSB3aW5kb3c7XG5pZiAoIGpRdWVyeSAmJiBqUXVlcnlCcmlkZ2V0ICkge1xuICBqUXVlcnlCcmlkZ2V0KCAnaW5maW5pdGVTY3JvbGwnLCBJbmZpbml0ZVNjcm9sbCwgalF1ZXJ5ICk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiLy8gaGlzdG9yeVxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgICB3aW5kb3csXG4gICAgICAgIHdpbmRvdy5JbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBJbmZpbml0ZVNjcm9sbCwgdXRpbHMgKSB7XG5cbmxldCBwcm90byA9IEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZTtcblxuT2JqZWN0LmFzc2lnbiggSW5maW5pdGVTY3JvbGwuZGVmYXVsdHMsIHtcbiAgaGlzdG9yeTogJ3JlcGxhY2UnLFxuICAvLyBoaXN0b3J5VGl0bGU6IGZhbHNlLFxufSApO1xuXG5sZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuLy8gLS0tLS0gY3JlYXRlL2Rlc3Ryb3kgLS0tLS0gLy9cblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLmhpc3RvcnkgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLmhpc3RvcnkgKSByZXR1cm47XG5cbiAgLy8gY2hlY2sgZm9yIHNhbWUgb3JpZ2luXG4gIGxpbmsuaHJlZiA9IHRoaXMuZ2V0QWJzb2x1dGVQYXRoKCk7XG4gIC8vIE1TIEVkZ2UgZG9lcyBub3QgaGF2ZSBvcmlnaW4gb24gbGlua1xuICAvLyBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMjIzNjQ5My9cbiAgbGV0IGxpbmtPcmlnaW4gPSBsaW5rLm9yaWdpbiB8fCBsaW5rLnByb3RvY29sICsgJy8vJyArIGxpbmsuaG9zdDtcbiAgbGV0IGlzU2FtZU9yaWdpbiA9IGxpbmtPcmlnaW4gPT0gbG9jYXRpb24ub3JpZ2luO1xuICBpZiAoICFpc1NhbWVPcmlnaW4gKSB7XG4gICAgY29uc29sZS5lcnJvciggJ1tJbmZpbml0ZVNjcm9sbF0gY2Fubm90IHNldCBoaXN0b3J5IHdpdGggZGlmZmVyZW50IG9yaWdpbjogJyArXG4gICAgICBgJHtsaW5rLm9yaWdpbn0gb24gJHtsb2NhdGlvbi5vcmlnaW59IC4gSGlzdG9yeSBiZWhhdmlvciBkaXNhYmxlZC5gICk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdHdvIHdheXMgdG8gaGFuZGxlIGNoYW5naW5nIGhpc3RvcnlcbiAgaWYgKCB0aGlzLm9wdGlvbnMuYXBwZW5kICkge1xuICAgIHRoaXMuY3JlYXRlSGlzdG9yeUFwcGVuZCgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY3JlYXRlSGlzdG9yeVBhZ2VMb2FkKCk7XG4gIH1cbn07XG5cbnByb3RvLmNyZWF0ZUhpc3RvcnlBcHBlbmQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy51cGRhdGVNZWFzdXJlbWVudHMoKTtcbiAgdGhpcy51cGRhdGVTY3JvbGxlcigpO1xuICAvLyBhcnJheSBvZiBzY3JvbGwgcG9zaXRpb25zIG9mIGFwcGVuZGVkIHBhZ2VzXG4gIHRoaXMuc2Nyb2xsUGFnZXMgPSBbXG4gICAgLy8gZmlyc3QgcGFnZVxuICAgIHtcbiAgICAgIHRvcDogMCxcbiAgICAgIHBhdGg6IGxvY2F0aW9uLmhyZWYsXG4gICAgICB0aXRsZTogZG9jdW1lbnQudGl0bGUsXG4gICAgfSxcbiAgXTtcbiAgdGhpcy5zY3JvbGxQYWdlID0gdGhpcy5zY3JvbGxQYWdlc1swXTtcbiAgLy8gZXZlbnRzXG4gIHRoaXMuc2Nyb2xsSGlzdG9yeUhhbmRsZXIgPSB0aGlzLm9uU2Nyb2xsSGlzdG9yeS5iaW5kKCB0aGlzICk7XG4gIHRoaXMudW5sb2FkSGFuZGxlciA9IHRoaXMub25VbmxvYWQuYmluZCggdGhpcyApO1xuICB0aGlzLnNjcm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCB0aGlzLnNjcm9sbEhpc3RvcnlIYW5kbGVyICk7XG4gIHRoaXMub24oICdhcHBlbmQnLCB0aGlzLm9uQXBwZW5kSGlzdG9yeSApO1xuICB0aGlzLmJpbmRIaXN0b3J5QXBwZW5kRXZlbnRzKCB0cnVlICk7XG59O1xuXG5wcm90by5iaW5kSGlzdG9yeUFwcGVuZEV2ZW50cyA9IGZ1bmN0aW9uKCBpc0JpbmQgKSB7XG4gIGxldCBhZGRSZW1vdmUgPSBpc0JpbmQgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4gIHRoaXMuc2Nyb2xsZXJbIGFkZFJlbW92ZSBdKCAnc2Nyb2xsJywgdGhpcy5zY3JvbGxIaXN0b3J5SGFuZGxlciApO1xuICB3aW5kb3dbIGFkZFJlbW92ZSBdKCAndW5sb2FkJywgdGhpcy51bmxvYWRIYW5kbGVyICk7XG59O1xuXG5wcm90by5jcmVhdGVIaXN0b3J5UGFnZUxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5vbiggJ2xvYWQnLCB0aGlzLm9uUGFnZUxvYWRIaXN0b3J5ICk7XG59O1xuXG5JbmZpbml0ZVNjcm9sbC5kZXN0cm95Lmhpc3RvcnkgPVxucHJvdG8uZGVzdHJveUhpc3RvcnkgPSBmdW5jdGlvbigpIHtcbiAgbGV0IGlzSGlzdG9yeUFwcGVuZCA9IHRoaXMub3B0aW9ucy5oaXN0b3J5ICYmIHRoaXMub3B0aW9ucy5hcHBlbmQ7XG4gIGlmICggaXNIaXN0b3J5QXBwZW5kICkge1xuICAgIHRoaXMuYmluZEhpc3RvcnlBcHBlbmRFdmVudHMoIGZhbHNlICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGFwcGVuZCBoaXN0b3J5IC0tLS0tIC8vXG5cbnByb3RvLm9uQXBwZW5kSGlzdG9yeSA9IGZ1bmN0aW9uKCByZXNwb25zZSwgcGF0aCwgaXRlbXMgKSB7XG4gIC8vIGRvIG5vdCBwcm9jZWVkIGlmIG5vIGl0ZW1zLiAjNzc5XG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSByZXR1cm47XG5cbiAgbGV0IGZpcnN0SXRlbSA9IGl0ZW1zWzBdO1xuICBsZXQgZWxlbVNjcm9sbFkgPSB0aGlzLmdldEVsZW1lbnRTY3JvbGxZKCBmaXJzdEl0ZW0gKTtcbiAgLy8gcmVzb2x2ZSBwYXRoXG4gIGxpbmsuaHJlZiA9IHBhdGg7XG4gIC8vIGFkZCBwYWdlIGRhdGEgdG8gaGFzaFxuICB0aGlzLnNjcm9sbFBhZ2VzLnB1c2goe1xuICAgIHRvcDogZWxlbVNjcm9sbFksXG4gICAgcGF0aDogbGluay5ocmVmLFxuICAgIHRpdGxlOiByZXNwb25zZS50aXRsZSxcbiAgfSk7XG59O1xuXG5wcm90by5nZXRFbGVtZW50U2Nyb2xsWSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICBpZiAoIHRoaXMub3B0aW9ucy5lbGVtZW50U2Nyb2xsICkge1xuICAgIHJldHVybiBlbGVtLm9mZnNldFRvcCAtIHRoaXMudG9wO1xuICB9IGVsc2Uge1xuICAgIGxldCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgfVxufTtcblxucHJvdG8ub25TY3JvbGxIaXN0b3J5ID0gZnVuY3Rpb24oKSB7XG4gIC8vIGN5Y2xlIHRocm91Z2ggcG9zaXRpb25zLCBmaW5kIGJpZ2dlc3Qgd2l0aG91dCBnb2luZyBvdmVyXG4gIGxldCBzY3JvbGxQYWdlID0gdGhpcy5nZXRDbG9zZXN0U2Nyb2xsUGFnZSgpO1xuICAvLyBzZXQgaGlzdG9yeSBpZiBjaGFuZ2VkXG4gIGlmICggc2Nyb2xsUGFnZSAhPSB0aGlzLnNjcm9sbFBhZ2UgKSB7XG4gICAgdGhpcy5zY3JvbGxQYWdlID0gc2Nyb2xsUGFnZTtcbiAgICB0aGlzLnNldEhpc3RvcnkoIHNjcm9sbFBhZ2UudGl0bGUsIHNjcm9sbFBhZ2UucGF0aCApO1xuICB9XG59O1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCggSW5maW5pdGVTY3JvbGwsICdvblNjcm9sbEhpc3RvcnknLCAxNTAgKTtcblxucHJvdG8uZ2V0Q2xvc2VzdFNjcm9sbFBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHNjcm9sbFZpZXdZO1xuICBpZiAoIHRoaXMub3B0aW9ucy5lbGVtZW50U2Nyb2xsICkge1xuICAgIHNjcm9sbFZpZXdZID0gdGhpcy5zY3JvbGxlci5zY3JvbGxUb3AgKyB0aGlzLnNjcm9sbGVyLmNsaWVudEhlaWdodCAvIDI7XG4gIH0gZWxzZSB7XG4gICAgc2Nyb2xsVmlld1kgPSB3aW5kb3cuc2Nyb2xsWSArIHRoaXMud2luZG93SGVpZ2h0IC8gMjtcbiAgfVxuXG4gIGxldCBzY3JvbGxQYWdlO1xuICBmb3IgKCBsZXQgcGFnZSBvZiB0aGlzLnNjcm9sbFBhZ2VzICkge1xuICAgIGlmICggcGFnZS50b3AgPj0gc2Nyb2xsVmlld1kgKSBicmVhaztcblxuICAgIHNjcm9sbFBhZ2UgPSBwYWdlO1xuICB9XG4gIHJldHVybiBzY3JvbGxQYWdlO1xufTtcblxucHJvdG8uc2V0SGlzdG9yeSA9IGZ1bmN0aW9uKCB0aXRsZSwgcGF0aCApIHtcbiAgbGV0IG9wdEhpc3RvcnkgPSB0aGlzLm9wdGlvbnMuaGlzdG9yeTtcbiAgbGV0IGhpc3RvcnlNZXRob2QgPSBvcHRIaXN0b3J5ICYmIGhpc3RvcnlbIG9wdEhpc3RvcnkgKyAnU3RhdGUnIF07XG4gIGlmICggIWhpc3RvcnlNZXRob2QgKSByZXR1cm47XG5cbiAgaGlzdG9yeVsgb3B0SGlzdG9yeSArICdTdGF0ZScgXSggbnVsbCwgdGl0bGUsIHBhdGggKTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMuaGlzdG9yeVRpdGxlICkgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnaGlzdG9yeScsIG51bGwsIFsgdGl0bGUsIHBhdGggXSApO1xufTtcblxuLy8gc2Nyb2xsIHRvIHRvcCB0byBwcmV2ZW50IGluaXRpYWwgc2Nyb2xsLXJlc2V0IGFmdGVyIHBhZ2UgcmVmcmVzaFxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4NjMzOTE1LzE4MjE4M1xucHJvdG8ub25VbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLnNjcm9sbFBhZ2UudG9wID09PSAwICkgcmV0dXJuO1xuXG4gIC8vIGNhbGN1bGF0ZSB3aGVyZSBzY3JvbGwgcG9zaXRpb24gd291bGQgYmUgb24gcmVmcmVzaFxuICBsZXQgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIC0gdGhpcy5zY3JvbGxQYWdlLnRvcCArIHRoaXMudG9wO1xuICAvLyBkaXNhYmxlIHNjcm9sbCBldmVudCBiZWZvcmUgc2V0dGluZyBzY3JvbGwgIzY3OVxuICB0aGlzLmRlc3Ryb3lIaXN0b3J5KCk7XG4gIHNjcm9sbFRvKCAwLCBzY3JvbGxZICk7XG59O1xuXG4vLyAtLS0tLSBsb2FkIGhpc3RvcnkgLS0tLS0gLy9cblxuLy8gdXBkYXRlIFVSTFxucHJvdG8ub25QYWdlTG9hZEhpc3RvcnkgPSBmdW5jdGlvbiggcmVzcG9uc2UsIHBhdGggKSB7XG4gIHRoaXMuc2V0SGlzdG9yeSggcmVzcG9uc2UudGl0bGUsIHBhdGggKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiLyohXG4gKiBJbmZpbml0ZSBTY3JvbGwgdjQuMC4xXG4gKiBBdXRvbWF0aWNhbGx5IGFkZCBuZXh0IHBhZ2VcbiAqXG4gKiBMaWNlbnNlZCBHUEx2MyBmb3Igb3BlbiBzb3VyY2UgdXNlXG4gKiBvciBJbmZpbml0ZSBTY3JvbGwgQ29tbWVyY2lhbCBMaWNlbnNlIGZvciBjb21tZXJjaWFsIHVzZVxuICpcbiAqIGh0dHBzOi8vaW5maW5pdGUtc2Nyb2xsLmNvbVxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBNZXRhZml6enlcbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHJlcXVpcmUoJy4vY29yZScpLFxuICAgICAgICByZXF1aXJlKCcuL3BhZ2UtbG9hZCcpLFxuICAgICAgICByZXF1aXJlKCcuL3Njcm9sbC13YXRjaCcpLFxuICAgICAgICByZXF1aXJlKCcuL2hpc3RvcnknKSxcbiAgICAgICAgcmVxdWlyZSgnLi9idXR0b24nKSxcbiAgICAgICAgcmVxdWlyZSgnLi9zdGF0dXMnKSxcbiAgICApO1xuICB9XG5cbn0gKSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBJbmZpbml0ZVNjcm9sbCApIHtcbiAgcmV0dXJuIEluZmluaXRlU2Nyb2xsO1xufSApO1xuIiwiLy8gcGFnZS1sb2FkXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkluZmluaXRlU2Nyb2xsLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEluZmluaXRlU2Nyb2xsICkge1xuXG5sZXQgcHJvdG8gPSBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGU7XG5cbk9iamVjdC5hc3NpZ24oIEluZmluaXRlU2Nyb2xsLmRlZmF1bHRzLCB7XG4gIC8vIGFwcGVuZDogZmFsc2UsXG4gIGxvYWRPblNjcm9sbDogdHJ1ZSxcbiAgY2hlY2tMYXN0UGFnZTogdHJ1ZSxcbiAgcmVzcG9uc2VCb2R5OiAndGV4dCcsXG4gIGRvbVBhcnNlUmVzcG9uc2U6IHRydWUsXG4gIC8vIHByZWZpbGw6IGZhbHNlLFxuICAvLyBvdXRsYXllcjogbnVsbCxcbn0gKTtcblxuSW5maW5pdGVTY3JvbGwuY3JlYXRlLnBhZ2VMb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY2FuTG9hZCA9IHRydWU7XG4gIHRoaXMub24oICdzY3JvbGxUaHJlc2hvbGQnLCB0aGlzLm9uU2Nyb2xsVGhyZXNob2xkTG9hZCApO1xuICB0aGlzLm9uKCAnbG9hZCcsIHRoaXMuY2hlY2tMYXN0UGFnZSApO1xuICBpZiAoIHRoaXMub3B0aW9ucy5vdXRsYXllciApIHtcbiAgICB0aGlzLm9uKCAnYXBwZW5kJywgdGhpcy5vbkFwcGVuZE91dGxheWVyICk7XG4gIH1cbn07XG5cbnByb3RvLm9uU2Nyb2xsVGhyZXNob2xkTG9hZCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMub3B0aW9ucy5sb2FkT25TY3JvbGwgKSB0aGlzLmxvYWROZXh0UGFnZSgpO1xufTtcblxubGV0IGRvbVBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblxucHJvdG8ubG9hZE5leHRQYWdlID0gZnVuY3Rpb24oKSB7XG4gIGlmICggdGhpcy5pc0xvYWRpbmcgfHwgIXRoaXMuY2FuTG9hZCApIHJldHVybjtcblxuICBsZXQgeyByZXNwb25zZUJvZHksIGRvbVBhcnNlUmVzcG9uc2UsIGZldGNoT3B0aW9ucyB9ID0gdGhpcy5vcHRpb25zO1xuICBsZXQgcGF0aCA9IHRoaXMuZ2V0QWJzb2x1dGVQYXRoKCk7XG4gIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgaWYgKCB0eXBlb2YgZmV0Y2hPcHRpb25zID09ICdmdW5jdGlvbicgKSBmZXRjaE9wdGlvbnMgPSBmZXRjaE9wdGlvbnMoKTtcblxuICBsZXQgZmV0Y2hQcm9taXNlID0gZmV0Y2goIHBhdGgsIGZldGNoT3B0aW9ucyApXG4gICAgLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XG4gICAgICBpZiAoICFyZXNwb25zZS5vayApIHtcbiAgICAgICAgbGV0IGVycm9yID0gbmV3IEVycm9yKCByZXNwb25zZS5zdGF0dXNUZXh0ICk7XG4gICAgICAgIHRoaXMub25QYWdlRXJyb3IoIGVycm9yLCBwYXRoLCByZXNwb25zZSApO1xuICAgICAgICByZXR1cm4geyByZXNwb25zZSB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzcG9uc2VbIHJlc3BvbnNlQm9keSBdKCkudGhlbiggKCBib2R5ICkgPT4ge1xuICAgICAgICBsZXQgY2FuRG9tUGFyc2UgPSByZXNwb25zZUJvZHkgPT0gJ3RleHQnICYmIGRvbVBhcnNlUmVzcG9uc2U7XG4gICAgICAgIGlmICggY2FuRG9tUGFyc2UgKSB7XG4gICAgICAgICAgYm9keSA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcoIGJvZHksICd0ZXh0L2h0bWwnICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCByZXNwb25zZS5zdGF0dXMgPT0gMjA0ICkge1xuICAgICAgICAgIHRoaXMubGFzdFBhZ2VSZWFjaGVkKCBib2R5LCBwYXRoICk7XG4gICAgICAgICAgcmV0dXJuIHsgYm9keSwgcmVzcG9uc2UgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vblBhZ2VMb2FkKCBib2R5LCBwYXRoLCByZXNwb25zZSApO1xuICAgICAgICB9XG4gICAgICB9ICk7XG4gICAgfSApXG4gICAgLmNhdGNoKCAoIGVycm9yICkgPT4ge1xuICAgICAgdGhpcy5vblBhZ2VFcnJvciggZXJyb3IsIHBhdGggKTtcbiAgICB9ICk7XG5cbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAncmVxdWVzdCcsIG51bGwsIFsgcGF0aCwgZmV0Y2hQcm9taXNlIF0gKTtcblxuICByZXR1cm4gZmV0Y2hQcm9taXNlO1xufTtcblxucHJvdG8ub25QYWdlTG9hZCA9IGZ1bmN0aW9uKCBib2R5LCBwYXRoLCByZXNwb25zZSApIHtcbiAgLy8gZG9uZSBsb2FkaW5nIGlmIG5vdCBhcHBlbmRpbmdcbiAgaWYgKCAhdGhpcy5vcHRpb25zLmFwcGVuZCApIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICB9XG4gIHRoaXMucGFnZUluZGV4Kys7XG4gIHRoaXMubG9hZENvdW50Kys7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2xvYWQnLCBudWxsLCBbIGJvZHksIHBhdGgsIHJlc3BvbnNlIF0gKTtcbiAgcmV0dXJuIHRoaXMuYXBwZW5kTmV4dFBhZ2UoIGJvZHksIHBhdGgsIHJlc3BvbnNlICk7XG59O1xuXG5wcm90by5hcHBlbmROZXh0UGFnZSA9IGZ1bmN0aW9uKCBib2R5LCBwYXRoLCByZXNwb25zZSApIHtcbiAgbGV0IHsgYXBwZW5kLCByZXNwb25zZUJvZHksIGRvbVBhcnNlUmVzcG9uc2UgfSA9IHRoaXMub3B0aW9ucztcbiAgLy8gZG8gbm90IGFwcGVuZCBqc29uXG4gIGxldCBpc0RvY3VtZW50ID0gcmVzcG9uc2VCb2R5ID09ICd0ZXh0JyAmJiBkb21QYXJzZVJlc3BvbnNlO1xuICBpZiAoICFpc0RvY3VtZW50IHx8ICFhcHBlbmQgKSByZXR1cm4geyBib2R5LCByZXNwb25zZSB9O1xuXG4gIGxldCBpdGVtcyA9IGJvZHkucXVlcnlTZWxlY3RvckFsbCggYXBwZW5kICk7XG4gIGxldCBwcm9taXNlVmFsdWUgPSB7IGJvZHksIHJlc3BvbnNlLCBpdGVtcyB9O1xuICAvLyBsYXN0IHBhZ2UgaGl0IGlmIG5vIGl0ZW1zLiAjODQwXG4gIGlmICggIWl0ZW1zIHx8ICFpdGVtcy5sZW5ndGggKSB7XG4gICAgdGhpcy5sYXN0UGFnZVJlYWNoZWQoIGJvZHksIHBhdGggKTtcbiAgICByZXR1cm4gcHJvbWlzZVZhbHVlO1xuICB9XG5cbiAgbGV0IGZyYWdtZW50ID0gZ2V0SXRlbXNGcmFnbWVudCggaXRlbXMgKTtcbiAgbGV0IGFwcGVuZFJlYWR5ID0gKCkgPT4ge1xuICAgIHRoaXMuYXBwZW5kSXRlbXMoIGl0ZW1zLCBmcmFnbWVudCApO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnYXBwZW5kJywgbnVsbCwgWyBib2R5LCBwYXRoLCBpdGVtcywgcmVzcG9uc2UgXSApO1xuICAgIHJldHVybiBwcm9taXNlVmFsdWU7XG4gIH07XG5cbiAgLy8gVE9ETyBhZGQgaG9vayBmb3Igb3B0aW9uIHRvIHRyaWdnZXIgYXBwZW5kUmVhZHlcbiAgaWYgKCB0aGlzLm9wdGlvbnMub3V0bGF5ZXIgKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwZW5kT3V0bGF5ZXJJdGVtcyggZnJhZ21lbnQsIGFwcGVuZFJlYWR5ICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFwcGVuZFJlYWR5KCk7XG4gIH1cbn07XG5cbnByb3RvLmFwcGVuZEl0ZW1zID0gZnVuY3Rpb24oIGl0ZW1zLCBmcmFnbWVudCApIHtcbiAgaWYgKCAhaXRlbXMgfHwgIWl0ZW1zLmxlbmd0aCApIHJldHVybjtcblxuICAvLyBnZXQgZnJhZ21lbnQgaWYgbm90IHByb3ZpZGVkXG4gIGZyYWdtZW50ID0gZnJhZ21lbnQgfHwgZ2V0SXRlbXNGcmFnbWVudCggaXRlbXMgKTtcbiAgcmVmcmVzaFNjcmlwdHMoIGZyYWdtZW50ICk7XG4gIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCggZnJhZ21lbnQgKTtcbn07XG5cbmZ1bmN0aW9uIGdldEl0ZW1zRnJhZ21lbnQoIGl0ZW1zICkge1xuICAvLyBhZGQgaXRlbXMgdG8gZnJhZ21lbnRcbiAgbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBpZiAoIGl0ZW1zICkgZnJhZ21lbnQuYXBwZW5kKCAuLi5pdGVtcyApO1xuICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbi8vIHJlcGxhY2UgPHNjcmlwdD5zIHdpdGggY29waWVzIHNvIHRoZXkgbG9hZFxuLy8gPHNjcmlwdD5zIGFkZGVkIGJ5IEluZmluaXRlU2Nyb2xsIHdpbGwgbm90IGxvYWRcbi8vIHNpbWlsYXIgdG8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjEwOTk1XG5mdW5jdGlvbiByZWZyZXNoU2NyaXB0cyggZnJhZ21lbnQgKSB7XG4gIGxldCBzY3JpcHRzID0gZnJhZ21lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0Jyk7XG4gIGZvciAoIGxldCBzY3JpcHQgb2Ygc2NyaXB0cyApIHtcbiAgICBsZXQgZnJlc2hTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAvLyBjb3B5IGF0dHJpYnV0ZXNcbiAgICBsZXQgYXR0cnMgPSBzY3JpcHQuYXR0cmlidXRlcztcbiAgICBmb3IgKCBsZXQgYXR0ciBvZiBhdHRycyApIHtcbiAgICAgIGZyZXNoU2NyaXB0LnNldEF0dHJpYnV0ZSggYXR0ci5uYW1lLCBhdHRyLnZhbHVlICk7XG4gICAgfVxuICAgIC8vIGNvcHkgaW5uZXIgc2NyaXB0IGNvZGUuICM3MTgsICM3ODJcbiAgICBmcmVzaFNjcmlwdC5pbm5lckhUTUwgPSBzY3JpcHQuaW5uZXJIVE1MO1xuICAgIHNjcmlwdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCggZnJlc2hTY3JpcHQsIHNjcmlwdCApO1xuICB9XG59XG5cbi8vIC0tLS0tIG91dGxheWVyIC0tLS0tIC8vXG5cbnByb3RvLmFwcGVuZE91dGxheWVySXRlbXMgPSBmdW5jdGlvbiggZnJhZ21lbnQsIGFwcGVuZFJlYWR5ICkge1xuICBsZXQgaW1hZ2VzTG9hZGVkID0gSW5maW5pdGVTY3JvbGwuaW1hZ2VzTG9hZGVkIHx8IHdpbmRvdy5pbWFnZXNMb2FkZWQ7XG4gIGlmICggIWltYWdlc0xvYWRlZCApIHtcbiAgICBjb25zb2xlLmVycm9yKCdbSW5maW5pdGVTY3JvbGxdIGltYWdlc0xvYWRlZCByZXF1aXJlZCBmb3Igb3V0bGF5ZXIgb3B0aW9uJyk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYXBwZW5kIG9uY2UgaW1hZ2VzIGxvYWRlZFxuICByZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uKCByZXNvbHZlICkge1xuICAgIGltYWdlc0xvYWRlZCggZnJhZ21lbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IGJvZHlSZXNwb25zZSA9IGFwcGVuZFJlYWR5KCk7XG4gICAgICByZXNvbHZlKCBib2R5UmVzcG9uc2UgKTtcbiAgICB9ICk7XG4gIH0gKTtcbn07XG5cbnByb3RvLm9uQXBwZW5kT3V0bGF5ZXIgPSBmdW5jdGlvbiggcmVzcG9uc2UsIHBhdGgsIGl0ZW1zICkge1xuICB0aGlzLm9wdGlvbnMub3V0bGF5ZXIuYXBwZW5kZWQoIGl0ZW1zICk7XG59O1xuXG4vLyAtLS0tLSBjaGVja0xhc3RQYWdlIC0tLS0tIC8vXG5cbi8vIGNoZWNrIHJlc3BvbnNlIGZvciBuZXh0IGVsZW1lbnRcbnByb3RvLmNoZWNrTGFzdFBhZ2UgPSBmdW5jdGlvbiggYm9keSwgcGF0aCApIHtcbiAgbGV0IHsgY2hlY2tMYXN0UGFnZSwgcGF0aDogcGF0aE9wdCB9ID0gdGhpcy5vcHRpb25zO1xuICBpZiAoICFjaGVja0xhc3RQYWdlICkgcmV0dXJuO1xuXG4gIC8vIGlmIHBhdGggaXMgZnVuY3Rpb24sIGNoZWNrIGlmIG5leHQgcGF0aCBpcyB0cnV0aHlcbiAgaWYgKCB0eXBlb2YgcGF0aE9wdCA9PSAnZnVuY3Rpb24nICkge1xuICAgIGxldCBuZXh0UGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgIGlmICggIW5leHRQYXRoICkge1xuICAgICAgdGhpcy5sYXN0UGFnZVJlYWNoZWQoIGJvZHksIHBhdGggKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgLy8gZ2V0IHNlbGVjdG9yIGZyb20gY2hlY2tMYXN0UGFnZSBvciBwYXRoIG9wdGlvblxuICBsZXQgc2VsZWN0b3I7XG4gIGlmICggdHlwZW9mIGNoZWNrTGFzdFBhZ2UgPT0gJ3N0cmluZycgKSB7XG4gICAgc2VsZWN0b3IgPSBjaGVja0xhc3RQYWdlO1xuICB9IGVsc2UgaWYgKCB0aGlzLmlzUGF0aFNlbGVjdG9yICkge1xuICAgIC8vIHBhdGggb3B0aW9uIGlzIHNlbGVjdG9yIHN0cmluZ1xuICAgIHNlbGVjdG9yID0gcGF0aE9wdDtcbiAgfVxuICAvLyBjaGVjayBsYXN0IHBhZ2UgZm9yIHNlbGVjdG9yXG4gIC8vIGJhaWwgaWYgbm8gc2VsZWN0b3Igb3Igbm90IGRvY3VtZW50IHJlc3BvbnNlXG4gIGlmICggIXNlbGVjdG9yIHx8ICFib2R5LnF1ZXJ5U2VsZWN0b3IgKSByZXR1cm47XG5cbiAgLy8gY2hlY2sgaWYgcmVzcG9uc2UgaGFzIHNlbGVjdG9yXG4gIGxldCBuZXh0RWxlbSA9IGJvZHkucXVlcnlTZWxlY3Rvciggc2VsZWN0b3IgKTtcbiAgaWYgKCAhbmV4dEVsZW0gKSB0aGlzLmxhc3RQYWdlUmVhY2hlZCggYm9keSwgcGF0aCApO1xufTtcblxucHJvdG8ubGFzdFBhZ2VSZWFjaGVkID0gZnVuY3Rpb24oIGJvZHksIHBhdGggKSB7XG4gIHRoaXMuY2FuTG9hZCA9IGZhbHNlO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdsYXN0JywgbnVsbCwgWyBib2R5LCBwYXRoIF0gKTtcbn07XG5cbi8vIC0tLS0tIGVycm9yIC0tLS0tIC8vXG5cbnByb3RvLm9uUGFnZUVycm9yID0gZnVuY3Rpb24oIGVycm9yLCBwYXRoLCByZXNwb25zZSApIHtcbiAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgdGhpcy5jYW5Mb2FkID0gZmFsc2U7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2Vycm9yJywgbnVsbCwgWyBlcnJvciwgcGF0aCwgcmVzcG9uc2UgXSApO1xuICByZXR1cm4gZXJyb3I7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwcmVmaWxsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbkluZmluaXRlU2Nyb2xsLmNyZWF0ZS5wcmVmaWxsID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5wcmVmaWxsICkgcmV0dXJuO1xuXG4gIGxldCBhcHBlbmQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kO1xuICBpZiAoICFhcHBlbmQgKSB7XG4gICAgY29uc29sZS5lcnJvcihgYXBwZW5kIG9wdGlvbiByZXF1aXJlZCBmb3IgcHJlZmlsbC4gU2V0IGFzIDoke2FwcGVuZH1gKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy51cGRhdGVNZWFzdXJlbWVudHMoKTtcbiAgdGhpcy51cGRhdGVTY3JvbGxlcigpO1xuICB0aGlzLmlzUHJlZmlsbGluZyA9IHRydWU7XG4gIHRoaXMub24oICdhcHBlbmQnLCB0aGlzLnByZWZpbGwgKTtcbiAgdGhpcy5vbmNlKCAnZXJyb3InLCB0aGlzLnN0b3BQcmVmaWxsICk7XG4gIHRoaXMub25jZSggJ2xhc3QnLCB0aGlzLnN0b3BQcmVmaWxsICk7XG4gIHRoaXMucHJlZmlsbCgpO1xufTtcblxucHJvdG8ucHJlZmlsbCA9IGZ1bmN0aW9uKCkge1xuICBsZXQgZGlzdGFuY2UgPSB0aGlzLmdldFByZWZpbGxEaXN0YW5jZSgpO1xuICB0aGlzLmlzUHJlZmlsbGluZyA9IGRpc3RhbmNlID49IDA7XG4gIGlmICggdGhpcy5pc1ByZWZpbGxpbmcgKSB7XG4gICAgdGhpcy5sb2coJ3ByZWZpbGwnKTtcbiAgICB0aGlzLmxvYWROZXh0UGFnZSgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc3RvcFByZWZpbGwoKTtcbiAgfVxufTtcblxucHJvdG8uZ2V0UHJlZmlsbERpc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGVsZW1lbnQgc2Nyb2xsXG4gIGlmICggdGhpcy5vcHRpb25zLmVsZW1lbnRTY3JvbGwgKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsZXIuY2xpZW50SGVpZ2h0IC0gdGhpcy5zY3JvbGxlci5zY3JvbGxIZWlnaHQ7XG4gIH1cbiAgLy8gd2luZG93XG4gIHJldHVybiB0aGlzLndpbmRvd0hlaWdodCAtIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQ7XG59O1xuXG5wcm90by5zdG9wUHJlZmlsbCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmxvZygnc3RvcFByZWZpbGwnKTtcbiAgdGhpcy5vZmYoICdhcHBlbmQnLCB0aGlzLnByZWZpbGwgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiLy8gc2Nyb2xsLXdhdGNoXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkluZmluaXRlU2Nyb2xsLFxuICAgICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEluZmluaXRlU2Nyb2xsLCB1dGlscyApIHtcblxubGV0IHByb3RvID0gSW5maW5pdGVTY3JvbGwucHJvdG90eXBlO1xuXG4vLyBkZWZhdWx0IG9wdGlvbnNcbk9iamVjdC5hc3NpZ24oIEluZmluaXRlU2Nyb2xsLmRlZmF1bHRzLCB7XG4gIHNjcm9sbFRocmVzaG9sZDogNDAwLFxuICAvLyBlbGVtZW50U2Nyb2xsOiBudWxsLFxufSApO1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUuc2Nyb2xsV2F0Y2ggPSBmdW5jdGlvbigpIHtcbiAgLy8gZXZlbnRzXG4gIHRoaXMucGFnZVNjcm9sbEhhbmRsZXIgPSB0aGlzLm9uUGFnZVNjcm9sbC5iaW5kKCB0aGlzICk7XG4gIHRoaXMucmVzaXplSGFuZGxlciA9IHRoaXMub25SZXNpemUuYmluZCggdGhpcyApO1xuXG4gIGxldCBzY3JvbGxUaHJlc2hvbGQgPSB0aGlzLm9wdGlvbnMuc2Nyb2xsVGhyZXNob2xkO1xuICBsZXQgaXNFbmFibGUgPSBzY3JvbGxUaHJlc2hvbGQgfHwgc2Nyb2xsVGhyZXNob2xkID09PSAwO1xuICBpZiAoIGlzRW5hYmxlICkgdGhpcy5lbmFibGVTY3JvbGxXYXRjaCgpO1xufTtcblxuSW5maW5pdGVTY3JvbGwuZGVzdHJveS5zY3JvbGxXYXRjaCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRpc2FibGVTY3JvbGxXYXRjaCgpO1xufTtcblxucHJvdG8uZW5hYmxlU2Nyb2xsV2F0Y2ggPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmlzU2Nyb2xsV2F0Y2hpbmcgKSByZXR1cm47XG5cbiAgdGhpcy5pc1Njcm9sbFdhdGNoaW5nID0gdHJ1ZTtcbiAgdGhpcy51cGRhdGVNZWFzdXJlbWVudHMoKTtcbiAgdGhpcy51cGRhdGVTY3JvbGxlcigpO1xuICAvLyBUT0RPIGRpc2FibGUgYWZ0ZXIgZXJyb3I/XG4gIHRoaXMub24oICdsYXN0JywgdGhpcy5kaXNhYmxlU2Nyb2xsV2F0Y2ggKTtcbiAgdGhpcy5iaW5kU2Nyb2xsV2F0Y2hFdmVudHMoIHRydWUgKTtcbn07XG5cbnByb3RvLmRpc2FibGVTY3JvbGxXYXRjaCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLmlzU2Nyb2xsV2F0Y2hpbmcgKSByZXR1cm47XG5cbiAgdGhpcy5iaW5kU2Nyb2xsV2F0Y2hFdmVudHMoIGZhbHNlICk7XG4gIGRlbGV0ZSB0aGlzLmlzU2Nyb2xsV2F0Y2hpbmc7XG59O1xuXG5wcm90by5iaW5kU2Nyb2xsV2F0Y2hFdmVudHMgPSBmdW5jdGlvbiggaXNCaW5kICkge1xuICBsZXQgYWRkUmVtb3ZlID0gaXNCaW5kID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuICB0aGlzLnNjcm9sbGVyWyBhZGRSZW1vdmUgXSggJ3Njcm9sbCcsIHRoaXMucGFnZVNjcm9sbEhhbmRsZXIgKTtcbiAgd2luZG93WyBhZGRSZW1vdmUgXSggJ3Jlc2l6ZScsIHRoaXMucmVzaXplSGFuZGxlciApO1xufTtcblxucHJvdG8ub25QYWdlU2Nyb2xsID0gSW5maW5pdGVTY3JvbGwudGhyb3R0bGUoIGZ1bmN0aW9uKCkge1xuICBsZXQgZGlzdGFuY2UgPSB0aGlzLmdldEJvdHRvbURpc3RhbmNlKCk7XG4gIGlmICggZGlzdGFuY2UgPD0gdGhpcy5vcHRpb25zLnNjcm9sbFRocmVzaG9sZCApIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3Njcm9sbFRocmVzaG9sZCcpO1xuICB9XG59ICk7XG5cbnByb3RvLmdldEJvdHRvbURpc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gIGxldCBib3R0b20sIHNjcm9sbFk7XG4gIGlmICggdGhpcy5vcHRpb25zLmVsZW1lbnRTY3JvbGwgKSB7XG4gICAgYm90dG9tID0gdGhpcy5zY3JvbGxlci5zY3JvbGxIZWlnaHQ7XG4gICAgc2Nyb2xsWSA9IHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG9wICsgdGhpcy5zY3JvbGxlci5jbGllbnRIZWlnaHQ7XG4gIH0gZWxzZSB7XG4gICAgYm90dG9tID0gdGhpcy50b3AgKyB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSArIHRoaXMud2luZG93SGVpZ2h0O1xuICB9XG4gIHJldHVybiBib3R0b20gLSBzY3JvbGxZO1xufTtcblxucHJvdG8ub25SZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy51cGRhdGVNZWFzdXJlbWVudHMoKTtcbn07XG5cbnV0aWxzLmRlYm91bmNlTWV0aG9kKCBJbmZpbml0ZVNjcm9sbCwgJ29uUmVzaXplJywgMTUwICk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiLy8gc3RhdHVzXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgcmVxdWlyZSgnLi9jb3JlJyksXG4gICAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICAgIHdpbmRvdyxcbiAgICAgICAgd2luZG93LkluZmluaXRlU2Nyb2xsLFxuICAgICAgICB3aW5kb3cuZml6enlVSVV0aWxzLFxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEluZmluaXRlU2Nyb2xsLCB1dGlscyApIHtcblxubGV0IHByb3RvID0gSW5maW5pdGVTY3JvbGwucHJvdG90eXBlO1xuXG4vLyBJbmZpbml0ZVNjcm9sbC5kZWZhdWx0cy5zdGF0dXMgPSBudWxsO1xuXG5JbmZpbml0ZVNjcm9sbC5jcmVhdGUuc3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gIGxldCBzdGF0dXNFbGVtID0gdXRpbHMuZ2V0UXVlcnlFbGVtZW50KCB0aGlzLm9wdGlvbnMuc3RhdHVzICk7XG4gIGlmICggIXN0YXR1c0VsZW0gKSByZXR1cm47XG5cbiAgLy8gZWxlbWVudHNcbiAgdGhpcy5zdGF0dXNFbGVtZW50ID0gc3RhdHVzRWxlbTtcbiAgdGhpcy5zdGF0dXNFdmVudEVsZW1lbnRzID0ge1xuICAgIHJlcXVlc3Q6IHN0YXR1c0VsZW0ucXVlcnlTZWxlY3RvcignLmluZmluaXRlLXNjcm9sbC1yZXF1ZXN0JyksXG4gICAgZXJyb3I6IHN0YXR1c0VsZW0ucXVlcnlTZWxlY3RvcignLmluZmluaXRlLXNjcm9sbC1lcnJvcicpLFxuICAgIGxhc3Q6IHN0YXR1c0VsZW0ucXVlcnlTZWxlY3RvcignLmluZmluaXRlLXNjcm9sbC1sYXN0JyksXG4gIH07XG4gIC8vIGV2ZW50c1xuICB0aGlzLm9uKCAncmVxdWVzdCcsIHRoaXMuc2hvd1JlcXVlc3RTdGF0dXMgKTtcbiAgdGhpcy5vbiggJ2Vycm9yJywgdGhpcy5zaG93RXJyb3JTdGF0dXMgKTtcbiAgdGhpcy5vbiggJ2xhc3QnLCB0aGlzLnNob3dMYXN0U3RhdHVzICk7XG4gIHRoaXMuYmluZEhpZGVTdGF0dXMoJ29uJyk7XG59O1xuXG5wcm90by5iaW5kSGlkZVN0YXR1cyA9IGZ1bmN0aW9uKCBiaW5kTWV0aG9kICkge1xuICBsZXQgaGlkZUV2ZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZCA/ICdhcHBlbmQnIDogJ2xvYWQnO1xuICB0aGlzWyBiaW5kTWV0aG9kIF0oIGhpZGVFdmVudCwgdGhpcy5oaWRlQWxsU3RhdHVzICk7XG59O1xuXG5wcm90by5zaG93UmVxdWVzdFN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNob3dTdGF0dXMoJ3JlcXVlc3QnKTtcbn07XG5cbnByb3RvLnNob3dFcnJvclN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNob3dTdGF0dXMoJ2Vycm9yJyk7XG59O1xuXG5wcm90by5zaG93TGFzdFN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNob3dTdGF0dXMoJ2xhc3QnKTtcbiAgLy8gcHJldmVudCBsYXN0IHRoZW4gYXBwZW5kIGV2ZW50IHJhY2UgY29uZGl0aW9uIGZyb20gc2hvd2luZyBsYXN0IHN0YXR1cyAjNzA2XG4gIHRoaXMuYmluZEhpZGVTdGF0dXMoJ29mZicpO1xufTtcblxucHJvdG8uc2hvd1N0YXR1cyA9IGZ1bmN0aW9uKCBldmVudE5hbWUgKSB7XG4gIHNob3coIHRoaXMuc3RhdHVzRWxlbWVudCApO1xuICB0aGlzLmhpZGVTdGF0dXNFdmVudEVsZW1lbnRzKCk7XG4gIGxldCBldmVudEVsZW0gPSB0aGlzLnN0YXR1c0V2ZW50RWxlbWVudHNbIGV2ZW50TmFtZSBdO1xuICBzaG93KCBldmVudEVsZW0gKTtcbn07XG5cbnByb3RvLmhpZGVBbGxTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgaGlkZSggdGhpcy5zdGF0dXNFbGVtZW50ICk7XG4gIHRoaXMuaGlkZVN0YXR1c0V2ZW50RWxlbWVudHMoKTtcbn07XG5cbnByb3RvLmhpZGVTdGF0dXNFdmVudEVsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gIGZvciAoIGxldCB0eXBlIGluIHRoaXMuc3RhdHVzRXZlbnRFbGVtZW50cyApIHtcbiAgICBsZXQgZXZlbnRFbGVtID0gdGhpcy5zdGF0dXNFdmVudEVsZW1lbnRzWyB0eXBlIF07XG4gICAgaGlkZSggZXZlbnRFbGVtICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBoaWRlKCBlbGVtICkge1xuICBzZXREaXNwbGF5KCBlbGVtLCAnbm9uZScgKTtcbn1cblxuZnVuY3Rpb24gc2hvdyggZWxlbSApIHtcbiAgc2V0RGlzcGxheSggZWxlbSwgJ2Jsb2NrJyApO1xufVxuXG5mdW5jdGlvbiBzZXREaXNwbGF5KCBlbGVtLCB2YWx1ZSApIHtcbiAgaWYgKCBlbGVtICkge1xuICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9IHZhbHVlO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5yZXR1cm4gSW5maW5pdGVTY3JvbGw7XG5cbn0gKSApO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZXNwb25zaXZlQXV0b0hlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVzcG9uc2l2ZUF1dG9IZWlnaHQoc2VsZWN0b3IsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc3BvbnNpdmVBdXRvSGVpZ2h0KTtcblxuICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICB0aGlzLmVsZW1lbnRzID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucnVuKCk7XG4gICAgfSk7XG4gICAgdGhpcy5ydW4oKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZXNwb25zaXZlQXV0b0hlaWdodCwgW3tcbiAgICBrZXk6ICdyZWNhbGMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWNhbGMoKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9yKTtcbiAgICAgIHRoaXMucnVuKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbWFrZUdyb3VwcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1ha2VHcm91cHMoZWxlbWVudHMpIHtcbiAgICAgIHZhciBncm91cCA9IFtdO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxcHgnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICB9KTtcbiAgICAgIHZhciBpZHggPSAwO1xuICAgICAgdmFyIGhlaWdodCA9ICgwLCBfdXRpbC5nZXRPZmZzZXQpKGVsZW1lbnRzWzBdKS50b3A7XG4gICAgICBncm91cFswXSA9IFtdO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoKDAsIF91dGlsLmdldE9mZnNldCkoZWxlbWVudCkudG9wICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICBoZWlnaHQgPSAoMCwgX3V0aWwuZ2V0T2Zmc2V0KShlbGVtZW50KS50b3A7XG4gICAgICAgICAgaWR4ICs9IDE7XG4gICAgICAgICAgZ3JvdXBbaWR4XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGdyb3VwW2lkeF0ucHVzaChlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBncm91cDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhdXRvSGVpZ2h0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXV0b0hlaWdodChncm91cCkge1xuICAgICAgdmFyIGhlaWdodHMgPSBncm91cC5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgICAgICB2YXIgYm94U2l6aW5nID0gY29tcHV0ZWRTdHlsZS5ib3hTaXppbmc7XG4gICAgICAgIGlmIChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRIZWlnaHQgLSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUucGFkZGluZ1RvcCkgLSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1heC5hcHBseShNYXRoLCBfdG9Db25zdW1hYmxlQXJyYXkoaGVpZ2h0cykpO1xuICAgICAgZ3JvdXAuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IG1heEhlaWdodCArICdweCc7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdydW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBydW4oKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cztcblxuICAgICAgdmFyIGdyb3VwcyA9IHRoaXMubWFrZUdyb3VwcyhlbGVtZW50cyk7XG4gICAgICBncm91cHMuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgICAgX3RoaXMyLmF1dG9IZWlnaHQoZ3JvdXApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlc3BvbnNpdmVBdXRvSGVpZ2h0O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZXNwb25zaXZlQXV0b0hlaWdodDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGdldFNjcm9sbFRvcCA9IGZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDA7XG59O1xuXG52YXIgZ2V0U2Nyb2xsTGVmdCA9IGZ1bmN0aW9uIGdldFNjcm9sbExlZnQoKSB7XG4gIHJldHVybiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IDA7XG59O1xuXG52YXIgZ2V0T2Zmc2V0ID0gZXhwb3J0cy5nZXRPZmZzZXQgPSBmdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IHJlY3QudG9wICsgZ2V0U2Nyb2xsVG9wKCksXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgZ2V0U2Nyb2xsTGVmdCgpXG4gIH07XG59OyJdfQ==
