"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoById = exports.editTodoById = exports.getTodoByIndex = exports.getTodoById = exports.getAllTodo = exports.createTodo = void 0;
const CustomHttpError_1 = require("../http/CustomHttpError");
const Services = __importStar(require("../services/todo"));
const createTodo = async (req, res) => {
    const data = req.body;
    try {
        const result = await Services.createTodo(data);
        res.status(201).json({ success: true, message: "Successfully created", data: result });
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            res.status(error.status).json({ error: error.error, message: error.message });
            return;
        }
        res.status(500).json({ error: "Internal Server Error", message: "error in the controller file" });
    }
};
exports.createTodo = createTodo;
const getAllTodo = async (req, res) => {
    try {
        const result = await Services.getAllTodo();
        res.status(200).json({ success: true, message: "Fetched successfully", data: result });
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            res.status(error.status).json({ error: error.error, message: error.message });
            return;
        }
        res.status(500).json({ error: "Internal Server Error", message: "error in the controller file" });
    }
};
exports.getAllTodo = getAllTodo;
const getTodoById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Services.getTodoById(id);
        res.status(200).json({ success: true, message: "Item fetched ", data: result });
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            res.status(error.status).json({ error: error.error, message: error.message });
            return;
        }
        res.status(500).json({ error: "Internal Server Error", message: "error in the controller file" });
    }
};
exports.getTodoById = getTodoById;
const getTodoByIndex = async (req, res) => {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    try {
        const result = await Services.getTodoByIndex(page, limit);
        res.status(200).json({ success: true, message: "Items fetched successfully", data: result });
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            res.status(error.status).json({ error: error.error, message: error.message });
            return;
        }
        res.status(500).json({ error: "Internal Server Error", message: "error in the controller file" });
    }
};
exports.getTodoByIndex = getTodoByIndex;
const editTodoById = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const result = await Services.editTodoById(id, data);
        res.status(200).json({ success: true, message: "Edited sucessfully", data: result });
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            res.status(error.status).json({ error: error.error, message: error.message });
            return;
        }
        res.status(500).json({ error: "Internal Server Error", message: "error in the controller file" });
    }
};
exports.editTodoById = editTodoById;
const deleteTodoById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Services.deleteTodoById(id);
        res.status(200).json({ success: true, message: "Item Deleted successfully", data: result });
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            res.status(error.status).json({ error: error.error, message: error.message });
            return;
        }
        res.status(500).json({ error: "Internal Server Error", message: "error in the controller file" });
    }
};
exports.deleteTodoById = deleteTodoById;
