import React from "react";
import type { FormData } from "./CreateTodoComponent";
import CreateTodoContainer from "../container/CreateTodoContainer";

type Prop = {
    loading : boolean,
    err : string | null,
    message : string | null,
    formDatas : FormData[],
    handleDelete : (id:string)=>void
}

const GetAllTodoComponent : React.FC<Prop> = ( {loading, err, message,formDatas,handleDelete })=>{
    return(
        
            <div className="bg-gray-200 min-h-screen p-8">
                <div className="flex md:flex-row flex-col justify-between mb-4 ">
                    <div>
                        <h1 className="text-green-700 font-bold text-xl  ">Todo application</h1>
                    </div>
                    
                    
                    
                </div>

                <CreateTodoContainer />
                
            
            {loading && (<p>Loading...</p>)}

            { err !== null && (<p>{err}</p>)}

            {message !==null && (<p>{message}</p>)}

            { !loading && err === null && (
                <div className="flex md:flex-row flex-col gap-4 w-full md:flex-wrap" >
                    {formDatas.map((formData)=>(
                        <div className="bg-white p-4 rounded-lg border-1 border-gray-100 " key={formData.id}>
                            <button className="bg-red-200 p-2 rounded-lg shadow" onClick={()=>handleDelete(formData.id)}>Delete</button>
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