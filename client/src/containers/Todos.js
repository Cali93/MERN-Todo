import { connect } from 'react-redux';
import * as todoActions from '../actions/todoActions';
import Todos from '../components/Todos';

// map state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // you can now say this.props.mappedAppState
    mappedTodoState: state.todoState
  }
}

// map actions to props

const mapDispatchToProps = (dispatch) => {
  return {
    // you can now say this.props.mappedAppActions
    fetchTodos:() => dispatch(todoActions.fetchTodos()),
    mappedDeleteTodo: todoToDelete => dispatch(todoActions.deleteTodo(todoToDelete)),
    mappedEditTodo: todoToEdit => dispatch(todoActions.editTodo(todoToEdit))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Todos);

//We import connect from react-redux. This function connects or subscribes a component to the store, making it aware of any changes to the state. Then we are exporting a wrapper, the wrapper takes 2 params when being created: mapStateToProps, and mapDispatchToProps.