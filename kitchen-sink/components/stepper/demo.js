webpackJsonp([34],{1148:function(n,t,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/stepper/demo/basic.md",id:"components-stepper-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      val<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n      val1<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(val);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> val <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange1 <span class="token operator">=</span> <span class="token punctuation">(</span>val1<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(val);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> val1 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n          <span class="token attr-name">wrap</span>\n          <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n            <span class="token operator">&lt;</span>Stepper\n              style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'100px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">showNumber</span>\n              <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>val<span class="token punctuation">}</span></span>\n              <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n            <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n        Show number value\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Stepper\n            style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'100px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showNumber</span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">disabled</span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n        Disabled\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{default:n}}function t(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function s(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function e(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}var o=a(0),p=(a(0),a(231),a(232)),u=n(p),c=(a(943),a(945)),i=n(c),r=function(){function n(n,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(t,a,s){return a&&n(t.prototype,a),s&&n(t,s),t}}(),l=function(n){function a(n){t(this,a);var e=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));return e.onChange=function(n){e.setState({val:n})},e.onChange1=function(n){e.setState({val1:n})},e.state={val:3,val1:2},e}return e(a,n),r(a,[{key:"render",value:function(){return o.createElement(u.default,null,o.createElement(u.default.Item,{wrap:!0,extra:o.createElement(i.default,{style:{width:"100%",minWidth:"100px"},showNumber:!0,max:10,min:1,value:this.state.val,onChange:this.onChange})},"Show number value"),o.createElement(u.default.Item,{extra:o.createElement(i.default,{style:{width:"100%",minWidth:"100px"},showNumber:!0,max:10,min:1,defaultValue:3,disabled:!0})},"Disabled"))}}]),a}(o.Component);return o.createElement(l,null)}}},735:function(n,t,a){n.exports={basic:a(1148)}},943:function(n,t,a){"use strict";a(45),a(81),a(944)},944:function(n,t){},945:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{default:n}}function e(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function o(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function p(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},i=function(){function n(n,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(t,a,s){return a&&n(t.prototype,a),s&&n(t,s),t}}(),r=a(0),l=s(r),f=a(6),k=s(f),d=a(946),m=s(d),h=a(82),v=s(h),b=function(n,t){var a={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(a[s]=n[s]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,s=Object.getOwnPropertySymbols(n);e<s.length;e++)t.indexOf(s[e])<0&&(a[s[e]]=n[s[e]]);return a},g=function(n){function t(){return o(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,n),i(t,[{key:"render",value:function(){var n=this,t=this.props,a=t.className,s=t.showNumber,o=b(t,["className","showNumber"]),p=(0,k.default)(a,e({},"showNumber",!!s));return l.default.createElement(m.default,c({upHandler:l.default.createElement(v.default,{type:"plus",size:"xxs"}),downHandler:l.default.createElement(v.default,{type:"minus",size:"xxs"})},o,{ref:function(t){return n.stepperRef=t},className:p}))}}]),t}(l.default.Component);t.default=g,g.defaultProps={prefixCls:"am-stepper",step:1,readOnly:!1,showNumber:!1,focusOnUpDown:!1},n.exports=t.default},946:function(n,t,a){"use strict";function s(){}function e(n){n.preventDefault()}Object.defineProperty(t,"__esModule",{value:!0});var o=a(55),p=a.n(o),u=a(4),c=a.n(u),i=a(5),r=a.n(i),l=a(12),f=a.n(l),k=a(9),d=a.n(k),m=a(10),h=a.n(m),v=a(0),b=a(6),g=a.n(b),y=a(947),w=a(948),x=function(n){function t(){r()(this,t);var n=d()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return n.setInput=function(t){n.input=t},n}return h()(t,n),f()(t,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentWillUpdate",value:function(){try{this.start=this.input.selectionStart,this.end=this.input.selectionEnd}catch(n){}}},{key:"componentDidUpdate",value:function(){if(this.props.focusOnUpDown&&this.state.focused){var n=this.input.setSelectionRange;n&&"function"==typeof n&&void 0!==this.start&&void 0!==this.end&&this.start!==this.end?this.input.setSelectionRange(this.start,this.end):this.focus()}}},{key:"getRatio",value:function(n){var t=1;return n.metaKey||n.ctrlKey?t=.1:n.shiftKey&&(t=10),t}},{key:"getValueFromEvent",value:function(n){return n.target.value}},{key:"focus",value:function(){this.input.focus()}},{key:"formatWrapper",value:function(n){return this.props.formatter?this.props.formatter(n):n}},{key:"render",value:function(){var n,t=c()({},this.props),a=t.prefixCls,o=void 0===a?"":a,u=t.disabled,i=t.readOnly,r=t.max,l=t.min,f=g()((n={},p()(n,o,!0),p()(n,t.className,!!t.className),p()(n,o+"-disabled",u),p()(n,o+"-focused",this.state.focused),n)),k="",d="",m=this.state.value;if(m||0===m)if(isNaN(m))k=o+"-handler-up-disabled",d=o+"-handler-down-disabled";else{var h=Number(m);h>=r&&(k=o+"-handler-up-disabled"),h<=l&&(d=o+"-handler-down-disabled")}var b=!t.readOnly&&!t.disabled,y=void 0;void 0!==(y=this.state.focused?this.state.inputValue:this.toPrecisionAsStep(this.state.value))&&null!==y||(y="");var x=void 0,N=void 0;x={onTouchStart:b&&!k?this.up:s,onTouchEnd:this.stop},N={onTouchStart:b&&!d?this.down:s,onTouchEnd:this.stop};var O=this.formatWrapper(y),C=!!k||u||i,S=!!d||u||i;return v.default.createElement("div",{className:f,style:t.style},v.default.createElement("div",{className:o+"-handler-wrap"},v.default.createElement(w.a,c()({disabled:C,prefixCls:o,unselectable:"unselectable"},x,{role:"button","aria-label":"Increase Value","aria-disabled":!!C,className:o+"-handler "+o+"-handler-up "+k}),this.props.upHandler||v.default.createElement("span",{unselectable:"unselectable",className:o+"-handler-up-inner",onClick:e})),v.default.createElement(w.a,c()({disabled:S,prefixCls:o,unselectable:"unselectable"},N,{role:"button","aria-label":"Decrease Value","aria-disabled":!!S,className:o+"-handler "+o+"-handler-down "+d}),this.props.downHandler||v.default.createElement("span",{unselectable:"unselectable",className:o+"-handler-down-inner",onClick:e}))),v.default.createElement("div",{className:o+"-input-wrap",role:"spinbutton","aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":m},v.default.createElement("input",{className:o+"-input",tabIndex:t.tabIndex,autoComplete:"off",onFocus:this.onFocus,onBlur:this.onBlur,autoFocus:t.autoFocus,readOnly:t.readOnly,disabled:t.disabled,max:t.max,min:t.min,step:t.step,onChange:this.onChange,ref:this.setInput,value:O})))}}]),t}(y.a);t.default=x,x.defaultProps=c()({},y.a.defaultProps,{focusOnUpDown:!1,useTouch:!1,prefixCls:"rmc-input-number"})},947:function(n,t,a){"use strict";function s(){}function e(n){return n.replace(/[^\w\.-]+/g,"")}var o=a(5),p=a.n(o),u=a(12),c=a.n(u),i=a(9),r=a.n(i),l=a(10),f=a.n(l),k=a(0),d=200,m=600,h=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1,v=function(n){function t(n){p()(this,t);var a=r()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));a.onChange=function(n){var t=a.props,s=t.parser,e=t.onChange,o=s&&s(a.getValueFromEvent(n).trim());a.setState({inputValue:o}),e&&e(a.toNumberWhenUserInput(o))},a.onFocus=function(){a.setState({focused:!0});var n=a.props.onFocus;n&&n.apply(void 0,arguments)},a.onBlur=function(n){for(var t=arguments.length,s=Array(t>1?t-1:0),e=1;e<t;e++)s[e-1]=arguments[e];a.setState({focused:!1});var o=a.getCurrentValidValue(a.state.inputValue);n.persist(),a.setValue(o,function(){var t=a.props.onBlur;t&&t.apply(void 0,[n].concat(s))})},a.getCurrentValidValue=function(n){var t=n;return t=""===t?"":a.isNotCompleteNumber(t)?a.state.value:a.getValidValue(t),a.toNumber(t)},a.getValidValue=function(n){var t=parseFloat(n);return isNaN(t)?n:(t<a.props.min&&(t=a.props.min),t>a.props.max&&(t=a.props.max),t)},a.setValue=function(n,t){var s=a.isNotCompleteNumber(parseFloat(n))?void 0:parseFloat(n),e=s!==a.state.value||""+s!=""+a.state.inputValue;if("value"in a.props?a.setState({inputValue:a.toPrecisionAsStep(a.state.value)},t):a.setState({value:s,inputValue:a.toPrecisionAsStep(n)},t),e){var o=a.props.onChange;o&&o(s)}},a.getPrecision=function(n){if("precision"in a.props)return a.props.precision;var t=n.toString();if(t.indexOf("e-")>=0)return parseInt(t.slice(t.indexOf("e-")+2),10);var s=0;return t.indexOf(".")>=0&&(s=t.length-t.indexOf(".")-1),s},a.getMaxPrecision=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if("precision"in a.props)return a.props.precision;var s=a.props.step,e=a.getPrecision(t),o=a.getPrecision(s),p=a.getPrecision(n);return n?Math.max(p,e+o):e+o},a.getPrecisionFactor=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=a.getMaxPrecision(n,t);return Math.pow(10,s)},a.toPrecisionAsStep=function(n){if(a.isNotCompleteNumber(n)||""===n)return n;var t=Math.abs(a.getMaxPrecision(n));return isNaN(t)?n.toString():Number(n).toFixed(t)},a.isNotCompleteNumber=function(n){return isNaN(n)||""===n||null===n||n&&n.toString().indexOf(".")===n.toString().length-1},a.toNumber=function(n){return a.isNotCompleteNumber(n)?n:"precision"in a.props?Number(Number(n).toFixed(a.props.precision)):Number(n)},a.toNumberWhenUserInput=function(n){return(/\.\d*0$/.test(n)||n.length>16)&&a.state.focused?n:a.toNumber(n)},a.stepCompute=function(n,t,s){var e=a.props,o=e.step,p=e.min,u=a.getPrecisionFactor(t,s),c=Math.abs(a.getMaxPrecision(t,s)),i=void 0,r="up"===n?1:-1;return i="number"==typeof t?((u*t+r*u*+o*s)/u).toFixed(c):p===-1/0?r*+o:p,a.toNumber(i)},a.step=function(n,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t&&t.preventDefault();var e=a.props;if(!e.disabled){var o=a.getCurrentValidValue(a.state.inputValue)||0;if(!a.isNotCompleteNumber(o)){var p=a.stepCompute(n,o,s);p>e.max?p=e.max:p<e.min&&(p=e.min),a.setValue(p),a.setState({focused:!0})}}},a.stop=function(){a.autoStepTimer&&clearTimeout(a.autoStepTimer)},a.action=function(n,t,s,e){t.persist&&t.persist(),a.stop(),a.step(n,t,s),a.autoStepTimer=setTimeout(function(){a.action(n,t,s,!0)},e?d:m)},a.down=function(n,t,s){a.action("down",n,t,s)},a.up=function(n,t,s){a.action("up",n,t,s)};var s=void 0;return s="value"in n?n.value:n.defaultValue,s=a.toNumber(s),a.state={inputValue:a.toPrecisionAsStep(s),value:s,focused:n.autoFocus},a}return f()(t,n),c()(t,[{key:"componentWillReceiveProps",value:function(n){if("value"in n){var t=this.state.focused?n.value:this.getValidValue(n.value);this.setState({value:t,inputValue:t})}}},{key:"componentWillUnmount",value:function(){this.stop()}}]),t}(k.default.Component);t.a=v,v.defaultProps={max:h,min:-h,step:1,style:{},onChange:s,onFocus:s,onBlur:s,parser:e}},948:function(n,t,a){"use strict";var s=a(5),e=a.n(s),o=a(12),p=a.n(o),u=a(9),c=a.n(u),i=a(10),r=a.n(i),l=a(0),f=a(135),k=this&&this.__rest||function(n,t){var a={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(a[s]=n[s]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,s=Object.getOwnPropertySymbols(n);e<s.length;e++)t.indexOf(s[e])<0&&(a[s[e]]=n[s[e]]);return a},d=function(n){function t(){return e()(this,t),c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r()(t,n),p()(t,[{key:"render",value:function(){var n=this.props,t=n.prefixCls,a=n.disabled,s=n.onTouchStart,e=n.onTouchEnd,o=k(n,["prefixCls","disabled","onTouchStart","onTouchEnd"]);return l.default.createElement(f.default,{disabled:a,onTouchStart:s,onTouchEnd:e,activeClassName:t+"-handler-active"},l.default.createElement("span",o))}}]),t}(l.Component);t.a=d}});