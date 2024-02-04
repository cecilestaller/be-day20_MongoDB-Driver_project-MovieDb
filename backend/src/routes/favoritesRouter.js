import express from "express";
import { FavoritesController } from "../controllers/index.js";

const favoritesRouter = express.Router();

favoritesRouter.get("/", FavoritesController.getFavorites);

favoritesRouter.post("/", FavoritesController.postFavorite);

favoritesRouter.delete("/:movieId", FavoritesController.deleteFavorite);

export default favoritesRouter;
