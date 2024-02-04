import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import AllFavorites from "./pages/AllFavorites";
import AddMovieForm from "./pages/AddMovieForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/myfavorites" element={<AllFavorites />} />
          <Route path="/add-new-movie" element={<AddMovieForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
