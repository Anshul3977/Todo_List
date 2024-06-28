import { useContext, useState } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
function TodoList(){
const {list,setList} = useContext(TodoContext);
return(
    <div>
        {list.length > 0 && 
        list.map (todo => <Todo 
                                key={todo.id} 
                                id={todo.id}
                                todoData={todo.todoData}  
                                isFinished={todo.finished}
                                changeFinished = {(isFinished) =>{
                                 const updatedList =  list.map(t =>{
                                        if(t.id== todo.id){
                                            todo.finished = isFinished;
                                        }
                                        return t;
                                    });
                                    setList(updatedList)
                                }}
                                onDelete ={() => {
                                    const updatedList =  list.filter(t => t.id !== todo.id)
                                setList(updatedList);

                                }}
                                onEdit = {(todoText) =>{
                                    const updatedList =  list.map(t =>{
                                        if(t.id== todo.id){
                                            todo.todoData = todoText;
                                        }
                                        return t;
                                    });
                                    setList(updatedList)
                                }}
                                />
                                )}
    </div>
);
}
export default TodoList;