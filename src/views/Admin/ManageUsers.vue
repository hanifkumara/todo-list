<template>
  <div class="mt-2">
    <div class="wrapper-title">
      <h3>Manage Users</h3>
      <router-link :to="{name: 'AddUsers'}">
        <Button title="Add Usrs" color="btn btn-primary"/>
      </router-link>
    </div>
    <div class="row mt-4">
      <div class="col-md-6">
        <h5>Already Confirmed</h5>
        <div class="wrapper-table mt-2">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in usersConfirmed" :key="data.id">
                <th scope="row">{{index+1}}</th>
                <td>{{data.username}}</td>
                <td>{{data.email}}</td>
                <td>
                  <div class="badge badge-danger" @click="handleDelete(data.id)">Delete</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6">
        <h5>Not Confirmed Yet</h5>
        <div class="wrapper-table mt-2">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in usersNotConfirmed" :key="data.id">
                <th scope="row">{{index+1}}</th>
                <td>{{data.username}}</td>
                <td>{{data.email}}</td>
                <td>
                  <div class="badge badge-danger" @click="handleDelete(data.id)">Delete</div>
                  <div class="badge badge-success" @click="confirmation(data.id)">Confirmed</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'ManageUsers',
  components: {
    Button
  },
  methods: {
    ...mapActions(['setUsersConfirmed', 'setUsersNotConfirmed', 'update', 'deleteUser']),
    confirmation (idUser) {
      console.log(idUser)
      this.update({ confirmation: 1, idUser })
        .then((result) => {
          this.setUsersConfirmed()
          this.setUsersNotConfirmed()
          Swal.fire(result.message, '', 'success')
        }).catch((err) => {
          Swal.fire(err, '', 'errror')
        })
    },
    handleDelete (idUser) {
      this.deleteUser(idUser)
        .then((result) => {
          this.setUsersConfirmed()
          this.setUsersNotConfirmed()
          Swal.fire(result.message, '', 'success')
        }).catch((err) => {
          Swal.fire(err, '', 'errror')
        })
    }
  },
  mounted () {
    this.setUsersConfirmed()
    this.setUsersNotConfirmed()
  },
  computed: {
    ...mapGetters(['usersConfirmed', 'usersNotConfirmed'])
  }
}
</script>

<style scoped>
.wrapper-title{
  display: flex;
  justify-content: space-between;
  width: 50%;
}
.badge{
  cursor: pointer;
}
</style>
