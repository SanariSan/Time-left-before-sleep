(this.webpackJsonptime_left=this.webpackJsonptime_left||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),a=n.n(s),i=n(10),c=n.n(i),o=(n(20),n(21),n(7)),m=n(2),u=n.n(m),p=n(5),d=n(11),l=n(12),j=n(14),h=n(13),b=n(8),g=n.n(b),x=(n(27),n(9)),f=function(e){var t,n=Object(s.useState)(),a=Object(x.a)(n,2),i=a[0],c=a[1],o=Object(s.useState)({height:window.innerHeight,width:window.innerWidth}),m=Object(x.a)(o,2),u=(m[0],m[1]);Object(s.useEffect)((function(){var e=document.getElementsByClassName("bar")[0];function t(){u({height:window.innerHeight,width:window.innerWidth})}return c(e.getBoundingClientRect().width),window.addEventListener("resize",t),function(e){window.removeEventListener("resize",t)}}));var p=(t=e.progressTimeMax&&e.progressTimeCurrent&&e.progressTimeCurrent<e.progressTimeMax?new Date(e.progressTimeMax-e.progressTimeCurrent):new Date(Date.UTC(0,0,0,0,0,0,0))).getUTCHours(),d=t.getUTCMinutes(),l=t.getUTCSeconds(),j=t.getUTCMilliseconds();return Object(r.jsxs)("div",{className:"dateDisplay",children:[Object(r.jsxs)("div",{className:"time",children:[Object(r.jsx)("p",{children:p<10?"0"+p:p}),":",Object(r.jsx)("p",{children:d<10?"0"+d:d}),":",Object(r.jsx)("p",{children:l<10?"0"+l:l}),":",Object(r.jsx)("p",{children:j<10?"00"+j:j<100?"0"+j:1e3===j?999:j})]}),Object(r.jsxs)("span",{className:"bar",children:[Object(r.jsx)("p",{className:"bar-outer",style:{width:i+"px"}}),Object(r.jsx)("p",{className:"bar-inner",style:{width:function(){if(0!==e.progressTimeMax){var t=e.progressTimeMax-e.timestampStart,n=(t-(e.progressTimeMax-e.progressTimeCurrent))/t*100;return Math.round(i/100*n)}return 0}()+"px"}})]})]})},w=(n(28),n(29),function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).initState={timestampStart:Date.now(),timestampEnd:Date.now(),realTimeStart:0,progressTimeCurrent:0,progressTimeMax:0,working:!1,ended:!1,timePreview:!1},e.state=e.initState,e._increasement=Object(p.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Date.now()-e.state.realTimeStart,e.state.timestampStart+n>=e.state.progressTimeMax&&(n=e.state.timestampEnd-e.state.timestampStart),t.next=4,e.setState({progressTimeCurrent:e.state.timestampStart+n});case 4:if(!(e.state.progressTimeCurrent<e.state.progressTimeMax)){t.next=8;break}setTimeout(e._increasement,1),t.next=10;break;case 8:return t.next=10,e.setState({working:!1,ended:!0,timePreview:!1});case 10:case"end":return t.stop()}}),t)}))),e.startIncreasement=Object(p.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.state.working||!(e.state.timestampStart<e.state.timestampEnd)){t.next=4;break}return t.next=3,e.setState({progressTimeCurrent:e.state.timestampStart,progressTimeMax:e.state.timestampEnd,realTimeStart:Date.now(),working:!0,ended:!1});case 3:setTimeout(e._increasement,1);case 4:case"end":return t.stop()}}),t)}))),e.changeDate=function(){var t=Object(p.a)(u.a.mark((function t(n,r){var s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState((s={},Object(o.a)(s,n,new Date(r).getTime()),Object(o.a)(s,"timePreview",!0),s));case 2:e.setState({progressTimeCurrent:e.state.timestampStart,progressTimeMax:e.state.timestampEnd});case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"dateController",children:[Object(r.jsxs)("div",{className:"pickerBlock",children:[Object(r.jsx)("p",{children:"From"}),Object(r.jsx)(g.a,{"data-enable-time":!0,value:this.state.timestampStart,options:{minuteIncrement:1,enableSeconds:!0},onChange:function(t){return e.changeDate("timestampStart",t)}}),Object(r.jsx)("button",{onClick:function(){return e.changeDate("timestampStart",new Date)},children:"Current time"})]}),Object(r.jsxs)("div",{className:"pickerBlock",children:[Object(r.jsx)("p",{children:"To"}),Object(r.jsx)(g.a,{"data-enable-time":!0,value:this.state.timestampEnd,options:{minuteIncrement:1,enableSeconds:!0},onChange:function(t){return e.changeDate("timestampEnd",t)}}),Object(r.jsx)("button",{onClick:function(){return e.changeDate("timestampEnd",new Date)},children:"Current time"})]}),this.state.working||this.state.timePreview?Object(r.jsx)(f,{timestampStart:this.state.timestampStart,progressTimeCurrent:this.state.progressTimeCurrent,progressTimeMax:this.state.progressTimeMax}):Object(r.jsx)("p",{className:"no-active-bar",children:"Set time and press RUN"}),this.state.ended?Object(r.jsx)("p",{className:"timer-finished",children:"Last timer finished successfully"}):null,Object(r.jsxs)("span",{className:"buttonsWrap",children:[Object(r.jsx)("button",{onClick:this.startIncreasement,children:"Run"}),Object(r.jsx)("button",{onClick:function(){return e.setState(e.initState)},children:"Reset"})]})]})}}]),n}(a.a.Component));var O=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Timer"}),Object(r.jsx)(w,{})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),a(e),i(e)}))};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),T()}},[[31,1,2]]]);
//# sourceMappingURL=main.bc55f9e2.chunk.js.map