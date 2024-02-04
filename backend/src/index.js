// ===========================
//    HAUPT - INDEX.js
// ==========================

// -- Imports:
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { movieRouter, favoritesRouter } from "./routes/index.js";

dotenv.config();

// -- Port definieren / ready für deployment:
const PORT = process.env.PORT || 3050;

// -- Server aufsetzen:
const app = express();

// -- MIDDLEWARES:
app.use(cors());
app.use(morgan("dev")); // logging middleware
app.use(express.json()); // body-parser
app.use("/download", express.static("data/images")); // download assets via static middleware (um bilder der hinzugefügten filme anzeigen zu lassen)

// TEST:
app.get("/", (req, res) => res.send("it works :)"));

// -- ROUTE - MIDDLEWARES (für Endpoints)
// 1.) "/api/movies"
app.use("/api/movies", movieRouter);
// 2.) "/api/favorites"
app.use("/api/favorites", favoritesRouter);

// -- LISTERNER aktivieren
app.listen(PORT, () => console.log("Server ready at Port: ", PORT));
