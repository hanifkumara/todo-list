<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Hello Admin</h1>
        <p class="lead">Please Arrage your App</p>
        <router-link :to="{name: 'Todos'}">
          <Button title="Get started" color="btn btn-primary"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'Home',
  components: {
    Button
  }
}
</script>

<style scoped>
.jumbotron{
  background-color: rgb(151, 151, 247);
  color: white;
  border-radius: 0 0 10px 10px;
}
</style>
