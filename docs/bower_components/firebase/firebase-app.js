var firebase=null;(function(){function s(ac,bc){if(!(bc instanceof Object))return bc;switch(bc.constructor){case Date:return new Date(bc.getTime());case Object:void 0===ac&&(ac={});break;case Array:ac=[];break;default:return bc;}for(var cc in bc)bc.hasOwnProperty(cc)&&(ac[cc]=s(ac[cc],bc[cc]));return ac}function $(ac,bc){return ac=new Tb(ac,bc),ac.subscribe.bind(ac)}function _(ac){if("object"!=typeof ac||null===ac)return!1;var bc;bc=["next","error","complete"],Ta();var cc=bc[Symbol.iterator];for(bc=cc?cc.call(bc):Ua(bc),cc=bc.next();!cc.done;cc=bc.next())if(cc=cc.value,cc in ac&&"function"==typeof ac[cc])return!0;return!1}function Ka(){}function La(){function ac(hc){hc=hc||"[DEFAULT]";var ic=dc[hc];return void 0===ic&&Ma("noApp",{name:hc}),ic}function bc(hc,ic){Object.keys(ec).forEach(function(jc){jc=cc(hc,jc),null!==jc&&fc[jc]&&fc[jc](ic,hc)})}function cc(hc,ic){if("serverAuth"===ic)return null;var jc=ic;return hc=hc.options,"auth"===ic&&(hc.serviceAccount||hc.credential)&&(jc="serverAuth","serverAuth"in ec||Ma("serverAuthMissing")),jc}var dc={},ec={},fc={},gc={__esModule:!0,initializeApp:function(hc,ic){return void 0===ic?ic="[DEFAULT]":"string"==typeof ic&&""!==ic||Ma("bad-app-name",{name:ic+""}),void 0!==dc[ic]&&Ma("dupApp",{name:ic}),hc=new $b(hc,ic,gc),dc[ic]=hc,bc(hc,"create"),void 0!=hc.INTERNAL&&void 0!=hc.INTERNAL.getToken||s(hc,{INTERNAL:{getToken:function(){return Zb.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}}),hc},app:ac,apps:null,Promise:Zb,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(hc,ic,jc,kc){return ec[hc]&&Ma("dupService",{name:hc}),ec[hc]=ic,kc&&(fc[hc]=kc),ic=function(lc){return void 0===lc&&(lc=ac()),lc[hc]()},void 0!==jc&&s(ic,jc),gc[hc]=ic},createFirebaseNamespace:La,extendNamespace:function(hc){s(gc,hc)},createSubscribe:$,ErrorFactory:Yb,removeApp:function(hc){bc(dc[hc],"delete"),delete dc[hc]},factories:ec,useAsService:cc,Promise:Cb,deepExtend:s}};return gc["default"]=gc,Object.defineProperty(gc,"apps",{get:function(){return Object.keys(dc).map(function(hc){return dc[hc]})}}),ac.App=$b,gc}function Ma(ac,bc){throw Error(Na(ac,bc))}function Na(ac,bc){return bc=bc||{},bc={noApp:"No Firebase App '"+bc.name+"' has been created - call Firebase App.initializeApp().","bad-app-name":"Illegal App name: '"+bc.name+"'.",dupApp:"Firebase App named '"+bc.name+"' already exists.",deleted:"Firebase App named '"+bc.name+"' already deleted.",dupService:"Firebase Service named '"+bc.name+"' already registered.",serverAuthMissing:"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain."}[ac],void 0===bc?"Application Error: ("+ac+")":bc}var Oa="function"==typeof Object.defineProperties?Object.defineProperty:function(ac,bc,cc){if(cc.get||cc.set)throw new TypeError("ES3 does not support getters and setters.");ac!=Array.prototype&&ac!=Object.prototype&&(ac[bc]=cc.value)},Pa="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,Qa=function(){Qa=function(){},Pa.Symbol||(Pa.Symbol=Sa)},Ra=0,Sa=function(ac){return"jscomp_symbol_"+(ac||"")+Ra++},Ta=function(){Qa();var ac=Pa.Symbol.iterator;ac||(ac=Pa.Symbol.iterator=Pa.Symbol("iterator")),"function"!=typeof Array.prototype[ac]&&Oa(Array.prototype,ac,{configurable:!0,writable:!0,value:function(){return Ua(this)}}),Ta=function(){}},Ua=function(ac){var bc=0;return Va(function(){return bc<ac.length?{done:!1,value:ac[bc++]}:{done:!0}})},Va=function(ac){return Ta(),ac={next:ac},ac[Pa.Symbol.iterator]=function(){return this},ac},Wa=this,Xa=function(){},Ya=function(ac){var bc=typeof ac;if("object"==bc){if(ac){if(ac instanceof Array)return"array";if(ac instanceof Object)return bc;var cc=Object.prototype.toString.call(ac);if("[object Window]"==cc)return"object";if("[object Array]"==cc||"number"==typeof ac.length&&"undefined"!=typeof ac.splice&&"undefined"!=typeof ac.propertyIsEnumerable&&!ac.propertyIsEnumerable("splice"))return"array";if("[object Function]"==cc||"undefined"!=typeof ac.call&&"undefined"!=typeof ac.propertyIsEnumerable&&!ac.propertyIsEnumerable("call"))return"function"}else return"null";}else if("function"==bc&&"undefined"==typeof ac.call)return"object";return bc},Za=function(ac){return"function"==Ya(ac)},$a=function(ac){return ac.call.apply(ac.bind,arguments)},_a=function(ac,bc){if(!ac)throw Error();if(2<arguments.length){var dc=Array.prototype.slice.call(arguments,2);return function(){var ec=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(ec,dc),ac.apply(bc,ec)}}return function(){return ac.apply(bc,arguments)}},ab=function(){return ab=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?$a:_a,ab.apply(null,arguments)},bb=function(ac){var cc=Array.prototype.slice.call(arguments,1);return function(){var dc=cc.slice();return dc.push.apply(dc,arguments),ac.apply(this,dc)}},cb=function(ac,bc){function cc(){}cc.prototype=bc.prototype,ac.ba=bc.prototype,ac.prototype=new cc,ac.prototype.constructor=ac,ac.aa=function(dc,ec){for(var gc=Array(arguments.length-2),hc=2;hc<arguments.length;hc++)gc[hc-2]=arguments[hc];return bc.prototype[ec].apply(dc,gc)}},db;db="undefined"==typeof window?"undefined"==typeof self?global:self:window;"undefined"!=typeof db.M&&db.M||(db.__extends=function(ac,bc){function cc(){this.constructor=ac}for(var dc in bc)bc.hasOwnProperty(dc)&&(ac[dc]=bc[dc]);ac.prototype=null===bc?Object.create(bc):(cc.prototype=bc.prototype,new cc)},db.__decorate=function(ac,bc,cc,dc){var gc,ec=arguments.length,fc=3>ec?bc:null===dc?dc=Object.getOwnPropertyDescriptor(bc,cc):dc;if(gc=db.Reflect,"object"==typeof gc&&"function"==typeof gc.decorate)fc=gc.decorate(ac,bc,cc,dc);else for(var hc=ac.length-1;0<=hc;hc--)(gc=ac[hc])&&(fc=(3>ec?gc(fc):3<ec?gc(bc,cc,fc):gc(bc,cc))||fc);return 3<ec&&fc&&Object.defineProperty(bc,cc,fc),fc},db.__metadata=function(ac,bc){var cc=db.Reflect;if("object"==typeof cc&&"function"==typeof cc.metadata)return cc.metadata(ac,bc)},db.__param=function(ac,bc){return function(cc,dc){bc(cc,dc,ac)}},db.__awaiter=function(ac,bc,cc,dc){return new(cc||(cc=Promise))(function(ec,fc){function gc(jc){try{ic(dc.next(jc))}catch(kc){fc(kc)}}function hc(jc){try{ic(dc.throw(jc))}catch(kc){fc(kc)}}function ic(jc){jc.done?ec(jc.value):new cc(function(kc){kc(jc.value)}).then(gc,hc)}ic((dc=dc.apply(ac,bc)).next())})});var gb=function(ac){if(Error.captureStackTrace)Error.captureStackTrace(this,gb);else{var bc=Error().stack;bc&&(this.stack=bc)}ac&&(this.message=ac+"")};cb(gb,Error),gb.prototype.name="CustomError";var hb=function(ac){for(var cc=ac.split("%s"),dc="",ec=Array.prototype.slice.call(arguments,1);ec.length&&1<cc.length;)dc+=cc.shift()+ec.shift();return dc+cc.join("%s")},ib=function(ac,bc){bc.unshift(ac),gb.call(this,hb.apply(null,bc)),bc.shift()};cb(ib,gb),ib.prototype.name="AssertionError";var jb=function(ac,bc,cc,dc){var ec="Assertion failed";if(cc)var ec=ec+(": "+cc),fc=dc;else ac&&(ec+=": "+ac,fc=bc);throw new ib(""+ec,fc||[])},kb=function(ac,bc){ac||jb("",null,bc,Array.prototype.slice.call(arguments,2))},lb=function(ac,bc){Za(ac)||jb("Expected function but got %s: %s.",[Ya(ac),ac],bc,Array.prototype.slice.call(arguments,2))},mb=function(ac,bc,cc){this.T=cc,this.N=ac,this.U=bc,this.s=0,this.o=null};mb.prototype.get=function(){var ac;return 0<this.s?(this.s--,ac=this.o,this.o=ac.next,ac.next=null):ac=this.N(),ac},mb.prototype.put=function(ac){this.U(ac),this.s<this.T&&(this.s++,ac.next=this.o,this.o=ac)};var nb;a:{var ob=Wa.navigator;if(ob){var pb=ob.userAgent;if(pb){nb=pb;break a}}nb=""}var rb,qb=function(ac){Wa.setTimeout(function(){throw ac},0)},sb=function(){var ac=Wa.MessageChannel;if("undefined"==typeof ac&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&-1==nb.indexOf("Presto")&&(ac=function(){var ec=document.createElement("IFRAME");ec.style.display="none",ec.src="",document.documentElement.appendChild(ec);var fc=ec.contentWindow,ec=fc.document;ec.open(),ec.write(""),ec.close();var gc="callImmediate"+Math.random(),hc="file:"==fc.location.protocol?"*":fc.location.protocol+"//"+fc.location.host,ec=ab(function(ic){("*"==hc||ic.origin==hc)&&ic.data==gc&&this.port1.onmessage()},this);fc.addEventListener("message",ec,!1),this.port1={},this.port2={postMessage:function(){fc.postMessage(gc,hc)}}}),"undefined"!=typeof ac&&-1==nb.indexOf("Trident")&&-1==nb.indexOf("MSIE")){var bc=new ac,cc={},dc=cc;return bc.port1.onmessage=function(){if(void 0!==cc.next){cc=cc.next;var ec=cc.G;cc.G=null,ec()}},function(ec){dc.next={G:ec},dc=dc.next,bc.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(ec){var fc=document.createElement("SCRIPT");fc.onreadystatechange=function(){fc.onreadystatechange=null,fc.parentNode.removeChild(fc),fc=null,ec(),ec=null},document.documentElement.appendChild(fc)}:function(ec){Wa.setTimeout(ec,0)}},tb=function(){this.v=this.f=null},ub=new mb(function(){return new vb},function(ac){ac.reset()},100);tb.prototype.add=function(ac,bc){var cc=ub.get();cc.set(ac,bc),this.v?this.v.next=cc:(kb(!this.f),this.f=cc),this.v=cc},tb.prototype.remove=function(){var ac=null;return this.f&&(ac=this.f,this.f=this.f.next,this.f||(this.v=null),ac.next=null),ac};var vb=function(){this.next=this.scope=this.B=null};vb.prototype.set=function(ac,bc){this.B=ac,this.scope=bc,this.next=null},vb.prototype.reset=function(){this.next=this.scope=this.B=null};var xb,wb=function(ac,bc){xb||yb(),zb||(xb(),zb=!0),Ab.add(ac,bc)},yb=function(){var ac=Wa.Promise;if(-1!=(ac+"").indexOf("[native code]")){var bc=ac.resolve(void 0);xb=function(){bc.then(Bb)}}else xb=function(){var cc=Bb;!Za(Wa.setImmediate)||Wa.Window&&Wa.Window.prototype&&-1==nb.indexOf("Edge")&&Wa.Window.prototype.setImmediate==Wa.setImmediate?(rb||(rb=sb()),rb(cc)):Wa.setImmediate(cc)}},zb=!1,Ab=new tb,Bb=function(){for(var ac;ac=Ab.remove();){try{ac.B.call(ac.scope)}catch(bc){qb(bc)}ub.put(ac)}zb=!1},Cb=function(ac,bc){if(this.b=0,this.L=void 0,this.j=this.g=this.u=null,this.m=this.A=!1,ac!=Xa)try{var cc=this;ac.call(bc,function(dc){Jb(cc,2,dc)},function(dc){try{if(dc instanceof Error)throw dc;throw Error("Promise rejected.")}catch(ec){}Jb(cc,3,dc)})}catch(dc){Jb(this,3,dc)}},Db=function(){this.next=this.context=this.h=this.c=this.child=null,this.w=!1};Db.prototype.reset=function(){this.context=this.h=this.c=this.child=null,this.w=!1};var Eb=new mb(function(){return new Db},function(ac){ac.reset()},100),Fb=function(ac,bc,cc){var dc=Eb.get();return dc.c=ac,dc.h=bc,dc.context=cc,dc},Gb=function(ac,bc,cc){Kb(ac,bc,cc,null)||wb(bb(bc,ac))};Cb.prototype.then=function(ac,bc,cc){return null!=ac&&lb(ac,"opt_onFulfilled should be a function."),null!=bc&&lb(bc,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),Ib(this,Za(ac)?ac:null,Za(bc)?bc:null,cc)},Cb.prototype.then=Cb.prototype.then,Cb.prototype.$goog_Thenable=!0,Cb.prototype.X=function(ac,bc){return Ib(this,null,ac,bc)};var Hb=function(ac,bc){ac.g||2!=ac.b&&3!=ac.b||Mb(ac),kb(null!=bc.c),ac.j?ac.j.next=bc:ac.g=bc,ac.j=bc},Ib=function(ac,bc,cc,dc){var ec=Fb(null,null,null);return ec.child=new Cb(function(fc,gc){ec.c=bc?function(hc){try{var ic=bc.call(dc,hc);fc(ic)}catch(jc){gc(jc)}}:fc,ec.h=cc?function(hc){try{var ic=cc.call(dc,hc);fc(ic)}catch(jc){gc(jc)}}:gc}),ec.child.u=ac,Hb(ac,ec),ec.child};Cb.prototype.Y=function(ac){kb(1==this.b),this.b=0,Jb(this,2,ac)},Cb.prototype.Z=function(ac){kb(1==this.b),this.b=0,Jb(this,3,ac)};var Jb=function(ac,bc,cc){0==ac.b&&(ac===cc&&(bc=3,cc=new TypeError("Promise cannot resolve to itself")),ac.b=1,Kb(cc,ac.Y,ac.Z,ac)||(ac.L=cc,ac.b=bc,ac.u=null,Mb(ac),3!=bc||Pb(ac,cc)))},Kb=function(ac,bc,cc,dc){if(ac instanceof Cb)return null!=bc&&lb(bc,"opt_onFulfilled should be a function."),null!=cc&&lb(cc,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),Hb(ac,Fb(bc||Xa,cc||null,dc)),!0;var ec;if(ac)try{ec=!!ac.$goog_Thenable}catch(gc){ec=!1}else ec=!1;if(ec)return ac.then(bc,cc,dc),!0;if(ec=typeof ac,"object"==ec&&null!=ac||"function"==ec)try{var fc=ac.then;if(Za(fc))return Lb(ac,fc,bc,cc,dc),!0}catch(gc){return cc.call(dc,gc),!0}return!1},Lb=function(ac,bc,cc,dc,ec){var fc=!1,gc=function(ic){fc||(fc=!0,cc.call(ec,ic))},hc=function(ic){fc||(fc=!0,dc.call(ec,ic))};try{bc.call(ac,gc,hc)}catch(ic){hc(ic)}},Mb=function(ac){ac.A||(ac.A=!0,wb(ac.P,ac))},Nb=function(ac){var bc=null;return ac.g&&(bc=ac.g,ac.g=bc.next,bc.next=null),ac.g||(ac.j=null),null!=bc&&kb(null!=bc.c),bc};Cb.prototype.P=function(){for(var ac;ac=Nb(this);){var bc=this.b,cc=this.L;if(3==bc&&ac.h&&!ac.w){var dc;for(dc=this;dc&&dc.m;dc=dc.u)dc.m=!1}if(ac.child)ac.child.u=null,Ob(ac,bc,cc);else try{ac.w?ac.c.call(ac.context):Ob(ac,bc,cc)}catch(ec){Qb.call(null,ec)}Eb.put(ac)}this.A=!1};var Ob=function(ac,bc,cc){2==bc?ac.c.call(ac.context,cc):ac.h&&ac.h.call(ac.context,cc)},Pb=function(ac,bc){ac.m=!0,wb(function(){ac.m&&Qb.call(null,bc)})},Qb=qb;Cb.all=function(ac){return new Cb(function(bc,cc){var dc=ac.length,ec=[];if(dc)for(var ic,fc=function(jc,kc){dc--,ec[jc]=kc,0==dc&&bc(ec)},gc=function(jc){cc(jc)},hc=0;hc<ac.length;hc++)ic=ac[hc],Gb(ic,bb(fc,hc),gc);else bc(ec)})},Cb.resolve=function(ac){if(ac instanceof Cb)return ac;var bc=new Cb(Xa);return Jb(bc,2,ac),bc},Cb.reject=function(ac){return new Cb(function(bc,cc){cc(ac)})},Cb.prototype["catch"]=Cb.prototype.X;var Rb=Cb;"undefined"!=typeof Promise&&(Rb=Promise);var Sb=Rb,Tb=function(ac,bc){var cc=this;this.a=[],this.K=0,this.task=Sb.resolve(),this.l=!1,this.D=bc,this.task.then(function(){ac(cc)}).catch(function(dc){cc.error(dc)})};Tb.prototype.next=function(ac){Ub(this,function(bc){bc.next(ac)})},Tb.prototype.error=function(ac){Ub(this,function(bc){bc.error(ac)}),this.close(ac)},Tb.prototype.complete=function(){Ub(this,function(ac){ac.complete()}),this.close()},Tb.prototype.subscribe=function(ac,bc,cc){var ec,dc=this;if(void 0===ac&&void 0===bc&&void 0===cc)throw Error("Missing Observer.");return ec=_(ac)?ac:{next:ac,error:bc,complete:cc},void 0===ec.next&&(ec.next=Ka),void 0===ec.error&&(ec.error=Ka),void 0===ec.complete&&(ec.complete=Ka),ac=this.$.bind(this,this.a.length),this.l&&this.task.then(function(){try{dc.H?ec.error(dc.H):ec.complete()}catch(fc){}}),this.a.push(ec),ac},Tb.prototype.$=function(ac){void 0!==this.a&&void 0!==this.a[ac]&&(delete this.a[ac],--this.K,0===this.K&&void 0!==this.D&&this.D(this))};var Ub=function(ac,bc){if(!ac.l)for(var cc=0;cc<ac.a.length;cc++)Vb(ac,cc,bc)},Vb=function(ac,bc,cc){ac.task.then(function(){if(void 0!==ac.a&&void 0!==ac.a[bc])try{cc(ac.a[bc])}catch(dc){"undefined"!=typeof console&&console.error&&console.error(dc)}})};Tb.prototype.close=function(ac){var bc=this;this.l||(this.l=!0,void 0!==ac&&(this.H=ac),this.task.then(function(){bc.a=void 0,bc.D=void 0}))};var Wb=Error.captureStackTrace,Xb=function(ac,bc){if(this.code=ac,this.message=bc,Wb)Wb(this,Yb.prototype.create);else{var cc=Error.apply(this,arguments);this.name="FirebaseError",Object.defineProperty(this,"stack",{get:function(){return cc.stack}})}};Xb.prototype=Object.create(Error.prototype),Xb.prototype.constructor=Xb,Xb.prototype.name="FirebaseError";var Yb=function(ac,bc,cc){this.V=ac,this.W=bc,this.O=cc,this.pattern=/\{\$([^}]+)}/g};Yb.prototype.create=function(ac,bc){void 0===bc&&(bc={});var cc=this.O[ac];ac=this.V+"/"+ac;var dc,cc=void 0===cc?"Error":cc.replace(this.pattern,function(ec,fc){return ec=bc[fc],void 0===ec?"<"+fc+"?>":ec.toString()}),cc=this.W+": "+cc+" ("+ac+").",cc=new Xb(ac,cc);for(dc in bc)bc.hasOwnProperty(dc)&&"_"!==dc.slice(-1)&&(cc[dc]=bc[dc]);return cc};var Zb=Rb,$b=function(ac,bc,cc){var dc=this;this.I=cc,this.J=!1,this.i={},this.C=bc,this.F=s(void 0,ac),ac="serviceAccount"in this.F,("credential"in this.F||ac)&&"undefined"!=typeof console&&console.log("The '"+(ac?"serviceAccount":"credential")+"' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started."),Object.keys(cc.INTERNAL.factories).forEach(function(ec){var fc=cc.INTERNAL.useAsService(dc,ec);null!==fc&&(fc=dc.S.bind(dc,fc),dc[ec]=fc)})};$b.prototype.delete=function(){var ac=this;return new Zb(function(bc){_b(ac),bc()}).then(function(){return ac.I.INTERNAL.removeApp(ac.C),Zb.all(Object.keys(ac.i).map(function(bc){return ac.i[bc].INTERNAL.delete()}))}).then(function(){ac.J=!0,ac.i={}})},$b.prototype.S=function(ac){return _b(this),void 0===this.i[ac]&&(this.i[ac]=this.I.INTERNAL.factories[ac](this,this.R.bind(this))),this.i[ac]},$b.prototype.R=function(ac){s(this,ac)};var _b=function(ac){ac.J&&Ma(Na("deleted",{name:ac.C}))};Pa.Object.defineProperties($b.prototype,{name:{configurable:!0,enumerable:!0,get:function(){return _b(this),this.C}},options:{configurable:!0,enumerable:!0,get:function(){return _b(this),this.F}}}),$b.prototype.name&&$b.prototype.options||$b.prototype.delete||console.log("dc");"undefined"!=typeof firebase&&(firebase=La())})(),firebase.SDK_VERSION="3.6.2";