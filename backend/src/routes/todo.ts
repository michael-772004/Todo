import express from "express"
import * as Controller from "../controller/todo"

const router = express.Router();

router.post("/create",Controller.createTodo);
router.get("/getAllTodo",Controller.getAllTodo);
router.get("/getTodoById/:id",Controller.getTodoById);
router.get("/getTodoByIndex",Controller.getTodoByIndex);

export default router;