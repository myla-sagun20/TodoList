import React from 'react';
//import PropTypes from 'prop-types';
import './SubmitForm.css';
import {useDispatch} from 'react-redux'
import {addTodo} from '../../actions'
import {useState} from 'react'

// class SubmitForm extends React.Component {
//   state = { term: '' };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if(this.state.term === '') return;
//     this.props.onFormSubmit(this.state.term);
//     this.setState({ term: '' });
//   }

//   render() {
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <input 
//           type='text'
//           className='input'
//           placeholder='Enter Item'
//           value={this.state.term}
//           onChange={(e) => this.setState({term: e.target.value})}
//         />
//         <button className='button'>Submit</button>
//       </form>
//     );
//   }
// }

const SubmitForm = () => {
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({todo : ''});
  const onHandleChange = (e) => {
    const {name, value} = e.target;
    setInputValues({...inputValues, [name]: value});
  };

  //const [todo, setTodo] = useState("");
  
    return(
      // <form onSubmit>
      <div>
        {/* <input 
          type='text'
          className='input'
          placeholder='Enter Item'
          value = {todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button className='button'onClick={() => dispatch(addTodo(todo))}>Submit</button> */}

      <input 
          type='text'
          className='input' name="todo" style={{width: "80%"}}
          placeholder='Enter Item'
          value = {inputValues["todo"]}
          onChange={onHandleChange}
        />
        <button className='button'onClick={() => dispatch(addTodo(inputValues["todo"]))}>Submit</button>
        
        </div>
      // </form>
    );
}

SubmitForm.propTypes = {};

SubmitForm.defaultProps = {};

export default SubmitForm;
