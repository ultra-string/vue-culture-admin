<template>
  <div class="tab-container">
    <el-tag>mounted times ：{{createdTimes}}</el-tag>
    <el-tabs style='margin-top:15px;' v-model="activeName" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key='item.key' :name="item.key">
        <keep-alive>
          <tab-pane v-if='activeName==item.key' :type='item.key' @create='showCreatedTimes'></tab-pane>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tabPane from './components/tabPane'

export default {
  name: 'tab',
  components: { tabPane },
  data() {
    return {
      tabMapOptions: [
        { label: '前台用户', key: 'CN' },
        { label: '后台用户', key: 'US' },
      ],
      activeName: 'CN',
      createdTimes: 0
    }
  },
  created() {
    console.log(this.$route.path)
    // 用户列表
    this.$get('/admin/user/list')
        .then(res => {
          // this.$store.dispatch('StoreUser', res.data);
          // this.$router.push({path: '/'});
        })
        .catch( err => {
          // this.$router.push({path: '/'});
        })

    // 一级标题二级标题  /titleList/oneTitleList
    this.$get('/admin/titleList/oneTitleList')
        .then(res => {
          // this.$store.dispatch('StoreUser', res.data);
          // this.$router.push({path: '/'});
        })
        .catch( err => {
          // this.$router.push({path: '/'});
        })


    // 二级标题
    this.$post('/admin/titleList/twoTitleList', {
        id: 2
    })
    .then( res => {
      console.log(res)
    })

    


    // 添加和修改文章   /body/articlePublish
    this.$post(`/admin/body/articlePublish`, {
       "author": "jason",
        "bodyTitle": "新文章",
        "frontViewLink": "",     //  主视图的url
        "id": 0,                       // 文章id   0--首次发布   修改---文章id
        "keyword": "新文章",
        "listViewLink": "",      // 列表图的url
        "mainBody": "<div>我是一个新文章</div>",          // html     
        "oneId": 2,                   
        "summary": "新文章",          // 摘要
        "thumbnailLink": "",    // 缩略图的url
        "twoId": 1,
        "videoLink": ""         // 视频 url 
    })
    .then( res => {
      console.log(res)
    })


    // 浮窗配置 /titleLink/search
    this.$post('/admin/body/articleSearch', {
        "author": "",       //  展示页面： ''   ,   搜索 ： 名称
        "bodyTitle": "",    //  标题
        "endTime": "",      // 结束时间
        "keywords": "新文章",     // 开始时间
        "oneId": 2,               // 一级标题    必填
        "pageNo": 1,              // 页数
        "pageSize": 10,            // 查询条数
        "startTime": "",    // 开始时间  YY-MM-DD hh:mm:ss
        "status": 1,              // 0--下架  1--上架     必填
        "twoId": 1    // 二级标题啊id    必填
    })
    .then( res => {
      // "serialNumber": 1,     // 序列号
			// "oneId": 2,        
			// "twoId": 1,      
			// "titleId": 1,          //文章id
			// "bodyTitle": "时间嗲是的风景",     
			// "author": "史蒂夫纳什",    
			// "createTime": "2018-05-07",    
			// "updateTime": "2018-05-19",    
			// "status": 1            // 上下架
      console.log(res)
    })


    // 友情链接 发布  /friendLink/publish
    this.$post('/admin/friendLink/publish', {
         "img_url": "",         // 图片url
        "name": "百度广告",
        "url": "https://www.baidu.com",       // 广告的地址
        "id": 0        // 发布--0   修改--正常id
    })
    .then( res => {
      // "serialNumber": 1,     // 序列号
			// "oneId": 2,        
			// "twoId": 1,      
			// "titleId": 1,          //文章id
			// "bodyTitle": "时间嗲是的风景",     
			// "author": "史蒂夫纳什",    
			// "createTime": "2018-05-07",    
			// "updateTime": "2018-05-19",    
			// "status": 1            // 上下架
      console.log(res)
    })
    // 友情链接 查询
    this.$post('/admin/friendLink/search', {
        "pageNo": 1,
        "pageSize": 10
    })
    .then( res => {
      // "serialNumber": 1,     // 序列号
			// "oneId": 2,        
			// "twoId": 1,      
			// "titleId": 1,          //文章id
			// "bodyTitle": "时间嗲是的风景",     
			// "author": "史蒂夫纳什",    
			// "createTime": "2018-05-07",    
			// "updateTime": "2018-05-19",    
			// "status": 1            // 上下架
      console.log(res)
    })


    //注释
    this.$post(`/admin/titleLink/search`, {
      type: 8 ,  // 0:新媒体 1:首页头条配置 2: 首页广告 3:二维码 4:banner 5:专题策划一组 6:专题策划二组 7:专题策划广告 8:浮窗配置
      pageNo: 1,  // 页数 
      pageSize: 10   // 请求多少条
    })
    .then( res => {
      console.log(res)
    })


    // 添加图片  /file/upload/image
     this.$post(`/admin/titleLink/search`, {
      type: 8 ,  // 0:新媒体 1:首页头条配置 2: 首页广告 3:二维码 4:banner 5:专题策划一组 6:专题策划二组 7:专题策划广告 8:浮窗配置
      pageNo: 1,  // 页数 
      pageSize: 10   // 请求多少条
    })
    .then( res => {
      console.log(res)
    })
    // 图片管理
    // 图片查询   /file/image    type:0-全部，1-当前用户
    this.$get('/admin/file/image?type=1&pageNo=1&pageSize=10')
        .then(res => {
          // this.$store.dispatch('StoreUser', res.data);
          // this.$router.push({path: '/'});
        })
        .catch( err => {
          // this.$router.push({path: '/'});
        })
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  }
}
</script>

<style scoped>
  .tab-container{
    margin: 30px;
  }
</style>
