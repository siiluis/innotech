"use strict";(self.webpackChunkinnotech=self.webpackChunkinnotech||[]).push([[819],{5819:(U,u,c)=>{c.r(u),c.d(u,{EquiposModule:()=>P});var d=c(8583),e=c(3018),p=c(3256);let q=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["equipos-home"]],decls:1,vars:0,template:function(t,i){1&t&&e._UZ(0,"router-outlet")},directives:[p.lC],styles:[""]}),o})();var n=c(665);function g(o){return new n.cw({id:new n.NI(o.id),tipoEquipo:new n.NI(o.tipoEquipo,[n.kI.required]),serial:new n.NI(o.serial,[n.kI.required]),ram:new n.NI(o.ram,[n.kI.required]),procesador:new n.NI(o.procesador,[n.kI.required]),discoDuro:new n.NI(o.procesador,[n.kI.required]),licencias:new n.NI})}var m=c(9397),C=c(7177),f=c(8295),Z=c(370),A=c(2458);function T(o,r){if(1&o&&(e.TgZ(0,"mat-option",22),e._uU(1),e.qZA()),2&o){const t=r.$implicit;e.Q6J("value",t),e.xp6(1),e.AsE("",t.producto," - ",t.productoSerial,"")}}const _=function(){return{standalone:!0}};let h=(()=>{class o{constructor(t,i,l){var a,s;this.equiposService=t,this.route=i,this.licenciasService=l,this.idEquipo=void 0,this.equipoSeleccionado=null===(s=null===(a=this.route.getCurrentNavigation())||void 0===a?void 0:a.extras.state)||void 0===s?void 0:s.data,this.cargarLicencias(),this.licenciasService.getLicencias()}ngOnInit(){this.equipoSeleccionado?(this.equipoForm=g(this.equipoSeleccionado),this.btnText="Actualizar"):(this.equipoForm=g({}),this.btnText="Guardar")}add(){this.equipoForm.patchValue({licencias:this.selectedLicencias}),"Actualizar"===this.btnText?this.equiposService.updateEquipo(this.equipoForm.value):this.equiposService.addEquipo(this.equipoForm.value)}cargarLicencias(){this.licenciasService.licencias$.subscribe(t=>{this.licencias=t})}comparer(t,i){return t&&i?t.id===i.id:i==i}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.u),e.Y36(p.F0),e.Y36(C.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["add-equipo"]],decls:44,vars:7,consts:[[1,"formAsignar",3,"formGroup"],[1,"formAsignar",2,"background-color","#ffc872","text-align","left"],[2,"text-align","center"],[2,"color","white","text-align","center"],["color","white",2,"width","50%"],[1,"inputForm"],["for","selectedTipo"],["formControlName","tipoEquipo"],["value","LAPTOP"],["value","DESKTOP"],["for","serialNumber"],["type","text","id","serialNumber","formControlName","serial"],["color","white"],["for","tipo_equipo"],["type","text","formControlName","ram"],["type","text","formControlName","procesador"],["type","text","formControlName","discoDuro"],["for","area",2,"color","white"],["multiple","",3,"ngModel","compareWith","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"inputForm",2,"margin-top","3em"],["id","btnFinalizar",3,"click"],[3,"value"]],template:function(t,i){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h2",3),e._uU(4,"Registrar Equipo"),e.qZA(),e._UZ(5,"hr",4),e.qZA(),e.TgZ(6,"div",5),e.TgZ(7,"label",6),e._uU(8,"TIPO EQUIPO:"),e.qZA(),e.TgZ(9,"mat-form-field"),e.TgZ(10,"mat-select",7),e.TgZ(11,"mat-option",8),e._uU(12,"LAPTOP"),e.qZA(),e.TgZ(13,"mat-option",9),e._uU(14,"DESKTOP"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(15,"div",5),e.TgZ(16,"label",10),e._uU(17,"SERIAL:"),e.qZA(),e._UZ(18,"input",11),e.qZA(),e.TgZ(19,"div"),e.TgZ(20,"h2",3),e._uU(21,"CARACTERISTICAS"),e.qZA(),e._UZ(22,"hr",12),e.qZA(),e.TgZ(23,"div",5),e.TgZ(24,"label",13),e._uU(25,"RAM ( GB ):"),e.qZA(),e._UZ(26,"input",14),e.qZA(),e.TgZ(27,"div",5),e.TgZ(28,"label",13),e._uU(29,"CPU :"),e.qZA(),e._UZ(30,"input",15),e.qZA(),e.TgZ(31,"div",5),e.TgZ(32,"label",13),e._uU(33,"DISCO ( GB ):"),e.qZA(),e._UZ(34,"input",16),e.qZA(),e.TgZ(35,"div",5),e.TgZ(36,"label",17),e._uU(37,"Licencias:"),e.qZA(),e.TgZ(38,"mat-form-field"),e.TgZ(39,"mat-select",18),e.NdJ("ngModelChange",function(a){return i.selectedLicencias=a}),e.YNc(40,T,2,3,"mat-option",19),e.qZA(),e.qZA(),e.qZA(),e.TgZ(41,"div",20),e.TgZ(42,"button",21),e.NdJ("click",function(){return i.add()}),e._uU(43),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",i.equipoForm),e.xp6(39),e.Q6J("ngModel",i.selectedLicencias)("compareWith",i.comparer)("ngModelOptions",e.DdM(6,_)),e.xp6(1),e.Q6J("ngForOf",i.licencias),e.xp6(3),e.hij(" ",i.btnText," "))},directives:[n._Y,n.JL,n.sg,f.KE,Z.gD,n.JJ,n.u,A.ey,n.Fj,n.On,d.sg],styles:['.formAsignar[_ngcontent-%COMP%]{margin-top:1em;display:flex;flex-direction:column;grid-row-gap:1em;row-gap:1em}.formAsignar[_ngcontent-%COMP%] > hr[_ngcontent-%COMP%]{margin-bottom:1em;width:80%}.formAsignar[_ngcontent-%COMP%] > .inputForm[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.inputForm[_ngcontent-%COMP%]{display:flex;align-items:center}.inputForm[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{width:50%;color:#fff;font-weight:bold;font-size:large}.inputForm[_ngcontent-%COMP%] > input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{height:2em;border:none;padding-left:5px;color:#000}.selectForm[_ngcontent-%COMP%]{width:100%;border:black 2px solid}.accesoriesCheckbox[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;font-size:14px;font-weight:bold}input[type=checkbox][_ngcontent-%COMP%]{-moz-appearance:none;-webkit-appearance:none;-o-appearance:none;outline:none;content:none}input[type=checkbox][_ngcontent-%COMP%]:before{font-family:"FontAwesome";content:"\\f00c";font-size:15px;color:transparent!important;display:block;width:15px;height:15px;border:2px solid rgb(255,255,255);margin-right:7px}input[type=checkbox][_ngcontent-%COMP%]:checked:before{color:#fff!important}#btnFinalizar[_ngcontent-%COMP%]{border:none;background-color:#7ace67;color:#fff;font-weight:bold;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer}#btnFinalizar[_ngcontent-%COMP%]:hover{background:#5bc92f}#btnFinalizar[_ngcontent-%COMP%]:disabled{background:#dddddd;cursor:default}  .mat-form-field-underline{display:none}mat-form-field.mat-form-field[_ngcontent-%COMP%]{background-color:#fff}']}),o})();function x(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.ALo(17,"date"),e.qZA(),e.TgZ(18,"td"),e.TgZ(19,"a"),e.TgZ(20,"i",3),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw().redirect(a)}),e.qZA(),e.qZA(),e.TgZ(21,"i",4),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw().equiposService.deleteEquipo(a.id)}),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=r.$implicit;e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu("0"===t.disponible?"NO":"SI"),e.xp6(2),e.hij(" ",t.tipoEquipo," "),e.xp6(2),e.Oqu(t.serial),e.xp6(2),e.Oqu(t.procesador),e.xp6(2),e.hij("",t.ram," GB"),e.xp6(2),e.hij("",t.discoDuro," GB"),e.xp6(2),e.Oqu(e.lcZ(17,8,t.createdAt))}}let b=(()=>{class o{constructor(t,i){this.equiposService=t,this.router=i}ngOnInit(){this.equiposService.getEquipos()}redirect(t){this.router.navigate(["/app/modules/equipos/add"],{state:{data:t}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.u),e.Y36(p.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["list-equipo"]],decls:25,vars:1,consts:[["color","white"],[1,"tableContainer"],[4,"ngFor","ngForOf"],[1,"fa","fa-pencil-square",2,"font-size","25px","padding-right","2px","cursor","pointer",3,"click"],[1,"fa","fa-times-rectangle",2,"font-size","25px","cursor","pointer","color","red",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Equipos"),e.qZA(),e._UZ(2,"hr",0),e.TgZ(3,"div",1),e.TgZ(4,"table"),e.TgZ(5,"tr"),e.TgZ(6,"th"),e._uU(7,"ID"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Disponible"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Tipo Equipo"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Serial"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Procesador"),e.qZA(),e.TgZ(16,"th"),e._uU(17,"Memoria Ram"),e.qZA(),e.TgZ(18,"th"),e._uU(19,"Disco Duro"),e.qZA(),e.TgZ(20,"th"),e._uU(21,"Fecha Creacion"),e.qZA(),e.TgZ(22,"th"),e._uU(23,"Acciones"),e.qZA(),e.qZA(),e.YNc(24,x,22,10,"tr",2),e.qZA(),e.qZA()),2&t&&(e.xp6(24),e.Q6J("ngForOf",i.equiposService.equiposLista))},directives:[d.sg],pipes:[d.uU],styles:[".tableContainer[_ngcontent-%COMP%]{margin-top:2em;height:80%;overflow:auto}table[_ngcontent-%COMP%]{width:100%;background-color:#fff;border-collapse:collapse}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;text-align:center;background-color:#7ace67;color:#fff}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #ddd;padding:7px;text-align:center}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2f2}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}h1[_ngcontent-%COMP%]{color:#f0ffe5;text-align:center;margin:.5em}.tableContainer[_ngcontent-%COMP%] > hr[_ngcontent-%COMP%]{width:50%;margin-bottom:1em}"]}),o})();var v=c(8633),O=c(9983);const M=[{path:"",component:q,children:[{path:"add/:id",component:h},{path:"add",component:h},{path:"list",component:b}]}];let P=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.ez,p.Bz.forChild(M),v.Y,n.u5,n.UX,Z.LD,f.lN,O.c]]}),o})()}}]);