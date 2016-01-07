<template>
    <header class="main-header">
    <!-- Logo -->
    <span class="logo">
      <span class="logo-lg"><b>红包商城管理中心</b></span>
    </span>
    <nav class="navbar navbar-static-top" role="navigation">
      <div class="dropdown pull-right user_profile" >
          <div class="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
              <a href="#" class="header_font_small">{{currentUser.username}}</a>
              <span class="caret"></span>
          </div>
          <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
            <li><a href="#" @click='logout'>退出</a></li>
            <li><a href="#">修改密码</a></li>
          </ul>
        </div>
    </nav>
  </header>
</template>

<script>
export default {
    data () {
        return {
            currentUser : wsCache.get('currentUser') ? wsCache.get('currentUser') : {username : ''},
        }
    },
    methods: {
        logout: function(){
            this.$dispatch('logout');
        },
    }
}
</script>
