import { mapMutations } from 'vuex'
import Header from 'components/header'
import Todo from 'components/todo'

const filters = {
  all: todos => todos,
  completed: todos => todos.filter(todo => todo.done),
  active: todos => todos.filter(todos => !todos.done)
}

export default {
  name: 'home',

  components: {
    'todo-header': Header,
    'Todo': Todo
  },

  data () {
    return {
      visibility: 'all',
      filters: filters
    }
  },

  computed: {
    todos () {
      return this.$store.state.todos
    },

    filteredTodos () {
      return filters[this.visibility](this.todos)
    },

    remaining () {
      return this.todos.filter(todo => !todo.done).length
    },

    allChecked () {
      return this.todos.every(todo => todo.done)
    }
  },

  methods: {
    ...mapMutations([
      'toggleAll',
      'clearCompleted'
    ])
  },

  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}
