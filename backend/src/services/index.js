import { getAllMovies } from "./getAllMovies.js";
import { getMovieDetail } from "./getMovieDetail.js";
import { getAllFavorites } from "./getAllFavorites.js";
import { addMovieToFavorites } from "./addMovieToFavorites.js";
import { removeMovieFromFavorites } from "./removeMovieFromFavorites.js";
import { addNewMovie } from "./addNewMovie.js";

export const MovieService = {
  getAllMovies,
  getMovieDetail,
  addNewMovie,
};

export const FavoritesService = {
  getAllFavorites,
  addMovieToFavorites,
  removeMovieFromFavorites,
};
