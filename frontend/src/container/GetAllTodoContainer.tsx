import React, { useEffect, useState } from "react";

import type { FormData } from "../component/CreateTodoComponent";
import GetAllTodoComponent from "../component/GetAllTodoComponent";

type apiResponse = {
    success : boolean,
    message : string,
    data : FormData[]
}

const GetAllTodoContainer : React.FC = () =>{

    const [loading,setloading] = useState<boolean>(false);
    const [err , seterr] = useState<string | null>(null)
    const [message , setmessage] = useState<string | null >(null);

    const [formDatas , setFormData] = useState<FormData[]>([{
        id : "",
        title : "",
        description : "",
        status : "",
        endDate : ""
    }])

    const handleDelete = async (id : string) : Promise<void>=>{
        console.log("Id from frontend : ",id);
        try{
            const api  = await fetch(`http://localhost:8000/api/deleteTodoById/${id}`,{
                method: "DELETE"
            })

            const result : apiResponse = await api.json();
            console.log(result);
            setmessage(result.message);
        }
        catch(error){
            if(error instanceof Error){
                seterr(error.message);
            }
            seterr("Unknown error in delete operation")
        }
    }

    useEffect( ()=>{

        const fetchItems = async() : Promise<void>=>{

            setloading(true);

            try{
                const api = await fetch("http://localhost:8000/api/getAllTodo",{
                    method : "GET",
                    headers : {
                        "Content-Type" : "application/json"
                    }
                })

                const result = await api.json();

                if(result.length === 0){
                    setmessage("no data from backend");
                }
                console.log("data from the backend : ",result);

                setFormData(result.data);
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            catch(error){
                seterr("error in the data fetching..");
            }
            finally{
                setloading(false);
            }

            
        }

        fetchItems();
        

    },[] )

    return <GetAllTodoComponent loading={loading} err={err} message={message} formDatas={formDatas} handleDelete={handleDelete} />
}
export default GetAllTodoContainer;