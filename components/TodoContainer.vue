<template>
  <div>
    <div class="form__input">
      <form @submit.prevent="addTodo">
        <div class="form-group">
          <label for="newTask">Add a new Task</label>
          <input id="newTask" v-model="newTask" type="text" />
        </div>
        <button type="submit" class="btn btn-primary">Add</button>
      </form>
    </div>
    <TodosGrid :todos="todos" />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import TodosGrid from './TodoCardGrid.vue'

export default {
  name: 'TodoContainer',
  components: {
    TodosGrid,
  },

  data() {
    return {
      newTask: '',
    }
  },
  computed: {
    todos() {
      const store = useStore()
      return store.state.todosStore.todos
    },
  },
  watch: {
    'todo.text': function (newText) {
      this.buttonIsDisabled = newText.trim() === ''
    },
  },
  methods: {
    addTodo() {
      if (this.newTask.trim() === '') {
        return
      }
      this.$store.commit('addTodo', { text: this.newTask })
      this.newTask = ''
    },
  },
}
</script>

<style scoped>
.form__input {
  max-width: 60%;
  margin: auto;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input[type='text'] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
.btn:disabled {
  background-color: #ccc;
}
</style>
