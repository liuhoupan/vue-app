<template>
	<div>
		<!-- 轮播图 -->
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
			<img :src="item.img" alt="">
		  </mt-swipe-item>
		</mt-swipe>

		<!-- 九宫格 -->
		  <ul class="mui-table-view mui-grid-view mui-grid-9">
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                   <img src="../../images/menu2.png" alt=""><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">练习我们</div></router-link></li>
		            
		   </ul> 

		<h3>首页内容</h3>
	</div>
</template>
<script>
	import {Toast} from 'mint-ui'
	export default {
		data(){
			return {
				lunbotuList:[  ]  //保存轮播图的数组
			}
		},
		created(){
			this.getLunBoTu()
		},
		methods:{
			getLunBoTu(){	//获取轮播图数据
				this.$http.get('data/lunbotu.json').then(result=>{
					console.log(result.status);
					if(result.body.status===0){
						this.lunbotuList=result.body.message;
					}else{
						Toast('加载轮播图失败')
					}
				})
			}
		}
	}
</script>
<style>
/*轮播图样式*/
 .mint-swipe{
	height: 200px;
} 
 .mint-swipe-item{
		background-color: #f00;
	}
 .mint-swipe-item img{
 	width:100%;
 	hight:100%;
 }
/*九宫格样式*/
 .mui-grid-view.mui-grid-9{
	background-color: #fff;
	border: none;
}
.mui-grid-view.mui-grid-9 img{
	width: 60px;
	height: 60px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border: none;
}
.mui-media-body{
	font-size: 13px;
}
</style>