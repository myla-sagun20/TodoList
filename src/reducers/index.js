const initialState  =
{
    todos : ['task 1', 'task 2', 'task 3', 'task 4']
}

const todoReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case 'addTodo' :
            return state = 
            {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'removeTodo':
            return state = 
            {
                ...state,
                todos: state.todos.filter((val, i) => i !== action.payload)
            }
        default: return state;
    }

}

export default todoReducer;