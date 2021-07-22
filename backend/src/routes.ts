import { Router } from "express";
import { AddUserDescriptionByIdController } from "./controllers/AddUserDescriptionByIdController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserByUserNameController } from "./controllers/GetUserByUserNameController";
import { GetUserDetailController } from "./controllers/GetUserDetailController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { UpdateUserDetailsController } from "./controllers/UpdateUserDetailsController";

const addUserDescriptionByIdController = new AddUserDescriptionByIdController();
const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const getUserByUserNameController = new GetUserByUserNameController();
const getUserDetailController = new GetUserDetailController();
const updateUserDetailsController = new UpdateUserDetailsController();

const router = Router();

const baseAuthRoute = '/api/auth';

router.get(`${baseAuthRoute}/user`, ensureAuthenticated, getUserDetailController.handle)
router.get(`/user`, ensureAuthenticated, getUserDetailController.handle)
router.get('/user/:username', ensureAuthenticated, getUserByUserNameController.handle)

router.post('/users', createUserController.handle);
router.put('/api/users/description', ensureAuthenticated, addUserDescriptionByIdController.handle)
router.put('/api/users/edit', ensureAuthenticated, updateUserDetailsController.handle)

router.post(`${baseAuthRoute}/login`, authenticateUserController.handle);

export {router};