<template>
	<div class="photoinfo-container">
		<h3>{{photoinfo.title}}</h3>
		<p class="subtitle">
			<span>发表时间:{{photoinfo.add_time|dateFormat}}</span>
			<span>点击:{{photoinfo.click}}次</span>
		</p>
		<hr>
		<!-- 缩略图区域 -->
		<div class="thumbs">
		 	<vue-preview :slides="imgs" @close="handleClose"></vue-preview>
		</div>

		<!-- 图片内容区域 -->
		<div class="content" v-html="photoinfo.content"></div>

		<!-- 评论子组件(使用已有的组件) -->
		<commitBox></commitBox>
	</div>
</template>

<script>
	// 导入评论子组件
	import commit from '../comment/comment.vue';
	
export default{
	data(){
		return {
			id:this.$route.params.id,	//从路由中获取到的图片的id
			photoinfo:{},	//图片详情
			imgs:[]		//缩略图数组
		}
	},
	created(){
		this.getPhotoInfo();
		this.getThumbs();
	},
	methods:{
		//获取图片详情
		getPhotoInfo(){
			this.$http.get('../../data/photoinfo.json').then(result=>{
				if(result.body.status==0){
					this.photoinfo=result.body.message[0]
				}
			})
		},
		// 获取缩略图图片
		getThumbs(){
			// 正确的url地址需要传递图片的id：(url/+this.id)
			this.$http.get('../../data/imgPreview.json').then(result=>{
				if(result.body.status==0){
					//循环每个图片的数据,并补全宽和高
					result.body.message.forEach(item=>{
						item.w=600;
						item.h=400;
					})
					this.imgs=result.body.message
				}
			})
		},
		handleClose(){
			console.log('close event')
		}
	},
	components:{	//注册子组件
		'commitBox':commit
	}
}
</script>

<style lang="scss">
.photoinfo-container{
	padding: 3px;
	h3{
		color: #26a2ff;
		font-size: 16px;
		text-align: center;
		margin: 15px 0;	
	}
	.subtitle{
		display: flex;
		justify-content: space-between;
		font-size: 13px;
	}
	.content{
		font-size: 13px;
		line-height: 13px;
	}
	/*缩略图样式*/
	.thumbs img{
		width: 100%;
	}
}





</style>