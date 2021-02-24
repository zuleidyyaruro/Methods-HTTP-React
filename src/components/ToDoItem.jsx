import {useForm} from "react-hook-form"
import {useState} from "react"

const ToDoItem = ({handleIsComplete, completed}) => {

    const {register, handleSubmit} = useForm();


    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Renderizado condicional para poner el checkbox seleccionado o no */}
            {completed ?
                <input checked className="check" onChange={handleIsComplete} type="checkbox" placeholder="check-box"
                       name="check-box"
                       ref={register}/> :
                <input className="check" onChange={handleIsComplete} type="checkbox" placeholder="check-box"
                       name="check-box"
                       ref={register}/>}

        </form>
    );
}

export default ToDoItem;