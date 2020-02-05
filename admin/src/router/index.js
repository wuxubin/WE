import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Words from '../views/Words.vue'
import Manage from '../views/Manage.vue'
import CategoryList from '../views/CategoryList.vue'
import DocumentList from '../views/DocumentList.vue'
import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: 'words', component: Words },
      {
        path: 'manage',
        component: Manage,
        children: [
          { path: 'documents', component: DocumentList },
          { path: 'categories', component: CategoryList },
          { path: 'articles/create', component: ArticleEdit },
          { path: 'articles/edit/:id', component: ArticleEdit, props: true },
          { path: 'articles/list', component: ArticleList },
        ]
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
