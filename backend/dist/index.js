"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const todo_1 = __importDefault(require("./routes/todo"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.json());
app.use("/api", todo_1.default);
app.use("/", (req, res) => {
    res.send({
        "success": true,
        "message": "backend is live"
    });
});
const port = process.env.PORT;
app.listen(port, async () => {
    await (0, db_1.default)();
    console.log(`server is running in http://localhost:${port}`);
});
