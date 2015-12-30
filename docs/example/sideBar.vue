<template>
    <div class="hbmall-list-container palette palette-asbestos">
    	<ul class="nav nav-list hbmall-list">
    		<!-- <li><a class="overview-icon" ng-href="#!overview">概况</a></li> -->
    		<li ng-if="currentUser.role != 2"><a class="banner-icon" ng-href="#!banner">Banner</a></li>
            <!-- <li ng-if="currentUser.role != 2"><a class="mall-icon" ng-href="#!mall">抽奖</a></li> -->
    		<li><a class="product-icon" ng-href="#!product">商品</a></li>
    		<li><a class="order-icon" ng-href="#!order">订单</a></li>
    		<li ng-if="!currentUser.role"><a class="manage-icon" ng-href="#!management">管理</a></li>
    	</ul>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: true
      }
    },
    components: {
    }
  }
</script>
