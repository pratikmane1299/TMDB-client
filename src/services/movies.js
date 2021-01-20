import { TMDB_API_KEY } from '../tmdb-api-key';

const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}`
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}`;

export async function getMovies(page) {
  const response = await fetch(`${API_URL}&page=${page}`)
  const data = await response.json();

  return data;
}

export async function searchMovies(query, page) {
  const response = await fetch(`${SEARCH_URL}&query=${query}&page=${page}`)
  const data = await response.json();

  return data;
}
