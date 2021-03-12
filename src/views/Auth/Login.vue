<template>
  <div>
    <form @submit.prevent="handleLogin">
      <h4>Login</h4>
      <Input name="Email" forId="email" placeholder="Please input your email" type="text" @input="email= $event.target.value" />
      <Input icon="ic_sharp-remove-red-eye.png" name="Password" forId="password" placeholder="Please input your password" type="password" @input="password= $event.target.value"/>
      <div class="d-flex justify-content-end">
        <Button title="Login" color="btn btn-success" type="submit"/>
      </div>
    </form>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    Input,
    Button
  },
  methods: {
    ...mapActions(['login']),
    handleLogin () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.login(payload)
        .then((result) => {
          if (result.role === 'admin') {
            this.$router.push({ name: 'Admin' })
          } else {
            this.$router.push({ name: 'HomeUser' })
          }
          Swal.fire('Login Success', '', 'success')
        }).catch((err) => {
          Swal.fire(err, '', 'error')
        })
    }
  }
}
</script>

<style scoped>
</style>
