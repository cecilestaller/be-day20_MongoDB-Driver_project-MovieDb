// ===> CONNECTION zu MongoDB herstellen:

import { Db, MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

let _db; // singleton pattern, damit connection nur 1x hergestellt wird

export async function getDb() {
  if (_db) return _db;

  await client.connect(); // -> Verbindung wird hergestellt
  const db = client.db("video"); // = use video (richtige database wird ausgewählt)
  _db = db; // db zwischengespeichert für nächsten Aufruf
  return db;
}
