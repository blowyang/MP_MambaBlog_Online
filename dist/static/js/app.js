global.webpackJsonp([11],{

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_bmob_Bmob_1_4_4_min_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_bmob_Bmob_1_4_4_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_bmob_Bmob_1_4_4_min_js__);



__WEBPACK_IMPORTED_MODULE_2__static_bmob_Bmob_1_4_4_min_js___default.a.initialize("4fafca9966933eb0bdab6f4fb558ef98", "7b5b95adad8f023aef00f9b65aa74090");

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages: ['pages/center/main', 'pages/detail/main', 'pages/index/main', 'pages/blog/main', 'pages/feedback/main', 'pages/collect/main', 'pages/new/main', '^pages/homepage/main'],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#5F9EA0',
            navigationBarTitleText: 'Mamba Blog',
            navigationBarTextStyle: '#fff'
        },
        tabBar: {
            color: '#999',
            selectedColor: '#d22222',
            backgroundColor: '#fff',
            borderStyle: 'black',
            list: [{
                pagePath: 'pages/homepage/main',
                text: '首页',
                iconPath: 'static/assets/index1.png',
                selectedIconPath: 'static/assets/index.png'
            }, {
                pagePath: 'pages/blog/main',
                text: '博文',
                iconPath: 'static/assets/news.png',
                selectedIconPath: 'static/assets/news-active.png'
            }, {
                pagePath: 'pages/center/main',
                text: '我的',
                iconPath: 'static/assets/center.png',
                selectedIconPath: 'static/assets/center-active.png'
            }]
        }
    }
});

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(53);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(52)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5dcd0e30", Component.options)
  } else {
    hotAPI.reload("data-v-5dcd0e30", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_bmob_Bmob_1_4_4_min__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_bmob_Bmob_1_4_4_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_bmob_Bmob_1_4_4_min__);


/* harmony default export */ __webpack_exports__["a"] = ({
    onLaunch: function onLaunch() {
        //小程序一键登录，登陆成功后会在本地缓存保存用户的信息
        __WEBPACK_IMPORTED_MODULE_0__static_bmob_Bmob_1_4_4_min___default.a.User.auth().then(function (res) {
            console.log(res);
            wx.setStorageSync('userData', res);
            wx.login({
                success: function success() {
                    var current = __WEBPACK_IMPORTED_MODULE_0__static_bmob_Bmob_1_4_4_min___default.a.User.current();
                    if (current.nickName != undefined) {} else {
                        wx.getUserInfo({
                            success: function success(result) {
                                console.log(result);
                                var objectId = current.objectId;
                                var userInfo = result.userInfo;
                                var nickName = userInfo.nickName;
                                var avatarUrl = userInfo.avatarUrl;

                                var query = __WEBPACK_IMPORTED_MODULE_0__static_bmob_Bmob_1_4_4_min___default.a.Query("_User");

                                query.get(objectId).then(function (res) {
                                    res.set('nickName', nickName);
                                    res.set('userPic', avatarUrl);
                                    res.save();
                                    var userData = wx.getStorageSync('userData');
                                    userData['nickName'] = nickName;
                                    userData['userPic'] = avatarUrl;
                                    wx.setStorageSync('userData', userData);
                                }).catch(function (err) {
                                    console.log(err);
                                });
                            }
                        });
                    }
                }
            });
        }).catch(function (err) {});
    },
    created: function created() {
        // 调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);

        console.log('app created and cache logs by setStorageSync');
    }
});

/***/ })

},[49]);
//# sourceMappingURL=app.js.map