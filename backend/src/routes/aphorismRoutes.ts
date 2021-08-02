import { Router } from "express";
import { CreateAphorismController } from "../controllers/CreateAphorismController";
import { DeleteAphorismByIdController } from "../controllers/DeleteAphorismByIdController";
import { GetAphorismAndUserController } from "../controllers/GetAphorismAndUserController";
import { GetAphorismByIdController } from "../controllers/GetAphorismByIdController";
import { GetAphorismByUsernameController } from "../controllers/GetAphorismByUsernameController";
import { UpdateAphorismLikeCountController } from "../controllers/UpdateAphorismLikeCountController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const aphorismRouter = Router();

// controllers

const createAphorismController = new CreateAphorismController();
const deleteAphorismByIdController = new DeleteAphorismByIdController();
const getAphorismAndUserController = new GetAphorismAndUserController();
const getAphorismByIdController = new GetAphorismByIdController();
const getAphorismByUsernameController = new GetAphorismByUsernameController();
const updateAphorismLikeCountController = new UpdateAphorismLikeCountController();

// routes

aphorismRouter.get("/aphorisms/:username", getAphorismByUsernameController.handle)

aphorismRouter.get('/aphorism/:id', getAphorismByIdController.handle)

aphorismRouter.get('/aphorism/:id/details', getAphorismAndUserController.handle)

aphorismRouter.post("/aphorisms", ensureAuthenticated, createAphorismController.handle);

aphorismRouter.put("/aphorisms/like/:aphorism", ensureAuthenticated, updateAphorismLikeCountController.handle)

aphorismRouter.delete("/aphorisms/:aphorism", ensureAuthenticated, deleteAphorismByIdController.handle)

export { aphorismRouter };