<template>
	<div>
		<h3>新闻资讯</h3>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newsList":key="item.id">
				<router-link :to="'/home/newsinfo/'+item.id"> <!-- 绑定to属性,传入id -->
						<img class="mui-media-object mui-pull-left":src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'><span>发表时间:{{item.add_time|dateFormat}}</span> <span>点击:{{item.click}}次</span></p>
						</div>
				</router-link>
			</li>
			<!-- <li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../images/timg.jpg">
						<div class="mui-media-body">
							木屋
							<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
						</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../images/timg.jpg">
						<div class="mui-media-body">
							CBD
							<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
						</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media">
				<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../images/timg.jpg">
						<div class="mui-media-body">
							幸福
							<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
						</div>
				</a>
			</li> -->
		</ul>
	</div>
</template>

<script>
	import {Toast}from 'mint-ui'
	export default {
		data(){
			return{
				newsList:[]//新闻列表数据
			}
		},
		created(){
			this.getNewsList() //调用获取新闻资讯
		},
		methods:{
			getNewsList(){	//获取新闻资讯
				this.$http.get('../../data/newsList.json').then(result=>{
						if(result.body.status===0){
							this.newsList=result.body.message
						}else{
							Toast('获取新闻资讯失败')
						}
				})
			}
		}
	} 
</script>

<style>
.mui-table-view .mui-media h1{
	font-size: 13px;
}
.mui-table-view .mui-ellipsis{
	font-size: 12px;
	display: flex;
	justify-content: space-between;
}
</style>