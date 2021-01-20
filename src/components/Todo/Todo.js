import React from 'react';
//import PropTypes from 'prop-types';
import './Todo.css';
import {useDispatch} from 'react-redux'
import {removeTodo} from '../../actions'

const Todo = (props) => {
  const dispatch = useDispatch();
  return(
    <div className='list-item-2'>
      {props.content}
      {/* <button class="delete is-pulled-right" onClick={() => {props.onDelete(props.id)}}></button> */}
      <button class="delete is-pulled-right" onClick={() => dispatch(removeTodo(props.id))}></button>
    </div>
  );
}

Todo.propTypes = {};

Todo.defaultProps = {};

export default Todo;
