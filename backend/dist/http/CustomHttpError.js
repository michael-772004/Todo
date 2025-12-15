"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHttpError = void 0;
class CustomHttpError extends Error {
    constructor(status, error, message) {
        super(message);
        this.status = status;
        this.error = error;
        this.message = message;
    }
}
exports.CustomHttpError = CustomHttpError;
