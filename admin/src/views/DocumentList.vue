<template>
  <div>
    <el-form :inline="true" :model="model" class="demo-form-inline">
      <el-form-item label="文档名称">
        <el-input v-model="model.name" placeholder="文档名称"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">{{id?'保存编辑':'新增文档'}}</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column prop="name" label="文档名称"></el-table-column>
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
      model: {
        name: ""
      },
      id: null
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/documents/${this.id}`, this.model);
        this.id = null;
      } else {
        await this.$http.post("rest/documents", this.model);
      }
      this.model.name = "";
      this.$message({
        type: "success",
        message: "保存成功"
      });
      this.fetch();
    },
    async fetch() {
      const res = await this.$http.get("rest/documents");
      this.items = res.data;
    },
    remove(row) {
      this.$confirm(`是否确定要删除文档 "${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`rest/documents/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    },
    edit(row) {
      this.model.name = row.name;
      this.id = row._id;
    }
  },
  created() {
    this.fetch();
  }
};
</script>

