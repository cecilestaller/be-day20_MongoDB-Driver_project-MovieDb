import { useEffect, useState } from "react";
import { backendUrl } from "../api";
import AllMoviesList from "../components/AllMoviesList";
import Nav from "../components/Nav";
import "./Home.scss";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${backendUrl}/api/movies`)
      .then((res) => res.json())
      .then(({ success, result, error, message }) => {
        if (success) {
          setMovies(result);
        } else {
          console.log("Backend Error: ", error);
          setErrorMessage(message || "Problem exists loading movies...");
        }
      });
  }, []);

  //   console.log(movies);

  const fetchMovieBySearchTerm = async () => {
    try {
      const response = await fetch(
        `${backendUrl}/api/movies?titleSearch=${search}`
      );
      const { success, result, error } = await response.json();
      if (!success) throw error;
      return setMovies(result);
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovie = (event) => {
    event.preventDefault();
    console.log(search);
    fetchMovieBySearchTerm();
  };

  return (
    <main className="home_wrap">
      <Nav />
      <section className="hero_wrap">
        <h2 className="hl_red">MovieMagicDatabase has it all.</h2>
        <h2 className="hl_red">But you can still add to it.</h2>
      </section>
      <form className="searchMovie_form" onSubmit={searchMovie}>
        <input
          type="text"
          name=""
          id=""
          placeholder="search movie title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">SEARCH</button>
      </form>

      <AllMoviesList movies={movies} errorMessage={errorMessage} />
    </main>
  );
};

export default Home;
