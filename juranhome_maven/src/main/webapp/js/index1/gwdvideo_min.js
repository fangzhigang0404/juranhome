-function(){"use strict";var d;var k=function(a){if("function"==typeof a.gwdLoad&&"function"==typeof a.gwdIsLoaded&&!a.gwdIsLoaded()){var b=h(a),c=b&&"function"==typeof b.gwdIsLoaded;(!b||c&&b.gwdIsLoaded())&&a.gwdLoad()}},l=function(a){if(null==a.gwdActivate||"function"==typeof a.gwdActivate)if(null==a.gwdIsActive||!a.gwdIsActive()){var b=h(a),c=b&&null!=b.gwdIsActive&&"function"==typeof b.gwdIsActive;null==b&&a.gwdActivate();c&&b.gwdIsActive()&&a.gwdActivate()}},m=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==
a.getAttribute("is")},h=function(a){if(m(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&m(a))return a;return null},n=function(a){for(var b=[];a;a=a.parentNode)b.unshift(a);return b};var p=function(a,b){var c=function(e){a.removeEventListener("playing",c);b(e)};a.addEventListener("playing",c)};var q={s:"fullscreenchange",v:"webkitfullscreenchange",u:"mozfullscreenchange"},r={s:"fullscreenElement",v:"webkitFullscreenElement",u:"mozFullScreenElement"},t=function(a){var b,c;for(c in r)if(b=a[r[c]],void 0!==b)break;return b||null},u=function(a,b,c){this.f=a;this.a=c;this.b=b;this.j=this.A.bind(this)};
u.prototype.A=function(){var a=t(this.a);if(a)if(this.b==a)for(var b=this.a,a=this.b;a&&a!=b;a=a.parentNode)a.classList.add(this.f);else if(a.classList.contains(this.f)){for(var b=n(this.b),a=n(a),c=0,e=b[0],g=a[0],f=null;e&&g&&e==g;)f=e,c++,e=b[c],g=a[c];v(this,f)}else v(this);else v(this)};u.prototype.install=function(){for(var a in q)this.a.addEventListener(q[a],this.j)};var v=function(a,b){for(var c=b||a.a,e=a.b;e&&e!=c;e=e.parentNode)e.classList.remove(a.f)};var w=function(){};goog.inherits(w,HTMLVideoElement);d=w.prototype;d.createdCallback=function(){this.o=this.w.bind(this);this.l=new u("has-fullscreen-gwd-video",this,document);this.g=this.m=!1;this.setAttribute("webkit-playsinline",!0);this.setAttribute("x-webkit-airplay","allow");this.muted=this.hasAttribute("muted");this.i=1;this.h=!1;this.c=this.muted&&-1!=(window.navigator.userAgent||"").indexOf("Android")};
d.attachedCallback=function(){k(this);l(this);this.c&&p(this,function(){this.c&&(this.volume=0)}.bind(this));this.addEventListener("volumechange",this.o,!1);this.l.install()};d.detachedCallback=function(){var a=this.l,b;for(b in q)a.a.removeEventListener(q[b],a.j);a.b==t(a.a)&&v(a);this.c&&(this.volume=1);this.removeEventListener("volumechange",this.o,!1)};d.attributeChangedCallback=function(a){"sources"==a&&(x(this),this.load())};
d.gwdActivate=function(){this.autoplay&&this.paused&&this.play();this.g=!0};d.gwdDeactivate=function(){this.seek(0);this.pause();this.g=!1};d.gwdIsActive=function(){return this.g};d.gwdLoad=function(){x(this);this.m=!0;var a;a=document.createEvent("Event");a.initEvent("ready",!0,!0);this.dispatchEvent(a)};d.gwdIsLoaded=function(){return this.m};d.mute=function(){this.c&&(this.volume=1);this.c=!1;this.muted=!this.muted};d.replay=function(){this.seek(0);this.play()};
d.seek=function(a){this.currentTime=a};d.w=function(){!1===this.h&&!0===this.muted&&0===this.i&&(this.volume=1,this.muted=!1);this.i=this.volume;this.h=this.muted};d.setVolume=function(a){this.muted=0<a?!1:!0;this.i=this.volume=a/100;this.h=this.muted};d.setSources=function(a){this.setAttribute("sources",a)};
var x=function(a){for(var b=a.getAttribute("sources"),b=b?b.split(","):[],c;c=a.firstChild;)a.removeChild(c);for(c=0;c<b.length;++c){var e=document.createElement("source"),g=e,f;f=b[c];f=f.trim();f=window.Enabler?Enabler.getUrl(f):f;g.src=f;a.appendChild(e)}};document.registerElement("gwd-video",{prototype:w.prototype,"extends":"video"});}()