<template>
  <div>
    <h4 class="mt-3">TODOS</h4>
    <router-link :to="{name: 'AddTodo'}">
      <Button title="Add todo" color="btn btn-primary"/>
    </router-link>
    <div class="container-todos mt-5" v-if="getTodos.length > 0">
      <div class="card-todos" v-for="(data, index) in getTodos" :key="data.id">
        <div class="custom-control custom-checkbox" @click="handleSelect(data.id)">
          <input type="checkbox" class="custom-control-input" :id="index">
          <label class="custom-control-label" :for="index"></label>
        </div>
        <div class="label">{{data.label}}</div>
        <div class="task" :class="[data.completed === 'completed' ? 'completed' : '']">{{data.task}}</div>
        <div class="created">{{ data.createdAt | moment("calendar") }}</div>
        <div class="action d-flex align-items-start">
          <div class="badge badge-warning" @click="pushToUpdateTodo(data.id)">Edit</div>
          <div class="badge badge-danger mx-2" @click="handleDelete(data.id)">Delete</div>
          <div class="badge badge-success" @click="handleCompleted(data.id)">Complete</div>
        </div>
      </div>
    </div>
    <div class="mt-3 ml-2" v-else>
      empty todos, please create todo for first time
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'HomeTodos',
  components: {
    Button
  },
  data () {
    return {
      idSelected: []
    }
  },
  mounted () {
    this.setGetTodos()
  },
  methods: {
    ...mapActions(['setGetTodos', 'deleteTodos', 'completedTodos']),
    handleDelete (idTodo) {
      this.deleteTodos(idTodo)
        .then((result) => {
          Swal.fire(result.message, '', 'success')
          this.setGetTodos()
        }).catch((err) => {
          Swal.fire(err, '', 'error')
        })
    },
    pushToUpdateTodo (idTodo) {
      this.$router.push({ name: 'UpdateTodo', params: { idTodo } })
    },
    handleSelect (idTodo) {
      for (let i = 0; i < this.idSelected.length; i++) {
        if (this.idSelected[i].indexOf(idTodo) === -1) {
          console.log(idTodo)
          this.idSelected.push(idTodo)
        }
      }
    },
    handleCompleted (idTodo) {
      this.completedTodos(idTodo)
        .then((result) => {
          Swal.fire(result.message, '', 'success')
          this.setGetTodos()
        }).catch((err) => {
          Swal.fire(err, '', 'error')
        })
    }
  },
  computed: {
    ...mapGetters(['getTodos'])
  }
}
</script>

<style scoped>
.badge{
  cursor: pointer;
}
.card-todos{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
}
.label{
  flex: 1
}
.task{
  flex: 3
}
.created{
  flex: 1
}
.container-todos{
  width: 100%
}
.completed{
  background-color: rgb(163, 245, 163);
  width: 10px;
}
</style>
