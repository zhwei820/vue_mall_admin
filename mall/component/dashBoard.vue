<template id="">
    <div>
        <form class="form-inline">
            <div class="form-group">
                购买速度监控
            </div>
            <date-time-range></date-time-range>
            <button class="btn btn-default" style="position: absolute; right: 70px;">查询</button>
        </form>

        <div>
            <canvas id="line" class="chart chart-line" data="data" options="options" labels="labels" legend="legend" series="series" hover="onHover">
            </canvas>
        </div>
    </div>
</template>

<script>
    export default{
        data() {

        },
        components: {
            dateTimeRange : require("./parts/dateTimeRange.vue"),
        },
        methods : {
            getData: function() {
              if (!$scope.state) { //订单数据
                this.legend = true;
                dataUrl = '/statistics/order/';
                this.series = ['成交额', '订单数'];
              } else { //商品数据
                this.legend = false;
                dataUrl = '/statistics/product/';
                this.series = ["单品成交数量"];
              }
              $http({
                method: 'POST',
                url: dataUrl,
                data: $.param(DateInit()),
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              }).
              success(function(data, status, headers, config) {
                if (!+data.status) {
                  userNotLogin(data);
                } else {
                  if (!$rootScope.currentUser) {
                    $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
                  }
                  if (data.status == 1) {
                    var currentData = data.data;
                    this.labels = [];
                    this.data = [
                      [],
                      []
                    ];
                    currentData.forEach(function(item) {
                      this.labels.push(item[0]);
                      this.data[0].push(parseInt(item[1]));
                      (item[2] || item[2] === 0) && this.data[1].push(item[2]);
                    });
                  }
                }
              }).
              error(function(data, status, headers, config) {
                console.log('error');
              });
            }
        },
        ready(){
            this.$dispatch('bread_crumb', {title: '概况', subtitle: ''})
        }
    }
</script>
