import {useForm} from "react-hook-form"

const ToDoItem = ({}) => {

    const {register, handleSubmit} = useForm();

    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className="check" type="checkbox" placeholder="check-box" name="check-box"
                   ref={register}/>
        </form>
    );
}

export default ToDoItem;