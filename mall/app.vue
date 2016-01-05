<template>

     <div class="wrapper">
        <web-header v-if="currentUser.username"></web-header>

        <side-bar v-if="currentUser.username"></side-bar>
        <div class="content-wrapper"  v-if="currentUser.username">
          <section class="content-header">
              <h1>
                Banner
                <small>new</small>
              </h1>
              <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                <li><a href="#">banner</a></li>
                <li class="active">new</li>
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
        }
    },

    components: {
        webHeader: webHeader,
        sideBar: sideBar,
        index: index
    },
    ready(){
        console.log(this.currentUser)
    }
  }
</script>
