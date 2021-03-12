import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '' || localStorage.getItem('token'),
    usersConfirmed: [],
    usersNotConfirmed: [],
    getLabels: [],
    getTodos: [],
    myProfile: {}
  },
  mutations: {
    SET_AUTH (state, payload) {
      state.token = payload.token
    },
    REMOVE_TOKEN (state) {
      state.token = null
    },
    SET_USERS_CONFIRMED (state, payload) {
      state.usersConfirmed = payload
    },
    SET_USERS_NOT_CONFIRMED (state, payload) {
      state.usersNotConfirmed = payload
    },
    SET_LABELS (state, payload) {
      state.getLabels = payload
    },
    SET_TODOS (state, payload) {
      state.getTodos = payload
    },
    SET_MY_PROFILE (state, payload) {
      state.myProfile = payload
    }
  },
  actions: {
    setMyProfile (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/users/my-profile`)
          .then(res => {
            const { result } = res.data
            context.commit('SET_MY_PROFILE', result[0])
            resolve(result)
          }).catch((err) => {
            reject(err.response.data.err.message)
          })
      })
    },
    setGetLabels (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/labels`)
          .then(res => {
            const { result } = res.data
            context.commit('SET_LABELS', result)
            resolve(result)
          }).catch((err) => {
            reject(err.response.data.err.message)
          })
      })
    },
    setGetTodos (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/todos`)
          .then(res => {
            const { result } = res.data
            context.commit('SET_TODOS', result)
            resolve(result)
          }).catch((err) => {
            reject(err.response.data.err.message)
          })
      })
    },
    addTodos (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/todos`, payload)
          .then(res => {
            const { result } = res.data
            resolve(result)
          }).catch((err) => {
            reject(err.response.data.err.message)
          })
      })
    },
    deleteTodos (context, idTodos) {
      return new Promise((resolve, reject) => {
        axios.delete(`${process.env.VUE_APP_SERVICE_API}/todos/${idTodos}`)
          .then(res => {
            const { result } = res.data
            resolve(result)
          }).catch((err) => {
            reject(err.response.data.err.message)
          })
      })
    },
    setUsersConfirmed (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/users/confirmed`)
          .then(res => {
            const { result } = res.data
            context.commit('SET_USERS_CONFIRMED', result)
            resolve(result)
          }).catch((err) => {
            reject(err.response.data.err.message)
          })
      })
    },
    setUsersNotConfirmed (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/users/not-confirmed`)
          .then(res => {
            const { result } = res.data
            context.commit('SET_USERS_NOT_CONFIRMED', result)
            resolve(result)
          }).catch((err) => {
            reject(err.response.data.err.message)
          })
      })
    },
    update (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_SERVICE_API}/users`, payload)
          .then(res => {
            const { result } = res.data
            resolve(result)
          }).catch((err) => {
            reject(err.response.data.err.message)
          })
      })
    },
    deleteUser (context, idUser) {
      return new Promise((resolve, reject) => {
        axios.delete(`${process.env.VUE_APP_SERVICE_API}/users/${idUser}`)
          .then(res => {
            const { result } = res.data
            resolve(result)
          }).catch((err) => {
            reject(err.response.data.err.message)
          })
      })
    },
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/auth/login`, payload)
          .then(res => {
            const { result } = res.data
            localStorage.setItem('id', result.id)
            localStorage.setItem('token', result.token)
            localStorage.setItem('role', result.role)
            const payload = {
              id: result.id,
              token: result.token
            }
            context.commit('SET_AUTH', payload)
            resolve(result)
          })
          .catch(err => {
            reject(err.response.data.err.message)
          })
      })
    },
    signup (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/auth/signup`, payload)
          .then(res => {
            const { result } = res.data
            resolve(result)
          })
          .catch(err => {
            reject(err.response.data.err.message)
          })
      })
    },
    logout (context, payload) {
      localStorage.clear()
      context.commit('REMOVE_TOKEN')
      Swal.fire(
        'Logout Sucess!',
        'See you again!',
        'success'
      )
      router.push({ name: 'Auth' })
    },
    interceptorRequest (context) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    interceptorResponse (context) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        if (error.response.status === 401) {
          if (error.response.data.err.message === 'Invalid Token') {
            Swal.fire(error.response.data.err.message, 'Please login again', 'error')
            localStorage.clear()
            context.commit('REMOVE_TOKEN')
            router.push({ name: 'Login' })
          } else if (error.response.data.err.message === 'Token Expired') {
            Swal.fire(error.response.data.err.message, 'Please login again', 'error')
            localStorage.clear()
            context.commit('REMOVE_TOKEN')
            router.push({ name: 'Auth' })
          }
        }
        return Promise.reject(error)
      })
    }
  },
  getters: {
    isLogin (state) {
      return state.token !== null
    },
    usersConfirmed (state) {
      return state.usersConfirmed
    },
    usersNotConfirmed (state) {
      return state.usersNotConfirmed
    },
    getLabels (state) {
      return state.getLabels
    },
    getTodos (state) {
      return state.getTodos
    },
    myProfile (state) {
      return state.myProfile
    }
  },
  modules: {
  }
})
