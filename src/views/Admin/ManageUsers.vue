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
                <th scope="col">Label</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>
                  <div class="badge badge-warning mr-2">Edit</div>
                  <div class="badge badge-danger">Delete</div>
                </td>
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
      <div class="col-md-6">
        <h5>Not Confirmed Yet</h5>
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
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'ManageUsers',
  components: {
    Button
  }
}
</script>

<style scoped>
.wrapper-title{
  display: flex;
  justify-content: space-between;
  width: 50%;
}
</style>
