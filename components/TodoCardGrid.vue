<template>
  <div class="todoGrid">
    <TodoCard v-for="(todo, index) in todos" :key="index" :todo="todo" />
  </div>
</template>

<script>
import TodoCard from './TodoCard.vue'

export default {
  name: 'TodosGrid',
  components: {
    TodoCard,
  },
  props: {
    todos: Array,
  },
}
</script>

<style scoped>
.todoGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 40%;
  margin: auto;
  justify-content: center;
  align-items: center;
}
</style>
