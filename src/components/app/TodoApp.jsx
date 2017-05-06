import React from 'react';
import AddTodo from '../input/AddTodo';
import VisibleTodoList from '../list/VisibleTodoList';
import Footer from '../filter/Footer';

const TodoApp = () => (
  <div className="todo-app">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;
