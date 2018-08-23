<template>
	<div class="newsINfo-container">
		<!-- 新闻标题 -->
		<h3 class="title">{{newsInfo.title}}</h3>
		<!-- <h4>测试{{id}}</h4> -->
		
		<!-- 子标题 -->
		<p class="subtitle">
			<span>发表时间:{{newsInfo.add_time|dateFormat}}</span>
			<span>点击:{{newsInfo.click}}次</span>
		</p>
		<hr>
		<!-- 新闻内容 -->
		<div class="content" v-html="newsInfo.content"></div>
		<!-- 评论区域 -->
		<comment-box></comment-box>
	</div>
</template>

<script>
	// 导入评论组件
	import comment from '../comment/comment.vue'
export default {
	data(){
		return{
			id:this.$route.params.id, //将url中传递的id,挂载到data上，方便调用
			newsInfo:{}	  //新闻资讯
		}
	},
	created(){
		this.getNewsInfo()
	},
	methods:{
		getNewsInfo(){//获取新闻详情
			this.$http.get('../../data/newsList.json').then(result=>{
				if(result.body.status===0){
					this.newsInfo=result.body.message[0]
				}else{
					Toast('获取新闻失败')
				}
			})
		}
	},
	components:{	//注册子组件
		'comment-box':comment
	}
}
</script>

<style>
.newsINfo-container{
	padding: 0 4px;
}
.newsINfo-container .title{
	font-size: 16px;
	text-align: center;
	margin: 15px 0;
	color: red;
}
.newsINfo-container .subtitle{
	font-size: 13px;
	color: #333;
	display: flex;
	justify-content: space-between;
}
.newsINfo-container .content img{
	width: 100%;
}
</style>