"use strict";(self.webpackChunkinnotech=self.webpackChunkinnotech||[]).push([[866],{8866:(U,p,r)=>{r.r(p),r.d(p,{EmpleadosModule:()=>q});var d=r(8583),e=r(3018),m=r(3256);let C=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["empleados-home"]],decls:1,vars:0,template:function(t,a){1&t&&e._UZ(0,"router-outlet")},directives:[m.lC],styles:[""]}),o})();var g=r(6713),u=r(1065),A=r(2340),v=r(1841);let x=(()=>{class o{constructor(t){this.http=t,this.APP="area",this.API=`${A.N.URL_API}/${this.APP}`,this.areas=[],this.areas$=new e.vpe}getAreas(){this.http.get(this.API).subscribe(t=>{this.areas=t.data,this.areas$.emit(this.areas)})}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(v.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var i=r(665),f=r(8295),h=r(370),b=r(2458);function T(o,n){if(1&o&&(e.TgZ(0,"mat-option",19),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.nombre)}}let Z=(()=>{class o{constructor(t,a,c){var l,s;this.empleadosService=t,this.route=a,this.areasService=c,this.areas=[],this.empleadoSelecionado=null===(s=null===(l=this.route.getCurrentNavigation())||void 0===l?void 0:l.extras.state)||void 0===s?void 0:s.data,this.cargarAreas(),this.areasService.getAreas()}ngOnInit(){this.empleadoSelecionado?(this.empleadoForm=(0,g.N)(this.empleadoSelecionado),this.btnText="Actualizar"):(this.empleadoForm=(0,g.N)({}),this.btnText="Guardar")}cargarAreas(){this.areasService.areas$.subscribe(t=>{this.areas=t})}add(){"Actualizar"===this.btnText?(this.empleadosService.updateEmpleados(this.empleadoForm.value),console.log(this.empleadoForm.value)):(this.empleadosService.addEmpleados(this.empleadoForm.value),console.log(this.empleadoForm.value))}selectArea(t){console.log(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.J),e.Y36(m.F0),e.Y36(x))},o.\u0275cmp=e.Xpm({type:o,selectors:[["add-empleados"]],decls:31,vars:4,consts:[[1,"formAsignar",3,"formGroup"],[1,"formAsignar",2,"background-color","#ffc872","text-align","left"],[2,"text-align","center"],[2,"color","white","text-align","center"],["color","white",2,"width","50%"],[1,"inputForm"],["for","nombre",2,"color","white"],["type","text","id","nombre","formControlName","nombre","required",""],["for","cedula",2,"color","white"],["type","text","id","cedula","formControlName","cedula","required",""],["for","email",2,"color","white"],["type","text","id","email","formControlName","email","required",""],["for","telefono",2,"color","white"],["type","text","id","telefono","formControlName","telefono"],["for","area",2,"color","white"],["appearance","standard"],["formControlName","area",3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],["id","btnFinalizar","ng-disabled","form.$invalid",3,"click"],[3,"value"]],template:function(t,a){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h2",3),e._uU(4,"Registrar Empleado"),e.qZA(),e._UZ(5,"hr",4),e.qZA(),e.TgZ(6,"div",5),e.TgZ(7,"label",6),e._uU(8,"Nombre completo:"),e.qZA(),e._UZ(9,"input",7),e.qZA(),e.TgZ(10,"div",5),e.TgZ(11,"label",8),e._uU(12,"C\xe9dula:"),e.qZA(),e._UZ(13,"input",9),e.qZA(),e.TgZ(14,"div",5),e.TgZ(15,"label",10),e._uU(16,"Correo:"),e.qZA(),e._UZ(17,"input",11),e.qZA(),e.TgZ(18,"div",5),e.TgZ(19,"label",12),e._uU(20,"Celular:"),e.qZA(),e._UZ(21,"input",13),e.qZA(),e.TgZ(22,"div",5),e.TgZ(23,"label",14),e._uU(24,"Area:"),e.qZA(),e.TgZ(25,"mat-form-field",15),e.TgZ(26,"mat-select",16),e.NdJ("valueChange",function(l){return a.areasSeleccionada=l}),e.YNc(27,T,2,2,"mat-option",17),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(28,"div",2),e.TgZ(29,"button",18),e.NdJ("click",function(){return a.add()}),e._uU(30),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",a.empleadoForm),e.xp6(26),e.Q6J("value",a.areasSeleccionada),e.xp6(1),e.Q6J("ngForOf",a.areas),e.xp6(3),e.hij(" ",a.btnText," "))},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,i.Q7,f.KE,h.gD,d.sg,b.ey],styles:['.formAsignar[_ngcontent-%COMP%]{margin-top:1em;display:flex;flex-direction:column;grid-row-gap:1em;row-gap:1em}.formAsignar[_ngcontent-%COMP%] > hr[_ngcontent-%COMP%]{margin-bottom:1em}.formAsignar[_ngcontent-%COMP%] > .inputForm[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center}.inputForm[_ngcontent-%COMP%]{display:flex;align-items:center}.inputForm[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{width:50%;color:#fff;font-weight:bold;font-size:large}.inputForm[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:48%;height:2em;border:none;padding-left:5px;color:#000}.selectForm[_ngcontent-%COMP%]{width:100%;border:black 2px solid}.accesoriesCheckbox[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;font-size:14px;font-weight:bold}input[type=checkbox][_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;-o-appearance:none;outline:none;content:none}input[type=checkbox][_ngcontent-%COMP%]:before{font-family:"FontAwesome";content:"\\f00c";font-size:15px;color:transparent!important;display:block;width:15px;height:15px;border:2px solid rgb(255,255,255);margin-right:7px}input[type=checkbox][_ngcontent-%COMP%]:checked:before{color:#fff!important}#btnFinalizar[_ngcontent-%COMP%]{border:none;background-color:#7ace67;color:#fff;font-weight:bold;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer}#btnFinalizar[_ngcontent-%COMP%]:hover{background:#5bc92f}#btnFinalizar[_ngcontent-%COMP%]:disabled{background:#dddddd;cursor:default}  .mat-form-field-underline{display:none}mat-form-field.mat-form-field[_ngcontent-%COMP%]{background-color:#fff}']}),o})();function _(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.ALo(15,"date"),e.qZA(),e.TgZ(16,"td"),e.TgZ(17,"a"),e.TgZ(18,"i",3),e.NdJ("click",function(){const l=e.CHM(t).$implicit;return e.oxw().redirect(l)}),e.qZA(),e.qZA(),e.TgZ(19,"i",4),e.NdJ("click",function(){const l=e.CHM(t).$implicit;return e.oxw().empleadosService.deleteEmpleados(l.id)}),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=n.$implicit;e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu(t.nombre),e.xp6(2),e.Oqu(t.cedula),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Oqu(t.telefono),e.xp6(2),e.hij(" ",t.area.nombre," "),e.xp6(2),e.hij(" ",e.lcZ(15,7,t.createdAt)," ")}}let O=(()=>{class o{constructor(t,a){this.empleadosService=t,this.router=a}ngOnInit(){this.empleadosService.getEmpleados()}redirect(t){this.router.navigate(["/app/modules/empleados/add"],{state:{data:t}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.J),e.Y36(m.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["list-empleados"]],decls:23,vars:1,consts:[[1,"tableContainer"],["color","white"],[4,"ngFor","ngForOf"],[1,"fa","fa-pencil-square",2,"font-size","25px","padding-right","2px","cursor","pointer",3,"click"],[1,"fa","fa-times-rectangle",2,"font-size","25px","cursor","pointer","color","red",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2,"Empleados"),e.qZA(),e._UZ(3,"hr",1),e.TgZ(4,"table"),e.TgZ(5,"tr"),e.TgZ(6,"th"),e._uU(7,"Ingreso"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Empleado"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"C\xe9dula"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Correo"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Celular"),e.qZA(),e.TgZ(16,"th"),e._uU(17,"Area"),e.qZA(),e.TgZ(18,"th"),e._uU(19,"Fecha Registro"),e.qZA(),e.TgZ(20,"th"),e._uU(21,"Acciones"),e.qZA(),e.qZA(),e.YNc(22,_,20,9,"tr",2),e.qZA(),e.qZA()),2&t&&(e.xp6(22),e.Q6J("ngForOf",a.empleadosService.empleadosLista1))},directives:[d.sg],pipes:[d.uU],styles:[".tableContainer[_ngcontent-%COMP%]{margin-top:2em;width:100%;height:80%}table[_ngcontent-%COMP%]{width:100%;background-color:#fff;border-collapse:collapse}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;text-align:center;background-color:#7ace67;color:#fff}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #ddd;padding:7px;text-align:center}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2f2}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}.tableContainer[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{color:#f0ffe5;text-align:center;margin:.5em}.tableContainer[_ngcontent-%COMP%] > hr[_ngcontent-%COMP%]{width:50%;margin-bottom:1em}"]}),o})();var F=r(8633),P=r(9983);const M=[{path:"",component:C,children:[{path:"add/:id",component:Z},{path:"add",component:Z},{path:"list",component:O}]}];let q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.ez,m.Bz.forChild(M),F.Y,i.u5,i.UX,h.LD,f.lN,P.c]]}),o})()}}]);