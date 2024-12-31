import { useState } from "react"
import "./TodoForm.css";

function TodoForm({addTodo}){
    const [task,setTask]=useState("")
    const [description,setDescription]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo({task,description})
        setTask("")
        setDescription("")
        
    }
    return(
        <>
        <form onSubmit={handleSubmit} className="todo-form1">
            <input 
            type="text"
            className="form1"
            placeholder="Enter Your Task"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />
            <input
            type="text"
            className="form2"
            value={description}
            placeholder="Enter Your task description"
            onChange={(e)=>setDescription(e.target.value)}
            />
            <button type="submit">add Task </button>
        </form>

        </>
    )

}

export default TodoForm