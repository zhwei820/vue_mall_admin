<template>

    <aside class="main-sidebar">
        <section class="sidebar">
          <!-- Sidebar Menu -->
          <ul class="sidebar-menu">
            <li><a class="active" v-link="{ path: 'home' }"><i class="glyphicon glyphicon-record"></i>商品</a></li>
            <li><a class="order-icon" v-link="{ path: 'home' }"><i class="glyphicon glyphicon-pencil"></i>订单</a></li>
            <li v-if="!currentUser.role"><a class="manage-icon" v-link="{ path: 'home' }"><i class="glyphicon glyphicon-list"></i>管理</a></li>

            <li class="treeview" v-if="currentUser.role != 2">

              <a href="#"><i class="fa fa-link"></i> <i class="glyphicon glyphicon-tasks"></i> <span>Banner</span> </a>
              <ul class="treeview-menu">
                <li><a href="#" v-link="{ path: 'home' }"><i class="glyphicon glyphicon-list"></i>创建banner</a></li>
                <li><a href="#" v-link="{ path: 'home' }"><i class="glyphicon glyphicon-list"></i>管理banner</a></li>
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
