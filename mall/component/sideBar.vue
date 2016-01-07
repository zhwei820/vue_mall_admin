<template>

    <aside class="main-sidebar">
        <section class="sidebar">
          <!-- Sidebar Menu -->
          <ul class="sidebar-menu">
            <li><a v-link="{ path: 'dashBoard'}"><i class="glyphicon glyphicon-dashboard"></i>概况</a></li>

            <li class="treeview">
              <a href="#"><i class="fa fa-link"></i> <i class="glyphicon glyphicon-pawn"></i> <span>商品</span> </a>
              <ul class="treeview-menu">
                <li><a href="#" v-link="{ path: 'bannerCreate' }"><i class="glyphicon glyphicon-edit"></i>创建banner</a></li>
                <li><a href="#" v-link="{ path: 'bannerManage' }"><i class="glyphicon glyphicon-equalizer"></i>管理banner</a></li>
              </ul>
            </li>

            <li class="treeview">
              <a href="#"><i class="fa fa-link"></i> <i class="glyphicon glyphicon-time"></i> <span>订单</span> </a>
              <ul class="treeview-menu">
                <li><a href="#" v-link="{ path: 'bannerCreate' }"><i class="glyphicon glyphicon-list"></i>创建banner</a></li>
                <li><a href="#" v-link="{ path: 'bannerManage' }"><i class="glyphicon glyphicon-list"></i>管理banner</a></li>
              </ul>
            </li>

            <li class="treeview" v-if="!currentUser.role">
              <a href="#"><i class="fa fa-link"></i> <i class="glyphicon glyphicon-cog"></i> <span>管理</span> </a>
              <ul class="treeview-menu">
                <li><a href="#" v-link="{ path: 'bannerCreate' }"><i class="glyphicon glyphicon-user"></i>创建banner</a></li>
                <li><a href="#" v-link="{ path: 'bannerManage' }"><i class="glyphicon glyphicon-list"></i>管理banner</a></li>
              </ul>
            </li>


            <li class="treeview" v-if="currentUser.role != 2">
              <a href="#"><i class="fa fa-link"></i> <i class="glyphicon glyphicon-tasks"></i> <span>Banner</span> </a>
              <ul class="treeview-menu">
                <li><a href="#" v-link="{ path: 'bannerCreate' }"><i class="glyphicon glyphicon-leaf"></i>创建banner</a></li>
                <li><a href="#" v-link="{ path: 'bannerManage' }"><i class="glyphicon glyphicon-wrench"></i>管理banner</a></li>
              </ul>
            </li>
          </ul>

        </section>
      </aside>

</template>

<script>
  export default {
    data() {
      return {
          currentUser : wsCache.get('currentUser') ? wsCache.get('currentUser') : {username : ''},

      }
    },
    components: {
    }
  }
</script>
