(self["webpackChunkuser_management"] = self["webpackChunkuser_management"] || []).push([["apps_user_management_src_bootstrap_ts"],{

/***/ 412:
/*!****************************************************!*\
  !*** ./apps/user_management/src/app/app.config.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1703);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ 9172);



const appConfig = {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.provideZoneChangeDetection)({
    eventCoalescing: true
  }), (0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_2__.appRoutes)]
};

/***/ }),

/***/ 9172:
/*!****************************************************!*\
  !*** ./apps/user_management/src/app/app.routes.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
const appRoutes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./remote-entry/entry.routes */ 8293)).then(m => m.remoteRoutes)
}];

/***/ }),

/***/ 2955:
/*!***********************************************!*\
  !*** ./apps/user_management/src/bootstrap.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 3424);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config */ 412);
/* harmony import */ var _app_remote_entry_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/remote-entry/entry.component */ 1452);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.bootstrapApplication)(_app_remote_entry_entry_component__WEBPACK_IMPORTED_MODULE_2__.RemoteEntryComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig).catch(err => console.error(err));

/***/ })

}])
//# sourceMappingURL=apps_user_management_src_bootstrap_ts.js.map