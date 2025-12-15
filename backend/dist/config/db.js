"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectDb = async () => {
    const mongodbUrl = process.env.MONGODB_URL || "";
    try {
        await mongoose_1.default.connect(mongodbUrl);
        console.log("Database is connected");
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};
exports.default = connectDb;
