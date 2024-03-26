import{a as Z}from"./chunk-DHNXJEZ4.js";import{e as q,i as H,k as w,l as J,m as K,y as X}from"./chunk-WDYG26PG.js";import{$ as L,$a as V,Ca as s,G as E,Ia as d,Ib as G,Ja as U,Jb as W,Ka as g,L as T,La as m,Ma as p,Na as v,Oa as P,Pa as M,Q as c,Ra as j,Rb as Q,S as x,Sb as F,Ta as $,Ua as O,Ub as Y,W as b,Ya as h,Z as A,Za as S,_ as D,ab as B,db as y,eb as N,oa as R,ob as z,r as k,z as I}from"./chunk-LC2BMWWT.js";import{d as a,e as f,f as u}from"./chunk-HPEDZGUO.js";var _=(()=>{var e,n,o;let t=class extends Y{constructor(){super(...arguments);f(this,e,void 0);f(this,n,void 0);f(this,o,void 0);u(this,e,c(X)),u(this,n,c(w)),u(this,o,c(q)),this.getProfile=this.effect(E(r=>a(this,e).getProfile(r).pipe(F(l=>{a(this,o).setTitle(`${l.profile.username} - Conduit`),this.patchState({profile:l.profile})},l=>{console.error("Get Profile Failed",l),a(this,n).navigate(["/"])})))),this.toggleFollow=this.effect(I(r=>k(()=>r.following?a(this,e).unfollowUser(r.username):a(this,e).followUser(r.username)).pipe(F(l=>{this.patchState({profile:l.profile})},l=>{console.error("Toggle Follow User Failed",l)}))))}ngrxOnStoreInit(){this.setState({profile:null})}},i=t;return e=new WeakMap,n=new WeakMap,o=new WeakMap,(()=>{t.\u0275fac=function(){let r;return function(ie){return(r||(r=L(t)))(ie||t)}}()})(),(()=>{t.\u0275prov=T({token:t,factory:t.\u0275fac})})(),i})();var oe=function(){return{exact:!0}};function re(i,e){if(i&1&&(P(0),m(1,"li",3)(2,"span",4),h(3),p()(),M()),i&2){let n=e.$implicit;s(2),g("routerLink",n.link)("routerLinkActiveOptions",N(3,oe)),s(1),S(n.title)}}var te=(()=>{let e=class{constructor(){this.profile=c(_).selectors.profile,this.tabList=b(()=>[{link:`/@${this.profile().username}`,title:"My Articles"},{link:`/@${this.profile().username}/favorites`,title:"Favorited Articles"}])}},i=e;return(()=>{e.\u0275fac=function(t){return new(t||e)}})(),(()=>{e.\u0275cmp=x({type:e,selectors:[["app-article-toggle"]],standalone:!0,features:[y],decls:3,vars:1,consts:[[1,"toggle"],[1,"nav","nav-pills","outline-active"],[4,"ngFor","ngForOf"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLink","routerLinkActiveOptions"]],template:function(t,ne){t&1&&(m(0,"div",0)(1,"ul",1),d(2,re,4,4,"ng-container",2),p()()),t&2&&(s(2),g("ngForOf",ne.tabList()))},dependencies:[J,K,G],styles:[".toggle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{margin-left:.2rem}.toggle[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:#aaa;border-radius:0;cursor:pointer}.active[_ngcontent-%COMP%]{background:#fff!important;border-bottom:2px solid #5cb85c!important;color:#5cb85c!important}"],changeDetection:0})})(),i})();function ae(i,e){if(i&1){let n=j();m(0,"button",10),$("click",function(){A(n);let t=O(2);return D(t.toggleFollow())}),v(1,"i",11),h(2),p()}if(i&2){let n=O().ngIf;s(2),V(" ",n.following?"Unfollow":"Follow"," ",n.username," ")}}function le(i,e){i&1&&(m(0,"button",12),v(1,"i",13),h(2," Edit Profile Settings "),p())}function ce(i,e){if(i&1&&(P(0),m(1,"div",1)(2,"div",2)(3,"div",3),v(4,"img",4),m(5,"h4",5),h(6),p()(),d(7,ae,3,2,"button",6),d(8,le,3,0,"ng-template",null,7,z),p()(),m(10,"div",8)(11,"div",9),v(12,"app-article-toggle")(13,"router-outlet"),p()(),M()),i&2){let n=e.ngIf,o=U(9),t=O();s(4),g("src",n.image,R),s(2),S(n.username),s(1),g("ngIf",!t.isCurrentUser())("ngIfElse",o)}}var se=(()=>{var e,n,o;let t=class{constructor(){f(this,e,void 0);f(this,n,void 0);f(this,o,void 0);u(this,e,c(_)),u(this,n,c(Z)),u(this,o,c(w)),this.profile=a(this,e).selectors.profile,this.isCurrentUser=b(()=>a(this,n).selectors.user()?.username===this.profile()?.username)}set username(C){a(this,e).getProfile(C)}toggleFollow(){if(!a(this,n).selectors.isAuthenticated()){a(this,o).navigate(["/register"]);return}a(this,e).toggleFollow(this.profile())}},i=t;return e=new WeakMap,n=new WeakMap,o=new WeakMap,(()=>{t.\u0275fac=function(r){return new(r||t)}})(),(()=>{t.\u0275cmp=x({type:t,selectors:[["app-profile"]],inputs:{username:"username"},standalone:!0,features:[B([Q(_)]),y],decls:1,vars:1,consts:[[4,"ngIf"],[1,"banner"],[1,"container"],[1,"user-info"],["alt","avatar",1,"avatar",3,"src"],[1,"username"],["class","btn btn-outline-secondary btn-sm ms-auto d-flex align-items-center",3,"click",4,"ngIf","ngIfElse"],["editProfileBtn",""],[1,"content"],[1,"offset-md-1"],[1,"btn","btn-outline-secondary","btn-sm","ms-auto","d-flex","align-items-center",3,"click"],[1,"fa-solid","fa-plus","me-1"],["routerLink","/settings",1,"btn","btn-outline-secondary","btn-sm","ms-auto","d-flex","align-items-center"],[1,"fa-solid","fa-gear","me-1"]],template:function(r,l){r&1&&d(0,ce,14,4,"ng-container",0),r&2&&g("ngIf",l.profile())},dependencies:[W,H,te],styles:[".banner[_ngcontent-%COMP%]{background-color:var(--white-gray-color);color:var(--blue-black-color);padding:2rem;position:absolute;width:100%;left:0;top:58px}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{max-width:1176px}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]{text-align:center}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]{font-weight:700}.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{border-radius:50%;width:100px;height:100px;margin-bottom:16px}.content[_ngcontent-%COMP%]{position:relative;margin-top:263px;max-width:1140px}"],changeDetection:0})})(),i})(),Ue=se;export{Ue as default};
