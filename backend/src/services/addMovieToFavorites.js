import { makeMovie } from "../domain/Movie.js";
import { MovieDAO, FavoritesDAO } from "../data-access/index.js";

export async function addMovieToFavorites(movieId) {
  // movie in movieDAO finden (findByID)
  // wenn movie existiert über FavoritesDAO in favorites collection inserten inserten
  const foundMovie = await MovieDAO.findById(movieId);
  if (!foundMovie)
    throw new Error("Recipe with id " + movieId + " doesn't exist");
  return FavoritesDAO.insertOne(foundMovie);
}
