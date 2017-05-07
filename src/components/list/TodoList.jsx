import './TodoList.css';
import React from 'react';
import Todo from './Todo';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ReactCSSTransitionGroup
        component="ul"
        className="todo-list"
        transitionName="todo-transition"
        transitionEnterTimeout={100}
        transitionLeaveTimeout={100}
      >
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ReactCSSTransitionGroup>
);

export default TodoList;
