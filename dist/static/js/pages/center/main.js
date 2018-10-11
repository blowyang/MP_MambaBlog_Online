global.webpackJsonp([10],{

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(96);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_69b74d24_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(99);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_69b74d24_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\center\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69b74d24", Component.options)
  } else {
    hotAPI.reload("data-v-69b74d24", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_bmob_Bmob_1_4_4_min__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_bmob_Bmob_1_4_4_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_bmob_Bmob_1_4_4_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_common_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_common_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_common_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_share__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_new__ = __webpack_require__(23);
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
    onLoad: function onLoad() {
        console.log("5555");
    },

    //分享小程序
    onShareAppMessage: function onShareAppMessage() {
        return Object(__WEBPACK_IMPORTED_MODULE_2__utils_share__["a" /* share */])();
    },
    data: function data() {
        return {
            authorize: true,
            loading: false,
            userData: wx.getStorageSync('userData'),
            sign: false,
            signShow: true,
            signTime: [],
            signNum: "",
            noReadNewsCount: 0
        };
    },
    mounted: function mounted() {
        console.log(this.userData.objectId);
        this._getUserData();
        if (this.userData.objectId) {
            this._getNewsCount();
        }
    },

    methods: {
        //授权获取用户信息
        bindGetUserInfo: function bindGetUserInfo(e) {
            var that = this;

            wx.login({
                success: function success() {

                    var current = __WEBPACK_IMPORTED_MODULE_0__static_bmob_Bmob_1_4_4_min___default.a.User.current();
                    console.log(current);
                    //                        if (current.nickName != undefined) {
                    //
                    //                        } else {
                    wx.getUserInfo({
                        success: function success(result) {
                            that.authorize = false;
                            console.log(result);
                            var objectId = current.objectId;
                            var userInfo = result.userInfo;
                            var nickName = userInfo.nickName;
                            var avatarUrl = userInfo.avatarUrl;

                            var query = __WEBPACK_IMPORTED_MODULE_0__static_bmob_Bmob_1_4_4_min___default.a.Query("_User");
                            //保存用户信息
                            query.get(objectId).then(function (res) {
                                res.set('nickName', nickName);
                                res.set('userPic', avatarUrl);
                                res.save();
                                that.authorize = true;
                                var userData = { 'nickName': nickName, 'userPic': avatarUrl, 'objectId': objectId, 'authData': current.authData };
                                that.userData = userData;
                                wx.setStorageSync('userData', userData);
                            }).catch(function (err) {
                                console.log(err);
                            });
                        }
                    });
                    //                        }
                }
            });
        },

        //获取用户信息
        _getUserData: function _getUserData() {
            var that = this;
            that.loading = false;
            var userData = wx.getStorageSync('userData');
            if (userData == "") {
                __WEBPACK_IMPORTED_MODULE_0__static_bmob_Bmob_1_4_4_min___default.a.User.auth().then(function (res) {
                    console.log(res);
                    wx.setStorageSync('userData', res);
                    that.userData = res;
                }).catch(function (err) {});
            } else {
                that.userData = userData;
            }

            if (this.userData.objectId) {}

            var query = __WEBPACK_IMPORTED_MODULE_0__static_bmob_Bmob_1_4_4_min___default.a.Query("sign");
            query.equalTo("user", "==", this.userData.objectId);
            query.order("-createdAt");
            query.find().then(function (res) {
                if (res[0] != "" && res[0] != undefined) {
                    var day = new Date(res[0].createdAt).toDateString();
                    that.signNum = res.length;
                    if (day == new Date().toDateString()) {

                        that.sign = true;
                        that.signTime = res[0];
                    }
                    that.loading = true;
                } else {
                    that.loading = true;
                }
            });
        },

        //用户签到
        _sign: function _sign() {
            var that = this;
            that.signShow = false;
            var pointer = __WEBPACK_IMPORTED_MODULE_0__static_bmob_Bmob_1_4_4_min___default.a.Pointer("_User");
            var poiID = pointer.set(this.userData.objectId);
            var query = __WEBPACK_IMPORTED_MODULE_0__static_bmob_Bmob_1_4_4_min___default.a.Query("sign");
            query.set("user", poiID);
            query.save().then(function (res) {

                setTimeout(function () {
                    that.sign = true;
                    that.signShow = true;
                    that.signTime = res;
                }, 1500);
            }).catch(function (err) {
                console.log(err);
            });
        },
        _share: function _share() {
            this.onShareAppMessage();
        },
        feedback: function feedback() {
            wx.navigateTo({
                url: '../feedback/main'
            });
        },
        about: function about() {
            __WEBPACK_IMPORTED_MODULE_1__static_common_common___default.a.showModal('本程序后端使用Bmob实现，仅供学习使用，请勿使用于商业用途，如有问题，请联系QQ：462369233', '关于', false);
        },
        _getNewsCount: function _getNewsCount() {
            var _this = this;

            Object(__WEBPACK_IMPORTED_MODULE_3__utils_new__["b" /* getNewsCount */])().then(function (res) {
                console.log(res);
                _this.noReadNewsCount = res;
            });
        }
    }
});

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "blog"
  }, [_c('div', {
    staticClass: "pages"
  }, [_c('div', {
    staticClass: "page__hd i-header"
  }, [_c('div', {
    staticClass: "g-bda-userinfo"
  }, [_c('div', {
    staticClass: "g-bda-userinfo-30"
  }, [_c('image', {
    staticClass: "userinfo-avatar",
    attrs: {
      "src": _vm.userData.userPic
    }
  })]), _vm._v(" "), (_vm.userData.nickName) ? _c('div', {
    staticClass: "g-bda-userinfo-70"
  }, [_c('span', {
    staticClass: "userinfo-nickname"
  }, [_vm._v(_vm._s(_vm.userData.nickName))]), _c('br'), _vm._v(" "), (_vm.signNum) ? _c('span', {
    staticClass: "userinfo-sign"
  }, [_vm._v("已签到" + _vm._s(_vm.signNum) + "天")]) : _c('span')], 1) : _c('div', {
    staticClass: "g-bda-userinfo-70"
  }, [_c('text', {
    staticClass: "userinfo-nickname"
  }, [_vm._v("尚未解锁")]), _vm._v(" "), _c('text', {
    staticClass: "userinfo-sign"
  }, [_vm._v("请点击下方的按钮解锁")])])])]), _vm._v(" "), _c('div', {
    staticClass: "zan-panel",
    staticStyle: {
      "border-top": "0px",
      "border-bottom": "0px"
    }
  }), _vm._v(" "), _c('loading', {
    attrs: {
      "hidden": _vm.authorize,
      "mpcomid": '0'
    }
  }, [_vm._v("\n            授权中...\n        ")]), _vm._v(" "), _c('loading', {
    attrs: {
      "hidden": _vm.signShow,
      "mpcomid": '1'
    }
  }, [_vm._v("\n            签到中...\n        ")]), _vm._v(" "), _c('loading', {
    attrs: {
      "hidden": _vm.loading,
      "mpcomid": '2'
    }
  }, [_vm._v("\n            获取数据中...\n        ")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "10px",
      "background": "#eee"
    }
  }), _vm._v(" "), (_vm.userData.nickName) ? _c('div', {
    staticClass: "zan-panel"
  }, [_c('a', {
    staticClass: "zan-cell zan-cell--access",
    attrs: {
      "href": "../new/main"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "zan-cell__bd"
  }, [_vm._v("\n                    我的消息\n                ")]), _vm._v(" "), (_vm.noReadNewsCount) ? _c('div', {
    staticClass: "badge-wonderfully",
    staticStyle: {
      "margin-left": "5px"
    }
  }) : _vm._e()]), _vm._v(" "), _vm._m(1)]) : _vm._e(), _vm._v(" "), (_vm.userData.nickName) ? _c('div', {
    staticClass: "contain"
  }, [_c('div', {
    staticClass: "zan-panel",
    staticStyle: {
      "border-top": "0px",
      "border-bottom": "0px",
      "width": "100%"
    }
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "item-wrapper"
  }, [(_vm.sign) ? _c('div', {
    staticClass: "unlock_v"
  }, [_c('div', {
    staticClass: "unlock-btn-cicle"
  }, [_c('i', {
    staticClass: "weui-icon-success weui-icon_msg"
  })], 1), _vm._v(" "), _c('text', {
    staticClass: "open-word"
  }, [_vm._v("今日签到时间：" + _vm._s(_vm.signTime.createdAt))])]) : _c('div', {
    staticClass: "unlock_v"
  }, [_c('div', {
    staticClass: "unlock-btn-cicle"
  }, [_c('button', {
    staticClass: "circle-btn-sign",
    attrs: {
      "type": "default",
      "eventid": '0'
    },
    on: {
      "click": _vm._sign
    }
  }, [_vm._v("签到")])], 1), _vm._v(" "), _c('div', {
    staticClass: "open-word"
  }, [_vm._v("点击按钮签到")])])])])]) : _c('div', {
    staticClass: "contain"
  }, [_c('div', {
    staticClass: "zan-panel zan-panel-lock"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "item-wrapper"
  }, [_c('div', {
    staticClass: "unlock_v"
  }, [_c('div', {
    staticClass: "unlock-btn-cicle"
  }, [_c('button', {
    staticClass: "circle-btn",
    attrs: {
      "open-type": "getUserInfo",
      "type": "primary",
      "eventid": '1'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo
    }
  }, [_vm._v("\n                                解锁\n                            ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "open-word"
  }, [_vm._v("点击解锁按钮解锁更多功能")])])])]), _vm._v(" "), _c('div', {
    staticClass: "zan-panel zan-panel-bottom"
  })]), _vm._v(" "), _c('div', {
    staticClass: "contain"
  }, [_c('div', {
    staticClass: "zan-panel zan-panel-lock"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "zan-cell zan-cell--access zan-other"
  }, [_c('button', {
    staticStyle: {
      "border": "0",
      "margin": "0",
      "padding": "0",
      "font-size": "18px",
      "color": "#000000",
      "line-height": "1",
      "width": "100%",
      "text-align": "left"
    },
    attrs: {
      "plain": "true",
      "open-type": "share"
    }
  }, [_vm._v("分享给好友\n                    ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "zan-cell-bottom"
  }), _vm._v(" "), _c('div', {
    staticClass: "zan-cell zan-cell--access zan-other",
    staticStyle: {
      "padding-top": "10px"
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.feedback
    }
  }, [_c('span', [_vm._v("反馈意见")])]), _vm._v(" "), _c('div', {
    staticClass: "zan-cell-bottom"
  }), _vm._v(" "), _c('div', {
    staticClass: "zan-cell zan-cell--access zan-other",
    staticStyle: {
      "padding-top": "10px"
    },
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.about
    }
  }, [_c('span', [_vm._v("关于本程序")])]), _vm._v(" "), _c('div', {
    staticClass: "zan-cell-bottom"
  })]), _vm._v(" "), _c('div', {
    staticClass: "zan-panel zan-panel-bottom"
  })])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('image', {
    staticStyle: {
      "width": "20px",
      "height": "20px",
      "margin-right": "8px"
    },
    attrs: {
      "src": "/static/assets/my.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "zan-cell zan-cell--access",
    staticStyle: {
      "border-top": "0.5px solid #eee"
    },
    attrs: {
      "href": "../collect/main"
    }
  }, [_c('div', [_c('image', {
    staticStyle: {
      "width": "20px",
      "height": "20px",
      "margin-right": "8px"
    },
    attrs: {
      "src": "/static/assets/notice.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "zan-cell__bd"
  }, [_vm._v("\n                    我的收藏\n                ")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "zan-cell zan-cell--access"
  }, [_c('div', {
    staticClass: "zan-cell__bd"
  }, [_c('image', {
    attrs: {
      "src": "/static/assets/sign.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v("签到")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "zan-cell zan-cell--access"
  }, [_c('div', {
    staticClass: "zan-cell__bd"
  }, [_c('image', {
    attrs: {
      "src": "/static/assets/lock.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v("解锁")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "zan-cell zan-cell--access"
  }, [_c('div', {
    staticClass: "zan-cell__bd"
  }, [_c('image', {
    attrs: {
      "src": "/static/assets/other.png"
    }
  }), _vm._v(" "), _c('span', [_vm._v("其他")]), _vm._v(" "), _c('div')])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-69b74d24", esExports)
  }
}

/***/ })

},[95]);
//# sourceMappingURL=main.js.map