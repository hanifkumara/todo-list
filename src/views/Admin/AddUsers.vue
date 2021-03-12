<template>
  <div>
    <div class="wrapper-card mt-2">
      <h3>Add Users</h3>
      <form @submit.prevent="handleAddUser">
        <Input name="Username" forId="username" placeholder="Please input your username" type="text" @input="username = $event.target.value"/>
        <Input name="Email" forId="email" placeholder="Please input your email" type="text" @input="email = $event.target.value"/>
        <Input icon="ic_sharp-remove-red-eye.png" name="Password" forId="password" placeholder="Please input your password" type="password" @input="password = $event.target.value"/>
        <div class="d-flex justify-content-end">
          <Button title="Add User" color="btn btn-success" type="submit"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'AddUsers',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  components: {
    Input,
    Button
  },
  methods: {
    ...mapActions(['signup']),
    handleAddUser () {
      const payload = {
        username: this.username,
        email: this.email,
        confirmation: 1,
        password: this.password
      }
      this.signup(payload)
        .then(() => {
          Swal.fire('Add user success', '', 'success')
          this.$router.push({ name: 'ManageUsers' })
        }).catch((err) => {
          Swal.fire(err, '', 'error')
        })
    }
  }
}
</script>

<style scoped>
.wrapper-card{
  width: 40%;
}
</style>
