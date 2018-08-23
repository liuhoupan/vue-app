import VueRouter from 'vue-router'

// 导入路由组件
import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Cart from './components/tabbar/Cart.vue'
import Search from './components/tabbar/Search.vue'

import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'

import photoList from './components/photos/photoList.vue'
import photoInfo from './components/photos/photoinfo.vue'

var router =new VueRouter({
	routes:[
		// tabbar路由
		{ path:'/',redirect:'/home' },
		{ path:'/home',component:Home },
		{ path:'/member',component:Member },
		{ path:'/cart',component:Cart },
		{ path:'/search',component:Search },
		//新闻资讯路由
		{path:'/home/newsList',component:newsList},
		{path:'/home/newsinfo/:id',component:newsInfo},
		//图片分享路由
		{path:'/home/photolist',component:photoList},
		{path:'/home/photoinfo/:id',component:photoInfo}
	],
	linkActiveClass:'mui-active'  //覆盖默认的类router-link-active高亮显示
})

module.exports=router
