<template>
  <el-row class="h-100">
    <el-col :span="8">
      <el-form :model="model" class="demo-form-inline" label-width="80px">
        <el-form-item label="文档名称">
          <el-input v-model="model.name" placeholder="文档名称"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" rows="10" v-model="model.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">{{model._id?'保存编辑':'新增文档'}}</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="16">
      <el-table :data="items" max-height="600">
        <!-- <el-table-column prop="_id" label="ID" width="240"></el-table-column> -->
        <el-table-column label="文档名称">
          <template slot-scope="scope">
            <el-tooltip placement="right" effect="light">
              <div slot="content" style="max-width:200px">{{scope.row.desc}}</div>
              <span>{{scope.row.name}}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
const model = {
  name: "",
  desc: ""
};
export default {
  data() {
    return {
      items: [],
      model: Object.assign({}, model)
    };
  },
  methods: {
    async save() {
      if (this.model._id) {
        await this.$http.put(`rest/documents/${this.model._id}`, this.model);
      } else {
        await this.$http.post("rest/documents", this.model);
      }
      console.log(Object.assign({}, model));

      this.model = Object.assign({}, model);
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
      this.model = row;
    }
  },
  created() {
    this.fetch();
  }
};
</script>

