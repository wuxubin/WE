<template>
  <div>
    <!-- <h1>分类列表</h1> -->
    <el-form :inline="true" :model="model" class="demo-form-inline">
      <el-form-item label="所属文档">
        <el-select v-model="model.parent">
          <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类名称">
        <el-input v-model="model.name" placeholder="分类名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">{{id?'保存编辑':'新增分类'}}</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column prop="parent.name" label="所属文档"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      parents: [],
      model: {
        name: ""
      },
      id: null
    };
  },
  methods: {
    async save() {
      console.log("save", this.model);
      if (this.id) {
        await this.$http.put(`categories/${this.id}`, this.model);
        this.id = null;
      } else {
        await this.$http.post("categories", this.model);
      }
      this.model.name = "";
      this.$message({
        type: "success",
        message: "保存成功"
      });
      this.fetch();
    },
    async fetch() {
      const res = await this.$http.get("categories");
      this.items = res.data;
    },
    remove(row) {
      this.$confirm(`是否确定要删除分类 "${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`categories/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    },
    edit(row) {
      console.log("row", row);
      this.model.name = row.name;
      this.id = row._id;
      // return
      // this.$confirm(`是否确定要删除分类 "${row.name}"`, "提示", {
      //   confirmButtonText: "确定",
      //   cancelButtonText: "取消",
      //   type: "warning"
      // }).then(async () => {
      //   await this.$http.delete(`categories/${row._id}`);
      //   this.$message({
      //     type: "success",
      //     message: "删除成功!"
      //   });
      //   this.fetch();
      // });
    },
    async fetchParents() {
      const res = await this.$http.get(`categories`);
      this.parents = res.data;
    }
  },
  created() {
    this.fetch();
    this.fetchParents();
    console.log("ceui");
  }
};
</script>

