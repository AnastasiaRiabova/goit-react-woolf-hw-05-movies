"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[408],{2070:function(n,r,t){t.d(r,{Z:function(){return c}});var e,a=t(168),i=(0,t(7924).ZP)("div")(e||(e=(0,a.Z)(["\n  width: 100%;\n\n  padding-left: 20px;\n  padding-right: 20px;\n  margin: 0 auto;\n\n  @media screen and (min-width: 375px) {\n    width: 375px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 1440px;\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n"]))),u=t(184),c=function(n){var r=n.children;return(0,u.jsx)(i,{children:r})}},7838:function(n,r,t){t.d(r,{Z:function(){return p}});var e,a,i=t(168),u=t(7924),c=(0,u.ZP)("div")(e||(e=(0,i.Z)(["\n  padding: 20px;\n"]))),o=(0,u.ZP)("p")(a||(a=(0,i.Z)(["\n  color: red;\n  font-size: 20px;\n"]))),s=t(2070),d=t(184),p=function(n){var r=n.message;return(0,d.jsx)(s.Z,{children:(0,d.jsx)(c,{children:(0,d.jsx)(o,{children:r})})})}},6272:function(n,r,t){t.d(r,{Z:function(){return u}});var e=t(4261),a=t(7838),i=t(184),u=function(n){var r=n.children,t=n.isLoading,u=n.error,c=void 0===u?null:u;return t?(0,i.jsx)(e.Z,{}):c?(0,i.jsx)(a.Z,{message:c}):(0,i.jsx)(i.Fragment,{children:r})}},408:function(n,r,t){t.r(r),t.d(r,{default:function(){return _}});var e,a,i,u,c,o=t(9439),s=t(7838),d=t(6272),p=t(2791),f=t(7689),h=t(4390),l=t(168),x=t(7924),v=(0,x.ZP)("div")(e||(e=(0,l.Z)([""]))),g=(0,x.ZP)("ul")(a||(a=(0,l.Z)([""]))),m=(0,x.ZP)("li")(i||(i=(0,l.Z)(["\n  margin-bottom: 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),Z=(0,x.ZP)("h4")(u||(u=(0,l.Z)(["\n  font-size: 16px;\n  margin-bottom: 5px;\n"]))),w=(0,x.ZP)("p")(c||(c=(0,l.Z)(["\n  line-height: 1.5;\n"]))),j=t(184),_=function(){var n=(0,p.useState)([]),r=(0,o.Z)(n,2),t=r[0],e=r[1],a=(0,p.useState)(!1),i=(0,o.Z)(a,2),u=i[0],c=i[1],l=(0,p.useState)(null),x=(0,o.Z)(l,2),_=x[0],b=x[1],k=(0,f.UO)().movieId;return(0,p.useEffect)((function(){c(!0),b(null),(0,h.Jh)(k).then((function(n){var r=n.results;e(r)})).catch((function(n){b(n.message)})).finally((function(){c(!1)}))}),[k]),(0,j.jsx)(d.Z,{error:_,isLoading:u,children:(0,j.jsx)(v,{children:t.length>0?(0,j.jsx)(g,{children:t.map((function(n){var r=n.id,t=n.author,e=n.content;return(0,j.jsxs)(m,{children:[(0,j.jsxs)(Z,{children:["Author: ",t]}),(0,j.jsx)(w,{children:e})]},r)}))}):(0,j.jsx)(s.Z,{message:"Here are no reviews yet"})})})}},4390:function(n,r,t){t.d(r,{Aj:function(){return s},IQ:function(){return f},Jh:function(){return h},Pg:function(){return p},Zh:function(){return d}});var e=t(5861),a=t(7757),i=t.n(a),u=t(5294),c=t(3524),o=u.Z.create({baseURL:c._n,headers:{Authorization:"Bearer ".concat(c.LA)},params:{language:"en-US"}}),s=function(){var n=(0,e.Z)(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/trending/movie/day");case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/search/movie",{params:{include_adult:!1,query:r,page:1}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(r));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(r,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(r,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=408.70c02845.chunk.js.map