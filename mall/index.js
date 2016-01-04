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
    '/banner' : {
        component : require('./component/banner.vue'),
    },
    '/bar' : {
        component: require('./component/banner.vue'),
    },
    '/login' : {
        component: require('./component/index.vue'),
    }
})

var wsCache = new WebStorageCache();
window.wsCache = wsCache
window.router = router

router.start(App, '#app')
