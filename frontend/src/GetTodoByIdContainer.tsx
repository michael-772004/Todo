import React, { useState }  from "react";
import GetTodoById from "./GetTodoById";
import type { FormData } from "./Todo";

type ApiResponse = {
    success : boolean,
    message : string,
    data : FormData
}

const GetTodoByIdContainer : React.FC = ()=>{
    const [formdata, setformdata] = useState<FormData>({
        title : "",
        description : "",
        status : "Not yet started",
        endDate: ""
    })
    const [id , setid] = useState<string>("");
    const [loading , setloading] = useState<boolean>(false);
    const [err , seterr] = useState<string | null>(null);
    const [message ,setmessage] = useState<string>("");

    const handleId = (id : string) :void=>{
        setid(id);
    }

    const handleSubmit = async () : Promise<void> =>{
        try{
            setloading(true);
            const api = await fetch(`http://localhost:8000/api/getTodoById/${id}`,{
                method : "GET"
            })

            const result : ApiResponse  = await api.json();
            console.log("result from backend api : ",result)
            setmessage(result.message);
            setformdata({
                title : result.data.title,
                description : result.data.description,
                status : result.data.status,
                endDate : result.data.endDate
            })
        }
        catch(error){
            seterr("error in the backend api ");
        }
        finally{
            setloading(false);
        }
    }

    return <GetTodoById formData={formdata} id={id} handleId={handleId} handleSubmit={handleSubmit} loading={loading} err={err} message={message} />
}

export default GetTodoByIdContainer;