import React from "react";
import type { FormData } from "./TodoComponent";

type Prop = {
    loading : boolean,
    err : string | null,
    message : string,
    formDatas : FormData[]
}

const GetAllTodoComponent : React.FC<Prop> = ( {loading, err, message,formDatas })=>{
    return(
        
            <div className="bg-gray-200 min-h-screen">
                <h1 className="text-green-700 font-bold text-xl ">Todo application</h1>
            
            {loading && (<p>Loading...</p>)}

            { err !== null && (<p>{err}</p>)}

            { !loading && err === null && (
                <div className="flex flex-col p-4 ">
                    {formDatas.map((formData)=>(
                        <div>
                            <p>Title : {formData.title}</p>
                            <p>Description :{formData.description}</p>
                            <p>Status : {formData.status}</p>
                        </div>
                    ))}
                </div>
                
            )   
            }
            </div>

            
        
    )
}

export default GetAllTodoComponent;