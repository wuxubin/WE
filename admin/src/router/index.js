import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Words from '../views/Words.vue'
import Manage from '../views/Manage.vue'
import CategoryList from '../views/CategoryList.vue'

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
        children: [{ path: 'categories', component: CategoryList },
        ]
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
