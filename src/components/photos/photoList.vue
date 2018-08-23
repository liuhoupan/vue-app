<template>
	<div>
		<!-- 顶部滑动条区域 -->
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item',item.id==0 ? 'mui-active':'']" v-for="item in cates":key="item.id" @click="getPhotoListBycategoryId(item.id)">
						{{item.title}}
					</a>
				</div>
			</div>
		</div>
		<!-- 图片列表区域 -->
		<ul class="photo-list">
		  <router-link v-for="item in list":key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
		  	<!-- 图片 懒加载-->
		    <img v-lazy="item.img_url">
			<!-- 图片上的说明文字 -->
		    <div class="img_txt">
		    	<h3 class="img_title">{{item.title}}</h3>
		    	<p class="img_info">{{item.zhaiyao}}</p>
		    </div>
		  </router-link>
		</ul>
	</div>
</template>

<script>
	// 导入mui的JS文件
	import mui from '../../lib/MUI/js/mui.min.js'
	
export default {
	data(){
		return{
			cates:[],    //图片分类
			list:[]		//图文列表
		}
	},
	created(){
		this.getAllCategory();
		this.getPhotoListBycategoryId(0);
	},
	mounted(){	//当组件中的DOM结构被渲染好并放到页面中后,会执行mounted这个钩子函数
		//初始化滑动控件
		//解释滑动条的执行时机为什么放在mounted钩子函数里,因为mui要操作.mui-scroll-wrapper这个DOM,所以只有等DOM加载完毕后才能执行
		mui('.mui-scroll-wrapper').scroll({
			deceleration:0.0005 //减速系数,系数越大,滑动速度越慢,滚动距离越小,默认0.0006
		})
	},
	methods:{
		// 获取所有的图片分类
		getAllCategory(){
			this.$http.get('../../data/imgCategory.json').then(result=>{
				if(result.body.status==0){
					// 图片未分类,都使用相同的图片
					// this.cates=result.body.message;
					//图片按照分类进行展示
					result.body.message.unshift({"title":"全部","id":0});
					this.cates=result.body.message;
				}
			})
		},
		//根据图片分类的id获取图片
		getPhotoListBycategoryId(categrId){  
			// 正确的url需要传入图片所属类目的id,如url/+categrId
			this.$http.get('../../data/photolist.json').then(result=>{
				if(result.body.status===0){
					this.list=result.body.message;
				}
			})
		}
	}
}
</script>

<style>
* {touch-action:pan-y}
.photo-list{
	list-style: none;
	padding: 10px 10px 0 10px;
	margin: 0;
}
.photo-list li{
	background-color: #ccc;
	text-align: center;
	margin-bottom: 10px;
	box-shadow: 0 0 6px #ccc;
	position: relative;
}
.photo-list li img{
	width: 100%;
	/*去除图片之间3像素的缝隙*/
	vertical-align: middle;
}
/*图片懒加载样式*/
.photo-list li img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
/*图片上的文字*/
.img_txt{
	color: #fff;
	text-align: left;
	max-height: 84px;
	position: absolute;
	bottom: 0;
	background-color: rgba(0,0,0,0.3);
}
.img_txt .img_title{
	font-size: 14px;
}
.img_txt .img_info{
	font-size: 13px;
	color: #fff;
}
</style>