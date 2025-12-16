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
const repo = __importStar(require("../repo/todo"));
const CustomHttpError_1 = require("../http/CustomHttpError");
const createTodo = async (data) => {
    try {
        const result = await repo.CreateTodo(data);
        return result;
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            throw error;
        }
        throw new CustomHttpError_1.CustomHttpError(500, "Internal Server Error", "Problem in services");
    }
};
exports.createTodo = createTodo;
const getAllTodo = async () => {
    try {
        const result = await repo.getAllTodo();
        return result;
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            throw error;
        }
        throw new CustomHttpError_1.CustomHttpError(500, "Internal Server Error", "Problem in services");
    }
};
exports.getAllTodo = getAllTodo;
const getTodoById = async (id) => {
    try {
        const result = await repo.getTodoById(id);
        return result;
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            throw error;
        }
        throw new CustomHttpError_1.CustomHttpError(500, "Internal Server Error", "Problem in services");
    }
};
exports.getTodoById = getTodoById;
const getTodoByIndex = async (start, limit) => {
    try {
        const result = await repo.getTodoByIndex(start, limit);
        return result;
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            throw error;
        }
        throw new CustomHttpError_1.CustomHttpError(500, "Internal Server Error", "Problem in services");
    }
};
exports.getTodoByIndex = getTodoByIndex;
const editTodoById = async (id, data) => {
    try {
        const result = await repo.editTodoById(id, data);
        return result;
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            throw error;
        }
        throw new CustomHttpError_1.CustomHttpError(500, "Internal Server Error", "Problem in services");
    }
};
exports.editTodoById = editTodoById;
const deleteTodoById = async (id) => {
    try {
        const result = await repo.deleteTodoById(id);
        return result;
    }
    catch (error) {
        if (error instanceof CustomHttpError_1.CustomHttpError) {
            throw error;
        }
        throw new CustomHttpError_1.CustomHttpError(500, "Internal Server Error", "Problem in services");
    }
};
exports.deleteTodoById = deleteTodoById;
