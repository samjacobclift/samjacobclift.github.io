(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{129:function(e,t,n){"use strict";n.r(t);n(153);var a=n(0),r=n.n(a),i=n(134),o=n(139),c=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement(i.Link,{to:e.link},e.linkName))};t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.Link,{to:"/"},"BACK"),r.a.createElement("h1",null,"Open Source Projects I've worked on"),r.a.createElement(c,{title:"Grumpy bot",description:"A react native app that uses compromise and sentiment to turn a positive sentence in a negative one",link:"https://github.com/samjacobclift/grumpyBot",linkName:"Grumpy bot"}),r.a.createElement(c,{title:"Mobx",description:"Simple, scalable state management",link:"https://github.com/mobxjs/mobx",linkName:"Mobx"}),r.a.createElement(c,{title:"Yarn",description:"Fast, reliable, and secure dependency management",link:"https://github.com/yarnpkg/yarn",linkName:"Yarn"}),r.a.createElement(c,{title:"Angular Sortable",description:"Maintain the open source library that provides bindings between AngularJS and SortableJS",link:"https://github.com/SortableJS/angular-legacy-sortablejs",linkName:"Angular Sortable"}),r.a.createElement(c,{title:"Octobox",description:"Take back control of your GitHub Notifications",link:"https://octobox.io",linkName:"Octobox"}))}},134:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(133),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(135),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(28);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},135:function(e,t,n){var a;e.exports=(a=n(137))&&a.default||a},136:function(e){e.exports={data:{site:{siteMetadata:{title:"When Code Goes Wrong"}}}}},137:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(46),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},138:function(e,t,n){},139:function(e,t,n){"use strict";var a=n(136),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(140),u=n.n(l),s=n(134),d=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rgb(0, 0, 255)",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},m=(n(138),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sams Blog"},{name:"keywords",content:"Blog, JS, CSS, Programming"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});m.propTypes={children:c.a.node.isRequired};t.a=m},153:function(e,t,n){"use strict";n(154)("link",function(e){return function(t){return e(this,"a","href",t)}})},154:function(e,t,n){var a=n(23),r=n(21),i=n(22),o=/"/g,c=function(e,t,n,a){var r=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}}}]);
//# sourceMappingURL=component---src-pages-open-source-js-4d430ee61c248ec7b4a2.js.map