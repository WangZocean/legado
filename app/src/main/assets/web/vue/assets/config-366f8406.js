import{u as n,A as r}from"./index-3dbb2f78.js";import"./vendor-0c9d4c13.js";const i=n();i.setMiniInterface(window.innerWidth<750);window.onresize=()=>{i.setMiniInterface(window.innerWidth<750)};r.getReadConfig().then(a=>{var e=a.data.data;if(e){const t=n();let o=JSON.parse(e),s=t.config;o=Object.assign(s,o),t.setConfig(o)}});