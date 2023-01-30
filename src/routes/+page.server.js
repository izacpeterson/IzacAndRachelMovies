import { newMovie, getMovies, update, deleteMovie } from "../lib/server/db";
export async function load() {
  let movies = await getMovies();
  return { movies };
}
export const actions = {
  addMovie: async ({ request }) => {
    const data = await request.formData();
    let movie = data.get("movie");
    newMovie(movie);
  },
  updateMovie: async ({ request }) => {
    const data = await request.formData();
    let movie = data.get("movie");
    let status = data.get("status");
    update(movie, status);
  },
  deleteMovie: async ({ request }) => {
    const data = await request.formData();
    let movie = data.get("movie");
    deleteMovie(movie);
  },
};
