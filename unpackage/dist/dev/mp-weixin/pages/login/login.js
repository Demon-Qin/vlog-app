(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/login/login"],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/*!****************************************************************!*\
  !*** D:/app/vlog-app/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/login/login.vue */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 17 */
/*!*********************************************!*\
  !*** D:/app/vlog-app/pages/login/login.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=b237504c& */ 18);
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ 20);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../$RECYCLE.BIN/S-1-5-21-2675910492-358033957-3070757188-1001/$RAELK5M.20200226/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs




/* normalize component */

var component = Object(_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 18 */
/*!****************************************************************************!*\
  !*** D:/app/vlog-app/pages/login/login.vue?vue&type=template&id=b237504c& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../$RECYCLE.BIN/S-1-5-21-2675910492-358033957-3070757188-1001/$RAELK5M.20200226/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../$RECYCLE.BIN/S-1-5-21-2675910492-358033957-3070757188-1001/$RAELK5M.20200226/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../$RECYCLE.BIN/S-1-5-21-2675910492-358033957-3070757188-1001/$RAELK5M.20200226/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../$RECYCLE.BIN/S-1-5-21-2675910492-358033957-3070757188-1001/$RAELK5M.20200226/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../$RECYCLE.BIN/S-1-5-21-2675910492-358033957-3070757188-1001/$RAELK5M.20200226/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../$RECYCLE.BIN/S-1-5-21-2675910492-358033957-3070757188-1001/$RAELK5M.20200226/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=b237504c& */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/app/vlog-app/pages/login/login.vue?vue&type=template&id=b237504c& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!**********************************************************************!*\
  !*** D:/app/vlog-app/pages/login/login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../$RECYCLE.BIN/S-1-5-21-2675910492-358033957-3070757188-1001/$RAELK5M.20200226/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../$RECYCLE.BIN/S-1-5-21-2675910492-358033957-3070757188-1001/$RAELK5M.20200226/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../$RECYCLE.BIN/S-1-5-21-2675910492-358033957-3070757188-1001/$RAELK5M.20200226/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../$RECYCLE.BIN/S-1-5-21-2675910492-358033957-3070757188-1001/$RAELK5M.20200226/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../$RECYCLE.BIN/S-1-5-21-2675910492-358033957-3070757188-1001/$RAELK5M.20200226/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */ 21);
/* harmony import */ var _$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_$RECYCLE_BIN_S_1_5_21_2675910492_358033957_3070757188_1001_$RAELK5M_20200226_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 21 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/app/vlog-app/pages/login/login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var uniStatusBar = function uniStatusBar() {__webpack_require__.e(/*! require.ensure | components/uni-ui/uni-status-bar/uni-status-bar */ "components/uni-ui/uni-status-bar/uni-status-bar").then((function () {return resolve(__webpack_require__(/*! @/components/uni-ui/uni-status-bar/uni-status-bar.vue */ 88));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =




























































































{
  components: {
    uniStatusBar: uniStatusBar },

  data: function data() {
    return {
      status: false,
      password: '',
      phone: '',
      code: '',
      codeTime: 0,
      loading: false };

  },
  onLoad: function onLoad() {},
  computed: {
    disabled: function disabled() {
      if ((this.phone === '' || this.password === '') && (this.phone === '' || this.code === ''))
      {
        return true;
      }
      return false;
    } },

  methods: {
    appLogin: function appLogin() {
      var self = this;
      uni.login({
        provider: 'weixin',
        success: function success(loginRes) {
          uni.getUserInfo({
            provider: 'weixin',
            success: function success(infoRes) {
              console.log("获取微信账号信息");
              console.log(infoRes);
              console.log("获取微信账号信息");
              var wxLoginDto = {
                wxOpenId: infoRes.userInfo.openId,
                nickname: infoRes.userInfo.nickName,
                avatar: infoRes.userInfo.avatarUrl,
                gender: infoRes.userInfo.gender };

              self.loading = true;
              self.$H.
              post('/user/wxLogin', wxLoginDto).
              then(function (res) {
                self.loading = false;
                console.log(res);
                if (res) {
                  console.log(res);
                  //修改vuex的state
                  self.$store.commit('login', res);
                  uni.switchTab({
                    url: '../my/my' });

                } else {
                  uni.showModal({
                    title: '登录失败' });

                  return;
                }
              }).
              catch(function (err) {
                //登录失败
                self.loading = false;
              });
            } });

        } });

    },
    back: function back() {
      uni.navigateBack({
        delta: 1 });

    },
    //初始化表单
    initFrom: function initFrom() {
      this.phone = '';
      this.password = '';
      this.code = '';
    },
    //切换登陆方式
    changeStatus: function changeStatus() {
      this.initFrom();
      this.status = !this.status;
    },
    //获取验证码
    getCode: function getCode() {var _this = this;
      //防止重复获取
      if (this.codeTime > 0) {
        return;
      }
      //验证手机号
      if (!this.validate()) return;
      //请求数据
      this.$H.
      post(
      '/user/sendcode?phone=' + this.phone, {
        native: true }).


      then(function (res) {
        // uni.showToast({
        //   title: res.data.msg,
        //   icon: 'none'
        // });
        //倒计时
        _this.codeTime = 60;
        var timer = setInterval(function () {
          if (_this.codeTime >= 1) {
            _this.codeTime--;
          } else {
            _this.codeTime = 0;
            clearInterval(timer);
          }
        }, 1000);
      });
    },
    //表单验证
    validate: function validate() {
      //手机号正则
      var mPattern = /^1[34578]\d{9}$/;
      if (!mPattern.test(this.phone)) {
        uni.showToast({
          title: '手机号格式不对',
          icon: 'none' });

        return false;
      }
      //...更多验证
      return true;
    },
    //提交
    submit: function submit() {var _this2 = this;
      //表单验证
      var url = '';
      var data = '';
      if (this.status) {
        //手机验证码登录
        if (!this.validate()) return;
        url = '/user/phonelogin';
        data = {
          phone: this.phone,
          code: this.code };

      } else {
        //账号密码登录
        url = '/user/login';
        data = {
          phone: this.phone,
          password: this.password };

      }
      //提交后端
      this.loading = true;
      this.$H.
      post(url, data).
      then(function (res) {
        _this2.loading = false;
        if (res) {
          console.log(res);
          //修改vuex的state，持久化储存
          _this2.$store.commit('login', res);
          //提示和跳转
          uni.showModal({
            title: '登录成功',
            content: '去看看',
            success: function success(res) {
              console.log("XXXXXX");
              if (res.confirm) {
                uni.switchTab({
                  url: '../my/my' });

              } else if (res.cancel) {
                console.log('用户点击取消');
                return;
              }
            } });

        } else {
          uni.showModal({
            title: '登录失败' });

          return;
        }
      }).
      catch(function (err) {
        //登陆失败
        _this2.loading = false;
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })
],[[16,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map