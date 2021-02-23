import ToDoItem from "./ToDoItem";
import {useState} from "react";

const ToDo=({task, student, onDelete, id})=>{

    const [isCompleted, setIsCompleted]=useState(false);

    const handleChangeIsCompleted=()=>{
        setIsCompleted(!isCompleted);
    }

    return(
        <div className="list-container" >
            <ToDoItem handleIsCompleted={handleChangeIsCompleted}/>
            <span>{task} - {student} - {isCompleted ? "Completed": "Incomplete"}</span>
            <button onClick={()=>onDelete(id)}>Delete</button>
        </div>
    );
}

export default ToDo;