const allTodos = function(state) {
  const keys = Object.keys(state.todos);
  keys.map(key => state[key].id) 
}


export default allTodos;