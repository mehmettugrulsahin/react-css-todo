import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from './TodoApp';
import store from './store';

const router = (
    <Provider store={store}>
      <TodoApp />
    </Provider>
)

render(router, document.getElementById('root'));
