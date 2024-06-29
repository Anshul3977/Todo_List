
import { useDispatch } from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import { bindActionCreators } from 'redux';
import { addTodo,deleteTodo,editTodo,todoFinished } from './actions/todoActions';


function App() {
 const dispatch = useDispatch();
 const actions = bindActionCreators({addTodo,deleteTodo,editTodo,todoFinished},dispatch)
  return (
    // bcoz of this value it is accessible by everyone so if addtodo mai vgre useContext and vahi same context pass kroge provider ka parent banauge so u can access
       <>
      <AddTodo addTodo = {actions.addTodo}/>
        <TodoList deleteTodo = {actions.deleteTodo} editTodo = {actions.editTodo} todoFinished = {actions.todoFinished}/>
      </>
  )
}

export default App
