import { MovieDAO } from "../data-access/index.js";
// ! evtl Favorites DAO importieren wenn ready

export async function getMovieDetail(movieId) {
  const foundMovie = await MovieDAO.findById(movieId);
  if (!foundMovie) throw new Error("could not find movie with _id: ", movieId);

  // * hier evtl noch FavoriteDAO implementieren bzw toggleFavorite? und FavoriteId mit returnen falls vorhanden...

  return {
    ...foundMovie,
  };
}
