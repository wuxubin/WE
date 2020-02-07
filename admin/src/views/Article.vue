<template>
  <div class="ql-editor" v-html="article.body"></div>
</template>


<style>
</style>

<script>
export default {
  props: {
    article_id: {}
  },
  data() {
    return {
      article: {
        body: ""
      }
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.article_id}`);
      this.article = res.data;
    }
  },
  created() {
    this.article_id && this.fetch();
  }
};
</script>