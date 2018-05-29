<template>
  <div class="am-content">
    <div v-show="infoUpdate">
       <el-row>
            <el-col :span="12" class="clearfix">
              <div class="searchTitle fl">一级标题</div>
              <el-select class="fl" v-model="oneIdValue" placeholder="请选择" @change="oneIdChange">
                <el-option
                  v-for="item in oneIdOptions"
                  :key="item.id"
                  :label="item.titleName"
                  :value="item.titleName">
                </el-option>
              </el-select>
            </el-col>

            <el-col :span="12" class="clearfix">
              <div class="searchTitle fl">二级标题</div>
              <el-select class="fl" v-model="twoIdValue" placeholder="请选择" @change="twoIdChange">
                <el-option
                  v-for="item in twoIdOptions"
                  :key="item.id"
                  :label="item.titleName"
                  :value="item.titleName">
                </el-option>
              </el-select>
            </el-col>
          </el-row>

          <el-row  style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">标题</div></el-col>
              <el-col :span="10"><el-input class="" v-model="changeOptions.bodyTitle" placeholder="请输入内容"></el-input></el-col>
          </el-row>

          <el-row  style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">作者：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="changeOptions.author" placeholder="请输入内容"></el-input></el-col>
          </el-row>

          <el-row  style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">摘要：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="changeOptions.summary" placeholder="请输入内容"></el-input></el-col>
          </el-row>

          <el-row style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">关键词：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="changeOptions.keyword" placeholder="请输入内容"></el-input></el-col>
          </el-row>

          <el-row style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">缩略图：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="changeOptions.thumbnailLink" placeholder="请输入内容"></el-input></el-col>
              <el-col :span="2"><el-button type="warning">查询</el-button></el-col>
          </el-row>
         
          <el-row style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">列表图：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="changeOptions.listViewLink" placeholder="请输入内容"></el-input></el-col>
              <el-col :span="2"><el-button type="warning">查询</el-button></el-col>
          </el-row>

          <el-row style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">主视图：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="changeOptions.frontViewLink" placeholder="请输入内容"></el-input></el-col>
              <el-col :span="2"><el-button type="warning">查询</el-button></el-col>
          </el-row>
          
          <el-row style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">视频：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="changeOptions.videoLink" placeholder="请输入内容"></el-input></el-col>
              <el-col :span="2"><el-button type="warning">查询</el-button></el-col>
          </el-row>

        <div>
          <button size="primary" type="info" icon="plus" @click="getContent">获取内容</button>
          <UEditor style="marginTop:10px;" :config=config ref="ueditor"></UEditor>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="infoUpdate = false">取消</el-button>
          <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">{{$t('table.confirm')}}</el-button>
          <el-button v-else type="primary" @click="updateData">发布文章</el-button>
        </div>
    </div>




      <el-row :gutter="20"  style="marginTop:10px;">
        <el-col :span="6" class="clearfix">
          <div class="searchTitle fl">一级标题</div>
          <el-select class="fl" v-model="oneIdValue" placeholder="请选择" @change="oneIdChange">
            <el-option
              v-for="item in oneIdOptions"
              :key="item.id"
              :label="item.titleName"
              :value="item.titleName">
            </el-option>
          </el-select>
        </el-col>

        <el-col :span="6" class="clearfix">
          <div class="searchTitle fl">二级标题</div>
          <el-select class="fl" v-model="twoIdValue" placeholder="请选择" @change="twoIdChange">
            <el-option
              v-for="item in twoIdOptions"
              :key="item.id"
              :label="item.titleName"
              :value="item.titleName">
            </el-option>
          </el-select>
        </el-col>

        <el-col :span="6">
          <el-row>
              <el-col :span="6"><div class="searchTitle">作者：</div></el-col>
              <el-col :span="18"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
          </el-row>
        </el-col>
      </el-row>

      <el-row :gutter="20" style="marginTop:10px;">
        <el-col :span="6">
          <el-row>
              <el-col :span="8"><div class="searchTitle">关键词：</div></el-col>
              <el-col :span="16"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
          </el-row>
        </el-col>

        <el-col :span="6">
          <el-row>
              <el-col :span="6"><div class="searchTitle">标题</div></el-col>
              <el-col :span="18"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
          </el-row>
        </el-col>

        <el-col :span="8">
          <el-row>
              <el-col :span="8"><div class="searchTitle">开始时间：</div></el-col>
              <el-col :span="14"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
          </el-row>
        </el-col>

      </el-row>

      <el-row :gutter="20" style="marginTop:10px;">
        <el-col :span="8">
          <el-row>
              <el-col :span="8"><div class="searchTitle">结束时间：</div></el-col>
              <el-col :span="14"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
          </el-row>
        </el-col>

        <el-col :span="6" class="clearfix">
          <div class="searchTitle fl">状态：</div>
          <el-select class="fl" v-model="stausValue" placeholder="" @change="statusChange">
            <el-option
              v-for="item in stausOptions"
              :key="item.status"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
        </el-col>

        <el-col :span="6">
          <el-row>
            <el-button type="primary" @click="changeViewTab">查找</el-button>
            <el-button type="warning" @click="handleCreate">添加文章</el-button>
          </el-row>
        </el-col>

      </el-row>


      <el-table :key='tableKey' :data="this.backMsg"  border fit highlight-current-row
        style="width: 100%;marginTop:20px;">
        <el-table-column align="center" label="编号" width="65">
          <template slot-scope="scope">
            <span>{{scope.row.serialNumber}}</span>
          </template>
        </el-table-column>
        <el-table-column label="平台名称" min-width="100">
          <template slot-scope="scope">
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column class-name="status-col" label="url链接" min-width="100">
          <template slot-scope="scope">
            <span>{{scope.row.url}}</span>
          </template>
        </el-table-column>
        <el-table-column width="150px" align="center" label="更新日期">
          <template slot-scope="scope">
            <span>{{scope.row.updateTime}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="150px" align="center" label="状态">
          <template slot-scope="scope">
            <span v-if="scope.row.status == 0">下架</span>
            <span v-else-if="scope.row.status == 1">上架</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="230" class-name="small-padding fixed-width">
          <template slot-scope="scope">
            <el-button type="success" size="mini" @click="handleUpdate(scope.row)">上下架</el-button>
            <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">修改</el-button>
            <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleModifyStatus(scope.row,'deleted')">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <!-- <div style="margin:10px auto">
        <el-pagination
          
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="viewOptions.pageNo"
          :page-size="10"
          layout="total, prev, pager, next"
          :total="100">
        </el-pagination>
      </div> -->
      

      <!-- 修改对话框 -->
      <el-dialog :fullscreen="true" title="添加文章" :visible.sync="dialogFormVisible">

          <el-row>
            <el-col :span="12" class="clearfix">
              <div class="searchTitle fl">一级标题</div>
              <el-select class="fl" v-model="oneIdValue" placeholder="请选择" @change="oneIdChange">
                <el-option
                  v-for="item in oneIdOptions"
                  :key="item.id"
                  :label="item.titleName"
                  :value="item.titleName">
                </el-option>
              </el-select>
            </el-col>

            <el-col :span="12" class="clearfix">
              <div class="searchTitle fl">二级标题</div>
              <el-select class="fl" v-model="twoIdValue" placeholder="请选择" @change="twoIdChange">
                <el-option
                  v-for="item in twoIdOptions"
                  :key="item.id"
                  :label="item.titleName"
                  :value="item.titleName">
                </el-option>
              </el-select>
            </el-col>
          </el-row>

          <el-row  style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">标题</div></el-col>
              <el-col :span="10"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
          </el-row>

          <el-row  style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">作者：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
          </el-row>

          <el-row  style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">摘要：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
          </el-row>

          <el-row style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">关键词：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
          </el-row>

          <el-row style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">缩略图：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
              <el-col :span="2"><el-button type="warning">查询</el-button></el-col>
          </el-row>
         
          <el-row style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">列表图：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
              <el-col :span="2"><el-button type="warning">查询</el-button></el-col>
          </el-row>

          <el-row style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">主视图：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
              <el-col :span="2"><el-button type="warning">查询</el-button></el-col>
          </el-row>
          
          <el-row style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">视频：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
              <el-col :span="2"><el-button type="warning">查询</el-button></el-col>
          </el-row>

        <div>
        <button size="primary" type="info" icon="plus" @click="getContent">获取内容</button>
          <UEditor style="marginTop:10px;" :config=config ref="ueditor"></UEditor>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">{{$t('table.cancel')}}</el-button>
          <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">{{$t('table.confirm')}}</el-button>
          <el-button v-else type="primary" @click="updateData">发布文章</el-button>
        </div>
      </el-dialog>


      <!-- 添加对话框 -->
      <el-dialog :fullscreen="true" title="新增" :visible.sync="dialogFormAdd">

          <el-row>
            <el-col :span="12" class="clearfix">
              <div class="searchTitle fl">一级标题</div>
              <el-select class="fl" v-model="oneIdValue" placeholder="请选择" @change="oneIdChange">
                <el-option
                  v-for="item in oneIdOptions"
                  :key="item.id"
                  :label="item.titleName"
                  :value="item.titleName">
                </el-option>
              </el-select>
            </el-col>

            <el-col :span="12" class="clearfix">
              <div class="searchTitle fl">二级标题</div>
              <el-select class="fl" v-model="twoIdValue" placeholder="请选择" @change="twoIdChange">
                <el-option
                  v-for="item in twoIdOptions"
                  :key="item.id"
                  :label="item.titleName"
                  :value="item.titleName">
                </el-option>
              </el-select>
            </el-col>
          </el-row>

          <el-row  style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">标题</div></el-col>
              <el-col :span="10"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
          </el-row>

          <el-row  style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">作者：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
          </el-row>

          <el-row  style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">摘要：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
          </el-row>

          <el-row style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">关键词：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
          </el-row>

          <el-row style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">缩略图：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
              <el-col :span="2"><el-button type="warning">查询</el-button></el-col>
          </el-row>
         
          <el-row style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">列表图：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
              <el-col :span="2"><el-button type="warning">查询</el-button></el-col>
          </el-row>

          <el-row style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">主视图：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
              <el-col :span="2"><el-button type="warning">查询</el-button></el-col>
          </el-row>
          
          <el-row style="marginTop:10px;">
              <el-col :span="2"><div class="searchTitle">视频：</div></el-col>
              <el-col :span="10"><el-input class="" v-model="input" placeholder="请输入内容"></el-input></el-col>
              <el-col :span="2"><el-button type="warning">查询</el-button></el-col>
          </el-row>

        <div>
        <button size="primary" type="info" icon="plus" @click="getContent">获取内容</button>
          <UEditor style="marginTop:10px;" :config=config ref="ueditor1"></UEditor>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">{{$t('table.cancel')}}</el-button>
          <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">{{$t('table.confirm')}}</el-button>
          <el-button v-else type="primary" @click="updateData">发布文章</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
  import UEditor from '@/components/ueditor/ueditor.vue'

  export default{
      name: 'addver',
      components: {UEditor},
      data(){
        return {
          infoUpdate: false,
          currentPage1: 1,
          input: '',
          tableKey: 0,
          rules: {
            type: [{ required: true, message: 'type is required', trigger: 'change' }],
            timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
            title: [{ required: false, message: 'title is required', trigger: 'blur' }]
          },
          viewOptions: {
            "author": "",
            "bodyTitle": "",
            "endTime": "",
            "keywords": "",
            "oneId": "",
            "pageNo": 1,
            "pageSize": 100,
            "startTime": "",
            "status": 1,
            "twoId": ""
          },
          changeOptions: {
            // "author": "jason",
            // "bodyTitle": "新文章",
            // "frontViewLink": "",     //  主视图的url
            // "id": 0,                       // 文章id   0--首次发布   修改---文章id
            // "keyword": "新文章",
            // "listViewLink": "",      // 列表图的url
            // "mainBody": "<div>我是一个新文章</div>",          // html     
            // "oneId": 2,                   
            // "summary": "新文章",          // 摘要
            // "thumbnailLink": "",    // 缩略图的url
            // "twoId": 1,
            // "videoLink": ""         // 视频 url 
            "author": "",
            "bodyTitle": "",
            "frontViewLink": "",
            "id": 0,
            "keyword": "",
            "listViewLink": "",
            "mainBody": "",
            "oneId": 0,
            "summary": "",
            "thumbnailLink": "",
            "twoId": 0,
            "videoLink": ""
          },
          oneIdOptions: [

          ],
          oneIdValue: '',
          oneFilterJson: {},
          twoIdOptions: [

          ],
          twoIdValue: '',
          twoFilterJson: {},
          stausOptions: [
            {
              status: 1,
              label: '上架'
            }, {
              status: 0,
              label: '下架'
            }
          ],
          stausValue: '上架',
          backMsg: [],
          list: null,
          temp: {
            id: undefined,
            importance: 1,
            remark: '',
            timestamp: new Date(),
            title: '',
            type: '',
            status: 'published'
          },
          // 修改的弹窗
          dialogFormVisible: false,
          // 添加的弹框
          dialogFormAdd: false,
          dialogStatus: '',
          textMap: {
            update: '修改文章',
            add: '删除文章'
          },

          config: {
            //可以在此处定义工具栏的内容
            // toolbars: [
            //  ['fullscreen', 'undo', 'redo','|','bold', 'italic', 'underline',
            //  '|','superscript','subscript','|', 'insertorderedlist', 'insertunorderedlist',
            //  '|','fontfamily','fontsize','justifyleft','justifyright','justifycenter','justifyjustify']
            // ],
            autoHeightEnabled: false,
            autoFloatEnabled: true,
            initialContent:'请输入内容',   //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
            autoClearinitialContent:true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
            initialFrameWidth: null,
            initialFrameHeight: 450,
            BaseUrl: '',
            UEDITOR_HOME_URL: 'static/ueditor/'
          },
          addFormVisible: false
        }
      },
      created() {
        this.$get('/admin/titleList/oneTitleList')
        .then(res => {
          console.log(res)
          this.oneIdValue = res.data[0].titleName;
          this.oneIdOptions = res.data;
          this.oneFilterJson = res.data[0];
          this.viewOptions.oneId = res.data[0].id;
          this.$post('/admin/titleList/twoTitleList', {
            id: res.data[0].id
          })
          .then( res => {
              this.twoIdValue = res.data[0].titleName;
              this.twoIdOptions = res.data;
              this.twoFilterJson = res.data[0];  
              this.viewOptions.twoId = res.data[0].id;
              this.changeViewTab()
          })
          .catch( err => {

          })
        })
        .then(err => {

        })
      },
      methods: {
        // 更改一级标题
        oneIdChange: function() {
          let obj = {};
          obj = this.oneIdOptions.find((item)=>{
              return item.titleName == this.oneIdValue;
          });
          this.oneFilterJson = obj
          this.viewOptions.oneId = obj.id;

          this.$post('/admin/titleList/twoTitleList', {
              id: this.oneFilterJson.id
            })
            .then( res => {
                this.twoIdValue = res.data[0].titleName;
                this.twoIdOptions = res.data;
                this.twoFilterJson = res.data[0];
                this.viewOptions.twoId = res.data[0].id;
            })
            .catch( err => {

            })
        },
        // 更改二级标题
        twoIdChange: function() {
          let obj = {};
          obj = this.twoIdOptions.find((item)=>{
              return item.titleName == this.twoIdValue;
          });
          this.twoFilterJson = obj
          this.viewOptions.twoId = obj.id;
        },
        // 更改上下架状态
        statusChange: function() {
          let obj = {};
          obj = this.stausOptions.find((item)=>{
              return item.label == this.stausValue;
          });
          this.viewOptions.status = obj.status;
        },
        // 首次加载或者查询
        changeViewTab: function() {
            this.$post('/admin/body/articleSearch', this.viewOptions)
            .then(res => {
              this.backMsg = res.data.list;
            })
            .catch( err => {

            })
        },
        // 修改
        handleUpdate(row) {
          this.temp = Object.assign({}, row) // copy obj
          console.log(row)
          this.temp.timestamp = new Date(this.temp.timestamp)
          this.dialogStatus = 'update'
          this.dialogFormVisible = true
          this.$nextTick(() => {
            this.$refs['dataForm'].clearValidate()
          })
        },
        resetTemp() {
          this.temp = {
            id: undefined,
            importance: 1,
            remark: '',
            timestamp: new Date(),
            title: '',
            status: 'published',
            type: ''
          }
        },
        // 添加
        handleCreate() {
          // this.resetTemp()
          this.infoUpdate = true;

          // this.dialogFormAdd = true
          // console.log(this.temp)
          // this.$nextTick(() => {
          //   this.$refs['dataFormAdd'].validate((valid) => {
              
          //   })
          // })
        },
        // 删除
        handleModifyStatus(row, status) {

          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
                this.$post('/admin/body/articleStatChenge', {
                    "articleOrTitleLink": 1,
                    "id": row.id,
                    "status": 2
                  })
                  .then(res => {
                    this.backMsg = this.backMsg.filter(function(v){
                      return row.id !== v.id;
                    });
                    console.log(this.backMsg)
                    this.$message({
                      message: '操作成功',
                      type: 'success'
                    })
                  })
                  .catch( err => {
                    this.$message({
                      message: err,
                      type: '操作失败'
                    })
                  })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });          
            });
        },
        // 添加文章按钮
        addContent: function() {

        },
        andleModifyStatus(row, status) {

          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
                this.$post('/admin/body/articleStatChenge', {
                    "articleOrTitleLink": 1,
                    "id": row.id,
                    "status": 2
                  })
                  .then(res => {
                    this.backMsg = this.backMsg.filter(function(v){
                      return row.id !== v.id;
                    });
                    console.log(this.backMsg)
                    this.$message({
                      message: '操作成功',
                      type: 'success'
                    })
                  })
                  .catch( err => {
                    this.$message({
                      message: err,
                      type: '操作失败'
                    })
                  })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });          
            });
        },
        resetTemp() {
          this.temp = {
            id: undefined,
            importance: 1,
            remark: '',
            timestamp: new Date(),
            title: '',
            status: 'published',
            type: ''
          }
        },
        // 修改
        updateData() {
          this.changeOptions.mainBody = this.$refs.ueditor.getUEContent();

          this.$post('/admin/body/articlePublish', this.changeOptions)
          .then( res => {
            if(add) {
              // this.backMsg.unshift(res.)
            }
          })



            // console.log(this.$refs['dataForm'])
          this.$refs['dataForm'].validate((valid) => {
            if (valid) {
              const tempData = Object.assign({}, this.temp)
              tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
              console.log(tempData)
              this.$post('/admin/titleLink/publish', {
                  "id": tempData.id,
                  "name": tempData.name,
                  "type": 3,
                  "url": tempData.url
              })
              .then(res => {
                  for (const v of this.backMsg) {
                    if (v.id === this.temp.id) {
                      const index = this.backMsg.indexOf(v)
                      this.backMsg.splice(index, 1, this.temp)
                      break
                    }
                  }
                  this.dialogFormVisible = false
                  this.$notify({
                    title: '成功',
                    message: '更新成功',
                    type: 'success',
                    duration: 2000
                  })
              })
              .catch( err => {
                  this.$notify({
                    title: '失败',
                    message: err,
                    type: 'success',
                    duration: 2000
                  })
              })
            }
          })
        },
        //获取文档内容
        getContent: function(){
          let content = this.$refs.ueditor.getUEContent();
          console.log(content);
          alert(content);
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
      }
  }

</script>

<style lang="scss">
.am-content{ 
  .searchTitle{
    border: 1px solid #ccc;
    line-height: 34px;
    padding: 0 10px;
  }
}
</style>

