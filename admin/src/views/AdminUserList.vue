<template>
  <div>
    <el-form :inline="true" :model="model" class="demo-form-inline">
      <el-form-item label="账号">
        <el-input v-model="model.username" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">{{id?'保存编辑':'新增用户'}}</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="items">
      <!-- <el-table-column prop="_id" label="ID" width="240"></el-table-column> -->
      <el-table-column prop="username" label="用户名称"></el-table-column>
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
        username: "",
        password: ""
      },
      id: null
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/admin_users/${this.id}`, this.model);
        this.id = null;
      } else {
        await this.$http.post("rest/admin_users", this.model);
      }
      this.model = {
        username: "",
        password: ""
      };
      this.$message({
        type: "success",
        message: "保存成功"
      });
      this.fetch();
    },
    async fetch() {
      const res = await this.$http.get("rest/admin_users");
      this.items = res.data;
    },
    remove(row) {
      this.$confirm(`是否确定要删除用户 "${row.username}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`rest/admin_users/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    },
    edit(row) {
      this.model.username = row.username;
      this.id = row._id;
    }
  },
  created() {
    this.fetch();
  }
};
</script>

