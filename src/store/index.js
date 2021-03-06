import Immutable from 'immutable';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import config from 'config';
import rootReducer from './reducers';

// 支持在Chrome上调试redux，需要安装redux-devtools插件
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

function createMiddlewares() {
  const middlewares = [thunkMiddleware];

  if (config.env === 'development' && typeof window !== 'undefined') {
    middlewares.push(
      createLogger({
        level: 'info',
        collapsed: true,
        stateTransformer: state => {
          const newState = {};

          for (const i of Object.keys(state)) {
            if (Immutable.Iterable.isIterable(state[i])) {
              newState[i] = state[i].toJS();
            } else {
              newState[i] = state[i];
            }
          }

          return newState;
        }
      })
    );
  }

  return middlewares;
}

function immutableChildren(obj) {
  const state = {};
  Object.keys(obj).forEach(key => {
    state[key] = Immutable.fromJS(obj[key]);
  });
  return state;
}

const initStore = () => {
  return createStore(
    rootReducer,
    compose(composeEnhancers(applyMiddleware(...createMiddlewares())))
  );
};

export const wrapper = createWrapper(initStore);
