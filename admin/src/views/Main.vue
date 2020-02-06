<template>
  <el-container style="height:100vh">
    <el-header style="display:flex">
      <div style="width:200px">
        <img src="../assets/logo.png" style="height:55px" />
      </div>
      <div style="flex:1;display:flex;justify-content: flex-end;">
        <!-- <div style="width:300px">
          <el-input placeholder="请输入内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>-->
        <div>
          <el-menu class="el-menu-demo" mode="horizontal" router>
            <!-- :default-active="activeIndex" -->
            <!-- @select="handleSelect" -->
            <el-menu-item
              index="/manage/documents"
              :style="{'border-bottom': $route.path.includes('manage')?'2px solid #409EFF':''}"
            >内容管理</el-menu-item>
            <el-submenu
              index="2"
              :style="{'border-bottom': $route.path.includes('help')?'2px solid #409EFF':''}"
            >
              <template slot="title">帮助列表</template>
              <el-menu-item
                :index="'/help/'+item._id"
                v-for="(item,index) in helpList"
                :key="index"
              >{{item.name}}</el-menu-item>
              <!-- <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>-->
            </el-submenu>
            <el-menu-item index="/setting">系统设置</el-menu-item>
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px">{{curUser.name}}</i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu>
        </div>
      </div>
    </el-header>
    <router-view :key="$route.path"></router-view>
  </el-container>
</template>


<style>
.el-header {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  color: #333;
  line-height: 60px;
  z-index: 1;
}

.el-aside {
  color: #333;
}

.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: 0px solid;
}
</style>

<script>
export default {
  data() {
    const item = {
      name: "吴旭彬"
    };
    return {
      curUser: item,
      helpList: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/documents");
      this.helpList = res.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>