import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux'

const Header = () => {
  const todoList = useSelector(state => state.todos);
  return (
    <div className='card-header'>
      <h1 className='card-header-title header'>
        You have {todoList.length} Todos
      </h1>
    </div>
  )
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
