import { Router } from "express";
import { CreateAphorismController } from "../controllers/CreateAphorismController";
import { DeleteAphorismByIdController } from "../controllers/DeleteAphorismByIdController";
import { GetAphorismByUsernameController } from "../controllers/GetAphorismByUsernameController";
import { UpdateAphorismLikeCountController } from "../controllers/UpdateAphorismLikeCountController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const aphorismRouter = Router();

// controllers

const createAphorismController = new CreateAphorismController();
const deleteAphorismByIdController = new DeleteAphorismByIdController();
const getAphorismByUsernameController = new GetAphorismByUsernameController();
const updateAphorismLikeCountController = new UpdateAphorismLikeCountController();

// routes

aphorismRouter.get("/aphorisms/:username", ensureAuthenticated, getAphorismByUsernameController.handle)

aphorismRouter.post("/aphorisms", ensureAuthenticated, createAphorismController.handle);

aphorismRouter.put("/aphorisms/like/:aphorism", ensureAuthenticated, updateAphorismLikeCountController.handle)

aphorismRouter.delete("/aphorisms/:aphorism", ensureAuthenticated, deleteAphorismByIdController.handle)

export { aphorismRouter };