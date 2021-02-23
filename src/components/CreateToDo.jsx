import { useForm } from "react-hook-form";

const CreateToDo=({onCreate})=>{

    const { register, handleSubmit, reset } = useForm();

    const onSubmit=(data)=>{
        onCreate(data)
        reset({
            task:"",
            student:"",
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Write the Task" name="task" ref={register} />
            <input type="text" placeholder="Writhe your Name" name="student" ref={register} />

            <button>Submit</button>
        </form>
    );
}
export default CreateToDo;