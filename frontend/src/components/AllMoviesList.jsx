import MovieCard from "./MovieCard";
import "./AllMoviesList.scss";

const AllMoviesList = ({ movies, errorMessage }) => {
  // console.log(movies);
  return (
    <section className="movieList_wrap">
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        movies.map((movie) => <MovieCard movie={movie} key={movie._id} />)
      )}
    </section>
  );
};

export default AllMoviesList;
