export const state = () => ({
  todos: [],
})

export const getters = {
  getTodos(state) {
    return state.todos
  },
}

export const mutations = {
  addTodo() {
    if (this.todo.text.trim() !== '') {
      this.todos.push({ text: this.todo.text })
      this.todo.text = ''
      this.$emit('todos-updated', this.todos)
    }
  },
}

// export const actions = {
//   async fetchCounter({ state }) {
//     // make request
//     const res = { data: 10 }
//     state.counter = res.data
//     return res.data
//   },
// }
