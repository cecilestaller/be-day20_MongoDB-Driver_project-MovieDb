import { MovieDAO } from "../data-access/index.js";
import { makeMovie } from "../domain/Movie.js";

export async function addNewMovie(movieInfo) {
  const movie = makeMovie(movieInfo);
  return MovieDAO.insertOne(movie);
}
