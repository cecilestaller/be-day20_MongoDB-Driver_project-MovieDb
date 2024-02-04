import { MovieService } from "../services/index.js";

export async function postMovieCtrl(req, res) {
  try {
    const movieInfo = req.body;
    const result = await MovieService.addNewMovie(movieInfo);
    res.status(201).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "Could not add movie",
    });
  }
}
