import sqlite3 from "sqlite3";
const db = new sqlite3.Database("db.db");
db.run("CREATE TABLE IF NOT EXISTS movies(title TEXT, status TEXT, uuid TEXT)");

export function newMovie(title) {
  console.log(title);
  const uuid = crypto.randomUUID();
  db.run("INSERT INTO movies(title, status, uuid) VALUES(?, ?, ?)", [
    title,
    "new",
    uuid,
  ]);
}

export async function getMovies() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM movies", (err, rows) => {
      resolve(rows);
    });
  });
}

export async function update(uuid, status) {
  console.log(uuid, status);
  const newStatus = status == "new" ? "watched" : "new";
  console.log(newStatus);
  db.run("UPDATE movies SET status = ? WHERE uuid = ?", [newStatus, uuid]);
}

export async function deleteMovie(uuid) {
  db.run("DELETE FROM movies WHERE uuid = ?", [uuid]);
}
