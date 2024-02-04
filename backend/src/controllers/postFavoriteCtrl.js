import { FavoritesService } from "../services/index.js";

export async function postFavoriteCtrl(req, res) {
  try {
    const movieId = req.body.movieId;
    const result = await FavoritesService.addMovieToFavorites(movieId);
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "Could not create favorite Movie",
    });
  }
}
