(window["t"]=window["t"]||[]).push([["chunk-58d44302"],{2532:function(e,t,s){"use strict";var a=s("23e7"),i=s("5a34"),n=s("1d80"),r=s("577e"),l=s("ab13");a({target:"String",s:!0,i:!l("includes")},{includes:function(e){return!!~r(n(this)).indexOf(r(i(e)),arguments.length>1?arguments[1]:void 0)}})},l:function(e,t,s){var a=s("44e7");e.o=function(e){if(a(e))throw TypeError("The method doesn't accept regular expressions");return e}},u:function(e,t,s){},m:function(e,t,s){"use strict";var a=s("23e7"),i=s("d039"),n=s("e8b5"),r=s("861d"),l=s("7b0b"),o=s("50c4"),c=s("8418"),u=s("65f0"),d=s("1dde"),f=s("b622"),m=s("2d00"),h=f("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",b=m>=51||!i((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),g=d("concat"),_=function(e){if(!r(e))return!1;var t=e[h];return void 0!==t?!!t:n(e)},C=!b||!g;a({target:"Array",s:!0,i:C},{concat:function(e){var t,s,a,i,n,r=l(this),d=u(r,0),f=0;for(t=-1,a=arguments.length;t<a;t++)if(n=-1===t?r:arguments[t],_(n)){if(i=o(n.length),f+i>p)throw TypeError(v);for(s=0;s<i;s++,f++)s in n&&c(d,f,n[s])}else{if(f>=p)throw TypeError(v);c(d,f++,n)}return d.length=f,d}})},h:function(e,t,s){var a=s("b622"),i=a("match");e.o=function(e){var t=/./;try{"/./"[e](t)}catch(s){try{return t[i]=!1,"/./"[e](t)}catch(a){}}return!1}},p:function(e,t,s){"use strict";s("5e77")},v:function(e,t,s){"use strict";var a=s("23e7"),i=s("4d64").includes,n=s("44d2");a({target:"Array",s:!0},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("includes")},g:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._,s=e.k.C||t;return s("div",{j:"layout-general"},[s("form",{j:"form-general card-bg-theme p-6 rounded shadow",O:{submit:function(t){return e.submit(t)}}},[s("div",{j:"form-general__header"},[s("h2",[e.P(e.R(e.L))]),s("router-link",{U:{A:"/users"}},[s("b-button",{U:{text:"Kembali",N:"chevron-left",type:"button"}})],1)],1),s("div",{j:"form-general__body"},[s("div",{j:"grid grid-cols-11 gap-8 mb-16"},[e.G(0),s("div",{j:"col-span-7"},[s("div",{j:"field"},[s("label",{j:"field-label"},[e.P("Nama Pengguna")]),s("input",{T:[{name:"model",D:"v-model",value:e.K.name,q:"model.name"}],j:"field-style",U:{placeholder:"Nama Pengguna",type:"text"},S:{value:e.K.name},O:{input:function(t){t.target.B||e.M(e.K,"name",t.target.value)}}}),e.I.K.name.F?s("span",{j:"field-message text-red-500"},[e.P("Nama Pengguna wajib diisi & maksimal 255 karakter.")]):e.Y(),""!==e.$?s("span",{j:"field-message text-red-500"},[e.P(e.R(e.$))]):e.Y()]),s("div",{j:"field"},[s("label",{j:"field-label"},[e.P("Username")]),s("input",{T:[{name:"model",D:"v-model",value:e.K.username,q:"model.username"}],j:"field-style",U:{placeholder:"Username",type:"text"},S:{value:e.K.username},O:{input:function(t){t.target.B||e.M(e.K,"username",t.target.value)}}}),e.I.K.username.F?s("span",{j:"field-message text-red-500"},[e.P("Username wajib diisi & maksimal 255 karakter.")]):e.Y(),""!==e.H?s("span",{j:"field-message text-red-500"},[e.P(e.R(e.H))]):e.Y()]),s("div",{j:"field"},[s("label",{j:"field-label"},[e.P("Alamat Email")]),s("input",{T:[{name:"model",D:"v-model",value:e.K.email,q:"model.email"}],j:"field-style",U:{placeholder:"Email",type:"email"},S:{value:e.K.email},O:{input:function(t){t.target.B||e.M(e.K,"email",t.target.value)}}}),e.I.K.email.F?s("span",{j:"field-message text-red-500"},[e.P("Email wajib diisi, format email, & maksimal 255 karakter.")]):e.Y(),""!==e.J?s("span",{j:"field-message text-red-500"},[e.P(e.R(e.J))]):e.Y()]),s("div",{j:"field"},[s("label",{j:"field-label"},[e.P("Role")]),"loading"===e.V.status?s("div",{j:"field-style field-style--loading"},[s("b-loading",{U:{kind:"circular"}})],1):s("div",{j:"relative"},[s("select",{T:[{name:"model",D:"v-model",value:e.K.W,q:"model.role_id"}],j:"field-style",O:{X:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e.Z:e.value;return t}));e.M(e.K,"role_id",t.target.multiple?s:s[0])}}},[s("option",{U:{value:""}},[e.P("- Pilih Role -")]),e.list&&e.list.length>0?e.ee(e.list,(function(t,a){return s("option",{key:t.id,S:{value:t.id}},[e.P(e.R(t.name))])})):e.Y()],2),s("div",{j:"field-icon"},[s("b-button",{U:{te:"chevron-down"}})],1)]),e.I.K.W.F?s("span",{j:"field-message text-red-500"},[e.P("Role wajib diisi.")]):e.Y(),""!==e.se?s("span",{j:"field-message text-red-500"},[e.P(e.R(e.se))]):e.Y()]),"analis"===e.ae?s("div",{j:"field"},[s("label",{j:"field-label"},[e.P("Kasus")]),s("multiselect",{U:{options:e.ie,multiple:!0,ne:"bottom",placeholder:"Tulis keyword disini (minimal 3 karakter)",re:"name",label:"name",le:e.oe,ce:!0,ue:!1,de:!1,fe:!1,me:300,"max-height":600,he:!0,pe:!1},O:{ve:e.be},K:{value:e.ge,_e:function(t){e.ge=t},q:"input_assign_to_case"}},[s("span",{U:{Ce:"noResult"},Ce:"noResult"},[e.P("keywords yang dicari tidak ditemukan.")])]),e.I.K.we.F?s("span",{j:"field-message text-red-500"},[e.P("Kasus wajib diisi.")]):e.Y(),""!==e.ye?s("span",{j:"field-message text-red-500"},[e.P(e.R(e.ye))]):e.Y()],1):e.Y(),"analis"===e.ae||"kepala-tim"===e.ae?s("div",{j:"field"},[e.G(1),"loading"===e.xe.status?s("div",{j:"field-style field-style--loading"},[s("b-loading",{U:{kind:"circular"}})],1):s("div",{j:"relative"},[s("select",{T:[{name:"model",D:"v-model",value:e.K.ke,q:"model.upline_id"}],j:"field-style",O:{X:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e.Z:e.value;return t}));e.M(e.K,"upline_id",t.target.multiple?s:s[0])}}},[s("option",{U:{value:""}},[e.P("- Pilih Atasan -")]),e.je&&e.je.Oe&&e.je.Oe.length>0?e.ee(e.je.Oe,(function(t,a){return s("option",{key:t.id,S:{value:t.id}},[e.P(e.R(t.name))])})):e.Y()],2),s("div",{j:"field-icon"},[s("b-button",{U:{te:"chevron-down"}})],1)]),e.I.K.ke.F?s("span",{j:"field-message text-red-500"},[e.P("Atasan wajib diisi.")]):e.Y(),""!==e.Ee?s("span",{j:"field-message text-red-500"},[e.P(e.R(e.Ee))]):e.Y()]):e.Y()])]),"GeneralUsersEdit"===e.Pe?[s("div",{j:"grid grid-cols-11 gap-8 mb-16"},[e.G(2),s("div",{j:"col-span-7"},[s("div",{j:"field"},[s("label",{j:"field-label"},[e.P("Kata sandi")]),s("input",{T:[{name:"model",D:"v-model",value:e.K.password,q:"model.password"}],j:"field-style",U:{placeholder:"Password",type:"password"},S:{value:e.K.password},O:{input:function(t){t.target.B||e.M(e.K,"password",t.target.value)}}}),e.I.K.password.F?s("span",{j:"field-message text-red-500"},[e.P("Kata sandi minimal 6 karakter & maksimal 255 karakter.")]):e.Y(),""!==e.Re?s("span",{j:"field-message text-red-500"},[e.P(e.R(e.Re))]):e.Y()]),s("div",{j:"field"},[s("label",{j:"field-label"},[e.P("Ulangi kata sandi")]),s("input",{T:[{name:"model",D:"v-model",value:e.K.Le,q:"model.repeat_password"}],j:"field-style",U:{placeholder:"Repeat Password",type:"password"},S:{value:e.K.Le},O:{input:function(t){t.target.B||e.M(e.K,"repeat_password",t.target.value)}}}),e.I.K.Le.F?s("span",{j:"field-message text-red-500"},[e.P("Kata sandi harus sama")]):e.Y(),""!==e.Ue?s("span",{j:"field-message text-red-500"},[e.P(e.R(e.Ue))]):e.Y()])])])]:e.Y()],2),s("div",{j:"form-general__footer"},[s("b-button",{U:{text:"Reset",type:"button"},Ae:{click:function(t){return e.reset()}}}),s("b-button",{U:{text:"Simpan",kind:"primary",type:"submit"}})],1)])])},i=[function(){var e=this,t=e._,s=e.k.C||t;return s("div",{j:"col-span-4 pr-12"},[s("h2",{j:"text-xl font-bold mb-2"},[e.P("Pengguna")]),s("p",{j:"text-gray-400"},[e.P("Pastikan Informasi pengguna diisi sesuai dengan kebutuhan peran.")])])},function(){var e=this,t=e._,s=e.k.C||t;return s("label",{j:"field-label"},[e.P("Atasan "),s("sup",[e.P("*")])])},function(){var e=this,t=e._,s=e.k.C||t;return s("div",{j:"col-span-4 pr-12"},[s("h2",{j:"text-xl font-bold mb-2"},[e.P("Kata Sandi")]),s("p",{j:"text-gray-400"},[e.P("Silakan perbaharui kata sandi bila perlu.")])])}],n=s("1da1"),r=s("5530"),l=(s("96cf"),s("b0c0"),s("d81d"),s("ac1f"),s("5319"),s("a15b"),s("4de4"),s("b64b"),s("caad"),s("2532"),s("99af"),s("2f62")),o=s("b5ae"),c=s("8e5f"),u=s.n(c),d=(s("e607"),{name:"GeneralUsersForm",Ne:{Ge:u.a},data:function(){return{Pe:"",Te:!1,ae:"",ge:[],ie:[],oe:!1,timeout:null,K:{name:"",username:"",email:"",W:"",we:"",ke:"",password:"",Le:""},$:"",H:"",J:"",se:"",ye:"",Ee:"",Re:"",Ue:""}},De:{K:{name:{required:o["required"],maxLength:Object(o["maxLength"])(255)},username:{required:o["required"],maxLength:Object(o["maxLength"])(255)},email:{required:o["required"],maxLength:Object(o["maxLength"])(255),email:o["email"]},W:{required:o["required"]},we:{},ke:{required:Object(o["Ke"])((function(){return"analis"===this.ae||"kepala-tim"===this.ae}))},password:{qe:Object(o["qe"])(6)},Le:{qe:Object(o["qe"])(6),Se:Object(o["Be"])("password")}}},Me:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(l["b"])("users",["detail"])),Object(l["b"])("users",{xe:function(e){return e.V},je:function(e){return e.list}})),Object(l["b"])("roles",["status_list","list"])),Object(l["b"])("cases",{Fe:function(e){return e.V},Ie:function(e){return e.list}})),{},{id:function(){return this.$e.Ye.id},data:function(){return this.$e.Ye.data},L:function(){var e="Ubah Pengguna";return"GeneralUsersCreate"===this.Pe&&(e="Tambah Pengguna"),e}}),watch:{id:function(){},L:function(){},detail:function(e){this.K.name=e.name?e.name:"",this.K.username=e.username?e.username:"",this.K.email=e.email?e.email:"",this.K.W=e.W?e.W:"",e.ze&&e.ze.label&&"analis"===e.ze.label&&e.we&&(this.ge=e.we.map((function(e){return{name:e,id:e}}))),this.K.ke=e.ke?e.ke:""},He:function(e){""!==e&&null!==e&&(this.K.username=e.replace(/\s+/g,"_"))},Je:function(e){this.Qe()},ge:function(e){var t=e;t=t.map((function(e){return e.id})),t=t.join(","),this.K.we=t},list:function(){this.Qe()},ae:function(e){this.Ve()},Fe:function(e){"loading"===e.status?this.oe=!0:this.oe=!1},Ie:function(e){e.We&&e.We.length>0&&(this.ie=e.We),console.log(this.ie)}},Xe:{Qe:function(){var e=this.K.W;""!==this.K.W&&this.list&&this.list.length>0&&(e=this.list.filter((function(t){return t.id===e}))[0].label),"analis"!==e&&this.list&&this.list.length>0&&(this.ge=[]),this.ae=e},Ve:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.Ze=t.next){case 0:return!1===e.Te&&(e.K.ke=""),!0===e.Te&&(e.Te=!1),t.next=4,e.tt.et("users/setList",{});case 4:"analis"!==e.ae&&"kepala-tim"!==e.ae||(s="",a=[],a="analis"===e.ae?e.list.filter((function(e){return"kepala-tim"===e.label})):e.list.filter((function(e){return"kasubdit"===e.label})),a.length>0&&(s=a[0].id),""!==s&&e.tt.st("users/getList",[100,1,s]));case 5:case"end":return t.stop()}}),t)})))()},be:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.Ze=s.next){case 0:e.length>2&&(clearTimeout(t.timeout),a=t,t.timeout=setTimeout((function(){a.oe=!0,a.ie=[],a.tt.st("cases/getList",[100,1,e])}),650));case 1:case"end":return s.stop()}}),s)})))()},at:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];for(var t in Object.keys(this.K))!0===e&&(this.K[Object.keys(this.K)[t]]="")},it:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;!0===e?(this.$="",this.H="",this.J="",this.se="",this.ye="",this.Ee="",this.Re="",this.Ue=""):!0!==e&&null!==t&&(this.$=t.name?t.name:"",this.H=t.username?t.username:"",this.J=t.email?t.email:"",this.se=t.W?t.W:"",this.ye=t.we?t.we:"",this.Ee=t.ke?t.ke:"",this.Re=t.password?t.password:"",this.Ue=t.Le?t.Le:"")},reset:function(){var e=arguments,t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.Ze=s.next){case 0:a=e.length>0&&void 0!==e[0]&&e[0],!0===a?(t.at(!0),t.nt((function(){t.I.rt()})),t.it(!0),window.scroll({top:0,left:0,behavior:"smooth"})):t.ot.lt({icon:"warning",title:"Are you sure you want to reset form?",ct:"Yes!",ut:"#DD6B55",dt:!0,ft:!1}).then((function(e){e.ht&&t.getData()}));case 2:case"end":return s.stop()}}),s)})))()},getData:function(){var e=arguments,t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.Ze=s.next){case 0:return e.length>0&&void 0!==e[0]&&e[0],t.reset(!0),"GeneralUsersEdit"===t.Pe&&Event.$emit("showLoading",!0),s.next=5,t.tt.st("roles/getList",[100,1]);case 5:"GeneralUsersEdit"===t.Pe?t.tt.st("users/getDetail",t.id).then((function(e){"success"===e?Event.$emit("showLoading",!1):Event.$emit("error")})):t.tt.et("users/setDetail",{});case 6:case"end":return s.stop()}}),s)})))()},submit:function(e){var t=this,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.preventDefault(),this.I.pt(),this.I.K.vt){for(var a in Object.keys(this.I.K)){var i=Object.keys(this.I.K)[a];if(i.includes("$"))return!1;if(this.I.K[i].F)break}window.scrollTo(0,0)}else{var n=this.K;console.log(n),n=Object.keys(n).map((function(e){return n[e]})),console.log(n),"GeneralUsersCreate"===this.Pe?this.tt.st("users/create",n).then((function(e){"success"===e.result?(!1===s?t.bt.push("/users"):t.bt.push("/users/"+e.data.data.id+"/edit"),t.ot.lt({icon:"success",title:"Data successfully created!",gt:3e3})):e.data.message&&e.data.message._t?(t.it(!1,e.data.message._t),Event.$emit("showLoading",!1),window.scrollTo(0,0)):Event.$emit("error")})):(n=[this.id].concat(n),this.tt.st("users/update",n).then((function(e){"success"===e.result?(!1===s&&t.bt.push("/users"),t.ot.lt({icon:"success",title:"Data berhasil diperbarui",gt:3e3})):e.data.message&&e.data.message._t?(t.it(!1,e.data.message._t),Event.$emit("showLoading",!1),window.scrollTo(0,0)):Event.$emit("error")})))}}},Ct:function(){},wt:function(e,t,s){s((function(t){t.Pe=e.name,"GeneralUsersCreate"!==e.name&&"GeneralUsersEdit"!==e.name||(t.getData(),"GeneralUsersEdit"===e.name&&(t.Te=!0))}))},yt:function(e,t,s){this.Pe="",this.tt.et("users/setDetail",{}),s()},xt:function(){}}),f=d,m=(s("c99c"),s("2877")),h=Object(m["a"])(f,a,i,!1,null,null,null);t["default"]=h.o},kt:function(e,t,s){}}]);
//# sourceMappingURL=chunk-58d44302.fc92afb5.js.map