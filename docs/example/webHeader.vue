<template>
<nav class="navbar navbar-default header">
  <div class="container-fluid">
    <span>红包商城管理中心</span>
    <div class="btn-group pull-right user_profile">
      <div class="dropdown">

          <dropdown>
            <button type="button" class="btn btn-primary" data-toggle="dropdown">
              <span class="caret"></span>
              操作
            </button>
            <ul class="dropdown-menu">
                <li role="presentation">
      						<a role="menuitem" tabindex="-1" ng-click="password_modal()">修改密码</a>
      					</li>
      					<li role="presentation">
      						<a role="menuitem" tabindex="-1" ng-click="logout()">退出登录</a>
      					</li>
            </ul>
          </dropdown>

      </div>
    </div>
  </div>
</nav>
</template>

<script>
import dropdown from 'src/Dropdown.vue'
export default {
  components: {
    dropdown
  }
}
</script>
