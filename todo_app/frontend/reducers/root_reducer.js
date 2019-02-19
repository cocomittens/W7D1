import todos from './todos_reducer';
import {combineReducers} from 'redux';


const rootReducer = combineReducers({
  todos
})


export default rootReducer;