import React from "react";

const Todo =() => {
    return (
        <div className="bg-gray-800 shadow-lg rounded-lg place-self-center w-11/12 max-w-md min-h-[450px] flex flex-col p-7
        flex flex-col ">
            <h1 class="text-xl font-bold mb-4 ">My To-Do List</h1>

            <div>
                <input type="text" placeholder="Add your task" className="p-2 bg-gray-700 text-slate-100 rounded w-[70%]"/>
                <button className="w-[25%] ml-4  p-2 bg-blue-500 rounded text-slate-100 font-semibold">Add</button>
            </div>
       

        </div>
       
    )
}

export default Todo