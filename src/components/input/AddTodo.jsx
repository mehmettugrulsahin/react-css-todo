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
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addTodo(todos.length, input.value));
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};
AddTodo = connect(mapStateToAddTodoProps)(AddTodo);

export default AddTodo;
