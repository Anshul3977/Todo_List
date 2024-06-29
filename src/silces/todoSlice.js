import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (todo, action) => {
            const todoText = action.payload.todoText;
            todo.todoList.push({
                id: todo.todoList.length + 1,
                todoData: todoText,
                finished: false,
            });
        },
        editTodo: (todo, action) => {
            const payloadTodo = action.payload.todo;
            const todoText = action.payload.todoText;
            todo.todoList = todo.todoList.map((t) => {
                if (t.id == payloadTodo.id) {
                    t.todoData = todoText;
                }
                return t;
            });
        },
        deleteTodo: (todo, action) => {
            const payloadTodo = action.payload.todo;
            todo.todoList = todo.todoList.filter((t) => t.id != payloadTodo.id);
        },
        todoFinished: (todo, action) => {
            const payloadTodo = action.payload.todo;
            const isFinished = action.payload.isFinished;
            todo.todoList = todo.todoList.map((t) => {
                if (t.id == payloadTodo.id) {
                    todo.finished = isFinished;
                }
                return t;
            });
        },
    },
});

export const { addTodo, deleteTodo, editTodo, todoFinished } = todoSlice.actions;
export default todoSlice.reducer;
