import { Router } from "express";
import { CreateAuthorController } from "../controllers/CreateAuthorController";
import { DeleteAuthorController } from "../controllers/DeleteAuthorController";
import { GetAllAuthorsController } from "../controllers/GetAllAuthorsController";
import { GetAphorismByAuthorController } from "../controllers/GetAphorismByAuthorController";
import { GetAuthorDetailsController } from "../controllers/GetAuthorDetailsController";
import { UpdateAuthorDetailsController } from "../controllers/UpdateAuthorDetailsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const authorRouter = Router();

// controllers

const createAuthorController = new CreateAuthorController();
const deleteAuthorController = new DeleteAuthorController();
const getAllAuthorsController = new GetAllAuthorsController();
const getAphorismByAuthorController = new GetAphorismByAuthorController();
const getAuthorDetailsController = new GetAuthorDetailsController();
const updateAuthorDetailsController = new UpdateAuthorDetailsController();

// routes

authorRouter.post("/author", ensureAuthenticated, createAuthorController.handle);

authorRouter.get("/authors", ensureAuthenticated, getAllAuthorsController.handle);
authorRouter.get("/author/:authorname", getAuthorDetailsController.handle)
authorRouter.get("/author/:authorname/aphorism", ensureAuthenticated, getAphorismByAuthorController.handle)

authorRouter.put('/author', ensureAuthenticated, updateAuthorDetailsController.handle)

authorRouter.delete('/authors/:id', ensureAuthenticated, deleteAuthorController.handle)

export { authorRouter };