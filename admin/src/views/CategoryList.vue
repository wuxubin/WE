<template>
  <div>
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
        <el-button type="primary" @click="save">{{model._id?'保存编辑':'新增分类'}}</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="items">
      <!-- <el-table-column prop="_id" label="ID" width="240"></el-table-column> -->
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
const model = {
  parent: null,
  name: ""
};
export default {
  data() {
    return {
      items: [],
      parents: [],
      model: Object.assign({}, model),
    };
  },
  methods: {
    async save() {
      console.log("save", this.model);
      if (this.model._id) {
        await this.$http.put(`rest/categories/${this.model._id}`, this.model);
      } else {
        await this.$http.post("rest/categories", this.model);
      }
      this.model = Object.assign({}, model);
      this.$message({
        type: "success",
        message: "保存成功"
      });
      this.fetch();
    },
    async fetch() {
      const res = await this.$http.get("rest/categories");
      this.items = res.data;
    },
    remove(row) {
      this.$confirm(`是否确定要删除分类 "${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`rest/categories/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    },
    edit(row) {
      this.model =Object.assign({}, row) ;
      this.model.parent = row.parent._id;
    },
    async fetchParents() {
      const res = await this.$http.get(`rest/documents`);
      this.parents = res.data;
    }
  },
  created() {
    this.fetch();
    this.fetchParents();
  }
};
</script>

