global.webpackJsonp([9],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(101);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6767073e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(104);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6767073e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/collect/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6767073e", Component.options)
  } else {
    hotAPI.reload("data-v-6767073e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_timeago_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_timeago_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_timeago_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_collect__ = __webpack_require__(33);
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
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    onLoad: function onLoad() {
        this.collectsCount = false;
    },
    onShareAppMessage: function onShareAppMessage() {
        return Object(__WEBPACK_IMPORTED_MODULE_2__utils_share__["a" /* share */])();
    },
    data: function data() {
        return {
            collectList: [],
            loading: false,
            collectsCount: false
        };
    },
    mounted: function mounted() {
        this._getCollectList();
    },

    methods: {
        //获取收藏列表
        _getCollectList: function _getCollectList() {
            var _this = this;

            Object(__WEBPACK_IMPORTED_MODULE_1__utils_collect__["b" /* getCollectList */])().then(function (res) {
                //遍历格式化时间
                res.forEach(function (resEach) {
                    resEach.createdAt = __WEBPACK_IMPORTED_MODULE_0_timeago_js___default()().format(resEach.createdAt, 'zh_CN');
                });
                _this.collectList = res;
                _this.loading = true;
                if (_this.collectList.length) {
                    _this.collectsCount = true;
                }
            });
        },
        read: function read(articleId) {
            var url = "../detail/main?id=" + articleId;
            wx.redirectTo({ url: url });
        }
    }
});

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('loading', {
    attrs: {
      "hidden": _vm.loading,
      "mpcomid": '0'
    }
  }, [_vm._v("\n        数据加载中...\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "page-body"
  }, [_c('div', {
    staticClass: "page__bd"
  }, [_vm._l((_vm.collectList), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('a', {
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.read(item.article.objectId)
        }
      }
    }, [_c('div', {
      staticClass: "zan-panel"
    }, [_c('div', {
      staticClass: "collect"
    }, [_c('image', {
      staticClass: "collect-img",
      attrs: {
        "src": "/static/assets/article.png"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "zan-panel-media"
    }, [_c('div', {
      staticClass: "zan-c-gray-dark zan-font-12"
    }, [_c('div', {
      staticClass: "zan-panel-box"
    }, [_vm._v("文章收藏")]), _vm._v(" "), _c('div', {
      staticClass: "zan-panel-box"
    }, [_vm._v(_vm._s(item.createdAt))]), _vm._v(" "), _c('div', {
      staticClass: "zan-font-14",
      staticStyle: {
        "padding": "10px 0"
      }
    }, [_vm._v(_vm._s(item.article.title))]), _vm._v(" "), _c('div', {
      staticClass: "zan-c-gray zan-font-12"
    }, [_vm._v("点击查看")])])])])])])
  }), _vm._v(" "), (!_vm.collectsCount) ? _c('div', {
    staticClass: "weui-loadmore weui-loadmore_line"
  }, [_c('view', {
    staticClass: "weui-loadmore__tips weui-loadmore__tips_in-line"
  }, [_vm._v("暂无收藏")])]) : _vm._e()], 2)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6767073e", esExports)
  }
}

/***/ })

},[100]);
//# sourceMappingURL=main.js.map