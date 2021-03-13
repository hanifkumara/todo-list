<template>
  <div>
    <nav class="bg-primary">
      <div class="container d-flex justify-content-between">
        <div class="nav-left">
          <div v-if="role === 'admin'">
            <router-link :to="{name: 'Admin'}">
              <h4 class="text-white">TODO-LIST</h4>
            </router-link>
          </div>
          <div v-else>
            <router-link :to="{name: 'User'}">
              <h4 class="text-white">TODO-LIST</h4>
            </router-link>
          </div>
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
          <div v-else>
            <div class="d-flex" v-if="role === 'admin'">
              <router-link :to="{name: 'ManageLabels'}">
                <Button title="Manage Labels" color="btn btn-success"/>
              </router-link>
              <router-link :to="{name: 'ManageUsers'}">
                <Button title="Manage Users" color="btn btn-success"/>
              </router-link>
              <div @click="logout">
                <Button title="Logout" color="btn btn-danger"/>
              </div>
            </div>
            <div class="d-flex align-items-center" v-else>
              <div class="email">{{myProfile.email}}</div>
              <div @click="logout">
                <Button title="Logout" color="btn btn-danger"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  data () {
    return {
      role: localStorage.getItem('role')
    }
  },
  components: {
    Button
  },
  mounted () {
    console.log(this.$route)
    this.setMyProfile()
  },
  methods: {
    ...mapActions(['logout', 'setMyProfile'])
  },
  computed: {
    ...mapGetters(['myProfile'])
  }
}
</script>

<style scoped>
nav{
  padding: 16px 0;
}
.email{
  font-size: 21px;
  color: rgb(255, 255, 255);
}
</style>
