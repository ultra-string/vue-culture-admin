<template>
<div>
     <!-- 搜索和添加 -->
    <el-row :gutter="20" style="width: 60%; margin: 20px 0">
      <el-col :span="12"><el-input v-model="userFileName" placeholder="请输入要查询的文件名"></el-input></el-col>
      <el-col :span="6"><el-button type="primary" @click="searchList">搜一个</el-button></el-col>
      <el-col :span="6"><el-button type="primary" @click="dialogFormVisible = true">添加</el-button></el-col>
    </el-row>

    <el-table :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="编号" width="65"  v-loading="loading"
      element-loading-text="请给我点时间！">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="名称">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" label="url链接">
        <template slot-scope="scope">
          <span>{{scope.row.path}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="上传日期" width="95">
        <template slot-scope="scope">
          <span>{{scope.row.uploadTime | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
        </template>
      </el-table-column>

    </el-table>

    <!-- 添加文件模态框 -->
    <el-dialog title="信息" :visible.sync="dialogFormVisible">
          <form>
            <label>文件名称：</label>
            <el-input v-model="mediaForm.name" auto-complete="off"></el-input>
            <input type="file" name="fileName" @change="getFile($event)">
            
          </form>

          <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="submitForm($event)">确 定</el-button>
            </div>
      
    </el-dialog>

</div>
  
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import { baseUrl } from '@/config/env'

export default {
  props: {
    type: {
      type: String,
      default: 'CN'
    }
  },
  data() {
    return {
      userFileName: '',
      searchInput: '',
      fileList: [],
      headers: {
        Authorization:`Bearer ${this.token}`
      },
      dialogFormVisible: false,
      mediaForm: {
        fileName: '',
        file: ''
      },
      list: null,
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type,
        sort: '+id'
      },
      loading: false
    }
  },
  computed: {
    ...mapGetters([
      'token'
    ]),
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getFile(event) {
      this.mediaForm.file = event.target.files[0];
      console.log(this.mediaForm.file);
    },
    submitForm(event) {
      event.preventDefault();
      let formData = new FormData();
      formData.append('fileName', this.mediaForm.fileName);
      formData.append('file', this.mediaForm.file);

      const server = axios.create({
        baseURL: baseUrl,
        timeout: 10000,
        headers: {
          Authorization:`Bearer ${this.token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      server.post('/admin/file/upload/image', formData)
      .then(res => {
        this.dialogFormVisible = false
      })
      .catch( err => {
        this.$message({
          message: err,
          type: '操作失败'
        })
      })
    },
    getList() {
      this.$get(`/admin/file/image?type=1&pageNo=1&pageSize=100`)
      .then( res => {
        this.list = res.data.list
        console.log(res)
      })
      .catch( err => {
        console.log(err)
      })
    },
    searchList() {
      this.$get(`/admin/file/image?type=1&pageNo=1&pageSize=100&name=${this.userFileName}`)
      .then( res => {
        this.list = res.data.list
        console.log(res)
      })
      .catch( err => {
        console.log(err)
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>

