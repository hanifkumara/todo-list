<template>
  <div>
    <form @submit.prevent="signup">
      <h4>Signup</h4>
      <Input name="Username" forId="username" placeholder="Please input your username" type="text" />
      <Input name="Email" forId="email" placeholder="Please input your email" type="text" />
      <Input icon="ic_sharp-remove-red-eye.png" name="Password" forId="password" placeholder="Please input your password" type="password" />
      <div class="d-flex justify-content-end">
        <Button title="Signup" color="btn btn-success"/>
      </div>
    </form>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'Signup',
  components: {
    Input,
    Button
  },
  methods: {
    signup () {
      console.log('signup')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
