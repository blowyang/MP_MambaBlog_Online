global.webpackJsonp([5],{

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(55);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_41542131_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(94);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(56)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_41542131_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\blog\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41542131", Component.options)
  } else {
    hotAPI.reload("data-v-41542131", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 56:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_timeago_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_timeago_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_timeago_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_article__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_share__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_category__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_bmob_Bmob_1_4_4_min__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_bmob_Bmob_1_4_4_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_bmob_Bmob_1_4_4_min__);
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
    /* 转发分享 */
    onShareAppMessage: function onShareAppMessage() {
        return Object(__WEBPACK_IMPORTED_MODULE_2__utils_share__["a" /* share */])();
    },
    data: function data() {
        return {
            loading: false,
            pagination: 0, //页码
            pageSize: 5, //每页数据
            articles: [],
            categories: [],
            selectType: 0,
            nodata: true //无数据
        };
    },
    mounted: function mounted() {
        this._getArticle(this.pageSize, this.pagination, this.selectType);
        this._getCategories();
    },

    /* 触发底部，加载数据 */
    onReachBottom: function onReachBottom() {
        this._getArticle(this.pageSize, this.pagination, this.selectType);
    },

    methods: {
        /* 请求博文数据 */
        _getArticle: function _getArticle(pageSize, pagination, selectType) {
            var _this = this;

            if (this.nodata) {
                this.loading = false;
                Object(__WEBPACK_IMPORTED_MODULE_1__utils_article__["b" /* getArticle */])(pageSize, pagination, selectType).then(function (res) {
                    _this.loading = false;
                    var data = [];
                    /* 遍历数据 */
                    res.forEach(function (resEach) {
                        resEach.createdAt = __WEBPACK_IMPORTED_MODULE_0_timeago_js___default()().format(resEach.createdAt, 'zh_CN'); //格式化时间
                        data.push({
                            author: resEach.author,
                            createdAt: resEach.createdAt,
                            excerpt: resEach.excerpt,
                            objectId: resEach.objectId,
                            read_counts: resEach.read_counts,
                            title: resEach.title
                        });
                    });
                    if (data.length) {

                        var articles = _this.articles; //得到页面上已经渲染的数据
                        var _pagination = _this.pagination;
                        articles.push.apply(articles, data); //将页面上的数据和最新获取到的数据合并
                        _pagination = _pagination ? _pagination + 1 : 1;

                        _this.articles = articles;
                        _this.pagination = _pagination;
                        _this.loading = true;
                    } else {

                        _this.nodata = false;
                        _this.loading = true;
                    }
                });
            } else {
                this.loading = true;
            }
        },

        /* 请求分类数据 */
        _getCategories: function _getCategories() {
            var _this2 = this;

            Object(__WEBPACK_IMPORTED_MODULE_3__utils_category__["a" /* getCategory */])().then(function (res) {
                /* 添加全部标签 */
                res.unshift({
                    objectId: 0,
                    name: "全部"
                });
                _this2.categories = res;
            });
        },

        /* 按照分类请求博文数据 */
        selectCategory: function selectCategory(category) {
            var _this3 = this;

            Object(__WEBPACK_IMPORTED_MODULE_1__utils_article__["c" /* getArticleByCategory */])(category).then(function (res) {
                res.forEach(function (resEach) {
                    resEach.createdAt = __WEBPACK_IMPORTED_MODULE_0_timeago_js___default()().format(resEach.createdAt, 'zh_CN'); //格式化时间
                });
                _this3.nodata = false;
                _this3.articles = res;
                _this3.selectType = category;
            });
        }
    }

});

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCategory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_bmob_Bmob_1_4_4_min__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_bmob_Bmob_1_4_4_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_bmob_Bmob_1_4_4_min__);

/**
 * 文章分类查询
 * 编写：MambaBlog(http://blog.kesixin.xin)
 * 时间：‎2018‎-6‎-‎21
 */



/**
 * 查询文章分类列表
 * @returns {Promise.<T>}
 */
function getCategory() {
    var query = __WEBPACK_IMPORTED_MODULE_1__static_bmob_Bmob_1_4_4_min___default.a.Query("categories");
    query.order("createdAt");
    return query.find().then(function (res) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(res);
    }).catch(function (err) {
        console.log(err);
    });
}

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "blog"
  }, [_c('loading', {
    attrs: {
      "hidden": _vm.loading,
      "mpcomid": '0'
    }
  }, [_vm._v("\n        数据加载中...\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "pages"
  }, [_c('div', {
    staticStyle: {
      "min-height": "100%"
    }
  }, [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "mac"
  }, [_vm._m(0), _vm._v(" "), _c('p', [_vm._v("千里之行,始于足下  不忘初心,方能始终")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "articleListPage-tags-cnt"
  }, [_c('div', [_c('div', {
    staticClass: "articleListPage-tags"
  }, [_c('div', {
    staticClass: "grid-row"
  }, [_c('div', {
    staticClass: "content"
  }, _vm._l((_vm.categories), function(item, index) {
    return _c('div', {
      key: index,
      class: {
        'active': _vm.selectType === item.objectId
      },
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.selectCategory(item.objectId)
        }
      }
    }, [_vm._v(_vm._s(item.name) + "\n                                ")])
  }))])])])]), _vm._v(" "), _c('div', {
    staticClass: "article"
  }, [_c('div', {
    staticClass: "article-item"
  }, _vm._l((_vm.articles), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "article-list"
    }, [_c('a', {
      staticStyle: {
        "color": "#000000"
      },
      attrs: {
        "href": '../detail/main?id=' + item.objectId
      }
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (index == 0 || index == 1),
        expression: "index == 0 || index == 1"
      }],
      staticClass: "label"
    }, [_c('span', [_vm._v("new")])]), _vm._v(" "), _c('h1', {
      staticClass: "title"
    }, [_c('a', [_vm._v(_vm._s(item.title))])]), _vm._v(" "), _c('div', {
      staticClass: "introduction"
    }, [_c('i', {
      staticClass: "icon-user"
    }, [_c('span', {
      staticClass: "user"
    }, [_vm._v(_vm._s(item.author))])]), _vm._v(" "), _c('i', {
      staticClass: "icon-clock"
    }, [_c('span', {
      staticClass: "time"
    }, [_vm._v(_vm._s(item.createdAt))])]), _vm._v(" "), _c('i', {
      staticClass: "icon-eye"
    }, [_c('span', {
      staticClass: "view"
    }, [_vm._v(_vm._s(item.read_counts))])])], 1), _vm._v(" "), _c('div', {
      staticClass: "article-content"
    }, [_vm._v("\n                                " + _vm._s(item.excerpt) + "\n                            ")]), _vm._v(" "), _vm._m(1, true)], 1)])
  })), _vm._v(" "), (!_vm.nodata) ? _c('div', {
    staticClass: "weui-loadmore weui-loadmore_line"
  }, [_c('view', {
    staticClass: "weui-loadmore__tips weui-loadmore__tips_in-line"
  }, [_vm._v("已加载完")])]) : _vm._e()])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "logo"
  }, [_c('img', {
    attrs: {
      "src": "https://www.overxue.com/images/php.jpg"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "readmore"
  }, [_c('div', {
    staticClass: "right"
  }, [_c('a', {
    staticClass: "readmore",
    staticStyle: {
      "display": "inline"
    }
  }, [_vm._v("阅读全文")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-41542131", esExports)
  }
}

/***/ })

},[54]);
//# sourceMappingURL=main.js.map