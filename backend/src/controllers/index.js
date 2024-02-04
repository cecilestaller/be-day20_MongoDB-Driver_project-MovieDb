import { getMoviesCtrl } from "./getMoviesCtrl.js";
import { getOneMovieCtrl } from "./getOneMovieCtrl.js";
import { getFavoritesCtrl } from "./getFavoritesCtrl.js";
import { postFavoriteCtrl } from "./postFavoriteCtrl.js";
import { deleteFavoriteByIdCtrl } from "./deleteFavoriteCtrl.js";
import { postMovieCtrl } from "./postMovieCtrl.js";

export const MovieController = {
  getMovies: getMoviesCtrl,
  getOneMovie: getOneMovieCtrl,
  postMovie: postMovieCtrl,
};

export const FavoritesController = {
  getFavorites: getFavoritesCtrl,
  postFavorite: postFavoriteCtrl,
  deleteFavorite: deleteFavoriteByIdCtrl,
};
