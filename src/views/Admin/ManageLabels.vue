<template>
  <div>
    <div class="wrapper-list d-flex justify-content-between mt-5">
      <h5>List Labels</h5>
      <router-link :to="{name: 'AddLabels'}">
        <Button title="Add Labels" color="btn btn-primary" />
      </router-link>
    </div>
    <div class="empty-label" v-if="getLabels.length < 1">
      Empty Label
    </div>
    <div v-else>
      <div class="wrapper-table mt-2">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Label</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, index) in getLabels" :key="data.id">
              <th scope="row">{{index+1}}</th>
              <td>{{data.label}}</td>
              <td>{{data.description}}</td>
              <td class="d-flex">
                <div class="badge badge-warning mr-2" @click="pushToUpdate(data.id)">Edit</div>
                <div class="badge badge-danger" @click="handleDelete(data.id)">Delete</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'ManageLabels',
  components: {
    Button
  },
  mounted () {
    this.setGetLabels()
  },
  methods: {
    ...mapActions(['setGetLabels', 'deleteLabel']),
    handleDelete (idLabel) {
      this.deleteLabel(idLabel)
        .then((result) => {
          Swal.fire(result.message, '', 'success')
          this.setGetLabels()
        }).catch((err) => {
          Swal.fire(err, '', 'error')
        })
    },
    pushToUpdate (idLabel) {
      this.$router.push({ name: 'UpdateLabels', params: { idLabel } })
    }
  },
  computed: {
    ...mapGetters(['getLabels'])
  }
}
</script>

<style scoped>
.badge{
  cursor: pointer;
}
</style>
