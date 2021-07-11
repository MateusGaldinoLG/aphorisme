import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const createUserController = new CreateUserController();

const router = Router();

router.get('/users', (req, res)=>{
    return res.send("hello world");
})

router.post('/users', createUserController.handle);

export {router};