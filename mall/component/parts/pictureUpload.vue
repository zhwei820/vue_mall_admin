<template id="">
  <div class="photo-container photo-container-single">
      <div v-if="!pic_url" onclick="uploadBanner.click()" class="photo-upload"></div>
      <div v-if="pic_url" class="photo_pos">
          <img :src="pic_url" alt="" v-if="pic_url" id='picture'>
          <i @click="remove_photo()" data-original-title="删除已传图片">x</i>
      </div>
  </div>
  <input class="hide" id="uploadBanner" v-on:change='uploadPicture()' name="uploadBanner" type="file" accept="image/jpg,image/png,image/jpeg">
</template>

<script>
export default {
  data () {
      return {
          pic_url : '',
      }
  },
  props: ['width', 'height'],
  components: {
  },
  watch: {
  },
  methods : {
      uploadPicture : function() {
            var file = document.getElementById ("uploadBanner").files[0];
            var fd = new FormData;
            fd.append('picture', file);

            this.$http.options.emulateJSON = true
            this.$http.post('/product/upload_picture/', fd, function(data, status, request) {
                if (status !== 200 || data.errcode) {
                    console.log(data.msg)
                }

                if (!~data.data.indexOf('http')) {
                  data.data = 'http://' + data.data;
                }
                this.pic_url = data.data;

                var img = new Image();
                var width = this.width;
                var height = this.height;
                img.obj = this;
                img.onload = function(){
                    if (img.width != width || img.height != height) {
                      console.log("图片尺寸错误, 请重新上传, 需要尺寸为" +  width + 'x' + height + ', 实际上传图片尺寸为' + img.width + 'x' + img.height);
                      img.obj.pic_url = '';
                      return;
                    }
                }
                img.src = data.data
            }, {
              emulateJSON: true
            }).error(function(data, status, request) {
              //   this.updateVerify();
          })
      },
      remove_photo: function(){
          this.pic_url = '';
      }
  },
  ready(){
  }
}

</script>
