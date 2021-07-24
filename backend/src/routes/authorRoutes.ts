import { Router } from "express";
import { CreateAuthorController } from "../controllers/CreateAuthorController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const authorRouter = Router();

// controllers

const createAuthorController = new CreateAuthorController();

// routes

authorRouter.post("/author", ensureAuthenticated, createAuthorController.handle);

export { authorRouter };