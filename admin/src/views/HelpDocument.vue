<template>
  <el-container style="height:calc( 100vh - 64px )" class="nav">
    <el-aside width="400px" style="overflow-y:scroll">
      <el-menu router unique-opened :default-active="$route.path">
        <el-submenu v-for="(item , index) in helpDocument.data" :key="index" :index="item._id">
          <template slot="title">{{item.name}}</template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(d,i) in item.articleList"
              :key="'s'+i"
              :index="`/help/${helpDocument._id}/${d._id}`"
            >{{d.title}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <div v-if="!$route.params.article_id">{{helpDocument.desc}}</div>
      <router-view :key="$route.params.article_id"></router-view>
    </el-main>
  </el-container>
</template>


<style>
.nav .el-submenu .nav .el-menu-item,
.nav .el-menu-item,
.nav .el-submenu__title {
  height: 30px;
  line-height: 30px;
}
.nav .el-menu-item-group__title {
  padding: 0;
}
</style>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      helpDocument: {},
      article: {
        body: ""
      }
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`rest/documents/${this.id}`);
      this.helpDocument = res.data;
    },
    async getArticle(id) {
      const res = await this.$http.get(`rest/articles/${id}`);
      this.article = res.data;
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>