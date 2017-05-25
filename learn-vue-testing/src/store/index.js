import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    info: 'test',
    todos: []
  },
  getters: {
    info: (state) => state.info,
    todos: (state) => state.todos
  },
  actions: {
    addTodo ({commit}, text) {
      let todo = {
        id: Date.now(),
        text
      }
      commit('addTodo', todo)
    },
    removeTodo ({commit}, todo) {
      commit('removeTodo', todo)
    }
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo)
    },
    removeTodo (state, todo) {
      let index = state.todos.findIndex(item => item.id === todo)
      state.todos.splice(index, 1)
    }
  }
})

export default store
