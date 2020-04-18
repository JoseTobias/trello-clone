export function saveStatePlugin (store) {
  store.subscribe(
    (mutation, state) => localStorage.setItem('boards', JSON.stringify(state.boards))
  )
}
