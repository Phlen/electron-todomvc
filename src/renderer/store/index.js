import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

// const TODO_LIST_STORAGE_KEY = 'todo-list'
export default new Vuex.Store({
  state: {
    todos: []
  },

  mutations: {
    addTodo: (state, { text }) => {
      console.log(text)
      state.todos.push({
        text,
        done: false
      })
    },

    toggleTodo: (state, { todo }) => {
      todo.done = !todo.done
    },

    deleteTodo: (state, { todo }) => {
      state.todos.splice(state.todos.indexOf(todo), 1)
    },

    editTodo: (state, { todo, value }) => {
      todo.text = value
    },

    toggleAll: (state, {done}) => {
      state.todos.forEach(todo => {
        todo.done = done
      })
    },

    clearCompleted: (state) => {
      state.todos = state.todos.filter(todo => !todo.done)
    }
  }
})
