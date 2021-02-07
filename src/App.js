import './App.css';
import React from 'react'
import Header from './components/Header/Header'
import SubmitForm from './components/SubmitForm/SubmitForm'
import TodoList from './components/TodoList/TodoList'

class App extends React.Component {

  render() {
    return (

      <div className="paper">
        <div className="pattern">
          <div className="content">
            <a href="http://www.mylasagun.com">Home</a>
            <Header />
            <TodoList />
            <SubmitForm />
          </div></div></div>
    );
  }
}

export default App;
