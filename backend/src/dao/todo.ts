import {Todo} from "../model/Todo"

export type CreateTodoRequest = {
    title : string,
    description : string,
}

export type CreateTodoResponse = {
    _id : string,
    title : string,
    description : string,
    status : string,
    lastDate?: string,
    createdAt : string,
    updatedAt : string
}

export type CreateTodoFromRepo = Todo;

export type Pagination = {
    page : number,
    limit : number
}