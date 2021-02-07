//const initialState  =
//{
    //todos : ['task 1', 'task 2', 'task 3', 'task 4']
//}

const initialState = 
{
    todos : [{description: 'task 1', done: false}, {description: 'task 2', done: true}]
}
//const todos = [{description: 'task 1', done: false}, {description: 'task 2', done: false}];


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
                   //,...state.items
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
                   //,...state.items
                 ]
            }
        default: return state;
    }

}

export default todoReducer;