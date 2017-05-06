import './index.css';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import TodoApp from './components/app/TodoApp';
import store from './store/store';

const router = (
    <Provider store={store}>
    <div className="container">
      <TodoApp />
    </div>
    </Provider>
)

render(router, document.getElementById('root'));
