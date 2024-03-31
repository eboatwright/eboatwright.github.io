import{s as h,n as m,f as w,c as A,g as O,u as z,h as G,i as U,j as F}from"../chunks/scheduler.Chxswfdj.js";import{S as b,i as y,e as x,c as g,m as L,o as _,g as v,d as f,k,s as j,a as M,n as S,f as C,p as E,h as T,r as p,w as K,q as d,u as V,A as N,y as J}from"../chunks/index.BydcqO7J.js";import{p as Q}from"../chunks/stores.CcCKmRYI.js";const R=!0,W="always",it=Object.freeze(Object.defineProperty({__proto__:null,prerender:R,trailingSlash:W},Symbol.toStringTag,{value:"Module"}));function X(o){let t,n='<a href="/" title="Evan Boatwright" class="shrink-0"><div class="flex flex-row space-x-4 items-end"><p class="font-bookman text-1xl text-white">C: \\</p> <p class="max-md:text-2xl before:content-[&#39;Evan_Boatwright&#39;] max-md:before:content-[&#39;EB&#39;] max-lg:before:content-[&#39;Evan_B&#39;] font-bookman text-4xl text-white"></p></div></a> <div class="flex"><a href="/about"><div class="px-12 max-md:px-3 hover:bg-gray-700 group transition-colors duration-300"><p class="font-bookman text-lg max-md:text-xs max-lg:text-base text-white group-hover:underline" title="About">About</p></div></a> <a href="/projects"><div class="px-12 max-md:px-3 hover:bg-gray-700 group transition-colors duration-300"><p class="font-bookman text-lg max-md:text-xs max-lg:text-base text-white group-hover:underline" title="Projects">Projects</p></div></a> <a href="/contact"><div class="px-12 max-md:px-3 hover:bg-gray-700 group transition-colors duration-300"><p class="font-bookman text-lg max-md:text-xs max-lg:text-base text-white group-hover:underline" title="Contact">Contact</p></div></a></div> <a href="https://github.com/eboatwright" title="Github" target="_blank" class="shrink-0 hover:animate-pulse"><img src="/images/github.png" alt="Github" width="32" height="30" class="max-md:w-[24px]"/></a>';return{c(){t=x("div"),t.innerHTML=n,this.h()},l(a){t=g(a,"DIV",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-1yz2aej"&&(t.innerHTML=n),this.h()},h(){_(t,"class","flex justify-between items-center px-10 py-2 bg-gray-800 shadow-xl")},m(a,c){v(a,t,c)},p:m,i:m,o:m,d(a){a&&f(t)}}}class Y extends b{constructor(t){super(),y(this,t,null,X,h,{})}}function Z(o){let t,n='<p class="font-bookman text-gray-600 text-sm max-sm:text-xs">© 2024 Evan Boatwright</p> <p class="font-bookman text-gray-600 text-sm max-sm:text-xs">Powered by SvelteKit + TailwindCSS</p>';return{c(){t=x("div"),t.innerHTML=n,this.h()},l(a){t=g(a,"DIV",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-1jc0qwh"&&(t.innerHTML=n),this.h()},h(){_(t,"class","flex flex-col justify-between px-5 py-4 shadow-[rgba(0,0,0,0.25)_0px_0px_50px_-12px]")},m(a,c){v(a,t,c)},p:m,i:m,o:m,d(a){a&&f(t)}}}class tt extends b{constructor(t){super(),y(this,t,null,Z,h,{})}}function et(o){const t=o-1;return t*t*t+1}function at(o,{delay:t=0,duration:n=400,easing:a=et,x:c=0,y:s=0,opacity:e=0}={}){const l=getComputedStyle(o),i=+l.opacity,r=l.transform==="none"?"":l.transform,u=i*(1-e),[D,H]=w(c),[I,P]=w(s);return{delay:t,duration:n,easing:a,css:($,q)=>`
			transform: ${r} translate(${(1-$)*D}${H}, ${(1-$)*I}${P});
			opacity: ${i-u*q}`}}function B(o){let t,n,a;const c=o[2].default,s=O(c,o,o[1],null);return{c(){t=x("div"),s&&s.c(),this.h()},l(e){t=g(e,"DIV",{class:!0});var l=M(t);s&&s.l(l),l.forEach(f),this.h()},h(){_(t,"class","overflow-x-hidden")},m(e,l){v(e,t,l),s&&s.m(t,null),a=!0},p(e,l){s&&s.p&&(!a||l&2)&&z(s,c,e,e[1],a?U(c,e[1],l,null):G(e[1]),null)},i(e){a||(d(s,e),e&&(n||F(()=>{n=N(t,at,{delay:50,duration:450,y:40}),n.start()})),a=!0)},o(e){p(s,e),a=!1},d(e){e&&f(t),s&&s.d(e)}}}function st(o){let t,n,a,c=o[0].url.pathname,s,e,l;n=new Y({});let i=B(o);return e=new tt({}),{c(){t=x("div"),k(n.$$.fragment),a=j(),i.c(),s=j(),k(e.$$.fragment),this.h()},l(r){t=g(r,"DIV",{class:!0});var u=M(t);S(n.$$.fragment,u),a=C(u),i.l(u),s=C(u),S(e.$$.fragment,u),u.forEach(f),this.h()},h(){_(t,"class","flex flex-col justify-between h-full")},m(r,u){v(r,t,u),E(n,t,null),T(t,a),i.m(t,null),T(t,s),E(e,t,null),l=!0},p(r,[u]){u&1&&h(c,c=r[0].url.pathname)?(J(),p(i,1,1,m),K(),i=B(r),i.c(),d(i,1),i.m(t,s)):i.p(r,u)},i(r){l||(d(n.$$.fragment,r),d(i),d(e.$$.fragment,r),l=!0)},o(r){p(n.$$.fragment,r),p(i),p(e.$$.fragment,r),l=!1},d(r){r&&f(t),V(n),i.d(r),V(e)}}}function nt(o,t,n){let a;A(o,Q,e=>n(0,a=e));let{$$slots:c={},$$scope:s}=t;return o.$$set=e=>{"$$scope"in e&&n(1,s=e.$$scope)},[a,s,c]}class ct extends b{constructor(t){super(),y(this,t,nt,st,h,{})}}export{ct as component,it as universal};