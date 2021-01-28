(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),o=n.n(s),c=n(1),l=n.n(c),i=n(2),u=n(3),d=n(4),p=n(6),m=n(5),f=(n(17),n(18),n(19),n(9)),h=n.n(f),v=function(e,t){return fetch("".concat("https://mate-api.herokuapp.com").concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))};function b(e){return new Promise((function(t){return setTimeout(t,e)}))}var E=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(1e3);case 2:return e.abrupt("return",v("/todos"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e){return v("/users/".concat(e))},_=n(10),k=(n(20),function(e){var t=e.todo,n=e.selectUser,a=e.selectedUserId;return r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},r.a.createElement("li",{className:"TodoList__item ".concat(t.completed?"TodoList__item--checked":"TodoList__item--unchecked")},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0}),r.a.createElement("p",null,t.title)),a===t.id?r.a.createElement("button",{onClick:function(){n(0)},className:" button is-link {/*TodoList__user-button TodoList__user-button--selected button*/} ",type:"button"},"User: ",t.userId):r.a.createElement("button",{onClick:function(){n(t.id)},className:" button is-info is-outlined {/*TodoList__user-button TodoList__user-button--selected button/} ",type:"button"},"User: ",t.userId))))}),g=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={selectOption:"all"},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(_.a)({},a,r))},e.filterBySelect=function(t){switch(e.state.selectOption){case"completed":return t.completed;case"active":return!t.completed;default:return!0}},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.selectUser,a=e.selectedUserId,s=t.filter(this.filterBySelect);return r.a.createElement("div",{className:"TodoList"},r.a.createElement("div",{className:"select"},r.a.createElement("select",{value:this.selectOption,onChange:this.handleChange,name:"selectOption",id:"selectOption"},r.a.createElement("option",{value:""},"take a choose"),r.a.createElement("option",{value:"all"},"all"),r.a.createElement("option",{value:"active"},"active"),r.a.createElement("option",{value:"completed"},"completed"))),r.a.createElement("h2",null,"Todos:"),s&&s.map((function(e){return r.a.createElement(k,{key:e.id,todo:e,selectUser:n,selectedUserId:a})})))}}]),n}(r.a.Component),U=(n(21),function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(this.props.userId);case 2:t=e.sent,this.setState({user:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(i.a)(l.a.mark((function e(t,n,a){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.userId===this.props.userId){e.next=9;break}return e.next=3,y(this.props.userId);case 3:if(null!==(s=e.sent).name){e.next=8;break}return e.abrupt("return",r.a.createElement("p",null,"Loading profile..."));case 8:return e.abrupt("return",this.setState({user:s}));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.deleteUser,t=this.state.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user: ",this.props.userId)),r.a.createElement("h3",{className:"CurrentUser__name"},t.name?t.name:""),r.a.createElement("p",{className:"CurrentUser__email"},t.email),r.a.createElement("p",{className:"CurrentUser__phone"},t.phone)),r.a.createElement("button",{onClick:e,type:"button",className:"button is-link"},"Clear"))}}]),n}(r.a.Component)),O=(n(22),function(){return r.a.createElement("div",{className:"block"},"An error occurred when",r.a.createElement("strong",null,"loading"),"todos...")}),N=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],filteredTodos:[],selectedUserId:0,query:"",selectedStatus:"",loading:!1,hasLoadingError:!1,option:""},e.loadTodos=Object(i.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,hasLoadingError:!1}),t.prev=1,t.next=4,E();case 4:n=t.sent,e.setState({todos:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({hasLoadingError:!0,loading:!1});case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e.filterHandler=function(t){e.setState({query:t.target.value})},e.deleteUser=function(){e.setState({selectedUserId:0})},e}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){var a=this.state,r=a.query,s=a.todos;if(t.query!==r){var o=s.filter((function(e){return null!==e.title&&e.title.includes(r)}));this.setState({filteredTodos:o})}}},{key:"render",value:function(){var e=this,t=this.state,n=t.todos,a=t.selectedUserId,s=t.filteredTodos,o=t.loading,c=t.hasLoadingError;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},0===n.length?r.a.createElement("button",{className:h()("button","is-link",{"is-loading":o}),onClick:this.loadTodos,type:"button"},"load todos"):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("input",{value:this.state.query,onChange:this.filterHandler,className:"input is-rounded",type:"text",placeholder:"Primary input"})),r.a.createElement(g,{todos:s.length>0?s:n,selectedUserId:a,selectUser:function(t){e.setState({selectedUserId:t})}}))),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},a?r.a.createElement(U,{deleteUser:this.deleteUser,userId:a}):"No user selected"))),c&&r.a.createElement(O,null))}}]),n}(r.a.Component);o.a.render(r.a.createElement(N,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.1eeecd82.chunk.js.map