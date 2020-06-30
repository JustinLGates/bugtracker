(function(t){function e(e){for(var a,r,n=e[0],l=e[1],c=e[2],d=0,p=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,n=1;n<s.length;n++){var l=s[n];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"02b1":function(t,e,s){"use strict";var a=s("a6e1"),i=s.n(a);i.a},"2e4c":function(t,e,s){"use strict";var a=s("e077"),i=s.n(a);i.a},"452c":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navbar"),t.isShowingBugForm?s("BugReport"):t._e(),s("router-view")],1)},o=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-dark vh100 p-absolute"},[s("div",{staticClass:"row bg-secondary fixed-top mt-5"},[s("div",{staticClass:"col-11 col-md-8 col-lg-6 d-flex align-items-center vh-100 m-auto"},[s("div",{staticClass:"w-100"},[s("form",{staticClass:"bg-dark rounded",on:{submit:t.createNewBugReport}},[s("div",{staticClass:"bg-warning p-2 rounded-top d-flex justify-content-between"},[s("h2",{staticClass:"text-dark p-2 m-0"},[t._v("Bug Report")]),s("h2",{staticClass:"p-2 text-dark"},[s("i",{staticClass:"fas fa-times action",on:{click:t.closeReport}})])]),t._m(0),s("div",{staticClass:"m-3 p-2"},[s("h4",{staticClass:"text-warning p-1",attrs:{for:""}},[t._v("Title:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.bugFormData.title,expression:"bugFormData.title"}],staticClass:"w-100",attrs:{type:"text",placeholder:"Title..."},domProps:{value:t.bugFormData.title},on:{input:function(e){e.target.composing||t.$set(t.bugFormData,"title",e.target.value)}}})]),s("div",{staticClass:"mt-3 p-2 mx-3 text-warning p-1"},[s("h4",{staticClass:"p-1"},[t._v("Descripiton:")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bugFormData.description,expression:"bugFormData.description"}],staticClass:"w-100",attrs:{id:"w3review",name:"w3review",rows:"4",placeholder:"description of the bug..."},domProps:{value:t.bugFormData.description},on:{input:function(e){e.target.composing||t.$set(t.bugFormData,"description",e.target.value)}}})]),s("div",{staticClass:"d-flex justify-content-around p-3"},[s("button",{staticClass:"btn btn-outline-success"},[t._v("Submit")]),s("button",{staticClass:"btn btn-outline-danger",on:{click:t.closeReport}},[t._v("Cancel")])])])])])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row d-flex justify-content-end"},[s("div",{staticClass:"col-lg-5 col-md-7 col-10"},[s("h4",{staticClass:"text-right text-secondary p-1 pr-2"},[s("small",[t._v("Reported by")]),s("br"),t._v("Justin gates ")]),s("hr",{staticClass:"p-0 m-1 bg-warning"})])])}],l={data(){return{bugFormData:{}}},computed:{profile(){return this.$store.state.profile}},methods:{createNewBugReport(){let t={title:this.bugFormData.title,description:this.bugFormData.description,creatorEmail:this.$auth.user.email};this.$store.dispatch("createNewBugReport",t)},closeReport(){this.$store.dispatch("toggleBugForm")}}},c=l,u=(s("2e4c"),s("2877")),d=Object(u["a"])(c,r,n,!1,null,null,null),p=d.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid p-5"},[s("div",{staticClass:"row fixed-top"},[s("div",{staticClass:"col-12 p-0 m-0"},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[s("h1",{staticClass:"text-warning pl-2"},[s("i",{staticClass:"fas fa-bug"}),t._v(" Tracker ")])]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}}),t.$auth.isAuthenticated?s("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Reported Bugs")])],1):t._e()]),s("span",[s("button",{staticClass:"btn btn-dark text-light mr-3",on:{click:t.toggleBugForm}},[t._v("Report Bug")])]),s("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?s("button",{staticClass:"btn btn-danger text-light",on:{click:t.logout}},[t._v("logout")]):s("button",{staticClass:"btn btn-success text-light",on:{click:t.login}},[t._v("Login")])])])],1)])])])},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],h=s("bc3a"),b=s.n(h),v=s("335d"),f={name:"Navbar",methods:{toggleBugForm(){this.$store.dispatch("toggleBugForm")},async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user),this.$store.dispatch("getProfile")},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},C=f,w=Object(u["a"])(C,g,m,!1,null,null,null),_=w.exports,B={name:"App",async beforeCreate(){await Object(v["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{BugReport:p,Navbar:_},computed:{isShowingBugForm(){return this.$store.state.isShowingBugForm}}},x=B,y=(s("5c0b"),s("b0a0"),Object(u["a"])(x,i,o,!1,null,null,null)),$=y.exports,D=s("8c4f"),k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("loginJumbotron")],1)},F=[],N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg-8 m-auto pt-5"},[s("div",{staticClass:"jumbotron bg-light text-primary shadow"},[s("h1",{staticClass:"display-5"},[t._v("Is something bugging you.")]),s("p",{staticClass:"lead pt-2"},[t._v("Tracking bugs is an important task. We can help with that.")])]),s("div",{staticClass:"p-rel d-flex justify-content-center"})])])}],E={},S=E,O=(s("75cb"),Object(u["a"])(S,N,j,!1,null,null,null)),P=O.exports,R={name:"home",components:{loginJumbotron:P}},I=R,T=Object(u["a"])(I,k,F,!1,null,null,null),A=T.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("BugList")],1)},L=[],M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row p-1"},[s("div",{staticClass:"col-12 col-lg-10 col-md-11 text-dark bg-light rounded p-4 py-1 m-0 m-auto"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 d-flex justify-content-between align-items-center p-0"},[t._m(0),s("div",{staticClass:"py-2 pt-5 p-2"},[s("p",{staticClass:"d-inline p-1"},[t._v("Hide closed")]),s("form",{on:{change:function(e){return e.preventDefault(),t.setShowClosedBugs(e)}}},[s("input",{staticClass:"d-inline",attrs:{type:"checkbox",name:"box",id:"box"}})])])])]),s("div",{staticClass:"row bg-warning text-dark rounded-top"},[t._m(1),s("div",{staticClass:"col-3 d-flex-center p-1"},[s("h6",{staticClass:"d-inline p-1 m-0"},[s("b",[t._v(" Status "),s("i",{staticClass:"fas fa-sort action",on:{click:t.sortByStatus}})])])]),s("div",{staticClass:"col-3 d-flex-center p-1"},[s("h6",{staticClass:"d-inline p-1 m-0"},[s("b",[t._v(" Date "),s("i",{staticClass:"fas fa-sort action",on:{click:t.sortBydate}})])])])]),t._l(t.bugs,(function(t){return s("Bug",{key:t.id,attrs:{bug:t}})})),t._m(2),s("br")],2)])},H=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"py-2"},[s("h2",{staticClass:"text-dark p-2"},[t._v("Reported Bugs")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6 p-1"},[s("h6",{staticClass:"text-center p-1 m-0"},[s("b",[t._v("Title")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row rounded-bottom text-light bg-dark p-1"},[s("div",{staticClass:"col-12 text-center p-0 m-0"},[s("h6",{staticClass:"p-1 m-0"},[s("b",[s("em",[t._v("Thats all of the bugs right now")])])])])])}],U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return this.hideClosed(t.bug.status)?s("div",[s("div",{staticClass:"row action bg-dark text-light text-center d-flex justify-content-center",on:{click:function(e){return t.routeToBugDetails(t.bug.id)}}},[s("div",{staticClass:"col-6 p-0"},[s("p",{staticClass:"p-1 m-0 br"},[t._v(t._s(t.bug.title))])]),s("div",{staticClass:"col-3 p-0 d-flex-center"},[t.bug.status?s("div",[s("i",{staticClass:"fas fa-circle bug-closed p-1",attrs:{title:"closed"}}),s("p",{staticClass:"d-inline p-1 m-0"},[t._v("Closed")])]):s("div",[s("i",{staticClass:"fas fa-circle bug-open p-1",attrs:{title:"open"}}),s("p",{staticClass:"d-inline p-1 m-0"},[t._v("Open")])])]),s("div",{staticClass:"col-3 p-0 m-0 d-flex-center bl"},[s("p",{staticClass:"m-0"},[t._v(t._s(this.bugDate))])]),t._m(0)])]):t._e()},z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 p-0"},[s("hr",{staticClass:"bg-warning m-0 w-100"})])}],W={mounted(){this.formatDate()},data(){return{bugDate:""}},props:["bug"],computed:{showClosedBugs(){return this.$store.state.showClosedBugs}},methods:{routeToBugDetails(){this.$router.push({path:`/bugDetails/${this.bug.id}`})},formatDate(){let t=this.bug.createdAt,e="",s="",a="";for(let i=0;i<10;i++)i<2?e+=t[i]:i>4&&i<7?s+=t[i]:i>7&&(a+=t[i]);this.bugDate=s+"/"+a+"/"+e},hideClosed(t){return!this.showClosedBugs||!t}}},q=W,G=(s("02b1"),Object(u["a"])(q,U,z,!1,null,"65a592c4",null)),K=G.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row p-1 pt-3"},[s("div",{staticClass:"col-12 d-flex justify-content-between bg-light p-0 rounded-top"},[s("div",{staticClass:"p-1 pt-3 m-2"},[s("p",{staticClass:"text-dark p-0 m-0"},[t._v("Title:")]),s("h2",{staticClass:"text-dark p-0 m-0"},[t._v(t._s(this.bugDetails.title))])])]),s("div",{staticClass:"col-12 p-0 p-absolute m-0 p-0 d-flex justify-content-end glass"},[this.bugDetails.status?s("div",{staticClass:"p-3 m-0 p-0"},[s("h5",{staticClass:"d-inline p-0"},[t._v("Status:")]),s("h5",{staticClass:"text-danger d-inline pl-2"},[t._v("Closed")]),s("hr",{staticClass:"bg-dark shadow m-0"})]):s("div",{staticClass:"p-3 mr-2"},[s("h5",{staticClass:"d-inline p-0"},[t._v("Status:")]),s("h5",{staticClass:"text-success d-inline pl-2"},[t._v("Open")]),s("hr",{staticClass:"bg-dark shadow m-0"})])]),s("div",{staticClass:"col-12 text-light rounded-tr bg-dark"},[s("div",{staticClass:"d-flex justify-content-between"},[s("div",{staticClass:"d-inline"},[t._m(0),s("p",{staticClass:"d-inline bg-dark p-2 rounded-tr rounded-br text-light shadow"},[t._v(t._s(this.bugDetails.creatorEmail))]),s("p")])])]),s("div",{staticClass:"col-12 text-light bg-dark p-1"},[s("div",{},[t._m(1),s("p",{staticClass:"px-1 m-0"},[t._v(t._s(this.bugDetails.description))]),this.profile.email==this.bugDetails.creatorEmail?s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.editBug(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.editBugForm.title,expression:"editBugForm.title"}],staticClass:"p-1 rounded",attrs:{placeholder:"edit title here...."},domProps:{value:t.editBugForm.title},on:{input:function(e){e.target.composing||t.$set(t.editBugForm,"title",e.target.value)}}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editBugForm.description,expression:"editBugForm.description"}],staticClass:"rounded p-1 mt-2 w-90 d-block",attrs:{placeholder:"edit description here...",type:"text",rows:"5"},domProps:{value:t.editBugForm.description},on:{input:function(e){e.target.composing||t.$set(t.editBugForm,"description",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-outline-success shadow mt-2",attrs:{title:"Save your changes",type:"submit"}},[t._v("Save")])])]):t._e(),s("div",{staticClass:"d-flex justify-content-end p-o m-0"},[s("button",{staticClass:"btn btn-danger shadow text-light mr-4 mt-2",attrs:{title:"this action cannot be undone this closes the bug"},on:{click:t.closeBug}},[t._v("Close")])])])]),s("div",{staticClass:"col-12 bg-dark"},[t._m(2),t._m(3),t._l(t.notes,(function(t,e){return s("Note",{key:e,attrs:{note:t}})})),s("form",{on:{submit:function(e){return e.preventDefault(),t.addNote(e)}}},[s("div",{staticClass:"row action bg-dark text-light text-center d-flex justify-content-center mx-1 p-0 p-3"},[s("div",{staticClass:"col-10 p-0 m-0 d-flex-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newNoteForm.description,expression:"newNoteForm.description"}],staticClass:"w-100 m-2 p-1",attrs:{type:"text",placeholder:"Add note of what you know about the issue...."},domProps:{value:t.newNoteForm.description},on:{input:function(e){e.target.composing||t.$set(t.newNoteForm,"description",e.target.value)}}})]),t._m(4)])])],2)])])},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"bg-warning p-2 text-dark d-inline rounded-tl rounded-bl ml-2 shadow-"},[s("b",[t._v("Reported by:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h5",[s("b",{staticClass:"text-warning"},[t._v("Desctiption:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"text-warning p-2 m-0"},[s("b",[t._v("Notes:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row bg-warning text-dark rounded-top"},[s("div",{staticClass:"col-3 p-0"},[s("h6",{staticClass:"text-center p-1 m-0"},[s("b",[t._v("Name")])])]),s("div",{staticClass:"col-7 d-flex-center p-0"},[s("h6",{staticClass:"d-inline p-1 m-0"},[s("b",[t._v("Note")])])]),s("div",{staticClass:"col-2 text-center p-0"},[s("h6",{staticClass:"d-inline p-1 m-0"},[s("b",[t._v("Delete")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-2 p-0 m-0 d-flex-center"},[s("button",{staticClass:"btn btn-success text-light",attrs:{type:"submit"}},[t._v("Add")])])}],X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row bg-dark text-light text-center d-flex justify-content-center p-0"},[s("div",{staticClass:"col-5 col-lg-3 p-0 m-0 d-flex-center"},[s("p",{staticClass:"p-0 m-0"},[t._v(t._s(t.note.creatorEmail))])]),s("div",{staticClass:"col-5 col-lg-7 p-0 m-0 d-flex-center bl"},[s("p",{staticClass:"d-inline p-1 m-0"},[t._v(t._s(t.note.description))])]),t.note.creatorEmail==this.userEmail?s("div",{staticClass:"col-2 p-0 m-0 d-flex-center bl"},[s("i",{staticClass:"fa fa-trash action",on:{click:t.deleteNote}})]):s("div",{staticClass:"col-2 p-0 m-0 d-flex-center bl"},[s("i",{staticClass:"fa fa-minus"})]),t._m(0)])},Y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 p-0"},[s("hr",{staticClass:"bg-warning m-0 w-100"})])}],Z={props:["note"],computed:{userEmail(){return this.$store.state.profile.email}},methods:{deleteNote(){let t={noteId:this.note.id,bugId:this.note.bugId},e=window.confirm("are you sure ");e&&this.$store.dispatch("deleteNote",t)}}},tt=Z,et=Object(u["a"])(tt,X,Y,!1,null,null,null),st=et.exports,at={mounted(){let t=this.$route.params.id;this.$store.dispatch("getBugDetails",t),this.$store.dispatch("getNotesByBugId",t)},data(){return{editBugForm:{},newNoteForm:{}}},computed:{notes(){return this.$store.state.notes},bugDetails(){return this.$store.state.bugDetails},profile(){return this.$store.state.profile}},components:{Note:st},methods:{closeBug(){let t=window.confirm("are you sure ");if(t){let t=this.$route.params.id;this.$store.dispatch("closeBug",t)}},addNote(){let t=this.bugDetails.id,e={description:this.newNoteForm.description,bugId:t,creatorEmail:this.$auth.user.email};this.$store.dispatch("addNote",e)},editBug(){let t=this.bugDetails.id,e=this.editBugForm.title,s=this.editBugForm.description,a={bugId:t,description:s,title:e};this.$store.dispatch("editBug",a)}}},it=at,ot=(s("f7ef"),Object(u["a"])(it,Q,V,!1,null,null,null)),rt=ot.exports,nt={mounted(){this.$store.dispatch("getAllBugs")},computed:{bugs(){return this.$store.state.bugs}},methods:{setShowClosedBugs(){let t=event.target.checked;this.$store.dispatch("setShowClosedBugs",t)},sortByStatus(){this.$store.dispatch("sortBugsByStatus")},sortBydate(){this.$store.dispatch("sortBugsByDate")}},components:{bugReport:rt,Bug:K}},lt=nt,ct=Object(u["a"])(lt,M,H,!1,null,null,null),ut=ct.exports,dt={name:"Profile",computed:{profile(){return this.$store.state.profile}},components:{BugList:ut}},pt=dt,gt=(s("aa1e"),Object(u["a"])(pt,J,L,!1,null,"171eb7a6",null)),mt=gt.exports;a["a"].use(D["a"]);const ht=[{path:"/",name:"Home",component:A},{path:"/profile",name:"Profile",component:mt,beforeEnter:v["b"]},{path:"/BugDetails/:id",name:"BugDetails",component:rt,beforeEnter:v["b"]}],bt=new D["a"]({routes:ht});var vt=bt,ft=s("2f62");a["a"].use(ft["a"]);let Ct=location.host.includes("localhost")?"http://localhost:3000/":"/",wt=b.a.create({baseURL:Ct+"api",timeout:3e3,withCredentials:!0});var _t=new ft["a"].Store({state:{profile:{},isShowingBugForm:!1,showClosedBugs:!1,bugs:[],notes:[],bugDetails:{},sortByNewest:!0,sortByOpen:!0},mutations:{sortBugsByDate(t,e){let s=t.sortByNewest?1:-1;t.bugs=t.bugs.sort((t,e)=>{let a=t.createdAt,i=e.createdAt;return a<i?s:a>i?-s:void 0}),t.sortByNewest=!t.sortByNewest},sortBugsByStatus(t,e){let s=t.sortByOpen?1:-1;t.bugs=t.bugs.sort((t,e)=>{let a=t.status,i=e.status;return a>i?s:a<i?-s:void 0}),t.sortByOpen=!t.sortByOpen},setBugDetails(t,e){t.bugDetails=e},setBugs(t,e){t.bugs=e},isShowingBugForm(t){t.isShowingBugForm=!t.isShowingBugForm},setShowClosedBugs(t,e){t.showClosedBugs=e},setProfile(t,e){t.profile=e,console.log("profile set to "+t.profile)},setNotes(t,e){t.notes=e}},actions:{sortBugsByStatus({commit:t}){t("sortBugsByStatus")},sortBugsByDate({commit:t,dispatch:e}){t("sortBugsByDate")},async editBug({commit:t,dispatch:e},s){await wt.put(`bugs/${s.bugId}`,s),e("getBugDetails",s.bugId)},async getAllBugs({commit:t,dispatch:e}){try{let e=await wt.get("bugs");t("setBugs",e.data)}catch(s){console.error(s)}},async createNewBugReport({commit:t,dispatch:e},s){try{await wt.post("bugs",s),e("toggleBugForm")}catch(a){console.error(a)}},async getBugDetails({commit:t,dispatch:e},s){try{let e=await wt.get(`bugs/${s}`);t("setBugDetails",e.data)}catch(a){console.error(a)}},async closeBug({commit:t,dispatch:e},s){try{await wt.delete(`bugs/${s}`),e("getBugDetails",s)}catch(a){console.error(a)}},toggleBugForm({commit:t,dispatch:e}){t("isShowingBugForm")},setShowClosedBugs({commit:t,dispatch:e},s){t("setShowClosedBugs",s)},async deleteNote({commit:t,dispatch:e},s){try{await wt.delete(`notes/${s.noteId}`),e("getNotesByBugId",s.bugId)}catch(a){console.error(a)}},async addNote({commit:t,dispatch:e},s){try{await wt.post(`bugs/${s.bugId}/notes`,s),e("getNotesByBugId",s.bugId)}catch(a){console.error(a)}},async getNotesByBugId({commit:t,dispatch:e},s){try{let e=await wt.get(`bugs/${s}/notes`);t("setNotes",e.data)}catch(a){console.error(a)}},setBearer({},t){wt.defaults.headers.authorization=t},resetBearer(){wt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await wt.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}}}});const Bt="devautho.auth0.com",xt="https://devautho.auth0.com/api/v2/",yt="zJFW1LqSODTvujPrM1nEe37v4IbaR2NU";a["a"].use(v["a"],{domain:Bt,clientId:yt,audience:xt,onRedirectCallback:t=>{vt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new a["a"]({router:vt,store:_t,render:function(t){return t($)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),i=s.n(a);i.a},"75cb":function(t,e,s){"use strict";var a=s("a982"),i=s.n(a);i.a},"9c0c":function(t,e,s){},a22e:function(t,e,s){},a6e1:function(t,e,s){},a982:function(t,e,s){},aa1e:function(t,e,s){"use strict";var a=s("a22e"),i=s.n(a);i.a},b0a0:function(t,e,s){"use strict";var a=s("452c"),i=s.n(a);i.a},e077:function(t,e,s){},f7ef:function(t,e,s){"use strict";var a=s("fd60"),i=s.n(a);i.a},fd60:function(t,e,s){}});