(function() {var managerConfig={"apiSrc":"https:\/\/c5.rgstatic.net\/javascript\/delivery-manager\/delivery-impl.1.206.0.js","disableAdLoading":false,"includeSrcs":["https:\/\/c5.rgstatic.net\/javascript\/delivery-manager\/delivery-impl.1.206.0.js"],"openwrapSrc":"\/\/ads.pubmatic.com\/AdServer\/js\/pwt\/161519\/6734","init":{"countryCode":"IN","targeting":{"loggedIn":["false"],"ref":["researchgate"],"pm_domain":["https:\/\/www.researchgate.net"],"variants":["prd","openwrap"],"firstLevelScience":["na"],"secondLevelScience":["na"],"country":["na"],"insightPresets":["na"],"profileCareerLevel":["na"],"profileInstType":["na"],"profileInstitution":["na"],"profilePosition":["na"],"profile1stLvlScience":["na"],"profile2ndLvlScience":["na"],"profileInsPresets":["na"]},"rgKey":null,"gdprApplies":false,"publisherDomain":"https:\/\/www.researchgate.net","bidderTimeout":2000,"bidders":["amazon","opnwrp"],"enableLogging":false,"statsEnabled":false,"lazyLoadRootMargin":"50%","lazyLoadEnabled":true,"disableFastScrollCheck":true,"renderAdsOnInit":false,"whitelistedAdUnits":[],"refreshingAdvertiserIds":[33669399,1,4627169662,4625100232,4567730054,4564172158,90177879,65896599,51568119,49298679,18489159,4688961526,4698948464,4704551748,4686313861,4700068219,69706959,4783554614,4907946228,5142007804,5220397135,4858548433,4894678235,4857962348,4870917254,4796138092,4728866591,4895745984,4889852571,4866112245,4891343917,4900833967,4901133352,4808662928,4786627170,4897492929,4867872712,4891579425,4899475887,4591969425,4883025061,4847103976,4911120469,4905857437,4809502953,4782207325,4855860857,4886482683,4866466300,4907059915,4757995854,4797039818,4859534361,4819892137,4906966741,4876959328,4908236858,4881644375,4874833808,4908875213,4756692462,4726442151,4931173563,4928729012,4932446586],"pubMaticOpenWrapEnabled":true,"amazonEnabled":true,"ppid":"2c17703be59cf9d65d33006fc7668b98","refreshDisabled":false}};!function(e){var n={};function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)r.d(t,i,function(n){return e[n]}.bind(null,i));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/javascript/delivery/",r(r.s=0)}([function(e,n){function r(e,n){const r=document.createElement("script");r.async=!0,r.type="text/javascript",r.src=e,n&&Object.keys(n).forEach(e=>{r[e]=n[e]});const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(r,t)}window.rgDelivery=window.rgDelivery||{cmd:[]},window.cookieConsentConfig&&(window.cookieConsentConfig.gdprApplies&&managerConfig.prebidCmpSrc?managerConfig.includeSrcs.push(managerConfig.prebidCmpSrc):managerConfig.prebidSrc&&managerConfig.includeSrcs.push(managerConfig.prebidSrc)),managerConfig.disableAdLoading||managerConfig.includeSrcs.forEach(e=>{r(e)}),window.openwrap={cmd:[]},function(){if(!managerConfig.init.pubMaticOpenWrapEnabled)return;window.PWT={},window.PWT.jsLoaded=function(){window.openwrap.cmd.forEach(e=>e()),window.openwrap.cmd.push=e=>e()};const e=window.location.href,n=managerConfig.openwrapSrc||"//ads.pubmatic.com/AdServer/js/pwt/161519/6738";let t="";if(e.indexOf("pwtv=")>0){const n=/pwtv=(.*?)(&|$)/g.exec(e);n.length>=2&&n[1].length>0&&(t="/"+n[1])}r(`${n}${t}/pwt.js`)}(),managerConfig.init.amazonEnabled&&function(e,n,r,t,i,o,a){function c(r,t){n[e]._Q.push([r,t])}n[e]||(n[e]={init:function(){c("i",arguments)},fetchBids:function(){c("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]},(o=r.createElement(t)).async=!0,o.src="//c.amazon-adsystem.com/aax2/apstag.js",(a=r.getElementsByTagName(t)[0]).parentNode.insertBefore(o,a))}("apstag",window,document,"script"),window.rgDelivery.cmd.push(()=>{window.rgDelivery.initManager(managerConfig.init)})}]);
})();