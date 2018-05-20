<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      router
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF">
      <!-- <sidebar-item :routes="permission_routers"></sidebar-item> -->
        <el-menu-item index="/userCenter">
          <i class="el-icon-menu"></i>
          <span slot="title">用户信息</span>
        </el-menu-item>
        <!-- 栏目管理 -->
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>栏目管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/example/table/tree-table">网站结构</el-menu-item>
            <el-menu-item index="/floatingWindow/index">浮窗配置</el-menu-item>
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
            <el-menu-item index="/addver/index">文章管理</el-menu-item>
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

    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
