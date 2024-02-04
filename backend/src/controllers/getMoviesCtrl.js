import { MovieService } from "../services/index.js";

export async function getMoviesCtrl(req, res) {
  try {
    const titleSearch = req.query.titleSearch;

    const existingMovies = await MovieService.getAllMovies({ titleSearch });

    res.status(200).json({ success: true, result: existingMovies });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        success: false,
        error: "failed to load movies",
        message: error.message || "could not retrieve movies",
      });
  }
}
