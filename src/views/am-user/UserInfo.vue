<template>
  <div class="formBorder">
      <el-form ref="form" :model="form" label-width="80px">

        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item label="性别">
            <el-radio v-model="form.sex" :label="Number(0)">男</el-radio>
            <el-radio v-model="form.sex" :label="Number(1)">女</el-radio>
        </el-form-item>

        <el-form-item label="手机号">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>

        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>

        <el-form-item label="qq">
          <el-input v-model="form.qq"></el-input>
        </el-form-item>

        <el-form-item label="微信">
          <el-input v-model="form.weiXin"></el-input>
        </el-form-item>

        <el-form-item label="头像">
          <el-input v-model="form.headUrl"></el-input>
        </el-form-item>

        <el-form-item label="简介">
          <el-input type="textarea" v-model="form.des"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
    </el-form>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      form: {
        "des": "",
        "email": "",
        "headUrl": "",
        "id": 0,
        "phone": "",
        "qq": "",
        "sex": 0,
        "username": "",
        "weiXin": ""
      },
      resetInfo: {

      },
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ]),
  },
  created() {
    // 获取当前用户资料
    this.$get('/admin/user/userBasicsSearch')
    .then( res => {
      this.form = res.data;
      this.resetInfo = Object.assign({}, res.data);
    })
    .catch( err => {
        this.$message({
          message: err,
          type: '获取当前用户资料失败'
        })
    })

  },
  methods: {
    reset: function() {
      this.form = Object.assign({}, this.resetInfo);
    },    
    onSubmit: function() {
      this.$post('/admin/user/userBasicsUpdate', this.form)
      .then( res => {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.$router.push({path: '/'});
      })
      .catch( err => {
        this.$message({
          message: err,
          type: '提交失败'
        })
      })
    }
  }
}
</script>

<style scoped>
  .formBorder{
    width: 30%;
    margin: 30px auto;
  }
</style>


