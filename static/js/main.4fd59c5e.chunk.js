(this["webpackJsonplyrics-word-counter"]=this["webpackJsonplyrics-word-counter"]||[]).push([[0],{119:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(5),c=n.n(a);n(61),n(62),n(63);function i(){return r.a.createElement("section",{className:"lyrics-counter__title"},r.a.createElement("h1",null,"Repetition Counter"))}n(64);var l=n(123),u=n(31),s=r.a.createContext(null);function m(e){var t=r.a.useState({}),n=Object(u.a)(t,2),o=n[0],a=n[1],c=r.a.useState([]),i=Object(u.a)(c,2),l=i[0],m=i[1];return r.a.createElement(s.Provider,{value:{repetitionWordDictionary:o,setRepetitionDictionary:a,exceptions:l,setExceptions:m}},e.children)}function f(){var e=r.a.useContext(s),t=e.repetitionWordDictionary,n=e.setRepetitionDictionary,a=l.a.TextArea;return Object(o.useEffect)((function(){console.log(t)}),[t]),r.a.createElement("section",{className:"lyrics-counter__input"},r.a.createElement("label",null,"Insert your lyrics here:"),r.a.createElement(a,{allowClear:!0,rows:5,onChange:function(e){e.preventDefault();var t={};e.target.value.trim().split(/[\n, ]/).forEach((function(e){void 0!==t[e]?t[e]+=1:t[e]=1,n(t)}))}}))}n(118);var d=n(125);n(119);function p(){var e=r.a.useContext(s),t=e.repetitionWordDictionary,n=(e.setRepetitionDictionary,e.exceptions),o=e.setExceptions,a=function(e){o((function(t){return t.includes(e)||t.push(e),t}))};return r.a.createElement("section",{className:"lyrics-counter__repeated-words"},Object.keys(t).map((function(e,o){return 2!==t[e]||n.includes(e)?t[e]>2&&!n.includes(e)?r.a.createElement(d.a,{closable:!0,onClose:function(){return a(e)},color:"#cd201f"},e):void 0:r.a.createElement(d.a,{closable:!0,onClose:function(){return a(e)},color:"#9b870c"},e)})))}var E=function(){return r.a.createElement(m,null,r.a.createElement("div",{className:"lyrics-counter__main"},r.a.createElement(i,null),r.a.createElement(f,null),r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,t,n){e.exports=n(122)},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){}},[[56,1,2]]]);
//# sourceMappingURL=main.4fd59c5e.chunk.js.map