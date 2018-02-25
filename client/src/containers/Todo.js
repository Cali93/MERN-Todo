import { connect } from 'react-redux';
import * as todoActions from '../actions/todoActions';
import Todo from '../components/Todo';

// map state from store to props
const mapStateToProps = (state) => {
  return {
        //you can now say this.props.mappedAppSate
        mappedTodoState: state.todoState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedActions
    mappedfetchTodoById: todoId => dispatch(todoActions.fetchTodoById(todoId))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Todo);

//We import connect from react-redux. This function connects or subscribes a component to the store, making it aware of any changes to the state. Then we are exporting a wrapper, the wrapper takes 2 params when being created: mapStateToProps, and mapDispatchToProps.