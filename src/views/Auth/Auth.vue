<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4 d-flex justify-content-center align-items-center content">
        <div class="col-md-5">
            <div class="card-auth">
              <router-view />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Auth',
  components: {
    Navbar
  }
}
</script>

<style scoped>
.content{
  height: 100%;
}
.card-auth{
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0px 20px 20px rgba(66, 66, 66, 0.05);
  border-radius: 30px;
}
</style>
