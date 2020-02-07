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
import Article from '../views/Article.vue'
import HelpDocument from '../views/HelpDocument.vue'
import Login from '../views/Login.vue'
import AdminUserList from '../views/AdminUserList.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'Login', component: Login, meta: { isPublic: true } },
  {
    path: '/',
    name: 'main',
    component: Main,
    redirect: 'manage/documents',
    children: [
      { path: 'setting', component: Words },
      {
        path: 'help/:id', component: HelpDocument, props: true,
        children: [
          { path: ':article_id', component: Article, props: true, }
        ]
      },
      {
        path: 'manage',
        component: Manage,
        redirect: 'manage/documents',
        children: [
          { path: 'documents', component: DocumentList },
          { path: 'categories', component: CategoryList },
          { path: 'users', component: AdminUserList },
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
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next()
})
export default router
