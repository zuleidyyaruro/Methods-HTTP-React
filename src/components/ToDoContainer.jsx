import {useState, useEffect} from "react";
import axios from "axios";

import ToDo from "./ToDo";
import CreateToDo from "./CreateToDo";


const ToDoContainer = () => {

    //Variable de estado para guardar los datos de la api
    const [toDo, setToDo]=useState([]);
    //Variable de estado para guardar los id obtenidos
    const [id, setId]=useState(null);
    //Estado para manejar el nuervo ToDo
    const [newToDo, setNewToDo]=useState(null)

    const [updateToDo, setUpdateToDo]=useState(null);

    //useEffect para obtener los datos

    useEffect(()=>{
        axios.get("https://todos-academlo.herokuapp.com/api/todos")
            .then((response)=>{
                setToDo(response.data.todos)
            })
    }, []);

    // useEffect para eliminar el todo por medio del id

    useEffect(()=>{
        if(id){
            axios.delete(`https://todos-academlo.herokuapp.com/api/todo/${id}`)
                .then((response)=>{
                    setToDo((prevState) => prevState.filter((value) => value._id !== id))
                })
        }
    }, [id])

    //useEffect para Crear un ToDo

    useEffect(()=>{
        if(newToDo){
            const res=axios.post("/api/todo", newToDo, {
                baseURL:"https://todos-academlo.herokuapp.com/"
            })
            res.then((response)=>{
                setToDo((prevState)=>[response.data, ...prevState])
            })
        }
    }, [newToDo])


    const handleDeleteToDo=(id)=>{
        setId(id)
    }

    const handleCreateToDo=(data)=>{
        setNewToDo(data)
    }

    const myArrayOfToDo=toDo.map((value, index) =>
        <ToDo id={value._id} task={value.task} student={value.student} completed={value.isCompleted} key={index+1} onDelete={handleDeleteToDo}/>
    )

    return (
        <div>
            <h1>Evaluation Methods HTTP</h1>
            <CreateToDo onCreate={handleCreateToDo}/>
            {toDo.length>0 && myArrayOfToDo}
        </div>
    );
}

export default ToDoContainer;