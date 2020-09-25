/*! For license information please see 62a41283.8e7e6858.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(159)),s=n(164),i=n(163),c={id:"presets",title:"Preset Broadcasts",description:"Sending preset broadcasts with Assistant Relay"},l={id:"commands/presets",title:"Preset Broadcasts",description:"Sending preset broadcasts with Assistant Relay",source:"@site/../docs/commands/presets.mdx",permalink:"/docs/commands/presets",editUrl:"https://github.com/greghesp/assistant-relay/edit/doc-src/../docs/commands/presets.mdx",sidebar:"docs",previous:{title:"Sending Broadcasts",permalink:"/docs/commands/broadcast"},next:{title:"Custom Commands",permalink:"/docs/commands/custom-commands"}},u=[{value:"Sending a preset broadcast",id:"sending-a-preset-broadcast",children:[{value:"Presets",id:"presets",children:[]},{value:"Limitations",id:"limitations",children:[]}]}],b={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Google Assistant supports a number of preset broadcasts of our the box.  These can come with sound effects and other surprises that can be found ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.google.com/googlehome/answer/7531913?co=GENIE.Platform=Android&hl=en"}),"here")),Object(o.b)("h2",{id:"sending-a-preset-broadcast"},"Sending a preset broadcast"),Object(o.b)("p",null,"To make use of these presets, send a HTTP POST request to ",Object(o.b)("inlineCode",{parentName:"p"},"/assistant")," with the following json-encoded body parameters"),Object(o.b)(s.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"Schema",value:"schema"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "preset": "dinner",\n    "user": "greg" // Match the name of the users you setup\n}\n'))),Object(o.b)(i.a,{value:"schema",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"preset: STRING\nuser: STRING\n"))),Object(o.b)(i.a,{value:"response",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "success": true, // Or false\n    "response": "", // Contains the text response from Google Assistant if applicable\n    "audio": "/server/audio?v=1581510182698", // A URL to the audio response from Google Assistant\n    "error": "Error Message" // Only shown if success if false\n}\n')))),Object(o.b)("p",null,"The Google Home device will now play a broadcast using the Assistant ",Object(o.b)("inlineCode",{parentName:"p"},"dinner")," preset"),Object(o.b)("h3",{id:"presets"},"Presets"),Object(o.b)("p",null,"The available presets that can be send are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"wakeup"),Object(o.b)("li",{parentName:"ul"},"breakfast"),Object(o.b)("li",{parentName:"ul"},"lunch"),Object(o.b)("li",{parentName:"ul"},"dinner"),Object(o.b)("li",{parentName:"ul"},"timetoleave"),Object(o.b)("li",{parentName:"ul"},"arrivedhome"),Object(o.b)("li",{parentName:"ul"},"ontheway"),Object(o.b)("li",{parentName:"ul"},"movietime"),Object(o.b)("li",{parentName:"ul"},"tvtime"),Object(o.b)("li",{parentName:"ul"},"bedtime")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": Some of these preconfigured commands also say who triggered the command, such as the 'on the way' command. Make sure you pass the correct username in the user parameter, otherwise it will use the first user you setup")),Object(o.b)("h3",{id:"limitations"},"Limitations"),Object(o.b)("p",null,"As Assistant Relay uses the Google Assistant Service, there are some limitations to the environment that this can operate in."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"By Google's design, a broadcast goes out to ",Object(o.b)("strong",{parentName:"li"},"all")," Google Home devices.  This cannot be changed."),Object(o.b)("li",{parentName:"ul"},"For broadcasts to work, Assistant Relay ",Object(o.b)("strong",{parentName:"li"},"must")," be running on the same local network as the Google Home devices you wish to broadcast to."),Object(o.b)("li",{parentName:"ul"},"In addition, some users have reported issues when IPV6 is enabled on their router.  We recommend disabling IPV6 support on your router.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": If Digital Wellbeing is enabled, this feature may be restricted or blocked by Downtime, Filters, or Do not disturb. Please ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.google.com/googlehome/answer/9141219"}),"go here")," for more information on Digital Wellbeing.")))}p.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(s,".").concat(m)]||b[m]||p[m]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},160:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},162:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a},163:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},164:function(e,t,n){"use strict";n(23),n(17),n(18);var r=n(0),a=n.n(r),o=n(162);var s=function(){return Object(r.useContext)(o.a)},i=n(160),c=n.n(i),l=n(126),u=n.n(l),b=37,p=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,i=e.values,l=e.groupId,m=s(),d=m.tabGroupChoices,f=m.setTabGroupChoices,h=Object(r.useState)(o),O=h[0],g=h[1];if(null!=l){var j=d[l];null!=j&&j!==O&&g(j)}var v=function(e){g(e),null!=l&&f(l,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===t,className:c()("tabs__item",u.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return v(t)},onClick:function(){return v(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}}}]);