import { useState } from "react";
import popcorn from "../assets/popcorn.jpg";
import { Link, useNavigate } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const [imgLoad, setImgLoad] = useState(false);
  const defaultPoster = popcorn;

  //   Versuch Url zu fixen:
  let posterURL;
  const fixedPosterUrl = (url) => {
    if (String(url).includes("https")) return String(url);
    return String(url).replace("http", "https");
  };
  posterURL = fixedPosterUrl(movie?.poster);

  // ALTERNATIVE:
  //   const posterURLArray = movie?.poster?.split(":");
  //   if (posterURLArray && posterURLArray[0] !== "https") {
  //     posterURLArray[0] = "https";
  //   }
  //   const posterURL = posterURLArray?.join(":");

  // ---> Falls Link kaputt, wird deaultPoster als src eingesetzt:
  function handleImageLoaded() {
    setImgLoad(true);
  }

  function handleImageError(e) {
    e.target.src = defaultPoster;
  }

  return (
    <Link to={`/movie/${movie._id}`}>
      <article className="movieCard_wrap">
        <img
          src={posterURL || defaultPoster}
          alt={movie.title}
          onLoad={handleImageLoaded}
          onError={handleImageError}
        />
        <h3 className="mC_title">{movie.title}</h3>
        <p className="mC_director">{movie.director}</p>
      </article>
    </Link>
  );
};

export default MovieCard;
