import React from 'react';
//import PropTypes from 'prop-types';
import './Todo.css';
import {useDispatch} from 'react-redux'
import {removeTodo, checkTodo, uncheckTodo} from '../../actions'
//import { useState } from 'react'

const Todo = (props) => {
  const dispatch = useDispatch();
  const handleChange = todo => {
    if (todo.isDone) {
      dispatch(uncheckTodo(todo.id));
    } else {
      dispatch(checkTodo(todo.id));
    }
  };
  
  return(
    <div className='list-item-2'>
      <input type='checkbox' name='isDone'
      checked={props.isDone} onChange={() => handleChange(props) }
      style={{margin: "0px 10px 0px 0px"}} />
      {props.content}
      <button class="delete is-pulled-right" onClick={() => dispatch(removeTodo(props.id))}></button>
    </div>
  );
}

Todo.propTypes = {};

Todo.defaultProps = {};

export default Todo;
