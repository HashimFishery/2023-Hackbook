(window.wjp=window.wjp||[]).push([[42],{6064:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a})),n.d(t,"gatherUserData",(function(){return r}));var i=n(4),c=n(18);const r=()=>{const e={currentTimeZoneOffsetInHours:(new Date).getTimezoneOffset()/-60,viewportWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),viewportHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0)};return Object(c.post)("application.UpdateUserData.html",e)},a=()=>(Object(i.useEffect)(()=>{if(requestIdleCallback){const e=requestIdleCallback(r);return()=>{cancelIdleCallback(e)}}},[null]),null)}}]);