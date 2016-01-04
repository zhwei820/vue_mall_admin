<template id="">

	<div class="col-md-10">
		<div class="form-horizontal form-style">

			<!-- banner名称 -->
			<div class="form-group">
				<label class="control-label col-md-2"  for="">banner名称:</label>
				<div class="col-md-10">
					<input ng-model="name" type="text" id="name" name="name" placeholder="banner名称" class="form-control" required>
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
							<input name="time" ng-model="os_type" type="radio" class="btn btn-default" value=1>
							Android
							</label>
						<label class="control-label radio-inline">
							<input name="time" ng-model="os_type" type="radio" class="btn btn-default" value=2>
							iOS
							</label>
						<label class="control-label radio-inline">
							<input name="time" ng-model="os_type" type="radio" class="btn btn-default" value=3>
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
					<input ng-model="click_url" type="text" id="click_url" name="click_url" placeholder="链接地址" class="form-control" required>
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
							<input name="time" ng-model="open_type" type="radio" class="btn btn-default" value="1">
							客户端
							</label>
						<label class="control-label radio-inline">
							<input name="time" ng-model="open_type" type="radio" class="btn btn-default" value="2">
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
	                    <img src="{{pic_url}}" alt="">
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
				<div ng-controller="DatepickerDemoCtrl" class="col-md-10 date-popup">
					<div class="row">
						<div class="col-md-4">
							<div class="input-group">
								<input type="text" class="form-control" datepicker-popup="{{format}}" ng-model="$parent.start_time" is-open="opened1" min-date="minDate" max-date="" datepicker-options="dateOptions" date-disabled="disabled(date, mode)" close-text="确认" placeholder="开始时间"/ required>
								<span class="input-group-btn">
									<button class="btn btn-default" ng-click="open($event,1)"> <i class="glyphicon glyphicon-calendar"></i>
									</button>
								</span>
							</div>
						</div>
						<div class="col-md-4">
							<div class="input-group">
								<input type="text" class="form-control" datepicker-popup="{{format}}" ng-model="$parent.end_time" is-open="opened2" min-date="$parent.start_time" max-date="" datepicker-options="dateOptions" date-disabled="disabled(date, mode)" close-text="确认"  placeholder="结束时间"/ required>
								<span class="input-group-btn">
									<button class="btn btn-default" ng-click="open($event,2)"> <i class="glyphicon glyphicon-calendar"></i>
									</button>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 排序 -->
			<div class="form-group">
				<label class="control-label col-md-2"  for="">banner排序:</label>
				 <div class="col-md-10">
					 <input id="seq" type="text"/>
				 </div>
			</div>
			<br/>
			<script>
		        var bootstrapSlider = new Slider("#seq", { min: 0, max: 100, value: 1, focus: true });
		    </script>

			<!-- banner说明 -->
			<div class="form-group">
				<label class="control-label col-md-2"  for="">banner说明:</label>
				<div class="col-md-10">
					<textarea class="form-control" rows="5" id="description" ng-model="description"></textarea>
				</div>
			</div>
			<hr>
			<button ng-disabled="!(name && click_url && start_time && end_time && pic_url)" ng-click="bannerCreate()" class="btn btn-primary btn-large btn-block">{{operation}}</button>
		</div>
	</div>

</template>
