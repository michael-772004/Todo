"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoResponse = void 0;
const todoResponse = (data) => {
    const result = {
        id: data._id.toString(),
        title: data.title,
        description: data.description,
        status: data.status,
        lastDate: data.lastDate,
        createdAt: data.createdAt?.toISOString(),
        updatedAt: data.updatedAt?.toISOString()
    };
    return result;
};
exports.todoResponse = todoResponse;
