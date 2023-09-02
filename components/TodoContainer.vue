<template>
  <div>
    <form @submit.prevent="addTodo">
      <label for="newTask">Add a new Task</label>
      <br>
      <input id="newTask" type="text"  v-model="todo.text">
      <button type="submit">Add</button>
    </form>
    <TodosGrid :todos="todos" /> 
  </div>
</template>

<script>
import TodosGrid from './TodoCardGrid.vue'

export default {
  name: 'TodoContainer',
  components: {
    TodosGrid 
  },
  data() {
    return {
      todos: [],
      todo: { text: "" }
    }
  },
  methods: {
    addTodo() {
      if (this.todo.text.trim() !== "") {
        this.todos.push({ text: this.todo.text });
        this.todo.text = "";
        this.$emit('todos-updated', this.todos); 
      }
    }
  }
}
</script>
