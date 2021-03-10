<template>
  <div>
    <form @submit.prevent="login">
      <h4>Login</h4>
      <Input name="Email" forId="email" placeholder="Please input your email" type="text" />
      <Input icon="ic_sharp-remove-red-eye.png" name="Password" forId="password" placeholder="Please input your password" type="password" />
      <div class="d-flex justify-content-end">
        <Button title="Login" color="btn btn-success"/>
      </div>
    </form>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'Login',
  components: {
    Input,
    Button
  },
  methods: {
    Login () {
      console.log('ini login')
    }
  }
}
</script>

<style scoped>
</style>
