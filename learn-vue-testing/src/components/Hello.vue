<template>
  <div class="hello">
    <input v-model="todoInput">
    <button @click="add()">Add</button>
    <ul>
      <li v-for="todo in todos">
        <span class="text">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      todoInput: ''
    }
  },
  computed: {
    ...mapGetters(['todos'])
  },
  methods: {
    add () {
      this.addTodo(this.todoInput)
      this.todoInput = ''
    },
    ...mapActions(['addTodo', 'removeTodo'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
