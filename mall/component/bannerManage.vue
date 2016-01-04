<template id="">
    <div ng-controller="bannerManage" class="content-container">
        <!-- 商品类别 -->
        <form class="form-inline">
            <!-- 商品名称 -->
            <div class="form-group">
                <input ng-model="name" type="text" class="form-control" placeholder="此处输入活动名称搜索"></div>
            <!-- 系统 -->
            <div class="form-group">
                <div class="selectContainer">
                    <select ng-model="os_type" class="form-control" name="" style="width:100px;">
                        <option value="" label="系统">系统</option>
                        <option value="1" label="Android"></option>
                        <option value="2" label="iOS"></option>
                        <option value="3" label="Android&iOS"></option>
                    </select>
                </div>
            </div>
            <!-- 状态 -->
            <div class="form-group">
                <div class="selectContainer">
                    <select ng-model="bannerState" class="form-control" name="" style="width:100px;">
                        <option value="">状态</option>
                        <option value="0" label="已上架"></option>
                        <option value="1" label="待上架"></option>
                        <option value="2" label="已下架"></option>
                    </select>
                </div>
            </div>
            <button ng-click="listBanners()" class="btn btn-default">搜索</button>
        </form>
        <table class="table table-bordered table-hover">
            <thead>
                <tr class="pallete-silver">
                    <th>序号</th>
                    <th>排序</th>
                    <th>名称</th>
                    <th>图片</th>
                    <th>系统</th>
                    <th>状态</th>
                    <th>上架时间</th>
                    <th>下架时间</th>
                    <th>创建时间</th>
                    <th>操作区</th>
                </tr>
            </thead>
            <tbody>
                <tr data-ng-repeat="banner in banners" class="pallete-clouds">
                    <td>{{banner.id}}</td>

                    <td>{{banner.seq}}</td>
                    <td width=200>{{banner.name}}</td>
                    <td>
                        <img ng-src="{{banner.pic_url}}" alt="" width="200px;"></td>
                    <td>{{sys[banner.os_type]}}</td>
                    <td>{{bannerStates[banner.state]}}</td>
                    <td>{{banner.start_time|date:'yyyy-MM-dd'}}</td>
                    <td>{{banner.end_time|date:'yyyy-MM-dd'}}</td>
                    <td>{{banner.ctime|date:'yyyy-MM-dd'}}</td>
                    <td>
                        <!-- <span ng-click="toUpdate(banner.banner_id)" class="btn btn-default btn-success">编辑</span> -->
                        <a ng-href="#!bannerUpdate?banner_id={{banner.id}}" class="btn btn-default">编辑</a>
                        <span ng-show="banner.state==1" ng-click="onShelf(banner.banner_id)" class="btn btn-default">上架</span>
                        <span ng-show="banner.state==0" ng-click="offShelf(banner.banner_id)" class="btn btn-default">下架</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div >
            <pagination total-items="totalItems" ng-model="page" ng-change="listBanners()" previous-text="上一页" next-text="下一页" class="pagination-big" boundary-links="true" rotate="false" max-size="maxSize" num-pages="numPages" first-text="首页" last-text="尾页" items-per-page="20"></pagination>
        </div>
    </div>

</template>
