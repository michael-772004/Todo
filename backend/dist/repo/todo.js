"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoById = exports.getAllTodo = exports.CreateTodo = void 0;
const Todo_1 = require("../model/Todo");
const CustomHttpError_1 = require("../http/CustomHttpError");
const CreateTodo = async (data) => {
    try {
        const result = await Todo_1.TodoModel.findOne({ title: data.title });
        if (result) {
            throw new CustomHttpError_1.CustomHttpError(400, "Duplicate", "Existing todo so we can't create it ");
        }
        const answer = await Todo_1.TodoModel.create(data);
        return answer;
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            throw error;
        }
        throw new CustomHttpError_1.CustomHttpError(500, "Internal Server Error", "error in database insertion part");
    }
};
exports.CreateTodo = CreateTodo;
const getAllTodo = async () => {
    try {
        const result = await Todo_1.TodoModel.find();
        if (result) {
            return result;
        }
        throw new CustomHttpError_1.CustomHttpError(404, "Resource not found", "There is no data in the database");
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            throw error;
        }
        throw new CustomHttpError_1.CustomHttpError(500, "Internal Server Error", "error in data fetching from the database");
    }
};
exports.getAllTodo = getAllTodo;
const getTodoById = async (id) => {
    try {
        const data = await Todo_1.TodoModel.findOne({ _id: id });
        if (data) {
            return data;
        }
        throw new CustomHttpError_1.CustomHttpError(400, "Data not found", "There is no document with this id ");
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            throw error;
        }
        throw new CustomHttpError_1.CustomHttpError(500, "Internal Server Error", "error in data fetching from the database");
    }
};
exports.getTodoById = getTodoById;
