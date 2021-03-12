<template>
  <div>
    <div class="wrapper-list d-flex justify-content-between mt-5">
      <h5>List Labels</h5>
      <router-link :to="{name: 'AddLabels'}">
        <Button title="Add Labels" color="btn btn-primary" />
      </router-link>
    </div>
    <div class="wrapper-table mt-2">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Label</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in getLabels" :key="data.id">
            <th scope="row">{{index+1}}</th>
            <td>{{data.label}}</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ManageLabels',
  components: {
    Button
  },
  mounted () {
    this.setGetLabels()
  },
  methods: {
    ...mapActions(['setGetLabels'])
  },
  computed: {
    ...mapGetters(['getLabels'])
  }
}
</script>

<style scoped>
.wrapper-list{
  width: 50%;
}
.wrapper-table{
  width: 50%;
}
</style>
