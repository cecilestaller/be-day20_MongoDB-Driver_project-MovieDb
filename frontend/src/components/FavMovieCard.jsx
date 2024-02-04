import { useState } from "react";
import popcorn from "../assets/popcorn.jpg";
import { Link, useNavigate } from "react-router-dom";
import "./FavMovieCard.scss";

const FavMovieCard = ({ singleFavMovie }) => {
  const navigate = useNavigate();
  const [imgLoad, setImgLoad] = useState(false);
  const defaultPoster = popcorn;
  const [isFavMovie, setIsFavMovie] = useState(true);

  //   Versuch Url zu fixen:
  let posterURL;
  const fixedPosterUrl = (url) => {
    if (String(url).includes("https")) return String(url);
    return String(url).replace("http", "https");
  };
  posterURL = fixedPosterUrl(singleFavMovie?.poster);

  // ---> Falls Link kaputt, wird deaultPoster als src eingesetzt:
  function handleImageLoaded() {
    setImgLoad(true);
  }

  function handleImageError(e) {
    e.target.src = defaultPoster;
  }

  return (
    <Link to={`/movie/${singleFavMovie._id}`} state={{ isFavMovie }}>
      <article className="movieCard_wrap">
        <img
          src={posterURL || defaultPoster}
          alt={singleFavMovie.title}
          onLoad={handleImageLoaded}
          onError={handleImageError}
        />
        <h3 className="mC_title">{singleFavMovie.title}</h3>
        <p className="mC_director">{singleFavMovie.director}</p>
      </article>
    </Link>
  );
};

export default FavMovieCard;
