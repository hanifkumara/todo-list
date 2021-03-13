<template>
  <div>
    <div class="wrapper-card mt-2">
      <h3>Add Label</h3>
      <form @submit.prevent="handleAddLabel">
        <Input name="Label" placeholder="Please fill title for label" type="text" forId="label" @input="label = $event.target.value"/>
        <label for="description">Description</label>
        <textarea v-model="description" class="form-control" id="description" rows="3"></textarea>
        <div class="d-flex justify-content-end mt-3">
          <Button title="Add Label" color="btn btn-success"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'AddLabels',
  data () {
    return {
      label: '',
      description: ''
    }
  },
  components: {
    Input,
    Button
  },
  methods: {
    ...mapActions(['addLabels']),
    handleAddLabel () {
      const data = {
        label: this.label,
        description: this.description
      }
      this.addLabels(data)
        .then((result) => {
          Swal.fire(result.message, '', 'success')
          this.$router.push({ name: 'ManageLabels' })
        }).catch((err) => {
          Swal.fire(err, '', 'error')
        })
    }
  }
}
</script>

<style scoped>
.wrapper-card{
  width: 50%;
}
</style>
