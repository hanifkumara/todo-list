import Vue from 'vue'
import VueRouter from 'vue-router'
import Swal from 'sweetalert2'
import store from '../store/index'
import Auth from '../views/Auth/Auth.vue'
import Login from '../views/Auth/Login.vue'
import Signup from '../views/Auth/Signup.vue'
import Admin from '../views/Admin/Admin.vue'
import Home from '../views/Admin/Home.vue'
import ManageLabels from '../views/Admin/ManageLabels.vue'
import ManageUsers from '../views/Admin/ManageUsers.vue'
import AddLabels from '../views/Admin/AddLabels.vue'
import AddUsers from '../views/Admin/AddUsers.vue'
import User from '../views/User/User.vue'
import HomeUser from '../views/User/HomeUser.vue'
import Todos from '../views/Todos/Todos.vue'
import HomeTodos from '../views/Todos/Home.vue'
import AddTodo from '../views/Todos/AddTodo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth,
    redirect: '/login',
    meta: { requiresVisitor: true },
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
    meta: { requiresAuth: true },
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
    path: '/user',
    name: 'User',
    component: User,
    redirect: '/user/home-user',
    meta: { requiresAuth: true },
    children: [
      {
        path: 'home-user',
        name: 'HomeUser',
        component: HomeUser
      }
    ]
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos,
    redirect: '/todos/home',
    meta: { requiresAuth: true },
    children: [
      {
        path: 'home',
        name: 'HomeTodos',
        component: HomeTodos
      },
      {
        path: 'add-todo',
        name: 'AddTodo',
        component: AddTodo
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
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLogin) {
      Swal.fire(
        'Must be logged in!!',
        '',
        'error'
      )
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      Swal.fire(
        'You already logged in!!',
        '',
        'warning'
      )
      next({
        path: '/admin/home'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
