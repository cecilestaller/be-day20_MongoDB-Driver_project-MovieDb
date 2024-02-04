import { FavoritesService } from "../services/index.js";

export async function getFavoritesCtrl(req, res) {
  try {
    const favorites = await FavoritesService.getAllFavorites();
    res.status(200).json({ success: true, result: favorites });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "Could not retrieve favorite movies",
    });
  }
}
