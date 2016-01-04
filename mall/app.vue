<template>

     <div class="wrapper">
        <web-header v-if="currentUser.username"></web-header>

        <side-bar v-if="currentUser.username"></side-bar>
        <div class="content-wrapper"  v-if="currentUser.username">
            <router-view></router-view>
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
