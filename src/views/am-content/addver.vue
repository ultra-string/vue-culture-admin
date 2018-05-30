<template>
  <div class="am-content">
    <div v-show="infoUpdate">
       <el-row>
            <el-col :span="12" class="clearfix">
              <div class="searchTitle fl">一级标题</div>
              <el-select class="fl" v-model="change_oneIDValue" placeholder="请选择" @change="changeOneIdChange">
                <el-option
                  v-for="item in change_oneIdOptions"
                  :key="item.id"
                  :label="item.titleName"
                  :value="item.titleName">
                </el-option>
              </el-select>
            </el-col>

            <el-col :span="12" class="clearfix">
              <div class="searchTitle fl">二级标题</div>
              <el-select class="fl" v-model="change_twoIDValue" placeholder="请选择" @change="changeTwoIdChange">
                <el-option
                  v-for="item in change_twoIdOptions"
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
          <el-button @click="closeCreateData">取消</el-button>
          <!-- <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">{{$t('table.confirm')}}</el-button> -->
          <el-button type="primary" @click="updateData()">发布文章</el-button>
        </div>
    </div>


    <div v-show="opacityStyle">
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
              <el-button type="warning" @click="handleCreate({}, 'add')">添加文章</el-button>
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
              <el-button type="primary" size="mini" @click="handleCreate(scope.row, 'update')">修改</el-button>
              <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleModifyStatus(scope.row,'deleted')">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>

      

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
    <!--   <el-dialog :fullscreen="true" title="添加文章" :visible.sync="dialogFormVisible">

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
      </el-dialog> -->


      <!-- 添加对话框 -->
     <!--  <el-dialog :fullscreen="true" title="新增" :visible.sync="dialogFormAdd">

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
      </el-dialog> -->
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
          currentPage1: true,
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
          opacityStyle: '100%',
          changeMode: 'add',
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
          change_oneIdOptions: [],
          oneIdValue: '',
          oneFilterJson: {},
          change_oneIDValue: '',
          change_oneFilterJson: {},
          twoIdOptions: [

          ],
          change_twoIdOptions: [],
          twoIdValue: '',
          twoFilterJson: {},
          change_twoIDValue: '',
          change_twoFilterJson: {},
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
            toolbars: [
             [
                // 'anchor', //锚点
                'undo', //撤销
                'redo', //重做
                'bold', //加粗
                'indent', //首行缩进
                // 'snapscreen', //截图
                'italic', //斜体
                'underline', //下划线
                'strikethrough', //删除线
                'subscript', //下标
                'fontborder', //字符边框
                'superscript', //上标
                'formatmatch', //格式刷
                // 'source', //源代码
                'blockquote', //引用
                // 'pasteplain', //纯文本粘贴模式
                'selectall', //全选
                // 'print', //打印
                // 'preview', //预览
                'horizontal', //分隔线
                // 'removeformat', //清除格式
                'time', //时间
                'date', //日期
                // 'unlink', //取消链接
                // 'insertrow', //前插入行
                // 'insertcol', //前插入列
                // 'mergeright', //右合并单元格
                // 'mergedown', //下合并单元格
                // 'deleterow', //删除行
                // 'deletecol', //删除列
                // 'splittorows', //拆分成行
                // 'splittocols', //拆分成列
                // 'splittocells', //完全拆分单元格
                // 'deletecaption', //删除表格标题
                // 'inserttitle', //插入标题
                // 'mergecells', //合并多个单元格
                // 'deletetable', //删除表格
                // 'cleardoc', //清空文档
                // 'insertparagraphbeforetable', //"表格前插入行"
                // 'insertcode', //代码语言
                'fontfamily', //字体
                'fontsize', //字号
                'paragraph', //段落格式
                'simpleupload', //单图上传
                // 'insertimage', //多图上传
                // 'edittable', //表格属性
                // 'edittd', //单元格属性
                'link', //超链接
                'emotion', //表情
                'spechars', //特殊字符
                'searchreplace', //查询替换
                // 'map', //Baidu地图
                // 'gmap', //Google地图
                // 'insertvideo', //视频
                'help', //帮助
                'justifyleft', //居左对齐
                'justifyright', //居右对齐
                'justifycenter', //居中对齐
                'justifyjustify', //两端对齐
                'forecolor', //字体颜色
                'backcolor', //背景色
                'insertorderedlist', //有序列表
                'insertunorderedlist', //无序列表
                'fullscreen', //全屏
                // 'directionalityltr', //从左向右输入
                // 'directionalityrtl', //从右向左输入
                'rowspacingtop', //段前距
                'rowspacingbottom', //段后距
                // 'pagebreak', //分页
                // 'insertframe', //插入Iframe
                'imagenone', //默认
                'imageleft', //左浮动
                'imageright', //右浮动
                'attachment', //附件
                'imagecenter', //居中
                'wordimage', //图片转存
                'lineheight', //行间距
                'edittip ', //编辑提示
                'customstyle', //自定义标题
                'autotypeset', //自动排版
                // 'webapp', //百度应用
                'touppercase', //字母大写
                'tolowercase', //字母小写
                // 'background', //背景
                // 'template', //模板
                'scrawl', //涂鸦
                // 'music', //音乐
                // 'inserttable', //插入表格
                // 'drafts', // 从草稿箱加载
                // 'charts', // 图表
              ]
            ],
            zIndex: 1000,  // 编辑器的层级
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

              // 添加以及标题和耳机标题下拉框 默认属性
              this.change_oneIdOptions = this.oneIdOptions;
              this.change_twoIdOptions = this.twoIdOptions;

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
                if(res.data.length == 0) {
                    this.twoIdValue = '';
                    this.twoIdOptions = { };
                    this.twoFilterJson = { id: '', titleName: ''};
                    this.viewOptions.twoId = '';
                }else{
                    this.twoIdValue = res.data[0].titleName;
                    this.twoIdOptions = res.data;
                    this.twoFilterJson = res.data[0];
                    this.viewOptions.twoId = res.data[0].id;
                }
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
        // 更改updata的一级标题
        changeOneIdChange: function() {
            let obj = {};
            obj = this.change_oneIdOptions.find((item)=>{
                return item.titleName == this.change_oneIDValue;
            });
            this.change_oneFilterJson = obj
            this.changeOptions.oneId = obj.id;

            this.$post('/admin/titleList/twoTitleList', {
                id: this.change_oneFilterJson.id
              })
              .then( res => {
                if(res.data.length == 0) {
                    this.change_twoIDValue = '';
                    this.change_twoIdOptions = {};
                    this.change_twoFilterJson = { id: '', titleName: ''};
                    this.changeOptions.twoId = '';
                } else {
                    this.change_twoIDValue = res.data[0].titleName;
                    this.change_twoIdOptions = res.data;
                    this.change_twoFilterJson = res.data[0];
                    this.changeOptions.twoId = res.data[0].id;
                }
              })
              .catch( err => {

              })
        },
        // 更改updata的二级标题
        changeTwoIdChange: function() {
            let obj = {};
            obj = this.change_twoIdOptions.find((item)=>{
                return item.titleName == this.change_twoIDValue;
            });
            this.change_twoFilterJson = obj
            this.changeOptions.twoId = obj.id;
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
        /*
        *   定义打开编辑器的方式  新增 （add）或者 修改 （change） 对应data中的 changeMode 字段，默认为 'add'
        *   
        *
        */
        handleEditor: function(data, type) {
          let _this = this;

          if(type == 'update') {

            let articleInfo = {};

            this.$post('/admin/body/searchForUpdate', {
              "articleOrTitleLink": 0,
              "id": data.titleId
            })
            .then(res => {
                articleInfo = res.data;

                this.$refs.ueditor.setContent(articleInfo.body);

                this.changeOptions = {
                  "author": articleInfo.author,
                  "bodyTitle": articleInfo.bodyTitle,
                  "frontViewLink": articleInfo.frontViewUrl,
                  "id": articleInfo.id,
                  "keyword": articleInfo.keywords,
                  "listViewLink": articleInfo.listViewUrl,
                  "mainBody": articleInfo.body,
                  "oneId": articleInfo.oneTitleId,
                  "summary": articleInfo.summary,
                  "thumbnailLink": articleInfo.thumbnailUrl,
                  "twoId": articleInfo.twoTitleId,
                  "videoLink": articleInfo.videoUrl
                }

              // 清空编辑器所有内容     this.$refs.ueditor.execCommand('cleardoc');
              // 查询需要更改的一级标题和二级标题  通过一级标题的id筛选二级标题
              // author: "史蒂夫纳什"
              // bodyTitle: "时间嗲是的风景"
              // createTime: "2018-05-07"
              // oneId: 2
              // serialNumber: 1
              // status: 1
              // titleId: 1
              // twoId: 1
              // updateTime: "2018-05-19"

                  let option = {};
                  option = this.oneIdOptions.find( (item) => {
                    return item.id == data.oneId;
                  })
                  this.change_oneFilterJson = option;
                  this.change_oneIDValue = option.titleName;
                  // this.changeOptions.oneId = option.id;

                  this.$post('/admin/titleList/twoTitleList', {
                    id: this.change_oneFilterJson.id
                  })
                  .then( res => {
                    if(res.data.length == 0) {
                        this.change_twoIDValue = '';
                        this.change_twoIdOptions = {};
                        this.change_twoFilterJson = { id: '', titleName: ''};
                        this.changeOptions.twoId = '';
                    } else {
                        let twoOption = {};
                        twoOption = res.data.find( (item) => {
                          return item.twoId == data.towId;
                        })
                        this.change_twoFilterJson = twoOption;
                        this.change_twoIDValue = twoOption.titleName;
                        // this.changeOptions.twoId = twoOption.twoId;
                    }
                  })
                  .catch( err => {

                  })

              })
              .catch( err => {

              })


            // "id": 1,
            // "author": "史蒂夫纳什",
            // "summary": "今天",
            // "keywords": "打发士大夫但是",
            // "bodyTitle": "时间嗲是的风景",
            // "oneTitleId": 2,
            // "twoTitleId": 1,
            // "thumbnailUrl": "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=525b15c79e58d109dbe3afb2e159ccd0/b7fd5266d01609242417d4a2d80735fae6cd345c.jpg",
            // "listViewUrl": "https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=8d3a9ea62c7f9e2f6f351b082f31e962/500fd9f9d72a6059099ccd5a2334349b023bbae5.jpg",
            // "frontViewUrl": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527086868288&di=c77588ef05137b025382652eb5e5f51d&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fc9fcc3cec3fdfc03777b0d1ad83f8794a4c22615.jpg",
            // "videoUrl": "http://baidu.v.ifeng.com/kan/aBGRK?fr=v.baidu.com/",
            // "sort": 0,
            // "status": 1,
            // "createTime": 1525708024000,
            // "updateTime": 1526725918000,
            // "isDelete": 0,
            // "body": "是电风扇地方还是分数都符合双方是度分红"

       



          }else{
            // type == 'add' 勾选当前的一级id、二级id
            this.change_oneIDValue = this.oneIdValue;
            this.change_oneFilterJson = this.oneFilterJson;
            this.change_twoIDValue = this.twoIdValue;
            this.change_twoFilterJson = this.twoFilterJson;

            this.changeOptions = {
                "author": "",
                "bodyTitle": "",
                "frontViewLink": "",
                "id": 0,
                "keyword": "",
                "listViewLink": "",
                "mainBody": "",
                "oneId": this.oneFilterJson.id,
                "summary": "",
                "thumbnailLink": "",
                "twoId": this.twoFilterJson.id,
                "videoLink": ""
              }

            // 清空文章内容
            this.$refs.ueditor.setContent('请输入内容');
          }
          // 打开输入页面 隐藏 原页面
          this.infoUpdate = true;
          this.opacityStyle = false;

        },
        // 添加
        handleCreate(data, type) {
          this.handleEditor(data, type)
          // this.resetTemp()
          // this.infoUpdate = true;
          // this.opacityStyle = 0;

          // this.dialogFormAdd = true
          // console.log(this.temp)
          // this.$nextTick(() => {
          //   this.$refs['dataFormAdd'].validate((valid) => {
              
          //   })
          // })
        },
        // 关闭添加
        closeCreateData: function() {
          this.infoUpdate = false;
          this.opacityStyle = true;
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
        // 修改 和 发布文章
        updateData() {
          this.changeOptions.mainBody = this.$refs.ueditor.getUEContent();

          this.$post('/admin/body/articlePublish', this.changeOptions)
          .then( res => {
            if(add) {
              this.backMsg.push(this.changeOptions);
              this.infoUpdate = false;
              this.opacityStyle = true;
            }
          })



            // console.log(this.$refs['dataForm'])
          // this.$refs['dataForm'].validate((valid) => {
          //   if (valid) {
          //     const tempData = Object.assign({}, this.temp)
          //     tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          //     console.log(tempData)
          //     this.$post('/admin/titleLink/publish', {
          //         "id": tempData.id,
          //         "name": tempData.name,
          //         "type": 3,
          //         "url": tempData.url
          //     })
          //     .then(res => {
          //         for (const v of this.backMsg) {
          //           if (v.id === this.temp.id) {
          //             const index = this.backMsg.indexOf(v)
          //             this.backMsg.splice(index, 1, this.temp)
          //             break
          //           }
          //         }
          //         this.dialogFormVisible = false
          //         this.$notify({
          //           title: '成功',
          //           message: '更新成功',
          //           type: 'success',
          //           duration: 2000
          //         })
          //     })
          //     .catch( err => {
          //         this.$notify({
          //           title: '失败',
          //           message: err,
          //           type: 'success',
          //           duration: 2000
          //         })
          //     })
          //   }
          // })
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

