<template>
  <div class="index-route-view">
  	<el-container>
	  <el-header>
			<!-- 顶栏开始 -->
			<el-row>
				<el-col :span="4">
					<div style="color: #009688">
						中国手艺网后台管理系统
					</div>
				</el-col>
				<el-col :span="8">
					<div>
						<el-menu
							:default-active="activeIndex2"
							class="el-menu-demo"
							mode="horizontal"
							background-color="#545c64"
							text-color="#fff"
							active-text-color="#ffd04b">
							<el-menu-item index="11">用户管理系统</el-menu-item>
							<el-submenu index="22">
								<template slot="title">文件管理系统</template>
								<el-menu-item index="22-1">图片/视频</el-menu-item>
							</el-submenu>
						</el-menu>
					</div>
				</el-col>
				<el-col :span="8">
					<div style="color: #545c64">111</div>
				</el-col>
				<el-col :span="4">
					<el-menu
							class="el-menu-demo"
							mode="horizontal"
							background-color="#545c64"
							text-color="#fff"
							active-text-color="#ffd04b">
							<el-submenu  index="33">
								<template slot="title">
									<img style="height: 30px; width:30px; borderRadius: 100%;marginRight: 10px" src="@/assets/logo.png" alt="">
										管理员
									</template>
								<el-menu-item index="33-1">基本资料</el-menu-item>
								<el-menu-item index="33-2">安全设置</el-menu-item>
							</el-submenu >
							<el-menu-item index="44">退出</el-menu-item>
						</el-menu>
				</el-col>
			</el-row>

			<!-- 顶栏结束 -->
		</el-header>
	  <el-container>
	    <el-aside width="200px" :style="{height: assideHeight+'px'}">
					<!-- 边栏开始 -->
						<el-menu
							default-active="2"
							@open="handleOpen"
							@close="handleClose"
							background-color="#545c64"
							text-color="#fff"
							active-text-color="#ffd04b">
							<!-- 用户信息 -->
							<el-submenu index="1">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>用户信息</span>
								</template>
							</el-submenu>
							<!-- 栏目管理 -->
							<el-submenu index="2">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>栏目管理</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="2-1">网站结构</el-menu-item>
									<el-menu-item index="2-2">浮窗配置</el-menu-item>
									<el-menu-item index="2-3">banner</el-menu-item>
									<el-menu-item index="2-4">二维码</el-menu-item>
									<el-menu-item index="2-5">新媒体</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<!-- 内容管理 -->
							<el-submenu index="3">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>内容管理</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="3-1">文章管理</el-menu-item>
									<el-menu-item index="3-2">头条</el-menu-item>
									<el-menu-item index="3-3">专题策划</el-menu-item>
									<el-menu-item index="3-4">广告</el-menu-item>
									<el-menu-item index="3-5">官方信息</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<!-- 访问统计 -->
							<el-submenu index="4">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>访问统计</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="4-1">访问总量</el-menu-item>
									<el-menu-item index="4-2">菜单访问量</el-menu-item>
									<el-menu-item index="4-3">文章访问量</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
						</el-menu>
					<!-- 边栏结束 -->
			</el-aside>
	    <el-main>
			<router-view></router-view>
			<div class="footer-name">© 2018 中国手艺网</div>
	    </el-main>
	  </el-container>
	</el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      assideHeight: 800,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
  	let height = document.documentElement.clientHeight - 60;
  	console.log(height)
  	this.assideHeight = height;
  },
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.index-route-view{
	.el-header{
		background-color: #545c64;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	}
	.el-aside {
	    background-color: #545c64;
	    color: #333;
	    text-align: center;
	}
  	.el-main {
	    background-color: #fff;
	    text-align: center;
	    line-height: 160px;
	    position: relative;
	    .footer-name{
	    	line-height: 44px;
	    	position: absolute;
	    	bottom: 0;
	    	left: 0;
	    	padding-left: 14px;
	    	background: #eee;
	    	width: 100%;
	    	color: #000;
	    }
	  }
}

</style>
