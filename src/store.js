import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';

import todos from './data/todos';
import visibilityFilter from './data/visibilityFilter';

const defaultState = {
  todos,
  visibilityFilter
};

const enhancers = compose(
    window.devToolsExtension
        ? window.devToolsExtension()
        : (f) => {f}
);

const store = createStore(rootReducer, defaultState, enhancers);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
