(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){e.exports=n(249)},106:function(e,t,n){},241:function(e,t,n){},247:function(e,t,n){},248:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(31),o=n.n(i);n(106),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(12),s=n(5),l=n(94),u=n(26),d=n(96),h=n.n(d),m=n(97),f=n.n(m),p="RECEIVE_SCHOOL",v="FETCH_ERROR",g="SELECT_SCHOOL",b="INVALIDATE_SCHOOL";function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,data:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object.assign({},e,{isFetching:!0});case p:return Object.assign({},e,{isFetching:!1,data:t.school,lastUpdated:t.receivedAt});case b:return Object.assign({},e,{isFetching:!1,data:{}});default:return e}}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===v?t.message:e}var y,O,k=n(19),j=n(7),T=n(8),w=function(){function e(t,n,a){Object(j.a)(this,e),this.hours=void 0,this.minutes=void 0,this.seconds=void 0,this.hours=Math.abs(t%24),this.minutes=Math.abs(n%60),this.seconds=Math.abs(a||0)}return Object(T.a)(e,null,[{key:"fromMilliseconds",value:function(t){var n=Math.floor(t/1e3/60/60);t-=1e3*n*60*60;var a=Math.floor(t/1e3/60);t-=1e3*a*60;var r=Math.floor(t/1e3);return t-=1e3*r,new e(n,a,r)}},{key:"fromDate",value:function(t){return new e(t.getHours(),t.getMinutes(),t.getSeconds())}},{key:"fromString",value:function(t){var n=t.split(":");return n.length<2||n.length,new e(parseInt(n[0],10),parseInt(n[1],10),3===n.length?parseInt(n[2],10):void 0)}}]),Object(T.a)(e,[{key:"getHours",value:function(){return this.hours}},{key:"getMinutes",value:function(){return this.minutes}},{key:"getSeconds",value:function(){return this.seconds}},{key:"getMillisecondsTo",value:function(e){return 60*(e.getHours()-this.hours)*60*1e3+60*(e.getMinutes()-this.minutes)*1e3+1e3*(e.getSeconds()-this.seconds)}},{key:"getTimeDeltaTo",value:function(t){return e.fromMilliseconds(Math.abs(this.getMillisecondsTo(t)))}},{key:"toString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1]?this.hours:this.hours,this.hours.toString().padStart(2,"0")+":"+this.minutes.toString().padStart(2,"0"));return e||(t+=":"+this.seconds.toString().padStart(2,"0")),t}},{key:"isAM",value:function(){return this.hours<12&&this.minutes<60&&this.seconds<60}},{key:"getFormattedString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.isAM()?" AM":" PM";return this.toString(e)+(t?n:"")}},{key:"toJSON",value:function(){return this.toString()}}]),e}();function N(e,t){var n=!0,a=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var c=i.value;if(t.hasOwnProperty(c))return t[c]}}catch(s){a=!0,r=s}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}}function D(e){var t=Object(k.a)({type:e.type,id:e.id},void 0!==e.links&&{endpoint:e.links.self});return Object.assign({},t,e.attributes)}function C(){return new Date}function I(e){return e.sort(function(e,t){return-e.getStartTime().getMillisecondsTo(t.getStartTime())})}function _(e,t,n){t.getMillisecondsTo(n);var a=e.getMillisecondsTo(t),r=e.getMillisecondsTo(n);return a>0&&r>0?O.IS_BEFORE:r<0&&r<0?O.IS_AFTER:O.IS_DURING_OR_EXACTLY}!function(e){e.DAY_OFF="day off",e.OUTSIDE_SCHOOL_HOURS="outside school hours",e.SCHOOL_IN_CLASS_OUT="school is in session, but class is not",e.CLASS_IN_SESSION="class is in session"}(y||(y={})),function(e){e[e.IS_BEFORE=-1]="IS_BEFORE",e[e.IS_DURING_OR_EXACTLY=0]="IS_DURING_OR_EXACTLY",e[e.IS_AFTER=1]="IS_AFTER"}(O||(O={}));var x=function(){function e(t,n,a,r){Object(j.a)(this,e),this.name=void 0,this.startTime=void 0,this.endTime=void 0,this.creationDate=void 0,this.name=t,this.startTime=n,this.endTime=a,this.creationDate=r}return Object(T.a)(e,null,[{key:"fromJson",value:function(t){var n=N(["startTime","start_time"],t),a=N(["endTime","end_time"],t);return new e(N(["name","classPeriodName","class_period_name"],t),n instanceof w?n:w.fromString(n),a instanceof w?a:w.fromString(a),new Date(N(["creationDate","creation_date"],t)))}}]),Object(T.a)(e,[{key:"getName",value:function(){return this.name}},{key:"getStartTime",value:function(){return this.startTime}},{key:"getEndTime",value:function(){return this.endTime}},{key:"getDuration",value:function(){return this.startTime.getTimeDeltaTo(this.endTime)}},{key:"stateForTime",value:function(e){return _(e,this.startTime,this.endTime)}}]),e}(),M=n(4),R=n.n(M),F=function(){function e(t,n,a,r,i,o,c){Object(j.a)(this,e),this.id=void 0,this.name=void 0,this.endpoint=void 0,this.displayName=void 0,this.dates=void 0,this.classes=void 0,this.lastUpdatedDate=void 0,this.id=t,this.name=n,this.endpoint=a,this.displayName=c,this.dates=r,this.classes=i,this.lastUpdatedDate=o}return Object(T.a)(e,null,[{key:"fromJson",value:function(t){return new e(N(["id","identifier"],t),N(["name","full_name","fullName"],t),N(["endpoint"],t),N(["dates"],t).map(function(e){return Object(M.parse)(e)}),N(["classes","meeting_times"],t).map(function(e){return x.fromJson(e)}),N(["lastModified","last_modified"],t))}}]),Object(T.a)(e,[{key:"getIdentifier",value:function(){return this.id}},{key:"getName",value:function(){return this.displayName?this.displayName:this.name}},{key:"getEndpoint",value:function(){return this.endpoint}},{key:"getDates",value:function(){return this.dates}},{key:"getAllClasses",value:function(){return this.classes}},{key:"numberOfClasses",value:function(){return this.classes.length-1}},{key:"lastUpdated",value:function(){return this.lastUpdatedDate}},{key:"hasChangedSince",value:function(e){return e.getTime()-this.lastUpdatedDate.getTime()>0}},{key:"getClassPeriodForTime",value:function(e){var t=!0,n=!1,a=void 0;try{for(var r,i=I(this.classes)[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var o=r.value;if(o.stateForTime(e)===O.IS_DURING_OR_EXACTLY)return o}}catch(c){n=!0,a=c}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}}}]),e}(),A=function(){function e(t,n,a,r,i,o,c,s,l,u){Object(j.a)(this,e),this.id=void 0,this.ownerId=void 0,this.endpoint=void 0,this.fullName=void 0,this.acronym=void 0,this.timeZone=void 0,this.schedules=void 0,this.passingPeriodName=void 0,this.creationDate=void 0,this.lastUpdatedDate=void 0,this.id=t,this.ownerId=n,this.endpoint=i,this.fullName=a,this.acronym=r,this.timeZone=o,this.schedules=c,this.passingPeriodName=s,this.creationDate=l,this.lastUpdatedDate=u}return Object(T.a)(e,null,[{key:"fromJson",value:function(t){var n=N(["schedules"],t);return new e(N(["id","identifier"],t),N(["ownerId","owner_id"],t),N(["name","fullName","full_name"],t),N(["acronym"],t),N(["endpoint"],t),"LA",n?n.map(function(e){return F.fromJson(e)}):void 0,N(["alternate_freeperiod_name","passingPeriodName"],t),N(["creation_date","creationDate"],t),N(["last_modified","lastModified"],t))}}]),Object(T.a)(e,[{key:"getIdentifier",value:function(){return this.id}},{key:"getOwnerIdentifier",value:function(){return this.ownerId}},{key:"getEndpoint",value:function(){return this.endpoint}},{key:"getSchedules",value:function(){return this.schedules}},{key:"getName",value:function(){return this.fullName}},{key:"getAcronym",value:function(){return this.acronym}},{key:"getPassingTimeName",value:function(){return this.passingPeriodName}},{key:"getTimezone",value:function(){return this.timeZone}},{key:"getCreationDate",value:function(){return this.creationDate}},{key:"lastUpdated",value:function(){return this.lastUpdated}},{key:"hasChangedSince",value:function(e){return void 0!==this.lastUpdatedDate?e.getTime()-this.lastUpdatedDate.getTime()>0:void 0}},{key:"getScheduleForDate",value:function(e){if(this.schedules){var t=!0,n=!1,a=void 0;try{for(var r,i=this.schedules[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var o=r.value;if(o.getDates().map(function(e){return e.toDateString()}).includes(e.toDateString()))return o}}catch(c){n=!0,a=c}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}return null}}},{key:"hasSchedules",value:function(){return void 0!==this.schedules}},{key:"isInSession",value:function(e){var t=w.fromDate(e),n=this.getScheduleForDate(e);return!!n&&_(t,n.getAllClasses()[0].getStartTime(),n.getAllClasses()[n.numberOfClasses()].getEndTime())===O.IS_DURING_OR_EXACTLY}}]),e}(),U=Object(u.a)(function(e,t){return Object(k.a)({},e,{selectedSchool:JSON.stringify(e.selectedSchool)})},function(e,t){return Object(k.a)({},e,{selectedSchool:A.fromJson(e.selectedSchool)})},{whitelist:["selectedSchoolReducer"]}),L="SET_TIME_FORMAT";function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{use24HourTime:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object.assign({},e,{use24HourTime:t.use24HourTime});default:return e}}var P={key:"root",storage:h.a,transforms:[U],blacklist:["router","error"]},Y=n(98),J=n(11),W=n(99),B=n(2),G=n.n(B),z=n(9),X=n(6),Z=n(34),K=n(100),V=n.n(K),q=function(){return window.history.replaceState({},document.title,window.location.pathname)},$=r.a.createContext(null),Q=function(){return Object(a.useContext)($)},ee=function(e){var t=e.children,n=e.onRedirectCallback,i=void 0===n?q:n,o=Object(Z.a)(e,["children","onRedirectCallback"]),c=Object(a.useState)(!1),s=Object(X.a)(c,2),l=s[0],u=s[1],d=Object(a.useState)(),h=Object(X.a)(d,2),m=h[0],f=h[1],p=Object(a.useState)(),v=Object(X.a)(p,2),g=v[0],b=v[1],E=Object(a.useState)(!0),S=Object(X.a)(E,2),y=S[0],O=S[1],k=Object(a.useState)(!1),j=Object(X.a)(k,2),T=j[0],w=j[1];Object(a.useEffect)(function(){(function(){var e=Object(z.a)(G.a.mark(function e(){var t,n,a,r,c;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V()(o);case 2:if(t=e.sent,b(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,a=n.appState,i(a);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,u(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:c=e.sent,f(c);case 19:O(!1);case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]);var N=function(){var e=Object(z.a)(G.a.mark(function e(t){var n;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,g.loginWithPopup(t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0);case 9:return e.prev=9,w(!1),e.finish(9);case 12:return e.next=14,g.getUser();case 14:n=e.sent,f(n),u(!0);case 17:case"end":return e.stop()}},e,null,[[1,6,9,12]])}));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(z.a)(G.a.mark(function e(){var t,n;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,g.handleRedirectCallback();case 3:return t=e.sent,e.next=6,g.getUser();case 6:return n=e.sent,O(!1),u(!0),f(n),e.abrupt("return",t);case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement($.Provider,{value:{isAuthenticated:l,user:m,loading:y,popupOpen:T,loginWithPopup:N,handleRedirectCallback:D,getIdTokenClaims:function(e){return g.getIdTokenClaims(e)},loginWithRedirect:function(e){return g.loginWithRedirect(e)},getTokenSilently:function(e){return g.getTokenSilently(e)},getTokenWithPopup:function(e){return g.getTokenWithPopup(e)},logout:function(e){return g.logout(e)}}},t)},te=function e(){Object(j.a)(this,e)};te.domain="classclock.auth0.com",te.clientId="Z5H5pk78OhW6naNZHnK6CI6EEKZoVipr",te.audience="https://api.classclock.app";var ne="/",ae="/schedule.html",re="/settings.html",ie="/select",oe="/callback",ce="/admin",se="https://github.com/MoralCode/ClassClock",le="https://twitter.com/classclockapp",ue="https://www.instagram.com/classclockapp/",de=(n(25),n(33)),he=n(32),me=n(35),fe=function(e){function t(){return Object(j.a)(this,t),Object(de.a)(this,Object(he.a)(t).apply(this,arguments))}return Object(me.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{className:this.props.className,id:this.props.id,style:Object.assign({},this.props.style,{cursor:"pointer"}),title:this.props.title,href:"function"===typeof this.props.destination?void 0:this.props.destination,onClick:"function"===typeof this.props.destination?this.props.destination:void 0},this.props.children)}}]),t}(a.Component),pe=(n(241),function(e){function t(){return Object(j.a)(this,t),Object(de.a)(this,Object(he.a)(t).apply(this,arguments))}return Object(me.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"infoBlock"+(this.props.className?" "+this.props.className:""),style:this.props.style},this.props.children)}}]),t}(a.Component)),ve=n(10),ge=n(13),be=Object(J.b)(function(e){var t=e.selectedSchool;return t.data=A.fromJson(t.data),{selectedSchool:t}})(function(e){var t=Object(a.useState)(C()),n=Object(X.a)(t,2),i=n[0],o=n[1],c=function(t){e.dispatch(Object(s.b)(t))};Object(a.useEffect)(function(){var e=setInterval(function(){o(C())},500);return function(){return clearInterval(e)}},[i]);var l=e.selectedSchool.data.getScheduleForDate(i),u=r.a.createElement(r.a.Fragment,null);switch(l){case void 0:e.selectedSchool.isFetching||e.dispatch(Object(s.b)(ie));break;case null:u=r.a.createElement("p",null,"No School Today");break;default:var d=function(e,t){var n=t.getScheduleForDate(e);if(n)for(var a=I(n.getAllClasses()),r=0;r<a.length;r++)for(var i=0,o=[a[r].getStartTime(),a[r].getEndTime()];i<o.length;i++){var c=o[i];if(w.fromDate(e).getMillisecondsTo(c)>=0)return[a[r].stateForTime(w.fromDate(e))===O.IS_DURING_OR_EXACTLY?a[r+1]:a[r],c]}}(i,e.selectedSchool.data),h=d||[void 0,void 0],m=Object(X.a)(h,2),f=m[0],p=m[1],v=l.getClassPeriodForTime(w.fromDate(i));u=r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,null,r.a.createElement("p",null,"Today is a"," ",r.a.createElement(fe,{destination:function(){return c(ae)},id:"viewScheduleLink"},l.getName()))),r.a.createElement(pe,null,r.a.createElement("p",null,"You are currently in: "),r.a.createElement("p",{className:"timeFont",style:{fontSize:"30px"}},r.a.createElement("b",null,void 0!==v?v.getName():e.selectedSchool.data.getPassingTimeName()))),r.a.createElement(pe,null,r.a.createElement("p",null,"...which ends in:"),r.a.createElement("p",{className:"timeFont",style:{fontSize:"60px"}},r.a.createElement("b",null,p?w.fromDate(i).getTimeDeltaTo(p).getFormattedString():"No Class")),r.a.createElement("p",null,"Your next class period is: "),r.a.createElement("p",{className:"timeFont",style:{fontSize:"30px"}},r.a.createElement("b",null,f?f.getName():"No Class"))))}return r.a.createElement("div",{className:"App"},r.a.createElement(fe,{className:"cornerNavButton smallIcon",destination:function(){return c(re)}},r.a.createElement(ve.a,{icon:ge.c})),r.a.createElement("br",null),r.a.createElement(pe,null,r.a.createElement("p",null,"It is currently: "),r.a.createElement("p",{className:"timeFont",style:{fontSize:"40px"}},w.fromDate(i).getFormattedString()),r.a.createElement("p",null,"on"," ",r.a.createElement("b",null,i.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"short",day:"numeric"})))),u)}),Ee=Object(J.b)(function(e){var t=e.selectedSchool;return t.data=A.fromJson(t.data),{selectedSchool:t}})(function(e){var t=r.a.createElement(r.a.Fragment,null),n=e.selectedSchool.data.getScheduleForDate(C());switch(n){case void 0:e.dispatch(Object(s.b)(ie));break;case null:t=r.a.createElement("p",null,"No School Today");break;default:t=r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,n.getName()),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Class")),r.a.createElement("td",null,r.a.createElement("b",null,"Time")))),r.a.createElement("tbody",null,I(n.getAllClasses()).map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",null,e.getName()),r.a.createElement("td",null,e.getStartTime().toString()," -"," ",e.getEndTime().toString())))}))))}return r.a.createElement("div",null,r.a.createElement(fe,{className:"cornerNavButton smallIcon",destination:function(){return e.dispatch(Object(s.b)(ne))}},r.a.createElement(ve.a,{icon:ge.d})),r.a.createElement("br",null),r.a.createElement("p",{style:{fontSize:"30px"}},r.a.createElement("b",null,e.selectedSchool.data.getName())),t)});var Se=n(36),ye=n(50),Oe=n.n(ye),ke=function e(){Object(j.a)(this,e)};function je(e){return function(){var t=Object(z.a)(G.a.mark(function t(n){var a,r;return G.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:g}),a=ke.validateResponse(ke.getSchool(e)),r=ke.validateResponse(ke.getSchedulesListForSchool(e)),Promise.all([a,r]).then(function(t){var a=Object(X.a)(t,2),r=a[0],i=a[1],o=[],c=!0,s=!1,l=void 0;try{for(var u,d=i.data[Symbol.iterator]();!(c=(u=d.next()).done);c=!0){var h=u.value.id,m=ke.validateResponse(ke.getDetailedScheduleForSchool(e,h));o.push(m)}}catch(f){s=!0,l=f}finally{try{c||null==d.return||d.return()}finally{if(s)throw l}}Promise.all(o).then(function(e){var t;r.data.attributes.schedules=e.map(function(e){return D(e.data)}),n((t=D(r.data),{type:p,school:A.fromJson(t),receivedAt:Date.now()}))})});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}ke.baseURL="https://api.classclock.app/v0",ke.getSchoolsList=function(){var e=Object(z.a)(G.a.mark(function e(t){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ke.baseURL+"/schools/",ke.getHeaders("GET",t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),ke.getSchool=function(){var e=Object(z.a)(G.a.mark(function e(t,n){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ke.baseURL+"/school/"+t+"/",ke.getHeaders("GET",n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),ke.getSchedulesListForSchool=function(){var e=Object(z.a)(G.a.mark(function e(t,n){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ke.baseURL+"/school/"+t+"/bellschedules/",ke.getHeaders("GET",n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),ke.getDetailedScheduleForSchool=function(){var e=Object(z.a)(G.a.mark(function e(t,n,a){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(ke.baseURL+"/school/"+t+"/bellschedule/"+n+"/",ke.getHeaders("GET",a));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}(),ke.validateResponse=function(){var e=Object(z.a)(G.a.mark(function e(t){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.then(function(e){if(e.ok)return e.json()},function(e){return console.log("An error occurred.",e)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),ke.getHeaders=function(e,t,n){var a=t?Object(k.a)({},n,{Authorization:"Bearer "+t}):n;return Object.assign({},{method:e,headers:new Headers({Accept:"application/vnd.api+json"})},a)};var Te=Object(J.b)(function(e){var t=e.selectedSchool,n=e.userSettings;return{selectedSchool:Object.assign({},t,{data:A.fromJson(t.data)}),userSettings:n}})(function(e){var t=Q(),n=t.logout,a=t.user,i=(t.getTokenSilently,function(t){e.dispatch(Object(s.b)(t))});return e.selectedSchool.data!=={}||e.selectedSchool.isFetching||i(ie),r.a.createElement("div",null,r.a.createElement(fe,{className:"cornerNavButton smallIcon",destination:function(){return i(ne)}},r.a.createElement(ve.a,{icon:ge.d})),r.a.createElement("br",null),r.a.createElement("h1",null,"Settings"),a?r.a.createElement("span",null,"Hello ",r.a.createElement("b",null,a.name||a.email)," (",r.a.createElement(fe,{destination:function(){n(),e.dispatch({type:b})},title:"Log Out"},r.a.createElement(ve.a,{icon:ge.e})," Log Out"),")"):void 0,r.a.createElement("p",null,e.selectedSchool.isFetching?r.a.createElement("span",null,"Loading School..."):r.a.createElement("b",null,e.selectedSchool.data.getName()+" "),r.a.createElement("br",null),r.a.createElement("em",{className:"smallerText"},"(",r.a.createElement(fe,{destination:function(){return i(ie)},title:"Change School"},"Change School"),")"),a&&e.selectedSchool.data.getOwnerIdentifier()===a.sub?r.a.createElement("em",{className:"smallerText"},"(",r.a.createElement(fe,{destination:function(){return i(ce)},title:"Manage School"},"Manage School"),")"):void 0,r.a.createElement("br",null),r.a.createElement("em",{className:"smallerText"},"Updated:"," ",Oe()(new Date(e.selectedSchool.lastUpdated),"MMM D YYYY h:mm:ss a")+" "),e.selectedSchool.isFetching?void 0:r.a.createElement("em",{className:"smallerText"},"(",r.a.createElement(fe,{destination:function(){return e.dispatch(je(e.selectedSchool.data.getIdentifier()))},title:"Reload Schedule"},"Refresh"),")")),r.a.createElement("label",null,r.a.createElement("b",null,"Use 24-hour Time?")," ",r.a.createElement("input",{type:"checkbox",checked:e.userSettings.use24HourTime,onChange:function(){var t;e.dispatch((t=!e.userSettings.use24HourTime,{type:L,use24HourTime:t}))}})),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("em",{className:"smallerText"},"Settings are automatically saved on your device")),r.a.createElement("p",{style:{marginTop:"20vh"}},"Follow ClassClock:"),r.a.createElement("ul",{className:"footer__social"},r.a.createElement("li",null,r.a.createElement(fe,{destination:se},r.a.createElement(ve.a,{icon:Se.a}))),r.a.createElement("li",null,r.a.createElement(fe,{destination:le},r.a.createElement(ve.a,{icon:Se.c}))),r.a.createElement("li",null,r.a.createElement(fe,{destination:ue},r.a.createElement(ve.a,{icon:Se.b})))),r.a.createElement("p",{id:"credits"},"Created by: ",r.a.createElement("a",{href:"https://www.adriancedwards.com"},"Adrian Edwards")," ","and ",r.a.createElement("a",{href:"https://nbdeg.com/"},"Nick DeGroot"),r.a.createElement("br",null),"Idea by: ",r.a.createElement("a",{href:"https://twitter.com/MrKumprey"},"Dan Kumprey")))}),we=function(e){var t=e.component,n=e.path,i=(Object(Z.a)(e,["component","path"]),Q()),o=i.isAuthenticated,c=i.loginWithRedirect;Object(a.useEffect)(function(){!function(){var e=Object(z.a)(G.a.mark(function e(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=3;break}return e.next=3,c({appState:{targetUrl:n}});case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[o,c,n]);return r.a.createElement(function(e){return!0===o?r.a.createElement(t,e):null},null)},Ne=(n(247),Object(J.b)(function(e){return{selectedSchool:e.selectedSchool}})(function(e){var t=Object(a.useState)([]),n=Object(X.a)(t,2),i=n[0],o=n[1],c=Object(a.useState)(0),l=Object(X.a)(c,2),u=l[0],d=l[1];Object(a.useEffect)(function(){var e=new AbortController,t=e.signal;return 0===i.length&&Math.abs((new Date).getTime()-u)>12e4&&function(){var e=Object(z.a)(G.a.mark(function e(t){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:ke.validateResponse(ke.getSchoolsList({signal:t})).then(function(e){o(e.data.map(function(e){return A.fromJson(D(e))})),d((new Date).getTime())});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()(t),function(){e.abort()}},[]);var h=i.map(function(t){return r.a.createElement("li",{key:t.getIdentifier(),onClick:function(){e.dispatch(je(t.getIdentifier())),e.dispatch(Object(s.b)(ne))}},r.a.createElement("span",{className:"schoolAcronym"},t.getAcronym()),r.a.createElement("br",null),r.a.createElement("span",{className:"schoolName"},t.getName()))});return r.a.createElement("div",null,r.a.createElement("h2",null,"Please select a school"),0===i.length?r.a.createElement("span",null,"Loading..."):r.a.createElement("ul",{className:"schoolSelectionList"},h))})),De=n(37),Ce=(n(248),function(e){for(var t=Object(a.useState)(new Date),n=Object(X.a)(t,2),i=n[0],o=n[1],c={},s=0,l=Object.keys(e.options);s<l.length;s++)c[l[s]]=[];var u=Object(a.useState)(c),d=Object(X.a)(u,2),h=d[0],m=d[1],f={weekStartsOn:1},p=R.a.startOfWeek(R.a.startOfMonth(i),f),v=R.a.endOfWeek(R.a.endOfMonth(i),f),g=function(e){var t=new Date(parseInt(e.currentTarget.dataset.date,10));if(S(t)){var n=b(t);E(t,n)}else console.log("invalid date")},b=function(t){var n=k(t),a=n?n[0]:void 0,r=Object.keys(e.options);return n?a&&a===r[r.length-1]?void 0:a?r[r.indexOf(a)+1]:void 0:r[0]},E=function(e,t){var n=k(e);if(n&&t){var a=Object(X.a)(n,2),r=a[0],i=a[1];if(r!==t){var o=h;o=O(o,r,i),o=y(o,t,e),m(o)}}else if(!n&&t)m(y(h,t,e));else if(n&&!t){var c=Object(X.a)(n,2),s=c[0],l=c[1];m(O(h,s,l))}},S=function(e){return e instanceof Date&&!isNaN(e.getTime())},y=function(e,t,n){var a={};return a[t]=[].concat(Object(De.a)(e[t]),[n.getTime()]),Object.assign({},e,a)},O=function(e,t,n){var a={};return a[t]=[].concat(Object(De.a)(e[t].slice(0,n)),Object(De.a)(e[t].slice(n+1))),Object.assign({},e,a)},k=function(e){for(var t in h)if(h.hasOwnProperty(t)){var n=h[t].indexOf(e.getTime());if(-1!==n)return[t,n]}};return r.a.createElement("table",{className:"calendarGrid"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:7},r.a.createElement(fe,{destination:function(){return o(R.a.subMonths(i,1))},className:"smallIcon"},r.a.createElement(ve.a,{icon:ge.a})),r.a.createElement("span",{id:"monthDisplay"},R.a.format(i,"MMMM YYYY")),r.a.createElement(fe,{destination:function(){return o(R.a.addMonths(i,1))},className:"smallIcon"},r.a.createElement(ve.a,{icon:ge.b})))),r.a.createElement("tr",null,function(){for(var e=[],t=0;t<7;t++)e.push(R.a.format(R.a.addDays(p,t),"ddd"));return e}().map(function(e,t){return r.a.createElement("td",{key:t},e)}))),r.a.createElement("tbody",null,function(){for(var t=[],n=[],a=0;a<=R.a.differenceInDays(v,p);a++){var o=R.a.addDays(p,a),c=R.a.startOfWeek(o,f),s=R.a.startOfWeek(R.a.addDays(o,1),f),l=k(o),u=l?l[0]:void 0,d=u?{backgroundColor:e.options[u].color}:void 0;n.push(r.a.createElement("td",{key:"date"+a},r.a.createElement("span",{onClick:function(e){return g(e)},className:R.a.getMonth(o)!==R.a.getMonth(i)?"disabled":void 0,"data-date":o.getTime(),style:d},o.getDate()))),R.a.isEqual(c,s)||(t.push(r.a.createElement("tr",{key:"weekBegin"+a},n)),n=[])}return t}()))}),Ie=Object(J.b)(function(e){var t=e.selectedSchool;return t.data=A.fromJson(t.data),{selectedSchool:t}})(function(e){var t=Q(),n=(t.user,t.getTokenSilently,function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}),a=function(){var t=e.selectedSchool.data.getSchedules(),a={};if(void 0!==t){var r=!0,i=!1,o=void 0;try{for(var c,s=t[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var l=c.value;a[l.getIdentifier()]={color:n(),name:l.getName()}}}catch(u){i=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}return a}(),i=[];for(var o in a)a.hasOwnProperty(o)&&i.push(r.a.createElement("li",{style:{backgroundColor:a[o].color}},a[o].name));return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),r.a.createElement(Ce,{options:a}),r.a.createElement("ul",{style:{listStyleType:"none",margin:0,padding:0}},i))}),_e=[{path:ne,action:function(){return r.a.createElement(be,null)}},{path:ae,action:function(){return r.a.createElement(Ee,null)}},{path:re,action:function(){return r.a.createElement(Te,null)}},{path:ie,action:function(){return r.a.createElement(Ne,null)}},{path:ce,action:function(){return r.a.createElement(we,{component:Ie,path:ce})}},{path:oe,action:function(){return r.a.createElement("p",null,"Redirecting...")}}],xe=Object(s.a)(),Me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(c.c)({selectedSchool:E,userSettings:H,error:S,router:s.e}),a=Object(u.b)(P,n),r=Object(c.d)(a,t,Object(c.a)(f.a,Object(s.d)(e),l.a));return{store:r,persistor:Object(u.c)(r)}}(xe);Object(s.f)(xe,Me.store);var Re=new Y.a(_e),Fe=function(e){window.location.hash=window.location.hash,Me.store.dispatch(Object(s.c)(e&&e.targetUrl?e.targetUrl:window.location.pathname))};function Ae(e){Re.resolve(e).then(function(e){o.a.render(r.a.createElement(J.a,{store:Me.store},r.a.createElement(W.a,{loading:null,persistor:Me.persistor},r.a.createElement(ee,{domain:te.domain,client_id:te.clientId,audience:te.audience,redirect_uri:"http://localhost:3000/callback",onRedirectCallback:Fe},e))),document.getElementById("root"))})}var Ue=Me.store.getState().router.pathname;Me.store.subscribe(function(){var e=Ue;e!==(Ue=Me.store.getState().router.pathname)&&(console.log("Some deep nested property changed from",e,"to",Ue),Ae(Ue))});Ae(Ue),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},25:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.0b08d114.chunk.js.map