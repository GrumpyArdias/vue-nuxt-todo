export const state = () => ({
  todos: [],
})

export const getters = {
  getTodos(state) {
    return state.todos
  },
}

export const mutations = {
  addTodo(state, NewTodo) {
    if (NewTodo.text.trim() !== '') {
      state.todos.push(NewTodo)
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
