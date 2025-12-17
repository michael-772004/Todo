import {Todo} from "../model/Todo"

export type CreateTodoRequest = {
    title : string,
    description : string,
}

export type CreateTodoResponse = {
    id : string,
    title : string,
    description : string,
    status : string | undefined,
    lastDate?: string,
    createdAt?: string,
    updatedAt?: string
}

export type CreateTodoFromRepo = Todo;

export type Pagination = {
    page : number,
    limit : number
}