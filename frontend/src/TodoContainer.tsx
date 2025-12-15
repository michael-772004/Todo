import React, { useState } from "react";
import Todo from "./Todo";
import type { FormData , ResponseFromBackend } from "./Todo";


const TodoContainer : React.FC = ()=>{
    const [formData , setformData] = useState<FormData>({
        title : "",
        description : "",
        status : "Not yet started",
        endDate: ""
    })

    const [loading,setloading] = useState<boolean>(false);
    const [err, seterr] = useState<boolean>(false);
    const [message , setmessage] = useState<string>("");

        
    const handleChange =  (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) :void =>{
        setformData({
            ...formData,
            [e.target.name] : e.target.value
        }
            
        )
    }

    const handleSubmit = async (e : React.FormEvent): Promise<void>=>{
        e.preventDefault();
        console.log("data : ",formData)
        setloading(true);
        try{
            const api = await fetch ("http://localhost:8000/api/create",{
                method: "POST",
                headers : {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(formData)
            })
            const result : ResponseFromBackend = await api.json();
            console.log("data from api : ",result);
            setloading(false);
            setmessage(result.message);
        }
        catch(error ){
            seterr(true);
            setmessage("error in the data sending to the backend api... ");
        }finally{
            setloading(false);
        }
        
    }

    return <Todo formData={formData} loading={loading} err={err} message={message} handleChange={handleChange} handleSubmit={handleSubmit} />
}

export default TodoContainer;