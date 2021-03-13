<template>
  <div>
    <h4 class="mt-3">Edit Labels</h4>
    <!-- {{$route.params.idLabel}} -->
    <div class="wrapper-card-update">
      <form @submit.prevent="handleUpdate">
        <Input name="Label" :value="getLabelId.label" @input="label = $event.target.value" type="text" forId="label"/>
        <label for="description">Description</label>
        <textarea v-model="getLabelId.description" class="form-control" id="description" rows="3"></textarea>
        <div class="d-flex justify-content-end mt-3">
          <Button title="Update Label" type="submit" color="btn btn-primary"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Input from '@/components/Input'
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'UpdateLabels',
  components: {
    Button,
    Input
  },
  data () {
    return {
      label: ''
    }
  },
  mounted () {
    this.setGetLabelId(this.$route.params.idLabel)
  },
  methods: {
    ...mapActions(['setGetLabelId', 'updateLabel']),
    handleUpdate () {
      const data = {
        idLabel: this.$route.params.idLabel,
        label: this.label,
        description: this.getLabelId.description
      }
      this.updateLabel(data)
        .then((result) => {
          Swal.fire(result.message, '', 'success')
          this.$router.push({ name: 'ManageLabels' })
        }).catch((err) => {
          Swal.fire(err, '', 'error')
        })
    }
  },
  computed: {
    ...mapGetters(['getLabelId'])
  }
}
</script>

<style scoped>
.wrapper-card-update{
  width: 60%;
}
</style>
