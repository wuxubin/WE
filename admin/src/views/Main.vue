<template>
  <!-- <el-container style="height: 100vh;">
    <el-aside width="80px" style="background-color: #292c31;color:white">
      <div>报表字段</div>
      <div>运营管理</div>
      <div>系统设置</div>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{item.name}}</span>
    </el-aside>
    <el-container>
      <router-view :key="$route.path"></router-view>
    </el-container>
  </el-container>-->
  <el-container style="height:100vh">
    <el-header>
      <el-row :gutter="20">
        <el-col :span="8">
          <img src="../assets/logo.png" style="height:55px" />logo
        </el-col>
        <el-col :span="16">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
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
</style>

<script>
export default {
  data() {
    const item = {
      name: "吴旭彬"
    };
    return {
      item: item
    };
  }
};
</script>