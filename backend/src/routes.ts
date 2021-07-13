import { Router } from "express";
import { AddUserDescriptionByIdController } from "./controllers/AddUserDescriptionByIdController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserDetailController } from "./controllers/GetUserDetailController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const addUserDescriptionByIdController = new AddUserDescriptionByIdController();
const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const getUserDetailController = new GetUserDetailController();

const router = Router();

const baseAuthRoute = '/api/auth';

router.get('/users', (req, res)=>{
    return res.send("hello world");
})

router.get(`${baseAuthRoute}/user`, ensureAuthenticated, getUserDetailController.handle)
router.get(`/user`, ensureAuthenticated, getUserDetailController.handle)

router.post('/users', createUserController.handle);
router.put('/api/users/description', ensureAuthenticated, addUserDescriptionByIdController.handle)

router.post(`${baseAuthRoute}/login`, authenticateUserController.handle);

export {router};