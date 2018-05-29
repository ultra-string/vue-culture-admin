<template>
  <div class="tab-container">
    <!-- <el-tag>mounted times ：{{createdTimes}}</el-tag> -->
    <el-tabs style='margin-top:15px;' v-model="activeName" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key='item.key' :name="item.key">
        <keep-alive>
          <tab-pane v-if='activeName==item.key' :info='item.info' @create='showCreatedTimes'></tab-pane>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tabPane from './components/infoTab'

export default {
  name: 'tab',
  components: { tabPane },
  data() {
    return {
      tabMapOptions: [
        { label: '联系我们', key: 'CN', info: {mode: 1, oneId:100, twoId:1000} },
        { label: '友情链接', key: 'US', info: {mode: 2} },
        { label: '政策隐私', key: 'JP', info: {mode: 1, oneId:100, twoId:1001} },
        { label: '使用条款', key: 'SB',info: {mode: 1, oneId:100, twoId:1002}},
        { label: '公告', key: 'CD', info: {mode: 1, oneId:100, twoId:1003} },
        { label: '招聘', key: 'FK', info: {mode: 1, oneId:100, twoId:1004}}
      ],
      activeName: 'CN',
      createdTimes: 0
    }
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
