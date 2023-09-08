(window.wjp=window.wjp||[]).push([[33],{6060:function(e,t,i){"use strict";i.r(t);var n=i(2),s=i(846),a=i(200),r=i.n(a),c=i(105),l=i.n(c),h=i(4),d=i(8),o=i.n(d),u=i(1),j=i(29),g=i(18),m=(i(6487),i(0));const p=new o.a("header-search-action"),x={query:"",hasUserTyped:!1,items:[],highlightedIndex:null,searchTypes:[{index:0,name:"publication",label:"research"},{index:2,name:"researcher",label:"people"},{index:1,name:"journal",label:"journals"}],wasPropsQuerySavedOnState:!1,isLoading:!1};class b extends h.Component{constructor(...e){super(...e),this.state=x,this.inputValueChange=e=>{const{url:t,viewId:i,onValueChange:n}=this.props;n&&n(e);const s={query:e,viewId:i};this.state.isLoading&&this.fetchRequest.cancel(),this.fetchRequest=Object(j.e)(Object(g.default)(t,{query:s})),this.setState({query:e,isLoading:!0}),this.fetchRequest.promise.then(e=>{this.setState({isLoading:!1}),e.success&&this.setState({items:e.result})}).catch(({isCanceled:e})=>{e||this.setState({items:[],isLoading:!1,highlightedIndex:null})})},this.handleInputValueChange=l()(this.inputValueChange,200)}static getDerivedStateFromProps(e,t){var i;return null!==(i=e.initialQueryRef)&&void 0!==i&&i.current&&!t.wasPropsQuerySavedOnState?Object(n.a)(Object(n.a)({},t),{},{query:e.initialQueryRef.current,wasPropsQuerySavedOnState:!0}):t}getCurrentlySelectedOnEnter(){const{items:e,highlightedIndex:t,query:i,searchTypes:n}=this.state,{formUrl:s,viewId:a}=this.props;if(null!==t&&e.length>t)return e[t];const r=n.find(e=>e.index===t);return{url:`${s}?origin=ac&headerSearchViewId=${a}&query=${i}&type=${r?r.name:"publication"}`}}handleInputKeyDown(e){if("Enter"===e.key&&e.target.value){e.persist(),e.stopPropagation(),e.preventDefault();const t=this.getCurrentlySelectedOnEnter();t&&t.url?window.location.href=t.url:Promise.resolve().then(()=>{e.target.form.submit()})}}showResults(e,t){return!(!e||!t||0===t.length)}componentDidMount(){const{query:e}=this.state;e!==x.query&&this.inputValueChange(e)}componentDidUpdate(e,t){if(this.state.items.length!==t.items.length){const e=0===this.state.items.length?0:this.state.items.length,t=[{index:e,name:"publication",label:"research"},{index:e+2,name:"researcher",label:"people"}];t.push({index:e+1,name:"journal",label:"journals"}),this.setState(e=>Object(n.a)(Object(n.a)({},e),{},{searchTypes:t}))}}render(){const{query:e,searchTypes:t,items:i}=this.state,{input:a,formUrl:c,viewId:l}=this.props;return Object(m.jsx)(s.default,{itemToString:t=>t?t.name:e,initialInputValue:e,initialIsOpen:!1,onInputValueChange:this.handleInputValueChange,onStateChange:({highlightedIndex:t,inputValue:i})=>{this.state.hasUserTyped?this.setState({highlightedIndex:t,query:i||e}):this.setState({highlightedIndex:t,query:i||e,hasUserTyped:!0})},children:({getInputProps:s,getItemProps:d,highlightedIndex:o,inputValue:j,isOpen:g})=>{const x=s({id:"header-search-action"}),b=x.onKeyDown;return x.onKeyDown=e=>{b(e),this.handleInputKeyDown(e)},Object(m.jsxs)("div",Object(n.a)(Object(n.a)({},p()),{},{children:[Object(h.cloneElement)(a,x),this.showResults(g,j)&&Object(m.jsx)("div",Object(n.a)(Object(n.a)({},p("results")),{},{children:Object(m.jsxs)("div",Object(n.a)(Object(n.a)({},p("list")),{},{children:[Object(m.jsx)(u.Stack,{showDivider:!0,spacing:"xs",children:Object(m.jsx)(u.Stack.Item,{children:Object(m.jsx)(u.Text,Object(n.a)(Object(n.a)({},p("head")),{},{children:"Search for"}),"heading")})}),Object(m.jsx)("span",Object(n.a)({},p("divider")),"divider"),Object(m.jsxs)(u.Stack,{showDivider:!0,spacing:"xs",gutterOutside:!0,children:[i.map((e,t)=>Object(m.jsx)(u.Stack.Item,{children:Object(m.jsx)("div",{onClick:()=>window.location.assign(e.url),children:Object(m.jsx)("a",Object(n.a)(Object(n.a)(Object(n.a)({},d({item:e})),p({element:"list-item",extra:t===o?"is-highlighted":""})),{},{children:Object(m.jsxs)(u.PersonListItem,{size:"s",children:[e.image?Object(m.jsx)(u.PersonListItem.Image,{alt:e.name,imageUrl:e.image}):null,Object(m.jsx)(u.PersonListItem.Fullname,{children:e.name}),e.institution?Object(m.jsx)(u.PersonListItem.MetaItems,{children:Object(m.jsx)(u.PersonListItem.MetaItem,{children:e.institution})}):null]})}))})},e.id)),t.sort((e,t)=>e.index-t.index).map(({index:t,name:i,label:s})=>Object(m.jsx)(u.Stack.Item,{onClick:()=>{const t=`${c}?origin=ac&headerSearchViewId=${l}&query=${e}&type=${i}`;return window.location.assign(t)},children:Object(m.jsx)("a",Object(n.a)(Object(n.a)(Object(n.a)({},d({item:i})),p({element:"list-item",extra:t===o?"is-highlighted":""})),{},{children:Object(m.jsxs)(u.Flex,{gutter:"xxs",alignItems:"flex-start",children:[Object(m.jsx)(u.Flex.Item,{children:Object(m.jsx)(u.Icon,{identifier:"magnifier"})}),Object(m.jsx)(u.Flex.Item,{children:Object(m.jsx)(u.Text,{children:Object(m.jsx)("strong",{children:j})})}),Object(m.jsx)(u.Flex.Item,{children:Object(m.jsx)(u.Text,{children:" in "})}),Object(m.jsx)(u.Flex.Item,{children:Object(m.jsx)(u.Text,{color:"grey-600",children:r()(s)})})]})}))},t))]})]}))}))]}))}})}}b.displayName="SearchAction",t.default=b},6487:function(e,t,i){}}]);