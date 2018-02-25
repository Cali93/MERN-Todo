import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import App from '../components/App';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    // you can now say this.props.mappedAppState
    mappedAppState: state.appState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    // you now can say this.props.mappedAppActions
    mappedToggleAddTodo: () => dispatch(appActions.toggleAddTodo())
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(App);

//We import connect from react-redux. This function connects or subscribes a component to the store, making it aware of any changes to the state. Then we are exporting a wrapper, the wrapper takes 2 params when being created: mapStateToProps, and mapDispatchToProps.