
import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
import moment from 'moment'	//格式化时间的插件

import VuePreview from 'vue-preview'	//图片预览插件
Vue.use(VuePreview)


// 设置http请求的根路径
// Vue.http.options.root='/root'
// 定义一个全局的时间过滤器
Vue.filter('dateFormat',function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){
	return moment(dateStr).format(pattern)
})
// 设置一个全局的post提交表单的数据格式
Vue.http.options.emulateJSON=true;


import './css/index.css'
import 'mint-ui/lib/style.css'
import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'

// 按需导入mint-ui组件
/*import {Header,Button,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 引入图片懒加载组件
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload)*/

// 当使用图片懒加载的时候不能按需导入mint-ui组件,需要全部导入
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'



// 导入app视图组件
import app from './App.vue'
// 导入自己的路由模块
import router from './router.js'

var vm=new Vue({
	el:"#app",
	data:{},
	render:function(createElements){
		return createElements(app)
	},
	router 	//挂载路由对象
})

