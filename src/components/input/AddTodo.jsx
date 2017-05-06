import './AddTodo.css';
import React from 'react';
import {connect} from 'react-redux';

export const addTodo = (nextTodoId, text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};

const mapStateToAddTodoProps = (state) => {
  return {
    todos: state.todos
  };
};

let AddTodo = ({ todos, dispatch }) => {
  let input;

  return (
    <div className="add-todo">
      <input
        ref={node => { input = node; }}
        className="add-todo__input"
        placeholder="new todo"
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            dispatch(addTodo(todos.length, input.value));
            input.value = '';
          }
        }}
      />
      <button onClick={() => {
        dispatch(addTodo(todos.length, input.value));
        input.value = '';
      }} className="add-todo__button">
        Add Todo
      </button>
    </div>
  );
};
AddTodo = connect(mapStateToAddTodoProps)(AddTodo);

export default AddTodo;
