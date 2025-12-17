import React, { useEffect, useState } from "react";
import CreateTodoComponent from "../component/CreateTodoComponent";
import type { FormData , ResponseFromBackend } from "../component/CreateTodoComponent";


const CreateTodoContainer : React.FC = ()=>{
    const [formData , setformData] = useState<FormData>({
        id : "",
        title : "",
        description : "",
        status : "Not yet started",
        endDate: ""
    })

    const [loading,setloading] = useState<boolean>(false);
    const [err, seterr] = useState<boolean>(false);
    const [message , setmessage] = useState<string>("");
    const [isValid, setisValid] = useState<boolean>(false);

    useEffect(()=>{
        if(formData.title !== "" && formData.description !== ""){
            setisValid(true);
        }
        else{
            setisValid(false);
        }
    },[formData])

        
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        catch(error ){
            seterr(true);
            setmessage("error in the data sending to the backend api... ");
        }finally{
            setloading(false);
        }
        
    }

    return <CreateTodoComponent isValid={isValid} formData={formData} loading={loading} err={err} message={message} handleChange={handleChange} handleSubmit={handleSubmit} />
}

export default CreateTodoContainer;