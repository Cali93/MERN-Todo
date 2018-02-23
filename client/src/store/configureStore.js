import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import rooterReducer from '../reducers';

export default function configureStore(initialState) {
  const middlewares = [
    thunk,
  ];

  const store = createStore(rooterReducer, initialState, compose(
    applyMiddleware(...middlewares),
    // adds suport for Redux dev tools
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

if (module.hot){
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', ()=>{
    const nextReducer = require ('../reducers').default;
    // eslint-disable-line global require
    store.replaceReducer(nextReducer)
  });
}

return store;

}