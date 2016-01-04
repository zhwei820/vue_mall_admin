<template>
    <div class="text-center light-weight form-signin">
        <h2>红包商城管理中心</h2>
        <h3>Impossible Is Nothing</h3>
        <div>
            <!-- <button v-link="{ path: '/banner' }" class="mui-btn go-button">马上选出吃什么！</button> -->

            <form name="login">
                <div class="login-form">
                    <div class="form-group">
                        <input v-model="username" type="text" id="inputEmail" class="form-control login-field" placeholder="用户名" required="" autofocus="">
                    </div>
                    <div class="form-group">
                        <input v-model="password" type="password" id="inputPassword" class="form-control login-field" placeholder="密码" required="">
                    </div>
                    <div class="form-group">
                        <input v-model="code" type="text" id="code" class="form-control" placeholder="验证码" required></div>
                    <div class="form-group verify">
                        <img :src="imgVerify" alt="验证码">

                        <span class="hint">看不清楚?</span>
                        <span @click="updateVerify()" class="change-verify">换一张</span>
                    </div>
                    <button @click="loginFormSubmit()" class="btn btn-lg btn-primary btn-block" type="submit">立即登录</button>
                </div>
            </div>
            <p class="hb-interpret text-center">点乐©2015 保留一切权力 京ICP备 12010382号</p>

        </form>

    </div>
</template>

<script>

export default {
  data () {
      return {
          imgVerify : '/users/verification/',
          username : '',
          password : '',
          code : ''
      }

  },
  props: {
    currentUser: Object,
},

  methods: {
      loginFormSubmit : function() {
          var paramData = {};
          paramData.username = this.username;
          paramData.password = this.password;
          paramData.code = this.code;

          this.$http.options.emulateJSON = true
          this.$http.post('/users/login/', paramData, function(data, status, request) {
              console.log(data.data);

              if (data.status == 1) {
                  //登录初始化
                  this.currentUser = data.data;
                  if(this.currentUser.role == 2) {
                      router.go({path : '/banner'})
                  } else {
                      router.go({path : '/banner'});
                  }
                  wsCache.set('currentUser', data.data, {exp : 6000});
                  console.log(data.data);

              } else {
                  console.log('请验证所填信息是否正确');
                //   this.updateVerify();
              }

          }, {
            emulateJSON: true
          }).error(function(data, status, request) {
            //   this.updateVerify();
        })

      },
  },
  ready: function(){
  }

}


</script>
