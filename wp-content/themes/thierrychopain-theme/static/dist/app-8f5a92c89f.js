! function() {
    function t(e, i, n) {
        function r(o, a) { if (!i[o]) { if (!e[o]) { var l = "function" == typeof require && require; if (!a && l) return l(o, !0); if (s) return s(o, !0); var u = new Error("Cannot find module '" + o + "'"); throw u.code = "MODULE_NOT_FOUND", u } var c = i[o] = { exports: {} };
                e[o][0].call(c.exports, function(t) { return r(e[o][1][t] || t) }, c, c.exports, t, e, i, n) } return i[o].exports } for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) r(n[o]); return r } return t }()({
    1: [function(t, e, i) { "use strict";

        function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(i, "__esModule", { value: !0 }); var r = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            s = function() {
                function t(e, i, r) { n(this, t), this.blockType = e, this.page = i, this.cont = r, this.init(), this.initEvents() } return r(t, [{ key: "init", value: function() {} }, { key: "destroy", value: function() { this.destroyEvents() } }, { key: "initEvents", value: function() {} }, { key: "destroyEvents", value: function() {} }]), t }();
        i.default = s }, {}],
    2: [function(t, e, i) { "use strict";

        function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(i, "__esModule", { value: !0 }); var r = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            s = t("./../factories/class-factory"),
            o = function(t) { return t && t.__esModule ? t : { default: t } }(s),
            a = t("./../utils/throttle"),
            l = function() {
                function t(e, i) { n(this, t), this.pageType = i, this.classFactory = new o.default, this.cont = e, this.blocks = [], this.blocksObj = [], this.onResize = this.onResize.bind(this), this.onResizeDebounce = (0, a.throttle)(this.onResize, 100, !1), this.createBlocks(), this.init() } return r(t, [{ key: "init", value: function() {} }, { key: "destroy", value: function() { if (this.destroyEvents(), null !== this.blocks)
                            for (var t = 0; t < this.blockLength; t++) this.blocksObj[t].destroy() } }, { key: "initEvents", value: function() { window.addEventListener("resize", this.onResizeDebounce) } }, { key: "destroyEvents", value: function() { window.removeEventListener("resize", this.onResizeDebounce) } }, { key: "onResize", value: function() {} }, { key: "createBlocks", value: function() { var t = this.cont.querySelectorAll(".js-block");
                        this.blockLength = t.length; for (var e = 0; e < this.blockLength; e++) this.blocks.push(t[e]), this.initSingleBlock(t[e]) } }, { key: "initSingleBlock", value: function(t) { var e = t.getAttribute("data-block"),
                            i = this.classFactory.getBlockInstance(e, this, t);
                        this.blocksObj.push(i) } }]), t }();
        i.default = l }, { "./../factories/class-factory": 8, "./../utils/throttle": 13 }],
    3: [function(t, e, i) { "use strict";

        function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function r(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function s(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(i, "__esModule", { value: !0 }); var o = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            a = function t(e, i, n) { null === e && (e = Function.prototype); var r = Object.getOwnPropertyDescriptor(e, i); if (void 0 === r) { var s = Object.getPrototypeOf(e); return null === s ? void 0 : t(s, i, n) } if ("value" in r) return r.value; var o = r.get; if (void 0 !== o) return o.call(n) },
            l = t("./../_abstract/abstract-block"),
            u = function(t) { return t && t.__esModule ? t : { default: t } }(l),
            c = function(t) {
                function e() { return n(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) } return s(e, t), o(e, [{ key: "init", value: function() { a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this) } }, { key: "initEvents", value: function() { a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "initEvents", this).call(this) } }, { key: "destroyEvents", value: function() { a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroyEvents", this).call(this) } }]), e }(u.default);
        i.default = c }, { "./../_abstract/abstract-block": 1 }],
    4: [function(t, e, i) { "use strict";

        function n(t) { if (Array.isArray(t)) { for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e]; return i } return Array.from(t) }

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function s(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(i, "__esModule", { value: !0 }); var a = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            l = function t(e, i, n) { null === e && (e = Function.prototype); var r = Object.getOwnPropertyDescriptor(e, i); if (void 0 === r) { var s = Object.getPrototypeOf(e); return null === s ? void 0 : t(s, i, n) } if ("value" in r) return r.value; var o = r.get; if (void 0 !== o) return o.call(n) },
            u = t("./_default-block"),
            c = function(t) { return t && t.__esModule ? t : { default: t } }(u),
            h = (t("gsap"), t("./../utils/globals")),
            f = (function(t) { if (t && t.__esModule) return t; var e = {}; if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                e.default = t }(h), function(t) {
                function e() { return r(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) } return o(e, t), a(e, [{ key: "init", value: function() { l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this), this.links = [].concat(n(this.cont.querySelectorAll(".project__caption-link"))) } }, { key: "initEvents", value: function() { var t = this;
                        l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "initEvents", this).call(this), this.links.forEach(function(e) { e.addEventListener("mouseenter", t.onMouseEnter.bind(t)), e.addEventListener("mouseleave", t.onMouseLeave.bind(t)) }) } }, { key: "onMouseEnter", value: function(t) { var e = t.currentTarget;
                        this.links.forEach(function(t) { e !== t && t.setAttribute("data-hover", !0) }) } }, { key: "onMouseLeave", value: function() { this.links.forEach(function(t) { t.setAttribute("data-hover", !1) }) } }]), e }(c.default));
        i.default = f }, { "./../utils/globals": 12, "./_default-block": 3, gsap: 15 }],
    5: [function(t, e, i) { "use strict";

        function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function r(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function s(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(i, "__esModule", { value: !0 }); var o = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            a = function t(e, i, n) { null === e && (e = Function.prototype); var r = Object.getOwnPropertyDescriptor(e, i); if (void 0 === r) { var s = Object.getPrototypeOf(e); return null === s ? void 0 : t(s, i, n) } if ("value" in r) return r.value; var o = r.get; if (void 0 !== o) return o.call(n) },
            l = t("./_default-block"),
            u = function(t) { return t && t.__esModule ? t : { default: t } }(l),
            c = (t("gsap"), t("./../utils/globals")),
            h = (function(t) { if (t && t.__esModule) return t; var e = {}; if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                e.default = t }(c), function(t) {
                function e() { return n(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) } return s(e, t), o(e, [{ key: "init", value: function() { a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this), this.cont.setAttribute("data-visible", !0) } }, { key: "initEvents", value: function() { a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "initEvents", this).call(this) } }]), e }(u.default));
        i.default = h }, { "./../utils/globals": 12, "./_default-block": 3, gsap: 15 }],
    6: [function(t, e, i) { "use strict";

        function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(i, "__esModule", { value: !0 }); var r = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            s = t("./_default-block"),
            o = (function(t) { t && t.__esModule }(s), function() {
                function t(e) { n(this, t), this.cont = e } return r(t, [{ key: "init", value: function() { this.isVisible = !1, this.defaultState = "intro" } }, { key: "toggleVisible", value: function() { this.cont.setAttribute("data-visible", !this.isVisible) } }, { key: "toggleTheme", value: function(t) { this.cont.setAttribute("data-theme", t) } }, { key: "toggleState", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        this.cont.setAttribute("data-state", t || this.defaultState) } }, { key: "toggleActive", value: function(t) { var e = this.cont.querySelector('[data-target="#' + t + '"]'); "true" === e.getAttribute("data-active") ? e.setAttribute("data-active", !1) : e.setAttribute("data-active", !0) } }]), t }());
        i.default = o }, { "./_default-block": 3 }],
    7: [function(t, e, i) { "use strict";

        function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(i, "__esModule", { value: !0 }); var r = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            s = t("./_default-block"),
            o = (function(t) { t && t.__esModule }(s), function() {
                function t(e) { n(this, t), this.cont = e } return r(t, [{ key: "init", value: function() { this.isVisible = !1 } }, { key: "toggleVisible", value: function() { this.cont.setAttribute("data-visible", !this.isVisible) } }, { key: "toggleTheme", value: function(t) { this.cont.setAttribute("data-theme", t) } }, { key: "toggleState", value: function(t) { this.cont.setAttribute("data-state", t) } }]), t }());
        i.default = o }, { "./_default-block": 3 }],
    8: [function(t, e, i) { "use strict";

        function n(t) { return t && t.__esModule ? t : { default: t } }

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(i, "__esModule", { value: !0 }); var s = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            o = t("./../pages/_default-page"),
            a = n(o),
            l = t("./../blocks/_default-block"),
            u = n(l),
            c = t("./../blocks/intro"),
            h = n(c),
            f = t("./../blocks/hover-block"),
            d = n(f),
            p = function() {
                function t() { r(this, t) } return s(t, [{ key: "getPageInstance", value: function(t, e) { return new a.default(t, e) } }, { key: "getBlockInstance", value: function(t, e, i) { switch (t) {
                            case "intro":
                                return new h.default(t, e, i);
                            case "hover-block":
                                return new d.default(t, e, i);
                            default:
                                return new u.default(t, e, i) } } }]), t }();
        i.default = p }, { "./../blocks/_default-block": 3, "./../blocks/hover-block": 4, "./../blocks/intro": 5, "./../pages/_default-page": 10 }],
    9: [function(t, e, i) { "use strict";

        function n(t) { return t && t.__esModule ? t : { default: t } }

        function r() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            null === t && (t = document.getElementsByClassName("js-ajax-container")[0]); var e = t.getAttribute("data-namespace");
            v.getPageInstance(t, e) }
        Object.defineProperty(i, "__esModule", { value: !0 }), i.ScrollNavBlock = i.NavBlock = void 0, i.buildPage = r; var s = t("./utils/globals"),
            o = function(t) { if (t && t.__esModule) return t; var e = {}; if (null != t)
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e.default = t, e }(s),
            a = t("./factories/class-factory"),
            l = n(a),
            u = t("./blocks/nav"),
            c = n(u),
            h = t("./blocks/scroll-nav"),
            f = n(h); "scrollRestoration" in history && (history.scrollRestoration = "manual"); var d = o.doc.querySelector(".nav");
        (i.NavBlock = new c.default(d)).init(); var p = o.doc.querySelector(".scroll-nav");
        (i.ScrollNavBlock = new f.default(p)).init(); var v = new l.default,
            g = document.getElementById("js-ajax-wrapper");
        g.getAttribute("data-namespace");
        document.addEventListener("DOMContentLoaded", function() { r() }, !1), console.log("%c  Dev by Thomas Aufresne — https://thomasaufresne.com  ", "background-color: #090924; color: #f9d63d; font-size:10px; padding:8px 10px 6px; border-radius:4px;") }, { "./blocks/nav": 6, "./blocks/scroll-nav": 7, "./factories/class-factory": 8, "./utils/globals": 12 }],
    10: [function(t, e, i) { "use strict";

        function n(t) { if (t && t.__esModule) return t; var e = {}; if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e.default = t, e }

        function r(t) { return t && t.__esModule ? t : { default: t } }

        function s(t) { if (Array.isArray(t)) { for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e]; return i } return Array.from(t) }

        function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function a(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function l(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(i, "__esModule", { value: !0 }); var u = function() {
                function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function(e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(),
            c = function t(e, i, n) { null === e && (e = Function.prototype); var r = Object.getOwnPropertyDescriptor(e, i); if (void 0 === r) { var s = Object.getPrototypeOf(e); return null === s ? void 0 : t(s, i, n) } if ("value" in r) return r.value; var o = r.get; if (void 0 !== o) return o.call(n) },
            h = t("./../_abstract/abstract-page"),
            f = r(h),
            d = t("./../utils/globals"),
            p = n(d),
            v = t("locomotive-scroll"),
            g = r(v),
            y = t("./../utils/utils"),
            _ = n(y),
            m = t("./../utils/debounce"),
            b = t("./../main"),
            w = t("gsap"),
            k = function(t) {
                function e() { return o(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) } return l(e, t), u(e, [{ key: "init", value: function() { var t = this;
                        c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "init", this).call(this), this.intro = this.cont.querySelector(".intro"), this.introBg = this.intro.getAttribute("data-bg"), w.gsap.to(p.body, { duration: .8, backgroundColor: this.introBg, ease: "power2.out" }), b.ScrollNavBlock.toggleVisible(), b.NavBlock.toggleVisible(), this.sideNavNext = this.cont.querySelector(".scroll-nav__label"), this.currentSection = 0, this.sections = [].concat(s(this.cont.querySelectorAll("[data-section]"))), this.btt = [this.cont.querySelector(".scroll-nav__btt"), this.cont.querySelector(".nav__title")], this.shouldScale = !1, this.scrollVal = 0, this.targets = [].concat(s(this.cont.querySelectorAll(".nav__list-item"))), this.scroll = new g.default({ el: this.cont, smooth: !0, offset: 20 }), this.scroll.on("scroll", function(e) { t.shouldScale && t.parallaxAnim(e) }), this.scroll.on("call", function(e, i, n) { "updateBg" === e && t.updateBg(i, n), "updateNav" === e && t.updateNav(i, n), "updateSideNav" === e && t.updateSideNav(i, n), "lazyload" === e && t.lazyLoad(i, n), "recogInView" === e && t.recogInView(i, n), "scaleImg" === e && t.scaleImg(i, n), "toggleVideo" === e && t.toggleVideo(i, n) }), this.initEvents() } }, { key: "initEvents", value: function() { var t = this;
                        c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "initEvents", this).call(this), p.win.addEventListener("resize", (0, m.debounce)(function() { p.w.width > 1024 && location.reload() }, 200, !0)), this.sideNavNext.addEventListener("click", this.scrollNext.bind(this)), this.btt.forEach(function(e) { e.addEventListener("click", t.scrollTop.bind(t)) }), this.targets.forEach(function(e) { e.addEventListener("click", t.onClick.bind(t)) }) } }, { key: "scrollTop", value: function() { this.scroll.scrollTo("#intro", 0) } }, { key: "scrollNext", value: function() { this.currentSection < this.sections.length - 1 && this.scroll.scrollTo(this.sections[parseInt(this.currentSection + 1)], 0) } }, { key: "onClick", value: function(t) { this.scroll.scrollTo(t.currentTarget.getAttribute("data-target"), 0) } }, { key: "updateBg", value: function(t, e) { "enter" === t ? (w.gsap.to(p.body, { duration: .8, backgroundColor: e.el.getAttribute("data-bg") }), e.el.hasAttribute("data-theme") && ("dark" === e.el.getAttribute("data-theme") ? (b.NavBlock.toggleTheme("dark"), b.ScrollNavBlock.toggleTheme("dark")) : (b.NavBlock.toggleTheme("light"), b.ScrollNavBlock.toggleTheme("light"))), e.el.hasAttribute("data-trigger-nav") && b.NavBlock.toggleState()) : (w.gsap.to(p.body, { duration: .8, backgroundColor: "transparent" }), e.el.hasAttribute("data-theme") && ("light" === e.el.getAttribute("data-theme") ? (b.NavBlock.toggleTheme("dark"), b.ScrollNavBlock.toggleTheme("dark")) : (b.NavBlock.toggleTheme("light"), b.ScrollNavBlock.toggleTheme("light"))), e.el.hasAttribute("data-trigger-nav") && b.NavBlock.toggleState("nav")) } }, { key: "updateSideNav", value: function(t, e) { "enter" === t && (this.currentSection = parseInt(e.el.getAttribute("data-section"))) } }, { key: "updateNav", value: function(t, e) { var i = e.el.getAttribute("id");
                        b.NavBlock.toggleActive(i), "enter" === t && "contact" === i ? b.ScrollNavBlock.toggleState("btt") : "exit" === t && "contact" === i && b.ScrollNavBlock.toggleState("scroll") } }, { key: "lazyLoad", value: function(t, e) { var i = this,
                            n = [].concat(s(e.el.querySelectorAll(".title-img__inner"))),
                            r = e.el.querySelector("video");
                        n && n.length > 1 && this.initImgRotation(n), n.forEach(function(t, e) { var i = t.querySelector(".placeholder"),
                                r = new Image,
                                s = i.getAttribute("data-src");
                            r.src = s, r.decode().then(function() { t.appendChild(r), i && (r.setAttribute("alt", i.getAttribute("alt")), t.removeChild(i)), 0 === e && 1 === n.length && w.gsap.fromTo(r, { opacity: 0 }, { duration: .5, opacity: 1, ease: "power2.out" }) }) }), r && (r.setAttribute("src", r.getAttribute("data-src")), r.removeAttribute("data-src"), r.load(), new Promise(function(t, e) { i.videoPromise(r, n, t) })) } }, { key: "videoPromise", value: function(t, e, i) { t.oncanplay = function() { t.setAttribute("data-loaded", !0), t.play(), w.gsap.to(t, { opacity: 1, duration: .6, ease: "power2.out" }), e[0] && w.gsap.to(e[0], { opacity: 0, duration: .6, ease: "power2.out" }), i() } } }, { key: "toggleVideo", value: function(t, e) { e.el.hasAttribute("data-loaded") && ("enter" === t ? e.el.play() : e.el.pause()) } }, { key: "recogInView", value: function(t, e) { var i = { start: 0 },
                            n = e.el.querySelector("sup"),
                            r = parseInt(n.getAttribute("data-target"));
                        w.gsap.to(i, { start: r, duration: 1, delay: .6, snap: { start: 1 }, onUpdate: function() { n.innerHTML = "(" + i.start + ")" }, ease: "sine.out" }) } }, { key: "scaleImg", value: function(t, e) { p.w.width <= 1024 || ("enter" === t ? (this.shouldScale = !0, this.scrollVal = e.top) : this.shouldScale = !1, this.externalImgs = [].concat(s(e.el.querySelectorAll(".title-img__inner")))) } }, { key: "initImgRotation", value: function(t) { w.gsap.timeline({ repeat: -1, repeatDelay: 1.4 }).to(t, { opacity: 1, duration: .6, ease: "power2.out", stagger: { amount: 2.8, ease: "none" } }) } }, { key: "parallaxAnim", value: function(t) { if (this.externalImgs) { var e = _.clamp(_.map([this.scrollVal + p.w.height, this.scrollVal + 1.5 * p.w.height], [0, 300], t.scroll.y), 0, 100),
                                i = _.clamp(_.map([this.scrollVal + p.w.height, this.scrollVal + 1.5 * p.w.height], [0, 150], t.scroll.y), 0, 50);
                            w.gsap.set(this.externalImgs[0], { x: 1.25 * -e, y: -i, force3D: !0 }), w.gsap.set(this.externalImgs[1], { x: .25 * -e, force3D: !0 }), w.gsap.set(this.externalImgs[2], { x: 1.25 * e, y: i, force3D: !0 }) } } }]), e }(f.default);
        i.default = k }, { "./../_abstract/abstract-page": 2, "./../main": 9, "./../utils/debounce": 11, "./../utils/globals": 12, "./../utils/utils": 14, gsap: 15, "locomotive-scroll": 16 }],
    11: [function(t, e, i) { "use strict";

        function n(t) { var e = this,
                i = arguments,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                r = arguments[2],
                s = void 0; return function() { var o = e,
                    a = i,
                    l = function() { s = null, r || t.apply(o, a) },
                    u = r && !s;
                clearTimeout(s), s = setTimeout(l, n), u && t.apply(o, a) } }
        Object.defineProperty(i, "__esModule", { value: !0 }), i.debounce = n }, {}],
    12: [function(t, e, i) { "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 }); var n = document,
            r = window,
            s = n.body,
            o = document.scrollingElement || document.documentElement,
            a = { width: r.innerWidth, height: r.innerHeight },
            l = { isScrollActive: !0 },
            u = function() { a.width = r.innerWidth, a.height = r.innerHeight };
        r.addEventListener("resize", u), i.doc = n, i.win = r, i.body = s, i.runner = o, i.w = a, i.scrollAnim = null, i.autoInitSwitches = l, i.activeProject = null }, {}],
    13: [function(t, e, i) { "use strict";

        function n(t) { var e = this,
                i = arguments,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                r = arguments[2],
                s = void 0,
                o = void 0,
                a = void 0,
                l = null,
                u = 0;
            r || (r = {}); var c = function() { u = !1 === r.leading ? 0 : Date.now(), l = null, a = t.apply(s, o), l || (s = o = null) }; return function() { var h = Date.now();
                u || !1 !== r.leading || (u = h); var f = n - (h - u); if (s = e, o = i, f <= 0 || f > n) return l && (clearTimeout(l), l = null), u = h, a = t.apply(s, o), l ? l || !1 === r.trailing || (l = setTimeout(c, f)) : s = o = null, a } }
        Object.defineProperty(i, "__esModule", { value: !0 }), i.throttle = n }, {}],
    14: [function(t, e, i) { "use strict";

        function n(t, e) { return t > e ? t - e : e - t }

        function r(t, e, i) { return Math.min(i, Math.max(e, t)) }

        function s(t, e, i) { return e[0] + (i - t[0]) * (e[1] - e[0]) / (t[1] - t[0]) }
        Object.defineProperty(i, "__esModule", { value: !0 }), i.diff = n, i.clamp = r, i.map = s }, {}],
    15: [function(t, e, i) {
        ! function(t, n) { "object" == typeof i && void 0 !== e ? n(i) : "function" == typeof define && define.amd ? define(["exports"], n) : (t = t || self, n(t.window = t.window || {})) }(this, function(t) {
            "use strict";

            function e(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }

            function i(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }
            var n, r, s, o, a, l, u, c, h = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
                f = { duration: .5, overwrite: !1, delay: 0 },
                d = 1e-8,
                p = 2 * Math.PI,
                v = p / 4,
                g = 0,
                y = Math.sqrt,
                _ = Math.cos,
                m = Math.sin,
                b = function(t) { return "string" == typeof t },
                w = function(t) { return "function" == typeof t },
                k = function(t) { return "number" == typeof t },
                T = function(t) { return void 0 === t },
                S = function(t) { return "object" == typeof t },
                O = function(t) { return !1 !== t },
                x = function() { return "undefined" != typeof window },
                E = function(t) { return w(t) || b(t) },
                M = Array.isArray,
                P = /(?:-?\.?\d|\.)+/gi,
                A = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
                C = /[-+=\.]*\d+(?:\.|e-|e)*\d*/gi,
                D = /\(([^()]+)\)/i,
                j = /[\+-]=-?[\.\d]+/,
                L = /[#\-+\.]*\b[a-z\d-=+%.]+/gi,
                B = {},
                R = {},
                F = function(t) { return (R = ut(t, B)) && Je },
                z = function(t, e) { return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()") },
                I = function(t, e) { return !e && console.warn(t) },
                N = function(t, e) { return t && (B[t] = e) && R && (R[t] = e) || B },
                H = function() { return 0 },
                Y = {},
                V = [],
                q = {},
                X = {},
                U = {},
                W = 30,
                K = [],
                G = "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
                Q = function(t) { var e, i, n = t[0]; if (S(n) || w(n) || (t = [t]), !(e = (n._gsap || {}).harness)) { for (i = K.length; i-- && !K[i].targetTest(n););
                        e = K[i] } for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new we(t[i], e))) || t.splice(i, 1); return t },
                $ = function(t) { return t._gsap || Q(Ft(t))[0]._gsap },
                Z = function(t, e) { var i = t[e]; return w(i) ? t[e]() : T(i) && t.getAttribute(e) || i },
                J = function(t, e) { return (t = t.split(",")).forEach(e) || t },
                tt = function(t) { return Math.round(1e4 * t) / 1e4 },
                et = function(t, e) { for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i;); return n < i },
                it = function(t, e, i) { var n, r = k(t[1]),
                        s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
                        o = t[s]; return r && (o.duration = t[1]), 1 === e ? (o.runBackwards = 1, o.immediateRender = O(o.immediateRender)) : 2 === e && (n = t[s - 1], o.startAt = n, o.immediateRender = O(o.immediateRender)), o.parent = i, o },
                nt = function() { var t, e, i = V.length,
                        n = V.slice(0); for (q = {}, V.length = 0, t = 0; t < i; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0) },
                rt = function(t, e, i, n) { V.length && nt(), t.render(e, i, n), V.length && nt() },
                st = function(t) { var e = parseFloat(t); return e || 0 === e ? e : t },
                ot = function(t) { return t },
                at = function(t, e) { for (var i in e) i in t || (t[i] = e[i]); return t },
                lt = function(t, e) { for (var i in e) i in t || "duration" === i || "ease" === i || (t[i] = e[i]) },
                ut = function(t, e) { for (var i in e) t[i] = e[i]; return t },
                ct = function t(e, i) { for (var n in i) e[n] = S(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]; return e },
                ht = function(t, e) { var i, n = {}; for (i in t) i in e || (n[i] = t[i]); return n },
                ft = function(t) { var e = t.parent || n,
                        i = t.keyframes ? lt : at; if (O(t.inherit))
                        for (; e;) i(t, e.vars.defaults), e = e.parent; return t },
                dt = function(t, e) { for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i];); return i < 0 },
                pt = function(t, e, i, n, r) { void 0 === i && (i = "_first"), void 0 === n && (n = "_last"); var s, o = t[n]; if (r)
                        for (s = e[r]; o && o[r] > s;) o = o._prev; return o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = t, e },
                vt = function(t, e, i, n) { void 0 === i && (i = "_first"), void 0 === n && (n = "_last"); var r = e._prev,
                        s = e._next;
                    r ? r._next = s : t[i] === e && (t[i] = s), s ? s._prev = r : t[n] === e && (t[n] = r), e._dp = t, e._next = e._prev = e.parent = null },
                gt = function(t, e) {!t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0 },
                yt = function(t) { for (var e = t; e;) e._dirty = 1, e = e.parent; return t },
                _t = function(t) { for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent; return t },
                mt = function t(e) { return !e || e._ts && t(e.parent) },
                bt = function(t) { return t._repeat ? wt(t._tTime, t = t.duration() + t._rDelay) * t : 0 },
                wt = function(t, e) { return (t /= e) && ~~t === t ? ~~t - 1 : ~~t },
                kt = function(t, e) { return (t - e._start) * e._ts + (e._ts > 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur) },
                Tt = function(t, e, i) { if (e.parent && gt(e), e._start = i + e._delay, e._end = e._start + (e.totalDuration() / e._ts || 0), pt(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, e._time || !e._dur && e._initted) { var n = (t.rawTime() - e._start) * e._ts;
                        (!e._dur || Ct(0, e.totalDuration(), n) - e._tTime > d) && e.render(n, !0) } if (yt(t), t._dp && t._time >= t._dur && t._ts && t._dur < t.duration())
                        for (var r = t; r._dp;) r.totalTime(r._tTime, !0), r = r._dp; return t },
                St = function(t, e, i, n) { return Pe(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && l !== le.frame ? (V.push(t), t._lazy = [e, n], 1) : void 0 : 1 },
                Ot = function(t, e, i, n) { var r, s, o, a = t._zTime < 0 ? 0 : 1,
                        l = e < 0 ? 0 : 1,
                        u = t._rDelay,
                        c = 0; if (u && t._repeat && (c = Ct(0, t._tDur, e), s = wt(c, u), o = wt(t._tTime, u), s !== o && (a = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), (t._initted || !St(t, e, n, i)) && (l !== a || n || t._zTime === d || !e && t._zTime)) { for (t._zTime = e || (i ? d : 0), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = c, i || Zt(t, "onStart"), r = t._pt; r;) r.r(l, r.d), r = r._next;!l && t._startAt && !t._onUpdate && t._start && t._startAt.render(e, !0, n), t._onUpdate && !i && Zt(t, "onUpdate"), c && t._repeat && !i && t.parent && Zt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (t.ratio && gt(t, 1), i || (Zt(t, t.ratio ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom())) } },
                xt = function(t, e, i) { var n; if (i > e)
                        for (n = t._first; n && n._start <= i;) { if (!n._dur && "isPause" === n.data && n._start > e) return n;
                            n = n._next } else
                            for (n = t._last; n && n._start >= i;) { if (!n._dur && "isPause" === n.data && n._start < e) return n;
                                n = n._prev } },
                Et = function(t) { if (t instanceof Te) return yt(t); var e = t._repeat; return t._tDur = e ? e < 0 ? 1e12 : tt(t._dur * (e + 1) + t._rDelay * e) : t._dur, yt(t.parent), t },
                Mt = { _start: 0, endTime: H },
                Pt = function t(e, i, n) { var r, s, o = e.labels,
                        a = e._recent || Mt,
                        l = e.duration() >= 1e8 ? a.endTime(!1) : e._dur; return b(i) && (isNaN(i) || i in o) ? "<" === (r = i.charAt(0)) || ">" === r ? ("<" === r ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) : (r = i.indexOf("=")) < 0 ? (i in o || (o[i] = l), o[i]) : (s = +(i.charAt(r - 1) + i.substr(r + 1)), r > 1 ? t(e, i.substr(0, r - 1)) + s : l + s) : null == i ? l : +i },
                At = function(t, e) { return t || 0 === t ? e(t) : e },
                Ct = function(t, e, i) { return i < t ? t : i > e ? e : i },
                Dt = function(t) { return (t + "").substr((parseFloat(t) + "").length) },
                jt = function(t, e, i) { return At(i, function(i) { return Ct(t, e, i) }) },
                Lt = [].slice,
                Bt = function(t) { return t && S(t) && "length" in t && (!t.length || t.length - 1 in t && S(t[0])) && !t.nodeType && t !== r },
                Rt = function(t, e, i) { return void 0 === i && (i = []), t.forEach(function(t) { var n; return b(t) && !e || Bt(t) ? (n = i).push.apply(n, Ft(t)) : i.push(t) }) || i },
                Ft = function(t, e) { return !b(t) || e || !s && ue() ? M(t) ? Rt(t, e) : Bt(t) ? Lt.call(t, 0) : t ? [t] : [] : Lt.call(o.querySelectorAll(t), 0) },
                zt = function(t) { if (w(t)) return t; var e = S(t) ? t : { each: t },
                        i = ge(e.ease),
                        n = e.from || 0,
                        r = parseFloat(e.base) || 0,
                        s = {},
                        o = n > 0 && n < 1,
                        a = isNaN(n) || o,
                        l = e.axis,
                        u = n,
                        c = n; return b(n) ? u = c = { center: .5, edges: .5, end: 1 }[n] || 0 : !o && a && (u = n[0], c = n[1]),
                        function(t, o, h) { var f, d, p, v, g, _, m, b, w, k = (h || e).length,
                                T = s[k]; if (!T) { if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) { for (m = -1e8; m < (m = h[w++].getBoundingClientRect().left) && w < k;);
                                    w-- } for (T = s[k] = [], f = a ? Math.min(w, k) * u - .5 : n % w, d = a ? k * c / w - .5 : n / w | 0, m = 0, b = 1e8, _ = 0; _ < k; _++) p = _ % w - f, v = d - (_ / w | 0), T[_] = g = l ? Math.abs("y" === l ? v : p) : y(p * p + v * v), g > m && (m = g), g < b && (b = g);
                                T.max = m - b, T.min = b, T.v = k = (parseFloat(e.amount) || parseFloat(e.each) * (w > k ? k - 1 : l ? "y" === l ? k / w : w : Math.max(w, k / w)) || 0) * ("edges" === n ? -1 : 1), T.b = k < 0 ? r - k : r, T.u = Dt(e.amount || e.each) || 0, i = i && k < 0 ? ve(i) : i } return k = (T[t] - T.min) / T.max || 0, tt(T.b + (i ? i(k) : k) * T.v) + T.u } },
                It = function(t) { var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1; return function(i) { return ~~(Math.round(parseFloat(i) / t) * t * e) / e + (k(i) ? 0 : Dt(i)) } },
                Nt = function(t, e) { var i, n, r = M(t); return !r && S(t) && (i = r = t.radius || 1e8, t.values ? (t = Ft(t.values), (n = !k(t[0])) && (i *= i)) : t = It(t.increment)), At(e, r ? w(t) ? function(e) { return n = t(e), Math.abs(n - e) <= i ? n : e } : function(e) { for (var r, s, o = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), l = 1e8, u = 0, c = t.length; c--;) n ? (r = t[c].x - o, s = t[c].y - a, r = r * r + s * s) : r = Math.abs(t[c] - o), r < l && (l = r, u = c); return u = !i || l <= i ? t[u] : e, n || u === e || k(e) ? u : u + Dt(e) } : It(t)) },
                Ht = function(t, e, i, n) { return At(M(t) ? !e : !0 === i ? !!(i = 0) : !n, function() { return M(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && ~~(Math.round((t + Math.random() * (e - t)) / i) * i * n) / n }) },
                Yt = function() { for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]; return function(t) { return e.reduce(function(t, e) { return e(t) }, t) } },
                Vt = function(t, e) { return function(i) { return t(parseFloat(i)) + (e || Dt(i)) } },
                qt = function(t, e, i) { return Gt(t, e, 0, 1, i) },
                Xt = function(t, e, i) { return At(i, function(i) { return t[~~e(i)] }) },
                Ut = function t(e, i, n) { var r = i - e; return M(e) ? Xt(e, t(0, e.length), i) : At(n, function(t) { return (r + (t - e) % r) % r + e }) },
                Wt = function t(e, i, n) { var r = i - e,
                        s = 2 * r; return M(e) ? Xt(e, t(0, e.length - 1), i) : At(n, function(t) { return t = (s + (t - e) % s) % s, e + (t > r ? s - t : t) }) },
                Kt = function(t) { for (var e, i, n, r, s = 0, o = ""; ~(e = t.indexOf("random(", s));) n = t.indexOf(")", e), r = "[" === t.charAt(e + 7), i = t.substr(e + 7, n - e - 7).match(r ? L : P), o += t.substr(s, e - s) + Ht(r ? i : +i[0], +i[1], +i[2] || 1e-5), s = n + 1; return o + t.substr(s, t.length - s) },
                Gt = function(t, e, i, n, r) { var s = e - t,
                        o = n - i; return At(r, function(e) { return i + (e - t) / s * o }) },
                Qt = function t(e, i, n, r) { var s = isNaN(e + i) ? 0 : function(t) { return (1 - t) * e + t * i }; if (!s) { var o, a, l, u, c, h = b(e),
                            f = {}; if (!0 === n && (r = 1) && (n = null), h) e = { p: e }, i = { p: i };
                        else if (M(e) && !M(i)) { for (l = [], u = e.length, c = u - 2, a = 1; a < u; a++) l.push(t(e[a - 1], e[a]));
                            u--, s = function(t) { t *= u; var e = Math.min(c, ~~t); return l[e](t - e) }, n = i } else r || (e = ut(M(e) ? [] : {}, e)); if (!l) { for (o in i) xe.call(f, e, o, "get", i[o]);
                            s = function(t) { return Ve(t, f) || (h ? e.p : e) } } } return At(n, s) },
                $t = function(t, e, i) { var n, r, s, o = t.labels,
                        a = 1e8; for (n in o)(r = o[n] - e) < 0 == !!i && r && a > (r = Math.abs(r)) && (s = n, a = r); return s },
                Zt = function(t, e, i) { var n, r, s = t.vars,
                        o = s[e]; if (o) return n = s[e + "Params"], r = s.callbackScope || t, i && V.length && nt(), n ? o.apply(r, n) : o.call(r) },
                Jt = function(t) {
                    return gt(t),
                        t.progress() < 1 && Zt(t, "onInterrupt"), t
                },
                te = function(t) { t = !t.name && t.default || t; var e = t.name,
                        i = w(t),
                        n = e && !i && t.init ? function() { this._props = [] } : t,
                        r = { init: H, render: Ve, add: xe, kill: Xe, modifier: qe, rawVars: 0 },
                        s = { targetTest: 0, get: 0, getSetter: Ie, aliases: {}, register: 0 }; if (ue(), t !== n) { if (X[e]) return;
                        at(n, at(ht(t, r), s)), ut(n.prototype, ut(r, ht(t, s))), X[n.prop = e] = n, t.targetTest && (K.push(n), Y[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin" }
                    N(e, n), t.register && t.register(Je, n, Ke) },
                ee = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                ie = function(t, e, i) { return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0 },
                ne = function(t, e) { var i, n, r, s, o, a, l, u, c, h, f = t ? k(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : ee.black; if (!f) { if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ee[t]) f = ee[t];
                        else if ("#" === t.charAt(0)) 4 === t.length && (i = t.charAt(1), n = t.charAt(2), r = t.charAt(3), t = "#" + i + i + n + n + r + r), t = parseInt(t.substr(1), 16), f = [t >> 16, t >> 8 & 255, 255 & t];
                        else if ("hsl" === t.substr(0, 3))
                            if (f = h = t.match(P), e) { if (~t.indexOf("=")) return t.match(A) } else s = +f[0] % 360 / 360, o = +f[1] / 100, a = +f[2] / 100, n = a <= .5 ? a * (o + 1) : a + o - a * o, i = 2 * a - n, f.length > 3 && (f[3] *= 1), f[0] = ie(s + 1 / 3, i, n), f[1] = ie(s, i, n), f[2] = ie(s - 1 / 3, i, n);
                        else f = t.match(P) || ee.transparent;
                        f = f.map(Number) } return e && !h && (i = f[0] / 255, n = f[1] / 255, r = f[2] / 255, l = Math.max(i, n, r), u = Math.min(i, n, r), a = (l + u) / 2, l === u ? s = o = 0 : (c = l - u, o = a > .5 ? c / (2 - l - u) : c / (l + u), s = l === i ? (n - r) / c + (n < r ? 6 : 0) : l === n ? (r - i) / c + 2 : (i - n) / c + 4, s *= 60), f[0] = s + .5 | 0, f[1] = 100 * o + .5 | 0, f[2] = 100 * a + .5 | 0), f },
                re = function(t, e) { var i, n, r, s = (t + "").match(se),
                        o = 0,
                        a = ""; if (!s) return t; for (i = 0; i < s.length; i++) n = s[i], r = t.substr(o, t.indexOf(n, o) - o), o += r.length + n.length, n = ne(n, e), 3 === n.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")"; return a + t.substr(o) },
                se = function() { var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; for (t in ee) e += "|" + t + "\\b"; return new RegExp(e + ")", "gi") }(),
                oe = /hsl[a]?\(/,
                ae = function(t) { var e, i = t.join(" ");
                    se.lastIndex = 0, se.test(i) && (e = oe.test(i), t[0] = re(t[0], e), t[1] = re(t[1], e)) },
                le = function() { var t, e, i, n, l = Date.now,
                        u = 500,
                        h = 33,
                        f = l(),
                        p = f,
                        v = 1 / 60,
                        g = v,
                        y = [],
                        _ = function i(r) { var s, o, a = l() - p,
                                c = !0 === r;
                            a > u && (f += a - h), p += a, n.time = (p - f) / 1e3, s = n.time - g, (s > 0 || c) && (n.frame++, g += s + (s >= v ? .004 : v - s), o = 1), c || (t = e(i)), o && y.forEach(function(t) { return t(n.time, a, n.frame, r) }) }; return n = { time: 0, frame: 0, tick: function() { _(!0) }, wake: function() { a && (!s && x() && (r = s = window, o = r.document || {}, B.gsap = Je, (r.gsapVersions || (r.gsapVersions = [])).push(Je.version), F(R || r.GreenSockGlobals || !r.gsap && r || {}), i = r.requestAnimationFrame), t && n.sleep(), e = i || function(t) { return setTimeout(t, 1e3 * (g - n.time) + 1 | 0) }, c = 1, _(2)) }, sleep: function() {
                            (i ? r.cancelAnimationFrame : clearTimeout)(t), c = 0, e = H }, lagSmoothing: function(t, e) { u = t || 1 / d, h = Math.min(e, u, 0) }, fps: function(t) { v = 1 / (t || 60), g = n.time + v }, add: function(t) { y.indexOf(t) < 0 && y.push(t), ue() }, remove: function(t) { var e;~(e = y.indexOf(t)) && y.splice(e, 1) }, _listeners: y } }(),
                ue = function() { return !c && le.wake() },
                ce = {},
                he = /^[\d.\-M][\d.\-,\s]/,
                fe = /["']/g,
                de = function(t) { for (var e, i, n, r = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, l = s.length; a < l; a++) i = s[a], e = a !== l - 1 ? i.lastIndexOf(",") : i.length, n = i.substr(0, e), r[o] = isNaN(n) ? n.replace(fe, "").trim() : +n, o = i.substr(e + 1).trim(); return r },
                pe = function(t) { var e = (t + "").split("("),
                        i = ce[e[0]]; return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [de(e[1])] : D.exec(t)[1].split(",").map(st)) : ce._CE && he.test(t) ? ce._CE("", t) : i },
                ve = function(t) { return function(e) { return 1 - t(1 - e) } },
                ge = function(t, e) { return t ? (w(t) ? t : ce[t] || pe(t)) || e : e },
                ye = function(t, e, i, n) { void 0 === i && (i = function(t) { return 1 - e(1 - t) }), void 0 === n && (n = function(t) { return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2 }); var r, s = { easeIn: e, easeOut: i, easeInOut: n }; return J(t, function(t) { ce[t] = B[t] = s, ce[r = t.toLowerCase()] = i; for (var e in s) ce[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ce[t + "." + e] = s[e] }), s },
                _e = function(t) { return function(e) { return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2 } },
                me = function t(e, i, n) { var r = i >= 1 ? i : 1,
                        s = (n || (e ? .3 : .45)) / (i < 1 ? i : 1),
                        o = s / p * (Math.asin(1 / r) || 0),
                        a = function(t) { return 1 === t ? 1 : r * Math.pow(2, -10 * t) * m((t - o) * s) + 1 },
                        l = "out" === e ? a : "in" === e ? function(t) { return 1 - a(1 - t) } : _e(a); return s = p / s, l.config = function(i, n) { return t(e, i, n) }, l },
                be = function t(e, i) { void 0 === i && (i = 1.70158); var n = function(t) { return --t * t * ((i + 1) * t + i) + 1 },
                        r = "out" === e ? n : "in" === e ? function(t) { return 1 - n(1 - t) } : _e(n); return r.config = function(i) { return t(e, i) }, r };
            J("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) { var i = e < 5 ? e + 1 : e;
                    ye(t + ",Power" + (i - 1), e ? function(t) { return Math.pow(t, i) } : function(t) { return t }, function(t) { return 1 - Math.pow(1 - t, i) }, function(t) { return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2 }) }), ce.Linear.easeNone = ce.none = ce.Linear.easeIn, ye("Elastic", me("in"), me("out"), me()),
                function(t, e) { var i = 1 / e,
                        n = function(n) { return n < i ? t * n * n : n < .7272727272727273 ? t * Math.pow(n - 1.5 / e, 2) + .75 : n < .9090909090909092 ? t * (n -= 2.25 / e) * n + .9375 : t * Math.pow(n - 2.625 / e, 2) + .984375 };
                    ye("Bounce", function(t) { return 1 - n(1 - t) }, n) }(7.5625, 2.75), ye("Expo", function(t) { return t ? Math.pow(2, 10 * (t - 1)) : 0 }), ye("Circ", function(t) { return -(y(1 - t * t) - 1) }), ye("Sine", function(t) { return 1 - _(t * v) }), ye("Back", be("in"), be("out"), be()), ce.SteppedEase = ce.steps = B.SteppedEase = { config: function(t, e) { void 0 === t && (t = 1); var i = 1 / t,
                            n = t + (e ? 0 : 1),
                            r = e ? 1 : 0,
                            s = 1 - d; return function(t) { return ((n * Ct(0, s, t) | 0) + r) * i } } }, f.ease = ce["quad.out"];
            var we = function(t, e) { this.id = g++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Z, this.set = e ? e.getSetter : Ie },
                ke = function() {
                    function t(t, e) { var i = t.parent || n;
                        this.vars = t, this._dur = this._tDur = +t.duration || 0, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase, Et(this)), this._ts = 1, this.data = t.data, c || le.wake(), i && Tt(i, this, e || 0 === e ? e : i._time), t.reversed && this.reversed(!0), t.paused && this.paused(!0) } var e = t.prototype; return e.delay = function(t) { return t || 0 === t ? (this._delay = t, this) : this._delay }, e.duration = function(t) { var e = arguments.length,
                            i = this._repeat,
                            n = i > 0 ? i * ((e ? t : this._dur) + this._rDelay) : 0; return e ? this.totalDuration(i < 0 ? t : t + n) : this.totalDuration() && this._dur }, e.totalDuration = function(t) { if (!arguments.length) return this._tDur; var e = this._repeat,
                            i = (t || this._rDelay) && e < 0; return this._tDur = i ? 1e12 : t, this._dur = i ? t : (t - e * this._rDelay) / (e + 1), this._dirty = 0, yt(this.parent), this }, e.totalTime = function(t, e) { if (ue(), !arguments.length) return this._tTime; var i, n = this.parent || this._dp; if (n && n.smoothChildTiming && this._ts) { for (i = this._start, this._start = n._time - (this._ts > 0 ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts), this._end += this._start - i, n._dirty || yt(n); n.parent;) n.parent._time !== n._start + (n._ts > 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                            this.parent || Tt(this._dp, this, this._start - this._delay) } return this._tTime === t && (this._dur || e) || (this._ts || (this._pTime = t), rt(this, t, e)), this }, e.time = function(t, e) { return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + bt(this)) % this._dur || (t ? this._dur : 0), e) : this._time }, e.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._tTime / this.totalDuration() }, e.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + bt(this), e) : this.duration() ? this._time / this._dur : this.ratio }, e.iteration = function(t, e) { var i = this.duration() + this._rDelay; return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? wt(this._tTime, i) + 1 : 1 }, e.timeScale = function(t) { return arguments.length ? null !== this._pauseTS ? (this._pauseTS = t, this) : (this._ts = t, _t(this.totalTime(this.parent ? kt(this.parent._time, this) : this._tTime, !0))) : this._ts || this._pauseTS || 0 }, e.paused = function(t) { var e = !this._ts; return arguments.length ? (e !== t && (t ? (this._pauseTS = this._ts, this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (this._ts = this._pauseTS || 1, this._pauseTS = null, t = this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= d), this.totalTime(t, !0))), this) : e }, e.startTime = function(t) { return arguments.length ? (this.parent && this.parent._sort && Tt(this.parent, this, t - this._delay), this) : this._start }, e.endTime = function(t) { return this._start + (O(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts) }, e.rawTime = function(t) { var e = this.parent || this._dp; return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? kt(e.rawTime(t), this) : this._tTime : this._tTime }, e.repeat = function(t) { return arguments.length ? (this._repeat = t, Et(this)) : this._repeat }, e.repeatDelay = function(t) { return arguments.length ? (this._rDelay = t, Et(this)) : this._rDelay }, e.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, e.seek = function(t, e) { return this.totalTime(Pt(this, t), O(e)) }, e.restart = function(t, e) { return this.play().totalTime(t ? -this._delay : 0, O(e)) }, e.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, e.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, e.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, e.resume = function() { return this.paused(!1) }, e.reversed = function(t) { var e = this._ts || this._pauseTS || 0; return arguments.length ? (t !== this.reversed() && (this[null === this._pauseTS ? "_ts" : "_pauseTS"] = Math.abs(e) * (t ? -1 : 1), this.totalTime(this._tTime, !0)), this) : e < 0 }, e.invalidate = function() { return this._initted = 0, this }, e.isActive = function(t) { var e, i = this.parent || this._dp,
                            n = this._start; return !(i && !(this._ts && (this._initted || !t) && i.isActive(t) && (e = i.rawTime(!0)) >= n && e < this.endTime(!0) - d)) }, e.eventCallback = function(t, e, i) { var n = this.vars; return arguments.length > 1 ? (e ? (n[t] = e, i && (n[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t] }, e.then = function(t) { var e = this; return new Promise(function(i) { var n = t || ot,
                                r = function() { var t = e.then;
                                    e.then = null, n = n(e), n && (n.then || n === e) && (e._prom = n, e.then = t), i(n), e.then = t };
                            e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r }) }, e.kill = function() { Jt(this) }, t }();
            at(ke.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: 0, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -d, _prom: 0, _pauseTS: null });
            var Te = function(t) {
                function i(e, i) { var n; return void 0 === e && (e = {}), n = t.call(this, e, i) || this, n.labels = {}, n.smoothChildTiming = O(e.smoothChildTiming), n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = O(e.sortChildren), n }
                e(i, t); var r = i.prototype; return r.to = function(t, e, i) { return new Le(t, it(arguments, 0, this), Pt(this, k(e) ? arguments[3] : i)), this }, r.from = function(t, e, i) { return new Le(t, it(arguments, 1, this), Pt(this, k(e) ? arguments[3] : i)), this }, r.fromTo = function(t, e, i, n) { return new Le(t, it(arguments, 2, this), Pt(this, k(e) ? arguments[4] : n)), this }, r.set = function(t, e, i) { return e.duration = 0, e.parent = this, e.repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Le(t, e, Pt(this, i)), this }, r.call = function(t, e, i) { return Tt(this, Le.delayedCall(0, t, e), Pt(this, i)) }, r.staggerTo = function(t, e, i, n, r, s, o) { return i.duration = e, i.stagger = i.stagger || n, i.onComplete = s, i.onCompleteParams = o, i.parent = this, new Le(t, i, Pt(this, r)), this }, r.staggerFrom = function(t, e, i, n, r, s, o) { return i.runBackwards = 1, i.immediateRender = O(i.immediateRender), this.staggerTo(t, e, i, n, r, s, o) }, r.staggerFromTo = function(t, e, i, n, r, s, o, a) { return n.startAt = i, n.immediateRender = O(n.immediateRender), this.staggerTo(t, e, n, r, s, o, a) }, r.render = function(t, e, i) { var r, s, o, a, l, u, c, h, f, p, v, g = this._time,
                        y = this._dirty ? this.totalDuration() : this._tDur,
                        _ = this._dur,
                        m = t > y - d && t >= 0 && this !== n ? y : t < d ? 0 : t,
                        b = this._zTime < 0 != t < 0 && (this._initted || !_); if (m !== this._tTime || i || b) { if (b && (_ || (g = this._zTime), !t && e || (this._zTime = t)), r = m, f = this._start, h = this._ts, u = 0 === h, g !== this._time && _ && (r += this._time - g), this._repeat && (v = this._yoyo, l = _ + this._rDelay, r = tt(m % l), (r > _ || y === m) && (r = _), a = ~~(m / l), a && a === m / l && (r = _, a--), p = wt(this._tTime, l), v && 1 & a && (r = _ - r), a !== p && !this._lock)) { var w = v && 1 & p,
                                k = w === (v && 1 & a); if (a < p && (w = !w), g = w ? 0 : _, this._lock = 1, this.render(g, e, !_)._lock = 0, !e && this.parent && Zt(this, "onRepeat"), g !== this._time || u !== !this._ts) return this; if (k && (this._lock = 2, g = w ? _ + 1e-4 : -1e-4, this.render(g, !0)), this._lock = 0, !this._ts && !u) return this } if (this._hasPause && !this._forcing && this._lock < 2 && (c = xt(this, tt(g), tt(r))) && (m -= r - (r = c._start)), this._tTime = m, this._time = r, this._act = !h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1), g || !r || e || Zt(this, "onStart"), r >= g && t >= 0)
                            for (s = this._first; s;) { if (o = s._next, (s._act || r >= s._start) && s._ts && c !== s) { if (s.parent !== this) return this.render(t, e, i); if (s.render(s._ts > 0 ? (r - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (r - s._start) * s._ts, e, i), r !== this._time || !this._ts && !u) { c = 0; break } }
                                s = o } else { s = this._last; for (var T = t < 0 ? t : r; s;) { if (o = s._prev, (s._act || T <= s._end) && s._ts && c !== s) { if (s.parent !== this) return this.render(t, e, i); if (s.render(s._ts > 0 ? (T - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (T - s._start) * s._ts, e, i), r !== this._time || !this._ts && !u) { c = 0; break } }
                                    s = o } }
                        if (c && !e && (this.pause(), c.render(r >= g ? 0 : -d)._zTime = r >= g ? 1 : -1, this._ts)) return this._start = f, this.render(t, e, i);
                        this._onUpdate && !e && Zt(this, "onUpdate", !0), (m === y || !m && this._ts < 0) && (f !== this._start && Math.abs(h) === Math.abs(this._ts) || (!r || y >= this.totalDuration()) && ((t || !_) && (m && this._ts > 0 || !m && this._ts < 0) && gt(this, 1), e || t < 0 && !g || (Zt(this, m === y ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom()))) } return this }, r.add = function(t, e) { var i = this; if (k(e) || (e = Pt(this, e)), !(t instanceof ke)) { if (M(t)) return t.forEach(function(t) { return i.add(t, e) }), yt(this); if (b(t)) return this.addLabel(t, e); if (!w(t)) return this;
                        t = Le.delayedCall(0, t) } return this !== t ? Tt(this, t, e) : this }, r.getChildren = function(t, e, i, n) { void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = -1e8); for (var r = [], s = this._first; s;) s._start >= n && (s instanceof Le ? e && r.push(s) : (i && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, i)))), s = s._next; return r }, r.getById = function(t) { for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
                        if (e[i].vars.id === t) return e[i] }, r.remove = function(t) { return b(t) ? this.removeLabel(t) : w(t) ? this.killTweensOf(t) : (vt(this, t), t === this._recent && (this._recent = this._last), yt(this)) }, r.totalTime = function(e, i) { return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = le.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts)), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime }, r.addLabel = function(t, e) { return this.labels[t] = Pt(this, e), this }, r.removeLabel = function(t) { return delete this.labels[t], this }, r.addPause = function(t, e, i) { var n = Le.delayedCall(0, e || H, i); return n.data = "isPause", this._hasPause = 1, Tt(this, n, Pt(this, t)) }, r.removePause = function(t) { var e = this._first; for (t = Pt(this, t); e;) e._start === t && "isPause" === e.data && gt(e), e = e._next }, r.killTweensOf = function(t, e, i) { for (var n = this.getTweensOf(t, i), r = n.length; r--;) Se !== n[r] && n[r].kill(t, e); return this }, r.getTweensOf = function(t, e) { for (var i, n = [], r = Ft(t), s = this._first; s;) s instanceof Le ? !et(s._targets, r) || e && !s.isActive("started" === e) || n.push(s) : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i), s = s._next; return n }, r.tweenTo = function(t, e) { var i = this,
                        n = Pt(i, t),
                        r = e && e.startAt,
                        s = Le.to(i, at({ ease: "none", lazy: !1, time: n, duration: Math.abs(n - (r && "time" in r ? r.time : i._time)) / i.timeScale() || d, onStart: function() { i.pause(); var t = Math.abs(n - i._time) / i.timeScale();
                                s._dur !== t && (s._dur = t, s.render(s._time, !0, !0)), e && e.onStart && e.onStart.apply(s, e.onStartParams || []) } }, e)); return s }, r.tweenFromTo = function(t, e, i) { return this.tweenTo(e, at({ startAt: { time: Pt(this, t) } }, i)) }, r.recent = function() { return this._recent }, r.nextLabel = function(t) { return void 0 === t && (t = this._time), $t(this, Pt(this, t)) }, r.previousLabel = function(t) { return void 0 === t && (t = this._time), $t(this, Pt(this, t), 1) }, r.currentLabel = function(t) { return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + d) }, r.shiftChildren = function(t, e, i) { void 0 === i && (i = 0); for (var n, r = this._first, s = this.labels; r;) r._start >= i && (r._start += t), r = r._next; if (e)
                        for (n in s) s[n] >= i && (s[n] += t); return yt(this) }, r.invalidate = function() { var e = this._first; for (this._lock = 0; e;) e.invalidate(), e = e._next; return t.prototype.invalidate.call(this) }, r.clear = function(t) { void 0 === t && (t = !0); for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e; return this._time = this._tTime = 0, t && (this.labels = {}), yt(this) }, r.totalDuration = function(t) { var e, i, r = 0,
                        s = this,
                        o = s._last,
                        a = 1e8,
                        l = s._repeat,
                        u = l * s._rDelay || 0,
                        c = l < 0; if (!arguments.length) { if (s._dirty) { for (; o;) e = o._prev, o._dirty && o.totalDuration(), o._start > a && s._sort && o._ts && !s._lock ? (s._lock = 1, Tt(s, o, o._start - o._delay), s._lock = 0) : a = o._start, o._start < 0 && o._ts && (r -= o._start, (!s.parent && !s._dp || s.parent && s.parent.smoothChildTiming) && (s._start += o._start / s._ts, s._time -= o._start, s._tTime -= o._start), s.shiftChildren(-o._start, !1, -1e20), a = 0), i = o._end = o._start + o._tDur / Math.abs(o._ts || o._pauseTS || d), i > r && o._ts && (r = tt(i)), o = e;
                            s._dur = s === n && s._time > r ? s._time : Math.min(1e8, r), s._tDur = c && (s._dur || u) ? 1e12 : Math.min(1e8, r * (l + 1) + u), s._end = s._start + (s._tDur / Math.abs(s._ts || s._pauseTS || d) || 0), s._dirty = 0 } return s._tDur } return c ? s : s.timeScale(s.totalDuration() / t) }, i.updateRoot = function(t) { if (n._ts && (rt(n, kt(t, n)), l = le.frame), le.frame >= W) { W += h.autoSleep || 120; var e = n._first; if ((!e || !e._ts) && h.autoSleep && le._listeners.length < 2) { for (; e && !e._ts;) e = e._next;
                            e || le.sleep() } } }, i }(ke);
            at(Te.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
            var Se, Oe = function(t, e, i, n, r, s, o) { var a, l, u, c, h, f, d, p, v = new Ke(this._pt, t, e, 0, 1, Ye, null, r),
                        g = 0,
                        y = 0; for (v.b = i, v.e = n, i += "", n += "", (d = ~n.indexOf("random(")) && (n = Kt(n)), s && (p = [i, n], s(p, t, e), i = p[0], n = p[1]), l = i.match(C) || []; a = C.exec(n);) c = a[0], h = n.substring(g, a.index), u ? u = (u + 1) % 5 : "rgba(" === h.substr(-5) && (u = 1), c !== l[y++] && (f = parseFloat(l[y - 1]) || 0, v._pt = { _next: v._pt, p: h || 1 === y ? h : ",", s: f, c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - f, m: u && u < 4 ? Math.round : 0 }, g = C.lastIndex); return v.c = g < n.length ? n.substring(g, n.length) : "", v.fp = o, (j.test(n) || d) && (v.e = 0), this._pt = v, v },
                xe = function(t, e, i, n, r, s, o, a, l) { w(n) && (n = n(r || 0, t, s)); var u, c = t[e],
                        f = "get" !== i ? i : w(c) ? l ? t[e.indexOf("set") || !w(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : c,
                        d = w(c) ? l ? Fe : Re : Be; if (b(n) && (~n.indexOf("random(") && (n = Kt(n)), "=" === n.charAt(1) && (n = parseFloat(f) + parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) + (Dt(f) || 0))), f !== n) return isNaN(f + n) ? (!c && !(e in t) && z(e, n), Oe.call(this, t, e, f, n, d, a || h.stringFilter, l)) : (u = new Ke(this._pt, t, e, +f || 0, n - (f || 0), "boolean" == typeof c ? He : Ne, 0, d), l && (u.fp = l), o && u.modifier(o, this, t), this._pt = u) },
                Ee = function(t, e, i, n, r) { if (w(t) && (t = Ce(t, r, e, i, n)), !S(t) || t.style && t.nodeType || M(t)) return b(t) ? Ce(t, r, e, i, n) : t; var s, o = {}; for (s in t) o[s] = Ce(t[s], r, e, i, n); return o },
                Me = function(t, e, i, n, r, s) { var o, a, l, c; if (X[t] && !1 !== (o = new X[t]).init(r, o.rawVars ? e[t] : Ee(e[t], n, r, s, i), i, n, s) && (i._pt = a = new Ke(i._pt, r, t, 0, 1, o.render, o, 0, o.priority), i !== u))
                        for (l = i._ptLookup[i._targets.indexOf(r)], c = o._props.length; c--;) l[o._props[c]] = a; return o },
                Pe = function t(e, i) { var r, s, o, a, l, u, c, h, p, v, g, y, _ = e.vars,
                        m = _.ease,
                        b = _.startAt,
                        w = _.immediateRender,
                        k = _.lazy,
                        T = _.onUpdate,
                        S = _.onUpdateParams,
                        x = _.callbackScope,
                        E = _.runBackwards,
                        M = _.yoyoEase,
                        P = _.keyframes,
                        A = _.autoRevert,
                        C = e._dur,
                        D = e._startAt,
                        j = e._targets,
                        L = e.parent,
                        B = L && "nested" === L.data ? L.parent._targets : j,
                        R = "auto" === e._overwrite,
                        F = e.timeline; if (!F || P && m || (m = "none"), e._ease = ge(m, f.ease), e._yEase = M ? ve(ge(!0 === M ? m : M, f.ease)) : 0, M && e._yoyo && !e._repeat && (M = e._yEase, e._yEase = e._ease, e._ease = M), !F) { if (D && D.render(-1, !0).kill(), b) { if (gt(e._startAt = Le.set(j, at({ data: "isStart", overwrite: !1, parent: L, immediateRender: !0, lazy: O(k), startAt: null, delay: 0, onUpdate: T, onUpdateParams: S, callbackScope: x, stagger: 0 }, b))), w)
                                if (i > 0) !A && (e._startAt = 0);
                                else if (C) return } else if (E && C)
                            if (D) !A && (e._startAt = 0);
                            else if (i && (w = !1), gt(e._startAt = Le.set(j, ut(ht(_, Y), { overwrite: !1, data: "isFromStart", lazy: w && O(k), immediateRender: w, stagger: 0, parent: L }))), w) { if (!i) return } else t(e._startAt, d); for (r = ht(_, Y), e._pt = 0, h = j[0] ? $(j[0]).harness : 0, y = h && _[h.prop], k = C && O(k) || k && !C, s = 0; s < j.length; s++) { if (l = j[s], c = l._gsap || Q(j)[s]._gsap, e._ptLookup[s] = v = {}, q[c.id] && nt(), g = B === j ? s : B.indexOf(l), h && !1 !== (p = new h).init(l, y || r, e, g, B) && (e._pt = a = new Ke(e._pt, l, p.name, 0, 1, p.render, p, 0, p.priority), p._props.forEach(function(t) { v[t] = a }), p.priority && (u = 1)), !h || y)
                                for (o in r) X[o] && (p = Me(o, r, e, g, l, B)) ? p.priority && (u = 1) : v[o] = a = xe.call(e, l, o, "get", r[o], g, B, 0, _.stringFilter);
                            e._op && e._op[s] && e.kill(l, e._op[s]), R && e._pt && (Se = e, n.killTweensOf(l, v, "started"), Se = 0), e._pt && k && (q[c.id] = 1) }
                        u && We(e), e._onInit && e._onInit(e) }
                    e._from = !F && !!_.runBackwards, e._onUpdate = T, e._initted = 1 },
                Ae = function(t, e) { var i, n, r, s, o = t[0] ? $(t[0]).harness : 0,
                        a = o && o.aliases; if (!a) return e;
                    i = ut({}, e); for (n in a)
                        if (n in i)
                            for (s = a[n].split(","), r = s.length; r--;) i[s[r]] = i[n];
                    return i },
                Ce = function(t, e, i, n, r) { return w(t) ? t.call(e, i, n, r) : b(t) && ~t.indexOf("random(") ? Kt(t) : t },
                De = G + ",repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
                je = (De + ",id,stagger,delay,duration,paused").split(","),
                Le = function(t) {
                    function r(e, r, s) { var o; "number" == typeof r && (s.duration = r, r = s, s = null), o = t.call(this, ft(r), s) || this; var a, l, u, c, f, p, v, g, y = o.vars,
                            _ = y.duration,
                            m = y.delay,
                            b = y.immediateRender,
                            w = y.stagger,
                            T = y.overwrite,
                            x = y.keyframes,
                            P = y.defaults,
                            A = M(e) && k(e[0]) ? [e] : Ft(e); if (o._targets = A.length ? Q(A) : I("GSAP target " + e + " not found. https://greensock.com", !h.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = T, x || w || E(_) || E(m)) { if (r = o.vars, a = o.timeline = new Te({ data: "nested", defaults: P || {} }), a.kill(), a.parent = i(o), x) at(a.vars.defaults, { ease: "none" }), x.forEach(function(t) { return a.to(A, t, ">") });
                            else { if (c = A.length, v = w ? zt(w) : H, S(w))
                                    for (f in w) ~De.indexOf(f) && (g || (g = {}), g[f] = w[f]); for (l = 0; l < c; l++) { u = {}; for (f in r) je.indexOf(f) < 0 && (u[f] = r[f]);
                                    u.stagger = 0, g && ut(u, g), r.yoyoEase && !r.repeat && (u.yoyoEase = r.yoyoEase), p = A[l], u.duration = +Ce(_, i(o), l, p, A), u.delay = (+Ce(m, i(o), l, p, A) || 0) - o._delay, !w && 1 === c && u.delay && (o._delay = m = u.delay, o._start += m, u.delay = 0), a.to(p, u, v(l, p, A)) }
                                _ = m = 0 }
                            _ || o.duration(_ = a.duration()) } else o.timeline = 0; return !0 === T && (Se = i(o), n.killTweensOf(A), Se = 0), (b || !_ && !x && o._start === o.parent._time && O(b) && mt(i(o)) && "nested" !== o.parent.data) && (o._tTime = -d, o.render(Math.max(0, -m))), o }
                    e(r, t); var s = r.prototype; return s.render = function(t, e, i) { var n, r, s, o, a, l, u, c, h, f = this._time,
                            p = this._tDur,
                            v = this._dur,
                            g = t > p - d && t >= 0 ? p : t < d ? 0 : t; if (v) { if (g !== this._tTime || !t || i || this._startAt && this._zTime < 0 != t < 0) { if (n = g, c = this.timeline, this._repeat) { if (o = v + this._rDelay, n = tt(g % o), n > v && (n = v), s = ~~(g / o), s && s === g / o && (n = v, s--), l = this._yoyo && 1 & s, l && (h = this._yEase, n = v - n), a = wt(this._tTime, o), n === f && !i && this._initted) return this;
                                    s !== a && this.vars.repeatRefresh && !this._lock && (this._lock = i = 1, this.render(o * s, !0).invalidate()._lock = 0) } if (!this._initted && St(this, n, i, e)) return this._tTime = 0, this; for (this._tTime = g, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (h || this._ease)(n / v), this._from && (this.ratio = u = 1 - u), f || !n || e || Zt(this, "onStart"), r = this._pt; r;) r.r(u, r.d), r = r._next;
                                c && c.render(t < 0 ? t : !n && l ? -d : c._dur * u, e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), Zt(this, "onUpdate")), this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && Zt(this, "onRepeat"), g !== p && g || this._tTime !== g || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, i), (t || !v) && (g && this._ts > 0 || !g && this._ts < 0) && gt(this, 1), e || t < 0 && !f || (Zt(this, g === p ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom())) } } else Ot(this, t, e, i); return this }, s.targets = function() { return this._targets }, s.invalidate = function() { return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this) }, s.kill = function(t, e) { if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return Jt(this); if (this.timeline) return this.timeline.killTweensOf(t, e, Se && !0 !== Se.vars.overwrite), this; var i, n, r, s, o, a, l, u = this._targets,
                            c = t ? Ft(t) : u,
                            h = this._ptLookup,
                            f = this._pt; if ((!e || "all" === e) && dt(u, c)) return Jt(this); for (i = this._op = this._op || [], "all" !== e && (b(e) && (o = {}, J(e, function(t) { return o[t] = 1 }), e = o), e = Ae(u, e)), l = u.length; l--;)
                            if (~c.indexOf(u[l])) { n = h[l], "all" === e ? (i[l] = e, s = n, r = {}) : (r = i[l] = i[l] || {}, s = e); for (o in s) a = n && n[o], a && ("kill" in a.d && !0 !== a.d.kill(o) || vt(this, a, "_pt"), delete n[o]), "all" !== r && (r[o] = 1) }
                        return this._initted && !this._pt && f && Jt(this), this }, r.to = function(t, e) { return new r(t, e, arguments[2]) }, r.from = function(t, e) { return new r(t, it(arguments, 1)) }, r.delayedCall = function(t, e, i, n) { return new r(e, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: e, onReverseComplete: e, onCompleteParams: i, onReverseCompleteParams: i, callbackScope: n }) }, r.fromTo = function(t, e, i) { return new r(t, it(arguments, 2)) }, r.set = function(t, e) { return e.duration = 0, e.repeatDelay || (e.repeat = 0), new r(t, e) }, r.killTweensOf = function(t, e, i) { return n.killTweensOf(t, e, i) }, r }(ke);
            at(Le.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), J("staggerTo,staggerFrom,staggerFromTo", function(t) { Le[t] = function() { var e = new Te,
                        i = Ft(arguments); return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i) } });
            var Be = function(t, e, i) { return t[e] = i },
                Re = function(t, e, i) { return t[e](i) },
                Fe = function(t, e, i, n) { return t[e](n.fp, i) },
                ze = function(t, e, i) { return t.setAttribute(e, i) },
                Ie = function(t, e) { return w(t[e]) ? Re : T(t[e]) && t.setAttribute ? ze : Be },
                Ne = function(t, e) { return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e) },
                He = function(t, e) { return e.set(e.t, e.p, !!(e.s + e.c * t), e) },
                Ye = function(t, e) { var i = e._pt,
                        n = ""; if (!t && e.b) n = e.b;
                    else if (1 === t && e.e) n = e.e;
                    else { for (; i;) n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n, i = i._next;
                        n += e.c }
                    e.set(e.t, e.p, n, e) },
                Ve = function(t, e) { for (var i = e._pt; i;) i.r(t, i.d), i = i._next },
                qe = function(t, e, i, n) { for (var r, s = this._pt; s;) r = s._next, s.p === n && s.modifier(t, e, i), s = r },
                Xe = function(t) { for (var e, i, n = this._pt; n;) i = n._next, n.p === t && !n.op || n.op === t ? vt(this, n, "_pt") : n.dep || (e = 1), n = i; return !e },
                Ue = function(t, e, i, n) { n.mSet(t, e, n.m.call(n.tween, i, n.mt), n) },
                We = function(t) { for (var e, i, n, r, s = t._pt; s;) { for (e = s._next, i = n; i && i.pr > s.pr;) i = i._next;
                        (s._prev = i ? i._prev : r) ? s._prev._next = s: n = s, (s._next = i) ? i._prev = s : r = s, s = e }
                    t._pt = n },
                Ke = function() {
                    function t(t, e, i, n, r, s, o, a, l) { this.t = e, this.s = n, this.c = r, this.p = i, this.r = s || Ne, this.d = o || this, this.set = a || Be, this.pr = l || 0, this._next = t, t && (t._prev = this) } return t.prototype.modifier = function(t, e, i) { this.mSet = this.mSet || this.set, this.set = Ue, this.m = t, this.mt = i, this.tween = e }, t }();
            J(G + ",parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert", function(t) { Y[t] = 1, "on" === t.substr(0, 2) && (Y[t + "Params"] = 1) }), B.TweenMax = B.TweenLite = Le, B.TimelineLite = B.TimelineMax = Te, n = new Te({ sortChildren: !1, defaults: f, autoRemoveChildren: !0, id: "root" }), h.stringFilter = ae;
            var Ge = { registerPlugin: function() { for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    e.forEach(function(t) { return te(t) }) }, timeline: function(t) { return new Te(t) }, getTweensOf: function(t, e) { return n.getTweensOf(t, e) }, getProperty: function(t, e, i, n) { b(t) && (t = Ft(t)[0]); var r = $(t || {}).get,
                        s = i ? ot : st; return "native" === i && (i = ""), t ? e ? s((X[e] && X[e].get || r)(t, e, i, n)) : function(e, i, n) { return s((X[e] && X[e].get || r)(t, e, i, n)) } : t }, quickSetter: function(t, e, i) { if (t = Ft(t), t.length > 1) { var n = t.map(function(t) { return Je.quickSetter(t, e, i) }),
                            r = n.length; return function(t) { for (var e = r; e--;) n[e](t) } }
                    t = t[0] || {}; var s = X[e],
                        o = $(t),
                        a = s ? function(e) { var n = new s;
                            u._pt = 0, n.init(t, i ? e + i : e, u, 0, [t]), n.render(1, n), u._pt && Ve(1, u) } : o.set(t, e); return s ? a : function(n) { return a(t, e, i ? n + i : n, o, 1) } }, isTweening: function(t) { return n.getTweensOf(t, !0).length > 0 }, defaults: function(t) { return t && t.ease && (t.ease = ge(t.ease, f.ease)), ct(f, t || {}) }, config: function(t) { return ct(h, t || {}) }, registerEffect: function(t) { var e = t.name,
                        i = t.effect,
                        n = t.plugins,
                        r = t.defaults,
                        s = t.extendTimeline;
                    (n || "").split(",").forEach(function(t) { return t && !X[t] && !B[t] && I(e + " effect requires " + t + " plugin.") }), U[e] = function(t, e) { return i(Ft(t), at(e || {}, r)) }, s && (Te.prototype[e] = function(t, i, n) { return this.add(U[e](t, S(i) ? i : (n = i) && {}), n) }) }, registerEase: function(t, e) { ce[t] = ge(e) }, parseEase: function(t, e) { return arguments.length ? ge(t, e) : ce }, getById: function(t) { return n.getById(t) }, exportRoot: function(t, e) { void 0 === t && (t = {}); var i, r, s = new Te(t); for (s.smoothChildTiming = O(t.smoothChildTiming), n.remove(s), s._dp = 0, s._time = s._tTime = n._time, i = n._first; i;) r = i._next, !e && !i._dur && i instanceof Le && i.vars.onComplete === i._targets[0] || Tt(s, i, i._start - i._delay), i = r; return Tt(n, s, 0), s }, utils: { wrap: Ut, wrapYoyo: Wt, distribute: zt, random: Ht, snap: Nt, normalize: qt, getUnit: Dt, clamp: jt, splitColor: ne, toArray: Ft, mapRange: Gt, pipe: Yt, unitize: Vt, interpolate: Qt }, install: F, effects: U, ticker: le, updateRoot: Te.updateRoot, plugins: X, globalTimeline: n, core: { PropTween: Ke, globals: N, Tween: Le, Timeline: Te, Animation: ke, getCache: $ } };
            J("to,from,fromTo,delayedCall,set,killTweensOf", function(t) { return Ge[t] = Le[t] }), le.add(Te.updateRoot), u = Ge.to({}, { duration: 0 });
            var Qe = function(t, e) { for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next; return i },
                $e = function(t, e) { var i, n, r, s = t._targets; for (i in e)
                        for (n = s.length; n--;)(r = t._ptLookup[n][i]) && (r = r.d) && (r._pt && (r = Qe(r, i)), r && r.modifier && r.modifier(e[i], t, s[n], i)) },
                Ze = function(t, e) { return { name: t, rawVars: 1, init: function(t, i, n) { n._onInit = function(t) { var n, r; if (b(i) && (n = {}, J(i, function(t) { return n[t] = 1 }), i = n), e) { n = {}; for (r in i) n[r] = e(i[r]);
                                    i = n }
                                $e(t, i) } } } },
                Je = Ge.registerPlugin({ name: "attr", init: function(t, e, i, n, r) { for (var s in e) this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], n, r, 0, 0, s), this._props.push(s) } }, { name: "endArray", init: function(t, e) { for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i]) } }, Ze("roundProps", It), Ze("modifiers"), Ze("snap", Nt)) || Ge;
            Le.version = Te.version = Je.version = "3.0.5", a = 1, x() && ue();
            var ti, ei, ii, ni, ri, si, oi, ai, li = ce.Power0,
                ui = ce.Power1,
                ci = ce.Power2,
                hi = ce.Power3,
                fi = ce.Power4,
                di = ce.Linear,
                pi = ce.Quad,
                vi = ce.Cubic,
                gi = ce.Quart,
                yi = ce.Quint,
                _i = ce.Strong,
                mi = ce.Elastic,
                bi = ce.Back,
                wi = ce.SteppedEase,
                ki = ce.Bounce,
                Ti = ce.Sine,
                Si = ce.Expo,
                Oi = ce.Circ,
                xi = function() { return "undefined" != typeof window },
                Ei = {},
                Mi = 180 / Math.PI,
                Pi = Math.PI / 180,
                Ai = Math.atan2,
                Ci = /([A-Z])/g,
                Di = /[-+=\.]*\d+[\.e-]*\d*[a-z%]*/g,
                ji = /(?:left|right|width|margin|padding|x)/i,
                Li = /[\s,\(]\S/,
                Bi = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
                Ri = function(t, e) { return e.set(e.t, e.p, ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u, e) },
                Fi = function(t, e) { return e.set(e.t, e.p, 1 === t ? e.e : ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u, e) },
                zi = function(t, e) { return e.set(e.t, e.p, t ? ~~(1e3 * (e.s + e.c * t)) / 1e3 + e.u : e.b, e) },
                Ii = function(t, e) { var i = e.s + e.c * t;
                    e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e) },
                Ni = function(t, e) { return e.set(e.t, e.p, t ? e.e : e.b, e) },
                Hi = function(t, e) { return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e) },
                Yi = function(t, e, i) { return t.style[e] = i },
                Vi = function(t, e, i) { return t.style.setProperty(e, i) },
                qi = function(t, e, i) { return t._gsap[e] = i },
                Xi = function(t, e, i) { return t._gsap.scaleX = t._gsap.scaleY = i },
                Ui = function(t, e, i, n, r) { var s = t._gsap;
                    s.scaleX = s.scaleY = i, s.renderTransform(r, s) },
                Wi = function(t, e, i, n, r) { var s = t._gsap;
                    s[e] = i, s.renderTransform(r, s) },
                Ki = "transform",
                Gi = Ki + "Origin",
                Qi = function(t, e) { var i = ei.createElementNS ? ei.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ei.createElement(t); return i.style ? i : ei.createElement(t) },
                $i = function t(e, i, n) { var r = getComputedStyle(e); return r[i] || r.getPropertyValue(i.replace(Ci, "-$1").toLowerCase()) || r.getPropertyValue(i) || !n && t(e, Ji(i) || i, 1) || "" },
                Zi = "O,Moz,ms,Ms,Webkit".split(","),
                Ji = function(t, e) { var i = e || ri,
                        n = i.style,
                        r = 5; if (t in n) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(Zi[r] + t in n);); return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? Zi[r] : "") + t },
                tn = function() {
                    xi() && (ti = window, ei = ti.document, ii = ei.documentElement, ri = Qi("div") || { style: {} }, si = Qi("div"), Ki = Ji(Ki), Gi = Ji(Gi), ri.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ai = !!Ji("perspective"), ni = 1)
                },
                en = function t(e) { var i, n = Qi("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        r = this.parentNode,
                        s = this.nextSibling,
                        o = this.style.cssText; if (ii.appendChild(n), n.appendChild(this), this.style.display = "block", e) try { i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t } catch (t) {} else this._gsapBBox && (i = this._gsapBBox()); return s ? r.insertBefore(this, s) : r.appendChild(this), ii.removeChild(n), this.style.cssText = o, i },
                nn = function(t, e) { for (var i = e.length; i--;)
                        if (t.hasAttribute(e[i])) return t.getAttribute(e[i]) },
                rn = function(t) { var e; try { e = t.getBBox() } catch (i) { e = en.call(t, !0) } return !e || e.width || e.x || e.y ? e : { x: +nn(t, ["x", "cx", "x1"]) || 0, y: +nn(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } },
                sn = function(t) { return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !rn(t)) },
                on = function(t, e) { if (e) { var i = t.style;
                        e in Ei && (e = Ki), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(Ci, "-$1").toLowerCase())) : i.removeAttribute(e) } },
                an = function(t, e, i, n, r, s) { var o = new Ke(t._pt, e, i, 0, 1, s ? Hi : Ni); return t._pt = o, o.b = n, o.e = r, t._props.push(i), o },
                ln = { deg: 1, rad: 1, turn: 1 },
                un = function(t, e, i, n) { var r, s, o, a, l = parseFloat(i) || 0,
                        u = (i + "").trim().substr((l + "").length) || "px",
                        c = ri.style,
                        h = ji.test(e),
                        f = "svg" === t.tagName.toLowerCase(),
                        d = (f ? "client" : "offset") + (h ? "Width" : "Height"),
                        p = "px" === n; return n === u || !l || ln[n] || ln[u] ? l : (a = t.getCTM && sn(t), "%" === n && Ei[e] ? tt(l / (a ? t.getBBox()[h ? "width" : "height"] : t[d]) * 100) : (c[h ? "width" : "height"] = 100 + (p ? u : n), s = "em" === n && t.appendChild && !f ? t : t.parentNode, a && (s = (t.ownerSVGElement || {}).parentNode), s && s !== ei && s.appendChild || (s = ei.body), (o = s._gsap) && "%" === n && o.width && h && o.time === le.time ? tt(l / o.width * 100) : (s.appendChild(ri), r = ri[d], s.removeChild(ri), h && "%" === n && (o = $(s), o.time = le.time, o.width = s[d]), tt(p ? r * l / 100 : 100 / r * l)))) },
                cn = function(t, e, i, n) { var r; return ni || tn(), e in Bi && "transform" !== e && (e = Bi[e], ~e.indexOf(",") && (e = e.split(",")[0])), Ei[e] && "transform" !== e ? (r = kn(t, n), r = "transformOrigin" !== e ? r[e] : Tn($i(t, Gi)) + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || n || ~(r + "").indexOf("calc(")) && (r = $i(t, e) || Z(t, e) || ("opacity" === e ? 1 : 0)), i ? un(t, e, r, i) + i : r },
                hn = function(t, e, i, n) { var r, s, o, a, l, u, c, f, d, p, v, g, y, _ = new Ke(this._pt, t.style, e, 0, 1, Ye),
                        m = 0,
                        b = 0; if (_.b = i, _.e = n, i += "", n += "", "auto" === n && (t.style[e] = n, n = $i(t, e) || n, t.style[e] = i), r = [i, n], ae(r), i = r[0], n = r[1], u = i.indexOf("rgba("), c = n.indexOf("rgba("), !!u != !!c && (u ? i = i.substr(u) + " " + i.substr(0, u - 1) : n = n.substr(c) + " " + n.substr(0, c - 1)), o = i.match(Di) || [], y = n.match(Di) || [], y.length) { for (; s = Di.exec(n);) c = s[0], d = n.substring(m, s.index), l ? l = (l + 1) % 5 : "rgba(" === d.substr(-5) && (l = 1), c !== (u = o[b++] || "") && (a = parseFloat(u) || 0, v = u.substr((a + "").length), g = "=" === c.charAt(1) ? +(c.charAt(0) + "1") : 0, g && (c = c.substr(2)), f = parseFloat(c), p = c.substr((f + "").length), m = Di.lastIndex - p.length, p || (p = p || h.units[e] || v, m === n.length && (n += p, _.e += p)), v !== p && (a = un(t, e, u, p) || 0), _._pt = { _next: _._pt, p: d || 1 === b ? d : ",", s: a, c: g ? g * f : f - a, m: l && l < 4 ? Math.round : 0 });
                        _.c = m < n.length ? n.substring(m, n.length) : "" } else _.r = "display" === e && "none" === n ? Hi : Ni; return j.test(n) && (_.e = 0), this._pt = _, _ },
                fn = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
                dn = function(t) { var e = t.split(" "),
                        i = e[0],
                        n = e[1] || "50%"; return "top" !== i && "bottom" !== i && "left" !== n && "right" !== n || (t = i, i = n, n = t), e[0] = fn[i] || i, e[1] = fn[n] || n, e.join(" ") },
                pn = function(t, e) { if (e.tween && e.tween._time === e.tween._dur) { var i, n, r, s = e.t,
                            o = s.style,
                            a = e.u; if ("all" === a || !0 === a) o.cssText = "", n = 1;
                        else
                            for (a = a.split(","), r = a.length; --r > -1;) i = a[r], Ei[i] && (n = 1, i = "transformOrigin" === i ? Gi : Ki), on(s, i);
                        n && (on(s, Ki), (n = s._gsap) && (n.svg && s.removeAttribute("transform"), kn(s, 1))) } },
                vn = { clearProps: function(t, e, i, n, r) { if ("isFromStart" !== r.data) { var s = t._pt = new Ke(t._pt, e, i, 0, 0, pn); return s.u = n, s.pr = -10, s.tween = r, t._props.push(i), 1 } } },
                gn = [1, 0, 0, 1, 0, 0],
                yn = {},
                _n = function(t) { return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t },
                mn = function(t) { var e = $i(t, Ki); return _n(e) ? gn : e.substr(7).match(A).map(tt) },
                bn = function(t, e) { var i, n, r, s, o = t._gsap,
                        a = t.style,
                        l = mn(t); return o.svg && t.getAttribute("transform") ? (r = t.transform.baseVal.consolidate().matrix, l = [r.a, r.b, r.c, r.d, r.e, r.f], "1,0,0,1,0,0" === l.join(",") ? gn : l) : (l !== gn || t.offsetParent || t === ii || o.svg || (r = a.display, a.display = "block", i = t.parentNode, i && t.offsetParent || (s = 1, n = t.nextSibling, ii.appendChild(t)), l = mn(t), r ? a.display = r : on(t, "display"), s && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : ii.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l) },
                wn = function(t, e, i, n, r, s) { var o, a, l, u, c = t._gsap,
                        h = r || bn(t, !0),
                        f = c.xOrigin || 0,
                        d = c.yOrigin || 0,
                        p = c.xOffset || 0,
                        v = c.yOffset || 0,
                        g = h[0],
                        y = h[1],
                        _ = h[2],
                        m = h[3],
                        b = h[4],
                        w = h[5],
                        k = e.split(" "),
                        T = parseFloat(k[0]) || 0,
                        S = parseFloat(k[1]) || 0;
                    i ? h !== gn && (a = g * m - y * _) && (l = T * (m / a) + S * (-_ / a) + (_ * w - m * b) / a, u = T * (-y / a) + S * (g / a) - (g * w - y * b) / a, T = l, S = u) : (o = rn(t), T = o.x + (~k[0].indexOf("%") ? T / 100 * o.width : T), S = o.y + (~(k[1] || k[0]).indexOf("%") ? S / 100 * o.height : S)), n || !1 !== n && c.smooth ? (b = T - f, w = S - d, c.xOffset = p + (b * g + w * _) - b, c.yOffset = v + (b * y + w * m) - w) : c.xOffset = c.yOffset = 0, c.xOrigin = T, c.yOrigin = S, c.smooth = !!n, c.origin = e, c.originIsAbsolute = !!i, t.style[Gi] = "0px 0px", s && (an(s, c, "xOrigin", f, T), an(s, c, "yOrigin", d, S), an(s, c, "xOffset", p, c.xOffset), an(s, c, "yOffset", v, c.yOffset)) },
                kn = function(t, e) { var i = t._gsap || new we(t); if ("x" in i && !e && !i.uncache) return i; var n, r, s, o, a, l, u, c, f, d, p, v, g, y, _, m, b, w, k, T, S, O, x, E, M, P, A, C, D, j, L = t.style,
                        B = i.scaleX < 0,
                        R = i.xOrigin || 0,
                        F = i.yOrigin || 0,
                        z = $i(t, Gi) || "0"; return n = r = s = l = u = c = f = d = p = 0, o = a = 1, i.svg = !(!t.getCTM || !sn(t)), v = bn(t, i.svg), i.svg && wn(t, z, i.originIsAbsolute, !1 !== i.smooth, v), v !== gn && (m = v[0], b = v[1], w = v[2], k = v[3], n = T = v[4], r = S = v[5], 6 === v.length ? (o = Math.sqrt(m * m + b * b), a = Math.sqrt(k * k + w * w), l = m || b ? Ai(b, m) * Mi : 0, f = w || k ? Ai(w, k) * Mi + l : 0, i.svg && (n -= R - (R * m + F * w), r -= F - (R * b + F * k))) : (j = v[6], C = v[7], M = v[8], P = v[9], A = v[10], D = v[11], n = v[12], r = v[13], s = v[14], g = Ai(j, A), u = g * Mi, g && (y = Math.cos(-g), _ = Math.sin(-g), O = T * y + M * _, x = S * y + P * _, E = j * y + A * _, M = T * -_ + M * y, P = S * -_ + P * y, A = j * -_ + A * y, D = C * -_ + D * y, T = O, S = x, j = E), g = Ai(-w, A), c = g * Mi, g && (y = Math.cos(-g), _ = Math.sin(-g), O = m * y - M * _, x = b * y - P * _, E = w * y - A * _, D = k * _ + D * y, m = O, b = x, w = E), g = Ai(b, m), l = g * Mi, g && (y = Math.cos(g), _ = Math.sin(g), O = m * y + b * _, x = T * y + S * _, b = b * y - m * _, S = S * y - T * _, m = O, T = x), u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0, c = 180 - c), o = tt(Math.sqrt(m * m + b * b + w * w)), a = tt(Math.sqrt(S * S + j * j)), g = Ai(T, S), f = Math.abs(g) > 2e-4 ? g * Mi : 0, p = D ? 1 / (D < 0 ? -D : D) : 0), i.svg && (v = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !_n($i(t, Ki)), v && t.setAttribute("transform", v))), Math.abs(f) > 90 && Math.abs(f) < 270 && (B ? (o *= -1, f += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, f += f <= 0 ? 180 : -180)), i.x = ((i.xPercent = n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", i.y = ((i.yPercent = r && Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + "px", i.z = s + "px", i.scaleX = tt(o), i.scaleY = tt(a), i.rotation = tt(l) + "deg", i.rotationX = tt(u) + "deg", i.rotationY = tt(c) + "deg", i.skewX = f + "deg", i.skewY = d + "deg", i.transformPerspective = p + "px", (i.zOrigin = parseFloat(z.split(" ")[2]) || 0) && (L[Gi] = Tn(z)), i.xOffset = i.yOffset = 0, i.force3D = h.force3D, i.renderTransform = i.svg ? En : ai ? xn : On, i.uncache = 0, i },
                Tn = function(t) { return (t = t.split(" "))[0] + " " + t[1] },
                Sn = function(t, e, i) { var n = Dt(e); return tt(parseFloat(e) + parseFloat(un(t, "x", i + "px", n))) + n },
                On = function(t, e) { e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, xn(t, e) },
                xn = function(t, e) { var i = e || this,
                        n = i.xPercent,
                        r = i.yPercent,
                        s = i.x,
                        o = i.y,
                        a = i.z,
                        l = i.rotation,
                        u = i.rotationY,
                        c = i.rotationX,
                        h = i.skewX,
                        f = i.skewY,
                        d = i.scaleX,
                        p = i.scaleY,
                        v = i.transformPerspective,
                        g = i.force3D,
                        y = i.target,
                        _ = i.zOrigin,
                        m = "",
                        b = "auto" === g && t && 1 !== t || !0 === g; if (_ && ("0deg" !== c || "0deg" !== u)) { var w, k = parseFloat(u) * Pi,
                            T = Math.sin(k),
                            S = Math.cos(k);
                        k = parseFloat(c) * Pi, w = Math.cos(k), s = Sn(y, s, T * w * -_), o = Sn(y, o, -Math.sin(k) * -_), a = Sn(y, a, S * w * -_ + _) }(n || r) && (m = "translate(" + n + "%, " + r + "%) "), (b || "0px" !== s || "0px" !== o || "0px" !== a) && (m += "0px" !== a || b ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + ") "), "0px" !== v && (m += "perspective(" + v + ") "), "0deg" !== l && (m += "rotate(" + l + ") "), "0deg" !== u && (m += "rotateY(" + u + ") "), "0deg" !== c && (m += "rotateX(" + c + ") "), "0deg" === h && "0deg" === f || (m += "skew(" + h + ", " + f + ") "), 1 === d && 1 === p || (m += "scale(" + d + ", " + p + ") "), y.style[Ki] = m || "translate(0, 0)" },
                En = function(t, e) { var i, n, r, s, o, a = e || this,
                        l = a.xPercent,
                        u = a.yPercent,
                        c = a.x,
                        h = a.y,
                        f = a.rotation,
                        d = a.skewX,
                        p = a.skewY,
                        v = a.scaleX,
                        g = a.scaleY,
                        y = a.target,
                        _ = a.xOrigin,
                        m = a.yOrigin,
                        b = a.xOffset,
                        w = a.yOffset,
                        k = a.forceCSS,
                        T = parseFloat(c),
                        S = parseFloat(h);
                    f = parseFloat(f), d = parseFloat(d), p = parseFloat(p), p && (p = parseFloat(p), d += p, f += p), f || d ? (f *= Pi, d *= Pi, i = Math.cos(f) * v, n = Math.sin(f) * v, r = Math.sin(f - d) * -g, s = Math.cos(f - d) * g, d && (p *= Pi, o = Math.tan(d - p), o = Math.sqrt(1 + o * o), r *= o, s *= o, p && (o = Math.tan(p), o = Math.sqrt(1 + o * o), i *= o, n *= o)), i = tt(i), n = tt(n), r = tt(r), s = tt(s)) : (i = v, s = g, n = r = 0), (T && !~(c + "").indexOf("px") || S && !~(h + "").indexOf("px")) && (T = un(y, "x", c, "px"), S = un(y, "y", h, "px")), (_ || m || b || w) && (T = tt(T + _ - (_ * i + m * r) + b), S = tt(S + m - (_ * n + m * s) + w)), (l || u) && (o = y.getBBox(), T = tt(T + l / 100 * o.width), S = tt(S + u / 100 * o.height)), o = "matrix(" + i + "," + n + "," + r + "," + s + "," + T + "," + S + ")", y.setAttribute("transform", o), k && (y.style[Ki] = o) },
                Mn = function(t, e, i, n, r, s) { var o, a, l = b(r),
                        u = parseFloat(r) * (l && ~r.indexOf("rad") ? Mi : 1),
                        c = s ? u * s : u - n,
                        h = n + c + "deg"; return l && (o = r.split("_")[1], "short" === o && (c %= 360) !== c % 180 && (c += c < 0 ? 360 : -360), "cw" === o && c < 0 ? c = (c + 36e9) % 360 - 360 * ~~(c / 360) : "ccw" === o && c > 0 && (c = (c - 36e9) % 360 - 360 * ~~(c / 360))), t._pt = a = new Ke(t._pt, e, i, n, c, Fi), a.e = h, a.u = "deg", t._props.push(i), a },
                Pn = function(t, e, i) { var n, r, s, o, a, l, u, c, h = si.style,
                        f = i._gsap;
                    h.cssText = getComputedStyle(i).cssText + ";position:absolute;display:block;", h[Ki] = e, ei.body.appendChild(si), n = kn(si, 1); for (r in Ei) s = f[r], o = n[r], s !== o && "perspective" !== r && (u = Dt(s), c = Dt(o), a = u !== c ? un(i, r, s, c) : parseFloat(s), l = parseFloat(o), t._pt = new Ke(t._pt, f, r, a, l - a, Ri), t._pt.u = c, t._props.push(r));
                    ei.body.removeChild(si) },
                An = { name: "css", register: tn, targetTest: function(t) { return t.style && t.nodeType }, init: function(t, e, i, n, r) { var s, o, a, l, u, c, f, d, p, v, g, y, _, m, b, w = this._props,
                            k = t.style;
                        ni || tn(); for (f in e)
                            if ("autoRound" !== f && (o = e[f], !X[f] || !Me(f, e, i, n, t, r)))
                                if (u = typeof o, c = vn[f], "function" === u && (o = o.call(i, n, t, r), u = typeof o), "string" === u && ~o.indexOf("random(") && (o = Kt(o)), c) c(this, t, f, o, i) && (b = 1);
                                else if ("--" === f.substr(0, 2)) this.add(k, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", o + "", n, r, 0, 0, f);
                        else { if (s = cn(t, f), l = parseFloat(s), v = "string" === u && "=" === o.charAt(1) ? +(o.charAt(0) + "1") : 0, v && (o = o.substr(2)), a = parseFloat(o), f in Bi && ("autoAlpha" === f && (1 === l && "hidden" === cn(t, "visibility") && a && (l = 0), an(this, k, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== f && "transform" !== f && (f = Bi[f], ~f.indexOf(",") && (f = f.split(",")[0]))), g = f in Ei)
                                if (y || (_ = t._gsap, m = !1 !== e.smoothOrigin && _.smooth, y = this._pt = new Ke(this._pt, k, Ki, 0, 1, _.renderTransform, _, 0, -1), y.dep = 1), "scale" === f) this._pt = new Ke(this._pt, _, "scaleY", _.scaleY, v ? v * a : a - _.scaleY), w.push("scaleY", f), f += "X";
                                else { if ("transformOrigin" === f) { o = dn(o), _.svg ? wn(t, o, 0, m, 0, this) : (p = parseFloat(o.split(" ")[2]), p !== _.zOrigin && an(this, _, "zOrigin", _.zOrigin, p), an(this, k, f, Tn(s), Tn(o))); continue } if ("svgOrigin" === f) { wn(t, o, 1, m, 0, this); continue } if (f in yn) { Mn(this, _, f, l, o, v); continue } if ("smoothOrigin" === f) { an(this, _, "smooth", _.smooth, o); continue } if ("force3D" === f) { _[f] = o; continue } if ("transform" === f) { Pn(this, o, t); continue } }
                            else f in k || (f = Ji(f) || f); if (g || (a || 0 === a) && (l || 0 === l) && !Li.test(o) && f in k) d = (s + "").substr((l + "").length), p = (o + "").substr((a + "").length) || (f in h.units ? h.units[f] : d), d !== p && (l = un(t, f, s, p)), this._pt = new Ke(this._pt, g ? _ : k, f, l, v ? v * a : a - l, "px" !== p || !1 === e.autoRound || g ? Ri : Ii), this._pt.u = p || 0, d !== p && (this._pt.b = s, this._pt.r = zi);
                            else if (f in k) hn.call(this, t, f, s, o);
                            else { if (!(f in t)) { z(f, o); continue }
                                this.add(t, f, t[f], o, n, r) }
                            w.push(f) }
                        b && We(this) }, get: cn, aliases: Bi, getSetter: function(t, e, i) { return e in Ei && e !== Gi && (t._gsap.x || cn(t, "x")) ? i && oi === i ? "scale" === e ? Xi : qi : (oi = i || {}) && ("scale" === e ? Ui : Wi) : t.style && !T(t.style[e]) ? Yi : ~e.indexOf("-") ? Vi : Ie(t, e) } };
            Je.utils.checkPrefix = Ji,
                function(t, e, i, n) { var r = J("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + e + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) { Ei[t] = 1 });
                    J(e, function(t) { h.units[t] = "deg", yn[t] = 1 }), Bi[r[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + e, J("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,9:rotateX,10:rotateY", function(t) { var e = t.split(":");
                        Bi[e[1]] = r[e[0]] }) }(0, "rotation,rotationX,rotationY,skewX,skewY"), J("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) { h.units[t] = "px" }), Je.registerPlugin(An);
            var Cn = Je.registerPlugin(An) || Je;
            t.Back = bi, t.Bounce = ki, t.CSSPlugin = An, t.Circ = Oi, t.Cubic = vi, t.Elastic = mi, t.Expo = Si, t.Linear = di, t.Power0 = li, t.Power1 = ui, t.Power2 = ci, t.Power3 = hi, t.Power4 = fi, t.Quad = pi, t.Quart = gi, t.Quint = yi, t.Sine = Ti, t.SteppedEase = wi, t.Strong = _i, t.TimelineLite = Te, t.TimelineMax = Te, t.TweenLite = Le, t.TweenMax = Le, t.default = Cn, t.gsap = Cn, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", { value: !0 }) : delete window.default
        })
    }, {}],
    16: [function(t, e, i) {
        (function(t) {
            ! function(t, n) { "object" == typeof i && void 0 !== e ? e.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self, t.LocomotiveScroll = n()) }(this, function() {
                "use strict";

                function e(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                function i(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }

                function n(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t }

                function r(t, e, i) { return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t }

                function s(t, e) { var i = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), i.push.apply(i, n) } return i }

                function o(t) { for (var e = 1; e < arguments.length; e++) { var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? s(i, !0).forEach(function(e) { r(t, e, i[e]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : s(i).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e)) }) } return t }

                function a(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && u(t, e) }

                function l(t) { return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

                function u(t, e) { return (u = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

                function c(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

                function h(t, e) { return !e || "object" != typeof e && "function" != typeof e ? c(t) : e }

                function f(t, e) { for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = l(t));); return t }

                function d(t, e, i) { return (d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) { var n = f(t, e); if (n) { var r = Object.getOwnPropertyDescriptor(n, e); return r.get ? r.get.call(i) : r.value } })(t, e, i || t) }

                function p(t) { if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(t) }

                function v() {}

                function g(t, e) { return function() { return t.apply(e, arguments) } }

                function y(t) { L(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = E({ mouseMultiplier: 1, touchMultiplier: 2, firefoxMultiplier: 15, keyStep: 120, preventTouch: !1, unpreventTouchClass: "vs-touchmove-allowed", limitInertia: !1, useKeyboard: !0, useTouch: !0 }, t), this.options.limitInertia && (this._lethargy = new B), this._emitter = new M, this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = { passive: this.options.passive }) }

                function _(t, e, i) { return (1 - i) * t + i * e }

                function m(t) { var e = {}; if (window.getComputedStyle) { var i = getComputedStyle(t),
                            n = i.transform || i.webkitTransform || i.mozTransform,
                            r = n.match(/^matrix3d\((.+)\)$/); return r ? parseFloat(r[1].split(", ")[13]) : (r = n.match(/^matrix\((.+)\)$/), e.x = r ? parseFloat(r[1].split(", ")[4]) : 0, e.y = r ? parseFloat(r[1].split(", ")[5]) : 0, e) } }

                function b(t) { for (var e = []; t && t !== document; t = t.parentNode) e.push(t); return e }
                var w = { el: document, elMobile: document, name: "scroll", offset: 0, repeat: !1, smooth: !1, smoothMobile: !1, direction: "vertical", inertia: 1, class: "is-inview", scrollbarClass: "c-scrollbar", scrollingClass: "has-scroll-scrolling", draggingClass: "has-scroll-dragging", smoothClass: "has-scroll-smooth", initClass: "has-scroll-init", getSpeed: !1, getDirection: !1, firefoxMultiplier: 50, touchMultiplier: 2 },
                    k = function() {
                        function t() { var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e(this, t), window.scrollTo(0, 0), Object.assign(this, w, i), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowMiddle = this.windowHeight / 2, this.els = [], this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = { scroll: { x: 0, y: 0 }, limit: this.html.offsetHeight }, this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1) } return n(t, [{ key: "init", value: function() { this.initEvents() } }, { key: "checkScroll", value: function() { this.dispatchScroll() } }, { key: "checkResize", value: function() {} }, { key: "initEvents", value: function() { var t = this;
                                this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach(function(e) { e.addEventListener("click", t.setScrollTo, !1) }) } }, { key: "setScrollTo", value: function(t) { t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))) } }, { key: "addElements", value: function() {} }, { key: "detectElements", value: function(t) { var e = this,
                                    i = this.instance.scroll.y,
                                    n = i + this.windowHeight;
                                this.els.forEach(function(r, s) {!r || r.inView && !t || n >= r.top && i < r.bottom && e.setInView(r, s), r && r.inView && (n < r.top || i > r.bottom) && e.setOutOfView(r, s) }), this.els = this.els.filter(function(t, e) { return null !== t }), this.hasScrollTicking = !1 } }, { key: "setInView", value: function(t, e) { this.els[e].inView = !0, t.el.classList.add(t.class), t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1)), t.repeat || t.speed || t.sticky || (!t.call || t.call && this.hasCallEventSet) && (this.els[e] = null) } }, { key: "setOutOfView", value: function(t, e) {
                                (t.repeat || void 0 !== t.speed) && (this.els[e].inView = !1), t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"), t.repeat && t.el.classList.remove(t.class) } }, { key: "dispatchCall", value: function(t, e) { this.callWay = e, this.callValue = t.call.split(",").map(function(t) { return t.trim() }), this.callObj = t, 1 == this.callValue.length && (this.callValue = this.callValue[0]); var i = new Event(this.namespace + "call");
                                this.el.dispatchEvent(i) } }, { key: "dispatchScroll", value: function() { var t = new Event(this.namespace + "scroll");
                                this.el.dispatchEvent(t) } }, { key: "setEvents", value: function(t, e) { this.listeners[t] || (this.listeners[t] = []); var i = this.listeners[t];
                                i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0)) } }, { key: "unsetEvents", value: function(t, e) { if (this.listeners[t]) { var i = this.listeners[t],
                                        n = i.indexOf(e);
                                    n < 0 || (i.splice(n, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1)) } } }, { key: "checkEvent", value: function(t) { var e = this,
                                    i = t.type.replace(this.namespace, ""),
                                    n = this.listeners[i];
                                n && 0 !== n.length && n.forEach(function(t) { switch (i) {
                                        case "scroll":
                                            return t(e.instance);
                                        case "call":
                                            return t(e.callValue, e.callWay, e.callObj);
                                        default:
                                            return t() } }) } }, { key: "startScroll", value: function() {} }, { key: "stopScroll", value: function() {} }, { key: "setScroll", value: function(t, e) { this.instance.scroll = { x: 0, y: 0 } } }, { key: "destroy", value: function() { var t = this;
                                window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach(function(e) { t.el.removeEventListener(t.namespace + e, t.checkEvent, !1) }), this.listeners = {}, this.scrollToEls.forEach(function(e) { e.removeEventListener("click", t.setScrollTo, !1) }) } }]), t }(),
                    T = function(t) {
                        function i() { var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return e(this, i), t = h(this, l(i).call(this, n)), window.addEventListener("scroll", t.checkScroll, !1), t } return a(i, t), n(i, [{ key: "init", value: function() { this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), d(l(i.prototype), "init", this).call(this) } }, { key: "checkScroll", value: function() { var t = this;
                                d(l(i.prototype), "checkScroll", this).call(this), this.instance.scroll.y = window.pageYOffset, this.els.length && (this.hasScrollTicking || (requestAnimationFrame(function() { t.detectElements() }), this.hasScrollTicking = !0)) } }, { key: "checkResize", value: function() { var t = this;
                                this.els.length && (this.windowHeight = window.innerHeight, this.hasScrollTicking || (requestAnimationFrame(function() { t.updateElements() }), this.hasScrollTicking = !0)) } }, { key: "addElements", value: function() { var t = this;
                                this.els = [], this.el.querySelectorAll("[data-" + this.name + "]").forEach(function(e, i) { var n = e.dataset[t.name + "Class"] || t.class,
                                        r = e.getBoundingClientRect().top + t.instance.scroll.y,
                                        s = r + e.offsetHeight,
                                        o = parseInt(e.dataset[t.name + "Offset"]) || parseInt(t.offset),
                                        a = e.dataset[t.name + "Repeat"],
                                        l = e.dataset[t.name + "Call"];
                                    a = "false" != a && (void 0 != a || t.repeat); var u = { el: e, id: i, class: n, top: r + o, bottom: s, offset: o, repeat: a, inView: !1, call: l };
                                    t.els.push(u) }) } }, { key: "updateElements", value: function() { var t = this;
                                this.els.forEach(function(e, i) { var n = e.el.getBoundingClientRect().top + t.instance.scroll.y,
                                        r = n + e.el.offsetHeight;
                                    t.els[i].top = n + e.offset, t.els[i].bottom = r }), this.hasScrollTicking = !1 } }, { key: "scrollTo", value: function(t, e) { var i, n = e ? parseInt(e) : 0; "string" == typeof t ? "top" === t ? i = this.html : "bottom" === t ? n = this.html.offsetHeight - window.innerHeight : i = document.querySelectorAll(t)[0] : t.target || (i = t), i && (n = i.getBoundingClientRect().top + n), n += this.instance.scroll.y, window.scrollTo({ top: n, behavior: "smooth" }) } }, { key: "update", value: function() { this.addElements(), this.detectElements() } }, { key: "destroy", value: function() { d(l(i.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1) } }]), i }(k),
                    S = Object.getOwnPropertySymbols,
                    O = Object.prototype.hasOwnProperty,
                    x = Object.prototype.propertyIsEnumerable,
                    E = function() { try { if (!Object.assign) return !1; var t = new String("abc"); if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1; for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i; if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) { return e[t] }).join("")) return !1; var n = {}; return "abcdefghijklmnopqrst".split("").forEach(function(t) { n[t] = t }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("") } catch (t) { return !1 } }() ? Object.assign : function(t, e) { for (var i, n, r = p(t), s = 1; s < arguments.length; s++) { i = Object(arguments[s]); for (var o in i) O.call(i, o) && (r[o] = i[o]); if (S) { n = S(i); for (var a = 0; a < n.length; a++) x.call(i, n[a]) && (r[n[a]] = i[n[a]]) } } return r };
                v.prototype = { on: function(t, e, i) { var n = this.e || (this.e = {}); return (n[t] || (n[t] = [])).push({ fn: e, ctx: i }), this }, once: function(t, e, i) {
                        function n() { r.off(t, n), e.apply(i, arguments) } var r = this; return n._ = e, this.on(t, n, i) }, emit: function(t) { var e = [].slice.call(arguments, 1),
                            i = ((this.e || (this.e = {}))[t] || []).slice(),
                            n = 0,
                            r = i.length; for (n; n < r; n++) i[n].fn.apply(i[n].ctx, e); return this }, off: function(t, e) { var i = this.e || (this.e = {}),
                            n = i[t],
                            r = []; if (n && e)
                            for (var s = 0, o = n.length; s < o; s++) n[s].fn !== e && n[s].fn._ !== e && r.push(n[s]); return r.length ? i[t] = r : delete i[t], this } };
                var M = v,
                    P = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
                    A = function(t, e) { return e = { exports: {} }, t(e, e.exports), e.exports }(function(t, e) {
                        (function() { var t;
                            t = null !== e ? e : this, t.Lethargy = function() {
                                function t(t, e, i, n) { this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != n ? n : 150, this.lastUpDeltas = function() { var t, e, i; for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null); return i }.call(this), this.lastDownDeltas = function() { var t, e, i; for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null); return i }.call(this), this.deltasTimestamp = function() { var t, e, i; for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) i.push(null); return i }.call(this) } return t.prototype.check = function(t) { var e; return t = t.originalEvent || t, null != t.wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1)) }, t.prototype.isInertia = function(t) { var e, i, n, r, s, o, a; return e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas, null === e[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (n = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), a = n.reduce(function(t, e) { return t + e }), s = i.reduce(function(t, e) { return t + e }), o = a / n.length, r = s / i.length, Math.abs(o) < Math.abs(r * this.tolerance) && this.sensitivity < Math.abs(r) && t) }, t.prototype.showLastUpDeltas = function() { return this.lastUpDeltas }, t.prototype.showLastDownDeltas = function() { return this.lastDownDeltas }, t }() }).call(P) }),
                    C = function() { return { hasWheelEvent: "onwheel" in document, hasMouseWheelEvent: "onmousewheel" in document, hasTouch: "ontouchstart" in document, hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1, hasPointer: !!window.navigator.msPointerEnabled, hasKeyDown: "onkeydown" in document, isFirefox: navigator.userAgent.indexOf("Firefox") > -1 } }(),
                    D = Object.prototype.toString,
                    j = Object.prototype.hasOwnProperty,
                    L = function(t) { if (!t) return console.warn("bindAll requires at least one argument."); var e = Array.prototype.slice.call(arguments, 1); if (0 === e.length)
                            for (var i in t) j.call(t, i) && "function" == typeof t[i] && "[object Function]" == D.call(t[i]) && e.push(i); for (var n = 0; n < e.length; n++) { var r = e[n];
                            t[r] = g(t[r], t) } },
                    B = A.Lethargy,
                    R = "virtualscroll",
                    F = y,
                    z = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SPACE: 32 };
                y.prototype._notify = function(t) { var e = this._event;
                    e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(R, { x: e.x, y: e.y, deltaX: e.deltaX, deltaY: e.deltaY, originalEvent: t }) }, y.prototype._onWheel = function(t) { var e = this.options; if (!this._lethargy || !1 !== this._lethargy.check(t)) { var i = this._event;
                        i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, C.isFirefox && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier, i.deltaY *= e.firefoxMultiplier), i.deltaX *= e.mouseMultiplier, i.deltaY *= e.mouseMultiplier, this._notify(t) } }, y.prototype._onMouseWheel = function(t) { if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) { var e = this._event;
                        e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t) } }, y.prototype._onTouchStart = function(t) { var e = t.targetTouches ? t.targetTouches[0] : t;
                    this.touchStartX = e.pageX, this.touchStartY = e.pageY }, y.prototype._onTouchMove = function(t) { var e = this.options;
                    e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault(); var i = this._event,
                        n = t.targetTouches ? t.targetTouches[0] : t;
                    i.deltaX = (n.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (n.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = n.pageX, this.touchStartY = n.pageY, this._notify(t) }, y.prototype._onKeyDown = function(t) { var e = this._event;
                    e.deltaX = e.deltaY = 0; var i = window.innerHeight - 40; switch (t.keyCode) {
                        case z.LEFT:
                        case z.UP:
                            e.deltaY = this.options.keyStep; break;
                        case z.RIGHT:
                        case z.DOWN:
                            e.deltaY = -this.options.keyStep; break;
                        case t.shiftKey:
                            e.deltaY = i; break;
                        case z.SPACE:
                            e.deltaY = -i; break;
                        default:
                            return }
                    this._notify(t) }, y.prototype._bind = function() { C.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), C.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), C.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), C.hasPointer && C.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), C.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown) }, y.prototype._unbind = function() { C.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), C.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), C.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), C.hasPointer && C.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), C.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown) }, y.prototype.on = function(t, e) { this._emitter.on(R, t, e); var i = this._emitter.e;
                    i && i[R] && 1 === i[R].length && this._bind() }, y.prototype.off = function(t, e) { this._emitter.off(R, t, e); var i = this._emitter.e;
                    (!i[R] || i[R].length <= 0) && this._unbind() }, y.prototype.reset = function() { var t = this._event;
                    t.x = 0, t.y = 0 }, y.prototype.destroy = function() { this._emitter.off(), this._unbind() };
                var I = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SPACE: 32, TAB: 9 },
                    N = function(t) {
                        function i() { var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return e(this, i), t = h(this, l(i).call(this, n)), t.inertia = .1 * t.inertia, t.isScrolling = !1, t.isDraggingScrollbar = !1, t.isTicking = !1, t.hasScrollTicking = !1, t.parallaxElements = [], t.inertiaRatio = 1, t.stop = !1, t.checkKey = t.checkKey.bind(c(t)), window.addEventListener("keydown", t.checkKey, !1), t }
                        return a(i, t), n(i, [{ key: "init", value: function() { var t = this;
                                this.html.classList.add(this.smoothClass), this.instance = o({ delta: { x: 0, y: 0 } }, this.instance), this.vs = new F({ el: this.el, mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4, firefoxMultiplier: this.firefoxMultiplier, touchMultiplier: this.touchMultiplier, useKeyboard: !1, passive: !0 }), this.vs.on(function(e) { t.stop || (t.isTicking || t.isDraggingScrollbar || (requestAnimationFrame(function() { t.isScrolling || t.startScrolling(), t.updateDelta(e) }), t.isTicking = !0), t.isTicking = !1) }), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.detectElements(), this.transformElements(!0), d(l(i.prototype), "init", this).call(this) } }, { key: "setScrollLimit", value: function() { this.instance.limit = this.el.offsetHeight - this.windowHeight } }, { key: "startScrolling", value: function() { this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass) } }, { key: "stopScrolling", value: function() { this.isScrolling = !1, this.inertiaRatio = 1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass) } }, {
                            key: "checkKey",
                            value: function(t) {
                                var e = this;
                                switch (t.keyCode) {
                                    case I.TAB:
                                        setTimeout(function() { document.documentElement.scrollTop = 0, document.body.scrollTop = 0, document.activeElement instanceof HTMLBodyElement || e.scrollTo(document.activeElement, -window.innerHeight / 2) }, 0);
                                        break;
                                    case I.UP:
                                        this.instance.delta.y -= 240;
                                        break;
                                    case I.DOWN:
                                        this.instance.delta.y += 240;
                                        break;
                                    case I.SPACE:
                                        document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || (t.shiftKey ? this.instance.delta.y -= window.innerHeight : this.instance.delta.y += window.innerHeight);
                                        break;
                                    default:
                                        return
                                }
                                this.instance.delta.y < 0 && (this.instance.delta.y = 0), this.instance.delta.y > this.instance.limit && (this.instance.delta.y = this.instance.limit), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                            }
                        }, { key: "checkScroll", value: function() { var t = this; if (this.isScrolling || this.isDraggingScrollbar) { this.hasScrollTicking || (requestAnimationFrame(function() { return t.checkScroll() }), this.hasScrollTicking = !0); var e = Math.abs(this.instance.delta.y - this.instance.scroll.y);
                                    (e < .5 && 0 != this.instance.delta.y || e < .5 && 0 == this.instance.delta.y) && this.stopScrolling(), this.updateScroll(); for (var n = this.sections.length - 1; n >= 0; n--) this.sections[n].persistent || this.instance.scroll.y > this.sections[n].offset && this.instance.scroll.y < this.sections[n].limit ? (this.transform(this.sections[n].el, 0, -this.instance.scroll.y), this.sections[n].el.style.visibility = "visible", this.sections[n].inView = !0) : (this.sections[n].el.style.visibility = "hidden", this.sections[n].inView = !1, this.transform(this.sections[n].el, 0, 0));
                                    this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.timestamp = Date.now()), this.detectElements(), this.transformElements(); var r = this.instance.scroll.y / this.instance.limit * this.scrollBarLimit;
                                    this.transform(this.scrollbarThumb, 0, r), d(l(i.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1 } } }, { key: "checkResize", value: function() { this.windowHeight = window.innerHeight, this.windowMiddle = this.windowHeight / 2, this.update() } }, { key: "updateDelta", value: function(t) { this.instance.delta.y -= t.deltaY, this.instance.delta.y < 0 && (this.instance.delta.y = 0), this.instance.delta.y > this.instance.limit && (this.instance.delta.y = this.instance.limit) } }, { key: "updateScroll", value: function(t) { this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll.y = _(this.instance.scroll.y, this.instance.delta.y, this.inertia * this.inertiaRatio) : this.instance.scroll.y = this.instance.delta.y } }, { key: "addDirection", value: function() { this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up") } }, { key: "addSpeed", value: function() { this.instance.delta.y != this.instance.scroll.y ? this.instance.speed = (this.instance.delta.y - this.instance.scroll.y) / (Date.now() - this.timestamp) : this.instance.speed = 0 } }, { key: "initScrollBar", value: function() { this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), document.body.append(this.scrollbar), this.scrollbarHeight = this.scrollbar.getBoundingClientRect().height, this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit + this.scrollbarHeight), "px"), this.scrollBarLimit = this.scrollbarHeight - this.scrollbarThumb.getBoundingClientRect().height, this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar) } }, { key: "reinitScrollBar", value: function() { this.scrollbarHeight = this.scrollbar.getBoundingClientRect().height, this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / this.instance.limit, "px"), this.scrollBarLimit = this.scrollbarHeight - this.scrollbarThumb.getBoundingClientRect().height } }, { key: "destroyScrollBar", value: function() { this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove() } }, { key: "getScrollBar", value: function(t) { this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass) } }, { key: "releaseScrollBar", value: function(t) { this.isDraggingScrollbar = !1, this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass) } }, { key: "moveScrollBar", value: function(t) { var e = this;!this.isTicking && this.isDraggingScrollbar && (requestAnimationFrame(function() { var i = 100 * t.clientY / e.scrollbarHeight * e.instance.limit / 100;
                                    i > 0 && i < e.instance.limit && (e.instance.delta.y = i) }), this.isTicking = !0), this.isTicking = !1 } }, { key: "addElements", value: function() { var t = this;
                                this.els = [], this.parallaxElements = [], this.sections.forEach(function(e, i) { t.sections[i].el.querySelectorAll("[data-".concat(t.name, "]")).forEach(function(e, n) { var r, s, o = e.dataset[t.name + "Class"] || t.class,
                                            a = e.dataset[t.name + "Repeat"],
                                            l = e.dataset[t.name + "Call"],
                                            u = e.dataset[t.name + "Position"],
                                            c = e.dataset[t.name + "Delay"],
                                            h = e.dataset[t.name + "Direction"],
                                            f = "string" == typeof e.dataset[t.name + "Sticky"],
                                            d = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10,
                                            p = "string" == typeof e.dataset[t.name + "Offset"] && e.dataset[t.name + "Offset"].split(","),
                                            v = e.dataset[t.name + "Target"];
                                        s = void 0 !== v ? document.querySelector("".concat(v)) : e, r = t.sections[i].inView ? s.getBoundingClientRect().top + t.instance.scroll.y - m(s).y : s.getBoundingClientRect().top - m(t.sections[i].el).y - m(s).y; var g = r + s.offsetHeight,
                                            y = (g - r) / 2 + r; if (f) { var _ = e.getBoundingClientRect().top - r;
                                            r += window.innerHeight, g = r + s.offsetHeight - window.innerHeight - e.offsetHeight - _, y = (g - r) / 2 + r }
                                        a = "false" != a && (void 0 != a || t.repeat); var b = [0, 0]; if (p)
                                            for (var n = 0; n < p.length; n++) p[n].includes("%") ? b[n] = parseInt(p[n].replace("%", "") * t.windowHeight / 100) : b[n] = parseInt(p[n]); var w = { el: e, id: n, class: o, top: r + b[0], middle: y, bottom: g - b[1], offset: p, repeat: a, inView: !1, call: l, speed: d, delay: c, position: u, target: s, direction: h, sticky: f };
                                        t.els.push(w), (!1 !== d || f) && t.parallaxElements.push(w) }) }) } }, { key: "addSections", value: function() { var t = this;
                                this.sections = []; var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                                0 === e.length && (e = [this.el]), e.forEach(function(e, i) { var n = e.getBoundingClientRect().top - 1.5 * window.innerHeight - m(e).y,
                                        r = n + e.getBoundingClientRect().height + 2 * window.innerHeight,
                                        s = "string" == typeof e.dataset[t.name + "Persistent"],
                                        o = !1;
                                    t.instance.scroll.y >= n && t.instance.scroll.y <= r && (o = !0); var a = { el: e, offset: n, limit: r, inView: o, persistent: s };
                                    t.sections[i] = a }) } }, { key: "transform", value: function(t, e, i, n) { var r; if (n) { var s = m(t),
                                        o = _(s.x, e, n),
                                        a = _(s.y, i, n);
                                    r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(o, ",").concat(a, ",0,1)") } else r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)");
                                t.style.webkitTransform = r, t.style.msTransform = r, t.style.transform = r } }, { key: "transformElements", value: function(t) { var e = this,
                                    i = this.instance.scroll.y + this.windowHeight,
                                    n = this.instance.scroll.y + this.windowMiddle;
                                this.parallaxElements.forEach(function(r, s) { var o = !1; if (t && (o = 0), r.inView) switch (r.position) {
                                        case "top":
                                            o = e.instance.scroll.y * -r.speed; break;
                                        case "elementTop":
                                            o = (i - r.top) * -r.speed; break;
                                        case "bottom":
                                            o = (e.instance.limit - i + e.windowHeight) * r.speed; break;
                                        default:
                                            o = (n - r.middle) * -r.speed }
                                    r.sticky && (o = r.inView ? e.instance.scroll.y - r.top + window.innerHeight : e.instance.scroll.y < r.top - window.innerHeight && e.instance.scroll.y < r.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > r.bottom && e.instance.scroll.y > r.bottom + 100 && r.bottom - r.top + window.innerHeight), !1 !== o && ("horizontal" === r.direction ? e.transform(r.el, o, 0, !t && r.delay) : e.transform(r.el, 0, o, !t && r.delay)) }) } }, { key: "scrollTo", value: function(t, e) { var i, n = this,
                                    r = e ? parseInt(e) : 0; if ("string" == typeof t ? "top" === t ? r = 0 : "bottom" === t ? r = this.instance.limit : i = document.querySelectorAll(t)[0] : t.target || (i = t), i) { var s = i.getBoundingClientRect(),
                                        o = s.top + this.instance.scroll.y,
                                        a = b(i),
                                        l = a.find(function(t) { return n.sections.find(function(e) { return e.el == t }) }),
                                        u = 0;
                                    l && (u = m(l).y), r = o + r - u }
                                r -= this.instance.scroll.y, this.instance.delta.y = Math.min(r, this.instance.limit), this.inertiaRatio = Math.min(4e3 / Math.abs(this.instance.delta.y - this.instance.scroll.y), .8), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass) } }, { key: "update", value: function() { this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar() } }, { key: "startScroll", value: function() { this.stop = !1 } }, { key: "stopScroll", value: function() { this.stop = !0 } }, { key: "setScroll", value: function(t, e) { this.instance = { scroll: { x: t, y: e }, delta: { x: t, y: e } } } }, { key: "destroy", value: function() { d(l(i.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1) } }]), i
                    }(k);
                return function() {
                    function t() { var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e(this, t), this.options = i, Object.assign(this, w, i), this.init() } return n(t, [{ key: "init", value: function() { this.smoothMobile || (this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1), !0 !== this.smooth || this.isMobile ? this.scroll = new T(this.options) : this.scroll = new N(this.options), this.scroll.init(), window.location.hash && this.scroll.scrollTo(window.location.hash) } }, { key: "update", value: function() { this.scroll.update() } }, { key: "start", value: function() { this.scroll.startScroll() } }, { key: "stop", value: function() { this.scroll.stopScroll() } }, { key: "scrollTo", value: function(t, e) { this.scroll.scrollTo(t, e) } }, { key: "setScroll", value: function(t, e) { this.scroll.setScroll(t, e) } }, { key: "on", value: function(t, e) { this.scroll.setEvents(t, e) } }, { key: "off", value: function(t, e) { this.scroll.unsetEvents(t, e) } }, { key: "destroy", value: function() { this.scroll.destroy() } }]), t }()
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}]
}, {}, [9]);