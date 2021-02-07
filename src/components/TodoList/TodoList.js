import React from 'react';
import './TodoList.css';
import Todo from '../Todo/Todo'
import {useSelector} from 'react-redux'

const TodoList = (props) => {
  const todoList = useSelector(state => state.todos);
 
  const todos = todoList.map((todo, index) => {
    return <Todo content={todo.description} key={index} id={index} isDone={todo.done} />
  })
  return( 
    <div className='list-wrapper'>
      {todos}
    </div>
  );
}

TodoList.propTypes = {};

TodoList.defaultProps = {};

export default TodoList;
