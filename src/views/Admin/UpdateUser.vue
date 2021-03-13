<template>
  <div>
    <h4 class="mt-2">UpdateUsers</h4>
    <div class="wrapper-card-update">
      <form @submit.prevent="handleUpdate">
        <Input name="Username" :value="getUserId.username" @input="username = $event.target.value" forId="username" type="text"/>
        <Input name="Email" :value="getUserId.email" @input="email = $event.target.value" forId="email" type="text"/>
        <Button title="Update User" color="btn btn-primary"/>
      </form>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input'
import Button from '@/components/Button'
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'UpdateUsers',
  components: {
    Input,
    Button
  },
  data () {
    return {
      username: '',
      email: ''
    }
  },
  mounted () {
    this.setUserById(this.$route.params.idUser)
      .then((result) => {
        console.log(result)
      }).catch((err) => {
        console(err)
      })
  },
  methods: {
    ...mapActions(['setUserById', 'update']),
    handleUpdate () {
      const data = {
        idUser: this.$route.params.idUser,
        username: this.username,
        email: this.email
      }
      this.update(data)
        .then((result) => {
          this.$router.push({ name: 'ManageUsers' })
          Swal.fire(result.message, '', 'success')
        }).catch((err) => {
          Swal.fire(err, '', 'error')
        })
    }
  },
  computed: {
    ...mapGetters(['getUserId'])
  }
}
</script>

<style scoped>
.wrapper-card-update{
  width: 50%;
}
</style>
