<template>
	<div class="app-container">
		 <!-- header区域 -->
		<mt-header fixed title="我爱我家园"></mt-header>

		 <!-- router-view区域 -->
		 <transition>
			<router-view></router-view>
		 </transition>

		<!-- 底部Tabbar区域 -->
		 <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-a" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-a" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-a" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-a" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav> 
	</div>
</template>

<script>

</script>

<style>
/*组件切换动画*/
.app-container{
	padding-top: 40px;
	padding-bottom: 50px;
	/*隐藏横向超出的部分*/
	overflow-x:hidden; 
}
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition:all 0.5s ease;
}
..is-fixed{
	z-index: 10;
}

 /* 改类名,解决tabbar不能切换的问题,可能是类名冲突
 把.mui-tab-item改成mui-tab-item-a */
.mui-bar-tab .mui-tab-item-a.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-a {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-a .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;

}
.mui-bar-tab .mui-tab-item-a .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}


</style>