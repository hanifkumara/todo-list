import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth/Auth.vue'
import Login from '../views/Auth/Login.vue'
import Signup from '../views/Auth/Signup.vue'
import Admin from '../views/Admin/Admin.vue'
import Home from '../views/Admin/Home.vue'
import ManageLabels from '../views/Admin/ManageLabels.vue'
import ManageUsers from '../views/Admin/ManageUsers.vue'
import AddLabels from '../views/Admin/AddLabels.vue'
import AddUsers from '../views/Admin/AddUsers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth,
    redirect: '/login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'signup',
        name: 'Signup',
        component: Signup
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    redirect: '/admin/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'manage-labels',
        name: 'ManageLabels',
        component: ManageLabels
      },
      {
        path: 'users',
        name: 'ManageUsers',
        component: ManageUsers
      },
      {
        path: 'add-labels',
        name: 'AddLabels',
        component: AddLabels
      },
      {
        path: 'add-users',
        name: 'AddUsers',
        component: AddUsers
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
