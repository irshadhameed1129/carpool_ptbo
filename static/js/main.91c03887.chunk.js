(this.webpackJsonpcarpool=this.webpackJsonpcarpool||[]).push([[0],{58:function(e,t,a){},59:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a(0),n=a.n(r),c=a(22),i=a.n(c),l=(a(58),a(8)),o=a(9),d=a(11),j=a(10),h=(a(59),a(103)),b=a(105),m=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={loggedInStatus:"NOT_LOGGED_IN",user:{}},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(h.a,{bg:"dark",variant:"dark",sticky:"top",children:[Object(s.jsx)(h.a.Brand,{href:"/",children:"CarPool PTBO"}),Object(s.jsxs)(b.a,{className:"mr-auto",children:[Object(s.jsx)(b.a.Link,{href:"/",children:"Home"}),Object(s.jsx)(b.a.Link,{href:"/login",children:"Profile"})]})]})})}}]),a}(r.Component),u=a(51),p=a(6),x=a(18),O=a(106),g=a(104),f=a(100),y=a(101),v=a(27),S=a(17),C=a.n(S),P=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).inputSet=function(t){console.log(t.target.name),e.setState(Object(x.a)({},t.target.name,t.target.value))},e.getAllpost=function(t){t.preventDefault();var a={endPlace:e.state.endPlace,startPlace:e.state.startPlace};C.a.post("http://carpoolptbo.herokuapp.com/searchPost/",a).then((function(t){e.setState({posts:t.data}),console.log(t),0===t.data.length&&alert("No Result Found")}))},e.state={posts:[],startPlace:"",endPlace:""},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(s.jsx)(O.a,{style:{width:"30rem"},children:Object(s.jsxs)(O.a.Body,{children:[Object(s.jsx)(O.a.Subtitle,{className:"mb-2 text-muted text-center",style:{fontSize:"30px"},children:"CarPool PTBO"}),Object(s.jsx)(O.a.Subtitle,{className:"mb-2 text-muted text-center",children:"Find Your Ride"}),Object(s.jsx)(O.a.Text,{children:Object(s.jsxs)(g.a,{children:[Object(s.jsx)(g.a.Label,{children:"Starting Point"}),Object(s.jsx)(g.a.Control,{type:"text",name:"startPlace",placeholder:"Starting Point",required:!0,onChange:this.inputSet}),Object(s.jsx)(g.a.Label,{children:"Destination"}),Object(s.jsx)(g.a.Control,{type:"text",name:"endPlace",placeholder:"Destination",required:!0,onChange:this.inputSet}),Object(s.jsx)(f.a,{variant:"primary",type:"submit",onClick:this.getAllpost,children:"Search"})]})})]})})}),Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(s.jsx)(v.Scrollbars,{style:{height:"20rem",width:"65rem"},children:Object(s.jsx)(y.a,{striped:!0,bordered:!0,hover:!0,variant:"light",style:{},children:Object(s.jsx)("tbody",{children:this.state.posts.sort((function(e,t){return e.date<t.date?1:-1})).map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{children:["Driver: ",e.fname]}),Object(s.jsxs)("td",{children:["Date: ",e.date]}),Object(s.jsxs)("td",{children:["From: ",e.startPlace]}),Object(s.jsxs)("td",{children:["To : ",e.endPlace]}),Object(s.jsxs)("td",{children:["Time: ",e.time]}),Object(s.jsxs)("td",{children:["Contact: ",e.mobile]}),Object(s.jsxs)("td",{children:["Rate: $",e.rate]}),Object(s.jsx)("td",{})]})}))})})})})]})}}]),a}(r.Component),w=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).inputSet=function(t){console.log(t.target.name),e.setState(Object(x.a)({},t.target.name,t.target.value))},e.savePost=function(t){t.preventDefault();var a={startPlace:e.state.start,endPlace:e.state.end,date:e.state.date,time:e.state.time,user_id:e.state.user.id,rate:e.state.rate};console.log(a),""===a.startPlace||""===a.endPlace||""===a.rate||""===a.time||""===a.date||""===a.user_id?alert("Fill all Fields. Please...!"):C.a.post("http://carpoolptbo.herokuapp.com/newPost/",a).then((function(t){console.log(t.status),200===t.status?e.props.history.push("/userHome"):alert("Sorry Something went wrong. Try again Later")}))},e.state={id:"",user:[],endPlace:"",startPlace:"",date:"",time:"",rate:""},sessionStorage.getItem("status")&&(e.state.user=JSON.parse(sessionStorage.getItem("user"))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){!0===!sessionStorage.getItem("status")&&this.props.history.push("/login")}},{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(s.jsxs)(O.a,{border:"primary",style:{width:"30rem"},children:[Object(s.jsx)(O.a.Header,{className:"mb-2 text-muted text-center font-size: 15px",children:"CarPool PTBO"}),Object(s.jsxs)(O.a.Body,{children:[Object(s.jsx)(O.a.Subtitle,{className:"mb-2 text-muted text-center",children:"Create New Post"}),Object(s.jsx)(O.a.Text,{children:Object(s.jsxs)(g.a,{children:[Object(s.jsx)(g.a.Text,{style:{color:"red"},className:"",children:"All Fields Mandatory *"}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(s.jsx)(g.a.Label,{children:"Starting Point"}),Object(s.jsx)(g.a.Control,{type:"text",name:"start",value:this.start,required:!0,placeholder:"Enter Starting Point",onChange:this.inputSet})]}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicFname",children:[Object(s.jsx)(g.a.Label,{children:"Destination"}),Object(s.jsx)(g.a.Control,{type:"text",name:"end",value:this.end,required:!0,placeholder:"Enter Destination ",onChange:this.inputSet})]}),Object(s.jsxs)(g.a.Row,{children:[Object(s.jsxs)(g.a.Group,{controlId:"formBasicLname",children:[Object(s.jsx)(g.a.Label,{children:"Date"}),Object(s.jsx)(g.a.Control,{type:"date",name:"date",value:this.date,required:!0,placeholder:"Enter cchedule Date",onChange:this.inputSet})]}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicLname",children:[Object(s.jsx)(g.a.Label,{children:"Time "}),Object(s.jsx)(g.a.Control,{type:"time",name:"time",value:this.time,required:!0,placeholder:"Enter Scheduled Time",onChange:this.inputSet})]})]}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(s.jsx)(g.a.Label,{children:"Rate In CAD"}),Object(s.jsx)(g.a.Control,{type:"number",name:"rate",value:this.rate,required:!0,placeholder:"$ Rate",onChange:this.inputSet})]}),Object(s.jsx)(f.a,{variant:"primary",type:"submit",onClick:this.savePost,children:"Create"})]})}),Object(s.jsx)(O.a.Link,{href:"/userHome",children:"Cancel"})]})]})})})}}]),a}(n.a.Component),I=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).inputSet=function(t){console.log(e.state.pass),e.setState(Object(x.a)({},t.target.name,t.target.value))},e.validateUser=function(t){t.preventDefault();var a={pass:e.state.pass,email:e.state.email};""===a.email||""===a.pass?alert("Fill all Fields. Please...!"):C.a.post("http://carpoolptbo.herokuapp.com/login/",a).then((function(t){0!==t.data.length?(console.log("in axios login"),sessionStorage.setItem("status",!0),sessionStorage.setItem("user",JSON.stringify(t.data)),e.props.history.push("/userHome")):0===t.data.length?alert("Invalid Email or Password"):e.setState({errorMessage:"Invalid Email or Password. Try again Later"})}))},e.state={email:"",pass:"",errorMessage:"",user:{},redirect:"/userHome"},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){sessionStorage.getItem("status")?(console.log("in esle statement"),this.props.history.push("/userHome")):console.log(sessionStorage.getItem("in did mount if "))}},{key:"render",value:function(){return Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(s.jsx)(O.a,{style:{width:"30rem"},children:Object(s.jsxs)(O.a.Body,{children:[Object(s.jsx)(O.a.Subtitle,{className:"mb-2 text-muted text-center",children:"Login into your Account"}),Object(s.jsx)(O.a.Text,{children:Object(s.jsxs)(g.a,{children:[Object(s.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(s.jsx)(g.a.Label,{children:"Email address"}),Object(s.jsx)(g.a.Control,{type:"email",name:"email",placeholder:"Enter email",required:!0,onChange:this.inputSet}),Object(s.jsx)(g.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(s.jsx)(g.a.Label,{children:"Password"}),Object(s.jsx)(g.a.Control,{type:"password",name:"pass",placeholder:"Password",required:!0,onChange:this.inputSet})]}),this.state.errorMessage&&Object(s.jsxs)("p",{style:{color:"red"},className:"error",children:[" ",this.state.errorMessage," "]}),Object(s.jsx)(f.a,{variant:"primary",type:"submit",onClick:this.validateUser,children:"Submit"})]})}),Object(s.jsx)(O.a.Link,{href:"/register",children:"Create New Account?"})]})})})}}]),a}(r.Component),L=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).inputSet=function(t){console.log(t.target.name),e.setState(Object(x.a)({},t.target.name,t.target.value))},e.saveUser=function(t){t.preventDefault();var a={lname:e.state.lname,fname:e.state.fname,email:e.state.email,pass:e.state.pass,mobile:e.state.mobile};""===a.lname||""===a.fname||""===a.email||""===a.pass||""===a.mobile?alert("Fill all Fields. Please...!"):C.a.post("http://carpoolptbo.herokuapp.com/registration/",a).then((function(t){console.log(t.status),0!==t.data.length?e.props.history.push("/Home"):0===t.data.length?alert("Email Address Already Exist......!"):alert("Server Not Responding")}))},e.state={fname:"",lname:"",email:"",pass:"",cpass:"",mobile:""},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(s.jsxs)(O.a,{border:"primary",style:{width:"30rem"},children:[Object(s.jsx)(O.a.Header,{className:"mb-2 text-muted text-center font-size: 15px",children:"CarPool PTBO"}),Object(s.jsxs)(O.a.Body,{children:[Object(s.jsx)(O.a.Subtitle,{className:"mb-2 text-muted text-center",children:"Enter Your Details"}),Object(s.jsx)(O.a.Text,{children:Object(s.jsxs)(g.a,{children:[Object(s.jsx)(g.a.Text,{style:{color:"red"},className:"",children:"All Fields Mandatory *"}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(s.jsx)(g.a.Label,{children:"Email address"}),Object(s.jsx)(g.a.Control,{type:"email",name:"email",placeholder:"Enter email",onChange:this.inputSet}),Object(s.jsx)(g.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicFname",children:[Object(s.jsx)(g.a.Label,{children:"First Name"}),Object(s.jsx)(g.a.Control,{type:"text",name:"fname",placeholder:"Enter First Name",onChange:this.inputSet})]}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicLname",children:[Object(s.jsx)(g.a.Label,{children:"Last Name"}),Object(s.jsx)(g.a.Control,{type:"text",name:"lname",placeholder:"Enter Last Name",onChange:this.inputSet})]}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicLname",children:[Object(s.jsx)(g.a.Label,{children:"Mobile"}),Object(s.jsx)(g.a.Control,{type:"number",name:"mobile",placeholder:"Mobile",onChange:this.inputSet})]}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(s.jsx)(g.a.Label,{children:"Password"}),Object(s.jsx)(g.a.Control,{type:"password",name:"pass",placeholder:"Password",onChange:this.inputSet})]}),Object(s.jsx)(f.a,{variant:"primary",type:"submit",onClick:this.saveUser,children:"Sign Up"})]})}),Object(s.jsx)(O.a.Link,{href:"/login",children:"Already Registered?"}),Object(s.jsx)(g.a.Text,{className:"text-muted",children:"I Accepted Term & Condition."})]})]})})}}]),a}(r.Component),k=a(102),N=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).inputSet=function(t){console.log(t.target.name),e.setState(Object(x.a)({},t.target.name,t.target.value))},e.logout=function(t){sessionStorage.removeItem("status"),sessionStorage.removeItem("user"),console.log(sessionStorage.getItem("status")),e.props.history.push("/login")},e.update=function(t){t.preventDefault();var a={fname:e.state.user.fname,lname:e.state.user.lname,email:e.state.user.email,id:e.state.user.id,pass:e.state.pass,mobile:e.state.mobile};console.log(a),C.a.post("http://carpoolptbo.herokuapp.com/update/",a).then((function(e){console.log(e.data),200===e.status?alert("Profile Updated"):alert("Sorrrrrry !!!! Un-authenticated User !!!!!")}))},e.state={uid:"",user:[],id:"",posts:[],fname:"",email:"",lname:"",pass:"",mobile:"",loading:!0},sessionStorage.getItem("status")&&(e.state.user=JSON.parse(sessionStorage.getItem("user")),e.id=e.state.user.id,e.fname=e.state.user.fname,e.lname=e.state.user.lname,e.email=e.state.user.email,e.pass=e.state.user.pass,e.mobile=e.state.user.mobile),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;!0===!sessionStorage.getItem("status")?this.props.history.push("/login"):C.a.get("http://carpoolptbo.herokuapp.com/getPost/"+this.id+"/").then((function(t){e.setState({posts:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{class:"",children:Object(s.jsxs)(k.a,{children:[Object(s.jsxs)("div",{class:"",children:[Object(s.jsx)(f.a,{variant:"error",type:"submit",onClick:this.logout,children:"Logout"}),Object(s.jsxs)(O.a,{border:"success",style:{width:"20rem"},children:[Object(s.jsx)(O.a.Header,{className:"mb-2 text-muted text-center font-size: 15px",children:"You Profile Details"}),Object(s.jsxs)(O.a.Body,{children:[Object(s.jsxs)(O.a.Subtitle,{className:"mb-2 text-muted text-center",children:["Welcome Back: ",Object(s.jsxs)("p",{children:[" ",this.state.fname]})]}),Object(s.jsx)(O.a.Text,{children:Object(s.jsxs)(g.a,{children:[Object(s.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(s.jsx)(g.a.Control,{type:"email",name:"email",value:this.email,placeholder:this.email,disabled:!0}),Object(s.jsx)(g.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicFname",children:[Object(s.jsx)(g.a.Label,{children:"First Name"}),Object(s.jsx)(g.a.Control,{type:"text",name:"fname",value:this.name,placeholder:this.fname,disabled:!0})]}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicLname",children:[Object(s.jsx)(g.a.Label,{children:"Last Name"}),Object(s.jsx)(g.a.Control,{type:"text",name:"lname",value:this.lname,placeholder:this.lname,disabled:!0})]}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicLname",children:[Object(s.jsx)(g.a.Label,{children:"Mobile"}),Object(s.jsx)(g.a.Control,{type:"text",name:"mobile",placeholder:this.mobile,onChange:this.inputSet})]}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(s.jsx)(g.a.Label,{children:"Password"}),Object(s.jsx)(g.a.Control,{type:"password",name:"pass",required:!0,placeholder:"Password",onChange:this.inputSet})]}),Object(s.jsx)(f.a,{variant:"success",type:"submit",onClick:this.update,children:"Update"}),Object(s.jsx)(g.a.Text,{className:"text-muted"})]})})]})]})]}),Object(s.jsxs)("div",{class:"col",children:[Object(s.jsxs)("div",{class:"row",children:[Object(s.jsx)("div",{class:"col",children:Object(s.jsx)("h4",{style:{width:"50rem"},children:"Your Ride History"})}),Object(s.jsx)("div",{class:"col",children:Object(s.jsx)(f.a,{variant:"warning",type:"submit",href:"/career",children:"Create Ride"})})]}),Object(s.jsx)("div",{class:"row",children:Object(s.jsx)(v.Scrollbars,{style:{height:"50rem"},children:Object(s.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Ref"}),Object(s.jsx)("th",{children:"Date"}),Object(s.jsx)("th",{children:"Starting Point"}),Object(s.jsx)("th",{children:"Destination"}),Object(s.jsx)("th",{children:"Time"}),Object(s.jsx)("th",{children:"Rate"}),Object(s.jsx)("th",{children:"Action"})]})}),Object(s.jsx)("tbody",{children:this.state.posts.sort((function(e,t){return e.date<t.date?1:-1})).map((function(t,a){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:t.id}),Object(s.jsx)("td",{children:t.date}),Object(s.jsx)("td",{children:t.startPlace}),Object(s.jsx)("td",{children:t.endPlace}),Object(s.jsx)("td",{children:t.time}),Object(s.jsxs)("td",{children:["$",t.rate]}),Object(s.jsx)("td",{children:Object(s.jsx)(f.a,{variant:"danger",type:"submit",onClick:e.update,disabled:!0,children:"Delete"})})]})}))})]})})})]})]})})})}}]),a}(r.Component),B=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={loggedInStatus:"NOT_LOGGED_IN",user:{}},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(u.a,{children:[Object(s.jsx)(m,{}),Object(s.jsxs)(p.c,{children:[Object(s.jsx)(p.a,{path:"/",exact:!0,component:P}),Object(s.jsx)(p.a,{path:"/home",exact:!0,component:P}),Object(s.jsx)(p.a,{path:"/career",component:w}),Object(s.jsx)(p.a,{path:"/login",component:I}),Object(s.jsx)(p.a,{path:"/register",component:L}),Object(s.jsx)(p.a,{path:"/userHome",component:N})]})]})})}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(97);i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(B,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[98,1,2]]]);
//# sourceMappingURL=main.91c03887.chunk.js.map