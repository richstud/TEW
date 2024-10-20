;var LEADY_COOKIE_CONSENT_OBTAINED = true;
/* */
(function(){function M(){try{return(new URL(document.currentScript.src)).pathname.replace(/(\/[^/]+$|\/)/g,"")}catch(G){return window.leady_track_key}}
if("object"===typeof Leady&&"undefined"!==String(Leady)){var N=M();Leady.registerDeadKey(N);"object"===typeof console&&"function"===typeof console.log&&console.log("[Leady] Could not load Leady with key "+N+", Leady is already loaded with key "+String(Leady)+". Please check that the Leady JavaScript snippet is deployed only once.")}else"object"!==typeof _leady&&(_leady=[]),Leady=function(){function G(){d.sessionStorage&&(h?d.sessionStorage.setItem("leady_tab_id",q):d.sessionStorage.removeItem("leady_tab_id"));
d.removeEventListener("beforeunload",G)}function O(a){a=void 0===a?!1:a;if(h)return!0;if(!H||void 0===m(da))return!1;var b=m(H);if(void 0===b)return!1;if(void 0!==P){try{var c=b.match(new RegExp(P))}catch(g){c=!1}return c}try{var e=JSON.parse(b)}catch(g){}if(void 0===e){b=b.replace(/%2c/g,",").replace(/'/g,'"').replace(/([{\[,])\s*(\w+?):/g,'$1"$2":');try{e=JSON.parse(b)}catch(g){return a||console.debug("[Leady] Value of the cookie consent is expected to be a JSON-like object. Please update your settings to allow Leady to check the cookie consent value."),
!1}}return void 0!==Q?e[Q]:!!e}function R(a){var b=typeof a;if("undefined"!==b&&"boolean"!==b)throw I(b,"getCookiesStatus","{boolean=} verbose");return a?{cookies_allowed:!!h,LEADY_COOKIE_CONSENT_LEVEL:{name:d.LEADY_COOKIE_CONSENT_LEVEL,value:d.LEADY_COOKIE_CONSENT_LEVEL?m(d.LEADY_COOKIE_CONSENT_LEVEL):null},LEADY_COOKIE_CONSENT_ACCEPTED:{name:d.LEADY_COOKIE_CONSENT_ACCEPTED,value:d.LEADY_COOKIE_CONSENT_ACCEPTED?m(d.LEADY_COOKIE_CONSENT_ACCEPTED):null},LEADY_COOKIE_CONSENT_MATCH:d.LEADY_COOKIE_CONSENT_MATCH,
LEADY_COOKIE_CONSENT_KEY:d.LEADY_COOKIE_CONSENT_KEY}:!!h}function J(a){var b=typeof a;if("undefined"!==b&&"boolean"!==b)throw I(b,"isOptedOut","{boolean=} verbose");b=m("leady_opt_out")||"[0,0,0]";b=JSON.parse(b);var c,e=new Date(b[1]),g=new Date(b[2]);g>new Date&&(c=b[0]);return a?{opted_out:c,updated:e,expires:g}:c}function I(a,b,c){return new TypeError("Boolean expected, got "+a+".\nUsage: Leady."+b+"("+c+")")}function ea(){return{l:function(){return this.i(this.g(),this.g(),this.g(),this.g(),
4)},i:function(a,b,c,e,g){var f=Array(36);a=[a&4294967295,b&4294905855|(g||4)<<12,c&1073741823|2147483648,e&4294967295];for(c=b=0;4>b;b++)for(e=a[b],g=0;8>g;g++){if(8===c||13===c||18===c||23===c)f[c++]="-";var k=e>>>28&15;e=(e&268435455)<<4;f[c++]=this.j.charAt(k)}return f.join("")},j:"0123456789abcdef",g:function(){try{var a=new Uint8Array(4);(d.crypto||d.msCrypto).getRandomValues(a);return a[3]+256*a[2]+65536*a[1]+16777216*a[0]}catch(b){return Math.floor(4294967296*Math.random())}}}.l()}function A(a,
b,c){var e=c;c=a+("="+B(b||""));e=new Date(e);p.cookie=c+(isNaN(e)?"":"; expires="+e.toUTCString())+"; path=/";return m(a)===b}function S(a){var b=void 0;if(a){try{b=fa(a)}catch(c){}if(void 0===b)try{b=unescape(a)}catch(c){}}return void 0===b?a:b}function m(a){a=a.replace(/[\[\]]/g,function(b){return"\\"+b}).trim();if(a=(new RegExp("(^|;)[ ]*"+a+"=([^;]*)")).exec(p.cookie))return S(a[2])}function ha(a){r=m("leady_session_id");O()?(h=!0,console.debug("[Leady] Cookies has been allowed.")):console.debug("[Leady] Cookies not allowed, waiting for the user's consent.");
r||(r=ea(),h?A("leady_session_id",r):T=setInterval(function(){O(!0)&&(clearInterval(T),h=!0,A("leady_session_id",r),console.debug("[Leady] Cookies has been allowed."))},1E3*a))}function K(a){for(var b="",c=0,e=a.length;c<e;c++)b+=""+a.charCodeAt(c).toString(16);return b}function v(a,b,c){if("beforeunload"===b){if(!C)return;C=!1}try{a.removeEventListener(b,c,!1)}catch(e){a.detachEvent("on"+b,c)}}function w(a,b,c){if("beforeunload"===b){if(C)return;C=!0}try{a.addEventListener(b,c,!1)}catch(e){a.attachEvent("on"+
b,c)}}function n(a,b,c,e){var g=e=void 0===e?!1:e;c||(c=x({}));if(b&&b.length)for(var f=0,k=b.length;f<k;f++)if(b[f].length){if("pageview"===b[f][0]){0<f&&n("o"===a?"e":a,b.slice(0,f),c);n("i",[],c);b=b.slice(f+1);b.length&&n("e",b,c);"o"===a&&n("o",[],c);return}if("cookies"===b[f][0]){h=!0===b[f][1];return}}f="https://"+(h?"t":"ct")+".leady.com/L?k="+y+"&d="+a+"&s="+r;if("i"===a||"e"===a){var l=d.location.href;k="";try{k=d.top.document.referrer}catch(z){if(d.parent)try{k=d.parent.document.referrer}catch(ka){k=
""}}""===k&&(k=p.referrer);var D=p.location.host||"";l=l||"";if("translate.googleusercontent.com"===D)""===k&&(k=l),l=(l=RegExp("[\\?&#]u=([^&#]*)").exec(l))?S(l[1]):"";else if("cc.bingj.com"===D||"webcache.googleusercontent.com"===D||"74.6."===D.slice(0,5))l=p.baseURI;k=[l,k];l=k[1];f+="&l="+B(k[0].replace(RegExp("#.*"),""))+"&r="+B(l.replace(RegExp("#.*"),""));if(b&&b.length)try{f+="&e="+B(JSON.stringify(b))}catch(z){}else if("e"===a)return;if("i"===a){if("undefined"===typeof leady_omit_ua)try{var U=
m("_ga");U&&(f+="&g="+K(U))}catch(z){}if("undefined"===typeof leady_omit_fbc){try{var V=m("_fbc");V&&(f+="&fc="+K(V))}catch(z){}try{var W=m("_fbp");W&&(f+="&fp="+K(W))}catch(z){}}}}f+="&nc="+(h?"0":"1");c&&(f+="&"+c);if(!g)try{g=!navigator.sendBeacon(f)}catch(z){g=!0}if(g&&(a=String(Math.random()).slice(2,8),f=c?f+a:f+("&9"+a),(new Image(1,1)).src=f+(Math.random()+"").slice(2,8),e)){Date.prototype.h=Date.prototype.getTime;for(c=(new Date).getTime()+49;(new Date).h()<c;);delete Date.prototype.h}}function ia(a){var b=
x({type:"load"});n("e",a,b);return{push:function(){var c=x({type:null});return n("e",Array.prototype.slice.call(arguments),c)}}}function x(a){"object"===typeof a&&null!==a&&(a=a.type);return(ja[a]||"0")+q}function L(a){if(!(h&&"visibilityState"in document&&"visible"!==document.visibilityState)){var b=Date.now();w(d,"beforeunload",t);if(!E||1E3<b-E)"localStorage"in window&&(h?d.localStorage.setItem("leady_tab_id",q):d.localStorage.removeItem("leady_tab_id")),a=x(a),clearTimeout(X),n("i",[],a),F=null,
E=b}}function t(a){function b(e,g){g=void 0===g?!1:g;if("localStorage"in window){var f=d.localStorage.getItem("leady_tab_id");if(f&&f!=q)return;d.localStorage.removeItem("leady_tab_id")}e=x(e);n("o",[],e,g);E=null;F=c}var c=Date.now();if(!F||1E3<c-F)v(d,"beforeunload",t),!h||a&&"beforeunload"===a.type?b(a,!0):X=setTimeout(function(){b(a)},300)}function Y(a){if(h)return L(a)}function Z(a){if(h)return t(a)}function aa(a){h&&("visible"===document.visibilityState?L(a):t(a))}function u(){}var y=M(),ba=
[],p=document,d=window,B=d.encodeURIComponent,fa=d.decodeURIComponent,h=d.LEADY_COOKIE_CONSENT_OBTAINED,H=d.LEADY_COOKIE_CONSENT_LEVEL,da=d.LEADY_COOKIE_CONSENT_ACCEPTED||H,Q=d.LEADY_COOKIE_CONSENT_KEY,P=d.LEADY_COOKIE_CONSENT_MATCH,T=null,C=!1,E,F,X=null,r="",ja={load:"1",pageshow:"2",pagehide:"3",visibilitychange:"4",beforeunload:"5"},q;d.sessionStorage&&(q=d.sessionStorage.getItem("leady_tab_id"))?d.sessionStorage.removeItem("leady_tab_id"):q=Math.floor(Math.random()*Math.pow(10,4));d.addEventListener("beforeunload",
G);y?J()?(A("leady_session_id","",1E3),"object"===typeof console&&"function"===typeof console.log&&console.log("[Leady] Tracking in this browser is stopped. Run Leady.optOut(false) to enable it.")):(ha(2),w(d,"pageshow",Y),L({type:"load"}),_leady=new ia(_leady),w(d,"pagehide",Z),w(p,"visibilitychange",aa),w(d,"beforeunload",t)):"object"===typeof console&&"function"===typeof console.log&&console.log("[Leady] Could not start Leady. Please check that the Leady JavaScript snippet is deployed correctly.");
u.prototype.toString=function(){return y};u.prototype.optOut=function(a,b){var c=typeof a;if("boolean"!==c)throw I(c,"optOut","{boolean} disableTracking, {(Date|string|number)=NEVER} expires");c=new Date(2038,0,19,3,14,7);a&&(d._leady=[],v(d,"beforeunload",t),v(d,"pageshow",Y),v(d,"pagehide",Z),v(p,"visibilitychange",aa));a=JSON.stringify([a,new Date,b||c]);return A("leady_opt_out",a,c)};u.prototype.isOptedOut=J;u.prototype.getCookiesStatus=R;u.prototype.registerDeadKey=function(a){ba.push(a)};var ca=
{leady_track_key:function(){return y},leady_track_keys:function(){return{active:y,halted:ba}},leady_opt_out:function(){return J(!0)},leady_opt_in:function(){return R(!0)}};d.addEventListener("message",function(a){try{var b=a.data.type.slice(4);if(a.source===d&&b in ca){var c=ca[b]();d.postMessage({type:b,data:c},d.location.origin)}}catch(e){}},!1);return new u}();}).call(this);