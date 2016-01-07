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
    '/dashBoard' : {
        component : require('./component/dashBoard.vue'),
    },
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
    },
    '*' : {
        component : require('./component/dashBoard.vue'),
    },
})

var wsCache = new WebStorageCache();
window.wsCache = wsCache
window.router = router

router.start(App, '#app')

window.sleep = function(d){
  for(var t = Date.now();Date.now() - t <= d;);
}
