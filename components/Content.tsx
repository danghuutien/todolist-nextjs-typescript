import React, { useRef } from "react"
import Addtodo from "./Addtodo"
import CountTodo from "./CountTodo";
import ShowTodo from "./ShowTodo"
import { todoListSelector } from "../redux/selector";
import { useSelector } from "react-redux";
import TodoType from "../type/type";

const Content = () => {
    const todos = useSelector(todoListSelector);
    return (
        <div className="bg-white p-2.5">
            <Addtodo  />
            <ul className="h-80 overflow-y-scroll" >
                {todos.length > 0 && (todos.map((todo: TodoType)=>
                    (<ShowTodo key = {todo.id}
                        id = {todo.id} 
                        title = {todo.title}
                        checked = {todo.checked}
                    />)
                
                ))}

            </ul>
            <CountTodo/>
        </div>
    )
}
export default Content