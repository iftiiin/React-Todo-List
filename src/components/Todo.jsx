import React, { useEffect, useState } from "react";
import TodoItems from "./TodoItems";
const Todo =() => {
    const [todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : [])
    const [inputValue, setInputValue] = useState('')
    const addTask = ()=>{
        if (inputValue.trim() !== ""){
            const newTodo = {
                id: Date.now(),
                text: inputValue.trim(),
                iscomplete: false
            }
            setTodoList([...todoList, newTodo])
            setInputValue("")
        }
        
    }
    const deleteTodo =(id) =>{
        setTodoList(todoList.filter(todo=> todo.id !== id ))
    }

    const toggle = (id )=> {
        setTodoList(todoList.map(todo => todo.id === id ? {...todo, iscomplete: !todo.iscomplete}: todo))
    }
    
    useEffect(()=> {
        localStorage.setItem("todos", JSON.stringify(todoList))
    },[todoList])
    
    return (
        <div className="bg-gray-800 shadow-lg rounded-lg place-self-center w-11/12 max-w-md min-h-[450px] flex flex-col p-7
        flex flex-col ">
            <h1 className="text-xl font-bold mb-4 ">My ToDo List</h1>

            <div className="mb-4">
                <input type="text" placeholder="Add your task" className="p-2 bg-gray-700 text-slate-100 rounded w-[70%]" onChange={(e)=> setInputValue(e.target.value)} value={inputValue}/>
                <button className="w-[25%] ml-4  p-2 bg-blue-500 rounded text-slate-100 font-semibold" onClick={addTask}>Add</button>
            </div>

            {
                todoList.map(todo => (
                    <TodoItems key={todo.id}  todo={todo} deleteTodo= {deleteTodo} toggle={toggle}/>
                ))
            }

        </div>
       
    )
}

export default Todo