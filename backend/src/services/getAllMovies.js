import { MovieDAO } from "../data-access/index.js";

export async function getAllMovies(query) {
  const movies = await MovieDAO.findAll();
  const movieResults = movies.filter((movie) => {
    if (typeof query.titleSearch === "undefined") {
      return true;
    }
    return movie.title.toLowerCase().includes(query.titleSearch.toLowerCase());
  });
  return movieResults.map((singleMovieObj) => asMovieListItem(singleMovieObj));
}

function asMovieListItem(singleMovieObj) {
  return {
    _id: singleMovieObj._id,
    poster: singleMovieObj.poster,
    title: singleMovieObj.title,
    director: singleMovieObj.director,
  };
}
