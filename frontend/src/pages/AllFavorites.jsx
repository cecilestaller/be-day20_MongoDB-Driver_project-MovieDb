import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import FavMovieCard from "../components/FavMovieCard";
import { backendUrl } from "../api";
import "./AllFavorites.scss";

const AllFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  //   FETCH All Favorites
  useEffect(() => {
    fetch(`${backendUrl}/api/favorites`)
      .then((res) => res.json())
      .then(({ success, result, error, message }) => {
        if (success) {
          setFavorites(result);
        } else {
          console.log("Backend Error: ", error);
          setErrorMessage(message || "Problem exists loading movies...");
        }
      });
  }, []);
  // console.log(favorites);

  return (
    <>
      <Nav />
      <main>
        <h3 className="hl_red">My favorites</h3>
        <section className="favoritesList_wrap">
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            favorites.map((singleFavMovie) => (
              <FavMovieCard
                singleFavMovie={singleFavMovie}
                key={singleFavMovie._id}
              />
            ))
          )}
        </section>
      </main>
    </>
  );
};

export default AllFavorites;
