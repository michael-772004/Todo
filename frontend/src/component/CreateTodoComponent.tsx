    import React from "react";

    export type FormData = {
        title : string,
        description : string,
        status : string,
        endDate : string
    }

    export type ResponseFromBackend = {
        message : string
    }

    type Prop = {
        loading : boolean,
        err : boolean,
        isValid : boolean,
        formData : FormData,
        message : string,
        handleChange : (e : React.ChangeEvent<HTMLInputElement |HTMLSelectElement>) => void,
        handleSubmit : (e : React.FormEvent)=> void
    }

    const CreateTodoComponent : React.FC<Prop> = ({isValid, formData,loading,err,message, handleChange,handleSubmit}) =>{
        return(
            <>  

                {loading && (<p>Loading...</p>)}

                {err && (<p>{err}</p>)}

                {message && (
                    <div>
                        <p>{message}</p>
                    </div>
                )}
                

                <form 
                    onSubmit={handleSubmit}
                    className="flex  flex-col md:flex-row gap-4 mb-4 w-full"
                    >
                    
                    <div className="flex flex-col">
                        <label htmlFor="">Title *</label>
                        <input
                            className="p-2 bg-white rounded-lg shadow"
                            name="title" 
                            value={formData.title} 
                            onChange={handleChange} 
                            placeholder="Enter the title " 
                            required
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="">Description *</label>
                        <input 
                            className="p-2 bg-white rounded-lg shadow"
                            name="description"
                            value={formData.description} 
                            onChange={handleChange} 
                            placeholder="Enter the Description" 
                            required
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="">Status</label>
                        <select 
                            className="p-2 bg-white rounded-lg shadow"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="">Select the Status</option>
                            <option value="Started">Started</option>
                            <option value="Not yet started">Not yet started</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </div>
                    

                    <div className="flex flex-col">
                        <label htmlFor="">End Date</label>
                        <input
                            className="p-2 bg-white rounded-lg shadow" 
                            type="date"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange} 
                        />
                    </div>
                    
                    <div >
                        
                        <button className={`p-2  ${isValid ? "bg-green-600" : "bg-green-200"} flex items-center rounded-lg `} type="submit">Submit</button>
                    </div>
                    
                </form>
            </>
        )
    }

    export default CreateTodoComponent;