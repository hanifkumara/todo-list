<template>
  <div>
    <nav class="bg-primary">
      <div class="container d-flex justify-content-between">
        <div class="nav-left">
          <h4 class="text-white">TODO-LIST</h4>
        </div>
        <div class="nav-right d-flex">
          <div class="btn btn-success mr-3" @click="pushToLogin">Login</div>
          <div class="btn btn-success" @click="pushToSignup">Signup</div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    pushToLogin () {
      this.$router.push({ name: 'Login' })
    },
    pushToSignup () {
      this.$router.push({ name: 'Signup' })
    }
  }
}
</script>

<style scoped>
nav{
  padding: 16px 0;
}
</style>
