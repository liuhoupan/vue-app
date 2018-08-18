
import Vue from 'vue'
import app from './App.vue'
import './css/index.css'
import 'mint-ui/lib/style.css'
import './lib/MUI/css/mui.min.css'
// 按需导入mint-ui组件
import {Button} from 'mint-ui'
Vue.component(Button.name, Button)
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


var vm=new Vue({
	el:"#app",
	data:{},
	render:function(createElements){
		return createElements(app)
	}
})

