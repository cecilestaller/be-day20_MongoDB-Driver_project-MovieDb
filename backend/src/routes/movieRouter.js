import express from "express";
import { MovieController } from "../controllers/index.js";

const movieRouter = express.Router();

movieRouter.get("/", MovieController.getMovies);

movieRouter.get("/:movieId", MovieController.getOneMovie);

movieRouter.post("/", MovieController.postMovie);

export default movieRouter;
