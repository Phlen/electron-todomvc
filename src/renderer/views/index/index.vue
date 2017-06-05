<template>
  <div class="view-index">
    <section class="todoapp">
      <todo-header></todo-header>
      <section class="main" v-show="todos.length">
        <input type="checkbox"
          class="toggle-all"
          :checked="allChecked"
          @change="toggleAll({ done: !allChecked})">
        <ul class="todo-list">
          <Todo v-for="(todo, index) in filteredTodos" :key="index" :todo="todo"></Todo>
        </ul>
      </section>
        <footer class="footer" v-show="todos.length">
          <span class="todo-count">
            <strong>{{ remaining }}</strong>
            {{ remaining | pluralize('item') }} left
          </span>
          <ul class="filters">
            <li v-for="(val, key) in filters">
              <a href="javascript:void(0);"
                :class="{selected: visibility === key}"
                @click="visibility = key">
                {{ key | capitalize }}
              </a>
            </li>
          </ul>
          <button class="clear-completed"
            v-show="todos.length"
            @click="clearCompleted">Clear completed</button>
        </footer>
    </section>
  </div>
</template>

<script>
  import Home from './home.es6'

  export default Home
</script>

<style lang="scss" src="todomvc-app-css/index.css">
  @import "./index.scss";

</style>
