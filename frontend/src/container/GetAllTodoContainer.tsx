import React, { useEffect, useState } from "react";

import type { FormData } from "../component/CreateTodoComponent";
import GetAllTodoComponent from "../component/GetAllTodoComponent";

const GetAllTodoContainer : React.FC = () =>{

    const [loading,setloading] = useState<boolean>(false);
    const [err , seterr] = useState<string | null>(null)
    const [message , setmessage] = useState<string | null >(null);

    const [formDatas , setFormData] = useState<FormData[]>([{
        title : "",
        description : "",
        status : "",
        endDate : ""
    }])

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

    return <GetAllTodoComponent loading={loading} err={err} message={message} formDatas={formDatas} />
}
export default GetAllTodoContainer;