"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoById = exports.editTodoById = exports.getTodoByIndex = exports.getTodoById = exports.getAllTodo = exports.CreateTodo = void 0;
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
        if (result.length === 0) {
            throw new CustomHttpError_1.CustomHttpError(404, "Resource not found", "There is no data in the database");
        }
        return result;
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
const getTodoByIndex = async (start, limit) => {
    try {
        const startingIndex = (start - 1) * limit;
        const arr = await Todo_1.TodoModel.find().skip(startingIndex).limit(limit);
        if (arr.length === 0) {
            throw new CustomHttpError_1.CustomHttpError(400, "Data Not found", "There is no data in this limit");
        }
        return arr;
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            throw error;
        }
        throw new CustomHttpError_1.CustomHttpError(500, "Internal server error", "Problem in repo");
    }
};
exports.getTodoByIndex = getTodoByIndex;
const editTodoById = async (id, data) => {
    try {
        const result = await Todo_1.TodoModel.findByIdAndUpdate(id, { $set: data }, { new: true });
        if (result) {
            return result;
        }
        throw new CustomHttpError_1.CustomHttpError(400, "Resource not found", "data is not exist in the database");
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            throw error;
        }
        throw new CustomHttpError_1.CustomHttpError(500, "Internal Server Error", "problem in the repo file");
    }
};
exports.editTodoById = editTodoById;
const deleteTodoById = async (id) => {
    try {
        const result = await Todo_1.TodoModel.findByIdAndDelete(id);
        if (result) {
            return result;
        }
        throw new CustomHttpError_1.CustomHttpError(400, "Resource not found", "data is not available to delete");
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            throw error;
        }
        throw new CustomHttpError_1.CustomHttpError(500, "Internal Server Error", "problem in the repo file");
    }
};
exports.deleteTodoById = deleteTodoById;
