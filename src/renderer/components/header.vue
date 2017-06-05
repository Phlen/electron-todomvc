<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="what need to be done?"
      @keyup.enter="addTodo">
  </header>
</template>

<script>
  export default {
    name: 'todo-header',
    props: {},
    data () {
      return {

      }
    },
    methods: {
      addTodo (e) {
        let text = e.target.value
        if (text.trim()) {
          this.$store.commit('addTodo', { text })
        }
        e.target.value = ''
      }
    }
  }
</script>
