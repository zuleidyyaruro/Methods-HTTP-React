import ToDoItem from "./ToDoItem";
import {useState} from "react";

const ToDo=({task, student, onDelete, id, completed })=>{

    const [isCompleted, setIsCompleted]=useState(completed);

    const handleChangeIsCompleted=()=>{
        setIsCompleted(!isCompleted);
    }



    return(
        <div className="list-container" >
            <ToDoItem completed={isCompleted} handleIsComplete={handleChangeIsCompleted}/>
            <span>{task} - {student} - {isCompleted ? "Completed": "Incomplete"} </span>
            <button onClick={()=>onDelete(id)}>Delete</button>
        </div>
    );
}

export default ToDo;