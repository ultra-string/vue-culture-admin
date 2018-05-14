<template>
  <div class="login">
  	<el-input v-model="input" placeholder="请输入账号"></el-input>
  	<el-input type="password" v-model="psw" placeholder="请输入密码"></el-input>
  	<el-button type="primary">主要按钮</el-button>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
