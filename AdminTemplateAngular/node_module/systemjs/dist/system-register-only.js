/*
 * SystemJS v0.19.46
 */
!function(e){function t(e,n){if("string"!=typeof e)throw new TypeError("URL must be a string");var r=String(e).replace(/^\s+|\s+$/g,"").replace(/\\/g,"/").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);if(!r)throw new RangeError("Invalid URL format");var a=r[1]||"",o=r[2]||"",s=r[3]||"",i=r[4]||"",d=r[5]||"",l=r[6]||"",u=r[7]||"",c=r[8]||"",f=r[9]||"";if(void 0!==n){var m=n instanceof t?n:new t(n),p=!a&&!i&&!o;!p||u||c||(c=m.search),p&&"/"!==u[0]&&(u=u?(!m.host&&!m.username||m.pathname?"":"/")+m.pathname.slice(0,m.pathname.lastIndexOf("/")+1)+u:m.pathname);var h=[];u.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?h.pop():h.push(e)}),u=h.join("").replace(/^\//,"/"===u[0]?"/":""),p&&(l=m.port,d=m.hostname,i=m.host,s=m.password,o=m.username),a||(a=m.protocol)}u=u.replace(/\\/g,"/"),this.origin=i?a+(""!==a||""!==i?"//":"")+i:"",this.href=a+(a&&i||"file:"==a?"//":"")+(""!==o?o+(""!==s?":"+s:"")+"@":"")+i+u+c+f,this.protocol=a,this.username=o,this.password=s,this.host=i,this.hostname=d,this.port=l,this.pathname=u,this.search=c,this.hash=f}e.URLPolyfill=t}("undefined"!=typeof self?self:global),function(e){function t(e,t){if(!e.originalErr)for(var n=((e.message||e)+(e.stack?"\n"+e.stack:"")).toString().split("\n"),r=[],a=0;a<n.length;a++)("undefined"==typeof $__curScript||-1==n[a].indexOf($__curScript.src))&&r.push(n[a]);var o="(SystemJS) "+(r?r.join("\n	"):e.message.substr(11))+"\n	"+t;y||(o=o.replace(b?/file:\/\/\//g:/file:\/\//g,""));var s=E?new Error(o,e.fileName,e.lineNumber):new Error(o);return s.stack=o,s.originalErr=e.originalErr||e,s}function n(){}function r(t){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},w(this,"global",{get:function(){return e}})}function a(){r.call(this),this.paths={},this._loader.paths={},M.call(this)}function o(){}function s(e,t){a.prototype[e]=t(a.prototype[e]||function(){})}function i(e){M=e(M||function(){})}function d(e){return"."==e[0]&&(!e[1]||"/"==e[1]||"."==e[1])||"/"==e[0]}function l(e,t){if("."==e[0]){if("/"==e[1]&&"."!=e[2])return(t&&t.substr(0,t.lastIndexOf("/")+1)||S)+e.substr(2)}else if("/"!=e[0]&&-1==e.indexOf(":"))return(t&&t.substr(0,t.lastIndexOf("/")+1)||S)+e;return new j(e,t&&t.replace(/#/g,"%05")||R).href.replace(/%05/g,"#")}function u(e,t){var n,r="",a=0,o=e.paths,s=e._loader.paths;for(var i in o)if(!o.hasOwnProperty||o.hasOwnProperty(i)){var u=o[i];if(u!==s[i]&&(u=o[i]=s[i]=l(o[i],d(o[i])?S:e.baseURL)),-1===i.indexOf("*")){if(t==i)return o[i];if(t.substr(0,i.length-1)==i.substr(0,i.length-1)&&(t.length<i.length||t[i.length-1]==i[i.length-1])&&("/"==o[i][o[i].length-1]||""==o[i]))return o[i].substr(0,o[i].length-1)+(t.length>i.length?(o[i]&&"/"||"")+t.substr(i.length):"")}else{var c=i.split("*");if(c.length>2)throw new TypeError("Only one wildcard in a path is permitted");var f=c[0].length;f>=a&&t.substr(0,c[0].length)==c[0]&&t.substr(t.length-c[1].length)==c[1]&&(a=f,r=i,n=t.substr(c[0].length,t.length-c[1].length-c[0].length))}}var m=o[r];return"string"==typeof n&&(m=m.replace("*",n)),m}function c(e){for(var t=[],n=[],r=0,a=e.length;a>r;r++){var o=x.call(t,e[r]);-1===o?(t.push(e[r]),n.push([r])):n[o].push(r)}return{names:t,indices:n}}function f(t){var n={};if(("object"==typeof t||"function"==typeof t)&&t!==e)if(z)for(var r in t)"default"!==r&&m(n,t,r);else p(n,t);return n["default"]=t,w(n,"__useDefault",{value:!0}),n}function m(e,t,n){try{var r;(r=Object.getOwnPropertyDescriptor(t,n))&&w(e,n,r)}catch(a){return e[n]=t[n],!1}}function p(e,t,n){var r=t&&t.hasOwnProperty;for(var a in t)(!r||t.hasOwnProperty(a))&&(n&&a in e||(e[a]=t[a]));return e}function h(e){var t=e.match(D);return t&&"System.register"==e.substr(t[0].length,15)}function g(){return{name:null,deps:null,originalIndices:null,declare:null,execute:null,executingRequire:!1,declarative:!1,normalizedDeps:null,groupIndex:null,evaluated:!1,module:null,esModule:null,esmExports:!1}}var v="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,y="undefined"!=typeof window&&"undefined"!=typeof document,b="undefined"!=typeof process&&"undefined"!=typeof process.platform&&!!process.platform.match(/^win/);e.console||(e.console={assert:function(){}});var w,x=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1};!function(){try{Object.defineProperty({},"a",{})&&(w=Object.defineProperty)}catch(e){w=function(e,t,n){try{e[t]=n.value||n.get.call(e)}catch(r){}}}}();var S,E="_"==new Error(0,"_").fileName;if("undefined"!=typeof document&&document.getElementsByTagName){if(S=document.baseURI,!S){var O=document.getElementsByTagName("base");S=O[0]&&O[0].href||window.location.href}}else"undefined"!=typeof location&&(S=e.location.href);if(S)S=S.split("#")[0].split("?")[0],S=S.substr(0,S.lastIndexOf("/")+1);else{if("undefined"==typeof process||!process.cwd)throw new TypeError("No environment baseURI");S="file://"+(b?"/":"")+process.cwd()+"/",b&&(S=S.replace(/\\/g,"/"))}try{var _="test:"==new e.URL("test:///").protocol}catch(P){}var j=_?e.URL:e.URLPolyfill;w(n.prototype,"toString",{value:function(){return"Module"}}),function(){function e(e){return{status:"loading",name:e||"<Anonymous"+ ++b+">",linkSets:[],dependencies:[],metadata:{}}}function a(e,t,n){return new Promise(l({step:n.address?"fetch":"locate",loader:e,moduleName:t,moduleMetadata:n&&n.metadata||{},moduleSource:n.source,moduleAddress:n.address}))}function o(t,n,r,a){return new Promise(function(e,o){e(t.loaderObj.normalize(n,r,a))}).then(function(n){var r;if(t.modules[n])return r=e(n),r.status="linked",r.module=t.modules[n],r;for(var a=0,o=t.loads.length;o>a;a++)if(r=t.loads[a],r.name==n)return r;return r=e(n),t.loads.push(r),s(t,r),r})}function s(e,t){i(e,t,Promise.resolve().then(function(){return e.loaderObj.locate({name:t.name,metadata:t.metadata})}))}function i(e,t,n){d(e,t,n.then(function(n){return"loading"==t.status?(t.address=n,e.loaderObj.fetch({name:t.name,metadata:t.metadata,address:n})):void 0}))}function d(e,t,n){n.then(function(n){return"loading"==t.status?(t.address=t.address||t.name,Promise.resolve(e.loaderObj.translate({name:t.name,metadata:t.metadata,address:t.address,source:n})).then(function(n){return t.source=n,e.loaderObj.instantiate({name:t.name,metadata:t.metadata,address:t.address,source:n})}).then(function(e){if(void 0===e)throw new TypeError("Declarative modules unsupported in the polyfill.");if("object"!=typeof e)throw new TypeError("Invalid instantiate return value");t.depsList=e.deps||[],t.execute=e.execute}).then(function(){t.dependencies=[];for(var n=t.depsList,r=[],a=0,s=n.length;s>a;a++)(function(n,a){r.push(o(e,n,t.name,t.address).then(function(e){if(t.dependencies[a]={key:n,value:e.name},"linked"!=e.status)for(var r=t.linkSets.concat([]),o=0,s=r.length;s>o;o++)c(r[o],e)}))})(n[a],a);return Promise.all(r)}).then(function(){t.status="loaded";for(var e=t.linkSets.concat([]),n=0,r=e.length;r>n;n++)m(e[n],t)})):void 0})["catch"](function(e){t.status="failed",t.exception=e;for(var n=t.linkSets.concat([]),r=0,a=n.length;a>r;r++)p(n[r],t,e)})}function l(t){return function(n,r){var a=t.loader,o=t.moduleName,l=t.step;if(a.modules[o])throw new TypeError('"'+o+'" already exists in the module table');for(var c,f=0,m=a.loads.length;m>f;f++)if(a.loads[f].name==o&&(c=a.loads[f],"translate"!=l||c.source||(c.address=t.moduleAddress,d(a,c,Promise.resolve(t.moduleSource))),c.linkSets.length&&c.linkSets[0].loads[0].name==c.name))return c.linkSets[0].done.then(function(){n(c)});var p=c||e(o);p.metadata=t.moduleMetadata;var h=u(a,p);a.loads.push(p),n(h.done),"locate"==l?s(a,p):"fetch"==l?i(a,p,Promise.resolve(t.moduleAddress)):(p.address=t.moduleAddress,d(a,p,Promise.resolve(t.moduleSource)))}}function u(e,t){var n={loader:e,loads:[],startingLoad:t,loadingCount:0};return n.done=new Promise(function(e,t){n.resolve=e,n.reject=t}),c(n,t),n}function c(e,t){if("failed"!=t.status){for(var n=0,r=e.loads.length;r>n;n++)if(e.loads[n]==t)return;e.loads.push(t),t.linkSets.push(e),"loaded"!=t.status&&e.loadingCount++;for(var a=e.loader,n=0,r=t.dependencies.length;r>n;n++)if(t.dependencies[n]){var o=t.dependencies[n].value;if(!a.modules[o])for(var s=0,i=a.loads.length;i>s;s++)if(a.loads[s].name==o){c(e,a.loads[s]);break}}}}function f(e){var t=!1;try{y(e,function(n,r){p(e,n,r),t=!0})}catch(n){p(e,null,n),t=!0}return t}function m(e,t){if(e.loadingCount--,!(e.loadingCount>0)){var n=e.startingLoad;if(e.loader.loaderObj.execute===!1){for(var r=[].concat(e.loads),a=0,o=r.length;o>a;a++){var t=r[a];t.module={name:t.name,module:S({}),evaluated:!0},t.status="linked",h(e.loader,t)}return e.resolve(n)}var s=f(e);s||e.resolve(n)}}function p(e,n,r){var a=e.loader;e:if(n)if(e.loads[0].name==n.name)r=t(r,"Error loading "+n.name);else{for(var o=0;o<e.loads.length;o++)for(var s=e.loads[o],i=0;i<s.dependencies.length;i++){var d=s.dependencies[i];if(d.value==n.name){r=t(r,"Error loading "+n.name+' as "'+d.key+'" from '+s.name);break e}}r=t(r,"Error loading "+n.name+" from "+e.loads[0].name)}else r=t(r,"Error linking "+e.loads[0].name);for(var l=e.loads.concat([]),o=0,u=l.length;u>o;o++){var n=l[o];a.loaderObj.failed=a.loaderObj.failed||[],-1==x.call(a.loaderObj.failed,n)&&a.loaderObj.failed.push(n);var c=x.call(n.linkSets,e);if(n.linkSets.splice(c,1),0==n.linkSets.length){var f=x.call(e.loader.loads,n);-1!=f&&e.loader.loads.splice(f,1)}}e.reject(r)}function h(e,t){if(e.loaderObj.trace){e.loaderObj.loads||(e.loaderObj.loads={});var n={};t.dependencies.forEach(function(e){n[e.key]=e.value}),e.loaderObj.loads[t.name]={name:t.name,deps:t.dependencies.map(function(e){return e.key}),depMap:n,address:t.address,metadata:t.metadata,source:t.source}}t.name&&(e.modules[t.name]=t.module);var r=x.call(e.loads,t);-1!=r&&e.loads.splice(r,1);for(var a=0,o=t.linkSets.length;o>a;a++)r=x.call(t.linkSets[a].loads,t),-1!=r&&t.linkSets[a].loads.splice(r,1);t.linkSets.splice(0,t.linkSets.length)}function g(e,t,r){try{var a=t.execute()}catch(o){return void r(t,o)}return a&&a instanceof n?a:void r(t,new TypeError("Execution must define a Module instance"))}function v(e,t,n){var r=e._loader.importPromises;return r[t]=n.then(function(e){return r[t]=void 0,e},function(e){throw r[t]=void 0,e})}function y(e,t){var n=e.loader;if(e.loads.length)for(var r=e.loads.concat([]),a=0;a<r.length;a++){var o=r[a],s=g(e,o,t);if(!s)return;o.module={name:o.name,module:s},o.status="linked",h(n,o)}}var b=0;r.prototype={constructor:r,define:function(e,t,n){if(this._loader.importPromises[e])throw new TypeError("Module is already loading.");return v(this,e,new Promise(l({step:"translate",loader:this._loader,moduleName:e,moduleMetadata:n&&n.metadata||{},moduleSource:t,moduleAddress:n&&n.address})))},"delete":function(e){var t=this._loader;return delete t.importPromises[e],delete t.moduleRecords[e],t.modules[e]?delete t.modules[e]:!1},get:function(e){return this._loader.modules[e]?this._loader.modules[e].module:void 0},has:function(e){return!!this._loader.modules[e]},"import":function(e,t,n){"object"==typeof t&&(t=t.name);var r=this;return Promise.resolve(r.normalize(e,t)).then(function(e){var t=r._loader;return t.modules[e]?t.modules[e].module:t.importPromises[e]||v(r,e,a(t,e,{}).then(function(n){return delete t.importPromises[e],n.module.module}))})},load:function(e){var t=this._loader;return t.modules[e]?Promise.resolve():t.importPromises[e]||v(this,e,new Promise(l({step:"locate",loader:t,moduleName:e,moduleMetadata:{},moduleSource:void 0,moduleAddress:void 0})).then(function(){delete t.importPromises[e]}))},module:function(t,n){var r=e();r.address=n&&n.address;var a=u(this._loader,r),o=Promise.resolve(t),s=this._loader,i=a.done.then(function(){return r.module.module});return d(s,r,o),i},newModule:function(e){if("object"!=typeof e)throw new TypeError("Expected object");var t=new n,r=[];if(Object.getOwnPropertyNames&&null!=e)r=Object.getOwnPropertyNames(e);else for(var a in e)r.push(a);for(var o=0;o<r.length;o++)(function(n){w(t,n,{configurable:!1,enumerable:!0,get:function(){return e[n]},set:function(){throw new Error("Module exports cannot be changed externally.")}})})(r[o]);return Object.freeze&&Object.freeze(t),t},set:function(e,t){if(!(t instanceof n))throw new TypeError("Loader.set("+e+", module) must be a module");this._loader.modules[e]={module:t}},normalize:function(e,t,n){},locate:function(e){return e.name},fetch:function(e){},translate:function(e){return e.source},instantiate:function(e){}};var S=r.prototype.newModule}();var k;o.prototype=r.prototype,a.prototype=new o,a.prototype.constructor=a;var M,I=/^[^\/]+:\/\//,R=new j(S),z=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(P){z=!1}var I=/^([^\/]+:\/\/|\/)/;a.prototype.normalize=function(e,t,n){return e=e.match(I)||"."==e[0]?new j(e,t||S).href:new j(u(this,e)||e,S).href},function(){function t(){if(i&&"interactive"===i.script.readyState)return i.load;for(var e=0;e<u.length;e++)if("interactive"==u[e].script.readyState)return i=u[e],i.load}function n(e,t){return new Promise(function(e,n){t.metadata.integrity&&n(new Error("Subresource integrity checking is not supported in web workers.")),d=t;try{importScripts(t.address)}catch(r){d=null,n(r)}d=null,t.metadata.entry||n(new Error(t.address+" did not call System.register or AMD define. If loading a global, ensure the meta format is set to global.")),e("")})}if("undefined"!=typeof document)var r=document.getElementsByTagName("head")[0];var a,o,i,d=null,l=r&&function(){var e=document.createElement("script"),t="undefined"!=typeof opera&&"[object Opera]"===opera.toString();return e.attachEvent&&!(e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0)&&!t}(),u=[],c=0,f=[];s("pushRegister_",function(e){return function(n){return e.call(this,n)?!1:(d?this.reduceRegister_(d,n):l?this.reduceRegister_(t(),n):c?f.push(n):this.reduceRegister_(null,n),!0)}}),s("fetch",function(t){return function(s){var d=this;return"json"!=s.metadata.format&&s.metadata.scriptLoad&&(y||v)?v?n(d,s):new Promise(function(t,n){function m(e){if(!g.readyState||"loaded"==g.readyState||"complete"==g.readyState){if(c--,s.metadata.entry||f.length){if(!l){for(var r=0;r<f.length;r++)d.reduceRegister_(s,f[r]);f=[]}}else d.reduceRegister_(s);h(),s.metadata.entry||s.metadata.bundle||n(new Error(s.name+" did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.")),t("")}}function p(e){h(),n(new Error("Unable to load script "+s.address))}function h(){if(e.System=a,e.require=o,g.detachEvent){g.detachEvent("onreadystatechange",m);for(var t=0;t<u.length;t++)u[t].script==g&&(i&&i.script==g&&(i=null),u.splice(t,1))}else g.removeEventListener("load",m,!1),g.removeEventListener("error",p,!1);r.removeChild(g)}var g=document.createElement("script");g.async=!0,s.metadata.crossOrigin&&(g.crossOrigin=s.metadata.crossOrigin),s.metadata.integrity&&g.setAttribute("integrity",s.metadata.integrity),l?(g.attachEvent("onreadystatechange",m),u.push({script:g,load:s})):(g.addEventListener("load",m,!1),g.addEventListener("error",p,!1)),c++,a=e.System,o=e.require,g.src=s.address,r.appendChild(g)}):t.call(this,s)}})}();var D=/^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;!function(){function t(e,n,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==x.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var a=0,o=e.normalizedDeps.length;o>a;a++){var s=e.normalizedDeps[a],i=n.defined[s];if(i&&!i.evaluated){var d=e.groupIndex+(i.declarative!=e.declarative);if(null===i.groupIndex||i.groupIndex<d){if(null!==i.groupIndex&&(r[i.groupIndex].splice(x.call(r[i.groupIndex],i),1),0==r[i.groupIndex].length))throw new Error("Mixed dependency cycle detected");i.groupIndex=d}t(i,n,r)}}}}function r(e,n,r){if(!n.module){n.groupIndex=0;var a=[];t(n,r,a);for(var o=!!n.declarative==a.length%2,s=a.length-1;s>=0;s--){for(var i=a[s],d=0;d<i.length;d++){var u=i[d];o?l(u,r):m(u,r)}o=!o}}}function o(){}function d(e,t){return t[e]||(t[e]={name:e,dependencies:[],exports:new o,importers:[]})}function l(t,n){if(!t.module){var r=n._loader.moduleRecords,a=t.module=d(t.name,r),o=t.module.exports,s=t.declare.call(e,function(e,t){if(a.locked=!0,"object"==typeof e)for(var n in e)o[n]=e[n];else o[e]=t;for(var r=0,s=a.importers.length;s>r;r++){var i=a.importers[r];if(!i.locked){var d=x.call(i.dependencies,a),l=i.setters[d];l&&l(o)}}return a.locked=!1,t},{id:t.name});if("function"==typeof s&&(s={setters:[],execute:s}),s=s||{setters:[],execute:function(){}},a.setters=s.setters,a.execute=s.execute,!a.setters||!a.execute)throw new TypeError("Invalid System.register form for "+t.name);for(var i=0,u=t.normalizedDeps.length;u>i;i++){var c,f=t.normalizedDeps[i],m=n.defined[f],p=r[f];p?c=p.exports:m&&!m.declarative?c=m.esModule:m?(l(m,n),p=m.module,c=p.exports):c=n.get(f),p&&p.importers?(p.importers.push(a),a.dependencies.push(p)):a.dependencies.push(null);for(var h=t.originalIndices[i],g=0,v=h.length;v>g;++g){var y=h[g];a.setters[y]&&a.setters[y](c)}}}}function u(e,t){var n,r=t.defined[e];if(r)r.declarative?p(e,r,[],t):r.evaluated||m(r,t),n=r.module.exports;else if(n=t.get(e),!n)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&n&&n.__useDefault?n["default"]:n}function m(t,r){if(!t.module){var a={},o=t.module={exports:a,id:t.name};if(!t.executingRequire)for(var s=0,i=t.normalizedDeps.length;i>s;s++){var d=t.normalizedDeps[s],l=r.defined[d];l&&m(l,r)}t.evaluated=!0;var c=t.execute.call(e,function(e){for(var n=0,a=t.deps.length;a>n;n++)if(t.deps[n]==e)return u(t.normalizedDeps[n],r);var o=r.normalizeSync(e,t.name);if(-1!=x.call(t.normalizedDeps,o))return u(o,r);throw new Error("Module "+e+" not declared as a dependency of "+t.name)},a,o);void 0!==c&&(o.exports=c),a=o.exports,a&&(a.__esModule||a instanceof n)?t.esModule=r.newModule(a):t.esmExports&&a!==e?t.esModule=r.newModule(f(a)):t.esModule=r.newModule({"default":a,__useDefault:!0})}}function p(t,n,r,a){if(n&&!n.evaluated&&n.declarative){r.push(t);for(var o=0,s=n.normalizedDeps.length;s>o;o++){var i=n.normalizedDeps[o];-1==x.call(r,i)&&(a.defined[i]?p(i,a.defined[i],r,a):a.get(i))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}a.prototype.register=function(e,t,n){if("string"!=typeof e&&(n=t,t=e,e=null),"boolean"==typeof n)return this.registerDynamic.apply(this,arguments);var r=g();r.name=e&&(this.decanonicalize||this.normalize).call(this,e),r.declarative=!0,r.deps=t,r.declare=n,this.pushRegister_({amd:!1,entry:r})},a.prototype.registerDynamic=function(e,t,n,r){"string"!=typeof e&&(r=n,n=t,t=e,e=null);var a=g();a.name=e&&(this.decanonicalize||this.normalize).call(this,e),a.deps=t,a.execute=r,a.executingRequire=n,this.pushRegister_({amd:!1,entry:a})},s("reduceRegister_",function(){return function(e,t){if(t){var n=t.entry,r=e&&e.metadata;if(n.name&&(n.name in this.defined||(this.defined[n.name]=n),r&&(r.bundle=!0)),!n.name||e&&!r.entry&&n.name==e.name){if(!r)throw new TypeError("Invalid System.register call. Anonymous System.register calls can only be made by modules loaded by SystemJS.import and not via script tags.");if(r.entry)throw"register"==r.format?new Error("Multiple anonymous System.register calls in module "+e.name+". If loading a bundle, ensure all the System.register calls are named."):new Error("Module "+e.name+" interpreted as "+r.format+" module format, but called System.register.");r.format||(r.format="register"),r.entry=n}}}}),i(function(e){return function(){e.call(this),this.defined={},this._loader.moduleRecords={}}}),w(o,"toString",{value:function(){return"Module"}}),s("delete",function(e){return function(t){return delete this._loader.moduleRecords[t],delete this.defined[t],e.call(this,t)}}),s("fetch",function(e){return function(t){return this.defined[t.name]?(t.metadata.format="defined",""):(t.metadata.deps=t.metadata.deps||[],e.call(this,t))}}),s("translate",function(e){return function(t){return t.metadata.deps=t.metadata.deps||[],Promise.resolve(e.apply(this,arguments)).then(function(e){return("register"==t.metadata.format||"system"==t.metadata.format||!t.metadata.format&&h(t.source))&&(t.metadata.format="register"),e})}}),s("load",function(e){return function(t){var n=this,a=n.defined[t];return!a||a.deps.length?e.apply(this,arguments):(a.originalIndices=a.normalizedDeps=[],r(t,a,n),p(t,a,[],n),a.esModule||(a.esModule=n.newModule(a.module.exports)),n.trace||(n.defined[t]=void 0),n.set(t,a.esModule),Promise.resolve())}}),s("instantiate",function(e){return function(t){"detect"==t.metadata.format&&(t.metadata.format=void 0),e.call(this,t);var n,a=this;if(a.defined[t.name])n=a.defined[t.name],n.declarative||(n.deps=n.deps.concat(t.metadata.deps)),n.deps=n.deps.concat(t.metadata.deps);else if(t.metadata.entry)n=t.metadata.entry,n.deps=n.deps.concat(t.metadata.deps);else if(!(a.builder&&t.metadata.bundle||"register"!=t.metadata.format&&"esm"!=t.metadata.format&&"es6"!=t.metadata.format)){if("undefined"!=typeof __exec&&__exec.call(a,t),!t.metadata.entry&&!t.metadata.bundle)throw new Error(t.name+" detected as "+t.metadata.format+" but didn't execute.");n=t.metadata.entry,n&&t.metadata.deps&&(n.deps=n.deps.concat(t.metadata.deps))}n||(n=g(),n.deps=t.metadata.deps,n.execute=function(){}),a.defined[t.name]=n;var o=c(n.deps);n.deps=o.names,n.originalIndices=o.indices,n.name=t.name,n.esmExports=t.metadata.esmExports!==!1;for(var s=[],i=0,d=n.deps.length;d>i;i++)s.push(Promise.resolve(a.normalize(n.deps[i],t.name)));return Promise.all(s).then(function(e){return n.normalizedDeps=e,{deps:n.deps,execute:function(){return r(t.name,n,a),p(t.name,n,[],a),n.esModule||(n.esModule=a.newModule(n.module.exports)),a.trace||(a.defined[t.name]=void 0),n.esModule}}})}})}(),function(){i(function(e){return function(){e.call(this),this.bundles={},this._loader.loadedBundles={}}}),s("locate",function(e){return function(t){var n=this,r=!1;if(!(t.name in n.defined))for(var a in n.bundles){for(var o=0;o<n.bundles[a].length;o++){var s=n.bundles[a][o];if(s==t.name){r=!0;break}if(-1!=s.indexOf("*")){var i=s.split("*");if(2!=i.length){n.bundles[a].splice(o--,1);continue}if(t.name.substring(0,i[0].length)==i[0]&&t.name.substr(t.name.length-i[1].length,i[1].length)==i[1]&&-1==t.name.substr(i[0].length,t.name.length-i[1].length-i[0].length).indexOf("/")){r=!0;break}}}if(r)return n["import"](a).then(function(){return e.call(n,t)})}return e.call(n,t)}})}(),i(function(t){return function(){t.apply(this,arguments),e.define=this.amdDefine}}),s("fetch",function(e){return function(t){return t.metadata.scriptLoad=!0,e.call(this,t)}}),k=new a,e.SystemJS=k,k.version="0.19.46 Register Only","object"==typeof module&&module.exports&&"object"==typeof exports&&(module.exports=k),e.System=k}("undefined"!=typeof self?self:global);
//# sourceMappingURL=system-register-only.js.map