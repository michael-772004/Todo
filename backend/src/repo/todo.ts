import {Todo , TodoModel} from "../model/Todo"
import { DocumentType } from "@typegoose/typegoose"
import { CreateTodoRequest, CreateTodoResponse } from "../dao/todo"
import { CustomHttpError } from "../http/CustomHttpError"

export const CreateTodo = async(data : Todo) : Promise<DocumentType<Todo>> =>{
    try{
        const result : DocumentType<Todo> | null  = await TodoModel.findOne({title : data.title});
        if(result){
            throw new CustomHttpError(
                400,
                "Duplicate",
                "Existing todo so we can't create it "
            )
        }
        const answer : DocumentType<Todo>   = await TodoModel.create(data);
        return answer;
    }
    catch(error){
        if(error instanceof CustomHttpError){
            throw error
        }

        throw new CustomHttpError(
            500,
            "Internal Server Error",
            "error in database insertion part"
        )
    }
}

export const getAllTodo = async(): Promise<DocumentType<Todo>[]> =>{
    try{
        const result : DocumentType<Todo>[] = await TodoModel.find();
        if(result.length === 0){
            throw new CustomHttpError(404,"Resource not found","There is no data in the database");
            
        }
        return result;
        
    }
    catch(error){
        if(error instanceof CustomHttpError){
            throw error
        }

        throw new CustomHttpError(
            500,
            "Internal Server Error",
            "error in data fetching from the database"
        )
    }
    
}

export const getTodoById = async(id : string) : Promise<DocumentType<Todo>>=>{
    try{
        const data : DocumentType<Todo> | null = await TodoModel.findOne({_id : id});
        if(data){
            return data;
        }
        throw new CustomHttpError(400,"Data not found","There is no document with this id ");

    }
    catch(error){
        if(error instanceof CustomHttpError){
            throw error
        }

        throw new CustomHttpError(
            500,
            "Internal Server Error",
            "error in data fetching from the database"
        )
    }
}

export const getTodoByIndex = async(start : number , limit : number): Promise<DocumentType<Todo>[]> =>{
    try{
        const startingIndex = (start - 1) * limit;
        const arr = await TodoModel.find().skip(startingIndex).limit(limit);
        
        if(arr.length === 0){
            throw new CustomHttpError(400,"Data Not found","There is no data in this limit");
        }
        return arr;

    }
    catch(error){
        if(error instanceof CustomHttpError){
            throw error
        }
        throw new CustomHttpError(500,"Internal server error","Problem in repo")
    }
}

export const editTodoById = async (id : string, data : Todo) : Promise<DocumentType<Todo>> =>{
    try{
        const result : DocumentType<Todo> | null = await TodoModel.findByIdAndUpdate(id,
            {$set : data},
            {new : true}
        )
        if(result){
            return result;
        }
        throw new CustomHttpError(400,"Resource not found","data is not exist in the database")

    }
    catch(error){
        if(error instanceof CustomHttpError){
            throw error;
        }
        throw new CustomHttpError(500,"Internal Server Error","problem in the repo file");
    }
}

export const deleteTodoById = async (id: string) : Promise<DocumentType<Todo>>=>{
    try{
        const result : DocumentType<Todo> | null = await TodoModel.findByIdAndDelete(id)
        if(result){
            return result
        }
        throw new CustomHttpError(400,"Resource not found","data is not available to delete")
    }
    catch(error){
        if(error instanceof CustomHttpError){
            throw error;
        }
        throw new CustomHttpError(500,"Internal Server Error","problem in the repo file");
    }
}