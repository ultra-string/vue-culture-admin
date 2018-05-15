<template>
  <div class="login">
  	<el-input v-model="input" placeholder="请输入账号"></el-input>
  	<el-input type="password" v-model="psw" placeholder="请输入密码"></el-input>
  	<el-button type="primary" @click="handleLogin">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      input: '',
      psw: ''
    }
  },
  methods: {
  	handleLogin: function() {
  		this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
		  this.$router.push({ path: '/' }); //登录成功之后重定向到首页
		}).catch(err => {
		  this.$message.error(err); //登录失败提示错误
		});
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
