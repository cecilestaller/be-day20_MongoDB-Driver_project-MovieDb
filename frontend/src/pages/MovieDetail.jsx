import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { backendUrl } from "../api";
import popcorn from "../assets/popcorn.jpg";
import Nav from "../components/Nav";
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [errMessage, setErrMessage] = useState(null);
  const [imgLoad, setImgLoad] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false); //!  state für conditional rendering des "add to favorites" bzw. "remove from favorites" button

  // const location = useLocation();
  // const { isFavMovie } = location.state;
  // console.log(isFavMovie);

  useEffect(() => {
    fetch(`${backendUrl}/api/movies/${movieId}`)
      .then((res) => res.json())
      .then(({ success, result, error, message }) => {
        if (!success) setErrMessage(message || "Problem loading the movie...");
        setMovie(result);
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(movie);

  //   ====> Fixing posterURL:
  const defaultPoster = popcorn;
  let posterURL;
  const fixedPosterUrl = (url) => {
    if (String(url).includes("https")) return String(url);
    return String(url).replace("http", "https");
  };
  posterURL = fixedPosterUrl(movie.poster);
  function handleImageLoaded() {
    setImgLoad(true);
  }

  function handleImageError(e) {
    e.target.src = defaultPoster;
  }

  // ADD Movie to FAVORITES function /w POST fetch
  function addToFavorites() {
    setIsFavorite(true);
    fetch(`${backendUrl}/api/favorites`, {
      method: "POST",
      body: JSON.stringify({ movieId }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(({ success, result, error, message }) => {
        console.log({ success, result, error, message });
      })
      .catch((error) => console.log(error));
  }
  // console.log(movieId + "is favorite: " + isFavorite);

  // REMOVE Movie from Favorites function /w DELETE fetch
  function removeFromFavorites() {
    setIsFavorite(false);
    fetch(`${backendUrl}/api/favorites/${movieId}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(({ success, result, error, message }) => {
        console.log({ success, result, error, message });
      })
      .catch((error) => console.log(error));
  }

  return (
    <main>
      <Nav />
      {errMessage ? (
        <p>{errMessage}</p>
      ) : (
        <section className="detail_wrap">
          <h3>{movie.title}</h3>
          <p className="yearAndDir">
            {movie.year} | {movie.director}
          </p>
          <button onClick={addToFavorites}>Add to Favorites</button>
          <button onClick={removeFromFavorites}>Remove from Favorites</button>
          <article className="outer_flex_wrap">
            <div className="left">
              <div className="img_wrapper">
                <img
                  src={posterURL || defaultPoster}
                  alt={movie.title}
                  onLoad={handleImageLoaded}
                  onError={handleImageError}
                />
              </div>
              <div className="rateAndDur">
                {/* <p>Rating: {movie.imdb.rating}</p> */}
                <p>Duration: {movie.runtime} min</p>
              </div>
            </div>
            <div className="right">
              <div>
                {movie?.genres?.map((singleGenre, index) => {
                  return (
                    <p className="genre" key={index}>
                      {singleGenre}
                    </p>
                  );
                })}
              </div>
              <h3>Story</h3>
              <p className="plot">{movie.plot}</p>
            </div>
          </article>
        </section>
      )}
    </main>
  );
};

export default MovieDetail;
