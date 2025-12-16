import { CustomHttpError } from "../http/CustomHttpError";
import * as Services from "../services/todo"
import { Request, Response } from "express"
import type { CreateTodoFromRepo, CreateTodoRequest, Pagination } from "../dao/todo";
import { DocumentType } from "@typegoose/typegoose";

export const createTodo = async(req:Request,res:Response): Promise<void>=>{
    const data = req.body;
    try{
        const result = await Services.createTodo(data);
        res.status(201).json({success : true,message : "Successfully created",data : result})
    }
    catch(error){
        if(error instanceof CustomHttpError){
            res.status(error.status).json({error : error.error , message : error.message});
            return;
        }
        res.status(500).json({error : "Internal Server Error",message : "error in the controller file"})
        
    }
}

export const getAllTodo = async(req:Request,res:Response) : Promise<void>=>{
    try{
        const result = await Services.getAllTodo();
        res.status(200).json({success : true,message : "Fetched successfully",data : result})
    }
    catch(error){
        if(error instanceof CustomHttpError){
            res.status(error.status).json({error : error.error , message : error.message});
            return;
        }
        res.status(500).json({error : "Internal Server Error",message : "error in the controller file"})
        
    }
}

export const getTodoById = async(req:Request,res: Response) : Promise<void>=>{
    const id = req.params.id;
    try{
        const result = await Services.getTodoById(id);
        res.status(200).json({success : true,message : "Item fetched ",data : result});

    }
    catch(error){
        if(error instanceof CustomHttpError){
            res.status(error.status).json({error : error.error , message : error.message});
            return;
        }
        res.status(500).json({error : "Internal Server Error",message : "error in the controller file"})
        
    }
}


export const getTodoByIndex = async(req:Request<{},{},{}, Pagination>,res:Response) : Promise<void> =>{

    const page : number = Number(req.query.page);
    const limit : number = Number(req.query.limit);
    try{
        const result = await Services.getTodoByIndex(page,limit);
        res.status(200).json({success : true ,message : "Items fetched successfully",data : result});
    }
    catch(error){
        if(error instanceof CustomHttpError){
            res.status(error.status).json({error : error.error , message : error.message});
            return;
        }
        res.status(500).json({error : "Internal Server Error",message : "error in the controller file"})
        
    }
}

export const editTodoById = async (req: Request,res:Response) : Promise<void> =>{
    const id : string = req.params.id;
    const data : CreateTodoRequest = req.body;

    try{
        const result : DocumentType<CreateTodoFromRepo> = await Services.editTodoById(id,data);
        res.status(200).json({success : true,message:"Edited sucessfully",data : result})
    }
    catch(error){
        if(error instanceof CustomHttpError){
            res.status(error.status).json({error : error.error , message : error.message});
            return;
        }
        res.status(500).json({error : "Internal Server Error",message : "error in the controller file"})
        
    }
}

export const deleteTodoById = async (req:Request,res:Response): Promise<void> =>{
    const id : string = req.params.id;

    try{
        const result : DocumentType<CreateTodoFromRepo> = await Services.deleteTodoById(id);
        res.status(200).json({success : true,message : "Item Deleted successfully",data : result})
    }
    catch(error){
        if(error instanceof CustomHttpError){
            res.status(error.status).json({error : error.error , message : error.message});
            return;
        }
        res.status(500).json({error : "Internal Server Error",message : "error in the controller file"})
        
    }
}