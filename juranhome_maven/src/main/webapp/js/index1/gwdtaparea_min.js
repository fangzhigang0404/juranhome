-
function() {
    "use strict";
    var b;
    var d = function(a, c, g) {
        var e;
        g ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, !0, !0, g)) : (e = document.createEvent("Event"), e.initEvent(a, !0, !0));
        c.dispatchEvent(e);
        return e
    };
    var f = [],
    h = function(a) {
        a = f.indexOf(a);
        0 <= a && f.splice(a, 1)
    };
    document.addEventListener("click",
    function(a) {
        for (var c = 0; c < f.length; c++) if (25 > Math.abs(a.clientX - f[c].m) && 25 > Math.abs(a.clientY - f[c].o) || 25 > Math.abs(a.screenX - f[c].A) && 25 > Math.abs(a.screenY - f[c].B)) f.splice(c, 1),
        a.stopPropagation(),
        a.preventDefault()
    },
    !0);
    var k = function() {};
    goog.inherits(k, HTMLElement);
    b = k.prototype;
    b.createdCallback = function() {
        this.l = this.j = 0;
        this.f = this.b = this.g = this.c = null;
        this.a = !0;
        this.h = this.s.bind(this)
    };
    b.attachedCallback = function() {
        this.b || (this.c = this.i.bind(this), this.g = this.w.bind(this), this.b = this.v.bind(this), this.f = this.u.bind(this));
        this.addEventListener("click", this.c, !1);
        this.addEventListener("touchstart", this.g, !1);
        this.addEventListener("action", this.h, !1)
    };
    b.detachedCallback = function() {
        this.removeEventListener("click", this.c, !1);
        this.removeEventListener("touchstart", this.g, !1);
        this.removeEventListener("action", this.h, !1)
    };
    b.i = function() {
        this.a && d("action", this);
        this.a = !0
    };
    b.w = function(a) {
        this.addEventListener("touchmove", this.b, !1);
        this.addEventListener("touchend", this.f, !1);
        a = a.touches[0];
        this.j = a.clientX;
        this.l = a.clientY
    };
    b.u = function(a) {
        this.i();
        this.removeEventListener("touchmove", this.b, !1);
        this.removeEventListener("touchend", this.f, !1);
        a = a.changedTouches[0];
        a = {
            m: a.clientX,
            o: a.clientY,
            A: a.screenX,
            B: a.screenY
        };
        f.push(a);
        setTimeout(h.bind(null, a), 2500)
    };
    b.v = function(a) {
        a = a.touches[0];
        this.a = this.a && 10 >= Math.abs(this.j - a.clientX) && 10 >= Math.abs(this.l - a.clientY)
    };
    b.s = function() {
        var a = this.getAttribute("exit-override-url");
        a && !d("tapareaexit", this, {
            url: a
        }).detail.handled && window.open(a)
    };
    b.attributeChangedCallback = null;
    document.registerElement("gwd-taparea", {
        prototype: k.prototype
    });
} ()