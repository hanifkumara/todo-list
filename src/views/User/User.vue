<template>
  <div>
    <Navbar />
    <div class="container">
      <router-view :profile="myProfile"/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'User',
  components: {
    Navbar
  },
  mounted () {
    this.setMyProfile()
  },
  methods: {
    ...mapActions(['setMyProfile'])
  },
  computed: {
    ...mapGetters(['myProfile'])
  }
}
</script>

<style scoped>

</style>
