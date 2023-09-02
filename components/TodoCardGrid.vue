<template>
    <div>
      <TodoCard v-for="(todo, index) in todos" :key="index" :todo="todo" />
    </div>
  </template>
  
  <script>
  import TodoCard from './TodoCard.vue'; 
  
  export default {
    name: 'TodosGrid',
    components: {
      TodoCard 
    },
    props: {
      todos: Array 
    }
  }
  </script>
  