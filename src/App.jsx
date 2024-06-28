
import { useContext, useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContext from './context/TodoContext';

function App() {
  const [list,setList] = useState(
    [
        {id:1 , todoData:'todo1',finished:true},
        {id:2 , todoData:'todo2',finished:false},
    ]
  );
  return (
    // bcoz of this value it is accessible by everyone so if addtodo mai vgre useContext and vahi same context pass kroge provider ka parent banauge so u can access
    <TodoContext.Provider value={{list,setList}}> 
    <AddTodo updateList ={(todo) => setList([...list , {id:list.length + 1  ,todoData:todo,finished : false}])}/>
      <TodoList />
    </TodoContext.Provider>
  )
}

export default App
