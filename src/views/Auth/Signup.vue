<template>
  <div>
    <form @submit.prevent="handleSignup">
      <h4>Signup</h4>
      <Input name="Username" forId="username" placeholder="Please input your username" type="text" @input="username = $event.target.value"/>
      <Input name="Email" forId="email" placeholder="Please input your email" type="text" @input="email = $event.target.value"/>
      <Input icon="ic_sharp-remove-red-eye.png" name="Password" forId="password" placeholder="Please input your password" type="password" @input="password = $event.target.value"/>
      <div class="d-flex justify-content-end">
        <Button title="Signup" color="btn btn-success" type="submit"/>
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
  name: 'Signup',
  components: {
    Input,
    Button
  },
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['signup']),
    handleSignup () {
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.signup(payload)
        .then((result) => {
          this.$router.push({ name: 'Login' })
          Swal.fire(result.message, 'please wait for confirmation account by admin', 'success')
        }).catch((err) => {
          Swal.fire(err, '', 'error')
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
