import { CreateTodoFromRepo } from "../dao/todo";
import { DocumentType } from "@typegoose/typegoose";
import {CreateTodoResponse} from "../dao/todo";

export const CreatetodoResponse = (data:DocumentType<CreateTodoFromRepo>) :CreateTodoResponse =>{
    const result : CreateTodoResponse = {
        id : data._id.toString(),
        title : data.title,
        description : data.description,
        status : data.status,
        lastDate:data.lastDate,
        createdAt:data.createdAt?.toISOString(),
        updatedAt:data.updatedAt?.toISOString() 
    }
    return result;
}

export const GetAllTodoResponse = (data : DocumentType<CreateTodoFromRepo>[]):CreateTodoResponse[] => {
    
    const result : CreateTodoResponse[] = [];

    for(let i=0;i < data.length ;i++){
        const temp : CreateTodoResponse = {
        id : data[i]._id.toString(),
        title : data[i].title,
        description : data[i].description,
        status : data[i].status,
        lastDate:data[i].lastDate,
        createdAt:data[i].createdAt?.toISOString(),
        updatedAt:data[i].updatedAt?.toISOString() 
    }
    result.push(temp);
    }

    return result;
}