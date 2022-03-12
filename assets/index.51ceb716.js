var f=Object.defineProperty,g=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var m=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))N.call(t,n)&&m(e,n,t[n]);return e},o=(e,t)=>g(e,p(t));import{j as v,a as b,F,D as E,p as M,y as j,b as w,S as P}from"./vendor.39a068fd.js";const A=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))a(d);new MutationObserver(d=>{for(const s of d)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(d){const s={};return d.integrity&&(s.integrity=d.integrity),d.referrerpolicy&&(s.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?s.credentials="include":d.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(d){if(d.ep)return;d.ep=!0;const s=n(d);fetch(d.href,s)}};A();const r=v,c=b,L=F,O=e=>r("button",{className:"h-5 w-10 flex items-center text-center justify-center rounded-xl bg-white text-teal-400 border-2 border-teal-400 font-semibold",onClick:e.onClick,children:"+"}),S=e=>c("span",{className:"text-sm",children:[c("span",{children:[e.year,"\u5E74"]}),c("span",{children:[e.month,"\u6708"]}),c("span",{children:[e.date,"\u65E5"]}),c("span",{children:["\uFF08",e.day,"\uFF09"]})]}),C={"4th":{nonParticipateMemberIds:[9,10],dates:[{year:2022,month:4,date:10,day:"\u65E5"},{year:2022,month:4,date:16,day:"\u571F"},{year:2022,month:4,date:17,day:"\u65E5"},{year:2022,month:4,date:29,day:"\u91D1"},{year:2022,month:5,date:7,day:"\u571F"},{year:2022,month:5,date:8,day:"\u65E5"}]}},D=(e,t)=>e.greets.find(a=>a.part===t)===void 0?e:o(l({},e),{greets:e.greets.map(a=>a.part===t?o(l({},a),{greet:{elected:a.greet.elected+1}}):a)}),h=(e,t)=>e.month===t.month&&e.month===t.month&&e.date===t.date,G={meets:[]},I=(e,t)=>{switch(t.type){case"add":return e.meets.find(a=>h(a.date,t.date))===void 0?e:{meets:e.meets.map(a=>h(a.date,t.date)?D(a,t.part):a)};case"init":return{meets:t.dates.map(n=>({date:n,greets:[{part:1,greet:{elected:0}},{part:2,greet:{elected:0}},{part:3,greet:{elected:0}},{part:4,greet:{elected:0}},{part:5,greet:{elected:0}},{part:6,greet:{elected:0}}]}))};default:return e}},y=E(()=>{}),$=()=>{const[e,t]=M(I,G);return j(()=>{t({type:"init",dates:C["4th"].dates})},[]),r(y.Provider,{value:t,children:r("div",{children:e.meets.map((n,a)=>r(k,l({},n),a))})})},k=e=>c("div",{className:"mb-6 last:mb-0",children:[r("div",{className:"py-2",children:r(S,{year:e.date.year,month:e.date.month,day:e.date.day,date:e.date.date})}),r("div",{className:"flex flex-row",children:e.greets.map((t,n)=>r(B,l({date:e.date},t),n))})]}),B=e=>{const t=w(y);return r("div",{className:"flex-1",children:c("div",{className:"p-2",children:[c("div",{className:"text-sm text-gray-600",children:[e.part,"\u90E8"]}),c("div",{className:"mb-1 text-right",children:[r("span",{className:"text-xl",children:e.greet.elected}),r("span",{className:"ml-1 text-sm text-gray-600",children:"\u679A"})]}),r("div",{className:"flex justify-center",children:r(O,{onClick:()=>t({type:"add",part:e.part,date:e.date})})})]})})},T=()=>r("div",{children:r("section",{children:r("div",{className:"py-8 px-2",children:r($,{})})})}),q=e=>r("header",{children:r("div",{className:"container px-4 py-2 bg-teal-400 drop-shadow-lg",children:r("h1",{className:"text-white font-semibold",children:e.title})})}),H="My Fortune",K=()=>r("footer",{children:r("div",{className:"container py-8 mx-auto bg-gray-100 flex justify-center",children:r("div",{className:"contents",children:c("small",{className:"text-gray-400",children:["created by ",r("a",{className:"text-blue-300",children:"@apollo46g"})]})})})}),R=()=>c(L,{children:[r(q,{title:H}),r("main",{children:r(T,{})}),r(K,{})]});P(r(R,{}),document.getElementById("app"));
