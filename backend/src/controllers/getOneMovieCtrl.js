import { MovieService } from "../services/index.js";

export async function getOneMovieCtrl(req, res) {
  try {
    const movieId = req.params.movieId;
    const result = await MovieService.getMovieDetail(movieId);
    console.log(result);
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "could not retrieve Movie Details",
    });
  }
}
