<template id="">

	<div class="col-md-10">
		<div class="form-horizontal form-style">

			<!-- banner名称 -->
			<div class="form-group">
				<label class="control-label col-md-2"  for="">banner名称:</label>
				<div class="col-md-10">
					<input v-model="name" type="text" id="name" name="name" placeholder="banner名称" class="form-control" required>
					<!-- <span ng-show="!name_required" class="help-block">请输入banner名</span> -->
				</div>
			</div>

			<!-- 系统平台 -->
			<div class="form-group">
				<label class="control-label col-md-2"  for="">系统平台:</label>
				<div class="btn-group col-md-10" role="group" aria-label="...">
					<div class="btn-group" role="group">
						<form>
						<label class="control-label radio-inline">
							<input name="time" v-model="os_type" type="radio" class="btn btn-default" value=1>
							Android
							</label>
						<label class="control-label radio-inline">
							<input name="time" v-model="os_type" type="radio" class="btn btn-default" value=2>
							iOS
							</label>
						<label class="control-label radio-inline">
							<input name="time" v-model="os_type" type="radio" class="btn btn-default" value=0>
							Android&iOS
							</label>
						</form>
					</div>
				</div>
			</div>
			<!-- 跳转链接 -->
			<div class="form-group">
				<label class="control-label col-md-2"  for="">跳转链接:</label>
				<div class="col-md-10">
					<input v-model="click_url" type="text" id="click_url" name="click_url" placeholder="链接地址" class="form-control" required>
					<!-- <span ng-show="jump_address_required" class="help-block">请输入跳转链接</span> -->
				</div>
			</div>

			<!-- 打开方式 -->
			<div class="form-group">
				<label class="control-label col-md-2"  for="">打开方式:</label>
				<div class="btn-group col-md-10" role="group" aria-label="...">
					<div class="btn-group" role="group">
						<form>
						<label class="control-label radio-inline">
							<input name="time" v-model="open_type" type="radio" class="btn btn-default" value="1">
							客户端
							</label>
						<label class="control-label radio-inline">
							<input name="time" v-model="open_type" type="radio" class="btn btn-default" value="2">
							浏览器
							</label>
						</form>
					</div>
				</div>
			</div>

			<!-- 上传图片 -->
			<div class="form-group">
				<label class="control-label col-md-2"  for="">上传图片:</label>
				<div class="photo-container photo-container-single">
            <div ng-show="!pic_url" onclick="uploadBanner.click()" class="photo-upload"></div>
            <div ng-show="pic_url" class="photo_pos">
                <img src="{{pic_url}}" alt="" v-if="pic_url">
                <i ng-click="removePhoto()" data-original-title="删除已传图片">x</i>
            </div>
        </div>

        <input class="hide" id="uploadBanner" onchange="angular.element(this).scope().pictureUpload(this, 720, 310)" name="uploadBanner" type="file" accept="image/jpg,image/png,image/jpeg">
        <blockquote class="bg-info col-sm-offset-2">
            <p>图片尺寸: 720*310, 格式为jpg、png、jpeg</p>
        </blockquote>

			</div>
			<!-- 时间段 -->
			<div class="form-group">
				<label class="control-label col-md-2"  for="">上下架时间:</label>
				<div class="col-md-10">
					<date-time-range></date-time-range>
				</div>

			</div>
			<!-- 排序 -->
			<div class="form-group">
				<label class="control-label col-md-2"  for="">banner排序:</label>
				 <div class="col-md-10">
					 <slider></slider>
				 </div>
			</div>

			<!-- banner说明 -->
			<div class="form-group">
				<label class="control-label col-md-2"  for="">banner说明:</label>
				<div class="col-md-10">
					<textarea class="form-control" rows="5" id="description" v-model="description"></textarea>
				</div>
			</div>
			<hr>
			<button :class="{'disabled': allLegal}" @click="bannerCreate()" class="btn btn-primary btn-large btn-block">创建banner</button>
		</div>
	</div>

</template>

<script>
export default {
  data() {
		if(this.banner_id){
		  return bannerGet();
		}

		return {  // 新建banner, 初始化参数
					name: '', //banner名称
			    os_type: 0, //系统平台
			    pic_url: '',
			    open_type: 0, //打开方式
			    click_url: '', //跳转链接
			    start_time: '', //上架开始日期,
			    end_time: '', //上架结束时间
			    seq: 0, //图片排序
			    description: '' //banner说明
				}
	  },
	  props: {
		  banner_id : Number
	  },
	  components: {
		  	dateTimeRange : require("./parts/dateTimeRange.vue"),
			slider : require("./parts/slider.vue")

	  },

    methods: {
        bannerCreate : function() {
            var paramData = {};
				paramData.banner_id = this.banner_id || '',
				paramData.name = this.name,
				paramData.os_type = this.os_type,
				paramData.pic_url = this.pic_url,
				paramData.open_type = this.open_type,
				paramData.click_url = this.click_url,
				paramData.start_time = this.start_time,
				paramData.end_time = this.end_time,
				paramData.seq = this.seq,
				paramData.description = this.description,

        this.$http.options.emulateJSON = true
        this.$http.post('/banner/add/', paramData, function(data, status, request) {
            if (data.status) {
	          route.go('/banner');
            } else {
                console.log('登录失效');
					route.go('/login');
                }
            }, {
              emulateJSON: true
            }).error(function(data, status, request) {
							console.log('参数错误');
          })

        },
				bannerGet : function(){

					url: '/banner/get/?banner_id=' + id
					this.$http.get(url, function(data, status, request) {
						if (!+data.status) {
							console.log('登录失效');
							route.go('/login');
			  		      } else {
			  		        return data.data;
			  		      }
				      }).error(function(data, status, request) {
				        console.log('请求失败, 请重试')
				      })

		    	},
			}
}
</script>
