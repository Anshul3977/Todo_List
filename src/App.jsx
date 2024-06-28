
import { useContext, useReducer, useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContext from './context/TodoContext';
import todoReducer from './reducers/todoReducer';
import TodoDispatchContext from './context/TodoDispatchContext';

function App() {
 
  const [list,dispatch] = useReducer(todoReducer , []) //initial state i.e empty
  return (
    // bcoz of this value it is accessible by everyone so if addtodo mai vgre useContext and vahi same context pass kroge provider ka parent banauge so u can access
    <TodoContext.Provider value={{list}}> 
    <TodoDispatchContext.Provider value={{dispatch}}>
    <AddTodo />
      <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
