<template>
  <div>
    <h4 class="mt-3">TODOS</h4>
    <router-link :to="{name: 'AddTodo'}">
      <Button title="Add todo" color="btn btn-primary"/>
    </router-link>
    <div class="container-todos mt-5">
      <div class="card-todos" v-for="data in getTodos" :key="data.id">
        <div class="label">{{data.label}}</div>
        <div class="task">{{data.task}}</div>
        <div class="created">{{ data.createdAt | moment("calendar") }}</div>
        <div class="action d-flex align-items-start">
          <div class="badge badge-warning mr-2">Edit</div>
          <div class="badge badge-danger" @click="handleDelete(data.id)">Delete</div>
        </div>
      </div>
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
  mounted () {
    this.setGetTodos()
  },
  methods: {
    ...mapActions(['setGetTodos', 'deleteTodos']),
    handleDelete (idTodos) {
      this.deleteTodos(idTodos)
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
</style>
