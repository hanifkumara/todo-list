<template>
  <div>
    <h4 class="mt-2">Add Todo</h4>
    <div class="wrapper-form mt-4">
      <form @submit.prevent="addTodo">
        <div class="form-group">
          <label for="labels">Labels</label>
          <select v-model="select" class="form-control form-control-sm" id="labels">
            <option v-for="data in getLabels" :key="data.id" :value="data.id">{{data.label}}</option>
          </select>
          <label for="task">Task</label>
          <textarea v-model="task" class="form-control" id="task" rows="3"></textarea>
          <div class="d-flex justify-content-end mt-4">
            <Button title="Add Todo" type="submit" color="btn btn-primary"/>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'AddTodo',
  data () {
    return {
      select: '',
      task: ''
    }
  },
  components: {
    Button
  },
  mounted () {
    this.setGetLabels()
  },
  methods: {
    ...mapActions(['addTodos', 'setGetLabels']),
    addTodo () {
      const data = {
        idLabel: this.select,
        task: this.task
      }
      this.addTodos(data)
        .then((result) => {
          Swal.fire(result.message, '', 'success')
          this.$router.push({ name: 'HomeTodos' })
        }).catch((err) => {
          Swal.fire(err, 'please try again', 'error')
        })
    }
  },
  computed: {
    ...mapGetters(['getLabels'])
  }
}
</script>

<style scoped>
.wrapper-form{
  width: 50%;
}
</style>
