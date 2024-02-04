import { getDb } from "./getDb.js";
import { ObjectId } from "mongodb";
import { makeMovie } from "../domain/Movie.js";

export async function findAll() {
  const db = await getDb();
  const favoritesArray = await db.collection("favorites").find().toArray();
  if (!Array.isArray(favoritesArray))
    throw new Error("find result must be array");
  return favoritesArray.map((singleMovieObj) => makeMovie(singleMovieObj));
}

export async function insertOne(foundMovie) {
  const db = await getDb();
  const { acknowledged, insertedId } = await db
    .collection("favorites")
    .insertOne({ ...foundMovie });
  if (!acknowledged) return null;
  return makeMovie({ ...foundMovie });
}

export async function deleteById(movieId) {
  const db = await getDb();
  const deletedFavMovie = await db
    .collection("favorites")
    .findOneAndDelete({ _id: ObjectId.createFromHexString(movieId) });
  if (!deletedFavMovie) throw new Error("FavMovie doesn`t exist");
  return makeMovie(deletedFavMovie);
}
