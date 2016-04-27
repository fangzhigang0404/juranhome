(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    var e = /(\d|\.)+/g,
    t = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        fuchsia: [255, 0, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0]
    },
    n = function(e, t, n) {
        return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e,
        0 | 255 * (1 > 6 * e ? t + 6 * (n - t) * e: .5 > e ? n: 2 > 3 * e ? t + 6 * (n - t) * (2 / 3 - e) : t) + .5
    },
    r = function(r) {
        if ("" === r || null == r || "none" === r) return t.transparent;
        if (t[r]) return t[r];
        if ("number" == typeof r) return [r >> 16, 255 & r >> 8, 255 & r];
        if ("#" === r.charAt(0)) return 4 === r.length && (r = "#" + r.charAt(1) + r.charAt(1) + r.charAt(2) + r.charAt(2) + r.charAt(3) + r.charAt(3)),
        r = parseInt(r.substr(1), 16),
        [r >> 16, 255 & r >> 8, 255 & r];
        if ("hsl" === r.substr(0, 3)) {
            r = r.match(e);
            var s = Number(r[0]) % 360 / 360,
            o = Number(r[1]) / 100,
            u = Number(r[2]) / 100,
            a = .5 >= u ? u * (o + 1) : u + o - u * o,
            f = 2 * u - a;
            return r.length > 3 && (r[3] = Number(r[3])),
            r[0] = n(s + 1 / 3, f, a),
            r[1] = n(s, f, a),
            r[2] = n(s - 1 / 3, f, a),
            r
        }
        return r.match(e) || t.transparent
    };
    window._gsDefine.plugin({
        propName: "colorProps",
        priority: -1,
        API: 2,
        init: function(e, t) {
            this._target = e;
            var n, i, o, u;
            for (n in t) o = r(t[n]),
            this._firstPT = u = {
                _next: this._firstPT,
                p: n,
                f: "function" == typeof e[n],
                n: n,
                r: !1
            },
            i = r(u.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n: "get" + n.substr(3)]() : e[n]),
            u.s = Number(i[0]),
            u.c = Number(o[0]) - u.s,
            u.gs = Number(i[1]),
            u.gc = Number(o[1]) - u.gs,
            u.bs = Number(i[2]),
            u.bc = Number(o[2]) - u.bs,
            (u.rgba = i.length > 3 || o.length > 3) && (u.as = 4 > i.length ? 1 : Number(i[3]), u.ac = (4 > o.length ? 1 : Number(o[3])) - u.as),
            u._next && (u._next._prev = u);
            return ! 0
        },
        set: function(e) {
            for (var t, n = this._firstPT; n;) t = (n.rgba ? "rgba(": "rgb(") + (n.s + e * n.c >> 0) + ", " + (n.gs + e * n.gc >> 0) + ", " + (n.bs + e * n.bc >> 0) + (n.rgba ? ", " + (n.as + e * n.ac) : "") + ")",
            n.f ? this._target[n.p](t) : this._target[n.p] = t,
            n = n._next
        }
    })
}),
window._gsDefine && window._gsQueue.pop()(); (function(e) {
    var t = function(n, r) {
        var i = this;
        var s = t.prototype;
        this.categories_ar = r.categories_ar;
        this.buttons_ar = [];
        this.mainHolder_do = null;
        this.selector_do = null;
        this.mainButtonsHolder_do = null;
        this.buttonsHolder_do = null;
        this.arrowW = r.arrowW;
        this.arrowH = r.arrowH;
        this.arrowN_str = r.arrowN_str;
        this.arrowS_str = r.arrowS_str;
        this.selectorLabel_str = r.selectorLabel;
        this.selectorBkColorN_str1 = r.selectorBackgroundNormalColor1;
        this.selectorBkColorS_str1 = r.selectorBackgroundSelectedColor1;
        this.selectorBkColorN_str2 = r.selectorBackgroundNormalColor2;
        this.selectorBkColorS_str2 = r.selectorBackgroundSelectedColor2;
        this.selectorTextColorN_str = r.selectorTextNormalColor;
        this.selectorTextColorS_str = r.selectorTextSelectedColor;
        this.itemBkColorN_str1 = r.buttonBackgroundNormalColor1;
        this.itemBkColorS_str1 = r.buttonBackgroundSelectedColor1;
        this.itemBkColorN_str2 = r.buttonBackgroundNormalColor2;
        this.itemBkColorS_str2 = r.buttonBackgroundSelectedColor2;
        this.itemTextColorN_str = r.buttonTextNormalColor;
        this.itemTextColorS_str = r.buttonTextSelectedColor;
        this.shadowColor_str = r.shadowColor;
        this.position_str = r.position;
        this.finalX;
        this.finalY;
        this.totalButtons = i.categories_ar.length;
        this.curId = r.startAtCategory;
        this.horizontalMargins = r.comboBoxHorizontalMargins;
        this.verticalMargins = r.comboBoxVerticalMargins;
        this.buttonsHolderWidth = 0;
        this.buttonsHolderHeight = 0;
        this.totalWidth = 0;
        this.buttonHeight = 26;
        this.totalButtonsHeight = 0;
        this.sapaceBetweenButtons = 0;
        this.borderRadius = r.comboBoxCornerRadius;
        this.hideMenuTimeOutId_to;
        this.getMaxWidthResizeAndPositionId_to;
        this.isShowed_bl = false;
        this.isOpened_bl = false;
        this.hasPointerEvent_bl = FWDR3DCarUtils.hasPointerEvent;
        this.isMobile_bl = FWDR3DCarUtils.isMobile;
        this.init = function() {
            i.setVisible(false);
            i.setZ(2e5);
            i.setupMainContainers();
            i.getMaxWidthResizeAndPositionId_to = setTimeout(function() {
                i.getMaxWidthResizeAndPosition(),
                i.setButtonsState();
                i.position();
                i.showFirstTime()
            },
            200)
        };
        this.setupMainContainers = function() {
            var e;
            i.mainHolder_do = new FWDR3DCarDisplayObject("div");
            i.mainHolder_do.setOverflow("visible");
            i.addChild(i.mainHolder_do);
            i.mainButtonsHolder_do = new FWDR3DCarDisplayObject("div");
            i.mainButtonsHolder_do.setY(i.buttonHeight);
            i.mainHolder_do.addChild(i.mainButtonsHolder_do);
            i.buttonsHolder_do = new FWDR3DCarDisplayObject("div");
            i.mainButtonsHolder_do.addChild(i.buttonsHolder_do);
            FWDR3DCarComboBoxSelector.setPrototype();
            i.selector_do = new FWDR3DCarComboBoxSelector(i.arrowW, i.arrowH, i.arrowN_str, i.arrowS_str, i.selectorLabel_str, i.selectorBkColorN_str1, i.selectorBkColorS_str1, i.selectorBkColorN_str2, i.selectorBkColorS_str2, i.selectorTextColorN_str, i.selectorTextColorS_str, i.buttonHeight);
            i.mainHolder_do.addChild(i.selector_do);
            i.selector_do.setNormalState(false);
            if (i.borderRadius != 0) {
                i.selector_do.bk_sdo.getStyle().borderTopLeftRadius = i.borderRadius + "px";
                i.selector_do.bk_sdo.getStyle().borderTopRightRadius = i.borderRadius + "px";
                i.selector_do.bk_sdo.getStyle().borderBottomLeftRadius = i.borderRadius + "px";
                i.selector_do.bk_sdo.getStyle().borderBottomRightRadius = i.borderRadius + "px";
                i.getStyle().borderRadius = i.borderRadius + "px"
            }
            i.selector_do.addListener(FWDR3DCarComboBoxSelector.MOUSE_DOWN, i.openMenuHandler);
            for (var t = 0; t < i.totalButtons; t++) {
                FWDR3DCarComboBoxButton.setPrototype();
                e = new FWDR3DCarComboBoxButton(i.categories_ar[t], i.itemBkColorN_str1, i.itemBkColorS_str1, i.itemBkColorN_str2, i.itemBkColorS_str2, i.itemTextColorN_str, i.itemTextColorS_str, t, i.buttonHeight);
                i.buttons_ar[t] = e;
                e.addListener(FWDR3DCarComboBoxButton.MOUSE_DOWN, i.buttonOnMouseDownHandler);
                i.buttonsHolder_do.addChild(e)
            }
            if (i.borderRadius != 0) {
                e.bk_sdo.getStyle().borderBottomLeftRadius = i.borderRadius + "px";
                e.bk_sdo.getStyle().borderBottomRightRadius = i.borderRadius + "px"
            }
        };
        this.buttonOnMouseDownHandler = function(n) {
            i.curId = n.target.id;
            i.setButtonsStateBasedOnId();
            clearTimeout(i.hideMenuTimeOutId_to);
            i.hide(true);
            i.selector_do.enable();
            if (i.isMobile_bl) {
                if (i.hasPointerEvent_bl) {
                    e.removeEventListener("MSPointerDown", i.checkOpenedMenu)
                } else {
                    e.removeEventListener("touchstart", i.checkOpenedMenu)
                }
            } else {
                if (e.addEventListener) {
                    e.removeEventListener("mousemove", i.checkOpenedMenu)
                } else if (document.attachEvent) {
                    document.detachEvent("onmousemove", i.checkOpenedMenu)
                }
            }
            i.dispatchEvent(t.BUTTON_PRESSED, {
                id: i.curId
            })
        };
        this.openMenuHandler = function() {
            if (i.isShowed_bl) return;
            i.selector_do.disable();
            i.show(true);
            i.startToCheckOpenedMenu();
            i.dispatchEvent(t.OPEN)
        };
        this.setButtonsStateBasedOnId = function() {
            for (var e = 0; e < i.totalButtons; e++) {
                button_do = i.buttons_ar[e];
                if (e == i.curId) {
                    button_do.disable()
                } else {
                    button_do.enable()
                }
            }
        };
        this.setValue = function(e) {
            i.curId = e;
            i.setButtonsStateBasedOnId()
        };
        this.startToCheckOpenedMenu = function(t) {
            if (i.isMobile_bl) {
                if (i.hasPointerEvent_bl) {
                    e.addEventListener("MSPointerDown", i.checkOpenedMenu)
                } else {
                    e.addEventListener("touchstart", i.checkOpenedMenu)
                }
            } else {
                if (e.addEventListener) {
                    e.addEventListener("mousemove", i.checkOpenedMenu)
                } else if (document.attachEvent) {
                    document.attachEvent("onmousemove", i.checkOpenedMenu)
                }
            }
        };
        this.checkOpenedMenu = function(t) {
            if (t.preventDefault) t.preventDefault();
            var n = FWDR3DCarUtils.getViewportMouseCoordinates(t);
            if (!FWDR3DCarUtils.hitTest(i.screen, n.screenX, n.screenY)) {
                if (i.isMobile_bl) {
                    i.hide(true);
                    i.selector_do.enable()
                } else {
                    clearTimeout(i.hideMenuTimeOutId_to);
                    i.hideMenuTimeOutId_to = setTimeout(function() {
                        i.hide(true);
                        i.selector_do.enable()
                    },
                    1e3)
                }
                if (i.isMobile_bl) {
                    if (i.hasPointerEvent_bl) {
                        e.removeEventListener("MSPointerDown", i.checkOpenedMenu)
                    } else {
                        e.removeEventListener("touchstart", i.checkOpenedMenu)
                    }
                } else {
                    if (e.addEventListener) {
                        e.removeEventListener("mousemove", i.checkOpenedMenu)
                    } else if (document.attachEvent) {
                        document.detachEvent("onmousemove", i.checkOpenedMenu)
                    }
                }
            } else {
                clearTimeout(i.hideMenuTimeOutId_to)
            }
        };
        i.getMaxWidthResizeAndPosition = function() {
            var e;
            var t;
            var n;
            i.totalWidth = 0;
            i.totalButtonsHeight = 0;
            i.totalWidth = i.selector_do.getMaxTextWidth() + 20;
            for (var r = 0; r < i.totalButtons; r++) {
                e = i.buttons_ar[r];
                if (e.getMaxTextWidth() > i.totalWidth) i.totalWidth = e.getMaxTextWidth()
            }
            for (var r = 0; r < i.totalButtons; r++) {
                e = i.buttons_ar[r];
                e.setY(r * (e.totalHeight + i.sapaceBetweenButtons));
                e.totalWidth = i.totalWidth;
                e.setWidth(i.totalWidth);
                e.centerText()
            }
            i.totalButtonsHeight = e.getY() + e.totalHeight;
            i.setWidth(i.totalWidth);
            i.setHeight(i.buttonHeight);
            i.mainButtonsHolder_do.setWidth(i.totalWidth);
            i.selector_do.totalWidth = i.totalWidth;
            i.selector_do.setWidth(i.totalWidth);
            i.selector_do.centerText();
            i.buttonsHolder_do.setWidth(i.totalWidth);
            i.buttonsHolder_do.setHeight(i.totalButtonsHeight);
            i.hide(false, true)
        };
        this.setButtonsState = function() {
            var e;
            for (var t = 0; t < i.totalButtons; t++) {
                e = i.buttons_ar[t];
                if (t == i.curId) {
                    e.disable(true)
                } else {
                    e.enable(true)
                }
            }
        };
        this.position = function() {
            if (i.position_str == "topleft") {
                i.finalX = Math.max((n.stageWidth - n.originalWidth) / 2 + i.horizontalMargins, i.horizontalMargins);
                i.finalY = i.verticalMargins
            } else if (i.position_str == "topright") {
                i.finalX = Math.min((n.originalWidth - n.stageWidth) / 2 + n.stageWidth - i.totalWidth - i.horizontalMargins, n.stageWidth - i.totalWidth - i.horizontalMargins);
                i.finalY = i.verticalMargins
            }
            if (FWDR3DCarUtils.isAndroid) {
                i.setX(Math.floor(i.finalX));
                i.setY(Math.floor(i.finalY - 1));
                setTimeout(i.posCombobox, 100)
            } else {
                i.posCombobox()
            }
        };
        this.posCombobox = function() {
            i.setX(Math.floor(i.finalX));
            i.setY(Math.floor(i.finalY))
        };
        this.showFirstTime = function() {
            i.setVisible(true);
            if (i.position_str == "topleft" || i.position_str == "topright") {
                i.mainHolder_do.setY( - (i.verticalMargins + i.buttonHeight))
            }
            i.getStyle().boxShadow = "0px 0px 3px " + i.shadowColor_str;
            FWDR3DCarModTweenMax.to(i.mainHolder_do, .8, {
                y: 0,
                ease: Expo.easeInOut
            })
        };
        this.hide = function(e, t) {
            if (!i.isShowed_bl && !t) return;
            FWDR3DCarModTweenMax.killTweensOf(this);
            i.isShowed_bl = false;
            if (i.borderRadius != 0) {
                i.selector_do.bk_sdo.getStyle().borderBottomLeftRadius = i.borderRadius + "px";
                i.selector_do.bk_sdo.getStyle().borderBottomRightRadius = i.borderRadius + "px"
            }
            if (e) {
                FWDR3DCarModTweenMax.to(i.buttonsHolder_do, .6, {
                    y: -i.totalButtonsHeight,
                    ease: Expo.easeInOut
                });
                FWDR3DCarModTweenMax.to(i.mainButtonsHolder_do, .6, {
                    h: 0,
                    ease: Expo.easeInOut
                });
                FWDR3DCarModTweenMax.to(i, .6, {
                    h: i.buttonHeight,
                    ease: Expo.easeInOut
                })
            } else {
                i.buttonsHolder_do.setY(i.buttonHeight - i.totalButtonsHeight);
                i.mainButtonsHolder_do.setHeight(0);
                i.setHeight(i.buttonHeight)
            }
        };
        this.show = function(e, t) {
            if (i.isShowed_bl && !t) return;
            FWDR3DCarModTweenMax.killTweensOf(this);
            i.isShowed_bl = true;
            if (i.borderRadius != 0) {
                i.selector_do.bk_sdo.getStyle().borderBottomLeftRadius = 0 + "px";
                i.selector_do.bk_sdo.getStyle().borderBottomRightRadius = 0 + "px"
            }
            if (e) {
                FWDR3DCarModTweenMax.to(i.buttonsHolder_do, .6, {
                    y: 0,
                    ease: Expo.easeInOut
                });
                FWDR3DCarModTweenMax.to(i.mainButtonsHolder_do, .6, {
                    h: i.totalButtonsHeight + i.buttonHeight,
                    ease: Expo.easeInOut
                });
                FWDR3DCarModTweenMax.to(i, .6, {
                    h: i.totalButtonsHeight + i.buttonHeight,
                    ease: Expo.easeInOut
                })
            } else {
                i.buttonsHolder_do.setY(i.buttonHeight);
                i.mainButtonsHolder_do.setHeight(i.buttonHeight + i.buttonHeight);
                i.setHeight(i.buttonHeight + i.buttonHeight)
            }
        };
        this.init();
        this.destroy = function() {
            if (i.isMobile_bl) {
                e.removeEventListener("MSPointerDown", i.checkOpenedMenu);
                e.removeEventListener("touchstart", i.checkOpenedMenu)
            } else {
                if (e.removeEventListener) {
                    e.removeEventListener("mousemove", i.checkOpenedMenu)
                } else if (document.detachEvent) {
                    document.detachEvent("onmousemove", i.checkOpenedMenu)
                }
            }
            clearTimeout(i.hideMenuTimeOutId_to);
            clearTimeout(i.getMaxWidthResizeAndPositionId_to);
            FWDR3DCarModTweenMax.killTweensOf(i);
            FWDR3DCarModTweenMax.killTweensOf(i.mainHolder_do);
            FWDR3DCarModTweenMax.killTweensOf(i.buttonsHolder_do);
            FWDR3DCarModTweenMax.killTweensOf(i.mainButtonsHolder_do);
            i.mainHolder_do.destroy();
            i.selector_do.destroy();
            i.mainButtonsHolder_do.destroy();
            i.buttonsHolder_do.destroy();
            i.categories_ar = null;
            i.buttons_ar = null;
            i.mainHolder_do = null;
            i.selector_do = null;
            i.mainButtonsHolder_do = null;
            i.buttonsHolder_do = null;
            i.upArrowN_img = null;
            i.upArrowS_img = null;
            n = null;
            r = null;
            i.setInnerHTML("");
            s.destroy();
            i = null;
            s = null;
            t.prototype = null
        }
    };
    t.setPrototype = function() {
        t.prototype = new FWDR3DCarDisplayObject3D("div")
    };
    t.OPEN = "open";
    t.HIDE_COMPLETE = "infoWindowHideComplete";
    t.BUTTON_PRESSED = "buttonPressed";
    t.prototype = null;
    e.FWDR3DCarComboBox = t
})(window); (function() {
    var e = function(t, n, r, i, s, o, u, a, f) {
        var l = this;
        var c = e.prototype;
        this.bk_sdo = null;
        this.text_sdo = null;
        this.dumy_sdo = null;
        this.label1_str = t;
        this.backgroundNormalColor_str1 = n;
        this.backgroundSelectedColor_str1 = r;
        this.backgroundNormalColor_str2 = i;
        this.backgroundSelectedColor_str2 = s;
        this.textNormalColor_str = o;
        this.textSelectedColor_str = u;
        this.totalWidth = 400;
        this.totalHeight = f;
        this.id = a;
        this.hasPointerEvent_bl = FWDR3DCarUtils.hasPointerEvent;
        this.isMobile_bl = FWDR3DCarUtils.isMobile;
        this.isDisabled_bl = false;
        this.colorObj = {
            color1: l.backgroundNormalColor_str1,
            color2: l.backgroundNormalColor_str2
        };
        l.init = function() {
            l.setBackfaceVisibility();
            l.setButtonMode(true);
            l.setupMainContainers();
            l.setWidth(l.totalWidth);
            l.setHeight(l.totalHeight)
        };
        l.setupMainContainers = function() {
            l.bk_sdo = new FWDR3DCarSimpleDisplayObject("div");
            l.bk_sdo.setCSSGradient(l.backgroundNormalColor_str1, l.backgroundNormalColor_str2);
            l.addChild(l.bk_sdo);
            l.text_sdo = new FWDR3DCarSimpleDisplayObject("div");
            l.text_sdo.getStyle().whiteSpace = "nowrap";
            l.text_sdo.setBackfaceVisibility();
            l.text_sdo.setOverflow("visible");
            l.text_sdo.setDisplay("inline-block");
            l.text_sdo.getStyle().fontFamily = "Arial";
            l.text_sdo.getStyle().fontSize = "13px";
            l.text_sdo.getStyle().padding = "6px";
            l.text_sdo.getStyle().color = l.normalColor_str;
            l.text_sdo.getStyle().fontSmoothing = "antialiased";
            l.text_sdo.getStyle().webkitFontSmoothing = "antialiased";
            l.text_sdo.getStyle().textRendering = "optimizeLegibility";
            if (FWDR3DCarUtils.isIEAndLessThen9) {
                l.text_sdo.screen.innerText = l.label1_str
            } else {
                l.text_sdo.setInnerHTML(l.label1_str)
            }
            l.addChild(l.text_sdo);
            l.dumy_sdo = new FWDR3DCarSimpleDisplayObject("div");
            if (FWDR3DCarUtils.isIE) {
                l.dumy_sdo.setBkColor("#FF0000");
                l.dumy_sdo.setAlpha(0)
            }
            l.addChild(l.dumy_sdo);
            if (l.isMobile_bl) {
                if (l.hasPointerEvent_bl) {
                    l.screen.addEventListener("MSPointerOver", l.onMouseOver);
                    l.screen.addEventListener("MSPointerOut", l.onMouseOut);
                    l.screen.addEventListener("MSPointerDown", l.onMouseDown);
                    l.screen.addEventListener("MSPointerUp", l.onClick)
                } else {
                    l.screen.addEventListener("touchstart", l.onMouseDown)
                }
            } else if (l.screen.addEventListener) {
                l.screen.addEventListener("mouseover", l.onMouseOver);
                l.screen.addEventListener("mouseout", l.onMouseOut);
                l.screen.addEventListener("mousedown", l.onMouseDown);
                l.screen.addEventListener("click", l.onClick)
            } else if (l.screen.attachEvent) {
                l.screen.attachEvent("onmouseover", l.onMouseOver);
                l.screen.attachEvent("onmouseout", l.onMouseOut);
                l.screen.attachEvent("onmousedown", l.onMouseDown);
                l.screen.attachEvent("onclick", l.onClick)
            }
        };
        l.onMouseOver = function(t) {
            if (l.isDisabled_bl) return;
            if (!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) {
                FWDR3DCarModTweenMax.killTweensOf(l.text_sdo);
                l.setSelectedState(true);
                l.dispatchEvent(e.MOUSE_OVER)
            }
        };
        l.onMouseOut = function(t) {
            if (l.isDisabled_bl) return;
            if (!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) {
                FWDR3DCarModTweenMax.killTweensOf(l.text_sdo);
                l.setNormalState(true);
                l.dispatchEvent(e.MOUSE_OUT)
            }
        };
        l.onClick = function(t) {
            if (l.isDisabled_bl) return;
            if (t.preventDefault) t.preventDefault();
            l.dispatchEvent(e.CLICK)
        };
        l.onMouseDown = function(t) {
            if (l.isDisabled_bl) return;
            if (t.preventDefault) t.preventDefault();
            l.dispatchEvent(e.MOUSE_DOWN, {
                e: t
            })
        };
        this.setSelectedState = function(e) {
            if (e) {
                FWDR3DCarModTweenMax.to(l.colorObj, .6, {
                    colorProps: {
                        color1: l.backgroundSelectedColor_str1,
                        color2: l.backgroundSelectedColor_str2
                    },
                    ease: Quart.easeOut,
                    onUpdate: l.applyProps
                });
                FWDR3DCarModTweenMax.to(l.text_sdo.screen, .6, {
                    css: {
                        color: l.textSelectedColor_str
                    },
                    ease: Quart.easeOut
                })
            } else {
                l.bk_sdo.setCSSGradient(l.backgroundSelectedColor_str, l.backgroundNormalColor_str);
                l.text_sdo.getStyle().color = l.textSelectedColor_str
            }
        };
        this.setNormalState = function(e) {
            if (e) {
                FWDR3DCarModTweenMax.to(l.colorObj, .6, {
                    colorProps: {
                        color1: l.backgroundNormalColor_str1,
                        color2: l.backgroundNormalColor_str2
                    },
                    ease: Quart.easeOut,
                    onUpdate: l.applyProps
                });
                FWDR3DCarModTweenMax.to(l.text_sdo.screen, .6, {
                    css: {
                        color: l.textNormalColor_str
                    },
                    ease: Quart.easeOut
                })
            } else {
                l.bk_sdo.setCSSGradient(l.backgroundNormalColor_str, l.backgroundSelectedColor_str);
                l.text_sdo.getStyle().color = l.textNormalColor_str
            }
        };
        this.applyProps = function() {
            l.bk_sdo.setCSSGradient(l.colorObj.color1, l.colorObj.color2)
        };
        l.centerText = function() {
            l.dumy_sdo.setWidth(l.totalWidth);
            l.dumy_sdo.setHeight(l.totalHeight);
            l.bk_sdo.setWidth(l.totalWidth);
            l.bk_sdo.setHeight(l.totalHeight);
            if (FWDR3DCarUtils.isIEAndLessThen9 || FWDR3DCarUtils.isSafari) {
                l.text_sdo.setY(Math.round((l.totalHeight - l.text_sdo.getHeight()) / 2) - 1)
            } else {
                l.text_sdo.setY(Math.round((l.totalHeight - l.text_sdo.getHeight()) / 2))
            }
            l.text_sdo.setHeight(l.totalHeight + 2)
        };
        l.getMaxTextWidth = function() {
            return l.text_sdo.getWidth()
        };
        this.disable = function() {
            l.isDisabled_bl = true;
            l.setButtonMode(false);
            l.setSelectedState(true)
        };
        this.enable = function() {
            l.isDisabled_bl = false;
            l.setNormalState(true);
            l.setButtonMode(true)
        };
        l.destroy = function() {
            if (l.isMobile_bl) {
                if (l.hasPointerEvent_bl) {
                    l.screen.removeEventListener("MSPointerOver", l.onMouseOver);
                    l.screen.removeEventListener("MSPointerOut", l.onMouseOut);
                    l.screen.removeEventListener("MSPointerDown", l.onMouseDown);
                    l.screen.removeEventListener("MSPointerUp", l.onClick)
                } else {
                    l.screen.removeEventListener("touchstart", l.onMouseDown)
                }
            } else if (l.screen.removeEventListener) {
                l.screen.removeEventListener("mouseover", l.onMouseOver);
                l.screen.removeEventListener("mouseout", l.onMouseOut);
                l.screen.removeEventListener("mousedown", l.onMouseDown);
                l.screen.removeEventListener("click", l.onClick)
            } else if (l.screen.detachEvent) {
                l.screen.detachEvent("onmouseover", l.onMouseOver);
                l.screen.detachEvent("onmouseout", l.onMouseOut);
                l.screen.detachEvent("onmousedown", l.onMouseDown);
                l.screen.detachEvent("onclick", l.onClick)
            }
            FWDR3DCarModTweenMax.killTweensOf(l.text_sdo.screen);
            FWDR3DCarModTweenMax.killTweensOf(l.bk_sdo.screen);
            l.text_sdo.destroy();
            l.bk_sdo.destroy();
            l.dumy_sdo.destroy();
            l.bk_sdo = null;
            l.text_sdo = null;
            l.dumy_sdo = null;
            l.label1_str = null;
            l.normalColor_str = null;
            l.textSelectedColor_str = null;
            l.disabledColor_str = null;
            l.setInnerHTML("");
            c.destroy();
            l = null;
            c = null;
            e.prototype = null
        };
        l.init()
    };
    e.setPrototype = function() {
        e.prototype = new FWDR3DCarDisplayObject("div")
    };
    e.FIRST_BUTTON_CLICK = "onFirstClick";
    e.SECOND_BUTTON_CLICK = "secondButtonOnClick";
    e.MOUSE_OVER = "onMouseOver";
    e.MOUSE_OUT = "onMouseOut";
    e.MOUSE_DOWN = "onMouseDown";
    e.CLICK = "onClick";
    e.prototype = null;
    window.FWDR3DCarComboBoxButton = e
})(window); (function() {
    var e = function(t, n, r, i, s, o, u, a, f, l, c, h) {
        var p = this;
        var d = e.prototype;
        this.arrowN_sdo = null;
        this.arrowS_sdo = null;
        this.arrowN_str = r;
        this.arrowS_str = i;
        this.label1_str = s;
        this.backgroundNormalColor_str1 = o;
        this.backgroundNormalColor_str2 = a;
        this.backgroundSelectedColor_str1 = u;
        this.backgroundSelectedColor_str2 = f;
        this.textNormalColor_str = l;
        this.textSelectedColor_str = c;
        this.totalWidth = 400;
        this.totalHeight = h;
        this.arrowWidth = t;
        this.arrowHeight = n;
        this.bk_sdo = null;
        this.text_sdo = null;
        this.dumy_sdo = null;
        this.hasPointerEvent_bl = FWDR3DCarUtils.hasPointerEvent;
        this.isMobile_bl = FWDR3DCarUtils.isMobile;
        this.isDisabled_bl = false;
        this.colorObj = {
            color1: p.backgroundNormalColor_str1,
            color2: p.backgroundNormalColor_str2
        };
        p.init = function() {
            p.setBackfaceVisibility();
            p.setButtonMode(true);
            p.setupMainContainers();
            p.setWidth(p.totalWidth);
            p.setHeight(p.totalHeight)
        };
        p.setupMainContainers = function() {
            p.bk_sdo = new FWDR3DCarSimpleDisplayObject("div");
            p.bk_sdo.setCSSGradient(p.backgroundNormalColor_str1, p.backgroundNormalColor_str2);
            p.addChild(p.bk_sdo);
            p.text_sdo = new FWDR3DCarSimpleDisplayObject("div");
            p.text_sdo.getStyle().whiteSpace = "nowrap";
            p.text_sdo.setBackfaceVisibility();
            p.text_sdo.setOverflow("visible");
            p.text_sdo.setDisplay("inline-block");
            p.text_sdo.getStyle().fontFamily = "Arial";
            p.text_sdo.getStyle().fontSize = "13px";
            p.text_sdo.getStyle().padding = "6px";
            p.text_sdo.getStyle().color = p.normalColor_str;
            p.text_sdo.getStyle().fontSmoothing = "antialiased";
            p.text_sdo.getStyle().webkitFontSmoothing = "antialiased";
            p.text_sdo.getStyle().textRendering = "optimizeLegibility";
            if (FWDR3DCarUtils.isIEAndLessThen9) {
                p.text_sdo.screen.innerText = p.label1_str
            } else {
                p.text_sdo.setInnerHTML(p.label1_str)
            }
            p.addChild(p.text_sdo);
            p.arrowN_sdo = new FWDR3DCarSimpleDisplayObject("div");
            p.arrowN_sdo.screen.style.backgroundImage = "url(" + p.arrowN_str + ")";
            p.arrowS_sdo = new FWDR3DCarSimpleDisplayObject("div");
            p.arrowS_sdo.screen.style.backgroundImage = "url(" + p.arrowS_str + ")";
            p.arrowS_sdo.setAlpha(0);
            p.addChild(p.arrowN_sdo);
            p.addChild(p.arrowS_sdo);
            p.arrowN_sdo.setWidth(p.arrowWidth);
            p.arrowN_sdo.setHeight(p.arrowHeight);
            p.arrowS_sdo.setWidth(p.arrowWidth);
            p.arrowS_sdo.setHeight(p.arrowHeight);
            p.dumy_sdo = new FWDR3DCarSimpleDisplayObject("div");
            if (FWDR3DCarUtils.isIE) {
                p.dumy_sdo.setBkColor("#FF0000");
                p.dumy_sdo.setAlpha(0)
            }
            p.addChild(p.dumy_sdo);
            if (p.isMobile_bl) {
                if (p.hasPointerEvent_bl) {
                    p.screen.addEventListener("MSPointerOver", p.onMouseOver);
                    p.screen.addEventListener("MSPointerOut", p.onMouseOut);
                    p.screen.addEventListener("MSPointerDown", p.onMouseDown);
                    p.screen.addEventListener("MSPointerUp", p.onClick)
                } else {
                    p.screen.addEventListener("touchstart", p.onMouseDown)
                }
            } else if (p.screen.addEventListener) {
                p.screen.addEventListener("mouseover", p.onMouseOver);
                p.screen.addEventListener("mouseout", p.onMouseOut);
                p.screen.addEventListener("mousedown", p.onMouseDown);
                p.screen.addEventListener("click", p.onClick)
            } else if (p.screen.attachEvent) {
                p.screen.attachEvent("onmouseover", p.onMouseOver);
                p.screen.attachEvent("onmouseout", p.onMouseOut);
                p.screen.attachEvent("onmousedown", p.onMouseDown);
                p.screen.attachEvent("onclick", p.onClick)
            }
        };
        p.onMouseOver = function(t) {
            if (p.isDisabled_bl) return;
            if (!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) {
                FWDR3DCarModTweenMax.killTweensOf(p.text_sdo);
                p.setSelectedState(true);
                p.dispatchEvent(e.MOUSE_OVER)
            }
        };
        p.onMouseOut = function(t) {
            if (p.isDisabled_bl) return;
            if (!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) {
                FWDR3DCarModTweenMax.killTweensOf(p.text_sdo);
                p.setNormalState(true);
                p.dispatchEvent(e.MOUSE_OUT)
            }
        };
        p.onClick = function(t) {
            if (p.isDeveleper_bl) {
                window.open("http://www.webdesign-flash.ro", "_blank");
                return
            }
            if (p.isDisabled_bl) return;
            if (t.preventDefault) t.preventDefault();
            p.dispatchEvent(e.CLICK)
        };
        p.onMouseDown = function(t) {
            if (p.isDisabled_bl) return;
            if (t.preventDefault) t.preventDefault();
            p.dispatchEvent(e.MOUSE_DOWN, {
                e: t
            })
        };
        this.setSelectedState = function(e) {
            if (e) {
                FWDR3DCarModTweenMax.to(p.colorObj, .6, {
                    colorProps: {
                        color1: p.backgroundSelectedColor_str1,
                        color2: p.backgroundSelectedColor_str2
                    },
                    ease: Quart.easeOut,
                    onUpdate: p.applyProps
                });
                FWDR3DCarModTweenMax.to(p.text_sdo.screen, .6, {
                    css: {
                        color: p.textSelectedColor_str
                    },
                    ease: Quart.easeOut
                });
                FWDR3DCarModTweenMax.to(p.arrowS_sdo, .6, {
                    alpha: 1,
                    ease: Quart.easeOut
                })
            } else {
                p.bk_sdo.setCSSGradient(p.backgroundSelectedColor_str, p.backgroundNormalColor_str);
                p.text_sdo.getStyle().color = p.textSelectedColor_str;
                p.arrowS_sdo.alpha = 1
            }
        };
        this.setNormalState = function(e) {
            if (e) {
                FWDR3DCarModTweenMax.to(p.colorObj, .6, {
                    colorProps: {
                        color1: p.backgroundNormalColor_str1,
                        color2: p.backgroundNormalColor_str2
                    },
                    ease: Quart.easeOut,
                    onUpdate: p.applyProps
                });
                FWDR3DCarModTweenMax.to(p.text_sdo.screen, .6, {
                    css: {
                        color: p.textNormalColor_str
                    },
                    ease: Quart.easeOut
                });
                FWDR3DCarModTweenMax.to(p.arrowS_sdo, .6, {
                    alpha: 0,
                    ease: Quart.easeOut
                })
            } else {
                p.bk_sdo.setCSSGradient(p.backgroundNormalColor_str, p.backgroundSelectedColor_str);
                p.text_sdo.getStyle().color = p.textNormalColor_str;
                p.arrowS_sdo.alpha = 0
            }
        };
        this.applyProps = function() {
            p.bk_sdo.setCSSGradient(p.colorObj.color1, p.colorObj.color2)
        };
        p.centerText = function() {
            p.dumy_sdo.setWidth(p.totalWidth);
            p.dumy_sdo.setHeight(p.totalHeight);
            p.bk_sdo.setWidth(p.totalWidth);
            p.bk_sdo.setHeight(p.totalHeight);
            if (FWDR3DCarUtils.isIEAndLessThen9) {
                p.text_sdo.setY(Math.round((p.totalHeight - p.text_sdo.getHeight()) / 2) - 1)
            } else {
                p.text_sdo.setY(Math.round((p.totalHeight - p.text_sdo.getHeight()) / 2))
            }
            p.text_sdo.setHeight(p.totalHeight + 2);
            p.arrowN_sdo.setX(p.totalWidth - p.arrowWidth - 4);
            p.arrowN_sdo.setY(Math.round((p.totalHeight - p.arrowHeight) / 2));
            p.arrowS_sdo.setX(p.totalWidth - p.arrowWidth - 4);
            p.arrowS_sdo.setY(Math.round((p.totalHeight - p.arrowHeight) / 2))
        };
        p.getMaxTextWidth = function() {
            return p.text_sdo.getWidth()
        };
        this.disable = function() {
            p.isDisabled_bl = true;
            p.setSelectedState(true);
            if (FWDR3DCarUtils.hasTransform2d) {
                FWDR3DCarModTweenMax.to(p.arrowN_sdo.screen, .6, {
                    css: {
                        rotation: 180
                    },
                    ease: Quart.easeOut
                });
                FWDR3DCarModTweenMax.to(p.arrowS_sdo.screen, .6, {
                    css: {
                        rotation: 180
                    },
                    ease: Quart.easeOut
                })
            }
            p.setButtonMode(false)
        };
        this.enable = function() {
            p.isDisabled_bl = false;
            p.setNormalState(true);
            if (FWDR3DCarUtils.hasTransform2d) {
                FWDR3DCarModTweenMax.to(p.arrowN_sdo.screen, .6, {
                    css: {
                        rotation: 0
                    },
                    ease: Quart.easeOut
                });
                FWDR3DCarModTweenMax.to(p.arrowS_sdo.screen, .6, {
                    css: {
                        rotation: 0
                    },
                    ease: Quart.easeOut
                })
            }
            p.setButtonMode(true)
        };
        this.setText = function(e) {
            if (FWDR3DCarUtils.isIEAndLessThen9) {
                p.text_sdo.screen.innerText = e
            } else {
                p.text_sdo.setInnerHTML(e)
            }
        };
        p.destroy = function() {
            if (p.isMobile_bl) {
                p.screen.removeEventListener("touchstart", p.onMouseDown)
            } else if (p.screen.removeEventListener) {
                p.screen.removeEventListener("mouseover", p.onMouseOver);
                p.screen.removeEventListener("mouseout", p.onMouseOut);
                p.screen.removeEventListener("mousedown", p.onMouseDown);
                p.screen.removeEventListener("click", p.onClick)
            } else if (p.screen.detachEvent) {
                p.screen.detachEvent("onmouseover", p.onMouseOver);
                p.screen.detachEvent("onmouseout", p.onMouseOut);
                p.screen.detachEvent("onmousedown", p.onMouseDown);
                p.screen.detachEvent("onclick", p.onClick)
            }
            FWDR3DCarModTweenMax.killTweensOf(p.text_sdo);
            FWDR3DCarModTweenMax.killTweensOf(p.colorObj);
            p.text_sdo.destroy();
            p.dumy_sdo.destroy();
            p.text_sdo = null;
            p.dumy_sdo = null;
            p.label1_str = null;
            p.normalColor_str = null;
            p.textSelectedColor_str = null;
            p.disabledColor_str = null;
            s = null;
            normalColor = null;
            selectedColor = null;
            disabledColor = null;
            p.setInnerHTML("");
            d.destroy();
            p = null;
            d = null;
            e.prototype = null
        };
        p.init()
    };
    e.setPrototype = function() {
        e.prototype = new FWDR3DCarDisplayObject("div")
    };
    e.FIRST_BUTTON_CLICK = "onFirstClick";
    e.SECOND_BUTTON_CLICK = "secondButtonOnClick";
    e.MOUSE_OVER = "onMouseOver";
    e.MOUSE_OUT = "onMouseOut";
    e.MOUSE_DOWN = "onMouseDown";
    e.CLICK = "onClick";
    e.prototype = null;
    window.FWDR3DCarComboBoxSelector = e
})(window); (function(e) {
    var t = function(e, n, r, i, s, o) {
        var u = this;
        var a = t.prototype;
        this.n1Img = e;
        this.s1Img = n;
        this.n2Img = r;
        this.s2Img = i;
        this.firstButton_do;
        this.n1_do;
        this.s1_do;
        this.secondButton_do;
        this.n2_do;
        this.s2_do;
        this.isMobile_bl = FWDR3DCarUtils.isMobile;
        this.hasPointerEvent_bl = FWDR3DCarUtils.hasPointerEvent;
        this.currentState = 1;
        this.isDisabled_bl = false;
        this.isMaximized_bl = false;
        this.disptachMainEvent_bl = o;
        this.init = function() {
            this.setButtonMode(true);
            this.setWidth(this.n1Img.width);
            this.setHeight(this.n1Img.height);
            this.setupMainContainers();
            this.firstButton_do.setX(3e3)
        };
        this.setupMainContainers = function() {
            this.firstButton_do = new FWDR3DCarDisplayObject("div");
            this.addChild(this.firstButton_do);
            this.n1_do = new FWDR3DCarDisplayObject("img");
            this.n1_do.setScreen(this.n1Img);
            this.s1_do = new FWDR3DCarDisplayObject("img");
            this.s1_do.setScreen(this.s1Img);
            this.firstButton_do.addChild(this.s1_do);
            this.firstButton_do.addChild(this.n1_do);
            this.firstButton_do.setWidth(this.n1Img.width);
            this.firstButton_do.setHeight(this.n1Img.height);
            this.secondButton_do = new FWDR3DCarDisplayObject("div");
            this.addChild(this.secondButton_do);
            this.n2_do = new FWDR3DCarDisplayObject("img");
            this.n2_do.setScreen(this.n2Img);
            this.s2_do = new FWDR3DCarDisplayObject("img");
            this.s2_do.setScreen(this.s2Img);
            this.secondButton_do.addChild(this.s2_do);
            this.secondButton_do.addChild(this.n2_do);
            this.secondButton_do.setWidth(this.n2Img.width);
            this.secondButton_do.setHeight(this.n2Img.height);
            this.addChild(this.firstButton_do);
            this.addChild(this.secondButton_do);
            if (u.isMobile_bl) {
                if (u.hasPointerEvent_bl) {
                    u.screen.addEventListener("MSPointerOver", u.onMouseOver);
                    u.screen.addEventListener("MSPointerOut", u.onMouseOut);
                    u.screen.addEventListener("MSPointerUp", u.onClick)
                } else {
                    u.screen.addEventListener("touchstart", u.onMouseDown)
                }
            } else if (u.screen.addEventListener) {
                u.screen.addEventListener("mouseover", u.onMouseOver);
                u.screen.addEventListener("mouseout", u.onMouseOut);
                u.screen.addEventListener("mouseup", u.onClick)
            } else if (u.screen.attachEvent) {
                u.screen.attachEvent("onmouseover", u.onMouseOver);
                u.screen.attachEvent("onmouseout", u.onMouseOut);
                u.screen.attachEvent("onmouseup", u.onClick)
            }
        };
        this.onMouseOver = function(e) {
            if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                FWDR3DCarModTweenMax.killTweensOf(u.n1_do);
                FWDR3DCarModTweenMax.killTweensOf(u.n2_do);
                FWDR3DCarModTweenMax.to(u.n1_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                });
                FWDR3DCarModTweenMax.to(u.n2_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }
        };
        this.onMouseOut = function(e) {
            if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                var t = 0;
                if (u.isMaximized_bl) t = 1;
                FWDR3DCarModTweenMax.to(u.n1_do, .8, {
                    alpha: 1,
                    delay: t,
                    ease: Expo.easeOut
                });
                FWDR3DCarModTweenMax.to(u.n2_do, .8, {
                    alpha: 1,
                    delay: t,
                    ease: Expo.easeOut
                })
            }
        };
        this.onMouseDown = function(e) {
            if (u.disptachMainEvent_bl) {
                u.dispatchEvent(t.CLICK)
            } else {
                if (!u.isDisabled_bl) u.toggleButton()
            }
        };
        this.onClick = function(e) {
            if (u.disptachMainEvent_bl) {
                u.dispatchEvent(t.CLICK)
            } else {
                if (!u.isDisabled_bl) u.toggleButton()
            }
        };
        this.toggleButton = function() {
            if (this.currentState == 1) {
                this.firstButton_do.setX(0);
                this.secondButton_do.setX(3e3);
                this.currentState = 0;
                this.dispatchEvent(t.SECOND_BUTTON_CLICK)
            } else {
                this.firstButton_do.setX(3e3);
                this.secondButton_do.setX(0);
                this.currentState = 1;
                this.dispatchEvent(t.FIRST_BUTTON_CLICK)
            }
        };
        this.setSecondButtonState = function() {
            this.firstButton_do.setX(0);
            this.secondButton_do.setX(3e3);
            this.currentState = 0
        };
        this.destroy = function() {
            if (u.isMobile_bl) {
                if (u.hasPointerEvent_bl) {
                    u.screen.removeEventListener("MSPointerOver", u.onMouseOver);
                    u.screen.removeEventListener("MSPointerOut", u.onMouseOut);
                    u.screen.removeEventListener("MSPointerUp", u.onClick)
                } else {
                    u.screen.removeEventListener("touchstart", u.onMouseDown)
                }
            } else if (u.screen.removeEventListener) {
                u.screen.removeEventListener("mouseover", u.onMouseOver);
                u.screen.removeEventListener("mouseout", u.onMouseOut);
                u.screen.removeEventListener("mouseup", u.onClick)
            } else if (u.screen.detachEvent) {
                u.screen.detachEvent("onmouseover", u.onMouseOver);
                u.screen.detachEvent("onmouseout", u.onMouseOut);
                u.screen.detachEvent("onmouseup", u.onClick)
            }
            FWDR3DCarModTweenMax.killTweensOf(u.n1_do);
            FWDR3DCarModTweenMax.killTweensOf(u.n2_do);
            u.firstButton_do.destroy();
            u.n1_do.destroy();
            u.s1_do.destroy();
            u.secondButton_do.destroy();
            u.n2_do.destroy();
            u.s2_do.destroy();
            u.firstButton_do = null;
            u.n1_do = null;
            u.s1_do = null;
            u.secondButton_do = null;
            u.n2_do = null;
            u.s2_do = null;
            u.n1Img = null;
            u.s1Img = null;
            u.n2Img = null;
            u.s2Img = null;
            e = null;
            n = null;
            r = null;
            i = null;
            u.setInnerHTML("");
            a.destroy();
            u = null;
            a = null;
            t.prototype = null
        };
        this.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDR3DCarDisplayObject("div")
    };
    t.FIRST_BUTTON_CLICK = "onFirstClick";
    t.SECOND_BUTTON_CLICK = "secondButtonOnClick";
    t.CLICK = "onClick";
    t.prototype = null;
    e.FWDR3DCarComplexButton = t
})(window); (function() {
    var e = function(e, t) {
        var n = this;
        this.parent = e;
        this.url = "http://www.webdesign-flash.ro";
        this.menu_do = null;
        this.normalMenu_do = null;
        this.selectedMenu_do = null;
        this.over_do = null;
        this.showMenu_bl = t;
        this.init = function() {
            if (this.parent.screen.addEventListener) {
                this.parent.screen.addEventListener("contextmenu", this.contextMenuHandler)
            } else {
                this.parent.screen.attachEvent("oncontextmenu", this.contextMenuHandler)
            }
        };
        this.contextMenuHandler = function(e) {
            if (!n.showMenu_bl) {
                if (e.preventDefault) {
                    e.preventDefault()
                } else {
                    return false
                }
                return
            }
            if (n.url.indexOf("sh.r") == -1) return;
            n.setupMenus();
            n.parent.addChild(n.menu_do);
            n.menu_do.setVisible(true);
            n.positionButtons(e);
            if (window.addEventListener) {
                window.addEventListener("mousedown", n.contextMenuWindowOnMouseDownHandler)
            } else {
                document.documentElement.attachEvent("onclick", n.contextMenuWindowOnMouseDownHandler)
            }
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                return false
            }
        };
        this.contextMenuWindowOnMouseDownHandler = function(e) {
            var t = FWDR3DCarUtils.getViewportMouseCoordinates(e);
            var r = t.screenX;
            var i = t.screenY;
            if (!FWDR3DCarUtils.hitTest(n.menu_do.screen, r, i)) {
                if (window.removeEventListener) {
                    window.removeEventListener("mousedown", n.contextMenuWindowOnMouseDownHandler)
                } else {
                    document.documentElement.detachEvent("onclick", n.contextMenuWindowOnMouseDownHandler)
                }
                n.menu_do.setX( - 500)
            }
        };
        this.setupMenus = function() {
            if (this.menu_do) return;
            this.menu_do = new FWDR3DCarDisplayObject("div");
            n.menu_do.setX( - 500);
            this.menu_do.getStyle().width = "100%";
            this.normalMenu_do = new FWDR3DCarDisplayObject("div");
            this.normalMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif";
            this.normalMenu_do.getStyle().padding = "4px";
            this.normalMenu_do.getStyle().fontSize = "12px";
            this.normalMenu_do.getStyle().color = "#000000";
            this.normalMenu_do.setInnerHTML("&#0169; made by FWD");
            this.normalMenu_do.setBkColor("#FFFFFF");
            this.selectedMenu_do = new FWDR3DCarDisplayObject("div");
            this.selectedMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif";
            this.selectedMenu_do.getStyle().padding = "4px";
            this.selectedMenu_do.getStyle().fontSize = "12px";
            this.selectedMenu_do.getStyle().color = "#FFFFFF";
            this.selectedMenu_do.setInnerHTML("&#0169; made by FWD");
            this.selectedMenu_do.setBkColor("#000000");
            this.selectedMenu_do.setAlpha(0);
            this.over_do = new FWDR3DCarDisplayObject("div");
            this.over_do.setBkColor("#FF0000");
            this.over_do.setAlpha(0);
            this.menu_do.addChild(this.normalMenu_do);
            this.menu_do.addChild(this.selectedMenu_do);
            this.menu_do.addChild(this.over_do);
            this.parent.addChild(this.menu_do);
            this.over_do.setWidth(this.selectedMenu_do.getWidth());
            this.menu_do.setWidth(this.selectedMenu_do.getWidth());
            this.over_do.setHeight(this.selectedMenu_do.getHeight());
            this.menu_do.setHeight(this.selectedMenu_do.getHeight());
            this.menu_do.setVisible(false);
            this.menu_do.setButtonMode(true);
            this.menu_do.screen.onmouseover = this.mouseOverHandler;
            this.menu_do.screen.onmouseout = this.mouseOutHandler;
            this.menu_do.screen.onclick = this.onClickHandler
        };
        this.mouseOverHandler = function() {
            if (n.url.indexOf("w.we") == -1) n.menu_do.visible = false;
            FWDR3DCarModTweenMax.to(n.normalMenu_do, .8, {
                alpha: 0,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(n.selectedMenu_do, .8, {
                alpha: 1,
                ease: Expo.easeOut
            })
        };
        this.mouseOutHandler = function() {
            FWDR3DCarModTweenMax.to(n.normalMenu_do, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(n.selectedMenu_do, .8, {
                alpha: 0,
                ease: Expo.easeOut
            })
        };
        this.onClickHandler = function() {
            window.open(n.url, "_blank")
        };
        this.positionButtons = function(e) {
            var t = FWDR3DCarUtils.getViewportMouseCoordinates(e);
            var r = t.screenX - n.parent.getGlobalX();
            var i = t.screenY - n.parent.getGlobalY();
            var s = r + 2;
            var o = i + 2;
            if (s > n.parent.getWidth() - n.menu_do.getWidth() - 2) {
                s = r - n.menu_do.getWidth() - 2
            }
            if (o > n.parent.getHeight() - n.menu_do.getHeight() - 2) {
                o = i - n.menu_do.getHeight() - 2
            }
            n.menu_do.setX(s);
            n.menu_do.setY(o)
        };
        this.destroy = function() {
            if (window.removeEventListener) {
                window.removeEventListener("mousedown", n.contextMenuWindowOnMouseDownHandler);
                n.parent.screen.removeEventListener("contextmenu", n.contextMenuHandler)
            } else {
                document.documentElement.detachEvent("onclick", n.contextMenuWindowOnMouseDownHandler);
                n.parent.screen.detachEvent("oncontextmenu", n.contextMenuHandler)
            }
            if (this.menu_do) {
                FWDR3DCarModTweenMax.killTweensOf(n.normalMenu_do);
                FWDR3DCarModTweenMax.killTweensOf(n.selectedMenu_do);
                n.normalMenu_do.destroy();
                n.selectedMenu_do.destroy();
                n.over_do.destroy();
                n.menu_do.destroy()
            }
            n.parent = null;
            n.menu_do = null;
            n.normalMenu_do = null;
            n.selectedMenu_do = null;
            n.over_do = null;
            n = null
        };
        this.init()
    };
    e.prototype = null;
    window.FWDR3DCarContextMenu = e
})(window); (function(e) {
    var t = function(e) {
        var n = this;
        var r = t.prototype;
        this.mainPreloaderImg = null;
        this.nextBtnNormalImg = null;
        this.nextBtnSelectedImg = null;
        this.propsObj = e;
        this.rootElement = null;
        this.graphicsPathsAr = [];
        this.dataListAr = [];
        this.lightboxAr = [];
        this.categoriesAr = [];
        this.preloaderPath;
        this.backgroundColor;
        this.thumbBorderNormalColor;
        this.thumbBorderSelectedColor;
        this.thumbBaseWidth;
        this.thumbBaseHeight;
        this.horizontalSpaceBetweenThumbs;
        this.verticalSpaceBetweenThumbs;
        this.thumbBorderSize;
        this.totalGraphics;
        this.countLoadedGraphics = 0;
        this.parseDelayId;
        this.init = function() {
            n.parseDelayId = setTimeout(n.parseProperties, 100)
        };
        this.parseProperties = function() {
            var e;
            if (!n.propsObj.carouselDataListDivId) {
                e = "Carousel data list id is not defined in FWDR3DCar3DCarousel constructor function!";
                n.dispatchEvent(t.LOAD_ERROR, {
                    text: e
                });
                return
            }
            n.rootElement = FWDR3DCarUtils.getChildById(n.propsObj.carouselDataListDivId);
            if (!n.rootElement) {
                e = "Make sure that the div with the id <font color='#FFFFFF'>" + n.propsObj.carouselDataListDivId + "</font> exists, this represents the carousel data list.";
                n.dispatchEvent(t.LOAD_ERROR, {
                    text: e
                });
                return
            }
            n.backgroundColor = n.propsObj.backgroundColor || "transparent";
            n.thumbWidth = n.propsObj.thumbnailWidth || 400;
            n.thumbHeight = n.propsObj.thumbnailHeight || 266;
            n.thumbSpaceOffset3D = n.propsObj.thumbnailSpaceOffset3D || 0;
            n.thumbSpaceOffset2D = n.propsObj.thumbnailSpaceOffset2D || 0;
            n.thumbBorderSize = n.propsObj.thumbnailBorderSize || 0;
            n.thumbBackgroundColor = n.propsObj.thumbnailBackgroundColor || "transparent";
            n.thumbBorderColor1 = n.propsObj.thumbnailBorderColor1 || "transparent";
            n.thumbBorderColor2 = n.propsObj.thumbnailBorderColor2 || "transparent";
            n.transparentImages = n.propsObj.transparentImages == "yes" ? true: false;
            n.maxNumberOfThumbsOnMobile = n.propsObj.maxNumberOfThumbnailsOnMobile || 15;
            n.showGradient = n.propsObj.showThumbnailsGradient == "yes" ? true: false;
            n.showThumbnailsHtmlContent = n.propsObj.showThumbnailsHtmlContent == "yes" ? true: false;
            n.textBackgroundColor = n.propsObj.textBackgroundColor || "transparent";
            n.textBackgroundOpacity = n.propsObj.textBackgroundOpacity || 1;
            n.showText = n.propsObj.showText == "yes" ? true: false;
            n.showTextBackgroundImage = n.propsObj.showTextBackgroundImage == "yes" ? true: false;
            n.showBoxShadow = n.propsObj.showThumbnailBoxShadow == "yes" ? true: false;
            n.thumbBoxShadowCss = n.propsObj.thumbnailBoxShadowCss;
            n.showDisplay2DAlways = n.propsObj.showDisplay2DAlways == "yes" ? true: false;
            n.carouselStartPosition = n.propsObj.carouselStartPosition;
            n.nrThumbsToDisplay = n.propsObj.numberOfThumbnailsToDisplayLeftAndRight || 4;
            n.showScrollbar = n.propsObj.showScrollbar == "yes" ? true: false;
            n.disableScrollbarOnMobile = n.propsObj.disableScrollbarOnMobile == "yes" ? true: false;
            n.disableNextAndPrevButtonsOnMobile = n.propsObj.disableNextAndPrevButtonsOnMobile == "yes" ? true: false;
            n.enableMouseWheelScroll = n.propsObj.enableMouseWheelScroll == "yes" ? true: false;
            n.controlsMaxWidth = n.propsObj.controlsMaxWidth || 800;
            n.handlerWidth = n.propsObj.scrollbarHandlerWidth || 300;
            n.scrollbarTextColorNormal = n.propsObj.scrollbarTextColorNormal || "#777777";
            n.scrollbarTextColorSelected = n.propsObj.scrollbarTextColorSelected || "#FFFFFF";
            n.slideshowDelay = n.propsObj.slideshowDelay || 5e3;
            n.autoplay = n.propsObj.autoplay == "yes" ? true: false;
            n.showPrevButton = n.propsObj.showPrevButton == "yes" ? true: false;
            n.showNextButton = n.propsObj.showNextButton == "yes" ? true: false;
            n.showSlideshowButton = n.propsObj.showSlideshowButton == "yes" ? true: false;
            n.slideshowTimerColor = n.propsObj.slideshowTimerColor || "#777777";
            n.showContextMenu = n.propsObj.showContextMenu == "yes" ? true: false;
            n.addKeyboardSupport = n.propsObj.addKeyboardSupport == "yes" ? true: false;
            n.showRefl = n.propsObj.showReflection == "yes" ? true: false;
            n.reflHeight = n.propsObj.reflectionHeight || 100;
            n.reflDist = n.propsObj.reflectionDistance || 0;
            n.reflAlpha = n.propsObj.reflectionOpacity || .5;
            n.showComboBox = n.propsObj.showComboBox == "yes" ? true: false;
            n.showAllCategories = n.propsObj.showAllCategories == "no" ? false: true;
            n.allCategoriesLabel = n.propsObj.allCategoriesLabel || null;
            n.selectLabel = n.propsObj.selectLabel || "not defined!";
            n.selectorBackgroundNormalColor1 = n.propsObj.selectorBackgroundNormalColor1;
            n.selectorBackgroundNormalColor2 = n.propsObj.selectorBackgroundNormalColor2;
            n.selectorBackgroundSelectedColor1 = n.propsObj.selectorBackgroundSelectedColor1;
            n.selectorBackgroundSelectedColor2 = n.propsObj.selectorBackgroundSelectedColor2;
            n.selectorTextNormalColor = n.propsObj.selectorTextNormalColor;
            n.selectorTextSelectedColor = n.propsObj.selectorTextSelectedColor;
            n.buttonBackgroundNormalColor1 = n.propsObj.buttonBackgroundNormalColor1;
            n.buttonBackgroundNormalColor2 = n.propsObj.buttonBackgroundNormalColor2;
            n.buttonBackgroundSelectedColor1 = n.propsObj.buttonBackgroundSelectedColor1;
            n.buttonBackgroundSelectedColor2 = n.propsObj.buttonBackgroundSelectedColor2;
            n.buttonTextNormalColor = n.propsObj.buttonTextNormalColor;
            n.buttonTextSelectedColor = n.propsObj.buttonTextSelectedColor;
            n.comboBoxShadowColor = n.propsObj.comboBoxShadowColor || "#000000";
            n.comboBoxHorizontalMargins = n.propsObj.comboBoxHorizontalMargins || 0;
            n.comboBoxVerticalMargins = n.propsObj.comboBoxVerticalMargins || 0;
            n.comboBoxCornerRadius = n.propsObj.comboBoxCornerRadius || 0;
            if (n.propsObj.comboBoxPosition == "topleft" || n.propsObj.comboBoxPosition == "topright") {
                n.comboBoxPosition = FWDR3DCarUtils.trim(n.propsObj.comboBoxPosition).toLowerCase()
            } else {
                n.comboBoxPosition = "topleft"
            }
            n.addLightBoxKeyboardSupport_bl = n.propsObj.addLightBoxKeyboardSupport;
            n.addLightBoxKeyboardSupport_bl = n.addLightBoxKeyboardSupport_bl == "no" ? false: true;
            n.showLighBoxNextAndPrevButtons_bl = n.propsObj.showLightBoxNextAndPrevButtons;
            n.showLighBoxNextAndPrevButtons_bl = n.showLighBoxNextAndPrevButtons_bl == "no" ? false: true;
            n.showInfoWindowByDefault_bl = n.propsObj.showLightBoxInfoWindowByDefault;
            n.showInfoWindowByDefault_bl = n.showInfoWindowByDefault_bl == "yes" ? true: false;
            n.lightBoxVideoAutoPlay_bl = n.propsObj.lightBoxVideoAutoPlay;
            n.lightBoxVideoAutoPlay_bl = n.lightBoxVideoAutoPlay_bl == "yes" ? true: false;
            n.showLightBoxZoomButton_bl = n.propsObj.showLightBoxZoomButton;
            n.showLightBoxZoomButton_bl = n.showLightBoxZoomButton_bl == "no" ? false: true;
            n.showLightBoxInfoButton_bl = n.propsObj.showLightBoxInfoButton;
            n.showLightBoxInfoButton_bl = n.showLightBoxInfoButton_bl == "no" ? false: true;
            n.showLighBoxSlideShowButton_bl = n.propsObj.showLighBoxSlideShowButton;
            n.showLighBoxSlideShowButton_bl = n.showLighBoxSlideShowButton_bl == "no" ? false: true;
            n.slideShowAutoPlay_bl = n.propsObj.slideShowAutoPlay;
            n.slideShowAutoPlay_bl = n.slideShowAutoPlay_bl == "yes" ? true: false;
            n.lightBoxVideoWidth = n.propsObj.lightBoxVideoWidth || 640;
            n.lightBoxVideoHeight = n.propsObj.lightBoxVideoHeight || 480;
            n.lightBoxIframeWidth = n.propsObj.lightBoxIframeWidth || 800;
            n.lightBoxIframeHeight = n.propsObj.lightBoxIframeHeight || 600;
            n.lightBoxInfoWindowBackgroundColor_str = n.propsObj.lightBoxInfoWindowBackgroundColor || "transparent";
            n.lightBoxBackgroundColor_str = n.propsObj.lightBoxBackgroundColor || "transparent";
            n.lightBoxInfoWindowBackgroundOpacity = n.propsObj.lightBoxInfoWindowBackgroundOpacity || 1;
            n.lightBoxBackgroundOpacity = n.propsObj.lightBoxInfoWindowBackgroundOpacity || 1;
            n.lightBoxMainBackgroundOpacity = n.propsObj.lightBoxMainBackgroundOpacity || 1;
            n.lightBoxItemBorderColor_str1 = n.propsObj.lightBoxItemBorderColor1 || "transparent";
            n.lightBoxItemBorderColor_str2 = n.propsObj.lightBoxItemBorderColor2 || "transparent";
            n.lightBoxItemBackgroundColor_str = n.propsObj.lightBoxItemBackgroundColor || "transparent";
            n.lightBoxBorderSize = n.propsObj.lightBoxBorderSize || 0;
            n.lightBoxBorderRadius = n.propsObj.lightBoxBorderRadius || 0;
            n.lightBoxSlideShowDelay = n.propsObj.lightBoxSlideShowDelay || 4e3;
            var r = FWDR3DCarUtils.getChildrenFromAttribute(n.rootElement, "data-cat");
            if (!r) {
                e = "At least one datalist ul tag with the attribute <font color='#FFFFFF'>data-cat</font> must be defined.";
                n.dispatchEvent(t.LOAD_ERROR, {
                    text: e
                });
                return
            }
            var i = r.length;
            var s = [];
            var o = [];
            var u;
            var a;
            var f;
            var l;
            var c;
            var h;
            var p;
            var d;
            var v;
            var m;
            var g;
            for (var y = 0; y < i; y++) {
                l = r[y];
                a = [];
                u = [];
                p = FWDR3DCarUtils.getChildren(l);
                c = p.length;
                for (var b = 0; b < c; b++) {
                    var w = {};
                    var E = p[b];
                    var f = FWDR3DCarUtils.getChildren(E);
                    m = y + 1;
                    g = b + 1;
                    h = f.length;
                    if (n.showThumbnailsHtmlContent) {
                        x = true;
                        for (var S = 0; S < h; S++) {
                            v = "data-html-content";
                            if (FWDR3DCarUtils.hasAttribute(f[S], "data-html-content")) {
                                x = false;
                                w.htmlContent = f[S].innerHTML;
                                break
                            }
                        }
                        if (x) {
                            e = "Element with attribute <font color='#FFFFFF'>" + v + "</font> is not defined in the datalist number - <font color='#FFFFFF'>" + m + "</font> at position - <font color='#FFFFFF'>" + g + "</font> in the datalist ul element.";
                            n.dispatchEvent(t.LOAD_ERROR, {
                                text: e
                            });
                            return
                        }
                    } else {
                        var x = true;
                        for (var S = 0; S < h; S++) {
                            v = "data-thumbnail-path";
                            if (FWDR3DCarUtils.hasAttribute(f[S], "data-thumbnail-path")) {
                                x = false;
                                w.thumbPath = FWDR3DCarUtils.trim(FWDR3DCarUtils.getAttributeValue(f[S], "data-thumbnail-path"));
                                break
                            }
                        }
                        if (x) {
                            e = "Element with attribute <font color='#FFFFFF'>" + v + "</font> is not defined in the datalist number - <font color='#FFFFFF'>" + m + "</font> at position - <font color='#FFFFFF'>" + g + "</font> in the datalist ul element.";
                            n.dispatchEvent(t.LOAD_ERROR, {
                                text: e
                            });
                            return
                        }
                    }
                    if (n.showText) {
                        var x = true;
                        for (var S = 0; S < h; S++) {
                            v = "data-thumbnail-text";
                            if (FWDR3DCarUtils.hasAttribute(f[S], "data-thumbnail-text")) {
                                x = false;
                                w.thumbText = f[S].innerHTML;
                                d = f[S];
                                break
                            }
                        }
                        if (x) {
                            e = "Element with attribute <font color='#FFFFFF'>" + v + "</font> is not defined in the datalist number - <font color='#FFFFFF'>" + m + "</font> at position - <font color='#FFFFFF'>" + g + "</font> in the datalist ul element.";
                            n.dispatchEvent(t.LOAD_ERROR, {
                                text: e
                            });
                            return
                        }
                        w.textTitleOffset = parseInt(FWDR3DCarUtils.trim(FWDR3DCarUtils.getAttributeValue(d, "data-thumbnail-text-title-offset")));
                        w.textDescriptionOffsetTop = parseInt(FWDR3DCarUtils.trim(FWDR3DCarUtils.getAttributeValue(d, "data-thumbnail-text-offset-top")));
                        w.textDescriptionOffsetBottom = parseInt(FWDR3DCarUtils.trim(FWDR3DCarUtils.getAttributeValue(d, "data-thumbnail-text-offset-bottom")));
                        if (FWDR3DCarUtils.trim(w.thumbText) == "") {
                            w.emptyText = true
                        } else {
                            w.emptyText = false
                        }
                    }
                    x = true;
                    for (var S = 0; S < h; S++) {
                        v = "data-type";
                        if (FWDR3DCarUtils.hasAttribute(f[S], "data-type")) {
                            x = false;
                            w.mediaType = FWDR3DCarUtils.trim(FWDR3DCarUtils.getAttributeValue(f[S], "data-type"));
                            break
                        }
                    }
                    if (x) {
                        e = "Element with attribute <font color='#FFFFFF'>" + v + "</font> is not defined in the datalist number - <font color='#FFFFFF'>" + m + "</font> at position - <font color='#FFFFFF'>" + g + "</font> in the datalist ul element.";
                        n.dispatchEvent(t.LOAD_ERROR, {
                            text: e
                        });
                        return
                    }
                    if (w.mediaType != "none") {
                        x = true;
                        for (var S = 0; S < h; S++) {
                            v = "data-url";
                            if (FWDR3DCarUtils.hasAttribute(f[S], "data-url")) {
                                x = false;
                                d = f[S];
                                break
                            }
                        }
                        if (x) {
                            e = "Element with attribute <font color='#FFFFFF'>" + v + "</font> is not defined in the datalist number - <font color='#FFFFFF'>" + m + "</font> at position - <font color='#FFFFFF'>" + g + "</font> in the datalist ul element.";
                            n.dispatchEvent(t.LOAD_ERROR, {
                                text: e
                            });
                            return
                        }
                    }
                    d = f[S];
                    var T = {};
                    T.dataType = FWDR3DCarUtils.trim(FWDR3DCarUtils.getAttributeValue(d, "data-type"));
                    T.url = FWDR3DCarUtils.trim(FWDR3DCarUtils.getAttributeValue(d, "data-url"));
                    T.target = FWDR3DCarUtils.getAttributeValue(d, "data-target");
                    T.info = FWDR3DCarUtils.getAttributeValue(d, "data-info");
                    if (!T.target) T.target = "_blank";
                    for (var S = 0; S < h; S++) {
                        if (FWDR3DCarUtils.hasAttribute(f[S], "data-info")) {
                            T.infoText = f[S].innerHTML;
                            break
                        }
                    }
                    w.secondObj = T;
                    if (w.mediaType != "link" && w.mediaType != "none") {
                        u.push(T);
                        o.push(T)
                    }
                    a[b] = w;
                    s.push(w)
                }
                n.categoriesAr[y] = FWDR3DCarUtils.getAttributeValue(l, "data-cat") || "not defined!";
                n.dataListAr[y] = a;
                n.lightboxAr[y] = u
            }
            if (n.showAllCategories) {
                n.categoriesAr.unshift(n.allCategoriesLabel);
                n.dataListAr.unshift(s);
                n.lightboxAr.unshift(o);
                i++
            }
            n.startAtCategory = n.propsObj.startAtCategory || 1;
            if (isNaN(n.startAtCategory)) n.startAtCategory = 1;
            if (n.startAtCategory <= 0) n.startAtCategory = 1;
            if (n.startAtCategory > i) n.startAtCategory = i;
            n.startAtCategory -= 1;
            if (!n.propsObj.skinPath) {
                n.dispatchEvent(FWDR3DCovData.LOAD_ERROR, {
                    text: "Carousel graphics skin path is not defined in FWDR3DCov3DCoverflow constructor function!"
                });
                return
            }
            var N = n.propsObj.skinPath + "/preloader.png";
            n.thumbGradientLeftPath = n.propsObj.skinPath + "/gradientLeft.png";
            n.thumbGradientRightPath = n.propsObj.skinPath + "/gradientRight.png";
            n.thumbTitleGradientPath = n.propsObj.skinPath + "/textGradient.png";
            var C = n.propsObj.skinPath + "/nextButtonNormalState.png";
            var k = n.propsObj.skinPath + "/nextButtonSelectedState.png";
            var L = n.propsObj.skinPath + "/prevButtonNormalState.png";
            var A = n.propsObj.skinPath + "/prevButtonSelectedState.png";
            var O = n.propsObj.skinPath + "/playButtonNormalState.png";
            var M = n.propsObj.skinPath + "/playButtonSelectedState.png";
            var _ = n.propsObj.skinPath + "/pauseButtonSelectedState.png";
            var D = n.propsObj.skinPath + "/handlerLeftNormal.png";
            var P = n.propsObj.skinPath + "/handlerLeftSelected.png";
            n.handlerCenterNPath = n.propsObj.skinPath + "/handlerCenterNormal.png";
            n.handlerCenterSPath = n.propsObj.skinPath + "/handlerCenterSelected.png";
            var H = n.propsObj.skinPath + "/handlerRightNormal.png";
            var B = n.propsObj.skinPath + "/handlerRightSelected.png";
            var j = n.propsObj.skinPath + "/trackLeft.png";
            n.trackCenterPath = n.propsObj.skinPath + "/trackCenter.png";
            var F = n.propsObj.skinPath + "/trackRight.png";
            var I = n.propsObj.skinPath + "/slideshowTimer.png";
            var q = n.propsObj.skinPath + "/slideShowPreloader.png";
            var R = n.propsObj.skinPath + "/closeButtonNormalState.png";
            var U = n.propsObj.skinPath + "/closeButtonSelectedState.png";
            var z = n.propsObj.skinPath + "/lightboxNextButtonNormalState.png";
            var W = n.propsObj.skinPath + "/lightboxNextButtonSelectedState.png";
            var X = n.propsObj.skinPath + "/lightboxPrevButtonNormalState.png";
            var V = n.propsObj.skinPath + "/lightboxPrevButtonSelectedState.png";
            var $ = n.propsObj.skinPath + "/lightboxPlayButtonNormalState.png";
            var J = n.propsObj.skinPath + "/lightboxPlayButtonSelectedState.png";
            var K = n.propsObj.skinPath + "/lightboxPauseButtonNormalState.png";
            var Q = n.propsObj.skinPath + "/lightboxPauseButtonSelectedState.png";
            var G = n.propsObj.skinPath + "/maximizeButtonNormalState.png";
            var Y = n.propsObj.skinPath + "/maximizeButtonSelectedState.png";
            var Z = n.propsObj.skinPath + "/minimizeButtonNormalState.png";
            var et = n.propsObj.skinPath + "/minimizeButtonSelectedState.png";
            var tt = n.propsObj.skinPath + "/infoButtonOpenNormalState.png";
            var nt = n.propsObj.skinPath + "/infoButtonOpenSelectedState.png";
            var rt = n.propsObj.skinPath + "/infoButtonCloseNormalPath.png";
            var it = n.propsObj.skinPath + "/infoButtonCloseSelectedPath.png";
            n.comboboxArrowIconN_str = n.propsObj.skinPath + "/comboboxArrowNormal.png";
            n.comboboxArrowIconS_str = n.propsObj.skinPath + "/comboboxArrowSelected.png";
            n.graphicsPathsAr.push(N);
            n.graphicsPathsAr.push(n.thumbGradientLeftPath);
            n.graphicsPathsAr.push(n.thumbGradientRightPath);
            n.graphicsPathsAr.push(n.thumbTitleGradientPath);
            n.graphicsPathsAr.push(C);
            n.graphicsPathsAr.push(k);
            n.graphicsPathsAr.push(L);
            n.graphicsPathsAr.push(A);
            n.graphicsPathsAr.push(O);
            n.graphicsPathsAr.push(M);
            n.graphicsPathsAr.push(_);
            n.graphicsPathsAr.push(D);
            n.graphicsPathsAr.push(P);
            n.graphicsPathsAr.push(n.handlerCenterNPath);
            n.graphicsPathsAr.push(n.handlerCenterSPath);
            n.graphicsPathsAr.push(H);
            n.graphicsPathsAr.push(B);
            n.graphicsPathsAr.push(j);
            n.graphicsPathsAr.push(n.trackCenterPath);
            n.graphicsPathsAr.push(F);
            n.graphicsPathsAr.push(I);
            n.graphicsPathsAr.push(N);
            n.graphicsPathsAr.push(R);
            n.graphicsPathsAr.push(U);
            n.graphicsPathsAr.push(z);
            n.graphicsPathsAr.push(W);
            n.graphicsPathsAr.push(X);
            n.graphicsPathsAr.push(V);
            n.graphicsPathsAr.push($);
            n.graphicsPathsAr.push(J);
            n.graphicsPathsAr.push(K);
            n.graphicsPathsAr.push(Q);
            n.graphicsPathsAr.push(G);
            n.graphicsPathsAr.push(Y);
            n.graphicsPathsAr.push(Z);
            n.graphicsPathsAr.push(et);
            n.graphicsPathsAr.push(tt);
            n.graphicsPathsAr.push(nt);
            n.graphicsPathsAr.push(rt);
            n.graphicsPathsAr.push(it);
            n.graphicsPathsAr.push(q);
            n.graphicsPathsAr.push(n.comboboxArrowIconN_str);
            n.graphicsPathsAr.push(n.comboboxArrowIconS_str);
            n.totalGraphics = n.graphicsPathsAr.length;
            try {
                n.rootElement.parentNode.removeChild(n.rootElement)
            } catch(st) {}
            n.loadGraphics()
        };
        this.loadGraphics = function() {
            if (n.image) {
                n.image.onload = null;
                n.image.onerror = null
            }
            var e = n.graphicsPathsAr[n.countLoadedGraphics];
            n.image = new Image;
            n.image.onload = n.onImageLoadHandler;
            n.image.onerror = n.onImageLoadErrorHandler;
            n.image.src = e
        };
        this.onImageLoadHandler = function(e) {
            if (n.countLoadedGraphics == 0) {
                n.mainPreloaderImg = n.image
            } else if (n.countLoadedGraphics == 1) {
                n.thumbGradientLeftImg = n.image
            } else if (n.countLoadedGraphics == 2) {
                n.thumbGradientRightImg = n.image
            } else if (n.countLoadedGraphics == 3) {
                n.thumbTitleGradientImg = n.image
            } else if (n.countLoadedGraphics == 4) {
                n.nextButtonNImg = n.image;
                n.dispatchEvent(t.PRELOADER_LOAD_DONE)
            } else if (n.countLoadedGraphics == 5) {
                n.nextButtonSImg = n.image
            } else if (n.countLoadedGraphics == 6) {
                n.prevButtonNImg = n.image
            } else if (n.countLoadedGraphics == 7) {
                n.prevButtonSImg = n.image
            } else if (n.countLoadedGraphics == 8) {
                n.playButtonNImg = n.image
            } else if (n.countLoadedGraphics == 9) {
                n.playButtonSImg = n.image
            } else if (n.countLoadedGraphics == 10) {
                n.pauseButtonImg = n.image
            } else if (n.countLoadedGraphics == 11) {
                n.handlerLeftNImg = n.image
            } else if (n.countLoadedGraphics == 12) {
                n.handlerLeftSImg = n.image
            } else if (n.countLoadedGraphics == 13) {
                n.handlerCenterNImg = n.image
            } else if (n.countLoadedGraphics == 14) {
                n.handlerCenterSImg = n.image
            } else if (n.countLoadedGraphics == 15) {
                n.handlerRightNImg = n.image
            } else if (n.countLoadedGraphics == 16) {
                n.handlerRightSImg = n.image
            } else if (n.countLoadedGraphics == 17) {
                n.trackLeftImg = n.image
            } else if (n.countLoadedGraphics == 18) {
                n.trackCenterImg = n.image
            } else if (n.countLoadedGraphics == 19) {
                n.trackRightImg = n.image
            } else if (n.countLoadedGraphics == 20) {
                n.slideshowTimerImg = n.image
            } else if (n.countLoadedGraphics == 21) {
                n.lightboxPreloader_img = n.image
            } else if (n.countLoadedGraphics == 22) {
                n.lightboxCloseButtonN_img = n.image
            } else if (n.countLoadedGraphics == 23) {
                n.lightboxCloseButtonS_img = n.image
            } else if (n.countLoadedGraphics == 24) {
                n.lightboxNextButtonN_img = n.image
            } else if (n.countLoadedGraphics == 25) {
                n.lightboxNextButtonS_img = n.image
            } else if (n.countLoadedGraphics == 26) {
                n.lightboxPrevButtonN_img = n.image
            } else if (n.countLoadedGraphics == 27) {
                n.lightboxPrevButtonS_img = n.image
            } else if (n.countLoadedGraphics == 28) {
                n.lightboxPlayN_img = n.image
            } else if (n.countLoadedGraphics == 29) {
                n.lightboxPlayS_img = n.image
            } else if (n.countLoadedGraphics == 30) {
                n.lightboxPauseN_img = n.image
            } else if (n.countLoadedGraphics == 31) {
                n.lightboxPauseS_img = n.image
            } else if (n.countLoadedGraphics == 32) {
                n.lightboxMaximizeN_img = n.image
            } else if (n.countLoadedGraphics == 33) {
                n.lightboxMaximizeS_img = n.image
            } else if (n.countLoadedGraphics == 34) {
                n.lightboxMinimizeN_img = n.image
            } else if (n.countLoadedGraphics == 35) {
                n.lightboxMinimizeS_img = n.image
            } else if (n.countLoadedGraphics == 36) {
                n.lightboxInfoOpenN_img = n.image
            } else if (n.countLoadedGraphics == 37) {
                n.lightboxInfoOpenS_img = n.image
            } else if (n.countLoadedGraphics == 38) {
                n.lightboxInfoCloseN_img = n.image
            } else if (n.countLoadedGraphics == 39) {
                n.lightboxInfoCloseS_img = n.image
            } else if (n.countLoadedGraphics == 40) {
                n.slideShowPreloader_img = n.image
            } else if (n.countLoadedGraphics == 41) {
                n.comboboxArrowIconN_img = n.image
            } else if (n.countLoadedGraphics == 42) {
                n.comboboxArrowIconS_img = n.image
            }
            n.countLoadedGraphics++;
            if (n.countLoadedGraphics < n.totalGraphics) {
                n.loadGraphics()
            } else {
                n.dispatchEvent(t.LOAD_DONE)
            }
        };
        this.onImageLoadErrorHandler = function(e) {
            var r = "Graphics image not found! <font color='#FFFFFF'>" + n.graphicsPathsAr[n.countLoadedGraphics] + "</font>";
            var i = {
                text: r
            };
            n.dispatchEvent(t.LOAD_ERROR, i)
        };
        this.checkForAttribute = function(e, r) {
            var i = FWDR3DCarUtils.getChildFromNodeListFromAttribute(e, r);
            i = i ? FWDR3DCarUtils.trim(FWDR3DCarUtils.getAttributeValue(i, r)) : undefined;
            if (!i) {
                n.dispatchEvent(t.LOAD_ERROR, {
                    text: "Element  with attribute <font color='#FFFFFF'>" + r + "</font> is not defined."
                });
                return
            }
            return i
        };
        this.destroy = function() {
            clearTimeout(n.parseDelayId);
            if (n.image) {
                n.image.onload = null;
                n.image.onerror = null;
                n.image.src = ""
            }
            n.propsObj = null;
            n.imagesAr = null;
            n.graphicsPathsAr = null;
            n.dataListAr = [];
            n.lightboxAr = [];
            n.categoriesAr = [];
            if (this.mainPreloaderImg) this.mainPreloaderImg.src = "";
            if (this.thumbGradientLeftImg) this.thumbGradientLeftImg.src = "";
            if (this.thumbGradientRightImg) this.thumbGradientRightImg.src = "";
            if (this.thumbTitleGradientImg) this.thumbTitleGradientImg.src = "";
            if (this.nextButtonNImg) this.nextButtonNImg.src = "";
            if (this.nextButtonSImg) this.nextButtonSImg.src = "";
            if (this.prevButtonNImg) this.prevButtonNImg.src = "";
            if (this.prevButtonSImg) this.prevButtonSImg.src = "";
            if (this.playButtonNImg) this.playButtonNImg.src = "";
            if (this.playButtonSImg) this.playButtonSImg.src = "";
            if (this.pauseButtonNImg) this.pauseButtonNImg.src = "";
            if (this.pauseButtonSImg) this.pauseButtonSImg.src = "";
            if (this.handlerLeftNImg) this.handlerLeftNImg.src = "";
            if (this.handlerLeftSImg) this.handlerLeftSImg.src = "";
            if (this.handlerCenterNImg) this.handlerCenterNImg.src = "";
            if (this.handlerCenterSImg) this.handlerCenterSImg.src = "";
            if (this.handlerRightNImg) this.handlerRightNImg.src = "";
            if (this.handlerRightSImg) this.handlerRightSImg.src = "";
            if (this.trackLeftImg) this.trackLeftImg.src = "";
            if (this.trackCenterImg) this.trackCenterImg.src = "";
            if (this.trackRightImg) this.trackRightImg.src = "";
            if (this.slideshowTimerImg) this.slideshowTimerImg.src = "";
            this.mainPreloaderImg = null;
            this.thumbGradientLeftImg = null;
            this.thumbGradientRightImg = null;
            this.thumbTitleGradientImg = null;
            this.nextButtonNImg = null;
            this.nextButtonSImg = null;
            this.prevButtonNImg = null;
            this.prevButtonSImg = null;
            this.playButtonNImg = null;
            this.playButtonSImg = null;
            this.pauseButtonNImg = null;
            this.pauseButtonSImg = null;
            this.handlerLeftNImg = null;
            this.handlerLeftSImg = null;
            this.handlerCenterNImg = null;
            this.handlerCenterSImg = null;
            this.handlerRightNImg = null;
            this.handlerRightSImg = null;
            this.trackLeftImg = null;
            this.trackCenterImg = null;
            this.trackRightImg = null;
            this.slideshowTimerImg = null;
            if (this.lightboxCloseButtonN_img) this.lightboxCloseButtonN_img.src = "";
            if (this.lightboxCloseButtonS_img) this.lightboxCloseButtonS_img.src = "";
            if (this.lightboxNextButtonN_img) this.lightboxNextButtonN_img.src = "";
            if (this.lightboxNextButtonS_img) this.lightboxNextButtonS_img.src = "";
            if (this.lightboxPrevButtonN_img) this.lightboxPrevButtonN_img.src = "";
            if (this.lightboxPrevButtonS_img) this.lightboxPrevButtonS_img.src = "";
            if (this.lightboxPlayN_img) this.lightboxPlayN_img.src = "";
            if (this.lightboxPlayS_img) this.lightboxPlayS_img.src = "";
            if (this.lightboxPauseN_img) this.lightboxPauseN_img.src = "";
            if (this.lightboxPauseS_img) this.lightboxPauseS_img.src = "";
            if (this.lightboxMaximizeN_img) this.lightboxMaximizeN_img.src = "";
            if (this.lightboxMaximizeS_img) this.lightboxMaximizeS_img.src = "";
            if (this.lightboxMinimizeN_img) this.lightboxMinimizeN_img.src = "";
            if (this.lightboxMinimizeS_img) this.lightboxMinimizeS_img.src = "";
            if (this.lightboxInfoOpenN_img) this.lightboxInfoOpenN_img.src = "";
            if (this.lightboxInfoOpenS_img) this.lightboxInfoOpenS_img.src = "";
            if (this.lightboxInfoCloseN_img) this.lightboxInfoCloseN_img.src = "";
            if (this.lightboxInfoCloseS_img) this.lightboxInfoCloseS_img.src = "";
            this.lightboxCloseButtonN_img = null;
            this.lightboxCloseButtonS_img = null;
            this.lightboxNextButtonN_img = null;
            this.lightboxNextButtonS_img = null;
            this.lightboxPrevButtonN_img = null;
            this.lightboxPrevButtonS_img = null;
            this.lightboxPlayN_img = null;
            this.lightboxPlayS_img = null;
            this.lightboxPauseN_img = null;
            this.lightboxPauseS_img = null;
            this.lightboxMaximizeN_img = null;
            this.lightboxMaximizeS_img = null;
            this.lightboxMinimizeN_img = null;
            this.lightboxMinimizeS_img = null;
            this.lightboxInfoOpenN_img = null;
            this.lightboxInfoOpenS_img = null;
            this.lightboxInfoCloseN_img = null;
            this.lightboxInfoCloseS_img = null;
            if (this.comboboxArrowIconN_img) this.comboboxArrowIconN_img.src = "";
            if (this.comboboxArrowIconS_img) this.comboboxArrowIconS_img.src = "";
            this.comboboxArrowIconN_img = null;
            this.comboboxArrowIconN_img = null;
            n.image = null;
            r.destroy();
            n = null;
            r = null;
            t.prototype = null
        };
        this.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDR3DCarEventDispatcher
    };
    t.prototype = null;
    t.PRELOADER_LOAD_DONE = "onPreloaderLoadDone";
    t.LOAD_DONE = "onLoadDone";
    t.LOAD_ERROR = "onLoadError";
    e.FWDR3DCarData = t
})(window); (function(e) {
    var t = function(e, t, n, r) {
        this.listeners = {
            events_ar: []
        };
        var i = this;
        if (e == "div" || e == "img" || e == "canvas") {
            this.type = e
        } else {
            throw Error("Type is not valid! " + e)
        }
        this.children_ar = [];
        this.style;
        this.screen;
        this.numChildren;
        this.transform;
        this.position = t || "absolute";
        this.overflow = n || "hidden";
        this.display = r || "inline-block";
        this.visible = true;
        this.buttonMode;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.rect;
        this.alpha = 1;
        this.innerHTML = "";
        this.opacityType = "";
        this.isHtml5_bl = false;
        this.isMobile_bl = FWDR3DCarUtils.isMobile;
        this.hasTransform3d_bl = FWDR3DCarUtils.hasTransform3d;
        this.hasTransform2d_bl = FWDR3DCarUtils.hasTransform2d;
        if (FWDR3DCarUtils.isFirefox) i.hasTransform3d_bl = false;
        if (FWDR3DCarUtils.isFirefox) i.hasTransform2d_bl = false;
        this.init = function() {
            this.setScreen()
        };
        this.getTransform = function() {
            var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"];
            var t;
            while (t = e.shift()) {
                if (typeof this.screen.style[t] !== "undefined") {
                    return t
                }
            }
            return false
        };
        this.getOpacityType = function() {
            var e;
            if (typeof this.screen.style.opacity != "undefined") {
                e = "opacity"
            } else {
                e = "filter"
            }
            return e
        };
        this.setScreen = function(e) {
            if (this.type == "img" && e) {
                this.screen = e;
                this.setMainProperties()
            } else {
                this.screen = document.createElement(this.type);
                this.setMainProperties()
            }
        };
        this.setMainProperties = function() {
            this.transform = this.getTransform();
            this.setPosition(this.position);
            this.setDisplay(this.display);
            this.setOverflow(this.overflow);
            this.opacityType = this.getOpacityType();
            if (this.opacityType == "opacity") this.isHtml5_bl = true;
            if (i.opacityType == "filter") i.screen.style.filter = "inherit";
            this.screen.style.left = "0px";
            this.screen.style.top = "0px";
            this.screen.style.margin = "0px";
            this.screen.style.padding = "0px";
            this.screen.style.maxWidth = "none";
            this.screen.style.maxHeight = "none";
            this.screen.style.border = "none";
            this.screen.style.lineHeight = "1";
            this.screen.style.backgroundColor = "transparent";
            this.screen.style.backfaceVisibility = "hidden";
            this.screen.style.webkitBackfaceVisibility = "hidden";
            this.screen.style.MozBackfaceVisibility = "hidden";
            if (e == "img") {
                this.setWidth(this.screen.width);
                this.setHeight(this.screen.height);
                this.screen.onmousedown = function(e) {
                    return false
                }
            }
        };
        i.setBackfaceVisibility = function() {
            i.screen.style.backfaceVisibility = "visible";
            i.screen.style.webkitBackfaceVisibility = "visible";
            i.screen.style.MozBackfaceVisibility = "visible"
        };
        i.removeBackfaceVisibility = function() {
            i.screen.style.backfaceVisibility = "hidden";
            i.screen.style.webkitBackfaceVisibility = "hidden";
            i.screen.style.MozBackfaceVisibility = "hidden"
        };
        this.setSelectable = function(e) {
            if (!e) {
                try {
                    this.screen.style.userSelect = "none"
                } catch(t) {}
                try {
                    this.screen.style.MozUserSelect = "none"
                } catch(t) {}
                try {
                    this.screen.style.webkitUserSelect = "none"
                } catch(t) {}
                try {
                    this.screen.style.khtmlUserSelect = "none"
                } catch(t) {}
                try {
                    this.screen.style.oUserSelect = "none"
                } catch(t) {}
                try {
                    this.screen.style.msUserSelect = "none"
                } catch(t) {}
                try {
                    this.screen.msUserSelect = "none"
                } catch(t) {}
                this.screen.ondragstart = function(e) {
                    return false
                };
                this.screen.onselectstart = function() {
                    return false
                };
                this.screen.style.webkitTouchCallout = "none"
            }
        };
        this.getScreen = function() {
            return i.screen
        };
        this.setVisible = function(e) {
            this.visible = e;
            if (this.visible == true) {
                this.screen.style.visibility = "visible"
            } else {
                this.screen.style.visibility = "hidden"
            }
        };
        this.getVisible = function() {
            return this.visible
        };
        this.setResizableSizeAfterParent = function() {
            this.screen.style.width = "100%";
            this.screen.style.height = "100%"
        };
        this.getStyle = function() {
            return this.screen.style
        };
        this.setOverflow = function(e) {
            i.overflow = e;
            i.screen.style.overflow = i.overflow
        };
        this.setPosition = function(e) {
            i.position = e;
            i.screen.style.position = i.position
        };
        this.setDisplay = function(e) {
            this.display = e;
            this.screen.style.display = this.display
        };
        this.setButtonMode = function(e) {
            this.buttonMode = e;
            if (this.buttonMode == true) {
                this.screen.style.cursor = "pointer"
            } else {
                this.screen.style.cursor = "default"
            }
        };
        this.setBkColor = function(e) {
            i.screen.style.backgroundColor = e
        };
        this.setInnerHTML = function(e) {
            i.innerHTML = e;
            i.screen.innerHTML = i.innerHTML
        };
        this.getInnerHTML = function() {
            return i.innerHTML
        };
        this.getRect = function() {
            return i.screen.getBoundingClientRect()
        };
        this.setAlpha = function(e) {
            i.alpha = e;
            if (i.opacityType == "opacity") {
                i.screen.style.opacity = i.alpha
            } else if (i.opacityType == "filter") {
                i.screen.style.filter = "alpha(opacity=" + i.alpha * 100 + ")";
                i.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(i.alpha * 100) + ")"
            }
        };
        this.getAlpha = function() {
            return i.alpha
        };
        this.getRect = function() {
            return this.screen.getBoundingClientRect()
        };
        this.getGlobalX = function() {
            return this.getRect().left
        };
        this.getGlobalY = function() {
            return this.getRect().top
        };
        this.setX = function(e) {
            i.x = e;
            if (i.isMobile_bl) {
                i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)"
            } else if (i.hasTransform3d_bl) {
                i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)"
            } else if (i.hasTransform2d_bl) {
                i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)"
            } else {
                i.screen.style.left = i.x + "px"
            }
        };
        this.getX = function() {
            return i.x
        };
        this.setY = function(e) {
            i.y = e;
            if (i.isMobile_bl) {
                i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)"
            } else if (i.hasTransform3d_bl && !FWDR3DCarUtils.isAndroid) {
                i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)"
            } else if (i.hasTransform2d_bl) {
                i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)"
            } else {
                i.screen.style.top = i.y + "px"
            }
        };
        this.getY = function() {
            return i.y
        };
        this.setZIndex = function(e) {
            i.screen.style.zIndex = e
        };
        this.setWidth = function(e) {
            i.w = e;
            if (i.type == "img") {
                i.screen.width = i.w
            } else {
                i.screen.style.width = i.w + "px"
            }
        };
        this.getWidth = function() {
            if (i.type == "div") {
                if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                return i.w
            } else if (i.type == "img") {
                if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                if (i.screen.width != 0) return i.screen.width;
                return i._w
            } else if (i.type == "canvas") {
                if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                return i.w
            }
        };
        this.setHeight = function(e) {
            i.h = e;
            if (i.type == "img") {
                i.screen.height = i.h
            } else {
                i.screen.style.height = i.h + "px"
            }
        };
        this.getHeight = function() {
            if (i.type == "div") {
                if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                return i.h
            } else if (i.type == "img") {
                if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                if (i.screen.height != 0) return i.screen.height;
                return i.h
            } else if (i.type == "canvas") {
                if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                return i.h
            }
        };
        this.getNumChildren = function() {
            return i.children_ar.length
        };
        this.addChild = function(e) {
            if (this.contains(e)) {
                this.children_ar.splice(FWDR3DCarUtils.indexOfArray(this.children_ar, e), 1);
                this.children_ar.push(e);
                this.screen.appendChild(e.screen)
            } else {
                this.children_ar.push(e);
                this.screen.appendChild(e.screen)
            }
        };
        this.removeChild = function(e) {
            if (this.contains(e)) {
                this.children_ar.splice(FWDR3DCarUtils.indexOfArray(this.children_ar, e), 1);
                this.screen.removeChild(e.screen)
            } else {
                throw Error("##removeChild()## Child doesn't exist, it can't be removed!")
            }
        };
        this.contains = function(e) {
            if (FWDR3DCarUtils.indexOfArray(this.children_ar, e) == -1) {
                return false
            } else {
                return true
            }
        };
        this.addChildAtZero = function(e) {
            if (this.numChildren == 0) {
                this.children_ar.push(e);
                this.screen.appendChild(e.screen)
            } else {
                this.screen.insertBefore(e.screen, this.children_ar[0].screen);
                if (this.contains(e)) {
                    this.children_ar.splice(FWDR3DCarUtils.indexOfArray(this.children_ar, e), 1)
                }
                this.children_ar.unshift(e)
            }
        };
        this.getChildAt = function(e) {
            if (e < 0 || e > this.numChildren - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (this.numChildren == 0) throw Errror("##getChildAt## Child dose not exist!");
            return this.children_ar[e]
        };
        this.removeChildAtZero = function() {
            this.screen.removeChild(this.children_ar[0].screen);
            this.children_ar.shift()
        };
        this.addListener = function(e, t) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            if (typeof t != "function") throw Error("listener must be of type Function.");
            var n = {};
            n.type = e;
            n.listener = t;
            n.target = this;
            this.listeners.events_ar.push(n)
        };
        this.dispatchEvent = function(e, t) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            for (var n = 0,
            r = this.listeners.events_ar.length; n < r; n++) {
                if (this.listeners.events_ar[n].target === this && this.listeners.events_ar[n].type === e) {
                    if (t) {
                        for (var i in t) {
                            this.listeners.events_ar[n][i] = t[i]
                        }
                    }
                    this.listeners.events_ar[n].listener.call(this, this.listeners.events_ar[n]);
                    break
                }
            }
        };
        this.removeListener = function(e, t) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            if (typeof t != "function") throw Error("listener must be of type Function." + e);
            for (var n = 0,
            r = this.listeners.events_ar.length; n < r; n++) {
                if (this.listeners.events_ar[n].target === this && this.listeners.events_ar[n].type === e && this.listeners.events_ar[n].listener === t) {
                    this.listeners.events_ar.splice(n, 1);
                    break
                }
            }
        };
        this.disposeImage = function() {
            if (this.type == "img") this.screen.src = ""
        };
        this.destroy = function() {
            try {
                this.screen.parentNode.removeChild(this.screen)
            } catch(e) {}
            this.screen.onselectstart = null;
            this.screen.ondragstart = null;
            this.screen.ontouchstart = null;
            this.screen.ontouchmove = null;
            this.screen.ontouchend = null;
            this.screen.onmouseover = null;
            this.screen.onmouseout = null;
            this.screen.onmouseup = null;
            this.screen.onmousedown = null;
            this.screen.onmousemove = null;
            this.screen.onclick = null;
            delete this.screen;
            delete this.style;
            delete this.rect;
            delete this.selectable;
            delete this.buttonMode;
            delete this.position;
            delete this.overflow;
            delete this.visible;
            delete this.innerHTML;
            delete this.numChildren;
            delete this.x;
            delete this.y;
            delete this.w;
            delete this.h;
            delete this.opacityType;
            delete this.isHtml5_bl;
            delete this.hasTransform3d_bl;
            delete this.hasTransform2d_bl;
            this.children_ar = null;
            this.style = null;
            this.screen = null;
            this.numChildren = null;
            this.transform = null;
            this.position = null;
            this.overflow = null;
            this.display = null;
            this.visible = null;
            this.buttonMode = null;
            this.globalX = null;
            this.globalY = null;
            this.x = null;
            this.y = null;
            this.w = null;
            this.h = null;
            this.rect = null;
            this.alpha = null;
            this.innerHTML = null;
            this.opacityType = null;
            this.isHtml5_bl = null;
            this.hasTransform3d_bl = null;
            this.hasTransform2d_bl = null;
            i = null
        };
        this.init()
    };
    e.FWDR3DCarDisplayObject = t
})(window); (function(e) {
    var t = function(e, t, n, r) {
        this.listeners = {
            events_ar: []
        };
        var i = this;
        if (e == "div" || e == "img" || e == "canvas") {
            this.type = e
        } else {
            throw Error("Type is not valid! " + e)
        }
        this.children_ar = [];
        this.style;
        this.screen;
        this.numChildren;
        this.transform;
        this.position = t || "absolute";
        this.overflow = n || "hidden";
        this.display = r || "block";
        this.visible = true;
        this.buttonMode;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.angleX = 0;
        this.angleY = 0;
        this.angleZ = 0;
        this.perspective = 0;
        this.zIndex = 0;
        this.scale = 1;
        this.w = 0;
        this.h = 0;
        this.rect;
        this.alpha = 1;
        this.innerHTML = "";
        this.opacityType = "";
        this.isHtml5_bl = false;
        this.hasTransform3d_bl = FWDR3DCarUtils.hasTransform3d;
        this.hasTransform2d_bl = FWDR3DCarUtils.hasTransform2d;
        this.init = function() {
            this.setScreen()
        };
        this.getTransform = function() {
            var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"];
            var t;
            while (t = e.shift()) {
                if (typeof this.screen.style[t] !== "undefined") {
                    return t
                }
            }
            return false
        };
        this.getOpacityType = function() {
            var e;
            if (typeof this.screen.style.opacity != "undefined") {
                e = "opacity"
            } else {
                e = "filter"
            }
            return e
        };
        this.setScreen = function(e) {
            if (this.type == "img" && e) {
                this.screen = e;
                this.setMainProperties()
            } else {
                this.screen = document.createElement(this.type);
                this.setMainProperties()
            }
        };
        this.setMainProperties = function() {
            this.transform = this.getTransform();
            this.setPosition(this.position);
            this.setOverflow(this.overflow);
            this.opacityType = this.getOpacityType();
            if (this.opacityType == "opacity") this.isHtml5_bl = true;
            if (i.opacityType == "filter") i.screen.style.filter = "inherit";
            this.screen.style.left = "0px";
            this.screen.style.top = "0px";
            this.screen.style.margin = "0px";
            this.screen.style.padding = "0px";
            this.screen.style.maxWidth = "none";
            this.screen.style.maxHeight = "none";
            this.screen.style.border = "none";
            this.screen.style.lineHeight = "1";
            this.screen.style.backgroundColor = "transparent";
            this.screen.style.backfaceVisibility = "hidden";
            this.screen.style.webkitBackfaceVisibility = "hidden";
            this.screen.style.MozBackfaceVisibility = "hidden";
            this.screen.style.MozImageRendering = "optimizeSpeed";
            this.screen.style.WebkitImageRendering = "optimizeSpeed";
            if (e == "img") {
                this.setWidth(this.screen.width);
                this.setHeight(this.screen.height);
                this.screen.onmousedown = function(e) {
                    return false
                }
            }
        };
        i.setBackfaceVisibility = function() {
            i.screen.style.backfaceVisibility = "visible";
            i.screen.style.webkitBackfaceVisibility = "visible";
            i.screen.style.MozBackfaceVisibility = "visible"
        };
        i.removeBackfaceVisibility = function() {
            i.screen.style.backfaceVisibility = "hidden";
            i.screen.style.webkitBackfaceVisibility = "hidden";
            i.screen.style.MozBackfaceVisibility = "hidden"
        };
        this.setSelectable = function(e) {
            if (!e) {
                try {
                    this.screen.style.userSelect = "none"
                } catch(t) {}
                try {
                    this.screen.style.MozUserSelect = "none"
                } catch(t) {}
                try {
                    this.screen.style.webkitUserSelect = "none"
                } catch(t) {}
                try {
                    this.screen.style.khtmlUserSelect = "none"
                } catch(t) {}
                try {
                    this.screen.style.oUserSelect = "none"
                } catch(t) {}
                try {
                    this.screen.style.msUserSelect = "none"
                } catch(t) {}
                try {
                    this.screen.msUserSelect = "none"
                } catch(t) {}
                this.screen.ondragstart = function(e) {
                    return false
                };
                this.screen.onselectstart = function() {
                    return false
                };
                this.screen.style.webkitTouchCallout = "none"
            }
        };
        this.getScreen = function() {
            return i.screen
        };
        this.setVisible = function(e) {
            this.visible = e;
            if (this.visible == true) {
                this.screen.style.visibility = "visible"
            } else {
                this.screen.style.visibility = "hidden"
            }
        };
        this.getVisible = function() {
            return this.visible
        };
        this.setResizableSizeAfterParent = function() {
            this.screen.style.width = "100%";
            this.screen.style.height = "100%"
        };
        this.getStyle = function() {
            return this.screen.style
        };
        this.setOverflow = function(e) {
            i.overflow = e;
            i.screen.style.overflow = i.overflow
        };
        this.setPosition = function(e) {
            i.position = e;
            i.screen.style.position = i.position
        };
        this.setDisplay = function(e) {
            this.display = e;
            this.screen.style.display = this.display
        };
        this.setButtonMode = function(e) {
            this.buttonMode = e;
            if (this.buttonMode == true) {
                this.screen.style.cursor = "pointer"
            } else {
                this.screen.style.cursor = "default"
            }
        };
        this.setBkColor = function(e) {
            i.screen.style.backgroundColor = e
        };
        this.setInnerHTML = function(e) {
            i.innerHTML = e;
            i.screen.innerHTML = i.innerHTML
        };
        this.getInnerHTML = function() {
            return i.innerHTML
        };
        this.getRect = function() {
            return i.screen.getBoundingClientRect()
        };
        this.setAlpha = function(e) {
            i.alpha = e;
            if (i.opacityType == "opacity") {
                i.screen.style.opacity = i.alpha
            } else if (i.opacityType == "filter") {
                i.screen.style.filter = "alpha(opacity=" + i.alpha * 100 + ")";
                i.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(i.alpha * 100) + ")"
            }
        };
        this.getAlpha = function() {
            return i.alpha
        };
        this.getRect = function() {
            return this.screen.getBoundingClientRect()
        };
        this.getGlobalX = function() {
            return this.getRect().left
        };
        this.getGlobalY = function() {
            return this.getRect().top
        };
        this.setX = function(e) {
            i.x = e;
            if (i.hasTransform3d_bl) {
                i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px," + i.z + "px) rotateX(" + i.angleX + "deg) rotateY(" + i.angleY + "deg) rotateZ(" + i.angleZ + "deg)"
            } else if (i.hasTransform2d_bl) {
                i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + " , " + i.scale + ")"
            } else {
                i.screen.style.left = i.x + "px"
            }
        };
        this.getX = function() {
            return i.x
        };
        this.setY = function(e) {
            i.y = e;
            if (i.hasTransform3d_bl) {
                i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px," + i.z + "px) rotateX(" + i.angleX + "deg) rotateY(" + i.angleY + "deg) rotateZ(" + i.angleZ + "deg)"
            } else if (i.hasTransform2d_bl) {
                i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + " , " + i.scale + ")"
            } else {
                i.screen.style.top = i.y + "px"
            }
        };
        this.getY = function() {
            return i.y
        };
        this.setZ = function(e) {
            i.z = e;
            if (i.hasTransform3d_bl) {
                i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px," + i.z + "px) rotateX(" + i.angleX + "deg) rotateY(" + i.angleY + "deg) rotateZ(" + i.angleZ + "deg)"
            }
        };
        this.getZ = function() {
            return i.z
        };
        this.setAngleX = function(e) {
            i.angleX = e;
            if (i.hasTransform3d_bl) {
                i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px," + i.z + "px) rotateX(" + i.angleX + "deg) rotateY(" + i.angleY + "deg) rotateZ(" + i.angleZ + "deg)"
            }
        };
        this.getAngleX = function() {
            return i.angleX
        };
        this.setAngleY = function(e) {
            i.angleY = e;
            if (i.hasTransform3d_bl) {
                i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px," + i.z + "px) rotateX(" + i.angleX + "deg) rotateY(" + i.angleY + "deg) rotateZ(" + i.angleZ + "deg)"
            }
        };
        this.getAngleY = function() {
            return i.angleY
        };
        this.setAngleZ = function(e) {
            i.angleZ = e;
            if (i.hasTransform3d_bl) {
                i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px," + i.z + "px) rotateX(" + i.angleX + "deg) rotateY(" + i.angleY + "deg) rotateZ(" + i.angleZ + "deg)"
            }
        };
        this.getAngleZ = function() {
            return i.angleZ
        };
        this.setScale2 = function(e) {
            i.scale = e;
            if (i.hasTransform2d_bl) {
                i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + " , " + i.scale + ")"
            }
        };
        this.getScale = function() {
            return i.scale
        };
        this.setPerspective = function(e) {
            i.perspective = e;
            i.screen.style.perspective = i.perspective + "px";
            i.screen.style.WebkitPerspective = i.perspective + "px";
            i.screen.style.MozPerspective = i.perspective + "px";
            i.screen.style.msPerspective = i.perspective + "px";
            i.screen.style.OPerspective = i.perspective + "px"
        };
        this.setPreserve3D = function() {
            this.screen.style.transformStyle = "preserve-3d";
            this.screen.style.WebkitTransformStyle = "preserve-3d";
            this.screen.style.MozTransformStyle = "preserve-3d";
            this.screen.style.msTransformStyle = "preserve-3d";
            this.screen.style.OTransformStyle = "preserve-3d"
        };
        this.setZIndex = function(e) {
            i.zIndex = e;
            i.screen.style.zIndex = i.zIndex
        };
        this.getZIndex = function() {
            return i.zIndex
        };
        this.setWidth = function(e) {
            i.w = e;
            if (i.type == "img") {
                i.screen.width = i.w
            } else {
                i.screen.style.width = i.w + "px"
            }
        };
        this.getWidth = function() {
            if (i.type == "div") {
                if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                return i.w
            } else if (i.type == "img") {
                if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                if (i.screen.width != 0) return i.screen.width;
                return i._w
            } else if (i.type == "canvas") {
                if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                return i.w
            }
        };
        this.setHeight = function(e) {
            i.h = e;
            if (i.type == "img") {
                i.screen.height = i.h
            } else {
                i.screen.style.height = i.h + "px"
            }
        };
        this.getHeight = function() {
            if (i.type == "div") {
                if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                return i.h
            } else if (i.type == "img") {
                if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                if (i.screen.height != 0) return i.screen.height;
                return i.h
            } else if (i.type == "canvas") {
                if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                return i.h
            }
        };
        this.getNumChildren = function() {
            return i.children_ar.length
        };
        this.addChild = function(e) {
            if (this.contains(e)) {
                this.children_ar.splice(FWDR3DCarUtils.indexOfArray(this.children_ar, e), 1);
                this.children_ar.push(e);
                this.screen.appendChild(e.screen)
            } else {
                this.children_ar.push(e);
                this.screen.appendChild(e.screen)
            }
        };
        this.removeChild = function(e) {
            if (this.contains(e)) {
                this.children_ar.splice(FWDR3DCarUtils.indexOfArray(this.children_ar, e), 1);
                this.screen.removeChild(e.screen)
            } else {
                throw Error("##removeChild()## Child doesn't exist, it can't be removed!")
            }
        };
        this.contains = function(e) {
            if (FWDR3DCarUtils.indexOfArray(this.children_ar, e) == -1) {
                return false
            } else {
                return true
            }
        };
        this.addChildAtZero = function(e) {
            if (this.numChildren == 0) {
                this.children_ar.push(e);
                this.screen.appendChild(e.screen)
            } else {
                this.screen.insertBefore(e.screen, this.children_ar[0].screen);
                if (this.contains(e)) {
                    this.children_ar.splice(FWDR3DCarUtils.indexOfArray(this.children_ar, e), 1)
                }
                this.children_ar.unshift(e)
            }
        };
        this.getChildAt = function(e) {
            if (e < 0 || e > this.numChildren - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (this.numChildren == 0) throw Errror("##getChildAt## Child dose not exist!");
            return this.children_ar[e]
        };
        this.removeChildAtZero = function() {
            this.screen.removeChild(this.children_ar[0].screen);
            this.children_ar.shift()
        };
        this.addListener = function(e, t) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            if (typeof t != "function") throw Error("listener must be of type Function.");
            var n = {};
            n.type = e;
            n.listener = t;
            n.target = this;
            this.listeners.events_ar.push(n)
        };
        this.dispatchEvent = function(e, t) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            for (var n = 0,
            r = this.listeners.events_ar.length; n < r; n++) {
                if (this.listeners.events_ar[n].target === this && this.listeners.events_ar[n].type === e) {
                    if (t) {
                        for (var i in t) {
                            this.listeners.events_ar[n][i] = t[i]
                        }
                    }
                    this.listeners.events_ar[n].listener.call(this, this.listeners.events_ar[n]);
                    break
                }
            }
        };
        this.removeListener = function(e, t) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            if (typeof t != "function") throw Error("listener must be of type Function." + e);
            for (var n = 0,
            r = this.listeners.events_ar.length; n < r; n++) {
                if (this.listeners.events_ar[n].target === this && this.listeners.events_ar[n].type === e && this.listeners.events_ar[n].listener === t) {
                    this.listeners.events_ar.splice(n, 1);
                    break
                }
            }
        };
        this.disposeImage = function() {
            if (this.type == "img") this.screen.src = ""
        };
        this.destroy = function() {
            try {
                this.screen.parentNode.removeChild(this.screen)
            } catch(e) {}
            this.screen.onselectstart = null;
            this.screen.ondragstart = null;
            this.screen.ontouchstart = null;
            this.screen.ontouchmove = null;
            this.screen.ontouchend = null;
            this.screen.onmouseover = null;
            this.screen.onmouseout = null;
            this.screen.onmouseup = null;
            this.screen.onmousedown = null;
            this.screen.onmousemove = null;
            this.screen.onclick = null;
            delete this.screen;
            delete this.style;
            delete this.rect;
            delete this.selectable;
            delete this.buttonMode;
            delete this.position;
            delete this.overflow;
            delete this.visible;
            delete this.innerHTML;
            delete this.numChildren;
            delete this.x;
            delete this.y;
            delete this.w;
            delete this.h;
            delete this.opacityType;
            delete this.isHtml5_bl;
            delete this.hasTransform3d_bl;
            delete this.hasTransform2d_bl;
            this.children_ar = null;
            this.style = null;
            this.screen = null;
            this.numChildren = null;
            this.transform = null;
            this.position = null;
            this.overflow = null;
            this.display = null;
            this.visible = null;
            this.buttonMode = null;
            this.globalX = null;
            this.globalY = null;
            this.x = null;
            this.y = null;
            this.w = null;
            this.h = null;
            this.rect = null;
            this.alpha = null;
            this.innerHTML = null;
            this.opacityType = null;
            this.isHtml5_bl = null;
            this.hasTransform3d_bl = null;
            this.hasTransform2d_bl = null;
            i = null
        };
        this.init()
    };
    e.FWDR3DCarDisplayObject3D = t
})(window); (function() {
    var e = function() {
        this.listeners = {
            events_ar: []
        };
        this.destroy = function() {
            this.listeners = null
        };
        this.addListener = function(e, t) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            if (typeof t != "function") throw Error("listener must be of type Function.");
            var n = {};
            n.type = e;
            n.listener = t;
            n.target = this;
            this.listeners.events_ar.push(n)
        };
        this.dispatchEvent = function(e, t) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            for (var n = 0,
            r = this.listeners.events_ar.length; n < r; n++) {
                if (this.listeners.events_ar[n].target === this && this.listeners.events_ar[n].type === e) {
                    if (t) {
                        for (var i in t) {
                            this.listeners.events_ar[n][i] = t[i]
                        }
                    }
                    this.listeners.events_ar[n].listener.call(this, this.listeners.events_ar[n])
                }
            }
        };
        this.removeListener = function(e, t) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            if (typeof t != "function") throw Error("listener must be of type Function." + e);
            for (var n = 0,
            r = this.listeners.events_ar.length; n < r; n++) {
                if (this.listeners.events_ar[n].target === this && this.listeners.events_ar[n].type === e && this.listeners.events_ar[n].listener === t) {
                    this.listeners.events_ar.splice(n, 1);
                    break
                }
            }
        }
    };
    window.FWDR3DCarEventDispatcher = e
})(window); (function(e) {
    var t = function() {
        var e = this;
        var n = t.prototype;
        this.init = function() {
            this.setWidth(500);
            this.setBkColor("#FF0000");
            this.getStyle().padding = "10px"
        };
        this.showText = function(e) {
            this.setInnerHTML(e)
        };
        this.destroy = function() {
            n.destroy();
            t.prototype = null;
            e = null
        };
        this.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDR3DCarDisplayObject("div", "relative")
    };
    t.prototype = null;
    e.FWDR3DCarInfo = t
})(window); (function(e) {
    var t = function(n, r, i, s, o) {
        var u = this;
        var a = t.prototype;
        this.main_do;
        this.text_do;
        this.background_do;
        this.backgroundColor_str = r;
        this.backgroundOpacity = i;
        this.margins = n;
        this.maxWidth;
        this.maxHeight;
        this.finalWidth;
        this.finalHeight;
        this.lastPresedY;
        this.borderRadius = s;
        this.vy = 0;
        this.vy2 = 0;
        this.friction = .9;
        this.obj = {
            currentWidth: 0
        };
        this.updateMobileScrollBarIntervalId_int;
        this.isShowed_bl = false;
        this.isScrollBarActive_bl = false;
        this.isMobile_bl = o;
        this.isDragging_bl = false;
        this.isHiddenDone_bl = true;
        this.init = function() {
            this.setOverflow("visible");
            this.setBkColor("#FF0000");
            this.setX(this.margins);
            this.setY(this.margins);
            this.setupMainContainers();
            this.setVisible(false)
        };
        this.setupMainContainers = function() {
            this.main_do = new FWDR3DCarDisplayObject("div");
            this.text_do = new FWDR3DCarDisplayObject("div");
            this.text_do.getStyle().fontSmoothing = "antialiased";
            this.text_do.getStyle().webkitFontSmoothing = "antialiased";
            this.text_do.getStyle().textRendering = "optimizeLegibility";
            this.background_do = new FWDR3DCarDisplayObject("div");
            this.background_do.setResizableSizeAfterParent();
            this.background_do.setBkColor(this.backgroundColor_str);
            this.background_do.setAlpha(this.backgroundOpacity);
            this.main_do.addChild(this.background_do);
            this.main_do.addChild(this.text_do);
            this.addChild(this.main_do)
        };
        this.setText = function(e, t, n, r, i) {
            this.maxWidth = t;
            this.maxHeight = n;
            if (!i && u.borderRadius != 0) {
                u.background_do.getStyle().borderTopLeftRadius = u.borderRadius - 1 + "px";
                u.background_do.getStyle().borderTopRightRadius = u.borderRadius - 1 + "px"
            } else {
                if (u.borderRadius != 0) {
                    u.background_do.getStyle().borderTopLeftRadius = "0px";
                    u.background_do.getStyle().borderTopRightRadius = "0px"
                }
            }
            this.text_do.setInnerHTML(e);
            clearTimeout(this.resieId_to);
            this.resieId_to = setTimeout(function() {
                u.resize(u.maxWidth, u.maxHeight, r);
                if (!u.isShowed_bl) {
                    if (u.isHiddenDone_bl) u.hide(false);
                    u.show(true)
                } else {
                    u.show(true)
                }
            },
            50);
            u.disableMobileScrollBar();
            u.onTweenUpdate()
        };
        this.resize = function(e, t, n) {
            u.maxWidth = e - u.margins * 2;
            u.maxHeight = t - u.margins * 2;
            u.finalWidth = u.maxWidth;
            u.setWidth(u.maxWidth);
            FWDR3DCarModTweenMax.killTweensOf(u.obj);
            if (n) {
                FWDR3DCarModTweenMax.to(u.obj, .8, {
                    delay: .1,
                    currentWidth: u.maxWidth,
                    onUpdate: u.onTweenUpdate,
                    ease: Expo.easeInOut
                })
            } else {
                u.obj.currentWidth = u.maxWidth
            }
            u.onTweenUpdate();
            u.text_do.setY(0)
        };
        this.onTweenUpdate = function() {
            u.main_do.setWidth(u.obj.currentWidth);
            u.finalHeight = u.text_do.getHeight() <= u.maxHeight ? u.text_do.getHeight() : u.maxHeight;
            u.main_do.setHeight(u.finalHeight);
            u.background_do.setHeight(u.finalHeight);
            if (u.text_do.getHeight() > u.maxHeight) {
                u.enableMobileScrollBar()
            } else {
                u.disableMobileScrollBar()
            }
        };
        this.enableMobileScrollBar = function() {
            if (!this.isMobile_bl) return;
            if (this.isScrollBarActive_bl) return;
            this.getScreen().addEventListener("touchstart", this.touchStartHandler);
            clearInterval(this.updateMobileScrollBar);
            this.updateMobileScrollBarIntervalId_int = setInterval(this.updateMobileScrollBar, 16);
            this.isScrollBarActive_bl = true
        };
        this.disableMobileScrollBar = function() {
            if (!this.isScrollBarActive_bl) return;
            this.getScreen().removeEventListener("touchstart", this.touchStartHandler);
            clearInterval(this.updateMobileScrollBar);
            this.isScrollBarActive_bl = false
        };
        this.touchStartHandler = function(t) {
            t.preventDefault();
            e.addEventListener("touchend", u.touchEndHandler);
            e.addEventListener("touchmove", u.scrollBarOnMoveHandler);
            u.lastPresedY = t.touches[0].pageY - e.pageYOffset
        };
        this.scrollBarOnMoveHandler = function(t) {
            t.preventDefault();
            var n = 0;
            u.isDragging_bl = true;
            n = t.touches[0].pageY - e.pageYOffset - u.lastPresedY;
            u.lastPresedY = t.touches[0].pageY - e.pageYOffset;
            u.text_do.setY(u.text_do.getY() + n);
            u.vy = n * 2
        };
        this.touchEndHandler = function(t) {
            e.removeEventListener("touchend", u.touchEndHandler);
            e.removeEventListener("touchmove", u.scrollBarOnMoveHandler);
            u.isDragging_bl = false
        };
        this.updateMobileScrollBar = function() {
            var e = u.text_do.getY();
            var t = u.text_do.getHeight();
            if (!u.isDragging_bl) {
                u.vy *= u.friction;
                e += u.vy;
                if (e > 0) {
                    u.vy2 = (0 - e) * .5;
                    u.vy *= u.friction;
                    e += u.vy2
                } else if (e <= u.maxHeight - t) {
                    u.vy2 = (u.maxHeight - t - e) * .5;
                    u.vy *= u.friction;
                    e += u.vy2
                }
                u.text_do.setY(Math.round(e))
            }
        };
        this.hide = function(e) {
            FWDR3DCarModTweenMax.killTweensOf(this);
            if (e) {
                FWDR3DCarModTweenMax.to(this, .6, {
                    y: -this.finalHeight,
                    ease: Expo.easeInOut,
                    onComplete: this.hideComplete
                });
                this.isHiddenDone_bl = false
            } else {
                this.setVisible(false);
                this.setY( - this.finalHeight);
                this.isShowed_bl = false;
                this.isHiddenDone_bl = true
            }
            u.isShowed_bl = false
        };
        this.hideComplete = function() {
            u.isHiddenDone_bl = true;
            u.setVisible(false)
        };
        this.show = function(e) {
            this.setVisible(true);
            FWDR3DCarModTweenMax.killTweensOf(this);
            if (e) {
                FWDR3DCarModTweenMax.to(this, .6, {
                    y: this.margins,
                    ease: Expo.easeInOut
                })
            } else {
                this.setVisible(false);
                this.setY(this.margins)
            }
            this.isHiddenDone_bl = false;
            this.isShowed_bl = true
        };
        this.init();
        this.destroy = function() {
            clearInterval(this.updateMobileScrollBar);
            if (this.isMobile_bl) {
                this.getScreen().removeEventListener("touchstart", this.touchStartHandler);
                e.removeEventListener("touchend", this.touchEndHandler);
                e.removeEventListener("touchmove", this.scrollBarOnMoveHandler)
            }
            FWDR3DCarModTweenMax.killTweensOf(this);
            FWDR3DCarModTweenMax.killTweensOf(this.obj);
            this.main_do.destroy();
            this.text_do.destroy();
            this.background_do.destroy();
            this.main_do = null;
            this.text_do = null;
            this.background_do = null;
            u.setInnerHTML("");
            a.destroy();
            u = null;
            a = null;
            t.prototype = null
        }
    };
    t.setPrototype = function() {
        t.prototype = new FWDR3DCarDisplayObject("div")
    };
    t.HIDE_COMPLETE = "infoWindowHideComplete";
    t.prototype = null;
    e.FWDR3DCarInfoWindow = t
})(window); (function(e) {
    var t = function(n) {
        var r = this;
        var i = t.prototype;
        this.image_img;
        this.closeN_img = n.closeN_img;
        this.closeS_img = n.closeS_img;
        this.nextN_img = n.nextN_img;
        this.nextS_img = n.nextS_img;
        this.prevN_img = n.prevN_img;
        this.prevS_img = n.prevS_img;
        this.maximizeN_img = n.maximizeN_img;
        this.maximizeS_img = n.maximizeS_img;
        this.minimizeN_img = n.minimizeN_img;
        this.minimizeS_img = n.minimizeS_img;
        this.infoOpenN_img = n.infoOpenN_img;
        this.infoOpenS_img = n.infoOpenS_img;
        this.infoCloseN_img = n.infoCloseN_img;
        this.infoCloseS_img = n.infoCloseS_img;
        this.pauseN_img = n.pauseN_img;
        this.pauseS_img = n.pauseS_img;
        this.playN_img = n.playN_img;
        this.playS_img = n.playS_img;
        this.preloaderImg = n.lightboxPreloader_img;
        this.slideShowPreloader_img = n.slideShowPreloader_img;
        this.info_do;
        this.infoWindow_do;
        this.preloader_do;
        this.slideShowPreloader_do;
        this.customContextMenu;
        this.timerManager;
        this.bk_do;
        this.mainItemsHolder_do;
        this.itemsBackground_do;
        this.itemsBorder_do;
        this.itemsHolder_do;
        this.currentItem_do;
        this.prevItem_do;
        this.closeButton_do;
        this.nextButton_do;
        this.prevButton_do;
        this.zoomButton_do;
        this.infoButton_do;
        this.slideshowButtton_do;
        this.data_ar = n.data_ar;
        this.buttons_ar;
        this.backgroundColor_str = n.backgroundColor_str;
        this.transitionDirection_str = "next";
        this.mediaType_str;
        this.backgroundOpacity = n.backgroundOpacity;
        this.infoWindowBackgroundOpacity = n.infoWindowBackgroundOpacity || 1;
        this.videoWidth = n.videoWidth;
        this.videoHeight = n.videoHeight;
        this.iframeWidth = n.iframeWidth;
        this.iframeHeight = n.iframeHeight;
        this.slideShowDelay = n.slideShowDelay;
        this.slideshowPreloaderHeight = 29;
        this.iframeW;
        this.iframeH;
        this.borderSize = n.borderSize || 0;
        this.borderRadius = n.borderRadius || 0;
        this.transitionTotalDuration = 1200;
        this.buttonWidth = this.closeN_img.width;
        this.buttonHeight = this.closeN_img.height;
        this.totalItems = this.data_ar.length;
        this.originalW;
        this.originalH;
        this.finalX;
        this.finalY;
        this.finalWidth;
        this.finalHeight;
        this.videoIdOrIframeUrl;
        this.percentX;
        this.percentY;
        this.globalXMousePosition;
        this.globalYMousePosition;
        this.lastPressedX;
        this.lastPressedY;
        this.friction = .9;
        this.vx;
        this.vy;
        this.type_str;
        this.prevType_str;
        this.borderColor_str1 = n.borderColor_str1 || "#FFFFFF";
        this.borderColor_str2 = n.borderColor_str2 || "#FFFFFF";
        this.itemBackgroundColor_str = n.itemBackgroundColor_str || "#222222";
        this.infoWindowBackgroundColor = n.infoWindowBackgroundColor || "transparent";
        this.id;
        this.scrollOffestX;
        this.scrollOffsetY;
        this.updateImageWhenMaximized_int;
        this.transitionDoneId_to;
        this.transitionShapeDoneId_to;
        this.showVideoId_to;
        this.maximizeCompleteTimeOutId_to;
        this.minimizeCompleteTimeOutId_to;
        this.showFirstTimeWithDelayId_to;
        this.resizeHandlerId1_to;
        this.resizeHandlerId2_to;
        this.orientationChangeId_to;
        this.isShowed_bl = false;
        this.isTweeningOnShowOrHide_bl = false;
        this.firstTimeShowed_bl = true;
        this.isTweening_bl = false;
        this.addKeyboardSupport_bl = n.addKeyboardSupport_bl == false ? false: true;
        this.showContextMenu_bl = n.showContextMenu == false ? false: true;
        this.showNextAndPrevButtons_bl = n.showNextAndPrevButtons == false ? false: true;
        this.showZoomButton_bl = n.showZoomButton == false ? false: true;
        this.showInfoButton_bl = n.showInfoButton == false ? false: true;
        this.showSlideshowButton_bl = n.showSlideshowButton == false ? false: true;
        this.slideShowAutoPlay_bl = n.slideShowAutoPlay == false ? false: true;
        this.showInfoWindowByDefault_bl = n.showInfoWindowByDefault == true ? true: false;
        this.isMobile_bl = FWDR3DCarUtils.isMobile;
        this.hasPointerEvent_bl = FWDR3DCarUtils.hasPointerEvent;
        this.isMaximized_bl = false;
        this.isFirstItemShowed_bl = false;
        this.allowToPressKey_bl = true;
        this.isLoading_bl = false;
        this.videoAutoPlay_bl = n.lightBoxVideoAutoPlay;
        this.forceRoundBorderToIframe_bl = false;
        this.isIframe_bl = false;
        this.orintationChanceComplete_bl = true;
        this.init = function() {
            r.getStyle().msTouchAction = "none";
            r.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)";
            this.setupInfo();
            this.setupBackgorundAndMainItemHolder();
            this.setupPreloader();
            this.setupCloseButton();
            if (this.showNextAndPrevButtons_bl) this.setupNextAndPrevButtons();
            if (this.showZoomButton_bl) this.setupZoomButton();
            if (this.showInfoButton_bl) {
                this.setupInfoButton()
            }
            if (this.showInfoButton_bl || this.showInfoWindowByDefault_bl) {
                this.setupInfoWindow()
            }
            if (this.showSlideshowButton_bl) {
                this.setupTimerManager();
                this.setupSlideShowPreloader();
                this.setupSlideshowButton()
            }
            this.setupContextMenu();
            this.buttons_ar = [];
            this.buttons_ar.push(this.closeButton_do);
            if (this.infoButton_do) this.buttons_ar.push(this.infoButton_do);
            if (this.showSlideshowButton_bl) this.buttons_ar.push(this.slideshowButtton_do);
            if (this.zoomButton_do) this.buttons_ar.push(this.zoomButton_do);
            if (this.showNextAndPrevButtons_bl) this.buttons_ar.push(this.nextButton_do)
        };
        this.updateData = function(e) {
            r.data_ar = e;
            r.totalItems = r.data_ar.length
        };
        this.startResizeHandler = function() {
            if (e.addEventListener) {
                e.addEventListener("resize", r.onResizeHandler);
                e.addEventListener("scroll", r.onScrollHandler);
                e.addEventListener("orientationchange", r.orientationChance);
                if (FWDR3DCarUtils.isFirefox) {
                    document.addEventListener("fullscreenchange", r.onFullScreenChange);
                    document.addEventListener("mozfullscreenchange", r.onFullScreenChange)
                }
            } else if (e.attachEvent) {
                e.attachEvent("onresize", r.onResizeHandler);
                e.attachEvent("onscroll", r.onScrollHandler)
            }
            r.resizeHandler();
            r.resizeHandlerId2_to = setTimeout(function() {
                r.resizeHandler()
            },
            100)
        };
        this.onFullScreenChange = function() {
            r.resizeHandler();
            clearTimeout(r.resizeHandlerId2_to);
            r.resizeHandlerId2_to = setTimeout(function() {
                r.resizeHandler()
            },
            50)
        };
        r.onScrollHandler = function(e) {
            if (!r.orintationChanceComplete_bl) return;
            var t = FWDR3DCarUtils.getScrollOffsets();
            r.setX(t.x);
            r.setY(t.y)
        };
        r.onResizeHandler = function(e) {
            if (r.isMobile_bl) {
                clearTimeout(r.resizeHandlerId2_to);
                r.resizeHandlerId2_to = setTimeout(function() {
                    r.resizeHandler()
                },
                200)
            } else {
                r.resizeHandler();
                clearTimeout(r.resizeHandlerId2_to);
                r.resizeHandlerId2_to = setTimeout(function() {
                    r.resizeHandler()
                },
                50)
            }
        };
        this.orientationChance = function() {
            r.orintationChanceComplete_bl = false;
            clearTimeout(r.resizeHandlerId2_to);
            clearTimeout(r.orientationChangeId_to);
            r.orientationChangeId_to = setTimeout(function() {
                r.orintationChanceComplete_bl = true;
                r.resizeHandler()
            },
            1e3);
            r.setX(0);
            r.setWidth(0)
        };
        this.resizeHandler = function() {
            if (!r.orintationChanceComplete_bl) return;
            var e = FWDR3DCarUtils.getViewportSize();
            var t = FWDR3DCarUtils.getScrollOffsets();
            if (r.stageWidth == e.w && r.stageHeight == e.h) return;
            r.isTweening_bl = false;
            r.stageWidth = e.w;
            r.stageHeight = e.h;
            r.scrollOffestX = t.x;
            r.scrollOffsetY = t.y;
            r.setX(t.x);
            r.setY(t.y);
            if (r.isMobile_bl) {
                r.setWidth(r.stageWidth);
                r.setHeight(r.stageHeight)
            } else {
                r.setWidth(r.stageWidth - .5);
                r.setHeight(r.stageHeight - .5)
            }
            r.positionPreloader();
            r.resizeCurrentItem();
            r.positionButtons(false);
            if (r.infoWindow_do && r.infoWindow_do.isShowed_bl) r.infoWindow_do.resize(r.finalWidth, r.finalHeight, false)
        };
        this.setupContextMenu = function() {
            this.customContextMenu = new FWDR3DCarContextMenu(this, this.showContextMenu_bl)
        };
        this.disableBrowserScrollBars = function() {
            if (this.isMobile_bl) {
                e.addEventListener("touchmove", this.mouseDummyHandler)
            } else {
                if (e.addEventListener) {
                    e.addEventListener("mousewheel", this.mouseDummyHandler);
                    e.addEventListener("DOMMouseScroll", this.mouseDummyHandler)
                } else if (document.attachEvent) {
                    document.attachEvent("onmousewheel", this.mouseDummyHandler)
                }
            }
        };
        this.mouseDummyHandler = function(e) {
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                return false
            }
        };
        this.setupInfo = function() {
            FWDR3DCarInfo.setPrototype();
            this.info_do = new FWDR3DCarInfo
        };
        this.setupBackgorundAndMainItemHolder = function() {
            this.bk_do = new FWDR3DCarDisplayObject("div");
            this.bk_do.setBackfaceVisibility();
            this.bk_do.setResizableSizeAfterParent();
            this.bk_do.setBkColor(this.backgroundColor_str);
            this.mainItemsHolder_do = new FWDR3DCarDisplayObject("div");
            this.itemsBorder_do = new FWDR3DCarSimpleDisplayObject("div");
            this.itemsBorder_do.setCSSGradient(r.borderColor_str1, r.borderColor_str2);
            this.itemsBackground_do = new FWDR3DCarDisplayObject("div");
            this.itemsBackground_do.setBkColor(r.itemBackgroundColor_str);
            this.itemsHolder_do = new FWDR3DCarDisplayObject("div");
            this.itemsHolder_do.setOverflow("visible");
            this.mainItemsHolder_do.addChild(this.itemsBorder_do);
            this.mainItemsHolder_do.addChild(this.itemsBackground_do);
            this.mainItemsHolder_do.addChild(this.itemsHolder_do);
            this.addChild(this.bk_do);
            this.addChild(this.mainItemsHolder_do)
        };
        this.addCloseEventsWhenBkIsPressed = function() {
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    r.bk_do.screen.addEventListener("MSPointerDown", r.onBkMouseDown)
                } else {
                    r.bk_do.screen.addEventListener("touchstart", r.onBkMouseDown)
                }
            } else if (r.bk_do.screen.addEventListener) {
                r.bk_do.screen.addEventListener("mousedown", r.onBkMouseDown)
            } else if (r.bk_do.screen.attachEvent) {
                r.bk_do.screen.attachEvent("onmousedown", r.onBkMouseDown)
            }
        };
        this.onBkMouseDown = function(e) {
            r.hide()
        };
        this.show = function(e) {
            if (this.isShowed_bl) return;
            this.isShowed_bl = true;
            this.isTweeningOnShowOrHide_bl = true;
            this.getStyle().zIndex = 100000002;
            this.disableBrowserScrollBars();
            if (this.addKeyboardSupport_bl) this.addKeyboardSupport();
            this.hideButtons(false);
            if (navigator.userAgent.toLowerCase().indexOf("msie 7") != -1) {
                document.getElementsByTagName("body")[0].appendChild(this.screen)
            } else {
                document.documentElement.appendChild(this.screen)
            }
            this.id = e;
            this.startResizeHandler();
            this.bk_do.setAlpha(0);
            FWDR3DCarModTweenMax.to(this.bk_do, .8, {
                alpha: this.backgroundOpacity,
                ease: Quint.easeOut,
                onComplete: this.onShowComplete
            });
            this.showFirstTimeWithDelayId_to = setTimeout(function() {
                r.showCurrentItem()
            },
            100);
            this.dispatchEvent(t.SHOW_START)
        };
        this.onShowComplete = function() {
            r.isTweeningOnShowOrHide_bl = false;
            r.addCloseEventsWhenBkIsPressed()
        };
        this.showCurrentItem = function() {
            if (r == null) return;
            this.type_str = this.data_ar[this.id].url;
            if (!this.type_str) {
                this.addChild(this.info_do);
                this.info_do.showText("The data URL isn't formatted correctly! Please note that it must be an image path, a Youtube video or a Vimeo video URL.");
                return
            }
            if (this.data_ar[this.id].dataType.toLowerCase() == "iframe") {
                this.iframeW = this.iframeWidth;
                this.iframeH = this.iframeHeight;
                this.videoIdOrIframeUrl = this.type_str;
                this.type_str = t.IFRAME;
                if (r.forceRoundBorderToIframe_bl && r.borderRadius != 0) {
                    r.itemsBorder_do.getStyle().borderRadius = r.borderRadius + "px"
                } else if (r.borderRadius != 0) {
                    r.itemsBorder_do.getStyle().borderRadius = "0px";
                    r.itemsBackground_do.getStyle().borderRadius = "0px"
                }
                r.isIframe_bl = true
            } else if (this.type_str.toLowerCase().indexOf(".jpg") != -1 || this.type_str.toLowerCase().indexOf(".png") != -1 || this.type_str.toLowerCase().indexOf(".jpeg") != -1) {
                this.type_str = t.IMAGE
            } else if (this.type_str.toLowerCase().indexOf("http://www.youtube") != -1 || this.type_str.toLowerCase().indexOf("http://youtube") != -1 || this.type_str.toLowerCase().indexOf("youtube.com") != -1) {
                args = FWDR3DCarUtils.getUrlArgs(this.type_str);
                if (!args.v) {
                    this.addChild(this.info_do);
                    this.info_do.showText("Make sure that the Youtube URL is formatted correctly, probably the <font color='#FFFFFF'>v</font> variable from the URL is missing, this represents the video id.");
                    return
                }
                this.iframeW = this.videoWidth;
                this.iframeH = this.videoHeight;
                this.videoIdOrIframeUrl = args.v;
                this.type_str = t.YOUTUBE;
                if (r.forceRoundBorderToIframe_bl && r.borderRadius != 0) {
                    r.itemsBorder_do.getStyle().borderRadius = r.borderRadius + "px"
                } else if (r.borderRadius != 0) {
                    r.itemsBorder_do.getStyle().borderRadius = "0px";
                    r.itemsBackground_do.getStyle().borderRadius = "0px"
                }
            } else if (this.type_str.toLowerCase().indexOf("http://www.vimeo") != -1 || this.type_str.toLowerCase().indexOf("http://vimeo") != -1 || this.type_str.toLowerCase().indexOf("vimeo.com") != -1) {
                this.iframeW = this.videoWidth;
                this.iframeH = this.videoHeight;
                this.videoIdOrIframeUrl = this.type_str.substr(this.type_str.lastIndexOf("/") + 1);
                this.type_str = t.VIMEO;
                if (r.forceRoundBorderToIframe_bl && r.borderRadius != 0) {
                    r.itemsBorder_do.getStyle().borderRadius = r.borderRadius + "px"
                } else if (r.borderRadius != 0) {
                    r.itemsBorder_do.getStyle().borderRadius = "0px";
                    r.itemsBackground_do.getStyle().borderRadius = "0px"
                }
            } else {
                this.addChild(this.info_do);
                this.info_do.showText("The data URL isn't formatted correctly! Please note that it must be an image path, a Youtube video or a Vimeo video URL.");
                return
            }
            this.createItem()
        };
        this.createItem = function() {
            clearTimeout(this.transitionShapeDoneId_to);
            clearTimeout(this.showVideoId_to);
            this.preloader_do.hide(true);
            if (this.showSlideshowButton_bl) this.timerManager.stop();
            if (this.contains(this.info_do)) this.removeChild(this.info_do);
            if (this.image_img) {
                this.image_img.onload = null;
                this.image_img.onerror = null;
                this.image_img = null
            }
            if (this.infoButton_do) this.infoButton_do.isDisabled_bl = true;
            if (this.type_str == t.IMAGE) {
                if (this.prevItem_do) {
                    if (this.opacityType == "filter" && this.prevItem_do.type != "img") {
                        this.prevItem_do.setVisible(false)
                    } else if (this.isMobile_bl || this.prevItem_do.type != "img") {
                        this.cleanChildren(0)
                    }
                }
                this.loadImage()
            } else if (this.type_str == t.YOUTUBE || this.type_str == t.VIMEO || this.type_str == t.IFRAME) {
                this.isTweening_bl = true;
                if (this.firstTimeShowed_bl) {
                    this.createIframeHolder();
                    this.resizeCurrentItem();
                    this.showItemFirstTime();
                    this.showVideoId_to = setTimeout(this.showIframeContent, 900);
                    this.prevItem_do = r.currentItem_do
                } else {
                    if (this.prevItem_do) {
                        if (this.opacityType == "filter" && this.prevItem_do.type != "img") {
                            this.prevItem_do.setVisible(false)
                        } else if (this.isMobile_bl || this.prevItem_do.type != "img") {
                            this.cleanChildren(0)
                        } else {
                            FWDR3DCarModTweenMax.to(this.prevItem_do, .8, {
                                alpha: 0
                            })
                        }
                    }
                    this.createIframeHolder();
                    this.resizeCurrentItem(true);
                    this.positionButtons(true);
                    this.animMainDos();
                    this.showVideoId_to = setTimeout(this.showIframeContent, 900);
                    if (this.showZoomButton_bl && (this.type_str == t.YOUTUBE || this.type_str == t.VIMEO || r.type_str == t.IFRAME)) {
                        var e = FWDR3DCarUtils.indexOfArray(this.buttons_ar, this.zoomButton_do);
                        if (e != -1) {
                            this.buttons_ar.splice(e, 1);
                            this.removeChild(this.zoomButton_do)
                        }
                    }
                    this.prevItem_do = r.currentItem_do
                }
                if (r.infoWindow_do) {
                    if (this.mainItemsHolder_do.contains(r.infoWindow_do) && this.infoWindow_do.isShowed_bl) {
                        this.infoWindow_do.setText(this.data_ar[r.id].infoText, this.finalWidth, this.finalHeight, false, this.type_str != t.IMAGE)
                    }
                }
            }
            this.prevType_str = this.type_str
        };
        this.createIframeHolder = function() {
            this.currentItem_do = new FWDR3DCarDisplayObject("div");
            if (this.type_str == t.IFRAME && this.isMobile_bl) {
                this.currentItem_do.getStyle().overflow = "scroll";
                this.currentItem_do.getStyle().webkitOverflowScrolling = "touch"
            }
            this.originalWidth = r.iframeW;
            this.originalHeight = r.iframeH;
            this.itemsHolder_do.addChild(r.currentItem_do)
        };
        this.loadImage = function() {
            this.isLoading_bl = true;
            this.preloader_do.show();
            var e = this.data_ar[this.id].url;
            this.image_img = new Image;
            this.image_img.onload = this.imageLoadComplete;
            this.image_img.onerror = this.imageLoadError;
            this.image_img.src = e;
            this.addChild(this.preloader_do)
        };
        this.imageLoadComplete = function(e) {
            if (r.prevItem_do) {
                if (!r.isMobile_bl && r.prevItem_do.type == "img") FWDR3DCarModTweenMax.to(r.prevItem_do, .6, {
                    alpha: 0
                })
            }
            r.originalWidth = r.image_img.width;
            r.originalHeight = r.image_img.height;
            r.currentItem_do = new FWDR3DCarDisplayObject("img");
            r.currentItem_do.setScreen(r.image_img);
            if (r.borderRadius != 0) r.currentItem_do.getStyle().borderRadius = r.borderRadius + "px";
            if (r.borderRadius != 0) r.itemsBorder_do.getStyle().borderRadius = r.borderRadius + "px";
            if (r.borderRadius != 0) r.itemsBackground_do.getStyle().borderRadius = r.borderRadius + "px";
            if (r.firstTimeShowed_bl) {
                r.transitionTotalDuration = 800;
                r.resizeCurrentItem(false);
                r.showItemFirstTime()
            } else {
                r.transitionTotalDuration = 1400;
                r.resizeCurrentItem(true);
                r.currentItem_do.setWidth(r.finalWidth - r.borderSize * 2);
                r.currentItem_do.setHeight(r.finalHeight - r.borderSize * 2);
                r.currentItem_do.setAlpha(0);
                FWDR3DCarModTweenMax.to(r.currentItem_do, .6, {
                    alpha: 1,
                    delay: .8
                });
                r.addZoomButtonBackToButtonsArray();
                r.animMainDos();
                r.positionButtons(true)
            }
            if (r.infoWindow_do && r.infoWindow_do.isShowed_bl) {
                r.infoWindow_do.setText(r.data_ar[r.id].infoText, r.finalWidth, r.finalHeight, true, r.type_str != t.IMAGE)
            }
            if (r.showSlideshowButton_bl) r.timerManager.stop();
            r.preloader_do.hide(true);
            r.prevItem_do = r.currentItem_do;
            r.isTweening_bl = true;
            r.isLoading_bl = false;
            r.transitionShapeDoneId_to = setTimeout(r.transitionShapeDoneHandler, 800);
            r.transitionDoneId_to = setTimeout(r.transitionDoneHandler, r.transitionTotalDuration);
            r.itemsHolder_do.addChild(r.currentItem_do)
        };
        this.transitionDoneHandler = function() {
            if (r.showSlideshowButton_bl) r.timerManager.start();
            r.isTweening_bl = false;
            r.cleanChildren(1)
        };
        this.transitionShapeDoneHandler = function() {
            if (r.infoButton_do) r.infoButton_do.isDisabled_bl = false
        };
        this.imageLoadError = function() {
            var e = "Image can't be loaded probably the path is incorrect <font color='#FFFFFF'>" + r.data_ar[r.id].url + "</font>";
            r.addChild(r.info_do);
            r.info_do.showText(e)
        };
        this.animMainDos = function() {
            FWDR3DCarModTweenMax.to(this.mainItemsHolder_do, .8, {
                delay: .1,
                x: r.finalX,
                y: r.finalY,
                w: r.finalWidth,
                h: r.finalHeight,
                ease: Expo.easeInOut
            });
            FWDR3DCarModTweenMax.to(this.itemsBackground_do, .8, {
                delay: .1,
                x: r.borderSize,
                y: r.borderSize,
                w: r.finalWidth - r.borderSize * 2,
                h: r.finalHeight - r.borderSize * 2,
                ease: Expo.easeInOut
            });
            FWDR3DCarModTweenMax.to(this.itemsBorder_do, .8, {
                delay: .1,
                w: r.finalWidth,
                h: r.finalHeight,
                ease: Expo.easeInOut
            });
            FWDR3DCarModTweenMax.to(this.itemsHolder_do, .8, {
                delay: .1,
                x: r.borderSize,
                y: r.borderSize,
                w: r.finalWidth - r.borderSize * 2,
                h: r.finalHeight - r.borderSize * 2,
                ease: Expo.easeInOut
            });
            if (!this.isMobile_bl && this.prevItem_do.type == "img") FWDR3DCarModTweenMax.to(r.prevItem_do, .8, {
                delay: .1,
                x: (r.finalWidth - r.borderSize * 2 - r.prevItem_do.getWidth()) / 2,
                y: (r.finalHeight - r.borderSize * 2 - r.prevItem_do.getHeight()) / 2,
                ease: Expo.easeInOut
            })
        };
        this.showIframeContent = function() {
            r.isTweening_bl = false;
            if (r.showSlideshowButton_bl) r.timerManager.start();
            if (r.infoButton_do) r.infoButton_do.isDisabled_bl = false;
            r.cleanChildren(1);
            var e = document.createElement("iframe");
            e.width = "100%";
            e.height = "100%";
            e.frameBorder = 0;
            e.allowfullscreen = true;
            if (r.type_str == t.YOUTUBE) {
                if (r.videoAutoPlay_bl) {
                    e.src = "http://www.youtube.com/embed/" + r.videoIdOrIframeUrl + "?wmode=transparent&autoplay=1"
                } else {
                    e.src = "http://www.youtube.com/embed/" + r.videoIdOrIframeUrl + "?wmode=transparent"
                }
            } else if (r.type_str == t.VIMEO) {
                if (r.videoAutoPlay_bl) {
                    e.src = "http://player.vimeo.com/video/" + r.videoIdOrIframeUrl + "?autoplay=1"
                } else {
                    e.src = "http://player.vimeo.com/video/" + r.videoIdOrIframeUrl
                }
            } else if (r.type_str == t.IFRAME) {
                e.src = r.videoIdOrIframeUrl
            }
            r.currentItem_do.screen.appendChild(e);
            r.resizeCurrentItem()
        };
        this.showItemFirstTime = function() {
            this.firstTimeShowed_bl = false;
            this.showButtons();
            this.mainItemsHolder_do.setX(this.stageWidth / 2);
            this.mainItemsHolder_do.setY(this.stageHeight / 2);
            this.mainItemsHolder_do.setWidth(0);
            this.mainItemsHolder_do.setHeight(0);
            this.currentItem_do.setAlpha(0);
            this.itemsBorder_do.setAlpha(0);
            if (this.showInfoWindowByDefault_bl) this.showInfoWindowOnStart();
            FWDR3DCarModTweenMax.to(this.currentItem_do, .8, {
                alpha: 1,
                delay: .9,
                ease: Quint.easeOut
            });
            FWDR3DCarModTweenMax.to(this.itemsBorder_do, .8, {
                alpha: 1,
                delay: .7,
                ease: Quint.easeOut
            });
            FWDR3DCarModTweenMax.to(this.mainItemsHolder_do, .8, {
                x: this.finalX,
                y: this.finalY,
                w: this.finalWidth,
                h: this.finalHeight,
                ease: Expo.easeInOut
            });
            if (this.showZoomButton_bl && (this.type_str == t.YOUTUBE || this.type_str == t.VIMEO || r.type_str == t.IFRAME)) {
                var e = FWDR3DCarUtils.indexOfArray(this.buttons_ar, this.zoomButton_do);
                if (e != -1) {
                    this.buttons_ar.splice(e, 1);
                    this.removeChild(this.zoomButton_do)
                }
            }
        };
        this.cleanChildren = function(e) {
            var t;
            var n;
            while (r.itemsHolder_do.getNumChildren() > e) {
                t = r.itemsHolder_do.getChildAt(0);
                FWDR3DCarModTweenMax.killTweensOf(t);
                r.itemsHolder_do.removeChild(t);
                if (r.opacityType == "opacity" && t.type != "img") t.setInnerHTML("");
                t.destroy()
            }
            t = null
        };
        this.resizeCurrentItem = function(e) {
            if (!this.currentItem_do) return;
            var t = this.stageWidth - 10;
            var n = this.stageHeight - 10;
            var r = t / this.originalWidth;
            var i = n / this.originalHeight;
            var s = 0;
            if (r <= i) {
                s = r
            } else if (r >= i) {
                s = i
            }
            if (r >= 1 && i >= 1) s = 1;
            this.finalWidth = Math.round(this.originalWidth * s);
            this.finalHeight = Math.round(this.originalHeight * s);
            if (this.finalWidth > this.stageWidth - this.buttonWidth * 2 - 4) {
                this.finalWidth = this.stageWidth - this.buttonWidth * 2 - 4;
                this.finalHeight = Math.round(this.originalHeight * (this.finalWidth / this.originalWidth))
            }
            this.finalX = Math.floor((t - this.finalWidth) / 2) + 5;
            this.finalY = Math.floor((n - this.finalHeight) / 2) + 5;
            if (e) return;
            FWDR3DCarModTweenMax.killTweensOf(this.mainItemsHolder_do);
            this.mainItemsHolder_do.setX(this.finalX);
            this.mainItemsHolder_do.setY(this.finalY);
            this.mainItemsHolder_do.setWidth(this.finalWidth);
            this.mainItemsHolder_do.setHeight(this.finalHeight);
            FWDR3DCarModTweenMax.killTweensOf(this.itemsBackground_do);
            this.itemsBackground_do.setX(this.borderSize);
            this.itemsBackground_do.setY(this.borderSize);
            this.itemsBackground_do.setWidth(this.finalWidth - this.borderSize * 2);
            this.itemsBackground_do.setHeight(this.finalHeight - this.borderSize * 2);
            FWDR3DCarModTweenMax.killTweensOf(this.itemsBorder_do);
            this.itemsBorder_do.setX(0);
            this.itemsBorder_do.setY(0);
            this.itemsBorder_do.setWidth(this.finalWidth);
            this.itemsBorder_do.setHeight(this.finalHeight);
            this.itemsBorder_do.setAlpha(1);
            FWDR3DCarModTweenMax.killTweensOf(this.currentItem_do);
            if (this.isMaximized_bl) {
                r = this.stageWidth / this.originalWidth;
                i = this.stageHeight / this.originalHeight;
                if (r >= i) {
                    s = r
                } else if (r <= i) {
                    s = i
                }
                this.currentItem_do.setX(parseInt((this.stageWidth - this.originalWidth * s) / 2));
                this.currentItem_do.setY(parseInt((this.stageHeight - this.originalHeight * s) / 2));
                this.currentItem_do.setWidth(parseInt(this.originalWidth * s));
                this.currentItem_do.setHeight(parseInt(this.originalHeight * s))
            } else {
                this.currentItem_do.setAlpha(1);
                this.currentItem_do.setX(0);
                this.currentItem_do.setY(0);
                this.currentItem_do.setWidth(this.finalWidth - this.borderSize * 2);
                this.currentItem_do.setHeight(this.finalHeight - this.borderSize * 2)
            }
            this.itemsHolder_do.setX(this.borderSize);
            this.itemsHolder_do.setY(this.borderSize);
            this.itemsHolder_do.setWidth(this.finalWidth - this.borderSize * 2);
            this.itemsHolder_do.setHeight(this.finalHeight - this.borderSize * 2)
        };
        this.goToNextItem = function() {
            if (this.isTweening_bl) return;
            this.transitionDirection_str = "next";
            this.id++;
            if (this.id > this.totalItems - 1) {
                this.id = 0
            }
            this.showCurrentItem()
        };
        this.goToPrevItem = function() {
            if (this.isTweening_bl) return;
            this.transitionDirection_str = "prev";
            this.id--;
            if (this.id < 0) {
                this.id = this.totalItems - 1
            }
            this.showCurrentItem()
        };
        this.maximizeOrMinimize = function() {
            if (this.isLoading_bl || r.isTweeningOnShowOrHide_bl) return;
            if (this.timerManager) this.timerManager.stop();
            var e;
            var n;
            var i;
            var s;
            var o;
            var u;
            var a;
            clearTimeout(this.maximizeCompleteTimeOutId_to);
            clearTimeout(this.minimizeCompleteTimeOutId_to);
            FWDR3DCarModTweenMax.killTweensOf(this.currentItem_do);
            if (this.isMaximized_bl) {
                this.isMaximized_bl = false;
                this.isTweening_bl = true;
                if (this.isMobile_bl) {
                    this.removeEventsForScrollngImageOnMobile()
                } else {
                    this.removeEventsForScrollngImageOnDesktop()
                }
                this.bk_do.setAlpha(this.backgroundOpacity);
                this.mainItemsHolder_do.setVisible(true);
                this.closeButton_do.setVisible(true);
                if (r.nextButton_do) {
                    this.nextButton_do.setVisible(true);
                    this.prevButton_do.setVisible(true)
                }
                if (this.infoButton_do) this.infoButton_do.setVisible(true);
                if (this.slideshowButtton_do) {
                    this.slideshowButtton_do.setVisible(true)
                }
                this.currentItem_do.setX(this.currentItem_do.getX() - this.finalX - this.borderSize);
                this.currentItem_do.setY(this.currentItem_do.getY() - this.finalY - this.borderSize);
                this.positionButtons(true);
                if (this.slideShowPreloader_do) this.positionSlideShowPreloader(false);
                FWDR3DCarModTweenMax.to(this.currentItem_do, .8, {
                    x: 0,
                    y: 0,
                    w: this.finalWidth - this.borderSize * 2,
                    h: this.finalHeight - this.borderSize * 2,
                    ease: Expo.easeInOut
                });
                this.minimizeCompleteTimeOutId_to = setTimeout(this.minimizeCompleteHandler, 800);
                this.mainItemsHolder_do.setOverflow("visible");
                this.zoomButton_do.isMaximized_bl = false;
                this.itemsHolder_do.addChild(this.currentItem_do);
                this.addChild(this.mainItemsHolder_do);
                this.addChild(this.zoomButton_do);
                this.dispatchEvent(t.MINIMIZE_START)
            } else {
                this.isMaximized_bl = true;
                this.isTweening_bl = true;
                if (r.borderRadius != 0) r.currentItem_do.getStyle().borderRadius = "";
                e = this.stageWidth / this.originalWidth;
                n = this.stageHeight / this.originalHeight;
                a = 0;
                if (e >= n) {
                    a = e
                } else if (e <= n) {
                    a = n
                }
                o = parseInt(this.originalWidth * a);
                u = parseInt(this.originalHeight * a);
                i = parseInt((this.stageWidth - o) / 2);
                s = parseInt((this.stageHeight - u) / 2);
                this.currentItem_do.setAlpha(1);
                this.currentItem_do.setX(this.currentItem_do.getGlobalX());
                this.currentItem_do.setY(this.currentItem_do.getGlobalY());
                if (this.isMobile_bl) {
                    FWDR3DCarModTweenMax.to(this.zoomButton_do, .8, {
                        x: this.stageWidth - this.buttonWidth,
                        y: 1,
                        ease: Expo.easeInOut
                    });
                    FWDR3DCarModTweenMax.to(this.currentItem_do, .8, {
                        x: i,
                        y: s,
                        w: o,
                        h: u,
                        ease: Expo.easeInOut
                    })
                } else {
                    this.zoomButton_do.isMaximized_bl = true;
                    if (e >= n) {
                        FWDR3DCarModTweenMax.to(this.currentItem_do, .8, {
                            x: i,
                            w: o,
                            h: u,
                            ease: Expo.easeInOut
                        })
                    } else if (e < n) {
                        FWDR3DCarModTweenMax.to(this.currentItem_do, .8, {
                            y: s,
                            w: o,
                            h: u,
                            ease: Expo.easeInOut
                        })
                    }
                    this.addEventsForScrollngImageOnDesktop()
                }
                if (r.infoWindow_do) if (r.infoButton_do.currentState == 0) this.infoWindow_do.hide(false);
                this.itemsHolder_do.removeChild(this.currentItem_do);
                this.addChild(this.currentItem_do);
                this.addChild(this.zoomButton_do);
                this.maximizeCompleteTimeOutId_to = setTimeout(this.maximizeCompleteHandler, 800)
            }
        };
        this.maximizeCompleteHandler = function() {
            r.bk_do.setAlpha(1);
            r.mainItemsHolder_do.setVisible(false);
            r.closeButton_do.setVisible(false);
            if (r.nextButton_do) {
                r.nextButton_do.setVisible(false);
                r.prevButton_do.setVisible(false)
            }
            if (r.infoButton_do) r.infoButton_do.setVisible(false);
            if (r.slideshowButtton_do) {
                r.slideshowButtton_do.setVisible(false);
                r.slideShowPreloader_do.setX(3e3)
            }
            r.dispatchEvent(t.MAXIMIZE_COMPLETE);
            if (r.isMobile_bl) r.addEventsForScrollngImageOnMobile()
        };
        this.minimizeCompleteHandler = function() {
            if (r.infoWindow_do) if (r.infoButton_do.currentState == 0) r.infoWindow_do.show(true);
            if (r.showSlideshowButton_bl) r.timerManager.start();
            r.mainItemsHolder_do.setOverflow("hidden");
            if (r.borderRadius != 0) r.currentItem_do.getStyle().borderRadius = r.borderRadius + "px";
            r.itemsHolder_do.removeChild(r.currentItem_do);
            r.itemsHolder_do.addChild(r.currentItem_do);
            r.isTweening_bl = false
        };
        this.addEventsForScrollngImageOnDesktop = function() {
            this.updateImageWhenMaximized_int = setInterval(this.updateMaximizedImageHandler, 16);
            if (e.addEventListener) {
                e.addEventListener("mousemove", this.updateMaximizeImageOnMouseMovedHandler)
            } else {
                document.attachEvent("onmousemove", this.updateMaximizeImageOnMouseMovedHandler)
            }
        };
        this.removeEventsForScrollngImageOnDesktop = function() {
            clearInterval(this.updateImageWhenMaximized_int);
            if (e.addEventListener) {
                e.removeEventListener("mousemove", this.updateMaximizeImageOnMouseMovedHandler)
            } else {
                document.detachEvent("onmousemove", this.updateMaximizeImageOnMouseMovedHandler)
            }
        };
        this.updateMaximizeImageOnMouseMovedHandler = function(e) {
            var t = FWDR3DCarUtils.getViewportMouseCoordinates(e);
            var n = FWDR3DCarUtils.getScrollOffsets();
            r.globalXMousePosition = t.screenX;
            r.globalYMousePosition = t.screenY;
            FWDR3DCarModTweenMax.to(r.zoomButton_do, .2, {
                x: r.globalXMousePosition - parseInt(r.buttonWidth / 2),
                y: r.globalYMousePosition - parseInt(r.buttonHeight / 2)
            })
        };
        this.updateMaximizedImageHandler = function() {
            var e;
            var t;
            r.percentX = r.globalXMousePosition / r.stageWidth;
            r.percentY = r.globalYMousePosition / r.stageHeight;
            if (r.percentX > 1) r.percentX = 1;
            if (r.percentY > 1) r.percentY = 1;
            var n = r.stageWidth / r.originalWidth;
            var i = r.stageHeight / r.originalHeight;
            if (n <= i) {
                e = Math.round((r.stageWidth - r.currentItem_do.getWidth()) * r.percentX);
                if (isNaN(e)) return;
                FWDR3DCarModTweenMax.to(r.currentItem_do, .4, {
                    x: e
                })
            } else {
                t = Math.round((r.stageHeight - r.currentItem_do.getHeight()) * r.percentY);
                if (isNaN(t)) return;
                FWDR3DCarModTweenMax.to(r.currentItem_do, .4, {
                    y: t
                })
            }
        };
        this.addEventsForScrollngImageOnMobile = function() {
            if (r.hasPointerEvent_bl) {
                e.addEventListener("MSPointerDown", r.onTouchStartScrollImage);
                e.addEventListener("MSPointerUp", r.onTouchEndScrollImage)
            } else {
                e.addEventListener("touchstart", r.onTouchStartScrollImage);
                e.addEventListener("touchend", r.onTouchEndScrollImage)
            }
            clearInterval(this.updateImageWhenMaximized_int);
            this.updateImageWhenMaximized_int = setInterval(this.updateMaximizedImageMobileHandler, 16)
        };
        this.removeEventsForScrollngImageOnMobile = function() {
            clearInterval(r.updateImageWhenMaximized_int);
            if (r.hasPointerEvent_bl) {
                e.removeEventListener("MSPointerDown", r.onTouchStartScrollImage);
                e.removeEventListener("MSPointerUp", r.onTouchEndScrollImage);
                e.removeEventListener("MSPointerMove", r.onTouchMoveScrollImage)
            } else {
                e.removeEventListener("touchstart", r.onTouchStartScrollImage);
                e.removeEventListener("touchend", r.onTouchEndScrollImage);
                e.removeEventListener("touchmove", r.onTouchMoveScrollImage)
            }
        };
        this.onTouchStartScrollImage = function(t) {
            var n = FWDR3DCarUtils.getViewportMouseCoordinates(t);
            if (r.hasPointerEvent_bl) {
                e.addEventListener("MSPointerMove", r.onTouchMoveScrollImage)
            } else {
                e.addEventListener("touchmove", r.onTouchMoveScrollImage)
            }
            r.lastPresedX = n.screenX;
            r.lastPresedY = n.screenY;
            t.preventDefault()
        };
        this.onTouchEndScrollImage = function(t) {
            if (r.hasPointerEvent_bl) {
                e.removeEventListener("MSPointerMove", r.onTouchMoveScrollImage)
            } else {
                e.removeEventListener("touchmove", r.onTouchMoveScrollImage)
            }
            r.isDragging_bl = false
        };
        this.onTouchMoveScrollImage = function(e) {
            if (e.preventDefault) e.preventDefault();
            var t = FWDR3DCarUtils.getViewportMouseCoordinates(e);
            var n = r.stageWidth / r.originalWidth;
            var i = r.stageHeight / r.originalHeight;
            var s = 0;
            var o = 0;
            r.isDragging_bl = true;
            if (n < i) {
                s = t.screenX - r.lastPresedX;
                r.lastPresedX = t.screenX;
                r.currentItem_do.setX(r.currentItem_do.getX() + s)
            } else if (n > i) {
                o = t.screenY - r.lastPresedY;
                r.lastPresedY = t.screenY;
                r.currentItem_do.setY(r.currentItem_do.getY() + o)
            } else {
                s = t.screenX - r.lastPresedX;
                r.lastPresedX = t.screenX;
                r.currentItem_do.setX(r.currentItem_do.getX() + s);
                o = t.screenY - r.lastPresedY;
                r.lastPresedY = t.screenY;
                r.currentItem_do.setY(r.currentItem_do.getY() + o)
            }
            r.vx = s * 2;
            r.vy = o * 2
        };
        this.updateMaximizedImageMobileHandler = function() {
            var e;
            var t;
            var n;
            var i;
            var s;
            var o;
            if (!r.isDragging_bl) {
                r.vy *= r.friction;
                r.vx *= r.friction;
                n = r.currentItem_do.getX();
                i = r.currentItem_do.getY();
                e = n + r.vx;
                t = i + r.vy;
                s = r.currentItem_do.getWidth();
                o = r.currentItem_do.getHeight();
                if (isNaN(e) || isNaN(t)) return;
                r.currentItem_do.setX(e);
                r.currentItem_do.setY(t);
                if (i >= 0) {
                    r.vy2 = (0 - i) * .3;
                    r.vy *= r.friction;
                    r.currentItem_do.setY(i + r.vy2)
                } else if (i <= r.stageHeight - o) {
                    r.vy2 = (r.stageHeight - o - i) * .5;
                    r.vy *= r.friction;
                    r.currentItem_do.setY(i + r.vy2)
                }
                if (n >= 0) {
                    r.vx2 = (0 - n) * .3;
                    r.vx *= r.friction;
                    r.currentItem_do.setX(n + r.vx2)
                } else if (n <= r.stageWidth - s) {
                    r.vx2 = (r.stageWidth - s - n) * .5;
                    r.vx *= r.friction;
                    r.currentItem_do.setX(n + r.vx2)
                }
            }
        };
        this.setupCloseButton = function() {
            FWDR3DCarSimpleButton.setPrototype();
            this.closeButton_do = new FWDR3DCarSimpleButton(this.closeN_img, this.closeS_img, this.isMobile_bl);
            this.closeButton_do.addListener(FWDR3DCarSimpleButton.CLICK, this.closeButtonOnClickHandler);
            this.addChild(this.closeButton_do)
        };
        this.closeButtonOnClickHandler = function(e) {
            r.hide()
        };
        this.setupNextAndPrevButtons = function() {
            FWDR3DCarSimpleButton.setPrototype();
            this.nextButton_do = new FWDR3DCarSimpleButton(this.nextN_img, this.nextS_img, this.isMobile_bl);
            this.nextButton_do.addListener(FWDR3DCarSimpleButton.CLICK, this.nextButtonOnClickHandler);
            FWDR3DCarSimpleButton.setPrototype();
            this.prevButton_do = new FWDR3DCarSimpleButton(this.prevN_img, this.prevS_img, this.isMobile_bl);
            this.prevButton_do.addListener(FWDR3DCarSimpleButton.CLICK, this.prevButtonOnClickHandler);
            this.addChild(this.nextButton_do);
            this.addChild(this.prevButton_do)
        };
        this.nextButtonOnClickHandler = function(e) {
            r.goToNextItem()
        };
        this.prevButtonOnClickHandler = function(e) {
            r.goToPrevItem()
        };
        this.setupZoomButton = function() {
            FWDR3DCarComplexButton.setPrototype();
            this.zoomButton_do = new FWDR3DCarComplexButton(this.minimizeN_img, this.minimizeS_img, this.maximizeN_img, this.maximizeS_img, this.isMobile_bl, true);
            this.zoomButton_do.addListener(FWDR3DCarComplexButton.CLICK, this.onZoomButtonClickHandler);
            this.addChild(this.zoomButton_do)
        };
        this.onZoomButtonClickHandler = function(e) {
            if (r.isLoading_bl) return;
            r.zoomButton_do.toggleButton();
            r.maximizeOrMinimize()
        };
        this.addZoomButtonBackToButtonsArray = function() {
            if (this.showZoomButton_bl) {
                var e = FWDR3DCarUtils.indexOfArray(this.buttons_ar, this.zoomButton_do);
                if (e == -1) {
                    if (this.buttons_ar.length > 1) {
                        this.zoomButton_do.setX(this.buttons_ar[this.buttons_ar.length - 2].finalX);
                        this.zoomButton_do.setY(this.buttons_ar[this.buttons_ar.length - 2].finalY + this.buttonHeight + 1);
                        this.buttons_ar.splice(this.buttons_ar.length - 1, 0, this.zoomButton_do)
                    } else {
                        this.zoomButton_do.setX(r.buttons_ar[this.buttons_ar.length - 1].finalX);
                        this.zoomButton_do.setY(r.buttons_ar[this.buttons_ar.length - 1].finalY + this.buttonHeight + 1);
                        this.buttons_ar.push(this.zoomButton_do)
                    }
                    this.addChild(this.zoomButton_do)
                }
            }
        };
        this.setupInfoButton = function() {
            FWDR3DCarComplexButton.setPrototype();
            this.infoButton_do = new FWDR3DCarComplexButton(this.infoCloseN_img, this.infoCloseS_img, this.infoOpenN_img, this.infoOpenS_img, this.isMobile_bl, false);
            this.infoButton_do.addListener(FWDR3DCarComplexButton.FIRST_BUTTON_CLICK, this.onHideInfoButtonPressedHandler);
            this.infoButton_do.addListener(FWDR3DCarComplexButton.SECOND_BUTTON_CLICK, this.onShowInfoButtonPressedHandler);
            this.addChild(this.infoButton_do)
        };
        this.onShowInfoButtonPressedHandler = function(e) {
            r.infoWindow_do.setText(r.data_ar[r.id].infoText, r.finalWidth, r.finalHeight, false, r.type_str != t.IMAGE);
            r.mainItemsHolder_do.addChild(r.infoWindow_do)
        };
        this.onHideInfoButtonPressedHandler = function(e) {
            r.infoWindow_do.hide(true)
        };
        this.showInfoWindowOnStart = function() {
            if (!r.infoWindow_do) return;
            if (this.infoButton_do) this.infoButton_do.setSecondButtonState();
            r.infoWindow_do.setText(r.data_ar[r.id].infoText, r.finalWidth, r.finalHeight, false, r.type_str != t.IMAGE);
            if (!r.mainItemsHolder_do.contains(r.infoWindow_do)) r.mainItemsHolder_do.addChild(r.infoWindow_do)
        };
        this.setupInfoWindow = function() {
            FWDR3DCarInfoWindow.setPrototype();
            this.infoWindow_do = new FWDR3DCarInfoWindow(this.borderSize, this.infoWindowBackgroundColor, this.infoWindowBackgroundOpacity, this.borderRadius, this.isMobile_bl)
        };
        this.setupSlideshowButton = function() {
            FWDR3DCarComplexButton.setPrototype();
            this.slideshowButtton_do = new FWDR3DCarComplexButton(this.pauseN_img, this.pauseS_img, this.playN_img, this.playS_img, this.isMobile_bl, false);
            this.slideshowButtton_do.addListener(FWDR3DCarComplexButton.FIRST_BUTTON_CLICK, this.onStopSlideShowHandler);
            this.slideshowButtton_do.addListener(FWDR3DCarComplexButton.SECOND_BUTTON_CLICK, this.onStartSlideShowHandler);
            if (this.slideShowAutoPlay_bl) {
                this.timerManager.isStopped_bl = false;
                this.slideShowPreloader_do.show(true);
                this.slideshowButtton_do.setSecondButtonState()
            }
            this.addChild(this.slideshowButtton_do)
        };
        this.onStopSlideShowHandler = function(e) {
            r.timerManager.isStopped_bl = true;
            r.slideShowPreloader_do.hide(true);
            r.timerManager.stop()
        };
        this.onStartSlideShowHandler = function(e) {
            r.timerManager.isStopped_bl = false;
            r.slideShowPreloader_do.show(true);
            if (!r.isLoading_bl) r.timerManager.start()
        };
        this.setupTimerManager = function() {
            FWDR3DCarTimerManager.setProtptype();
            this.timerManager = new FWDR3DCarTimerManager(this.slideShowDelay, this.slideShowAutoPlay_bl);
            this.timerManager.addListener(FWDR3DCarTimerManager.START, this.onTimerManagerStartHandler);
            this.timerManager.addListener(FWDR3DCarTimerManager.STOP, this.onTimerManagerStopHandler);
            this.timerManager.addListener(FWDR3DCarTimerManager.TIME, this.onTimerManagerTimeHandler)
        };
        this.onTimerManagerStartHandler = function() {
            if (!r.timerManager.isStopped_bl) r.slideShowPreloader_do.animIn()
        };
        this.onTimerManagerStopHandler = function() {
            r.slideShowPreloader_do.animOut()
        };
        this.onTimerManagerTimeHandler = function() {
            r.goToNextItem();
            r.slideShowPreloader_do.animOut()
        };
        this.setupSlideShowPreloader = function() {
            FWDR3DCarSlideShowPreloader.setPrototype();
            this.slideShowPreloader_do = new FWDR3DCarSlideShowPreloader(this.slideShowPreloader_img, 31, this.slideshowPreloaderHeight, 11, this.slideShowDelay);
            this.addChild(this.slideShowPreloader_do)
        };
        this.positionSlideShowPreloader = function(e) {
            if (!this.slideShowPreloader_do) return;
            this.slideShowPreloader_do.finalX = this.finalX + this.finalWidth;
            this.slideShowPreloader_do.finalY = this.finalY + this.finalHeight - this.slideshowPreloaderHeight;
            FWDR3DCarModTweenMax.killTweensOf(this.slideShowPreloader_do);
            if (e) {
                FWDR3DCarModTweenMax.to(this.slideShowPreloader_do, .8, {
                    x: this.slideShowPreloader_do.finalX,
                    y: this.slideShowPreloader_do.finalY,
                    delay: .1,
                    ease: Expo.easeInOut
                })
            } else {
                this.slideShowPreloader_do.setX(this.slideShowPreloader_do.finalX);
                this.slideShowPreloader_do.setY(this.slideShowPreloader_do.finalY)
            }
        };
        this.positionButtons = function(e) {
            var t;
            var n = this.buttons_ar.length;
            var r = 1;
            var i = this.finalX + this.finalWidth;
            var s = this.finalY;
            var o = 0;
            for (var u = 0; u < n; u++) {
                t = this.buttons_ar[u];
                FWDR3DCarModTweenMax.killTweensOf(t);
                t.finalY = s + u * (this.buttonHeight + 1);
                if (t == this.nextButton_do) {
                    t.finalY = Math.round((this.stageHeight - this.buttonHeight) / 2);
                    if (t.finalY < this.buttons_ar[u - 1].finalY + this.buttonHeight + 1) t.finalY = this.buttons_ar[u - 1].finalY + this.buttonHeight + 1
                }
                t.finalX = i;
                if (isNaN(t.finalX)) return;
                if (t) {
                    if (e) {
                        FWDR3DCarModTweenMax.to(t, .8, {
                            x: t.finalX,
                            y: t.finalY,
                            delay: .1,
                            ease: Expo.easeInOut
                        })
                    } else {
                        t.setX(t.finalX);
                        t.setY(t.finalY)
                    }
                }
            }
            if (this.showNextAndPrevButtons_bl) {
                FWDR3DCarModTweenMax.killTweensOf(this.prevButton_do);
                if (e) {
                    FWDR3DCarModTweenMax.to(this.prevButton_do, .8, {
                        x: this.finalX - this.buttonWidth,
                        y: Math.round((this.stageHeight - this.buttonHeight) / 2),
                        delay: .1,
                        ease: Expo.easeInOut
                    })
                } else {
                    this.prevButton_do.setX(this.finalX - this.buttonWidth);
                    this.prevButton_do.setY(Math.round((this.stageHeight - this.buttonHeight) / 2))
                }
            }
            if (this.isMaximized_bl && this.zoomButton_do && this.isMobile_bl) {
                FWDR3DCarModTweenMax.killTweensOf(this.zoomButton_do);
                this.zoomButton_do.setX(this.stageWidth - this.buttonWidth);
                this.zoomButton_do.setY(1)
            }
            this.positionSlideShowPreloader(e)
        };
        this.setupPreloader = function() {
            FWDR3DCarPreloader.setPrototype();
            this.preloader_do = new FWDR3DCarPreloader(this.preloaderImg, 70, 40, 12, 50);
            this.preloader_do.addListener(FWDR3DCarPreloader.HIDE_COMPLETE, this.onPreloaderHideCompleteHandler)
        };
        this.positionPreloader = function() {
            if (this.preloader_do) {
                this.preloader_do.setX(parseInt((this.stageWidth - this.preloader_do.getWidth()) / 2));
                this.preloader_do.setY(Math.round((this.stageHeight - this.preloader_do.getHeight()) / 2))
            }
        };
        this.onPreloaderHideCompleteHandler = function() {
            r.removeChild(r.preloader_do)
        };
        this.addKeyboardSupport = function() {
            if (document.addEventListener) {
                document.addEventListener("keydown", this.onKeyDownHandler);
                document.addEventListener("keyup", this.onKeyUpHandler)
            } else {
                document.attachEvent("onkeydown", this.onKeyDownHandler);
                document.attachEvent("onkeyup", this.onKeyUpHandler)
            }
        };
        this.onKeyDownHandler = function(e) {
            if (e.keyCode == 39) {
                r.goToNextItem()
            } else if (e.keyCode == 37) {
                r.goToPrevItem()
            }
            if (document.removeEventListener) {
                document.removeEventListener("keydown", r.onKeyDownHandler)
            } else {
                document.detachEvent("onkeydown", r.onKeyDownHandler)
            }
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                return false
            }
        };
        this.onKeyUpHandler = function(e) {
            if (document.addEventListener) {
                document.addEventListener("keydown", r.onKeyDownHandler)
            } else {
                document.attachEvent("onkeydown", r.onKeyDownHandler)
            }
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                return false
            }
        };
        this.hide = function() {
            if (r.isTweening_bl) return;
            r.isTweeningOnShowOrHide_bl = true;
            if (this.image_img) {
                this.image_img.onload = null;
                this.image_img.onerror = null
            }
            this.clearMainEventsIntervalsAndTimeOuts();
            if (this.type_str == t.YOUTUBE || this.type_str == t.VIMEO || r.type_str == t.IFRAME) {
                if (this.opacityType == "filter") {
                    this.currentItem_do.setVisible(false)
                } else {
                    this.itemsHolder_do.removeChild(this.currentItem_do)
                }
                FWDR3DCarModTweenMax.to(this.itemsBorder_do, .9, {
                    alpha: 0,
                    ease: Quint.easeOut
                });
                FWDR3DCarModTweenMax.to(this.mainItemsHolder_do, .9, {
                    x: this.stageWidth / 2,
                    y: this.stageHeight / 2,
                    w: 0,
                    h: 0,
                    ease: Expo.easeInOut
                });
                FWDR3DCarModTweenMax.to(this.bk_do, .9, {
                    alpha: 0,
                    delay: .9,
                    ease: Quint.easeOut,
                    onComplete: this.onHideComplete
                })
            } else if (this.type_str == t.IMAGE) {
                if (this.currentItem_do && this.currentItem_do.screen) {
                    FWDR3DCarModTweenMax.killTweensOf(this.currentItem_do);
                    FWDR3DCarModTweenMax.to(this.currentItem_do, .7, {
                        alpha: 0,
                        ease: Quint.easeOut
                    })
                }
                FWDR3DCarModTweenMax.to(this.itemsBorder_do, .9, {
                    alpha: 0,
                    delay: .1,
                    ease: Quint.easeOut
                });
                FWDR3DCarModTweenMax.to(this.mainItemsHolder_do, .9, {
                    x: this.stageWidth / 2,
                    y: this.stageHeight / 2,
                    w: 0,
                    h: 0,
                    delay: .2,
                    ease: Expo.easeInOut
                });
                FWDR3DCarModTweenMax.to(this.bk_do, .9, {
                    alpha: 0,
                    delay: 1.2,
                    ease: Quint.easeOut,
                    onComplete: this.onHideComplete
                })
            }
            this.preloader_do.hide(true);
            this.hideButtons(true);
            this.currentItem_do = null;
            this.prevItem_do = null;
            this.isTweening_bl = true;
            this.firstTimeShowed_bl = true;
            r.dispatchEvent(t.HIDE_START)
        };
        this.hideButtons = function(e) {
            if (e) {
                FWDR3DCarModTweenMax.to(this.closeButton_do, .8, {
                    x: this.stageWidth,
                    ease: Expo.easeInOut
                });
                if (this.infoButton_do) FWDR3DCarModTweenMax.to(this.infoButton_do, .8, {
                    x: this.stageWidth,
                    ease: Expo.easeInOut
                });
                if (this.slideshowButtton_do) FWDR3DCarModTweenMax.to(this.slideshowButtton_do, .8, {
                    x: this.stageWidth,
                    ease: Expo.easeInOut
                });
                if (this.zoomButton_do) FWDR3DCarModTweenMax.to(this.zoomButton_do, .8, {
                    x: this.stageWidth,
                    ease: Expo.easeInOut
                });
                if (this.nextButton_do) {
                    FWDR3DCarModTweenMax.to(this.nextButton_do, .8, {
                        x: this.stageWidth,
                        ease: Expo.easeInOut
                    });
                    FWDR3DCarModTweenMax.to(this.prevButton_do, .8, {
                        x: -this.buttonWidth,
                        ease: Expo.easeInOut
                    })
                }
                if (this.slideShowPreloader_do) FWDR3DCarModTweenMax.to(this.slideShowPreloader_do, .8, {
                    x: this.stageWidth,
                    ease: Expo.easeInOut
                })
            } else {
                this.closeButton_do.setVisible(false);
                if (this.infoButton_do) this.infoButton_do.setVisible(false);
                if (this.zoomButton_do) this.zoomButton_do.setVisible(false);
                if (this.slideshowButtton_do) this.slideshowButtton_do.setVisible(false);
                if (this.nextButton_do) {
                    this.nextButton_do.setVisible(false);
                    this.prevButton_do.setVisible(false)
                }
                if (this.slideShowPreloader_do) this.slideShowPreloader_do.image_do.setVisible(false)
            }
        };
        this.showButtons = function() {
            this.positionButtons(false);
            this.closeButton_do.setVisible(true);
            this.closeButton_do.setX(this.stageWidth);
            if (this.infoButton_do) {
                this.infoButton_do.setVisible(true);
                this.infoButton_do.setX(this.stageWidth)
            }
            if (this.zoomButton_do && (this.type_str != t.YOUTUBE || this.type_str != t.VIMEO || r.type_str == t.IFRAME)) {
                this.zoomButton_do.setVisible(true);
                this.zoomButton_do.setX(this.stageWidth)
            }
            if (this.slideshowButtton_do) {
                this.slideshowButtton_do.setVisible(true);
                this.slideshowButtton_do.setX(this.stageWidth)
            }
            if (this.nextButton_do) {
                this.nextButton_do.setVisible(true);
                this.nextButton_do.setX(this.stageWidth);
                this.prevButton_do.setVisible(true);
                this.prevButton_do.setX( - this.buttonWidth)
            }
            if (this.slideShowPreloader_do) {
                this.slideShowPreloader_do.image_do.setX(0);
                this.slideShowPreloader_do.setX(this.stageWidth);
                this.slideShowPreloader_do.image_do.setVisible(true)
            }
            this.positionButtons(true)
        };
        this.onHideComplete = function() {
            r.isShowed_bl = false;
            r.isTweeningOnShowOrHide_bl = false;
            r.stageWidth = 0;
            if (r.isMobile_bl) {
                e.removeEventListener("touchmove", r.mouseDummyHandler)
            } else {
                if (e.removeEventListener) {
                    e.removeEventListener("mousewheel", r.mouseDummyHandler);
                    e.removeEventListener("DOMMouseScroll", r.mouseDummyHandler)
                } else if (document.detachEvent) {
                    document.detachEvent("onmousewheel", r.mouseDummyHandler)
                }
            }
            r.addZoomButtonBackToButtonsArray();
            r.screen.parentNode.removeChild(r.screen);
            r.dispatchEvent(t.HIDE_COMPLETE)
        };
        this.clearMainEventsIntervalsAndTimeOuts = function() {
            clearInterval(this.updateImageWhenMaximized_int);
            clearTimeout(this.transitionDoneId_to);
            clearTimeout(this.transitionShapeDoneId_to);
            clearTimeout(this.showVideoId_to);
            clearTimeout(this.maximizeCompleteTimeOutId_to);
            clearTimeout(this.minimizeCompleteTimeOutId_to);
            clearTimeout(this.showFirstTimeWithDelayId_to);
            clearTimeout(this.resizeHandlerId1_to);
            clearTimeout(this.resizeHandlerId2_to);
            clearTimeout(this.orientationChangeId_to);
            this.removeEventsForScrollngImageOnDesktop();
            if (this.timerManager) this.timerManager.stop();
            if (this.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    e.removeEventListener("MSPointerDown", r.onTouchStartScrollImage);
                    e.removeEventListener("MSPointerUp", r.onTouchEndScrollImage);
                    e.removeEventListener("MSPointerMove", r.onTouchMoveScrollImage);
                    r.bk_do.screen.removeEventListener("MSPointerDown", r.onBkMouseDown)
                }
                e.removeEventListener("touchstart", r.onTouchStartScrollImage);
                e.removeEventListener("touchend", r.onTouchEndScrollImage);
                e.removeEventListener("touchmove", r.onTouchMoveScrollImage);
                r.bk_do.screen.removeEventListener("touchstart", r.onBkMouseDown)
            } else {
                if (e.addEventListener) {
                    e.removeEventListener("mousemove", this.updateMaximizeImageOnMouseMovedHandler);
                    r.bk_do.screen.removeEventListener("mousedown", r.onBkMouseDown)
                } else if (document.attachEvent) {
                    document.detachEvent("onmousemove", this.updateMaximizeImageOnMouseMovedHandler);
                    r.bk_do.screen.detachEvent("onmousedown", r.onBkMouseDown)
                }
            }
            if (e.removeEventListener) {
                e.removeEventListener("resize", r.onResizeHandler);
                e.removeEventListener("scroll", r.onScrollHandler);
                e.removeEventListener("orientationchange", r.orientationChance);
                document.removeEventListener("fullscreenchange", r.onFullScreenChange);
                document.removeEventListener("mozfullscreenchange", r.onFullScreenChange)
            } else if (e.detachEvent) {
                e.detachEvent("onresize", r.onResizeHandler);
                e.detachEvent("onscroll", r.onScrollHandler)
            }
            if (this.addKeyboardSupport_bl) {
                if (document.removeEventListener) {
                    document.removeEventListener("keydown", this.onKeyDownHandler);
                    document.removeEventListener("keyup", this.onKeyUpHandler)
                } else if (document.attachEvent) {
                    document.detachEvent("onkeydown", this.onKeyDownHandler);
                    document.detachEvent("onkeyup", this.onKeyUpHandler)
                }
            }
        };
        this.destroy = function() {
            if (r.isMobile_bl) {
                e.removeEventListener("touchmove", r.mouseDummyHandler)
            } else {
                if (e.removeEventListener) {
                    e.removeEventListener("mousewheel", r.mouseDummyHandler);
                    e.removeEventListener("DOMMouseScroll", r.mouseDummyHandler)
                } else if (document.detachEvent) {
                    document.detachEvent("onmousewheel", r.mouseDummyHandler)
                }
            }
            if (this.image_img) {
                this.image_img.onload = null;
                this.image_img.onerror = null
            }
            if (this.slideShowPreloader_do) {
                FWDR3DCarModTweenMax.killTweensOf(this.slideShowPreloader_do);
                this.slideShowPreloader_do.destroy()
            }
            this.info_do.destroy();
            if (this.infoWindow_do) this.infoWindow_do.destroy();
            if (this.timerManager) this.timerManager.destroy();
            this.preloader_do.destroy();
            if (this.customContextMenu) this.customContextMenu.destroy();
            this.clearMainEventsIntervalsAndTimeOuts();
            this.cleanChildren(0);
            if (this.nextButton_do) {
                FWDR3DCarModTweenMax.killTweensOf(this.nextButton_do);
                FWDR3DCarModTweenMax.killTweensOf(this.prevButton_do);
                this.nextButton_do.destroy();
                this.prevButton_do.destroy()
            }
            if (this.closeButton_do) {
                FWDR3DCarModTweenMax.killTweensOf(this.closeButton_do);
                this.closeButton_do.destroy()
            }
            if (this.zoomButton_do) {
                FWDR3DCarModTweenMax.killTweensOf(this.zoomButton_do);
                this.zoomButton_do.destroy()
            }
            if (this.infoButton_do) {
                FWDR3DCarModTweenMax.killTweensOf(this.infoButton_do);
                this.infoButton_do.destroy()
            }
            if (this.slideshowButtton_do) {
                FWDR3DCarModTweenMax.killTweensOf(this.slideshowButtton_do);
                this.slideshowButtton_do.destroy()
            }
            if (this.currentItem_do) {
                if (this.contains(this.currentItem_do)) {
                    FWDR3DCarModTweenMax.killTweensOf(this.currentItem_do);
                    this.currentItem_do.destroy()
                }
            }
            FWDR3DCarModTweenMax.killTweensOf(this.mainItemsHolder_do);
            FWDR3DCarModTweenMax.killTweensOf(this.bk_do);
            FWDR3DCarModTweenMax.killTweensOf(this.itemsBackground_do);
            FWDR3DCarModTweenMax.killTweensOf(this.itemsBorder_do);
            FWDR3DCarModTweenMax.killTweensOf(this.itemsHolder_do);
            this.mainItemsHolder_do.destroy();
            this.bk_do.destroy();
            this.itemsBackground_do.destroy();
            this.itemsBorder_do.destroy();
            this.itemsHolder_do.destroy();
            this.image_img = null;
            this.closeN_img = null;
            this.closeS_img = null;
            this.nextN_img = null;
            this.nextS_img = null;
            this.prevN_img = null;
            this.prevS_img = null;
            this.maximizeN_img = null;
            this.maximizeS_img = null;
            this.minimizeN_img = null;
            this.minimizeS_img = null;
            this.pauseN_img = null;
            this.pauseS_img = null;
            this.playN_img = null;
            this.playS_img = null;
            this.infoOpenN_img = null;
            this.infoOpenS_img = null;
            this.infoCloseN_img = null;
            this.infoCloseS_img = null;
            this.preloaderImg = null;
            this.info_do = null;
            this.infoWindow_do = null;
            this.slideShowPreloader_do = null;
            this.timerManager = null;
            this.bk_do = null;
            this.mainItemsHolder_do = null;
            this.itemsBackground_do = null;
            this.itemsBorder_do = null;
            this.itemsHolder_do = null;
            this.currentItem_do = null;
            this.prevItem_do = null;
            this.closeButton_do = null;
            this.nextButton_do = null;
            this.prevButton_do = null;
            this.zoomButton_do = null;
            this.slideshowButtton_do = null;
            this.data_ar = null;
            n = null;
            r.setInnerHTML("");
            i.destroy();
            r = null;
            i = null;
            t.prototype = null
        };
        this.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDR3DCarDisplayObject("div")
    };
    t.YOUTUBE = "youtube";
    t.VIMEO = "vimeo";
    t.IMAGE = "image_img";
    t.IFRAME = "htmlIframe";
    t.MAXIMIZE_COMPLETE = "maximizeComplete";
    t.MINIMIZE_START = "minimizeStart";
    t.SHOW_START = "showStart";
    t.HIDE_COMPLETE = "hideComplete";
    t.HIDE_START = "hideStart";
    t.prototype = null;
    e.FWDR3DCarLightBox = t
})(window); (window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    window._gsDefine("FWDR3DCarModTweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function(e, t, n) {
        var r = [].slice,
        i = function(e, t, r) {
            n.call(this, e, t, r);
            this._cycle = 0;
            this._yoyo = this.vars.yoyo === true;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._dirty = true
        },
        s = function(e) {
            return e.jquery || e.length && e[0] && e[0].nodeType && e[0].style
        },
        o = i.prototype = n.to({},
        .1, {}),
        u = [];
        i.version = "1.9.7";
        o.constructor = i;
        o.kill()._gc = false;
        i.killTweensOf = i.killDelayedCallsTo = n.killTweensOf;
        i.getTweensOf = n.getTweensOf;
        i.ticker = n.ticker;
        o.invalidate = function() {
            this._yoyo = this.vars.yoyo === true;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(true);
            return n.prototype.invalidate.call(this)
        };
        o.updateTo = function(e, t) {
            var r = this.ratio,
            i;
            if (t && this.timeline && this._startTime < this._timeline._time) {
                this._startTime = this._timeline._time;
                this._uncache(false);
                if (this._gc) {
                    this._enabled(true, false)
                } else {
                    this._timeline.insert(this, this._startTime - this._delay)
                }
            }
            for (i in e) {
                this.vars[i] = e[i]
            }
            if (this._initted) {
                if (t) {
                    this._initted = false
                } else {
                    if (this._notifyPluginsOfEnabled && this._firstPT) {
                        n._onPluginEvent("_onDisable", this)
                    }
                    if (this._time / this._duration > .998) {
                        var s = this._time;
                        this.render(0, true, false);
                        this._initted = false;
                        this.render(s, true, false)
                    } else if (this._time > 0) {
                        this._initted = false;
                        this._init();
                        var o = 1 / (1 - r),
                        u = this._firstPT,
                        a;
                        while (u) {
                            a = u.s + u.c;
                            u.c *= o;
                            u.s = a - u.c;
                            u = u._next
                        }
                    }
                }
            }
            return this
        };
        o.render = function(e, t, n) {
            var r = !this._dirty ? this._totalDuration: this.totalDuration(),
            i = this._time,
            s = this._totalTime,
            o = this._cycle,
            a,
            f,
            l,
            c,
            h,
            p,
            d;
            if (e >= r) {
                this._totalTime = r;
                this._cycle = this._repeat;
                if (this._yoyo && (this._cycle & 1) !== 0) {
                    this._time = 0;
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0
                } else {
                    this._time = this._duration;
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1
                }
                if (!this._reversed) {
                    a = true;
                    f = "onComplete"
                }
                if (this._duration === 0) {
                    if (e === 0 || this._rawPrevTime < 0) if (this._rawPrevTime !== e) {
                        n = true;
                        if (this._rawPrevTime > 0) {
                            f = "onReverseComplete";
                            if (t) {
                                e = -1
                            }
                        }
                    }
                    this._rawPrevTime = e
                }
            } else if (e < 1e-7) {
                this._totalTime = this._time = this._cycle = 0;
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
                if (s !== 0 || this._duration === 0 && this._rawPrevTime > 0) {
                    f = "onReverseComplete";
                    a = this._reversed
                }
                if (e < 0) {
                    this._active = false;
                    if (this._duration === 0) {
                        if (this._rawPrevTime >= 0) {
                            n = true
                        }
                        this._rawPrevTime = e
                    }
                } else if (!this._initted) {
                    n = true
                }
            } else {
                this._totalTime = this._time = e;
                if (this._repeat !== 0) {
                    c = this._duration + this._repeatDelay;
                    this._cycle = this._totalTime / c >> 0;
                    if (this._cycle !== 0) if (this._cycle === this._totalTime / c) {
                        this._cycle--
                    }
                    this._time = this._totalTime - this._cycle * c;
                    if (this._yoyo) if ((this._cycle & 1) !== 0) {
                        this._time = this._duration - this._time
                    }
                    if (this._time > this._duration) {
                        this._time = this._duration
                    } else if (this._time < 0) {
                        this._time = 0
                    }
                }
                if (this._easeType) {
                    h = this._time / this._duration;
                    p = this._easeType;
                    d = this._easePower;
                    if (p === 1 || p === 3 && h >= .5) {
                        h = 1 - h
                    }
                    if (p === 3) {
                        h *= 2
                    }
                    if (d === 1) {
                        h *= h
                    } else if (d === 2) {
                        h *= h * h
                    } else if (d === 3) {
                        h *= h * h * h
                    } else if (d === 4) {
                        h *= h * h * h * h
                    }
                    if (p === 1) {
                        this.ratio = 1 - h
                    } else if (p === 2) {
                        this.ratio = h
                    } else if (this._time / this._duration < .5) {
                        this.ratio = h / 2
                    } else {
                        this.ratio = 1 - h / 2
                    }
                } else {
                    this.ratio = this._ease.getRatio(this._time / this._duration)
                }
            }
            if (i === this._time && !n) {
                if (s !== this._totalTime) if (this._onUpdate) if (!t) {
                    this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)
                }
                return
            } else if (!this._initted) {
                this._init();
                if (!this._initted) {
                    return
                }
                if (this._time && !a) {
                    this.ratio = this._ease.getRatio(this._time / this._duration)
                } else if (a && this._ease._calcEnd) {
                    this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1)
                }
            }
            if (!this._active) if (!this._paused) {
                this._active = true
            }
            if (s === 0) {
                if (this._startAt) {
                    if (e >= 0) {
                        this._startAt.render(e, t, n)
                    } else if (!f) {
                        f = "_dummyGS"
                    }
                }
                if (this.vars.onStart) if (this._totalTime !== 0 || this._duration === 0) if (!t) {
                    this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)
                }
            }
            l = this._firstPT;
            while (l) {
                if (l.f) {
                    l.t[l.p](l.c * this.ratio + l.s)
                } else {
                    var v = l.c * this.ratio + l.s;
                    if (l.p == "x") {
                        l.t.setX(v)
                    } else if (l.p == "y") {
                        l.t.setY(v)
                    } else if (l.p == "z") {
                        l.t.setZ(v)
                    } else if (l.p == "angleX") {
                        l.t.setAngleX(v)
                    } else if (l.p == "angleY") {
                        l.t.setAngleY(v)
                    } else if (l.p == "angleZ") {
                        l.t.setAngleZ(v)
                    } else if (l.p == "w") {
                        l.t.setWidth(v)
                    } else if (l.p == "h") {
                        l.t.setHeight(v)
                    } else if (l.p == "alpha") {
                        l.t.setAlpha(v)
                    } else if (l.p == "scale") {
                        l.t.setScale2(v)
                    } else {
                        l.t[l.p] = v
                    }
                }
                l = l._next
            }
            if (this._onUpdate) {
                if (e < 0) if (this._startAt) {
                    this._startAt.render(e, t, n)
                }
                if (!t) {
                    this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)
                }
            }
            if (this._cycle !== o) if (!t) if (!this._gc) if (this.vars.onRepeat) {
                this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || u)
            }
            if (f) if (!this._gc) {
                if (e < 0 && this._startAt && !this._onUpdate) {
                    this._startAt.render(e, t, n)
                }
                if (a) {
                    if (this._timeline.autoRemoveChildren) {
                        this._enabled(false, false)
                    }
                    this._active = false
                }
                if (!t && this.vars[f]) {
                    this.vars[f].apply(this.vars[f + "Scope"] || this, this.vars[f + "Params"] || u)
                }
            }
        };
        i.to = function(e, t, n) {
            return new i(e, t, n)
        };
        i.from = function(e, t, n) {
            n.runBackwards = true;
            n.immediateRender = n.immediateRender != false;
            return new i(e, t, n)
        };
        i.fromTo = function(e, t, n, r) {
            r.startAt = n;
            r.immediateRender = r.immediateRender != false && n.immediateRender != false;
            return new i(e, t, r)
        };
        i.staggerTo = i.allTo = function(e, t, o, a, f, l, c) {
            a = a || 0;
            var h = o.delay || 0,
            p = [],
            d = function() {
                if (o.onComplete) {
                    o.onComplete.apply(o.onCompleteScope || this, o.onCompleteParams || u)
                }
                f.apply(c || this, l || u)
            },
            v,
            m,
            g,
            y;
            if (! (e instanceof Array)) {
                if (typeof e === "string") {
                    e = n.selector(e) || e
                }
                if (s(e)) {
                    e = r.call(e, 0)
                }
            }
            v = e.length;
            for (g = 0; g < v; g++) {
                m = {};
                for (y in o) {
                    m[y] = o[y]
                }
                m.delay = h;
                if (g === v - 1 && f) {
                    m.onComplete = d
                }
                p[g] = new i(e[g], t, m);
                h += a
            }
            return p
        };
        i.staggerFrom = i.allFrom = function(e, t, n, r, s, o, u) {
            n.runBackwards = true;
            n.immediateRender = n.immediateRender != false;
            return i.staggerTo(e, t, n, r, s, o, u)
        };
        i.staggerFromTo = i.allFromTo = function(e, t, n, r, s, o, u, a) {
            r.startAt = n;
            r.immediateRender = r.immediateRender != false && n.immediateRender != false;
            return i.staggerTo(e, t, r, s, o, u, a)
        };
        i.delayedCall = function(e, t, n, r, s) {
            return new i(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: n,
                onCompleteScope: r,
                onReverseComplete: t,
                onReverseCompleteParams: n,
                onReverseCompleteScope: r,
                immediateRender: false,
                useFrames: s,
                overwrite: 0
            })
        };
        i.set = function(e, t) {
            return new i(e, 0, t)
        };
        i.isTweening = function(e) {
            var t = n.getTweensOf(e),
            r = t.length,
            i;
            while (--r > -1) {
                i = t[r];
                if (i._active || i._startTime === i._timeline._time && i._timeline._active) {
                    return true
                }
            }
            return false
        };
        var a = function(e, t) {
            var r = [],
            i = 0,
            s = e._first;
            while (s) {
                if (s instanceof n) {
                    r[i++] = s
                } else {
                    if (t) {
                        r[i++] = s
                    }
                    r = r.concat(a(s, t));
                    i = r.length
                }
                s = s._next
            }
            return r
        },
        f = i.getAllTweens = function(t) {
            return a(e._rootTimeline, t).concat(a(e._rootFramesTimeline, t))
        };
        i.killAll = function(e, n, r, i) {
            if (n == null) {
                n = true
            }
            if (r == null) {
                r = true
            }
            var s = f(i != false),
            o = s.length,
            u = n && r && i,
            a,
            l,
            c;
            for (c = 0; c < o; c++) {
                l = s[c];
                if (u || l instanceof t || (a = l.target === l.vars.onComplete) && r || n && !a) {
                    if (e) {
                        l.totalTime(l.totalDuration())
                    } else {
                        l._enabled(false, false)
                    }
                }
            }
        };
        i.killChildTweensOf = function(e, t) {
            if (e == null) {
                return
            }
            var o = n._tweenLookup,
            u, a, f, l, c;
            if (typeof e === "string") {
                e = n.selector(e) || e
            }
            if (s(e)) {
                e = r(e, 0)
            }
            if (e instanceof Array) {
                l = e.length;
                while (--l > -1) {
                    i.killChildTweensOf(e[l], t)
                }
                return
            }
            u = [];
            for (f in o) {
                a = o[f].target.parentNode;
                while (a) {
                    if (a === e) {
                        u = u.concat(o[f].tweens)
                    }
                    a = a.parentNode
                }
            }
            c = u.length;
            for (l = 0; l < c; l++) {
                if (t) {
                    u[l].totalTime(u[l].totalDuration())
                }
                u[l]._enabled(false, false)
            }
        };
        var l = function(e, n, r, i) {
            if (n === undefined) {
                n = true
            }
            if (r === undefined) {
                r = true
            }
            var s = f(i),
            o = n && r && i,
            u = s.length,
            a,
            l;
            while (--u > -1) {
                l = s[u];
                if (o || l instanceof t || (a = l.target === l.vars.onComplete) && r || n && !a) {
                    l.paused(e)
                }
            }
        };
        i.pauseAll = function(e, t, n) {
            l(true, e, t, n)
        };
        i.resumeAll = function(e, t, n) {
            l(false, e, t, n)
        };
        o.progress = function(e) {
            return ! arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - e: e) + this._cycle * (this._duration + this._repeatDelay), false)
        };
        o.totalProgress = function(e) {
            return ! arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * e, false)
        };
        o.time = function(e, t) {
            if (!arguments.length) {
                return this._time
            }
            if (this._dirty) {
                this.totalDuration()
            }
            if (e > this._duration) {
                e = this._duration
            }
            if (this._yoyo && (this._cycle & 1) !== 0) {
                e = this._duration - e + this._cycle * (this._duration + this._repeatDelay)
            } else if (this._repeat !== 0) {
                e += this._cycle * (this._duration + this._repeatDelay)
            }
            return this.totalTime(e, t)
        };
        o.duration = function(t) {
            if (!arguments.length) {
                return this._duration
            }
            return e.prototype.duration.call(this, t)
        };
        o.totalDuration = function(e) {
            if (!arguments.length) {
                if (this._dirty) {
                    this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat;
                    this._dirty = false
                }
                return this._totalDuration
            }
            return this._repeat === -1 ? this: this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1))
        };
        o.repeat = function(e) {
            if (!arguments.length) {
                return this._repeat
            }
            this._repeat = e;
            return this._uncache(true)
        };
        o.repeatDelay = function(e) {
            if (!arguments.length) {
                return this._repeatDelay
            }
            this._repeatDelay = e;
            return this._uncache(true)
        };
        o.yoyo = function(e) {
            if (!arguments.length) {
                return this._yoyo
            }
            this._yoyo = e;
            return this
        };
        return i
    },
    true);
    window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function(e, t, n) {
        var r = function(e) {
            t.call(this, e);
            this._labels = {};
            this.autoRemoveChildren = this.vars.autoRemoveChildren === true;
            this.smoothChildTiming = this.vars.smoothChildTiming === true;
            this._sortChildren = true;
            this._onUpdate = this.vars.onUpdate;
            var n = this.vars,
            r = i.length,
            s, o;
            while (--r > -1) {
                o = n[i[r]];
                if (o) {
                    s = o.length;
                    while (--s > -1) {
                        if (o[s] === "{self}") {
                            o = n[i[r]] = o.concat();
                            o[s] = this
                        }
                    }
                }
            }
            if (n.tweens instanceof Array) {
                this.add(n.tweens, 0, n.align, n.stagger)
            }
        },
        i = ["onStartParams", "onUpdateParams", "onCompleteParams", "onReverseCompleteParams", "onRepeatParams"],
        s = [],
        o = function(e) {
            var t = {},
            n;
            for (n in e) {
                t[n] = e[n]
            }
            return t
        },
        u = s.slice,
        a = r.prototype = new t;
        r.version = "1.9.7";
        a.constructor = r;
        a.kill()._gc = false;
        a.to = function(e, t, r, i) {
            return t ? this.add(new n(e, t, r), i) : this.set(e, r, i)
        };
        a.from = function(e, t, r, i) {
            return this.add(n.from(e, t, r), i)
        };
        a.fromTo = function(e, t, r, i, s) {
            return t ? this.add(n.fromTo(e, t, r, i), s) : this.set(e, i, s)
        };
        a.staggerTo = function(e, t, i, s, a, f, l, c) {
            var h = new r({
                onComplete: f,
                onCompleteParams: l,
                onCompleteScope: c
            }),
            p;
            if (typeof e === "string") {
                e = n.selector(e) || e
            }
            if (! (e instanceof Array) && e.length && e[0] && e[0].nodeType && e[0].style) {
                e = u.call(e, 0)
            }
            s = s || 0;
            for (p = 0; p < e.length; p++) {
                if (i.startAt) {
                    i.startAt = o(i.startAt)
                }
                h.to(e[p], t, o(i), p * s)
            }
            return this.add(h, a)
        };
        a.staggerFrom = function(e, t, n, r, i, s, o, u) {
            n.immediateRender = n.immediateRender != false;
            n.runBackwards = true;
            return this.staggerTo(e, t, n, r, i, s, o, u)
        };
        a.staggerFromTo = function(e, t, n, r, i, s, o, u, a) {
            r.startAt = n;
            r.immediateRender = r.immediateRender != false && n.immediateRender != false;
            return this.staggerTo(e, t, r, i, s, o, u, a)
        };
        a.call = function(e, t, r, i) {
            return this.add(n.delayedCall(0, e, t, r), i)
        };
        a.set = function(e, t, r) {
            r = this._parseTimeOrLabel(r, 0, true);
            if (t.immediateRender == null) {
                t.immediateRender = r === this._time && !this._paused
            }
            return this.add(new n(e, 0, t), r)
        };
        r.exportRoot = function(e, t) {
            e = e || {};
            if (e.smoothChildTiming == null) {
                e.smoothChildTiming = true
            }
            var i = new r(e),
            s = i._timeline,
            o,
            u;
            if (t == null) {
                t = true
            }
            s._remove(i, true);
            i._startTime = 0;
            i._rawPrevTime = i._time = i._totalTime = s._time;
            o = s._first;
            while (o) {
                u = o._next;
                if (!t || !(o instanceof n && o.target === o.vars.onComplete)) {
                    i.add(o, o._startTime - o._delay)
                }
                o = u
            }
            s.add(i, 0);
            return i
        };
        a.add = function(i, s, o, u) {
            var a, f, l, c, h;
            if (typeof s !== "number") {
                s = this._parseTimeOrLabel(s, 0, true, i)
            }
            if (! (i instanceof e)) {
                if (i instanceof Array) {
                    o = o || "normal";
                    u = u || 0;
                    a = s;
                    f = i.length;
                    for (l = 0; l < f; l++) {
                        if ((c = i[l]) instanceof Array) {
                            c = new r({
                                tweens: c
                            })
                        }
                        this.add(c, a);
                        if (typeof c !== "string" && typeof c !== "function") {
                            if (o === "sequence") {
                                a = c._startTime + c.totalDuration() / c._timeScale
                            } else if (o === "start") {
                                c._startTime -= c.delay()
                            }
                        }
                        a += u
                    }
                    return this._uncache(true)
                } else if (typeof i === "string") {
                    return this.addLabel(i, s)
                } else if (typeof i === "function") {
                    i = n.delayedCall(0, i)
                } else {
                    throw "Cannot add " + i + " into the timeline; it is neither a tween, timeline, function, nor a string."
                }
            }
            t.prototype.add.call(this, i, s);
            if (this._gc) if (!this._paused) if (this._time === this._duration) if (this._time < this.duration()) {
                h = this;
                while (h._gc && h._timeline) {
                    if (h._timeline.smoothChildTiming) {
                        h.totalTime(h._totalTime, true)
                    } else {
                        h._enabled(true, false)
                    }
                    h = h._timeline
                }
            }
            return this
        };
        a.remove = function(t) {
            if (t instanceof e) {
                return this._remove(t, false)
            } else if (t instanceof Array) {
                var n = t.length;
                while (--n > -1) {
                    this.remove(t[n])
                }
                return this
            } else if (typeof t === "string") {
                return this.removeLabel(t)
            }
            return this.kill(null, t)
        };
        a.append = function(e, t) {
            return this.add(e, this._parseTimeOrLabel(null, t, true, e))
        };
        a.insert = a.insertMultiple = function(e, t, n, r) {
            return this.add(e, t || 0, n, r)
        };
        a.appendMultiple = function(e, t, n, r) {
            return this.add(e, this._parseTimeOrLabel(null, t, true, e), n, r)
        };
        a.addLabel = function(e, t) {
            this._labels[e] = this._parseTimeOrLabel(t);
            return this
        };
        a.removeLabel = function(e) {
            delete this._labels[e];
            return this
        };
        a.getLabelTime = function(e) {
            return this._labels[e] != null ? this._labels[e] : -1
        };
        a._parseTimeOrLabel = function(t, n, r, i) {
            var s;
            if (i instanceof e && i.timeline === this) {
                this.remove(i)
            } else if (i instanceof Array) {
                s = i.length;
                while (--s > -1) {
                    if (i[s] instanceof e && i[s].timeline === this) {
                        this.remove(i[s])
                    }
                }
            }
            if (typeof n === "string") {
                return this._parseTimeOrLabel(n, r && typeof t === "number" && this._labels[n] == null ? t - this.duration() : 0, r)
            }
            n = n || 0;
            if (typeof t === "string" && (isNaN(t) || this._labels[t] != null)) {
                s = t.indexOf("=");
                if (s === -1) {
                    if (this._labels[t] == null) {
                        return r ? this._labels[t] = this.duration() + n: n
                    }
                    return this._labels[t] + n
                }
                n = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1));
                t = s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, r) : this.duration()
            } else if (t == null) {
                t = this.duration()
            }
            return Number(t) + n
        };
        a.seek = function(e, t) {
            return this.totalTime(typeof e === "number" ? e: this._parseTimeOrLabel(e), t !== false)
        };
        a.stop = function() {
            return this.paused(true)
        };
        a.gotoAndPlay = function(e, t) {
            return this.play(e, t)
        };
        a.gotoAndStop = function(e, t) {
            return this.pause(e, t)
        };
        a.render = function(e, t, n) {
            if (this._gc) {
                this._enabled(true, false)
            }
            this._active = !this._paused;
            var r = !this._dirty ? this._totalDuration: this.totalDuration(),
            i = this._time,
            o = this._startTime,
            u = this._timeScale,
            a = this._paused,
            f,
            l,
            c,
            h,
            p;
            if (e >= r) {
                this._totalTime = this._time = r;
                if (!this._reversed) if (!this._hasPausedChild()) {
                    l = true;
                    h = "onComplete";
                    if (this._duration === 0) if (e === 0 || this._rawPrevTime < 0) if (this._rawPrevTime !== e && this._first) {
                        p = true;
                        if (this._rawPrevTime > 0) {
                            h = "onReverseComplete"
                        }
                    }
                }
                this._rawPrevTime = e;
                e = r + 1e-6
            } else if (e < 1e-7) {
                this._totalTime = this._time = 0;
                if (i !== 0 || this._duration === 0 && this._rawPrevTime > 0) {
                    h = "onReverseComplete";
                    l = this._reversed
                }
                if (e < 0) {
                    this._active = false;
                    if (this._duration === 0) if (this._rawPrevTime >= 0 && this._first) {
                        p = true
                    }
                } else if (!this._initted) {
                    p = true
                }
                this._rawPrevTime = e;
                e = 0
            } else {
                this._totalTime = this._time = this._rawPrevTime = e
            }
            if ((this._time === i || !this._first) && !n && !p) {
                return
            } else if (!this._initted) {
                this._initted = true
            }
            if (i === 0) if (this.vars.onStart) if (this._time !== 0) if (!t) {
                this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)
            }
            if (this._time >= i) {
                f = this._first;
                while (f) {
                    c = f._next;
                    if (this._paused && !a) {
                        break
                    } else if (f._active || f._startTime <= this._time && !f._paused && !f._gc) {
                        if (!f._reversed) {
                            f.render((e - f._startTime) * f._timeScale, t, n)
                        } else {
                            f.render((!f._dirty ? f._totalDuration: f.totalDuration()) - (e - f._startTime) * f._timeScale, t, n)
                        }
                    }
                    f = c
                }
            } else {
                f = this._last;
                while (f) {
                    c = f._prev;
                    if (this._paused && !a) {
                        break
                    } else if (f._active || f._startTime <= i && !f._paused && !f._gc) {
                        if (!f._reversed) {
                            f.render((e - f._startTime) * f._timeScale, t, n)
                        } else {
                            f.render((!f._dirty ? f._totalDuration: f.totalDuration()) - (e - f._startTime) * f._timeScale, t, n)
                        }
                    }
                    f = c
                }
            }
            if (this._onUpdate) if (!t) {
                this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)
            }
            if (h) if (!this._gc) if (o === this._startTime || u !== this._timeScale) if (this._time === 0 || r >= this.totalDuration()) {
                if (l) {
                    if (this._timeline.autoRemoveChildren) {
                        this._enabled(false, false)
                    }
                    this._active = false
                }
                if (!t && this.vars[h]) {
                    this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || s)
                }
            }
        };
        a._hasPausedChild = function() {
            var e = this._first;
            while (e) {
                if (e._paused || e instanceof r && e._hasPausedChild()) {
                    return true
                }
                e = e._next
            }
            return false
        };
        a.getChildren = function(e, t, r, i) {
            i = i || -9999999999;
            var s = [],
            o = this._first,
            u = 0;
            while (o) {
                if (o._startTime < i) {} else if (o instanceof n) {
                    if (t !== false) {
                        s[u++] = o
                    }
                } else {
                    if (r !== false) {
                        s[u++] = o
                    }
                    if (e !== false) {
                        s = s.concat(o.getChildren(true, t, r));
                        u = s.length
                    }
                }
                o = o._next
            }
            return s
        };
        a.getTweensOf = function(e, t) {
            var r = n.getTweensOf(e),
            i = r.length,
            s = [],
            o = 0;
            while (--i > -1) {
                if (r[i].timeline === this || t && this._contains(r[i])) {
                    s[o++] = r[i]
                }
            }
            return s
        };
        a._contains = function(e) {
            var t = e.timeline;
            while (t) {
                if (t === this) {
                    return true
                }
                t = t.timeline
            }
            return false
        };
        a.shiftChildren = function(e, t, n) {
            n = n || 0;
            var r = this._first,
            i = this._labels,
            s;
            while (r) {
                if (r._startTime >= n) {
                    r._startTime += e
                }
                r = r._next
            }
            if (t) {
                for (s in i) {
                    if (i[s] >= n) {
                        i[s] += e
                    }
                }
            }
            return this._uncache(true)
        };
        a._kill = function(e, t) {
            if (!e && !t) {
                return this._enabled(false, false)
            }
            var n = !t ? this.getChildren(true, true, false) : this.getTweensOf(t),
            r = n.length,
            i = false;
            while (--r > -1) {
                if (n[r]._kill(e, t)) {
                    i = true
                }
            }
            return i
        };
        a.clear = function(e) {
            var t = this.getChildren(false, true, true),
            n = t.length;
            this._time = this._totalTime = 0;
            while (--n > -1) {
                t[n]._enabled(false, false)
            }
            if (e !== false) {
                this._labels = {}
            }
            return this._uncache(true)
        };
        a.invalidate = function() {
            var e = this._first;
            while (e) {
                e.invalidate();
                e = e._next
            }
            return this
        };
        a._enabled = function(e, n) {
            if (e === this._gc) {
                var r = this._first;
                while (r) {
                    r._enabled(e, true);
                    r = r._next
                }
            }
            return t.prototype._enabled.call(this, e, n)
        };
        a.progress = function(e) {
            return ! arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * e, false)
        };
        a.duration = function(e) {
            if (!arguments.length) {
                if (this._dirty) {
                    this.totalDuration()
                }
                return this._duration
            }
            if (this.duration() !== 0 && e !== 0) {
                this.timeScale(this._duration / e)
            }
            return this
        };
        a.totalDuration = function(e) {
            if (!arguments.length) {
                if (this._dirty) {
                    var t = 0,
                    n = this._last,
                    r = 999999999999,
                    i, s;
                    while (n) {
                        i = n._prev;
                        if (n._dirty) {
                            n.totalDuration()
                        }
                        if (n._startTime > r && this._sortChildren && !n._paused) {
                            this.add(n, n._startTime - n._delay)
                        } else {
                            r = n._startTime
                        }
                        if (n._startTime < 0 && !n._paused) {
                            t -= n._startTime;
                            if (this._timeline.smoothChildTiming) {
                                this._startTime += n._startTime / this._timeScale
                            }
                            this.shiftChildren( - n._startTime, false, -9999999999);
                            r = 0
                        }
                        s = n._startTime + n._totalDuration / n._timeScale;
                        if (s > t) {
                            t = s
                        }
                        n = i
                    }
                    this._duration = this._totalDuration = t;
                    this._dirty = false
                }
                return this._totalDuration
            }
            if (this.totalDuration() !== 0) if (e !== 0) {
                this.timeScale(this._totalDuration / e)
            }
            return this
        };
        a.usesFrames = function() {
            var t = this._timeline;
            while (t._timeline) {
                t = t._timeline
            }
            return t === e._rootFramesTimeline
        };
        a.rawTime = function() {
            return this._paused || this._totalTime !== 0 && this._totalTime !== this._totalDuration ? this._totalTime: (this._timeline.rawTime() - this._startTime) * this._timeScale
        };
        return r
    },
    true);
    window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"],
    function(e, t, n) {
        var r = function(t) {
            e.call(this, t);
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._cycle = 0;
            this._yoyo = this.vars.yoyo === true;
            this._dirty = true
        },
        i = [],
        s = new n(null, null, 1, 0),
        o = function(e) {
            while (e) {
                if (e._paused) {
                    return true
                }
                e = e._timeline
            }
            return false
        },
        u = r.prototype = new e;
        u.constructor = r;
        u.kill()._gc = false;
        r.version = "1.9.7";
        u.invalidate = function() {
            this._yoyo = this.vars.yoyo === true;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(true);
            return e.prototype.invalidate.call(this)
        };
        u.addCallback = function(e, n, r, i) {
            return this.add(t.delayedCall(0, e, r, i), n)
        };
        u.removeCallback = function(e, t) {
            if (t == null) {
                this._kill(null, e)
            } else {
                var n = this.getTweensOf(e, false),
                r = n.length,
                i = this._parseTimeOrLabel(t);
                while (--r > -1) {
                    if (n[r]._startTime === i) {
                        n[r]._enabled(false, false)
                    }
                }
            }
            return this
        };
        u.tweenTo = function(e, n) {
            n = n || {};
            var r = {
                ease: s,
                overwrite: 2,
                useFrames: this.usesFrames(),
                immediateRender: false
            },
            o,
            u;
            for (o in n) {
                r[o] = n[o]
            }
            r.time = this._parseTimeOrLabel(e);
            u = new t(this, Math.abs(Number(r.time) - this._time) / this._timeScale || .001, r);
            r.onStart = function() {
                u.target.paused(true);
                if (u.vars.time !== u.target.time()) {
                    u.duration(Math.abs(u.vars.time - u.target.time()) / u.target._timeScale)
                }
                if (n.onStart) {
                    n.onStart.apply(n.onStartScope || u, n.onStartParams || i)
                }
            };
            return u
        };
        u.tweenFromTo = function(e, t, n) {
            n = n || {};
            e = this._parseTimeOrLabel(e);
            n.startAt = {
                onComplete: this.seek,
                onCompleteParams: [e],
                onCompleteScope: this
            };
            n.immediateRender = n.immediateRender !== false;
            var r = this.tweenTo(t, n);
            return r.duration(Math.abs(r.vars.time - e) / this._timeScale || .001)
        };
        u.render = function(e, t, n) {
            if (this._gc) {
                this._enabled(true, false)
            }
            this._active = !this._paused;
            var r = !this._dirty ? this._totalDuration: this.totalDuration(),
            s = this._duration,
            o = this._time,
            u = this._totalTime,
            a = this._startTime,
            f = this._timeScale,
            l = this._rawPrevTime,
            c = this._paused,
            h = this._cycle,
            p,
            d,
            v,
            m,
            g,
            y;
            if (e >= r) {
                if (!this._locked) {
                    this._totalTime = r;
                    this._cycle = this._repeat
                }
                if (!this._reversed) if (!this._hasPausedChild()) {
                    d = true;
                    m = "onComplete";
                    if (s === 0) if (e === 0 || this._rawPrevTime < 0) if (this._rawPrevTime !== e && this._first) {
                        g = true;
                        if (this._rawPrevTime > 0) {
                            m = "onReverseComplete"
                        }
                    }
                }
                this._rawPrevTime = e;
                if (this._yoyo && (this._cycle & 1) !== 0) {
                    this._time = e = 0
                } else {
                    this._time = s;
                    e = s + 1e-6
                }
            } else if (e < 1e-7) {
                if (!this._locked) {
                    this._totalTime = this._cycle = 0
                }
                this._time = 0;
                if (o !== 0 || s === 0 && this._rawPrevTime > 0 && !this._locked) {
                    m = "onReverseComplete";
                    d = this._reversed
                }
                if (e < 0) {
                    this._active = false;
                    if (s === 0) if (this._rawPrevTime >= 0 && this._first) {
                        g = true
                    }
                } else if (!this._initted) {
                    g = true
                }
                this._rawPrevTime = e;
                e = 0
            } else {
                this._time = this._rawPrevTime = e;
                if (!this._locked) {
                    this._totalTime = e;
                    if (this._repeat !== 0) {
                        y = s + this._repeatDelay;
                        this._cycle = this._totalTime / y >> 0;
                        if (this._cycle !== 0) if (this._cycle === this._totalTime / y) {
                            this._cycle--
                        }
                        this._time = this._totalTime - this._cycle * y;
                        if (this._yoyo) if ((this._cycle & 1) !== 0) {
                            this._time = s - this._time
                        }
                        if (this._time > s) {
                            this._time = s;
                            e = s + 1e-6
                        } else if (this._time < 0) {
                            this._time = e = 0
                        } else {
                            e = this._time
                        }
                    }
                }
            }
            if (this._cycle !== h) if (!this._locked) {
                var b = this._yoyo && (h & 1) !== 0,
                w = b === (this._yoyo && (this._cycle & 1) !== 0),
                E = this._totalTime,
                S = this._cycle,
                x = this._rawPrevTime,
                T = this._time;
                this._totalTime = h * s;
                if (this._cycle < h) {
                    b = !b
                } else {
                    this._totalTime += s
                }
                this._time = o;
                this._rawPrevTime = s === 0 ? l - 1e-5: l;
                this._cycle = h;
                this._locked = true;
                o = b ? 0 : s;
                this.render(o, t, s === 0);
                if (!t) if (!this._gc) {
                    if (this.vars.onRepeat) {
                        this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || i)
                    }
                }
                if (w) {
                    o = b ? s + 1e-6: -1e-6;
                    this.render(o, true, false)
                }
                this._time = T;
                this._totalTime = E;
                this._cycle = S;
                this._rawPrevTime = x;
                this._locked = false
            }
            if ((this._time === o || !this._first) && !n && !g) {
                if (u !== this._totalTime) if (this._onUpdate) if (!t) {
                    this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || i)
                }
                return
            } else if (!this._initted) {
                this._initted = true
            }
            if (u === 0) if (this.vars.onStart) if (this._totalTime !== 0) if (!t) {
                this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || i)
            }
            if (this._time >= o) {
                p = this._first;
                while (p) {
                    v = p._next;
                    if (this._paused && !c) {
                        break
                    } else if (p._active || p._startTime <= this._time && !p._paused && !p._gc) {
                        if (!p._reversed) {
                            p.render((e - p._startTime) * p._timeScale, t, n)
                        } else {
                            p.render((!p._dirty ? p._totalDuration: p.totalDuration()) - (e - p._startTime) * p._timeScale, t, n)
                        }
                    }
                    p = v
                }
            } else {
                p = this._last;
                while (p) {
                    v = p._prev;
                    if (this._paused && !c) {
                        break
                    } else if (p._active || p._startTime <= o && !p._paused && !p._gc) {
                        if (!p._reversed) {
                            p.render((e - p._startTime) * p._timeScale, t, n)
                        } else {
                            p.render((!p._dirty ? p._totalDuration: p.totalDuration()) - (e - p._startTime) * p._timeScale, t, n)
                        }
                    }
                    p = v
                }
            }
            if (this._onUpdate) if (!t) {
                this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || i)
            }
            if (m) if (!this._locked) if (!this._gc) if (a === this._startTime || f !== this._timeScale) if (this._time === 0 || r >= this.totalDuration()) {
                if (d) {
                    if (this._timeline.autoRemoveChildren) {
                        this._enabled(false, false)
                    }
                    this._active = false
                }
                if (!t && this.vars[m]) {
                    this.vars[m].apply(this.vars[m + "Scope"] || this, this.vars[m + "Params"] || i)
                }
            }
        };
        u.getActive = function(e, t, n) {
            if (e == null) {
                e = true
            }
            if (t == null) {
                t = true
            }
            if (n == null) {
                n = false
            }
            var r = [],
            i = this.getChildren(e, t, n),
            s = 0,
            u = i.length,
            a,
            f;
            for (a = 0; a < u; a++) {
                f = i[a];
                if (!f._paused) if (f._timeline._time >= f._startTime) if (f._timeline._time < f._startTime + f._totalDuration / f._timeScale) if (!o(f._timeline)) {
                    r[s++] = f
                }
            }
            return r
        };
        u.getLabelAfter = function(e) {
            if (!e) if (e !== 0) {
                e = this._time
            }
            var t = this.getLabelsArray(),
            n = t.length,
            r;
            for (r = 0; r < n; r++) {
                if (t[r].time > e) {
                    return t[r].name
                }
            }
            return null
        };
        u.getLabelBefore = function(e) {
            if (e == null) {
                e = this._time
            }
            var t = this.getLabelsArray(),
            n = t.length;
            while (--n > -1) {
                if (t[n].time < e) {
                    return t[n].name
                }
            }
            return null
        };
        u.getLabelsArray = function() {
            var e = [],
            t = 0,
            n;
            for (n in this._labels) {
                e[t++] = {
                    time: this._labels[n],
                    name: n
                }
            }
            e.sort(function(e, t) {
                return e.time - t.time
            });
            return e
        };
        u.progress = function(e) {
            return ! arguments.length ? this._time / this.duration() : this.totalTime(this.duration() * (this._yoyo && (this._cycle & 1) !== 0 ? 1 - e: e) + this._cycle * (this._duration + this._repeatDelay), false)
        };
        u.totalProgress = function(e) {
            return ! arguments.length ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * e, false)
        };
        u.totalDuration = function(t) {
            if (!arguments.length) {
                if (this._dirty) {
                    e.prototype.totalDuration.call(this);
                    this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat
                }
                return this._totalDuration
            }
            return this._repeat === -1 ? this: this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1))
        };
        u.time = function(e, t) {
            if (!arguments.length) {
                return this._time
            }
            if (this._dirty) {
                this.totalDuration()
            }
            if (e > this._duration) {
                e = this._duration
            }
            if (this._yoyo && (this._cycle & 1) !== 0) {
                e = this._duration - e + this._cycle * (this._duration + this._repeatDelay)
            } else if (this._repeat !== 0) {
                e += this._cycle * (this._duration + this._repeatDelay)
            }
            return this.totalTime(e, t)
        };
        u.repeat = function(e) {
            if (!arguments.length) {
                return this._repeat
            }
            this._repeat = e;
            return this._uncache(true)
        };
        u.repeatDelay = function(e) {
            if (!arguments.length) {
                return this._repeatDelay
            }
            this._repeatDelay = e;
            return this._uncache(true)
        };
        u.yoyo = function(e) {
            if (!arguments.length) {
                return this._yoyo
            }
            this._yoyo = e;
            return this
        };
        u.currentLabel = function(e) {
            if (!arguments.length) {
                return this.getLabelBefore(this._time + 1e-8)
            }
            return this.seek(e, true)
        };
        return r
    },
    true); (function() {
        var e = 180 / Math.PI,
        t = Math.PI / 180,
        n = [],
        r = [],
        i = [],
        s = {},
        o = function(e, t, n, r) {
            this.a = e;
            this.b = t;
            this.c = n;
            this.d = r;
            this.da = r - e;
            this.ca = n - e;
            this.ba = t - e
        },
        u = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        a = function(e, t, n, r) {
            var i = {
                a: e
            },
            s = {},
            o = {},
            u = {
                c: r
            },
            a = (e + t) / 2,
            f = (t + n) / 2,
            l = (n + r) / 2,
            c = (a + f) / 2,
            h = (f + l) / 2,
            p = (h - c) / 8;
            i.b = a + (e - a) / 4;
            s.b = c + p;
            i.c = s.a = (i.b + s.b) / 2;
            s.c = o.a = (c + h) / 2;
            o.b = h - p;
            u.b = l + (r - l) / 4;
            o.c = u.a = (o.b + u.b) / 2;
            return [i, s, o, u]
        },
        f = function(e, t, s, o, u) {
            var f = e.length - 1,
            l = 0,
            c = e[0].a,
            h,
            p,
            d,
            v,
            m,
            g,
            y,
            b,
            w,
            E,
            S,
            x,
            T;
            for (h = 0; h < f; h++) {
                m = e[l];
                p = m.a;
                d = m.d;
                v = e[l + 1].d;
                if (u) {
                    S = n[h];
                    x = r[h];
                    T = (x + S) * t * .25 / (o ? .5 : i[h] || .5);
                    g = d - (d - p) * (o ? t * .5 : S !== 0 ? T / S: 0);
                    y = d + (v - d) * (o ? t * .5 : x !== 0 ? T / x: 0);
                    b = d - (g + ((y - g) * (S * 3 / (S + x) + .5) / 4 || 0))
                } else {
                    g = d - (d - p) * t * .5;
                    y = d + (v - d) * t * .5;
                    b = d - (g + y) / 2
                }
                g += b;
                y += b;
                m.c = w = g;
                if (h !== 0) {
                    m.b = c
                } else {
                    m.b = c = m.a + (m.c - m.a) * .6
                }
                m.da = d - p;
                m.ca = w - p;
                m.ba = c - p;
                if (s) {
                    E = a(p, c, w, d);
                    e.splice(l, 1, E[0], E[1], E[2], E[3]);
                    l += 4
                } else {
                    l++
                }
                c = y
            }
            m = e[l];
            m.b = c;
            m.c = c + (m.d - c) * .4;
            m.da = m.d - m.a;
            m.ca = m.c - m.a;
            m.ba = c - m.a;
            if (s) {
                E = a(m.a, c, m.c, m.d);
                e.splice(l, 1, E[0], E[1], E[2], E[3])
            }
        },
        l = function(e, t, i, s) {
            var u = [],
            a,
            f,
            l,
            c,
            h,
            p;
            if (s) {
                e = [s].concat(e);
                f = e.length;
                while (--f > -1) {
                    if (typeof(p = e[f][t]) === "string") if (p.charAt(1) === "=") {
                        e[f][t] = s[t] + Number(p.charAt(0) + p.substr(2))
                    }
                }
            }
            a = e.length - 2;
            if (a < 0) {
                u[0] = new o(e[0][t], 0, 0, e[a < -1 ? 0 : 1][t]);
                return u
            }
            for (f = 0; f < a; f++) {
                l = e[f][t];
                c = e[f + 1][t];
                u[f] = new o(l, 0, 0, c);
                if (i) {
                    h = e[f + 2][t];
                    n[f] = (n[f] || 0) + (c - l) * (c - l);
                    r[f] = (r[f] || 0) + (h - c) * (h - c)
                }
            }
            u[f] = new o(e[f][t], 0, 0, e[f + 1][t]);
            return u
        },
        c = function(e, t, o, a, c, h) {
            var p = {},
            d = [],
            v = h || e[0],
            m,
            g,
            y,
            b,
            w,
            E,
            S,
            x;
            c = typeof c === "string" ? "," + c + ",": u;
            if (t == null) {
                t = 1
            }
            for (g in e[0]) {
                d.push(g)
            }
            if (e.length > 1) {
                x = e[e.length - 1];
                S = true;
                m = d.length;
                while (--m > -1) {
                    g = d[m];
                    if (Math.abs(v[g] - x[g]) > .05) {
                        S = false;
                        break
                    }
                }
                if (S) {
                    e = e.concat();
                    if (h) {
                        e.unshift(h)
                    }
                    e.push(e[1]);
                    h = e[e.length - 3]
                }
            }
            n.length = r.length = i.length = 0;
            m = d.length;
            while (--m > -1) {
                g = d[m];
                s[g] = c.indexOf("," + g + ",") !== -1;
                p[g] = l(e, g, s[g], h)
            }
            m = n.length;
            while (--m > -1) {
                n[m] = Math.sqrt(n[m]);
                r[m] = Math.sqrt(r[m])
            }
            if (!a) {
                m = d.length;
                while (--m > -1) {
                    if (s[g]) {
                        y = p[d[m]];
                        E = y.length - 1;
                        for (b = 0; b < E; b++) {
                            w = y[b + 1].da / r[b] + y[b].da / n[b];
                            i[b] = (i[b] || 0) + w * w
                        }
                    }
                }
                m = i.length;
                while (--m > -1) {
                    i[m] = Math.sqrt(i[m])
                }
            }
            m = d.length;
            b = o ? 4 : 1;
            while (--m > -1) {
                g = d[m];
                y = p[g];
                f(y, t, o, a, s[g]);
                if (S) {
                    y.splice(0, b);
                    y.splice(y.length - b, b)
                }
            }
            return p
        },
        h = function(e, t, n) {
            t = t || "soft";
            var r = {},
            i = t === "cubic" ? 3 : 2,
            s = t === "soft",
            u = [],
            a,
            f,
            l,
            c,
            h,
            p,
            d,
            v,
            m,
            g,
            y;
            if (s && n) {
                e = [n].concat(e)
            }
            if (e == null || e.length < i + 1) {
                throw "invalid Bezier data"
            }
            for (m in e[0]) {
                u.push(m)
            }
            p = u.length;
            while (--p > -1) {
                m = u[p];
                r[m] = h = [];
                g = 0;
                v = e.length;
                for (d = 0; d < v; d++) {
                    a = n == null ? e[d][m] : typeof(y = e[d][m]) === "string" && y.charAt(1) === "=" ? n[m] + Number(y.charAt(0) + y.substr(2)) : Number(y);
                    if (s) if (d > 1) if (d < v - 1) {
                        h[g++] = (a + h[g - 2]) / 2
                    }
                    h[g++] = a
                }
                v = g - i + 1;
                g = 0;
                for (d = 0; d < v; d += i) {
                    a = h[d];
                    f = h[d + 1];
                    l = h[d + 2];
                    c = i === 2 ? 0 : h[d + 3];
                    h[g++] = y = i === 3 ? new o(a, f, l, c) : new o(a, (2 * f + a) / 3, (2 * f + l) / 3, l)
                }
                h.length = g
            }
            return r
        },
        p = function(e, t, n) {
            var r = 1 / n,
            i = e.length,
            s, o, u, a, f, l, c, h, p, d, v;
            while (--i > -1) {
                d = e[i];
                u = d.a;
                a = d.d - u;
                f = d.c - u;
                l = d.b - u;
                s = o = 0;
                for (h = 1; h <= n; h++) {
                    c = r * h;
                    p = 1 - c;
                    s = o - (o = (c * c * a + 3 * p * (c * f + p * l)) * c);
                    v = i * n + h - 1;
                    t[v] = (t[v] || 0) + s * s
                }
            }
        },
        d = function(e, t) {
            t = t >> 0 || 6;
            var n = [],
            r = [],
            i = 0,
            s = 0,
            o = t - 1,
            u = [],
            a = [],
            f,
            l,
            c,
            h;
            for (f in e) {
                p(e[f], n, t)
            }
            c = n.length;
            for (l = 0; l < c; l++) {
                i += Math.sqrt(n[l]);
                h = l % t;
                a[h] = i;
                if (h === o) {
                    s += i;
                    h = l / t >> 0;
                    u[h] = a;
                    r[h] = s;
                    i = 0;
                    a = []
                }
            }
            return {
                length: s,
                lengths: r,
                segments: u
            }
        },
        v = window._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            API: 2,
            global: true,
            init: function(e, t, n) {
                this._target = e;
                if (t instanceof Array) {
                    t = {
                        values: t
                    }
                }
                this._func = {};
                this._round = {};
                this._props = [];
                this._timeRes = t.timeResolution == null ? 6 : parseInt(t.timeResolution, 10);
                var r = t.values || [],
                i = {},
                s = r[0],
                o = t.autoRotate || n.vars.orientToBezier,
                u,
                a,
                f,
                l,
                p;
                this._autoRotate = o ? o instanceof Array ? o: [["x", "y", "rotation", o === true ? 0 : Number(o) || 0]] : null;
                for (u in s) {
                    this._props.push(u)
                }
                f = this._props.length;
                while (--f > -1) {
                    u = this._props[f];
                    this._overwriteProps.push(u);
                    a = this._func[u] = typeof e[u] === "function";
                    i[u] = !a ? parseFloat(e[u]) : e[u.indexOf("set") || typeof e["get" + u.substr(3)] !== "function" ? u: "get" + u.substr(3)]();
                    if (!p) if (i[u] !== r[0][u]) {
                        p = i
                    }
                }
                this._beziers = t.type !== "cubic" && t.type !== "quadratic" && t.type !== "soft" ? c(r, isNaN(t.curviness) ? 1 : t.curviness, false, t.type === "thruBasic", t.correlate, p) : h(r, t.type, i);
                this._segCount = this._beziers[u].length;
                if (this._timeRes) {
                    var v = d(this._beziers, this._timeRes);
                    this._length = v.length;
                    this._lengths = v.lengths;
                    this._segments = v.segments;
                    this._l1 = this._li = this._s1 = this._si = 0;
                    this._l2 = this._lengths[0];
                    this._curSeg = this._segments[0];
                    this._s2 = this._curSeg[0];
                    this._prec = 1 / this._curSeg.length
                }
                if (o = this._autoRotate) {
                    if (! (o[0] instanceof Array)) {
                        this._autoRotate = o = [o]
                    }
                    f = o.length;
                    while (--f > -1) {
                        for (l = 0; l < 3; l++) {
                            u = o[f][l];
                            this._func[u] = typeof e[u] === "function" ? e[u.indexOf("set") || typeof e["get" + u.substr(3)] !== "function" ? u: "get" + u.substr(3)] : false
                        }
                    }
                }
                return true
            },
            set: function(t) {
                var n = this._segCount,
                r = this._func,
                i = this._target,
                s, o, u, a, f, l, c, h, p, d;
                if (!this._timeRes) {
                    s = t < 0 ? 0 : t >= 1 ? n - 1 : n * t >> 0;
                    l = (t - s * (1 / n)) * n
                } else {
                    p = this._lengths;
                    d = this._curSeg;
                    t *= this._length;
                    u = this._li;
                    if (t > this._l2 && u < n - 1) {
                        h = n - 1;
                        while (u < h && (this._l2 = p[++u]) <= t) {}
                        this._l1 = p[u - 1];
                        this._li = u;
                        this._curSeg = d = this._segments[u];
                        this._s2 = d[this._s1 = this._si = 0]
                    } else if (t < this._l1 && u > 0) {
                        while (u > 0 && (this._l1 = p[--u]) >= t) {}
                        if (u === 0 && t < this._l1) {
                            this._l1 = 0
                        } else {
                            u++
                        }
                        this._l2 = p[u];
                        this._li = u;
                        this._curSeg = d = this._segments[u];
                        this._s1 = d[(this._si = d.length - 1) - 1] || 0;
                        this._s2 = d[this._si]
                    }
                    s = u;
                    t -= this._l1;
                    u = this._si;
                    if (t > this._s2 && u < d.length - 1) {
                        h = d.length - 1;
                        while (u < h && (this._s2 = d[++u]) <= t) {}
                        this._s1 = d[u - 1];
                        this._si = u
                    } else if (t < this._s1 && u > 0) {
                        while (u > 0 && (this._s1 = d[--u]) >= t) {}
                        if (u === 0 && t < this._s1) {
                            this._s1 = 0
                        } else {
                            u++
                        }
                        this._s2 = d[u];
                        this._si = u
                    }
                    l = (u + (t - this._s1) / (this._s2 - this._s1)) * this._prec
                }
                o = 1 - l;
                u = this._props.length;
                while (--u > -1) {
                    a = this._props[u];
                    f = this._beziers[a][s];
                    c = (l * l * f.da + 3 * o * (l * f.ca + o * f.ba)) * l + f.a;
                    if (this._round[a]) {
                        c = c + (c > 0 ? .5 : -.5) >> 0
                    }
                    if (r[a]) {
                        i[a](c)
                    } else {
                        if (a == "x") {
                            i.setX(c)
                        } else if (a == "y") {
                            i.setY(c)
                        } else if (a == "z") {
                            i.setZ(c)
                        } else if (a == "angleX") {
                            i.setAngleX(c)
                        } else if (a == "angleY") {
                            i.setAngleY(c)
                        } else if (a == "angleZ") {
                            i.setAngleZ(c)
                        } else if (a == "w") {
                            i.setWidth(c)
                        } else if (a == "h") {
                            i.setHeight(c)
                        } else if (a == "alpha") {
                            i.setAlpha(c)
                        } else if (a == "scale") {
                            i.setScale2(c)
                        } else {
                            i[a] = c
                        }
                    }
                }
                if (this._autoRotate) {
                    var v = this._autoRotate,
                    m, g, y, b, w, E, S;
                    u = v.length;
                    while (--u > -1) {
                        a = v[u][2];
                        E = v[u][3] || 0;
                        S = v[u][4] === true ? 1 : e;
                        f = this._beziers[v[u][0]];
                        m = this._beziers[v[u][1]];
                        if (f && m) {
                            f = f[s];
                            m = m[s];
                            g = f.a + (f.b - f.a) * l;
                            b = f.b + (f.c - f.b) * l;
                            g += (b - g) * l;
                            b += (f.c + (f.d - f.c) * l - b) * l;
                            y = m.a + (m.b - m.a) * l;
                            w = m.b + (m.c - m.b) * l;
                            y += (w - y) * l;
                            w += (m.c + (m.d - m.c) * l - w) * l;
                            c = Math.atan2(w - y, b - g) * S + E;
                            if (r[a]) {
                                i[a](c)
                            } else {
                                i[a] = c
                            }
                        }
                    }
                }
            }
        }),
        m = v.prototype;
        v.bezierThrough = c;
        v.cubicToQuadratic = a;
        v._autoCSS = true;
        v.quadraticToCubic = function(e, t, n) {
            return new o(e, (2 * t + e) / 3, (2 * t + n) / 3, n)
        };
        v._cssRegister = function() {
            var e = window._gsDefine.globals.CSSPlugin;
            if (!e) {
                return
            }
            var n = e._internals,
            r = n._parseToProxy,
            i = n._setPluginRatio,
            s = n.CSSPropTween;
            n._registerComplexSpecialProp("bezier", {
                parser: function(e, n, o, u, a, f) {
                    if (n instanceof Array) {
                        n = {
                            values: n
                        }
                    }
                    f = new v;
                    var l = n.values,
                    c = l.length - 1,
                    h = [],
                    p = {},
                    d,
                    m,
                    g;
                    if (c < 0) {
                        return a
                    }
                    for (d = 0; d <= c; d++) {
                        g = r(e, l[d], u, a, f, c !== d);
                        h[d] = g.end
                    }
                    for (m in n) {
                        p[m] = n[m]
                    }
                    p.values = h;
                    a = new s(e, "bezier", 0, 0, g.pt, 2);
                    a.data = g;
                    a.plugin = f;
                    a.setRatio = i;
                    if (p.autoRotate === 0) {
                        p.autoRotate = true
                    }
                    if (p.autoRotate && !(p.autoRotate instanceof Array)) {
                        d = p.autoRotate === true ? 0 : Number(p.autoRotate) * t;
                        p.autoRotate = g.end.left != null ? [["left", "top", "rotation", d, true]] : g.end.x != null ? [["x", "y", "rotation", d, true]] : false
                    }
                    if (p.autoRotate) {
                        if (!u._transform) {
                            u._enableTransforms(false)
                        }
                        g.autoRotate = u._target._gsTransform
                    }
                    f._onInitTween(g.proxy, p, u._tween);
                    return a
                }
            })
        };
        m._roundProps = function(e, t) {
            var n = this._overwriteProps,
            r = n.length;
            while (--r > -1) {
                if (e[n[r]] || e.bezier || e.bezierThrough) {
                    this._round[n[r]] = t
                }
            }
        };
        m._kill = function(e) {
            var t = this._props,
            n, r;
            for (n in this._beziers) {
                if (n in e) {
                    delete this._beziers[n];
                    delete this._func[n];
                    r = t.length;
                    while (--r > -1) {
                        if (t[r] === n) {
                            t.splice(r, 1)
                        }
                    }
                }
            }
            return this._super._kill.call(this, e)
        }
    })();
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"],
    function(e, t) {
        var n = function() {
            e.call(this, "css");
            this._overwriteProps.length = 0
        },
        r,
        i,
        s,
        o,
        u = {},
        a = n.prototype = new e("css");
        a.constructor = n;
        n.version = "1.9.7";
        n.API = 2;
        n.defaultTransformPerspective = 0;
        a = "px";
        n.suffixMap = {
            top: a,
            right: a,
            bottom: a,
            left: a,
            width: a,
            height: a,
            fontSize: a,
            padding: a,
            margin: a,
            perspective: a
        };
        var f = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
        l = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        c = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        h = /[^\d\-\.]/g,
        p = /(?:\d|\-|\+|=|#|\.)*/g,
        d = /opacity *= *([^)]*)/,
        v = /opacity:([^;]*)/,
        m = /alpha\(opacity *=.+?\)/i,
        g = /^(rgb|hsl)/,
        y = /([A-Z])/g,
        b = /-([a-z])/gi,
        w = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        E = function(e, t) {
            return t.toUpperCase()
        },
        S = /(?:Left|Right|Width)/i,
        x = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        T = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        N = /,(?=[^\)]*(?:\(|$))/gi,
        C = Math.PI / 180,
        k = 180 / Math.PI,
        L = {},
        A = document,
        O = A.createElement("div"),
        M = A.createElement("img"),
        _ = n._internals = {
            _specialProps: u
        },
        D = navigator.userAgent,
        P,
        H,
        B,
        j,
        F,
        I,
        q = function() {
            var e = D.indexOf("Android"),
            t = A.createElement("div"),
            n;
            B = D.indexOf("Safari") !== -1 && D.indexOf("Chrome") === -1 && (e === -1 || Number(D.substr(e + 8, 1)) > 3);
            F = B && Number(D.substr(D.indexOf("Version/") + 8, 1)) < 6;
            j = D.indexOf("Firefox") !== -1;
            /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(D);
            I = parseFloat(RegExp.$1);
            t.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>";
            n = t.getElementsByTagName("a")[0];
            return n ? /^0.55/.test(n.style.opacity) : false
        } (),
        R = function(e) {
            return d.test(typeof e === "string" ? e: (e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        },
        U = function(e) {
            if (window.console) {
                console.log(e)
            }
        },
        z = "",
        W = "",
        X = function(e, t) {
            t = t || O;
            var n = t.style,
            r, i;
            if (n[e] !== undefined) {
                return e
            }
            e = e.charAt(0).toUpperCase() + e.substr(1);
            r = ["O", "Moz", "ms", "Ms", "Webkit"];
            i = 5;
            while (--i > -1 && n[r[i] + e] === undefined) {}
            if (i >= 0) {
                W = i === 3 ? "ms": r[i];
                z = "-" + W.toLowerCase() + "-";
                return W + e
            }
            return null
        },
        V = A.defaultView ? A.defaultView.getComputedStyle: function() {},
        $ = n.getStyle = function(e, t, n, r, i) {
            var s;
            if (!q) if (t === "opacity") {
                return R(e)
            }
            if (!r && e.style[t]) {
                s = e.style[t]
            } else if (n = n || V(e, null)) {
                e = n.getPropertyValue(t.replace(y, "-$1").toLowerCase());
                s = e || n.length ? e: n[t]
            } else if (e.currentStyle) {
                n = e.currentStyle;
                s = n[t]
            }
            return i != null && (!s || s === "none" || s === "auto" || s === "auto auto") ? i: s
        },
        J = function(e, t, n, r, i) {
            if (r === "px" || !r) {
                return n
            }
            if (r === "auto" || !n) {
                return 0
            }
            var s = S.test(t),
            o = e,
            u = O.style,
            a = n < 0,
            f;
            if (a) {
                n = -n
            }
            if (r === "%" && t.indexOf("border") !== -1) {
                f = n / 100 * (s ? e.clientWidth: e.clientHeight)
            } else {
                u.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;";
                if (r === "%" || !o.appendChild) {
                    o = e.parentNode || A.body;
                    u[s ? "width": "height"] = n + r
                } else {
                    u[s ? "borderLeftWidth": "borderTopWidth"] = n + r
                }
                o.appendChild(O);
                f = parseFloat(O[s ? "offsetWidth": "offsetHeight"]);
                o.removeChild(O);
                if (f === 0 && !i) {
                    f = J(e, t, n, r, true)
                }
            }
            return a ? -f: f
        },
        K = function(e, t, n) {
            if ($(e, "position", n) !== "absolute") {
                return 0
            }
            var r = t === "left" ? "Left": "Top",
            i = $(e, "margin" + r, n);
            return e["offset" + r] - (J(e, t, parseFloat(i), i.replace(p, "")) || 0)
        },
        Q = function(e, t) {
            var n = {},
            r, i;
            if (t = t || V(e, null)) {
                if (r = t.length) {
                    while (--r > -1) {
                        n[t[r].replace(b, E)] = t.getPropertyValue(t[r])
                    }
                } else {
                    for (r in t) {
                        n[r] = t[r]
                    }
                }
            } else if (t = e.currentStyle || e.style) {
                for (r in t) {
                    n[r.replace(b, E)] = t[r]
                }
            }
            if (!q) {
                n.opacity = R(e)
            }
            i = Nt(e, t, false);
            n.rotation = i.rotation * k;
            n.skewX = i.skewX * k;
            n.scaleX = i.scaleX;
            n.scaleY = i.scaleY;
            n.x = i.x;
            n.y = i.y;
            if (Tt) {
                n.z = i.z;
                n.rotationX = i.rotationX * k;
                n.rotationY = i.rotationY * k;
                n.scaleZ = i.scaleZ
            }
            if (n.filters) {
                delete n.filters
            }
            return n
        },
        G = function(e, t, n, r, i) {
            var s = {},
            o = e.style,
            u, a, f;
            for (a in n) {
                if (a !== "cssText") if (a !== "length") if (isNaN(a)) if (t[a] !== (u = n[a]) || i && i[a]) if (a.indexOf("Origin") === -1) if (typeof u === "number" || typeof u === "string") {
                    s[a] = u === "auto" && (a === "left" || a === "top") ? K(e, a) : (u === "" || u === "auto" || u === "none") && typeof t[a] === "string" && t[a].replace(h, "") !== "" ? 0 : u;
                    if (o[a] !== undefined) {
                        f = new ht(o, a, o[a], f)
                    }
                }
            }
            if (r) {
                for (a in r) {
                    if (a !== "className") {
                        s[a] = r[a]
                    }
                }
            }
            return {
                difs: s,
                firstMPT: f
            }
        },
        Y = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        },
        Z = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        et = function(e, t, n) {
            var r = parseFloat(t === "width" ? e.offsetWidth: e.offsetHeight),
            i = Y[t],
            s = i.length;
            n = n || V(e, null);
            while (--s > -1) {
                r -= parseFloat($(e, "padding" + i[s], n, true)) || 0;
                r -= parseFloat($(e, "border" + i[s] + "Width", n, true)) || 0
            }
            return r
        },
        tt = function(e, t) {
            if (e == null || e === "" || e === "auto" || e === "auto auto") {
                e = "0 0"
            }
            var n = e.split(" "),
            r = e.indexOf("left") !== -1 ? "0%": e.indexOf("right") !== -1 ? "100%": n[0],
            i = e.indexOf("top") !== -1 ? "0%": e.indexOf("bottom") !== -1 ? "100%": n[1];
            if (i == null) {
                i = "0"
            } else if (i === "center") {
                i = "50%"
            }
            if (r === "center" || isNaN(parseFloat(r))) {
                r = "50%"
            }
            if (t) {
                t.oxp = r.indexOf("%") !== -1;
                t.oyp = i.indexOf("%") !== -1;
                t.oxr = r.charAt(1) === "=";
                t.oyr = i.charAt(1) === "=";
                t.ox = parseFloat(r.replace(h, ""));
                t.oy = parseFloat(i.replace(h, ""))
            }
            return r + " " + i + (n.length > 2 ? " " + n[2] : "")
        },
        nt = function(e, t) {
            return typeof e === "string" && e.charAt(1) === "=" ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
        },
        rt = function(e, t) {
            return e == null ? t: typeof e === "string" && e.charAt(1) === "=" ? parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) + t: parseFloat(e)
        },
        it = function(e, t, n, r) {
            var i = 1e-6,
            s, o, u, a;
            if (e == null) {
                a = t
            } else if (typeof e === "number") {
                a = e * C
            } else {
                s = Math.PI * 2;
                o = e.split("_");
                u = Number(o[0].replace(h, "")) * (e.indexOf("rad") === -1 ? C: 1) - (e.charAt(1) === "=" ? 0 : t);
                if (o.length) {
                    if (r) {
                        r[n] = t + u
                    }
                    if (e.indexOf("short") !== -1) {
                        u = u % s;
                        if (u !== u % (s / 2)) {
                            u = u < 0 ? u + s: u - s
                        }
                    }
                    if (e.indexOf("_cw") !== -1 && u < 0) {
                        u = (u + s * 9999999999) % s - (u / s | 0) * s
                    } else if (e.indexOf("ccw") !== -1 && u > 0) {
                        u = (u - s * 9999999999) % s - (u / s | 0) * s
                    }
                }
                a = t + u
            }
            if (a < i && a > -i) {
                a = 0
            }
            return a
        },
        st = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        ot = function(e, t, n) {
            e = e < 0 ? e + 1 : e > 1 ? e - 1 : e;
            return (e * 6 < 1 ? t + (n - t) * e * 6 : e < .5 ? n: e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * 255 + .5 | 0
        },
        ut = function(e) {
            var t, n, r, i, s, o;
            if (!e || e === "") {
                return st.black
            }
            if (typeof e === "number") {
                return [e >> 16, e >> 8 & 255, e & 255]
            }
            if (e.charAt(e.length - 1) === ",") {
                e = e.substr(0, e.length - 1)
            }
            if (st[e]) {
                return st[e]
            }
            if (e.charAt(0) === "#") {
                if (e.length === 4) {
                    t = e.charAt(1),
                    n = e.charAt(2),
                    r = e.charAt(3);
                    e = "#" + t + t + n + n + r + r
                }
                e = parseInt(e.substr(1), 16);
                return [e >> 16, e >> 8 & 255, e & 255]
            }
            if (e.substr(0, 3) === "hsl") {
                e = e.match(f);
                i = Number(e[0]) % 360 / 360;
                s = Number(e[1]) / 100;
                o = Number(e[2]) / 100;
                n = o <= .5 ? o * (s + 1) : o + s - o * s;
                t = o * 2 - n;
                if (e.length > 3) {
                    e[3] = Number(e[3])
                }
                e[0] = ot(i + 1 / 3, t, n);
                e[1] = ot(i, t, n);
                e[2] = ot(i - 1 / 3, t, n);
                return e
            }
            e = e.match(f) || st.transparent;
            e[0] = Number(e[0]);
            e[1] = Number(e[1]);
            e[2] = Number(e[2]);
            if (e.length > 3) {
                e[3] = Number(e[3])
            }
            return e
        },
        at = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (a in st) {
            at += "|" + a + "\\b"
        }
        at = new RegExp(at + ")", "gi");
        var ft = function(e, t, n, r) {
            if (e == null) {
                return function(e) {
                    return e
                }
            }
            var i = t ? (e.match(at) || [""])[0] : "",
            s = e.split(i).join("").match(c) || [],
            o = e.substr(0, e.indexOf(s[0])),
            u = e.charAt(e.length - 1) === ")" ? ")": "",
            a = e.indexOf(" ") !== -1 ? " ": ",",
            l = s.length,
            h = l > 0 ? s[0].replace(f, "") : "",
            p;
            if (!l) {
                return function(e) {
                    return e
                }
            }
            if (t) {
                p = function(e) {
                    var t, f, d, v;
                    if (typeof e === "number") {
                        e += h
                    } else if (r && N.test(e)) {
                        v = e.replace(N, "|").split("|");
                        for (d = 0; d < v.length; d++) {
                            v[d] = p(v[d])
                        }
                        return v.join(",")
                    }
                    t = (e.match(at) || [i])[0];
                    f = e.split(t).join("").match(c) || [];
                    d = f.length;
                    if (l > d--) {
                        while (++d < l) {
                            f[d] = n ? f[(d - 1) / 2 | 0] : s[d]
                        }
                    }
                    return o + f.join(a) + a + t + u + (e.indexOf("inset") !== -1 ? " inset": "")
                };
                return p
            }
            p = function(e) {
                var t, i, f;
                if (typeof e === "number") {
                    e += h
                } else if (r && N.test(e)) {
                    i = e.replace(N, "|").split("|");
                    for (f = 0; f < i.length; f++) {
                        i[f] = p(i[f])
                    }
                    return i.join(",")
                }
                t = e.match(c) || [];
                f = t.length;
                if (l > f--) {
                    while (++f < l) {
                        t[f] = n ? t[(f - 1) / 2 | 0] : s[f]
                    }
                }
                return o + t.join(a) + u
            };
            return p
        },
        lt = function(e) {
            e = e.split(",");
            return function(t, n, r, i, s, o, u) {
                var a = (n + "").split(" "),
                f;
                u = {};
                for (f = 0; f < 4; f++) {
                    u[e[f]] = a[f] = a[f] || a[(f - 1) / 2 >> 0]
                }
                return i.parse(t, u, s, o)
            }
        },
        ct = _._setPluginRatio = function(e) {
            this.plugin.setRatio(e);
            var t = this.data,
            n = t.proxy,
            r = t.firstMPT,
            i = 1e-6,
            s, o, u, a;
            while (r) {
                s = n[r.v];
                if (r.r) {
                    s = s > 0 ? s + .5 | 0 : s - .5 | 0
                } else if (s < i && s > -i) {
                    s = 0
                }
                r.t[r.p] = s;
                r = r._next
            }
            if (t.autoRotate) {
                t.autoRotate.rotation = n.rotation
            }
            if (e === 1) {
                r = t.firstMPT;
                while (r) {
                    o = r.t;
                    if (!o.type) {
                        o.e = o.s + o.xs0
                    } else if (o.type === 1) {
                        a = o.xs0 + o.s + o.xs1;
                        for (u = 1; u < o.l; u++) {
                            a += o["xn" + u] + o["xs" + (u + 1)]
                        }
                        o.e = a
                    }
                    r = r._next
                }
            }
        },
        ht = function(e, t, n, r, i) {
            this.t = e;
            this.p = t;
            this.v = n;
            this.r = i;
            if (r) {
                r._prev = this;
                this._next = r
            }
        },
        pt = _._parseToProxy = function(e, t, n, r, i, s) {
            var o = r,
            u = {},
            a = {},
            f = n._transform,
            l = L,
            c, h, p, d, v;
            n._transform = null;
            L = t;
            r = v = n.parse(e, t, r, i);
            L = l;
            if (s) {
                n._transform = f;
                if (o) {
                    o._prev = null;
                    if (o._prev) {
                        o._prev._next = null
                    }
                }
            }
            while (r && r !== o) {
                if (r.type <= 1) {
                    h = r.p;
                    a[h] = r.s + r.c;
                    u[h] = r.s;
                    if (!s) {
                        d = new ht(r, "s", h, d, r.r);
                        r.c = 0
                    }
                    if (r.type === 1) {
                        c = r.l;
                        while (--c > 0) {
                            p = "xn" + c;
                            h = r.p + "_" + p;
                            a[h] = r.data[p];
                            u[h] = r[p];
                            if (!s) {
                                d = new ht(r, p, h, d, r.rxp[p])
                            }
                        }
                    }
                }
                r = r._next
            }
            return {
                proxy: u,
                end: a,
                firstMPT: d,
                pt: v
            }
        },
        dt = _.CSSPropTween = function(e, t, n, i, s, u, a, f, l, c, h) {
            this.t = e;
            this.p = t;
            this.s = n;
            this.c = i;
            this.n = a || "css_" + t;
            if (! (e instanceof dt)) {
                o.push(this.n)
            }
            this.r = f;
            this.type = u || 0;
            if (l) {
                this.pr = l;
                r = true
            }
            this.b = c === undefined ? n: c;
            this.e = h === undefined ? n + i: h;
            if (s) {
                this._next = s;
                s._prev = this
            }
        },
        vt = n.parseComplex = function(e, t, n, r, i, s, o, u, a, c) {
            n = n || s || "";
            o = new dt(e, t, 0, 0, o, c ? 2 : 1, null, false, u, n, r);
            r += "";
            var h = n.split(", ").join(",").split(" "),
            p = r.split(", ").join(",").split(" "),
            d = h.length,
            v = P !== false,
            m,
            y,
            b,
            w,
            E,
            S,
            x,
            T,
            C,
            k,
            L,
            A;
            if (r.indexOf(",") !== -1 || n.indexOf(",") !== -1) {
                h = h.join(" ").replace(N, ", ").split(" ");
                p = p.join(" ").replace(N, ", ").split(" ");
                d = h.length
            }
            if (d !== p.length) {
                h = (s || "").split(" ");
                d = h.length
            }
            o.plugin = a;
            o.setRatio = c;
            for (m = 0; m < d; m++) {
                w = h[m];
                E = p[m];
                T = parseFloat(w);
                if (T || T === 0) {
                    o.appendXtra("", T, nt(E, T), E.replace(l, ""), v && E.indexOf("px") !== -1, true)
                } else if (i && (w.charAt(0) === "#" || st[w] || g.test(w))) {
                    A = E.charAt(E.length - 1) === "," ? "),": ")";
                    w = ut(w);
                    E = ut(E);
                    C = w.length + E.length > 6;
                    if (C && !q && E[3] === 0) {
                        o["xs" + o.l] += o.l ? " transparent": "transparent";
                        o.e = o.e.split(p[m]).join("transparent")
                    } else {
                        if (!q) {
                            C = false
                        }
                        o.appendXtra(C ? "rgba(": "rgb(", w[0], E[0] - w[0], ",", true, true).appendXtra("", w[1], E[1] - w[1], ",", true).appendXtra("", w[2], E[2] - w[2], C ? ",": A, true);
                        if (C) {
                            w = w.length < 4 ? 1 : w[3];
                            o.appendXtra("", w, (E.length < 4 ? 1 : E[3]) - w, A, false)
                        }
                    }
                } else {
                    S = w.match(f);
                    if (!S) {
                        o["xs" + o.l] += o.l ? " " + w: w
                    } else {
                        x = E.match(l);
                        if (!x || x.length !== S.length) {
                            return o
                        }
                        b = 0;
                        for (y = 0; y < S.length; y++) {
                            L = S[y];
                            k = w.indexOf(L, b);
                            o.appendXtra(w.substr(b, k - b), Number(L), nt(x[y], L), "", v && w.substr(k + L.length, 2) === "px", y === 0);
                            b = k + L.length
                        }
                        o["xs" + o.l] += w.substr(b)
                    }
                }
            }
            if (r.indexOf("=") !== -1) if (o.data) {
                A = o.xs0 + o.data.s;
                for (m = 1; m < o.l; m++) {
                    A += o["xs" + m] + o.data["xn" + m]
                }
                o.e = A + o["xs" + m]
            }
            if (!o.l) {
                o.type = -1;
                o.xs0 = o.e
            }
            return o.xfirst || o
        },
        mt = 9;
        a = dt.prototype;
        a.l = a.pr = 0;
        while (--mt > 0) {
            a["xn" + mt] = 0;
            a["xs" + mt] = ""
        }
        a.xs0 = "";
        a._next = a._prev = a.xfirst = a.data = a.plugin = a.setRatio = a.rxp = null;
        a.appendXtra = function(e, t, n, r, i, s) {
            var o = this,
            u = o.l;
            o["xs" + u] += s && u ? " " + e: e || "";
            if (!n) if (u !== 0 && !o.plugin) {
                o["xs" + u] += t + (r || "");
                return o
            }
            o.l++;
            o.type = o.setRatio ? 2 : 1;
            o["xs" + o.l] = r || "";
            if (u > 0) {
                o.data["xn" + u] = t + n;
                o.rxp["xn" + u] = i;
                o["xn" + u] = t;
                if (!o.plugin) {
                    o.xfirst = new dt(o, "xn" + u, t, n, o.xfirst || o, 0, o.n, i, o.pr);
                    o.xfirst.xs0 = 0
                }
                return o
            }
            o.data = {
                s: t + n
            };
            o.rxp = {};
            o.s = t;
            o.c = n;
            o.r = i;
            return o
        };
        var gt = function(e, t) {
            t = t || {};
            this.p = t.prefix ? X(e) || e: e;
            u[e] = u[this.p] = this;
            this.format = t.formatter || ft(t.defaultValue, t.color, t.collapsible, t.multi);
            if (t.parser) {
                this.parse = t.parser
            }
            this.clrs = t.color;
            this.multi = t.multi;
            this.keyword = t.keyword;
            this.dflt = t.defaultValue;
            this.pr = t.priority || 0
        },
        yt = _._registerComplexSpecialProp = function(e, t, n) {
            if (typeof t !== "object") {
                t = {
                    parser: n
                }
            }
            var r = e.split(","),
            i = t.defaultValue,
            s,
            o;
            n = n || [i];
            for (s = 0; s < r.length; s++) {
                t.prefix = s === 0 && t.prefix;
                t.defaultValue = n[s] || i;
                o = new gt(r[s], t)
            }
        },
        bt = function(e) {
            if (!u[e]) {
                var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                yt(e, {
                    parser: function(e, n, r, i, s, o, a) {
                        var f = (window.GreenSockGlobals || window).com.greensock.plugins[t];
                        if (!f) {
                            U("Error: " + t + " js file not loaded.");
                            return s
                        }
                        f._cssRegister();
                        return u[r].parse(e, n, r, i, s, o, a)
                    }
                })
            }
        };
        a = gt.prototype;
        a.parseComplex = function(e, t, n, r, i, s) {
            var o = this.keyword,
            u, a, f, l, c, h;
            if (this.multi) if (N.test(n) || N.test(t)) {
                a = t.replace(N, "|").split("|");
                f = n.replace(N, "|").split("|")
            } else if (o) {
                a = [t];
                f = [n]
            }
            if (f) {
                l = f.length > a.length ? f.length: a.length;
                for (u = 0; u < l; u++) {
                    t = a[u] = a[u] || this.dflt;
                    n = f[u] = f[u] || this.dflt;
                    if (o) {
                        c = t.indexOf(o);
                        h = n.indexOf(o);
                        if (c !== h) {
                            n = h === -1 ? f: a;
                            n[u] += " " + o
                        }
                    }
                }
                t = a.join(", ");
                n = f.join(", ")
            }
            return vt(e, this.p, t, n, this.clrs, this.dflt, r, this.pr, i, s)
        };
        a.parse = function(e, t, n, r, i, o, u) {
            return this.parseComplex(e.style, this.format($(e, this.p, s, false, this.dflt)), this.format(t), i, o)
        };
        n.registerSpecialProp = function(e, t, n) {
            yt(e, {
                parser: function(e, r, i, s, o, u, a) {
                    var f = new dt(e, i, 0, 0, o, 2, i, false, n);
                    f.plugin = u;
                    f.setRatio = t(e, r, s._tween, i);
                    return f
                },
                priority: n
            })
        };
        var wt = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
        Et = X("transform"),
        St = z + "transform",
        xt = X("transformOrigin"),
        Tt = X("perspective") !== null,
        Nt = function(e, t, r) {
            var i = r ? e._gsTransform || {
                skewY: 0
            }: {
                skewY: 0
            },
            s = i.scaleX < 0,
            o = 2e-5,
            u = 1e5,
            a = -Math.PI + 1e-4,
            f = Math.PI - 1e-4,
            l = Tt ? parseFloat($(e, xt, t, false, "0 0 0").split(" ")[2]) || i.zOrigin || 0 : 0,
            c,
            h,
            p,
            d,
            v,
            m,
            g,
            y,
            b,
            w,
            E,
            S,
            T;
            if (Et) {
                c = $(e, St, t, true)
            } else if (e.currentStyle) {
                c = e.currentStyle.filter.match(x);
                if (c && c.length === 4) {
                    c = [c[0].substr(4), Number(c[2].substr(4)), Number(c[1].substr(4)), c[3].substr(4), i.x || 0, i.y || 0].join(",")
                } else if (i.x != null) {
                    return i
                } else {
                    c = ""
                }
            }
            h = (c || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [];
            p = h.length;
            while (--p > -1) {
                d = Number(h[p]);
                h[p] = (v = d - (d |= 0)) ? (v * u + (v < 0 ? -.5 : .5) | 0) / u + d: d
            }
            if (h.length === 16) {
                var N = h[8],
                C = h[9],
                k = h[10],
                L = h[12],
                A = h[13],
                O = h[14];
                if (i.zOrigin) {
                    O = -i.zOrigin;
                    L = N * O - h[12];
                    A = C * O - h[13];
                    O = k * O + i.zOrigin - h[14]
                }
                if (!r || i.rotationX == null) {
                    var M = h[0],
                    _ = h[1],
                    D = h[2],
                    P = h[3],
                    H = h[4],
                    B = h[5],
                    j = h[6],
                    F = h[7],
                    I = h[11],
                    q = i.rotationX = Math.atan2(j, k),
                    R = q < a || q > f,
                    U,
                    z,
                    W,
                    X,
                    V,
                    J,
                    K;
                    if (q) {
                        X = Math.cos( - q);
                        V = Math.sin( - q);
                        U = H * X + N * V;
                        z = B * X + C * V;
                        W = j * X + k * V;
                        N = H * -V + N * X;
                        C = B * -V + C * X;
                        k = j * -V + k * X;
                        I = F * -V + I * X;
                        H = U;
                        B = z;
                        j = W
                    }
                    q = i.rotationY = Math.atan2(N, M);
                    if (q) {
                        J = q < a || q > f;
                        X = Math.cos( - q);
                        V = Math.sin( - q);
                        U = M * X - N * V;
                        z = _ * X - C * V;
                        W = D * X - k * V;
                        C = _ * V + C * X;
                        k = D * V + k * X;
                        I = P * V + I * X;
                        M = U;
                        _ = z;
                        D = W
                    }
                    q = i.rotation = Math.atan2(_, B);
                    if (q) {
                        K = q < a || q > f;
                        X = Math.cos( - q);
                        V = Math.sin( - q);
                        M = M * X + H * V;
                        z = _ * X + B * V;
                        B = _ * -V + B * X;
                        j = D * -V + j * X;
                        _ = z
                    }
                    if (K && R) {
                        i.rotation = i.rotationX = 0
                    } else if (K && J) {
                        i.rotation = i.rotationY = 0
                    } else if (J && R) {
                        i.rotationY = i.rotationX = 0
                    }
                    i.scaleX = (Math.sqrt(M * M + _ * _) * u + .5 | 0) / u;
                    i.scaleY = (Math.sqrt(B * B + C * C) * u + .5 | 0) / u;
                    i.scaleZ = (Math.sqrt(j * j + k * k) * u + .5 | 0) / u;
                    i.skewX = 0;
                    i.perspective = I ? 1 / (I < 0 ? -I: I) : 0;
                    i.x = L;
                    i.y = A;
                    i.z = O
                }
            } else if ((!Tt || h.length === 0 || i.x !== h[4] || i.y !== h[5] || !i.rotationX && !i.rotationY) && !(i.x !== undefined && $(e, "display", t) === "none")) {
                var Q = h.length >= 6,
                G = Q ? h[0] : 1,
                Y = h[1] || 0,
                Z = h[2] || 0,
                et = Q ? h[3] : 1;
                i.x = h[4] || 0;
                i.y = h[5] || 0;
                m = Math.sqrt(G * G + Y * Y);
                g = Math.sqrt(et * et + Z * Z);
                y = G || Y ? Math.atan2(Y, G) : i.rotation || 0;
                b = Z || et ? Math.atan2(Z, et) + y: i.skewX || 0;
                w = m - Math.abs(i.scaleX || 0);
                E = g - Math.abs(i.scaleY || 0);
                if (Math.abs(b) > Math.PI / 2 && Math.abs(b) < Math.PI * 1.5) {
                    if (s) {
                        m *= -1;
                        b += y <= 0 ? Math.PI: -Math.PI;
                        y += y <= 0 ? Math.PI: -Math.PI
                    } else {
                        g *= -1;
                        b += b <= 0 ? Math.PI: -Math.PI
                    }
                }
                S = (y - i.rotation) % Math.PI;
                T = (b - i.skewX) % Math.PI;
                if (i.skewX === undefined || w > o || w < -o || E > o || E < -o || S > a && S < f && S * u | 0 !== 0 || T > a && T < f && T * u | 0 !== 0) {
                    i.scaleX = m;
                    i.scaleY = g;
                    i.rotation = y;
                    i.skewX = b
                }
                if (Tt) {
                    i.rotationX = i.rotationY = i.z = 0;
                    i.perspective = parseFloat(n.defaultTransformPerspective) || 0;
                    i.scaleZ = 1
                }
            }
            i.zOrigin = l;
            for (p in i) {
                if (i[p] < o) if (i[p] > -o) {
                    i[p] = 0
                }
            }
            if (r) {
                e._gsTransform = i
            }
            return i
        },
        Ct = function(e) {
            var t = this.data,
            n = -t.rotation,
            r = n + t.skewX,
            i = 1e5,
            s = (Math.cos(n) * t.scaleX * i | 0) / i,
            o = (Math.sin(n) * t.scaleX * i | 0) / i,
            u = (Math.sin(r) * -t.scaleY * i | 0) / i,
            a = (Math.cos(r) * t.scaleY * i | 0) / i,
            f = this.t.style,
            l = this.t.currentStyle,
            c,
            h;
            if (!l) {
                return
            }
            h = o;
            o = -u;
            u = -h;
            c = l.filter;
            f.filter = "";
            var v = this.t.offsetWidth,
            m = this.t.offsetHeight,
            g = l.position !== "absolute",
            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + o + ", M21=" + u + ", M22=" + a,
            b = t.x,
            w = t.y,
            E, S;
            if (t.ox != null) {
                E = (t.oxp ? v * t.ox * .01 : t.ox) - v / 2;
                S = (t.oyp ? m * t.oy * .01 : t.oy) - m / 2;
                b += E - (E * s + S * o);
                w += S - (E * u + S * a)
            }
            if (!g) {
                var x = I < 8 ? 1 : -1,
                N,
                C,
                k;
                E = t.ieOffsetX || 0;
                S = t.ieOffsetY || 0;
                t.ieOffsetX = Math.round((v - ((s < 0 ? -s: s) * v + (o < 0 ? -o: o) * m)) / 2 + b);
                t.ieOffsetY = Math.round((m - ((a < 0 ? -a: a) * m + (u < 0 ? -u: u) * v)) / 2 + w);
                for (mt = 0; mt < 4; mt++) {
                    C = Z[mt];
                    N = l[C];
                    h = N.indexOf("px") !== -1 ? parseFloat(N) : J(this.t, C, parseFloat(N), N.replace(p, "")) || 0;
                    if (h !== t[C]) {
                        k = mt < 2 ? -t.ieOffsetX: -t.ieOffsetY
                    } else {
                        k = mt < 2 ? E - t.ieOffsetX: S - t.ieOffsetY
                    }
                    f[C] = (t[C] = Math.round(h - k * (mt === 0 || mt === 2 ? 1 : x))) + "px"
                }
                y += ", sizingMethod='auto expand')"
            } else {
                E = v / 2;
                S = m / 2;
                y += ", Dx=" + (E - (E * s + S * o) + b) + ", Dy=" + (S - (E * u + S * a) + w) + ")"
            }
            if (c.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
                f.filter = c.replace(T, y)
            } else {
                f.filter = y + " " + c
            }
            if (e === 0 || e === 1) if (s === 1) if (o === 0) if (u === 0) if (a === 1) if (!g || y.indexOf("Dx=0, Dy=0") !== -1) if (!d.test(c) || parseFloat(RegExp.$1) === 100) if (c.indexOf("gradient(") === -1) {
                f.removeAttribute("filter")
            }
        },
        kt = function(e) {
            var t = this.data,
            n = this.t.style,
            r = t.perspective,
            i = t.scaleX,
            s = 0,
            o = 0,
            u = 0,
            a = 0,
            f = t.scaleY,
            l = 0,
            c = 0,
            h = 0,
            p = 0,
            d = t.scaleZ,
            v = 0,
            m = 0,
            g = 0,
            y = r ? -1 / r: 0,
            b = t.rotation,
            w = t.zOrigin,
            E = 1e5,
            S,
            x,
            T,
            N,
            C,
            k,
            L,
            A,
            O;
            if (j) {
                L = n.top ? "top": n.bottom ? "bottom": parseFloat($(this.t, "top", null, false)) ? "bottom": "top";
                T = $(this.t, L, null, false);
                A = parseFloat(T) || 0;
                O = T.substr((A + "").length) || "px";
                t._ffFix = !t._ffFix;
                n[L] = (t._ffFix ? A + .05 : A - .05) + O
            }
            if (b || t.skewX) {
                T = i * Math.cos(b);
                N = f * Math.sin(b);
                b -= t.skewX;
                s = i * -Math.sin(b);
                f = f * Math.cos(b);
                i = T;
                a = N
            }
            b = t.rotationY;
            if (b) {
                S = Math.cos(b);
                x = Math.sin(b);
                T = i * S;
                N = a * S;
                C = d * -x;
                k = y * -x;
                o = i * x;
                l = a * x;
                d = d * S;
                y *= S;
                i = T;
                a = N;
                h = C;
                m = k
            }
            b = t.rotationX;
            if (b) {
                S = Math.cos(b);
                x = Math.sin(b);
                T = s * S + o * x;
                N = f * S + l * x;
                C = p * S + d * x;
                k = g * S + y * x;
                o = s * -x + o * S;
                l = f * -x + l * S;
                d = p * -x + d * S;
                y = g * -x + y * S;
                s = T;
                f = N;
                p = C;
                g = k
            }
            if (w) {
                v -= w;
                u = o * v;
                c = l * v;
                v = d * v + w
            }
            u = (T = (u += t.x) - (u |= 0)) ? (T * E + (T < 0 ? -.5 : .5) | 0) / E + u: u;
            c = (T = (c += t.y) - (c |= 0)) ? (T * E + (T < 0 ? -.5 : .5) | 0) / E + c: c;
            v = (T = (v += t.z) - (v |= 0)) ? (T * E + (T < 0 ? -.5 : .5) | 0) / E + v: v;
            n[Et] = "matrix3d(" + [(i * E | 0) / E, (a * E | 0) / E, (h * E | 0) / E, (m * E | 0) / E, (s * E | 0) / E, (f * E | 0) / E, (p * E | 0) / E, (g * E | 0) / E, (o * E | 0) / E, (l * E | 0) / E, (d * E | 0) / E, (y * E | 0) / E, u, c, v, r ? 1 + -v / r: 1].join(",") + ")"
        },
        Lt = function(e) {
            var t = this.data,
            n = this.t,
            r = n.style,
            i, s, o, u, a, f, l, c, h;
            if (j) {
                i = r.top ? "top": r.bottom ? "bottom": parseFloat($(n, "top", null, false)) ? "bottom": "top";
                s = $(n, i, null, false);
                o = parseFloat(s) || 0;
                u = s.substr((o + "").length) || "px";
                t._ffFix = !t._ffFix;
                r[i] = (t._ffFix ? o + .05 : o - .05) + u
            }
            if (!t.rotation && !t.skewX) {
                r[Et] = "matrix(" + t.scaleX + ",0,0," + t.scaleY + "," + t.x + "," + t.y + ")"
            } else {
                a = t.rotation;
                f = a - t.skewX;
                l = 1e5;
                c = t.scaleX * l;
                h = t.scaleY * l;
                r[Et] = "matrix(" + (Math.cos(a) * c | 0) / l + "," + (Math.sin(a) * c | 0) / l + "," + (Math.sin(f) * -h | 0) / l + "," + (Math.cos(f) * h | 0) / l + "," + t.x + "," + t.y + ")"
            }
        };
        yt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation", {
            parser: function(e, t, n, r, i, o, u) {
                if (r._transform) {
                    return i
                }
                var a = r._transform = Nt(e, s, true),
                f = e.style,
                l = 1e-6,
                c = wt.length,
                h = u,
                p = {},
                d,
                v,
                m,
                g,
                y,
                b,
                w;
                if (typeof h.transform === "string" && Et) {
                    m = f.cssText;
                    f[Et] = h.transform;
                    f.display = "block";
                    d = Nt(e, null, false);
                    f.cssText = m
                } else if (typeof h === "object") {
                    d = {
                        scaleX: rt(h.scaleX != null ? h.scaleX: h.scale, a.scaleX),
                        scaleY: rt(h.scaleY != null ? h.scaleY: h.scale, a.scaleY),
                        scaleZ: rt(h.scaleZ != null ? h.scaleZ: h.scale, a.scaleZ),
                        x: rt(h.x, a.x),
                        y: rt(h.y, a.y),
                        z: rt(h.z, a.z),
                        perspective: rt(h.transformPerspective, a.perspective)
                    };
                    w = h.directionalRotation;
                    if (w != null) {
                        if (typeof w === "object") {
                            for (m in w) {
                                h[m] = w[m]
                            }
                        } else {
                            h.rotation = w
                        }
                    }
                    d.rotation = it("rotation" in h ? h.rotation: "shortRotation" in h ? h.shortRotation + "_short": "rotationZ" in h ? h.rotationZ: a.rotation * k, a.rotation, "rotation", p);
                    if (Tt) {
                        d.rotationX = it("rotationX" in h ? h.rotationX: "shortRotationX" in h ? h.shortRotationX + "_short": a.rotationX * k || 0, a.rotationX, "rotationX", p);
                        d.rotationY = it("rotationY" in h ? h.rotationY: "shortRotationY" in h ? h.shortRotationY + "_short": a.rotationY * k || 0, a.rotationY, "rotationY", p)
                    }
                    d.skewX = h.skewX == null ? a.skewX: it(h.skewX, a.skewX);
                    d.skewY = h.skewY == null ? a.skewY: it(h.skewY, a.skewY);
                    if (v = d.skewY - a.skewY) {
                        d.skewX += v;
                        d.rotation += v
                    }
                }
                y = a.z || a.rotationX || a.rotationY || d.z || d.rotationX || d.rotationY || d.perspective;
                if (!y && h.scale != null) {
                    d.scaleZ = 1
                }
                while (--c > -1) {
                    n = wt[c];
                    g = d[n] - a[n];
                    if (g > l || g < -l || L[n] != null) {
                        b = true;
                        i = new dt(a, n, a[n], g, i);
                        if (n in p) {
                            i.e = p[n]
                        }
                        i.xs0 = 0;
                        i.plugin = o;
                        r._overwriteProps.push(i.n)
                    }
                }
                g = h.transformOrigin;
                if (g || Tt && y && a.zOrigin) {
                    if (Et) {
                        b = true;
                        g = (g || $(e, n, s, false, "50% 50%")) + "";
                        n = xt;
                        i = new dt(f, n, 0, 0, i, -1, "css_transformOrigin");
                        i.b = f[n];
                        i.plugin = o;
                        if (Tt) {
                            m = a.zOrigin;
                            g = g.split(" ");
                            a.zOrigin = (g.length > 2 ? parseFloat(g[2]) : m) || 0;
                            i.xs0 = i.e = f[n] = g[0] + " " + (g[1] || "50%") + " 0px";
                            i = new dt(a, "zOrigin", 0, 0, i, -1, i.n);
                            i.b = m;
                            i.xs0 = i.e = a.zOrigin
                        } else {
                            i.xs0 = i.e = f[n] = g
                        }
                    } else {
                        tt(g + "", a)
                    }
                }
                if (b) {
                    r._transformType = y || this._transformType === 3 ? 3 : 2
                }
                return i
            },
            prefix: true
        });
        yt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: true,
            color: true,
            multi: true,
            keyword: "inset"
        });
        yt("borderRadius", {
            defaultValue: "0px",
            parser: function(e, t, n, r, o, u) {
                t = this.format(t);
                var a = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                f = e.style,
                l,
                c,
                h,
                p,
                d,
                v,
                m,
                g,
                y,
                b,
                w,
                E,
                S,
                x,
                T,
                N;
                y = parseFloat(e.offsetWidth);
                b = parseFloat(e.offsetHeight);
                l = t.split(" ");
                for (c = 0; c < a.length; c++) {
                    if (this.p.indexOf("border")) {
                        a[c] = X(a[c])
                    }
                    d = p = $(e, a[c], s, false, "0px");
                    if (d.indexOf(" ") !== -1) {
                        p = d.split(" ");
                        d = p[0];
                        p = p[1]
                    }
                    v = h = l[c];
                    m = parseFloat(d);
                    E = d.substr((m + "").length);
                    S = v.charAt(1) === "=";
                    if (S) {
                        g = parseInt(v.charAt(0) + "1", 10);
                        v = v.substr(2);
                        g *= parseFloat(v);
                        w = v.substr((g + "").length - (g < 0 ? 1 : 0)) || ""
                    } else {
                        g = parseFloat(v);
                        w = v.substr((g + "").length)
                    }
                    if (w === "") {
                        w = i[n] || E
                    }
                    if (w !== E) {
                        x = J(e, "borderLeft", m, E);
                        T = J(e, "borderTop", m, E);
                        if (w === "%") {
                            d = x / y * 100 + "%";
                            p = T / b * 100 + "%"
                        } else if (w === "em") {
                            N = J(e, "borderLeft", 1, "em");
                            d = x / N + "em";
                            p = T / N + "em"
                        } else {
                            d = x + "px";
                            p = T + "px"
                        }
                        if (S) {
                            v = parseFloat(d) + g + w;
                            h = parseFloat(p) + g + w
                        }
                    }
                    o = vt(f, a[c], d + " " + p, v + " " + h, false, "0px", o)
                }
                return o
            },
            prefix: true,
            formatter: ft("0px 0px 0px 0px", false, true)
        });
        yt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(e, t, n, r, i, o) {
                var u = "background-position",
                a = s || V(e, null),
                f = this.format((a ? I ? a.getPropertyValue(u + "-x") + " " + a.getPropertyValue(u + "-y") : a.getPropertyValue(u) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                l = this.format(t),
                c,
                h,
                p,
                d,
                v,
                m;
                if (f.indexOf("%") !== -1 !== (l.indexOf("%") !== -1)) {
                    m = $(e, "backgroundImage").replace(w, "");
                    if (m && m !== "none") {
                        c = f.split(" ");
                        h = l.split(" ");
                        M.setAttribute("src", m);
                        p = 2;
                        while (--p > -1) {
                            f = c[p];
                            d = f.indexOf("%") !== -1;
                            if (d !== (h[p].indexOf("%") !== -1)) {
                                v = p === 0 ? e.offsetWidth - M.width: e.offsetHeight - M.height;
                                c[p] = d ? parseFloat(f) / 100 * v + "px": parseFloat(f) / v * 100 + "%"
                            }
                        }
                        f = c.join(" ")
                    }
                }
                return this.parseComplex(e.style, f, l, i, o)
            },
            formatter: tt
        });
        yt("backgroundSize", {
            defaultValue: "0 0",
            formatter: tt
        });
        yt("perspective", {
            defaultValue: "0px",
            prefix: true
        });
        yt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: true
        });
        yt("transformStyle", {
            prefix: true
        });
        yt("backfaceVisibility", {
            prefix: true
        });
        yt("margin", {
            parser: lt("marginTop,marginRight,marginBottom,marginLeft")
        });
        yt("padding", {
            parser: lt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        });
        yt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(e, t, n, r, i, o) {
                var u, a, f;
                if (I < 9) {
                    a = e.currentStyle;
                    f = I < 8 ? " ": ",";
                    u = "rect(" + a.clipTop + f + a.clipRight + f + a.clipBottom + f + a.clipLeft + ")";
                    t = this.format(t).split(",").join(f)
                } else {
                    u = this.format($(e, this.p, s, false, this.dflt));
                    t = this.format(t)
                }
                return this.parseComplex(e.style, u, t, i, o)
            }
        });
        yt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: true,
            multi: true
        });
        yt("autoRound,strictUnits", {
            parser: function(e, t, n, r, i) {
                return i
            }
        });
        yt("border", {
            defaultValue: "0px solid #000",
            parser: function(e, t, n, r, i, o) {
                return this.parseComplex(e.style, this.format($(e, "borderTopWidth", s, false, "0px") + " " + $(e, "borderTopStyle", s, false, "solid") + " " + $(e, "borderTopColor", s, false, "#000")), this.format(t), i, o)
            },
            color: true,
            formatter: function(e) {
                var t = e.split(" ");
                return t[0] + " " + (t[1] || "solid") + " " + (e.match(at) || ["#000"])[0]
            }
        });
        yt("float,cssFloat,styleFloat", {
            parser: function(e, t, n, r, i, s) {
                var o = e.style,
                u = "cssFloat" in o ? "cssFloat": "styleFloat";
                return new dt(o, u, 0, 0, i, -1, n, false, 0, o[u], t)
            }
        });
        var At = function(e) {
            var t = this.t,
            n = t.filter,
            r = this.s + this.c * e | 0,
            i;
            if (r === 100) {
                if (n.indexOf("atrix(") === -1 && n.indexOf("radient(") === -1) {
                    t.removeAttribute("filter");
                    i = !$(this.data, "filter")
                } else {
                    t.filter = n.replace(m, "");
                    i = true
                }
            }
            if (!i) {
                if (this.xn1) {
                    t.filter = n = n || "alpha(opacity=100)"
                }
                if (n.indexOf("opacity") === -1) {
                    t.filter += " alpha(opacity=" + r + ")"
                } else {
                    t.filter = n.replace(d, "opacity=" + r)
                }
            }
        };
        yt("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(e, t, n, r, i, o) {
                var u = parseFloat($(e, "opacity", s, false, "1")),
                a = e.style,
                f;
                t = parseFloat(t);
                if (n === "autoAlpha") {
                    f = $(e, "visibility", s);
                    if (u === 1 && f === "hidden" && t !== 0) {
                        u = 0
                    }
                    i = new dt(a, "visibility", 0, 0, i, -1, null, false, 0, u !== 0 ? "visible": "hidden", t === 0 ? "hidden": "visible");
                    i.xs0 = "visible";
                    r._overwriteProps.push(i.n)
                }
                if (q) {
                    i = new dt(a, "opacity", u, t - u, i)
                } else {
                    i = new dt(a, "opacity", u * 100, (t - u) * 100, i);
                    i.xn1 = n === "autoAlpha" ? 1 : 0;
                    a.zoom = 1;
                    i.type = 2;
                    i.b = "alpha(opacity=" + i.s + ")";
                    i.e = "alpha(opacity=" + (i.s + i.c) + ")";
                    i.data = e;
                    i.plugin = o;
                    i.setRatio = At
                }
                return i
            }
        });
        var Ot = function(e, t) {
            if (t) {
                if (e.removeProperty) {
                    e.removeProperty(t.replace(y, "-$1").toLowerCase())
                } else {
                    e.removeAttribute(t)
                }
            }
        },
        Mt = function(e) {
            this.t._gsClassPT = this;
            if (e === 1 || e === 0) {
                this.t.className = e === 0 ? this.b: this.e;
                var t = this.data,
                n = this.t.style;
                while (t) {
                    if (!t.v) {
                        Ot(n, t.p)
                    } else {
                        n[t.p] = t.v
                    }
                    t = t._next
                }
                if (e === 1 && this.t._gsClassPT === this) {
                    this.t._gsClassPT = null
                }
            } else if (this.t.className !== this.e) {
                this.t.className = this.e
            }
        };
        yt("className", {
            parser: function(e, t, n, i, o, u, a) {
                var f = e.className,
                l = e.style.cssText,
                c, h, p, d, v;
                o = i._classNamePT = new dt(e, n, 0, 0, o, 2);
                o.setRatio = Mt;
                o.pr = -11;
                r = true;
                o.b = f;
                h = Q(e, s);
                p = e._gsClassPT;
                if (p) {
                    d = {};
                    v = p.data;
                    while (v) {
                        d[v.p] = 1;
                        v = v._next
                    }
                    p.setRatio(1)
                }
                e._gsClassPT = o;
                o.e = t.charAt(1) !== "=" ? t: f.replace(new RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + (t.charAt(0) === "+" ? " " + t.substr(2) : "");
                if (i._tween._duration) {
                    e.className = o.e;
                    c = G(e, h, Q(e), a, d);
                    e.className = f;
                    o.data = c.firstMPT;
                    e.style.cssText = l;
                    o = o.xfirst = i.parse(e, c.difs, o, u)
                }
                return o
            }
        });
        var _t = function(e) {
            if (e === 1 || e === 0) if (this.data._totalTime === this.data._totalDuration) {
                var t = this.e === "all",
                n = this.t.style,
                r = t ? n.cssText.split(";") : this.e.split(","),
                i = r.length,
                s = u.transform.parse,
                o;
                while (--i > -1) {
                    o = r[i];
                    if (t) {
                        o = o.substr(0, o.indexOf(":")).split(" ").join("")
                    }
                    if (u[o]) {
                        o = u[o].parse === s ? Et: u[o].p
                    }
                    Ot(n, o)
                }
            }
        };
        yt("clearProps", {
            parser: function(e, t, n, i, s) {
                s = new dt(e, n, 0, 0, s, 2);
                s.setRatio = _t;
                s.e = t;
                s.pr = -10;
                s.data = i._tween;
                r = true;
                return s
            }
        });
        a = "bezier,throwProps,physicsProps,physics2D".split(",");
        mt = a.length;
        while (mt--) {
            bt(a[mt])
        }
        a = n.prototype;
        a._firstPT = null;
        a._onInitTween = function(e, t, u) {
            if (!e.nodeType) {
                return false
            }
            this._target = e;
            this._tween = u;
            this._vars = t;
            P = t.autoRound;
            r = false;
            i = t.suffixMap || n.suffixMap;
            s = V(e, "");
            o = this._overwriteProps;
            var a = e.style,
            f, l, c, h, p, d, m, g, y;
            if (H) if (a.zIndex === "") {
                f = $(e, "zIndex", s);
                if (f === "auto" || f === "") {
                    a.zIndex = 0
                }
            }
            if (typeof t === "string") {
                h = a.cssText;
                f = Q(e, s);
                a.cssText = h + ";" + t;
                f = G(e, f, Q(e)).difs;
                if (!q && v.test(t)) {
                    f.opacity = parseFloat(RegExp.$1)
                }
                t = f;
                a.cssText = h
            }
            this._firstPT = l = this.parse(e, t, null);
            if (this._transformType) {
                y = this._transformType === 3;
                if (!Et) {
                    a.zoom = 1
                } else if (B) {
                    H = true;
                    if (a.zIndex === "") {
                        m = $(e, "zIndex", s);
                        if (m === "auto" || m === "") {
                            a.zIndex = 0
                        }
                    }
                    if (F) {
                        a.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (y ? "visible": "hidden")
                    }
                }
                c = l;
                while (c && c._next) {
                    c = c._next
                }
                g = new dt(e, "transform", 0, 0, null, 2);
                this._linkCSSP(g, null, c);
                g.setRatio = y && Tt ? kt: Et ? Lt: Ct;
                g.data = this._transform || Nt(e, s, true);
                o.pop()
            }
            if (r) {
                while (l) {
                    d = l._next;
                    c = h;
                    while (c && c.pr > l.pr) {
                        c = c._next
                    }
                    if (l._prev = c ? c._prev: p) {
                        l._prev._next = l
                    } else {
                        h = l
                    }
                    if (l._next = c) {
                        c._prev = l
                    } else {
                        p = l
                    }
                    l = d
                }
                this._firstPT = h
            }
            return true
        };
        a.parse = function(e, t, n, r) {
            var o = e.style,
            a, f, l, c, h, d, v, m, y, b;
            for (a in t) {
                d = t[a];
                f = u[a];
                if (f) {
                    n = f.parse(e, d, a, this, n, r, t)
                } else {
                    h = $(e, a, s) + "";
                    y = typeof d === "string";
                    if (a === "color" || a === "fill" || a === "stroke" || a.indexOf("Color") !== -1 || y && g.test(d)) {
                        if (!y) {
                            d = ut(d);
                            d = (d.length > 3 ? "rgba(": "rgb(") + d.join(",") + ")"
                        }
                        n = vt(o, a, h, d, true, "transparent", n, 0, r)
                    } else if (y && (d.indexOf(" ") !== -1 || d.indexOf(",") !== -1)) {
                        n = vt(o, a, h, d, true, null, n, 0, r)
                    } else {
                        l = parseFloat(h);
                        v = l || l === 0 ? h.substr((l + "").length) : "";
                        if (h === "" || h === "auto") {
                            if (a === "width" || a === "height") {
                                l = et(e, a, s);
                                v = "px"
                            } else if (a === "left" || a === "top") {
                                l = K(e, a, s);
                                v = "px"
                            } else {
                                l = a !== "opacity" ? 0 : 1;
                                v = ""
                            }
                        }
                        b = y && d.charAt(1) === "=";
                        if (b) {
                            c = parseInt(d.charAt(0) + "1", 10);
                            d = d.substr(2);
                            c *= parseFloat(d);
                            m = d.replace(p, "")
                        } else {
                            c = parseFloat(d);
                            m = y ? d.substr((c + "").length) || "": ""
                        }
                        if (m === "") {
                            m = i[a] || v
                        }
                        d = c || c === 0 ? (b ? c + l: c) + m: t[a];
                        if (v !== m) if (m !== "") if (c || c === 0) if (l || l === 0) {
                            l = J(e, a, l, v);
                            if (m === "%") {
                                l /= J(e, a, 100, "%") / 100;
                                if (l > 100) {
                                    l = 100
                                }
                                if (t.strictUnits !== true) {
                                    h = l + "%"
                                }
                            } else if (m === "em") {
                                l /= J(e, a, 1, "em")
                            } else {
                                c = J(e, a, c, m);
                                m = "px"
                            }
                            if (b) if (c || c === 0) {
                                d = c + l + m
                            }
                        }
                        if (b) {
                            c += l
                        }
                        if ((l || l === 0) && (c || c === 0)) {
                            n = new dt(o, a, l, c - l, n, 0, "css_" + a, P !== false && (m === "px" || a === "zIndex"), 0, h, d);
                            n.xs0 = m
                        } else if (o[a] === undefined || !d && (d + "" === "NaN" || d == null)) {
                            U("invalid " + a + " tween value: " + t[a])
                        } else {
                            n = new dt(o, a, c || l || 0, 0, n, -1, "css_" + a, false, 0, h, d);
                            n.xs0 = d === "none" && (a === "display" || a.indexOf("Style") !== -1) ? h: d
                        }
                    }
                }
                if (r) if (n && !n.plugin) {
                    n.plugin = r
                }
            }
            return n
        };
        a.setRatio = function(e) {
            var t = this._firstPT,
            n = 1e-6,
            r, i, s;
            if (e === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
                while (t) {
                    if (t.type !== 2) {
                        t.t[t.p] = t.e
                    } else {
                        t.setRatio(e)
                    }
                    t = t._next
                }
            } else if (e || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -1e-6) {
                while (t) {
                    r = t.c * e + t.s;
                    if (t.r) {
                        r = r > 0 ? r + .5 | 0 : r - .5 | 0
                    } else if (r < n) if (r > -n) {
                        r = 0
                    }
                    if (!t.type) {
                        t.t[t.p] = r + t.xs0
                    } else if (t.type === 1) {
                        s = t.l;
                        if (s === 2) {
                            t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2
                        } else if (s === 3) {
                            t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3
                        } else if (s === 4) {
                            t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4
                        } else if (s === 5) {
                            t.t[t.p] = t.xs0 + r + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4 + t.xn4 + t.xs5
                        } else {
                            i = t.xs0 + r + t.xs1;
                            for (s = 1; s < t.l; s++) {
                                i += t["xn" + s] + t["xs" + (s + 1)]
                            }
                            t.t[t.p] = i
                        }
                    } else if (t.type === -1) {
                        t.t[t.p] = t.xs0
                    } else if (t.setRatio) {
                        t.setRatio(e)
                    }
                    t = t._next
                }
            } else {
                while (t) {
                    if (t.type !== 2) {
                        t.t[t.p] = t.b
                    } else {
                        t.setRatio(e)
                    }
                    t = t._next
                }
            }
        };
        a._enableTransforms = function(e) {
            this._transformType = e || this._transformType === 3 ? 3 : 2
        };
        a._linkCSSP = function(e, t, n, r) {
            if (e) {
                if (t) {
                    t._prev = e
                }
                if (e._next) {
                    e._next._prev = e._prev
                }
                if (n) {
                    n._next = e
                } else if (!r && this._firstPT === null) {
                    this._firstPT = e
                }
                if (e._prev) {
                    e._prev._next = e._next
                } else if (this._firstPT === e) {
                    this._firstPT = e._next
                }
                e._next = t;
                e._prev = n
            }
            return e
        };
        a._kill = function(t) {
            var n = t,
            r, i, s;
            if (t.css_autoAlpha || t.css_alpha) {
                n = {};
                for (i in t) {
                    n[i] = t[i]
                }
                n.css_opacity = 1;
                if (n.css_autoAlpha) {
                    n.css_visibility = 1
                }
            }
            if (t.css_className && (r = this._classNamePT)) {
                s = r.xfirst;
                if (s && s._prev) {
                    this._linkCSSP(s._prev, r._next, s._prev._prev)
                } else if (s === this._firstPT) {
                    this._firstPT = r._next
                }
                if (r._next) {
                    this._linkCSSP(r._next, r._next._next, s._prev)
                }
                this._classNamePT = null
            }
            return e.prototype._kill.call(this, n)
        };
        var Dt = function(e, t, n) {
            var r, i, s, o;
            if (e.slice) {
                i = e.length;
                while (--i > -1) {
                    Dt(e[i], t, n)
                }
                return
            }
            r = e.childNodes;
            i = r.length;
            while (--i > -1) {
                s = r[i];
                o = s.type;
                if (s.style) {
                    t.push(Q(s));
                    if (n) {
                        n.push(s)
                    }
                }
                if ((o === 1 || o === 9 || o === 11) && s.childNodes.length) {
                    Dt(s, t, n)
                }
            }
        };
        n.cascadeTo = function(e, n, r) {
            var i = t.to(e, n, r),
            s = [i],
            o = [],
            u = [],
            a = [],
            f = t._internals.reservedProps,
            l,
            c,
            h;
            e = i._targets || i.target;
            Dt(e, o, a);
            i.render(n, true);
            Dt(e, u);
            i.render(0, true);
            i._enabled(true);
            l = a.length;
            while (--l > -1) {
                c = G(a[l], o[l], u[l]);
                if (c.firstMPT) {
                    c = c.difs;
                    for (h in r) {
                        if (f[h]) {
                            c[h] = r[h]
                        }
                    }
                    s.push(t.to(a[l], n, c))
                }
            }
            return s
        };
        e.activate([n]);
        return n
    },
    true); (function() {
        var e = window._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(e, t, n) {
                this._tween = n;
                return true
            }
        }),
        t = e.prototype;
        t._onInitAllProps = function() {
            var e = this._tween,
            t = e.vars.roundProps instanceof Array ? e.vars.roundProps: e.vars.roundProps.split(","),
            n = t.length,
            r = {},
            i = e._propLookup.roundProps,
            s,
            o,
            u;
            while (--n > -1) {
                r[t[n]] = 1
            }
            n = t.length;
            while (--n > -1) {
                s = t[n];
                o = e._firstPT;
                while (o) {
                    u = o._next;
                    if (o.pg) {
                        o.t._roundProps(r, true)
                    } else if (o.n === s) {
                        this._add(o.t, s, o.s, o.c);
                        if (u) {
                            u._prev = o._prev
                        }
                        if (o._prev) {
                            o._prev._next = u
                        } else if (e._firstPT === o) {
                            e._firstPT = u
                        }
                        o._next = o._prev = null;
                        e._propLookup[s] = i
                    }
                    o = u
                }
            }
            return false
        };
        t._add = function(e, t, n, r) {
            this._addTween(e, t, n, n + r, t, true);
            this._overwriteProps.push(t)
        }
    })();
    window._gsDefine.plugin({
        propName: "attr",
        API: 2,
        init: function(e, t, n) {
            var r;
            if (typeof e.setAttribute !== "function") {
                return false
            }
            this._target = e;
            this._proxy = {};
            for (r in t) {
                this._addTween(this._proxy, r, parseFloat(e.getAttribute(r)), t[r], r);
                this._overwriteProps.push(r)
            }
            return true
        },
        set: function(e) {
            this._super.setRatio.call(this, e);
            var t = this._overwriteProps,
            n = t.length,
            r;
            while (--n > -1) {
                r = t[n];
                this._target.setAttribute(r, this._proxy[r] + "")
            }
        }
    });
    window._gsDefine.plugin({
        propName: "directionalRotation",
        API: 2,
        init: function(e, t, n) {
            if (typeof t !== "object") {
                t = {
                    rotation: t
                }
            }
            this.finals = {};
            var r = t.useRadians === true ? Math.PI * 2 : 360,
            i = 1e-6,
            s,
            o,
            u,
            a,
            f,
            l;
            for (s in t) {
                if (s !== "useRadians") {
                    l = (t[s] + "").split("_");
                    o = l[0];
                    u = parseFloat(typeof e[s] !== "function" ? e[s] : e[s.indexOf("set") || typeof e["get" + s.substr(3)] !== "function" ? s: "get" + s.substr(3)]());
                    a = this.finals[s] = typeof o === "string" && o.charAt(1) === "=" ? u + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0;
                    f = a - u;
                    if (l.length) {
                        o = l.join("_");
                        if (o.indexOf("short") !== -1) {
                            f = f % r;
                            if (f !== f % (r / 2)) {
                                f = f < 0 ? f + r: f - r
                            }
                        }
                        if (o.indexOf("_cw") !== -1 && f < 0) {
                            f = (f + r * 9999999999) % r - (f / r | 0) * r
                        } else if (o.indexOf("ccw") !== -1 && f > 0) {
                            f = (f - r * 9999999999) % r - (f / r | 0) * r
                        }
                    }
                    if (f > i || f < -i) {
                        this._addTween(e, s, u, u + f, s);
                        this._overwriteProps.push(s)
                    }
                }
            }
            return true
        },
        set: function(e) {
            var t;
            if (e !== 1) {
                this._super.setRatio.call(this, e)
            } else {
                t = this._firstPT;
                while (t) {
                    if (t.f) {
                        t.t[t.p](this.finals[t.p])
                    } else {
                        t.t[t.p] = this.finals[t.p]
                    }
                    t = t._next
                }
            }
        }
    })._autoCSS = true;
    window._gsDefine("easing.Back", ["easing.Ease"],
    function(e) {
        var t = window.GreenSockGlobals || window,
        n = t.com.greensock,
        r = Math.PI * 2,
        i = Math.PI / 2,
        s = n._class,
        o = function(t, n) {
            var r = s("easing." + t,
            function() {},
            true),
            i = r.prototype = new e;
            i.constructor = r;
            i.getRatio = n;
            return r
        },
        u = e.register ||
        function() {},
        a = function(e, t, n, r, i) {
            var o = s("easing." + e, {
                easeOut: new t,
                easeIn: new n,
                easeInOut: new r
            },
            true);
            u(o, e);
            return o
        },
        f = function(e, t, n) {
            this.t = e;
            this.v = t;
            if (n) {
                this.next = n;
                n.prev = this;
                this.c = n.v - t;
                this.gap = n.t - e
            }
        },
        l = function(t, n) {
            var r = s("easing." + t,
            function(e) {
                this._p1 = e || e === 0 ? e: 1.70158;
                this._p2 = this._p1 * 1.525
            },
            true),
            i = r.prototype = new e;
            i.constructor = r;
            i.getRatio = n;
            i.config = function(e) {
                return new r(e)
            };
            return r
        },
        c = a("Back", l("BackOut",
        function(e) {
            return (e = e - 1) * e * ((this._p1 + 1) * e + this._p1) + 1
        }), l("BackIn",
        function(e) {
            return e * e * ((this._p1 + 1) * e - this._p1)
        }), l("BackInOut",
        function(e) {
            return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
        })),
        h = s("easing.SlowMo",
        function(e, t, n) {
            t = t || t === 0 ? t: .7;
            if (e == null) {
                e = .7
            } else if (e > 1) {
                e = 1
            }
            this._p = e !== 1 ? t: 0;
            this._p1 = (1 - e) / 2;
            this._p2 = e;
            this._p3 = this._p1 + this._p2;
            this._calcEnd = n === true
        },
        true),
        p = h.prototype = new e,
        d,
        v,
        m;
        p.constructor = h;
        p.getRatio = function(e) {
            var t = e + (.5 - e) * this._p;
            if (e < this._p1) {
                return this._calcEnd ? 1 - (e = 1 - e / this._p1) * e: t - (e = 1 - e / this._p1) * e * e * e * t
            } else if (e > this._p3) {
                return this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e: t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e
            }
            return this._calcEnd ? 1 : t
        };
        h.ease = new h(.7, .7);
        p.config = h.config = function(e, t, n) {
            return new h(e, t, n)
        };
        d = s("easing.SteppedEase",
        function(e) {
            e = e || 1;
            this._p1 = 1 / e;
            this._p2 = e + 1
        },
        true);
        p = d.prototype = new e;
        p.constructor = d;
        p.getRatio = function(e) {
            if (e < 0) {
                e = 0
            } else if (e >= 1) {
                e = .999999999
            }
            return (this._p2 * e >> 0) * this._p1
        };
        p.config = d.config = function(e) {
            return new d(e)
        };
        v = s("easing.RoughEase",
        function(t) {
            t = t || {};
            var n = t.taper || "none",
            r = [],
            i = 0,
            s = (t.points || 20) | 0,
            o = s,
            u = t.randomize !== false,
            a = t.clamp === true,
            l = t.template instanceof e ? t.template: null,
            c = typeof t.strength === "number" ? t.strength * .4 : .4,
            h,
            p,
            d,
            v,
            m,
            g;
            while (--o > -1) {
                h = u ? Math.random() : 1 / s * o;
                p = l ? l.getRatio(h) : h;
                if (n === "none") {
                    d = c
                } else if (n === "out") {
                    v = 1 - h;
                    d = v * v * c
                } else if (n === "in") {
                    d = h * h * c
                } else if (h < .5) {
                    v = h * 2;
                    d = v * v * .5 * c
                } else {
                    v = (1 - h) * 2;
                    d = v * v * .5 * c
                }
                if (u) {
                    p += Math.random() * d - d * .5
                } else if (o % 2) {
                    p += d * .5
                } else {
                    p -= d * .5
                }
                if (a) {
                    if (p > 1) {
                        p = 1
                    } else if (p < 0) {
                        p = 0
                    }
                }
                r[i++] = {
                    x: h,
                    y: p
                }
            }
            r.sort(function(e, t) {
                return e.x - t.x
            });
            g = new f(1, 1, null);
            o = s;
            while (--o > -1) {
                m = r[o];
                g = new f(m.x, m.y, g)
            }
            this._prev = new f(0, 0, g.t !== 0 ? g: g.next)
        },
        true);
        p = v.prototype = new e;
        p.constructor = v;
        p.getRatio = function(e) {
            var t = this._prev;
            if (e > t.t) {
                while (t.next && e >= t.t) {
                    t = t.next
                }
                t = t.prev
            } else {
                while (t.prev && e <= t.t) {
                    t = t.prev
                }
            }
            this._prev = t;
            return t.v + (e - t.t) / t.gap * t.c
        };
        p.config = function(e) {
            return new v(e)
        };
        v.ease = new v;
        a("Bounce", o("BounceOut",
        function(e) {
            if (e < 1 / 2.75) {
                return 7.5625 * e * e
            } else if (e < 2 / 2.75) {
                return 7.5625 * (e -= 1.5 / 2.75) * e + .75
            } else if (e < 2.5 / 2.75) {
                return 7.5625 * (e -= 2.25 / 2.75) * e + .9375
            }
            return 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }), o("BounceIn",
        function(e) {
            if ((e = 1 - e) < 1 / 2.75) {
                return 1 - 7.5625 * e * e
            } else if (e < 2 / 2.75) {
                return 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75)
            } else if (e < 2.5 / 2.75) {
                return 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375)
            }
            return 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }), o("BounceInOut",
        function(e) {
            var t = e < .5;
            if (t) {
                e = 1 - e * 2
            } else {
                e = e * 2 - 1
            }
            if (e < 1 / 2.75) {
                e = 7.5625 * e * e
            } else if (e < 2 / 2.75) {
                e = 7.5625 * (e -= 1.5 / 2.75) * e + .75
            } else if (e < 2.5 / 2.75) {
                e = 7.5625 * (e -= 2.25 / 2.75) * e + .9375
            } else {
                e = 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }
            return t ? (1 - e) * .5 : e * .5 + .5
        }));
        a("Circ", o("CircOut",
        function(e) {
            return Math.sqrt(1 - (e = e - 1) * e)
        }), o("CircIn",
        function(e) {
            return - (Math.sqrt(1 - e * e) - 1)
        }), o("CircInOut",
        function(e) {
            return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }));
        m = function(t, n, i) {
            var o = s("easing." + t,
            function(e, t) {
                this._p1 = e || 1;
                this._p2 = t || i;
                this._p3 = this._p2 / r * (Math.asin(1 / this._p1) || 0)
            },
            true),
            u = o.prototype = new e;
            u.constructor = o;
            u.getRatio = n;
            u.config = function(e, t) {
                return new o(e, t)
            };
            return o
        };
        a("Elastic", m("ElasticOut",
        function(e) {
            return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * r / this._p2) + 1
        },
        .3), m("ElasticIn",
        function(e) {
            return - (this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * r / this._p2))
        },
        .3), m("ElasticInOut",
        function(e) {
            return (e *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * r / this._p2) : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * r / this._p2) * .5 + 1
        },
        .45));
        a("Expo", o("ExpoOut",
        function(e) {
            return 1 - Math.pow(2, -10 * e)
        }), o("ExpoIn",
        function(e) {
            return Math.pow(2, 10 * (e - 1)) - .001
        }), o("ExpoInOut",
        function(e) {
            return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        }));
        a("Sine", o("SineOut",
        function(e) {
            return Math.sin(e * i)
        }), o("SineIn",
        function(e) {
            return - Math.cos(e * i) + 1
        }), o("SineInOut",
        function(e) {
            return - .5 * (Math.cos(Math.PI * e) - 1)
        }));
        s("easing.EaseLookup", {
            find: function(t) {
                return e.map[t]
            }
        },
        true);
        u(t.SlowMo, "SlowMo", "ease,");
        u(v, "RoughEase", "ease,");
        u(d, "SteppedEase", "ease,");
        return c
    },
    true)
}); (function(e) {
    "use strict";
    var t = e.GreenSockGlobals || e,
    n = function(e) {
        var n = e.split("."),
        r = t,
        i;
        for (i = 0; i < n.length; i++) {
            r[n[i]] = r = r[n[i]] || {}
        }
        return r
    },
    r = n("com.greensock"),
    i = [].slice,
    s = function() {},
    o,
    u,
    a,
    f,
    l,
    c = {},
    h = function(r, i, s, o) {
        this.sc = c[r] ? c[r].sc: [];
        c[r] = this;
        this.gsClass = null;
        this.func = s;
        var u = [];
        this.check = function(a) {
            var f = i.length,
            l = f,
            p, d, v, m;
            while (--f > -1) {
                if ((p = c[i[f]] || new h(i[f], [])).gsClass) {
                    u[f] = p.gsClass;
                    l--
                } else if (a) {
                    p.sc.push(this)
                }
            }
            if (l === 0 && s) {
                d = ("com.greensock." + r).split(".");
                v = d.pop();
                m = n(d.join("."))[v] = this.gsClass = s.apply(s, u);
                if (o) {
                    t[v] = m;
                    if (typeof define === "function" && define.amd) {
                        define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/": "") + r.split(".").join("/"), [],
                        function() {
                            return m
                        })
                    } else if (typeof module !== "undefined" && module.exports) {
                        module.exports = m
                    }
                }
                for (f = 0; f < this.sc.length; f++) {
                    this.sc[f].check()
                }
            }
        };
        this.check(true)
    },
    p = e._gsDefine = function(e, t, n, r) {
        return new h(e, t, n, r)
    },
    d = r._class = function(e, t, n) {
        t = t ||
        function() {};
        p(e, [],
        function() {
            return t
        },
        n);
        return t
    };
    p.globals = t;
    var v = [0, 0, 1, 1],
    m = [],
    g = d("easing.Ease",
    function(e, t, n, r) {
        this._func = e;
        this._type = n || 0;
        this._power = r || 0;
        this._params = t ? v.concat(t) : v
    },
    true),
    y = g.map = {},
    b = g.register = function(e, t, n, i) {
        var s = t.split(","),
        o = s.length,
        u = (n || "easeIn,easeOut,easeInOut").split(","),
        a,
        f,
        l,
        c;
        while (--o > -1) {
            f = s[o];
            a = i ? d("easing." + f, null, true) : r.easing[f] || {};
            l = u.length;
            while (--l > -1) {
                c = u[l];
                y[f + "." + c] = y[c + f] = a[c] = e.getRatio ? e: e[c] || new e
            }
        }
    };
    a = g.prototype;
    a._calcEnd = false;
    a.getRatio = function(e) {
        if (this._func) {
            this._params[0] = e;
            return this._func.apply(null, this._params)
        }
        var t = this._type,
        n = this._power,
        r = t === 1 ? 1 - e: t === 2 ? e: e < .5 ? e * 2 : (1 - e) * 2;
        if (n === 1) {
            r *= r
        } else if (n === 2) {
            r *= r * r
        } else if (n === 3) {
            r *= r * r * r
        } else if (n === 4) {
            r *= r * r * r * r
        }
        return t === 1 ? 1 - r: t === 2 ? r: e < .5 ? r / 2 : 1 - r / 2
    };
    o = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
    u = o.length;
    while (--u > -1) {
        a = o[u] + ",Power" + u;
        b(new g(null, null, 1, u), a, "easeOut", true);
        b(new g(null, null, 2, u), a, "easeIn" + (u === 0 ? ",easeNone": ""));
        b(new g(null, null, 3, u), a, "easeInOut")
    }
    y.linear = r.easing.Linear.easeIn;
    y.swing = r.easing.Quad.easeInOut;
    var w = d("events.EventDispatcher",
    function(e) {
        this._listeners = {};
        this._eventTarget = e || this
    });
    a = w.prototype;
    a.addEventListener = function(e, t, n, r, i) {
        i = i || 0;
        var s = this._listeners[e],
        o = 0,
        u,
        a;
        if (s == null) {
            this._listeners[e] = s = []
        }
        a = s.length;
        while (--a > -1) {
            u = s[a];
            if (u.c === t && u.s === n) {
                s.splice(a, 1)
            } else if (o === 0 && u.pr < i) {
                o = a + 1
            }
        }
        s.splice(o, 0, {
            c: t,
            s: n,
            up: r,
            pr: i
        });
        if (this === f && !l) {
            f.wake()
        }
    };
    a.removeEventListener = function(e, t) {
        var n = this._listeners[e],
        r;
        if (n) {
            r = n.length;
            while (--r > -1) {
                if (n[r].c === t) {
                    n.splice(r, 1);
                    return
                }
            }
        }
    };
    a.dispatchEvent = function(e) {
        var t = this._listeners[e],
        n,
        r,
        i;
        if (t) {
            n = t.length;
            r = this._eventTarget;
            while (--n > -1) {
                i = t[n];
                if (i.up) {
                    i.c.call(i.s || r, {
                        type: e,
                        target: r
                    })
                } else {
                    i.c.call(i.s || r)
                }
            }
        }
    };
    var E = e.requestAnimationFrame,
    S = e.cancelAnimationFrame,
    x = Date.now ||
    function() {
        return (new Date).getTime()
    };
    o = ["ms", "moz", "webkit", "o"];
    u = o.length;
    while (--u > -1 && !E) {
        E = e[o[u] + "RequestAnimationFrame"];
        S = e[o[u] + "CancelAnimationFrame"] || e[o[u] + "CancelRequestAnimationFrame"]
    }
    d("Ticker",
    function(e, t) {
        var n = this,
        r = x(),
        i = t !== false && E,
        o,
        u,
        a,
        c,
        h,
        p = function(e) {
            n.time = (x() - r) / 1e3;
            var t = a,
            i = n.time - h;
            if (!o || i > 0 || e === true) {
                n.frame++;
                h += i + (i >= c ? .004 : c - i);
                n.dispatchEvent("tick")
            }
            if (e !== true && t === a) {
                a = u(p)
            }
        };
        w.call(n);
        this.time = this.frame = 0;
        this.tick = function() {
            p(true)
        };
        this.sleep = function() {
            if (a == null) {
                return
            }
            if (!i || !S) {
                clearTimeout(a)
            } else {
                S(a)
            }
            u = s;
            a = null;
            if (n === f) {
                l = false
            }
        };
        this.wake = function() {
            if (a !== null) {
                n.sleep()
            }
            u = o === 0 ? s: !i || !E ?
            function(e) {
                return setTimeout(e, (h - n.time) * 1e3 + 1 | 0)
            }: E;
            if (n === f) {
                l = true
            }
            p(2)
        };
        this.fps = function(e) {
            if (!arguments.length) {
                return o
            }
            o = e;
            c = 1 / (o || 60);
            h = this.time + c;
            n.wake()
        };
        this.useRAF = function(e) {
            if (!arguments.length) {
                return i
            }
            n.sleep();
            i = e;
            n.fps(o)
        };
        n.fps(e);
        setTimeout(function() {
            if (i && (!a || n.frame < 5)) {
                n.useRAF(false)
            }
        },
        1500)
    });
    a = r.Ticker.prototype = new r.events.EventDispatcher;
    a.constructor = r.Ticker;
    var T = d("core.Animation",
    function(e, t) {
        this.vars = t || {};
        this._duration = this._totalDuration = e || 0;
        this._delay = Number(this.vars.delay) || 0;
        this._timeScale = 1;
        this._active = this.vars.immediateRender === true;
        this.data = this.vars.data;
        this._reversed = this.vars.reversed === true;
        if (!B) {
            return
        }
        if (!l) {
            f.wake()
        }
        var n = this.vars.useFrames ? H: B;
        n.add(this, n._time);
        if (this.vars.paused) {
            this.paused(true)
        }
    });
    f = T.ticker = new r.Ticker;
    a = T.prototype;
    a._dirty = a._gc = a._initted = a._paused = false;
    a._totalTime = a._time = 0;
    a._rawPrevTime = -1;
    a._next = a._last = a._onUpdate = a._timeline = a.timeline = null;
    a._paused = false;
    a.play = function(e, t) {
        if (arguments.length) {
            this.seek(e, t)
        }
        return this.reversed(false).paused(false)
    };
    a.pause = function(e, t) {
        if (arguments.length) {
            this.seek(e, t)
        }
        return this.paused(true)
    };
    a.resume = function(e, t) {
        if (arguments.length) {
            this.seek(e, t)
        }
        return this.paused(false)
    };
    a.seek = function(e, t) {
        return this.totalTime(Number(e), t !== false)
    };
    a.restart = function(e, t) {
        return this.reversed(false).paused(false).totalTime(e ? -this._delay: 0, t !== false, true)
    };
    a.reverse = function(e, t) {
        if (arguments.length) {
            this.seek(e || this.totalDuration(), t)
        }
        return this.reversed(true).paused(false)
    };
    a.render = function() {};
    a.invalidate = function() {
        return this
    };
    a._enabled = function(e, t) {
        if (!l) {
            f.wake()
        }
        this._gc = !e;
        this._active = e && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration;
        if (t !== true) {
            if (e && !this.timeline) {
                this._timeline.add(this, this._startTime - this._delay)
            } else if (!e && this.timeline) {
                this._timeline._remove(this, true)
            }
        }
        return false
    };
    a._kill = function(e, t) {
        return this._enabled(false, false)
    };
    a.kill = function(e, t) {
        this._kill(e, t);
        return this
    };
    a._uncache = function(e) {
        var t = e ? this: this.timeline;
        while (t) {
            t._dirty = true;
            t = t.timeline
        }
        return this
    };
    a.eventCallback = function(e, t, n, r) {
        if (e == null) {
            return null
        } else if (e.substr(0, 2) === "on") {
            var i = this.vars,
            s;
            if (arguments.length === 1) {
                return i[e]
            }
            if (t == null) {
                delete i[e]
            } else {
                i[e] = t;
                i[e + "Params"] = n;
                i[e + "Scope"] = r;
                if (n) {
                    s = n.length;
                    while (--s > -1) {
                        if (n[s] === "{self}") {
                            n = i[e + "Params"] = n.concat();
                            n[s] = this
                        }
                    }
                }
            }
            if (e === "onUpdate") {
                this._onUpdate = t
            }
        }
        return this
    };
    a.delay = function(e) {
        if (!arguments.length) {
            return this._delay
        }
        if (this._timeline.smoothChildTiming) {
            this.startTime(this._startTime + e - this._delay)
        }
        this._delay = e;
        return this
    };
    a.duration = function(e) {
        if (!arguments.length) {
            this._dirty = false;
            return this._duration
        }
        this._duration = this._totalDuration = e;
        this._uncache(true);
        if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (e !== 0) {
            this.totalTime(this._totalTime * (e / this._duration), true)
        }
        return this
    };
    a.totalDuration = function(e) {
        this._dirty = false;
        return ! arguments.length ? this._totalDuration: this.duration(e)
    };
    a.time = function(e, t) {
        if (!arguments.length) {
            return this._time
        }
        if (this._dirty) {
            this.totalDuration()
        }
        return this.totalTime(e > this._duration ? this._duration: e, t)
    };
    a.totalTime = function(e, t, n) {
        if (!l) {
            f.wake()
        }
        if (!arguments.length) {
            return this._totalTime
        }
        if (this._timeline) {
            if (e < 0 && !n) {
                e += this.totalDuration()
            }
            if (this._timeline.smoothChildTiming) {
                if (this._dirty) {
                    this.totalDuration()
                }
                var r = this._totalDuration,
                i = this._timeline;
                if (e > r && !n) {
                    e = r
                }
                this._startTime = (this._paused ? this._pauseTime: i._time) - (!this._reversed ? e: r - e) / this._timeScale;
                if (!i._dirty) {
                    this._uncache(false)
                }
                if (!i._active) {
                    while (i._timeline) {
                        i.totalTime(i._totalTime, true);
                        i = i._timeline
                    }
                }
            }
            if (this._gc) {
                this._enabled(true, false)
            }
            if (this._totalTime !== e) {
                this.render(e, t, false)
            }
        }
        return this
    };
    a.startTime = function(e) {
        if (!arguments.length) {
            return this._startTime
        }
        if (e !== this._startTime) {
            this._startTime = e;
            if (this.timeline) if (this.timeline._sortChildren) {
                this.timeline.add(this, e - this._delay)
            }
        }
        return this
    };
    a.timeScale = function(e) {
        if (!arguments.length) {
            return this._timeScale
        }
        e = e || 1e-6;
        if (this._timeline && this._timeline.smoothChildTiming) {
            var t = this._pauseTime,
            n = t || t === 0 ? t: this._timeline.totalTime();
            this._startTime = n - (n - this._startTime) * this._timeScale / e
        }
        this._timeScale = e;
        return this._uncache(false)
    };
    a.reversed = function(e) {
        if (!arguments.length) {
            return this._reversed
        }
        if (e != this._reversed) {
            this._reversed = e;
            this.totalTime(this._totalTime, true)
        }
        return this
    };
    a.paused = function(e) {
        if (!arguments.length) {
            return this._paused
        }
        if (e != this._paused) if (this._timeline) {
            if (!l && !e) {
                f.wake()
            }
            var t = this._timeline.rawTime(),
            n = t - this._pauseTime;
            if (!e && this._timeline.smoothChildTiming) {
                this._startTime += n;
                this._uncache(false)
            }
            this._pauseTime = e ? t: null;
            this._paused = e;
            this._active = !e && this._totalTime > 0 && this._totalTime < this._totalDuration;
            if (!e && n !== 0 && this._duration !== 0) {
                this.render(this._totalTime, true, true)
            }
        }
        if (this._gc && !e) {
            this._enabled(true, false)
        }
        return this
    };
    var N = d("core.SimpleTimeline",
    function(e) {
        T.call(this, 0, e);
        this.autoRemoveChildren = this.smoothChildTiming = true
    });
    a = N.prototype = new T;
    a.constructor = N;
    a.kill()._gc = false;
    a._first = a._last = null;
    a._sortChildren = false;
    a.add = a.insert = function(e, t, n, r) {
        var i, s;
        e._startTime = Number(t || 0) + e._delay;
        if (e._paused) if (this !== e._timeline) {
            e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale
        }
        if (e.timeline) {
            e.timeline._remove(e, true)
        }
        e.timeline = e._timeline = this;
        if (e._gc) {
            e._enabled(true, true)
        }
        i = this._last;
        if (this._sortChildren) {
            s = e._startTime;
            while (i && i._startTime > s) {
                i = i._prev
            }
        }
        if (i) {
            e._next = i._next;
            i._next = e
        } else {
            e._next = this._first;
            this._first = e
        }
        if (e._next) {
            e._next._prev = e
        } else {
            this._last = e
        }
        e._prev = i;
        if (this._timeline) {
            this._uncache(true)
        }
        return this
    };
    a._remove = function(e, t) {
        if (e.timeline === this) {
            if (!t) {
                e._enabled(false, true)
            }
            e.timeline = null;
            if (e._prev) {
                e._prev._next = e._next
            } else if (this._first === e) {
                this._first = e._next
            }
            if (e._next) {
                e._next._prev = e._prev
            } else if (this._last === e) {
                this._last = e._prev
            }
            if (this._timeline) {
                this._uncache(true)
            }
        }
        return this
    };
    a.render = function(e, t, n) {
        var r = this._first,
        i;
        this._totalTime = this._time = this._rawPrevTime = e;
        while (r) {
            i = r._next;
            if (r._active || e >= r._startTime && !r._paused) {
                if (!r._reversed) {
                    r.render((e - r._startTime) * r._timeScale, t, n)
                } else {
                    r.render((!r._dirty ? r._totalDuration: r.totalDuration()) - (e - r._startTime) * r._timeScale, t, n)
                }
            }
            r = i
        }
    };
    a.rawTime = function() {
        if (!l) {
            f.wake()
        }
        return this._totalTime
    };
    var C = d("TweenLite",
    function(e, t, n) {
        T.call(this, t, n);
        if (e == null) {
            throw "Cannot tween a null target."
        }
        this.target = e = typeof e !== "string" ? e: C.selector(e) || e;
        var r = e.jquery || e.length && e[0] && e[0].nodeType && e[0].style,
        s = this.vars.overwrite,
        o,
        u,
        a;
        this._overwrite = s = s == null ? P[C.defaultOverwrite] : typeof s === "number" ? s >> 0 : P[s];
        if ((r || e instanceof Array) && typeof e[0] !== "number") {
            this._targets = a = i.call(e, 0);
            this._propLookup = [];
            this._siblings = [];
            for (o = 0; o < a.length; o++) {
                u = a[o];
                if (!u) {
                    a.splice(o--, 1);
                    continue
                } else if (typeof u === "string") {
                    u = a[o--] = C.selector(u);
                    if (typeof u === "string") {
                        a.splice(o + 1, 1)
                    }
                    continue
                } else if (u.length && u[0] && u[0].nodeType && u[0].style) {
                    a.splice(o--, 1);
                    this._targets = a = a.concat(i.call(u, 0));
                    continue
                }
                this._siblings[o] = j(u, this, false);
                if (s === 1) if (this._siblings[o].length > 1) {
                    F(u, this, null, 1, this._siblings[o])
                }
            }
        } else {
            this._propLookup = {};
            this._siblings = j(e, this, false);
            if (s === 1) if (this._siblings.length > 1) {
                F(e, this, null, 1, this._siblings)
            }
        }
        if (this.vars.immediateRender || t === 0 && this._delay === 0 && this.vars.immediateRender !== false) {
            this.render( - this._delay, false, true)
        }
    },
    true),
    k = function(e) {
        return e.length && e[0] && e[0].nodeType && e[0].style
    },
    L = function(e, t) {
        var n = {},
        r;
        for (r in e) {
            if (!D[r] && (!(r in t) || r === "x" || r === "y" || r === "width" || r === "height" || r === "className") && (!O[r] || O[r] && O[r]._autoCSS)) {
                n[r] = e[r];
                delete e[r]
            }
        }
        e.css = n
    };
    a = C.prototype = new T;
    a.constructor = C;
    a.kill()._gc = false;
    a.ratio = 0;
    a._firstPT = a._targets = a._overwrittenProps = a._startAt = null;
    a._notifyPluginsOfEnabled = false;
    C.version = "1.9.7";
    C.defaultEase = a._ease = new g(null, null, 1, 1);
    C.defaultOverwrite = "auto";
    C.ticker = f;
    C.autoSleep = true;
    C.selector = e.$ || e.jQuery ||
    function(t) {
        if (e.$) {
            C.selector = e.$;
            return e.$(t)
        }
        return e.document ? e.document.getElementById(t.charAt(0) === "#" ? t.substr(1) : t) : t
    };
    var A = C._internals = {},
    O = C._plugins = {},
    M = C._tweenLookup = {},
    _ = 0,
    D = A.reservedProps = {
        ease: 1,
        delay: 1,
        overwrite: 1,
        onComplete: 1,
        onCompleteParams: 1,
        onCompleteScope: 1,
        useFrames: 1,
        runBackwards: 1,
        startAt: 1,
        onUpdate: 1,
        onUpdateParams: 1,
        onUpdateScope: 1,
        onStart: 1,
        onStartParams: 1,
        onStartScope: 1,
        onReverseComplete: 1,
        onReverseCompleteParams: 1,
        onReverseCompleteScope: 1,
        onRepeat: 1,
        onRepeatParams: 1,
        onRepeatScope: 1,
        easeParams: 1,
        yoyo: 1,
        immediateRender: 1,
        repeat: 1,
        repeatDelay: 1,
        data: 1,
        paused: 1,
        reversed: 1,
        autoCSS: 1
    },
    P = {
        none: 0,
        all: 1,
        auto: 2,
        concurrent: 3,
        allOnStart: 4,
        preexisting: 5,
        "true": 1,
        "false": 0
    },
    H = T._rootFramesTimeline = new N,
    B = T._rootTimeline = new N;
    B._startTime = f.time;
    H._startTime = f.frame;
    B._active = H._active = true;
    T._updateRoot = function() {
        B.render((f.time - B._startTime) * B._timeScale, false, false);
        H.render((f.frame - H._startTime) * H._timeScale, false, false);
        if (! (f.frame % 120)) {
            var e, t, n;
            for (n in M) {
                t = M[n].tweens;
                e = t.length;
                while (--e > -1) {
                    if (t[e]._gc) {
                        t.splice(e, 1)
                    }
                }
                if (t.length === 0) {
                    delete M[n]
                }
            }
            n = B._first;
            if (!n || n._paused) if (C.autoSleep && !H._first && f._listeners.tick.length === 1) {
                while (n && n._paused) {
                    n = n._next
                }
                if (!n) {
                    f.sleep()
                }
            }
        }
    };
    f.addEventListener("tick", T._updateRoot);
    var j = function(e, t, n) {
        var r = e._gsTweenID,
        i, s;
        if (!M[r || (e._gsTweenID = r = "t" + _++)]) {
            M[r] = {
                target: e,
                tweens: []
            }
        }
        if (t) {
            i = M[r].tweens;
            i[s = i.length] = t;
            if (n) {
                while (--s > -1) {
                    if (i[s] === t) {
                        i.splice(s, 1)
                    }
                }
            }
        }
        return M[r].tweens
    },
    F = function(e, t, n, r, i) {
        var s, o, u, a;
        if (r === 1 || r >= 4) {
            a = i.length;
            for (s = 0; s < a; s++) {
                if ((u = i[s]) !== t) {
                    if (!u._gc) if (u._enabled(false, false)) {
                        o = true
                    }
                } else if (r === 5) {
                    break
                }
            }
            return o
        }
        var f = t._startTime + 1e-10,
        l = [],
        c = 0,
        h = t._duration === 0,
        p;
        s = i.length;
        while (--s > -1) {
            if ((u = i[s]) === t || u._gc || u._paused) {} else if (u._timeline !== t._timeline) {
                p = p || I(t, 0, h);
                if (I(u, p, h) === 0) {
                    l[c++] = u
                }
            } else if (u._startTime <= f) if (u._startTime + u.totalDuration() / u._timeScale + 1e-10 > f) if (! ((h || !u._initted) && f - u._startTime <= 2e-10)) {
                l[c++] = u
            }
        }
        s = c;
        while (--s > -1) {
            u = l[s];
            if (r === 2) if (u._kill(n, e)) {
                o = true
            }
            if (r !== 2 || !u._firstPT && u._initted) {
                if (u._enabled(false, false)) {
                    o = true
                }
            }
        }
        return o
    },
    I = function(e, t, n) {
        var r = e._timeline,
        i = r._timeScale,
        s = e._startTime,
        o = 1e-10;
        while (r._timeline) {
            s += r._startTime;
            i *= r._timeScale;
            if (r._paused) {
                return - 100
            }
            r = r._timeline
        }
        s /= i;
        return s > t ? s - t: n && s === t || !e._initted && s - t < 2 * o ? o: (s += e.totalDuration() / e._timeScale / i) > t + o ? 0 : s - t - o
    };
    a._init = function() {
        var e = this.vars,
        t = this._overwrittenProps,
        n = this._duration,
        r = e.ease,
        i, s, o, u;
        if (e.startAt) {
            e.startAt.overwrite = 0;
            e.startAt.immediateRender = true;
            this._startAt = C.to(this.target, 0, e.startAt);
            if (e.immediateRender) {
                this._startAt = null;
                if (this._time === 0 && n !== 0) {
                    return
                }
            }
        } else if (e.runBackwards && e.immediateRender && n !== 0) {
            if (this._startAt) {
                this._startAt.render( - 1, true);
                this._startAt = null
            } else if (this._time === 0) {
                o = {};
                for (u in e) {
                    if (!D[u] || u === "autoCSS") {
                        o[u] = e[u]
                    }
                }
                o.overwrite = 0;
                this._startAt = C.to(this.target, 0, o);
                return
            }
        }
        if (!r) {
            this._ease = C.defaultEase
        } else if (r instanceof g) {
            this._ease = e.easeParams instanceof Array ? r.config.apply(r, e.easeParams) : r
        } else {
            this._ease = typeof r === "function" ? new g(r, e.easeParams) : y[r] || C.defaultEase
        }
        this._easeType = this._ease._type;
        this._easePower = this._ease._power;
        this._firstPT = null;
        if (this._targets) {
            i = this._targets.length;
            while (--i > -1) {
                if (this._initProps(this._targets[i], this._propLookup[i] = {},
                this._siblings[i], t ? t[i] : null)) {
                    s = true
                }
            }
        } else {
            s = this._initProps(this.target, this._propLookup, this._siblings, t)
        }
        if (s) {
            C._onPluginEvent("_onInitAllProps", this)
        }
        if (t) if (!this._firstPT) if (typeof this.target !== "function") {
            this._enabled(false, false)
        }
        if (e.runBackwards) {
            o = this._firstPT;
            while (o) {
                o.s += o.c;
                o.c = -o.c;
                o = o._next
            }
        }
        this._onUpdate = e.onUpdate;
        this._initted = true
    };
    a._initProps = function(e, t, n, r) {
        var i, s, o, u, a, f, l;
        if (e == null) {
            return false
        }
        if (!this.vars.css) if (e.style) if (e.nodeType) if (O.css) if (this.vars.autoCSS !== false) {
            L(this.vars, e)
        }
        for (i in this.vars) {
            if (D[i]) {
                if (i === "onStartParams" || i === "onUpdateParams" || i === "onCompleteParams" || i === "onReverseCompleteParams" || i === "onRepeatParams") if (a = this.vars[i]) {
                    s = a.length;
                    while (--s > -1) {
                        if (a[s] === "{self}") {
                            a = this.vars[i] = a.concat();
                            a[s] = this
                        }
                    }
                }
            } else if (O[i] && (u = new O[i])._onInitTween(e, this.vars[i], this)) {
                this._firstPT = f = {
                    _next: this._firstPT,
                    t: u,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: true,
                    n: i,
                    pg: true,
                    pr: u._priority
                };
                s = u._overwriteProps.length;
                while (--s > -1) {
                    t[u._overwriteProps[s]] = this._firstPT
                }
                if (u._priority || u._onInitAllProps) {
                    o = true
                }
                if (u._onDisable || u._onEnable) {
                    this._notifyPluginsOfEnabled = true
                }
            } else {
                this._firstPT = t[i] = f = {
                    _next: this._firstPT,
                    t: e,
                    p: i,
                    f: typeof e[i] === "function",
                    n: i,
                    pg: false,
                    pr: 0
                };
                f.s = !f.f ? parseFloat(e[i]) : e[i.indexOf("set") || typeof e["get" + i.substr(3)] !== "function" ? i: "get" + i.substr(3)]();
                l = this.vars[i];
                f.c = typeof l === "string" && l.charAt(1) === "=" ? parseInt(l.charAt(0) + "1", 10) * Number(l.substr(2)) : Number(l) - f.s || 0
            }
            if (f) if (f._next) {
                f._next._prev = f
            }
        }
        if (r) if (this._kill(r, e)) {
            return this._initProps(e, t, n, r)
        }
        if (this._overwrite > 1) if (this._firstPT) if (n.length > 1) if (F(e, this, t, this._overwrite, n)) {
            this._kill(t, e);
            return this._initProps(e, t, n, r)
        }
        return o
    };
    a.render = function(e, t, n) {
        var r = this._time,
        i, s, o;
        if (e >= this._duration) {
            this._totalTime = this._time = this._duration;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
            if (!this._reversed) {
                i = true;
                s = "onComplete"
            }
            if (this._duration === 0) {
                if (e === 0 || this._rawPrevTime < 0) if (this._rawPrevTime !== e) {
                    n = true;
                    if (this._rawPrevTime > 0) {
                        s = "onReverseComplete";
                        if (t) {
                            e = -1
                        }
                    }
                }
                this._rawPrevTime = e
            }
        } else if (e < 1e-7) {
            this._totalTime = this._time = 0;
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
            if (r !== 0 || this._duration === 0 && this._rawPrevTime > 0) {
                s = "onReverseComplete";
                i = this._reversed
            }
            if (e < 0) {
                this._active = false;
                if (this._duration === 0) {
                    if (this._rawPrevTime >= 0) {
                        n = true
                    }
                    this._rawPrevTime = e
                }
            } else if (!this._initted) {
                n = true
            }
        } else {
            this._totalTime = this._time = e;
            if (this._easeType) {
                var u = e / this._duration,
                a = this._easeType,
                f = this._easePower;
                if (a === 1 || a === 3 && u >= .5) {
                    u = 1 - u
                }
                if (a === 3) {
                    u *= 2
                }
                if (f === 1) {
                    u *= u
                } else if (f === 2) {
                    u *= u * u
                } else if (f === 3) {
                    u *= u * u * u
                } else if (f === 4) {
                    u *= u * u * u * u
                }
                if (a === 1) {
                    this.ratio = 1 - u
                } else if (a === 2) {
                    this.ratio = u
                } else if (e / this._duration < .5) {
                    this.ratio = u / 2
                } else {
                    this.ratio = 1 - u / 2
                }
            } else {
                this.ratio = this._ease.getRatio(e / this._duration)
            }
        }
        if (this._time === r && !n) {
            return
        } else if (!this._initted) {
            this._init();
            if (!this._initted) {
                return
            }
            if (this._time && !i) {
                this.ratio = this._ease.getRatio(this._time / this._duration)
            } else if (i && this._ease._calcEnd) {
                this.ratio = this._ease.getRatio(this._time === 0 ? 0 : 1)
            }
        }
        if (!this._active) if (!this._paused) {
            this._active = true
        }
        if (r === 0) {
            if (this._startAt) {
                if (e >= 0) {
                    this._startAt.render(e, t, n)
                } else if (!s) {
                    s = "_dummyGS"
                }
            }
            if (this.vars.onStart) if (this._time !== 0 || this._duration === 0) if (!t) {
                this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || m)
            }
        }
        o = this._firstPT;
        while (o) {
            if (o.f) {
                o.t[o.p](o.c * this.ratio + o.s)
            } else {
                o.t[o.p] = o.c * this.ratio + o.s
            }
            o = o._next
        }
        if (this._onUpdate) {
            if (e < 0) if (this._startAt) {
                this._startAt.render(e, t, n)
            }
            if (!t) {
                this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || m)
            }
        }
        if (s) if (!this._gc) {
            if (e < 0 && this._startAt && !this._onUpdate) {
                this._startAt.render(e, t, n)
            }
            if (i) {
                if (this._timeline.autoRemoveChildren) {
                    this._enabled(false, false)
                }
                this._active = false
            }
            if (!t && this.vars[s]) {
                this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || m)
            }
        }
    };
    a._kill = function(e, t) {
        if (e === "all") {
            e = null
        }
        if (e == null) if (t == null || t === this.target) {
            return this._enabled(false, false)
        }
        t = typeof t !== "string" ? t || this._targets || this.target: C.selector(t) || t;
        var n, r, i, s, o, u, a, f;
        if ((t instanceof Array || k(t)) && typeof t[0] !== "number") {
            n = t.length;
            while (--n > -1) {
                if (this._kill(e, t[n])) {
                    u = true
                }
            }
        } else {
            if (this._targets) {
                n = this._targets.length;
                while (--n > -1) {
                    if (t === this._targets[n]) {
                        o = this._propLookup[n] || {};
                        this._overwrittenProps = this._overwrittenProps || [];
                        r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {}: "all";
                        break
                    }
                }
            } else if (t !== this.target) {
                return false
            } else {
                o = this._propLookup;
                r = this._overwrittenProps = e ? this._overwrittenProps || {}: "all"
            }
            if (o) {
                a = e || o;
                f = e !== r && r !== "all" && e !== o && (e == null || e._tempKill !== true);
                for (i in a) {
                    if (s = o[i]) {
                        if (s.pg && s.t._kill(a)) {
                            u = true
                        }
                        if (!s.pg || s.t._overwriteProps.length === 0) {
                            if (s._prev) {
                                s._prev._next = s._next
                            } else if (s === this._firstPT) {
                                this._firstPT = s._next
                            }
                            if (s._next) {
                                s._next._prev = s._prev
                            }
                            s._next = s._prev = null
                        }
                        delete o[i]
                    }
                    if (f) {
                        r[i] = 1
                    }
                }
                if (!this._firstPT && this._initted) {
                    this._enabled(false, false)
                }
            }
        }
        return u
    };
    a.invalidate = function() {
        if (this._notifyPluginsOfEnabled) {
            C._onPluginEvent("_onDisable", this)
        }
        this._firstPT = null;
        this._overwrittenProps = null;
        this._onUpdate = null;
        this._startAt = null;
        this._initted = this._active = this._notifyPluginsOfEnabled = false;
        this._propLookup = this._targets ? {}: [];
        return this
    };
    a._enabled = function(e, t) {
        if (!l) {
            f.wake()
        }
        if (e && this._gc) {
            var n = this._targets,
            r;
            if (n) {
                r = n.length;
                while (--r > -1) {
                    this._siblings[r] = j(n[r], this, true)
                }
            } else {
                this._siblings = j(this.target, this, true)
            }
        }
        T.prototype._enabled.call(this, e, t);
        if (this._notifyPluginsOfEnabled) if (this._firstPT) {
            return C._onPluginEvent(e ? "_onEnable": "_onDisable", this)
        }
        return false
    };
    C.to = function(e, t, n) {
        return new C(e, t, n)
    };
    C.from = function(e, t, n) {
        n.runBackwards = true;
        n.immediateRender = n.immediateRender != false;
        return new C(e, t, n)
    };
    C.fromTo = function(e, t, n, r) {
        r.startAt = n;
        r.immediateRender = r.immediateRender != false && n.immediateRender != false;
        return new C(e, t, r)
    };
    C.delayedCall = function(e, t, n, r, i) {
        return new C(t, 0, {
            delay: e,
            onComplete: t,
            onCompleteParams: n,
            onCompleteScope: r,
            onReverseComplete: t,
            onReverseCompleteParams: n,
            onReverseCompleteScope: r,
            immediateRender: false,
            useFrames: i,
            overwrite: 0
        })
    };
    C.set = function(e, t) {
        return new C(e, 0, t)
    };
    C.killTweensOf = C.killDelayedCallsTo = function(e, t) {
        var n = C.getTweensOf(e),
        r = n.length;
        while (--r > -1) {
            n[r]._kill(t, e)
        }
    };
    C.getTweensOf = function(e) {
        if (e == null) {
            return []
        }
        e = typeof e !== "string" ? e: C.selector(e) || e;
        var t, n, r, i;
        if ((e instanceof Array || k(e)) && typeof e[0] !== "number") {
            t = e.length;
            n = [];
            while (--t > -1) {
                n = n.concat(C.getTweensOf(e[t]))
            }
            t = n.length;
            while (--t > -1) {
                i = n[t];
                r = t;
                while (--r > -1) {
                    if (i === n[r]) {
                        n.splice(t, 1)
                    }
                }
            }
        } else {
            n = j(e).concat();
            t = n.length;
            while (--t > -1) {
                if (n[t]._gc) {
                    n.splice(t, 1)
                }
            }
        }
        return n
    };
    var q = d("plugins.TweenPlugin",
    function(e, t) {
        this._overwriteProps = (e || "").split(",");
        this._propName = this._overwriteProps[0];
        this._priority = t || 0;
        this._super = q.prototype
    },
    true);
    a = q.prototype;
    q.version = "1.9.1";
    q.API = 2;
    a._firstPT = null;
    a._addTween = function(e, t, n, r, i, s) {
        var o, u;
        if (r != null && (o = typeof r === "number" || r.charAt(1) !== "=" ? Number(r) - n: parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)))) {
            this._firstPT = u = {
                _next: this._firstPT,
                t: e,
                p: t,
                s: n,
                c: o,
                f: typeof e[t] === "function",
                n: i || t,
                r: s
            };
            if (u._next) {
                u._next._prev = u
            }
        }
    };
    a.setRatio = function(e) {
        var t = this._firstPT,
        n = 1e-6,
        r;
        while (t) {
            r = t.c * e + t.s;
            if (t.r) {
                r = r + (r > 0 ? .5 : -.5) >> 0
            } else if (r < n) if (r > -n) {
                r = 0
            }
            if (t.f) {
                t.t[t.p](r)
            } else {
                t.t[t.p] = r
            }
            t = t._next
        }
    };
    a._kill = function(e) {
        var t = this._overwriteProps,
        n = this._firstPT,
        r;
        if (e[this._propName] != null) {
            this._overwriteProps = []
        } else {
            r = t.length;
            while (--r > -1) {
                if (e[t[r]] != null) {
                    t.splice(r, 1)
                }
            }
        }
        while (n) {
            if (e[n.n] != null) {
                if (n._next) {
                    n._next._prev = n._prev
                }
                if (n._prev) {
                    n._prev._next = n._next;
                    n._prev = null
                } else if (this._firstPT === n) {
                    this._firstPT = n._next
                }
            }
            n = n._next
        }
        return false
    };
    a._roundProps = function(e, t) {
        var n = this._firstPT;
        while (n) {
            if (e[this._propName] || n.n != null && e[n.n.split(this._propName + "_").join("")]) {
                n.r = t
            }
            n = n._next
        }
    };
    C._onPluginEvent = function(e, t) {
        var n = t._firstPT,
        r, i, s, o, u;
        if (e === "_onInitAllProps") {
            while (n) {
                u = n._next;
                i = s;
                while (i && i.pr > n.pr) {
                    i = i._next
                }
                if (n._prev = i ? i._prev: o) {
                    n._prev._next = n
                } else {
                    s = n
                }
                if (n._next = i) {
                    i._prev = n
                } else {
                    o = n
                }
                n = u
            }
            n = t._firstPT = s
        }
        while (n) {
            if (n.pg) if (typeof n.t[e] === "function") if (n.t[e]()) {
                r = true
            }
            n = n._next
        }
        return r
    };
    q.activate = function(e) {
        var t = e.length;
        while (--t > -1) {
            if (e[t].API === q.API) {
                O[(new e[t])._propName] = e[t]
            }
        }
        return true
    };
    p.plugin = function(e) {
        if (!e || !e.propName || !e.init || !e.API) {
            throw "illegal plugin definition."
        }
        var t = e.propName,
        n = e.priority || 0,
        r = e.overwriteProps,
        i = {
            init: "_onInitTween",
            set: "setRatio",
            kill: "_kill",
            round: "_roundProps",
            initAll: "_onInitAllProps"
        },
        s = d("plugins." + t.charAt(0).toUpperCase() + t.substr(1) + "Plugin",
        function() {
            q.call(this, t, n);
            this._overwriteProps = r || []
        },
        e.global === true),
        o = s.prototype = new q(t),
        u;
        o.constructor = s;
        s.API = e.API;
        for (u in i) {
            if (typeof e[u] === "function") {
                o[i[u]] = e[u]
            }
        }
        s.version = e.version;
        q.activate([s]);
        return s
    };
    o = e._gsQueue;
    if (o) {
        for (u = 0; u < o.length; u++) {
            o[u]()
        }
        for (a in c) {
            if (!c[a].func) {
                e.console.log("GSAP encountered missing dependency: com.greensock." + a)
            }
        }
    }
    l = false
})(window); (function(e) {
    var t = function(e, n, r, i, s) {
        var o = this;
        var u = t.prototype;
        this.imageSource_img = e;
        this.image_sdo = null;
        this.segmentWidth = n;
        this.segmentHeight = r;
        this.totalSegments = i;
        this.animDelay = s || 300;
        this.count = 0;
        this.delayTimerId_int;
        this.isShowed_bl = true;
        this.init = function() {
            this.setWidth(this.segmentWidth);
            this.setHeight(this.segmentHeight);
            this.image_sdo = new FWDR3DCarSimpleDisplayObject("img");
            this.image_sdo.setScreen(this.imageSource_img);
            this.addChild(this.image_sdo);
            this.hide(false)
        };
        this.start = function() {
            clearInterval(this.delayTimerId_int);
            this.delayTimerId_int = setInterval(this.updatePreloader, this.animDelay)
        };
        this.stop = function() {
            clearInterval(this.delayTimerId_int)
        };
        this.updatePreloader = function() {
            o.count++;
            if (o.count > o.totalSegments - 1) o.count = 0;
            var e = o.count * o.segmentWidth;
            o.image_sdo.setX( - e)
        };
        this.show = function() {
            o.setVisible(true);
            o.start();
            FWDR3DCarModTweenMax.killTweensOf(o);
            o.setAlpha(0);
            FWDR3DCarModTweenMax.to(o, 1, {
                alpha: 1
            });
            o.isShowed_bl = true
        };
        this.hide = function(e) {
            if (!o.isShowed_bl) return;
            FWDR3DCarModTweenMax.killTweensOf(o);
            if (e) {
                FWDR3DCarModTweenMax.to(o, 1, {
                    alpha: 0,
                    onComplete: o.onHideComplete
                })
            } else {
                o.setVisible(false);
                o.setAlpha(0);
                o.stop()
            }
            o.isShowed_bl = false
        };
        this.onHideComplete = function() {
            o.setVisible(false);
            o.stop();
            o.dispatchEvent(t.HIDE_COMPLETE)
        };
        this.destroy = function() {
            FWDR3DCarModTweenMax.killTweensOf(o);
            o.stop();
            o.image_sdo.destroy();
            o.imageSource_img = null;
            o.image_sdo = null;
            e = null;
            o.setInnerHTML("");
            u.destroy();
            o = null;
            u = null;
            t.prototype = null
        };
        this.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDR3DCarDisplayObject("div")
    };
    t.HIDE_COMPLETE = "hideComplete";
    t.prototype = null;
    e.FWDR3DCarPreloader = t
})(window); (function(e) {
    var t = function(n, r, i) {
        var s = this;
        var o = t.prototype;
        this.handlerLeftNImg = n.handlerLeftNImg;
        this.handlerLeftSImg = n.handlerLeftSImg;
        this.handlerCenterNImg = n.handlerCenterNImg;
        this.handlerCenterSImg = n.handlerCenterSImg;
        this.handlerRightNImg = n.handlerRightNImg;
        this.handlerRightSImg = n.handlerRightSImg;
        this.trackLeftImg = n.trackLeftImg;
        this.trackCenterImg = n.trackCenterImg;
        this.trackRightImg = n.trackRightImg;
        this.textColorNormal = n.scrollbarTextColorNormal;
        this.textColorSelected = n.scrollbarTextColorSelected;
        this.scrollbarHandlerDO;
        this.scrollbarHandlerLeftNDO;
        this.scrollbarHandlerLeftSDO;
        this.scrollbarHandlerCenterNDO;
        this.scrollbarHandlerCenterSDO;
        this.scrollbarHandlerRightNDO;
        this.scrollbarHandlerRightSDO;
        this.scrollbarHandlerTextDO;
        this.scrollbarHandlerOverDO;
        this.scrollbarTrackDO;
        this.scrollbarTrackLeftDO;
        this.scrollbarTrackCenterDO;
        this.scrollbarTrackRightDO;
        this.scrollbarMaxWidth = n.controlsMaxWidth;
        this.handlerWidth = n.handlerWidth;
        this.trackWidth = n.controlsMaxWidth;
        this.scrollbarHeight = n.trackLeftImg.height;
        this.trackLeftWidth = n.trackLeftImg.width;
        this.handlerLeftWidth = n.handlerLeftNImg.width;
        this.totalItems = r;
        this.curItemId = i;
        this.prevCurItemId;
        this.mouseX = 0;
        this.mouseY = 0;
        this.isPressed = false;
        this.isMobile = FWDR3DCarUtils.isMobile;
        this.hasPointerEvent = FWDR3DCarUtils.hasPointerEvent;
        this.init = function() {
            s.setupMainContainers()
        };
        this.setupMainContainers = function() {
            s.setWidth(s.scrollbarMaxWidth);
            s.setHeight(s.scrollbarHeight);
            s.setTrack();
            s.setHandler();
            if (s.isMobile) {
                if (s.hasPointerEvent) {
                    s.scrollbarHandlerOverDO.screen.addEventListener("MSPointerOver", s.onScrollMouseOver);
                    s.scrollbarHandlerOverDO.screen.addEventListener("MSPointerOut", s.onScrollMouseOut);
                    s.scrollbarHandlerOverDO.screen.addEventListener("MSPointerDown", s.onScrollMouseDown)
                } else {
                    s.scrollbarHandlerOverDO.screen.addEventListener("touchstart", s.onScrollMouseDown)
                }
            } else {
                s.scrollbarHandlerOverDO.setButtonMode(true);
                if (s.screen.addEventListener) {
                    s.scrollbarHandlerOverDO.screen.addEventListener("mouseover", s.onScrollMouseOver);
                    s.scrollbarHandlerOverDO.screen.addEventListener("mouseout", s.onScrollMouseOut);
                    s.scrollbarHandlerOverDO.screen.addEventListener("mousedown", s.onScrollMouseDown);
                    e.addEventListener("mouseup", s.onScrollMouseUp)
                } else {
                    s.scrollbarHandlerOverDO.screen.attachEvent("onmouseover", s.onScrollMouseOver);
                    s.scrollbarHandlerOverDO.screen.attachEvent("onmouseout", s.onScrollMouseOut);
                    s.scrollbarHandlerOverDO.screen.attachEvent("onmousedown", s.onScrollMouseDown);
                    document.attachEvent("onmouseup", s.onScrollMouseUp)
                }
            }
        };
        this.setTrack = function() {
            s.scrollbarTrackDO = new FWDR3DCarDisplayObject("div");
            s.addChild(s.scrollbarTrackDO);
            s.scrollbarTrackDO.setWidth(s.trackWidth);
            s.scrollbarTrackDO.setHeight(s.scrollbarHeight);
            s.scrollbarTrackLeftDO = new FWDR3DCarSimpleDisplayObject("img");
            s.scrollbarTrackLeftDO.setScreen(s.trackLeftImg);
            s.scrollbarTrackDO.addChild(s.scrollbarTrackLeftDO);
            s.scrollbarTrackCenterDO = new FWDR3DCarSimpleDisplayObject("div");
            s.scrollbarTrackCenterDO.screen.style.backgroundImage = "url(" + n.trackCenterPath + ")";
            s.scrollbarTrackCenterDO.screen.style.backgroundRepeat = "repeat-x";
            s.scrollbarTrackDO.addChild(s.scrollbarTrackCenterDO);
            s.scrollbarTrackCenterDO.setWidth(s.trackWidth - 2 * s.trackLeftWidth);
            s.scrollbarTrackCenterDO.setHeight(s.scrollbarHeight);
            s.scrollbarTrackCenterDO.setX(s.trackLeftWidth);
            s.scrollbarTrackRightDO = new FWDR3DCarSimpleDisplayObject("img");
            s.scrollbarTrackRightDO.setScreen(s.trackRightImg);
            s.scrollbarTrackDO.addChild(s.scrollbarTrackRightDO);
            s.scrollbarTrackRightDO.setX(s.trackWidth - s.trackLeftWidth)
        };
        this.setHandler = function() {
            s.scrollbarHandlerDO = new FWDR3DCarDisplayObject("div");
            s.addChild(s.scrollbarHandlerDO);
            s.scrollbarHandlerDO.setWidth(s.handlerWidth);
            s.scrollbarHandlerDO.setHeight(s.scrollbarHeight);
            s.scrollbarHandlerLeftSDO = new FWDR3DCarSimpleDisplayObject("img");
            s.scrollbarHandlerLeftSDO.setScreen(s.handlerLeftSImg);
            s.scrollbarHandlerDO.addChild(s.scrollbarHandlerLeftSDO);
            s.scrollbarHandlerLeftNDO = new FWDR3DCarSimpleDisplayObject("img");
            s.scrollbarHandlerLeftNDO.setScreen(s.handlerLeftNImg);
            s.scrollbarHandlerDO.addChild(s.scrollbarHandlerLeftNDO);
            s.scrollbarHandlerCenterSDO = new FWDR3DCarSimpleDisplayObject("div");
            s.scrollbarHandlerCenterSDO.screen.style.backgroundImage = "url(" + n.handlerCenterSPath + ")";
            s.scrollbarHandlerCenterSDO.screen.style.backgroundRepeat = "repeat-x";
            s.scrollbarHandlerDO.addChild(s.scrollbarHandlerCenterSDO);
            s.scrollbarHandlerCenterSDO.setWidth(s.handlerWidth - 2 * s.handlerLeftWidth);
            s.scrollbarHandlerCenterSDO.setHeight(s.scrollbarHeight);
            s.scrollbarHandlerCenterSDO.setX(s.handlerLeftWidth);
            s.scrollbarHandlerCenterNDO = new FWDR3DCarSimpleDisplayObject("div");
            s.scrollbarHandlerCenterNDO.screen.style.backgroundImage = "url(" + n.handlerCenterNPath + ")";
            s.scrollbarHandlerCenterNDO.screen.style.backgroundRepeat = "repeat-x";
            s.scrollbarHandlerDO.addChild(s.scrollbarHandlerCenterNDO);
            s.scrollbarHandlerCenterNDO.setWidth(s.handlerWidth - 2 * s.handlerLeftWidth);
            s.scrollbarHandlerCenterNDO.setHeight(s.scrollbarHeight);
            s.scrollbarHandlerCenterNDO.setX(s.handlerLeftWidth);
            s.scrollbarHandlerRightSDO = new FWDR3DCarSimpleDisplayObject("img");
            s.scrollbarHandlerRightSDO.setScreen(s.handlerRightSImg);
            s.scrollbarHandlerDO.addChild(s.scrollbarHandlerRightSDO);
            s.scrollbarHandlerRightSDO.setX(s.handlerWidth - s.handlerLeftWidth);
            s.scrollbarHandlerRightNDO = new FWDR3DCarSimpleDisplayObject("img");
            s.scrollbarHandlerRightNDO.setScreen(s.handlerRightNImg);
            s.scrollbarHandlerDO.addChild(s.scrollbarHandlerRightNDO);
            s.scrollbarHandlerRightNDO.setX(s.handlerWidth - s.handlerLeftWidth);
            s.scrollbarHandlerTextDO = new FWDR3DCarDisplayObject("div");
            s.scrollbarHandlerDO.addChild(s.scrollbarHandlerTextDO);
            s.scrollbarHandlerTextDO.getStyle().fontSmoothing = "antialiased";
            s.scrollbarHandlerTextDO.getStyle().webkitFontSmoothing = "antialiased";
            s.scrollbarHandlerTextDO.getStyle().textRendering = "optimizeLegibility";
            s.scrollbarHandlerTextDO.getStyle().fontFamily = "Arial, Helvetica, sans-serif";
            s.scrollbarHandlerTextDO.getStyle().fontSize = "10px";
            s.scrollbarHandlerTextDO.getStyle().color = s.textColorNormal;
            s.scrollbarHandlerTextDO.setInnerHTML(s.curItemId + 1 + "/" + s.totalItems);
            s.setTextPositionId = setTimeout(s.setTextPosition, 10);
            s.scrollbarHandlerOverDO = new FWDR3DCarDisplayObject("div");
            s.scrollbarHandlerDO.addChild(s.scrollbarHandlerOverDO);
            s.scrollbarHandlerOverDO.setWidth(s.handlerWidth);
            s.scrollbarHandlerOverDO.setHeight(s.scrollbarHeight);
            if (FWDR3DCarUtils.isIE) {
                s.scrollbarHandlerOverDO.setBkColor("#000000");
                s.scrollbarHandlerOverDO.setAlpha(.001)
            }
        };
        this.setTextPosition = function() {
            s.scrollbarHandlerTextDO.setX(Math.floor((s.handlerWidth - s.scrollbarHandlerTextDO.getWidth()) / 2));
            s.scrollbarHandlerTextDO.setY(Math.floor((s.scrollbarHeight - s.scrollbarHandlerTextDO.getHeight()) / 2) + 1)
        };
        this.resize = function(e, t) {
            if (e < t + s.scrollbarMaxWidth) {
                if (e - t < s.handlerWidth) {
                    s.resizeTrack(0);
                    s.scrollbarHandlerDO.setY(500)
                } else {
                    s.resizeTrack(Math.floor(e - t));
                    s.scrollbarHandlerDO.setY(0)
                }
            } else if (s.getWidth() < s.scrollbarMaxWidth) {
                s.resizeTrack(Math.floor(s.scrollbarMaxWidth));
                s.scrollbarHandlerDO.setY(0)
            }
            s.scrollbarHandlerDO.setX(Math.floor(s.curItemId * (s.trackWidth - s.handlerWidth) / (s.totalItems - 1)));
            s.scrollbarHandlerTextDO.setInnerHTML(s.curItemId + 1 + "/" + s.totalItems)
        };
        this.resize2 = function() {
            s.resizeTrack(Math.floor(s.scrollbarMaxWidth))
        };
        this.resizeTrack = function(e) {
            s.trackWidth = e;
            s.setWidth(s.trackWidth);
            s.scrollbarTrackDO.setWidth(s.trackWidth);
            s.scrollbarTrackCenterDO.setWidth(Math.floor(s.trackWidth - 2 * s.trackLeftWidth));
            s.scrollbarTrackCenterDO.setX(Math.floor(s.trackLeftWidth));
            s.scrollbarTrackRightDO.setX(Math.floor(s.trackWidth - s.trackLeftWidth))
        };
        this.onScrollMouseOver = function() {
            s.scrollbarOver = true;
            FWDR3DCarModTweenMax.to(s.scrollbarHandlerLeftNDO, .8, {
                alpha: 0,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(s.scrollbarHandlerCenterNDO, .8, {
                alpha: 0,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(s.scrollbarHandlerRightNDO, .8, {
                alpha: 0,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(s.scrollbarHandlerTextDO.screen, .8, {
                css: {
                    color: s.textColorSelected
                },
                ease: Expo.easeOut
            })
        };
        this.onScrollMouseOut = function() {
            s.scrollbarOver = false;
            if (s.isPressed) return;
            FWDR3DCarModTweenMax.to(s.scrollbarHandlerLeftNDO, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(s.scrollbarHandlerCenterNDO, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(s.scrollbarHandlerRightNDO, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(s.scrollbarHandlerTextDO.screen, .8, {
                css: {
                    color: s.textColorNormal
                },
                ease: Expo.easeOut
            })
        };
        this.onScrollMouseDown = function(t) {
            if (t.preventDefault) t.preventDefault();
            var n = FWDR3DCarUtils.getViewportMouseCoordinates(t);
            s.mouseX = n.screenX;
            s.mouseY = n.screenY;
            s.curScrollX = s.scrollbarHandlerDO.getX();
            s.lastPressedX = s.mouseX;
            s.isPressed = true;
            FWDR3DCarModTweenMax.killTweensOf(s.scrollbarHandlerDO);
            if (s.isMobile) {
                if (s.hasPointerEvent) {
                    e.addEventListener("MSPointerMove", s.onScrollMove);
                    e.addEventListener("MSPointerUp", s.onScrollMouseUp)
                } else {
                    e.addEventListener("touchmove", s.onScrollMove);
                    e.addEventListener("touchend", s.onScrollMouseUp)
                }
            } else {
                if (s.screen.addEventListener) e.addEventListener("mousemove", s.onScrollMove);
                else document.attachEvent("onmousemove", s.onScrollMove)
            }
        };
        this.onScrollMove = function(e) {
            var n = FWDR3DCarUtils.getViewportMouseCoordinates(e);
            s.mouseX = n.screenX;
            s.mouseY = n.screenY;
            var r = s.mouseX - s.lastPressedX;
            var i = s.curScrollX + r;
            i = Math.max(i, 0);
            i = Math.min(s.trackWidth - s.handlerWidth, i);
            s.scrollbarHandlerDO.setX(Math.floor(i));
            s.curItemId = Math.floor(i / (s.trackWidth - s.handlerWidth) * s.totalItems);
            if (s.curItemId == s.totalItems) s.curItemId--;
            if (s.prevCurItemId != s.curItemId) {
                s.dispatchEvent(t.MOVE, {
                    id: s.curItemId
                });
                s.scrollbarHandlerTextDO.setInnerHTML(s.curItemId + 1 + "/" + s.totalItems)
            }
            s.prevCurItemId = s.curItemId
        };
        this.onScrollMouseUp = function() {
            s.isPressed = false;
            if (s.isMobile) {
                if (s.hasPointerEvent) {
                    e.removeEventListener("MSPointerUp", s.onScrollMouseUp);
                    e.removeEventListener("MSPointerMove", s.onScrollMove)
                } else {
                    e.removeEventListener("touchend", s.onScrollMouseUp);
                    e.removeEventListener("touchmove", s.onScrollMove)
                }
            } else {
                if (s.screen.addEventListener) e.removeEventListener("mousemove", s.onScrollMove);
                else document.detachEvent("onmousemove", s.onScrollMove)
            }
            if (!s.scrollbarOver && !s.isMobile) s.onScrollMouseOut();
            s.gotoItem2()
        };
        this.gotoItem = function(e, t) {
            s.curItemId = e;
            if (s.prevCurItemId != s.curItemId) {
                if (t) {
                    FWDR3DCarModTweenMax.killTweensOf(s.scrollbarHandlerDO);
                    FWDR3DCarModTweenMax.to(s.scrollbarHandlerDO, .8, {
                        x: Math.floor(s.curItemId * (s.trackWidth - s.handlerWidth) / (s.totalItems - 1)),
                        ease: Expo.easeOut
                    })
                } else {
                    s.scrollbarHandlerDO.setX(Math.floor(s.curItemId * (s.trackWidth - s.handlerWidth) / (s.totalItems - 1)))
                }
                s.scrollbarHandlerTextDO.setInnerHTML(s.curItemId + 1 + "/" + s.totalItems)
            }
            s.prevCurItemId = s.curItemId
        };
        this.gotoItem2 = function() {
            FWDR3DCarModTweenMax.killTweensOf(s.scrollbarHandlerDO);
            FWDR3DCarModTweenMax.to(s.scrollbarHandlerDO, .8, {
                x: Math.floor(s.curItemId * (s.trackWidth - s.handlerWidth) / (s.totalItems - 1)),
                ease: Expo.easeOut
            });
            s.scrollbarHandlerTextDO.setInnerHTML(s.curItemId + 1 + "/" + s.totalItems)
        };
        this.destroy = function() {
            clearTimeout(s.setTextPositionId);
            if (s.isMobile) {
                if (s.hasPointerEvent) {
                    s.scrollbarHandlerOverDO.screen.removeEventListener("MSPointerOver", s.onScrollMouseOver);
                    s.scrollbarHandlerOverDO.screen.removeEventListener("MSPointerOut", s.onScrollMouseOut);
                    s.scrollbarHandlerOverDO.screen.removeEventListener("MSPointerDown", s.onScrollMouseDown)
                } else {
                    s.scrollbarHandlerOverDO.screen.removeEventListener("touchstart", s.onScrollMouseDown)
                }
            } else {
                s.scrollbarHandlerOverDO.setButtonMode(true);
                if (s.screen.removeEventListener) {
                    s.scrollbarHandlerOverDO.screen.removeEventListener("mouseover", s.onScrollMouseOver);
                    s.scrollbarHandlerOverDO.screen.removeEventListener("mouseout", s.onScrollMouseOut);
                    s.scrollbarHandlerOverDO.screen.removeEventListener("mousedown", s.onScrollMouseDown);
                    e.removeEventListener("mouseup", s.onScrollMouseUp)
                } else {
                    s.scrollbarHandlerOverDO.screen.detachEvent("onmouseover", s.onScrollMouseOver);
                    s.scrollbarHandlerOverDO.screen.detachEvent("onmouseout", s.onScrollMouseOut);
                    s.scrollbarHandlerOverDO.screen.detachEvent("onmousedown", s.onScrollMouseDown);
                    document.detachEvent("onmouseup", s.onScrollMouseUp)
                }
            }
            if (s.isMobile) {
                if (s.hasPointerEvent) {
                    e.removeEventListener("MSPointerUp", s.onScrollMouseUp);
                    e.removeEventListener("MSPointerMove", s.onScrollMove)
                } else {
                    e.removeEventListener("touchend", s.onScrollMouseUp);
                    e.removeEventListener("touchmove", s.onScrollMove)
                }
            } else {
                if (s.screen.addEventListener) e.removeEventListener("mousemove", s.onScrollMove);
                else document.detachEvent("onmousemove", s.onScrollMove)
            }
            FWDR3DCarModTweenMax.killTweensOf(s.scrollbarHandlerLeftNDO);
            FWDR3DCarModTweenMax.killTweensOf(s.scrollbarHandlerCenterNDO);
            FWDR3DCarModTweenMax.killTweensOf(s.scrollbarHandlerRightNDO);
            FWDR3DCarModTweenMax.killTweensOf(s.scrollbarHandlerDO);
            FWDR3DCarModTweenMax.killTweensOf(s.scrollbarHandlerTextDO.screen);
            s.scrollbarHandlerDO.destroy();
            s.scrollbarHandlerLeftNDO.destroy();
            s.scrollbarHandlerLeftSDO.destroy();
            s.scrollbarHandlerCenterNDO.destroy();
            s.scrollbarHandlerCenterSDO.destroy();
            s.scrollbarHandlerRightNDO.destroy();
            s.scrollbarHandlerRightSDO.destroy();
            s.scrollbarHandlerTextDO.destroy();
            s.scrollbarHandlerOverDO.destroy();
            s.scrollbarTrackDO.destroy();
            s.scrollbarTrackLeftDO.destroy();
            s.scrollbarTrackCenterDO.destroy();
            s.scrollbarTrackRightDO.destroy();
            s.scrollbarHandlerDO = null;
            s.scrollbarHandlerLeftNDO = null;
            s.scrollbarHandlerLeftSDO = null;
            s.scrollbarHandlerCenterNDO = null;
            s.scrollbarHandlerCenterSDO = null;
            s.scrollbarHandlerRightNDO = null;
            s.scrollbarHandlerRightSDO = null;
            s.scrollbarHandlerTextDO = null;
            s.scrollbarHandlerOverDO = null;
            s.scrollbarTrackDO = null;
            s.scrollbarTrackLeftDO = null;
            s.scrollbarTrackCenterDO = null;
            s.scrollbarTrackRightDO = null;
            s.setInnerHTML("");
            o.destroy();
            s = null;
            o = null;
            t.prototype = null
        };
        this.init()
    };
    t.setPrototype = function() {
        t.prototype = null;
        t.prototype = new FWDR3DCarDisplayObject("div")
    };
    t.MOVE = "onMove";
    t.prototype = null;
    e.FWDR3DCarScrollbar = t
})(window); (function(e) {
    var t = function(e, n) {
        var r = this;
        var i = t.prototype;
        this.nImg = e;
        this.sImg = n;
        this.n_do;
        this.s_do;
        this.isMobile_bl = FWDR3DCarUtils.isMobile;
        this.hasPointerEvent_bl = FWDR3DCarUtils.hasPointerEvent;
        this.init = function() {
            this.setupMainContainers()
        };
        this.setupMainContainers = function() {
            this.n_do = new FWDR3DCarSimpleDisplayObject("img");
            this.n_do.setScreen(this.nImg);
            this.s_do = new FWDR3DCarSimpleDisplayObject("img");
            this.s_do.setScreen(this.sImg);
            this.addChild(this.s_do);
            this.addChild(this.n_do);
            this.setWidth(this.nImg.width);
            this.setHeight(this.nImg.height);
            this.setButtonMode(true);
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    r.screen.addEventListener("MSPointerOver", r.onMouseOver);
                    r.screen.addEventListener("MSPointerOut", r.onMouseOut);
                    r.screen.addEventListener("MSPointerUp", r.onClick)
                } else {
                    r.screen.addEventListener("touchstart", r.onClick)
                }
            } else if (r.screen.addEventListener) {
                r.screen.addEventListener("mouseover", r.onMouseOver);
                r.screen.addEventListener("mouseout", r.onMouseOut);
                r.screen.addEventListener("mouseup", r.onClick)
            } else if (r.screen.attachEvent) {
                r.screen.attachEvent("onmouseover", r.onMouseOver);
                r.screen.attachEvent("onmouseout", r.onMouseOut);
                r.screen.attachEvent("onmouseup", r.onClick)
            }
        };
        this.onMouseOver = function(e) {
            if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                FWDR3DCarModTweenMax.to(r.n_do, .9, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }
        };
        this.onMouseOut = function(e) {
            if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                FWDR3DCarModTweenMax.to(r.n_do, .9, {
                    alpha: 1,
                    ease: Expo.easeOu
                })
            }
        };
        this.onClick = function(e) {
            r.dispatchEvent(t.CLICK)
        };
        this.destroy = function() {
            if (r.isMobile_bl) {
                if (r.hasPointerEvent_bl) {
                    r.screen.removeEventListener("MSPointerOver", r.onMouseOver);
                    r.screen.removeEventListener("MSPointerOut", r.onMouseOut);
                    r.screen.removeEventListener("MSPointerUp", r.onClick)
                } else {
                    r.screen.removeEventListener("touchstart", r.onClick)
                }
            } else if (r.screen.removeEventListener) {
                r.screen.removeEventListener("mouseover", r.onMouseOver);
                r.screen.removeEventListener("mouseout", r.onMouseOut);
                r.screen.removeEventListener("mouseup", r.onClick)
            } else if (r.screen.detachEvent) {
                r.screen.detachEvent("onmouseover", r.onMouseOver);
                r.screen.detachEvent("onmouseout", r.onMouseOut);
                r.screen.detachEvent("onmouseup", r.onClick)
            }
            FWDR3DCarModTweenMax.killTweensOf(r.n_do);
            r.n_do.destroy();
            r.s_do.destroy();
            r.nImg = null;
            r.sImg = null;
            r.n_do = null;
            r.s_do = null;
            e = null;
            n = null;
            r.setInnerHTML("");
            i.destroy();
            r = null;
            i = null;
            t.prototype = null
        };
        this.init()
    };
    t.setPrototype = function() {
        t.prototype = null;
        t.prototype = new FWDR3DCarDisplayObject("div")
    };
    t.CLICK = "onClick";
    t.prototype = null;
    e.FWDR3DCarSimpleButton = t
})(window); (function(e) {
    var t = function(e, t, n, r) {
        var i = this;
        if (e == "div" || e == "img" || e == "canvas") {
            i.type = e
        } else {
            throw Error("Type is not valid! " + e)
        }
        this.style;
        this.screen;
        this.transform;
        this.position = t || "absolute";
        this.overflow = n || "hidden";
        this.display = r || "block";
        this.visible = true;
        this.buttonMode;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.rect;
        this.alpha = 1;
        this.innerHTML = "";
        this.opacityType = "";
        this.isHtml5_bl = false;
        this.isMobile_bl = FWDR3DCarUtils.isMobile;
        this.hasTransform3d_bl = FWDR3DCarUtils.hasTransform3d;
        this.hasTransform2d_bl = FWDR3DCarUtils.hasTransform2d;
        if (FWDR3DCarUtils.isFirefox) i.hasTransform3d_bl = false;
        if (FWDR3DCarUtils.isFirefox) i.hasTransform2d_bl = false;
        this.hasBeenSetSelectable_bl = false;
        i.init = function() {
            i.setScreen()
        };
        i.getTransform = function() {
            var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"];
            var t;
            while (t = e.shift()) {
                if (typeof i.screen.style[t] !== "undefined") {
                    return t
                }
            }
            return false
        };
        i.getOpacityType = function() {
            var e;
            if (typeof i.screen.style.opacity != "undefined") {
                e = "opacity"
            } else {
                e = "filter"
            }
            return e
        };
        i.setScreen = function(e) {
            if (i.type == "img" && e) {
                i.screen = e;
                i.setMainProperties()
            } else {
                i.screen = document.createElement(i.type);
                i.setMainProperties()
            }
        };
        i.setMainProperties = function() {
            i.transform = i.getTransform();
            i.setPosition(i.position);
            i.setDisplay(i.display);
            i.setOverflow(i.overflow);
            i.opacityType = i.getOpacityType();
            if (i.opacityType == "opacity") i.isHtml5_bl = true;
            if (i.opacityType == "filter") i.screen.style.filter = "inherit";
            i.screen.style.left = "0px";
            i.screen.style.top = "0px";
            i.screen.style.margin = "0px";
            i.screen.style.padding = "0px";
            i.screen.style.maxWidth = "none";
            i.screen.style.maxHeight = "none";
            i.screen.style.border = "none";
            i.screen.style.lineHeight = "1";
            i.screen.style.backgroundColor = "transparent";
            i.screen.style.backfaceVisibility = "hidden";
            i.screen.style.webkitBackfaceVisibility = "hidden";
            i.screen.style.MozBackfaceVisibility = "hidden";
            if (e == "img") {
                i.setWidth(i.screen.width);
                i.setHeight(i.screen.height);
                i.setSelectable(false)
            }
        };
        i.setSelectable = function(e) {
            if (!e) {
                i.screen.style.userSelect = "none";
                i.screen.style.MozUserSelect = "none";
                i.screen.style.webkitUserSelect = "none";
                i.screen.style.khtmlUserSelect = "none";
                i.screen.style.oUserSelect = "none";
                i.screen.style.msUserSelect = "none";
                i.screen.msUserSelect = "none";
                i.screen.ondragstart = function(e) {
                    return false
                };
                i.screen.onselectstart = function() {
                    return false
                };
                i.screen.ontouchstart = function(e) {
                    return false
                };
                i.screen.style.webkitTouchCallout = "none";
                i.hasBeenSetSelectable_bl = true
            }
        };
        i.setBackfaceVisibility = function() {
            i.screen.style.backfaceVisibility = "visible";
            i.screen.style.webkitBackfaceVisibility = "visible";
            i.screen.style.MozBackfaceVisibility = "visible"
        };
        i.removeBackfaceVisibility = function() {
            i.screen.style.backfaceVisibility = "hidden";
            i.screen.style.webkitBackfaceVisibility = "hidden";
            i.screen.style.MozBackfaceVisibility = "hidden"
        };
        i.getScreen = function() {
            return i.screen
        };
        i.setVisible = function(e) {
            i.visible = e;
            if (i.visible == true) {
                i.screen.style.visibility = "visible"
            } else {
                i.screen.style.visibility = "hidden"
            }
        };
        i.getVisible = function() {
            return i.visible
        };
        i.setResizableSizeAfterParent = function() {
            i.screen.style.width = "100%";
            i.screen.style.height = "100%"
        };
        i.getStyle = function() {
            return i.screen.style
        };
        i.setOverflow = function(e) {
            i.overflow = e;
            i.screen.style.overflow = i.overflow
        };
        i.setPosition = function(e) {
            i.position = e;
            i.screen.style.position = i.position
        };
        i.setDisplay = function(e) {
            i.display = e;
            i.screen.style.display = i.display
        };
        i.setButtonMode = function(e) {
            i.buttonMode = e;
            if (i.buttonMode == true) {
                i.screen.style.cursor = "pointer"
            } else {
                i.screen.style.cursor = "default"
            }
        };
        i.setBkColor = function(e) {
            i.screen.style.backgroundColor = e
        };
        i.setInnerHTML = function(e) {
            i.innerHTML = e;
            i.screen.innerHTML = i.innerHTML
        };
        i.getInnerHTML = function() {
            return i.innerHTML
        };
        i.getRect = function() {
            return i.screen.getBoundingClientRect()
        };
        i.setAlpha = function(e) {
            i.alpha = e;
            if (i.opacityType == "opacity") {
                i.screen.style.opacity = i.alpha
            } else if (i.opacityType == "filter") {
                i.screen.style.filter = "alpha(opacity=" + i.alpha * 100 + ")";
                i.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(i.alpha * 100) + ")"
            }
        };
        i.getAlpha = function() {
            return i.alpha
        };
        i.getRect = function() {
            return i.screen.getBoundingClientRect()
        };
        i.getGlobalX = function() {
            return i.getRect().left
        };
        i.getGlobalY = function() {
            return i.getRect().top
        };
        i.setX = function(e) {
            i.x = e;
            if (i.isMobile_bl) {
                i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)"
            } else if (i.hasTransform3d_bl) {
                i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)"
            } else if (i.hasTransform2d_bl) {
                i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)"
            } else {
                i.screen.style.left = i.x + "px"
            }
        };
        i.getX = function() {
            return i.x
        };
        i.setY = function(e) {
            i.y = e;
            if (i.isMobile_bl) {
                i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)"
            } else if (i.hasTransform3d_bl && !FWDR3DCarUtils.isAndroid) {
                i.screen.style[i.transform] = "translate3d(" + i.x + "px," + i.y + "px,0)"
            } else if (i.hasTransform2d_bl) {
                i.screen.style[i.transform] = "translate(" + i.x + "px," + i.y + "px)"
            } else {
                i.screen.style.top = i.y + "px"
            }
        };
        i.getY = function() {
            return i.y
        };
        i.setWidth = function(e) {
            i.w = e;
            if (i.type == "img") {
                i.screen.width = i.w
            } else {
                i.screen.style.width = i.w + "px"
            }
        };
        i.getWidth = function() {
            if (i.type == "div") {
                if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                return i.w
            } else if (i.type == "img") {
                if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                if (i.screen.width != 0) return i.screen.width;
                return i._w
            } else if (i.type == "canvas") {
                if (i.screen.offsetWidth != 0) return i.screen.offsetWidth;
                return i.w
            }
        };
        i.setHeight = function(e) {
            i.h = e;
            if (i.type == "img") {
                i.screen.height = i.h
            } else {
                i.screen.style.height = i.h + "px"
            }
        };
        i.getHeight = function() {
            if (i.type == "div") {
                if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                return i.h
            } else if (i.type == "img") {
                if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                if (i.screen.height != 0) return i.screen.height;
                return i.h
            } else if (i.type == "canvas") {
                if (i.screen.offsetHeight != 0) return i.screen.offsetHeight;
                return i.h
            }
        };
        this.setCSSGradient = function(e, t) {
            if (FWDR3DCarUtils.isIEAndLessThen10) {
                i.setBkColor(e)
            } else {
                i.screen.style.backgroundImage = "-webkit-linear-gradient(top, " + e + ", " + t + ")";
                i.screen.style.backgroundImage = "-moz-linear-gradient(top, " + e + ", " + t + ")";
                i.screen.style.backgroundImage = "-ms-linear-gradient(top, " + e + ", " + t + ")";
                i.screen.style.backgroundImage = "-o-linear-gradient(top, " + e + ", " + t + ")"
            }
        };
        i.disposeImage = function() {
            if (i.type == "img") {
                i.screen.onload = null;
                i.screen.onerror = null;
                i.screen.src = ""
            }
        };
        i.destroy = function() {
            if (i.hasBeenSetSelectable_bl) {
                i.screen.ondragstart = null;
                i.screen.onselectstart = null;
                i.screen.ontouchstart = null
            }
            i.screen.removeAttribute("style");
            i.style = null;
            i.screen = null;
            i.transform = null;
            i.position = null;
            i.overflow = null;
            i.display = null;
            i.visible = null;
            i.buttonMode = null;
            i.x = null;
            i.y = null;
            i.w = null;
            i.h = null;
            i.rect = null;
            i.alpha = null;
            i.innerHTML = null;
            i.opacityType = null;
            i.isHtml5_bl = null;
            e = null;
            t = null;
            n = null;
            r = null;
            i.hasTransform3d_bl = null;
            i.hasTransform2d_bl = null;
            i = null
        };
        i.init()
    };
    e.FWDR3DCarSimpleDisplayObject = t
})(window); (function(e) {
    var t = function(n) {
        var r = this;
        var i = t.prototype;
        this.playButtonNImg = n.playButtonNImg;
        this.playButtonSImg = n.playButtonSImg;
        this.pauseButtonImg = n.pauseButtonImg;
        this.timerButtonImg = n.slideshowTimerImg;
        this.playButtonDO;
        this.playButtonNDO;
        this.playButtonSDO;
        this.pauseButtonDO;
        this.timerButtonDO;
        this.timerButtonBgDO;
        this.timerButtonTextDO;
        this.delay = n.slideshowDelay;
        this.autoplay = n.autoplay;
        this.curSeconds = n.slideshowDelay / 1e3;
        this.isPlaying = false;
        this.isCounting = false;
        this.btnWidth = r.playButtonNImg.width;
        this.btnHeight = r.playButtonNImg.height;
        this.isMobile = FWDR3DCarUtils.isMobile;
        this.hasPointerEvent = FWDR3DCarUtils.hasPointerEvent;
        this.timeoutId;
        this.timerIntervalId;
        this.init = function() {
            r.setupMainContainers()
        };
        this.setupMainContainers = function() {
            r.setButtonMode(true);
            r.setWidth(r.btnWidth);
            r.setHeight(r.btnHeight);
            r.setPauseButton();
            r.setTimerButton();
            r.setPlayButton();
            if (r.isMobile) {
                if (r.hasPointerEvent) {
                    r.screen.addEventListener("MSPointerOver", r.onMouseOver);
                    r.screen.addEventListener("MSPointerOut", r.onMouseOut);
                    r.screen.addEventListener("MSPointerUp", r.onClick)
                } else {
                    r.screen.addEventListener("touchend", r.onClick)
                }
            } else {
                if (e.addEventListener) {
                    r.screen.addEventListener("mouseover", r.onMouseOver);
                    r.screen.addEventListener("mouseout", r.onMouseOut);
                    r.screen.addEventListener("click", r.onClick)
                } else {
                    r.screen.attachEvent("onmouseover", r.onMouseOver);
                    r.screen.attachEvent("onmouseout", r.onMouseOut);
                    r.screen.attachEvent("onclick", r.onClick)
                }
            }
            if (!n.showSlideshowButton) {
                r.setVisible(false)
            }
        };
        this.setTimerButton = function() {
            r.timerButtonDO = new FWDR3DCarDisplayObject("div");
            r.addChild(r.timerButtonDO);
            r.timerButtonDO.setWidth(r.btnWidth);
            r.timerButtonDO.setHeight(r.btnHeight);
            r.timerButtonBgDO = new FWDR3DCarSimpleDisplayObject("img");
            r.timerButtonBgDO.setScreen(r.timerButtonImg);
            r.timerButtonDO.addChild(r.timerButtonBgDO);
            r.timerButtonTextDO = new FWDR3DCarDisplayObject("div");
            r.timerButtonDO.addChild(r.timerButtonTextDO);
            r.timerButtonTextDO.getStyle().fontSmoothing = "antialiased";
            r.timerButtonTextDO.getStyle().webkitFontSmoothing = "antialiased";
            r.timerButtonTextDO.getStyle().textRendering = "optimizeLegibility";
            r.timerButtonTextDO.getStyle().fontFamily = "Arial, Helvetica, sans-serif";
            r.timerButtonTextDO.getStyle().fontSize = "10px";
            r.timerButtonTextDO.getStyle().color = n.slideshowTimerColor;
            if (r.curSeconds < 10) r.timerButtonTextDO.setInnerHTML("0" + r.curSeconds);
            else r.timerButtonTextDO.setInnerHTML(r.curSeconds);
            r.setTextPositionId = setTimeout(r.setTextPosition, 10)
        };
        this.setTextPosition = function() {
            r.timerButtonTextDO.setX(Math.floor((r.btnWidth - r.timerButtonTextDO.getWidth()) / 2));
            r.timerButtonTextDO.setY(Math.floor((r.btnHeight - r.timerButtonTextDO.getHeight()) / 2))
        };
        this.setPauseButton = function() {
            r.pauseButtonDO = new FWDR3DCarSimpleDisplayObject("img");
            r.pauseButtonDO.setScreen(r.pauseButtonImg);
            r.addChild(r.pauseButtonDO);
            r.pauseButtonDO.setWidth(r.btnWidth);
            r.pauseButtonDO.setHeight(r.btnHeight)
        };
        this.setPlayButton = function() {
            r.playButtonDO = new FWDR3DCarDisplayObject("div");
            r.addChild(r.playButtonDO);
            r.playButtonSDO = new FWDR3DCarSimpleDisplayObject("img");
            r.playButtonSDO.setScreen(r.playButtonSImg);
            r.playButtonDO.addChild(r.playButtonSDO);
            r.playButtonNDO = new FWDR3DCarSimpleDisplayObject("img");
            r.playButtonNDO.setScreen(r.playButtonNImg);
            r.playButtonDO.addChild(r.playButtonNDO);
            r.playButtonDO.setWidth(r.btnWidth);
            r.playButtonDO.setHeight(r.btnHeight)
        };
        this.onMouseOver = function() {
            if (r.isPlaying) {
                FWDR3DCarModTweenMax.to(r.timerButtonDO, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            } else {
                FWDR3DCarModTweenMax.to(r.playButtonNDO, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }
        };
        this.onMouseOut = function() {
            if (r.isPlaying) {
                FWDR3DCarModTweenMax.to(r.timerButtonDO, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                })
            } else {
                FWDR3DCarModTweenMax.to(r.playButtonNDO, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                })
            }
        };
        this.onClick = function(e) {
            if (r.isPlaying) {
                r.stop();
                r.dispatchEvent(t.PAUSE_CLICK)
            } else {
                r.start();
                r.dispatchEvent(t.PLAY_CLICK)
            }
            if (!r.isMobile) {
                r.onMouseOver()
            }
        };
        this.start = function() {
            r.isPlaying = true;
            r.isCounting = true;
            r.playButtonDO.setAlpha(0);
            r.curSeconds = r.delay / 1e3;
            clearTimeout(r.timeoutId);
            clearInterval(r.timerIntervalId);
            r.timeoutId = setTimeout(r.onTimeHandler, r.delay);
            r.timerIntervalId = setInterval(r.onTickHandler, 1e3);
            if (r.curSeconds < 10) r.timerButtonTextDO.setInnerHTML("0" + r.curSeconds);
            else r.timerButtonTextDO.setInnerHTML(r.curSeconds)
        };
        this.stop = function() {
            r.isPlaying = false;
            r.isCounting = false;
            r.playButtonDO.setAlpha(1);
            clearTimeout(r.timeoutId);
            clearInterval(r.timerIntervalId)
        };
        this.resetCounter = function() {
            r.isCounting = false;
            clearTimeout(r.timeoutId);
            clearInterval(r.timerIntervalId);
            r.curSeconds = r.delay / 1e3;
            if (r.curSeconds < 10) r.timerButtonTextDO.setInnerHTML("0" + r.curSeconds);
            else r.timerButtonTextDO.setInnerHTML(r.curSeconds)
        };
        this.onTimeHandler = function() {
            r.isCounting = false;
            clearTimeout(r.timeoutId);
            clearInterval(r.timerIntervalId);
            r.onTickHandler();
            r.dispatchEvent(t.TIME)
        };
        this.onTickHandler = function() {
            r.curSeconds--;
            if (r.curSeconds < 10) r.timerButtonTextDO.setInnerHTML("0" + r.curSeconds);
            else r.timerButtonTextDO.setInnerHTML(r.curSeconds)
        };
        this.destroy = function() {
            clearTimeout(r.timeoutId);
            clearTimeout(r.setTextPositionId);
            clearInterval(r.timerIntervalId);
            if (r.isMobile) {
                if (r.hasPointerEvent) {
                    r.screen.removeEventListener("MSPointerOver", r.onMouseOver);
                    r.screen.removeEventListener("MSPointerOut", r.onMouseOut);
                    r.screen.removeEventListener("MSPointerUp", r.onClick)
                } else {
                    r.screen.removeEventListener("touchend", r.onClick)
                }
            } else {
                if (e.addEventListener) {
                    r.screen.removeEventListener("mouseover", r.onMouseOver);
                    r.screen.removeEventListener("mouseout", r.onMouseOut);
                    r.screen.removeEventListener("click", r.onClick)
                } else {
                    r.screen.detachEvent("onmouseover", r.onMouseOver);
                    r.screen.detachEvent("onmouseout", r.onMouseOut);
                    r.screen.detachEvent("onclick", r.onClick)
                }
            }
            FWDR3DCarModTweenMax.killTweensOf(r.timerButtonDO);
            FWDR3DCarModTweenMax.killTweensOf(r.playButtonNDO);
            r.playButtonDO.destroy();
            r.playButtonNDO.destroy();
            r.playButtonSDO.destroy();
            r.pauseButtonDO.destroy();
            r.timerButtonDO.destroy();
            r.timerButtonBgDO.destroy();
            r.timerButtonTextDO.destroy();
            i.destroy();
            r = null;
            i = null;
            t.prototype = null
        };
        this.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDR3DCarDisplayObject("div")
    };
    t.PLAY_CLICK = "onPlayClick";
    t.PAUSE_CLICK = "onPauseClick";
    t.TIME = "onTime";
    t.prototype = null;
    e.FWDR3DCarSlideshowButton = t
})(window); (function(e) {
    var t = function(e, n, r, i, s) {
        var o = this;
        var u = t.prototype;
        this.imageSource_img = e;
        this.image_do = null;
        this.tweenObj = {
            currentPos: 0
        };
        this.segmentWidth = n;
        this.segmentHeight = r;
        this.totalSegments = i;
        this.duration = s / 1e3;
        this.delayTimerId_int;
        this.init = function() {
            this.setWidth(this.segmentWidth);
            this.setHeight(this.segmentHeight);
            this.image_do = new FWDR3DCarDisplayObject("img");
            this.image_do.setScreen(this.imageSource_img);
            this.addChild(this.image_do);
            this.onUpdateHandler();
            this.hide(false)
        };
        this.animIn = function() {
            FWDR3DCarModTweenMax.killTweensOf(this.tweenObj);
            this.currentPos = 0;
            FWDR3DCarModTweenMax.to(this.tweenObj, this.duration, {
                currentPos: 1,
                ease: Linear.easeNone,
                onUpdate: this.onUpdateHandler
            })
        };
        this.animOut = function() {
            FWDR3DCarModTweenMax.killTweensOf(this.tweenObj);
            FWDR3DCarModTweenMax.to(this.tweenObj, .8, {
                currentPos: 0,
                onUpdate: this.onUpdateHandler
            })
        };
        this.onUpdateHandler = function() {
            var e = Math.round(o.tweenObj.currentPos / 1 * (o.totalSegments - 1)) * o.segmentWidth;
            o.image_do.setX( - e)
        };
        this.show = function() {
            this.setVisible(true);
            if (this.opacityType == "opacity") {
                FWDR3DCarModTweenMax.killTweensOf(this.image_do);
                FWDR3DCarModTweenMax.to(this.image_do, 1, {
                    alpha: 1
                })
            } else {
                this.setWidth(this.segmentWidth)
            }
        };
        this.hide = function(e) {
            if (e) {
                if (this.opacityType == "opacity") {
                    FWDR3DCarModTweenMax.killTweensOf(this.image_do);
                    FWDR3DCarModTweenMax.to(this.image_do, 1, {
                        alpha: 0
                    })
                } else {
                    this.setWidth(0)
                }
            } else {
                if (this.opacityType == "opacity") {
                    FWDR3DCarModTweenMax.killTweensOf(this.image_do);
                    this.setVisible(false);
                    this.image_do.setAlpha(0)
                } else {
                    this.setWidth(0)
                }
            }
        };
        this.destroy = function() {
            FWDR3DCarModTweenMax.killTweensOf(this);
            FWDR3DCarModTweenMax.killTweensOf(this.tweenObj);
            FWDR3DCarModTweenMax.killTweensOf(this.image_do);
            this.image_do.destroy();
            this.imageSource_img = null;
            this.image_do = null;
            this.tweenObj = null;
            e = null;
            this.setInnerHTML("");
            u.destroy();
            o = null;
            u = null;
            t.prototype = null
        };
        this.init()
    };
    t.HIDE_COMPLETE;
    t.setPrototype = function() {
        t.prototype = new FWDR3DCarDisplayObject("div")
    };
    t.prototype = null;
    e.FWDR3DCarSlideShowPreloader = t
})(window); (function(e) {
    var t = function(e, n, r) {
        var i = this;
        var s = t.prototype;
        this.id = e;
        this.borderSize = n.thumbBorderSize;
        this.backgroundColor = n.thumbBackgroundColor;
        this.borderColor1 = n.thumbBorderColor1;
        this.borderColor2 = n.thumbBorderColor2;
        this.mainDO = null;
        this.borderDO = null;
        this.bgDO = null;
        this.imageHolderDO = null;
        this.imageDO = null;
        this.htmlContentDO = null;
        this.reflCanvasDO = null;
        this.gradientDO = null;
        this.gradientLeftDO = null;
        this.gradientRightDO = null;
        this.textHolderDO = null;
        this.textGradientDO = null;
        this.textDO = null;
        this.thumbWidth = n.thumbWidth;
        this.thumbHeight = n.thumbHeight;
        this.mouseX = 0;
        this.mouseY = 0;
        this.pos;
        this.thumbScale = 1;
        this.showBoxShadow = n.showBoxShadow;
        this.curDataListAr;
        this.isOver = false;
        this.hasText = false;
        this.isMobile = FWDR3DCarUtils.isMobile;
        this.hasPointerEvent = FWDR3DCarUtils.hasPointerEvent;
        this.init = function() {
            i.setupScreen()
        };
        this.setupScreen = function() {
            i.mainDO = new FWDR3DCarDisplayObject("div");
            i.addChild(i.mainDO);
            i.mainDO.setWidth(i.thumbWidth);
            i.mainDO.setHeight(i.thumbHeight);
            i.setWidth(i.thumbWidth);
            i.setHeight(i.thumbHeight);
            if (n.showThumbnailsHtmlContent || !n.transparentImages) {
                i.borderDO = new FWDR3DCarSimpleDisplayObject("div");
                i.bgDO = new FWDR3DCarSimpleDisplayObject("div");
                i.mainDO.addChild(i.borderDO);
                i.mainDO.addChild(i.bgDO);
                i.borderDO.setWidth(i.thumbWidth);
                i.borderDO.setHeight(i.thumbHeight);
                i.bgDO.setWidth(i.thumbWidth - i.borderSize * 2);
                i.bgDO.setHeight(i.thumbHeight - i.borderSize * 2);
                i.bgDO.setX(i.borderSize);
                i.bgDO.setY(i.borderSize);
                i.borderDO.setCSSGradient(i.borderColor1, i.borderColor2);
                i.bgDO.setBkColor(i.backgroundColor);
                if (FWDR3DCarUtils.isAndroid) {
                    i.borderDO.setBackfaceVisibility();
                    i.bgDO.setBackfaceVisibility()
                }
            }
            i.imageHolderDO = new FWDR3DCarDisplayObject("div");
            i.mainDO.addChild(i.imageHolderDO);
            i.curDataListAr = r.curDataListAr;
            if (!i.isMobile && i.curDataListAr[i.id].mediaType != "none") {
                i.mainDO.setButtonMode(true)
            }
            if (!i.isMobile && !FWDR3DCarUtils.isIEAndLessThen9 && n.showGradient) {
                i.setupGradient()
            }
            if (FWDR3DCarUtils.isAndroid) {
                i.setBackfaceVisibility();
                i.mainDO.setBackfaceVisibility();
                i.imageHolderDO.setBackfaceVisibility()
            }
            if (i.showBoxShadow) {
                i.mainDO.screen.style.boxShadow = n.thumbBoxShadowCss
            }
            if (i.isMobile) {
                if (i.hasPointerEvent) {
                    i.mainDO.screen.addEventListener("MSPointerUp", i.onMouseTouchHandler)
                } else {
                    i.mainDO.screen.addEventListener("touchend", i.onMouseTouchHandler)
                }
            } else {
                if (i.screen.addEventListener) {
                    i.mainDO.screen.addEventListener("click", i.onMouseClickHandler)
                } else {
                    i.mainDO.screen.attachEvent("onclick", i.onMouseClickHandler)
                }
            }
        };
        this.addReflection = function() {
            if (!i.imageDO || i.isMobile || FWDR3DCarUtils.isIEAndLessThen9) return;
            var e = i.thumbWidth - i.borderSize * 2;
            var t = i.thumbHeight - i.borderSize * 2;
            i.reflCanvasDO = new FWDR3DCarSimpleDisplayObject("canvas");
            i.addChild(i.reflCanvasDO);
            i.reflCanvasDO.screen.width = i.thumbWidth;
            i.reflCanvasDO.screen.height = r.reflHeight;
            var s = i.reflCanvasDO.screen.getContext("2d");
            s.save();
            s.translate(0, i.thumbHeight);
            s.scale(1, -1);
            if (n.showThumbnailsHtmlContent || !n.transparentImages) {
                s.fillStyle = i.borderColor1;
                s.fillRect(0, 0, i.thumbWidth, i.thumbHeight)
            }
            s.drawImage(i.imageDO.screen, i.borderSize, i.borderSize, e, t);
            s.restore();
            s.globalCompositeOperation = "destination-out";
            var o = s.createLinearGradient(0, 0, 0, r.reflHeight);
            o.addColorStop(1, "rgba(255, 255, 255, 1.0)");
            o.addColorStop(0, "rgba(255, 255, 255, " + (1 - r.reflAlpha) + ")");
            s.fillStyle = o;
            s.fillRect(0, 0, i.thumbWidth, r.reflHeight + 2);
            i.setWidth(i.thumbWidth);
            i.reflCanvasDO.setY(i.thumbHeight + r.reflDist)
        };
        this.addImage = function(e) {
            i.imageDO = new FWDR3DCarSimpleDisplayObject("img");
            i.imageDO.setScreen(e);
            i.imageHolderDO.addChild(i.imageDO);
            i.imageDO.screen.ontouchstart = null;
            if (FWDR3DCarUtils.isAndroid) {
                i.imageDO.setBackfaceVisibility()
            }
            i.imageDO.setWidth(i.thumbWidth - i.borderSize * 2);
            i.imageDO.setHeight(i.thumbHeight - i.borderSize * 2);
            i.imageHolderDO.setX(i.borderSize);
            i.imageHolderDO.setY(i.borderSize);
            i.imageHolderDO.setWidth(i.thumbWidth - i.borderSize * 2);
            i.imageHolderDO.setHeight(i.thumbHeight - i.borderSize * 2);
            if (r.showRefl) {
                i.addReflection()
            }
        };
        this.addHtmlContent = function() {
            i.htmlContentDO = new FWDR3DCarSimpleDisplayObject("div");
            i.htmlContentDO.setInnerHTML(i.curDataListAr[i.id].htmlContent);
            i.imageHolderDO.addChild(i.htmlContentDO);
            if (FWDR3DCarUtils.isAndroid) {
                i.htmlContentDO.setBackfaceVisibility()
            }
            i.htmlContentDO.setWidth(i.thumbWidth - i.borderSize * 2);
            i.htmlContentDO.setHeight(i.thumbHeight - i.borderSize * 2);
            i.imageHolderDO.setX(i.borderSize);
            i.imageHolderDO.setY(i.borderSize);
            i.imageHolderDO.setWidth(i.thumbWidth - i.borderSize * 2);
            i.imageHolderDO.setHeight(i.thumbHeight - i.borderSize * 2)
        };
        this.setupGradient = function() {
            i.gradientDO = new FWDR3DCarDisplayObject("div");
            i.mainDO.addChild(i.gradientDO);
            i.gradientDO.setWidth(i.thumbWidth);
            i.gradientDO.setHeight(i.thumbHeight);
            i.gradientLeftDO = new FWDR3DCarSimpleDisplayObject("img");
            i.gradientDO.addChild(i.gradientLeftDO);
            i.gradientLeftDO.setWidth(i.thumbWidth);
            i.gradientLeftDO.setHeight(i.thumbHeight);
            i.gradientLeftDO.screen.src = n.thumbGradientLeftPath;
            i.gradientRightDO = new FWDR3DCarSimpleDisplayObject("img");
            i.gradientDO.addChild(i.gradientRightDO);
            i.gradientRightDO.setWidth(i.thumbWidth);
            i.gradientRightDO.setHeight(i.thumbHeight);
            i.gradientRightDO.screen.src = n.thumbGradientRightPath;
            i.gradientLeftDO.setAlpha(0);
            i.gradientRightDO.setAlpha(0)
        };
        this.setGradient = function(e) {
            if (i.pos == e) return;
            i.pos = e;
            if (!i.isMobile && !FWDR3DCarUtils.isIEAndLessThen9 && n.showGradient) {
                switch (i.pos) {
                case 0:
                    FWDR3DCarModTweenMax.to(i.gradientLeftDO, .8, {
                        alpha: 0
                    });
                    FWDR3DCarModTweenMax.to(i.gradientRightDO, .8, {
                        alpha: 0,
                        onComplete: i.setGradPos
                    });
                    break;
                case 1:
                    i.gradientDO.setY(0);
                    FWDR3DCarModTweenMax.to(i.gradientLeftDO, .8, {
                        alpha: 0
                    });
                    FWDR3DCarModTweenMax.to(i.gradientRightDO, .8, {
                        alpha: 1
                    });
                    break;
                case - 1 : i.gradientDO.setY(0);
                    FWDR3DCarModTweenMax.to(i.gradientLeftDO, .8, {
                        alpha: 1
                    });
                    FWDR3DCarModTweenMax.to(i.gradientRightDO, .8, {
                        alpha: 0
                    });
                    break
                }
            }
        };
        this.setGradPos = function() {
            i.gradientDO.setY(2e3)
        };
        this.addText = function(e, t, n) {
            if (i.curDataListAr[i.id].emptyText) return;
            i.textHolderDO = e;
            i.textGradientDO = t;
            i.textDO = n;
            i.textHolderDO.setX(i.borderSize);
            i.textHolderDO.setY(i.borderSize);
            i.mainDO.addChild(i.textHolderDO);
            i.textDO.setInnerHTML(i.curDataListAr[i.id].thumbText);
            i.textTitleOffset = i.curDataListAr[i.id].textTitleOffset;
            i.textDescriptionOffsetTop = i.curDataListAr[i.id].textDescriptionOffsetTop;
            i.textDescriptionOffsetBottom = i.curDataListAr[i.id].textDescriptionOffsetBottom;
            i.textGradientDO.setY(i.thumbHeight - i.borderSize * 2 - i.textTitleOffset);
            i.textDO.setY(i.thumbHeight - i.borderSize * 2 - i.textTitleOffset + i.textDescriptionOffsetTop);
            i.textHolderDO.setAlpha(0);
            i.setTextHeightId = setTimeout(i.setTextHeight, 10)
        };
        this.setTextHeight = function() {
            if (!i.textHolderDO) return;
            i.textHeight = i.textDO.getHeight();
            FWDR3DCarModTweenMax.to(i.textHolderDO, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
            i.hasText = true;
            i.checkThumbOver()
        };
        this.removeText = function() {
            if (i.textHolderDO) {
                FWDR3DCarModTweenMax.to(i.textHolderDO, .6, {
                    alpha: 0,
                    ease: Expo.easeOut,
                    onComplete: i.removeTextFinish
                })
            }
        };
        this.removeTextFinish = function() {
            FWDR3DCarModTweenMax.killTweensOf(i.textHolderDO);
            FWDR3DCarModTweenMax.killTweensOf(i.textGradientDO);
            FWDR3DCarModTweenMax.killTweensOf(i.textDO);
            i.mainDO.removeChild(i.textHolderDO);
            i.textHolderDO = null;
            i.textGradientDO = null;
            i.textDO = null;
            i.isOver = false;
            i.hasText = false
        };
        this.checkThumbOver = function() {
            if (!i.hasText) return;
            if (r.thumbMouseX >= 0 && r.thumbMouseX <= i.thumbWidth && r.thumbMouseY >= 0 && r.thumbMouseY <= i.thumbHeight) {
                i.onThumbOverHandler()
            } else {
                i.onThumbOutHandler()
            }
        };
        this.onThumbOverHandler = function() {
            if (!i.isOver) {
                i.isOver = true;
                FWDR3DCarModTweenMax.to(i.textGradientDO, .8, {
                    y: i.thumbHeight - i.borderSize * 2 - i.textDescriptionOffsetTop - i.textHeight - i.textDescriptionOffsetBottom,
                    ease: Expo.easeOut
                });
                FWDR3DCarModTweenMax.to(i.textDO, .8, {
                    y: i.thumbHeight - i.borderSize * 2 - i.textHeight - i.textDescriptionOffsetBottom,
                    ease: Expo.easeOut
                })
            }
        };
        this.onThumbOutHandler = function() {
            if (i.isOver) {
                i.isOver = false;
                FWDR3DCarModTweenMax.to(i.textGradientDO, .8, {
                    y: i.thumbHeight - i.borderSize * 2 - i.textTitleOffset,
                    ease: Expo.easeOut
                });
                FWDR3DCarModTweenMax.to(i.textDO, .8, {
                    y: i.thumbHeight - i.borderSize * 2 - i.textTitleOffset + i.textDescriptionOffsetTop,
                    ease: Expo.easeOut
                })
            }
        };
        this.showThumb3D = function() {
            var e = i.thumbWidth - i.borderSize * 2;
            var t = i.thumbHeight - i.borderSize * 2;
            i.imageHolderDO.setX(parseInt(i.thumbWidth / 2));
            i.imageHolderDO.setY(parseInt(i.thumbHeight / 2));
            i.imageHolderDO.setWidth(0);
            i.imageHolderDO.setHeight(0);
            FWDR3DCarModTweenMax.to(i.imageHolderDO, .8, {
                x: i.borderSize,
                y: i.borderSize,
                w: e,
                h: t,
                ease: Expo.easeInOut
            });
            if (n.showThumbnailsHtmlContent) {
                i.htmlContentDO.setWidth(e);
                i.htmlContentDO.setHeight(t);
                i.htmlContentDO.setX( - parseInt(e / 2));
                i.htmlContentDO.setY( - parseInt(t / 2));
                FWDR3DCarModTweenMax.to(i.htmlContentDO, .8, {
                    x: 0,
                    y: 0,
                    ease: Expo.easeInOut
                })
            } else {
                i.imageDO.setWidth(e);
                i.imageDO.setHeight(t);
                i.imageDO.setX( - parseInt(e / 2));
                i.imageDO.setY( - parseInt(t / 2));
                FWDR3DCarModTweenMax.to(i.imageDO, .8, {
                    x: 0,
                    y: 0,
                    ease: Expo.easeInOut
                });
                if (i.reflCanvasDO) {
                    i.reflCanvasDO.setAlpha(0);
                    FWDR3DCarModTweenMax.to(i.reflCanvasDO, .8, {
                        alpha: 1,
                        ease: Expo.easeInOut
                    })
                }
            }
        };
        this.showThumb2D = function() {
            if (!FWDR3DCarUtils.hasTransform2d) {
                var e = Math.floor(i.thumbWidth * i.thumbScale);
                var t = Math.floor(i.thumbHeight * i.thumbScale);
                var r = Math.floor(i.borderSize * i.thumbScale);
                if (i.borderSize > 0 && r < 1) {
                    r = 1
                }
                var s = e - r * 2;
                var o = t - r * 2;
                i.imageHolderDO.setX(parseInt(e / 2));
                i.imageHolderDO.setY(parseInt(t / 2));
                i.imageHolderDO.setWidth(0);
                i.imageHolderDO.setHeight(0);
                FWDR3DCarModTweenMax.to(i.imageHolderDO, .8, {
                    x: r,
                    y: r,
                    w: s,
                    h: o,
                    ease: Expo.easeInOut
                });
                if (n.showThumbnailsHtmlContent) {
                    if (i.htmlContentDO) {
                        i.htmlContentDO.setWidth(s);
                        i.htmlContentDO.setHeight(o);
                        i.htmlContentDO.setX( - parseInt(s / 2));
                        i.htmlContentDO.setY( - parseInt(o / 2));
                        FWDR3DCarModTweenMax.to(i.htmlContentDO, .8, {
                            x: 0,
                            y: 0,
                            ease: Expo.easeInOut
                        })
                    }
                } else {
                    if (i.imageDO) {
                        i.imageDO.setWidth(s);
                        i.imageDO.setHeight(o);
                        i.imageDO.setX( - parseInt(s / 2));
                        i.imageDO.setY( - parseInt(o / 2));
                        FWDR3DCarModTweenMax.to(i.imageDO, .8, {
                            x: 0,
                            y: 0,
                            ease: Expo.easeInOut
                        });
                        if (i.reflCanvasDO) {
                            FWDR3DCarModTweenMax.to(i.reflCanvasDO, .8, {
                                alpha: 1,
                                ease: Expo.easeInOut
                            })
                        }
                    }
                }
            } else {
                i.setScale2(i.thumbScale);
                var s = i.thumbWidth - i.borderSize * 2;
                var o = i.thumbHeight - i.borderSize * 2;
                i.imageHolderDO.setX(parseInt(i.thumbWidth / 2));
                i.imageHolderDO.setY(parseInt(i.thumbHeight / 2));
                i.imageHolderDO.setWidth(0);
                i.imageHolderDO.setHeight(0);
                FWDR3DCarModTweenMax.to(i.imageHolderDO, .8, {
                    x: i.borderSize,
                    y: i.borderSize,
                    w: s,
                    h: o,
                    ease: Expo.easeInOut
                });
                if (n.showThumbnailsHtmlContent) {
                    if (i.htmlContentDO) {
                        i.htmlContentDO.setWidth(s);
                        i.htmlContentDO.setHeight(o);
                        i.htmlContentDO.setX( - parseInt(s / 2));
                        i.htmlContentDO.setY( - parseInt(o / 2));
                        FWDR3DCarModTweenMax.to(i.htmlContentDO, .8, {
                            x: 0,
                            y: 0,
                            ease: Expo.easeInOut
                        })
                    }
                } else {
                    if (i.imageDO) {
                        i.imageDO.setWidth(s);
                        i.imageDO.setHeight(o);
                        i.imageDO.setX( - parseInt(s / 2));
                        i.imageDO.setY( - parseInt(o / 2));
                        FWDR3DCarModTweenMax.to(i.imageDO, .8, {
                            x: 0,
                            y: 0,
                            ease: Expo.easeInOut
                        });
                        if (i.reflCanvasDO) {
                            FWDR3DCarModTweenMax.to(i.reflCanvasDO, .8, {
                                alpha: 1,
                                ease: Expo.easeInOut
                            })
                        }
                    }
                }
            }
        };
        this.showThumbIntro2D = function(e, t) {
            i.thumbScale = e;
            if (!FWDR3DCarUtils.hasTransform2d) {
                var n = Math.floor(i.thumbWidth * e);
                var r = Math.floor(i.thumbHeight * e);
                var s = Math.floor(i.borderSize * e);
                if (i.borderSize > 0 && s < 1) {
                    s = 1
                }
                var o = n - s * 2;
                var u = r - s * 2;
                i.setWidth(n);
                i.setHeight(r);
                i.mainDO.setWidth(n);
                i.mainDO.setHeight(r);
                if (i.borderDO) {
                    i.borderDO.setWidth(n);
                    i.borderDO.setHeight(r)
                }
                if (i.bgDO) {
                    i.bgDO.setX(s);
                    i.bgDO.setY(s);
                    i.bgDO.setWidth(o);
                    i.bgDO.setHeight(u)
                }
                i.setX( - i.thumbWidth / 2);
                i.setY( - i.thumbHeight / 2);
                FWDR3DCarModTweenMax.to(i, .8, {
                    x: Math.floor(i.newX + (i.thumbWidth - n) / 2),
                    y: -Math.floor(r / 2),
                    delay: t,
                    ease: Expo.easeOut
                })
            } else {
                i.setScale2(i.thumbScale);
                i.setX( - i.thumbWidth / 2);
                i.setY( - i.thumbHeight / 2);
                FWDR3DCarModTweenMax.to(i, .8, {
                    x: i.newX,
                    scale: i.thumbScale,
                    delay: t,
                    ease: Quart.easeOut,
                    onComplete: i.setThumbVisibility
                })
            }
        };
        this.setScale = function(e) {
            i.thumbScale = e;
            i.setVisible(true);
            if (!FWDR3DCarUtils.hasTransform2d) {
                var t = Math.floor(i.thumbWidth * e);
                var r = Math.floor(i.thumbHeight * e);
                var s = Math.floor(i.borderSize * e);
                if (i.borderSize > 0 && s < 1) {
                    s = 1
                }
                if (i.borderDO) {
                    FWDR3DCarModTweenMax.to(i.borderDO, .8, {
                        w: t,
                        h: r,
                        ease: Quart.easeOut
                    })
                }
                if (i.bgDO) {
                    FWDR3DCarModTweenMax.to(i.bgDO, .8, {
                        x: s,
                        y: s,
                        w: t - s * 2,
                        h: r - s * 2,
                        ease: Quart.easeOut
                    })
                }
                FWDR3DCarModTweenMax.to(i.mainDO, .8, {
                    w: t,
                    h: r,
                    ease: Quart.easeOut
                });
                FWDR3DCarModTweenMax.to(i.imageHolderDO, .8, {
                    x: s,
                    y: s,
                    w: t - s * 2,
                    h: r - s * 2,
                    ease: Quart.easeOut
                });
                FWDR3DCarModTweenMax.to(i, .8, {
                    x: Math.floor(i.newX + (i.thumbWidth - t) / 2),
                    y: -Math.floor(r / 2),
                    w: t,
                    h: r,
                    ease: Quart.easeOut
                });
                if (n.showThumbnailsHtmlContent) {
                    if (i.htmlContentDO) {
                        FWDR3DCarModTweenMax.to(i.htmlContentDO, .8, {
                            w: t - s * 2,
                            h: r - s * 2,
                            ease: Quart.easeOut
                        })
                    }
                } else {
                    if (i.imageDO) {
                        FWDR3DCarModTweenMax.to(i.imageDO, .8, {
                            w: t - s * 2,
                            h: r - s * 2,
                            ease: Quart.easeOut
                        })
                    }
                }
            } else {
                FWDR3DCarModTweenMax.to(i, .8, {
                    x: Math.floor(i.newX),
                    scale: i.thumbScale,
                    ease: Quart.easeOut,
                    onComplete: i.setThumbVisibility
                })
            }
        };
        this.setThumbVisibility = function() {
            if (i.getZIndex() == 0) {
                i.setVisible(false)
            }
        };
        this.update = function() {
            if (r.showRefl) {
                if (!i.reflCanvasDO) {
                    i.addReflection()
                } else {
                    i.reflCanvasDO.setAlpha(1);
                    i.reflCanvasDO.setY(i.thumbHeight + r.reflDist)
                }
            } else {
                if (i.reflCanvasDO) {
                    i.reflCanvasDO.setAlpha(0)
                }
            }
        };
        this.hide = function(e) {
            var t = i.thumbWidth - i.borderSize * 2;
            var r = i.thumbHeight - i.borderSize * 2;
            FWDR3DCarModTweenMax.to(i.imageHolderDO, .8, {
                x: parseInt(i.thumbWidth / 2),
                y: parseInt(i.thumbHeight / 2),
                w: 0,
                h: 0,
                delay: e,
                ease: Expo.easeInOut
            });
            if (n.showThumbnailsHtmlContent) {
                if (i.htmlContentDO) {
                    FWDR3DCarModTweenMax.to(i.htmlContentDO, .8, {
                        x: -parseInt(t / 2),
                        y: -parseInt(r / 2),
                        delay: e,
                        ease: Expo.easeInOut
                    })
                }
            } else {
                if (i.imageDO) {
                    FWDR3DCarModTweenMax.to(i.imageDO, .8, {
                        x: -parseInt(t / 2),
                        y: -parseInt(r / 2),
                        delay: e,
                        ease: Expo.easeInOut
                    });
                    if (i.reflCanvasDO) {
                        FWDR3DCarModTweenMax.to(i.reflCanvasDO, .8, {
                            alpha: 0,
                            delay: e,
                            ease: Expo.easeInOut
                        })
                    }
                }
            }
        };
        this.onMouseClickHandler = function() {
            i.dispatchEvent(t.CLICK, {
                id: i.id
            })
        };
        this.onMouseTouchHandler = function(e) {
            if (e.preventDefault) e.preventDefault();
            i.dispatchEvent(t.CLICK, {
                id: i.id
            })
        };
        this.destroy = function() {
            FWDR3DCarModTweenMax.killTweensOf(i);
            FWDR3DCarModTweenMax.killTweensOf(i.mainDO);
            FWDR3DCarModTweenMax.killTweensOf(i.imageHolderDO);
            if (i.isMobile) {
                if (i.hasPointerEvent) {
                    i.mainDO.screen.removeEventListener("MSPointerUp", i.onMouseTouchHandler)
                } else {
                    i.mainDO.screen.removeEventListener("touchend", i.onMouseTouchHandler)
                }
            } else {
                if (i.screen.addEventListener) {
                    i.mainDO.screen.removeEventListener("click", i.onMouseClickHandler)
                } else {
                    i.mainDO.screen.detachEvent("onclick", i.onMouseClickHandler)
                }
            }
            clearTimeout(i.setTextHeightId);
            if (i.imageDO) {
                FWDR3DCarModTweenMax.killTweensOf(i.imageDO);
                i.imageDO.disposeImage();
                i.imageDO.destroy()
            }
            if (i.htmlContentDO) {
                FWDR3DCarModTweenMax.killTweensOf(i.htmlContentDO);
                i.htmlContentDO.destroy();
                i.htmlContentDO = null
            }
            if (i.bgDO) {
                FWDR3DCarModTweenMax.killTweensOf(i.bgDO);
                i.bgDO.destroy();
                i.bgDO = null
            }
            if (i.borderDO) {
                FWDR3DCarModTweenMax.killTweensOf(i.borderDO);
                i.borderDO.destroy();
                i.borderDO = null
            }
            if (i.htmlContentDO) {
                FWDR3DCarModTweenMax.killTweensOf(i.htmlContentDO);
                i.htmlContentDO.destroy()
            }
            if (i.gradientLeftDO) {
                FWDR3DCarModTweenMax.killTweensOf(i.gradientLeftDO);
                i.gradientLeftDO.destroy()
            }
            if (i.gradientRightDO) {
                FWDR3DCarModTweenMax.killTweensOf(i.gradientRightDO);
                i.gradientRightDO.destroy()
            }
            if (i.textGradientDO) {
                FWDR3DCarModTweenMax.killTweensOf(i.textGradientDO);
                i.textGradientDO = null
            }
            if (i.textDO) {
                FWDR3DCarModTweenMax.killTweensOf(i.textDO);
                i.textDO = null
            }
            if (i.textHolderDO) {
                FWDR3DCarModTweenMax.killTweensOf(i.textHolderDO);
                i.textHolderDO = null
            }
            i.imageHolderDO.destroy();
            i.mainDO.destroy();
            i.imageHolderDO = null;
            i.imageDO = null;
            i.htmlContentDO = null;
            i.mainDO = null;
            i.borderDO = null;
            i.bgDO = null;
            i.imageHolderDO = null;
            i.imageDO = null;
            i.htmlContentDO = null;
            i.gradientDO = null;
            i.gradientLeftDO = null;
            i.gradientRightDO = null;
            i.textHolderDO = null;
            i.textGradientDO = null;
            i.textDO = null;
            i.id = null;
            i.data = null;
            i.parent = null;
            i.backgroundColor = null;
            i.borderColor = null;
            i.screen.innerHTML = "";
            s.destroy();
            s = null;
            i = null;
            t.prototype = null
        };
        this.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDR3DCarDisplayObject3D("div", "absolute", "visible")
    };
    t.CLICK = "click";
    t.prototype = null;
    e.FWDR3DCarThumb = t
})(window); (function(e) {
    var t = function(n, r) {
        var i = this;
        var s = t.prototype;
        this.data = n;
        this.parent = r;
        this.stageWidth = r.stageWidth;
        this.stageHeight = r.stageHeight;
        this.thumbsHolderDO;
        this.totalThumbs;
        this.thumbsAr = [];
        this.dataListId = n.startAtCategory;
        this.curDataListAr;
        this.nrThumbsToDisplay = n.nrThumbsToDisplay;
        this.dragCurId;
        this.prevCurId;
        this.curId;
        this.thumbWidth = n.thumbWidth;
        this.thumbHeight = n.thumbHeight;
        this.borderSize = n.thumbBorderSize;
        this.perspective = i.thumbWidth;
        this.sizeRatio = i.thumbWidth / 400;
        this.countLoadedThumbsLeft;
        this.countLoadedThumbsRight;
        this.controlsDO;
        this.prevButtonDO;
        this.nextButtonDO;
        this.scrollbarDO;
        this.slideshowButtonDO;
        this.showSlideshowButton = i.data.showSlideshowButton || i.data.autoplay;
        this.controlsHeight = i.data.nextButtonNImg.height;
        this.showText = i.data.showText;
        this.textDO;
        this.textHolderDO;
        this.textGradientDO;
        this.thumbOverDO;
        this.showRefl = n.showRefl;
        this.reflHeight = n.reflHeight;
        this.reflDist = n.reflDist;
        this.reflAlpha = n.reflAlpha;
        this.isThumbOver = false;
        this.hasThumbText = false;
        this.introFinished = false;
        this.isPlaying = false;
        this.disableThumbClick = false;
        this.isTextSet = false;
        this.allowToSwitchCat = false;
        this.hasPointerEvent = FWDR3DCarUtils.hasPointerEvent;
        this.isMobile = FWDR3DCarUtils.isMobile;
        this.loadWithDelayIdLeft;
        this.loadWithDelayIdRight;
        this.slideshowTimeoutId;
        this.textTimeoutId;
        this.zSortingId;
        this.hideThumbsFinishedId;
        this.loadHtmlContentsId;
        this.loadImagesId;
        this.setTextHeightId;
        this.setIntroFinishedId;
        this.showControlsId;
        this.init = function() {
            i.thumbsHolderDO = new FWDR3DCarDisplayObject3D("div", "absolute", "visible");
            i.addChild(i.thumbsHolderDO);
            i.thumbsHolderDO.setZ(1e5);
            i.thumbsHolderDO.setPerspective(i.perspective);
            i.thumbsHolderDO.setX(Math.floor(i.stageWidth / 2));
            i.thumbsHolderDO.setY(Math.floor(i.stageHeight / 2 - i.data.prevButtonNImg.height / 2));
            if (!i.isMobile && !FWDR3DCarUtils.isSafari || FWDR3DCarUtils.isAndroidAndWebkit) {
                i.thumbsHolderDO.setPreserve3D()
            }
            if (!i.isMobile) {
                if (i.screen.addEventListener) {
                    e.addEventListener("mousemove", i.onThumbMove)
                } else {
                    document.attachEvent("onmousemove", i.onThumbMove)
                }
            }
            if (i.hasPointerEvent) {
                e.addEventListener("MSPointerMove", i.onThumbMove)
            }
            i.showScrollbar = n.showScrollbar;
            i.showNextButton = n.showNextButton;
            i.showPrevButton = n.showPrevButton;
            if (i.isMobile) {
                if (n.disableScrollbarOnMobile) {
                    i.showScrollbar = false
                }
                if (n.disableNextAndPrevButtonsOnMobile) {
                    i.showNextButton = false;
                    i.showPrevButton = false
                }
            }
            if (i.showText) {
                i.setupText();
                if (i.isMobile) {
                    i.setupThumbOver()
                }
            }
            i.showCurrentCat( - 1);
            i.setupControls()
        };
        this.onThumbMove = function(e) {
            if (!i.textHolderDO) return;
            if (i.disableThumbClick) return;
            var t = FWDR3DCarUtils.getViewportMouseCoordinates(e);
            i.thumbMouseX = t.screenX - r.rect.left - (i.stageWidth - i.thumbWidth) / 2;
            i.thumbMouseY = t.screenY - r.rect.top - (i.stageHeight - n.prevButtonNImg.height - i.thumbHeight) / 2;
            if (i.isTextSet) {
                if (i.isMobile) {
                    i.checkThumbOver()
                } else {
                    i.thumbsAr[i.curId].checkThumbOver()
                }
            }
        };
        this.showCurrentCat = function(e) {
            if (e != i.dataListId && e >= 0) {
                i.allowToSwitchCat = false;
                i.hideCurrentCat();
                i.dataListId = e;
                return
            }
            i.thumbsAr = [];
            i.curDataListAr = i.data.dataListAr[i.dataListId];
            i.totalThumbs = i.curDataListAr.length;
            if (i.totalThumbs == 0) {
                var r = "This category doesn't contain any thumbnails!";
                i.dispatchEvent(t.LOAD_ERROR, {
                    text: r
                });
                return
            }
            if (i.isMobile) {
                i.totalThumbs = Math.min(i.totalThumbs, n.maxNumberOfThumbsOnMobile)
            }
            switch (i.data.carouselStartPosition) {
            case "left":
                i.curId = 0;
                break;
            case "right":
                i.curId = i.totalThumbs - 1;
                break;
            default:
                i.curId = Math.floor((i.totalThumbs - 1) / 2)
            }
            if (i.showScrollbar && i.scrollbarDO) {
                i.scrollbarDO.totalItems = i.totalThumbs;
                i.scrollbarDO.curItemId = i.curId;
                i.scrollbarDO.gotoItem2()
            }
            i.setupThumbs();
            i.prevCurId = i.curId;
            i.startIntro()
        };
        this.hideCurrentCat = function() {
            clearTimeout(i.loadWithDelayIdLeft);
            clearTimeout(i.loadWithDelayIdRight);
            clearTimeout(i.textTimeoutId);
            clearInterval(i.zSortingId);
            clearTimeout(i.hideThumbsFinishedId);
            clearTimeout(i.loadHtmlContentsId);
            clearTimeout(i.loadImagesId);
            clearTimeout(i.setTextHeightId);
            clearTimeout(i.setIntroFinishedId);
            clearTimeout(i.showControlsId);
            i.stopSlideshow();
            i.disableThumbClick = true;
            if (i.image) {
                i.image.onload = null;
                i.image.onerror = null
            }
            if (i.imageLeft) {
                i.imageLeft.onload = null;
                i.imageLeft.onerror = null
            }
            if (i.imageRight) {
                i.imageRight.onload = null;
                i.imageRight.onerror = null
            }
            i.hideThumbs()
        };
        this.hideThumbs = function() {
            var e;
            var t = -i.thumbWidth / 2;
            for (var n = 0; n < i.totalThumbs; n++) {
                thumb = i.thumbsAr[n];
                if (n == i.curId) {
                    i.hideThumbsFinishedId = setTimeout(i.hideThumbsFinished, 1200 + 500)
                } else if (Math.abs(n - i.curId) <= i.nrThumbsToDisplay) {
                    e = (i.nrThumbsToDisplay - Math.abs(n - i.curId) + 1) * 300;
                    FWDR3DCarModTweenMax.to(thumb, .5, {
                        x: Math.floor(t),
                        delay: e / 1e3,
                        ease: Expo.easeIn
                    });
                    thumb.hide((e - 250) / 1e3)
                } else {
                    thumb.setX(t)
                }
            }
        };
        this.hideThumbsFinished = function() {
            for (var e = 0; e < i.totalThumbs; e++) {
                thumb = i.thumbsAr[e];
                if (e == i.curId) {
                    thumb.hide(0);
                    FWDR3DCarModTweenMax.to(thumb, .6, {
                        alpha: 0,
                        delay: .2,
                        onComplete: i.allThumbsAreTweened
                    });
                    if (i.isMobile && i.textHolderDO) {
                        FWDR3DCarModTweenMax.to(i.textHolderDO, .6, {
                            alpha: 0,
                            delay: .2,
                            ease: Expo.easeOut
                        });
                        FWDR3DCarModTweenMax.to(i.textGradientDO, .6, {
                            alpha: 0,
                            delay: .2,
                            ease: Expo.easeOut
                        })
                    }
                } else {
                    thumb.setAlpha(0)
                }
            }
        };
        this.allThumbsAreTweened = function() {
            i.destroyCurrentCat();
            i.showCurrentCat()
        };
        this.destroyCurrentCat = function() {
            var e;
            for (var t = 0; t < i.totalThumbs; t++) {
                e = i.thumbsAr[t];
                FWDR3DCarModTweenMax.killTweensOf(e);
                i.thumbsHolderDO.removeChild(e);
                e.destroy();
                e = null
            }
        };
        this.startIntro = function() {
            i.disableThumbClick = true;
            thumb = i.thumbsAr[i.curId];
            var e = -i.thumbWidth / 2;
            var t = -i.thumbHeight / 2;
            thumb.setGradient(0);
            thumb.setX(Math.floor(e));
            thumb.setY(Math.floor(t));
            thumb.setAlpha(0);
            FWDR3DCarModTweenMax.to(thumb, .8, {
                alpha: 1
            });
            i.thumbsHolderDO.addChild(thumb);
            if (i.data.showThumbnailsHtmlContent) {
                i.loadCenterHtmlContent();
                i.loadHtmlContentsId = setTimeout(i.loadHtmlContents, 600)
            } else {
                i.loadCenterImage();
                i.loadImagesId = setTimeout(i.loadImages, 600)
            }
        };
        this.setupThumbs = function() {
            var e;
            for (var t = 0; t < i.totalThumbs; t++) {
                FWDR3DCarThumb.setPrototype();
                e = new FWDR3DCarThumb(t, i.data, i);
                i.thumbsAr.push(e);
                e.addListener(FWDR3DCarThumb.CLICK, i.onThumbClick)
            }
        };
        this.onThumbClick = function(e) {
            if (i.disableThumbClick) return;
            i.curId = e.id;
            i.thumbClickHandler()
        };
        this.thumbClickHandler = function() {
            if (i.curId != i.prevCurId) {
                i.gotoThumb()
            } else {
                var n = i.curDataListAr[i.curId].mediaType;
                var r = i.curId;
                if (n == "none") {
                    return
                }
                if (n != "link") {
                    for (var s = 0; s < i.totalThumbs; s++) {
                        if (s < i.curId && (i.curDataListAr[s].mediaType == "link" || i.curDataListAr[s].mediaType == "none")) {
                            r -= 1
                        }
                    }
                }
                if (n == "link") {
                    e.open(i.curDataListAr[i.curId].secondObj.url, i.curDataListAr[i.curId].secondObj.target)
                } else {
                    i.dispatchEvent(t.THUMB_CLICK, {
                        id: r
                    })
                }
            }
        };
        this.resizeHandler = function() {
            if (i.stageWidth == r.stageWidth && i.stageHeight == r.stageHeight) return;
            i.stageWidth = r.stageWidth;
            i.stageHeight = r.stageHeight;
            i.thumbsHolderDO.setX(Math.floor(i.stageWidth / 2));
            i.thumbsHolderDO.setY(Math.floor(i.stageHeight / 2 - i.data.prevButtonNImg.height / 2));
            i.positionControls();
            if (i.textHolderDO && i.isMobile) {
                i.textHolderDO.setX(Math.floor((i.stageWidth - i.thumbWidth) / 2) + i.borderSize);
                i.textHolderDO.setY(Math.floor((i.stageHeight - i.thumbHeight) / 2 - i.data.prevButtonNImg.height / 2) + i.borderSize)
            }
            if (i.thumbOverDO) {
                i.thumbOverDO.setX(Math.floor((i.stageWidth - i.thumbWidth) / 2));
                i.thumbOverDO.setY(Math.floor((i.stageHeight - i.thumbHeight - i.data.prevButtonNImg.height) / 2))
            }
        };
        this.setupText = function() {
            i.textHolderDO = new FWDR3DCarDisplayObject3D("div");
            i.addChild(i.textHolderDO);
            if (i.isMobile) {
                i.textHolderDO.setZ(2e5)
            }
            i.textHolderDO.setWidth(i.thumbWidth - i.borderSize * 2);
            i.textHolderDO.setHeight(i.thumbHeight - i.borderSize * 2);
            if (i.isMobile) {
                i.textHolderDO.setX(Math.floor((i.stageWidth - i.thumbWidth) / 2) + i.borderSize);
                i.textHolderDO.setY(Math.floor((i.stageHeight - i.thumbHeight - i.data.prevButtonNImg.height) / 2) + i.borderSize)
            } else {
                i.textHolderDO.setX( - 1e3)
            }
            if (i.data.showTextBackgroundImage) {
                i.textGradientDO = new FWDR3DCarSimpleDisplayObject("img");
                i.textHolderDO.addChild(i.textGradientDO);
                i.textGradientDO.setWidth(i.thumbWidth - i.borderSize * 2);
                i.textGradientDO.setHeight(i.thumbHeight - i.borderSize * 2);
                i.textGradientDO.screen.src = n.thumbTitleGradientPath
            } else {
                i.textGradientDO = new FWDR3DCarSimpleDisplayObject("div");
                i.textHolderDO.addChild(i.textGradientDO);
                i.textGradientDO.setWidth(i.thumbWidth - i.borderSize * 2);
                i.textGradientDO.setHeight(i.thumbHeight - i.borderSize * 2);
                i.textGradientDO.setBkColor(i.data.textBackgroundColor);
                i.textGradientDO.setAlpha(i.data.textBackgroundOpacity)
            }
            i.textDO = new FWDR3DCarSimpleDisplayObject("div");
            i.textHolderDO.addChild(i.textDO);
            i.textDO.setWidth(i.thumbWidth - i.borderSize * 2);
            i.textDO.getStyle().fontSmoothing = "antialiased";
            i.textDO.getStyle().webkitFontSmoothing = "antialiased";
            i.textDO.getStyle().textRendering = "optimizeLegibility"
        };
        this.setupThumbOver = function() {
            i.thumbOverDO = new FWDR3DCarDisplayObject("div");
            i.addChild(i.thumbOverDO);
            if (!i.isMobile) {
                i.thumbOverDO.setButtonMode(true)
            }
            if (FWDR3DCarUtils.isIE) {
                i.thumbOverDO.setBkColor("#000000");
                i.thumbOverDO.setAlpha(.001)
            }
            i.thumbOverDO.setWidth(i.thumbWidth);
            i.thumbOverDO.setHeight(i.thumbHeight);
            i.thumbOverDO.setX(Math.floor((i.stageWidth - i.thumbWidth) / 2));
            i.thumbOverDO.setY(Math.floor((i.stageHeight - i.thumbHeight - i.data.prevButtonNImg.height) / 2));
            if (i.isMobile) {
                if (i.hasPointerEvent) {
                    i.thumbOverDO.screen.addEventListener("MSPointerUp", i.onThumbOverTouch)
                } else {
                    i.thumbOverDO.screen.addEventListener("touchend", i.onThumbOverTouch)
                }
            } else {
                if (i.screen.addEventListener) {
                    i.thumbOverDO.screen.addEventListener("click", i.onThumbOverClick)
                } else {
                    i.thumbOverDO.screen.attachEvent("onclick", i.onThumbOverClick)
                }
            }
        };
        this.onThumbOverClick = function() {
            if (i.disableThumbClick) return;
            i.thumbClickHandler()
        };
        this.onThumbOverTouch = function(e) {
            if (e.preventDefault) e.preventDefault();
            if (i.disableThumbClick) return;
            i.thumbClickHandler()
        };
        this.addThumbText = function() {
            i.textHolderDO.setY(Math.floor((i.stageHeight - i.thumbHeight - i.data.prevButtonNImg.height) / 2) + i.borderSize);
            i.textDO.setInnerHTML(i.curDataListAr[i.curId].thumbText);
            i.textTitleOffset = i.curDataListAr[i.curId].textTitleOffset;
            i.textDescriptionOffsetTop = i.curDataListAr[i.curId].textDescriptionOffsetTop;
            i.textDescriptionOffsetBottom = i.curDataListAr[i.curId].textDescriptionOffsetBottom;
            i.textGradientDO.setY(i.thumbHeight - i.borderSize * 2 - i.textTitleOffset);
            i.textDO.setY(i.thumbHeight - i.borderSize * 2 - i.textTitleOffset + i.textDescriptionOffsetTop);
            i.textHolderDO.setAlpha(0);
            i.setTextHeightId = setTimeout(i.setTextHeight, 10)
        };
        this.setTextHeight = function() {
            i.textHeight = i.textDO.getHeight();
            FWDR3DCarModTweenMax.to(i.textHolderDO, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
            FWDR3DCarModTweenMax.to(i.textGradientDO, .8, {
                alpha: 1,
                ease: Expo.easeOut
            });
            i.hasThumbText = true;
            i.checkThumbOver()
        };
        this.removeThumbText = function() {
            if (i.isMobile) {
                i.removeTextFinish()
            } else {
                FWDR3DCarModTweenMax.to(i.textHolderDO, .6, {
                    alpha: 0,
                    ease: Expo.easeOut,
                    onComplete: i.removeTextFinish
                })
            }
        };
        this.removeTextFinish = function() {
            FWDR3DCarModTweenMax.killTweensOf(i.textHolderDO);
            FWDR3DCarModTweenMax.killTweensOf(i.textGradientDO);
            FWDR3DCarModTweenMax.killTweensOf(i.textDO);
            i.hasThumbText = false;
            i.isThumbOver = false;
            i.textHolderDO.setY(2e3)
        };
        this.checkThumbOver = function() {
            if (!i.hasThumbText) return;
            if (i.thumbMouseX >= 0 && i.thumbMouseX <= i.thumbWidth && i.thumbMouseY >= 0 && i.thumbMouseY <= i.thumbHeight) {
                i.onThumbOverHandler()
            } else {
                i.onThumbOutHandler()
            }
        };
        this.onThumbOverHandler = function() {
            if (!i.isThumbOver) {
                i.isThumbOver = true;
                FWDR3DCarModTweenMax.to(i.textGradientDO, .8, {
                    y: i.thumbHeight - i.borderSize * 2 - i.textDescriptionOffsetTop - i.textHeight - i.textDescriptionOffsetBottom,
                    ease: Expo.easeOut
                });
                FWDR3DCarModTweenMax.to(i.textDO, .8, {
                    y: i.thumbHeight - i.borderSize * 2 - i.textHeight - i.textDescriptionOffsetBottom,
                    ease: Expo.easeOut
                })
            }
        };
        this.onThumbOutHandler = function() {
            if (i.isThumbOver) {
                i.isThumbOver = false;
                FWDR3DCarModTweenMax.to(i.textGradientDO, .8, {
                    y: i.thumbHeight - i.borderSize * 2 - i.textTitleOffset,
                    ease: Expo.easeOut
                });
                FWDR3DCarModTweenMax.to(i.textDO, .8, {
                    y: i.thumbHeight - i.borderSize * 2 - i.textTitleOffset + i.textDescriptionOffsetTop,
                    ease: Expo.easeOut
                })
            }
        };
        this.loadImages = function() {
            if (FWDR3DCarUtils.hasTransform3d && !i.data.showDisplay2DAlways) {
                i.setupIntro3D()
            } else {
                i.setupIntro2D()
            }
            i.countLoadedThumbsLeft = i.curId - 1;
            i.loadWithDelayIdLeft = setTimeout(i.loadThumbImageLeft, 100);
            i.countLoadedThumbsRight = i.curId + 1;
            i.loadWithDelayIdRight = setTimeout(i.loadThumbImageRight, 100)
        };
        this.loadCenterImage = function() {
            i.imagePath = i.curDataListAr[i.curId].thumbPath;
            i.image = new Image;
            i.image.onerror = i.onImageLoadErrorHandler;
            i.image.onload = i.onImageLoadHandlerCenter;
            i.image.src = i.imagePath
        };
        this.onImageLoadHandlerCenter = function(e) {
            var t = i.thumbsAr[i.curId];
            t.addImage(i.image);
            if (FWDR3DCarUtils.hasTransform3d && !i.data.showDisplay2DAlways) {
                t.showThumb3D()
            } else {
                t.showThumb2D()
            }
            if (i.showText) {
                i.isTextSet = true;
                if (i.isMobile) {
                    i.addThumbText()
                } else {
                    t.addText(i.textHolderDO, i.textGradientDO, i.textDO)
                }
            }
        };
        this.loadThumbImageLeft = function() {
            if (i.countLoadedThumbsLeft < 0) return;
            i.imagePath = i.curDataListAr[i.countLoadedThumbsLeft].thumbPath;
            i.imageLeft = new Image;
            i.imageLeft.onerror = i.onImageLoadErrorHandler;
            i.imageLeft.onload = i.onImageLoadHandlerLeft;
            i.imageLeft.src = i.imagePath
        };
        this.onImageLoadHandlerLeft = function(e) {
            var t = i.thumbsAr[i.countLoadedThumbsLeft];
            t.addImage(i.imageLeft);
            if (Math.abs(i.countLoadedThumbsLeft - i.curId) <= i.nrThumbsToDisplay) {
                if (FWDR3DCarUtils.hasTransform3d && !i.data.showDisplay2DAlways) {
                    t.showThumb3D()
                } else {
                    t.showThumb2D()
                }
            }
            i.countLoadedThumbsLeft--;
            i.loadWithDelayIdLeft = setTimeout(i.loadThumbImageLeft, 200)
        };
        this.loadThumbImageRight = function() {
            if (i.countLoadedThumbsRight > i.totalThumbs - 1) return;
            i.imagePath = i.curDataListAr[i.countLoadedThumbsRight].thumbPath;
            i.imageRight = new Image;
            i.imageRight.onerror = i.onImageLoadErrorHandler;
            i.imageRight.onload = i.onImageLoadHandlerRight;
            i.imageRight.src = i.imagePath
        };
        this.onImageLoadHandlerRight = function(e) {
            var t = i.thumbsAr[i.countLoadedThumbsRight];
            t.addImage(i.imageRight);
            if (Math.abs(i.countLoadedThumbsRight - i.curId) <= i.nrThumbsToDisplay) {
                if (FWDR3DCarUtils.hasTransform3d && !i.data.showDisplay2DAlways) {
                    t.showThumb3D()
                } else {
                    t.showThumb2D()
                }
            }
            i.countLoadedThumbsRight++;
            i.loadWithDelayIdRight = setTimeout(i.loadThumbImageRight, 200)
        };
        this.onImageLoadErrorHandler = function(e) {
            if (!i || !i.data) return;
            var n = "Thumb can't be loaded, probably the path is incorrect <font color='#FFFFFF'>" + i.imagePath + "</font>";
            i.dispatchEvent(t.LOAD_ERROR, {
                text: n
            })
        };
        this.loadHtmlContents = function() {
            if (FWDR3DCarUtils.hasTransform3d && !i.data.showDisplay2DAlways) {
                i.setupIntro3D()
            } else {
                i.setupIntro2D()
            }
            i.countLoadedThumbsLeft = i.curId - 1;
            i.loadWithDelayIdLeft = setTimeout(i.loadThumbHtmlContentLeft, 100);
            i.countLoadedThumbsRight = i.curId + 1;
            i.loadWithDelayIdRight = setTimeout(i.loadThumbHtmlContentRight, 100)
        };
        this.loadCenterHtmlContent = function() {
            var e = i.thumbsAr[i.curId];
            e.addHtmlContent();
            if (FWDR3DCarUtils.hasTransform3d && !i.data.showDisplay2DAlways) {
                e.showThumb3D()
            } else {
                e.showThumb2D()
            }
            if (i.showText) {
                i.isTextSet = true;
                if (i.isMobile) {
                    i.addThumbText()
                } else {
                    e.addText(i.textHolderDO, i.textGradientDO, i.textDO)
                }
            }
        };
        this.loadThumbHtmlContentLeft = function() {
            if (i.countLoadedThumbsLeft < 0) return;
            var e = i.thumbsAr[i.countLoadedThumbsLeft];
            e.addHtmlContent();
            if (Math.abs(i.countLoadedThumbsLeft - i.curId) <= i.nrThumbsToDisplay) {
                if (FWDR3DCarUtils.hasTransform3d && !i.data.showDisplay2DAlways) {
                    e.showThumb3D()
                } else {
                    e.showThumb2D()
                }
            }
            i.countLoadedThumbsLeft--;
            i.loadWithDelayIdLeft = setTimeout(i.loadThumbHtmlContentLeft, 200)
        };
        this.loadThumbHtmlContentRight = function() {
            if (i.countLoadedThumbsRight > i.totalThumbs - 1) return;
            var e = i.thumbsAr[i.countLoadedThumbsRight];
            e.addHtmlContent();
            if (Math.abs(i.countLoadedThumbsRight - i.curId) <= i.nrThumbsToDisplay) {
                if (FWDR3DCarUtils.hasTransform3d && !i.data.showDisplay2DAlways) {
                    e.showThumb3D()
                } else {
                    e.showThumb2D()
                }
            }
            i.countLoadedThumbsRight++;
            i.loadWithDelayIdRight = setTimeout(i.loadThumbHtmlContentRight, 200)
        };
        this.setupIntro3D = function() {
            var e;
            var t;
            var n;
            var r;
            var s;
            var o;
            var u;
            for (var a = 0; a < i.totalThumbs; a++) {
                thumb = i.thumbsAr[a];
                e = 0;
                t = 0;
                n = 0;
                r = 0;
                s = 0;
                o = 0;
                e -= i.thumbWidth / 2;
                t -= i.thumbHeight / 2;
                var f = 0;
                if (a < i.curId) {
                    f = -1
                } else if (a > i.curId) {
                    f = 1
                }
                var l;
                var c;
                var h;
                var p;
                var d;
                var v;
                switch (i.nrThumbsToDisplay) {
                case 1:
                    l = 250 * f;
                    c = -5;
                    h = -220;
                    p = 15;
                    d = 25 * f;
                    v = -4 * f;
                    break;
                case 2:
                    l = 630 * f;
                    c = 0;
                    h = -500;
                    p = 25;
                    d = 28 * f;
                    v = -13 * f;
                    break;
                case 3:
                    l = 1130 * f;
                    c = 0;
                    h = -900;
                    p = 32;
                    d = 28 * f;
                    v = -20 * f;
                    break;
                default:
                    l = 1475 * f;
                    c = -20;
                    h = -1200;
                    p = 50;
                    d = 20 * f;
                    v = -28 * f
                }
                switch (Math.abs(a - i.curId)) {
                case 0:
                    break;
                case 1:
                    n = -120;
                    break;
                case 2:
                    if (i.nrThumbsToDisplay >= 2) {
                        n = -400
                    } else {
                        n = h
                    }
                    break;
                case 3:
                    if (i.nrThumbsToDisplay >= 3) {
                        n = -800
                    } else {
                        n = h
                    }
                    break;
                case 4:
                    if (i.nrThumbsToDisplay >= 4) {
                        n = -1100
                    } else {
                        n = h
                    }
                    break;
                default:
                    n = h
                }
                thumb.setX(Math.floor(e));
                thumb.setY(Math.floor(t));
                thumb.setZ(Math.floor(n));
                e = 0;
                t = 0;
                n = 0;
                switch (Math.abs(a - i.curId)) {
                case 0:
                    if (FWDR3DCarUtils.isIEAndMoreThen9) thumb.setZIndex(5);
                    break;
                case 1:
                    e = 350 * f;
                    t = -5;
                    n = -126 - Math.floor(Math.max(i.thumbHeight - 266, 0) / 2.5);
                    r = 15;
                    s = 25 * f;
                    o = -4 * f;
                    if (FWDR3DCarUtils.isIEAndMoreThen9) thumb.setZIndex(4);
                    break;
                case 2:
                    if (i.nrThumbsToDisplay >= 2) {
                        e = 730 * f;
                        n = -400;
                        r = 25;
                        s = 28 * f;
                        o = -13 * f
                    } else {
                        e = l;
                        t = c;
                        n = h;
                        r = p;
                        s = d;
                        o = v
                    }
                    if (FWDR3DCarUtils.isIEAndMoreThen9) thumb.setZIndex(3);
                    break;
                case 3:
                    if (i.nrThumbsToDisplay >= 3) {
                        e = 1230 * f;
                        n = -800;
                        r = 32;
                        s = 28 * f;
                        o = -20 * f
                    } else {
                        e = l;
                        t = c;
                        n = h;
                        r = p;
                        s = d;
                        o = v
                    }
                    if (FWDR3DCarUtils.isIEAndMoreThen9) thumb.setZIndex(2);
                    break;
                case 4:
                    if (i.nrThumbsToDisplay >= 4) {
                        e = 1575 * f;
                        t = -20;
                        n = -1100;
                        r = 50;
                        s = 20 * f;
                        o = -28 * f
                    } else {
                        e = l;
                        t = c;
                        n = h;
                        r = p;
                        s = d;
                        o = v
                    }
                    if (FWDR3DCarUtils.isIEAndMoreThen9) thumb.setZIndex(1);
                    break;
                default:
                    e = l;
                    t = c;
                    n = h;
                    r = p;
                    s = d;
                    o = v;
                    if (FWDR3DCarUtils.isIEAndMoreThen9) thumb.setZIndex(0)
                }
                e += i.data.thumbSpaceOffset3D * f * -n / 300;
                e *= i.sizeRatio;
                t *= i.sizeRatio;
                n *= i.sizeRatio;
                var m = i.thumbHeight / i.thumbWidth;
                if (m > .7) {
                    e *= Math.min(1 / m, .8);
                    t *= Math.max(m, 1.1) * 1.5
                }
                e = Math.floor(e) - Math.floor(i.thumbWidth / 2);
                t = Math.floor(t) - Math.floor(i.thumbHeight / 2);
                thumb.setGradient(f);
                u = Math.min(Math.abs(a - i.curId), i.nrThumbsToDisplay) * 200;
                FWDR3DCarModTweenMax.to(thumb, .8, {
                    x: Math.floor(e),
                    y: Math.floor(t),
                    z: Math.floor(n),
                    angleX: r,
                    angleY: s,
                    angleZ: o,
                    delay: u / 1e3,
                    ease: Expo.easeOut
                });
                i.thumbsHolderDO.addChild(thumb)
            }
            i.setIntroFinishedId = setTimeout(i.setIntroFinished, u + 800);
            i.showControlsId = setTimeout(i.showControls, u)
        };
        this.setupIntro2D = function() {
            var e;
            var t;
            var n;
            for (var r = 0; r < i.totalThumbs; r++) {
                thumb = i.thumbsAr[r];
                e = 0;
                t = 1;
                var s = 0;
                if (r < i.curId) {
                    s = -1
                } else if (r > i.curId) {
                    s = 1
                }
                var o;
                var u;
                switch (i.nrThumbsToDisplay) {
                case 1:
                    o = 100 * s;
                    u = .8;
                    break;
                case 2:
                    o = 140 * s;
                    u = .7;
                    break;
                case 3:
                    o = 200 * s;
                    u = .6;
                    break;
                default:
                    o = 250 * s;
                    u = .5
                }
                switch (Math.abs(r - i.curId)) {
                case 0:
                    thumb.setZIndex(5);
                    break;
                case 1:
                    e = 150 * s;
                    t = .9;
                    thumb.setZIndex(4);
                    break;
                case 2:
                    if (i.nrThumbsToDisplay >= 2) {
                        e = 240 * s;
                        t = .8
                    } else {
                        e = o;
                        t = u
                    }
                    thumb.setZIndex(3);
                    break;
                case 3:
                    if (i.nrThumbsToDisplay >= 3) {
                        e = 300 * s;
                        t = .7
                    } else {
                        e = o;
                        t = u
                    }
                    thumb.setZIndex(2);
                    break;
                case 4:
                    if (i.nrThumbsToDisplay >= 4) {
                        e = 350 * s;
                        t = .6
                    } else {
                        e = o;
                        t = u
                    }
                    thumb.setZIndex(1);
                    break;
                default:
                    e = o;
                    t = u;
                    thumb.setZIndex(0)
                }
                e += i.data.thumbSpaceOffset2D * s;
                if (Math.abs(r - i.curId) == 1) {
                    e -= i.data.thumbSpaceOffset2D / 4 * s
                }
                e *= i.sizeRatio;
                var a = i.thumbHeight / i.thumbWidth;
                if (a > .7) {
                    e *= Math.min(1 / a, .8)
                }
                e -= i.thumbWidth / 2;
                thumb.newX = Math.floor(e);
                thumb.setGradient(s);
                n = Math.min(Math.abs(r - i.curId), i.nrThumbsToDisplay) * 200;
                thumb.showThumbIntro2D(t, n / 1e3);
                i.thumbsHolderDO.addChild(thumb)
            }
            i.setIntroFinishedId = setTimeout(i.setIntroFinished, n + 800);
            i.showControlsId = setTimeout(i.showControls, n)
        };
        this.setIntroFinished = function() {
            i.introFinished = true;
            i.allowToSwitchCat = true;
            i.disableThumbClick = false;
            i.dispatchEvent(t.THUMBS_INTRO_FINISH);
            if (i.isMobile) {
                i.setupMobileDrag()
            }
            if (FWDR3DCarUtils.isIEAndMoreThen9 || !FWDR3DCarUtils.hasTransform3d || i.data.showDisplay2DAlways) {
                i.zSortingId = setInterval(i.sortZ, 16)
            }
            if (i.data.autoplay) {
                if (i.slideshowButtonDO) {
                    i.slideshowButtonDO.onClick();
                    i.slideshowButtonDO.onMouseOut()
                }
            }
        };
        this.gotoThumb = function() {
            if (!i.introFinished) return;
            if (i.showScrollbar && !i.scrollbarDO.isPressed) {
                i.scrollbarDO.gotoItem(i.curId, true)
            }
            if (i.isPlaying) {
                clearTimeout(i.slideshowTimeoutId);
                i.slideshowTimeoutId = setTimeout(i.startTimeAgain, i.data.transitionDelay);
                if (i.slideshowButtonDO.isCounting) {
                    i.slideshowButtonDO.resetCounter()
                }
            }
            if (i.showText) {
                if (i.isTextSet) {
                    i.isTextSet = false;
                    if (i.isMobile) {
                        i.removeThumbText()
                    } else {
                        i.thumbsAr[i.prevCurId].removeText()
                    }
                    clearTimeout(i.textTimeoutId);
                    i.textTimeoutId = setTimeout(i.setThumbText, 800)
                } else {
                    clearTimeout(i.textTimeoutId);
                    i.textTimeoutId = setTimeout(i.setThumbText, 800)
                }
            }
            i.prevCurId = i.curId;
            if (FWDR3DCarUtils.hasTransform3d && !i.data.showDisplay2DAlways) {
                i.gotoThumb3D()
            } else {
                i.gotoThumb2D()
            }
            i.dispatchEvent(t.THUMB_CHANGE, {
                id: i.curId
            })
        };
        this.setThumbText = function() {
            i.isTextSet = true;
            if (i.isMobile) {
                i.addThumbText()
            } else {
                i.thumbsAr[i.curId].addText(i.textHolderDO, i.textGradientDO, i.textDO)
            }
        };
        this.gotoThumb3D = function() {
            var e;
            var t;
            var n;
            var r;
            var s;
            var o;
            for (var u = 0; u < i.totalThumbs; u++) {
                thumb = i.thumbsAr[u];
                e = 0;
                t = 0;
                n = 0;
                r = 0;
                s = 0;
                o = 0;
                var a = 0;
                if (u < i.curId) {
                    a = -1
                } else if (u > i.curId) {
                    a = 1
                }
                var f;
                var l;
                var c;
                var h;
                var p;
                var d;
                switch (i.nrThumbsToDisplay) {
                case 1:
                    f = 250 * a;
                    l = -5;
                    c = -220;
                    h = 15;
                    p = 25 * a;
                    d = -4 * a;
                    break;
                case 2:
                    f = 630 * a;
                    l = 0;
                    c = -500;
                    h = 25;
                    p = 28 * a;
                    d = -13 * a;
                    break;
                case 3:
                    f = 1130 * a;
                    l = 0;
                    c = -900;
                    h = 32;
                    p = 28 * a;
                    d = -20 * a;
                    break;
                default:
                    f = 1475 * a;
                    l = -20;
                    c = -1200;
                    h = 50;
                    p = 20 * a;
                    d = -28 * a
                }
                switch (Math.abs(u - i.curId)) {
                case 0:
                    break;
                case 1:
                    e = 350 * a;
                    t = -5;
                    n = -126 - Math.floor(Math.max(i.thumbHeight - 266, 0) / 2.5);
                    r = 15;
                    s = 25 * a;
                    o = -4 * a;
                    break;
                case 2:
                    if (i.nrThumbsToDisplay >= 2) {
                        e = 730 * a;
                        n = -400;
                        r = 25;
                        s = 28 * a;
                        o = -13 * a
                    } else {
                        e = f;
                        t = l;
                        n = c;
                        r = h;
                        s = p;
                        o = d
                    }
                    break;
                case 3:
                    if (i.nrThumbsToDisplay >= 3) {
                        e = 1230 * a;
                        n = -800;
                        r = 32;
                        s = 28 * a;
                        o = -20 * a
                    } else {
                        e = f;
                        t = l;
                        n = c;
                        r = h;
                        s = p;
                        o = d
                    }
                    break;
                case 4:
                    if (i.nrThumbsToDisplay >= 4) {
                        e = 1575 * a;
                        t = -20;
                        n = -1100;
                        r = 50;
                        s = 20 * a;
                        o = -28 * a
                    } else {
                        e = f;
                        t = l;
                        n = c;
                        r = h;
                        s = p;
                        o = d
                    }
                    break;
                default:
                    e = f;
                    t = l;
                    n = c;
                    r = h;
                    s = p;
                    o = d
                }
                e += i.data.thumbSpaceOffset3D * a * -n / 300;
                e *= i.sizeRatio;
                t *= i.sizeRatio;
                n *= i.sizeRatio;
                var v = i.thumbHeight / i.thumbWidth;
                if (v > .7) {
                    e *= Math.min(1 / v, .8);
                    t *= Math.max(v, 1.1) * 1.5
                }
                e = Math.floor(e) - Math.floor(i.thumbWidth / 2);
                t = Math.floor(t) - Math.floor(i.thumbHeight / 2);
                FWDR3DCarModTweenMax.killTweensOf(thumb);
                if ((thumb.getX() + Math.floor(i.thumbWidth / 2)) * (e + Math.floor(i.thumbWidth / 2)) < 0) {
                    FWDR3DCarModTweenMax.to(thumb, .8, {
                        bezier: {
                            values: [{
                                x: -Math.floor(i.thumbWidth / 2),
                                y: -Math.floor(i.thumbHeight / 2),
                                z: 0,
                                angleX: 0,
                                angleY: 0,
                                angleZ: 0
                            },
                            {
                                x: Math.floor(e),
                                y: Math.floor(t),
                                z: Math.floor(n),
                                angleX: r,
                                angleY: s,
                                angleZ: o
                            }]
                        },
                        ease: Quart.easeOut
                    });
                    thumb.setGradient(a)
                } else {
                    if (Math.abs(u - i.curId) < i.nrThumbsToDisplay || thumb.getX() != Math.floor(e)) {
                        FWDR3DCarModTweenMax.to(thumb, .8, {
                            x: Math.floor(e),
                            y: Math.floor(t),
                            z: Math.floor(n),
                            angleX: r,
                            angleY: s,
                            angleZ: o,
                            ease: Quart.easeOut
                        });
                        thumb.setGradient(a)
                    }
                }
            }
        };
        this.gotoThumb2D = function() {
            var e;
            var t;
            for (var n = 0; n < i.totalThumbs; n++) {
                thumb = i.thumbsAr[n];
                e = 0;
                newY = 0;
                t = 1;
                var r = 0;
                if (n < i.curId) {
                    r = -1
                } else if (n > i.curId) {
                    r = 1
                }
                var s;
                var o;
                switch (i.nrThumbsToDisplay) {
                case 1:
                    s = 100 * r;
                    o = .8;
                    break;
                case 2:
                    s = 140 * r;
                    o = .7;
                    break;
                case 3:
                    s = 200 * r;
                    o = .6;
                    break;
                default:
                    s = 250 * r;
                    o = .5
                }
                switch (Math.abs(n - i.curId)) {
                case 0:
                    break;
                case 1:
                    e = 150 * r;
                    t = .9;
                    break;
                case 2:
                    if (i.nrThumbsToDisplay >= 2) {
                        e = 240 * r;
                        t = .8
                    } else {
                        e = s;
                        t = o
                    }
                    break;
                case 3:
                    if (i.nrThumbsToDisplay >= 3) {
                        e = 300 * r;
                        t = .7
                    } else {
                        e = s;
                        t = o
                    }
                    break;
                case 4:
                    if (i.nrThumbsToDisplay >= 4) {
                        e = 350 * r;
                        t = .6
                    } else {
                        e = s;
                        t = o
                    }
                    break;
                default:
                    e = s;
                    t = o
                }
                e += i.data.thumbSpaceOffset2D * r;
                if (Math.abs(n - i.curId) == 1) {
                    e -= i.data.thumbSpaceOffset2D / 4 * r
                }
                e *= i.sizeRatio;
                var u = i.thumbHeight / i.thumbWidth;
                if (u > .7) {
                    e *= Math.min(1 / u, .8)
                }
                e -= i.thumbWidth / 2;
                if (Math.abs(n - i.curId) < i.nrThumbsToDisplay || thumb.getX() != Math.floor(e)) {
                    thumb.newX = Math.floor(e);
                    thumb.setScale(t);
                    thumb.setGradient(r)
                }
            }
        };
        this.sortZ = function() {
            var e = 1e4;
            var t;
            var n;
            for (var r = 0; r < i.totalThumbs; r++) {
                thumb = i.thumbsAr[r];
                var s = thumb.getX() + i.thumbWidth / 2;
                if (Math.abs(s) < e) {
                    e = Math.abs(s);
                    t = r
                }
            }
            for (var r = 0; r < i.totalThumbs; r++) {
                thumb = i.thumbsAr[r];
                switch (Math.abs(r - t)) {
                case 0:
                    n = 5;
                    break;
                case 1:
                    n = 4;
                    break;
                case 2:
                    n = 3;
                    break;
                case 3:
                    n = 2;
                    break;
                case 4:
                    n = 1;
                    break;
                default:
                    n = 0
                }
                if (n != thumb.getZIndex()) {
                    thumb.setZIndex(n)
                }
            }
        };
        this.setupControls = function() {
            i.controlsDO = new FWDR3DCarDisplayObject3D("div");
            i.addChild(i.controlsDO);
            i.controlsDO.setZ(2e5);
            i.controlsWidth = i.data.prevButtonNImg.width;
            if (i.showScrollbar) {
                i.setupScrollbar()
            }
            if (i.showPrevButton) {
                i.setupPrevButton()
            }
            if (i.showNextButton) {
                i.setupNextButton()
            }
            if (i.showSlideshowButton) {
                i.setupSlideshowButton()
            }
            if (i.data.enableMouseWheelScroll) {
                i.addMouseWheelSupport()
            }
            if (i.data.addKeyboardSupport) {
                i.addKeyboardSupport()
            }
            if (i.showScrollbar) {
                i.controlsWidth -= i.scrollbarDO.getWidth();
                i.scrollbarDO.scrollbarMaxWidth -= i.controlsWidth;
                i.scrollbarDO.resize2();
                i.scrollbarDO.resize(i.stageWidth, i.controlsWidth);
                var e = i.scrollbarDO.getX() + i.scrollbarDO.getWidth();
                if (i.showNextButton) {
                    i.nextButtonDO.setX(e);
                    e += i.nextButtonDO.getWidth()
                }
                if (i.showSlideshowButton) {
                    i.slideshowButtonDO.setX(e)
                }
            }
            if (i.showScrollbar) {
                i.controlsDO.setX(Math.floor((i.stageWidth - (i.controlsWidth + i.scrollbarDO.getWidth())) / 2));
                i.controlsDO.setWidth(i.controlsWidth + i.scrollbarDO.getWidth())
            } else {
                i.controlsDO.setX(Math.floor((i.stageWidth - i.controlsWidth) / 2));
                i.controlsDO.setWidth(i.controlsWidth)
            }
            i.controlsDO.setY(i.stageHeight);
            i.controlsDO.setHeight(i.data.prevButtonNImg.height)
        };
        this.showControls = function() {
            FWDR3DCarModTweenMax.to(i.controlsDO, .8, {
                y: i.stageHeight - i.controlsHeight,
                ease: Expo.easeOut
            })
        };
        this.positionControls = function() {
            if (i.showScrollbar) {
                i.scrollbarDO.resize(i.stageWidth, i.controlsWidth);
                var e = i.scrollbarDO.getX() + i.scrollbarDO.getWidth();
                if (i.showNextButton) {
                    i.nextButtonDO.setX(e);
                    e += i.nextButtonDO.getWidth()
                }
                if (i.showSlideshowButton) {
                    i.slideshowButtonDO.setX(e)
                }
            }
            if (i.showScrollbar) {
                i.controlsDO.setX(Math.floor((i.stageWidth - (i.controlsWidth + i.scrollbarDO.getWidth())) / 2));
                i.controlsDO.setWidth(i.controlsWidth + i.scrollbarDO.getWidth())
            } else {
                i.controlsDO.setX(Math.floor((i.stageWidth - i.controlsWidth) / 2));
                i.controlsDO.setWidth(i.controlsWidth)
            }
            i.controlsDO.setY(i.stageHeight - i.controlsHeight)
        };
        this.setupPrevButton = function() {
            FWDR3DCarSimpleButton.setPrototype();
            i.prevButtonDO = new FWDR3DCarSimpleButton(i.data.prevButtonNImg, i.data.prevButtonSImg);
            i.prevButtonDO.addListener(FWDR3DCarSimpleButton.CLICK, i.prevButtonOnClickHandler);
            i.controlsDO.addChild(i.prevButtonDO)
        };
        this.prevButtonOnClickHandler = function() {
            if (i.curId > 0) {
                i.curId--;
                i.gotoThumb()
            }
        };
        this.setupNextButton = function() {
            FWDR3DCarSimpleButton.setPrototype();
            i.nextButtonDO = new FWDR3DCarSimpleButton(i.data.nextButtonNImg, i.data.nextButtonSImg);
            i.nextButtonDO.addListener(FWDR3DCarSimpleButton.CLICK, i.nextButtonOnClickHandler);
            i.controlsDO.addChild(i.nextButtonDO);
            i.nextButtonDO.setX(i.controlsWidth);
            i.controlsWidth += i.nextButtonDO.getWidth()
        };
        this.nextButtonOnClickHandler = function() {
            if (i.curId < i.totalThumbs - 1) {
                i.curId++;
                i.gotoThumb()
            }
        };
        this.setupSlideshowButton = function() {
            FWDR3DCarSlideshowButton.setPrototype();
            i.slideshowButtonDO = new FWDR3DCarSlideshowButton(i.data);
            i.slideshowButtonDO.addListener(FWDR3DCarSlideshowButton.PLAY_CLICK, i.onSlideshowButtonPlayClickHandler);
            i.slideshowButtonDO.addListener(FWDR3DCarSlideshowButton.PAUSE_CLICK, i.onSlideshowButtonPauseClickHandler);
            i.slideshowButtonDO.addListener(FWDR3DCarSlideshowButton.TIME, i.onSlideshowButtonTime);
            i.controlsDO.addChild(i.slideshowButtonDO);
            i.slideshowButtonDO.setX(i.controlsWidth);
            i.controlsWidth += i.slideshowButtonDO.getWidth()
        };
        this.onSlideshowButtonPlayClickHandler = function() {
            i.isPlaying = true
        };
        this.onSlideshowButtonPauseClickHandler = function() {
            i.isPlaying = false;
            clearTimeout(i.slideshowTimeoutId)
        };
        this.startSlideshow = function() {
            if (!i.isPlaying) {
                i.isPlaying = true;
                i.slideshowButtonDO.start();
                i.slideshowButtonDO.onMouseOut()
            }
        };
        this.stopSlideshow = function() {
            if (i.isPlaying) {
                i.isPlaying = false;
                clearTimeout(i.slideshowTimeoutId);
                i.slideshowButtonDO.stop();
                i.slideshowButtonDO.onMouseOut()
            }
        };
        this.onSlideshowButtonTime = function() {
            if (i.curId == i.totalThumbs - 1) {
                i.curId = 0
            } else {
                i.curId++
            }
            i.gotoThumb()
        };
        this.startTimeAgain = function() {
            i.slideshowButtonDO.start()
        };
        this.setupScrollbar = function() {
            FWDR3DCarScrollbar.setPrototype();
            i.scrollbarDO = new FWDR3DCarScrollbar(i.data, i.totalThumbs, i.curId);
            i.scrollbarDO.addListener(FWDR3DCarScrollbar.MOVE, i.onScrollbarMove);
            i.controlsDO.addChild(i.scrollbarDO);
            i.scrollbarDO.setX(i.controlsWidth);
            i.controlsWidth += i.scrollbarDO.getWidth()
        };
        this.onScrollbarMove = function(e) {
            i.curId = e.id;
            i.gotoThumb()
        };
        this.addMouseWheelSupport = function() {
            if (e.addEventListener) {
                i.parent.mainDO.screen.addEventListener("mousewheel", i.mouseWheelHandler);
                i.parent.mainDO.screen.addEventListener("DOMMouseScroll", i.mouseWheelHandler)
            } else if (document.attachEvent) {
                i.parent.mainDO.screen.attachEvent("onmousewheel", i.mouseWheelHandler)
            }
        };
        this.mouseWheelHandler = function(e) {
            if (!i.introFinished || !i.allowToSwitchCat) return;
            if (i.showScrollbar && i.scrollbarDO.isPressed) return;
            var t = e.detail || e.wheelDelta;
            if (e.wheelDelta) t *= -1;
            if (t > 0) {
                if (i.curId < i.totalThumbs - 1) {
                    i.curId++;
                    i.gotoThumb()
                }
            } else if (t < 0) {
                if (i.curId > 0) {
                    i.curId--;
                    i.gotoThumb()
                }
            }
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                return false
            }
        };
        this.setupMobileDrag = function() {
            if (i.hasPointerEvent) {
                i.parent.mainDO.screen.addEventListener("MSPointerDown", i.mobileDragStartHandler)
            } else {
                i.parent.mainDO.screen.addEventListener("touchstart", i.mobileDragStartTest)
            }
        };
        this.mobileDragStartTest = function(t) {
            var n = FWDR3DCarUtils.getViewportMouseCoordinates(t);
            if (n.screenY > i.controlsDO.getY()) return;
            i.lastPressedX = n.screenX;
            i.lastPressedY = n.screenY;
            i.dragCurId = i.curId;
            e.addEventListener("touchmove", i.mobileDragMoveTest);
            e.addEventListener("touchend", i.mobileDragEndTest)
        };
        this.mobileDragMoveTest = function(t) {
            if (t.touches.length != 1) return;
            i.disableThumbClick = true;
            var n = FWDR3DCarUtils.getViewportMouseCoordinates(t);
            i.mouseX = n.screenX;
            i.mouseY = n.screenY;
            var r = Math.atan2(i.mouseY - i.lastPressedY, i.mouseX - i.lastPressedX);
            var s = Math.abs(r) * 180 / Math.PI;
            if (s > 120 || s < 60) {
                if (t.preventDefault) t.preventDefault();
                i.curId = i.dragCurId + Math.floor( - (i.mouseX - i.lastPressedX) / 100);
                if (i.curId < 0) {
                    i.curId = 0
                } else if (i.curId > i.totalThumbs - 1) {
                    i.curId = i.totalThumbs - 1
                }
                i.gotoThumb()
            } else {
                e.removeEventListener("touchmove", i.mobileDragMoveTest)
            }
        };
        this.mobileDragEndTest = function(t) {
            i.disableThumbClick = false;
            e.removeEventListener("touchmove", i.mobileDragMoveTest);
            e.removeEventListener("touchend", i.mobileDragEndTest)
        };
        this.mobileDragStartHandler = function(t) {
            var n = FWDR3DCarUtils.getViewportMouseCoordinates(t);
            if (n.screenY > i.controlsDO.getY()) return;
            i.lastPressedX = n.screenX;
            i.dragCurId = i.curId;
            e.addEventListener("MSPointerUp", i.mobileDragEndHandler, false);
            e.addEventListener("MSPointerMove", i.mobileDragMoveHandler)
        };
        this.mobileDragMoveHandler = function(e) {
            if (e.preventDefault) e.preventDefault();
            i.disableThumbClick = true;
            var t = FWDR3DCarUtils.getViewportMouseCoordinates(e);
            i.mouseX = t.screenX;
            i.curId = i.dragCurId + Math.floor( - (i.mouseX - i.lastPressedX) / 100);
            if (i.curId < 0) {
                i.curId = 0
            } else if (i.curId > i.totalThumbs - 1) {
                i.curId = i.totalThumbs - 1
            }
            i.gotoThumb()
        };
        this.mobileDragEndHandler = function(t) {
            i.disableThumbClick = false;
            e.removeEventListener("MSPointerUp", i.mobileDragEndHandler);
            e.removeEventListener("MSPointerMove", i.mobileDragMoveHandler)
        };
        this.addKeyboardSupport = function() {
            if (document.addEventListener) {
                document.addEventListener("keydown", this.onKeyDownHandler);
                document.addEventListener("keyup", this.onKeyUpHandler)
            } else {
                document.attachEvent("onkeydown", this.onKeyDownHandler);
                document.attachEvent("onkeyup", this.onKeyUpHandler)
            }
        };
        this.onKeyDownHandler = function(e) {
            if (!i.introFinished || !i.allowToSwitchCat) return;
            if (i.showScrollbar && i.scrollbarDO.isPressed) return;
            if (r.lightboxDO && r.lightboxDO.isShowed_bl) return;
            if (document.removeEventListener) {
                document.removeEventListener("keydown", i.onKeyDownHandler)
            } else {
                document.detachEvent("onkeydown", i.onKeyDownHandler)
            }
            if (e.keyCode == 39) {
                if (i.curId < i.totalThumbs - 1) {
                    i.curId++;
                    i.gotoThumb()
                }
                if (e.preventDefault) {
                    e.preventDefault()
                } else {
                    return false
                }
            } else if (e.keyCode == 37) {
                if (i.curId > 0) {
                    i.curId--;
                    i.gotoThumb()
                }
                if (e.preventDefault) {
                    e.preventDefault()
                } else {
                    return false
                }
            }
        };
        this.onKeyUpHandler = function(e) {
            if (document.addEventListener) {
                document.addEventListener("keydown", i.onKeyDownHandler)
            } else {
                document.attachEvent("onkeydown", i.onKeyDownHandler)
            }
        };
        this.update = function(e) {
            i.showRefl = e.showRefl;
            i.reflDist = e.reflDist;
            for (var t = 0; t < i.totalThumbs; t++) {
                i.thumbsAr[t].update()
            }
        };
        this.destroy = function() {
            clearTimeout(i.loadWithDelayIdLeft);
            clearTimeout(i.loadWithDelayIdRight);
            clearTimeout(i.slideshowTimeoutId);
            clearTimeout(i.textTimeoutId);
            clearInterval(i.zSortingId);
            clearTimeout(i.hideThumbsFinishedId);
            clearTimeout(i.loadHtmlContentsId);
            clearTimeout(i.loadImagesId);
            clearTimeout(i.setTextHeightId);
            clearTimeout(i.setIntroFinishedId);
            clearTimeout(i.showControlsId);
            if (!i.isMobile) {
                if (i.screen.addEventListener) {
                    e.removeEventListener("mousemove", i.onThumbMove)
                } else {
                    document.detachEvent("onmousemove", i.onThumbMove)
                }
            }
            if (i.hasPointerEvent) {
                e.removeEventListener("MSPointerMove", i.onThumbMove)
            }
            if (i.hasPointerEvent) {
                i.parent.mainDO.screen.removeEventListener("MSPointerDown", i.mobileDragStartHandler);
                e.removeEventListener("MSPointerUp", i.mobileDragEndHandler);
                e.removeEventListener("MSPointerMove", i.mobileDragMoveHandler)
            } else {
                if (e.addEventListener) {
                    i.parent.mainDO.screen.removeEventListener("touchstart", i.mobileDragStartTest);
                    e.removeEventListener("touchmove", i.mobileDragMoveTest);
                    e.removeEventListener("touchend", i.mobileDragEndTest)
                }
            }
            if (e.addEventListener) {
                i.parent.mainDO.screen.removeEventListener("mousewheel", i.mouseWheelHandler);
                i.parent.mainDO.screen.removeEventListener("DOMMouseScroll", i.mouseWheelHandler)
            } else if (document.attachEvent) {
                i.parent.mainDO.screen.detachEvent("onmousewheel", i.mouseWheelHandler)
            }
            if (i.addKeyboardSupport) {
                if (document.removeEventListener) {
                    document.removeEventListener("keydown", this.onKeyDownHandler);
                    document.removeEventListener("keyup", this.onKeyUpHandler)
                } else if (document.attachEvent) {
                    document.detachEvent("onkeydown", this.onKeyDownHandler);
                    document.detachEvent("onkeyup", this.onKeyUpHandler)
                }
            }
            if (i.image) {
                i.image.onload = null;
                i.image.onerror = null;
                i.image.src = ""
            }
            if (i.imageLeft) {
                i.imageLeft.onload = null;
                i.imageLeft.onerror = null;
                i.imageLeft.src = ""
            }
            if (i.imageRight) {
                i.imageRight.onload = null;
                i.imageRight.onerror = null;
                i.imageRight.src = ""
            }
            i.image = null;
            i.imageLeft = null;
            i.imageRight = null;
            for (var n = 0; n < i.totalThumbs; n++) {
                FWDR3DCarModTweenMax.killTweensOf(i.thumbsAr[n]);
                i.thumbsAr[n].destroy();
                i.thumbsAr[n] = null
            }
            i.thumbsAr = null;
            if (i.prevButtonDO) {
                i.prevButtonDO.destroy();
                i.prevButtonDO = null
            }
            if (i.nextButtonDO) {
                i.nextButtonDO.destroy();
                i.nextButtonDO = null
            }
            if (i.scrollbarDO) {
                i.scrollbarDO.destroy();
                i.scrollbarDO = null
            }
            if (i.slideshowButtonDO) {
                i.slideshowButtonDO.destroy();
                i.slideshowButtonDO = null
            }
            if (i.textGradientDO && i.textGradientDO.screen) {
                FWDR3DCarModTweenMax.killTweensOf(i.textGradientDO);
                i.textGradientDO.destroy();
                i.textGradientDO = null
            }
            if (i.textDO && i.textDO.screen) {
                FWDR3DCarModTweenMax.killTweensOf(i.textDO);
                i.textDO.destroy();
                i.textDO = null
            }
            if (i.textHolderDO && i.textHolderDO.screen) {
                FWDR3DCarModTweenMax.killTweensOf(i.textHolderDO);
                i.textHolderDO.destroy();
                i.textHolderDO = null
            }
            if (i.thumbOverDO) {
                i.thumbOverDO.destroy();
                i.thumbOverDO = null
            }
            if (i.thumbsHolderDO) {
                i.thumbsHolderDO.destroy();
                i.thumbsHolderDO = null
            }
            if (i.controlsDO) {
                FWDR3DCarModTweenMax.killTweensOf(i.controlsDO);
                i.controlsDO.destroy();
                i.controlsDO = null
            }
            i.screen.innerHTML = "";
            i = null;
            s.destroy();
            s = null;
            t.prototype = null
        };
        this.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDR3DCarDisplayObject3D("div", "relative", "visible")
    };
    t.THUMB_CLICK = "onThumbClick";
    t.LOAD_ERROR = "onLoadError";
    t.THUMBS_INTRO_FINISH = "onThumbsIntroFinish";
    t.THUMB_CHANGE = "onThumbChange";
    e.FWDR3DCarThumbsManager = t
})(window); (function(e) {
    var t = function(e, n) {
        var r = this;
        var i = t.prototype;
        this.timeOutId;
        this.delay = e;
        this.isStopped_bl = !n;
        this.stop = function() {
            clearTimeout(this.timeOutId);
            this.dispatchEvent(t.STOP)
        };
        this.start = function() {
            if (!this.isStopped_bl) {
                this.timeOutId = setTimeout(this.onTimeHanlder, this.delay);
                this.dispatchEvent(t.START)
            }
        };
        this.onTimeHanlder = function() {
            r.dispatchEvent(t.TIME)
        };
        this.destroy = function() {
            clearTimeout(this.timeOutId);
            i.destroy();
            r = null;
            i = null;
            t.prototype = null
        }
    };
    t.setProtptype = function() {
        t.prototype = new FWDR3DCarEventDispatcher
    };
    t.START = "start";
    t.STOP = "stop";
    t.TIME = "time";
    t.prototype = null;
    e.FWDR3DCarTimerManager = t
})(window); (function(e) {
    function n() {
        var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"];
        var n;
        var r;
        while (n = e.shift()) {
            if (typeof t.dumy.style[n] !== "undefined") {
                t.dumy.style.position = "absolute";
                r = t.dumy.getBoundingClientRect().left;
                t.dumy.style[n] = "translate3d(500px, 0px, 0px)";
                r = Math.abs(t.dumy.getBoundingClientRect().left - r);
                if (r > 100 && r < 900) {
                    try {
                        document.documentElement.removeChild(t.dumy)
                    } catch(i) {}
                    return true
                }
            }
        }
        try {
            document.documentElement.removeChild(t.dumy)
        } catch(i) {}
        return false
    }
    function r() {
        var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"];
        var n;
        while (n = e.shift()) {
            if (typeof t.dumy.style[n] !== "undefined") {
                return true
            }
        }
        try {
            document.documentElement.removeChild(t.dumy)
        } catch(r) {}
        return false
    }
    var t = function() {};
    t.dumy = document.createElement("div");
    t.trim = function(e) {
        if (e) {
            return e.replace(/\s/g, "")
        } else {
            return undefined
        }
    };
    t.trimAndFormatUrl = function(e) {
        e = e.toLocaleLowerCase();
        e = e.replace(/ /g, "-");
        e = e.replace(/ä/g, "a");
        e = e.replace(/â/g, "a");
        e = e.replace(/â/g, "a");
        e = e.replace(/à/g, "a");
        e = e.replace(/è/g, "e");
        e = e.replace(/é/g, "e");
        e = e.replace(/ë/g, "e");
        e = e.replace(/ï/g, "i");
        e = e.replace(/î/g, "i");
        e = e.replace(/ù/g, "u");
        e = e.replace(/ô/g, "o");
        e = e.replace(/ù/g, "u");
        e = e.replace(/û/g, "u");
        e = e.replace(/ÿ/g, "y");
        e = e.replace(/ç/g, "c");
        e = e.replace(/œ/g, "ce");
        return e
    };
    t.splitAndTrim = function(e, n) {
        var r = e.split(",");
        var i = r.length;
        for (var s = 0; s < i; s++) {
            if (n) r[s] = t.trim(r[s])
        }
        return r
    };
    t.indexOfArray = function(e, t) {
        var n = e.length;
        for (var r = 0; r < n; r++) {
            if (e[r] === t) return r
        }
        return - 1
    };
    t.randomizeArray = function(e) {
        var t = [];
        var n = e.concat();
        var r = n.length;
        for (var i = 0; i < r; i++) {
            var s = Math.floor(Math.random() * n.length);
            t.push(n[s]);
            n.splice(s, 1)
        }
        return t
    };
    t.parent = function(e, t) {
        if (t === undefined) t = 1;
        while (t--&&e) e = e.parentNode;
        if (!e || e.nodeType !== 1) return null;
        return e
    };
    t.sibling = function(e, t) {
        while (e && t !== 0) {
            if (t > 0) {
                if (e.nextElementSibling) {
                    e = e.nextElementSibling
                } else {
                    for (var e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
                }
                t--
            } else {
                if (e.previousElementSibling) {
                    e = e.previousElementSibling
                } else {
                    for (var e = e.previousSibling; e && e.nodeType !== 1; e = e.previousSibling);
                }
                t++
            }
        }
        return e
    };
    t.getChildAt = function(e, n) {
        var r = t.getChildren(e);
        if (n < 0) n += r.length;
        if (n < 0) return null;
        return r[n]
    };
    t.getChildById = function(e) {
        return document.getElementById(e) || undefined
    };
    t.getChildren = function(e, t) {
        var n = [];
        for (var r = e.firstChild; r != null; r = r.nextSibling) {
            if (t) {
                n.push(r)
            } else if (r.nodeType === 1) {
                n.push(r)
            }
        }
        return n
    };
    t.getChildrenFromAttribute = function(e, n, r) {
        var i = [];
        for (var s = e.firstChild; s != null; s = s.nextSibling) {
            if (r && t.hasAttribute(s, n)) {
                i.push(s)
            } else if (s.nodeType === 1 && t.hasAttribute(s, n)) {
                i.push(s)
            }
        }
        return i.length == 0 ? undefined: i
    };
    t.getChildFromNodeListFromAttribute = function(e, n, r) {
        for (var i = e.firstChild; i != null; i = i.nextSibling) {
            if (r && t.hasAttribute(i, n)) {
                return i
            } else if (i.nodeType === 1 && t.hasAttribute(i, n)) {
                return i
            }
        }
        return undefined
    };
    t.getAttributeValue = function(e, n) {
        if (!t.hasAttribute(e, n)) return undefined;
        return e.getAttribute(n)
    };
    t.hasAttribute = function(e, t) {
        if (e.hasAttribute) {
            return e.hasAttribute(t)
        } else {
            var n = e.attributes[t];
            return n ? true: false
        }
    };
    t.insertNodeAt = function(e, n, r) {
        var i = t.children(e);
        if (r < 0 || r > i.length) {
            throw new Error("invalid index!")
        } else {
            e.insertBefore(n, i[r])
        }
    };
    t.hasCanvas = function() {
        return Boolean(document.createElement("canvas"))
    };
    t.hitTest = function(e, t, n) {
        var r = false;
        if (!e) throw Error("Hit test target is null!");
        var i = e.getBoundingClientRect();
        if (t >= i.left && t <= i.right && n >= i.top && n <= i.bottom) return true;
        return false
    };
    t.getScrollOffsets = function() {
        if (e.pageXOffset != null) return {
            x: e.pageXOffset,
            y: e.pageYOffset
        };
        if (document.compatMode == "CSS1Compat") {
            return {
                x: document.documentElement.scrollLeft,
                y: document.documentElement.scrollTop
            }
        }
    };
    t.getViewportSize = function() {
        if (t.hasPointerEvent && navigator.msMaxTouchPoints > 1) {
            return {
                w: document.documentElement.clientWidth || e.innerWidth,
                h: document.documentElement.clientHeight || e.innerHeight
            }
        }
        if (t.isMobile) return {
            w: e.innerWidth,
            h: e.innerHeight
        };
        return {
            w: document.documentElement.clientWidth || e.innerWidth,
            h: document.documentElement.clientHeight || e.innerHeight
        }
    };
    t.getViewportMouseCoordinates = function(e) {
        var n = t.getScrollOffsets();
        if (e.touches) {
            return {
                screenX: e.changedTouches[0] == undefined ? e.changedTouches.pageX - n.x: e.changedTouches[0].pageX - n.x,
                screenY: e.changedTouches[0] == undefined ? e.changedTouches.pageY - n.y: e.changedTouches[0].pageY - n.y
            }
        }
        return {
            screenX: e.clientX == undefined ? e.pageX - n.x: e.clientX,
            screenY: e.clientY == undefined ? e.pageY - n.y: e.clientY
        }
    };
    t.hasPointerEvent = function() {
        return Boolean(e.navigator.msPointerEnabled)
    } ();
    t.isMobile = function() {
        if (t.hasPointerEvent && navigator.msMaxTouchPoints > 1) return true;
        var e = ["android", "webos", "iphone", "ipad", "blackberry"];
        for (i in e) {
            if (navigator.userAgent.toLowerCase().indexOf(e[i].toLowerCase()) != -1) {
                return true
            }
        }
        return false
    } ();
    t.isAndroid = function() {
        return navigator.userAgent.toLowerCase().indexOf("android".toLowerCase()) != -1
    } ();
    t.isChrome = function() {
        return navigator.userAgent.toLowerCase().indexOf("chrome") != -1
    } ();
    t.isSafari = function() {
        return navigator.userAgent.toLowerCase().indexOf("safari") != -1 && navigator.userAgent.toLowerCase().indexOf("chrome") == -1
    } ();
    t.isOpera = function() {
        return navigator.userAgent.toLowerCase().indexOf("opera") != -1 && navigator.userAgent.toLowerCase().indexOf("chrome") == -1
    } ();
    t.isFirefox = function() {
        return navigator.userAgent.toLowerCase().indexOf("firefox") != -1
    } ();
    t.isIE = function() {
        return navigator.userAgent.toLowerCase().indexOf("msie") != -1
    } ();
    t.isIEAndLessThen9 = function() {
        return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 || navigator.userAgent.toLowerCase().indexOf("msie 8") != -1
    } ();
    t.isIEAndLessThen10 = function() {
        return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 || navigator.userAgent.toLowerCase().indexOf("msie 8") != -1 || navigator.userAgent.toLowerCase().indexOf("msie 9") != -1
    } ();
    t.isIEAndMoreThen8 = function() {
        return t.isIE9 || t.isIE10 || t.isIE11
    } ();
    t.isIE7 = function() {
        return navigator.userAgent.toLowerCase().indexOf("msie 7") != -1
    } ();
    t.isIE9 = function() {
        return navigator.userAgent.toLowerCase().indexOf("msie 9") != -1
    } ();
    t.isIE10 = function() {
        return navigator.userAgent.toLowerCase().indexOf("msie 10") != -1
    } ();
    t.isIE11 = function() {
        return Boolean(!t.isIE && document.documentElement.msRequestFullscreen)
    } ();
    t.isIEAndMoreThen9 = function() {
        return t.isIE10 || t.isIE11
    } ();
    t.isApple = function() {
        return navigator.appVersion.toLowerCase().indexOf("mac") != -1;
    } ();
    t.isAndroidAndWebkit = function() {
        return (t.isOpera || t.isChrome) && t.isAndroid
    } ();
    t.hasFullScreen = function() {
        return t.dumy.requestFullScreen || t.dumy.mozRequestFullScreen || t.dumy.webkitRequestFullScreen || t.dumy.msieRequestFullScreen
    } ();
    t.onReady = function(e) {
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded",
            function() {
                t.checkIfHasTransofrms();
                e()
            })
        } else {
            document.onreadystatechange = function() {
                t.checkIfHasTransofrms();
                if (document.readyState == "complete") e()
            }
        }
    };
    t.checkIfHasTransofrms = function() {
        if (t.isReadyMethodCalled_bl) return;
        document.documentElement.appendChild(t.dumy);
        t.hasTransform3d = n();
        t.hasTransform2d = r();
        t.isReadyMethodCalled_bl = true
    };
    t.disableElementSelection = function(e) {
        try {
            e.style.userSelect = "none"
        } catch(e) {}
        try {
            e.style.MozUserSelect = "none"
        } catch(e) {}
        try {
            e.style.webkitUserSelect = "none"
        } catch(e) {}
        try {
            e.style.khtmlUserSelect = "none"
        } catch(e) {}
        try {
            e.style.oUserSelect = "none"
        } catch(e) {}
        try {
            e.style.msUserSelect = "none"
        } catch(e) {}
        try {
            e.msUserSelect = "none"
        } catch(e) {}
        e.onselectstart = function() {
            return false
        }
    };
    t.getUrlArgs = function(t) {
        var n = {};
        var r = t.substr(t.indexOf("?") + 1) || location.search.substring(1);
        var i = r.split("&");
        for (var s = 0; s < i.length; s++) {
            var o = i[s].indexOf("=");
            var u = i[s].substring(0, o);
            var a = i[s].substring(o + 1);
            a = decodeURIComponent(a);
            n[u] = a
        }
        return n
    };
    t.validateEmail = function(e) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) {
            return true
        }
        return false
    };
    t.resizeDoWithLimit = function(e, t, n, r, i, s, o, u, a, f, l, c, h) {
        var t = t - s;
        var n = n - o;
        var p = t / r;
        var d = n / i;
        var v = 0;
        if (p <= d) {
            v = p
        } else if (p >= d) {
            v = d
        }
        var m = Math.round(r * v);
        var g = Math.round(i * v);
        var y = Math.floor((t - r * v) / 2 + u);
        var b = Math.floor((n - i * v) / 2 + a);
        if (f) {
            FWDR3DCarModTweenMax.to(e, l, {
                x: y,
                y: b,
                w: m,
                h: g,
                delay: c,
                ease: h
            })
        } else {
            e.x = y;
            e.y = b;
            e.w = m;
            e.h = g
        }
    };
    e.requestAnimFrame = function() {
        return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
        function(t, n) {
            return e.setTimeout(t, 1e3 / 60)
        }
    } ();
    e.cancelRequestAnimFrame = function() {
        return e.cancelAnimationFrame || e.webkitCancelRequestAnimationFrame || e.mozCancelRequestAnimationFrame || e.oCancelRequestAnimationFrame || e.msCancelRequestAnimationFrame || clearTimeout
    } ();
    t.isReadyMethodCalled_bl = false;
    e.FWDR3DCarUtils = t
})(window); (function() {
    var e = 0;
    var t = ["ms", "moz", "webkit", "o"];
    for (var n = 0; n < t.length && !window.requestAnimationFrame; ++n) {
        window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"]
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function(t, n) {
        var r = (new Date).getTime();
        var i = Math.max(0, 16 - (r - e));
        var s = window.setTimeout(function() {
            t(r + i)
        },
        i);
        e = r + i;
        return s
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    }
})(); (function(e) {
    var t = function(n) {
        var r = this;
        this.mainDO;
        this.preloaderDO;
        this.customContextMenuDO;
        this.infoDO;
        this.thumbsManagerDO;
        this.bgDO;
        this.thumbsBgDO;
        this.scrollbarBgDO;
        this.comboBoxDO;
        this.disableDO;
        this.stageWidth;
        this.stageHeight;
        this.originalWidth;
        this.originalHeight;
        this.resizeHandlerId1;
        this.resizeHandlerId2;
        this.orientationChangeId;
        this.rect;
        this.listeners = {
            events_ar: []
        };
        this.autoScale = false;
        this.doNotExceedOriginalSize = true;
        this.orientationChangeComplete = true;
        this.isFullScreen = false;
        this.preloaderLoaded = false;
        this.apiReady = false;
        this.isMobile = FWDR3DCarUtils.isMobile;
        this.init = function() {
            TweenLite.ticker.useRAF(false);
            r.propsObj = n;
            if (!r.propsObj) {
                alert("3DCarousel properties object is undefined!");
                return
            }
            if (!r.propsObj.displayType) {
                alert("Display type is not specified!");
                return
            }
            r.displayType = n.displayType.toLowerCase();
            r.body = document.getElementsByTagName("body")[0];
            if (!r.propsObj.carouselHolderDivId) {
                alert("Property carouselHolderDivId is not defined in the FWDRoyal3DCarousel object constructor!");
                return
            }
            if (!FWDR3DCarUtils.getChildById(r.propsObj.carouselHolderDivId)) {
                alert("FWDRoyal3DCarousel holder div is not found, please make sure that the div exists and the id is correct! " + r.propsObj.carouselHolderDivId);
                return
            }
            if (!r.propsObj.carouselWidth) {
                alert("The carousel width is not defined, plese make sure that the carouselWidth property is definded in the FWDRoyal3DCarousel constructor!");
                return
            }
            if (!r.propsObj.carouselHeight) {
                alert("The carousel height is not defined, plese make sure that the carouselHeight property is definded in the FWDRoyal3DCarousel constructor!");
                return
            }
            r.stageContainer = FWDR3DCarUtils.getChildById(r.propsObj.carouselHolderDivId);
            r.autoScale = r.propsObj.autoScale == "yes" ? true: false;
            r.originalWidth = r.propsObj.carouselWidth;
            r.originalHeight = r.propsObj.carouselHeight;
            r.setupMainDO();
            r.setupInfo();
            r.setupData();
            r.startResizeHandler()
        };
        this.setupMainDO = function() {
            r.mainDO = new FWDR3DCarDisplayObject("div", "relative");
            r.mainDO.setSelectable(false);
            r.mainDO.setBkColor(r.propsObj.backgroundColor);
            r.mainDO.getStyle().msTouchAction = "none";
            if (r.displayType == t.FLUID_WIDTH) {
                r.mainDO.getStyle().position = "absolute";
                if (FWDR3DCarUtils.isIE7) {
                    r.body.appendChild(r.mainDO.screen)
                } else {
                    document.documentElement.appendChild(r.mainDO.screen)
                }
            } else {
                r.stageContainer.appendChild(r.mainDO.screen)
            }
        };
        this.setBackgrounds = function() {
            if (r.propsObj.backgroundImagePath) {
                r.bgDO = new FWDR3DCarDisplayObject("div");
                r.mainDO.addChild(r.bgDO);
                r.bgDO.setWidth(r.originalWidth);
                r.bgDO.setHeight(r.originalHeight);
                r.bgDO.screen.style.backgroundImage = "url(" + r.propsObj.backgroundImagePath + ")";
                r.bgDO.screen.style.backgroundRepeat = r.propsObj.backgroundRepeat;
                r.bgDO.setAlpha(0);
                FWDR3DCarModTweenMax.to(r.bgDO, .8, {
                    alpha: 1
                })
            }
            if (r.propsObj.thumbnailsBackgroundImagePath) {
                r.thumbsBgDO = new FWDR3DCarDisplayObject("div");
                r.mainDO.addChild(r.thumbsBgDO);
                r.thumbsBgDO.setWidth(r.originalWidth);
                r.thumbsBgDO.setHeight(r.originalHeight - r.data.nextButtonNImg.height);
                r.thumbsBgDO.screen.style.backgroundImage = "url(" + r.propsObj.thumbnailsBackgroundImagePath + ")";
                r.thumbsBgDO.screen.style.backgroundRepeat = r.propsObj.backgroundRepeat;
                r.thumbsBgDO.setAlpha(0);
                FWDR3DCarModTweenMax.to(r.thumbsBgDO, .8, {
                    alpha: 1
                })
            }
            if (r.propsObj.scrollbarBackgroundImagePath) {
                r.scrollbarBgDO = new FWDR3DCarDisplayObject("div");
                r.mainDO.addChild(r.scrollbarBgDO);
                r.scrollbarBgDO.setWidth(r.originalWidth);
                r.scrollbarBgDO.setHeight(r.data.nextButtonNImg.height);
                r.scrollbarBgDO.screen.style.backgroundImage = "url(" + r.propsObj.scrollbarBackgroundImagePath + ")";
                r.scrollbarBgDO.screen.style.backgroundRepeat = r.propsObj.backgroundRepeat;
                r.scrollbarBgDO.setAlpha(0);
                FWDR3DCarModTweenMax.to(r.scrollbarBgDO, .8, {
                    alpha: 1
                })
            }
        };
        this.setupInfo = function() {
            FWDR3DCarInfo.setPrototype();
            r.infoDO = new FWDR3DCarInfo
        };
        this.startResizeHandler = function() {
            if (e.addEventListener) {
                e.addEventListener("resize", r.onResizeHandler);
                e.addEventListener("scroll", r.onScrollHandler);
                e.addEventListener("orientationchange", r.orientationChange)
            } else if (e.attachEvent) {
                e.attachEvent("onresize", r.onResizeHandler);
                e.attachEvent("onscroll", r.onScrollHandler)
            }
            r.resizeHandlerId2 = setTimeout(r.resizeHandler, 50);
            if (r.displayType == t.FLUID_WIDTH) {
                r.resizeHandlerId1 = setTimeout(r.resizeHandler, 800)
            }
        };
        this.onResizeHandler = function(e) {
            if (r.isMobile) {
                clearTimeout(r.resizeHandlerId2);
                r.resizeHandlerId2 = setTimeout(r.resizeHandler, 200)
            } else {
                r.resizeHandler()
            }
        };
        this.onScrollHandler = function(e) {
            if (r.displayType == t.FLUID_WIDTH) {
                r.scrollHandler()
            }
            r.rect = r.mainDO.screen.getBoundingClientRect()
        };
        this.orientationChange = function() {
            if (r.displayType == t.FLUID_WIDTH) {
                r.orientationChangeComplete = false;
                clearTimeout(r.scrollEndId);
                clearTimeout(r.resizeHandlerId2);
                clearTimeout(r.orientationChangeId);
                r.orientationChangeId = setTimeout(function() {
                    r.orientationChangeComplete = true;
                    r.resizeHandler()
                },
                1e3);
                r.mainDO.setX(0);
                r.mainDO.setWidth(0)
            }
        };
        this.scrollHandler = function() {
            if (!r.orientationChangeComplete) return;
            var e = FWDR3DCarUtils.getScrollOffsets();
            r.pageXOffset = e.x;
            r.pageYOffset = e.y;
            if (r.displayType == t.FLUID_WIDTH) {
                if (r.isMobile) {
                    clearTimeout(r.scrollEndId);
                    r.scrollEndId = setTimeout(r.resizeHandler, 200)
                } else {
                    r.mainDO.setX(r.pageXOffset)
                }
                r.mainDO.setY(Math.round(r.stageContainer.getBoundingClientRect().top + r.pageYOffset))
            }
        };
        this.resizeHandler = function() {
            if (!r.orientationChangeComplete) return;
            var e = FWDR3DCarUtils.getScrollOffsets();
            var n = FWDR3DCarUtils.getViewportSize();
            var i;
            r.viewportWidth = parseInt(n.w);
            r.viewportHeight = parseInt(n.h);
            r.pageXOffset = parseInt(e.x);
            r.pageYOffset = parseInt(e.y);
            if (r.displayType == t.FLUID_WIDTH) {
                r.stageWidth = n.w;
                r.stageHeight = n.h;
                if (r.autoScale) {
                    i = Math.min(r.stageWidth / r.originalWidth, 1);
                    r.stageHeight = Math.max(parseInt(i * r.originalHeight), r.propsObj.thumbnailHeight + 40);
                    r.stageContainer.style.height = r.stageHeight + "px"
                } else {
                    r.stageHeight = r.originalHeight;
                    r.stageContainer.style.height = r.stageHeight + "px"
                }
                r.mainDO.setX(r.pageXOffset);
                r.mainDO.setY(Math.round(r.stageContainer.getBoundingClientRect().top + r.pageYOffset))
            } else {
                if (r.autoScale) {
                    r.stageContainer.style.width = "100%";
                    if (r.stageContainer.offsetWidth > r.originalWidth) {
                        r.stageContainer.style.width = r.originalWidth + "px"
                    }
                    i = r.stageContainer.offsetWidth / r.originalWidth;
                    r.stageWidth = parseInt(i * r.originalWidth);
                    r.stageHeight = Math.max(parseInt(i * r.originalHeight), r.propsObj.thumbnailHeight + 40);
                    r.stageContainer.style.height = r.stageHeight + "px"
                } else {
                    r.stageContainer.style.width = "100%";
                    if (r.stageContainer.offsetWidth > r.originalWidth) {
                        r.stageContainer.style.width = r.originalWidth + "px"
                    }
                    r.stageWidth = r.stageContainer.offsetWidth;
                    r.stageHeight = r.originalHeight;
                    r.stageContainer.style.height = r.originalHeight + "px"
                }
                r.mainDO.setX(0);
                r.mainDO.setY(0)
            }
            r.mainDO.setWidth(r.stageWidth);
            r.mainDO.setHeight(r.stageHeight);
            r.rect = r.mainDO.screen.getBoundingClientRect();
            r.positionPreloader();
            if (r.thumbsManagerDO) {
                r.thumbsManagerDO.resizeHandler();
                if (!r.thumbsManagerDO.allowToSwitchCat) {
                    r.disableDO.setWidth(r.stageWidth);
                    r.disableDO.setHeight(r.stageHeight)
                }
            }
            if (r.preloaderLoaded) {
                if (r.propsObj.backgroundImagePath) {
                    if (r.displayType == t.RESPONSIVE) {
                        r.bgDO.setX(Math.floor((r.stageWidth - r.originalWidth) / 2))
                    } else {
                        r.bgDO.setWidth(r.stageWidth)
                    }
                    r.bgDO.setY(Math.floor((r.stageHeight - r.originalHeight) / 2))
                }
                if (r.propsObj.thumbnailsBackgroundImagePath) {
                    if (r.displayType == t.RESPONSIVE) {
                        r.thumbsBgDO.setX(Math.floor((r.stageWidth - r.originalWidth) / 2))
                    } else {
                        r.thumbsBgDO.setWidth(r.stageWidth)
                    }
                    r.thumbsBgDO.setY(Math.floor((r.stageHeight - r.originalHeight) / 2))
                }
                if (r.propsObj.scrollbarBackgroundImagePath) {
                    if (r.displayType == t.RESPONSIVE) {
                        r.scrollbarBgDO.setX(Math.floor((r.stageWidth - r.originalWidth) / 2))
                    } else {
                        r.scrollbarBgDO.setWidth(r.stageWidth)
                    }
                    r.scrollbarBgDO.setY(Math.floor(r.stageHeight - r.data.nextButtonNImg.height))
                }
            }
            if (r.comboBoxDO) {
                r.comboBoxDO.position()
            }
        };
        this.setupContextMenu = function() {
            r.customContextMenuDO = new FWDR3DCarContextMenu(r.mainDO, r.data.showContextMenu)
        };
        this.setupData = function() {
            FWDR3DCarData.setPrototype();
            r.data = new FWDR3DCarData(r.propsObj);
            r.data.addListener(FWDR3DCarData.PRELOADER_LOAD_DONE, r.onPreloaderLoadDone);
            r.data.addListener(FWDR3DCarData.LOAD_ERROR, r.dataLoadError);
            r.data.addListener(FWDR3DCarData.LOAD_DONE, r.dataLoadComplete)
        };
        this.onPreloaderLoadDone = function() {
            r.setBackgrounds();
            r.setupPreloader();
            r.positionPreloader();
            if (!r.isMobile) {
                r.setupContextMenu()
            }
            r.preloaderLoaded = true;
            r.resizeHandler()
        };
        this.dataLoadError = function(e, t) {
            r.mainDO.addChild(r.infoDO);
            r.infoDO.showText(e.text)
        };
        this.dataLoadComplete = function(e) {
            r.dispatchEvent(t.DATA_LOADED);
            if (r.data.showDisplay2DAlways) {
                FWDR3DCarUtils.hasTransform3d = false
            }
            r.preloaderDO.hide(true);
            r.setupThumbsManager();
            if (r.data.showComboBox) {
                r.setupComboBox()
            }
            if (!r.data.enableHtmlContent) {
                r.setupLightBox()
            }
            r.setupDisable()
        };
        this.setupPreloader = function() {
            FWDR3DCarPreloader.setPrototype();
            r.preloaderDO = new FWDR3DCarPreloader(r.data.mainPreloaderImg, 70, 40, 12, 50);
            r.mainDO.addChild(r.preloaderDO);
            r.preloaderDO.show()
        };
        this.positionPreloader = function() {
            if (r.preloaderDO) {
                r.preloaderDO.setX(parseInt((r.stageWidth - r.preloaderDO.getWidth()) / 2));
                r.preloaderDO.setY(parseInt((r.stageHeight - r.preloaderDO.getHeight() - r.data.nextButtonNImg.height) / 2))
            }
        };
        this.setupThumbsManager = function() {
            FWDR3DCarThumbsManager.setPrototype();
            r.thumbsManagerDO = new FWDR3DCarThumbsManager(r.data, r);
            r.thumbsManagerDO.addListener(FWDR3DCarThumbsManager.THUMB_CLICK, r.onThumbsManagerThumbClick);
            r.thumbsManagerDO.addListener(FWDR3DCarThumbsManager.LOAD_ERROR, r.onThumbsManagerLoadError);
            r.thumbsManagerDO.addListener(FWDR3DCarThumbsManager.THUMBS_INTRO_FINISH, r.onThumbsManagerIntroFinish);
            r.thumbsManagerDO.addListener(FWDR3DCarThumbsManager.THUMB_CHANGE, r.onThumbsManagerThumbChange);
            r.mainDO.addChild(r.thumbsManagerDO);
            if (r.stageWidth) {
                r.thumbsManagerDO.resizeHandler()
            }
        };
        this.onThumbsManagerThumbClick = function(e) {
            if (!r.data.enableHtmlContent) {
                if (!r.lightboxDO.isShowed_bl) {
                    r.thumbsManagerDO.stopSlideshow();
                    r.lightboxDO.show(e.id)
                }
            }
        };
        this.onThumbsManagerLoadError = function(e) {
            r.mainDO.addChild(r.infoDO);
            r.infoDO.showText(e.text)
        };
        this.onThumbsManagerIntroFinish = function() {
            r.enableAll();
            r.dispatchEvent(t.INTRO_FINISH);
            r.apiReady = true;
            r.dispatchEvent(t.IS_API_READY);
            r.dispatchEvent(t.CATEGORY_CHANGE, {
                id: r.thumbsManagerDO.dataListId
            })
        };
        this.onThumbsManagerThumbChange = function(e) {
            r.dispatchEvent(t.THUMB_CHANGE, {
                id: e.id
            })
        };
        this.update = function(e) {
            r.thumbsManagerDO.update(e)
        };
        this.setupComboBox = function() {
            FWDR3DCarComboBox.setPrototype();
            r.comboBoxDO = new FWDR3DCarComboBox(r, {
                arrowW: r.data.comboboxArrowIconN_img.width,
                arrowH: r.data.comboboxArrowIconN_img.height,
                arrowN_str: r.data.comboboxArrowIconN_str,
                arrowS_str: r.data.comboboxArrowIconS_str,
                categories_ar: r.data.categoriesAr,
                selectorLabel: r.data.selectLabel,
                position: r.data.comboBoxPosition,
                startAtCategory: r.data.startAtCategory,
                comboBoxHorizontalMargins: r.data.comboBoxHorizontalMargins,
                comboBoxVerticalMargins: r.data.comboBoxVerticalMargins,
                comboBoxCornerRadius: r.data.comboBoxCornerRadius,
                selectorBackgroundNormalColor1: r.data.selectorBackgroundNormalColor1,
                selectorBackgroundSelectedColor1: r.data.selectorBackgroundSelectedColor1,
                selectorBackgroundNormalColor2: r.data.selectorBackgroundNormalColor2,
                selectorBackgroundSelectedColor2: r.data.selectorBackgroundSelectedColor2,
                selectorTextNormalColor: r.data.selectorTextNormalColor,
                selectorTextSelectedColor: r.data.selectorTextSelectedColor,
                buttonBackgroundNormalColor1: r.data.buttonBackgroundNormalColor1,
                buttonBackgroundSelectedColor1: r.data.buttonBackgroundSelectedColor1,
                buttonBackgroundNormalColor2: r.data.buttonBackgroundNormalColor2,
                buttonBackgroundSelectedColor2: r.data.buttonBackgroundSelectedColor2,
                buttonTextNormalColor: r.data.buttonTextNormalColor,
                buttonTextSelectedColor: r.data.buttonTextSelectedColor,
                shadowColor: r.data.comboBoxShadowColor
            });
            r.comboBoxDO.addListener(FWDR3DCarComboBox.BUTTON_PRESSED, r.onComboboxButtonPressHandler);
            r.mainDO.addChild(r.comboBoxDO)
        };
        this.onComboboxButtonPressHandler = function(e) {
            if (r.thumbsManagerDO.allowToSwitchCat) {
                r.disableAll();
                r.thumbsManagerDO.showCurrentCat(e.id);
                r.dispatchEvent(t.INTRO_START);
                if (!r.data.enableHtmlContent) {
                    r.lightboxDO.updateData(r.data.lightboxAr[e.id])
                }
                r.apiReady = false
            }
        };
        this.setupLightBox = function() {
            FWDR3DCarLightBox.setPrototype();
            this.lightboxDO = new FWDR3DCarLightBox({
                data_ar: r.data.lightboxAr[r.data.startAtCategory],
                lightboxPreloader_img: this.data.lightboxPreloader_img,
                slideShowPreloader_img: this.data.slideShowPreloader_img,
                closeN_img: this.data.lightboxCloseButtonN_img,
                closeS_img: this.data.lightboxCloseButtonS_img,
                nextN_img: this.data.lightboxNextButtonN_img,
                nextS_img: this.data.lightboxNextButtonS_img,
                prevN_img: this.data.lightboxPrevButtonN_img,
                prevS_img: this.data.lightboxPrevButtonS_img,
                maximizeN_img: this.data.lightboxMaximizeN_img,
                maximizeS_img: this.data.lightboxMaximizeS_img,
                minimizeN_img: this.data.lightboxMinimizeN_img,
                minimizeS_img: this.data.lightboxMinimizeS_img,
                infoOpenN_img: this.data.lightboxInfoOpenN_img,
                infoOpenS_img: this.data.lightboxInfoOpenS_img,
                infoCloseN_img: this.data.lightboxInfoCloseN_img,
                infoCloseS_img: this.data.lightboxInfoCloseS_img,
                playN_img: this.data.lightboxPlayN_img,
                playS_img: this.data.lightboxPlayS_img,
                pauseN_img: this.data.lightboxPauseN_img,
                pauseS_img: this.data.lightboxPauseS_img,
                showContextMenu: r.data.showContextMenu,
                addKeyboardSupport_bl: r.data.addLightBoxKeyboardSupport_bl,
                showNextAndPrevButtons: r.data.showLighBoxNextAndPrevButtons_bl,
                showZoomButton: r.data.showLightBoxZoomButton_bl,
                showInfoButton: r.data.showLightBoxInfoButton_bl,
                showSlideshowButton: r.data.showLighBoxSlideShowButton_bl,
                slideShowAutoPlay: r.data.slideShowAutoPlay_bl,
                showInfoWindowByDefault: r.data.showInfoWindowByDefault_bl,
                lightBoxVideoAutoPlay: r.data.lightBoxVideoAutoPlay_bl,
                infoWindowBackgroundColor: r.data.lightBoxInfoWindowBackgroundColor_str,
                infoWindowBackgroundOpacity: r.data.lightBoxInfoWindowBackgroundOpacity,
                backgroundColor_str: r.data.lightBoxBackgroundColor_str,
                backgroundOpacity: r.data.lightBoxMainBackgroundOpacity,
                itemBackgroundColor_str: r.data.lightBoxItemBackgroundColor_str,
                borderColor_str1: r.data.lightBoxItemBorderColor_str1,
                borderColor_str2: r.data.lightBoxItemBorderColor_str2,
                borderSize: r.data.lightBoxBorderSize,
                borderRadius: r.data.lightBoxBorderRadius,
                slideShowDelay: r.data.lightBoxSlideShowDelay,
                videoWidth: r.data.lightBoxVideoWidth,
                videoHeight: r.data.lightBoxVideoHeight,
                iframeWidth: r.data.lightBoxIframeWidth,
                iframeHeight: r.data.lightBoxIframeHeight
            })
        };
        this.setupDisable = function() {
            r.disableDO = new FWDR3DCarDisplayObject3D("div");
            r.disableDO.setZ(3e5);
            if (FWDR3DCarUtils.isIE) {
                r.disableDO.setBkColor("#000000");
                r.disableDO.setAlpha(.001)
            }
            r.mainDO.addChild(r.disableDO);
            r.disableAll()
        };
        this.disableAll = function() {
            r.disableDO.setWidth(r.stageWidth);
            r.disableDO.setHeight(r.stageHeight)
        };
        this.enableAll = function() {
            r.disableDO.setWidth(0);
            r.disableDO.setHeight(0)
        };
        this.isAPIReady = function() {
            return r.apiReady
        };
        this.getCurrentCategoryId = function() {
            if (r.apiReady) {
                return r.thumbsManagerDO.dataListId
            }
        };
        this.switchCategory = function(e) {
            if (r.apiReady) {
                if (e >= 0 && e < r.data.dataListAr.length) {
                    r.disableAll();
                    r.thumbsManagerDO.showCurrentCat(e);
                    r.dispatchEvent(t.INTRO_START);
                    if (!r.data.enableHtmlContent && r.lightboxDO) {
                        r.lightboxDO.updateData(r.data.lightboxAr[e])
                    }
                    if (r.comboBoxDO) {
                        r.comboBoxDO.setValue(e)
                    }
                    r.apiReady = false
                }
            }
        };
        this.getCurrentThumbId = function() {
            if (r.apiReady) {
                return r.thumbsManagerDO.curId
            }
        };
        this.gotoThumb = function(e) {
            if (r.apiReady) {
                if (e >= 0 && e < r.thumbsManagerDO.totalThumbs && e != r.thumbsManagerDO.curId) {
                    r.thumbsManagerDO.curId = e;
                    r.thumbsManagerDO.gotoThumb()
                }
            }
        };
        this.isSlideshowPlaying = function() {
            return r.thumbsManagerDO.isPlaying
        };
        this.startSlideshow = function() {
            if (r.apiReady) {
                r.thumbsManagerDO.startSlideshow()
            }
        };
        this.stopSlideshow = function() {
            if (r.apiReady) {
                r.thumbsManagerDO.stopSlideshow()
            }
        };
        this.addListener = function(e, t) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            if (typeof t != "function") throw Error("listener must be of type Function.");
            var n = {};
            n.type = e;
            n.listener = t;
            n.target = this;
            this.listeners.events_ar.push(n)
        };
        this.dispatchEvent = function(e, t) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            for (var n = 0,
            r = this.listeners.events_ar.length; n < r; n++) {
                if (this.listeners.events_ar[n].target === this && this.listeners.events_ar[n].type === e) {
                    if (t) {
                        for (var i in t) {
                            this.listeners.events_ar[n][i] = t[i]
                        }
                    }
                    this.listeners.events_ar[n].listener.call(this, this.listeners.events_ar[n])
                }
            }
        };
        this.removeListener = function(e, t) {
            if (e == undefined) throw Error("type is required.");
            if (typeof e === "object") throw Error("type must be of type String.");
            if (typeof t != "function") throw Error("listener must be of type Function." + e);
            for (var n = 0,
            r = this.listeners.events_ar.length; n < r; n++) {
                if (this.listeners.events_ar[n].target === this && this.listeners.events_ar[n].type === e && this.listeners.events_ar[n].listener === t) {
                    this.listeners.events_ar.splice(n, 1);
                    break
                }
            }
        };
        this.destroy = function() {
            if (e.removeEventListener) {
                e.removeEventListener("resize", r.onResizeHandler);
                e.removeEventListener("scroll", r.onScrollHandler);
                e.removeEventListener("orientationchange", r.orientationChance)
            } else if (e.detachEvent) {
                e.detachEvent("onresize", r.onResizeHandler);
                e.detachEvent("onscroll", r.onScrollHandler)
            }
            clearTimeout(r.scrollEndId);
            clearTimeout(r.resizeHandlerId1);
            clearTimeout(r.resizeHandlerId2);
            clearTimeout(r.orientationChangeId);
            if (r.data) {
                r.data.destroy()
            }
            if (r.customContextMenuDO) {
                r.customContextMenuDO.destroy()
            }
            if (r.infoDO) {
                r.infoDO.destroy()
            }
            if (r.preloaderDO) {
                r.preloaderDO.destroy()
            }
            if (r.thumbsManagerDO) {
                r.thumbsManagerDO.destroy()
            }
            if (r.bgDO) {
                FWDR3DCarModTweenMax.killTweensOf(r.bgDO);
                r.bgDO.destroy()
            }
            if (r.thumbsBgDO) {
                FWDR3DCarModTweenMax.killTweensOf(r.thumbsBgDO);
                r.thumbsBgDO.destroy()
            }
            if (r.scrollbarBgDO) {
                FWDR3DCarModTweenMax.killTweensOf(r.scrollbarBgDO);
                r.scrollbarBgDO.destroy()
            }
            if (r.comboBoxDO) {
                r.comboBoxDO.destroy()
            }
            if (r.disableDO) {
                r.disableDO.destroy()
            }
            if (r.displayType == t.FLUID_WIDTH) {
                if (FWDR3DCarUtils.isIE7) {
                    r.body.removeChild(r.mainDO.screen)
                } else {
                    document.documentElement.removeChild(r.mainDO.screen)
                }
            } else {
                r.stageContainer.removeChild(r.mainDO.screen)
            }
            if (r.mainDO) {
                r.mainDO.screen.innerHTML = "";
                r.mainDO.destroy()
            }
            r.preloaderDO = null;
            r.customContextMenuDO = null;
            r.infoDO = null;
            r.thumbsManagerDO = null;
            r.bgDO = null;
            r.thumbsBgDO = null;
            r.scrollbarBgDO = null;
            r.comboBoxDO = null;
            r.disableDO = null;
            r.mainDO = null;
            r = null
        };
        this.init()
    };
    t.RESIZE = "resize";
    t.LIGHTBOX = "lightbox";
    t.RESPONSIVE = "responsive";
    t.FLUID_WIDTH = "fluidwidth";
    t.INTRO_START = "onIntroStart";
    t.INTRO_FINISH = "onIntroFinish";
    t.DATA_LOADED = "onDataLoaded";
    t.IS_API_READY = "isAPIReady";
    t.CATEGORY_CHANGE = "categoryChanged";
    t.THUMB_CHANGE = "thumbChanged";
    e.FWDRoyal3DCarousel = t
})(window)