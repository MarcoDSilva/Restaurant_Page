!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const i=document.querySelector("#container"),a=document.createElement("div"),o=document.querySelector("#container"),u=document.createElement("div");function r(e){switch(c(),e){case"about":break;case"menu":(()=>{a.classList.add("info-container");const e=document.createElement("div");e.classList.add("info");const t=document.createElement("h4");t.textContent="Our menu has";const n=document.createElement("p");n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus, justo eu ultrices mattis,\n    justo arcu placerat lorem, vitae tempor tortor augue at libero. Sed sollicitudin enim laoreet urna\n    suscipit fermentum.\n    Sed odio ex, ornare at condimentum id, interdum id lacus. Quisque non leo nec velit feugiat\n    sagittis.\n    Praesent finibus diam ut purus eleifend rhoncus. Quisque pretium ligula in vehicula fringilla.\n    Fusce porttitor arcu tellus, ut congue eros facilisis quis. Aenean blandit in tortor in congue.\n    Donec tempus, felis et tempus rhoncus, dolor dolor sagittis sapien, nec lacinia lacus massa id urna.\n    Nullam tellus orci, imperdiet interdum nunc non, feugiat bibendum nisl. Maecenas nec turpis non\n    justo auctor malesuada ac ut elit.\n    Quisque suscipit, libero quis facilisis laoreet, sapien odio commodo mauris, a pellentesque lacus\n    magna nec nisi.\n    Donec maximus enim eget iaculis ullamcorper. Pellentesque habitant morbi tristique senectus et netus\n    et malesuada\n    fames ac turpis egestas. Integer dictum lorem ut lacus lobortis bibendum.",e.appendChild(t),e.appendChild(n),a.appendChild(e),i.appendChild(a)})();break;case"contacts":(()=>{u.classList.add("info-container");const e=document.createElement("div");e.classList.add("info");const t=document.createElement("h4"),n=document.createElement("p");t.textContent="contact us at: ",n.textContent="Call us at 911 911 9111\n    twitterino at - \n    fbrino at -\n    ig at - ",e.appendChild(t),e.appendChild(n),u.appendChild(e),o.appendChild(u)})()}}const c=()=>{u.innerHTML=null,o.appendChild(u),a.innerHTML=null,i.appendChild(a)};(()=>{const e=document.querySelector("#container"),t=document.createElement("navbar");t.id="navbar";const n=document.createElement("p"),i=document.createElement("ul");i.classList.add("nav-list");const a=["about","menu","contacts"];for(let e=0;e<a.length;e++){let t=document.createElement("li"),n=document.createElement("a");n.innerText=""+a[e],n.id=""+a[e],n.classList.add("nav-link"),n.addEventListener("click",()=>{r(a[e])}),n.href="#",t.appendChild(n),i.appendChild(t)}n.innerText="Restaurant Lorem",n.classList.add("logo"),t.appendChild(n),t.appendChild(i),e.appendChild(t)})()}]);