<template>
  <div>
    <h4 class="mt-2">Update Todo</h4>
    <div class="wrapper-form mt-4">
      <form @submit.prevent="handleUpdateTodo">
        <div class="form-group">
          <div class="form-group">
            <label for="sel1">Select list:</label>
            <select @change="selectedLabel" class="form-control" id="sel1">
              <option selected :value="getTodoId.id">{{getTodoId.label}}</option>
              <template v-for="data in getLabels">
                <option v-if="getTodoId.label !== data.label" :key="data.id" :value="data.id">{{data.label}}</option>
              </template>
            </select>
          </div>
          <label for="task">Task</label>
          <textarea v-model="getTodoId.task" class="form-control" id="task" rows="3"></textarea>
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
  name: 'UpdateTodo',
  components: {
    Button
  },
  data () {
    return {
      selected: ''
    }
  },
  mounted () {
    this.setTodoById(this.$route.params.idTodo)
    this.setGetLabels()
  },
  methods: {
    ...mapActions(['setTodoById', 'setGetLabels', 'updateTodo']),
    handleUpdateTodo () {
      const data = {
        idTodo: this.$route.params.idTodo,
        task: this.getTodoId.task,
        idLabel: this.selected
      }
      this.updateTodo(data)
        .then((result) => {
          Swal.fire(result.message, '', 'success')
          this.$router.push({ name: 'HomeTodos' })
        }).catch((err) => {
          Swal.fire(err, '', 'error')
        })
    },
    selectedLabel (e) {
      this.selected = e.target.value
    }
  },
  computed: {
    ...mapGetters(['getTodoId', 'getLabels'])
  }
}
</script>

<style scoped>
.wrapper-form{
  width: 50%;
}
</style>
