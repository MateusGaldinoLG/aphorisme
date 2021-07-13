import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();

const router = Router();

const baseAuthRoute = '/api/auth';

router.get('/users', (req, res)=>{
    return res.send("hello world");
})

router.post('/users', createUserController.handle);

router.post(`${baseAuthRoute}/login`, authenticateUserController.handle);

export {router};