import { Router } from "express";
import { CreateAuthorController } from "../controllers/CreateAuthorController";
import { GetAllAuthorsController } from "../controllers/GetAllAuthorsController";
import { GetAphorismByAuthorController } from "../controllers/GetAphorismByAuthorController";
import { GetAuthorDetailsController } from "../controllers/GetAuthorDetailsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const authorRouter = Router();

// controllers

const createAuthorController = new CreateAuthorController();
const getAllAuthorsController = new GetAllAuthorsController();
const getAphorismByAuthorController = new GetAphorismByAuthorController();
const getAuthorDetailsController = new GetAuthorDetailsController();

// routes

authorRouter.post("/author", ensureAuthenticated, createAuthorController.handle);

authorRouter.get("/authors", ensureAuthenticated, getAllAuthorsController.handle);
authorRouter.get("/author/:authorname", ensureAuthenticated, getAuthorDetailsController.handle)
authorRouter.get("/author/:authorname/aphorism", ensureAuthenticated, getAphorismByAuthorController.handle)

export { authorRouter };