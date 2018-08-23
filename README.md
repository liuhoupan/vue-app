# 项目名称：我爱我家

## 【主流开源协议之间有何异同】
(https://www.zhihu.com/question/19568896)

## 制作首页app组件
### 路由链接步骤
####更换链接
- 把<a></a>标签换成<router-link><router-link/>
- 把<a>标签的"href"属性换成<router-link>标签的"to" 属性

####挂载路由
-在routes[]中增加{ path:'/',redirect:'/home' }

###制作新闻列表组件
- 使用mui中的'media-list.html'

###新闻详情
-把新闻列表中的每一项li 中的<a>改造成<router-link>,同时在跳转的时候提供新闻的id,需要把<router-link to"/home/XX">改成<router-link :to=" '/home/newsinfo'+item.id">
-创建新闻详情组件

### 在新闻详情组件中加入评论子组件
-import comment from './comment.vue'
-父组件中 使用components属性注册子组件

### 点击加载更多功能
-绑定点击事件，事件中请求加载下一页内容pageIndex +1
--重新发起加载评论的请求 调用getComments()方法

###发表评论
-1.双向绑定文本框数据
-2.为发表按钮绑定事件
-3.校验评论内容,如果为空,Toast提示消息
-4.通过vue-resource发送一个请求，把评论内容提交给服务器
-5.当发表评论成功后，重新刷新列表，查看新的评论

##图片分享
### 顶部滑动条
-使用mui中的 (tab-top-webview-main.html)为模板
-需要去掉 <div id="slider">中的全屏设置 '.mui-fullscreen'
-滑动条无法正常滑动，根据官方文档，这是一个JS组件,需要初始化，导入mui.js,并导入scroll()方法,具体参考官网
-引入mui.js后报错“Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects...” 即在严格模式下不能使用caller、callee、arguments,webpack打包main.js的时候默认使用的是严格模式
+解决方案：使用babel-plugin-transform-remove-srict-mode插件移除JS中的"use strict"模式

-滑动时会警告"Unable to preventDefault inside passive event listener due to target being treated as passive. See",解决办法:在style样式中添加 星号{touch-action:pan-y}

-然后发现页面刷新后滚动条不能滚动,因为初始化滑动条的控件mui('.mui-scroll-wrapper').scroll要执行DOM操作,所以要将该控件放在mounted钩子函数里面,等DOM加载完毕才能执行滑动

-tabbar按钮不能切换的问题,可能是类名冲突，将APP.vue组件中的tabbar按钮的类名.mui-tab-item改成.mui-tab-item-a

### 图片列表制作
-使用懒加载的方式,使用mint-ui提供的'Lazy Load'组件
-渲染图片列表数据

--使用懒加载图片的时候不能按需导入mint-ui组件,需要改成全部导入

###点击图片 跳转到 图片详情页面
-在把li标签改造成router-link标签的时候,router-link标签默认渲染成a标签,因此需要使用tag属性指定把router-link标签渲染成li标签,不然会改变原有的样式
-从服务端获取图片详情:在url中传入一个图片的id:（'url/'+this.$route.params.id）,一个id对应一个url地址,获取一条详情数据

###缩略图制作
-使用插件'vue-preview',参考文档在github上



