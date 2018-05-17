<template>
  <div class="index-route-view">
  	<el-container>
	  <el-header>Header</el-header>
	  <el-container>
	    <el-aside width="200px" :style="{height: assideHeight+'px'}">Aside</el-aside>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.index-route-view{
	.el-header{
		background-color: #B3C0D1;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	}
	.el-aside {
	    background-color: #D3DCE6;
	    color: #333;
	    text-align: center;
	}
  	.el-main {
	    background-color: #E9EEF3;
	    color: #fff;
	    text-align: center;
	    line-height: 160px;
	    position: relative;
	    .footer-name{
	    	line-height: 44px;
	    	position: absolute;
	    	bottom: 0;
	    	left: 0;
	    	padding-left: 14px;
	    	background: #ccc;
	    	width: 100%;
	    	color: #000;
	    }
	  }
}

</style>
