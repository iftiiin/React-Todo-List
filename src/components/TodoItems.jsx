import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faTrash  } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faRegCircle } from "@fortawesome/free-regular-svg-icons";
const TodoItems = ({todo, deleteTodo, toggle}) => {
    return (
            <>
            <ul className="my-1">
                <li className="flex items-center justify-between bg-gray-700 p-2 rounded" >
                    <div className="space-x-2" onClick={()=>toggle(todo.id)}>
                        <FontAwesomeIcon icon={todo.iscomplete ? faCircleCheck : faRegCircle } /> 
                        <span className={`${todo.iscomplete ? "line-through" : ""}`}>{todo.text}</span>
                    </div>
                    <div className="space-x-2">
                        <button className="text-red-500 hover:text-red-600" onClick={()=> deleteTodo(todo.id)}><FontAwesomeIcon icon={faTrash}  /></button>
                    </div>
                    
                </li> 
                
            </ul>

            </>
    )
}
export default TodoItems