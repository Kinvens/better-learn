import{r as u,o as l,c as d,a,b as f,F as _,d as m,e as v,f as y,g as h}from"./vendor.4f900547.js";const g=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};g();var p=(n,r)=>{for(const[s,o]of r)n[s]=o;return n};const b={},k={class:"wrapper"},L={id:"nav"};function N(n,r){const s=u("router-link"),o=u("router-view");return l(),d(_,null,[a("header",null,[a("div",k,[a("div",L,[f(s,{to:"/"})])])]),f(o)],64)}var w=p(b,[["render",N]]);const x={};function A(n,r){return l(),d("main",null,"\u6211\u662F\u9996\u9875")}var O=p(x,[["render",A]]);const B=m({history:v("/"),routes:[{path:"/",name:"Home",component:O}]});var F=y({state:{},mutations:{},actions:{},modules:{}});const i=h(w);i.use(B);i.use(F);i.mount("#app");