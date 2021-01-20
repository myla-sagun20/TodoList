export const addTodo = (task) => {
    return{
        type: 'addTodo',
        payload : task
    };
}

export const removeTodo = (index) => {
    return{
        type: 'removeTodo',
        payload : index
    };
}