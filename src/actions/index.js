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

export const checkTodo = (index) => {
    return {
        type: 'checkTodo',
        payload: index
    };
}

export const uncheckTodo = (index) => {
    return {
        type: 'uncheckTodo',
        payload: index
    };
}