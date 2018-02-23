import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';

class App extends Component {
  render(){
    return 
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes}/>
        </div>
      </Provider>
  }
}

App.PropTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default App;