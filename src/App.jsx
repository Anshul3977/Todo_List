
import { useDispatch } from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import { bindActionCreators } from 'redux';
import todoReducer , {addTodo,editTodo,deleteTodo,todoFinished} from './silces/todoSlice';

function App() {
 const dispatch = useDispatch();
 const actions = bindActionCreators({addTodo,deleteTodo,editTodo,todoFinished},dispatch)
  return (
    // bcoz of this value it is accessible by everyone so if addtodo mai vgre useContext and vahi same context pass kroge provider ka parent banauge so u can access
       <div className='container'>
      <AddTodo addTodo = {actions.addTodo}/>
        <TodoList deleteTodo = {actions.deleteTodo} editTodo = {actions.editTodo} todoFinished = {actions.todoFinished}/>
      </div>
  )
}

export default App
