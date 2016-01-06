<template>

     <div class="wrapper">
        <web-header v-if="currentUser.username"></web-header>
        <side-bar v-if="currentUser.username"></side-bar>

        <div class="content-wrapper"  v-if="currentUser.username">
          <section class="content-header">
              <h1>
                {{bread_crumb_data.title}}
                <small>{{bread_crumb_data.subtitle}}</small>
              </h1>
              <ol class="breadcrumb">
                <li><a href="#"><i class="glyphicon glyphicon-dashboard"></i> 首页</a></li>
                <li>{{bread_crumb_data.title}}</li>
                <li class="active">{{bread_crumb_data.subtitle}}</li>
              </ol>
            </section>
            <section class="content">
              <router-view></router-view>
            </section>

        </div>

        <index v-else="currentUser.username" :current-user='currentUser'></index>

    </div>

</template>

<style src="./assets/css/signin.css"></style>

<script>
var webHeader = require('./component/webHeader.vue');
var sideBar = require('./component/sideBar.vue');
var index = require('./component/index.vue');
  export default {
    data () {
        return {
            currentUser : wsCache.get('currentUser') ? wsCache.get('currentUser') : {username : ''},
            bread_crumb_data : {title: 'Banner', subtitle: '新建'},
        }
    },

    components: {
        webHeader: webHeader,
        sideBar: sideBar,
        index: index
    },
    ready(){
        console.log(this.currentUser)
    },
    methods: {
        update_bread_crumbs : function(bread_crumb_data){
            this.bread_crumb_data = bread_crumb_data;
        }
    },
    events: {
      'bread_crumb': function(bread_crumb_data) {
        this.update_bread_crumbs(bread_crumb_data);
      }
    },
  }
</script>
