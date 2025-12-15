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
        formData : FormData,
        loading : boolean,
        err : boolean,
        message : string,
        handleChange : (e : React.ChangeEvent<HTMLInputElement |HTMLSelectElement>) => void,
        handleSubmit : (e : React.FormEvent)=> void
    }

    const Todo : React.FC<Prop> = ({formData,loading,err,message, handleChange,handleSubmit}) =>{
        return(
            <>  

                {loading && (<p>Loading...</p>)}

                {err && (<p>{err}</p>)}

                {message && (
                    <div>
                        <p>{message}</p>
                    </div>
                )}
                

                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Title *</label>
                    <input
                        name="title" 
                        value={formData.title} 
                        onChange={handleChange} 
                        placeholder="Enter the title " 
                        required
                    />

                    <label htmlFor="">Description *</label>
                    <input 
                        name="description"
                        value={formData.description} 
                        onChange={handleChange} 
                        placeholder="Enter the Description" 
                        required
                    />

                    <label htmlFor="">Status</label>
                    <select 
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="">Select the Status</option>
                        <option value="Started">Started</option>
                        <option value="Not yet started">Not yet started</option>
                        <option value="Closed">Closed</option>
                    </select>

                    <label htmlFor="">End Date</label>
                    <input 
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange} 
                    />

                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }

    export default Todo;