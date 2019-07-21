(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "./src/app/components/reset-password/reset-password.component.ts");









var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_services__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'forgot-password', component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"] },
    { path: 'reset-password', component: _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul> -->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/constants */ "./src/app/constants/constants.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(operationsService) {
        this.operationsService = operationsService;
        this.title = _constants_constants__WEBPACK_IMPORTED_MODULE_3__["APP_NAME"];
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["OperationsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_button_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-button-loader */ "./node_modules/angular-button-loader/fesm5/angular-button-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/reset-password/reset-password.component */ "./src/app/components/reset-password/reset-password.component.ts");
/* harmony import */ var _components_shared_slide_show_slide_show_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/shared/slide-show/slide-show.component */ "./src/app/components/shared/slide-show/slide-show.component.ts");
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/shared/header/header.component */ "./src/app/components/shared/header/header.component.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");

/* Modules */







/* Components */

/* Services */









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordComponent"],
                _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__["ResetPasswordComponent"],
                _components_shared_slide_show_slide_show_component__WEBPACK_IMPORTED_MODULE_15__["SlideShowComponent"],
                _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                angular_button_loader__WEBPACK_IMPORTED_MODULE_7__["AngularButtonLoaderModule"].forRoot()
            ],
            providers: [_services__WEBPACK_IMPORTED_MODULE_9__["OperationsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  \r\n    <app-slide-show></app-slide-show>\r\n      \r\n    <div class=\"\">\r\n            <div class=\"\">\r\n              <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                        </div>\r\n                  <div class=\"col-md-6 bg-white\">\r\n                          <div class=\"login-section wrapper-table\">\r\n                              <div class=\"login-outer wrapper-cell\">\r\n                                    <div class=\"logo text-center\">\r\n                                      <h1>Twitter Pro</h1>\r\n                                        <p>Password Reset</p>\r\n                                    </div>\r\n\r\n                                    <form class=\"login-form\" [formGroup]=\"resetPwdForm\" (ngSubmit)=\"onSubmit()\">\r\n                                      <div class=\"alert\" *ngIf=\"showMessage\" [ngClass]=\"{'alert-success': response?.success , 'alert-danger' : !response?.success}\" role=\"alert\" >\r\n                                        <p class=\"text-center\">{{ response?.message || '' }} </p>\r\n                                      </div>\r\n                                      <div class=\"custom-form\">\r\n                                          <div class=\"form-group\">\r\n                                            <label for=\"user_name\">Email</label>\r\n                                            <input type=\"email\" class=\"form-control\" formControlName=\"user_name\" class=\"form-control\" placeholder=\"Enter email\" [ngClass]=\"{ 'is-invalid': f.user_name.errors  }\" >\r\n                                            <div class=\"invalid-feedback\">\r\n                                              <div *ngIf=\"f.user_name.hasError('required')\">Email is required</div>\r\n                                              <div *ngIf=\"f.user_name.hasError('pattern')\">Email is invalid</div>\r\n                                            </div> \r\n                                          </div>\r\n                                            \r\n                                            <div class=\"remember-forgot\">\r\n                                              <div class=\"row\">\r\n                                                  <div class=\"col text-left checkbox-animated m-0\">\r\n                                                  </div>\r\n                                                  <div class=\"col text-right\">\r\n                                                      <a routerLink=\"/login\">Go back to Login</a>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"twitter-button text-center my-4\">\r\n                                          <button class=\"btn btn-twitter\" [disabled]=\"resetPwdForm.invalid\"  buttonLoader [loaderColor]=\"'white'\"><span></span>Send Email</button>\r\n                                        </div>\r\n                                    </form>\r\n                                    <div class=\"sign-up mb-4 text-center\">\r\n                                        Don't have an account yet?\r\n                                        <a routerLink=\"/register\">Sign Up</a>\r\n                                    </div>\r\n                                    <div class=\"social-icon mb-4 text-center\">\r\n                                      <ul>\r\n                                        <li><a href=\"#\"><i class=\"fab fa-instagram\"></i></a></li>\r\n                                        <li><a href=\"#\"><i class=\"fab fa-twitter\"></i></a></li>\r\n                                        <li><a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a></li>\r\n                                      </ul>\r\n                                    </div>\r\n                                    <div class=\"login-footer text-center\">\r\n                                      <ul class=\"mb-4\">\r\n                                        <li><a href=\"#\">About</a></li>\r\n                                        <li><a href=\"#\">FAQ’s</a></li>\r\n                                        <li><a href=\"#\">Contact</a></li>\r\n                                        <li><a href=\"#\">Terms</a></li>\r\n                                        <li><a href=\"#\">Privacy</a></li>\r\n                                      </ul>\r\n                                        <p>© 2019 Only VIPs. All rights reserved.</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> \r\n  \r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/components/forgot-password/forgot-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var angular_button_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-button-loader */ "./node_modules/angular-button-loader/fesm5/angular-button-loader.js");






var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(formBuilder, btnLoaderService, operationsService) {
        this.formBuilder = formBuilder;
        this.btnLoaderService = btnLoaderService;
        this.operationsService = operationsService;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.showMessage = this.submitted = false;
        this.resetPwdForm = this.formBuilder.group({
            user_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(src_app_constants_constants__WEBPACK_IMPORTED_MODULE_4__["EMAIL_PATTERN"])])]
        });
    };
    Object.defineProperty(ForgotPasswordComponent.prototype, "f", {
        get: function () { return this.resetPwdForm.controls; },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.resetPwdForm.invalid)
            return;
        this.submitted = true;
        this.btnLoaderService.displayLoader();
        this.operationsService.postOperations('forgot-password', this.resetPwdForm.value).subscribe(function (response) {
            //console.log('Forgot Password Response', result);
            _this.btnLoaderService.hideLoader();
            _this.response = response;
            _this.showMessage = true;
            if (response.success) {
                setTimeout(function () {
                    _this.showMessage = false;
                    _this.resetPwdForm.reset();
                }, 5000);
            }
        }, function (error) {
            console.error('Forgot Password Error', error);
            _this.btnLoaderService.hideLoader();
        });
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/components/forgot-password/forgot-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            angular_button_loader__WEBPACK_IMPORTED_MODULE_5__["AngularButtonLoaderService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_3__["OperationsService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  \r\n    <app-slide-show></app-slide-show>\r\n      \r\n    <div class=\"\">\r\n            <div class=\"\">\r\n              <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                        </div>\r\n                  <div class=\"col-md-6 bg-white\">\r\n                          <div class=\"login-section wrapper-table\">\r\n                              <div class=\"login-outer wrapper-cell\">\r\n                                  <div class=\"logo text-center\">\r\n                                      <h1>Twitter Pro</h1>\r\n                                        <p>Twitter Pro dolor sit amet</p>\r\n                                    </div>\r\n                                    <div class=\"twitter-button text-center\">\r\n                                      <button class=\"btn btn-twitter\" disabled><i class=\"fab fa-twitter\"></i>Sign Up / Login with Twitter</button>\r\n                                    </div>\r\n                                    <div class=\"or-seperator\">\r\n                                      <span>OR</span>\r\n                                    </div>\r\n                                    <form class=\"login-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                                      <div class=\"custom-form\">\r\n                                          <div class=\"form-group\">\r\n                                            <label for=\"user_name\">Email / Username</label>\r\n                                            <input type=\"email\" class=\"form-control\" formControlName=\"user_name\" class=\"form-control\" placeholder=\"Enter username / email\" [ngClass]=\"{ 'is-invalid': submitted && f.user_name.errors }\" >\r\n                                            <div *ngIf=\"submitted && f.user_name.errors\" class=\"invalid-feedback\">\r\n                                              <div *ngIf=\"f.user_name.errors.required\">Username is required</div>\r\n                                            </div> \r\n                                          </div>\r\n                                            <div class=\"form-group\">\r\n                                              <label>Password</label>\r\n                                              <input type=\"password\" formControlName=\"password\" placeholder=\"Enter password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                                              <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"remember-forgot\">\r\n                                              <div class=\"row\">\r\n                                                  <div class=\"col text-left checkbox-animated m-0\">\r\n                                                      <!-- <input id=\"checkbox_animated_1\" type=\"checkbox\">\r\n                                                        <label for=\"checkbox_animated_1\">\r\n                                                          <input type=\"checkbox\">\r\n                                                            <span class=\"check\"></span>\r\n                                                              <span class=\"box\"></span>\r\n                                                            Remember\r\n                                                        </label> -->\r\n                                                    </div>\r\n                                                  <div class=\"col text-right\">\r\n                                                      <a routerLink=\"/forgot-password\">Forgot Password?</a>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"twitter-button text-center my-4\">\r\n                                          <button class=\"btn btn-twitter\" [disabled]=\"loginForm.invalid\">Login</button>\r\n                                        </div>\r\n                                    </form>\r\n                                    <div class=\"sign-up mb-4 text-center\">\r\n                                        Don't have an account yet?\r\n                                        <a routerLink=\"/register\">Sign Up</a>\r\n                                    </div>\r\n                                    <div class=\"social-icon mb-4 text-center\">\r\n                                      <ul>\r\n                                        <li><a href=\"#\"><i class=\"fab fa-instagram\"></i></a></li>\r\n                                        <li><a href=\"#\"><i class=\"fab fa-twitter\"></i></a></li>\r\n                                        <li><a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a></li>\r\n                                      </ul>\r\n                                    </div>\r\n                                    <div class=\"login-footer text-center\">\r\n                                      <ul class=\"mb-4\">\r\n                                        <li><a href=\"#\">About</a></li>\r\n                                        <li><a href=\"#\">FAQ’s</a></li>\r\n                                        <li><a href=\"#\">Contact</a></li>\r\n                                        <li><a href=\"#\">Terms</a></li>\r\n                                        <li><a href=\"#\">Privacy</a></li>\r\n                                      </ul>\r\n                                        <p>© 2019 Only VIPs. All rights reserved.</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> \r\n  \r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.submitted = false;
        this.loginForm = this.formBuilder.group({
            user_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.authService.logOut();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.authService.login(this.loginForm.value).subscribe(function (user) {
            //console.log('User', user);
            if (user)
                _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            console.error('Error', error);
        });
    };
    LoginComponent.prototype.handlError = function (error) {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  \r\n    <app-slide-show></app-slide-show>\r\n      \r\n    <div class=\"\">\r\n            <div class=\"\">\r\n              <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\"></div>\r\n                  <div class=\"col-md-6 bg-white\">\r\n                          <div class=\"login-section wrapper-table\">\r\n                              <div class=\"login-outer wrapper-cell\">\r\n                                  <div class=\"logo text-center\">\r\n                                      <h1>Twitter Pro</h1>\r\n                                        <p>Twitter Pro dolor sit amet</p>\r\n                                    </div>\r\n                                    <div class=\"twitter-button text-center\">\r\n                                      <button class=\"btn btn-twitter\" disabled><i class=\"fab fa-twitter\"></i>Sign Up / Login with Twitter</button>\r\n                                    </div>\r\n                                    <div class=\"or-seperator\">\r\n                                      <span>OR</span>\r\n                                    </div>\r\n                                    <form class=\"login-form\" [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n                                        <div class=\"alert\" [ngClass]=\"{'alert-success': response?.success , 'alert-danger' : !response?.success}\" role=\"alert\" *ngIf=\"response\">\r\n                                          <p class=\"text-center\">{{ response?.message }} </p>\r\n                                        </div>\r\n\r\n                                      <div class=\"custom-form\">\r\n\r\n                                          <div class=\"form-group\">\r\n                                            <label for=\"first_name\"> First Name</label>\r\n                                            <input type=\"text\" class=\"form-control\" formControlName=\"first_name\" class=\"form-control\" placeholder=\"Enter first name\" [ngClass]=\"{ 'is-invalid': f.first_name.touched && f.first_name.errors }\" >\r\n                                            <div *ngIf=\"f.first_name.errors\" class=\"invalid-feedback\">\r\n                                              <div *ngIf=\"f.first_name.errors.required\">First name is required</div>\r\n                                            </div> \r\n                                          </div>\r\n\r\n                                          <div class=\"form-group\">\r\n                                            <label for=\"last_name\"> Last Name</label>\r\n                                            <input type=\"text\" class=\"form-control\" formControlName=\"last_name\" class=\"form-control\" placeholder=\"Enter last name\" [ngClass]=\"{ 'is-invalid': f.last_name.touched && f.last_name.errors }\" >\r\n                                            <div *ngIf=\"f.last_name.errors\" class=\"invalid-feedback\">\r\n                                              <div *ngIf=\"f.last_name.errors.required\">Last name is required</div>\r\n                                            </div> \r\n                                          </div>\r\n\r\n                                          <div class=\"form-group\">\r\n                                            <label for=\"user_name\"> Username</label>\r\n                                            <input type=\"text\" class=\"form-control\" formControlName=\"user_name\" class=\"form-control\" placeholder=\"Enter username\" [ngClass]=\"{ 'is-invalid': f.user_name.touched && f.user_name.errors }\" >\r\n                                            <div *ngIf=\"f.user_name.errors || !response?.success\" class=\"invalid-feedback\">\r\n                                              <div *ngIf=\"f.user_name.hasError('required')\">Username is required</div>\r\n                                              <div *ngIf=\"response?.message?.indexOf('Username') > -1\">{{ response?.message }}</div>\r\n                                            </div> \r\n                                          </div>\r\n\r\n                                          <div class=\"form-group\">\r\n                                            <label for=\"user_name\">Email</label>\r\n                                            <input type=\"email\" class=\"form-control\" formControlName=\"email\" class=\"form-control\" placeholder=\"Enter email\" [ngClass]=\"{ 'is-invalid': f.email.touched && f.email.errors }\" >\r\n                                            <div *ngIf=\"f.email.errors || !response?.success\" class=\"invalid-feedback\">\r\n                                              <div *ngIf=\"f.email.hasError('required')\">Email is required</div>\r\n                                              <div *ngIf=\"f.email.hasError('pattern')\">Email is invalid</div>\r\n                                              </div> \r\n                                            </div>\r\n                                            <div *ngIf=\"response?.message.indexOf('Email') > -1\" class=\"invalid-feedback\">{{ response?.message }}</div>\r\n\r\n                                          <div class=\"form-group\">\r\n                                            <label>Password</label>\r\n                                            <input type=\"password\" formControlName=\"password\" placeholder=\"Enter password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': f.password.touched && f.password.errors }\" />\r\n                                            \r\n                                            <div *ngIf=\"f.password.invalid && (f.password.dirty || f.password.touched)\" class=\"invalid-feedback\">\r\n                                              <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                                              <div *ngIf=\"f.password.hasError('hasNumber')\">Must have at least 1 number!</div>\r\n                                              <div *ngIf=\"f.password.hasError('hasCapitalCase')\">Must have at least 1 UpperCase letter!</div>\r\n                                              <div *ngIf=\"f.password.hasError('hasLowerCase')\">Must have at least 1 LowerCase letter!</div>\r\n                                            </div>\r\n                                          </div>\r\n\r\n                                          <div class=\"form-group\">\r\n                                            <label>Confirm Password</label>\r\n                                            <input type=\"password\" formControlName=\"confirm_password\" placeholder=\"Confirm password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': f.confirm_password.touched && f.confirm_password.errors }\" />\r\n                                            <div *ngIf=\"f.confirm_password.errors\" class=\"invalid-feedback\">\r\n                                              <div *ngIf=\"f.confirm_password.errors.required\">Confirm Password is required</div>\r\n                                              <div *ngIf=\"f.confirm_password.hasError('NoPassswordMatch')\">Password doesn't match</div>\r\n                                            </div>\r\n                                          </div>\r\n\r\n                                          <div class=\"form-group\">\r\n                                            <label>Profile Image</label>\r\n                                            <div class=\"custom-file\">\r\n                                              <input type=\"file\" class=\"custom-file-input\" formControlName=\"profile_image\" (change)=\"onFileSelect($event)\" [ngClass]=\"{ 'is-invalid': f.profile_image.touched && !isImageSelected }\">\r\n                                              <input type=\"hidden\" class=\"custom-file-input\" formControlName=\"avatar\" />\r\n                                              <label class=\"custom-file-label\" for=\"customFile\">Choose file</label>\r\n                                              <div *ngIf=\"f.profile_image.touched && !isImageSelected\" class=\"invalid-feedback\">Profile Image is required</div>\r\n                                            </div>\r\n                                          </div>\r\n\r\n                                            <div class=\"remember-forgot\">\r\n                                              <div class=\"row\">\r\n                                                  <div class=\"col text-left m-0\">\r\n                                                     \r\n                                                  </div>\r\n                                                  <div class=\"col text-right\">\r\n                                                    <a routerLink=\"/login\">Back to Login</a>\r\n                                                  </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"alert alert-primary\" role=\"alert\" *ngIf=\"isRegistered\">\r\n                                           Congratulations !!! Account created successfully.\r\n                                           <p>Please login to continue.</p>\r\n                                        </div>\r\n                                        <div class=\"twitter-button text-center my-4\">\r\n                                          <button class=\"btn btn-twitter\" [disabled]=\"signUpForm.invalid\">Register</button>\r\n                                        </div>\r\n                                    </form>\r\n                                   \r\n                                    <div class=\"social-icon mb-4 text-center\">\r\n                                      <ul>\r\n                                        <li><a href=\"#\"><i class=\"fab fa-instagram\"></i></a></li>\r\n                                        <li><a href=\"#\"><i class=\"fab fa-twitter\"></i></a></li>\r\n                                        <li><a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a></li>\r\n                                      </ul>\r\n                                    </div>\r\n                                    <div class=\"login-footer text-center\">\r\n                                      <ul class=\"mb-4\">\r\n                                        <li><a href=\"#\">About</a></li>\r\n                                        <li><a href=\"#\">FAQ’s</a></li>\r\n                                        <li><a href=\"#\">Contact</a></li>\r\n                                        <li><a href=\"#\">Terms</a></li>\r\n                                        <li><a href=\"#\">Privacy</a></li>\r\n                                      </ul>\r\n                                        <p>© 2019 Only VIPs. All rights reserved.</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> \r\n  \r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var src_app_helpers_custom_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/custom-validator */ "./src/app/helpers/custom-validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");









var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, operationsService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.operationsService = operationsService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.submitted = this.isRegistered = this.isImageSelected = false;
        this.signUpForm = this.formBuilder.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            user_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(src_app_constants_constants__WEBPACK_IMPORTED_MODULE_4__["EMAIL_PATTERN"])])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    src_app_helpers_custom_validator__WEBPACK_IMPORTED_MODULE_5__["CustomValidator"].patternValidator(/\d/, { hasNumber: true }),
                    src_app_helpers_custom_validator__WEBPACK_IMPORTED_MODULE_5__["CustomValidator"].patternValidator(/[A-Z]/, { hasCapitalCase: true }),
                    src_app_helpers_custom_validator__WEBPACK_IMPORTED_MODULE_5__["CustomValidator"].patternValidator(/[a-z]/, { hasLowerCase: true }),
                    // 6. Has a minimum length of 8 characters
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)
                ])],
            confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            profile_image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            avatar: [''],
            role: 'user'
        }, { validators: src_app_helpers_custom_validator__WEBPACK_IMPORTED_MODULE_5__["CustomValidator"].passwordValidator });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () { return this.signUpForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onFileSelect = function (event) {
        if (event.target.files.length > 0) {
            this.isImageSelected = true;
            var file = event.target.files[0];
            this.formData = new FormData();
            this.formData.append('avatar', file);
            this.formData.append('email', this.signUpForm.get('email').value);
        }
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.signUpForm.invalid) {
            return;
        }
        else if (!this.isImageSelected)
            return;
        var fileUpload = this.operationsService.postOperations('profile-image', this.formData);
        var register = fileUpload.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (response) {
            console.log('Response', response);
            if (response.success) {
                _this.signUpForm.get('avatar').setValue(response.filename);
                console.log('Updated Form', _this.signUpForm.value);
                return _this.operationsService.postOperations('register', _this.signUpForm.value);
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(null);
        }));
        register.subscribe(function (response) {
            _this.response = {};
            _this.response = response;
            console.log('response', _this.response);
            if (response.success)
                _this.router.navigateByUrl('/login');
            else {
                console.log(_this.response.message.indexOf('Email') > -1);
            }
        }, function (error) { return console.error("Registration response", error); });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services__WEBPACK_IMPORTED_MODULE_3__["OperationsService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/reset-password/reset-password.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/reset-password/reset-password.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/reset-password/reset-password.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/reset-password/reset-password.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n        <div class=\"card card-signin my-5\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title text-center\">Reset Password</h5>\r\n  \r\n            <form [formGroup]=\"resetPwdForm\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"form-group\">\r\n                  <label for=\"password\">Password</label>\r\n                  <input type=\"password\" formControlName=\"password\" placeholder=\"Enter password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                  <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                     <div *ngIf=\"f.password.errors.required\">Password is required</div> \r\n                  </div>                  \r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"confirm_password\">Confirm Password</label>\r\n                <input type=\"password\" formControlName=\"confirm_password\" placeholder=\"Confirm password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirm_password.errors }\" />\r\n                <div *ngIf=\"submitted && f.confirm_password.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.confirm_password.errors.required\">Password is required</div>\r\n                  <div *ngIf=\"f.confirm_password != f.password\">Password mismatched.</div>\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"form-group\">\r\n                <button class=\"btn btn-block btn-primary\" buttonLoader [loaderColor]=\"'white'\"><span></span>Reset Password</button>\r\n                <!-- <img *ngIf=\"loading\" class=\"pl-2\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" /> -->\r\n              </div>\r\n              <!-- <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div> -->\r\n  \r\n            </form>\r\n  \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/reset-password/reset-password.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/reset-password/reset-password.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var angular_button_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-button-loader */ "./node_modules/angular-button-loader/fesm5/angular-button-loader.js");





var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(formBuilder, operationsService, btnLoaderService) {
        this.formBuilder = formBuilder;
        this.operationsService = operationsService;
        this.btnLoaderService = btnLoaderService;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.submitted = true;
        this.resetPwdForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(ResetPasswordComponent.prototype, "f", {
        get: function () { return this.resetPwdForm.controls; },
        enumerable: true,
        configurable: true
    });
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.resetPwdForm.invalid)
            return;
        this.btnLoaderService.displayLoader();
        this.submitted = true;
        this.operationsService.postOperations('reset-password', this.resetPwdForm.value).subscribe(function (result) {
            _this.btnLoaderService.hideLoader();
            console.log('Reset Password Response', result);
        }, function (error) { return console.error('Forgot Password Error', error); });
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/components/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/components/reset-password/reset-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services__WEBPACK_IMPORTED_MODULE_3__["OperationsService"],
            angular_button_loader__WEBPACK_IMPORTED_MODULE_4__["AngularButtonLoaderService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  footer works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/shared/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/shared/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  header works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/shared/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/slide-show/slide-show.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/shared/slide-show/slide-show.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NsaWRlLXNob3cvc2xpZGUtc2hvdy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/shared/slide-show/slide-show.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/slide-show/slide-show.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"cb-slideshow\">\r\n    <li>\r\n      <span>Image 01</span>\r\n          <div>\r\n            <h3>Twitter Pro</h3>\r\n          </div>\r\n    </li>\r\n    <li>\r\n      <span>Image 02</span>\r\n          <div>\r\n            <h3>Twitter Pro</h3>\r\n          </div>\r\n    </li>\r\n    <li>\r\n      <span>Image 03</span>\r\n          <div>\r\n            <h3>Twitter Pro</h3>\r\n          </div>\r\n    </li>\r\n    <li>\r\n      <span>Image 04</span>\r\n          <div>\r\n            <h3>Twitter Pro</h3>\r\n          </div>\r\n    </li>\r\n    <li>\r\n      <span>Image 05</span>\r\n          <div>\r\n            <h3>Twitter Pro</h3>\r\n          </div>\r\n    </li>\r\n    <li>\r\n      <span>Image 06</span>\r\n          <div>\r\n            <h3>Twitter Pro</h3>\r\n          </div>\r\n    </li>\r\n  </ul>\r\n"

/***/ }),

/***/ "./src/app/components/shared/slide-show/slide-show.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/slide-show/slide-show.component.ts ***!
  \**********************************************************************/
/*! exports provided: SlideShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideShowComponent", function() { return SlideShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlideShowComponent = /** @class */ (function () {
    function SlideShowComponent() {
    }
    SlideShowComponent.prototype.ngOnInit = function () {
    };
    SlideShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slide-show',
            template: __webpack_require__(/*! ./slide-show.component.html */ "./src/app/components/shared/slide-show/slide-show.component.html"),
            styles: [__webpack_require__(/*! ./slide-show.component.css */ "./src/app/components/shared/slide-show/slide-show.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SlideShowComponent);
    return SlideShowComponent;
}());



/***/ }),

/***/ "./src/app/constants/constants.ts":
/*!****************************************!*\
  !*** ./src/app/constants/constants.ts ***!
  \****************************************/
/*! exports provided: APP_NAME, SERVER_URL, JWTOKEN, USER_INFO, EMAIL_PATTERN, PASSWORD_PATTERN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_NAME", function() { return APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_URL", function() { return SERVER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWTOKEN", function() { return JWTOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INFO", function() { return USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_PATTERN", function() { return EMAIL_PATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_PATTERN", function() { return PASSWORD_PATTERN; });
var APP_NAME = 'Twitter Pro';
var SERVER_URL = 'http://localhost:3000/'; //
//export const SERVER_URL = 'http://getwebsite.com.pk/dev/server/';
var JWTOKEN = 'twitter_pro_token';
var USER_INFO = 'twitter_pro_user';
var EMAIL_PATTERN = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
var PASSWORD_PATTERN = '(?=.*[a-z])(?=.*[A-Z])';


/***/ }),

/***/ "./src/app/helpers/custom-validator.ts":
/*!*********************************************!*\
  !*** ./src/app/helpers/custom-validator.ts ***!
  \*********************************************/
/*! exports provided: CustomValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidator", function() { return CustomValidator; });
var CustomValidator = /** @class */ (function () {
    function CustomValidator() {
    }
    CustomValidator.patternValidator = function (regExp, error) {
        return function (control) {
            if (!control.value)
                return null;
            var valid = regExp.test(control.value);
            return valid ? null : error;
        };
    };
    CustomValidator.passwordValidator = function (control) {
        var password = control.get('password').value; // get password from our password form control
        var confirmPassword = control.get('confirm_password').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('confirm_password').setErrors({ NoPassswordMatch: true });
        }
    };
    return CustomValidator;
}());



/***/ }),

/***/ "./src/app/services/auth-guard/auth-guard.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/auth-guard/auth-guard.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-service/auth-service.service */ "./src/app/services/auth-service/auth-service.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.userVal) {
            console.log(this.authService.userVal);
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth-service/auth-service.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/auth-service/auth-service.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(this.user));
    }
    AuthService.prototype.login = function (payload) {
        var _this = this;
        var url = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"] + 'login';
        return this.http.post("" + url, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
            if (response && response.success) {
                _this.Token = response.token;
                var user = _this.decodeJWT();
                _this.user = user;
                _this.userSubject.next(user);
                return user;
            }
            else
                return response || '';
        }));
    };
    Object.defineProperty(AuthService.prototype, "userVal", {
        get: function () { return this.userSubject.value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "Token", {
        get: function () { return localStorage.getItem(src_app_constants_constants__WEBPACK_IMPORTED_MODULE_5__["JWTOKEN"]); },
        set: function (token) { localStorage.setItem(src_app_constants_constants__WEBPACK_IMPORTED_MODULE_5__["JWTOKEN"], token); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () { return localStorage.getItem(src_app_constants_constants__WEBPACK_IMPORTED_MODULE_5__["USER_INFO"]); },
        set: function (user) { localStorage.setItem(src_app_constants_constants__WEBPACK_IMPORTED_MODULE_5__["USER_INFO"], JSON.stringify(user)); },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.isAuthenticated = function () { return localStorage.getItem(src_app_constants_constants__WEBPACK_IMPORTED_MODULE_5__["JWTOKEN"]) ? true : false; };
    AuthService.prototype.decodeJWT = function () {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_4__(localStorage.getItem(src_app_constants_constants__WEBPACK_IMPORTED_MODULE_5__["JWTOKEN"]));
        }
        catch (error) {
            return null;
        }
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem(src_app_constants_constants__WEBPACK_IMPORTED_MODULE_5__["JWTOKEN"]);
        this.userSubject.next(null);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: OperationsService, AuthGuardService, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _operations_operations_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations/operations.service */ "./src/app/services/operations/operations.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OperationsService", function() { return _operations_operations_service__WEBPACK_IMPORTED_MODULE_0__["OperationsService"]; });

/* harmony import */ var _auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard/auth-guard.service */ "./src/app/services/auth-guard/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]; });

/* harmony import */ var _auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-service/auth-service.service */ "./src/app/services/auth-service/auth-service.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]; });






/***/ }),

/***/ "./src/app/services/operations/operations.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/operations/operations.service.ts ***!
  \***********************************************************/
/*! exports provided: OperationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsService", function() { return OperationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants/constants */ "./src/app/constants/constants.ts");




var OperationsService = /** @class */ (function () {
    function OperationsService(http) {
        this.http = http;
    }
    OperationsService.prototype.getOperations = function (end_point) {
        return this.http.get("" + (src_app_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SERVER_URL"] + end_point));
    };
    OperationsService.prototype.postOperations = function (end_point, data) {
        return this.http.post("" + (src_app_constants_constants__WEBPACK_IMPORTED_MODULE_3__["SERVER_URL"] + end_point), data);
    };
    OperationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OperationsService);
    return OperationsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Repositories\Twitter-PRO\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map