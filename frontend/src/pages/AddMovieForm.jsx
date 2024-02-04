import { useState } from "react";
import Nav from "../components/Nav";
import { backendUrl } from "../api";
import { useNavigate } from "react-router-dom";
import "./AddMovieForm.scss";

const AddMovieForm = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState([]);
  const [rating, setRating] = useState("");
  const [plot, setPlot] = useState("");

  const navigate = useNavigate();

  function addMovieToDb(e) {
    e.preventDefault();

    const missingValue = !title || !director || !year || !rating || !plot;
    if (missingValue) return;

    fetch(`${backendUrl}/api/movies`, {
      method: "POST",
      body: JSON.stringify({
        title,
        year,
        director,
        genres: [genre],
        imdb: { rating: rating },
        plot,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(({ success, result, error, message }) => {
        console.log({ success, result, error, message });
        navigate("/");
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <Nav />
      <form className="addMovie_form">
        <h3>Add your own movie</h3>
        <div className="form_input">
          <input
            type="text"
            name=""
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form_input">
          <input
            type="number"
            name=""
            id="year"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />
        </div>
        <div className="form_input">
          <input
            type="text"
            name=""
            id="director"
            placeholder="Director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </div>
        <div className="form_input">
          <input
            type="text"
            name=""
            id="genre"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className="form_input">
          <input
            type="number"
            name=""
            id="rating"
            placeholder="Imdb Rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />
        </div>
        <div className="form_input">
          <input
            type="text"
            name=""
            id="plot"
            placeholder="Story / Description"
            value={plot}
            onChange={(e) => setPlot(e.target.value)}
          />
        </div>
        <button onClick={addMovieToDb}>Submit</button>
      </form>
    </>
  );
};

export default AddMovieForm;
