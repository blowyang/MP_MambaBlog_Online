global.webpackJsonp([8],{

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(185);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1254b407_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(188);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(186)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1254b407_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/feedback/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1254b407", Component.options)
  } else {
    hotAPI.reload("data-v-1254b407", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 186:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_common_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_common_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_common_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_bmob_Bmob_1_4_4_min__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_bmob_Bmob_1_4_4_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_bmob_Bmob_1_4_4_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_share__ = __webpack_require__(9);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    onShareAppMessage: function onShareAppMessage() {
        return Object(__WEBPACK_IMPORTED_MODULE_2__utils_share__["a" /* share */])();
    },

    methods: {
        addFeedback: function addFeedback(event) {
            var contact = event.target.value.contact;
            var content = event.target.value.content;

            if (!contact) {
                __WEBPACK_IMPORTED_MODULE_0__static_common_common___default.a.showTip("联系方式不为空", "loading");
                return false;
            }
            if (!content) {
                __WEBPACK_IMPORTED_MODULE_0__static_common_common___default.a.showTip("内容不能为空", "loading");
                return false;
            }
            if (!/^1[34578]\d{9}$/.test(contact)) {
                __WEBPACK_IMPORTED_MODULE_0__static_common_common___default.a.showTip("手机号码有误", "loading");
                return false;
            }

            var objectId = wx.getStorageSync('userData').objectId;
            var pointer = __WEBPACK_IMPORTED_MODULE_1__static_bmob_Bmob_1_4_4_min___default.a.Pointer("_User");
            var query = __WEBPACK_IMPORTED_MODULE_1__static_bmob_Bmob_1_4_4_min___default.a.Query("feedback");
            var poiID = pointer.set(objectId);
            query.set("user", poiID);
            query.set("contact", contact);
            query.set("content", content);
            query.save().then(function (res) {
                __WEBPACK_IMPORTED_MODULE_0__static_common_common___default.a.showModal('保存反馈成功，点击确定返回。', '提示', '', function () {
                    wx.navigateBack();
                });
            }).then(function (err) {
                console.log(err);
            });
        }
    }
});

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "zan-panel"
  }, [_c('form', {
    attrs: {
      "report-submit": "true",
      "eventid": '0'
    },
    on: {
      "submit": _vm.addFeedback
    }
  }, [_c('div', {
    staticClass: "zan-cell zan-form__item"
  }, [_c('text', {
    staticClass: "zan-form__title"
  }, [_vm._v("联系方式：")]), _vm._v(" "), _c('input', {
    staticClass: "zan-form__input zan-cell__bd",
    attrs: {
      "type": "number",
      "name": "contact",
      "maxlength": "11",
      "placeholder": "请输入联系方式"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "zan-cell zan-form-item",
    staticStyle: {
      "align-items": "flex-start"
    }
  }, [_c('text', {
    staticClass: "zan-form__titme"
  }, [_vm._v("建议内容：")]), _vm._v(" "), _c('textarea', {
    staticClass: "zan-form__input zan-cell__bd",
    attrs: {
      "type": "textarea",
      "name": "content",
      "maxlength": "200",
      "placeholder": "请输入建议"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "zan-btns"
  }, [_c('button', {
    staticClass: "zan-btn zan-btn--primary",
    attrs: {
      "formType": "submit"
    }
  }, [_vm._v("立即提交")])], 1)])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1254b407", esExports)
  }
}

/***/ })

},[184]);
//# sourceMappingURL=main.js.map