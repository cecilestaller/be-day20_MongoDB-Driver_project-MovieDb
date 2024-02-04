import { FavoritesService } from "../services/index.js";

export async function deleteFavoriteByIdCtrl(req, res) {
  try {
    const movieId = req.params.movieId;
    const result = await FavoritesService.removeMovieFromFavorites(movieId);
    res.json({ success: true, result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "Could not delete Movie from Favs",
    });
  }
}
