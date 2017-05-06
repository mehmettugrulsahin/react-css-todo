import {connect} from 'react-redux';
import TodoList from './TodoList';

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
    default:
      return todos;
  }
}

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

const mapStateToTodoListProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    ),
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList;
