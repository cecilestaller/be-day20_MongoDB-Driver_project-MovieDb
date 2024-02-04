import { FavoritesDAO } from "../data-access/index.js";

export async function getAllFavorites() {
  const favorites = await FavoritesDAO.findAll();
  return favorites;
}
