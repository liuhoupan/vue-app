<template>
	<div class="cmt-container">
	<h3>发表评论</h3>
	<hr>
	<textarea placeholder="请输入要BB的内容(最多吐槽120字)"maxlength="120" v-model="msg"></textarea>
	<mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
	<div class="cmt-list">
		<div class="cmt-item" v-for="(item,i) in comments":key="item.add_time">
			<div class="cmt-title">
				第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time|dateFormat}}
			</div>
			<div class="cmt-body">
				{{item.content===undefined ? "此用户很懒,什么都没留下" : item.content}}
			</div>
		</div>
		<!-- 以上v-for循环的是来自服务端的数据,已下是临时默认数据 -->
		<div class="cmt-item">
			<div class="cmt-title">
				第n楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2018-08-20 11:57:24
			</div>
			<div class="cmt-body">
				你想说上面,我真的不想说什么···
			</div>
		</div>
	</div>
	<mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
export default {
	data(){
		return {
			pageIndex:1 ,	//默认展示第1页
			comments:[],	//所有的评论数据
			msg:''			//输入的评论内容
		}
	},
	created(){
		this.getComments();
	},
	methods:{	
		getComments(){	//请求评论数据
			//正确的url是'"someurl"+this.id+"?pageIndex="+this.pageIndex,其中传入新闻的id和分页码pageIndex'
			this.$http.get("../../data/comments.json").then(result=>{
				if(result.body.status===0){
					// this.comments=result.body.message;
					// 每当加载更多评论请求新数据的时候,不要把旧数据清空覆盖,而是旧数据拼接新数据
					this.comments=this.comments.concat(result.body.message);
				}else{
					Toase('获取评论失败')
				}
			})
		},
		getMore(){	//加载更多评论
			this.pageIndex++;
			this.getComments()
		},
		postComment(){	//发表评论
			//校验评论内容是否为空
			if(this.msg.trim().length===0){
				return Toast('评论内容不能为空!')
			}
			//参数1:请求的url地址,正确的url地址需要传入某条新闻的id：url/+this.$route.params.id
			//参数2:提交给服务器的数据对象{content:this.msg}

			this.$http.post('../../data/comments.json',{content:this.msg.trim()}).then(function(result){
					if(result.body.status===0){
						// 拼接出一个评论对象
						var cmt={
							user_name:"匿名用户",
							add_time:Date.now(),
							content:this.msg.trim()
						}
						this.comments.unshift(cmt);
						this.msg='';
					}
			})
		}
	}
}
</script>

<style>
.cmt-container{}
.cmt-container h3{
	font-size: 18px;
}
.cmt-container textarea{
	font-size: 14px;
	height: 85px;
	margin: 0;
}
.cmt-container .cmt-list{
	margin: 5px 0;
}
.cmt-container .cmt-list .cmt-item{
	font-size: 13px;
}
.cmt-container .cmt-list .cmt-title{
	background-color: #ccc;
}
.cmt-container .cmt-list .cmt-body{
	line-height: 35px;
	text-indent: 2em;
}
</style>