<template id="">
    {{pic_url}}

  <div class="photo-container photo-container-single">
      <div v-else="pic_url" onclick="uploadBanner.click()" class="photo-upload"></div>
      <div v-if="pic_url" class="photo_pos">
          <img v-bind:src="pic_url" alt="" v-if="pic_url">
          <i ng-click="removePhoto()" data-original-title="删除已传图片">x</i>
      </div>
  </div>
  <input class="hide" id="uploadBanner" v-on:change='uploadPicture( 720, 310);' name="uploadBanner" type="file" accept="image/jpg,image/png,image/jpeg">
</template>

<script>
export default {
  data () {
      return {
          pic_url : 'dfd',
      }
  },

  components: {
  },
  methods : {
    uploadPicture : function(width, height) {
        var file = document.getElementById ("uploadBanner").files[0];
        var fd = new FormData;
        fd.append('picture', file);

        this.$http.options.emulateJSON = true
        this.$http.post('/product/upload_picture/', fd, function(data, status, request) {
          if (status !== 200 || data.errcode) {
            console.log(data.msg)
          }
          var img = new Image();
          if (!~data.data.indexOf('http')) {
              data.data = 'http://' + data.data;
          }
          img.src = data.data;
          setTimeout(function() {
            if (img.width != width || img.height != height) {
              console.log("图片尺寸错误, 请重新上传, 需要尺寸为" +  width + 'x' + height + ', 实际上传图片尺寸为' + img.width + 'x' + img.height);
              return;
            } else {
              this.pic_url = data.data;
              console.log(this.pic_url);
            }
            }, 100);
        }, {
          emulateJSON: true
        }).error(function(data, status, request) {
          //   this.updateVerify();
      })
    }
  },
  ready(){
      console.log(this.pic_url);

      this.pic_url = "dfdsfdsfds";
      console.log(this.pic_url);

  }
}

</script>
