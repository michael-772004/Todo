import { DocumentType } from "@typegoose/typegoose";
import * as repo from "../repo/todo";
import { CreateTodoRequest ,CreateTodoFromRepo, CreateTodoResponse} from "../dao/todo"
import { CustomHttpError } from "../http/CustomHttpError";
import * as Transformer from "../transformer/todo";

export const createTodo = async (data : CreateTodoRequest ) : Promise<CreateTodoResponse>=>{
    try{
        const result : DocumentType<CreateTodoFromRepo> = await repo.CreateTodo(data);
        const answer : CreateTodoResponse = Transformer.CreatetodoResponse(result);
        return answer;
    }
    catch(error){
        if(error instanceof CustomHttpError){
            throw error;
        }
        throw new CustomHttpError(500,"Internal Server Error","Problem in services")
    }
    

}

export const getAllTodo = async(): Promise<CreateTodoResponse[]> =>{
    try{
        const result : DocumentType<CreateTodoFromRepo>[] = await repo.getAllTodo();

        const answer : CreateTodoResponse[] = Transformer.GetAllTodoResponse(result);
        return answer;
    }
    catch(error){
        if(error instanceof CustomHttpError){
            throw error;
        }
        throw new CustomHttpError(500,"Internal Server Error","Problem in services")
    }
}

export const getTodoById = async(id : string):Promise<DocumentType<CreateTodoFromRepo>> =>{
    try{
        const result : DocumentType<CreateTodoFromRepo> = await repo.getTodoById(id);
        return result;
    }
    catch(error){
        if(error instanceof CustomHttpError){
            throw error;
        }
        throw new CustomHttpError(500,"Internal Server Error","Problem in services")
    }
}

export const getTodoByIndex = async(start: number,limit:number) : Promise<DocumentType<CreateTodoFromRepo>[]> =>{
    try{
        const result : DocumentType<CreateTodoFromRepo>[] = await repo.getTodoByIndex(start,limit);
        return result;
    }
    catch(error){
        if(error instanceof CustomHttpError){
            throw error;
        }
        throw new CustomHttpError(500,"Internal Server Error","Problem in services")
    }
}

export const editTodoById = async(id:string,data : CreateTodoRequest) : Promise<DocumentType<CreateTodoFromRepo>> =>{
    try{
        const result : DocumentType<CreateTodoFromRepo> | null = await repo.editTodoById(id,data);
        return result;
    }
    catch(error){
        if(error instanceof CustomHttpError){
            throw error;
        }
        throw new CustomHttpError(500,"Internal Server Error","Problem in services")
    }
}

export const deleteTodoById = async (id:string) : Promise<DocumentType<CreateTodoFromRepo>> =>{
    try{
        const result : DocumentType<CreateTodoFromRepo> | null = await repo.deleteTodoById(id);
        return result;

    }
    catch(error){
        if(error instanceof CustomHttpError){
            throw error;
        }
        throw new CustomHttpError(500,"Internal Server Error","Problem in services")
    }

}