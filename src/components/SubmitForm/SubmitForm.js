import React from 'react';
import './SubmitForm.css';
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../../actions'
import { useState } from 'react'

//{description: 'task 1', done: false}
//const [inputValues, setInputValues] = useState({ todo: '' });
const SubmitForm = () => {
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({description: 'task 1', done: false});
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const todoList = useSelector(state => state.todos);

  return (
    <div>
      <input
        type='text'
        className='input' name="todo" style={{ width: "80%" }}
        placeholder='Enter Item'
        value={inputValues["todo"]}
        onChange={onHandleChange}
      />
      <button className='button' disabled={inputValues["todo"] === "" || todoList.length > 19} onClick={() => dispatch(addTodo({description: inputValues["todo"], done: false}))}>Submit</button>
    </div>
  );
}

SubmitForm.propTypes = {};

SubmitForm.defaultProps = {};

export default SubmitForm;
