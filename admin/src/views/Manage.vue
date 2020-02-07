<template>
  <el-container style="height:calc( 100vh - 64px )">
    <el-aside width="150px">
      <el-menu class="el-menu-vertical-demo" style="height:100%" router>
        <el-menu-item
          index="/manage/documents"
          :class="{'is-active':$route.path=='/manage/documents'}"
        >
          <i class="el-icon-receiving"></i>
          <span slot="title">文档列表</span>
        </el-menu-item>
        <el-menu-item
          index="/manage/categories"
          :class="{'is-active':$route.path=='/manage/categories'}"
        >
          <i class="el-icon-notebook-1"></i>
          <span slot="title">分类列表</span>
        </el-menu-item>
        <el-menu-item
          index="/manage/articles/list"
          :class="{'is-active':$route.path=='/manage/articles/list'}"
        >
          <i class="el-icon-document"></i>
          <span slot="title">文章列表</span>
        </el-menu-item>
        <el-menu-item
          index="/manage/articles/create"
          :class="{'is-active':$route.path=='/manage/articles/create'}"
        >
          <i class="el-icon-document-add"></i>
          <span slot="title">新建文章</span>
        </el-menu-item>
        <el-menu-item index="5" disabled>
          <i class="el-icon-chat-square"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/manage/users" :class="{'is-active':$route.path=='/manage/users'}">
          <i class="el-icon-user"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>


<style>
.el-menu-item.is-active {
  background-color: #ecf5ff;
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>