const initialState = 
{
    todos : [{description: 'task 1', done: false}, {description: 'task 2', done: true}]
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
        case 'checkTodo':
            return state = 
            {
                ...state,
                todos: [
                    ...state.todos.slice(0,action.payload),
                    Object.assign({}, state.todos[action.payload], {done: true}),
                    ...state.todos.slice(action.payload+1)
                 ]
            }
            case 'uncheckTodo':
                console.log('unchecktodo')
            return state = 
            {
                ...state,
                todos: [
                    ...state.todos.slice(0,action.payload),
                    Object.assign({}, state.todos[action.payload], {done: false}),
                    ...state.todos.slice(action.payload+1)
                 ]
            }
        default: return state;
    }

}

export default todoReducer;