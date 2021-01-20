import React from 'react';
//import PropTypes from 'prop-types';
import './TodoList.css';
import Todo from '../Todo/Todo'
import {useSelector} from 'react-redux'

const TodoList = (props) => {
  const todoList = useSelector(state => state.todos);
  // const todos = props.tasks.map((todo, index) => {
  //   return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
  // })

  const todos = todoList.map((todo, index) => {
    return <Todo content={todo} key={index} id={index} />
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
