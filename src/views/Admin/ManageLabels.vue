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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'ManageLabels',
  components: {
    Button
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
