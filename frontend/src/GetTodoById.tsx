import React from "react";
import type { FormData } from "./Todo";

type Props = {
    id : string
    handleId : (data : string) => void,
    handleSubmit : ()=> void,
    formData : FormData
    loading : boolean,
    err : string | null,
    message : string
}

const GetTodoById : React.FC<Props> = ({id,handleId,handleSubmit,formData,loading,err,message})=>{
    return (
        <>
            {loading && (<p>Loading...</p>)}

            {err !== null && (<p>err</p>)}

            <p>{message}</p>

            <input type="text" value={id} onChange={(e)=> handleId(e.target.value)} />
            <button onClick={handleSubmit}></button>
            <div>
            <p>{formData.title}</p>
            <p>{formData.description}</p>
            <p>{formData.status}</p>
            <p>{formData.endDate}</p>
        </div>
        
        </>
        
    )
}

export default GetTodoById;