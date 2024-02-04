// DOMAIN - LAYER ==> Entität beschreiben!! (Wie soll ein MovieObject aussehen?)

export function makeMovie({
  _id,
  title,
  year,
  runtime,
  genres,
  director,
  plot,
  poster,
  imdb,
  type,
}) {
  // Überprüfen, ob genres ein Array ist

  if (genres && !Array.isArray(genres)) {
    throw new Error("genres must be array");
  }

  //* VALIDIERUNG von imdb in FE durchführen! Hier unnötig
  // if (imdb && (typeof imdb !== "object" || !imdb.rating)) {
  //   console.log(imdb);
  //   throw new Error("IMDB must be Object with a rating.");
  // }

  return {
    _id,
    title,
    year,
    runtime,
    genres,
    director,
    plot,
    poster,
    imdb: {
      rating: imdb?.rating, // ich greife nur drauf zu wenn imdb existiert
    },
    type,
  };
}
