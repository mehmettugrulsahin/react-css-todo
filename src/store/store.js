import { createStore } from 'redux';
import rootReducer from '../reducers/index';

import todos from '../data/todos';
import visibilityFilter from '../data/visibilityFilter';

const defaultState = {
  todos,
  visibilityFilter
};

const store = createStore(rootReducer, defaultState);

if(module.hot) {
  module.hot.accept('../reducers/',() => {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
