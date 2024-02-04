import { FavoritesDAO } from "../data-access/index.js";

export async function removeMovieFromFavorites(movieId) {
  const deletedFavorite = await FavoritesDAO.deleteById(movieId);
  return deletedFavorite;
}
