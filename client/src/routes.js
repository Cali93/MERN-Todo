import React from 'react';
import { Route, IndexRouter } from 'react-router';
import App from './containers/App';
import Todos from './containers/Todos';
import Todo from './containers/Todo';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Todos} />
    <Route path="/:todoId" component={Todo}/>
  </Route>
)

// Our root path belongs to the App component. React will only render Todos if we are in the root path “/”.Then we have one route “/:todoId” inside root route, which will render Todo by the id parameter.