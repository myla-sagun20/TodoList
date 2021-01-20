//import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './components/Header/Header'
import SubmitForm from './components/SubmitForm/SubmitForm'
import TodoList from './components/TodoList/TodoList'
//import {useSelector, useDispatch} from 'react-redux'
//import {addTodo} from './actions'

class App extends React.Component {
  // state = {
  //   tasks: ['task 1', 'task 2', 'task 3']
  // };
 
  // handleSubmit = task => {
  //   this.setState({tasks: [...this.state.tasks, task]});
  // }

  // handleDelete = (index) => {
  //   const newArr = [...this.state.tasks];
  //   newArr.splice(index, 1);
  //   this.setState({tasks: newArr});
  // }

  render() {
    return(

      <div className="paper">
  <div className="pattern">
    <div className="content">
    <Header />
          <TodoList/>
          <SubmitForm /> 
    </div></div></div>
      // <div className='wrapper'>
      //   <div className='card frame'>
      //     {/* <Header numTodos={this.state.tasks.length} />
      //     <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
      //     <SubmitForm onFormSubmit={this.handleSubmit} /> */}

      //     <Header />
      //     <TodoList/>
      //     <SubmitForm /> 
      //   </div>
      // </div>
    );
  }
}

// const App = () => {

//   const todo = useSelector(state => state.todoReducer);
//   const dispatch = useDispatch();

//     return(
//       <div className='wrapper'>
//         <div className='card frame'>
//           {/* <Header numTodos={this.state.tasks.length} /> */}
//           {/* <TodoList tasks={todo}/> */}
//           {todo}
//           <SubmitForm onFormSubmit={dispatch(addTodo('my test'))} />
//         </div>
//       </div>
//     );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



export default App;
