<template>
  <div>
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Admin',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>

</style>
