(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+ac7":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia-clinica/visitas/visitas3-paciente-form/visitas3-paciente-form.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: Visitas3PacienteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visitas3PacienteFormComponent", function() { return Visitas3PacienteFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../template/menu/menu-visitas/menu-visitas.component */ "duu2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function Visitas3PacienteFormComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Visitas3PacienteFormComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Visitas3PacienteFormComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Visitas3PacienteFormComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class Visitas3PacienteFormComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"); //Fecha Actual
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            paciente_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            inmunidad_celular_humoral: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            fecha_inmunidad_celular_humoral: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        this.comboListService.getVisitaTre(params.id) // obtengo el juego con el parametro del id
            .subscribe(res => {
            console.log(res);
            this.pacientes = res;
            this.Form.patchValue({
                paciente_id: this.pacientes.paciente_id,
                inmunidad_celular_humoral: this.pacientes.inmunidad_celular_humoral,
                fecha_inmunidad_celular_humoral: this.pacientes.fecha_inmunidad_celular_humoral,
            });
            this.edit = true;
        }, err => console.log(err));
    }
    Guardar() {
        const params = this.activatedRoute.snapshot.params;
        this.Form.get('paciente_id').setValue(params.id);
        this.comboListService.saveVisitaTres(this.Form.value).subscribe(res => {
            console.log(res);
            //this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateVisitaTres(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
Visitas3PacienteFormComponent.ɵfac = function Visitas3PacienteFormComponent_Factory(t) { return new (t || Visitas3PacienteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"])); };
Visitas3PacienteFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Visitas3PacienteFormComponent, selectors: [["app-visitas3-paciente-form"]], decls: 38, vars: 7, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-home", 1, "tab-pane", "fade", "show", "active"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-1"], [1, "btn", "btn-primary"], ["type", "radio", "name", "inmunidad_celular_humoral", "id", "inmunidad_celular_humoral", "value", "si", "formControlName", "inmunidad_celular_humoral", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger"], ["type", "radio", "name", "inmunidad_celular_humoral", "id", "inmunidad_celular_humoral", "value", "no", "formControlName", "inmunidad_celular_humoral", 3, "ngModel", "ngModelChange"], [1, "col-sm-10"], ["type", "date", "onkeydown", "return false", "id", "example-date-input", "formControlName", "fecha_inmunidad_celular_humoral", 1, "form-control", 3, "max", "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function Visitas3PacienteFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-menu-visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "VISITA 3 PACIENTE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Toma de muestra de inmunidad celular y humoral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas3PacienteFormComponent_Template_input_ngModelChange_24_listener($event) { return ctx.pacientes.inmunidad_celular_humoral = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas3PacienteFormComponent_Template_input_ngModelChange_28_listener($event) { return ctx.pacientes.inmunidad_celular_humoral = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas3PacienteFormComponent_Template_input_ngModelChange_34_listener($event) { return ctx.pacientes.fecha_inmunidad_celular_humoral = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, Visitas3PacienteFormComponent_button_35_Template, 2, 0, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, Visitas3PacienteFormComponent_button_36_Template, 2, 0, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "footer", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.inmunidad_celular_humoral);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.inmunidad_celular_humoral);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("max", ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.fecha_inmunidad_celular_humoral);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__["MenuVisitasComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNpdGFzMy1wYWNpZW50ZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jhon\Documents\proyectos\angular\espromed\web\src\main.ts */"zUnb");


/***/ }),

/***/ "1dbe":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/admin/vacunados/vacunados-list-admin/vacunados-list-admin.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: VacunadosListAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacunadosListAdminComponent", function() { return VacunadosListAdminComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _compoonents_admin_template_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../compoonents/admin/template/menu/menu-admin/menu-admin.component */ "pD0S");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");











const _c0 = function (a1) { return ["/vacunados/admin/edit", a1]; };
function VacunadosListAdminComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacuna_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 9, vacuna_r1.cedula));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 11, vacuna_r1.nombres), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 13, vacuna_r1.apellidos), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 15, vacuna_r1.sexo));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 17, vacuna_r1.fecha_nacimiento));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 19, vacuna_r1.dosis1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 21, vacuna_r1.dosis2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 23, vacuna_r1.dosis3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c0, vacuna_r1.id));
} }
const _c1 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
class VacunadosListAdminComponent {
    constructor(comboListService, auth, router) {
        this.comboListService = comboListService;
        this.auth = auth;
        this.router = router;
        this.vacunas = [];
        this.paginate = 1;
        this.usuarios = [];
    }
    ngOnInit() {
        this.getVacunados();
    }
    getVacunados() {
        this.comboListService.getVacunados().subscribe(res => {
            this.vacunas = res;
            console.log(res);
        }, err => {
            console.log(err);
            if (err.status === 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error!', 'El servidor no esta activo, no podra ver los datos...', 'error');
            }
        });
    }
}
VacunadosListAdminComponent.ɵfac = function VacunadosListAdminComponent_Factory(t) { return new (t || VacunadosListAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_2__["CombolistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
VacunadosListAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VacunadosListAdminComponent, selectors: [["app-vacunados-list-admin"]], decls: 48, vars: 10, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], [1, "col-md-4"], [1, "float-right"], ["type", "text", "name", "filter", "placeholder", "Buscar...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "mt-0", "header-title"], [1, "table-rep-plugin"], ["data-pattern", "priority-columns", 1, "table-responsive", "b-0"], ["id", "tech-companies-1", 1, "table", "table-striped"], ["data-priority", "1"], ["data-priority", "3"], [4, "ngFor", "ngForOf"], ["previousLabel", "Anterior", "nextLabel", "Siguiente", 3, "pageChange"], [1, "footer"], [1, "h-float"], ["src", "assets/iconos/editar.png", 1, "h-rotate-360", 3, "routerLink"]], template: function VacunadosListAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-menu-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Listado de Vacunados");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VacunadosListAdminComponent_Template_input_ngModelChange_14_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Listado de Vacunados");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "C\u00E9dula");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Nombre y Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Sexo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Fecha Nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Dosis 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Dosis 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Dosis 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, VacunadosListAdminComponent_tr_43_Template, 26, 27, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "pagination-controls", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function VacunadosListAdminComponent_Template_pagination_controls_pageChange_46_listener($event) { return ctx.paginate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "footer", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](44, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](45, 5, ctx.vacunas, ctx.filter), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, ctx.paginate)));
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _compoonents_admin_template_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_6__["MenuAdminComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWN1bmFkb3MtbGlzdC1hZG1pbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "2Pn/":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia-clinica/historia-clinica-visita2-form/historia-clinica-visita2-form.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: HistoriaClinicaVisita2FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaClinicaVisita2FormComponent", function() { return HistoriaClinicaVisita2FormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../template/menu/menu-visitas/menu-visitas.component */ "duu2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function HistoriaClinicaVisita2FormComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriaClinicaVisita2FormComponent_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaVisita2FormComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriaClinicaVisita2FormComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class HistoriaClinicaVisita2FormComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"); //Fecha Actual
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            paciente_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            //vacuna_previa_sars_cov2: new FormControl('' ),
            pre_ta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_fc: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_fr: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_temp: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_sat2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_general: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_cabeza: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_cuello: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_linfatico: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_torax: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_abdomen: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_extremidades: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_neurologico: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_ta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_fc: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_fr: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_temp: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_sat2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_general: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_cabeza: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_cuello: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_linfatico: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_torax: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_abdomen: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_extremidades: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_neurologico: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            vacuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            fecha_vacuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            lote_vacuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            hora_vacuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_pre_ta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_pre_fc: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_pre_fr: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_pre_temp: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_pre_sat2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_post_ta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_post_fc: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_post_fr: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_post_temp: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_post_sat2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        this.comboListService.getVisitaDo(params.id) // obtengo el juego con el parametro del id
            .subscribe(res => {
            console.log(res);
            this.pacientes = res;
            this.Form.patchValue({
                paciente_id: this.pacientes.paciente_id,
                pre_ta: this.pacientes.pre_ta,
                pre_fc: this.pacientes.pre_fc,
                pre_fr: this.pacientes.pre_fr,
                pre_temp: this.pacientes.pre_temp,
                pre_sat2: this.pacientes.pre_sat2,
                pre_general: this.pacientes.pre_general,
                pre_cabeza: this.pacientes.pre_cabeza,
                pre_cuello: this.pacientes.pre_cuello,
                pre_linfatico: this.pacientes.pre_linfatico,
                pre_torax: this.pacientes.pre_torax,
                pre_abdomen: this.pacientes.pre_abdomen,
                pre_extremidades: this.pacientes.pre_extremidades,
                pre_neurologico: this.pacientes.pre_neurologico,
                post_ta: this.pacientes.post_ta,
                post_fc: this.pacientes.post_fc,
                post_fr: this.pacientes.post_fr,
                post_temp: this.pacientes.post_temp,
                post_sat2: this.pacientes.post_sat2,
                post_general: this.pacientes.post_general,
                post_cabeza: this.pacientes.post_cabeza,
                post_cuello: this.pacientes.post_cuello,
                post_linfatico: this.pacientes.post_linfatico,
                post_torax: this.pacientes.post_torax,
                post_abdomen: this.pacientes.post_abdomen,
                post_extremidades: this.pacientes.post_extremidades,
                post_neurologico: this.pacientes.post_neurologico,
                vacuna: this.pacientes.vacuna,
                fecha_vacuna: this.pacientes.fecha_vacuna,
                lote_vacuna: this.pacientes.lote_vacuna,
                hora_vacuna: this.pacientes.hora_vacuna,
                datos_pre_ta: this.pacientes.datos_pre_ta,
                datos_pre_fc: this.pacientes.datos_pre_fc,
                datos_pre_fr: this.pacientes.datos_pre_fr,
                datos_pre_temp: this.pacientes.datos_pre_temp,
                datos_pre_sat2: this.pacientes.datos_pre_sat2,
                datos_post_ta: this.pacientes.datos_post_ta,
                datos_post_fc: this.pacientes.datos_post_fc,
                datos_post_fr: this.pacientes.datos_post_fr,
                datos_post_temp: this.pacientes.datos_post_temp,
                datos_post_sat2: this.pacientes.datos_post_sat2,
            });
            this.edit = true;
        }, err => console.log(err));
    }
    Guardar() {
        const params = this.activatedRoute.snapshot.params;
        this.Form.get('paciente_id').setValue(params.id);
        this.comboListService.saveVisitaDos(this.Form.value).subscribe(res => {
            console.log(res);
            //this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateVisitaDos(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
HistoriaClinicaVisita2FormComponent.ɵfac = function HistoriaClinicaVisita2FormComponent_Factory(t) { return new (t || HistoriaClinicaVisita2FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"])); };
HistoriaClinicaVisita2FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HistoriaClinicaVisita2FormComponent, selectors: [["app-historia-clinica-visita2-form"]], decls: 36, vars: 3, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], ["id", "nav-tab", 1, "nav", "nav-tabs"], ["id", "nav-home-tab", "data-toggle", "tab", 1, "nav-item", "nav-link"], ["id", "nav-profile-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", "active"], ["id", "nav-contact-tab", "data-toggle", "tab", 1, "nav-item", "nav-link"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-home", 1, "tab-pane", "fade", "show", "active"], [1, "m-3"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function HistoriaClinicaVisita2FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-menu-visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "VISITA 1 PACIENTE: Jhon De Quesada");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Antecedentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Examen Fisico");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Paraclinicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Categorizaci\u00F3n de Riesgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Vacunaci\u00F3n Previa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "EXAMEN FISICO PREVACUNACI\u00D3N:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, HistoriaClinicaVisita2FormComponent_button_33_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, HistoriaClinicaVisita2FormComponent_button_34_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "footer", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__["MenuVisitasComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpYS1jbGluaWNhLXZpc2l0YTItZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "6PkB":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/inicio-admin/inicio-admin.component.ts ***!
  \*************************************************************************/
/*! exports provided: InicioAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioAdminComponent", function() { return InicioAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _compoonents_admin_template_menu_menu_general_menu_general_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../compoonents/admin/template/menu/menu-general/menu-general.component */ "hFxb");



class InicioAdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
InicioAdminComponent.ɵfac = function InicioAdminComponent_Factory(t) { return new (t || InicioAdminComponent)(); };
InicioAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InicioAdminComponent, selectors: [["app-inicio-admin"]], decls: 13, vars: 0, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], [1, "footer"]], template: function InicioAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu-general");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Bienvenidos!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "footer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _compoonents_admin_template_menu_menu_general_menu_general_component__WEBPACK_IMPORTED_MODULE_2__["MenuGeneralComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmljaW8tYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CEa+":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia-clinica/historia-clinica-cedula-form/historia-clinica-cedula-form.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: HistoriaClinicaCedulaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaClinicaCedulaFormComponent", function() { return HistoriaClinicaCedulaFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/vacunas.service */ "XBfQ");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _compoonents_admin_template_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../compoonents/admin/template/menu/menu-admin/menu-admin.component */ "pD0S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function HistoriaClinicaCedulaFormComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Cedula es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaCedulaFormComponent_div_23_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Nombres es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaCedulaFormComponent_div_23_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No se aceptan valores numericos... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaCedulaFormComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Nombres");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaCedulaFormComponent_div_23_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.pacientes.nombres = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HistoriaClinicaCedulaFormComponent_div_23_div_5_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HistoriaClinicaCedulaFormComponent_div_23_div_6_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.Form.controls["nombres"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx_r1.pacientes.nombres);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.Form.controls["nombres"].touched && (ctx_r1.Form.controls["nombres"].errors == null ? null : ctx_r1.Form.controls["nombres"].errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.Form.controls["nombres"].touched && (ctx_r1.Form.controls["nombres"].errors == null ? null : ctx_r1.Form.controls["nombres"].errors.pattern));
} }
function HistoriaClinicaCedulaFormComponent_div_24_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Apellidos es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaCedulaFormComponent_div_24_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No se aceptan valores numericos... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaCedulaFormComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Apellidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaCedulaFormComponent_div_24_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.pacientes.apellidos = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HistoriaClinicaCedulaFormComponent_div_24_div_5_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HistoriaClinicaCedulaFormComponent_div_24_div_6_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.Form.controls["apellidos"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx_r2.pacientes.apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.Form.controls["apellidos"].touched && (ctx_r2.Form.controls["apellidos"].errors == null ? null : ctx_r2.Form.controls["apellidos"].errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.Form.controls["apellidos"].touched && (ctx_r2.Form.controls["apellidos"].errors == null ? null : ctx_r2.Form.controls["apellidos"].errors.pattern));
} }
function HistoriaClinicaCedulaFormComponent_div_25_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Fecha Nacimiento es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaCedulaFormComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Fecha De Nacimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaCedulaFormComponent_div_25_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.pacientes.fecha_nacimiento = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HistoriaClinicaCedulaFormComponent_div_25_div_5_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.Form.controls["fecha_nacimiento"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx_r3.pacientes.fecha_nacimiento);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.Form.controls["fecha_nacimiento"].touched && (ctx_r3.Form.controls["fecha_nacimiento"].errors == null ? null : ctx_r3.Form.controls["fecha_nacimiento"].errors.required));
} }
function HistoriaClinicaCedulaFormComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriaClinicaCedulaFormComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/historia_clinica/admin/pacientes/inicio", a1]; };
function HistoriaClinicaCedulaFormComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ir Historia Clinica Paciente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx_r5.cedula_paciente));
} }
class HistoriaClinicaCedulaFormComponent {
    constructor(activatedRoute, router, comboListService, vacunasService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.vacunasService = vacunasService;
        this.pacientes = [];
        this.cedulaRegistrada = [];
        this.pacienteGuardar = [];
        this.cedula_paciente = '';
        this.ocultar = false;
        this.botonH = false;
        this.cedulados = [];
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            cedula: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            nombres: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            apellidos: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            fecha_nacimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    ngOnInit() {
    }
    verificarCedula() {
        this.comboListService.getPacienteCedulaRegistrada(this.pacientes.cedula).subscribe(res => {
            if (Object.keys(res).length >= 1) {
                this.cedulaRegistrada = res;
                this.cedula_paciente = this.cedulaRegistrada[0].id;
                //alert(this.cedula_paciente);
                //alert('La cedula se encuentra registrada en el sistema');
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'La Cedula Se Encuentra Registrada En El Sistema!!!', 'success');
                console.log('excel:', res);
                this.ocultar = false;
                this.botonH = true;
            }
            else {
                alert('!!Cedula no esta registrada');
                this.ocultar = true;
                this.botonH = false;
                this.vacunasService.getCeduladosSaime(this.pacientes.cedula, 'V') // obtengo el juego con el parametro del id
                    .subscribe(res => {
                    if (Object.keys(res).length >= 1) {
                        console.log('Cedulados: ', res);
                        this.cedulados = res;
                        this.cedulados.forEach(element => {
                            this.pacientes.nombres = `${element.primernombre} ${element.segundonombre}`;
                            this.pacientes.apellidos = `${element.primerapellido} ${element.segundoapellido}`;
                            this.pacientes.fecha_nacimiento = element.fechanac;
                        });
                    }
                }, err => console.log(err));
            }
        }, err => {
            console.log(err);
        });
    }
    Guardar() {
        this.comboListService.getPacienteCedulaRegistrada(this.pacientes.cedula).subscribe(res => {
            if (Object.keys(res).length >= 1) {
                alert('La cedula Ya  se encuentra registrada en el sistema');
                this.onReset();
            }
            else {
                this.comboListService.savePacientes(this.Form.value).subscribe(res => {
                    console.log(res);
                    this.pacienteGuardar = res;
                    console.log('Codigo paciente:', this.pacienteGuardar.id);
                    this.router.navigate(['/historia_clinica/admin/form/paciente', this.pacienteGuardar.id]);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
                }, err => {
                    console.error(err);
                    alert('Error!');
                });
            }
        }, err => {
            console.log(err);
        });
    }
    onReset() {
        this.Form.reset();
    }
}
HistoriaClinicaCedulaFormComponent.ɵfac = function HistoriaClinicaCedulaFormComponent_Factory(t) { return new (t || HistoriaClinicaCedulaFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__["CombolistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_5__["VacunasService"])); };
HistoriaClinicaCedulaFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HistoriaClinicaCedulaFormComponent, selectors: [["app-historia-clinica-cedula-form"]], decls: 29, vars: 9, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar Nombre de Vacuna", "formControlName", "cedula", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange", "blur"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "form-group row", 4, "ngIf"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], ["style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "routerLink", 4, "ngIf"], [1, "footer"], [1, "invalid-feedback"], ["type", "text", "placeholder", "Ingresar Nombres", "formControlName", "nombres", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar apellidos", "formControlName", "apellidos", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "date", "onkeydown", "return false", "id", "example-date-input", "placeholder", "Ingresar fecha nacimiento", "formControlName", "fecha_nacimiento", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"], [1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "routerLink"]], template: function HistoriaClinicaCedulaFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-menu-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Ingresar Cedula para verificar historial clinico");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cedula");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaCedulaFormComponent_Template_input_ngModelChange_21_listener($event) { return ctx.pacientes.cedula = $event; })("blur", function HistoriaClinicaCedulaFormComponent_Template_input_blur_21_listener() { return ctx.verificarCedula(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, HistoriaClinicaCedulaFormComponent_div_22_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, HistoriaClinicaCedulaFormComponent_div_23_Template, 7, 4, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, HistoriaClinicaCedulaFormComponent_div_24_Template, 7, 4, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, HistoriaClinicaCedulaFormComponent_div_25_Template, 6, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, HistoriaClinicaCedulaFormComponent_button_26_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, HistoriaClinicaCedulaFormComponent_button_27_Template, 2, 3, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "footer", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["cedula"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.cedula);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.controls["cedula"].touched && (ctx.Form.controls["cedula"].errors == null ? null : ctx.Form.controls["cedula"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ocultar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ocultar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ocultar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ocultar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.botonH);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _compoonents_admin_template_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_7__["MenuAdminComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpYS1jbGluaWNhLWNlZHVsYS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "CGua":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia_clinica/historia-clinica-form-paraclinicos/historia-clinica-form-paraclinicos.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: HistoriaClinicaFormParaclinicosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaClinicaFormParaclinicosComponent", function() { return HistoriaClinicaFormParaclinicosComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../template/menu/menu-visitas/menu-visitas.component */ "duu2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function HistoriaClinicaFormParaclinicosComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " PCR es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormParaclinicosComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " fecha_hora_toma_muestra_pcr es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormParaclinicosComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " PCR es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormParaclinicosComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Vdrl es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormParaclinicosComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " PCR es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormParaclinicosComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " hgb es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormParaclinicosComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " fecha_hora_toma_muestra_anticuerpo es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormParaclinicosComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " igm es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormParaclinicosComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " igg es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormParaclinicosComponent_button_107_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriaClinicaFormParaclinicosComponent_button_107_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormParaclinicosComponent_button_108_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriaClinicaFormParaclinicosComponent_button_108_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/historia_clinica/admin/pacientes/form/visita_uno", a1]; };
const _c1 = function (a1) { return ["/historia_clinica/admin/form/examen_fisicos", a1]; };
const _c2 = function (a1) { return ["/historia_clinica/admin/form/paraclinicos", a1]; };
const _c3 = "/historia_clinica/admin/form/categorizacion_riesgo_infeccion";
const _c4 = function (a1) { return [_c3, a1]; };
const _c5 = function (a1) { return ["/historia_clinica/admin/form/vacunacion_previa", a1]; };
class HistoriaClinicaFormParaclinicosComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            paciente_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            anticuerpo_contra_sars_cov2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            fecha_hora_toma_muestra_anticuerpo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            igm: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            igg: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            prueba_embarazo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            fecha_hora_toma_muestra_antigeno: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            observacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            prueba_pcr: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            fecha_hora_toma_muestra_pcr: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            hgb: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            serologias: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            vih: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            vdrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            hepatitisb: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            hepatitisc: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            radiografia_torax: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        this.comboListService.getParaclinico(params.id) // obtengo el juego con el parametro del id
            .subscribe(res => {
            console.log(res);
            this.pacientes = res;
            this.Form.patchValue({
                paciente_id: this.pacientes.paciente_id,
                anticuerpo_contra_sars_cov2: this.pacientes.anticuerpo_contra_sars_cov2,
                fecha_hora_toma_muestra_anticuerpo: this.pacientes.fecha_hora_toma_muestra_anticuerpo,
                igm: this.pacientes.igm,
                igg: this.pacientes.igg,
                prueba_embarazo: this.pacientes.prueba_embarazo,
                fecha_hora_toma_muestra_antigeno: this.pacientes.fecha_hora_toma_muestra_antigeno,
                observacion: this.pacientes.observacion,
                prueba_pcr: this.pacientes.prueba_pcr,
                fecha_hora_toma_muestra_pcr: this.pacientes.fecha_hora_toma_muestra_pcr,
                hgb: this.pacientes.hgb,
                serologias: this.pacientes.serologias,
                vih: this.pacientes.vih,
                vdrl: this.pacientes.vdrl,
                hepatitisb: this.pacientes.hepatitisb,
                hepatitisc: this.pacientes.hepatitisc,
                radiografia_torax: this.pacientes.radiografia_torax
                //imagen_qr: this.vacunas.imagen_qr,
            });
            this.edit = true;
        }, err => console.log(err));
    }
    Guardar() {
        const params = this.activatedRoute.snapshot.params;
        this.Form.get('paciente_id').setValue(params.id);
        this.comboListService.saveParaclinicos(this.Form.value).subscribe(res => {
            console.log(res);
            //this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateParaclinicos(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
HistoriaClinicaFormParaclinicosComponent.ɵfac = function HistoriaClinicaFormParaclinicosComponent_Factory(t) { return new (t || HistoriaClinicaFormParaclinicosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__["CombolistService"])); };
HistoriaClinicaFormParaclinicosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HistoriaClinicaFormParaclinicosComponent, selectors: [["app-historia-clinica-form-paraclinicos"]], decls: 110, vars: 47, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], ["id", "nav-tab", 1, "nav", "nav-tabs"], ["id", "nav-home-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", 3, "routerLink"], ["id", "nav-profile-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", 3, "routerLink"], ["id", "nav-contact-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", "active", 3, "routerLink"], ["id", "nav-contact-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", 3, "routerLink"], [1, "mt-5", "mb-3"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "prueba_pcr", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["value", "positivo"], ["value", "negativo"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "placeholder", "Ingresar", "formControlName", "fecha_hora_toma_muestra_pcr", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "vih", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "vdrl", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "prueba_embarazo", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "hgb", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "fecha_hora_toma_muestra_anticuerpo", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "igm", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "igg", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "formControlName", "observacion", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function HistoriaClinicaFormParaclinicosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-menu-visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "VISITA 1 PACIENTE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Antecedentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Examen Fisico");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Paraclinicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Categorizaci\u00F3n de Riesgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Vacunaci\u00F3n Previa");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Paraclinicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " PCR para SARS COV2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormParaclinicosComponent_Template_select_ngModelChange_35_listener($event) { return ctx.pacientes.prueba_pcr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Positivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Negativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, HistoriaClinicaFormParaclinicosComponent_div_40_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Fecha y Hora PCR:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormParaclinicosComponent_Template_input_ngModelChange_45_listener($event) { return ctx.pacientes.fecha_hora_toma_muestra_pcr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, HistoriaClinicaFormParaclinicosComponent_div_46_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "VIH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormParaclinicosComponent_Template_select_ngModelChange_51_listener($event) { return ctx.pacientes.vih = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Positivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Negativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, HistoriaClinicaFormParaclinicosComponent_div_56_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "VDRL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormParaclinicosComponent_Template_select_ngModelChange_61_listener($event) { return ctx.pacientes.vdrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Positivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Negativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, HistoriaClinicaFormParaclinicosComponent_div_66_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Prueba Embarazo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormParaclinicosComponent_Template_select_ngModelChange_71_listener($event) { return ctx.pacientes.prueba_embarazo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Positivo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Negativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, HistoriaClinicaFormParaclinicosComponent_div_76_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "HGB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormParaclinicosComponent_Template_input_ngModelChange_81_listener($event) { return ctx.pacientes.hgb = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, HistoriaClinicaFormParaclinicosComponent_div_82_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Fecha y Hora de toma de muestra:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormParaclinicosComponent_Template_input_ngModelChange_87_listener($event) { return ctx.pacientes.fecha_hora_toma_muestra_anticuerpo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](88, HistoriaClinicaFormParaclinicosComponent_div_88_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "IgM para SARS COV2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormParaclinicosComponent_Template_input_ngModelChange_93_listener($event) { return ctx.pacientes.igm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, HistoriaClinicaFormParaclinicosComponent_div_94_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "IgG para SARS COV2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormParaclinicosComponent_Template_input_ngModelChange_99_listener($event) { return ctx.pacientes.igg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](100, HistoriaClinicaFormParaclinicosComponent_div_100_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Observaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "textarea", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormParaclinicosComponent_Template_textarea_ngModelChange_105_listener($event) { return ctx.pacientes.observacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "                                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](107, HistoriaClinicaFormParaclinicosComponent_button_107_Template, 2, 0, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](108, HistoriaClinicaFormParaclinicosComponent_button_108_Template, 2, 0, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "footer", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](37, _c0, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](39, _c1, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](41, _c2, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](43, _c4, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](45, _c5, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["prueba_pcr"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.pacientes.prueba_pcr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.controls["prueba_pcr"].touched && (ctx.Form.controls["prueba_pcr"].errors == null ? null : ctx.Form.controls["prueba_pcr"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["fecha_hora_toma_muestra_pcr"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.fecha_hora_toma_muestra_pcr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.controls["fecha_hora_toma_muestra_pcr"].touched && (ctx.Form.controls["fecha_hora_toma_muestra_pcr"].errors == null ? null : ctx.Form.controls["fecha_hora_toma_muestra_pcr"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["vih"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.pacientes.vih);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.controls["vih"].touched && (ctx.Form.controls["vih"].errors == null ? null : ctx.Form.controls["vih"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["vdrl"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.pacientes.vdrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.controls["vdrl"].touched && (ctx.Form.controls["vdrl"].errors == null ? null : ctx.Form.controls["vdrl"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["prueba_embarazo"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.pacientes.prueba_embarazo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.controls["prueba_embarazo"].touched && (ctx.Form.controls["prueba_embarazo"].errors == null ? null : ctx.Form.controls["prueba_embarazo"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["hgb"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.hgb);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.controls["hgb"].touched && (ctx.Form.controls["hgb"].errors == null ? null : ctx.Form.controls["hgb"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["fecha_hora_toma_muestra_anticuerpo"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.fecha_hora_toma_muestra_anticuerpo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.controls["fecha_hora_toma_muestra_anticuerpo"].touched && (ctx.Form.controls["fecha_hora_toma_muestra_anticuerpo"].errors == null ? null : ctx.Form.controls["fecha_hora_toma_muestra_anticuerpo"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["igm"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.igm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.controls["igm"].touched && (ctx.Form.controls["igm"].errors == null ? null : ctx.Form.controls["igm"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["igg"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.igg);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.controls["igg"].touched && (ctx.Form.controls["igg"].errors == null ? null : ctx.Form.controls["igg"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["observacion"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.pacientes.observacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_6__["MenuVisitasComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpYS1jbGluaWNhLWZvcm0tcGFyYWNsaW5pY29zLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "Gj86":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia-clinica/visitas/visitas2-paciente-form/visitas2-paciente-form.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: Visitas2PacienteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visitas2PacienteFormComponent", function() { return Visitas2PacienteFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../template/menu/menu-visitas/menu-visitas.component */ "duu2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function Visitas2PacienteFormComponent_button_271_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Visitas2PacienteFormComponent_button_271_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Visitas2PacienteFormComponent_button_272_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Visitas2PacienteFormComponent_button_272_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class Visitas2PacienteFormComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"); //Fecha Actual
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            paciente_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            //vacuna_previa_sars_cov2: new FormControl('' ),
            pre_ta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_fc: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_fr: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_temp: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_sat2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_general: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_cabeza: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_cuello: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_linfatico: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_torax: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_abdomen: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_extremidades: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pre_neurologico: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_ta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_fc: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_fr: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_temp: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_sat2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_general: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_cabeza: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_cuello: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_linfatico: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_torax: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_abdomen: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_extremidades: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            post_neurologico: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            vacuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            fecha_vacuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            lote_vacuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            hora_vacuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            reaccion_vacuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            tipo_reaccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_pre_ta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_pre_fc: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_pre_fr: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_pre_temp: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_pre_sat2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_post_ta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_post_fc: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_post_fr: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_post_temp: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_post_sat2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        this.comboListService.getVisitaDo(params.id) // obtengo el juego con el parametro del id
            .subscribe(res => {
            console.log(res);
            this.pacientes = res;
            this.Form.patchValue({
                paciente_id: this.pacientes.paciente_id,
                pre_ta: this.pacientes.pre_ta,
                pre_fc: this.pacientes.pre_fc,
                pre_fr: this.pacientes.pre_fr,
                pre_temp: this.pacientes.pre_temp,
                pre_sat2: this.pacientes.pre_sat2,
                pre_general: this.pacientes.pre_general,
                pre_cabeza: this.pacientes.pre_cabeza,
                pre_cuello: this.pacientes.pre_cuello,
                pre_linfatico: this.pacientes.pre_linfatico,
                pre_torax: this.pacientes.pre_torax,
                pre_abdomen: this.pacientes.pre_abdomen,
                pre_extremidades: this.pacientes.pre_extremidades,
                pre_neurologico: this.pacientes.pre_neurologico,
                post_ta: this.pacientes.post_ta,
                post_fc: this.pacientes.post_fc,
                post_fr: this.pacientes.post_fr,
                post_temp: this.pacientes.post_temp,
                post_sat2: this.pacientes.post_sat2,
                post_general: this.pacientes.post_general,
                post_cabeza: this.pacientes.post_cabeza,
                post_cuello: this.pacientes.post_cuello,
                post_linfatico: this.pacientes.post_linfatico,
                post_torax: this.pacientes.post_torax,
                post_abdomen: this.pacientes.post_abdomen,
                post_extremidades: this.pacientes.post_extremidades,
                post_neurologico: this.pacientes.post_neurologico,
                vacuna: this.pacientes.vacuna,
                fecha_vacuna: this.pacientes.fecha_vacuna,
                lote_vacuna: this.pacientes.lote_vacuna,
                hora_vacuna: this.pacientes.hora_vacuna,
                reaccion_vacuna: this.pacientes.reaccion_vacuna,
                tipo_reaccion: this.pacientes.tipo_reaccion,
                datos_pre_ta: this.pacientes.datos_pre_ta,
                datos_pre_fc: this.pacientes.datos_pre_fc,
                datos_pre_fr: this.pacientes.datos_pre_fr,
                datos_pre_temp: this.pacientes.datos_pre_temp,
                datos_pre_sat2: this.pacientes.datos_pre_sat2,
                datos_post_ta: this.pacientes.datos_post_ta,
                datos_post_fc: this.pacientes.datos_post_fc,
                datos_post_fr: this.pacientes.datos_post_fr,
                datos_post_temp: this.pacientes.datos_post_temp,
                datos_post_sat2: this.pacientes.datos_post_sat2,
            });
            this.edit = true;
        }, err => console.log(err));
    }
    Guardar() {
        const params = this.activatedRoute.snapshot.params;
        this.Form.get('paciente_id').setValue(params.id);
        this.comboListService.saveVisitaDos(this.Form.value).subscribe(res => {
            console.log(res);
            //this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateVisitaDos(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
Visitas2PacienteFormComponent.ɵfac = function Visitas2PacienteFormComponent_Factory(t) { return new (t || Visitas2PacienteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"])); };
Visitas2PacienteFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Visitas2PacienteFormComponent, selectors: [["app-visitas2-paciente-form"]], decls: 274, vars: 87, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "nav-home-tab", "data-toggle", "tab", "href", "#nav-1", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-item", "nav-link", "active", "text-lowercase"], ["id", "nav-profile-tab", "data-toggle", "tab", "href", "#nav-2", "role", "tab", "aria-controls", "nav-profile", "aria-selected", "false", 1, "nav-item", "nav-link", "text-lowercase"], ["id", "nav-contact-tab", "data-toggle", "tab", "href", "#nav-3", "role", "tab", "aria-controls", "nav-contact", "aria-selected", "false", 1, "nav-item", "nav-link", "text-lowercase"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-1", "role", "tabpanel", "aria-labelledby", "nav-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "mt-5", "mb-3"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-2"], [1, "btn", "btn-primary"], ["type", "radio", "name", "pre_ta", "id", "pre_ta", "value", "si", "formControlName", "pre_ta", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger"], ["type", "radio", "name", "pre_ta", "id", "pre_ta", "value", "no", "formControlName", "pre_ta", 3, "ngModel", "ngModelChange"], [1, "col-sm-4"], ["type", "text", "placeholder", "Ingresar Datos TA", "formControlName", "datos_pre_ta", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "radio", "name", "pre_fc", "id", "pre_fc", "value", "si", "formControlName", "pre_fc", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "pre_fc", "id", "pre_fc", "value", "no", "formControlName", "pre_fc", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Datos FC", "formControlName", "datos_pre_fc", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "radio", "name", "pre_fr", "id", "pre_fr", "value", "si", "formControlName", "pre_fr", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "pre_fr", "id", "pre_fr", "value", "no", "formControlName", "pre_fr", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Datos F.R", "formControlName", "datos_pre_fr", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "radio", "name", "pre_temp", "id", "pre_temp", "value", "si", "formControlName", "pre_temp", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "pre_temp", "id", "pre_temp", "value", "no", "formControlName", "pre_temp", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Datos Temp", "formControlName", "datos_pre_temp", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "radio", "name", "pre_sat2", "id", "pre_sat2", "value", "si", "formControlName", "pre_sat2", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "pre_sat2", "id", "pre_sat2", "value", "no", "formControlName", "pre_sat2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Datos SAT 02", "formControlName", "datos_pre_sat2", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], [1, "form-group", "row", "mt-5"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar", "formControlName", "pre_general", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "pre_cabeza", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "pre_cuello", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "pre_linfatico", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "pre_torax", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "pre_abdomen", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "pre_extremidades", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "pre_neurologico", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["id", "nav-2", "role", "tabpanel", "aria-labelledby", "nav-profile-tab", 1, "tab-pane", "fade"], ["type", "radio", "name", "post_ta", "id", "post_ta", "value", "si", "formControlName", "post_ta", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "post_ta", "id", "post_ta", "value", "no", "formControlName", "post_ta", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Datos TA", "formControlName", "datos_post_ta", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "radio", "name", "post_fc", "id", "post_fc", "value", "si", "formControlName", "post_fc", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "post_fc", "id", "post_fc", "value", "no", "formControlName", "post_fc", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Datos FC", "formControlName", "datos_post_fc", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "radio", "name", "post_fr", "id", "post_fr", "value", "si", "formControlName", "post_fr", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "post_fr", "id", "post_fr", "value", "no", "formControlName", "post_fr", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Datos F.R", "formControlName", "datos_post_fr", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "radio", "name", "post_temp", "id", "post_temp", "value", "si", "formControlName", "post_temp", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "post_temp", "id", "post_temp", "value", "no", "formControlName", "post_temp", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Datos Temp", "formControlName", "datos_post_temp", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "radio", "name", "post_sat2", "id", "post_sat2", "value", "si", "formControlName", "post_sat2", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "post_sat2", "id", "post_sat2", "value", "no", "formControlName", "post_sat2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Datos SAT 02", "formControlName", "datos_post_sat2", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "post_general", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "post_cabeza", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "post_cuello", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "post_linfatico", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "post_torax", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "post_abdomen", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "post_extremidades", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "post_neurologico", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], [1, "col-sm-1"], ["type", "radio", "name", "reaccion_vacuna", "id", "reaccion_vacuna", "value", "si", "formControlName", "reaccion_vacuna", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "reaccion_vacuna", "id", "reaccion_vacuna", "value", "no", "formControlName", "reaccion_vacuna", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "tipo_reaccion", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["id", "nav-3", "role", "tabpanel", "aria-labelledby", "nav-contact-tab", 1, "tab-pane", "fade"], ["type", "text", "placeholder", "Ingresar", "formControlName", "vacuna", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "lote_vacuna", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "date", "onkeydown", "return false", "id", "example-date-input", "formControlName", "fecha_vacuna", 1, "form-control", 3, "max", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "hora_vacuna", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function Visitas2PacienteFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-menu-visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "VISITA 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "EXAMEN FISICO PREVACUNACI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "EXAMEN FISICO POSTVACUNACI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Vacuna ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Signo Vitales Prevacunaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "TA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_34_listener($event) { return ctx.pacientes.pre_ta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_37_listener($event) { return ctx.pacientes.pre_ta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_40_listener($event) { return ctx.pacientes.datos_pre_ta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "FC");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_46_listener($event) { return ctx.pacientes.pre_fc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_49_listener($event) { return ctx.pacientes.pre_fc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_52_listener($event) { return ctx.pacientes.datos_pre_fc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "F.R");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_58_listener($event) { return ctx.pacientes.pre_fr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_61_listener($event) { return ctx.pacientes.pre_fr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_64_listener($event) { return ctx.pacientes.datos_pre_fr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "TEMP");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_70_listener($event) { return ctx.pacientes.pre_temp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_73_listener($event) { return ctx.pacientes.pre_temp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_76_listener($event) { return ctx.pacientes.datos_pre_temp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "SAT O2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_82_listener($event) { return ctx.pacientes.pre_sat2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_85_listener($event) { return ctx.pacientes.pre_sat2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_88_listener($event) { return ctx.pacientes.datos_pre_sat2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_93_listener($event) { return ctx.pacientes.pre_general = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Cabeza");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_98_listener($event) { return ctx.pacientes.pre_cabeza = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Cuello");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_103_listener($event) { return ctx.pacientes.pre_cuello = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Sistema L\u00EDnfatico");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_108_listener($event) { return ctx.pacientes.pre_linfatico = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Torax");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_113_listener($event) { return ctx.pacientes.pre_torax = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Abdomen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_118_listener($event) { return ctx.pacientes.pre_abdomen = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Extremidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_123_listener($event) { return ctx.pacientes.pre_extremidades = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Neurologicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_128_listener($event) { return ctx.pacientes.pre_neurologico = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Signo Vitales Postvacunaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "TA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_137_listener($event) { return ctx.pacientes.post_ta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_140_listener($event) { return ctx.pacientes.post_ta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_143_listener($event) { return ctx.pacientes.datos_post_ta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "FC");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_149_listener($event) { return ctx.pacientes.post_fc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_152_listener($event) { return ctx.pacientes.post_fc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_155_listener($event) { return ctx.pacientes.datos_post_fc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "F.R");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_161_listener($event) { return ctx.pacientes.post_fr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_164_listener($event) { return ctx.pacientes.post_fr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_167_listener($event) { return ctx.pacientes.datos_post_fr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](170, "TEMP");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_173_listener($event) { return ctx.pacientes.post_temp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_176_listener($event) { return ctx.pacientes.post_temp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_179_listener($event) { return ctx.pacientes.datos_post_temp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "SAT O2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_185_listener($event) { return ctx.pacientes.post_sat2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_188_listener($event) { return ctx.pacientes.post_sat2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](189, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_191_listener($event) { return ctx.pacientes.datos_post_sat2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_196_listener($event) { return ctx.pacientes.post_general = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](199, "Cabeza");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_201_listener($event) { return ctx.pacientes.post_cabeza = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, "Cuello");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_206_listener($event) { return ctx.pacientes.post_cuello = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](209, "Sistema L\u00EDnfatico");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_211_listener($event) { return ctx.pacientes.post_linfatico = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, "Torax");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_216_listener($event) { return ctx.pacientes.post_torax = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, "Abdomen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_221_listener($event) { return ctx.pacientes.post_abdomen = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, "Extremidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_226_listener($event) { return ctx.pacientes.post_extremidades = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "Neurologicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_231_listener($event) { return ctx.pacientes.post_neurologico = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](234, "Reacci\u00F3n adversa 30 minutos Postvacunaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_237_listener($event) { return ctx.pacientes.reaccion_vacuna = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](238, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](239, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_241_listener($event) { return ctx.pacientes.reaccion_vacuna = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](245, "Tipo Reacci\u00F3n Adversa:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_247_listener($event) { return ctx.pacientes.tipo_reaccion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](250, "Datos del paciente Vacunado");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](253, "Vacuna");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_255_listener($event) { return ctx.pacientes.vacuna = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](258, "Lote");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_260_listener($event) { return ctx.pacientes.lote_vacuna = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](262, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](263, "Fecha de Vacuna");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "input", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_265_listener($event) { return ctx.pacientes.fecha_vacuna = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](268, "Hora");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas2PacienteFormComponent_Template_input_ngModelChange_270_listener($event) { return ctx.pacientes.hora_vacuna = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](271, Visitas2PacienteFormComponent_button_271_Template, 2, 0, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](272, Visitas2PacienteFormComponent_button_272_Template, 2, 0, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](273, "footer", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.pre_ta);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.pre_ta);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["datos_pre_ta"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.datos_pre_ta);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.pre_fc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.pre_fc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["datos_pre_fc"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.datos_pre_fc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.pre_fr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.pre_fr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["datos_pre_fr"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.datos_pre_fr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.pre_temp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.pre_temp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["datos_pre_temp"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.datos_pre_temp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.pre_sat2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.pre_sat2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["datos_pre_sat2"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.datos_pre_sat2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["pre_general"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.pre_general);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["pre_cabeza"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.pre_cabeza);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["pre_cuello"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.pre_cuello);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["pre_linfatico"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.pre_linfatico);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["pre_torax"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.pre_torax);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["pre_abdomen"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.pre_abdomen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["pre_extremidades"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.pre_extremidades);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["pre_neurologico"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.pre_neurologico);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.post_ta);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.post_ta);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["datos_post_ta"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.datos_post_ta);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.post_fc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.post_fc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["datos_post_fc"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.datos_post_fc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.post_fr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.post_fr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["datos_post_fr"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.datos_post_fr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.post_temp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.post_temp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["datos_post_temp"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.datos_post_temp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.post_sat2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.post_sat2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["datos_post_sat2"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.datos_post_sat2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["post_general"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.post_general);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["post_cabeza"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.post_cabeza);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["post_cuello"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.post_cuello);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["post_linfatico"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.post_linfatico);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["post_torax"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.post_torax);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["post_abdomen"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.post_abdomen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["post_extremidades"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.post_extremidades);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["post_neurologico"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.post_neurologico);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.reaccion_vacuna);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.reaccion_vacuna);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["tipo_reaccion"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.tipo_reaccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["vacuna"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.vacuna);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["lote_vacuna"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.lote_vacuna);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("max", ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.fecha_vacuna);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["hora_vacuna"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.hora_vacuna);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__["MenuVisitasComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNpdGFzMi1wYWNpZW50ZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "JnF4":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia-clinica/visitas/visitas1-paciente-form/visitas1-paciente-form.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: Visitas1PacienteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visitas1PacienteFormComponent", function() { return Visitas1PacienteFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../template/menu/menu-visitas/menu-visitas.component */ "duu2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function Visitas1PacienteFormComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Fecha De Ultima Dos\u00EDs es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Visitas1PacienteFormComponent_button_137_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Visitas1PacienteFormComponent_button_137_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Visitas1PacienteFormComponent_button_138_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Visitas1PacienteFormComponent_button_138_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/historia_clinica/admin/pacientes/form/visita_uno", a1]; };
const _c1 = function (a1) { return ["/historia_clinica/admin/form/examen_fisicos", a1]; };
const _c2 = function (a1) { return ["/historia_clinica/admin/form/paraclinicos", a1]; };
const _c3 = "/historia_clinica/admin/form/categorizacion_riesgo_infeccion";
const _c4 = function (a1) { return [_c3, a1]; };
const _c5 = function (a1) { return ["/historia_clinica/admin/form/vacunacion_previa", a1]; };
class Visitas1PacienteFormComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"); //Fecha Actual
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            paciente_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            vacuna_previa_sars_cov2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            fecha_ultima_dosis: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            hta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            asma: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            dm: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            artritis: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            tbc: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            hepatitis: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            vih_sida: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            otras: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            alergias: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            reaccion_vacuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            signo_ta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            signo_fc: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            signo_fr: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            signo_tmp: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            signo_sat2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            examenf_general: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            examenf_cabeza: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            examenf_cuello: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            examenf_sistema_linfatico: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            examenf_torax: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            examenf_abdomen: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            examenf_extremidades: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            examenf_neurologico: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            otros: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pcr_sars_cov2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            prueba_embarazo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        this.comboListService.getVisitaUno(params.id) // obtengo el juego con el parametro del id
            .subscribe(res => {
            console.log(res);
            this.pacientes = res;
            this.Form.patchValue({
                paciente_id: this.pacientes.paciente_id,
                vacuna_previa_sars_cov2: this.pacientes.vacuna_previa_sars_cov2,
                fecha_ultima_dosis: this.pacientes.fecha_ultima_dosis,
                hta: this.pacientes.hta,
                asma: this.pacientes.asma,
                dm: this.pacientes.dm,
                artritis: this.pacientes.artritis,
                tbc: this.pacientes.tbc,
                hepatitis: this.pacientes.hepatitis,
                vih_sida: this.pacientes.vih_sida,
                otras: this.pacientes.otras,
                alergias: this.pacientes.alergias,
                reaccion_vacuna: this.pacientes.reaccion_vacuna,
                signo_ta: this.pacientes.signo_ta,
                signo_fc: this.pacientes.signo_fc,
                signo_fr: this.pacientes.signo_fr,
                signo_tmp: this.pacientes.signo_tmp,
                signo_sat2: this.pacientes.signo_sat2,
                examenf_general: this.pacientes.examenf_general,
                examenf_cabeza: this.pacientes.examenf_cabeza,
                examenf_cuello: this.pacientes.examenf_cuello,
                examenf_sistema_linfatico: this.pacientes.examenf_sistema_linfatico,
                examenf_torax: this.pacientes.examenf_torax,
                examenf_abdomen: this.pacientes.examenf_abdomen,
                examenf_extremidades: this.pacientes.examenf_extremidades,
                examenf_neurologico: this.pacientes.examenf_neurologico,
                otros: this.pacientes.otros,
                pcr_sars_cov2: this.pacientes.pcr_sars_cov2,
                prueba_embarazo: this.pacientes.prueba_embarazo
                //imagen_qr: this.vacunas.imagen_qr,
            });
            this.edit = true;
        }, err => console.log(err));
    }
    Guardar() {
        const params = this.activatedRoute.snapshot.params;
        this.Form.get('paciente_id').setValue(params.id);
        this.comboListService.saveVisitaUnos(this.Form.value).subscribe(res => {
            console.log(res);
            //this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateVisitaUnos(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
Visitas1PacienteFormComponent.ɵfac = function Visitas1PacienteFormComponent_Factory(t) { return new (t || Visitas1PacienteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"])); };
Visitas1PacienteFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Visitas1PacienteFormComponent, selectors: [["app-visitas1-paciente-form"]], decls: 140, vars: 44, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], ["id", "nav-tab", 1, "nav", "nav-tabs"], ["id", "nav-home-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", "active", 3, "routerLink"], ["id", "nav-profile-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", 3, "routerLink"], ["id", "nav-contact-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", 3, "routerLink"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-home", 1, "tab-pane", "fade", "show", "active"], [1, "m-3"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar", "formControlName", "vacuna_previa_sars_cov2", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "date", "onkeydown", "return false", "id", "example-date-input", "placeholder", "Ingresar fecha nacimiento", "formControlName", "fecha_ultima_dosis", 1, "form-control", 3, "max", "ngClass", "ngModel", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-sm-1"], [1, "btn", "btn-primary"], ["type", "radio", "name", "hta", "id", "hta", "value", "si", "formControlName", "hta", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger"], ["type", "radio", "name", "hta", "id", "hta", "value", "no", "formControlName", "hta", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "asma", "id", "asma", "value", "si", "formControlName", "asma", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "asma", "id", "asma", "value", "no", "formControlName", "asma", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "dm", "id", "dm", "value", "si", "formControlName", "dm", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "dm", "id", "dm", "value", "no", "formControlName", "dm", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "artritis", "id", "artritis", "value", "si", "formControlName", "artritis", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "artritis", "id", "artritis", "value", "no", "formControlName", "artritis", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "tbc", "id", "tbc", "value", "si", "formControlName", "tbc", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "tbc", "id", "tbc", "value", "no", "formControlName", "tbc", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "hepatitis", "id", "hepatitis", "value", "si", "formControlName", "hepatitis", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "hepatitis", "id", "hepatitis", "value", "no", "formControlName", "hepatitis", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "vih_sida", "id", "vih_sida", "value", "si", "formControlName", "vih_sida", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "vih_sida", "id", "vih_sida", "value", "no", "formControlName", "vih_sida", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "otras", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "alergias", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "formControlName", "reaccion_vacuna", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function Visitas1PacienteFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-menu-visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "VISITA 1 PACIENTE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Antecedentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Examen Fisico");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Paraclinicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Categorizaci\u00F3n de Riesgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Vacunaci\u00F3n Previa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Antecedentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Vacuna Previa SARS 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_37_listener($event) { return ctx.pacientes.vacuna_previa_sars_cov2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Fecha De Ultima Dos\u00EDs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_42_listener($event) { return ctx.pacientes.fecha_ultima_dosis = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, Visitas1PacienteFormComponent_div_43_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "HTA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_49_listener($event) { return ctx.pacientes.hta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_53_listener($event) { return ctx.pacientes.hta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Asma");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_60_listener($event) { return ctx.pacientes.asma = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_64_listener($event) { return ctx.pacientes.asma = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "DM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_71_listener($event) { return ctx.pacientes.dm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_75_listener($event) { return ctx.pacientes.dm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "ARTRITIS REUMATOIDEA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_82_listener($event) { return ctx.pacientes.artritis = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_86_listener($event) { return ctx.pacientes.artritis = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "TBC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_93_listener($event) { return ctx.pacientes.tbc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_97_listener($event) { return ctx.pacientes.tbc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "HEPATITIS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_104_listener($event) { return ctx.pacientes.hepatitis = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_108_listener($event) { return ctx.pacientes.hepatitis = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "VIH-SIDA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_115_listener($event) { return ctx.pacientes.vih_sida = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_119_listener($event) { return ctx.pacientes.vih_sida = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Otras");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_125_listener($event) { return ctx.pacientes.otras = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "Alergias");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_input_ngModelChange_130_listener($event) { return ctx.pacientes.alergias = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "REACCIONES ADVERSAS A LA VACUNA PREVIA: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "textarea", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas1PacienteFormComponent_Template_textarea_ngModelChange_135_listener($event) { return ctx.pacientes.reaccion_vacuna = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "                                                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](137, Visitas1PacienteFormComponent_button_137_Template, 2, 0, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](138, Visitas1PacienteFormComponent_button_138_Template, 2, 0, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "footer", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](34, _c0, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](36, _c1, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](38, _c2, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](40, _c4, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](42, _c5, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["vacuna_previa_sars_cov2"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.vacuna_previa_sars_cov2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("max", ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["fecha_ultima_dosis"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.fecha_ultima_dosis);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.controls["fecha_ultima_dosis"].touched && (ctx.Form.controls["fecha_ultima_dosis"].errors == null ? null : ctx.Form.controls["fecha_ultima_dosis"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.hta);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.hta);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.asma);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.asma);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.dm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.dm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.artritis);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.artritis);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.tbc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.tbc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.hepatitis);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.hepatitis);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.vih_sida);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.vih_sida);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["otras"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.otras);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["alergias"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.alergias);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["reaccion_vacuna"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.pacientes.reaccion_vacuna);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__["MenuVisitasComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNpdGFzMS1wYWNpZW50ZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "LOJo":
/*!************************************************************!*\
  !*** ./src/app/components/public/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            id: 0,
            name: '',
            email: '',
            password: '',
            image: '',
            nombre_img: '',
            ente_id: 0
        };
    }
    login() {
        this.auth.login(this.credentials).subscribe(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                icon: 'success',
                title: 'Ingresando...',
            });
            this.router.navigateByUrl('/inicio');
        }, err => {
            console.error(err);
            if (err.status === 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error!', 'El servidor no esta activo, no podra ingresar al sistema por favor contactar al Administrador...', 'error');
            }
            else if (err.status === 400) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error!', '!Datos Incorrectos...', 'error');
            }
        });
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 10, vars: 2, consts: [[1, "bg"], [1, "loginBox"], ["src", "https://i.ibb.co/yVGxFPR/2.png", "height", "100px", "width", "100px", 1, "user"], [3, "submit"], [1, "inputBox"], ["id", "uname", "type", "text", "name", "email", "placeholder", "Correo Electronico", 3, "ngModel", "ngModelChange"], ["id", "pass", "type", "password", "name", "password", "placeholder", "Ingresar Contrase\u00F1a.", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Login"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ESPROMED");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_5_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.credentials.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.credentials.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.credentials.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.credentials.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".bg[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: url(https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/reportajes/vacunas-contra-la-covid-19-el-top-ten-mundial-de-las-candidatas-mas-avanzadas/8315588-4-esl-MX/Vacunas-contra-la-COVID-19-el-top-ten-mundial-de-las-candidatas-mas-avanzadas.jpg) no-repeat;\r\n    height: 100vh;\r\n    font-family: sans-serif;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    overflow: hidden\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    body[_ngcontent-%COMP%] {\r\n        background-size: cover;\r\n            }\r\n}\r\n\r\n#particles-js[_ngcontent-%COMP%] {\r\n    height: 100%\r\n}\r\n\r\n.loginBox[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 350px;\r\n    min-height: 200px;\r\n    background: linear-gradient(90deg, rgba(0,115,207,1) 50%, rgba(69,165,252,1) 100%);\r\n    border-radius: 10px;\r\n    padding: 40px;\r\n    box-sizing: border-box\r\n}\r\n\r\n.user[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    display: block;\r\n    margin-bottom: 20px\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0 0 20px;\r\n    color: #f5f1f9;\r\n    text-align: center\r\n}\r\n\r\n.loginBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 20px\r\n}\r\n\r\n.loginBox[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .loginBox[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-bottom: 2px solid #f5f1f9;\r\n    outline: none;\r\n    height: 40px;\r\n    color: #212529;\r\n    background: #f8f9fa;\r\n    font-size: 16px;\r\n    padding-left: 20px;\r\n    box-sizing: border-box\r\n}\r\n\r\n.loginBox[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:hover, .loginBox[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:hover {\r\n    color: #42F3FA;\r\n    border: 1px solid #42F3FA;\r\n    box-shadow: 0 0 5px rgba(0, 255, 0, .3), 0 0 10px rgba(0, 255, 0, .2), 0 0 15px rgba(0, 255, 0, .1), 0 2px 0 black\r\n}\r\n\r\n.loginBox[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus, .loginBox[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus {\r\n    border-bottom: 2px solid #42F3FA\r\n}\r\n\r\n.inputBox[_ngcontent-%COMP%] {\r\n    position: relative\r\n}\r\n\r\n.inputBox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 10px;\r\n    color: #f5f1f9\r\n}\r\n\r\n.loginBox[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: none;\r\n    height: 40px;\r\n    font-size: 16px;\r\n    background: #89868b;\r\n    color: #fff;\r\n    border-radius: 20px;\r\n    cursor: pointer\r\n}\r\n\r\n.loginBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #f5f1f9;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    display: block\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #00ffff\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    color: #f5f1f9\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLDZTQUE2UztJQUM3UyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtZQUNsQjtBQUNaOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtGQUFrRjtJQUNsRixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBOztJQUVJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Q7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZDdsanU1NnZsYmRyaS5jbG91ZGZyb250Lm5ldC92YXIvZXp3ZWJpbl9zaXRlL3N0b3JhZ2UvaW1hZ2VzL19hbGlhc2VzL2ltZ18xY29sL3JlcG9ydGFqZXMvdmFjdW5hcy1jb250cmEtbGEtY292aWQtMTktZWwtdG9wLXRlbi1tdW5kaWFsLWRlLWxhcy1jYW5kaWRhdGFzLW1hcy1hdmFuemFkYXMvODMxNTU4OC00LWVzbC1NWC9WYWN1bmFzLWNvbnRyYS1sYS1DT1ZJRC0xOS1lbC10b3AtdGVuLW11bmRpYWwtZGUtbGFzLWNhbmRpZGF0YXMtbWFzLWF2YW56YWRhcy5qcGcpIG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgfVxyXG59XHJcblxyXG4jcGFydGljbGVzLWpzIHtcclxuICAgIGhlaWdodDogMTAwJVxyXG59XHJcblxyXG4ubG9naW5Cb3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsMTE1LDIwNywxKSA1MCUsIHJnYmEoNjksMTY1LDI1MiwxKSAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG59XHJcblxyXG4udXNlciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweFxyXG59XHJcblxyXG5oMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwIDAgMjBweDtcclxuICAgIGNvbG9yOiAjZjVmMWY5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi5sb2dpbkJveCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHhcclxufVxyXG5cclxuLmxvZ2luQm94IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4ubG9naW5Cb3ggaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjVmMWY5O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxufVxyXG5cclxuLmxvZ2luQm94IGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmhvdmVyLFxyXG4ubG9naW5Cb3ggaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNDJGM0ZBO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQyRjNGQTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAyNTUsIDAsIC4zKSwgMCAwIDEwcHggcmdiYSgwLCAyNTUsIDAsIC4yKSwgMCAwIDE1cHggcmdiYSgwLCAyNTUsIDAsIC4xKSwgMCAycHggMCBibGFja1xyXG59XHJcblxyXG4ubG9naW5Cb3ggaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXHJcbi5sb2dpbkJveCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0MkYzRkFcclxufVxyXG5cclxuLmlucHV0Qm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcblxyXG4uaW5wdXRCb3ggc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogI2Y1ZjFmOVxyXG59XHJcblxyXG4ubG9naW5Cb3ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzg5ODY4YjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4ubG9naW5Cb3ggYSB7XHJcbiAgICBjb2xvcjogI2Y1ZjFmOTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwZmZmZlxyXG59XHJcblxyXG5wIHtcclxuICAgIGNvbG9yOiAjZjVmMWY5XHJcbn0iXX0= */"] });


/***/ }),

/***/ "QkUA":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia-clinica/historia-clinica-varias-telemedicinas-form/historia-clinica-varias-telemedicinas-form.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: HistoriaClinicaVariasTelemedicinasFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaClinicaVariasTelemedicinasFormComponent", function() { return HistoriaClinicaVariasTelemedicinasFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../template/menu/menu-visitas/menu-visitas.component */ "duu2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");












function HistoriaClinicaVariasTelemedicinasFormComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Telemedicina es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaVariasTelemedicinasFormComponent_tr_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const telemedicina_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, telemedicina_r2.campo_telemedicina));
} }
const _c0 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
class HistoriaClinicaVariasTelemedicinasFormComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"); //Fecha Actual
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.telemedicinas = [];
        this.paginate = 1;
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            paciente_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            campo_telemedicina: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.getTelemedicinas();
    }
    getTelemedicinas() {
        this.comboListService.getVariasTelemedicinas().subscribe(res => {
            this.telemedicinas = res;
            console.log(res);
        }, err => {
            console.log(err);
            if (err.status === 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', 'El servidor no esta activo, no podra ver los datos...', 'error');
            }
        });
    }
    onReset() {
        this.Form.reset();
    }
    Guardar() {
        const params = this.activatedRoute.snapshot.params;
        this.Form.get('paciente_id').setValue(params.id);
        this.comboListService.saveVariasTelemedicinas(this.Form.value).subscribe(res => {
            console.log(res);
            //this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
            this.onReset();
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateVariasTelemedicinas(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
HistoriaClinicaVariasTelemedicinasFormComponent.ɵfac = function HistoriaClinicaVariasTelemedicinasFormComponent_Factory(t) { return new (t || HistoriaClinicaVariasTelemedicinasFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"])); };
HistoriaClinicaVariasTelemedicinasFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HistoriaClinicaVariasTelemedicinasFormComponent, selectors: [["app-historia-clinica-varias-telemedicinas-form"]], decls: 47, vars: 14, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar Telemedicina", "formControlName", "campo_telemedicina", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"], [1, "mt-0", "header-title"], [1, "col-md-12"], [1, "float-right"], ["type", "text", "name", "filter", "placeholder", "Buscar...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table-rep-plugin"], ["data-pattern", "priority-columns", 1, "table-responsive", "b-0"], ["id", "tech-companies-1", 1, "table", "table-striped"], ["data-priority", "1"], [4, "ngFor", "ngForOf"], ["previousLabel", "Anterior", "nextLabel", "Siguiente", 3, "pageChange"], [1, "footer"], [1, "invalid-feedback"], [1, "h-float"]], template: function HistoriaClinicaVariasTelemedicinasFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-menu-visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Varias Telemedicinas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Campo Telemedicina");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaVariasTelemedicinasFormComponent_Template_input_ngModelChange_21_listener($event) { return ctx.pacientes.campo_telemedicina = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, HistoriaClinicaVariasTelemedicinasFormComponent_div_22_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriaClinicaVariasTelemedicinasFormComponent_Template_button_click_23_listener() { return ctx.Guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h4", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Listado de Telemedicinas Del Paciente");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaVariasTelemedicinasFormComponent_Template_input_ngModelChange_33_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Nombre Telemedicina");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, HistoriaClinicaVariasTelemedicinasFormComponent_tr_42_Template, 4, 3, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "pagination-controls", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function HistoriaClinicaVariasTelemedicinasFormComponent_Template_pagination_controls_pageChange_45_listener($event) { return ctx.paginate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "footer", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["campo_telemedicina"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.campo_telemedicina);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.controls["campo_telemedicina"].touched && (ctx.Form.controls["campo_telemedicina"].errors == null ? null : ctx.Form.controls["campo_telemedicina"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](43, 6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](44, 9, ctx.telemedicinas, ctx.filter), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, ctx.paginate)));
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__["MenuVisitasComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpYS1jbGluaWNhLXZhcmlhcy10ZWxlbWVkaWNpbmFzLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "RwXd":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia-clinica/historia-clinica-telemedicina-form/historia-clinica-telemedicina-form.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: HistoriaClinicaTelemedicinaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaClinicaTelemedicinaFormComponent", function() { return HistoriaClinicaTelemedicinaFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../template/menu/menu-visitas/menu-visitas.component */ "duu2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function HistoriaClinicaTelemedicinaFormComponent_button_50_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriaClinicaTelemedicinaFormComponent_button_50_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaTelemedicinaFormComponent_button_51_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriaClinicaTelemedicinaFormComponent_button_51_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class HistoriaClinicaTelemedicinaFormComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"); //Fecha Actual
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            paciente_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            numero_telemedicina: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            fecha_telemedicina: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            presenta_sintomas: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            sintomas: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            terapia_concomitante: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        this.comboListService.getVisitaTre(params.id) // obtengo el juego con el parametro del id
            .subscribe(res => {
            console.log(res);
            this.pacientes = res;
            this.Form.patchValue({
                paciente_id: this.pacientes.paciente_id,
                numero_telemedicina: this.pacientes.numero_telemedicina,
                fecha_telemedicina: this.pacientes.fecha_telemedicina,
                presenta_sintomas: this.pacientes.presenta_sintomas,
                sintomas: this.pacientes.sintomas,
                terapia_concomitante: this.pacientes.terapia_concomitante,
            });
            this.edit = true;
        }, err => console.log(err));
    }
    Guardar() {
        const params = this.activatedRoute.snapshot.params;
        this.Form.get('paciente_id').setValue(params.id);
        this.comboListService.saveVisitaTres(this.Form.value).subscribe(res => {
            console.log(res);
            //this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateVisitaTres(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
HistoriaClinicaTelemedicinaFormComponent.ɵfac = function HistoriaClinicaTelemedicinaFormComponent_Factory(t) { return new (t || HistoriaClinicaTelemedicinaFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"])); };
HistoriaClinicaTelemedicinaFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HistoriaClinicaTelemedicinaFormComponent, selectors: [["app-historia-clinica-telemedicina-form"]], decls: 53, vars: 14, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar", "formControlName", "numero_telemedicina", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "date", "onkeydown", "return false", "id", "example-date-input", "formControlName", "fecha_telemedicina", 1, "form-control", 3, "max", "ngClass", "ngModel", "ngModelChange"], [1, "col-sm-1"], [1, "btn", "btn-primary"], ["type", "radio", "name", "presenta_sintomas", "id", "presenta_sintomas", "value", "si", "formControlName", "presenta_sintomas", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger"], ["type", "radio", "name", "presenta_sintomas", "id", "presenta_sintomas", "value", "no", "formControlName", "presenta_sintomas", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "sintomas", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "formControlName", "terapia_concomitante", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function HistoriaClinicaTelemedicinaFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-menu-visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "TELEMEDICINA PACIENTE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "N\u00BA DE TELEMEDICINA: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaTelemedicinaFormComponent_Template_input_ngModelChange_21_listener($event) { return ctx.pacientes.numero_telemedicina = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Fecha Telemedicina");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaTelemedicinaFormComponent_Template_input_ngModelChange_26_listener($event) { return ctx.pacientes.fecha_telemedicina = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\u00BFEL PACIENTE PRESENTA S\u00CDNTOMAS? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaTelemedicinaFormComponent_Template_input_ngModelChange_32_listener($event) { return ctx.pacientes.presenta_sintomas = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaTelemedicinaFormComponent_Template_input_ngModelChange_36_listener($event) { return ctx.pacientes.presenta_sintomas = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "ENUMERE LOS S\u00CDNTOMAS: (FECHA Y HORA DE INICIO Y FINALIZACI\u00D3N): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaTelemedicinaFormComponent_Template_textarea_ngModelChange_42_listener($event) { return ctx.pacientes.sintomas = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "                                                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "ENUMERE LA TERAPIA CONCOMITANTE (FECHA Y HORA DE INICIO Y FINALIZACI\u00D3N): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaTelemedicinaFormComponent_Template_textarea_ngModelChange_48_listener($event) { return ctx.pacientes.terapia_concomitante = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "                                          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, HistoriaClinicaTelemedicinaFormComponent_button_50_Template, 2, 0, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, HistoriaClinicaTelemedicinaFormComponent_button_51_Template, 2, 0, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "footer", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["numero_telemedicina"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.numero_telemedicina);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("max", ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["fecha_telemedicina"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.fecha_telemedicina);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.presenta_sintomas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.presenta_sintomas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["sintomas"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.pacientes.sintomas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["terapia_concomitante"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.pacientes.terapia_concomitante);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__["MenuVisitasComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpYS1jbGluaWNhLXRlbGVtZWRpY2luYS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "Sx2Q":
/*!****************************************************************************!*\
  !*** ./src/app/components/admin/template/tabs-menu/tabs-menu.component.ts ***!
  \****************************************************************************/
/*! exports provided: TabsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsMenuComponent", function() { return TabsMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TabsMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
TabsMenuComponent.ɵfac = function TabsMenuComponent_Factory(t) { return new (t || TabsMenuComponent)(); };
TabsMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsMenuComponent, selectors: [["app-tabs-menu"]], decls: 0, vars: 0, template: function TabsMenuComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLW1lbnUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'plantilla';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "VhhF":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia-clinica/historia-clinica-form-paciente/historia-clinica-form-paciente.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: HistoriaClinicaFormPacienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaClinicaFormPacienteComponent", function() { return HistoriaClinicaFormPacienteComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../template/menu/menu-visitas/menu-visitas.component */ "duu2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function HistoriaClinicaFormPacienteComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Cedula es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormPacienteComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Nombres es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormPacienteComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No se aceptan valores numericos... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormPacienteComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Apellidos es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormPacienteComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No se aceptan valores numericos... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormPacienteComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Sexo es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormPacienteComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Fecha Nacimiento es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormPacienteComponent_button_84_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriaClinicaFormPacienteComponent_button_84_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class HistoriaClinicaFormPacienteComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"); //Fecha Actual
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            cedula: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            nombres: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            apellidos: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            fecha_nacimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            sexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            raza: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            domicilio_actual: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            telefono_local: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            telefono_celular: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        if (params.id) {
            this.comboListService.getPaciente(params.id) // obtengo el juego con el parametro del id
                .subscribe(res => {
                console.log(res);
                this.pacientes = res;
                this.Form.patchValue({
                    cedula: this.pacientes.cedula,
                    nombres: this.pacientes.nombres,
                    apellidos: this.pacientes.apellidos,
                    fecha_nacimiento: this.pacientes.fecha_nacimiento,
                    sexo: this.pacientes.sexo,
                    raza: this.pacientes.raza,
                    domicilio_actual: this.pacientes.domicilio_actual,
                    telefono_local: this.pacientes.telefono_local,
                    telefono_celular: this.pacientes.telefono_celular,
                    email: this.pacientes.email
                    //imagen_qr: this.vacunas.imagen_qr,
                });
                this.edit = true;
            }, err => console.log(err));
        }
    }
    menu() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        //alert(this.link); 
    }
    Actualizar() {
        this.comboListService.updatePacientes(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
HistoriaClinicaFormPacienteComponent.ɵfac = function HistoriaClinicaFormPacienteComponent_Factory(t) { return new (t || HistoriaClinicaFormPacienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"])); };
HistoriaClinicaFormPacienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HistoriaClinicaFormPacienteComponent, selectors: [["app-historia-clinica-form-paciente"]], decls: 86, vars: 28, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar Nombre de Vacuna", "formControlName", "cedula", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "placeholder", "Ingresar Nombres", "formControlName", "nombres", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar apellidos", "formControlName", "apellidos", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "sexo", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["value", "masculino"], ["value", "femenino"], ["type", "date", "onkeydown", "return false", "id", "example-date-input", "placeholder", "Ingresar fecha nacimiento", "formControlName", "fecha_nacimiento", 1, "form-control", 3, "max", "ngClass", "ngModel", "ngModelChange"], [1, "col-sm-2"], ["type", "text", "placeholder", "Ingresar", "formControlName", "telefono_local", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "0212"], [1, "col-sm-8"], ["type", "text", "maxlength", "11", "placeholder", "Ingresar Telefono", "formControlName", "telefono_local", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "telefono_celular", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "0412"], ["value", "0414"], ["value", "0424"], ["value", "0416"], ["value", "0426"], ["type", "text", "maxlength", "11", "placeholder", "Ingresar Telefono", "formControlName", "telefono_celular", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Correo Electr\u00F3nico", "formControlName", "email", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function HistoriaClinicaFormPacienteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-menu-visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "IDENTIFICACI\u00D3N DEL PACIENTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Cedula");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormPacienteComponent_Template_input_ngModelChange_21_listener($event) { return ctx.pacientes.cedula = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, HistoriaClinicaFormPacienteComponent_div_22_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Nombres");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormPacienteComponent_Template_input_ngModelChange_27_listener($event) { return ctx.pacientes.nombres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, HistoriaClinicaFormPacienteComponent_div_28_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, HistoriaClinicaFormPacienteComponent_div_29_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Apellidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormPacienteComponent_Template_input_ngModelChange_34_listener($event) { return ctx.pacientes.apellidos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, HistoriaClinicaFormPacienteComponent_div_35_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, HistoriaClinicaFormPacienteComponent_div_36_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Sexo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormPacienteComponent_Template_select_ngModelChange_41_listener($event) { return ctx.pacientes.sexo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Masculino");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Femenino");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, HistoriaClinicaFormPacienteComponent_div_46_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Fecha De Nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormPacienteComponent_Template_input_ngModelChange_51_listener($event) { return ctx.pacientes.fecha_nacimiento = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, HistoriaClinicaFormPacienteComponent_div_52_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Tel\u00E9fono Local");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormPacienteComponent_Template_select_ngModelChange_57_listener($event) { return ctx.pacientes.telefono_local = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "0212");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormPacienteComponent_Template_input_ngModelChange_61_listener($event) { return ctx.pacientes.telefono_local = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Tel\u00E9fono M\u00F3vil");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormPacienteComponent_Template_select_ngModelChange_66_listener($event) { return ctx.pacientes.telefono_celular = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "0412");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "0414");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "0424");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "0416");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "0426");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormPacienteComponent_Template_input_ngModelChange_78_listener($event) { return ctx.pacientes.telefono_celular = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Correo Electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormPacienteComponent_Template_input_ngModelChange_83_listener($event) { return ctx.pacientes.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](84, HistoriaClinicaFormPacienteComponent_button_84_Template, 2, 0, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "footer", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["cedula"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.cedula);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.controls["cedula"].touched && (ctx.Form.controls["cedula"].errors == null ? null : ctx.Form.controls["cedula"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["nombres"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.nombres);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.controls["nombres"].touched && (ctx.Form.controls["nombres"].errors == null ? null : ctx.Form.controls["nombres"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.controls["nombres"].touched && (ctx.Form.controls["nombres"].errors == null ? null : ctx.Form.controls["nombres"].errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["apellidos"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.apellidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.controls["apellidos"].touched && (ctx.Form.controls["apellidos"].errors == null ? null : ctx.Form.controls["apellidos"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.controls["apellidos"].touched && (ctx.Form.controls["apellidos"].errors == null ? null : ctx.Form.controls["apellidos"].errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["sexo"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.pacientes.sexo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.controls["sexo"].touched && (ctx.Form.controls["sexo"].errors == null ? null : ctx.Form.controls["sexo"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("max", ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["fecha_nacimiento"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.fecha_nacimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.controls["fecha_nacimiento"].touched && (ctx.Form.controls["fecha_nacimiento"].errors == null ? null : ctx.Form.controls["fecha_nacimiento"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.telefono_local);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["telefono_local"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.telefono_local);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.telefono_celular);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["telefono_celular"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.telefono_celular);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["email"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__["MenuVisitasComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpYS1jbGluaWNhLWZvcm0tcGFjaWVudGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "X30y":
/*!*************************************************************************!*\
  !*** ./src/app/compoonents/admin/template/sidebar/sidebar.component.ts ***!
  \*************************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SidebarComponent {
    constructor() { }
    ngOnInit() {
        $('.button-menu-mobile').on('click', function (event) {
            event.preventDefault();
            $("body").toggleClass("enlarged");
        });
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 15, vars: 0, consts: [[1, "topbar"], [1, "topbar-left"], ["href", "index.html", 1, "logo"], ["src", "https://espromedbio.gob.ve/wp-content/uploads/2018/12/logo-espromed-bio-blanco-300.png", "alt", "", 2, "height", "50px"], ["id", "search-wrap", 1, "search-wrap"], [1, "search-bar"], ["type", "search", "placeholder", "Search", 1, "search-input"], ["href", "#", "data-target", "#search-wrap", 1, "close-search", "toggle-search"], [1, "mdi", "mdi-close-circle"], [1, "navbar-custom"], [1, "navbar-right", "list-inline", "float-right", "mb-0"], [1, "list-inline", "menu-left", "mb-0"], [1, "float-left"], [1, "button-menu-mobile", "open-left", "waves-effect"], [1, "mdi", "mdi-menu"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".topbar[_ngcontent-%COMP%]   .topbar-left[_ngcontent-%COMP%] {\r\n    background-color: #007bff !important;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQzs7QUFFeEMiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcGJhciAudG9wYmFyLWxlZnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ "XBfQ":
/*!*********************************************!*\
  !*** ./src/app/services/vacunas.service.ts ***!
  \*********************************************/
/*! exports provided: VacunasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacunasService", function() { return VacunasService; });
/* harmony import */ var _interfaces_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/interface */ "n+Y7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class VacunasService {
    constructor(http) {
        this.http = http;
    }
    getVacunas() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/vacunados`);
    }
    getVacunasListadoCompletoQR() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/vacunas/listado/qr/completo`);
    }
    getListadoVacunas() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/vacunas/listado`);
    }
    // para capturar la cedula si esta registrado //
    getVacunaCedula(cedula, tipo_identificacion) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/vacunas/cedula/${cedula}/${tipo_identificacion}`);
    }
    // para capturar la cedula si esta registrado //
    getVacunaCedulaPatria(cedula, centro_salud_id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/vacunados/patria/master/cedula/${cedula}/${centro_salud_id}`);
    }
    // para capturar verificar la cedula en el QR //
    getQRVacunaCedula(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/vacunas/qr/${id}`);
    }
    getCeduladosSaime(cedula, tipo_identificacion) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/cedulados/${cedula}/${tipo_identificacion}`);
    }
    getVacuna(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/vacunados/${id}`);
    }
    getVacunad(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/vacunados/${id}`);
    }
    saveVacunas(vacunas) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/vacunados`, vacunas);
    }
    updateVacuna(id, updatedVacuna) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/vacunados/${id}`, updatedVacuna);
    }
    // COMBO DEPENDIENTES //
    getEstados() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/estados`);
    }
    getMunicipios() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/municipios`);
    }
}
VacunasService.ɵfac = function VacunasService_Factory(t) { return new (t || VacunasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
VacunasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VacunasService, factory: VacunasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "YLgH":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia-clinica/historia-clinica-form-examen-fisico/historia-clinica-form-examen-fisico.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: HistoriaClinicaFormExamenFisicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaClinicaFormExamenFisicoComponent", function() { return HistoriaClinicaFormExamenFisicoComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../template/menu/menu-visitas/menu-visitas.component */ "duu2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function HistoriaClinicaFormExamenFisicoComponent_button_138_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriaClinicaFormExamenFisicoComponent_button_138_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormExamenFisicoComponent_button_139_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriaClinicaFormExamenFisicoComponent_button_139_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/historia_clinica/admin/pacientes/form/visita_uno", a1]; };
const _c1 = function (a1) { return ["/historia_clinica/admin/form/examen_fisicos", a1]; };
const _c2 = function (a1) { return ["/historia_clinica/admin/form/paraclinicos", a1]; };
const _c3 = "/historia_clinica/admin/form/categorizacion_riesgo_infeccion";
const _c4 = function (a1) { return [_c3, a1]; };
const _c5 = function (a1) { return ["/historia_clinica/admin/form/vacunacion_previa", a1]; };
class HistoriaClinicaFormExamenFisicoComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"); //Fecha Actual
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            paciente_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            vacuna_previa_sars_cov2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            fecha_ultima_dosis: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            hta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            asma: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            dm: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            artritis: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            tbc: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            hepatitis: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            vih_sida: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            otras: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            alergias: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            reaccion_vacuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            signo_ta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            signo_fc: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            signo_fr: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            signo_tmp: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            signo_sat2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            examenf_general: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            examenf_cabeza: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            examenf_cuello: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            examenf_sistema_linfatico: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            examenf_torax: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            examenf_abdomen: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            examenf_extremidades: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            examenf_neurologico: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            otros: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            pcr_sars_cov2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            prueba_embarazo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_signo_ta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_signo_fc: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_signo_fr: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_signo_tmp: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            datos_signo_sat2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        this.comboListService.getVisitaUno(params.id) // obtengo el juego con el parametro del id
            .subscribe(res => {
            console.log(res);
            this.pacientes = res;
            this.Form.patchValue({
                paciente_id: this.pacientes.paciente_id,
                vacuna_previa_sars_cov2: this.pacientes.vacuna_previa_sars_cov2,
                fecha_ultima_dosis: this.pacientes.fecha_ultima_dosis,
                hta: this.pacientes.hta,
                asma: this.pacientes.asma,
                dm: this.pacientes.dm,
                artritis: this.pacientes.artritis,
                tbc: this.pacientes.tbc,
                hepatitis: this.pacientes.hepatitis,
                vih_sida: this.pacientes.vih_sida,
                otras: this.pacientes.otras,
                alergias: this.pacientes.alergias,
                reaccion_vacuna: this.pacientes.reaccion_vacuna,
                signo_ta: this.pacientes.signo_ta,
                signo_fc: this.pacientes.signo_fc,
                signo_fr: this.pacientes.signo_fr,
                signo_tmp: this.pacientes.signo_tmp,
                signo_sat2: this.pacientes.signo_sat2,
                examenf_general: this.pacientes.examenf_general,
                examenf_cabeza: this.pacientes.examenf_cabeza,
                examenf_cuello: this.pacientes.examenf_cuello,
                examenf_sistema_linfatico: this.pacientes.examenf_sistema_linfatico,
                examenf_torax: this.pacientes.examenf_torax,
                examenf_abdomen: this.pacientes.examenf_abdomen,
                examenf_extremidades: this.pacientes.examenf_extremidades,
                examenf_neurologico: this.pacientes.examenf_neurologico,
                otros: this.pacientes.otros,
                pcr_sars_cov2: this.pacientes.pcr_sars_cov2,
                prueba_embarazo: this.pacientes.prueba_embarazo,
                datos_signo_ta: this.pacientes.datos_signo_ta,
                datos_signo_fc: this.pacientes.datos_signo_fc,
                datos_signo_fr: this.pacientes.datos_signo_fr,
                datos_signo_tmp: this.pacientes.datos_signo_tmp,
                datos_signo_sat2: this.pacientes.datos_signo_sat2,
            });
            this.edit = true;
        }, err => console.log(err));
    }
    Guardar() {
        const params = this.activatedRoute.snapshot.params;
        this.Form.get('paciente_id').setValue(params.id);
        this.comboListService.saveVisitaUnos(this.Form.value).subscribe(res => {
            console.log(res);
            //this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateVisitaUnos(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
HistoriaClinicaFormExamenFisicoComponent.ɵfac = function HistoriaClinicaFormExamenFisicoComponent_Factory(t) { return new (t || HistoriaClinicaFormExamenFisicoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"])); };
HistoriaClinicaFormExamenFisicoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HistoriaClinicaFormExamenFisicoComponent, selectors: [["app-historia-clinica-form-examen-fisico"]], decls: 141, vars: 56, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], ["id", "nav-tab", 1, "nav", "nav-tabs"], ["id", "nav-home-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", 3, "routerLink"], ["id", "nav-profile-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", "active", 3, "routerLink"], ["id", "nav-contact-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", 3, "routerLink"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-home", 1, "tab-pane", "fade", "show", "active"], [1, "mt-5", "mb-3"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-2"], [1, "btn", "btn-primary"], ["type", "radio", "name", "signo_ta", "id", "signo_ta", "value", "si", "formControlName", "signo_ta", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger"], ["type", "radio", "name", "signo_ta", "id", "signo_ta", "value", "no", "formControlName", "signo_ta", 3, "ngModel", "ngModelChange"], [1, "col-sm-4"], ["type", "text", "placeholder", "Ingresar Datos TA", "formControlName", "datos_signo_ta", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "radio", "name", "signo_fc", "id", "signo_fc", "value", "si", "formControlName", "signo_fc", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "signo_fc", "id", "signo_fc", "value", "no", "formControlName", "signo_fc", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Datos FC", "formControlName", "datos_signo_fc", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "radio", "name", "signo_fr", "id", "signo_fr", "value", "si", "formControlName", "signo_fr", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "signo_fr", "id", "signo_fr", "value", "no", "formControlName", "signo_fr", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Datos F.R", "formControlName", "datos_signo_fr", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "radio", "name", "signo_tmp", "id", "signo_tmp", "value", "si", "formControlName", "signo_tmp", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "signo_tmp", "id", "signo_tmp", "value", "no", "formControlName", "signo_tmp", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Datos Temp", "formControlName", "datos_signo_tmp", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "radio", "name", "signo_sat2", "id", "signo_sat2", "value", "si", "formControlName", "signo_sat2", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "signo_sat2", "id", "signo_sat2", "value", "no", "formControlName", "signo_sat2", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Datos SAT 02", "formControlName", "datos_signo_sat2", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], [1, "form-group", "row", "mt-5"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar", "formControlName", "examenf_general", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "examenf_cabeza", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "examenf_cuello", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "examenf_sistema_linfatico", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "examenf_torax", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "examenf_abdomen", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "examenf_extremidades", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "examenf_neurologico", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "otros", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function HistoriaClinicaFormExamenFisicoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-menu-visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "VISITA 1 PACIENTE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Antecedentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Examen Fisico");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Paraclinicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Categorizaci\u00F3n de Riesgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Vacunaci\u00F3n Previa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Signo Vitales");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "TA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_38_listener($event) { return ctx.pacientes.signo_ta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_41_listener($event) { return ctx.pacientes.signo_ta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_44_listener($event) { return ctx.pacientes.datos_signo_ta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "FC");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_50_listener($event) { return ctx.pacientes.signo_fc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_53_listener($event) { return ctx.pacientes.signo_fc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_56_listener($event) { return ctx.pacientes.datos_signo_fc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "F.R");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_62_listener($event) { return ctx.pacientes.signo_fr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_65_listener($event) { return ctx.pacientes.signo_fr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_68_listener($event) { return ctx.pacientes.datos_signo_fr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "TEMP");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_74_listener($event) { return ctx.pacientes.signo_tmp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_77_listener($event) { return ctx.pacientes.signo_tmp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_80_listener($event) { return ctx.pacientes.datos_signo_tmp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "SAT O2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_86_listener($event) { return ctx.pacientes.signo_sat2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_89_listener($event) { return ctx.pacientes.signo_sat2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_92_listener($event) { return ctx.pacientes.datos_signo_sat2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_97_listener($event) { return ctx.pacientes.examenf_general = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Cabeza");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_102_listener($event) { return ctx.pacientes.examenf_cabeza = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Cuello");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_107_listener($event) { return ctx.pacientes.examenf_cuello = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Sistema L\u00EDnfatico");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_112_listener($event) { return ctx.pacientes.examenf_sistema_linfatico = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Torax");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_117_listener($event) { return ctx.pacientes.examenf_torax = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Abdomen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_122_listener($event) { return ctx.pacientes.examenf_abdomen = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "Extremidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_127_listener($event) { return ctx.pacientes.examenf_extremidades = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Neurologicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_132_listener($event) { return ctx.pacientes.examenf_neurologico = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Otros");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormExamenFisicoComponent_Template_input_ngModelChange_137_listener($event) { return ctx.pacientes.otros = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](138, HistoriaClinicaFormExamenFisicoComponent_button_138_Template, 2, 0, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](139, HistoriaClinicaFormExamenFisicoComponent_button_139_Template, 2, 0, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](140, "footer", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](46, _c0, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](48, _c1, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](50, _c2, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](52, _c4, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](54, _c5, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.signo_ta);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.signo_ta);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["datos_signo_ta"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.datos_signo_ta);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.signo_fc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.signo_fc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["datos_signo_fc"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.datos_signo_fc);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.signo_fr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.signo_fr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["datos_signo_fr"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.datos_signo_fr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.signo_tmp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.signo_tmp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["datos_signo_tmp"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.datos_signo_tmp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.signo_sat2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.signo_sat2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["datos_signo_sat2"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.datos_signo_sat2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["examenf_general"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.examenf_general);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["examenf_cabeza"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.examenf_cabeza);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["examenf_cuello"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.examenf_cuello);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["examenf_sistema_linfatico"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.examenf_sistema_linfatico);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["examenf_torax"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.examenf_torax);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["examenf_abdomen"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.examenf_abdomen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["examenf_extremidades"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.examenf_extremidades);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["examenf_neurologico"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.examenf_neurologico);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["otros"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.otros);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__["MenuVisitasComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpYS1jbGluaWNhLWZvcm0tZXhhbWVuLWZpc2ljby5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "YnJ9":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia_clinica/historia-clinica-form-proceso-vacunacion/historia-clinica-form-proceso-vacunacion.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: HistoriaClinicaFormProcesoVacunacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaClinicaFormProcesoVacunacionComponent", function() { return HistoriaClinicaFormProcesoVacunacionComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _compoonents_admin_template_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../compoonents/admin/template/menu/menu-admin/menu-admin.component */ "pD0S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function HistoriaClinicaFormProcesoVacunacionComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " ingreso_vacunacion es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormProcesoVacunacionComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " fecha_vacunacion es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormProcesoVacunacionComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " hora_vacunacion es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormProcesoVacunacionComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " numero_vacunacion es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormProcesoVacunacionComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " realizado_por_vacunacion es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormProcesoVacunacionComponent_button_61_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriaClinicaFormProcesoVacunacionComponent_button_61_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.GuardarTipopacientes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormProcesoVacunacionComponent_button_62_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriaClinicaFormProcesoVacunacionComponent_button_62_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.ActualizarTipospacientes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/historia_clinica/admin/form/paciente", a1]; };
const _c1 = "/historia_clinica/admin/form/antecedentes_personales";
const _c2 = function (a1) { return [_c1, a1]; };
const _c3 = function (a1) { return ["/historia_clinica/admin/form/examen_fisicos", a1]; };
const _c4 = function (a1) { return ["/historia_clinica/admin/form/paraclinicos", a1]; };
const _c5 = "/historia_clinica/admin/form/categorizacion_riesgo_infeccion";
const _c6 = function (a1) { return [_c5, a1]; };
const _c7 = "/historia_clinica/admin/form/proceso_aleatoriazacion";
const _c8 = function (a1) { return [_c7, a1]; };
const _c9 = function (a1) { return ["/historia_clinica/admin/form/proceso_vacunacion", a1]; };
class HistoriaClinicaFormProcesoVacunacionComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            paciente_cedula: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            ingreso_vacunacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            fecha_vacunacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            hora_vacunacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            numero_vacunacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            realizado_por_vacunacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            notas_vacunacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        //this.fechaActual=new Date();
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        this.comboListService.getProcesoVacunacion(params.id) // obtengo el juego con el parametro del id
            .subscribe(res => {
            console.log(res);
            this.pacientes = res;
            this.Form.patchValue({
                cedula: this.pacientes.cedula,
                paciente_id: this.pacientes.paciente_id,
                ingreso_vacunacion: this.pacientes.ingreso_vacunacion,
                fecha_vacunacion: this.pacientes.fecha_vacunacion,
                hora_vacunacion: this.pacientes.hora_vacunacion,
                numero_vacunacion: this.pacientes.numero_vacunacion,
                realizado_por_vacunacion: this.pacientes.realizado_por_vacunacion,
                notas_vacunacion: this.pacientes.notas_vacunacion
                //imagen_qr: this.vacunas.imagen_qr,
            });
            this.edit = true;
        }, err => console.log(err));
    }
    Guardar() {
        const params = this.activatedRoute.snapshot.params;
        this.Form.get('paciente_id').setValue(params.id);
        this.comboListService.saveProcesoVacunacions(this.Form.value).subscribe(res => {
            console.log(res);
            //this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateProcesoVacunacions(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
HistoriaClinicaFormProcesoVacunacionComponent.ɵfac = function HistoriaClinicaFormProcesoVacunacionComponent_Factory(t) { return new (t || HistoriaClinicaFormProcesoVacunacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__["CombolistService"])); };
HistoriaClinicaFormProcesoVacunacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HistoriaClinicaFormProcesoVacunacionComponent, selectors: [["app-historia-clinica-form-proceso-vacunacion"]], decls: 64, vars: 39, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], [1, "btn", "btn-danger", "m-3", 3, "routerLink"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar", "formControlName", "ingreso_vacunacion", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "placeholder", "Ingresar", "formControlName", "fecha_vacunacion", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "hora_vacunacion", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "numero_vacunacion", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "realizado_por_vacunacion", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function HistoriaClinicaFormProcesoVacunacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-menu-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "PROCESO DE VACUNACI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Identificaci\u00F3n del Paciente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Antecedentes Personales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Examen F\u00EDsico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Paraclinicos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Categorizaci\u00F3n de Riesgo de Infecci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Proceso de Aleatorizaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Proceso de Vacunaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Ingreso al proceso de vacunaci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormProcesoVacunacionComponent_Template_input_ngModelChange_35_listener($event) { return ctx.pacientes.ingreso_vacunacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, HistoriaClinicaFormProcesoVacunacionComponent_div_36_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Fecha vacunaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormProcesoVacunacionComponent_Template_input_ngModelChange_41_listener($event) { return ctx.pacientes.fecha_vacunacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, HistoriaClinicaFormProcesoVacunacionComponent_div_42_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Hora vacunaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormProcesoVacunacionComponent_Template_input_ngModelChange_47_listener($event) { return ctx.pacientes.hora_vacunacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, HistoriaClinicaFormProcesoVacunacionComponent_div_48_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Numero vacunaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormProcesoVacunacionComponent_Template_input_ngModelChange_53_listener($event) { return ctx.pacientes.numero_vacunacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, HistoriaClinicaFormProcesoVacunacionComponent_div_54_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Reacci\u00F3n adversa en los 30 minutos posteriores a la inyecci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormProcesoVacunacionComponent_Template_input_ngModelChange_59_listener($event) { return ctx.pacientes.realizado_por_vacunacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, HistoriaClinicaFormProcesoVacunacionComponent_div_60_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, HistoriaClinicaFormProcesoVacunacionComponent_button_61_Template, 2, 0, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, HistoriaClinicaFormProcesoVacunacionComponent_button_62_Template, 2, 0, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "footer", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c0, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](27, _c2, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](29, _c3, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](31, _c4, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](33, _c6, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](35, _c8, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](37, _c9, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["ingreso_vacunacion"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.ingreso_vacunacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.controls["ingreso_vacunacion"].touched && (ctx.Form.controls["ingreso_vacunacion"].errors == null ? null : ctx.Form.controls["ingreso_vacunacion"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["fecha_vacunacion"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.fecha_vacunacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.controls["fecha_vacunacion"].touched && (ctx.Form.controls["fecha_vacunacion"].errors == null ? null : ctx.Form.controls["fecha_vacunacion"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["hora_vacunacion"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.hora_vacunacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.controls["hora_vacunacion"].touched && (ctx.Form.controls["hora_vacunacion"].errors == null ? null : ctx.Form.controls["hora_vacunacion"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["numero_vacunacion"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.numero_vacunacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.controls["numero_vacunacion"].touched && (ctx.Form.controls["numero_vacunacion"].errors == null ? null : ctx.Form.controls["numero_vacunacion"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["realizado_por_vacunacion"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.realizado_por_vacunacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.Form.controls["realizado_por_vacunacion"].touched && (ctx.Form.controls["realizado_por_vacunacion"].errors == null ? null : ctx.Form.controls["realizado_por_vacunacion"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _compoonents_admin_template_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_6__["MenuAdminComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpYS1jbGluaWNhLWZvcm0tcHJvY2Vzby12YWN1bmFjaW9uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _compoonents_admin_template_menu_menu_general_menu_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compoonents/admin/template/menu/menu-general/menu-general.component */ "hFxb");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _components_admin_inicio_admin_inicio_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/inicio-admin/inicio-admin.component */ "6PkB");
/* harmony import */ var _components_public_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/public/login/login.component */ "LOJo");
/* harmony import */ var _components_admin_vacunados_vacunados_form_admin_vacunados_form_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/vacunados/vacunados-form-admin/vacunados-form-admin.component */ "ZYre");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "hiuq");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _compoonents_admin_template_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./compoonents/admin/template/menu/menu-admin/menu-admin.component */ "pD0S");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_cedula_form_historia_clinica_cedula_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/admin/historia-clinica/historia-clinica-cedula-form/historia-clinica-cedula-form.component */ "CEa+");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_form_paciente_historia_clinica_form_paciente_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/admin/historia-clinica/historia-clinica-form-paciente/historia-clinica-form-paciente.component */ "VhhF");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_form_antecedentes_personales_historia_clinica_form_antecedentes_personales_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin/historia-clinica/historia-clinica-form-antecedentes-personales/historia-clinica-form-antecedentes-personales.component */ "dfk+");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_form_examen_fisico_historia_clinica_form_examen_fisico_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin/historia-clinica/historia-clinica-form-examen-fisico/historia-clinica-form-examen-fisico.component */ "YLgH");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_form_paraclinicos_historia_clinica_form_paraclinicos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin/historia_clinica/historia-clinica-form-paraclinicos/historia-clinica-form-paraclinicos.component */ "CGua");
/* harmony import */ var _components_admin_template_tabs_menu_tabs_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin/template/tabs-menu/tabs-menu.component */ "Sx2Q");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_form_categorizacion_riesgo_infeccion_historia_clinica_form_categorizacion_riesgo_infeccion_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin/historia_clinica/historia-clinica-form-categorizacion-riesgo-infeccion/historia-clinica-form-categorizacion-riesgo-infeccion.component */ "zj9j");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_form_proceso_aleatorizacion_historia_clinica_form_proceso_aleatorizacion_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/admin/historia_clinica/historia-clinica-form-proceso-aleatorizacion/historia-clinica-form-proceso-aleatorizacion.component */ "v9XR");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_form_proceso_vacunacion_historia_clinica_form_proceso_vacunacion_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/admin/historia_clinica/historia-clinica-form-proceso-vacunacion/historia-clinica-form-proceso-vacunacion.component */ "YnJ9");
/* harmony import */ var _components_admin_vacunados_vacunados_list_admin_vacunados_list_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/admin/vacunados/vacunados-list-admin/vacunados-list-admin.component */ "1dbe");
/* harmony import */ var _components_admin_historia_clinica_visitas_visitas1_paciente_form_visitas1_paciente_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/admin/historia-clinica/visitas/visitas1-paciente-form/visitas1-paciente-form.component */ "JnF4");
/* harmony import */ var _components_admin_historia_clinica_visitas_visitas2_paciente_form_visitas2_paciente_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/admin/historia-clinica/visitas/visitas2-paciente-form/visitas2-paciente-form.component */ "Gj86");
/* harmony import */ var _components_admin_historia_clinica_visitas_visitas3_paciente_form_visitas3_paciente_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/admin/historia-clinica/visitas/visitas3-paciente-form/visitas3-paciente-form.component */ "+ac7");
/* harmony import */ var _components_admin_historia_clinica_visitas_visitas4_paciente_form_visitas4_paciente_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/admin/historia-clinica/visitas/visitas4-paciente-form/visitas4-paciente-form.component */ "bRR+");
/* harmony import */ var _components_admin_template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/admin/template/menu/menu-visitas/menu-visitas.component */ "duu2");
/* harmony import */ var _components_admin_historia_clinica_visitas_visitas_paciente_inicio_visitas_paciente_inicio_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/admin/historia-clinica/visitas/visitas-paciente-inicio/visitas-paciente-inicio.component */ "eWPn");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_visita1_vacunacion_previa_historia_clinica_visita1_vacunacion_previa_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/admin/historia-clinica/historia-clinica-visita1-vacunacion-previa/historia-clinica-visita1-vacunacion-previa.component */ "hkT0");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_visita2_form_historia_clinica_visita2_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/admin/historia-clinica/historia-clinica-visita2-form/historia-clinica-visita2-form.component */ "2Pn/");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_telemedicina_form_historia_clinica_telemedicina_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/admin/historia-clinica/historia-clinica-telemedicina-form/historia-clinica-telemedicina-form.component */ "RwXd");
/* harmony import */ var _components_admin_historia_clinica_visitas_criterio_inclusion_form_visitas_criterio_inclusion_form_visitas_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/admin/historia-clinica/visitas/criterio-inclusion-form-visitas/criterio-inclusion-form-visitas.component */ "csrq");
/* harmony import */ var _components_admin_historia_clinica_visitas_criterio_exclusion_form_visitas_criterio_exclusion_form_visitas_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/admin/historia-clinica/visitas/criterio-exclusion-form-visitas/criterio-exclusion-form-visitas.component */ "kh4d");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_varias_telemedicinas_form_historia_clinica_varias_telemedicinas_form_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/admin/historia-clinica/historia-clinica-varias-telemedicinas-form/historia-clinica-varias-telemedicinas-form.component */ "QkUA");
/* harmony import */ var _components_admin_pacientes_pacientes_list_admin_pacientes_list_admin_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/admin/pacientes/pacientes-list-admin/pacientes-list-admin.component */ "ul5r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/core */ "fXoL");






































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_10__["NgxQRCodeModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _compoonents_admin_template_menu_menu_general_menu_general_component__WEBPACK_IMPORTED_MODULE_3__["MenuGeneralComponent"],
        _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
        _components_admin_inicio_admin_inicio_admin_component__WEBPACK_IMPORTED_MODULE_5__["InicioAdminComponent"],
        _components_public_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _components_admin_vacunados_vacunados_form_admin_vacunados_form_admin_component__WEBPACK_IMPORTED_MODULE_7__["VacunadosFormAdminComponent"],
        _compoonents_admin_template_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_13__["MenuAdminComponent"],
        _components_admin_historia_clinica_historia_clinica_cedula_form_historia_clinica_cedula_form_component__WEBPACK_IMPORTED_MODULE_14__["HistoriaClinicaCedulaFormComponent"],
        _components_admin_historia_clinica_historia_clinica_form_paciente_historia_clinica_form_paciente_component__WEBPACK_IMPORTED_MODULE_15__["HistoriaClinicaFormPacienteComponent"],
        _components_admin_historia_clinica_historia_clinica_form_antecedentes_personales_historia_clinica_form_antecedentes_personales_component__WEBPACK_IMPORTED_MODULE_16__["HistoriaClinicaFormAntecedentesPersonalesComponent"],
        _components_admin_historia_clinica_historia_clinica_form_examen_fisico_historia_clinica_form_examen_fisico_component__WEBPACK_IMPORTED_MODULE_17__["HistoriaClinicaFormExamenFisicoComponent"],
        _components_admin_historia_clinica_historia_clinica_form_paraclinicos_historia_clinica_form_paraclinicos_component__WEBPACK_IMPORTED_MODULE_18__["HistoriaClinicaFormParaclinicosComponent"],
        _components_admin_template_tabs_menu_tabs_menu_component__WEBPACK_IMPORTED_MODULE_19__["TabsMenuComponent"],
        _components_admin_historia_clinica_historia_clinica_form_categorizacion_riesgo_infeccion_historia_clinica_form_categorizacion_riesgo_infeccion_component__WEBPACK_IMPORTED_MODULE_20__["HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent"],
        _components_admin_historia_clinica_historia_clinica_form_proceso_aleatorizacion_historia_clinica_form_proceso_aleatorizacion_component__WEBPACK_IMPORTED_MODULE_21__["HistoriaClinicaFormProcesoAleatorizacionComponent"],
        _components_admin_historia_clinica_historia_clinica_form_proceso_vacunacion_historia_clinica_form_proceso_vacunacion_component__WEBPACK_IMPORTED_MODULE_22__["HistoriaClinicaFormProcesoVacunacionComponent"],
        _components_admin_vacunados_vacunados_list_admin_vacunados_list_admin_component__WEBPACK_IMPORTED_MODULE_23__["VacunadosListAdminComponent"],
        _components_admin_historia_clinica_visitas_visitas1_paciente_form_visitas1_paciente_form_component__WEBPACK_IMPORTED_MODULE_24__["Visitas1PacienteFormComponent"],
        _components_admin_historia_clinica_visitas_visitas2_paciente_form_visitas2_paciente_form_component__WEBPACK_IMPORTED_MODULE_25__["Visitas2PacienteFormComponent"],
        _components_admin_historia_clinica_visitas_visitas3_paciente_form_visitas3_paciente_form_component__WEBPACK_IMPORTED_MODULE_26__["Visitas3PacienteFormComponent"],
        _components_admin_historia_clinica_visitas_visitas4_paciente_form_visitas4_paciente_form_component__WEBPACK_IMPORTED_MODULE_27__["Visitas4PacienteFormComponent"],
        _components_admin_template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_28__["MenuVisitasComponent"],
        _components_admin_historia_clinica_visitas_visitas_paciente_inicio_visitas_paciente_inicio_component__WEBPACK_IMPORTED_MODULE_29__["VisitasPacienteInicioComponent"],
        _components_admin_historia_clinica_historia_clinica_visita1_vacunacion_previa_historia_clinica_visita1_vacunacion_previa_component__WEBPACK_IMPORTED_MODULE_30__["HistoriaClinicaVisita1VacunacionPreviaComponent"],
        _components_admin_historia_clinica_historia_clinica_visita2_form_historia_clinica_visita2_form_component__WEBPACK_IMPORTED_MODULE_31__["HistoriaClinicaVisita2FormComponent"],
        _components_admin_historia_clinica_historia_clinica_telemedicina_form_historia_clinica_telemedicina_form_component__WEBPACK_IMPORTED_MODULE_32__["HistoriaClinicaTelemedicinaFormComponent"],
        _components_admin_historia_clinica_visitas_criterio_inclusion_form_visitas_criterio_inclusion_form_visitas_component__WEBPACK_IMPORTED_MODULE_33__["CriterioInclusionFormVisitasComponent"],
        _components_admin_historia_clinica_visitas_criterio_exclusion_form_visitas_criterio_exclusion_form_visitas_component__WEBPACK_IMPORTED_MODULE_34__["CriterioExclusionFormVisitasComponent"],
        _components_admin_historia_clinica_historia_clinica_varias_telemedicinas_form_historia_clinica_varias_telemedicinas_form_component__WEBPACK_IMPORTED_MODULE_35__["HistoriaClinicaVariasTelemedicinasFormComponent"],
        _components_admin_pacientes_pacientes_list_admin_pacientes_list_admin_component__WEBPACK_IMPORTED_MODULE_36__["PacientesListAdminComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_10__["NgxQRCodeModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipeModule"]] }); })();


/***/ }),

/***/ "ZYre":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/admin/vacunados/vacunados-form-admin/vacunados-form-admin.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: VacunadosFormAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacunadosFormAdminComponent", function() { return VacunadosFormAdminComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/vacunas.service */ "XBfQ");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _compoonents_admin_template_menu_menu_general_menu_general_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../compoonents/admin/template/menu/menu-general/menu-general.component */ "hFxb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













function VacunadosFormAdminComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Tipo Identificaci\u00F3n es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Cedula es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Cedula es Minimo 5... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No se aceptan 0 o Letras... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Nombres es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No se aceptan valores numericos... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Apellidos es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No se aceptan valores numericos... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " La Fecha es mayor que la actual, no se puede registrar!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Fecha Nacimiento es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Sexo es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Correo Electr\u00F3nico es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Tiene que ser un Correo Electronico valido, por favor... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_option_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const estado_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", estado_r32.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](estado_r32.estado);
} }
function VacunadosFormAdminComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Estado es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_option_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const municipio_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", municipio_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](municipio_r33.municipio);
} }
function VacunadosFormAdminComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Municipio es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_option_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parroquia_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", parroquia_r34.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](parroquia_r34.nb_parroquia);
} }
function VacunadosFormAdminComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Parroquia es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Direcci\u00F3n es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_option_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipovacuna_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", tipovacuna_r35.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tipovacuna_r35.nombre_vacuna);
} }
function VacunadosFormAdminComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Tipo Vacuna es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Dosis 1 es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Fecha Dosis 1 es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Lote1 es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Dosis 2 es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Fecha Dosis 2 es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_152_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " lote2 es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VacunadosFormAdminComponent_div_162_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Fecha Dosis 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_div_162_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r36.vacunas.fecha_dosis3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Por favor seleccionar el calendario, para ingresar la fecha de dosis...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("max", ctx_r28.currentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r28.Form.controls["fecha_dosis3"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx_r28.vacunas.fecha_dosis3);
} }
function VacunadosFormAdminComponent_div_163_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Lote 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_div_163_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r38.vacunas.lote3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r29.Form.controls["lote3"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx_r29.vacunas.lote3);
} }
function VacunadosFormAdminComponent_button_164_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VacunadosFormAdminComponent_button_164_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r40.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r30.Form.invalid);
} }
function VacunadosFormAdminComponent_button_165_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VacunadosFormAdminComponent_button_165_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r42.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r31.Form.invalid);
} }
class VacunadosFormAdminComponent {
    constructor(activatedRoute, router, vacunasService, comboListService, auth) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.vacunasService = vacunasService;
        this.comboListService = comboListService;
        this.auth = auth;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_3__().format("YYYY-MM-DD"); //Fecha Actual
        this.today = new Date();
        this.isToday = (this.today.toDateString());
        this.fecha_actual = `${this.today.getFullYear()}-${this.today.getMonth() + 1}-${this.today.getDate()}`;
        this.vacunasCedula = [];
        this.estatusForm = false;
        this.vacunas = [];
        this.cedulados = [];
        this.edit = false;
        //llenar data
        this.vacunasng = [];
        //combo list 
        this.estados = [];
        this.municipios = [];
        this.centrosalud = [];
        this.parroquias = [];
        this.tipovacunas = [];
        this.usuarios = [];
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            tipo_identificacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            cedula: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            nombres: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            apellidos: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            sexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            fecha_nacimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            estado_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            municipio_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            parroquia_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
            // vacunado: new FormControl(''),
            tipo_vacuna_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            dosis1: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            lote1: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            fecha_dosis1: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            dosis2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            lote2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            fecha_dosis2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            dosis3: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            lote3: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            fecha_dosis3: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        if (params.id) {
            this.comboListService.getVacunado(params.id) // obtengo el juego con el parametro del id
                .subscribe(res => {
                console.log(res);
                this.vacunas = res;
                this.Form.patchValue({
                    tipo_identificacion: this.vacunas.tipo_identificacion,
                    cedula: this.vacunas.cedula,
                    nombres: this.vacunas.nombres,
                    apellidos: this.vacunas.apellidos,
                    fecha_nacimiento: this.vacunas.fecha_nacimiento,
                    telefono: this.vacunas.telefono,
                    estado_id: this.vacunas.estado_id,
                    municipio_id: this.vacunas.municipio_id,
                    parroquia_id: this.vacunas.parroquia_id,
                    sexo: this.vacunas.sexo,
                    direccion: this.vacunas.direccion,
                    tipo_vacuna_id: this.vacunas.tipo_vacuna_id,
                    dosis1: this.vacunas.dosis1,
                    fecha_dosis1: this.vacunas.fecha_dosis1,
                    lote1: this.vacunas.lote1,
                    dosis2: this.vacunas.dosis2,
                    fecha_dosis2: this.vacunas.fecha_dosis2,
                    lote2: this.vacunas.lote2,
                    dosis3: this.vacunas.dosis3,
                    fecha_dosis3: this.vacunas.fecha_dosis3,
                    lote3: this.vacunas.lote3,
                });
                this.edit = true;
                this.EditMunicipio();
                this.EditCentroSalud();
                this.EditParroquias();
            }, err => console.log(err));
        }
        this.getEstados();
        this.informacionUsuario();
        this.getTiposVacunas();
    }
    Guardar() {
        this.comboListService.saveVacunados(this.Form.value).subscribe(res => {
            console.log(res);
            this.router.navigate(['/vacunados/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateVacunados(this.vacunas.id, this.vacunas)
            .subscribe(res => {
            console.log('actualizando', res);
            this.router.navigate(['/vacunados/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    getEstados() {
        this.comboListService.getEstados().subscribe(res => {
            this.estados = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    ConvertToLower(evt) {
    }
    informacionUsuario() {
        this.auth.profile().subscribe(res => {
            this.usuarios = res;
            // alert(this.usuarios.user.id);
            console.log('usuario data', res);
            //alert(`centro salud: ${this.usuarios.user.centro_salud_id}`);
            //alert(`id: ${this.usuarios.user.id}`)
            //this.Form.get('centro_salud_id').setValue(this.usuarios.user.centro_salud_id);
            //this.Form.get('user_id').setValue(this.usuarios.user.id);
        }, err => {
            alert('Sesion Experiada..');
            this.router.navigateByUrl('/login');
        });
    }
    onBlurMethod() {
        if (Object.keys(this.vacunas.cedula).length >= 6 && this.edit == false && Object.keys(this.vacunas.tipo_identificacion).length >= 1) {
            this.vacunasService.getVacunaCedula(this.vacunas.cedula, this.vacunas.tipo_identificacion).subscribe(res => {
                if (Object.keys(res).length >= 1) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', `El Usuario con la cedula: ${this.vacunas.cedula}, ya fue vacunado en otro centro de salud. Sus datos se llenaran automaticamente!!!`, 'success');
                    this.vacunasng = res;
                    this.estatusForm = true;
                    console.log(res);
                    //foreach
                    this.vacunasng.forEach(element => {
                        element.tipo_identificacion = this.vacunas.tipo_identificacion;
                        element.cedula = this.vacunas.cedula;
                        this.vacunas.id = element.id,
                            this.vacunas.nombres = element.nombres,
                            this.vacunas.apellidos = element.apellidos,
                            this.vacunas.fecha_nacimiento = element.fecha_nacimiento,
                            this.vacunas.telefono = element.telefono,
                            this.vacunas.estado_id = element.estado_id,
                            this.vacunas.municipio_id = element.municipio_id,
                            this.vacunas.parroquia_id = element.parroquia_id,
                            this.vacunas.centro_salud_id = element.centro_salud_id,
                            this.vacunas.sexo = element.sexo,
                            this.vacunas.direccion = element.direccion,
                            this.vacunas.email = element.email,
                            this.vacunas.dosis1 = element.dosis1,
                            this.vacunas.fecha_dosis1 = element.fecha_dosis1,
                            this.vacunas.dosis2 = element.dosis2,
                            this.vacunas.fecha_dosis2 = element.fecha_dosis2,
                            this.vacunas.tipo_vacuna_id = element.tipo_vacuna_id,
                            this.vacunas.lote1 = element.lote1,
                            this.vacunas.lote2 = element.lote2,
                            this.vacunas.establecimiento_laboral = element.establecimiento_laboral,
                            this.vacunas.pueblo_indigena_id = element.pueblo_indigena_id,
                            this.vacunas.etnia_id = element.etnia_id,
                            this.vacunas.grupo_especial_id = element.grupo_especial_id,
                            this.vacunas.motivo_desercion = element.motivo_desercion;
                        this.comboListService.getVacunado(this.vacunas.id) // obtengo el juego con el parametro del id
                            .subscribe(res => {
                            console.log('edit', res);
                            this.vacunas = res;
                            this.Form.patchValue({
                                tipo_identificacion: this.vacunas.tipo_identificacion,
                                cedula: this.vacunas.cedula,
                                nombres: this.vacunas.nombres,
                                apellidos: this.vacunas.apellidos,
                                fecha_nacimiento: this.vacunas.fecha_nacimiento,
                                telefono: this.vacunas.telefono,
                                estado_id: this.vacunas.estado_id,
                                municipio_id: this.vacunas.municipio_id,
                                parroquia_id: this.vacunas.parroquia_id,
                                centro_salud_id: this.vacunas.centro_salud_id,
                                sexo: this.vacunas.sexo,
                                direccion: this.vacunas.direccion,
                                email: this.vacunas.email,
                                dosis1: this.vacunas.dosis1,
                                fecha_dosis1: this.vacunas.fecha_dosis1,
                                dosis2: this.vacunas.dosis2,
                                fecha_dosis2: this.vacunas.fecha_dosis2,
                                tipo_vacuna_id: this.vacunas.tipo_vacuna_id,
                                lote1: this.vacunas.lote1,
                                lote2: this.vacunas.lote2,
                                establecimiento_laboral: this.vacunas.establecimiento_laboral,
                                pueblo_indigena_id: this.vacunas.pueblo_indigena_id,
                                etnia_id: this.vacunas.etnia_id,
                                grupo_especial_id: this.vacunas.grupo_especial_id,
                                motivo_desercion: this.vacunas.motivo_desercion
                                //imagen_qr: this.vacunas.imagen_qr,
                            });
                            //this.date = new Date(this.Form.value.fecha_dosis1);
                            //this.date.setDate(this.date.getDate() + 15);
                            //this.fechaHoyDate = new Date();
                            //this.fechaHoyDate.setDate(this.fechaHoyDate.getDate());
                            this.EditMunicipio();
                            this.EditParroquias();
                        }, err => console.log(err));
                    });
                }
                // AQUI TERMINA EL IF de lenght //
                else {
                    if (this.vacunas.cedula == '000000') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', `El Paciente con la cedula: ${this.vacunas.cedula}, tuvo COVID 19 y no puede ser vacunado!!!`, 'error');
                    }
                    else {
                        {
                            this.vacunasService.getCeduladosSaime(this.vacunas.cedula, this.vacunas.tipo_identificacion) // obtengo el juego con el parametro del id
                                .subscribe(res => {
                                if (Object.keys(res).length >= 1) {
                                    console.log('Cedulados: ', res);
                                    this.cedulados = res;
                                    this.cedulados.forEach(element => {
                                        this.estatusForm = false;
                                        this.vacunas.nombres = `${element.primernombre} ${element.segundonombre}`;
                                        this.vacunas.apellidos = `${element.primerapellido} ${element.segundoapellido}`;
                                        this.vacunas.fecha_nacimiento = element.fechanac;
                                        this.vacunas.telefono = '';
                                        this.vacunas.estado_id = '';
                                        this.vacunas.centro_salud_id = '';
                                        this.vacunas.parroquia_id = '';
                                        this.vacunas.municipio_id = '';
                                        this.vacunas.sexo = '';
                                        this.vacunas.direccion = '';
                                        this.vacunas.email = '';
                                        this.vacunas.dosis1 = '';
                                        this.vacunas.fecha_dosis1 = '';
                                        this.vacunas.dosis2 = '';
                                        this.vacunas.fecha_dosis2 = '';
                                        this.vacunas.tipo_vacuna_id = '';
                                        this.vacunas.lote1 = '';
                                        this.vacunas.lote2 = '';
                                        this.vacunas.establecimiento_laboral = '';
                                        this.vacunas.pueblo_indigena_id = '';
                                        this.vacunas.etnia_id = '';
                                        this.vacunas.grupo_especial_id = '';
                                        this.vacunas.motivo_desercion = '';
                                    });
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', `El Paciente con la cedula: ${this.vacunas.cedula}, puede ser vacunado!!!`, 'success');
                                }
                                else {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', `El Paciente con la cedula: ${this.vacunas.cedula}, puede ser vacunado!!!`, 'success');
                                    this.vacunas.nombres = '';
                                    this.vacunas.apellidos = '';
                                    this.vacunas.fecha_nacimiento = '';
                                    this.vacunas.telefono = '';
                                    this.vacunas.estado_id = '';
                                    this.vacunas.centro_salud_id = '';
                                    this.vacunas.parroquia_id = '';
                                    this.vacunas.municipio_id = '';
                                    this.vacunas.sexo = '';
                                    this.vacunas.direccion = '';
                                    this.vacunas.email = '';
                                    this.vacunas.dosis1 = '';
                                    this.vacunas.fecha_dosis1 = '';
                                    this.vacunas.dosis2 = '';
                                    this.vacunas.fecha_dosis2 = '';
                                    this.vacunas.tipo_vacuna_id = '';
                                    this.vacunas.lote1 = '';
                                    this.vacunas.lote2 = '';
                                    this.vacunas.establecimiento_laboral = '';
                                    this.vacunas.pueblo_indigena_id = '';
                                    this.vacunas.etnia_id = '';
                                    this.vacunas.grupo_especial_id = '';
                                    this.vacunas.motivo_desercion = '';
                                }
                            }, err => console.log(err));
                        }
                    }
                }
                //AQUI TERMINA EL ELSE
            }
            // AQUI TERMINA EL SERVICE 
            );
        }
    }
    //COMBO LIST //
    EditMunicipio() {
        this.comboListService.getMunicipios().subscribe(res => {
            this.municipios = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    getMunicipios(id) {
        this.comboListService.getMunicipios().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((municipios) => municipios.filter((municipio) => municipio.estado_id == id))).subscribe((result) => {
            this.municipios = result;
            console.log(result);
        });
    }
    getCentroSalud(id) {
        this.comboListService.getParroquias().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((parroquias) => parroquias.filter((parroquia) => parroquia.id_municipio == id))).subscribe((result) => {
            this.parroquias = result;
            console.log(result);
        });
        this.comboListService.getTodosCentrosSalud().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((centrosalud) => centrosalud.filter((centro) => centro.municipio_id == id))).subscribe((result) => {
            this.centrosalud = result;
            console.log(result);
        });
    }
    EditCentroSalud() {
        this.comboListService.getTodosCentrosSalud().subscribe(res => {
            this.centrosalud = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    EditParroquias() {
        this.comboListService.getParroquias().subscribe(res => {
            this.parroquias = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    getTiposVacunas() {
        this.comboListService.getTiposVacunas().subscribe(res => {
            this.tipovacunas = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
}
VacunadosFormAdminComponent.ɵfac = function VacunadosFormAdminComponent_Factory(t) { return new (t || VacunadosFormAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_6__["VacunasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_7__["CombolistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); };
VacunadosFormAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VacunadosFormAdminComponent, selectors: [["app-vacunados-form-admin"]], decls: 167, vars: 89, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-2"], ["type", "text", "placeholder", "Ingresar", "formControlName", "tipo_identificacion", 1, "form-control", 3, "ngClass", "ngModel", "blur", "ngModelChange"], ["value", "V"], ["value", "E"], ["value", "P"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-sm-8"], ["type", "text", "maxlength", "20", "placeholder", "Ingresar Cedula", "formControlName", "cedula", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange", "blur"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar Nombres", "formControlName", "nombres", 1, "form-control", 3, "readonly", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar apellidos", "formControlName", "apellidos", 1, "form-control", 3, "readonly", "ngClass", "ngModel", "ngModelChange"], ["type", "date", "onkeydown", "return false", "id", "example-date-input", "placeholder", "Ingresar fecha nacimiento", "formControlName", "fecha_nacimiento", 1, "form-control", 3, "max", "ngClass", "ngModel", "ngModelChange"], [4, "ngIf"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "sexo", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange"], ["value", "masculino"], ["value", "femenino"], ["type", "text", "placeholder", "Ingresar Correo Electronico", "formControlName", "email", 1, "form-control", 3, "readonly", "ngClass", "ngModel", "ngModelChange"], [1, "text-danger"], ["type", "text", "placeholder", "Ingresar", "formControlName", "estado_id", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "municipio_id", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange", "change"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "parroquia_id", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Direcci\u00F3n ", "formControlName", "direccion", 1, "form-control", 3, "readonly", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "tipo_vacuna_id", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "dosis1", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange"], ["value", "si"], ["type", "date", "min", "2021-02-12", "onkeydown", "return false", "id", "example-date-input", "placeholder", "Ingresar fecha nacimiento", "formControlName", "fecha_dosis1", 1, "form-control", 3, "max", "readonly", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Lote 1", "formControlName", "lote1", 1, "form-control", 3, "readonly", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "dosis2", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange"], ["type", "date", "min", "2021-02-12", "onkeydown", "return false", "id", "example-date-input", "placeholder", "Ingresar fecha nacimiento", "formControlName", "fecha_dosis2", 1, "form-control", 3, "max", "readonly", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Lote 1", "formControlName", "lote2", 1, "form-control", 3, "readonly", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "dosis3", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["value", "no"], ["class", "form-group row", 4, "ngIf"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "disabled", "click", 4, "ngIf"], [1, "footer"], [1, "invalid-feedback"], [3, "value"], ["type", "date", "min", "2021-02-12", "onkeydown", "return false", "id", "example-date-input", "placeholder", "Ingresar fecha nacimiento", "formControlName", "fecha_dosis3", 1, "form-control", 3, "max", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Lote 3", "formControlName", "lote3", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "disabled", "click"]], template: function VacunadosFormAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-menu-general");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Registro de Vacunados");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Tipo Identificaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("blur", function VacunadosFormAdminComponent_Template_select_blur_21_listener() { return ctx.onBlurMethod(); })("ngModelChange", function VacunadosFormAdminComponent_Template_select_ngModelChange_21_listener($event) { return ctx.vacunas.tipo_identificacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Venezolano");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Extranjero");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Pasaporte");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, VacunadosFormAdminComponent_div_28_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_input_ngModelChange_30_listener($event) { return ctx.vacunas.cedula = $event; })("blur", function VacunadosFormAdminComponent_Template_input_blur_30_listener() { return ctx.onBlurMethod(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, VacunadosFormAdminComponent_div_31_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, VacunadosFormAdminComponent_div_32_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, VacunadosFormAdminComponent_div_33_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Nombres");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_input_ngModelChange_38_listener($event) { return ctx.vacunas.nombres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, VacunadosFormAdminComponent_div_39_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, VacunadosFormAdminComponent_div_40_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Apellidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_input_ngModelChange_45_listener($event) { return ctx.vacunas.apellidos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, VacunadosFormAdminComponent_div_46_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, VacunadosFormAdminComponent_div_47_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Fecha De Nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_input_ngModelChange_52_listener($event) { return ctx.vacunas.fecha_nacimiento = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, VacunadosFormAdminComponent_div_53_Template, 3, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, VacunadosFormAdminComponent_div_54_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Sexo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_select_ngModelChange_59_listener($event) { return ctx.vacunas.sexo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Masculino");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Femenino");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, VacunadosFormAdminComponent_div_64_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Correo Electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_input_ngModelChange_69_listener($event) { return ctx.vacunas.email = $event; })("ngModelChange", function VacunadosFormAdminComponent_Template_input_ngModelChange_69_listener($event) { return ctx.ConvertToLower($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "No se Aceptan Mayusculas...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, VacunadosFormAdminComponent_div_72_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, VacunadosFormAdminComponent_div_73_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Estados");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_select_ngModelChange_78_listener($event) { return ctx.vacunas.estado_id = $event; })("change", function VacunadosFormAdminComponent_Template_select_change_78_listener($event) { return ctx.getMunicipios($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, VacunadosFormAdminComponent_option_79_Template, 2, 2, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, VacunadosFormAdminComponent_div_80_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Municipios");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_select_ngModelChange_85_listener($event) { return ctx.vacunas.municipio_id = $event; })("change", function VacunadosFormAdminComponent_Template_select_change_85_listener($event) { return ctx.getCentroSalud($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](86, VacunadosFormAdminComponent_option_86_Template, 2, 2, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](87, VacunadosFormAdminComponent_div_87_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Parroquia");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_select_ngModelChange_92_listener($event) { return ctx.vacunas.parroquia_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](93, VacunadosFormAdminComponent_option_93_Template, 2, 2, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](94, VacunadosFormAdminComponent_div_94_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "textarea", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_textarea_ngModelChange_99_listener($event) { return ctx.vacunas.direccion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "                                              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](101, VacunadosFormAdminComponent_div_101_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "Tipo de Vacuna");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "select", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_select_ngModelChange_106_listener($event) { return ctx.vacunas.tipo_vacuna_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](107, VacunadosFormAdminComponent_option_107_Template, 2, 2, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](108, VacunadosFormAdminComponent_div_108_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Dosis 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_select_ngModelChange_113_listener($event) { return ctx.vacunas.dosis1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "Si");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](116, VacunadosFormAdminComponent_div_116_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Fecha Dosis 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_input_ngModelChange_121_listener($event) { return ctx.vacunas.fecha_dosis1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, "Por favor seleccionar el calendario, para ingresar la fecha de dosis...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](124, VacunadosFormAdminComponent_div_124_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "Lote 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_input_ngModelChange_129_listener($event) { return ctx.vacunas.lote1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](130, VacunadosFormAdminComponent_div_130_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "Dosis 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "select", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_select_ngModelChange_135_listener($event) { return ctx.vacunas.dosis2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, "Si");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](138, VacunadosFormAdminComponent_div_138_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "Fecha Dosis 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_input_ngModelChange_143_listener($event) { return ctx.vacunas.fecha_dosis2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](145, "Por favor seleccionar el calendario, para ingresar la fecha de dosis...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](146, VacunadosFormAdminComponent_div_146_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](149, "Lote 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_input_ngModelChange_151_listener($event) { return ctx.vacunas.lote2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](152, VacunadosFormAdminComponent_div_152_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](155, "\u00BFDeseas Agregar Dosis 3?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "select", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VacunadosFormAdminComponent_Template_select_ngModelChange_157_listener($event) { return ctx.vacunas.dosis3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, "Si");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](161, "no");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](162, VacunadosFormAdminComponent_div_162_Template, 7, 3, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](163, VacunadosFormAdminComponent_div_163_Template, 5, 2, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](164, VacunadosFormAdminComponent_button_164_Template, 2, 1, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](165, VacunadosFormAdminComponent_button_165_Template, 2, 1, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](166, "footer", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.Form.controls["tipo_identificacion"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.tipo_identificacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["tipo_identificacion"].touched && (ctx.Form.controls["tipo_identificacion"].errors == null ? null : ctx.Form.controls["tipo_identificacion"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.Form.controls["cedula"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.cedula);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["cedula"].touched && (ctx.Form.controls["cedula"].errors == null ? null : ctx.Form.controls["cedula"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["cedula"].touched && (ctx.Form.controls["cedula"].errors == null ? null : ctx.Form.controls["cedula"].errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["cedula"].touched && (ctx.Form.controls["cedula"].errors == null ? null : ctx.Form.controls["cedula"].errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx.estatusForm)("ngClass", ctx.Form.controls["nombres"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.nombres);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["nombres"].touched && (ctx.Form.controls["nombres"].errors == null ? null : ctx.Form.controls["nombres"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["nombres"].touched && (ctx.Form.controls["nombres"].errors == null ? null : ctx.Form.controls["nombres"].errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx.estatusForm)("ngClass", ctx.Form.controls["apellidos"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.apellidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["apellidos"].touched && (ctx.Form.controls["apellidos"].errors == null ? null : ctx.Form.controls["apellidos"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["apellidos"].touched && (ctx.Form.controls["apellidos"].errors == null ? null : ctx.Form.controls["apellidos"].errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("max", ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.Form.controls["fecha_nacimiento"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.fecha_nacimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.vacunas.fecha_nacimiento > ctx.fecha_actual);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["fecha_nacimiento"].touched && (ctx.Form.controls["fecha_nacimiento"].errors == null ? null : ctx.Form.controls["fecha_nacimiento"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngClass", ctx.Form.controls["sexo"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.sexo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["sexo"].touched && (ctx.Form.controls["sexo"].errors == null ? null : ctx.Form.controls["sexo"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx.estatusForm)("ngClass", ctx.Form.controls["email"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["email"].touched && (ctx.Form.controls["email"].errors == null ? null : ctx.Form.controls["email"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["email"].touched && (ctx.Form.controls["email"].errors == null ? null : ctx.Form.controls["email"].errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngClass", ctx.Form.controls["estado_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.estado_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.estados);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["estado_id"].touched && (ctx.Form.controls["estado_id"].errors == null ? null : ctx.Form.controls["estado_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngClass", ctx.Form.controls["municipio_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.municipio_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.municipios);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["municipio_id"].touched && (ctx.Form.controls["municipio_id"].errors == null ? null : ctx.Form.controls["municipio_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngClass", ctx.Form.controls["parroquia_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.parroquia_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.parroquias);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["parroquia_id"].touched && (ctx.Form.controls["parroquia_id"].errors == null ? null : ctx.Form.controls["parroquia_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx.estatusForm)("ngClass", ctx.Form.controls["direccion"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.direccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["direccion"].touched && (ctx.Form.controls["direccion"].errors == null ? null : ctx.Form.controls["direccion"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngClass", ctx.Form.controls["tipo_vacuna_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.tipo_vacuna_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.tipovacunas);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["tipo_vacuna_id"].touched && (ctx.Form.controls["tipo_vacuna_id"].errors == null ? null : ctx.Form.controls["tipo_vacuna_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngClass", ctx.Form.controls["dosis1"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.dosis1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["dosis1"].touched && (ctx.Form.controls["dosis1"].errors == null ? null : ctx.Form.controls["dosis1"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("max", ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx.estatusForm)("ngClass", ctx.Form.controls["fecha_dosis1"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.fecha_dosis1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["fecha_dosis1"].touched && (ctx.Form.controls["fecha_dosis1"].errors == null ? null : ctx.Form.controls["fecha_dosis1"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx.estatusForm)("ngClass", ctx.Form.controls["lote1"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.lote1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["lote1"].touched && (ctx.Form.controls["lote1"].errors == null ? null : ctx.Form.controls["lote1"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngClass", ctx.Form.controls["dosis2"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.dosis2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["dosis2"].touched && (ctx.Form.controls["dosis2"].errors == null ? null : ctx.Form.controls["dosis2"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("max", ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx.estatusForm)("ngClass", ctx.Form.controls["fecha_dosis2"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.fecha_dosis2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["fecha_dosis2"].touched && (ctx.Form.controls["fecha_dosis2"].errors == null ? null : ctx.Form.controls["fecha_dosis2"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx.estatusForm)("ngClass", ctx.Form.controls["lote2"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.lote2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Form.controls["lote2"].touched && (ctx.Form.controls["lote2"].errors == null ? null : ctx.Form.controls["lote2"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.Form.controls["dosis3"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.dosis3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.vacunas.dosis3 === "si");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.vacunas.dosis3 === "si");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _compoonents_admin_template_menu_menu_general_menu_general_component__WEBPACK_IMPORTED_MODULE_10__["MenuGeneralComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWN1bmFkb3MtZm9ybS1hZG1pbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "bRR+":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia-clinica/visitas/visitas4-paciente-form/visitas4-paciente-form.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: Visitas4PacienteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visitas4PacienteFormComponent", function() { return Visitas4PacienteFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../template/menu/menu-visitas/menu-visitas.component */ "duu2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function Visitas4PacienteFormComponent_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Visitas4PacienteFormComponent_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Visitas4PacienteFormComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Visitas4PacienteFormComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class Visitas4PacienteFormComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"); //Fecha Actual
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            paciente_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            inmunidad_celular_humoral: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            fecha_inmunidad_celular_humoral: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        this.comboListService.getVisitaCuatro(params.id) // obtengo el juego con el parametro del id
            .subscribe(res => {
            console.log(res);
            this.pacientes = res;
            this.Form.patchValue({
                paciente_id: this.pacientes.paciente_id,
                inmunidad_celular_humoral: this.pacientes.inmunidad_celular_humoral,
                fecha_inmunidad_celular_humoral: this.pacientes.fecha_inmunidad_celular_humoral,
            });
            this.edit = true;
        }, err => console.log(err));
    }
    Guardar() {
        const params = this.activatedRoute.snapshot.params;
        this.Form.get('paciente_id').setValue(params.id);
        this.comboListService.saveVisitaCuatros(this.Form.value).subscribe(res => {
            console.log(res);
            //this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateVisitaCuatros(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
Visitas4PacienteFormComponent.ɵfac = function Visitas4PacienteFormComponent_Factory(t) { return new (t || Visitas4PacienteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"])); };
Visitas4PacienteFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Visitas4PacienteFormComponent, selectors: [["app-visitas4-paciente-form"]], decls: 38, vars: 7, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-home", 1, "tab-pane", "fade", "show", "active"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-1"], [1, "btn", "btn-primary"], ["type", "radio", "name", "inmunidad_celular_humoral", "id", "inmunidad_celular_humoral", "value", "si", "formControlName", "inmunidad_celular_humoral", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger"], ["type", "radio", "name", "inmunidad_celular_humoral", "id", "inmunidad_celular_humoral", "value", "no", "formControlName", "inmunidad_celular_humoral", 3, "ngModel", "ngModelChange"], [1, "col-sm-10"], ["type", "date", "onkeydown", "return false", "id", "example-date-input", "formControlName", "fecha_inmunidad_celular_humoral", 1, "form-control", 3, "max", "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function Visitas4PacienteFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-menu-visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "VISITA 4 PACIENTE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Toma de muestra de inmunidad celular y humoral ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas4PacienteFormComponent_Template_input_ngModelChange_24_listener($event) { return ctx.pacientes.inmunidad_celular_humoral = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas4PacienteFormComponent_Template_input_ngModelChange_28_listener($event) { return ctx.pacientes.inmunidad_celular_humoral = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Visitas4PacienteFormComponent_Template_input_ngModelChange_34_listener($event) { return ctx.pacientes.fecha_inmunidad_celular_humoral = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, Visitas4PacienteFormComponent_button_35_Template, 2, 0, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, Visitas4PacienteFormComponent_button_36_Template, 2, 0, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "footer", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.inmunidad_celular_humoral);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.inmunidad_celular_humoral);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("max", ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.fecha_inmunidad_celular_humoral);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__["MenuVisitasComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNpdGFzNC1wYWNpZW50ZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "csrq":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia-clinica/visitas/criterio-inclusion-form-visitas/criterio-inclusion-form-visitas.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: CriterioInclusionFormVisitasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriterioInclusionFormVisitasComponent", function() { return CriterioInclusionFormVisitasComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../template/menu/menu-visitas/menu-visitas.component */ "duu2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function CriterioInclusionFormVisitasComponent_button_170_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CriterioInclusionFormVisitasComponent_button_170_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CriterioInclusionFormVisitasComponent_button_171_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CriterioInclusionFormVisitasComponent_button_171_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = "/historia_clinica/admin/pacientes/form/criterio_inclusion";
const _c1 = function (a1) { return [_c0, a1]; };
const _c2 = "/historia_clinica/admin/pacientes/form/criterio_exclusion";
const _c3 = function (a1) { return [_c2, a1]; };
class CriterioInclusionFormVisitasComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"); //Fecha Actual
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            paciente_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            criterioin1: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioin2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioin3: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioin4: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioin5: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioin6: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioin7: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioin8: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioin9: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioin10: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioin11: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioin12: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioin13: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        this.comboListService.getCriterioInclusion(params.id) // obtengo el juego con el parametro del id
            .subscribe(res => {
            console.log(res);
            this.pacientes = res;
            this.Form.patchValue({
                paciente_id: this.pacientes.paciente_id,
                criterioin1: this.pacientes.criterioin1,
                criterioin2: this.pacientes.criterioin2,
                criterioin3: this.pacientes.criterioin3,
                criterioin4: this.pacientes.criterioin4,
                criterioin5: this.pacientes.criterioin5,
                criterioin6: this.pacientes.criterioin6,
                criterioin7: this.pacientes.criterioin7,
                criterioin8: this.pacientes.criterioin8,
                criterioin9: this.pacientes.criterioin9,
                criterioin10: this.pacientes.criterioin10,
                criterioin11: this.pacientes.criterioin11,
                criterioin12: this.pacientes.criterioin12,
                criterioin13: this.pacientes.criterioin13,
            });
            this.edit = true;
        }, err => console.log(err));
    }
    Guardar() {
        const params = this.activatedRoute.snapshot.params;
        this.Form.get('paciente_id').setValue(params.id);
        this.comboListService.saveCriterioInclusions(this.Form.value).subscribe(res => {
            console.log(res);
            //this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateCriterioInclusions(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
CriterioInclusionFormVisitasComponent.ɵfac = function CriterioInclusionFormVisitasComponent_Factory(t) { return new (t || CriterioInclusionFormVisitasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"])); };
CriterioInclusionFormVisitasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CriterioInclusionFormVisitasComponent, selectors: [["app-criterio-inclusion-form-visitas"]], decls: 173, vars: 35, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], ["id", "nav-tab", 1, "nav", "nav-tabs"], ["id", "nav-home-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", "active", 3, "routerLink"], ["id", "nav-profile-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", 3, "routerLink"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-home", 1, "tab-pane", "fade", "show", "active"], [1, "m-3"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-1"], [1, "btn", "btn-primary"], ["type", "radio", "name", "criterioin1", "id", "criterioin1", "value", "si", "formControlName", "criterioin1", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger"], ["type", "radio", "name", "criterioin1", "id", "criterioin1", "value", "no", "formControlName", "criterioin1", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin2", "id", "criterioin2", "value", "si", "formControlName", "criterioin2", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin2", "id", "criterioin2", "value", "no", "formControlName", "criterioin2", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin3", "id", "criterioin3", "value", "si", "formControlName", "criterioin3", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin3", "id", "criterioin3", "value", "no", "formControlName", "criterioin3", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin4", "id", "criterioin4", "value", "si", "formControlName", "criterioin4", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin4", "id", "criterioin4", "value", "no", "formControlName", "criterioin4", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin5", "id", "criterioin5", "value", "si", "formControlName", "criterioin5", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin5", "id", "criterioin5", "value", "no", "formControlName", "criterioin5", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin6", "id", "criterioin6", "value", "si", "formControlName", "criterioin6", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin6", "id", "criterioin6", "value", "no", "formControlName", "criterioin6", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin7", "id", "criterioin7", "value", "si", "formControlName", "criterioin7", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin7", "id", "criterioin7", "value", "no", "formControlName", "criterioin7", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin8", "id", "criterioin8", "value", "si", "formControlName", "criterioin8", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin8", "id", "criterioin8", "value", "no", "formControlName", "criterioin8", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin9", "id", "criterioin9", "value", "si", "formControlName", "criterioin9", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin9", "id", "criterioin9", "value", "no", "formControlName", "criterioin9", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin10", "id", "criterioin10", "value", "si", "formControlName", "criterioin10", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin10", "id", "criterioin10", "value", "no", "formControlName", "criterioin10", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin11", "id", "criterioin11", "value", "si", "formControlName", "criterioin11", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin11", "id", "criterioin11", "value", "no", "formControlName", "criterioin11", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin12", "id", "criterioin12", "value", "si", "formControlName", "criterioin12", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin12", "id", "criterioin12", "value", "no", "formControlName", "criterioin12", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin13", "id", "criterioin13", "value", "si", "formControlName", "criterioin13", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioin13", "id", "criterioin13", "value", "no", "formControlName", "criterioin13", 3, "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function CriterioInclusionFormVisitasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-menu-visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "VISITA 1 PACIENTE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Criterio de Inclusi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Criterio de Exclusi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Criterio de Inclusi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Consentimiento informado escrito firmado por el/la participante: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_32_listener($event) { return ctx.pacientes.criterioin1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_36_listener($event) { return ctx.pacientes.criterioin1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Edad mayor a 18 a\u00F1os");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_43_listener($event) { return ctx.pacientes.criterioin2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_47_listener($event) { return ctx.pacientes.criterioin2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " Resultado negativo en las pruebas para VIH, hepatitis y s\u00EDfilis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_54_listener($event) { return ctx.pacientes.criterioin3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_58_listener($event) { return ctx.pacientes.criterioin3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " Resultado negativo en las prueba para determinar la presencia de anticuerpos IgM e IgG para SARS CoV2 por inmunoensayo enzim\u00E1tico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_65_listener($event) { return ctx.pacientes.criterioin4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_69_listener($event) { return ctx.pacientes.criterioin4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, " Resultado negativo para COVID-19 por PCR en la visita de selecci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_76_listener($event) { return ctx.pacientes.criterioin5 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_80_listener($event) { return ctx.pacientes.criterioin5 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Historia m\u00E9dica negativa para COVID-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_87_listener($event) { return ctx.pacientes.criterioin6 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_91_listener($event) { return ctx.pacientes.criterioin6 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, " No contacto con persona con COVID-2019 al menos 14 d\u00EDas previos a la inclusi\u00F3n (seg\u00FAn los sujetos del ensayo) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_98_listener($event) { return ctx.pacientes.criterioin7 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_102_listener($event) { return ctx.pacientes.criterioin7 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, " Consentimiento en el uso de m\u00E9todos anticonceptivos efectivos durante el ensayo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_109_listener($event) { return ctx.pacientes.criterioin8 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_113_listener($event) { return ctx.pacientes.criterioin8 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, " Prueba de embarazo en orina negativa en la visita de selecci\u00F3n (Mujeres en edad f\u00E9rtil) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_120_listener($event) { return ctx.pacientes.criterioin9 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_124_listener($event) { return ctx.pacientes.criterioin9 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, " Prueba negativa para drogas o psicoestimulantes en orina, en la visita de selecci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_131_listener($event) { return ctx.pacientes.criterioin10 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_135_listener($event) { return ctx.pacientes.criterioin10 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "Prueba de alcohol negativa en la visita de selecci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_142_listener($event) { return ctx.pacientes.criterioin11 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_146_listener($event) { return ctx.pacientes.criterioin11 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, " No historia de reacciones inducidas por vacunas o complicaciones evidentes despu\u00E9s de recibir productos inmunobiol\u00F3gicos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_153_listener($event) { return ctx.pacientes.criterioin12 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_157_listener($event) { return ctx.pacientes.criterioin12 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, " No infecciones agudas y/o enfermedades respiratorias en al menos 14 d\u00EDas previos a la inclusi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_164_listener($event) { return ctx.pacientes.criterioin13 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CriterioInclusionFormVisitasComponent_Template_input_ngModelChange_168_listener($event) { return ctx.pacientes.criterioin13 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](170, CriterioInclusionFormVisitasComponent_button_170_Template, 2, 0, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](171, CriterioInclusionFormVisitasComponent_button_171_Template, 2, 0, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](172, "footer", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](31, _c1, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](33, _c3, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioin13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__["MenuVisitasComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcml0ZXJpby1pbmNsdXNpb24tZm9ybS12aXNpdGFzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "dfk+":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia-clinica/historia-clinica-form-antecedentes-personales/historia-clinica-form-antecedentes-personales.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: HistoriaClinicaFormAntecedentesPersonalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaClinicaFormAntecedentesPersonalesComponent", function() { return HistoriaClinicaFormAntecedentesPersonalesComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _compoonents_admin_template_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../compoonents/admin/template/menu/menu-admin/menu-admin.component */ "pD0S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function HistoriaClinicaFormAntecedentesPersonalesComponent_button_49_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriaClinicaFormAntecedentesPersonalesComponent_button_49_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormAntecedentesPersonalesComponent_button_50_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HistoriaClinicaFormAntecedentesPersonalesComponent_button_50_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/historia_clinica/admin/form/paciente", a1]; };
const _c1 = "/historia_clinica/admin/form/antecedentes_personales";
const _c2 = function (a1) { return [_c1, a1]; };
const _c3 = function (a1) { return ["/historia_clinica/admin/form/examen_fisicos", a1]; };
const _c4 = function (a1) { return ["/historia_clinica/admin/form/paraclinicos", a1]; };
const _c5 = "/historia_clinica/admin/form/categorizacion_riesgo_infeccion";
const _c6 = function (a1) { return [_c5, a1]; };
const _c7 = "/historia_clinica/admin/form/proceso_aleatoriazacion";
const _c8 = function (a1) { return [_c7, a1]; };
const _c9 = function (a1) { return ["/historia_clinica/admin/form/proceso_vacunacion", a1]; };
class HistoriaClinicaFormAntecedentesPersonalesComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            paciente_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            patalogicos: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            gineco_obstetrico: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            interrogatorios_aparatos: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        //alert(this.link);
        this.comboListService.getAntecedentePersonal(params.id) // obtengo el juego con el parametro del id
            .subscribe(res => {
            console.log(res);
            this.pacientes = res;
            this.Form.patchValue({
                patalogicos: this.pacientes.patalogicos,
                gineco_obstetrico: this.pacientes.gineco_obstetrico,
                interrogatorios_aparatos: this.pacientes.interrogatorios_aparatos
                //imagen_qr: this.vacunas.imagen_qr,
            });
            this.edit = true;
        }, err => console.log(err));
    }
    Guardar() {
        const params = this.activatedRoute.snapshot.params;
        this.Form.get('paciente_id').setValue(params.id);
        this.comboListService.saveAntecedentePersonals(this.Form.value).subscribe(res => {
            console.log(res);
            //this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateAntecedentePersonals(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
HistoriaClinicaFormAntecedentesPersonalesComponent.ɵfac = function HistoriaClinicaFormAntecedentesPersonalesComponent_Factory(t) { return new (t || HistoriaClinicaFormAntecedentesPersonalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__["CombolistService"])); };
HistoriaClinicaFormAntecedentesPersonalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HistoriaClinicaFormAntecedentesPersonalesComponent, selectors: [["app-historia-clinica-form-antecedentes-personales"]], decls: 52, vars: 30, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], [1, "btn", "btn-danger", "m-3", 3, "routerLink"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "formControlName", "patalogicos", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "formControlName", "gineco_obstetrico", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "formControlName", "interrogatorios_aparatos", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function HistoriaClinicaFormAntecedentesPersonalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-menu-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "ANTECEDENTES PERSONALES");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Identificaci\u00F3n del Paciente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Antecedentes Personales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Examen F\u00EDsico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Paraclinicos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Categorizaci\u00F3n de Riesgo de Infecci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Proceso de Aleatorizaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Proceso de Vacunaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Patol\u00F3gicos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormAntecedentesPersonalesComponent_Template_textarea_ngModelChange_35_listener($event) { return ctx.pacientes.patalogicos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "                                      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Gineco-Obst\u00E9trico (Sexo femenino)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormAntecedentesPersonalesComponent_Template_textarea_ngModelChange_41_listener($event) { return ctx.pacientes.gineco_obstetrico = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "                                      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Interrogatorio por aparatos y sistemas (Pertinentes positivos)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormAntecedentesPersonalesComponent_Template_textarea_ngModelChange_47_listener($event) { return ctx.pacientes.interrogatorios_aparatos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "                              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, HistoriaClinicaFormAntecedentesPersonalesComponent_button_49_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, HistoriaClinicaFormAntecedentesPersonalesComponent_button_50_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "footer", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c2, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](20, _c3, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](22, _c4, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](24, _c6, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](26, _c8, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](28, _c9, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["patalogicos"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.pacientes.patalogicos);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["gineco_obstetrico"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.pacientes.gineco_obstetrico);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.Form.controls["interrogatorios_aparatos"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.pacientes.interrogatorios_aparatos);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _compoonents_admin_template_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_6__["MenuAdminComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpYS1jbGluaWNhLWZvcm0tYW50ZWNlZGVudGVzLXBlcnNvbmFsZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "duu2":
/*!***************************************************************************************!*\
  !*** ./src/app/components/admin/template/menu/menu-visitas/menu-visitas.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MenuVisitasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuVisitasComponent", function() { return MenuVisitasComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");





const _c0 = function (a1) { return ["/historia_clinica/admin/pacientes/inicio", a1]; };
const _c1 = function (a1) { return ["/historia_clinica/admin/form/paciente", a1]; };
const _c2 = "/historia_clinica/admin/pacientes/form/criterio_inclusion";
const _c3 = function (a1) { return [_c2, a1]; };
const _c4 = function (a1) { return ["/historia_clinica/admin/pacientes/form/visita_uno", a1]; };
const _c5 = function (a1) { return ["/historia_clinica/admin/pacientes/form/visita_dos", a1]; };
const _c6 = "/historia_clinica/admin/pacientes/form/visita_tres";
const _c7 = function (a1) { return [_c6, a1]; };
const _c8 = "/historia_clinica/admin/pacientes/form/telemedicina";
const _c9 = function (a1) { return [_c8, a1]; };
const _c10 = "/historia_clinica/admin/pacientes/form/varias_telemedicinas";
const _c11 = function (a1) { return [_c10, a1]; };
const _c12 = "/historia_clinica/admin/pacientes/form/visita_cuatro";
const _c13 = function (a1) { return [_c12, a1]; };
const _c14 = function () { return ["/inicio"]; };
class MenuVisitasComponent {
    constructor(auth, activatedRoute, router, comboListService) {
        this.auth = auth;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.VacunasMenu = false;
        this.UsuariosMenu = false;
        this.link = '';
        this.pacientes = [];
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        this.comboListService.getPaciente(params.id).subscribe(res => {
            this.pacientes = res;
            console.log(res);
        }, err => {
            console.log(err);
            if (err.status === 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error!', 'El servidor no esta activo, no podra ver los datos...', 'error');
            }
        });
    }
    logout() {
        this.auth.logout();
    }
}
MenuVisitasComponent.ɵfac = function MenuVisitasComponent_Factory(t) { return new (t || MenuVisitasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__["CombolistService"])); };
MenuVisitasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuVisitasComponent, selectors: [["app-menu-visitas"]], decls: 57, vars: 29, consts: [[1, "left", "side-menu"], ["id", "remove-scroll", 1, "slimscroll-menu"], ["id", "sidebar-menu"], ["id", "side-menu", 1, "metismenu"], [1, "menu-title"], [1, "waves-effect", 3, "routerLink"], [1, "dripicons-meter"], [1, "clearfix"]], template: function MenuVisitasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Menu Paciente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Identificaci\u00F3n del Paciente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Criterio de Inclusi\u00F3n y Exclusi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Visita 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Visita 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Visita 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Formulario Telemedicina ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Varias Telemedicina ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Visita 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Regresar Menu Principal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c3, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c4, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c5, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c7, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c9, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c11, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c13, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c14));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".side-menu[_ngcontent-%COMP%] {\r\n   \r\n    background: #007bff !important; \r\n}\r\n\r\n\r\n\r\n#sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    color: #f8f9fa;\r\n \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtdmlzaXRhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDhCQUE4QjtBQUNsQzs7OztBQUlBO0lBQ0ksY0FBYzs7QUFFbEIiLCJmaWxlIjoibWVudS12aXNpdGFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZS1tZW51IHtcclxuICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG5cclxuXHJcbiNzaWRlYmFyLW1lbnUgPiB1bCA+IGxpID4gYSB7XHJcbiAgICBjb2xvcjogI2Y4ZjlmYTtcclxuIFxyXG59Il19 */"] });


/***/ }),

/***/ "eWPn":
/*!************************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia-clinica/visitas/visitas-paciente-inicio/visitas-paciente-inicio.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: VisitasPacienteInicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitasPacienteInicioComponent", function() { return VisitasPacienteInicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../template/menu/menu-visitas/menu-visitas.component */ "duu2");



class VisitasPacienteInicioComponent {
    constructor() { }
    ngOnInit() {
    }
}
VisitasPacienteInicioComponent.ɵfac = function VisitasPacienteInicioComponent_Factory(t) { return new (t || VisitasPacienteInicioComponent)(); };
VisitasPacienteInicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisitasPacienteInicioComponent, selectors: [["app-visitas-paciente-inicio"]], decls: 13, vars: 0, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], [1, "footer"]], template: function VisitasPacienteInicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu-visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Bienvenidos Menu Paciente!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "footer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_2__["MenuVisitasComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNpdGFzLXBhY2llbnRlLWluaWNpby5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "fJTj":
/*!***********************************************!*\
  !*** ./src/app/services/combolist.service.ts ***!
  \***********************************************/
/*! exports provided: CombolistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombolistService", function() { return CombolistService; });
/* harmony import */ var _interfaces_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/interface */ "n+Y7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CombolistService {
    constructor(http) {
        this.http = http;
    }
    //  INICIO PACIENTES //
    getPacientes() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/pacientes`);
    }
    getPaciente(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/pacientes/${id}`);
    }
    savePacientes(Paciente) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/pacientes`, Paciente);
    }
    updatePacientes(id, updatedPacientes) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/pacientes/${id}`, updatedPacientes);
    }
    getPacienteCedulaRegistrada(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/pacientes/cedula/${id}`);
    }
    //  FIN PACIENTES //
    //  INICIO ANTECEDENTES PERSONALES //
    getAntecedentePersonals() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/antecedentes_personales`);
    }
    getAntecedentePersonal(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/antecedentes_personales/${id}`);
    }
    saveAntecedentePersonals(AntecedentePersonal) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/antecedentes_personales`, AntecedentePersonal);
    }
    updateAntecedentePersonals(id, updatedAntecedentePersonals) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/antecedentes_personales/${id}`, updatedAntecedentePersonals);
    }
    getAntecedentePersonalPacienteID(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/antecedentes_personal/id/${id}`);
    }
    //  FIN ANTECEDENTES PERSONALES  //
    //  INICIO VACUNADOS //
    getVacunados() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/vacunas`);
    }
    getVacunado(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/vacunas/${id}`);
    }
    saveVacunados(Vacunado) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/vacunas`, Vacunado);
    }
    updateVacunados(id, updatedVacunados) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/vacunas/${id}`, updatedVacunados);
    }
    //  FIN EXAMEN FISICO //
    //  INICIO EXAMEN FISICO //
    getExamenFisicos() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/examen_fisico`);
    }
    getExamenFisico(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/examen_fisico/${id}`);
    }
    saveExamenFisicos(ExamenFisico) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/examen_fisico`, ExamenFisico);
    }
    updateExamenFisicos(id, updatedExamenFisicos) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/examen_fisico/${id}`, updatedExamenFisicos);
    }
    //  FIN VACUNADOS //
    //  INICIO PARACLINICOS //
    getParaclinicos() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/paraclinicos`);
    }
    getParaclinico(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/paraclinicos/${id}`);
    }
    saveParaclinicos(Paraclinico) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/paraclinicos`, Paraclinico);
    }
    updateParaclinicos(id, updatedParaclinicos) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/paraclinicos/${id}`, updatedParaclinicos);
    }
    //  FIN PARACLINICOS //
    //  INICIO CATEGORIZACION RIESGO INFECCION //
    getCategoriaInfeccions() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/categorizacion_riesgo_infeccion`);
    }
    getCategoriaInfeccion(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/categorizacion_riesgo_infeccion/${id}`);
    }
    saveCategoriaInfeccions(CategoriaInfeccion) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/categorizacion_riesgo_infeccion`, CategoriaInfeccion);
    }
    updateCategoriaInfeccions(id, updatedCategoriaInfeccions) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/categorizacion_riesgo_infeccion/${id}`, updatedCategoriaInfeccions);
    }
    //  FIN CATEGORIZACION RIESGO INFECCION //
    //  INICIO PROCESO ALEATORIZACION //
    getProcesoAletorizacions() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/proceso_aleatoriazacion`);
    }
    getProcesoAletorizacion(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/proceso_aleatoriazacion/${id}`);
    }
    saveProcesoAletorizacions(ProcesoAletorizacion) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/proceso_aleatoriazacion`, ProcesoAletorizacion);
    }
    updateProcesoAletorizacions(id, updatedProcesoAletorizacions) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/proceso_aleatoriazacion/${id}`, updatedProcesoAletorizacions);
    }
    //  FIN PROCESO ALEATORIZACION //
    //  INICIO PROCESO VACUNACION //
    getProcesoVacunacions() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/proceso_vacunacion`);
    }
    getProcesoVacunacion(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/proceso_vacunacion/${id}`);
    }
    saveProcesoVacunacions(ProcesoVacunacion) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/proceso_vacunacion`, ProcesoVacunacion);
    }
    updateProcesoVacunacions(id, updatedProcesoVacunacions) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/proceso_vacunacion/${id}`, updatedProcesoVacunacions);
    }
    //  FIN PROCESO VACUNACION //
    // COMBO DEPENDIENTE  //
    getEstados() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/estados`);
    }
    getMunicipios() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/municipios`);
    }
    getTiposVacunas() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/tipo_vacunas`);
    }
    getParroquias() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/parroquias`);
    }
    getTodosCentrosSalud() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_URI"]}/centro_salud`);
    }
    //VISITA 1 //
    getVisitaUnos() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/visita_uno`);
    }
    getVisitaUno(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/visita_uno/${id}`);
    }
    saveVisitaUnos(VisitaUno) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/visita_uno`, VisitaUno);
    }
    updateVisitaUnos(id, updatedVisitaUnos) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/visita_uno/${id}`, updatedVisitaUnos);
    }
    //FIN DE VISITA 1 //
    //VISITA 2 //
    getVisitaDos() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/visita_dos`);
    }
    getVisitaDo(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/visita_dos/${id}`);
    }
    saveVisitaDos(VisitaDo) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/visita_dos`, VisitaDo);
    }
    updateVisitaDos(id, updatedVisitaDos) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/visita_dos/${id}`, updatedVisitaDos);
    }
    //FIN DE VISITA 2 //
    //VISITA 3 //
    getVisitaTres() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/visita_tres`);
    }
    getVisitaTre(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/visita_tres/${id}`);
    }
    saveVisitaTres(VisitaTre) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/visita_tres`, VisitaTre);
    }
    updateVisitaTres(id, updatedVisitaTres) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/visita_tres/${id}`, updatedVisitaTres);
    }
    //FIN DE VISITA 3 //
    getVisitaCuatros() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/visita_cuatro`);
    }
    getVisitaCuatro(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/visita_cuatro/${id}`);
    }
    saveVisitaCuatros(VisitaCuatro) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/visita_cuatro`, VisitaCuatro);
    }
    updateVisitaCuatros(id, updatedVisitaCuatros) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/visita_cuatro/${id}`, updatedVisitaCuatros);
    }
    //FIN DE VISITA 4 //
    getCriterioInclusions() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/criterio_inclusion`);
    }
    getCriterioInclusion(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/criterio_inclusion/${id}`);
    }
    saveCriterioInclusions(CriterioInclusion) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/criterio_inclusion`, CriterioInclusion);
    }
    updateCriterioInclusions(id, updatedCriterioInclusions) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/criterio_inclusion/${id}`, updatedCriterioInclusions);
    }
    //FIN DE INCLUSION //
    getVariasTelemedicinas() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/varias_telemedicinas`);
    }
    getVariasTelemedicina(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/varias_telemedicinas/${id}`);
    }
    saveVariasTelemedicinas(VariasTelemedicina) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/varias_telemedicinas`, VariasTelemedicina);
    }
    updateVariasTelemedicinas(id, updatedVariasTelemedicinas) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/varias_telemedicinas/${id}`, updatedVariasTelemedicinas);
    }
    //FIN DE VARIAS TELEMEDICINAS  //
    getCriterioExclusions() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/criterio_exclusion`);
    }
    getCriterioExclusion(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/criterio_exclusion/${id}`);
    }
    saveCriterioExclusions(CriterioExclusion) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/criterio_exclusion`, CriterioExclusion);
    }
    updateCriterioExclusions(id, updatedCriterioExclusions) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_0__["API_ESPROMED"]}/criterio_exclusion/${id}`, updatedCriterioExclusions);
    }
}
CombolistService.ɵfac = function CombolistService_Factory(t) { return new (t || CombolistService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CombolistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CombolistService, factory: CombolistService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hFxb":
/*!****************************************************************************************!*\
  !*** ./src/app/compoonents/admin/template/menu/menu-general/menu-general.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MenuGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuGeneralComponent", function() { return MenuGeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu-admin/menu-admin.component */ "pD0S");





function MenuGeneralComponent_app_menu_admin_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-admin");
} }
class MenuGeneralComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.usuarios = [];
    }
    ngOnInit() {
        this.informacionUsuario();
    }
    informacionUsuario() {
        this.auth.profile().subscribe(res => {
            this.usuarios = res;
            //alert(this.usuarios.user.rol_id);
        });
    }
}
MenuGeneralComponent.ɵfac = function MenuGeneralComponent_Factory(t) { return new (t || MenuGeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MenuGeneralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuGeneralComponent, selectors: [["app-menu-general"]], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function MenuGeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuGeneralComponent_app_menu_admin_0_Template, 1, 0, "app-menu-admin", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.usuarios.user == null ? null : ctx.usuarios.user.rol_id) === 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_4__["MenuAdminComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LWdlbmVyYWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "hkT0":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia-clinica/historia-clinica-visita1-vacunacion-previa/historia-clinica-visita1-vacunacion-previa.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: HistoriaClinicaVisita1VacunacionPreviaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaClinicaVisita1VacunacionPreviaComponent", function() { return HistoriaClinicaVisita1VacunacionPreviaComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../template/menu/menu-visitas/menu-visitas.component */ "duu2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function HistoriaClinicaVisita1VacunacionPreviaComponent_button_58_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriaClinicaVisita1VacunacionPreviaComponent_button_58_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaVisita1VacunacionPreviaComponent_button_59_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriaClinicaVisita1VacunacionPreviaComponent_button_59_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/historia_clinica/admin/pacientes/form/visita_uno", a1]; };
const _c1 = function (a1) { return ["/historia_clinica/admin/form/examen_fisicos", a1]; };
const _c2 = function (a1) { return ["/historia_clinica/admin/form/paraclinicos", a1]; };
const _c3 = "/historia_clinica/admin/form/categorizacion_riesgo_infeccion";
const _c4 = function (a1) { return [_c3, a1]; };
const _c5 = function (a1) { return ["/historia_clinica/admin/form/vacunacion_previa", a1]; };
class HistoriaClinicaVisita1VacunacionPreviaComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"); //Fecha Actual
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            paciente_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            vacunacion_previa: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            lote1: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            fecha_dosis1: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            lote2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            fecha_dosis2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        this.comboListService.getVisitaUno(params.id) // obtengo el juego con el parametro del id
            .subscribe(res => {
            console.log(res);
            this.pacientes = res;
            this.Form.patchValue({
                paciente_id: this.pacientes.paciente_id,
                vacunacion_previa: this.pacientes.vacunacion_previa,
                lote1: this.pacientes.lote1,
                fecha_dosis1: this.pacientes.fecha_dosis1,
                lote2: this.pacientes.lote2,
                fecha_dosis2: this.pacientes.fecha_dosis2,
            });
            this.edit = true;
        }, err => console.log(err));
    }
    Guardar() {
        const params = this.activatedRoute.snapshot.params;
        this.Form.get('paciente_id').setValue(params.id);
        this.comboListService.saveVisitaUnos(this.Form.value).subscribe(res => {
            console.log(res);
            //this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateVisitaUnos(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
HistoriaClinicaVisita1VacunacionPreviaComponent.ɵfac = function HistoriaClinicaVisita1VacunacionPreviaComponent_Factory(t) { return new (t || HistoriaClinicaVisita1VacunacionPreviaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"])); };
HistoriaClinicaVisita1VacunacionPreviaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HistoriaClinicaVisita1VacunacionPreviaComponent, selectors: [["app-historia-clinica-visita1-vacunacion-previa"]], decls: 61, vars: 28, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], ["id", "nav-tab", 1, "nav", "nav-tabs"], ["id", "nav-home-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", 3, "routerLink"], ["id", "nav-profile-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", 3, "routerLink"], ["id", "nav-contact-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", 3, "routerLink"], ["id", "nav-contact-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", "active", 3, "routerLink"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-home", 1, "tab-pane", "fade", "show", "active"], [1, "m-3"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar", "formControlName", "vacunacion_previa", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "lote1", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "fecha_dosis1", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "lote2", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "fecha_dosis2", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function HistoriaClinicaVisita1VacunacionPreviaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-menu-visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "VISITA 1 PACIENTE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Antecedentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Examen Fisico");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Paraclinicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Categorizaci\u00F3n de Riesgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Vacunaci\u00F3n Previa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Vacunaci\u00F3n Previa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Vacunacion Previa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaVisita1VacunacionPreviaComponent_Template_input_ngModelChange_37_listener($event) { return ctx.pacientes.vacunacion_previa = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Lote de dosis 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaVisita1VacunacionPreviaComponent_Template_input_ngModelChange_42_listener($event) { return ctx.pacientes.lote1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Fecha de dosis 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaVisita1VacunacionPreviaComponent_Template_input_ngModelChange_47_listener($event) { return ctx.pacientes.fecha_dosis1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Lote de dosis 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaVisita1VacunacionPreviaComponent_Template_input_ngModelChange_52_listener($event) { return ctx.pacientes.lote2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Fecha de dosis 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaVisita1VacunacionPreviaComponent_Template_input_ngModelChange_57_listener($event) { return ctx.pacientes.fecha_dosis2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, HistoriaClinicaVisita1VacunacionPreviaComponent_button_58_Template, 2, 0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, HistoriaClinicaVisita1VacunacionPreviaComponent_button_59_Template, 2, 0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "footer", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c0, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c1, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](22, _c2, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](24, _c4, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](26, _c5, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["vacunacion_previa"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.vacunacion_previa);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["lote1"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.lote1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["fecha_dosis1"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.fecha_dosis1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["lote2"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.lote2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["fecha_dosis2"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.fecha_dosis2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__["MenuVisitasComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpYS1jbGluaWNhLXZpc2l0YTEtdmFjdW5hY2lvbi1wcmV2aWEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "kh4d":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia-clinica/visitas/criterio-exclusion-form-visitas/criterio-exclusion-form-visitas.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: CriterioExclusionFormVisitasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriterioExclusionFormVisitasComponent", function() { return CriterioExclusionFormVisitasComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../template/menu/menu-visitas/menu-visitas.component */ "duu2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function CriterioExclusionFormVisitasComponent_button_192_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CriterioExclusionFormVisitasComponent_button_192_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CriterioExclusionFormVisitasComponent_button_193_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CriterioExclusionFormVisitasComponent_button_193_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = "/historia_clinica/admin/pacientes/form/criterio_inclusion";
const _c1 = function (a1) { return [_c0, a1]; };
const _c2 = "/historia_clinica/admin/pacientes/form/criterio_exclusion";
const _c3 = function (a1) { return [_c2, a1]; };
class CriterioExclusionFormVisitasComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            paciente_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            criterioex1: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioex2: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioex3: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioex4: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioex5: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioex6: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioex7: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioex8: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioex9: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioex10: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioex11: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioex12: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioex13: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioex14: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            criterioex15: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('')
        });
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        this.comboListService.getCriterioExclusion(params.id) // obtengo el juego con el parametro del id
            .subscribe(res => {
            console.log(res);
            this.pacientes = res;
            this.Form.patchValue({
                paciente_id: this.pacientes.paciente_id,
                criterioex1: this.pacientes.criterioex1,
                criterioex2: this.pacientes.criterioex2,
                criterioex3: this.pacientes.criterioex3,
                criterioex4: this.pacientes.criterioex4,
                criterioex5: this.pacientes.criterioex5,
                criterioex6: this.pacientes.criterioex6,
                criterioex7: this.pacientes.criterioex7,
                criterioex8: this.pacientes.criterioex8,
                criterioex9: this.pacientes.criterioex9,
                criterioex10: this.pacientes.criterioex10,
                criterioex11: this.pacientes.criterioex11,
                criterioex12: this.pacientes.criterioex12,
                criterioex13: this.pacientes.criterioex13,
                criterioex14: this.pacientes.criterioex14,
                criterioex15: this.pacientes.criterioex15,
            });
            this.edit = true;
        }, err => console.log(err));
    }
    Guardar() {
        const params = this.activatedRoute.snapshot.params;
        this.Form.get('paciente_id').setValue(params.id);
        this.comboListService.saveCriterioExclusions(this.Form.value).subscribe(res => {
            console.log(res);
            //this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateCriterioExclusions(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
CriterioExclusionFormVisitasComponent.ɵfac = function CriterioExclusionFormVisitasComponent_Factory(t) { return new (t || CriterioExclusionFormVisitasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__["CombolistService"])); };
CriterioExclusionFormVisitasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CriterioExclusionFormVisitasComponent, selectors: [["app-criterio-exclusion-form-visitas"]], decls: 195, vars: 39, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], ["id", "nav-tab", 1, "nav", "nav-tabs"], ["id", "nav-home-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", 3, "routerLink"], ["id", "nav-profile-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", "active", 3, "routerLink"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-home", 1, "tab-pane", "fade", "show", "active"], [1, "m-3"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-1"], [1, "btn", "btn-primary"], ["type", "radio", "name", "criterioex1", "id", "criterioex1", "value", "si", "formControlName", "criterioex1", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-danger"], ["type", "radio", "name", "criterioex1", "id", "criterioex1", "value", "no", "formControlName", "criterioex1", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex2", "id", "criterioex2", "value", "si", "formControlName", "criterioex2", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex2", "id", "criterioex2", "value", "no", "formControlName", "criterioex2", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex3", "id", "criterioex3", "value", "si", "formControlName", "criterioex3", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex3", "id", "criterioex3", "value", "no", "formControlName", "criterioex3", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex4", "id", "criterioex4", "value", "si", "formControlName", "criterioex4", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex4", "id", "criterioex4", "value", "no", "formControlName", "criterioex4", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex5", "id", "criterioex5", "value", "si", "formControlName", "criterioex5", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex5", "id", "criterioex5", "value", "no", "formControlName", "criterioex5", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex6", "id", "criterioex6", "value", "si", "formControlName", "criterioex6", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex6", "id", "criterioex6", "value", "no", "formControlName", "criterioex6", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex7", "id", "criterioex7", "value", "si", "formControlName", "criterioex7", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex7", "id", "criterioex7", "value", "no", "formControlName", "criterioex7", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex8", "id", "criterioex8", "value", "si", "formControlName", "criterioex8", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex8", "id", "criterioex8", "value", "no", "formControlName", "criterioex8", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex9", "id", "criterioex9", "value", "si", "formControlName", "criterioex9", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex9", "id", "criterioex9", "value", "no", "formControlName", "criterioex9", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex10", "id", "criterioex10", "value", "si", "formControlName", "criterioex10", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex10", "id", "criterioex10", "value", "no", "formControlName", "criterioex10", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex11", "id", "criterioex11", "value", "si", "formControlName", "criterioex11", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex11", "id", "criterioex11", "value", "no", "formControlName", "criterioex11", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex12", "id", "criterioex12", "value", "si", "formControlName", "criterioex12", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex12", "id", "criterioex12", "value", "no", "formControlName", "criterioex12", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex13", "id", "criterioex13", "value", "si", "formControlName", "criterioex13", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex13", "id", "criterioex13", "value", "no", "formControlName", "criterioex13", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex14", "id", "criterioex14", "value", "si", "formControlName", "criterioex14", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex14", "id", "criterioex14", "value", "no", "formControlName", "criterioex14", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex15", "id", "criterioex15", "value", "si", "formControlName", "criterioex15", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "criterioex15", "id", "criterioex15", "value", "no", "formControlName", "criterioex15", 3, "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function CriterioExclusionFormVisitasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-menu-visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "VISITA 1 PACIENTE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Criterio de Inclusi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Criterio de Exclusi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Criterio de Exclusi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Alguna vacunaci\u00F3n/inmunizaci\u00F3n en los 30 d\u00EDas previos a la inscripci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_32_listener($event) { return ctx.pacientes.criterioex1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_36_listener($event) { return ctx.pacientes.criterioex1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Esteroides (excepto anticonceptivos hormonales) y/o inmunoglobulinas u otra terapia con hemoderivados no terminada los 30 d\u00EDas previos a la inclusi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_43_listener($event) { return ctx.pacientes.criterioex2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_47_listener($event) { return ctx.pacientes.criterioex2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Culminaci\u00F3n de terapia inmunosupresora en los 3 meses previos a la inclusi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_54_listener($event) { return ctx.pacientes.criterioex3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_58_listener($event) { return ctx.pacientes.criterioex3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Embarazo o Lactancia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_65_listener($event) { return ctx.pacientes.criterioex4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_69_listener($event) { return ctx.pacientes.criterioex4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " S\u00EDndrome coronario agudo o ictus sufrido menos de un a\u00F1o antes de la inclusi\u00F3nx ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_76_listener($event) { return ctx.pacientes.criterioex5 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_80_listener($event) { return ctx.pacientes.criterioex5 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " Tuberculosis, Infecciones cr\u00F3nicas sist\u00E9micas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_87_listener($event) { return ctx.pacientes.criterioex6 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_91_listener($event) { return ctx.pacientes.criterioex6 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, " Alergia a medicamentos (Shock anafil\u00E1ctico, edema de Quincke, Eccema exudativo polim\u00F3rfico, atopia, enfermedad del suero), hipersensibilidad o reacci\u00F3n al\u00E9rgica a productos inmunobiol\u00F3gicos, reacciones al\u00E9rgicas conocida a componentes del medicamento estudiado, exacerbaci\u00F3n aguda de enfermedades al\u00E9rgicas el d\u00EDa de la inclusi\u00F3n al estudio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_98_listener($event) { return ctx.pacientes.criterioex7 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_102_listener($event) { return ctx.pacientes.criterioex7 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " Historia m\u00E9dica de neoplasias. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_109_listener($event) { return ctx.pacientes.criterioex8 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_113_listener($event) { return ctx.pacientes.criterioex8 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, " Donaci\u00F3n de sangre o plasma (+450ml) en los 2 meses previos a la inclusi\u00F3n al estudio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_120_listener($event) { return ctx.pacientes.criterioex9 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_124_listener($event) { return ctx.pacientes.criterioex9 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, " Historia m\u00E9dica de esplenectom\u00EDa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_131_listener($event) { return ctx.pacientes.criterioex10 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_135_listener($event) { return ctx.pacientes.criterioex10 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, " Historia m\u00E9dica de neutropenia (conteo absoluto de neutr\u00F3filos 1,000 mm3), agranulocitosis, p\u00E9rdida significativa de sangre, anemia severa (hemoglobina 80g/L), inmunodeficiencia en los 6 meses previos a la inclusi\u00F3n al estudio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_142_listener($event) { return ctx.pacientes.criterioex11 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_146_listener($event) { return ctx.pacientes.criterioex11 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, " Forma activa de una enfermedad causada por el virus de inmunodeficiencia adquirido, s\u00EDfilis, hepatitis B o C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_153_listener($event) { return ctx.pacientes.criterioex12 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_157_listener($event) { return ctx.pacientes.criterioex12 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, " Anorexia, d\u00E9ficit proteico de cualquier origen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_164_listener($event) { return ctx.pacientes.criterioex13 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_168_listener($event) { return ctx.pacientes.criterioex13 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, " Tatuajes de gran tama\u00F1o en el sitio de la inyecci\u00F3n (\u00E1rea del m\u00FAsculo deltoides), el cual no permite la evaluaci\u00F3n de la respuesta local a la administraci\u00F3n de la vacuna/placebo del estudio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_175_listener($event) { return ctx.pacientes.criterioex14 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_179_listener($event) { return ctx.pacientes.criterioex14 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, " Todos los Criterios de Inclusi\u00F3n y Exclusi\u00F3n fueron verificados y el paciente calificada para ser incluido en el estudio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_186_listener($event) { return ctx.pacientes.criterioex15 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CriterioExclusionFormVisitasComponent_Template_input_ngModelChange_190_listener($event) { return ctx.pacientes.criterioex15 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](192, CriterioExclusionFormVisitasComponent_button_192_Template, 2, 0, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](193, CriterioExclusionFormVisitasComponent_button_193_Template, 2, 0, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](194, "footer", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](35, _c1, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](37, _c3, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pacientes.criterioex15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_6__["MenuVisitasComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcml0ZXJpby1leGNsdXNpb24tZm9ybS12aXNpdGFzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "n+Y7":
/*!*****************************************!*\
  !*** ./src/app/interfaces/interface.ts ***!
  \*****************************************/
/*! exports provided: API_URI, API_ESPROMED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URI", function() { return API_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ESPROMED", function() { return API_ESPROMED; });
// export let API_URI = 'http://190.202.84.194/vacunaserver/public/api';
let API_URI = 'https://apimpps.farmapatria.com.ve/api';
// export let API_URI = 'http://127.0.0.1:8000/api';
//QR
//export let QR_URI = 'http://127.0.0.1:4200';
let API_ESPROMED = 'http://127.0.0.1:8000/api';


/***/ }),

/***/ "pD0S":
/*!************************************************************************************!*\
  !*** ./src/app/compoonents/admin/template/menu/menu-admin/menu-admin.component.ts ***!
  \************************************************************************************/
/*! exports provided: MenuAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAdminComponent", function() { return MenuAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function () { return ["/inicio"]; };
const _c1 = function () { return ["/pacientes/admin/list"]; };
const _c2 = function () { return ["/historia_clinica/admin"]; };
const _c3 = function () { return ["/vacunados/admin/form"]; };
const _c4 = function () { return ["/vacunados/admin/list"]; };
class MenuAdminComponent {
    constructor(auth) {
        this.auth = auth;
        this.VacunasMenu = false;
        this.UsuariosMenu = false;
    }
    ngOnInit() {
    }
    logout() {
        this.auth.logout();
    }
}
MenuAdminComponent.ɵfac = function MenuAdminComponent_Factory(t) { return new (t || MenuAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
MenuAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuAdminComponent, selectors: [["app-menu-admin"]], decls: 41, vars: 11, consts: [[1, "left", "side-menu"], ["id", "remove-scroll", 1, "slimscroll-menu"], ["id", "sidebar-menu"], ["id", "side-menu", 1, "metismenu"], [1, "menu-title"], [1, "waves-effect", 3, "routerLink"], [1, "dripicons-meter"], [1, "waves-effect", "mm-active", 3, "click"], [1, "dripicons-mail"], [1, "float-right", "menu-arrow"], [1, "mdi", "mdi-chevron-right"], [1, "submenu", "mm-collapse", 3, "ngClass"], [3, "routerLink"], ["href", "javascript:void(0)", 1, "waves-effect", 3, "click"], [1, "clearfix"]], template: function MenuAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Menu Administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Listado de Pacientes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Historial Clinico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuAdminComponent_Template_a_click_22_listener() { return ctx.VacunasMenu = !ctx.VacunasMenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Vacunados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Listado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuAdminComponent_Template_a_click_36_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Cerrar Sesion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.VacunasMenu ? "mm-show" : "secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".side-menu[_ngcontent-%COMP%] {\r\n   \r\n    background: #007bff !important; \r\n}\r\n\r\n\r\n\r\n#sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    color: #f8f9fa;\r\n \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSw4QkFBOEI7QUFDbEM7Ozs7QUFJQTtJQUNJLGNBQWM7O0FBRWxCIiwiZmlsZSI6Im1lbnUtYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLW1lbnUge1xyXG4gICBcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiZmYgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcblxyXG5cclxuI3NpZGViYXItbWVudSA+IHVsID4gbGkgPiBhIHtcclxuICAgIGNvbG9yOiAjZjhmOWZhO1xyXG4gXHJcbn0iXX0= */"] });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _interfaces_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/interface */ "n+Y7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class UserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    saveToken(token) {
        localStorage.setItem('usertoken', token);
        this.token = token;
    }
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem('usertoken');
        }
        return this.token;
    }
    getUserDetails() {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    }
    isLoggedIn() {
        const user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 3000;
        }
        else {
            return false;
        }
    }
    register(user) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_ESPROMED"]}/register`, user);
    }
    login(user) {
        const base = this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_ESPROMED"]}/login`, { email: user.email, password: user.password }, {
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(user);
        const request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
            if (data.token) {
                this.saveToken(data.token);
                console.log(data.token);
            }
        }));
        return request;
    }
    profile() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_ESPROMED"]}/profile`, {
            headers: { Authorization: `Bearer ${this.getToken()}`
            }
        });
    }
    logout() {
        this.token = '';
        window.localStorage.removeItem('usertoken');
        this.router.navigateByUrl('/login');
    }
    // CRUD //
    getUsuarios() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_ESPROMED"]}/usuarios`);
    }
    getUsuariosConfiguracion() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_ESPROMED"]}/user/list/configuracion`);
    }
    getUsuario(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_ESPROMED"]}/usuarios/${id}`);
    }
    actualizarPassword(id, updatedUsuario) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_ESPROMED"]}/user/actualizar/password/${id}`, updatedUsuario);
    }
    updateUsuario(id, updatedUsuario) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_ESPROMED"]}/usuarios/${id}`, updatedUsuario);
    }
    deleteUsuario(id) {
        return this.http.delete(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_ESPROMED"]}/usuarios/${id}`);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ul5r":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/admin/pacientes/pacientes-list-admin/pacientes-list-admin.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PacientesListAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacientesListAdminComponent", function() { return PacientesListAdminComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _compoonents_admin_template_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../compoonents/admin/template/menu/menu-admin/menu-admin.component */ "pD0S");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");











const _c0 = function (a1) { return ["/historia_clinica/admin/pacientes/inicio", a1]; };
function PacientesListAdminComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacuna_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 9, vacuna_r1.cedula));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 11, vacuna_r1.nombres), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 13, vacuna_r1.apellidos), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 15, vacuna_r1.sexo));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 17, vacuna_r1.fecha_nacimiento));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 19, vacuna_r1.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vacuna_r1.telefono_local);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](vacuna_r1.telefono_celular);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c0, vacuna_r1.id));
} }
const _c1 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
class PacientesListAdminComponent {
    constructor(comboListService, auth, router) {
        this.comboListService = comboListService;
        this.auth = auth;
        this.router = router;
        this.pacientes = [];
        this.paginate = 1;
        this.usuarios = [];
    }
    ngOnInit() {
        this.getVacunados();
    }
    getVacunados() {
        this.comboListService.getPacientes().subscribe(res => {
            this.pacientes = res;
            console.log(res);
        }, err => {
            console.log(err);
            if (err.status === 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Error!', 'El servidor no esta activo, no podra ver los datos...', 'error');
            }
        });
    }
}
PacientesListAdminComponent.ɵfac = function PacientesListAdminComponent_Factory(t) { return new (t || PacientesListAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_2__["CombolistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
PacientesListAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PacientesListAdminComponent, selectors: [["app-pacientes-list-admin"]], decls: 48, vars: 10, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], [1, "col-md-4"], [1, "float-right"], ["type", "text", "name", "filter", "placeholder", "Buscar...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "mt-0", "header-title"], [1, "table-rep-plugin"], ["data-pattern", "priority-columns", 1, "table-responsive", "b-0"], ["id", "tech-companies-1", 1, "table", "table-striped"], ["data-priority", "1"], ["data-priority", "3"], [4, "ngFor", "ngForOf"], ["previousLabel", "Anterior", "nextLabel", "Siguiente", 3, "pageChange"], [1, "footer"], [1, "h-float"], ["src", "assets/iconos/editar.png", 1, "h-rotate-360", 3, "routerLink"]], template: function PacientesListAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-menu-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Listado de Pacientes Registrados");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PacientesListAdminComponent_Template_input_ngModelChange_14_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Listado de Pacientes Registrados");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "C\u00E9dula");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Nombre y Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Sexo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Fecha Nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Telefono Local");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Telefono Celular");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Ir Historial Clinico");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, PacientesListAdminComponent_tr_43_Template, 24, 23, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "pagination-controls", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function PacientesListAdminComponent_Template_pagination_controls_pageChange_46_listener($event) { return ctx.paginate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "footer", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](44, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](45, 5, ctx.pacientes, ctx.filter), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, ctx.paginate)));
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _compoonents_admin_template_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_6__["MenuAdminComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWNpZW50ZXMtbGlzdC1hZG1pbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "v9XR":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia_clinica/historia-clinica-form-proceso-aleatorizacion/historia-clinica-form-proceso-aleatorizacion.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: HistoriaClinicaFormProcesoAleatorizacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaClinicaFormProcesoAleatorizacionComponent", function() { return HistoriaClinicaFormProcesoAleatorizacionComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _compoonents_admin_template_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../compoonents/admin/template/menu/menu-admin/menu-admin.component */ "pD0S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function HistoriaClinicaFormProcesoAleatorizacionComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " ingreso_proceso es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormProcesoAleatorizacionComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " fecha_proceso es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormProcesoAleatorizacionComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " hora_proceso es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormProcesoAleatorizacionComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " numero_aleatoriazacion es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormProcesoAleatorizacionComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " realizado_por es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormProcesoAleatorizacionComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " notas es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormProcesoAleatorizacionComponent_button_68_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriaClinicaFormProcesoAleatorizacionComponent_button_68_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormProcesoAleatorizacionComponent_button_69_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriaClinicaFormProcesoAleatorizacionComponent_button_69_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/historia_clinica/admin/form/paciente", a1]; };
const _c1 = "/historia_clinica/admin/form/antecedentes_personales";
const _c2 = function (a1) { return [_c1, a1]; };
const _c3 = function (a1) { return ["/historia_clinica/admin/form/examen_fisicos", a1]; };
const _c4 = function (a1) { return ["/historia_clinica/admin/form/paraclinicos", a1]; };
const _c5 = "/historia_clinica/admin/form/categorizacion_riesgo_infeccion";
const _c6 = function (a1) { return [_c5, a1]; };
const _c7 = "/historia_clinica/admin/form/proceso_aleatoriazacion";
const _c8 = function (a1) { return [_c7, a1]; };
const _c9 = function (a1) { return ["/historia_clinica/admin/form/proceso_vacunacion", a1]; };
class HistoriaClinicaFormProcesoAleatorizacionComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"); //Fecha Actual
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            paciente_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            ingreso_proceso: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            fecha_proceso: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            hora_proceso: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            numero_aleatoriazacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            realizado_por: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            notas: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        //this.fechaActual=new Date();
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        this.comboListService.getProcesoAletorizacion(params.id) // obtengo el juego con el parametro del id
            .subscribe(res => {
            console.log(res);
            this.pacientes = res;
            this.Form.patchValue({
                paciente_id: this.pacientes.paciente_id,
                ingreso_proceso: this.pacientes.ingreso_proceso,
                fecha_proceso: this.pacientes.fecha_proceso,
                hora_proceso: this.pacientes.hora_proceso,
                numero_aleatoriazacion: this.pacientes.numero_aleatoriazacion,
                realizado_por: this.pacientes.realizado_por,
                notas: this.pacientes.notas
                //imagen_qr: this.vacunas.imagen_qr,
            });
            this.edit = true;
        }, err => console.log(err));
    }
    Guardar() {
        const params = this.activatedRoute.snapshot.params;
        this.Form.get('paciente_id').setValue(params.id);
        this.comboListService.saveProcesoAletorizacions(this.Form.value).subscribe(res => {
            console.log(res);
            //this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateProcesoAletorizacions(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
HistoriaClinicaFormProcesoAleatorizacionComponent.ɵfac = function HistoriaClinicaFormProcesoAleatorizacionComponent_Factory(t) { return new (t || HistoriaClinicaFormProcesoAleatorizacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"])); };
HistoriaClinicaFormProcesoAleatorizacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HistoriaClinicaFormProcesoAleatorizacionComponent, selectors: [["app-historia-clinica-form-proceso-aleatorizacion"]], decls: 71, vars: 43, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], [1, "btn", "btn-danger", "m-3", 3, "routerLink"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar", "formControlName", "ingreso_proceso", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "date", "onkeydown", "return false", "id", "example-date-input", "placeholder", "Ingresar fecha nacimiento", "formControlName", "fecha_proceso", 1, "form-control", 3, "max", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "hora_proceso", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "numero_aleatoriazacion", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "realizado_por", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar  ", "formControlName", "notas", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function HistoriaClinicaFormProcesoAleatorizacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-menu-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "PROCESO DE ALEATORIZACI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Identificaci\u00F3n del Paciente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Antecedentes Personales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Examen F\u00EDsico ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Paraclinicos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Categorizaci\u00F3n de Riesgo de Infecci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Proceso de Aleatorizaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Proceso de Vacunaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Ingreso al proceso de aleatorizaci\u00F3n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormProcesoAleatorizacionComponent_Template_input_ngModelChange_35_listener($event) { return ctx.pacientes.ingreso_proceso = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, HistoriaClinicaFormProcesoAleatorizacionComponent_div_36_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormProcesoAleatorizacionComponent_Template_input_ngModelChange_41_listener($event) { return ctx.pacientes.fecha_proceso = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, HistoriaClinicaFormProcesoAleatorizacionComponent_div_42_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Hora");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormProcesoAleatorizacionComponent_Template_input_ngModelChange_47_listener($event) { return ctx.pacientes.hora_proceso = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, HistoriaClinicaFormProcesoAleatorizacionComponent_div_48_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Numero de aleatorizaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormProcesoAleatorizacionComponent_Template_input_ngModelChange_53_listener($event) { return ctx.pacientes.numero_aleatoriazacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, HistoriaClinicaFormProcesoAleatorizacionComponent_div_54_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Realizado por:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormProcesoAleatorizacionComponent_Template_input_ngModelChange_59_listener($event) { return ctx.pacientes.realizado_por = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, HistoriaClinicaFormProcesoAleatorizacionComponent_div_60_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Notas:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormProcesoAleatorizacionComponent_Template_textarea_ngModelChange_65_listener($event) { return ctx.pacientes.notas = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "                                                  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, HistoriaClinicaFormProcesoAleatorizacionComponent_div_67_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, HistoriaClinicaFormProcesoAleatorizacionComponent_button_68_Template, 2, 0, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, HistoriaClinicaFormProcesoAleatorizacionComponent_button_69_Template, 2, 0, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "footer", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](29, _c0, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](31, _c2, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](33, _c3, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](35, _c4, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](37, _c6, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](39, _c8, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](41, _c9, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["ingreso_proceso"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.ingreso_proceso);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.controls["ingreso_proceso"].touched && (ctx.Form.controls["ingreso_proceso"].errors == null ? null : ctx.Form.controls["ingreso_proceso"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("max", ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["fecha_proceso"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.fecha_proceso);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.controls["fecha_proceso"].touched && (ctx.Form.controls["fecha_proceso"].errors == null ? null : ctx.Form.controls["fecha_proceso"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["hora_proceso"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.hora_proceso);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.controls["hora_proceso"].touched && (ctx.Form.controls["hora_proceso"].errors == null ? null : ctx.Form.controls["hora_proceso"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["numero_aleatoriazacion"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.numero_aleatoriazacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.controls["numero_aleatoriazacion"].touched && (ctx.Form.controls["numero_aleatoriazacion"].errors == null ? null : ctx.Form.controls["numero_aleatoriazacion"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["realizado_por"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.pacientes.realizado_por);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.controls["realizado_por"].touched && (ctx.Form.controls["realizado_por"].errors == null ? null : ctx.Form.controls["realizado_por"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["notas"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.pacientes.notas);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.Form.controls["notas"].touched && (ctx.Form.controls["notas"].errors == null ? null : ctx.Form.controls["notas"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _compoonents_admin_template_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_7__["MenuAdminComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpYS1jbGluaWNhLWZvcm0tcHJvY2Vzby1hbGVhdG9yaXphY2lvbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_cedula_form_historia_clinica_cedula_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/admin/historia-clinica/historia-clinica-cedula-form/historia-clinica-cedula-form.component */ "CEa+");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_form_antecedentes_personales_historia_clinica_form_antecedentes_personales_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin/historia-clinica/historia-clinica-form-antecedentes-personales/historia-clinica-form-antecedentes-personales.component */ "dfk+");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_form_examen_fisico_historia_clinica_form_examen_fisico_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/historia-clinica/historia-clinica-form-examen-fisico/historia-clinica-form-examen-fisico.component */ "YLgH");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_form_paciente_historia_clinica_form_paciente_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/historia-clinica/historia-clinica-form-paciente/historia-clinica-form-paciente.component */ "VhhF");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_telemedicina_form_historia_clinica_telemedicina_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/historia-clinica/historia-clinica-telemedicina-form/historia-clinica-telemedicina-form.component */ "RwXd");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_varias_telemedicinas_form_historia_clinica_varias_telemedicinas_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/historia-clinica/historia-clinica-varias-telemedicinas-form/historia-clinica-varias-telemedicinas-form.component */ "QkUA");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_visita1_vacunacion_previa_historia_clinica_visita1_vacunacion_previa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/historia-clinica/historia-clinica-visita1-vacunacion-previa/historia-clinica-visita1-vacunacion-previa.component */ "hkT0");
/* harmony import */ var _components_admin_historia_clinica_visitas_criterio_exclusion_form_visitas_criterio_exclusion_form_visitas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/historia-clinica/visitas/criterio-exclusion-form-visitas/criterio-exclusion-form-visitas.component */ "kh4d");
/* harmony import */ var _components_admin_historia_clinica_visitas_criterio_inclusion_form_visitas_criterio_inclusion_form_visitas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/historia-clinica/visitas/criterio-inclusion-form-visitas/criterio-inclusion-form-visitas.component */ "csrq");
/* harmony import */ var _components_admin_historia_clinica_visitas_visitas_paciente_inicio_visitas_paciente_inicio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/historia-clinica/visitas/visitas-paciente-inicio/visitas-paciente-inicio.component */ "eWPn");
/* harmony import */ var _components_admin_historia_clinica_visitas_visitas1_paciente_form_visitas1_paciente_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/historia-clinica/visitas/visitas1-paciente-form/visitas1-paciente-form.component */ "JnF4");
/* harmony import */ var _components_admin_historia_clinica_visitas_visitas2_paciente_form_visitas2_paciente_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/historia-clinica/visitas/visitas2-paciente-form/visitas2-paciente-form.component */ "Gj86");
/* harmony import */ var _components_admin_historia_clinica_visitas_visitas3_paciente_form_visitas3_paciente_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/historia-clinica/visitas/visitas3-paciente-form/visitas3-paciente-form.component */ "+ac7");
/* harmony import */ var _components_admin_historia_clinica_visitas_visitas4_paciente_form_visitas4_paciente_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/admin/historia-clinica/visitas/visitas4-paciente-form/visitas4-paciente-form.component */ "bRR+");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_form_categorizacion_riesgo_infeccion_historia_clinica_form_categorizacion_riesgo_infeccion_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/admin/historia_clinica/historia-clinica-form-categorizacion-riesgo-infeccion/historia-clinica-form-categorizacion-riesgo-infeccion.component */ "zj9j");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_form_paraclinicos_historia_clinica_form_paraclinicos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin/historia_clinica/historia-clinica-form-paraclinicos/historia-clinica-form-paraclinicos.component */ "CGua");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_form_proceso_aleatorizacion_historia_clinica_form_proceso_aleatorizacion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin/historia_clinica/historia-clinica-form-proceso-aleatorizacion/historia-clinica-form-proceso-aleatorizacion.component */ "v9XR");
/* harmony import */ var _components_admin_historia_clinica_historia_clinica_form_proceso_vacunacion_historia_clinica_form_proceso_vacunacion_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin/historia_clinica/historia-clinica-form-proceso-vacunacion/historia-clinica-form-proceso-vacunacion.component */ "YnJ9");
/* harmony import */ var _components_admin_inicio_admin_inicio_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin/inicio-admin/inicio-admin.component */ "6PkB");
/* harmony import */ var _components_admin_pacientes_pacientes_list_admin_pacientes_list_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin/pacientes/pacientes-list-admin/pacientes-list-admin.component */ "ul5r");
/* harmony import */ var _components_admin_vacunados_vacunados_form_admin_vacunados_form_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/admin/vacunados/vacunados-form-admin/vacunados-form-admin.component */ "ZYre");
/* harmony import */ var _components_admin_vacunados_vacunados_list_admin_vacunados_list_admin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/admin/vacunados/vacunados-list-admin/vacunados-list-admin.component */ "1dbe");
/* harmony import */ var _components_public_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/public/login/login.component */ "LOJo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");


























const routes = [
    { path: 'login', component: _components_public_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"] },
    //ADMIN //
    { path: 'inicio', component: _components_admin_inicio_admin_inicio_admin_component__WEBPACK_IMPORTED_MODULE_19__["InicioAdminComponent"] },
    { path: 'historia_clinica/admin', component: _components_admin_historia_clinica_historia_clinica_cedula_form_historia_clinica_cedula_form_component__WEBPACK_IMPORTED_MODULE_1__["HistoriaClinicaCedulaFormComponent"] },
    { path: 'historia_clinica/admin/form/paciente/:id', component: _components_admin_historia_clinica_historia_clinica_form_paciente_historia_clinica_form_paciente_component__WEBPACK_IMPORTED_MODULE_4__["HistoriaClinicaFormPacienteComponent"] },
    { path: 'historia_clinica/admin/form/antecedentes_personales/:id', component: _components_admin_historia_clinica_historia_clinica_form_antecedentes_personales_historia_clinica_form_antecedentes_personales_component__WEBPACK_IMPORTED_MODULE_2__["HistoriaClinicaFormAntecedentesPersonalesComponent"] },
    { path: 'historia_clinica/admin/form/examen_fisicos/:id', component: _components_admin_historia_clinica_historia_clinica_form_examen_fisico_historia_clinica_form_examen_fisico_component__WEBPACK_IMPORTED_MODULE_3__["HistoriaClinicaFormExamenFisicoComponent"] },
    { path: 'historia_clinica/admin/form/paraclinicos/:id', component: _components_admin_historia_clinica_historia_clinica_form_paraclinicos_historia_clinica_form_paraclinicos_component__WEBPACK_IMPORTED_MODULE_16__["HistoriaClinicaFormParaclinicosComponent"] },
    { path: 'historia_clinica/admin/form/categorizacion_riesgo_infeccion/:id', component: _components_admin_historia_clinica_historia_clinica_form_categorizacion_riesgo_infeccion_historia_clinica_form_categorizacion_riesgo_infeccion_component__WEBPACK_IMPORTED_MODULE_15__["HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent"] },
    { path: 'historia_clinica/admin/form/proceso_aleatoriazacion/:id', component: _components_admin_historia_clinica_historia_clinica_form_proceso_aleatorizacion_historia_clinica_form_proceso_aleatorizacion_component__WEBPACK_IMPORTED_MODULE_17__["HistoriaClinicaFormProcesoAleatorizacionComponent"] },
    { path: 'historia_clinica/admin/form/proceso_vacunacion/:id', component: _components_admin_historia_clinica_historia_clinica_form_proceso_vacunacion_historia_clinica_form_proceso_vacunacion_component__WEBPACK_IMPORTED_MODULE_18__["HistoriaClinicaFormProcesoVacunacionComponent"] },
    { path: 'historia_clinica/admin/form/vacunacion_previa/:id', component: _components_admin_historia_clinica_historia_clinica_visita1_vacunacion_previa_historia_clinica_visita1_vacunacion_previa_component__WEBPACK_IMPORTED_MODULE_7__["HistoriaClinicaVisita1VacunacionPreviaComponent"] },
    { path: 'vacunados/admin/list', component: _components_admin_vacunados_vacunados_list_admin_vacunados_list_admin_component__WEBPACK_IMPORTED_MODULE_22__["VacunadosListAdminComponent"] },
    { path: 'vacunados/admin/form', component: _components_admin_vacunados_vacunados_form_admin_vacunados_form_admin_component__WEBPACK_IMPORTED_MODULE_21__["VacunadosFormAdminComponent"] },
    { path: 'vacunados/admin/edit/:id', component: _components_admin_vacunados_vacunados_form_admin_vacunados_form_admin_component__WEBPACK_IMPORTED_MODULE_21__["VacunadosFormAdminComponent"] },
    { path: 'pacientes/admin/list', component: _components_admin_pacientes_pacientes_list_admin_pacientes_list_admin_component__WEBPACK_IMPORTED_MODULE_20__["PacientesListAdminComponent"] },
    //VISITAS1 //
    { path: 'historia_clinica/admin/pacientes/inicio/:id', component: _components_admin_historia_clinica_visitas_visitas_paciente_inicio_visitas_paciente_inicio_component__WEBPACK_IMPORTED_MODULE_10__["VisitasPacienteInicioComponent"] },
    { path: 'historia_clinica/admin/pacientes/form/visita_uno/:id', component: _components_admin_historia_clinica_visitas_visitas1_paciente_form_visitas1_paciente_form_component__WEBPACK_IMPORTED_MODULE_11__["Visitas1PacienteFormComponent"] },
    { path: 'historia_clinica/admin/pacientes/form/visita_dos/:id', component: _components_admin_historia_clinica_visitas_visitas2_paciente_form_visitas2_paciente_form_component__WEBPACK_IMPORTED_MODULE_12__["Visitas2PacienteFormComponent"] },
    { path: 'historia_clinica/admin/pacientes/form/visita_tres/:id', component: _components_admin_historia_clinica_visitas_visitas3_paciente_form_visitas3_paciente_form_component__WEBPACK_IMPORTED_MODULE_13__["Visitas3PacienteFormComponent"] },
    { path: 'historia_clinica/admin/pacientes/form/visita_cuatro/:id', component: _components_admin_historia_clinica_visitas_visitas4_paciente_form_visitas4_paciente_form_component__WEBPACK_IMPORTED_MODULE_14__["Visitas4PacienteFormComponent"] },
    { path: 'historia_clinica/admin/pacientes/form/telemedicina/:id', component: _components_admin_historia_clinica_historia_clinica_telemedicina_form_historia_clinica_telemedicina_form_component__WEBPACK_IMPORTED_MODULE_5__["HistoriaClinicaTelemedicinaFormComponent"] },
    { path: 'historia_clinica/admin/pacientes/form/criterio_inclusion/:id', component: _components_admin_historia_clinica_visitas_criterio_inclusion_form_visitas_criterio_inclusion_form_visitas_component__WEBPACK_IMPORTED_MODULE_9__["CriterioInclusionFormVisitasComponent"] },
    { path: 'historia_clinica/admin/pacientes/form/criterio_exclusion/:id', component: _components_admin_historia_clinica_visitas_criterio_exclusion_form_visitas_criterio_exclusion_form_visitas_component__WEBPACK_IMPORTED_MODULE_8__["CriterioExclusionFormVisitasComponent"] },
    { path: 'historia_clinica/admin/pacientes/form/varias_telemedicinas/:id', component: _components_admin_historia_clinica_historia_clinica_varias_telemedicinas_form_historia_clinica_varias_telemedicinas_form_component__WEBPACK_IMPORTED_MODULE_6__["HistoriaClinicaVariasTelemedicinasFormComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zj9j":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/components/admin/historia_clinica/historia-clinica-form-categorizacion-riesgo-infeccion/historia-clinica-form-categorizacion-riesgo-infeccion.component.ts ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent", function() { return HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../compoonents/admin/template/sidebar/sidebar.component */ "X30y");
/* harmony import */ var _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../template/menu/menu-visitas/menu-visitas.component */ "duu2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent_button_42_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent_button_42_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent_button_43_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent_button_43_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/historia_clinica/admin/pacientes/form/visita_uno", a1]; };
const _c1 = function (a1) { return ["/historia_clinica/admin/form/examen_fisicos", a1]; };
const _c2 = function (a1) { return ["/historia_clinica/admin/form/paraclinicos", a1]; };
const _c3 = "/historia_clinica/admin/form/categorizacion_riesgo_infeccion";
const _c4 = function (a1) { return [_c3, a1]; };
const _c5 = function (a1) { return ["/historia_clinica/admin/form/vacunacion_previa", a1]; };
class HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"); //Fecha Actual
        this.pacientes = [];
        this.edit = false;
        this.link = '';
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            paciente_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            opciones_riesgo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        //this.fechaActual=new Date();
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        this.link = params.id;
        this.comboListService.getCategoriaInfeccion(params.id) // obtengo el juego con el parametro del id
            .subscribe(res => {
            console.log(res);
            this.pacientes = res;
            this.Form.patchValue({
                paciente_id: this.pacientes.paciente_id,
                opciones_riesgo: this.pacientes.opciones_riesgo,
            });
            this.edit = true;
        }, err => console.log(err));
    }
    Guardar() {
        const params = this.activatedRoute.snapshot.params;
        this.Form.get('paciente_id').setValue(params.id);
        this.comboListService.saveCategoriaInfeccions(this.Form.value).subscribe(res => {
            console.log(res);
            //this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.comboListService.updateCategoriaInfeccions(this.pacientes.id, this.pacientes)
            .subscribe(res => {
            console.log('actualizando', res);
            // this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
            this.ngOnInit();
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent.ɵfac = function HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent_Factory(t) { return new (t || HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"])); };
HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent, selectors: [["app-historia-clinica-form-categorizacion-riesgo-infeccion"]], decls: 45, vars: 20, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], ["id", "nav-tab", 1, "nav", "nav-tabs"], ["id", "nav-home-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", 3, "routerLink"], ["id", "nav-profile-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", 3, "routerLink"], ["id", "nav-contact-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", 3, "routerLink"], ["id", "nav-contact-tab", "data-toggle", "tab", 1, "nav-item", "nav-link", "active", 3, "routerLink"], [1, "mt-5", "mb-3"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "opciones_riesgo", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["value", "alto"], ["value", "moderado"], ["value", "general"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-menu-visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "VISITA 1 PACIENTE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Antecedentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Examen Fisico");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Paraclinicos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Categorizaci\u00F3n de Riesgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Vacunaci\u00F3n Previa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Categorizaci\u00F3n de Riesgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Categorizaci\u00F3n de Riesgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent_Template_select_ngModelChange_35_listener($event) { return ctx.pacientes.opciones_riesgo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Alto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Moderado");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent_button_42_Template, 2, 0, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, HistoriaClinicaFormCategorizacionRiesgoInfeccionComponent_button_43_Template, 2, 0, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "footer", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c1, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c2, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c4, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c5, ctx.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.Form.controls["opciones_riesgo"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.pacientes.opciones_riesgo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_compoonents_admin_template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _template_menu_menu_visitas_menu_visitas_component__WEBPACK_IMPORTED_MODULE_7__["MenuVisitasComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpYS1jbGluaWNhLWZvcm0tY2F0ZWdvcml6YWNpb24tcmllc2dvLWluZmVjY2lvbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map