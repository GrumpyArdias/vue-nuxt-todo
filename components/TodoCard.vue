<template>
    <div class="todo-card">
      <p>{{ todo.text }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TodoCard',
    props: {
      todo: Object 
    }
  }
  </script>
  
  <style scoped>
  .todo-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 5px;
  }
  </style>
  