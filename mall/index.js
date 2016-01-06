require('prismjs')
require('./js/showLanguage')
var WebStorageCache = require('./vendor/web-storage-cache.min');

var Vue = require('./vendor/vue.min');
var VueRouter = require('./vendor/vue-router.min');
var VueResource = require('./vendor/vue-resource.min');


Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.debug = true

var App = Vue.extend(require('./app.vue'))

var router = new VueRouter()

router.map({
    '/bannerCreate' : {
        component : require('./component/bannerCreate.vue'),
    },
    '/bannerManage' : {
        component : require('./component/bannerManage.vue'),
    },
    '/bar' : {
        component: require('./component/bannerManage.vue'),
    },
    '/login' : {
        component: require('./component/index.vue'),
    }
})

var wsCache = new WebStorageCache();
window.wsCache = wsCache
window.router = router

router.start(App, '#app')



var pictureUpload = function(ele, width, height) {
      var file = ele.files[0];
      var fd = new FormData;
      fd.append('picture', file);
      $http({
        method: 'POST',
        url: '/product/upload_picture/',
        data: fd,
        transformRequest: angular.identity,
        headers: {
          'Content-Type': undefined,
          'X-File-Name': encodeURIComponent(file.name)
        }
      }).
      success(function(data, status, headers, config) {
        if (!+data.status) {
          userNotLogin(data);
          opeType(false);
        } else {
          //添加到相应元素上
          //TOFIX: 不能操作DOM
          var parent = ele.parentNode;
          if (!~data.data.indexOf('http')) {
            data.data = data.data;
          }
          var img = new Image();
          img.src = data.data;
        }
      }).error(function(data, status, headers, config) {
        opeType(false);
      })
}
