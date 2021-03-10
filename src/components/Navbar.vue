<template>
  <div>
    <nav class="bg-primary">
      <div class="container d-flex justify-content-between">
        <div class="nav-left">
          <h4 class="text-white">TODO-LIST</h4>
        </div>
        <div class="nav-right">
          <div class="d-flex" v-if="this.$route.name === 'Login' || this.$route.name === 'Signup'">
            <router-link :to="{name: 'Login'}">
              <Button title="Login" color="btn btn-success"/>
            </router-link>
            <router-link :to="{name: 'Signup'}">
              <Button title="Signup" color="btn btn-success"/>
            </router-link>
          </div>
          <div class="d-flex" v-else>
            <router-link :to="{name: 'ManageLabels'}">
              <Button title="ManageLabels" color="btn btn-success"/>
            </router-link>
            <router-link :to="{name: 'ManageUsers'}">
              <Button title="Manage Users" color="btn btn-success"/>
            </router-link>
            <div @click="logout">
              <Button title="Logout" color="btn btn-danger"/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Navbar',
  components: {
    Button
  },
  methods: {
    logout () {
      console.log('hello')
    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style scoped>
nav{
  padding: 16px 0;
}
</style>
