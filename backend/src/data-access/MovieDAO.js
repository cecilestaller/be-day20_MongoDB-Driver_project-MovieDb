import { getDb } from "./getDb.js";
import { ObjectId } from "mongodb";
import { makeMovie } from "../domain/Movie.js";

// findAll Movies - function schreiben MIT connection zu Datenbank!

export async function findAll() {
  const db = await getDb(); // connection wird hergestellt
  const movieArray = await db.collection("movieDetails").find({}).toArray(); // alle movies sollen gefunden werden und zu Array umgewandelt
  return movieArray.map((singleMovieObj) => makeMovie(singleMovieObj));
}

export async function findById(movieId) {
  const db = await getDb();
  const movie = await db
    .collection("movieDetails")
    .findOne({ _id: ObjectId.createFromHexString(movieId) }); // movieId = String, ich suche aber nach der ObjectId in der DB deshalb umwandlung nötig!
  if (!movie) throw new Error("Movie doesn't exist");
  return makeMovie(movie);
}

export async function insertOne(movie) {
  const db = await getDb();
  const { acknowledged, insertedId } = await db
    .collection("movieDetails")
    .insertOne(movie);
  if (acknowledged) return makeMovie({ ...movie, _id: insertedId });
  else return null;
}
