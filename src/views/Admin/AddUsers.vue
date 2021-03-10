<template>
  <div>
    <div class="wrapper-card mt-2">
      <h3>Add Users</h3>
      <Input name="Username" forId="username" placeholder="Please input your username" type="text" />
      <Input name="Email" forId="email" placeholder="Please input your email" type="text" />
      <Input icon="ic_sharp-remove-red-eye.png" name="Password" forId="password" placeholder="Please input your password" type="password" />
      <div class="d-flex justify-content-end">
        <Button title="Add User" color="btn btn-success"/>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'AddUsers',
  components: {
    Input,
    Button
  }
}
</script>

<style scoped>
.wrapper-card{
  width: 40%;
}
</style>
